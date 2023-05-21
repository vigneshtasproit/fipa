package com.fipa.controller;

  
import java.io.File;
import java.io.IOException;
import java.sql.Blob;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Vector;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

//import net.sf.json.JSONObject;


import org.hibernate.Hibernate;
import org.hibernate.Session;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.commons.CommonsMultipartFile;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import org.springframework.web.servlet.support.RequestContextUtils;

import com.fipa.dto.FnaAdvDeclare;
import com.fipa.dto.FnaApptypes; 
import com.fipa.dto.FnaAssetBusiandpersdets; 
import com.fipa.dto.FnaAttachments;
import com.fipa.dto.FnaAutoAlter;
import com.fipa.dto.FnaCashAtBank;
import com.fipa.dto.FnaChilddetails; 
import com.fipa.dto.FnaCpfBalanceDets;
import com.fipa.dto.FnaCpfDeductions;
import com.fipa.dto.FnaCpfMonthcontDets; 
import com.fipa.dto.FnaDependantDets;
import com.fipa.dto.FnaEstatePlan; 
import com.fipa.dto.FnaFingoalsconcern; 
import com.fipa.dto.FnaHealthinsInfo;
import com.fipa.dto.FnaInputinvestmentsDets;  
import com.fipa.dto.FnaLifeinsuranceBasicriders;
import com.fipa.dto.FnaLifeinsuranceChildedc;
import com.fipa.dto.FnaLifeinsuranceCoverages;
import com.fipa.dto.FnaLifeinsuranceDets;
import com.fipa.dto.FnaLifeinsuranceDisablebenfs;
import com.fipa.dto.FnaLifeinsuranceMvRet;
import com.fipa.dto.FnaLifeinsuranceNominees;
import com.fipa.dto.FnaOthareaconcern; 
import com.fipa.dto.FnaPropownDets;
import com.fipa.dto.FnaRecomFundDet;
import com.fipa.dto.FnaRecomPrdtplanDet;
import com.fipa.dto.FnaRecomReasons;
import com.fipa.dto.FnaRetireplanCpflife;
import com.fipa.dto.FnaRetireplanIncomeasset;
import com.fipa.dto.FnaRetireplanOthpayment;
import com.fipa.dto.FnaSavingsinvDets;
import com.fipa.dto.FnaSelfspouseDets; 
import com.fipa.dto.FnaSrs;
import com.fipa.dto.FnaSwtchrepFundDet;
import com.fipa.dto.FnaSwtchrepPlanDet;
import com.fipa.dto.FnaVehicleownDets;
import com.fipa.dto.MasterAnalysisTypes;
import com.fipa.dto.MasterCpfAcctype;
import com.fipa.service.AttachmentService;
import com.fipa.service.ClientService;
import com.fipa.service.MasterCpfService;
import com.fipa.util.ApplicationContextUtils;
import com.fipa.util.FipaConstant;
import com.fipa.util.FipaDateUtils;
import com.fipa.util.FipaUtils;
import com.fipa.util.PropContextUtils;
import com.fipa.util.TokenHelper;     

@Controller
public class ClientController {
	
	final Logger logger = LoggerFactory.getLogger(ClientController.class);
	
	
	@RequestMapping(value="/Menu.do", method = RequestMethod.GET )
	public String showMenu(ModelMap model,HttpServletRequest request,HttpServletResponse response,
			@RequestParam(value="l",required=false)String login){
		
		logger.info(" ------> inside menu Method");
		if(!FipaUtils.isSessionExpired(request)){
			logger.info(" ------> Inside SessionExpired Method ");
			return FipaConstant.SESSION_EXPIRED;				
		}
 
		Date systmdate = FipaUtils.isValidDB(null);
		 
		
		if(FipaUtils.checkNullVal(systmdate)){
			logger.info(" ------> Inside dbError Method ");
			return FipaConstant.DB_ERROR;				
		}//end of if
		
		
		

		
		if(login != null){
			FipaUtils.setScreenAttributes(model, request);			
			model.addAttribute("screenname","client");
			return "fipamenu";	
		}else{
			return "login";
		}	
		
	} 
 
	
	@RequestMapping(value="/NewProfile.do")
	public String newProfile(ModelMap model,HttpServletRequest request,HttpServletResponse response){
		logger.info(" ------> Inside NewProfile Method ");
		 
		if(!FipaUtils.isSessionExpired(request)){
			logger.info(" ------> Inside SessionExpired Method ");
			return FipaConstant.SESSION_EXPIRED;				
		}
		
		Date systmdate = FipaUtils.isValidDB(null);
		if(FipaUtils.checkNullVal(systmdate)){
			logger.info(" ------> Inside dbError Method ");
			return FipaConstant.DB_ERROR;				
		}//end of if
		
		
//		if (!TokenHelper.validToken(request)) {
//			return FipaConstant.RE_SUBMIT;
//        }
		
		ClientService service = new ClientService();
		service.setDefaultColor(request);
		
		
		FipaUtils.setScreenAttributes(model, request);
		model.addAttribute("screenname","client");
		
		
		request.setAttribute("NEW_PROFILE", "TRUE");
		return "fipamenu";	
		
	}

	
	@RequestMapping(value="/FileDownload.do")
	public String getFile(HttpServletRequest request, HttpServletResponse response)throws Exception{
		logger.info(" ------> Inside File Download Method ");	
		String strRet = "";
		AttachmentService attServ=new AttachmentService();		
		strRet = attServ.downloadAttachment(request,response);
		
		if(!FipaUtils.nullOrBlank(strRet) && strRet.equalsIgnoreCase("FILE_NOT_FOUND")){
			strRet =  FipaConstant.FILENOTFOUND;
		}else if(!FipaUtils.nullOrBlank(strRet) && strRet.equalsIgnoreCase("filefound")){
			strRet =  "filefound";
		}
		
		return strRet;
	}
	
	@RequestMapping(value="/SaveProfile.do" )
	public String saveProfile(ModelMap model,HttpServletRequest request,HttpServletResponse response,
			@RequestParam(required=false) CommonsMultipartFile[] document){
	 
		logger.info(" ------> Inside saveProfile Method ");	
		  /*System.out.println("========Save profile===========");*/
		String strMenuName = FipaUtils.getParamValue(request, "hTxtMenuName"); 

		HttpSession session = request.getSession(false);
		Map<String,String> sessMap = new HashMap<String,String>();		
		String strSessionId=(String)session.getAttribute("fipasess");
		
		
		if(!FipaUtils.isSessionExpired(request)){
			logger.info(" ------> Inside SessionExpired Method ");
			return FipaConstant.SESSION_EXPIRED ;				
		}
		
		Date sysdate = FipaUtils.isValidDB(null);
		if(FipaUtils.checkNullVal(sysdate)){
			logger.info(" ------> Inside dbError Method ");
			return  FipaConstant.DB_ERROR ;				
		}//end of if
		
		
//		if (!TokenHelper.validToken(request)) {
//			return FipaConstant.RE_SUBMIT;
//        }
//	
		
		ClientService clntserv       = new ClientService();
        
		JSONObject jsnKeyObj=clntserv.saveClientDetails(request,document);
		logger.info("jsnKeyObj-------------------------->"+jsnKeyObj);
		String strCustId = jsnKeyObj.has("fnaId") ? jsnKeyObj.getString("fnaId") :"";
		String strCustname = jsnKeyObj.has("selfName") ? jsnKeyObj.getString("selfName"):"";
		String strCustnric = jsnKeyObj.has("selfNric") ? jsnKeyObj.getString("selfNric"):"";
		String strFpmsCustId = jsnKeyObj.has("fpmsCustId") ? jsnKeyObj.getString("fpmsCustId"):"";
		List list = new ArrayList();
		list.add(0,strCustId);
		list.add(1,strCustname);
		list.add(2,strCustnric);
		list.add(3,strFpmsCustId);

		model.addAttribute("FIPA_CUSTID",list);
		model.addAttribute("FIPA_MENUVARBLE",strMenuName);
         
        FipaUtils.setScreenAttributes(model, request);
        
        model.addAttribute("successMessage","Client details saved successfully.");
        model.addAttribute("screenname","client"); 
		
		return "fipamenu";
//		String page = "redirect:/ProfileLoad.do?l="+strSessionId;
//		return page;
		
		
		
	}
	
	
	@RequestMapping(value="/ProfileLoad.do", method = RequestMethod.POST )
	public String profileLoadAfterSave(ModelMap model,HttpServletRequest request,HttpServletResponse response,
			@RequestParam(value="l",required=false)String login){
		
		logger.info(" ------> inside menu Method");
		if(!FipaUtils.isSessionExpired(request)){
			logger.info(" ------> Inside SessionExpired Method ");
			return FipaConstant.SESSION_EXPIRED;				
		}
 
		Date systmdate = FipaUtils.isValidDB(null);
		 
		
		if(FipaUtils.checkNullVal(systmdate)){
			logger.info(" ------> Inside dbError Method ");
			return FipaConstant.DB_ERROR;				
		}//end of if
		
		
		

		
		if(login != null){
			FipaUtils.setScreenAttributes(model, request);			
			model.addAttribute("screenname","client");
			return "fipamenu";	
		}else{
			return "login";
		}	
		
	} 
 

	
 


	@RequestMapping(value="/UpdateProfile.do")
	public String updateProfile( ModelMap model,HttpServletRequest request,HttpServletResponse response,
			@RequestParam(required=false) CommonsMultipartFile[] document){
		  
		/*System.out.println("========Update profile==========="); */
		
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
		
		
		HttpSession session        = request.getSession(false);		
		ClientService clntserv = new ClientService();
 
		String strCustId=clntserv.updateClientDetails(request, document );


        FipaUtils.setScreenAttributes(model, request);
        request.setAttribute("FIPA_CUSTID",strCustId);
        
        model.addAttribute("successMessage","Client details updated successfully.");
        model.addAttribute("screenname","client"); 
        
		return "fipamenu";
		
	}

	 
		
		
	@RequestMapping(value="/DeleteProfile.do")
	public String deleteProfile(ModelMap model,HttpServletRequest request,HttpServletResponse response,
			@RequestParam(required=false) CommonsMultipartFile[] document){   
		logger.info(" ------> Inside deleteProfile Method "); 
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
		
		
		ClientService clntserv = new ClientService();
		clntserv.deleteClientDetails(request );
		
		FipaUtils.setScreenAttributes(model, request);
		model.addAttribute("successMessage","Client details deleted successfully.");
		model.addAttribute("screenname","client");
		
		return "fipamenu";
	}
	








}
