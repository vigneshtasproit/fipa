package com.fipa.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Vector;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

//import net.sf.json.JSONArray;
//import net.sf.json.JSONObject;



import org.json.JSONArray;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;

import com.fipa.controller.ClientController;
import com.fipa.db.ClientDB;
import com.fipa.dbinterface.DBInterfaceFpmsImpl;
import com.fipa.dbinterface.DBInterfaceImpl;
import com.fipa.dto.FnaAdvDeclare;
import com.fipa.dto.FnaAssetCashdets;
import com.fipa.dto.FnaAssetOtherdets;
import com.fipa.dto.FnaContingencyDets;
import com.fipa.dto.FnaCurassDets;
import com.fipa.dto.FnaExpenditureDets;
import com.fipa.dto.FnaFinLiability;
import com.fipa.dto.FnaLifeinsuranceDets;
import com.fipa.dto.FnaPersprio;
import com.fipa.dto.FnaRetireplanDets;
import com.fipa.dto.FnaSelfspouseDets;
import com.fipa.dto.FnaSrcofincome;
import com.fipa.dto.FnaSummaryAnalysis;
import com.fipa.service.ClientService;
import com.fipa.util.ApplicationContextUtils;
import com.fipa.util.FipaConstant;
import com.fipa.util.FipaDateUtils;
import com.fipa.util.FipaUtils;

/**
 * Servlet implementation class InstantProcessServlet
 */
 
public class InstantProServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	final Logger logger = LoggerFactory.getLogger(InstantProServlet.class);
    /**
     * @see HttpServlet#HttpServlet()
     */
    public InstantProServlet() {
        super();
        // TODO Auto-generated constructor stub
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
		
		/*System.out.println("strDBCallFor-------------------"+strDBCallFor);*/
		/*Form Request*/
		if(strDBCallFor.equalsIgnoreCase("FPMSCLIENT_INSTANT_SAVE")){
			retval = saveInstantFpmsClient(request);
		}
		if(strDBCallFor.equalsIgnoreCase("SRCOFINCOME_INSTANT_SAVE")){
			retval = saveInstantSrcOfInc(request);
		}
		if(strDBCallFor.equalsIgnoreCase("EXPENDITURE_INSTANT_SAVE")){
			retval = saveInstantExpend(request);
		} 
		if(strDBCallFor.equalsIgnoreCase("CONTINGENCY_INSTANT_SAVE")){
			retval = saveInstantConting(request);
		}
		if(strDBCallFor.equalsIgnoreCase("RETIREPLAN_INSTANT_SAVE")){
			retval = saveInstantRetirplg(request);
		}
		if(strDBCallFor.equalsIgnoreCase("CASHASSET_INSTANT_SAVE")){
			retval = saveInstantCashAsst(request);
		}
		if(strDBCallFor.equalsIgnoreCase("OTHERASSET_INSTANT_SAVE")){
			retval = saveInstantOtherAsst(request);
		}
		if(strDBCallFor.equalsIgnoreCase("ESTATEPLAN_INSTANT_SAVE")){
			retval = saveInstantEstPln(request);
		}
		if(strDBCallFor.equalsIgnoreCase("LIABILITY_INSTANT_SAVE")){
			retval = saveInstantLiability(request);
		}
		if(strDBCallFor.equalsIgnoreCase("CURASS_INSTANT_SAVE")){
			retval = saveInstantCurAss(request);
		}
		if(strDBCallFor.equalsIgnoreCase("EMPCONTRB_INSTANT_SAVE")){
			retval = saveInstantEmpContrb(request);
		}
		if(strDBCallFor.equalsIgnoreCase("SUMMARY_INSTANT_SAVE")){
			retval = saveInstantSummary(request);
		}
		if(strDBCallFor.equalsIgnoreCase("HEALTH_INSTANT_SAVE")){
			retval = saveInstantHealth(request);
		}
		
		
		
		
		if(strDBCallFor.equalsIgnoreCase("NEW_LIFE_INSTANT_SAVE")){ 
			/*System.out.println("=========NEW_LIFE_INSTANT_SAVE================");*/
			retval = saveInstantNewLife(request);
		}
		/*Dhtml Request*/
		if(strDBCallFor.equalsIgnoreCase("CHILD_INSTANT_SAVE")){
			retval = saveInstantChild(request);
		}
		
		if(strDBCallFor.equalsIgnoreCase("FIN_GOALS_INSTANT_SAVE")){
			retval = saveInstantFinGls(request);
		}
		
		if(strDBCallFor.equalsIgnoreCase("WLTH_GOALS_INSTANT_SAVE")){
			retval = saveInstantWlthGls(request);
		}
		
		if(strDBCallFor.equalsIgnoreCase("DEPNT_INSTANT_SAVE")){
			retval = saveInstantDeptnt(request);
		}
		
		if(strDBCallFor.equalsIgnoreCase("CPFADD_INSTANT_SAVE")){
			retval = saveInstantCpfAddDedt(request);
		}
		
		if(strDBCallFor.equalsIgnoreCase("AROFCON_INSTANT_SAVE")){
			retval = saveInstantArOfCon(request);
		}
		
		if(strDBCallFor.equalsIgnoreCase("PERSASST_INSTANT_SAVE")){
			retval = saveInstantPersAsset(request);
		}
		if(strDBCallFor.equalsIgnoreCase("BUSIASST_INSTANT_SAVE")){
			retval = saveInstantBuisAsset(request);
		}
		
		if(strDBCallFor.equalsIgnoreCase("VEHOWN_INSTANT_SAVE")){
			retval = saveInstantVehOwner(request);
		}
		
		if(strDBCallFor.equalsIgnoreCase("COB_INSTANT_SAVE")){
			retval = saveInstantCob(request);
		}
		
		if(strDBCallFor.equalsIgnoreCase("CASHSRS_INSTANT_SAVE")){
			retval = saveInstantSrs(request);
		}
		
		if(strDBCallFor.equalsIgnoreCase("CPFTRANSFER_INSTANT_SAVE")){
			retval = saveInstantCpfTransfer(request);
		}
		 
		if(strDBCallFor.equalsIgnoreCase("OTHERINC_INSTANT_SAVE")){
			retval = saveInstantRetOthInc(request);
		} 
		if(strDBCallFor.equalsIgnoreCase("RETINCREV_INSTANT_SAVE")){
			retval = saveInstantRetIncRec(request);
		}
		if(strDBCallFor.equalsIgnoreCase("RETINCASSREV_INSTANT_SAVE")){
			retval = saveInstantRetIncAss(request);
		}
		
		if(strDBCallFor.equalsIgnoreCase("INVEST_INSTANT_SAVE")){
			retval = saveInstantInvest(request);
		}
		if(strDBCallFor.equalsIgnoreCase("PROP_INSTANT_SAVE")){
			retval = saveInstantProp(request);
		}
		
		
		if(strDBCallFor.equalsIgnoreCase("BASPLAN_INSTANT_SAVE")){ 
			retval = saveInstantBasPlan(request);
		} 
//		if(strDBCallFor.equalsIgnoreCase("RIDPLAN_INSTANT_SAVE")){ 
//			retval = saveInstantRidPlan(request);
//		} 
		
		if(strDBCallFor.equalsIgnoreCase("DEATHBF_INSTANT_SAVE")){ 
			retval = saveInstantlfDthbfPlan(request);
		}
		if(strDBCallFor.equalsIgnoreCase("DISABLITY_INSTANT_SAVE")){ 
			retval = saveInstantlfDsblityPlan(request);
		}
		if(strDBCallFor.equalsIgnoreCase("CRTLS_INSTANT_SAVE")){ 
			retval = saveInstantlfCrtlsPlan(request);
		}
		if(strDBCallFor.equalsIgnoreCase("HOSP_INSTANT_SAVE")){ 
			retval = saveInstantlfHospPlan(request);
		}
		if(strDBCallFor.equalsIgnoreCase("LIFERET_INSTANT_SAVE")){ 
			retval = saveInstantlfRetPlan(request);
		}
		if(strDBCallFor.equalsIgnoreCase("EDUPLG_INSTANT_SAVE")){ 
			retval = saveInstantlfEduPlan(request);
		} 
		
		if(strDBCallFor.equalsIgnoreCase("NOMINE_INSTANT_SAVE")){ 
			retval = saveInstantlfNominePlan(request);
		}
		
		out.print(retval);
	}
	


private JSONArray saveInstantFpmsClient(HttpServletRequest request) {
		// TODO Auto-generated method stub
	logger.info(" ------> Inside saveInstant Method ");
	JSONArray retValues = new JSONArray();
	 
	JSONObject clfeDataJsnObj = new JSONObject();
	JSONObject clfeTabJsnObj =  new JSONObject();
	JSONArray clfeDataJsnArr = new JSONArray();
	
  ClientService clientServ = new ClientService();
	ClientDB clientDB = new ClientDB(); 
	try{
		
		ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext(); 
		DBInterfaceImpl dao = (DBInterfaceImpl)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
		HttpSession session = request.getSession(false);
		Map<String,String> sessMap = new HashMap<String,String>();
		sessMap = (HashMap<String, String>)session.getAttribute(FipaConstant.LOGGED_USER_INFO);
		
		String strCrtdUser = (String)sessMap.get(FipaConstant.LOGGED_USER_ID);
		
		String strSaveFor = FipaUtils.getParamValue(request, "txtFldSaveFor");		 
		
		String strFnaId = FipaUtils.getParamValue(request, "fnaId");
		 
		
		
		JSONObject jsnKeyObj = clientServ.saveClientDetails(request, null);
		logger.info(""+jsnKeyObj);
		
		
			
	    retValues.put(jsnKeyObj);
		   
	}catch(Exception ex){
		logger.error("",ex);
		
	}
	
		return retValues;
	}





private JSONArray saveInstantSrcOfInc(HttpServletRequest request) {
		// TODO Auto-generated method stub
	logger.info(" ------> Inside saveInstantSrcOfInc Method ");
	JSONArray retValues = new JSONArray();
	 
	JSONObject clfeDataJsnObj = new JSONObject();
	JSONObject clfeTabJsnObj =  new JSONObject();
	JSONArray clfeDataJsnArr = new JSONArray();
	
   
	ClientDB clientDB = new ClientDB(); 
	try{
		
		ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext(); 
		DBInterfaceImpl dao = (DBInterfaceImpl)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
		HttpSession session = request.getSession(false);
		Map<String,String> sessMap = new HashMap<String,String>();
		sessMap = (HashMap<String, String>)session.getAttribute(FipaConstant.LOGGED_USER_INFO);
		
		String strCrtdUser = (String)sessMap.get(FipaConstant.LOGGED_USER_ID);
		
		String strSaveFor = FipaUtils.getParamValue(request, "txtFldSaveFor");
		strSaveFor = java.net.URLDecoder.decode(strSaveFor,"UTF-8");
		strSaveFor= strSaveFor.replace("\'", "\''");
		
		String strClientId = FipaUtils.getParamValue(request, "fnaId");
		strClientId = java.net.URLDecoder.decode(strClientId,"UTF-8");
		strClientId= strClientId.replace("\'", "\''");
		
		 Map<String,Object> objMapping  = new HashMap();
		 objMapping = FipaUtils.getRequestMapping(request);//bean
		

			if(strSaveFor.equals("SRCOFINCOME")){ 
				 
				 FnaSelfspouseDets selfspsDets = new FnaSelfspouseDets();
				 selfspsDets.setFnaId(strClientId);
				 
				 if(objMapping.containsKey(FipaConstant.SRCOFINC_DETS)){
					 
					 FnaSrcofincome fnaSrcOfincDets    = new FnaSrcofincome();
					 fnaSrcOfincDets = (FnaSrcofincome)objMapping.get(FipaConstant.SRCOFINC_DETS);
					 
					 String strSrcId =  FipaUtils.getParamValue(request, "incsrcId");
					 
					 if(FipaUtils.nullObj(strSrcId)){
						 fnaSrcOfincDets.setIncsrcCreatedBy(strCrtdUser);
						 fnaSrcOfincDets.setIncsrcCreatedDate(new Date());			
						 strSrcId=clientDB.saveSrcOfIncDetails(fnaSrcOfincDets,strClientId);
					 } else{
						 strSrcId = fnaSrcOfincDets.getIncsrcId();
						 fnaSrcOfincDets.setIncsrcId(strSrcId); 
						 fnaSrcOfincDets.setIncsrcCreatedBy(strCrtdUser);
						 fnaSrcOfincDets.setIncsrcCreatedDate(new Date());
						 fnaSrcOfincDets.setIncsrcModifiedBy(strCrtdUser);
						 fnaSrcOfincDets.setIncsrcModifiedDate(new Date()); 
						 fnaSrcOfincDets.setFnaSelfspouseDets(selfspsDets);
						 clientDB.updSrcOfIncDetails(fnaSrcOfincDets);
					 }
					 
					 clfeDataJsnObj.put("fnaId", strClientId);
					 clfeDataJsnObj.put("incsrcId", strSrcId);
					 clfeDataJsnArr.put(clfeDataJsnObj);
					 clfeTabJsnObj.put("SRCOFINCOME_RECORD", clfeDataJsnArr); 
					
				}
				  
				 
			}
			
			retValues.put(clfeTabJsnObj);
		   
	}catch(Exception ex){
		logger.error("",ex);
		
	}
	
		return retValues;
	}





private JSONArray saveInstantExpend(HttpServletRequest request) {
		// TODO Auto-generated method stub
	logger.info(" ------> Inside saveInstantExpend Method ");
	JSONArray retValues = new JSONArray();
	 
	JSONObject clfeDataJsnObj = new JSONObject();
	JSONObject clfeTabJsnObj =  new JSONObject();
	JSONArray clfeDataJsnArr = new JSONArray();
	
   
	ClientDB clientDB = new ClientDB(); 
	try{
		
		ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext(); 
		DBInterfaceImpl dao = (DBInterfaceImpl)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
		HttpSession session = request.getSession(false);
		Map<String,String> sessMap = new HashMap<String,String>();
		sessMap = (HashMap<String, String>)session.getAttribute(FipaConstant.LOGGED_USER_INFO);
		
		String strCrtdUser = (String)sessMap.get(FipaConstant.LOGGED_USER_ID);
		
		String strSaveFor = FipaUtils.getParamValue(request, "txtFldSaveFor");
		strSaveFor = java.net.URLDecoder.decode(strSaveFor,"UTF-8");
		strSaveFor= strSaveFor.replace("\'", "\''");
		
		String strClientId = FipaUtils.getParamValue(request, "fnaId");
		strClientId = java.net.URLDecoder.decode(strClientId,"UTF-8");
		strClientId= strClientId.replace("\'", "\''");
		
		 Map<String,Object> objMapping  = new HashMap();
		 objMapping = FipaUtils.getRequestMapping(request);//bean
		

			if(strSaveFor.equals("EXPENDITURE")){ 
				 
				 FnaSelfspouseDets selfspsDets = new FnaSelfspouseDets();
				 selfspsDets.setFnaId(strClientId);
				 
				 if(objMapping.containsKey(FipaConstant.EXP_DETS)){
					 
					 FnaExpenditureDets fnaExpDets    = new FnaExpenditureDets();
					 fnaExpDets = (FnaExpenditureDets)objMapping.get(FipaConstant.EXP_DETS);
					 FipaUtils.getParamValue(request, "fnaId");
					 
					 String strExpId =FipaUtils.getParamValue(request, "expdId");
					 
					 if(FipaUtils.nullOrBlank(strExpId)){
						 
						 fnaExpDets.setExpdCreatedBy(strCrtdUser);
						 fnaExpDets.setExpdCreatedDate(new Date());
						 strExpId=clientDB.saveExpenditureDetails(fnaExpDets,strClientId);
						 
					 }else{
						 strExpId=fnaExpDets.getExpdId();
						 fnaExpDets.setExpdId(strExpId);
						 fnaExpDets.setFnaSelfspouseDets(selfspsDets);

						 fnaExpDets.setExpdCreatedBy(strCrtdUser);
						 fnaExpDets.setExpdCreatedDate(new Date());
						 fnaExpDets.setExpdModifiedBy(strCrtdUser);
						 fnaExpDets.setExpdModifiedDate(new Date());
						 fnaExpDets.setFnaSelfspouseDets(selfspsDets);
						 
						 clientDB.updateExpDetails(fnaExpDets);					 
					 }
					 
					 clfeDataJsnObj.put("fnaId", strClientId);
					 clfeDataJsnObj.put("expdId", strExpId);
					 clfeDataJsnArr.put(clfeDataJsnObj);
					 clfeTabJsnObj.put("EXPENDITURE_RECORD", clfeDataJsnArr); 
					
				} 
				  
				 
			}
			
			retValues.put(clfeTabJsnObj);
		   
	}catch(Exception ex){
		logger.error("",ex);
		
	}
	
		return retValues;
	}




private JSONArray saveInstantConting(HttpServletRequest request) {
		// TODO Auto-generated method stub
	logger.info(" ------> Inside saveInstantConting Method ");
	JSONArray retValues = new JSONArray();
	 
	JSONObject clfeDataJsnObj = new JSONObject();
	JSONObject clfeTabJsnObj =  new JSONObject();
	JSONArray clfeDataJsnArr = new JSONArray();
	
   
	ClientDB clientDB = new ClientDB(); 
	try{
		
		HttpSession session = request.getSession(false);
		Map<String,String> sessMap = new HashMap<String,String>();
		sessMap = (HashMap<String, String>)session.getAttribute(FipaConstant.LOGGED_USER_INFO);
		
		String strCrtdUser = (String)sessMap.get(FipaConstant.LOGGED_USER_ID);
		
		String strSaveFor = FipaUtils.getParamValue(request, "txtFldSaveFor");
		strSaveFor = java.net.URLDecoder.decode(strSaveFor,"UTF-8");
		strSaveFor= strSaveFor.replace("\'", "\''");
		
		String strClientId = FipaUtils.getParamValue(request, "fnaId");
		strClientId = java.net.URLDecoder.decode(strClientId,"UTF-8");
		strClientId= strClientId.replace("\'", "\''");
		
		 Map<String,Object> objMapping  = new HashMap();
		 objMapping = FipaUtils.getRequestMapping(request);//bean
		

			if(strSaveFor.equals("CONTINGENCY")){ 
				 
				 FnaSelfspouseDets selfspsDets = new FnaSelfspouseDets();
				 selfspsDets.setFnaId(strClientId);
				 
					if(objMapping.containsKey(FipaConstant.CONTG_DETS)){
						 
				 		FnaContingencyDets fnaContgDets   = new FnaContingencyDets();
				 		fnaContgDets = (FnaContingencyDets)objMapping.get(FipaConstant.CONTG_DETS);

						 String strContgId = FipaUtils.getParamValue(request, "conId");
						 
						 if(FipaUtils.nullOrBlank(strContgId)){
							 
							 fnaContgDets.setContCrtdBy(strCrtdUser);
						 		fnaContgDets.setContCrtdDate(new Date());
								
						 		strContgId = clientDB.saveContgDetails(fnaContgDets,strClientId);
						 		
						 }else{       
							 strContgId = fnaContgDets.getConId();
							 fnaContgDets.setConId(strContgId);
							 fnaContgDets.setFnaSelfspouseDets(selfspsDets);
							 fnaContgDets.setContCrtdBy(strCrtdUser);
							 fnaContgDets.setContCrtdDate(new Date()); 
							 fnaContgDets.setContModBy(strCrtdUser);
							 fnaContgDets.setContModDate(new Date()); 
							 fnaContgDets.setFnaSelfspouseDets(selfspsDets);
							 clientDB.updContgDetails(fnaContgDets);
						 }
				 		
						 clfeDataJsnObj.put("fnaId", strClientId);
						 clfeDataJsnObj.put("conId", strContgId);
						 clfeDataJsnArr.put(clfeDataJsnObj);
						 clfeTabJsnObj.put("CONTINGENCY_RECORD", clfeDataJsnArr); 
						
						}
					
					 
				 
			}
			
			retValues.put(clfeTabJsnObj);
		   
	}catch(Exception ex){
		logger.error("",ex);
		
	}
	
		return retValues;
	}






private JSONArray saveInstantRetirplg(HttpServletRequest request) {
		// TODO Auto-generated method stub
	logger.info(" ------> Inside saveInstantRetirplg Method ");
	JSONArray retValues = new JSONArray();
	 
	JSONObject clfeDataJsnObj = new JSONObject();
	JSONObject clfeTabJsnObj =  new JSONObject();
	JSONArray clfeDataJsnArr = new JSONArray();
	
   
	ClientDB clientDB = new ClientDB(); 
	try{
		
		ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext(); 
		DBInterfaceImpl dao = (DBInterfaceImpl)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
		HttpSession session = request.getSession(false);
		Map<String,String> sessMap = new HashMap<String,String>();
		sessMap = (HashMap<String, String>)session.getAttribute(FipaConstant.LOGGED_USER_INFO);
		
		String strCrtdUser = (String)sessMap.get(FipaConstant.LOGGED_USER_ID);
		
		String strSaveFor = FipaUtils.getParamValue(request, "txtFldSaveFor");
		strSaveFor = java.net.URLDecoder.decode(strSaveFor,"UTF-8");
		strSaveFor= strSaveFor.replace("\'", "\''");
		
		String strClientId = FipaUtils.getParamValue(request, "fnaId");
		strClientId = java.net.URLDecoder.decode(strClientId,"UTF-8");
		strClientId= strClientId.replace("\'", "\''");
		
		 Map<String,Object> objMapping  = new HashMap();
		 objMapping = FipaUtils.getRequestMapping(request);//bean
		

			if(strSaveFor.equals("RETIREPLAN")){  
				 FnaSelfspouseDets selfspsDets = new FnaSelfspouseDets();
				 selfspsDets.setFnaId(strClientId);
				 
				 if(objMapping.containsKey(FipaConstant.RETPLN_DETS)){
						
						FnaRetireplanDets fnaRetirePlnDets    = new FnaRetireplanDets();
						fnaRetirePlnDets = (FnaRetireplanDets)objMapping.get(FipaConstant.RETPLN_DETS);
						
						String strRetId = FipaUtils.getParamValue(request, "retId");
						
						if(FipaUtils.nullOrBlank(strRetId)){
							fnaRetirePlnDets.setRetCreatedBy(strCrtdUser);
							fnaRetirePlnDets.setRetCreatedDate(new Date());
						
							strRetId = clientDB.saveRetirePlnDetails(fnaRetirePlnDets,strClientId);
						}else{
							strRetId = fnaRetirePlnDets.getRetId();
							fnaRetirePlnDets.setRetId(strRetId);
							fnaRetirePlnDets.setFnaSelfspouseDets(selfspsDets);
							fnaRetirePlnDets.setRetCreatedBy(strCrtdUser);
							fnaRetirePlnDets.setRetCreatedDate(new Date());
							fnaRetirePlnDets.setRetModifiedBy(strCrtdUser);
							fnaRetirePlnDets.setRetModifiedDate(new Date());
							
							 fnaRetirePlnDets.setFnaSelfspouseDets(selfspsDets);
							clientDB.updRetirePlnDetails(fnaRetirePlnDets);
						}
						
						 clfeDataJsnObj.put("fnaId", strClientId);
						 clfeDataJsnObj.put("retId", strRetId);
						 clfeDataJsnArr.put(clfeDataJsnObj);
						 clfeTabJsnObj.put("RETIREPLAN_RECORD", clfeDataJsnArr);  
					}
					
					 
				 
			}
			
			retValues.put(clfeTabJsnObj);
		   
	}catch(Exception ex){
		logger.error("",ex);
		
	}
	
		return retValues;
	}





private JSONArray saveInstantCashAsst(HttpServletRequest request) {
		// TODO Auto-generated method stub
	logger.info(" ------> Inside saveInstantCashAsst Method ");
	JSONArray retValues = new JSONArray();
	 
	JSONObject clfeDataJsnObj = new JSONObject();
	JSONObject clfeTabJsnObj =  new JSONObject();
	JSONArray clfeDataJsnArr = new JSONArray();
	
   
	ClientDB clientDB = new ClientDB(); 
	try{
		
		ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext(); 
		DBInterfaceImpl dao = (DBInterfaceImpl)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
		HttpSession session = request.getSession(false);
		Map<String,String> sessMap = new HashMap<String,String>();
		sessMap = (HashMap<String, String>)session.getAttribute(FipaConstant.LOGGED_USER_INFO);
		
		String strCrtdUser = (String)sessMap.get(FipaConstant.LOGGED_USER_ID);
		
		String strSaveFor = FipaUtils.getParamValue(request, "txtFldSaveFor");
		strSaveFor = java.net.URLDecoder.decode(strSaveFor,"UTF-8");
		strSaveFor= strSaveFor.replace("\'", "\''");
		
		String strClientId = FipaUtils.getParamValue(request, "fnaId");
		strClientId = java.net.URLDecoder.decode(strClientId,"UTF-8");
		strClientId= strClientId.replace("\'", "\''");
		
		 Map<String,Object> objMapping  = new HashMap();
		 objMapping = FipaUtils.getRequestMapping(request);//bean
		

			if(strSaveFor.equals("CASHASSET")){ 
				 
				 FnaSelfspouseDets selfspsDets = new FnaSelfspouseDets();
				 selfspsDets.setFnaId(strClientId);
				 
				 
				 if(objMapping.containsKey(FipaConstant.CSHASS_DETS)){
						
						FnaAssetCashdets fnaCashAssDets  = new FnaAssetCashdets();
						fnaCashAssDets = (FnaAssetCashdets)objMapping.get(FipaConstant.CSHASS_DETS);
						String strCashId = FipaUtils.getParamValue(request, "casstId");
						 
						if(FipaUtils.nullOrBlank(strCashId)){
						
							fnaCashAssDets.setCasstCreatedBy(strCrtdUser);
							fnaCashAssDets.setCasstCreatedDate(new Date());
						
							strCashId  = clientDB.saveCashAssDetails(fnaCashAssDets,strClientId);
						}else{
							strCashId = fnaCashAssDets.getCasstId();
							fnaCashAssDets.setCasstId(strCashId);
							fnaCashAssDets.setCasstCreatedBy(strCrtdUser);
							fnaCashAssDets.setCasstCreatedDate(new Date());
							fnaCashAssDets.setCasstModifiedBy(strCrtdUser);
							fnaCashAssDets.setCasstModifiedDate(new Date()); 
							 fnaCashAssDets.setFnaSelfspouseDets(selfspsDets);
							clientDB.updCashAssDetails(fnaCashAssDets);
							
						}
						
						 clfeDataJsnObj.put("fnaId", strClientId);
						 clfeDataJsnObj.put("casstId", strCashId);
						 clfeDataJsnArr.put(clfeDataJsnObj);
						 clfeTabJsnObj.put("CASHASSET_RECORD", clfeDataJsnArr);  
					
					}
				  
					
					 
				 
			}
			
			retValues.put(clfeTabJsnObj);
		   
	}catch(Exception ex){
		logger.error("",ex);
		
	}
	
		return retValues;
	}





private JSONArray saveInstantOtherAsst(HttpServletRequest request) {
		// TODO Auto-generated method stub
	logger.info(" ------> Inside saveInstantOtherAsst Method ");
	JSONArray retValues = new JSONArray();
	 
	JSONObject clfeDataJsnObj = new JSONObject();
	JSONObject clfeTabJsnObj =  new JSONObject();
	JSONArray clfeDataJsnArr = new JSONArray();
	
   
	ClientDB clientDB = new ClientDB(); 
	try{
		
		ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext(); 
		DBInterfaceImpl dao = (DBInterfaceImpl)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
		HttpSession session = request.getSession(false);
		Map<String,String> sessMap = new HashMap<String,String>();
		sessMap = (HashMap<String, String>)session.getAttribute(FipaConstant.LOGGED_USER_INFO);
		
		String strCrtdUser = (String)sessMap.get(FipaConstant.LOGGED_USER_ID);
		
		String strSaveFor = FipaUtils.getParamValue(request, "txtFldSaveFor");
		strSaveFor = java.net.URLDecoder.decode(strSaveFor,"UTF-8");
		strSaveFor= strSaveFor.replace("\'", "\''");
		
		String strClientId = FipaUtils.getParamValue(request, "fnaId");
		strClientId = java.net.URLDecoder.decode(strClientId,"UTF-8");
		strClientId= strClientId.replace("\'", "\''");
		
		 Map<String,Object> objMapping  = new HashMap();
		 objMapping = FipaUtils.getRequestMapping(request);//bean
		

			if(strSaveFor.equals("OTHERASSET")){ 
				 
				 FnaSelfspouseDets selfspsDets = new FnaSelfspouseDets();
				 selfspsDets.setFnaId(strClientId);
				 
				 if(objMapping.containsKey(FipaConstant.OTHASS_DETS)){
						
						FnaAssetOtherdets fnaOthAssDets    = new FnaAssetOtherdets();
						fnaOthAssDets = (FnaAssetOtherdets)objMapping.get(FipaConstant.OTHASS_DETS);
						
						
						String strOthAsstId= FipaUtils.getParamValue(request, "othId");
						
						
						if(FipaUtils.nullOrBlank(strOthAsstId)){
							fnaOthAssDets.setOthasstCreatedBy(strCrtdUser);
							fnaOthAssDets.setOthasstCreatedDate(new Date());
						
							strOthAsstId = clientDB.saveOthAssDetails(fnaOthAssDets,strClientId);
						}else{
							strOthAsstId = fnaOthAssDets.getOthId();
							fnaOthAssDets.setOthId(strOthAsstId); 
							fnaOthAssDets.setOthasstModifiedBy(strCrtdUser);
							fnaOthAssDets.setOthasstModifiedDate(new Date());
							
							 fnaOthAssDets.setFnaSelfspouseDets(selfspsDets);
							clientDB.updOthAssDetails(fnaOthAssDets);
						}
						
					
						
						 clfeDataJsnObj.put("fnaId", strClientId);
						 clfeDataJsnObj.put("othId", strOthAsstId);
						 clfeDataJsnArr.put(clfeDataJsnObj);
						 clfeTabJsnObj.put("OTHERASSET_RECORD", clfeDataJsnArr);  
					
					}
				  
					
					 
				 
			}
			
			retValues.put(clfeTabJsnObj);
		   
	}catch(Exception ex){
		logger.error("",ex);
		
	}
	
		return retValues;
	}



private JSONArray saveInstantEstPln(HttpServletRequest request) {
		// TODO Auto-generated method stub
	JSONArray retValues = new JSONArray();
	 
	JSONObject clfeDataJsnObj = new JSONObject();
	JSONObject clfeTabJsnObj =  new JSONObject();
	JSONArray clfeDataJsnArr = new JSONArray();
	
 
	ClientService serv=new ClientService();  
	ClientDB clientDB = new ClientDB();
//	ClientController clientCtrl=new ClientController();
	try{
		
		ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext(); 
		DBInterfaceImpl dao = (DBInterfaceImpl)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
		HttpSession session = request.getSession(false);
		Map<String,String> sessMap = new HashMap<String,String>();
		sessMap = (HashMap<String, String>)session.getAttribute(FipaConstant.LOGGED_USER_INFO);
		
		String strLoggedUser = (String)sessMap.get(FipaConstant.LOGGED_USER_ID);
		
		String strSaveFor = FipaUtils.getParamValue(request, "txtFldSaveFor");
		strSaveFor = java.net.URLDecoder.decode(strSaveFor,"UTF-8");
		strSaveFor= strSaveFor.replace("\'", "\''");
		
		String strFnaId = FipaUtils.getParamValue(request, "fnaId");
		strFnaId = java.net.URLDecoder.decode(strFnaId,"UTF-8");
		strFnaId= strFnaId.replace("\'", "\''"); 

		
		String strEstPlanId = FipaUtils.getParamValue(request, "estId");
		strEstPlanId = java.net.URLDecoder.decode(strEstPlanId,"UTF-8");
		strEstPlanId= strEstPlanId.replace("\'", "\''");
		
			if(strSaveFor.equals("ESTATEPLAN")){
				Vector vectDetails      =  serv.getEstPlanDetails(request,"");
//				if(FipaUtils.nullOrBlank(strEstPlanId)){  
					strEstPlanId=clientDB.saveEstPlanDetails(vectDetails,strFnaId);
//				 }else{ 
//					 clientDB.updEstPlanDetails(vectDetails,strFnaId);
//				 }
				
				clfeDataJsnObj.put("estId", strEstPlanId);
				clfeDataJsnArr.put(clfeDataJsnObj);
				clfeTabJsnObj.put("ESTATEPLAN_RECORD", clfeDataJsnArr); 
				
			}
			
			 
			 
			 
			 
			retValues.put(clfeTabJsnObj); 
		   
	}catch(Exception ex){
		logger.error("",ex);
		
	}
	
		return retValues;
	}




private JSONArray saveInstantLiability(HttpServletRequest request) {
		// TODO Auto-generated method stub
	logger.info(" ------> Inside saveInstantLiability Method ");
	JSONArray retValues = new JSONArray();
	 
	JSONObject clfeDataJsnObj = new JSONObject();
	JSONObject clfeTabJsnObj =  new JSONObject();
	JSONArray clfeDataJsnArr = new JSONArray();
	
   
	ClientDB clientDB = new ClientDB(); 
	try{
		
		ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext(); 
		DBInterfaceImpl dao = (DBInterfaceImpl)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
		HttpSession session = request.getSession(false);
		Map<String,String> sessMap = new HashMap<String,String>();
		sessMap = (HashMap<String, String>)session.getAttribute(FipaConstant.LOGGED_USER_INFO);
		
		String strCrtdUser = (String)sessMap.get(FipaConstant.LOGGED_USER_ID);
		
		String strSaveFor = FipaUtils.getParamValue(request, "txtFldSaveFor");
		strSaveFor = java.net.URLDecoder.decode(strSaveFor,"UTF-8");
		strSaveFor= strSaveFor.replace("\'", "\''");
		
		String strClientId = FipaUtils.getParamValue(request, "fnaId");
		strClientId = java.net.URLDecoder.decode(strClientId,"UTF-8");
		strClientId= strClientId.replace("\'", "\''");
		
		 Map<String,Object> objMapping  = new HashMap();
		 objMapping = FipaUtils.getRequestMapping(request);//bean
		

			if(strSaveFor.equals("LIABILITY")){ 
				 
				 FnaSelfspouseDets selfspsDets = new FnaSelfspouseDets();
				 selfspsDets.setFnaId(strClientId);
				 
				 
				 if(objMapping.containsKey(FipaConstant.FNLBTY_DETS)){
						
						FnaFinLiability fnaFinLbltyDets    = new FnaFinLiability();
						fnaFinLbltyDets = (FnaFinLiability)objMapping.get(FipaConstant.FNLBTY_DETS);
						
						
						String strFinId = FipaUtils.getParamValue(request, "liabId");
						 
						if(FipaUtils.nullOrBlank(strFinId)){
						
							fnaFinLbltyDets.setLiabCreatedBy(strCrtdUser);
							fnaFinLbltyDets.setLiabCreatedDate(new Date()); 
							strFinId = clientDB.saveFinLbltyDetails(fnaFinLbltyDets,strClientId);
						}else{
							strFinId = fnaFinLbltyDets.getLiabId(); 
							fnaFinLbltyDets.setLiabId(strFinId); 
							fnaFinLbltyDets.setLiabCreatedBy(strCrtdUser);
							fnaFinLbltyDets.setLiabCreatedDate(new Date());
							fnaFinLbltyDets.setLiabModifiedBy(strCrtdUser);
							fnaFinLbltyDets.setLiabModifiedDate(new Date()); 
							fnaFinLbltyDets.setFnaSelfspouseDets(selfspsDets);
							clientDB.updFinLbltyDetails(fnaFinLbltyDets);
						} 
						
						 clfeDataJsnObj.put("fnaId", strClientId);
						 clfeDataJsnObj.put("liabId", strFinId);
						 clfeDataJsnArr.put(clfeDataJsnObj);
						 clfeTabJsnObj.put("LIABILITY_RECORD", clfeDataJsnArr);  
					
					}
				  
					
					 
				 
			}
			
			retValues.put(clfeTabJsnObj);
		   
	}catch(Exception ex){
		logger.error("",ex);
		
	}
	
		return retValues;
	}




private JSONArray saveInstantCurAss(HttpServletRequest request) {
		// TODO Auto-generated method stub
	logger.info(" ------> Inside saveInstantCurAss Method ");
	JSONArray retValues = new JSONArray();
	 
	JSONObject clfeDataJsnObj = new JSONObject();
	JSONObject clfeTabJsnObj =  new JSONObject();
	JSONArray clfeDataJsnArr = new JSONArray();
	
   
	ClientDB clientDB = new ClientDB(); 
	try{
		
		ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext(); 
		DBInterfaceImpl dao = (DBInterfaceImpl)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
		HttpSession session = request.getSession(false);
		Map<String,String> sessMap = new HashMap<String,String>();
		sessMap = (HashMap<String, String>)session.getAttribute(FipaConstant.LOGGED_USER_INFO);
		
		String strCrtdUser = (String)sessMap.get(FipaConstant.LOGGED_USER_ID);
		
		String strSaveFor = FipaUtils.getParamValue(request, "txtFldSaveFor");
		strSaveFor = java.net.URLDecoder.decode(strSaveFor,"UTF-8");
		strSaveFor= strSaveFor.replace("\'", "\''");
		
		String strClientId = FipaUtils.getParamValue(request, "fnaId");
		strClientId = java.net.URLDecoder.decode(strClientId,"UTF-8");
		strClientId= strClientId.replace("\'", "\''");
		
		 Map<String,Object> objMapping  = new HashMap();
		 objMapping = FipaUtils.getRequestMapping(request);//bean
		

			if(strSaveFor.equals("CURASS")){ 
				 
				 FnaSelfspouseDets selfspsDets = new FnaSelfspouseDets();
				 selfspsDets.setFnaId(strClientId);
				 
				 
				 if(objMapping.containsKey(FipaConstant.CURASS_DETS)){		
						
						FnaCurassDets fnaCurAssDets    = new FnaCurassDets();
						fnaCurAssDets = (FnaCurassDets)objMapping.get(FipaConstant.CURASS_DETS);
						
						String strCurrAssId = FipaUtils.getParamValue(request, "caId");
						
						if(FipaUtils.nullOrBlank(strCurrAssId)){					
							fnaCurAssDets.setCaCreatedBy(strCrtdUser);
							fnaCurAssDets.setCaCreatedDate(new Date());
							
							strCurrAssId = clientDB.saveCurAssDetails(fnaCurAssDets,strClientId);					
						}else{
							strCurrAssId = fnaCurAssDets.getCaId();
							fnaCurAssDets.setCaId(strCurrAssId); 
							fnaCurAssDets.setCaModifiedBy(strCrtdUser);
							fnaCurAssDets.setCaModifiedDate(new Date());
							fnaCurAssDets.setFnaSelfspouseDets(selfspsDets); 
							 clientDB.updCurAssDetails(fnaCurAssDets);
						} 
						
						 clfeDataJsnObj.put("fnaId", strClientId);
						 clfeDataJsnObj.put("caId", strCurrAssId);
						 clfeDataJsnArr.put(clfeDataJsnObj);
						 clfeTabJsnObj.put("CURASS_RECORD", clfeDataJsnArr);  
					
					}
				  
					
					 
				 
			}
			
			retValues.put(clfeTabJsnObj);
		   
	}catch(Exception ex){
		logger.error("",ex);
		
	}
	
		return retValues;
	}





private JSONArray saveInstantSummary(HttpServletRequest request) {
		// TODO Auto-generated method stub
	logger.info(" ------> Inside saveInstantSummary Method ");
	JSONArray retValues = new JSONArray();
	 
	JSONObject clfeDataJsnObj = new JSONObject();
	JSONObject clfeTabJsnObj =  new JSONObject();
	JSONArray clfeDataJsnArr = new JSONArray();
	
   
	ClientDB clientDB = new ClientDB(); 
	try{
		
		ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext(); 
		DBInterfaceImpl dao = (DBInterfaceImpl)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
		HttpSession session = request.getSession(false);
		Map<String,String> sessMap = new HashMap<String,String>();
		sessMap = (HashMap<String, String>)session.getAttribute(FipaConstant.LOGGED_USER_INFO);
		
		String strCrtdUser = (String)sessMap.get(FipaConstant.LOGGED_USER_ID);
		
		String strSaveFor = FipaUtils.getParamValue(request, "txtFldSaveFor");
		strSaveFor = java.net.URLDecoder.decode(strSaveFor,"UTF-8");
		strSaveFor= strSaveFor.replace("\'", "\''");
		
		String strClientId = FipaUtils.getParamValue(request, "fnaId");
		strClientId = java.net.URLDecoder.decode(strClientId,"UTF-8");
		strClientId= strClientId.replace("\'", "\''");
		
		 Map<String,Object> objMapping  = new HashMap();
		 objMapping = FipaUtils.getRequestMapping(request);//bean  
			if(strSaveFor.equals("SUMMARY")){  
				 FnaSelfspouseDets selfspsDets = new FnaSelfspouseDets();
				 selfspsDets.setFnaId(strClientId); 
				 if(objMapping.containsKey(FipaConstant.SANAL_DETS)){
						
					 FnaSummaryAnalysis fnaSmAnalysisDets    = new FnaSummaryAnalysis();
					 fnaSmAnalysisDets = (FnaSummaryAnalysis)objMapping.get(FipaConstant.SANAL_DETS);
						String strAnalyseId = FipaUtils.getParamValue(request, "saId");
					  
						
					 if(FipaUtils.nullOrBlank(strAnalyseId)){
						 fnaSmAnalysisDets.setSaCreatedBy(strCrtdUser);
						 fnaSmAnalysisDets.setSaCreatedDate(new Date());
						
						 strAnalyseId = clientDB.saveSAnalDetails(fnaSmAnalysisDets,strClientId);
					 }else{
						 strAnalyseId = fnaSmAnalysisDets.getSaId();
						 fnaSmAnalysisDets.setSaId(strAnalyseId);
						 fnaSmAnalysisDets.setSaModifiedBy(strCrtdUser);
						 fnaSmAnalysisDets.setSaModifiedDate(new Date()); 
						 fnaSmAnalysisDets.setFnaSelfspouseDets(selfspsDets);
						 clientDB.updSumAnlysDetails(fnaSmAnalysisDets);
					 } 
					 clfeDataJsnObj.put("fnaId", strClientId);
					 clfeDataJsnObj.put("saId", strAnalyseId);
					 clfeDataJsnArr.put(clfeDataJsnObj);
					 clfeTabJsnObj.put("SUMMARY_RECORD", clfeDataJsnArr);  
				} 
			}
			
			retValues.put(clfeTabJsnObj);
		   
	}catch(Exception ex){
		logger.error("",ex);
		
	}
	
		return retValues;
	}





private JSONArray saveInstantHealth(HttpServletRequest request) {
		// TODO Auto-generated method stub
	logger.info(" ------> Inside saveInstantHealth Method ");
	JSONArray retValues = new JSONArray();
	 
	JSONObject clfeDataJsnObj = new JSONObject();
	JSONObject clfeTabJsnObj =  new JSONObject();
	JSONArray clfeDataJsnArr = new JSONArray();
	
   
	ClientDB clientDB = new ClientDB(); 
	try{
		
		ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext(); 
		DBInterfaceImpl dao = (DBInterfaceImpl)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
		HttpSession session = request.getSession(false);
		Map<String,String> sessMap = new HashMap<String,String>();
		sessMap = (HashMap<String, String>)session.getAttribute(FipaConstant.LOGGED_USER_INFO);
		
		String strCrtdUser = (String)sessMap.get(FipaConstant.LOGGED_USER_ID);
		
		String strSaveFor = FipaUtils.getParamValue(request, "txtFldSaveFor");
		strSaveFor = java.net.URLDecoder.decode(strSaveFor,"UTF-8");
		strSaveFor= strSaveFor.replace("\'", "\''");
		
		String strClientId = FipaUtils.getParamValue(request, "fnaId");
		strClientId = java.net.URLDecoder.decode(strClientId,"UTF-8");
		strClientId= strClientId.replace("\'", "\''");
		
		 Map<String,Object> objMapping  = new HashMap();
		 objMapping = FipaUtils.getRequestMapping(request);//bean
		

			if(strSaveFor.equals("HEALTH")){ 
				 
				 FnaSelfspouseDets selfspsDets = new FnaSelfspouseDets();
				 selfspsDets.setFnaId(strClientId);
				 

				 if(objMapping.containsKey(FipaConstant.PERS_DETS)){
					 
					 FnaPersprio fnaPersDets    = new FnaPersprio();
					 fnaPersDets = (FnaPersprio)objMapping.get(FipaConstant.PERS_DETS);
					 
					 String persprioId = FipaUtils.getParamValue(request, "persprioId");
					 
					 if(FipaUtils.nullOrBlank(persprioId)){
						 fnaPersDets.setPpCreatedBy(strCrtdUser);
						 fnaPersDets.setPpCreatedDate(new Date());
						 persprioId  = clientDB.savePersPrioDetails(fnaPersDets,strClientId);
					 }else{
						 persprioId = fnaPersDets.getPersprioId();
						 fnaPersDets.setPersprioId(persprioId);
						 fnaPersDets.setPpModifiedBy(strCrtdUser);
						 fnaPersDets.setPpModifiedDate(new Date());
						
						 fnaPersDets.setFnaSelfspouseDets(selfspsDets);
						 clientDB.updPersPrioDetails(fnaPersDets);
					 }
					 
					 
					 clfeDataJsnObj.put("fnaId", strClientId);
					 clfeDataJsnObj.put("persprioId", persprioId);
					 clfeDataJsnArr.put(clfeDataJsnObj);
					 clfeTabJsnObj.put("HEALTH_RECORD", clfeDataJsnArr);  
				} 
			}
			
			retValues.put(clfeTabJsnObj);
		   
	}catch(Exception ex){
		logger.error("",ex);
		
	}
	
		return retValues;
	}
private JSONArray saveInstantTypeOfApp(HttpServletRequest request) {
		// TODO Auto-generated method stub
	logger.info(" ------> Inside saveInstantTypeOfApp Method ");
	JSONArray retValues = new JSONArray();
	 
	JSONObject clfeDataJsnObj = new JSONObject();
	JSONObject clfeTabJsnObj =  new JSONObject();
	JSONArray clfeDataJsnArr = new JSONArray();
	
 
	ClientService serv=new ClientService();  
	ClientDB clientDB = new ClientDB();
//	ClientController clientCtrl=new ClientController();
	try{
		
		ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext(); 
		DBInterfaceImpl dao = (DBInterfaceImpl)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
		HttpSession session = request.getSession(false);
		Map<String,String> sessMap = new HashMap<String,String>();
		sessMap = (HashMap<String, String>)session.getAttribute(FipaConstant.LOGGED_USER_INFO);
		
		String strCrtdUser = (String)sessMap.get(FipaConstant.LOGGED_USER_ID);
		
		String strSaveFor = FipaUtils.getParamValue(request, "txtFldSaveFor");
		strSaveFor = java.net.URLDecoder.decode(strSaveFor,"UTF-8");
		strSaveFor= strSaveFor.replace("\'", "\''");
		
		String strFnaId = FipaUtils.getParamValue(request, "fnaId");
		strFnaId = java.net.URLDecoder.decode(strFnaId,"UTF-8");
		strFnaId= strFnaId.replace("\'", "\''");
		
		 Map<String,Object> objMapping  = new HashMap();
		 objMapping = FipaUtils.getRequestMapping(request);//bean
		

			if(strSaveFor.equals("TYPES_OF_APP")){ 
				 String strClientId = "";
				 FnaSelfspouseDets selfspsDets = new FnaSelfspouseDets();
				 
				 if(objMapping.containsKey(FipaConstant.SLFSPS_DETS)){
					 
					 selfspsDets = (FnaSelfspouseDets)objMapping.get(FipaConstant.SLFSPS_DETS);
					 
					 String strSlfDOB        = FipaUtils.getParamValue(request, "dfSelfDob");
					 Date dateSlfDOB         = FipaDateUtils.convertStringToDate(strSlfDOB);
					
				     String strSpsDOB        = FipaUtils.getParamValue(request, "dfSpsDob");
					 Date dateSpsDOB         = FipaDateUtils.convertStringToDate(strSpsDOB);
					 
					 String strAdvId = FipaUtils.getParamValue(request,"advstfId");
					 String strAdvMgrId = FipaUtils.getParamValue(request, "mgrId");	

					 selfspsDets.setDfSelfDob(dateSlfDOB);
					 selfspsDets.setDfSpsDob(dateSpsDOB);
					  
					 selfspsDets.setAdvstfId(strAdvId);
						 
					 selfspsDets.setMgrId(strAdvMgrId);
					 selfspsDets.setFnaType("FULLFACT");	 
					 selfspsDets.setDfCreatedBy(strCrtdUser);
					 selfspsDets.setDfCreatedDate(new Date());
					 selfspsDets.setDfCreatedDatetime(new Date());
					 
					 
					 if(FipaUtils.nullOrBlank(strFnaId)){
						 strClientId  = clientDB.saveClientDetails(selfspsDets);  
					 }else{
						 clientDB.updateClientDetails(selfspsDets);
						 strClientId=strFnaId;
					 }
					
					 clfeDataJsnObj.put("fnaId", strClientId); 
					 clfeDataJsnArr.put(clfeDataJsnObj);
					 clfeTabJsnObj.put("SLFSPS_DETS", clfeDataJsnArr); 
					 
				 }
				 
			}
			
			retValues.put(clfeTabJsnObj);
		   
	}catch(Exception ex){
		logger.error("",ex);
		
	}
	
		return retValues;
	}

 
private JSONArray saveInstantNewLife(HttpServletRequest request) {
		// TODO Auto-generated method stub
	/*System.out.println("===============saveInstantNewLife====================");*/
	logger.info(" ------> Inside saveInstantNewLife Method ");
	JSONArray retValues = new JSONArray();
	 
	JSONObject clfeDataJsnObj = new JSONObject();
	JSONObject clfeTabJsnObj =  new JSONObject();
	JSONArray clfeDataJsnArr = new JSONArray();
	
 
	ClientService serv=new ClientService();  
	ClientDB clientDB = new ClientDB();
//	ClientController clientCtrl=new ClientController();
	try{
		
		ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext(); 
		DBInterfaceImpl dao = (DBInterfaceImpl)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
		HttpSession session = request.getSession(false);
		Map<String,String> sessMap = new HashMap<String,String>();
		sessMap = (HashMap<String, String>)session.getAttribute(FipaConstant.LOGGED_USER_INFO);
		
		String strCrtdUser = (String)sessMap.get(FipaConstant.LOGGED_USER_ID);
		
		String strSaveFor = FipaUtils.getParamValue(request, "txtFldSaveFor");
		strSaveFor = java.net.URLDecoder.decode(strSaveFor,"UTF-8");
		strSaveFor= strSaveFor.replace("\'", "\''");
		
		String strFnaId = FipaUtils.getParamValue(request, "fnaId");
		strFnaId = java.net.URLDecoder.decode(strFnaId,"UTF-8");
		strFnaId= strFnaId.replace("\'", "\''");
		
		String strLICId = FipaUtils.getParamValue(request, "lipId");
		strLICId = java.net.URLDecoder.decode(strLICId,"UTF-8");
		strLICId= strLICId.replace("\'", "\''");
		
		
		 Map<String,Object> objMapping  = new HashMap();
		 objMapping = FipaUtils.getRequestMapping(request);//bean
		

			if(strSaveFor.equals("NEW_LIFEINSURANCE")){ 
				 String strClientId = strFnaId;
				 FnaSelfspouseDets selfspsDets = new FnaSelfspouseDets();
				
				 //Life Insurance Details 
				 if(objMapping.containsKey(FipaConstant.LIFEINSRCE_DETS)){
						
					 FnaLifeinsuranceDets fnaLifeInsurceDets    = new FnaLifeinsuranceDets();
					 fnaLifeInsurceDets = (FnaLifeinsuranceDets)objMapping.get(FipaConstant.LIFEINSRCE_DETS);
					 
					 
					 String lipIncepdate        = FipaUtils.getParamValue(request, "lipIncepdate");
					 Date dteLipIncepdate         = FipaDateUtils.convertStringToDate(lipIncepdate);
					 
					 String lipExpdate        = FipaUtils.getParamValue(request, "lipExpdate");
					 Date dteLipExpdate        = FipaDateUtils.convertStringToDate(lipExpdate);
					 
					 fnaLifeInsurceDets.setLipIncepdate(dteLipIncepdate);
					 fnaLifeInsurceDets.setLipExpdate(dteLipExpdate);
					 
				     String lipMaturityDate        = FipaUtils.getParamValue(request, "lipMaturityDate");
					 Date dteLipMaturityDate         = FipaDateUtils.convertStringToDate(lipMaturityDate);
					 fnaLifeInsurceDets.setLipMaturityDate(dteLipMaturityDate);
					   
					 String strLICRefId = FipaUtils.getParamValue(request, "lipRefId");
					  
					 if(FipaUtils.nullOrBlank(strLICId)){ 
						 fnaLifeInsurceDets.setLipCreatedBy(strCrtdUser);
						 fnaLifeInsurceDets.setLipCreatedDate(new Date());
						 fnaLifeInsurceDets.setLipRefId(strLICRefId);
						 strLICId=clientDB.saveLifeInsrceDetails(fnaLifeInsurceDets,strClientId);
						 
						
					 }else{ 
						 selfspsDets.setFnaId(strClientId); 
						 fnaLifeInsurceDets.setLipRefId(strLICRefId);
						 fnaLifeInsurceDets.setLipModifiedBy(strCrtdUser);
						 fnaLifeInsurceDets.setLipModifiedDate(new Date());
						 fnaLifeInsurceDets.setLipId(strLICId); 
						 fnaLifeInsurceDets.setFnaSelfspouseDets(selfspsDets);
						 clientDB.updLifeInsrceDetails(fnaLifeInsurceDets); 
					 }  
					 
					 clfeDataJsnObj.put("fnaId", strClientId); 
					 clfeDataJsnObj.put("lipId", strLICId); 
					 clfeDataJsnObj.put("lipRefId", strLICRefId); 
					 clfeDataJsnObj.put("lipCreatedBy", strCrtdUser);  
					 clfeDataJsnArr.put(clfeDataJsnObj);
					 clfeTabJsnObj.put("LIFE_DETS", clfeDataJsnArr);    
					 
					 
					}
				   
			}
			
			retValues.put(clfeTabJsnObj);
		   
	}catch(Exception ex){
		logger.error("",ex);
		
	}
	
		return retValues;
	}



private JSONArray saveInstantEmpContrb(HttpServletRequest request) {
		// TODO Auto-generated method stub
	logger.info(" ------> Inside saveInstantEmpContrb Method ");
	JSONArray retValues = new JSONArray();
	 
	JSONObject clfeDataJsnObj = new JSONObject();
	JSONObject clfeTabJsnObj =  new JSONObject();
	JSONArray clfeDataJsnArr = new JSONArray();
	
 
	ClientService serv=new ClientService();  
	ClientDB clientDB = new ClientDB();
//	ClientController clientCtrl=new ClientController();
	try{
		
		ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext(); 
		DBInterfaceImpl dao = (DBInterfaceImpl)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
		HttpSession session = request.getSession(false);
		Map<String,String> sessMap = new HashMap<String,String>();
		sessMap = (HashMap<String, String>)session.getAttribute(FipaConstant.LOGGED_USER_INFO);
		
		String strLoggedUser = (String)sessMap.get(FipaConstant.LOGGED_USER_ID);
		
		String strSaveFor = FipaUtils.getParamValue(request, "txtFldSaveFor");
		strSaveFor = java.net.URLDecoder.decode(strSaveFor,"UTF-8");
		strSaveFor= strSaveFor.replace("\'", "\''");
		
		String strFnaId = FipaUtils.getParamValue(request, "fnaId");
		strFnaId = java.net.URLDecoder.decode(strFnaId,"UTF-8");
		strFnaId= strFnaId.replace("\'", "\''");
		
		String ccPkId = FipaUtils.getParamValue(request, "ccPkId");
		ccPkId = java.net.URLDecoder.decode(ccPkId,"UTF-8");
		ccPkId= strFnaId.replace("\'", "\''");
		 
//		if(strSaveFor.equals("EMPCONTRB")){
//			Vector vectDetails      =  serv.getCPFMonthlyContrbDetails(request); 
//			String cpfMthCtdId      =  clientDB.saveCpfMtlyCtbDetails(vectDetails,strFnaId);
//			clfeDataJsnObj.put("ID", cpfMthCtdId);
//			clfeDataJsnObj.put("CRTDBY", strLoggedUser);
//			clfeDataJsnObj.put("CRTDDATE", new Date()); 
//			clfeDataJsnArr.put(clfeDataJsnObj);
//			clfeTabJsnObj.put("EMPCONTRB_RECORD", clfeDataJsnArr); 
//			
//		}
		retValues.put(clfeTabJsnObj);
		   
	}catch(Exception ex){
		logger.error("",ex);
		
	}
	
		return retValues;
	}

private JSONArray saveInstantChild(HttpServletRequest request) {
		// TODO Auto-generated method stub
	logger.info(" ------> Inside saveInstant Method ");
	JSONArray retValues = new JSONArray();
	 
	JSONObject clfeDataJsnObj = new JSONObject();
	JSONObject clfeTabJsnObj =  new JSONObject();
	JSONArray clfeDataJsnArr = new JSONArray();
	
 
	ClientService serv=new ClientService();  
	ClientDB clientDB = new ClientDB();
//	ClientController clientCtrl=new ClientController();
	try{
		
		ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext(); 
		DBInterfaceImpl dao = (DBInterfaceImpl)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
		HttpSession session = request.getSession(false);
		Map<String,String> sessMap = new HashMap<String,String>();
		sessMap = (HashMap<String, String>)session.getAttribute(FipaConstant.LOGGED_USER_INFO);
		
		String strLoggedUser = (String)sessMap.get(FipaConstant.LOGGED_USER_ID);
		
		String strSaveFor = FipaUtils.getParamValue(request, "txtFldSaveFor");
		strSaveFor = java.net.URLDecoder.decode(strSaveFor,"UTF-8");
		strSaveFor= strSaveFor.replace("\'", "\''");
		
		String strFnaId = FipaUtils.getParamValue(request, "fnaId");
		strFnaId = java.net.URLDecoder.decode(strFnaId,"UTF-8");
		strFnaId= strFnaId.replace("\'", "\''");
		 
		if(strSaveFor.equals("CHILD_PARTICULARS")){
			Vector vectChildDetails      =  serv.getChildDetails(request);
			List strChildPartId=clientDB.saveChilddetails(vectChildDetails,strFnaId);
			clfeDataJsnObj.put("ID", strChildPartId);
			clfeDataJsnObj.put("CRTDBY", strLoggedUser);
			clfeDataJsnObj.put("CRTDDATE", new Date()); 
			clfeDataJsnArr.put(clfeDataJsnObj);
			clfeTabJsnObj.put("CHILD_RECORD", clfeDataJsnArr); 
			
		}
		retValues.put(clfeTabJsnObj);
		   
	}catch(Exception ex){
		logger.error("",ex);
		
	}
	
		return retValues;
	}
 

private JSONArray saveInstantFinGls(HttpServletRequest request) {
		// TODO Auto-generated method stub
	logger.info(" ------> Inside  saveInstantFinGls Method ");
	JSONArray retValues = new JSONArray();
	 
	JSONObject clfeDataJsnObj = new JSONObject();
	JSONObject clfeTabJsnObj =  new JSONObject();
	JSONArray clfeDataJsnArr = new JSONArray();
	
 
	ClientService serv=new ClientService();  
	ClientDB clientDB = new ClientDB();
//	ClientController clientCtrl=new ClientController();
	try{
		
		ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext(); 
		DBInterfaceImpl dao = (DBInterfaceImpl)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
		HttpSession session = request.getSession(false);
		Map<String,String> sessMap = new HashMap<String,String>();
		sessMap = (HashMap<String, String>)session.getAttribute(FipaConstant.LOGGED_USER_INFO);
		
		String strLoggedUser = (String)sessMap.get(FipaConstant.LOGGED_USER_ID);
		
		String strSaveFor = FipaUtils.getParamValue(request, "txtFldSaveFor");
		strSaveFor = java.net.URLDecoder.decode(strSaveFor,"UTF-8");
		strSaveFor= strSaveFor.replace("\'", "\''");
		
		String strFnaId = FipaUtils.getParamValue(request, "fnaId");
		strFnaId = java.net.URLDecoder.decode(strFnaId,"UTF-8");
		strFnaId= strFnaId.replace("\'", "\''");
		
		 Map<String,Object> objMapping  = new HashMap();
		 objMapping = FipaUtils.getRequestMapping(request);//bean
		
		if(strSaveFor.equals("FIN_GOALS")){
			Vector vectFinGlsDetails      =  serv.getFinGoalsDetails(request);
			String strFinglsId= clientDB.saveFinGoalsdetails(vectFinGlsDetails,strFnaId); 
			clfeDataJsnObj.put("ID", strFinglsId);
			clfeDataJsnObj.put("CRTDBY", strLoggedUser);
			clfeDataJsnObj.put("CRTDDATE", new Date()); 
			clfeDataJsnArr.put(clfeDataJsnObj);
			clfeTabJsnObj.put("FINGL_RECORD", clfeDataJsnArr); 
			
		}
	
		retValues.put(clfeTabJsnObj); 
		   
	}catch(Exception ex){
		logger.error("",ex);
		
	}
	
		return retValues;
	}



private JSONArray saveInstantWlthGls(HttpServletRequest request) {
		// TODO Auto-generated method stub
	logger.info(" ------> Inside  saveInstantWlthGls Method ");
	JSONArray retValues = new JSONArray();
	 
	JSONObject clfeDataJsnObj = new JSONObject();
	JSONObject clfeTabJsnObj =  new JSONObject();
	JSONArray clfeDataJsnArr = new JSONArray();
	
 
	ClientService serv=new ClientService();  
	ClientDB clientDB = new ClientDB();
//	ClientController clientCtrl=new ClientController();
	try{
		
		ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext(); 
		DBInterfaceImpl dao = (DBInterfaceImpl)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
		HttpSession session = request.getSession(false);
		Map<String,String> sessMap = new HashMap<String,String>();
		sessMap = (HashMap<String, String>)session.getAttribute(FipaConstant.LOGGED_USER_INFO);
		
		String strLoggedUser = (String)sessMap.get(FipaConstant.LOGGED_USER_ID);
		
		String strSaveFor = FipaUtils.getParamValue(request, "txtFldSaveFor");
		strSaveFor = java.net.URLDecoder.decode(strSaveFor,"UTF-8");
		strSaveFor= strSaveFor.replace("\'", "\''");
		
		String strFnaId = FipaUtils.getParamValue(request, "fnaId");
		strFnaId = java.net.URLDecoder.decode(strFnaId,"UTF-8");
		strFnaId= strFnaId.replace("\'", "\''");
		
		 Map<String,Object> objMapping  = new HashMap();
		 objMapping = FipaUtils.getRequestMapping(request);//bean
		
		if(strSaveFor.equals("WLTH_GOALS")){
			Vector vectWlthGlsDetails      =  serv.getSavingsInvDetails(request);
			String wlthglsId= clientDB.saveSAInvdetails(vectWlthGlsDetails,strFnaId); 
			clfeDataJsnObj.put("ID", wlthglsId);
			clfeDataJsnObj.put("CRTDBY", strLoggedUser);
			clfeDataJsnObj.put("CRTDDATE", new Date()); 
			clfeDataJsnArr.put(clfeDataJsnObj);
			clfeTabJsnObj.put("WLTHGLS_RECORD", clfeDataJsnArr); 
			
		}
	
		retValues.put(clfeTabJsnObj); 
		   
	}catch(Exception ex){
		logger.error("",ex);
		
	}
	
		return retValues;
	}



private JSONArray saveInstantDeptnt(HttpServletRequest request) {
		// TODO Auto-generated method stub
	logger.info(" ------> Inside  saveInstantDeptnt Method ");
	JSONArray retValues = new JSONArray();
	 
	JSONObject clfeDataJsnObj = new JSONObject();
	JSONObject clfeTabJsnObj =  new JSONObject();
	JSONArray clfeDataJsnArr = new JSONArray();
	
 
	ClientService serv=new ClientService();  
	ClientDB clientDB = new ClientDB();
//	ClientController clientCtrl=new ClientController();
	try{
		
		ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext(); 
		DBInterfaceImpl dao = (DBInterfaceImpl)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
		HttpSession session = request.getSession(false);
		Map<String,String> sessMap = new HashMap<String,String>();
		sessMap = (HashMap<String, String>)session.getAttribute(FipaConstant.LOGGED_USER_INFO);
		
		String strLoggedUser = (String)sessMap.get(FipaConstant.LOGGED_USER_ID);
		
		String strSaveFor = FipaUtils.getParamValue(request, "txtFldSaveFor");
		strSaveFor = java.net.URLDecoder.decode(strSaveFor,"UTF-8");
		strSaveFor= strSaveFor.replace("\'", "\''");
		
		String strFnaId = FipaUtils.getParamValue(request, "fnaId");
		strFnaId = java.net.URLDecoder.decode(strFnaId,"UTF-8");
		strFnaId= strFnaId.replace("\'", "\''");
		
		 Map<String,Object> objMapping  = new HashMap();
		 objMapping = FipaUtils.getRequestMapping(request);//bean
		
		if(strSaveFor.equals("DEPNT")){
			Vector vectDepntDetails      =  serv.getDependentDetails(request);
			String strDepId= clientDB.saveDepdetails(vectDepntDetails,strFnaId); 
			clfeDataJsnObj.put("ID", strDepId);
			clfeDataJsnObj.put("CRTDBY", strLoggedUser);
			clfeDataJsnObj.put("CRTDDATE", new Date()); 
			clfeDataJsnArr.put(clfeDataJsnObj);
			clfeTabJsnObj.put("DEPNT_RECORD", clfeDataJsnArr); 
			
		}
	
		retValues.put(clfeTabJsnObj); 
		   
	}catch(Exception ex){
		logger.error("",ex);
		
	}
	
		return retValues;
	}
 
private JSONArray saveInstantCpfAddDedt(HttpServletRequest request) {
		// TODO Auto-generated method stub
	logger.info(" ------> Inside  saveInstantCpfAddDedt Method ");
	JSONArray retValues = new JSONArray();
	 
	JSONObject clfeDataJsnObj = new JSONObject();
	JSONObject clfeTabJsnObj =  new JSONObject();
	JSONArray clfeDataJsnArr = new JSONArray();
	
 
	ClientService serv=new ClientService();  
	ClientDB clientDB = new ClientDB();
//	ClientController clientCtrl=new ClientController();
	try{
		
		ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext(); 
		DBInterfaceImpl dao = (DBInterfaceImpl)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
		HttpSession session = request.getSession(false);
		Map<String,String> sessMap = new HashMap<String,String>();
		sessMap = (HashMap<String, String>)session.getAttribute(FipaConstant.LOGGED_USER_INFO);
		
		String strLoggedUser = (String)sessMap.get(FipaConstant.LOGGED_USER_ID);
		
		String strSaveFor = FipaUtils.getParamValue(request, "txtFldSaveFor");
		strSaveFor = java.net.URLDecoder.decode(strSaveFor,"UTF-8");
		strSaveFor= strSaveFor.replace("\'", "\''");
		
		String strFnaId = FipaUtils.getParamValue(request, "fnaId");
		strFnaId = java.net.URLDecoder.decode(strFnaId,"UTF-8");
		strFnaId= strFnaId.replace("\'", "\''");
		
		 Map<String,Object> objMapping  = new HashMap();
		 objMapping = FipaUtils.getRequestMapping(request);//bean
		
		if(strSaveFor.equals("CPFADD")){
			Vector vectDetails      =  serv.getCPFAddtnDedtnDetails(request);
			String CADId= clientDB.saveCADdetails(vectDetails,strFnaId); 
			clfeDataJsnObj.put("ID", CADId);
			clfeDataJsnObj.put("CRTDBY", strLoggedUser);
			clfeDataJsnObj.put("CRTDDATE", new Date()); 
			clfeDataJsnArr.put(clfeDataJsnObj);
			clfeTabJsnObj.put("CPFADD_RECORD", clfeDataJsnArr); 
			
		}
	
		retValues.put(clfeTabJsnObj); 
		   
	}catch(Exception ex){
		logger.error("",ex);
		
	}
	
		return retValues;
	}




private JSONArray saveInstantArOfCon(HttpServletRequest request) {
		// TODO Auto-generated method stub
	logger.info(" ------> Inside  saveInstantArOfCon Method ");
	JSONArray retValues = new JSONArray();
	 
	JSONObject clfeDataJsnObj = new JSONObject();
	JSONObject clfeTabJsnObj =  new JSONObject();
	JSONArray clfeDataJsnArr = new JSONArray();
	
 
	ClientService serv=new ClientService();  
	ClientDB clientDB = new ClientDB();
//	ClientController clientCtrl=new ClientController();
	try{
		
		ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext(); 
		DBInterfaceImpl dao = (DBInterfaceImpl)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
		HttpSession session = request.getSession(false);
		Map<String,String> sessMap = new HashMap<String,String>();
		sessMap = (HashMap<String, String>)session.getAttribute(FipaConstant.LOGGED_USER_INFO);
		
		String strLoggedUser = (String)sessMap.get(FipaConstant.LOGGED_USER_ID);
		
		String strSaveFor = FipaUtils.getParamValue(request, "txtFldSaveFor");
		strSaveFor = java.net.URLDecoder.decode(strSaveFor,"UTF-8");
		strSaveFor= strSaveFor.replace("\'", "\''");
		
		String strFnaId = FipaUtils.getParamValue(request, "fnaId");
		strFnaId = java.net.URLDecoder.decode(strFnaId,"UTF-8");
		strFnaId= strFnaId.replace("\'", "\''");
		
		 Map<String,Object> objMapping  = new HashMap();
		 objMapping = FipaUtils.getRequestMapping(request);//bean
		
		if(strSaveFor.equals("AROFCON")){
			Vector vectArOfConDetails      =  serv.getOthAreaConrnDetails(request);
			String OthArofcnId= clientDB.saveOthArOfCnDetails(vectArOfConDetails,strFnaId); 
			clfeDataJsnObj.put("ID", OthArofcnId);
			clfeDataJsnObj.put("CRTDBY", strLoggedUser);
			clfeDataJsnObj.put("CRTDDATE", new Date()); 
			clfeDataJsnArr.put(clfeDataJsnObj);
			clfeTabJsnObj.put("AROFCON_RECORD", clfeDataJsnArr); 
			
		}
	
		retValues.put(clfeTabJsnObj); 
		   
	}catch(Exception ex){
		logger.error("",ex);
		
	}
	
		return retValues;
	}




private JSONArray saveInstantPersAsset(HttpServletRequest request) {
	// TODO Auto-generated method stub
logger.info(" ------> Inside  saveInstantPersAsset Method ");
JSONArray retValues = new JSONArray();
 
JSONObject clfeDataJsnObj = new JSONObject();
JSONObject clfeTabJsnObj =  new JSONObject();
JSONArray clfeDataJsnArr = new JSONArray();


ClientService serv=new ClientService();  
ClientDB clientDB = new ClientDB();
//ClientController clientCtrl=new ClientController();
try{
	
	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext(); 
	DBInterfaceImpl dao = (DBInterfaceImpl)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
	HttpSession session = request.getSession(false);
	Map<String,String> sessMap = new HashMap<String,String>();
	sessMap = (HashMap<String, String>)session.getAttribute(FipaConstant.LOGGED_USER_INFO);
	
	String strLoggedUser = (String)sessMap.get(FipaConstant.LOGGED_USER_ID);
	
	String strSaveFor = FipaUtils.getParamValue(request, "txtFldSaveFor");
	strSaveFor = java.net.URLDecoder.decode(strSaveFor,"UTF-8");
	strSaveFor= strSaveFor.replace("\'", "\''");
	
	String strFnaId = FipaUtils.getParamValue(request, "fnaId");
	strFnaId = java.net.URLDecoder.decode(strFnaId,"UTF-8");
	strFnaId= strFnaId.replace("\'", "\''");
	
	 Map<String,Object> objMapping  = new HashMap();
	 objMapping = FipaUtils.getRequestMapping(request);//bean
	
	if(strSaveFor.equals("PERSASST")){
		Vector vectPersAssetDetails      =  serv.getAssetDetails(request);
		String strAssetsId= clientDB.saveAssetsDetails(vectPersAssetDetails,strFnaId); 
		clfeDataJsnObj.put("ID", strAssetsId);
		clfeDataJsnObj.put("CRTDBY", strLoggedUser);
		clfeDataJsnObj.put("CRTDDATE", new Date()); 
		clfeDataJsnArr.put(clfeDataJsnObj);
		clfeTabJsnObj.put("PERSASST_RECORD", clfeDataJsnArr); 
		
	}

	retValues.put(clfeTabJsnObj); 
	   
}catch(Exception ex){
	logger.error("",ex);
	
}

	return retValues;
}

private JSONArray saveInstantBuisAsset(HttpServletRequest request) {
	// TODO Auto-generated method stub
logger.info(" ------> Inside  saveInstantBuisAsset Method ");
JSONArray retValues = new JSONArray();
 
JSONObject clfeDataJsnObj = new JSONObject();
JSONObject clfeTabJsnObj =  new JSONObject();
JSONArray clfeDataJsnArr = new JSONArray();


ClientService serv=new ClientService();  
ClientDB clientDB = new ClientDB();
//ClientController clientCtrl=new ClientController();
try{
	
	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext(); 
	DBInterfaceImpl dao = (DBInterfaceImpl)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
	HttpSession session = request.getSession(false);
	Map<String,String> sessMap = new HashMap<String,String>();
	sessMap = (HashMap<String, String>)session.getAttribute(FipaConstant.LOGGED_USER_INFO);
	
	String strLoggedUser = (String)sessMap.get(FipaConstant.LOGGED_USER_ID);
	
	String strSaveFor = FipaUtils.getParamValue(request, "txtFldSaveFor");
	strSaveFor = java.net.URLDecoder.decode(strSaveFor,"UTF-8");
	strSaveFor= strSaveFor.replace("\'", "\''");
	
	String strFnaId = FipaUtils.getParamValue(request, "fnaId");
	strFnaId = java.net.URLDecoder.decode(strFnaId,"UTF-8");
	strFnaId= strFnaId.replace("\'", "\''");
	
	 Map<String,Object> objMapping  = new HashMap();
	 objMapping = FipaUtils.getRequestMapping(request);//bean
	
	if(strSaveFor.equals("BUSIASST")){
		Vector vectBusiAssetDetails      =  serv.getAssetDetails(request);
		String strAssetsId= clientDB.saveAssetsDetails(vectBusiAssetDetails,strFnaId); 
		clfeDataJsnObj.put("ID", strAssetsId);
		clfeDataJsnObj.put("CRTDBY", strLoggedUser);
		clfeDataJsnObj.put("CRTDDATE", new Date()); 
		clfeDataJsnArr.put(clfeDataJsnObj);
		clfeTabJsnObj.put("BUSIASST_RECORD", clfeDataJsnArr); 
		
	}

	retValues.put(clfeTabJsnObj); 
	   
}catch(Exception ex){
	logger.error("",ex);
	
}

	return retValues;
}





private JSONArray saveInstantVehOwner(HttpServletRequest request) {
	// TODO Auto-generated method stub
logger.info(" ------> Inside  saveInstantVehOwner Method ");
JSONArray retValues = new JSONArray();
 
JSONObject clfeDataJsnObj = new JSONObject();
JSONObject clfeTabJsnObj =  new JSONObject();
JSONArray clfeDataJsnArr = new JSONArray();


ClientService serv=new ClientService();  
ClientDB clientDB = new ClientDB();
//ClientController clientCtrl=new ClientController();
try{
	
	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext(); 
	DBInterfaceImpl dao = (DBInterfaceImpl)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
	HttpSession session = request.getSession(false);
	Map<String,String> sessMap = new HashMap<String,String>();
	sessMap = (HashMap<String, String>)session.getAttribute(FipaConstant.LOGGED_USER_INFO);
	
	String strLoggedUser = (String)sessMap.get(FipaConstant.LOGGED_USER_ID);
	
	String strSaveFor = FipaUtils.getParamValue(request, "txtFldSaveFor");
	strSaveFor = java.net.URLDecoder.decode(strSaveFor,"UTF-8");
	strSaveFor= strSaveFor.replace("\'", "\''");
	
	String strFnaId = FipaUtils.getParamValue(request, "fnaId");
	strFnaId = java.net.URLDecoder.decode(strFnaId,"UTF-8");
	strFnaId= strFnaId.replace("\'", "\''");
	
	 Map<String,Object> objMapping  = new HashMap();
	 objMapping = FipaUtils.getRequestMapping(request);//bean
	
	if(strSaveFor.equals("VEHOWN")){
		Vector vectBusiAssetDetails      =  serv.getVehOwnDetails(request);
		String vehownId= clientDB.saveVehOwndetails(vectBusiAssetDetails,strFnaId); 
		clfeDataJsnObj.put("ID", vehownId);
		clfeDataJsnObj.put("CRTDBY", strLoggedUser);
		clfeDataJsnObj.put("CRTDDATE", new Date()); 
		clfeDataJsnArr.put(clfeDataJsnObj);
		clfeTabJsnObj.put("VEHOWN_RECORD", clfeDataJsnArr); 
		
	}

	retValues.put(clfeTabJsnObj); 
	   
}catch(Exception ex){
	logger.error("",ex);
	
}

	return retValues;
}
 
 
private JSONArray saveInstantCob(HttpServletRequest request) {
	// TODO Auto-generated method stub
logger.info(" ------> Inside  saveInstantCob Method ");
JSONArray retValues = new JSONArray();
 
JSONObject clfeDataJsnObj = new JSONObject();
JSONObject clfeTabJsnObj =  new JSONObject();
JSONArray clfeDataJsnArr = new JSONArray();


ClientService serv=new ClientService();  
ClientDB clientDB = new ClientDB();
//ClientController clientCtrl=new ClientController();
try{
	
	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext(); 
	DBInterfaceImpl dao = (DBInterfaceImpl)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
	HttpSession session = request.getSession(false);
	Map<String,String> sessMap = new HashMap<String,String>();
	sessMap = (HashMap<String, String>)session.getAttribute(FipaConstant.LOGGED_USER_INFO);
	
	String strLoggedUser = (String)sessMap.get(FipaConstant.LOGGED_USER_ID);
	
	String strSaveFor = FipaUtils.getParamValue(request, "txtFldSaveFor");
	strSaveFor = java.net.URLDecoder.decode(strSaveFor,"UTF-8");
	strSaveFor= strSaveFor.replace("\'", "\''");
	
	String strFnaId = FipaUtils.getParamValue(request, "fnaId");
	strFnaId = java.net.URLDecoder.decode(strFnaId,"UTF-8");
	strFnaId= strFnaId.replace("\'", "\''");
	
	 Map<String,Object> objMapping  = new HashMap();
	 objMapping = FipaUtils.getRequestMapping(request);//bean
	
	if(strSaveFor.equals("COB")){
		Vector vectDetails      =  serv.getCashOfBankDetails(request);
		String cashAtBankId= clientDB.saveCashAtBankdetails(vectDetails,strFnaId); 
		clfeDataJsnObj.put("ID", cashAtBankId);
		clfeDataJsnObj.put("CRTDBY", strLoggedUser);
		clfeDataJsnObj.put("CRTDDATE", new Date()); 
		clfeDataJsnArr.put(clfeDataJsnObj);
		clfeTabJsnObj.put("COB_RECORD", clfeDataJsnArr); 
		
	}

	retValues.put(clfeTabJsnObj); 
	   
}catch(Exception ex){
	logger.error("",ex);
	
}

	return retValues;
}



//<!--changes done 19/06/2019 -->
private JSONArray saveInstantSrs(HttpServletRequest request) {
	// TODO Auto-generated method stub
logger.info(" ------> Inside  saveInstantSrs Method ");
JSONArray retValues = new JSONArray();
 
JSONObject clfeDataJsnObj = new JSONObject();
JSONObject clfeTabJsnObj =  new JSONObject();
JSONArray clfeDataJsnArr = new JSONArray();


ClientService serv=new ClientService();  
ClientDB clientDB = new ClientDB();
//ClientController clientCtrl=new ClientController();
try{
	
	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext(); 
	DBInterfaceImpl dao = (DBInterfaceImpl)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
	HttpSession session = request.getSession(false);
	Map<String,String> sessMap = new HashMap<String,String>();
	sessMap = (HashMap<String, String>)session.getAttribute(FipaConstant.LOGGED_USER_INFO);
	
	String strLoggedUser = (String)sessMap.get(FipaConstant.LOGGED_USER_ID);
	
	String strSaveFor = FipaUtils.getParamValue(request, "txtFldSaveFor");
	strSaveFor = java.net.URLDecoder.decode(strSaveFor,"UTF-8");
	strSaveFor= strSaveFor.replace("\'", "\''");
	
	String strFnaId = FipaUtils.getParamValue(request, "fnaId");
	strFnaId = java.net.URLDecoder.decode(strFnaId,"UTF-8");
	strFnaId= strFnaId.replace("\'", "\''");
	
	 Map<String,Object> objMapping  = new HashMap();
	 objMapping = FipaUtils.getRequestMapping(request);//bean
	
	if(strSaveFor.equals("CASHSRS")){
		Vector vectDetails      =  serv.getSRSDetails(request);
		String cashAtBankId= clientDB.saveSRSDetails(vectDetails,strFnaId); 
		clfeDataJsnObj.put("ID", cashAtBankId);
		clfeDataJsnObj.put("CRTDBY", strLoggedUser);
		clfeDataJsnObj.put("CRTDDATE", new Date()); 
		clfeDataJsnArr.put(clfeDataJsnObj);
		clfeTabJsnObj.put("CASHSRS_RECORD", clfeDataJsnArr); 
		
	}

	retValues.put(clfeTabJsnObj); 
	   
}catch(Exception ex){
	logger.error("",ex);
	
}

	return retValues;
}

private JSONArray saveInstantCpfTransfer(HttpServletRequest request) {
	// TODO Auto-generated method stub
logger.info(" ------> Inside  saveInstantCpfTransfer Method ");
JSONArray retValues = new JSONArray();
 
JSONObject clfeDataJsnObj = new JSONObject();
JSONObject clfeTabJsnObj =  new JSONObject();
JSONArray clfeDataJsnArr = new JSONArray();


ClientService serv=new ClientService();  
ClientDB clientDB = new ClientDB();
//ClientController clientCtrl=new ClientController();
try{
	
	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext(); 
	DBInterfaceImpl dao = (DBInterfaceImpl)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
	HttpSession session = request.getSession(false);
	Map<String,String> sessMap = new HashMap<String,String>();
	sessMap = (HashMap<String, String>)session.getAttribute(FipaConstant.LOGGED_USER_INFO);
	
	String strLoggedUser = (String)sessMap.get(FipaConstant.LOGGED_USER_ID);
	
	String strSaveFor = FipaUtils.getParamValue(request, "txtFldSaveFor");
	strSaveFor = java.net.URLDecoder.decode(strSaveFor,"UTF-8");
	strSaveFor= strSaveFor.replace("\'", "\''");
	
	String strFnaId = FipaUtils.getParamValue(request, "fnaId");
	strFnaId = java.net.URLDecoder.decode(strFnaId,"UTF-8");
	strFnaId= strFnaId.replace("\'", "\''");
	
	 Map<String,Object> objMapping  = new HashMap();
	 objMapping = FipaUtils.getRequestMapping(request);//bean
	
	if(strSaveFor.equals("CPFTRANSFER")){
		Vector vectDetails      =  serv.getRetCpfLifeDetails(request);
		String strcpflfId= clientDB.saveRetCpfLifeDets(vectDetails,strFnaId); 
		clfeDataJsnObj.put("ID", strcpflfId); 
		clfeDataJsnArr.put(clfeDataJsnObj);
		clfeTabJsnObj.put("CPFTRANSFER_RECORD", clfeDataJsnArr);  
	}

	retValues.put(clfeTabJsnObj); 
	   
}catch(Exception ex){
	logger.error("",ex);
	
}

	return retValues;
}





private JSONArray saveInstantRetOthInc(HttpServletRequest request) {
	// TODO Auto-generated method stub
logger.info(" ------> Inside  saveInstantRetOthInc Method ");
JSONArray retValues = new JSONArray();
 
JSONObject clfeDataJsnObj = new JSONObject();
JSONObject clfeTabJsnObj =  new JSONObject();
JSONArray clfeDataJsnArr = new JSONArray();


ClientService serv=new ClientService();  
ClientDB clientDB = new ClientDB();
//ClientController clientCtrl=new ClientController();
try{
	
	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext(); 
	DBInterfaceImpl dao = (DBInterfaceImpl)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
	HttpSession session = request.getSession(false);
	Map<String,String> sessMap = new HashMap<String,String>();
	sessMap = (HashMap<String, String>)session.getAttribute(FipaConstant.LOGGED_USER_INFO);
	
	String strLoggedUser = (String)sessMap.get(FipaConstant.LOGGED_USER_ID);
	
	String strSaveFor = FipaUtils.getParamValue(request, "txtFldSaveFor");
	strSaveFor = java.net.URLDecoder.decode(strSaveFor,"UTF-8");
	strSaveFor= strSaveFor.replace("\'", "\''");
	
	String strFnaId = FipaUtils.getParamValue(request, "fnaId");
	strFnaId = java.net.URLDecoder.decode(strFnaId,"UTF-8");
	strFnaId= strFnaId.replace("\'", "\''");
	
	 Map<String,Object> objMapping  = new HashMap();
	 objMapping = FipaUtils.getRequestMapping(request);//bean
	
	if(strSaveFor.equals("OTHERINC")){
		Vector vectDetails      =  serv.getOthRetPlg(request);
		String strRdOthpayId= clientDB.saveRdOthPaymenttails(vectDetails,strFnaId); 
		clfeDataJsnObj.put("ID", strRdOthpayId);
		clfeDataJsnObj.put("CRTDBY", strLoggedUser);
		clfeDataJsnObj.put("CRTDDATE", new Date()); 
		clfeDataJsnArr.put(clfeDataJsnObj);
		clfeTabJsnObj.put("OTHERINC_RECORD", clfeDataJsnArr); 
		
	}

	retValues.put(clfeTabJsnObj); 
	   
}catch(Exception ex){
	logger.error("",ex);
	
}

	return retValues;
}



private JSONArray saveInstantRetIncRec(HttpServletRequest request) {
	// TODO Auto-generated method stub
logger.info(" ------> Inside  saveInstantRetIncRec Method ");
JSONArray retValues = new JSONArray();
 
JSONObject clfeDataJsnObj = new JSONObject();
JSONObject clfeTabJsnObj =  new JSONObject();
JSONArray clfeDataJsnArr = new JSONArray();


ClientService serv=new ClientService();  
ClientDB clientDB = new ClientDB();
//ClientController clientCtrl=new ClientController();
try{
	
	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext(); 
	DBInterfaceImpl dao = (DBInterfaceImpl)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
	HttpSession session = request.getSession(false);
	Map<String,String> sessMap = new HashMap<String,String>();
	sessMap = (HashMap<String, String>)session.getAttribute(FipaConstant.LOGGED_USER_INFO);
	
	String strLoggedUser = (String)sessMap.get(FipaConstant.LOGGED_USER_ID);
	
	String strSaveFor = FipaUtils.getParamValue(request, "txtFldSaveFor");
	strSaveFor = java.net.URLDecoder.decode(strSaveFor,"UTF-8");
	strSaveFor= strSaveFor.replace("\'", "\''");
	
	String strFnaId = FipaUtils.getParamValue(request, "fnaId");
	strFnaId = java.net.URLDecoder.decode(strFnaId,"UTF-8");
	strFnaId= strFnaId.replace("\'", "\''");
	
	 Map<String,Object> objMapping  = new HashMap();
	 objMapping = FipaUtils.getRequestMapping(request);//bean
	
	if(strSaveFor.equals("RETINCREV")){
		Vector vectDetails      =  serv.getIncRetPlg(request);
		String strRdIncpayId= clientDB.saveRdIncPaymenttails(vectDetails,strFnaId); 
		clfeDataJsnObj.put("ID", strRdIncpayId);
		clfeDataJsnObj.put("CRTDBY", strLoggedUser);
		clfeDataJsnObj.put("CRTDDATE", new Date()); 
		clfeDataJsnArr.put(clfeDataJsnObj);
		clfeTabJsnObj.put("RETINCREV_RECORD", clfeDataJsnArr); 
		 
	}

	retValues.put(clfeTabJsnObj); 
	   
}catch(Exception ex){
	logger.error("",ex);
	
}

	return retValues;
}



private JSONArray saveInstantRetIncAss(HttpServletRequest request) {
	// TODO Auto-generated method stub
logger.info(" ------> Inside  saveInstantRetIncAss Method ");
JSONArray retValues = new JSONArray();
 
JSONObject clfeDataJsnObj = new JSONObject();
JSONObject clfeTabJsnObj =  new JSONObject();
JSONArray clfeDataJsnArr = new JSONArray();


ClientService serv=new ClientService();  
ClientDB clientDB = new ClientDB();
//ClientController clientCtrl=new ClientController();
try{
	
	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext(); 
	DBInterfaceImpl dao = (DBInterfaceImpl)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
	HttpSession session = request.getSession(false);
	Map<String,String> sessMap = new HashMap<String,String>();
	sessMap = (HashMap<String, String>)session.getAttribute(FipaConstant.LOGGED_USER_INFO);
	
	String strLoggedUser = (String)sessMap.get(FipaConstant.LOGGED_USER_ID);
	
	String strSaveFor = FipaUtils.getParamValue(request, "txtFldSaveFor");
	strSaveFor = java.net.URLDecoder.decode(strSaveFor,"UTF-8");
	strSaveFor= strSaveFor.replace("\'", "\''");
	
	String strFnaId = FipaUtils.getParamValue(request, "fnaId");
	strFnaId = java.net.URLDecoder.decode(strFnaId,"UTF-8");
	strFnaId= strFnaId.replace("\'", "\''");
	
	 Map<String,Object> objMapping  = new HashMap();
	 objMapping = FipaUtils.getRequestMapping(request);//bean
	
	if(strSaveFor.equals("RETINCASSREV")){
		Vector vectDetails      =  serv.getIncRetPlg(request);
		String strRdIncpayId= clientDB.saveRdIncPaymenttails(vectDetails,strFnaId); 
		clfeDataJsnObj.put("ID", strRdIncpayId);
		clfeDataJsnObj.put("CRTDBY", strLoggedUser);
		clfeDataJsnObj.put("CRTDDATE", new Date()); 
		clfeDataJsnArr.put(clfeDataJsnObj);
		clfeTabJsnObj.put("RETINCASSREV_RECORD", clfeDataJsnArr); 
		
	}

	retValues.put(clfeTabJsnObj); 
	   
}catch(Exception ex){
	logger.error("",ex);
	
}

	return retValues;
}


private JSONArray saveInstantInvest(HttpServletRequest request) {
	// TODO Auto-generated method stub
logger.info(" ------> Inside  saveInstantInvest Method ");
JSONArray retValues = new JSONArray();
 
JSONObject clfeDataJsnObj = new JSONObject();
JSONObject clfeTabJsnObj =  new JSONObject();
JSONArray clfeDataJsnArr = new JSONArray();


ClientService serv=new ClientService();  
ClientDB clientDB = new ClientDB();
//ClientController clientCtrl=new ClientController();
try{
	
	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext(); 
	DBInterfaceImpl dao = (DBInterfaceImpl)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
	HttpSession session = request.getSession(false);
	Map<String,String> sessMap = new HashMap<String,String>();
	sessMap = (HashMap<String, String>)session.getAttribute(FipaConstant.LOGGED_USER_INFO);
	
	String strLoggedUser = (String)sessMap.get(FipaConstant.LOGGED_USER_ID);
	
	String strSaveFor = FipaUtils.getParamValue(request, "txtFldSaveFor");
	strSaveFor = java.net.URLDecoder.decode(strSaveFor,"UTF-8");
	strSaveFor= strSaveFor.replace("\'", "\''");
	
	String strFnaId = FipaUtils.getParamValue(request, "fnaId");
	strFnaId = java.net.URLDecoder.decode(strFnaId,"UTF-8");
	strFnaId= strFnaId.replace("\'", "\''");
	
	 Map<String,Object> objMapping  = new HashMap();
	 objMapping = FipaUtils.getRequestMapping(request);//bean
	
	if(strSaveFor.equals("INVEST")){
		Vector vectDetails      =  serv.getInputInvest(request);
		String strOwnInvstId= clientDB.saveInvstdetails(vectDetails,strFnaId); 
		clfeDataJsnObj.put("ID", strOwnInvstId);
		clfeDataJsnObj.put("CRTDBY", strLoggedUser);
		clfeDataJsnObj.put("CRTDDATE", new Date()); 
		clfeDataJsnArr.put(clfeDataJsnObj);
		clfeTabJsnObj.put("INVEST_RECORD", clfeDataJsnArr); 
		
	}

	retValues.put(clfeTabJsnObj);
	
	   
}catch(Exception ex){
	logger.error("",ex);
	
}

	return retValues;
}




private JSONArray saveInstantProp(HttpServletRequest request) {
	// TODO Auto-generated method stub
logger.info(" ------> Inside  saveInstantProp Method ");
JSONArray retValues = new JSONArray();
 
JSONObject clfeDataJsnObj = new JSONObject();
JSONObject clfeTabJsnObj =  new JSONObject();
JSONArray clfeDataJsnArr = new JSONArray();


ClientService serv=new ClientService();  
ClientDB clientDB = new ClientDB();
//ClientController clientCtrl=new ClientController();
try{
	
	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext(); 
	DBInterfaceImpl dao = (DBInterfaceImpl)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
	HttpSession session = request.getSession(false);
	Map<String,String> sessMap = new HashMap<String,String>();
	sessMap = (HashMap<String, String>)session.getAttribute(FipaConstant.LOGGED_USER_INFO);
	
	String strLoggedUser = (String)sessMap.get(FipaConstant.LOGGED_USER_ID);
	
	String strSaveFor = FipaUtils.getParamValue(request, "txtFldSaveFor");
	strSaveFor = java.net.URLDecoder.decode(strSaveFor,"UTF-8");
	strSaveFor= strSaveFor.replace("\'", "\''");
	
	String strFnaId = FipaUtils.getParamValue(request, "fnaId");
	strFnaId = java.net.URLDecoder.decode(strFnaId,"UTF-8");
	strFnaId= strFnaId.replace("\'", "\''");
	
	 Map<String,Object> objMapping  = new HashMap();
	 objMapping = FipaUtils.getRequestMapping(request);//bean
	
	if(strSaveFor.equals("PROP")){
		Vector vectDetails      =  serv.getPropOwnDetails(request);
		String propownId= clientDB.savePropOwndetails(vectDetails,strFnaId); 
		clfeDataJsnObj.put("ID", propownId);
		clfeDataJsnObj.put("CRTDBY", strLoggedUser);
		clfeDataJsnObj.put("CRTDDATE", new Date()); 
		clfeDataJsnArr.put(clfeDataJsnObj);
		clfeTabJsnObj.put("PROP_RECORD", clfeDataJsnArr); 
		
	}

	retValues.put(clfeTabJsnObj);
	
	   
}catch(Exception ex){
	logger.error("",ex);
	
}

	return retValues;
}





private JSONArray saveInstantBasPlan(HttpServletRequest request) {
	// TODO Auto-generated method stub
logger.info(" ------> Inside  saveInstantBasPlan Method ");
JSONArray retValues = new JSONArray();
 
JSONObject clfeDataJsnObj = new JSONObject();
JSONObject clfeTabJsnObj =  new JSONObject();
JSONArray clfeDataJsnArr = new JSONArray();


ClientService serv=new ClientService();  
ClientDB clientDB = new ClientDB();
//ClientController clientCtrl=new ClientController();
try{
	
	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext(); 
	DBInterfaceImpl dao = (DBInterfaceImpl)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
	HttpSession session = request.getSession(false);
	Map<String,String> sessMap = new HashMap<String,String>();
	sessMap = (HashMap<String, String>)session.getAttribute(FipaConstant.LOGGED_USER_INFO);
	
	String strLoggedUser = (String)sessMap.get(FipaConstant.LOGGED_USER_ID);
	
	String strSaveFor = FipaUtils.getParamValue(request, "txtFldSaveFor");
	strSaveFor = java.net.URLDecoder.decode(strSaveFor,"UTF-8");
	strSaveFor= strSaveFor.replace("\'", "\''");
	
	String strFnaId = FipaUtils.getParamValue(request, "fnaId");
	strFnaId = java.net.URLDecoder.decode(strFnaId,"UTF-8");
	strFnaId= strFnaId.replace("\'", "\''");
	
	String strLipId = FipaUtils.getParamValue(request, "lipId");
	strLipId = java.net.URLDecoder.decode(strLipId,"UTF-8");
	strLipId= strLipId.replace("\'", "\''");
	
	
	 Map<String,Object> objMapping  = new HashMap();
	 objMapping = FipaUtils.getRequestMapping(request);//bean
	
	if(strSaveFor.equals("BASPLAN")){
		Vector vectDetails  =  serv.getliPlnProDetails(request);
		String PlnId = clientDB.savePlnProdetails(vectDetails,strFnaId,strLipId); 
		clfeDataJsnObj.put("ID", PlnId);
		clfeDataJsnObj.put("CRTDBY", strLoggedUser);
		clfeDataJsnObj.put("CRTDDATE", new Date()); 
		clfeDataJsnArr.put(clfeDataJsnObj);
		clfeTabJsnObj.put("BASPLAN_RECORD", clfeDataJsnArr); 
		
	}

	retValues.put(clfeTabJsnObj);
	
	   
}catch(Exception ex){
	logger.error("",ex);
	
}

	return retValues;
}




private JSONArray saveInstantRidPlan(HttpServletRequest request) {
	// TODO Auto-generated method stub
logger.info(" ------> Inside  saveInstantRidPlan Method ");
JSONArray retValues = new JSONArray();
 
JSONObject clfeDataJsnObj = new JSONObject();
JSONObject clfeTabJsnObj =  new JSONObject();
JSONArray clfeDataJsnArr = new JSONArray();


ClientService serv=new ClientService();  
ClientDB clientDB = new ClientDB();
//ClientController clientCtrl=new ClientController();
try{
	
	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext(); 
	DBInterfaceImpl dao = (DBInterfaceImpl)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
	HttpSession session = request.getSession(false);
	Map<String,String> sessMap = new HashMap<String,String>();
	sessMap = (HashMap<String, String>)session.getAttribute(FipaConstant.LOGGED_USER_INFO);
	
	String strLoggedUser = (String)sessMap.get(FipaConstant.LOGGED_USER_ID);
	
	String strSaveFor = FipaUtils.getParamValue(request, "txtFldSaveFor");
	strSaveFor = java.net.URLDecoder.decode(strSaveFor,"UTF-8");
	strSaveFor= strSaveFor.replace("\'", "\''");
	
	String strFnaId = FipaUtils.getParamValue(request, "fnaId");
	strFnaId = java.net.URLDecoder.decode(strFnaId,"UTF-8");
	strFnaId= strFnaId.replace("\'", "\''");
	
	String strLipId = FipaUtils.getParamValue(request, "lipId");
	strLipId = java.net.URLDecoder.decode(strLipId,"UTF-8");
	strLipId= strLipId.replace("\'", "\''");
	
	
	 Map<String,Object> objMapping  = new HashMap();
	 objMapping = FipaUtils.getRequestMapping(request);//bean
	
	if(strSaveFor.equals("RIDPLAN")){
		Vector vectDetails  =  serv.getliPlnProDetails(request);
		String PlnId = clientDB.savePlnProdetails(vectDetails,strFnaId,strLipId); 
		clfeDataJsnObj.put("ID", PlnId);
		clfeDataJsnObj.put("CRTDBY", strLoggedUser);
		clfeDataJsnObj.put("CRTDDATE", new Date()); 
		clfeDataJsnArr.put(clfeDataJsnObj);
		clfeTabJsnObj.put("RIDPLAN_RECORD", clfeDataJsnArr); 
		
	}

	retValues.put(clfeTabJsnObj);
	
	   
}catch(Exception ex){
	logger.error("",ex);
	
}

	return retValues;
}



private JSONArray saveInstantlfDthbfPlan(HttpServletRequest request) {
	// TODO Auto-generated method stub
logger.info(" ------> Inside  saveInstantlfDthbfPlan Method ");
JSONArray retValues = new JSONArray();
 
JSONObject clfeDataJsnObj = new JSONObject();
JSONObject clfeTabJsnObj =  new JSONObject();
JSONArray clfeDataJsnArr = new JSONArray();


ClientService serv=new ClientService();  
ClientDB clientDB = new ClientDB();
//ClientController clientCtrl=new ClientController();
try{
	
	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext(); 
	DBInterfaceImpl dao = (DBInterfaceImpl)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
	HttpSession session = request.getSession(false);
	Map<String,String> sessMap = new HashMap<String,String>();
	sessMap = (HashMap<String, String>)session.getAttribute(FipaConstant.LOGGED_USER_INFO);
	
	String strLoggedUser = (String)sessMap.get(FipaConstant.LOGGED_USER_ID);
	
	String strSaveFor = FipaUtils.getParamValue(request, "txtFldSaveFor");
	strSaveFor = java.net.URLDecoder.decode(strSaveFor,"UTF-8");
	strSaveFor= strSaveFor.replace("\'", "\''");
	
	String strFnaId = FipaUtils.getParamValue(request, "fnaId");
	strFnaId = java.net.URLDecoder.decode(strFnaId,"UTF-8");
	strFnaId= strFnaId.replace("\'", "\''");
	
	String strLipId = FipaUtils.getParamValue(request, "lipId");
	strLipId = java.net.URLDecoder.decode(strLipId,"UTF-8");
	strLipId= strLipId.replace("\'", "\''");
	
	
	 Map<String,Object> objMapping  = new HashMap();
	 objMapping = FipaUtils.getRequestMapping(request);//bean
	
	if(strSaveFor.equals("DEATHBF")){
//		Vector vectDetails  =  serv.getLifeInsCovrgeDetails(request);
//		String lifeInsCovrId = clientDB.saveLifeInsCoverageDetails(vectDetails,strFnaId,strLipId); 
//		clfeDataJsnObj.put("ID", lifeInsCovrId);
//		clfeDataJsnObj.put("CRTDBY", strLoggedUser);
//		clfeDataJsnObj.put("CRTDDATE", new Date()); 
//		clfeDataJsnArr.put(clfeDataJsnObj);
//		clfeTabJsnObj.put("DEATHBF_RECORD", clfeDataJsnArr); 
		
	}

	retValues.put(clfeTabJsnObj);
	
	   
}catch(Exception ex){
	logger.error("",ex);
	
}

	return retValues;
}


private JSONArray saveInstantlfCrtlsPlan(HttpServletRequest request) {
	// TODO Auto-generated method stub
logger.info(" ------> Inside  saveInstantlfCrtlsPlan Method ");
JSONArray retValues = new JSONArray();
 
JSONObject clfeDataJsnObj = new JSONObject();
JSONObject clfeTabJsnObj =  new JSONObject();
JSONArray clfeDataJsnArr = new JSONArray();


ClientService serv=new ClientService();  
ClientDB clientDB = new ClientDB();
//ClientController clientCtrl=new ClientController();
try{
	
	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext(); 
	DBInterfaceImpl dao = (DBInterfaceImpl)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
	HttpSession session = request.getSession(false);
	Map<String,String> sessMap = new HashMap<String,String>();
	sessMap = (HashMap<String, String>)session.getAttribute(FipaConstant.LOGGED_USER_INFO);
	
	String strLoggedUser = (String)sessMap.get(FipaConstant.LOGGED_USER_ID);
	
	String strSaveFor = FipaUtils.getParamValue(request, "txtFldSaveFor");
	strSaveFor = java.net.URLDecoder.decode(strSaveFor,"UTF-8");
	strSaveFor= strSaveFor.replace("\'", "\''");
	
	String strFnaId = FipaUtils.getParamValue(request, "fnaId");
	strFnaId = java.net.URLDecoder.decode(strFnaId,"UTF-8");
	strFnaId= strFnaId.replace("\'", "\''");
	
	String strLipId = FipaUtils.getParamValue(request, "lipId");
	strLipId = java.net.URLDecoder.decode(strLipId,"UTF-8");
	strLipId= strLipId.replace("\'", "\''");
	
	
	 Map<String,Object> objMapping  = new HashMap();
	 objMapping = FipaUtils.getRequestMapping(request);//bean
	
	if(strSaveFor.equals("CRTLS")){
//		Vector vectDetails  =  serv.getLifeInsCovrgeDetails(request);
//		String lifeInsCovrId = clientDB.saveLifeInsCoverageDetails(vectDetails,strFnaId,strLipId); 
//		clfeDataJsnObj.put("ID", lifeInsCovrId);
//		clfeDataJsnObj.put("CRTDBY", strLoggedUser);
//		clfeDataJsnObj.put("CRTDDATE", new Date()); 
//		clfeDataJsnArr.put(clfeDataJsnObj);
//		clfeTabJsnObj.put("CRTLS_RECORD", clfeDataJsnArr); 
		
	}

	retValues.put(clfeTabJsnObj);
	
	   
}catch(Exception ex){
	logger.error("",ex);
	
}

	return retValues;
}





private JSONArray saveInstantlfHospPlan(HttpServletRequest request) {
	// TODO Auto-generated method stub
logger.info(" ------> Inside  saveInstantlfHospPlan Method ");
JSONArray retValues = new JSONArray();
 
JSONObject clfeDataJsnObj = new JSONObject();
JSONObject clfeTabJsnObj =  new JSONObject();
JSONArray clfeDataJsnArr = new JSONArray();


ClientService serv=new ClientService();  
ClientDB clientDB = new ClientDB();
try{
	
	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext(); 
	DBInterfaceImpl dao = (DBInterfaceImpl)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
	HttpSession session = request.getSession(false);
	Map<String,String> sessMap = new HashMap<String,String>();
	sessMap = (HashMap<String, String>)session.getAttribute(FipaConstant.LOGGED_USER_INFO);
	
	String strLoggedUser = (String)sessMap.get(FipaConstant.LOGGED_USER_ID);
	
	String strSaveFor = FipaUtils.getParamValue(request, "txtFldSaveFor");
	strSaveFor = java.net.URLDecoder.decode(strSaveFor,"UTF-8");
	strSaveFor= strSaveFor.replace("\'", "\''");
	
	String strFnaId = FipaUtils.getParamValue(request, "fnaId");
	strFnaId = java.net.URLDecoder.decode(strFnaId,"UTF-8");
	strFnaId= strFnaId.replace("\'", "\''");
	
	String strLipId = FipaUtils.getParamValue(request, "lipId");
	strLipId = java.net.URLDecoder.decode(strLipId,"UTF-8");
	strLipId= strLipId.replace("\'", "\''");
	
	
	 Map<String,Object> objMapping  = new HashMap();
	 objMapping = FipaUtils.getRequestMapping(request);//bean
	
	if(strSaveFor.equals("HOSP")){
//		Vector vectDetails  =  serv.getLifeInsCovrgeDetails(request);
//		String lifeInsCovrId = clientDB.saveLifeInsCoverageDetails(vectDetails,strFnaId,strLipId); 
//		clfeDataJsnObj.put("ID", lifeInsCovrId);
//		clfeDataJsnObj.put("CRTDBY", strLoggedUser);
//		clfeDataJsnObj.put("CRTDDATE", new Date()); 
//		clfeDataJsnArr.put(clfeDataJsnObj);
//		clfeTabJsnObj.put("HOSP_RECORD", clfeDataJsnArr); 
		
	}

	retValues.put(clfeTabJsnObj);
	
	   
}catch(Exception ex){
	logger.error("",ex);
	
}

	return retValues;
}




private JSONArray saveInstantlfDsblityPlan(HttpServletRequest request) {
	// TODO Auto-generated method stub
logger.info(" ------> Inside  saveInstantlfDsblityPlan Method ");
JSONArray retValues = new JSONArray();
 
JSONObject clfeDataJsnObj = new JSONObject();
JSONObject clfeTabJsnObj =  new JSONObject();
JSONArray clfeDataJsnArr = new JSONArray();


ClientService serv=new ClientService();  
ClientDB clientDB = new ClientDB();
//ClientController serv=new ClientController();
try{
	
	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext(); 
	DBInterfaceImpl dao = (DBInterfaceImpl)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
	HttpSession session = request.getSession(false);
	Map<String,String> sessMap = new HashMap<String,String>();
	sessMap = (HashMap<String, String>)session.getAttribute(FipaConstant.LOGGED_USER_INFO);
	
	String strLoggedUser = (String)sessMap.get(FipaConstant.LOGGED_USER_ID);
	
	String strSaveFor = FipaUtils.getParamValue(request, "txtFldSaveFor");
	strSaveFor = java.net.URLDecoder.decode(strSaveFor,"UTF-8");
	strSaveFor= strSaveFor.replace("\'", "\''");
	
	String strFnaId = FipaUtils.getParamValue(request, "fnaId");
	strFnaId = java.net.URLDecoder.decode(strFnaId,"UTF-8");
	strFnaId= strFnaId.replace("\'", "\''");
	
	String strLipId = FipaUtils.getParamValue(request, "lipId");
	strLipId = java.net.URLDecoder.decode(strLipId,"UTF-8");
	strLipId= strLipId.replace("\'", "\''");
	
	
	 Map<String,Object> objMapping  = new HashMap();
	 objMapping = FipaUtils.getRequestMapping(request);//bean
	
	if(strSaveFor.equals("DISABLITY")){
		Vector vectDetails  =  serv.getLiBenefitsDetails(request);
		String lifeInsCovrId = clientDB.saveBenefdetails(vectDetails,strFnaId,strLipId); 
		clfeDataJsnObj.put("ID", lifeInsCovrId);
		clfeDataJsnObj.put("CRTDBY", strLoggedUser);
		clfeDataJsnObj.put("CRTDDATE", new Date()); 
		clfeDataJsnArr.put(clfeDataJsnObj);
		clfeTabJsnObj.put("DISABLITY_RECORD", clfeDataJsnArr); 
		
	}

	retValues.put(clfeTabJsnObj);
	
	   
}catch(Exception ex){
	logger.error("",ex);
	
}

	return retValues;
}



private JSONArray saveInstantlfRetPlan(HttpServletRequest request) {
			
			// TODO Auto-generated method stub
		logger.info(" ------> Inside  saveInstantlfRetPlan Method ");
		JSONArray retValues = new JSONArray();
		 
		JSONObject clfeDataJsnObj = new JSONObject();
		JSONObject clfeTabJsnObj =  new JSONObject();
		JSONArray clfeDataJsnArr = new JSONArray();
		
		
		ClientService serv=new ClientService();  
		ClientDB clientDB = new ClientDB();
		//ClientController clientCtrl=new ClientController();
		try{
			
			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext(); 
			DBInterfaceImpl dao = (DBInterfaceImpl)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
			HttpSession session = request.getSession(false);
			Map<String,String> sessMap = new HashMap<String,String>();
			sessMap = (HashMap<String, String>)session.getAttribute(FipaConstant.LOGGED_USER_INFO);
			
			String strLoggedUser = (String)sessMap.get(FipaConstant.LOGGED_USER_ID);
			
			String strSaveFor = FipaUtils.getParamValue(request, "txtFldSaveFor");
			strSaveFor = java.net.URLDecoder.decode(strSaveFor,"UTF-8");
			strSaveFor= strSaveFor.replace("\'", "\''");
			
			String strFnaId = FipaUtils.getParamValue(request, "fnaId");
			strFnaId = java.net.URLDecoder.decode(strFnaId,"UTF-8");
			strFnaId= strFnaId.replace("\'", "\''");
			
			String strLipId = FipaUtils.getParamValue(request, "lipId");
			strLipId = java.net.URLDecoder.decode(strLipId,"UTF-8");
			strLipId= strLipId.replace("\'", "\''");
			
			
			 Map<String,Object> objMapping  = new HashMap();
			 objMapping = FipaUtils.getRequestMapping(request);//bean
			
			if(strSaveFor.equals("LIFERET")){
				Vector vectDetails  =  serv.getliMvRetDetails(request);
				String retPlgId = clientDB.saveRetPlgdetails(vectDetails,strFnaId,strLipId); 
				clfeDataJsnObj.put("ID", retPlgId);
				clfeDataJsnObj.put("CRTDBY", strLoggedUser);
				clfeDataJsnObj.put("CRTDDATE", new Date()); 
				clfeDataJsnArr.put(clfeDataJsnObj);
				clfeTabJsnObj.put("LIFERET_RECORD", clfeDataJsnArr); 
				
			}
		
			retValues.put(clfeTabJsnObj);
			
			   
		}catch(Exception ex){
			logger.error("",ex);
			
		}

	return retValues;
}



private JSONArray saveInstantlfEduPlan(HttpServletRequest request) {
	
			// TODO Auto-generated method stub
		logger.info(" ------> Inside  saveInstantlfEduPlan Method ");
		JSONArray retValues = new JSONArray();
		 
		JSONObject clfeDataJsnObj = new JSONObject();
		JSONObject clfeTabJsnObj =  new JSONObject();
		JSONArray clfeDataJsnArr = new JSONArray();
		
		
		ClientService serv=new ClientService();  
		ClientDB clientDB = new ClientDB();
		//ClientController clientCtrl=new ClientController();
		try{
			
			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext(); 
			DBInterfaceImpl dao = (DBInterfaceImpl)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
			HttpSession session = request.getSession(false);
			Map<String,String> sessMap = new HashMap<String,String>();
			sessMap = (HashMap<String, String>)session.getAttribute(FipaConstant.LOGGED_USER_INFO);
			
			String strLoggedUser = (String)sessMap.get(FipaConstant.LOGGED_USER_ID);
			
			String strSaveFor = FipaUtils.getParamValue(request, "txtFldSaveFor");
			strSaveFor = java.net.URLDecoder.decode(strSaveFor,"UTF-8");
			strSaveFor= strSaveFor.replace("\'", "\''");
			
			String strFnaId = FipaUtils.getParamValue(request, "fnaId");
			strFnaId = java.net.URLDecoder.decode(strFnaId,"UTF-8");
			strFnaId= strFnaId.replace("\'", "\''");
			
			String strLipId = FipaUtils.getParamValue(request, "lipId");
			strLipId = java.net.URLDecoder.decode(strLipId,"UTF-8");
			strLipId= strLipId.replace("\'", "\''");
			
			
			 Map<String,Object> objMapping  = new HashMap();
			 objMapping = FipaUtils.getRequestMapping(request);//bean
			
			if(strSaveFor.equals("EDUPLG")){
				Vector vectDetails  =  serv.getliChildDets(request);
				String eduPlgId = clientDB.saveEduPlgdetails(vectDetails,strFnaId,strLipId); 
				clfeDataJsnObj.put("ID", eduPlgId);
				clfeDataJsnObj.put("CRTDBY", strLoggedUser);
				clfeDataJsnObj.put("CRTDDATE", new Date()); 
				clfeDataJsnArr.put(clfeDataJsnObj);
				clfeTabJsnObj.put("EDUPLG_RECORD", clfeDataJsnArr); 
				
			}
		
			retValues.put(clfeTabJsnObj); 
			   
		}catch(Exception ex){
			logger.error("",ex);
			
		}
		
			return retValues;
}



private JSONArray saveInstantlfNominePlan(HttpServletRequest request) { 
	// TODO Auto-generated method stub
	
		logger.info(" ------> Inside  saveInstantlfNominePlan Method ");
		JSONArray retValues = new JSONArray();
		 
		JSONObject clfeDataJsnObj = new JSONObject();
		JSONObject clfeTabJsnObj =  new JSONObject();
		JSONArray clfeDataJsnArr = new JSONArray();
		
		
		ClientService serv=new ClientService();  
		ClientDB clientDB = new ClientDB();
		//ClientController clientCtrl=new ClientController();
		try{
			
			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext(); 
			DBInterfaceImpl dao = (DBInterfaceImpl)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
			HttpSession session = request.getSession(false);
			Map<String,String> sessMap = new HashMap<String,String>();
			sessMap = (HashMap<String, String>)session.getAttribute(FipaConstant.LOGGED_USER_INFO);
			
			String strLoggedUser = (String)sessMap.get(FipaConstant.LOGGED_USER_ID);
			
			String strSaveFor = FipaUtils.getParamValue(request, "txtFldSaveFor");
			strSaveFor = java.net.URLDecoder.decode(strSaveFor,"UTF-8");
			strSaveFor= strSaveFor.replace("\'", "\''");
			
			String strFnaId = FipaUtils.getParamValue(request, "fnaId");
			strFnaId = java.net.URLDecoder.decode(strFnaId,"UTF-8");
			strFnaId= strFnaId.replace("\'", "\''");
			
			String strLipId = FipaUtils.getParamValue(request, "lipId");
			strLipId = java.net.URLDecoder.decode(strLipId,"UTF-8");
			strLipId= strLipId.replace("\'", "\''");
			
			
			 Map<String,Object> objMapping  = new HashMap();
			 objMapping = FipaUtils.getRequestMapping(request);//bean
			
			if(strSaveFor.equals("NOMINE")){
				Vector vectDetails  =  serv.getLiNomNamesDetails(request);
				String liNomNameId = clientDB.saveNomineeNamedetails(vectDetails,strFnaId,strLipId); 
				clfeDataJsnObj.put("ID", liNomNameId);
				clfeDataJsnObj.put("CRTDBY", strLoggedUser);
				clfeDataJsnObj.put("CRTDDATE", new Date()); 
				clfeDataJsnArr.put(clfeDataJsnObj);
				clfeTabJsnObj.put("NOMINE_RECORD", clfeDataJsnArr); 
				
			}
		
			retValues.put(clfeTabJsnObj);
			
	   
		}catch(Exception ex){
			logger.error("",ex);
			
		}

	return retValues;
	}
}


