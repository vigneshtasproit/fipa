package com.fipa.controller;


import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.fipa.service.ClientService;
import com.fipa.service.LoginService;
import com.fipa.util.FipaConstant;
import com.fipa.util.FipaDateUtils;
import com.fipa.util.FipaUtils;





@Controller
public class LoginController {
	
	final Logger logger = LoggerFactory.getLogger(LoginController.class);
	
//	Action -1
	@RequestMapping(value="/Login.do")
	public String loginInit(ModelMap model,HttpServletRequest request, HttpServletResponse response){
		
		try{
		logger.info(" ------> Inside Login Method ");
		
		Date systmdate = FipaUtils.isValidDB(null);
		if(FipaUtils.checkNullVal(systmdate)){
			logger.info(" ------> Inside dbError Method ");
			return FipaConstant.DB_ERROR;				
		}//end of if
		
//		if(!FipaUtils.isSessionExpired(request)){
//			logger.info(" ------> Inside sessionExpired Method ");
//			return FipaConstant.SESSION_EXPIRED;				
//		}
		
		
		FipaUtils.setLoginMsgDets(model, request);
		
		model.addAttribute("command", "");
		}catch(Exception ex){
			logger.error("inside login init",ex);
		}
		return "login";		
	}
	
	@RequestMapping(value="/FipaHome.do")
	public String FipaHomeInit(ModelMap model,HttpServletRequest request, HttpServletResponse response){		
		
		logger.info(" ------> Inside FipaHome Method ");
		if(!FipaUtils.isSessionExpired(request)){
			logger.info(" ------> Inside sessionExpired Method ");
			return FipaConstant.SESSION_EXPIRED;				
		}
		
		Date systmdate = FipaUtils.isValidDB(null);
		if(FipaUtils.checkNullVal(systmdate)){
			logger.info(" ------> Inside dbError Method ");
			return FipaConstant.DB_ERROR;				
		}//end of if
		
		FipaUtils.setScreenAttributes(model, request);
		model.addAttribute("command", ""); 
		model.addAttribute("screenname","fipahome");
		return "fipahome";		
	}
	
//	Action-3
	@RequestMapping(value="/Link.do")
	public String LinkInit(ModelMap model,HttpServletRequest request, HttpServletResponse response){
		
		logger.info(" ------> Inside Link Method ");
		if(!FipaUtils.isSessionExpired(request)){
			logger.info(" ------> Inside sessionExpired Method ");
			return FipaConstant.SESSION_EXPIRED;				
		}
		
		Date systmdate = FipaUtils.isValidDB(null);
		if(FipaUtils.checkNullVal(systmdate)){
			logger.info(" ------> Inside dbError Method ");
			return FipaConstant.DB_ERROR;				
		}//end of if
		
		String page = "";
		HttpSession session = request.getSession(false);
		String strSessionId=(String)session.getAttribute("fipasess");
//		String strparam=request.getParameter("param");
		
//		FipaUtils.setScreenAttributes(model, request);REMOVED
//		request.setAttribute("param",strparam);
		page = "redirect:/Menu.do?l="+strSessionId;  
		return page;		
	}
	
	
	
//	Action - 2 
	@RequestMapping(value="/LoginValidate.do", method = RequestMethod.POST )
	public String loginValidate(ModelMap model,HttpServletRequest request,HttpServletResponse response){	
		
		logger.info(" ------> Inside loginValidate Method ");
		
		if(!FipaUtils.isSessionExpired(request)){
			logger.info(" ------> Inside SessionExpired Method ");
			return FipaConstant.SESSION_EXPIRED;				
		}
		
		Date systmdate = FipaUtils.isValidDB(null);
		if(FipaUtils.checkNullVal(systmdate)){
			logger.info(" ------> Inside dbError Method ");
			return FipaConstant.DB_ERROR;				
		}//end of if
		
		
		HttpSession session = request.getSession(false);
		Map<String,String> sessMap = new HashMap<String,String>();	 
		String strSessionId=(String)session.getAttribute("fipasess");
		String page = "";
		String strUserId = request.getParameter("txtFldUserId")!= null  ?  request.getParameter("txtFldUserId") : "";
		String strPwd = request.getParameter("txtFldUserPassword")!= null  ?  request.getParameter("txtFldUserPassword") : "";
		
//		FipaUser userparams = new FipaUser();
//		userparams.setTxtFldUserId(strUserId);
//		userparams.setTxtFldUserPassword(strPwd);
		
		LoginService serv = new LoginService();
//		List userList = serv.validateLogin(userparams);
		List<?> userList = serv.validateLogin(strUserId,strPwd);
		
		int userListSize = userList.size();
		boolean isValidUser = false;
		
		if(userListSize>0)isValidUser=true;
		
		if(isValidUser){
			
			List<?> appsAcsList = serv.validateAppsAccs(strUserId,"FIPA");
			int appsAcsSize= appsAcsList.size();
			String strAdvId = "";
			String hasColorPrvlg = "false",strAdminExists = "false";
			
			if(appsAcsSize > 0){
				
				List<?> appsAdminFuncList = serv.getFIPAAdminFunct(strUserId,"FIPA_ADMIN");
				
				if(appsAdminFuncList.size() > 0 ){
					
					strAdminExists = "true";
					
					Iterator colorite = appsAdminFuncList.iterator();
					
					while(colorite.hasNext()){
						Object[] fnDets = (Object[])colorite.next();
						
						String strFuncName = fnDets[3].toString();
						
						if(strFuncName.equalsIgnoreCase("COLOR_SELECTION")){
							hasColorPrvlg = "true";
						}
						
					}
					
				}
				
							
				Iterator<?> ite = userList.iterator();
				
				while(ite.hasNext()){
					
//					FipaUser userDets = (FipaUser)ite.next();
					Object[] userDets = (Object[])ite.next();
					
					strAdvId = userDets[2].toString();
					session.setAttribute(FipaConstant.LOGGED_USER_ID,userDets[0]);
					session.setAttribute(FipaConstant.LOGGED_PASSWORD,userDets[11]);
					session.setAttribute(FipaConstant.LOGGED_USER_ADVSTFINITIAL, userDets[4].toString());
					
					sessMap.put(FipaConstant.LOGGED_USER_ID, userDets[0].toString());		
					sessMap.put(FipaConstant.LOGGED_USER_ADVSTFID,userDets[2].toString());
					sessMap.put(FipaConstant.LOGGED_USER_ADVSTFNAME, userDets[3].toString());
					sessMap.put(FipaConstant.LOGGED_USER_ADVSTFINITIAL, userDets[4].toString());					
					sessMap.put(FipaConstant.LOGGED_USER_STFTYPE, userDets[5].toString());
					sessMap.put(FipaConstant.LOGGED_USER_STFTYPE_MNEM, userDets[6].toString());
					sessMap.put(FipaConstant.LOGGED_SYSDATE,FipaDateUtils.formatDate((Date)userDets[9]));
					sessMap.put(FipaConstant.LOGGED_USER_MGRFLAG,userDets[10].toString());
					sessMap.put(FipaConstant.LOGGED_PASSWORD,userDets[11].toString());
					sessMap.put(FipaConstant.LOGGED_DESIGNATION,userDets[6].toString());
					sessMap.put(FipaConstant.LOGGED_DIST_ID,userDets[12].toString());
					sessMap.put(FipaConstant.LOGGED_DIST_NAME,userDets[13].toString());
					

					sessMap.put("COLOR_CHNG_PRVLG",hasColorPrvlg);
				}		
				
				
				String strSkinColor =  "",strLastLogin = "", strCurrLogin = "";
			 	List userProfList = serv.insertLoginProfile(strUserId,strAdvId,strAdminExists);
			 	if(userProfList.size()>0){
			 		Iterator proite =userProfList.iterator();
			 		while(proite.hasNext()){
				 		Object[] userDets = (Object[])proite.next();
				 		
				 		strSkinColor = FipaUtils.nullOrBlank(userDets[0].toString())?"":userDets[0].toString();
				 		strCurrLogin = FipaUtils.nullOrBlank(userDets[1].toString())?"":userDets[1].toString();
				 		strLastLogin = FipaUtils.nullOrBlank(userDets[2].toString())?"":userDets[2].toString();
				 	}	
			 	}
			 	
			 	if(strAdminExists.equalsIgnoreCase("FALSE")){
			 		
			 		
//			 		List nonAdminColorList = serv.getFIPAAdminDefltColor(null, strUserId, strAdvId);
//			 		Iterator colorite = nonAdminColorList.iterator();
//			 		
//			 		
//			 		while(colorite.hasNext()){
//			 			
//			 			String colorDets = (String)colorite.next();
//			 			strSkinColor = FipaUtils.nullOrBlank(colorDets)?"":colorDets;
//			 			
//			 		}
			 	}
			 	
			 	
			 	
			 	
			 	sessMap.put("SKIN_COLOR",strSkinColor);
			 	sessMap.put("CURR_LOGIN",strCurrLogin);
			 	sessMap.put("LAST_LOGIN",strLastLogin);
			 	
				 
			 	session.setAttribute(FipaConstant.LOGGED_USER_INFO, sessMap);
//				FipaUtils.setScreenAttributes(model, request);
				
				
//				page = "fipahome";
				page = "redirect:/Menu.do?l="+strSessionId;
				
			}else{
				
				FipaUtils.setLoginMsgDets(model, request);
				model.addAttribute("message", " FIPA - Application Access Denied! ");
				page = "login";

				
			}
			
			
			  
			
		}else{
			
			FipaUtils.setLoginMsgDets(model, request);
			model.addAttribute("message", " Invalid User Id / Password! ");
			page = "login";
		}
		
		return page;
	}
	
	

//	Action - 3 
	@RequestMapping(value="/APSValidate.do" , method = RequestMethod.GET)
	public String APSValidate(ModelMap model,HttpServletRequest request,HttpServletResponse response){	
		 
		logger.info(" ------> Inside APSValidate Method ");
		
		if(!FipaUtils.isSessionExpired(request)){
			logger.info(" ------> Inside SessionExpired Method ");
			return FipaConstant.SESSION_EXPIRED;				
		}
		
		Date systmdate = FipaUtils.isValidDB(null);
		if(FipaUtils.checkNullVal(systmdate)){
			logger.info(" ------> Inside dbError Method ");
			return FipaConstant.DB_ERROR;				
		}//end of if
		
		
		HttpSession session = request.getSession(false);
		Map<String,String> sessMap = new HashMap<String,String>();	 
//		String strSessionId=(String)session.getAttribute("fipasess");
		String page = "";
		String strAdvId = request.getParameter("txtFldAdvId")!= null  ?  request.getParameter("txtFldAdvId") : "";
 
		LoginService serv = new LoginService(); 
		List<?> userList = serv.validateAPSLogin(strAdvId);
		
		int userListSize = userList.size();
		boolean isValidUser = false;
		 
		
		if(userListSize>0)isValidUser=true;
		
		if(isValidUser){
			
			Iterator<?> ite = userList.iterator();
			
			while(ite.hasNext()){
				
//				FipaUser userDets = (FipaUser)ite.next();
				Object[] userDets = (Object[])ite.next();
				session.setAttribute(FipaConstant.LOGGED_USER_ID,userDets[0]);
				session.setAttribute(FipaConstant.LOGGED_PASSWORD,userDets[11]);
				sessMap.put(FipaConstant.LOGGED_USER_ID, userDets[0].toString());		
				sessMap.put(FipaConstant.LOGGED_USER_ADVSTFID,userDets[2].toString());
				sessMap.put(FipaConstant.LOGGED_USER_ADVSTFNAME, userDets[3].toString());
				sessMap.put(FipaConstant.LOGGED_USER_ADVSTFINITIAL, userDets[4].toString());
				session.setAttribute(FipaConstant.LOGGED_USER_ADVSTFINITIAL, userDets[4].toString());
				sessMap.put(FipaConstant.LOGGED_USER_STFTYPE, userDets[5].toString());
				sessMap.put(FipaConstant.LOGGED_USER_STFTYPE_MNEM, userDets[6].toString());
				sessMap.put(FipaConstant.LOGGED_SYSDATE,FipaDateUtils.formatDate((Date)userDets[9]));
				sessMap.put(FipaConstant.LOGGED_USER_MGRFLAG,userDets[10].toString());
				sessMap.put(FipaConstant.LOGGED_PASSWORD,userDets[11].toString());
 
			}		
			
			session.setAttribute(FipaConstant.LOGGED_USER_INFO, sessMap);			 
			 
//			FipaUtils.setScreenAttributes(model, request);
			
			
//			page = "fipahome";
			page = "redirect:/Menu.do";  
			
		}else{
			
			FipaUtils.setLoginMsgDets(model, request);
			model.addAttribute("message", " Invalid User Id / Password! ");
			page = "login";
		}
		
		return page;
	}
	
	@RequestMapping(value="/Logout.do",method = RequestMethod.POST)	
	public String logout(ModelMap model,HttpServletRequest request,HttpServletResponse response){
		
		logger.info(" ------> Inside logout Method "); 
		
//		if(!FipaUtils.isSessionExpired(request)){
//			logger.info(" ------> Inside SessionExpired Method "); 
//			return FipaConstant.SESSION_EXPIRED;				
//		}
		
		Date systmdate = FipaUtils.isValidDB(null);
		if(FipaUtils.checkNullVal(systmdate)){
			logger.info(" ------> Inside dbError Method "); 
			return FipaConstant.DB_ERROR;				
		}//end of if
		
		ClientService serv = new ClientService();
		serv.updateuserProfile(request);
		
		
		HttpSession session = request.getSession(false);
		if(!FipaUtils.nullObj(session))
			session.invalidate();
		
		return "logout";
	}

}
