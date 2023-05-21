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

import com.fipa.dto.MasterCpfIntrates;
import com.fipa.service.MasterCpfService;
import com.fipa.util.FipaConstant;
import com.fipa.util.FipaDateUtils;
import com.fipa.util.FipaUtils; 

@Controller
public class MasterCpfIntRatesController {
	final Logger logger = LoggerFactory.getLogger(MasterCpfIntRatesController.class);

	@RequestMapping(value="/MasterCPFIntRate.do")
	public String masterCPFIntRates(ModelMap model,HttpServletRequest request,HttpServletResponse response){
		logger.info(" ------> Inside masterCPFIntRates Method ");
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
		model.addAttribute("screenname","cpfInterestRate");	 
		
		
		return "mastercpfInterestRate";
	}
	
	
	
	@RequestMapping(value="/MasterCpfIntRateSave.do" )
	public String saveCpfProfile(ModelMap model,HttpServletRequest request,HttpServletResponse response){
	

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
		 
 
		MasterCpfService cpfserv       = new MasterCpfService();
		 
		Vector vectCpfDetails = getCpfDetails(request); 
		FipaUtils.setCPFScreenAttributes(model, request);
   
		cpfserv.saveCpfDetails(vectCpfDetails,request);
 
        model.addAttribute("successMessage","Master CPF details saved successfully."); 
        
        model.addAttribute("screenname","cpfInterestRate");		
		
		return "mastercpfInterestRate";
 		
		
	}


private Vector getCpfDetails(HttpServletRequest request) {
	 
		Vector vectCpfDetails = new Vector();
		List insCpfList = new ArrayList();
		List updCpfList = new ArrayList();
		List delCpfList = new ArrayList();
		
		HttpSession session = request.getSession(false);
		Map<String,String> sessMap = new HashMap<String,String>();
		sessMap = (HashMap<String, String>)session.getAttribute(FipaConstant.LOGGED_USER_INFO);
		
 	
	
		String[] strArrCpfMode = FipaUtils.nullObj(request.getParameterValues("txtFldCpfMode")) ? null :  request.getParameterValues("txtFldCpfMode");
		String[] strArrCpfId = FipaUtils.nullObj(request.getParameterValues("txtFldCpfIntId")) ? null : request.getParameterValues("txtFldCpfIntId");
		String[] strArrCpfAc = FipaUtils.nullObj(request.getParameterValues("selCpfAccount")) ? null : request.getParameterValues("selCpfAccount");
		String[] strArrCpfIntRate = FipaUtils.nullObj(request.getParameterValues("txtFldCpfIntRate")) ? null :  request.getParameterValues("txtFldCpfIntRate");
		String[] strArrCpfIntMth = FipaUtils.nullObj(request.getParameterValues("txtFldCpfIntMonth")) ? null :  request.getParameterValues("txtFldCpfIntMonth");
		String[] strArrCpfCrdtBy = FipaUtils.nullObj(request.getParameterValues("txtFldCpfCreatedBy")) ? null : request.getParameterValues("txtFldCpfCreatedBy"); 
		String[] strArrCpfCrdtDate = FipaUtils.nullObj(request.getParameterValues("txtFldCpfCreatedDate")) ? null : request.getParameterValues("txtFldCpfCreatedDate");
		
		 
		String strLoggedUser = (String) sessMap.get(FipaConstant.LOGGED_USER_ID);
		
		
		if(strArrCpfMode != null && strArrCpfMode.length>0){
			
			for(int id=0;id<strArrCpfMode.length;id++){

				 
				Date crtdDate = FipaUtils.nullOrBlank(strArrCpfCrdtDate[id]) ? new Date() :FipaDateUtils.convertStringToDate(strArrCpfCrdtDate[id]) ;
 
				
				if(strArrCpfMode[id].equalsIgnoreCase(FipaConstant.INSERT_MODE)){
					insCpfList.add(new MasterCpfIntrates(null,strArrCpfAc[id],strArrCpfIntRate[id],strArrCpfIntMth[id],strLoggedUser,new Date(),null,null));
 
				}
				
				if(strArrCpfMode[id].equalsIgnoreCase(FipaConstant.UPDATE_MODE)){ 
					updCpfList.add(new MasterCpfIntrates(strArrCpfId[id],strArrCpfAc[id],strArrCpfIntRate[id],strArrCpfIntMth[id],strArrCpfCrdtBy[id],crtdDate,strLoggedUser,new Date()));
 
				}
				
				if(strArrCpfMode[id].equalsIgnoreCase(FipaConstant.DELETE_MODE)){
					delCpfList.add(new MasterCpfIntrates(strArrCpfId[id],strArrCpfAc[id],strArrCpfIntRate[id],strArrCpfIntMth[id],strArrCpfCrdtBy[id],crtdDate,strLoggedUser,new Date()));
				}
				
				
			}
		}
		
		
		vectCpfDetails.add(insCpfList);
		vectCpfDetails.add(updCpfList);
		vectCpfDetails.add(delCpfList);
		
		return vectCpfDetails;

		
  
	}



}
