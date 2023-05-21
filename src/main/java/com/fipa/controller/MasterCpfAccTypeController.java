package com.fipa.controller;


import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
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

import com.fipa.dto.FnaCpfBalanceDets;
import com.fipa.dto.FnaCpfDeductions;
import com.fipa.dto.FnaDependantDets;
import com.fipa.dto.FnaSelfspouseDets; 
import com.fipa.dto.MasterCpfAcctype;
import com.fipa.dto.MasterCpfContribRates;
import com.fipa.service.ClientService;
import com.fipa.service.MasterCpfService;
import com.fipa.util.FipaConstant;
import com.fipa.util.FipaDateUtils;
import com.fipa.util.FipaUtils;
import com.fipa.util.TokenHelper;

@Controller
public class MasterCpfAccTypeController {
	final Logger logger = LoggerFactory.getLogger(MasterCpfAccTypeController.class);
	
	
	@RequestMapping(value="/MasterCPFAccType.do")
	public String masterCPFAccType(ModelMap model,HttpServletRequest request,HttpServletResponse response){
		logger.info(" ------> Inside MasterCPFAccType Method "); 
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
		
		FipaUtils.setCPFAccTypeScreenAttributes(model, request);
		
		model.addAttribute("screenname","cpfAccType");		
		
		return "mastercpfaccount";
	}
	

	@RequestMapping(value="/CpfAccountTypeSave.do" )
	public String saveCpfAccTypeProfile(ModelMap model,HttpServletRequest request,HttpServletResponse response){
	
		logger.info(" ------> Inside CpfAccountTypeSave Method ");
		  
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
		
		Vector vectCpfAccDetails = getMasterCpfAccTypeDetails(request);		
		cpfserv.saveCpfAccTypeDets(vectCpfAccDetails,request); 
		  
		FipaUtils.setCPFAccTypeScreenAttributes(model, request);
 
        model.addAttribute("successMessage"," CPF Account Type details saved successfully.");
        model.addAttribute("screenname","cpfAccType");
 		
		return "mastercpfaccount"; 		
		
	}	
	

private Vector getMasterCpfAccTypeDetails(HttpServletRequest request) { 
	Vector vectMasterCpfAccTypeDetails = new Vector();
	List insCpfAccList = new ArrayList();
	List updCpfAccList = new ArrayList();
	List delCpfAccList = new ArrayList();
	
	HttpSession session = request.getSession(false);
	Map<String,String> sessMap = new HashMap<String,String>();
	sessMap = (HashMap<String, String>)session.getAttribute(FipaConstant.LOGGED_USER_INFO);
	
	String[] strArrCpfAccMode = FipaUtils.getParamArrValue(request, "txtFldCpfAccTypMode"); 
	String[] strArrCpfAccId = FipaUtils.getParamArrValue(request, "txtFldCpfAccTypeId"); 
	String[] strArrCpfAccType = FipaUtils.getParamArrValue(request, "txtFldCpfAccType");
	String[] strArrCpfCode = FipaUtils.getParamArrValue(request, "txtFldCpfAccCode");
	String[] strArrCpfAccCommenceAge = FipaUtils.getParamArrValue(request, "txtFldCpfAccCommenceAge");
	String[] strArrCpfAccWithdrawAge = FipaUtils.getParamArrValue(request, "txtFldCpfAccWithdrawAge");
	String[] strArrCpfAccCrtdBy = FipaUtils.getParamArrValue(request, "txtFldCpfAccCrtdBy");
	String[] strArrCpfAccCrtdDate = FipaUtils.getParamArrValue(request, "txtFldCpfAccCrtdDate");
	String[] strArrCpfAccTopuplmt = FipaUtils.getParamArrValue(request, "txtFldCpfAccTopUplimt");
	
	String strLoggedUser = (String) sessMap.get(FipaConstant.LOGGED_USER_ID);
	 
if(strArrCpfAccMode != null && strArrCpfAccMode.length>0){
		
		for(int id=0;id<strArrCpfAccMode.length;id++){
	  
		 		
			Date crtdDate = FipaUtils.nullOrBlank(strArrCpfAccCrtdDate[id]) ? new Date() :FipaDateUtils.convertStringToDate(strArrCpfAccCrtdDate[id]) ;
			double dlbAccTopuplimit = Double.parseDouble(FipaUtils.nullOrBlank(strArrCpfAccTopuplmt[id]) ? "0" :strArrCpfAccTopuplmt[id]);
			 
			
			
			
		 if(strArrCpfAccMode[id].equalsIgnoreCase(FipaConstant.INSERT_MODE)){
		 		insCpfAccList.add(new MasterCpfAcctype(null,strArrCpfAccType[id],strLoggedUser,new Date(),"",null,strArrCpfCode[id],strArrCpfAccCommenceAge[id],strArrCpfAccWithdrawAge[id],dlbAccTopuplimit,null,null));
				
				
			}
	 	
			if(strArrCpfAccMode[id].equalsIgnoreCase(FipaConstant.UPDATE_MODE)){ 
	 		updCpfAccList.add(new MasterCpfAcctype(strArrCpfAccId[id],strArrCpfAccType[id],null,crtdDate,strLoggedUser,new Date(),strArrCpfCode[id],strArrCpfAccCommenceAge[id],strArrCpfAccWithdrawAge[id],dlbAccTopuplimit,null,null));
 
			}
 		if(strArrCpfAccMode[id].equalsIgnoreCase(FipaConstant.DELETE_MODE)){
				delCpfAccList.add(new MasterCpfAcctype(strArrCpfAccId[id],strArrCpfAccType[id],null,crtdDate,strLoggedUser,new Date(),strArrCpfCode[id],strArrCpfAccCommenceAge[id],strArrCpfAccWithdrawAge[id],dlbAccTopuplimit,null,null));
			}
 			
			
		}
	}
	
vectMasterCpfAccTypeDetails.add(insCpfAccList);
vectMasterCpfAccTypeDetails.add(updCpfAccList);
vectMasterCpfAccTypeDetails.add(delCpfAccList);

	return vectMasterCpfAccTypeDetails;
}
	@RequestMapping(value="/CpfAccountTypeDelete.do" )
	public String deleteCpfAccTypes(ModelMap model,HttpServletRequest request,HttpServletResponse response){
		logger.info(" ------> Inside CpfAccountTypeDelete Method "); 
		  
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
			return FipaConstant.RE_SUBMIT;
        }
 
		MasterCpfService cpfserv   = new MasterCpfService();
		cpfserv.delCpfAccTypeDets(request);
		  
		FipaUtils.setCPFAccTypeScreenAttributes(model, request);		
 
        model.addAttribute("successMessage"," CPF Account Type details deleted successfully.");
        model.addAttribute("screenname","cpfAccType");
 		
		return "mastercpfaccount";
 		
		
	}

}
