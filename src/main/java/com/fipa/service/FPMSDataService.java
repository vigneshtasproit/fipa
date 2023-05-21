package com.fipa.service;

import java.util.List;

import com.fipa.db.ClientDB;
import com.fipa.db.FPMSDataDB;
import com.fipa.dbinterface.DBInterface;
import com.fipa.dbinterface.DBInterfaceFpms;
import com.fipa.dbinterface.DBInterfaceFpmsImpl;
import com.fipa.dbinterface.DBInterfaceImpl;

public class FPMSDataService {
	
	public List getAllAdvStfDets(){
		FPMSDataDB clientDB = new FPMSDataDB();
		return clientDB.getAllAdvStfDets();
	}
	
	public List getAllCountryList(){
		FPMSDataDB clientDB = new FPMSDataDB();
		return clientDB.getAllCountryList();
	}
	
	
	public List getAllRelationshipList(){
		FPMSDataDB clientDB = new FPMSDataDB();
		return clientDB.getAllRelationshipList();
	}
	
	
	public List getFPMSLifeInsuracePolDets(DBInterfaceFpms dao,String ... strParams){
		FPMSDataDB clientDB = new FPMSDataDB();
		return clientDB.getFPMSLifeInsuracePolDets(dao,strParams);
	}
	
	public List getLifeInsuracePlanDets(DBInterfaceFpms dao,String ... strParams){
		FPMSDataDB clientDB = new FPMSDataDB();
		return clientDB.getLifeInsuracePlanDets(dao,strParams);
	}
	
	 public List getCustomerDetsFromFPMS(DBInterfaceFpms dao,String ... strBufQryParam){
		 FPMSDataDB db = new FPMSDataDB();		 
		 return db.getCustomerDetsFromFPMS(dao, strBufQryParam);
	 
	 }
	 
	 public List getCustFamilyDets(DBInterfaceFpms dao,String strBufQryParam){
		 FPMSDataDB db = new FPMSDataDB();		 
		 return db.getCustFamilyDets(dao, strBufQryParam);
	 }
	 
	 

	 
	 public List getfundMgrList(){
			FPMSDataDB clientDB = new FPMSDataDB();
			return clientDB.getfundMgrList();
	}
	 
	 
	 
	 public List getfundNameList(){
			FPMSDataDB clientDB = new FPMSDataDB();
			return clientDB.getfundNameList();
	 }
	 
	 public List getfpmsPrincipalList() {
			FPMSDataDB clientDB = new FPMSDataDB();
			return clientDB.getfpmsPrincipalList();
	 }
	  
	 public List getattchCatgList(){
			FPMSDataDB clientDB = new FPMSDataDB();
			return clientDB.getattchCatgList();
	 }
	 
	 
	 
	 
	 public List getportofolioList(){
			FPMSDataDB clientDB = new FPMSDataDB();
			return clientDB.getportofolioList();
	 }
	 
	 public List searchFnaDetails(DBInterfaceFpmsImpl dto, String strCompId, String strDistribId){
		 FPMSDataDB db = new FPMSDataDB();
	    	return db.searchFnaDetails(dto,strCompId,strDistribId);
	 }

	 
	 
	 public void saveCustomerDets(DBInterfaceFpmsImpl dao, String strQry) {
			// TODO Auto-generated method stub
			
		 FPMSDataDB db = new FPMSDataDB();
		     db.saveCustomerDets(dao,strQry);
		}
	 
	 public String getCustomerId(DBInterfaceFpmsImpl dao) {
			// TODO Auto-generated method stub
			String pwdSeq = "SELECT (MAX(SUBSTR(CUSTID,LENGTH(CUSTID)-25,26))+1) FROM   CUSTOMER_DETAILS ";
			int maxPwdVal =Integer.parseInt(dao.createSeqIdVal(pwdSeq));
			String assignId = String.valueOf(maxPwdVal);
			String qry="SELECT LPAD(" + assignId + ",16,0) FROM DUAL";
			String maxPwdId = "CUST" + dao.createSeqIdVal(qry);
			 
			
			return maxPwdId;
		}
	 
		public List PrdtSearch(DBInterfaceFpmsImpl dao,String strCpfBufQryParam) {
			// TODO Auto-generated method stub
			  FPMSDataDB db = new FPMSDataDB();		 
			 return db.PrdtSearch(dao,strCpfBufQryParam);
		}
		
		
		public List rcmPrdtSearch(DBInterfaceFpmsImpl dao,String strCpfBufQryParam) {
			// TODO Auto-generated method stub
			FPMSDataDB db = new FPMSDataDB();		 
			 return db.rcmPrdtSearch(dao,strCpfBufQryParam);
		}
		
		public void saveFPMSDets(DBInterfaceFpmsImpl dao, String strQry ) {
			// TODO Auto-generated method stub
			FPMSDataDB db = new FPMSDataDB();
		     db.saveFPMSDets(dao,strQry);
		}

	 
}
