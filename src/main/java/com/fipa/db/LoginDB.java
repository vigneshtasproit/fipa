package com.fipa.db;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;

import com.fipa.dbinterface.DBInterfaceFpmsImpl;
import com.fipa.dbinterface.DBInterfaceImpl;
//import com.fipa.dto.FipaUser;
import com.fipa.util.ApplicationContextUtils;
import com.fipa.util.FipaConstant;
import com.fipa.util.FipaUtils;

public class LoginDB {

	final Logger logger = LoggerFactory.getLogger(LoginDB.class);
	
	public Date getSysDate(DBInterfaceFpmsImpl dao) {

		if(FipaUtils.checkNullVal(dao)) {
			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
			dao = (DBInterfaceFpmsImpl) appCtx.getBean(FipaConstant.FPMS_DBIMP_BEAN);
		}
		
		String SQL_SYSDATE = "SELECT SYSDATE FROM DUAL";

		Date sysdate = null;
		List datelist;
		datelist = dao.searchByNativeSQLQuery(SQL_SYSDATE);
		if (datelist.size() > 0)
			sysdate = (Date) datelist.get(0);
		return sysdate;
	}
 
	public List validateLogin(String ... userparams) {
//		CRYPTIT.DECRYPT(
		List userList = new ArrayList(); 
		String SQL_FPMS_VALIDATE_USER = "SELECT FPU.USER_ID,FPU.USERNAME,FPU.STAFF_ID,"
				+ "ADV.ADVSTF_NAME,ADV.ADVSTF_INITIALS,ADV.STAFF_TYPE,ADV.DESIGNATION,"
				+ "ADV.MANAGER_ID,MGR.ADVSTF_NAME MANAGERNAME,SYSDATE CURRDATE,DESG.MGR_FLG,FPU.PASSWORD,FPU.DISTRIBUTOR_ID,FPU.DISTRIBUTOR_NAME"
				+ " FROM "
				+"FPUSER FPU,"
				+"ADVISER_STAFF ADV,"
				+"ADVISER_STAFF MGR,"
				+"MASTER_DESIGNATION DESG"
				+ " where FPU.STAFF_ID = ADV.ADVSTF_ID "
				+ " AND ADV.MANAGER_ID = MGR.ADVSTF_ID "
				+ " AND ADV.DESIG_ID = DESG.DESIG_ID "
				+ " and FPU.USER_ID = '"+userparams[0]+"'"
				+ " and  FPU.PASSWORD ='"+userparams[1]+"'";
//				+ " and  FPU.PASSWORD ='"+userparams[1]+"'";
		 logger.info(SQL_FPMS_VALIDATE_USER);
		ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
		DBInterfaceFpmsImpl dao = (DBInterfaceFpmsImpl) appCtx.getBean(FipaConstant.FPMS_DBIMP_BEAN);	
		
		userList = dao.searchByNativeSQLQuery(SQL_FPMS_VALIDATE_USER);

		return userList;

	}
	
	
	public List validateAPSLogin(String ... userparams) {
//		CRYPTIT.DECRYPT(
		List userList = new ArrayList(); 
		String SQL_FPMS_VALIDATE_USER = "SELECT FPU.USER_ID,FPU.USERNAME,FPU.STAFF_ID,"
				+ "ADV.ADVSTF_NAME,ADV.ADVSTF_INITIALS,ADV.STAFF_TYPE,ADV.DESIGNATION,"
				+ "ADV.MANAGER_ID,MGR.ADVSTF_NAME MANAGERNAME,SYSDATE CURRDATE,DESG.MGR_FLG,FPU.PASSWORD"
				+ " FROM "
				+" FPUSER FPU,"
				+"ADVISER_STAFF ADV,"
				+"ADVISER_STAFF MGR,"
				+"MASTER_DESIGNATION DESG"
				+ " where FPU.STAFF_ID = ADV.ADVSTF_ID "
				+ " AND ADV.MANAGER_ID = MGR.ADVSTF_ID "
				+ " AND ADV.DESIG_ID = DESG.DESIG_ID "
				+ " and ADV.ADVSTF_ID = '"+userparams[0]+"'"; 
		 logger.info(SQL_FPMS_VALIDATE_USER);
		ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
		DBInterfaceFpmsImpl dao = (DBInterfaceFpmsImpl) appCtx.getBean(FipaConstant.FPMS_DBIMP_BEAN);	
 
		
		userList = dao.searchByNativeSQLQuery(SQL_FPMS_VALIDATE_USER);

		return userList;

	}
	
	public List validateAppsAccs(String  userId,String strAppsName) {
		List userList = new ArrayList(); 
		String SQL_FPMS_VALIDATE_USER = "SELECT SCR.SCREENID,SCR.SCREENNAME,FUN.FUNCTID,FUN.FUNCTNAME"
				+ " FROM    FPUSERPRVLG FUP, "
							 +"FPFUNCTION FUN,"
							 +"FPSCREEN SCR "
				+ " WHERE   FUP.FUNCTID = FUN.FUNCTID (+) AND FUP.SCREENID = FUN.SCREENID (+)"
				+ " AND FUN.SCREENID = SCR.SCREENID (+) AND ( ( FUP.USER_ID = '"+userId+"') )"
						+ " AND UPPER(FUN.FUNCTNAME) = '"+strAppsName+"'"
				+ " ORDER BY SCR.SCREENNAME,FUN.FUNCTNAME ";
		
		logger.info(SQL_FPMS_VALIDATE_USER);
		ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
		DBInterfaceFpmsImpl dao = (DBInterfaceFpmsImpl) appCtx.getBean(FipaConstant.FPMS_DBIMP_BEAN);	
 
		
		userList = dao.searchByNativeSQLQuery(SQL_FPMS_VALIDATE_USER);

		return userList;

	}
	
	public List getFIPAAdminFunct(String  userId,String strScreenName) {
		List userList = new ArrayList(); 
		String SQL_FPMS_VALIDATE_USER = "SELECT SCR.SCREENID,SCR.SCREENNAME,FUN.FUNCTID,FUN.FUNCTNAME"
				+ " FROM    FPUSERPRVLG FUP, "
							 +"FPFUNCTION FUN,"
							 +"FPSCREEN SCR "
				+ " WHERE   FUP.FUNCTID = FUN.FUNCTID (+) AND FUP.SCREENID = FUN.SCREENID (+)"
				+ " AND FUN.SCREENID = SCR.SCREENID (+) AND ( ( FUP.USER_ID = '"+userId+"') )"
						+ " AND UPPER(SCR.SCREENNAME) = '"+strScreenName+"'"
				+ " ORDER BY SCR.SCREENNAME,FUN.FUNCTNAME ";
		
		logger.info(SQL_FPMS_VALIDATE_USER);
		ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
		DBInterfaceFpmsImpl dao = (DBInterfaceFpmsImpl) appCtx.getBean(FipaConstant.FPMS_DBIMP_BEAN);	
 
		
		userList = dao.searchByNativeSQLQuery(SQL_FPMS_VALIDATE_USER);

		return userList;

	}
	
	public List getLoginProfile(DBInterfaceImpl dao , String  userId,String strAdvId) {
		
		List userList = new ArrayList();
		
		String STR_SQL_USER_EXISTS =" SELECT NVL(SKIN_COLORS,'DEFAULT')SKIN_COLOR,"
				+ "TO_CHAR(CURR_LOGIN,'DD/MM/YYYY HH:MI:SS')CURR_LOGIN,"
				+ "TO_CHAR(NVL(LAST_LOGIN,CURR_LOGIN),'DD/MM/YYYY HH:MI:SS')LAST_LOGIN FROM FIPA_LOGIN_PROFILE WHERE USER_ID = '"+userId+"'";
		
		if(FipaUtils.nullObj(dao)){
		
			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
			dao = (DBInterfaceImpl) appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
		
		}
		
		
		userList = dao.searchByNativeSQLQuery(STR_SQL_USER_EXISTS);
	
		return userList;
		
	}
	
	
	public List insertLoginProfile(String  userId,String strAdvId,String sstrAdminExists) {
		 
		String SQL_FIPA_LOG_PROFILE = "INSERT INTO FIPA_LOGIN_PROFILE(LOG_ID,USER_ID,ADVSTF_ID,SKIN_COLORS,CURR_LOGIN,LOG_CRTDBY,LOG_CRTD_DATE,FIPA_ADMIN)"
				+ " VALUES(SYS_GUID(),'"+userId+"','"+strAdvId+"',null,SYSDATE,'"+userId+"',SYSDATE,'"+sstrAdminExists+"')";
		
		String SQL_FIPA_LOG_PROFILE_UPD = "UPDATE FIPA_LOGIN_PROFILE SET LAST_LOGIN = CURR_LOGIN , CURR_LOGIN = SYSDATE,FIPA_ADMIN = '"+sstrAdminExists+"' WHERE USER_ID='"+userId+"'";
				
		logger.info(SQL_FIPA_LOG_PROFILE);
		
		ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
		DBInterfaceImpl dao = (DBInterfaceImpl) appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
		
		
		List userList = new ArrayList();
		userList = getLoginProfile(null,userId, strAdvId);
		
		if(userList.size() == 0){
//			dao.updateDbByNativeSQLQuery(SQL_FIPA_LOG_PROFILE);	
//			2020-08-10
		}else{
//			dao.updateDbByNativeSQLQuery(SQL_FIPA_LOG_PROFILE_UPD);
//			2020-08-10
		}
		
//		String STR_SQL_USER_EXISTS =" SELECT NVL(SKIN_COLORS,'DEFAULT')SKIN_COLOR,CURR_LOGIN,LAST_LOGIN FROM FIPA_LOGIN_PROFILE WHERE USER_ID = '"+userId+"'"; 
		
		userList = getLoginProfile(null,userId, strAdvId);
		
 
		
		 

		return userList;

	}
	
	public List getFIPAAdminDefltColor(DBInterfaceImpl dao , String  userId,String strAdvId) {
		
		List userList = new ArrayList();
		
		String STR_SQL_DEFAULTSETTING =" SELECT NVL(SKIN_COLORS, 'DEFAULT') SKIN_COLOR"
				+ " FROM FIPA_LOGIN_PROFILE WHERE DEFAULT_COLOR = 'Y' AND FIPA_ADMIN ='true' FETCH FIRST ROW ONLY";
		
		if(FipaUtils.nullObj(dao)){
		
			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
			dao = (DBInterfaceImpl) appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
		
		}
		
		
		userList = dao.searchByNativeSQLQuery(STR_SQL_DEFAULTSETTING);
	
		return userList;
		
	}
	

}
