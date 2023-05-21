package com.fipa.util;


public class FipaConstant {
	
//  public static String FPMSNL_SCHEMA  = "FPMSNL";
	
	
  public static String AVIS_SCHEMA  = "FPIS";
//	public static String AVIS_SCHEMA  = "FPIS_KYC";
	
  
//  public static String FPMSNL_SCHEMA  = "FPMSNL_KYC";   
//  public static String AVIS_SCHEMA  = "FPIS_KYC";
	
//  Never Used Declaration
//	public final static String FP_APPCONTEXT_BEAN="APP_CONTEXT";NU
//  public final static String FP_DBTX_BEAN = "DBTXNBEAN";
//	public final static String FP_SESSMGR_BEAN = "SESSIONMGR";
  
  
	public final static String FP_PROPCONTEXT_BEAN="PROP_BEAN";
	public final static String FP_DBIMP_BEAN="dbImplBean";
	public final static String FPMS_DBIMP_BEAN="fpmsDbImplBean";
	
	

	
	public final static String SESSION_EXPIRED = "sessionExpired";
	public final static String DB_ERROR = "dbError";
	public final static String RE_SUBMIT = "resubmit";
	public final static String FILENOTFOUND = "filenotfound";
	
	public final static String LOGGED_SYSDATE = "LOGGED_SYSDATE";
	
	
	
	public final static String QUERY_MODE  = "Q";
	public final static String INSERT_MODE = "I";
	public final static String UPDATE_MODE = "U";
	public final static String DELETE_MODE = "D";
	
	public final static String STR_PB_MGR_QRYKEY = "STR_PB_MGR_QRYVAL";
	public final static String STR_PB_MGR_QRYVAL = "SELECT RMSTF_ID FROM PB_RM_MANAGER  CONNECT BY PRIOR RMSTF_ID = MANAGER_ID  START WITH RMSTF_ID =";
	
	public final static String LOGGED_USER_DISTRIBUTOR = "LOGGED_USER_DISTRIBUTOR";
	public final static String LOGGED_USER_DISTNAME="LOGGED_USER_DISTNAME";
	public final static String LOGGED_USER_DISTMNEMONIC="LOGGED_USER_DISTMNEMONIC";
	public final static String LOGGED_USER_ID = "LOGGED_USER_ID";
	public final static String LOGGED_USER_ADVSTFID = "LOGGED_USER_ADVSTFID";
	public final static String LOGGED_USER_ADVSTFNAME="LOGGED_USER_ADVSTFNAME";
	public final static String LOGGED_USER_ADVSTF_MGRID = "LOGGED_USER_ADVSTF_MGRID";
	public final static String LOGGED_USER_ADVSTF_MGRNAME = "LOGGED_USER_ADVSTF_MGRNAME";
	public final static String LOGGED_USER_ROLEID="LOGGED_USER_ROLEID";
	public final static String LOGGED_USER_ROLENAME="LOGGED_USER_ROLENAME";
	public final static String LOGGED_USER_COMPACS="LOGGED_USER_COMPACS";
	public final static String LOGGED_USER_MGRFLG="LOGGED_USER_MGRFLG";
	public final static String LOGGED_USER_STFTYPE="LOGGED_USER_STFTYPE";
	public final static String LOGGED_USER_STFTYPE_MNEM="LOGGED_USER_STFTYPE_MNEM";
	public final static String LOGGED_USER_INFO="LOGGED_USER_INFO";
	public final static String LOGGED_USER_ADVSTFINITIAL="LOGGED_USER_ADVSTFINITIAL";
	public final static String LOGGED_USER_MGRFLAG = "LOGGED_USER_MGRFLAG"; 
	public final static String LOGGED_PASSWORD = "LOGGED_PASSWORD"; 
	public final static String LOGGED_DESIGNATION = "LOGGED_DESIGNATION"; 
	public final static String LOGGED_DIST_ID = "DIST_ID";
	public final static String LOGGED_DIST_NAME = "DIST_NAME";
	
	public final static String STR_STFTYPE_STAFF = "STAFF";
	public final static String STR_STFTYPE_RM = "RM";
	
	public final static String STR_EMPSTS_ACTIVE = "ACTIVE";
	
	public final static String STR_COMPACS_VIEWCHNG = "View.Change";
	public final static String STR_COMPACS_VIEWONLY = "View.Only";
	public final static String STR_COMPACS_NOACS = "No.Access";
	
	public final static String EMPTY_STRING = "";
	public final static String NULL_STRING = null;
	public final static String[] NULL_STRING_ARR=null;
	
	public final static String NO_RECORD_FOUND = "No Records Found !";
	
	public final static String NO_PROD_DETS = "No Products for the selected Bank  !";
	
    public static String GLBL_MODULE_CLNT="CLIENT";
    public static String GLBL_MODULE_AGNT="AGENT";
    public static String GLBL_MODULE_POLICY="POLICY";
    
    
    
    public static String GLBL_MODULE_ATTACTMENT="FIPACLIENT";
    public static String FIPA_ATTACH_DB_TBL="FNA_ATTACHMENTS";
    
    public static String GLBL_NO_RECORD = "NO RECORDS";
    

    
      
    
//    Object Mapping Constants
    public final static String SLFSPS_DETS  = "SLFSPS_DETS";
	public final static String AGREE_DETS = "AGREE_DETS";
	public final static String ADVDECLR_DETS = "ADVDECLR_DETS";
	public final static String EXP_DETS = "EXP_DETS";
	public final static String CONTG_DETS = "CONTG_DETS";
	public final static String CONT_DETS = "CONT_DETS";
	public final static String PERS_DETS = "PERS_DETS";
	public final static String APPTYPES_DETS = "APPTYPES_DETS";
	public final static String SRCOFINC_DETS = "SRCOFINC_DETS";
	public final static String CPF_DETS = "CPF_DETS";
	public final static String FNLBTY_DETS = "FNLBTY_DETS";
	public final static String CURASS_DETS = "CURASS_DETS";
	public final static String RETPLN_DETS = "RETPLN_DETS";
	public final static String INVST_DETS = "INVST_DETS";
	public final static String CSHASS_DETS = "CSHASS_DETS";
	public final static String OTHASS_DETS = "OTHASS_DETS";
	public final static String RSKPREF_DETS = "RSKPREF_DETS";
	public final static String SANAL_DETS = "SANAL_DETS";
	public final static String CDAHOC_DETS = "CDAHOC_DETS"; 
	public final static String LIFEINSRCE_DETS="LIFEINSRCE_DETS";
	public final static String AUTOALTER_DETS="AUTOALTER_DETS";
	public final static String CPFACCTYPE_DETS="CPFACCTYPE_DETS";
	public final static String MASTER_PROP_DETS="MASTER_PROP_DETS";
	 public final static String MASTER_RET_SUM_DETS = "MASTER_RET_SUM_DETS";
	//Session Constants
	public final static String token="token"; 
	public final static String LOGGED_ADVSTFNAME="LOGGED_ADVSTFNAME";
	public final static String LOGGED_ADVSTFID="LOGGED_ADVSTFID";
	public final static String ALL_ADVSTF_LIST="ALL_ADVSTF_LIST";
	public final static String ALL_ANALYSIS_TYPES="ALL_ANALYSIS_TYPES";
	
	public final static String FINGLS_PROP="FINGLS_PROP";
	public final static String MARITALSTATUS_LIST="MARITALSTATUS_LIST";
	public final static String GENDER_LIST="GENDER_LIST";
	public final static String NATIONALITY="NATIONALITY";
	public final static String COUNTRY="COUNTRY";
	public final static String COUNTRIES="COUNTRIES";
	public final static String EMPLOYMENT_STATUS="EMPLOYMENT_STATUS";
	public final static String EMPLOYEE_CATEGRY="EMPLOYEE_CATEGRY";
	public final static String RELATIONSHIP_LIST="RELATIONSHIP_LIST";
	public final static String RELATIONSHIP="RELATIONSHIP";
	public final static String TYPES_OF_FINGOALS="TYPES_OF_FINGOALS"; 
	
	public final static String HOSPTYPE_LIST="HOSPTYPE_LIST";
	public final static String WARD_LIST="WARD_LIST";
	public final static String BUSINESS_LIST="BUSINESS_LIST";
	public final static String PROTYPEPLN_LIST="PROTYPEPLN_LIST";
	public final static String PROTYPEFD_LIST="PROTYPEFD_LIST";
	public final static String PAYMENTMODE_LIST="PAYMENTMODE_LIST";
	
	public final static String ACCOUNT_TYPE_LIST="ACCOUNT_TYPE_LIST";
	public final static String SRS_CLASSIFICATION_LIST="SRS_CLASSIFICATION_LIST";
	public final static String SRS_FREQUENCY_LIST="SRS_FREQUENCY_LIST";
	public final static String OWNERSHIP_LIST="OWNERSHIP_LIST";
	public final static String FREQUENCY_LIST="FREQUENCY_LIST";
	public final static String OBJECTIVE_LIST="OBJECTIVE_LIST";
	
	

	public final static String DESC_OF_TRANS_LIST="DESC_OF_TRANS_LIST";
	public final static String TYPES_OF_TRANS_LIST="TYPES_OF_TRANS_LIST";
	public final static String RET_ACC_AGE_LIST="RET_ACC_AGE_LIST";
	
	public final static String CPF_PLANNAMES="CPF_PLANNAMES";
	public final static String CPF_ACCTYPES="CPF_ACCTYPES";
	public final static String CPF_ACCOUNT_LIST="CPF_ACCOUNT_LIST";
	public final static String CPF_AGEGRP_LIST="CPF_AGEGRP_LIST";
	public final static String CPF_CONTRB_PARTY_LIST="CPF_CONTRB_PARTY_LIST";
	public final static String CPF_CONTRB_AGE_LIST="CPF_CONTRB_AGE_LIST";
	
	public final static String CPF_EMPAGEGRP_LIST="CPF_EMPAGEGRP_LIST";
	public final static String CPF_EMPWAGEGRP_LIST="CPF_EMPWAGEGRP_LIST";
	public final static String CPF_EMPWAGES_LIST="CPF_EMPWAGES_LIST";

	//	Input Life Insurance Details
	
	public final static String LI_TYPEOFPLAN_LIST="LI_TYPEOFPLAN_LIST";
	public final static String LI_PAYMENTS_LIST="LI_PAYMENTS_LIST";
	public final static String LI_PAYMETHODS_LIST="LI_PAYMETHODS_LIST";
	public final static String LI_SRCOFPREM_LIST="LI_SRCOFPREM_LIST";
	public final static String LI_TYPEOFPOLICY_LIST="LI_TYPEOFPOLICY_LIST";
	public final static String LI_DDCOVERAGE_LIST="LI_DDCOVERAGE_LIST";
	public final static String LI_TYPEOFCOVERAGE_LIST="LI_TYPEOFCOVERAGE_LIST";
	public final static String LI_TYPEOFCOVERAGE_PROLIST="LI_TYPEOFCOVERAGE_PROLIST";
	public final static String LI_DISABILITY_LIST="LI_DISABILITY_LIST";
	public final static String LI_OBJOFINS_LIST="LI_OBJOFINS_LIST";
	public final static String LI_THIRDPARTY_LIST="LI_THIRDPARTY_LIST";
	public final static String LI_TYPEOFNOM_LIST="LI_TYPEOFNOM_LIST";
	
//	Input Investment Details
	public final static String INV_TYPEOFINVST_LIST="INV_TYPEOFINVST_LIST";
	public final static String INV_FUNDMGR_LIST ="INV_FUNDMGR_LIST";
	public final static String INV_FUNDNAME_LIST ="INV_FUNDNAME_LIST";
	public final static String INV_OBJOFINS_LIST="INV_OBJOFINS_LIST";
	public final static String INV_MASTPRIN_LIST="INV_MASTPRIN_LIST";
	
	public final static String SDRS_PLAN_LIST="SDRS_PLAN_LIST";
	public final static String SDRS_AMT_LIST="SDRS_AMT_LIST";
	
	
	//Attachment Details
	public final static String ATTCH_CATG_LIST="ATTCH_CATG_LIST";
	public final static String ATTCH_TITLE_LIST="ATTCH_TITLE_LIST";
	
	//Investment Portfolio list
	
	public final static String PORTFOLIO_CATG_LIST="PORTFOLIO_CATG_LIST";
	
	//Retirement Cash Flow Analysis
	public final static String RD_CTCASH_DESC_LIST="RD_CTCASH_DESC_LIST";
	public final static String RD_INPINC_DESC_LIST="RD_INPINC_DESC_LIST";
	public final static String RD_PROJINV_DESC_LIST="RD_PROJINV_DESC_LIST";
	public final static String RD_SOURCEOFFUNDS_LIST="RD_SOURCEOFFUNDS_LIST";
	public final static String RD_PROJINV_CLSFY_LIST="RD_PROJINV_CLSFY_LIST";
	
	
	//Attachments
	public final static String FIPS_ERR_FILE_NAME_FORMAT="FIPS_ERR_FILE_NAME_FORMAT";
	
	
	
}


