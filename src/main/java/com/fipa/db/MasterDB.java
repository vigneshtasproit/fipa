package com.fipa.db;

import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;
import java.util.Vector;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;

import com.fipa.dbinterface.DBInterface;
import com.fipa.dbinterface.DBInterfaceImpl;
import com.fipa.dto.FnaLoginpageMsg; 

import com.fipa.dto.MasterCpflifePayout;
import com.fipa.dto.MasterCpflifePlans;
import com.fipa.dto.MasterPropertykv;
import com.fipa.dto.MasterRetSchemeLimits;
import com.fipa.util.ApplicationContextUtils;
import com.fipa.util.FipaConstant;
import com.fipa.util.FipaDateUtils;
import com.fipa.util.FipaUtils;

public class MasterDB {
	final Logger logger = LoggerFactory.getLogger(MasterDB.class);
	public List searchQuotes(DBInterface dao) {

		List quotesList = new ArrayList(); 

		String HQL_QUTE_SEARCH = "SELECT * "+
		" FROM FNA_LOGINPAGE_MSG ";
 
		logger.info(HQL_QUTE_SEARCH);
		quotesList = dao.searchByNativeSQLQuery(HQL_QUTE_SEARCH); 

		return quotesList;

	}


	public void savemasterprop(MasterPropertykv mastpropkv) {
		// TODO Auto-generated method stub
		String strPropId = "";
 
			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
			DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);			
			String strMaxId = (String) dao.fetchMaxId(mastpropkv, "propId");			
			
			strMaxId=FipaUtils.getFormattedMaxPK(strMaxId, "PPT", 16);
			
			strPropId = strMaxId; 
 
			mastpropkv.setPropId(strPropId);
			
			
			dao.saveObject(mastpropkv);
 
	}
	
	public void saveRetSumDetails(MasterRetSchemeLimits retCpfSum){
		 
		String strRetSumId = ""; 
			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
			DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);			
			Double strMaxId = (Double) dao.fetchMaxId(retCpfSum, "schId");	
			
			retCpfSum.setSchId(strMaxId+1);
				
			dao.saveObject(retCpfSum);
 
	}
	 
	
	public void delMasterKeys(MasterPropertykv mastpropkv) {
		// TODO Auto-generated method stub 
			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
			DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);			
		 
			
			dao.deleteObject(mastpropkv);
 
	}
	
	public void  saveQuotes(Vector vectQuotesDetails) {
		// TODO Auto-generated method stub

		ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
		DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);			
		
		Object objQuotesDets = null;
		List insertQuotesList = new ArrayList(0);
		List updateQuotesList = new ArrayList(1);
		List deleteQuotesList = new ArrayList(2);
		
		int vectorSize = vectQuotesDetails.size();

		if (vectorSize > 0) {
			insertQuotesList = (List) vectQuotesDetails.elementAt(0);
			updateQuotesList = (List) vectQuotesDetails.elementAt(1);
			deleteQuotesList = (List) vectQuotesDetails.elementAt(2);
		}

		int insSize = insertQuotesList.size(); 
		if (insSize > 0) {
			
			FnaLoginpageMsg fnaLoginpageMsg=new FnaLoginpageMsg(); 
 
			String strMaxId = (String) dao.fetchMaxId(fnaLoginpageMsg, "id");
			  
			Iterator itIns = insertQuotesList.iterator();
			while (itIns.hasNext()) {
				
				if (strMaxId.length() > 1)
					strMaxId = strMaxId;

				strMaxId = strMaxId.replaceFirst("^0+(?!$)", "");
				strMaxId = String.valueOf(Integer.parseInt(strMaxId) + 1); 
				 
				 
				
				fnaLoginpageMsg = (FnaLoginpageMsg) itIns.next();
				fnaLoginpageMsg.setId(strMaxId); 
		
		     
			}
			objQuotesDets = fnaLoginpageMsg;			
			dao.insertTableObject(insertQuotesList, objQuotesDets);

		}

		int updSize = updateQuotesList.size(); 
		if (updSize > 0) {
			dao.updateTableObject(updateQuotesList, objQuotesDets);
		}

		
		int delSize = deleteQuotesList.size(); 
		if (delSize > 0) {
			dao.deleteTableObject(deleteQuotesList, objQuotesDets);
		}
	}

	@SuppressWarnings("unchecked")
	public List<MasterPropertykv> getFinGlsProp()  {
		
		List<MasterPropertykv> lstofallFingls = new ArrayList<MasterPropertykv>();

		ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
		DBInterface dao = (DBInterface) appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);

		lstofallFingls = (List<MasterPropertykv>) dao.selectQueryByFind(" from com.fipa.dto.MasterPropertykv mastprop where  mastprop.propKey = 'FINGLS' ",null);

		return lstofallFingls;
	}
	@SuppressWarnings("unchecked")
	public List<MasterCpflifePlans> getMastSdrsPlansList()  {
		
		List<MasterCpflifePlans> lstofallPlans = new ArrayList<MasterCpflifePlans>();
		
		

		ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
		DBInterface dao = (DBInterface) appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);

		lstofallPlans = (List<MasterCpflifePlans>) dao.selectQueryByFind(" from com.fipa.dto.MasterCpflifePlans mastplans",null);
		
		return lstofallPlans;
		
	}
	
	@SuppressWarnings("unchecked")
	public List  getMastSdrsAmountList()  {
		
		List  lstofSdrsAmt = new ArrayList();
		String CurrentYr=FipaDateUtils.formatYear(new Date());  
		ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
		DBInterface dao = (DBInterface) appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);

//		lstofSdrsAmt = (List<MasterRetSchemeLimits>) dao.selectQueryByFind(" from com.fipa.dto.MasterRetSchemeLimits mastLifPay where mastLifPay.brthYr="+CurrentYr+"",null);
		lstofSdrsAmt = dao.searchByNativeSQLQuery("SELECT * FROM MASTER_RETSCHEME_LIMITS WHERE BIRTH_YEAR ="+CurrentYr+""); 
		return lstofSdrsAmt;
	}
	
	
	
	public List propSearch(DBInterface dao, String strBufQryParam) {
	 	 
		List propList = new ArrayList(); 

		String HQL_PROP_SEARCH = "SELECT PROP_ID,PROP_VALUE FROM MASTER_PROPERTYKV MAST WHERE MAST.PROP_ID IS NOT NULL  " + strBufQryParam + " ORDER BY UPPER(MAST.PROP_KEY)";
		logger.info(HQL_PROP_SEARCH);
 
		propList = dao.searchByNativeSQLQuery(HQL_PROP_SEARCH); 

	return propList;
	
	}


	public List navSearch(DBInterfaceImpl dao, String strFundCode,
			String strDateInvest) {
		// TODO Auto-generated method stub
		List navList = new ArrayList(); 
		
		String SQL_CURRENT_NAV ="SELECT "
				+ FipaConstant.AVIS_SCHEMA+".FN_GET_NAVSCY('"+strFundCode+"',TO_DATE('"+strDateInvest+"','dd/mm/yyyy')) NAV_PRICE from dual";
		// System.out.println("SQL_CURRENT_NAV====="+SQL_CURRENT_NAV);
		logger.info(SQL_CURRENT_NAV);
		navList = dao.searchByNativeSQLQuery(SQL_CURRENT_NAV);

		return navList; 
	}


	public List autoAlterSearch(DBInterfaceImpl dao, String strautoAlterId) {
		// TODO Auto-generated method stub
List navList = new ArrayList(); 
		
		String SQL_CURRENT_NAV ="SELECT ATTR_NEW_VALUE FROM FNA_AUTO_ALTER WHERE ALT_ID='"+strautoAlterId+"' "; 
		navList = dao.searchByNativeSQLQuery(SQL_CURRENT_NAV);
		logger.info(SQL_CURRENT_NAV);
		return navList; 
	}
	public void updateRetSumDetails(DBInterface dao, MasterRetSchemeLimits retCpfSum) {
		// TODO Auto-generated method stub
		 dao.updateObject(retCpfSum);  
	}
}
