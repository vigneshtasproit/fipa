package com.fipa.service;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Vector;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import com.fipa.db.ClientDB;
import com.fipa.db.MasterCpfDB;
import com.fipa.dbinterface.DBInterfaceImpl; 
import com.fipa.dto.MasterCpfAcctype;
import com.fipa.dto.MasterCpflifePayout;
import com.fipa.util.FipaConstant;
import com.fipa.util.FipaDateUtils;
import com.fipa.util.FipaUtils;
 

public class MasterCpfService {
	
	
	public List<MasterCpfAcctype> getAllCpfAccountType(){
		MasterCpfDB cpfDB = new MasterCpfDB();
		return cpfDB.getAllCpfAccountType();
	}

	public List<MasterCpflifePayout> getAllCpfLifePlan(){
		MasterCpfDB cpfDB = new MasterCpfDB();
		return cpfDB.getAllCpfLifePlan();
	}
	
	public void saveCpfDetails(Vector vectCpfDetails, HttpServletRequest request) {
		// TODO Auto-generated method stub
		MasterCpfDB cpfDB = new MasterCpfDB();
		HttpSession session  = request.getSession(false);
		cpfDB.saveCpfdetails(vectCpfDetails);
	}
	
	public void saveCpfAllocRateDetails(Vector vectCpfAllocDetails,HttpServletRequest request){
		
		MasterCpfDB cpfDB = new MasterCpfDB();
		HttpSession session  = request.getSession(false);
		cpfDB.saveCpfAllocRateDetails(vectCpfAllocDetails);
	}

	public void saveCpfContrbRateDetails(Vector vectCpfContrbDetails,HttpServletRequest request){
		
		MasterCpfDB cpfDB = new MasterCpfDB();
		HttpSession session  = request.getSession(false);
		cpfDB.saveCpfContrbRateDetails(vectCpfContrbDetails);
	}
	
	  public void saveCpfAccTypeDets(Vector vectCpfAccDetails,HttpServletRequest request){
		  
			MasterCpfDB cpfDB = new MasterCpfDB();
			HttpSession session  = request.getSession(false);
			cpfDB.saveCpfAccDetails(vectCpfAccDetails);
		}
		
	  public void saveCpfLifePayoutDets(Vector vectCpfLifePayDetails,HttpServletRequest request){
		  
			MasterCpfDB cpfDB = new MasterCpfDB();
			HttpSession session  = request.getSession(false);
			cpfDB.saveCpfLifePayDetails(vectCpfLifePayDetails);
		}
	
	public List cpfSearch(DBInterfaceImpl dao,String strCpfBufQryParam) {
		// TODO Auto-generated method stub
		MasterCpfDB db = new MasterCpfDB();		 
		 return db.cpfSearch(dao,strCpfBufQryParam);
	}
	
	
	public List cpfSrchExisting(DBInterfaceImpl dao,String strCpfBufQryParam) {
		// TODO Auto-generated method stub
		MasterCpfDB db = new MasterCpfDB();		 
		 return db.cpfSrchExist(dao,strCpfBufQryParam);
	}
	

	
	public List cpfAllocRateSearch(DBInterfaceImpl dao,String strCpfBufQryParam) {
		// TODO Auto-generated method stub
		MasterCpfDB db = new MasterCpfDB();		 
		 return db.cpfAllcRateSearch(dao,strCpfBufQryParam);
	}
	
	public List cpfAllocSrchExisting(DBInterfaceImpl dao,String strCpfBufQryParam) {
		// TODO Auto-generated method stub
		MasterCpfDB db = new MasterCpfDB();		 
		 return db.cpfAllocSrchExist(dao,strCpfBufQryParam);
	}
	
	
	
	public List cpfContrbRateSearch(DBInterfaceImpl dao,String strCpfBufQryParam) {
		// TODO Auto-generated method stub
		MasterCpfDB db = new MasterCpfDB();		 
		 return db.cpfContrbRateSearch(dao,strCpfBufQryParam);
	}
	
	public List cpfContrbSrchExisting(DBInterfaceImpl dao,String strCpfBufQryParam) {
		// TODO Auto-generated method stub
		MasterCpfDB db = new MasterCpfDB();		 
		 return db.cpfContrbSrchExist(dao,strCpfBufQryParam);
	}
	
	public List cpfAccTypeSearch(DBInterfaceImpl dao,String strCpfBufQryParam) {
		// TODO Auto-generated method stub
		MasterCpfDB db = new MasterCpfDB();		 
		 return db.cpfAccTypeSearch(dao,strCpfBufQryParam);
	}
	public List cpfPayoutSearch(DBInterfaceImpl dao,String strCpfBufQryParam) {
		// TODO Auto-generated method stub
		MasterCpfDB db = new MasterCpfDB();		 
		 return db.cpfPayoutSearch(dao,strCpfBufQryParam);
	}
	
	public List cpfRetSearch(DBInterfaceImpl dao,String strCpfBufQryParam) {
		// TODO Auto-generated method stub
		MasterCpfDB db = new MasterCpfDB();		 
		 return db.cpfRetSearch(dao,strCpfBufQryParam);
	}
	
public void saveCpfAccTypeDets(HttpServletRequest request){
		
		MasterCpfDB cpfDB = new MasterCpfDB();
		HttpSession session  = request.getSession(false);
		
		 Map<String,String> sessMap    = new HashMap<String,String>();
		 sessMap = (HashMap<String, String>)session.getAttribute(FipaConstant.LOGGED_USER_INFO);
		 String strCrtdUser = (String)sessMap.get(FipaConstant.LOGGED_USER_ID);
		 
		  
		 
		 String strCpfAcId = FipaUtils.getParamValue(request, "cpfAcId") ;// mastCpfAcctype.getTxtFldCpfAcId();
		  
				 MasterCpfAcctype mastCpfAcctype   = new MasterCpfAcctype(); 
				 
				 if(FipaUtils.nullOrBlank(strCpfAcId)){
					 
					 mastCpfAcctype.setAccType(FipaUtils.getParamValue(request, "accType"));
					 mastCpfAcctype.setAccCrtdBy(strCrtdUser);
					 mastCpfAcctype.setAccCrtdDate(new Date());
				 
					 cpfDB.saveCpfAccTypesDetails(mastCpfAcctype);
				 
				 }else{
					 
					 Date crtdDate = FipaDateUtils.convertDateStringToDate((FipaUtils.getParamValue(request, "txtFldAccCrtdDate")));
					 mastCpfAcctype.setAccCrtdBy(FipaUtils.getParamValue(request, "txtFldAccCrtdBy"));
					 mastCpfAcctype.setAccCrtdDate(crtdDate);		
					 mastCpfAcctype.setCpfAcId(strCpfAcId);
					 
					 mastCpfAcctype.setAccType(FipaUtils.getParamValue(request, "accType"));
					 mastCpfAcctype.setAccModBy(strCrtdUser);
					 mastCpfAcctype.setAccModDate(new Date());
					 cpfDB.updCpfAccTypesDetails(mastCpfAcctype);
					 
				 }
				 

	}

public void delCpfAccTypeDets(HttpServletRequest request) { 
		 
		MasterCpfDB cpfDB = new MasterCpfDB();
		HttpSession session  = request.getSession(false);
		
		 Map<String,String> sessMap    = new HashMap<String,String>();
		 sessMap = (HashMap<String, String>)session.getAttribute(FipaConstant.LOGGED_USER_INFO);
		 String strCrtdUser = (String)sessMap.get(FipaConstant.LOGGED_USER_ID);

		 MasterCpfAcctype mastCpfAcctype   = new MasterCpfAcctype();
		 
				 String strCpfAcId = FipaUtils.getParamValue(request, "cpfAcId") ;// mastCpfAcctype.getTxtFldCpfAcId();
				 String strCpfAcType = FipaUtils.getParamValue(request, "accType");
					 
					 
				 if(!FipaUtils.nullOrBlank(strCpfAcId)){  
					 mastCpfAcctype.setCpfAcId(strCpfAcId);			
					 mastCpfAcctype.setAccType(strCpfAcType);
					 cpfDB.delCpfAccTypeDets(mastCpfAcctype);
				 
				 } 
				  

	}
	
}
