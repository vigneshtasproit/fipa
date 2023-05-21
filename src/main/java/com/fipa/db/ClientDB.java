package com.fipa.db;


import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Vector;

import javax.persistence.ParameterMode;
import javax.servlet.http.HttpServletRequest;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.procedure.ProcedureCall;
import org.hibernate.result.Output;
import org.hibernate.result.ResultSetOutput;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;

import com.fipa.dbinterface.DBInterface;  
import com.fipa.dbinterface.DBInterfaceFpms;
import com.fipa.dbinterface.DBInterfaceFpmsImpl;
import com.fipa.dto.FnaAdvDeclare;
import com.fipa.dto.FnaApptypes;
import com.fipa.dto.FnaAssetBusiandpersdets;
import com.fipa.dto.FnaAssetCashdets;
import com.fipa.dto.FnaAssetOtherdets; 
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
import com.fipa.dto.FnaVehicleownDets;
import com.fipa.dto.MasterCpfAcctype;
import com.fipa.util.ApplicationContextUtils;
import com.fipa.util.FipaConstant;
import com.fipa.util.FipaUtils;
import com.fipa.dbinterface.DBInterfaceImpl;





public class ClientDB{
	
	final Logger logger = LoggerFactory.getLogger(ClientDB.class);
	@SuppressWarnings("unchecked")
	public List getLoginMsgDets() {
		
		List lstLoginMsgDets = new ArrayList();
 
			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
			DBInterface dao = (DBInterface) appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
 
//			String SQL_ADVSTF_QUERY = "select LOGIN_MSG,MSG_AUTHOR FROM FNA_LOGINPAGE_MSG where SYSDATE between DISP_DATE_FROM and NVL(DISP_DATE_TO,SYSDATE)";
			String SQL_ADVSTF_QUERY = "select LOGIN_MSG,MSG_AUTHOR FROM FNA_LOGINPAGE_MSG where THIS_WEEK_QUOTE ='Y'";
			logger.info(SQL_ADVSTF_QUERY);
			lstLoginMsgDets = dao.searchByNativeSQLQuery(SQL_ADVSTF_QUERY);
			
 
		return lstLoginMsgDets;
	}


	
	@SuppressWarnings("unchecked")
	public List<FnaApptypes> getAllAnalysisTypes() {
		
		List<FnaApptypes> lstAllAnalysisTypes = new ArrayList<FnaApptypes>();

		ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
		DBInterface dao = (DBInterface) appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);

		lstAllAnalysisTypes = (List<FnaApptypes>) dao.selectQueryByFind(" from com.fipa.dto.MasterAnalysisTypes ",null);

		return lstAllAnalysisTypes;
	}
	
	public String saveClientDetails(FnaSelfspouseDets slfspsdet){
		 
		String strFNAId = ""; 
			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
			DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
			
			if(FipaUtils.nullOrBlank(slfspsdet.getFnaId())){
				
				String strMaxId = (String) dao.fetchMaxId(slfspsdet, "fnaId");	
				
				strMaxId=FipaUtils.getFormattedMaxPK(strMaxId, "FNA", 16);
			 
				strFNAId = strMaxId;
				slfspsdet.setFnaId(strFNAId);
				
				dao.saveObject(slfspsdet);
				
			}else
			{
				dao.updateObject(slfspsdet); 
				strFNAId = slfspsdet.getFnaId();
				
			}
			
		return strFNAId;
	}

	public void saveAnalysisTypesDetails(FnaApptypes fnaAnalytypes,String strFNAId) {
		// TODO Auto-generated method stub
		String strAnalTypeId = "";
 
			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
			DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);			
			String strMaxId = (String) dao.fetchMaxId(fnaAnalytypes, "anaPkid");			
			
			 
			strMaxId=FipaUtils.getFormattedMaxPK(strMaxId, "ANA", 16);
			
			strAnalTypeId = strMaxId; 
			fnaAnalytypes.setAppTypeid(strAnalTypeId); 
			
			
			dao.saveObject(fnaAnalytypes);
 
	}
	
	public void saveAppTypesDetails(Vector vectFnaAppTypes,String strFNAId) {
		// TODO Auto-generated method stub
		String strApptypesId = "";
 
			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
			DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
			
			
			Object objFnaAppTypes = null;
			List insertList = new ArrayList(0);
			List updateList = new ArrayList(1);
			List deleteList = new ArrayList(2);
			
			int vectorSize = vectFnaAppTypes.size();

			if (vectorSize > 0) {
				insertList = (List) vectFnaAppTypes.elementAt(0);
				updateList = (List) vectFnaAppTypes.elementAt(1);
				deleteList = (List) vectFnaAppTypes.elementAt(2);
			}
			
			int delSize = deleteList.size();
			 
			if (delSize > 0) {
				String SQL_ADVSTF_QUERY = "DELETE FROM FNA_APPTYPES WHERE FNA_ID='"+strFNAId+"'";
				dao.executeNativeSQLQuery(SQL_ADVSTF_QUERY);
//				dao.deleteTableObject(deleteList, objFnaAppTypes);
			}
			
			int updSize = updateList.size();
			if (updSize > 0) {
				 
				dao.updateTableObject(updateList, objFnaAppTypes);
			}
			

			int insSize = insertList.size();
			if (insSize > 0) {
				
				FnaApptypes fnaAppTypes=new FnaApptypes();
				
				
//				if(!FipaUtils.nullOrBlank(strFNAId)){
								
//				}
				
				String strMaxId = (String) dao.fetchMaxId(fnaAppTypes, "appTypeid");
				
				FnaSelfspouseDets custDets = new FnaSelfspouseDets();
				custDets.setFnaId(strFNAId);
				Iterator itIns = insertList.iterator();
				while (itIns.hasNext()) {
					 
					
					
					strMaxId=FipaUtils.getFormattedMaxPK(strMaxId, "DCL", 17);
					strApptypesId = strMaxId;
					 
					fnaAppTypes = (FnaApptypes) itIns.next();
					fnaAppTypes.setAppTypeid(strApptypesId);
					fnaAppTypes.setFnaSelfspouseDets(custDets);
			
			     
				}
				objFnaAppTypes =fnaAppTypes;			
				dao.insertTableObject(insertList, objFnaAppTypes);

			}
			
	}
	
	public String saveAdvDeclareDetails(FnaAdvDeclare fnaAdvDclDets,String strFNAId) {
		// TODO Auto-generated method stub
		String strADclId = "";
 
			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
			DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
			
			strADclId = FipaUtils.nullOrBlank(fnaAdvDclDets.getAdvDecId() ) ? "" : fnaAdvDclDets.getAdvDecId()  ;

			FnaSelfspouseDets fnaslfsps=new FnaSelfspouseDets();
			fnaslfsps.setFnaId(strFNAId);
			fnaAdvDclDets.setFnaSelfspouseDets(fnaslfsps);
			
			 if(FipaUtils.nullOrBlank(strADclId)){
				 
				 String strMaxId = (String) dao.fetchMaxId(fnaAdvDclDets, "advDecId");
				 
				 strMaxId=FipaUtils.getFormattedMaxPK(strMaxId, "CDA", 16);
				 strADclId = strMaxId; 
				 fnaAdvDclDets.setAdvDecId(strADclId);
				 dao.saveObject(fnaAdvDclDets);
				 
			 }else{
				 dao.updateObject(fnaAdvDclDets);
			 }
			
			
			
			
			
			
			return strADclId;
 
	}
	
	
	
	public String saveExpenditureDetails(FnaExpenditureDets fnaExpDets,String strFNAId) {
		// TODO Auto-generated method stub
		String strExpId = "";
 
			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
			DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);		
			
			strExpId = FipaUtils.nullOrBlank(fnaExpDets.getExpdId()) ? "" : fnaExpDets.getExpdId();
			
			FnaSelfspouseDets fnaslfsps=new FnaSelfspouseDets();
			fnaslfsps.setFnaId(strFNAId);
			fnaExpDets.setFnaSelfspouseDets(fnaslfsps);
			
			if(FipaUtils.nullOrBlank(strExpId)){
				
				String strMaxId = (String) dao.fetchMaxId(fnaExpDets, "expdId");	
				 
				strMaxId=FipaUtils.getFormattedMaxPK(strMaxId, "EXP", 16);			
				strExpId = strMaxId; 
				fnaExpDets.setExpdId(strExpId);			
				dao.saveObject(fnaExpDets);
			}else{
				dao.updateObject(fnaExpDets);
			}
			
			
			return strExpId;
	}
	
	
	public String saveContgDetails(FnaContingencyDets fnaContgDets,String strFNAId) {
		// TODO Auto-generated method stub
		String strContId = "";
 
			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
			DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);	
			
			
			strContId = FipaUtils.nullOrBlank(fnaContgDets.getConId())?"":fnaContgDets.getConId();		
			
			FnaSelfspouseDets fnaslfsps=new FnaSelfspouseDets();
			fnaslfsps.setFnaId(strFNAId);
			fnaContgDets.setFnaSelfspouseDets(fnaslfsps);
			 
			if(FipaUtils.nullOrBlank(strContId)){
				
				String strMaxId = (String) dao.fetchMaxId(fnaContgDets, "conId");
				strMaxId=FipaUtils.getFormattedMaxPK(strMaxId, "CON", 16);			
				strContId = strMaxId; 
				fnaContgDets.setConId(strContId);		
				dao.saveObject(fnaContgDets);
				
			}else{
				dao.updateObject(fnaContgDets);
			}
 
		return strContId;
	}
	
//	public void saveContingencyDetails(FnaContingencyDets fnaContDets,String strFNAId) {
//		// TODO Auto-generated method stub
//		String strContId = "";
// 
//			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
//			DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);			
//			String strMaxId = (String) dao.fetchMaxId(fnaContDets, "txtFldContId");			
//			
//			FnaSelfspouseDets fnaslfsps=new FnaSelfspouseDets();
//			fnaslfsps.setFnaId(strFNAId);
//			 
//			strMaxId=FipaUtils.getFormattedMaxPK(strMaxId, "CON", 16);
//			
//			strContId = strMaxId; 
//			fnaContDets.setTxtFldContId(strContId);
//			fnaContDets.setFnaSelfspouseDets(fnaslfsps);
//			
//			
//			dao.saveObject(fnaContDets);
// 
//		
//	}
	
	public String savePersPrioDetails(FnaPersprio fnaPersDets, String strFNAId) {
		// TODO Auto-generated method stub
		String strPPId = ""; 
			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
			DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);	
			
			strPPId = FipaUtils.nullOrBlank(fnaPersDets.getPersprioId()) ? "" :fnaPersDets.getPersprioId();
			
			FnaSelfspouseDets fnaslfsps=new FnaSelfspouseDets();
			fnaslfsps.setFnaId(strFNAId);
			fnaPersDets.setFnaSelfspouseDets(fnaslfsps);
			
			if(FipaUtils.nullOrBlank(strPPId)){
			
				String strMaxId = (String) dao.fetchMaxId(fnaPersDets, "persprioId");			 
				strMaxId=FipaUtils.getFormattedMaxPK(strMaxId, "PPT", 16);	
				strPPId = strMaxId; 
				fnaPersDets.setPersprioId(strPPId); 
				dao.saveObject(fnaPersDets);
			}else{
				dao.updateObject(fnaPersDets);
			}
 
			return strPPId;
		
		
	}

	public String saveSrcOfIncDetails(FnaSrcofincome fnaSrcOfincDets,
			String strFNAId) {
		// TODO Auto-generated method stub
		String strSrcOfIncId = ""; 
			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
			DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);	
			
			strSrcOfIncId = FipaUtils.nullOrBlank(fnaSrcOfincDets.getIncsrcId()) ? "" : fnaSrcOfincDets.getIncsrcId();
					
			
			FnaSelfspouseDets fnaslfsps=new FnaSelfspouseDets();
			fnaslfsps.setFnaId(strFNAId);
			fnaSrcOfincDets.setFnaSelfspouseDets(fnaslfsps);
			
			if(FipaUtils.nullOrBlank(strSrcOfIncId)){
				
				String strMaxId = (String) dao.fetchMaxId(fnaSrcOfincDets, "incsrcId");	
				strMaxId=FipaUtils.getFormattedMaxPK(strMaxId, "SOI", 16);			
				strSrcOfIncId = strMaxId; 
				fnaSrcOfincDets.setIncsrcId(strSrcOfIncId);			
				dao.saveObject(fnaSrcOfincDets);
			}else{
				dao.updateObject(fnaSrcOfincDets);
			}
			
			
			
			
			return strSrcOfIncId;
 
	}

//	public void saveCpfDetails(FnaCpfDets fnCpfDets, String strFNAId) {
//		// TODO Auto-generated method stub
//		String strCpfId = ""; 
//			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
//			DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);			
//			String strMaxId = (String) dao.fetchMaxId(fnCpfDets, "cpfId");			
//			
//			FnaSelfspouseDets fnaslfsps=new FnaSelfspouseDets();
//			fnaslfsps.setFnaId(strFNAId);
//			 
//			strMaxId=FipaUtils.getFormattedMaxPK(strMaxId, "CPF", 16);
//			
//			strCpfId = strMaxId;
//			 
//			fnCpfDets.setTxtFldCpfId(strCpfId);
//			fnCpfDets.setFnaSelfspouseDets(fnaslfsps);
//			
//			
//			dao.saveObject(fnCpfDets); 
//	}

	public String saveFinLbltyDetails(FnaFinLiability fnaFinLbltyDets,
			String strFNAId) {
		// TODO Auto-generated method stub
		String strFnLbltyId = ""; 
			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
			DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);	
			
			strFnLbltyId = FipaUtils.nullOrBlank(fnaFinLbltyDets.getLiabId()) ? "" : fnaFinLbltyDets.getLiabId();
			
			FnaSelfspouseDets fnaslfsps=new FnaSelfspouseDets();
			fnaslfsps.setFnaId(strFNAId);
			fnaFinLbltyDets.setFnaSelfspouseDets(fnaslfsps);
			 
			if(FipaUtils.nullOrBlank(strFnLbltyId)){
				
				String strMaxId = (String) dao.fetchMaxId(fnaFinLbltyDets, "liabId");	
				strMaxId=FipaUtils.getFormattedMaxPK(strMaxId, "LIA", 16);			
				strFnLbltyId = strMaxId; 
				fnaFinLbltyDets.setLiabId(strFnLbltyId);			
				dao.saveObject(fnaFinLbltyDets);
				
			}else{
				dao.updateObject(fnaFinLbltyDets);
			}
			
			
 
			return strFnLbltyId;
	}

	public String saveCurAssDetails(FnaCurassDets fnaCurAssDets,
			String strFNAId) {
		// TODO Auto-generated method stub
		String strCAId = ""; 
			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
			DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
			
			
			strCAId = 	FipaUtils.nullOrBlank( fnaCurAssDets.getCaId() ) ? "" : fnaCurAssDets.getCaId();
			
			FnaSelfspouseDets fnaslfsps=new FnaSelfspouseDets();
			fnaslfsps.setFnaId(strFNAId);
			fnaCurAssDets.setFnaSelfspouseDets(fnaslfsps);
			
			if(FipaUtils.nullOrBlank(strCAId)){
				
				String strMaxId = (String) dao.fetchMaxId(fnaCurAssDets, "caId");				
				strMaxId=FipaUtils.getFormattedMaxPK(strMaxId, "CUA", 16);			
				strCAId = strMaxId;			 
				fnaCurAssDets.setCaId(strCAId);		
				dao.saveObject(fnaCurAssDets);
				
			}else{
				dao.updateObject(fnaCurAssDets);
			}
			 
			
 
			return strCAId;
		
	}

	public String saveRetirePlnDetails(FnaRetireplanDets fnaRetirePlnDets,
			String strFNAId) {
		// TODO Auto-generated method stub
		String strRPId = ""; 
			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
			DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);	
			
			
			strRPId = FipaUtils.nullOrBlank( fnaRetirePlnDets.getRetId()) ? "" : fnaRetirePlnDets.getRetId();
			
						
			
			FnaSelfspouseDets fnaslfsps=new FnaSelfspouseDets();
			fnaslfsps.setFnaId(strFNAId);
			fnaRetirePlnDets.setFnaSelfspouseDets(fnaslfsps);
			
			if(FipaUtils.nullOrBlank(strRPId)){
				String strMaxId = (String) dao.fetchMaxId(fnaRetirePlnDets, "retId");
				strMaxId=FipaUtils.getFormattedMaxPK(strMaxId, "RPL", 16);
				strRPId = strMaxId;			 
				fnaRetirePlnDets.setRetId(strRPId);		
				dao.saveObject(fnaRetirePlnDets);
			}else{
				dao.updateObject(fnaRetirePlnDets);
			}
			
			
			
			
			return strRPId;
 
	}

	public String saveInvstDetails(FnaInvsetmentSummary fnaInvstDets,
			String strFNAId) {
		// TODO Auto-generated method stub
		String strInvId = ""; 
			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
			DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);			
	
			strInvId =FipaUtils.nullOrBlank(  fnaInvstDets.getInvstId() ) ? "" :  fnaInvstDets.getInvstId();
			
			
			FnaSelfspouseDets fnaslfsps=new FnaSelfspouseDets();
			fnaslfsps.setFnaId(strFNAId);
			fnaInvstDets.setFnaSelfspouseDets(fnaslfsps);
			
			
			if(FipaUtils.nullOrBlank(strInvId)){
				String strMaxId = (String) dao.fetchMaxId(fnaInvstDets, "invstId");	
				strMaxId=FipaUtils.getFormattedMaxPK(strMaxId, "INV", 16);			
				strInvId = strMaxId;			 
				fnaInvstDets.setInvstId(strInvId);			
				dao.saveObject(fnaInvstDets);
			}else{
				dao.updateObject(fnaInvstDets);
			}
			 
			
			
			
			return strInvId;
 
	}

	public String saveCashAssDetails(FnaAssetCashdets fnaCashAssDets,
			String strFNAId) {
		// TODO Auto-generated method stub
		String strCSHASId = ""; 
			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
			DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);	
			
			
			strCSHASId =  FipaUtils.nullOrBlank( fnaCashAssDets.getCasstId() ) ? "" : fnaCashAssDets.getCasstId();
						
			
			FnaSelfspouseDets fnaslfsps=new FnaSelfspouseDets();
			fnaslfsps.setFnaId(strFNAId);
			fnaCashAssDets.setFnaSelfspouseDets(fnaslfsps);
			 
			if(FipaUtils.nullOrBlank(strCSHASId)){
				String strMaxId = (String) dao.fetchMaxId(fnaCashAssDets, "casstId");
				strMaxId=FipaUtils.getFormattedMaxPK(strMaxId, "CSA", 16);			 	
				strCSHASId = strMaxId;			 
				fnaCashAssDets.setCasstId(strCSHASId);		
				dao.saveObject(fnaCashAssDets);
			}else{
				dao.updateObject(fnaCashAssDets);
			}
			
			
			
		return strCSHASId;
 
	}

	public String saveOthAssDetails(FnaAssetOtherdets fnaOthAssDets,
			String strFNAId) {
		// TODO Auto-generated method stub
		String strOthAssId = ""; 
			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
			DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);	
			
			strOthAssId = FipaUtils.nullOrBlank(fnaOthAssDets.getOthId()) ? "" : fnaOthAssDets.getOthId();
					
			
			FnaSelfspouseDets fnaslfsps=new FnaSelfspouseDets();
			fnaslfsps.setFnaId(strFNAId);
			fnaOthAssDets.setFnaSelfspouseDets(fnaslfsps);
			
			if(FipaUtils.nullOrBlank(strOthAssId)){
				String strMaxId = (String) dao.fetchMaxId(fnaOthAssDets, "othId");	
				strMaxId=FipaUtils.getFormattedMaxPK(strMaxId, "OAD", 16);
				strOthAssId = strMaxId;			 
				fnaOthAssDets.setOthId(strOthAssId);		
				dao.saveObject(fnaOthAssDets);
			}else{
				dao.updateObject(fnaOthAssDets);
			}
			 
			
 
			return strOthAssId;
		
	}
	
	public String saveRskPrefDetails(FnaRiskprefDets fnaRskPrefDets,
			String strFNAId) {
		// TODO Auto-generated method stub
		String strRskPrefId = "";  
			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
			DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);			
					
			strRskPrefId = FipaUtils.nullOrBlank(fnaRskPrefDets.getRiskId()) ? "" : fnaRskPrefDets.getRiskId();
			
			FnaSelfspouseDets fnaslfsps=new FnaSelfspouseDets();
			fnaslfsps.setFnaId(strFNAId);
			fnaRskPrefDets.setFnaSelfspouseDets(fnaslfsps);
			 
			if(FipaUtils.nullOrBlank(strRskPrefId)){
				String strMaxId = (String) dao.fetchMaxId(fnaRskPrefDets, "riskId");	
				strMaxId=FipaUtils.getFormattedMaxPK(strMaxId, "RSK", 16);			
				strRskPrefId = strMaxId;			 
				fnaRskPrefDets.setRiskId(strRskPrefId);						
				dao.saveObject(fnaRskPrefDets);
			}else{
				dao.updateObject(fnaRskPrefDets);
			}
			
			return strRskPrefId;
 
		
	}
	
	public String saveSAnalDetails(FnaSummaryAnalysis fnaSummaryAnalyDets,
			String strFNAId) {
		// TODO Auto-generated method stub
		String strSumAnalyId = "";
 
			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
			DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);			
					
			strSumAnalyId = FipaUtils.nullOrBlank(fnaSummaryAnalyDets.getSaId())?"":fnaSummaryAnalyDets.getSaId();		
			
			FnaSelfspouseDets fnaslfsps=new FnaSelfspouseDets();
			fnaslfsps.setFnaId(strFNAId);
			fnaSummaryAnalyDets.setFnaSelfspouseDets(fnaslfsps);
 
			if(FipaUtils.nullOrBlank(strSumAnalyId)){
				
				String strMaxId = (String) dao.fetchMaxId(fnaSummaryAnalyDets, "saId");	
				strMaxId=FipaUtils.getFormattedMaxPK(strMaxId, "SAN", 16);			
				strSumAnalyId = strMaxId;			 
				fnaSummaryAnalyDets.setSaId(strSumAnalyId);						
				dao.saveObject(fnaSummaryAnalyDets);
				
			}else{
				dao.updateObject(fnaSummaryAnalyDets);
			}
			
			
 
			return strSumAnalyId;
	}
	
	public void saveCdAhocDetails(FnaAdvDeclare fnaCdAhocDets,
			String strFNAId) {
		// TODO Auto-generated method stub
//		String strCdAhocId = "";
// 
//			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
//			DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);			
//			String strMaxId = (String) dao.fetchMaxId(fnaCdAhocDets, "advDecId");			
//			
//			FnaSelfspouseDets fnaslfsps=new FnaSelfspouseDets();
//			fnaslfsps.setFnaId(strFNAId);
//			
// 
//			
//			strMaxId=FipaUtils.getFormattedMaxPK(strMaxId, "DLC", 16);
//			
//			strCdAhocId = strMaxId;
//			 
//			fnaCdAhocDets.setAdvDecId(strCdAhocId);
//			fnaCdAhocDets.setFnaSelfspouseDets(fnaslfsps);
//			
//			
//			dao.saveObject(fnaCdAhocDets);
 
	}
	
	
	
	public String saveLifeInsrceDetails(FnaLifeinsuranceDets fnaLifeInsdets,
			String strFNAId) {
		// TODO Auto-generated method stub
		String strLifeInsId = "";
 
			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
			DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);	
			
			strLifeInsId = FipaUtils.nullOrBlank(fnaLifeInsdets.getLipId()) ? "" : fnaLifeInsdets.getLipId();
			
				
			
			FnaSelfspouseDets fnaslfsps=new FnaSelfspouseDets();
			fnaslfsps.setFnaId(strFNAId);
			fnaLifeInsdets.setFnaSelfspouseDets(fnaslfsps);
 
			if(FipaUtils.nullOrBlank(strLifeInsId)){
				String strMaxId = (String) dao.fetchMaxId(fnaLifeInsdets, "lipId");		
				strMaxId=FipaUtils.getFormattedMaxPK(strMaxId, "LIS", 16);			
				strLifeInsId = strMaxId;			 
				fnaLifeInsdets.setLipId(strLifeInsId);
				dao.saveObject(fnaLifeInsdets);
			}else{
				dao.updateObject(fnaLifeInsdets);
			}
			
			
			
			return strLifeInsId;
 
	}
	
	 
	public void deleteClientDetails(FnaSelfspouseDets client) {
		// TODO Auto-generated method stub
 
			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
			DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
			 
			dao.deleteObject(client); 
		
	}
	
//	public void delAgreementsDetails(FipaAgreements fnaAgreements) {
//		// TODO Auto-generated method stub 
// 
//			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
//			DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
//			dao.deleteObject(fnaAgreements);
//			
//	}
//	
	public void delAppTypesDetails(FnaApptypes fnaApptypes) {
		// TODO Auto-generated method stub 
 
			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
			DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
			dao.deleteObject(fnaApptypes);
			
	}
	
	public void delAnalysisTypesDetails(FnaApptypes fnaAnalytypes) {
		// TODO Auto-generated method stub 
 
			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
			DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
			dao.deleteObject(fnaAnalytypes);
			
	}
	
	
	public void deleteAdvDeclareDetails(FnaAdvDeclare AdvDcl) {
		// TODO Auto-generated method stub 
 
			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
			DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
			dao.deleteObject(AdvDcl);
			
	}
	
	
	public void deleteExpenditureDetails(FnaExpenditureDets Exp) {
		// TODO Auto-generated method stub 
 
			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
			DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
			dao.deleteObject(Exp); 
			
	}

	public void delContgDetails(FnaContingencyDets fnaContDets) {
		// TODO Auto-generated method stub 
			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
			DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
			dao.deleteObject(fnaContDets); 
	}
	
	
	public void delContingencyDetails(FnaContingencyDets fnaContDets) {
		// TODO Auto-generated method stub 
			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
			DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
			dao.deleteObject(fnaContDets); 
	}

	public void delPersPrioDetails(FnaPersprio fnaPersDets) {
		// TODO Auto-generated method stub  
			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
			DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
			dao.deleteObject(fnaPersDets); 
	}

	public void delSrcOfIncDetails(FnaSrcofincome fnaSrcOfincDets) {
		// TODO Auto-generated method stub  
			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
			DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
			dao.deleteObject(fnaSrcOfincDets); 
	}
	
//	public void delCpfDetails(FnaCpfDets fnCpfDets) {
//		// TODO Auto-generated method stub 
//			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
//			DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
//			dao.deleteObject(fnCpfDets); 
//	}
	public void delFinLbltyDetails(FnaFinLiability fnaFinLbltyDets) {
		// TODO Auto-generated method stub 
			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
			DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
			dao.deleteObject(fnaFinLbltyDets); 
	}

	public void delCurAssDetails(FnaCurassDets fnaCurAssDets) {
		// TODO Auto-generated method stub 
			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
			DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
			dao.deleteObject(fnaCurAssDets); 
	}

	public void delRetirePlnDetails(FnaRetireplanDets fnaRetirePlnDets) {
		// TODO Auto-generated method stub 
			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
			DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
			dao.deleteObject(fnaRetirePlnDets); 
	}

	public void delInvstDetails(FnaInvsetmentSummary fnaInvstDets) {
		// TODO Auto-generated method stub 
			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
			DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
			dao.deleteObject(fnaInvstDets); 
	}

	public void delCashAssDetails(FnaAssetCashdets fnaCashAssDets) {
		// TODO Auto-generated method stub 
			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
			DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
			dao.deleteObject(fnaCashAssDets); 
	}

	public void delOthAssDetails(FnaAssetOtherdets fnaOthAssDets) {
		// TODO Auto-generated method stub 
			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
			DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
			dao.deleteObject(fnaOthAssDets); 
	}


	public void delRskPrefDetails(FnaRiskprefDets fnaRiskPrefDets) {
		// TODO Auto-generated method stub 
			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
			DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
			 dao.deleteObject(fnaRiskPrefDets); 
	}
	
	
	public void delSumAnalysDetails(FnaSummaryAnalysis fnaSumAnalysisDets) {
		// TODO Auto-generated method stub 
			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
			DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
			dao.deleteObject(fnaSumAnalysisDets); 
	}
	
	
	public void delCdAhocDetails(FnaAdvDeclare fnaCdAdhocDets) {
		// TODO Auto-generated method stub 
 
			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
			DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
			dao.deleteObject(fnaCdAdhocDets);
 
	}
	
	
	public void delLifeInsurceDetails(FnaLifeinsuranceDets fnaLifeIns) {
		// TODO Auto-generated method stub 
 
			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
			DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
			dao.deleteObject(fnaLifeIns);
 
	}
	public List  clientNRICSearch(DBInterface dao, String strBufQryParam) {

		List clientNRICSrchList = new ArrayList();
 
			
//			String HQL_CLIENT_SEARCH = "SELECT FNA_ID,DF_SELF_NAME,DF_SELF_NRIC,"
//					+ "DF_SELF_PERSEMAIL,DF_SELF_MOBILE,DF_SELF_HOMEADDR "
//					+ " FROM FNA_SELFSPOUSE_DETS CUST WHERE CUST.FNA_ID IS NOT NULL " + strBufQryParam + " ORDER BY UPPER(DF_SELF_NAME)";
			
			String HQL_CLIENT_SEARCH = "SELECT DISTINCT DF_SELF_NAME,DF_SELF_NRIC"
					+ " "
					+ " FROM FNA_SELFSPOUSE_DETS CUST WHERE CUST.FNA_ID IS NOT NULL " + strBufQryParam + " ORDER BY UPPER(DF_SELF_NAME)";
			
			logger.info(HQL_CLIENT_SEARCH);
			clientNRICSrchList = dao.searchByNativeSQLQuery(HQL_CLIENT_SEARCH);
 
		return clientNRICSrchList;

	}
	
	public List  cpfPayoutIncomeSearch(DBInterface dao,String strRetAge,
			String strRetPlanCode,String strPlegedvalue,String strTopRAErsvalue) {

		List  SrchList = new ArrayList();
  
			String HQL_SEARCH = " SELECT FIPA_FN_GETCPFLIFEPREM('"+strRetPlanCode+"', '"+strTopRAErsvalue+"') LIFEPREM, "
					+ " FIPA_FN_GETCPFLIFEPAYOUT('"+strPlegedvalue+"', '"+strTopRAErsvalue+"','"+strRetPlanCode+"') LIFEPAYOUT, "
					+ " FIPA_FN_GETCPFFROMRA('"+strRetPlanCode+"', '"+strPlegedvalue+"', '"+strTopRAErsvalue+"', "+strRetAge+") FROM_RA "
					+ " FROM DUAL ";
			
			logger.info(HQL_SEARCH);
			SrchList = dao.searchByNativeSQLQuery(HQL_SEARCH);
 
		return SrchList;

	}

	public List  clntLifeInsSearch(DBInterface dao, String strBufQryParam) {

		List clientLISrchList = new ArrayList();
 
		
		String HQL_CLIENT_SEARCH = "from com.fipa.dto.FnaLifeinsuranceDets lipinc" 
				+ " left join fetch lipinc.fnaSelfspouseDets cust  " 	
				+ " WHERE cust.fnaId IS NOT NULL and lipinc.lipId=?" 
				+ " ORDER BY UPPER(lipinc.lipId)";
		 
		logger.info(HQL_CLIENT_SEARCH);
			clientLISrchList = dao.selectQueryByFind(HQL_CLIENT_SEARCH,strBufQryParam);
			
		return clientLISrchList;

	}
	
	public List  clntLifeInsList(DBInterface dao, String strBufQryParam) {

		List clientLISrchList = new ArrayList();
		  
//			String HQL_CLIENT_SEARCH = "SELECT life.LIP_ID,life.FNA_ID,life.LIP_ASSURED," + 
//					"life.LIP_POLICYNO,life.LIP_PLANNAME,TO_CHAR(life.LIP_INCEPDATE,'DD/MM/YYYY'),life.LIP_SA," + 
//					"life.LIP_CREATED_BY,life.LIP_CREATED_DATE, life.POLICY_STATUS  FROM FNA_LIFEINSURANCE_DETS life , " + 
//					"FNA_SELFSPOUSE_DETS selfsps " + 
//					" WHERE life.FNA_ID  = selfsps.FNA_ID(+) " + 
//					strBufQryParam  +   
//					"ORDER BY UPPER(life.LIP_ID) DESC ";
//			
//			 
//			clientLISrchList = dao.searchByNativeSQLQuery(HQL_CLIENT_SEARCH);
		
		String HQL_CLIENT_SEARCH = " from com.fipa.dto.FnaLifeinsuranceDets lipinc" 
				+ " join fetch lipinc.fnaSelfspouseDets cust " 
				+ " WHERE cust.fnaId IS NOT NULL "
				+ strBufQryParam
				+ " ORDER BY UPPER(lipinc.lipId)";
		 
		logger.info(HQL_CLIENT_SEARCH); 
			clientLISrchList = dao.selectQueryByFind(HQL_CLIENT_SEARCH,null); 
 
		return clientLISrchList;

	}
	
	public List  clntLifeCovSearch(DBInterface dao, String strBufQryParam) {

		List clientLICovSrchList = new ArrayList();
 

//		
		
		String HQL_CLIENT_SEARCH = "from com.fipa.dto.FnaLifeinsuranceCoverages benf" 
				+ " left join fetch benf.fnaSelfspouseDets cust  "
				+ " left join fetch benf.fnaLifeinsuranceDets life  "
				+ " WHERE cust.fnaId IS NOT NULL and life.lipId=?" 
				+ " ORDER BY UPPER(life.lipId)";
		 
		logger.info(HQL_CLIENT_SEARCH);	
//			String HQL_CLIENT_SEARCH = "SELECT *  " 
//					+ " FROM FNA_LIFEINSURANCE_COVERAGES life WHERE life.FNA_ID IS NOT NULL " 
//					+ strBufQryParam + " ORDER BY UPPER(LIP_ID)";
//			 
			
			clientLICovSrchList = dao.selectQueryByFind(HQL_CLIENT_SEARCH,strBufQryParam);
 
		return clientLICovSrchList;

	}
	
	 
	
	public List  clntLifePlanDetsSearch(DBInterface dao, String strBufQryParam) {

		List clntLifePlanDetsSearch = new ArrayList();
 

			String HQL_CLIENT_SEARCH = "from com.fipa.dto.FnaLifeinsuranceBasicriders benf" 
					+ " left join fetch benf.fnaSelfspouseDets cust  "
					+ " left join fetch benf.fnaLifeinsuranceDets life  "
					+ " WHERE cust.fnaId IS NOT NULL and life.lipId=? " 
					+ " ORDER BY UPPER(life.lipId),UPPER(benf.benfRaidRefId),UPPER(benf.basorrid),upper(benf.planReferenceId)"
					;
			 
			logger.info(HQL_CLIENT_SEARCH);	
			clntLifePlanDetsSearch = dao.selectQueryByFind(HQL_CLIENT_SEARCH,strBufQryParam);
 
		return clntLifePlanDetsSearch;

	}
	
	public List  clntLifeBenfSearch(DBInterface dao, String strBufQryParam) {

		List clientLIBenfrSrchList = new ArrayList();
 

			String HQL_CLIENT_SEARCH = "from com.fipa.dto.FnaLifeinsuranceDisablebenfs benf" 
					+ " left join fetch benf.fnaSelfspouseDets cust  "
					+ " left join fetch benf.fnaLifeinsuranceDets life  "
					+ " WHERE cust.fnaId IS NOT NULL and life.lipId=?" 
					+ " ORDER BY UPPER(life.lipId)";
			logger.info(HQL_CLIENT_SEARCH);	
			
			clientLIBenfrSrchList = dao.selectQueryByFind(HQL_CLIENT_SEARCH,strBufQryParam);
 
		return clientLIBenfrSrchList;

	}
	

	public List  clntLifeChldEduSearch(DBInterface dao, String strBufQryParam) {

		List clientLIChldEduSrchList = new ArrayList();
  
		String HQL_CLIENT_SEARCH = "from com.fipa.dto.FnaLifeinsuranceChildedc lischlded" 
				+ " left join fetch lischlded.fnaSelfspouseDets cust  "
				+ " left join fetch lischlded.fnaLifeinsuranceDets life  "
				+ " WHERE cust.fnaId IS NOT NULL and life.lipId=?" 
				+ " ORDER BY UPPER(lischlded.startAge) asc";
		logger.info(HQL_CLIENT_SEARCH);
		clientLIChldEduSrchList = dao.selectQueryByFind(HQL_CLIENT_SEARCH, strBufQryParam);
 
		return clientLIChldEduSrchList;

	}
	
	
	public List  clntLifeMVSearch(DBInterface dao, String strBufQryParam) {

		List clientLIMVSrchList = new ArrayList();
 
		String HQL_CLIENT_SEARCH = "from com.fipa.dto.FnaLifeinsuranceMvRet ret" 
				+ " left join fetch ret.fnaSelfspouseDets cust  "
				+ " left join fetch ret.fnaLifeinsuranceDets life  "
				+ " WHERE cust.fnaId IS NOT NULL and life.lipId=?" 
				+ " ORDER BY UPPER(life.lipId)";
		logger.info(HQL_CLIENT_SEARCH);
		clientLIMVSrchList = dao.selectQueryByFind(HQL_CLIENT_SEARCH, strBufQryParam);
 
		return clientLIMVSrchList;

	}
	
	
	public List  clntLifeNomSearch(DBInterface dao, String strBufQryParam) {

		List clientLINomSrchList = new ArrayList();
 

		String HQL_CLIENT_SEARCH = "from com.fipa.dto.FnaLifeinsuranceNominees nom" 
				+ " left join fetch nom.fnaSelfspouseDets cust  "
				+ " left join fetch nom.fnaLifeinsuranceDets life  "
				+ " WHERE cust.fnaId IS NOT NULL and life.lipId=?" 
				+ " ORDER BY UPPER(life.lipId)";
		logger.info(HQL_CLIENT_SEARCH);
		clientLINomSrchList = dao.selectQueryByFind(HQL_CLIENT_SEARCH, strBufQryParam);
 
		return clientLINomSrchList;

	}
	
	
	
	public List clientSearch(DBInterface dao,DBInterfaceFpms fpmsdao, String ... strParams) {

		List clientSrchList = new ArrayList();
		List clientSrchListFpms = new ArrayList();
		List bothList = new ArrayList();
		

		String strParamFNA = "";
		String strParamFPMS="";
		String strParamFPMSTrans="";
		String HQL_CLIENT_SEARCH ="",HQL_FPMS_CLIENT_SEARCH="";
		
		if(!FipaUtils.nullOrBlank(strParams[0])){
			strParamFNA +=" and upper(cust.DF_SELF_NAME) like '%"+strParams[0].toUpperCase()+"%'";
			strParamFPMS +=" and upper(cust.CUST_NAME) like '%"+strParams[0].toUpperCase()+"%'";
			strParamFPMSTrans +=" and upper(cust.CUST_NAME) like '%"+strParams[0].toUpperCase()+"%'";
		}
		
		if(!FipaUtils.nullOrBlank(strParams[1])){
			strParamFNA += " and NVL(cust.DF_SELF_NRIC,'%') like '%"+strParams[1]+"%'";
			strParamFPMS += " and NVL(COALESCE(NRIC,CUST_PASSPORT_NUM,CUST_FIN),'%') like '%"+strParams[1]+"%'";	
			strParamFPMSTrans += " and NVL(COALESCE(NRIC,CUST_PASSPORT_NUM,CUST_FIN),'%') like '%"+strParams[1]+"%'";
		}
		
		if(!FipaUtils.nullOrBlank(strParams[2])){
			strParamFNA += " AND CUST.ADVSTF_ID ='"+strParams[2]+"'";
			strParamFPMS += " and cust.AGENT_ID_CURRENT = '"+strParams[2]+"'";	
			strParamFPMSTrans += " AND CUST.CUSTID IN (" + 
					"                SELECT" + 
					"                    TNF.POLICY_OWNER" + 
					"                FROM " + 
					"                    POLICY TNF" + 
					"                WHERE " + 
					"                    ( TNF.ADVISER_CURRENT = ( '"+strParams[2]+"' )" + 
					"                      AND TNF.ADVISER_INITIAL <> ( '"+strParams[2]+"' ) )" + 
					"            )";
		}
		
//		if(!strParams[3].equalsIgnoreCase(FipaConstant.STR_STFTYPE_STAFF)){
//			strParamFNA += " AND CUST.ADVSTF_ID ='"+strParams[2]+"'";
//			strParamFPMS += " and cust.AGENT_ID_CURRENT = '"+strParams[2]+"'";	
//		}
		
		 
//		if(!strParams[3].equalsIgnoreCase(FipaConstant.STR_STFTYPE_STAFF)){
//			
////			 HQL_CLIENT_SEARCH = "SELECT "
////						+ "'' FNA_ID, DF_SELF_NAME, DF_SELF_NRIC, DF_SELF_PERSEMAIL, DF_SELF_MOBILE, '' DF_SELF_HOMEADDR,"
////						+ "'Y' FIPA_EXISTS , "
////						+ "(SELECT DISTINCT 'Y' FROM  CUSTOMER_DETAILS WHERE NRIC = DF_SELF_NRIC AND CUSTID = FPMS_CUSTID) FPMS_EXIST, "
////						+ "FPMS_CUSTID CUSTID "
////						+ " FROM FNA_SELFSPOUSE_DETS CUST "
////						+ " WHERE CUST.FNA_ID IS NOT NULL "
////						+ strParamFNA
////						+ " UNION "
////						+ " SELECT '' FNA_ID,CUST_NAME, COALESCE(NRIC,CUST_PASSPORT_NUM,CUST_FIN)NRIC, "
////						+ "EMAIL_ID, RES_HAND_PHONE, '' RES_ADDR1,"
////						+ " (SELECT DISTINCT 'Y' FROM FNA_SELFSPOUSE_DETS WHERE DF_SELF_NAME = CUST_NAME and DF_SELF_NRIC = COALESCE(NRIC,CUST_PASSPORT_NUM,CUST_FIN) AND FPMS_CUSTID = CUSTID)FIPA_EXIST,"
////						+ " 'Y' FPMS_EXIST, CUSTID "
////						+ " FROM  CUSTOMER_DETAILS CUST WHERE "
////						+ " CUST.CUSTID IS NOT NULL "
////						+ " and COALESCE(NRIC,CUST_PASSPORT_NUM,CUST_FIN) is not null"
////						+ strParamFPMS; 
//			
//			
//			HQL_CLIENT_SEARCH = "SELECt   distinct  DF_SELF_NAME, DF_SELF_NRIC, DF_SELF_PERSEMAIL,  "
//					+ "DF_SELF_MOBILE,'Y' FIPA_EXISTS, FPMS_CUSTID   CUSTID"
//					+ " FROM FNA_SELFSPOUSE_DETS CUST"
//					+ " WHERE    CUST.FNA_ID IS NOT NULL " + strParamFNA + " ORDER BY UPPER(DF_SELF_NAME)";
//			
//			
//			HQL_FPMS_CLIENT_SEARCH = "SELECT    CUST_NAME,"
//					+ " COALESCE(NRIC, CUST_PASSPORT_NUM, CUST_FIN) NRIC,"
//					+ "  EMAIL_ID,  RES_HAND_PHONE,   'Y' FPMS_EXIST,  CUSTID"
//					+ " FROM CUSTOMER_DETAILS CUST"
//					+ " WHERE  CUST.CUSTID IS NOT NULL AND COALESCE(NRIC, CUST_PASSPORT_NUM, CUST_FIN) IS NOT NULL "+strParamFPMS +"  ORDER BY UPPER(CUST_NAME)";
//			
//			
//			
//		}else{
////			
////			 HQL_CLIENT_SEARCH = "SELECT DISTINCT"
////						+ "'' FNA_ID, DF_SELF_NAME, DF_SELF_NRIC, DF_SELF_PERSEMAIL, DF_SELF_MOBILE, '' DF_SELF_HOMEADDR,"
////						+ "'Y' FIPA_EXISTS , "
////						+ "(SELECT DISTINCT 'Y' FROM  CUSTOMER_DETAILS WHERE NRIC = DF_SELF_NRIC) FPMS_EXIST, "
////						+ "FPMS_CUSTID CUSTID "
////						+ " FROM FNA_SELFSPOUSE_DETS CUST "
////						+ " WHERE CUST.FNA_ID IS NOT NULL "
////						+ strParamFNA;
//			
//		}
		 
		
		HQL_CLIENT_SEARCH = "SELECT distinct  SS.DF_SELF_NAME, DF_SELF_NRIC,DF_SELF_PERSEMAIL,  DF_SELF_MOBILE,'Y' FIPA_EXISTS,"
				+ " FPMS_CUSTID   CUSTID,  SS.FNA_ID  FROM FNA_SELFSPOUSE_DETS SS,"
				+ "(SELECT MAX(FNA_ID) FNA_ID FROM FNA_SELFSPOUSE_DETS CUST"
				+ " WHERE  CUST.FNA_ID IS NOT NULL "+strParamFNA+ " GROUP BY DF_SELF_NAME )SRCH  WHERE   SS.FNA_ID = SRCH.FNA_ID ORDER BY  1 ";
		
		
		
		HQL_FPMS_CLIENT_SEARCH = "SELECT    CUST_NAME,"
				+ " COALESCE(NRIC, CUST_PASSPORT_NUM, CUST_FIN) NRIC,"
				+ "  EMAIL_ID,  RES_HAND_PHONE,   'Y' FPMS_EXIST,  CUSTID,'' FNA_ID"
				+ " FROM CUSTOMER_DETAILS CUST"
				+ " WHERE  CUST.CUSTID IS NOT NULL AND COALESCE(NRIC, CUST_PASSPORT_NUM, CUST_FIN) IS NOT NULL "+strParamFPMS ;
		
		
		HQL_FPMS_CLIENT_SEARCH += "  UNION SELECT    CUST_NAME,"
				+ " COALESCE(NRIC, CUST_PASSPORT_NUM, CUST_FIN) NRIC,"
				+ "  EMAIL_ID,  RES_HAND_PHONE,   'Y' FPMS_EXIST,  CUSTID,'' FNA_ID"
				+ " FROM CUSTOMER_DETAILS CUST"
				+ " WHERE  CUST.CUSTID IS NOT NULL AND COALESCE(NRIC, CUST_PASSPORT_NUM, CUST_FIN) IS NOT NULL "+strParamFPMSTrans +" ORDER BY 1";
		
		
		logger.info(HQL_CLIENT_SEARCH);
		logger.info(HQL_FPMS_CLIENT_SEARCH);
		
		clientSrchList = dao.searchByNativeSQLQuery(HQL_CLIENT_SEARCH);
		clientSrchListFpms = fpmsdao.searchByNativeSQLQuery(HQL_FPMS_CLIENT_SEARCH);
		bothList.add(0,clientSrchListFpms);
		bothList.add(1, clientSrchList);
		

		return bothList;

	}
	
	 
	public List getCoverageList(String strFnaId) {
		
		List coverageList = new ArrayList();

			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
			DBInterface dao = (DBInterface) appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);

			
//			String SQL_CATG_QUERY = "SELECT DISTINCT COVERAGE_TYPES FROM FNA_LIFEINSURANCE_BASICRIDERS"
//					+ " WHERE LIP_ID='"+lifId+"' AND  COVERAGE_TYPES IS NOT NULL "; 
			
			String SQL_CATG_QUERY = "SELECT DISTINCT LIP_ID,"
					+ " REGEXP_SUBSTR(CTYPE, '[^,]+', 1, LEVEL) COVERAGE_LIST"
					+ " FROM ( SELECT LIP_ID,LISTAGG(COVERAGE_TYPES, ',') WITHIN GROUP(ORDER BY LIP_ID) AS CTYPE FROM ("
					+ " SELECT DISTINCT LIP_ID,COVERAGE_TYPES"
					+ " FROM FNA_LIFEINSURANCE_BASICRIDERS WHERE FNA_ID IN "
					+ "	(SELECT"
					+ " A.FNA_ID "
					+ " FROM    FNA_SELFSPOUSE_DETS A,FNA_SELFSPOUSE_DETS B"
					+ " WHERE    UPPER(LTRIM(RTRIM(A.DF_SELF_NAME))) = UPPER(LTRIM(RTRIM(B.DF_SELF_NAME))) "
					+ "     AND A.ADVSTF_ID = B.ADVSTF_ID"
					+ "		AND B.FNA_ID = '"+strFnaId+"' )"
					+ "  AND COVERAGE_TYPES IS NOT NULL ) "
					+ " GROUP BY LIP_ID )"
					+ " CONNECT BY REGEXP_SUBSTR(CTYPE, '[^,]+', 1, LEVEL) IS NOT NULL ORDER BY 1 ";
			 
			logger.info(SQL_CATG_QUERY);
			coverageList =  dao.searchByNativeSQLQuery(SQL_CATG_QUERY);

		return coverageList;
	}
	
public List openClntLifeInsCovList(String strFnaId) {
		
		List coverageList = new ArrayList();

			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
			DBInterface dao = (DBInterface) appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
				
			String SQL_COV_QUERY = "SELECT cover_name, SUM(decode(cover_name, 'Disability'," 
			+ " benefit_amt, maa_amtass)) amt_utilised_by_cover"
			+ " FROM ( SELECT DISTINCT cover_id, lip_id, fna_id, cover_name, maa_amtass,"
			+ " benefit_amt FROM fna_lifeinsurance_coverages WHERE fna_id IN ("
			+ " SELECT a.fna_id FROM fna_selfspouse_dets a, fna_selfspouse_dets b"
			+ " WHERE upper(ltrim(rtrim(a.df_self_name))) = upper(ltrim(rtrim(b.df_self_name)))"
			//+ " AND a.advstf_id = b.advstf_id AND b.fna_id = '"+strFnaId+"' " 
			+ " AND a.advstf_id = b.advstf_id AND b.fna_id = 'FNA0000000000001746' " 
			+ " )  AND cover_name = 'Death_Benefit' ) GROUP BY cover_name ";
			 
			System.out.println("SQL_COV_QUERY--------->"+SQL_COV_QUERY);
			logger.info(SQL_COV_QUERY);
			coverageList =  dao.searchByNativeSQLQuery(SQL_COV_QUERY);

		return coverageList;
	}
	
public List openClntLifeInsTpdCovList(String strFnaId) {
	
	List coverageList = new ArrayList();

		ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
		DBInterface dao = (DBInterface) appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
			
		String SQL_COV_QUERY = "SELECT cover_name, SUM(decode(cover_name, 'Disability'," 
		+ " benefit_amt, maa_amtass)) amt_utilised_by_cover"
		+ " FROM ( SELECT DISTINCT cover_id, lip_id, fna_id, cover_name, maa_amtass,"
		+ " benefit_amt FROM fna_lifeinsurance_coverages WHERE fna_id IN ("
		+ " SELECT a.fna_id FROM fna_selfspouse_dets a, fna_selfspouse_dets b"
		+ " WHERE upper(ltrim(rtrim(a.df_self_name))) = upper(ltrim(rtrim(b.df_self_name)))"
		+ " AND a.advstf_id = b.advstf_id AND b.fna_id = '"+strFnaId+"' " 
		//+ " AND a.advstf_id = b.advstf_id AND b.fna_id = 'FNA0000000000001746' " 
		+ " ) AND cover_name = 'TPD' ) GROUP BY cover_name ";
		 
		System.out.println("SQL_COV_QUERY--------->"+SQL_COV_QUERY);
		logger.info(SQL_COV_QUERY);
		coverageList =  dao.searchByNativeSQLQuery(SQL_COV_QUERY);

	return coverageList;
}
public List openClntLifeInsEarlyCovList(String strFnaId) {
	
	List coverageList = new ArrayList();

		ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
		DBInterface dao = (DBInterface) appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
			
		String SQL_COV_QUERY = "SELECT cover_name, SUM(decode(cover_name, 'Disability'," 
		+ " benefit_amt, maa_amtass)) amt_utilised_by_cover"
		+ " FROM ( SELECT DISTINCT cover_id, lip_id, fna_id, cover_name, maa_amtass,"
		+ " benefit_amt FROM fna_lifeinsurance_coverages WHERE fna_id IN ("
		+ " SELECT a.fna_id FROM fna_selfspouse_dets a, fna_selfspouse_dets b"
		+ " WHERE upper(ltrim(rtrim(a.df_self_name))) = upper(ltrim(rtrim(b.df_self_name)))"
		+ " AND a.advstf_id = b.advstf_id AND b.fna_id = '"+strFnaId+"' " 
		//+ " AND a.advstf_id = b.advstf_id AND b.fna_id = 'FNA0000000000001746' " 
		+ " ) AND cover_name = 'CI-Early' ) GROUP BY cover_name ";
		 
		System.out.println("SQL_COV_QUERY--------->"+SQL_COV_QUERY);
		logger.info(SQL_COV_QUERY);
		coverageList =  dao.searchByNativeSQLQuery(SQL_COV_QUERY);

	return coverageList;
}

public List openClntLifeInsAdvCovList(String strFnaId) {
	
	List coverageList = new ArrayList();

		ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
		DBInterface dao = (DBInterface) appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
			
		String SQL_COV_QUERY = "SELECT cover_name, SUM(decode(cover_name, 'Disability'," 
		+ " benefit_amt, maa_amtass)) amt_utilised_by_cover"
		+ " FROM ( SELECT DISTINCT cover_id, lip_id, fna_id, cover_name, maa_amtass,"
		+ " benefit_amt FROM fna_lifeinsurance_coverages WHERE fna_id IN ("
		+ " SELECT a.fna_id FROM fna_selfspouse_dets a, fna_selfspouse_dets b"
		+ " WHERE upper(ltrim(rtrim(a.df_self_name))) = upper(ltrim(rtrim(b.df_self_name)))"
		+ " AND a.advstf_id = b.advstf_id AND b.fna_id = '"+strFnaId+"' " 
		//+ " AND a.advstf_id = b.advstf_id AND b.fna_id = 'FNA0000000000001746' " 
		+ " ) AND cover_name = 'CI-Advanced' ) GROUP BY cover_name ";
		 
		System.out.println("SQL_COV_QUERY--------->"+SQL_COV_QUERY);
		logger.info(SQL_COV_QUERY);
		coverageList =  dao.searchByNativeSQLQuery(SQL_COV_QUERY);

	return coverageList;
}

	public void updateClientDetails(FnaSelfspouseDets client) {
		// TODO Auto-generated method stub 
			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
			DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
		 
			dao.updateObject(client); 
	}
	
//	public void updateAgreementsDetails(FipaAgreements fnaAgreements) {
//		// TODO Auto-generated method stub 
//		
//		ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
//			DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
//			
//			dao.updateObject(fnaAgreements);
// 
//	}
	public void updateAppTypesDetails(FnaApptypes fnaApptypes) {
		// TODO Auto-generated method stub 
		ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
			DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
			
			dao.updateObject(fnaApptypes);
 
	}
	public void updateAnalysisTypesDetails(FnaApptypes fnaAnalytypes) {
		// TODO Auto-generated method stub 
		ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
			DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
			
			dao.updateObject(fnaAnalytypes);
 
	}
	public void updateAdvDclDetails(FnaAdvDeclare fnaAdvDcldets) {
		// TODO Auto-generated method stub 
		
		ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
			DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
			
			dao.updateObject(fnaAdvDcldets);
 
	}


	public void updateExpDetails(FnaExpenditureDets fnaExpdets) {
		// TODO Auto-generated method stub 
			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
			DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
			
			dao.updateObject(fnaExpdets); 
	}


	public void updContgDetails(FnaContingencyDets fnaContgDets) {
		// TODO Auto-generated method stub 
			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
			DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
			
			dao.updateObject(fnaContgDets); 
	}
	public void updContingencyDetails(FnaContingencyDets fnaContDets) {
		// TODO Auto-generated method stub 
			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
			DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN); 
			dao.updateObject(fnaContDets); 
	}

	public void updPersPrioDetails(FnaPersprio fnaPersDets) {
		// TODO Auto-generated method stub 
			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
			DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
			
			dao.updateObject(fnaPersDets); 
		
	}

	public void updSrcOfIncDetails(FnaSrcofincome fnaSrcOfincDets) {
		// TODO Auto-generated method stub 
			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
			DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
			dao.updateObject(fnaSrcOfincDets);
			 
	}

//	public void updCpfDetails(FnaCpfDets fnCpfDets) {
//		// TODO Auto-generated method stub 
//			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
//			DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
//			
//			dao.updateObject(fnCpfDets); 
//	}

	public void updFinLbltyDetails(FnaFinLiability fnaFinLbltyDets) {
		// TODO Auto-generated method stub 
			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
			DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
			
			dao.updateObject(fnaFinLbltyDets); 
	}

	public void updCurAssDetails(FnaCurassDets fnaCurAssDets) {
		// TODO Auto-generated method stub 
			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
			DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
			
			dao.updateObject(fnaCurAssDets); 
	}

	public void updRetirePlnDetails(FnaRetireplanDets fnaRetirePlnDets) {
		// TODO Auto-generated method stub 
			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
			DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
			
			dao.updateObject(fnaRetirePlnDets); 
	}

	public void updInvstDetails(FnaInvsetmentSummary fnaInvstDets) {
		// TODO Auto-generated method stub 
			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
			DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
			
			dao.updateObject(fnaInvstDets); 
	}

	public void updCashAssDetails(FnaAssetCashdets fnaCashAssDets) {
		// TODO Auto-generated method stub 
			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
			DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
			
			dao.updateObject(fnaCashAssDets); 
	}

	public void updOthAssDetails(FnaAssetOtherdets fnaOthAssDets) {
		// TODO Auto-generated method stub 
			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
			DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
			
			dao.updateObject(fnaOthAssDets); 
	}
	
	
	public void updRskPrefDetails(FnaRiskprefDets fnaRiskPrefDets) {
		// TODO Auto-generated method stub 
			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
			DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
			
			dao.updateObject(fnaRiskPrefDets); 
	}
	
	public void updSumAnlysDetails(FnaSummaryAnalysis fnaSumAnalysisDets) {
		// TODO Auto-generated method stub 
			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
			DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
			
			dao.updateObject(fnaSumAnalysisDets); 
	}

	
	public void updCdAhocDetails(FnaAdvDeclare fnaCdAdhocDets) {
		// TODO Auto-generated method stub 
			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
			DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
			
			dao.updateObject(fnaCdAdhocDets); 
	}
	
	public String updLifeInsrceDetails(FnaLifeinsuranceDets fnaLifeInsurce) {
		// TODO Auto-generated method stub 
			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
			DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
			
			dao.updateObject(fnaLifeInsurce);
			
			return fnaLifeInsurce.getLipId();
	}
	
 
	

	/*public String saveSpseDetails() {
		
		String strSpouseId = ""; 
			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
			DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);	
		 
		return strSpouseId;
		
	}*/


	/*public String saveAgrmtDetails() {
		// TODO Auto-generated method stub
		
		String strAgrId = ""; 
			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
			DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);			
 
		return strAgrId;
	}*/
	
	public List saveChilddetails(Vector vectChildDetails,String strFNAId) {
		List insupdids = new ArrayList();
		
			String strChildPartId="";
			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
			DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);			
			
			Object objChildDets = null;
			List insertList = new ArrayList(0);
			List updateList = new ArrayList(1);
			List deleteList = new ArrayList(2);
			List updateListAS = new ArrayList(3);
			
			int vectorSize = vectChildDetails.size();

			if (vectorSize > 0) {
				insertList = (List) vectChildDetails.elementAt(0);
				updateList = (List) vectChildDetails.elementAt(1);
				deleteList = (List) vectChildDetails.elementAt(2);
				updateListAS = (List)vectChildDetails.elementAt(3);
			}

			int insSize = insertList.size();
			 
			if (insSize > 0) {
				
				FnaChilddetails childdetails=new FnaChilddetails();
				FnaSelfspouseDets custDets = new FnaSelfspouseDets();

				
				if(!FipaUtils.nullOrBlank(strFNAId)){
					custDets.setFnaId(strFNAId);				
				}
				
				String strMaxId = (String) dao.fetchMaxId(childdetails, "fnaChildId");
				
			
				
				Iterator itIns = insertList.iterator();
				while (itIns.hasNext()) {
					 
					strMaxId=FipaUtils.getFormattedMaxPK(strMaxId, "CHD", 17);
					strChildPartId = strMaxId;
					
					 
					childdetails = (FnaChilddetails) itIns.next();
					childdetails.setFnaChildId(strChildPartId);
					childdetails.setFnaSelfspouseDets(custDets);
			
					insupdids.add(childdetails.getFnaChildId());
				}
				
				objChildDets = childdetails;			
				dao.insertTableObject(insertList, objChildDets);

			}

			int updSize = updateList.size();
			 
			if (updSize > 0) {
				
				FnaChilddetails childdetails=new FnaChilddetails();
				Iterator itUpd = updateList.iterator();
				while (itUpd.hasNext()) {
					childdetails = (FnaChilddetails) itUpd.next();
					insupdids.add(childdetails.getFnaChildId());	
				}
				
			 
				dao.updateTableObject(updateList, objChildDets);
			}

			
			int delSize = deleteList.size();
			 
			if (delSize > 0) {
				dao.deleteTableObject(deleteList, objChildDets);
			}
			
			int updSizeAs = updateListAS.size();
			if (updSizeAs > 0) {
				
//				FnaChilddetails childdetails=new FnaChilddetails();
//				Iterator itUpd = updateList.iterator();
//				while (itUpd.hasNext()) {
//					childdetails = (FnaChilddetails) itUpd.next();
//					insupdids.add(childdetails.getFnaChildId());	
//				}
				
			 
				dao.updateOrSaveTableObject(updateListAS, objChildDets);
			}
			
			return insupdids;
		}
	public String saveFinGoalsdetails(Vector vectFinGoalsDetails,String strFNAId) {
		 
			String strFinglsId="";
			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
			DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);			
			
			Object objFinGoalsDets = null;
			List insertList = new ArrayList(0);
			List updateList = new ArrayList(1);
			List deleteList = new ArrayList(2);
			List updateListAS = new ArrayList(3);
			
			int vectorSize = vectFinGoalsDetails.size();

			if (vectorSize > 0) {
				insertList = (List) vectFinGoalsDetails.elementAt(0);
				updateList = (List) vectFinGoalsDetails.elementAt(1);
				deleteList = (List) vectFinGoalsDetails.elementAt(2);
				updateListAS = (List)vectFinGoalsDetails.elementAt(3);
			}

			int insSize = insertList.size();
			 
			if (insSize > 0) {
				
				FnaFingoalsconcern FinGoalsdetails=new FnaFingoalsconcern();
				FnaSelfspouseDets custDets = new FnaSelfspouseDets();

				
				if(!FipaUtils.nullOrBlank(strFNAId)){
					custDets.setFnaId(strFNAId);				
				}
				
				String strMaxId = (String) dao.fetchMaxId(FinGoalsdetails, "fnaGoalId");
				
				
				Iterator itIns = insertList.iterator();
				while (itIns.hasNext()) {
					 
					
					strMaxId=FipaUtils.getFormattedMaxPK(strMaxId, "FIN", 17);
					strFinglsId = strMaxId;
					
					
					
					 
					FinGoalsdetails = (FnaFingoalsconcern) itIns.next();
					FinGoalsdetails.setFnaGoalId(strFinglsId);
					FinGoalsdetails.setFnaSelfspouseDets(custDets);
			
			     
				}
				objFinGoalsDets =FinGoalsdetails;			
				dao.insertTableObject(insertList, objFinGoalsDets);

			}

			int updSize = updateList.size();
			 
			if (updSize > 0) {
			 
				dao.updateTableObject(updateList, objFinGoalsDets);
			}

			
			int delSize = deleteList.size();
			 
			if (delSize > 0) {
				dao.deleteTableObject(deleteList, objFinGoalsDets);
			}
			
			int updSizeAs = updateListAS.size();
			if (updSizeAs > 0) {
			
			 
				dao.updateOrSaveTableObject(updateListAS, objFinGoalsDets);
			}
			
			
			return strFinglsId;
		}
	
public String saveDepdetails(Vector vectDeptDetails,String strFNAId) {
	  
		String strDepId="";
		ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
		DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);			
		
		Object objDeptDets = null;
		List insertList = new ArrayList(0);
		List updateList = new ArrayList(1);
		List deleteList = new ArrayList(2);
		List updateListAS = new ArrayList(3);
		
		int vectorSize = vectDeptDetails.size();

		if (vectorSize > 0) {
			insertList = (List) vectDeptDetails.elementAt(0);
			updateList = (List) vectDeptDetails.elementAt(1);
			deleteList = (List) vectDeptDetails.elementAt(2);
			updateListAS = (List)vectDeptDetails.elementAt(3);
		}

		int insSize = insertList.size();
	 
		if (insSize > 0) {
			
			FnaDependantDets deptdetails=new FnaDependantDets();
			FnaSelfspouseDets custDets = new FnaSelfspouseDets();

			
			if(!FipaUtils.nullOrBlank(strFNAId)){
				custDets.setFnaId(strFNAId);				
			}
			
			String strMaxId = (String) dao.fetchMaxId(deptdetails, "depnId");
			
			
			Iterator itIns = insertList.iterator();
			while (itIns.hasNext()) {
				 
				
				strMaxId=FipaUtils.getFormattedMaxPK(strMaxId, "DEP", 17);
				strDepId = strMaxId;
				
				
				 
				deptdetails = (FnaDependantDets) itIns.next();
				deptdetails.setDepnId(strDepId);
				deptdetails.setFnaSelfspouseDets(custDets);
		
		     
			}
			objDeptDets =deptdetails;			
			dao.insertTableObject(insertList, objDeptDets);

		}

		int updSize = updateList.size();
		 
		if (updSize > 0) { 
			dao.updateTableObject(updateList, objDeptDets);
		}

		
		int delSize = deleteList.size(); 
		if (delSize > 0) {
			dao.deleteTableObject(deleteList, objDeptDets);
		}
		
		int updSizeAs = updateListAS.size();
		if (updSizeAs > 0) {
					
		 
			dao.updateOrSaveTableObject(updateListAS, objDeptDets);
		}
		return strDepId;
	}

public String saveOtherAssetdetails(Vector vectOtherAssetDetails,String strFNAId) {
	  
	String strDepId="";
	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
	DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);			
	
	Object objDeptDets = null;
	List insertList = new ArrayList(0);
	List updateList = new ArrayList(1);
	List deleteList = new ArrayList(2);
	List updateListAS = new ArrayList(3);
	
	int vectorSize = vectOtherAssetDetails.size();

	if (vectorSize > 0) {
		insertList = (List) vectOtherAssetDetails.elementAt(0);
		updateList = (List) vectOtherAssetDetails.elementAt(1);
		deleteList = (List) vectOtherAssetDetails.elementAt(2);
		updateListAS = (List)vectOtherAssetDetails.elementAt(3);
	}

	int insSize = insertList.size();
 
	if (insSize > 0) {
		
		FnaOtherAssetdets deptdetails=new FnaOtherAssetdets();
		FnaSelfspouseDets custDets = new FnaSelfspouseDets();

		
		if(!FipaUtils.nullOrBlank(strFNAId)){
			custDets.setFnaId(strFNAId);				
		}
		
		String strMaxId = (String) dao.fetchMaxId(deptdetails, "othId");
		
		
		Iterator itIns = insertList.iterator();
		while (itIns.hasNext()) {
			 
			
			strMaxId=FipaUtils.getFormattedMaxPK(strMaxId, "OTH", 17);
			strDepId = strMaxId;
			
			
			 
			deptdetails = (FnaOtherAssetdets) itIns.next();
			deptdetails.setOthId(strDepId);
			deptdetails.setFnaSelfspouseDets(custDets);
	
	     
		}
		objDeptDets =deptdetails;			
		dao.insertTableObject(insertList, objDeptDets);

	}

	int updSize = updateList.size();
	 
	if (updSize > 0) { 
		dao.updateTableObject(updateList, objDeptDets);
	}

	
	int delSize = deleteList.size(); 
	if (delSize > 0) {
		dao.deleteTableObject(deleteList, objDeptDets);
	}
	
	int updSizeAs = updateListAS.size();
	if (updSizeAs > 0) {
				
	 
		dao.updateOrSaveTableObject(updateListAS, objDeptDets);
	}
	return strDepId;
}

public String saveSAInvdetails(Vector vectSavingInvDetails, String strFNAId) {
	// TODO Auto-generated method stub 
	String strSAInvId="";
	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
	DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);			
	
	Object objSAInvDets = null;
	List insertSAInvList = new ArrayList(0);
	List updateSAInvList = new ArrayList(1);
	List deleteSAInvList = new ArrayList(2);
	List updateListAS = new ArrayList(3);
	
	int vectorSize = vectSavingInvDetails.size();

	if (vectorSize > 0) {
		insertSAInvList = (List) vectSavingInvDetails.elementAt(0);
		updateSAInvList = (List) vectSavingInvDetails.elementAt(1);
		deleteSAInvList = (List) vectSavingInvDetails.elementAt(2);
		updateListAS = (List)vectSavingInvDetails.elementAt(3);
	}

	int insSize = insertSAInvList.size(); 
	if (insSize > 0) {
		
		FnaSavingsinvDets fnaSAInvdetails=new FnaSavingsinvDets();
		FnaSelfspouseDets custDets = new FnaSelfspouseDets();

		
		if(!FipaUtils.nullOrBlank(strFNAId)){
			custDets.setFnaId(strFNAId);				
		}
		
		String strMaxId = (String) dao.fetchMaxId(fnaSAInvdetails, "sainvId");
		
		
		Iterator itIns = insertSAInvList.iterator();
		while (itIns.hasNext()) {
			 
			strMaxId=FipaUtils.getFormattedMaxPK(strMaxId, "SIN", 17);
			strSAInvId = strMaxId;
			 
			 
			fnaSAInvdetails = (FnaSavingsinvDets) itIns.next();
			fnaSAInvdetails.setSainvId(strSAInvId);
			fnaSAInvdetails.setFnaSelfspouseDets(custDets);
	
	     
		}
		objSAInvDets = fnaSAInvdetails;			
		dao.insertTableObject(insertSAInvList, objSAInvDets);

	}

	int updSize = updateSAInvList.size(); 
	if (updSize > 0) {
		dao.updateTableObject(updateSAInvList, objSAInvDets);
	}

	
	int delSize = deleteSAInvList.size(); 
	if (delSize > 0) {
		dao.deleteTableObject(deleteSAInvList, objSAInvDets);
	}
	
	int updSizeAs = updateListAS.size();
	if (updSizeAs > 0) {
				
	 
		dao.updateOrSaveTableObject(updateListAS, objSAInvDets);
	}
	
	return strSAInvId;
}	





public String saveAssetsDetails(Vector vectAssetdetails, String strFNAId) {
	// TODO Auto-generated method stub 
	
	String strAssetsId="";
	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
	DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);			
	
	Object objAsstDets = null;
	List insertAsstList = new ArrayList(0);
	List updateAsstList = new ArrayList(1);
	List deleteAsstList = new ArrayList(2);
	List updateListAS = new ArrayList(3);
	
	int vectorSize = vectAssetdetails.size();

	if (vectorSize > 0) {
		insertAsstList = (List) vectAssetdetails.elementAt(0);
		updateAsstList = (List) vectAssetdetails.elementAt(1);
		deleteAsstList = (List) vectAssetdetails.elementAt(2);
		updateListAS = (List)vectAssetdetails.elementAt(3);
	}

	int insSize = insertAsstList.size(); 
	if (insSize > 0) {
		
		FnaAssetBusiandpersdets fnabusiperdetails=new FnaAssetBusiandpersdets();
		FnaSelfspouseDets custDets = new FnaSelfspouseDets();

		
		if(!FipaUtils.nullOrBlank(strFNAId)){
			custDets.setFnaId(strFNAId);				
		}
		
		String strMaxId = (String) dao.fetchMaxId(fnabusiperdetails, "busipersId");
		
		
		Iterator itIns = insertAsstList.iterator();
		while (itIns.hasNext()) {
			  
			strMaxId=FipaUtils.getFormattedMaxPK(strMaxId, "BPA", 17);
			strAssetsId = strMaxId;
			  
			fnabusiperdetails = (FnaAssetBusiandpersdets) itIns.next();
			fnabusiperdetails.setBusipersId(strAssetsId);
			fnabusiperdetails.setFnaSelfspouseDets(custDets);
	
	     
		}
		objAsstDets = fnabusiperdetails;			
		dao.insertTableObject(insertAsstList, objAsstDets);

	}

	int updSize = updateAsstList.size(); 
	if (updSize > 0) {
		dao.updateTableObject(updateAsstList, objAsstDets);
	}

	
	int delSize = deleteAsstList.size(); 
	if (delSize > 0) {
		dao.deleteTableObject(deleteAsstList, objAsstDets);
	}
	
	int updSizeAs = updateListAS.size();
	if (updSizeAs > 0) {
				
	 
		dao.updateOrSaveTableObject(updateListAS, objAsstDets);
	}
	
	return strAssetsId;
}	



public String saveOthArOfCnDetails(Vector vectOthArCrndetails, String strFNAId) {
	// TODO Auto-generated method stub 
	
	String OthArofcnId="";
	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
	DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);			
	
	Object objOACnDets = null;
	List insertOACnList = new ArrayList(0);
	List updateOACnList = new ArrayList(1);
	List deleteOACnList = new ArrayList(2);
	List updateListAS = new ArrayList(3);
	
	int vectorSize = vectOthArCrndetails.size();

	if (vectorSize > 0) {
		insertOACnList = (List) vectOthArCrndetails.elementAt(0);
		updateOACnList = (List) vectOthArCrndetails.elementAt(1);
		deleteOACnList = (List) vectOthArCrndetails.elementAt(2);
		updateListAS = (List)vectOthArCrndetails.elementAt(3);
	}

	int insSize = insertOACnList.size(); 
	if (insSize > 0) {
		
		FnaOthareaconcern fnaOACrndetails=new FnaOthareaconcern();
		FnaSelfspouseDets custDets = new FnaSelfspouseDets();

		
		if(!FipaUtils.nullOrBlank(strFNAId)){
			custDets.setFnaId(strFNAId);				
		}
		
		String strMaxId = (String) dao.fetchMaxId(fnaOACrndetails, "fnaOacId");
		
		
		Iterator itIns = insertOACnList.iterator();
		while (itIns.hasNext()) {
			 
			
			strMaxId=FipaUtils.getFormattedMaxPK(strMaxId, "OAC", 17);
			OthArofcnId = strMaxId;
			
			 
			fnaOACrndetails = (FnaOthareaconcern) itIns.next();
			fnaOACrndetails.setFnaOacId(OthArofcnId);
			fnaOACrndetails.setFnaSelfspouseDets(custDets);
	
	     
		}
		objOACnDets = fnaOACrndetails;			
		dao.insertTableObject(insertOACnList, objOACnDets);

	}

	int updSize = updateOACnList.size(); 
	if (updSize > 0) {
		dao.updateTableObject(updateOACnList, objOACnDets);
	}

	
	int delSize = deleteOACnList.size(); 
	if (delSize > 0) {
		dao.deleteTableObject(deleteOACnList, objOACnDets);
	}
	
	int updSizeAs = updateListAS.size();
	if (updSizeAs > 0) {
				
	 
		dao.updateOrSaveTableObject(updateListAS, objOACnDets);
	}
	
	return OthArofcnId;
}	


//public void saveReasonsDetails(Vector vectReasonsdetails, String strFNAId) {
//	// TODO Auto-generated method stub 
//	String ReasonsId="";
//	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
//	DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);			
//	
//	Object objRsnDets = null;
//	List insertRsnList = new ArrayList(0);
//	List updateRsnList = new ArrayList(1);
//	List deleteRsnList = new ArrayList(2);
//	
//	int vectorSize = vectReasonsdetails.size();
//
//	if (vectorSize > 0) {
//		insertRsnList = (List) vectReasonsdetails.elementAt(0);
//		updateRsnList = (List) vectReasonsdetails.elementAt(1);
//		deleteRsnList = (List) vectReasonsdetails.elementAt(2);
//	}
//
//	int insSize = insertRsnList.size(); 
//	if (insSize > 0) {
//		
//		FnaRecomReasons fnaresndetails=new FnaRecomReasons();
//		FnaSelfspouseDets custDets = new FnaSelfspouseDets();
//
//		
//		if(!FipaUtils.nullOrBlank(strFNAId)){
//			custDets.setFnaId(strFNAId);				
//		}
//		
//		String strMaxId = (String) dao.fetchMaxId(fnaresndetails, "fnaReasId");
//		
//		
//		Iterator itIns = insertRsnList.iterator();
//		while (itIns.hasNext()) {
//			 
//			strMaxId=FipaUtils.getFormattedMaxPK(strMaxId, "RSN", 17);
//			ReasonsId = strMaxId;
//			  
//			fnaresndetails = (FnaRecomReasons) itIns.next();
//			fnaresndetails.setFnaReasId(ReasonsId);
//			fnaresndetails.setFnaSelfspouseDets(custDets);
//	
//	     
//		}
//		objRsnDets = fnaresndetails;			
//		dao.insertTableObject(insertRsnList, objRsnDets);
//
//	}
//
//	int updSize = updateRsnList.size(); 
//	if (updSize > 0) {
//		dao.updateTableObject(updateRsnList, objRsnDets);
//	}
//
//	
//	int delSize = deleteRsnList.size(); 
//	if (delSize > 0) {
//		dao.deleteTableObject(deleteRsnList, objRsnDets);
//	}
//}	

//public void saveFinGldProiDetails(Vector vectFinGlsPrioDetails, String strFNAId) {
//	// TODO Auto-generated method stub 
//	
//	String FinGlsPrioId="";
//	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
//	DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);			
//	
//	Object objFGProDets = null;
//	List insertFGProList = new ArrayList(0);
//	List updateFGProList = new ArrayList(1);
//	List deleteFGProList = new ArrayList(2);
//	
//	int vectorSize = vectFinGlsPrioDetails.size();
//
//	if (vectorSize > 0) {
//		insertFGProList = (List) vectFinGlsPrioDetails.elementAt(0);
//		updateFGProList = (List) vectFinGlsPrioDetails.elementAt(1);
//		deleteFGProList = (List) vectFinGlsPrioDetails.elementAt(2);
//	}
//
//	int insSize = insertFGProList.size(); 
//	if (insSize > 0) {
//		
//		FnaFingoalsconcern fnafgpriodets =new FnaFingoalsconcern();
//		FnaSelfspouseDets custDets = new FnaSelfspouseDets();
//
//		
//		if(!FipaUtils.nullOrBlank(strFNAId)){
//			custDets.setFnaId(strFNAId);				
//		}
//		
//		String strMaxId = (String) dao.fetchMaxId(fnafgpriodets, "txtFldFgPkId");
//		
//		
//		Iterator itIns = insertFGProList.iterator();
//		while (itIns.hasNext()) {
//			  
//			strMaxId=FipaUtils.getFormattedMaxPK(strMaxId, "FGP", 17);
//			FinGlsPrioId = strMaxId;
//			   
//			fnafgpriodets = (FnaFingoalsconcern) itIns.next();
//			fnafgpriodets.setFnaGoalId(FinGlsPrioId);
//			fnafgpriodets.setSelFnaFinGoalPriSelfspouseDets(custDets);
//			 
//		}
//		objFGProDets = fnafgpriodets;			
//		dao.insertTableObject(insertFGProList, objFGProDets);
//
//	}
//
//	int updSize = updateFGProList.size(); 
//	if (updSize > 0) {
//		dao.updateTableObject(updateFGProList, objFGProDets);
//	}
//
//	
//	int delSize = deleteFGProList.size(); 
//	if (delSize > 0) {
//		dao.deleteTableObject(deleteFGProList, objFGProDets);
//	}
//}	


public List<String> saveCPFBalanDets(Vector vectCPFBalanceDets, String strFNAId) {
	// TODO Auto-generated method stub 
	List newIdList = new ArrayList();
	String cpfbalcId="";
	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
	DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);			
	
	Object objCpfMCtrbDets = null;
	List insertMCtrbList = new ArrayList(0);
	List updateMCtrbList = new ArrayList(1);
	List deleteMCtrbList = new ArrayList(2);
//	List updateListAS = new ArrayList(3);
	
	int vectorSize = vectCPFBalanceDets.size();

	if (vectorSize > 0) {
		insertMCtrbList = (List) vectCPFBalanceDets.elementAt(0);
		updateMCtrbList = (List) vectCPFBalanceDets.elementAt(1);
		deleteMCtrbList = (List) vectCPFBalanceDets.elementAt(2);
//		updateListAS = (List)vectCPFBalanceDets.elementAt(3);
	}

	int insSize = insertMCtrbList.size(); 
	if (insSize > 0) {
		
		FnaCpfBalanceDets fnaCPFBalance=new FnaCpfBalanceDets();
		FnaSelfspouseDets custDets = new FnaSelfspouseDets();

		
		if(!FipaUtils.nullOrBlank(strFNAId)){
			custDets.setFnaId(strFNAId);				
		}
		
		String strMaxId = (String) dao.fetchMaxId(fnaCPFBalance, "cpfId");
		
		Iterator itIns = insertMCtrbList.iterator();
		while (itIns.hasNext()) {
			
			
			 
			strMaxId=FipaUtils.getFormattedMaxPK(strMaxId, "CBD", 17);
			cpfbalcId = strMaxId;
			  
			fnaCPFBalance = (FnaCpfBalanceDets) itIns.next();
			String cpfacc = fnaCPFBalance.getMasterCpfAcctype().getCpfAcId();
			String selfsps = fnaCPFBalance.getCpfSelfOrSps();
			
			fnaCPFBalance.setCpfId(cpfbalcId);
			fnaCPFBalance.setFnaSelfspouseDets(custDets);
	
			newIdList.add(cpfacc+"^"+selfsps+"^"+cpfbalcId);
		}
		objCpfMCtrbDets = fnaCPFBalance;			
		dao.insertTableObject(insertMCtrbList, objCpfMCtrbDets);

	}

	int updSize = updateMCtrbList.size(); 
	if (updSize > 0) {
		dao.updateTableObject(updateMCtrbList, objCpfMCtrbDets);
	}

	
	int delSize = deleteMCtrbList.size(); 
	if (delSize > 0) {
		dao.deleteTableObject(deleteMCtrbList, objCpfMCtrbDets);
	}
	
//	int updSizeAs = updateListAS.size();

//	if (updSizeAs > 0) {
//		
//		 
//		dao.updateOrSaveTableObject(updateListAS, objCpfMCtrbDets);
//	}
	
	return newIdList;
}	

public List<String> saveCpfMtlyCtbDetails(Vector vectCpfMonthlyCtrb, String strFNAId) {
	
	List newIdList = new ArrayList();
	
	// TODO Auto-generated method stub 
	String cpfMthCtdId="";
	
	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
	DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);			
	
	Object objCpfMCtrbDets = null;
	List insertMCtrbList = new ArrayList(0);
	List updateMCtrbList = new ArrayList(1);
	List deleteMCtrbList = new ArrayList(2);
//	List updateListAS = new ArrayList(3);
	
	int vectorSize = vectCpfMonthlyCtrb.size();

	if (vectorSize > 0) {
		insertMCtrbList = (List) vectCpfMonthlyCtrb.elementAt(0);
		updateMCtrbList = (List) vectCpfMonthlyCtrb.elementAt(1);
		deleteMCtrbList = (List) vectCpfMonthlyCtrb.elementAt(2);
//		updateListAS = (List)vectCpfMonthlyCtrb.elementAt(3);
	}

	int insSize = insertMCtrbList.size(); 
	if (insSize > 0) {
		
		FnaCpfMonthcontDets fnaCpfMthCtdetails=new FnaCpfMonthcontDets();
		FnaSelfspouseDets custDets = new FnaSelfspouseDets();

		
		if(!FipaUtils.nullOrBlank(strFNAId)){
			custDets.setFnaId(strFNAId);				
		}
		
		String strMaxId = (String) dao.fetchMaxId(fnaCpfMthCtdetails, "ccPkId");
		
		
		Iterator itIns = insertMCtrbList.iterator();
		while (itIns.hasNext()) {
			 
			
			strMaxId=FipaUtils.getFormattedMaxPK(strMaxId, "CCP", 17);
			cpfMthCtdId = strMaxId;
			 
			fnaCpfMthCtdetails = (FnaCpfMonthcontDets) itIns.next();
			fnaCpfMthCtdetails.setCcPkId(cpfMthCtdId);
			fnaCpfMthCtdetails.setFnaSelfspouseDets(custDets);
			
			String strSelfSps = fnaCpfMthCtdetails.getCcSelfOrSps();
			newIdList.add(strSelfSps+"^"+cpfMthCtdId);
	
	     
		}
		objCpfMCtrbDets = fnaCpfMthCtdetails;			
		dao.insertTableObject(insertMCtrbList, objCpfMCtrbDets);

	}

	int updSize = updateMCtrbList.size(); 
	if (updSize > 0) {
		dao.updateTableObject(updateMCtrbList, objCpfMCtrbDets);
	}

	
	int delSize = deleteMCtrbList.size(); 
	if (delSize > 0) {
		dao.deleteTableObject(deleteMCtrbList, objCpfMCtrbDets);
	}
	
	
//	int updSizeAs = updateListAS.size();

//	if (updSizeAs > 0) {
				
//	 
//		dao.updateOrSaveTableObject(updateListAS, objCpfMCtrbDets);
//	}
	
	return newIdList;
}	


//public void saveCpfTopupsDetails(Vector vectCpfTopUpCtrb, String strFNAId) {
//	// TODO Auto-generated method stub 
//	
//	String cpftopupId="";
//	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
//	DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);			
//	
//	Object objTopupsDets = null;
//	List insertTopupsList = new ArrayList(0);
//	List updateTopupsList = new ArrayList(1);
//	List deleteTopupsList = new ArrayList(2);
//	
//	int vectorSize = vectCpfTopUpCtrb.size();
//
//	if (vectorSize > 0) {
//		insertTopupsList = (List) vectCpfTopUpCtrb.elementAt(0);
//		updateTopupsList = (List) vectCpfTopUpCtrb.elementAt(1);
//		deleteTopupsList = (List) vectCpfTopUpCtrb.elementAt(2);
//	}
//
//	int insSize = insertTopupsList.size(); 
//	if (insSize > 0) {
//		
//		FnaCpfTopupDets fnaTopupdetails=new FnaCpfTopupDets();
//		FnaSelfspouseDets custDets = new FnaSelfspouseDets();
//		MasterCpfAcctype CpfAcctype = new MasterCpfAcctype();
//
//		
//		if(!FipaUtils.nullOrBlank(strFNAId)){
//			custDets.setFnaId(strFNAId);				
//		}
//		
//		 
//		String strMaxId = (String) dao.fetchMaxId(fnaTopupdetails, "txtFldCtPkid");
//		
//		
//		Iterator itIns = insertTopupsList.iterator();
//		while (itIns.hasNext()) {
//			 
//			strMaxId=FipaUtils.getFormattedMaxPK(strMaxId, "CTP", 17);
//			cpftopupId = strMaxId; 
//			fnaTopupdetails = (FnaCpfTopupDets) itIns.next();
//			fnaTopupdetails.setTxtFldCtPkid(cpftopupId);
//			fnaTopupdetails.setFnaSelfspouseDets(custDets);
//	
//	     
//		}
//		objTopupsDets = fnaTopupdetails;			
//		dao.insertTableObject(insertTopupsList, objTopupsDets);
//
//	}
//
//	int updSize = updateTopupsList.size(); 
//	if (updSize > 0) {
//		dao.updateTableObject(updateTopupsList, objTopupsDets);
//	}
//
//	
//	int delSize = deleteTopupsList.size(); 
//	if (delSize > 0) {
//		dao.deleteTableObject(deleteTopupsList, objTopupsDets);
//	}
//}	


//public void saveCpfDedtDetails(Vector vectCpfDedtnCtrb, String strFNAId) {
//	// TODO Auto-generated method stub 
//	String cpfdetsId="";
//	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
//	DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);			
//	
//	Object objDedtnDets = null;
//	List insertDedtnList = new ArrayList(0);
//	List updateDedtnList = new ArrayList(1);
//	List deleteDedtnList = new ArrayList(2);
//	
//	int vectorSize = vectCpfDedtnCtrb.size();
//
//	if (vectorSize > 0) {
//		insertDedtnList = (List) vectCpfDedtnCtrb.elementAt(0);
//		updateDedtnList = (List) vectCpfDedtnCtrb.elementAt(1);
//		deleteDedtnList = (List) vectCpfDedtnCtrb.elementAt(2);
//	}
//
//	int insSize = insertDedtnList.size(); 
//	if (insSize > 0) {
//		
//		FnaCpfDeductions fnadedtndetails=new FnaCpfDeductions();
//		FnaSelfspouseDets custDets = new FnaSelfspouseDets();
//
//		
//		if(!FipaUtils.nullOrBlank(strFNAId)){
//			custDets.setFnaId(strFNAId);				
//		}
//		
//		String strMaxId = (String) dao.fetchMaxId(fnadedtndetails, "txtFldCdPkid");
//		
//		
//		Iterator itIns = insertDedtnList.iterator();
//		while (itIns.hasNext()) {
//			 
//			
//			strMaxId=FipaUtils.getFormattedMaxPK(strMaxId, "CDP", 17);
//			cpfdetsId = strMaxId;
//			 
//			fnadedtndetails = (FnaCpfDeductions) itIns.next();
//			fnadedtndetails.setCdPkid(cpfdetsId);
//			fnadedtndetails.setFnaSelfspouseDets(custDets);
//	
//	     
//		}
//		objDedtnDets = fnadedtndetails;			
//		dao.insertTableObject(insertDedtnList, objDedtnDets);
//
//	}
//
//	int updSize = updateDedtnList.size(); 
//	if (updSize > 0) {
//		dao.updateTableObject(updateDedtnList, objDedtnDets);
//	}
//
//	
//	int delSize = deleteDedtnList.size(); 
//	if (delSize > 0) {
//		dao.deleteTableObject(deleteDedtnList, objDedtnDets);
//	}
//}	
 






public String saveCADdetails(Vector vectCADdetails, String strFNAId) {
	// TODO Auto-generated method stub 
	String CADId="";
	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
	DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);			
	
	Object objCADDets = null;
	List insertCADList = new ArrayList(0);
	List updateCADList = new ArrayList(1);
	List deleteCADList = new ArrayList(2);
	List updateListAS = new ArrayList(3);
	
	int vectorSize = vectCADdetails.size();

	if (vectorSize > 0) {
		insertCADList = (List) vectCADdetails.elementAt(0);
		updateCADList = (List) vectCADdetails.elementAt(1);
		deleteCADList = (List) vectCADdetails.elementAt(2);
		updateListAS = (List)vectCADdetails.elementAt(3);
	}

	int insSize = insertCADList.size(); 
	if (insSize > 0) {
		
		FnaCpfDeductions fnadedtndetails=new FnaCpfDeductions();
		FnaSelfspouseDets custDets = new FnaSelfspouseDets();

		
		if(!FipaUtils.nullOrBlank(strFNAId)){
			custDets.setFnaId(strFNAId);				
		}
		
		String strMaxId = (String) dao.fetchMaxId(fnadedtndetails, "cdPkid");
		 
		
		Iterator itIns = insertCADList.iterator();
		while (itIns.hasNext()) {
			 
			
			strMaxId=FipaUtils.getFormattedMaxPK(strMaxId, "CDP", 17);
			CADId = strMaxId;
			 
			fnadedtndetails = (FnaCpfDeductions) itIns.next();
			fnadedtndetails.setCdPkid(CADId);
			fnadedtndetails.setFnaSelfspouseDets(custDets);
	
	     
		}
		objCADDets = fnadedtndetails;			
		dao.insertTableObject(insertCADList, objCADDets);

	}

	int updSize = updateCADList.size(); 
	if (updSize > 0) {
		dao.updateTableObject(updateCADList, objCADDets);
	}

	
	int delSize = deleteCADList.size(); 
	if (delSize > 0) {
		dao.deleteTableObject(deleteCADList, objCADDets);
	}
	
	int updSizeAs = updateListAS.size();
	if (updSizeAs > 0) {				
	 
		dao.updateOrSaveTableObject(updateListAS, objCADDets);
	}
	
	return CADId;
}	




public void saveAutoAttrDets(Vector vectAutoAltdets, String strFNAId) {
	// TODO Auto-generated method stub 
	String autoAltId="";
	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
	DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);			
	
	Object objAutoAltDets = null;
	List insertAutoAltList = new ArrayList(0);
	List updateAutoAltList = new ArrayList(1); 
	List updateListAS = new ArrayList(2);
	
	int vectorSize = vectAutoAltdets.size();

	if (vectorSize > 0) {
		insertAutoAltList = (List) vectAutoAltdets.elementAt(0);
		updateAutoAltList = (List) vectAutoAltdets.elementAt(1); 
		updateListAS = (List)vectAutoAltdets.elementAt(2);
	}

	int insSize = insertAutoAltList.size(); 
	if (insSize > 0) {
		
		FnaAutoAlter fnaAutoAltr=new FnaAutoAlter();
		FnaSelfspouseDets custDets = new FnaSelfspouseDets();

		 
		
		String strMaxId = (String) dao.fetchMaxId(fnaAutoAltr, "altId");
		 
		
		
		
		Iterator itIns = insertAutoAltList.iterator();
		while (itIns.hasNext()) {
			 
			
			
			strMaxId=FipaUtils.getFormattedMaxPK(strMaxId, "ALT", 17);
			autoAltId = strMaxId;
			 
			fnaAutoAltr = (FnaAutoAlter) itIns.next();
			
			fnaAutoAltr.setAltId(autoAltId);
			if(!FipaUtils.nullOrBlank(strFNAId)){
				fnaAutoAltr.setFnaId(strFNAId);
			} 
	     
		}
		objAutoAltDets = fnaAutoAltr;			
		dao.insertTableObject(insertAutoAltList, objAutoAltDets);

	}

	int updSize = updateAutoAltList.size(); 
	if (updSize > 0) {
		dao.updateTableObject(updateAutoAltList, objAutoAltDets);
	}
	
	int updSizeAs = updateListAS.size();
	if (updSizeAs > 0) {
				
	 
		dao.updateOrSaveTableObject(updateListAS, objAutoAltDets);
	}

	 
}	
 
public String saveLifeInsCoverageDetails(Vector vectLifeInsCovPlan, String strFNAId,String strLICId) {
 
	
	
	// TODO Auto-generated method stub 
	String lifeInsCovrId="";
	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
	DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);			
	
	Object objLICovDets = null;
	List insertLICovList = new ArrayList(0); 
	List updateLICovList = new ArrayList(1);
	List deleteLICovList = new ArrayList(2);
	List updateListAS = new ArrayList(3);
	int vectorSize = vectLifeInsCovPlan.size();

	if (vectorSize > 0) {
		insertLICovList = (List) vectLifeInsCovPlan.elementAt(0); 
		updateLICovList = (List) vectLifeInsCovPlan.elementAt(1);
		deleteLICovList = (List) vectLifeInsCovPlan.elementAt(2);
		updateListAS = (List)vectLifeInsCovPlan.elementAt(3);
	}

	int insSize = insertLICovList.size(); 
	if (insSize > 0) {
		
		FnaLifeinsuranceDets liInsdets=new FnaLifeinsuranceDets();
		liInsdets.setLipId(strLICId);
		
		FnaLifeinsuranceCoverages LICovdetails=new FnaLifeinsuranceCoverages();
		
		FnaSelfspouseDets custDets = new FnaSelfspouseDets();
		custDets.setFnaId(strFNAId); 

		
//		if(!FipaUtils.nullOrBlank(strFNAId)){
			
//		}
		
//		if(!FipaUtils.nullOrBlank(strLICId)){
			
			
//		}
		String strMaxId = (String) dao.fetchMaxId(LICovdetails, "coverId");
		
		
		Iterator itIns = insertLICovList.iterator();
		while (itIns.hasNext()) { 
			
			strMaxId=FipaUtils.getFormattedMaxPK(strMaxId, "LIC", 17);
			lifeInsCovrId = strMaxId; 
			LICovdetails = (FnaLifeinsuranceCoverages) itIns.next();
			LICovdetails.setCoverId(lifeInsCovrId);
			LICovdetails.setFnaSelfspouseDets(custDets);
			LICovdetails.setFnaLifeinsuranceDets(liInsdets);
	
	     
		}
		objLICovDets = LICovdetails;			
		dao.insertTableObject(insertLICovList, objLICovDets);

	}
	
	int updSize = updateLICovList.size(); 
	if (updSize > 0) {
		dao.updateTableObject(updateLICovList, objLICovDets);
	}

	
	int delSize = deleteLICovList.size(); 
	if (delSize > 0) {
		dao.deleteTableObject(deleteLICovList, objLICovDets);
	}
	
	int updSizeAs = updateListAS.size();
	if (updSizeAs > 0) {
				
		FnaLifeinsuranceDets liInsdets=new FnaLifeinsuranceDets();
		liInsdets.setLipId(strLICId);
		
		FnaLifeinsuranceCoverages LICovdetails=new FnaLifeinsuranceCoverages();
		
		FnaSelfspouseDets custDets = new FnaSelfspouseDets();
		custDets.setFnaId(strFNAId);
		
		Iterator itAS = updateListAS.iterator();
		while (itAS.hasNext()) { 
			
			LICovdetails = (FnaLifeinsuranceCoverages) itAS.next();
			LICovdetails.setFnaSelfspouseDets(custDets);
			LICovdetails.setFnaLifeinsuranceDets(liInsdets);
	
	     
		}

		objLICovDets = LICovdetails;	
		dao.updateOrSaveTableObject(updateListAS, objLICovDets);
	}
 
	return lifeInsCovrId;
	
}




//public void updateLifeInsCoverageDetails(Vector vectLifeInsCovPlan, String strFNAId,String strLICId) { 
//	
//	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
//	DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);			
//	
//	Object objLICovDets = null;
//	 
//	List updateLICovList = new ArrayList(0); 
//	
//	int vectorSize = vectLifeInsCovPlan.size();
//
//	if (vectorSize > 0) {
//		 
//		updateLICovList = (List) vectLifeInsCovPlan.elementAt(0); 
//	}
//	
//	int updSize = updateLICovList.size(); 
//	if (updSize > 0) { 
//		dao.updateTableObject(updateLICovList, objLICovDets);
//	}
//
//
//}


public String saveRetPlgdetails(Vector vectliMvRetDetails, String strFNAId,String strLICId) {
	// TODO Auto-generated method stub 
	
	String retPlgId="";
	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
	DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);			
	
	Object objRetPlgDets = null;
	List insertRetPlgList = new ArrayList(0);
	List updateRetPlgList = new ArrayList(1);
	List deleteRetPlgList = new ArrayList(2);
	List updateListAS = new ArrayList(3);
	
	int vectorSize = vectliMvRetDetails.size();

	if (vectorSize > 0) {
		insertRetPlgList = (List) vectliMvRetDetails.elementAt(0);
		updateRetPlgList = (List) vectliMvRetDetails.elementAt(1);
		deleteRetPlgList = (List) vectliMvRetDetails.elementAt(2);
		updateListAS = (List)vectliMvRetDetails.elementAt(3);
	}

	int insSize = insertRetPlgList.size(); 
	if (insSize > 0) {
		FnaLifeinsuranceDets liInsdets=new FnaLifeinsuranceDets();
		FnaLifeinsuranceMvRet liMvRetdetails=new FnaLifeinsuranceMvRet();
		FnaSelfspouseDets custDets = new FnaSelfspouseDets();
		
 
		if(!FipaUtils.nullOrBlank(strFNAId)){
			custDets.setFnaId(strFNAId);				
		}
		
		if(!FipaUtils.nullOrBlank(strLICId)){
			
			liInsdets.setLipId(strLICId);
		}
		
		String strMaxId = (String) dao.fetchMaxId(liMvRetdetails, "mvretId");
		
		
		Iterator itIns = insertRetPlgList.iterator();
		while (itIns.hasNext()) { 
			 
			strMaxId=FipaUtils.getFormattedMaxPK(strMaxId, "RET", 17);
			retPlgId = strMaxId;
			  
			liMvRetdetails = (FnaLifeinsuranceMvRet) itIns.next();
			liMvRetdetails.setMvretId(retPlgId);
			liMvRetdetails.setFnaSelfspouseDets(custDets);
			liMvRetdetails.setFnaLifeinsuranceDets(liInsdets);
		}
		
		objRetPlgDets =liMvRetdetails;			
		dao.insertTableObject(insertRetPlgList, objRetPlgDets);

	}

	int updSize = updateRetPlgList.size(); 
	if (updSize > 0) { 
		dao.updateTableObject(updateRetPlgList, objRetPlgDets);
	}

	
	int delSize = deleteRetPlgList.size(); 
	if (delSize > 0) {
		dao.deleteTableObject(deleteRetPlgList, objRetPlgDets);
	}
	
	int updSizeAs = updateListAS.size();
	if (updSizeAs > 0) {
		FnaLifeinsuranceMvRet liinsuranceMvRet=new FnaLifeinsuranceMvRet();
		FnaSelfspouseDets custDets = new FnaSelfspouseDets();
		FnaLifeinsuranceDets liInsdets=new FnaLifeinsuranceDets();
		Iterator updAsIns = updateListAS.iterator();
		while (updAsIns.hasNext()) { 
			
			liinsuranceMvRet = (FnaLifeinsuranceMvRet) updAsIns.next();
			
			custDets.setFnaId(strFNAId);			 
			liInsdets.setLipId(strLICId);
			
			liinsuranceMvRet.setFnaSelfspouseDets(custDets);
			liinsuranceMvRet.setFnaLifeinsuranceDets(liInsdets);
		}
				
		objRetPlgDets =liinsuranceMvRet;	
		dao.updateOrSaveTableObject(updateListAS, objRetPlgDets);
	}
	
	return retPlgId;
}


public String savePlnProdetails(Vector vectliPlanAndProDetails, String strFNAId,String strLICId) {
	// TODO Auto-generated method stub 

	
	String PlnId="";
	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
	DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);			
	
	Object objPlnDets = null;
	List insertPlnList = new ArrayList(0);
	List updatePlnList = new ArrayList(1);
	List deletePlnList = new ArrayList(2);
	List updateListAS = new ArrayList(3);
	
	int vectorSize = vectliPlanAndProDetails.size();

	if (vectorSize > 0) {
		insertPlnList = (List) vectliPlanAndProDetails.elementAt(0);
		updatePlnList = (List) vectliPlanAndProDetails.elementAt(1);
		deletePlnList = (List) vectliPlanAndProDetails.elementAt(2);
		updateListAS = (List)vectliPlanAndProDetails.elementAt(3);
	}

	int insSize = insertPlnList.size(); 
	if (insSize > 0) {
		FnaLifeinsuranceDets liInsdets=new FnaLifeinsuranceDets();
		FnaLifeinsuranceBasicriders liBasicridersdetails=new FnaLifeinsuranceBasicriders();
		FnaSelfspouseDets custDets = new FnaSelfspouseDets();
		
 
		if(!FipaUtils.nullOrBlank(strFNAId)){
			custDets.setFnaId(strFNAId);				
		}
		
		if(!FipaUtils.nullOrBlank(strLICId)){
			
			liInsdets.setLipId(strLICId);
		}
		
		String strMaxId = (String) dao.fetchMaxId(liBasicridersdetails, "riderId");
		
		
		Iterator itIns = insertPlnList.iterator();
		while (itIns.hasNext()) { 
			 
			strMaxId=FipaUtils.getFormattedMaxPK(strMaxId, "PLN", 17);
			PlnId = strMaxId; 
			liBasicridersdetails = (FnaLifeinsuranceBasicriders) itIns.next(); 
			liBasicridersdetails.setRiderId(PlnId);
			liBasicridersdetails.setFnaSelfspouseDets(custDets);
			liBasicridersdetails.setFnaLifeinsuranceDets(liInsdets);
		}
		
		objPlnDets =liBasicridersdetails;			
		dao.insertTableObject(insertPlnList, objPlnDets);

	}

	int updSize = updatePlnList.size(); 
	if (updSize > 0) { 
		dao.updateTableObject(updatePlnList, objPlnDets);
	}

	
	int delSize = deletePlnList.size(); 
	if (delSize > 0) {
		dao.deleteTableObject(deletePlnList, objPlnDets);
	}
	
	int updSizeAs = updateListAS.size();
	if (updSizeAs > 0) {
		FnaLifeinsuranceBasicriders liBasicridersdetails=new FnaLifeinsuranceBasicriders();
		FnaSelfspouseDets custDets = new FnaSelfspouseDets();
		FnaLifeinsuranceDets liInsdets=new FnaLifeinsuranceDets();
		Iterator updAsIns = updateListAS.iterator();
		while (updAsIns.hasNext()) { 
			
			liBasicridersdetails = (FnaLifeinsuranceBasicriders) updAsIns.next();
			
			custDets.setFnaId(strFNAId);			 
			liInsdets.setLipId(strLICId);
			
			liBasicridersdetails.setFnaSelfspouseDets(custDets);
			liBasicridersdetails.setFnaLifeinsuranceDets(liInsdets);
		}
				
		objPlnDets = liBasicridersdetails;
		dao.updateOrSaveTableObject(updateListAS, objPlnDets);
	}
	
	return PlnId;
}
public String saveEduPlgdetails(Vector vectliChildDets, String strFNAId,String strLICId) {
	// TODO Auto-generated method stub 
	
	String eduPlgId="";
	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
	DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);			
	
	Object objEduPlgDets = null;
	List insertEduPlgList = new ArrayList(0);
	List updateEduPlgList = new ArrayList(1);
	List deleteEduPlgList = new ArrayList(2);
	List updateListAS = new ArrayList(3);
	int vectorSize = vectliChildDets.size();

	if (vectorSize > 0) {
		insertEduPlgList = (List) vectliChildDets.elementAt(0);
		updateEduPlgList = (List) vectliChildDets.elementAt(1);
		deleteEduPlgList = (List) vectliChildDets.elementAt(2);
		updateListAS = (List)vectliChildDets.elementAt(3);
	}

	int insSize = insertEduPlgList.size(); 
	if (insSize > 0) {
		FnaLifeinsuranceDets liInsdets=new FnaLifeinsuranceDets();
		FnaLifeinsuranceChildedc liChldEdcdetails=new FnaLifeinsuranceChildedc();
		FnaSelfspouseDets custDets = new FnaSelfspouseDets();
		
 
		if(!FipaUtils.nullOrBlank(strFNAId)){
			custDets.setFnaId(strFNAId);				
		}
		
		if(!FipaUtils.nullOrBlank(strLICId)){
			
			liInsdets.setLipId(strLICId);
		}
		
		String strMaxId = (String) dao.fetchMaxId(liChldEdcdetails, "chliId");
		
		
		Iterator itIns = insertEduPlgList.iterator();
		while (itIns.hasNext()) { 
			 
			strMaxId=FipaUtils.getFormattedMaxPK(strMaxId, "EDU", 17);
			eduPlgId = strMaxId;
			  
			liChldEdcdetails = (FnaLifeinsuranceChildedc) itIns.next();
			liChldEdcdetails.setChliId(eduPlgId);
			liChldEdcdetails.setFnaSelfspouseDets(custDets);
			liChldEdcdetails.setFnaLifeinsuranceDets(liInsdets);
		}
		
		objEduPlgDets =liChldEdcdetails;			
		dao.insertTableObject(insertEduPlgList, objEduPlgDets);

	}

	int updSize = updateEduPlgList.size(); 
	if (updSize > 0) { 
		dao.updateTableObject(updateEduPlgList, objEduPlgDets);
	}

	
	int delSize = deleteEduPlgList.size(); 
	if (delSize > 0) {
		dao.deleteTableObject(deleteEduPlgList, objEduPlgDets);
	}
	
	int updSizeAs = updateListAS.size();
	if (updSizeAs > 0) {
		FnaLifeinsuranceChildedc liinsuranceChildedc=new FnaLifeinsuranceChildedc();
		FnaSelfspouseDets custDets = new FnaSelfspouseDets();
		FnaLifeinsuranceDets liInsdets=new FnaLifeinsuranceDets();
		Iterator updAsIns = updateListAS.iterator();
		while (updAsIns.hasNext()) { 
			
			liinsuranceChildedc = (FnaLifeinsuranceChildedc) updAsIns.next();
			
			custDets.setFnaId(strFNAId);			 
			liInsdets.setLipId(strLICId);
			
			liinsuranceChildedc.setFnaSelfspouseDets(custDets);
			liinsuranceChildedc.setFnaLifeinsuranceDets(liInsdets);
		}
				
		objEduPlgDets =liinsuranceChildedc;	
		dao.updateOrSaveTableObject(updateListAS, objEduPlgDets);
	}
	
	return eduPlgId;
}

public String saveBenefdetails(Vector vectLiBenefits, String strFNAId,String strLICId) {
	// TODO Auto-generated method stub 
	
	String libenefId="";
	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
	DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);			
	
	Object objliBenfDets = null;
	List insertliBenfList = new ArrayList(0);
	List updateliBenfList = new ArrayList(1);
	List deleteliBenfList = new ArrayList(2);
	List updateListAS = new ArrayList(3);
	int vectorSize = vectLiBenefits.size();

	if (vectorSize > 0) {
		insertliBenfList = (List) vectLiBenefits.elementAt(0);
		updateliBenfList = (List) vectLiBenefits.elementAt(1);
		deleteliBenfList = (List) vectLiBenefits.elementAt(2);
		updateListAS = (List)vectLiBenefits.elementAt(3);
	}

	int insSize = insertliBenfList.size(); 
	if (insSize > 0) {
		FnaLifeinsuranceDets liInsdets=new FnaLifeinsuranceDets();
		FnaLifeinsuranceDisablebenfs lilibenefdetails=new FnaLifeinsuranceDisablebenfs();
		FnaSelfspouseDets custDets = new FnaSelfspouseDets();
		
 
		if(!FipaUtils.nullOrBlank(strFNAId)){
			custDets.setFnaId(strFNAId);				
		}
		
		if(!FipaUtils.nullOrBlank(strLICId)){
			
			liInsdets.setLipId(strLICId);
		}
		
		String strMaxId = (String) dao.fetchMaxId(lilibenefdetails, "benfId");
		
		
		Iterator itIns = insertliBenfList.iterator();
		while (itIns.hasNext()) { 
			 
			strMaxId=FipaUtils.getFormattedMaxPK(strMaxId, "BEF", 17);
			libenefId = strMaxId;
			  
			lilibenefdetails = (FnaLifeinsuranceDisablebenfs) itIns.next();
			lilibenefdetails.setBenfId(libenefId);
			lilibenefdetails.setFnaSelfspouseDets(custDets);
			lilibenefdetails.setFnaLifeinsuranceDets(liInsdets);
		}
		
		objliBenfDets =lilibenefdetails;			
		dao.insertTableObject(insertliBenfList, objliBenfDets);

	}

	int updSize = updateliBenfList.size(); 
	if (updSize > 0) { 
		dao.updateTableObject(updateliBenfList, objliBenfDets);
	}

	
	int delSize = deleteliBenfList.size(); 
	if (delSize > 0) {
		dao.deleteTableObject(deleteliBenfList, objliBenfDets);
	}
	
	int updSizeAs = updateListAS.size();
	if (updSizeAs > 0) {
				
	 
		dao.updateOrSaveTableObject(updateListAS, objliBenfDets);
	}
	
	return libenefId;
}


public String saveNomineeNamedetails(Vector vectNomNamedetails, String strFNAId,String strLICId) {
	// TODO Auto-generated method stub 
	
	String liNomNameId="";
	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
	DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);			
	
	Object objliNomNameDets = null;
	List insertliNomNameList = new ArrayList(0);
	List updateliNomNameList = new ArrayList(1);
	List deleteliNomNameList = new ArrayList(2);
	List updateListAS = new ArrayList(3);
	
	int vectorSize = vectNomNamedetails.size();

	if (vectorSize > 0) {
		insertliNomNameList = (List) vectNomNamedetails.elementAt(0);
		updateliNomNameList = (List) vectNomNamedetails.elementAt(1);
		deleteliNomNameList = (List) vectNomNamedetails.elementAt(2);
		updateListAS = (List)vectNomNamedetails.elementAt(3);
	}

	int insSize = insertliNomNameList.size(); 
	if (insSize > 0) {
		FnaLifeinsuranceDets liInsdets=new FnaLifeinsuranceDets();
		FnaLifeinsuranceNominees liliNominedetails=new FnaLifeinsuranceNominees();
		FnaSelfspouseDets custDets = new FnaSelfspouseDets();
		
 
		if(!FipaUtils.nullOrBlank(strFNAId)){
			custDets.setFnaId(strFNAId);				
		}
		
		if(!FipaUtils.nullOrBlank(strLICId)){
			
			liInsdets.setLipId(strLICId);
		}
		
		String strMaxId = (String) dao.fetchMaxId(liliNominedetails, "nomineeId");
		
		
		Iterator itIns = insertliNomNameList.iterator();
		while (itIns.hasNext()) { 
			 
			strMaxId=FipaUtils.getFormattedMaxPK(strMaxId, "NOM", 17);
			liNomNameId = strMaxId;
			  
			liliNominedetails = (FnaLifeinsuranceNominees) itIns.next();
			liliNominedetails.setNomineeId(liNomNameId);
			liliNominedetails.setFnaSelfspouseDets(custDets);
			liliNominedetails.setFnaLifeinsuranceDets(liInsdets);
		}
		
		objliNomNameDets =liliNominedetails;			
		dao.insertTableObject(insertliNomNameList, objliNomNameDets);

	}

	int updSize = updateliNomNameList.size(); 
	if (updSize > 0) { 
		dao.updateTableObject(updateliNomNameList, objliNomNameDets);
	}

	
	int delSize = deleteliNomNameList.size(); 
	if (delSize > 0) {
		dao.deleteTableObject(deleteliNomNameList, objliNomNameDets);
	}
	
	int updSizeAs = updateListAS.size();
	if (updSizeAs > 0) {
				
	 
		dao.updateOrSaveTableObject(updateListAS, objliNomNameDets);
	}
	if (updSizeAs > 0) {
		FnaLifeinsuranceNominees liinsuranceNominees=new FnaLifeinsuranceNominees();
		FnaSelfspouseDets custDets = new FnaSelfspouseDets();
		FnaLifeinsuranceDets liInsdets=new FnaLifeinsuranceDets();
		Iterator updAsIns = updateListAS.iterator();
		while (updAsIns.hasNext()) { 
			
			liinsuranceNominees = (FnaLifeinsuranceNominees) updAsIns.next();
			
			custDets.setFnaId(strFNAId);			 
			liInsdets.setLipId(strLICId);
			
			liinsuranceNominees.setFnaSelfspouseDets(custDets);
			liinsuranceNominees.setFnaLifeinsuranceDets(liInsdets);
		}
				
		objliNomNameDets =liinsuranceNominees;	
		dao.updateOrSaveTableObject(updateListAS, objliNomNameDets);
	}
	
	return liNomNameId;
	
}

public void  delLifeInsCoverageDetails(Vector vectLifeInsCovPlan, String strFNAId,String strLICId) { 
	
	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
	DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);			
	
	Object objLisCovDets = null; 
	List deleteLisCovList = new ArrayList(0);
	
	int vectorSize = vectLifeInsCovPlan.size();

	if (vectorSize > 0) { 
		deleteLisCovList = (List) vectLifeInsCovPlan.elementAt(0); 
	}
	
	int delSize = deleteLisCovList.size(); 
	if (delSize > 0) {
		dao.deleteTableObject(deleteLisCovList, objLisCovDets);
	}  
}

public String saveInvstdetails(Vector vectInputInvest, String strFNAId) {
	// TODO Auto-generated method stub 
	
	String strOwnInvstId="";
	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
	DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);			
	
	Object objCOBDets = null;
	List insertInvList = new ArrayList(0);
	List updateInvList = new ArrayList(1);
	List deleteInvList = new ArrayList(2);
	List updateListAS = new ArrayList(3);
	
	int vectorSize = vectInputInvest.size();

	if (vectorSize > 0) {
		insertInvList = (List) vectInputInvest.elementAt(0);
		updateInvList = (List) vectInputInvest.elementAt(1);
		deleteInvList = (List) vectInputInvest.elementAt(2);
		updateListAS = (List)vectInputInvest.elementAt(3);
	}

	int insSize = insertInvList.size(); 
	if (insSize > 0) {
		
		FnaInputinvestmentsDets inputInvest=new FnaInputinvestmentsDets();
		FnaSelfspouseDets custDets = new FnaSelfspouseDets();
		
 
		if(!FipaUtils.nullOrBlank(strFNAId)){
			custDets.setFnaId(strFNAId);				
		}
		
		String strMaxId = (String) dao.fetchMaxId(inputInvest,"owninvstId");
		
		
		Iterator itIns = insertInvList.iterator();
		while (itIns.hasNext()) { 
			 
			strMaxId=FipaUtils.getFormattedMaxPK(strMaxId, "INV", 17);
			strOwnInvstId = strMaxId;
			  
			inputInvest = (FnaInputinvestmentsDets) itIns.next();
			inputInvest.setOwninvstId(strOwnInvstId);
			inputInvest.setFnaSelfspouseDets(custDets);
		}
		
		objCOBDets =inputInvest;			
		dao.insertTableObject(insertInvList, objCOBDets);

	}

	int updSize = updateInvList.size(); 
	if (updSize > 0) { 
		dao.updateTableObject(updateInvList, objCOBDets);
	}

	
	int delSize = deleteInvList.size(); 
	if (delSize > 0) {
		dao.deleteTableObject(deleteInvList, objCOBDets);
	}
	
	int updSizeAs = updateListAS.size();
	if (updSizeAs > 0) {
				
	 
		dao.updateOrSaveTableObject(updateListAS, objCOBDets);
	}
	
	return strOwnInvstId;
	
}


public String saveRdOthPaymenttails(Vector vectRdOthpay, String strFNAId) {
	// TODO Auto-generated method stub 
	
	String strRdOthpayId="";
	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
	DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);			
	
	Object objRdOthpayDets = null;
	List insertRdOthpayList = new ArrayList(0);
	List updateRdOthpayList = new ArrayList(1);
	List deleteRdOthpayList = new ArrayList(2);
	List updateListAS = new ArrayList(3);
	
	int vectorSize = vectRdOthpay.size();

	if (vectorSize > 0) {
		insertRdOthpayList = (List) vectRdOthpay.elementAt(0);
		updateRdOthpayList = (List) vectRdOthpay.elementAt(1);
		deleteRdOthpayList = (List) vectRdOthpay.elementAt(2);
		updateListAS = (List)vectRdOthpay.elementAt(3);
	}

	int insSize = insertRdOthpayList.size(); 
	if (insSize > 0) {
		
		FnaRetireplanOthpayment retothpay=new FnaRetireplanOthpayment();
		FnaSelfspouseDets custDets = new FnaSelfspouseDets();
		
 
		if(!FipaUtils.nullOrBlank(strFNAId)){
			custDets.setFnaId(strFNAId);				
		}
		
		String strMaxId = (String) dao.fetchMaxId(retothpay,"opId");
		
		
		Iterator itIns = insertRdOthpayList.iterator();
		while (itIns.hasNext()) { 
			 
			strMaxId=FipaUtils.getFormattedMaxPK(strMaxId, "RIN", 17);
			strRdOthpayId = strMaxId;
			  
			retothpay = (FnaRetireplanOthpayment) itIns.next();
			retothpay.setOpId(strRdOthpayId);
			retothpay.setFnaSelfspouseDets(custDets);
		}
		
		objRdOthpayDets =retothpay;			
		dao.insertTableObject(insertRdOthpayList, objRdOthpayDets);

	}

	int updSize = updateRdOthpayList.size(); 
	if (updSize > 0) { 
		dao.updateTableObject(updateRdOthpayList, objRdOthpayDets);
	}

	
	int delSize = deleteRdOthpayList.size(); 
	if (delSize > 0) {
		dao.deleteTableObject(deleteRdOthpayList, objRdOthpayDets);
	}
	
	int updSizeAs = updateListAS.size();
	if (updSizeAs > 0) {
				
	 
		dao.updateOrSaveTableObject(updateListAS, objRdOthpayDets);
	}
	return strRdOthpayId;
}



public String saveRdIncPaymenttails(Vector vectRdIncpay, String strFNAId) {
	// TODO Auto-generated method stub 
	
	String strRdIncpayId="";
	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
	DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);			
	
	Object objRdIncpayDets = null;
	List insertRdIncpayList = new ArrayList(0);
	List updateRdIncpayList = new ArrayList(1);
	List deleteRdIncpayList = new ArrayList(2);
	List updateListAS = new ArrayList(3);
	
	int vectorSize = vectRdIncpay.size();

	if (vectorSize > 0) {
		insertRdIncpayList = (List) vectRdIncpay.elementAt(0);
		updateRdIncpayList = (List) vectRdIncpay.elementAt(1);
		deleteRdIncpayList = (List) vectRdIncpay.elementAt(2);
		updateListAS = (List)vectRdIncpay.elementAt(3);
	}

	int insSize = insertRdIncpayList.size(); 
	if (insSize > 0) {
		
		FnaRetireplanIncomeasset retinc=new FnaRetireplanIncomeasset();
		FnaSelfspouseDets custDets = new FnaSelfspouseDets();
		
 
		if(!FipaUtils.nullOrBlank(strFNAId)){
			custDets.setFnaId(strFNAId);				
		}
		
		String strMaxId = (String) dao.fetchMaxId(retinc,"iaId");
		
		
		Iterator itIns = insertRdIncpayList.iterator();
		while (itIns.hasNext()) { 
			 
			strMaxId=FipaUtils.getFormattedMaxPK(strMaxId, "RAS", 17);
			strRdIncpayId = strMaxId;
			  
			retinc = (FnaRetireplanIncomeasset) itIns.next();
			retinc.setIaId(strRdIncpayId);
			retinc.setFnaSelfspouseDets(custDets);
		}
		
		objRdIncpayDets =retinc;			
		dao.insertTableObject(insertRdIncpayList, objRdIncpayDets);

	}

	int updSize = updateRdIncpayList.size(); 
	if (updSize > 0) { 
		dao.updateTableObject(updateRdIncpayList, objRdIncpayDets);
	}

	
	int delSize = deleteRdIncpayList.size(); 
	if (delSize > 0) {
		dao.deleteTableObject(deleteRdIncpayList, objRdIncpayDets);
	}
	
	int updSizeAs = updateListAS.size();
	if (updSizeAs > 0) {
				
	 
		dao.updateOrSaveTableObject(updateListAS, objRdIncpayDets);
	}
	
	
	return strRdIncpayId;
}




public String saveRetCpfLifeDets(Vector vectcpflf, String strFNAId) {
	// TODO Auto-generated method stub 
	
	String strcpflfId="";
	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
	DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);			
	
	Object objcpflfDets = null;
	List insertcpflfList = new ArrayList(0);
	List updatecpflfList = new ArrayList(1);
	List deletecpflfList = new ArrayList(2);
	List updateListAS = new ArrayList(3);
	
	int vectorSize = vectcpflf.size();

	if (vectorSize > 0) {
		insertcpflfList = (List) vectcpflf.elementAt(0);
		updatecpflfList = (List) vectcpflf.elementAt(1);
		deletecpflfList = (List) vectcpflf.elementAt(2);
		updateListAS = (List)vectcpflf.elementAt(3);
	}

	int insSize = insertcpflfList.size(); 
	if (insSize > 0) {
		
		FnaRetireplanCpflife retlife=new FnaRetireplanCpflife();
		FnaSelfspouseDets custDets = new FnaSelfspouseDets();
		
 
		if(!FipaUtils.nullOrBlank(strFNAId)){
			custDets.setFnaId(strFNAId);				
		}
		
		String strMaxId = (String) dao.fetchMaxId(retlife,"rpClId");
		
		
		Iterator itIns = insertcpflfList.iterator();
		while (itIns.hasNext()) { 
			 
			strMaxId=FipaUtils.getFormattedMaxPK(strMaxId, "RTC", 17);
			strcpflfId = strMaxId;
			  
			retlife = (FnaRetireplanCpflife) itIns.next();
			retlife.setRpClId(strcpflfId);
			retlife.setFnaSelfspouseDets(custDets);
		}
		
		objcpflfDets =retlife;			
		dao.insertTableObject(insertcpflfList, objcpflfDets);

	}

	int updSize = updatecpflfList.size(); 
	if (updSize > 0) { 
		dao.updateTableObject(updatecpflfList, objcpflfDets);
	}

	
	int delSize = deletecpflfList.size(); 
	if (delSize > 0) {
		dao.deleteTableObject(deletecpflfList, objcpflfDets);
	}
	
	int updSizeAs = updateListAS.size();
	if (updSizeAs > 0) {
				
	 
		dao.updateOrSaveTableObject(updateListAS, objcpflfDets);
	}
	
	
	return strcpflfId;
}

//public void saveExpFDFlwdetails(Vector vectExpFdFlowDetails, String strFNAId) {
//	// TODO Auto-generated method stub 
//	String ExpFDFlwId="";
//	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
//	DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);			
//	
//	Object objFundFlowDets = null;
//	List insertFdFwList = new ArrayList(0);
//	List updateFdFwList = new ArrayList(1);
//	List deleteFdFwList = new ArrayList(2);
//	
//	int vectorSize = vectExpFdFlowDetails.size();
//
//	if (vectorSize > 0) {
//		insertFdFwList = (List) vectExpFdFlowDetails.elementAt(0);
//		updateFdFwList = (List) vectExpFdFlowDetails.elementAt(1);
//		deleteFdFwList = (List) vectExpFdFlowDetails.elementAt(2);
//	}
//
//	int insSize = insertFdFwList.size(); 
//	if (insSize > 0) {
//		
//		FnaFlowDets fnaflowdetails=new FnaFlowDets();
//		FnaSelfspouseDets custDets = new FnaSelfspouseDets();
//
//		
//		if(!FipaUtils.nullOrBlank(strFNAId)){
//			custDets.setFnaId(strFNAId);				
//		}
//		
//		String strMaxId = (String) dao.fetchMaxId(fnaflowdetails, "txtFldFlowId");
//		
//		
//		Iterator itIns = insertFdFwList.iterator();
//		while (itIns.hasNext()) {
//			 
//			
//			strMaxId=FipaUtils.getFormattedMaxPK(strMaxId, "FLW", 17);
//			ExpFDFlwId = strMaxId;
//			
//			 
//			fnaflowdetails = (FnaFlowDets) itIns.next();
//			fnaflowdetails.setTxtFldFlowId(ExpFDFlwId);
//			fnaflowdetails.setFnaSelfspouseDets(custDets);
//	
//	     
//		}
//		objFundFlowDets = fnaflowdetails;			
//		dao.insertTableObject(insertFdFwList, objFundFlowDets);
//
//	}
//
//	int updSize = updateFdFwList.size(); 
//	if (updSize > 0) {
//		dao.updateTableObject(updateFdFwList, objFundFlowDets);
//	}
//
//	
//	int delSize = deleteFdFwList.size(); 
//	if (delSize > 0) {
//		dao.deleteTableObject(deleteFdFwList, objFundFlowDets);
//	}
//}

//public void saveContgPlndetails(Vector vectContPlnDetails, String strFNAId) {
//	// TODO Auto-generated method stub 
//	String contgplanId="";
//	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
//	DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);			
//	
//	Object objCtgplnDets = null;
//	List insertCtgplnList = new ArrayList(0);
//	List updateCtgplnList = new ArrayList(1);
//	List deleteCtgplnList = new ArrayList(2);
//	
//	int vectorSize = vectContPlnDetails.size();
//
//	if (vectorSize > 0) {
//		insertCtgplnList = (List) vectContPlnDetails.elementAt(0);
//		updateCtgplnList = (List) vectContPlnDetails.elementAt(1);
//		deleteCtgplnList = (List) vectContPlnDetails.elementAt(2);
//	}
//
//	int insSize = insertCtgplnList.size(); 
//	if (insSize > 0) {
//		
//		FnaContinDepnDets CtgPlndetails=new FnaContinDepnDets();
//		FnaSelfspouseDets custDets = new FnaSelfspouseDets();
//
//		
//		if(!FipaUtils.nullOrBlank(strFNAId)){
//			custDets.setFnaId(strFNAId);				
//		}
//		
//		String strMaxId = (String) dao.fetchMaxId(CtgPlndetails, "txFldContgDepId");
//		
//		
//		Iterator itIns = insertCtgplnList.iterator();
//		while (itIns.hasNext()) {
//			 
//			
//			strMaxId=FipaUtils.getFormattedMaxPK(strMaxId, "CTG", 17);
//			contgplanId = strMaxId;
//			
//			 
//			CtgPlndetails = (FnaContinDepnDets) itIns.next();
//			CtgPlndetails.setTxFldContgDepId(contgplanId);
//			CtgPlndetails.setFnaSelfspouseDets(custDets);
//	
//	     
//		}
//		objCtgplnDets =CtgPlndetails;			
//		dao.insertTableObject(insertCtgplnList, objCtgplnDets);
//
//	}
//
//	int updSize = updateCtgplnList.size(); 
//	if (updSize > 0) { 
//		dao.updateTableObject(updateCtgplnList, objCtgplnDets);
//	}
//
//	
//	int delSize = deleteCtgplnList.size(); 
//	if (delSize > 0) {
//		dao.deleteTableObject(deleteCtgplnList, objCtgplnDets);
//	}
//}

public void saveHIdetails(Vector vectHlthInsDetails, String strFNAId) {
	// TODO Auto-generated method stub 
	String HIdetsId="";
	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
	DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);			
	
	Object objHIDets = null;
	List insertHIList = new ArrayList(0);
	List updateHIList = new ArrayList(1);
	List deleteHIList = new ArrayList(2);
	List updateListAS = new ArrayList(3);
	int vectorSize = vectHlthInsDetails.size();

	if (vectorSize > 0) {
		insertHIList = (List) vectHlthInsDetails.elementAt(0);
		updateHIList = (List) vectHlthInsDetails.elementAt(1);
		deleteHIList = (List) vectHlthInsDetails.elementAt(2);
		updateListAS = (List)vectHlthInsDetails.elementAt(3);
	}

	int insSize = insertHIList.size(); 
	if (insSize > 0) {
		
		FnaHealthinsInfo HIdetails=new FnaHealthinsInfo();
		FnaSelfspouseDets custDets = new FnaSelfspouseDets();

		
		if(!FipaUtils.nullOrBlank(strFNAId)){
			custDets.setFnaId(strFNAId);				
		}
		
		String strMaxId = (String) dao.fetchMaxId(HIdetails, "hiId");
		
		
		Iterator itIns = insertHIList.iterator();
		while (itIns.hasNext()) {
			  
			strMaxId=FipaUtils.getFormattedMaxPK(strMaxId, "HIS", 17);
			HIdetsId = strMaxId;
			 
			HIdetails = (FnaHealthinsInfo) itIns.next();
			HIdetails.setHiId(HIdetsId);
			HIdetails.setFnaSelfspouseDets(custDets);
	
	     
		}
		objHIDets = HIdetails;			
		dao.insertTableObject(insertHIList, objHIDets);

	}

	int updSize = updateHIList.size(); 
	if (updSize > 0) { 
		dao.updateTableObject(updateHIList, objHIDets);
	}

	
	int delSize = deleteHIList.size(); 
	if (delSize > 0) {
		dao.deleteTableObject(deleteHIList, objHIDets);
	}
	
	int updSizeAs = updateListAS.size();
	if (updSizeAs > 0) {
				
	 
		dao.updateOrSaveTableObject(updateListAS, objHIDets);
	}
	
	
}

public String savePropOwndetails(Vector vectPropOwnDetails, String strFNAId) {
	// TODO Auto-generated method stub 
	String propownId="";
	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
	DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);			
	
	Object objPropDets = null;
	List insertPropList = new ArrayList(0);
	List updatePropList = new ArrayList(1);
	List deletePropList = new ArrayList(2);
	List updateListAS = new ArrayList(3);
	int vectorSize = vectPropOwnDetails.size();

	if (vectorSize > 0) {
		insertPropList = (List) vectPropOwnDetails.elementAt(0);
		updatePropList = (List) vectPropOwnDetails.elementAt(1);
		deletePropList = (List) vectPropOwnDetails.elementAt(2);
		updateListAS = (List)vectPropOwnDetails.elementAt(3);
	}

	int insSize = insertPropList.size(); 
	if (insSize > 0) {
		
		FnaPropownDets propdetails=new FnaPropownDets();
		FnaSelfspouseDets custDets = new FnaSelfspouseDets();

		
		if(!FipaUtils.nullOrBlank(strFNAId)){
			custDets.setFnaId(strFNAId);				
		}
		
		String strMaxId = (String) dao.fetchMaxId(propdetails, "propownId");
		
		
		Iterator itIns = insertPropList.iterator();
		while (itIns.hasNext()) {
			 
			strMaxId=FipaUtils.getFormattedMaxPK(strMaxId, "PRO", 17);
			propownId = strMaxId;
			 
			propdetails = (FnaPropownDets) itIns.next();
			propdetails.setPropownId(propownId);
			propdetails.setFnaSelfspouseDets(custDets);
	
	     
		}
		objPropDets = propdetails;			
		dao.insertTableObject(insertPropList, objPropDets);

	}

	int updSize = updatePropList.size(); 
	if (updSize > 0) { 
		dao.updateTableObject(updatePropList, objPropDets);
	}

	
	int delSize = deletePropList.size(); 
	if (delSize > 0) {
		dao.deleteTableObject(deletePropList, objPropDets);
	}
	
	int updSizeAs = updateListAS.size();
	if (updSizeAs > 0) {
				
	 
		dao.updateOrSaveTableObject(updateListAS, objPropDets);
	}
	
	
	return propownId;
}

public String saveVehOwndetails(Vector vectVehOwnDetails, String strFNAId) {
	// TODO Auto-generated method stub 
	String vehownId="";
	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
	DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);			
	
	Object objVehDets = null;
	List insertVehList = new ArrayList(0);
	List updateVehList = new ArrayList(1);
	List deleteVehList = new ArrayList(2);
	List updateListAS = new ArrayList(3);
	
	int vectorSize = vectVehOwnDetails.size();

	if (vectorSize > 0) {
		insertVehList = (List) vectVehOwnDetails.elementAt(0);
		updateVehList = (List) vectVehOwnDetails.elementAt(1);
		deleteVehList = (List) vectVehOwnDetails.elementAt(2);
		updateListAS = (List)vectVehOwnDetails.elementAt(3);
	}

	int insSize = insertVehList.size(); 
	if (insSize > 0) {
		
		FnaVehicleownDets vehdetails=new FnaVehicleownDets();
		FnaSelfspouseDets custDets = new FnaSelfspouseDets();

		
		if(!FipaUtils.nullOrBlank(strFNAId)){
			custDets.setFnaId(strFNAId);				
		}
		
		String strMaxId = (String) dao.fetchMaxId(vehdetails, "vehiId");
		
		
		Iterator itIns = insertVehList.iterator();
		while (itIns.hasNext()) {
			 
			 
			strMaxId=FipaUtils.getFormattedMaxPK(strMaxId, "VEH", 17);
			vehownId = strMaxId;
			 
			vehdetails = (FnaVehicleownDets) itIns.next();
			vehdetails.setVehiId(vehownId);
			vehdetails.setFnaSelfspouseDets(custDets);
	
	     
		}
		objVehDets =vehdetails;			
		dao.insertTableObject(insertVehList, objVehDets);

	}

	int updSize = updateVehList.size(); 
	if (updSize > 0) { 
		dao.updateTableObject(updateVehList, objVehDets);
	}

	
	int delSize = deleteVehList.size(); 
	if (delSize > 0) {
		dao.deleteTableObject(deleteVehList, objVehDets);
	}
	
	int updSizeAs = updateListAS.size();
	if (updSizeAs > 0) {
				
	 
		dao.updateOrSaveTableObject(updateListAS, objVehDets);
	}
	return vehownId;
}





//public void saveLipInsurncedetails(Vector vectLIPDetails, String strFNAId) {
//	// TODO Auto-generated method stub
//	 String lipInsId="";
//	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
//	DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);			
//	
//	Object objLipDets = null;
//	List insertLipList = new ArrayList(0);
//	List updateLipList = new ArrayList(1);
//	List deleteLipList = new ArrayList(2);
//	
//	int vectorSize = vectLIPDetails.size();
//
//	if (vectorSize > 0) {
//		insertLipList = (List) vectLIPDetails.elementAt(0);
//		updateLipList = (List) vectLIPDetails.elementAt(1);
//		deleteLipList = (List) vectLIPDetails.elementAt(2);
//	}
//
//	int insSize = insertLipList.size(); 
//	if (insSize > 0) {
//		
//		FnaLifeinsuranceDets lipdetails=new FnaLifeinsuranceDets();
//		FnaSelfspouseDets custDets = new FnaSelfspouseDets();
//
//		
//		if(!FipaUtils.nullOrBlank(strFNAId)){
//			custDets.setFnaId(strFNAId);				
//		}
//		
//		String strMaxId = (String) dao.fetchMaxId(lipdetails, "lipId");
//		
//		
//		Iterator itIns = insertLipList.iterator();
//		while (itIns.hasNext()) {
//			 
//			strMaxId=FipaUtils.getFormattedMaxPK(strMaxId, "LIP", 17);
//			lipInsId = strMaxId;
//			 
//			lipdetails = (FnaLifeins) itIns.next();
//			lipdetails.setTxtFldLipId(lipInsId);
//			lipdetails.setFnaSelfspouseDets(custDets);
//	
//	     
//		}
//		objLipDets =lipdetails;			
//		dao.insertTableObject(insertLipList, objLipDets);
//
//	}
//
//	int updSize = updateLipList.size(); 
//	if (updSize > 0) { 
//		dao.updateTableObject(updateLipList, objLipDets);
//	}
//
//	
//	int delSize = deleteLipList.size(); 
//	if (delSize > 0) {
//		dao.deleteTableObject(deleteLipList, objLipDets);
//	}
//}



public void saveIpInvstdetails(Vector vectIpInvstDetails, String strFNAId) {
	// TODO Auto-generated method stub 
	String IpInvstId="";
	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
	DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);			
	
	Object objIpInvDets = null;
	List insertIpInvList = new ArrayList(0);
	List updateIpInvList = new ArrayList(1);
	List deleteIpInvList = new ArrayList(2);
	List updateListAS = new ArrayList(3);
	int vectorSize = vectIpInvstDetails.size(); 
	
	if (vectorSize > 0) { 
		insertIpInvList = (List) vectIpInvstDetails.elementAt(0);
		updateIpInvList = (List) vectIpInvstDetails.elementAt(1);
		deleteIpInvList = (List) vectIpInvstDetails.elementAt(2); 
		updateListAS = (List)vectIpInvstDetails.elementAt(3);
	}

	int insSize = insertIpInvList.size(); 
	if (insSize > 0) {
		
		FnaInputinvestmentsDets ipinvdetails=new FnaInputinvestmentsDets();
		FnaSelfspouseDets custDets = new FnaSelfspouseDets();

		
		if(!FipaUtils.nullOrBlank(strFNAId)){
			custDets.setFnaId(strFNAId);				
		}
		
		String strMaxId = (String) dao.fetchMaxId(ipinvdetails, "owninvstId");
		
		
		Iterator itIns = insertIpInvList.iterator();
		while (itIns.hasNext()) {
			 

			strMaxId=FipaUtils.getFormattedMaxPK(strMaxId, "IIN", 17);
			IpInvstId = strMaxId;
			 
			ipinvdetails = (FnaInputinvestmentsDets) itIns.next();
			ipinvdetails.setOwninvstId(IpInvstId);
			ipinvdetails.setFnaSelfspouseDets(custDets);
	
	     
		}
		objIpInvDets = ipinvdetails;			
		dao.insertTableObject(insertIpInvList, objIpInvDets);

	}

	int updSize = updateIpInvList.size(); 
	if (updSize > 0) { 
		dao.updateTableObject(updateIpInvList, objIpInvDets);
	}

	
	int delSize = deleteIpInvList.size(); 
	if (delSize > 0) {
		dao.deleteTableObject(deleteIpInvList, objIpInvDets);
	}
	
	
	int updSizeAs = updateListAS.size();
	if (updSizeAs > 0) {
				
	 
		dao.updateOrSaveTableObject(updateListAS, objIpInvDets);
	}
	
}
//public void saveOthPerDetails(Vector vectOthpers, String strFNAId) {
//	// TODO Auto-generated method stub 
//	String othrperId="";
//	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
//	DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);			
//	
//	Object objOPDets = null;
//	List insertOPList = new ArrayList(0); 
//	
//	int vectorSize = vectOthpers.size();
//
//	if (vectorSize > 0) {
//		insertOPList = (List) vectOthpers.elementAt(0); 
//	}
//
//	int insSize = insertOPList.size(); 
//	if (insSize > 0) {
//		
//		FnaAdvDeclare OthPerdetails=new FnaAdvDeclare();
//		FnaSelfspouseDets custDets = new FnaSelfspouseDets();
//
//		
//		if(!FipaUtils.nullOrBlank(strFNAId)){
//			custDets.setFnaId(strFNAId);				
//		}
//		
//		String strMaxId = (String) dao.fetchMaxId(OthPerdetails, "advDecId");
//		
//		
//		Iterator itIns = insertOPList.iterator();
//		while (itIns.hasNext()) { 
//			
//			strMaxId=FipaUtils.getFormattedMaxPK(strMaxId, "OPD", 17);
//			othrperId = strMaxId; 
//			OthPerdetails = (FnaAdvDeclare) itIns.next();
//			OthPerdetails.setAdvDecId(othrperId);
//			OthPerdetails.setFnaSelfspouseDets(custDets);
//	
//	     
//		}
//		objOPDets = OthPerdetails;			
//		dao.insertTableObject(insertOPList, objOPDets);
//
//	}
// 
//	
//	
//}


public String saveEstPlanDetails(Vector vectEstPln, String strFNAId) {
	// TODO Auto-generated method stub 
	String estplanId="";
	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
	DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);			
	
	Object objEstPlnDets = null;
	List insertEstPlnList = new ArrayList(0); 
	
	int vectorSize = vectEstPln.size();

	if (vectorSize > 0) {
		
		String STR_DEL_QRY = "DELETE FROM FNA_ESTATE_PLAN WHERE FNA_ID='"+strFNAId+"'";
		dao.executeNativeSQLQuery(STR_DEL_QRY);
		insertEstPlnList = (List) vectEstPln.elementAt(0); 
	}

	int insSize = insertEstPlnList.size(); 
	if (insSize > 0) {
		
		FnaEstatePlan estPlndetails=new FnaEstatePlan();
		FnaSelfspouseDets custDets = new FnaSelfspouseDets();

		
		if(!FipaUtils.nullOrBlank(strFNAId)){
			custDets.setFnaId(strFNAId);				
		}
		
		String strMaxId = (String) dao.fetchMaxId(estPlndetails, "estId");
		
		
		Iterator itIns = insertEstPlnList.iterator();
		while (itIns.hasNext()) { 
			
			strMaxId=FipaUtils.getFormattedMaxPK(strMaxId, "EST", 17);
			estplanId = strMaxId; 
			estPlndetails = (FnaEstatePlan) itIns.next();
			estPlndetails.setEstId(estplanId);
			estPlndetails.setFnaSelfspouseDets(custDets);
	
	     
		}
		objEstPlnDets = estPlndetails;			
		dao.insertTableObject(insertEstPlnList, objEstPlnDets);

	}
 return estplanId;
	
	
}


public void updEstPlanDetails(Vector vectEstPlan, String strFNAId) { 
	
	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
	DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);			
	
	Object objEstplnDets = null;
	
	List updateEstplnList = new ArrayList(0); 
	
	int vectorSize = vectEstPlan.size();

	if (vectorSize > 0) {
	
		updateEstplnList = (List) vectEstPlan.elementAt(0); 
	}
	
	int updSize = updateEstplnList.size(); 
	if (updSize > 0) { 
		 
		FnaSelfspouseDets selfspousedets = new FnaSelfspouseDets();
		selfspousedets.setFnaId(strFNAId);
		
		FnaEstatePlan estpln=new FnaEstatePlan(); 
		estpln.setFnaSelfspouseDets(selfspousedets);
		
		
		Iterator itIns = updateEstplnList.iterator();
		while (itIns.hasNext()) { 
			 
			estpln = (FnaEstatePlan) itIns.next();
			estpln.setEstId(estpln.getEstId());
			estpln.setFnaSelfspouseDets(selfspousedets); 
	     
		}
		objEstplnDets = estpln;		
		dao.updateTableObject(updateEstplnList, objEstplnDets);
	}


}

//public void updOthPerDetails(Vector vectOthpers, String strFNAId) { 
//	
//	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
//	DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);			
//	
//	Object objRcmDets = null;
//	 
//	List updateRcmList = new ArrayList(0); 
//	
//	int vectorSize = vectOthpers.size();
//
//	if (vectorSize > 0) {
//		 
//		updateRcmList = (List) vectOthpers.elementAt(0); 
//	}
//	
//	int updSize = updateRcmList.size(); 
//	if (updSize > 0) { 
//		dao.updateTableObject(updateRcmList, objRcmDets);
//	}
//
//
//}

public void  delEstPlnDetails(Vector vectEstPlan, String strFNAId) { 
	
	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
	DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);			
	
	Object objEstPlnDets = null; 
	List deleteEstPlnList = new ArrayList(0);
	
	int vectorSize = vectEstPlan.size();

	if (vectorSize > 0) { 
		deleteEstPlnList = (List) vectEstPlan.elementAt(0); 
	}
	
	int delSize = deleteEstPlnList.size(); 
	if (delSize > 0) {
		dao.deleteTableObject(deleteEstPlnList, objEstPlnDets);
	}

	
}
//public void  delOthPerDetails(Vector vectOthpers, String strFNAId) { 
//	
//	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
//	DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);			
//	
//	Object objRcmDets = null; 
//	List deleteRcmList = new ArrayList(0);
//	
//	int vectorSize = vectOthpers.size();
//
//	if (vectorSize > 0) { 
//		deleteRcmList = (List) vectOthpers.elementAt(0); 
//	}
//	
//	int delSize = deleteRcmList.size(); 
//	if (delSize > 0) {
//		dao.deleteTableObject(deleteRcmList, objRcmDets);
//	}
//
//	
//}
//public void saveRcmPrdDetails(Vector vectRcmPrdDetails, String strFNAId) {
//	// TODO Auto-generated method stub 
//	String rcmprdid="";
//	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
//	DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);			
//	
//	Object objRcmDets = null;
//	List insertRcmList = new ArrayList(0);
//	List updateRcmList = new ArrayList(1);
//	List deleteRcmList = new ArrayList(2);
//	
//	int vectorSize = vectRcmPrdDetails.size();
//
//	if (vectorSize > 0) {
//		insertRcmList = (List) vectRcmPrdDetails.elementAt(0);
//		updateRcmList = (List) vectRcmPrdDetails.elementAt(1);
//		deleteRcmList = (List) vectRcmPrdDetails.elementAt(2);
//	}
//
//	int insSize = insertRcmList.size(); 
//	if (insSize > 0) {
//		
//		FnaRecomPrdtplanDet Rmdetails=new FnaRecomPrdtplanDet();
//		FnaSelfspouseDets custDets = new FnaSelfspouseDets();
//
//		
//		if(!FipaUtils.nullOrBlank(strFNAId)){
//			custDets.setFnaId(strFNAId);				
//		}
//		
//		String strMaxId = (String) dao.fetchMaxId(Rmdetails, "recomPpId");
//		
//		
//		Iterator itIns = insertRcmList.iterator();
//		while (itIns.hasNext()) {
//			 
//			strMaxId=FipaUtils.getFormattedMaxPK(strMaxId, "RCM", 17);
//			rcmprdid = strMaxId;
//			
//			 
//			Rmdetails = (FnaRecomPrdtplanDet) itIns.next();
//			Rmdetails.setRecomPpId(rcmprdid);
//			Rmdetails.setFnaSelfspouseDets(custDets);
//	
//	     
//		}
//		objRcmDets = Rmdetails;			
//		dao.insertTableObject(insertRcmList, objRcmDets);
//
//	}
//
//	int updSize = updateRcmList.size(); 
//	if (updSize > 0) { 
//		dao.updateTableObject(updateRcmList, objRcmDets);
//	}
//
//	
//	int delSize = deleteRcmList.size(); 
//	if (delSize > 0) {
//		dao.deleteTableObject(deleteRcmList, objRcmDets);
//	}
//}


//public void saveRcmPrdPlndetails(Vector vectRcmPrdPlnDetails, String strFNAId) {
//	// TODO Auto-generated method stub 
//	
//	String rcmprdplnId="";
//	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
//	DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);			
//	
//	Object objRPpDets = null;
//	List insertRPpList = new ArrayList(0);
//	List updateRPpList = new ArrayList(1);
//	List deleteRPpList = new ArrayList(2);
//	
//	int vectorSize = vectRcmPrdPlnDetails.size();
//
//	if (vectorSize > 0) {
//		insertRPpList = (List) vectRcmPrdPlnDetails.elementAt(0);
//		updateRPpList = (List) vectRcmPrdPlnDetails.elementAt(1);
//		deleteRPpList = (List) vectRcmPrdPlnDetails.elementAt(2);
//	}
//
//	int insSize = insertRPpList.size(); 
//	if (insSize > 0) {
//		
//		FnaRecomPrdtplanDet RmPpdetails=new FnaRecomPrdtplanDet();
//		FnaSelfspouseDets custDets = new FnaSelfspouseDets();
//
//		
//		if(!FipaUtils.nullOrBlank(strFNAId)){
//			custDets.setFnaId(strFNAId);				
//		}
//		
//		String strMaxId = (String) dao.fetchMaxId(RmPpdetails, "recomPpId");
//		
//		
//		Iterator itIns = insertRPpList.iterator();
//		while (itIns.hasNext()) {
//			 
//			strMaxId=FipaUtils.getFormattedMaxPK(strMaxId, "RCM", 17);
//			rcmprdplnId = strMaxId;
//			 
//			RmPpdetails = (FnaRecomPrdtplanDet) itIns.next();
//			RmPpdetails.setRecomPpId(rcmprdplnId);
//			RmPpdetails.setFnaSelfspouseDets(custDets);
//	
//	     
//		}
//		objRPpDets =RmPpdetails;			
//		dao.insertTableObject(insertRPpList, objRPpDets);
//
//	}
//
//	int updSize = updateRPpList.size(); 
//	if (updSize > 0) { 
//		dao.updateTableObject(updateRPpList, objRPpDets);
//	}
//
//	
//	int delSize = deleteRPpList.size(); 
//	if (delSize > 0) {
//		dao.deleteTableObject(deleteRPpList, objRPpDets);
//	}
//}

//public void saveRcmPrdFunddetails(Vector vectRcmPrdFundDetails, String strFNAId) {
//	// TODO Auto-generated method stub 
//	String rcmprdfdId="";
//	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
//	DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);			
//	
//	Object objRPfDets = null;
//	List insertRPfList = new ArrayList(0);
//	List updateRPfList = new ArrayList(1);
//	List deleteRPfList = new ArrayList(2);
//	
//	int vectorSize = vectRcmPrdFundDetails.size();
//
//	if (vectorSize > 0) {
//		insertRPfList = (List) vectRcmPrdFundDetails.elementAt(0);
//		updateRPfList = (List) vectRcmPrdFundDetails.elementAt(1);
//		deleteRPfList = (List) vectRcmPrdFundDetails.elementAt(2);
//	}
//
//	int insSize = insertRPfList.size(); 
//	if (insSize > 0) {
//		
//		FnaRecomFundDet RPfdetails=new FnaRecomFundDet();
//		FnaSelfspouseDets custDets = new FnaSelfspouseDets();
//
//		
//		if(!FipaUtils.nullOrBlank(strFNAId)){
//			custDets.setFnaId(strFNAId);				
//		}
//		
//		String strMaxId = (String) dao.fetchMaxId(RPfdetails, "recomFfId");
//		
//		
//		Iterator itIns = insertRPfList.iterator();
//		while (itIns.hasNext()) {
//			 
//			strMaxId=FipaUtils.getFormattedMaxPK(strMaxId, "RPF", 17);
//			rcmprdfdId = strMaxId;
//			 
//			RPfdetails = (FnaRecomFundDet) itIns.next();
//			RPfdetails.setRecomFfId(rcmprdfdId);
//			RPfdetails.setFnaSelfspouseDets(custDets);
//	
//	     
//		}
//		objRPfDets = RPfdetails;			
//		dao.insertTableObject(insertRPfList, objRPfDets);
//
//	}
//
//	int updSize = updateRPfList.size(); 
//	if (updSize > 0) { 
//		dao.updateTableObject(updateRPfList, objRPfDets);
//	}
//
//	
//	int delSize = deleteRPfList.size(); 
//	if (delSize > 0) {
//		dao.deleteTableObject(deleteRPfList, objRPfDets);
//	}
//	
//	
//}


//public void saveSwtPlndetails(Vector vectSwtPlnDetails, String strFNAId) {
//	// TODO Auto-generated method stub 
//	String SwtPlnId="";
//	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
//	DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);			
//	
//	Object objSPpDets = null;
//	List insertSPpList = new ArrayList(0);
//	List updateSPpList = new ArrayList(1);
//	List deleteSPpList = new ArrayList(2);
//	
//	int vectorSize = vectSwtPlnDetails.size();
//
//	if (vectorSize > 0) {
//		insertSPpList = (List) vectSwtPlnDetails.elementAt(0);
//		updateSPpList = (List) vectSwtPlnDetails.elementAt(1);
//		deleteSPpList = (List) vectSwtPlnDetails.elementAt(2);
//	}
//
//	int insSize = insertSPpList.size(); 
//	if (insSize > 0) {
//		
//		FnaSwtchrepPlanDet SPpdetails=new FnaSwtchrepPlanDet();
//		FnaSelfspouseDets custDets = new FnaSelfspouseDets();
//
//		
//		if(!FipaUtils.nullOrBlank(strFNAId)){
//			custDets.setFnaId(strFNAId);				
//		}
//		
//		String strMaxId = (String) dao.fetchMaxId(SPpdetails, "swrepPpId");
//		
//		
//		Iterator itIns = insertSPpList.iterator();
//		while (itIns.hasNext()) {
//			 
//			strMaxId=FipaUtils.getFormattedMaxPK(strMaxId, "SPP", 17);
//			SwtPlnId = strMaxId;
//			 
//			SPpdetails = (FnaSwtchrepPlanDet) itIns.next();
//			SPpdetails.setSwrepPpId(SwtPlnId);
//			SPpdetails.setFnaSelfspouseDets(custDets);
//	
//	     
//		}
//		objSPpDets =SPpdetails;			
//		dao.insertTableObject(insertSPpList, objSPpDets);
//
//	}
//
//	int updSize = updateSPpList.size(); 
//	if (updSize > 0) { 
//		dao.updateTableObject(updateSPpList, objSPpDets);
//	}
//
//	
//	int delSize = deleteSPpList.size(); 
//	if (delSize > 0) {
//		dao.deleteTableObject(deleteSPpList, objSPpDets);
//	}
//}


//public void saveSwtFunddetails(Vector vectSwtFundDetails, String strFNAId) {
//	// TODO Auto-generated method stub 
//	
//	String swtfdId="";
//	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
//	DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);			
//	
//	Object objSPfDets = null;
//	List insertSPfList = new ArrayList(0);
//	List updateSPfList = new ArrayList(1);
//	List deleteSPfList = new ArrayList(2);
//	
//	int vectorSize = vectSwtFundDetails.size();
//
//	if (vectorSize > 0) {
//		insertSPfList = (List) vectSwtFundDetails.elementAt(0);
//		updateSPfList = (List) vectSwtFundDetails.elementAt(1);
//		deleteSPfList = (List) vectSwtFundDetails.elementAt(2);
//	}
//
//	int insSize = insertSPfList.size(); 
//	if (insSize > 0) {
//		
//		FnaSwtchrepFundDet SPfdetails=new FnaSwtchrepFundDet();
//		FnaSelfspouseDets custDets = new FnaSelfspouseDets();
//
//		
//		if(!FipaUtils.nullOrBlank(strFNAId)){
//			custDets.setFnaId(strFNAId);				
//		}
//		
//		String strMaxId = (String) dao.fetchMaxId(SPfdetails, "swrepFfId");
//		
//		
//		Iterator itIns = insertSPfList.iterator();
//		while (itIns.hasNext()) { 
//			 
//			strMaxId=FipaUtils.getFormattedMaxPK(strMaxId, "SPF", 17);
//			swtfdId = strMaxId;
//			  
//			SPfdetails = (FnaSwtchrepFundDet) itIns.next();
//			SPfdetails.setSwrepFfId(swtfdId);
//			SPfdetails.setFnaSelfspouseDets(custDets); 
//		}
//		
//		objSPfDets =SPfdetails;			
//		dao.insertTableObject(insertSPfList, objSPfDets);
//
//	}
//
//	int updSize = updateSPfList.size(); 
//	if (updSize > 0) { 
//		dao.updateTableObject(updateSPfList, objSPfDets);
//	}
//
//	
//	int delSize = deleteSPfList.size(); 
//	if (delSize > 0) {
//		dao.deleteTableObject(deleteSPfList, objSPfDets);
//	}
//}





public String saveCashAtBankdetails(Vector vectCashOfBankDetails, String strFNAId) {
	// TODO Auto-generated method stub 
	
	String cashAtBankId="";
	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
	DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);			
	
	Object objCOBDets = null;
	List insertCOBList = new ArrayList(0);
	List updateCOBList = new ArrayList(1);
	List deleteCOBList = new ArrayList(2);
	List updateListAS = new ArrayList(3);
	int vectorSize = vectCashOfBankDetails.size();

	if (vectorSize > 0) {
		insertCOBList = (List) vectCashOfBankDetails.elementAt(0);
		updateCOBList = (List) vectCashOfBankDetails.elementAt(1);
		deleteCOBList = (List) vectCashOfBankDetails.elementAt(2);
		updateListAS = (List)vectCashOfBankDetails.elementAt(3);
	}

	int insSize = insertCOBList.size(); 
	if (insSize > 0) {
		
		FnaCashAtBank COBdetails=new FnaCashAtBank();
		FnaSelfspouseDets custDets = new FnaSelfspouseDets();
		
 
		if(!FipaUtils.nullOrBlank(strFNAId)){
			custDets.setFnaId(strFNAId);				
		}
		
		String strMaxId = (String) dao.fetchMaxId(COBdetails, "cashBankId");
		
		
		Iterator itIns = insertCOBList.iterator();
		while (itIns.hasNext()) { 
			 
			strMaxId=FipaUtils.getFormattedMaxPK(strMaxId, "COB", 17);
			cashAtBankId = strMaxId;
			  
			COBdetails = (FnaCashAtBank) itIns.next();
			COBdetails.setCashBankId(cashAtBankId);
			COBdetails.setFnaSelfspouseDets(custDets);
		}
		
		objCOBDets =COBdetails;			
		dao.insertTableObject(insertCOBList, objCOBDets);

	}

	int updSize = updateCOBList.size(); 
	if (updSize > 0) { 
		dao.updateTableObject(updateCOBList, objCOBDets);
	}

	
	int delSize = deleteCOBList.size(); 
	if (delSize > 0) {
		dao.deleteTableObject(deleteCOBList, objCOBDets);
	}
	
	int updSizeAs = updateListAS.size();
	if (updSizeAs > 0) {
				
	 
		dao.updateOrSaveTableObject(updateListAS, objCOBDets);
	}
	
	return cashAtBankId;
	
}





public String saveSRSDetails(Vector vectSRSDetails, String strFNAId) {
	// TODO Auto-generated method stub 
	
	String srsId="";
	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
	DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);			
	
	Object objSRSDets = null;
	List insertSRSList = new ArrayList(0);
	List updateSRSList = new ArrayList(1);
	List deleteSRSList = new ArrayList(2);
	List updateListAS = new ArrayList(3);
	int vectorSize = vectSRSDetails.size();

	if (vectorSize > 0) {
		insertSRSList = (List) vectSRSDetails.elementAt(0);
		updateSRSList = (List) vectSRSDetails.elementAt(1);
		deleteSRSList = (List) vectSRSDetails.elementAt(2);
		updateListAS = (List)vectSRSDetails.elementAt(3);
	}

	int insSize = insertSRSList.size(); 
	if (insSize > 0) {
		
		FnaSrs SRSdetails=new FnaSrs();
		FnaSelfspouseDets custDets = new FnaSelfspouseDets();
		
 
		if(!FipaUtils.nullOrBlank(strFNAId)){
			custDets.setFnaId(strFNAId);				
		}
		
		String strMaxId = (String) dao.fetchMaxId(SRSdetails, "srsId");
		
		
		Iterator itIns = insertSRSList.iterator();
		while (itIns.hasNext()) { 
			 
			strMaxId=FipaUtils.getFormattedMaxPK(strMaxId, "SRS", 17);
			srsId = strMaxId;
			  
			SRSdetails = (FnaSrs) itIns.next();
			SRSdetails.setSrsId(srsId);
			SRSdetails.setFnaSelfspouseDets(custDets);
		}
		
		objSRSDets =SRSdetails;			
		dao.insertTableObject(insertSRSList, objSRSDets);

	}

	int updSize = updateSRSList.size(); 
	if (updSize > 0) { 
		dao.updateTableObject(updateSRSList, objSRSDets);
	}

	
	int delSize = deleteSRSList.size(); 
	if (delSize > 0) {
		dao.deleteTableObject(deleteSRSList, objSRSDets);
	}
	int updSizeAs = updateListAS.size();
	if (updSizeAs > 0) {
				
	 
		dao.updateOrSaveTableObject(updateListAS, objSRSDets);
	}
	
	return srsId;
	
}



public void  saveLifeInsuranceDets(Vector vectLifeInscDetails, String strFNAId) {
	// TODO Auto-generated method stub 
	
	String LisId="";
	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
	DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);			
	
	Object objLisDets = null;
	List insertLisList = new ArrayList(0);
	List updateLisList = new ArrayList(1);
	List deleteLisList = new ArrayList(2);
	List updateListAS = new ArrayList(3);
	int vectorSize = vectLifeInscDetails.size();

	if (vectorSize > 0) {
		insertLisList = (List) vectLifeInscDetails.elementAt(0);
		updateLisList = (List) vectLifeInscDetails.elementAt(1);
		deleteLisList = (List) vectLifeInscDetails.elementAt(2);
		updateListAS = (List)vectLifeInscDetails.elementAt(3);
	}

	int insSize = insertLisList.size(); 
	if (insSize > 0) {
		
		FnaLifeinsuranceDets Lisdetails=new FnaLifeinsuranceDets();
		FnaSelfspouseDets custDets = new FnaSelfspouseDets();
		
 
		if(!FipaUtils.nullOrBlank(strFNAId)){
			custDets.setFnaId(strFNAId);				
		}
		
		String strMaxId = (String) dao.fetchMaxId(Lisdetails, "lipId");
		
		
		Iterator itIns = insertLisList.iterator();
		while (itIns.hasNext()) { 
			 
			strMaxId=FipaUtils.getFormattedMaxPK(strMaxId, "LIS", 17);
			LisId = strMaxId;
			  
			Lisdetails = (FnaLifeinsuranceDets) itIns.next();
			Lisdetails.setLipId(LisId);
			Lisdetails.setFnaSelfspouseDets(custDets);
		}
		
		objLisDets =Lisdetails;			
		dao.insertTableObject(insertLisList, objLisDets);

	}

	int updSize = updateLisList.size(); 
	if (updSize > 0) { 
		dao.updateTableObject(updateLisList, objLisDets);
	}

	
	int delSize = deleteLisList.size(); 
	if (delSize > 0) {
		dao.deleteTableObject(deleteLisList, objLisDets);
	}
	
	int updSizeAs = updateListAS.size();
	if (updSizeAs > 0) {
				
	 
		dao.updateOrSaveTableObject(updateListAS, objLisDets);
	}
	
	
}

 


public List openClientProfileList(DBInterfaceImpl dao, String  params) {

	List clientTabDetsList = new ArrayList();
		
		String HQL_CLIENT_TAB_DETAILS = " SELECT  ss.FNA_ID,ss.DF_CREATED_BY,TO_CHAR(ss.DF_CREATED_DATETIME,'DD/MM/YYYY HH:MI:SS AM')DF_CREATED_DATETIME,"
				+ "ad.APP_ANALYSIS_FOR,ad.APP_PURPOSE,ad.APP_CLIENT_CHOICE,ad.APP_REPLACE_PRDT," 
				+ "rtrim(xmlagg (xmlelement (ana, ana.ANALYSIS || ',')).extract ('//text()'), ',') ANALYSIS ,"
				+ "ss.FPMS_CUSTID,ss.DF_SELF_NAME,ss.DF_SELF_NRIC,ss.FNA_TYPE,DECODE(FPMS_CUSTID,null,'N','Y')FPMS_EXISTS,ss.DF_REMARKS"
				+ " FROM FNA_SELFSPOUSE_DETS ss ,FNA_ADV_DECLARE ad ,FNA_APPTYPES app ,MASTER_ANALYSIS_TYPES ana"
				+ " where ss.FNA_ID = ad.FNA_ID(+) and ss.FNA_ID = app.FNA_ID(+) and ana.ANA_PKID(+) = app.ANALYSIS_ID ";
		
		String grpbyclause = " group by ss.FNA_ID,ss.DF_SELF_NAME,ss.DF_SELF_NRIC,ss.DF_CREATED_BY,ss.DF_CREATED_DATETIME,"
				+"ad.APP_ANALYSIS_FOR,ad.APP_PURPOSE,ad.APP_CLIENT_CHOICE,ad.APP_REPLACE_PRDT," 
				+ "ss.FPMS_CUSTID,ss.FNA_TYPE,ss.DF_REMARKS order by ss.FNA_ID desc";//ss.DF_CREATED_DATETIME desc ,
		 
		logger.info(HQL_CLIENT_TAB_DETAILS + params + grpbyclause );
		
		clientTabDetsList = dao.searchByNativeSQLQuery(HQL_CLIENT_TAB_DETAILS + params + grpbyclause );
		


	return clientTabDetsList;

}

	public List openClientProfile(DBInterfaceImpl dao, String ... params) {

		List clientTabDetsList = new ArrayList();
		
		Map<String,Class> entityObj =  new LinkedHashMap<String, Class>();

		String
		HQL_GET_FNA_DET_ARCH = "select {ssd.*},{advdec.*},{cashasst.*},{othasst.*},{cont.*},{curass.*},{expd.*},{fin.*},{invsum.*},{retplan.*},{srcinc.*} from"

		
		+ "  FNA_SELFSPOUSE_DETS ssd"
		+ " , FNA_ADV_DECLARE advdec"		
		+ " , FNA_ASSET_CASHDETS cashasst"
		+ " , FNA_ASSET_OTHERDETS othasst"
		+ " , FNA_CONTINGENCY_DETS cont"
		+ " , FNA_CURASS_DETS curass"
		+ " , FNA_EXPENDITURE_DETS expd "
		+ " , FNA_FIN_LIABILITY fin"
		+ " , FNA_INVSETMENT_SUMMARY invsum"
		+ " , FNA_RETIREPLAN_DETS retplan"
		+ " , FNA_SRCOFINCOME srcinc"
		
		
		+ "  where ssd.FNA_ID = advdec.FNA_ID(+) and "
		+ "  ssd.FNA_ID = cashasst.FNA_ID(+) and "
		+ "  ssd.FNA_ID = othasst.FNA_ID(+) and "
		+ "  ssd.FNA_ID = cont.FNA_ID(+) and "
		+ "  ssd.FNA_ID = curass.FNA_ID(+) and "
		+ "	 ssd.FNA_ID = expd.FNA_ID(+) and "
		+ "	 ssd.FNA_ID = fin.FNA_ID(+) and  "
		+ "  ssd.FNA_ID = invsum.FNA_ID(+) and "
		+ "  ssd.FNA_ID = retplan.FNA_ID(+) and "
		+ "  ssd.FNA_ID = srcinc.FNA_ID(+) ";

		entityObj.put("ssd", com.fipa.dto.FnaSelfspouseDets.class);
		entityObj.put("advdec", com.fipa.dto.FnaAdvDeclare.class);
		entityObj.put("cashasst", com.fipa.dto.FnaAssetCashdets.class);
		entityObj.put("othasst", com.fipa.dto.FnaAssetOtherdets.class);
		entityObj.put("cont", com.fipa.dto.FnaContingencyDets.class);
		entityObj.put("curass", com.fipa.dto.FnaCurassDets.class);
		entityObj.put("expd", com.fipa.dto.FnaExpenditureDets.class);
		entityObj.put("fin", com.fipa.dto.FnaFinLiability.class);
		entityObj.put("invsum", com.fipa.dto.FnaInvsetmentSummary.class);
		entityObj.put("retplan", com.fipa.dto.FnaRetireplanDets.class);
		entityObj.put("srcinc", com.fipa.dto.FnaSrcofincome.class);
			
//			String HQL_CLIENT_TAB_DETAILS = "from com.fipa.dto.FnaSelfspouseDets cust "	;
			
			StringBuffer whereclause = new StringBuffer("");
			
			if(params.length == 2){
				
				whereclause.append(" and ssd.DF_SELF_NAME = '"+params[0]+"'");
				whereclause.append(" and ssd.DF_SELF_NRIC = '"+params[1]+"'");
				
			}else{
				whereclause.append(" and ssd.FNA_ID = '"+params[0]+"'");
			}
			
//			clientTabDetsList = dao.selectQueryByFind(HQL_CLIENT_TAB_DETAILS + whereclause, params);
			logger.info(HQL_GET_FNA_DET_ARCH + whereclause);
			clientTabDetsList = dao.selectQueryByJoin(HQL_GET_FNA_DET_ARCH + whereclause,entityObj);
			
 

		return clientTabDetsList;

	}
	
	public List openAppTypes(DBInterfaceImpl dao, String ... params) {

		List clientTabDetsList = new ArrayList();
 
			
			String HQL_CLIENT_TAB_DETAILS = "from com.fipa.dto.FnaApptypes apptypes "
					+ " join fetch apptypes.masterAnalysisTypes analysis"
					+ "  left join fetch apptypes.fnaSelfspouseDets cust  " 
					;
			logger.info(HQL_CLIENT_TAB_DETAILS);
			StringBuffer whereclause = new StringBuffer(" where ");
			
			if(params.length == 2){
				
				whereclause.append("cust.dfSelfName = ?");
				whereclause.append(" and cust.dfSelfNric = ?");
				
			}else{
				whereclause.append("cust.fnaId=?");
			}
			
			clientTabDetsList = dao.selectQueryByFind(HQL_CLIENT_TAB_DETAILS + whereclause, params);
 

		return clientTabDetsList;

	}
	
	public List  openClntProfAnalyTypes(DBInterfaceImpl dao, String ... params) {

		List clientTabDetsList = new ArrayList();
 
			String HQL_CLIENT_TAB_DETAILS = "from com.fipa.dto.FnaApptypes advDcl "
					+ "  left join fetch advDcl.fnaSelfspouseDets cust  "
					+ "  where cust.fnaId =?";
			logger.info(HQL_CLIENT_TAB_DETAILS);
			clientTabDetsList = dao.selectQueryByFind(HQL_CLIENT_TAB_DETAILS, params);
 

		return clientTabDetsList;

	}
	
	public List openCdAdhoc(DBInterfaceImpl dao, String ... params) {
		// TODO Auto-generated method stub
		List clientTabDetsList = new ArrayList();
 
			String HQL_CLIENT_TAB_DETAILS = "from com.fipa.dto.FnaAdvDeclare cda "
					+ "  left join fetch cda.fnaSelfspouseDets cust  "
					+ "  where cust.fnaId =?";
			logger.info(HQL_CLIENT_TAB_DETAILS);
			clientTabDetsList = dao.selectQueryByFind(HQL_CLIENT_TAB_DETAILS, params);
 

		return clientTabDetsList;
	}
	
	public List openAdvDeclare(DBInterfaceImpl dao, String ... params) {

		List clientTabDetsList = new ArrayList();
 
			
			String HQL_CLIENT_TAB_DETAILS = "from com.fipa.dto.FnaAdvDeclare advDcl "
					+ "  left join fetch advDcl.fnaSelfspouseDets cust  " ;
			logger.info(HQL_CLIENT_TAB_DETAILS);
			StringBuffer whereclause = new StringBuffer(" where ");
			
			if(params.length == 2){
				
				whereclause.append("cust.dfSelfName = ?");
				whereclause.append(" and cust.dfSelfNric = ?");
				
			}else{
				whereclause.append("cust.fnaId=?");
			}
			
			clientTabDetsList = dao.selectQueryByFind(HQL_CLIENT_TAB_DETAILS + whereclause, params);
 

		return clientTabDetsList;

	}

	public List openExpenditure(DBInterfaceImpl dao, String ... params) {

		List clientTabDetsList = new ArrayList();
 
			String HQL_CLIENT_TAB_DETAILS = "from com.fipa.dto.FnaExpenditureDets exp "
					+ "  left join fetch exp.fnaSelfspouseDets cust  "
					+ "  where cust.fnaId =?";
			logger.info(HQL_CLIENT_TAB_DETAILS);
			clientTabDetsList = dao.selectQueryByFind(HQL_CLIENT_TAB_DETAILS, params);
 

		return clientTabDetsList;

	}
	public List openContg(DBInterfaceImpl dao, String ... params) {
		// TODO Auto-generated method stub
		List clientTabDetsList = new ArrayList();
 
			
			String HQL_CLIENT_TAB_DETAILS = "from com.fipa.dto.FnaContingencyDets con "
					+ "  left join fetch con.fnaSelfspouseDets cust  "
					+ "  where cust.fnaId =?";
			logger.info(HQL_CLIENT_TAB_DETAILS);
			clientTabDetsList = dao.selectQueryByFind(HQL_CLIENT_TAB_DETAILS, params);
 
		return clientTabDetsList;
	}
	
//	public List openContingency(DBInterfaceImpl dao, String ... params) {
//		// TODO Auto-generated method stub
//		List clientTabDetsList = new ArrayList();
// 
//			String HQL_CLIENT_TAB_DETAILS = "from com.fipa.dto.FnaContingencyDets con "
//					+ "  left join fetch con.selFnaSelfSpouseDets cust  "
//					+ "  where cust.fnaId =?";
//			
//			clientTabDetsList = dao.selectQueryByFind(HQL_CLIENT_TAB_DETAILS, params);
// 
//		return clientTabDetsList;
//	}

	public List openPerprio(DBInterfaceImpl dao, String ... params) {
		// TODO Auto-generated method stub
		List clientTabDetsList = new ArrayList();
 
			String HQL_CLIENT_TAB_DETAILS = "from com.fipa.dto.FnaPersprio pp "
					+ "  left join fetch pp.fnaSelfspouseDets cust  "
					+ "  where cust.fnaId =?";
			logger.info(HQL_CLIENT_TAB_DETAILS);
			clientTabDetsList = dao.selectQueryByFind(HQL_CLIENT_TAB_DETAILS, params);
 

		return clientTabDetsList;
	}

	public List openSrcOfInc(DBInterfaceImpl dao, String ... params) {
		// TODO Auto-generated method stub
		List clientTabDetsList = new ArrayList();
 
			String HQL_CLIENT_TAB_DETAILS = "from com.fipa.dto.FnaSrcofincome soi "
					+ "  left join fetch soi.fnaSelfspouseDets cust  "
					+ "  where cust.fnaId =?";
			logger.info(HQL_CLIENT_TAB_DETAILS);
			clientTabDetsList = dao.selectQueryByFind(HQL_CLIENT_TAB_DETAILS, params);
 

		return clientTabDetsList;
	}

//	public List openCpf(DBInterfaceImpl dao, String ... params) {
//		// TODO Auto-generated method stub
//		List clientTabDetsList = new ArrayList();
// 
//			String HQL_CLIENT_TAB_DETAILS = "from com.fipa.dto.FnaCpfDets cpf "
//					+ "  left join fetch cpf.selFnaSelfSpouseDets cust  "
//					+ "  where cust.fnaId =?";
//			
//			clientTabDetsList = dao.selectQueryByFind(HQL_CLIENT_TAB_DETAILS, params);
// 
//
//		return clientTabDetsList;
//	}

	public List openFinLblty(DBInterfaceImpl dao, String ... params) {
		// TODO Auto-generated method stub
		List clientTabDetsList = new ArrayList();
 
			
			String HQL_CLIENT_TAB_DETAILS = "from com.fipa.dto.FnaFinLiability flb "
					+ "  left join fetch flb.fnaSelfspouseDets cust  "
					+ "  where cust.fnaId =?";
			logger.info(HQL_CLIENT_TAB_DETAILS);
			clientTabDetsList = dao.selectQueryByFind(HQL_CLIENT_TAB_DETAILS, params);
 

		return clientTabDetsList;
	}

	public List openCurAss(DBInterfaceImpl dao, String ... params) {
		// TODO Auto-generated method stub
		List clientTabDetsList = new ArrayList();
 
			String HQL_CLIENT_TAB_DETAILS = "from com.fipa.dto.FnaCurassDets cus "
					+ "  left join fetch cus.fnaSelfspouseDets cust  "
					+ "  where cust.fnaId =?";
			logger.info(HQL_CLIENT_TAB_DETAILS);
			clientTabDetsList = dao.selectQueryByFind(HQL_CLIENT_TAB_DETAILS, params);
 

		return clientTabDetsList;
	}

	public List openRetirepln(DBInterfaceImpl dao, String ... params) {
		// TODO Auto-generated method stub
		List clientTabDetsList = new ArrayList();
 
			String HQL_CLIENT_TAB_DETAILS = "from com.fipa.dto.FnaRetireplanDets rtp "
					+ "  left join fetch rtp.fnaSelfspouseDets cust  "
					+ "  where cust.fnaId =?";
			logger.info(HQL_CLIENT_TAB_DETAILS);
			clientTabDetsList = dao.selectQueryByFind(HQL_CLIENT_TAB_DETAILS, params);
 

		return clientTabDetsList;
	}

	public List openInvst(DBInterfaceImpl dao, String ... params) {
		// TODO Auto-generated method stub
		List clientTabDetsList = new ArrayList();
 
			String HQL_CLIENT_TAB_DETAILS = "from com.fipa.dto.FnaInvsetmentSummary inv "
					+ "  left join fetch inv.fnaSelfspouseDets cust  "
					+ "  where cust.fnaId =?";
			logger.info(HQL_CLIENT_TAB_DETAILS);
			clientTabDetsList = dao.selectQueryByFind(HQL_CLIENT_TAB_DETAILS, params);
 

		return clientTabDetsList;
	}

	public List openCshAss(DBInterfaceImpl dao, String ... params) {
		// TODO Auto-generated method stub
		List clientTabDetsList = new ArrayList();
 
			
			String HQL_CLIENT_TAB_DETAILS = "from com.fipa.dto.FnaAssetCashdets cashasts "
					+ "  left join fetch cashasts.fnaSelfspouseDets cust  "
					+ "  where cust.fnaId =?";
			logger.info(HQL_CLIENT_TAB_DETAILS);
			clientTabDetsList = dao.selectQueryByFind(HQL_CLIENT_TAB_DETAILS, params);
 

		return clientTabDetsList;
	}

	public List openOthAss(DBInterfaceImpl dao, String ... params) {
		// TODO Auto-generated method stub
		List clientTabDetsList = new ArrayList();
 
		
			
			String HQL_CLIENT_TAB_DETAILS = "from com.fipa.dto.FnaAssetOtherdets oth "
					+ "  left join fetch oth.fnaSelfspouseDets cust  "
					+ "  where cust.fnaId =?";
			logger.info(HQL_CLIENT_TAB_DETAILS);
			clientTabDetsList = dao.selectQueryByFind(HQL_CLIENT_TAB_DETAILS, params);

		return clientTabDetsList;
	}

	
	
	public List openRskPref(DBInterfaceImpl dao, String ... params) {
		// TODO Auto-generated method stub
		List clientTabDetsList = new ArrayList();
 
			
			String HQL_CLIENT_TAB_DETAILS = "from com.fipa.dto.FnaRiskprefDets rsk "
					+ "  left join fetch rsk.fnaSelfspouseDets cust  "
					+ "  where cust.fnaId =?";
			logger.info(HQL_CLIENT_TAB_DETAILS);
			clientTabDetsList = dao.selectQueryByFind(HQL_CLIENT_TAB_DETAILS, params);
 

		return clientTabDetsList;
	}
	
	public List openSumAnl(DBInterfaceImpl dao, String ... params) {
		// TODO Auto-generated method stub
		List clientTabDetsList = new ArrayList();
 
			String HQL_CLIENT_TAB_DETAILS = "from com.fipa.dto.FnaSummaryAnalysis sa "
					+ "  left join fetch sa.fnaSelfspouseDets cust  "
					+ "  where cust.fnaId =?";
			logger.info(HQL_CLIENT_TAB_DETAILS);
			clientTabDetsList = dao.selectQueryByFind(HQL_CLIENT_TAB_DETAILS, params);
 

		return clientTabDetsList;
	}
	

	
	
	public List openLifeInsuranceProfile(DBInterfaceImpl dao, String ... params) {
		// TODO Auto-generated method stub
	 
		List clientTabDetsList = new ArrayList();  
		 	String HQL_CLIENT_TAB_DETAILS = "from com.fipa.dto.FnaLifeinsuranceDets lis "
				+ "  left join fetch lis.fnaSelfspouseDets cust "
				+ "  where cust.fnaId=?";
		 	logger.info(HQL_CLIENT_TAB_DETAILS);
			clientTabDetsList = dao.selectQueryByFind(HQL_CLIENT_TAB_DETAILS, params);
 

		return clientTabDetsList;
	}
//	public List openOthPer(DBInterfaceImpl dao, String ... params) {
//		// TODO Auto-generated method stub
//		List clientTabDetsList = new ArrayList();
// 
//			String HQL_CLIENT_TAB_DETAILS = "from com.fipa.dto.FnaOtherpersonDets op "
//					+ "  left join fetch op.selFnaSelfSpouseDets cust  "
//					+ "  where cust.fnaId =?";
//			
//			clientTabDetsList = dao.selectQueryByFind(HQL_CLIENT_TAB_DETAILS, params);
// 
//
//		return clientTabDetsList;
//	}
	
	
	public List openEstPlan(DBInterfaceImpl dao, String ... params) {
		// TODO Auto-generated method stub
		List clientTabDetsList = new ArrayList();
 
			String HQL_CLIENT_TAB_DETAILS = "from com.fipa.dto.FnaEstatePlan estpln "
					+ "  left join fetch estpln.fnaSelfspouseDets cust  "
					+ "  where cust.fnaId =?";
			logger.info(HQL_CLIENT_TAB_DETAILS);
			clientTabDetsList = dao.selectQueryByFind(HQL_CLIENT_TAB_DETAILS, params);
 

		return clientTabDetsList;
	}
	
	
	
	public List openLifeInsCoveProfile(DBInterfaceImpl dao, String ... params) {
		// TODO Auto-generated method stub
		List clientTabDetsList = new ArrayList();
 
			String HQL_CLIENT_TAB_DETAILS = "from com.fipa.dto.FnaLifeinsuranceCoverages lifecov "
					+ "  left join fetch lifecov.fnaSelfspouseDets cust  "
					+ "  where cust.fnaId =?";
			logger.info(HQL_CLIENT_TAB_DETAILS);
			clientTabDetsList = dao.selectQueryByFind(HQL_CLIENT_TAB_DETAILS, params);
 

		return clientTabDetsList;
	}
	
	public List openClntProfChild(DBInterfaceImpl dao, String ... params) {

		List clientTabDetsList = new ArrayList();
 
			
			String HQL_CLIENT_TAB_DETAILS = "from com.fipa.dto.FnaChilddetails child "
					+ "  left join fetch child.fnaSelfspouseDets cust  "
					+ "  where cust.fnaId=?";
			logger.info(HQL_CLIENT_TAB_DETAILS);
			clientTabDetsList = dao.selectQueryByFind(HQL_CLIENT_TAB_DETAILS, params);
 

		return clientTabDetsList;

	}
	
	public List openClntProfRetCpfLife(DBInterfaceImpl dao, String ... params) {

		List retcpflifeTabDetsList = new ArrayList();
 
			
			String HQL_CLIENT_TAB_DETAILS = "from com.fipa.dto.FnaRetireplanCpflife retcpflife "
					+ "  left join fetch retcpflife.fnaSelfspouseDets cust  "
					+ "  where cust.fnaId=?";
			
			logger.info(HQL_CLIENT_TAB_DETAILS);
			retcpflifeTabDetsList = dao.selectQueryByFind(HQL_CLIENT_TAB_DETAILS, params);
 

		return retcpflifeTabDetsList;

	}
	
	public List openClntProfFinGoals(DBInterfaceImpl dao, String ... params) {

		List clientTabDetsList = new ArrayList();
 
			String HQL_CLIENT_TAB_DETAILS = "from com.fipa.dto.FnaFingoalsconcern fin "
					+ "  left join fetch fin.fnaSelfspouseDets cust  "
					+ "  where cust.fnaId=?";
			logger.info(HQL_CLIENT_TAB_DETAILS);
			clientTabDetsList = dao.selectQueryByFind(HQL_CLIENT_TAB_DETAILS, params);
  

		return clientTabDetsList;

	}
	
	public List openClntProfDepnt(DBInterfaceImpl dao, String ... params) {

		List clientTabDetsList = new ArrayList();
 
			String HQL_CLIENT_TAB_DETAILS = "from com.fipa.dto.FnaDependantDets depnt "
					+ "  left join fetch depnt.fnaSelfspouseDets cust  "
					+ "  where cust.fnaId=?";
			logger.info(HQL_CLIENT_TAB_DETAILS);
			clientTabDetsList = dao.selectQueryByFind(HQL_CLIENT_TAB_DETAILS, params);
 
		return clientTabDetsList;

	}
	public List openClntProfOtherAsset(DBInterfaceImpl dao, String ... params) {

		List clientTabDetsList = new ArrayList();
 
			String HQL_CLIENT_TAB_DETAILS = "from com.fipa.dto.FnaOtherAssetdets oth "
					+ "  left join fetch oth.fnaSelfspouseDets cust  "
					+ "  where cust.fnaId=?";
			logger.info(HQL_CLIENT_TAB_DETAILS);
			clientTabDetsList = dao.selectQueryByFind(HQL_CLIENT_TAB_DETAILS, params);
 
		return clientTabDetsList;

	}
	
	/*
	 * public List openClntLifeInsCovList(DBInterfaceImpl dao, String ... params) {
	 * 
	 * List clientTabDetsList = new ArrayList();
	 * 
	 * String HQL_CLIENT_TAB_DETAILS = "from com.fipa.dto.FnaOtherAssetdets oth " +
	 * "  left join fetch oth.fnaSelfspouseDets cust  " + "  where cust.fnaId=?";
	 * logger.info(HQL_CLIENT_TAB_DETAILS); clientTabDetsList =
	 * dao.selectQueryByFind(HQL_CLIENT_TAB_DETAILS, params);
	 * 
	 * return clientTabDetsList;
	 * 
	 * }
	 */
	public List openClntProfSAInvt(DBInterfaceImpl dao, String ... params) {

		List clientTabDetsList = new ArrayList();
 
			
			String HQL_CLIENT_TAB_DETAILS = "from com.fipa.dto.FnaSavingsinvDets SAInv "
					+ "  left join fetch SAInv.fnaSelfspouseDets cust  "
					+ "  where cust.fnaId=?";
			logger.info(HQL_CLIENT_TAB_DETAILS);
			clientTabDetsList = dao.selectQueryByFind(HQL_CLIENT_TAB_DETAILS, params);
 
		return clientTabDetsList;

	}
//	public List openClntProfFDFlw(DBInterfaceImpl dao, String[] params) {
//		// TODO Auto-generated method stub
//		List clientTabDetsList = new ArrayList();
// 
//			String HQL_CLIENT_TAB_DETAILS = "from com.fipa.dto.FnaFlowDets flw "
//					+ "  left join fetch flw.selFnaSelfSpouseDets cust  "
//					+ "  where cust.fnaId=?";
//			
//			clientTabDetsList = dao.selectQueryByFind(HQL_CLIENT_TAB_DETAILS, params);
// 
//
//		return clientTabDetsList;
//
//	}

//	public List openClntProfCtgDep(DBInterfaceImpl dao, String[] params) {
//		// TODO Auto-generated method stub
//		List clientTabDetsList = new ArrayList();
// 
//			
//			String HQL_CLIENT_TAB_DETAILS = "from com.fipa.dto.FnaContinDepnDets ctgdepn "
//					+ "  left join fetch ctgdepn.selFnaSelfSpouseDets cust  "
//					+ "  where cust.fnaId=?";
//			
//			clientTabDetsList = dao.selectQueryByFind(HQL_CLIENT_TAB_DETAILS, params);
// 
//
//		return clientTabDetsList;
//
//	}
	
	
	public List openClntProfAssets(DBInterfaceImpl dao, String[] params) {
		// TODO Auto-generated method stub
		List clientTabDetsList = new ArrayList();
 
			String HQL_CLIENT_TAB_DETAILS = "from com.fipa.dto.FnaAssetBusiandpersdets bsper "
					+ "  left join fetch bsper.fnaSelfspouseDets cust  "
					+ "  where cust.fnaId=?";
			logger.info(HQL_CLIENT_TAB_DETAILS);
			clientTabDetsList = dao.selectQueryByFind(HQL_CLIENT_TAB_DETAILS, params);
 
		return clientTabDetsList;

	}
	
	public List openClntProfRdIncomeAss(DBInterfaceImpl dao, String[] params) {
		// TODO Auto-generated method stub
		List clientTabDetsList = new ArrayList();
 
			String HQL_CLIENT_TAB_DETAILS = "from com.fipa.dto.FnaRetireplanIncomeasset rdretpln "
					+ "  left join fetch rdretpln.fnaSelfspouseDets cust  "
					+ "  where cust.fnaId=?";
			logger.info(HQL_CLIENT_TAB_DETAILS);
			clientTabDetsList = dao.selectQueryByFind(HQL_CLIENT_TAB_DETAILS, params);
 
		return clientTabDetsList;

	}
	
	public List openClntProfArOfConcern(DBInterfaceImpl dao, String[] params) {
		// TODO Auto-generated method stub
		List clientTabDetsList = new ArrayList();
 
			
			String HQL_CLIENT_TAB_DETAILS = "from com.fipa.dto.FnaOthareaconcern othcrn "
					+ "  left join fetch othcrn.fnaSelfspouseDets cust  "
					+ "  where cust.fnaId=?";
			logger.info(HQL_CLIENT_TAB_DETAILS);
			clientTabDetsList = dao.selectQueryByFind(HQL_CLIENT_TAB_DETAILS, params);
 

		return clientTabDetsList;

	}
	
	

//	public List openClntProfFinGlsPrio(DBInterfaceImpl dao, String[] params) {
//		// TODO Auto-generated method stub 
//		
//		
//		List clientTabDetsList = new ArrayList();  
// 
//			
//			String HQL_CLIENT_TAB_DETAILS = "from com.fipa.dto.FnaFingoalpriority rcmrsn "
//					+ "  left join fetch rcmrsn.selFnaFinGoalPriSelfspouseDets cust  "
//					+ "  where cust.fnaId=?";
//			
//			clientTabDetsList = dao.selectQueryByFind(HQL_CLIENT_TAB_DETAILS, params);
// 
//
//		return clientTabDetsList;
//
//	}
	 
	public List openClntProfRecmReasn(DBInterfaceImpl dao, String[] params) {
		// TODO Auto-generated method stub
		List clientTabDetsList = new ArrayList();
 
			
			String HQL_CLIENT_TAB_DETAILS = "from com.fipa.dto.FnaRecomReasons rcmrsn "
					+ "  left join fetch rcmrsn.fnaSelfspouseDets cust  "
					+ "  where cust.fnaId=?";
					; 
					logger.info(HQL_CLIENT_TAB_DETAILS);
			clientTabDetsList = dao.selectQueryByFind(HQL_CLIENT_TAB_DETAILS, params);
 

		return clientTabDetsList;

	}
	public List openClntProfCpfMCtb(DBInterfaceImpl dao, String[] params) {
		// TODO Auto-generated method stub
		List clientTabDetsList = new ArrayList();
 
			String HQL_CLIENT_TAB_DETAILS = "from com.fipa.dto.FnaCpfMonthcontDets cpfmthctb "
					+ "  left join fetch cpfmthctb.fnaSelfspouseDets cust  "
					+ "  where cust.fnaId=?";
			logger.info(HQL_CLIENT_TAB_DETAILS);	
			clientTabDetsList = dao.selectQueryByFind(HQL_CLIENT_TAB_DETAILS, params);
 
		return clientTabDetsList;

	}
	
	public List openClntProfCPFBalance(DBInterfaceImpl dao, String[] params) {
		// TODO Auto-generated method stub
		List clientTabDetsList = new ArrayList();
 
			String HQL_CLIENT_TAB_DETAILS = "from com.fipa.dto.FnaCpfBalanceDets cpfbal "
					+ "  left join fetch cpfbal.fnaSelfspouseDets cust "
					+ " left join fetch cpfbal.masterCpfAcctype "
					+ "  where cust.fnaId=?";
			logger.info(HQL_CLIENT_TAB_DETAILS);
			clientTabDetsList = dao.selectQueryByFind(HQL_CLIENT_TAB_DETAILS, params);
 

		return clientTabDetsList;

	}
	
//	public List openClntProfCpfTp(DBInterfaceImpl dao, String[] params) {
//		// TODO Auto-generated method stub
//		List clientTabDetsList = new ArrayList();
// 
//			String HQL_CLIENT_TAB_DETAILS = "from com.fipa.dto.FnaCpfTopupDets cpftp "
//					+ "  left join fetch cpftp.fnaSelfspouseDets cust "
//					+ " left join fetch cpftp.selmasterCpfAcctype acctype "
//					+ "  where cust.fnaId=?";
//			
//			clientTabDetsList = dao.selectQueryByFind(HQL_CLIENT_TAB_DETAILS, params);
// 
//
//		return clientTabDetsList;
//
//	}
	
	 
	
//	public List openClntProfCpfDt(DBInterfaceImpl dao, String[] params) {
//		// TODO Auto-generated method stub
//		List clientTabDetsList = new ArrayList();
// 
//			String HQL_CLIENT_TAB_DETAILS = "from com.fipa.dto.FnaCpfDeductions cpfdedt "
//					+ "  left join fetch cpfdedt.fnaSelfspouseDets cust "
//					+ " left join fetch cpfdedt.selmasterCpfAcctype cpfacc"
//					+ "  where cust.fnaId=?";
//			
//			clientTabDetsList = dao.selectQueryByFind(HQL_CLIENT_TAB_DETAILS, params);
// 
//
//		return clientTabDetsList;
//
//	}

	public List openClntProfCAD(DBInterfaceImpl dao, String[] params) {
		// TODO Auto-generated method stub
		List clientTabDetsList = new ArrayList();
 
			String HQL_CLIENT_TAB_DETAILS = "from com.fipa.dto.FnaCpfDeductions cpfadddect "
					+ "  left join fetch cpfadddect.fnaSelfspouseDets cust "
					+ " left join fetch cpfadddect.masterCpfAcctype cpfacc"
					+ "  where cust.fnaId=?";
			logger.info(HQL_CLIENT_TAB_DETAILS);
			clientTabDetsList = dao.selectQueryByFind(HQL_CLIENT_TAB_DETAILS, params);
 
 
		return clientTabDetsList;

	}
	
	public List openClntProfHI(DBInterfaceImpl dao, String[] params) {
		// TODO Auto-generated method stub
		List clientTabDetsList = new ArrayList();
 
			String HQL_CLIENT_TAB_DETAILS = "from com.fipa.dto.FnaHealthinsInfo hi "
					+ "  left join fetch hi.fnaSelfspouseDets cust  "
					+ "  where cust.fnaId=?";
			logger.info(HQL_CLIENT_TAB_DETAILS);
			clientTabDetsList = dao.selectQueryByFind(HQL_CLIENT_TAB_DETAILS, params);
 
		return clientTabDetsList;

	}

	public List openClntProfPrpOwn(DBInterfaceImpl dao, String[] params) {
		// TODO Auto-generated method stub
		List clientTabDetsList = new ArrayList();
 
			
			String HQL_CLIENT_TAB_DETAILS = "from com.fipa.dto.FnaPropownDets prop "
					+ "  left join fetch prop.fnaSelfspouseDets cust  "
					+ "  where cust.fnaId=?";
			logger.info(HQL_CLIENT_TAB_DETAILS);
			clientTabDetsList = dao.selectQueryByFind(HQL_CLIENT_TAB_DETAILS, params);
 

		return clientTabDetsList;

	}

	public List openClntProfVehOwn(DBInterfaceImpl dao, String[] params) {
		// TODO Auto-generated method stub
		List clientTabDetsList = new ArrayList();
 
			String HQL_CLIENT_TAB_DETAILS = "from com.fipa.dto.FnaVehicleownDets veh "
					+ "  left join fetch veh.fnaSelfspouseDets cust  "
					+ "  where cust.fnaId=?";
			logger.info(HQL_CLIENT_TAB_DETAILS);
			clientTabDetsList = dao.selectQueryByFind(HQL_CLIENT_TAB_DETAILS, params);
 

		return clientTabDetsList;

	}
	
	
	public List openAutoAlteration(DBInterfaceImpl dao, String strFNAId) {
		// TODO Auto-generated method  
		List clientTabDetsList = new ArrayList();
 
			String HQL_CLIENT_TAB_DETAILS = "from com.fipa.dto.FnaAutoAlter atoAltr " 
					+ "  where atoAltr.fnaId=?";
			logger.info(HQL_CLIENT_TAB_DETAILS);
			clientTabDetsList = dao.selectQueryByFind(HQL_CLIENT_TAB_DETAILS, strFNAId);
 

		return clientTabDetsList;

	}
	
	/*
	 * public List openClntAttachments(DBInterfaceImpl dao, String[] params) { //
	 * TODO Auto-generated method stub
	 *  List clientTabDetsList = new ArrayList();
	 * 
	 * String HQL_CLIENT_TAB_DETAILS = "from com.fipa.dto.FnaAttachments att " +
	 * "  where att.fnaId=?  ORDER BY att.docid asc";
	 * 
	 * clientTabDetsList = dao.selectQueryByFind(HQL_CLIENT_TAB_DETAILS, params);
	 * 
	 * return clientTabDetsList;
	 * 
	 * }
	 */
	
	public List openClntAttachments(DBInterfaceImpl dao, String[] params) {
		// TODO Auto-generated method stub
		List clientTabDetsList = new ArrayList();
 
			//String HQL_CLIENT_TAB_DETAILS = "from com.fipa.dto.FnaAttachments att " 
			//		+ "  where att.fnaId=?  ORDER BY att.docid asc"; 
			
			//String HQL_CLIENT_TAB_DETAILS = "from com.fipa.dto.FnaAttachments att " 
			//		+ " where att.fnaId IN ( select fnaselfspo2_.FNA_ID from FNA_SELFSPOUSE_DETS fnaselfspo2_ where ADVSTF_ID='ADVFPF00000000000058' AND DF_SELF_NAME='Amin Test' ) ORDER BY att.docid asc";
					
			String HQL_CLIENT_TAB_DETAILS = "from com.fipa.dto.FnaAttachments att " 
					+ " where att.fnaId IN ( select fnaselfspo2_.fnaId from com.fipa.dto.FnaSelfspouseDets fnaselfspo2_ where advstfId=? "
					+ " AND dfSelfName=? ) ORDER BY att.docid asc";
			
							
			//logger.info(HQL_CLIENT_TAB_DETAILS);
			
			
			//  String HQL_CLIENT_SEARCH = "select " +
			//  "  fnaattachm0_.DOCID as DOCID1_5_, fnaattachm0_.FNA_ID as FNA_ID2_5_,fnaattachm0_.ATTACH_CATEG_ID as ATTACH_CATEG_ID3_5_,"
			//  +
			//  "  fnaattachm0_.ATTACH_CATEG_NAME as ATTACH_CATEG_NAME4_5_,fnaattachm0_.DOCUMENT_TITLE as DOCUMENT_TITLE5_5_, fnaattachm0_.PAGE_NO as"
			//  +
			//  " PAGE_NO6_5_, fnaattachm0_.FILENAME as FILENAME7_5_, fnaattachm0_.FILESIZE as FILESIZE8_5_, fnaattachm0_.FILETYPE as FILETYPE9_5_, fnaattachm0_.CREATED_BY"
			//  +
			//  " as CREATED_BY10_5_, fnaattachm0_.ATTACH_DATE as ATTACH_DATE11_5_,fnaattachm0_.REMARKS as REMARKS12_5_, fnaattachm0_.CREATED_DATE as"
			//  +
			//  " CREATED_DATE13_5_, fnaattachm0_.MODULE_REF as MODULE_REF14_5_,fnaattachm0_.REFERENCE_ID as REFERENCE_ID15_5_ from FNA_ATTACHMENTS"
			//  +
			//  " fnaattachm0_ where fnaattachm0_.FNA_ID IN(select fnaselfspo2_.FNA_ID from FNA_SELFSPOUSE_DETS fnaselfspo2_ where ADVSTF_ID='ADVFPF00000000000058' AND"
			//  + " DF_SELF_NAME ='CUST NAME 1122' ) order by fnaattachm0_.DOCID asc";
			  
			  
			  
			  
			 			
		
			
			  //HQL_CLIENT_SEARCH = HQL_CLIENT_SEARCH.replaceAll(":advparam", strDOB);
			 // HQL_CLIENT_SEARCH = HQL_CLIENT_SEARCH.replaceAll(":selfnameparam",  strMonthlywage);
			 
			//	 clientTabDetsList = dao.searchByNativeSQLQuery(HQL_CLIENT_SEARCH); 
				
				 
					//System.out.println("HQL_CLIENT_TAB_DETAILS========================"+HQL_CLIENT_TAB_DETAILS);
					 
					  clientTabDetsList = dao.selectQueryByFind(HQL_CLIENT_TAB_DETAILS, params);
					 
					 
		return clientTabDetsList;

	}
//	public List openClntProfLIP(DBInterfaceImpl dao, String[] params) {
//		// TODO Auto-generated method stub
//		List clientTabDetsList = new ArrayList();
// 
//			String HQL_CLIENT_TAB_DETAILS = "from com.fipa.dto.FnaLifeinsplansDets lip "
//					+ "  left join fetch lip.selFnaSelfSpouseDets cust  "
//					+ "  where cust.fnaId=?";
//			
//			clientTabDetsList = dao.selectQueryByFind(HQL_CLIENT_TAB_DETAILS, params);
// 
//
//		return clientTabDetsList;
//
//	}
	
	

	public List openClntProfRcmPrd(DBInterfaceImpl dao, String[] params) {
		// TODO Auto-generated method stub
		List clientTabDetsList = new ArrayList();
		///??????????111
		
		String HQL_CLIENT_TAB_DETAILS = "from com.fipa.dto.FnaRecomPrdtplanDet rcm "
					+ "  left join fetch rcm.fnaSelfspouseDets cust  "
					+ "  where cust.fnaId=?";
		logger.info(HQL_CLIENT_TAB_DETAILS);
			clientTabDetsList = dao.selectQueryByFind(HQL_CLIENT_TAB_DETAILS, params);
			return clientTabDetsList;

	}
	
	 
	public List openClntProfRPln(DBInterfaceImpl dao, String[] params) {
		// TODO Auto-generated method stub
		List clientTabDetsList = new ArrayList();
		////???????????2222222
		
		String HQL_CLIENT_TAB_DETAILS = "from com.fipa.dto.FnaRecomPrdtplanDet rpp "
					+ "  left join fetch rpp.fnaSelfspouseDets cust  "
					+ "  where cust.fnaId=?";
		logger.info(HQL_CLIENT_TAB_DETAILS);
			clientTabDetsList = dao.selectQueryByFind(HQL_CLIENT_TAB_DETAILS, params);
			return clientTabDetsList;

	}
	
	public List openClntProfRFd(DBInterfaceImpl dao, String[] params) {
		// TODO Auto-generated method stub
		List clientTabDetsList = new ArrayList();
		
		String HQL_CLIENT_TAB_DETAILS = "from com.fipa.dto.FnaRecomFundDet rpf "
					+ "  left join fetch rpf.fnaSelfspouseDets cust  "
					+ "  where cust.fnaId=?";
		logger.info(HQL_CLIENT_TAB_DETAILS);
			clientTabDetsList = dao.selectQueryByFind(HQL_CLIENT_TAB_DETAILS, params);
			return clientTabDetsList;

	}
	
	public List openClntProfSPln(DBInterfaceImpl dao, String[] params) {
		// TODO Auto-generated method stub
		List clientTabDetsList = new ArrayList();
		
		String HQL_CLIENT_TAB_DETAILS = "from com.fipa.dto.FnaSwtchrepPlanDet spp "
					+ "  left join fetch spp.fnaSelfspouseDets cust  "
					+ "  where cust.fnaId=?";
		logger.info(HQL_CLIENT_TAB_DETAILS);
			clientTabDetsList = dao.selectQueryByFind(HQL_CLIENT_TAB_DETAILS, params);
			return clientTabDetsList;

	}
	
	
	public List openClntProfSFd(DBInterfaceImpl dao, String[] params) {
		// TODO Auto-generated method stub
		List clientTabDetsList = new ArrayList();
		
		String HQL_CLIENT_TAB_DETAILS = "from com.fipa.dto.FnaSwtchrepFundDet spf "
					+ "  left join fetch spf.fnaSelfspouseDets cust  "
					+ "  where cust.fnaId=?";
		logger.info(HQL_CLIENT_TAB_DETAILS);
			clientTabDetsList = dao.selectQueryByFind(HQL_CLIENT_TAB_DETAILS, params);
			return clientTabDetsList;

	}
	
	
	
	public List openClntProfCashAtBank(DBInterfaceImpl dao, String[] params) {
		// TODO Auto-generated method stub
		List clientTabDetsList = new ArrayList();
		
		String HQL_CLIENT_TAB_DETAILS = "from com.fipa.dto.FnaCashAtBank cob "
					+ "  left join fetch cob.fnaSelfspouseDets cust  "
					+ "  where cust.fnaId=?";
		logger.info(HQL_CLIENT_TAB_DETAILS);	
			clientTabDetsList = dao.selectQueryByFind(HQL_CLIENT_TAB_DETAILS, params);
			return clientTabDetsList;

	}
	
	public List openClntSRSDetsList(DBInterfaceImpl dao, String[] params) {
		// TODO Auto-generated method stub
		List clientTabDetsList = new ArrayList();
		
		String HQL_CLIENT_TAB_DETAILS = "from com.fipa.dto.FnaSrs srs "
					+ "  left join fetch srs.fnaSelfspouseDets cust  "
					+ "  where cust.fnaId=?";
		logger.info(HQL_CLIENT_TAB_DETAILS);	
			clientTabDetsList = dao.selectQueryByFind(HQL_CLIENT_TAB_DETAILS, params);
			return clientTabDetsList;

	}
	
	public List openRdOtherIncome(DBInterfaceImpl dao, String[] params) {
		// TODO Auto-generated method stub
		List clientTabDetsList = new ArrayList();
		
		String HQL_CLIENT_TAB_DETAILS = "from com.fipa.dto.FnaRetireplanOthpayment oth "
					+ "  left join fetch oth.fnaSelfspouseDets cust  "
					+ "  where cust.fnaId=?";
		logger.info(HQL_CLIENT_TAB_DETAILS);
			clientTabDetsList = dao.selectQueryByFind(HQL_CLIENT_TAB_DETAILS, params);
			return clientTabDetsList;

	}
	
	public List openClntProfIPINV(DBInterfaceImpl dao, String[] params) {
		// TODO Auto-generated method stub
		List clientTabDetsList = new ArrayList();
		/////???????111111111
		String HQL_CLIENT_TAB_DETAILS = "from com.fipa.dto.FnaInputinvestmentsDets ipinv "
					+ "  left join fetch ipinv.fnaSelfspouseDets cust  "
					+ "  where cust.fnaId=?";
		logger.info(HQL_CLIENT_TAB_DETAILS);
			clientTabDetsList = dao.selectQueryByFind(HQL_CLIENT_TAB_DETAILS, params);
			return clientTabDetsList;

	}
	
	public List openInputInvestment(DBInterfaceImpl dao, String[] params) {
		// TODO Auto-generated method stub
		List clientTabDetsList = new ArrayList();
		/////????????????????222222222
		String HQL_CLIENT_TAB_DETAILS = "from com.fipa.dto.FnaInputinvestmentsDets fid"
					+ "  left join fetch fid.fnaSelfspouseDets cust  "
					+ "  where cust.fnaId=?";
		logger.info(HQL_CLIENT_TAB_DETAILS);
			clientTabDetsList = dao.selectQueryByFind(HQL_CLIENT_TAB_DETAILS, params);
			return clientTabDetsList;

	}
	
//	public List openClntProfLISDets(DBInterfaceImpl dao, String[] params) {
//		// TODO Auto-generated method stub
//		List clientTabDetsList = new ArrayList();
//		
//		String HQL_CLIENT_TAB_DETAILS = "from com.fipa.dto.FnaLifeinsuranceDets lis "
//					+ "  left join fetch lis.selFnaSelfspouseDets cust  "
//					+ "  where cust.fnaId=?";
//			
//			clientTabDetsList = dao.selectQueryByFind(HQL_CLIENT_TAB_DETAILS, params);
//			return clientTabDetsList;
//
//	}
	
	public List openClntProfLIRetPlgDets(DBInterfaceImpl dao, String[] params) {
		// TODO Auto-generated method stub
		List clientTabDetsList = new ArrayList();
		
		String HQL_CLIENT_TAB_DETAILS = "from com.fipa.dto.FnaLifeinsuranceMvRet lismv "
					+ "  left join fetch lismv.fnaSelfspouseDets cust  "
					+ "  where cust.fnaId=?";
		logger.info(HQL_CLIENT_TAB_DETAILS);
			clientTabDetsList = dao.selectQueryByFind(HQL_CLIENT_TAB_DETAILS, params);
			return clientTabDetsList;

	}
	
	public List openClntProfLIBenefitsDets(DBInterfaceImpl dao, String[] params) {
		// TODO Auto-generated method stub
		List clientTabDetsList = new ArrayList();
		
		String HQL_CLIENT_TAB_DETAILS = "from com.fipa.dto.FnaLifeinsuranceDisablebenfs lisbf "
					+ "  left join fetch lisbf.fnaSelfspouseDets cust  "
					+ "  where cust.fnaId=?";
		logger.info(HQL_CLIENT_TAB_DETAILS);
			clientTabDetsList = dao.selectQueryByFind(HQL_CLIENT_TAB_DETAILS, params);
			return clientTabDetsList;

	}
	
	
	public List openClntProfLINomNamesDets(DBInterfaceImpl dao, String[] params) {
		// TODO Auto-generated method stub
		List clientTabDetsList = new ArrayList();
		
		String HQL_CLIENT_TAB_DETAILS = "from com.fipa.dto.FnaLifeinsuranceNominees lisnomname "
					+ "  left join fetch lisnomname.fnaSelfspouseDets cust  "
					+ "  where cust.fnaId=?";
		logger.info(HQL_CLIENT_TAB_DETAILS);
			clientTabDetsList = dao.selectQueryByFind(HQL_CLIENT_TAB_DETAILS, params);
			return clientTabDetsList;

	}
	public List openClntProfLIEduPlgDets(DBInterfaceImpl dao, String[] params) {
		// TODO Auto-generated method stub
		List clientTabDetsList = new ArrayList();
		
		String HQL_CLIENT_TAB_DETAILS = "from com.fipa.dto.FnaLifeinsuranceChildedc lischlded "
					+ "  left join fetch lischlded.fnaSelfspouseDets cust  "
					+ "  where cust.fnaId=?";
		logger.info(HQL_CLIENT_TAB_DETAILS);	
			clientTabDetsList = dao.selectQueryByFind(HQL_CLIENT_TAB_DETAILS, params);
			return clientTabDetsList;

	}
	



	public void deleteAgrDetails() {
		// TODO Auto-generated method stub 
			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
			DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
 
	}



	public void delAppTypesDets(String strFNAId) {
		// TODO Auto-generated method stub
 
			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
			DBInterface dao = (DBInterface) appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);

			String SQL_ADVSTF_QUERY = "DELETE FROM FNA_APPTYPES WHERE FNA_ID='"+strFNAId+"'";
			logger.info(SQL_ADVSTF_QUERY);
			dao.executeNativeSQLQuery(SQL_ADVSTF_QUERY);
		 
			
	}
	
	public void delCpfMtlyCtbDetails(HttpServletRequest request,String strFNAId) {
		// TODO Auto-generated method stub
 
		
			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
			DBInterface dao = (DBInterface) appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);

			String SQL_ADVSTF_QUERY = "DELETE FROM FNA_CPF_MONTHCONT_DETS WHERE FNA_ID='"+strFNAId+"'";
			logger.info(SQL_ADVSTF_QUERY);
			 	dao.executeNativeSQLQuery(SQL_ADVSTF_QUERY);
		 
	}
	
	public void delCpfBalcCtbDetails(HttpServletRequest request,String strFNAId) {
		// TODO Auto-generated method stub
 
		
			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
			DBInterface dao = (DBInterface) appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);

			String SQL_ADVSTF_QUERY = "DELETE FROM FNA_CPF_BALANCE_DETS WHERE FNA_ID='"+strFNAId+"'";
			logger.info(SQL_ADVSTF_QUERY);
			
				 	dao.executeNativeSQLQuery(SQL_ADVSTF_QUERY);
			
			 
			 
		 
	}



	public void deletePlnProdetails(String strLICId) {
		// TODO Auto-generated method stub 
		
		ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
		DBInterface dao = (DBInterface) appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);

		String SQL_ADVSTF_QUERY = "DELETE FROM FNA_LIFEINSURANCE_BASICRIDERS WHERE LIP_ID='"+strLICId+"'";
		 
		logger.info(SQL_ADVSTF_QUERY);
		dao.executeNativeSQLQuery(SQL_ADVSTF_QUERY);
		
	}
	
	



	public void deleteNomineeNamedetails(String strLICId) {
		// TODO Auto-generated method stub

		ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
		DBInterface dao = (DBInterface) appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);

		String SQL_ADVSTF_QUERY = "DELETE FROM FNA_LIFEINSURANCE_NOMINEES WHERE LIP_ID='"+strLICId+"'";
		logger.info(SQL_ADVSTF_QUERY);
		dao.executeNativeSQLQuery(SQL_ADVSTF_QUERY);
	}



	public void deleteBenefdetails(String strLICId) {
		// TODO Auto-generated method stub

		ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
		DBInterface dao = (DBInterface) appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);

		String SQL_ADVSTF_QUERY = "DELETE FROM FNA_LIFEINSURANCE_DISABLEBENFS WHERE LIP_ID='"+strLICId+"'";
		logger.info(SQL_ADVSTF_QUERY);
		dao.executeNativeSQLQuery(SQL_ADVSTF_QUERY);
	}



	public void deleteRetPlgdetails(String strLICId) {
		// TODO Auto-generated method stub

		ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
		DBInterface dao = (DBInterface) appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);

		String SQL_ADVSTF_QUERY = "DELETE FROM FNA_LIFEINSURANCE_MV_RET WHERE LIP_ID='"+strLICId+"'";
		logger.info(SQL_ADVSTF_QUERY);
		dao.executeNativeSQLQuery(SQL_ADVSTF_QUERY);
	}



	public void deleteEduPlgdetails(String strLICId) {
		// TODO Auto-generated method stub

		ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
		DBInterface dao = (DBInterface) appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);

		String SQL_ADVSTF_QUERY = "DELETE FROM FNA_LIFEINSURANCE_CHILDEDC WHERE LIP_ID='"+strLICId+"'";
		logger.info(SQL_ADVSTF_QUERY);
		dao.executeNativeSQLQuery(SQL_ADVSTF_QUERY);
	}


 


	public void deleteLifeInsurceDetails(String strFNAId, String strLICId) {
		// TODO Auto-generated method stub

		ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
		DBInterface dao = (DBInterface) appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);

		String SQL_ADVSTF_QUERY = "DELETE FROM FNA_LIFEINSURANCE_DETS WHERE LIP_ID='"+strLICId+"' AND FNA_ID='"+strFNAId+"'";
		logger.info(SQL_ADVSTF_QUERY);
		dao.executeNativeSQLQuery(SQL_ADVSTF_QUERY);
	}



	public void deleteCoveragesdetails(String strLICId) {
		// TODO Auto-generated method stub
		ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
		DBInterface dao = (DBInterface) appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);

		String SQL_ADVSTF_QUERY = "DELETE FROM FNA_LIFEINSURANCE_COVERAGES WHERE LIP_ID='"+strLICId+"'";
		logger.info(SQL_ADVSTF_QUERY);
		dao.executeNativeSQLQuery(SQL_ADVSTF_QUERY);
	}

	
	



	



	public void updCustId(DBInterfaceImpl dao,String strCustId, String strNric) {
		// TODO Auto-generated method stub 
		String SQL_UPDATE_CUSTID_FIPA = "UPDATE FNA_SELFSPOUSE_DETS SET FPMS_CUSTID='"+strCustId+"' WHERE DF_SELF_NRIC='"+strNric+"' " ; 
		logger.info(SQL_UPDATE_CUSTID_FIPA);
//	 	dao.updateDbByNativeSQLQuery(SQL_UPDATE_CUSTID_FIPA);
//		2020-08-10
		 
	}
	
	
	public List  getCPFContribution(DBInterface dao, String strDOB,String strMonthlywage) {

		List clientNRICSrchList = new ArrayList();
 
			
 		String HQL_CLIENT_SEARCH = "select "
 				+ " FIPA_FN_GETCPFCONTRIBUTION(CEIL(MONTHS_BETWEEN(SYSDATE, TO_DATE(':dobparam','DD/MM/YYYY')) / 12 - 1) ,'','EMPLOYEE')EMPLOYEE"
 				+ " ,FIPA_FN_GETCPFCONTRIBUTION(CEIL(MONTHS_BETWEEN(SYSDATE, TO_DATE(':dobparam','DD/MM/YYYY')) / 12 - 1) ,'','EMPLOYER')EMPLOYER"
 				+ " ,FIPA_FN_GETMASTERCPF(TO_DATE(':dobparam', 'DD/MM/YYYY'),'MONTH','')MONTHLY_LIMIT"
 				+ " ,FIPA_FN_GETMASTERCPF(TO_DATE(':dobparam', 'DD/MM/YYYY'),'YEAR','')YEARLY_LIMIT"
 				+ " ,FIPA_FN_GETMASTERCPF(TO_DATE(':dobparam', 'DD/MM/YYYY'),'ADDL',':actualwage')ADDL"
 				+ " FROM "
 				+ " DUAL";
 		
 		HQL_CLIENT_SEARCH = HQL_CLIENT_SEARCH.replaceAll(":dobparam", strDOB);
 		HQL_CLIENT_SEARCH = HQL_CLIENT_SEARCH.replaceAll(":actualwage", strMonthlywage);
 		
			logger.info(HQL_CLIENT_SEARCH);
			clientNRICSrchList = dao.searchByNativeSQLQuery(HQL_CLIENT_SEARCH);
 
		return clientNRICSrchList;

	}



	public List searchPremAmtDetails(DBInterfaceImpl dtos,DBInterfaceFpmsImpl fpmsdtos, String strFNAId, String strClientAdvId, String strCustId)
			throws HibernateException {

		List tabElements = new ArrayList();
		List fpmsTabElem = new ArrayList();
		List allTabElem = new ArrayList ();
		
		try {  
			 String FIPA_PREM_DETS_QRY  = "SELECT DISTINCT 'FIPA' APPLICATION ,LIP.LIP_ID,LIP.LIP_OWNER,PLANS.PLAN_NAME,"
			 		+ " TO_CHAR(PLANS.PLAN_INCDATE,'DD/MM/YYYY') PLAN_INCDATE,PLANS.PAYMENT_MODE,NVL(PLANS.PAYMENT_METHOD,'CASH'),PLANS.PREM_AMOUNT,"
//			 		+ " DECODE(PLANS.PREM_TERM,'WHOLE LIFE',TO_CHAR(SYSDATE,'DD/MM/YYYY'),TO_CHAR(ADD_MONTHS(TO_DATE(PLANS.PLAN_INCDATE), TO_NUMBER(PLANS.PREM_TERM)*12)-1,'DD/MM/YYYY')) POL_DATE "
			 		+"   TO_CHAR( DECODE(UPPER(PLANS.PREM_TERM), 'WHOLE LIFE', SYSDATE, ADD_MONTHS(PLANS.PLAN_INCDATE, TO_NUMBER(PLANS.PREM_TERM)*12 )-1),'DD/MM/YYYY') POL_DATE ,"
			 		+ "TO_CHAR(  PLANS.PREM_TERM)PLAN_TERM,"
			 		+ "  PLANS.RIDER_ID,"
			 		+ " CASE "
			 		+ "  WHEN UPPER(PLANS.PREM_TERM) =  'WHOLE LIFE' THEN 'ONGOING' "
			 		+ "		ELSE CASE "
			 		+ "			WHEN (ADD_MONTHS(PLANS.PLAN_INCDATE, TO_NUMBER(PLANS.PREM_TERM) * 12) < SYSDATE ) THEN 'MATURED' "
			 		+ "			ELSE 'ONGOING' END END STATUS,"
			 		+ "    abs (trunc( months_between( PLANS.PLAN_INCDATE, DECODE(UPPER(LIP.LIP_OWNER) , 'SELF',FNA.DF_SELF_DOB,'SPOUSE',FNA.DF_SPS_DOB))/12 ) ) FROMAGE,"
			 		+ "    abs (trunc( months_between( DECODE(UPPER(PLANS.PREM_TERM), 'WHOLE LIFE', SYSDATE, ADD_MONTHS(PLANS.PLAN_INCDATE, TO_NUMBER(PLANS.PREM_TERM) * 12)   - 1), DECODE(UPPER(LIP.LIP_OWNER) , 'SELF',FNA.DF_SELF_DOB,'SPOUSE',FNA.DF_SPS_DOB))/12 ) ) TOAGE,"
			 		+ "LIP.LIP_POLICYNO,PLAN_REFID,CASHVAL_REFID "
			 		+ " FROM FNA_LIFEINSURANCE_DETS LIP,FNA_SELFSPOUSE_DETS FNA,FNA_LIFEINSURANCE_BASICRIDERS PLANS "
			 		+ " WHERE LIP.FNA_ID            = FNA.FNA_ID "
			 		+ " AND LIP.LIP_ID              = PLANS.LIP_ID"
			 		+ "  AND UPPER(FNA.FNA_ID)  IN (SELECT A.FNA_ID FROM   FNA_SELFSPOUSE_DETS A,     FNA_SELFSPOUSE_DETS B"
			 		+ "            WHERE  UPPER(LTRIM(RTRIM(A.DF_SELF_NAME))) = UPPER(LTRIM(RTRIM(B.DF_SELF_NAME))) AND"
			 		+ "                A.ADVSTF_ID = B.ADVSTF_ID  AND B.FNA_ID = '"+strFNAId+"' ) "
//			 		+ " AND UPPER(FNA.DF_SELF_NRIC) = '"+strFNAId+"' "
			 		+ " AND UPPER(FNA.ADVSTF_ID)    = '"+strClientAdvId+"' "
//			 		+ " AND PLANS.PAYMENT_METHOD   IN ('CASH','CHEQUE','CREDIT-CARD','GIRO - POSB','TT','GIRO - OTHERS','CASH CARD','CASH/CHQ') "
			 		+ " AND PLANS.PAYMENT_MODE NOT IN ('SINGLE') "
			 		;
			 		
//			 		+ " UNION "
			 		
			 		
			 	String  FPMS_PREM_DETS_QRY= " SELECT  DISTINCT 'FPMSNL' APPLICATION,POLDET.APPID,  DECODE(POLDET.POL_TYPE,'FIRST PARTY', 'Self','Joint') LIPOWNER,BAS.BAS_PLAN_NAME,TO_CHAR(POLDET.EFF_DATE,'DD/MM/YYYY'),  "
			 		+ " POLDET.PAYMENT_MODE,NVL(POLDET.PAYMENT_METHOD,'CASH'),BAS.PREM_AMT,"
//			 		+ " TO_CHAR(ADD_MONTHS(TO_DATE(TO_CHAR(POLDET.EFF_DATE,'DD/MM/YYYY')), TO_NUMBER(BAS.PREM_TERM)*12)-1,'DD/MM/YYYY')  POL_DATE "
			 		+ " TO_CHAR(DECODE(UPPER(BAS.PREM_TERM), 'WHOLE LIFE', SYSDATE, ADD_MONTHS(POLDET.EFF_DATE, TO_NUMBER(BAS.PREM_TERM)*12 )-1) ,'DD/MM/YYYY')POL_DATE,"
			 		+ "TO_CHAR( BAS.PREM_TERM),"
			 		+ "BAS.PRDLIFEBASIC_ID ,"
			 		+ " CASE "
			 		+ " WHEN UPPER(BAS.PREM_TERM) =  'WHOLE LIFE' THEN 'ONGOING' ELSE"
			 		+ " CASE WHEN (ADD_MONTHS(POLDET.EFF_DATE, TO_NUMBER(BAS.PREM_TERM) * 12)) < SYSDATE  THEN 'MATURED' ELSE  'ONGOING' "
			 		+ " END END STATUS,"
			 		+ "  abs (trunc( months_between( POLDET.EFF_DATE, CUST_DETS.DOB)/12 ) ) FROM_AGE,"
			 		+ "  abs (trunc( months_between( DECODE(UPPER(BAS.PREM_TERM), 'WHOLE LIFE', SYSDATE, ADD_MONTHS(POLDET.EFF_DATE, TO_NUMBER(BAS.PREM_TERM) * 12) - 1), CUST_DETS.DOB)/12 ) ) TO_AGE,    "
			 		+ "POLDET.POLICYNO,'' PLAN_REFID,'' CASHVAL_REFID "
			 		+ " FROM CUSTOMER_DETAILS CUST_DETS, "
			 		+" ADVISER_STAFF ADVSTF,"
			 		 +" POLICY POLDET, "
			 		 +" POL_INSLIFEBASIC BAS, "
			 		 +" MASTER_PRINCIPAL PRIN, "
			 		 +" MASTER_PRODUCT_LINE PL , "
			 		 +" MASTER_POLICY_STATUS MPS "
			 		+ " WHERE POLDET.ADVISER_CURRENT     = ADVSTF.ADVSTF_ID "
			 		+ " AND POLDET.PRIN_ID               = PRIN.PRIN_ID "
			 		+ " AND POLDET.POL_STATUS_ID         = MPS.POL_STATUS_ID "
			 		+ " AND POLDET.POLICY_OWNER          = CUST_DETS.CUSTID "
			 		+ " AND POLDET.PRODUCT_LINE_ID       = PL.PRODUCT_LINE_ID "
			 		+ " AND POLDET.APPID                 = BAS.APPID "
			 		+ " AND MPS.POL_STATUS_NAME         IN( 'INFORCE','RENEWAL') "
			 		+ " AND (UPPER(PL.PRODUCT_LINE_MAIN) = ('LIFE INSURANCE') "
			 		+ " OR UPPER(PL.PRODUCT_LINE_SUB)   IN ('ILP','UT')) "
			 		+ " AND upper(CUST_DETS.CUSTID)      = '"+strCustId+"' "
//			 		+ " AND POLDET.PAYMENT_METHOD      IN ('CASH','CHEQUE','CREDIT-CARD','GIRO - POSB','TT','GIRO - OTHERS','CASH CARD','CASH/CHQ','CASH/CHEQUE') "
			 		+ " AND POLDET.PAYMENT_MODE NOT     IN ('SINGLE') ";
			    
			logger.info(FIPA_PREM_DETS_QRY);
			logger.info(FPMS_PREM_DETS_QRY);
			tabElements = dtos.searchByNativeSQLQuery(FIPA_PREM_DETS_QRY);
			
			if(!FipaUtils.nullOrBlank(strCustId)){
				fpmsTabElem = fpmsdtos.searchByNativeSQLQuery(FPMS_PREM_DETS_QRY);	
			}
			
			
			allTabElem.add(0,fpmsTabElem);
			allTabElem.add(1,tabElements);
 

		} catch (HibernateException he) { 
			logger.error("",he);
		} finally { 

		}
		return allTabElem;

	} // End Function {searchPremAmtDetails}
	
	
	public void updateuserProfile(String  userId,String strColorCode,String strDefltFlag) {
		
		String SQL_FIPA_LOG_PROFILE_UPD = "UPDATE FIPA_LOGIN_PROFILE SET SKIN_COLORS = '"+strColorCode+"',DEFAULT_COLOR = '"+strDefltFlag+"' WHERE USER_ID='"+userId+"'";
				
		logger.info(SQL_FIPA_LOG_PROFILE_UPD);
		
		ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
		DBInterfaceImpl dao = (DBInterfaceImpl) appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
		
		
//		dao.updateDbByNativeSQLQuery(SQL_FIPA_LOG_PROFILE_UPD);
//		2020-08-10

//		return userList;

	}
	
	
	public List<Object[]>  getCPFProjectionList(DBInterface dao, String strFNAId ) {

		List<Object[]> cpfData = new ArrayList<Object[]>();

		Session hbsession = dao.getCurrHiberSession();
 		 ProcedureCall call = hbsession.createStoredProcedureCall("FIPA_SP_CPFPROJ_CPFLIFE_CALL");
 		 call.registerParameter(1,String.class,ParameterMode.IN).bindValue(strFNAId);
 		 call.registerParameter(2, Class.class, ParameterMode.REF_CURSOR);
 		 
 		 Output output = call.getOutputs().getCurrent();
 		 if(output.isResultSet()){
 			cpfData = ((ResultSetOutput)output).getResultList();
 		 }
 		
 		
			
			
			hbsession.clear();
			hbsession.flush();
			hbsession.close();
 
		return cpfData;

	}
	
	public List<Object[]>  getSRSProjectionList(DBInterface dao, String strFNAId ) {

		List<Object[]> cpfData = new ArrayList<Object[]>();

		Session hbsession = dao.getCurrHiberSession();
 		 ProcedureCall call = hbsession.createStoredProcedureCall("FIPA_SP_SRSPROJ_CALL");
 		 call.registerParameter(1,String.class,ParameterMode.IN).bindValue(strFNAId);
 		 call.registerParameter(2, Class.class, ParameterMode.REF_CURSOR);
 		 
 		 Output output = call.getOutputs().getCurrent();
 		 if(output.isResultSet()){
 			cpfData = ((ResultSetOutput)output).getResultList();
 		 }
 		
 		

			
			
			hbsession.clear();
			hbsession.flush();
			hbsession.close();
 
		return cpfData;

	}
	
	

	public void deletePlnIncmAsset(String strRefId) {
		// TODO Auto-generated method stub 
		
		ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
		DBInterface dao = (DBInterface) appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);

		String SQL_ADVSTF_QUERY = "DELETE FROM FNA_RETIREPLAN_INCOMEASSET WHERE RET_REFID ='"+strRefId+"'";
		 
		logger.info(SQL_ADVSTF_QUERY);
		dao.executeNativeSQLQuery(SQL_ADVSTF_QUERY);
		
	}

	
	public void deletePlnCPFDets(String strRefId) {
		// TODO Auto-generated method stub 
		
		ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
		DBInterface dao = (DBInterface) appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);

		String SQL_ADVSTF_QUERY = "DELETE FROM FNA_CPF_DEDUCTIONS WHERE CD_REFID='"+strRefId+"'";
		 
		logger.info(SQL_ADVSTF_QUERY);
		dao.executeNativeSQLQuery(SQL_ADVSTF_QUERY);
		
	}

	
	public void deletePlnSRSDetails(String strRefId) {
		// TODO Auto-generated method stub 
		
		ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
		DBInterface dao = (DBInterface) appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);

		String SQL_ADVSTF_QUERY = "DELETE FROM FNA_SRS WHERE SRS_REF_ID='"+strRefId+"'";
		 
		logger.info(SQL_ADVSTF_QUERY);
		dao.executeNativeSQLQuery(SQL_ADVSTF_QUERY);
		
	}

	
	
}



