package com.fipa.controller;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Vector;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.fipa.db.ClientDB;
import com.fipa.db.MasterDB;
import com.fipa.dbinterface.DBInterface;
import com.fipa.dto.FnaDependantDets;
import com.fipa.dto.FnaSelfspouseDets;
import com.fipa.dto.MasterRetSchemeLimits;
import com.fipa.dto.MasterCpflifePayout;
import com.fipa.service.ClientService;
import com.fipa.service.MasterCpfService;
import com.fipa.util.ApplicationContextUtils;
import com.fipa.util.FipaConstant;
import com.fipa.util.FipaDateUtils;
import com.fipa.util.FipaUtils;
import com.fipa.util.TokenHelper;

@Controller
public class RetirementCpfSumController {
	final Logger logger = LoggerFactory.getLogger(RetirementCpfSumController.class);
	
	@RequestMapping(value="/RetirementCPFSum.do")
	public String retirementCPFSum(ModelMap model,HttpServletRequest request,HttpServletResponse response){
		logger.info(" ------> Inside RetirementCPFSum Method "); 
		HttpSession session = request.getSession(false);
		Map<String,String> sessMap = new HashMap<String,String>();
		sessMap =(Map<String,String>)session.getAttribute(FipaConstant.LOGGED_USER_INFO);	
 
		if(!FipaUtils.isSessionExpired(request)){
			logger.info(" ------> Inside SessionExpired Method "); 
			return FipaConstant.SESSION_EXPIRED;				
		}
		
		Date sysdate = FipaUtils.isValidDB(null);
		if(FipaUtils.checkNullVal(sysdate)){
			logger.info(" ------> Inside dbError Method "); 
			return FipaConstant.DB_ERROR;				
		}//end of if 
		
		FipaUtils.setCPFScreenAttributes(model, request);
		
		model.addAttribute("screenname","cpfSum");		
		
		return "retirementcpfsum";
	}
	
	
	
	
	@RequestMapping(value="/RetirementCPFSumSave.do" )
	public String saveCpfLifePayoutProfile(ModelMap model,HttpServletRequest request,HttpServletResponse response){
	
		logger.info(" ------> Inside RetirementCPFSumSave Method ");
		  
		  MasterDB mastDB = new MasterDB(); 
			if(!FipaUtils.isSessionExpired(request)){
				logger.info(" ------> Inside SessionExpired Method ");
				return FipaConstant.SESSION_EXPIRED;				
			}
			
			Date sysdate = FipaUtils.isValidDB(null);
			if(FipaUtils.checkNullVal(sysdate)){
				logger.info(" ------> Inside dbError Method "); 
				return FipaConstant.DB_ERROR;				
			}//end of if
			
			if (!TokenHelper.validToken(request)) {
//				return FipaConstant.RE_SUBMIT;
	        }
			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
			DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
		 
			 Map<String,Object> objMapping  = new HashMap();
			 objMapping = FipaUtils.getRequestMapping(request);//bean
			 
			  
			 
			 MasterRetSchemeLimits retCpfSum = new MasterRetSchemeLimits();
	 
		
		 String strSchID        =  FipaUtils.getParamValue(request, "schId");  
		 
		 if(objMapping.containsKey(FipaConstant.MASTER_RET_SUM_DETS)){
			 retCpfSum = (MasterRetSchemeLimits)objMapping.get(FipaConstant.MASTER_RET_SUM_DETS); 
			 if(FipaUtils.nullOrBlank(strSchID)){ 
				   mastDB.saveRetSumDetails(retCpfSum); //save form type  
				 }
				 else
				 {
					 double id=Double.parseDouble(strSchID);
					 retCpfSum.setSchId(id);
					 mastDB.updateRetSumDetails(dao,retCpfSum);
					
				 }
		  
		 }  
 
        model.addAttribute("successMessage"," CPF Retirement Sum  details saved successfully.");
        model.addAttribute("screenname","CPFRetirementSum");
 		
		return "retirementcpfsum"; 		
		
	}
	
	
	
/*	private Vector getMasterCpfRetSumDetails(HttpServletRequest request) { 
		Vector vectMasterCpfREtSumDetails = new Vector();
		List insCpfLifePayList = new ArrayList();
		List updCpfLifePayList = new ArrayList();
		List delCpfLifePayList = new ArrayList();
		
		HttpSession session = request.getSession(false);
		Map<String,String> sessMap = new HashMap<String,String>();
		sessMap = (HashMap<String, String>)session.getAttribute(FipaConstant.LOGGED_USER_INFO);
		
		String[] strArrCpfLifePayMode = FipaUtils.getParamArrValue(request, "txtFldCpfLifePayMode"); 
		String[] strArrCpfLifePayId = FipaUtils.getParamArrValue(request, "txtFldCpfLifePayId"); 
		String[] strArrCpfRetirmentSum = FipaUtils.getParamArrValue(request, "selCPFLifeRtmntSum");
		String[] strArrCpfPayoutYr = FipaUtils.getParamArrValue(request, "txtFldCpfLifePayoutYr");
		String[] strArrCpfMonthly = FipaUtils.getParamArrValue(request, "txtFldCpfLifeMonthly");
		String[] strArrCpfAnnually = FipaUtils.getParamArrValue(request, "txtFldCpfLifeAnnualy");
		
		
		String strLoggedUser = (String) sessMap.get(FipaConstant.LOGGED_USER_ID);
		 
	if(strArrCpfLifePayMode != null && strArrCpfLifePayMode.length>0){
			
			for(int id=0;id<strArrCpfLifePayMode.length;id++){
		  
			 		
				Date crtdDate = FipaUtils.nullOrBlank(strArrCpfAccCrtdDate[id]) ? new Date() :FipaDateUtils.convertStringToDate(strArrCpfAccCrtdDate[id]) ;
				double dlbMonthly = Double.parseDouble(FipaUtils.nullOrBlank(strArrCpfMonthly[id]) ? "0" :strArrCpfMonthly[id]);
				double dlbAnnually = Double.parseDouble(FipaUtils.nullOrBlank(strArrCpfAnnually[id]) ? "0" :strArrCpfAnnually[id]);
				
				
				
			 if(strArrCpfLifePayMode[id].equalsIgnoreCase(FipaConstant.INSERT_MODE)){
				 insCpfLifePayList.add(new MasterCpflifePayout(strArrCpfLifePayId[id],strArrCpfRetirmentSum[id],strArrCpfPayoutYr[id],dlbMonthly,dlbAnnually));
					
					
				}
		 	
				if(strArrCpfLifePayMode[id].equalsIgnoreCase(FipaConstant.UPDATE_MODE)){ 
					updCpfLifePayList.add(new MasterCpflifePayout(strArrCpfLifePayId[id],strArrCpfRetirmentSum[id],strArrCpfPayoutYr[id],dlbMonthly,dlbAnnually));
	 
				}
	 		if(strArrCpfLifePayMode[id].equalsIgnoreCase(FipaConstant.DELETE_MODE)){
	 			delCpfLifePayList.add(new MasterCpflifePayout(strArrCpfLifePayId[id],strArrCpfRetirmentSum[id],strArrCpfPayoutYr[id],dlbMonthly,dlbAnnually));
				}
	 			
				
			}
		}
		
	vectMasterCpfLifePayoutDetails.add(insCpfLifePayList);
	vectMasterCpfLifePayoutDetails.add(updCpfLifePayList);
	vectMasterCpfLifePayoutDetails.add(delCpfLifePayList);

		return vectMasterCpfLifePayoutDetails;
	}*/
	
	
}
