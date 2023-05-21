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
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.fipa.dto.FnaDependantDets;
import com.fipa.dto.FnaSelfspouseDets;
import com.fipa.dto.MasterCpfAcctype;
import com.fipa.dto.MasterCpflifePayout;
import com.fipa.service.ClientService;
import com.fipa.service.MasterCpfService;
import com.fipa.util.FipaConstant;
import com.fipa.util.FipaDateUtils;
import com.fipa.util.FipaUtils;
import com.fipa.util.TokenHelper;

@Controller
public class MasterCpfLifePayoutController {

	final Logger logger = LoggerFactory.getLogger(RetirementCpfSumController.class);
	
	@RequestMapping(value="/CPFLifePayout.do")
	public String lifePayoutCPFIncome(ModelMap model,HttpServletRequest request,HttpServletResponse response){
		logger.info(" ------> Inside lifePayoutCPFIncome Method "); 
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
		
		FipaUtils.setCPFLifePlanScreenAttributes(model, request);
		
		model.addAttribute("screenname","cpfLifePayout"); 
		return "cpflifepayout";
	}
	

	
	@RequestMapping(value="/CpfLifePayoutSave.do" )
	public String saveCpfLifePayoutProfile(ModelMap model,HttpServletRequest request,HttpServletResponse response){
	
		logger.info(" ------> Inside CpfLifePayoutSave Method ");
		  
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
		
		if (!TokenHelper.validToken(request)) {
//			return FipaConstant.RE_SUBMIT;
        }
		 
 
		MasterCpfService cpfserv   = new MasterCpfService();
		
		Vector vectCpfLifeDetails = getMasterCpfLifePayoutDetails(request);		
		cpfserv.saveCpfLifePayoutDets(vectCpfLifeDetails,request); 
		  
		FipaUtils.setCPFLifePlanScreenAttributes(model, request);
 
        model.addAttribute("successMessage"," CPF Payout details saved successfully.");
        model.addAttribute("screenname","CPFLifePayout");
 		
		return "cpflifepayout"; 		
		
	}
	
	
	private Vector getMasterCpfLifePayoutDetails(HttpServletRequest request) { 
		Vector vectMasterCpfLifePayoutDetails = new Vector();
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
		  
			 		
				/*Date crtdDate = FipaUtils.nullOrBlank(strArrCpfAccCrtdDate[id]) ? new Date() :FipaDateUtils.convertStringToDate(strArrCpfAccCrtdDate[id]) ;*/
				double dlbMonthly = Double.parseDouble(FipaUtils.nullOrBlank(strArrCpfMonthly[id]) ? "0" :strArrCpfMonthly[id]);
				double dlbAnnually = Double.parseDouble(FipaUtils.nullOrBlank(strArrCpfAnnually[id]) ? "0" :strArrCpfAnnually[id]);
				
				
				
			 if(strArrCpfLifePayMode[id].equalsIgnoreCase(FipaConstant.INSERT_MODE)){
				 insCpfLifePayList.add(new MasterCpflifePayout(null,strArrCpfPayoutYr[id],strArrCpfRetirmentSum[id],dlbMonthly,dlbAnnually));
					
					
				}
		 	
				if(strArrCpfLifePayMode[id].equalsIgnoreCase(FipaConstant.UPDATE_MODE)){ 
					updCpfLifePayList.add(new MasterCpflifePayout(strArrCpfLifePayId[id],strArrCpfPayoutYr[id],strArrCpfRetirmentSum[id],dlbMonthly,dlbAnnually));
	 
				}
	 		if(strArrCpfLifePayMode[id].equalsIgnoreCase(FipaConstant.DELETE_MODE)){
	 			delCpfLifePayList.add(new MasterCpflifePayout(strArrCpfLifePayId[id],strArrCpfPayoutYr[id],strArrCpfRetirmentSum[id],dlbMonthly,dlbAnnually));
				}
	 			
				
			}
		}
		
	vectMasterCpfLifePayoutDetails.add(insCpfLifePayList);
	vectMasterCpfLifePayoutDetails.add(updCpfLifePayList);
	vectMasterCpfLifePayoutDetails.add(delCpfLifePayList);

		return vectMasterCpfLifePayoutDetails;
	}
}
