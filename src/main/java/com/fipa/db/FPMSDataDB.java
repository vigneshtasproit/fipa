package com.fipa.db;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.HibernateException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;

import com.fipa.dbinterface.DBInterface;
import com.fipa.dbinterface.DBInterfaceFpms;
import com.fipa.dbinterface.DBInterfaceFpmsImpl;
import com.fipa.dbinterface.DBInterfaceImpl;
import com.fipa.util.ApplicationContextUtils;
import com.fipa.util.FipaConstant;
import com.fipa.util.FipaUtils;

public class FPMSDataDB {
	final Logger logger = LoggerFactory.getLogger(FPMSDataDB.class);
	@SuppressWarnings("unchecked")
	public List getAllAdvStfDets() {
		
		List lstAllAdvStfList = new ArrayList();
 
			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
			DBInterfaceFpms dao = (DBInterfaceFpms) appCtx.getBean(FipaConstant.FPMS_DBIMP_BEAN); 
			String SQL_ADVSTF_QUERY = "SELECT  ADV.ADVSTF_ID, ADV.ADVSTF_NAME,"
					+ " ADV.MANAGER_ID,MGR.ADVSTF_NAME MANAGERNAME,"
					+ "DESIG.DESIG_NAME,DESIG.DESIG_TYPE,DESIG.MGR_FLG "
					+ " FROM "
					+ "ADVISER_STAFF ADV, "
					+ "ADVISER_STAFF MGR, "
					+ "MASTER_EMPLOYMENT_STATUS EMP, "
					+ "MASTER_DESIGNATION DESIG "
					+ " where ADV.EMPSTATUS_ID = EMP.EMPSTATUS_ID "
					+ " AND ADV.DESIG_ID = DESIG.DESIG_ID "
					+ " AND ADV.MANAGER_ID = MGR.ADVSTF_ID "
					+ " AND EMP.EMPSTATUSNAME NOT IN ('RESIGNED','SUSPENDED') ORDER BY 2";
			 logger.info(SQL_ADVSTF_QUERY);
			lstAllAdvStfList =  dao.searchByNativeSQLQuery(SQL_ADVSTF_QUERY);

		return lstAllAdvStfList;
	}
	
	
	@SuppressWarnings("unchecked")
	public List getAllCountryList() {
		
		List lstAllCountry = new ArrayList();

			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
			DBInterfaceFpms dao = (DBInterfaceFpms) appCtx.getBean(FipaConstant.FPMS_DBIMP_BEAN);


			String SQL_COUNTRY_QUERY = "SELECT  COUNTRYCODE,COUNTRYNAME"
					+ " FROM "
					+ "MASTER_COUNTRY ORDER BY 2 "
					;
			 logger.info(SQL_COUNTRY_QUERY);
			lstAllCountry =  dao.searchByNativeSQLQuery(SQL_COUNTRY_QUERY);

		return lstAllCountry;
	}
	
	@SuppressWarnings("unchecked")
	public List getfundMgrList() {
		
		List lstAllfundMgr = new ArrayList();

			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
			DBInterfaceFpms dao = (DBInterfaceFpms) appCtx.getBean(FipaConstant.FPMS_DBIMP_BEAN);


			String SQL_FUNDMGR_QUERY = "select FM_CODE,NAME from SYN_FNA_FPIS_FUNDSMANAGER"
					+ " WHERE STATUS ='AI' ORDER BY UPPER(NAME) ";
			 logger.info(SQL_FUNDMGR_QUERY);
			lstAllfundMgr =  dao.searchByNativeSQLQuery(SQL_FUNDMGR_QUERY);

		return lstAllfundMgr;
	}
	
	
	@SuppressWarnings("unchecked")
	public List getfundNameList() {
		
		List lstAllfundName = new ArrayList();

			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
			DBInterfaceFpms dao = (DBInterfaceFpms) appCtx.getBean(FipaConstant.FPMS_DBIMP_BEAN);


			String SQL_FUNDNAME_QUERY = "SELECT FM_CODE,FUND_CODE,FUND_NAME FROM SYN_FNA_FPIS_FUNDS"
					+ " WHERE STATUS ='AI' ORDER BY UPPER(FUND_NAME) "; 
			 logger.info(SQL_FUNDNAME_QUERY);
			lstAllfundName =  dao.searchByNativeSQLQuery(SQL_FUNDNAME_QUERY);

		return lstAllfundName;
	}
	
	
	
	@SuppressWarnings("unchecked")
	public List getfpmsPrincipalList() {
		
		List lstfpmsPrinList = new ArrayList();

			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
			DBInterfaceFpms dao = (DBInterfaceFpms) appCtx.getBean(FipaConstant.FPMS_DBIMP_BEAN);


//			String SQL_PRINLIST_QUERY = "SELECT PRIN_ID,PRIN_NAME FROM FPMS_MASTER_PRINCIPAL ORDER BY UPPER(PRIN_NAME)";
			String SQL_PRINLIST_QUERY = "SELECT DISTINCT MP.PRIN_ID,MP.PRIN_NAME"
					+ "    FROM   PROD_LOB_TRANS_DETS PT,"
					+ "     MASTER_PRODUCT_LINE MPL    ,"
					+ " MASTER_PRINCIPAL MP"
					+ "    WHERE PT.PRIN_ID IS NOT NULL"
					+ "    AND PT.PRODUCT_LINE_ID = MPL.PRODUCT_LINE_ID"
					+ "    AND (UPPER(MPL.PRODUCT_LINE_MAIN) ='LIFE INSURANCE' OR  UPPER(MPL.PRODUCT_LINE_SUB) IN ('ILP'))"
					+ "	  AND PT.PRIN_ID = MP.PRIN_ID  ORDER BY    UPPER(PRIN_NAME)";
			logger.info(SQL_PRINLIST_QUERY);
			lstfpmsPrinList =  dao.searchByNativeSQLQuery(SQL_PRINLIST_QUERY);

		return lstfpmsPrinList;
	}
		
	
	@SuppressWarnings("unchecked")
	public List getattchCatgList() {
		
		List lstAllAttachCatg = new ArrayList();

			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
			DBInterfaceFpms dao = (DBInterfaceFpms) appCtx.getBean(FipaConstant.FPMS_DBIMP_BEAN);


			String SQL_ATTACHCATG_QUERY = " SELECT ATTACH.ATTACH_CATEG_ID,ATTACH.ATTACH_CATEG_NAME,ATTACH.DOC_TITLE FROM  "
					+  "MASTER_ATTACH_CATEG ATTACH ORDER BY UPPER(ATTACH_CATEG_NAME) ASC "; 
			 
			logger.info(SQL_ATTACHCATG_QUERY);
			lstAllAttachCatg =  dao.searchByNativeSQLQuery(SQL_ATTACHCATG_QUERY);

		return lstAllAttachCatg;
	}
	
	
	@SuppressWarnings("unchecked")
	public List getportofolioList() {
		
		List lstAllPortofolioCatg = new ArrayList();

			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
			DBInterfaceFpms dao = (DBInterfaceFpms) appCtx.getBean(FipaConstant.FPMS_DBIMP_BEAN);


			String SQL_PORTOFOLIO_QUERY = "SELECT MAIN_CATEG,SUB_CATEG FROM FPIS_MASTER_PORTFOLIOCATEG where STATUS='AI' order by MAIN_CATEG ,SUB_CATEG" ;
			logger.info(SQL_PORTOFOLIO_QUERY);
			lstAllPortofolioCatg =  dao.searchByNativeSQLQuery(SQL_PORTOFOLIO_QUERY);

		return lstAllPortofolioCatg;
	}
	
	 
	
	@SuppressWarnings("unchecked")
	public List getAllRelationshipList() {
		
		List lstAllRelatioship = new ArrayList();

			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
			DBInterfaceFpms dao = (DBInterfaceFpms) appCtx.getBean(FipaConstant.FPMS_DBIMP_BEAN);


			String SQL_COUNTRY_QUERY = "SELECT  RELATION_ID,RELATION_NAME"
					+ " FROM "
					+" MASTER_RELATIONSHIP ORDER BY 2 "
					;
			logger.info(SQL_COUNTRY_QUERY);
			lstAllRelatioship =  dao.searchByNativeSQLQuery(SQL_COUNTRY_QUERY);

		return lstAllRelatioship;
	}
	

	public List getFPMSLifeInsuracePolDets(DBInterfaceFpms dao,String ... strParams){
		
		List lstPolicyDets = new ArrayList();
		 
		String strParamFPMS="";
		String strCustName = strParams[0];
		String strCustNric = strParams[1];
		String strCustId = strParams[2];
		String strAppId = strParams[3];
		
//		if(strParams.length == 2){
//			if(!FipaUtils.nullOrBlank(strParams[1])){			
//				strParamFPMS += " and COALESCE(CUST_DETS.NRIC,CUST_DETS.CUST_PASSPORT_NUM,CUST_DETS.CUST_FIN) ='"+strParams[1]+"'";			
//			}
//			
//			if(!FipaUtils.nullOrBlank(strParams[0])){			
//				strParamFPMS +=" and upper(CUST_DETS.CUST_NAME) like '"+strParams[0].toUpperCase()+"'";
//			}
//		}else if(strParams.length == 1){
		if(!FipaUtils.nullOrBlank(strAppId)){
			strParamFPMS +=" and upper(POLDET.APPID) = '"+strAppId+"'";	
		}
		
		if(!FipaUtils.nullOrBlank(strCustId)){		
			strParamFPMS +=" and upper(CUST_DETS.CUSTID) = '"+strCustId+"'";
		}

//		}
		

		
		String STR_POLICY_QRY = "SELECT DISTINCT   'FPMSNL' APPLICATION  ,ADVSTF.ADVSTF_NAME ADIVSER  ,CUST_DETS.CUST_NAME CUST_NAME,CUST_DETS.NRIC NRIC"
				+ "  ,POLDET.POL_PLN_NAME PLANNAME  ,POLDET.POLICYNO POLICYNO  ,PRIN.PRIN_NAME PRINCIPAL"
				+ "  ,'' PREMIUMTYPE  ,POLDET.TOTAL_PREM PREMIUMAMOUNT  ,POLDET.TOTAL_SA ASSURD"
				+ "  ,POLDET.PAYMENT_MODE PAYMENTMODE  ,POLDET.PAYMENT_METHOD PAYMENTMETHOD  ,TO_CHAR(POLDET.EFF_DATE,'DD/MM/YYYY') EFFECTIVEDATE"
				+ "  ,POLDET.RENEWAL_DATE RENEWALDATE  ,'BASIC' BASIC  ,MPS.POL_STATUS_NAME"
				+ " ,UPPER(PL.PRODUCT_LINE_MAIN)MAIN_LOB,UPPER(PL.PRODUCT_LINE_SUB) SUB_LOB ,POLDET.APPID,POLDET.PRIN_ID,"
				+ " (SELECT CST.CUST_NAME from CUSTOMER_DETAILS CST WHERE CUSTID=POLDET.CUSTID_PROPOSED) CUSTID_PROPOSED,"
				+ " (SELECT CST.CUST_NAME from CUSTOMER_DETAILS CST WHERE CUSTID=POLDET.CUSTID_ASSURED) CUSTID_ASSURED,"
						+ " POLDET.POL_TYPE ,POLDET.EFF_DATE"
				+ " FROM  "
				+ "CUSTOMER_DETAILS CUST_DETS  ,"
				+ "ADVISER_STAFF ADVSTF  ,"
				+  "POLICY POLDET,"
				+  "MASTER_PRINCIPAL PRIN,"
				+ "MASTER_PRODUCT_LINE PL  ,"				
				+  "MASTER_POLICY_STATUS MPS"
				+ " WHERE    POLDET.ADVISER_CURRENT = ADVSTF.ADVSTF_ID "
				+ " AND  POLDET.PRIN_ID = PRIN.PRIN_ID AND  POLDET.POL_STATUS_ID = MPS.POL_STATUS_ID "
				+ " AND	POLDET.POLICY_OWNER = CUST_DETS.CUSTID AND  POLDET.PRODUCT_LINE_ID  = PL.PRODUCT_LINE_ID"
				+ " AND  MPS.POL_STATUS_NAME IN( 'INFORCE','RENEWAL') AND "
				+ "  (UPPER(PL.PRODUCT_LINE_MAIN) = ('LIFE INSURANCE') OR UPPER(PL.PRODUCT_LINE_SUB) IN ('ILP','UT'))"
				+ strParamFPMS				
				+ " ORDER BY 13,15";
		logger.info(STR_POLICY_QRY);
		 
		
		
		lstPolicyDets =  dao.searchByNativeSQLQuery(STR_POLICY_QRY);
		
		return lstPolicyDets;
	}

	public List getLifeInsuracePlanDets(DBInterfaceFpms dao,String ... strParams){
		
		List lstPolicyDets = new ArrayList();
		
		String strCustName = strParams[0];
		String strCustNric = strParams[1];
		String strCustId = strParams[2];
		String strAppId =  strParams[3];
		 
		String strParamFPMS="";
		
		/*if(strParams.length == 2){
			if(!FipaUtils.nullOrBlank(strParams[1])){			
				strParamFPMS += " and COALESCE(CUST_DETS.NRIC,CUST_DETS.CUST_PASSPORT_NUM,CUST_DETS.CUST_FIN) ='"+strParams[1]+"'";			
			}
			
			if(!FipaUtils.nullOrBlank(strParams[0])){			
				strParamFPMS +=" and upper(CUST_DETS.CUST_NAME) like '"+strParams[0].toUpperCase()+"'";
			}
			

			if(!FipaUtils.nullOrBlank(strParams[2])){			
				strParamFPMS +=" and upper(POLDET.APPID) like '"+strParams[2].toUpperCase()+"'";
			}
			
		}else if(strParams.length == 1){
			strParamFPMS +=" and upper(CUST_DETS.CUSTID) = '"+strParams[0]+"'";
		}*/
		
		if(!FipaUtils.nullOrBlank(strAppId)){
			strParamFPMS +=" and upper(POLDET.APPID) = '"+strAppId+"'";	
		}
		
		if(!FipaUtils.nullOrBlank(strCustId)){		
			strParamFPMS +=" and upper(CUST_DETS.CUSTID) = '"+strCustId+"'";
		}

		
		String STR_POLICY_QRY = "SELECT DISTINCT   'FPMSNL' APPLICATION  ,ADVSTF.ADVSTF_NAME ADIVSER  ,CUST_DETS.CUST_NAME CUST_NAME  ,CUST_DETS.NRIC NRIC"
				+ "  ,POLINSBAS.BAS_PLAN_NAME PLANNAME  ,POLDET.POLICYNO POLICYNO  ,PRIN.PRIN_NAME PRINCIPAL"
				+ "  ,POLINSBAS.PREM_TYPE PREMIUMTYPE  ,POLINSBAS.PREM_AMT PREMIUMAMOUNT  ,POLINSBAS.SUM_ASSURD ASSURD"
				+ "  ,POLINSBAS.BAS_PAYMENT_MODE PAYMENTMODE  ,POLDET.PAYMENT_METHOD PAYMENTMETHOD  ,TO_CHAR(POLDET.EFF_DATE,'DD/MM/YYYY') EFFECTIVEDATE"
				+ "  ,POLDET.RENEWAL_DATE RENEWALDATE  ,'B' BASIC  ,MPS.POL_STATUS_NAME"
				+ " ,UPPER(PL.PRODUCT_LINE_MAIN)MAIN_LOB,UPPER(PL.PRODUCT_LINE_SUB) SUB_LOB,POLDET.APPID,  POLINSBAS.PREM_TERM,  POLINSBAS.REMARKS"
				+ " FROM  "
				+  "CUSTOMER_DETAILS CUST_DETS  ,"
				+  "ADVISER_STAFF ADVSTF  ,"
				+  "POLICY POLDET,"
				+  "MASTER_PRINCIPAL PRIN,"
				+  "MASTER_PRODUCT_LINE PL  ,"
				+ "POL_INSLIFEBASIC POLINSBAS  ,"
				+ "MASTER_POLICY_STATUS MPS"
				+ " WHERE   POLDET.APPID= POLINSBAS.APPID (+) AND  POLDET.ADVISER_CURRENT = ADVSTF.ADVSTF_ID "
				+ " AND  POLDET.PRIN_ID = PRIN.PRIN_ID AND  POLDET.POL_STATUS_ID = MPS.POL_STATUS_ID "
				+ " AND	POLDET.POLICY_OWNER = CUST_DETS.CUSTID AND  POLDET.PRODUCT_LINE_ID  = PL.PRODUCT_LINE_ID"
				+ " AND  MPS.POL_STATUS_NAME IN( 'INFORCE','RENEWAL') AND "
				+ "  (UPPER(PL.PRODUCT_LINE_MAIN) = ('LIFE INSURANCE') OR UPPER(PL.PRODUCT_LINE_SUB) IN ('ILP','UT'))"
				+ strParamFPMS
				+ " UNION "
				+ " SELECT DISTINCT  'FPMSNL' APPLICATION ,ADVSTF.ADVSTF_NAME ADIVSER ,CUST_DETS.CUST_NAME CUST_NAME "
				+ ",CUST_DETS.NRIC NRIC ,POLINSRDR.RID_PLAN_NAME PLANNAME ,POLDET.POLICYNO POLICYNO ,PRIN.PRIN_NAME PRINCIPAL "
				+ ",POLINSRDR.PREM_TYPE PREMIUMTYPE"
				+ " ,POLINSRDR.PREM_AMT PREMIUMAMOUNT ,POLINSRDR.SUM_ASSURD SUMASSURED ,POLINSRDR.RDR_PAYMENT_MODE PAYMENTMODE"
				+ " ,POLDET.PAYMENT_METHOD PAYMENTMETHOD ,TO_CHAR(POLDET.EFF_DATE,'DD/MM/YYYY')EFFECTIVEDATE ,POLDET.RENEWAL_DATE RENEWALDATE"
				+ " ,'R' RIDER ,MPS.POL_STATUS_NAME ,UPPER(PL.PRODUCT_LINE_MAIN)MAIN_LOB,UPPER(PL.PRODUCT_LINE_SUB) SUB_LOB,POLDET.APPID,  POLINSRDR.PREM_TERM,  POLINSRDR.REMARKS" 
				+ " FROM "
				+  "CUSTOMER_DETAILS CUST_DETS ,"
				+  "ADVISER_STAFF ADVSTF ,"
				+ "POLICY POLDET,"
				+  "MASTER_PRINCIPAL PRIN ,"
				+ "MASTER_PRODUCT_LINE PL  ,"
				+ "POL_INSLIFERIDER POLINSRDR  ,"
				+ "MASTER_POLICY_STATUS MPS"
				+ " WHERE  POLDET.APPID= POLINSRDR.APPID  AND  POLDET.ADVISER_CURRENT = ADVSTF.ADVSTF_ID "
				+ " AND   POLDET.PRIN_ID = PRIN.PRIN_ID AND  POLDET.POL_STATUS_ID = MPS.POL_STATUS_ID"
				+ " AND  POLDET.POLICY_OWNER = CUST_DETS.CUSTID AND  POLDET.PRODUCT_LINE_ID  = PL.PRODUCT_LINE_ID "
				+ " AND  UPPER(PL.PRODUCT_LINE_MAIN) = ('LIFE INSURANCE') AND  "
				+ " MPS.POL_STATUS_NAME IN( 'INFORCE','RENEWAL') "
				+ strParamFPMS
				+ " ORDER BY 6,15";
		logger.info(STR_POLICY_QRY); 
		
		lstPolicyDets =  dao.searchByNativeSQLQuery(STR_POLICY_QRY);
		
		return lstPolicyDets;
	}
	
	
	public List searchFnaDetails(DBInterfaceFpmsImpl dtos, String strCompId, String strDistribId)
			throws HibernateException {

		List tabElements = new ArrayList();
		try {

//			fplog.info("---------> searchFnaDetails " + dtos);
			 String CUST_FNA_DETS = " select '' CNT,ARCH_STATUS,FNA_ID,CLIENT_CONSENT,'MAXROW' QRY FROM  FNA_DETAILS"
			 		+ " WHERE CUST_ID='"+strCompId+"' AND"
			 		+ " FNA_ID =( SELECT MAX(FNA_ID) FROM  FNA_DETAILS WHERE CUST_ID='"+strCompId+"') "
			 		+ " UNION "
			 		+ " select '' CNT,ARCH_STATUS,FNA_ID,CLIENT_CONSENT,'ANYFINALROW'QRY FROM  FNA_DETAILS WHERE CUST_ID='"+strCompId+"' AND ARCH_STATUS ='FINAL'"
			 		+ " UNION "
			 		+ " select  TO_CHAR(COUNT(*))CNT,''ARCH_STATUS,''FNA_ID,'' CLIENT_CONSENT,'CNTROW'QRY  FROM  FNA_DETAILS WHERE CUST_ID='"+strCompId+"'";
			 logger.info(CUST_FNA_DETS);
			tabElements = dtos.searchByNativeSQLQuery(CUST_FNA_DETS);

//			fplog.info("searchFnaDetails elements" + tabElements);

		} catch (HibernateException he) {
//			fplog.info("---------> searchFnaDetails  ", he);
		} finally {
//			fplog.info("---------> searchFnaDetails  finally block");

		}
		return tabElements;

	} 
	
	
public List getCustomerDetsFromFPMS(DBInterfaceFpms dao,String ...strParams){
		
		List clientSrchList = new ArrayList();
		
		String strCustName = strParams[0];
		String strCustNric = strParams[1];
		String strCustId = strParams[2];
		
		String strParamFPMS ="";
		strParamFPMS += " and CUSTID ='"+strCustId+"'";
		strParamFPMS += " and upper(CUST_NAME) like '"+strCustName+"'";
		strParamFPMS += " and COALESCE(NRIC,CUST_PASSPORT_NUM,CUST_FIN) ='"+strCustNric+"'";
		
		
		
		
		
		/*String STR_CUST_QRY = "select CUSTID, CUST_NAME, AGENT_ID_CURRENT, TO_CHAR(DOB,'DD/MM/YYYY'), NATIONALITY, "
				+ "COALESCE(NRIC,CUST_PASSPORT_NUM,CUST_FIN) NRIC, SEX, MARITAL_STATUS, OCCPN_TITLE, OCCPN_DESC, COMPANY_NAME, "
				+ "RES_HAND_PHONE, RES_PH, RES_FAX, EMAIL_ID, INCOME, SMOKER_FLG, "
				+ "RES_ADDR1, RES_ADDR2, RES_ADDR3, RES_POSTALCODE, RES_CITY, RES_STATE, RES_COUNTRY, "
				+ " COR_ADDR1, COR_ADDR2, COR_ADDR3, COR_CITY, COR_STATE, COR_COUNTRY,COR_POSTALCODE "
				+ " FROM "
				+ +".CUSTOMER_DETAILS "
				+ " where COALESCE(NRIC,CUST_PASSPORT_NUM,CUST_FIN) is not null "
				+ strParamFPMS*/
		
		String STR_SELF_SPS_QRY = "SELECT   CUST.CUSTID,  CUST.CUST_CATEG,  CUST.CUST_NAME,  CUST.CUST_INITIALS, "
				+ " DECODE(CUST.CUST_CATEG,'COMPANY',CUST.ROC_NO,COALESCE(CUST.NRIC,CUST.CUST_FIN,CUST.CUST_PASSPORT_NUM))NRIC,"
				+ "  CUST.CUST_STATUS,  CUST.AGENT_ID_INITIAL,  CUST.AGENT_ID_CURRENT,  ADV.ADVSTF_NAME,  CUST.COMPANY_NAME,"
				+ "  CUST.OCCPN_TITLE,  CUST.OCCPN_DESC,  CUST.ADDRESS_PREF,  CUST.RES_ADDR1,  CUST.RES_ADDR2,  CUST.RES_ADDR3,  CUST.RES_CITY,"
				+ "  CUST.RES_STATE,  CUST.RES_COUNTRY,  CUST.RES_POSTALCODE,  CUST.RES_FAX,  CUST.RES_PH,  CUST.RES_HAND_PHONE,  CUST.OFF_ADDR1,"
				+ "  CUST.OFF_ADDR2,  CUST.OFF_ADDR3,  CUST.OFF_CITY,  CUST.OFF_STATE,  CUST.OFF_COUNTRY,  CUST.OFF_POSTALCODE,  CUST.OFF_PH,"
				+ "  CUST.OFF_HAND_PHONE,  CUST.OFF_FAX,  CUST.COR_ADDR1,  CUST.COR_ADDR2,  CUST.COR_ADDR3,  CUST.COR_CITY,  CUST.COR_STATE,"
				+ "  CUST.COR_COUNTRY,  CUST.COR_POSTALCODE,  CUST.OTH_PH,  TO_CHAR(DECODE(CUST.CUST_CATEG,'COMPANY',CUST.ROC_DATE,CUST.DOB),'dd/mm/yyyy')DOB,"
				+ "  CUST.MARITAL_STATUS,  CUST.SEX,  CUST.EMAIL_ID,  CUST.WEBSITE,  CUST.SMOKER_FLG,  CUST.RACE,  CUST.NATIONALITY,  CUST.TITLE,  "
				+ "  CUST.WEIGHT,  CUST.HEIGHT,  CUST.ACADEMIC_TITLE,  CUST.INCOME,  CUST.REMARKS,  FP.CUSTID FP_CUSTID,"
				+ "  FP.NRIC SPNRIC,  FP.CUST_NAME SPCUST_NAME,  FP.CUST_INITIALS SPCUST_INITIALS,  NVL(FP.RELATIONSHIP,'NULL') SPREL,  "
				+ "  FP.AGE SPAGE,  FP.REMARKS SPREMARKS,  FP.SEX SPSEX,  FP.AGENT_ID_CURRENT SPAGENT_ID_CURRENT,  FP.DOB SPDOB,"
				+ "  FP.MARITAL_STATUS SPMARITAL_STS,  FP.INCOME SPINCOME,  ADV.EMAIL_ID ADV_EMAILID,  ADV.MANAGER_ID MGR_ID,"
				+ "  MGR.ADVSTF_NAME MGR_NAME,  MGR.EMAIL_ID MGR_EMAILID "
				+ "  ,  CUST.BUSINESS_NATR ,  CUST.CITIZENSHIP"
				+ "  FROM "+"CUSTOMER_DETAILS CUST ,  "
				+  "ADVISER_STAFF ADV ,"+ "ADVISER_STAFF MGR,"
								+ " (SELECT FP.CUSTID,  FP.NRIC , FP.CUST_NAME ,  FP.CUST_INITIALS , NVL(FP.RELATIONSHIP,'NULL') RELATIONSHIP,"
								+ "    FP.AGE ,    FP.REMARKS ,   FP.SEX ,    FP.AGENT_ID_CURRENT ,    FP.DOB,    FP.MARITAL_STATUS ,"
								+ "    FP.INCOME  FROM CUSTOMER_FAMILYPARTICULARS FP "
								+ "  WHERE CUSTID                            =('"+strCustId+"')"
								+ "  AND UPPER(NVL(FP.RELATIONSHIP,'NULL')) IN ('SPOUSE','REL022','REL22','NULL')"
								+ "  )FP"
								+ " WHERE CUST.CUSTID         =('"+strCustId+"') "
								+ " AND CUST.AGENT_ID_CURRENT = ADV.ADVSTF_ID "
								+ " AND ADV.MANAGER_ID        = MGR.ADVSTF_ID "
								+ " AND CUST.CUSTID           = FP.CUSTID(+) "
								
				;
		logger.info(STR_SELF_SPS_QRY); 
		clientSrchList = dao.searchByNativeSQLQuery(STR_SELF_SPS_QRY);
		
		return clientSrchList;
		
	}


public void saveCustomerDets(DBInterfaceFpmsImpl dao, String strQuery) {
	// TODO Auto-generated method stub
	String SQL_INSERT_CUSTOMERS = strQuery ; 
	 logger.info(SQL_INSERT_CUSTOMERS);
// 	dao.updateDbByNativeSQLQuery(SQL_INSERT_CUSTOMERS);
//		2020-08-10
	 
}

public List PrdtSearch(DBInterfaceFpmsImpl dao,String strCpfBufQryParam) {

	List cpfSrchList = new ArrayList(); 

	
	String HQL_CPF_SEARCH = "SELECT PLAN_NAME,PLAN_CODE,PROD_TYPE  FROM  MASTER_PRODUCT Prdt,"

	+" MASTER_PRODUCT_LINE MPL  WHERE Prdt.PRIN_ID IS NOT NULL "

	+" AND MPL.PRODUCT_LINE_ID =  PRDT.PRODUCT_LINE_ID "

	+" AND (UPPER(MPL.PRODUCT_LINE_MAIN) ='LIFE INSURANCE' OR  UPPER(MPL.PRODUCT_LINE_SUB) IN ('ILP')) "

	 + strCpfBufQryParam + " ORDER BY UPPER(PLAN_NAME) ";
	
	logger.info(HQL_CPF_SEARCH);
	cpfSrchList = dao.searchByNativeSQLQuery(HQL_CPF_SEARCH); 

	return cpfSrchList;

}	

public List rcmPrdtSearch(DBInterfaceFpmsImpl dao,String strCpfBufQryParam) {

	List cpfSrchList = new ArrayList(); 

	String HQL_CPF_SEARCH = "SELECT PLAN_CODE FROM MASTER_PRODUCT rcmPrdt"
			+ " WHERE rcmPrdt.PRIN_ID IS NOT NULL "+ strCpfBufQryParam + "";

	logger.info(HQL_CPF_SEARCH);
	cpfSrchList = dao.searchByNativeSQLQuery(HQL_CPF_SEARCH); 

	return cpfSrchList;

}

public List getCustFamilyDets(DBInterfaceFpms dao , String strCustId){
	
	List custFamList = new ArrayList();
	
	String STR_FAM_QRY =  " SELECT  FP.CUST_NAME , "
			+ " FP.DOB,  CEIL(MONTHS_BETWEEN(SYSDATE, FP.DOB) / 12 - 1)AGE ,COALESCE( FP.NRIC ,FP.FAM_FIN,FAM_PASSPORT_NUM) NRIC,FP.SEX,"
			+ " FP.MARITAL_STATUS ,INCOME, NVL(FP.RELATIONSHIP,'NULL') RELATIONSHIP,  FP.REMARKS ,    FP.AGENT_ID_CURRENT "
			+ " FROM CUSTOMER_FAMILYPARTICULARS FP "
			+ "  WHERE CUSTID  =('"+strCustId+"')";
	
	logger.info(STR_FAM_QRY);
	custFamList = dao.searchByNativeSQLQuery(STR_FAM_QRY); 

	
	return custFamList;
}

public void saveFPMSDets(DBInterfaceFpms dao, String strQuery) {
	// TODO Auto-generated method stub
	String SQL_INSERT_CUSTOMERS = strQuery ; 
	 logger.info(SQL_INSERT_CUSTOMERS);
// 	dao.updateDbByNativeSQLQuery(SQL_INSERT_CUSTOMERS);
//		2020-08-10
	 
}


}
