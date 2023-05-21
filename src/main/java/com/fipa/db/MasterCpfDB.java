package com.fipa.db;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Iterator;
import java.util.List;
import java.util.Vector;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;

import com.fipa.dbinterface.DBInterface; 
import com.fipa.dto.FnaApptypes;
import com.fipa.dto.MasterCpfAcctype; 
import com.fipa.dto.MasterCpfAllocRates;
import com.fipa.dto.MasterCpfContribRates;
import com.fipa.dto.MasterCpfIntrates;
import com.fipa.dto.MasterRetSchemeLimits;
import com.fipa.dto.MasterCpflifePayout;
import com.fipa.dto.MasterCpflifePlans;
import com.fipa.util.ApplicationContextUtils;
import com.fipa.util.FipaConstant;
import com.fipa.util.FipaUtils;

public class MasterCpfDB {
	final Logger logger = LoggerFactory.getLogger(MasterCpfDB.class);
	@SuppressWarnings("unchecked")
	public List<MasterCpfAcctype> getAllCpfAccountType() {
		List<MasterCpfAcctype> lstAllcpfAcctypes = new ArrayList<MasterCpfAcctype>();
	 
		ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
		DBInterface dao = (DBInterface) appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);

		lstAllcpfAcctypes = (List<MasterCpfAcctype>) dao.selectQueryByFind("from com.fipa.dto.MasterCpfAcctype cpfactype",null);

		  
		return lstAllcpfAcctypes;
	}
	

	public List<MasterCpflifePayout> getAllCpfLifePlan() {
		List<MasterCpflifePayout> lstAllcpfLifePlan = new ArrayList<MasterCpflifePayout>();
	 
		ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
		DBInterface dao = (DBInterface) appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);

		lstAllcpfLifePlan = (List<MasterCpflifePayout>) dao.selectQueryByFind("from com.fipa.dto.MasterCpflifePayout cpflifepayout",null);

		  
		return lstAllcpfLifePlan;
	}
	
	public void saveCpfdetails(Vector vectCpfDetails) {
		
		
	
		
		// TODO Auto-generated method stub
//
		ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
		DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);			
		
		Object objMasterCpfDets = null;
		List insertMasterCpfList = new ArrayList(0);
		List updateMasterCpfList = new ArrayList(1);
		List deleteMasterCpfList = new ArrayList(2);
		
		int vectorSize = vectCpfDetails.size();

		if (vectorSize > 0) {
			insertMasterCpfList = (List) vectCpfDetails.elementAt(0);
			updateMasterCpfList = (List) vectCpfDetails.elementAt(1);
			deleteMasterCpfList = (List) vectCpfDetails.elementAt(2);
		}

		int insSize = insertMasterCpfList.size(); 
		if (insSize > 0) {
			
			MasterCpfIntrates fnaMasterCpfdetails=new MasterCpfIntrates(); 
 
			String strMaxId = (String) dao.fetchMaxId(fnaMasterCpfdetails, "contrId");
			 
			
			Iterator itIns = insertMasterCpfList.iterator();
			while (itIns.hasNext()) {
				
				if (strMaxId.length() > 1)
					strMaxId = strMaxId.substring(4);

				strMaxId = strMaxId.replaceFirst("^0+(?!$)", "");
				strMaxId = String.valueOf(Integer.parseInt(strMaxId) + 1);
				strMaxId = "MCPF" + FipaUtils.lpadString(8, strMaxId);
				 
				
				fnaMasterCpfdetails = (MasterCpfIntrates) itIns.next();
				fnaMasterCpfdetails.setTxtFldCpfIntId(strMaxId); 
		
		     
			}
			objMasterCpfDets = fnaMasterCpfdetails;			
			dao.insertTableObject(insertMasterCpfList, objMasterCpfDets);

		}

		int updSize = updateMasterCpfList.size(); 
		if (updSize > 0) {
			dao.updateTableObject(updateMasterCpfList, objMasterCpfDets);
		}

		
		int delSize = deleteMasterCpfList.size(); 
		if (delSize > 0) {
			dao.deleteTableObject(deleteMasterCpfList, objMasterCpfDets);
		}
	}
	
	
	public void  saveCpfAccDetails(Vector vectCpfAccDetails) {
		// TODO Auto-generated method stub
		 

		ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
		DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);			
		
		Object objCpfAccDets = null;
		List insertCpfAccList = new ArrayList(0);
		List updateCpfAccList = new ArrayList(1);
		List deleteCpfAccList = new ArrayList(2);
		
		int vectorSize = vectCpfAccDetails.size();

		if (vectorSize > 0) {
			insertCpfAccList = (List) vectCpfAccDetails.elementAt(0);
			updateCpfAccList = (List) vectCpfAccDetails.elementAt(1);
			deleteCpfAccList = (List) vectCpfAccDetails.elementAt(2);
		}

		int insSize = insertCpfAccList.size();  
		if (insSize > 0) {
			MasterCpfAcctype fnaCpfAccdetails=new MasterCpfAcctype();
			//MasterCpfContribRates fnaCpfcondetails=new MasterCpfContribRates(); 
 
			String strMaxId = (String) dao.fetchMaxId(fnaCpfAccdetails, "cpfAcId");
			 
			
			Iterator itIns = insertCpfAccList.iterator();
			while (itIns.hasNext()) {
				
				if (strMaxId.length() > 1)
					strMaxId = strMaxId.substring(6);

				strMaxId = strMaxId.replaceFirst("^0+(?!$)", "");
				strMaxId = String.valueOf(Integer.parseInt(strMaxId) + 1);
				strMaxId = "CPFACC" + FipaUtils.lpadString(6, strMaxId);
				   
				fnaCpfAccdetails = (MasterCpfAcctype) itIns.next();
				fnaCpfAccdetails.setCpfAcId(strMaxId);
		
		     
			}
			objCpfAccDets = fnaCpfAccdetails;			
			dao.insertTableObject(insertCpfAccList, objCpfAccDets);

		}

		int updSize = updateCpfAccList.size(); 
		if (updSize > 0) {
			dao.updateTableObject(updateCpfAccList, objCpfAccDets);
		}

		
		int delSize = deleteCpfAccList.size(); 
		if (delSize > 0) { 
			dao.deleteTableObject(deleteCpfAccList, objCpfAccDets);
		}
	}
	
	public void  saveCpfLifePayDetails(Vector vectCpfLifePayDetails) {
		// TODO Auto-generated method stub
		 

		ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
		DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);			
		
		Object objCpflifePayDets = null;
		List insertCpfAccList = new ArrayList(0);
		List updateCpfAccList = new ArrayList(1);
		List deleteCpfAccList = new ArrayList(2);
		
		int vectorSize = vectCpfLifePayDetails.size();

		if (vectorSize > 0) {
			insertCpfAccList = (List) vectCpfLifePayDetails.elementAt(0);
			updateCpfAccList = (List) vectCpfLifePayDetails.elementAt(1);
			deleteCpfAccList = (List) vectCpfLifePayDetails.elementAt(2);
		}

		int insSize = insertCpfAccList.size();  
		if (insSize > 0) {
			MasterCpflifePayout fnaCpfLifedetails=new MasterCpflifePayout(); 
 
			String strMaxId = (String) dao.fetchMaxId(fnaCpfLifedetails, "pid"); 
			
			Iterator itIns = insertCpfAccList.iterator();
			while (itIns.hasNext()) {
				
				if (strMaxId.length() > 1)
					strMaxId = strMaxId.substring(6);

				strMaxId = strMaxId.replaceFirst("^0+(?!$)", "");
				strMaxId = String.valueOf(Integer.parseInt(strMaxId) + 1);
				strMaxId = "CPFPAY" + FipaUtils.lpadString(14, strMaxId);
				   
				fnaCpfLifedetails = (MasterCpflifePayout) itIns.next();
				fnaCpfLifedetails.setPid(strMaxId);
		
		     
			}
			objCpflifePayDets = fnaCpfLifedetails;			
			dao.insertTableObject(insertCpfAccList, objCpflifePayDets);

		}

		int updSize = updateCpfAccList.size(); 
		if (updSize > 0) {
			dao.updateTableObject(updateCpfAccList, objCpflifePayDets);
		}

		
		int delSize = deleteCpfAccList.size(); 
		if (delSize > 0) { 
			dao.deleteTableObject(deleteCpfAccList, objCpflifePayDets);
		}
	}
	
	public void  saveCpfAllocRateDetails(Vector vectCpfAllocDetails) {
		// TODO Auto-generated method stub

		ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
		DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);			
		
		Object objCpfAlRtDets = null;
		List insertCpfAlRtList = new ArrayList(0);
		List updateCpfAlRtList = new ArrayList(1);
		List deleteCpfAlRtList = new ArrayList(2);
		
		int vectorSize = vectCpfAllocDetails.size();

		if (vectorSize > 0) {
			insertCpfAlRtList = (List) vectCpfAllocDetails.elementAt(0);
			updateCpfAlRtList = (List) vectCpfAllocDetails.elementAt(1);
			deleteCpfAlRtList = (List) vectCpfAllocDetails.elementAt(2);
		}

		int insSize = insertCpfAlRtList.size(); 
		if (insSize > 0) {
			
			MasterCpfAllocRates fnaCpfAlRtdetails=new MasterCpfAllocRates(); 
 
			String strMaxId = (String) dao.fetchMaxId(fnaCpfAlRtdetails, "txtFldCPFAllocId");
			 
			
			Iterator itIns = insertCpfAlRtList.iterator();
			while (itIns.hasNext()) {
				
				if (strMaxId.length() > 1)
					strMaxId = strMaxId.substring(6);

				strMaxId = strMaxId.replaceFirst("^0+(?!$)", "");
				strMaxId = String.valueOf(Integer.parseInt(strMaxId) + 1);
				strMaxId = "CPFALL" + FipaUtils.lpadString(14, strMaxId);
				 
				
				fnaCpfAlRtdetails = (MasterCpfAllocRates) itIns.next();
				fnaCpfAlRtdetails.setTxtFldCPFAllocId(strMaxId); 
		
		     
			}
			objCpfAlRtDets = fnaCpfAlRtdetails;			
			dao.insertTableObject(insertCpfAlRtList, objCpfAlRtDets);

		}

		int updSize = updateCpfAlRtList.size(); 
		if (updSize > 0) {
			dao.updateTableObject(updateCpfAlRtList, objCpfAlRtDets);
		}

		
		int delSize = deleteCpfAlRtList.size(); 
		if (delSize > 0) {
			dao.deleteTableObject(deleteCpfAlRtList, objCpfAlRtDets);
		}
	}
	
	
	
	public void  saveCpfContrbRateDetails(Vector vectCpfContrbDetails) {
		// TODO Auto-generated method stub
		 

		ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
		DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);			
		
		Object objCpfCtrbRtDets = null;
		List insertCpfCtrbRtList = new ArrayList(0);
		List updateCpfCtrbRtList = new ArrayList(1);
		List deleteCpfCtrbRtList = new ArrayList(2);
		
		int vectorSize = vectCpfContrbDetails.size();

		if (vectorSize > 0) {
			insertCpfCtrbRtList = (List) vectCpfContrbDetails.elementAt(0);
			updateCpfCtrbRtList = (List) vectCpfContrbDetails.elementAt(1);
			deleteCpfCtrbRtList = (List) vectCpfContrbDetails.elementAt(2);
		}

		int insSize = insertCpfCtrbRtList.size();  
		if (insSize > 0) {
			
			MasterCpfContribRates fnaCpfcondetails=new MasterCpfContribRates(); 
 
			String strMaxId = (String) dao.fetchMaxId(fnaCpfcondetails, "contrId");
			 
			
			Iterator itIns = insertCpfCtrbRtList.iterator();
			while (itIns.hasNext()) {
				
				if (strMaxId.length() > 1)
					strMaxId = strMaxId.substring(6);

				strMaxId = strMaxId.replaceFirst("^0+(?!$)", "");
				strMaxId = String.valueOf(Integer.parseInt(strMaxId) + 1);
				strMaxId = "CPFCON" + FipaUtils.lpadString(14, strMaxId);
				  
				
				fnaCpfcondetails = (MasterCpfContribRates) itIns.next();
				fnaCpfcondetails.setContrId(strMaxId);
		
		     
			}
			objCpfCtrbRtDets = fnaCpfcondetails;			
			dao.insertTableObject(insertCpfCtrbRtList, objCpfCtrbRtDets);

		}

		int updSize = updateCpfCtrbRtList.size(); 
		if (updSize > 0) {
			dao.updateTableObject(updateCpfCtrbRtList, objCpfCtrbRtDets);
		}

		
		int delSize = deleteCpfCtrbRtList.size(); 
		if (delSize > 0) {
			dao.deleteTableObject(deleteCpfCtrbRtList, objCpfCtrbRtDets);
		}
	}
	
	
	public List cpfSearch(DBInterface dao,String strCpfBufQryParam) {

		List clientSrchList = new ArrayList(); 

		String HQL_CPF_SEARCH = "SELECT CPF_ID,CPF_ACCOUNT,INTEREST_RATE,CPF_INT_MONTH,CREATE_BY,CREATED_DATE " 
				+"from MASTER_CPF_INTRATES  CPF "
				+" WHERE CPF.CPF_ID IS NOT NULL "+ strCpfBufQryParam + "";

		logger.info(HQL_CPF_SEARCH);
		clientSrchList = dao.searchByNativeSQLQuery(HQL_CPF_SEARCH);


		return clientSrchList;

	}

	public List cpfSrchExist(DBInterface dao,String strCpfBufQryParam) {

		List cpfSrchList = new ArrayList(); 

		String HQL_CPF_SEARCH = "SELECT CPF_ID,CPF_ACCOUNT,INTEREST_RATE,CPF_INT_MONTH,CREATE_BY,CREATED_DATE " 
				+"from MASTER_CPF_INTRATES  CPF "
				+" WHERE CPF.CPF_ID IS NOT NULL "+ strCpfBufQryParam + "";
		logger.info(HQL_CPF_SEARCH);

		cpfSrchList = dao.searchByNativeSQLQuery(HQL_CPF_SEARCH);


		return cpfSrchList;

	}


	public List cpfAllcRateSearch(DBInterface dao,String strCpfBufQryParam) {

		List clientSrchList = new ArrayList(); 

		String HQL_CPF_SEARCH = "SELECT ALLOC_ID,EFF_FROM,AGE_GRP,ACC_TYPE,ALLOC_RATE,REMARKS,CREATED_BY,CREATED_DATE " 
				+"from MASTER_CPF_ALLOC_RATES  CPF "
				+" WHERE CPF.ALLOC_ID IS NOT NULL "+ strCpfBufQryParam + " ORDER BY CPF.EFF_FROM";

		logger.info(HQL_CPF_SEARCH);
		clientSrchList = dao.searchByNativeSQLQuery(HQL_CPF_SEARCH);
 
		return clientSrchList;

	}
	

	public List cpfAllocSrchExist(DBInterface dao,String strCpfBufQryParam) {

		List cpfSrchList = new ArrayList(); 

		String HQL_CPF_SEARCH = "SELECT ALLOC_ID,EFF_FROM,AGE_GRP,ACC_TYPE,ALLOC_RATE,REMARKS,CREATED_BY,CREATED_DATE " 
				+"from MASTER_CPF_ALLOC_RATES  CPF "
				+" WHERE CPF.ALLOC_ID IS NOT NULL "+ strCpfBufQryParam + " ORDER BY CPF.EFF_FROM";
		logger.info(HQL_CPF_SEARCH);

		cpfSrchList = dao.searchByNativeSQLQuery(HQL_CPF_SEARCH);


		return cpfSrchList;

	}
	
//	public List cpfContrbRateSearch(DBInterface dao,String strCpfBufQryParam) {
//
//		List clientSrchList = new ArrayList(); 
//	
//		String HQL_CPF_SEARCH = "SELECT CPF_CONTRIB_ID,EMP_AGE,CONTRB_BY_EMPLOYER,CONRTRB_BY_EMPLOYEE,"
//				+ "TOTAL_CONTRRB,CRDT_TO_ORDINARYAC,CRDT_TO_SPECIALAC,CRDT_TO_MEDISAVEAC,CRDT_TO_RETIREMENTAC,"
//				+ "CPF_CRTDBY,CPF_CRTDDATE,REMARKS " 
//				+"from MASTER_CPF_CONTRIBUTION  CPF "
//				+" WHERE CPF.CPF_CONTRIB_ID IS NOT NULL "+ strCpfBufQryParam + " ";
//		 
//		clientSrchList = dao.searchByNativeSQLQuery(HQL_CPF_SEARCH);
//
//
//	return clientSrchList;
//
//}
	public List  cpfContrbRateSearch(DBInterface dao, String strBufQryParam) {

		List mastSrchList = new ArrayList();
 
		
		String HQL_CLIENT_SEARCH = "from com.fipa.dto.MasterCpfContribRates cpf " 
				+ " WHERE cpf.contrId IS NOT NULL "
				+ strBufQryParam
				+ " ORDER BY UPPER(cpf.contrId)";
		 
		logger.info(HQL_CLIENT_SEARCH);	
		
		mastSrchList = dao.selectQueryByFind(HQL_CLIENT_SEARCH,null);
			
		return mastSrchList;

	}
	
	public List cpfContrbSrchExist(DBInterface dao,String strCpfBufQryParam) {

		List cpfSrchList = new ArrayList(); 
	
		String HQL_CPF_SEARCH =  "SELECT CPF_CONTRIB_ID,EMP_AGE,CONTRB_BY_EMPLOYER,CONRTRB_BY_EMPLOYEE,"
				+ "TOTAL_CONTRRB,CRDT_TO_ORDINARYAC,CRDT_TO_SPECIALAC,CRDT_TO_MEDISAVEAC,CRDT_TO_RETIREMENTAC,"
				+ "CPF_CRTDBY,CPF_CRTDDATE,REMARKS " 
				+"from MASTER_CPF_CONTRIBUTION  CPF "
				+" WHERE CPF.CPF_CONTRIB_ID IS NOT NULL "+ strCpfBufQryParam + " ";
		logger.info(HQL_CPF_SEARCH);	
 
		cpfSrchList = dao.searchByNativeSQLQuery(HQL_CPF_SEARCH);


	return cpfSrchList;

}
	
	public List<MasterCpfAcctype> cpfAccTypeSearch(DBInterface dao,String strCpfBufQryParam) {
 
		List cpfSrchList = new ArrayList();
		 
		
		String HQL_CLIENT_SEARCH = "from com.fipa.dto.MasterCpfAcctype cpf " 
				+ " WHERE cpf.cpfAcId IS NOT NULL "
				+ strCpfBufQryParam
				+ " ORDER BY UPPER(cpf.cpfAcId)";
		logger.info(HQL_CLIENT_SEARCH);
		cpfSrchList = dao.selectQueryByFind(HQL_CLIENT_SEARCH,null);
			
		return cpfSrchList; 

}

	public List<MasterCpflifePayout> cpfPayoutSearch(DBInterface dao,String strCpfBufQryParam) {
		 
		List cpfSrchList = new ArrayList();
		
		if(FipaUtils.checkNullVal(dao)){
			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
			dao = (DBInterface) appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);

		}
		 
		int year = Calendar.getInstance().get(Calendar.YEAR);

		String HQL_CLIENT_SEARCH = "from com.fipa.dto.MasterCpflifePayout cpf " 
				+ " WHERE cpf.retScheme IS NOT NULL and  payoutYear = '"+year+"'" ;
				
		if(!FipaUtils.nullOrBlank(strCpfBufQryParam)){
			HQL_CLIENT_SEARCH += strCpfBufQryParam;
		}
			HQL_CLIENT_SEARCH  += " ORDER BY UPPER(cpf.retScheme)";
		logger.info(HQL_CLIENT_SEARCH);
		cpfSrchList = dao.selectQueryByFind(HQL_CLIENT_SEARCH,null);
			
		return cpfSrchList; 

}

	public List<MasterRetSchemeLimits> cpfRetSearch(DBInterface dao, String strCpfBufQryParam) {
		 
		List cpfSrchList = new ArrayList();
		 
		String HQL_CLIENT_SEARCH = "from com.fipa.dto.MasterRetSchemeLimits cpf "
				+ " WHERE cpf.schId IS NOT NULL "
				+ strCpfBufQryParam 
				
				+ "ORDER BY UPPER(cpf.schId)";
				
		logger.info(HQL_CLIENT_SEARCH);
		cpfSrchList = dao.selectQueryByFind(HQL_CLIENT_SEARCH,null);
			
		return cpfSrchList; 

}

	public void saveCpfAccTypesDetails(MasterCpfAcctype mastCpfAcctype) {
		// TODO Auto-generated method stub
		String strCpfId = "";
 
			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
			DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);			
			String strMaxId = (String) dao.fetchMaxId(mastCpfAcctype, "cpfAcId");			
			 
			 
			
			strMaxId=FipaUtils.getFormattedMaxPK(strMaxId, "CPFACC", 6);
			
			strCpfId = strMaxId; 
			mastCpfAcctype.setCpfAcId(strCpfId); 
			
			
			dao.saveObject(mastCpfAcctype);
 
		
	}
	
	
	public void updCpfAccTypesDetails(MasterCpfAcctype mCpfAcctype) {
		// TODO Auto-generated method stub 
		
		ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
			DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
			
			dao.updateObject(mCpfAcctype);
 
	}




	public void delCpfAccTypeDets(MasterCpfAcctype mastCpfAcctype) { 
			// TODO Auto-generated method stub  
				ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
				DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
				dao.deleteObject(mastCpfAcctype);
 
		}
	

}
