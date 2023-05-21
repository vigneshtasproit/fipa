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
 
import com.fipa.dto.MasterCpfAllocRates;  
import com.fipa.service.MasterCpfService;
import com.fipa.util.FipaConstant;
import com.fipa.util.FipaDateUtils;
import com.fipa.util.FipaUtils; 

@Controller
public class MasterCpfAllocController {
	final Logger logger = LoggerFactory.getLogger(MasterCpfAllocController.class);

	@RequestMapping(value="/MasterCPFAllocRate.do")
	public String masterCPFAllocRate(ModelMap model,HttpServletRequest request,HttpServletResponse response){
		logger.info(" ------> Inside MasterCPFAllocRate Method "); 
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
		
		model.addAttribute("screenname","cpfAllocation");		
		
		 
		
		
		return "mastercpfAllocation";
	}
	
	
	@RequestMapping(value="/CpfAllocationSave.do" )
	public String saveCpfAllocProfile(ModelMap model,HttpServletRequest request,HttpServletResponse response){
	

		logger.info(" ------> Inside saveCpfAllocProfile Method ");
		  
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
		 
		Vector vectCpfAllocDetails = getCpfAllocDetails(request); 
		FipaUtils.setCPFScreenAttributes(model, request);
		cpfserv.saveCpfAllocRateDetails(vectCpfAllocDetails,request);
 
        model.addAttribute("successMessage"," CPF Allocation Rate details saved successfully.");
        model.addAttribute("screenname","cpfAllocation");		
        
        FipaUtils.setCPFScreenAttributes(model, request);
		
		
		 
		return "mastercpfAllocation";
 		
		
	}
	


private Vector getCpfAllocDetails(HttpServletRequest request) { 
	Vector vectCpfAllocDetails = new Vector();
	List insCpfAllocList = new ArrayList();
	List updCpfAllocList = new ArrayList();
	List delCpfAllocList = new ArrayList();
	
	HttpSession session = request.getSession(false);
	Map<String,String> sessMap = new HashMap<String,String>();
	sessMap = (HashMap<String, String>)session.getAttribute(FipaConstant.LOGGED_USER_INFO);
	
	

	String[] strArrCpfAllocMode = FipaUtils.nullObj(request.getParameterValues("txtFldCpfAllocMode")) ? null :  request.getParameterValues("txtFldCpfAllocMode");
	String[] strArrCpfAllocId = FipaUtils.nullObj(request.getParameterValues("txtFldCPFAllocId")) ? null : request.getParameterValues("txtFldCPFAllocId");
	String[] strArrCpfAllocEffFrom = FipaUtils.nullObj(request.getParameterValues("txtFldCPFAllocEffFrom")) ? null : request.getParameterValues("txtFldCPFAllocEffFrom");
	String[] strArrCpfAllocAgeGrp = FipaUtils.nullObj(request.getParameterValues("selCPFAllocAgeGrp")) ? null :  request.getParameterValues("selCPFAllocAgeGrp");
	String[] strArrCpfAllocAccType = FipaUtils.nullObj(request.getParameterValues("selCPFAllocAccType")) ? null :  request.getParameterValues("selCPFAllocAccType");
	String[] strArrCpfAllocRate = FipaUtils.nullObj(request.getParameterValues("txtFldCPFAllocRate")) ? null : request.getParameterValues("txtFldCPFAllocRate"); 
	String[] strArrCpfAllocRmks = FipaUtils.nullObj(request.getParameterValues("txtFldCPFAllocRemarks")) ? null : request.getParameterValues("txtFldCPFAllocRemarks");
	String[] strArrCpfAllocCrdtBy = FipaUtils.nullObj(request.getParameterValues("txtFldCPFCreatedBy")) ? null : request.getParameterValues("txtFldCPFCreatedBy");
	String[] strArrCpfAllocCrdtDate = FipaUtils.nullObj(request.getParameterValues("txtFldCPFCreatedDate")) ? null : request.getParameterValues("txtFldCPFCreatedDate");
	
	 
	String strLoggedUser = (String) sessMap.get(FipaConstant.LOGGED_USER_ID);
	 
	if(strArrCpfAllocMode != null && strArrCpfAllocMode.length>0){
		
		for(int id=0;id<strArrCpfAllocMode.length;id++){
	 
			Date crtdDate = FipaUtils.nullOrBlank(strArrCpfAllocCrdtDate[id]) ? new Date() :FipaDateUtils.convertStringToDate(strArrCpfAllocCrdtDate[id]) ;
 		 
			if(strArrCpfAllocMode[id].equalsIgnoreCase(FipaConstant.INSERT_MODE)){
				insCpfAllocList.add(new MasterCpfAllocRates(null,strArrCpfAllocEffFrom[id],strArrCpfAllocAgeGrp[id],strArrCpfAllocAccType[id],strArrCpfAllocRate[id],strArrCpfAllocRmks[id],strLoggedUser,new Date(),null,null));
 
			}
			
			if(strArrCpfAllocMode[id].equalsIgnoreCase(FipaConstant.UPDATE_MODE)){ 
				updCpfAllocList.add(new MasterCpfAllocRates(strArrCpfAllocId[id],strArrCpfAllocEffFrom[id],strArrCpfAllocAgeGrp[id],strArrCpfAllocAccType[id],strArrCpfAllocRate[id],strArrCpfAllocRmks[id],strArrCpfAllocCrdtBy[id],crtdDate,strLoggedUser,new Date()));
 
			}
			
			if(strArrCpfAllocMode[id].equalsIgnoreCase(FipaConstant.DELETE_MODE)){
				delCpfAllocList.add(new MasterCpfAllocRates(strArrCpfAllocId[id],strArrCpfAllocEffFrom[id],strArrCpfAllocAgeGrp[id],strArrCpfAllocAccType[id],strArrCpfAllocRate[id],strArrCpfAllocRmks[id],strArrCpfAllocCrdtBy[id],crtdDate,strLoggedUser,new Date()));
			}
			
			
		}
	}
	
	
	vectCpfAllocDetails.add(insCpfAllocList);
	vectCpfAllocDetails.add(updCpfAllocList);
	vectCpfAllocDetails.add(delCpfAllocList);
	
	return vectCpfAllocDetails;
  	}



}
