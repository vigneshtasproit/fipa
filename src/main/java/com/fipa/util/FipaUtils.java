package com.fipa.util;


import java.beans.BeanInfo;
import java.beans.Introspector;
import java.beans.PropertyDescriptor;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.math.BigDecimal;
import java.sql.ResultSet;
import java.text.DecimalFormat;
import java.text.NumberFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.ResourceBundle;
import java.util.Set;
import java.util.StringTokenizer;
import java.util.TreeSet;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;




//import net.sf.json.JSONArray;
//import net.sf.json.JSONObject;
import oracle.jdbc.OracleResultSet;
import oracle.sql.BFILE;

import org.apache.commons.beanutils.BeanUtils;
import org.apache.commons.beanutils.BeanUtilsBean;
import org.apache.commons.beanutils.PropertyUtils;
import org.apache.commons.lang.StringUtils;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.slf4j.LoggerFactory;
import org.springframework.beans.BeanWrapper;
import org.springframework.beans.BeanWrapperImpl;
import org.springframework.context.ApplicationContext;
import org.springframework.ui.ModelMap;

import com.fipa.dbinterface.DBInterfaceFpmsImpl;
import com.fipa.dbinterface.DBInterfaceImpl;  
import com.fipa.dto.FnaAdvDeclare; 
import com.fipa.dto.FnaApptypes;
import com.fipa.dto.FnaAssetCashdets;
import com.fipa.dto.FnaAssetOtherdets;  
import com.fipa.dto.FnaContingencyDets; 
import com.fipa.dto.FnaCurassDets;
import com.fipa.dto.FnaExpenditureDets;
import com.fipa.dto.FnaFinLiability; 
import com.fipa.dto.FnaInvsetmentSummary;
import com.fipa.dto.FnaLifeinsuranceCoverages;
import com.fipa.dto.FnaLifeinsuranceDets; 
import com.fipa.dto.FnaPersprio;
import com.fipa.dto.FnaRetireplanDets;
import com.fipa.dto.FnaRiskprefDets;
import com.fipa.dto.FnaSelfspouseDets;
import com.fipa.dto.FnaSrcofincome;
import com.fipa.dto.FnaSummaryAnalysis;
import com.fipa.dto.MasterCpfAcctype;
import com.fipa.dto.MasterRetSchemeLimits;
import com.fipa.dto.MasterCpflifePayout;
import com.fipa.dto.MasterPropertykv;
import com.fipa.dto.MasterCpflifePlans;
import com.fipa.service.ClientService;
import com.fipa.service.FPMSDataService;
import com.fipa.service.LoginService; 
import com.fipa.service.MasterCpfService;
import com.fipa.service.MasterService;   

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class FipaUtils {
	
	static Logger fipalog = LoggerFactory.getLogger(FipaUtils.class);
	
	
	
	public static boolean nullOrBlank(String str) { 
	 
		return ((str == null) || (str.length() == 0));
	}

	public static boolean nullObj(Object obj) {
		return ((obj == null));
	}

	public static double convertDouble(String strVal) {

		if (!nullOrBlank(strVal) && !nullObj(strVal))
			return Double.parseDouble(strVal);
		else
			return Double.parseDouble("0");
	}
	
	public static String keytovalue(String item) {
        String result = "";
               String expTxt ="";
               if(item.equals("CIA")) {
                   expTxt="Critical Illness Advance";
               }else if(item.equals("CIE")) {
                   expTxt="Critical Illness Early";
               }else if(item.equals("TPD")) {
                   expTxt="TPD";
               }else if(item.equals("PA")) {
                   expTxt="PA";
               }else if(item.equals("DIS")) {
                   expTxt="Disability";
               }else if(item.equals("DB")) {
                   expTxt="Death Benefit";
               }else if(item.equals("HP")) {
                   expTxt="Hospitalisation";
               }else if(item.equals("EP")) {
                   expTxt="Education";
               }else if(item.equals("RP")) {
                   expTxt="Retirement";
               }
               result = expTxt;
            return result;
     }

	  
	public static String getObjValue(Object obj) {
		
 
		String retStr = "";
		
		if (obj != null && obj.getClass().equals(java.sql.Date.class)) {
			
			java.sql.Date sqlDte = (java.sql.Date) obj;
			Date dte = sqlDte;
			retStr = FipaDateUtils.formatDate(dte); 
			
		}else if (obj != null && obj.getClass().equals(java.sql.Timestamp.class)) {
			
			java.sql.Timestamp sqlDte = (java.sql.Timestamp) obj;
			Date dte = sqlDte;
			retStr = FipaDateUtils.formatDateTime(dte);
 
			
		}else if (obj != null && obj.getClass().equals(java.lang.Double.class)) {

			double value = Double.parseDouble(obj.toString());
			
			if(value != 0){
			
				String pattern = "######0.####";
				DecimalFormat decimalFormat = new DecimalFormat(pattern);
				retStr = decimalFormat.format(value);
			}else{
				retStr = "";	
			}

		}else if (obj != null && obj.getClass().equals(java.math.BigDecimal.class)) {
			 
			double value = Double.parseDouble(obj.toString());
			
			if(value != 0){
			
				String pattern = "######0.####";
				DecimalFormat decimalFormat = new DecimalFormat(pattern);
				retStr = decimalFormat.format(value);
			}else{
				retStr = "";	
			}

		}else if (obj != null && obj.getClass().equals(java.lang.Integer.class)) {
			 
			int value = Integer.parseInt(obj.toString());
			
			if(value != 0){
				retStr=String.valueOf(value);
			}else{
				retStr = "";	
			}

		}else if (obj != null && obj.getClass().equals(java.lang.Short.class)) {
			
			retStr = obj.toString();

		}else if (obj != null && obj.getClass().equals(java.lang.String.class)) {

			retStr = !FipaUtils.nullObj(obj) ? obj.toString(): "";

		}else if (obj != null && obj.getClass().equals(java.lang.Character.class)) {

			retStr = !FipaUtils.nullObj(obj) ? obj.toString(): "";

		} else  {
			
			if(obj!= null &&
					(!obj.getClass().equals(java.lang.Class.class)) && 
					(!obj.getClass().equals(org.hibernate.collection.internal.PersistentSet.class)))
			{				
				try {
					Class<?> cls = Class.forName(obj.getClass().getName());
					

					if(cls.getDeclaredFields()[0].getType().equals(java.lang.String.class)){
						//cls.getDeclaredFields()[0] --------> CONSIDER THIS IS AS A PRIMARY/REQUIRED FIELD					
						retStr = !FipaUtils.nullObj(obj) ? invokeGetter(obj, cls.getDeclaredFields()[0].getName()).toString(): "";
					}
					
					
				} catch (ClassNotFoundException e) {					
					fipalog.error("",e);
				}				
			}			
		}

		return retStr;
	}
	
	public boolean isValid(String test) {
		   try {
		       new JSONObject(test);
		   } catch (JSONException ex) {
		       try {
		           new JSONArray(test);
		       } catch (JSONException ex1) {
		           return false;
		       }
		   }
		   return true;
		}
	
	public static String DigitFormat(String number){
		  
		  String formatVal = "";
		  try{
			  double strTodbl=Double.parseDouble(number);
			  DecimalFormat myFormatter = new DecimalFormat("$#,###");
			  formatVal = myFormatter.format(strTodbl); 
			      
		  }catch(Exception ex){
			  fipalog.error("",ex);
			   
		  }		  
		  return formatVal;
	  }
	  
	
	public static JSONArray getPropsJsonArray(List dataList,Object classObj){
		
		
		JSONArray retJsnArr = new JSONArray();
		
		try{
			
			if(dataList.size()>0){
				
				Iterator ite = dataList.iterator();
				
				while(ite.hasNext()){				
					JSONObject retJsonObject=new JSONObject();
					Object  natIdDto = (Object) ite.next();					
					BeanInfo beanInfo = Introspector.getBeanInfo(natIdDto.getClass());			
					
					for (PropertyDescriptor propertyDesc : beanInfo.getPropertyDescriptors()) {
						
						 String propertyName = propertyDesc.getName();
					    Object value = propertyDesc.getReadMethod().invoke(natIdDto);					    
					    retJsonObject.put(propertyName, FipaUtils.getObjValue(value));
						/*
						 * System.out.println("propertyName----"+propertyName);
						 * System.out.println("value----"+value);
						 */
					}
					retJsnArr.put(retJsonObject);					
				}			
			}
			
		}catch(Exception ex){
			fipalog.error("",ex);
		}
		return retJsnArr;		
	}
	
	
public static JSONObject getPropsJsonObject(List dataList,Object classObj){
		
		JSONObject retJsonObject=new JSONObject();
			
		try{			
			if(dataList.size()>0){				
				Iterator ite = dataList.iterator();
				
				while(ite.hasNext()){			
					 retJsonObject=new JSONObject();
					Object  objDTO = (Object) ite.next();					
					BeanInfo beanInfo = Introspector.getBeanInfo(objDTO.getClass());		
					
					for (PropertyDescriptor propertyDesc : beanInfo.getPropertyDescriptors()) {
						String propertyName = propertyDesc.getName();
						Object value = propertyDesc.getReadMethod().invoke(objDTO);
						 
						
					    retJsonObject.put(propertyName, FipaUtils.getObjValue(value));	
					   
					}
				}
				
			}
		}catch(Exception ex){
			fipalog.error("",ex);
		}
		return retJsonObject;	
	}
	
	
	public static Object invokeGetter(Object obj, String variableName) {

		Object retObj = new Object();
		
		try {
			

			PropertyDescriptor objPropertyDescriptor = new PropertyDescriptor(variableName, obj.getClass());

			retObj = objPropertyDescriptor.getReadMethod().invoke(obj); 
			
		} catch (Exception e) {			
			fipalog.error("",e);		
		} 
		
		return retObj;
	}

	public static String[] splitSplChars(String str, String splChar) {

		StringTokenizer strtoken = new StringTokenizer(str, splChar);
		String[] strArr = new String[strtoken.countTokens()];

		try {
			int count = 0;
			while (strtoken.hasMoreTokens()) {
				strArr[count] = strtoken.nextToken();
				count++;
			}
		} catch (Exception ex) {
			fipalog.info(" splitSplChars-->" , ex);
		}
		return strArr;
	}
	
	
	
	public static String[] splitWords(String str, String splChar) {

		String[] strWords=str.split(splChar);   
		return strWords; 
		
	}
	
	
	public static String lpadString(int zerocnt, String num) {		
		if (nullObj(num))num = "1";		
		return StringUtils.leftPad(num, zerocnt, '0');
	}
	

	public static boolean checkNullVal(Object obj) {
		if (obj == null) {
			return true;
		} else {
			return false;
		}
	} // end checkNullVal


	
	public static String getParamValue(HttpServletRequest request,String param){
 	
		return ((request.getParameter(param) != FipaConstant.NULL_STRING) ? 
				request.getParameter(param) : FipaConstant.EMPTY_STRING );
		
		
	}//end of getParamValue
	
	public static double getParamdoubleValue(HttpServletRequest request,String strVal) {
		if (!nullOrBlank(strVal) && !nullObj(strVal))
			return Double.parseDouble(strVal);
		else
			return Double.parseDouble("0");
	}
	
	public static String[] getParamArrValue(HttpServletRequest request,String param){
		return FipaUtils.nullObj(request.getParameterValues(param)) ? 
				FipaConstant.NULL_STRING_ARR : request.getParameterValues(param);
	}//end of getParamValue
	
	
	
  public static boolean  isSessionExpired(HttpServletRequest requestObj) {
		HttpSession sessObj = requestObj.getSession(false);


		  
		if(nullObj(sessObj)){
			 
	    	return false;
	    	
	    }else{
	    	
	    	return true;
	    }
  }
  
  public static Date isValidDB(DBInterfaceFpmsImpl dao) {
	  
	  LoginService loginServ=new LoginService();
	  Date sysdate = null;
	  
	  sysdate = loginServ.getSysDate(dao);
	  
	  return sysdate;
	  	    
  }
  
  public static String getFormattedMaxPK(String strMaxId,String strPrefix,int padding){
	  
	  String strPKValue = "";
	  
	  try{
		  
//		  String strMaxId = (String) dao.fetchMaxId(dtoObj, strPKCol);
			if(strMaxId.length() > 1)
				strMaxId = strMaxId.substring(strPrefix.length());
			
			strMaxId = strMaxId.replaceFirst("^0+(?!$)", "");
			strMaxId = String.valueOf(Integer.parseInt(strMaxId)+1);
			strMaxId = strPrefix +  FipaUtils.lpadString(padding,strMaxId);
			
			strPKValue = strMaxId;
		  
	  }catch(Exception ex){ 
		  fipalog.error("",ex);
	  }
	  return strPKValue;
  }
  
  public static String getFormattedAttMaxPK(String strMaxId,String strPrefix,int padding,int count){
	  
	  String strPKValue = "";
	  
	  try{
		  
//		  String strMaxId = (String) dao.fetchMaxId(dtoObj, strPKCol);
			if(strMaxId.length() > 1)
				strMaxId = strMaxId.substring(strPrefix.length());
			
			strMaxId = strMaxId.replaceFirst("^0+(?!$)", "");
			strMaxId = String.valueOf(Integer.parseInt(strMaxId)+count);
			strMaxId = strPrefix +  FipaUtils.lpadString(padding,strMaxId);
			
			strPKValue = strMaxId;
		  
	  }catch(Exception ex){ 
		  fipalog.error("",ex);
	  }
	  return strPKValue;
  }
  
  public static String formatFileName(String strAtmtFileName){
	  String strFormatFileName = FipaConstant.EMPTY_STRING;
	  
	  try{
		  int lastIndex = strAtmtFileName.lastIndexOf(".");
		  if(lastIndex == -1){
			  strFormatFileName =FipaConstant.FIPS_ERR_FILE_NAME_FORMAT;
		  }else{
			  
			  String strprefix = strAtmtFileName.substring(0, lastIndex);
			  String strsuffix = strAtmtFileName.substring(lastIndex);
			 
	  		  SimpleDateFormat ft = new SimpleDateFormat ("ddMMyyyyhhmmssS");
			  
			  strprefix = strprefix + "_" + ft.format(new Date());		  
			  
			  strFormatFileName = strprefix+strsuffix;
		  }
		  
		 
		  
		  //fplog.info("strFormatFileName"+strFormatFileName);
	  }catch(Exception ex){
//		 
		 strFormatFileName = FipaConstant.FIPS_ERR_FILE_NAME_FORMAT;
	  }
	  return strFormatFileName;
  }
  public static String replaceSplChars(String regexChars, String formattedStr) {

		try {

			String[] strArrRegexChars = regexChars.split(",");
			int totChars = strArrRegexChars.length;

			for (int sp = 0; sp < totChars; sp++) {

				String strEachKey = strArrRegexChars[sp];

				String[] splCharKeyVal = strEachKey.split("=");
				// fplog.info("Before replace-->"+formattedStr);

				if (formattedStr.toUpperCase().contains(
						splCharKeyVal[0].toUpperCase())) {
					formattedStr = formattedStr.replace(splCharKeyVal[0],
							splCharKeyVal[1].toUpperCase());
				}
				// fplog.info("After replace-->"+formattedStr);

			}

		} catch (Exception ex) {
			fipalog.error("",ex);
		}

		return formattedStr;
	}
  
  public static File createPhysicalDir(String strScreen,String strAdvName,String strClntName,String strCustNRIC,String strDestFileName){
	  
	  StringBuffer mainDirPath = new StringBuffer();
	  String strDestFileNameWithPath =FipaConstant.EMPTY_STRING;
	  String strSplChars = FipaConstant.EMPTY_STRING;
	  File destfile = null;	
	  
	  try{
		  

			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
			PropContextUtils  propLoad = (PropContextUtils)appCtx.getBean(FipaConstant.FP_PROPCONTEXT_BEAN);	
	 
			 
		  mainDirPath.append(propLoad.getPropertyAsString("attach.bfile.desitMachine"));
		  
		  if(!(nullOrBlank(propLoad.getPropertyAsString("attach.bfile.desitMachine.drive")))){
			  mainDirPath.append(File.separator + propLoad.getPropertyAsString("attach.bfile.desitMachine.drive"));
		  }
		   
		  
		  strSplChars = propLoad.getPropertyAsString("attach.bfile.SplCharVal");
		  
		 if(strScreen.equalsIgnoreCase(FipaConstant.GLBL_MODULE_ATTACTMENT)){
			  
			  mainDirPath.append(File.separator + propLoad.getPropertyAsString("attach.bfile.attachscreen.fipa")); 
			  if(!nullOrBlank(strAdvName)){
				  mainDirPath.append(File.separator + replaceSplChars(strSplChars, strAdvName)) ;
			  }				  
			  if(!nullOrBlank(strClntName) && !nullOrBlank(strCustNRIC)){
				  String conNameNric=strClntName+"_"+strCustNRIC;
				  mainDirPath.append(File.separator + replaceSplChars(strSplChars, conNameNric)) ;
			  }		
//			  if(!nullOrBlank(strCustNRIC)){
//				  mainDirPath.append(File.separator + replaceSplChars(strSplChars, strCustNRIC)) ;
//			  }		
		  }
		  
		  if(!nullOrBlank(strDestFileName)){
			  strDestFileNameWithPath = mainDirPath +  File.separator + strDestFileName;
		  }else{
			  strDestFileNameWithPath = mainDirPath.toString();
		  } 
		  
		  destfile = new File(strDestFileNameWithPath);
		   
		  
	}catch(Exception ex){
		fipalog.error("",ex);
	}
	return destfile;
	  
  } 
  public static void delPhysicalFile(ResultSet attachDocList){
		try{

			 BFILE attachDoc = null;
		     while(attachDocList.next()){
		        attachDoc= ((OracleResultSet )attachDocList).getBFILE(1);
		     }   

		     File bFile  =  FipaUtils.createPhysicalDir(FipaConstant.GLBL_MODULE_ATTACTMENT, "", "","",attachDoc.getName());
		     bFile.delete();

		     if(!bFile.exists()){ 
		     }else{ 
		     }

		}catch(Exception ex){
			fipalog.error("",ex);
			
		}
	}


  public static String createPhysicalFile(File attachSrcFile,File destBFile){
	  
	  File destfile = destBFile;	
	  String strReturnMsg = "";
			  
	  
	  try{	    		
    		 
    		
    		if(!destfile.getParentFile().exists()){
    			destfile.getParentFile().mkdirs();
    		}
    		
    		
    		FileInputStream srcStream = new FileInputStream(attachSrcFile);
    		FileOutputStream destStream = new FileOutputStream(destfile);
    		
    		int len = (int)(long)attachSrcFile.length();             
    		byte[] buffer = new byte[len];
    		//fplog.info("Source File Len-->"+len);

    		int length;
    		while ((length = srcStream.read(buffer)) > 0){                
    			destStream.write(buffer, 0, length);                  
    		}

    		//fplog.info("Desitnation File Exist -->"+destfile.exists());
    		//fplog.info("Desitnation File Len-->"+(int)(long)destfile.length());

    		
    		destfile=null;

    		srcStream.close();
    		destStream.close();
    		
//    		fplog.info("File is copied successful  " );
    		
	  }catch(Exception ex){
		  fipalog.error("",ex);
		  //			  			  
//		  String strExcep = ExceptionMsgLibrary.throwExcep(ex);
		  
//		  fplog.info("Error in Utility fpmsCreatePhysicalFile Method-->"+ex.getStackTrace());
//		  strReturnMsg = strExcep;			
	  }
	  
	  return strReturnMsg;
	  
  }
  public static String getBFILEDirPath(String strModule){
	  
	  StringBuffer dirPath = new StringBuffer();
	  
	  try{
		  ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
			PropContextUtils  propLoad = (PropContextUtils)appCtx.getBean(FipaConstant.FP_PROPCONTEXT_BEAN);	
	 
			   
	  
		  dirPath.append(propLoad.getPropertyAsString("attach.bfile.desitMachine").toString() + File.separator);
		  
		  if(!FipaUtils.nullOrBlank(propLoad.getPropertyAsString("attach.bfile.desitMachine.drive"))){
			  dirPath.append(propLoad.getPropertyAsString("attach.bfile.desitMachine.drive").toString() +File.separator);
		  }
		    
		  
		  if(strModule.equalsIgnoreCase(FipaConstant.GLBL_MODULE_ATTACTMENT)){
			  dirPath.append(propLoad.getPropertyAsString("attach.bfile.attachscreen.fipa").toString()+File.separator);
		  }
		  
		  
	  }catch(Exception ex){
		  fipalog.error("",ex);
	  }
	  
	  return dirPath.toString();
	  
  }
  
  public static Map getRequestMapping(HttpServletRequest request){ 
	  
	  
	  Map<String,Object> objMapping  = new HashMap();
	 
	  FnaSelfspouseDets fnaslfspsSrc  = new FnaSelfspouseDets();
	  FnaSelfspouseDets fnaslfspsDest = new FnaSelfspouseDets();
	  boolean selfSpsInsFlag = false;
	  
	  FnaAdvDeclare fnaAdvDescSrc	  = new FnaAdvDeclare();
	  FnaAdvDeclare fnaAdvDescDest	  = new FnaAdvDeclare();
	  boolean advDesFlag = false;
	  
	  FnaSrcofincome fnaSrcofIncSrc	  = new FnaSrcofincome();
	  FnaSrcofincome fnaSrcofIncDest  = new FnaSrcofincome();
	  boolean srcIncomeInsFlag = false;
	  
	  FnaExpenditureDets fnaExpSrc    = new FnaExpenditureDets();
	  FnaExpenditureDets fnaExpDest   = new FnaExpenditureDets();
	  boolean expdInsFlag=false;
	  
	  FnaContingencyDets fnaContgDetsSrc = new FnaContingencyDets();
	  FnaContingencyDets fnaContgDetsDest = new FnaContingencyDets();
	  boolean contgdetsFlag=false;
	  
	  FnaLifeinsuranceDets fnalifeInsuranceSrc=new FnaLifeinsuranceDets();
	  FnaLifeinsuranceDets fnalifeInsuranceDest=new FnaLifeinsuranceDets();
	  boolean lifeinsFlag = false;
	  
	  FnaPersprio fnaPersSrc		  = new FnaPersprio();
	  FnaPersprio fnaPersDest         = new FnaPersprio();
	  boolean persPrioInsFlag = false;
	  
	  FnaInvsetmentSummary fnaInvstSrc  = new FnaInvsetmentSummary();
	  FnaInvsetmentSummary fnaInvstDest = new FnaInvsetmentSummary();
	  boolean investSrcInsFlag = false;
	  
	  FnaAssetCashdets fnaCshAssSrc = new FnaAssetCashdets();
	  FnaAssetCashdets fnaCshAssDest = new FnaAssetCashdets();
	  boolean cashAsstInsFlag = false;
	  	  
	  FnaAssetOtherdets fnaOthAssSrc = new FnaAssetOtherdets();
	  FnaAssetOtherdets fnaOthAssDest = new FnaAssetOtherdets();
	  boolean otherAsstInsFlag = false;
	  
	  FnaFinLiability fnaFinLbltySrc  = new FnaFinLiability();
	  FnaFinLiability fnaFinLbltyDest = new FnaFinLiability();
	  boolean finLiabInsFlag = false;
	  
	  FnaCurassDets fnaCurassSrc	  = new FnaCurassDets();
	  FnaCurassDets fnaCurassDest	  = new FnaCurassDets();
	  boolean currAssInsFlag = false;
	  
	  FnaRiskprefDets fnaRskPrefreSrc = new FnaRiskprefDets();
	  FnaRiskprefDets fnaRskPrefreDest = new FnaRiskprefDets(); 
	  boolean rskprefFlag = false;
	  
	  FnaRetireplanDets fnaRetirePlnSrc  = new FnaRetireplanDets();
	  FnaRetireplanDets fnaRetirePlnDest = new FnaRetireplanDets();
	  boolean retireInsFlag = false;
	  
	  FnaSummaryAnalysis fnaSAnalSrc = new FnaSummaryAnalysis();
	  FnaSummaryAnalysis fnaSAnalDest = new FnaSummaryAnalysis();
	  boolean sAnlFlag = false;
	   
	  MasterRetSchemeLimits fnaRetireSchSrc  = new MasterRetSchemeLimits();
	  MasterRetSchemeLimits fnaRetireSchDest = new MasterRetSchemeLimits();
	  boolean retireSchInsFlag = false;
	  
	  Enumeration paramNames = request.getParameterNames();
	  
	  try {

			BeanUtilsBean beanUtilsBean = BeanUtilsBean.getInstance();
			beanUtilsBean.getConvertUtils().register(new org.apache.commons.beanutils.converters.BigDecimalConverter(null),BigDecimal.class);

			beanUtilsBean.getConvertUtils().register(new org.apache.commons.beanutils.converters.DoubleConverter(null), Double.class);
			beanUtilsBean.getConvertUtils().register(new org.apache.commons.beanutils.converters.DoubleConverter(null), Double.TYPE);

			beanUtilsBean.getConvertUtils().register(new org.apache.commons.beanutils.converters.IntegerConverter(null), Integer.class);
			beanUtilsBean.getConvertUtils().register(new org.apache.commons.beanutils.converters.IntegerConverter(null), Integer.TYPE);

			beanUtilsBean.getConvertUtils().register(new org.apache.commons.beanutils.converters.SqlDateConverter(null), java.util.Date.class);
			beanUtilsBean.getConvertUtils().register(new org.apache.commons.beanutils.converters.SqlDateConverter(null), java.sql.Date.class);
			
			
			
			  while(paramNames.hasMoreElements()) {
				  
					Object obj = paramNames.nextElement(); 
					
					String paramName = obj.toString();
					 
					if(PropertyUtils.isReadable(fnaslfspsSrc, paramName) && PropertyUtils.isWriteable(fnaslfspsSrc, paramName)){
						 if(!FipaUtils.nullObj(request.getParameter(paramName)) && !FipaUtils.nullOrBlank(request.getParameter(paramName).toString())){	
							 
							  beanUtilsBean.setProperty(fnaslfspsSrc, paramName, request.getParameter(paramName));
							 selfSpsInsFlag=true;
						}
					}
					
					
					if(PropertyUtils.isReadable(fnaAdvDescSrc, paramName) && PropertyUtils.isWriteable(fnaAdvDescSrc, paramName)){
						 if(!FipaUtils.nullObj(request.getParameter(paramName)) && !FipaUtils.nullOrBlank(request.getParameter(paramName).toString())){
							beanUtilsBean.setProperty(fnaAdvDescSrc, paramName, request.getParameter(paramName));
							advDesFlag=true;
						}
					
					}
					
					
					if(PropertyUtils.isReadable(fnaExpSrc, paramName) && PropertyUtils.isWriteable(fnaExpSrc, paramName)){
						//BeanUtilsBean beanUtilsBean = BeanUtilsBean.getInstance(); 
					 if(!FipaUtils.nullObj(request.getParameter(paramName)) && !FipaUtils.nullOrBlank(request.getParameter(paramName).toString())){						
							beanUtilsBean.setProperty(fnaExpSrc, paramName, request.getParameter(paramName));
							expdInsFlag=true;
						}
					
					} 
					
					if(PropertyUtils.isReadable(fnaContgDetsSrc, paramName) && PropertyUtils.isWriteable(fnaContgDetsSrc, paramName)){
					  if(!FipaUtils.nullObj(request.getParameter(paramName)) && !FipaUtils.nullOrBlank(request.getParameter(paramName).toString())){
							beanUtilsBean.setProperty(fnaContgDetsSrc, paramName, request.getParameter(paramName));
							contgdetsFlag=true;
						}
					}	
					
					 
					
					if(PropertyUtils.isReadable(fnaPersSrc, paramName) && PropertyUtils.isWriteable(fnaPersSrc, paramName)){
					 	if(!FipaUtils.nullObj(request.getParameter(paramName)) && !FipaUtils.nullOrBlank(request.getParameter(paramName).toString())){
							beanUtilsBean.setProperty(fnaPersSrc, paramName, request.getParameter(paramName));
							persPrioInsFlag=true;
						}
					}	
					
					if(PropertyUtils.isReadable(fnaSrcofIncSrc, paramName) && PropertyUtils.isWriteable(fnaSrcofIncSrc, paramName)){
					 	if(!FipaUtils.nullObj(request.getParameter(paramName)) && !FipaUtils.nullOrBlank(request.getParameter(paramName).toString())){
							beanUtilsBean.setProperty(fnaSrcofIncSrc, paramName, request.getParameter(paramName));
							srcIncomeInsFlag = true;
						}
					}
					 
					
					if(PropertyUtils.isReadable(fnaFinLbltySrc, paramName) && PropertyUtils.isWriteable(fnaFinLbltySrc, paramName)){
						 if(!FipaUtils.nullObj(request.getParameter(paramName)) && !FipaUtils.nullOrBlank(request.getParameter(paramName).toString())){
							beanUtilsBean.setProperty(fnaFinLbltySrc, paramName, request.getParameter(paramName));
							finLiabInsFlag = true;
						}
					}
					
					if(PropertyUtils.isReadable(fnaCurassSrc, paramName) && PropertyUtils.isWriteable(fnaCurassSrc, paramName)){
						 if(!FipaUtils.nullObj(request.getParameter(paramName)) && !FipaUtils.nullOrBlank(request.getParameter(paramName).toString())){
							beanUtilsBean.setProperty(fnaCurassSrc, paramName, request.getParameter(paramName));
							currAssInsFlag = true;
						}
					}
					
					if(PropertyUtils.isReadable(fnaRetirePlnSrc, paramName) && PropertyUtils.isWriteable(fnaRetirePlnSrc, paramName)){
						//BeanUtilsBean beanUtilsBean = BeanUtilsBean.getInstance();	
						if(!FipaUtils.nullObj(request.getParameter(paramName)) && !FipaUtils.nullOrBlank(request.getParameter(paramName).toString())){
							beanUtilsBean.setProperty(fnaRetirePlnSrc, paramName, request.getParameter(paramName));
							retireInsFlag = true;
						}
					}
					
					if(PropertyUtils.isReadable(fnaInvstSrc, paramName) && PropertyUtils.isWriteable(fnaInvstSrc, paramName)){
						 if(!FipaUtils.nullObj(request.getParameter(paramName)) && !FipaUtils.nullOrBlank(request.getParameter(paramName).toString())){
							beanUtilsBean.setProperty(fnaInvstSrc, paramName, request.getParameter(paramName));
							investSrcInsFlag=true;
						}
					}
					
					if(PropertyUtils.isReadable(fnaCshAssSrc, paramName) && PropertyUtils.isWriteable(fnaCshAssSrc, paramName)){
						if(!FipaUtils.nullObj(request.getParameter(paramName)) && !FipaUtils.nullOrBlank(request.getParameter(paramName).toString())){
							beanUtilsBean.setProperty(fnaCshAssSrc, paramName, request.getParameter(paramName));
							cashAsstInsFlag=true;
						}
					}
					
					if(PropertyUtils.isReadable(fnaOthAssSrc, paramName) && PropertyUtils.isWriteable(fnaOthAssSrc, paramName)){
					 	 if(!FipaUtils.nullObj(request.getParameter(paramName)) && !FipaUtils.nullOrBlank(request.getParameter(paramName).toString())){
					 		beanUtilsBean.setProperty(fnaOthAssSrc, paramName, request.getParameter(paramName));
							otherAsstInsFlag = true;
						}
					}
					 
					

					if(PropertyUtils.isReadable(fnaRskPrefreSrc, paramName) && PropertyUtils.isWriteable(fnaRskPrefreSrc, paramName)){ 
							
						if(!FipaUtils.nullObj(request.getParameter(paramName)) && !FipaUtils.nullOrBlank(request.getParameter(paramName).toString())){
							beanUtilsBean.setProperty(fnaRskPrefreSrc, paramName, request.getParameter(paramName));
							rskprefFlag=true;
						}
					}
					
					
					if(PropertyUtils.isReadable(fnaSAnalSrc, paramName) && PropertyUtils.isWriteable(fnaSAnalSrc, paramName)){
						 if(!FipaUtils.nullObj(request.getParameter(paramName)) && !FipaUtils.nullOrBlank(request.getParameter(paramName).toString())){
							beanUtilsBean.setProperty(fnaSAnalSrc, paramName, request.getParameter(paramName));
							sAnlFlag = true;
						}
					}
					
					 
					if(PropertyUtils.isReadable(fnaRetireSchSrc, paramName) && PropertyUtils.isWriteable(fnaRetireSchSrc, paramName)){
						 if(!FipaUtils.nullObj(request.getParameter(paramName)) && !FipaUtils.nullOrBlank(request.getParameter(paramName).toString())){
							beanUtilsBean.setProperty(fnaRetireSchSrc, paramName, request.getParameter(paramName));
							retireSchInsFlag = true;
						}
					}
					
					
					if(PropertyUtils.isReadable(fnaPersSrc, paramName) && PropertyUtils.isWriteable(fnaPersSrc, paramName)){
					 	if(!FipaUtils.nullObj(request.getParameter(paramName)) && !FipaUtils.nullOrBlank(request.getParameter(paramName).toString())){
							beanUtilsBean.setProperty(fnaPersSrc, paramName, request.getParameter(paramName));
							persPrioInsFlag=true;
						}
					}
					 
					
					if(PropertyUtils.isReadable(fnalifeInsuranceSrc, paramName) && PropertyUtils.isWriteable(fnalifeInsuranceSrc, paramName)){
						 if(!FipaUtils.nullObj(request.getParameter(paramName)) && !FipaUtils.nullOrBlank(request.getParameter(paramName).toString())){
 
							 beanUtilsBean.setProperty(fnalifeInsuranceSrc, paramName, request.getParameter(paramName));
							 lifeinsFlag = true;
							}
					}	  
			  }
			  
			
			  if(selfSpsInsFlag){
				  BeanUtils.copyProperties(fnaslfspsDest, fnaslfspsSrc);
				  objMapping.put(FipaConstant.SLFSPS_DETS, fnaslfspsDest);
			  }
			   
			   
			  
			  if(advDesFlag){
				  BeanUtils.copyProperties(fnaAdvDescDest, fnaAdvDescSrc);
				  objMapping.put(FipaConstant.ADVDECLR_DETS, fnaAdvDescDest);
			  }
			  
			  
			  
			  if(expdInsFlag){
				  BeanUtils.copyProperties(fnaExpDest, fnaExpSrc);
				  objMapping.put(FipaConstant.EXP_DETS, fnaExpDest);				  
			  }
			  
			  
			  
			  if(contgdetsFlag){
				  BeanUtils.copyProperties(fnaContgDetsDest, fnaContgDetsSrc);
				  objMapping.put(FipaConstant.CONTG_DETS, fnaContgDetsDest);				  
			  }
			  
			   
			  
			  if(persPrioInsFlag){				  
				  BeanUtils.copyProperties(fnaPersDest,fnaPersSrc);
				  objMapping.put(FipaConstant.PERS_DETS, fnaPersDest);
			  }
			  
			  
			  if(srcIncomeInsFlag){
				  BeanUtils.copyProperties(fnaSrcofIncDest,fnaSrcofIncSrc);
				  objMapping.put(FipaConstant.SRCOFINC_DETS, fnaSrcofIncDest);
			  }
			   
			  
			  if(finLiabInsFlag){				  
				  BeanUtils.copyProperties(fnaFinLbltyDest,fnaFinLbltySrc);
				  objMapping.put(FipaConstant.FNLBTY_DETS, fnaFinLbltyDest);
			  }
			  
			  if(currAssInsFlag){				  
				  BeanUtils.copyProperties(fnaCurassDest,fnaCurassSrc);
				  objMapping.put(FipaConstant.CURASS_DETS, fnaCurassDest);
			  }
			  
			  if(retireInsFlag){				  
				  BeanUtils.copyProperties(fnaRetirePlnDest,fnaRetirePlnSrc);
				  objMapping.put(FipaConstant.RETPLN_DETS, fnaRetirePlnDest);
			  }
			  
			  if(investSrcInsFlag){				  
				  BeanUtils.copyProperties(fnaInvstDest,fnaInvstSrc);
				  objMapping.put(FipaConstant.INVST_DETS, fnaInvstDest);
			  }
			  
			  if(cashAsstInsFlag){				  
				  BeanUtils.copyProperties(fnaCshAssDest,fnaCshAssSrc);
				  objMapping.put(FipaConstant.CSHASS_DETS, fnaCshAssDest);			  
			  }
			  
			  if(otherAsstInsFlag){				  
				  BeanUtils.copyProperties(fnaOthAssDest,fnaOthAssSrc);
				  objMapping.put(FipaConstant.OTHASS_DETS, fnaOthAssDest);				  
			  }
			
			  if(rskprefFlag){				  
				  BeanUtils.copyProperties(fnaRskPrefreDest,fnaRskPrefreSrc);
				  objMapping.put(FipaConstant.RSKPREF_DETS, fnaRskPrefreDest);				  
			  }
			
			  if(sAnlFlag){				  
				  BeanUtils.copyProperties(fnaSAnalDest,fnaSAnalSrc);
				  objMapping.put(FipaConstant.SANAL_DETS, fnaSAnalDest);				  
			  }
			    
			  if(retireSchInsFlag){				  
				  BeanUtils.copyProperties(fnaRetireSchDest,fnaRetireSchSrc);
				  objMapping.put(FipaConstant.MASTER_RET_SUM_DETS, fnaRetireSchDest);				  
			  }
			  if(lifeinsFlag){				   
				  BeanUtils.copyProperties(fnalifeInsuranceDest,fnalifeInsuranceSrc);
				  objMapping.put(FipaConstant.LIFEINSRCE_DETS, fnalifeInsuranceDest);				  
			  }
			   
			  
		}catch(Exception ex){
			fipalog.error("------> getRequestMapping-->",ex);
		  
		}
	  

	
	  
	  
	  return objMapping;
  }
  
  public static void copyBeanProperties(
		    final Object source,
		    final Object target,
		    final Iterable<String> properties){

		    final BeanWrapper src = new BeanWrapperImpl(source);
		    final BeanWrapper trg = new BeanWrapperImpl(target);

		    for(final String propertyName : properties){
		        trg.setPropertyValue(
		            propertyName,
		            src.getPropertyValue(propertyName)
		        );
		    }

		}
  
  public static void setLoginMsgDets(ModelMap model,HttpServletRequest request){
	  ClientService serv1 = new ClientService();
		List lstLoginMsgDets = serv1.getLoginMsgDets();		
		model.addAttribute("LOGIN_MSG_DETS", lstLoginMsgDets);
  }
  
	public static void setScreenAttributes(ModelMap model,HttpServletRequest request){
		
		PropReadUtils prop = new PropReadUtils();	
		
		ClientService clientService = new ClientService();
		FPMSDataService fpmsService = new FPMSDataService();
		MasterCpfService cpfservice = new MasterCpfService();
		MasterService mastServ=new MasterService();
		LoginService loginServ = new LoginService();
		

		Map<String,String> sessMap = new HashMap<String,String>();
		HttpSession session = request.getSession(false);	
		
		request.setAttribute("token", TokenHelper.setToken(request));	
		
		sessMap =(Map<String,String>)session.getAttribute(FipaConstant.LOGGED_USER_INFO);
		
		request.setAttribute(FipaConstant.LOGGED_ADVSTFNAME, sessMap.get(FipaConstant.LOGGED_USER_ADVSTFNAME));
		request.setAttribute(FipaConstant.LOGGED_ADVSTFID, sessMap.get(FipaConstant.LOGGED_USER_ADVSTFID));
		request.setAttribute(FipaConstant.LOGGED_USER_STFTYPE, sessMap.get(FipaConstant.LOGGED_USER_STFTYPE));
		request.setAttribute(FipaConstant.LOGGED_USER_MGRFLAG, sessMap.get(FipaConstant.LOGGED_USER_MGRFLAG));	
		request.setAttribute(FipaConstant.LOGGED_USER_ADVSTFINITIAL,(String)sessMap.get(FipaConstant.LOGGED_USER_ADVSTFINITIAL));
		request.setAttribute(FipaConstant.LOGGED_DESIGNATION, sessMap.get(FipaConstant.LOGGED_DESIGNATION));
		request.setAttribute(FipaConstant.LOGGED_DIST_ID, sessMap.get(FipaConstant.LOGGED_DIST_ID));
		request.setAttribute(FipaConstant.LOGGED_DIST_NAME, sessMap.get(FipaConstant.LOGGED_DIST_NAME));
		request.setAttribute(FipaConstant.LOGGED_SYSDATE, sessMap.get(FipaConstant.LOGGED_SYSDATE));
		
		String strCrtdUser = (String)sessMap.get(FipaConstant.LOGGED_USER_ID),
		strAdvId = sessMap.get(FipaConstant.LOGGED_USER_ADVSTFID);
		
		List userProfList = loginServ.getLoginProfile(null, strCrtdUser, strAdvId);
		String strSkinColor =  "",strLastLogin = "", strCurrLogin = "";
		
		if(userProfList.size()>0){
	 		Iterator proite =userProfList.iterator();
	 		while(proite.hasNext()){
		 		Object[] userDets = (Object[])proite.next();
		 		
		 		strSkinColor = FipaUtils.nullOrBlank(userDets[0].toString())?"":userDets[0].toString();
		 	}
		}
		sessMap.put("SKIN_COLOR",strSkinColor);
		
		List<MasterPropertykv> lstmastpropList = new ArrayList<MasterPropertykv>();
		lstmastpropList = mastServ.getFinGlsProp();
		request.setAttribute(FipaConstant.FINGLS_PROP,lstmastpropList);
		
		List advstfList = fpmsService.getAllAdvStfDets();		
		request.setAttribute(FipaConstant.ALL_ADVSTF_LIST,advstfList);
		
		List countryList = fpmsService.getAllCountryList();
		List<String> lstAllcountry = new ArrayList<String>();
		if(countryList.size() > 0){
			
			Iterator it = countryList.iterator();
			   
			while(it.hasNext()){
				
				Object[] Obj = (Object[]) it.next();					

				if(!(Obj[1].toString().equals("SINGAPORE"))){
					lstAllcountry.add(Obj[1].toString());
				}
				 
			}
		}
 
		request.setAttribute(FipaConstant.COUNTRY, countryList);
		request.setAttribute(FipaConstant.COUNTRIES, lstAllcountry);
		List RelationshipList = fpmsService.getAllRelationshipList();
		request.setAttribute(FipaConstant.RELATIONSHIP, RelationshipList);
		
//		Investment details
		List fundMgrList = fpmsService.getfundMgrList();
		request.setAttribute(FipaConstant.INV_FUNDMGR_LIST, fundMgrList);
		
		List fundNameList = fpmsService.getfundNameList();
		request.setAttribute(FipaConstant.INV_FUNDNAME_LIST, fundNameList);
	
		
//		Attachment details
		List attchCatgList = fpmsService.getattchCatgList();
		request.setAttribute(FipaConstant.ATTCH_CATG_LIST, attchCatgList);
		
		List<String> lstAllCateg = new ArrayList<String>();
		
		
		if(attchCatgList.size() > 0){
			
			Iterator it = attchCatgList.iterator();
			   
			while(it.hasNext()){
				
				Object[] propObj = (Object[]) it.next();					

				lstAllCateg.add(propObj[1].toString());
				 
			}
		}
		
		Set<String> setUniqueCateg = new TreeSet<String>(lstAllCateg);
		
		request.setAttribute(FipaConstant.ATTCH_CATG_LIST, setUniqueCateg); 
		request.setAttribute(FipaConstant.ATTCH_TITLE_LIST, attchCatgList);
		
		 
		List portofolioList = fpmsService.getportofolioList();
		request.setAttribute(FipaConstant.PORTFOLIO_CATG_LIST, portofolioList);
		
		List<MasterCpfAcctype> lstMastAccTypeList = new ArrayList<MasterCpfAcctype>();
		lstMastAccTypeList = cpfservice.getAllCpfAccountType();	 
		request.setAttribute(FipaConstant.CPF_ACCTYPES,lstMastAccTypeList); 
		 
		request.setAttribute(FipaConstant.ALL_ANALYSIS_TYPES,clientService.getAllAnalysisTypes());	
		
		
		
		request.setAttribute(FipaConstant.MARITALSTATUS_LIST,prop.getMaritalStatus());
		request.setAttribute(FipaConstant.GENDER_LIST, prop.getGender());//02012019- move to jsp hardcoded combo
		request.setAttribute(FipaConstant.NATIONALITY, prop.getNationality());
		
			
		
//		request.setAttribute(FipaConstant.TYPES_OF_FINGOALS, prop.getTypeFinGoals());	//02012019- is it required???	
		
		request.setAttribute(FipaConstant.EMPLOYMENT_STATUS, prop.getEmploymentSts());
		request.setAttribute(FipaConstant.EMPLOYEE_CATEGRY, prop.getEmployeCatg());
//		request.setAttribute(FipaConstant.RELATIONSHIP_LIST, prop.getRelation());
		
		request.setAttribute(FipaConstant.HOSPTYPE_LIST, prop.getHospType());
		request.setAttribute(FipaConstant.WARD_LIST, prop.getWards());
		
		request.setAttribute(FipaConstant.BUSINESS_LIST,prop.getBusinessList());//02012019- fna.business.list -movetomasters
		request.setAttribute(FipaConstant.PROTYPEPLN_LIST,prop.getProdTypePlan());//02012019- move to jsp hardcoded combo
		request.setAttribute(FipaConstant.PROTYPEFD_LIST,prop.getProdTypeFund());//02012019- move to jsp hardcoded combo
		request.setAttribute(FipaConstant.PAYMENTMODE_LIST,prop.getPaymentMode());		
		
		request.setAttribute(FipaConstant.ACCOUNT_TYPE_LIST,prop.getAccountType());
		request.setAttribute(FipaConstant.SRS_CLASSIFICATION_LIST,prop.getSrsClass());
		request.setAttribute(FipaConstant.SRS_FREQUENCY_LIST,prop.getSrsFreq());
		request.setAttribute(FipaConstant.OWNERSHIP_LIST,prop.getOwnership());//02012019- move to jsp hardcoded combo
		request.setAttribute(FipaConstant.FREQUENCY_LIST,prop.getFrequency());
		request.setAttribute(FipaConstant.OBJECTIVE_LIST,prop.getObjective());//02012019- move to jsp hardcoded combo
		
		request.setAttribute(FipaConstant.DESC_OF_TRANS_LIST,prop.getDescTrans());//02012019- move to jsp hardcoded combo
		request.setAttribute(FipaConstant.TYPES_OF_TRANS_LIST,prop.getTypesOfTrans());//02012019- move to jsp hardcoded combo
		request.setAttribute(FipaConstant.RET_ACC_AGE_LIST,prop.getRetAccAge());//02012019- move to jsp hardcoded combo
				 

		
		
//		request.setAttribute(FipaConstant.CPF_AGEGRP_LIST,prop.getCpfAgeGrpList());
//		request.setAttribute(FipaConstant.CPF_CONTRB_PARTY_LIST,prop.getCpfContrbPartyList());	 
//		request.setAttribute(FipaConstant.CPF_CONTRB_AGE_LIST,prop.getCpfContrbAgeGrpList());
		
		
//		Input life insurance details
		
		request.setAttribute(FipaConstant.LI_TYPEOFPLAN_LIST,prop.getLiTypesOfPlan());
		request.setAttribute(FipaConstant.LI_PAYMENTS_LIST,prop.getLiPayments());
		request.setAttribute(FipaConstant.LI_PAYMETHODS_LIST,prop.getLiPayMethods());
		request.setAttribute(FipaConstant.LI_SRCOFPREM_LIST,prop.getLiSrcOfPrem());
		request.setAttribute(FipaConstant.LI_TYPEOFPOLICY_LIST,prop.getLiTypeOfPolicy());
		request.setAttribute(FipaConstant.LI_DDCOVERAGE_LIST,prop.getLiDDCoverage());
		request.setAttribute(FipaConstant.LI_TYPEOFCOVERAGE_LIST,prop.getLiTypeOfCoverage());
		request.setAttribute(FipaConstant.LI_TYPEOFCOVERAGE_PROLIST,prop.getLiTypeOfCoveragePro());
		request.setAttribute(FipaConstant.LI_DISABILITY_LIST,prop.getLiDisability());
		request.setAttribute(FipaConstant.LI_OBJOFINS_LIST,prop.getLiObjOfIns());
		request.setAttribute(FipaConstant.LI_THIRDPARTY_LIST,prop.getThirdPartyName());
		request.setAttribute(FipaConstant.LI_TYPEOFNOM_LIST,prop.getTypesOfNom()); 
		

		
		
		
		
		request.setAttribute(FipaConstant.INV_TYPEOFINVST_LIST,prop.getInvTypeOfInvst());
		request.setAttribute(FipaConstant.INV_OBJOFINS_LIST,prop.getInvObjOfIns()); 
		 
		
		//Retirement Cash Flow Analysis
		request.setAttribute(FipaConstant.RD_CTCASH_DESC_LIST,prop.getRDCtCash());
		request.setAttribute(FipaConstant.RD_INPINC_DESC_LIST,prop.getRDInpIncome());
		request.setAttribute(FipaConstant.RD_PROJINV_DESC_LIST,prop.getRDInvProj());
		request.setAttribute(FipaConstant.RD_SOURCEOFFUNDS_LIST,prop.getRDSouceOfFund());
		request.setAttribute(FipaConstant.RD_PROJINV_CLSFY_LIST,prop.getRDProInvClsfy());
		
		
//		Master Principal
		List mastPrinList = fpmsService.getfpmsPrincipalList();
		request.setAttribute(FipaConstant.INV_MASTPRIN_LIST, mastPrinList);
		
		
//		Master Retirement plan details
		List sdrPlanList = mastServ.getMastSdrsPlansList();
		request.setAttribute(FipaConstant.SDRS_PLAN_LIST, sdrPlanList);
		
		List sdrAmtList = mastServ.getMastSdrsAmountList();
		request.setAttribute(FipaConstant.SDRS_AMT_LIST, sdrAmtList);
		
		MasterCpfService cpfPayoutServ=new MasterCpfService();
		List cpfPayoutSearchList = cpfPayoutServ.cpfPayoutSearch(null,"");
		request.setAttribute("CPF_LIFE_PAYOUT", cpfPayoutSearchList);
	
}
	

public static void setCPFLifePlanScreenAttributes(ModelMap model,HttpServletRequest request){
		
		PropReadUtils prop = new PropReadUtils();
			
		
		Map<String,String> sessMap = new HashMap<String,String>();
		HttpSession session = request.getSession(false);	
		
		request.setAttribute("token", TokenHelper.setToken(request));	
		
		sessMap =(Map<String,String>)session.getAttribute(FipaConstant.LOGGED_USER_INFO);
		MasterCpfService service = new MasterCpfService();
		
		request.setAttribute(FipaConstant.LOGGED_ADVSTFNAME, sessMap.get(FipaConstant.LOGGED_USER_ADVSTFNAME));
		request.setAttribute(FipaConstant.LOGGED_ADVSTFID, sessMap.get(FipaConstant.LOGGED_USER_ADVSTFID));
		request.setAttribute(FipaConstant.LOGGED_USER_STFTYPE, sessMap.get(FipaConstant.LOGGED_USER_STFTYPE));
		request.setAttribute(FipaConstant.LOGGED_USER_MGRFLAG, sessMap.get(FipaConstant.LOGGED_USER_MGRFLAG));
		 
		 
		List<MasterCpflifePayout> lstMastLifePlanList = new ArrayList<MasterCpflifePayout>();
		lstMastLifePlanList = service.getAllCpfLifePlan();
	 
		request.setAttribute(FipaConstant.CPF_PLANNAMES,lstMastLifePlanList); 
		/*request.setAttribute(FipaConstant.CPF_AGEGRP_LIST,prop.getCpfAgeGrpList());
		request.setAttribute(FipaConstant.CPF_CONTRB_PARTY_LIST,prop.getCpfContrbPartyList());	 
		request.setAttribute(FipaConstant.CPF_CONTRB_AGE_LIST,prop.getCpfContrbAgeGrpList());*/

}
	public static void setCPFAccTypeScreenAttributes(ModelMap model,HttpServletRequest request){
		
		PropReadUtils prop = new PropReadUtils();
			
		
		Map<String,String> sessMap = new HashMap<String,String>();
		HttpSession session = request.getSession(false);	
		
		request.setAttribute("token", TokenHelper.setToken(request));	
		
		sessMap =(Map<String,String>)session.getAttribute(FipaConstant.LOGGED_USER_INFO);
		MasterCpfService service = new MasterCpfService();
		
		request.setAttribute(FipaConstant.LOGGED_ADVSTFNAME, sessMap.get(FipaConstant.LOGGED_USER_ADVSTFNAME));
		request.setAttribute(FipaConstant.LOGGED_ADVSTFID, sessMap.get(FipaConstant.LOGGED_USER_ADVSTFID));
		request.setAttribute(FipaConstant.LOGGED_USER_STFTYPE, sessMap.get(FipaConstant.LOGGED_USER_STFTYPE));
		request.setAttribute(FipaConstant.LOGGED_USER_MGRFLAG, sessMap.get(FipaConstant.LOGGED_USER_MGRFLAG));
		 
		 
		List<MasterCpfAcctype> lstMastAccTypeList = new ArrayList<MasterCpfAcctype>();
		lstMastAccTypeList = service.getAllCpfAccountType();
	 
		request.setAttribute(FipaConstant.CPF_ACCTYPES,lstMastAccTypeList);		
		request.setAttribute(FipaConstant.CPF_AGEGRP_LIST,prop.getCpfAgeGrpList());
		request.setAttribute(FipaConstant.CPF_CONTRB_PARTY_LIST,prop.getCpfContrbPartyList());	 
		request.setAttribute(FipaConstant.CPF_CONTRB_AGE_LIST,prop.getCpfContrbAgeGrpList());

}
public static void setQuotesScreenAttributes(ModelMap model,HttpServletRequest request){
		
		Map<String,String> sessMap = new HashMap<String,String>();
		HttpSession session = request.getSession(false);	
		
		request.setAttribute("token", TokenHelper.setToken(request));	
		
		sessMap =(Map<String,String>)session.getAttribute(FipaConstant.LOGGED_USER_INFO); 
		
		request.setAttribute(FipaConstant.LOGGED_ADVSTFNAME, sessMap.get(FipaConstant.LOGGED_USER_ADVSTFNAME));
		request.setAttribute(FipaConstant.LOGGED_ADVSTFID, sessMap.get(FipaConstant.LOGGED_USER_ADVSTFID));
		request.setAttribute(FipaConstant.LOGGED_USER_STFTYPE, sessMap.get(FipaConstant.LOGGED_USER_STFTYPE));
		request.setAttribute(FipaConstant.LOGGED_USER_MGRFLAG, sessMap.get(FipaConstant.LOGGED_USER_MGRFLAG));
	}
  


  
public static void setCPFScreenAttributes(ModelMap model,HttpServletRequest request){
	
	PropReadUtils prop = new PropReadUtils();
		
	
	Map<String,String> sessMap = new HashMap<String,String>();
	HttpSession session = request.getSession(false);	
	
	request.setAttribute("token", TokenHelper.setToken(request));	
	 
	
	sessMap =(Map<String,String>)session.getAttribute(FipaConstant.LOGGED_USER_INFO); 
	
	request.setAttribute(FipaConstant.LOGGED_ADVSTFNAME, sessMap.get(FipaConstant.LOGGED_USER_ADVSTFNAME));
	request.setAttribute(FipaConstant.LOGGED_ADVSTFID, sessMap.get(FipaConstant.LOGGED_USER_ADVSTFID));
	request.setAttribute(FipaConstant.LOGGED_USER_STFTYPE, sessMap.get(FipaConstant.LOGGED_USER_STFTYPE));
	request.setAttribute(FipaConstant.LOGGED_USER_MGRFLAG, sessMap.get(FipaConstant.LOGGED_USER_MGRFLAG));

	request.setAttribute(FipaConstant.CPF_ACCOUNT_LIST,prop.getCpfAccList()); 
	request.setAttribute(FipaConstant.CPF_AGEGRP_LIST,prop.getCpfAgeGrpList());
	
	request.setAttribute(FipaConstant.CPF_EMPAGEGRP_LIST,prop.getCpfEmpAgeGrpList());
	request.setAttribute(FipaConstant.CPF_EMPWAGEGRP_LIST,prop.getCpfEmpWageGrpList());
	request.setAttribute(FipaConstant.CPF_EMPWAGES_LIST,prop.getmastCpfConWagesList());
	
}

public static List<String> getMultiValue(List uniCoveragelist,String key){
	List<String> lstCov = new ArrayList<String>();
	
	if(uniCoveragelist.size() > 0){ 
		Iterator it = uniCoveragelist.iterator();
		
		while(it.hasNext()){
			Object[] obj = (Object[])it.next();
			String lipid = (String)obj[0];
			String covObj = (String) obj[1];
			if(lipid.equalsIgnoreCase(key)){
				lstCov.add(FipaUtils.keytovalue(covObj));
			}			
		}
		
		if(lstCov.size()==0){
			lstCov.add("NA");
		}
	}
	
	return lstCov;
	
}

}
