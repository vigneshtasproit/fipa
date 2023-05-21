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

import com.fipa.dto.FnaFingoalsconcern;
import com.fipa.dto.FnaLoginpageMsg;
import com.fipa.dto.FnaSelfspouseDets;
import com.fipa.service.ClientService;
import com.fipa.service.MasterService;
import com.fipa.util.FipaConstant;
import com.fipa.util.FipaDateUtils;
import com.fipa.util.FipaUtils;
import com.fipa.util.TokenHelper;


@Controller
public class MasterQuotesController {
	final Logger logger = LoggerFactory.getLogger(MasterQuotesController.class);

	@RequestMapping(value="/MasterOuotes.do")
	public String masterQuotes(ModelMap model,HttpServletRequest request,HttpServletResponse response){
		logger.info(" ------> Inside masterQuotes Method ");
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
		
		FipaUtils.setQuotesScreenAttributes(model, request);
		
		model.addAttribute("screenname","quotes");		
		
		return "masterquotes"; 
		
	}
	
	@RequestMapping(value="/SaveMasterOuotes.do" )
	public String saveMasterOuotes(ModelMap model,HttpServletRequest request,HttpServletResponse response){
		logger.info(" ------> Inside saveMasterOuotes Method ");
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
		
		FipaUtils.setQuotesScreenAttributes(model, request);
		

		
		
		MasterService mastserv       = new MasterService();
		 
		Vector vectQuotesDetails     = getQuotesDetails(request);
		mastserv.saveQuotes(vectQuotesDetails,request);
		
		model.addAttribute("screenname","quotes");		
		
		return "masterquotes"; 
	}

	 
	private Vector getQuotesDetails(HttpServletRequest request) {
		
		Vector vectQuotesDetails = new Vector();
		List insQuotesList = new ArrayList();
		List updQuotesList = new ArrayList();
		List delQuotesList = new ArrayList();
		
		HttpSession session = request.getSession(false);
		Map<String,String> sessMap = new HashMap<String,String>();
		sessMap = (HashMap<String, String>)session.getAttribute(FipaConstant.LOGGED_USER_INFO);
		
		

		String[] strArrQuotesMode  = FipaUtils.getParamArrValue(request, "txtFldmasQuoteMode");
		String[] strArrQuotesId     = FipaUtils.getParamArrValue(request, "txtFldQuotesId");
		String[] strArrQuotesMsg   = FipaUtils.getParamArrValue(request, "txtFldLogMsg");
		String[] strArrQuotesAuth     = FipaUtils.getParamArrValue(request, "txtFldAuthor");  
//		String[] strArrQuotesWeek     = FipaUtils.getParamArrValue(request, "selWeekQte");  
		
		 
		
		if(strArrQuotesMode != null && strArrQuotesMode.length>0){
			
			for(int id=0;id<strArrQuotesMode.length;id++){
				  
				if(strArrQuotesId[id].equalsIgnoreCase(FipaConstant.EMPTY_STRING)){ 
					insQuotesList.add(new FnaLoginpageMsg(null,strArrQuotesMsg[id],strArrQuotesAuth[id],null,null,null)); 
				}else{
					updQuotesList.add(new FnaLoginpageMsg(strArrQuotesId[id],strArrQuotesMsg[id],strArrQuotesAuth[id],null,null,null));
				}
				 
			}
		}
		
		vectQuotesDetails.add(insQuotesList);
		vectQuotesDetails.add(updQuotesList);
		vectQuotesDetails.add(delQuotesList);
		

	return vectQuotesDetails;

	}

	
}
