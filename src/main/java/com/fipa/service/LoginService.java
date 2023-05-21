package com.fipa.service;


import java.util.Date;
import java.util.List;











import com.fipa.db.LoginDB;
import com.fipa.dbinterface.DBInterfaceFpmsImpl;
import com.fipa.dbinterface.DBInterfaceImpl; 



public class LoginService {
	
	public Date getSysDate(DBInterfaceFpmsImpl dao){
		LoginDB logDB = new LoginDB();
		return logDB.getSysDate(dao);
	}
	
//	 public List validateLogin(FipaUser userparams){	 	
	 public List validateLogin(String ... userparams){
		LoginDB db = new LoginDB();
		return db.validateLogin(userparams);		
	}
	 
	 
	 public List validateAPSLogin(String ... userparams){
			LoginDB db = new LoginDB();
			return db.validateAPSLogin(userparams);		
		
	 
	 }
	 
	 
	 public List validateAppsAccs(String userparams,String strAppsName){
			LoginDB db = new LoginDB();
			return db.validateAppsAccs(userparams,strAppsName);		
		}
	 public List getFIPAAdminFunct(String userparams,String strScreenName){
			LoginDB db = new LoginDB();
			return db.getFIPAAdminFunct(userparams,strScreenName);		
		}
	 
	 public List insertLoginProfile(String userId,String advStfId,String strAdminExists){
		 LoginDB db = new LoginDB();
		 return db.insertLoginProfile(userId, advStfId,strAdminExists);
	 }
	 
	 public List getLoginProfile(DBInterfaceImpl dao,String userId,String advStfId){
		 LoginDB db = new LoginDB();
		 return db.getLoginProfile(dao,userId, advStfId);
	 }
	 
	 public List getFIPAAdminDefltColor(DBInterfaceImpl dao,String userId,String advStfId){
		 LoginDB db = new LoginDB();
		 return db.getFIPAAdminDefltColor(dao,userId, advStfId);
	 }
	 
	
}
