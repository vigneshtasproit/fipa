package com.fipa.service;

import java.io.File;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Vector;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

//import net.sf.json.JSONObject;

import org.hibernate.Session;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.web.multipart.commons.CommonsMultipartFile;

import com.fipa.db.AttachmentDB;
import com.fipa.db.ClientDB;
import com.fipa.dbinterface.DBInterface;
import com.fipa.dbinterface.DBInterfaceFpms;
import com.fipa.dbinterface.DBInterfaceFpmsImpl;
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
import com.fipa.dto.MasterAnalysisTypes;
import com.fipa.dto.MasterCpfAcctype;
import com.fipa.dbinterface.DBInterfaceImpl;
import com.fipa.util.ApplicationContextUtils;
import com.fipa.util.FipaConstant;
import com.fipa.util.FipaDateUtils;
import com.fipa.util.FipaUtils;
import com.fipa.util.PropContextUtils;

public class ClientService {

	final Logger logger = LoggerFactory.getLogger(ClientService.class);

	public List getLoginMsgDets() {
		ClientDB clientDB = new ClientDB();
		return clientDB.getLoginMsgDets();
	}

	public List<FnaApptypes> getAllAnalysisTypes() {
		ClientDB clientDB = new ClientDB();
		return clientDB.getAllAnalysisTypes();
	}

	public JSONObject saveClientDetails(HttpServletRequest request, CommonsMultipartFile[] document) {
		/* System.out.println("saveClientDetails"); */
		JSONObject jsnKeyObj = new JSONObject();
		ClientDB clientDB = new ClientDB();
		AttachmentDB attDB = new AttachmentDB();
		HttpSession session = request.getSession(false);

		Map<String, Object> objMapping = new HashMap();
		objMapping = FipaUtils.getRequestMapping(request);// bean

		Map<String, String> sessMap = new HashMap<String, String>();
		sessMap = (HashMap<String, String>) session.getAttribute(FipaConstant.LOGGED_USER_INFO);
		String strCrtdUser = (String) sessMap.get(FipaConstant.LOGGED_USER_ID);

//		 String strClientId = "";
		String strClientName = "";
		String strClientNric = "";

		ArrayList<Object> strArrDets = new ArrayList<Object>();
		String strFNAId = FipaUtils.getParamValue(request, "fnaId");
		String strLICId = FipaUtils.getParamValue(request, "lipId");

		FnaSelfspouseDets selfspsDets = new FnaSelfspouseDets();
		logger.info("-------->strFNAId ------->" + strFNAId);

		if (objMapping.containsKey(FipaConstant.SLFSPS_DETS)) {

			selfspsDets = (FnaSelfspouseDets) objMapping.get(FipaConstant.SLFSPS_DETS);

			String strSlfDOB = FipaUtils.getParamValue(request, "dfSelfDob");
			Date dateSlfDOB = FipaDateUtils.convertStringToDate(strSlfDOB);

			String strSpsDOB = FipaUtils.getParamValue(request, "dfSpsDob");
			Date dateSpsDOB = FipaDateUtils.convertStringToDate(strSpsDOB);

			String strAdvId = FipaUtils.getParamValue(request, "advstfId");
			String strAdvMgrId = FipaUtils.getParamValue(request, "mgrId");

			selfspsDets.setDfSelfDob(dateSlfDOB);
			selfspsDets.setDfSpsDob(dateSpsDOB);
			selfspsDets.setAdvstfId(strAdvId);
			selfspsDets.setMgrId(strAdvMgrId);
			selfspsDets.setFnaType("SIMPLIFIED");
			String strDateTimeCrtd = "";

			if (FipaUtils.nullOrBlank(strFNAId)) {

				selfspsDets.setDfCreatedBy(strCrtdUser);
				selfspsDets.setDfCreatedDate(new Date());
				selfspsDets.setDfCreatedDatetime(new Date());

				strDateTimeCrtd = FipaDateUtils.formatDateTime(selfspsDets.getDfCreatedDatetime());

			} else if (!FipaUtils.nullOrBlank(strFNAId)) {

				String strCrtdDate = FipaUtils.getParamValue(request, "dfCreatedDate");
				Date dateCrtdDate = FipaDateUtils.convertStringToDate(strCrtdDate);
				selfspsDets.setDfCreatedDate(dateCrtdDate);

				String strCrtdDateTime = FipaUtils.getParamValue(request, "dfCreatedDatetime");
				Date dateCrtdDateTime = FipaDateUtils.convertStringToDateTime(strCrtdDateTime);
				selfspsDets.setDfCreatedDatetime(dateCrtdDateTime);
				strDateTimeCrtd = strCrtdDateTime;

				selfspsDets.setFnaId(strFNAId);
				selfspsDets.setDfModifiedBy(strCrtdUser);
				selfspsDets.setDfModifiedDate(new Date());

			}

			strFNAId = clientDB.saveClientDetails(selfspsDets);

			strArrDets.add(0, strFNAId);
			strArrDets.add(1, selfspsDets.getDfSelfName());
			strArrDets.add(2, selfspsDets.getDfSelfNric());
			jsnKeyObj.put("fnaId", strFNAId);
			jsnKeyObj.put("selfName",
					FipaUtils.nullOrBlank(selfspsDets.getDfSelfName()) ? "" : selfspsDets.getDfSelfName());
			jsnKeyObj.put("selfNric",
					FipaUtils.nullOrBlank(selfspsDets.getDfSelfNric()) ? "" : selfspsDets.getDfSelfNric());
			jsnKeyObj.put("fpmsCustId",
					FipaUtils.nullOrBlank(selfspsDets.getFpmsCustid()) ? "" : selfspsDets.getFpmsCustid());
			jsnKeyObj.put("dfCreatedDatetime", strDateTimeCrtd);
		}

		Vector vectAnalysisType = getAnalysisTypes(request);
		Vector vectChildDetails = getChildDetails(request);
		Vector vectFinGoalsDetails = getFinGoalsDetails(request);
		Vector vectDeptDetails = getDependentDetails(request);
		Vector vectOtherAssetDetails = getOtherAssetDetails(request);
		Vector vectSavingInvDetails = getSavingsInvDetails(request);
		Vector vectCPFBalanceDets = getCPFBalanceDets(request);
		Vector vectCpfMonthlyCtrb = getCPFMonthlyContrbDetails(request);
		Vector vectAssetdetails = getAssetDetails(request);// Personal & Business
		Vector vectOthArCrndetails = getOthAreaConrnDetails(request);
		Vector vectHlthInsDetails = getHlthInsDetails(request);
		Vector vectPropOwnDetails = getPropOwnDetails(request);
		Vector vectVehOwnDetails = getVehOwnDetails(request);
		Vector vectIpInvstDetails = getIpInvtDetails(request);
		Vector<List<FnaEstatePlan>> vectEstPlan = getEstPlanDetails(request, strFNAId);
		Vector vectCashOfBankDetails = getCashOfBankDetails(request);
		Vector vectSRSDetails = getSRSDetails(request);
		Vector vectCpfAddtnDedtnCtrb = getCPFAddtnDedtnDetails(request);
		Vector vectInputInvest = getInputInvest(request);
		Vector vectOthRetPlg = getOthRetPlg(request);
		Vector vectIncRetPlg = getIncRetPlg(request);
		Vector vectRetCpfLifedetails = getRetCpfLifeDetails(request);

		Vector vectAttchDetails = uploadAttachments(request, document);
		Vector vectAutoAltrdetails = getAutoAlterDetails(request);

		List childIdList = clientDB.saveChilddetails(vectChildDetails, strFNAId);
//		 strArrDets.add(3,childIdList);

		clientDB.saveFinGoalsdetails(vectFinGoalsDetails, strFNAId);

		clientDB.saveAppTypesDetails(vectAnalysisType, strFNAId);

		clientDB.saveDepdetails(vectDeptDetails, strFNAId);

		clientDB.saveOtherAssetdetails(vectOtherAssetDetails, strFNAId);
		
//		 clientDB.saveExpFDFlwdetails(vectExpFdFlowDetails,strFNAId);		

		if (objMapping.containsKey(FipaConstant.ADVDECLR_DETS)) {

			FnaAdvDeclare fnaAdvDclDets = new FnaAdvDeclare();
			fnaAdvDclDets = (FnaAdvDeclare) objMapping.get(FipaConstant.ADVDECLR_DETS);

			fnaAdvDclDets.setAdvDecCrtdBy(strCrtdUser);
			fnaAdvDclDets.setAdvDecCrtdDate(new Date());

			String strAdvdecid = clientDB.saveAdvDeclareDetails(fnaAdvDclDets, strFNAId);

			jsnKeyObj.put("advDecId", strAdvdecid);
		}

		clientDB.saveSAInvdetails(vectSavingInvDetails, strFNAId);

		List<String> newCPFBalIdList = clientDB.saveCPFBalanDets(vectCPFBalanceDets, strFNAId);
		for (String ids : newCPFBalIdList) {
			String[] strarr = FipaUtils.splitSplChars(ids, "^");
			if (strarr[1].equalsIgnoreCase("SELF")) {
				jsnKeyObj.put("hTxtFldSlfPkId" + strarr[0], strarr[2]);
			}
			if (strarr[1].equalsIgnoreCase("SPOUSE")) {
				jsnKeyObj.put("hTxtFldSpsPkId" + strarr[0], strarr[2]);
			}

		}

		List<String> newCpfMonthIdList = clientDB.saveCpfMtlyCtbDetails(vectCpfMonthlyCtrb, strFNAId);
		for (String ids : newCpfMonthIdList) {
			String[] strarr = FipaUtils.splitSplChars(ids, "^");

			if (strarr[0].equalsIgnoreCase("SELF")) {
				jsnKeyObj.put("ccPkIdSelf", strarr[1]);
			}
			if (strarr[0].equalsIgnoreCase("SPOUSE")) {
				jsnKeyObj.put("ccPkIdSps", strarr[1]);
			}

		}

//		 clientDB.saveCpfTopupsDetails(vectCpfTopUpCtrb,strFNAId);
//		 clientDB.saveCpfDedtDetails(vectCpfDedtnCtrb,strFNAId);

		if (objMapping.containsKey(FipaConstant.EXP_DETS)) {

			FnaExpenditureDets fnaExpDets = new FnaExpenditureDets();
			fnaExpDets = (FnaExpenditureDets) objMapping.get(FipaConstant.EXP_DETS);

			fnaExpDets.setExpdCreatedBy(strCrtdUser);
			fnaExpDets.setExpdCreatedDate(new Date());

			String expdId = clientDB.saveExpenditureDetails(fnaExpDets, strFNAId);
			jsnKeyObj.put("expdId", expdId);
		}

		clientDB.saveAssetsDetails(vectAssetdetails, strFNAId);

		clientDB.saveOthArOfCnDetails(vectOthArCrndetails, strFNAId);
//		 clientDB.saveReasonsDetails(vectReasonsdetails,strFNAId);

		if (objMapping.containsKey(FipaConstant.CONTG_DETS)) {

			FnaContingencyDets fnaContgDets = new FnaContingencyDets();
			fnaContgDets = (FnaContingencyDets) objMapping.get(FipaConstant.CONTG_DETS);
			fnaContgDets.setContCrtdBy(strCrtdUser);
			fnaContgDets.setContCrtdDate(new Date());

			String conId = clientDB.saveContgDetails(fnaContgDets, strFNAId);
			jsnKeyObj.put("conId", conId);

		}

		if (objMapping.containsKey(FipaConstant.PERS_DETS)) {

			FnaPersprio fnaPersDets = new FnaPersprio();
			fnaPersDets = (FnaPersprio) objMapping.get(FipaConstant.PERS_DETS);

			fnaPersDets.setPpCreatedBy(strCrtdUser);
			fnaPersDets.setPpCreatedDate(new Date());

			String persprioId = clientDB.savePersPrioDetails(fnaPersDets, strFNAId);
			jsnKeyObj.put("persprioId", persprioId);
		}
//		 clientDB.saveContgPlndetails(vectContPlnDetails,strFNAId);		

		if (objMapping.containsKey(FipaConstant.SRCOFINC_DETS)) {

			FnaSrcofincome fnaSrcOfincDets = new FnaSrcofincome();
			fnaSrcOfincDets = (FnaSrcofincome) objMapping.get(FipaConstant.SRCOFINC_DETS);

			fnaSrcOfincDets.setIncsrcCreatedBy(strCrtdUser);
			fnaSrcOfincDets.setIncsrcCreatedDate(new Date());
			String incsrcId = clientDB.saveSrcOfIncDetails(fnaSrcOfincDets, strFNAId);
			jsnKeyObj.put("incsrcId", incsrcId);

		}

		clientDB.saveHIdetails(vectHlthInsDetails, strFNAId);

		if (objMapping.containsKey(FipaConstant.FNLBTY_DETS)) {

			FnaFinLiability fnaFinLbltyDets = new FnaFinLiability();
			fnaFinLbltyDets = (FnaFinLiability) objMapping.get(FipaConstant.FNLBTY_DETS);

			fnaFinLbltyDets.setLiabCreatedBy(strCrtdUser);
			fnaFinLbltyDets.setLiabCreatedDate(new Date());

			String liabId = clientDB.saveFinLbltyDetails(fnaFinLbltyDets, strFNAId);
			jsnKeyObj.put("liabId", liabId);
		}

		clientDB.savePropOwndetails(vectPropOwnDetails, strFNAId);

		if (objMapping.containsKey(FipaConstant.CURASS_DETS)) {

			FnaCurassDets fnaCurAssDets = new FnaCurassDets();
			fnaCurAssDets = (FnaCurassDets) objMapping.get(FipaConstant.CURASS_DETS);

			fnaCurAssDets.setCaCreatedBy(strCrtdUser);
			fnaCurAssDets.setCaCreatedDate(new Date());

			String caId = clientDB.saveCurAssDetails(fnaCurAssDets, strFNAId);
			jsnKeyObj.put("caId", caId);

		}

		if (objMapping.containsKey(FipaConstant.RETPLN_DETS)) {

			FnaRetireplanDets fnaRetirePlnDets = new FnaRetireplanDets();
			fnaRetirePlnDets = (FnaRetireplanDets) objMapping.get(FipaConstant.RETPLN_DETS);

			fnaRetirePlnDets.setRetCreatedBy(strCrtdUser);
			fnaRetirePlnDets.setRetCreatedDate(new Date());

			String retId = clientDB.saveRetirePlnDetails(fnaRetirePlnDets, strFNAId);
			jsnKeyObj.put("retId", retId);

		}

		clientDB.saveVehOwndetails(vectVehOwnDetails, strFNAId);

		if (objMapping.containsKey(FipaConstant.INVST_DETS)) {

			FnaInvsetmentSummary fnaInvstDets = new FnaInvsetmentSummary();
			fnaInvstDets = (FnaInvsetmentSummary) objMapping.get(FipaConstant.INVST_DETS);

			fnaInvstDets.setInvCreatedBy(strCrtdUser);
			fnaInvstDets.setInvCreatedDate(new Date());

			String invstId = clientDB.saveInvstDetails(fnaInvstDets, strFNAId);
			jsnKeyObj.put("invstId", invstId);
		}

		if (objMapping.containsKey(FipaConstant.CSHASS_DETS)) {

			FnaAssetCashdets fnaCashAssDets = new FnaAssetCashdets();
			fnaCashAssDets = (FnaAssetCashdets) objMapping.get(FipaConstant.CSHASS_DETS);

			fnaCashAssDets.setCasstCreatedBy(strCrtdUser);
			fnaCashAssDets.setCasstCreatedDate(new Date());

			String casstId = clientDB.saveCashAssDetails(fnaCashAssDets, strFNAId);
			jsnKeyObj.put("casstId", casstId);
		}

//		 clientDB.saveLipInsurncedetails(vectLIPDetails,strFNAId);

		if (objMapping.containsKey(FipaConstant.OTHASS_DETS)) {

			FnaAssetOtherdets fnaOthAssDets = new FnaAssetOtherdets();
			fnaOthAssDets = (FnaAssetOtherdets) objMapping.get(FipaConstant.OTHASS_DETS);

			fnaOthAssDets.setOthasstCreatedBy(strCrtdUser);
			fnaOthAssDets.setOthasstCreatedDate(new Date());

			String othId = clientDB.saveOthAssDetails(fnaOthAssDets, strFNAId);
			jsnKeyObj.put("othId", othId);
		}

		clientDB.saveIpInvstdetails(vectIpInvstDetails, strFNAId);

		if (objMapping.containsKey(FipaConstant.RSKPREF_DETS)) {

			FnaRiskprefDets fnaRskPrefDets = new FnaRiskprefDets();
			fnaRskPrefDets = (FnaRiskprefDets) objMapping.get(FipaConstant.RSKPREF_DETS);

			fnaRskPrefDets.setCrCreatedBy(strCrtdUser);
			fnaRskPrefDets.setCrCreatedDate(new Date());

			String riskId = clientDB.saveRskPrefDetails(fnaRskPrefDets, strFNAId);
			jsnKeyObj.put("riskId", riskId);

		}

		if (objMapping.containsKey(FipaConstant.SANAL_DETS)) {

			FnaSummaryAnalysis fnaSmAnalysisDets = new FnaSummaryAnalysis();
			fnaSmAnalysisDets = (FnaSummaryAnalysis) objMapping.get(FipaConstant.SANAL_DETS);

			fnaSmAnalysisDets.setSaCreatedBy(strCrtdUser);
			fnaSmAnalysisDets.setSaCreatedDate(new Date());

			String saId = clientDB.saveSAnalDetails(fnaSmAnalysisDets, strFNAId);
			jsnKeyObj.put("saId", saId);

		}

//		 clientDB.saveOthPerDetails(vectOthpers,strFNAId);

		clientDB.saveEstPlanDetails(vectEstPlan, strFNAId);

//		 clientDB.saveRcmPrdDetails(vectRcmPrdDetails, strFNAId);
//		 
//		 clientDB.saveRcmPrdPlndetails(vectRcmPrdPlnDetails,strFNAId);
//		 clientDB.saveRcmPrdFunddetails(vectRcmPrdFundDetails,strFNAId);
//		 
//		 clientDB.saveSwtPlndetails(vectSwtPlnDetails,strFNAId);
//		 clientDB.saveSwtFunddetails(vectSwtFundDetails,strFNAId);

		clientDB.saveCashAtBankdetails(vectCashOfBankDetails, strFNAId);

		clientDB.saveSRSDetails(vectSRSDetails, strFNAId);

		clientDB.saveCADdetails(vectCpfAddtnDedtnCtrb, strFNAId);

		clientDB.saveInvstdetails(vectInputInvest, strFNAId);

		clientDB.saveRdOthPaymenttails(vectOthRetPlg, strFNAId);

		clientDB.saveRdIncPaymenttails(vectIncRetPlg, strFNAId);

		clientDB.saveRetCpfLifeDets(vectRetCpfLifedetails, strFNAId);

		attDB.saveCustAttDetails(vectAttchDetails, strFNAId);

		clientDB.saveAutoAttrDets(vectAutoAltrdetails, strFNAId);

		// Life Insurance Details
		if (objMapping.containsKey(FipaConstant.LIFEINSRCE_DETS)) {

			FnaLifeinsuranceDets fnaLifeInsurceDets = new FnaLifeinsuranceDets();
			fnaLifeInsurceDets = (FnaLifeinsuranceDets) objMapping.get(FipaConstant.LIFEINSRCE_DETS);

			String lipIncepdate = FipaUtils.getParamValue(request, "lipIncepdate");
			Date dteLipIncepdate = FipaDateUtils.convertStringToDate(lipIncepdate);

			String lipExpdate = FipaUtils.getParamValue(request, "lipExpdate");
			Date dteLipExpdate = FipaDateUtils.convertStringToDate(lipExpdate);

			fnaLifeInsurceDets.setLipIncepdate(dteLipIncepdate);
			fnaLifeInsurceDets.setLipExpdate(dteLipExpdate);

			String lipMaturityDate = FipaUtils.getParamValue(request, "lipMaturityDate");
			Date dteLipMaturityDate = FipaDateUtils.convertStringToDate(lipMaturityDate);
			fnaLifeInsurceDets.setLipMaturityDate(dteLipMaturityDate);

			String strLICRefId = FipaUtils.getParamValue(request, "lipRefId");

			String strPolicyNo = FipaUtils.getParamValue(request, "lipPolicyno");

			if (FipaUtils.nullOrBlank(strLICId)) {
				fnaLifeInsurceDets.setLipCreatedBy(strCrtdUser);
				fnaLifeInsurceDets.setLipCreatedDate(new Date());
				fnaLifeInsurceDets.setLipRefId(strLICRefId);
				if (!FipaUtils.nullOrBlank(strPolicyNo)) {

					strLICId = clientDB.saveLifeInsrceDetails(fnaLifeInsurceDets, strFNAId);
				}

			} else {

				fnaLifeInsurceDets.setLipRefId(strLICRefId);
				fnaLifeInsurceDets.setLipModifiedBy(strCrtdUser);
				fnaLifeInsurceDets.setLipModifiedDate(new Date());

				fnaLifeInsurceDets.setFnaSelfspouseDets(selfspsDets);
				strLICId = clientDB.updLifeInsrceDetails(fnaLifeInsurceDets);

			}

			jsnKeyObj.put("lipId", strLICId);

		}

		/* System.out.println("strLICId------------"+strLICId); */
		if (!FipaUtils.nullOrBlank(strLICId)) {
			/* System.out.println("if Instant save -strLICId------------"+strLICId); */
			Vector vectliPlanAndProDetails = getliPlnProDetails(request);
			Vector vectLifeInsCovPlan = getLifeInsCovrgeDetails(request, strFNAId);// DeathBenefit,CriticalIlns,Hospitality
			Vector vectliMvRetDetails = getliMvRetDetails(request);
			Vector vectliChildDets = getliChildDets(request);
			Vector vectLiBenefits = getLiBenefitsDetails(request);
			Vector vectNomNamedetails = getLiNomNamesDetails(request);

			clientDB.savePlnProdetails(vectliPlanAndProDetails, strFNAId, strLICId);

			clientDB.saveLifeInsCoverageDetails(vectLifeInsCovPlan, strFNAId, strLICId);

			clientDB.saveRetPlgdetails(vectliMvRetDetails, strFNAId, strLICId);

			clientDB.saveEduPlgdetails(vectliChildDets, strFNAId, strLICId);

			clientDB.saveBenefdetails(vectLiBenefits, strFNAId, strLICId);

			clientDB.saveNomineeNamedetails(vectNomNamedetails, strFNAId, strLICId);

		}

		String strColorCode = FipaUtils.getParamValue(request, "hTxtFldProfileColor");
		String strDefltFlag = FipaUtils.getParamValue(request, "hTxtFldDefaultColorFlag");
		clientDB.updateuserProfile(strCrtdUser, strColorCode, strDefltFlag);

//		 

		return jsnKeyObj;

	}

	public void setDefaultColor(HttpServletRequest request) {

		HttpSession session = request.getSession(false);
		Map<String, String> sessMap = new HashMap<String, String>();
		sessMap = (HashMap<String, String>) session.getAttribute(FipaConstant.LOGGED_USER_INFO);
		String strCrtdUser = (String) sessMap.get(FipaConstant.LOGGED_USER_ID);

		ClientDB clientDB = new ClientDB();

		String strColorCode = FipaUtils.getParamValue(request, "hTxtFldProfileColor");
		String strDefltFlag = FipaUtils.getParamValue(request, "hTxtFldDefaultColorFlag");
		clientDB.updateuserProfile(strCrtdUser, strColorCode, strDefltFlag);
	}

	public String updateClientDetails(HttpServletRequest request, CommonsMultipartFile[] document) {

		ClientDB clientDB = new ClientDB();
		AttachmentDB attDB = new AttachmentDB();
		HttpSession session = request.getSession(false);

		Map<String, Object> objMapping = new HashMap();
		objMapping = FipaUtils.getRequestMapping(request);

		Map<String, String> sessMap = new HashMap<String, String>();
		sessMap = (HashMap<String, String>) session.getAttribute(FipaConstant.LOGGED_USER_INFO);
		String strCrtdUser = (String) sessMap.get(FipaConstant.LOGGED_USER_ID);

		String strFNAId = request.getParameter("fnaId");
		String strLICId = request.getParameter("lipId");
		FnaSelfspouseDets selFnaSelfSpouseDets = new FnaSelfspouseDets();
		selFnaSelfSpouseDets.setFnaId(strFNAId);

		if (objMapping.containsKey(FipaConstant.SLFSPS_DETS)) {

			FnaSelfspouseDets selfspsDets = (FnaSelfspouseDets) objMapping.get(FipaConstant.SLFSPS_DETS);

			strFNAId = selfspsDets.getFnaId();

			String strSlfDOB = FipaUtils.getParamValue(request, "dfSelfDob");
			Date dateSlfDOB = FipaDateUtils.convertStringToDate(strSlfDOB);

			String strSpsDOB = FipaUtils.getParamValue(request, "dfSpsDob");
			Date dateSpsDOB = FipaDateUtils.convertStringToDate(strSpsDOB);

			String strAdvId = FipaUtils.getParamValue(request, "advstfId");
			String strAdvMgrId = FipaUtils.getParamValue(request, "mgrId");

			selfspsDets.setDfSelfDob(dateSlfDOB);
			selfspsDets.setDfSpsDob(dateSpsDOB);

			selfspsDets.setAdvstfId(strAdvId);

			selfspsDets.setMgrId(strAdvMgrId);

			selfspsDets.setFnaType("FULLFACT");
			selfspsDets.setDfModifiedBy(strCrtdUser);
			selfspsDets.setDfModifiedDate(new Date());
			selfspsDets.setDfCreatedDatetime(new Date());
			clientDB.updateClientDetails(selfspsDets);

		}

		Vector vectChildDetails = getChildDetails(request);
		clientDB.saveChilddetails(vectChildDetails, strFNAId);

		Vector vectFinGoalsDetails = getFinGoalsDetails(request);
		clientDB.saveFinGoalsdetails(vectFinGoalsDetails, strFNAId);

		Vector vectAnalysisType = getAnalysisTypes(request);
		clientDB.saveAppTypesDetails(vectAnalysisType, strFNAId);

		Vector vectDeptDetails = getDependentDetails(request);
		clientDB.saveDepdetails(vectDeptDetails, strFNAId);

		Vector vectOtherAssetDetails = getOtherAssetDetails(request);
		clientDB.saveOtherAssetdetails(vectOtherAssetDetails, strFNAId);
		
//			 clientDB.saveExpFDFlwdetails(vectExpFdFlowDetails,strFNAId);

		if (objMapping.containsKey(FipaConstant.ADVDECLR_DETS)) {
			FnaAdvDeclare fnaAdvDclDets = new FnaAdvDeclare();
			fnaAdvDclDets = (FnaAdvDeclare) objMapping.get(FipaConstant.ADVDECLR_DETS);

			String strAdvDclId = fnaAdvDclDets.getAdvDecId();

			if (FipaUtils.nullOrBlank(strAdvDclId)) {

				fnaAdvDclDets.setAdvDecCrtdBy(strCrtdUser);
				fnaAdvDclDets.setAdvDecCrtdDate(new Date());

				clientDB.saveAdvDeclareDetails(fnaAdvDclDets, strFNAId);

			} else {

				fnaAdvDclDets.setAdvDecModBy(strCrtdUser);
				fnaAdvDclDets.setAdvDecModDate(new Date());
				fnaAdvDclDets.setFnaSelfspouseDets(selFnaSelfSpouseDets);

				clientDB.updateAdvDclDetails(fnaAdvDclDets);
			}
		}

		Vector vectSavingInvDetails = getSavingsInvDetails(request);
		clientDB.saveSAInvdetails(vectSavingInvDetails, strFNAId);

		Vector vectCPFBalanceDets = getCPFBalanceDets(request);
		clientDB.saveCPFBalanDets(vectCPFBalanceDets, strFNAId);

		Vector vectCpfMonthlyCtrb = getCPFMonthlyContrbDetails(request);
		clientDB.saveCpfMtlyCtbDetails(vectCpfMonthlyCtrb, strFNAId);

//			 clientDB.saveCpfTopupsDetails(vectCpfTopUpCtrb,strFNAId);
//			 clientDB.saveCpfDedtDetails(vectCpfDedtnCtrb,strFNAId);

		if (objMapping.containsKey(FipaConstant.EXP_DETS)) {

			FnaExpenditureDets fnaExpDets = new FnaExpenditureDets();
			fnaExpDets = (FnaExpenditureDets) objMapping.get(FipaConstant.EXP_DETS);
			String strExpId = fnaExpDets.getExpdId();

			if (FipaUtils.nullOrBlank(strExpId)) {

				fnaExpDets.setExpdCreatedBy(strCrtdUser);
				fnaExpDets.setExpdCreatedDate(new Date());
				clientDB.saveExpenditureDetails(fnaExpDets, strFNAId);

			} else {

				fnaExpDets.setExpdModifiedBy(strCrtdUser);
				fnaExpDets.setExpdModifiedDate(new Date());
				fnaExpDets.setFnaSelfspouseDets(selFnaSelfSpouseDets);

				clientDB.updateExpDetails(fnaExpDets);
			}

		}

		Vector vectAssetdetails = getAssetDetails(request);// Personal & Business
		clientDB.saveAssetsDetails(vectAssetdetails, strFNAId);

		Vector vectOthArCrndetails = getOthAreaConrnDetails(request);
		clientDB.saveOthArOfCnDetails(vectOthArCrndetails, strFNAId);
//			 clientDB.saveReasonsDetails(vectReasonsdetails,strFNAId);

		if (objMapping.containsKey(FipaConstant.CONTG_DETS)) {

			FnaContingencyDets fnaContgDets = new FnaContingencyDets();
			fnaContgDets = (FnaContingencyDets) objMapping.get(FipaConstant.CONTG_DETS);

			String strContgId = fnaContgDets.getConId();

			if (FipaUtils.nullOrBlank(strContgId)) {

				fnaContgDets.setContCrtdBy(strCrtdUser);
				fnaContgDets.setContCrtdDate(new Date());

				clientDB.saveContgDetails(fnaContgDets, strFNAId);

			} else {
				fnaContgDets.setContModBy(strCrtdUser);
				fnaContgDets.setContModDate(new Date());

				fnaContgDets.setFnaSelfspouseDets(selFnaSelfSpouseDets);
				clientDB.updContgDetails(fnaContgDets);
			}

		}

//			 clientDB.saveContgPlndetails(vectContPlnDetails,strFNAId);
		Vector vectHlthInsDetails = getHlthInsDetails(request);
		clientDB.saveHIdetails(vectHlthInsDetails, strFNAId);

//			 if(objMapping.containsKey(FipaConstant.PERS_DETS)){
//				 
//				 FnaPersprio fnaPersDets    = new FnaPersprio();
//				 fnaPersDets = (FnaPersprio)objMapping.get(FipaConstant.PERS_DETS);
//				 
//				 String strPersId = fnaPersDets.getTxtFldPersPrioId();
//				 
//				 if(FipaUtils.nullOrBlank(strPersId)){
//					 fnaPersDets.setTxtFldPPCrtdBy(strCrtdUser);
//					 fnaPersDets.setTxtFldPPCrtdDate(new Date());
//				
//					 clientDB.savePersPrioDetails(fnaPersDets,strFNAId);
//				 }else{
//					 
//					 fnaPersDets.setTxtFldPPModBy(strCrtdUser);
//					 fnaPersDets.setTxtFldPPModDate(new Date());
//					
//					 fnaPersDets.setFnaSelfspouseDets(selFnaSelfSpouseDets);
//					 clientDB.updPersPrioDetails(fnaPersDets);
//				 }
//			
//			}

		if (objMapping.containsKey(FipaConstant.SRCOFINC_DETS)) {

			FnaSrcofincome fnaSrcOfincDets = new FnaSrcofincome();
			fnaSrcOfincDets = (FnaSrcofincome) objMapping.get(FipaConstant.SRCOFINC_DETS);

			String strSrcId = fnaSrcOfincDets.getIncsrcId();

			if (FipaUtils.nullObj(strSrcId)) {
				fnaSrcOfincDets.setIncsrcCreatedBy(strCrtdUser);
				fnaSrcOfincDets.setIncsrcCreatedDate(new Date());
				clientDB.saveSrcOfIncDetails(fnaSrcOfincDets, strFNAId);
			} else {

				fnaSrcOfincDets.setIncsrcModifiedBy(strCrtdUser);
				fnaSrcOfincDets.setIncsrcModifiedDate(new Date());

				fnaSrcOfincDets.setFnaSelfspouseDets(selFnaSelfSpouseDets);
				clientDB.updSrcOfIncDetails(fnaSrcOfincDets);
			}

		}

//			if(objMapping.containsKey(FipaConstant.CPF_DETS)){
//				
//				FnaCpfDets fnCpfDets    = new FnaCpfDets();			
//				fnCpfDets = (FnaCpfDets)objMapping.get(FipaConstant.CPF_DETS);
//				
//				String strCpfId = fnCpfDets.getTxtFldCpfId();
//				
//				if(FipaUtils.nullOrBlank(strCpfId)){
//					fnCpfDets.setTxtFldCpfCrtdBy(strCrtdUser);
//					fnCpfDets.setTxtFldCpfCrtdDate(new Date());
//				
//					clientDB.saveCpfDetails(fnCpfDets,strFNAId);
//					
//				}else{
//					
//					fnCpfDets.setTxtFldCpfModBy(strCrtdUser);
//					fnCpfDets.setTxtFldCpfModDate(new Date());
//					
//					
//					 fnCpfDets.setFnaSelfspouseDets(selFnaSelfSpouseDets);
//					clientDB.updCpfDetails(fnCpfDets);
//				}
//				
//			}

		if (objMapping.containsKey(FipaConstant.FNLBTY_DETS)) {

			FnaFinLiability fnaFinLbltyDets = new FnaFinLiability();
			fnaFinLbltyDets = (FnaFinLiability) objMapping.get(FipaConstant.FNLBTY_DETS);

			String strFinId = fnaFinLbltyDets.getLiabId();

			if (FipaUtils.nullOrBlank(strFinId)) {

				fnaFinLbltyDets.setLiabCreatedBy(strCrtdUser);
				fnaFinLbltyDets.setLiabCreatedDate(new Date());

				clientDB.saveFinLbltyDetails(fnaFinLbltyDets, strFNAId);
			} else {
				fnaFinLbltyDets.setLiabModifiedBy(strCrtdUser);
				fnaFinLbltyDets.setLiabModifiedDate(new Date());

				fnaFinLbltyDets.setFnaSelfspouseDets(selFnaSelfSpouseDets);
				clientDB.updFinLbltyDetails(fnaFinLbltyDets);
			}

		}

		if (objMapping.containsKey(FipaConstant.CURASS_DETS)) {

			FnaCurassDets fnaCurAssDets = new FnaCurassDets();
			fnaCurAssDets = (FnaCurassDets) objMapping.get(FipaConstant.CURASS_DETS);

			String strCurrAssId = fnaCurAssDets.getCaId();

			if (FipaUtils.nullOrBlank(strCurrAssId)) {
				fnaCurAssDets.setCaCreatedBy(strCrtdUser);
				fnaCurAssDets.setCaCreatedDate(new Date());

				clientDB.saveCurAssDetails(fnaCurAssDets, strFNAId);
			} else {
				fnaCurAssDets.setCaModifiedBy(strCrtdUser);
				fnaCurAssDets.setCaModifiedDate(new Date());

				fnaCurAssDets.setFnaSelfspouseDets(selFnaSelfSpouseDets);
				clientDB.updCurAssDetails(fnaCurAssDets);
			}

		}

		if (objMapping.containsKey(FipaConstant.RETPLN_DETS)) {

			FnaRetireplanDets fnaRetirePlnDets = new FnaRetireplanDets();
			fnaRetirePlnDets = (FnaRetireplanDets) objMapping.get(FipaConstant.RETPLN_DETS);

			String strRetId = fnaRetirePlnDets.getRetId();

			if (FipaUtils.nullOrBlank(strRetId)) {
				fnaRetirePlnDets.setRetCreatedBy(strCrtdUser);
				fnaRetirePlnDets.setRetCreatedDate(new Date());

				clientDB.saveRetirePlnDetails(fnaRetirePlnDets, strFNAId);
			} else {
				fnaRetirePlnDets.setRetModifiedBy(strCrtdUser);
				fnaRetirePlnDets.setRetModifiedDate(new Date());

				fnaRetirePlnDets.setFnaSelfspouseDets(selFnaSelfSpouseDets);
				clientDB.updRetirePlnDetails(fnaRetirePlnDets);
			}

		}
		Vector vectPropOwnDetails = getPropOwnDetails(request);
		clientDB.savePropOwndetails(vectPropOwnDetails, strFNAId);

		Vector vectVehOwnDetails = getVehOwnDetails(request);
		clientDB.saveVehOwndetails(vectVehOwnDetails, strFNAId);

		if (objMapping.containsKey(FipaConstant.INVST_DETS)) {

			FnaInvsetmentSummary fnaInvstDets = new FnaInvsetmentSummary();
			fnaInvstDets = (FnaInvsetmentSummary) objMapping.get(FipaConstant.INVST_DETS);
			String strInvId = fnaInvstDets.getInvstId();

			if (FipaUtils.nullOrBlank(strInvId)) {
				fnaInvstDets.setInvCreatedBy(strCrtdUser);
				fnaInvstDets.setInvCreatedDate(new Date());

				clientDB.saveInvstDetails(fnaInvstDets, strFNAId);
			} else {
				fnaInvstDets.setInvModifiedBy(strCrtdUser);
				fnaInvstDets.setInvModifiedDate(new Date());

				fnaInvstDets.setFnaSelfspouseDets(selFnaSelfSpouseDets);
				clientDB.updInvstDetails(fnaInvstDets);
			}
		}

		if (objMapping.containsKey(FipaConstant.CSHASS_DETS)) {

			FnaAssetCashdets fnaCashAssDets = new FnaAssetCashdets();
			fnaCashAssDets = (FnaAssetCashdets) objMapping.get(FipaConstant.CSHASS_DETS);
			String strCashId = fnaCashAssDets.getCasstId();

			if (FipaUtils.nullOrBlank(strCashId)) {

				fnaCashAssDets.setCasstCreatedBy(strCrtdUser);
				fnaCashAssDets.setCasstCreatedDate(new Date());

				clientDB.saveCashAssDetails(fnaCashAssDets, strFNAId);
			} else {
				fnaCashAssDets.setCasstModifiedBy(strCrtdUser);
				fnaCashAssDets.setCasstModifiedDate(new Date());

				fnaCashAssDets.setFnaSelfspouseDets(selFnaSelfSpouseDets);
				clientDB.updCashAssDetails(fnaCashAssDets);

			}
		}

		if (objMapping.containsKey(FipaConstant.OTHASS_DETS)) {

			FnaAssetOtherdets fnaOthAssDets = new FnaAssetOtherdets();
			fnaOthAssDets = (FnaAssetOtherdets) objMapping.get(FipaConstant.OTHASS_DETS);
			String strOthAsstId = fnaOthAssDets.getOthId();

			if (FipaUtils.nullOrBlank(strOthAsstId)) {
				fnaOthAssDets.setOthasstCreatedBy(strCrtdUser);
				fnaOthAssDets.setOthasstCreatedDate(new Date());

				clientDB.saveOthAssDetails(fnaOthAssDets, strFNAId);
			} else {
				fnaOthAssDets.setOthasstModifiedBy(strCrtdUser);
				fnaOthAssDets.setOthasstModifiedDate(new Date());

				fnaOthAssDets.setFnaSelfspouseDets(selFnaSelfSpouseDets);
				clientDB.updOthAssDetails(fnaOthAssDets);
			}

		}

//			 clientDB.saveLipInsurncedetails(vectLIPDetails,strFNAId);
		Vector vectIpInvstDetails = getIpInvtDetails(request);
		clientDB.saveIpInvstdetails(vectIpInvstDetails, strFNAId);

		if (objMapping.containsKey(FipaConstant.RSKPREF_DETS)) {

			FnaRiskprefDets fnaRskPrefDets = new FnaRiskprefDets();
			fnaRskPrefDets = (FnaRiskprefDets) objMapping.get(FipaConstant.RSKPREF_DETS);
			String strRiskId = fnaRskPrefDets.getRiskId();

			if (FipaUtils.nullOrBlank(strRiskId)) {
				fnaRskPrefDets.setCrCreatedBy(strCrtdUser);
				fnaRskPrefDets.setCrCreatedDate(new Date());

				clientDB.saveRskPrefDetails(fnaRskPrefDets, strFNAId);
			} else {
				fnaRskPrefDets.setCrModifiedBy(strCrtdUser);
				fnaRskPrefDets.setCrModifiedDate(new Date());

				fnaRskPrefDets.setFnaSelfspouseDets(selFnaSelfSpouseDets);
				clientDB.updRskPrefDetails(fnaRskPrefDets);

			}

		}

		if (objMapping.containsKey(FipaConstant.SANAL_DETS)) {

			FnaSummaryAnalysis fnaSmAnalysisDets = new FnaSummaryAnalysis();
			fnaSmAnalysisDets = (FnaSummaryAnalysis) objMapping.get(FipaConstant.SANAL_DETS);
			String strAnalyseId = fnaSmAnalysisDets.getSaId();

			if (FipaUtils.nullOrBlank(strAnalyseId)) {
				fnaSmAnalysisDets.setSaCreatedBy(strCrtdUser);
				fnaSmAnalysisDets.setSaCreatedDate(new Date());

				clientDB.saveSAnalDetails(fnaSmAnalysisDets, strFNAId);
			} else {
				fnaSmAnalysisDets.setSaModifiedBy(strCrtdUser);
				fnaSmAnalysisDets.setSaModifiedDate(new Date());

				fnaSmAnalysisDets.setFnaSelfspouseDets(selFnaSelfSpouseDets);
				clientDB.updSumAnlysDetails(fnaSmAnalysisDets);
			}
		}

//			 String strOthPerId = request.getParameter("txtFldOthPerId"); 
//			 if(FipaUtils.nullOrBlank(strOthPerId)){ 
//				 clientDB.saveOthPerDetails(vectOthpers,strFNAId);
//			 }else{ 
//				 clientDB.updOthPerDetails(vectOthpers,strFNAId); 
//			 }

		String strEstPlanId = request.getParameter("estId");
		Vector<List<FnaEstatePlan>> vectEstPlan = getEstPlanDetails(request, strFNAId);
		if (FipaUtils.nullOrBlank(strEstPlanId)) {
			clientDB.saveEstPlanDetails(vectEstPlan, strFNAId);
		} else {
			clientDB.updEstPlanDetails(vectEstPlan, strFNAId);
		}

//			 clientDB.saveRcmPrdDetails(vectRcmPrdDetails, strFNAId);
//			 
//			 clientDB.saveRcmPrdPlndetails(vectRcmPrdPlnDetails,strFNAId);
//			 clientDB.saveRcmPrdFunddetails(vectRcmPrdFundDetails,strFNAId);
//		
//			 
//			 clientDB.saveSwtPlndetails(vectSwtPlnDetails,strFNAId);
//			 clientDB.saveSwtFunddetails(vectSwtFundDetails,strFNAId);
		Vector vectCashOfBankDetails = getCashOfBankDetails(request);
		clientDB.saveCashAtBankdetails(vectCashOfBankDetails, strFNAId);

		Vector vectSRSDetails = getSRSDetails(request);
		clientDB.saveSRSDetails(vectSRSDetails, strFNAId);

		Vector vectCpfAddtnDedtnCtrb = getCPFAddtnDedtnDetails(request);
		clientDB.saveCADdetails(vectCpfAddtnDedtnCtrb, strFNAId);
//			 clientDB.saveLifeInsuranceDets(vectLifeInscDetails,strFNAId);
		Vector vectInputInvest = getInputInvest(request);
		clientDB.saveInvstdetails(vectInputInvest, strFNAId);

		Vector vectOthRetPlg = getOthRetPlg(request);
		clientDB.saveRdOthPaymenttails(vectOthRetPlg, strFNAId);

		Vector vectIncRetPlg = getIncRetPlg(request);
		clientDB.saveRdIncPaymenttails(vectIncRetPlg, strFNAId);

		Vector vectRetCpfLifedetails = getRetCpfLifeDetails(request);
		clientDB.saveRetCpfLifeDets(vectRetCpfLifedetails, strFNAId);

		Vector vectAutoAltrdetails = getAutoAlterDetails(request);
		clientDB.saveAutoAttrDets(vectAutoAltrdetails, strFNAId);

		Vector vectAttchDetails = uploadAttachments(request, document);
		attDB.saveCustAttDetails(vectAttchDetails, strFNAId);

		// Life Insurance Details
		if (objMapping.containsKey(FipaConstant.LIFEINSRCE_DETS)) {

			FnaLifeinsuranceDets fnaLifeInsurceDets = new FnaLifeinsuranceDets();
			fnaLifeInsurceDets = (FnaLifeinsuranceDets) objMapping.get(FipaConstant.LIFEINSRCE_DETS);
			String strLisId = request.getParameter("lipId");

			Date incpdate = FipaUtils.nullOrBlank(request.getParameter("lipIncepdate")) ? new Date()
					: FipaDateUtils.convertStringToDate(request.getParameter("lipIncepdate"));
			Date expirydate = FipaUtils.nullOrBlank(request.getParameter("lipExpdate")) ? new Date()
					: FipaDateUtils.convertStringToDate(request.getParameter("lipExpdate"));

			Date matdate = FipaUtils.nullOrBlank(request.getParameter("lipMaturityDate")) ? new Date()
					: FipaDateUtils.convertStringToDate(request.getParameter("lipMaturityDate"));
			fnaLifeInsurceDets.setLipMaturityDate(incpdate);
			fnaLifeInsurceDets.setLipIncepdate(expirydate);
			fnaLifeInsurceDets.setLipIncepdate(matdate);

			if (FipaUtils.nullOrBlank(strLisId)) {
				fnaLifeInsurceDets.setLipCreatedBy(strCrtdUser);
				fnaLifeInsurceDets.setLipCreatedDate(new Date());
				strLICId = clientDB.saveLifeInsrceDetails(fnaLifeInsurceDets, strFNAId);

			} else {
				fnaLifeInsurceDets.setLipModifiedBy(strCrtdUser);
				fnaLifeInsurceDets.setLipModifiedDate(new Date());

				fnaLifeInsurceDets.setFnaSelfspouseDets(selFnaSelfSpouseDets);
				clientDB.updLifeInsrceDetails(fnaLifeInsurceDets);

			}

		}

		// Life Insurance Coverage
//			 String strLisCovId = request.getParameter("coverId"); 
//			 if(FipaUtils.nullOrBlank(strLisCovId)){ 
//				 clientDB.saveLifeInsCoverageDetails(vectLifeInsCovPlan,strFNAId,strLICId);
//			 }else{ 
//			 Vector vectLifeInsCovPlan = getLifeInsCovrgeDetails(request);//DeathBenefit,CriticalIlns,Hospitality
//				 clientDB.saveLifeInsCoverageDetails(vectLifeInsCovPlan,strFNAId,strLICId);
//			 }

		Vector vectLifeInsCovPlan = getLifeInsCovrgeDetails(request, strFNAId);
		clientDB.saveLifeInsCoverageDetails(vectLifeInsCovPlan, strFNAId, strLICId);

		Vector vectliMvRetDetails = getliMvRetDetails(request);
		clientDB.saveRetPlgdetails(vectliMvRetDetails, strFNAId, strLICId);

		Vector vectliChildDets = getliChildDets(request);
		clientDB.saveEduPlgdetails(vectliChildDets, strFNAId, strLICId);

		Vector vectLiBenefits = getLiBenefitsDetails(request);
		clientDB.saveBenefdetails(vectLiBenefits, strFNAId, strLICId);

		Vector vectNomNamedetails = getLiNomNamesDetails(request);
		clientDB.saveNomineeNamedetails(vectNomNamedetails, strFNAId, strLICId);

		Vector vectliPlanAndProDetails = getliPlnProDetails(request);
		clientDB.savePlnProdetails(vectliPlanAndProDetails, strFNAId, strLICId);

		return strFNAId;
	}

	public void deleteClientDetails(HttpServletRequest request) {

//			Vector vectDeptDetails,Vector vectExpFdFlowDetails,Vector vectContPlnDetails,
//			Vector vectHlthInsDetails,Vector vectPropOwnDetails,Vector vectVehOwnDetails,
//			Vector vectLIPDetails,Vector vectIpInvstDetails,Vector vectSavingInvDetails, 
//			Vector vectChildDetails,Vector vectFinGoalsDetails
//			,Vector vectCpfMonthlyCtrb, Vector vectCpfTopUpCtrb, Vector vectCpfDedtnCtrb,
//			Vector vectAssetdetails,Vector vectOthArCrndetails,
//			Vector vectCashOfBankDetails,Vector vectCpfAddtnDedtnCtrb,Vector vectEstPlan, 
//			Vector vectInputInvest,Vector vectLifeInsCovPlan,Vector vectliMvRetDetails,Vector vectliChildDets,
//			Vector vectLiBenefits,Vector vectNomNamedetails,Vector vectliPlanAndProDetails,
//			Vector vectOthRetPlg,Vector vectIncRetPlg,Vector vectAttchDetails,
//			Vector vectRetCpfLifedetails,Vector vectSRSDetails,

		// TODO Auto-generated method stub
		ClientDB clientDB = new ClientDB();
		AttachmentDB attDB = new AttachmentDB();
		HttpSession session = request.getSession(false);

		Map<String, Object> objMapping = new HashMap();
		objMapping = FipaUtils.getRequestMapping(request);

		Map<String, String> sessMap = new HashMap<String, String>();
		sessMap = (HashMap<String, String>) session.getAttribute(FipaConstant.LOGGED_USER_INFO);
		String strCrtdUser = (String) sessMap.get(FipaConstant.LOGGED_USER_ID);

		String strFNAId = request.getParameter("fnaId");
		String strLICId = request.getParameter("lipId");

//			 if(objMapping.containsKey("APPTYPES_DETS")){
//				 FnaApptypes fnaApptypes   = new FnaApptypes();
//				 fnaApptypes = (FnaApptypes)objMapping.get("APPTYPES_DETS"); 
//				
//				 	String strApptypesId=fnaApptypes.getAppTypeid();
//				 	  
//				 
//				 if(FipaUtils.nullOrBlank(strApptypesId)){
//					  
//					 clientDB.delAppTypesDets(strApptypesId);  
//				 } 
//				
//			 }

//			 clientDB.delAppTypesDets(strFNAId); 
//			 
//			  
//			 clientDB.saveChilddetails(vectChildDetails,strFNAId);
//			 clientDB.saveFinGoalsdetails(vectFinGoalsDetails,strFNAId);
//				 
//		 
//			 clientDB.saveDepdetails(vectDeptDetails,strFNAId); 
////			 clientDB.saveExpFDFlwdetails(vectExpFdFlowDetails,strFNAId);
//			 
//			 
//			
//			 if(objMapping.containsKey(FipaConstant.ADVDECLR_DETS)){
//				 FnaAdvDeclare fnaAdvDclDets    = new FnaAdvDeclare();
//				 fnaAdvDclDets = (FnaAdvDeclare)objMapping.get(FipaConstant.ADVDECLR_DETS);
//				 String strAdvDclId=fnaAdvDclDets.getAdvDecId();
//				  
//				 
//				 if(!FipaUtils.nullOrBlank(strAdvDclId)){		
//					 
//					 FnaSelfspouseDets  selFnaSelfSpouseDets = new FnaSelfspouseDets();
//					 selFnaSelfSpouseDets.setFnaId(strFNAId);
//					 
//					 fnaAdvDclDets.setFnaSelfspouseDets(selFnaSelfSpouseDets);
//					 
//					 clientDB.deleteAdvDeclareDetails(fnaAdvDclDets);			 
//				 }	
//			 }
//			 
//			 
//			 clientDB.saveSAInvdetails(vectSavingInvDetails,strFNAId);
//			 clientDB.delCpfMtlyCtbDetails(request,strFNAId);
//			 clientDB.delCpfBalcCtbDetails(request,strFNAId);
////			 clientDB.saveCpfTopupsDetails(vectCpfTopUpCtrb,strFNAId);
////			 clientDB.saveCpfDedtDetails(vectCpfDedtnCtrb,strFNAId);
//			 
//			 
//			 if(objMapping.containsKey(FipaConstant.EXP_DETS)){
//				 
//				 FnaExpenditureDets fnaExpDets    = new FnaExpenditureDets();
//				 fnaExpDets = (FnaExpenditureDets)objMapping.get(FipaConstant.EXP_DETS);
//				 String strExpId=fnaExpDets.getExpdId();
//				  
//				 
//				 if(!FipaUtils.nullOrBlank(strExpId)){		
//					 
//					 FnaSelfspouseDets  selFnaSelfSpouseDets = new FnaSelfspouseDets();
//					 selFnaSelfSpouseDets.setFnaId(strFNAId);
//					 
//					 fnaExpDets.setFnaSelfspouseDets(selFnaSelfSpouseDets);
//					 
//					 clientDB.deleteExpenditureDetails(fnaExpDets);			 
//				 }				
//			}
//			 
//			 
//			 
//			 if(objMapping.containsKey(FipaConstant.CONTG_DETS)){
//				 
//			 		FnaContingencyDets fnaContgDets   = new FnaContingencyDets();
//			 		fnaContgDets = (FnaContingencyDets)objMapping.get(FipaConstant.CONTG_DETS);
//
//					 String strContgId = fnaContgDets.getConId();
//					 
//					 if(FipaUtils.nullOrBlank(strContgId)){
//						 
////						 fnaContgDets.set(strCrtdUser);
////					 		fnaContgDets.setTxtFldContCrtdDate(new Date());
//							
//					 		clientDB.delContgDetails(fnaContgDets);
//					 		
//					 } 
//			 		 
//					}
//			 
////			 if(objMapping.containsKey(FipaConstant.CONT_DETS)){
////				 
////				 FnaContingencyDets fnaContDets   = new FnaContingencyDets();
////				 fnaContDets = (FnaContingencyDets)objMapping.get(FipaConstant.CONT_DETS);
////				 
////				 String strContId = fnaContDets.getTxtFldContId(); 
////				 
////				 if(!FipaUtils.nullOrBlank(strContId)){		
////					 
////					 FnaSelfspouseDets  selFnaSelfSpouseDets = new FnaSelfspouseDets();
////					 selFnaSelfSpouseDets.setFnaId(strFNAId);
////					 
////					 fnaContDets.setFnaSelfspouseDets(selFnaSelfSpouseDets);
////					 
////					 clientDB.delContingencyDetails(fnaContDets);
////				 }
////				
////			}
////			 
////			 clientDB.saveContgPlndetails(vectContPlnDetails,strFNAId);
//			 clientDB.saveHIdetails(vectHlthInsDetails,strFNAId);		
//			
////			 if(objMapping.containsKey(FipaConstant.PERS_DETS)){
////				  
////				 
////				 FnaPersprio fnaPersDets    = new FnaPersprio();
////				 fnaPersDets = (FnaPersprio)objMapping.get(FipaConstant.PERS_DETS);
////				 
////				 String strPersId = fnaPersDets.getTxtFldPersPrioId(); 
////				 
////				 if(!FipaUtils.nullOrBlank(strPersId)){
////					 
////					 FnaSelfspouseDets  selFnaSelfSpouseDets = new FnaSelfspouseDets();
////					 selFnaSelfSpouseDets.setFnaId(strFNAId);
////					 
////					 fnaPersDets.setFnaSelfspouseDets(selFnaSelfSpouseDets);
////					 
////					 clientDB.delPersPrioDetails(fnaPersDets);
////				 }
////			
////			}
//
//			if(objMapping.containsKey(FipaConstant.SRCOFINC_DETS)){
//				 
//				 FnaSrcofincome fnaSrcOfincDets    = new FnaSrcofincome();
//				 fnaSrcOfincDets = (FnaSrcofincome)objMapping.get(FipaConstant.SRCOFINC_DETS);
//				 
//				 String strSrcId = fnaSrcOfincDets.getIncsrcId(); 
//				 
//				 if(!FipaUtils.nullObj(strSrcId)){
//				
//					
//					 FnaSelfspouseDets  selFnaSelfSpouseDets = new FnaSelfspouseDets();
//					 selFnaSelfSpouseDets.setFnaId(strFNAId);
//					 
//					 fnaSrcOfincDets.setFnaSelfspouseDets(selFnaSelfSpouseDets);
//					 clientDB.delSrcOfIncDetails(fnaSrcOfincDets);
//				 }
//				
//			}
//		
////			if(objMapping.containsKey(FipaConstant.CPF_DETS)){
////				
////				FnaCpfDets fnCpfDets    = new FnaCpfDets();			
////				fnCpfDets = (FnaCpfDets)objMapping.get(FipaConstant.CPF_DETS);
////				
////				String strCpfId = fnCpfDets.getTxtFldCpfId(); 
////				
////				if(!FipaUtils.nullOrBlank(strCpfId)){
////					
////					 FnaSelfspouseDets  selFnaSelfSpouseDets = new FnaSelfspouseDets();
////					 selFnaSelfSpouseDets.setFnaId(strFNAId);
////					
////					 fnCpfDets.setFnaSelfspouseDets(selFnaSelfSpouseDets);
////					clientDB.delCpfDetails(fnCpfDets);
////				}
////				
////			}
//			
//			if(objMapping.containsKey(FipaConstant.FNLBTY_DETS)){
//				
//				FnaFinLiability fnaFinLbltyDets    = new FnaFinLiability();
//				fnaFinLbltyDets = (FnaFinLiability)objMapping.get(FipaConstant.FNLBTY_DETS);
//				
//				String strFinId = fnaFinLbltyDets.getLiabId(); 
//				
//				if(!FipaUtils.nullOrBlank(strFinId)){
//				
//					 FnaSelfspouseDets  selFnaSelfSpouseDets = new FnaSelfspouseDets();
//					 selFnaSelfSpouseDets.setFnaId(strFNAId);
//					 
//					 fnaFinLbltyDets.setFnaSelfspouseDets(selFnaSelfSpouseDets);
//					 clientDB.delFinLbltyDetails(fnaFinLbltyDets);
//				}
//				
//			}
//			
//			if(objMapping.containsKey(FipaConstant.CURASS_DETS)){		
//				
//				FnaCurassDets fnaCurAssDets    = new FnaCurassDets();
//				fnaCurAssDets = (FnaCurassDets)objMapping.get(FipaConstant.CURASS_DETS);
//				
//				String strCurrAssId = fnaCurAssDets.getCaId(); 
//				if(!FipaUtils.nullOrBlank(strCurrAssId)){					
//				
//					 FnaSelfspouseDets  selFnaSelfSpouseDets = new FnaSelfspouseDets();
//					 selFnaSelfSpouseDets.setFnaId(strFNAId);
//					 
//					 fnaCurAssDets.setFnaSelfspouseDets(selFnaSelfSpouseDets);
//					clientDB.delCurAssDetails(fnaCurAssDets);
//				}
//				
//				
//				
//			}
//			
//			 clientDB.saveRdOthPaymenttails(vectOthRetPlg,strFNAId);
//			 clientDB.saveRdIncPaymenttails(vectIncRetPlg,strFNAId);
//			 
//			
//
//			 clientDB.saveAssetsDetails(vectAssetdetails,strFNAId);
//			 clientDB.saveOthArOfCnDetails(vectOthArCrndetails,strFNAId);
////			 clientDB.saveReasonsDetails(vectReasonsdetails,strFNAId);
//			
//			
//			if(objMapping.containsKey(FipaConstant.RETPLN_DETS)){
//				
//				FnaRetireplanDets fnaRetirePlnDets    = new FnaRetireplanDets();
//				fnaRetirePlnDets = (FnaRetireplanDets)objMapping.get(FipaConstant.RETPLN_DETS);
//				
//				String strRetId = fnaRetirePlnDets.getRetId(); 
//				
//				if(!FipaUtils.nullOrBlank(strRetId)){
//					
//					 FnaSelfspouseDets  selFnaSelfSpouseDets = new FnaSelfspouseDets();
//					 selFnaSelfSpouseDets.setFnaId(strFNAId);
//					
//					 fnaRetirePlnDets.setFnaSelfspouseDets(selFnaSelfSpouseDets);
//					clientDB.delRetirePlnDetails(fnaRetirePlnDets);
//				}
//				
//			}
//			
//			 clientDB.savePropOwndetails(vectPropOwnDetails,strFNAId);
//			 clientDB.saveVehOwndetails(vectVehOwnDetails,strFNAId);
//			
//			
//			if(objMapping.containsKey(FipaConstant.INVST_DETS)){
//				
//				FnaInvsetmentSummary fnaInvstDets    = new FnaInvsetmentSummary();
//				fnaInvstDets = (FnaInvsetmentSummary)objMapping.get(FipaConstant.INVST_DETS);
//				String strInvId = fnaInvstDets.getInvstId(); 
//				
//				if(!FipaUtils.nullOrBlank(strInvId)){
//					
//					
//					 FnaSelfspouseDets  selFnaSelfSpouseDets = new FnaSelfspouseDets();
//					 selFnaSelfSpouseDets.setFnaId(strFNAId);
//					 
//					 fnaInvstDets.setFnaSelfspouseDets(selFnaSelfSpouseDets);
//					clientDB.delInvstDetails(fnaInvstDets);
//				}
//			}
//			
//			if(objMapping.containsKey(FipaConstant.CSHASS_DETS)){
//				
//				FnaAssetCashdets fnaCashAssDets  = new FnaAssetCashdets();
//				fnaCashAssDets = (FnaAssetCashdets)objMapping.get(FipaConstant.CSHASS_DETS);
//				String strCashId = fnaCashAssDets.getCasstId(); 
//				
//				if(!FipaUtils.nullOrBlank(strCashId)){
//				
//					 FnaSelfspouseDets  selFnaSelfSpouseDets = new FnaSelfspouseDets();
//					 selFnaSelfSpouseDets.setFnaId(strFNAId);
//					
//				
//					 fnaCashAssDets.setFnaSelfspouseDets(selFnaSelfSpouseDets);
//					clientDB.delCashAssDetails(fnaCashAssDets);
//					
//				}
//			}
//			
//			if(objMapping.containsKey(FipaConstant.OTHASS_DETS)){
//				
//				FnaAssetOtherdets fnaOthAssDets    = new FnaAssetOtherdets();
//				fnaOthAssDets = (FnaAssetOtherdets)objMapping.get(FipaConstant.OTHASS_DETS);
//				String strOthAsstId= fnaOthAssDets.getOthId(); 
//				if(!FipaUtils.nullOrBlank(strOthAsstId)){
//					
//					 FnaSelfspouseDets  selFnaSelfSpouseDets = new FnaSelfspouseDets();
//					 selFnaSelfSpouseDets.setFnaId(strFNAId);
//					 
//					 fnaOthAssDets.setFnaSelfspouseDets(selFnaSelfSpouseDets);
//					clientDB.delOthAssDetails(fnaOthAssDets);
//				}
//				
//			}
//			
////			 clientDB.saveLipInsurncedetails(vectLIPDetails,strFNAId);
//			 clientDB.saveIpInvstdetails(vectIpInvstDetails,strFNAId);
//			
//			 
//			 if(objMapping.containsKey(FipaConstant.RSKPREF_DETS)){
//					
//				 FnaRiskprefDets fnaRskPrefDets    = new FnaRiskprefDets();
//				 fnaRskPrefDets = (FnaRiskprefDets)objMapping.get(FipaConstant.RSKPREF_DETS);
//				 String strRiskId=fnaRskPrefDets.getRiskId();
//					 
//				 
//				 if(!FipaUtils.nullOrBlank(strRiskId)){
//					 
//					 FnaSelfspouseDets  selFnaSelfSpouseDets = new FnaSelfspouseDets();
//					 selFnaSelfSpouseDets.setFnaId(strFNAId);
//					 
//					 fnaRskPrefDets.setFnaSelfspouseDets(selFnaSelfSpouseDets);
//					 clientDB.delRskPrefDetails(fnaRskPrefDets);
//					
//				 }
//					
//			}
//			 
//			 if(objMapping.containsKey(FipaConstant.SANAL_DETS)){
//					
//				 FnaSummaryAnalysis fnaSmAnalysisDets    = new FnaSummaryAnalysis();
//				 fnaSmAnalysisDets = (FnaSummaryAnalysis)objMapping.get(FipaConstant.SANAL_DETS);
//				 String strAnalyseId = fnaSmAnalysisDets.getSaId();
// 				
//				 if(!FipaUtils.nullOrBlank(strAnalyseId)){
//					 FnaSelfspouseDets  selFnaSelfSpouseDets = new FnaSelfspouseDets();
//					 selFnaSelfSpouseDets.setFnaId(strFNAId);
//					 
//					 fnaSmAnalysisDets.setFnaSelfspouseDets(selFnaSelfSpouseDets);
//					 clientDB.delSumAnalysDetails(fnaSmAnalysisDets);
//				 }
//			}
//			 
//			 
//	
//			 
//			 
////			 clientDB.saveRcmPrdDetails(vectRcmPrdDetails, strFNAId);
////			 
////			 clientDB.saveRcmPrdPlndetails(vectRcmPrdPlnDetails,strFNAId);
////			 clientDB.saveRcmPrdFunddetails(vectRcmPrdFundDetails,strFNAId);
//			
//			 clientDB.saveRetCpfLifeDets(vectRetCpfLifedetails,strFNAId);
//			 
////			 clientDB.saveSwtPlndetails(vectSwtPlnDetails,strFNAId);
////			 clientDB.saveSwtFunddetails(vectSwtFundDetails,strFNAId);
//			 clientDB.saveCashAtBankdetails(vectCashOfBankDetails,strFNAId);
//			 clientDB.saveSRSDetails(vectSRSDetails,strFNAId);
//			 clientDB.saveCADdetails(vectCpfAddtnDedtnCtrb,strFNAId); 
////			 clientDB.saveLifeInsuranceDets(vectLifeInscDetails,strFNAId);
//			 attDB.saveCustAttDetails(vectAttchDetails,strFNAId);
//
////			  clientDB.delOthPerDetails(vectOthpers,strFNAId);
//			 
//			  clientDB.delEstPlnDetails(vectEstPlan,strFNAId);
//			  
//			  clientDB.saveInvstdetails(vectInputInvest,strFNAId);
//			  
//			  //Plan Product
//			  clientDB.savePlnProdetails(vectliPlanAndProDetails,strFNAId,strLICId);
//			//Life Insurance Nominees Name 
//			  clientDB.saveNomineeNamedetails(vectNomNamedetails,strFNAId,strLICId);
//			//Life Insurance Benefits 
//			  clientDB.saveBenefdetails(vectLiBenefits,strFNAId,strLICId);
//			//Life Insurance Retirement Plg Details  
//			  clientDB.saveRetPlgdetails(vectliMvRetDetails,strFNAId,strLICId);
//			//Life Insurance Education Plg Details  
//			  clientDB.saveEduPlgdetails(vectliChildDets,strFNAId,strLICId); 
//			//Life Insurance Coverage Details 
//			  clientDB.delLifeInsCoverageDetails(vectLifeInsCovPlan,strFNAId,strLICId);
//			  
//			  
//			//Life Insurance Details  
//			  if(objMapping.containsKey(FipaConstant.LIFEINSRCE_DETS)){
//					
//				  FnaLifeinsuranceDets fnaLifeInsurceDets    = new FnaLifeinsuranceDets();
//				  fnaLifeInsurceDets = (FnaLifeinsuranceDets)objMapping.get(FipaConstant.LIFEINSRCE_DETS);
//					
//				  strLICId = fnaLifeInsurceDets.getLipId(); 
//					 
//					 
//					 if(!FipaUtils.nullOrBlank(strLICId)){
//						 FnaSelfspouseDets  selFnaSelfSpouseDets = new FnaSelfspouseDets();
//						 selFnaSelfSpouseDets.setFnaId(strFNAId);
//						 
//						 fnaLifeInsurceDets.setFnaSelfspouseDets(selFnaSelfSpouseDets);
//						 clientDB.delLifeInsurceDetails(fnaLifeInsurceDets);
//					 }
//			  	}
//			  
//
//			
//			  
//			  if(objMapping.containsKey(FipaConstant.SLFSPS_DETS)){ 
//				 
//			 
//				 FnaSelfspouseDets selfspsDets = (FnaSelfspouseDets)objMapping.get(FipaConstant.SLFSPS_DETS);
//				 
//				 strFNAId = selfspsDets.getFnaId(); 
//				 
//				 String strAdvId = FipaUtils.getParamValue(request,"advstfId");
//				 String strAdvMgrId = FipaUtils.getParamValue(request, "mgrId");	
//  
//				 selfspsDets.setAdvstfId(strAdvId);
//					 
//				 selfspsDets.setMgrId(strAdvMgrId);
//				  
//				 
//				 clientDB.deleteClientDetails(selfspsDets);
//				 
//			 }

	}

	public List clientSearch(DBInterface dao, DBInterfaceFpms fpmsdao, String... strBufQryParam) {
		ClientDB db = new ClientDB();
		return db.clientSearch(dao, fpmsdao, strBufQryParam);
	}

	public List clientNRICSearch(DBInterface dao, String strBufQryParam) {
		ClientDB db = new ClientDB();
		return db.clientNRICSearch(dao, strBufQryParam);
	}

	public List clntLifeInsSearch(DBInterface dao, String strBufQryParam) {
		ClientDB db = new ClientDB();
		return db.clntLifeInsSearch(dao, strBufQryParam);
	}

	public List clntLifeInsList(DBInterface dao, String strBufQryParam) {
		ClientDB db = new ClientDB();
		return db.clntLifeInsList(dao, strBufQryParam);
	}

	
	
	/*
	 * public List clntLifeInsCoverage(DBInterface dao, String strBufQryParam) {
	 * ClientDB db = new ClientDB(); return db.clntLifeInsList(dao, strBufQryParam);
	 * }
	 */
	 
	 
	
	/*
	 * public List clntLifeInsCoverage(DBInterfaceImpl dao, String... params) {
	 * ClientDB db = new ClientDB(); return db.openClntLifeInsCovList(dao, params);
	 * }
	 */
	
	public List clntLifeInsCoverage(String strFnaId) {
		ClientDB db = new ClientDB();
		return db.openClntLifeInsCovList(strFnaId);
	}
	public List clntLifeInsTpdCoverage(String strFnaId) {
		ClientDB db = new ClientDB();
		return db.openClntLifeInsTpdCovList(strFnaId);
	}
	public List clntLifeInsEarlyCoverage(String strFnaId) {
		ClientDB db = new ClientDB();
		return db.openClntLifeInsEarlyCovList(strFnaId);
	}
	public List clntLifeInsAdvCoverage(String strFnaId) {
		ClientDB db = new ClientDB();
		return db.openClntLifeInsAdvCovList(strFnaId);
	}
	public List getCoverageList(String strFnaId) {
		ClientDB db = new ClientDB();
		return db.getCoverageList(strFnaId);
	}

	public List clntLifeCovSearch(DBInterface dao, String strBufQryParam) {
		ClientDB db = new ClientDB();
		return db.clntLifeCovSearch(dao, strBufQryParam);
	}

	public List clntLifePlanDetsSearch(DBInterface dao, String strBufQryParam) {
		ClientDB db = new ClientDB();
		return db.clntLifePlanDetsSearch(dao, strBufQryParam);
	}

	public List clntLifeBenfSearch(DBInterface dao, String strBufQryParam) {
		ClientDB db = new ClientDB();
		return db.clntLifeBenfSearch(dao, strBufQryParam);
	}

	public List clntLifeChldEduSearch(DBInterface dao, String strBufQryParam) {
		ClientDB db = new ClientDB();
		return db.clntLifeChldEduSearch(dao, strBufQryParam);
	}

	public List clntLifeMVSearch(DBInterface dao, String strBufQryParam) {
		ClientDB db = new ClientDB();
		return db.clntLifeMVSearch(dao, strBufQryParam);
	}

	public List clntLifeNomSearch(DBInterface dao, String strBufQryParam) {
		ClientDB db = new ClientDB();
		return db.clntLifeNomSearch(dao, strBufQryParam);
	}

	public List openClientProfileList(DBInterfaceImpl dao, String params) {
		ClientDB db = new ClientDB();
		return db.openClientProfileList(dao, params);
	}

	public List openClientProfile(DBInterfaceImpl dao, String... params) {
		ClientDB db = new ClientDB();
		return db.openClientProfile(dao, params);
	}

	public List openClntProfAppTypes(DBInterfaceImpl dao, String... params) {

		ClientDB db = new ClientDB();
		return db.openAppTypes(dao, params);
	}

	public List openClntProfAnalyTypes(DBInterfaceImpl dao, String... params) {

		ClientDB db = new ClientDB();
		return db.openClntProfAnalyTypes(dao, params);
	}

	public List openAdvDclProfile(DBInterfaceImpl dao, String... params) {

		ClientDB db = new ClientDB();
		return db.openAdvDeclare(dao, params);
	}

	public List openExpProfile(DBInterfaceImpl dao, String... params) {

		ClientDB db = new ClientDB();
		return db.openExpenditure(dao, params);
	}

	public List openClntContgProfile(DBInterfaceImpl dao, String... params) {
		// TODO Auto-generated method stub
		ClientDB db = new ClientDB();
		return db.openContg(dao, params);
	}

//	 public List openContProfile(DBInterfaceImpl dao, String ... params) {
//			// TODO Auto-generated method stub
//		 ClientDB db = new ClientDB();		 
//		 return db.openContingency(dao, params);
//	}
	public List openPerpProfile(DBInterfaceImpl dao, String... params) {
		// TODO Auto-generated method stub
		ClientDB db = new ClientDB();
		return db.openPerprio(dao, params);
	}

	public List openSrcIncProfile(DBInterfaceImpl dao, String... params) {
		// TODO Auto-generated method stub
		ClientDB db = new ClientDB();
		return db.openSrcOfInc(dao, params);
	}

//		public List openCpfProfile(DBInterfaceImpl dao, String ... params) {
//			// TODO Auto-generated method stub
//			ClientDB db = new ClientDB();		 
//			 return db.openCpf(dao, params);
//		}
	public List openFinlbProfile(DBInterfaceImpl dao, String... params) {
		// TODO Auto-generated method stub
		ClientDB db = new ClientDB();
		return db.openFinLblty(dao, params);
	}

	public List openCrtAssProfile(DBInterfaceImpl dao, String... params) {
		// TODO Auto-generated method stub
		ClientDB db = new ClientDB();
		return db.openCurAss(dao, params);
	}

	public List openRetProfile(DBInterfaceImpl dao, String... params) {
		// TODO Auto-generated method stub
		ClientDB db = new ClientDB();
		return db.openRetirepln(dao, params);
	}

	public List openInvProfile(DBInterfaceImpl dao, String... params) {
		// TODO Auto-generated method stub
		ClientDB db = new ClientDB();
		return db.openInvst(dao, params);
	}

	public List openCasProfile(DBInterfaceImpl dao, String... params) {
		// TODO Auto-generated method stub
		ClientDB db = new ClientDB();
		return db.openCshAss(dao, params);
	}

	public List openOthCAProfile(DBInterfaceImpl dao, String... params) {
		// TODO Auto-generated method stub
		ClientDB db = new ClientDB();
		return db.openOthAss(dao, params);
	}

	public List openRskPrefProfile(DBInterfaceImpl dao, String... params) {
		// TODO Auto-generated method stub
		ClientDB db = new ClientDB();
		return db.openRskPref(dao, params);
	}

	public List openSumAnlProfile(DBInterfaceImpl dao, String... params) {
		// TODO Auto-generated method stub
		ClientDB db = new ClientDB();
		return db.openSumAnl(dao, params);
	}

	public List openCdAhocProfile(DBInterfaceImpl dao, String... params) {
		// TODO Auto-generated method stub
		ClientDB db = new ClientDB();
		return db.openCdAdhoc(dao, params);
	}

	public List openLifeInsuranceProfile(DBInterfaceImpl dao, String... params) {
		// TODO Auto-generated method stub
		ClientDB db = new ClientDB();
		return db.openLifeInsuranceProfile(dao, params);
	}

//		public List openOthPerProfile(DBInterfaceImpl dao,String ... params) {
//			// TODO Auto-generated method stub
//			ClientDB db = new ClientDB();		 
//			 return db.openOthPer(dao, params);
//		}
//		

	public List openEstPlanProfile(DBInterfaceImpl dao, String... params) {
		// TODO Auto-generated method stub
		ClientDB db = new ClientDB();
		return db.openEstPlan(dao, params);
	}

	public List openLifeInsCoveProfile(DBInterfaceImpl dao, String... params) {
		// TODO Auto-generated method stub
		ClientDB db = new ClientDB();
		return db.openLifeInsCoveProfile(dao, params);
	}

	public List openClntProfChild(DBInterfaceImpl dao, String... params) {
		ClientDB db = new ClientDB();
		return db.openClntProfChild(dao, params);
	}

	public List openClntProfRetCpfLife(DBInterfaceImpl dao, String... params) {
		ClientDB db = new ClientDB();
		return db.openClntProfRetCpfLife(dao, params);
	}

	public List openClntProfFinGoals(DBInterfaceImpl dao, String... params) {
		ClientDB db = new ClientDB();
		return db.openClntProfFinGoals(dao, params);
	}

	public List openClntProfDepnt(DBInterfaceImpl dao, String... params) {
		ClientDB db = new ClientDB();
		return db.openClntProfDepnt(dao, params);
	}

	public List openClntProfOtherAsset(DBInterfaceImpl dao, String... params) {
		ClientDB db = new ClientDB();
		return db.openClntProfOtherAsset(dao, params);
	}

	public List openClntProfSAInvst(DBInterfaceImpl dao, String... params) {
		ClientDB db = new ClientDB();
		return db.openClntProfSAInvt(dao, params);
	}
//	 public List openClntProfFDFlw(DBInterfaceImpl dao, String ... params) {
//			// TODO Auto-generated method stub
//		 ClientDB db = new ClientDB();		 
//		 return db.openClntProfFDFlw(dao, params);
//		}
//		public List openClntProfCtgDep(DBInterfaceImpl dao, String ... params) {
//			// TODO Auto-generated method stub
//			ClientDB db = new ClientDB();		 
//			 return db.openClntProfCtgDep(dao, params);
//		}

	public List openClntProfAssets(DBInterfaceImpl dao, String... params) {
		// TODO Auto-generated method stub
		ClientDB db = new ClientDB();
		return db.openClntProfAssets(dao, params);
	}

	public List openClntProfRdIncomeAss(DBInterfaceImpl dao, String... params) {
		// TODO Auto-generated method stub
		ClientDB db = new ClientDB();
		return db.openClntProfRdIncomeAss(dao, params);
	}

	public List openClntProfArOfConcern(DBInterfaceImpl dao, String... params) {
		// TODO Auto-generated method stub
		ClientDB db = new ClientDB();
		return db.openClntProfArOfConcern(dao, params);
	}

	public List openClntProfRecmReasn(DBInterfaceImpl dao, String... params) {
		// TODO Auto-generated method stub
		ClientDB db = new ClientDB();
		return db.openClntProfRecmReasn(dao, params);
	}

//		 public List openClntProfFinGlsPrio(DBInterfaceImpl dao, String ... params) {
//			// TODO Auto-generated method stub
//			ClientDB db = new ClientDB();		 
//			 return db.openClntProfFinGlsPrio(dao, params);
//		}

	public List openClntProfCPFBalance(DBInterfaceImpl dao, String... params) {
		ClientDB db = new ClientDB();
		return db.openClntProfCPFBalance(dao, params);
	}

	public List openClntProfCpfMCtb(DBInterfaceImpl dao, String... params) {
		// TODO Auto-generated method stub
		ClientDB db = new ClientDB();
		return db.openClntProfCpfMCtb(dao, params);
	}
//		public List openClntProfCpfTp(DBInterfaceImpl dao, String ... params) {
//			// TODO Auto-generated method stub
//			ClientDB db = new ClientDB();		 
//			 return db.openClntProfCpfTp(dao, params);
//		}

//		public List openClntProfCpfDt(DBInterfaceImpl dao, String ... params) {
//			// TODO Auto-generated method stub
//			ClientDB db = new ClientDB();		 
//			 return db.openClntProfCpfDt(dao, params);
//		}
//		
	public List openClntProfCAD(DBInterfaceImpl dao, String... params) {
		// TODO Auto-generated method stub
		ClientDB db = new ClientDB();
		return db.openClntProfCAD(dao, params);
	}

	public List openClntProfHI(DBInterfaceImpl dao, String... params) {
		// TODO Auto-generated method stub
		ClientDB db = new ClientDB();
		return db.openClntProfHI(dao, params);
	}

	public List openClntProfPrpOwn(DBInterfaceImpl dao, String... params) {
		// TODO Auto-generated method stub
		ClientDB db = new ClientDB();
		return db.openClntProfPrpOwn(dao, params);
	}

	public List openClntProfVehOwn(DBInterfaceImpl dao, String... params) {
		// TODO Auto-generated method stub
		ClientDB db = new ClientDB();
		return db.openClntProfVehOwn(dao, params);
	}

	public List openAutoAlteration(DBInterfaceImpl dao, String strFNAId) {
		// TODO Auto-generated method stub
		ClientDB db = new ClientDB();
		return db.openAutoAlteration(dao, strFNAId);
	}

	public List openClntAttachments(DBInterfaceImpl dao, String... params) {
		// TODO Auto-generated method stub
		ClientDB db = new ClientDB();
		return db.openClntAttachments(dao, params);
	}

//		public List openClntProfLIP(DBInterfaceImpl dao, String ... params) {
//			// TODO Auto-generated method stub
//			ClientDB db = new ClientDB();		 
//			 return db.openClntProfLIP(dao, params);
//		}

	public List openClntProfIPINV(DBInterfaceImpl dao, String... params) {
		// TODO Auto-generated method stub
		ClientDB db = new ClientDB();
		return db.openClntProfIPINV(dao, params);
	}

	public List openClntProfRcmPrt(DBInterfaceImpl dao, String... params) {
		// TODO Auto-generated method stub
		ClientDB db = new ClientDB();
		return db.openClntProfRcmPrd(dao, params);
	}

	public List openClntProfRcmPln(DBInterfaceImpl dao, String... params) {
		// TODO Auto-generated method stub
		ClientDB db = new ClientDB();
		return db.openClntProfRPln(dao, params);
	}

	public List openClntProfRcmFd(DBInterfaceImpl dao, String... params) {
		// TODO Auto-generated method stub
		ClientDB db = new ClientDB();
		return db.openClntProfRFd(dao, params);
	}

	public List openClntProfSwtPln(DBInterfaceImpl dao, String... params) {
		// TODO Auto-generated method stub
		ClientDB db = new ClientDB();
		return db.openClntProfSPln(dao, params);
	}

	public List openClntProfSwtFd(DBInterfaceImpl dao, String... params) {
		// TODO Auto-generated method stub
		ClientDB db = new ClientDB();
		return db.openClntProfSFd(dao, params);
	}

	public List openClntProfCashAtBank(DBInterfaceImpl dao, String... params) {
		// TODO Auto-generated method stub
		ClientDB db = new ClientDB();
		return db.openClntProfCashAtBank(dao, params);
	}

	public List openClntSRSDetsList(DBInterfaceImpl dao, String... params) {
		// TODO Auto-generated method stub
		ClientDB db = new ClientDB();
		return db.openClntSRSDetsList(dao, params);
	}

	public List openRdOtherIncome(DBInterfaceImpl dao, String... params) {
		// TODO Auto-generated method stub
		ClientDB db = new ClientDB();
		return db.openRdOtherIncome(dao, params);
	}

	public List openInputInvestment(DBInterfaceImpl dao, String... params) {
		// TODO Auto-generated method stub
		ClientDB db = new ClientDB();
		return db.openInputInvestment(dao, params);
	}

//	 public List openClntProfLISDets(DBInterfaceImpl dao, String ... params) {
//			// TODO Auto-generated method stub
//			ClientDB db = new ClientDB();		 
//			 return db.openClntProfLISDets(dao, params);
//	 } 

	public List openClntProfLIRetPlgDets(DBInterfaceImpl dao, String... params) {
		// TODO Auto-generated method stub
		ClientDB db = new ClientDB();
		return db.openClntProfLIRetPlgDets(dao, params);
	}

	public List openClntProfLIBenefitsDets(DBInterfaceImpl dao, String... params) {
		// TODO Auto-generated method stub
		ClientDB db = new ClientDB();
		return db.openClntProfLIBenefitsDets(dao, params);
	}

	public List openClntProfLINomNamesDets(DBInterfaceImpl dao, String... params) {
		// TODO Auto-generated method stub
		ClientDB db = new ClientDB();
		return db.openClntProfLINomNamesDets(dao, params);
	}

	public List openClntProfLIEduPlgDets(DBInterfaceImpl dao, String... params) {
		// TODO Auto-generated method stub
		ClientDB db = new ClientDB();
		return db.openClntProfLIEduPlgDets(dao, params);
	}

	public void updCustId(DBInterfaceImpl dao, String strCustId, String strNric) {
		// TODO Auto-generated method stub
		ClientDB clientDB = new ClientDB();
		clientDB.updCustId(dao, strCustId, strNric);
	}

	public List cpfPayoutIncomeSearch(DBInterfaceImpl dao, String strRetAge, String strRetPlanCode,
			String strPlegedvalue, String strTopRAErsvalue) {
		// TODO Auto-generated method stub
		ClientDB db = new ClientDB();
		return db.cpfPayoutIncomeSearch(dao, strRetAge, strRetPlanCode, strPlegedvalue, strTopRAErsvalue);

	}

	public List getCPFContribution(DBInterface dao, String strDOB, String strMonthlywage) {
		ClientDB db = new ClientDB();
		return db.getCPFContribution(dao, strDOB, strMonthlywage);
	}

	public List searchPremAmtDetails(DBInterfaceImpl dto, DBInterfaceFpmsImpl fpmsdto, String strFNAId,
			String strClientAdvId, String strCustId) {
		ClientDB clientDB = new ClientDB();
		return clientDB.searchPremAmtDetails(dto, fpmsdto, strFNAId, strClientAdvId, strCustId);
	}

	public Vector getChildDetails(HttpServletRequest request) {

		Vector vectChildDetails = new Vector();
		List insChildList = new ArrayList();
		List updChildList = new ArrayList();
		List delChildList = new ArrayList();
		List updChildListAS = new ArrayList();

		HttpSession session = request.getSession(false);
		Map<String, String> sessMap = new HashMap<String, String>();
		sessMap = (HashMap<String, String>) session.getAttribute(FipaConstant.LOGGED_USER_INFO);

		try {

			String[] strArrChildMode = FipaUtils.getParamArrValue(request, "txtFldChildMode");
			String[] strArrChldId = FipaUtils.getParamArrValue(request, "txtFldFnaChldId");
			String[] strArrChldName = FipaUtils.getParamArrValue(request, "txtFldChldName");
			String[] strArrChldRel = FipaUtils.getParamArrValue(request, "txtFldChldRel");
			String[] strArrChldDob = FipaUtils.getParamArrValue(request, "txtFldChldDob");
			String[] strArrChldAge = FipaUtils.getParamArrValue(request, "txtFldChldAge");
			String[] strArrChldGender = FipaUtils.getParamArrValue(request, "txtFldChldGender");
			String[] strArrChldYrs2ter = FipaUtils.getParamArrValue(request, "txtFldChldYrs2ter");
			String[] strArrChldYrsofEdu = FipaUtils.getParamArrValue(request, "txtFldChldYrsofEdu");
			String[] strArrChldPerAnnEduCost = FipaUtils.getParamArrValue(request, "txtFldChldPerAnnEduCost");
			String[] strArrChldAvailEdnFund = FipaUtils.getParamArrValue(request, "txtFldChldAvailEdnFund");
			String[] strArrChldRemrks = FipaUtils.getParamArrValue(request, "txtFldChldRemrks");
			String[] strArrChldCrtdBy = FipaUtils.getParamArrValue(request, "txtFldChldCrtdBy");
			String[] strArrChldCrtdDate = FipaUtils.getParamArrValue(request, "txtFldChldCrtdDate");

			String strFNAId = FipaUtils.getParamValue(request, "fnaId");
			String strLoggedUser = (String) sessMap.get(FipaConstant.LOGGED_USER_ID);

			if (strArrChildMode != null && strArrChildMode.length > 0) {

				for (int id = 0; id < strArrChildMode.length; id++) {

					double dlbChldPerAnnEduCost = Double.parseDouble(
							FipaUtils.nullOrBlank(strArrChldPerAnnEduCost[id]) ? "0" : strArrChldPerAnnEduCost[id]);
					double dlbChldPerAnnLvCost = Double.parseDouble("0");
					double dlbChldAvailEdnFund = Double.parseDouble(
							FipaUtils.nullOrBlank(strArrChldAvailEdnFund[id]) ? "0" : strArrChldAvailEdnFund[id]);

					// Date crtdDate = FipaUtils.nullOrBlank(strArrChldCrtdDate[id]) ? new Date()
					// :FipaDateUtils.convertStringToDate(strArrChldCrtdDate[id]) ;
					Date childdob = FipaUtils.nullOrBlank(strArrChldDob[id]) ? null
							: FipaDateUtils.convertStringToDate(strArrChldDob[id]);

					FnaSelfspouseDets fnaselfspsDets = new FnaSelfspouseDets();
					fnaselfspsDets.setFnaId(strFNAId);

					String strPKId = FipaUtils.nullOrBlank(strArrChldId[id]) ? "" : strArrChldId[id];

					if (strArrChildMode[id].equalsIgnoreCase(FipaConstant.INSERT_MODE)
							&& FipaUtils.nullOrBlank(strPKId)) {
						insChildList.add(new FnaChilddetails(null, null, strArrChldName[id], childdob,
								strArrChldAge[id], strArrChldRel[id], strArrChldGender[id], strArrChldYrs2ter[id], "",
								"", strArrChldYrsofEdu[id], dlbChldPerAnnEduCost, dlbChldPerAnnLvCost,
								dlbChldAvailEdnFund, strArrChldRemrks[id], strLoggedUser, new Date(), null, null, "",
								"", ""));

					}

					if (strArrChildMode[id].equalsIgnoreCase(FipaConstant.UPDATE_MODE)
							|| (strArrChildMode[id].equalsIgnoreCase(FipaConstant.INSERT_MODE)
									&& !FipaUtils.nullOrBlank(strPKId))) {

						if (strPKId.startsWith("AS")) {
							updChildListAS.add(new FnaChilddetails(strArrChldId[id], fnaselfspsDets, strArrChldName[id],
									childdob, strArrChldAge[id], strArrChldRel[id], strArrChldGender[id],
									strArrChldYrs2ter[id], "", "", strArrChldYrsofEdu[id], dlbChldPerAnnEduCost,
									dlbChldPerAnnLvCost, dlbChldAvailEdnFund, strArrChldRemrks[id], strLoggedUser,
									new Date(), strLoggedUser, new Date(), "", "", ""));
						} else {
							Date crtdDate = FipaUtils.nullOrBlank(strArrChldCrtdDate[id]) ? new Date()
									: FipaDateUtils.convertStringToDate(strArrChldCrtdDate[id]);

							updChildList.add(new FnaChilddetails(strArrChldId[id], fnaselfspsDets, strArrChldName[id],
									childdob, strArrChldAge[id], strArrChldRel[id], strArrChldGender[id],
									strArrChldYrs2ter[id], "", "", strArrChldYrsofEdu[id], dlbChldPerAnnEduCost,
									dlbChldPerAnnLvCost, dlbChldAvailEdnFund, strArrChldRemrks[id],
									strArrChldCrtdBy[id], crtdDate, strLoggedUser, new Date(), "", "", ""));
						}

					}

					if (strArrChildMode[id].equalsIgnoreCase(FipaConstant.DELETE_MODE)) {

						Date crtdDate = FipaUtils.nullOrBlank(strArrChldCrtdDate[id]) ? new Date()
								: FipaDateUtils.convertStringToDate(strArrChldCrtdDate[id]);
						delChildList.add(new FnaChilddetails(strArrChldId[id], fnaselfspsDets, strArrChldName[id],
								childdob, strArrChldAge[id], strArrChldRel[id], strArrChldGender[id],
								strArrChldYrs2ter[id], "", "", strArrChldYrsofEdu[id], dlbChldPerAnnEduCost,
								dlbChldPerAnnLvCost, dlbChldAvailEdnFund, strArrChldRemrks[id], strArrChldCrtdBy[id],
								crtdDate, strLoggedUser, new Date(), "", "", ""));
					}
				}
			}

			vectChildDetails.add(insChildList);
			vectChildDetails.add(updChildList);
			vectChildDetails.add(delChildList);
			vectChildDetails.add(updChildListAS);
		} catch (Exception ex) {
			logger.error("Error in getChildDetails ->", ex);
		}

		return vectChildDetails;
	}

	public Vector getDependentDetails(HttpServletRequest request) {

		Vector vectDeptDetails = new Vector();
		List insDeptList = new ArrayList();
		List updDeptList = new ArrayList();
		List delDeptList = new ArrayList();
		List updDeptListAS = new ArrayList();

		HttpSession session = request.getSession(false);
		Map<String, String> sessMap = new HashMap<String, String>();
		sessMap = (HashMap<String, String>) session.getAttribute(FipaConstant.LOGGED_USER_INFO);

		try {

			String[] strArrDeptMode = FipaUtils.getParamArrValue(request, "txtFlddeptMode");
			String[] strArrDeptId = FipaUtils.getParamArrValue(request, "txtFldDepnId");
			String[] strArrDeptName = FipaUtils.getParamArrValue(request, "txtFldDepnName");
			String[] strArrDeptRel = FipaUtils.getParamArrValue(request, "selDepnRelationship");
			String[] strArrDeptDob = FipaUtils.getParamArrValue(request, "txtFldDepnDob");
			String[] strArrDeptAge = FipaUtils.getParamArrValue(request, "txtFldDepnAge");
			String[] strArrDeptGender = FipaUtils.getParamArrValue(request, "selDepnGender");
			String[] strArrDeptYrToSup = FipaUtils.getParamArrValue(request, "txtFldDepnYrssupport");
			String[] strArrDeptMthCont = FipaUtils.getParamArrValue(request, "txtFldDepnMonthctr");
			String[] strArrDeptSelfCont = FipaUtils.getParamArrValue(request, "txtFldDepnProvSlf");
			String[] strArrDeptSpsCont = FipaUtils.getParamArrValue(request, "txtFldDepnProvSps");
			String[] strArrDeptCrdtBy = FipaUtils.getParamArrValue(request, "txtFldDepnCrtdBy");
			String[] strArrDeptCrdtDate = FipaUtils.getParamArrValue(request, "txtFldDepnCrtdDate");

			String strFNAId = FipaUtils.getParamValue(request, "fnaId");
			String strLoggedUser = (String) sessMap.get(FipaConstant.LOGGED_USER_ID);

			if (strArrDeptMode != null && strArrDeptMode.length > 0) {

				for (int id = 0; id < strArrDeptMode.length; id++) {

					double strDepnMonthctr = Double
							.parseDouble(FipaUtils.nullOrBlank(strArrDeptMthCont[id]) ? "0" : strArrDeptMthCont[id]);
					double strDepnProvSlf = Double
							.parseDouble(FipaUtils.nullOrBlank(strArrDeptSelfCont[id]) ? "0" : strArrDeptSelfCont[id]);
					double strDepnProvSps = Double
							.parseDouble(FipaUtils.nullOrBlank(strArrDeptSpsCont[id]) ? "0" : strArrDeptSpsCont[id]);

					String strPKId = FipaUtils.nullOrBlank(strArrDeptId[id]) ? "" : strArrDeptId[id];

					Date crtdDate = FipaUtils.nullOrBlank(strArrDeptCrdtDate[id]) ? new Date()
							: FipaDateUtils.convertStringToDate(strArrDeptCrdtDate[id]);
					Date depndob = FipaUtils.nullOrBlank(strArrDeptDob[id]) ? null
							: FipaDateUtils.convertStringToDate(strArrDeptDob[id]);

					FnaSelfspouseDets fnaselfspsDets = new FnaSelfspouseDets();
					fnaselfspsDets.setFnaId(strFNAId);

					if (strArrDeptMode[id].equalsIgnoreCase(FipaConstant.INSERT_MODE)
							&& FipaUtils.nullOrBlank(strPKId)) {

						insDeptList.add(new FnaDependantDets(null, null, strArrDeptName[id], strArrDeptRel[id], depndob,
								strArrDeptAge[id], strArrDeptGender[id], strArrDeptYrToSup[id], strDepnMonthctr,
								strDepnProvSlf, strDepnProvSps, strLoggedUser, new Date(), null, null));

					}

					if (strArrDeptMode[id].equalsIgnoreCase(FipaConstant.UPDATE_MODE)
							|| (strArrDeptMode[id].equalsIgnoreCase(FipaConstant.INSERT_MODE)
									&& !FipaUtils.nullOrBlank(strPKId))) {

						if (strPKId.startsWith("AS")) {
							updDeptListAS.add(new FnaDependantDets(strArrDeptId[id], fnaselfspsDets, strArrDeptName[id],
									strArrDeptRel[id], depndob, strArrDeptAge[id], strArrDeptGender[id],
									strArrDeptYrToSup[id], strDepnMonthctr, strDepnProvSlf, strDepnProvSps,
									strLoggedUser, new Date(), strLoggedUser, new Date()));

						} else {
							updDeptList.add(new FnaDependantDets(strArrDeptId[id], fnaselfspsDets, strArrDeptName[id],
									strArrDeptRel[id], depndob, strArrDeptAge[id], strArrDeptGender[id],
									strArrDeptYrToSup[id], strDepnMonthctr, strDepnProvSlf, strDepnProvSps,
									strArrDeptCrdtBy[id], crtdDate, strLoggedUser, new Date()));

						}

					}

					if (strArrDeptMode[id].equalsIgnoreCase(FipaConstant.DELETE_MODE)) {
						delDeptList.add(new FnaDependantDets(strArrDeptId[id], fnaselfspsDets, strArrDeptName[id],
								strArrDeptRel[id], depndob, strArrDeptAge[id], strArrDeptGender[id],
								strArrDeptYrToSup[id], strDepnMonthctr, strDepnProvSlf, strDepnProvSps,
								strArrDeptCrdtBy[id], crtdDate, strLoggedUser, new Date()));
					}
				}
			}

			vectDeptDetails.add(insDeptList);
			vectDeptDetails.add(updDeptList);
			vectDeptDetails.add(delDeptList);
			vectDeptDetails.add(updDeptListAS);
		} catch (Exception ex) {
			logger.error("Error in getDependentDetails ->", ex);
		}

		return vectDeptDetails;

	}

	public Vector getOtherAssetDetails(HttpServletRequest request) {

		Vector vectOtherAssetDetails = new Vector();
		List insOtherAssetList = new ArrayList();
		List updOtherAssetList = new ArrayList();
		List delOtherAssetList = new ArrayList();
		List updOtherAssetListAS = new ArrayList();

		HttpSession session = request.getSession(false);
		Map<String, String> sessMap = new HashMap<String, String>();
		sessMap = (HashMap<String, String>) session.getAttribute(FipaConstant.LOGGED_USER_INFO);

		try {

			String[] strArrOtherAssetMode = FipaUtils.getParamArrValue(request, "txtFldOthsasstMode");
			String[] strArrOtherAssetId = FipaUtils.getParamArrValue(request, "txtFldFnaOthsasstId");
			String[] strArrOtherAssetItems = FipaUtils.getParamArrValue(request, "txtFldPersonalItems");
			String[] strArrOtherAssetDescription = FipaUtils.getParamArrValue(request, "txtFldOthasstDescription");
			String[] strArrOtherAssetSelf = FipaUtils.getParamArrValue(request, "txtFldOthasstSelf");
			String[] strArrOtherAssetSpouse = FipaUtils.getParamArrValue(request, "txtFldOthasstSpouse");
			String[] strArrOtherAssetJoint = FipaUtils.getParamArrValue(request, "txtFldOthasstJoint");
			String[] strArrOtherAssetLoans = FipaUtils.getParamArrValue(request, "txtFldOthasstLoans");
			String[] strArrOtherAssetCrdtBy = FipaUtils.getParamArrValue(request, "txtFldOtherAssetCrtdBy");
			String[] strArrOtherAssetCrdtDate = FipaUtils.getParamArrValue(request, "txtFldOtherAssetCrtdDate");

			String strFNAId = FipaUtils.getParamValue(request, "fnaId");
			String strLoggedUser = (String) sessMap.get(FipaConstant.LOGGED_USER_ID);
System.out.println("strArrOtherAssetItems-----"+strArrOtherAssetItems);
System.out.println("strArrOtherAssetSpouse-----"+strArrOtherAssetSpouse);
System.out.println("strArrOtherAssetJoint-----"+strArrOtherAssetJoint);

			if (strArrOtherAssetMode != null && strArrOtherAssetMode.length > 0) {

				for (int id = 0; id < strArrOtherAssetMode.length; id++) {

			

					String strPKId = FipaUtils.nullOrBlank(strArrOtherAssetId[id]) ? "" : strArrOtherAssetId[id];

					Date crtdDate = FipaUtils.nullOrBlank(strArrOtherAssetCrdtDate[id]) ? new Date()
							: FipaDateUtils.convertStringToDate(strArrOtherAssetCrdtDate[id]);
					
					double strOtherAsstSelf = Double
							.parseDouble(FipaUtils.nullOrBlank(strArrOtherAssetSelf[id]) ? "0" : strArrOtherAssetSelf[id]);
					
					double strOtherAsstSpouse = Double
							.parseDouble(FipaUtils.nullOrBlank(strArrOtherAssetSpouse[id]) ? "0" : strArrOtherAssetSpouse[id]);
					
					double strOtherAsstJoint = Double
							.parseDouble(FipaUtils.nullOrBlank(strArrOtherAssetJoint[id]) ? "0" : strArrOtherAssetJoint[id]);
					
					double strOtherAsstLoans = Double
							.parseDouble(FipaUtils.nullOrBlank(strArrOtherAssetLoans[id]) ? "0" : strArrOtherAssetLoans[id]);
					
					FnaSelfspouseDets fnaselfspsDets = new FnaSelfspouseDets();
					fnaselfspsDets.setFnaId(strFNAId);

					if (strArrOtherAssetMode[id].equalsIgnoreCase(FipaConstant.INSERT_MODE)
							&& FipaUtils.nullOrBlank(strPKId)) {

						insOtherAssetList.add(new FnaOtherAssetdets(null, null, strArrOtherAssetItems[id], strArrOtherAssetDescription[id],
								strOtherAsstSelf, strOtherAsstSpouse, strOtherAsstJoint, strOtherAsstLoans,strLoggedUser, new Date(), null, null));

					}

					if (strArrOtherAssetMode[id].equalsIgnoreCase(FipaConstant.UPDATE_MODE)
							|| (strArrOtherAssetMode[id].equalsIgnoreCase(FipaConstant.INSERT_MODE)
									&& !FipaUtils.nullOrBlank(strPKId))) {

						if (strPKId.startsWith("AS")) {
							updOtherAssetListAS.add(new FnaOtherAssetdets(strArrOtherAssetId[id], fnaselfspsDets, strArrOtherAssetItems[id],
									strArrOtherAssetDescription[id], strOtherAsstSelf, strOtherAsstSpouse, strOtherAsstJoint,
									strOtherAsstLoans, strLoggedUser, new Date(), strLoggedUser, new Date()));

						} else {
							updOtherAssetList.add(new FnaOtherAssetdets(strArrOtherAssetId[id], fnaselfspsDets, strArrOtherAssetItems[id],
									strArrOtherAssetDescription[id], strOtherAsstSelf, strOtherAsstSpouse, strOtherAsstJoint,
									strOtherAsstLoans,strArrOtherAssetCrdtBy[id], crtdDate, strLoggedUser, new Date()));

						}

					}

					if (strArrOtherAssetMode[id].equalsIgnoreCase(FipaConstant.DELETE_MODE)) {
						delOtherAssetList.add(new FnaOtherAssetdets(strArrOtherAssetId[id], fnaselfspsDets, strArrOtherAssetItems[id],
								strArrOtherAssetDescription[id], strOtherAsstSelf, strOtherAsstSpouse, strOtherAsstJoint,
								strOtherAsstLoans,strArrOtherAssetCrdtBy[id], crtdDate, strLoggedUser, new Date()));
					}
				}
			}

			vectOtherAssetDetails.add(insOtherAssetList);
			vectOtherAssetDetails.add(updOtherAssetList);
			vectOtherAssetDetails.add(delOtherAssetList);
			vectOtherAssetDetails.add(updOtherAssetListAS);
		} catch (Exception ex) {
			logger.error("Error in getOtherAssetDetails ->", ex);
		}

		return vectOtherAssetDetails;

	}

	private Vector getCPFBalanceDets(HttpServletRequest request) {

		Vector vectMthCntrbDetails = new Vector();
		List insMthCntrbList = new ArrayList();
		List updMthCntrbList = new ArrayList();
		List delMthCntrbList = new ArrayList();

		HttpSession session = request.getSession(false);
		Map<String, String> sessMap = new HashMap<String, String>();
		sessMap = (HashMap<String, String>) session.getAttribute(FipaConstant.LOGGED_USER_INFO);

		try {

			String strFNAId = FipaUtils.getParamValue(request, "fnaId");
			String strLoggedUser = (String) sessMap.get(FipaConstant.LOGGED_USER_ID);

			ClientService serv = new ClientService();
			MasterCpfService cpfservice = new MasterCpfService();
			List<MasterCpfAcctype> lstMastAccTypeList = new ArrayList<MasterCpfAcctype>();
			lstMastAccTypeList = cpfservice.getAllCpfAccountType();

			for (MasterCpfAcctype cpfacc : lstMastAccTypeList) {

				String strCPFBalAccTypeId = FipaUtils.getParamValue(request, "hTxtFldSlfAccType" + cpfacc.getAccType());
				String strCPFBalAccPkId = FipaUtils.getParamValue(request, "hTxtFldSlfPkId" + cpfacc.getCpfAcId());

				MasterCpfAcctype accType = new MasterCpfAcctype();
				accType.setCpfAcId(strCPFBalAccTypeId);

				FnaSelfspouseDets fnaSelfSpsDets = new FnaSelfspouseDets();
				fnaSelfSpsDets.setFnaId(strFNAId);

				String strCPFBalValue = FipaUtils.getParamValue(request, "txtFldCpfSlf" + cpfacc.getAccType());
				double dblCPFBal = Double.parseDouble(FipaUtils.nullOrBlank(strCPFBalValue) ? "0" : strCPFBalValue);

				if (FipaUtils.nullOrBlank(strCPFBalAccPkId) && (dblCPFBal > 0)) {
					insMthCntrbList.add(new FnaCpfBalanceDets(null, accType, null, dblCPFBal, "SELF", strLoggedUser,
							new Date(), null, null));
				}

				if (!FipaUtils.nullOrBlank(strCPFBalAccPkId) && (dblCPFBal > 0)) {
					updMthCntrbList.add(new FnaCpfBalanceDets(strCPFBalAccPkId, accType, fnaSelfSpsDets, dblCPFBal,
							"SELF", strLoggedUser, new Date(), strLoggedUser, new Date()));
				}

				String strSpsCPFBalAccTypeId = FipaUtils.getParamValue(request,
						"hTxtFldSpsAccType" + cpfacc.getAccType());
				String strSpsCPFBalAccPkId = FipaUtils.getParamValue(request, "hTxtFldSpsPkId" + cpfacc.getCpfAcId());

				MasterCpfAcctype accTypeSps = new MasterCpfAcctype();
				accTypeSps.setCpfAcId(strSpsCPFBalAccTypeId);

				FnaSelfspouseDets fnaSelfSps = new FnaSelfspouseDets();
				fnaSelfSps.setFnaId(strFNAId);

				String strSpsCPFBalValue = FipaUtils.getParamValue(request, "txtFldCpfSps" + cpfacc.getAccType());
				double dblSpsCPFBal = Double
						.parseDouble(FipaUtils.nullOrBlank(strSpsCPFBalValue) ? "0" : strSpsCPFBalValue);
				if (FipaUtils.nullOrBlank(strSpsCPFBalAccPkId) && (dblCPFBal > 0)) {
					insMthCntrbList.add(new FnaCpfBalanceDets(null, accTypeSps, null, dblSpsCPFBal, "SPOUSE",
							strLoggedUser, new Date(), null, null));
				}
				if (!FipaUtils.nullOrBlank(strSpsCPFBalAccPkId) && (dblCPFBal > 0)) {
					updMthCntrbList.add(new FnaCpfBalanceDets(strSpsCPFBalAccPkId, accTypeSps, fnaSelfSps, dblSpsCPFBal,
							"SPOUSE", strLoggedUser, new Date(), strLoggedUser, new Date()));
				}
			}

			vectMthCntrbDetails.add(insMthCntrbList);
			vectMthCntrbDetails.add(updMthCntrbList);
			vectMthCntrbDetails.add(delMthCntrbList);

		} catch (Exception ex) {
			logger.error("Error in getCPFBalanceDets ->", ex);
		}
		return vectMthCntrbDetails;
	}

	public Vector getCPFMonthlyContrbDetails(HttpServletRequest request) {

		Vector vectMthCntrbDetails = new Vector();
		List insMthCntrbList = new ArrayList();
		List updMthCntrbList = new ArrayList();
		List delMthCntrbList = new ArrayList();

		HttpSession session = request.getSession(false);
		Map<String, String> sessMap = new HashMap<String, String>();
		sessMap = (HashMap<String, String>) session.getAttribute(FipaConstant.LOGGED_USER_INFO);
		try {

			String[] strArrMthlyMode = FipaUtils.getParamArrValue(request, "txtFldCpfMthlyMode");
			String[] strArrCCSlfOrSps = FipaUtils.getParamArrValue(request, "ccSelfOrSps");
			String strArrCCPkId = FipaUtils.getParamValue(request, "ccPkIdSelf");
			String strArrCCEmpleContrb = FipaUtils.getParamValue(request, "ccEmpleContrbSelf");
			String strArrCCEmplrContrb = FipaUtils.getParamValue(request, "ccEmplrContrbSelf");
			String[] strArrCCCrtdBy = FipaUtils.getParamArrValue(request, "ccCrtdBy");
			String[] strArrCCCrtdDate = FipaUtils.getParamArrValue(request, "ccCrtdDate");

			String strArrCCPkIdSps = FipaUtils.getParamValue(request, "ccPkIdSps");
			String strArrCCEmpleContrbSps = FipaUtils.getParamValue(request, "ccEmpleContrbSps");
			String strArrCCEmplrContrbSps = FipaUtils.getParamValue(request, "ccEmplrContrbSps");

			String strFNAId = FipaUtils.getParamValue(request, "fnaId");
			String strLoggedUser = (String) sessMap.get(FipaConstant.LOGGED_USER_ID);

			if (strArrCCSlfOrSps != null && strArrCCSlfOrSps.length > 0) {

//			for(int id=0;id<strArrCCSlfOrSps.length;id++){

				String strEmpContrb = strArrCCEmpleContrb;
				String strEmplrContrb = strArrCCEmplrContrb;

				String strEmpContrbSps = strArrCCEmpleContrbSps;
				String strEmplrContrbSps = strArrCCEmplrContrbSps;

				double dlbCCEmpleContrb = Double.parseDouble(FipaUtils.nullOrBlank(strEmpContrb) ? "0" : strEmpContrb);
				double dlbCCEmplrContrb = Double
						.parseDouble(FipaUtils.nullOrBlank(strEmplrContrb) ? "0" : strEmplrContrb);

				double dlbCCEmpleContrbSps = Double
						.parseDouble(FipaUtils.nullOrBlank(strEmpContrbSps) ? "0" : strEmpContrbSps);
				double dlbCCEmplrContrbSps = Double
						.parseDouble(FipaUtils.nullOrBlank(strEmplrContrbSps) ? "0" : strEmplrContrbSps);

//				if(FipaUtils.nullOrBlank(strEmpContrb) && FipaUtils.nullOrBlank(strEmplrContrb)){
//	//				Ignore This part if both are none				
//				}else{

				FnaSelfspouseDets fnaselfspsDets = new FnaSelfspouseDets();
				fnaselfspsDets.setFnaId(strFNAId);

				if (FipaUtils.nullOrBlank(strArrCCPkId) && (dlbCCEmpleContrb > 0 || dlbCCEmplrContrb > 0)) {
					insMthCntrbList.add(new FnaCpfMonthcontDets(null, null, "Self", dlbCCEmpleContrb, dlbCCEmplrContrb,
							strLoggedUser, new Date(), null, null));
				}
				if (!FipaUtils.nullOrBlank(strArrCCPkId) && (dlbCCEmpleContrb > 0 || dlbCCEmplrContrb > 0)) {
					updMthCntrbList.add(new FnaCpfMonthcontDets(strArrCCPkId, fnaselfspsDets, "Self", dlbCCEmpleContrb,
							dlbCCEmplrContrb, strLoggedUser, new Date(), strLoggedUser, new Date()));
				}

				FnaSelfspouseDets fnaselfsps = new FnaSelfspouseDets();
				fnaselfsps.setFnaId(strFNAId);

				if (FipaUtils.nullOrBlank(strArrCCPkIdSps) && (dlbCCEmpleContrbSps > 0 || dlbCCEmplrContrbSps > 0)) {
					insMthCntrbList.add(new FnaCpfMonthcontDets(null, null, "Spouse", dlbCCEmpleContrbSps,
							dlbCCEmplrContrbSps, strLoggedUser, new Date(), null, null));
				}
				if (!FipaUtils.nullOrBlank(strArrCCPkIdSps) && (dlbCCEmpleContrbSps > 0 || dlbCCEmplrContrbSps > 0)) {
					updMthCntrbList
							.add(new FnaCpfMonthcontDets(strArrCCPkIdSps, fnaselfsps, "Spouse", dlbCCEmpleContrbSps,
									dlbCCEmplrContrbSps, strLoggedUser, new Date(), strLoggedUser, new Date()));
				}

//				}

//			  }

			}

			vectMthCntrbDetails.add(insMthCntrbList);
			vectMthCntrbDetails.add(updMthCntrbList);
			vectMthCntrbDetails.add(delMthCntrbList);
		} catch (Exception ex) {
			logger.error("Error in getCPFMonthlyContrbDetails ->", ex);
		}

		return vectMthCntrbDetails;

	}

	private Vector getCPFTopUpDetails(HttpServletRequest request) {

		Vector vectTopUpDetails = new Vector();
		List insTopUpList = new ArrayList();
		List updTopUpList = new ArrayList();
		List delTopUpList = new ArrayList();

		HttpSession session = request.getSession(false);
		Map<String, String> sessMap = new HashMap<String, String>();
		sessMap = (HashMap<String, String>) session.getAttribute(FipaConstant.LOGGED_USER_INFO);
		try {

			String[] strArrTpupMode = FipaUtils.getParamArrValue(request, "txtFldCpfTpupMode");
			String[] strArrCtPkid = FipaUtils.getParamArrValue(request, "txtFldCtPkid");
			String[] strArrCtType = FipaUtils.getParamArrValue(request, "txtFldCtType");
			String[] strArrCpfAcctype = FipaUtils.getParamArrValue(request, "selmasterCpfAcctype");
			String[] strArrCtPaymentTerm = FipaUtils.getParamArrValue(request, "txtFldCtPaymentTerm");
			String[] strArrCtTopupAmt = FipaUtils.getParamArrValue(request, "txtFldCtTopupAmt");
			String[] strArrCtIntendedYr = FipaUtils.getParamArrValue(request, "txtFldCtIntendedYr");
			String[] strArrCtCrtdBy = FipaUtils.getParamArrValue(request, "txtFldCtCrtdBy");
			String[] strArrCtCrtdDate = FipaUtils.getParamArrValue(request, "txtFldCtCrtdDate");

			String strFNAId = FipaUtils.getParamValue(request, "fnaId");
			String strCpfAcId = FipaUtils.getParamValue(request, "selmasterCpfAcctype");
			String strLoggedUser = (String) sessMap.get(FipaConstant.LOGGED_USER_ID);

			if (strArrTpupMode != null && strArrTpupMode.length > 0) {

				for (int id = 0; id < strArrTpupMode.length; id++) {

					double dlbCtTopupAmt = Double
							.parseDouble(FipaUtils.nullOrBlank(strArrCtTopupAmt[id]) ? "0" : strArrCtTopupAmt[id]);

					Date crtdDate = FipaUtils.nullOrBlank(strArrCtCrtdDate[id]) ? new Date()
							: FipaDateUtils.convertStringToDate(strArrCtCrtdDate[id]);

					MasterCpfAcctype fnaMasterCpftype = new MasterCpfAcctype();
					fnaMasterCpftype.setCpfAcId(strCpfAcId);

					FnaSelfspouseDets fnaselfspsDets = new FnaSelfspouseDets();
					fnaselfspsDets.setFnaId(strFNAId);

					String strPKId = FipaUtils.nullOrBlank(strArrCtPkid[id]) ? "" : strArrCtPkid[id];

					if (strArrTpupMode[id].equalsIgnoreCase(FipaConstant.INSERT_MODE)
							&& FipaUtils.nullOrBlank(strPKId)) {
						// insTopUpList.add(new
						// FnaCpfTopupDets(null,fnaMasterCpftype,null,strArrCtType[id],strArrCtPaymentTerm[id],dlbCtTopupAmt,strArrCtIntendedYr[id],strLoggedUser,new
						// Date(),null,null));

					}

					if (strArrTpupMode[id].equalsIgnoreCase(FipaConstant.UPDATE_MODE)
							|| (strArrTpupMode[id].equalsIgnoreCase(FipaConstant.INSERT_MODE)
									&& !FipaUtils.nullOrBlank(strPKId))) {
						// updTopUpList.add(new
						// FnaCpfTopupDets(strArrCtPkid[id],fnaMasterCpftype,fnaselfspsDets,strArrCtType[id],strArrCtPaymentTerm[id],dlbCtTopupAmt,strArrCtIntendedYr[id],strArrCtCrtdBy[id],crtdDate,strLoggedUser,new
						// Date()));

					}

					if (strArrTpupMode[id].equalsIgnoreCase(FipaConstant.DELETE_MODE)) {
						// delTopUpList.add(new
						// FnaCpfTopupDets(strArrCtPkid[id],fnaMasterCpftype,fnaselfspsDets,strArrCtType[id],strArrCtPaymentTerm[id],dlbCtTopupAmt,strArrCtIntendedYr[id],strArrCtCrtdBy[id],crtdDate,strLoggedUser,new
						// Date()));
					}
				}
			}

			vectTopUpDetails.add(insTopUpList);
			vectTopUpDetails.add(updTopUpList);
			vectTopUpDetails.add(delTopUpList);
		} catch (Exception ex) {
			logger.error("Error in getCPFTopUpDetails ->", ex);
		}

		return vectTopUpDetails;
	}

	private Vector getCPFDedtnDetails(HttpServletRequest request) {

		Vector vectDedtDetails = new Vector();
		List insDedtList = new ArrayList();
		List updDedtList = new ArrayList();
		List delDedtList = new ArrayList();

//		HttpSession session = request.getSession(false);
//		Map<String,String> sessMap = new HashMap<String,String>();
//		sessMap = (HashMap<String, String>)session.getAttribute(FipaConstant.LOGGED_USER_INFO);

		try {

			// String[] strArrDedtMode = FipaUtils.getParamArrValue(request,
			// "txtFldCpfDedtMode");
			// String[] strArrCdPkid = FipaUtils.getParamArrValue(request, "txtFldCdPkid");
			// String[] strArrCdApplicant = FipaUtils.getParamArrValue(request,
			// "txtFldCdApplicant");
			// String[] strArrCdDedtType = FipaUtils.getParamArrValue(request,
			// "txtFldCdDedtType");
			// String[] strArrCdType = FipaUtils.getParamArrValue(request, "txtFldCdType");
			// String[] strArrCpfAcctype = FipaUtils.getParamArrValue(request,
			// "selmasterCpfAcctype");
			// String[] strArrCdPayTerm = FipaUtils.getParamArrValue(request,
			// "txtFldCdPayTerm");
			// String[] strArrCdDedtAmt = FipaUtils.getParamArrValue(request,
			// "txtFldCdDedtAmt");
			// String[] strArrCdBalTerm = FipaUtils.getParamArrValue(request,
			// "txtFldCdBalTerm");
			// String[] strArrCdCrtdBy = FipaUtils.getParamArrValue(request,
			// "txtFldCdCrtdBy");
			// String[] strArrCdCrtdDate = FipaUtils.getParamArrValue(request,
			// "txtFldCdCrtdDate");

			// String strFNAId = FipaUtils.getParamValue(request, "fnaId");
			// String strCpfAcId = FipaUtils.getParamValue(request, "selmasterCpfAcctype");

			// String strLoggedUser = (String) sessMap.get(FipaConstant.LOGGED_USER_ID);

			// if(strArrDedtMode != null && strArrDedtMode.length>0){
			//
			// for(int id=0;id<strArrDedtMode.length;id++){
			//
			// double dlbCdDedtAmt =
			// Double.parseDouble(FipaUtils.nullOrBlank(strArrCdDedtAmt[id]) ? "0"
			// :strArrCdDedtAmt[id]);
			// short shtCdBalTerm =
			// Short.parseShort(FipaUtils.nullOrBlank(strArrCdBalTerm[id]) ? "0"
			// :strArrCdBalTerm[id]);
			//
			// Date crtdDate = FipaUtils.nullOrBlank(strArrCdCrtdDate[id]) ? new Date()
			// :FipaDateUtils.convertStringToDate(strArrCdCrtdDate[id]) ;
			//
			//
			// MasterCpfAcctype fnaMasterCpftype = new MasterCpfAcctype();
			// fnaMasterCpftype.setTxtFldCpfAcId(strCpfAcId);
			//
			//
			// FnaSelfspouseDets fnaselfspsDets = new FnaSelfspouseDets();
			// fnaselfspsDets.setFnaId(strFNAId);
			//
			//
			//
			// if(strArrDedtMode[id].equalsIgnoreCase(FipaConstant.INSERT_MODE)){
			//// insDedtList.add(new
			// FnaCpfDeductions(null,fnaMasterCpftype,null,strArrCdApplicant[id],strArrCdDedtType[id],strArrCdType[id],strArrCdPayTerm[id],dlbCdDedtAmt,shtCdBalTerm,null,null,null,null,null,strLoggedUser,new
			// Date(),null,null));
			//
			// }
			//
			// if(strArrDedtMode[id].equalsIgnoreCase(FipaConstant.UPDATE_MODE)){
			//// updDedtList.add(new
			// FnaCpfDeductions(strArrCdPkid[id],fnaMasterCpftype,fnaselfspsDets,strArrCdApplicant[id],strArrCdDedtType[id],strArrCdType[id],strArrCdPayTerm[id],dlbCdDedtAmt,shtCdBalTerm,null,null,null,null,null,strArrCdCrtdBy[id],crtdDate,strLoggedUser,new
			// Date()));
			//
			// }
			//
			// if(strArrDedtMode[id].equalsIgnoreCase(FipaConstant.DELETE_MODE)){
			//// delDedtList.add(new
			// FnaCpfDeductions(strArrCdPkid[id],fnaMasterCpftype,fnaselfspsDets,strArrCdApplicant[id],strArrCdDedtType[id],strArrCdType[id],strArrCdPayTerm[id],dlbCdDedtAmt,shtCdBalTerm,null,null,null,null,null,strArrCdCrtdBy[id],crtdDate,strLoggedUser,new
			// Date()));
			// }
			// }
			// }

			// vectDedtDetails.add(insDedtList);
			// vectDedtDetails.add(updDedtList);
			// vectDedtDetails.add(delDedtList);

		} catch (Exception ex) {
			logger.error("Error in getCPFDedtnDetails ->", ex);
		}
		return vectDedtDetails;
	}

	public Vector getCPFAddtnDedtnDetails(HttpServletRequest request) {

		Vector vectAddtDedtDetails = new Vector();
		List insAddtDedtList = new ArrayList();
		List updAddtDedtList = new ArrayList();
		List updAddtDedtListAS = new ArrayList();
		List delAddtDedtList = new ArrayList();

		HttpSession session = request.getSession(false);
		Map<String, String> sessMap = new HashMap<String, String>();
		sessMap = (HashMap<String, String>) session.getAttribute(FipaConstant.LOGGED_USER_INFO);
		try {

			String[] strArrCADMode = FipaUtils.getParamArrValue(request, "txtFldCADMode");
			String[] strArrCADPkid = FipaUtils.getParamArrValue(request, "cdPkid");
			String[] strArrCADApplicant = FipaUtils.getParamArrValue(request, "txtFldCADApplicant");
			String[] strArrCADAplcnttype = FipaUtils.getParamArrValue(request, "selCdApplicantType");
			String[] strArrCADDedtType = FipaUtils.getParamArrValue(request, "selCADType");
			String[] strArrCADType = FipaUtils.getParamArrValue(request, "selCADTypesOfTrans");
			String[] strArrCADAcctype = FipaUtils.getParamArrValue(request, "selCADCpfAcctype");
			String[] strArrCADPerFrom = FipaUtils.getParamArrValue(request, "txtFldCADPerFrom");
			String[] strArrCADPerTo = FipaUtils.getParamArrValue(request, "txtFldCADPerTo");
			String[] strArrCADAmt = FipaUtils.getParamArrValue(request, "txtFldCADAmt");
			String[] strArrCADPayTerm = FipaUtils.getParamArrValue(request, "selCADPayTerm");
			String[] strArrCADRetAccAge = FipaUtils.getParamArrValue(request, "selCADRetrAccAge");
			// <!--changes done 19/06/2019 -->
			String[] strArrlifePlanName = FipaUtils.getParamArrValue(request, "txtLifeCpfPlanName");
			String[] strArrlifePolNo = FipaUtils.getParamArrValue(request, "txtLifeCpfPolNo");
			String[] strArrCADCrtdBy = FipaUtils.getParamArrValue(request, "txtFldCADCrtdBy");
			String[] strArrCADCrtdDate = FipaUtils.getParamArrValue(request, "txtFldCADCrtdDate");
			String[] strArrCADRefId = FipaUtils.getParamArrValue(request, "txtFldCADRefId");

			String[] strArrCADAgeFrom = FipaUtils.getParamArrValue(request, "txtFldCADAgeFrom");
			String[] strArrCADAgeTo = FipaUtils.getParamArrValue(request, "txtFldCADAgeTo");
			String[] strArrCADYrsToRet = FipaUtils.getParamArrValue(request, "txtFldCADYrstoRetOrTer");
			String[] strArrCADChildName = FipaUtils.getParamArrValue(request, "txtFldCADChildName");

			String strFNAId = FipaUtils.getParamValue(request, "fnaId");
			String strCpfAcId = FipaUtils.getParamValue(request, "txtCADCpfAcctype");

			String strLoggedUser = (String) sessMap.get(FipaConstant.LOGGED_USER_ID);

			if (strArrCADMode != null && strArrCADMode.length > 0) {

				for (int id = 0; id < strArrCADMode.length; id++) {

					double dlbCADAmt = Double
							.parseDouble(FipaUtils.nullOrBlank(strArrCADAmt[id]) ? "0" : strArrCADAmt[id]);
					double dlbBal = 0;

					Date perFromDate = FipaUtils.nullOrBlank(strArrCADPerFrom[id]) ? null
							: FipaDateUtils.convertStringToDate(strArrCADPerFrom[id]);
					Date perToDate = FipaUtils.nullOrBlank(strArrCADPerTo[id]) ? null
							: FipaDateUtils.convertStringToDate(strArrCADPerTo[id]);

					Date crtdDate = FipaUtils.nullOrBlank(strArrCADCrtdDate[id]) ? new Date()
							: FipaDateUtils.convertStringToDate(strArrCADCrtdDate[id]);

					String strPKId = FipaUtils.nullOrBlank(strArrCADPkid[id]) ? "" : strArrCADPkid[id];

					MasterCpfAcctype fnaMasterCpftype = new MasterCpfAcctype();
					fnaMasterCpftype.setCpfAcId(strArrCADAcctype[id]);

					FnaSelfspouseDets fnaselfspsDets = new FnaSelfspouseDets();
					fnaselfspsDets.setFnaId(strFNAId);

					// <!--changes done 19/06/2019 -->
					if (strArrCADMode[id].equalsIgnoreCase(FipaConstant.INSERT_MODE)
							&& FipaUtils.nullOrBlank(strPKId)) {

						insAddtDedtList.add(new FnaCpfDeductions(null, fnaMasterCpftype, null, strArrCADApplicant[id],
								strArrCADAplcnttype[id], "", strArrCADDedtType[id], perFromDate, perToDate, dlbCADAmt,
								strArrCADPayTerm[id], strArrCADType[id], dlbBal, strArrCADRetAccAge[id], "",
								strLoggedUser, new Date(), null, null, strArrCADRefId[id], strArrlifePlanName[id],
								strArrlifePolNo[id], strArrCADAgeFrom[id], strArrCADAgeTo[id], strArrCADYrsToRet[id],
								strArrCADChildName[id]));
					}

					if (strArrCADMode[id].equalsIgnoreCase(FipaConstant.UPDATE_MODE)
							|| (strArrCADMode[id].equalsIgnoreCase(FipaConstant.INSERT_MODE)
									&& !FipaUtils.nullOrBlank(strPKId))) {

						if (strPKId.startsWith("AS")) {
							updAddtDedtListAS.add(new FnaCpfDeductions(strArrCADPkid[id], fnaMasterCpftype,
									fnaselfspsDets, strArrCADApplicant[id], strArrCADAplcnttype[id], "",
									strArrCADDedtType[id], perFromDate, perToDate, dlbCADAmt, strArrCADPayTerm[id],
									strArrCADType[id], dlbBal, strArrCADRetAccAge[id], "", strLoggedUser, new Date(),
									strLoggedUser, new Date(), strArrCADRefId[id], strArrlifePlanName[id],
									strArrlifePolNo[id], strArrCADAgeFrom[id], strArrCADAgeTo[id],
									strArrCADYrsToRet[id], strArrCADChildName[id]));
						} else {
							updAddtDedtList.add(new FnaCpfDeductions(strArrCADPkid[id], fnaMasterCpftype,
									fnaselfspsDets, strArrCADApplicant[id], strArrCADAplcnttype[id], "",
									strArrCADDedtType[id], perFromDate, perToDate, dlbCADAmt, strArrCADPayTerm[id],
									strArrCADType[id], dlbBal, strArrCADRetAccAge[id], "", strArrCADCrtdBy[id],
									crtdDate, strLoggedUser, new Date(), strArrCADRefId[id], strArrlifePlanName[id],
									strArrlifePolNo[id], strArrCADAgeFrom[id], strArrCADAgeTo[id],
									strArrCADYrsToRet[id], strArrCADChildName[id]));

						}

					}

					if (strArrCADMode[id].equalsIgnoreCase(FipaConstant.DELETE_MODE)) {
						delAddtDedtList.add(new FnaCpfDeductions(strArrCADPkid[id], fnaMasterCpftype, fnaselfspsDets,
								strArrCADApplicant[id], strArrCADAplcnttype[id], "", strArrCADDedtType[id], perFromDate,
								perToDate, dlbCADAmt, strArrCADPayTerm[id], strArrCADType[id], dlbBal,
								strArrCADRetAccAge[id], "", strArrCADCrtdBy[id], crtdDate, strLoggedUser, new Date(),
								strArrCADRefId[id], strArrlifePlanName[id], strArrlifePolNo[id], strArrCADAgeFrom[id],
								strArrCADAgeTo[id], strArrCADYrsToRet[id], strArrCADChildName[id]));
					}
				}
			}

			vectAddtDedtDetails.add(insAddtDedtList);
			vectAddtDedtDetails.add(updAddtDedtList);
			vectAddtDedtDetails.add(delAddtDedtList);
			vectAddtDedtDetails.add(updAddtDedtListAS);
		} catch (Exception ex) {
			logger.error("Error in getCPFAddtnDedtnDetails ->", ex);
		}

		return vectAddtDedtDetails;
	}

	private Vector getLifeInscDetails(HttpServletRequest request) {

		Vector vectLIDetails = new Vector();
		return vectLIDetails;

	}

	public Vector getFinGoalsDetails(HttpServletRequest request) {

		Vector vectFinGoalsDetails = new Vector();
		List insFinGoalsList = new ArrayList();
		List updFinGoalsList = new ArrayList();
		List updFinGoalsListAS = new ArrayList();
		List delFinGoalsList = new ArrayList();

		HttpSession session = request.getSession(false);
		Map<String, String> sessMap = new HashMap<String, String>();
		sessMap = (HashMap<String, String>) session.getAttribute(FipaConstant.LOGGED_USER_INFO);

		try {

			String[] strArrFinGoalsMode = FipaUtils.getParamArrValue(request, "txtFldFinGoalsMode");
			String[] strArrFnaGoalId = FipaUtils.getParamArrValue(request, "txtFldFnaGoalId");
			String[] strArrFinGoalType = FipaUtils.getParamArrValue(request, "selFinGoalType");
			String[] strArrFinGoal = FipaUtils.getParamArrValue(request, "txtFldFinGoal");
			String[] strArrFinGoalPrio = FipaUtils.getParamArrValue(request, "selFinGoalPrio");
			String[] strArrFGCrtdBy = FipaUtils.getParamArrValue(request, "txtFldFGCrtdBy");
			String[] strArrFGCrtdDate = FipaUtils.getParamArrValue(request, "txtFldFGCrtdDate");

			String strFNAId = FipaUtils.getParamValue(request, "fnaId");
			String strLoggedUser = (String) sessMap.get(FipaConstant.LOGGED_USER_ID);

			if (strArrFinGoalsMode != null && strArrFinGoalsMode.length > 0) {

				for (int id = 0; id < strArrFinGoalsMode.length; id++) {

					Date crtdDate = FipaUtils.nullOrBlank(strArrFGCrtdDate[id]) ? new Date()
							: FipaDateUtils.convertStringToDate(strArrFGCrtdDate[id]);

					FnaSelfspouseDets fnaselfspsDets = new FnaSelfspouseDets();
					fnaselfspsDets.setFnaId(strFNAId);

					String strPKId = FipaUtils.nullOrBlank(strArrFnaGoalId[id]) ? "" : strArrFnaGoalId[id];

					if (strArrFinGoalsMode[id].equalsIgnoreCase(FipaConstant.INSERT_MODE)
							&& FipaUtils.nullOrBlank(strPKId)) {
						insFinGoalsList.add(new FnaFingoalsconcern(null, null, strArrFinGoalType[id], strArrFinGoal[id],
								strArrFinGoalPrio[id], strLoggedUser, new Date(), null, null));

					}

					if (strArrFinGoalsMode[id].equalsIgnoreCase(FipaConstant.UPDATE_MODE)
							|| (strArrFinGoalsMode[id].equalsIgnoreCase(FipaConstant.INSERT_MODE)
									&& !FipaUtils.nullOrBlank(strPKId))) {
						if (strPKId.startsWith("AS")) {
							updFinGoalsListAS.add(new FnaFingoalsconcern(strArrFnaGoalId[id], fnaselfspsDets,
									strArrFinGoalType[id], strArrFinGoal[id], strArrFinGoalPrio[id], strLoggedUser,
									new Date(), strLoggedUser, new Date()));
						} else {
							updFinGoalsList.add(new FnaFingoalsconcern(strArrFnaGoalId[id], fnaselfspsDets,
									strArrFinGoalType[id], strArrFinGoal[id], strArrFinGoalPrio[id], strArrFGCrtdBy[id],
									crtdDate, strLoggedUser, new Date()));
						}

					}

					if (strArrFinGoalsMode[id].equalsIgnoreCase(FipaConstant.DELETE_MODE)) {
						delFinGoalsList.add(new FnaFingoalsconcern(strArrFnaGoalId[id], fnaselfspsDets,
								strArrFinGoalType[id], strArrFinGoal[id], strArrFinGoalPrio[id], strArrFGCrtdBy[id],
								crtdDate, strLoggedUser, new Date()));

					}
				}
			}

			vectFinGoalsDetails.add(insFinGoalsList);
			vectFinGoalsDetails.add(updFinGoalsList);
			vectFinGoalsDetails.add(delFinGoalsList);
			vectFinGoalsDetails.add(updFinGoalsListAS);

		} catch (Exception ex) {
			logger.error("Error in getFinGoalsDetails ->", ex);
		}
		return vectFinGoalsDetails;

	}

	public Vector getOthAreaConrnDetails(HttpServletRequest request) {

		Vector vectOthConcnDetails = new Vector();
		List insOthConcnList = new ArrayList();
		List updOthConcnList = new ArrayList();
		List updOthConcnListAS = new ArrayList();
		List delOthConcnList = new ArrayList();

		HttpSession session = request.getSession(false);
		Map<String, String> sessMap = new HashMap<String, String>();
		sessMap = (HashMap<String, String>) session.getAttribute(FipaConstant.LOGGED_USER_INFO);

		try {

			String[] strArrOthConcnMode = FipaUtils.getParamArrValue(request, "txtFldarcMode");
			String[] strArrFnaOacId = FipaUtils.getParamArrValue(request, "txtFldFnaOacId");
			String[] strArrOthAreaConcern = FipaUtils.getParamArrValue(request, "txtFldOthAreaConcern");
			String[] strArrFgCrtdBy = FipaUtils.getParamArrValue(request, "txtFldFgCrtdBy");
			String[] strArrFgCrtdDate = FipaUtils.getParamArrValue(request, "txtFldFgCrtdDate");

			String strFNAId = FipaUtils.getParamValue(request, "fnaId");
			String strLoggedUser = (String) sessMap.get(FipaConstant.LOGGED_USER_ID);

			if (strArrOthConcnMode != null && strArrOthConcnMode.length > 0) {

				for (int id = 0; id < strArrOthConcnMode.length; id++) {

					Date crtdDate = FipaUtils.nullOrBlank(strArrFgCrtdDate[id]) ? new Date()
							: FipaDateUtils.convertStringToDate(strArrFgCrtdDate[id]);

					FnaSelfspouseDets fnaselfspsDets = new FnaSelfspouseDets();
					fnaselfspsDets.setFnaId(strFNAId);

					String strPKId = FipaUtils.nullOrBlank(strArrFnaOacId[id]) ? "" : strArrFnaOacId[id];

					if (strArrOthConcnMode[id].equalsIgnoreCase(FipaConstant.INSERT_MODE)
							&& FipaUtils.nullOrBlank(strPKId)) {
						insOthConcnList.add(new FnaOthareaconcern(null, null, strArrOthAreaConcern[id], strLoggedUser,
								new Date(), null, null));
					}

					if (strArrOthConcnMode[id].equalsIgnoreCase(FipaConstant.UPDATE_MODE)
							|| (strArrOthConcnMode[id].equalsIgnoreCase(FipaConstant.INSERT_MODE)
									&& !FipaUtils.nullOrBlank(strPKId))) {
						if (strPKId.startsWith("AS")) {
							updOthConcnListAS.add(new FnaOthareaconcern(strArrFnaOacId[id], fnaselfspsDets,
									strArrOthAreaConcern[id], strLoggedUser, new Date(), strLoggedUser, new Date()));
						} else {
							updOthConcnList.add(new FnaOthareaconcern(strArrFnaOacId[id], fnaselfspsDets,
									strArrOthAreaConcern[id], strArrFgCrtdBy[id], crtdDate, strLoggedUser, new Date()));
						}

					}

					if (strArrOthConcnMode[id].equalsIgnoreCase(FipaConstant.DELETE_MODE)) {
						delOthConcnList.add(new FnaOthareaconcern(strArrFnaOacId[id], fnaselfspsDets,
								strArrOthAreaConcern[id], strArrFgCrtdBy[id], crtdDate, strLoggedUser, new Date()));
					}
				}
			}

			vectOthConcnDetails.add(insOthConcnList);
			vectOthConcnDetails.add(updOthConcnList);
			vectOthConcnDetails.add(delOthConcnList);
			vectOthConcnDetails.add(updOthConcnListAS);
		} catch (Exception ex) {
			logger.error("Error in getOthAreaConrnDetails ->", ex);
		}

		return vectOthConcnDetails;

	}

	private Vector getReasonsDetails(HttpServletRequest request) {

		Vector vectResonDetails = new Vector();
		List insResonList = new ArrayList();
		List updResonList = new ArrayList();
		List updResonListAS = new ArrayList();
		List delResonList = new ArrayList();

		HttpSession session = request.getSession(false);
		Map<String, String> sessMap = new HashMap<String, String>();
		sessMap = (HashMap<String, String>) session.getAttribute(FipaConstant.LOGGED_USER_INFO);

		try {

			String[] strArrReasonMode = FipaUtils.getParamArrValue(request, "txtFldreasnMode");
			String[] strArrReasonId = FipaUtils.getParamArrValue(request, "txtFldFnaReasId");
			String[] strArrReason = FipaUtils.getParamArrValue(request, "txtFldReasons");
			String[] strArrRsnCrtdBy = FipaUtils.getParamArrValue(request, "txtFldRecCrtdBy");
			String[] strArrRsnCrtdDate = FipaUtils.getParamArrValue(request, "txtFldRecCrtdDate");

			String strFNAId = FipaUtils.getParamValue(request, "fnaId");
			String strLoggedUser = (String) sessMap.get(FipaConstant.LOGGED_USER_ID);

			if (strArrReasonMode != null && strArrReasonMode.length > 0) {

				for (int id = 0; id < strArrReasonMode.length; id++) {

					Date crtdDate = FipaUtils.nullOrBlank(strArrRsnCrtdDate[id]) ? new Date()
							: FipaDateUtils.convertStringToDate(strArrRsnCrtdDate[id]);

					FnaSelfspouseDets fnaselfspsDets = new FnaSelfspouseDets();
					fnaselfspsDets.setFnaId(strFNAId);
					String strPKId = FipaUtils.nullOrBlank(strArrReasonId[id]) ? "" : strArrReasonId[id];

					if (strArrReasonMode[id].equalsIgnoreCase(FipaConstant.INSERT_MODE)
							&& FipaUtils.nullOrBlank(strPKId)) {
						insResonList.add(new FnaRecomReasons(null, null, strArrReason[id], strLoggedUser, new Date(),
								null, null));

					}

					if (strArrReasonMode[id].equalsIgnoreCase(FipaConstant.UPDATE_MODE)
							|| (strArrReasonMode[id].equalsIgnoreCase(FipaConstant.INSERT_MODE)
									&& !FipaUtils.nullOrBlank(strPKId))) {
						if (strPKId.startsWith("AS")) {
							updResonListAS.add(new FnaRecomReasons(strArrReasonId[id], fnaselfspsDets, strArrReason[id],
									strLoggedUser, new Date(), strLoggedUser, new Date()));
						} else {
							updResonList.add(new FnaRecomReasons(strArrReasonId[id], fnaselfspsDets, strArrReason[id],
									strArrRsnCrtdBy[id], crtdDate, strLoggedUser, new Date()));
						}

					}

					if (strArrReasonMode[id].equalsIgnoreCase(FipaConstant.DELETE_MODE)) {
						delResonList.add(new FnaRecomReasons(strArrReasonId[id], fnaselfspsDets, strArrReason[id],
								strArrRsnCrtdBy[id], crtdDate, strLoggedUser, new Date()));

					}
				}
			}

			vectResonDetails.add(insResonList);
			vectResonDetails.add(updResonList);
			vectResonDetails.add(delResonList);
			vectResonDetails.add(updResonListAS);

		} catch (Exception ex) {
			logger.error("Error in getReasonsDetails ->", ex);
		}
		return vectResonDetails;

	}

	public Vector getRetCpfLifeDetails(HttpServletRequest request) {

		Vector vectCpfLifeDetails = new Vector();
		List insCpfLifeList = new ArrayList();
		List updCpfLifeList = new ArrayList();
		List updCpfLifeListAS = new ArrayList();
		List delCpfLifeList = new ArrayList();

		HttpSession session = request.getSession(false);
		Map<String, String> sessMap = new HashMap<String, String>();
		sessMap = (HashMap<String, String>) session.getAttribute(FipaConstant.LOGGED_USER_INFO);

		try {

			String[] strArrCpfLifeMode = FipaUtils.getParamArrValue(request, "txtFldcpfLfeMode");
			String[] strArrCpfLifeId = FipaUtils.getParamArrValue(request, "txtFldcpfLfeId");
			String[] strArrCpfLifeAge = FipaUtils.getParamArrValue(request, "txtFldCpfLifeAge");
			String[] strArrCpfLifeTypes = FipaUtils.getParamArrValue(request, "txtFldCpfLifeTypes");
			String[] strArrCpfLifePrem = FipaUtils.getParamArrValue(request, "txtFldCpfLifePrem");
			String[] strArrCpfLifePayoutInc = FipaUtils.getParamArrValue(request, "txtFldCpfLifePayoutInc");
			String[] strArrCpfLifeFdTrans = FipaUtils.getParamArrValue(request, "txtFldCpfLifeFdTrans");

			String strFNAId = FipaUtils.getParamValue(request, "fnaId");
			String strLoggedUser = (String) sessMap.get(FipaConstant.LOGGED_USER_ID);

			if (strArrCpfLifeMode != null && strArrCpfLifeMode.length > 0) {

				for (int id = 0; id < strArrCpfLifeMode.length; id++) {

					double dlbCPFLifePremAmt = Double
							.parseDouble(FipaUtils.nullOrBlank(strArrCpfLifePrem[id]) ? "0" : strArrCpfLifePrem[id]);
					double dlbCPFLifeInc = Double.parseDouble(
							FipaUtils.nullOrBlank(strArrCpfLifePayoutInc[id]) ? "0" : strArrCpfLifePayoutInc[id]);
					double dlbCPFLifeFdTrans = Double.parseDouble(
							FipaUtils.nullOrBlank(strArrCpfLifeFdTrans[id]) ? "0" : strArrCpfLifeFdTrans[id]);

					FnaSelfspouseDets fnaselfspsDets = new FnaSelfspouseDets();
					fnaselfspsDets.setFnaId(strFNAId);
					String strPKId = FipaUtils.nullOrBlank(strArrCpfLifeId[id]) ? "" : strArrCpfLifeId[id];

					if (strArrCpfLifeMode[id].equalsIgnoreCase(FipaConstant.INSERT_MODE)
							&& FipaUtils.nullOrBlank(strPKId)) {
						insCpfLifeList.add(new FnaRetireplanCpflife(null, null, strArrCpfLifeAge[id],
								strArrCpfLifeTypes[id], dlbCPFLifePremAmt, dlbCPFLifeInc, dlbCPFLifeFdTrans));

					}

					if (strArrCpfLifeMode[id].equalsIgnoreCase(FipaConstant.UPDATE_MODE)
							|| (strArrCpfLifeMode[id].equalsIgnoreCase(FipaConstant.INSERT_MODE)
									&& !FipaUtils.nullOrBlank(strPKId))) {
						if (strPKId.startsWith("AS")) {
							updCpfLifeListAS.add(new FnaRetireplanCpflife(strArrCpfLifeId[id], fnaselfspsDets,
									strArrCpfLifeAge[id], strArrCpfLifeTypes[id], dlbCPFLifePremAmt, dlbCPFLifeInc,
									dlbCPFLifeFdTrans));
						} else {
							updCpfLifeList.add(new FnaRetireplanCpflife(strArrCpfLifeId[id], fnaselfspsDets,
									strArrCpfLifeAge[id], strArrCpfLifeTypes[id], dlbCPFLifePremAmt, dlbCPFLifeInc,
									dlbCPFLifeFdTrans));
						}

					}

					if (strArrCpfLifeMode[id].equalsIgnoreCase(FipaConstant.DELETE_MODE)) {
						delCpfLifeList
								.add(new FnaRetireplanCpflife(strArrCpfLifeId[id], fnaselfspsDets, strArrCpfLifeAge[id],
										strArrCpfLifeTypes[id], dlbCPFLifePremAmt, dlbCPFLifeInc, dlbCPFLifeFdTrans));

					}
				}
			}

			vectCpfLifeDetails.add(insCpfLifeList);
			vectCpfLifeDetails.add(updCpfLifeList);
			vectCpfLifeDetails.add(delCpfLifeList);
			vectCpfLifeDetails.add(updCpfLifeListAS);

		} catch (Exception ex) {
			logger.error("Error in getRetCpfLifeDetails ->", ex);
		}
		return vectCpfLifeDetails;

	}

	private Vector getAutoAlterDetails(HttpServletRequest request) {

		Vector vectAtoAltDets = new Vector();
		List insAtoAltList = new ArrayList();
		List updAtoAltList = new ArrayList();
		List updAtoAltListAS = new ArrayList();

		HttpSession session = request.getSession(false);
		Map<String, String> sessMap = new HashMap<String, String>();
		sessMap = (HashMap<String, String>) session.getAttribute(FipaConstant.LOGGED_USER_INFO);
		try {

			String[] strArrAtoAltMode = FipaUtils.getParamArrValue(request, "altMode");
			String[] strArrAtoAltId = FipaUtils.getParamArrValue(request, "altId");
			String[] strArrAtoAltScrName = FipaUtils.getParamArrValue(request, "modelUid");
			String[] strArrAtoAltAttrName = FipaUtils.getParamArrValue(request, "attrName");
			String[] strArrAtoAltOrgName = FipaUtils.getParamArrValue(request, "attrOrgValue");
			String[] strArrAtoAltNewName = FipaUtils.getParamArrValue(request, "attrNewValue");
			String[] strArrAtoAltCrtdBy = FipaUtils.getParamArrValue(request, "attrCrtdBy");
			String[] strArrAtoAltCrtdDate = FipaUtils.getParamArrValue(request, "attrCrtdDate");

			String strFNAId = FipaUtils.getParamValue(request, "fnaId");
			String strLoggedUser = (String) sessMap.get(FipaConstant.LOGGED_USER_ID);

			if (strArrAtoAltMode != null && strArrAtoAltMode.length > 0) {

				for (int id = 0; id < strArrAtoAltMode.length; id++) {

					Date crtdDate = FipaUtils.nullOrBlank(strArrAtoAltCrtdDate[id]) ? new Date()
							: FipaDateUtils.convertStringToDate(strArrAtoAltCrtdDate[id]);

					String strPKId = FipaUtils.nullOrBlank(strArrAtoAltId[id]) ? "" : strArrAtoAltId[id];

					if (strArrAtoAltMode[id].equalsIgnoreCase(FipaConstant.INSERT_MODE)
							&& FipaUtils.nullOrBlank(strPKId)) {
						insAtoAltList
								.add(new FnaAutoAlter(null, null, strArrAtoAltScrName[id], strArrAtoAltAttrName[id],
										strArrAtoAltOrgName[id], strArrAtoAltNewName[id], strLoggedUser, new Date()));

					}

					if (strArrAtoAltMode[id].equalsIgnoreCase(FipaConstant.UPDATE_MODE)
							|| (strArrAtoAltMode[id].equalsIgnoreCase(FipaConstant.INSERT_MODE)
									&& !FipaUtils.nullOrBlank(strPKId))) {
						if (strPKId.startsWith("AS")) {
							updAtoAltListAS.add(new FnaAutoAlter(strArrAtoAltId[id], strFNAId, strArrAtoAltScrName[id],
									strArrAtoAltAttrName[id], strArrAtoAltOrgName[id], strArrAtoAltNewName[id],
									strLoggedUser, new Date()));

						} else {
							updAtoAltList.add(new FnaAutoAlter(strArrAtoAltId[id], strFNAId, strArrAtoAltScrName[id],
									strArrAtoAltAttrName[id], strArrAtoAltOrgName[id], strArrAtoAltNewName[id],
									strArrAtoAltCrtdBy[id], crtdDate));

						}

					}

				}
			}

			vectAtoAltDets.add(insAtoAltList);
			vectAtoAltDets.add(updAtoAltList);
			vectAtoAltDets.add(updAtoAltListAS);
		} catch (Exception ex) {
			logger.error("Error in getAutoAlterDetails ->", ex);
		}

		return vectAtoAltDets;

	}

	private Vector getAnalysisTypes(HttpServletRequest request) {

		Vector vectAnalysisType = new Vector();
		List insFinGoalsList = new ArrayList();
		List updFinGoalsList = new ArrayList();
		List delFinGoalsList = new ArrayList();

		HttpSession session = request.getSession(false);
		Map<String, String> sessMap = new HashMap<String, String>();
		sessMap = (HashMap<String, String>) session.getAttribute(FipaConstant.LOGGED_USER_INFO);

		try {

			String[] strArrAppTypeId = FipaUtils.getParamArrValue(request, "txtFldAppTypeIds");
			String[] strArrAnalysis = FipaUtils.getParamArrValue(request, "analysis");

			String strFNAId = FipaUtils.getParamValue(request, "fnaId");
			String strLoggedUser = (String) session.getAttribute(FipaConstant.LOGGED_USER_ID);

			if (strArrAnalysis != null && strArrAnalysis.length > 0) {

				FnaSelfspouseDets fnaselfspsDets = new FnaSelfspouseDets();
				fnaselfspsDets.setFnaId(strFNAId);

				for (int id = 0; id < strArrAnalysis.length; id++) {

					MasterAnalysisTypes fnaAnalysis = new MasterAnalysisTypes();
					fnaAnalysis.setAnaPkid(strArrAnalysis[id]);

					if (!FipaUtils.nullObj(strArrAppTypeId[id]) && !FipaUtils.nullOrBlank(strArrAnalysis[id])
							&& !FipaUtils.nullOrBlank(strFNAId)) {
						delFinGoalsList.add(new FnaApptypes(strArrAppTypeId[id], fnaAnalysis, fnaselfspsDets,
								strLoggedUser, new Date()));
						insFinGoalsList
								.add(new FnaApptypes(null, fnaAnalysis, fnaselfspsDets, strLoggedUser, new Date()));
					} else {
						insFinGoalsList
								.add(new FnaApptypes(null, fnaAnalysis, fnaselfspsDets, strLoggedUser, new Date()));
					}

				}

			}
			vectAnalysisType.add(insFinGoalsList);
			vectAnalysisType.add(updFinGoalsList);
			vectAnalysisType.add(delFinGoalsList);
		} catch (Exception ex) {
			logger.error("Error in getAnalysisTypes ->", ex);
		}

		return vectAnalysisType;

	}

	public Vector getSavingsInvDetails(HttpServletRequest request) {

		Vector vectSAInvDetails = new Vector();
		List insSAInvList = new ArrayList();
		List updSAInvList = new ArrayList();
		List updSAInvListAS = new ArrayList();
		List delSAInvList = new ArrayList();

		HttpSession session = request.getSession(false);
		Map<String, String> sessMap = new HashMap<String, String>();
		sessMap = (HashMap<String, String>) session.getAttribute(FipaConstant.LOGGED_USER_INFO);

		try {

			String[] strArrSAInvMode = FipaUtils.getParamArrValue(request, "txtFldwlthaccMode");
			String[] strArrSAInvId = FipaUtils.getParamArrValue(request, "txtFldSAInvId");
			String[] strArrSAInvPurpose = FipaUtils.getParamArrValue(request, "txtFldSAPurpose");
			String[] strArrSAInvWhen = FipaUtils.getParamArrValue(request, "txtFldSAWhen");
			String[] strArrSAInvAmt = FipaUtils.getParamArrValue(request, "txtFldSAmount");
			String[] strArrSAInvCrdtBy = FipaUtils.getParamArrValue(request, "txtFldSACrtdBy");
			String[] strArrSAInvCrdtDate = FipaUtils.getParamArrValue(request, "txtFldSACrtdDate");
			String[] strArrselSAPriority = FipaUtils.getParamArrValue(request, "selSAPriority");
			String[] strArrselSARiskLvl = FipaUtils.getParamArrValue(request, "selSARiskLvl");

			String strFNAId = FipaUtils.getParamValue(request, "fnaId");
			String strLoggedUser = (String) sessMap.get(FipaConstant.LOGGED_USER_ID);

			if (strArrSAInvMode != null && strArrSAInvMode.length > 0) {

				for (int id = 0; id < strArrSAInvMode.length; id++) {

					double dblSAInvAmt = Double
							.parseDouble(FipaUtils.nullOrBlank(strArrSAInvAmt[id]) ? "0" : strArrSAInvAmt[id]);

					double dblSAInvWhen = Double
							.parseDouble(FipaUtils.nullOrBlank(strArrSAInvWhen[id]) ? "0" : strArrSAInvWhen[id]);

					Date crtdDate = FipaUtils.nullOrBlank(strArrSAInvCrdtDate[id]) ? new Date()
							: FipaDateUtils.convertStringToDate(strArrSAInvCrdtDate[id]);

					FnaSelfspouseDets fnaselfspsDets = new FnaSelfspouseDets();
					fnaselfspsDets.setFnaId(strFNAId);

					String strPKId = FipaUtils.nullOrBlank(strArrSAInvId[id]) ? "" : strArrSAInvId[id];

					if (strArrSAInvMode[id].equalsIgnoreCase(FipaConstant.INSERT_MODE)
							&& FipaUtils.nullOrBlank(strPKId)) {
						insSAInvList.add(new FnaSavingsinvDets(null, null, strArrSAInvPurpose[id], dblSAInvWhen,
								dblSAInvAmt, strArrselSAPriority[id], strArrselSARiskLvl[id], strLoggedUser, new Date(),
								null, null));

					}

					if (strArrSAInvMode[id].equalsIgnoreCase(FipaConstant.UPDATE_MODE)
							|| (strArrSAInvMode[id].equalsIgnoreCase(FipaConstant.INSERT_MODE)
									&& !FipaUtils.nullOrBlank(strPKId))) {
						if (strPKId.startsWith("AS")) {
							updSAInvListAS.add(new FnaSavingsinvDets(strArrSAInvId[id], fnaselfspsDets,
									strArrSAInvPurpose[id], dblSAInvWhen, dblSAInvAmt, strArrselSAPriority[id],
									strArrselSARiskLvl[id], strLoggedUser, new Date(), strLoggedUser, new Date()));
						} else {
							updSAInvList.add(
									new FnaSavingsinvDets(strArrSAInvId[id], fnaselfspsDets, strArrSAInvPurpose[id],
											dblSAInvWhen, dblSAInvAmt, strArrselSAPriority[id], strArrselSARiskLvl[id],
											strArrSAInvCrdtBy[id], crtdDate, strLoggedUser, new Date()));
						}

					}

					if (strArrSAInvMode[id].equalsIgnoreCase(FipaConstant.DELETE_MODE)) {
						delSAInvList.add(new FnaSavingsinvDets(strArrSAInvId[id], fnaselfspsDets,
								strArrSAInvPurpose[id], dblSAInvWhen, dblSAInvAmt, strArrselSAPriority[id],
								strArrselSARiskLvl[id], strArrSAInvCrdtBy[id], crtdDate, strLoggedUser, new Date()));

					}
				}
			}

			vectSAInvDetails.add(insSAInvList);
			vectSAInvDetails.add(updSAInvList);
			vectSAInvDetails.add(delSAInvList);
			vectSAInvDetails.add(updSAInvListAS);
		} catch (Exception ex) {
			logger.error("Error in getSavingsInvDetails ->", ex);
		}

		return vectSAInvDetails;

	}

	public Vector getVehOwnDetails(HttpServletRequest request) {
		// TODO Auto-generated method stub

		Vector vectVehDetails = new Vector();
		List insVehList = new ArrayList();
		List updVehList = new ArrayList();
		List updVehListAS = new ArrayList();
		List delVehList = new ArrayList();

		HttpSession session = request.getSession(false);
		Map<String, String> sessMap = new HashMap<String, String>();
		sessMap = (HashMap<String, String>) session.getAttribute(FipaConstant.LOGGED_USER_INFO);

		try {
			String[] strArrVehMode = FipaUtils.getParamArrValue(request, "txtFldvehMode");
			String[] strArrVehId = FipaUtils.getParamArrValue(request, "txtFldVehId");
			String[] strArrVehOwner = FipaUtils.getParamArrValue(request, "txtFldVehOwner");
			String[] strArrVehMktVal = FipaUtils.getParamArrValue(request, "txtFldVehMktVal");
			String[] strArrVehLnVal = FipaUtils.getParamArrValue(request, "txtFldVehLnVal");
			String[] strArrVehLnBank = FipaUtils.getParamArrValue(request, "txtFldVehLnBank");
			String[] strArrVehPerd = FipaUtils.getParamArrValue(request, "txtFldVehPerd");

			String[] strArrVehMthInstl = FipaUtils.getParamArrValue(request, "txtFldVehiMonthInstal");
			String[] strArrVehSoldonDth = FipaUtils.getParamArrValue(request, "txtFldVehiSoldOnDeath");

			String[] strArrVehRmk = FipaUtils.getParamArrValue(request, "txtFldVehRemark");

			String[] strArrVehCrtdBy = FipaUtils.getParamArrValue(request, "txtFldVehCrtdBy");
			String[] strArrVehCrtdDate = FipaUtils.getParamArrValue(request, "txtFldVehCrtdDate");

			String strFNAId = FipaUtils.getParamValue(request, "fnaId");
			String strLoggedUser = (String) sessMap.get(FipaConstant.LOGGED_USER_ID);

			if (strArrVehMode != null && strArrVehMode.length > 0) {

				for (int id = 0; id < strArrVehMode.length; id++) {

					double dblVehMktVal = Double
							.parseDouble(FipaUtils.nullOrBlank(strArrVehMktVal[id]) ? "0" : strArrVehMktVal[id]);
					double dblLnVal = Double
							.parseDouble(FipaUtils.nullOrBlank(strArrVehLnVal[id]) ? "0" : strArrVehLnVal[id]);
					double dblMthInstl = Double
							.parseDouble(FipaUtils.nullOrBlank(strArrVehMthInstl[id]) ? "0" : strArrVehMthInstl[id]);
					double dlbVehPerd = Double
							.parseDouble(FipaUtils.nullOrBlank(strArrVehPerd[id]) ? "0" : strArrVehPerd[id]);

					Date crtdDate = FipaUtils.nullOrBlank(strArrVehCrtdDate[id]) ? new Date()
							: FipaDateUtils.convertStringToDate(strArrVehCrtdDate[id]);

					FnaSelfspouseDets fnaselfspsDets = new FnaSelfspouseDets();
					fnaselfspsDets.setFnaId(strFNAId);

					String strPKId = FipaUtils.nullOrBlank(strArrVehId[id]) ? "" : strArrVehId[id];

					if (strArrVehMode[id].equalsIgnoreCase(FipaConstant.INSERT_MODE)
							&& FipaUtils.nullOrBlank(strPKId)) {
						insVehList.add(new FnaVehicleownDets(null, null, strArrVehOwner[id], dblVehMktVal, dblLnVal,
								strArrVehLnBank[id], dlbVehPerd, dblMthInstl, strArrVehSoldonDth[id], strArrVehRmk[id],
								strLoggedUser, new Date()));

					}

					if (strArrVehMode[id].equalsIgnoreCase(FipaConstant.UPDATE_MODE)
							|| (strArrVehMode[id].equalsIgnoreCase(FipaConstant.INSERT_MODE)
									&& !FipaUtils.nullOrBlank(strPKId))) {
						if (strPKId.startsWith("AS")) {
							updVehListAS.add(new FnaVehicleownDets(strArrVehId[id], fnaselfspsDets, strArrVehOwner[id],
									dblVehMktVal, dblLnVal, strArrVehLnBank[id], dlbVehPerd, dblMthInstl,
									strArrVehSoldonDth[id], strArrVehRmk[id], strLoggedUser, new Date()));

						} else {
							updVehList.add(new FnaVehicleownDets(strArrVehId[id], fnaselfspsDets, strArrVehOwner[id],
									dblVehMktVal, dblLnVal, strArrVehLnBank[id], dlbVehPerd, dblMthInstl,
									strArrVehSoldonDth[id], strArrVehRmk[id], strArrVehCrtdBy[id], crtdDate));

						}

					}

					if (strArrVehMode[id].equalsIgnoreCase(FipaConstant.DELETE_MODE)) {
						delVehList.add(new FnaVehicleownDets(strArrVehId[id], fnaselfspsDets, strArrVehOwner[id],
								dblVehMktVal, dblLnVal, strArrVehLnBank[id], dlbVehPerd, dblMthInstl,
								strArrVehSoldonDth[id], strArrVehRmk[id], strArrVehCrtdBy[id], crtdDate));
					}
				}
			}

			vectVehDetails.add(insVehList);
			vectVehDetails.add(updVehList);
			vectVehDetails.add(delVehList);
			vectVehDetails.add(updVehListAS);
		} catch (Exception ex) {
			logger.error("Error in getVehOwnDetails ->", ex);
		}

		return vectVehDetails;
	}

	public Vector getPropOwnDetails(HttpServletRequest request) {
		// TODO Auto-generated method stub

		Vector vectPropDetails = new Vector();
		List insPropList = new ArrayList();
		List updPropList = new ArrayList();
		List updPropListAS = new ArrayList();
		List delPropList = new ArrayList();

		HttpSession session = request.getSession(false);
		Map<String, String> sessMap = new HashMap<String, String>();
		sessMap = (HashMap<String, String>) session.getAttribute(FipaConstant.LOGGED_USER_INFO);

		try {
			String strFNAId = FipaUtils.getParamValue(request, "fnaId");
			String strLoggedUser = (String) sessMap.get(FipaConstant.LOGGED_USER_ID);

			String[] strArrPropCpfMode = FipaUtils.getParamArrValue(request, "txtFldpropMode");
			String[] strArrPropCpfOwnId = FipaUtils.getParamArrValue(request, "txtFldPropCpfOwnId");
			String[] strArrPropCpfOwnDesc = FipaUtils.getParamArrValue(request, "txtFldPropCpfOwnDesc");
			String[] strArrPropCpfMortageos = FipaUtils.getParamArrValue(request, "txtFldPropCpfMortageos");
			String[] strArrPropCpfOwnership = FipaUtils.getParamArrValue(request, "txtFldPropCpfOwnership");
			String[] strArrPropCpfApprecrate = FipaUtils.getParamArrValue(request, "txtFldPropCpfApprecrate");
			String[] strArrPropCpfObj = FipaUtils.getParamArrValue(request, "txtFldPropCpfObj");
			String[] strArrPropCurAnlRetInc = FipaUtils.getParamArrValue(request, "txtFldPropCurAnlRetInc");
			String[] strArrPropCpfOsloanPerd = FipaUtils.getParamArrValue(request, "txtFldPropCpfOsloanPerd");
			String[] strArrPropCpfMktVal = FipaUtils.getParamArrValue(request, "txtFldPropCpfMktVal");
			// String[] strArrPropCpfYrstoPay = FipaUtils.getParamArrValue(request,
			// "txtFldPropCpfYrstoPay");
			String[] strArrPropCpfSold = FipaUtils.getParamArrValue(request, "txtFldPropCpfSold");
			String[] strArrPropCpfLoanCash = FipaUtils.getParamArrValue(request, "txtFldPropCpfLoanCash");
			String[] strArrPropCpfCrtdBy = FipaUtils.getParamArrValue(request, "txtFldPropCpfCrtdBy");
			String[] strArrPropCpfCrtdDate = FipaUtils.getParamArrValue(request, "txtFldPropCpfCrtdDate");
			String[] strArrPropCpfLnBySlfCpf = FipaUtils.getParamArrValue(request, "txtFldPropCpfLoanBySlfCpf");
			String[] strArrPropCpfLnBySlfCash = FipaUtils.getParamArrValue(request, "txtFldPropCpfLoanBySlfCash");
			String[] strArrPropCpfLnBySpsCpf = FipaUtils.getParamArrValue(request, "txtFldPropCpfLoanBySpsCpf");
			String[] strArrPropCpfLnBySpsCash = FipaUtils.getParamArrValue(request, "txtFldPropCpfLoanBySpsCash");
			String[] strArrPropRentOnRet = FipaUtils.getParamArrValue(request, "txtFldPropRentOnRetire");
			String[] strArrPropCurRetInc = FipaUtils.getParamArrValue(request, "txtFldPropCurRetInc");
			String[] strArrPropYrsToRent = FipaUtils.getParamArrValue(request, "txtFldPropYrsToRent");
			String[] strArrPropFvOnRent = FipaUtils.getParamArrValue(request, "txtFldPropFvOnRent");
			String[] strArrPropRentPerd = FipaUtils.getParamArrValue(request, "txtFldPropRentPerd");

			String[] strArrPropRefId = FipaUtils.getParamArrValue(request, "txtFldPropRefId");

			if (strArrPropCpfMode != null && strArrPropCpfMode.length > 0) {

				for (int id = 0; id < strArrPropCpfMode.length; id++) {

					double dblPropCpfMktVal = Double.parseDouble(
							FipaUtils.nullOrBlank(strArrPropCpfMktVal[id]) ? "0" : strArrPropCpfMktVal[id]);
					double dblPropCpfMortageos = Double.parseDouble(
							FipaUtils.nullOrBlank(strArrPropCpfMortageos[id]) ? "0" : strArrPropCpfMortageos[id]);
					double dblPropCpfApprecrate = Double.parseDouble(
							FipaUtils.nullOrBlank(strArrPropCpfApprecrate[id]) ? "0" : strArrPropCpfApprecrate[id]);
					double dblPropCpfOsloanPerd = Double.parseDouble(
							FipaUtils.nullOrBlank(strArrPropCpfOsloanPerd[id]) ? "0" : strArrPropCpfOsloanPerd[id]);
					double dblPropCpfLoanCash = 0;
					double dblPropCpfYrstoPay = 0;
					double dblPropCurRetInc = Double.parseDouble(
							FipaUtils.nullOrBlank(strArrPropCurRetInc[id]) ? "0" : strArrPropCurRetInc[id]);
					double dblPropYrsToRent = Double.parseDouble(
							FipaUtils.nullOrBlank(strArrPropYrsToRent[id]) ? "0" : strArrPropYrsToRent[id]);

					double dblPropCurAnlRetInc = Double.parseDouble(
							FipaUtils.nullOrBlank(strArrPropCurAnlRetInc[id]) ? "0" : strArrPropCurAnlRetInc[id]);
					double dblPropCpfLnBySlfCpf = Double.parseDouble(
							FipaUtils.nullOrBlank(strArrPropCpfLnBySlfCpf[id]) ? "0" : strArrPropCpfLnBySlfCpf[id]);
					double dblPropCpfLnBySlfCash = Double.parseDouble(
							FipaUtils.nullOrBlank(strArrPropCpfLnBySlfCash[id]) ? "0" : strArrPropCpfLnBySlfCash[id]);
					double dblPropCpfLnBySpsCpf = Double.parseDouble(
							FipaUtils.nullOrBlank(strArrPropCpfLnBySpsCpf[id]) ? "0" : strArrPropCpfLnBySpsCpf[id]);
					double dblPropCpfLnBySpsCash = Double.parseDouble(
							FipaUtils.nullOrBlank(strArrPropCpfLnBySpsCash[id]) ? "0" : strArrPropCpfLnBySpsCash[id]);
					double dblPropLoancpf = 0;
					double dblPropMonthRentincome = 0;
					double dblPropFvOnRent = Double
							.parseDouble(FipaUtils.nullOrBlank(strArrPropFvOnRent[id]) ? "0" : strArrPropFvOnRent[id]);

					double dblPropRentPerd = Double
							.parseDouble(FipaUtils.nullOrBlank(strArrPropRentPerd[id]) ? "0" : strArrPropRentPerd[id]);

					Date crtdDate = FipaUtils.nullOrBlank(strArrPropCpfCrtdDate[id]) ? new Date()
							: FipaDateUtils.convertStringToDate(strArrPropCpfCrtdDate[id]);

					FnaSelfspouseDets fnaselfspsDets = new FnaSelfspouseDets();
					fnaselfspsDets.setFnaId(strFNAId);

					String strPKId = FipaUtils.nullOrBlank(strArrPropCpfOwnId[id]) ? "" : strArrPropCpfOwnId[id];

					if (strArrPropCpfMode[id].equalsIgnoreCase(FipaConstant.INSERT_MODE)
							&& FipaUtils.nullOrBlank(strPKId)) {
						insPropList.add(new FnaPropownDets(null, null, "CPF", strArrPropCpfOwnDesc[id],
								strArrPropCpfOwnership[id], dblPropCpfMktVal, dblPropCpfMortageos, strArrPropCpfObj[id],
								dblPropCpfApprecrate, dblPropCpfOsloanPerd, dblPropCpfLnBySlfCash,
								dblPropCpfLnBySpsCash, dblPropCpfLnBySlfCpf, dblPropCpfLnBySpsCpf,
								dblPropMonthRentincome, dblPropCpfYrstoPay, strArrPropCpfSold[id],
								strArrPropRentOnRet[id], dblPropCpfLoanCash, dblPropLoancpf, dblPropCurRetInc,
								dblPropCurAnlRetInc, dblPropYrsToRent, strLoggedUser, new Date(), null, null,
								strArrPropRefId[id], dblPropFvOnRent, dblPropRentPerd));

					}

					if (strArrPropCpfMode[id].equalsIgnoreCase(FipaConstant.UPDATE_MODE)
							|| (strArrPropCpfMode[id].equalsIgnoreCase(FipaConstant.INSERT_MODE)
									&& !FipaUtils.nullOrBlank(strPKId))) {

						if (strPKId.startsWith("AS")) {
							updPropListAS.add(new FnaPropownDets(strArrPropCpfOwnId[id], fnaselfspsDets, "CPF",
									strArrPropCpfOwnDesc[id], strArrPropCpfOwnership[id], dblPropCpfMktVal,
									dblPropCpfMortageos, strArrPropCpfObj[id], dblPropCpfApprecrate,
									dblPropCpfOsloanPerd, dblPropCpfLnBySlfCash, dblPropCpfLnBySpsCash,
									dblPropCpfLnBySlfCpf, dblPropCpfLnBySpsCpf, dblPropMonthRentincome,
									dblPropCpfYrstoPay, strArrPropCpfSold[id], strArrPropRentOnRet[id],
									dblPropCpfLoanCash, dblPropLoancpf, dblPropCurRetInc, dblPropCurAnlRetInc,
									dblPropYrsToRent, strLoggedUser, new Date(), strLoggedUser, new Date(),
									strArrPropRefId[id], dblPropFvOnRent, dblPropRentPerd));

						} else {
							updPropList.add(new FnaPropownDets(strArrPropCpfOwnId[id], fnaselfspsDets, "CPF",
									strArrPropCpfOwnDesc[id], strArrPropCpfOwnership[id], dblPropCpfMktVal,
									dblPropCpfMortageos, strArrPropCpfObj[id], dblPropCpfApprecrate,
									dblPropCpfOsloanPerd, dblPropCpfLnBySlfCash, dblPropCpfLnBySpsCash,
									dblPropCpfLnBySlfCpf, dblPropCpfLnBySpsCpf, dblPropMonthRentincome,
									dblPropCpfYrstoPay, strArrPropCpfSold[id], strArrPropRentOnRet[id],
									dblPropCpfLoanCash, dblPropLoancpf, dblPropCurRetInc, dblPropCurAnlRetInc,
									dblPropYrsToRent, strArrPropCpfCrtdBy[id], crtdDate, strLoggedUser, new Date(),
									strArrPropRefId[id], dblPropFvOnRent, dblPropRentPerd));

						}

					}

					if (strArrPropCpfMode[id].equalsIgnoreCase(FipaConstant.DELETE_MODE)) {
						delPropList.add(new FnaPropownDets(strArrPropCpfOwnId[id], fnaselfspsDets, "CPF",
								strArrPropCpfOwnDesc[id], strArrPropCpfOwnership[id], dblPropCpfMktVal,
								dblPropCpfMortageos, strArrPropCpfObj[id], dblPropCpfApprecrate, dblPropCpfOsloanPerd,
								dblPropCpfLnBySlfCash, dblPropCpfLnBySpsCash, dblPropCpfLnBySlfCpf,
								dblPropCpfLnBySpsCpf, dblPropMonthRentincome, dblPropCpfYrstoPay, strArrPropCpfSold[id],
								strArrPropRentOnRet[id], dblPropCpfLoanCash, dblPropLoancpf, dblPropCurRetInc,
								dblPropCurAnlRetInc, dblPropYrsToRent, strArrPropCpfCrtdBy[id], crtdDate, strLoggedUser,
								new Date(), strArrPropRefId[id], dblPropFvOnRent, dblPropRentPerd));

					}
				}
			}

			vectPropDetails.add(insPropList);
			vectPropDetails.add(updPropList);
			vectPropDetails.add(delPropList);
			vectPropDetails.add(updPropListAS);
		} catch (Exception ex) {
			logger.error("Error in getPropOwnDetails ->", ex);
		}
		return vectPropDetails;
	}

	public Vector getAssetDetails(HttpServletRequest request) {
		// TODO Auto-generated method stub

		Vector vectAsstDetails = new Vector();
		List insAsstList = new ArrayList();
		List updAsstList = new ArrayList();
		List updAsstListAS = new ArrayList();
		List delAsstList = new ArrayList();

		HttpSession session = request.getSession(false);
		Map<String, String> sessMap = new HashMap<String, String>();
		sessMap = (HashMap<String, String>) session.getAttribute(FipaConstant.LOGGED_USER_INFO);

		try {

			String[] strArrPerAsstMode = FipaUtils.getParamArrValue(request, "txtFldperastMode");
			String[] strArrBuisAsstMode = FipaUtils.getParamArrValue(request, "txtFldbusnastMode");

			String[] strArrPerBusiPerIdP = FipaUtils.getParamArrValue(request, "txtFldPerBusiPersId_P");

			String[] strArrPerAcctHolder = FipaUtils.getParamArrValue(request, "txtFldPerAcctHolder");
			String[] strArrPerEstApprValue = FipaUtils.getParamArrValue(request, "txtFldPerEstApprValue");
			String[] strArrPerTypeOfAsset = FipaUtils.getParamArrValue(request, "txtFldPerTypeOfAsset");
			String[] strArrPerYrs2keep = FipaUtils.getParamArrValue(request, "txtFldPerYrs2keep");
			String[] strArrPerNameOfAsset = FipaUtils.getParamArrValue(request, "txtFldPerNameOfAsset");
			String[] strArrPerChildEdnPrcnt = FipaUtils.getParamArrValue(request, "txtFldPerChildEdnPrcnt");
			String[] strArrPerPurInvValue = FipaUtils.getParamArrValue(request, "txtFldPerPurInvValue");
			String[] strArrPerRetPlanPrcnt = FipaUtils.getParamArrValue(request, "txtFldPerRetPlanPrcnt");
			String[] strArrPerCurrValue = FipaUtils.getParamArrValue(request, "txtFldPerCurrValue");
			String[] strArrPerRemarks = FipaUtils.getParamArrValue(request, "txtFldPerRemarks");
			String[] strArrPerOsValue = FipaUtils.getParamArrValue(request, "txtFldPerOsValue");
			String[] strArrPerCrtdBy = FipaUtils.getParamArrValue(request, "txtFldPerCrtdBy");
			String[] strArrPerCrtdDate = FipaUtils.getParamArrValue(request, "txtFldPerCrtdDate");

//		String[] strArrBuisBusiPerId    = FipaUtils.getParamArrValue(request, "txtFldBuisBusiPersId");
			String[] strArrPerBusiPerIdB = FipaUtils.getParamArrValue(request, "txtFldPerBusiPersId_B");
			String[] strArrBuisAcctHolder = FipaUtils.getParamArrValue(request, "txtFldBuisAcctHolder");
			String[] strArrBuisEstApprValue = FipaUtils.getParamArrValue(request, "txtFldBuisEstApprValue");
			String[] strArrBuisTypeOfAsset = FipaUtils.getParamArrValue(request, "txtFldBuisTypeOfAsset");
			String[] strArrBuisYrs2keep = FipaUtils.getParamArrValue(request, "txtFldBuisYrs2keep");
			String[] strArrBuisNameOfAsset = FipaUtils.getParamArrValue(request, "txtFldBuisNameOfAsset");
			String[] strArrBuisChildEdnPrcnt = FipaUtils.getParamArrValue(request, "txtFldBuisChildEdnPrcnt");
			String[] strArrBuisPurInvValue = FipaUtils.getParamArrValue(request, "txtFldBuisPurInvValue");
			String[] strArrBuisRetPlanPrcnt = FipaUtils.getParamArrValue(request, "txtFldBuisRetPlanPrcnt");
			String[] strArrBuisCurrValue = FipaUtils.getParamArrValue(request, "txtFldBuisCurrValue");
			String[] strArrBuisRemarks = FipaUtils.getParamArrValue(request, "txtFldBuisRemarks");
			String[] strArrBuisOsValue = FipaUtils.getParamArrValue(request, "txtFldBuisOsValue");
			String[] strArrBuisCrtdBy = FipaUtils.getParamArrValue(request, "txtFldBuisCrtdBy");
			String[] strArrBuisCrtdDate = FipaUtils.getParamArrValue(request, "txtFldBuisCrtdDate");

			String strFNAId = FipaUtils.getParamValue(request, "fnaId");
			String strLoggedUser = (String) sessMap.get(FipaConstant.LOGGED_USER_ID);

			if (strArrPerAsstMode != null && strArrPerAsstMode.length > 0) {

				for (int id = 0; id < strArrPerAsstMode.length; id++) {

					double dblPerEstApprValue = Double.parseDouble(
							FipaUtils.nullOrBlank(strArrPerEstApprValue[id]) ? "0" : strArrPerEstApprValue[id]);
					double dblPerPurInvValue = Double.parseDouble(
							FipaUtils.nullOrBlank(strArrPerPurInvValue[id]) ? "0" : strArrPerPurInvValue[id]);
					double dblPerCurrValue = Double
							.parseDouble(FipaUtils.nullOrBlank(strArrPerCurrValue[id]) ? "0" : strArrPerCurrValue[id]);
					double dblPerOsValue = Double
							.parseDouble(FipaUtils.nullOrBlank(strArrPerOsValue[id]) ? "0" : strArrPerOsValue[id]);

					double dblPerChildEdnPrcnt = Double.parseDouble(
							FipaUtils.nullOrBlank(strArrPerChildEdnPrcnt[id]) ? "0" : strArrPerChildEdnPrcnt[id]);
					double dblPerRetPlanPrcnt = Double.parseDouble(
							FipaUtils.nullOrBlank(strArrPerRetPlanPrcnt[id]) ? "0" : strArrPerRetPlanPrcnt[id]);

					Date crtdDate = FipaUtils.nullOrBlank(strArrPerCrtdDate[id]) ? new Date()
							: FipaDateUtils.convertStringToDate(strArrPerCrtdDate[id]);

					FnaSelfspouseDets fnaselfspsDets = new FnaSelfspouseDets();
					fnaselfspsDets.setFnaId(strFNAId);
					String strPKId = FipaUtils.nullOrBlank(strArrPerBusiPerIdP[id]) ? "" : strArrPerBusiPerIdP[id];

					if (strArrPerAsstMode[id].equalsIgnoreCase(FipaConstant.INSERT_MODE)
							&& FipaUtils.nullOrBlank(strPKId)) {
						insAsstList.add(new FnaAssetBusiandpersdets(null, null, "PERSONAL", strArrPerAcctHolder[id],
								strArrPerTypeOfAsset[id], strArrPerNameOfAsset[id], dblPerPurInvValue, dblPerCurrValue,
								dblPerOsValue, dblPerEstApprValue, strArrPerYrs2keep[id], dblPerChildEdnPrcnt,
								dblPerRetPlanPrcnt, strArrPerRemarks[id], strLoggedUser, new Date(), null, null));

					}

					if (strArrPerAsstMode[id].equalsIgnoreCase(FipaConstant.UPDATE_MODE)
							|| (strArrPerAsstMode[id].equalsIgnoreCase(FipaConstant.INSERT_MODE)
									&& !FipaUtils.nullOrBlank(strPKId))) {

						if (strPKId.startsWith("AS")) {
							updAsstListAS.add(new FnaAssetBusiandpersdets(strPKId, fnaselfspsDets, "PERSONAL",
									strArrPerAcctHolder[id], strArrPerTypeOfAsset[id], strArrPerNameOfAsset[id],
									dblPerPurInvValue, dblPerCurrValue, dblPerOsValue, dblPerEstApprValue,
									strArrPerYrs2keep[id], dblPerChildEdnPrcnt, dblPerRetPlanPrcnt,
									strArrPerRemarks[id], strLoggedUser, new Date(), strLoggedUser, new Date()));

						} else {
							updAsstList.add(new FnaAssetBusiandpersdets(strPKId, fnaselfspsDets, "PERSONAL",
									strArrPerAcctHolder[id], strArrPerTypeOfAsset[id], strArrPerNameOfAsset[id],
									dblPerPurInvValue, dblPerCurrValue, dblPerOsValue, dblPerEstApprValue,
									strArrPerYrs2keep[id], dblPerChildEdnPrcnt, dblPerRetPlanPrcnt,
									strArrPerRemarks[id], strArrPerCrtdBy[id], crtdDate, strLoggedUser, new Date()));

						}

					}

					if (strArrPerAsstMode[id].equalsIgnoreCase(FipaConstant.DELETE_MODE)) {
						delAsstList.add(new FnaAssetBusiandpersdets(strPKId, fnaselfspsDets, "PERSONAL",
								strArrPerAcctHolder[id], strArrPerTypeOfAsset[id], strArrPerNameOfAsset[id],
								dblPerPurInvValue, dblPerCurrValue, dblPerOsValue, dblPerEstApprValue,
								strArrPerYrs2keep[id], dblPerChildEdnPrcnt, dblPerRetPlanPrcnt, strArrPerRemarks[id],
								strArrPerCrtdBy[id], crtdDate, strLoggedUser, new Date()));

					}
				}
			}

//	if(strArrBuisAsstMode != null && strArrBuisAsstMode.length>0){

			if (strArrBuisAsstMode != null && strArrBuisAsstMode.length > 0) {

				for (int id = 0; id < strArrBuisAsstMode.length; id++) {

					double dblBuisEstApprValue = Double.parseDouble(
							FipaUtils.nullOrBlank(strArrBuisEstApprValue[id]) ? "0" : strArrBuisEstApprValue[id]);
					double dblBuisPurInvValue = Double.parseDouble(
							FipaUtils.nullOrBlank(strArrBuisPurInvValue[id]) ? "0" : strArrBuisPurInvValue[id]);
					double dblBuisCurrValue = Double.parseDouble(
							FipaUtils.nullOrBlank(strArrBuisCurrValue[id]) ? "0" : strArrBuisCurrValue[id]);
					double dblBuisOsValue = Double
							.parseDouble(FipaUtils.nullOrBlank(strArrBuisOsValue[id]) ? "0" : strArrBuisOsValue[id]);

					double dblBuisChildEdnPrcnt = Double.parseDouble(
							FipaUtils.nullOrBlank(strArrBuisChildEdnPrcnt[id]) ? "0" : strArrBuisChildEdnPrcnt[id]);
					double dblBuisRetPlanPrcnt = Double.parseDouble(
							FipaUtils.nullOrBlank(strArrBuisRetPlanPrcnt[id]) ? "0" : strArrBuisRetPlanPrcnt[id]);

					Date crtdDate = FipaUtils.nullOrBlank(strArrBuisCrtdDate[id]) ? new Date()
							: FipaDateUtils.convertStringToDate(strArrBuisCrtdDate[id]);

					FnaSelfspouseDets fnaselfspsDets = new FnaSelfspouseDets();
					fnaselfspsDets.setFnaId(strFNAId);

					String strPKId = FipaUtils.nullOrBlank(strArrPerBusiPerIdB[id]) ? "" : strArrPerBusiPerIdB[id];

					if (strArrBuisAsstMode[id].equalsIgnoreCase(FipaConstant.INSERT_MODE)
							&& FipaUtils.nullOrBlank(strPKId)) {
						insAsstList.add(new FnaAssetBusiandpersdets(null, null, "BUSINESS", strArrBuisAcctHolder[id],
								strArrBuisTypeOfAsset[id], strArrBuisNameOfAsset[id], dblBuisPurInvValue,
								dblBuisCurrValue, dblBuisOsValue, dblBuisEstApprValue, strArrBuisYrs2keep[id],
								dblBuisChildEdnPrcnt, dblBuisRetPlanPrcnt, strArrBuisRemarks[id], strLoggedUser,
								new Date(), null, null));

					}

					if (strArrBuisAsstMode[id].equalsIgnoreCase(FipaConstant.UPDATE_MODE)
							|| (strArrBuisAsstMode[id].equalsIgnoreCase(FipaConstant.INSERT_MODE)
									&& !FipaUtils.nullOrBlank(strPKId))) {
						if (strPKId.startsWith("AS")) {
							updAsstListAS.add(new FnaAssetBusiandpersdets(strPKId, fnaselfspsDets, "BUSINESS",
									strArrBuisAcctHolder[id], strArrBuisTypeOfAsset[id], strArrBuisNameOfAsset[id],
									dblBuisPurInvValue, dblBuisCurrValue, dblBuisOsValue, dblBuisEstApprValue,
									strArrBuisYrs2keep[id], dblBuisChildEdnPrcnt, dblBuisRetPlanPrcnt,
									strArrBuisRemarks[id], strLoggedUser, new Date(), strLoggedUser, new Date()));

						} else {
							updAsstList.add(new FnaAssetBusiandpersdets(strPKId, fnaselfspsDets, "BUSINESS",
									strArrBuisAcctHolder[id], strArrBuisTypeOfAsset[id], strArrBuisNameOfAsset[id],
									dblBuisPurInvValue, dblBuisCurrValue, dblBuisOsValue, dblBuisEstApprValue,
									strArrBuisYrs2keep[id], dblBuisChildEdnPrcnt, dblBuisRetPlanPrcnt,
									strArrBuisRemarks[id], strArrBuisCrtdBy[id], crtdDate, strLoggedUser, new Date()));

						}

					}

					if (strArrBuisAsstMode[id].equalsIgnoreCase(FipaConstant.DELETE_MODE)) {
						delAsstList.add(new FnaAssetBusiandpersdets(strPKId, fnaselfspsDets, "BUSINESS",
								strArrBuisAcctHolder[id], strArrBuisTypeOfAsset[id], strArrBuisNameOfAsset[id],
								dblBuisPurInvValue, dblBuisCurrValue, dblBuisOsValue, dblBuisEstApprValue,
								strArrBuisYrs2keep[id], dblBuisChildEdnPrcnt, dblBuisRetPlanPrcnt,
								strArrBuisRemarks[id], strArrBuisCrtdBy[id], crtdDate, strLoggedUser, new Date()));

					}
				}
			}
//	}

			vectAsstDetails.add(insAsstList);
			vectAsstDetails.add(updAsstList);
			vectAsstDetails.add(delAsstList);
			vectAsstDetails.add(updAsstListAS);

//		vectAsstDetails.add(insAsstList);
//		vectAsstDetails.add(updAsstList);
//		vectAsstDetails.add(delAsstList);	
//		vectAsstDetails.add(updAsstListAS);

		} catch (Exception ex) {
			logger.error("Error in getAssetDetails ->", ex);
		}

		return vectAsstDetails;
	}

	public Vector getHlthInsDetails(HttpServletRequest request) {
		// TODO Auto-generated method stub

		Vector vectHIDetails = new Vector();
		List insHIList = new ArrayList();
		List updHIList = new ArrayList();
		List updHIListAS = new ArrayList();
		List delHIList = new ArrayList();

		HttpSession session = request.getSession(false);
		Map<String, String> sessMap = new HashMap<String, String>();
		sessMap = (HashMap<String, String>) session.getAttribute(FipaConstant.LOGGED_USER_INFO);
		try {

			String[] strArrHIMode = FipaUtils.getParamArrValue(request, "txtFldhlthMode");
			String[] strArrHIId = FipaUtils.getParamArrValue(request, "txtFldHInsId");
			String[] strArrHIPol = FipaUtils.getParamArrValue(request, "txtFldHIPolicyType");
			String[] strArrHIIns = FipaUtils.getParamArrValue(request, "txtFldHIInsured");
			String[] strArrHIBenf = FipaUtils.getParamArrValue(request, "txtFldHIBenfType");
			String[] strArrHIAmt = FipaUtils.getParamArrValue(request, "txtFldHIAmt");
			String[] strArrHIExp = FipaUtils.getParamArrValue(request, "txtFldHIExpiry");
			String[] strArrHIAnnPrm = FipaUtils.getParamArrValue(request, "txtFldHIAnnprem");
			String[] strArrHIRmks = FipaUtils.getParamArrValue(request, "txtFldHIRmrks");
			String[] strArrHICrtdBy = FipaUtils.getParamArrValue(request, "txtFldHICrtdBy");
			String[] strArrHICrdtDate = FipaUtils.getParamArrValue(request, "txtFldHICrtdDate");

			String strFNAId = FipaUtils.getParamValue(request, "fnaId");
			String strLoggedUser = (String) sessMap.get(FipaConstant.LOGGED_USER_ID);

			if (strArrHIMode != null && strArrHIMode.length > 0) {

				for (int id = 0; id < strArrHIMode.length; id++) {

					double dblHIAmt = Double
							.parseDouble(FipaUtils.nullOrBlank(strArrHIAmt[id]) ? "0" : strArrHIAmt[id]);
					double dblHIAnnPrm = Double
							.parseDouble(FipaUtils.nullOrBlank(strArrHIAnnPrm[id]) ? "0" : strArrHIAnnPrm[id]);

					Date crtdDate = FipaUtils.nullOrBlank(strArrHICrdtDate[id]) ? new Date()
							: FipaDateUtils.convertStringToDate(strArrHICrdtDate[id]);
					Date ExpiryDate = FipaUtils.nullOrBlank(strArrHIExp[id]) ? null
							: FipaDateUtils.convertStringToDate(strArrHIExp[id]);

					FnaSelfspouseDets fnaselfspsDets = new FnaSelfspouseDets();
					fnaselfspsDets.setFnaId(strFNAId);

					String strPKId = FipaUtils.nullOrBlank(strArrHIId[id]) ? "" : strArrHIId[id];

					if (strArrHIMode[id].equalsIgnoreCase(FipaConstant.INSERT_MODE) && FipaUtils.nullOrBlank(strPKId)) {
						insHIList.add(new FnaHealthinsInfo(null, null, strArrHIPol[id], strArrHIIns[id],
								strArrHIBenf[id], dblHIAmt, ExpiryDate, dblHIAnnPrm, strArrHIRmks[id], strLoggedUser,
								new Date(), null, null));

					}

					if (strArrHIMode[id].equalsIgnoreCase(FipaConstant.UPDATE_MODE)
							|| (strArrHIMode[id].equalsIgnoreCase(FipaConstant.INSERT_MODE)
									&& !FipaUtils.nullOrBlank(strPKId))) {

						if (strPKId.startsWith("AS")) {
							updHIListAS.add(new FnaHealthinsInfo(strArrHIId[id], fnaselfspsDets, strArrHIPol[id],
									strArrHIIns[id], strArrHIBenf[id], dblHIAmt, ExpiryDate, dblHIAnnPrm,
									strArrHIRmks[id], strLoggedUser, new Date(), strLoggedUser, new Date()));

						} else {
							updHIList.add(new FnaHealthinsInfo(strArrHIId[id], fnaselfspsDets, strArrHIPol[id],
									strArrHIIns[id], strArrHIBenf[id], dblHIAmt, ExpiryDate, dblHIAnnPrm,
									strArrHIRmks[id], strArrHICrtdBy[id], crtdDate, strLoggedUser, new Date()));

						}

					}

					if (strArrHIMode[id].equalsIgnoreCase(FipaConstant.DELETE_MODE)) {
						delHIList.add(new FnaHealthinsInfo(strArrHIId[id], fnaselfspsDets, strArrHIPol[id],
								strArrHIIns[id], strArrHIBenf[id], dblHIAmt, ExpiryDate, dblHIAnnPrm, strArrHIRmks[id],
								strArrHICrtdBy[id], crtdDate, strLoggedUser, new Date()));

					}
				}
			}

			vectHIDetails.add(insHIList);
			vectHIDetails.add(updHIList);
			vectHIDetails.add(delHIList);
			vectHIDetails.add(updHIListAS);
		} catch (Exception ex) {
			logger.error("Error in getHlthInsDetails ->", ex);
		}

		return vectHIDetails;
	}

	public Vector getContPlnDetails(HttpServletRequest request) {

		Vector vectContgDepDetails = new Vector();
		// List insContgDepList = new ArrayList();
		// List updContgDepList = new ArrayList();
		// List delContgDepList = new ArrayList();
		//
		// HttpSession session = request.getSession(false);
		// Map<String,String> sessMap = new HashMap<String,String>();
		// sessMap = (HashMap<String,
		// String>)session.getAttribute(FipaConstant.LOGGED_USER_INFO);
		//
		//
		// String[] strArrContgDepMode = FipaUtils.getParamArrValue(request,
		// "txtFldContgDepMode");
		// String[] strArrContgDepId = FipaUtils.getParamArrValue(request,
		// "txFldContgDepId");
		// String[] strArrContgDepName = FipaUtils.getParamArrValue(request,
		// "txtFldContgDepName");
		// String[] strArrContgDepAge = FipaUtils.getParamArrValue(request,
		// "txtFldContgDepAge");
		// String[] strArrContgDepYrs = FipaUtils.getParamArrValue(request,
		// "txtFldContgDepYrs");
		// String[] strArrContgDepLvNds = FipaUtils.getParamArrValue(request,
		// "txtFldContgDepLivingNeeds");
		// String[] strArrContgDepRel = FipaUtils.getParamArrValue(request,
		// "selContgDepRelationship");
		// String[] strArrContgDepYrster = FipaUtils.getParamArrValue(request,
		// "txtFldContgDepYrsteritary");
		// String[] strArrContgDepEdnyrs = FipaUtils.getParamArrValue(request,
		// "txtFldContgDepEdnyrs");
		// String[] strArrContgDepEdnYAnlCst = FipaUtils.getParamArrValue(request,
		// "txtFldContgDepEdnyrsAnnlCost");
		// String[] strArrContgDepEdnFund = FipaUtils.getParamArrValue(request,
		// "txtFldContgDepEdnFund");
		// String[] strArrContgDepRb = FipaUtils.getParamArrValue(request,
		// "txtFldContgDepRb");
		// String[] strArrContgDepWrd = FipaUtils.getParamArrValue(request,
		// "txtFldContgDepWrd");
		// String[] strArrContgDepHospType = FipaUtils.getParamArrValue(request,
		// "txtFldContgDepHospType");
		// String[] strArrContgDepCrtdBy = FipaUtils.getParamArrValue(request,
		// "txtFldContgDepCrtdBy");
		// String[] strArrContgDepCrtdDate = FipaUtils.getParamArrValue(request,
		// "txtFldContgDepCrtdDate");
		//
		// String strFNAId = FipaUtils.getParamValue(request, "fnaId");
		// String strLoggedUser = (String) sessMap.get(FipaConstant.LOGGED_USER_ID);
		//
		// if(strArrContgDepMode != null && strArrContgDepMode.length>0){
		//
		// for(int id=0;id<strArrContgDepMode.length;id++){
		//
		// short shtContgDepYrs =
		// Short.parseShort(FipaUtils.nullOrBlank(strArrContgDepYrs[id]) ? "0"
		// :strArrContgDepYrs[id]);
		// short shtContgDepYrster =
		// Short.parseShort(FipaUtils.nullOrBlank(strArrContgDepYrster[id]) ? "0"
		// :strArrContgDepYrster[id]);
		// short shtContgDepEdnyrs =
		// Short.parseShort(FipaUtils.nullOrBlank(strArrContgDepEdnyrs[id]) ? "0"
		// :strArrContgDepEdnyrs[id]);
		//
		// double dblContgDepEdnACst =
		// Double.parseDouble(FipaUtils.nullOrBlank(strArrContgDepEdnYAnlCst[id]) ? "0"
		// :strArrContgDepEdnYAnlCst[id]);
		// double dblContgDepEdnFund =
		// Double.parseDouble(FipaUtils.nullOrBlank(strArrContgDepEdnFund[id]) ? "0"
		// :strArrContgDepEdnFund[id]);
		//
		// Date crtdDate = FipaUtils.nullOrBlank(strArrContgDepCrtdDate[id]) ? new
		// Date() :FipaDateUtils.convertStringToDate(strArrContgDepCrtdDate[id]) ;
		//
		//
		//
		// FnaSelfspouseDets fnaselfspsDets = new FnaSelfspouseDets();
		// fnaselfspsDets.setFnaId(strFNAId);
		//
		// if(strArrContgDepMode[id].equalsIgnoreCase(FipaConstant.INSERT_MODE)){
		// insContgDepList.add(new
		// FnaContinDepnDets(null,null,strArrContgDepName[id],strArrContgDepAge[id],shtContgDepYrs,strArrContgDepLvNds[id],strArrContgDepRel[id],shtContgDepYrster,shtContgDepEdnyrs,dblContgDepEdnACst,dblContgDepEdnFund,strArrContgDepRb[id],strArrContgDepWrd[id],strArrContgDepHospType[id],strLoggedUser,new
		// Date(),null,null,null));
		//
		// }
		//
		// if(strArrContgDepMode[id].equalsIgnoreCase(FipaConstant.UPDATE_MODE)){
		// updContgDepList.add(new
		// FnaContinDepnDets(strArrContgDepId[id],fnaselfspsDets,strArrContgDepName[id],strArrContgDepAge[id],shtContgDepYrs,strArrContgDepLvNds[id],strArrContgDepRel[id],shtContgDepYrster,shtContgDepEdnyrs,dblContgDepEdnACst,dblContgDepEdnFund,strArrContgDepRb[id],strArrContgDepWrd[id],strArrContgDepHospType[id],strArrContgDepCrtdBy[id],crtdDate,strLoggedUser,new
		// Date(),null));
		//
		// }
		//
		// if(strArrContgDepMode[id].equalsIgnoreCase(FipaConstant.DELETE_MODE)){
		//
		// delContgDepList.add(new
		// FnaContinDepnDets(strArrContgDepId[id],fnaselfspsDets,strArrContgDepName[id],strArrContgDepAge[id],shtContgDepYrs,strArrContgDepLvNds[id],strArrContgDepRel[id],shtContgDepYrster,shtContgDepEdnyrs,dblContgDepEdnACst,dblContgDepEdnFund,strArrContgDepRb[id],strArrContgDepWrd[id],strArrContgDepHospType[id],strArrContgDepCrtdBy[id],crtdDate,strLoggedUser,new
		// Date(),null));
		//
		// }
		// }
		// }
		//
		// vectContgDepDetails.add(insContgDepList);
		// vectContgDepDetails.add(updContgDepList);
		// vectContgDepDetails.add(delContgDepList);

		return vectContgDepDetails;
	}

	private Vector getFundFlowDetails(HttpServletRequest request) {
		// TODO Auto-generated method stub

		Vector vectFdFlwDetails = new Vector();
		// List insFdFlwList = new ArrayList();
		// List updFdFlwList = new ArrayList();
		// List delFdFlwList = new ArrayList();
		//
		// HttpSession session = request.getSession(false);
		// Map<String,String> sessMap = new HashMap<String,String>();
		// sessMap = (HashMap<String,
		// String>)session.getAttribute(FipaConstant.LOGGED_USER_INFO);
		//
		// String[] strArrFdFlwMode = FipaUtils.getParamArrValue(request,
		// "txtFldFdFlwMode");
		// String[] strArrFlowId = FipaUtils.getParamArrValue(request, "txtFldFlowId");
		// String[] strArrFlowCtg = FipaUtils.getParamArrValue(request,
		// "txtFldFlowCateg");
		// String[] strArrFlowSrc = FipaUtils.getParamArrValue(request,
		// "txtFldFlowSource");
		// String[] strArrFlowWhen = FipaUtils.getParamArrValue(request,
		// "txtFldFlowWhen");
		// String[] strArrFlowAmt = FipaUtils.getParamArrValue(request,
		// "txtFldFlowAmt");
		// String[] strArrFlowRmrks = FipaUtils.getParamArrValue(request,
		// "txtFldFlowRemarks");
		// String[] strArrFlowCrtdBy = FipaUtils.getParamArrValue(request,
		// "txtFldFlowCrtdBy");
		// String[] strArrFlowCrtdDate = FipaUtils.getParamArrValue(request,
		// "txtFldFlowCrtdDate");
		//
		//
		//
		// String strFNAId = FipaUtils.getParamValue(request, "fnaId");
		// String strLoggedUser = (String) sessMap.get(FipaConstant.LOGGED_USER_ID);
		//
		// if(strArrFdFlwMode != null && strArrFdFlwMode.length>0){
		//
		// for(int id=0;id<strArrFdFlwMode.length;id++){
		//
		// short shtFlowWhen =
		// Short.parseShort(FipaUtils.nullOrBlank(strArrFlowWhen[id]) ? "0"
		// :strArrFlowWhen[id]);
		// double dblFlowAmt =
		// Double.parseDouble(FipaUtils.nullOrBlank(strArrFlowAmt[id]) ? "0"
		// :strArrFlowAmt[id]);
		//
		// Date crtdDate = FipaUtils.nullOrBlank(strArrFlowCrtdDate[id]) ? new Date()
		// :FipaDateUtils.convertStringToDate(strArrFlowCrtdDate[id]) ;
		//
		// FnaSelfspouseDets fnaselfspsDets = new FnaSelfspouseDets();
		// fnaselfspsDets.setFnaId(strFNAId);
		//
		// if(strArrFdFlwMode[id].equalsIgnoreCase(FipaConstant.INSERT_MODE)){
		// insFdFlwList.add(new
		// FnaFlowDets(null,null,strArrFlowCtg[id],strArrFlowSrc[id],shtFlowWhen,dblFlowAmt,strArrFlowRmrks[id],strLoggedUser,new
		// Date(),null,null));
		//
		// }
		//
		// if(strArrFdFlwMode[id].equalsIgnoreCase(FipaConstant.UPDATE_MODE)){
		// updFdFlwList.add(new
		// FnaFlowDets(strArrFlowId[id],fnaselfspsDets,strArrFlowCtg[id],strArrFlowSrc[id],shtFlowWhen,dblFlowAmt,strArrFlowRmrks[id],strArrFlowCrtdBy[id],crtdDate,strLoggedUser,new
		// Date()));
		//
		// }
		//
		// if(strArrFdFlwMode[id].equalsIgnoreCase(FipaConstant.DELETE_MODE)){
		// delFdFlwList.add(new
		// FnaFlowDets(strArrFlowId[id],fnaselfspsDets,strArrFlowCtg[id],strArrFlowSrc[id],shtFlowWhen,dblFlowAmt,strArrFlowRmrks[id],strArrFlowCrtdBy[id],crtdDate,strLoggedUser,new
		// Date()));
		//
		// }
		// }
		// }
		//
		// vectFdFlwDetails.add(insFdFlwList);
		// vectFdFlwDetails.add(updFdFlwList);
		// vectFdFlwDetails.add(delFdFlwList);

		return vectFdFlwDetails;
	}

	private Vector getInscDetails(HttpServletRequest request) {
		// TODO Auto-generated method stub

		Vector vectInsDetails = new Vector();
		// List insInsList = new ArrayList();
		// List updInsList = new ArrayList();
		// List delInsList = new ArrayList();
		//
		// HttpSession session = request.getSession(false);
		// Map<String,String> sessMap = new HashMap<String,String>();
		// sessMap = (HashMap<String,
		// String>)session.getAttribute(FipaConstant.LOGGED_USER_INFO);
		//
		//
		// String[] strArrInsrcMode = FipaUtils.getParamArrValue(request,
		// "txtFldInsrcMode");
		// String[] strArrLipId = FipaUtils.getParamArrValue(request, "lipId");
		// String[] strArrLipOwner = FipaUtils.getParamArrValue(request,
		// "txtFldLipOwner");
		// String[] strArrLipAssured = FipaUtils.getParamArrValue(request,
		// "txtFldLipAssured");
		// String[] strArrLipCompany = FipaUtils.getParamArrValue(request,
		// "txtFldLipCompany");
		// String[] strArrLipPolNo = FipaUtils.getParamArrValue(request,
		// "txtFldLipPolicyNo");
		// String[] strArrLipPolType = FipaUtils.getParamArrValue(request,
		// "txtFldLipPolicyType");
		// String[] strArrLipDthchBenf = FipaUtils.getParamArrValue(request,
		// "txtFldLipDthchBenf");
		// String[] strArrLipMiCovrge = FipaUtils.getParamArrValue(request,
		// "txtFldLipMiCoverage");
		// String[] strArrLipCashVal = FipaUtils.getParamArrValue(request,
		// "txtFldLipCashValue");
		// String[] strArrLipMatVal = FipaUtils.getParamArrValue(request,
		// "txtFldLipMaturityValue");
		// String[] strArrLipOsVal = FipaUtils.getParamArrValue(request,
		// "txtFldLipOsValue");
		// String[] strArrLipMatDate = FipaUtils.getParamArrValue(request,
		// "lipMaturityDate");
		// String[] strArrLipEdnVal = FipaUtils.getParamArrValue(request,
		// "txtFldLipEdnValue");
		// String[] strArrLipRpValue = FipaUtils.getParamArrValue(request,
		// "txtFldLipRpValue");
		// String[] strArrLipCpfValue = FipaUtils.getParamArrValue(request,
		// "txtFldLipCpfValue");
		// String[] strArrLipAnnlPrem = FipaUtils.getParamArrValue(request,
		// "txtFldLipAnnlPrem");
		// String[] strArrLipTpdPay1 = FipaUtils.getParamArrValue(request,
		// "txtFldLipTpdPay1");
		// String[] strArrLipYrto1 = FipaUtils.getParamArrValue(request,
		// "txtFldLipYrto1");
		// String[] strArrLipYr1 = FipaUtils.getParamArrValue(request, "txtFldLipYr1");
		// String[] strArrLipTpdPay2 = FipaUtils.getParamArrValue(request,
		// "txtFldLipTpdPay2");
		// String[] strArrLipYrto2 = FipaUtils.getParamArrValue(request,
		// "txtFldLipYrto2");
		// String[] strArrLipYr2 = FipaUtils.getParamArrValue(request, "txtFldLipYr2");
		// String[] strArrLipTpdPay3 = FipaUtils.getParamArrValue(request,
		// "txtFldLipTpdPay3");
		// String[] strArrLipYrto3 = FipaUtils.getParamArrValue(request,
		// "txtFldLipYrto3");
		// String[] strArrLipYr3 = FipaUtils.getParamArrValue(request, "txtFldLipYr3");
		// String[] strArrLipComputedtpd = FipaUtils.getParamArrValue(request,
		// "txtFldLipComputedtpd");
		// String[] strArrLipRmrks = FipaUtils.getParamArrValue(request,
		// "txtFldLipRmrks");
		//// String[] strArrLipOwnerType = FipaUtils.getParamArrValue(request,
		// "selOwnerType");
		// String[] strArrLipCrtdBy = FipaUtils.getParamArrValue(request,
		// "lipCreatedBy");
		// String[] strArrLipCrtdDate = FipaUtils.getParamArrValue(request,
		// "lipCreatedDate");
		// String[] strArrLipModBy = FipaUtils.getParamArrValue(request,
		// "txtFldLipModBy");
		// String[] strArrLipModDate = FipaUtils.getParamArrValue(request,
		// "txtFldLipModDate");
		//
		// String strFNAId = FipaUtils.getParamValue(request, "fnaId");
		// String strLoggedUser = (String) sessMap.get(FipaConstant.LOGGED_USER_ID);
		//
		// if(strArrInsrcMode != null && strArrInsrcMode.length>0){
		//
		// for(int id=0;id<strArrInsrcMode.length;id++){
		//
		// double dblLipDthchBenf =
		// Double.parseDouble(FipaUtils.nullOrBlank(strArrLipDthchBenf[id]) ? "0"
		// :strArrLipDthchBenf[id]);
		// double dblLipMiCoverage =
		// Double.parseDouble(FipaUtils.nullOrBlank(strArrLipMiCovrge[id]) ? "0"
		// :strArrLipMiCovrge[id]);
		// double dblLipCashValue=
		// Double.parseDouble(FipaUtils.nullOrBlank(strArrLipCashVal[id]) ? "0"
		// :strArrLipCashVal[id]);
		// double dblLipMaturityValue=
		// Double.parseDouble(FipaUtils.nullOrBlank(strArrLipMatVal[id]) ? "0"
		// :strArrLipMatVal[id]);
		// double dblLipOsValue=
		// Double.parseDouble(FipaUtils.nullOrBlank(strArrLipOsVal[id]) ? "0"
		// :strArrLipOsVal[id]);
		// double dblLipEdnValue=
		// Double.parseDouble(FipaUtils.nullOrBlank(strArrLipEdnVal[id]) ? "0"
		// :strArrLipEdnVal[id]);
		// double dblLipRpValue=
		// Double.parseDouble(FipaUtils.nullOrBlank(strArrLipRpValue[id]) ? "0"
		// :strArrLipRpValue[id]);
		// double dblLipCpfValue=
		// Double.parseDouble(FipaUtils.nullOrBlank(strArrLipCpfValue[id]) ? "0"
		// :strArrLipCpfValue[id]);
		// double dblLipAnnlPrem=
		// Double.parseDouble(FipaUtils.nullOrBlank(strArrLipAnnlPrem[id]) ? "0"
		// :strArrLipAnnlPrem[id]);
		// double dblLipTpdPay1=
		// Double.parseDouble(FipaUtils.nullOrBlank(strArrLipTpdPay1[id]) ? "0"
		// :strArrLipTpdPay1[id]);
		// double dblLipYrto1=
		// Double.parseDouble(FipaUtils.nullOrBlank(strArrLipYrto1[id]) ? "0"
		// :strArrLipYrto1[id]);
		// double dblLipYr1= Double.parseDouble(FipaUtils.nullOrBlank(strArrLipYr1[id])
		// ? "0" :strArrLipYr1[id]);
		// double dblLipTpdPay2=
		// Double.parseDouble(FipaUtils.nullOrBlank(strArrLipTpdPay2[id]) ? "0"
		// :strArrLipTpdPay2[id]);
		// double dblLipYrto2=
		// Double.parseDouble(FipaUtils.nullOrBlank(strArrLipYrto2[id]) ? "0"
		// :strArrLipYrto2[id]);
		// double dblLipYr2= Double.parseDouble(FipaUtils.nullOrBlank(strArrLipYr2[id])
		// ? "0" :strArrLipYr2[id]);
		// double dblLipTpdPay3=
		// Double.parseDouble(FipaUtils.nullOrBlank(strArrLipTpdPay3[id]) ? "0"
		// :strArrLipTpdPay3[id]);
		// double dblLipYrto3=
		// Double.parseDouble(FipaUtils.nullOrBlank(strArrLipYrto3[id]) ? "0"
		// :strArrLipYrto3[id]);
		// double dblLipYr3= Double.parseDouble(FipaUtils.nullOrBlank(strArrLipYr3[id])
		// ? "0" :strArrLipYr3[id]);
		// double dblLipComputedtpd=
		// Double.parseDouble(FipaUtils.nullOrBlank(strArrLipComputedtpd[id]) ? "0"
		// :strArrLipComputedtpd[id]);
		//
		//
		// Date crtdDate = FipaUtils.nullOrBlank(strArrLipCrtdDate[id]) ? new Date()
		// :FipaDateUtils.convertStringToDate(strArrLipCrtdDate[id]);
		// Date dteLipMaturity = FipaUtils.nullOrBlank(strArrLipMatDate[id]) ? new
		// Date() :FipaDateUtils.convertStringToDate(strArrLipMatDate[id]) ;
		//
		// FnaSelfspouseDets fnaselfspsDets = new FnaSelfspouseDets();
		// fnaselfspsDets.setFnaId(strFNAId);
		//
		// if(strArrInsrcMode[id].equalsIgnoreCase(FipaConstant.INSERT_MODE)){
		// insInsList.add(new
		// FnaLifeinsplansDets(null,null,strArrLipOwner[id],strArrLipAssured[id],strArrLipCompany[id],strArrLipPolNo[id],strArrLipPolType[id],dblLipDthchBenf,dblLipMiCoverage,dblLipCashValue,dblLipMaturityValue,dblLipOsValue,dteLipMaturity,dblLipEdnValue,dblLipRpValue,dblLipCpfValue,dblLipAnnlPrem,dblLipTpdPay1,dblLipYrto1,dblLipYr1,dblLipTpdPay2,dblLipYrto2,dblLipYr2,dblLipTpdPay3,dblLipYrto3,dblLipYr3,dblLipComputedtpd,strArrLipRmrks[id],strLoggedUser,new
		// Date(),null,null,""));
		//
		// }
		//
		// if(strArrInsrcMode[id].equalsIgnoreCase(FipaConstant.UPDATE_MODE)){
		// updInsList.add(new
		// FnaLifeinsplansDets(strArrLipId[id],fnaselfspsDets,strArrLipOwner[id],strArrLipAssured[id],strArrLipCompany[id],strArrLipPolNo[id],strArrLipPolType[id],dblLipDthchBenf,dblLipMiCoverage,dblLipCashValue,dblLipMaturityValue,dblLipOsValue,dteLipMaturity,dblLipEdnValue,dblLipRpValue,dblLipCpfValue,dblLipAnnlPrem,dblLipTpdPay1,dblLipYrto1,dblLipYr1,dblLipTpdPay2,dblLipYrto2,dblLipYr2,dblLipTpdPay3,dblLipYrto3,dblLipYr3,dblLipComputedtpd,strArrLipRmrks[id],strLoggedUser,new
		// Date(),null,null,""));
		//
		// }
		//
		// if(strArrInsrcMode[id].equalsIgnoreCase(FipaConstant.DELETE_MODE)){
		// delInsList.add(new
		// FnaLifeinsplansDets(strArrLipId[id],fnaselfspsDets,strArrLipOwner[id],strArrLipAssured[id],strArrLipCompany[id],strArrLipPolNo[id],strArrLipPolType[id],dblLipDthchBenf,dblLipMiCoverage,dblLipCashValue,dblLipMaturityValue,dblLipOsValue,dteLipMaturity,dblLipEdnValue,dblLipRpValue,dblLipCpfValue,dblLipAnnlPrem,dblLipTpdPay1,dblLipYrto1,dblLipYr1,dblLipTpdPay2,dblLipYrto2,dblLipYr2,dblLipTpdPay3,dblLipYrto3,dblLipYr3,dblLipComputedtpd,strArrLipRmrks[id],strLoggedUser,new
		// Date(),null,null,""));
		//
		// }
		// }
		// }
		//
		// vectInsDetails.add(insInsList);
		// vectInsDetails.add(updInsList);
		// vectInsDetails.add(delInsList);

		return vectInsDetails;
	}

	private Vector getIpInvtDetails(HttpServletRequest request) {
		// TODO Auto-generated method stub

		Vector vectIpInvstDetails = new Vector();
		// List insIpInvstList = new ArrayList();
		// List updIpInvstList = new ArrayList();
		// List delIpInvstList = new ArrayList();
		//
		// HttpSession session = request.getSession(false);
		// Map<String,String> sessMap = new HashMap<String,String>();
		// sessMap = (HashMap<String,
		// String>)session.getAttribute(FipaConstant.LOGGED_USER_INFO);
		//
		//
		// String[] strArrIpInvstMode = FipaUtils.getParamArrValue(request,
		// "txtFldIpInvstMode");
		// String[] strArrOwnInvId = FipaUtils.getParamArrValue(request,
		// "txtFldOwnInvId");
		// String[] strArrInvstOwnerType = FipaUtils.getParamArrValue(request,
		// "txtFldInvstOwnerType");
		// String[] strArrInvstType = FipaUtils.getParamArrValue(request,
		// "txtFldInvstType");
		// String[] strArrInvstInstName = FipaUtils.getParamArrValue(request,
		// "txtFldInvstInstName");
		// String[] strArrInvstDesc = FipaUtils.getParamArrValue(request,
		// "txtFldInvstDesc");
		// String[] strArrInvstAmt = FipaUtils.getParamArrValue(request,
		// "txtFldInvstAmt");
		// String[] strArrInvstPayMtd = FipaUtils.getParamArrValue(request,
		// "txtFldInvstPayMtd");
		// String[] strArrInvstCurrBid = FipaUtils.getParamArrValue(request,
		// "txtFldInvstCurrBid");
		// String[] strArrInvstDate = FipaUtils.getParamArrValue(request,
		// "txtFldInvstDate");
		// String[] strArrInvstUnitsAlloc = FipaUtils.getParamArrValue(request,
		// "txtFldInvstUnitsAlloc");
		// String[] strArrInvstCurrnav = FipaUtils.getParamArrValue(request,
		// "txtFldInvstCurrnav");
		// String[] strArrInvstAnnlTopup = FipaUtils.getParamArrValue(request,
		// "txtFldInvstAnnlTopup");
		// String[] strArrInvstCpfyrstoInvst = FipaUtils.getParamArrValue(request,
		// "txtFldInvstCpfyrstoInvst");
		// String[] strArrInvstFvtoCpf = FipaUtils.getParamArrValue(request,
		// "txtFldInvstFvtoCpf");
		// String[] strArrInvstRptoInv = FipaUtils.getParamArrValue(request,
		// "txtFldInvstRptoInv");
		// String[] strArrInvstRetCashPrcnt = FipaUtils.getParamArrValue(request,
		// "txtFldInvstRetCashPrcnt");
		// String[] strArrInvstFvofCashsrs = FipaUtils.getParamArrValue(request,
		// "txtFldInvstFvofCashsrs");
		// String[] strArrInvstEdntoInv = FipaUtils.getParamArrValue(request,
		// "txtFldInvstEdntoInv");
		// String[] strArrInvstEdnCashPrcnt = FipaUtils.getParamArrValue(request,
		// "txtFldInvstEdnCashPrcnt");
		// String[] strArrInvstChildEdnInv = FipaUtils.getParamArrValue(request,
		// "txtFldInvstChildEdnInv");
		// String[] strArrInvstChildName = FipaUtils.getParamArrValue(request,
		// "txtFldInvstChildName");
		// String[] strArrInvstRmrks = FipaUtils.getParamArrValue(request,
		// "txtFldInvstRmrks");
		// String[] strArrInvstOwner = FipaUtils.getParamArrValue(request,
		// "txtFldInvstOwner");
		// String[] strArrInvstCrtdBy = FipaUtils.getParamArrValue(request,
		// "txtFldInvstCrtdBy");
		// String[] strArrInvstCrtdDate = FipaUtils.getParamArrValue(request,
		// "txtFldInvstCrtdDate");
		// String[] strArrInvstModBy = FipaUtils.getParamArrValue(request,
		// "txtFldInvstModBy");
		// String[] strArrInvstModDate = FipaUtils.getParamArrValue(request,
		// "txtFldInvstModDate");
		//
		//
		// String strFNAId = FipaUtils.getParamValue(request, "fnaId");
		// String strLoggedUser = (String) sessMap.get(FipaConstant.LOGGED_USER_ID);
		//
		// if(strArrIpInvstMode != null && strArrIpInvstMode.length>0){
		//
		// for(int id=0;id<strArrIpInvstMode.length;id++){
		//
		// short shtInvstCpfyrstoInvst =
		// Short.parseShort(FipaUtils.nullOrBlank(strArrInvstCpfyrstoInvst[id]) ? "0"
		// :strArrInvstCpfyrstoInvst[id]);
		// short shtInvstRetCashPrcnt =
		// Short.parseShort(FipaUtils.nullOrBlank(strArrInvstRetCashPrcnt[id]) ? "0"
		// :strArrInvstRetCashPrcnt[id]);
		// short shtInvstEdnCashPrcnt =
		// Short.parseShort(FipaUtils.nullOrBlank(strArrInvstEdnCashPrcnt[id]) ? "0"
		// :strArrInvstEdnCashPrcnt[id]);
		//
		// double dblInvstAmt=
		// Double.parseDouble(FipaUtils.nullOrBlank(strArrInvstAmt[id]) ? "0"
		// :strArrInvstAmt[id]);
		// double dblInvstCurrBid =
		// Double.parseDouble(FipaUtils.nullOrBlank(strArrInvstCurrBid[id]) ? "0"
		// :strArrInvstCurrBid[id]);
		// double dblInvstUnitsAlloc =
		// Double.parseDouble(FipaUtils.nullOrBlank(strArrInvstUnitsAlloc[id]) ? "0"
		// :strArrInvstUnitsAlloc[id]);
		// double dblInvstCurrnav=
		// Double.parseDouble(FipaUtils.nullOrBlank(strArrInvstCurrnav[id]) ? "0"
		// :strArrInvstCurrnav[id]);
		// double dblInvstAnnlTopup=
		// Double.parseDouble(FipaUtils.nullOrBlank(strArrInvstAnnlTopup[id]) ? "0"
		// :strArrInvstAnnlTopup[id]);
		// double dblInvstFvtoCpf=
		// Double.parseDouble(FipaUtils.nullOrBlank(strArrInvstFvtoCpf[id]) ? "0"
		// :strArrInvstFvtoCpf[id]);
		// double dblInvstRptoInv=
		// Double.parseDouble(FipaUtils.nullOrBlank(strArrInvstRptoInv[id]) ? "0"
		// :strArrInvstRptoInv[id]);
		// double dblInvstFvofCashsrs =
		// Double.parseDouble(FipaUtils.nullOrBlank(strArrInvstFvofCashsrs[id]) ? "0"
		// :strArrInvstFvofCashsrs[id]);
		// double dblInvstEdntoInv =
		// Double.parseDouble(FipaUtils.nullOrBlank(strArrInvstEdntoInv[id]) ? "0"
		// :strArrInvstEdntoInv[id]);
		// double dblInvstChildEdnInv=
		// Double.parseDouble(FipaUtils.nullOrBlank(strArrInvstChildEdnInv[id]) ? "0"
		// :strArrInvstChildEdnInv[id]);
		//
		// Date crtdDate = FipaUtils.nullOrBlank(strArrInvstCrtdDate[id]) ? new Date()
		// :FipaDateUtils.convertStringToDate(strArrInvstCrtdDate[id]);
		// Date dteInvstDate = FipaUtils.nullOrBlank(strArrInvstDate[id]) ? new Date()
		// :FipaDateUtils.convertStringToDate(strArrInvstDate[id]) ;
		//
		// FnaSelfspouseDets fnaselfspsDets = new FnaSelfspouseDets();
		// fnaselfspsDets.setFnaId(strFNAId);
		//
		// if(strArrIpInvstMode[id].equalsIgnoreCase(FipaConstant.INSERT_MODE)){
		// insIpInvstList.add(new
		// FnaInputinvsetDets(null,null,strArrInvstOwnerType[id],strArrInvstType[id],strArrInvstInstName[id],strArrInvstDesc[id],dblInvstAmt,strArrInvstPayMtd[id],dblInvstCurrBid,dteInvstDate,dblInvstUnitsAlloc,dblInvstCurrnav,dblInvstAnnlTopup,shtInvstCpfyrstoInvst,dblInvstFvtoCpf,dblInvstRptoInv,shtInvstRetCashPrcnt,dblInvstFvofCashsrs,dblInvstEdntoInv,shtInvstEdnCashPrcnt,dblInvstChildEdnInv,strArrInvstChildName[id],strArrInvstRmrks[id],strArrInvstOwner[id],strLoggedUser,new
		// Date(),null,null));
		//
		// }
		//
		// if(strArrIpInvstMode[id].equalsIgnoreCase(FipaConstant.UPDATE_MODE)){
		// updIpInvstList.add(new
		// FnaInputinvsetDets(strArrOwnInvId[id],fnaselfspsDets,strArrInvstOwnerType[id],strArrInvstType[id],strArrInvstInstName[id],strArrInvstDesc[id],dblInvstAmt,strArrInvstPayMtd[id],dblInvstCurrBid,dteInvstDate,dblInvstUnitsAlloc,dblInvstCurrnav,dblInvstAnnlTopup,shtInvstCpfyrstoInvst,dblInvstFvtoCpf,dblInvstRptoInv,shtInvstRetCashPrcnt,dblInvstFvofCashsrs,dblInvstEdntoInv,shtInvstEdnCashPrcnt,dblInvstChildEdnInv,strArrInvstChildName[id],strArrInvstRmrks[id],strArrInvstOwner[id],strArrInvstCrtdBy[id],crtdDate,strLoggedUser,new
		// Date()));
		//
		//
		// }
		//
		// if(strArrIpInvstMode[id].equalsIgnoreCase(FipaConstant.DELETE_MODE)){
		// delIpInvstList.add(new
		// FnaInputinvsetDets(strArrOwnInvId[id],fnaselfspsDets,strArrInvstOwnerType[id],strArrInvstType[id],strArrInvstInstName[id],strArrInvstDesc[id],dblInvstAmt,strArrInvstPayMtd[id],dblInvstCurrBid,dteInvstDate,dblInvstUnitsAlloc,dblInvstCurrnav,dblInvstAnnlTopup,shtInvstCpfyrstoInvst,dblInvstFvtoCpf,dblInvstRptoInv,shtInvstRetCashPrcnt,dblInvstFvofCashsrs,dblInvstEdntoInv,shtInvstEdnCashPrcnt,dblInvstChildEdnInv,strArrInvstChildName[id],strArrInvstRmrks[id],strArrInvstOwner[id],strArrInvstCrtdBy[id],crtdDate,strLoggedUser,new
		// Date()));
		//
		// }
		// }
		// }
		//
		// vectIpInvstDetails.add(insIpInvstList);
		// vectIpInvstDetails.add(updIpInvstList);
		// vectIpInvstDetails.add(delIpInvstList);

		return vectIpInvstDetails;
	}

	private Vector getRcmPrdDetails(HttpServletRequest request) {
		// TODO Auto-generated method stub

		Vector vectRcmPrdDetails = new Vector();
		// List insRcmPrdList = new ArrayList();
		// List updRcmPrdList = new ArrayList();
		// List delRcmPrdList = new ArrayList();
		//
		// HttpSession session = request.getSession(false);
		// Map<String,String> sessMap = new HashMap<String,String>();
		// sessMap = (HashMap<String,
		// String>)session.getAttribute(FipaConstant.LOGGED_USER_INFO);
		//
		//
		// String[] strArrRcomMode = FipaUtils.getParamArrValue(request,
		// "txtFldRcomMode");
		// String[] strArrRecomId = FipaUtils.getParamArrValue(request,
		// "txtFldRecomId");
		// String[] strArrRecomProdType = FipaUtils.getParamArrValue(request,
		// "txtFldRecomProdType");
		// String[] strArrRecomProdName = FipaUtils.getParamArrValue(request,
		// "txtFldRecomProdName");
		// String[] strArrRecomSumAssr = FipaUtils.getParamArrValue(request,
		// "txtFldRecomSumAssr");
		// String[] strArrRecomPayMode = FipaUtils.getParamArrValue(request,
		// "txtFldRecomPayMode");
		// String[] strArrRecomPlanTerm = FipaUtils.getParamArrValue(request,
		// "txtFldRecomPlanTerm");
		// String[] strArrRecomPayTerm = FipaUtils.getParamArrValue(request,
		// "txtFldRecomPayTerm");
		// String[] strArrRecomPremium = FipaUtils.getParamArrValue(request,
		// "txtFldRecomPremium");
		// String[] strArrRecomCrtdBy = FipaUtils.getParamArrValue(request,
		// "txtFldRecomCrtdBy");
		// String[] strArrRecomCrtdDate = FipaUtils.getParamArrValue(request,
		// "txtFldRecomCrtdDate");
		// String[] strArrRecomModBy = FipaUtils.getParamArrValue(request,
		// "txtFldRecomModBy");
		// String[] strArrRecomModDate = FipaUtils.getParamArrValue(request,
		// "txtFldRecomModDate");
		//
		//
		// String strFNAId = FipaUtils.getParamValue(request, "fnaId");
		// String strLoggedUser = (String) sessMap.get(FipaConstant.LOGGED_USER_ID);
		//
		//
		// if(strArrRcomMode != null && strArrRcomMode.length>0){
		//
		// for(int id=0;id<strArrRcomMode.length;id++){
		//
		// double dblRcmSumAssr=
		// Double.parseDouble(FipaUtils.nullOrBlank(strArrRecomSumAssr[id]) ? "0"
		// :strArrRecomSumAssr[id]);
		// double dblRcmPlanTerm =
		// Double.parseDouble(FipaUtils.nullOrBlank(strArrRecomPlanTerm[id]) ? "0"
		// :strArrRecomPlanTerm[id]);
		// double dblRcmPremium =
		// Double.parseDouble(FipaUtils.nullOrBlank(strArrRecomPremium[id]) ? "0"
		// :strArrRecomPremium[id]);
		//
		// short shtRcmPayTerm =
		// Short.parseShort(FipaUtils.nullOrBlank(strArrRecomPayTerm[id]) ? "0"
		// :strArrRecomPayTerm[id]);
		//
		//
		// Date crtdDate = FipaUtils.nullOrBlank(strArrRecomCrtdDate[id]) ? new Date()
		// :FipaDateUtils.convertStringToDate(strArrRecomCrtdDate[id]);
		//
		// FnaSelfspouseDets fnaselfspsDets = new FnaSelfspouseDets();
		// fnaselfspsDets.setFnaId(strFNAId);
		//
		// if(strArrRcomMode[id].equalsIgnoreCase(FipaConstant.INSERT_MODE)){
		// insRcmPrdList.add(new
		// FnaRecomPrdtplanDet(null,null,"","","ADVREC","","",strArrRecomProdType[id],strArrRecomProdName[id],dblRcmSumAssr,strArrRecomPayMode[id],dblRcmPlanTerm,shtRcmPayTerm,dblRcmPremium,strLoggedUser,new
		// Date(),null,null));
		//
		// }
		//
		// if(strArrRcomMode[id].equalsIgnoreCase(FipaConstant.UPDATE_MODE)){
		// updRcmPrdList.add(new
		// FnaRecomPrdtplanDet(strArrRecomId[id],fnaselfspsDets,"","","ADVREC","","",strArrRecomProdType[id],strArrRecomProdName[id],dblRcmSumAssr,strArrRecomPayMode[id],dblRcmPlanTerm,shtRcmPayTerm,dblRcmPremium,strArrRecomCrtdBy[id],crtdDate,strLoggedUser,new
		// Date()));
		//
		// }
		//
		// if(strArrRcomMode[id].equalsIgnoreCase(FipaConstant.DELETE_MODE)){
		// delRcmPrdList.add(new
		// FnaRecomPrdtplanDet(strArrRecomId[id],fnaselfspsDets,"","","ADVREC","","",strArrRecomProdType[id],strArrRecomProdName[id],dblRcmSumAssr,strArrRecomPayMode[id],dblRcmPlanTerm,shtRcmPayTerm,dblRcmPremium,strArrRecomCrtdBy[id],crtdDate,strLoggedUser,new
		// Date()));
		//
		// }
		// }
		// }
		//
		// vectRcmPrdDetails.add(insRcmPrdList);
		// vectRcmPrdDetails.add(updRcmPrdList);
		// vectRcmPrdDetails.add(delRcmPrdList);

		return vectRcmPrdDetails;
	}

	private Vector getRcmPrdPlnDetails(HttpServletRequest request) {
		// TODO Auto-generated method stub

		Vector vectRcmPrdPlnDetails = new Vector();
		List insRcmPrdPlnList = new ArrayList();
		List updRcmPrdPlnList = new ArrayList();
		List delRcmPrdPlnList = new ArrayList();

//		HttpSession session = request.getSession(false);
//		Map<String,String> sessMap = new HashMap<String,String>();
//		sessMap = (HashMap<String, String>)session.getAttribute(FipaConstant.LOGGED_USER_INFO);

		try {

//		 String[] strArrRcomPpMode 		= FipaUtils.getParamArrValue(request, "txtFldadRcPlnMode");
//		 String[] strArrRecomPpId 		= FipaUtils.getParamArrValue(request, "txtFldRecomPpId");
//		 String[] strArrRecomPpProdLOB = FipaUtils.getParamArrValue(request, "txtFldRecomPpProdType");
//		 String[] strArrRecomPpProdComp = FipaUtils.getParamArrValue(request, "txtFldRecomPpCompany");
//		 String[] strArrRecomPpProdName = FipaUtils.getParamArrValue(request, "txtFldRecomPpProdName");
//		 String[] strArrRecomPpProdBasRid = FipaUtils.getParamArrValue(request, "selFldRecomPpBasRid");
//		 String[] strArrRecomPpSumAssr 	= FipaUtils.getParamArrValue(request, "txtFldRecomPpSumAssr");
//		 String[] strArrRecomPpPayMode 	= FipaUtils.getParamArrValue(request, "txtFldRecomPpPayMode"); 
//		 String[] strArrRecomPpPlanTerm = FipaUtils.getParamArrValue(request, "txtFldRecomPpPlanTerm");
//		 String[] strArrRecomPpPayTerm 	= FipaUtils.getParamArrValue(request, "txtFldRecomPpPayTerm");
//		 String[] strArrRecomPpPremium 	= FipaUtils.getParamArrValue(request, "txtFldRecomPpPremium"); 
//		 String[] strArrRecomPpCrtdBy 	= FipaUtils.getParamArrValue(request, "txtFldRecomPpCrtdBy");
//		 String[] strArrRecomPpCrtdDate = FipaUtils.getParamArrValue(request, "txtFldRecomPpCrtdDate"); 
//		  
//		
//		String strFNAId = FipaUtils.getParamValue(request, "fnaId");
//		String strLoggedUser = (String) sessMap.get(FipaConstant.LOGGED_USER_ID);
//		
//		if(strArrRcomPpMode != null && strArrRcomPpMode.length>0){
//			
//			for(int id=0;id<strArrRcomPpMode.length;id++){
//				 
//				double dblPpSumAssr= Double.parseDouble(FipaUtils.nullOrBlank(strArrRecomPpSumAssr[id]) ? "0" :strArrRecomPpSumAssr[id]);
//				double dblPpPremium = Double.parseDouble(FipaUtils.nullOrBlank(strArrRecomPpPremium[id]) ? "0" :strArrRecomPpPremium[id]);
//	 
//				
//				Date crtdDate = FipaUtils.nullOrBlank(strArrRecomPpCrtdDate[id]) ? new Date() :FipaDateUtils.convertStringToDate(strArrRecomPpCrtdDate[id]);
//				 
//				FnaSelfspouseDets fnaselfspsDets = new FnaSelfspouseDets();				
//				fnaselfspsDets.setFnaId(strFNAId);
//				
//				if(strArrRcomPpMode[id].equalsIgnoreCase(FipaConstant.INSERT_MODE)){
//					insRcmPrdPlnList.add(new FnaRecomPrdtplanDet(null,null,strArrRecomPpProdLOB[id],strArrRecomPpProdName[id],dblPpSumAssr,strArrRecomPpPayMode[id],strArrRecomPpPlanTerm[id],strArrRecomPpPayTerm[id],dblPpPremium,"","","ADVRECPLN",strLoggedUser,new Date(),strArrRecomPpProdComp[id],"",strArrRecomPpProdBasRid[id],""));
//				 
//				}
//				
//				if(strArrRcomPpMode[id].equalsIgnoreCase(FipaConstant.UPDATE_MODE)){
//					updRcmPrdPlnList.add(new FnaRecomPrdtplanDet(strArrRecomPpId[id],fnaselfspsDets,strArrRecomPpProdLOB[id],strArrRecomPpProdName[id],dblPpSumAssr,strArrRecomPpPayMode[id],strArrRecomPpPlanTerm[id],strArrRecomPpPayTerm[id],dblPpPremium,"","","ADVRECPLN",strArrRecomPpCrtdBy[id],crtdDate,strArrRecomPpProdComp[id],"",strArrRecomPpProdBasRid[id],""));
//					 
//				}
//				
//				if(strArrRcomPpMode[id].equalsIgnoreCase(FipaConstant.DELETE_MODE)){
//					delRcmPrdPlnList.add(new FnaRecomPrdtplanDet(strArrRecomPpId[id],fnaselfspsDets,strArrRecomPpProdLOB[id],strArrRecomPpProdName[id],dblPpSumAssr,strArrRecomPpPayMode[id],strArrRecomPpPlanTerm[id],strArrRecomPpPayTerm[id],dblPpPremium,"","","ADVRECPLN",strArrRecomPpCrtdBy[id],crtdDate,strArrRecomPpProdComp[id],"",strArrRecomPpProdBasRid[id],""));
//					 
//				}
//			}
//		}
//		
//		vectRcmPrdPlnDetails.add(insRcmPrdPlnList);
//		vectRcmPrdPlnDetails.add(updRcmPrdPlnList);
//		vectRcmPrdPlnDetails.add(delRcmPrdPlnList);

		} catch (Exception ex) {
			logger.error("Error in getRcmPrdPlnDetails ->", ex);
		}
		return vectRcmPrdPlnDetails;
	}

	private Vector getRcmPrdFundDetails(HttpServletRequest request) {
		// TODO Auto-generated method stub

		Vector vectRcmPrdFundDetails = new Vector();
		List insRcmPrdFundList = new ArrayList();
		List updRcmPrdFundList = new ArrayList();
		List delRcmPrdFundList = new ArrayList();

//		HttpSession session = request.getSession(false);
//		Map<String,String> sessMap = new HashMap<String,String>();
//		sessMap = (HashMap<String, String>)session.getAttribute(FipaConstant.LOGGED_USER_INFO);

		try {
//		String[] strArrRcmFdMode = FipaUtils.getParamArrValue(request, "txtFldadRcFdMode");
//		String[] strArrRecomFfId = FipaUtils.getParamArrValue(request, "txtFldRecomFfId");
//		String[] strArrRecomFfProdType = FipaUtils.getParamArrValue(request, "txtFldRecomFfProdType");
//		String[] strArrRecomFfComp = FipaUtils.getParamArrValue(request, "txtFldRecomFfComp");
//		String[] strArrRecomFfPlan = FipaUtils.getParamArrValue(request, "txtFldRecomFfPlan");
//		String[] strArrRecomFfFundRiskRate = FipaUtils.getParamArrValue(request, "txtFldRecomFfFundRiskRate");
//		String[] strArrRecomFfPayMode = FipaUtils.getParamArrValue(request, "txtFldRecomFfPayMode");
//		String[] strArrRecomFfSalChrg = FipaUtils.getParamArrValue(request, "txtFldRecomFfSalChrg");		
//		String[] strArrRecomFfPurAmt = FipaUtils.getParamArrValue(request, "txtFldRecomFfPurAmt");
//		String[] strArrRecomFfPurPrcnt = FipaUtils.getParamArrValue(request, "txtFldRecomFfPurPrcnt"); 
//	    String[] strArrRecomFfCrtdBy = FipaUtils.getParamArrValue(request, "txtFldRecomFfCrtdBy");
//		String[] strArrRecomFfCrtdDate = FipaUtils.getParamArrValue(request, "txtFldRecomFfCrtdDate"); 
//		  
//		 String strArrRecomFfIaffee   = FipaUtils.getParamValue(request, "txtFldRecomFfIaffee");
//		 
//		String strFNAId = FipaUtils.getParamValue(request, "fnaId");
//		String strLoggedUser = (String) sessMap.get(FipaConstant.LOGGED_USER_ID);
//		
//		
//		if(strArrRcmFdMode != null && strArrRcmFdMode.length>0){
//			
//			for(int id=0;id<strArrRcmFdMode.length;id++){
//				 
//				double dblRFfFundRiskRate= Double.parseDouble(FipaUtils.nullOrBlank(strArrRecomFfFundRiskRate[id]) ? "0" :strArrRecomFfFundRiskRate[id]);
//				double dblRFfSalChrg = Double.parseDouble(FipaUtils.nullOrBlank(strArrRecomFfSalChrg[id]) ? "0" :strArrRecomFfSalChrg[id]);
//				double dblRFfPurAmt = Double.parseDouble(FipaUtils.nullOrBlank(strArrRecomFfPurAmt[id]) ? "0" :strArrRecomFfPurAmt[id]);
//				double dblRFfPurPrcnt = Double.parseDouble(FipaUtils.nullOrBlank(strArrRecomFfPurPrcnt[id]) ? "0" :strArrRecomFfPurPrcnt[id]);
//	//			double dblRFfIaffee = Double.parseDouble(FipaUtils.nullOrBlank(strArrRecomFfIaffee) ? "0" :strArrRecomFfIaffee);
//				
//				 
//				
//				Date crtdDate = FipaUtils.nullOrBlank(strArrRecomFfCrtdDate[id]) ? new Date() :FipaDateUtils.convertStringToDate(strArrRecomFfCrtdDate[id]);
//				 
//				FnaSelfspouseDets fnaselfspsDets = new FnaSelfspouseDets();				
//				fnaselfspsDets.setFnaId(strFNAId);
//				
//				if(strArrRcmFdMode[id].equalsIgnoreCase(FipaConstant.INSERT_MODE)){
//					insRcmPrdFundList.add(new FnaRecomFundDet(null,null,strArrRecomFfProdType[id],"",dblRFfFundRiskRate,strArrRecomFfPayMode[id],dblRFfSalChrg,dblRFfPurAmt,dblRFfPurPrcnt,strArrRecomFfIaffee,strLoggedUser,new Date(),strArrRecomFfComp[id],strArrRecomFfPlan[id],"",""));
//					 
//				}
//				
//				if(strArrRcmFdMode[id].equalsIgnoreCase(FipaConstant.UPDATE_MODE)){
//					updRcmPrdFundList.add(new FnaRecomFundDet(strArrRecomFfId[id],fnaselfspsDets,strArrRecomFfProdType[id],"",dblRFfFundRiskRate,strArrRecomFfPayMode[id],dblRFfSalChrg,dblRFfPurAmt,dblRFfPurPrcnt,strArrRecomFfIaffee,strArrRecomFfCrtdBy[id],crtdDate,strArrRecomFfComp[id],strArrRecomFfPlan[id],"",""));
//					 
//				}
//				
//				if(strArrRcmFdMode[id].equalsIgnoreCase(FipaConstant.DELETE_MODE)){
//					delRcmPrdFundList.add(new FnaRecomFundDet(strArrRecomFfId[id],fnaselfspsDets,strArrRecomFfProdType[id],"",dblRFfFundRiskRate,strArrRecomFfPayMode[id],dblRFfSalChrg,dblRFfPurAmt,dblRFfPurPrcnt,strArrRecomFfIaffee,strArrRecomFfCrtdBy[id],crtdDate,strArrRecomFfComp[id],strArrRecomFfPlan[id],"",""));
//				 
//				}
//			}
//		}
//		
//		vectRcmPrdFundDetails.add(insRcmPrdFundList);
//		vectRcmPrdFundDetails.add(updRcmPrdFundList);
//		vectRcmPrdFundDetails.add(delRcmPrdFundList);
		} catch (Exception ex) {
			logger.error("Error in getRcmPrdFundDetails ->", ex);
		}

		return vectRcmPrdFundDetails;
	}

	private Vector getSwtPlnDetails(HttpServletRequest request) {
		// TODO Auto-generated method stub

		Vector vectSwtPlnDetails = new Vector();
		List insSwtPlnList = new ArrayList();
		List updSwtPlnList = new ArrayList();
		List delSwtPlnList = new ArrayList();

//		HttpSession session = request.getSession(false);
//		Map<String,String> sessMap = new HashMap<String,String>();
//		sessMap = (HashMap<String, String>)session.getAttribute(FipaConstant.LOGGED_USER_INFO);

		try {

//		String[] strArrSwrepPlanMode 	= FipaUtils.getParamArrValue(request, "txtFldswRplPlnMode");
//		String[] strArrSwrepPpId 		= FipaUtils.getParamArrValue(request, "txtFldSwrepPpId");
//	 	String[] strArrSwrepPpProdLOB 	= FipaUtils.getParamArrValue(request, "txtFldSwrepPpProdType");
//	 	String[] strArrSwrepPpComp 	= FipaUtils.getParamArrValue(request, "txtFldSwrepPpComp");
//		String[] strArrSwrepPpProdName 	= FipaUtils.getParamArrValue(request, "txtFldSwrepPpProdName");
//		String[] strArrSwrepPpBasRid 	= FipaUtils.getParamArrValue(request, "selFldSwrepPpBasRid");
//		
//		String[] strArrSwrepPpSumAssr 	= FipaUtils.getParamArrValue(request, "txtFldSwrepPpSumAssr");
//		String[] strArrSwrepPpTransInd 	= FipaUtils.getParamArrValue(request, "txtFldSwrepPpTransInd");		
//		String[] strArrSwrepPpPayMode 	= FipaUtils.getParamArrValue(request, "txtFldSwrepPpPayMode");
//		String[] strArrSwrepPpPlanTerm 	= FipaUtils.getParamArrValue(request, "txtFldSwrepPpPlanTerm"); 
//		String[] strArrSwrepPpPayTerm 	= FipaUtils.getParamArrValue(request, "txtFldSwrepPpPayTerm");
//		String[] strArrSwrepPpPre 		= FipaUtils.getParamArrValue(request, "txtFldSwrepPpPre");
//		String[] strArrSwrepCrtdBy 		= FipaUtils.getParamArrValue(request, "txtFldSwrepCrtdBy"); 
//		String[] strArrSwrepCrtdDate 	= FipaUtils.getParamArrValue(request, "txtFldSwrepCrtdDate");
//		   
//		
//		String strFNAId = FipaUtils.getParamValue(request, "fnaId");
//		String strLoggedUser = (String) sessMap.get(FipaConstant.LOGGED_USER_ID);
//		
//		if(strArrSwrepPlanMode != null && strArrSwrepPlanMode.length>0){
//			
//			for(int id=0;id<strArrSwrepPlanMode.length;id++){
//				 
//				double dblSwrepPpSumAssr= Double.parseDouble(FipaUtils.nullOrBlank(strArrSwrepPpSumAssr[id]) ? "0" :strArrSwrepPpSumAssr[id]);
//				double dblSwrepPpPre = Double.parseDouble(FipaUtils.nullOrBlank(strArrSwrepPpPre[id]) ? "0" :strArrSwrepPpPre[id]);
//				 
//	//			short shtSwrepPpPlanTerm = Short.parseShort(FipaUtils.nullOrBlank(strArrSwrepPpPlanTerm[id]) ? "0" :strArrSwrepPpPlanTerm[id]);
//	//			short shtSwrepPpPayTerm = Short.parseShort(FipaUtils.nullOrBlank(strArrSwrepPpPayTerm[id]) ? "0" :strArrSwrepPpPayTerm[id]);
//				
//				
//				Date crtdDate = FipaUtils.nullOrBlank(strArrSwrepCrtdDate[id]) ? new Date() :FipaDateUtils.convertStringToDate(strArrSwrepCrtdDate[id]);
//				 
//				FnaSelfspouseDets fnaselfspsDets = new FnaSelfspouseDets();				
//				fnaselfspsDets.setFnaId(strFNAId);
//				
//				if(strArrSwrepPlanMode[id].equalsIgnoreCase(FipaConstant.INSERT_MODE)){
//					insSwtPlnList.add(new FnaSwtchrepPlanDet(null,null,strArrSwrepPpProdLOB[id],strArrSwrepPpProdName[id],dblSwrepPpSumAssr,strArrSwrepPpTransInd[id],strArrSwrepPpPayMode[id],strArrSwrepPpPlanTerm[id],strArrSwrepPpPayTerm[id],dblSwrepPpPre,strLoggedUser,new Date(),strArrSwrepPpComp[id],"",strArrSwrepPpBasRid[id],""));
//					 
//					}
//				
//				if(strArrSwrepPlanMode[id].equalsIgnoreCase(FipaConstant.UPDATE_MODE)){
//					updSwtPlnList.add(new FnaSwtchrepPlanDet(strArrSwrepPpId[id],fnaselfspsDets,strArrSwrepPpProdLOB[id],strArrSwrepPpProdName[id],dblSwrepPpSumAssr,strArrSwrepPpTransInd[id],strArrSwrepPpPayMode[id],strArrSwrepPpPlanTerm[id],strArrSwrepPpPayTerm[id],dblSwrepPpPre,strArrSwrepCrtdBy[id],crtdDate,strArrSwrepPpComp[id],"",strArrSwrepPpBasRid[id],""));
//					 
//				}
//				
//				if(strArrSwrepPlanMode[id].equalsIgnoreCase(FipaConstant.DELETE_MODE)){
//					delSwtPlnList.add(new FnaSwtchrepPlanDet(strArrSwrepPpId[id],fnaselfspsDets,strArrSwrepPpProdLOB[id],strArrSwrepPpProdName[id],dblSwrepPpSumAssr,strArrSwrepPpTransInd[id],strArrSwrepPpPayMode[id],strArrSwrepPpPlanTerm[id],strArrSwrepPpPayTerm[id],dblSwrepPpPre,strArrSwrepCrtdBy[id],crtdDate,strArrSwrepPpComp[id],"",strArrSwrepPpBasRid[id],""));
//					 
//				}
//			}
//		}
//		
//		vectSwtPlnDetails.add(insSwtPlnList);
//		vectSwtPlnDetails.add(updSwtPlnList);
//		vectSwtPlnDetails.add(delSwtPlnList);
		} catch (Exception ex) {
			logger.error("Error in getSwtPlnDetails ->", ex);
		}

		return vectSwtPlnDetails;
	}

	private Vector getSwtFundDetails(HttpServletRequest request) {
		// TODO Auto-generated method stub

		Vector vectSwtFundDetails = new Vector();
		List insSwtFundList = new ArrayList();
		List updSwtFundList = new ArrayList();
		List delSwtFundList = new ArrayList();

//		HttpSession session = request.getSession(false);
//		Map<String,String> sessMap = new HashMap<String,String>();
//		sessMap = (HashMap<String, String>)session.getAttribute(FipaConstant.LOGGED_USER_INFO);
		try {

//		String[] strArrSwrepFundMode 		= FipaUtils.getParamArrValue(request, "txtFldswRplFdMode");
//		String[] strArrSwRepFfId 			= FipaUtils.getParamArrValue(request, "txtFldSwRepFfId");
//		String[] strArrSwrepFfProdType 		= FipaUtils.getParamArrValue(request, "txtFldSwrepFfProdType");
//		String[] strArrSwrepFfComp		= FipaUtils.getParamArrValue(request, "txtFldSwrepFfComp");
//		String[] strArrSwrepFfPlan		= FipaUtils.getParamArrValue(request, "txtFldSwrepFfPlan");
//		String[] strArrSwrepFfFundRiskRate 	= FipaUtils.getParamArrValue(request, "txtFldSwrepFfFundRiskRate");
//	 
//		String[] strArrSwrepFfPayMode 		= FipaUtils.getParamArrValue(request, "txtFldSwrepFfPayMode");
//		String[] strArrSwrepFfSoredmUnits 	= FipaUtils.getParamArrValue(request, "txtFldSwrepFfSoredmUnits");		
//		String[] strArrSwrepFfSoredPrcnt 	= FipaUtils.getParamArrValue(request, "txtFldSwrepFfSoredPrcnt");
//		String[] strArrSwrepFfSirepsalChrg 	= FipaUtils.getParamArrValue(request, "txtFldSwrepFfSirepsalChrg"); 
//		String[] strArrSwrepFfSirepAmt 		= FipaUtils.getParamArrValue(request, "txtFldSwrepFfSirepAmt");
//		String[] strArrSwrepFfSirepPrcnt 	= FipaUtils.getParamArrValue(request, "txtFldSwrepFfSirepPrcnt");
//		String[] strArrSwrepFfCrtdBy 		= FipaUtils.getParamArrValue(request, "txtFldSwrepFfCrtdBy");
//		String[] strArrSwrepFfCrtdDate 		= FipaUtils.getParamArrValue(request, "txtFldSwrepFfCrtdDate"); 
//		String[] strArrSwrepFfModBy 		= FipaUtils.getParamArrValue(request, "txtFldSwrepFfModBy");
//		String[] strArrSwrepFfModDate 		= FipaUtils.getParamArrValue(request, "txtFldSwrepFfModDate");  
//		 
//	
//		 String strArrSwrepFfIaffee        = FipaUtils.getParamValue(request, "txtFldSwrepFfIaffee");
//		 
//		String strFNAId     = FipaUtils.getParamValue(request, "fnaId");
//		String strLoggedUser = (String) sessMap.get(FipaConstant.LOGGED_USER_ID);
//		
//		
//		if(strArrSwrepFundMode != null && strArrSwrepFundMode.length>0){
//			
//			for(int id=0;id<strArrSwrepFundMode.length;id++){
//				 
//				double dblSFfFundRiskRate= Double.parseDouble(FipaUtils.nullOrBlank(strArrSwrepFfFundRiskRate[id]) ? "0" :strArrSwrepFfFundRiskRate[id]);
//				double dblSFfSoredmUnits = Double.parseDouble(FipaUtils.nullOrBlank(strArrSwrepFfSoredmUnits[id]) ? "0" :strArrSwrepFfSoredmUnits[id]);
//				double dblSFfSirepsalChrg= Double.parseDouble(FipaUtils.nullOrBlank(strArrSwrepFfSirepsalChrg[id]) ? "0" :strArrSwrepFfSirepsalChrg[id]);
//				double dblSFfSirepAmt = Double.parseDouble(FipaUtils.nullOrBlank(strArrSwrepFfSirepAmt[id]) ? "0" :strArrSwrepFfSirepAmt[id]);
//	//			double dblSFfIaffee = Double.parseDouble(FipaUtils.nullOrBlank(strArrSwrepFfIaffee) ? "0" :strArrSwrepFfIaffee);
//				
//				 
//				 
//				short shtSwrepFfSoredPrcnt = Short.parseShort(FipaUtils.nullOrBlank(strArrSwrepFfSoredPrcnt[id]) ? "0" :strArrSwrepFfSoredPrcnt[id]);
//				short shtSwrepFfSirepPrcnt = Short.parseShort(FipaUtils.nullOrBlank(strArrSwrepFfSirepPrcnt[id]) ? "0" :strArrSwrepFfSirepPrcnt[id]);
//				
//				
//				Date crtdDate = FipaUtils.nullOrBlank(strArrSwrepFfCrtdDate[id]) ? new Date() :FipaDateUtils.convertStringToDate(strArrSwrepFfCrtdDate[id]);
//				 
//				FnaSelfspouseDets fnaselfspsDets = new FnaSelfspouseDets();				
//				fnaselfspsDets.setFnaId(strFNAId);
//				
//				if(strArrSwrepFundMode[id].equalsIgnoreCase(FipaConstant.INSERT_MODE)){
//					insSwtFundList.add(new FnaSwtchrepFundDet(null,null,strArrSwrepFfProdType[id],"",dblSFfFundRiskRate,strArrSwrepFfPayMode[id],dblSFfSoredmUnits,shtSwrepFfSoredPrcnt,dblSFfSirepsalChrg,dblSFfSirepAmt,shtSwrepFfSirepPrcnt,strArrSwrepFfIaffee,strLoggedUser,new Date(),strArrSwrepFfComp[id],strArrSwrepFfPlan[id],"",""));
//					 
//				 }
//				
//				if(strArrSwrepFundMode[id].equalsIgnoreCase(FipaConstant.UPDATE_MODE)){
//					updSwtFundList.add(new FnaSwtchrepFundDet(strArrSwRepFfId[id],fnaselfspsDets,strArrSwrepFfProdType[id],"",dblSFfFundRiskRate,strArrSwrepFfPayMode[id],dblSFfSoredmUnits,shtSwrepFfSoredPrcnt,dblSFfSirepsalChrg,dblSFfSirepAmt,shtSwrepFfSirepPrcnt,strArrSwrepFfIaffee,strArrSwrepFfCrtdBy[id],crtdDate,strArrSwrepFfComp[id],strArrSwrepFfPlan[id],"",""));
//					 
//				}
//				
//				if(strArrSwrepFundMode[id].equalsIgnoreCase(FipaConstant.DELETE_MODE)){
//					delSwtFundList.add(new FnaSwtchrepFundDet(strArrSwRepFfId[id],fnaselfspsDets,strArrSwrepFfProdType[id],"",dblSFfFundRiskRate,strArrSwrepFfPayMode[id],dblSFfSoredmUnits,shtSwrepFfSoredPrcnt,dblSFfSirepsalChrg,dblSFfSirepAmt,shtSwrepFfSirepPrcnt,strArrSwrepFfIaffee,strArrSwrepFfCrtdBy[id],crtdDate,strArrSwrepFfComp[id],strArrSwrepFfPlan[id],"",""));
//					 
//				}
//			}
//		}
//		
//		vectSwtFundDetails.add(insSwtFundList);
//		vectSwtFundDetails.add(updSwtFundList);
//		vectSwtFundDetails.add(delSwtFundList);

		} catch (Exception ex) {
			logger.error("Error in getSwtFundDetails ->", ex);
		}
		return vectSwtFundDetails;
	}

	private Vector getOthPerDetails(HttpServletRequest request) {

		Vector<List<FnaAdvDeclare>> vectOthPersDet = new Vector<List<FnaAdvDeclare>>();
		// List<FnaAdvDeclare> OtherDetsList = new ArrayList<FnaAdvDeclare>();
		// FnaAdvDeclare fnaOthPerDets = new FnaAdvDeclare();
		//
		// HttpSession session = request.getSession(false);
		// Map<String,String> sessMap = new HashMap<String,String>();
		// sessMap = (HashMap<String,
		// String>)session.getAttribute(FipaConstant.LOGGED_USER_INFO);
		//
		// String strFNAId = FipaUtils.getParamValue(request, "fnaId");
		// String strLoggedUser = (String) sessMap.get(FipaConstant.LOGGED_USER_ID);
		// FnaSelfspouseDets fnaselfspsDets = new FnaSelfspouseDets();
		// fnaselfspsDets.setFnaId(strFNAId);
		//
		// String strCDBenfName = request.getParameter("amlBenfName") != null ?
		// request.getParameter("amlBenfName") : null;
		// fnaOthPerDets.setAmlBenfName(strCDBenfName);
		// String strCDBenfNRIC = request.getParameter("amlBenfNric") != null ?
		// request.getParameter("amlBenfNric") : null;
		// fnaOthPerDets.setAmlBenfNric(strCDBenfNRIC);
		// String strCDBenfIncorpNo = request.getParameter("amlBenfIncno") != null ?
		// request.getParameter("amlBenfIncno") : null;
		// fnaOthPerDets.setAmlBenfIncno(strCDBenfIncorpNo);
		// String strCDBenfRegAddr = request.getParameter("amlBenfAddr1") != null ?
		// request.getParameter("amlBenfAddr1") : null;
		// fnaOthPerDets.setAmlBenfAddr1(strCDBenfRegAddr);
		// String strCDBenfWork = request.getParameter("amlBenfJob") != null ?
		// request.getParameter("amlBenfJob") : null;
		// fnaOthPerDets.setAmlBenfJob(strCDBenfWork);
		// String strCDBenfWrkCountry = request.getParameter("amlBenfJobconty") != null
		// ? request.getParameter("amlBenfJobconty") : null;
		// fnaOthPerDets.setAmlBenfJobconty(strCDBenfWrkCountry);
		// String strCDBenfRelation = request.getParameter("amlBenfRelat") != null ?
		// request.getParameter("amlBenfRelat") : null;
		// fnaOthPerDets.setAmlBenfRelat(strCDBenfRelation);
		// String strCDBenfRegAddr2 = request.getParameter("amlBenfAddr2") != null ?
		// request.getParameter("amlBenfAddr2") : null;
		// fnaOthPerDets.setAmlBenfAddr2(strCDBenfRegAddr2);
		// String strCDBenfPostal = request.getParameter("amlBenfPostal") != null ?
		// request.getParameter("amlBenfPostal") : null;
		// fnaOthPerDets.setAmlBenfPostal(strCDBenfPostal);
		// String strCDBenfCntry = request.getParameter("amlBenfConty") != null ?
		// request.getParameter("amlBenfConty") : null;
		// fnaOthPerDets.setAmlBenfConty(strCDBenfCntry);
		//
		// if(!(FipaUtils.nullOrBlank(strCDBenfName) ||
		// FipaUtils.nullOrBlank(strCDBenfNRIC) ||
		// FipaUtils.nullOrBlank(strCDBenfIncorpNo) ||
		// FipaUtils.nullOrBlank(strCDBenfRegAddr)||
		// FipaUtils.nullOrBlank(strCDBenfWork) ||
		// FipaUtils.nullOrBlank(strCDBenfWrkCountry) ||
		// FipaUtils.nullOrBlank(strCDBenfRelation) ||
		// FipaUtils.nullOrBlank(strCDBenfRegAddr2) ||
		// FipaUtils.nullOrBlank(strCDBenfPostal) ||
		// FipaUtils.nullOrBlank(strCDBenfCntry))){
		//
		// fnaOthPerDets.setAdvDecCrtdBy(strLoggedUser);
		// fnaOthPerDets.setAdvDecCrtdDate(new Date());
		// fnaOthPerDets.setFnaSelfspouseDets(fnaselfspsDets);
		// OtherDetsList.add(fnaOthPerDets);
		// }
		//
		// fnaOthPerDets=new FnaAdvDeclare();
		// fnaselfspsDets = new FnaSelfspouseDets();
		// fnaselfspsDets.setFnaId(strFNAId);
		//
		// String strCDPEPName = request.getParameter("amlPepName") != null ?
		// request.getParameter("amlPepName") : null;
		// fnaOthPerDets.setAmlBenfName(strCDPEPName);
		//
		// String strCDPEPNRIC = request.getParameter("amlPepNric") != null ?
		// request.getParameter("amlPepNric") : null;
		// fnaOthPerDets.setAmlBenfNric(strCDPEPNRIC);
		//
		// String strCDPEPIncorpNo = request.getParameter("amlPepIncno") != null ?
		// request.getParameter("amlPepIncno") : null;
		// fnaOthPerDets.setAmlBenfIncno(strCDPEPIncorpNo);
		//
		// String strCDPEPRegAddr = request.getParameter("amlPepAddr1") != null ?
		// request.getParameter("amlPepAddr1") : null;
		// fnaOthPerDets.setAmlBenfAddr1(strCDPEPRegAddr);
		//
		// String strCDPEPWork = request.getParameter("amlPepJob") != null ?
		// request.getParameter("amlPepJob") : null;
		// fnaOthPerDets.setAmlBenfJob(strCDPEPWork);
		//
		// String strCDPEPWrkCountry = request.getParameter("amlPepJobconty") != null ?
		// request.getParameter("amlPepJobconty") : null;
		// fnaOthPerDets.setAmlBenfJobconty(strCDPEPWrkCountry);
		//
		// String strCDPEPRelation = request.getParameter("amlPepRelat") != null ?
		// request.getParameter("amlPepRelat") : null;
		// fnaOthPerDets.setAmlBenfRelat(strCDPEPRelation);
		//
		// String strCDPEPRegAddr2 = request.getParameter("amlPepAddr2") != null ?
		// request.getParameter("amlPepAddr2") : null;
		// fnaOthPerDets.setAmlBenfAddr2(strCDPEPRegAddr2);
		// String strCDPEPPostal = request.getParameter("amlPepPostal") != null ?
		// request.getParameter("amlPepPostal") : null;
		// fnaOthPerDets.setAmlBenfPostal(strCDPEPPostal);
		// String strCDPEPCntry = request.getParameter("amlPepConty") != null ?
		// request.getParameter("amlPepConty") : null;
		// fnaOthPerDets.setAmlBenfConty(strCDPEPCntry);
		//
		// if(!(FipaUtils.nullOrBlank(strCDPEPName) ||
		// FipaUtils.nullOrBlank(strCDPEPNRIC) ||
		// FipaUtils.nullOrBlank(strCDPEPIncorpNo) ||
		// FipaUtils.nullOrBlank(strCDPEPRegAddr) ||
		// FipaUtils.nullOrBlank(strCDPEPWork) ||
		// FipaUtils.nullOrBlank(strCDPEPWrkCountry) ||
		// FipaUtils.nullOrBlank(strCDPEPRelation) |
		// FipaUtils.nullOrBlank(strCDPEPRegAddr2) ||
		// FipaUtils.nullOrBlank(strCDPEPPostal) ||
		// FipaUtils.nullOrBlank(strCDPEPCntry))){
		//
		// fnaOthPerDets.setTxtFldOthPerCateg("PEP");
		// fnaOthPerDets.setAdvDecCrtdBy(strLoggedUser);
		// fnaOthPerDets.setAdvDecCrtdDate(new Date());
		// fnaOthPerDets.setFnaSelfspouseDets(fnaselfspsDets);
		// OtherDetsList.add(fnaOthPerDets);
		// }
		//
		// fnaOthPerDets=new FnaAdvDeclare();
		// fnaselfspsDets = new FnaSelfspouseDets();
		// fnaselfspsDets.setFnaId(strFNAId);
		//
		//
		// String strCDTPPName = request.getParameter("amlTppName") != null ?
		// request.getParameter("amlTppName") : null;
		// fnaOthPerDets.setTxtFldOthPerName(strCDTPPName);
		//
		// String strCDTPPNRIC = request.getParameter("amlTppNric") != null ?
		// request.getParameter("amlTppNric") : null;
		// fnaOthPerDets.setTxtFldOthPerNric(strCDTPPNRIC);
		//
		// String strCDTPPIncorpNo = request.getParameter("amlTppIncno") != null ?
		// request.getParameter("amlTppIncno") : null;
		// fnaOthPerDets.setTxtFldOthPerIncorpno(strCDTPPIncorpNo);
		//
		// String strCDTPPRegAddr = request.getParameter("amlTppAddr1") != null ?
		// request.getParameter("amlTppAddr1") : null;
		// fnaOthPerDets.setTxtFldOthPerRegAddr(strCDTPPRegAddr);
		//
		// String strCDTPPWork = request.getParameter("amlTppJob") != null ?
		// request.getParameter("amlTppJob") : null;
		// fnaOthPerDets.setTxtFldOthPerWork(strCDTPPWork);
		//
		// String strCDTPPWrkCountry = request.getParameter("amlTppJobconty") != null ?
		// request.getParameter("amlTppJobconty") : null;
		// fnaOthPerDets.setTxtFldOthPerWorkCountry(strCDTPPWrkCountry);
		//
		// String strCDTPPRelation = request.getParameter("amlTppRelat") != null ?
		// request.getParameter("amlTppRelat") : null;
		// fnaOthPerDets.setTxtFldOthPerRelation(strCDTPPRelation);
		//
		// String strOthPerPayMode = request.getParameter("amlTppPaymode") != null ?
		// request.getParameter("amlTppPaymode") : null;
		// fnaOthPerDets.setTxtFldOthPerPayMode(strOthPerPayMode);
		//
		// String strCDTPPBankName = request.getParameter("amlTppBank") != null ?
		// request.getParameter("amlTppBank") : null;
		// fnaOthPerDets.setTxtFldOthPerBankName(strCDTPPBankName);
		//
		// String strCDTPPChqOrderNo = request.getParameter("amlTppChqno") != null ?
		// request.getParameter("amlTppChqno") : null;
		// fnaOthPerDets.setTxtFldOthPerChqOrderNo(strCDTPPChqOrderNo);
		//
		// String strCDTPPContNo = request.getParameter("amlTppMobile") != null ?
		// request.getParameter("amlTppMobile") : null;
		// fnaOthPerDets.setam (strCDTPPContNo);
		//
		// String strCDTPPRegAddr2 = request.getParameter("amlTppAddr2") != null ?
		// request.getParameter("amlTppAddr2") : null;
		// fnaOthPerDets.setAmlBenfAddr2(strCDTPPRegAddr2);
		// String strCDTPPPostal = request.getParameter("amlTppPostal") != null ?
		// request.getParameter("amlTppPostal") : null;
		// fnaOthPerDets.setAmlBenfPostal(strCDTPPPostal);
		// String strCDTPPCntry = request.getParameter("amlTppConty") != null ?
		// request.getParameter("amlTppConty") : null;
		// fnaOthPerDets.setAmlBenfConty(strCDTPPCntry);
		//
		// if(!(FipaUtils.nullOrBlank(strCDTPPName) ||
		// FipaUtils.nullOrBlank(strCDTPPNRIC) ||
		// FipaUtils.nullOrBlank(strCDTPPIncorpNo) ||
		// FipaUtils.nullOrBlank(strCDTPPRegAddr) ||
		// FipaUtils.nullOrBlank(strCDTPPWork) ||
		// FipaUtils.nullOrBlank(strCDTPPWrkCountry) ||
		// FipaUtils.nullOrBlank(strCDTPPRelation) ||
		// FipaUtils.nullOrBlank(strOthPerPayMode) ||
		// FipaUtils.nullOrBlank(strCDTPPBankName) ||
		// FipaUtils.nullOrBlank(strCDTPPChqOrderNo) ||
		// FipaUtils.nullOrBlank(strCDTPPContNo) ||
		// FipaUtils.nullOrBlank(strCDTPPRegAddr2) ||
		// FipaUtils.nullOrBlank(strCDTPPPostal) || FipaUtils.nullOrBlank(strCDTPPCntry)
		// )){
		//
		// fnaOthPerDets.setTxtFldOthPerCateg("TPP");
		// fnaOthPerDets.setAdvDecCrtdBy(strLoggedUser);
		// fnaOthPerDets.setAdvDecCrtdDate(new Date());
		// fnaOthPerDets.setFnaSelfspouseDets(fnaselfspsDets);
		// OtherDetsList.add(fnaOthPerDets);
		// }
		//
		// vectOthPersDet.add(OtherDetsList);
		return vectOthPersDet;

	}

	public Vector getCashOfBankDetails(HttpServletRequest request) {
		// TODO Auto-generated method stub

		Vector vectCobDetails = new Vector();
		List insCobList = new ArrayList();
		List updCobList = new ArrayList();
		List updCobListAS = new ArrayList();
		List delCobList = new ArrayList();

		HttpSession session = request.getSession(false);
		Map<String, String> sessMap = new HashMap<String, String>();
		sessMap = (HashMap<String, String>) session.getAttribute(FipaConstant.LOGGED_USER_INFO);

		try {

			String[] strArrCobMode = FipaUtils.getParamArrValue(request, "txtFldCobMode");
			String[] strArrCashBankId = FipaUtils.getParamArrValue(request, "txtFldCashBankId");
			String[] strArrCobMainHoldrName = FipaUtils.getParamArrValue(request, "txtFldMainAccHolderName");
			String[] strArrCobSuppHoldrName = FipaUtils.getParamArrValue(request, "txtFldSuppAccHolderName");
			String[] strArrCobRelationship = FipaUtils.getParamArrValue(request, "selCOBRelationship");
			String[] strArrCobOwnershipType = FipaUtils.getParamArrValue(request, "selCOBOwnershipType");
			String[] strArrCobBankName = FipaUtils.getParamArrValue(request, "txtFldCOBBankName");
			String[] strArrCobBankAccNo = FipaUtils.getParamArrValue(request, "txtFldCOBBankAccNo");
			String[] strArrCobAccountType = FipaUtils.getParamArrValue(request, "selCOBAccountType");
			String[] strArrCobCurBalance = FipaUtils.getParamArrValue(request, "txtFldCOBCurBalance");
			String[] strArrCobRegDeposit = FipaUtils.getParamArrValue(request, "txtFldCOBRegDeposit");
			String[] strArrCobDepositFreq = FipaUtils.getParamArrValue(request, "selCOBDepositFreq");
			String[] strArrCobPerFrom = FipaUtils.getParamArrValue(request, "txtFldCOBPerFrom");
			String[] strArrCobPerTo = FipaUtils.getParamArrValue(request, "txtFldCOBPerTo");
			String[] strArrCobObjective = FipaUtils.getParamArrValue(request, "selCOBObjective");
			String[] strArrCobRetrmtPrcnt = FipaUtils.getParamArrValue(request, "txtFldCOBRetrmntPrcnt");
			String[] strArrCobChildName = FipaUtils.getParamArrValue(request, "selCOBChildName");
			String[] strArrCobRemarks = FipaUtils.getParamArrValue(request, "txtFldCOBRemarks");
			String[] strArrCobCrtdBy = FipaUtils.getParamArrValue(request, "txtFldCOBCrtdBy");
			String[] strArrCobCrtdDate = FipaUtils.getParamArrValue(request, "txtFldCOBCrtdDate");
			String[] strArrCobModBy = FipaUtils.getParamArrValue(request, "txtFldCOBModifiedBy");
			String[] strArrCobModDate = FipaUtils.getParamArrValue(request, "txtFldCOBModifiedDate");
			String[] strArrCobRefId = FipaUtils.getParamArrValue(request, "txtFldCOBRefId");
			String[] strArrCobDescription = FipaUtils.getParamArrValue(request, "txtFldCOBDescription");
			String[] strArrCobPeriodRegDeposit = FipaUtils.getParamArrValue(request, "");
			
			String strFNAId = FipaUtils.getParamValue(request, "fnaId");
			String strLoggedUser = (String) sessMap.get(FipaConstant.LOGGED_USER_ID);

			if (strArrCobMode != null && strArrCobMode.length > 0) {

				for (int id = 0; id < strArrCobMode.length; id++) {

					double dblCobCurBalc = Double.parseDouble(
							FipaUtils.nullOrBlank(strArrCobCurBalance[id]) ? "0" : strArrCobCurBalance[id]);
					double dblCobRegDep = Double.parseDouble(
							FipaUtils.nullOrBlank(strArrCobRegDeposit[id]) ? "0" : strArrCobRegDeposit[id]);
					double dblCobRetrmntPrcnt = Double.parseDouble(
							FipaUtils.nullOrBlank(strArrCobRetrmtPrcnt[id]) ? "0" : strArrCobRetrmtPrcnt[id]);
					double dblCobPeriodRegDep = Double.parseDouble(
							FipaUtils.nullOrBlank(strArrCobPeriodRegDeposit[id]) ? "0" : strArrCobPeriodRegDeposit[id]);
					
					Date DateCobPerFrom = FipaUtils.nullOrBlank(strArrCobPerFrom[id]) ? null
							: FipaDateUtils.convertStringToDate(strArrCobPerFrom[id]);
					Date DateCobPerTo = FipaUtils.nullOrBlank(strArrCobPerTo[id]) ? null
							: FipaDateUtils.convertStringToDate(strArrCobPerTo[id]);

					Date crtdDate = FipaUtils.nullOrBlank(strArrCobCrtdDate[id]) ? new Date()
							: FipaDateUtils.convertStringToDate(strArrCobCrtdDate[id]);

					FnaSelfspouseDets fnaselfspsDets = new FnaSelfspouseDets();
					fnaselfspsDets.setFnaId(strFNAId);

					String strPKId = FipaUtils.nullOrBlank(strArrCashBankId[id]) ? "" : strArrCashBankId[id];

					if (strArrCobMode[id].equalsIgnoreCase(FipaConstant.INSERT_MODE)
							&& FipaUtils.nullOrBlank(strPKId)) {
						insCobList.add(
								new FnaCashAtBank(null, null, strArrCobMainHoldrName[id], strArrCobSuppHoldrName[id],
										strArrCobRelationship[id], strArrCobOwnershipType[id], strArrCobBankName[id],
										strArrCobBankAccNo[id], strArrCobAccountType[id], dblCobCurBalc, dblCobRegDep,
										strArrCobDepositFreq[id], DateCobPerFrom, DateCobPerTo, strArrCobObjective[id],
										dblCobRetrmntPrcnt, strArrCobChildName[id], strArrCobRemarks[id], strLoggedUser,
										new Date(), null, null, strArrCobRefId[id], strArrCobDescription[id],dblCobPeriodRegDep));

					}

					if (strArrCobMode[id].equalsIgnoreCase(FipaConstant.UPDATE_MODE)
							|| (strArrCobMode[id].equalsIgnoreCase(FipaConstant.INSERT_MODE)
									&& !FipaUtils.nullOrBlank(strPKId))) {
						if (strPKId.startsWith("AS")) {
							updCobListAS.add(new FnaCashAtBank(strArrCashBankId[id], fnaselfspsDets,
									strArrCobMainHoldrName[id], strArrCobSuppHoldrName[id], strArrCobRelationship[id],
									strArrCobOwnershipType[id], strArrCobBankName[id], strArrCobBankAccNo[id],
									strArrCobAccountType[id], dblCobCurBalc, dblCobRegDep, strArrCobDepositFreq[id],
									DateCobPerFrom, DateCobPerTo, strArrCobObjective[id], dblCobRetrmntPrcnt,
									strArrCobChildName[id], strArrCobRemarks[id], strLoggedUser, new Date(),
									strLoggedUser, new Date(), strArrCobRefId[id], strArrCobDescription[id],dblCobPeriodRegDep));

						} else {
							updCobList.add(new FnaCashAtBank(strArrCashBankId[id], fnaselfspsDets,
									strArrCobMainHoldrName[id], strArrCobSuppHoldrName[id], strArrCobRelationship[id],
									strArrCobOwnershipType[id], strArrCobBankName[id], strArrCobBankAccNo[id],
									strArrCobAccountType[id], dblCobCurBalc, dblCobRegDep, strArrCobDepositFreq[id],
									DateCobPerFrom, DateCobPerTo, strArrCobObjective[id], dblCobRetrmntPrcnt,
									strArrCobChildName[id], strArrCobRemarks[id], strArrCobCrtdBy[id], crtdDate,
									strLoggedUser, new Date(), strArrCobRefId[id], strArrCobDescription[id],dblCobPeriodRegDep));

						}

					}

					if (strArrCobMode[id].equalsIgnoreCase(FipaConstant.DELETE_MODE)) {
						delCobList.add(new FnaCashAtBank(strArrCashBankId[id], fnaselfspsDets,
								strArrCobMainHoldrName[id], strArrCobSuppHoldrName[id], strArrCobRelationship[id],
								strArrCobOwnershipType[id], strArrCobBankName[id], strArrCobBankAccNo[id],
								strArrCobAccountType[id], dblCobCurBalc, dblCobRegDep, strArrCobDepositFreq[id],
								DateCobPerFrom, DateCobPerTo, strArrCobObjective[id], dblCobRetrmntPrcnt,
								strArrCobChildName[id], strArrCobRemarks[id], strArrCobCrtdBy[id], crtdDate,
								strLoggedUser, new Date(), strArrCobRefId[id], strArrCobDescription[id],dblCobPeriodRegDep));

					}

				}
			}

			vectCobDetails.add(insCobList);
			vectCobDetails.add(updCobList);
			vectCobDetails.add(delCobList);
			vectCobDetails.add(updCobListAS);

		} catch (Exception ex) {
			logger.error("Error in getCashOfBankDetails ->", ex);
		}
		return vectCobDetails;
	}

	public Vector getSRSDetails(HttpServletRequest request) {
		// TODO Auto-generated method stub

		Vector vectSRSDetails = new Vector();
		List insSRSList = new ArrayList();
		List updSRSList = new ArrayList();
		List updSRSListAS = new ArrayList();
		List delSRSList = new ArrayList();

		HttpSession session = request.getSession(false);
		Map<String, String> sessMap = new HashMap<String, String>();
		sessMap = (HashMap<String, String>) session.getAttribute(FipaConstant.LOGGED_USER_INFO);

		try {

			String[] strArrSRSMode = FipaUtils.getParamArrValue(request, "txtFldcshSRSMode");
			String[] strArrSRSId = FipaUtils.getParamArrValue(request, "txtFldSRSId");
			String[] strArrSRSRefId = FipaUtils.getParamArrValue(request, "txtFldSRSRefId");
			String[] strArrSrsClassify = FipaUtils.getParamArrValue(request, "selSrsClassify");
			String[] strArrSrsDesc = FipaUtils.getParamArrValue(request, "txtFldSrsDesc");
			String[] strArrSrsFreq = FipaUtils.getParamArrValue(request, "selSrsFreq");
			String[] strArrSrsAmount = FipaUtils.getParamArrValue(request, "txtFldSrsAmount");
			String[] strArrSrsPerdFrom = FipaUtils.getParamArrValue(request, "txtFldSrsPerdFrom");
			String[] strArrSrsPerdTo = FipaUtils.getParamArrValue(request, "txtFldSrsPerdTo");
			String[] strArrSrsAgestart = FipaUtils.getParamArrValue(request, "txtFldSrsAgestart");
			String[] strArrSrsPayoutPerd = FipaUtils.getParamArrValue(request, "txtFldSrsPayoutPerd");
			String[] strArrSrsCrtdBy = FipaUtils.getParamArrValue(request, "txtFldSrsCrtdBy");
			String[] strArrSrsCrtdDate = FipaUtils.getParamArrValue(request, "txtFldSrsCrtdDate");

			String strFNAId = FipaUtils.getParamValue(request, "fnaId");
			String strLoggedUser = (String) sessMap.get(FipaConstant.LOGGED_USER_ID);

			if (strArrSRSMode != null && strArrSRSMode.length > 0) {

				for (int id = 0; id < strArrSRSMode.length; id++) {

					double dblSrsAmount = Double
							.parseDouble(FipaUtils.nullOrBlank(strArrSrsAmount[id]) ? "0" : strArrSrsAmount[id]);

					Date DateSrsPerdFrom = FipaUtils.nullOrBlank(strArrSrsPerdFrom[id]) ? null
							: FipaDateUtils.convertStringToDate(strArrSrsPerdFrom[id]);
					Date DateSrsPerdTo = FipaUtils.nullOrBlank(strArrSrsPerdTo[id]) ? null
							: FipaDateUtils.convertStringToDate(strArrSrsPerdTo[id]);

					Date crtdDate = FipaUtils.nullOrBlank(strArrSrsCrtdDate[id]) ? new Date()
							: FipaDateUtils.convertStringToDate(strArrSrsCrtdDate[id]);

					FnaSelfspouseDets fnaselfspsDets = new FnaSelfspouseDets();
					fnaselfspsDets.setFnaId(strFNAId);

					String strPKId = FipaUtils.nullOrBlank(strArrSRSId[id]) ? "" : strArrSRSId[id];

					if (strArrSRSMode[id].equalsIgnoreCase(FipaConstant.INSERT_MODE)
							&& FipaUtils.nullOrBlank(strPKId)) {
						insSRSList.add(new FnaSrs(null, null, strArrSRSRefId[id], strArrSrsClassify[id],
								strArrSrsDesc[id], strArrSrsFreq[id], dblSrsAmount, DateSrsPerdFrom, DateSrsPerdTo,
								strArrSrsAgestart[id], strArrSrsPayoutPerd[id], strLoggedUser, new Date(), null, null));

					}

					if (strArrSRSMode[id].equalsIgnoreCase(FipaConstant.UPDATE_MODE)
							|| (strArrSRSMode[id].equalsIgnoreCase(FipaConstant.INSERT_MODE)
									&& !FipaUtils.nullOrBlank(strPKId))) {

						if (strPKId.startsWith("AS")) {
							updSRSListAS.add(new FnaSrs(strArrSRSId[id], fnaselfspsDets, strArrSRSRefId[id],
									strArrSrsClassify[id], strArrSrsDesc[id], strArrSrsFreq[id], dblSrsAmount,
									DateSrsPerdFrom, DateSrsPerdTo, strArrSrsAgestart[id], strArrSrsPayoutPerd[id],
									strLoggedUser, new Date(), strLoggedUser, new Date()));

						} else {
							updSRSList.add(new FnaSrs(strArrSRSId[id], fnaselfspsDets, strArrSRSRefId[id],
									strArrSrsClassify[id], strArrSrsDesc[id], strArrSrsFreq[id], dblSrsAmount,
									DateSrsPerdFrom, DateSrsPerdTo, strArrSrsAgestart[id], strArrSrsPayoutPerd[id],
									strArrSrsCrtdBy[id], crtdDate, strLoggedUser, new Date()));

						}

					}

					if (strArrSRSMode[id].equalsIgnoreCase(FipaConstant.DELETE_MODE)) {
						delSRSList.add(new FnaSrs(strArrSRSId[id], fnaselfspsDets, strArrSRSRefId[id],
								strArrSrsClassify[id], strArrSrsDesc[id], strArrSrsFreq[id], dblSrsAmount,
								DateSrsPerdFrom, DateSrsPerdTo, strArrSrsAgestart[id], strArrSrsPayoutPerd[id],
								strArrSrsCrtdBy[id], crtdDate, strLoggedUser, new Date()));

					}

				}
			}

			vectSRSDetails.add(insSRSList);
			vectSRSDetails.add(updSRSList);
			vectSRSDetails.add(delSRSList);
			vectSRSDetails.add(updSRSListAS);
		} catch (Exception ex) {
			logger.error("Error in getSRSDetails ->", ex);
		}

		return vectSRSDetails;
	}

	public Vector getliMvRetDetails(HttpServletRequest request) {
		// TODO Auto-generated method stub

		Vector vectliRetPlgDet = new Vector();
		List insliRetPlgList = new ArrayList();
		List updliRetPlgList = new ArrayList();
		List updliRetPlgListAS = new ArrayList();
		List delliRetPlgList = new ArrayList();

		HttpSession session = request.getSession(false);
		Map<String, String> sessMap = new HashMap<String, String>();
		sessMap = (HashMap<String, String>) session.getAttribute(FipaConstant.LOGGED_USER_INFO);

		try {

			String[] strArrRetPlgMode = FipaUtils.getParamArrValue(request, "txtFldretplgMode");
			String[] strArrRetPlgId = FipaUtils.getParamArrValue(request, "txtFldLifeMvRetId");

			String[] strArrLiComceAge = FipaUtils.getParamArrValue(request, "txtFldCommenceAge");
			String[] strArrLiEndAge = FipaUtils.getParamArrValue(request, "txtFldEndAge");
			String[] strArrLiEsclRate = FipaUtils.getParamArrValue(request, "txtFldEsclationRate");

			String[] strArrLiGtdIncome = FipaUtils.getParamArrValue(request, "txtFldGtdIncome");
			String[] strArrLiNGtdIncome = FipaUtils.getParamArrValue(request, "txtFldNonGtdIncome");
			// String[] strArrLiIncomeStrm = FipaUtils.getParamArrValue(request,
			// "txtFldIncomeStream");

			// String[] strArrLiPvFvOnRet = FipaUtils.getParamArrValue(request,
			// "txtFldPvFvOnRet");
			String[] strArrLiAssBankInt = FipaUtils.getParamArrValue(request, "txtFldAssumedBankInt");
			String[] strArrLiTotalIncome = FipaUtils.getParamArrValue(request, "txtFldTotalIncome");
			String[] strArrMvLiRemarks = FipaUtils.getParamArrValue(request, "txtFldMvRemarks");

			String[] strArrMvRetCrtdBy = FipaUtils.getParamArrValue(request, "txtFldMvRetCrtdBy");
			String[] strArrMvRetCrtdDate = FipaUtils.getParamArrValue(request, "txtFldMvRetCrtdDate");
			String[] strArrMvRetModBy = FipaUtils.getParamArrValue(request, "txtFldMvRetModBy");
			String[] strArrMvRetModDate = FipaUtils.getParamArrValue(request, "txtFldMvRetModDate");
			String[] strArrMvRetRefId = FipaUtils.getParamArrValue(request, "txtFldMvRetRefId");

			String[] strArrMvRetPlanName = FipaUtils.getParamArrValue(request, "txtFldMvretPlanName");
			String[] strArrMvRetIncDate = FipaUtils.getParamArrValue(request, "txtFldMvretIncDate");
			String[] strArrMvRetExpDate = FipaUtils.getParamArrValue(request, "txtFldMvretExpDate");

			String strFNAId = FipaUtils.getParamValue(request, "fnaId");
			String strLISId = FipaUtils.getParamValue(request, "lipId");
			String strLoggedUser = (String) sessMap.get(FipaConstant.LOGGED_USER_ID);

			if (strArrRetPlgMode != null && strArrRetPlgMode.length > 0) {

				for (int id = 0; id < strArrRetPlgMode.length; id++) {

					double dbllipGtdInc = Double
							.parseDouble(FipaUtils.nullOrBlank(strArrLiGtdIncome[id]) ? "0" : strArrLiGtdIncome[id]);
					double dbllipNGtdInc = Double
							.parseDouble(FipaUtils.nullOrBlank(strArrLiNGtdIncome[id]) ? "0" : strArrLiNGtdIncome[id]);
					// double dbllipIncStrm =
					// Double.parseDouble(FipaUtils.nullOrBlank(strArrLiIncomeStrm[id]) ? "0"
					// :strArrLiIncomeStrm[id]);
					double dbllipIncStrm = 0;
					// double dbllipPvFvOnRet =
					// Double.parseDouble(FipaUtils.nullOrBlank(strArrLiPvFvOnRet[id]) ? "0"
					// :strArrLiPvFvOnRet[id]);
					double dbllipPvFvOnRet = 0;
					double dbllipAssBankInt = Double
							.parseDouble(FipaUtils.nullOrBlank(strArrLiAssBankInt[id]) ? "0" : strArrLiAssBankInt[id]);

					double dbllipTotIncome = Double.parseDouble(
							FipaUtils.nullOrBlank(strArrLiTotalIncome[id]) ? "0" : strArrLiTotalIncome[id]);

					double dbllipEsclRate = Double
							.parseDouble(FipaUtils.nullOrBlank(strArrLiEsclRate[id]) ? "0" : strArrLiEsclRate[id]);

					Date crtdDate = FipaUtils.nullOrBlank(strArrMvRetCrtdDate[id]) ? new Date()
							: FipaDateUtils.convertStringToDate(strArrMvRetCrtdDate[id]);

					Date incDate = FipaUtils.nullOrBlank(strArrMvRetIncDate[id]) ? new Date()
							: FipaDateUtils.convertStringToDate(strArrMvRetIncDate[id]);
					Date expDate = FipaUtils.nullOrBlank(strArrMvRetExpDate[id]) ? new Date()
							: FipaDateUtils.convertStringToDate(strArrMvRetExpDate[id]);

					FnaSelfspouseDets fnaselfspsDets = new FnaSelfspouseDets();
					fnaselfspsDets.setFnaId(strFNAId);

					FnaLifeinsuranceDets fnalifeInsDets = new FnaLifeinsuranceDets();
					fnalifeInsDets.setLipId(strLISId);

					String strPKId = FipaUtils.nullOrBlank(strArrRetPlgId[id]) ? "" : strArrRetPlgId[id];

					if (strArrRetPlgMode[id].equalsIgnoreCase(FipaConstant.INSERT_MODE)
							&& FipaUtils.nullOrBlank(strPKId)) {
						insliRetPlgList.add(new FnaLifeinsuranceMvRet(null, fnalifeInsDets, null, strArrLiComceAge[id],
								strArrLiEndAge[id], dbllipEsclRate, dbllipGtdInc, dbllipNGtdInc, dbllipIncStrm,
								dbllipPvFvOnRet, dbllipAssBankInt, dbllipTotIncome, strArrMvLiRemarks[id],
								strLoggedUser, new Date(), null, null, strArrMvRetRefId[id], strArrMvRetPlanName[id],
								incDate, expDate));

					}

					if (strArrRetPlgMode[id].equalsIgnoreCase(FipaConstant.UPDATE_MODE)
							|| (strArrRetPlgMode[id].equalsIgnoreCase(FipaConstant.INSERT_MODE)
									&& !FipaUtils.nullOrBlank(strPKId))) {

						if (strPKId.startsWith("AS")) {
							updliRetPlgListAS.add(new FnaLifeinsuranceMvRet(strArrRetPlgId[id], fnalifeInsDets,
									fnaselfspsDets, strArrLiComceAge[id], strArrLiEndAge[id], dbllipEsclRate,
									dbllipGtdInc, dbllipNGtdInc, dbllipIncStrm, dbllipPvFvOnRet, dbllipAssBankInt,
									dbllipTotIncome, strArrMvLiRemarks[id], strLoggedUser, new Date(), strLoggedUser,
									new Date(), strArrMvRetRefId[id], strArrMvRetPlanName[id], incDate, expDate));

						} else {
							updliRetPlgList.add(new FnaLifeinsuranceMvRet(strArrRetPlgId[id], fnalifeInsDets,
									fnaselfspsDets, strArrLiComceAge[id], strArrLiEndAge[id], dbllipEsclRate,
									dbllipGtdInc, dbllipNGtdInc, dbllipIncStrm, dbllipPvFvOnRet, dbllipAssBankInt,
									dbllipTotIncome, strArrMvLiRemarks[id], strArrMvRetCrtdBy[id], crtdDate,
									strLoggedUser, new Date(), strArrMvRetRefId[id], strArrMvRetPlanName[id], incDate,
									expDate));

						}

					}

					if (strArrRetPlgMode[id].equalsIgnoreCase(FipaConstant.DELETE_MODE)) {
						delliRetPlgList.add(new FnaLifeinsuranceMvRet(strArrRetPlgId[id], fnalifeInsDets,
								fnaselfspsDets, strArrLiComceAge[id], strArrLiEndAge[id], dbllipEsclRate, dbllipGtdInc,
								dbllipNGtdInc, dbllipIncStrm, dbllipPvFvOnRet, dbllipAssBankInt, dbllipTotIncome,
								strArrMvLiRemarks[id], strArrMvRetCrtdBy[id], crtdDate, strLoggedUser, new Date(),
								strArrMvRetRefId[id], strArrMvRetPlanName[id], incDate, expDate));

					}
				}
			}

			vectliRetPlgDet.add(insliRetPlgList);
			vectliRetPlgDet.add(updliRetPlgList);
			vectliRetPlgDet.add(delliRetPlgList);
			vectliRetPlgDet.add(updliRetPlgListAS);
		} catch (Exception ex) {
			logger.error("Error in getliMvRetDetails ->", ex);
		}

		return vectliRetPlgDet;
	}

	public Vector getliChildDets(HttpServletRequest request) {
		// TODO Auto-generated method stub

		Vector vectliEduPlgDet = new Vector();
		List insliEduPlgList = new ArrayList();
		List updliEduPlgList = new ArrayList();
		List updliEduPlgListAS = new ArrayList();
		List delliEduPlgList = new ArrayList();

		HttpSession session = request.getSession(false);
		Map<String, String> sessMap = new HashMap<String, String>();
		sessMap = (HashMap<String, String>) session.getAttribute(FipaConstant.LOGGED_USER_INFO);

		try {
			String[] strArrEduPlgMode = FipaUtils.getParamArrValue(request, "txtFldEduPlgMode");
			String[] strArrEduPlgId = FipaUtils.getParamArrValue(request, "txtFldEduPlgId");

			String[] strArrLiChldname = FipaUtils.getParamArrValue(request, "selEdPlgChldName");
			String[] strArrLiChldAge = FipaUtils.getParamArrValue(request, "txtFldEdPlgChldAge");
			String[] strArrLiTerEduAge = FipaUtils.getParamArrValue(request, "txtFldEdPlgTerEdcAge");
			String[] strArrLiBankIntRate = FipaUtils.getParamArrValue(request, "txtFldEdPlgBankIntRate");
			String[] strArrLiLoanIntRate = FipaUtils.getParamArrValue(request, "txtFldEdPlgLoanIntRate");
			String[] strArrLiInfRate = FipaUtils.getParamArrValue(request, "txtFldEdPlgInfRate");
			String[] strArrLiChlBegAge = FipaUtils.getParamArrValue(request, "txtFldEduPlgChlBegAge");
			String[] strArrLiTotProPaid = FipaUtils.getParamArrValue(request, "txtFldEduPlgTotProPaid");
			String[] strArrLiChldTerAge = FipaUtils.getParamArrValue(request, "txtFldEduPlgChldTerAge");
			String[] strArrLiRefId = FipaUtils.getParamArrValue(request, "txtFldRefId");

			String[] strArrLiPlanName = FipaUtils.getParamArrValue(request, "txtFldChldPlanName");
			String[] strArrLiIncDate = FipaUtils.getParamArrValue(request, "txtFldChldIncDate");
			String[] strArrLiExpDate = FipaUtils.getParamArrValue(request, "txtFldChldExpDate");

			String[] strArrEduPlgCrtdBy = FipaUtils.getParamArrValue(request, "txtFldEduPlgCrtdBy");
//		String[] strArrEduPlgCrtdDate 			= FipaUtils.getParamArrValue(request, "txtFldEduPlgCrtdDate");   
//		System.out.println("strArrLiChlBegAge.length--->"+strArrLiChlBegAge.length+",strArrEduPlgMode.length-->"+strArrEduPlgMode.length);

			String strFNAId = FipaUtils.getParamValue(request, "fnaId");
			String strLISId = FipaUtils.getParamValue(request, "lipId");
			String strLoggedUser = (String) sessMap.get(FipaConstant.LOGGED_USER_ID);

			if (strArrEduPlgMode != null && strArrEduPlgMode.length > 0) {

				for (int id = 0; id < strArrEduPlgMode.length; id++) {

					double dbllipBankIntRate = Double.parseDouble(
							FipaUtils.nullOrBlank(strArrLiBankIntRate[id]) ? "0" : strArrLiBankIntRate[id]);
					double dbllipInflationRate = Double
							.parseDouble(FipaUtils.nullOrBlank(strArrLiInfRate[id]) ? "0" : strArrLiInfRate[id]);
					double dbllipProPaid = Double
							.parseDouble(FipaUtils.nullOrBlank(strArrLiTotProPaid[id]) ? "0" : strArrLiTotProPaid[id]);
					double dbllipChldAge = Double
							.parseDouble(FipaUtils.nullOrBlank(strArrLiChldTerAge[id]) ? "0" : strArrLiChldTerAge[id]);

					double dbllipLoanIntRate = Double.parseDouble(
							FipaUtils.nullOrBlank(strArrLiLoanIntRate[id]) ? "0" : strArrLiLoanIntRate[id]);

					Date incDate = FipaUtils.nullOrBlank(strArrLiIncDate[id]) ? null
							: FipaDateUtils.convertStringToDate(strArrLiIncDate[id]);
					Date expDate = FipaUtils.nullOrBlank(strArrLiExpDate[id]) ? null
							: FipaDateUtils.convertStringToDate(strArrLiExpDate[id]);

//				Date crtdDate = FipaUtils.nullOrBlank(strArrEduPlgCrtdDate[id]) ? new Date() :FipaDateUtils.convertStringToDate(strArrEduPlgCrtdDate[id]);
					Date crtdDate = new Date();

					FnaSelfspouseDets fnaselfspsDets = new FnaSelfspouseDets();
					fnaselfspsDets.setFnaId(strFNAId);

					FnaLifeinsuranceDets fnalifeInsDets = new FnaLifeinsuranceDets();
					fnalifeInsDets.setLipId(strLISId);

					String strPKId = FipaUtils.nullOrBlank(strArrEduPlgId[id]) ? "" : strArrEduPlgId[id];

					if (strArrEduPlgMode[id].equalsIgnoreCase(FipaConstant.INSERT_MODE)
							&& FipaUtils.nullOrBlank(strPKId)) {
						insliEduPlgList.add(new FnaLifeinsuranceChildedc(null, null, null, strArrLiChldname[id],
								strArrLiChldAge[id], strArrLiTerEduAge[id], dbllipBankIntRate, dbllipLoanIntRate,
								dbllipInflationRate, strArrLiChlBegAge[id], dbllipProPaid, dbllipChldAge, null,
								strLoggedUser, new Date(), null, null, strArrLiRefId[id], strArrLiPlanName[id], incDate,
								expDate));
					}

					if (strArrEduPlgMode[id].equalsIgnoreCase(FipaConstant.UPDATE_MODE)
							|| (strArrEduPlgMode[id].equalsIgnoreCase(FipaConstant.INSERT_MODE)
									&& !FipaUtils.nullOrBlank(strPKId))) {

						if (strPKId.startsWith("AS")) {
							updliEduPlgListAS.add(new FnaLifeinsuranceChildedc(strArrEduPlgId[id], fnalifeInsDets,
									fnaselfspsDets, strArrLiChldname[id], strArrLiChldAge[id], strArrLiTerEduAge[id],
									dbllipBankIntRate, dbllipLoanIntRate, dbllipInflationRate, strArrLiChlBegAge[id],
									dbllipProPaid, dbllipChldAge, null, strLoggedUser, new Date(), strLoggedUser,
									new Date(), strArrLiRefId[id], strArrLiPlanName[id], incDate, expDate));

						} else {
							updliEduPlgList.add(new FnaLifeinsuranceChildedc(strArrEduPlgId[id], fnalifeInsDets,
									fnaselfspsDets, strArrLiChldname[id], strArrLiChldAge[id], strArrLiTerEduAge[id],
									dbllipBankIntRate, dbllipLoanIntRate, dbllipInflationRate, strArrLiChlBegAge[id],
									dbllipProPaid, dbllipChldAge, null, strLoggedUser, new Date(), strLoggedUser,
									new Date(), strArrLiRefId[id], strArrLiPlanName[id], incDate, expDate));

						}

					}

					if (strArrEduPlgMode[id].equalsIgnoreCase(FipaConstant.DELETE_MODE)) {
						delliEduPlgList.add(new FnaLifeinsuranceChildedc(strArrEduPlgId[id], fnalifeInsDets,
								fnaselfspsDets, strArrLiChldname[id], strArrLiChldAge[id], strArrLiTerEduAge[id],
								dbllipBankIntRate, dbllipLoanIntRate, dbllipInflationRate, strArrLiChlBegAge[id],
								dbllipProPaid, dbllipChldAge, null, strLoggedUser, new Date(), strLoggedUser,
								new Date(), strArrLiRefId[id], strArrLiPlanName[id], incDate, expDate));

					}
				}
			}

			vectliEduPlgDet.add(insliEduPlgList);
			vectliEduPlgDet.add(updliEduPlgList);
			vectliEduPlgDet.add(delliEduPlgList);
			vectliEduPlgDet.add(updliEduPlgListAS);
		} catch (Exception ex) {
			logger.error("Error in getliChildDets ->", ex);
			ex.printStackTrace();
		}

		return vectliEduPlgDet;
	}

//	
//	public Vector getliPlnProDetails(HttpServletRequest request) {
//		// TODO Auto-generated method stub
//	
//		Vector vectliPlnProDet = new Vector();
//		List insliPlnProList = new ArrayList();
//		List updliPlnProList = new ArrayList();List updliPlnProListAS = new ArrayList();
//		List delliPlnProList = new ArrayList();
//		 
//		
//		
//		HttpSession session = request.getSession(false);
//		Map<String,String> sessMap = new HashMap<String,String>();
//		sessMap = (HashMap<String, String>)session.getAttribute(FipaConstant.LOGGED_USER_INFO);
//		
//		try{
//		
//		/*Basic Plan */
//		String[] strArrPlnProMode			= FipaUtils.getParamArrValue(request, "txtFldplnDetMode"); 
//		
//		String[] strArrPlnProId				= FipaUtils.getParamArrValue(request, "txtFldliplnId");
//		String[] strArrPlnProName 			= FipaUtils.getParamArrValue(request, "txtFldliplnName"); 
//		String[] strArrPlnProType 			= FipaUtils.getParamArrValue(request, "selliplntype");
//		String[] strArrPlnProPremTrm		= FipaUtils.getParamArrValue(request, "txtFldliplnPremTerm");
//		String[] strArrPlnProSA 			= FipaUtils.getParamArrValue(request, "txtFldliplnSA"); 
//		String[] strArrPlnProPremAmt		= FipaUtils.getParamArrValue(request, "txtFldliplnPremAmt");  
//		String[] strArrPlnProPayMode 		= FipaUtils.getParamArrValue(request, "selliplnPayMode"); 
//		String[] strArrPlnProMtd 			= FipaUtils.getParamArrValue(request, "selliplnPayMtd");
//		String[] strArrPlnProCov			= FipaUtils.getParamArrValue(request, "txtFldliplnCoverages");
//		String[] strArrPlnProRmks 			= FipaUtils.getParamArrValue(request, "txtFldliplnRemarks");
//		
//		String[] strArrPlnProExpDate		= FipaUtils.getParamArrValue(request, "txtFldPlanExpDate");
//		String[] strArrPlnProIncepDate 		= FipaUtils.getParamArrValue(request, "txtFldPlanIncepDate");
//		String[] strArrPlnRefId 			= FipaUtils.getParamArrValue(request, "txtFldPlnRefId");
//		String[] strArrBasicRefId			= FipaUtils.getParamArrValue(request, "txtFldBasicRefId"); 
//		 
//		String[] strArrbplfretYrstoret		= FipaUtils.getParamArrValue(request, "bplfretYrstoret"); 
//		String[] strArrbpretSelfretage		= FipaUtils.getParamArrValue(request, "bpretSelfretage");
//		String[] strArrbpretSpouseretage	= FipaUtils.getParamArrValue(request, "bpretSpouseretage");
//		String[] strArrbpretMultionret 		= FipaUtils.getParamArrValue(request, "bpretMultionret"); 
//		String[] strArrbpretCashvalonret	= FipaUtils.getParamArrValue(request, "bpretCashvalonret");
//		String[] strArrbpretIntrateused 	= FipaUtils.getParamArrValue(request, "bpretIntrateused");
//		String[] strArrbpretPrcnttoused 	= FipaUtils.getParamArrValue(request, "bpretPrcnttoused");
//		String[] strArrbpcashvalRetAge		= FipaUtils.getParamArrValue(request, "bpcashvalRetAge"); 
//		
//		String[] strArrbpcashvalRefId		= FipaUtils.getParamArrValue(request, "bpcashvalRefId"); 
//		
//		String[] strArrPlnProCrtdBy 		= FipaUtils.getParamArrValue(request, "txtFldliplnCrtdBy");  
//		String[] strArrPlnProCtrtDate 		= FipaUtils.getParamArrValue(request, "txtFldliplnCrtdDate");   
//		
//		
//		
//		String strFNAId     				= FipaUtils.getParamValue(request, "fnaId");
//		String strLISId     				= FipaUtils.getParamValue(request, "lipId");
//		String strLoggedUser 				= (String) sessMap.get(FipaConstant.LOGGED_USER_ID);
//		
//		
//		if(strArrPlnProMode != null && strArrPlnProMode.length>0){ 
//			for(int id=0;id<strArrPlnProMode.length;id++){ 
//				 
//				 
//				double dbllipSA =  Double.parseDouble(FipaUtils.nullOrBlank(strArrPlnProSA[id]) ? "0" :strArrPlnProSA[id]);
//				double dbllipPremAmt =Double.parseDouble(FipaUtils.nullOrBlank(strArrPlnProPremAmt[id]) ? "0" :strArrPlnProPremAmt[id]);
//			 
//				int intbplfretYrstoret=  Integer.parseInt(FipaUtils.nullOrBlank(strArrbplfretYrstoret[id]) ? "0" :strArrbplfretYrstoret[id]);
//				int intbpretSelfretage=  Integer.parseInt(FipaUtils.nullOrBlank(strArrbpretSelfretage[id]) ? "0" :strArrbpretSelfretage[id]);
//				int intbpretSpouseretage=  Integer.parseInt(FipaUtils.nullOrBlank(strArrbpretSpouseretage[id]) ? "0" :strArrbpretSpouseretage[id]);
//				int intbpcashvalRetAge=  Integer.parseInt(FipaUtils.nullOrBlank(strArrbpcashvalRetAge[id]) ? "0" :strArrbpcashvalRetAge[id]);
//				
//				double dblbpretIntrateused =Double.parseDouble(FipaUtils.nullOrBlank(strArrbpretIntrateused[id]) ? "0" :strArrbpretIntrateused[id]);
//				double dblbpretPrcnttoused =Double.parseDouble(FipaUtils.nullOrBlank(strArrbpretPrcnttoused[id]) ? "0" :strArrbpretPrcnttoused[id]);
//				double dblbpretCashvalonret =Double.parseDouble(FipaUtils.nullOrBlank(strArrbpretCashvalonret[id]) ? "0" :strArrbpretCashvalonret[id]);
//				
//				Date crtdDate = FipaUtils.nullOrBlank(strArrPlnProCtrtDate[id]) ? new Date() :FipaDateUtils.convertStringToDate(strArrPlnProCtrtDate[id]);
//				  
//				Date incDate =  FipaUtils.nullOrBlank(strArrPlnProExpDate[id]) ? null :FipaDateUtils.convertStringToDate(strArrPlnProExpDate[id]);
//				Date expDate =  FipaUtils.nullOrBlank(strArrPlnProIncepDate[id]) ? null :FipaDateUtils.convertStringToDate(strArrPlnProIncepDate[id]);
//				
//				FnaSelfspouseDets fnaselfspsDets = new FnaSelfspouseDets();				
//				fnaselfspsDets.setFnaId(strFNAId);
//				
//				FnaLifeinsuranceDets fnalifeInsDets = new FnaLifeinsuranceDets();	
//				fnalifeInsDets.setLipId(strLISId);
//				
//				String strPKId = FipaUtils.nullOrBlank(strArrPlnProId[id])?"":strArrPlnProId[id];
//				
//				
//				if(strArrPlnProMode[id].equalsIgnoreCase(FipaConstant.INSERT_MODE) && FipaUtils.nullOrBlank(strPKId) ){
//					insliPlnProList.add(new FnaLifeinsuranceBasicriders(null,null,null, strArrPlnProName[id],strArrPlnProType[id],strArrPlnProPremTrm[id], dbllipSA,dbllipPremAmt, strArrPlnProPayMode[id], strArrPlnProMtd[id],strArrPlnProCov[id], strArrPlnProRmks[id], strLoggedUser,new Date(), null, null,incDate,expDate,strArrPlnRefId[id],strArrBasicRefId[id],intbplfretYrstoret,intbpretSelfretage,intbpretSpouseretage,strArrbpretMultionret[id],dblbpretCashvalonret,dblbpretIntrateused,dblbpretPrcnttoused,intbpcashvalRetAge,strArrbpcashvalRefId[id])); 
//	
//				}
//				
//				if(strArrPlnProMode[id].equalsIgnoreCase(FipaConstant.UPDATE_MODE)|| 
//						(strArrPlnProMode[id].equalsIgnoreCase(FipaConstant.INSERT_MODE) && !FipaUtils.nullOrBlank(strPKId))){ 
//					 
//					if(strPKId.startsWith("AS")){
//						updliPlnProListAS.add(new FnaLifeinsuranceBasicriders(strArrPlnProId[id],fnalifeInsDets,fnaselfspsDets, strArrPlnProName[id],strArrPlnProType[id],strArrPlnProPremTrm[id], dbllipSA,dbllipPremAmt, strArrPlnProPayMode[id], strArrPlnProMtd[id],strArrPlnProCov[id], strArrPlnProRmks[id],strLoggedUser,new Date(),strLoggedUser,new Date(),incDate,expDate,strArrPlnRefId[id],strArrBasicRefId[id],intbplfretYrstoret,intbpretSelfretage,intbpretSpouseretage,strArrbpretMultionret[id],dblbpretCashvalonret,dblbpretIntrateused,dblbpretPrcnttoused,intbpcashvalRetAge,strArrbpcashvalRefId[id])); 
//						 
//					}else{
//						updliPlnProList.add(new FnaLifeinsuranceBasicriders(strArrPlnProId[id],fnalifeInsDets,fnaselfspsDets, strArrPlnProName[id],strArrPlnProType[id],strArrPlnProPremTrm[id], dbllipSA,dbllipPremAmt, strArrPlnProPayMode[id], strArrPlnProMtd[id],strArrPlnProCov[id], strArrPlnProRmks[id],strArrPlnProCrtdBy[id],crtdDate,strLoggedUser,new Date(),incDate,expDate,strArrPlnRefId[id],strArrBasicRefId[id],intbplfretYrstoret,intbpretSelfretage,intbpretSpouseretage,strArrbpretMultionret[id],dblbpretCashvalonret,dblbpretIntrateused,dblbpretPrcnttoused,intbpcashvalRetAge,strArrbpcashvalRefId[id])); 
//						 
//					}
//				}
//				
//				if(strArrPlnProMode[id].equalsIgnoreCase(FipaConstant.DELETE_MODE)){
//					delliPlnProList.add(new FnaLifeinsuranceBasicriders(strArrPlnProId[id],fnalifeInsDets,fnaselfspsDets, strArrPlnProName[id],strArrPlnProType[id],strArrPlnProPremTrm[id], dbllipSA,dbllipPremAmt, strArrPlnProPayMode[id], strArrPlnProMtd[id],strArrPlnProCov[id], strArrPlnProRmks[id],strArrPlnProCrtdBy[id],crtdDate,strLoggedUser,new Date(),incDate,expDate,strArrPlnRefId[id],strArrBasicRefId[id],intbplfretYrstoret,intbpretSelfretage,intbpretSpouseretage,strArrbpretMultionret[id],dblbpretCashvalonret,dblbpretIntrateused,dblbpretPrcnttoused,intbpcashvalRetAge,strArrbpcashvalRefId[id]));
//		 
//				}
//			}
//		}
//		
//		vectliPlnProDet.add(insliPlnProList);
//		vectliPlnProDet.add(updliPlnProList);
//		vectliPlnProDet.add(delliPlnProList);vectliPlnProDet.add(updliPlnProListAS);
//	 
//		
//	
//		/*Raider Plan */
//		String[] strArrBenfRaidMode			= FipaUtils.getParamArrValue(request, "txtFldplnRaidDetMode"); 
//		String[] strArrBenfRaidId			= FipaUtils.getParamArrValue(request, "txtFldliplnRaidId");
//		String[] strArrBenfRaidName 		= FipaUtils.getParamArrValue(request, "txtFldliplnRaidName"); 
//		String[] strArrBenfRaidType 		= FipaUtils.getParamArrValue(request, "selliplnRaidtype");
//		String[] strArrBenfRaidPremTrm		= FipaUtils.getParamArrValue(request, "txtFldliplnRaidPremTerm");
//		String[] strArrBenfRaidSA 			= FipaUtils.getParamArrValue(request, "txtFldliplnRaidSA"); 
//		String[] strArrBenfRaidPremAmt		= FipaUtils.getParamArrValue(request, "txtFldliplnRaidPremAmt");  
//		String[] strArrBenfRaidPayMode 		= FipaUtils.getParamArrValue(request, "selliplnRaidPayMode"); 
//		String[] strArrBenfRaidMtd 			= FipaUtils.getParamArrValue(request, "selliplnRaidPayMtd");
//		String[] strArrBenfRaidCov			= FipaUtils.getParamArrValue(request, "txtFldliplnRaidCoverages");
//		String[] strArrBenfRaidRmks 		= FipaUtils.getParamArrValue(request, "txtFldliplnRaidRemarks");
//		
//		String[] strArrBenfRaidExpDate		= FipaUtils.getParamArrValue(request, "txtFldPlanRaidExpDate");
//		String[] strArrBenfRaidIncepDate 	= FipaUtils.getParamArrValue(request, "txtFldPlanRaidIncepDate");
//		
//		
//		String[] strArrBenfRaidRefId 		= FipaUtils.getParamArrValue(request, "txtFldPlnRaidRefId");
//		String[] strArrRaiderRefId			= FipaUtils.getParamArrValue(request, "RaidRefId"); 
//		String[] strArrrpcashvalRefId		= FipaUtils.getParamArrValue(request, "rpcashvalRefId"); 
//		
//		String[] strArrrplfretYrstoret		= FipaUtils.getParamArrValue(request, "rplfretYrstoret"); 
//		String[] strArrrpretSelfretage		= FipaUtils.getParamArrValue(request, "rpretSelfretage");
//		String[] strArrrpretSpouseretage	= FipaUtils.getParamArrValue(request, "rpretSpouseretage");
//		String[] strArrrpretMultionret 		= FipaUtils.getParamArrValue(request, "rpretMultionret"); 
//		String[] strArrrpretCashvalonret	= FipaUtils.getParamArrValue(request, "rpretCashvalonret");
//		String[] strArrrpretIntrateused 	= FipaUtils.getParamArrValue(request, "rpretIntrateused");
//		String[] strArrrpretPrcnttoused 	= FipaUtils.getParamArrValue(request, "rpretPrcnttoused");
//		String[] strArrrpcashvalRetAge		= FipaUtils.getParamArrValue(request, "rpcashvalRetAge"); 
//		
//		
//		
//		
//		String[] strArrBenfRaidCrtdBy 		= FipaUtils.getParamArrValue(request, "txtFldliplnRaidCrtdBy");  
//		String[] strArrBenfRaidCtrtDate 	= FipaUtils.getParamArrValue(request, "txtFldliplnRaidCrtdDate");   
//		
//		
//		
//		/*Raider plan*/
//		if(strArrBenfRaidMode != null && strArrBenfRaidMode.length>0){ 
//			for(int id=0;id<strArrBenfRaidMode.length;id++){ 
//				 
//				 
//				double dbllipBenfRaidSA =  Double.parseDouble(FipaUtils.nullOrBlank(strArrBenfRaidSA[id]) ? "0" :strArrBenfRaidSA[id]);
//				double dbllipBenfRaidPremAmt =Double.parseDouble(FipaUtils.nullOrBlank(strArrBenfRaidPremAmt[id]) ? "0" :strArrBenfRaidPremAmt[id]);
//			 
//				 
//				 
//				Date BenfRaidcrtdDate = FipaUtils.nullOrBlank(strArrBenfRaidCtrtDate[id]) ? new Date() :FipaDateUtils.convertStringToDate(strArrBenfRaidCtrtDate[id]);
//				  
//				Date BenfRaidincDate =  FipaUtils.nullOrBlank(strArrBenfRaidExpDate[id]) ? null :FipaDateUtils.convertStringToDate(strArrBenfRaidExpDate[id]);
//				Date BenfRaidexpDate =  FipaUtils.nullOrBlank(strArrBenfRaidIncepDate[id]) ? null :FipaDateUtils.convertStringToDate(strArrBenfRaidIncepDate[id]);
//				
//				
//				
//				
//				int intrplfretYrstoret=  Integer.parseInt(FipaUtils.nullOrBlank(strArrrplfretYrstoret[id]) ? "0" :strArrrplfretYrstoret[id]);
//				int intrpretSelfretage=  Integer.parseInt(FipaUtils.nullOrBlank(strArrrpretSelfretage[id]) ? "0" :strArrrpretSelfretage[id]);
//				int intrpretSpouseretage=  Integer.parseInt(FipaUtils.nullOrBlank(strArrrpretSpouseretage[id]) ? "0" :strArrrpretSpouseretage[id]);
//				int intrpcashvalRetAge=  Integer.parseInt(FipaUtils.nullOrBlank(strArrrpcashvalRetAge[id]) ? "0" :strArrrpcashvalRetAge[id]);
//				
//				double dblrpretIntrateused =Double.parseDouble(FipaUtils.nullOrBlank(strArrrpretIntrateused[id]) ? "0" :strArrrpretIntrateused[id]);
//				double dblrpretPrcnttoused =Double.parseDouble(FipaUtils.nullOrBlank(strArrrpretPrcnttoused[id]) ? "0" :strArrrpretPrcnttoused[id]);
//				double dblrpretCashvalonret =Double.parseDouble(FipaUtils.nullOrBlank(strArrrpretCashvalonret[id]) ? "0" :strArrrpretCashvalonret[id]);
//			
//				
//				
//				FnaSelfspouseDets fnaselfspsDets = new FnaSelfspouseDets();				
//				fnaselfspsDets.setFnaId(strFNAId);
//				
//				FnaLifeinsuranceDets fnalifeInsDets = new FnaLifeinsuranceDets();	
//				fnalifeInsDets.setLipId(strLISId);
//				String strPKId = FipaUtils.nullOrBlank(strArrBenfRaidId[id])?"":strArrBenfRaidId[id];
//				
//				
//				if(strArrBenfRaidMode[id].equalsIgnoreCase(FipaConstant.INSERT_MODE) && FipaUtils.nullOrBlank(strPKId)){ 
//					insliPlnProList.add(new FnaLifeinsuranceBasicriders(null,null,null, strArrBenfRaidName[id],strArrBenfRaidType[id],strArrBenfRaidPremTrm[id], dbllipBenfRaidSA,dbllipBenfRaidPremAmt, strArrBenfRaidPayMode[id], strArrBenfRaidMtd[id],strArrBenfRaidCov[id], strArrBenfRaidRmks[id], strLoggedUser,new Date(), null, null,BenfRaidincDate,BenfRaidexpDate, strArrBenfRaidRefId[id],strArrRaiderRefId[id],intrplfretYrstoret,intrpretSelfretage,intrpretSpouseretage,strArrrpretMultionret[id],dblrpretCashvalonret,dblrpretIntrateused,dblrpretPrcnttoused,intrpcashvalRetAge,strArrrpcashvalRefId[id]));
//					 
//				}
//				
//				if(strArrBenfRaidMode[id].equalsIgnoreCase(FipaConstant.UPDATE_MODE) || 
//						(strArrBenfRaidMode[id].equalsIgnoreCase(FipaConstant.INSERT_MODE) && !FipaUtils.nullOrBlank(strPKId))){ 
//					
//					if(strPKId.startsWith("AS")){
//						 updliPlnProListAS.add(new FnaLifeinsuranceBasicriders(strArrBenfRaidId[id],fnalifeInsDets,fnaselfspsDets, strArrBenfRaidName[id],strArrBenfRaidType[id],strArrBenfRaidPremTrm[id], dbllipBenfRaidSA,dbllipBenfRaidPremAmt, strArrBenfRaidPayMode[id], strArrBenfRaidMtd[id],strArrBenfRaidCov[id], strArrBenfRaidRmks[id],strLoggedUser,new Date(),strLoggedUser,new Date(),BenfRaidincDate,BenfRaidexpDate,strArrBenfRaidRefId[id],strArrRaiderRefId[id],intrplfretYrstoret,intrpretSelfretage,intrpretSpouseretage,strArrrpretMultionret[id],dblrpretCashvalonret,dblrpretIntrateused,dblrpretPrcnttoused,intrpcashvalRetAge,strArrrpcashvalRefId[id])); 
//							
//					}else{
//						 updliPlnProList.add(new FnaLifeinsuranceBasicriders(strArrBenfRaidId[id],fnalifeInsDets,fnaselfspsDets, strArrBenfRaidName[id],strArrBenfRaidType[id],strArrBenfRaidPremTrm[id], dbllipBenfRaidSA,dbllipBenfRaidPremAmt, strArrBenfRaidPayMode[id], strArrBenfRaidMtd[id],strArrBenfRaidCov[id], strArrBenfRaidRmks[id],strArrBenfRaidCrtdBy[id],BenfRaidcrtdDate,strLoggedUser,new Date(),BenfRaidincDate,BenfRaidexpDate,strArrBenfRaidRefId[id],strArrRaiderRefId[id],intrplfretYrstoret,intrpretSelfretage,intrpretSpouseretage,strArrrpretMultionret[id],dblrpretCashvalonret,dblrpretIntrateused,dblrpretPrcnttoused,intrpcashvalRetAge,strArrrpcashvalRefId[id])); 
//							
//					}
//				}
//				
//				if(strArrBenfRaidMode[id].equalsIgnoreCase(FipaConstant.DELETE_MODE)){
//					delliPlnProList.add(new FnaLifeinsuranceBasicriders(strArrBenfRaidId[id],fnalifeInsDets,fnaselfspsDets, strArrBenfRaidName[id],strArrBenfRaidType[id],strArrBenfRaidPremTrm[id], dbllipBenfRaidSA,dbllipBenfRaidPremAmt, strArrBenfRaidPayMode[id], strArrBenfRaidMtd[id],strArrBenfRaidCov[id], strArrBenfRaidRmks[id],strArrBenfRaidCrtdBy[id],BenfRaidcrtdDate,strLoggedUser,new Date(),BenfRaidincDate,BenfRaidexpDate,strArrBenfRaidRefId[id],strArrRaiderRefId[id],intrplfretYrstoret,intrpretSelfretage,intrpretSpouseretage,strArrrpretMultionret[id],dblrpretCashvalonret,dblrpretIntrateused,dblrpretPrcnttoused,intrpcashvalRetAge,strArrrpcashvalRefId[id]));
//				}
//			}
//		}
//		
//		
//		vectliPlnProDet.add(insliPlnProList);
//		vectliPlnProDet.add(updliPlnProList);
//		vectliPlnProDet.add(delliPlnProList);vectliPlnProDet.add(updliPlnProListAS);
//		}catch(Exception ex){
//			logger.error("Error in getliPlnProDetails ->" , ex);
//		}
//		
//		
//		return vectliPlnProDet;
//	}

	public Vector getliPlnProDetails(HttpServletRequest request) {
		// TODO Auto-generated method stub

		Vector vectliPlnProDet = new Vector();
		List insliPlnProList = new ArrayList();
		List updliPlnProList = new ArrayList();
		List updliPlnProListAS = new ArrayList();
		List delliPlnProList = new ArrayList();

		HttpSession session = request.getSession(false);
		Map<String, String> sessMap = new HashMap<String, String>();
		sessMap = (HashMap<String, String>) session.getAttribute(FipaConstant.LOGGED_USER_INFO);

		try {

			/* Basic Plan */
			String[] strArrFnaId = FipaUtils.getParamArrValue(request, "txtFldfnaId");
			String[] strArrLipId = FipaUtils.getParamArrValue(request, "txtFldlipId");

			String[] strArrPlnProId = FipaUtils.getParamArrValue(request, "txtFldliplnId");

			String[] strArrPlnProName = FipaUtils.getParamArrValue(request, "selplan");
			String[] strArrPlnProMode = FipaUtils.getParamArrValue(request, "txtFldplnDetMode");
			String[] strArrPlnProType = FipaUtils.getParamArrValue(request, "txtFldTfplan");
			String[] strArrPlnProPremTrm = FipaUtils.getParamArrValue(request, "txtFldPremTr");
			String[] strArrPlnProPremTrmDate = FipaUtils.getParamArrValue(request, "txtFldPremTrDate");
			String[] strArrPlnProSA = FipaUtils.getParamArrValue(request, "txtFldSA");
			String[] strArrPlnProPremAmt = FipaUtils.getParamArrValue(request, "txtFldPrem");
			String[] strArrPlnProPayMode = FipaUtils.getParamArrValue(request, "selPaymode");
			String[] strArrPlnProMtd = FipaUtils.getParamArrValue(request, "selPaymtd");
			String[] strArrPlnProMthBy = FipaUtils.getParamArrValue(request, "selPaymtdBy");
			String[] strArrPlnProCov = FipaUtils.getParamArrValue(request, "hselCoverages");

			String[] strArrPlnInsCashVal = FipaUtils.getParamArrValue(request, "txtFldInsCashVal");
			String[] strArrPlnLifeInsLoans = FipaUtils.getParamArrValue(request, "txtFldLifeInsLoans");

			String[] strArrPlnProRmks = FipaUtils.getParamArrValue(request, "selmarks");

			String[] strArrPlnProExpDate = FipaUtils.getParamArrValue(request, "txtFldPolExpDate");
			String[] strArrPlnProIncepDate = FipaUtils.getParamArrValue(request, "txtFldIncDate");
			String[] strArrPlnRefId = FipaUtils.getParamArrValue(request, "txtFldplanRefId");
			String[] strArrBasicRefId = FipaUtils.getParamArrValue(request, "txtFldBasicRefId");

			String[] strArrbplfretYrstoret = FipaUtils.getParamArrValue(request, "txtFldplanYsto");
			String[] strArrbpretSelfretage = FipaUtils.getParamArrValue(request, "txtFldplanSelfAge");
			String[] strArrbpretSpouseretage = FipaUtils.getParamArrValue(request, "txtFldplanSpouseAge");
			String[] strArrbpretMultionret = FipaUtils.getParamArrValue(request, "txtFldplanMultion");
			String[] strArrbpretCashvalonret = FipaUtils.getParamArrValue(request, "txtFldplanCashvalon");
			String[] strArrbpretIntrateused = FipaUtils.getParamArrValue(request, "txtFldplanIntrateused");
			String[] strArrbpretPrcnttoused = FipaUtils.getParamArrValue(request, "txtFldplanPrcnttoused");
			String[] strArrbpcashvalRetAge = FipaUtils.getParamArrValue(request, "txtFldplanCashvalAge");

			String[] strArrbpcashvalRefId = FipaUtils.getParamArrValue(request, "txtFldlipplanSyncId"); // txtFldplanCashvalTefId
			String[] strArrPlnProCrtdBy = FipaUtils.getParamArrValue(request, "txtFldplanCtBy");
			String[] strArrPlnProCtrtDate = FipaUtils.getParamArrValue(request, "txtFldplanCtDate");
			String[] strArrSyncRefId = FipaUtils.getParamArrValue(request, "txtFldlipplanSyncId");

			String strFNAId = FipaUtils.getParamValue(request, "fnaId");
			String strLISId = FipaUtils.getParamValue(request, "lipId");

			String strLoggedUser = (String) sessMap.get(FipaConstant.LOGGED_USER_ID);

			if (strArrPlnProMode != null && strArrPlnProMode.length > 0) {

				for (int id = 0; id < strArrPlnProMode.length; id++) {

					double dbllipSA = Double
							.parseDouble(FipaUtils.nullOrBlank(strArrPlnProSA[id]) ? "0" : strArrPlnProSA[id]);
					double dbllipPremAmt = Double.parseDouble(
							FipaUtils.nullOrBlank(strArrPlnProPremAmt[id]) ? "0" : strArrPlnProPremAmt[id]);

					int intbplfretYrstoret = Integer.parseInt(
							FipaUtils.nullOrBlank(strArrbplfretYrstoret[id]) ? "0" : strArrbplfretYrstoret[id]);
					int intbpretSelfretage = Integer.parseInt(
							FipaUtils.nullOrBlank(strArrbpretSelfretage[id]) ? "0" : strArrbpretSelfretage[id]);
					int intbpretSpouseretage = Integer.parseInt(
							FipaUtils.nullOrBlank(strArrbpretSpouseretage[id]) ? "0" : strArrbpretSpouseretage[id]);
					int intbpcashvalRetAge = Integer.parseInt(
							FipaUtils.nullOrBlank(strArrbpcashvalRetAge[id]) ? "0" : strArrbpcashvalRetAge[id]);

					double dblbpretIntrateused = Double.parseDouble(
							FipaUtils.nullOrBlank(strArrbpretIntrateused[id]) ? "0" : strArrbpretIntrateused[id]);
					double dblbpretPrcnttoused = Double.parseDouble(
							FipaUtils.nullOrBlank(strArrbpretPrcnttoused[id]) ? "0" : strArrbpretPrcnttoused[id]);
					double dblbpretCashvalonret = Double.parseDouble(
							FipaUtils.nullOrBlank(strArrbpretCashvalonret[id]) ? "0" : strArrbpretCashvalonret[id]);

					double dblInsCashVal = Double.parseDouble(
							FipaUtils.nullOrBlank(strArrPlnInsCashVal[id]) ? "0" : strArrPlnInsCashVal[id]);
					double dblPlnLifeInsLoans = Double.parseDouble(
							FipaUtils.nullOrBlank(strArrPlnLifeInsLoans[id]) ? "0" : strArrPlnLifeInsLoans[id]);

					Date crtdDate = FipaUtils.nullOrBlank(strArrPlnProCtrtDate[id]) ? new Date()
							: FipaDateUtils.convertStringToDate(strArrPlnProCtrtDate[id]);

					Date incDate = FipaUtils.nullOrBlank(strArrPlnProIncepDate[id]) ? null
							: FipaDateUtils.convertStringToDate(strArrPlnProIncepDate[id]);
					Date expDate = FipaUtils.nullOrBlank(strArrPlnProExpDate[id]) ? null
							: FipaDateUtils.convertStringToDate(strArrPlnProExpDate[id]);
					// Date premTrDate =FipaUtils.nullOrBlank(strArrPlnProPremTrmDate[id]) ? null
					// :FipaDateUtils.convertStringToDate(strArrPlnProPremTrmDate[id]);
					Date premTrDate = null;

					FnaSelfspouseDets fnaselfspsDets = new FnaSelfspouseDets();
					fnaselfspsDets.setFnaId(strFNAId);

					FnaLifeinsuranceDets fnalifeInsDets = new FnaLifeinsuranceDets();
					fnalifeInsDets.setLipId(strLISId);

					String strPKId = FipaUtils.nullOrBlank(strArrPlnProId[id]) ? "" : strArrPlnProId[id];

					if (!FipaUtils.nullOrBlank(strArrPlnProName[id])) {

						String basorrider = strArrPlnRefId[id].equalsIgnoreCase("R") ? "R1" : strArrPlnRefId[id];

						if (strArrPlnProMode[id].equalsIgnoreCase(FipaConstant.INSERT_MODE)
								&& FipaUtils.nullOrBlank(strPKId)) {
							insliPlnProList.add(new FnaLifeinsuranceBasicriders(null, null, null, strArrPlnProName[id],
									strArrPlnProType[id], strArrPlnProPremTrm[id], dbllipSA, dbllipPremAmt,
									strArrPlnProPayMode[id], strArrPlnProMtd[id], strArrPlnProCov[id],
									strArrPlnProRmks[id], strLoggedUser, new Date(), null, null, expDate, incDate,
									basorrider, strArrBasicRefId[id], intbplfretYrstoret, intbpretSelfretage,
									intbpretSpouseretage, strArrbpretMultionret[id], dblbpretCashvalonret,
									dblbpretIntrateused, dblbpretPrcnttoused, intbpcashvalRetAge,
									strArrbpcashvalRefId[id], premTrDate, dblInsCashVal, dblPlnLifeInsLoans,
									strArrPlnProMthBy[id]));

						}

						if (strArrPlnProMode[id].equalsIgnoreCase(FipaConstant.UPDATE_MODE)
								|| (strArrPlnProMode[id].equalsIgnoreCase(FipaConstant.INSERT_MODE)
										&& !FipaUtils.nullOrBlank(strPKId))) {

							fnaselfspsDets.setFnaId(strArrFnaId[id]);
							fnalifeInsDets.setLipId(strArrLipId[id]);

							if (strPKId.startsWith("AS")) {
								updliPlnProListAS.add(new FnaLifeinsuranceBasicriders(strArrPlnProId[id],
										fnalifeInsDets, fnaselfspsDets, strArrPlnProName[id], strArrPlnProType[id],
										strArrPlnProPremTrm[id], dbllipSA, dbllipPremAmt, strArrPlnProPayMode[id],
										strArrPlnProMtd[id], strArrPlnProCov[id], strArrPlnProRmks[id], strLoggedUser,
										new Date(), strLoggedUser, new Date(), expDate, incDate, basorrider,
										strArrBasicRefId[id], intbplfretYrstoret, intbpretSelfretage,
										intbpretSpouseretage, strArrbpretMultionret[id], dblbpretCashvalonret,
										dblbpretIntrateused, dblbpretPrcnttoused, intbpcashvalRetAge,
										strArrbpcashvalRefId[id], premTrDate, dblInsCashVal, dblPlnLifeInsLoans,
										strArrPlnProMthBy[id]));

							} else {
								updliPlnProList.add(new FnaLifeinsuranceBasicriders(strArrPlnProId[id], fnalifeInsDets,
										fnaselfspsDets, strArrPlnProName[id], strArrPlnProType[id],
										strArrPlnProPremTrm[id], dbllipSA, dbllipPremAmt, strArrPlnProPayMode[id],
										strArrPlnProMtd[id], strArrPlnProCov[id], strArrPlnProRmks[id],
										strArrPlnProCrtdBy[id], crtdDate, strLoggedUser, new Date(), expDate, incDate,
										basorrider, strArrBasicRefId[id], intbplfretYrstoret, intbpretSelfretage,
										intbpretSpouseretage, strArrbpretMultionret[id], dblbpretCashvalonret,
										dblbpretIntrateused, dblbpretPrcnttoused, intbpcashvalRetAge,
										strArrbpcashvalRefId[id], premTrDate, dblInsCashVal, dblPlnLifeInsLoans,
										strArrPlnProMthBy[id]));

							}
						}

						if (strArrPlnProMode[id].equalsIgnoreCase(FipaConstant.DELETE_MODE)) {
							fnaselfspsDets.setFnaId(strArrFnaId[id]);
							fnalifeInsDets.setLipId(strArrLipId[id]);
							delliPlnProList.add(new FnaLifeinsuranceBasicriders(strArrPlnProId[id], fnalifeInsDets,
									fnaselfspsDets, strArrPlnProName[id], strArrPlnProType[id], strArrPlnProPremTrm[id],
									dbllipSA, dbllipPremAmt, strArrPlnProPayMode[id], strArrPlnProMtd[id],
									strArrPlnProCov[id], strArrPlnProRmks[id], strArrPlnProCrtdBy[id], crtdDate,
									strLoggedUser, new Date(), expDate, incDate, basorrider, strArrBasicRefId[id],
									intbplfretYrstoret, intbpretSelfretage, intbpretSpouseretage,
									strArrbpretMultionret[id], dblbpretCashvalonret, dblbpretIntrateused,
									dblbpretPrcnttoused, intbpcashvalRetAge, strArrbpcashvalRefId[id], premTrDate,
									dblInsCashVal, dblPlnLifeInsLoans, strArrPlnProMthBy[id]));

						}

					}
				}
			}

			vectliPlnProDet.add(insliPlnProList);
			vectliPlnProDet.add(updliPlnProList);
			vectliPlnProDet.add(delliPlnProList);
			vectliPlnProDet.add(updliPlnProListAS);

		} catch (Exception ex) {
			logger.error("Error in getliPlnProDetails ->", ex);
		}

		return vectliPlnProDet;
	}

	public Vector getEstPlanDetails(HttpServletRequest request, String strFNAId) {
		Vector<List<FnaEstatePlan>> vectEstPlnDet = new Vector<List<FnaEstatePlan>>();
		List<FnaEstatePlan> estPlnList = new ArrayList<FnaEstatePlan>();
		FnaEstatePlan fnaEstPlnDets = new FnaEstatePlan();

		HttpSession session = request.getSession(false);
		Map<String, String> sessMap = new HashMap<String, String>();
		sessMap = (HashMap<String, String>) session.getAttribute(FipaConstant.LOGGED_USER_INFO);

		try {

//		String strFNAId = FipaUtils.getParamValue(request, "fnaId");
			String strLoggedUser = (String) sessMap.get(FipaConstant.LOGGED_USER_ID);
			FnaSelfspouseDets fnaselfspsDets = new FnaSelfspouseDets();
			fnaselfspsDets.setFnaId(strFNAId);

			String strEstTrstId = request.getParameter("txtFldEstTrstId") != null
					? request.getParameter("txtFldEstTrstId")
					: null;
			fnaEstPlnDets.setEstId(strEstTrstId);
			String strEstTrstDesc = request.getParameter("txtFldEstTrstDesc") != null
					? request.getParameter("txtFldEstTrstDesc")
					: null;
			fnaEstPlnDets.setEstPlanDesc(strEstTrstDesc);
			String strEstSlfTrstFlg = request.getParameter("txtFldEstSlfTrstFlg") != null
					? request.getParameter("txtFldEstSlfTrstFlg")
					: null;
			fnaEstPlnDets.setEstSelfPlanFlg(strEstSlfTrstFlg);
			String strEstSpsTrstFlg = request.getParameter("txtFldEstSpsTrstFlg") != null
					? request.getParameter("txtFldEstSpsTrstFlg")
					: null;
			fnaEstPlnDets.setEstSpsPlanFlg(strEstSpsTrstFlg);
			String strEstTrstRmrks = request.getParameter("txtFldEstTrstRmrks") != null
					? request.getParameter("txtFldEstTrstRmrks")
					: null;
			fnaEstPlnDets.setEstPlanRemarks(strEstTrstRmrks);

			if (!(FipaUtils.nullOrBlank(strEstTrstDesc)) || !(FipaUtils.nullOrBlank(strEstSlfTrstFlg))
					|| !(FipaUtils.nullOrBlank(strEstSpsTrstFlg) || !(FipaUtils.nullOrBlank(strEstTrstRmrks)))) {

				fnaEstPlnDets.setEstCrtdBy(strLoggedUser);
				fnaEstPlnDets.setEstCrtdDate(new Date());
				fnaEstPlnDets.setFnaSelfspouseDets(fnaselfspsDets);
				estPlnList.add(fnaEstPlnDets);

			}

			fnaEstPlnDets = new FnaEstatePlan();
			fnaselfspsDets = new FnaSelfspouseDets();
			fnaselfspsDets.setFnaId(strFNAId);

			String strEstLPOAId = request.getParameter("txtFldEstLPOAId") != null
					? request.getParameter("txtFldEstLPOAId")
					: null;
			fnaEstPlnDets.setEstId(strEstLPOAId);

			String strEstLPOADesc = request.getParameter("txtFldEstLPOADesc") != null
					? request.getParameter("txtFldEstLPOADesc")
					: null;
			fnaEstPlnDets.setEstPlanDesc(strEstLPOADesc);
			String strEstSlfLPOAFlg = request.getParameter("txtFldEstSlfLPOAFlg") != null
					? request.getParameter("txtFldEstSlfLPOAFlg")
					: null;
			fnaEstPlnDets.setEstSelfPlanFlg(strEstSlfLPOAFlg);
			String strEstSpsLPOAFlg = request.getParameter("txtFldEstSpsLPOAFlg") != null
					? request.getParameter("txtFldEstSpsLPOAFlg")
					: null;
			fnaEstPlnDets.setEstSpsPlanFlg(strEstSpsLPOAFlg);
			String strEstLPOARmrks = request.getParameter("txtFldEstLPOARmrks") != null
					? request.getParameter("txtFldEstLPOARmrks")
					: null;
			fnaEstPlnDets.setEstPlanRemarks(strEstLPOARmrks);
			//
			// if(!(FipaUtils.nullOrBlank(strEstLPOADesc) ||
			// FipaUtils.nullOrBlank(strEstSlfLPOAFlg) ||
			// FipaUtils.nullOrBlank(strEstSpsLPOAFlg) ||
			// FipaUtils.nullOrBlank(strEstLPOARmrks))){

			if (!(FipaUtils.nullOrBlank(strEstLPOADesc)) || !(FipaUtils.nullOrBlank(strEstSlfLPOAFlg))
					|| !(FipaUtils.nullOrBlank(strEstSpsLPOAFlg) || !(FipaUtils.nullOrBlank(strEstLPOARmrks)))) {

				fnaEstPlnDets.setEstCrtdBy(strLoggedUser);
				fnaEstPlnDets.setEstCrtdDate(new Date());
				fnaEstPlnDets.setFnaSelfspouseDets(fnaselfspsDets);
				estPlnList.add(fnaEstPlnDets);

			}

			fnaEstPlnDets = new FnaEstatePlan();
			fnaselfspsDets = new FnaSelfspouseDets();
			fnaselfspsDets.setFnaId(strFNAId);

			String strEstCharityId = request.getParameter("txtFldEstCharityId") != null
					? request.getParameter("txtFldEstCharityId")
					: null;
			fnaEstPlnDets.setEstId(strEstCharityId);

			String strEstCharityDesc = request.getParameter("txtFldEstCharityDesc") != null
					? request.getParameter("txtFldEstCharityDesc")
					: null;
			fnaEstPlnDets.setEstPlanDesc(strEstCharityDesc);
			String strEstSlfCharityFlg = request.getParameter("txtFldEstSlfCharityFlg") != null
					? request.getParameter("txtFldEstSlfCharityFlg")
					: null;
			fnaEstPlnDets.setEstSelfPlanFlg(strEstSlfCharityFlg);
			String strEstSpsCharityFlg = request.getParameter("txtFldEstSpsCharityFlg") != null
					? request.getParameter("txtFldEstSpsCharityFlg")
					: null;
			fnaEstPlnDets.setEstSpsPlanFlg(strEstSpsCharityFlg);
			String strEstCharityRmrks = request.getParameter("txtFldEstCharityRmrks") != null
					? request.getParameter("txtFldEstCharityRmrks")
					: null;
			fnaEstPlnDets.setEstPlanRemarks(strEstCharityRmrks);

			// if(!(FipaUtils.nullOrBlank(strEstCharityDesc) ||
			// FipaUtils.nullOrBlank(strEstSlfCharityFlg) ||
			// FipaUtils.nullOrBlank(strEstSpsCharityFlg) ||
			// FipaUtils.nullOrBlank(strEstCharityRmrks))){

			if (!(FipaUtils.nullOrBlank(strEstCharityDesc)) || !(FipaUtils.nullOrBlank(strEstSlfCharityFlg))
					|| !(FipaUtils.nullOrBlank(strEstSpsCharityFlg) || !(FipaUtils.nullOrBlank(strEstCharityRmrks)))) {

				fnaEstPlnDets.setEstCrtdBy(strLoggedUser);
				fnaEstPlnDets.setEstCrtdDate(new Date());
				fnaEstPlnDets.setFnaSelfspouseDets(fnaselfspsDets);
				estPlnList.add(fnaEstPlnDets);

			}

			fnaEstPlnDets = new FnaEstatePlan();
			fnaselfspsDets = new FnaSelfspouseDets();
			fnaselfspsDets.setFnaId(strFNAId);

			String strEstOverseasId = request.getParameter("txtFldEstOverseasId") != null
					? request.getParameter("txtFldEstOverseasId")
					: null;
			fnaEstPlnDets.setEstId(strEstOverseasId);
			String strEstOverseasDesc = request.getParameter("txtFldEstOverseasDesc") != null
					? request.getParameter("txtFldEstOverseasDesc")
					: null;
			fnaEstPlnDets.setEstPlanDesc(strEstOverseasDesc);
			String strEstSlfOverseasFlg = request.getParameter("txtFldEstSlfOverseasFlg") != null
					? request.getParameter("txtFldEstSlfOverseasFlg")
					: null;
			fnaEstPlnDets.setEstSelfPlanFlg(strEstSlfOverseasFlg);
			String strEstSpsOverseasFlg = request.getParameter("txtFldEstSpsOverseasFlg") != null
					? request.getParameter("txtFldEstSpsOverseasFlg")
					: null;
			fnaEstPlnDets.setEstSpsPlanFlg(strEstSpsOverseasFlg);
			String strEstOverseasRmrks = request.getParameter("txtFldEstOverseasRmrks") != null
					? request.getParameter("txtFldEstOverseasRmrks")
					: null;
			fnaEstPlnDets.setEstPlanRemarks(strEstOverseasRmrks);

			// if(!(FipaUtils.nullOrBlank(strEstOverseasDesc) ||
			// FipaUtils.nullOrBlank(strEstSlfOverseasFlg) ||
			// FipaUtils.nullOrBlank(strEstSpsOverseasFlg) ||
			// FipaUtils.nullOrBlank(strEstOverseasRmrks))){

			if (!(FipaUtils.nullOrBlank(strEstOverseasDesc)) || !(FipaUtils.nullOrBlank(strEstSlfOverseasFlg))
					|| !(FipaUtils.nullOrBlank(strEstSpsOverseasFlg)
							|| !(FipaUtils.nullOrBlank(strEstOverseasRmrks)))) {

				fnaEstPlnDets.setEstCrtdBy(strLoggedUser);
				fnaEstPlnDets.setEstCrtdDate(new Date());
				fnaEstPlnDets.setFnaSelfspouseDets(fnaselfspsDets);
				estPlnList.add(fnaEstPlnDets);

			}

			vectEstPlnDet.add(estPlnList);
		} catch (Exception ex) {
			logger.error("Error in getEstPlanDetails ->", ex);
		}

		return vectEstPlnDet;
	}

	public Vector getLifeInsCovrgeDetails(HttpServletRequest request, String strFNAId) {
		Vector vectliCovDet = new Vector();
		List insliCovList = new ArrayList();
		List updliCovList = new ArrayList();
		List updliCovListAS = new ArrayList();
		List delliCovList = new ArrayList();

		HttpSession session = request.getSession(false);
		Map<String, String> sessMap = new HashMap<String, String>();
		sessMap = (HashMap<String, String>) session.getAttribute(FipaConstant.LOGGED_USER_INFO);

		try {

			String[] strArrCovMode = FipaUtils.getParamArrValue(request, "txtFldCoverageMode");
			String[] strArrCovId = FipaUtils.getParamArrValue(request, "txtFldliCovId");
			String[] strArrliPlanPKId = FipaUtils.getParamArrValue(request, "txtFldliPlanPKId");// Plan Reference PKID

			String[] strArrCovPlanName = FipaUtils.getParamArrValue(request, "txtFldliCoverPlanname");
			String[] strArrCovIncDate = FipaUtils.getParamArrValue(request, "txtFldliCoverIncDate");
			String[] strArrCovExpDate = FipaUtils.getParamArrValue(request, "txtFldliCoverExpDate");
			String[] strArrCovBasicRiderRef = FipaUtils.getParamArrValue(request, "txtFldliBasicRiderRef");
			String[] strArrCovTypeofcov = FipaUtils.getParamArrValue(request, "txtFldliTypeOfCoverage");
			String[] strArrCovBoostr = FipaUtils.getParamArrValue(request, "txtFldliMultiBooster");
			String[] strArrCovAmtAss = FipaUtils.getParamArrValue(request, "txtFldliMaaAmtAssured");
			String[] strArrCovExpPrd = FipaUtils.getParamArrValue(request, "txtFldliMaaExpPeriod");
			String[] strArrCovNoofyrs = FipaUtils.getParamArrValue(request, "txtFldliNoofyears");
			String[] strArrCovDsbltyBenf = FipaUtils.getParamArrValue(request, "txtFldliDsbltyBenf");
			String[] strArrCovYrsofpay = FipaUtils.getParamArrValue(request, "txtFldliYrsofdsbpay");
			String[] strArrCovMaxpayout = FipaUtils.getParamArrValue(request, "txtFldliMaxPayoutAge");
			String[] strArrCovTypesofHS = FipaUtils.getParamArrValue(request, "txtFldliTypesofHS");
			String[] strArrCovDeductible = FipaUtils.getParamArrValue(request, "txtFldliDeductible");
			String[] strArrCovInsurance = FipaUtils.getParamArrValue(request, "txtFldliCoInsurance");
			String[] strArrCovDescription = FipaUtils.getParamArrValue(request, "txtFldliDescription");
			String[] strArrCovRemarks = FipaUtils.getParamArrValue(request, "txtFldliRemarks");

			String[] strArrCovCrtdBy = FipaUtils.getParamArrValue(request, "txtFldliCovCrtdBy");
			String[] strArrDsbCrtdDate = FipaUtils.getParamArrValue(request, "txtFldliCovCrtdDate");

//			String strFNAId     				= FipaUtils.getParamValue(request, "fnaId");
			String strLISId = FipaUtils.getParamValue(request, "lipId");
			String strLoggedUser = (String) sessMap.get(FipaConstant.LOGGED_USER_ID);

			if (strArrCovMode != null && strArrCovMode.length > 0) {

				for (int id = 0; id < strArrCovMode.length; id++) {

					Double dlbBoostr = Double
							.parseDouble(FipaUtils.nullOrBlank(strArrCovBoostr[id]) ? "0" : strArrCovBoostr[id]);
					Double dlbAmtAss = Double
							.parseDouble(FipaUtils.nullOrBlank(strArrCovAmtAss[id]) ? "0" : strArrCovAmtAss[id]);
					Double dlbDsbenf = Double.parseDouble(
							FipaUtils.nullOrBlank(strArrCovDsbltyBenf[id]) ? "0" : strArrCovDsbltyBenf[id]);
					Double dlbDeduct = Double.parseDouble(
							FipaUtils.nullOrBlank(strArrCovDeductible[id]) ? "0" : strArrCovDeductible[id]);
					Double dlbCoIns = Double
							.parseDouble(FipaUtils.nullOrBlank(strArrCovInsurance[id]) ? "0" : strArrCovInsurance[id]);

					Date crtdDate = FipaUtils.nullOrBlank(strArrDsbCrtdDate[id]) ? new Date()
							: FipaDateUtils.convertStringToDate(strArrDsbCrtdDate[id]);

					Date incDate = FipaUtils.nullOrBlank(strArrCovIncDate[id]) ? null
							: FipaDateUtils.convertStringToDate(strArrCovIncDate[id]);
					Date expDate = FipaUtils.nullOrBlank(strArrCovExpDate[id]) ? null
							: FipaDateUtils.convertStringToDate(strArrCovExpDate[id]);

					FnaSelfspouseDets fnaselfspsDets = new FnaSelfspouseDets();
					fnaselfspsDets.setFnaId(strFNAId);

					FnaLifeinsuranceDets fnalifeInsDets = new FnaLifeinsuranceDets();
					fnalifeInsDets.setLipId(strLISId);

					String strPKId = FipaUtils.nullOrBlank(strArrCovId[id]) ? "" : strArrCovId[id];

					if (strArrCovMode[id].equalsIgnoreCase(FipaConstant.INSERT_MODE)
							&& FipaUtils.nullOrBlank(strPKId)) {
						insliCovList.add(new FnaLifeinsuranceCoverages(null, null, null, strArrCovTypeofcov[id],
								strArrliPlanPKId[id], strArrCovPlanName[id], strArrCovBasicRiderRef[id], incDate,
								expDate, null, null, null, null, dlbDeduct, dlbCoIns, strArrCovRemarks[id],
								strLoggedUser, new Date(), null, null, dlbBoostr, dlbAmtAss, strArrCovExpPrd[id],
								strArrCovNoofyrs[id], dlbDsbenf, strArrCovYrsofpay[id], strArrCovMaxpayout[id],
								strArrCovTypesofHS[id], strArrCovDescription[id]));

					}

					if (strArrCovMode[id].equalsIgnoreCase(FipaConstant.UPDATE_MODE)
							|| (strArrCovMode[id].equalsIgnoreCase(FipaConstant.INSERT_MODE)
									&& !FipaUtils.nullOrBlank(strPKId))) {
						if (strPKId.startsWith("AS")) {
//							updliCovListAS.add(new FnaLifeinsuranceCoverages(strArrCovId[id],fnalifeInsDets,fnaselfspsDets,strArrCovPlanName[id],incDate,expDate,strArrCovBasicRiderRef[id],strArrCovTypeofcov[id],dlbBoostr,dlbAmtAss,strArrCovExpPrd[id],strArrCovNoofyrs[id],dlbDsbenf,strArrCovYrsofpay[id],strArrCovMaxpayout[id],strArrCovTypesofHS[id],dlbDeduct,dlbCoIns,strArrCovDescription[id],strArrCovRemarks[id],strLoggedUser,new Date(),null,null));
							updliCovListAS.add(new FnaLifeinsuranceCoverages(strArrCovId[id], fnalifeInsDets,
									fnaselfspsDets, strArrCovTypeofcov[id], strArrliPlanPKId[id], strArrCovPlanName[id],
									strArrCovBasicRiderRef[id], incDate, expDate, null, null, null, null, dlbDeduct,
									dlbCoIns, strArrCovRemarks[id], strLoggedUser, new Date(), null, null, dlbBoostr,
									dlbAmtAss, strArrCovExpPrd[id], strArrCovNoofyrs[id], dlbDsbenf,
									strArrCovYrsofpay[id], strArrCovMaxpayout[id], strArrCovTypesofHS[id],
									strArrCovDescription[id]));
//							

						} else {
//							updliCovList.add(new FnaLifeinsuranceCoverages(strArrCovId[id],fnalifeInsDets,fnaselfspsDets,strArrCovPlanName[id],incDate,expDate,strArrCovBasicRiderRef[id],strArrCovTypeofcov[id],dlbBoostr,dlbAmtAss,strArrCovExpPrd[id],strArrCovNoofyrs[id],dlbDsbenf,strArrCovYrsofpay[id],strArrCovMaxpayout[id],strArrCovTypesofHS[id],dlbDeduct,dlbCoIns,strArrCovDescription[id],strArrCovRemarks[id],strLoggedUser,new Date(),null,null));
							updliCovList.add(new FnaLifeinsuranceCoverages(strArrCovId[id], fnalifeInsDets,
									fnaselfspsDets, strArrCovTypeofcov[id], strArrliPlanPKId[id], strArrCovPlanName[id],
									strArrCovBasicRiderRef[id], incDate, expDate, null, null, null, null, dlbDeduct,
									dlbCoIns, strArrCovRemarks[id], strLoggedUser, new Date(), null, null, dlbBoostr,
									dlbAmtAss, strArrCovExpPrd[id], strArrCovNoofyrs[id], dlbDsbenf,
									strArrCovYrsofpay[id], strArrCovMaxpayout[id], strArrCovTypesofHS[id],
									strArrCovDescription[id]));

						}

					}

					if (strArrCovMode[id].equalsIgnoreCase(FipaConstant.DELETE_MODE)) {
						delliCovList.add(new FnaLifeinsuranceCoverages(strArrCovId[id], fnalifeInsDets, fnaselfspsDets,
								strArrCovPlanName[id], incDate, expDate, strArrCovBasicRiderRef[id],
								strArrCovTypeofcov[id], dlbBoostr, dlbAmtAss, strArrCovExpPrd[id], strArrCovNoofyrs[id],
								dlbDsbenf, strArrCovYrsofpay[id], strArrCovMaxpayout[id], strArrCovTypesofHS[id],
								dlbDeduct, dlbCoIns, strArrCovDescription[id], strArrCovRemarks[id], strLoggedUser,
								new Date(), null, null));

					}

				}
			}

			vectliCovDet.add(insliCovList);
			vectliCovDet.add(updliCovList);
			vectliCovDet.add(delliCovList);
			vectliCovDet.add(updliCovListAS);
		} catch (Exception ex) {
			logger.error("Error in getLiBenefitsDetails ->", ex);
		}

		return vectliCovDet;
	}

	public Vector getLiBenefitsDetails(HttpServletRequest request) {
		Vector vectliBenefDet = new Vector();
		List insliBenefList = new ArrayList();
		List updliBenefList = new ArrayList();
		List updliBenefListAS = new ArrayList();
		List delliBenefList = new ArrayList();

		HttpSession session = request.getSession(false);
		Map<String, String> sessMap = new HashMap<String, String>();
		sessMap = (HashMap<String, String>) session.getAttribute(FipaConstant.LOGGED_USER_INFO);

		try {

			String[] strArrDsbMode = FipaUtils.getParamArrValue(request, "txtFlddsbltyMode");
			String[] strArrDsbId = FipaUtils.getParamArrValue(request, "txtFldliDsbltyId");

			String[] strArrDsbPlanName = FipaUtils.getParamArrValue(request, "txtFldliDsbltyPlanname");
			String[] strArrDsbIncDate = FipaUtils.getParamArrValue(request, "txtFldliDsbltyIncDate");
			String[] strArrDsbExpDate = FipaUtils.getParamArrValue(request, "txtFldliDsbltyExpDate");

			String[] strArrDsbTypes = FipaUtils.getParamArrValue(request, "selliDsbltyTypes");
			String[] strArrDsbYrBegin = FipaUtils.getParamArrValue(request, "txtFldliDsbltyYrBegins");
			String[] strArrDsbYrCeases = FipaUtils.getParamArrValue(request, "txtFldliDsbltyYrCeases");
			String[] strArrDsbBenf = FipaUtils.getParamArrValue(request, "txtFldliDsbltyBenf");
			String[] strArrDsbIncBEnf = FipaUtils.getParamArrValue(request, "txtFldliDsbltyIncBenf");

			String[] strArrDsbCrtdBy = FipaUtils.getParamArrValue(request, "txtFldliDsbltyCrtdBy");
			String[] strArrDsbCrtdDate = FipaUtils.getParamArrValue(request, "txtFldliDsbltyCrtdDate");

			String strFNAId = FipaUtils.getParamValue(request, "fnaId");
			String strLISId = FipaUtils.getParamValue(request, "lipId");
			String strLoggedUser = (String) sessMap.get(FipaConstant.LOGGED_USER_ID);

			if (strArrDsbMode != null && strArrDsbMode.length > 0) {

				for (int id = 0; id < strArrDsbMode.length; id++) {

					Double dlBenfVal = Double
							.parseDouble(FipaUtils.nullOrBlank(strArrDsbBenf[id]) ? "0" : strArrDsbBenf[id]);
					Double dlBenfIncr = Double
							.parseDouble(FipaUtils.nullOrBlank(strArrDsbIncBEnf[id]) ? "0" : strArrDsbIncBEnf[id]);

					Date crtdDate = FipaUtils.nullOrBlank(strArrDsbCrtdDate[id]) ? new Date()
							: FipaDateUtils.convertStringToDate(strArrDsbCrtdDate[id]);

					Date incDate = FipaUtils.nullOrBlank(strArrDsbIncDate[id]) ? null
							: FipaDateUtils.convertStringToDate(strArrDsbIncDate[id]);
					Date expDate = FipaUtils.nullOrBlank(strArrDsbExpDate[id]) ? null
							: FipaDateUtils.convertStringToDate(strArrDsbExpDate[id]);

					FnaSelfspouseDets fnaselfspsDets = new FnaSelfspouseDets();
					fnaselfspsDets.setFnaId(strFNAId);

					FnaLifeinsuranceDets fnalifeInsDets = new FnaLifeinsuranceDets();
					fnalifeInsDets.setLipId(strLISId);

					String strPKId = FipaUtils.nullOrBlank(strArrDsbId[id]) ? "" : strArrDsbId[id];

					if (strArrDsbMode[id].equalsIgnoreCase(FipaConstant.INSERT_MODE)
							&& FipaUtils.nullOrBlank(strPKId)) {
						insliBenefList.add(new FnaLifeinsuranceDisablebenfs(null, null, null, strArrDsbTypes[id],
								strArrDsbYrBegin[id], strArrDsbYrCeases[id], Double.parseDouble("0"), dlBenfVal,
								dlBenfIncr, strLoggedUser, new Date(), null, null, strArrDsbPlanName[id], incDate,
								expDate));

					}

					if (strArrDsbMode[id].equalsIgnoreCase(FipaConstant.UPDATE_MODE)
							|| (strArrDsbMode[id].equalsIgnoreCase(FipaConstant.INSERT_MODE)
									&& !FipaUtils.nullOrBlank(strPKId))) {
						if (strPKId.startsWith("AS")) {
							updliBenefListAS.add(new FnaLifeinsuranceDisablebenfs(strArrDsbId[id], fnalifeInsDets,
									fnaselfspsDets, strArrDsbTypes[id], strArrDsbYrBegin[id], strArrDsbYrCeases[id],
									Double.parseDouble("0"), dlBenfVal, dlBenfIncr, strLoggedUser, new Date(),
									strLoggedUser, new Date(), strArrDsbPlanName[id], incDate, expDate));

						} else {
							updliBenefList.add(new FnaLifeinsuranceDisablebenfs(strArrDsbId[id], fnalifeInsDets,
									fnaselfspsDets, strArrDsbTypes[id], strArrDsbYrBegin[id], strArrDsbYrCeases[id],
									Double.parseDouble("0"), dlBenfVal, dlBenfIncr, strArrDsbCrtdBy[id], crtdDate,
									strLoggedUser, new Date(), strArrDsbPlanName[id], incDate, expDate));

						}

					}

					if (strArrDsbMode[id].equalsIgnoreCase(FipaConstant.DELETE_MODE)) {
						delliBenefList.add(new FnaLifeinsuranceDisablebenfs(strArrDsbId[id], fnalifeInsDets,
								fnaselfspsDets, strArrDsbTypes[id], strArrDsbYrBegin[id], strArrDsbYrCeases[id],
								Double.parseDouble("0"), dlBenfVal, dlBenfIncr, strArrDsbCrtdBy[id], crtdDate,
								strLoggedUser, new Date(), strArrDsbPlanName[id], incDate, expDate));

					}

				}
			}

			vectliBenefDet.add(insliBenefList);
			vectliBenefDet.add(updliBenefList);
			vectliBenefDet.add(delliBenefList);
			vectliBenefDet.add(updliBenefListAS);
		} catch (Exception ex) {
			logger.error("Error in getLiBenefitsDetails ->", ex);
		}

		return vectliBenefDet;
	}

	public Vector getLiNomNamesDetails(HttpServletRequest request) {

		Vector vectNomNameDetails = new Vector();
		List insNomNameList = new ArrayList();
		List updNomNameList = new ArrayList();
		List updNomNameListAS = new ArrayList();
		List delNomNameList = new ArrayList();

		HttpSession session = request.getSession(false);
		Map<String, String> sessMap = new HashMap<String, String>();
		sessMap = (HashMap<String, String>) session.getAttribute(FipaConstant.LOGGED_USER_INFO);

		try {

			String[] strArrNomNameMode = FipaUtils.getParamArrValue(request, "txtFldnomineMode");
			String[] strArrNomNameId = FipaUtils.getParamArrValue(request, "txtFldNomineeId");
			String[] strArrNomName = FipaUtils.getParamArrValue(request, "txtFldNomineeName");
			String[] strArrNomPer = FipaUtils.getParamArrValue(request, "txtFldNomineePercnt");
			String[] strArrNomNameCrtdBy = FipaUtils.getParamArrValue(request, "txtFldNomineeCrtdBy");
			String[] strArrNomNameCrtdDate = FipaUtils.getParamArrValue(request, "txtFldNomineeCrtdDate");
			String[] strArrNomNameModBy = FipaUtils.getParamArrValue(request, "txtFldNomineeModBy");
			String[] strArrNomNameModDate = FipaUtils.getParamArrValue(request, "txtFldNomineeModDate");

			String strFNAId = FipaUtils.getParamValue(request, "fnaId");
			String strLISId = FipaUtils.getParamValue(request, "lipId");

			String strLoggedUser = (String) sessMap.get(FipaConstant.LOGGED_USER_ID);

			if (strArrNomNameMode != null && strArrNomNameMode.length > 0) {

				for (int id = 0; id < strArrNomNameMode.length; id++) {

					Date crtdDate = FipaUtils.nullOrBlank(strArrNomNameCrtdDate[id]) ? new Date()
							: FipaDateUtils.convertStringToDate(strArrNomNameCrtdDate[id]);
					double dlbnomper = Double
							.parseDouble(FipaUtils.nullOrBlank(strArrNomPer[id]) ? "0" : strArrNomPer[id]);
					//
					FnaSelfspouseDets fnaselfspsDets = new FnaSelfspouseDets();
					fnaselfspsDets.setFnaId(strFNAId);

					FnaLifeinsuranceDets fnalifeInsDets = new FnaLifeinsuranceDets();
					fnalifeInsDets.setLipId(strLISId);
					String strPKId = FipaUtils.nullOrBlank(strArrNomNameId[id]) ? "" : strArrNomNameId[id];

					if (strArrNomNameMode[id].equalsIgnoreCase(FipaConstant.INSERT_MODE)
							&& FipaUtils.nullOrBlank(strPKId)) {
						insNomNameList.add(new FnaLifeinsuranceNominees(null, fnalifeInsDets, null, strArrNomName[id],
								strLoggedUser, new Date(), null, null, dlbnomper));

					}

					if (strArrNomNameMode[id].equalsIgnoreCase(FipaConstant.UPDATE_MODE)
							|| (strArrNomNameMode[id].equalsIgnoreCase(FipaConstant.INSERT_MODE)
									&& !FipaUtils.nullOrBlank(strPKId))) {

						if (strPKId.startsWith("AS")) {
							updNomNameListAS.add(new FnaLifeinsuranceNominees(strArrNomNameId[id], fnalifeInsDets,
									fnaselfspsDets, strArrNomName[id], strLoggedUser, new Date(), strLoggedUser,
									new Date(), dlbnomper));

						} else {
							updNomNameList.add(new FnaLifeinsuranceNominees(strArrNomNameId[id], fnalifeInsDets,
									fnaselfspsDets, strArrNomName[id], strArrNomNameCrtdBy[id], crtdDate, strLoggedUser,
									new Date(), dlbnomper));

						}

					}

					if (strArrNomNameMode[id].equalsIgnoreCase(FipaConstant.DELETE_MODE)) {
						delNomNameList.add(new FnaLifeinsuranceNominees(strArrNomNameId[id], fnalifeInsDets,
								fnaselfspsDets, strArrNomName[id], strArrNomNameCrtdBy[id], crtdDate, strLoggedUser,
								new Date(), dlbnomper));

					}
				}
			}

			vectNomNameDetails.add(insNomNameList);
			vectNomNameDetails.add(updNomNameList);
			vectNomNameDetails.add(delNomNameList);
			vectNomNameDetails.add(updNomNameListAS);
		} catch (Exception ex) {
			logger.error("Error in getLiNomNamesDetails ->", ex);
		}

		return vectNomNameDetails;

	}

	public Vector getInputInvest(HttpServletRequest request) {
		Vector vectInputInvest = new Vector();
		List insInputInvestList = new ArrayList();
		List updInputInvestList = new ArrayList();
		List updInputInvestListAS = new ArrayList();
		List delInputInvestList = new ArrayList();

		HttpSession session = request.getSession(false);
		Map<String, String> sessMap = new HashMap<String, String>();
		sessMap = (HashMap<String, String>) session.getAttribute(FipaConstant.LOGGED_USER_INFO);
		try {

			String[] strArrInvtmntMode = FipaUtils.getParamArrValue(request, "txtFldinvestMode");
			String[] strArrInvOwner = FipaUtils.getParamArrValue(request, "selInvOwner");
			String[] strArrInvstId = FipaUtils.getParamArrValue(request, "txtFldOwnInvstId");
			String[] strArrInvType = FipaUtils.getParamArrValue(request, "selInvType");
			String[] strArrInvFa = FipaUtils.getParamArrValue(request, "txtFldInvFa");
			String[] strArrInvInstname = FipaUtils.getParamArrValue(request, "txtFldInvInstname");
			String[] strArrInvDesc = FipaUtils.getParamArrValue(request, "txtFldInvDesc");
			String[] strArrInvEstrate = FipaUtils.getParamArrValue(request, "txtFldInvEstrate");
			String[] strArrInvAmount = FipaUtils.getParamArrValue(request, "txtFldInvAmount");
			String[] strArrInvPaymethod = FipaUtils.getParamArrValue(request, "selInvPaymethod");
			String[] strArrInvDate = FipaUtils.getParamArrValue(request, "txtFldInvDate");
			String[] strArrInvCurrbid = FipaUtils.getParamArrValue(request, "txtFldInvCurrbid");
			String[] strArrInvUnitsAlloc = FipaUtils.getParamArrValue(request, "txtFldInvUnitsAlloc");
			String[] strArrInvCurNav = FipaUtils.getParamArrValue(request, "txtFldinvCurrNAV");
			String[] strArrInvAnyRegPlan = FipaUtils.getParamArrValue(request, "txtFldInvAnyRegPlan");
			String[] strArrInvRegPlanFreq = FipaUtils.getParamArrValue(request, "selInvRegPlanFreq");
			String[] strArrInvRegPlanAmount = FipaUtils.getParamArrValue(request, "txtInvRegPlanAmout");
			String[] strArrInvRegPlanFromYrs = FipaUtils.getParamArrValue(request, "txtFldInvRegPlanFromYrs");
			// String[] strArrInvRegPlanToYrs = FipaUtils.getParamArrValue(request,
			// "txtFldInvRegPlanToYrs");//removed from screen
			String[] strArrInvObjective = FipaUtils.getParamArrValue(request, "selInvObjective");
			String[] strArrInvYrsToRet = FipaUtils.getParamArrValue(request, "selInvYrsToRet");
			String[] strArrInvChildname = FipaUtils.getParamArrValue(request, "txtFldInvChildname");
			String[] strArrInvAccPrcnt = FipaUtils.getParamArrValue(request, "txtFldInvAccPrcnt");
			String[] strArrInvRemarks = FipaUtils.getParamArrValue(request, "txtFldInvRemarks");
			String[] strArrInvAnlysByPtflio = FipaUtils.getParamArrValue(request, "txtFldInvAnnlPortfolio");
			String[] strArrInvAnnlDividPrct = FipaUtils.getParamArrValue(request, "txtFldInvAnnlDivid");
			String[] strArrInvDividPaymode = FipaUtils.getParamArrValue(request, "selInvDividPaymode");

			String[] strArrDividendAmt = FipaUtils.getParamArrValue(request, "txtFldDividendAmt");
			String[] strArrDividendBasdOn = FipaUtils.getParamArrValue(request, "selInvDividendBasdOn");
			String[] strArrDividendReInv = FipaUtils.getParamArrValue(request, "selInvDividendReInv");
			String[] strArrDivPeriod = FipaUtils.getParamArrValue(request, "txtFldDivPeriod");
			String[] strArrDivPARAmt = FipaUtils.getParamArrValue(request, "txtFldInvDivPARAmt");

			String[] strArrBasDisburse = FipaUtils.getParamArrValue(request, "selBasDisburse");
			String[] strArrDisburseAmt = FipaUtils.getParamArrValue(request, "txtFldDisburseAmt");
			String[] strArrDisburseYrs = FipaUtils.getParamArrValue(request, "txtFldDisburseYrs");

			// Reference Id
			String[] strArrInvRefId = FipaUtils.getParamArrValue(request, "txtFldOwnInvRefId");

			String[] strArrInvCrtdBy = FipaUtils.getParamArrValue(request, "invCreatedBy");
			String[] strArrInvCrtdDate = FipaUtils.getParamArrValue(request, "invCreatedDate");

			String strFNAId = FipaUtils.getParamValue(request, "fnaId");
			String strLoggedUser = (String) sessMap.get(FipaConstant.LOGGED_USER_ID);

			FnaSelfspouseDets fnaselfspsDets = new FnaSelfspouseDets();
			fnaselfspsDets.setFnaId(strFNAId);

			if (strArrInvtmntMode != null && strArrInvtmntMode.length > 0) {
				/*
				 * System.out.println(
				 * "================strArrInvtmntMode.length>0===============");
				 */
				for (int id = 0; id < strArrInvtmntMode.length; id++) {

					double DecInvEstrate = Double
							.parseDouble(FipaUtils.nullOrBlank(strArrInvEstrate[id]) ? "0" : strArrInvEstrate[id]);
					double DblInvAmount = Double
							.parseDouble(FipaUtils.nullOrBlank(strArrInvAmount[id]) ? "0" : strArrInvAmount[id]);
					double DblInvCurrbid = Double
							.parseDouble(FipaUtils.nullOrBlank(strArrInvCurrbid[id]) ? "0" : strArrInvCurrbid[id]);
					double DblInvUnitsAlloc = Double.parseDouble(
							FipaUtils.nullOrBlank(strArrInvUnitsAlloc[id]) ? "0" : strArrInvUnitsAlloc[id]);

					double DblArrInvCurNav = Double
							.parseDouble(FipaUtils.nullOrBlank(strArrInvCurNav[id]) ? "0" : strArrInvCurNav[id]);

					double regPlanAmout = Double.parseDouble(
							FipaUtils.nullOrBlank(strArrInvRegPlanAmount[id]) ? "0" : strArrInvRegPlanAmount[id]);

					double intInvRegPlanFromYrs = Double.parseDouble(
							FipaUtils.nullOrBlank(strArrInvRegPlanFromYrs[id]) ? "0" : strArrInvRegPlanFromYrs[id]);
					// double
					// intInvRegPlanToYrs=Double.parseDouble(FipaUtils.nullOrBlank(strArrInvRegPlanToYrs[id])
					// ? "0" :strArrInvRegPlanToYrs[id]);
					double intInvRegPlanToYrs = 0;// removed from screen
					double intInvYrsToRet = Double
							.parseDouble(FipaUtils.nullOrBlank(strArrInvYrsToRet[id]) ? "0" : strArrInvYrsToRet[id]);
					double intInvAccPrcnt = Double
							.parseDouble(FipaUtils.nullOrBlank(strArrInvAccPrcnt[id]) ? "0" : strArrInvAccPrcnt[id]);

					double intArrInvAnnlDividPrct = Double.parseDouble(
							FipaUtils.nullOrBlank(strArrInvAnnlDividPrct[id]) ? "0" : strArrInvAnnlDividPrct[id]);

					double dblDividAmt = Double
							.parseDouble(FipaUtils.nullOrBlank(strArrDividendAmt[id]) ? "0" : strArrDividendAmt[id]);
					double dblDividPrd = Double
							.parseDouble(FipaUtils.nullOrBlank(strArrDivPeriod[id]) ? "0" : strArrDivPeriod[id]);
					double dblDividPARAmt = Double
							.parseDouble(FipaUtils.nullOrBlank(strArrDivPARAmt[id]) ? "0" : strArrDivPARAmt[id]);

					double dblDisburseAmt = Double
							.parseDouble(FipaUtils.nullOrBlank(strArrDisburseAmt[id]) ? "0" : strArrDisburseAmt[id]);
					double dblDisburseYrs = Double
							.parseDouble(FipaUtils.nullOrBlank(strArrDisburseYrs[id]) ? "0" : strArrDisburseYrs[id]);

					Date DateInvDate = FipaUtils.nullOrBlank(strArrInvDate[id]) ? null
							: FipaDateUtils.convertStringToDate(strArrInvDate[id]);// Y NEW DATE IS ASSIGNED
					Date createdDate = FipaUtils.nullOrBlank(strArrInvCrtdDate[id]) ? new Date()
							: FipaDateUtils.convertStringToDate(strArrInvCrtdDate[id]);// Y NEW DATE IS ASSIGNED

					String strPKId = FipaUtils.nullOrBlank(strArrInvstId[id]) ? "" : strArrInvstId[id];

					if (strArrInvtmntMode[id].equalsIgnoreCase(FipaConstant.INSERT_MODE)
							&& FipaUtils.nullOrBlank(strPKId)) {
						insInputInvestList.add(new FnaInputinvestmentsDets(null, null, strArrInvOwner[id],
								strArrInvType[id], strArrInvFa[id], strArrInvAnlysByPtflio[id], strArrInvInstname[id],
								strArrInvDesc[id], DecInvEstrate, DblInvAmount, strArrInvPaymethod[id], DateInvDate,
								DblInvCurrbid, DblInvUnitsAlloc, DblArrInvCurNav, strArrInvAnyRegPlan[id], regPlanAmout,
								strArrInvRegPlanFreq[id], intInvRegPlanFromYrs, intInvRegPlanToYrs,
								strArrInvObjective[id], intInvYrsToRet, strArrInvChildname[id], intInvAccPrcnt,
								strArrInvRemarks[id], intArrInvAnnlDividPrct, strArrInvDividPaymode[id], strLoggedUser,
								new Date(), null, null, strArrInvRefId[id], dblDividAmt, strArrDividendBasdOn[id],
								strArrDividendReInv[id], dblDividPrd, dblDividPARAmt, strArrBasDisburse[id],
								dblDisburseAmt, dblDisburseYrs));
						/*
						 * System.out.println("insInputInvestList==============="+insInputInvestList);
						 */
					}

					if (strArrInvtmntMode[id].equalsIgnoreCase(FipaConstant.UPDATE_MODE)
							|| (strArrInvtmntMode[id].equalsIgnoreCase(FipaConstant.INSERT_MODE)
									&& !FipaUtils.nullOrBlank(strPKId))) {

						if (strPKId.startsWith("AS")) {
							updInputInvestListAS.add(new FnaInputinvestmentsDets(strArrInvstId[id], fnaselfspsDets,
									strArrInvOwner[id], strArrInvType[id], strArrInvFa[id], strArrInvAnlysByPtflio[id],
									strArrInvInstname[id], strArrInvDesc[id], DecInvEstrate, DblInvAmount,
									strArrInvPaymethod[id], DateInvDate, DblInvCurrbid, DblInvUnitsAlloc,
									DblArrInvCurNav, strArrInvAnyRegPlan[id], regPlanAmout, strArrInvRegPlanFreq[id],
									intInvRegPlanFromYrs, intInvRegPlanToYrs, strArrInvObjective[id], intInvYrsToRet,
									strArrInvChildname[id], intInvAccPrcnt, strArrInvRemarks[id],
									intArrInvAnnlDividPrct, strArrInvDividPaymode[id], strLoggedUser, new Date(),
									strLoggedUser, new Date(), strArrInvRefId[id], dblDividAmt,
									strArrDividendBasdOn[id], strArrDividendReInv[id], dblDividPrd, dblDividPARAmt,
									strArrBasDisburse[id], dblDisburseAmt, dblDisburseYrs));
							/*
							 * System.out.println("updInputInvestListAS==============="+updInputInvestListAS
							 * );
							 */
						} else {
							updInputInvestList.add(new FnaInputinvestmentsDets(strArrInvstId[id], fnaselfspsDets,
									strArrInvOwner[id], strArrInvType[id], strArrInvFa[id], strArrInvAnlysByPtflio[id],
									strArrInvInstname[id], strArrInvDesc[id], DecInvEstrate, DblInvAmount,
									strArrInvPaymethod[id], DateInvDate, DblInvCurrbid, DblInvUnitsAlloc,
									DblArrInvCurNav, strArrInvAnyRegPlan[id], regPlanAmout, strArrInvRegPlanFreq[id],
									intInvRegPlanFromYrs, intInvRegPlanToYrs, strArrInvObjective[id], intInvYrsToRet,
									strArrInvChildname[id], intInvAccPrcnt, strArrInvRemarks[id],
									intArrInvAnnlDividPrct, strArrInvDividPaymode[id], strArrInvCrtdBy[id], createdDate,
									strLoggedUser, new Date(), strArrInvRefId[id], dblDividAmt,
									strArrDividendBasdOn[id], strArrDividendReInv[id], dblDividPrd, dblDividPARAmt,
									strArrBasDisburse[id], dblDisburseAmt, dblDisburseYrs));
							/*
							 * System.out.println("updInputInvestList==============="+updInputInvestList);
							 */
						}

					}

					if (strArrInvtmntMode[id].equalsIgnoreCase(FipaConstant.DELETE_MODE)) {
						delInputInvestList.add(new FnaInputinvestmentsDets(strArrInvstId[id], fnaselfspsDets,
								strArrInvOwner[id], strArrInvType[id], strArrInvFa[id], strArrInvAnlysByPtflio[id],
								strArrInvInstname[id], strArrInvDesc[id], DecInvEstrate, DblInvAmount,
								strArrInvPaymethod[id], DateInvDate, DblInvCurrbid, DblInvUnitsAlloc, DblArrInvCurNav,
								strArrInvAnyRegPlan[id], regPlanAmout, strArrInvRegPlanFreq[id], intInvRegPlanFromYrs,
								intInvRegPlanToYrs, strArrInvObjective[id], intInvYrsToRet, strArrInvChildname[id],
								intInvAccPrcnt, strArrInvRemarks[id], intArrInvAnnlDividPrct, strArrInvDividPaymode[id],
								strArrInvCrtdBy[id], createdDate, strLoggedUser, new Date(), strArrInvRefId[id],
								dblDividAmt, strArrDividendBasdOn[id], strArrDividendReInv[id], dblDividPrd,
								dblDividPARAmt, strArrBasDisburse[id], dblDisburseAmt, dblDisburseYrs));
						/*
						 * System.out.println("delInputInvestList==============="+delInputInvestList);
						 */
					}

				}
			}
			vectInputInvest.add(insInputInvestList);
			vectInputInvest.add(updInputInvestList);
			vectInputInvest.add(delInputInvestList);
			vectInputInvest.add(updInputInvestListAS);

		} catch (Exception ex) {
			logger.error("Error in getInputInvest ->", ex);
		}

		return vectInputInvest;
	}

	public Vector getOthRetPlg(HttpServletRequest request) {
		Vector vectRdOth = new Vector();
		List insRdOthList = new ArrayList();
		List updRdOthList = new ArrayList();
		List updRdOthListAS = new ArrayList();
		List delRdOthList = new ArrayList();

		HttpSession session = request.getSession(false);
		Map<String, String> sessMap = new HashMap<String, String>();
		sessMap = (HashMap<String, String>) session.getAttribute(FipaConstant.LOGGED_USER_INFO);
		try {

			String[] strArrORMode = FipaUtils.getParamArrValue(request, "txtFldothretMode");

			String[] strArrORId = FipaUtils.getParamArrValue(request, "txtFldORId");
			String[] strArrORtyofpay = FipaUtils.getParamArrValue(request, "txtFldORtyofpay");
			String[] strArrORFreq = FipaUtils.getParamArrValue(request, "selORFreq");
			String[] strArrORAnlExp = FipaUtils.getParamArrValue(request, "txtFldORAnlExp");
			String[] strArrOREslrate = FipaUtils.getParamArrValue(request, "txtFldOREslrate");
			String[] strArrORAgeBsOn = FipaUtils.getParamArrValue(request, "selORAgeBsOn");
			String[] strArrORAgePaySts = FipaUtils.getParamArrValue(request, "txtFldORAgePaySts");
			String[] strArrORAgePayends = FipaUtils.getParamArrValue(request, "txtFldORAgePayends");
			String[] strArrORRemarks = FipaUtils.getParamArrValue(request, "txtFldORRemarks");
			String[] strArrORCrtdBy = FipaUtils.getParamArrValue(request, "txtFldORCrtdBy");
			String[] strArrORCrtdDate = FipaUtils.getParamArrValue(request, "txtFldORCrtdDate");

			String strFNAId = FipaUtils.getParamValue(request, "fnaId");
			String strLoggedUser = (String) sessMap.get(FipaConstant.LOGGED_USER_ID);

			FnaSelfspouseDets fnaselfspsDets = new FnaSelfspouseDets();
			fnaselfspsDets.setFnaId(strFNAId);
			if (strArrORMode != null && strArrORMode.length > 0) {
				for (int id = 0; id < strArrORMode.length; id++) {

					double dblAnlExp = Double
							.parseDouble(FipaUtils.nullOrBlank(strArrORAnlExp[id]) ? "0" : strArrORAnlExp[id]);
					double dblEscRte = Double
							.parseDouble(FipaUtils.nullOrBlank(strArrOREslrate[id]) ? "0" : strArrOREslrate[id]);

					Date createdDate = FipaUtils.nullOrBlank(strArrORCrtdDate[id]) ? new Date()
							: FipaDateUtils.convertStringToDate(strArrORCrtdDate[id]);

					String strPKId = FipaUtils.nullOrBlank(strArrORId[id]) ? "" : strArrORId[id];

					if (strArrORMode[id].equalsIgnoreCase(FipaConstant.INSERT_MODE) && FipaUtils.nullOrBlank(strPKId)) {
						insRdOthList.add(new FnaRetireplanOthpayment(null, null, strArrORtyofpay[id], strArrORFreq[id],
								dblAnlExp, dblEscRte, strArrORAgeBsOn[id], strArrORAgePaySts[id],
								strArrORAgePayends[id], strArrORRemarks[id], strLoggedUser, new Date(), null, null));
					}

					if (strArrORMode[id].equalsIgnoreCase(FipaConstant.UPDATE_MODE)
							|| (strArrORMode[id].equalsIgnoreCase(FipaConstant.INSERT_MODE)
									&& !FipaUtils.nullOrBlank(strPKId))) {

						if (strPKId.startsWith("AS")) {
							updRdOthListAS.add(new FnaRetireplanOthpayment(strArrORId[id], fnaselfspsDets,
									strArrORtyofpay[id], strArrORFreq[id], dblAnlExp, dblEscRte, strArrORAgeBsOn[id],
									strArrORAgePaySts[id], strArrORAgePayends[id], strArrORRemarks[id], strLoggedUser,
									new Date(), strLoggedUser, new Date()));
						} else {
							updRdOthList.add(new FnaRetireplanOthpayment(strArrORId[id], fnaselfspsDets,
									strArrORtyofpay[id], strArrORFreq[id], dblAnlExp, dblEscRte, strArrORAgeBsOn[id],
									strArrORAgePaySts[id], strArrORAgePayends[id], strArrORRemarks[id],
									strArrORCrtdBy[id], createdDate, strLoggedUser, new Date()));
						}

					}

					if (strArrORMode[id].equalsIgnoreCase(FipaConstant.DELETE_MODE)) {
						delRdOthList.add(new FnaRetireplanOthpayment(strArrORId[id], fnaselfspsDets,
								strArrORtyofpay[id], strArrORFreq[id], dblAnlExp, dblEscRte, strArrORAgeBsOn[id],
								strArrORAgePaySts[id], strArrORAgePayends[id], strArrORRemarks[id], strArrORCrtdBy[id],
								createdDate, strLoggedUser, new Date()));
					}

				}
			}
			vectRdOth.add(insRdOthList);
			vectRdOth.add(updRdOthList);
			vectRdOth.add(delRdOthList);
			vectRdOth.add(updRdOthListAS);
		} catch (Exception ex) {
			logger.error("Error in getOthRetPlg ->", ex);
		}

		return vectRdOth;
	}

	public Vector getIncRetPlg(HttpServletRequest request) {
		// TODO Auto-generated method stub

		Vector vectRdInAssDetails = new Vector();
		List insRdInAssList = new ArrayList();
		List updRdInAssList = new ArrayList();
		List updRdInAssListAS = new ArrayList();
		List delRdInAssList = new ArrayList();

		HttpSession session = request.getSession(false);
		Map<String, String> sessMap = new HashMap<String, String>();
		sessMap = (HashMap<String, String>) session.getAttribute(FipaConstant.LOGGED_USER_INFO);

		// Retirement plg
		try {

			String[] strArrincretMode = FipaUtils.getParamArrValue(request, "txtFldincretMode");
			String[] strArrIncId = FipaUtils.getParamArrValue(request, "txtFldIRId");
			String[] strArrIRClsfy = FipaUtils.getParamArrValue(request, "txtFldIRClsfy");
			String[] strArrIRDesc = FipaUtils.getParamArrValue(request, "txtFldIRDesc");
			String[] strArrIRFreq = FipaUtils.getParamArrValue(request, "selIRFreq");
			String[] strArrIRAmtofInc = FipaUtils.getParamArrValue(request, "txtFldIRAmtofInc");
			String[] strArrIREslrate = FipaUtils.getParamArrValue(request, "txtFldIREslrate");
			String[] strArrIRRoi = FipaUtils.getParamArrValue(request, "txtFldIRRoi");
			String[] strArrIRAgeBasOn = FipaUtils.getParamArrValue(request, "selIRAgeBsOn");

			String[] strArrIRAgePaySts = FipaUtils.getParamArrValue(request, "txtFldIRAgePaySts");
			String[] strArrIRAgePayends = FipaUtils.getParamArrValue(request, "txtFldIRAgePayends");
			String[] strArrIRCrtdBy = FipaUtils.getParamArrValue(request, "txtFldIRCrtdBy");
			String[] strArrIRCrtdDate = FipaUtils.getParamArrValue(request, "txtFldIRCrtdDate");

			// Retirement plg from Other Assets

			String[] strArrincassrtMode = FipaUtils.getParamArrValue(request, "txtFldincassrtMode");
			String[] strArrIncAssId = FipaUtils.getParamArrValue(request, "txtFldIncAssId");
			String[] strArrIncAssClsfy = FipaUtils.getParamArrValue(request, "txtFldIncAssClsfy");
			String[] strArrIncAssDesc = FipaUtils.getParamArrValue(request, "txtFldIncAssDesc");
			String[] strArrIncAssFreq = FipaUtils.getParamArrValue(request, "selIncAssFreq");
			String[] strArrIncAssAmt = FipaUtils.getParamArrValue(request, "txtFldIncAssAmtofInc");
			String[] strArrIncAssEsc = FipaUtils.getParamArrValue(request, "txtFldIncAssEslrate");
			String[] strArrIncAssRoi = FipaUtils.getParamArrValue(request, "txtFldIncAssRoi");
			String[] strArrIncAssAgeBsOn = FipaUtils.getParamArrValue(request, "selIncAssAgeBsOn");
			String[] strArrIncAssAgePaysts = FipaUtils.getParamArrValue(request, "txtFldIncAssAgePaySts");
			String[] strArrIncAssAgePayends = FipaUtils.getParamArrValue(request, "txtFldIncAssAgePayends");
			String[] strArrIncAssCrtdBy = FipaUtils.getParamArrValue(request, "txtFldIncAssCrtdBy");
			String[] strArrIncAssCrtdDate = FipaUtils.getParamArrValue(request, "txtFldIncAssCrtdDate");

			String[] strArrIncAssRefId = FipaUtils.getParamArrValue(request, "txtFldIncAssRefId");

			String strFNAId = FipaUtils.getParamValue(request, "fnaId");
			String strLoggedUser = (String) sessMap.get(FipaConstant.LOGGED_USER_ID);

			if (strArrincretMode != null && strArrincretMode.length > 0) {
				for (int id = 0; id < strArrincretMode.length; id++) {

					double dblIncAmt = Double
							.parseDouble(FipaUtils.nullOrBlank(strArrIRAmtofInc[id]) ? "0" : strArrIRAmtofInc[id]);
					double dblIncEsc = Double
							.parseDouble(FipaUtils.nullOrBlank(strArrIREslrate[id]) ? "0" : strArrIREslrate[id]);
					double dblIncRoi = Double
							.parseDouble(FipaUtils.nullOrBlank(strArrIRRoi[id]) ? "0" : strArrIRRoi[id]);

					Date crtdDate = FipaUtils.nullOrBlank(strArrIRCrtdDate[id]) ? new Date()
							: FipaDateUtils.convertStringToDate(strArrIRCrtdDate[id]);

					FnaSelfspouseDets fnaselfspsDets = new FnaSelfspouseDets();
					fnaselfspsDets.setFnaId(strFNAId);

					String strPKId = FipaUtils.nullOrBlank(strArrIncId[id]) ? "" : strArrIncId[id];

					if (strArrincretMode[id].equalsIgnoreCase(FipaConstant.INSERT_MODE)
							&& FipaUtils.nullOrBlank(strPKId)) {
						insRdInAssList.add(new FnaRetireplanIncomeasset(null, null, "RETINCOME", strArrIRClsfy[id],
								strArrIRDesc[id], strArrIRFreq[id], dblIncAmt, dblIncEsc, dblIncRoi,
								strArrIRAgeBasOn[id], strArrIRAgePaySts[id], strArrIRAgePayends[id], strLoggedUser,
								new Date(), null, null, ""));

					}

					if (strArrincretMode[id].equalsIgnoreCase(FipaConstant.UPDATE_MODE)
							|| (strArrincretMode[id].equalsIgnoreCase(FipaConstant.INSERT_MODE)
									&& !FipaUtils.nullOrBlank(strPKId))) {

						if (strPKId.startsWith("AS")) {
							updRdInAssListAS.add(new FnaRetireplanIncomeasset(strArrIncId[id], fnaselfspsDets,
									"RETINCOME", strArrIRClsfy[id], strArrIRDesc[id], strArrIRFreq[id], dblIncAmt,
									dblIncEsc, dblIncRoi, strArrIRAgeBasOn[id], strArrIRAgePaySts[id],
									strArrIRAgePayends[id], strLoggedUser, new Date(), strLoggedUser, new Date(), ""));

						} else {
							updRdInAssList.add(new FnaRetireplanIncomeasset(strArrIncId[id], fnaselfspsDets,
									"RETINCOME", strArrIRClsfy[id], strArrIRDesc[id], strArrIRFreq[id], dblIncAmt,
									dblIncEsc, dblIncRoi, strArrIRAgeBasOn[id], strArrIRAgePaySts[id],
									strArrIRAgePayends[id], strArrIRCrtdBy[id], crtdDate, strLoggedUser, new Date(),
									""));

						}

					}

					if (strArrincretMode[id].equalsIgnoreCase(FipaConstant.DELETE_MODE)) {
						delRdInAssList.add(new FnaRetireplanIncomeasset(strArrIncId[id], fnaselfspsDets, "RETINCOME",
								strArrIRClsfy[id], strArrIRDesc[id], strArrIRFreq[id], dblIncAmt, dblIncEsc, dblIncRoi,
								strArrIRAgeBasOn[id], strArrIRAgePaySts[id], strArrIRAgePayends[id], strArrIRCrtdBy[id],
								crtdDate, strLoggedUser, new Date(), ""));

					}
				}
			}

			vectRdInAssDetails.add(insRdInAssList);
			vectRdInAssDetails.add(updRdInAssList);
			vectRdInAssDetails.add(delRdInAssList);
			vectRdInAssDetails.add(updRdInAssListAS);

			if (strArrincassrtMode != null && strArrincassrtMode.length > 0) {
				for (int id = 0; id < strArrincassrtMode.length; id++) {
					double dblIncAssAmt = Double
							.parseDouble(FipaUtils.nullOrBlank(strArrIncAssAmt[id]) ? "0" : strArrIncAssAmt[id]);
					double dblIncAssEsc = Double
							.parseDouble(FipaUtils.nullOrBlank(strArrIncAssEsc[id]) ? "0" : strArrIncAssEsc[id]);
					double dblIncAssRoi = Double
							.parseDouble(FipaUtils.nullOrBlank(strArrIncAssRoi[id]) ? "0" : strArrIncAssRoi[id]);

					Date crtdDate = FipaUtils.nullOrBlank(strArrIncAssCrtdDate[id]) ? new Date()
							: FipaDateUtils.convertStringToDate(strArrIncAssCrtdDate[id]);

					FnaSelfspouseDets fnaselfspsDets = new FnaSelfspouseDets();
					fnaselfspsDets.setFnaId(strFNAId);

					String strPKId = FipaUtils.nullOrBlank(strArrIncAssId[id]) ? "" : strArrIncAssId[id];

					if (strArrincassrtMode[id].equalsIgnoreCase(FipaConstant.INSERT_MODE)
							&& FipaUtils.nullOrBlank(strPKId)) {
						insRdInAssList.add(new FnaRetireplanIncomeasset(null, null, "RETINCOMEASS",
								strArrIncAssClsfy[id], strArrIncAssDesc[id], strArrIncAssFreq[id], dblIncAssAmt,
								dblIncAssEsc, dblIncAssRoi, strArrIncAssAgeBsOn[id], strArrIncAssAgePaysts[id],
								strArrIncAssAgePayends[id], strLoggedUser, new Date(), null, null,
								strArrIncAssRefId[id]));

					}

					if (strArrincassrtMode[id].equalsIgnoreCase(FipaConstant.UPDATE_MODE)
							|| (strArrincassrtMode[id].equalsIgnoreCase(FipaConstant.INSERT_MODE)
									&& !FipaUtils.nullOrBlank(strPKId))) {

						if (strPKId.startsWith("AS")) {
							updRdInAssListAS.add(new FnaRetireplanIncomeasset(strArrIncAssId[id], fnaselfspsDets,
									"RETINCOMEASS", strArrIncAssClsfy[id], strArrIncAssDesc[id], strArrIncAssFreq[id],
									dblIncAssAmt, dblIncAssEsc, dblIncAssRoi, strArrIncAssAgeBsOn[id],
									strArrIncAssAgePaysts[id], strArrIncAssAgePayends[id], strLoggedUser, new Date(),
									strLoggedUser, new Date(), strArrIncAssRefId[id]));

						} else {
							updRdInAssList.add(new FnaRetireplanIncomeasset(strArrIncAssId[id], fnaselfspsDets,
									"RETINCOMEASS", strArrIncAssClsfy[id], strArrIncAssDesc[id], strArrIncAssFreq[id],
									dblIncAssAmt, dblIncAssEsc, dblIncAssRoi, strArrIncAssAgeBsOn[id],
									strArrIncAssAgePaysts[id], strArrIncAssAgePayends[id], strArrIncAssCrtdBy[id],
									crtdDate, strLoggedUser, new Date(), strArrIncAssRefId[id]));

						}

					}

					if (strArrincassrtMode[id].equalsIgnoreCase(FipaConstant.DELETE_MODE)) {
						delRdInAssList.add(new FnaRetireplanIncomeasset(strArrIncAssId[id], fnaselfspsDets,
								"RETINCOMEASS", strArrIncAssClsfy[id], strArrIncAssDesc[id], strArrIncAssFreq[id],
								dblIncAssAmt, dblIncAssEsc, dblIncAssRoi, strArrIncAssAgeBsOn[id],
								strArrIncAssAgePaysts[id], strArrIncAssAgePayends[id], strArrIncAssCrtdBy[id], crtdDate,
								strLoggedUser, new Date(), strArrIncAssRefId[id]));

					}
				}
			}
			vectRdInAssDetails.add(insRdInAssList);
			vectRdInAssDetails.add(updRdInAssList);
			vectRdInAssDetails.add(delRdInAssList);
			vectRdInAssDetails.add(updRdInAssListAS);
		} catch (Exception ex) {
			logger.error("Error in getIncRetPlg ->", ex);
		}

		return vectRdInAssDetails;
	}

	private Vector uploadAttachments(HttpServletRequest request, CommonsMultipartFile[] fipaAttachmentDoc) {
		// TODO Auto-generated method stub

		// System.out.println("========uploadAttachments=======");

		Vector vectCustAtt = new Vector();
		List insCustAttList = new ArrayList();
		List updCustAttList = new ArrayList();
		List delCustAttList = new ArrayList();

		AttachmentService attmService = new AttachmentService();
		Session hbsession = attmService.getCurrHBSession();

		HttpSession session = request.getSession(false);
		Map<String, String> sessMap = new HashMap<String, String>();
		sessMap = (HashMap<String, String>) session.getAttribute(FipaConstant.LOGGED_USER_INFO);
		try {

			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
			PropContextUtils propLoad = (PropContextUtils) appCtx.getBean(FipaConstant.FP_PROPCONTEXT_BEAN);

			String orcleDir = propLoad.getPropertyAsString("attach.bfile.fipa.dir");
			String regexChars = propLoad.getPropertyAsString("attach.bfile.SplCharVal");
			String strFipaAttDir = propLoad.getPropertyAsString("attach.bfile.attachscreen.fipa");

			String[] strArrAttchMode = FipaUtils.getParamArrValue(request, "txtFldAttchMode");
			String[] strArrDocid = FipaUtils.getParamArrValue(request, "docid");
			String[] strArrCatgName = FipaUtils.getParamArrValue(request, "attachCategName");
			String[] strArrCatgId = FipaUtils.getParamArrValue(request, "attachCategId");
			String[] strArrDocTitle = FipaUtils.getParamArrValue(request, "documentTitle");
			String[] strArrAttPageNo = FipaUtils.getParamArrValue(request, "pageNo");
			String[] strArrAttDate = FipaUtils.getParamArrValue(request, "attachDate");
			String[] strArrAttRemarks = FipaUtils.getParamArrValue(request, "remarks");
			String[] strArrAttCrtdBy = FipaUtils.getParamArrValue(request, "createdBy");
			String[] strArrAttCrtdDate = FipaUtils.getParamArrValue(request, "createdDate");

			String strFNAId = FipaUtils.getParamValue(request, "fnaId");
			// System.out.println("strFNAId----6202---"+strFNAIds);
			String strLoggedUser = (String) sessMap.get(FipaConstant.LOGGED_USER_ID);
			String strLoggedAdvName = (String) sessMap.get(FipaConstant.LOGGED_USER_ADVSTFNAME);

			String strCustName = FipaUtils.getParamValue(request, "dfSelfName");
			String strCustNRIC = FipaUtils.getParamValue(request, "dfSelfNric");
			// String strCustNRIC = FipaUtils.getParamValue(request, "dfSelfNric");

			FnaSelfspouseDets fnaselfspsDets = new FnaSelfspouseDets();
			fnaselfspsDets.setFnaId(strFNAId);

			String retMsg = "";
			int id = 0;
			if (fipaAttachmentDoc != null && fipaAttachmentDoc.length > 0) {

				/* double maxAttachId = attmService.getMaxAttachId(new FnaAttachments()); */
				String maxAttachId = attmService.getMaxAttachId(new FnaAttachments());

				int count = 0;
				for (CommonsMultipartFile file : fipaAttachmentDoc) {
					// System.out.println("===========for loop ==========");
					if (strArrAttchMode[id].equalsIgnoreCase(FipaConstant.INSERT_MODE)) {
						String strAtmtFileName = "";
						String strAdvIdDir = "";
						String strBFILEName = "";
						String strFileSize = "";
						String strFileContentType = "";

						strAtmtFileName = FipaUtils.formatFileName(fipaAttachmentDoc[id].getOriginalFilename());
						strAtmtFileName = FipaUtils.replaceSplChars(regexChars, strAtmtFileName);
						strAdvIdDir = FipaUtils.replaceSplChars(regexChars, strLoggedAdvName);
						strBFILEName = File.separator + File.separator + strAdvIdDir.trim() + File.separator
								+ File.separator + strCustName.trim() + "_" + strCustNRIC.trim() + File.separator
								+ File.separator + strAtmtFileName + strBFILEName;
						// strBFILEName = strBFILEName.replace("//", "\\\\");

						strFileSize = String.valueOf(fipaAttachmentDoc[id].getSize());
						strFileContentType = fipaAttachmentDoc[id].getContentType();

						if (!fipaAttachmentDoc[id].getOriginalFilename().equals("")) {
							File srcFile = FipaUtils.createPhysicalDir(FipaConstant.GLBL_MODULE_ATTACTMENT,
									strLoggedAdvName, strCustName, strCustNRIC, strAtmtFileName);

							retMsg = FipaUtils.createPhysicalFile(new File(fipaAttachmentDoc[id].getOriginalFilename()),
									srcFile);

							fipaAttachmentDoc[id].transferTo(srcFile);

						}

						if (!fipaAttachmentDoc[id].isEmpty()) {
							count = count + 1;
							// System.out.println("====insert mode=====");
							/* FNAMaxID */
							String maxFnaAttachId = attmService.getMaxFnaAttachId(new FnaAttachments());
							String strMaxId = FipaUtils.getFormattedAttMaxPK(maxFnaAttachId, "FNA", 16, count);
							// System.out.println("strMaxId-----6257-----------"+strMaxId);

							int serialno = Integer.parseInt(maxAttachId);
							int totserial = serialno + count;
							String custcount = Integer.toString(totserial);

							// System.out.println("custcount-----6265-----------"+custcount);

							StringBuffer ATTCH_INSERT_QRY = new StringBuffer(" INSERT INTO "
									+ FipaConstant.FIPA_ATTACH_DB_TBL + " ("
									+ "DOCID,FNA_ID,DOCUMENT,ATTACH_CATEG_ID,ATTACH_CATEG_NAME,DOCUMENT_TITLE,PAGE_NO,FILENAME,FILESIZE,FILETYPE,"
									+ "CREATED_BY,ATTACH_DATE,REMARKS,CREATED_DATE,MODULE_REF,REFERENCE_ID) "
									// + " VALUES ('").append(maxAttachId)
									+ " VALUES ('").append(custcount)
											// .append("','").append("<FNAID>").append("'")
											.append("' ,'").append(strMaxId).append("'").append(" ,BFILENAME (")
											.append("'" + orcleDir + "','" + strBFILEName + "')").append(" ,'")
											.append(strArrCatgId[id]).append("'").append(" ,'")
											.append(strArrCatgName[id]).append("'").append(" ,'")
											.append(strArrDocTitle[id]).append("'").append(" ,'")
											.append(strArrAttPageNo[id]).append("'").append(" ,'")
											.append(strAtmtFileName).append("'").append(" ,'").append(strFileSize)
											.append("'").append(" ,'").append(strFileContentType).append("'")
											.append(" ,'").append(strLoggedUser).append("'").append(" ,SYSDATE")
											.append(" ,'").append(strArrAttRemarks[id]).append("'").append(" ,SYSDATE")
											.append(" ,'").append("FIPA_ATTACH").append("'").append(" ,'").append("")
											.append("'").append(" )");
							insCustAttList.add(ATTCH_INSERT_QRY.toString());
							// maxAttachId++;

						}

					}

					if (strArrAttchMode[id].equalsIgnoreCase(FipaConstant.QUERY_MODE)) {

						if (!strArrDocid[id].isEmpty()) {
							String ATTCH_UPDATE_QRY = " INSERT INTO " + FipaConstant.FIPA_ATTACH_DB_TBL + " ("
									+ "DOCID,FNA_ID,DOCUMENT,ATTACH_CATEG_ID,ATTACH_CATEG_NAME,DOCUMENT_TITLE,PAGE_NO,FILENAME,FILESIZE,FILETYPE,"
									+ "CREATED_BY,ATTACH_DATE,REMARKS,CREATED_DATE,MODULE_REF) " + " select\n"
									+ "				  " + maxAttachId + ",\n" + "				  '<FNAID>',\n"
									+ "				  DOCUMENT,\n" + "				  ATTACH_CATEG_ID,\n"
									+ "				  ATTACH_CATEG_NAME,\n" + "				  DOCUMENT_TITLE,\n"
									+ "				  PAGE_NO,\n" + "				  FILENAME,\n"
									+ "				  FILESIZE,\n" + "				  FILETYPE,\n" + "				  '"
									+ strLoggedUser + "',\n" + "				  ATTACH_DATE,\n"
									+ "				  REMARKS,\n" + "				  SYSDATE,\n"
									+ "				  MODULE_REF\n" + "				  from "
									+ FipaConstant.FIPA_ATTACH_DB_TBL + " WHERE DOCID='" + strArrDocid[id] + "'";

							updCustAttList.add(ATTCH_UPDATE_QRY.toString());
							// maxAttachId++;

						}
					}

					if (strArrAttchMode[id].equalsIgnoreCase(FipaConstant.DELETE_MODE)) {

						String strAttId = strArrDocid[id];

						delCustAttList.add("DELETE FROM FNA_ATTACHMENTS WHERE DOCID='" + strAttId + "'");
					}

					id++;

				}
			}

			vectCustAtt.add(insCustAttList);
			vectCustAtt.add(updCustAttList);
			vectCustAtt.add(delCustAttList);

		} catch (Exception e) {
			logger.error("----> uploadAttachments", e);
			// e.printStackTrace();
		}

		return vectCustAtt;

	}

	public void updateuserProfile(HttpServletRequest request) {

		HttpSession session = request.getSession(false);

		Map<String, String> sessMap = new HashMap<String, String>();
		sessMap = (HashMap<String, String>) session.getAttribute(FipaConstant.LOGGED_USER_INFO);
		String userId = (String) sessMap.get(FipaConstant.LOGGED_USER_ID);
		ClientDB clientDB = new ClientDB();

		String strColorCode = FipaUtils.getParamValue(request, "hTxtFldProfileColor");
		String strDefltFlag = FipaUtils.getParamValue(request, "hTxtFldDefaultColorFlag");

		clientDB.updateuserProfile(userId, strColorCode, strDefltFlag);
	}

	public List getCPFProjectionList(DBInterface dao, String strFNAId) {
		ClientDB db = new ClientDB();
		return db.getCPFProjectionList(dao, strFNAId);
	}

	public List getSRSProjectionList(DBInterface dao, String strFNAId) {
		ClientDB db = new ClientDB();
		return db.getSRSProjectionList(dao, strFNAId);
	}
}
