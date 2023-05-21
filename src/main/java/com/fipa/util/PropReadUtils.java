package com.fipa.util;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;

import com.fipa.util.ApplicationContextUtils;
import com.fipa.util.PropContextUtils;
import com.fipa.util.FipaConstant;
import com.fipa.util.PropReadUtils;


public class PropReadUtils {


	final Logger logger = LoggerFactory.getLogger(PropReadUtils.class);
	
	public PropReadUtils() {
		// TODO Auto-generated constructor stub
	}

public List<String> getMaritalStatus(){
		
		ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
		PropContextUtils  propLoad = (PropContextUtils)appCtx.getBean(FipaConstant.FP_PROPCONTEXT_BEAN);
		
		List<String> lstMaritalSts = new ArrayList<String>();
		lstMaritalSts = propLoad.getPropertyAsList("maritalstatus");

		return lstMaritalSts;
		
	}

public Map<String,String> getGender(){
	
	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
	PropContextUtils  propLoad = (PropContextUtils)appCtx.getBean(FipaConstant.FP_PROPCONTEXT_BEAN);
	Map<String,String> lstGender = new HashMap<String,String>();
	
	lstGender = propLoad.getKeyValueAsList("gender");
	
	
	return lstGender;
}


public Map<String,String> getLiDisability(){
	
	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
	PropContextUtils  propLoad = (PropContextUtils)appCtx.getBean(FipaConstant.FP_PROPCONTEXT_BEAN);
	Map<String,String> lstcvrge = new HashMap<String,String>();
	
	lstcvrge = propLoad.getKeyValueAsList("lifeIns.typeOfDisability.list");
	
	
	return lstcvrge;
	 
}

public List<String> getNationality(){
	
	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
	PropContextUtils  propLoad = (PropContextUtils)appCtx.getBean(FipaConstant.FP_PROPCONTEXT_BEAN);	
	
	List<String> lstIdType = new ArrayList<String>();
	
	try{			
		lstIdType = propLoad.getPropertyAsList("nationality");
		
	}catch(Exception ex){
//		logger.error("Exception in " + PropReadUtils.class + " getIdTypes --> "+ex.getMessage());
	}
	
	return lstIdType;
	
}

public List<String> getEmploymentSts(){
		
		ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
		PropContextUtils  propLoad = (PropContextUtils)appCtx.getBean(FipaConstant.FP_PROPCONTEXT_BEAN);	
 
		List<String> lstEmpSts= new ArrayList<String>();
		
		try{			
			lstEmpSts = propLoad.getPropertyAsList("employmentstatus");
			
		}catch(Exception ex){
//			logger.error("Exception in " + PropReadUtils.class + " lstEmpSts --> "+ex.getMessage());
		}
		
		return lstEmpSts;
		
	}
public List<String> getEmployeCatg(){
	
	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
	PropContextUtils  propLoad = (PropContextUtils)appCtx.getBean(FipaConstant.FP_PROPCONTEXT_BEAN);	
 
	List<String> lstEmpCtg= new ArrayList<String>();
	
	try{			
		lstEmpCtg = propLoad.getPropertyAsList("employeecatg");
		
	}catch(Exception ex){
//		logger.error("Exception in " + PropReadUtils.class + " lstEmpSts --> "+ex.getMessage());
	}
	
	return lstEmpCtg;
	
}

public List<String> getTypeFinGoals(){
	
	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
	PropContextUtils  propLoad = (PropContextUtils)appCtx.getBean(FipaConstant.FP_PROPCONTEXT_BEAN);	
 
	List<String> lstfingls= new ArrayList<String>();
	
	try{			
		lstfingls = propLoad.getPropertyAsList("fna.financial.goals");
		
	}catch(Exception ex){
//		logger.error("Exception in " + PropReadUtils.class + " lstfingls --> "+ex.getMessage());
	}
	
	return lstfingls;
	
}
public List<String> getRelationREMOVE(){
	
	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
	PropContextUtils  propLoad = (PropContextUtils)appCtx.getBean(FipaConstant.FP_PROPCONTEXT_BEAN);	

	List<String> lstRelations= new ArrayList<String>();
	
	try{			
		lstRelations = propLoad.getPropertyAsList("relationship");
		
	}catch(Exception ex){
//		logger.error("Exception in " + PropReadUtils.class + " lstRelations --> "+ex.getMessage());
	}
	
	return lstRelations;
	
}
	
public List<String> getCountryREMOVE(){
	
	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
	PropContextUtils  propLoad = (PropContextUtils)appCtx.getBean(FipaConstant.FP_PROPCONTEXT_BEAN);	
	
	List<String> lstCountry = new ArrayList<String>();
	
	try{			
		lstCountry = propLoad.getPropertyAsList("fna.country.list");
		
	}catch(Exception ex){
//		logger.error("Exception in " + PropReadUtils.class + " getIdTypes --> "+ex.getMessage());
	}
	
	return lstCountry;
	
}
	
public List<String> getHospType(){
	
	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
	PropContextUtils  propLoad = (PropContextUtils)appCtx.getBean(FipaConstant.FP_PROPCONTEXT_BEAN);	

	List<String> lsthosptype= new ArrayList<String>();
	
	try{			
		lsthosptype = propLoad.getPropertyAsList("hosptype");
		
	}catch(Exception ex){
//		logger.error("Exception in " + PropReadUtils.class + " lsthosptype --> "+ex.getMessage());
	}
	
	return lsthosptype;
	
}

public List<String> getWards(){
	
	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
	PropContextUtils  propLoad = (PropContextUtils)appCtx.getBean(FipaConstant.FP_PROPCONTEXT_BEAN);	

	List<String> lstWards= new ArrayList<String>();
	
	try{			
		lstWards = propLoad.getPropertyAsList("wards");
		
	}catch(Exception ex){
//		logger.error("Exception in " + PropReadUtils.class + " lstWards --> "+ex.getMessage());
	}
	
	return lstWards;
	
}

 
public List<String> getBusinessList(){
	
	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
	PropContextUtils  propLoad = (PropContextUtils)appCtx.getBean(FipaConstant.FP_PROPCONTEXT_BEAN);	

	List<String> lstBusiness= new ArrayList<String>();
	
	try{			
		lstBusiness = propLoad.getPropertyAsList("fna.business.list");
		
	}catch(Exception ex){
		
//		logger.error("Exception in " + PropReadUtils.class + " lstBusiness --> "+ex.getMessage());
	}
	
	return lstBusiness;
	
}


public List<String> getProdTypePlan(){
	
	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
	PropContextUtils  propLoad = (PropContextUtils)appCtx.getBean(FipaConstant.FP_PROPCONTEXT_BEAN);	

	List<String> lstProdTypePlan= new ArrayList<String>();
	
	try{			
		lstProdTypePlan = propLoad.getPropertyAsList("fna.prodtype.plan");
		
	}catch(Exception ex){
//		logger.error("Exception in " + PropReadUtils.class + " lstProdTypePlan --> "+ex.getMessage());
	}
	
	return lstProdTypePlan;
	
}


public List<String> getProdTypeFund(){
	
	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
	PropContextUtils  propLoad = (PropContextUtils)appCtx.getBean(FipaConstant.FP_PROPCONTEXT_BEAN);	

	List<String> lstProdTypeFund= new ArrayList<String>();
	
	try{			
		lstProdTypeFund = propLoad.getPropertyAsList("fna.prodtype.fund");
		
	}catch(Exception ex){
//		logger.error("Exception in " + PropReadUtils.class + " lstProdTypeFund --> "+ex.getMessage());
	}
	
	return lstProdTypeFund;
	
}


public List<String> getPaymentMode(){
	
	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
	PropContextUtils  propLoad = (PropContextUtils)appCtx.getBean(FipaConstant.FP_PROPCONTEXT_BEAN);	

	List<String> lstPaymentMode= new ArrayList<String>();
	
	try{			
		lstPaymentMode = propLoad.getPropertyAsList("fna.paymentmode");
		
	}catch(Exception ex){
//		logger.error("Exception in " + PropReadUtils.class + " lstPaymentMode --> "+ex.getMessage());
	}
	
	return lstPaymentMode;
	
}



public List<String> getAccountType(){
	
	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
	PropContextUtils  propLoad = (PropContextUtils)appCtx.getBean(FipaConstant.FP_PROPCONTEXT_BEAN);	

	List<String> lstAccountType= new ArrayList<String>();
	
	try{			
		lstAccountType = propLoad.getPropertyAsList("fna.account.types");
		
	}catch(Exception ex){
//		logger.error("Exception in " + PropReadUtils.class + " lstAccountType --> "+ex.getMessage());
	}
	
	return lstAccountType;
	
}

public List<String> getSrsClass(){
	
	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
	PropContextUtils  propLoad = (PropContextUtils)appCtx.getBean(FipaConstant.FP_PROPCONTEXT_BEAN);	

	List<String> lstSrsClassifiaction= new ArrayList<String>();
	
	try{			
		lstSrsClassifiaction = propLoad.getPropertyAsList("fna.classification.types");
		
	}catch(Exception ex){
//		logger.error("Exception in " + PropReadUtils.class + " lstAccountType --> "+ex.getMessage());
	}
	
	return lstSrsClassifiaction;
	
}

public List<String> getSrsFreq(){
	
	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
	PropContextUtils  propLoad = (PropContextUtils)appCtx.getBean(FipaConstant.FP_PROPCONTEXT_BEAN);	

	List<String> lstSrsFrequency= new ArrayList<String>();
	
	try{			
		lstSrsFrequency = propLoad.getPropertyAsList("fna.frequency.types");
		
	}catch(Exception ex){
//		logger.error("Exception in " + PropReadUtils.class + " lstAccountType --> "+ex.getMessage());
	}
	
	return lstSrsFrequency;
	
}
public List<String> getOwnership(){
	
	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
	PropContextUtils  propLoad = (PropContextUtils)appCtx.getBean(FipaConstant.FP_PROPCONTEXT_BEAN);	

	List<String> lstOwnership= new ArrayList<String>();
	
	try{			
		lstOwnership = propLoad.getPropertyAsList("fna.ownership.types");
		
	}catch(Exception ex){
//		logger.error("Exception in " + PropReadUtils.class + " lstOwnership --> "+ex.getMessage());
	}
	
	return lstOwnership;
	
}


public Map<String,String> getFrequency(){
	
	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
	PropContextUtils  propLoad = (PropContextUtils)appCtx.getBean(FipaConstant.FP_PROPCONTEXT_BEAN);
	Map<String,String> lstFrequency = new HashMap<String,String>();
	
	lstFrequency = propLoad.getKeyValueAsList("fna.frequency");
	
	
	return lstFrequency;
}

//public List<String> getFrequency(){
//	
//	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
//	PropContextUtils  propLoad = (PropContextUtils)appCtx.getBean(FipaConstant.FP_PROPCONTEXT_BEAN);	
//
//	List<String> lstFrequency= new ArrayList<String>();
//	
//	try{			
//		lstFrequency = propLoad.getPropertyAsList("fna.frequency");
//		
//	}catch(Exception ex){
//		logger.error("Exception in " + PropReadUtils.class + " lstFrequency --> "+ex.getMessage());
//	}
//	
//	return lstFrequency;
//	
//}


public List<String> getObjective(){
	
	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
	PropContextUtils  propLoad = (PropContextUtils)appCtx.getBean(FipaConstant.FP_PROPCONTEXT_BEAN);	

	List<String> lstObjective= new ArrayList<String>();
	
	try{			
		lstObjective = propLoad.getPropertyAsList("fna.objective");
		
	}catch(Exception ex){
//		logger.error("Exception in " + PropReadUtils.class + " lstObjective --> "+ex.getMessage());
	}
	
	return lstObjective;
	
}
 
public List<String> getDescTrans(){
	
	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
	PropContextUtils  propLoad = (PropContextUtils)appCtx.getBean(FipaConstant.FP_PROPCONTEXT_BEAN);	

	List<String> lstDescOfTrans= new ArrayList<String>();
	
	try{			
		lstDescOfTrans = propLoad.getPropertyAsList("fna.desc.of.trans");
		
	}catch(Exception ex){
//		logger.error("Exception in " + PropReadUtils.class + " lstDescOfTrans --> "+ex.getMessage());
	}
	
	return lstDescOfTrans;
	
}
public List<String> getTypesOfTrans(){
	
	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
	PropContextUtils  propLoad = (PropContextUtils)appCtx.getBean(FipaConstant.FP_PROPCONTEXT_BEAN);	

	List<String> lstTypesOfTrans= new ArrayList<String>();
	
	try{			
		lstTypesOfTrans = propLoad.getPropertyAsList("fna.types.of.trans");
		
	}catch(Exception ex){
//		logger.error("Exception in " + PropReadUtils.class + " lstTypesOfTrans --> "+ex.getMessage());
	}
	
	return lstTypesOfTrans;
	
}
public List<String> getRetAccAge(){
	
	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
	PropContextUtils  propLoad = (PropContextUtils)appCtx.getBean(FipaConstant.FP_PROPCONTEXT_BEAN);	

	List<String> lstRetAccAge= new ArrayList<String>();
	
	try{			
		lstRetAccAge = propLoad.getPropertyAsList("fna.ret.acc.age");
		
	}catch(Exception ex){
//		logger.error("Exception in " + PropReadUtils.class + " lstRetAccAge --> "+ex.getMessage());
	}
	
	return lstRetAccAge;
	
}

public List<String> getCpfAccList(){
	
	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
	PropContextUtils  propLoad = (PropContextUtils)appCtx.getBean(FipaConstant.FP_PROPCONTEXT_BEAN);	

	List<String> cpfAcclst= new ArrayList<String>();
	
	try{			
		cpfAcclst = propLoad.getPropertyAsList("fna.cpf.account.list");
		
	}catch(Exception ex){
//		logger.error("Exception in " + PropReadUtils.class + " cpfAcclst --> "+ex.getMessage());
	}
	
	return cpfAcclst;
	
}

public List<String>  getCpfAgeGrpList(){
	
	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
	PropContextUtils  propLoad = (PropContextUtils)appCtx.getBean(FipaConstant.FP_PROPCONTEXT_BEAN);	

	List<String> cpfAgeGrplst= new ArrayList<String>();
	
	try{			
		cpfAgeGrplst = propLoad.getPropertyAsList("fna.cpf.age.grp.list");
		
	}catch(Exception ex){
//		logger.error("Exception in " + PropReadUtils.class + " cpfContrbPartylst --> "+ex.getMessage());
	}
	
	return cpfAgeGrplst;
	
}


public List<String>  getCpfEmpAgeGrpList(){
	
	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
	PropContextUtils  propLoad = (PropContextUtils)appCtx.getBean(FipaConstant.FP_PROPCONTEXT_BEAN);	

	List<String> cpfEmpAgeGrpList= new ArrayList<String>();
	
	try{			
		cpfEmpAgeGrpList = propLoad.getPropertyAsList("fna.mastcpfcon.agegrp.list");
		
	}catch(Exception ex){
//		logger.error("Exception in " + PropReadUtils.class + " cpfContrbPartylst --> "+ex.getMessage());
	}
	
	return cpfEmpAgeGrpList;
	
}



public List<String>  getCpfEmpWageGrpList(){
	
	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
	PropContextUtils  propLoad = (PropContextUtils)appCtx.getBean(FipaConstant.FP_PROPCONTEXT_BEAN);	

	List<String> cpfEmpWageGrpList= new ArrayList<String>();
	
	try{			
		cpfEmpWageGrpList = propLoad.getPropertyAsList("fna.mastcpfcon.wagegrp.list");
		
	}catch(Exception ex){
//		logger.error("Exception in " + PropReadUtils.class + " cpfContrbPartylst --> "+ex.getMessage());
	}
	
	return cpfEmpWageGrpList;
	
}

public Map<String,String> getCpfContrbAgeGrpList(){
	
	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
	PropContextUtils  propLoad = (PropContextUtils)appCtx.getBean(FipaConstant.FP_PROPCONTEXT_BEAN);
	Map<String,String> cpfCrtbAgeGrplst = new HashMap<String,String>(); 
	cpfCrtbAgeGrplst = propLoad.getKeyValueAsList("fna.cpf.contribution.age.grp.list");
	 
	return cpfCrtbAgeGrplst;
}
 

public Map<String,String> getLiDDCoverage(){
	
	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
	PropContextUtils  propLoad = (PropContextUtils)appCtx.getBean(FipaConstant.FP_PROPCONTEXT_BEAN);
	Map<String,String> liddcovergelst = new HashMap<String,String>(); 
	liddcovergelst = propLoad.getKeyValueAsList("lifeIns.ddCoverages.list");
	 
	return liddcovergelst;
}


public Map<String,String> getLiTypeOfCoverage(){
	
	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
	PropContextUtils  propLoad = (PropContextUtils)appCtx.getBean(FipaConstant.FP_PROPCONTEXT_BEAN);
	Map<String,String> litypeofcovlst = new HashMap<String,String>(); 
	litypeofcovlst = propLoad.getKeyValueAsList("lifeIns.typeOfCoverage.list");
	 
	return litypeofcovlst;
}

public Map<String,String> getLiTypeOfCoveragePro(){
	
	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
	PropContextUtils  propLoad = (PropContextUtils)appCtx.getBean(FipaConstant.FP_PROPCONTEXT_BEAN);
	Map<String,String> litypeofcovlst = new HashMap<String,String>(); 
	litypeofcovlst = propLoad.getKeyValueAsList("lifeIns.typeOfCoveragePro.list");
	 
	return litypeofcovlst;
}


public Map<String,String> getLiObjOfIns(){
	
	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
	PropContextUtils  propLoad = (PropContextUtils)appCtx.getBean(FipaConstant.FP_PROPCONTEXT_BEAN);
	Map<String,String> liobjofinslst = new HashMap<String,String>(); 
	liobjofinslst = propLoad.getKeyValueAsList("lifeIns.objofIns.list");
	 
	return liobjofinslst;
}

public Map<String,String> getThirdPartyName(){
	
	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
	PropContextUtils  propLoad = (PropContextUtils)appCtx.getBean(FipaConstant.FP_PROPCONTEXT_BEAN);
	Map<String,String> lithirdpartlst = new HashMap<String,String>(); 
	lithirdpartlst = propLoad.getKeyValueAsList("lifeIns.thirdpartyName");
	
	return lithirdpartlst;
}

public Map<String,String> getmastCpfConWagesList(){
	
	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
	PropContextUtils  propLoad = (PropContextUtils)appCtx.getBean(FipaConstant.FP_PROPCONTEXT_BEAN);
	Map<String,String> mastCpfConWagesList = new HashMap<String,String>(); 
	mastCpfConWagesList = propLoad.getKeyValueAsList("fna.mastcpfcon.wageslist");
	 
	return mastCpfConWagesList;
}
 

public List<String>  getCpfContrbPartyList(){
	
	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
	PropContextUtils  propLoad = (PropContextUtils)appCtx.getBean(FipaConstant.FP_PROPCONTEXT_BEAN);	

	List<String> cpfContrbPartylst= new ArrayList<String>();
	
	try{			
		cpfContrbPartylst = propLoad.getPropertyAsList("fna.cpf.contrb.party.list");
		
	}catch(Exception ex){
//		logger.error("Exception in " + PropReadUtils.class + " cpfContrbPartylst --> "+ex.getMessage());
	}
	
	return cpfContrbPartylst;
	
}



public  String  getfilepath() {
	
	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
	PropContextUtils  propLoad = (PropContextUtils)appCtx.getBean(FipaConstant.FP_PROPCONTEXT_BEAN);	

	String strFilePath="";
	
	try{			
		strFilePath = propLoad.getPropertyAsString("reports.download.loc.info");
		
	}catch(Exception ex){
//		logger.error("Exception in " + PropReadUtils.class + " strFilePath --> "+ex.getMessage());
	}
	
	return strFilePath;
}




public List<String>  getLiTypesOfPlan(){
	
	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
	PropContextUtils  propLoad = (PropContextUtils)appCtx.getBean(FipaConstant.FP_PROPCONTEXT_BEAN);	

	List<String> litypesofplanlst= new ArrayList<String>();
	
	try{			
		litypesofplanlst = propLoad.getPropertyAsList("lifeIns.typeOfPlan.list");
		
	}catch(Exception ex){
//		logger.error("Exception in " + PropReadUtils.class + " litypesofplanlst --> "+ex.getMessage());
	}
	
	return litypesofplanlst;
	
}



public List<String>  getLiPayments(){
	
	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
	PropContextUtils  propLoad = (PropContextUtils)appCtx.getBean(FipaConstant.FP_PROPCONTEXT_BEAN);	

	List<String> liPaymentslst= new ArrayList<String>();
	
	try{			
		liPaymentslst = propLoad.getPropertyAsList("lifeIns.freqOfPayments.list");
		
	}catch(Exception ex){
//		logger.error("Exception in " + PropReadUtils.class + " liPaymentslst --> "+ex.getMessage());
	}
	
	return liPaymentslst;
	
}


public List<String>  getLiPayMethods(){
	
	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
	PropContextUtils  propLoad = (PropContextUtils)appCtx.getBean(FipaConstant.FP_PROPCONTEXT_BEAN);	

	List<String> liPayMthslst= new ArrayList<String>();
	
	try{			
		liPayMthslst = propLoad.getPropertyAsList("lifeIns.paymentMethods.list");
		
	}catch(Exception ex){
//		logger.error("Exception in " + PropReadUtils.class + " liPayMthslst --> "+ex.getMessage());
	}
	
	return liPayMthslst;
	
}

public List<String>  getLiSrcOfPrem(){
	
	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
	PropContextUtils  propLoad = (PropContextUtils)appCtx.getBean(FipaConstant.FP_PROPCONTEXT_BEAN);	

	List<String> lisrcofincomelst= new ArrayList<String>();
	
	try{			
		lisrcofincomelst = propLoad.getPropertyAsList("lifeIns.sourceOfPrem.list");
		
	}catch(Exception ex){
//		logger.error("Exception in " + PropReadUtils.class + " lisrcofincomelst --> "+ex.getMessage());
	}
	
	return lisrcofincomelst;
	
}



public List<String>  getLiTypeOfPolicy(){
	
	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
	PropContextUtils  propLoad = (PropContextUtils)appCtx.getBean(FipaConstant.FP_PROPCONTEXT_BEAN);	

	List<String> litypeofpolicylst= new ArrayList<String>();
	
	try{			
		litypeofpolicylst = propLoad.getPropertyAsList("lifeIns.typeOfPolicy.list");
		
	}catch(Exception ex){
//		logger.error("Exception in " + PropReadUtils.class + " litypeofpolicylst --> "+ex.getMessage());
	}
	
	return litypeofpolicylst;
	
}

  


 




public List<String>  getTypesOfNom(){
	
	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
	PropContextUtils  propLoad = (PropContextUtils)appCtx.getBean(FipaConstant.FP_PROPCONTEXT_BEAN);	

	List<String> litypeofnomlst= new ArrayList<String>();
	
	try{			
		litypeofnomlst = propLoad.getPropertyAsList("lifeIns.typeOfNomination.list");
		
	}catch(Exception ex){
//		logger.error("Exception in " + PropReadUtils.class + " litypeofnomlst --> "+ex.getMessage());
	}
	
	return litypeofnomlst;
	
}



//Input Investment details

public List<String>  getInvTypeOfInvst(){
	
	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
	PropContextUtils  propLoad = (PropContextUtils)appCtx.getBean(FipaConstant.FP_PROPCONTEXT_BEAN);	

	List<String> invtypesofinvst= new ArrayList<String>();
	
	try{			
		invtypesofinvst = propLoad.getPropertyAsList("invt.typeofinvst.list");
		
	}catch(Exception ex){
//		logger.error("Exception in " + PropReadUtils.class + " invtypesofinvst --> "+ex.getMessage());
	}
	
	return invtypesofinvst;
	
}




public List<String>  getInvObjOfIns(){
	
	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
	PropContextUtils  propLoad = (PropContextUtils)appCtx.getBean(FipaConstant.FP_PROPCONTEXT_BEAN);	

	List<String> invobjofins= new ArrayList<String>();
	
	try{			
		invobjofins = propLoad.getPropertyAsList("invt.objofIns.list");
		
	}catch(Exception ex){
//		logger.error("Exception in " + PropReadUtils.class + " invobjofins --> "+ex.getMessage());
	}
	
	return invobjofins;
	
}

 
public List<String>  getRDCtCash(){
	
	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
	PropContextUtils  propLoad = (PropContextUtils)appCtx.getBean(FipaConstant.FP_PROPCONTEXT_BEAN);	

	List<String> RDCtCash= new ArrayList<String>();
	
	try{			
		RDCtCash = propLoad.getPropertyAsList("rd.ctcash.list");
		
	}catch(Exception ex){
//		logger.error("Exception in " + PropReadUtils.class + " invobjofins --> "+ex.getMessage());
	}
	
	return RDCtCash;
	
}
public List<String>  getRDInpIncome(){
	
	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
	PropContextUtils  propLoad = (PropContextUtils)appCtx.getBean(FipaConstant.FP_PROPCONTEXT_BEAN);	

	List<String> RDInpIncome= new ArrayList<String>();
	
	try{			
		RDInpIncome = propLoad.getPropertyAsList("rd.inpincome.cls.list");
		
	}catch(Exception ex){
//		logger.error("Exception in " + PropReadUtils.class + " invobjofins --> "+ex.getMessage());
	}
	
	return RDInpIncome;
	
}

public List<String>  getRDInvProj(){
	
	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
	PropContextUtils  propLoad = (PropContextUtils)appCtx.getBean(FipaConstant.FP_PROPCONTEXT_BEAN);	

	List<String> RDInvProj= new ArrayList<String>();
	
	try{			
		RDInvProj = propLoad.getPropertyAsList("rd.invproj.list");
		
	}catch(Exception ex){
//		logger.error("Exception in " + PropReadUtils.class + " invobjofins --> "+ex.getMessage());
	}
	
	return RDInvProj;
	
}


public List<String>  getRDSouceOfFund(){
	
	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
	PropContextUtils  propLoad = (PropContextUtils)appCtx.getBean(FipaConstant.FP_PROPCONTEXT_BEAN);	

	List<String> RDSourceFd= new ArrayList<String>();
 	
	try{			
		RDSourceFd = propLoad.getPropertyAsList("rd.sourcefunds.list");
		
	}catch(Exception ex){
//		logger.error("Exception in " + PropReadUtils.class + " invobjofins --> "+ex.getMessage());
	}
	
	return RDSourceFd;
	
}




public List<String>  getRDProInvClsfy(){
	
	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
	PropContextUtils  propLoad = (PropContextUtils)appCtx.getBean(FipaConstant.FP_PROPCONTEXT_BEAN);	

	List<String> RDProInvCls= new ArrayList<String>();
 	
	try{			
		RDProInvCls = propLoad.getPropertyAsList("rd.projInv.cls.list");
		
	}catch(Exception ex){
//		logger.error("Exception in " + PropReadUtils.class + " invobjofins --> "+ex.getMessage());
	}
	
	return RDProInvCls;
	
}

}
