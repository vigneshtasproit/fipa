package com.fipa.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Vector;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;







//import net.sf.json.JSONArray;
//import net.sf.json.JSONObject;
import oracle.net.aso.a;

import org.json.JSONArray;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;

import com.fipa.controller.ClientController;
import com.fipa.db.ClientDB;
import com.fipa.dbinterface.DBInterface;
import com.fipa.dbinterface.DBInterfaceFpms;
import com.fipa.dbinterface.DBInterfaceFpmsImpl;
import com.fipa.dbinterface.DBInterfaceImpl; 
import com.fipa.dto.FnaAdvDeclare;
import com.fipa.dto.FnaApptypes;
import com.fipa.dto.FnaAssetBusiandpersdets;
import com.fipa.dto.FnaAssetCashdets;
import com.fipa.dto.FnaAssetOtherdets; 
import com.fipa.dto.FnaAttachments;
import com.fipa.dto.FnaAutoAlter;
import com.fipa.dto.FnaCashAtBank; 
import com.fipa.dto.FnaChilddetails; 
import com.fipa.dto.FnaContingencyDets;
import com.fipa.dto.FnaCpfBalanceDets;
import com.fipa.dto.FnaCpfDeductions; 
import com.fipa.dto.FnaCpfMonthcontDets; 
import com.fipa.dto.FnaCurassDets;
import com.fipa.dto.FnaDependantDets;
import com.fipa.dto.FnaEstatePlan;
import com.fipa.dto.FnaExpenditureDets;
import com.fipa.dto.FnaFinLiability; 
import com.fipa.dto.FnaFingoalsconcern; 
import com.fipa.dto.FnaHealthinsInfo;
import com.fipa.dto.FnaInputinvestmentsDets; 
import com.fipa.dto.FnaInvsetmentSummary; 
import com.fipa.dto.FnaLifeinsuranceBasicriders;
import com.fipa.dto.FnaLifeinsuranceChildedc;
import com.fipa.dto.FnaLifeinsuranceCoverages;
import com.fipa.dto.FnaLifeinsuranceDets;
import com.fipa.dto.FnaLifeinsuranceDisablebenfs;
import com.fipa.dto.FnaLifeinsuranceMvRet;
import com.fipa.dto.FnaLifeinsuranceNominees;
import com.fipa.dto.FnaOthareaconcern;
import com.fipa.dto.FnaOtherAssetdets;
import com.fipa.dto.FnaPersprio;
import com.fipa.dto.FnaPropownDets;
import com.fipa.dto.FnaRecomFundDet;
import com.fipa.dto.FnaRecomPrdtplanDet;
import com.fipa.dto.FnaRecomReasons;
import com.fipa.dto.FnaRetireplanCpflife;
import com.fipa.dto.FnaRetireplanDets;
import com.fipa.dto.FnaRetireplanIncomeasset;
import com.fipa.dto.FnaRetireplanOthpayment;
import com.fipa.dto.FnaRiskprefDets;
import com.fipa.dto.FnaSavingsinvDets;
import com.fipa.dto.FnaSelfspouseDets;
import com.fipa.dto.FnaSrcofincome;
import com.fipa.dto.FnaSrs;
import com.fipa.dto.FnaSummaryAnalysis; 
import com.fipa.dto.FnaSwtchrepFundDet;
import com.fipa.dto.FnaSwtchrepPlanDet;
import com.fipa.dto.FnaVehicleownDets;
import com.fipa.dto.MasterCpfAcctype;
import com.fipa.dto.MasterRetSchemeLimits;
import com.fipa.dto.MasterCpflifePayout;
import com.fipa.dto.MasterPropertykv;
import com.fipa.util.FipaConstant;
import com.fipa.util.FipaDateUtils;
//import com.fipa.dto.FipaAgreements;
//import com.fipa.dto.FipaCustomerDets;
//import com.fipa.dto.FipaDependantDets;
//import com.fipa.dto.FipaSpouseDets;
import com.fipa.util.FipaUtils;
import com.fipa.util.ApplicationContextUtils;
import com.fipa.service.ClientService;  
import com.fipa.service.FPMSDataService;
import com.fipa.service.LoginService;
import com.fipa.service.MasterCpfService;
import com.fipa.service.MasterService;

/**
 * Servlet implementation class ClientServlet
 */

public class FipaServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	final Logger logger = LoggerFactory.getLogger(FipaServlet.class);
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public FipaServlet() {
        super();
        
    }
    
	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doPost(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	 
		logger.info(" ------> Inside doPost Method ");
		
		String strDBCallFor = FipaUtils.getParamValue(request, "DBCALLFOR"); 
		JSONArray retval = new JSONArray();
		PrintWriter out = response.getWriter();
		
		
		if(!FipaUtils.isSessionExpired(request)){
			JSONObject jsonObj = new JSONObject();
			jsonObj.put("SESSION_EXPIRY", "SESSION_EXPIRY");
			retval.put(jsonObj);
			strDBCallFor = "";
		}
		
		
		ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();		
		DBInterfaceImpl dao = (DBInterfaceImpl)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
		DBInterfaceFpmsImpl fpmsdao = (DBInterfaceFpmsImpl)appCtx.getBean(FipaConstant.FPMS_DBIMP_BEAN);		
	
		Date sysdate = FipaUtils.isValidDB(fpmsdao);
		
		if(retval.length() == 0 && FipaUtils.checkNullVal(sysdate) ){
			JSONObject jsonObj = new JSONObject();
			jsonObj.put("DB_ERROR", "DB_ERROR");
			retval.put(jsonObj);
			strDBCallFor = "";
		}
		/*System.out.println(" servlet strDBCallFor-------------------"+strDBCallFor);*/

		if(strDBCallFor.equalsIgnoreCase("CLIENT_SEARCH")){
			retval =  clientSearch(request);
		}
		
		if(strDBCallFor.equalsIgnoreCase("OPEN_CLIENT_PROFILELIST")){
			retval = openClientProfileList(request);
		}	

		if(strDBCallFor.equalsIgnoreCase("GET_CUSTDETS_FROMFPMS")){
			retval = getCustomerDetsFromFPMS(request);
		}	
		
		if(strDBCallFor.equalsIgnoreCase("OPEN_CLIENT_PROFILE")){
			System.out.println("----------OPEN_CLIENT_PROFILE----------------");
			retval = openClientProfile(request);
		}
		if(strDBCallFor.equalsIgnoreCase("CHK_EXIST_NRIC")){
			retval = checkExistingNRIC(request);
		}
		
		if(strDBCallFor.equalsIgnoreCase("GET_FIPALIFEDATA")){
			retval = getLifeInsuranceDets(request);
		} 
		
		if(strDBCallFor.equalsIgnoreCase("DELETE_FIPALIFEDATA")){
			retval = deleteLifeInsuranceDets(request); 
		} 
		 
		if(strDBCallFor.equalsIgnoreCase("GET_FPMS_LIFEDATA")){
			retval = getFPMSlifeDets(request);
		}  
		 
		if(strDBCallFor.equalsIgnoreCase("PRODUCT_LIST")){
			retval = getRecomProductName(request);
		}
		
		if(strDBCallFor.equalsIgnoreCase("MASTER_CPF_SEARCH")){
			retval = cpfSearchDetails(request);
		}
		
		if(strDBCallFor.equalsIgnoreCase("CPF_SRCH_EXIST")){
			retval = cpfCheckExisting(request);
		}
		
		if(strDBCallFor.equalsIgnoreCase("CPF_ALLOC_SEARCH")){
			retval = cpfAllocSearchDetails(request);
		}
		
		if(strDBCallFor.equalsIgnoreCase("CPF_ALLOC_SRCH_EXIST")){
			retval=cpfAllocCheckExisting(request);
		} 
		
		if(strDBCallFor.equalsIgnoreCase("CPFACCTYPE_SEARCH")){ 
			retval=cpfAccountTypeSearch(request);
		}  
		
		if(strDBCallFor.equalsIgnoreCase("CPFPAYOUT_SEARCH")){ 
			retval=cpfLifePayoutSearch(request);
		}
		
		if(strDBCallFor.equalsIgnoreCase("GET_DBQUOTES")){
			retval=QuotesSearch(request);
		}  
		
		if(strDBCallFor.equalsIgnoreCase("FETCH_NAV")){
			retval=fetchNav(request);
		} 
		if(strDBCallFor.equalsIgnoreCase("OLD_AUTOALTER")){
 
			retval=oldAutoAlter(request);
		} 
		if(strDBCallFor.equalsIgnoreCase("PROP_INSERT")){
			retval=propertyInsert(request);
		} 
		
		if(strDBCallFor.equalsIgnoreCase("PROP_SEARCH")){
			retval =  propertySearch(request);
		}
		if(strDBCallFor.equalsIgnoreCase("PROP_DELETE")){
			retval =  propertyDelete(request);
		}
		
		if(strDBCallFor.equalsIgnoreCase("FNA_COUNT_DETAILS")){
			retval = searchFnaDetails(request);
		}
		
		if(strDBCallFor.equalsIgnoreCase("EKYC_TO_FPMS")){
			retval = custDetsInsert(request);
		}
		 
		if(strDBCallFor.equalsIgnoreCase("RET_CPF_LIFE")){
			retval = retCpflife(request);
		}
		
		if(strDBCallFor.equalsIgnoreCase("CPFRET_SEARCH")){
			retval = retsumSearch(request);
		}
		
		if(strDBCallFor.equalsIgnoreCase("GET_CPF_CONTRIB")){
			retval = getCPFContribution(request);
		}
		
		if(strDBCallFor.equalsIgnoreCase("FNA_LIFE_PREMAMT")){
			String strCustId= FipaUtils.getParamValue(request, "strCustId");
			String[] strArrParam = new String[4];
			strArrParam[2]=strCustId;
			JSONObject retJsonObj = fnaLifePremAmt(request,strArrParam);
			
			/* JSONObject retJsonObj = fnaLifePremAmt(request,null); */
//			retval = fnaLifePremAmt(request);
			retval.put(retJsonObj);
		}
		
		if(strDBCallFor.equalsIgnoreCase("FPMS_PLANNAMES_LIST")){
			retval = getFPMSProductPlanName(request);
		}
		
		if(strDBCallFor.equalsIgnoreCase("FIPA_TO_FPMS")){
			retval = fpmsClntDetsInsert(request);
		}
		
		if(strDBCallFor.equalsIgnoreCase("GET_CPF_PROJECTION")){
			retval = getCPFProjectionList(request);
		}
		
		if(strDBCallFor.equalsIgnoreCase("FPMS_POLICY")){
    		retval =  getFPMSPolicy(request);
    	}
		
		if(strDBCallFor.equalsIgnoreCase("GET_SRS_PROJECTION")){
			retval = getSRSProjectionList(request);
		}
		
		
		out.print(retval);
	}
	
	
	 
  
private JSONArray retCpflife(HttpServletRequest request) {
		// TODO Auto-generated method stub
	
	 logger.info(" ------> Inside checkretCpflife Method ");
	
	 	JSONArray retValues = new JSONArray();
		
	
		JSONObject clfeTabJsnObj =  new JSONObject();
		JSONArray clfeDataJsnArr = new JSONArray();
		
		List clfeSearchList = new ArrayList();		
		ClientService serv=new ClientService(); 

		
		try{
		
			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
			
			DBInterfaceImpl dao = (DBInterfaceImpl)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
			
			String strFNAID = FipaUtils.getParamValue(request, "txtFldFNAID");
			
			String strRetAge = FipaUtils.getParamValue(request, "txtFldRetAge");
			
			
			String strRetPlanCode =  FipaUtils.getParamValue(request, "txtFldPlanCode");
			
			String strPlegedvalue =  FipaUtils.getParamValue(request, "txtFldPlegedvalue");
			
			String strTopRAErsvalue =  FipaUtils.getParamValue(request, "txtFldTopRAErsvalue");
			

			String strContDets  = "";
			BigDecimal dbRABal = new BigDecimal(0.0);;

			if(strRetPlanCode.equalsIgnoreCase("BP")){
				
				List clientSearchList = serv.getCPFProjectionList(dao,strFNAID);
				
				Iterator it = clientSearchList.iterator();
					
				
				int sino=0;
				while(it.hasNext()){
					
						
						Object[] client = (Object[]) it.next();					
						String strAge = String.valueOf(FipaUtils.nullObj(client[1]) ? "" : (client[1])) ;
						
						if(strAge.equalsIgnoreCase("65")){
							dbRABal = (BigDecimal)(FipaUtils.nullObj(client[41]) ? "" : (client[41]));
							break;
						}
						
						/*jsnCPFProjDataObj.put("FNA_ID", FipaUtils.getObjValue(client[0]));
						jsnCPFProjDataObj.put("SELF_AGE", FipaUtils.nullObj(client[1]) ? "" : (client[1]) );
						jsnCPFProjDataObj.put("SELF_RETIRE_AGE", FipaUtils.getObjValue(client[2]));
						jsnCPFProjDataObj.put("SELF_OW", FipaUtils.getObjValue(client[3]));
						jsnCPFProjDataObj.put("SELF_AW", FipaUtils.getObjValue(client[4])); 
						jsnCPFProjDataObj.put("SELF_OA_BAL", FipaUtils.getObjValue(client[5])); 
						jsnCPFProjDataObj.put("SELF_OA_ANNLCONTRIB", FipaUtils.getObjValue(client[6])); 
						jsnCPFProjDataObj.put("SELF_OA_ADDITION", FipaUtils.getObjValue(client[7])); 
						jsnCPFProjDataObj.put("SELF_OA_DEDUCTION", FipaUtils.getObjValue(client[8])); 
						jsnCPFProjDataObj.put("SELF_OA_ENDBAL_INIT", FipaUtils.getObjValue(client[9])); 
						
						
						jsnCPFProjDataObj.put("SELF_OA_EXT_ADDL_PARK", FipaUtils.getObjValue(client[10]));
						jsnCPFProjDataObj.put("SELF_OA_ADDL_PARK", FipaUtils.getObjValue(client[11]));
						jsnCPFProjDataObj.put("SELF_OA_EXT_ADDLP_AMT", FipaUtils.getObjValue(client[12]));
						jsnCPFProjDataObj.put("SELF_OA_ADDLP_AMT", FipaUtils.getObjValue(client[3]));
						jsnCPFProjDataObj.put("SELF_OA_BASEP_AMT", FipaUtils.getObjValue(client[14])); 
						jsnCPFProjDataObj.put("SELF_OA_ENDBAL", FipaUtils.getObjValue(client[15])); 
						jsnCPFProjDataObj.put("SELF_SA_BAL", FipaUtils.getObjValue(client[16])); 
						jsnCPFProjDataObj.put("SELF_SA_ANNLCONTRIB", FipaUtils.getObjValue(client[7])); 
						jsnCPFProjDataObj.put("SELF_SA_ADDITION", FipaUtils.getObjValue(client[18])); 
						jsnCPFProjDataObj.put("SELF_SA_DEDUCTION", FipaUtils.getObjValue(client[19])); 
						
						jsnCPFProjDataObj.put("SELF_SA_ENDBAL_INIT", FipaUtils.getObjValue(client[20]));
						jsnCPFProjDataObj.put("SELF_SA_EXT_ADDL_PARK", FipaUtils.getObjValue(client[21]));
						jsnCPFProjDataObj.put("SELF_SA_ADDL_PARK", FipaUtils.getObjValue(client[22]));
						jsnCPFProjDataObj.put("SELF_SA_EXT_ADDLP_AMT", FipaUtils.getObjValue(client[23]));
						jsnCPFProjDataObj.put("SELF_SA_ADDLP_AMT", FipaUtils.getObjValue(client[24])); 
						jsnCPFProjDataObj.put("SELF_SA_BASEP_AMT", FipaUtils.getObjValue(client[25])); 
						jsnCPFProjDataObj.put("SELF_SA_ENDBAL", FipaUtils.getObjValue(client[26])); 
						jsnCPFProjDataObj.put("SELF_SA_EXCESS_FROM_MA", FipaUtils.getObjValue(client[27])); 
						jsnCPFProjDataObj.put("SELF_MA_BAL", FipaUtils.getObjValue(client[28])); 
						jsnCPFProjDataObj.put("SELF_MA_ANNLCONTRIB", FipaUtils.getObjValue(client[29])); 
						
						jsnCPFProjDataObj.put("SELF_MA_ADDITION", FipaUtils.getObjValue(client[30]));
						jsnCPFProjDataObj.put("SELF_MA_DEDUCTION", FipaUtils.getObjValue(client[31]));
						jsnCPFProjDataObj.put("SELF_MA_ENDBAL_INIT", FipaUtils.getObjValue(client[32]));
						jsnCPFProjDataObj.put("SELF_MA_EXCESS_AMT_BI", FipaUtils.getObjValue(client[33]));
						jsnCPFProjDataObj.put("SELF_MA_EXT_ADDL_PARK", FipaUtils.getObjValue(client[34]));
						jsnCPFProjDataObj.put("SELF_MA_ADDL_PARK", FipaUtils.getObjValue(client[35])); 
						jsnCPFProjDataObj.put("SELF_MA_EXT_ADDLP_AMT", FipaUtils.getObjValue(client[36])); 
						jsnCPFProjDataObj.put("SELF_MA_ADDLP_AMT", FipaUtils.getObjValue(client[37])); 
						jsnCPFProjDataObj.put("SELF_MA_BASEP_AMT", FipaUtils.getObjValue(client[38])); 
						jsnCPFProjDataObj.put("SELF_MA_ENDBAL", FipaUtils.getObjValue(client[39])); 
						jsnCPFProjDataObj.put("SELF_MA_EXCESS_AMT_AI", FipaUtils.getObjValue(client[40])); 
						
						jsnCPFProjDataObj.put("SELF_RA_BAL", FipaUtils.getObjValue(client[41]));
						jsnCPFProjDataObj.put("SELF_RA_FROM_SA", FipaUtils.getObjValue(client[42]));
						jsnCPFProjDataObj.put("SELF_RA_FROM_MA", FipaUtils.getObjValue(client[43]));
						jsnCPFProjDataObj.put("SELF_RA_ADDITION", FipaUtils.getObjValue(client[44]));
						jsnCPFProjDataObj.put("SELF_RA_DEDUCTION", FipaUtils.getObjValue(client[45])); 
						jsnCPFProjDataObj.put("SELF_RA_ENDBAL_INIT", FipaUtils.getObjValue(client[46])); 
						jsnCPFProjDataObj.put("SELF_RA_ADDLP1_BAL", FipaUtils.getObjValue(client[47])); 
						jsnCPFProjDataObj.put("SELF_RA_ADDLP2_BAL", FipaUtils.getObjValue(client[48])); 
						jsnCPFProjDataObj.put("SELF_RA_BASEP_AMT", FipaUtils.getObjValue(client[48])); 
						jsnCPFProjDataObj.put("SELF_RA_ENDBAL", FipaUtils.getObjValue(client[50])); 
						
						jsnCPFProjDataObj.put("SELF_RA_EXCESS_RA_MA_AI", FipaUtils.getObjValue(client[50]));
						jsnCPFProjDataObj.put("SELF_OA_ALLOC", FipaUtils.getObjValue(client[52]));
						jsnCPFProjDataObj.put("SELF_OA_PRCNT", FipaUtils.getObjValue(client[53]));
						jsnCPFProjDataObj.put("SELF_SA_ALLOC", FipaUtils.getObjValue(client[54]));
						jsnCPFProjDataObj.put("SELF_SA_PRCNT", FipaUtils.getObjValue(client[55])); 
						jsnCPFProjDataObj.put("SELF_MA_ALLOC", FipaUtils.getObjValue(client[56])); 
						jsnCPFProjDataObj.put("SELF_MA_PRCNT", FipaUtils.getObjValue(client[57])); 
						jsnCPFProjDataObj.put("SELF_RA_ALLOC", FipaUtils.getObjValue(client[58])); 
						jsnCPFProjDataObj.put("SELF_RA_PRCNT", FipaUtils.getObjValue(client[59])); 
						jsnCPFProjDataObj.put("SELF_SA_FLOW_TO_RA", FipaUtils.getObjValue(client[60])); 
						
						jsnCPFProjDataObj.put("SELF_RA_TOT_ADDITION", FipaUtils.getObjValue(client[61]));
						jsnCPFProjDataObj.put("SELF_RA_TOT_DEDUCTION", FipaUtils.getObjValue(client[62]));
						jsnCPFProjDataObj.put("SELF_SA_ANY_EXCESS", FipaUtils.getObjValue(client[63]));
						jsnCPFProjDataObj.put("SELF_SA_ANY_LACKING", FipaUtils.getObjValue(client[64]));
						jsnCPFProjDataObj.put("SELF_SA_ENDBAL_RET", FipaUtils.getObjValue(client[65])); 
						jsnCPFProjDataObj.put("SELF_OA_ANY_EXCESS", FipaUtils.getObjValue(client[66])); 
						jsnCPFProjDataObj.put("SELF_OA_ANY_LACKING", FipaUtils.getObjValue(client[67])); 
						jsnCPFProjDataObj.put("SELF_OA_ENDBAL_RET", FipaUtils.getObjValue(client[68])); 
						
						retValues.put(jsnCPFProjDataObj);
				*/			
				}

				
			}
			
		 
			clfeSearchList = serv.cpfPayoutIncomeSearch(dao,strRetAge,strRetPlanCode,strPlegedvalue,strTopRAErsvalue);
			
			if(clfeSearchList.size() > 0){
				
				Iterator ite = clfeSearchList.iterator();
				 
				BigDecimal dbPrem = new BigDecimal(0.0);
				
				 
				while(ite.hasNext()){
					JSONObject clfeDataJsnObj = new JSONObject();
					Object[] clife = (Object[]) ite.next();		
					
					dbPrem = (BigDecimal)(FipaUtils.nullObj(clife[0]) ? "" : (clife[0]));
					
					
					clfeDataJsnObj.put("LIFEPREM", FipaUtils.getObjValue(clife[0]));
					clfeDataJsnObj.put("LIFEPAYOUT", FipaUtils.getObjValue(clife[1]));
					clfeDataJsnObj.put("FROM_RA", strRetPlanCode.equalsIgnoreCase("BP")?
							dbPrem.multiply(dbRABal) : FipaUtils.getObjValue(clife[2]) ); 
						 
											
					clfeDataJsnArr.put(clfeDataJsnObj); 
						
				}
				
				clfeTabJsnObj.put("RET_CPF_LIFE_RES", clfeDataJsnArr);
			}
			else{
				
				clfeTabJsnObj.put("RET_CPF_LIFE_NORES", "");
				
			}
			
			

			retValues.put(clfeTabJsnObj);
			 
			
			
		}catch(Exception ex){
			logger.error("",ex);
			
		}
		
		return retValues;
	}

 
private JSONArray fetchNav(HttpServletRequest request) {
		// TODO Auto-generated method stub
	logger.info(" ------> Inside fetchNav Method ");
	JSONArray retValues = new JSONArray(); 
	
	List navSearchList = new ArrayList();		 
    MasterService navserv=new MasterService();

	
	try{
	
		ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();		
		DBInterfaceImpl dao = (DBInterfaceImpl)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
		
		String strFundCode = FipaUtils.getParamValue(request, "strFundCode");
		strFundCode = java.net.URLDecoder.decode(strFundCode,"UTF-8");
		strFundCode= strFundCode.replace("\'", "\''");
		  
		String strDateInvest = FipaUtils.getParamValue(request, "strDateInvest");
		strDateInvest = java.net.URLDecoder.decode(strDateInvest,"UTF-8");
		strDateInvest= strDateInvest.replace("\'", "\''");		  
		 
		navSearchList = navserv.navSearch(dao,strFundCode,strDateInvest); 
		
		if(navSearchList.size() > 0){
			
			Iterator it = navSearchList.iterator();
			   
			while(it.hasNext()){ 
				JSONObject navTabJsnObj =  new JSONObject(); 
				BigDecimal nav = (BigDecimal) it.next(); 			 
				navTabJsnObj.put("CURRENT_NAV", FipaUtils.getObjValue(nav));
				retValues.put(navTabJsnObj);
			} 
		}else{
			JSONObject navTabJsnObj =  new JSONObject(); 
			navTabJsnObj.put("NO_NAV", "0"); 
			retValues.put(navTabJsnObj);
		}
		 
		
		  
		
	}catch(Exception ex){
		logger.error("",ex);
		
		
	}
	
	return retValues;
	}




private JSONArray oldAutoAlter(HttpServletRequest request) {
		// TODO Auto-generated method stub
	logger.info(" ------> Inside oldAutoAlter Method ");
	JSONArray retValues = new JSONArray(); 
	JSONObject navTabJsnObj =  new JSONObject(); 
	List navSearchList = new ArrayList();		 
    MasterService navserv=new MasterService();

	
	try{
	
		ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
		
		DBInterfaceImpl dao = (DBInterfaceImpl)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
		
			 
		

		String strautoAlterId= FipaUtils.getParamValue(request, "autoAlterId");
		strautoAlterId = java.net.URLDecoder.decode(strautoAlterId,"UTF-8");
		strautoAlterId= strautoAlterId.replace("\'", "\''");
		   
		 
		navSearchList = navserv.autoAlterSearch(dao,strautoAlterId); 
		
		if(navSearchList.size() > 0){
			
			Iterator it = navSearchList.iterator();
			   
			while(it.hasNext()){ 
				String oldvalue = (String) it.next(); 			 
				navTabJsnObj.put("OLD_VALUE", oldvalue); 
			} 
		}else{
			navTabJsnObj.put("NO_OLD_VALUE", ""); 
		} 
		retValues.put(navTabJsnObj);
		  
		
	}catch(Exception ex){
	logger.error("",ex);
		
	}
	
	return retValues;
	}

public JSONArray propertySearch(HttpServletRequest request){
		 
	logger.info(" ------> Inside propertySearch Method ");
		JSONArray retValues = new JSONArray();
		
		
		JSONObject propTabJsnObj =  new JSONObject();
		JSONArray propDataJsnArr = new JSONArray();
		
		List propSearchList = new ArrayList();		 
        MasterService propserv=new MasterService();

		
		try{
		
			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
			
			DBInterfaceImpl dao = (DBInterfaceImpl)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
			
				 
			

			String strKey = FipaUtils.getParamValue(request, "strKey");
			strKey = java.net.URLDecoder.decode(strKey,"UTF-8");
			strKey= strKey.replace("\'", "\''");
			  
			 
			StringBuffer strBufQryParam = new StringBuffer();
		 
			
			if(!FipaUtils.nullOrBlank(strKey)){
				strBufQryParam.append(" and UPPER(MAST.PROP_KEY) = '").append(strKey.toUpperCase()).append("'");
				
			}
			
			
			propSearchList = propserv.propSearch(dao,strBufQryParam.toString()); 
			if(propSearchList.size() > 0){
				
				Iterator it = propSearchList.iterator();
				   
				while(it.hasNext()){
					JSONObject propDataJsnObj = new JSONObject();
					Object[] propObj = (Object[]) it.next();					
 
					propDataJsnObj.put("propid", FipaUtils.getObjValue(FipaUtils.checkNullVal(propObj[0].toString())?"":propObj[0].toString())); 
					propDataJsnObj.put("propval", FipaUtils.getObjValue(FipaUtils.checkNullVal(propObj[1].toString())?"":propObj[1].toString())); 
						 
											
					propDataJsnArr.put(propDataJsnObj); 
						
				}
				propTabJsnObj.put("FINGLS", propDataJsnArr);
			
			}
			 
			
			
			retValues.put(propTabJsnObj);
			 
			 
			
			
		}catch(Exception ex){
			logger.error("",ex);
			
		}
		
		return retValues;
		
	}
	
	
	


public JSONArray propertyDelete(HttpServletRequest request){
		 
	logger.info(" ------> Inside propertyDelete Method ");
	 JSONArray retval=new JSONArray();

	  	JSONObject propDataJsnObj = new JSONObject();
		JSONObject propTabJsnObj =  new JSONObject(); 
		
		
	 String strid = FipaUtils.getParamValue(request, "strid"); 
	 String strKey = FipaUtils.getParamValue(request, "strKey");
	 
		
	 MasterService mastServ=new MasterService();
	 HttpSession session  = request.getSession(false);
	 Map<String,String> sessMap    = new HashMap<String,String>();
	 sessMap = (HashMap<String, String>)session.getAttribute(FipaConstant.LOGGED_USER_INFO);
	 String strCrtdUser = (String)sessMap.get(FipaConstant.LOGGED_USER_ID);
	 try{
		
			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
			
			DBInterfaceImpl dao = (DBInterfaceImpl)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
			  
			MasterPropertykv mastPropkv=new MasterPropertykv(); 
			  
			
			if(strKey.equalsIgnoreCase("FINGLS"))
			{
				mastPropkv.setPropKey(strKey);
				mastPropkv.setPropId(strid); 
				mastServ.delMasterKeys(mastPropkv);
				propTabJsnObj.put("FINGLS",true);
			}
			
			 retval.put(propTabJsnObj); 
			 
		}catch(Exception ex){
			logger.error("",ex);
			
		} 
	  
	 
	return retval;
		
	}	
	
	
	

	

	public JSONArray clientSearch(HttpServletRequest request){
		 
		logger.info(" ------> Inside clientSearch Method ");
		JSONArray retValues = new JSONArray();
		
		
		JSONObject countryTabJsnObj =  new JSONObject();
		JSONArray clntDataJsnArr = new JSONArray();
		
		List clientSearchList = new ArrayList();		
		List fpmsClientSearchList = new ArrayList();
		List bothList = new ArrayList();
		ClientService serv=new ClientService(); 

		
		try{
		
			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
			
			DBInterfaceImpl dao = (DBInterfaceImpl)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
			DBInterfaceFpmsImpl fpmsdao = (DBInterfaceFpmsImpl)appCtx.getBean(FipaConstant.FPMS_DBIMP_BEAN);
			
				
			String strCustName = FipaUtils.getParamValue(request, "strSrchClntName");
			strCustName = java.net.URLDecoder.decode(strCustName,"UTF-8");
			strCustName= strCustName.replace("\'", "\''");
			
			String strCustNric = FipaUtils.getParamValue(request, "strSrchClntNric");
			strCustNric = java.net.URLDecoder.decode(strCustNric,"UTF-8");
			strCustNric= strCustNric.replace("\'", "\''");
			
			String strSrchAdviser = FipaUtils.getParamValue(request, "strSrchAdviser");
			strSrchAdviser = java.net.URLDecoder.decode(strSrchAdviser,"UTF-8");
			strSrchAdviser= strSrchAdviser.replace("\'", "\''");
			
			 
			
			StringBuffer strBufQryParam = new StringBuffer();
			
			HttpSession session = request.getSession(false);
			Map<String,String> sessMap = new HashMap<String,String>();
			sessMap =(Map<String,String>)session.getAttribute(FipaConstant.LOGGED_USER_INFO);
			String strLoggedAdvStfId = (String)sessMap.get(FipaConstant.LOGGED_USER_ADVSTFID);
			String strLoggedStfType = (String)sessMap.get(FipaConstant.LOGGED_USER_STFTYPE);
			

			
			bothList = serv.clientSearch(dao,fpmsdao,strCustName,strCustNric,strSrchAdviser);//strLoggedAdvStfId,strLoggedStfType
			clientSearchList = (List) bothList.get(1);
			fpmsClientSearchList = (List) bothList.get(0);
			
			
			int sino=0;
			int jsonSize=0;
			
			if(  (fpmsClientSearchList.size() >0)){
				
				Iterator it = fpmsClientSearchList.iterator();
				
				 
				while(it.hasNext()){
					
					JSONObject clntDataJsnObj = new JSONObject();
					
					Object[] client = (Object[]) it.next();					

						clntDataJsnObj.put("sino",++sino);
						 
						String strCustId = FipaUtils.getObjValue(FipaUtils.checkNullVal(client[5])?"":client[5].toString());
						String strFnaId = FipaUtils.getObjValue(FipaUtils.checkNullVal(client[6])?"":client[6].toString());
						
						clntDataJsnObj.put("fnaId",strFnaId);//FipaUtils.getObjValue(FipaUtils.checkNullVal(client[0])?"":client[0].toString())		
						
						clntDataJsnObj.put("dfSelfName", FipaUtils.getObjValue(FipaUtils.checkNullVal(client[0])?"":client[0].toString()));	
											
						clntDataJsnObj.put("dfSelfNric", FipaUtils.getObjValue(FipaUtils.checkNullVal(client[1])?"":client[1].toString()));	
						
						clntDataJsnObj.put("dfSelfPersemail", FipaUtils.getObjValue(FipaUtils.checkNullVal(client[2])?"":client[2].toString()));	
						
						clntDataJsnObj.put("dfSelfMobile", FipaUtils.getObjValue(FipaUtils.checkNullVal(client[3])?"":client[3].toString()));	
						
						clntDataJsnObj.put("dfSelfHomeaddr", "");//FipaUtils.getObjValue(FipaUtils.checkNullVal(client[5])?"":client[5].toString())	
						
						clntDataJsnObj.put("strFipaExists", "");	
						
						clntDataJsnObj.put("strFpmsExists",FipaUtils.getObjValue(FipaUtils.checkNullVal(client[4])?"":client[4].toString()));// FipaUtils.getObjValue(FipaUtils.checkNullVal(client[7])?"":client[7].toString())	
						
						clntDataJsnObj.put("strFpmsCustId", strCustId);			
											
						clntDataJsnArr.put(clntDataJsnObj);
//						jsonSize = clntDataJsnArr.size();
						
				}
				
			}
			 
			
			if((clientSearchList.size() > 0) ){
				
				Iterator it = clientSearchList.iterator();
				
				String strContDets  = "";
				
				
				while(it.hasNext()){
					
					JSONObject clntDataJsnObj = new JSONObject();
					
					Object[] client = (Object[]) it.next();					

						clntDataJsnObj.put("sino",++sino);
						
						String strFpmsExist = "";
						boolean boolToBeInlcude = true;
						 
						String strCustId = FipaUtils.getObjValue(FipaUtils.checkNullVal(client[5])?"":client[5].toString());
						String strFnaId = FipaUtils.getObjValue(FipaUtils.checkNullVal(client[6])?"":client[6].toString());
					 	
						if(!FipaUtils.nullOrBlank(strCustId)){
							
							
							for(int n = 0; n < clntDataJsnArr.length(); n++)
							{
								
								JSONObject jsonObj = clntDataJsnArr.getJSONObject(n);
								String strTmpCustId = jsonObj.get("strFpmsCustId").toString();
								
								if(strTmpCustId.equalsIgnoreCase(strCustId)){
								 	jsonObj.put("strFipaExists","Y");
									jsonObj.put("fnaId",strFnaId);
									boolToBeInlcude =false;
									break;
								}
								
							}
							
						}
						
						
						
						
						if(boolToBeInlcude){
							
							
							clntDataJsnObj.put("fnaId","");//FipaUtils.getObjValue(FipaUtils.checkNullVal(client[0])?"":client[0].toString())		
							
							clntDataJsnObj.put("dfSelfName", FipaUtils.getObjValue(FipaUtils.checkNullVal(client[0])?"":client[0].toString()));	
												
							clntDataJsnObj.put("dfSelfNric", FipaUtils.getObjValue(FipaUtils.checkNullVal(client[1])?"":client[1].toString()));	
							
							clntDataJsnObj.put("dfSelfPersemail", FipaUtils.getObjValue(FipaUtils.checkNullVal(client[2])?"":client[2].toString()));	
							
							clntDataJsnObj.put("dfSelfMobile", FipaUtils.getObjValue(FipaUtils.checkNullVal(client[3])?"":client[3].toString()));	
							
							clntDataJsnObj.put("dfSelfHomeaddr", "");//FipaUtils.getObjValue(FipaUtils.checkNullVal(client[5])?"":client[5].toString())	
							
							clntDataJsnObj.put("strFipaExists", FipaUtils.getObjValue(FipaUtils.checkNullVal(client[4])?"":client[4].toString()));	
							
							clntDataJsnObj.put("strFpmsExists",strFpmsExist);// FipaUtils.getObjValue(FipaUtils.checkNullVal(client[7])?"":client[7].toString())	
							
							clntDataJsnObj.put("strFpmsCustId", strCustId);	
							
												
							clntDataJsnArr.put(clntDataJsnObj);
							
							
						} 
						
				}
				
			}
			
			jsonSize = clntDataJsnArr.length();
			 
			if(jsonSize == 0 ){				
				countryTabJsnObj.put("CLIENT_SEARCH_NOREC", "");				
			}else{
				countryTabJsnObj.put("CLIENT_SEARCH", clntDataJsnArr);
			}
			
			
	
			retValues.put(countryTabJsnObj);
			 
			
			
		}catch(Exception ex){
			logger.error("---->",ex);
			
		}
		
		return retValues;
		
	}
	
	String strClntNamPartlr;
	
	public JSONArray openClientProfileList(HttpServletRequest request){
		 
		logger.info(" ------> Inside openClientProfileList Method ");
		JSONArray retValues = new JSONArray();
		JSONObject objAnalysFr =new JSONObject();
		JSONObject objPurpose =new JSONObject();
		
		JSONObject jsnObjTab =  new JSONObject();
		JSONArray clntDataJsnArr = new JSONArray();	
			
		ClientService serv=new ClientService(); 
		
		try{
		
			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
			DBInterfaceImpl dao = (DBInterfaceImpl)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);				
			 
			String strCustId = FipaUtils.getParamValue(request, "strCustId");
			String strCustName = FipaUtils.getParamValue(request, "strClientName");
			System.out.println("strCustName----------"+strCustName);
			strClntNamPartlr=strCustName;
			String strFNAId = FipaUtils.getParamValue(request, "strFNAId");
			
			strCustName = java.net.URLDecoder.decode(strCustName,"UTF-8");
			strCustName= strCustName.replace("\'", "\''");
			
			String strCustNric = FipaUtils.getParamValue(request, "strClientNRIC");
			strCustNric = java.net.URLDecoder.decode(strCustNric,"UTF-8");
			strCustNric= strCustNric.replace("\'", "\''");
			
			StringBuffer strBufQryParam = new StringBuffer();
			
			if(!FipaUtils.nullOrBlank(strCustName)){
				strBufQryParam.append(" and ss.DF_SELF_NAME = '"+strCustName+"'");
			} 
			if(!FipaUtils.nullOrBlank(strCustNric)){
//				strBufQryParam.append(" and ss.DF_SELF_NRIC = '"+strCustNric+"'");
			}  
			if(!FipaUtils.nullOrBlank(strCustId)){
                strBufQryParam.append(" and ss.FPMS_CUSTID = '"+strCustId+"'");
            }
			
			List clientTabDetsList = new ArrayList();
			clientTabDetsList = serv.openClientProfileList(dao,strBufQryParam.toString());
				
			int clientTabSize = clientTabDetsList.size();
			
			if(clientTabSize > 0){
				Iterator it = clientTabDetsList.iterator();
				while(it.hasNext()){
					
					JSONObject clntDataJsnObj = new JSONObject();
					String strApplicants = "";
					Object[] objs = (Object[]) it.next();
					 
 	
					clntDataJsnObj.put("strFnaId",FipaUtils.checkNullVal(objs[0]) ? "" : objs[0].toString());
					clntDataJsnObj.put("strFnaCrtdBy",FipaUtils.checkNullVal(objs[1]) ? "" : objs[1].toString());		 
					
					clntDataJsnObj.put("strFnaCrtdDate",FipaUtils.checkNullVal(objs[2]) ? "" :   (objs[2]));
 

					String strAnalysisFor= FipaUtils.checkNullVal(objs[3]) ? "" : objs[3].toString();
					strAnalysisFor = (strAnalysisFor.equalsIgnoreCase("\"\"")) ? "":strAnalysisFor;
					
					if(!FipaUtils.nullOrBlank(strAnalysisFor))
					{
						objAnalysFr = new JSONObject(strAnalysisFor.toString());
					}
					
					
					String strPurpose= FipaUtils.checkNullVal(objs[4]) ? "" : objs[4].toString();					
					strPurpose = (strPurpose.equalsIgnoreCase("\"\"")) ? "":strPurpose;
					
					if(!FipaUtils.nullOrBlank(strPurpose))
					{
						objPurpose =new JSONObject(strPurpose.toString());
					}
					
					
					String strSelf = FipaUtils.checkNullVal(objAnalysFr.get("ANALYS_SLF")) ? "" : objAnalysFr.get("ANALYS_SLF").toString();
					String strSpouse = FipaUtils.checkNullVal(objAnalysFr.get("ANALYS_SPS")) ? "" : objAnalysFr.get("ANALYS_SPS").toString();
					String strFamily = FipaUtils.checkNullVal(objAnalysFr.get("ANALYS_FAM")) ? "" : objAnalysFr.get("ANALYS_FAM").toString();
					
					
					
					String strRepl = FipaUtils.checkNullVal(objs[6]) ? "" : objs[6].toString(); 
					
					if(strSelf.equalsIgnoreCase("Y")){strApplicants +="Self"+","; }
					
					if(strSpouse.equalsIgnoreCase("Y")){ strApplicants +="Spouse"+","; }
					
					if(strFamily.equalsIgnoreCase("Y")){ strApplicants +="Family"+","; }
					 
					clntDataJsnObj.put("strFnaApplicants",strApplicants.replaceAll(",", "<br/>")); 
					clntDataJsnObj.put("strFnaAnalysisList",FipaUtils.checkNullVal(objs[7]) ? "" :( "<li>"+ objs[7].toString().replaceAll(",", "</li><li>")));
					clntDataJsnObj.put("strFnaCustId",FipaUtils.checkNullVal(objs[8]) ? "" : objs[8].toString());
					clntDataJsnObj.put("strFnaCustName",FipaUtils.checkNullVal(objs[9]) ? "" : objs[9].toString());
					clntDataJsnObj.put("strFnaCustNRIC",FipaUtils.checkNullVal(objs[10]) ? "" : objs[10].toString());
					clntDataJsnObj.put("strFnaType",FipaUtils.checkNullVal(objs[11]) ? "" : objs[11].toString());
					clntDataJsnObj.put("strFnaProfRemarks",FipaUtils.checkNullVal(objs[12]) ? "" : objs[12].toString());
					clntDataJsnObj.put("strFnaAdvRemarks",FipaUtils.checkNullVal(objs[13]) ? "" : objs[13].toString());
					
					clntDataJsnArr.put(clntDataJsnObj);
					
					
				}
				

				
				jsnObjTab.put("CLIENT_PROFILE_LIST", clntDataJsnArr); 
			}else{
				jsnObjTab.put("NO_CLIENT_PROFILE_LIST", FipaConstant.GLBL_NO_RECORD);
			}
			
			
	
			retValues.put(jsnObjTab); 
			 
			
			
		}catch(Exception ex){
			logger.error("--->",ex);
				
		}
		
		return retValues;
		
	}
	
	public JSONArray openClientProfile(HttpServletRequest request){
		System.out.println("-----------openClientProfile-------------");
		logger.info(" ------> Inside openClientProfile Method ");
		
		HttpSession session  = request.getSession(false);
		 Map<String,String> sessMap    = new HashMap<String,String>();
		 sessMap = (HashMap<String, String>)session.getAttribute(FipaConstant.LOGGED_USER_INFO);
		 String strCrtdUser = (String)sessMap.get(FipaConstant.LOGGED_USER_ID);
		
		JSONArray retValues = new JSONArray();	 
		JSONArray jsnFnaEstPlanArr = new JSONArray(); 
		 
		
		JSONArray jsnFnaAssetsArr = new JSONArray();
		JSONObject FnaRdIncTab = new JSONObject();
		JSONObject FnaRdIncAssTab = new JSONObject();
		JSONObject clientDetailsTab =  new JSONObject();
		
		
		JSONObject childDetailsTab = new JSONObject();
		JSONObject retCpfLifeDetailsTab = new JSONObject();
		
		JSONObject FinGoalsDetailsTab = new JSONObject();
		
		JSONObject depntDetailsTab = new JSONObject();
		
		JSONObject savingsInvDetailsTab = new JSONObject(); 
		
		JSONObject FnaAssetsDetailsTab = new JSONObject();
		JSONObject FnaPersAssetsDetailsTab = new JSONObject();
		JSONObject OthAreaCrnDetailsTab = new JSONObject();
//		JSONObject ReasonsDetailsTab = new JSONObject();
		JSONObject AutoAltrDetailsTab = new JSONObject();

		JSONObject PropOwnCPFDetailsTab = new JSONObject(); 
		
		JSONObject cpfBalanceDetsTab = new JSONObject();
		JSONObject cpfMthCtrbDetsTab =  new JSONObject(); 
		JSONObject CADDetsTab =  new JSONObject();
		 
		JSONObject HIDetailsTab = new JSONObject(); 
		JSONObject AttachmentTab = new JSONObject(); 
		JSONObject VehOwnDetailsTab = new JSONObject(); 
//		JSONObject RcmPrdDetailsTab = new JSONObject(); 
//		JSONObject RcmPrdFundDetailsTab = new JSONObject();
//		JSONObject SwtchPlnDetailsTab = new JSONObject();
//		JSONObject SwtchFundDetailsTab = new JSONObject();
		JSONObject CashOfBankDetailsTab = new JSONObject(); 
		JSONObject SRSDetailsTab = new JSONObject(); 
		JSONObject OthRetDetailsTab = new JSONObject(); 
		JSONObject InputInvestMentTab = new JSONObject();
		JSONObject typesOfAppDetsTab = new JSONObject();  
		
		JSONObject advDeclareDetsTab = new JSONObject();
		JSONObject expenditureDetsTab =  new JSONObject();
		
		JSONObject contgDetsTab =  new JSONObject();  
		JSONObject perprioDetsTab =  new JSONObject();
		JSONObject srcOfincDetsTab =  new JSONObject(); 
		JSONObject finlbDetsTab =  new JSONObject();
		JSONObject curassDetsTab =  new JSONObject();
		JSONObject retireplnDetsTab =  new JSONObject();
		JSONObject invstDetsTab =  new JSONObject();
		JSONObject cashDetsTab =  new JSONObject();
		JSONObject othassDetsTab =  new JSONObject();
		JSONObject otherAssetDetailsTab = new JSONObject();
		JSONObject rskprefDetsTab =  new JSONObject();
		JSONObject sumanalDetsTab =  new JSONObject(); 
		JSONObject estplanTab = new JSONObject(); 
		
		JSONObject fpmsfipaPolTab = new JSONObject();
		JSONObject fipaCoverageTab = new JSONObject();
		JSONObject fipaTpdCoverageTab = new JSONObject();
		JSONObject fipaEarlyCiCoverageTab = new JSONObject();
		JSONObject fipaAdvCICoverageTab = new JSONObject();
		//Existing policies
		
		
		JSONArray polDataJsnArr = new JSONArray();
		JSONArray covDataJsnArr = new JSONArray();
		JSONArray covTpdDataJsnArr = new JSONArray();
		JSONArray covCiDataJsnArr = new JSONArray();
		JSONArray covAdvDataJsnArr = new JSONArray();
		
		List clientTabDetsList = new ArrayList();
		
		List childTabDetsList = new ArrayList();
		List retCpfLifeDetsList = new ArrayList();
		List finGoalsTabDetsList = new ArrayList();
		
		List depntTabDetsList = new ArrayList();
		List otherAssetTabDetsList = new ArrayList();
		List savInvTabDetsList = new ArrayList();  
		 
		List OthAreaCnDetsList = new ArrayList();
//		List RecmResonList = new ArrayList(); 
		List AutoAltrList = new ArrayList(); 
		
		List cpfBalanceList = new ArrayList();
		List cpfMthCtbTabDetsList = new ArrayList();  
		List<FnaCpfDeductions>  CADTabDetsList = new ArrayList();  
		
		List HITabDetsList = new ArrayList(); 
		List AttTabDetsList = new ArrayList(); 
		
		
		List VehOwnTabDetsList = new ArrayList(); 
		List IPINVTabDetsList = new ArrayList();
//		List RcmPrdTabDetsList = new ArrayList();
//		List RcmPrdPlnTabDetsList = new ArrayList();
//		List RcmPrdFundTabDetsList = new ArrayList();
//		List SwtPlanTabDetsList = new ArrayList();
//		List SwtFundTabDetsList = new ArrayList(); 
		List CashOfBankDetsList = new ArrayList(); 
		List SRSDetsList = new ArrayList(); 
		List RDOtherIncomeList = new ArrayList(); 
		List InputInvestMentList= new ArrayList();
			
		List typesOfAppDetsList = new ArrayList(); 
 		List advDeclareDetsList = new ArrayList();
		List expenditureDetsList = new ArrayList();
		
		List contgDetsList = new ArrayList();
//		List contingencyDetsList = new ArrayList();
		List perprioDetsList = new ArrayList();
		List srcOfincDetsList = new ArrayList(); 
		List finlbDetsList = new ArrayList();
		List curassDetsList = new ArrayList();
		List retireplnDetsList = new ArrayList();
		List invstDetsList = new ArrayList();
		List cashDetsList = new ArrayList();
		List othassDetsList = new ArrayList();
		List rskprefDetsList = new ArrayList();
		List sumanalDetsList = new ArrayList(); 
		List policyDetList = new ArrayList();
		List coverageDetList = new ArrayList();
		List tpdCoverageDetList = new ArrayList();
		List earlyciCoverageDetList = new ArrayList();
		List advancedciCoverageDetList = new ArrayList();
		
		List<FnaLifeinsuranceDets> LifeInsSearchList = new ArrayList(); 	 
		List<FnaAssetBusiandpersdets>  fnabusiPerDetsList = new ArrayList(); 
		List<FnaRetireplanIncomeasset>  fnaRdIncomeAssList = new ArrayList(); 
		List<FnaPropownDets>  fnpropertyOwnList = new ArrayList(); 		
		List<FnaEstatePlan>  estPlanDetsList = new ArrayList(); 
		
		 ClientService serv=new ClientService();
		FPMSDataService serv1 = new FPMSDataService();
		LoginService logserv =  new LoginService();
			
		 
		try{
			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
			DBInterfaceImpl dao = (DBInterfaceImpl)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
			DBInterfaceFpmsImpl fpmsdao = (DBInterfaceFpmsImpl)appCtx.getBean(FipaConstant.FPMS_DBIMP_BEAN);
			
			String strCustId = FipaUtils.getParamValue(request,"strCustId");
			String strFNAId = FipaUtils.getParamValue(request,"strFNAId");
			String strClientName = FipaUtils.getParamValue(request,"strClientName");//Just Reuse Purpose 
			 String strClientNRIC= FipaUtils.getParamValue(request,"strClientNRIC");//Just Reuse Purpose
			 String strAdvId= FipaUtils.getParamValue(request,"strAdvId");
			 
			 StringBuffer strBufQryParamFIPALife = new StringBuffer();			  
				
				if(!FipaUtils.nullOrBlank(strClientNRIC)){
					strBufQryParamFIPALife.append(" AND UPPER(cust.dfSelfNric) = '").append(strClientNRIC.toUpperCase()).append("'");
					
				}
				
				if(!FipaUtils.nullOrBlank(strFNAId)){
					strBufQryParamFIPALife.append(" AND lipinc.fnaSelfspouseDets in ("
							+ "select A.fnaId from com.fipa.dto.FnaSelfspouseDets A,"
							+ " com.fipa.dto.FnaSelfspouseDets B  WHERE  A.dfSelfName =  B.dfSelfName"
							+ "  AND A.advstfId = B.advstfId AND B.fnaId = '"+strFNAId+"') ");
					
				}
				
				
				
				if(!FipaUtils.nullOrBlank(strClientName)){
					strBufQryParamFIPALife.append(" AND UPPER(cust.dfSelfName) = '").append(strClientName.toUpperCase()).append("'");
					
				} 
				
				
				if(!FipaUtils.nullOrBlank(strAdvId)){
					strBufQryParamFIPALife.append(" AND UPPER(cust.advstfId) = '").append(strAdvId.toUpperCase()).append("'");
					
				}
				
				List joinTabList = serv.openClientProfile(dao,strFNAId);//SelfSpouse particulars
//				clientTabDetsList = serv.openClientProfile(dao,strFNAId);//SelfSpouse particulars
				
				int profilelen = joinTabList.size();
			 

			 
			if(profilelen > 0){
				
				Iterator ite = joinTabList.iterator();
				
				while(ite.hasNext()){

					Object[] objcls = (Object[]) ite.next();
					
					FnaSelfspouseDets fnaTemp  = (FnaSelfspouseDets)objcls[0];
					clientTabDetsList.add(fnaTemp);
					
					FnaAdvDeclare fnaAdvTemp = (FnaAdvDeclare)objcls[1];
					advDeclareDetsList.add(fnaAdvTemp);
					
					FnaAssetCashdets cashAsstTemp = (FnaAssetCashdets)objcls[2];
					if(!FipaUtils.checkNullVal(cashAsstTemp)){
						cashDetsList.add(cashAsstTemp);	
					}
					
					
					FnaAssetOtherdets othAsstTemp = (FnaAssetOtherdets)objcls[3];
					if(!FipaUtils.checkNullVal(othAsstTemp)){
						othassDetsList.add(othAsstTemp);
					}
					
					FnaContingencyDets contgTemp = (FnaContingencyDets)objcls[4];
					if(!FipaUtils.checkNullVal(contgTemp)){
						contgDetsList.add(contgTemp);
					}
					
					FnaCurassDets curAssTemp = (FnaCurassDets)objcls[5];
					if(!FipaUtils.checkNullVal(curAssTemp)){
						curassDetsList.add(curAssTemp);
					}
					
					FnaExpenditureDets expndTemp = (FnaExpenditureDets)objcls[6];
					if(!FipaUtils.checkNullVal(expndTemp)){
						expenditureDetsList.add(expndTemp);
					}
					
					FnaFinLiability finLiabTemp = (FnaFinLiability)objcls[7];
					if(!FipaUtils.checkNullVal(finLiabTemp)){
						finlbDetsList.add(finLiabTemp);
					}
					
					FnaInvsetmentSummary invSummTemp = (FnaInvsetmentSummary)objcls[8];
					if(!FipaUtils.checkNullVal(invSummTemp)){
						invstDetsList.add(invSummTemp);
					}
					
					FnaRetireplanDets retiplanTemp = (FnaRetireplanDets)objcls[9];
					if(!FipaUtils.checkNullVal(retiplanTemp)){
						retireplnDetsList.add(retiplanTemp);
					}
					
					FnaSrcofincome srcincTemp = (FnaSrcofincome)objcls[10];
					if(!FipaUtils.checkNullVal(srcincTemp)){
						srcOfincDetsList.add(srcincTemp);
					}
					
					
					
				}
				
				typesOfAppDetsList = serv.openClntProfAppTypes(dao, strFNAId);//Analysis Type
				childTabDetsList = serv.openClntProfChild(dao, strFNAId);//Child particulars
				finGoalsTabDetsList = serv.openClntProfFinGoals(dao, strFNAId);//Financial Goals/ Concerns
				savInvTabDetsList=serv.openClntProfSAInvst(dao,strFNAId); //Wealth Accumulation Goals				
				depntTabDetsList = serv.openClntProfDepnt(dao, strFNAId);//Dependant Dets Other than family members
				otherAssetTabDetsList = serv.openClntProfOtherAsset(dao, strFNAId);// need to create db
 				LifeInsSearchList = serv.clntLifeInsList(dao,strBufQryParamFIPALife.toString());//Life Insurance- FIPA		
 				coverageDetList = serv.clntLifeInsCoverage(strFNAId);//Life Insurance coverages- FIPA	
 				tpdCoverageDetList = serv.clntLifeInsTpdCoverage(strFNAId);//Life Insurance coverages- FIPA
 				earlyciCoverageDetList = serv.clntLifeInsEarlyCoverage(strFNAId);//Life Insurance coverages- FIPA
 				advancedciCoverageDetList = serv.clntLifeInsAdvCoverage(strFNAId);//Life Insurance coverages- FIPA
				HITabDetsList = serv.openClntProfHI(dao,strFNAId);//Information on Health Insurance Needs
				perprioDetsList = serv.openPerpProfile(dao,strFNAId);//Personal Priorities
				InputInvestMentList= serv.openInputInvestment(dao,strFNAId);//Investments
				
				fnabusiPerDetsList  = serv.openClntProfAssets(dao,strFNAId);//Personal Assets and Business Assets
				VehOwnTabDetsList = serv.openClntProfVehOwn(dao,strFNAId);//Vehicle Ownership				 
			//	AttTabDetsList=serv.openClntAttachments(dao,strFNAId);//Attachments	
				AttTabDetsList=serv.openClntAttachments(dao,strAdvId,strClntNamPartlr);//Attachments	
				AutoAltrList=serv.openAutoAlteration(dao,strFNAId);//Auto Alteration				
				estPlanDetsList = serv.openEstPlanProfile(dao,strFNAId);//Estate Planning

				
				retCpfLifeDetsList= serv.openClntProfRetCpfLife(dao, strFNAId);
				
				fnpropertyOwnList = serv.openClntProfPrpOwn(dao,strFNAId);//Property Ownership
				CashOfBankDetsList=serv.openClntProfCashAtBank(dao,strFNAId);//Cash At Banks
				SRSDetsList=serv.openClntSRSDetsList(dao,strFNAId);//SRS
				
				cpfBalanceList = serv.openClntProfCPFBalance(dao, strFNAId);//CPF Balance
				cpfMthCtbTabDetsList = serv.openClntProfCpfMCtb(dao,strFNAId);//CPF Monthly Contribution
				CADTabDetsList = serv.openClntProfCAD(dao,strFNAId);//Additions & Deductions of funds into CPF a/c

				RDOtherIncomeList=serv.openRdOtherIncome(dao,strFNAId);//RP Other payment to be made during retirement
				fnaRdIncomeAssList  = serv.openClntProfRdIncomeAss(dao,strFNAId);//Income to be received during retirement and Income and assets available for retirement
				OthAreaCnDetsList  = serv.openClntProfArOfConcern(dao,strFNAId);//Other Areas of Concerns
				
				rskprefDetsList = serv.openRskPrefProfile(dao,strFNAId);//Client's Risk Preference & Investment Objectives
				
				sumanalDetsList = serv.openSumAnlProfile(dao,strFNAId);//Summary of Needs Analysis Worksheet
				
				if(!FipaUtils.nullOrBlank(strCustId)){
					policyDetList = serv1.getFPMSLifeInsuracePolDets(fpmsdao,"","", strCustId,"");
					
				}
				

				

				clientDetailsTab.put("OPEN_CUST_DETS", FipaUtils.getPropsJsonObject(clientTabDetsList, FnaSelfspouseDets.class));
				
				JSONObject jsnADvDecl = FipaUtils.getPropsJsonObject(advDeclareDetsList, FnaAdvDeclare.class);
				jsnADvDecl.put("appClientChoice", new JSONObject(jsnADvDecl.get("appClientChoice").toString()));
				jsnADvDecl.put("appAnalysisFor", new JSONObject(jsnADvDecl.get("appAnalysisFor").toString()));
				jsnADvDecl.put("appPurpose", new JSONObject(jsnADvDecl.get("appPurpose").toString()));
				
				
				
				advDeclareDetsTab.put("ADVDCL_DETS", jsnADvDecl);
				
				srcOfincDetsTab.put("SOI_DETS", FipaUtils.getPropsJsonObject(srcOfincDetsList,  FnaSrcofincome.class));
				
				expenditureDetsTab.put("EXPD_DETS", FipaUtils.getPropsJsonObject(expenditureDetsList,  FnaExpenditureDets.class));
				
				cashDetsTab.put("CAS_DETS", FipaUtils.getPropsJsonObject(cashDetsList,  FnaAssetCashdets.class));
				
				othassDetsTab.put("OTH_DETS", FipaUtils.getPropsJsonObject(othassDetsList,  FnaAssetOtherdets.class));
				
				contgDetsTab.put("CONTG_DETS", FipaUtils.getPropsJsonObject(contgDetsList,  FnaContingencyDets.class));
				
				curassDetsTab.put("CURASS_DETS", FipaUtils.getPropsJsonObject(curassDetsList,  FnaCurassDets.class));
				
				finlbDetsTab.put("FLB_DETS", FipaUtils.getPropsJsonObject(finlbDetsList,  FnaFinLiability.class));
				
				invstDetsTab.put("INV_DETS", FipaUtils.getPropsJsonObject(invstDetsList,  FnaInvsetmentSummary.class));
				
				retireplnDetsTab.put("RETP_DETS", FipaUtils.getPropsJsonObject(retireplnDetsList,  FnaRetireplanDets.class));
				
				typesOfAppDetsTab.put("APPTYPES_DETS", FipaUtils.getPropsJsonArray(typesOfAppDetsList, FnaApptypes.class));
				
				childDetailsTab.put("CHILD_DETS", FipaUtils.getPropsJsonArray(childTabDetsList, FnaChilddetails.class));
				
				retCpfLifeDetailsTab.put("RET_CPFLIFE_DETS", FipaUtils.getPropsJsonArray(retCpfLifeDetsList, FnaRetireplanCpflife.class));
				
				int fingoalrecords = finGoalsTabDetsList.size();
				if(fingoalrecords>0){
					FinGoalsDetailsTab.put("FINGOALS_DETS", FipaUtils.getPropsJsonArray(finGoalsTabDetsList, FnaFingoalsconcern.class));
					
					
				}
				
				int wealthrecords =savInvTabDetsList.size();
				if(wealthrecords>0){
					savingsInvDetailsTab.put("SAVINV_DETS", FipaUtils.getPropsJsonArray(savInvTabDetsList, FnaSavingsinvDets.class));
				}
				
				int deprecords = depntTabDetsList.size();
				if(deprecords>0){
					depntDetailsTab.put("DEPENDANT_DETS", FipaUtils.getPropsJsonArray(depntTabDetsList, FnaDependantDets.class));
					
					
				}
				
				int otherAssetrecords = otherAssetTabDetsList.size();
				if(otherAssetrecords>0){
					otherAssetDetailsTab.put("OTHERASSET_DETS", FipaUtils.getPropsJsonArray(otherAssetTabDetsList, FnaOtherAssetdets.class));
					
					
				}
				
				int Attrecords =AttTabDetsList.size();  
				if(Attrecords>0){
					AttachmentTab.put("ATTACHMENT_DETS", FipaUtils.getPropsJsonArray(AttTabDetsList,  FnaAttachments.class));
				}
				
				int lifeInsTabSize = LifeInsSearchList.size(); 
				if(lifeInsTabSize >0){ 
										
					List uniCoveragelist = serv.getCoverageList(strFNAId);
//					List basicriderlist = serv.getCoverageList(strFNAId);
//					List LifePlanSearchList = serv.clntLifePlanDetsSearch(dao,strFNAId);//PLAN DETS
					
					Iterator iter = LifeInsSearchList.iterator();
					
					while(iter.hasNext()){						
						
						JSONObject liDataJsnObj = new JSONObject();  
						
						FnaLifeinsuranceDets lip = (FnaLifeinsuranceDets) iter.next();
						
						String lipid = FipaUtils.getObjValue(lip.getLipId());
						liDataJsnObj.put("strFipaLifeInsId", lipid);
						liDataJsnObj.put("strFIPARefId", FipaUtils.getObjValue(lip.getLipRefId()));
					 	liDataJsnObj.put("strFnaId",FipaUtils.getObjValue(lip.getFnaSelfspouseDets().getFnaId()));
						liDataJsnObj.put("strFPMSPolPrincipal",FipaUtils.getObjValue(lip.getLipCompany()));
						liDataJsnObj.put("strFPMSPolPolNo",FipaUtils.getObjValue(lip.getLipPolicyno()));
						liDataJsnObj.put("strFPMSPolPlanName",FipaUtils.getObjValue(lip.getLipPlanname())); 
						 
						liDataJsnObj.put("strFPMSPolCoverages",FipaUtils.getMultiValue(uniCoveragelist, lipid));   
						liDataJsnObj.put("strFPMSPolEffDate",FipaUtils.getObjValue(lip.getLipIncepdate()));
						liDataJsnObj.put("strFPMSPolExpDate",FipaUtils.getObjValue(lip.getLipExpdate()));
						liDataJsnObj.put("strFPMSPolStatus",FipaUtils.getObjValue(lip.getPolicyStatus()));
						liDataJsnObj.put("strFPMSPolSA",(FipaUtils.checkNullVal(lip.getLipSa())? "0" :lip.getLipSa()));
						liDataJsnObj.put("strFPMSPolPremium",(FipaUtils.checkNullVal(lip.getRetTotalPrem())? "0" :lip.getRetTotalPrem()));
						liDataJsnObj.put("strFPMSPolLOBMain","NIL");
						liDataJsnObj.put("strFPMSPolLOBSub","NIL");
						liDataJsnObj.put("strFPMSPolApplnName","FIPA");
						liDataJsnObj.put("strCrtdBy",FipaUtils.getObjValue(lip.getLipCreatedBy()));
						liDataJsnObj.put("strCrtdDate",FipaUtils.getObjValue(lip.getLipCreatedDate()));
						liDataJsnObj.put("strFPMSPolPrincipalName",FipaUtils.getObjValue(lip.getLipCompany()));
						liDataJsnObj.put("strFPMSPolAppId","NA");
						liDataJsnObj.put("strFPMSPolOwner",FipaUtils.getObjValue(lip.getLipOwner()));
						liDataJsnObj.put("strFPMSPolProposed",FipaUtils.getObjValue(lip.getLipAssured()));
						liDataJsnObj.put("strFPMSPolLifeAssured",FipaUtils.getObjValue(lip.getLipAssured()));
						polDataJsnArr.put(liDataJsnObj); 
						
						
					}
				}
				
				
				int lifeInsCovTabSize = coverageDetList.size(); 
				
					if(lifeInsCovTabSize >0){
						Iterator it = coverageDetList.iterator(); 
						while(it.hasNext()){
							JSONObject polDataJsnObj = new JSONObject(); 
							Object[] objs = (Object[]) it.next(); 
							polDataJsnObj.put("strLifeInsCoverages",FipaUtils.getObjValue(objs[0]));
							polDataJsnObj.put("strLifeInsCoveragevals",FipaUtils.getObjValue(objs[1]));
							covDataJsnArr.put(polDataJsnObj);
						}   
					}
					
					int tpdLifeInsCovTabSize = tpdCoverageDetList.size(); 
				
					if(tpdLifeInsCovTabSize >0){
						Iterator it = tpdCoverageDetList.iterator(); 
						while(it.hasNext()){
							JSONObject polDataJsnObj = new JSONObject(); 
							Object[] objs = (Object[]) it.next(); 
							polDataJsnObj.put("strLifeInsTpdCoverages",FipaUtils.getObjValue(objs[0]));
							polDataJsnObj.put("strLifeInsTpdCoveragevals",FipaUtils.getObjValue(objs[1]));
							covTpdDataJsnArr.put(polDataJsnObj);
						}   
					}
					
					int earlyCiLifeInsCovTabSize = earlyciCoverageDetList.size(); 
					
					if(earlyCiLifeInsCovTabSize >0){
						Iterator it = earlyciCoverageDetList.iterator(); 
						while(it.hasNext()){
							JSONObject polDataJsnObj = new JSONObject(); 
							Object[] objs = (Object[]) it.next(); 
							polDataJsnObj.put("strLifeInsEarlyCoverages",FipaUtils.getObjValue(objs[0]));
							polDataJsnObj.put("strLifeInsEarlyCoveragevals",FipaUtils.getObjValue(objs[1]));
							covCiDataJsnArr.put(polDataJsnObj);
						}   
					}
					
					int advLifeInsCovTabSize = advancedciCoverageDetList.size(); 
					
					if(advLifeInsCovTabSize >0){
						Iterator it = advancedciCoverageDetList.iterator(); 
						while(it.hasNext()){
							JSONObject polDataJsnObj = new JSONObject(); 
							Object[] objs = (Object[]) it.next(); 
							polDataJsnObj.put("strLifeInsAdvCoverages",FipaUtils.getObjValue(objs[0]));
							polDataJsnObj.put("strLifeInsAdvCoveragevals",FipaUtils.getObjValue(objs[1]));
							covAdvDataJsnArr.put(polDataJsnObj);
						}   
					}
				int polTabSize = policyDetList.size();
				
				if(!FipaUtils.nullOrBlank(strCustId) && polTabSize >0){  
						if(polTabSize >0){
							Iterator it = policyDetList.iterator(); 
							while(it.hasNext()){
								JSONObject polDataJsnObj = new JSONObject(); 
								Object[] polObjs = (Object[]) it.next(); 
								polDataJsnObj.put("strFipaLifeInsId","");
								polDataJsnObj.put("strFIPARefId","");
								polDataJsnObj.put("strFnaId",strFNAId);
								polDataJsnObj.put("strFPMSPolCustName",FipaUtils.checkNullVal(polObjs[2])?"":polObjs[2].toString());
								polDataJsnObj.put("strFPMSPolPrincipalName",(FipaUtils.checkNullVal(polObjs[6])?"":polObjs[6].toString()));
								polDataJsnObj.put("strFPMSPolPrincipal",(FipaUtils.checkNullVal(polObjs[19])?"":polObjs[19].toString()));
								polDataJsnObj.put("strFPMSPolPolNo",(FipaUtils.checkNullVal(polObjs[5])?"":polObjs[5].toString()));
								polDataJsnObj.put("strFPMSPolPlanName",(FipaUtils.checkNullVal(polObjs[4])?"":polObjs[4].toString()));
								polDataJsnObj.put("strFPMSPolCoverages","NA");
								polDataJsnObj.put("strFPMSPolEffDate",(FipaUtils.checkNullVal(polObjs[12])?"":polObjs[12].toString()));
								polDataJsnObj.put("strFPMSPolStatus",(FipaUtils.checkNullVal(polObjs[15])?"":polObjs[15].toString()));
								polDataJsnObj.put("strFPMSPolSA",(FipaUtils.checkNullVal(polObjs[9])? "0" :polObjs[9].toString()));
								polDataJsnObj.put("strFPMSPolPremium",(FipaUtils.checkNullVal(polObjs[8])?"0":polObjs[8].toString()));
								polDataJsnObj.put("strFPMSPolLOBMain",(FipaUtils.checkNullVal(polObjs[16])?"":polObjs[16].toString()));
								polDataJsnObj.put("strFPMSPolLOBSub",(FipaUtils.checkNullVal(polObjs[17])?"":polObjs[17].toString()));
								polDataJsnObj.put("strFPMSPolApplnName","FPMSNL");
								polDataJsnObj.put("strFPMSPolOwner","Self");
								polDataJsnObj.put("strFPMSPolAppId",(FipaUtils.checkNullVal(polObjs[18])?"":polObjs[18].toString()));
								polDataJsnObj.put("strFPMSPolProposed",FipaUtils.checkNullVal(polObjs[20])?"":polObjs[20].toString());
								polDataJsnObj.put("strFPMSPolLifeAssured",FipaUtils.checkNullVal(polObjs[21])?"":polObjs[21].toString()); 
								polDataJsnObj.put("strFPMSPolType",FipaUtils.checkNullVal(polObjs[22])?"":polObjs[22].toString());
								polDataJsnArr.put(polDataJsnObj);
								
							}   
						}  
				}
				
				fpmsfipaPolTab.put("FPMS_POLICY_DETS", polDataJsnArr);
				fipaCoverageTab.put("FIPA_COVERAGE_DETS", covDataJsnArr);
				fipaTpdCoverageTab.put("FIPA_TPD_COVERAGE_DETS", covTpdDataJsnArr);
				fipaEarlyCiCoverageTab.put("FIPA_CI_COVERAGE_DETS", covCiDataJsnArr);
				fipaAdvCICoverageTab.put("FIPA_ADV_COVERAGE_DETS", covAdvDataJsnArr);
				HIDetailsTab.put("HEALTHINS_DETS",FipaUtils.getPropsJsonArray(HITabDetsList, FnaHealthinsInfo.class));
				
			
				
				
//				advDeclareDetsList=serv.openAdvDclProfile(dao,strFNAId);//Types of Applications,AML Declarations			
//				srcOfincDetsList = serv.openSrcIncProfile(dao,strFNAId);//Employment Income & Non-Employment -Inflow
//				expenditureDetsList = serv.openExpProfile(dao,strFNAId); //Annual Expenditure - Outflow				
//				contgDetsList=serv.openClntContgProfile(dao,strFNAId);//Contingency Planning
//				invstDetsList = serv.openInvProfile(dao,strFNAId);//Investments - Summary
//				cashDetsList = serv.openCasProfile(dao,strFNAId);//Cash Assets
//				othassDetsList = serv.openOthCAProfile(dao,strFNAId);//Other Assets
//				finlbDetsList = serv.openFinlbProfile(dao,strFNAId);//Financial Liabilities
//				curassDetsList = serv.openCrtAssProfile(dao,strFNAId);//Current Assumptions				
//				retireplnDetsList = serv.openRetProfile(dao,strFNAId);//Retirement Planning Master
				
				
//				RcmPrdTabDetsList =serv.openClntProfRcmPrt(dao,strFNAId);//Products Recommended - FOR LIFE & HEALTH INSURANCE
// 				RcmPrdFundTabDetsList=serv.openClntProfRcmFd(dao,strFNAId);//Products Recommended - For UT and ILP
//				SwtPlanTabDetsList=serv.openClntProfSwtPln(dao,strFNAId);//SWITCHING & REPLACEMENT - FOR LIFE & HEALTH INSURANCE
//				SwtFundTabDetsList=serv.openClntProfSwtFd(dao,strFNAId);//SWITCHING & REPLACEMENT - For UT and ILP
//				RecmResonList = serv.openClntProfRecmReasn(dao,strFNAId);//Reasons for Recommendation

				
			
				
				int inflowrecords = srcOfincDetsList.size();
				if(inflowrecords>0){
//					srcOfincDetsTab.put("SOI_DETS", FipaUtils.getPropsJsonObject(srcOfincDetsList,  FnaSrcofincome.class));
//					retValues.add(srcOfincDetsTab);
					
				}
				int expdrecords=expenditureDetsList.size();
				if(expdrecords>0){
//					expenditureDetsTab.put("EXPD_DETS", FipaUtils.getPropsJsonObject(expenditureDetsList,  FnaExpenditureDets.class));
//					retValues.add(expenditureDetsTab);
					
				}
				int contgrecords =contgDetsList.size();
				if(contgrecords>0){
//					contgDetsTab.put("CONTG_DETS", FipaUtils.getPropsJsonObject(contgDetsList,  FnaContingencyDets.class)); 
//					retValues.add(contgDetsTab);  
				} 
				
				
				
				
								
				int invsummaryrecords = invstDetsList.size();
				if(invsummaryrecords>0){
//					invstDetsTab.put("INV_DETS", FipaUtils.getPropsJsonObject(invstDetsList,  FnaInvsetmentSummary.class));
//					retValues.add(invstDetsTab);

				}
				
				
				int cashassetrec = cashDetsList.size();
				if(cashassetrec>0){
//					cashDetsTab.put("CAS_DETS", FipaUtils.getPropsJsonObject(cashDetsList,  FnaAssetCashdets.class));
//					retValues.add(cashDetsTab);
//					
				}
				
				int othassetrec = othassDetsList.size();
				if(othassetrec>0){
//					othassDetsTab.put("OTH_DETS", FipaUtils.getPropsJsonObject(othassDetsList,  FnaAssetOtherdets.class));
//					retValues.add(othassDetsTab);
					
				}
				
				int presprirecords =perprioDetsList.size();
				if(presprirecords>0){
					perprioDetsTab.put("PERP_DETS", FipaUtils.getPropsJsonObject(perprioDetsList,  FnaPersprio.class));

					
				}
				
				int investrecords =InputInvestMentList.size();
				if(investrecords>0){
					InputInvestMentTab.put("INPUTINVESTMENT_DETS", FipaUtils.getPropsJsonArray(InputInvestMentList, FnaInputinvestmentsDets.class));

					
				}

				int proprecords =fnpropertyOwnList.size();
				if(proprecords>0){   
					PropOwnCPFDetailsTab.put("PROPOWNCPF_DETS",FipaUtils.getPropsJsonArray(fnpropertyOwnList,FnaPropownDets.class));
  
				}
				
				int bankcashrecords = CashOfBankDetsList.size();
				if(bankcashrecords>0){
					CashOfBankDetailsTab.put("CASHATBANKS_DETS", FipaUtils.getPropsJsonArray(CashOfBankDetsList, FnaCashAtBank.class));

					
				}
				
				int srsrecords = SRSDetsList.size();
				if(srsrecords>0){
					SRSDetailsTab.put("SRS_DETS", FipaUtils.getPropsJsonArray(SRSDetsList, FnaSrs.class));

				}

				int persbusiassetrec = fnabusiPerDetsList.size();
				if(persbusiassetrec>0){
					
					
					
					JSONArray persjsnArr = new JSONArray();
					for(FnaAssetBusiandpersdets fnabusper : fnabusiPerDetsList){
						
						String strCatg=fnabusper.getAssetCateg();
						
						if(!FipaUtils.nullOrBlank(strCatg)){ 
							if(strCatg.equalsIgnoreCase("PERSONAL")){ 
								JSONObject jsnPersDetailsDataObj = new JSONObject(); 
								jsnPersDetailsDataObj.put("fnaId", !FipaUtils.nullObj(fnabusper.getFnaSelfspouseDets().getFnaId()) ? fnabusper.getFnaSelfspouseDets().getFnaId() : "");
								jsnPersDetailsDataObj.put("txtFldPerBusiPersId", !FipaUtils.nullObj(fnabusper.getBusipersId()) ? fnabusper.getBusipersId() : "");
								jsnPersDetailsDataObj.put("txtFldPerAcctCategory", !FipaUtils.nullObj(fnabusper.getAssetCateg()) ? fnabusper.getAssetCateg() : "");
								jsnPersDetailsDataObj.put("txtFldPerAcctHolder", !FipaUtils.nullObj(fnabusper.getAcctHolder()) ? fnabusper.getAcctHolder() : "");
								jsnPersDetailsDataObj.put("txtFldPerEstApprValue", !FipaUtils.nullObj((fnabusper.getEstApprValue())) ? fnabusper.getEstApprValue() : "");
								jsnPersDetailsDataObj.put("txtFldPerTypeOfAsset", !FipaUtils.nullObj(fnabusper.getTypeOfAsset()) ? fnabusper.getTypeOfAsset() : "");
								jsnPersDetailsDataObj.put("txtFldPerYrs2keep", !FipaUtils.nullObj(fnabusper.getYrs2keep()) ? fnabusper.getYrs2keep() : "");
								jsnPersDetailsDataObj.put("txtFldPerNameOfAsset", !FipaUtils.nullObj(fnabusper.getNameOfAsset()) ? fnabusper.getNameOfAsset() : "");
								jsnPersDetailsDataObj.put("txtFldPerChildEdnPrcnt", !FipaUtils.nullObj(fnabusper.getChildEdnPrcnt()) ? fnabusper.getChildEdnPrcnt() : "");
								jsnPersDetailsDataObj.put("txtFldPerPurInvValue", !FipaUtils.nullObj(fnabusper.getPurInvValue()) ? fnabusper.getPurInvValue() : "");
								jsnPersDetailsDataObj.put("txtFldPerRetPlanPrcnt", !FipaUtils.nullObj(fnabusper.getRetPlanPrcnt()) ? fnabusper.getRetPlanPrcnt() : "");
								jsnPersDetailsDataObj.put("txtFldPerCurrValue", !FipaUtils.nullObj(fnabusper.getCurrValue()) ? fnabusper.getCurrValue() : "");
								jsnPersDetailsDataObj.put("txtFldPerRemarks", !FipaUtils.nullObj(fnabusper.getRemarks()) ? fnabusper.getRemarks() : "");
								jsnPersDetailsDataObj.put("txtFldPerOsValue", !FipaUtils.nullObj(fnabusper.getOsValue()) ? fnabusper.getOsValue() : ""); 
								persjsnArr.put(jsnPersDetailsDataObj); 
							
							}
						
							if(strCatg.equalsIgnoreCase("BUSINESS")){	
								JSONObject jsnBusperDetailsDataObj = new JSONObject();
								jsnBusperDetailsDataObj.put("fnaId", !FipaUtils.nullObj(fnabusper.getFnaSelfspouseDets().getFnaId()) ? fnabusper.getFnaSelfspouseDets().getFnaId() : "");
								jsnBusperDetailsDataObj.put("txtFldBuisBusiPersId", !FipaUtils.nullObj(fnabusper.getBusipersId()) ? fnabusper.getBusipersId() : "");
								jsnBusperDetailsDataObj.put("txtFldBuisAcctCategory", !FipaUtils.nullObj(fnabusper.getAssetCateg()) ? fnabusper.getAssetCateg() : "");
								jsnBusperDetailsDataObj.put("txtFldBuisAcctHolder", !FipaUtils.nullObj(fnabusper.getAcctHolder()) ? fnabusper.getAcctHolder() : "");
								jsnBusperDetailsDataObj.put("txtFldBuisEstApprValue", !FipaUtils.nullObj((fnabusper.getEstApprValue())) ? fnabusper.getEstApprValue() : "");
								jsnBusperDetailsDataObj.put("txtFldBuisTypeOfAsset", !FipaUtils.nullObj(fnabusper.getTypeOfAsset()) ? fnabusper.getTypeOfAsset() : "");
								jsnBusperDetailsDataObj.put("txtFldBuisYrs2keep", !FipaUtils.nullObj(fnabusper.getYrs2keep()) ? fnabusper.getYrs2keep() : "");
								jsnBusperDetailsDataObj.put("txtFldBuisNameOfAsset", !FipaUtils.nullObj(fnabusper.getNameOfAsset()) ? fnabusper.getNameOfAsset() : "");
								jsnBusperDetailsDataObj.put("txtFldBuisChildEdnPrcnt", !FipaUtils.nullObj(fnabusper.getChildEdnPrcnt()) ? fnabusper.getChildEdnPrcnt() : "");
								jsnBusperDetailsDataObj.put("txtFldBuisPurInvValue", !FipaUtils.nullObj(fnabusper.getPurInvValue()) ? fnabusper.getPurInvValue() : "");
								jsnBusperDetailsDataObj.put("txtFldBuisRetPlanPrcnt", !FipaUtils.nullObj(fnabusper.getRetPlanPrcnt()) ? fnabusper.getRetPlanPrcnt() : "");
								jsnBusperDetailsDataObj.put("txtFldBuisCurrValue", !FipaUtils.nullObj(fnabusper.getCurrValue()) ? fnabusper.getCurrValue() : "");
								jsnBusperDetailsDataObj.put("txtFldBuisRemarks", !FipaUtils.nullObj(fnabusper.getRemarks()) ? fnabusper.getRemarks() : "");
								jsnBusperDetailsDataObj.put("txtFldBuisOsValue", !FipaUtils.nullObj(fnabusper.getOsValue()) ? fnabusper.getOsValue() : ""); 
								jsnFnaAssetsArr.put(jsnBusperDetailsDataObj); 
								
						 }
				    }  
				}
				FnaPersAssetsDetailsTab.put("PERASSET_DETS",persjsnArr);
				FnaAssetsDetailsTab.put("BUSASSET_DETS",jsnFnaAssetsArr); 


				
			}
				
				int vehirec = VehOwnTabDetsList.size();
				if(vehirec>0){
					VehOwnDetailsTab.put("VEHOWN_DETS", FipaUtils.getPropsJsonArray(VehOwnTabDetsList, FnaVehicleownDets.class));

					
				}
				
				
				int autoalter = AutoAltrList.size();
				if(autoalter>0){ 
					AutoAltrDetailsTab.put("AUTO_ALTER", FipaUtils.getPropsJsonArray(AutoAltrList, FnaAutoAlter.class));
 
				}
				
				
				
				
				int estaterec = estPlanDetsList.size();
				if(estaterec>0){ 

					

					for(FnaEstatePlan fna  : estPlanDetsList){
						
						String strEstDesc = fna.getEstPlanDesc();
						JSONObject jsnDetailsEstDataObj = new JSONObject();
						jsnDetailsEstDataObj.put("fnaId",!FipaUtils.nullObj(fna.getFnaSelfspouseDets().getFnaId()) ? fna.getFnaSelfspouseDets().getFnaId() : "");
						jsnDetailsEstDataObj.put("estId",!FipaUtils.nullObj(fna.getEstId()) ? fna.getEstId(): "");
						
						if(!FipaUtils.nullOrBlank(strEstDesc)){
						if(strEstDesc.equalsIgnoreCase("Have any Will or Trust been set up?")){
							
							jsnDetailsEstDataObj.put("txtFldEstTrstId",!FipaUtils.nullOrBlank(fna.getEstPlanDesc()) ? fna.getEstId() : "");
							jsnDetailsEstDataObj.put("txtFldEstTrstDesc",!FipaUtils.nullOrBlank(fna.getEstPlanDesc()) ? fna.getEstPlanDesc() : "");
							jsnDetailsEstDataObj.put("txtFldEstSlfTrstFlg",!FipaUtils.nullOrBlank(fna.getEstSelfPlanFlg()) ? fna.getEstSelfPlanFlg() : "");
							jsnDetailsEstDataObj.put("txtFldEstSpsTrstFlg",!FipaUtils.nullOrBlank(fna.getEstSpsPlanFlg()) ? fna.getEstSpsPlanFlg() : "");
							jsnDetailsEstDataObj.put("txtFldEstTrstRmrks",!FipaUtils.nullOrBlank(fna.getEstPlanRemarks()) ? fna.getEstPlanRemarks() : "");
						  
							jsnFnaEstPlanArr.put(jsnDetailsEstDataObj);
						}
						
						
						if(strEstDesc.equalsIgnoreCase("Have any LPOA been set up?")){ 
							jsnDetailsEstDataObj.put("txtFldEstLPOAId",!FipaUtils.nullOrBlank(fna.getEstPlanDesc()) ? fna.getEstId() : "");
						 	jsnDetailsEstDataObj.put("txtFldEstLPOADesc",!FipaUtils.nullOrBlank(fna.getEstPlanDesc()) ? fna.getEstPlanDesc() : "");
							jsnDetailsEstDataObj.put("txtFldEstSlfLPOAFlg",!FipaUtils.nullOrBlank(fna.getEstSelfPlanFlg()) ? fna.getEstSelfPlanFlg() : "");
							jsnDetailsEstDataObj.put("txtFldEstSpsLPOAFlg",!FipaUtils.nullOrBlank(fna.getEstSpsPlanFlg()) ? fna.getEstSpsPlanFlg() : "");
							jsnDetailsEstDataObj.put("txtFldEstLPOARmrks",!FipaUtils.nullOrBlank(fna.getEstPlanRemarks()) ? fna.getEstPlanRemarks() : "");
						  
							jsnFnaEstPlanArr.put(jsnDetailsEstDataObj);
						}
						
						if(strEstDesc.equalsIgnoreCase("Do you intend to provide gift to charity")){ 
							jsnDetailsEstDataObj.put("txtFldEstCharityId",!FipaUtils.nullOrBlank(fna.getEstPlanDesc()) ? fna.getEstId() : "");
						 	jsnDetailsEstDataObj.put("txtFldEstCharityDesc",!FipaUtils.nullOrBlank(fna.getEstPlanDesc()) ? fna.getEstPlanDesc() : "");
							jsnDetailsEstDataObj.put("txtFldEstSlfCharityFlg",!FipaUtils.nullOrBlank(fna.getEstSelfPlanFlg()) ? fna.getEstSelfPlanFlg() : "");
							jsnDetailsEstDataObj.put("txtFldEstSpsCharityFlg",!FipaUtils.nullOrBlank(fna.getEstSpsPlanFlg()) ? fna.getEstSpsPlanFlg() : "");
							jsnDetailsEstDataObj.put("txtFldEstCharityRmrks",!FipaUtils.nullOrBlank(fna.getEstPlanRemarks()) ? fna.getEstPlanRemarks() : "");
						  
							jsnFnaEstPlanArr.put(jsnDetailsEstDataObj);
						}
						
						if(strEstDesc.equalsIgnoreCase("Do you have any assets overseas")){ 
							jsnDetailsEstDataObj.put("txtFldEstOverseasId",!FipaUtils.nullOrBlank(fna.getEstPlanDesc()) ? fna.getEstId() : "");
							jsnDetailsEstDataObj.put("txtFldEstOverseasDesc",!FipaUtils.nullOrBlank(fna.getEstPlanDesc()) ? fna.getEstPlanDesc() : "");
							jsnDetailsEstDataObj.put("txtFldEstSlfOverseasFlg",!FipaUtils.nullOrBlank(fna.getEstSelfPlanFlg()) ? fna.getEstSelfPlanFlg() : "");
							jsnDetailsEstDataObj.put("txtFldEstSpsOverseasFlg",!FipaUtils.nullOrBlank(fna.getEstSpsPlanFlg()) ? fna.getEstSpsPlanFlg() : "");
							jsnDetailsEstDataObj.put("txtFldEstOverseasRmrks",!FipaUtils.nullOrBlank(fna.getEstPlanRemarks()) ? fna.getEstPlanRemarks() : "");
						  
							jsnFnaEstPlanArr.put(jsnDetailsEstDataObj);
						}
					}
						
					}
					
					estplanTab.put("ESTPLAN_DETS", jsnFnaEstPlanArr);
					

					
					
				}
				
 				int cpfBalSize = cpfBalanceList.size();
 				if(cpfBalSize>0){
					JSONObject jsnData = new JSONObject();
					
					Iterator ite1 = cpfBalanceList.iterator();
					while(ite1.hasNext()){
						FnaCpfBalanceDets cpfBal = (FnaCpfBalanceDets)ite1.next();
						
						String strAccTypeId = FipaUtils.getObjValue(cpfBal.getMasterCpfAcctype().getCpfAcId());
						String strAccType = FipaUtils.getObjValue(cpfBal.getMasterCpfAcctype().getAccType());
						String strSelfORSpouse = FipaUtils.getObjValue(cpfBal.getCpfSelfOrSps());
						
						if(strSelfORSpouse.equalsIgnoreCase("SELF")){
							jsnData.put("hTxtFldSlfPkId"+strAccTypeId,FipaUtils.getObjValue(cpfBal.getCpfId()));
							jsnData.put("hTxtFldSlfAccType"+strAccType,FipaUtils.getObjValue(cpfBal.getMasterCpfAcctype().getCpfAcId()));
							jsnData.put("txtFldCpfSlf"+strAccType,FipaUtils.getObjValue(cpfBal.getCpfSelfBalance()));
						}else if (strSelfORSpouse.equalsIgnoreCase("SPOUSE")){
							jsnData.put("hTxtFldSpsPkId"+strAccTypeId,FipaUtils.getObjValue(cpfBal.getCpfId()));
							jsnData.put("hTxtFldSpsAccType"+strAccType,FipaUtils.getObjValue(cpfBal.getMasterCpfAcctype().getCpfAcId()));
							jsnData.put("txtFldCpfSps"+strAccType,FipaUtils.getObjValue(cpfBal.getCpfSelfBalance()));
						}						
					}
					
				 cpfBalanceDetsTab.put("CPF_BALANCE_DETS",jsnData);


					
				}
 				
 				int cpfcontrrec = cpfMthCtbTabDetsList.size();
				if(cpfcontrrec>0){
					
					JSONObject jsnData = new JSONObject();
					Iterator ite2 = cpfMthCtbTabDetsList.iterator();
					while(ite2.hasNext()){
						FnaCpfMonthcontDets cpfBal = (FnaCpfMonthcontDets)ite2.next();
						
						String strSelfORSpouse = FipaUtils.getObjValue(cpfBal.getCcSelfOrSps());
						
						if(strSelfORSpouse.equalsIgnoreCase("SELF")){
							jsnData.put("ccPkIdSelf",FipaUtils.getObjValue(cpfBal.getCcPkId()));
							jsnData.put("ccEmpleContrbSelf",FipaUtils.getObjValue(cpfBal.getCcEmpleContrb()));
							jsnData.put("ccEmplrContrbSelf",FipaUtils.getObjValue(cpfBal.getCcEmplrContrb()));
						}else if (strSelfORSpouse.equalsIgnoreCase("SPOUSE")){
							jsnData.put("ccPkIdSps",FipaUtils.getObjValue(cpfBal.getCcPkId()));
							jsnData.put("ccEmpleContrbSps",FipaUtils.getObjValue(cpfBal.getCcEmpleContrb()));
							jsnData.put("ccEmplrContrbSps",FipaUtils.getObjValue(cpfBal.getCcEmplrContrb()));
						}						
					}
					
					cpfMthCtrbDetsTab.put("CPFMTHCTRB_DETS", jsnData);


					
				}
				
				int cpfadddedrec = CADTabDetsList.size();
				if(cpfadddedrec>0){ 
					CADDetsTab.put("CPF_ADD_DED_DETS", FipaUtils.getPropsJsonArray(CADTabDetsList, FnaCpfDeductions.class)); 
				 

					
				} 
				int finliabrec = finlbDetsList.size();
				if(finliabrec>0){
//					finlbDetsTab.put("FLB_DETS", FipaUtils.getPropsJsonObject(finlbDetsList,  FnaFinLiability.class));
//					retValues.add(finlbDetsTab);
					
				}
				
				int curassrec = curassDetsList.size();
				if(curassrec>0){
//					curassDetsTab.put("CURASS_DETS", FipaUtils.getPropsJsonObject(curassDetsList,  FnaCurassDets.class));
//					retValues.add(curassDetsTab);
					
					
				}
				int rprec = retireplnDetsList.size();
				if(rprec>0){
//					retireplnDetsTab.put("RETP_DETS", FipaUtils.getPropsJsonObject(retireplnDetsList,  FnaRetireplanDets.class));
//					retValues.add(retireplnDetsTab);
					
				}
				
				int rpothpayrec  = RDOtherIncomeList.size();
				if(rpothpayrec>0){
					OthRetDetailsTab.put("RDOTHER_PAY", FipaUtils.getPropsJsonArray(RDOtherIncomeList, FnaRetireplanOthpayment.class));

					
				}
				
				
				int rpincassrec = fnaRdIncomeAssList.size();
				if(rpincassrec>0){
					
					
					
					JSONArray incjsnArr = new JSONArray();
					JSONArray incassjsnArr = new JSONArray();
					for(FnaRetireplanIncomeasset fnaIncAss : fnaRdIncomeAssList){
						
						String strRpType = fnaIncAss.getRetIaType();
						
						if(!FipaUtils.nullOrBlank(strRpType)){ 
							
							if(strRpType.equalsIgnoreCase("RETINCOME")){ 
								JSONObject jsnIncDetailsDataObj = new JSONObject();
								jsnIncDetailsDataObj.put("fnaId", !FipaUtils.nullObj(fnaIncAss.getFnaSelfspouseDets().getFnaId()) ? fnaIncAss.getFnaSelfspouseDets().getFnaId() : "");
								jsnIncDetailsDataObj.put("txtFldIRId", !FipaUtils.nullOrBlank(fnaIncAss.getIaId()) ? fnaIncAss.getIaId() : "");
								jsnIncDetailsDataObj.put("txtFldIRClsfy", !FipaUtils.nullOrBlank(fnaIncAss.getRetIaClass()) ? fnaIncAss.getRetIaClass() : "");
								jsnIncDetailsDataObj.put("txtFldIRDesc", !FipaUtils.nullOrBlank(fnaIncAss.getRetIaDesc()) ? fnaIncAss.getRetIaDesc() : "");
								jsnIncDetailsDataObj.put("selIRFreq", !FipaUtils.nullOrBlank((fnaIncAss.getRetIaFrequency())) ? fnaIncAss.getRetIaFrequency() : "");
								jsnIncDetailsDataObj.put("txtFldIRAmtofInc", !FipaUtils.nullObj(fnaIncAss.getRetIaAmout()) ? fnaIncAss.getRetIaAmout() : "");
								jsnIncDetailsDataObj.put("txtFldIREslrate", !FipaUtils.nullObj(fnaIncAss.getRetIaEscrate()) ? fnaIncAss.getRetIaEscrate() : "");
								jsnIncDetailsDataObj.put("txtFldIRRoi", !FipaUtils.nullObj(fnaIncAss.getRetIaRoi()) ? fnaIncAss.getRetIaRoi() : "");
								jsnIncDetailsDataObj.put("selIRAgeBsOn", !FipaUtils.nullOrBlank(fnaIncAss.getRetIaAgebasedon()) ? fnaIncAss.getRetIaAgebasedon() : "");
								jsnIncDetailsDataObj.put("txtFldIRAgePaySts", !FipaUtils.nullOrBlank(fnaIncAss.getRetIaAgestart()) ? fnaIncAss.getRetIaAgestart() : "");
								jsnIncDetailsDataObj.put("txtFldIRAgePayends", !FipaUtils.nullOrBlank(fnaIncAss.getRetIaAgeend()) ? fnaIncAss.getRetIaAgeend() : "");
							 	incjsnArr.put(jsnIncDetailsDataObj); 
							
							}
						
							if(strRpType.equalsIgnoreCase("RETINCOMEASS")){ 
								JSONObject jsnAssDetailsDataObj = new JSONObject(); 
								jsnAssDetailsDataObj.put("fnaId",  !FipaUtils.nullObj(fnaIncAss.getFnaSelfspouseDets().getFnaId()) ? fnaIncAss.getFnaSelfspouseDets().getFnaId() : "");
								jsnAssDetailsDataObj.put("txtFldIncAssId", !FipaUtils.nullOrBlank(fnaIncAss.getIaId()) ? fnaIncAss.getIaId() : "");
								jsnAssDetailsDataObj.put("txtFldIncAssClsfy", !FipaUtils.nullOrBlank(fnaIncAss.getRetIaClass()) ? fnaIncAss.getRetIaClass() : "");
								jsnAssDetailsDataObj.put("txtFldIncAssDesc", !FipaUtils.nullOrBlank(fnaIncAss.getRetIaDesc()) ? fnaIncAss.getRetIaDesc() : "");
								jsnAssDetailsDataObj.put("selIncAssFreq",  !FipaUtils.nullOrBlank((fnaIncAss.getRetIaFrequency())) ? fnaIncAss.getRetIaFrequency() : "");
								jsnAssDetailsDataObj.put("txtFldIncAssAmtofInc", !FipaUtils.nullObj(fnaIncAss.getRetIaAmout()) ? fnaIncAss.getRetIaAmout() : "");
								jsnAssDetailsDataObj.put("txtFldIncAssEslrate", !FipaUtils.nullObj(fnaIncAss.getRetIaEscrate()) ? fnaIncAss.getRetIaEscrate() : "");
								jsnAssDetailsDataObj.put("txtFldIncAssRoi",!FipaUtils.nullObj(fnaIncAss.getRetIaRoi()) ? fnaIncAss.getRetIaRoi() : "");
								jsnAssDetailsDataObj.put("selIncAssAgeBsOn", !FipaUtils.nullOrBlank(fnaIncAss.getRetIaAgebasedon()) ? fnaIncAss.getRetIaAgebasedon() : "");
								jsnAssDetailsDataObj.put("txtFldIncAssAgePaySts", !FipaUtils.nullOrBlank(fnaIncAss.getRetIaAgestart()) ? fnaIncAss.getRetIaAgestart() : "");
								jsnAssDetailsDataObj.put("txtFldIncAssAgePayends",!FipaUtils.nullOrBlank(fnaIncAss.getRetIaAgeend()) ? fnaIncAss.getRetIaAgeend() : "");
								jsnAssDetailsDataObj.put("txtFldIncAssRefId",   !FipaUtils.nullOrBlank(fnaIncAss.getRetReferenceId()) ? fnaIncAss.getRetReferenceId() : "");
								incassjsnArr.put(jsnAssDetailsDataObj); 
								
						 }
				    }  
				}	
					
				FnaRdIncTab.put("RDINCOME_DETS",incjsnArr);
				FnaRdIncAssTab.put("RDINCASS_DETS",incassjsnArr); 
				

				
			}
				
				int otharearec = OthAreaCnDetsList.size();
				if(otharearec>0){
					OthAreaCrnDetailsTab.put("OTHAREA_DETS",FipaUtils.getPropsJsonArray(OthAreaCnDetsList, FnaOthareaconcern.class));
					
					
					
				}
				
//				int newplanrec = RcmPrdTabDetsList.size();
//				if(newplanrec>0){
//					RcmPrdDetailsTab.put("RCMPRO_DETS", FipaUtils.getPropsJsonArray(RcmPrdTabDetsList, FnaRecomPrdtplanDet.class)); 
//					retValues.add(RcmPrdDetailsTab);
//
//					
//				}
//				int newfundrec = RcmPrdFundTabDetsList.size();
//				if(newfundrec>0){
//					RcmPrdFundDetailsTab.put("RCMFUND_DETS", FipaUtils.getPropsJsonArray(RcmPrdFundTabDetsList, FnaRecomFundDet.class));
//					retValues.add(RcmPrdFundDetailsTab);
//					
//				}
				
//				int swplanrec = SwtPlanTabDetsList.size();
//				if(swplanrec>0){
//					SwtchPlnDetailsTab.put("SWTHPLAN_DETS", FipaUtils.getPropsJsonArray(SwtPlanTabDetsList, FnaSwtchrepPlanDet.class));
//					
//					retValues.add(SwtchPlnDetailsTab);
//					
//				}
				
//				int swfundrec = SwtFundTabDetsList.size();
//				if(swfundrec>0){
//					SwtchFundDetailsTab.put("SWTHFUND_DETS", FipaUtils.getPropsJsonArray(SwtFundTabDetsList, FnaSwtchrepFundDet.class));
//					retValues.add(SwtchFundDetailsTab);
//					
//					
//				}
				int riskprerec = rskprefDetsList.size();						
				if(riskprerec>0){
					rskprefDetsTab.put("RSKPREF_DETS", FipaUtils.getPropsJsonObject(rskprefDetsList,  FnaRiskprefDets.class));
								
					
				}
				
//				int recomrec = RecmResonList.size();
//				if(recomrec>0){
//					ReasonsDetailsTab.put("RCMRSN",FipaUtils.getPropsJsonArray(RecmResonList, FnaRecomReasons.class));
//					retValues.add(ReasonsDetailsTab); 
//					
//				}
				
				int sumanarec = sumanalDetsList.size();
				if(sumanarec>0){
					sumanalDetsTab.put("SUMANAL_DETS", FipaUtils.getPropsJsonObject(sumanalDetsList,  FnaSummaryAnalysis.class));					
				}	
				
				String[] strArrParam = new String[4];
				  strArrParam[0] =  strClientNRIC;
				 strArrParam[1]=strAdvId;
				 strArrParam[2]=strCustId;
				 strArrParam[3]= strFNAId;
				JSONObject polPremObj = fnaLifePremAmt(request,strArrParam);
				
				retValues.put(clientDetailsTab);
				retValues.put(advDeclareDetsTab);
				retValues.put(typesOfAppDetsTab);
				
				retValues.put(childDetailsTab);
				retValues.put(FinGoalsDetailsTab);
				retValues.put(savingsInvDetailsTab);
				retValues.put(depntDetailsTab);
				retValues.put(otherAssetDetailsTab);
				retValues.put(srcOfincDetsTab);
				retValues.put(expenditureDetsTab);
				retValues.put(contgDetsTab);				

				retValues.put(retireplnDetsTab);				
				retValues.put(retCpfLifeDetailsTab);
				retValues.put(OthRetDetailsTab);
				retValues.put(FnaRdIncTab); 
				retValues.put(FnaRdIncAssTab);

				retValues.put(fpmsfipaPolTab);
				retValues.put(fipaCoverageTab);
				retValues.put(fipaTpdCoverageTab);
				retValues.put(fipaEarlyCiCoverageTab);
				retValues.put(fipaAdvCICoverageTab);
				
				retValues.put(HIDetailsTab);
				
				retValues.put(InputInvestMentTab);
				retValues.put(invstDetsTab);
				
				retValues.put(PropOwnCPFDetailsTab);
				retValues.put(CashOfBankDetailsTab);
				retValues.put(SRSDetailsTab); 
				
				retValues.put(cashDetsTab);
				retValues.put(othassDetsTab);
				retValues.put(FnaPersAssetsDetailsTab);//Personal
				retValues.put(FnaAssetsDetailsTab);//Business
				retValues.put(VehOwnDetailsTab);
				
				retValues.put(estplanTab);				
				retValues.put(cpfBalanceDetsTab);
				retValues.put(cpfMthCtrbDetsTab);
				retValues.put(CADDetsTab); 
				
				retValues.put(finlbDetsTab);
				retValues.put(curassDetsTab);			

				retValues.put(OthAreaCrnDetailsTab);
				
				retValues.put(rskprefDetsTab);
				retValues.put(perprioDetsTab);
					
					
				retValues.put(AutoAltrDetailsTab);				
				
				
				retValues.put(AttachmentTab);    
				
				retValues.put(sumanalDetsTab);
				
				
				
				List userProfList = logserv.getLoginProfile(dao, strCrtdUser, strAdvId);
				String strSkinColor =  "",strLastLogin = "", strCurrLogin = "";
				
				if(userProfList.size()>0){
			 		Iterator proite =userProfList.iterator();
			 		while(proite.hasNext()){
				 		Object[] userDets = (Object[])proite.next();
				 		
				 		strSkinColor = FipaUtils.nullOrBlank(userDets[0].toString())?"":userDets[0].toString();
//				 		strCurrLogin = FipaUtils.nullOrBlank(userDets[1].toString())?"":userDets[1].toString();
//				 		strLastLogin = FipaUtils.nullOrBlank(userDets[2].toString())?"":userDets[2].toString();
				 	}
			 		
			 		
//			 		sessMap.remove("SKIN_COLOR");
//			 		sessMap.put("SKIN_COLOR",strSkinColor);
			 		
					 JSONObject jsnSkinColorObj = new JSONObject();
					 jsnSkinColorObj.put("SKIN_COLOR", strSkinColor);
			 		retValues.put(jsnSkinColorObj);
//					
			 	}
			 	
				
			}
			
			

			logger.info(""+retValues);
 
			 
		}catch(Exception ex){
			logger.error("",ex);
		
			
		}
 		
		return retValues;
 		
	}
	
	
	
	public JSONArray getCustomerDetsFromFPMS(HttpServletRequest request){
		 
		logger.info(" ------> Inside getCustomerDetsFromFPMS Method ");
		JSONArray retValues = new JSONArray();
		
		
		
		
		JSONObject jsnObjTab =  new JSONObject();
		JSONObject jsnFamObjTab =  new JSONObject();
		
		JSONArray clntDataJsnArr = new JSONArray();
		JSONArray clntFamDataJsnArr = new JSONArray();
			
		FPMSDataService serv=new FPMSDataService(); 
		
		try{
		
			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
			DBInterfaceFpmsImpl dao = (DBInterfaceFpmsImpl)appCtx.getBean(FipaConstant.FPMS_DBIMP_BEAN);				
			
			String strCustName = FipaUtils.getParamValue(request, "strClientName");
			strCustName = java.net.URLDecoder.decode(strCustName,"UTF-8");
			
			String strCustNric = FipaUtils.getParamValue(request, "strClientNRIC");
			strCustNric = java.net.URLDecoder.decode(strCustNric,"UTF-8");
			
			String strCustId = FipaUtils.getParamValue(request, "strCustId");
			String strClientNRIC = FipaConstant.EMPTY_STRING,strAdvId=FipaConstant.EMPTY_STRING,strFNAId=FipaConstant.EMPTY_STRING;
			
			List clientTabDetsList = new ArrayList();
			clientTabDetsList = serv.getCustomerDetsFromFPMS(dao,strCustName,strCustNric,strCustId);
			
			
			List clientFamilyTabDetsList = new ArrayList();
			clientFamilyTabDetsList = serv.getCustFamilyDets(dao, strCustId);

			int clientTabSize = clientTabDetsList.size();
			int famTabSize = clientFamilyTabDetsList.size();
			
			if(clientTabSize > 0){
				Iterator it = clientTabDetsList.iterator();
				while(it.hasNext()){
					JSONObject clntDataJsnObj = new JSONObject();
					
					Object[] objs = (Object[]) it.next();
					
					strCustId = FipaUtils.getObjValue(objs[0]);
					clntDataJsnObj.put("fpmsCustid",strCustId);
					clntDataJsnObj.put("dfSelfName",FipaUtils.getObjValue(objs[2]));
					strClientNRIC = FipaUtils.getObjValue(objs[4]);
					clntDataJsnObj.put("dfSelfNric",strClientNRIC);
					strAdvId=FipaUtils.getObjValue(objs[7]);
					clntDataJsnObj.put("advstfId",strAdvId);
					clntDataJsnObj.put("dfSelfCompname",FipaUtils.getObjValue(objs[9]));
					clntDataJsnObj.put("dfSelfOccpn",FipaUtils.getObjValue(objs[11]));
					
					String strHomeAdd1 = FipaUtils.getObjValue(objs[13]),
							strHomeAdd2 = FipaUtils.getObjValue(objs[14]),
							strCountry = FipaUtils.getObjValue(objs[18]),
							strPostal = FipaUtils.getObjValue(objs[19]);
					
					clntDataJsnObj.put("dfSelfHomeaddr",strHomeAdd1);					
					clntDataJsnObj.put("dfSelfHomeaddr2",strHomeAdd2);
					clntDataJsnObj.put("dfSelfHomeaddr3",FipaUtils.getObjValue(objs[15]));
					clntDataJsnObj.put("dfSelfHomeCity",FipaUtils.getObjValue(objs[16]));
					clntDataJsnObj.put("dfSelfHomeState",FipaUtils.getObjValue(objs[17]));
					clntDataJsnObj.put("dfSelfHomecntry",strCountry);
					clntDataJsnObj.put("dfSelfHomepostal",strPostal);	
					
					clntDataJsnObj.put("dfSelfFax",FipaUtils.getObjValue(objs[20]));
					clntDataJsnObj.put("dfSelfHome",FipaUtils.getObjValue(objs[21]));
					clntDataJsnObj.put("dfSelfMobile",FipaUtils.getObjValue(objs[22]));
					
					String strMailAdd1 = FipaUtils.getObjValue(objs[33]),
							strMailAdd2 = FipaUtils.getObjValue(objs[34]),
							strMailContry = FipaUtils.getObjValue(objs[38]),
							strMailPostal = FipaUtils.getObjValue(objs[39]);
					
					if(FipaUtils.nullOrBlank(strMailAdd1) && FipaUtils.nullOrBlank(strMailAdd2) &&
							FipaUtils.nullOrBlank(strMailContry) && FipaUtils.nullOrBlank(strMailPostal) ){
						strMailAdd1 = strHomeAdd1;
						strMailAdd2 = strHomeAdd2;
						strMailContry = strCountry;
						strMailPostal = strPostal;
						
					}
				
					clntDataJsnObj.put("dfSelfMailaddr",strMailAdd1);				
					clntDataJsnObj.put("dfSelfMailaddr2",strMailAdd2);
					clntDataJsnObj.put("dfSelfMailaddr3",FipaUtils.getObjValue(objs[35]));
					clntDataJsnObj.put("dfSelfMailCity",FipaUtils.getObjValue(objs[36]));
					clntDataJsnObj.put("dfSelfMailState",FipaUtils.getObjValue(objs[37]));
					clntDataJsnObj.put("dfSelfMailcntry",strMailContry);
					clntDataJsnObj.put("dfSelfMailpostal",strMailPostal);					
					
					clntDataJsnObj.put("dfSelfDob",FipaUtils.getObjValue(objs[41]));
					clntDataJsnObj.put("dfSelfMartsts",FipaUtils.getObjValue(objs[42]));
					clntDataJsnObj.put("dfSelfGender",FipaUtils.getObjValue(objs[43]));
					
					clntDataJsnObj.put("dfSelfPersemail",FipaUtils.getObjValue(objs[44]));
					clntDataJsnObj.put("dfSelfSmoking",FipaUtils.getObjValue(objs[46]));
					clntDataJsnObj.put("dfSelfNationality",FipaUtils.getObjValue(objs[48]));	
					clntDataJsnObj.put("dfSelfAnnlincome",FipaUtils.getObjValue(objs[53]));			
					
					
					
					
					if(strHomeAdd1.equalsIgnoreCase(strMailAdd1) &&  strHomeAdd2.equalsIgnoreCase(strMailAdd2) &&
							strCountry.equalsIgnoreCase(strMailContry) && strPostal.equalsIgnoreCase(strMailPostal)) {
						clntDataJsnObj.put("dfSelfRegmailaddrSame","Y");		
					}else {
						
						clntDataJsnObj.put("dfSelfRegmailaddrSame","N");
					} 
					
					clntDataJsnObj.put("dfSpsNric",FipaUtils.getObjValue(objs[56]));			
					clntDataJsnObj.put("dfSpsName",FipaUtils.getObjValue(objs[57]));			
					clntDataJsnObj.put("dfSpsAge",FipaUtils.getObjValue(objs[60]));			
					clntDataJsnObj.put("dfSpsGender",FipaUtils.getObjValue(objs[62]));			
					clntDataJsnObj.put("dfSpsDob",FipaDateUtils.formatDate((Date)objs[64]));			
//					clntDataJsnObj.put("dfSpsMartsts",FipaUtils.getObjValue(objs[65]));			
					clntDataJsnObj.put("dfSpsAnnlincome",FipaUtils.getObjValue(objs[66]));			
					clntDataJsnObj.put("txtFldKycCustInitial",FipaUtils.getObjValue(objs[3]));  
					clntDataJsnObj.put("txtFldKycCustCtg",FipaUtils.getObjValue(objs[1])); 
					clntDataJsnObj.put("txtFldKycCustSts",FipaUtils.getObjValue(objs[5])); 
					
					clntDataJsnArr.put(clntDataJsnObj);	
					
				}
				
				jsnObjTab.put("FPMS_CUSTOMER_DETAILS", clntDataJsnArr);
			}
			
			if(famTabSize > 0 ){
				
				Iterator it = clientFamilyTabDetsList.iterator();
				while(it.hasNext()){
					JSONObject clntFamDataJsnObj = new JSONObject();
					Object[] objs = (Object[]) it.next();
					
					clntFamDataJsnObj.put("dfDepnName",FipaUtils.getObjValue(objs[0]));
					clntFamDataJsnObj.put("dfDepDOB",FipaDateUtils.formatDate((Date)objs[1]));
					clntFamDataJsnObj.put("dfDepnAge",FipaUtils.getObjValue(objs[2]));
					clntFamDataJsnObj.put("dfDepnNRIC",FipaUtils.getObjValue(objs[3]));
					clntFamDataJsnObj.put("dfDepnGender",FipaUtils.getObjValue(objs[4]));
					clntFamDataJsnObj.put("dfDepMarital",FipaUtils.getObjValue(objs[5]));
					clntFamDataJsnObj.put("dfDepnIncome",FipaUtils.getObjValue(objs[6]));
					clntFamDataJsnObj.put("dfDepnRel",FipaUtils.getObjValue(objs[7]));
					clntFamDataJsnObj.put("dfDepnRemark",FipaUtils.getObjValue(objs[8]));
					clntFamDataJsnObj.put("dfDepnAgentId",FipaUtils.getObjValue(objs[9]));
					
					
					clntFamDataJsnArr.put(clntFamDataJsnObj);
				}
				
				jsnFamObjTab.put("CUST_FAMILY_DETS", clntFamDataJsnArr);
				
			}
			
			JSONObject polJsnObj = getFPMSPolDets(dao, strCustName, strCustNric,strCustId);
			
//			JSONArray polPremArr = fnaLifePremAmt(request);
//			JSONObject polPremObj = (JSONObject)polPremArr.get(0);
			String[] strArrParam = new String[4];
			  strArrParam[0] =  strClientNRIC;
			 strArrParam[1]=strAdvId;
			 strArrParam[2]=strCustId;
			 strArrParam[3]= strFNAId;
			JSONObject polPremObj = fnaLifePremAmt(request,strArrParam);
			
			retValues.put(jsnObjTab);
			retValues.put(polJsnObj);
			retValues.put(jsnFamObjTab);
			retValues.put(polPremObj);

			
		}catch(Exception ex){
			
			logger.error("",ex);
		}
		
		return retValues;
		
	}
	
	 
	 public JSONArray checkExistingNRIC(HttpServletRequest request){
		 logger.info(" ------> Inside checkExistingNRIC Method ");
		JSONArray retValues = new JSONArray();
		
		
		JSONObject nricTabJsnObj =  new JSONObject();
		JSONArray nricDataJsnArr = new JSONArray();
		
		List clientSearchList = new ArrayList();		
		ClientService serv=new ClientService(); 

		
		try{
		
			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
			
			DBInterfaceImpl dao = (DBInterfaceImpl)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
			
				 
			String strCustNric = FipaUtils.getParamValue(request, "strSrchClntNric");
			strCustNric = java.net.URLDecoder.decode(strCustNric,"UTF-8");
			strCustNric= strCustNric.replace("\'", "\''");
			
			
			String strCustNricType =  FipaUtils.getParamValue(request, "strSrchClntNricType");
			strCustNricType = java.net.URLDecoder.decode(strCustNricType,"UTF-8");
			
			
			
			
			StringBuffer strBufQryParam = new StringBuffer();
		 
			
			if(!FipaUtils.nullOrBlank(strCustNric)){
				strBufQryParam.append(" and UPPER(cust.DF_SELF_NRIC) = '").append(strCustNric.toUpperCase()).append("'");
				
			} 
			if(!FipaUtils.nullOrBlank(strCustNricType)){
				strBufQryParam.append(" and UPPER(cust.DF_SELF_IDTYPE) = '").append(strCustNricType.toUpperCase()).append("'");
				
			}
			  
			
			clientSearchList = serv.clientNRICSearch(dao,strBufQryParam.toString());
			
			if(clientSearchList.size() > 0){
				
				Iterator it = clientSearchList.iterator();
				
				String strContDets  = "";
//				int jsonSize=0;
				
				int sino=0;
				while(it.hasNext()){
					JSONObject nricDataJsnObj = new JSONObject();
					Object[] client = (Object[]) it.next();					
					
					nricDataJsnObj.put("dfSelfNricName", FipaUtils.getObjValue(client[0]));
					nricDataJsnObj.put("dfSelfNric", FipaUtils.getObjValue(client[1]));
						 
											
					nricDataJsnArr.put(nricDataJsnObj);
//						jsonSize = nricDataJsnArr.size();
						
				}
				
				nricTabJsnObj.put("CLIENT_NRIC_SRCH", nricDataJsnArr);
			}
			else{
				
				nricTabJsnObj.put("CLIENT_NRIC_SRCH_NOREC", "");
				
			}
			
			
	
			retValues.put(nricTabJsnObj);
			 
			
			
		}catch(Exception ex){
			logger.error("",ex);
			
		}
		
		return retValues;
		
	}
	
	 
	 
	 public JSONArray getLifeInsuranceDets(HttpServletRequest request){
			
			logger.info(" ------> Inside getLifeInsuranceDets"); 
			
			JSONArray retValues = new JSONArray();
			
			
			JSONObject lifeTabJsnObj =  new JSONObject();
			JSONArray lifeDataJsnArr = new JSONArray(); 

			List<FnaLifeinsuranceDets> LifeInsSearchList = new ArrayList();	  

			
			/*Life Plan PRo Dets*/
			List LifePlanSearchList = new ArrayList(); 
			JSONObject lifePlnJsnObj = new JSONObject();
			JSONObject lifePlnTabJsnObj =  new JSONObject(); 
			JSONArray lifePlnDataJsnArr = new JSONArray();
			
			 
			List LifeCovSearchList = new ArrayList(); 
			JSONObject lifeCovJsnObj = new JSONObject();
			JSONObject lifeCovTabJsnObj =  new JSONObject(); 
			JSONArray lifeCovDataJsnArr = new JSONArray();
			
			
			/*Life Child Education Dets*/
			JSONObject lifeChldEduDataJsnObj = new JSONObject();
			JSONObject lifeChldEduTabJsnObj =  new JSONObject();
			JSONArray lifeChldEduDataJsnArr = new JSONArray();
			JSONObject liChldEduDetsTab = new JSONObject();
			List LifeChldEduSearchList = new ArrayList(); 
			/*Life MV Retirement Dets*/
			JSONObject lifeMVDataJsnObj = new JSONObject();
			JSONObject lifeMVTabJsnObj =  new JSONObject();
			JSONArray lifeMVDataJsnArr = new JSONArray();
			
			List LifeMVSearchList = new ArrayList();
			/*Life Nominees Dets*/
			JSONObject lifeNomDataJsnObj = new JSONObject();
			JSONObject lifeNomTabJsnObj =  new JSONObject();
			JSONArray lifeNomDataJsnArr = new JSONArray();
			
			List LifeNomSearchList = new ArrayList();
			
			ClientService serv=new ClientService(); 

			
			try{
			
				ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
				
				DBInterfaceImpl dao = (DBInterfaceImpl)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
				
					 
				String strSrchlifeInsId = FipaUtils.getParamValue(request, "strSrchlifeInsId");
				strSrchlifeInsId = java.net.URLDecoder.decode(strSrchlifeInsId,"UTF-8");
				 
				
//				StringBuffer strBufQryParam = new StringBuffer();
			 
				
//				if(!FipaUtils.nullOrBlank(strSrchlifeInsId)){
//					strBufQryParam.append(" and UPPER(life.LIP_ID) = '").append(strSrchlifeInsId.toUpperCase()).append("'");
					
//				} 
				  
				LifeInsSearchList = serv.clntLifeInsSearch(dao,strSrchlifeInsId);//LI 
				LifePlanSearchList = serv.clntLifePlanDetsSearch(dao,strSrchlifeInsId);//PLAN DETS
				LifeCovSearchList = serv.clntLifeCovSearch(dao,strSrchlifeInsId);//COV (DEATH BENEFIT~CRITICAL ILLNESS~HOSPITALITY)  
//				LifeBenfSearchList = serv.clntLifeBenfSearch(dao,strSrchlifeInsId);//DISBILTY
				LifeChldEduSearchList = serv.clntLifeChldEduSearch(dao,strSrchlifeInsId);//EDucation
				LifeMVSearchList = serv.clntLifeMVSearch(dao,strSrchlifeInsId);//Retirement Plg
				LifeNomSearchList = serv.clntLifeNomSearch(dao,strSrchlifeInsId);//Nomination
				
				if(LifeInsSearchList.size() > 0){ 
					Iterator it = LifeInsSearchList.iterator();
					 
					while(it.hasNext()){
						JSONObject lifeDataJsnObj = new JSONObject();
						FnaLifeinsuranceDets lifeins = (FnaLifeinsuranceDets) it.next();
						lifeDataJsnObj.put("lipId",  FipaUtils.getObjValue(lifeins.getLipId()));
						lifeDataJsnObj.put("lipRefId",  FipaUtils.getObjValue(lifeins.getLipRefId()));
						lifeDataJsnObj.put("lipRetRefId",  FipaUtils.getObjValue(lifeins.getLipRetRefId()));
						lifeDataJsnObj.put("lipOwner",  FipaUtils.getObjValue(lifeins.getLipOwner()));
						lifeDataJsnObj.put("lipAssured",  FipaUtils.getObjValue(lifeins.getLipAssured()));
						lifeDataJsnObj.put("lipCompany",  FipaUtils.getObjValue(lifeins.getLipCompany()));
						lifeDataJsnObj.put("lipPolicyno",  FipaUtils.getObjValue(lifeins.getLipPolicyno()));
						lifeDataJsnObj.put("lipPlantype",  FipaUtils.getObjValue(lifeins.getLipPlantype()));
						lifeDataJsnObj.put("lipPaymentfreq",  FipaUtils.getObjValue(lifeins.getLipPaymentfreq()));
						lifeDataJsnObj.put("lipPaymentmethod",  FipaUtils.getObjValue(lifeins.getLipPaymentmethod()));
						lifeDataJsnObj.put("lipPremiumsrc",  FipaUtils.getObjValue(lifeins.getLipPremiumsrc())); 
						lifeDataJsnObj.put("lipIncepdate", FipaUtils.getObjValue(lifeins.getLipIncepdate()));
						lifeDataJsnObj.put("lipExpdate", FipaUtils.getObjValue(lifeins.getLipExpdate()));
						lifeDataJsnObj.put("lipSa",  (FipaUtils.checkNullVal(lifeins.getLipSa())? "0" :lifeins.getLipSa()));
						lifeDataJsnObj.put("policyStatus",  FipaUtils.getObjValue(lifeins.getPolicyStatus()));
						lifeDataJsnObj.put("lipPlanname",   FipaUtils.getObjValue(lifeins.getLipPlanname()));
						lifeDataJsnObj.put("lipCoveragetype",  FipaUtils.getObjValue(lifeins.getLipCoveragetype()));
						lifeDataJsnObj.put("lipIsnurObject",  FipaUtils.getObjValue(lifeins.getLipIsnurObject()));
						lifeDataJsnObj.put("lipCurrBonusAcc", (FipaUtils.checkNullVal(lifeins.getLipCurrBonusAcc())? "0" :lifeins.getLipCurrBonusAcc()));
						lifeDataJsnObj.put("lipCurrCashVal",  (FipaUtils.checkNullVal(lifeins.getLipCurrCashVal())? "0" :lifeins.getLipCurrCashVal()));
						lifeDataJsnObj.put("lipMaturityVal",  FipaUtils.getObjValue(lifeins.getLipMaturityVal()));
						lifeDataJsnObj.put("lipMaturityDate",  FipaUtils.getObjValue(lifeins.getLipMaturityDate()));
						lifeDataJsnObj.put("osLoan",  FipaUtils.getObjValue(lifeins.getOsLoan()));
						lifeDataJsnObj.put("nominationType",  FipaUtils.getObjValue(lifeins.getNominationType()));
						lifeDataJsnObj.put("thirdpartyName",  FipaUtils.getObjValue(lifeins.getThirdpartyName()));
						lifeDataJsnObj.put("lfretYrstoret",  FipaUtils.getObjValue(lifeins.getLfretYrstoret()));
						lifeDataJsnObj.put("cashvalRetAge",  FipaUtils.getObjValue(lifeins.getCashvalRetAge()));
						lifeDataJsnObj.put("retSelfretage",  FipaUtils.getObjValue(lifeins.getRetSelfretage()));
						lifeDataJsnObj.put("retSpouseretage",  FipaUtils.getObjValue(lifeins.getRetSpouseretage()));
						lifeDataJsnObj.put("retMultionret",  FipaUtils.getObjValue(lifeins.getRetMultionret()));
						lifeDataJsnObj.put("retCashvalonret",  FipaUtils.getObjValue(lifeins.getRetCashvalonret()));
						lifeDataJsnObj.put("retIntrateused",  FipaUtils.getObjValue(lifeins.getRetIntrateused()));
						lifeDataJsnObj.put("retPrcnttoused", FipaUtils.getObjValue(lifeins.getRetPrcnttoused())); 
						lifeDataJsnObj.put("lipRemarks",  FipaUtils.getObjValue(lifeins.getLipRemarks()));
						lifeDataJsnObj.put("lipCreatedBy",  FipaUtils.getObjValue(lifeins.getLipCreatedBy()));
						lifeDataJsnObj.put("lipCreatedDate", FipaUtils.getObjValue(lifeins.getLipCreatedDate()));
						lifeDataJsnObj.put("retTotalSa",  FipaUtils.getObjValue(lifeins.getRetTotalPrem()));
						lifeDataJsnObj.put("retTotalPrem", FipaUtils.getObjValue(lifeins.getRetTotalPrem()));
						
						
						
						lifeDataJsnArr.put(lifeDataJsnObj);  
					}
					
					lifeTabJsnObj.put("CLIENT_LIFEDATA_SRCH", lifeDataJsnArr);
				}else{
					
					lifeTabJsnObj.put("CLIENT_LIFEDATA_SRCH_NOREC", "");
					
				}
				
				/*Plan Pro*/
				 lifePlnTabJsnObj.put("CLIENT_PLANPRO_SRCH", FipaUtils.getPropsJsonArray(LifePlanSearchList, FnaLifeinsuranceBasicriders.class));
				
				
			 lifeCovTabJsnObj.put("CLIENT_COVERAGE_SRCH", FipaUtils.getPropsJsonArray(LifeCovSearchList, FnaLifeinsuranceCoverages.class));
 
			 
				
 
			 
			
				/*Life Benefits Dets*/
//				lifeBenfTabJsnObj.put("CLIENT_BENEFDATA_SRCH", FipaUtils.getPropsJsonArray(LifeBenfSearchList, FnaLifeinsuranceDisablebenfs.class));
				  
				 
				/*Life Child Education Dets*/
				lifeChldEduTabJsnObj.put("CLIENT_CHLDEDUDATA_SRCH", FipaUtils.getPropsJsonArray(LifeChldEduSearchList, FnaLifeinsuranceChildedc.class));
				
				  
				/*Life MV Retirement Dets*/
				lifeMVTabJsnObj.put("CLIENT_MVDATA_SRCH", FipaUtils.getPropsJsonArray(LifeMVSearchList, FnaLifeinsuranceMvRet.class));
				 
				
				/*Life Nominees Dets*/
				lifeNomTabJsnObj.put("CLIENT_NOMDATA_SRCH", FipaUtils.getPropsJsonArray(LifeNomSearchList, FnaLifeinsuranceNominees.class));
				
				 
				
				
				retValues.put(lifeTabJsnObj);//life insurance  
				
				retValues.put(lifeChldEduTabJsnObj); //Education Plg
				retValues.put(lifeMVTabJsnObj);//Retirement Plg
				retValues.put(lifeNomTabJsnObj);//Nomination 
				retValues.put(lifeCovTabJsnObj);//Coverage 
				retValues.put(lifePlnTabJsnObj);//Plan 				
				
				logger.info("life---->"+retValues);
				
			}catch(Exception ex){
				logger.error("",ex);
					
			}
			
			return retValues;
			
		}
	 
	 public JSONArray deleteLifeInsuranceDets(HttpServletRequest request){
		 logger.info(" ------> Inside deleteLifeInsuranceDets Method ");
			
			JSONArray retValues = new JSONArray(); 
			JSONObject DataJsnObj = new JSONObject();
			ClientDB clientDB=new ClientDB(); 

			 Map<String,Object> objMapping  = new HashMap();
			 objMapping = FipaUtils.getRequestMapping(request);
			try{
			
				ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
				
				DBInterfaceImpl dao = (DBInterfaceImpl)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
				
					 
				String strLICId = FipaUtils.getParamValue(request, "strlifeInsId");
				strLICId = java.net.URLDecoder.decode(strLICId,"UTF-8");
				
				
				String strClientId = FipaUtils.getParamValue(request, "strlifeFnaId");
				strClientId = java.net.URLDecoder.decode(strClientId,"UTF-8");
				
				ClientService serv = new ClientService();
				List LifePlanSearchList = serv.clntLifePlanDetsSearch(dao,strLICId);//PLAN DETS
				
				Iterator ite = LifePlanSearchList.iterator();
				while(ite.hasNext()){
					FnaLifeinsuranceBasicriders basorRid = (FnaLifeinsuranceBasicriders)ite.next();
					String strID1 = FipaUtils.nullOrBlank(basorRid.getCashValRefId()) ? "" :basorRid.getCashValRefId();
					String strID2 =  FipaUtils.nullOrBlank(basorRid.getCashValRefId()) ? "" :basorRid.getCashValRefId();
					
					clientDB.deletePlnIncmAsset(strID1);
					clientDB.deletePlnIncmAsset(strID2);
					
					clientDB.deletePlnCPFDets(strID1);
					clientDB.deletePlnSRSDetails(strID1);
					
					clientDB.deletePlnCPFDets(strID2);
					clientDB.deletePlnSRSDetails(strID2);
					
				}
				 
				/*Plan Details*/ 
				clientDB.deletePlnProdetails(strLICId); 
				
				/*Nominees Details*/ 
				clientDB.deleteNomineeNamedetails(strLICId); 
				
				
				/*Disability Details*/ 
				clientDB.deleteBenefdetails(strLICId); 
				
				 
				/*Retirement Details*/ 
				clientDB.deleteRetPlgdetails(strLICId); 
				
				
				/*Coverages Details*/ 
				clientDB.deleteCoveragesdetails(strLICId); 
				
				/*Education Details*/ 
				clientDB.deleteEduPlgdetails(strLICId);  
				
				/*Life Insurance Details*/
				clientDB.deleteLifeInsurceDetails(strClientId,strLICId);
				 
				DataJsnObj.put("TARGET", "Delete completed");
				retValues.put(DataJsnObj);
				 
			}catch(Exception ex){
				logger.error("",ex);
					
			}
			
			return retValues;
			
		}
	 
	 public JSONArray getFPMSlifeDets(HttpServletRequest request){
		 logger.info(" ------> Inside getFPMSlifeDets Method ");
			JSONArray retValues = new JSONArray();
			
			JSONObject lifeDataJsnObj = new JSONObject();
			JSONObject lifeTabJsnObj =  new JSONObject();
			JSONArray lifeDataJsnArr = new JSONArray(); 
			
			
			
			
				JSONObject jsnObjPolTab =  new JSONObject();
				JSONArray polDataJsnArr = new JSONArray();
				JSONArray polPlanDataJsnArr = new JSONArray();
				JSONObject jsnObjPolPlanTab =  new JSONObject();
				
			List  policyPlanDetList = new ArrayList();	 
			 List policyDetList =new ArrayList();
			 
			 FPMSDataService serv = new FPMSDataService();
			
			try{
			
				ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
				
				DBInterfaceImpl dao = (DBInterfaceImpl)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
				DBInterfaceFpmsImpl fpmsdao = (DBInterfaceFpmsImpl)appCtx.getBean(FipaConstant.FPMS_DBIMP_BEAN);	
				 
				String strSrchAppId = FipaUtils.getParamValue(request, "strSrchAppId");
				strSrchAppId = java.net.URLDecoder.decode(strSrchAppId,"UTF-8");
				
				
				StringBuffer strBufQryParam = new StringBuffer();
			 
				 
				if(!FipaUtils.nullOrBlank(strSrchAppId)){
					strBufQryParam.append(" and UPPER(life.APPID) = '").append(strSrchAppId.toUpperCase()).append("'");
					
				} 

			
				policyDetList = serv.getFPMSLifeInsuracePolDets(fpmsdao, "","","",strSrchAppId);
				policyPlanDetList = serv.getLifeInsuracePlanDets(fpmsdao, "","","",strSrchAppId);
				
				int polCnt = policyDetList.size();
				int polPlanCnt = policyPlanDetList.size();
			 
				if(polCnt > 0){
					
					

					Iterator it = policyDetList.iterator();
					while(it.hasNext()){
						JSONObject polDataJsnObj = new JSONObject();
						Object[] polObjs = (Object[]) it.next();
						
						polDataJsnObj.put("strFPMSPolOwner",(FipaUtils.checkNullVal(polObjs[2])?"":polObjs[2].toString()));
						polDataJsnObj.put("strFPMSPolOwnerNRIC",(FipaUtils.checkNullVal(polObjs[3])?"":polObjs[3].toString()));
						polDataJsnObj.put("strFPMSPolPlanName",(FipaUtils.checkNullVal(polObjs[4])?"":polObjs[4].toString()));
						polDataJsnObj.put("strFPMSPolPolNo",(FipaUtils.checkNullVal(polObjs[5])?"":polObjs[5].toString()));
						polDataJsnObj.put("strFPMSPolPrincipal",(FipaUtils.checkNullVal(polObjs[6])?"":polObjs[6].toString()));
						polDataJsnObj.put("strFPMSPolPremiumType",(FipaUtils.checkNullVal(polObjs[7])?"":polObjs[7].toString()));
						polDataJsnObj.put("strFPMSPolPremium",(FipaUtils.checkNullVal(polObjs[8])?"":polObjs[8].toString()));
						polDataJsnObj.put("strFPMSPolSA",(FipaUtils.checkNullVal(polObjs[9])?"":polObjs[9].toString()));
						polDataJsnObj.put("strFPMSPolPaymentMode",(FipaUtils.checkNullVal(polObjs[10])?"":polObjs[10].toString()));
						polDataJsnObj.put("strFPMSPolPaymentMeth",(FipaUtils.checkNullVal(polObjs[11])?"":polObjs[11].toString()));
						polDataJsnObj.put("strFPMSPolEffDate",(FipaUtils.checkNullVal(polObjs[12])?"":polObjs[12].toString()));
						polDataJsnObj.put("strFPMSPolRenDate",(FipaUtils.checkNullVal(polObjs[13])?"":polObjs[13].toString()));
						polDataJsnObj.put("strFPMSPolStatus",(FipaUtils.checkNullVal(polObjs[15])?"":polObjs[15].toString()));
						polDataJsnObj.put("strFPMSPolLOBMain",(FipaUtils.checkNullVal(polObjs[16])?"":polObjs[16].toString()));
						polDataJsnObj.put("strFPMSPolLOBSub",(FipaUtils.checkNullVal(polObjs[17])?"":polObjs[17].toString()));						
						polDataJsnObj.put("strFPMSPolAppId",(FipaUtils.checkNullVal(polObjs[18])?"":polObjs[18].toString()));
						polDataJsnObj.put("strFPMSPolPrincipalId",(FipaUtils.checkNullVal(polObjs[19])?"":polObjs[19].toString()));
						polDataJsnObj.put("strFPMSPolApplnName","FPMSNL");
						polDataJsnObj.put("strFPMSPolCoverages","NA");
						polDataJsnObj.put("strFPMSPolOwner","Self");
						polDataJsnObj.put("strFPMSPolAppId",(FipaUtils.checkNullVal(polObjs[18])?"":polObjs[18].toString()));
						polDataJsnObj.put("strFPMSPolProposed",FipaUtils.checkNullVal(polObjs[20])?"":polObjs[20].toString());
						polDataJsnObj.put("strFPMSPolLifeAssured",FipaUtils.checkNullVal(polObjs[21])?"":polObjs[21].toString()); 
						polDataJsnObj.put("strFPMSPolType",FipaUtils.checkNullVal(polObjs[22])?"":polObjs[22].toString());
						
						polDataJsnArr.put(polDataJsnObj);
					}
					jsnObjPolTab.put("FPMS_POLICY_DETS", polDataJsnArr); 
				}
				
				if(polPlanCnt >0){

					Iterator planite = policyPlanDetList.iterator();
					 
					while(planite.hasNext()){
						 JSONObject polPlanDataJsnObj = new JSONObject();
						Object[] polObjs = (Object[]) planite.next();
						
						polPlanDataJsnObj.put("strFPMSPolOwner",(FipaUtils.checkNullVal(polObjs[2])?"":polObjs[2].toString()));
						polPlanDataJsnObj.put("strFPMSPolOwnerNRIC",(FipaUtils.checkNullVal(polObjs[3])?"":polObjs[3].toString()));
						polPlanDataJsnObj.put("strFPMSPolPlanName",(FipaUtils.checkNullVal(polObjs[4])?"":polObjs[4].toString()));
						polPlanDataJsnObj.put("strFPMSPolPolNo",(FipaUtils.checkNullVal(polObjs[5])?"":polObjs[5].toString()));						
						polPlanDataJsnObj.put("strFPMSPolPrincipal",(FipaUtils.checkNullVal(polObjs[6])?"":polObjs[6].toString()));
						polPlanDataJsnObj.put("strFPMSPolPremiumType",(FipaUtils.checkNullVal(polObjs[7])?"":polObjs[7].toString()));
						polPlanDataJsnObj.put("strFPMSPolPremium",(FipaUtils.checkNullVal(polObjs[8])?"":polObjs[8].toString()));
						polPlanDataJsnObj.put("strFPMSPolSA",(FipaUtils.checkNullVal(polObjs[9])?"":polObjs[9].toString()));  
						polPlanDataJsnObj.put("strFPMSPolPaymentMode",(FipaUtils.checkNullVal(polObjs[10])?"":polObjs[10].toString()));
						polPlanDataJsnObj.put("strFPMSPolPaymentMeth",(FipaUtils.checkNullVal(polObjs[11])?"":polObjs[11].toString()));						
						polPlanDataJsnObj.put("strFPMSPolEffDate",(FipaUtils.checkNullVal(polObjs[12])?"":polObjs[12].toString()));
						polPlanDataJsnObj.put("strFPMSPolRenDate",(FipaUtils.checkNullVal(polObjs[13])?"":polObjs[13].toString()));
						polPlanDataJsnObj.put("strFPMSPolPrdtType",(FipaUtils.checkNullVal(polObjs[14])?"":polObjs[14].toString()));
						polPlanDataJsnObj.put("strFPMSPolStatus",(FipaUtils.checkNullVal(polObjs[15])?"":polObjs[15].toString()));
						polPlanDataJsnObj.put("strFPMSPolLOBMain",(FipaUtils.checkNullVal(polObjs[16])?"":polObjs[16].toString()));
						polPlanDataJsnObj.put("strFPMSPolLOBSub",(FipaUtils.checkNullVal(polObjs[17])?"":polObjs[17].toString()));						
						polPlanDataJsnObj.put("strFPMSPolAppId",(FipaUtils.checkNullVal(polObjs[18])?"":polObjs[18].toString()));
						polPlanDataJsnObj.put("strFPMSPolPremTerm",(FipaUtils.checkNullVal(polObjs[19])?"":polObjs[19].toString()));
						polPlanDataJsnObj.put("strFPMSPolRemarks",(FipaUtils.checkNullVal(polObjs[20])?"":polObjs[20].toString()));
						polPlanDataJsnObj.put("strFPMSPolApplnName","FPMSNL");
//						polDataJsnObj.put("strFPMSPolCoverages","NA");
//						polPlanDataJsnObj.put("strFPMSPolOwner","Self");
//						polPlanDataJsnObj.put("strFPMSPolAppId",(FipaUtils.checkNullVal(polObjs[18])?"":polObjs[18].toString()));
//						polPlanDataJsnObj.put("strFPMSPolProposed",FipaUtils.checkNullVal(polObjs[20])?"":polObjs[20].toString());
//						polPlanDataJsnObj.put("strFPMSPolLifeAssured",FipaUtils.checkNullVal(polObjs[21])?"":polObjs[21].toString()); 
//						
						polPlanDataJsnArr.put(polPlanDataJsnObj);
						
					}
					
					jsnObjPolPlanTab.put("FPMS_POLICYPLAN_DETS", polPlanDataJsnArr); 
				}
				 
				
				retValues.put(jsnObjPolTab);
				retValues.put(jsnObjPolPlanTab); 
				 
			}catch(Exception ex){
				
				logger.error("",ex);
			}
			
			return retValues;
			
		}
	 
 
	 
	 public JSONArray getRecomProductName(HttpServletRequest request){
			
			logger.info(" ------> Inside getRecomProductName Method "); 
			
			JSONArray retValues = new JSONArray();
			
			
			JSONObject cpfTabJsnObj =  new JSONObject();
			JSONArray cpfDataJsnArr = new JSONArray();
			
			List cpfSearchList = new ArrayList();		
			FPMSDataService cpfServ=new FPMSDataService(); 

			
			try{
			
				ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
				
				DBInterfaceFpmsImpl fpmsdao = (DBInterfaceFpmsImpl)appCtx.getBean(FipaConstant.FPMS_DBIMP_BEAN);
				  
				 
				String strRecomProdId = FipaUtils.getParamValue(request, "strSrchRecomProdId");
				strRecomProdId = java.net.URLDecoder.decode(strRecomProdId,"UTF-8");
				 
				
				StringBuffer strCpfBufQryParam = new StringBuffer();
			 
				
				if(!FipaUtils.nullOrBlank(strRecomProdId)){
					strCpfBufQryParam.append(" and rcmPrdt.PRIN_ID = '").append(strRecomProdId).append("'");
					
				}
				
				 
	  
				
				cpfSearchList = cpfServ.rcmPrdtSearch(fpmsdao,strCpfBufQryParam.toString());

				if(cpfSearchList.size() > 0){
					
					Iterator it = cpfSearchList.iterator();
					
					String strContDets  = "";
					int jsonSize=0;
					
					int sino=0;
					while(it.hasNext()){
						JSONObject cpfDataJsnObj = new JSONObject();
						Object[] client = (Object[]) it.next();					
						 
							cpfDataJsnObj.put("txtfldProductid",FipaUtils.getObjValue(client[0]));				
							 
							cpfDataJsnArr.put(cpfDataJsnObj);
							jsonSize = cpfDataJsnArr.length(); 
					}
				}
				else{
					
					cpfTabJsnObj.put("NOREC", "");
					
				}
				
				cpfTabJsnObj.put("PRODUCT_NAME_LIST", cpfDataJsnArr);
		
				retValues.put(cpfTabJsnObj);
//				
//				logger.info("  retValues ------>"+retValues); 
//				
				
			}catch(Exception ex){
				logger.error("",ex);
				
			}
			
			return retValues;
			
		}
	 
	 
	 public JSONArray cpfSearchDetails(HttpServletRequest request){
			
			logger.info(" ------> Inside cpfSearchDetails Method "); 
			
			JSONArray retValues = new JSONArray();
			
			
			JSONObject cpfTabJsnObj =  new JSONObject();
			JSONArray cpfDataJsnArr = new JSONArray();
			
			List cpfSearchList = new ArrayList();		
			MasterCpfService cpfServ=new MasterCpfService(); 

			
			try{
			
				ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
				
				DBInterfaceImpl dao = (DBInterfaceImpl)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
				
					
				
				String strCpfAc = FipaUtils.getParamValue(request, "strSrchCpfAccount");
				strCpfAc = java.net.URLDecoder.decode(strCpfAc,"UTF-8");
				
				String strCpfIntMth = FipaUtils.getParamValue(request, "strSrchCpfIntMth");
				strCpfIntMth = java.net.URLDecoder.decode(strCpfIntMth,"UTF-8");
				
				
				StringBuffer strCpfBufQryParam = new StringBuffer();
			 
				
				if(!FipaUtils.nullOrBlank(strCpfAc)){
					strCpfBufQryParam.append(" and cpf.CPF_ACCOUNT = '").append(strCpfAc).append("'");
					
				}
				
				if(!FipaUtils.nullOrBlank(strCpfIntMth)){
					strCpfBufQryParam.append(" and cpf.CPF_INT_MONTH = '").append(strCpfIntMth).append("'");
				}
	 

			  
				
				cpfSearchList = cpfServ.cpfSearch(dao,strCpfBufQryParam.toString());

				if(cpfSearchList.size() > 0){
					
					Iterator it = cpfSearchList.iterator();
					
					String strContDets  = "";
					int jsonSize=0;
					
					int sino=0;
					while(it.hasNext()){
						JSONObject cpfDataJsnObj = new JSONObject();
						Object[] client = (Object[]) it.next();					
						

							cpfDataJsnObj.put("sino",++sino);
							 
							cpfDataJsnObj.put("txtFldCpfIntId",FipaUtils.getObjValue(client[0]));				
							
							cpfDataJsnObj.put("selCpfAccount", FipaUtils.getObjValue(client[1]));
												
							cpfDataJsnObj.put("txtFldCpfIntRate", FipaUtils.getObjValue(client[2]));
							
							cpfDataJsnObj.put("txtFldCpfIntMonth", FipaUtils.getObjValue(client[3]));
							
							cpfDataJsnObj.put("txtFldCpfCreatedBy", FipaUtils.getObjValue(client[4]));
							
							cpfDataJsnObj.put("txtFldCpfCreatedDate", FipaUtils.getObjValue(client[5]));
							
							  	
							cpfDataJsnArr.put(cpfDataJsnObj);
							jsonSize = cpfDataJsnArr.length(); 
					}
				}
				else{
					
					cpfTabJsnObj.put("CPF_SEARCH_NOREC", ""); 
				}
				
				cpfTabJsnObj.put("CPF_SEARCH", cpfDataJsnArr);
		
				retValues.put(cpfTabJsnObj);
				
//				logger.info("  retValues ------>"+retValues); 
				
				
			}catch(Exception ex){
				logger.error("",ex);
				
			}
			
			return retValues;
			
		}
		
	 
	 
	 
	 
	 
	 
	 
	 public JSONArray cpfCheckExisting(HttpServletRequest request){
			
			logger.info(" ------> Inside cpfCheckExisting Method "); 
			
			JSONArray retValues = new JSONArray();
			
			
			JSONObject cpfTabJsnObj =  new JSONObject();
			JSONArray cpfDataJsnArr = new JSONArray();
			
			List cpfSearchList = new ArrayList();		
			MasterCpfService cpfServ=new MasterCpfService(); 

			
			try{
			
				ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
				
				DBInterfaceImpl dao = (DBInterfaceImpl)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
				
					
				
				String strCpfAc = FipaUtils.getParamValue(request, "strSrchCpfAccount");
				strCpfAc = java.net.URLDecoder.decode(strCpfAc,"UTF-8");
				
				String strCpfIntMth = FipaUtils.getParamValue(request, "strSrchCpfIntMth");
				strCpfIntMth = java.net.URLDecoder.decode(strCpfIntMth,"UTF-8");
				
				
				StringBuffer strCpfBufQryParam = new StringBuffer();
			 
				
				if(!FipaUtils.nullOrBlank(strCpfAc)){
					strCpfBufQryParam.append(" and cpf.CPF_ACCOUNT = '").append(strCpfAc).append("'");
					
				}
				
				if(!FipaUtils.nullOrBlank(strCpfIntMth)){
					strCpfBufQryParam.append(" and cpf.CPF_INT_MONTH = '").append(strCpfIntMth).append("'");
				}
	 

			  
				
				cpfSearchList = cpfServ.cpfSrchExisting(dao,strCpfBufQryParam.toString());

				if(cpfSearchList.size() > 0){
					
					Iterator it = cpfSearchList.iterator();
					
					String strContDets  = "";
					int jsonSize=0;
					
					int sino=0;
					while(it.hasNext()){
						
						JSONObject cpfDataJsnObj = new JSONObject();
						
						Object[] client = (Object[]) it.next();					
						

							cpfDataJsnObj.put("sino",++sino);
							 
							cpfDataJsnObj.put("txtFldCpfIntId", FipaUtils.getObjValue(client[0]));				
							
							cpfDataJsnObj.put("selCpfAccount", FipaUtils.getObjValue(client[1]));
												
							cpfDataJsnObj.put("txtFldCpfIntRate", FipaUtils.getObjValue(client[2]));
							
							cpfDataJsnObj.put("txtFldCpfIntMonth", FipaUtils.getObjValue(client[3]));
							
							cpfDataJsnObj.put("txtFldCpfCreatedBy", FipaUtils.getObjValue(client[4]));
							
							cpfDataJsnObj.put("txtFldCpfCreatedDate", FipaUtils.getObjValue(client[5]));
							
							  	
							cpfDataJsnArr.put(cpfDataJsnObj);
							jsonSize = cpfDataJsnArr.length(); 
					}
				}
				else{
					
					cpfTabJsnObj.put("NOREC_FOUND", "");
					
				}
				
				cpfTabJsnObj.put("CPF_ACCOUNT_EXISTED", cpfDataJsnArr);
		
				retValues.put(cpfTabJsnObj);
				
//				logger.info("  retValues ------>"+retValues); 
				
				
			}catch(Exception ex){
				logger.error("",ex);
				
			}
			
			return retValues;
			
		}

	 
	 
	 
	 
	
	 
	 
	 public JSONArray cpfAllocSearchDetails(HttpServletRequest request){
			
			logger.info(" ------> Inside cpfAllocSearchDetails Method "); 
			
			JSONArray retValues = new JSONArray();
			
			
			JSONObject cpfAlRateTabJsnObj =  new JSONObject();
			JSONArray cpfAlRateDataJsnArr = new JSONArray();
			
			List cpfAlRateSearchList = new ArrayList();		
			MasterCpfService cpfAlRateServ=new MasterCpfService(); 

			
			try{
			
				ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
				
				DBInterfaceImpl dao = (DBInterfaceImpl)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
				
					
				
				String strCpfAllocAcType = FipaUtils.getParamValue(request, "strSrchCpfAllocAcType");
				strCpfAllocAcType = java.net.URLDecoder.decode(strCpfAllocAcType,"UTF-8");
				
				String strCpfAllocEffFrm = FipaUtils.getParamValue(request, "strSrchCpfAllocEffFrom");
				strCpfAllocEffFrm = java.net.URLDecoder.decode(strCpfAllocEffFrm,"UTF-8");
				
				
				String strCpfAllocAgeGroup = FipaUtils.getParamValue(request, "strSrchCpfAllocAgeGroup");
				strCpfAllocAgeGroup = java.net.URLDecoder.decode(strCpfAllocAgeGroup,"UTF-8");
				
				 
				
				
				StringBuffer strCpfBufQryParam = new StringBuffer();
			 
				
				if(!FipaUtils.nullOrBlank(strCpfAllocAcType)){
					strCpfBufQryParam.append(" and cpf.ACC_TYPE = '").append(strCpfAllocAcType).append("'"); 
				}
				
				if(!FipaUtils.nullOrBlank(strCpfAllocEffFrm)){
					strCpfBufQryParam.append(" and cpf.EFF_FROM = '").append(strCpfAllocEffFrm).append("'");
				}
	 

				if(!FipaUtils.nullOrBlank(strCpfAllocAgeGroup)){
					strCpfBufQryParam.append(" and cpf.AGE_GRP = '").append(strCpfAllocAgeGroup).append("'");
				}
				 
				
				cpfAlRateSearchList = cpfAlRateServ.cpfAllocRateSearch(dao,strCpfBufQryParam.toString());

				if(cpfAlRateSearchList.size() > 0){
					
					Iterator it = cpfAlRateSearchList.iterator();
					
					String strContDets  = "";
					int jsonSize=0;
					
					int sino=0;
				 
					while(it.hasNext()){
						
						JSONObject cpfAlRateDataJsnObj = new JSONObject();
						 
							Object[] client = (Object[]) it.next();					
						
						

							cpfAlRateDataJsnObj.put("sino",++sino);
							 
							cpfAlRateDataJsnObj.put("txtFldCPFAllocId",FipaUtils.getObjValue(client[0]));				
							
							cpfAlRateDataJsnObj.put("txtFldCPFAllocEffFrom", FipaUtils.getObjValue(client[1]));
												
							cpfAlRateDataJsnObj.put("selCPFAllocAgeGrp", FipaUtils.getObjValue(client[2]));
							
							cpfAlRateDataJsnObj.put("selCPFAllocAccType", FipaUtils.getObjValue(client[3]));
							
							cpfAlRateDataJsnObj.put("txtFldCPFAllocRate", FipaUtils.getObjValue(client[4]));
							
							cpfAlRateDataJsnObj.put("txtFldCPFAllocRemarks", FipaUtils.getObjValue(client[5]));
							
							cpfAlRateDataJsnObj.put("txtFldCPFCreatedBy", FipaUtils.getObjValue(client[6]));
							
							cpfAlRateDataJsnObj.put("txtFldCPFCreatedDate", FipaUtils.getObjValue(client[7]));
							  	
							cpfAlRateDataJsnArr.put(cpfAlRateDataJsnObj);
							jsonSize = cpfAlRateDataJsnArr.length(); 
							 
					}
				}
				else{
					
					cpfAlRateTabJsnObj.put("CPF_ALLOC_SEARCH_NOREC", "");
					
				}
				
				cpfAlRateTabJsnObj.put("CPF_ALLOC_SEARCH", cpfAlRateDataJsnArr);
		
				retValues.put(cpfAlRateTabJsnObj);
				
//				logger.info("  retValues ------>"+retValues); 
				
				
			}catch(Exception ex){
				logger.error("",ex);
				
			}
			
			return retValues;
			
		}
	 
	 public JSONArray cpfAllocCheckExisting(HttpServletRequest request){
			
			logger.info(" ------> Inside cpfAllocCheckExisting Method "); 
			
			JSONArray retValues = new JSONArray();
			
			
			JSONObject cpfAllcChkTabJsnObj =  new JSONObject();
			JSONArray cpfAllcChkDataJsnArr = new JSONArray();
			
			List cpfAllcChkSearchList = new ArrayList();		
			MasterCpfService cpfAllcChkServ=new MasterCpfService(); 

			
			try{
			
				ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
				
				DBInterfaceImpl dao = (DBInterfaceImpl)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
				
					
				
				String strCpfAllocEFrm = FipaUtils.getParamValue(request, "strSrchCpfAllocEFrm");
				strCpfAllocEFrm = java.net.URLDecoder.decode(strCpfAllocEFrm,"UTF-8");
				
				String strCpfAllocAgeGrp = FipaUtils.getParamValue(request, "strSrchCpfAllocAgeGrp");
				strCpfAllocAgeGrp = java.net.URLDecoder.decode(strCpfAllocAgeGrp,"UTF-8");
				
				
				String strCpfAllocAccType = FipaUtils.getParamValue(request, "strSrchCpfAllocAcType");
				strCpfAllocAccType = java.net.URLDecoder.decode(strCpfAllocAccType,"UTF-8");
				
				 
				
				StringBuffer strCpfBufQryParam = new StringBuffer();
			 
				
				if(!FipaUtils.nullOrBlank(strCpfAllocEFrm)){
					strCpfBufQryParam.append(" and cpf.EFF_FROM = '").append(strCpfAllocEFrm).append("'");
					
				}
				
				if(!FipaUtils.nullOrBlank(strCpfAllocAgeGrp)){
					strCpfBufQryParam.append(" and cpf.AGE_GRP = '").append(strCpfAllocAgeGrp).append("'");
				}
	 

				if(!FipaUtils.nullOrBlank(strCpfAllocAccType)){
					strCpfBufQryParam.append(" and cpf.ACC_TYPE = '").append(strCpfAllocAccType).append("'");
				}
				 
				
				cpfAllcChkSearchList = cpfAllcChkServ.cpfAllocSrchExisting(dao,strCpfBufQryParam.toString());

				if(cpfAllcChkSearchList.size() > 0){
					
					Iterator it = cpfAllcChkSearchList.iterator();
					
					String strContDets  = "";
					int jsonSize=0;
					
					int sino=0;
					while(it.hasNext()){
						
						JSONObject cpfAllcChkDataJsnObj = new JSONObject();
						
						Object[] client = (Object[]) it.next();					
						

						cpfAllcChkDataJsnObj.put("sino",++sino);
						 
						cpfAllcChkDataJsnObj.put("txtFldCPFAllocId",FipaUtils.getObjValue(client[0]));				
						
						cpfAllcChkDataJsnObj.put("txtFldCPFAllocEffFrom", FipaUtils.getObjValue(client[1]));
											
						cpfAllcChkDataJsnObj.put("selCPFAllocAgeGrp", FipaUtils.getObjValue(client[2]));
						
						cpfAllcChkDataJsnObj.put("selCPFAllocAccType", FipaUtils.getObjValue(client[3]));
						
						cpfAllcChkDataJsnObj.put("txtFldCPFAllocRate", FipaUtils.getObjValue(client[4]));
						
						cpfAllcChkDataJsnObj.put("txtFldCPFAllocRemarks", FipaUtils.getObjValue(client[5]));
						
						cpfAllcChkDataJsnObj.put("txtFldCPFCreatedBy", FipaUtils.getObjValue(client[6]));
						
						cpfAllcChkDataJsnObj.put("txtFldCPFCreatedDate", FipaUtils.getObjValue(client[7]));
							
							  	
							cpfAllcChkDataJsnArr.put(cpfAllcChkDataJsnObj);
							jsonSize = cpfAllcChkDataJsnArr.length(); 
					}
				}
				else{
					
					cpfAllcChkTabJsnObj.put("NOREC_FOUND", "");
					
				}
				
				cpfAllcChkTabJsnObj.put("CPF_ALLOC_AC_EXIST", cpfAllcChkDataJsnArr); 
				retValues.put(cpfAllcChkTabJsnObj); 
//				logger.info("  retValues ------>"+retValues); 
				
				
			}catch(Exception ex){
				logger.error("",ex);
				
			}
			
			return retValues;
			
		}
	 
	 public JSONObject getFPMSPolDets(DBInterfaceFpms dao,String strCustName,String strCustNric,String strCustId){
		 
		 
		 FPMSDataService serv = new FPMSDataService();
		 
			JSONObject jsnObjPolTab =  new JSONObject();
			JSONArray polDataJsnArr = new JSONArray();
			
		 List policyDetList = new ArrayList();
		 List policyDetPlanList = new ArrayList();
//		 if(!FipaUtils.nullOrBlank(strCustNric)){
			 policyDetList = serv.getFPMSLifeInsuracePolDets(dao, strCustName,strCustNric,strCustId,"");
//			 UNWANTED QUERY EXECUTING
//			 policyDetPlanList = serv.getLifeInsuracePlanDets(dao, strCustName,strCustNric,strCustId,"");
			 
			 
			 
//		 }else{
//			 policyDetList = serv.getLifeInsuraceDets(dao, strCustName);
//		 }
		 
		 int polTabSize = policyDetList.size();
		 
			if(polTabSize >0){
				Iterator it = policyDetList.iterator();
				while(it.hasNext()){
					
					JSONObject polDataJsnObj = new JSONObject();
					
					Object[] polObjs = (Object[]) it.next();
					
					polDataJsnObj.put("strFPMSPolPrincipal",(FipaUtils.checkNullVal(polObjs[6])?"":polObjs[6].toString()));
					polDataJsnObj.put("strFPMSPolPolNo",(FipaUtils.checkNullVal(polObjs[5])?"":polObjs[5].toString()));
					polDataJsnObj.put("strFPMSPolPlanName",(FipaUtils.checkNullVal(polObjs[4])?"":polObjs[4].toString()));
					polDataJsnObj.put("strFPMSPolEffDate",(FipaUtils.checkNullVal(polObjs[12])?"":polObjs[12].toString()));
					polDataJsnObj.put("strFPMSPolStatus",(FipaUtils.checkNullVal(polObjs[15])?"":polObjs[15].toString()));
					polDataJsnObj.put("strFPMSPolSA",(FipaUtils.checkNullVal(polObjs[9])?"":polObjs[9].toString()));  
					polDataJsnObj.put("strFPMSPolPremium",(FipaUtils.checkNullVal(polObjs[8])?"":polObjs[8].toString())); 
					polDataJsnObj.put("strFPMSPolLOBMain",(FipaUtils.checkNullVal(polObjs[16])?"":polObjs[16].toString()));
					polDataJsnObj.put("strFPMSPolLOBSub",(FipaUtils.checkNullVal(polObjs[17])?"":polObjs[17].toString()));
					polDataJsnObj.put("strFPMSPolApplnName","FPMSNL");
					polDataJsnObj.put("strFPMSPolCoverages","NA");
					polDataJsnObj.put("strFPMSPolOwner","Self");
					polDataJsnObj.put("strFPMSPolAppId",(FipaUtils.checkNullVal(polObjs[18])?"":polObjs[18].toString()));
					polDataJsnObj.put("strFPMSPolProposed",FipaUtils.checkNullVal(polObjs[20])?"":polObjs[20].toString());
					polDataJsnObj.put("strFPMSPolLifeAssured",FipaUtils.checkNullVal(polObjs[21])?"":polObjs[21].toString()); 
					polDataJsnObj.put("strFPMSPolType",FipaUtils.checkNullVal(polObjs[22])?"":polObjs[22].toString()); 
					
//					polDataJsnObj.put("strFPMSPolAppId",(FipaUtils.checkNullVal(polObjs[18])?"":polObjs[18].toString()));
					polDataJsnArr.put(polDataJsnObj);
				}
				jsnObjPolTab.put("FPMS_POLICY_DETS", polDataJsnArr);
			} else{
				
				jsnObjPolTab.put("NORECORDS_FPMS_POLICY_DETS", "");
				
			}
			
			
			return jsnObjPolTab;
	 }
	 
	 public JSONArray cpfAccountTypeSearch(HttpServletRequest request){
			
			logger.info(" ------> Inside cpfAccountTypeSearch Method "); 
			
			JSONArray retValues = new JSONArray();
			
			JSONObject cpfAccTypeDataJsnObj = new JSONObject();
			JSONObject cpfAccTypeTabJsnObj =  new JSONObject();
			JSONArray cpfAccTypeDataJsnArr = new JSONArray();
			
			List cpfAccTypeSearchList = new ArrayList();		
			MasterCpfService cpfAccTypeServ=new MasterCpfService(); 

			
			try{
			
				ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext(); 
				DBInterfaceImpl dao = (DBInterfaceImpl)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
				
					 

				String strsrchcpfacctype= FipaUtils.getParamValue(request, "selSrchCpfAcctype");
				strsrchcpfacctype = java.net.URLDecoder.decode(strsrchcpfacctype,"UTF-8");
				

				
				 
				StringBuffer strCpfBufQryParam = new StringBuffer();
			 
				
				if(!FipaUtils.nullOrBlank(strsrchcpfacctype)){
					strCpfBufQryParam.append(" AND cpf.cpfAcId  = '").append(strsrchcpfacctype).append("'");
				 
				}
			 
				cpfAccTypeSearchList = cpfAccTypeServ.cpfAccTypeSearch(dao,strCpfBufQryParam.toString());

				cpfAccTypeTabJsnObj.put("CPFACCTYPE_SEARCH", FipaUtils.getPropsJsonArray(cpfAccTypeSearchList, MasterCpfAcctype.class));
				
				retValues.put(cpfAccTypeTabJsnObj); 
				 
				
			}catch(Exception ex){
				logger.error("",ex);
				
			}
			
			return retValues;
			
		}
	 
	 public JSONArray cpfLifePayoutSearch(HttpServletRequest request){
			
			logger.info(" ------> Inside cpfLifePayoutSearch Method "); 
			
			JSONArray retValues = new JSONArray();
			
			JSONObject cpfPayoutDataJsnObj = new JSONObject();
			JSONObject cpfPayoutTabJsnObj =  new JSONObject();
			JSONArray cpfPayoutDataJsnArr = new JSONArray();
			
			List cpfPayoutSearchList = new ArrayList();		
			MasterCpfService cpfPayoutServ=new MasterCpfService(); 

			
			try{
			
				ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext(); 
				DBInterfaceImpl dao = (DBInterfaceImpl)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
				
					 

				String strsrchcpfpayout= FipaUtils.getParamValue(request, "selSrchCPFLifeRtmntSum"); 
				strsrchcpfpayout = java.net.URLDecoder.decode(strsrchcpfpayout,"UTF-8");
				

				
				 
				StringBuffer strCpfBufQryParam = new StringBuffer();
			 
				
				if(!FipaUtils.nullOrBlank(strsrchcpfpayout)){
					strCpfBufQryParam.append(" AND cpf.retScheme  = '").append(strsrchcpfpayout).append("'");
				 
				}
			 
				cpfPayoutSearchList = cpfPayoutServ.cpfPayoutSearch(dao,strCpfBufQryParam.toString());

				cpfPayoutTabJsnObj.put("CPFPAYOUT_SEARCH", FipaUtils.getPropsJsonArray(cpfPayoutSearchList, MasterCpflifePayout.class));
				
				retValues.put(cpfPayoutTabJsnObj); 
				 
				
			}catch(Exception ex){
				logger.error("",ex);
				
			}
			
			return retValues;
			
		}
	 public JSONArray QuotesSearch(HttpServletRequest request){
		 
		 logger.info(" ------> Inside QuotesSearch Method ");
			JSONArray retValues = new JSONArray();
			
			
			JSONObject quotesTabJsnObj =  new JSONObject();
			JSONArray quotesDataJsnArr = new JSONArray();
			
			List quotesList = new ArrayList();		
			MasterService serv=new MasterService(); 

			
			try{
			
				ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
				
				DBInterfaceImpl dao = (DBInterfaceImpl)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
				 
				quotesList = serv.searchQuotes(dao);
				 
				
				if(quotesList.size() > 0){
					
					Iterator it = quotesList.iterator();
					 
//					int jsonSize=0;
					
					int sino=0;
					while(it.hasNext()){
						
						JSONObject quotesDataJsnObj = new JSONObject();
						
						Object[] quotesObj = (Object[]) it.next();					
						
	 
						quotesDataJsnObj.put("txtFldQuotesId", FipaUtils.getObjValue(FipaUtils.checkNullVal(quotesObj[0])?"":quotesObj[0].toString()));
						quotesDataJsnObj.put("txtFldAuthor", FipaUtils.getObjValue(FipaUtils.checkNullVal(quotesObj[2])?"":quotesObj[2].toString()));
						quotesDataJsnObj.put("txtFldLogMsg",FipaUtils.getObjValue(FipaUtils.checkNullVal(quotesObj[1])?"":quotesObj[1].toString()));
						quotesDataJsnObj.put("selWeekQte", FipaUtils.getObjValue(FipaUtils.checkNullVal(quotesObj[5])?"":quotesObj[5].toString()));
						quotesDataJsnObj.put("txtFldQuotesFrom",FipaUtils.getObjValue(FipaUtils.checkNullVal(quotesObj[3])?"":quotesObj[3].toString()));
						quotesDataJsnObj.put("txtFldQuotesTo", FipaUtils.getObjValue(FipaUtils.checkNullVal(quotesObj[4])?"":quotesObj[4].toString()));
							 
												
						quotesDataJsnArr.put(quotesDataJsnObj);
//							jsonSize = nricDataJsnArr.size();
							
					}
					quotesTabJsnObj.put("ALL_QUOTES", quotesDataJsnArr);
				
				}
				else{
					
					quotesTabJsnObj.put("QUOTES_NOREC", "");
					
				}
			
				
		
				
				retValues.put(quotesTabJsnObj);
				 
				
				
			}catch(Exception ex){
				logger.error("",ex);
				
			}
			
			return retValues;
			
		}

	 public JSONArray propertyInsert(HttpServletRequest request){
		 logger.info(" ------> Inside propertyInsert Method ");
		 JSONArray retval=new JSONArray();

		  	JSONObject propDataJsnObj = new JSONObject();
			JSONObject propTabJsnObj =  new JSONObject(); 
			
			
		 String strValue = FipaUtils.getParamValue(request, "strNewValue");
		 String strRemarks = FipaUtils.getParamValue(request, "strRemarks");
		 String strStatus = FipaUtils.getParamValue(request, "strStatus");
		 String strKey = FipaUtils.getParamValue(request, "strKey");
		  
		 
			
		 MasterService mastServ=new MasterService();
		 HttpSession session  = request.getSession(false);
		 Map<String,String> sessMap    = new HashMap<String,String>();
		 sessMap = (HashMap<String, String>)session.getAttribute(FipaConstant.LOGGED_USER_INFO);
		 String strCrtdUser = (String)sessMap.get(FipaConstant.LOGGED_USER_ID);
		 try{
			
				ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
				
				DBInterfaceImpl dao = (DBInterfaceImpl)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
				  
				MasterPropertykv mastPropkv=new MasterPropertykv(); 
				   
				
				if(strKey.equalsIgnoreCase("FINGLS"))
				{
					mastPropkv.setPropKey(strKey);
					mastPropkv.setPropValue(strValue);
					mastPropkv.setPropRemarks(strRemarks);
					mastPropkv.setPropStatus(strStatus);
					mastPropkv.setPropCrtdBy(strCrtdUser);
					mastPropkv.setPropCrtdDate(new Date());
					mastServ.insMasterKeys(mastPropkv);
					propTabJsnObj.put("FINGLS",strValue);
				}
				
				 retval.put(propTabJsnObj); 
				 
			}catch(Exception ex){
				logger.error("",ex);
				
			} 
		  
		
		 
		return retval;
			 
		}
	 
	 
	 public JSONArray searchFnaDetails(HttpServletRequest request) {
		
		 logger.info(" ------> Inside searchFnaDetails Method ");
		 String strCompId=FipaUtils.getParamValue(request,"strCompId");
		 String strDistribId=FipaUtils.getParamValue(request,"strDistribId");
		 
	  		FPMSDataService cServ = new FPMSDataService();
	  		List fnaElems = new ArrayList();
	  		 JSONArray retval=new JSONArray();

	  		
	  		JSONObject jsnClntFnaTabIdObj = new JSONObject();
	  		JSONArray jsnClntFnaArr = new JSONArray();
	  		long elmCount = 0;
	  		try{

	  			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
				
				DBInterfaceFpmsImpl dao = (DBInterfaceFpmsImpl)appCtx.getBean(FipaConstant.FPMS_DBIMP_BEAN);
				
	  			
	  			fnaElems = cServ.searchFnaDetails(dao, strCompId,strDistribId);
	  			int attachSize = fnaElems.size();
//	  			fplog.info("searchFnaDetails Size  " + attachSize + " list " + fnaElems);

	  			if (attachSize > 0) {
	  				
	  				Iterator it = fnaElems.iterator();
						while(it.hasNext()){
							JSONObject jsnClntFnaElemsObj = new JSONObject();
							Object[] dataCols = (Object[])it.next(); 
							
							jsnClntFnaElemsObj.put("txtFldFnaCount", FipaUtils.checkNullVal(dataCols[0]) ? FipaConstant.EMPTY_STRING: dataCols[0]);//FNA_COUNT
//							jsnClntFnaElemsObj.put("txtFldFnaArchSts", Utility.checkNullVal(dataCols[1]) ? FPMSConstants.STR_NULL_STRING : dataCols[1]);//ARCH STATUS
//							jsnClntFnaElemsObj.put("txtFldFnaId", Utility.checkNullVal(dataCols[2]) ? FPMSConstants.STR_NULL_STRING : dataCols[2]);//FNA_ID
//							jsnClntFnaElemsObj.put("txtFldFnaClientConsent", Utility.checkNullVal(dataCols[3]) ? FPMSConstants.STR_NULL_STRING : dataCols[3]);//CLIENT CONSENT
//							jsnClntFnaElemsObj.put("txtFldFnaQryFor", Utility.checkNullVal(dataCols[4]) ? FPMSConstants.STR_NULL_STRING : dataCols[4]);//QUERY FOR
							
							jsnClntFnaArr.put(jsnClntFnaElemsObj);
						}
						
						jsnClntFnaTabIdObj.put("CLNT_FNA_DETS", jsnClntFnaArr);
	  			}else{
	  				jsnClntFnaTabIdObj.put("CLNT_FNA_DETS", jsnClntFnaArr);
	  			}



	  		}catch(Exception ex){
	  			logger.error("",ex);
//	  			fplog.info(ex);
	  			
	  		}

//	  		fipa.info("searchFnaDetails " + jsnClntFnaTabIdObj);
	  		
	  		retval.put(jsnClntFnaTabIdObj);
	  		return retval;
	  	}
	 
	 
	 
	 public JSONArray custDetsInsert(HttpServletRequest request) {
			
		 logger.info(" ------> Inside custDetsInsert ");
		 
		 
		 String strCustName=FipaUtils.getParamValue(request,"strCustName");
		 String strInitial=FipaUtils.getParamValue(request,"strCustInitial");
		 
		 String strAdvName=FipaUtils.getParamValue(request,"strAdvstfName");
		 String strAdvId=FipaUtils.getParamValue(request,"strAdvstfId");
		 
		 String strNric=FipaUtils.getParamValue(request,"strCustNric");
		 
		 String strAddress=FipaUtils.getParamValue(request,"strCustAddress");
		 String strPostal=FipaUtils.getParamValue(request,"strCustPostal");
		 
		 String strHandPh=FipaUtils.getParamValue(request,"strCustHandPh"); 
		 String strEmailId=FipaUtils.getParamValue(request,"strCustEmailId"); 
		 
		 
		 HttpSession session  = request.getSession(false);
		 Map<String,String> sessMap    = new HashMap<String,String>();
		 sessMap = (HashMap<String, String>)session.getAttribute(FipaConstant.LOGGED_USER_INFO);
		 String strCrtdUser = (String)sessMap.get(FipaConstant.LOGGED_USER_ID);
		 
	  		FPMSDataService fpmsServ = new FPMSDataService();
	  		ClientService cServ = new ClientService();
	  		List fnaElems = new ArrayList();
	  		 JSONArray retval=new JSONArray();

	  		JSONObject jsnClntFnaElemsObj = new JSONObject(); 
	  		JSONArray jsnClntFnaArr = new JSONArray();
	  		long elmCount = 0;
	  		try{

	  			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
				
				DBInterfaceFpmsImpl fpmsdao = (DBInterfaceFpmsImpl)appCtx.getBean(FipaConstant.FPMS_DBIMP_BEAN);
				DBInterfaceImpl fipadao = (DBInterfaceImpl)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
				
				String crtdDate = FipaDateUtils.convertDateToDateString(new Date());
				String strCustomerId=fpmsServ.getCustomerId(fpmsdao);
				
				StringBuffer sqlInsQry=new StringBuffer();
				sqlInsQry.append("INSERT INTO   CUSTOMER_DETAILS  "
						+ "(CUSTID,CUST_CATEG,CUST_NAME,EMAIL_ID,CUST_INITIALS,NRIC,CUST_STATUS,AGENT_ID_INITIAL,AGENT_ID_CURRENT,ADDRESS_PREF,CONTACT_PREF,RES_ADDR1,"
						+ "RES_POSTALCODE,RES_HAND_PHONE,REMARKS,CREATED_DATE,CREATED_BY,DISTRIBUTOR_ID,DISTRIBUTOR_NAME,CUSTOMER_STATUS_ID) VALUES ('"); 
				sqlInsQry.append(strCustomerId).append("','");
				sqlInsQry.append("PERSON").append("','").append(strCustName).append("','").append(strEmailId).append("','");
				sqlInsQry.append(strInitial).append("','").append(strNric).append("','").append("P-PROSPECT").append("','");
                sqlInsQry.append(strAdvId).append("','").append(strAdvId).append("','").append("R").append("','").append("R").append("','");
                sqlInsQry.append(strAddress).append("','").append(strPostal).append("','").append(strHandPh).append("','");
                sqlInsQry.append("Registered Through FIPA").append("' ,SYSDATE").append(",'").append(strCrtdUser).append("','");
                sqlInsQry.append("DIS000000001").append("','").append("Avallis Financial Pte Ltd").append("','").append("STA002").append("')");
				 
                fpmsServ.saveCustomerDets(fpmsdao,sqlInsQry.toString()); 
                
				cServ.updCustId(fipadao,strCustomerId,strNric); 
				jsnClntFnaElemsObj.put("EKYC_INSERTED",strCustomerId);
				
	  		}catch(Exception ex){
	  			logger.error("",ex); 
	  			jsnClntFnaElemsObj.put("ERROR",ex.getMessage());
	  		}
 
	  		
	  		retval.put(jsnClntFnaElemsObj); 
	  		return retval;
	  	}
	 
	 
	 public JSONArray retsumSearch(HttpServletRequest request){
			
			logger.info(" ------> Inside retsumSearch Method "); 
			
			JSONArray retValues = new JSONArray();
			
			JSONObject cpfretSumDataJsnObj = new JSONObject();
			JSONObject cpfretSumTabJsnObj =  new JSONObject();
			JSONArray cpfretSumDataJsnArr = new JSONArray();  
			List cpfretSumSearchList = new ArrayList();		
			MasterCpfService cpfPayoutServ=new MasterCpfService(); 

			
			try{
			
				ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext(); 
				DBInterfaceImpl dao = (DBInterfaceImpl)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
			
				
					StringBuffer strCpfBufQryParam = new StringBuffer();
			 

					String strselSrchRetYear= FipaUtils.getParamValue(request, "selSrchRetYear");
				
					strselSrchRetYear = java.net.URLDecoder.decode(strselSrchRetYear,"UTF-8");
					

					
				if(!FipaUtils.nullOrBlank(strselSrchRetYear)){
					strCpfBufQryParam.append(" AND cpf.brthYr  = '").append(strselSrchRetYear).append("'");
				 
				}
				
				cpfretSumSearchList = cpfPayoutServ.cpfRetSearch(dao,strCpfBufQryParam.toString());
				
				
				int cpfretSumrec = cpfretSumSearchList.size();
				if(cpfretSumrec>0){
					cpfretSumTabJsnObj.put("CPFRET_SEARCH", FipaUtils.getPropsJsonObject(cpfretSumSearchList,  MasterRetSchemeLimits.class));
					retValues.put(cpfretSumTabJsnObj);
					
				}
				else{
					
					cpfretSumTabJsnObj.put("CPFRET_SEARCH_NOREC", "");
					retValues.put(cpfretSumTabJsnObj);
				}
				
			}catch(Exception ex){
				logger.error("",ex);
				
			}
			
			return retValues;
			
		}
	 
	 
	 public JSONArray getCPFContribution(HttpServletRequest request){
		 logger.info(" ------> Inside getCPFContribution Method ");
		JSONArray retValues = new JSONArray();
		
		
		JSONObject nricTabJsnObj =  new JSONObject();
		JSONArray nricDataJsnArr = new JSONArray();
		
		List clientSearchList = new ArrayList();		
		ClientService serv=new ClientService(); 

		
		try{
		
			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
			
			DBInterfaceImpl dao = (DBInterfaceImpl)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
			
				 
			String strDOB = FipaUtils.getParamValue(request, "strdob");
			strDOB = java.net.URLDecoder.decode(strDOB,"UTF-8");
			strDOB= strDOB.replace("\'", "\''"); 
 
			String strMonthlywage = FipaUtils.getParamValue(request, "monthlywage");
			
			clientSearchList = serv.getCPFContribution(dao,strDOB,strMonthlywage);
			
				
				Iterator it = clientSearchList.iterator();
				
				String strContDets  = "";
				
				int sino=0;
				while(it.hasNext()){
					
					JSONObject nricDataJsnObj = new JSONObject();
					
					Object[] client = (Object[]) it.next();					
					
					nricDataJsnObj.put("cpfEmployeeContrib", FipaUtils.getObjValue(client[0]));
					nricDataJsnObj.put("cpfEmployerContrib", FipaUtils.getObjValue(client[1]));
					nricDataJsnObj.put("cpfMonthlyLimit", FipaUtils.getObjValue(client[2]));
					nricDataJsnObj.put("cpfAnnualLimit", FipaUtils.getObjValue(client[3]));
					nricDataJsnObj.put("cpfAddlAmt", FipaUtils.getObjValue(client[4])); 
						
					
					retValues.put(nricDataJsnObj);
						
				}
				
			
			 
			
			
		}catch(Exception ex){
			logger.error("",ex);
			
		}
		
		return retValues;
		
	}
//	 public JSONArray fnaLifePremAmt(HttpServletRequest request) {
	 public JSONObject fnaLifePremAmt(HttpServletRequest request,String[] strArrParam ) {
			
		 logger.info(" ------> Inside fnaLifePremAmt Method ");//strClientName
		 String strClientNRIC=FipaUtils.getParamValue(request,"strClientNRIC");//strClientNRIC
		 String strClientAdvId=FipaUtils.getParamValue(request,"strClientAdvId");
		 String strCustId = FipaUtils.getParamValue(request,"strCustId");//strCustId
		 String strFNAId = FipaUtils.getParamValue(request, "strFNAId");
		 
		 if(!FipaUtils.checkNullVal(strCustId)){
			 strClientNRIC = FipaUtils.nullOrBlank(strClientNRIC) ? strArrParam[0]: strClientNRIC;
			 strClientAdvId = FipaUtils.nullOrBlank(strClientAdvId) ? strArrParam[1]: strClientAdvId;
			 strCustId = FipaUtils.nullOrBlank(strCustId) ? strArrParam[2]: strCustId;
			 strFNAId = FipaUtils.nullOrBlank(strFNAId) ? strArrParam[3]: strFNAId;
	 		 	 
		 }
		 
	  		ClientService cServ = new ClientService();
	  		List allTabElem = new ArrayList();
	  		List fpmsTabElem = new ArrayList();
	  		List fipaTabElem = new ArrayList();
	  		 JSONArray retval=new JSONArray();

	  	
	  		JSONObject jsnClntFnaTabIdObj = new JSONObject();
	  		JSONArray jsnClntFnaArr = new JSONArray();
	  		long elmCount = 0;
	  		try{

	  			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
				
				DBInterfaceImpl dao = (DBInterfaceImpl)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
				DBInterfaceFpmsImpl fpmsdao = (DBInterfaceFpmsImpl)appCtx.getBean(FipaConstant.FPMS_DBIMP_BEAN);
	  			 
				allTabElem = cServ.searchPremAmtDetails(dao,fpmsdao, strFNAId,strClientAdvId,strCustId);
				fpmsTabElem = (List) allTabElem.get(0);
				fipaTabElem = (List) allTabElem.get(1);
	  			
	  			int fpmsSize = fpmsTabElem.size(); 
	  			int fipaSize = fipaTabElem.size();

	  			if (fpmsSize > 0) {
	  				
	  				Iterator it = fpmsTabElem.iterator();
						while(it.hasNext()){ 
							
							JSONObject jsnClntFnaElemsObj = new JSONObject();
							Object[] dataCols = (Object[]) it.next(); 
							jsnClntFnaElemsObj.put("jsonApplnName",FipaUtils.checkNullVal(dataCols[0])?FipaConstant.EMPTY_STRING:dataCols[0].toString());
							jsnClntFnaElemsObj.put("jsonLifeId", FipaUtils.checkNullVal(dataCols[1])?FipaConstant.EMPTY_STRING:dataCols[1].toString());
							jsnClntFnaElemsObj.put("jsonLifeOwner", FipaUtils.checkNullVal(dataCols[2])?FipaConstant.EMPTY_STRING:dataCols[2].toString());
							jsnClntFnaElemsObj.put("jsonLifePlanName", FipaUtils.checkNullVal(dataCols[3])?FipaConstant.EMPTY_STRING:dataCols[3].toString());
							jsnClntFnaElemsObj.put("jsonLifeIncDate",FipaUtils.checkNullVal(dataCols[4])?FipaConstant.EMPTY_STRING:dataCols[4].toString());
							jsnClntFnaElemsObj.put("jsonLifePayMode", FipaUtils.checkNullVal(dataCols[5])?FipaConstant.EMPTY_STRING:dataCols[5].toString());
							jsnClntFnaElemsObj.put("jsonLifePayMtd", FipaUtils.checkNullVal(dataCols[6])?FipaConstant.EMPTY_STRING:dataCols[6].toString());
							jsnClntFnaElemsObj.put("jsonLifePremAmt", FipaUtils.checkNullVal(dataCols[7])?FipaConstant.EMPTY_STRING:dataCols[7].toString());
							jsnClntFnaElemsObj.put("jsonLifePolDate", FipaUtils.checkNullVal(dataCols[8]) ? "" : dataCols[8].toString()  );
							jsnClntFnaElemsObj.put("jsonLifePlanTerm", FipaUtils.checkNullVal(dataCols[9])?FipaConstant.EMPTY_STRING:dataCols[9].toString());
							jsnClntFnaElemsObj.put("jsonLifePlanId", FipaUtils.checkNullVal(dataCols[10])?FipaConstant.EMPTY_STRING:dataCols[10].toString());
							jsnClntFnaElemsObj.put("jsonLifePlanStatus", FipaUtils.checkNullVal(dataCols[11])?FipaConstant.EMPTY_STRING:dataCols[11].toString());
							jsnClntFnaElemsObj.put("jsonLifePlanAgeFrom", FipaUtils.checkNullVal(dataCols[12])?FipaConstant.EMPTY_STRING:dataCols[12].toString());
							jsnClntFnaElemsObj.put("jsonLifePlanAgeTo", FipaUtils.checkNullVal(dataCols[13])?FipaConstant.EMPTY_STRING:dataCols[13].toString());
							jsnClntFnaElemsObj.put("jsonLifePlanPolNo", FipaUtils.checkNullVal(dataCols[14])?FipaConstant.EMPTY_STRING:dataCols[14].toString());
							jsnClntFnaElemsObj.put("jsonLifePlanRefId", FipaUtils.checkNullVal(dataCols[15])?FipaConstant.EMPTY_STRING:dataCols[15].toString());
							jsnClntFnaElemsObj.put("jsonLifePlanCashRefId", FipaUtils.checkNullVal(dataCols[16])?FipaConstant.EMPTY_STRING:dataCols[16].toString());
							jsnClntFnaArr.put(jsnClntFnaElemsObj);
						} 
						
	  			}
	  			

	  			if (fipaSize > 0) {
	  				
	  				Iterator it = fipaTabElem.iterator();
						while(it.hasNext()){ 
							JSONObject jsnClntFnaElemsObj = new JSONObject();
							Object[] dataCols = (Object[]) it.next(); 
							jsnClntFnaElemsObj.put("jsonApplnName",FipaUtils.checkNullVal(dataCols[0])?FipaConstant.EMPTY_STRING:dataCols[0].toString());
							jsnClntFnaElemsObj.put("jsonLifeId", FipaUtils.checkNullVal(dataCols[1])?FipaConstant.EMPTY_STRING:dataCols[1].toString());
							jsnClntFnaElemsObj.put("jsonLifeOwner", FipaUtils.checkNullVal(dataCols[2])?FipaConstant.EMPTY_STRING:dataCols[2].toString());
							jsnClntFnaElemsObj.put("jsonLifePlanName", FipaUtils.checkNullVal(dataCols[3])?FipaConstant.EMPTY_STRING:dataCols[3].toString());
							jsnClntFnaElemsObj.put("jsonLifeIncDate",FipaUtils.checkNullVal(dataCols[4])?FipaConstant.EMPTY_STRING:dataCols[4].toString());
							jsnClntFnaElemsObj.put("jsonLifePayMode", FipaUtils.checkNullVal(dataCols[5])?FipaConstant.EMPTY_STRING:dataCols[5].toString());
							jsnClntFnaElemsObj.put("jsonLifePayMtd", FipaUtils.checkNullVal(dataCols[6])?FipaConstant.EMPTY_STRING:dataCols[6].toString());
							jsnClntFnaElemsObj.put("jsonLifePremAmt", FipaUtils.checkNullVal(dataCols[7])?FipaConstant.EMPTY_STRING:dataCols[7].toString());
							jsnClntFnaElemsObj.put("jsonLifePolDate", FipaUtils.checkNullVal(dataCols[8]) ? "" : dataCols[8].toString()  );
							jsnClntFnaElemsObj.put("jsonLifePlanTerm", FipaUtils.checkNullVal(dataCols[9])?FipaConstant.EMPTY_STRING:dataCols[9].toString());
							jsnClntFnaElemsObj.put("jsonLifePlanId", FipaUtils.checkNullVal(dataCols[10])?FipaConstant.EMPTY_STRING:dataCols[10].toString());
							jsnClntFnaElemsObj.put("jsonLifePlanStatus", FipaUtils.checkNullVal(dataCols[11])?FipaConstant.EMPTY_STRING:dataCols[11].toString());
							jsnClntFnaElemsObj.put("jsonLifePlanAgeFrom", FipaUtils.checkNullVal(dataCols[12])?FipaConstant.EMPTY_STRING:dataCols[12].toString());
							jsnClntFnaElemsObj.put("jsonLifePlanAgeTo", FipaUtils.checkNullVal(dataCols[13])?FipaConstant.EMPTY_STRING:dataCols[13].toString());
							jsnClntFnaElemsObj.put("jsonLifePlanPolNo", FipaUtils.checkNullVal(dataCols[14])?FipaConstant.EMPTY_STRING:dataCols[14].toString());
							jsnClntFnaElemsObj.put("jsonLifePlanRefId", FipaUtils.checkNullVal(dataCols[15])?FipaConstant.EMPTY_STRING:dataCols[15].toString());
							jsnClntFnaElemsObj.put("jsonLifePlanCashRefId", FipaUtils.checkNullVal(dataCols[16])?FipaConstant.EMPTY_STRING:dataCols[16].toString());
							
							jsnClntFnaArr.put(jsnClntFnaElemsObj);
						} 
						
	  			}
	  			
	  			
//	  			
//	  			if(jsnClntFnaArr.size() == 0){
//	  				jsnClntFnaTabIdObj.put("CLNT_LIFEPREM_AMT", jsnClntFnaArr);
//	  			} else{
	  				jsnClntFnaTabIdObj.put("CLNT_LIFEPREM_AMT", jsnClntFnaArr);
//	  			}
	  			
 
	  		}catch(Exception ex){
	  			logger.error("",ex); 
	  		}
  
//	  		retval.put(jsnClntFnaTabIdObj); 
	  		logger.info("fnaLifePremAmt jsnClntFnaTabIdObj -->"+jsnClntFnaTabIdObj);
	  		return jsnClntFnaTabIdObj;
	  	}
	 
	 
	 /**/
	 

	 public JSONArray getFPMSProductPlanName(HttpServletRequest request){
			
			logger.info(" ------> Inside getRecomProductName Method "); 
			
			JSONArray retValues = new JSONArray();
			
			
			JSONObject cpfTabJsnObj =  new JSONObject();
			JSONArray cpfDataJsnArr = new JSONArray();
			
			List cpfSearchList = new ArrayList();		
			FPMSDataService cpfServ=new FPMSDataService(); 

			
			try{
			
				ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
				
				DBInterfaceFpmsImpl fpmsdao = (DBInterfaceFpmsImpl)appCtx.getBean(FipaConstant.FPMS_DBIMP_BEAN);
				  
				 
				String strInsurerName = FipaUtils.getParamValue(request, "strInsurerName");
				strInsurerName = java.net.URLDecoder.decode(strInsurerName,"UTF-8");
				 
//				String strProdType = FipaUtils.getParamValue(request, "strProdType");
//				strProdType = java.net.URLDecoder.decode(strProdType,"UTF-8");
				
				StringBuffer strCpfBufQryParam = new StringBuffer();
			 
				
				if(!FipaUtils.nullOrBlank(strInsurerName)){
					strCpfBufQryParam.append(" and prdt.PRIN_ID = '").append(strInsurerName).append("'");
				}
				
//				if(!FipaUtils.nullOrBlank(strProdType)){
//					strCpfBufQryParam.append(" and prdt.PROD_TYPE = '").append(strProdType).append("'");
//				}
				
				cpfSearchList = cpfServ.PrdtSearch(fpmsdao,strCpfBufQryParam.toString());

				if(cpfSearchList.size() > 0){
					
					Iterator it = cpfSearchList.iterator();
					
					String strContDets  = "";
					int jsonSize=0;
					
					int sino=0;
					while(it.hasNext()){
						
						JSONObject cpfDataJsnObj = new JSONObject();
						
						Object[] client = (Object[]) it.next();					
						 
							cpfDataJsnObj.put("txtfldProdPlanName",FipaUtils.getObjValue(client[0]));	
							cpfDataJsnObj.put("txtfldProdPlanCode",FipaUtils.getObjValue(client[1]));	
							cpfDataJsnObj.put("txtfldProdProdType",FipaUtils.getObjValue(client[2]));	
							cpfDataJsnArr.put(cpfDataJsnObj);
							
							jsonSize = cpfDataJsnArr.length(); 
					}
				}
				else{
					
					cpfTabJsnObj.put("NOREC", "");
					
				}
				
				cpfTabJsnObj.put("FPMS_PLANS", cpfDataJsnArr);
		
				retValues.put(cpfTabJsnObj);
				
				
			}catch(Exception ex){
				logger.error("",ex);
				
			}
			
			return retValues;
			
		}
	 
	 
	 
	 public JSONArray fpmsClntDetsInsert(HttpServletRequest request) {
			
		 logger.info(" ------> Inside fpmsClntDetsInsert ");
		 String strCustId=FipaUtils.getParamValue(request,"strcustid");		 
		 String strCustName=FipaUtils.getParamValue(request,"strCustName");		 
		 String strInitial=FipaUtils.getParamValue(request,"strCustInitial");
		
		 
		 String strAdName=FipaUtils.getParamValue(request,"strAdName");

		 
		 String strAdId=FipaUtils.getParamValue(request,"strAdId");
	
		 
		 String strNric=FipaUtils.getParamValue(request,"strCustNric");
		
		 
		 String strMarSts=FipaUtils.getParamValue(request,"strCustMarSts");

		 
		 String strAddress=FipaUtils.getParamValue(request,"strCustAddress");
		 String strAddress2=FipaUtils.getParamValue(request,"strCustAddress2");
		 String strPostal=FipaUtils.getParamValue(request,"strCustPostal");
		 String strCountry=FipaUtils.getParamValue(request,"strCustCountry");
		 
		 String strHandPh=FipaUtils.getParamValue(request,"strCustHandPh"); 
		
		 
		 String strEmailId=FipaUtils.getParamValue(request,"strCustEmailId"); 
		
		 
		 HttpSession session  = request.getSession(false);
		 Map<String,String> sessMap    = new HashMap<String,String>();
		 sessMap = (HashMap<String, String>)session.getAttribute(FipaConstant.LOGGED_USER_INFO);
		 String strCrtdUser = (String)sessMap.get(FipaConstant.LOGGED_USER_ID);
		 
		 FPMSDataService fpmsServ = new FPMSDataService();
	  		ClientService cServ = new ClientService();
	  		List fnaElems = new ArrayList();
	  		 JSONArray retval=new JSONArray();

	  		JSONObject jsnClntFnaElemsObj = new JSONObject(); 
	  		JSONArray jsnClntFnaArr = new JSONArray();
	  		long elmCount = 0;
	  		try{

	  			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
				
	  			DBInterfaceFpmsImpl fpmsdao = (DBInterfaceFpmsImpl)appCtx.getBean(FipaConstant.FPMS_DBIMP_BEAN);
				DBInterfaceImpl fipadao = (DBInterfaceImpl)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
				String crtdDate = FipaDateUtils.convertDateToDateString(new Date());
				String strCustomerId=fpmsServ.getCustomerId(fpmsdao);
				
				StringBuffer sqlInsQry=new StringBuffer();
				    Date today;
				    today = new Date();
				    SimpleDateFormat DATE_FORMAT = new SimpleDateFormat("dd-MMM-yyyy");
			        String date = DATE_FORMAT.format(today);
			       
			if(strCustId == "") {
				
//				String strCustomerIds1;
//				String strCustomerIds2;
				
				
//				strCustomerIds1 = strCustomerId.substring(4, 20);
//				strCustomerIds2 = strCustomerId.substring(0, 4);
//				int strId = Integer.parseInt(strCustomerIds1);
//				int Count=strId+1;
//				String numberAsString = Integer.toString(Count);
//				String strCustIdConcat=strCustomerIds2+"00000000000"+numberAsString;
				
				
				sqlInsQry.append("INSERT INTO CUSTOMER_DETAILS  "
						+ "(CUSTID,CUST_CATEG,"
						+ "CUST_NAME,EMAIL_ID,CUST_INITIALS,NRIC,CUST_STATUS,AGENT_ID_INITIAL,AGENT_ID_CURRENT,"
						+ "ADDRESS_PREF,CONTACT_PREF,RES_ADDR1,RES_ADDR2,RES_POSTALCODE,RES_COUNTRY,MARITAL_STATUS,RES_HAND_PHONE,"
						+ "REMARKS,CREATED_DATE,CREATED_BY,DISTRIBUTOR_ID,DISTRIBUTOR_NAME,CUSTOMER_STATUS_ID) "
						+ "VALUES ('")
						; 
				sqlInsQry.append(strCustomerId).append("','");
				sqlInsQry.append("PERSON").append("','").append(strCustName).append("','").append(strEmailId).append("','")
				.append(strInitial).append("','").append(strNric).append("','");
				sqlInsQry.append("P-PROSPECT").append("','").append(strAdId).append("','").append(strAdId).append("','").append("R").append("','").append("R").
				append("','");
				sqlInsQry.append(strAddress).append("','").append(strAddress2).append("','").append(strPostal).append("','").append(strCountry).append("','").append(strMarSts).append("','");
				/*sqlInsQry.append(strPostal).append("','");*/
                sqlInsQry.append(strHandPh).append("','").append("Registered Through FIPA").append("','");
                sqlInsQry.append(date).append("','").append(strCrtdUser).append("','");
                sqlInsQry.append("DIS000000001").append("','").append("Avallis Financial Pte Ltd").append("','").append("STA002").append("')");
				
                
                
                logger.info("sqlInsQry----"+sqlInsQry);
        		fpmsServ.saveCustomerDets(fpmsdao,sqlInsQry.toString());  
        		/*cServ.updCustId(dao,strCustomerId,strNric); */
        		jsnClntFnaElemsObj.put("FPMSFIPA_INSERTED",strCustomerId);
			}
			else {	
				
				String SQL_UPDATE_CUSTID_FPMS="UPDATE CUSTOMER_DETAILS SET "
//						+ "CUST_CATEG='PERSON', "
						+ "CUST_NAME='"+strCustName+"',"
						+ "EMAIL_ID='"+strEmailId+"',"
//						+ "CUST_INITIALS='"+strInitial+"' ,"
						+ "NRIC='"+strNric+"', "
//						+ "CUST_STATUS='P-PROSPECT' ,"
//						+ "AGENT_ID_INITIAL='"+strAdId+"' ,"
//						+ "AGENT_ID_CURRENT='"+strAdId+"' ,"
//						+ "ADDRESS_PREF='R', "
//						+ "CONTACT_PREF='R', "
						+ "RES_ADDR1='"+strAddress+"', "
						+ "RES_ADDR2='"+strAddress2+"', "
						+ "RES_POSTALCODE='"+strPostal+"', "
						+ "RES_COUNTRY='"+strCountry+"', "
//						+ "MARITAL_STATUS='"+strMarSts+"', "
						+ "RES_HAND_PHONE='"+strHandPh+"' ,"
//						+ "REMARKS='Updated FPMS' ,"
						+ "CREATED_DATE=SYSDATE ,"
						+ "MODIFIED_BY='"+strCrtdUser+"'"
//						+ "DISTRIBUTOR_ID='DIS000000001', "
//						+ "DISTRIBUTOR_NAME='Avallis Financial Pte Ltd', "
//						+ "CUSTOMER_STATUS_ID='STA004' "
						+ " WHERE CUSTID='"+strCustId+"' " ; 
		
		
					
		 logger.info("SQL_UPDATE_CUSTID_FPMS----"+SQL_UPDATE_CUSTID_FPMS);
		fpmsServ.saveFPMSDets(fpmsdao,SQL_UPDATE_CUSTID_FPMS);  
		/*cServ.updCustId(dao,strCustomerId,strNric); */
		jsnClntFnaElemsObj.put("FPMSFIPA_UPDATED",strCustomerId);
				
			}
				
				
	  		}catch(Exception ex){
	  			logger.error("Error --->",ex); 
	  			jsnClntFnaElemsObj.put("ERROR",ex.getMessage());
	  		}
 
	  		
	  		retval.put(jsnClntFnaElemsObj); 
	  		return retval;
	  	}
	 /**/
	 
	 
	 public JSONArray getCPFProjectionList(HttpServletRequest request){
		 logger.info(" ------> Inside getCPFProjectionList Method ");
		JSONArray retValues = new JSONArray();
		
		
		JSONObject nricTabJsnObj =  new JSONObject();
		JSONArray nricDataJsnArr = new JSONArray();
		
		List clientSearchList = new ArrayList();		
		ClientService serv=new ClientService(); 

		
		try{
		
			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
			
			DBInterfaceImpl dao = (DBInterfaceImpl)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
			
				 
			String strFnaId = FipaUtils.getParamValue(request, "strFnaId");			
			clientSearchList = serv.getCPFProjectionList(dao,strFnaId);
			
			Iterator it = clientSearchList.iterator();
				
			String strContDets  = "";
				
			int sino=0;
			while(it.hasNext()){
				
					JSONObject jsnCPFProjDataObj = new JSONObject();
					
					Object[] client = (Object[]) it.next();					
					
					jsnCPFProjDataObj.put("FNA_ID", FipaUtils.getObjValue(client[0]));
					jsnCPFProjDataObj.put("SELF_AGE", FipaUtils.nullObj(client[1]) ? "" : (client[1]) );
					jsnCPFProjDataObj.put("SELF_RETIRE_AGE", FipaUtils.getObjValue(client[2]));
					jsnCPFProjDataObj.put("SELF_OW", FipaUtils.getObjValue(client[3]));
					jsnCPFProjDataObj.put("SELF_AW", FipaUtils.getObjValue(client[4])); 
					jsnCPFProjDataObj.put("SELF_OA_BAL", FipaUtils.getObjValue(client[5])); 
					jsnCPFProjDataObj.put("SELF_OA_ANNLCONTRIB", FipaUtils.getObjValue(client[6])); 
					jsnCPFProjDataObj.put("SELF_OA_ADDITION", FipaUtils.getObjValue(client[7])); 
					jsnCPFProjDataObj.put("SELF_OA_DEDUCTION", FipaUtils.getObjValue(client[8])); 
					jsnCPFProjDataObj.put("SELF_OA_ENDBAL_INIT", FipaUtils.getObjValue(client[9])); 
					
					
					jsnCPFProjDataObj.put("SELF_OA_EXT_ADDL_PARK", FipaUtils.getObjValue(client[10]));
					jsnCPFProjDataObj.put("SELF_OA_ADDL_PARK", FipaUtils.getObjValue(client[11]));
					jsnCPFProjDataObj.put("SELF_OA_EXT_ADDLP_AMT", FipaUtils.getObjValue(client[12]));
					jsnCPFProjDataObj.put("SELF_OA_ADDLP_AMT", FipaUtils.getObjValue(client[3]));
					jsnCPFProjDataObj.put("SELF_OA_BASEP_AMT", FipaUtils.getObjValue(client[14])); 
					jsnCPFProjDataObj.put("SELF_OA_ENDBAL", FipaUtils.getObjValue(client[15])); 
					jsnCPFProjDataObj.put("SELF_SA_BAL", FipaUtils.getObjValue(client[16])); 
					jsnCPFProjDataObj.put("SELF_SA_ANNLCONTRIB", FipaUtils.getObjValue(client[7])); 
					jsnCPFProjDataObj.put("SELF_SA_ADDITION", FipaUtils.getObjValue(client[18])); 
					jsnCPFProjDataObj.put("SELF_SA_DEDUCTION", FipaUtils.getObjValue(client[19])); 
					
					jsnCPFProjDataObj.put("SELF_SA_ENDBAL_INIT", FipaUtils.getObjValue(client[20]));
					jsnCPFProjDataObj.put("SELF_SA_EXT_ADDL_PARK", FipaUtils.getObjValue(client[21]));
					jsnCPFProjDataObj.put("SELF_SA_ADDL_PARK", FipaUtils.getObjValue(client[22]));
					jsnCPFProjDataObj.put("SELF_SA_EXT_ADDLP_AMT", FipaUtils.getObjValue(client[23]));
					jsnCPFProjDataObj.put("SELF_SA_ADDLP_AMT", FipaUtils.getObjValue(client[24])); 
					jsnCPFProjDataObj.put("SELF_SA_BASEP_AMT", FipaUtils.getObjValue(client[25])); 
					jsnCPFProjDataObj.put("SELF_SA_ENDBAL", FipaUtils.getObjValue(client[26])); 
					jsnCPFProjDataObj.put("SELF_SA_EXCESS_FROM_MA", FipaUtils.getObjValue(client[27])); 
					jsnCPFProjDataObj.put("SELF_MA_BAL", FipaUtils.getObjValue(client[28])); 
					jsnCPFProjDataObj.put("SELF_MA_ANNLCONTRIB", FipaUtils.getObjValue(client[29])); 
					
					jsnCPFProjDataObj.put("SELF_MA_ADDITION", FipaUtils.getObjValue(client[30]));
					jsnCPFProjDataObj.put("SELF_MA_DEDUCTION", FipaUtils.getObjValue(client[31]));
					jsnCPFProjDataObj.put("SELF_MA_ENDBAL_INIT", FipaUtils.getObjValue(client[32]));
					jsnCPFProjDataObj.put("SELF_MA_EXCESS_AMT_BI", FipaUtils.getObjValue(client[33]));
					jsnCPFProjDataObj.put("SELF_MA_EXT_ADDL_PARK", FipaUtils.getObjValue(client[34]));
					jsnCPFProjDataObj.put("SELF_MA_ADDL_PARK", FipaUtils.getObjValue(client[35])); 
					jsnCPFProjDataObj.put("SELF_MA_EXT_ADDLP_AMT", FipaUtils.getObjValue(client[36])); 
					jsnCPFProjDataObj.put("SELF_MA_ADDLP_AMT", FipaUtils.getObjValue(client[37])); 
					jsnCPFProjDataObj.put("SELF_MA_BASEP_AMT", FipaUtils.getObjValue(client[38])); 
					jsnCPFProjDataObj.put("SELF_MA_ENDBAL", FipaUtils.getObjValue(client[39])); 
					jsnCPFProjDataObj.put("SELF_MA_EXCESS_AMT_AI", FipaUtils.getObjValue(client[40])); 
					
					jsnCPFProjDataObj.put("SELF_RA_BAL", FipaUtils.getObjValue(client[41]));
					jsnCPFProjDataObj.put("SELF_RA_FROM_SA", FipaUtils.getObjValue(client[42]));
					jsnCPFProjDataObj.put("SELF_RA_FROM_MA", FipaUtils.getObjValue(client[43]));
					jsnCPFProjDataObj.put("SELF_RA_ADDITION", FipaUtils.getObjValue(client[44]));
					jsnCPFProjDataObj.put("SELF_RA_DEDUCTION", FipaUtils.getObjValue(client[45])); 
					jsnCPFProjDataObj.put("SELF_RA_ENDBAL_INIT", FipaUtils.getObjValue(client[46])); 
					jsnCPFProjDataObj.put("SELF_RA_ADDLP1_BAL", FipaUtils.getObjValue(client[47])); 
					jsnCPFProjDataObj.put("SELF_RA_ADDLP2_BAL", FipaUtils.getObjValue(client[48])); 
					jsnCPFProjDataObj.put("SELF_RA_BASEP_AMT", FipaUtils.getObjValue(client[48])); 
					jsnCPFProjDataObj.put("SELF_RA_ENDBAL", FipaUtils.getObjValue(client[50])); 
					
					jsnCPFProjDataObj.put("SELF_RA_EXCESS_RA_MA_AI", FipaUtils.getObjValue(client[50]));
					jsnCPFProjDataObj.put("SELF_OA_ALLOC", FipaUtils.getObjValue(client[52]));
					jsnCPFProjDataObj.put("SELF_OA_PRCNT", FipaUtils.getObjValue(client[53]));
					jsnCPFProjDataObj.put("SELF_SA_ALLOC", FipaUtils.getObjValue(client[54]));
					jsnCPFProjDataObj.put("SELF_SA_PRCNT", FipaUtils.getObjValue(client[55])); 
					jsnCPFProjDataObj.put("SELF_MA_ALLOC", FipaUtils.getObjValue(client[56])); 
					jsnCPFProjDataObj.put("SELF_MA_PRCNT", FipaUtils.getObjValue(client[57])); 
					jsnCPFProjDataObj.put("SELF_RA_ALLOC", FipaUtils.getObjValue(client[58])); 
					jsnCPFProjDataObj.put("SELF_RA_PRCNT", FipaUtils.getObjValue(client[59])); 
					jsnCPFProjDataObj.put("SELF_SA_FLOW_TO_RA", FipaUtils.getObjValue(client[60])); 
					
					jsnCPFProjDataObj.put("SELF_RA_TOT_ADDITION", FipaUtils.getObjValue(client[61]));
					jsnCPFProjDataObj.put("SELF_RA_TOT_DEDUCTION", FipaUtils.getObjValue(client[62]));
					jsnCPFProjDataObj.put("SELF_SA_ANY_EXCESS", FipaUtils.getObjValue(client[63]));
					jsnCPFProjDataObj.put("SELF_SA_ANY_LACKING", FipaUtils.getObjValue(client[64]));
					jsnCPFProjDataObj.put("SELF_SA_ENDBAL_RET", FipaUtils.getObjValue(client[65])); 
					jsnCPFProjDataObj.put("SELF_OA_ANY_EXCESS", FipaUtils.getObjValue(client[66])); 
					jsnCPFProjDataObj.put("SELF_OA_ANY_LACKING", FipaUtils.getObjValue(client[67])); 
					jsnCPFProjDataObj.put("SELF_OA_ENDBAL_RET", FipaUtils.getObjValue(client[68])); 
					
					retValues.put(jsnCPFProjDataObj);
						
			}
				
			

			
			
		}catch(Exception ex){
			logger.error("",ex);
			
		}
		
		return retValues;
		
	}
	 
	 public JSONArray getSRSProjectionList(HttpServletRequest request){
		 logger.info(" ------> Inside getSRSProjectionList Method ");
		JSONArray retValues = new JSONArray();
		
		
		JSONObject nricTabJsnObj =  new JSONObject();
		JSONArray nricDataJsnArr = new JSONArray();
		
		List clientSearchList = new ArrayList();		
		ClientService serv=new ClientService(); 

		
		try{
		
			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
			
			DBInterfaceImpl dao = (DBInterfaceImpl)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
			
				 
			String strFnaId = FipaUtils.getParamValue(request, "strFnaId");			
			clientSearchList = serv.getSRSProjectionList(dao,strFnaId);
			Iterator it = clientSearchList.iterator();
				
			String strContDets  = "";
				
			int sino=0;
			while(it.hasNext()){
				
					JSONObject jsnCPFProjDataObj = new JSONObject();
					
					Object[] client = (Object[]) it.next();					
					
					jsnCPFProjDataObj.put("FNA_ID", FipaUtils.getObjValue(client[0]));
					jsnCPFProjDataObj.put("SELF_DOB", FipaUtils.nullObj(client[1]) ? "" : (client[1]) );
					jsnCPFProjDataObj.put("SELF_AGE", FipaUtils.getObjValue(client[2]));
					jsnCPFProjDataObj.put("SRS_OPEN_BAL", FipaUtils.getObjValue(client[3]));
					jsnCPFProjDataObj.put("SRS_ANNL_ADD", FipaUtils.getObjValue(client[4])); 
					jsnCPFProjDataObj.put("SRS_ANNL_WITHDRAW", FipaUtils.getObjValue(client[5])); 
					jsnCPFProjDataObj.put("SRS_CLOSING_BAL", FipaUtils.getObjValue(client[6])); 
					
					retValues.put(jsnCPFProjDataObj);
					
						
			}
				
		      JSONArray sortedJsonArray = new JSONArray();
		      List list = new ArrayList();
		      for(int i = 0; i < retValues.length(); i++) {
		         list.add(retValues.getJSONObject(i));
		      }
		      
		      
		      Collections.sort(list, new Comparator() {
		          private static final String KEY_NAME = "SELF_AGE";

		          public int compare(Object o1, Object o2) {
					 String str1 = new String();
		             String str2 = new String();
		             
		             JSONObject a = (JSONObject)o1;
		             JSONObject b = (JSONObject) o2;
		             
		             try {
		                str1 = (String)a.get(KEY_NAME);
		                str2 = (String)b.get(KEY_NAME);
		             } catch(Exception e) {
		                e.printStackTrace();
		             }
		             return str2.compareTo(str1);
				}
		       });
		      
		      for(int i = 0; i < retValues.length(); i++) {
		    	  JSONObject payoutData = (JSONObject)list.get(i);
		    	  String strVal = payoutData.get("SRS_ANNL_WITHDRAW").toString();
		    	  strVal = strVal.isEmpty() ? "0" :strVal;
		    	  Double withdrawamount = Double.parseDouble(strVal);
		    	  if(withdrawamount>0){
		    		  sortedJsonArray.put(list.get(i));
		    		  break;
		    	  }
		         
		       }
		      
			retValues = sortedJsonArray;
			
			
			
		}catch(Exception ex){
			logger.error("",ex);
			
		}
		
		return retValues;
		
	}
	 
	 
	 private JSONArray getFPMSPolicy(HttpServletRequest request) {
			// TODO Auto-generated method stub
			JSONArray retValues = new JSONArray();
			
			
			
			//calendar Elm Events
			JSONArray jsoncalElArrList = new JSONArray();
			
			JSONObject jsoncalElRslObj = new JSONObject(); 
			
			List calElServList = new ArrayList(); 
			
			FPMSDataService  calElServ = new FPMSDataService();
			 
			try{ 
				ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
				DBInterfaceFpmsImpl fpmsdao = (DBInterfaceFpmsImpl)appCtx.getBean(FipaConstant.FPMS_DBIMP_BEAN);
				 
				 String strAdviserID = FipaUtils.getParamValue(request,"strAdviserID"); 
				 String strCustID= FipaUtils.getParamValue(request,"strCustID"); 
				
				 StringBuffer strBufQryParamFPMS = new StringBuffer();			  
					
					if(!FipaUtils.nullOrBlank(strAdviserID)){
						strBufQryParamFPMS.append(" AND UPPER(ADVSTF.ADVSTF_ID) = '").append(strAdviserID.toUpperCase()).append("'");
						
					} 
					
					if(!FipaUtils.nullOrBlank(strCustID)){
						strBufQryParamFPMS.append(" AND UPPER(CUST_DETS.CUSTID) = '").append(strCustID.toUpperCase()).append("'");
						
					}
					
					 
			//FPMS
			if(!FipaUtils.nullOrBlank(strCustID)){
				calElServList = calElServ.getFPMSLifeInsuracePolDets(fpmsdao,"","",strCustID,""); 
			}
			if(calElServList.size() > 0)
			{ 
				Iterator it = calElServList.iterator(); 
				
				while(it.hasNext()){ 
					JSONObject jsoncalElObj = new JSONObject();
					Object[] objs = (Object[]) it.next();
					
//					String StartDate	=	FipaUtils.nullObj(objs[8]) ? "" : objs[8].toString().substring(0,10);
//					String EndDate		=	FipaUtils.nullObj(objs[9]) ? "" : objs[9].toString().substring(0,10);
					 
					jsoncalElObj.put("AppName",			FipaUtils.checkNullVal(objs[0]) ? "" : objs[0].toString());
					jsoncalElObj.put("AdviserName",		"");
					jsoncalElObj.put("AdviserId",		"");
					jsoncalElObj.put("CustomerName",	FipaUtils.checkNullVal(objs[2]) ? "" : objs[2].toString());
					jsoncalElObj.put("CustomerNRIC",	"");
					jsoncalElObj.put("PlanName",		FipaUtils.checkNullVal(objs[4]) ? "" : objs[4].toString());
					jsoncalElObj.put("PolicyNo",		FipaUtils.checkNullVal(objs[5]) ? "" : objs[5].toString());
					jsoncalElObj.put("PrincipalName",	FipaUtils.checkNullVal(objs[6]) ? "" : objs[6].toString());
					jsoncalElObj.put("EffectiveDate",	FipaUtils.checkNullVal(objs[23]) ? "" : objs[23].toString());
					jsoncalElObj.put("RenewalDate",		FipaUtils.checkNullVal(objs[13]) ? "" : objs[13].toString());
					jsoncalElObj.put("PolicyStatus",	FipaUtils.checkNullVal(objs[10]) ? "" : objs[10].toString()); 
					jsoncalElObj.put("CustomerProposed",FipaUtils.checkNullVal(objs[20]) ? "" : objs[20].toString()); 
					jsoncalElObj.put("CustomerAssured",	FipaUtils.checkNullVal(objs[21]) ? "" : objs[21].toString()); 
					
					jsoncalElArrList.put(jsoncalElObj);  
					
					
				  } 
				jsoncalElRslObj.put("FPMS_POLICY_RENEWALS", jsoncalElArrList);
			}else{
				
				jsoncalElRslObj.put("NO_POLICY", FipaConstant.GLBL_NO_RECORD); 
		   
			
			}//end of if else
			
			
			
			
			
			
			retValues.put(jsoncalElRslObj);
			

			
			}catch(Exception ex){
				logger.error("",ex);
			}
			
		    return retValues;
		}
	 
}
