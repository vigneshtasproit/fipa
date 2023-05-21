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
import com.fipa.dto.MasterCpfContribRates;
import com.fipa.service.ClientService;
import com.fipa.service.MasterCpfService;
import com.fipa.util.FipaConstant;
import com.fipa.util.FipaDateUtils;
import com.fipa.util.FipaUtils;
import com.fipa.util.TokenHelper;

@Controller
public class MasterCpfContribController {
	final Logger logger = LoggerFactory.getLogger(MasterCpfContribController.class);

	@RequestMapping(value="/MasterCPFContribution.do")
	public String masterCPFAccType(ModelMap model,HttpServletRequest request,HttpServletResponse response){
		logger.info(" ------> Inside MasterCPFContribution Method "); 
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
		
		model.addAttribute("screenname","cpfContribution");		
		
		return "mastercpfcontribution";
	}
	
	
	
	@RequestMapping(value="/CpfContributionSave.do" )
	public String saveCpfContrbProfile(ModelMap model,HttpServletRequest request,HttpServletResponse response){
	

		logger.info(" ------> Inside saveCpfContrbProfile Method ");
		  
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
		
//		if (!TokenHelper.validToken(request)) {
//			return FipaConstant.RE_SUBMIT;
//        }
 
		MasterCpfService cpfserv       = new MasterCpfService();
		 
		Vector vectCpfContrbDetails = getCpfContrbDetails(request);		
		cpfserv.saveCpfContrbRateDetails(vectCpfContrbDetails,request);
		
		
		
		FipaUtils.setCPFScreenAttributes(model, request);	
 
        model.addAttribute("successMessage"," CPF Contribution Rate details saved successfully.");
        
        model.addAttribute("screenname","cpfContribution");
 		
		return "mastercpfcontribution";
 		
		
	}

private Vector getCpfContrbDetails(HttpServletRequest request) { 
	Vector vectCpfContrbDetails = new Vector();
	List insCpfContrbList = new ArrayList();
	List updCpfContrbList = new ArrayList();
	List delCpfContrbList = new ArrayList();
	
	HttpSession session = request.getSession(false);
	Map<String,String> sessMap = new HashMap<String,String>();
	sessMap = (HashMap<String, String>)session.getAttribute(FipaConstant.LOGGED_USER_INFO);
	
	

	String[] strArrCpfConMode = FipaUtils.getParamArrValue(request, "txtFldCpfConMode"); 
	String[] strArrCpfConId = FipaUtils.getParamArrValue(request, "contrId"); 
	String[] strArrCpfConEffFrm = FipaUtils.getParamArrValue(request, "effFrom");
	String[] strArrCpfConEffTo = FipaUtils.getParamArrValue(request, "effTo");
	String[] strArrCpfConAgeGrp = FipaUtils.getParamArrValue(request, "ageGrp");
	String[] strArrCpfConWageGrp = FipaUtils.getParamArrValue(request, "wageGrp"); 
	String[] strArrCpfConTotBasVal =FipaUtils.getParamArrValue(request, "totBaseValue");
	String[] strArrCpfConTotBasOn = FipaUtils.getParamArrValue(request, "totBaseOn");
	String[] strArrCpfConTotBonVal = FipaUtils.getParamArrValue(request, "totBonusValue");
	String[] strArrCpfConTotBonOn = FipaUtils.getParamArrValue(request, "totBonusOn");
	String[] strArrCpfConTotBonLess =FipaUtils.getParamArrValue(request, "totBonusLess");
	String[] strArrCpfConTotMaxLmt = FipaUtils.getParamArrValue(request, "totMaxLimit");
	String[] strArrCpfConEmpBasVal = FipaUtils.getParamArrValue(request, "empBaseVal");
	String[] strArrCpfConEmpBasOn = FipaUtils.getParamArrValue(request, "empBaseOn");
	String[] strArrCpfConEmpBonVal = FipaUtils.getParamArrValue(request, "empBonusValue");
	String[] strArrCpfConEmpBonOn = FipaUtils.getParamArrValue(request, "empBonusOn");
	String[] strArrCpfConEmpBonLess = FipaUtils.getParamArrValue(request, "empBonusLess");
	String[] strArrCpfConEmpMaxLmt = FipaUtils.getParamArrValue(request, "empMaxLimit");
	String[] strArrCpfConRemarks =FipaUtils.getParamArrValue(request, "remarks");
	String[] strArrCpfConCrtdBy = FipaUtils.getParamArrValue(request, "crtdBy");
	String[] strArrCpfConCrtdDate = FipaUtils.getParamArrValue(request, "crtdDate");
	 
	String strLoggedUser = (String) sessMap.get(FipaConstant.LOGGED_USER_ID);
	
  
	
	if(strArrCpfConMode != null && strArrCpfConMode.length>0){
		
		for(int id=0;id<strArrCpfConMode.length;id++){
	  
			  
			double dblContBasVal = Double.parseDouble(FipaUtils.nullOrBlank(strArrCpfConTotBasVal[id]) ? "0" :strArrCpfConTotBasVal[id]);
			double dblContBonVal = Double.parseDouble(FipaUtils.nullOrBlank(strArrCpfConTotBonVal[id]) ? "0" :strArrCpfConTotBonVal[id]);
			double dblContBonLess = Double.parseDouble(FipaUtils.nullOrBlank(strArrCpfConTotBonLess[id]) ? "0" :strArrCpfConTotBonLess[id]);
			double dblConeBasVal = Double.parseDouble(FipaUtils.nullOrBlank(strArrCpfConEmpBasVal[id]) ? "0" :strArrCpfConEmpBasVal[id]);
			double dblConeBonVal = Double.parseDouble(FipaUtils.nullOrBlank(strArrCpfConEmpBonVal[id]) ? "0" :strArrCpfConEmpBonVal[id]);
			double dblConteBonLess = Double.parseDouble(FipaUtils.nullOrBlank(strArrCpfConEmpBonLess[id]) ? "0" :strArrCpfConEmpBonLess[id]);
			

			Date effDateFrm = FipaUtils.nullOrBlank(strArrCpfConEffFrm[id]) ?null :FipaDateUtils.convertStringToDate(strArrCpfConEffFrm[id]) ;
			Date effDateTo = FipaUtils.nullOrBlank(strArrCpfConEffTo[id]) ? null :FipaDateUtils.convertStringToDate(strArrCpfConEffTo[id]) ;
			  
			
			Date crtdDate = FipaUtils.nullOrBlank(strArrCpfConCrtdDate[id]) ? new Date() :FipaDateUtils.convertStringToDate(strArrCpfConCrtdDate[id]) ;
 
			 
			if(strArrCpfConMode[id].equalsIgnoreCase(FipaConstant.INSERT_MODE)){
				insCpfContrbList.add(new MasterCpfContribRates(null,effDateFrm,effDateTo,strArrCpfConAgeGrp[id],strArrCpfConWageGrp[id],dblContBasVal,strArrCpfConTotBasOn[id],dblContBonVal,strArrCpfConTotBonOn[id],dblContBonLess,strArrCpfConTotMaxLmt[id],dblConeBasVal,strArrCpfConEmpBasOn[id],dblConeBonVal,strArrCpfConEmpBonOn[id],dblConteBonLess,strArrCpfConEmpMaxLmt[id],strArrCpfConRemarks[id],strLoggedUser,new Date()));
 
			}
			
			if(strArrCpfConMode[id].equalsIgnoreCase(FipaConstant.UPDATE_MODE)){ 
				updCpfContrbList.add(new MasterCpfContribRates(strArrCpfConId[id],effDateFrm,effDateTo,strArrCpfConAgeGrp[id],strArrCpfConWageGrp[id],dblContBasVal,strArrCpfConTotBasOn[id],dblContBonVal,strArrCpfConTotBonOn[id],dblContBonLess,strArrCpfConTotMaxLmt[id],dblConeBasVal,strArrCpfConEmpBasOn[id],dblConeBonVal,strArrCpfConEmpBonOn[id],dblConteBonLess,strArrCpfConEmpMaxLmt[id],strArrCpfConRemarks[id],strLoggedUser,crtdDate));
	 
			}
			
			if(strArrCpfConMode[id].equalsIgnoreCase(FipaConstant.DELETE_MODE)){
				delCpfContrbList.add(new MasterCpfContribRates(strArrCpfConId[id],effDateFrm,effDateTo,strArrCpfConAgeGrp[id],strArrCpfConWageGrp[id],dblContBasVal,strArrCpfConTotBasOn[id],dblContBonVal,strArrCpfConTotBonOn[id],dblContBonLess,strArrCpfConTotMaxLmt[id],dblConeBasVal,strArrCpfConEmpBasOn[id],dblConeBonVal,strArrCpfConEmpBonOn[id],dblConteBonLess,strArrCpfConEmpMaxLmt[id],strArrCpfConRemarks[id],strLoggedUser,crtdDate));
			}
			
			
		}
	}
	
	
	vectCpfContrbDetails.add(insCpfContrbList);
	vectCpfContrbDetails.add(updCpfContrbList);
	vectCpfContrbDetails.add(delCpfContrbList);
	
	return vectCpfContrbDetails;
  	}


}
