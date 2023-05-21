/**
 * FIPA Constant
 */

var BASE_URL;

var SCREEN_ASSET = "SCREEN_ASSET";

var SCREEN_ATTACH  = "SCREEN_ATTACH";
var SCREEN_CPFADDDED="SCREEN_CPFADDDED";
var SCREEN_PROP  = "SCREEN_PROP";
var SCREEN_RETIREMENT  = "SCREEN_RETIREMENT";
var SCREEN_FINGOAL="SCREEN_FINGOAL";
var SCREEN_CHILD="SCREEN_CHILD";
var SCREEN_VEHICLE="SCREEN_VEHICLE";
var SCREEN_OTHAREA="SCREEN_OTHAREA";
var SCREEN_DEPNT="SCREEN_DEPNT";
var SCREEN_INVESTMENT="SCREEN_INVESTMENT";
var SCREEN_SRS="SCREEN_SRS"
var SCREEN_LIFEPLAN="SCREEN_LIFEPLAN";
var LOGOUT_HELP="FIPA copyright and version";

var CLIENTFLG = "CLIENTFLG";
var SPOUSEFLG = "SPOUSEFLG";
var CHILDFLG = "CHILDFLG";

var CURNTASSUMFLG = "CURNTASSUMFLG";
var EMPDETSFLG = "EMPDETSFLG";
var ANNLEXPFLG = "ANNLEXPFLG";
var CONTPLANFLG = "CONTPLANFLG";
var RETPLANFLG = "RETPLANFLG";
var CASTASSTFLG = "CASTASSTFLG";
var OTHASSTFLG = "OTHASSTFLG";
var LIABLTYFLG = "LIABLTYFLG";
var ESTPLANFLG = "ESTPLANFLG";
var EMPCONTRBFLG = "EMPCONTRBFLG";
var DECLARFLG = "DECLARFLG";
var TYPEOFAPPFLG = "TYPEOFAPPFLG"; 
var SUMMARYFLG = "SUMMARYFLG";
var LIFEDETSFLG = "LIFEDETSFLG";
var HEALTHFLG = "HEALTHFLG";


var servletName 		= "FipaServlet";
var InstantProServlet 	= "InstantProServlet";

var mastServletName 	= "MasterDataServlet";

var SESSION_EXP_JSP 	= "/sessionExpired.do";
var SESSION_EXP_TAB 	= "SESSION_EXPIRY";

var DB_EXP_JSP 			= "/dbError.do";
var DB_ERROR_TAB 		= "DB_ERROR";

var ERROR_TAB 			= "ERROR";
var ERRO_JSP 			= "/generalError.do";

var QRY_MODE = 'Q';
var INS_MODE = 'I';
var UPD_MODE = 'U';
var DEL_MODE = 'D';

var STAFFTYPE_ADVISER 	= "ADVISER";
var STAFFTYPE_STAFF 	= "STAFF";


var getBrowserApp = navigator.appName;


var cpf_monthly={
		
		Cpf_MthSelf:['ccEmpleContrbSelf','ccEmplrContrbSelf'],
		Cpf_MthSpouse:['ccEmpleContrbSps','ccEmplrContrbSps'],
		SUMOF_CPFMTHLY_SLF:'SUMOF_CPFMTHLY_SLF',
		SUMOF_CPFMTHLY_SPS:'SUMOF_CPFMTHLY_SPS'
}


var Ann_Exp = {
		Ann_Exp_Self:['expdSelfRent', 'expdSelfUtil', 'expdSelfGrocery', 'expdSelfEatingout', 
		              'expdSelfClothing', 'expdSelfTransport', 'expdSelfMedical', 'expdSelfPersonal',
		              'expdSelfDepntcontr', 'expdSelfTaxes', 'expdSelfEntertain', 'expdSelfFestiv',
		              'expdSelfVacations', 'expdSelfCharity', 'expdSelfProploan', 'expdSelfVehiloan',
		              'expdSelfLoanrepay','expdSelfGi','expdSelfInsurance', 'expdSelfOthers' ],
		              
	    Ann_Exp_Sps:['expdSpsRent', 'expdSpsUtil', 'expdSpsGrocery', 'expdSpsEatingout',
	                'expdSpsClothing', 'expdSpsTransport', 'expdSpsMedical', 'expdSpsPersonal',
	                 'expdSpsDepntcontr', 'expdSpsTaxes', 'expdSpsEntertain', 'expdSpsFestiv',
	                 'expdSpsVacations', 'expdSpsCharity', 'expdSpsProploan', 'expdSpsVehiloan',
	                 'expdSpsLoanrepay','expdSpsGi','expdSpsInsurance', 'expdSpsOthers'],
		
	    Ann_Exp_Fam:['expdFamilyRent', 'expdFamilyUtil', 'expdFamilyGrocery',  'expdFamilyEatingout',
	                 'expdFamilyClothing',  'expdFamilyTransport',   'expdFamilyMedical', 'expdFamilyPersonal',
	                 'expdFamilyHousehold', 'expdFamilyDomestic',  'expdFamilyEnhance', 'expdFamilyTaxes',
	                 'expdFamilyEntertain', 'expdFamilyFestiv',  'expdFamilyVacations',  'expdFamilyCharity',
	                 'expdFamilyLoanrepay','expdFamilyGi','expdFamilyProploan',  'expdFamilyInsurance',  'expdFamilyOthers'],
		    		 
	   SUMOF_ANNEXP_SELF:'SUMOF_ANNEXP_SELF',
	   SUMOF_ANNEXP_SPS :'SUMOF_ANNEXP_SPS',
	   SUMOF_ANNEXP_FAM :'SUMOF_ANNEXP_FAM',
	  
};


var Ctg_Pln = {
		Contg_Self:['txtFldContSlfLvngNeed', 'txtFldContSpsLvngNeed', 'txtFldContFmlyLvngNeed'],
	SUMOF_CONTGPLN_SELF:'SUMOF_CONTGPLN_SELF',
}


var SrcOF_Inc={  
		
		SrcOfInc_Slf:['incsrcSelfEmpMonthly','incsrcSelfEmpAddlwage', 'incsrcSelfNempMonthly',
		              'incsrcSelfNempRentamt','incsrcSelfNempDivdamt',  'incsrcSelfNempOthamt',
		            ],
		             
	    SrcOfInc_Sps:['incsrcSpsEmpMonthly', 'incsrcSpsEmpAddlwage', 'incsrcSpsNempMonthly',
		              'incsrcSpsNempRentamt','incsrcSpsNempDivdamt', 'incsrcSpsNempOthamt'],
		              
		SrcOfInc_Joint:['incsrcJointEmpMonthly','incsrcJointNempMonthly','incsrcJointNempRentamt',
		                'incsrcJointNempDivdamt','incsrcJointNempOthamt'],          
		            
		                

        SrcOfIncIncrmt_Slf:['incsrcSelfEmpIncr','incsrcSelfNempIncr'
                            ,'incsrcSelfNempRentincr','incsrcSelfNempDivdincr',
                            'incsrcSelfNempOthincr'],
        SrcOfIncIncrmt_Sps:['incsrcSpsEmpIncr','incsrcSpsNempIncr',
			                'incsrcSpsNempRentincr','incsrcSpsNempDivdincr',
			                'incsrcSpsNempOthincr'],
        SrcOfIncIncrmt_Joint:['incsrcJointEmpIncr','incsrcJointNempIncr'
					        ,'incsrcJointNempRentincr','incsrcJointNempDivdincr'
					        ,'incsrcJointNempOthincr'],
		        		        				
							
        SrcOfIncPriod_Slf:['incsrcSelfEmpPeriod','incsrcSelfNempPeriod'
					        ,'incsrcSelfNempRentperd','incsrcSelfNempDivdperd',
					        'incsrcSelfNempOthperd'], 
        SrcOfIncPriod_Sps:['incsrcSpsEmpPeriod','incsrcSpsNempPeriod',
					        'incsrcSpsNempRentperd','incsrcSpsNempDivdperd',
					        'incsrcSpsNempOthperd'], 
        SrcOfIncPriod_Joint:['incsrcJointEmpPeriod','incsrcJointNempPeriod',
					        'incsrcJointNempRentperd','incsrcJointNempDivdperd',
					        'incsrcSpsNempOthperd'],
					        		
					         
		               
	    SRCOFINCM_SLF:'SUMOF_SRCOFINC', 
		SRCOFINCM_SPS:'SRCOFINCM_SPS', 
		SRCOFINCM_JOINT:'SRCOFINCM_JOINT',
		
		SRCOFINCRMNT_SLF:'SRCOFINCRMNT_SLF', 
		SRCOFINCRMNT_SPS:'SRCOFINCRMNT_SPS', 
		SRCOFINCRMNT_JOINT:'SRCOFINCRMNT_JOINT',
		
		SRCOFPER_SLF:'SRCOFPER_SLF', 
		SRCOFPER_SPS:'SRCOFPER_SPS', 
		SRCOFPER_JOINT:'SRCOFPER_JOINT',
		
		
}


var CPF={
		CPF_SLF_AC:['txtFldCpfSlfOrdAcCurr','txtFldCpfSlfSplAcCurr',
		           'txtFldCpfSlfMedSveCurr'  ],
		CPF_SLF_AA:['txtFldCpfSlfOrdAcAnnl','txtFldCpfSlfSplAcAnnl',
		            'txtFldCpfSlfMedSveAnnl'],
		 CPF_SPS_AC:['txtFldCpfSpsOrdAcCurr','txtFldCpfSpsSplAcCurr',
		             'txtFldCpfSpsMedSveCurr'],      
		 CPF_SPS_AA:['txtFldCpfSpsOrdAcAnnl','txtFldCpfSpsSplAcAnnl',
		    		 'txtFldCpfSpsMedSveAnnl'],
		    		 
		SUMOF_CPF_SELFCR:'SUMOF_CPF_SELFCR',
		SUMOF_CPF_SELFAC:'SUMOF_CPF_SELFAC',
		SUMOF_CPF_SPSCR:'SUMOF_CPF_SPSCR',
		SUMOF_CPF_SPSAC:'SUMOF_CPF_SPSAC',
}




var Cpf_Bal={
		
	Cpf_BalSelf:['txtFldCpfSlfOrdAcCurr', 'txtFldCpfSlfSplAcCurr', 'txtFldCpfSlfMedSveCurr'],
		              
	Cpf_BalSps:['txtFldCpfSpsOrdAcCurr', 'txtFldCpfSpsSplAcAnnl', 'txtFldCpfSpsMedSveCurr'],
		       	                 
	 SUMOF_CPFBAL_SLF:'SUMOF_CPFBAL_SLF',
	 SUMOF_CPFBAL_SPS:'SUMOF_CPFBAL_SPS'
}

 

var FNA_LIA={
		FNA_LIA_SLF:['liabSelfOverdraft','liabSelfShortmort','liabSelfTaxes',
		           'liabSelfOthers','liabSelfShortloan','liabSelfCcLoan','liabSelfContigent' ],
		FNA_LIA_SPS:['liabSpsOverdraft','liabSpsShortmort','liabSpsTaxes',
		            'liabSpsOthers','liabSpsCcLoan','liabSpsShortloan','liabSpsContigent'],
		FNA_LIA_FAM:['liabFamOverdraft','liabFamShortmort','liabFamTaxes',
		     		 'liabFamOthers','liabFamCCLoan','liabFamShortloan','liabFamContigent'],
		    		 
		            SUMOF_FINLIAB_SELF:'SUMOF_FINLIAB_SELF',
		            SUMOF_FINLIAB_SPS:'SUMOF_FINLIAB_SPS',
		            SUMOF_FINLIAB_FAM:'SUMOF_FINLIAB_FAM',
}


var CASH_ASS={
		CAST_ASS_SELF:['casstSelfSavingfd','casstSelfCashequ','casstSelfSrs' ],
		CAST_ASS_SPS:['casstSpsSavingfd','casstSpsCashequ','casstSpsSrs'],
		CAST_ASS_JOIN:['casstFamSavingfd','casstFamCashequ','casstFamSrs'],
		  		 
		    		 
		SUMOF_CASHASST_SELF:'SUMOF_CASHASST_SELF',
		SUMOF_CASHASST_SPS:'SUMOF_CASHASST_SPS',
		SUMOF_CASHASST_JOIN:'SUMOF_CASHASST_JOIN',
}



var OTH_ASS={
		OTH_ASS_SELF:['othasstSelfPers','othasstSelfClub','othasstSelfBusi','othasstSelfOth'],
		OTH_ASS_SPS:['othasstSpousePers','othasstSpouseClub','othasstSpouseBusi','othasstSpouseOth'],
		OTH_ASS_JOIN:['othasstJointPers','othasstJointClub','othasstJointBusi','othasstJointOth'],
		OTH_ASS_LOAN:['othasstLoansPers','othasstLoansClub','othasstLoansBusi','othasstLoansOth'],	 
		    		 
		SUMOF_OTHASST_SELF:'SUMOF_OTHASST_SELF',
		SUMOF_OTHASST_SPS:'SUMOF_OTHASST_SPS',
		SUMOF_OTHASST_JOIN:'SUMOF_OTHASST_JOIN',
		SUMOF_OTHASST_LOAN:'SUMOF_OTHASST_LOAN',
}


 



var dobOptions = {
		 
	 	endDate: new Date(), 
format : 'dd/mm/yyyy',
autoclose : true, 
clearBtn : true,
todayBtn: true,
todayHighlight : true,
showClear : true,
showClose : true,
minView : 'month' , 
forceParse:false,
pickTime : false,
ignoreReadonly: true
}; 

var dateOptions = {
	 
	 	startDate: '1901-01-01', // "today" / "2016-12-20" / 1477673788975
		endDate: "",
format : 'dd/mm/yyyy',
autoclose : true, 
clearBtn : true,
todayBtn: true,
todayHighlight : true,
showClear : true,
showClose : true,
minView : 'month' , 
forceParse : false,
ignoreReadonly: true

};


var yearOptions = {
		format: "yyyy",
	startView: 'decade',
	minView: 'decade',
	viewSelect: 'decade',
	autoclose: true,
	ignoreReadonly: true
};


var toastrOpts = {
		 "closeButton": true,
		"debug": false,
		"newestOnTop": true,
		"progressBar": true,
		"positionClass": "toast-top-right",
		"preventDuplicates": true,
		"preventOpenDuplicates": true,
		"onclick": null,
		"showDuration": "500",
		"hideDuration": "3000",
		"timeOut": "3000",
		"extendedTimeOut": "3000",
		"showEasing": "swing",
		"hideEasing": "linear",
		"showMethod": "fadeIn",
		"hideMethod": "fadeOut"
}

var sucToastrOpts={
		 "closeButton": false,
		"debug": false,
		"newestOnTop": true,
		"progressBar": false,
		"positionClass": "toast-top-right",
		"preventDuplicates": true,
		"onclick": null,
		"showDuration": "500",
		"hideDuration": "3000",
		"timeOut": "3000",
		"extendedTimeOut": "3000",
		"showEasing": "swing",
		"hideEasing": "linear",
		"showMethod": "fadeIn",
		"hideMethod": "fadeOut"
}

 
var CLIENT_REQ				='Client details are required'; 
//SELF Constants 

var SELF_NAME		= 'Key in the Name in Client\'s Particulars section';
var SELF_NRIC		= 'key in the NRIC/FIN No./ Passport No. in Client\'s Particulars section';
var SELF_ADVSTF	= 'key in the Servicing Adviser Name in Client\'s Particulars section ';
var SELF_DOB 		= 'Key in the Date of Birth in Client\' Particulars section '; 
var SELF_NATION 	= 'Key in the Nationalityin Client\'s Particulars section ';
var SELF_HMEADDR 	= 'Key in the Registered Residential Address1 in Client\'s Particulars section ';
var SELF_HMEADDR2 = 'Key in the Registered Residential Address2 in Client\'s Particulars section ';
var SELF_RPOSTAL	= 'Key in the Registered Residential Postal in Client\'s Particulars section ';
var SELF_RCNTRY 	= 'Key in the Registered Residential Country in Client\'s Particulars section ';
var SELF_MAILADDR = 'Key in the Mailing Address1 in Client\'s Particulars section ';
var SELF_MAILADDR2= 'Key in the Mailing Address2 in Client\'s Particulars section ';
var SELF_MPOSTAL 	= 'Key in the Mailing Postal in Client\'s Particulars section ';
var SELF_MCNTRY		= 'Key in the Mailing Country in Client\'s Particulars section ';
 
//Spouse

var SPOUSE_NAME	= 'Key in the Name in Spouse\'s Particulars section';
var SPOUSE_NRIC	= 'Key in the NRIC in Spouse\'s Particulars section';
var SPOUSE_DOB	= 'Key in the Date of Birth in Spouse\'s Particulars section';
var SPOUSE_NATION = 'Key in the Nationality in Spouse\'s Particulars section';
var SPOUSE_HMEADDR= 'Key in the Registered Residential Address1 in Spouse\'s Particulars section';
var SPOUSE_HMEADDR2 = 'Key in the Registered Residential Address2 in Spouse\'s Particulars section';
var SPOUSE_RPOSTAL= 'Key in the Registered Residential Postal in Spouse\'s Particulars section';
var SPOUSE_RCNTRY = 'Key in the Registered Residential Country in Spouse\'s Particulars section';
var SPOUSE_MAILADDR = 'Key in the Mail Address1 in Spouse\'s Particulars section';
var SPOUSE_MAILADDR2= 'Key in the Mail Address2 in Spouse\'s Particulars section';
var SPOUSE_MPOSTAL= 'Key in the Mail Postal in Spouse\'s Particulars section';
var SPOUSE_MCNTRY	= 'Key in the Mail Country in Spouse\'s Particulars section';


//CD AND AHDOC 
//var SLF_MAILING_ADDR		= 'Key in the Mailing Address(Self)';
//var SPS_MAILING_ADDR		= 'Key in the Mailing Address(Spouse)';

//Address
//var ADDRESS_TYPE			='Please Key in Address Type ';
//var ADDRESS					='Please Key in Address ';

//Depandant Details
var DEPN_NAME ="Key in Dependant Name";
var DEPN_RELATION	 		="select the Relationship";
var DEPN_DOB="Key in Date of Birth"; 
var DEPN_AGE="Key in Age"; 


//Child Particulars
var CHILD_NAME ="Key in Child Name";
var CHILD_RELATION ="Select the Relationship";
var CHILD_DOB	 ="Key in Date of Birth";
var CHILD_AGE="Key in Age";

//Savings / Investment Goals
var SAVEINV_PUR ="Key in Purpose";
var SAVEINV_AMT		="Key in Amount";
var SAVEINV_WHEN="Key in When(No. of Years)";

//CASH - SRS Details
var SRS_CLASSFY 	="Key in Classification";
var SRS_DESC		="Key in Description";
var SRS_FREQ		="Key in Frequency";
var SRS_PERFROM		="Key in Period From";
var SRS_PERTO		="Key in Period To";


//Financial Goals and Concerns
var FINTYPE_GOALS		 ="Key in Type of Financial Goals ";
var FIN_GOALS="Key in Financial Goals/Concerns "; 


//Retirement Planning - Other Retirement
var OR_TYPE="Key in Type of Payment";
var OR_FREQ="Key in Frequency";
var OR_ANLEXP="Key in Annual Expenditure";
var OR_ESC	 ="Key in Escalation Rate";
var OR_AGEBSE="Key in Age Based On";
var OR_AGESTS="Key in Age payment starts";
var OR_AGEENDS ="Key in Age payment ends";

//Retirement Planning - Income Retirement
var IR_CLSFY	="Key in Classification";
var IR_DESC ="Key in Descriptions";
var IR_FRQ="Key in Frequency";
var IR_AMT="Key in Amount of Income";
var IR_ESC="Key in Escalation Rate ";
var IR_ROI="Key in ROI";
var IR_AGEBASED ="Key in Age Based on";
var IR_AGESTS ="Key in Age payment starts";
var IR_AGEENDS="Key in Age payment ends";

//Retirement Planning - Income Asset Retirement
var INCASS_CLSFY	 ="Key in Classification";
var INCASS_DESC="Key in Descriptions";
var INCASS_FREQ="Key in Frequency";
var INCASS_AMT	 ="Key in Amount of Income";
var INCASS_ESC ="Key in Escalation Rate"; 
var INCASS_ROI	 ="Key in ROI";
var INCASS_AGEBSD="Key in Age Based on";
var INCASS_AGESTS="Key in Age payment starts";
var INCASS_AGEENDS ="Key in Age payment ends";
 
//RD Analysis Retirment Cash Flow
var ANLYS_DESC="Key in Description";
var ANLYS_CLSFY ="Key in Classification";
var ANLYS_SRFDFLW ="Key in Source of Fund";

//Nominees Names
var NOM_NAME ="Key in Nominee Name"; 


//FG Protection - Accidental & Health
var FGAHITEM ="Key in Financial Goal Item in Accidental & Health";
var FGAHSLF	 ="Key in Self Priority";
var FGAHSPS="Key in Spouse Priority";

//FG Protection - Family & Assets
var FGFAITEM="Key in Financial Goal Item in Family & Assets";
var FGFASLF	 	="Key in Self Priority ";
var FGFASPS ="Key in Spouse Priority";

//FG Protection - Savings & Investment
var FGSIITEM ="Key in Financial Goal in Family & Assets Item";
var FGSISLF	 ="Key in Self Priority";
var FGSISPS="Key in Spouse Priority";

//FG Protection - Child'sEducation
var FGCEITEM ="Key in Financial Goal Itemin Child'sEducation";
var FGCESLF	 ="Key in Self Priority";
var FGCESPS="Key in Spouse Priority";

//Other Area of Concerns
var OTHAREAOFCRN="Key in Other Area of Concern"; 

//Reasons For Recommendations
var RSONFRRECOM="Key in Reasons For Recommendations "; 

//FundFlow Details
var FDFLW_CATEG				="Key in In/Outflow";
var FDFLW_SRC				="Key in Source";
var FDFLW_WHEN				="Key in When"; 


//Contingency Details
var CDEPN_NAME				="Key in Child Name";
var CDEPN_AGE				="Key in Child Age";
var CDEPN_YRS				="Key in Dependant Yrs";
 
//Life Insure
var Li_OWN				="Key in Owner/Proposed";
var Li_ASS				="Key in Life Assured";
var Li_INS				="Key in Insurance Company";
var Li_POL				="Key in Policy No.";
var Li_POLSTS			="Key in Policy Status";
var Li_DATE				="Key in Inc. Date of policy";
var Li_EXPDATE			="Key in Expiry Date";
var Li_SA				="Key in Sum Assured";
var Li_PLAN				="Key in Name of Main Plan";
var Li_CASHVAL			="Key in Current Cash Value"; 
var Li_MATDATE			="Key in Maturity Date";
var Li_MATVALUE			="Key in Maturity Value";
//Health Ins
var POLICY_TYPE			="Key in Policy Type";
var INSURED				="Key in Insured";
var BENIFIT_TYPE		="Key in Benefit Type"; 


//Property Ownership
var PROP_DESC				="Key in Description";
var PROP_MARKETVAL			="Key in Market Value"; 
var PROP_OWNER				="Key in Ownership";




//Vehicle Ownership
var VEH_OWNER				="Key in Owner";
var VEH_MKTVAL				="Key in Market Value";
var VEH_LOANVAL				="Key in Loan Value"; 

//Insurance
var LIINS_OWN				="Key in Owner";
var LIINS_ASS				="Key in Life Assured";
var LIINS_COM				="Key in Company";


//Input Investdets
var IPINVST_OWNNAME			="Key in Owner Type";
var IPINVST_TYPE			="Key in Types of Investment";
var IPINST_DATEINV			="Key in Date Invested";

var IPINVST_AMT			="Key in Amount ";
var IPINVST_FREQ			="Key in Frequency ";
var IPINST_NOOFYRS			="Key in No of yrs of reg. inv ";
var IPINST_YRSTOSTAY		="Key in Tot no. of yrs to stay ";
var IPINVST_INSNAME			="Key in Name of Institutions";
var IPINVST_FUNDCODE		="Key in Description of Investment";

//Advise Recommandations
var ADVREM_PROTYPE					="Key in Product Type";
var ADVREM_CMPYNAME					="Key in Company Name";
var ADVREM_SUM					="Key in Sum Assured Benefits";
var ADVREM_PLANTERM					="Key in Plan Term"; 


//Advise Recommandations - PLAN
var ARPLN_PROTYPE				="Key in Product Type";
var ARPLN_CMPYNAME				="Key in Company Name";
var ARPLN_SUM					="Key in Sum Assured Benefits";
var ARPLN_PLANTERM				="Key in Plan Term"; 

//Advise Recommandations - FUND
var ARFD_PROTYPE				="Key in Product Type";
var ARFD_CMPYNAME				="Key in Company/Product Name";
var ARFD_FPF					="Key in FPF Fund Risk Rating";
var ARFD_SALESCHRG				="Key in Sales Charges";
var ARFD_PURCHASE				="Key in Purchase";

//Switching Replacements - PLAN
var SWTPLAN_PROTYPE					="Key in Product Type";
var SWTPLAN_CMPYNAME				="Key in Company Name";
var SWTPLAN_SUM					="Key in Sum Assured Benefits";
var SWTPLAN_TYPE 				="Key in Switch Type"; 

//Switching Replacements - FUND
var SWTFD_PROTYPE					="Key in Product Type";
var SWTFD_CMPYNAME					="Key in Company Name";
var SWTFD_FPF		="Key in FPF Fund Risk Rating";
var SWTFD_UT		="Key in UT-Units/ILP-Amt";
var SWTFD_SALESCHRG		="Key in Sales Charges";
var SWTFD_AMT		="Key in Amount";
var SWTFD_REPL		="Key in Replc. Amt";

//CPF Monthly contribution
var CCEMPLECONTRB					="Key in Employee";
var CCEMPLRCONTRB					="Key in Employer";


//CPF Top ups Details
var CPFACCTYPE 					="Key in CPF Account Type";
var	CPFCTTYPE					="Key in CPF Type";
var	CPFCTPAY				 	="Key in CPF Payment Term";
var	CPFCTAMT					="Key in CPF Amount ";


//CPF Top ups Details
var CPFCDACCTYPE 					="Key in CPF Account Type";
	var	CPFCDAPP					="Key in CPF Applicant";
var	CPFCDTYPEDT				 	="Key in CPF Types of Deduction";
var	CPFCDPAY					="Key in CPF Payment Term ";

//CPF Addition & Deduction
var CAD_APPLICANT				="Key in Name of Account Holder";
var CAD_TRANSTYPE				="Key in Type of Transaction";
var CAD_ACCTYPE					="Key in Type of CPF Account";

//PERSONAL ASSETS
var PERACCHOL					="Key in Personal Asset Account Holder";
var PERACCTP					="Key in Type of Personal Asset";
var PERASTNAME					="Key in Name of Personal Asset";

//BUSINESS ASSETS
var BUSNACCHOL					="Key in Business Asset Account Holder";
var BUSNACCTP					="Key in Type of Business Asset";
var BUSNASTNAME					="Key in Name of Business Asset";

//CASH AT BANKS
var MAIN_HOLDER_NAME="Key in Main Account Holder Name";
var OWNER_TYPE 		="Select the Ownership type";
var BANK_NAME ="Key in Name of Bank";
var BANK_NO ="Key in Bank Account No.";
var COB_BALANCE 				= "Key in the Current Balance";


//LI - PLAN DETAILS
var LIPD_PLANNAME				="Key in Plan Name";
var LIPD_PLANTYPE				="Key in Basic/Rider";
var LIRDER_PLANTYPE				="Key in Rider/Benefit";
var LIPD_PREMTERM				="Key in Premium Term";
var LIPD_INCEPDATE				="Key in Inception Date";
var LIPD_EXPRYDATE				="Key in Expiry Date";

//LI - DEATH BENEFITS DETAILS
var LIDB_TERMOFCOV				="Key in Term of coverage";
var LIDB_DEATHBENF 			="Key in Death Benefit";


//LI - DISABILITY DETAILS
var LIDSB_TYPE					="Key in Type of Disability";
var LIDSB_BEGINS				="Key in Year benefit to be payable begins";
var LIDSB_CEASES				="Key in Year benefit to be payable ceases";


//LI - CRITICAL ILLNESS DETAILS
var LICL_LVLDD				="Key in Stages/Level of DD"; 
var LICL_BENAMT				="Key in Benefit amount";
var LICL_TERMOFBENF			="Key in Term of benefit";


//LI - HOSPITIALISATION DETAILS
var LIHSP_ANNPREM				="Key in Annual Premium";
var LIHSP_CLS					="Key in Class of Benefit";
var LIHSP_COV					="Key in Term of Coverage";
var LIHSP_DED					="Key in Deductible($)";
var LIHSP_COI					="Key in Co-insurance(%)";

//LI - RETIREMENT PLG
var LIRET_COMAGE				="Key in Commencement of Age";
var LIRET_ENDAGE				="Key in End of Age";
var LIRET_ESCAGE				="Key in Escalation Rate ";

//LI - EDUCATION PLG
var LIEDU_CHLDNAME				="Key in Name of child ";
var LIEDU_TEREDAGE				="Key in Tertiary education age";
var LIEDU_BANKRATE				="Key in Bank interest rate";
var LIEDU_LOANRATE				="Key in Loan interest rate";
 
//EDUPLG - PAYOUTS
var BEG_CHLDAGE	 ="Key in Income Pay Out Age";
var TOT_PROPOLICY 	 ="Key in Annual Pay Out Amount";
var CVRT_TEREDUAGE ="Key in Convert to value when child reaches tertiary ed age";

//MASTER COVERAGES
var POP_COV_BENEFITS	= "Add Benefits / coverages";
var POP_SELCOV_BENEFITS	= "Select any Columns to be added to this benefit";
//ATTACHMENT
var ATTACH_CATG ="Key in Category";
var ATTACH_TITLE="Key in Document Title";
var ATTACH_DOC="Upload the document";


//Master Retirement Sum
var MAST_BIRTHYEAR			='Key in Year';
var MAST_SRCHYEAR			='Key in Search Criteria';
var MAST_BRSLIMT			='Key in BRS';


//Master Cpf Details 
var CPF_ACCOUNT						="Key in Account Type";
var CPF_INT_RATE					="Key in CPF Interest Rate";
var CPF_INT_MTH						="Key in CPF Interest Month";
var INTRATE_SEARCH					="Select any search criteria in CPF Interest Rate";
	
//Master CPF Allocation Details
var	CPFALLOC_EFF					="Key in CPF Effective From";
var	CPFALLOC_AGEGRP					="Key in CPF Age group";
var	CPFALLOC_ACTYPE					="Key in CPF Account Type";
var	CPFALLOC_RATE					="Key in CPF Allocation Rate";
	
//Master CPF Contribution Details
var	CPFCONTRB_EFFFROM						="Key in Effective From ";
var	CPFCONTRB_EFFTO						="Key in Effective To ";
var	CPFCONTRB_AGEGRP						="Key in Employee Age Group "; 
var	CPFCONTRB_WAGEGRP						="Key in Employee Wage Group ";

//Master Quotes
var QUOTES_AUTHOR						="Key in Author Name";
var QUOTES_LOGMSG						="Key in Quotes";
var QUOTES_WEEK						="Key in Weekly View";
//Types of Application 
var TOAALYSFOR					="Select Any Analysis For ";
var TOAPURPO					="Select Any Purpose ";
var TOPLIFE						="Select Life & Non-Insurance Products ";
var TOPHL						="Select Accident and Health (A&H) Products ";
var TOPAYSTYPES					="Select Any one of Analysis Types ";
var TOAALYSFORSELF				="Select Any Analysis For Self";




//Profile 
var PROAPPTYPE					="Select Application Types";
var PROREVFLG					="Select Review Flg";


//Input Addition and Deduction into CPF a/c
var CPFADNAME					="Key in Name";
var CPFADYEAR					="Key in Year";
var CPFADAGE					="Key in Age";

//Health Insurance Mandatory
var HEALTHINS_RMKS				="Key in Remarks on Replacement of Health Insurance Policy"; 

//AML Declaration
var INT_NAME				 ="Key in Interpreter Name ";
var INT_NRIC				 ="Key in Interpreter NRIC ";
var INT_CONTACT				 ="Key in Interpreter Contact ";
var INT_HOMEADDR			 ="Key in Interpreter Home Address ";
var INT_REL			 	 ="Key in Interpreter Relationship ";
var SEL_BENOWNER			 ="Select Benefical Owner "; 
var SEL_TPP				 	 ="Select Third Party Payer "; 
var SEL_PEP				 ="Select Political Exposed Person "; 
var REASONS_RECOM			 ="Key in Reasons and Recommendation ";
var SWTCH_QUEST1			 ="Select Question 1 in Switching & Replacement section ";
var SWTCH_QUEST1REMK		 ="Key in Remarks on Question 1"
var SWTCH_QUEST2			 ="Select Question 2 in Switching & Replacement section ";
var SWTCH_QUEST3			 ="Select Question 3 in Switching & Replacement section";
var SWTCH_QUEST4			 ="Select Question 4 in Switching & Replacement section";
var DECLARATION				 ="Select Declaration By Client Agree/Disagree "
var SUP_DECLARATION			 ="Select Declaration By Supervisor Agree/Disagree "
var	SUP_REASON				 ="Key in Reason(s) and Follow-up Action "
	
//New Product TOPUPS
var CHECK_PRODUCT			 ="Select any Source of income in Advice & Recommendations ";

//Datatables
var DATATABLE_ERROR			 ="------------------No Records Available------------------";


//Retirement Cash Flow Analysis - Assumption Section
var FILL_ALL_RETPLN			 ="Please fill in Retirement planning Form ";

var RD_RETPLN_EXTAGE		 ="Please fill value for Expected Retirement Age from Retirement Planning ";
var RD_RETPLN_ASSAGE		 ="Please fill value for Assumed Life Expectancy Age from Retirement Planning ";

//RD Invest Cash Amount Section
var RD_INVCASHAMT_AVBLE		 	 ="Please fill value for Amount Available";
var RD_INVCASHINT_RATE		 	 ="Please fill value for Interest Rate";
//Retirement Cash Flow Analysis - Projection of Expenditure
var RD_CRCASH_DESC			 ="Key in Description";
var RD_CRCASH_ANLAMT		 ="Key in Annual Amount";
var RD_CRCASH_STARTAGE		 ="Key in Start Age";
var RD_CRCASH_STARTYEAR		 ="Key in Year Start from retirement";
var RD_CRCASH_NOYR		 ="Key in No. of years";
var RD_CRCASH_RATEOFINC		 ="Key in Rate of Increase";

//Retirement Cash Flow Analysis - Projection of Income
var RD_INPINC_DESC			 ="Key in Description";
var RD_INPINC_CLSFY			 ="Key in Classification";
var RD_INPINC_ANLAMT		 ="Key in Annual Amount";
var RD_INPINC_STARTYEAR		 ="Key in Year Start from retirement";
var RD_INPINC_STARTAGE		 ="Key in Start Age";
var RD_INPINC_NOOFYR		 ="Key in No. of Years";
var RD_INPINC_RATEOFINC		 ="Key in Rate of Increase";
//Retirement Cash Flow Analysis - Projection of Investment 
var RD_PROJINC_DESC			 ="Key in Description";
var RD_PROJINC_CLSFY		 ="Key in Classification";
var RD_PROJINC_SRCFD		 ="Key in Source of Funds";
var RD_PROJINC_FDADD		 ="Key in Funds Added";
var RD_PROJINC_ANLAMT		 ="Key in Income";
var RD_PROJINC_STARTYEAR	 ="Key in Year Start from retirement";
var RD_PROJINC_STARTAGE		 ="Key in Start Age";
var RD_PROJINC_NOY	 		 ="Key in No. of year";
var RD_PROJINC_RATE		 ="Key in Rate of Increase";


//Buttons
var STR_FIPA_SAVE		='Save Profile';
var STR_FIPA_NEW		='New Profile';
var STR_FIPA_DELETE		='Delete Profile';
var STR_FIPA_HOME		='FIPA Home';
var STR_FIPA_LOGOUT		='Logout';
var STR_CLIENT_SEARCH	='Search Client';
var STR_FPMSLINK		='FIPA policy link To FPMS';
var STR_ADDNEWLIFE		='Add New Life Insurance';
var STR_BACKTOFDFLW		='Back to Property Loan Repayment in Cash Flow Statement';
var STR_BACKTOANLRENT	='Back to Annual Rental Income in Cash Flow Statement';
var STR_FPMSPOLICY		='Click to view FPMS Policy Details';
var STRBACKTOCOB		='Back to Cash At Bank';
var STRBACKTOINV		='Back to Investment';
var STR_BACKTOFDFLW_LIFE		='Back to Life Insurance Premium in Cash Flow Statement';
var STR_BACKTOFDFLW_INV		='Back to Investment Income,dividends, gains in Cash Flow Statement';


//var STR_BACKTOINVST	='Back To Annual Rental Income';
var STR_BACKTOCPFAND	='Back to CPF Addition & Deduction';
var STR_BACKTOCASHASSET	='Back to Cash Asset';
var STR_FIPAPOLICY		='Click to view FIPA Policy Details';
var STR_DELFIPAPOL		='Click to delete FIPA Policy';
var STR_FPMSPOLICY		='Click to view FPMS Policy Details';

var BASIC_DELETE		='Click To delete Basic & its Riders(if exist)';
var RIDER_DELETE		='Click To delete Rider plan';
var RET_CLONE			='Click To view more details on Retirement Planning';
var EDU_CLONE			='Click To view more details on Education Planning';
var ADD_BASIC			='Click To Add Basic Plan';
var ADD_RIDER			='Click To Add Rider Plan';
var SCROLL_UPDOWN		='Click To Expand/Collapse';
var COVERAGE_PLAN		='Add type of benefits';

var STR_DOWNLOADFILE	='Click to download file';

var STR_ADDROW			='Add Row';
var STR_EDITROW			='Edit Row';
var STR_DELROW			='Delete Row';
var STR_VIEWROW			='View Row';
var STR_SEARCHROW		='Search';
var STR_RDFVINCOME		='Click to calculate FV Income';
var STR_INFO			='info';


var EXITLIFEDETS		='Do you want to clear existing policy data ';
var STR_FIPA_TT 		= 'FIPA Prospect indicates no information was found in FPMS.';
var STR_FPMS_TT 		= 'FPMS: indicates existing information is available in FPMS.No need to re-key client\'s particulars.Data will be taken from FPMS to FIPA.';
var STR_FIPAFPMS_TT 	= 'FPMS & FIPA: indicates client\'s information exist in both systems. (Client has an existing portfolio and performed FNA before)';

var INVESTMENT_ICON		='More info about the Investment Details upon clicking this icon';
var PROPERTY_ICON		='More info about the Property Ownership Details upon clicking this icon';
var VEHICLE_ICON		='More info about the Vehicle Ownership Details upon clicking this icon';
var LIFE_ICON			='More info about the Life insurance Details upon clicking this icon';
var COBFIXED_ICON		='More info about the Cash At Banks-Fixed Account upon clicking this icon';
var COBSAVING_ICON		='More info about the Cash At Banks-Saving Account Details upon clicking this icon';
var COBCURRENT_ICON		='More info about the Cash At Banks-Current Account Details upon clicking this icon';
var COBSRS_ICON			='More info about the Cash At Banks-SRS Account Details upon clicking this icon';
var MORTGAGE_ICON		='More info about the Properties - Mortgage Outstanding Loan Details upon clicking this icon';
var BKLIABLE_ICON		='Back to Financial Liabilities';
var BKPROPTY_ICON		='Back to Property Ownership';
var OTHERLIABLE_ICON 	='More info about the Cash And Other Assets - Loan Details upon clicking this icon';
var RETMANDATORY_ICON ='(Fields denoted in <span class="mandFldastrks">*</span>requires documentation for successful updates)';
var LIFETOTPREM_ICON 	='Expired Policy(ies) Premium is also included in total premium calculation.';


var RETSCREEN_INTSLFAGE		='Key in Intended retirement age (Self)'; 
var RETSCREEN_INTSPSAGE		='Key in Intended retirement age (Spouse)';
var RETSCREEN_RETAGEBASE	='Retirement age based on';
var RETSCREEN_YRSTORET		='Yrs to retirement';
var RETSCREEN_CORSLFAGE		='Coordinated retirement age(Self)';
var RETSCREEN_CORSPSAGE		='Coordinated retirement age(Spouse)';
var RETSCREEN_PROSLFAGE		='Projected life expectancy(Self Age)';
var RETSCREEN_PROSPSAGE		='Projected life expectancy(Spouse Age)';
var RETSCREEN_PROSLFLVYRRET	='Projected living yrs in retirement(Self)';
var RETSCREEN_PROSPSLVYRRET	='Projected living yrs in retirement(Spouse)';
var RETSCREEN_PROFAMLVYRRET	='Projected living yrs in retirement(Family)';
var RETSCREEN_ROISLF		='Projected ROI after retirement(Self)';
var RETSCREEN_ROISPS		='Projected ROI after retirement(Spouse)';
var RETSCREEN_ROIFAM		='Projected ROI after retirement(Family)';
	 
	
var RETSCREEN_LVYRSLF		="Living Needs during retirement(today's cost) - Self Amount "; 
var RETSCREEN_LVYRSPS		="Living Needs during retirement(today's cost) - Spouse Amount "; 
var RETSCREEN_LVYRFAM		="Living Needs during retirement(today's cost) - Family Amount ";
	
	
	

var NRIC_KEYIN				="Key in Client NRIC";
var INTRPER_KEYIN			="Key in Interpreter Details";

var EN_INT_POL_REMARKS		="Key in Remarks";
var CASH_VAL_RET			="Key in Cash Value On Retirement";
var NOMINEE_NAME			="Key in Nominees Names";
var AGE_PAYMENT_STARTS		="Key in Age payment starts";



var NONAV_CALCULATED	 ='Cannot calculate Bid Price/NAV Price for Analysis by portfolio';

var REFLECTED_DATA_ERRMSG= 'This operation performs the child Records will also be deleted';

var DEFAULT_FA_AVALLIS = "Avallis Financial Pte Ltd";



/*POP OVER NOTIFICATIONS*/
var SELF_ESTANNINCOME	=	'Estimated Monthly Income(Self) amount is reflected to Monthly Gross Income(Self) in Cash Flow Statement.';
var SPOUSE_ESTANNINCOME =	'Estimated Monthly Income(Spouse) amount is reflected to Monthly Gross Income(Spouse) in Cash Flow Statement.';
var LIST_OF_CHILDNAME	=	'List of Children names from Children particulars.';
var LIST_OF_NAMES		=	'List of Client name,Spouse name and children names from particulars section';
var CHLD_YRSTOTERITARY	=	'Years to Tertiary value is calculated based on respective child age and relationship.';
var RET_PROJ_ROI		=	'Projected ROI after retirement for Self,Spouse and Family value is reflected to Retirement Planning.';
var LIA_MORTGAGE		=	'Mortgage Loan amount for Self and Spouse is taken from Mortgage Outstanding in Property Ownership.';
var RET_TEREDU			=	'Years in Tertiary Education is taken from Children particular upon selecting respective children name.';
var RET_YRSTOTER 		=	'Years to Retirement is taken from Retirement Planning.';
var RET_INTERESTRATE	=	'Interest Rate Used is taken from Current Assumption Saving deposite rate by default';
var INVDESCRIPTION		=	'List of Portfolio Category/Fund names based on Analysis by Portfolio selection.'; 
var DIVAMOUNT			=	'Dividend Amount per Annum is calculated based on PAR/NAV.';
var DIV_BASEDON			=	'If Analysis By Portfolio is YES, then NAV Dividend based is not applicable';
var INVESTRATE			=	'Estimated Investment Rate is taken based on Types of Investment from Current Assumptions.';
var INV_FD_MGR			=	'List of Fund Manager.';
var PLAN_INCDATE		=	'Inception Date is taken from Life Insurance.';
var PLAN_EXPDATE		=	'Expiry Date is taken from Life Insurance.';
var PLAN_DETS			=	'Above field values are taken from selected Plans Details.';
var RETSELFAGE			=	'Coordinated Retirement age of Self is taken as of Intended retirement age(Self) from Retirement Planning.';
var RETSPSAGE			=	'Coordinated Retirement age of Spouse is taken as of Intended retirement age(Spouse) from Retirement Planning.'; 
var ASSUMPRATE			=	'Assumed Bank Interest Rate is taken as of Savings deposit rate from Current Assumption. ';
var LIFE_TEREDU			=	'The respective Children tertiary education age is taken from Children particulars.';
var LIFE_CHLDAGE		=	'The respective Children Age is taken from Children particulars.';
var INFLATE_RATE		=	'Inflation Rate is taken from Current Assumption.';
var PROP_FV_RET			=	'Property FV on retirement is calculated from Market value and Appreciation rate.';
var CURASS_PROJ_ROI		=	'Projected ROI after retirement for Self,Spouse and Family value is reflected into Current Assumption.';
var RET_SDRSCPF			=	'Selected Retirement Sum (SdRS) for Self,Spouse and Family value is reflected into CPF Projection Reports.';
var INTAGE				=	'Coordinated Retirement age of Self,Spouse and Family is taken from Retirement Planning Section.';
var PROJLVNG			=	'Projected Living Years in retirement of Self,Spouse and Family is taken from Retirement Planning Section.';
var RET_OTHERSCRN		=	'These are items fetched from all assets keyed-in previously.';
var CF_ANLRENTAL		=	'Annual Rental Income for Self,Spouse and Joint is reflected from Property Ownership.';
var CF_INVESTMENT		=	'Investment Income,dividends, gains for Self,Spouse and Joint is reflected from Investment.';
var CF_DEPANDANT		=	'Dependant contributions for Self,Spouse and Joint is reflected from total contribution in Dependant Particulars.';
var CF_PROPERTY			=	'Property loan repayment for Self,Spouse and Joint is reflected from loan repayment amount in Property Ownership.';
var CF_VEHICLE			=	'Vehicle loan repayment for Self,Spouse and Joint is reflected from loan amount in Vehicle Ownership.';
var CF_LIFE				=	'Life Insurance Premiums for Self,Spouse and Joint is reflected from Plan\'s premium amount in Life insurance.';
var NOMINEE_TYPE		=	'Add nominee details';


//#################Instant Save#########################################
//##### Children
var CHILD_INS_SAVE =	"Children's Particulars details changes updated successfully";
var CHILD_INS_DEL=	"Children's Particulars details changes deleted successfully";

//##### Financial Gls
var FINGL_INS_SAVE =	"Financial Goals and Concerns details changes updated successfully";
var FINGL_INS_DEL=	"Financial Goals and Concerns details changes deleted successfully";

//##### Wealth Acc Gls
var WLTHGL_INS_SAVE =	"Wealth Accumulation Goals details changes updated successfully";
var WLTHGL_INS_DEL=	"Wealth Accumulation Goals details changes deleted successfully";

//##### Depandant
var DEPNT_INS_SAVE =	"Other than immediate Family Members - Depandant Details Goals details changes updated successfully";
var DEPNT_INS_DEL=	"Other than immediate Family Members - Depandant Details details changes deleted successfully";

//##### Retirement planning
var FDTRNCPFLFE_INS_SAVE =	"Funds Transfer from CPF Account to CPF Life details changes updated successfully";
var FDTRNCPFLFE_INS_DEL=	"Funds Transfer from CPF Account to CPF Life details changes deleted successfully";

//##### Retirement planning
var RETOTHERPAY_INS_SAVE =	"Other payment to be made during retirement details changes updated successfully";
var RETOTHERPAY_INS_DEL=	"Other payment to be made during retirement details changes deleted successfully";

//##### Retirement planning
var RETINCRECV_INS_SAVE =	"Income to be received during retirement details changes updated successfully";
var RETINCRECV_INS_DEL=	"Income to be received during retirement details changes deleted successfully";

//##### Retirement planning
var RETINCASST_INS_SAV =	"Income and assets available for retirement details changes updated successfully";
var RETINCASST_INS_DEL=	"Income and assets available for retirement details changes deleted successfully";

//##### CPF
var CPFAD_INS_SAVE =	"CPF Account - Additions & Deductions of funds into CPF a/c details changes updated successfully";
var CPFAD_INS_DEL=	"CPF Account - Additions & Deductions of funds into CPF a/c details changes deleted successfully";
 
//##### Other area of concern
var AROFCON_INS_SAVE =	"Other Areas of Concerns details changes updated successfully";
var AROFCON_INS_DEL=	"Other Areas of Concerns details changes deleted successfully";

//##### Cash and Other Asset
var PERSASST_INS_SAVE =	"Other Personal Assets details changes updated successfully";
var PERSASST_INS_DEL=	"Other Personal Assets details changes deleted successfully";

//##### Cash and Other Asset
var BUSIASST_INS_SAVE =	"Business Assets details changes updated successfully";
var BUSIASST_INS_DEL=	"Business Assets details changes deleted successfully";
 
//##### Vehicle Ownership
var VEHOWN_INS_SAVE =	"Financial Liabilities - Vehicle Ownership details changes updated successfully";
var VEHOWN_INS_DEL=	"Financial Liabilities - Vehicle Ownership details changes deleted successfully";

//##### Cash At Banks
var COB_INS_SAVE =	"Cash At Bank details changes updated successfully";
var COB_INS_DEL=	"Cash At Bank details changes deleted successfully";

//<!--changes done 19/06/2019 -->
//##### SRS 
var CASHSRS_INS_SAVE =	"SRS details changes updated successfully";
var CASHSRS_INS_DEL=	"SRS details changes deleted successfully";

 
//##### Investment
var INV_INS_SAVE =	"Investment details changes updated successfully";
var INV_INS_DEL=	"Investment details changes deleted successfully";

 
//##### Property Ownership
var PROP_INS_SAVE =	"Property Ownership details changes updated successfully";
var PROP_INS_DEL=	"Property Ownership details changes deleted successfully";
 

//##### Nominee Name
var NOM_INS_SAVE =	"Nominee Name changes updated successfully";
var NOM_INS_DEL=	"Nominee Name changes deleted successfully";


//##### Education planning
var EDUPLG_INS_SAVE =	"Life Insurance - Education planning changes updated successfully";
var EDUPLG_INS_DEL=	"Life Insurance - Education planning changes deleted successfully";


//##### Retirement planning
var LFRET_INS_SAVE =	"Life Insurance - Retirement planning changes updated successfully";
var LFRET_INS_DEL=	"Life Insurance - Retirement planning changes deleted successfully";


//##### Hospitalisation
var HOSP_INS_SAVE =	"Life Insurance - Hospitalisation changes updated successfully";
var HOSP_INS_DEL=	"Life Insurance - Hospitalisation changes deleted successfully";

//##### Critical Illness
var CRTLSS_INS_SAVE =	"Life Insurance - Critical Illness changes updated successfully";
var CRTLSS_INS_DEL=	"Life Insurance - Critical Illness changes deleted successfully";


//##### Disability
var DSBLE_INS_SAVE =	"Life Insurance - Disability changes updated successfully";
var DSBLE_INS_DEL=	"Life Insurance - Disability changes deleted successfully";

 
//##### Death Benefit 
var DFBEN_INS_SAVE =	"Life Insurance - Death Benefit changes updated successfully";
var DFBEN_INS_DEL=	"Life Insurance - Death Benefit changes deleted successfully";
 

//##### Basic
var BASIC_INS_SAVE =	"Life Insurance - Basic Plan Details changes updated successfully";
var BASIC_INS_DEL=	"Life Insurance - Basic Plan Details changes deleted successfully";

//##### Rider
var RIDER_INS_SAVE =	"Life Insurance - Rider Plan Details changes updated successfully";
var RIDER_INS_DEL=	"Life Insurance - Rider Plan Details changes deleted successfully";


//###NEW COVERAGE PLANS
var COV_BOOSTR		="Keyin Multiplier/Booster Factor";
var COV_MAA_AMTASS	="Keyin Min Amt Assured(MAA) after Mult/Boost";
var COV_EXPPERD		="Expiry Age of MAA";
var COV_NOOFYR		="Keyin Benefit Pay Out Period (by default 1yr)";
var COV_DISBENF		="Keyin Disability Benefit";
var COV_DISPAYOUT	="Keyin Yrs of disability payout (yr)"
var COV_MAXPAYOUT	="Keyin Max payout age (age)";

 
var susptoastrOpts={
	 	"closeButton": true,
		"debug": false,
		"newestOnTop": true,
		"progressBar": true,
		"positionClass": "toast-top-right",
		"preventDuplicates": true,
		"preventOpenDuplicates": true,
		"onclick": null,
		"showDuration": "500",
		"hideDuration": "1000",
		"timeOut": "0",
		"extendedTimeOut": "0",
		"showEasing": "swing",
		"hideEasing": "linear",
		"showMethod": "fadeIn",
		"hideMethod": "fadeOut"
}