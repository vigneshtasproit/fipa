package com.fipa.controller;



import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;
 
@Controller
public class CommonController{
	
	final Logger logger = LoggerFactory.getLogger(CommonController.class); 
	
	@RequestMapping(value = "/sessionExpired.do")	
	public ModelAndView sessionExpired(){		
		logger.info(" ------> Inside sessionExpired Method ");
		return new ModelAndView("sessionExpired");
		
	}
	 
	@RequestMapping(value = "/dbError.do")	
	public ModelAndView dbError(){		
		logger.info(" ------> Inside dbError Method ");
		return new ModelAndView("dbError");
		
	}
	
	@RequestMapping(value = "/generalError.do")	
	public ModelAndView generalError(){		
		logger.info(" ------> Inside generalError Method");
		return new ModelAndView("generalError");
		
	} 
	
	@RequestMapping(value = "/filenotfound.do")	
	public ModelAndView filenotfound(){
		logger.info(" ------> Inside filenotfound Method ");
		return new ModelAndView("filenotfound");
		
	}
	
	
	@RequestMapping(value = "/filefound.do")	
	public ModelAndView filefound(){
		logger.info(" ------> Inside filefound Method ");
		return new ModelAndView("filefound");
		
	}
}


