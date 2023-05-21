//go that line
 
var fipaForm;
var master;
var newProfile = "";
var FIPAFnaId = "";
var FIPAMenu = "";
var FundListNames = new Array();
var dataTableFlg=false;
var stafftype = $('#hTxtFldLoggedStfType').val();
var advstfId = $('#hTxtFldLoggedAdvStfId').val();
var strMgrFlg = $('#hTxtFldLoggedUserMgrFlg').val();
var kyc_url;

var tiggerSave="";
var profileLoad="";
var invFlgDsbl=false;

function fipaInitPageClient() {
  
	fipaForm = document.forms["fipaForm"];

	if(!isEmpty(newProfile) && newProfile === "TRUE") {
		 
		openClientSection();
		$("#btnSaveProfile").removeClass("hidden");
		$("#advstfId").val(advstfId);
		setAdvMgrId(document.getElementById("advstfId"));
		$("select#advstfId").prop("disabled", true);
		
		/*Life Insurance Side*/
		$('#lifeInsNavTabsDets a[href="#lifeInsdetstab"]').css("display","none");
		$('#lifeInsNavTabsDets a[href="#liplandetails"]').css("display","none");
		$('#lifeInsNavTabsDets a[href="#healthInsdetstab"]').css("display","none");
		
		typeOfCoverage("All","none");
		addDefaultCpfLifeRows(null);//Retirement CPF Life default Values
		typeOfApplicationByDefault();
		
		setDefltCurrAssmVal();
		setDefltContingVal();
	}
	
	
	selectNullvalChk($("#selAdviserSrch"),advstfId); 
	
	if (stafftype == STAFFTYPE_ADVISER) {
		$("#advstfId").val(advstfId);
		$("#selAdviserSrch").val(advstfId);
		
		setAdvMgrId(document.getElementById("advstfId"));
		$("select#advstfId").prop("disabled", true);

		var selectedText = $("#advstfId option:selected").text();
		$("input[name='txtFldAdviserName']").val(selectedText);
 

		// Toolbar icons
		$("#btnNewProfile").removeClass("hidden");
		$("#btnSaveProfile").removeClass("hidden");
		$("#selAdviserSrch").prop("disabled",true);
		$("#divSrchAdviser").addClass("hidden");

	}

	if (stafftype == STAFFTYPE_STAFF) { // Amin
		
//		$('#lblSrchNric').css('color', 'maroon');
		$("#profileDialog #fnaType").attr("disabled", false);
		clearAllDetails('disable'); // commented by thulasy 03.11.2017
		$(".funcToDisable").css("display", "none"); // Dhtml table buttons 
		// Toolbar icons
		$("#btnNewProfile").addClass("hidden");
		$("#btnSaveProfile").addClass("hidden");
		
		$("#FpmsClntARow").removeClass("hidden");
		
		$("select#selAdviserSrch").prop("disabled", false);
	}
	if (!(stafftype == STAFFTYPE_STAFF)) {
		if (isEmpty(newProfile) && newProfile != "TRUE") {
//			$("#sidebar-menu").find("li[id='search_li']").addClass("active");
//    		chkClientMenu();
//    		show($("#search_li"),'searchpage');
//    		navlink($("#search_li"),'null');  

		}

	}

	if (strMgrFlg == "Y") {
		$('#sidebar-menu #supervisor_li').css("display", "block");
	}
	

	loadAllSymbols();
	applyEventHandlers();
	tooltipHandlers();
	popoverHandlers();
	eKYCOnLoading();
	mandateTooltipOnlabels();
	typeOfApplicationByDefault();
	autoComplete(); 
	autoDialogButEnable();
	
	$("#dfSelfNationality").val("Singaporean");
	$("#dfSpsNationality").val("Singaporean");
	$("#dfSpsMartsts").val("Married");
	prevScrFlg="";
//	$(".mastcurAssmpt").addClass("hidden");//To hide current assumpt opt as master screen
	
	setTimeout(function(){
		
		 $($.fn.dataTable.tables(true)).DataTable() .columns.adjust();
		 
		 $(".btn-pref").each(function(){
			$(this).find("button:eq(0)").removeClass("btn-default").addClass("btn-primary"); 
		 });
		 
		 $(".btn-pref .btn").click(function () {
			 
			 $(this).closest(".btn-pref").find(".btn").removeClass("btn-primary").addClass("btn-default");
			 
			 $(this).removeClass("btn-default").addClass("btn-primary");
			    
			  
		});
		 
//		 clearClntSrchRows();
		 
		 
			if (FIPAFnaId != null && FIPAFnaId != '' && FIPAFnaId != 'null') {
				showLoader();
				reloadProfile();
				
			}
			
			if (!isEmpty(FIPAMenu)) {
//				openCurrentScreen(FIPAMenu);
				$("#hTxtMenuName").val(FIPAMenu);
			}
			if (FIPAFnaId == null || FIPAFnaId == '' || FIPAFnaId == 'null') {
			clearClntSrchRows();
			}
		 hideLoaderOnly();  
		 /*$(".wrapper").height("92vh");*/
		 
	}, 100);
	
	$("#ProSrchTab").attr('checked', true).trigger('click');
	//$("#Clientdtlstab").prop('checked', true).trigger('click');
	 /*$(".wrapper").height("92vh");*/
	 
	 /*$(".wrapper").css("height", "92vh !important");*/
}

function typsOfAppNavg(){
if($('a[href="#particulars"]').parent().hasClass("submenu")){
	$('a[href="#particulars"]').parent().closest("li.mainmenu").find("a:eq(0)").trigger("click");
	if($('a[href="#particulars"]').parent().closest("li.secondlevel")){
		$('a[href="#particulars"]').parent().closest("li.secondlevel").find("a:eq(0)").trigger("click");
	}
}
$('a[href="#particulars"]').trigger("click");
}

function autoDialogButEnable(){ 
	$(".modal").find("input,select,textarea").on("change",function(){
		$(this).find(".modal-footer").find("button:eq(0)").removeClass("hidden");
	});
}
function autoComplete(){
	
    /*$('#txtFldDlgORAgePaySts,#txtFldDlgIRAgePaySts,#txtFldDlgIncAssAgePaySts,#cashvalRetAge,'
    		+'#txtFldDlgRetPlgCommOfAge,#txtFldDlgprojORAgePaySts,#txtFldDlgprojIRAgePaySts,'
    		+'#txtFldDlgprojIncAssAgePaySts').typeahead({
    			source:[]
		});  
     
    $('#txtFldDlgORAgePayends,#txtFldDlgIRAgePayends,#txtFldDlgIncAssAgePayends,'
    		+'#txtFldDlgprojORAgePayends,#txtFldDlgprojIRAgePayends,#txtFldDlgprojIncAssAgePayends,'
    		+'#txtFldDlgRetPlgEndOfAge').typeahead({
    			source:[]
		}); */
 
}


function typeOfApplicationByDefault(){
	$("input:checkbox[name=txtFldAnalyisFor]").prop("checked", true).val("Y");
	$("input:checkbox[name=txtFldAnalyisFor]:eq(0)").prop("disabled", true).prop("checked", true).val("Y"); 
//	<!--   Thulasy 16.07.2019 -->
//	$("input:checkbox[name=txtFldClientChoice]:eq(0)").prop("disabled", true);
//	$("input:checkbox[name=txtFldClientChoice]:eq(1)").prop("checked", true).val("Y");  
//	$("input:checkbox[name=txtFldClientChoice]:eq(2)").prop("disabled", true);
//	$("input:checkbox[name=txtFldClientChoice]:eq(3)").prop("checked", true).val("Y");
//	$("input:checkbox[name=txtFldClientChoice]:eq(4)").prop("disabled", true);
//	$("input:checkbox[name=txtFldClientChoice]:eq(5)").prop("checked", true).val("Y");  
	$("input:checkbox[name=txtFldClientChoice]:eq(0)").prop("disabled", false).prop("checked", true).val("Y");
//	$("input:checkbox[name=txtFldClientChoice]:eq(1)").prop("disabled", true).prop("checked", false).val("N");  
	$("input:checkbox[name=txtFldClientChoice]:eq(1)").prop("disabled", false).prop("checked", true).val("Y");
//	$("input:checkbox[name=txtFldClientChoice]:eq(3)").prop("disabled", true).prop("checked", false).val("N");
	$("input:checkbox[name=txtFldClientChoice]:eq(2)").prop("disabled", false).prop("checked", true).val("Y");
//	$("input:checkbox[name=txtFldClientChoice]:eq(5)").prop("disabled", true).prop("checked", false).val("N");  
	
	$("#appAnalysisFor").val('{"ANALYS_SLF":"Y","ANALYS_SPS":"Y","ANALYS_FAM":"Y"}');
	$("#appClientChoice").val('{"LS":"Y","AS":"Y","IS":"Y"}');	
	$("#appPurpose").val('{"FIN_PLN_RPT":"N","FIN_ADVSRY":"N"}');
	
	
}
function mandateTooltipOnlabels(){
	$("#fipaForm").find("input,select,textarea").on("change", function() {
		removeTooltip($(this)); 
	});
	$("#fipaForm").find("input[type=checkbox],input[type=radio]").on("click", function() {
		$("#fipaForm").find("input,select,textarea").removeClass("mandatoryFillFlds");
		$("#fipaForm").find("input,select,textarea").qtip('disable');
		$("#fipaForm").find("input,select,textarea").qtip('destroy',true);
	}); 
}
function eKYCOnLoading(){
	$("#ekycToRegister").addClass("hidden"); 
	$("#ekycSuccess").addClass("hidden"); 
$("#ekycnotifies").addClass("hidden");
$("#applymessage").text("");
	
}
function tooltipHandlers() {
	 
	
	
	showTooltip('btnPrevPge', 'Go to previous page');
	showTooltip('btnNxtPge',  'Go to next page');
	showTooltip('imgFIPAProspect', STR_FIPA_TT);
	showTooltip('imgFPMSClient', STR_FPMS_TT);
	showTooltip('imgBoth1', STR_FIPAFPMS_TT);
	showTooltip('imgBoth2', STR_FIPAFPMS_TT);
	showTooltip('btnSaveProfile', STR_FIPA_SAVE);
	showTooltip('btnNewProfile', STR_FIPA_NEW);
	showTooltip('btnDeleteProfile', STR_FIPA_DELETE);
//	showTooltip('btnFipaHome', STR_FIPA_HOME);
//	showTooltip('btnLogout', STR_FIPA_LOGOUT);
	showTooltip('btnSrchProfile', STR_CLIENT_SEARCH);
//	showTooltip('FipaLinkToFpms', STR_FPMSLINK);
	
	showTooltip('basicDelbtn', BASIC_DELETE);
	showTooltip('riderDelbtn', RIDER_DELETE);

	showTooltip('exportfipapolicy', STR_FIPAPOLICY);
	showTooltip('fipadelpolicy', STR_DELFIPAPOL);
	showTooltip('exportfpmspolicy', STR_FPMSPOLICY);
 
	showTooltip('propAddbtn', 'Click to add new value');
	showTooltip('propdelbtn', 'Click to delete value');
	showTooltip('finglspropIcon', 'Add new values to Types of Financial goals list');
	
	
	showTooltip('backNavInvCash', STRBACKTOCOB);
	showTooltip('backNavCashInv', STRBACKTOINV);
	
	showTooltip('exportfpmspolicy', STR_FPMSPOLICY);
	
	showTooltip('attcfiledownload', STR_DOWNLOADFILE);
	
	 

	showTooltipCls('searchRow-icon', STR_SEARCHROW);

	
	
	showTooltipCls('pdf-icon', 'Generate PDF');
	showTooltipCls('reset-icon', 'Reset All');
	showTooltipCls('genNavicon', 'Fetch NAV');
	
	showTooltipCls('rdcalFVIncome', STR_RDFVINCOME);
	showTooltipCls('canvas_info', STR_INFO);
	showTooltipCls('info', 'Additional Information');
	showTooltipCls('addnewlife', STR_ADDNEWLIFE);
//	showTooltipCls('addInflwOutflw', INVESTMENT_ICON);
//	showTooltipCls('addpropertyicon', PROPERTY_ICON);
//	showTooltipCls('addvehcileicon', VEHICLE_ICON);
//	showTooltipCls('addlifeicon', LIFE_ICON);
	showTooltipCls('backToFdFlow', STR_BACKTOFDFLW);
	showTooltipCls('backToAnlRnt', STR_BACKTOANLRENT); 
	showTooltipCls('backToCpfAD', STR_BACKTOCPFAND); 
	
	
	
	showTooltipCls('backToCashAsset', STR_BACKTOCASHASSET);
	showTooltipCls('addnaviCobFixed', COBFIXED_ICON);
	showTooltipCls('addnaviCobSaving', COBSAVING_ICON);
	showTooltipCls('addnaviCobCashEq', COBCURRENT_ICON);
	showTooltipCls('addnaviCobSRS', COBSRS_ICON);
	
	
	showTooltipCls('educationclone', EDU_CLONE);
	showTooltipCls('retirementclone', RET_CLONE);
	showTooltipCls('genAddRProicon', ADD_RIDER);
	showTooltipCls('genAddBProicon', ADD_BASIC);
	showTooltipCls('updownico', SCROLL_UPDOWN);
	showTooltipCls('covrgico', COVERAGE_PLAN); 
	showTooltipCls('covrgicoAdd', COVERAGE_PLAN); 
	
	
//	showTooltipCls('mortgagelnicon', MORTGAGE_ICON);
	showTooltipCls('bkliableicon', BKLIABLE_ICON);
	
	
//	showTooltipCls('otherliableicon', OTHERLIABLE_ICON); 
	
	
	/* Children Particulars */
	showTooltip('AChldPt', 'Add Row For Childrens Particulars Details');
	showTooltip('EChldPt', 'Edit Row For Childrens Particulars Details');
	showTooltip('DChldPt', 'Delete Row For Childrens Particulars Details');
	showTooltip('VChldPt', 'View Row For Childrens Particulars Details');

	showTooltip('ANewChldPt', 'Add Row For Childrens Particulars Details');
	showTooltip('DNewChldPt', 'Delete Row For Childrens Particulars Details');
	
	/* Financial Goals */
	showTooltip('AfinGls', 'Add Row For Financial Goals/Concern Details');
	showTooltip('EfinGls', 'Edit Row For Financial Goals/Concern Details');
	showTooltip('DfinGls', 'Delete Row For Financial Goals/Concern Details');
	showTooltip('VfinGls', 'View Row For Financial Goals/Concern Details');

	/* Wealth Accumulation */
	showTooltip('WAcARow', 'Add Row For Wealth Accumulation Goals Details');
	showTooltip('WAcERow', 'Edit Row For Wealth Accumulation Goals Details');
	showTooltip('WAcDRow', 'Delete Row For Wealth Accumulation Goals Details');
	showTooltip('WAcVRow', 'View Row For Wealth Accumulation Goals Details');

	/* Dependant Particulars */
	showTooltip('DeptARow',
			'Add Row For Other than family members(Dependant Particulars)');
	showTooltip('DeptERow',
			'Edit Row For Other than family members(Dependant Particulars)');
	showTooltip('DeptDRow',
			'Delete Row For Other than family members(Dependant Particulars)');
	showTooltip('DeptVRow',
			'View Row For Other than family members(Dependant Particulars)');

	showTooltip('DepntARow',
	'Add Row For Other than family members(Dependant Particulars)');
	
	showTooltip('DepntDRow',
	'Delete Row For Other than family members(Dependant Particulars)');
	
	/* Life Insurance - Nominees */
	showTooltip('NomARow', 'Add Row For Life Insurance - Nominees Details');
	showTooltip('NomERow', 'Edit Row For Life Insurance - Nominees Details');
	showTooltip('NomDRow', 'Delete Row For Life Insurance - Nominees Details');
	showTooltip('NomVRow', 'View Row For Life Insurance - Nominees Details');

	/* Life Insurance - Plan Details */
	showTooltip('lfplnARow', 'Add Row For Life Insurance - Plan Details');
	showTooltip('lfplnERow', 'Edit Row For Life Insurance - Plan Details');
	showTooltip('lfplnDRow', 'Delete Row For Life Insurance - Plan Details');
	showTooltip('lfplnVRow', 'View Row For Life Insurance - Plan Details');

	
	
	showTooltip('lfraidARow', 'Add Row For Life Insurance - Benefit/Rider Plan Details');
	showTooltip('lfraidERow', 'Edit Row For Life Insurance - Benefit/Rider Plan Details');
	showTooltip('lfraidDRow', 'Delete Row For Life Insurance - Benefit/Rider Plan Details');
	showTooltip('lfraidVRow', 'View Row For Life Insurance - Benefit/Rider Plan Details');

	/* Life Insurance - Health Insurance Details */
	showTooltip('HlthARow',
			'Add Row For Life Insurance - Health Insurance Details');
	showTooltip('HlthERow',
			'Edit Row For Life Insurance - Health Insurance Details');
	showTooltip('HlthDRow',
			'Delete Row For Life Insurance - Health Insurance Details');
	showTooltip('HlthVRow',
			'View Row For Life Insurance - Health Insurance Details');

	/* Life Insurance - Death Benefits Details */
	showTooltip('DthARow',
			'Add Row For Life Insurance - Death Benefits Details');
	showTooltip('DthERow',
			'Edit Row For Life Insurance - Death Benefits Details');
	showTooltip('DthDRow',
			'Delete Row For Life Insurance - Death Benefits Details');
	showTooltip('DthVRow',
			'View Row For Life Insurance - Death Benefits Details');

	/* Life Insurance - Disability Details */
	showTooltip('DsbltyARow', 'Add Row For Life Insurance - Disability Details');
	showTooltip('DsbltyERow',
			'Edit Row For Life Insurance - Disability Details');
	showTooltip('DsbltyDRow',
			'Delete Row For Life Insurance - Disability Details');
	showTooltip('DsbltyVRow',
			'View Row For Life Insurance - Disability Details');

	/* Life Insurance - Critical Illness Details */
	showTooltip('CrtlARow',
			'Add Row For Life Insurance - Critical Illness Details');
	showTooltip('CrtlERow',
			'Edit Row For Life Insurance - Critical Illness Details');
	showTooltip('CrtlDRow',
			'Delete Row For Life Insurance - Critical Illness Details');
	showTooltip('CrtlVRow',
			'View Row For Life Insurance - Critical Illness Details');

	/* Life Insurance - Hospitality Details */
	showTooltip('HospARow', 'Add Row For Life Insurance - Hospitality Details');
	showTooltip('HospERow', 'Edit Row For Life Insurance - Hospitality Details');
	showTooltip('HospDRow',
			'Delete Row For Life Insurance - Hospitality Details');
	showTooltip('HospVRow', 'View Row For Life Insurance - Hospitality Details');

	/* Life Insurance - Retirement Planning Details */
	showTooltip('lfRetPlgARow',
			'Add Row For Life Insurance - Retirement Planning Details');
	showTooltip('lfRetPlgERow',
			'Edit Row For Life Insurance - Retirement Planning Details');
	showTooltip('lfRetPlgDRow',
			'Delete Row For Life Insurance - Retirement Planning Details');
	showTooltip('lfRetPlgVRow',
			'View Row For Life Insurance - Retirement Planning Details');

	/* Life Insurance - Education Planning Details */
	showTooltip('lfEduPlgARow',
			'Add Row For Life Insurance - Education Planning Details');
	showTooltip('lfEduPlgERow',
			'Edit Row For Life Insurance - Education Planning Details');
	showTooltip('lfEduPlgDRow',
			'Delete Row For Life Insurance - Education Planning Details');
	showTooltip('lfEduPlgVRow',
			'View Row For Life Insurance - Education Planning Details');

	/* Investment Details */
	showTooltip('InvestARow', 'Add Row For Investment Details');
	showTooltip('InvestERow', 'Edit Row For Investment Details');
	showTooltip('InvestDRow', 'Delete Row For Investment Details');
	showTooltip('InvestVRow', 'View Row For Investment Details');

	/* Property Ownership Details */
	showTooltip('powncpfARow', 'Add Row For Property Ownership  Details');
	showTooltip('powncpfERow', 'Edit Row For Property Ownership  Details');
	showTooltip('powncpfDRow', 'Delete Row For Property Ownership  Details');
	showTooltip('powncpfVRow', 'View Row For Property Ownership  Details');

	/* Cash At Banks Details */
	showTooltip('CobARow', 'Add Row For Cash At Banks Details');
	showTooltip('CobERow', 'Edit Row For Cash At Banks Details');
	showTooltip('CobDRow', 'Delete Row For Cash At Banks Details');
	showTooltip('CobVRow', 'View Row For Cash At Banks Details');

	/* Asset - Personal Assets Details */
	showTooltip('PersARow', 'Add Row For Personal Assets Details');
	showTooltip('PersERow', 'Edit Row For Personal Assets Details');
	showTooltip('PersDRow', 'Delete Row For Personal Assets Details');
	showTooltip('PersVRow', 'View Row For Personal Assets Details');

	/* Asset - Business Assets Details */
	showTooltip('BusiARow', 'Add Row For Business Assets Details');
	showTooltip('BusiERow', 'Edit Row For Business Assets Details');
	showTooltip('BusiDRow', 'Delete Row For Business Assets Details');
	showTooltip('BusiVRow', 'View Row For Business Assets Details');

	/* Vehicle Ownership Details */
	showTooltip('VehARow', 'Add Row For Vehicle Ownership Details');
	showTooltip('VehERow', 'Edit Row For Vehicle Ownership Details');
	showTooltip('VehDRow', 'Delete Row For Vehicle Ownership Details');
	showTooltip('VehVRow', 'View Row For Vehicle Ownership Details');

	/* CPF Addition & Deduction Details */
	showTooltip('CpfADARow', 'Add Row For CPF Addition & Deduction Details');
	showTooltip('CpfADERow', 'Edit Row For CPF Addition & Deduction Details');
	showTooltip('CpfADDRow', 'Delete Row For CPF Addition & Deduction Details');
	showTooltip('CpfADVRow', 'View Row For CPF Addition & Deduction Details');

	/* SRS Details */
	showTooltip('SrsARow', 'Add Row For SRS Details');
	showTooltip('SrsERow', 'Edit Row For SRS Details');
	showTooltip('SrsDRow', 'Delete Row For SRS Details');
	
	/* Other Area & Concern Details */
	showTooltip('ArCARow', 'Add Row For Other Area and Concern Details');
	showTooltip('ArCERow', 'Edit Row For Other Area and Concern Details');
	showTooltip('ArCDRow', 'Delete Row For Other Area and Concern Details');
	showTooltip('ArCVRow', 'View Row For Other Area and Concern Details');

	/* Adviser and Recommendations - LIFE & HEALTH INS Plan Dets */
	showTooltip(
			'ArtuPlanARow',
			'Add Row For Adviser and Recommendations - Life & Health Insurance (Plan Details)');
	showTooltip(
			'ArtuPlanERow',
			'Edit Row For Adviser and Recommendations - Life & Health Insurance (Plan Details)');
	showTooltip(
			'ArtuPlanDRow',
			'Delete Row For Adviser and Recommendations - Life & Health Insurance (Plan Details)');
	showTooltip(
			'ArtuPlanVRow',
			'View Row For Adviser and Recommendations - Life & Health Insurance (Plan Details)');

	/* Adviser and Recommendations - UT and ILP (Fund Details) */
	showTooltip('ArtuFundARow',
			'Add Row For Adviser and Recommendations - UT and ILP (Fund Details)');
	showTooltip('ArtuFundERow',
			'Edit Row For Adviser and Recommendations - UT and ILP (Fund Details)');
	showTooltip('ArtuFundDRow',
			'Delete Row For Adviser and Recommendations - UT and ILP (Fund Details)');
	showTooltip('ArtuFundVRow',
			'View Row For Adviser and Recommendations - UT and ILP (Fund Details)');

	/* Switching and Replace - LIFE & HEALTH INS Plan Dets */
	showTooltip('SwrepPlanARow',
			'Add Row For Switching and Replace - Life & Health Insurance (Plan Details)');
	showTooltip('SwrepPlanERow',
			'Edit Row For Switching and Replace - Life & Health Insurance (Plan Details)');
	showTooltip('SwrepPlanDRow',
			'Delete Row Switching and Replace - Life & Health Insurance (Plan Details)');
	showTooltip('SwrepPlanVRow',
			'View Row For Switching and Replace - Life & Health Insurance (Plan Details)');

	/* Switching and Replace - UT and ILP (Fund Details) */
	showTooltip('SwrepFundARow',
			'Add Row For Switching and Replace - UT and ILP (Fund Details)');
	showTooltip('SwrepFundERow',
			'Edit Row For Switching and Replace - UT and ILP (Fund Details)');
	showTooltip('SwrepFundDRow',
			'Delete Row For Switching and Replace - UT and ILP (Fund Details)');
	showTooltip('SwrepFundVRow',
			'View Row For Switching and Replace - UT and ILP (Fund Details)');

	/* Basis & Rationale of Recommendations */
	showTooltip('rsnARow', 'Add Row For Basis & Rationale of Recommendations');
	showTooltip('rsnERow', 'Edit Row For Basis & Rationale of Recommendations');
	showTooltip('rsnDRow',
			'Delete Row For Basis & Rationale of Recommendations');
	showTooltip('rsnVRow', 'View Row For Basis & Rationale of Recommendations');

	/* Retirement Plg - Other Payment on Retirement */
	showTooltip('AOthRet',
			'Add Row For Other Payment to be made during Retirement Details');
	showTooltip('EOthRet',
			'Edit Row For Other Payment to be made during Retirement Details');
	showTooltip('DOthRet',
			'Delete Row For Other Payment to be made during Retirement Details');
	showTooltip('VOthRet',
			'View Row For Other Payment to be made during Retirement Details');

	/* Retirement Plg - Income to be received during retirement */
	showTooltip('AIncRet',
			'Add Row For Income to be received during retirement Details');
	showTooltip('EIncRet',
			'Edit Row For Income to be received during retirement Details');
	showTooltip('DIncRet',
			'Delete Row For Income to be received during retirement Details');
	showTooltip('VIncRet',
			'View Row For Income to be received during retirement Details');

	/* Retirement Plg - Income and assets available for retirement */
	showTooltip('AIncAssRet',
			'Add Row For Income and assets available for retirement Details');
	showTooltip('EIncAssRet',
			'Edit Row For Income and assets available for retirement Details');
	showTooltip('DIncAssRet',
			'Delete Row For Income and assets available for retirement Details');
	showTooltip('VIncAssRet',
			'View Row For Income and assets available for retirement Details');

	/* Retirement Expenditure */
	showTooltip('RDExpAddRow',
			'Add Row For Other payment to be made during retirement Details');
	showTooltip('RDExpEditRow',
			'Edit Row For Other payment to be made during retirement Details');
	showTooltip('RDExpDelRow',
			'Delete Row For Other payment to be made during retirement Details');
	showTooltip('RDExpViewRow',
			'View Row For Other payment to be made during retirement Details');
	
	
	
	/*Attachments */
	showTooltip('DcAttchARow',
			'Add Row For Attachments Details');
	showTooltip('DcAttchERow',
			'Edit Row For Attachments Details');
	showTooltip('DcAttchDRow',
			'Delete Row For Attachments Details');
	showTooltip('DcAttchVRow',
			'View Row For Attachments Details');


	/*Side Menu Tooltip*/
	
	showTooltip('search_li','Profile Search');
	showTooltip('typesofappln_li','Types of Application');
	showTooltip('particular_li','Particular');
	showTooltip('fingoals_li','Financial Goals');
	showTooltip('financialinfo_li','Financial Info');
	/*showTooltip('cashflowst_li','Cash Flow Statements - Source of Income, Annual Expenditure');*/
	showTooltip('cashflowst_li','Income & Expenses');
	showTooltip('assetsliab_li','Assets & Liabilities');
	showTooltip('contigency_li','Contigency Plan');
	showTooltip('retirement_li','Retirement Planning, Retirement-Cash Flow Analysis');
	showTooltip('lifeinsurance_li','Life Insurance,Plans and Its Coverages');
	showTooltip('investment_li','Investments, NAV and Dividend Details');
	showTooltip('property_li','Properties - Loans, Objectives.');
	showTooltip('cashasstmain_li','Cash Assets');
	showTooltip('cashatbank_li','Cash at bank, SRS Details');
	showTooltip('cashotherasset_li','Other Assets - Business, Personal, Vehicle Ownership');
	showTooltip('estate_li','Estate Plans');
	showTooltip('cpf_li','Central Provident Fund - Balance, Annaul Contribution and Annaul Addition & Deduction');
	showTooltip('srssummary_li','Investment Summary payment through SRS');
	showTooltip('finliab_li','Financial Liability');
	showTooltip('currassmp_li','Current Assumption - Inflation rates, Interest rates');
	showTooltip('otherconcern_li','Other area to concern');
	showTooltip('report_li','Reports - Cash Flow statement, CPF Projection, Net worth Analysis, Survival Analysis etc.,');
	showTooltip('upload_li','File Uploads, downloads');
	showTooltip('ekycrecomm_li','Advisory Recommendations at FPMS-eKYC');
	showTooltip('ekyarchive_li','List the archives at FPMS-eKYC');
	showTooltip('ekycnewprofile_li','New FNA at FPMS-eKYC');
	
}

function popoverHandlers(){
	//client particulars
	showPopOver('popdfSelfAnnlincome',SELF_ESTANNINCOME);
	//spouse particulars
	showPopOver('popdfSpsAnnlincome',SPOUSE_ESTANNINCOME);
	//child particulars
	//showPopOver('poptxtFldDlgChldYrs2ter',CHLD_YRSTOTERITARY);
	showPopOver('poptxtFldNewChldYrs2ter',CHLD_YRSTOTERITARY);
	//cash at bank
	showPopOver('popselDlgCOBChildName',LIST_OF_CHILDNAME);
	//central provident fund
	showPopOver('poptxtFldDlgCADApplicant',LIST_OF_NAMES);
	//current assumption
	showPopOver('popcaProjSelfRoi',RET_PROJ_ROI);
	//Financial Liability
	showPopOver('popliabSelfShortmorticon',LIA_MORTGAGE);
	//Investment
	showPopOver('popAselDlgInvYrToRet',RET_TEREDU);
	showPopOver('popBselDlgInvYrToRet',RET_YRSTOTER);
	showPopOver('popselhidFundName',INVDESCRIPTION);
	showPopOver('popselDlgDividendAmt',DIVAMOUNT);
	showPopOver('popselDlgDivdBasedOn',DIV_BASEDON);
	
	showPopOver('poptxtFldDlgInvEstInvRate',INVESTRATE);
	showPopOver('poptxtFldDlgInvInstitution',INV_FD_MGR); 
	showPopOver('popaddInvestment',INVESTMENT_ICON); 
	showPopOver('mandatoryRetFlds',RETMANDATORY_ICON); 
	
//	showPopOver('backToFdFlow', STR_BACKTOFDFLW);
	showPopOver('backToFdFlowInv', STR_BACKTOFDFLW_INV);
	showPopOver('backToFdFlowLife', STR_BACKTOFDFLW_LIFE);
//	showPopOver('backToFdFlowProp', STR_BACKTOFDFLW); 
//	showPopOver('backToVehFdFlow', STR_BACKTOFDFLW); 
//	showPopOver('backNavInvCash', STRBACKTOCOB);
//	showPopOver('backToAnlRnt', STR_BACKTOANLRENT);
//	showPopOver('backToCpfAD', STR_BACKTOCPFAND); 
//	showPopOver('bkliableicon', BKLIABLE_ICON); 
//	showPopOver('backToCashAsset', STR_BACKTOCASHASSET);
//	showPopOver('backNavCashInv', STRBACKTOINV);
	showPopOver('backcpfadddec', BKPROPTY_ICON);
	
	//Life Insurance
	showPopOver('poplipAssured',LIST_OF_NAMES); 
	showPopOver('poptxtFldDlgPlanIncDate',PLAN_INCDATE);
	showPopOver('poptxtFldDlgPlanExpDate',PLAN_EXPDATE);
	showPopOver('popplansdets',PLAN_DETS); 
	showPopOver('popdeathbefdets',PLAN_DETS);
	showPopOver('popcrtlildets',PLAN_DETS);
	showPopOver('pophospdets',PLAN_DETS);
	showPopOver('popRetplgdets',PLAN_DETS);
	showPopOver('popEduplgdets',PLAN_DETS);
	
	showPopOver('popretSelfretage',RETSELFAGE);
	showPopOver('popretSpouseretage',RETSPSAGE);
	showPopOver('poplfretYrstoret',RET_YRSTOTER);
	showPopOver('poplfretIntrateused',RET_INTERESTRATE);
	
	showPopOver('poptxtFldDlgRetPlgAssBankIntRate',ASSUMPRATE);
	showPopOver('popselDlgEdPlgChldName',LIST_OF_CHILDNAME);
	showPopOver('poptxtFldDlgEdPlgTerEdcAge',LIFE_TEREDU);
	showPopOver('poptxtFldDlgEdPlgChldAge',LIFE_CHLDAGE);
	
	showPopOver('poptxtFldDlgEdPlgInfRate',INFLATE_RATE);
	
	showPopOver('popaddlifeicon',LIFE_ICON);
	
	//Property Ownership
	showPopOver('poppropYrsToRet',RET_YRSTOTER);
	showPopOver('poptxtFldDlgPropFVOnRent',PROP_FV_RET);
	showPopOver('annualrentalincome',PROPERTY_ICON);
	showPopOver('syncproperty',PROPERTY_ICON);
	
	//Vehicle Ownership 
	showPopOver('popaddvehcileicon',VEHICLE_ICON);
	
	//Retirement Planning
	showPopOver('popretSelfProjroi',CURASS_PROJ_ROI);
	showPopOver('popretSdRs',RET_SDRSCPF);
	
	showPopOver('popcoretage',INTAGE);
	showPopOver('popprojlvyrs',PROJLVNG);
	showPopOver('fetchfromotherscreen',RET_OTHERSCRN);
	showPopOver('popannualrentalincome',CF_ANLRENTAL);
	showPopOver('popincsrcSelfNempDivdamt',CF_INVESTMENT);
	showPopOver('popexpdSelfDepntcontr',CF_DEPANDANT);
	showPopOver('popexpdSelfProploan',CF_PROPERTY);
	showPopOver('popexpdSelfVehiloan',CF_VEHICLE);
	showPopOver('popexpdSelfInsurance',CF_LIFE);
	showPopOver('popnominationType',NOMINEE_TYPE);
	
	//Financial liabilities 
	showPopOver('mortgagelnicon', MORTGAGE_ICON);
	showPopOver('otherliableicon', OTHERLIABLE_ICON); 
	
	showPopOver('popvisibleretTotalPrem',LIFETOTPREM_ICON);
	
	//Adding coverages - Master Coverage
	incovrgicoAdd();
//	showPopOver('',);
//	showPopOver('',);	
//	showPopOver('',);
//	showPopOver('',);
//	showPopOver('',);
//	showPopOver('',);
//	showPopOver('',);
//	showPopOver('',);
//	showPopOver('',);
//	showPopOver('',);
//	showPopOver('',);
//	showPopOver('',);
//	showPopOver('',);
	
     //Logout Help
	showPopOver('logouthelp',LOGOUT_HELP);
	
}

function reloadProfile() {
	
	$("#btnSaveProfile").removeClass("hidden"); 
	$("#hTxtFldFnaReviewFlag").val("I");
	$(".fipaMode").each(function(){
		if($(this).val() != "D"){
			$(this).val("I");
		}
	});
//	console.log("FIPAFnaId--->"+FIPAFnaId)
	
	populateProfileDetails(null, FIPAFnaId);
	$("#analysisTypesdiv").find("input[type='checkbox']:checked").attr("checked", false);

}
function openCurrentScreen(MenuName) {
	
	showLoader();
	reloadProfile();
	
	$(MenuName).trigger("click");	
	
	
	
//	$("#sidebar-menu").find("ul li a").each(function() {
//		var elmtxt = $(this).text();
//		if (elmtxt == MenuName) {
//			$(this).click();
//		}
//	});

}

function fipaSearch() {
	 $("#ClientSearchTable").show();
	$('#ClientSearchTable').dataTable().fnClearTable();
	removeTblRows('ClientSearchTable');
	$("#ClientSearchTable").dataTable().fnDestroy();

	 var srchAdviser = $("#selAdviserSrch").val();

	 if (stafftype == STAFFTYPE_STAFF) {
		
		 
		 if(isEmpty(srchAdviser)){
			 alert("Select Adviser to Filter!");
			
			 clearClntSrchRows();
			 
			 return false;
		 }
	}

	
	var srchParams = "";
	var clntName = !isEmpty($("#txtFldSrchCustName").val()) ? $("#txtFldSrchCustName").val().toUpperCase().trim() : "%"; 
	var nric = !isEmpty($("#txtFldSrchCustNric").val()) ? $("#txtFldSrchCustNric").val().toUpperCase().trim() : "%";
	srchParams += "&strSrchClntName=" + encodeURIComponent(escape(clntName));
	srchParams += "&strSrchClntNric=" + encodeURIComponent(escape(nric));
	srchParams += "&strSrchAdviser=" + encodeURIComponent(escape(srchAdviser));

	showLoader();
	
	var parameter = "DBCALLFOR=CLIENT_SEARCH" + srchParams;

	var tblId = document.getElementById("ClientSearchTable");
	var tbody = tblId.tBodies[0]; 
	ajaxCall(
			parameter,
			servletName,
			function(Data) {

				var retval = Data;

				for ( var val in retval) {

					var tabdets = retval[val];

					if (tabdets["SESSION_EXPIRY"]) {
						window.location = BASE_URL + SESSION_EXP_JSP;
						return;
					}

					if (tabdets["DB_ERROR"]) {
						window.location = BASE_URL + DB_EXP_JSP;
						return;
					}

					for ( var tab in tabdets) {

						if (tabdets.hasOwnProperty(tab)) {

							var key = tab;
							var value = tabdets[tab];

							if (key == "CLIENT_SEARCH_NOREC") { 
								applyToastrAlert("No Record Found"); 
								clearDataTable('ClientSearchTable');
								hideLoader();
								return false;
							}

							if (key == "CLIENT_SEARCH") {
								for ( var cont in value) {
									if (value.hasOwnProperty(cont)) {

										var contvalue = value[cont];
										var rc = Number(cont);
										var crow = tbody.insertRow(cont);

										var cell0 = crow.insertCell(0);
										cell0.innerHTML =  (rc + 1);
										cell0.style.textAlign = "center";

										var setuniqid="radSrch"+(rc + 1);
										var cell1 = crow.insertCell(1); 
										cell1.innerHTML='<div class="radio radio-primary text-center"><input type="radio" name="radSrchSelectedId" id="'+setuniqid+'" onclick="populateProfileDetails(this,null)"/><label for="'+setuniqid+'">&nbsp;</label></div>';
										cell1.style.textAlign = "center";  
										
										var cell2 = crow.insertCell(2);
										cell2.innerHTML ='<div class="dhtmlTableText wraptext">'+contvalue["dfSelfName"]+'</div>';
										cell2.style.textAlign = "left"; 

										var cell3 = crow.insertCell(3);
										cell3.innerHTML = '<input type="text" readOnly="true" class="dhtmlTableText ptrcursor" style="width:73px" onmouseover="fipaTooltip(this);" /><input type="hidden"/><input type="hidden"/>';
										cell3.childNodes[0].value = contvalue["dfSelfNric"];
										cell3.childNodes[1].value = contvalue["fnaId"];
										cell3.childNodes[2].value = contvalue["strFpmsCustId"];

										var strMailId = isEmpty(contvalue["dfSelfPersemail"]) ? ""
												: contvalue["dfSelfPersemail"];
										 
										var cell4 = crow.insertCell(4);
										cell4.innerHTML ='<div class="dhtmlTableText wraptext">'+strMailId+'</div>';
										cell4.style.textAlign = "left";
										
										var cell5 = crow.insertCell(5);
										cell5.innerHTML = '<div class="dhtmlTableText wraptext">'+contvalue["dfSelfMobile"]+'</div>';
										cell4.style.textAlign = "left";
											 

										var flagFPMS = contvalue["strFpmsExists"];
										var flagFIPA = contvalue["strFipaExists"];
										var ticksymbol = "<font color='#0bbbbd'><i class='fa fa-check-square-o'></i></font>";

										var cell6 = crow.insertCell(6);
										cell6.style.textAlign = "center";
										cell6.innerHTML = (flagFIPA == "Y"
												&& flagFPMS == "Y" ? ""
												: (flagFIPA == "Y" ? ticksymbol
														: ""));

										var cell7 = crow.insertCell(7);
										cell7.style.textAlign = "center";
										cell7.innerHTML = (flagFIPA == "Y"
												&& flagFPMS == "Y" ? ""
												: (flagFPMS == "Y" ? ticksymbol
														: ""));

										var cell8 = crow.insertCell(8);
										cell8.style.textAlign = "center";
										cell8.innerHTML = (flagFIPA == "Y"
												&& flagFPMS == "Y" ? ticksymbol
												: "");

										
									


										
									}
								}
								tblRowHover("ClientSearchTable");

							}

						}
					}
				}

				hideLoader();
				 
				$("#ClientSearchTable").DataTable(
						{
							destroy : true,
							scrollX : true,
							scrollY : "auto",
							scrollCollapse : true,
							sorting : false,
							ordering : true,
							//order : [[ 0, 'asc' ]],
							order : [],
							filter : false,
							paging : true,
							info   : true,
							bLengthChange : false,
							/*pagingType : "full_numbers",*/
							dom : '<<"top" ip>flt>',
							/*columnDefs: [  { width: '20px', targets: [0,1]},
							   	             {"className": "dt-head-center text-center",targets: [0,1,2,3,4,5,6,7,8]}],	*/
							   	          columnDefs: [  { width: '20px', targets: [0,1]},
								   	             {"className": "dt-head-center text-center",targets: [0,1,2,3,4,5,6,7,8]},
								   	             { "orderable": false,targets: [0,1]} ],	
								
							fnDrawCallback : function(oSettings) {
								if (oSettings._iDisplayLength > oSettings
										.fnRecordsDisplay()) {
									$(oSettings.nTableWrapper).find(
											'.dataTables_paginate').hide();
									$(oSettings.nTableWrapper).find(
											'.dataTables_scrollBody').css(
											"height", "87vh");

								}

							},
						fnRowCallback: function(nRow, aData, iDisplayIndex, iDisplayIndexFull) {
				            //debugger;
				            var index = iDisplayIndexFull + 1;
				            $("td:first", nRow).html(index);
				            return nRow;
				        }
						// data: data
						});
			});

}

function clearClntSrchRows() {
	
//	$("#ClientSearchTable").dataTable().fnClearTable();
	
	
	$('#ClientSearchTable').dataTable().fnClearTable();
	removeTblRows('ClientSearchTable');
	$("#ClientSearchTable").dataTable().fnDestroy();
	
	$('#ProfileSearchTable').dataTable().fnClearTable();
	
	
	
	
}
 

function clearAllDetails(option) {
//	console.log("clearAllDetails");
	var txtFldInputsAll = [ 'clientsection', 'spousesection', 'childsection',
			'typesofappsec', 'goalssection', 'policysection',
			'dependantsection', 'employeincomediv','nonemployeeincomediv','annualexpendiv', 'hlinsurncesecion',
			'lifeinscsecion', 'contingencysection','contingencyplan', 'estateplansection',
			'cpfEmpContribution','centralpro','liabilitydiv', 'assumptiondiv', 'retireplandiv',
			'investdiv', 'cashassetdiv', 'cobdiv', 'areaofconcerndiv',
			'lifeinscsecion',  'clientsdeclrdiv','healthInsdetstab',
			'attachmntdiv', 'adrecomprodiv', 'adrecomswtcdiv', 'Invstobjdiv',
			'Adandreadiv', 'brofrecomdiv', 'summarydiv', 'decbyclidiv',
			'suprvsrdiv', 'lifeinscsecion', 'retirecashflowdiv' ];
//	clntreportdiv - Requirement to allow report for staff/adviser
	
	switch (option) {
	case "clear": { 
		$("#contingencysection,#cpfEmpContribution").find("input,select").each(function(){
			$(this).val("")
		});
		$("#cpfTypesDiv").find("input[type=text]").val("");//reason: hidden fields should not get emptied
		
		$.each(txtFldInputsAll, function(index, value) {
			$("#" + value).find("input[type=text]").val("");
			$("#" + value).find("select").val("");
			$("#dfSpsIdtype").val("NRIC");
			$("#dfSelfIdtype").val("NRIC");
			$("#" + value).find("input[type=checkbox]").attr("checked", false);
			$("#" + value).find("input[type=radio]").attr("checked", false);
		});

		clearDHTMLTables();
		resetMultiSelectOpts();
		eKYCOnLoading();
		prevScrFlg="";
		calInvSumryRow();//Clear Investment/SRS summary
		$(".selfcontr").val("Self");
		$(".spscontr").val("Spouse");
//		typeOfApplicationByDefault();
		$("span[class=prolength]").text("");
		$(".autoAlt").each(function(){ $(this).removeClass("alterColor");$(this).qtip('destroy',true);});
		$("#chkAllReport").attr("checked",false);
		break;

	}
	case "disable": {

		$.each(txtFldInputsAll, function(index, value) {
			$("#" + value).find("input[type=text]").val("").attr("disabled",true);
			$("#" + value).find("select").val("").attr("disabled", true);
			$("#dfSpsIdtype").val("NRIC");
			$("#dfSelfIdtype").val("NRIC");
			$("#" + value).find("input[type=checkbox]").attr("checked", false).attr("disabled", true);
			$("#" + value).find("input[type=radio]").attr("checked", false).attr("disabled", true);
		});

		
		clearDHTMLTables();
		$("#dfSelfNationality").val("Singaporean");
		$("#dfSpsNationality").val("Singaporean");
		$("#dfSpsMartsts").val("Married");
		$("#chkAllReport").attr("checked",false);
		$('#sellipIsnurObject').multiselect('disable');
		$('#sellipCoveragetype').multiselect('disable');
		$('#selmulCriticalLevelofDD').multiselect('disable');
//		typeOfApplicationByDefault();
		$("span[class=prolength]").text("");
		
		break;

	}

	default: {
		 
		eKYCOnLoading();
		clearDHTMLTables(); 
		$("#selDfSlfNationality").val("Singaporean");
		$("#dfSpsNationality").val("Singaporean");
		$("#dfSpsMartsts").val("Married");
		$(".autoAlt").each(function(){ $(this).removeClass("alterColor");$(this).qtip('destroy',true);});
		$("span[class=prolength]").text("");
		$("#chkAllReport").attr("checked",false);
		//		typeOfApplicationByDefault();
		
	}

	}

}

 
function resetMultiSelectOpts() {
	resetMultiSel('selamlLanguageUse');
	resetMultiSel('sellipIsnurObject');
	resetMultiSel('sellipCoveragetype');
	resetMultiSel('selmulCriticalLevelofDD');
	$("#dfSelfNationality").val("Singaporean");
	$("#dfSpsNationality").val("Singaporean");
	$("#dfSpsMartsts").val("Married");
	typeOfCoverage('All', 'none');
	ObjOfInsurance('All', 'none');
	$('#lifeInsNavTabsDets a[href="#lifeInsdetstab"]').css("display","none");
	$('#lifeInsNavTabsDets a[href="#liplandetails"]').css("display","none");
	$('#lifeInsNavTabsDets a[href="#healthInsdetstab"]').css("display","none");
	$('#liTypesOfCovBenefdiv').css("display", "none");
	CriticalLevelofDD('All', 'none', '', '');
	$('#lifeInsNavTabsDets a[href="#existPolicyDetstab"]').click();
	$("#lifeInsdetstab #NomineesTblDiv").css("display", "none");
}

function clearDHTMLTables() {
//	'fnahlthinsTbl',removed
	var dataTableIdsAll = [ 'childParticularsTable', 'OthRetPlgtbl','fnaAttachments',
			'IncRetPlgtbl', 'IncAssRetPlgtbl', 'RDExptbl', 'RDInctbl',
			'RDIncAsstbl', 'finGoalsTable', 'wealthAccmltTable','retCpfPayoutTable',
			'existPolicyLHIns', 'existPolicyUtlip', 'deptParticularsTable',
			'cpfAccTpupTable', 'cpfAccDeductTable', 'fnaPropOwnTblByCPF',
			'fnaVehiOwnTbl', 'fnadepntfinanceTbl', 'personalAssetTbl',
			'businessAssetTbl', 'othareaofconTbl','liPlanDetailstbl','liRaiderDetailstbl', 
			'clntReasnsTable', 'fnaadvrecTbl', 'fnaartuplanTbl',
			'fnaartufundTbl', 'fnaswrepplanTbl', 'cashOfBanksTable','srsTable',
			'cpfAccAddDedTable', 'fnaSwrepFundTbl', 'CpfSearchDetail',
			'CpfContrbRateSearch', 'fnaLINomineesTbl', 'fnaInvestmentTbl',
			'cpfAccAddDedTable', 'liRetirementPlgtbl','AutoAlterTbl' ];

	$.each(dataTableIdsAll, function(index, value) {
		$("#" + value).dataTable().fnClearTable();
		$("#" + value).find("tfoot").css("display", "none");
		showInfoError(value);
	});

	var totalTabls = [ "fnaVehiOwnTblfooter", "fnaPropOwnTblfooter" ];

	$.each(totalTabls, function(index, value) {
		$("#" + value).css("display", "none");
	});

}

function chkNRICLookup(){
	
	var nric = $("#fipaSrchNRICDlg").val();
	
	$("#txtFldSrchCustNric").val(nric);
	
	fipaSearch();
	
	$('.bs-nricbased-modal-sm').modal('hide');
	
}

function ignoreNRICLookUp(){
	
	instantSaveClientDetails();
	
	showLoader();
	
	fipaForm.action = "NewProfile.do";
	fipaForm.submit();
}

function fipaNewProfile() {
	
	
	
	/*$('.bs-nricbased-modal-sm').modal({
		  backdrop: 'static',
		  keyboard: true,
		  show:true
		});
	
	$('.bs-nricbased-modal-sm').on('shown.bs.modal', function () {
		$("#fipaSrchNRICDlg").val("");
		$("#fipaSrchNRICDlg").focus();
	});*/

	fipaForm.action = "NewProfile.do";
	fipaForm.submit();

}

function fipaSave() {
	
	
	tiggerSave="SAVE"; //instant save
	var strFNAId = $("#fipaForm input[name=fnaId]").val();
	var strLipId = $("#fipaForm input[name=lipId]").val();
	/*var htmlCompMand="<label class='control-label mandFldastrks pull-right text-right'>" + "Save Details without Mandatory</label>";
	 $("#manconfirmationalertmsgdiv #manconfalertimg").html(""); 
	 $("#manconfirmationalertmsgdiv #manconfalertmsg").html(htmlCompMand);
	 $('#manconfirmationalertmsgdiv').find(".modal-title").text("FIPA - Message"); 
	 $('#manconfirmationalertmsgdiv').modal({
		  backdrop: 'static',
		  keyboard: false,
		  show:true,
	});*/
	
	
	/*$('#manconfirmationalertmsgdiv').on('shown.bs.modal', function() {
		$("#manconfirmationalertmsgdiv").find(".modal-footer").find("button:eq(0)").click(function (){
			$("#manconfirmationalertmsgdiv").modal('hide'); 
			$("#btnSaveProfile").css("display", "none");
			$("#btnDeleteProfile").css("display", "none");
			enableComboWhenSubmit(fipaForm);
			valSelfSpsRemarks("SAVE");
		   }); 
		$("#manconfirmationalertmsgdiv").find(".modal-footer").find("button:eq(1)").click(function (){
			 $("#manconfirmationalertmsgdiv").modal('hide'); 
			if (!validateDetails()){
				return false;
			} 
			else{
				$("#btnSaveProfile").css("display", "none");
				$("#btnDeleteProfile").css("display", "none");
				enableComboWhenSubmit(fipaForm);
				valSelfSpsRemarks("SAVE");
			}
		   }); 
		});*/
	
	if (!validateDetails()){
		return false;
	}else{
		showLoader();
	}
 

	$("#btnSaveProfile").css("display", "none");
	$("#btnDeleteProfile").css("display", "none");

	enableComboWhenSubmit(fipaForm);
	
	
	valSelfSpsRemarks("SAVE");
	

	 
	/*$("#txtFldArctabCustName").val($("#txtFldClientsName").val());
	$("#txtFldArctabCustNric").val($("#txtFldClientNric").val());*/
}



function fipaDelete() {
 
	showLoader();

	alert("work in progress...");

	/*
	 * if(window.confirm("Do you want to delete all client's details?")){
	 *  // var tbl = document.getElementById('deptParticularsTable'), // tblBody =
	 * tbl.tBodies[0], // len = tblBody.rows.length; // // for(var rl=0;rl<len;rl++){ //
	 * tblBody.rows[rl].cells[1].childNodes[0].value=GLBL_MODE_DELETE; // } //
	 * 
	 * 
	 * makeTblDeleteMode(['childParticularsTable',
	 * 'finGoalsTable','wealthAccmltTable',
	 * 'existPolicyLHIns','existPolicyUtlip', 'deptParticularsTable',
	 * 'cpfAccTpupTable','cpfAccDeductTable',
	 * 'fnaPropOwnTblByCPF','fnaPropOwnTbl','fnaVehiOwnTbl',
	 * 'fnaFlowDetTbl','fnadepntfinanceTbl','personalAssetTbl',
	 * 'businessAssetTbl','othareaofconTbl', 'fnahlthinsTbl','clntReasnsTable',
	 * 'fnaLIPlanTbl','fnaInvsetPlanTbl', 'fnaadvrecTbl','fnaartuplanTbl',
	 * 'fnaartufundTbl','fnaswrepplanTbl','cashOfBanksTable',
	 * 'fnaSwrepFundTbl','CpfSearchDetail','CpfContrbRateSearch',
	 * 'CpfAllocRateSearch','cpfADuctTable',
	 * 'fnaInputLifeInsuranceTbl','liTPDBeneftbl','liRetirementPlgtbl',
	 * 'liEducationPlgtbl','fnaLINomineesTbl']);
	 * 
	 * 
	 * enableComboWhenSubmit(fipaForm);
	 * 
	 * fipaForm.action = "DeleteProfile.do"; fipaForm.submit();
	 * 
	 * 
	 *  }
	 */

	hideLoader();
}


//<!--changes done 19/06/2019 -->
function openURLPopup(crtElm,url,ScreenName){
 var masterURl=BASEURL + url;
//	console.log(masterURl);
	$(crtElm).find("span").text();
//	  e.preventDefault();
	var frame  = "";
	if(ScreenName == "Master Current Assumption"){ 
		frame=$("#currentAssumptiondiv").clone();
	}else{
		frame="<iframe id='thedialog' width='100%' height='100%' frameborder='0' scrolling='yes' allowtransparency='true' src='"+masterURl+"'></iframe>"
	}
	
	$("#openURL_Dialog #cloneURLId").html(frame);
//	$("#openURL_Dialog #thedialog").attr('src', msg);
	$("#cloneURLId #currentAssumptiondiv").find("input").prop("readonly",true);
	$("#cloneURLId #currentAssumptiondiv").css("border","1px solid #029978"); 

	$("#openURL_Dialog #cloneURLId").find("");
	    $('#openURL_Dialog').modal({
		  backdrop: 'static',
		  keyboard: true,
		  show:true
	});
	
	$("#openURL_Dialog #cloneURLId #openURLvalue").val("false");
		$('#openURL_Dialog').on('shown.bs.modal', function() {  
		$(this).find(".modal-title").text(ScreenName); 
	    $(this).find(".modal-header").find("button:eq(0)").click(function (){  
//			  $("#openURL_Dialog #thedialog")attr('src', "");
	    	$("#btnURL").css("display",""); 
	    	$("#openURLvalue").val("true");
//	    	$("#mainlayout #headerlayout").css("display","");
//	    	$("#mainlayout #sidebar-wrapper").css("display","");
//	    	$("#mainlayout #footerLayout").css("display","");
//
//			$("#layoutbody").removeAttr("class");
//			$("#layoutbody").attr("class","col-xs-12 col-sm-12 col-md-10 col-lg-10 pull-right");
			$("#currentAssumptiondiv").find("input").css("readonly",false);
			  $('#openURL_Dialog').modal('hide'); 
	    	});
	    
		});
}
 
function validateDetails() {

	var fipaForm = document.forms["fipaForm"];

	if (!(validateMandatoryOfTypesOfApplication(fipaForm)))
		return;

	if (!(validateMandatoryOfPersonalParticulars(fipaForm)))
		return;

	if(!isEmpty($("#dfSelfMartsts").val())){
	if ($("input:checkbox[name='txtFldAnalyisFor']:eq(1)").is(":checked")  &&  ($("#dfSelfMartsts").val() != "Single")  ) {
		if (!(validateMandatoryOfSpouseParticulars(fipaForm)))
			return;
		}
	}
	
	if(!valchildTbl())return; 
	
	if(!valfinGlsTbl())return;
	if(!valwlthaccTbl())return; 
	
	if(!valdeptTbl())return;
	
	if(!valothretTbl())return;	
	if(!valincretTbl())return;	
	if(!valincassrtTbl())return;
	
	if (!(validateMandatoryOfLifeInsurance()))
		return;
	

	if (!(validateMandatoryOfHealthInsuranceNeeds(fipaForm)))
		return;
	
	if(!valpropTbl())return;
	
	if(!valCobTbl())return;
	
	if(!valperastTbl())return; 
	if(!valbusnastTbl())return;	
	if(!valvehTbl())return;
	
	if(!valadctTbl())return;
	
	if(!valarcTbl())return;  

	if (!(validateMandatoryOfAMLDeclaration(fipaForm)))
		return;	
	
	if(!validateAttchDetails())return;
	
	/*
	 * Need to re-visit. Based on condition it will validate.
	 * 
	 * if(!(validateMandatoryOfNewProductTopUps(fipaForm))) return;
	 * 
	 * if(!(validateMandatoryOfSwitchingRepl(fipaForm))) return;
	 * 
	 * if(!(validateMandatoryOfReasonsRecom(fipaForm))) return;
	 * 
	 * if(strMgrFlg == "Y"){
	 * if(!(validateMandatoryOfSuperviorDeclaration(fipaForm))) return; }
	 * 
	 * if(!(validateMandatoryOfDeclarationByClient(fipaForm))) return;
	 */
	
	/*table Validation entries*/
	
	  
	 
	
	
	 
	

	
	 
	 
	
	
//	if(!valreasnTbl())return; 
//	if(!valadRcPlnTbl())return; 
//	if(!valadRcFdTbl())return; 
//	if(!valswRplPlnTbl())return; 
//	if(!valswRplFdTbl())return;  

//	if(!valhlthGlsTbl())return; 
	
	
	/*table Validation entries*/
	return true;

}
function valSelfSpsRemarks(ACTION){
	var dfRemarks = $("#dfRemarks").val();
	var flag=false;
//	if (!isEmpty(dfRemarks)) {
		var htmlComp="<fieldset class='fieldsetClsborder'>" +
				"<legend class='customFIPAStyle'>" +
						"Adviser's Profile Summary</legend>" +
						"<textarea name='DlgdfRemarks' id='DlgdfRemarks' " +
								"class='form-control' maxlength='1000' " +
								"cols='100' rows='10'></textarea></fieldset>";
//										"cols='100' rows='10'>"+dfRemarks+"</textarea></fieldset>";
     
		$("#confirmationalertmsgdiv #confalertimg").html(""); 
		$("#confirmationalertmsgdiv #confalertmsg").html(htmlComp);
		hideLoader();
		$('#confirmationalertmsgdiv').modal({
			  backdrop: 'static',
			  keyboard: false,
			  show:true,
		});
		
		$('#confirmationalertmsgdiv').on('shown.bs.modal', function() {  
			$("#DlgdfRemarks").focus();
			$('#confirmationalertmsgdiv').find(".modal-title").text("Any fact finding remarks on profile ?");
			$('#confirmationalertmsgdiv').find(".modal-footer").find("button:eq(0)").unbind(); 
			$('#confirmationalertmsgdiv').find(".modal-footer").find("button:eq(0)").click(function (){
				showLoader();
				
				$("#dfRemarks").val($("#DlgdfRemarks").val()); 
				
				if(ACTION == "SAVE"){ 
					
					
//					DHTML IDS RESET
//					$(".fipaMode").val("I");
//					$(".fipaMode").next().val("");
					
					$(".fipaMode").each(function(){
						if($(this).val() != "D"){
							$(this).val("I");
							$(this).next().val("");
						}
					});
					
					
					
//					DHTML IDS RESET
					
//					FORM IDS RESET
					$(".formHiddenIds:not(#lipId)").val("");
					$(".cpfpkid").val("");
					$(".formHiddenIds:not(#lipRefId)").val("");
//					FORM IDS RESET
					//setAllLayoutColor();
					
					fipaForm.action = "SaveProfile.do";
					fipaForm.submit();
					
					
				}else if(ACTION == "UPDATE"){
					
					//setAllLayoutColor();
//					console.log("UpdateProfile")
					fipaForm.action = "UpdateProfile.do";
					fipaForm.submit();
				}
				
				$('#confirmationalertmsgdiv').modal('hide');  
				 
			});
			
			$('#confirmationalertmsgdiv').find(".modal-footer").find("button:eq(1)").click(function (){
				$("#btnSaveProfile").css("display", "block");	
			});
			
			
		});
		
 
	
 
}

function validateMandatoryOfLifeInsurance() {
	var lifeOwner = $("#lipOwner").val();

	if (!isEmpty(lifeOwner)) {

		
		if (!(validateFocusFlds('lifeInsdetstab', 'lipAssured', Li_ASS)))
			return;
		if (!(validateFocusFlds('lifeInsdetstab', 'lipCompany', Li_INS)))
			return;
		if (!(validateFocusFlds('lifeInsdetstab', 'lipPolicyno', Li_POL)))
			return;
		if (!(validateFocusFlds('lifeInsdetstab', 'policyStatus', Li_POLSTS)))
			return;
		if (!(validateFocusFlds('lifeInsdetstab', 'lipIncepdate', Li_DATE)))
			return; 
//		if (!(validateFocusFlds('lifeInsdetstab', 'lipPlanname', Li_PLAN)))
//			return; 
		if(!isEmpty($("#lipMaturityVal").val())){
			if (!(validateFocusFlds('lifeInsdetstab', 'lipMaturityDate', Li_MATDATE)))
				return;
		}
		if(!isEmpty($("#lipMaturityDate").val())){
			if (!(validateFocusFlds('lifeInsdetstab', 'lipMaturityVal', Li_MATVALUE)))
				return;
		}

	}
	return true;
}
 

function validateMandatoryOfPersonalParticulars(fipaForm) {
 
	if(!(validateFocusFlds('clientinformation','dfSelfName',SELF_NAME))) return;  
	if(!(validateFocusFlds('clientinformation','advstfId',SELF_ADVSTF))) return;  
	if(!(validateFocusFlds('clientinformation','dfSelfDob',SELF_DOB))) return;  
	if(!(validateFocusFlds('clientinformation','dfSelfNationality',SELF_NATION))) return;  
//	if(!(validateFocusFlds('clientinformation','dfSelfNric',SELF_NRIC))) return;  
	if(!(validateFocusFlds('clientRegaddress','dfSelfHomeaddr',SELF_HMEADDR))) return;  
	if(!(validateFocusFlds('clientRegaddress','dfSelfHomepostal',SELF_RPOSTAL))) return;  
	if(!(validateFocusFlds('clientRegaddress','dfSelfHomecntry',SELF_RCNTRY))) return;  
	if(!(validateFocusFlds('clientmailaddress','dfSelfMailaddr',SELF_MAILADDR))) return;  
	if(!(validateFocusFlds('clientmailaddress','dfSelfMailpostal',SELF_MPOSTAL))) return;  
	if(!(validateFocusFlds('clientmailaddress','dfSelfMailcntry',SELF_MCNTRY))) return; 

	return true;
}
function validateMandatoryOfSpouseParticulars(fipaForm) {
 
	if(!(validateFocusFlds('spouseinformation','dfSpsName',SPOUSE_NAME))) return;  
	if(!(validateFocusFlds('spouseinformation','dfSpsDob',SPOUSE_DOB))) return;  
	if(!(validateFocusFlds('spouseinformation','dfSpsNationality',SPOUSE_NATION))) return;  
//	if(!(validateFocusFlds('spouseinformation','dfSpsNric',SPOUSE_NRIC))) return;  
	if(!(validateFocusFlds('spouseaddress','dfSpsHomeaddr',SPOUSE_HMEADDR))) return;  
	if(!(validateFocusFlds('spouseaddress','dfSpsHomepostalcode',SPOUSE_RPOSTAL))) return;  
	if(!(validateFocusFlds('spouseaddress','dfSpsHomecntry',SPOUSE_RCNTRY))) return;  
	if(!(validateFocusFlds('spousemailaddress','dfSpsMailaddr',SPOUSE_MAILADDR))) return;  
	if(!(validateFocusFlds('spousemailaddress','dfSpsMailpostal',SPOUSE_MPOSTAL))) return;  
	if(!(validateFocusFlds('spousemailaddress','dfSpsMailcntry',SPOUSE_MCNTRY))) return;  

	return true;

}
function validateMandatoryOfTypesOfApplication(fipaForm) {
 
	var anyunchk = 0;
	$(".analysischkbox").each(function() {
		if ($(this).prop("checked")) {
			anyunchk++;
		}
	});

	if (anyunchk == 0) {
		showAlert(TOAALYSFORSELF, "");
//		$("#typesofappln_li").trigger("click");
		openClientSection();
		$("#divAnalysisFor").addClass("panel-danger").removeClass("panel-default");
		return false;
	}

	var anyunchkType = 0;
	$(".analyTypeChkbox").each(function() {
		if ($(this).prop("checked")) {
			anyunchkType++;
		}
	});

	if (anyunchkType == 0) {
		showAlert(TOPAYSTYPES);
//		$("#typesofappln_li").trigger("click");
		openClientSection();
		$("#divAnalysisTypes").addClass("panel-danger").removeClass("panel-default");
		return false;
	}
 
	return true;
}

function validateMandatoryOfHealthInsuranceNeeds(fipaForm) {

	//if (fipaForm.ppInspolicyflg.value == 'Y') {
	//	if (isEmpty($("#ppInspolicydets").val())) {
	//		if(!(validateFocusFlds('healthinsurancepp','ppInspolicydets',HEALTHINS_RMKS))) return;  
	//		return false;
	//	}
	//}
	return true;
}

function validateMandatoryOfAMLDeclaration(fipaForm) {

	if (fipaForm.amlIntprtExist.value == 'Y') {
		
		 
		if(!(validateFocusFlds('amlinterpreter','amlIntprtName',INT_NAME))) return;  
		if(!(validateFocusFlds('amlinterpreter','amlIntprtNric',INT_NRIC))) return; 
		if(!(validateFocusFlds('amlinterpreter','amlIntprtMobile',INT_CONTACT))) return;  
		if(!(validateFocusFlds('amlinterpreter','amlIntprtRelat',INT_REL))) return;  
	}

	return true;
}

function validateMandatoryOfNewProductTopUps(fipaForm) {
	//	 
	// if(!(fipaForm.chkAdvrecFamIncProt.checked ||
	// fipaForm.chkAdvRecMedDisIncProt.checked
	// ||fipaForm.chkAdvRecSvForedn.checked
	// || fipaForm.chkAdvRecInvestment.checked
	// ||fipaForm.chkAdvRecRetirement.checked ||fipaForm.chkAdvRecOth.checked
	// )){
	// showAlert(CHECK_PRODUCT,chkAdvrecFamIncProt);
	// return false;
	// }
	return true;
}

function validateMandatoryOfSwitchingRepl(fipaForm) {

	if (!(fipaForm.srQ1Flg.checked)) {
		showAlert(SWTCH_QUEST1, srQ1Flg);
		return false;
	}

	if (fipaForm.srQ1Flg.checked) {

		document.getElementById('spanAdvRecomSwRepConf').style.display = "inline";
		document.getElementById('srQ1Dets').readOnly = false;

		if (isEmpty(fipaForm.srQ1Dets.value)) {
			showAlert(SWTCH_QUEST1REMK, srQ1Dets);
			return false;
		}

	}

	var totradSwRepAdvbyFlg = document.getElementsByName("srQ2Flg").length;
	for (var i = 0; i < totradSwRepAdvbyFlg; i++) {
		if (!(document.getElementsByName("srQ2Flg")[0].checked || document
				.getElementsByName("srQ2Flg")[1].checked)) {
			showAlert(SWTCH_QUEST2, document.getElementsByName("srQ2Flg")[0]);
			return false;
		}
	}

	var totradSwrepDisadvgFlg = document.getElementsByName("srQ3Flg").length;
	for (var i = 0; i < totradSwrepDisadvgFlg; i++) {
		if (!(document.getElementsByName("srQ3Flg")[0].checked || document
				.getElementsByName("srQ3Flg")[1].checked)) {
			showAlert(SWTCH_QUEST3, document.getElementsByName("srQ3Flg")[0]);
			return false;
		}
	}

	var totradSwrepProceedFlg = document.getElementsByName("srQ4Flg").length;
	for (var i = 0; i < totradSwrepProceedFlg; i++) {
		if (!(document.getElementsByName("srQ4Flg")[0].checked || document
				.getElementsByName("srQ4Flg")[1].checked)) {
			showAlert(SWTCH_QUEST4, document.getElementsByName("srQ4Flg")[0]);
			return false;
		}
	}
	return true;
}

function validateMandatoryOfReasonsRecom(fipaForm) {
	$("#clntReasnsTable tbody").find('tr.odd').each(function() {
		$(this).remove();
	});
	var index = $("#clntReasnsTable tbody").find("td").length;
	if (!(index > 0)) {
		showAlert(REASONS_RECOM);
		return false;
	}
	return true;
}

function validateMandatoryOfDeclarationByClient(fipaForm) {
	var totchkCdAgrFlg = document.getElementsByName("cdAgreeFlg").length;
	for (var i = 0; i < totchkCdAgrFlg; i++) {
		if (!(document.getElementsByName("cdAgreeFlg")[0].checked || document
				.getElementsByName("cdAgreeFlg")[1].checked)) {
			showAlert(DECLARATION, document.getElementsByName("cdAgreeFlg")[0]);
			return false;
		}
	}
	return true;

}

function validateMandatoryOfSuperviorDeclaration(fipaForm) {

	var totchkCdMgrAgrFlg = document.getElementsByName("mgrAgreeFlag").length;
	for (var i = 0; i < totchkCdMgrAgrFlg; i++) {
		if (!(document.getElementsByName("mgrAgreeFlag")[0].checked || document
				.getElementsByName("mgrAgreeFlag")[1].checked)) {
			showAlert(SUP_DECLARATION, document
					.getElementsByName("mgrAgreeFlag")[0]);
			return false;
		}
	}

	if (fipaForm.mgrAgreeFlag.value == 'DISAGREE') {
		if (isEmpty(fipaForm.mgrFollowupRemarks.value)) {
			showAlert(SUP_REASON, mgrFollowupRemarks);
			return false;
		}
	}

	return true;
}

function jsonDataPopulate(jsnData, tab) {


	for ( var cont in jsnData) {
 

		if (jsnData.hasOwnProperty(cont)) {

			var contvalue = jsnData[cont];
			var elemObj = eval('fipaForm.' + cont);
			
//			console.log(cont +"="+contvalue)
 
			if (elemObj) {

				elemObj.value = contvalue;

				if (elemObj.type == "checkbox") {
					if (contvalue == 'Y') {
						elemObj.checked = true;
						$(elemObj).prop("checked", true);
					}
				}

				if (elemObj.type == "radio") {
					if (contvalue == "Y" || elemObj.value == contvalue) {
						elemObj.checked = true;
						$(elemObj).prop("checked", true);
					}
				}

				if (elemObj.type == "select-one") {
					$("#" + cont).val( contvalue );
					if(cont == "retSelfSDRSAmt" || cont == "retSpsSDRSAmt" || cont == "retFamSDRSAmt" ){
						selectNullOrBlank($("#" + cont),contvalue);
					} 
				}
 

			}
		}
	}
}

function populateElmObjValues(cont, contvalue) {

	analysisCheckEvent(this, 'All'); 
 
	

	if (cont == "txtFldChldName") {
		addChildNameDyn($("#txtFldChldName").val());
	}

	 
//	 Cpf Contribution - Fetch From Master
	if(isEmpty($("input[name=ccEmpleContrbSelf]").val()  ||  $("input[name=ccEmplrContrbSelf]").val() )){
		calSelfCpfMastMthContr();
	} 
	if(isEmpty($("input[name=ccEmpleContrbSps]").val()  || $("input[name=ccEmplrContrbSps]").val())){
		calSpsCpfMastMthContr();
	} 
	
 

}

function jsonTableDataPopulate(jsnData, tab, changetoIModeFlag) {

	for ( var cont in jsnData) {

		var contvalue = jsnData[cont];

		if (tab == "DEPENDANT_DETS") {
			getdeptRows(contvalue);

		}

		if (tab == "CHILD_DETS") {

			getChildRows(contvalue);

		}


		if (tab == "RET_CPFLIFE_DETS") {

			getCpfLifeRows(contvalue);
		}
		
		if (tab == "FINGOALS_DETS") {

			getFinGoalsRows(contvalue);

		}

		if (tab == "SAVINV_DETS") {

			getwlthaccRows(contvalue);

		} 

		if (tab == "CPFTP_DETS") {

			getCpfTpupRows(contvalue);

		}

		if (tab == "CPFDT_DETS") {

			getCpfDedtRows(contvalue);

		}

		if (tab == "FUNDFLW_DETS") {

			getFundFlwRows(contvalue);
		}
		if (tab == "CONTGDEPN_DETS") {

			getContgDepnRows(contvalue);
		}

		// if(tab == "PROPOWN_DETS"){
		// getPropOwnRows(contvalue);
		// }

		if (tab == "RDOTHER_PAY") {

			getothretRows(contvalue); 
		}

		if (tab == "RDINCOME_DETS") {

			getincretRows(contvalue); 
		}

		if (tab == "RDINCASS_DETS") {

			getincassrtRows(contvalue); 
		}

		if (tab == "CPF_ADD_DED_DETS") {

			getCADRows(contvalue);
		}

		if (tab == "BUSASSET_DETS") {

			getBuisAsstRows(contvalue);
		}

		if (tab == "PERASSET_DETS") {

			getPerAssetRows(contvalue);
		}

		if (tab == "FGACCHLT_DETS") {

			getproAHRows(contvalue);
		}

		if (tab == "FGFAMAST_DETS") {

			getproFARows(contvalue);
		}
		if (tab == "FGSAVINV_DETS") {

			getproSIRows(contvalue);
		}
		if (tab == "FGCHDEDU_DETS") {

			getproCERows(contvalue);
		}

		if (tab == "OTHAREA_DETS") {

			getAreaConRows(contvalue);
		}

//		if (tab == "RCMRSN") {
//
//			getReasonsRows(contvalue);
//		}

		if (tab == "PROPOWNCPF_DETS") {

			getPropOwnCpfRows(contvalue);
		}

		if (tab == "VEHOWN_DETS") {

			getVehOwnRows(contvalue);
		}

		
		
		if (tab == "AUTO_ALTER") {

			populateAutoAlter(contvalue);
		}
		
		if (tab == "ATTACHMENT_DETS") { 
			getAttchRows(contvalue);
		}

		
//		if (tab == "RCMPRO_DETS") {
//
//			getRcmPlnRows(contvalue);
//		}

		// if(tab == "RCMPLAN_DETS"){
		// getRcmPlnRows(contvalue);
		// }

//		if (tab == "RCMFUND_DETS") {
//			getFdPlnRows(contvalue);
//		}
//
//		if (tab == "SWTHPLAN_DETS") {
//			getSwrepPlanRows(contvalue);
//		}
//
//		if (tab == "SWTHFUND_DETS") {
//			getSwrepFundRows(contvalue);
//		}

		if (tab == "CASHATBANKS_DETS") {
			getCobRows(contvalue);

		}
		
		if (tab == "SRS_DETS") {
			getcshSRSRows(contvalue);

		}
		if (tab == "HEALTHINS_DETS") {
//			getHealthInscRows(contvalue);
		}
		
		/*LIFE INS
		if (tab == "CLIENT_DEATHBENF_SRCH") {
			getliDthBenfRows(contvalue);
		}
		if (tab == "CLIENT_CRITICAL_SRCH") {
			getlicrtlnsRows(contvalue);
		}
		if (tab == "CLIENT_HOSP_SRCH") {
			getlihospRows(contvalue);
		}
		*/
		if (key == "CLIENT_COVERAGE_SRCH"){  
				getAllCoverage(contvalue); 

		}
		
		if (tab == "CLIENT_PLANPRO_SRCH" || tab == "FPMS_POLICYPLAN_DETS") { 
			getliBasRidDetRows(contvalue, tab); 
		}
		  /* LIFE INS
		if (tab == "CLIENT_BENEFDATA_SRCH") {
			getDsbltyRows(contvalue);
		}
	
		*/
		if (tab == "CLIENT_CHLDEDUDATA_SRCH") {
			getlieduplgRows(contvalue,[]);
		}

		if (tab == "CLIENT_MVDATA_SRCH") {
			getRetPlgRows(contvalue);
		}
		
		if (tab == "CLIENT_NOMDATA_SRCH") {
			getNomNameRows(contvalue);
		}

		if (tab == "INPUTINVESTMENT_DETS") {
			
			addInptInvstRows(contvalue);

		}

	}
}

function populateProfileDetails(selobj, FIPAFnaId) {
	showLoader(); 
	clearAllDetails('clear');
	$('#ProfileSearchTable').dataTable().fnClearTable();
//	removeTblRows('ProfileSearchTable');
	$("#ProfileSearchTable").dataTable().fnDestroy();
	$("#ProfileSearchTable").find("input,select,textarea").val("");
	
//	removeTblRows('ProfileSearchTable');

	var fnaId = "";
	var clientName = "";
	var clientNRIC = "";
	var custId = "";

	if ($(selobj)) {
		fnaId = $(selobj).closest("tr").find("td").eq(3).find("input").eq(1).val();
		clientName = $(selobj).closest("tr").find("td").eq(2).find("div").eq(0).text();
		clientNRIC = $(selobj).closest("tr").find("td").eq(3).find("input").eq(0).val();
		custId = $(selobj).closest("tr").find("td").eq(3).find("input").eq(2).val();
		$("#txtFldArctabCustName").val(clientName);
		$("#txtFldArctabCustNric").val(clientNRIC);
		$("#txtFldArctabCustName").prop("readonly",true);
		$("#txtFldArctabCustNric").prop("readonly",true);
		
		$("#txtFldNavCustName").val(clientName);
		$("#txtFldNavCustNric").val(clientNRIC);
		$("#txtFldNavCustName").prop("readonly",true);
		$("#txtFldNavCustNric").prop("readonly",true);
		
	
	} else {
		fnaId = selobj.parentNode.parentNode.childNodes[3].childNodes[1].value;
		clientName = selobj.parentNode.parentNode.childNodes[2].childNodes[0].innerHTML;
		clientNRIC = selobj.parentNode.parentNode.childNodes[3].childNodes[0].value;
		custId = selobj.parentNode.parentNode.childNodes[3].childNodes[2].value;
		$("#txtFldArctabCustName").val(clientName);
		$("#txtFldArctabCustNric").val(clientNRIC);
		$("#txtFldArctabCustName").prop("readonly",true);
		$("#txtFldArctabCustNric").prop("readonly",true);
		
		$("#txtFldNavCustName").val(clientName);
		$("#txtFldNavCustNric").val(clientNRIC);
		$("#txtFldNavCustName").prop("readonly",true);
		$("#txtFldNavCustNric").prop("readonly",true);
	}

	var parameter;

	if (FIPAFnaId != null && FIPAFnaId != '' && FIPAFnaId != 'null') {
    
		var clientlist = [];
		clientlist = makeArrSplit(FIPAFnaId, ','); 
		parameter = "DBCALLFOR=OPEN_CLIENT_PROFILELIST&strCustId="+ clientlist[3].trim() +"&strClientName="+ clientlist[1].trim()
				+ "&strClientNRIC="	+ clientlist[2].trim() + "&strFNAId=" + clientlist[0].trim();
		 
	} else {
		
		parameter = "DBCALLFOR=OPEN_CLIENT_PROFILELIST&strCustId=" + custId
				+ "&strClientName=" + clientName + "&strClientNRIC="+ clientNRIC + "&strFNAId=" + fnaId;
	}

	var tblId = document.getElementById("ProfileSearchTable");
//	$("#ProfileSearchTable").append("<tbody></tbody>");
	var	tbodyProf = tblId.tBodies[0]; 
	ajaxCall(
			parameter,
			servletName,
			function(Data) {
				hideLoader();
				profileLoad="PROFILE_LOAD";
				var retval = Data;

				for ( var val in retval) {

					var tabdets = retval[val];

					if (tabdets["SESSION_EXPIRY"]) {
						window.location = BASE_URL + SESSION_EXP_JSP;
						return;
					}
					if (tabdets["DB_ERROR"]) {
						window.location = BASE_URL + DB_EXP_JSP;
						return;
					}

					for ( var tab in tabdets) {

						if (tabdets.hasOwnProperty(tab)) {
							var key = tab;
							var value = tabdets[tab];
//							console.log(key + "=" + value)
							if (key == "NO_CLIENT_PROFILE_LIST") {
								
								clearAllWhnNoProfileCrtdFipa();

								$(".analysischkbox").each(function() {$(this).prop("checked", true);
											chkedJSONCollection($(this),'appAnalysisFor');
											var cssclass = $(this).attr( "data-class");
											$("." + cssclass).prop("disabled", false);
										});
//								<!--   Thulasy 16.07.2019 -->
								$( "input:checkbox[name=txtFldClientChoice]:eq(0)").click();
								$( "input:checkbox[name=txtFldClientChoice]:eq(1)").click();
						
//								$(
//										"input:checkbox[name=txtFldClientChoice]:eq(1)")
//										.click();
//								$(
//										"input:checkbox[name=txtFldClientChoice]:eq(3)")
//										.click();

								$('#dobSlfpicker').datetimepicker(dobOptions);
								$('#dobSpspicker').datetimepicker(dobOptions);
								

								getClientDetailsFromFPMS(clientName,clientNRIC, custId);  
								$("[name=custId]").val(custId);  
								$("#dfSelfName").val(clientName);
								
//								ilifeInsPremium('FETCH');//old life calc
								
								setTimeout(function(){
									instantSaveClientDetails();
								}, 500);
								
								

							}
							if (key == "CLIENT_PROFILE_LIST") {
								
//								profileTbl.clear().draw();
								
							

								var jsnData = value;

								for ( var cont in jsnData) {
									
									if (jsnData.hasOwnProperty(cont)) {
									
										var crow = tbodyProf.insertRow(cont);

										var contvalue = jsnData[cont];

										
										var cell0 = crow.insertCell(0);
										cell0.innerHTML =  '<input type="text"  readOnly="true" class="sinoFieldDHTML ptrcursor" style="width:35px;"/>';
 	
										var cell1 = crow.insertCell(1);
										cell1.innerHTML = '<div class="radio radio-primary text-center"><input type="radio" name="radSrchSelectedId" onclick="chkLatestProfDets(this,'+ (Number(cont) + 1) + ')"/><label>&nbsp;</label></div>';
										
										var cell2 = crow.insertCell(2);
										cell2.innerHTML = '<input type="hidden" readOnly="true"  class="dhtmlTableText ptrcursor"  style="text-align:left;"/>'
												+ '<input type="hidden"/><input type="hidden"/><input type="hidden"/>'+'<span>'+contvalue["strFnaCrtdDate"]+'</span>';

										var listval = contvalue["strFnaAnalysisList"];
										var texttoshow = "";
										var arr = listval.split("<li>");
										var cnt = (listval.match(/<li>/g) || []).length;
										for ( var l in arr) {
											texttoshow = arr[l];
										}

										if (cnt > 1) {
											texttoshow = "<div style='display:inline'> ..."
													+ texttoshow
													+ "<img data-image='Show' align='right' onmouseover='profileTooltip(this);' src='images/menuicons/icoDown.png' style='width:20px' ><div>";

										} else {
											texttoshow = contvalue["strFnaAnalysisList"];
										}
										
										var cell3 = crow.insertCell(3);
										cell3.innerHTML = "<div data-image='Show'><span data-originaltext='"+ contvalue["strFnaAnalysisList"]+ "'><ol>"+ texttoshow+ "</ol></span></div>";

										//Thulasy 16.07.2019
										var cell4 = crow.insertCell(4);
										cell4.innerHTML = "SIMPLIFIED";//contvalue["strFnaType"]
										
										var cell5 = crow.insertCell(5);
										cell5.innerHTML = contvalue["strFnaApplicants"];
										
//										var cell6 = crow.insertCell(6);
//										cell6.innerHTML = contvalue["strFnaAnaReplace"];
										
										var cell7 = crow.insertCell(6);
										cell7.innerHTML = "<div><textarea readOnly='readOnly' rows='3' onmouseover='fipaTooltip(this);'>"+contvalue["strFnaAdvRemarks"]+"</textarea></div>";
 

										var cell8 = crow.insertCell(7);
										cell8.innerHTML  = "-";
										
										var cell9 = crow.insertCell(8);
										cell9.innerHTML = "-";
										
//										profileTbl.row.add(	[ cell0, cell1, cell2, cell3,cell4, cell5, cell7, cell8, cell9 ]).draw(false);

//										var rowCount = $('#ProfileSearchTable tbody tr').length;
//										var $lastRow = $("#ProfileSearchTable tbody tr:last");

//										$lastRow.find("td:eq(0)").find('input:eq(0)').val( ( $lastRow.index() + 1 ));
										cell0.childNodes[0].value= Number(cont)+1;

//										$lastRow.find("td:eq(1)").find("input:first").attr('id',"radSrch"+$lastRow.index())
//										.parent().find('label').attr('for',"radSrch"+$lastRow.index());
										
										
										cell2.childNodes[0].value=contvalue["strFnaCrtdDate"];
										cell2.childNodes[1].value=contvalue["strFnaId"];
										cell2.childNodes[2].value=contvalue["strFnaCustId"];
										cell2.childNodes[3].value=contvalue["strFnaType"];
										
										
//										$lastRow.find("td:eq(2)").find('input:eq(0)').val(contvalue["strFnaCrtdDate"]);
//										$lastRow.find("td:eq(2)").find('input:eq(1)').val(contvalue["strFnaId"]);
//										$lastRow.find("td:eq(2)").find('input:eq(2)').val(contvalue["strFnaCustId"]);
//										$lastRow.find("td:eq(2)").find('input:eq(3)').val(contvalue["strFnaType"]);

										$("#txtFldNavCustName").val(contvalue["strFnaCustName"]);
										$("#txtFldNavCustNric").val(contvalue["strFnaCustNRIC"]);
										$("#txtFldNavCustName").prop("readonly",true);
										$("#txtFldNavCustNric").prop("readonly",true);
										
										$("#txtFldArctabCustName").val(contvalue["strFnaCustName"]);
										$("#txtFldArctabCustNric").val(contvalue["strFnaCustNRIC"]);
										$("#txtFldArctabCustName").prop("readonly",true);
										$("#txtFldArctabCustNric").prop("readonly",true);
										
//										$("span[id='txtFldClientName']").text(contvalue["strFnaCustName"]);
//										$("span[id='txtFldClientNric']").text(contvalue["strFnaCustNRIC"]);
//										
//										$("[name='txtFldClientName']").val(contvalue["strFnaCustName"]);
//										$("[name='txtFldClientNric']").val(contvalue["strFnaCustNRIC"]);

										
//										if(rowCount > 5){
//											$lastRow.hide();
//										}
									}
									

								}
								
								

								$("#ProfileSearchTable").DataTable(
										{
											destroy : true,
											scrollX : true,
											scrollY : "87vh",
											scrollCollapse : true,
											sorting : false,
											//ordering : false,
											ordering : true,
											order : [],
											filter : false,
											paging : true,
											info:true,
											lengthMenu: [[5,  -1], [" -- Latest 5 Profile Archive --"," -- All Profile Archive -- "]],
//											pagingType : "full_numbers",
//											dom : '<<"top" flt>',
//											columnDefs: [  { width: '20px', targets: [0,1]},
//											   	             {"className": "dt-head-center text-center",targets: [0,1,2,3,4,5,6,7,8]}],		 
											columnDefs: [ { "orderable": false,targets: [0,1]} ],
												
											fnDrawCallback : function(oSettings) {
												if (oSettings._iDisplayLength > oSettings
														.fnRecordsDisplay()) {
													$(oSettings.nTableWrapper).find(
															'.dataTables_paginate').hide();
													$(oSettings.nTableWrapper).find(
															'.dataTables_scrollBody').css(
															"height", "87vh");

												}

											},
										// data: data
										fnRowCallback: function(nRow, aData, iDisplayIndex, iDisplayIndexFull) {
								            //debugger;
								            var index = iDisplayIndexFull + 1;
								            $("td:first", nRow).html(index);
								            return nRow;
								        }
										});
								
								$("#ProfileSearchTable_paginate").hide();
								
								
								
								$('.sidebar-menu li:eq(1)').removeClass("hidden");
								/*$("#profilelist_li").trigger("click");*/

								var def = $("#hTxtMenuName").val();
								
								
									
								if (FIPAFnaId != null && FIPAFnaId != '' && FIPAFnaId != 'null') {
//									$("span[class=prolength]").text($('#ProfileSearchTable tbody tr:visible').length);
								}

								if (def == "#searchpage" || def == "Default") {
									
//									$(".menu_section>ul.hidden").removeClass("hidden");
//									openDivForClient('profilepage',	'profilesection', 'profile_li',	'Profile Summary');
								}
								 
								if ((custId == null)) {
									$("#ProfileSearchTable tr:eq(1)").find(	"td:eq(1)").find("input[type='radio']").click();
								}
								
							
								$("#profilepage").find(":input").prop("readOnly",true);
								
							}
						}
					}
				}

//				profileTbl.draw();
//				$("#ProfileSearchTable").find("textarea").prop("readonly","true");
				
				
				
				
				
				
			});
	
	
	
	//$('li > a[href="#Archive_List"]').click();
	$("#ArcProTab").attr('checked', true).trigger('click');
	$("#txtNavClientDtls").show();
	/*$("#typesofappln_li").addClass("hidden");*/
	
}
var globalchklatestid;
function chkLatestProfDets(selobj, chklatestid) {
	
	
//	console.log("chklatestid ->"+chklatestid);
	globalchklatestid=chklatestid;
	clearAllDetails('clear');
	
	$("#ProfileOpenFlag").val("Y");

	if (chklatestid == 1) {
		
		
		dataTableFlg=false;
		populateSearchDetails(selobj, chklatestid);

		if (!(stafftype == STAFFTYPE_STAFF)) {

			$("#fipaForm :input").attr("readonly", false);
			$("#fipaForm :input").attr("disabled", false); 
			
			$(".readOlyCursor").attr("readonly", true);
			$(".disabledCursor").attr("disabled", true);

			callDatePickers(chklatestid);

			$('#dfSelfAddrreason').prop('disabled', true);
			$('#dfSpsAddrreason').prop('disabled', true);
			$(".txtlastupdated").attr("readonly", true);
			$(".funcToDisable").css("display", "block");
			$('.addnewlife').css("display", "block");

		} else {

			$("#allpages").find("div").find("input").attr("disabled", true);
			$("#allpages").find("div").find("select").attr("disabled", true);
 
			$("#searchpage").find("div").find(":input").prop("disabled", false);
			$("#profilepage").find("div").find(":input").prop("disabled", false);
			$('.accordHeaderDiv').css("display", "none");
			$("#clntreportdiv").find("input[type=checkbox]").attr("disabled", false);
		
			$('.addnewlife').css("display", "none");
		}
	} else if (chklatestid > 1) {
		
		populateSearchDetails(selobj, chklatestid);
		dataTableFlg=true;
		$("#fipaForm :input").attr("readonly", true);
		$("#fipaForm :input").attr("disabled", true);
		$("#clntreportdiv").find("input[type=checkbox]").attr("disabled", false);
		
		$(".readOlyCursor").attr("readonly", true);
		$(".disabledCursor").attr("disabled", true);

		if (!(stafftype == STAFFTYPE_STAFF)) {
			callDatePickers(chklatestid);
		}

		$(".funcToDisable").css("display", "none");

		$('.footdiv').css("display", "none");
		$('.addnewlife').css("display", "none");
		
		
		

	}
	
	$('#main_menu_pro_scrh').css("background", "#1d655cf7");
	//$('#search_li_title').css("color", "white");
	
//	$("span[class=prolength]").text($('#ProfileSearchTable tbody tr:visible').length);
	
	
	$("#Clientdtlstab").attr('checked', true).trigger('click');
	
	/* $("#typesofappln_li").show();*/
	
//	$("#typesofappln_li").show();
}

function populateSearchDetails(selobj, chklatestid) {

	var strFNAId = "", strCustId = "", strFnaType = "";
	var dateCreated = "";
	var strClientNRIC = $("input[name='txtFldClientNric']").val();
	if ($(selobj)) {
		dateCreated = $(selobj).closest("tr").find("td").eq(2).find("input").eq(0).val();
		strFNAId = $(selobj).closest("tr").find("td").eq(2).find("input").eq(1).val();
		strCustId = $(selobj).closest("tr").find("td").eq(2).find("input").eq(2).val();
		strFnaType = $(selobj).closest("tr").find("td").eq(2).find("input").eq(3).val();
	} else {
		dateCreated = selobj.parentNode.parentNode.childNodes[2].childNodes[0].value;
		strFNAId = selobj.parentNode.parentNode.childNodes[2].childNodes[1].value;
		strCustId = selobj.parentNode.parentNode.childNodes[2].childNodes[2].value;
		strFnaType = selobj.parentNode.parentNode.childNodes[2].childNodes[3].value;
	}

//	console.log("populateSearchDetails=>NRIC"+strClientNRIC);
	
	var tblIds = ['childParticularsTableNew', 'childParticularsTable', 'OthRetPlgtbl', 'IncRetPlgtbl',
			'IncAssRetPlgtbl', 'deptParticularsTableNew','deptParticularsTable', 'RDExptbl', 'RDInctbl',
			'RDIncAsstbl', 'finGoalsTable', 'wealthAccmltTable','retCpfPayoutTable',
			'existPolicyLHIns', 'existPolicyUtlip', 'cpfMontlyContbTable',
			'cpfAccDeductTable', 'fnaPropOwnTblByCPF', 'fnaVehiOwnTbl',
			'personalAssetTbl', 'businessAssetTbl', 'othareaofconTbl',
			'fnaAttachments', 'fnaartuplanTbl', 'fnaartufundTbl',
			'fnaswrepplanTbl', 'fnaSwrepFundTbl', 'clntReasnsTable',
			'fnaLINomineesTbl', 'liRetirementPlgtbl', 'cashOfBanksTable','srsTable' ];

	for ( var tbl in tblIds) {
		removeTblRows(tblIds[tbl]);
	}

	utlipPolicyTbl.clear().draw();
	existPolicyLHIns.clear().draw();

	if (chklatestid == 1) {

		$("#hTxtFldFnaReviewFlag").val("I");

		$("#spanReviewConfirm").html("");

		$("input[name='fnaType'][value='SIMPLIFIED']").attr("disabled", true);
		$("input[name='fnaType'][value='FULLFACT']").attr("checked", true);

		$("#profileDialog #radAppDataReview").attr("disabled", true);

		if (!profileValidateDets())
			return;

		showLoader();
		
		
		loadCustFNADetails(strFNAId, strCustId, strClientNRIC, advstfId,strFnaType,chklatestid);

		$(".fipaMode").val("I");
		if (!(stafftype == STAFFTYPE_STAFF)) {
			$("#btnSaveProfile").removeClass("hidden");
		}else{
			$("#btnSaveProfile").addClass("hidden");
		}

	} else if (chklatestid > 1) {
		
//		$("#CantCreateNewProfDialog").dialog(
//				{
//					create : function(event, ui) {
//						var dialog = $(this).closest(".ui-dialog");
//						dialog.find(".ui-dialog-titlebar").remove();
//					},
//					resizable : false,
//					height : "auto",
//					width : "auto",
//					modal : true,
//					buttons : {
//						" OK " : function() {
//							showLoader();
//							loadCustFNADetails(strFNAId, strCustId,
//									strClientNRIC, advstfId, strFnaType,strCustName); 
//							$(this).dialog("close");
//						},
//						" Cancel " : function() {
//							$("#fipaForm #profilepage :input").prop("disabled",false); 
//							$(this).dialog("close");
//						}
//					}
//				});// end dialog
 
		$('#CantCreateNewProfDialog').modal({
			  backdrop: 'static',
			  keyboard: false,
			  show:true,
			}); 
		$('#CantCreateNewProfDialog').on('shown.bs.modal', function() {  
			$('#CantCreateNewProfDialog').find(".modal-footer").find("button").prop("disabled",false);
			$('#CantCreateNewProfDialog').find(".modal-title").text("FIPA - Message");
			$('#CantCreateNewProfDialog').find(".modal-footer").find("button:eq(0)").unbind(); 
			$('#CantCreateNewProfDialog').find(".modal-footer").find("button:eq(0)").click(function (){   
//				showLoader();
				
				loadCustFNADetails(strFNAId, strCustId,strClientNRIC, advstfId, strFnaType,chklatestid,strCustName); 
				$("#searchpage ").find("input").prop("disabled",false);
				$("#profilepage").find("input").prop("disabled",false);
				$('#CantCreateNewProfDialog').modal('hide');  
			
			});
			$('#CantCreateNewProfDialog').find(".modal-footer").find("button:eq(1)").click(function (){   
				$("#fipaForm #profilepage :input").prop("disabled",false); 
				$("#fipaForm :input[type=checkbox]").attr("disabled", false);
				$("#fipaForm :input[type=radio]").attr("disabled", false);
				$('#CantCreateNewProfDialog').modal('hide');  
			});
		});
		
		

		$("#btnSaveProfile").addClass("hidden");
		 
		
	}
	
	

	
	
	
	
}

$("#profilelist_li,#search_li ").on("click",function(){
	$("#searchpage ").find("input,button,select,textarea").prop("disabled",false).prop("readonly",false);
	$("#profilepage").find("input,button,select,textarea").prop("disabled",false).prop("readonly",false); 
	$("#ProSrchTab").attr('checked', true).trigger('click');
});

$("#particular_li").on("click",function(){
	$("#Clientdtlstab").attr('checked', true).trigger('click');
	
});

$("#cashflowst_li").on("click",function(){
	$("#IncomeTab").attr('checked', true).trigger('click');
});

$("#assetsliab_li").on("click",function(){
	$("#AssetsTab").attr('checked', true).trigger('click');
});



$("#contigency_li").on("click",function(){
	$("#contingencySelfTab").attr('checked', true).trigger('click');
	$("#contingencySelfTab").prop("disabled", false);
	$("#contingencySpouseTab").prop("disabled", false);
});

$("#investment_li").on("click",function(){
	
//	#inputinvst
	
	var strFNAId=$("#fnaId").val();
	var strCustId=$("#fpmsCustid").val();
	var strClientNRIC=$("#txtFldClientNric").val();
	var advstfId=$("#advstfId").val();
	var strFnaType=$("#fnaType").val();
	var chklatestid=globalchklatestid;
	alert("Please wait,Loading...");
	
	$('#fnaInvestmentTbl').dataTable().fnClearTable();
	
	loadInvestmentTblDetails(strFNAId, strCustId,strClientNRIC, advstfId, strFnaType,chklatestid); 
	/*if(invFlgDsbl){
		alert(invFlgDsbl);
		$('#fnaInvestmentTbl tbody ').find('tr').each(function() {
            $(this).find("td input:text,td select,td input:checkbox").each(function() {
            $(this).prop('disabled', true); 
            $(this).prop('readonly', 'true');
        });
          
        });
	}*/
	
	});

function loadInvestmentTblDetails(strFNAId, strCustId, strClientNRIC, advstfId,strFnaType,chklatestid) { 
	
	
	
	var parameter = "DBCALLFOR=OPEN_CLIENT_PROFILE&strFNAId=" + strFNAId
			+ "&strCustId=" + strCustId + "&strClientNRIC=" + strClientNRIC
			+ "&strAdvId=" + advstfId+"&time="+new Date();

	ajaxCallA(
			parameter,
			servletName,
			function(Data) {

				var retval = Data;

				for ( var val in retval) {

					var tabdets = retval[val];
					
					if (tabdets["SESSION_EXPIRY"]) {
						window.location = BASE_URL + SESSION_EXP_JSP;
						return;
					}
					if (tabdets["DB_ERROR"]) {
						window.location = BASE_URL + DB_EXP_JSP;
						return;
					}

					for ( var tab in tabdets) {

						if (tabdets.hasOwnProperty(tab)) {

							var key = tab;
							var value = tabdets[tab]; 
							
							console.log(tab +' = ' + value)
							console.log("Loading ..............." + key)
							

							if (tab == "INPUTINVESTMENT_DETS") {
								/*var table = $('#fnaInvestmentTbl').DataTable();*/
								/*var oTable = $('#fnaInvestmentTbl').dataTable();*/
								$.each(value, function(contkey, contvalue) {
									addInptInvstRows(contvalue);
									/*var currentPage = table.page();
								    table.page(currentPage).draw(false);*/
									
									/*  oTable.fnPageChange( 'next' );*/
								});
								calInvSumryRow();
							}


						}
					}
				}
				
 

				hideLoader();
				if(invFlgDsbl){
					//alert(invFlgDsbl);
					$('#fnaInvestmentTbl tbody ').find('tr').each(function() {
			            $(this).find("td input:text,td select,td input:checkbox").each(function() {
			            $(this).prop('disabled', true); 
			            $(this).prop('readonly', 'true');
			        });
			          
			        });
				}
				//invFlgDsbl=false;
				 /*$('#fnaInvestmentTbl').DataTable(
						 {
					destroy: true,
				 	responsive: false,         
				    ordering: false,
				    searching: false,     
				    scrollY:  "60vh",
				    scrollX: true,
				    scroller: false,
				    scrollCollapse:false,
				    info:false,
				    paging:false, 
				    paging:true, 
				    pagingType : "full_numbers",
				    
				    filter:false,   
				    dom: '<<"top" ip>flt>',  
				  columnDefs: [  { width: '20px', targets: [0,1]},
				   	             {"className": "dt-head-center text-center",targets: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33],"orderable": false,"searchable": false}]	
				   	         
					 
				});*/
				
 

			});
	

}


function loadCustFNADetails(strFNAId, strCustId, strClientNRIC, advstfId,strFnaType,chklatestid) { 

	var parameter = "DBCALLFOR=OPEN_CLIENT_PROFILE&strFNAId=" + strFNAId
			+ "&strCustId=" + strCustId + "&strClientNRIC=" + strClientNRIC
			+ "&strAdvId=" + advstfId;
		

	ajaxCall(
			parameter,
			servletName,
			function(Data) {

				var retval = Data;

				for ( var val in retval) {

					var tabdets = retval[val];
					
					if (tabdets["SESSION_EXPIRY"]) {
						window.location = BASE_URL + SESSION_EXP_JSP;
						return;
					}
					if (tabdets["DB_ERROR"]) {
						window.location = BASE_URL + DB_EXP_JSP;
						return;
					}

					for ( var tab in tabdets) {

						if (tabdets.hasOwnProperty(tab)) {

							var key = tab;
							var value = tabdets[tab]; 
							
							console.log(tab +' = ' + value)
							console.log("Loading ..............." + key)
							
							
							if(key == "SKIN_COLOR"){
								lastSkinColor = value;
								
								var resp = JSON.stringify(value);
								
								$("#hTxtFldProfileColor").val(value);
								
								if(lastSkinColor == 'DEFAULT'){
									
								//}else if(lastSkinColor.indexOf("color") == 0){
									//$('#'+value).trigger("click");	
								}else{
//									setBgColor(lastSkinColor);
								}
                
								/*setBgColor(value.TopColor );
								setBgColor1(value.SidemenuColor);
								setBgColor2(value.SubMenuColor);
								setBgColor3(value.TableHeaderColor);
								setBgColor4(value.BodyDivColor);
								setBgColor5(value.MenuColor);
								setBgColor6(value.RepMain)
								setBgColor7(value.RepSub)
								
								
								setAllLayoutColor();*/
							}

							if (key == "OPEN_CUST_DETS") {
								
								jsonDataPopulate(value, tab); 
								var jsnData = value;
								 
								for ( var cont in jsnData) {
									var contvalue = jsnData[cont]; 
									
									
									if (cont == "dfSelfRegmailaddrSame") {//Self - different from reg address
										if (contvalue == 'Y') {
											$("#dfSelfRegmailaddrSame").prop("checked", false);
											if (!$("#dfSelfRegmailaddrSame").is(":checked")) {
												$("#dfSelfRegmailaddrSame").prop("checked",
														true); 
											}
										}
									}

									if (cont == "dfSpsRegmailaddrSame") {//Spouse (Reg Address)- Same as self reg addr
										if (contvalue == 'Y') {
											$("#dfSpsRegmailaddrSame").prop("checked", false);
											if (!$("#dfSpsRegmailaddrSame").is(":checked")) {
												$("#dfSpsRegmailaddrSame")
														.prop("checked", true);
											}
 
										}
									}

									if (cont == "dfSpsMailaddrAsSelf") {//Spouse (Mail Address)- Same as self reg addr
										if (contvalue == 'Y') {
											if (!$("#dfSpsMailaddrAsSelf").is(":checked")) {
												$("#dfSpsMailaddrAsSelf").prop("checked", true); 
											}
										}
									}

									if ($("#dfSpsRegmailaddrSame").val() == 'Y') {

										$("#dfSpsHomecntry").prop("disabled", true);

									} else {
										if (($("input:checkbox[name=txtFldAnalyisFor]:eq(1)")
												.val() == 'Y')) {
											$("#dfSpsHomecntry").prop("disabled", false);
											
											
										} else {
											$("#dfSpsHomecntry").prop("disabled", true);
										}
									}

									if ($("#dfSpsMailaddrAsSelf").val() == 'Y') {
										$("#dfSpsMailaddrAsSelf").prop("checked", true);
									} else {
										$("#dfSpsMailaddrAsSelf").prop("checked", false);
									}

									if ($("#dfSelfRegmailaddrSame").val() == 'Y') {

										$('#dfSelfMailaddr').prop('readonly', false);
										$('#dfSelfMailaddr').removeClass("readOlyCursor");

										$('#dfSelfMailaddr2').prop('readonly', false);
										$('#dfSelfMailaddr2').removeClass("readOlyCursor");

										$('#dfSelfMailpostal').prop('readonly', false);
										$('#dfSelfMailpostal').removeClass("readOlyCursor");

										$('#dfSelfMailcntry').prop('disabled', false);
										$('#dfSelfMailcntry').removeClass("disabledCursor");

										$('#dfSelfAddrreason').prop('disabled', false);
										$('#dfSelfAddrreason').removeClass("disabledCursor");

									} else {

										$('#dfSelfMailaddr').prop('readonly', true);
										$('#dfSelfMailaddr').addClass("readOlyCursor");

										$('#dfSelfMailaddr2').prop('readonly', true);
										$('#dfSelfMailaddr2').addClass("readOlyCursor");

										$('#dfSelfMailpostal').prop('readonly', true);
										$('#dfSelfMailpostal').addClass("readOlyCursor");

										$('#dfSelfMailcntry').prop('disabled', true);
										$('#dfSelfMailcntry').addClass("disabledCursor");

										$('#dfSelfAddrreason').prop('disabled', true);
										$('#dfSelfAddrreason').addClass("disabledCursor");
									}

									if (cont == "dfSpsRegmailaddrSame") {
										if (contvalue == 'Y') {
											if ($("#dfSpsMailaddrAsSelf").is(":not(:checked)")
													&& $("#dfSpsRegmailaddrSame").is(
															":not(:checked)")) {
												$("#dfSpsMailaddrAsSelf").prop("checked", true)
														.val("Y");
											}

										}
									}

									if (cont == "dfSelfName") {
										$("[name='txtFldClientName']")
										.val( contvalue);

//										var totSlfFlds = document
//												.getElementsByName("txtFldClientName").length;
//										for (var i = 0; i < totSlfFlds; i++) {
//											document.getElementsByName("txtFldClientName")[i].value = contvalue;
//										}
										$("span[id='txtFldClientName']").text(contvalue);
									

									}

									if (cont == "dfSelfNric") {
//										var totNricFlds = document
//												.getElementsByName("txtFldDfClientNric").length;
//										for (var i = 0; i < totNricFlds; i++) {
//											document.getElementsByName("txtFldDfClientNric")[i].value = contvalue;
//										}
										$("span[id='txtFldClientNric']").text(contvalue);

										$("[name='txtFldClientNric']")
												.val(contvalue);
									}

									if (cont == "dfSpsName") {
										$("[name='txtFldSpouseName']")
										.val(contvalue);
										
//										var totSpsFlds = document
//												.getElementsByName("txtFldSpouseName").length;
//										for (var i = 0; i < totSpsFlds; i++) {
//											document.getElementsByName("txtFldSpouseName")[i].value = contvalue;
//										}
									}
								 
									if(cont  == "dfSelfDob"){
									getdob($("#dfSelfDob"), $('#dfSelfAge'),false);
									}
									if(cont == "dfSpsDob"){
									getdob($("#dfSpsDob"), $('#dfSpsAge'),false);
									}
									 
									loadSlfSpsName();
									
								}
									 
								//To load default value to Retirement CPF life
							}

							if (key == "APPTYPES_DETS") {

								var jsnData = value;
								$("input[type=checkbox][name='analysis']")
										.prop("checked", false);
								var cnt = 0;
								for ( var cont in jsnData) {
									if (jsnData.hasOwnProperty(cont)) {

										var contvalue = jsnData[cont];

										for ( var data in contvalue) {

											var col = contvalue[data];

											if (data == "appTypeid") {
												$("input[name='txtFldAppTypeIds']").each(function(i) {
													if (cnt == i) {
														document.getElementsByName("txtFldAppTypeIds")[cnt].value = col;
													}
												});
											}

											if (data == "masterAnalysisTypes") {
												$("input[type=checkbox][value='"+ col + "']").prop("checked", true);
												$("#analysisTypesdiv").find("input[type='checkbox']:checked").attr("checked", false);
											}
//											<!--   Thulasy 16.07.2019 -->
//											$("#typesofappsec input[name='txtFldClientChoice'][data-attr='LS']").attr("disabled", true);
//											$("#typesofappsec input[name='txtFldClientChoice'][data-attr='AS']").attr("disabled", true);
//											$("#typesofappsec input[name='txtFldClientChoice'][data-attr='IS']").attr("disabled", true);
											
//											$("#typesofappsec input[name='txtFldClientChoice'][data-attr='LF']").attr("disabled", true);
//											$("#typesofappsec input[name='txtFldClientChoice'][data-attr='AF']").attr("disabled", true);
//											$("#typesofappsec input[name='txtFldClientChoice'][data-attr='IF']").attr("disabled", true);

										}
									}
									cnt++;
								}
								$("#analysisTypesdiv").find("input[type='checkbox']:checked").attr("checked", false);
								analysisCheckEvent($("#txtFldAnalysisSelAll"), 'All');
							}

							if (key == "ADVDCL_DETS") {
								
								jsonDataPopulate(value, tab);
								 
									
								var jsnData = value;
								 
								for ( var cont in jsnData) {
									var contvalue = jsnData[cont]; 
									
									if (cont == "appPurpose") {
										if(!isEmpty(contvalue)){
										var resp = JSON.stringify(contvalue);   
										$("#" + cont).val(resp);
										if (contvalue.FIN_PLN_RPT == "Y") {
											if (!$("input:checkbox[name=txtFldPurpose]:eq(0)")
													.is(":checked")) { 
												$("input:checkbox[name=txtFldPurpose]:eq(0)").prop("checked", true).val("Y");
											}
										} else {
											if ($("input:checkbox[name=txtFldPurpose]:eq(0)")
													.is(":checked")) { 
												$("input:checkbox[name=txtFldPurpose]:eq(0)").prop("checked", false).val("N");
											}
										}

										if (contvalue.FIN_ADVSRY == "Y") {
											if (!$("input:checkbox[name=txtFldPurpose]:eq(1)")
													.is(":checked")) { 
												$("input:checkbox[name=txtFldPurpose]:eq(1)").prop("checked", true).val("Y");
											}
										} else {
											if ($("input:checkbox[name=txtFldPurpose]:eq(1)")
													.is(":checked")) { 
												$("input:checkbox[name=txtFldPurpose]:eq(1)").prop("checked", false).val("N");
											}
										}
										
										}else{
											$("#appPurpose").val('{"FIN_PLN_RPT":"N","FIN_ADVSRY":"N"}');
										}
									}

									if (cont == "arNewRecomm") {

										var resp = JSON.stringify(contvalue);
										$("#" + cont).val(resp);
										if (contvalue.FAMINCPRO == "Y") {
											if (!$("input:checkbox[name=chkArNewRecom]:eq(0)")
													.is(":checked")) { 
												$("input:checkbox[name=chkArNewRecom]:eq(0)").prop("checked", true);
											}
										} else {
											$("#" + cont).val("");
											if ($("input:checkbox[name=chkArNewRecom]:eq(0)")
													.is(":checked")) { 
												$("input:checkbox[name=chkArNewRecom]:eq(0)").prop("checked", false);
											}
										}

										if (contvalue.MEDDISINC == "Y") {
											if (!$("input:checkbox[name=chkArNewRecom]:eq(1)")
													.is(":checked")) { 
												$("input:checkbox[name=chkArNewRecom]:eq(1)").prop("checked", true);
											}
										} else {
											if ($("input:checkbox[name=chkArNewRecom]:eq(1)")
													.is(":checked")) { 
												$("input:checkbox[name=chkArNewRecom]:eq(1)").prop("checked", false);
											}

										}

										if (contvalue.RECSVEDU == "Y") {
											if (!$("input:checkbox[name=chkArNewRecom]:eq(2)")
													.is(":checked")) { 
												$("input:checkbox[name=chkArNewRecom]:eq(2)").prop("checked", true);
											}
										} else {
											if ($("input:checkbox[name=chkArNewRecom]:eq(2)")
													.is(":checked")) { 
												$("input:checkbox[name=chkArNewRecom]:eq(2)").prop("checked", false);
											}

										}

										if (contvalue.RECINVST == "Y") {
											if (!$("input:checkbox[name=chkArNewRecom]:eq(3)")
													.is(":checked")) { 
												$("input:checkbox[name=chkArNewRecom]:eq(3)").prop("checked", true);
											}
										} else {
											if ($("input:checkbox[name=chkArNewRecom]:eq(3)")
													.is(":checked")) { 
												$("input:checkbox[name=chkArNewRecom]:eq(3)").prop("checked", false);
											}

										}

										if (contvalue.RECRETRMT == "Y") {
											if (!$("input:checkbox[name=chkArNewRecom]:eq(4)")
													.is(":checked")) { 
												$("input:checkbox[name=chkArNewRecom]:eq(4)").prop("checked", true);
											}
										} else {
											if ($("input:checkbox[name=chkArNewRecom]:eq(4)")
													.is(":checked")) { 
												$("input:checkbox[name=chkArNewRecom]:eq(4)").prop("checked", false);
											}

										}

										if (contvalue.RECOTHRS == "Y") {
											if (!$("input:checkbox[name=chkArNewRecom]:eq(5)")
													.is(":checked")) { 
												$("input:checkbox[name=chkArNewRecom]:eq(5)").prop("checked", true);
											}
										} else {
											if ($("input:checkbox[name=chkArNewRecom]:eq(5)")
													.is(":checked")) { 
												$("input:checkbox[name=chkArNewRecom]:eq(5)").prop("checked", false);
											}

										}
									}

									if (cont == "appClientChoice") {
										
										if(!isEmpty(contvalue)){ 
										$("#appClientChoice").val(contvalue);
										var resp = JSON.stringify(contvalue);
										$("#" + cont).val(resp);
										if (contvalue.LS == "Y") {
											$("input:checkbox[name=txtFldClientChoice]:eq(0)").prop("checked", true).val("Y");
										} else {
											$("input:checkbox[name=txtFldClientChoice]:eq(0)").prop("checked", false).val("N");
										}

//										if (contvalue.LF == "Y") {
//											if (!$(
//													"input:checkbox[name=txtFldClientChoice]:eq(1)")
//													.is(":checked")) { 
//												$(
//														"input:checkbox[name=txtFldClientChoice]:eq(1)")
//														.prop("checked", true);
//												$(
//														"input:checkbox[name=txtFldClientChoice]:eq(1)")
//														.val("Y");
//											}
//										} else {
//											if ($(
//													"input:checkbox[name=txtFldClientChoice]:eq(1)")
//													.is(":checked")) { 
//												$(
//														"input:checkbox[name=txtFldClientChoice]:eq(1)")
//														.prop("checked", false);
//												$(
//														"input:checkbox[name=txtFldClientChoice]:eq(1)")
//														.val("N");
//											}
//
//										}

										if (contvalue.AS == "Y") {
											
											$("input:checkbox[name=txtFldClientChoice]:eq(1)").prop("checked", true).val("Y");
											
										} else {
											$("input:checkbox[name=txtFldClientChoice]:eq(1)").prop("checked", false).val("N");
										}

//										if (contvalue.AF == "Y") {
//											if (!$(
//													"input:checkbox[name=txtFldClientChoice]:eq(3)")
//													.is(":checked")) { 
//												$(
//														"input:checkbox[name=txtFldClientChoice]:eq(3)")
//														.prop("checked", true);
//												$(
//														"input:checkbox[name=txtFldClientChoice]:eq(3)")
//														.val("Y");
//											}
//										} else {
//											if ($(
//													"input:checkbox[name=txtFldClientChoice]:eq(3)")
//													.is(":checked")) { 
//												$(
//														"input:checkbox[name=txtFldClientChoice]:eq(3)")
//														.prop("checked", false);
//												$(
//														"input:checkbox[name=txtFldClientChoice]:eq(3)")
//														.val("N");
//											}
//
//										}
										
										
										
										if (contvalue.IS == "Y") {
											$("input:checkbox[name=txtFldClientChoice]:eq(2)").prop("checked", true).val("Y");
										} else {
											$("input:checkbox[name=txtFldClientChoice]:eq(2)").prop("checked", false).val("N");

										}

										
//										if (contvalue.IF == "Y") {
//											if (!$(
//													"input:checkbox[name=txtFldClientChoice]:eq(6)")
//													.is(":checked")) { 
//												$(
//														"input:checkbox[name=txtFldClientChoice]:eq(6)")
//														.prop("checked", true);
//												$(
//														"input:checkbox[name=txtFldClientChoice]:eq(6)")
//														.val("Y");
//											}
//										} else {
//											if ($(
//													"input:checkbox[name=txtFldClientChoice]:eq(6)")
//													.is(":checked")) { 
//												$(
//														"input:checkbox[name=txtFldClientChoice]:eq(6)")
//														.prop("checked", false);
//												$(
//														"input:checkbox[name=txtFldClientChoice]:eq(6)")
//														.val("N");
//											}
//
//										} 
										
										}else{
											//Thulasy 16.07.2019
//											$("#appClientChoice").val("{'LF':'Y','AF':'Y','IF':'Y'}");
											$("#appClientChoice").val("{'LS':'Y','AS':'Y','IS':'Y'}");
											
										}
										//Thulasy 16.07.2019
//										$("input:checkbox[name=txtFldClientChoice]:eq(0)").prop("disabled", true);   
//										$("input:checkbox[name=txtFldClientChoice]:eq(2)").prop("disabled", true); 
//										$("input:checkbox[name=txtFldClientChoice]:eq(4)").prop("disabled", true); 
//										
//										$("input:checkbox[name=txtFldClientChoice]:eq(1)").prop("disabled", true);   
//										$("input:checkbox[name=txtFldClientChoice]:eq(3)").prop("disabled", true); 
//										$("input:checkbox[name=txtFldClientChoice]:eq(5)").prop("disabled", true);
										
									}

									if (cont == "mgrAgreeFlag") {
										if (contvalue == "Y") {
											$("#mgrFollowupRemarks").prop("readonly", false);
											$('#mgrFollowupRemarks').removeClass(
													"readOlyCursor");
											$("#mgrFollowupRemarks").focus();
										} else {
											$("#mgrFollowupRemarks").prop("readonly", true);
											$('#mgrFollowupRemarks').addClass("readOlyCursor");
										}
									}

									if (cont == "mgrAgreeFlag") {
										if (contvalue == 'DISAGREE') {
											$("#mgrFollowupRemarks").prop('readonly', false);
											$("#mgrFollowupRemarks").focus();
										}
										if (contvalue == 'AGREE') {
											$("#mgrFollowupRemarks").prop('readonly', true);
										}
									}

									if (cont == "mgrAgreeFlag") {

										if (contvalue == 'DISAGREE') {
											$("#mgrFollowupRemarks").prop('readonly', false);
											$('#mgrFollowupRemarks').removeClass(
													"readOlyCursor");
										}
									}

									if (cont == "cdAgreeFlg") {
										if (contvalue == "Y") {
											$("#cdCcRemarks").prop("readonly", false);
											$('#cdCcRemarks').removeClass("readOlyCursor");
											$("#cdCcRemarks").focus();
										} else {
											$("#cdCcRemarks").prop("readonly", true);
											$('#cdCcRemarks').addClass("readOlyCursor");
										}
									}
									
									

									if (cont == "appAnalysisFor") {
//										console.log("appAnalysisFor")
										if(!isEmpty(contvalue)){
										var resp = JSON.stringify(contvalue);
										$("#" + cont).val(resp);
										if (contvalue.ANALYS_SLF == "Y") {
											$("input:checkbox[name=txtFldAnalyisFor]:eq(0)").prop("checked",true).val("Y");
											$(".clsfipaClient").prop("disabled", false);
											$('#dobSlfpicker').datetimepicker(dobOptions);
											if (!$(
													"input:checkbox[name=txtFldAnalyisFor]:eq(0)")
													.is(":checked")) { 
												$("input:checkbox[name=txtFldAnalyisFor]:eq(0)").prop("checked", true).val("Y");
											}
										} else {

											if ($("input:checkbox[name=txtFldAnalyisFor]:eq(0)")
													.is(":checked")) { 
												$("input:checkbox[name=txtFldAnalyisFor]:eq(0)").prop("checked", false).val("N");
											}
											$(".clsfipaClient").prop("disabled", true);
											$('#dobSlfpicker').datetimepicker('remove');
											$("#dfSelfRegmailaddrSame").attr("disabled", true);
										}

										if (contvalue.ANALYS_SPS == "Y") {
											$("input:checkbox[name=txtFldAnalyisFor]:eq(1)").prop("checked",true).val("Y");
											
											$('#dfSpsHomecntry').prop("disabled", false);
											if($("#dfSpsRegmailaddrSame").is(":checked")){
												
												$("#dfSpsMailaddr").attr("readonly", false);
												$("#dfSpsMailaddr2").attr("readonly", false);
												$("#dfSpsMailpostal").attr("readonly", false);
												$("#dfSpsMailcntry").attr("readonly", false);
												$("#dfSpsAddrreason").attr("readonly", false);
												
												$("#dfSpsMailaddr").prop("disabled", false);
												$("#dfSpsMailaddr2").prop("disabled", false);
												$("#dfSpsMailpostal").prop("disabled", false);
												$("#dfSpsMailcntry").prop("disabled", false);
												$("#dfSpsAddrreason").prop("disabled", false);
												
												$("#dfSpsMailaddr").removeClass("readOlyCursor");
												$("#dfSpsMailaddr2").removeClass("readOlyCursor");
												$("#dfSpsMailpostal").removeClass("readOlyCursor");
												$("#dfSpsMailcntry").removeClass("disabledCursor");
												$("#dfSpsAddrreason").removeClass("disabledCursor");
											}
											
											if($("#txtFldAnalyisForSpouse").is(":checked")){

												$(".clsfipaSpouse").prop("disabled", false);
												$('#dobSpspicker').datetimepicker(dobOptions);
												$("#dfSpsRegaddrAsSelf").prop("disabled", false);
												$("#dfSpsRegmailaddrSame").prop("disabled", false);
												$("#dfSpsMailaddrAsSelf").prop("disabled", false);
												$("#dfSpsHomecntry").prop("disabled", false);
												
												$("#dfSpsMailaddr").attr("readonly", false);
												$("#dfSpsMailaddr2").attr("readonly", false);
												$("#dfSpsMailpostal").attr("readonly", false);
												$("#dfSpsMailcntry").attr("readonly", false);
												$("#dfSpsAddrreason").attr("readonly", false);
												
												$("#dfSpsMailaddr").prop("disabled", false);
												$("#dfSpsMailaddr2").prop("disabled", false);
												$("#dfSpsMailpostal").prop("disabled", false);
												$("#dfSpsMailcntry").prop("disabled", false);
												$("#dfSpsAddrreason").prop("disabled", false);
												
												$("#dfSpsMailaddr").removeClass("readOlyCursor");
												$("#dfSpsMailaddr2").removeClass("readOlyCursor");
												$("#dfSpsMailpostal").removeClass("readOlyCursor");
												$("#dfSpsMailcntry").removeClass("disabledCursor");
												$("#dfSpsAddrreason").removeClass("disabledCursor");
												
												$("input[name=txtFldDepnProvSps]").each(function() {  
													 
															 $(this).prop("disabled",false); 
															/* DpdcalculateRow(); */ 
															 DpndcalculateRow();
											     });
												 $("input[name=txtFldPropCpfLoanBySpsCpf]").each(function() {  
											    	 
															 $(this).prop("disabled",false); 
													 
											     });
												 $("input[name=txtFldPropCpfLoanBySpsCash]").each(function() {  
											    	 
															 $(this).prop("disabled",false);  
											      }); 
												 chkOwnership('Spouse',false);
												 $('#retAgeBasedon').find('option').remove().end().append('<option>--SELECT--</option>').append('<option value="Self">Self</option>').val('Self').append('<option value="Spouse">Spouse</option>').val('Spouse');
												 $("#retAgeBasedon option:contains('--SELECT--')").attr("selected", true); 
											
											}
											
											
										} else {
											
											if ($("input:checkbox[name=txtFldAnalyisFor]:eq(1)")
													.is(":checked")) { 
												$("input:checkbox[name=txtFldAnalyisFor]:eq(1)").prop("checked", false).val("N");
											} 
											
											
											if(!$("#txtFldAnalyisForSpouse").is(":checked")){
								  			    	 $('#dfSpsDob').val('');
								  			    	 $('.clsfipaSpouse').each(function() {  
								  			    		$(this).val('');
								  			    	 });
								  			    	 	$('.clearfipaSpouse').each(function() {  
									  			    		$(this).val('');
									  			    		$(this).prop("readonly",true);
									  			    	 });
								  			    	
								  			    	 	$('#dfSpsMailcntry option[value=SINGAPORE]').prop('selected', true);
								  			    	 	$('#retAgeBasedon').find('option').remove().end().append('<option>--SELECT--</option>').append('<option value="Self">Self</option>').val('Self');
								  			    	  $("#retAgeBasedon option:contains('--SELECT--')").attr("selected", true);
								  			    	 	
								  			    	 	$("input[name=txtFldDepnProvSps]").each(function() {  
								  							 
								  								 $(this).prop("disabled",true);
								  								 $(this).val("");
								  							/*	DpdcalculateRow();*/ 
								  								DpndcalculateRow();
								  				    		 
								  				    	 });
								  				    	 $("input[name=txtFldPropCpfLoanBySpsCpf]").each(function() {  
								  				    		 
								  								 $(this).prop("disabled",true);
								  								 $(this).val("");
								  							  
								  				    	 });
								  				    	 $("input[name=txtFldPropCpfLoanBySpsCash]").each(function() {  
								  				    		 
								  								 $(this).prop("disabled",true);
								  								 $(this).val("");
								  							  
								  				    	 }); 
								  			    	$("#dfSpsRegmailaddrSame").prop("checked",false); 
								  			    	$("#dfSpsRegmailaddrSame").prop("checked",false); 
								  			    	$("#dfSpsMailaddrAsSelf").prop("checked",false); 
								  			    	$("#dfSpsHomecntry").val('');
								  			    	/*var maritialSts=$("#dfSelfMartsts").val();
								  			    	if(!(maritialSts == "Married")){
								  			    		chkOwnership('Spouse',true);
								  			    	}*/
								  			    	chkOwnership('Spouse',true);
								  			    	
								  			    	$(".clsfipaSpouse").prop("disabled", true);
								  					$('#dobSpspicker').datetimepicker('remove');
								  					$("#dfSpsRegaddrAsSelf").prop("disabled", true);
								  					$("#dfSpsRegaddrAsSelf").prop("checked", false);
								  					$("#dfSpsRegmailaddrSame").prop("disabled", true);
								  					$("#dfSpsRegmailaddrSame").prop("checked", false);
								  					$("#dfSpsMailaddrAsSelf").prop("disabled", true);
								  					$("#dfSpsMailaddrAsSelf").prop("checked", false);
								  					$("#dfSpsHomecntry").prop("disabled", true);
								  					$("#dfSpsMailcntry").prop("disabled", true);
													  	
												  
											}
										}

										if (contvalue.ANALYS_FAM == "Y") {
											$(".clsfipaFamily").prop("disabled", false);
											if (!$(
													"input:checkbox[name=txtFldAnalyisFor]:eq(2)")
													.is(":checked")) { 
												$("input:checkbox[name=txtFldAnalyisFor]:eq(2)").prop("checked", true).val("Y");
											}
										} else {

											if ($("input:checkbox[name=txtFldAnalyisFor]:eq(2)")
													.is(":checked")) { 
												$("input:checkbox[name=txtFldAnalyisFor]:eq(2)").prop("checked", false).val("N");
											}
											
						  			    		chkOwnership('Family',false);
						  			    	
											
											$(".clsfipaFamily").prop("disabled", true);
											
											
										}
									}else{
										$("#appAnalysisFor").val('{"ANALYS_SLF":"Y","ANALYS_SPS":"Y","ANALYS_FAM":"Y"}');
										$("input:checkbox[name=txtFldAnalyisFor]:eq(0)").prop("checked", true).val("Y");
										$("input:checkbox[name=txtFldAnalyisFor]:eq(1)").prop("checked", true).val("Y");
										$("input:checkbox[name=txtFldAnalyisFor]:eq(2)").prop("checked", true).val("Y");
										/*alert("checked val for spouse"+$("#txtFldAnalyisForSpouse").is(":checked"));*/
									}
										$("input:checkbox[name=txtFldAnalyisFor]:eq(0)").prop("disabled", true);
										
									}
									
									
									
									

									if (cont == "srQ1Flg") {
										if (contvalue == "Y") {
											$("#spanAdvRecomSwRepConf")
													.css("display", "inline");
											$("#srQ1Dets").prop("readonly", false);
										} else {
											$("#spanAdvRecomSwRepConf").css("display", "none");
											$("#srQ1Dets").prop("readonly", true);
											$("#srQ1Dets").val("");
										}
									}

									if (cont == "amlIntprtBenfflg") {
										if (contvalue == 'Y') {
											$("#beneficialOwnerDiv :input").prop('disabled',
													false);
										} else if (contvalue == 'N' || contvalue == '') {
											$("#beneficialOwnerDiv :input").prop('disabled',
													true);
										}
									}

									if (cont == "advDecCrtdDate") {
										if (!(isEmpty(contvalue))) {
											$("input[name='updlstdateChldDecl']").val(
													"Last updated on " + contvalue + "");
											$("input[name='updlstdateChldDecl']").css(
													"display", "");
										}
									}

									if (cont == "advDecModDate") {
										if (!(isEmpty(contvalue))) {
											$("input[name='updlstdateChldDecl']").val(
													"Last updated on " + contvalue + "");
											$("input[name='updlstdateChldDecl']").css(
													"display", "");
										}
									}

									if (cont == "amlLanguageUse") {
										var arrselamlLanguageUse = contvalue.split(',');
										$('#selamlLanguageUse').multiselect('select',
												arrselamlLanguageUse);
									}

									if (cont == "amlIntprtTppflg") {
										if (contvalue == 'Y') {
											$("#ThirdPartyPayerDiv :input").prop('disabled',
													false);
										} else if (contvalue == 'N' || contvalue == '') {
											$("#ThirdPartyPayerDiv :input").prop('disabled',
													true);
										}

									}

									if (cont == "amlIntprtPepflg") {
										if (contvalue == 'Y') {
											$("#PolExpPersDiv :input").prop('disabled', false);
										} else if (contvalue == 'N' || contvalue == '') {
											$("#PolExpPersDiv :input").prop('disabled', true);
										}
									}

									if (cont == "appReplacePrdt") {
										var resp = JSON.stringify(contvalue);
										$("#" + cont).val(resp);
										if (contvalue.LS == "Y" || contvalue.LF == "Y") {
											$("#lifeInsurancePlanDets").css('display', 'block');
											$("#SwrepLifeInsPlanDets").css('display', 'block');

										} else if (contvalue.AS == "Y" || contvalue.AF == "Y") {
											$("#UtIlpFundDets").css('display', 'block');
											$("#SwrepUtIlpFundDets").css('display', 'block');
										}

									}

									if (cont == "amlIntprtExist") {

										if (contvalue == 'Y') {
											InterpreterKeyin();
										} else if (contvalue == 'N' || contvalue == '') {
											InterpreterKeyout();
										}

									} 

								if (strFnaType == "FULLFACT") {
									//Thulasy 16.07.2019
//									if (!$("#typesofappsec input[name='txtFldClientChoice'][data-attr='LF']").is(":checked")) {
//										$("#typesofappsec input[name='txtFldClientChoice'][data-attr='LF']").prop("checked", true).val("Y");
//										 
//									}
//
//									if (!$("#typesofappsec input[name='txtFldClientChoice'][data-attr='AF']").is(":checked")) {
//										$("#typesofappsec input[name='txtFldClientChoice'][data-attr='AF']").prop("checked", true).val("Y"); 
//									}
//
//									if (!$("#typesofappsec input[name='txtFldClientChoice'][data-attr='IF']").is(":checked")) {
//										$("#typesofappsec input[name='txtFldClientChoice'][data-attr='IF']").prop("checked", true).val("Y"); 
//									}

								} else if (strFnaType == "SIMPLIFIED") {
								
									if ($("#typesofappsec input[name='txtFldClientChoice'][data-attr='LS']").is(":checked")) {
										
										$("#typesofappsec input[name='txtFldClientChoice'][data-attr='LS']").prop("checked", true).val("Y"); 
									}

									if ($("#typesofappsec input[name='txtFldClientChoice'][data-attr='AS']").is(":checked")) {
										
										$("#typesofappsec input[name='txtFldClientChoice'][data-attr='AS']").prop("checked", true).val("Y"); 
									}
									
									if ($("#typesofappsec input[name='txtFldClientChoice'][data-attr='IS']").is(":checked")) {
										
										$("#typesofappsec input[name='txtFldClientChoice'][data-attr='IS']").prop("checked", true).val("Y"); 
									}

								}
								}

									
							}


							if (key == "CHILD_DETS") { 

								$.each(value, function(contkey, contvalue) {
									createNewChildRows();
									getNewChildRows(contvalue);
									//getChildRows(contvalue);
								});

							}
							
							if (tab == "RET_CPFLIFE_DETS") {
								$.each(value, function(contkey, contvalue) {
									getCpfLifeRows(contvalue);
								}); 
								 
							}


							
							if (key == "FINGOALS_DETS") { 

								$.each(value, function(contkey, contvalue) {
									getFinGoalsRows(contvalue);
								});
							}

							if (tab == "SAVINV_DETS") { 
								$.each(value, function(contkey, contvalue) {
									getwlthaccRows(contvalue);
								});

							}

							if (key == "DEPENDANT_DETS") { 

								$.each(value, function(contkey, contvalue) {
									createNewDeptRows();
									getNewdeptRows(contvalue);
									//getdeptRows(contvalue);
								});
								/*DpdcalculateRow();	*/
								DpndcalculateRow();
							}
							
							
							if (key == "ATTACHMENT_DETS") {  
								$.each(value, function(contkey, contvalue) {
									getAttchRows(contvalue);
								});
							}
 
							
							if (key == "SOI_DETS") {
								jsonDataPopulate(value, tab);
								
//								

							}

							if (key == "EXPD_DETS") {
								jsonDataPopulate(value, tab);  
//								ilifeInsPremium('FETCH');
							}

							if (key == "CONTG_DETS") {
								jsonDataPopulate(value, tab);

							}

							if (key == "FPMS_POLICY_DETS") {

								existPolicyLHIns.clear().draw();
								utlipPolicyTbl.clear().draw();

								removeTblRows('existPolicyLHIns');
								removeTblRows('existPolicyUtlip');
								$("#existPolicyLHIns_info").css("display","none");
								$("#existPolicyUtlip_info").css("display","none");

								var poltbl = document.getElementById("existPolicyLHIns");
								var poltbody = poltbl.tBodies[0];

								var ilppoltbl = document.getElementById("existPolicyUtlip");
								var ilppoltbody = ilppoltbl.tBodies[0];

								var jsnData = value;

								for ( var cont in jsnData) {

									var contvalue = jsnData[cont];

									var sublob = contvalue["strFPMSPolLOBSub"];

									var lifInsId;

									if (contvalue["strFipaLifeInsId"] != ""
											|| contvalue["strFipaLifeInsId"] != undefined) {
										lifInsId = contvalue["strFipaLifeInsId"];

									} else {
										lifInsId = "";
									}
									var AppName = contvalue["strFPMSPolApplnName"];
									var fipaSymbol = '<a class="btn btn-default exportfipapolicy" id="exportfipapolicy" onmouseover="dhtmltooltip(this,&quot;Click to view FIPA Policy details&quot;);" ></a><a class="btn btn-default fipadelpolicy" id="fipadelpolicy" onmouseover="dhtmltooltip(this,&quot;Click to delete FIPA Policy detail&quot;);"></a>';
									var fpmsSymbol = '<a class="btn btn-default exportfpmspolicy" id="exportfpmspolicy" onmouseover="dhtmltooltip(this,&quot;Click to view FPMS Policy details&quot;);"></a>';
									 

									if (sublob == "ILP" || sublob == "UT") {

										var ilppoltbllen = ilppoltbody.rows.length;

										var arow = ilppoltbody
												.insertRow(ilppoltbllen);

										var cell0 = '<span></span>';

//										var emptycell = "";

										var cell1 = '<input type="text" readOnly="true" onmouseover="fipaTooltip(this);" class="dhtmlTableText ptrcursor" style="display:inline;width:80px"/><input type="hidden" name="strFipaLifeInsId"/><input type="hidden" name="strFnaId"/><input type="hidden" name="strFPMSAppId"/><input type="hidden" name="strFIPARefId"/>'
												+ ((AppName == "FIPA") ? fipaSymbol
														: fpmsSymbol);
										var cell2 = '<input type="text"  readOnly="true" onmouseover="fipaTooltip(this);" class="dhtmlTableText ptrcursor"/>';
										
										var cell3 = '<input type="text"  readOnly="true" onmouseover="fipaTooltip(this);" class="dhtmlTableText ptrcursor"/><input type="hidden"/>';
										var cell4 = '<input type="text"  readOnly="true" onmouseover="fipaTooltip(this);" class="dhtmlTableText ptrcursor"/>';
										
										
										var cell5 = '<input type="text"  readOnly="true" onmouseover="fipaTooltip(this);" class="dhtmlTableText ptrcursor"/>';
										var cell6 = '<input type="text"  readOnly="true" onmouseover="fipaTooltip(this);" class="dhtmlTableText ptrcursor"/><input type="hidden"/>';
										var cell7 = '<input type="text"  readOnly="true" onmouseover="fipaTooltip(this);" class="dhtmlTableText ptrcursor"/>';
										var cell8 = '<input type="text"  readOnly="true" onmouseover="fipaTooltip(this);" class="dhtmlTableText ptrcursor"/>';
										var cell9 = '<input type="text"  readOnly="true" onmouseover="fipaTooltip(this);" class="dhtmlTableText ptrcursor"/>';
										var cell10 = '<input type="text"  readOnly="true" onmouseover="fipaTooltip(this);" class="dhtmlTableText ptrcursor"/>';
										var cell11 = '<input type="text"  readOnly="true" onmouseover="fipaTooltip(this);" class="dhtmlTableText ptrcursor"/>';
										var cell12 = '<input type="text"  readOnly="true" onmouseover="fipaTooltip(this);" class="dhtmlTableText ptrcursor"/>';

										utlipPolicyTbl.row.add( [ cell0, cell1, cell2, cell3, cell4, cell5, cell6, cell7, cell8, cell9,cell10,cell11,cell12 ]) .draw(false);

										var rowCount = $('#existPolicyUtlip tbody tr').length;
										var $lastRow = $("#existPolicyUtlip tbody tr:last");

										$lastRow.find("td:first").find('span').text(rowCount);
										
 
										$lastRow.find("a").on("click",function(event){event.stopPropagation();});
										$lastRow.click(function() {
											
											callFipaInsuranceDets($(this));});
										
										$lastRow.find("td:eq(1)").find('input:eq(0)').val(contvalue["strFPMSPolApplnName"]);

										$lastRow.find("td:eq(1)").find("a:eq(0)").on("click",function() {
											
											callFipaInsuranceDets($(this).closest("tr"));
										});

										$lastRow.find("td:eq(1)").find("a[id='fipadelpolicy']").on("click",function() {
											callDeletePolicy($(this),utlipPolicyTbl,'existPolicyUtlip');
											
										});

										$lastRow.find("td:eq(1)").find('input:eq(1)').val(contvalue["strFipaLifeInsId"]);
										$lastRow.find("td:eq(1)").find('input:eq(2)').val(contvalue["strFnaId"]);
										$lastRow.find("td:eq(1)").find('input:eq(3)').val(contvalue["strFPMSPolAppId"]);
										$lastRow.find("td:eq(1)").find('input:eq(4)').val(contvalue["strFIPARefId"]);
										

										var prin="";

										if(AppName == "FIPA"){
												if(!isEmpty(contvalue["strFPMSPolPrincipalName"])){
													prin=$("#lipCompany").find('option[value="' + contvalue["strFPMSPolPrincipal"] + '"]').text();
												} 
										}else{
											prin=contvalue["strFPMSPolPrincipalName"];
										}
										$lastRow.find("td:eq(2)").find('input:eq(0)').val(prin);
										
										
										$lastRow.find("td:eq(3)").find('input:eq(0)').val(contvalue["strFPMSPolProposed"]);
										
										$lastRow.find("td:eq(3)").find('input:eq(1)').val(contvalue["strFPMSPolOwner"]);
										
										$lastRow.find("td:eq(4)").find('input:eq(0)').val(contvalue["strFPMSPolLifeAssured"]);
										
										$lastRow.find("td:eq(5)").find('input:eq(0)').val(contvalue["strFPMSPolPolNo"]);

										$lastRow.find("td:eq(6)").find('input:eq(0)').val(contvalue["strFPMSPolPlanName"]);
										
										$lastRow.find("td:eq(6)").find('input:eq(1)').val(contvalue["strFPMSPolCustName"]); 
										
										$lastRow.find("td:eq(7)").find('input:eq(0)').val(contvalue["strFPMSPolCoverages"]);

										$lastRow.find("td:eq(8)").find('input:eq(0)').val(	contvalue["strFPMSPolEffDate"]);
										
										$lastRow.find("td:eq(9)").find('input:eq(0)').val(	contvalue["strFPMSPolStatus"]);
										
										$lastRow.find("td:eq(10)").find('input:eq(0)').val(	contvalue["strFPMSPolSA"]);
										
										$lastRow.find("td:eq(10)").find('input:eq(0)').css("text-align","right");
										
										$lastRow.find("td:eq(11)").find('input:eq(0)').val(	contvalue["strFPMSPolPremium"]);
										
										$lastRow.find("td:eq(11)").find('input:eq(0)').css("text-align","right");
										
										$lastRow.find("td:eq(12)").find('input:eq(0)').val(	contvalue["strFPMSPolLOBMain"]+ "/" + sublob);
//										$lastRow.find("td:eq(13)").addClass("hidden")

									} else {

										var poltbllen = poltbody.rows.length;

										var crow = poltbody.insertRow(poltbllen);

										var cell0 = '<span></span>';
										var emptycell = "";
										var cell1 = '<input type="text" readOnly="true" onmouseover="fipaTooltip(this);" class="dhtmlTableText ptrcursor" style="display:inline;width:80px"/><input type="hidden" name="strFipaLifeInsId"/><input type="hidden" name="strFnaId"/><input type="hidden" name="strFPMSAppId"/><input type="hidden" name="strFIPARefId"/>'
												+ ((AppName == "FIPA") ? fipaSymbol	: fpmsSymbol);
										var cell2 = '<input type="text"  readOnly="true" onmouseover="fipaTooltip(this);" class="dhtmlTableText ptrcursor"/>';
										
										var cell3 = '<input type="text"  readOnly="true" onmouseover="fipaTooltip(this);" class="dhtmlTableText ptrcursor"/><input type="hidden"/>';
										var cell4 = '<input type="text"  readOnly="true" onmouseover="fipaTooltip(this);" class="dhtmlTableText ptrcursor"/>';
										
										
										var cell5 = '<input type="text"  readOnly="true" onmouseover="fipaTooltip(this);" class="dhtmlTableText ptrcursor"/><input type="hidden"/>';
										var cell6 = '<input type="text"  readOnly="true" onmouseover="fipaTooltip(this);" class="dhtmlTableText ptrcursor"/>';
										var cell7 = '<input type="text"  readOnly="true" onmouseover="fipaTooltip(this);" class="dhtmlTableText ptrcursor"/>';
										var cell8 = '<input type="text"  readOnly="true" onmouseover="fipaTooltip(this);" class="dhtmlTableText ptrcursor"/>';
										var cell9 = '<input type="text"  readOnly="true" onmouseover="fipaTooltip(this);" class="dhtmlTableText ptrcursor"/>';
										var cell10 = '<input type="text"  readOnly="true" onmouseover="fipaTooltip(this);" class="dhtmlTableText ptrcursor"/>';
										var cell11 = '<input type="text"  readOnly="true" onmouseover="fipaTooltip(this);" class="dhtmlTableText ptrcursor"/>';
										var cell12 = '<input type="text"  readOnly="true" onmouseover="fipaTooltip(this);" class="dhtmlTableText ptrcursor"/>';
										
										existPolicyLHIns.row.add( [ cell0, cell1, cell2, cell3,	cell4, cell5, cell6,cell7, cell8, cell9,cell10,cell11,cell12]).draw(false);

										var rowCount = $('#existPolicyLHIns tbody tr').length;
										var $lastRow = $("#existPolicyLHIns tbody tr:last");

										$lastRow.find("td:first").find('span').text(rowCount);

										 
										$lastRow.find("a").on("click",function(event){
											event.stopPropagation();
										});
										$lastRow.click(function() {
											
											callFipaInsuranceDets($(this));										    
										});
										
										
										$lastRow.find("td:eq(1)").find('input:eq(0)').val(contvalue["strFPMSPolApplnName"]);
										$lastRow.find("td:eq(1)").find('input:eq(1)').val(contvalue["strFipaLifeInsId"]);
										$lastRow.find("td:eq(1)").find('input:eq(2)').val(contvalue["strFnaId"]);
										$lastRow.find("td:eq(1)").find( 'input:eq(3)').val( contvalue["strFPMSPolAppId"]);
										$lastRow.find("td:eq(1)").find( 'input:eq(4)').val( contvalue["strFIPARefId"]);
										
										$lastRow.find("td:eq(1)").find("a:eq(0)").on( "click", function() {
											
											callFipaInsuranceDets($(this).closest("tr"));
										});

										$lastRow.find("td:eq(1)").find("a[id='fipadelpolicy']").on("click",function() {
											callDeletePolicy($(this),existPolicyLHIns,'existPolicyLHIns');
										});

										var prin;

										if(AppName == "FIPA"){
											if(!isEmpty(contvalue["strFPMSPolPrincipalName"])){
												prin=$("#lipCompany").find('option[value="' + contvalue["strFPMSPolPrincipal"] + '"]').text();
											} 
										}else{
											prin=contvalue["strFPMSPolPrincipalName"];
										}
										$lastRow
										.find("td:eq(2)")
										.find('input:eq(0)')
										.val(prin);

										$lastRow
										.find("td:eq(3)")
										.find('input:eq(1)')
										.val(
												contvalue["strFPMSPolProposed"]);
										
										$lastRow
										.find("td:eq(3)")
										.find('input:eq(0)')
										.val(
												contvalue["strFPMSPolOwner"]);
										
										$lastRow
										.find("td:eq(4)")
										.find('input:eq(0)')
										.val(
												contvalue["strFPMSPolLifeAssured"]);
										
										
										$lastRow.find("td:eq(5)").find(
												'input:eq(0)').val(
												contvalue["strFPMSPolPolNo"]);
										
										$lastRow
												.find("td:eq(5)")
												.find('input:eq(1)')
												.val(
														contvalue["strFPMSPolCustName"]);

										$lastRow
												.find("td:eq(6)")
												.find('input:eq(0)')
												.val(
														contvalue["strFPMSPolPlanName"]);
										
										$lastRow
										.find("td:eq(7)")
										.find('input:eq(0)')
										.val(
												contvalue["strFPMSPolCoverages"]);
										
										$lastRow.find("td:eq(8)").find(
												'input:eq(0)').val(
												contvalue["strFPMSPolEffDate"]);
										
										$lastRow.find("td:eq(9)").find(
												'input:eq(0)').val(
												contvalue["strFPMSPolStatus"]);
										
										$lastRow.find("td:eq(10)").find(
												'input:eq(0)').val(
												contvalue["strFPMSPolSA"]);
										
										$lastRow.find("td:eq(10)").find('input:eq(0)').css("text-align","right");
										
										$lastRow.find("td:eq(11)").find(
												'input:eq(0)').val(
												contvalue["strFPMSPolPremium"]);
										
										$lastRow.find("td:eq(11)").find('input:eq(0)').css("text-align","right"); 
										
										$lastRow.find("td:eq(12)").find(
												'input:eq(0)').val(
												contvalue["strFPMSPolLOBMain"]
														+ "/" + sublob);
										
//										$lastRow.find("td:eq(13)").addClass(
//												"hidden");

									}

								} 
							}

							if (tab == "HEALTHINS_DETS") {
								// jsonTableDataPopulate(value, tab, false);

//								$.each(value, function(contkey, contvalue) {
//									getHealthInscRows(contvalue);
//								});
							}

							if (key == "PERP_DETS") {
								jsonDataPopulate(value, tab);
							}

							if (tab == "INPUTINVESTMENT_DETS") {
								
								/*$.each(value, function(contkey, contvalue) {
									addInptInvstRows(contvalue);
								});
								calInvSumryRow();*/
							}

							if (key == "INV_DETS") {
								jsonDataPopulate(value, tab);
								$("#divforInvestmentSummary").find("input")
										.attr("data-attr", "0");
							}

							if (key == "PROPOWNCPF_DETS") { 
								$.each(value, function(contkey, contvalue) {
									getPropOwnCpfRows(contvalue);
								});
								calcTotalPropertyAmts(false);
							}

							if (tab == "CASHATBANKS_DETS") { 
								$.each(value, function(contkey, contvalue) {
									getCobRows(contvalue);
								});
							}
							
							if (tab == "SRS_DETS") { 
								$.each(value, function(contkey, contvalue) {
									getcshSRSRows(contvalue);
								});
							}

							if (key == "CAS_DETS") {
								jsonDataPopulate(value, tab); 
							}

							if (key == "OTH_DETS") {
								jsonDataPopulate(value, tab);

							}

							if (tab == "PERASSET_DETS") { 
								$.each(value, function(contkey, contvalue) {
									getPerAssetRows(contvalue);
								});
							}

							if (tab == "BUSASSET_DETS") { 
								$.each(value, function(contkey, contvalue) {
									getBuisAsstRows(contvalue);
								});
							}

							if (key == "VEHOWN_DETS") { 
								$.each(value, function(contkey, contvalue) {
									getVehOwnRows(contvalue);
								});
								vehowncalculateRow();
							}

							if (tab == "AUTO_ALTER") {

								$.each(value, function(contkey, contvalue) {
									populateAutoAlter(contvalue);
								});
								
								
							}
							
							if (key == "ESTPLAN_DETS") {
								for ( var val in value) {
									jsonDataPopulate(value[val], tab);
								}
							}

							if (key == "CPF_BALANCE_DETS") { 
								for ( var cont in value) {

									if (tab == "CPF_BALANCE_DETS") {
										$("input[name='" + cont + "']").val(
												value[cont]);
//										console.log(cont+""+value[cont]);
									}
								}
							}

							if (key == "CPFMTHCTRB_DETS") { 
								
								for ( var cont in value) {
									$("input[name='" + cont + "']").val(
											value[cont]);
								}
								
								
//								$.each(value,function(i,objSet){
////									$.each(objSet,function(keySet,val){										
////										$("input[name='"+keySet+"']:eq("+i+")").val(val);
////									});
//									
//								});
								
								
//								 Cpf Contribution - Fetch From Master
																
									if(!isEmpty($("input[name=ccEmpleContrbSelf]").val()  ||  $("input[name=ccEmplrContrbSelf]").val())){
//										calSelfCpfMastMthContr();
									} 
									if(!isEmpty($("input[name=ccEmpleContrbSps]").val()  || $("input[name=ccEmplrContrbSps]").val())){
//										calSpsCpfMastMthContr();
									} 
									
								$(".selfcontr").val("Self");
								$(".spscontr").val("Spouse"); 
								
							}
							

							if (tab == "CPF_ADD_DED_DETS") { 
								$.each(value, function(contkey, contvalue) {
									getCADRows(contvalue);
								});
							}

							if (key == "FLB_DETS") {
								jsonDataPopulate(value, tab);

							}

							if (key == "CURASS_DETS") {
								jsonDataPopulate(value, tab);
								changeAvgRoiToProjRoi(); 
								/*Default Set values*///	 <!--changes done 19/06/2019 --> 
								if(isEmpty($("#caSRSSatRetAge").val())){$("#caSRSSatRetAge").val("62");}
							}

							if (key == "RETP_DETS") {
								jsonDataPopulate(value, tab);
								 if(isEmpty($("#retAgeBasedon").val())){
									 $("#retAgeBasedon").val("Self");
								 }
								 
								 calcRtrmntPln();
									
									retirement_cashflow(cont, contvalue); 
							}

							if (tab == "RDOTHER_PAY") { 
								$.each(value, function(contkey, contvalue) {
									getothretRows(contvalue); 
								});
							}

							if (tab == "RDINCOME_DETS") { 
								$.each(value, function(contkey, contvalue) {
									getincretRows(contvalue); 
								});
								
								
							}

							if (tab == "RDINCASS_DETS") { 

								$.each(value, function(contkey, contvalue) {
									getincassrtRows(contvalue); 
								});
							}

							if (tab == "OTHAREA_DETS") { 
								$.each(value, function(contkey, contvalue) {
									getAreaConRows(contvalue);
								});
							}
//							if (tab == "RCMRSN") { 
//								$.each(value, function(contkey, contvalue) {
//									getReasonsRows(contvalue);
//								});
//							}

//							if (tab == "RCMPRO_DETS") { 
//								$.each(value, function(contkey, contvalue) {
//									getRcmPlnRows(contvalue);
//								});
//							}
// 
//							if (tab == "RCMFUND_DETS") { 
//								$.each(value, function(contkey, contvalue) {
//									getFdPlnRows(contvalue);
//								});
//							}
//
//							if (tab == "SWTHPLAN_DETS") { 
//								$.each(value, function(contkey, contvalue) {
//									getSwrepPlanRows(contvalue);
//								});
//							}

//							if (tab == "SWTHFUND_DETS") { 
//								$.each(value, function(contkey, contvalue) {
//									getSwrepFundRows(contvalue);
//								});
//							}

							if (key == "RSKPREF_DETS") {
								jsonDataPopulate(value, tab);
							}

							if (key == "SUMANAL_DETS") {
								jsonDataPopulate(value, tab);
							}
							
							if(key == "CLNT_LIFEPREM_AMT"){

								var strPremAmtSelf=0,strPremAmtSpouse=0,strPremAmtFamily=0;
								var tempSelfIns =$("#expdSelfInsurance").val();
								var tempSpsIns =$("#expdSpsInsurance").val();
								var tempFamIns =$("#expdFamilyInsurance").val();
								
								if(key=="CLNT_LIFEPREM_AMT"){
									$.each(value, function(contkey, contvalue) { 
//										console.log(contkey +" = " + contvalue);
										
										var appName = contvalue["jsonApplnName"];
										var lifeId 	= contvalue["jsonLifeId"];
										var owner 	= contvalue["jsonLifeOwner"];
										var planName= contvalue["jsonLifePlanName"];
										var incDate = contvalue["jsonLifeIncDate"];
										var payMode = contvalue["jsonLifePayMode"]; 
										var paymtd = contvalue["jsonLifePayMtd"]; 
										var premAmt = contvalue["jsonLifePremAmt"];   
										var polDate = contvalue["jsonLifePolDate"];
										var planterm = contvalue["jsonLifePlanTerm"];
										var planuniqid = contvalue["jsonLifePlanId"];
										var planstatus = contvalue["jsonLifePlanStatus"];
										
										if( isCPFRelated ( paymtd ) || isSRSRelated (paymtd) ){ 
											if(appName == "FPMSNL"){ 
//										 		  if(opts == "FETCH"){
										 		 	 syncFPMSCpf(contvalue,lifeId);
//										 		 }
										 	 }
											}
										
										 if( isCashRelated  (paymtd) ){
					 
										if(!isEmpty(premAmt) && isValidObject(premAmt)){
											
											 var TopUpAmt= getFrequencyDigit(payMode, 0);
										 		
										 		 var stillNeedTopay=false;
										 		 var sumamt	=	premAmt*TopUpAmt;
										 		 stillNeedTopay 	= validateDateComparision(polDate,ResultNewDate,">="); 
										 		
										 if(stillNeedTopay){
											if(owner == "Self"){
												strPremAmtSelf +=Number(sumamt);
											}
											if(owner == "Spouse"){
												strPremAmtSpouse +=Number(sumamt);
											}
											if(owner == "Parents" || owner == "Joint"){
												strPremAmtFamily +=Number(sumamt);
											} 
										  }
										}
										 }
									});
									
									
									
									 $("#expdSelfInsurance").val(roundNumber(strPremAmtSelf)); 
									 /*$("#expdSelfInsurance").attr("data-attr",tempSelfIns).attr("onmouseover","toolTipLifeShow($(this))");
									 if(tempSelfIns  != $("#expdSelfInsurance").val() && !isEmpty($("#expdSelfInsurance").attr("data-attr"))){
										 $("#expdSelfInsurance").addClass("alterColor");
									 }else{
										 $("#expdSelfInsurance").removeClass("alterColor");
									 }*/
									 
								     $("#expdSpsInsurance").val(roundNumber(strPremAmtSpouse));
								     /*$("#expdSpsInsurance").attr("data-attr",tempSpsIns).attr("onmouseover","toolTipLifeShow($(this))");
								     if( tempSpsIns  != $("#expdSpsInsurance").val() &&   !isEmpty($("#expdSpsInsurance").attr("data-attr")) ){
								    	 $("#expdSpsInsurance").addClass("alterColor");
									 }else{
										 $("#expdSpsInsurance").removeClass("alterColor");
									 }*/
								     $("#expdFamilyInsurance").val(roundNumber(strPremAmtFamily));   
								     /*$("#expdFamilyInsurance").attr("data-attr",tempFamIns).attr("onmouseover","toolTipLifeShow($(this))");
								     if(tempFamIns != $("#expdFamilyInsurance").val() && !isEmpty($("#expdFamilyInsurance").attr("data-attr"))){
								    	 $("#expdFamilyInsurance").addClass("alterColor");
									 }else{
										 $("#expdFamilyInsurance").removeClass("alterColor");
									 }*/ 
								     
									 
									 
								}
							}
 

						}
					}
				}
				
 
				openClientSection();
				
//				ilifeInsPremium('FETCH');//commented for new life

				syncSRSBalanceRet();
				addLateUpdtDate();

				
				calcSum(null, FNA_LIA.SUMOF_FINLIAB_SELF);
				calcSum(null, FNA_LIA.SUMOF_FINLIAB_SPS);
				calcSum(null,FNA_LIA.SUMOF_FINLIAB_FAM);

				callSumOfCpfMth();

				calcSum(null, CASH_ASS.SUMOF_CASHASST_SELF);
				calcSum(null, CASH_ASS.SUMOF_CASHASST_SPS);
				calcSum(null, CASH_ASS.SUMOF_CASHASST_JOIN);

				calcSum(null, OTH_ASS.SUMOF_OTHASST_SELF);
				calcSum(null, OTH_ASS.SUMOF_OTHASST_SPS);
				calcSum(null, OTH_ASS.SUMOF_OTHASST_JOIN);
				calcSum(null, OTH_ASS.SUMOF_OTHASST_LOAN);
				
				calcSum(null,'SUMOF_ANNEXP_SELF');
				 calcSum(null,'SUMOF_ANNEXP_SPS');
				 calcSum(null,'SUMOF_ANNEXP_FAM');  

				$("select#mgrId").prop("disabled", true);
				$("select#advstfId").prop("disabled", true);
				
				 
//				clientMartSts($("#dfSelfMartsts").val(),false);06_may_2020 Document related comment 
//				chkTableDataLatestOrNot();//only latest profile in table will be disabled otherwise enabled
//				Commentted by 06_may_2020;as there is no need to call this...
				addDefaultCpfLifeRows(null);//Retirement CPF Life default Values
//				$(".mastcurAssmpt").removeClass("hidden");//To show current assumpt opt as master screen

				hideLoader();
				
				$("#typesofappln_li").show();
				$(".clsfipaReadonly").prop("disabled", true);
				/*$(".sidebar").removeClass("hidden");
				$("#txtNavClientDtls").removeClass("hidden");*/
				/*$(".mainmenu").removeClass("hidden");
				$("#txtNavClientDtls").show();*/
				
				if(chklatestid >1){
					$("#fipaForm :input[type=checkbox]").attr("disabled", true);
					$("#fipaForm :input[type=radio]").attr("disabled", true);
					$("#clearmsglifeData").find("button").prop("disabled",false);
					$('#fipaForm :input').attr("disabled", true);
					$("#Clientdtlstab ").prop("disabled",false);
					$("#Spousedtlstab ").prop("disabled",false);
					$("#Childdtlstab ").prop("disabled",false);
					$("#Dependtlstab ").prop("disabled",false);
					$("#Clientdtlstab").trigger("click"); 
					invFlgDsbl=true;
				}if(chklatestid == 1){
					invFlgDsbl=false;
//					$("#fipaForm :input[type=checkbox]").attr("disabled", false);
//					$("#fipaForm :input[type=radio]").attr("disabled", true);
//					$("#clearmsglifeData").find("button").prop("disabled",false);
					
				}
				/*$('.editRow-icon').prop("disabled",true);*/
				/*$('.delRow-icon').prop("disabled",true);*/
				
				if(FIPAMenu != null && FIPAMenu != '' && FIPAMenu != 'null' ){
					
					if($('a[href="'+FIPAMenu+'"]').parent().hasClass("submenu")){
						$('a[href="'+FIPAMenu+'"]').parent().closest("li.mainmenu").find("a:eq(0)").trigger("click");
						if($('a[href="'+FIPAMenu+'"]').parent().closest("li.secondlevel")){
							$('a[href="'+FIPAMenu+'"]').parent().closest("li.secondlevel").find("a:eq(0)").trigger("click");
						}
					}
					$('a[href="'+FIPAMenu+'"]').trigger("click");
				}
				
				$("#btnCalendarEl").removeClass("hidden");
				
 

			});
	
	
}

function checkbxSlfSps(){
	/*var typeOfAppSps = $("#txtFldAnalyisForSpouse").is(":checked");
	var typeOfAppSps = $("#txtFldAnalyisForSpouse").is(":checked");
	
	if($("#dfSelfRegmailaddrSame").is(":checked")){
		$("#dfSelfMailaddr").prop("readonly",true);
		$("#dfSelfMailaddr2").prop("readonly",true);
		$("#dfSelfMailpostal").prop("readonly",true);
		$("#dfSelfMailcntry").prop("disabled",true);
		$("#dfSelfAddrreason").prop("disabled",true);
	}else{
		$("#dfSelfMailaddr").prop("readonly",false);
		$("#dfSelfMailaddr2").prop("readonly",false);
		$("#dfSelfMailpostal").prop("readonly",false);
		$("#dfSelfMailcntry").prop("disabled",false);
		$("#dfSelfAddrreason").prop("disabled",false);
	}
	
	  if($("#dfSpsRegaddrAsSelf").is(":checked")){ 
		  $("#dfSpsHomeaddr").prop("readonly",false);
		  $("#dfSpsHomeaddr2").prop("readonly",false);
		  $("#dfSpsHomepostalcode").prop("readonly",false);
		  $("#dfSpsHomecntry").prop("disabled",false); 
		  
		  $("#dfSpsMailaddr").prop("readonly",false);
		  $("#dfSpsMailaddr2").prop("readonly",false);
		  $("#dfSpsMailpostal").prop("readonly",false);
		  $("#dfSpsMailcntry").prop("disabled",false);
		  $("#dfSpsAddrreason").prop("disabled",false);
	  }*/
}
function profileValidateDets() {

	var totapplntypesFlds = $('#profileDialog  #fnaType').length;
	for (var i = 0; i < totapplntypesFlds; i++) {
		if (!(document.getElementsByName("fnaType")[0].checked || document
				.getElementsByName("fnaType")[1].checked)) {
			showAlert(PROAPPTYPE, document.getElementsByName("fnaType")[0]);
			return false;

		}
	}

	var totrevflgFlds = $('#profileDialog  #radAppDataReview').length;
	for (var i = 0; i < totrevflgFlds; i++) {
		if (!(document.getElementsByName("radAppDataReview")[0].checked || document
				.getElementsByName("radAppDataReview")[1].checked)) {
			showAlert(PROREVFLG,
					document.getElementsByName("radAppDataReview")[0]);
			return false;

		}
	}

	return true;

}

function validateNRIC(NRIC_id, NRIC_type, focusId) {

	if (!(isEmpty(NRIC_id.value) && isEmpty(NRIC_type.value))) {
		showLoader();
		var parameter = "DBCALLFOR=CHK_EXIST_NRIC&strSrchClntNric="
				+ NRIC_id.value + "&strSrchClntNricType=" + NRIC_type.value;

		ajaxCall(
				parameter,
				servletName,
				function(Data) {
					var retval = Data;

					hideLoader();

					for ( var val in retval) {

						var tabdets = retval[val];

						if (tabdets["SESSION_EXPIRY"]) {
							window.location = BASE_URL + SESSION_EXP_JSP;
							return;
						}

						if (tabdets["DB_ERROR"]) {
							window.location = BASE_URL + DB_EXP_JSP;
							return;
						}

						for ( var tab in tabdets) {

							if (tabdets.hasOwnProperty(tab)) {

								var key = tab;
								var value = tabdets[tab];

								if (key == "CLIENT_NRIC_SRCH_NOREC") {
									return true;
								}

								if (key == "CLIENT_NRIC_SRCH") {

									var existclient = "";

									var jsnData = value;

									for ( var cont in jsnData) {
										var contvalue = jsnData[cont];
										for ( var data in contvalue) {
											existclient = (contvalue["dfSelfNricName"]);
										}
									}

									showAlert(
											NRIC_type.value
													+ " : "
													+ NRIC_id.value
													+ " is already exists for the client "
													+ existclient, focusId);
									focusId.value = "";
									focusId.focus();
									return true;

								}
							}
						}

					}
				});
	}
}

function resetForm() {

	for (var i = 0; i < fipaForm.elements.length; i++) {

		var e = fipaForm.elements[i];

		if (e.type == "text") {
			e.value = "";
		}
		if (e.type == "checkbox" || e.type == "radio") {
			e.checked = false;
		}
		if (e.type == "textArea") {
			e.value = "";
		}

	}
}



function hideRegMailAddr() {
	document.getElementById("spanClntDeclReasMailAddr").style.display = "none";
}

function setChkBoxValue(obj) {
	if ($(obj).is(":checked")) {
		$(obj).val('Y');
	} else {
		$(obj).val('N');
	}
}

function getClientDetailsFromFPMS(clientName, clientNRIC, custId) {
	
	var strAdvId = $("#hTxtFldLoggedAdvStfId").val();
//	console.log("strAdvId ->"+strAdvId)
	var parameter = "DBCALLFOR=GET_CUSTDETS_FROMFPMS&strClientName="
			+ clientName + "&strClientNRIC=" + clientNRIC + "&strCustId="+ custId +"&strClientAdvId="+strAdvId;

	ajaxCall(
			parameter,
			servletName,
			function(Data) {

				var retval = Data;

				for ( var val in retval) {

					var tabdets = retval[val];

					if (tabdets["SESSION_EXPIRY"]) {
						window.location = BASE_URL + SESSION_EXP_JSP;
						return;
					}
					if (tabdets["DB_ERROR"]) {
						window.location = BASE_URL + DB_EXP_JSP;
						return;
					}

					for ( var tab in tabdets) {

						if (tabdets.hasOwnProperty(tab)) {
							var key = tab;
							var value = tabdets[tab];
							if (key == "FPMS_CUSTOMER_DETAILS") {

								var jsnData = value;

								for ( var cont in jsnData) {
									

									var contvalue = jsnData[cont];

									for ( var data in contvalue) {
										
										console.log(data +" - " + contvalue[data])
										

										$('input[name=' + data + ']').val( contvalue[data]);
										$('select[name=' + data + ']').val( contvalue[data]);
										$("#"+data).val(contvalue[data])

										if (data == "dfSelfName") { 
											$("#dfSelfName").val(contvalue[data]);
										}
										if (data == "dfSpsName") {
											
											$("#dfSpsName").val(contvalue[data]);
											 
										}

										if (data == "dfSelfNric") {
											$("[name='txtFldClientNric']").val(contvalue[data]);
											$("span[id='txtFldClientNric']").text(contvalue[data]);
										}

										  
										getdob($("#dfSelfDob"), $('#dfSelfAge'),false);
										getdob($("#dfSpsDob"), $('#dfSpsAge'),false);
										
										analysisCheckEvent(this, 'All');
										$("#advstfId").val(advstfId);
										setAdvMgrId(document.getElementById("advstfId"));
										loadSlfSpsName();
										
										
										if($("#txtFldAnalyisForSpouse").is(":checked")){
											chkOwnership('Spouse',false);	  
										}
										if (data == "dfSelfRegmailaddrSame") {

											if (contvalue[data] == 'Y') {
												$("#dfSelfRegmailaddrSame").prop("checked", false);
												
												
											} else {
												$("#dfSelfRegmailaddrSame").prop("checked", true);
												
												
											}
										
										}
										
										
										
									}
								}

								$("#btnSaveProfile").removeClass("hidden"); 
								if(!isEmpty($("#dfSelfName").val())){
//									instantFPMSSaveClientDetails();
								}
								
								
								setSelfAddr($("#dfSelfRegmailaddrSame"));
								setChkBoxValue(fipaForm.dfSelfRegmailaddrSame);
							}
							
							if(key == "CUST_FAMILY_DETS"){
								
								var jsnData = value;
								if(jsnData.length > 0){
									
									for ( var cont in jsnData) {

										var contvalue = jsnData[cont];
										
										
										var depname = contvalue["dfDepnName"];
										var depdob = contvalue["dfDepDOB"];
										var depage = contvalue["dfDepnAge"];
										var depnric = contvalue["dfDepnNRIC"];
										var depgender = contvalue["dfDepnGender"];
										var depmarital = contvalue["dfDepMarital"];
										var depincome= contvalue["dfDepnIncome"];
										var deprel = contvalue["dfDepnRel"];
										var depremark = contvalue["dfDepnRemark"];
										
										
										
										
//										REL06	Daughter										
//										REL21	Son
										deprel = (deprel == "Daughter" || deprel == "REL06") ? "Daughter" :
													((deprel == "Son" || deprel == "REL21") ? "Son" : "");
										
										if(!isEmpty(deprel) && ( deprel == "Son" || deprel == "Daughter" )){
											
											getChildRows(null);
											
											var $lastRow = $("#childParticularsTable tbody tr:last");
											$lastRow.find("td:eq(2)").find('input:eq(0)').val(depname);
											$lastRow.find("td:eq(3)").find('input:eq(0)').val(depdob);
											$lastRow.find("td:eq(4)").find('input:eq(0)').val(depage);
											$lastRow.find("td:eq(5)").find('select:eq(0)').val(deprel);
											
											$lastRow.find("td:eq(6)").find('select:eq(0)').val((deprel == "Son") ? "M" : "F");
											
//											$lastRow.find("td:eq(7)").find('input:eq(0)').val();
											ChgeChildyrToTeritary($lastRow.find("td:eq(5)").find('select:eq(0)'),$lastRow.find("td:eq(4)").find('input:eq(0)'),$lastRow.find("td:eq(7)").find('input:eq(0)'));
											


											
										}
										

										
										
									}
									
								}



								
							}

							if (key == "FPMS_POLICY_DETS") {

								utlipPolicyTbl.clear().draw();
								existPolicyLHIns.clear().draw();

								removeTblRows('existPolicyLHIns');
								removeTblRows('existPolicyUtlip');

								$("#existPolicyLHIns_info").css("display","none");
								$("#existPolicyUtlip_info").css("display","none");

								var poltbl = document.getElementById("existPolicyLHIns");
								var poltbody = poltbl.tBodies[0];

								var ilppoltbl = document.getElementById("existPolicyUtlip");
								var ilppoltbody = ilppoltbl.tBodies[0];

								var jsnData = value;

								for ( var cont in jsnData) {

									var contvalue = jsnData[cont];

									var sublob = contvalue["strFPMSPolLOBSub"];

									var lifInsId;

									if (contvalue["strFipaLifeInsId"] != ""
											|| contvalue["strFipaLifeInsId"] != undefined) {
										lifInsId = contvalue["strFipaLifeInsId"];

									} else {
										lifInsId = "";
									}
									//							 
									var AppName = contvalue["strFPMSPolApplnName"];
									var fipaSymbol = '<a class="btn btn-default exportfipapolicy" id="exportfipapolicy"  onmouseover="dhtmltooltip(this,&quot;Click to view FIPA Policy details&quot;);" ></a><a class="btn btn-default fipadelpolicy" id="fipadelpolicy" onmouseover="dhtmltooltip(this,&quot;Click to delete FIPA Policy detail&quot;);"></a>';
									var fpmsSymbol = '<a class="btn btn-default exportfpmspolicy" id="exportfpmspolicy"  onmouseover="dhtmltooltip(this,&quot;Click to view FPMS Policy details&quot;);"></a>';
									 
									if (sublob == "ILP" || sublob == "UT") {

										var ilppoltbllen = ilppoltbody.rows.length;

										var arow = ilppoltbody
												.insertRow(ilppoltbllen);
 
										var cell0 = '<span></span>'; 

										var emptycell = "";
 
										var cell1 = '<input type="text" readOnly="true" onmouseover="fipaTooltip(this);" class="dhtmlTableText ptrcursor" style="display:inline;width:80px"/><input type="hidden" name="strFipaLifeInsId"/><input type="hidden" name="strFnaId"/><input type="hidden" name="strFPMSAppId"/><input type="hidden" name="strFIPARefId"/>'
												+ ((AppName == "FIPA") ? fipaSymbol
														: fpmsSymbol);
										 
										var cell2 = '<input type="text"  readOnly="true" onmouseover="fipaTooltip(this);" class="dhtmlTableText ptrcursor"/>';

										var cell3 = '<input type="text"  readOnly="true" onmouseover="fipaTooltip(this);" class="dhtmlTableText ptrcursor"/><input type="hidden"/>';

										var cell4 = '<input type="text"  readOnly="true" onmouseover="fipaTooltip(this);" class="dhtmlTableText ptrcursor"/>';

										var cell5 = '<input type="text"  readOnly="true" onmouseover="fipaTooltip(this);" class="dhtmlTableText ptrcursor"/>';



										var cell6 = '<input type="text"  readOnly="true" onmouseover="fipaTooltip(this);" class="dhtmlTableText ptrcursor"/><input type="hidden"/>';

										var cell7 = '<input type="text"  readOnly="true" onmouseover="fipaTooltip(this);" class="dhtmlTableText ptrcursor"/>';
										
										var cell8 = '<input type="text"  readOnly="true" onmouseover="fipaTooltip(this);" class="dhtmlTableText ptrcursor"/>';
										
										var cell9 = '<input type="text"  readOnly="true" onmouseover="fipaTooltip(this);" class="dhtmlTableText ptrcursor"/>';
										
										var cell10 = '<input type="text"  readOnly="true" onmouseover="fipaTooltip(this);" class="dhtmlTableText ptrcursor"/>';
										
										var cell11 = '<input type="text"  readOnly="true" onmouseover="fipaTooltip(this);" class="dhtmlTableText ptrcursor"/>';
										
										var cell12 = '<input type="text"  readOnly="true" onmouseover="fipaTooltip(this);" class="dhtmlTableText ptrcursor"/>';
										
										
										utlipPolicyTbl.row.add(
												[ cell0, cell1, cell2, cell3,
														cell4, cell5, cell6,
														cell7, cell8, cell9,cell10,cell11,cell12
														 ])
												.draw(false);

										var rowCount = $('#existPolicyUtlip tbody tr').length;
										var $lastRow = $("#existPolicyUtlip tbody tr:last");

										$lastRow.find("td:first").find('span')
												.text(rowCount);

										
										$lastRow.find("a").on("click",function(event){
											event.stopPropagation();
										});
										$lastRow.click(function() { 
											
										        callFipaInsuranceDets($(this));
										        
										});
										
										
										$lastRow
												.find("td:eq(1)")
												.find('input:eq(0)')
												.val(
														contvalue["strFPMSPolApplnName"]);
										$lastRow.find("td:eq(1)").find(
												'input:eq(1)').val(
												contvalue["strFipaLifeInsId"]);
										$lastRow.find("td:eq(1)").find(
												'input:eq(2)').val(
												contvalue["strFnaId"]);
										$lastRow.find("td:eq(1)").find(
												'input:eq(3)').val(
												contvalue["strFPMSPolAppId"]);
										$lastRow.find("td:eq(1)").find(
										'input:eq(4)').val(
										contvalue["strFIPARefId"]);
										
										$lastRow
												.find("td:eq(1)")
												.find("a:eq(0)")
												.on(
														"click",
														function() {
															
															callFipaInsuranceDets($(this).closest("tr")); 
														});

										$lastRow
												.find("td:eq(1)")
												.find("a[id='fipadelpolicy']")
												.on(
														"click",
														function() {
															callDeletePolicy(
																	$(this),
																	utlipPolicyTbl,
																	'existPolicyUtlip');
														});

										var prin;

										if(AppName == "FIPA"){
												if(!isEmpty(contvalue["strFPMSPolPrincipalName"])){
													prin=$("#lipCompany").find('option[value="' + contvalue["strFPMSPolPrincipal"] + '"]').text();
												} 
										}else{
											prin=contvalue["strFPMSPolPrincipal"];
										}
										$lastRow
												.find("td:eq(2)")
												.find('input:eq(0)')
												.val(
														prin);
										$lastRow
										.find("td:eq(3)")
										.find('input:eq(1)')
										.val(
												contvalue["strFPMSPolProposed"]);
										
										$lastRow
										.find("td:eq(3)")
										.find('input:eq(0)')
										.val(
												contvalue["strFPMSPolOwner"]);
										
										$lastRow
										.find("td:eq(4)")
										.find('input:eq(0)')
										.val(
												contvalue["strFPMSPolLifeAssured"]);
										
										$lastRow.find("td:eq(5)").find(
												'input:eq(0)').val(
												contvalue["strFPMSPolPolNo"]);

										$lastRow
												.find("td:eq(6)")
												.find('input:eq(0)')
												.val(
														contvalue["strFPMSPolPlanName"]);
										$lastRow
												.find("td:eq(6)")
												.find('input:eq(1)')
												.val(
														contvalue["strFPMSPolCustName"]);

										$lastRow
										.find("td:eq(7)")
										.find('input:eq(0)')
										.val(
												contvalue["strFPMSPolCoverages"]);
										
										
										$lastRow.find("td:eq(8)").find(
												'input:eq(0)').val(
												contvalue["strFPMSPolEffDate"]);
										$lastRow.find("td:eq(9)").find(
												'input:eq(0)').val(
												contvalue["strFPMSPolStatus"]);
										$lastRow.find("td:eq(10)").find(
												'input:eq(0)').val(
												contvalue["strFPMSPolSA"]);
										$lastRow.find("td:eq(10)").find('input:eq(0)').css("text-align","right");
										
										$lastRow.find("td:eq(11)").find(
												'input:eq(0)').val(
												contvalue["strFPMSPolPremium"]);
										$lastRow.find("td:eq(11)").find('input:eq(0)').css("text-align","right");

										$lastRow.find("td:eq(12)").find(
												'input:eq(0)').val(
												contvalue["strFPMSPolLOBMain"]
														+ "/" + sublob);
//										$lastRow.find("td:eq(13)").addClass(
//												"hidden")

									} else {

										var poltbllen = poltbody.rows.length;

										var crow = poltbody
												.insertRow(poltbllen);

										var cell0 = '<span></span>';
										var emptycell = "";
										var cell1 = '<input type="text"  readOnly="true" onmouseover="fipaTooltip(this);" class="dhtmlTableText ptrcursor" style="display:inline;width:80px"/><input type="hidden" name="strFipaLifeInsId"/><input type="hidden" name="strFnaId"/><input type="hidden" name="strFPMSAppId"/><input type="hidden" name="strFIPARefId"/>'
												+ ((AppName == "FIPA") ? fipaSymbol
														: fpmsSymbol);

										var cell2 = '<input type="text"  readOnly="true" onmouseover="fipaTooltip(this);" class="dhtmlTableText ptrcursor"/>';
										
										var cell3 = '<input type="text"  readOnly="true" onmouseover="fipaTooltip(this);" class="dhtmlTableText ptrcursor"/><input type="hidden"/>';
										
										var cell4 = '<input type="text"  readOnly="true" onmouseover="fipaTooltip(this);" class="dhtmlTableText ptrcursor"/><input type="hidden"/>';
										
										var cell5 = '<input type="text"  readOnly="true" onmouseover="fipaTooltip(this);" class="dhtmlTableText ptrcursor"/><input type="hidden"/>';
										
										var cell6 = '<input type="text"  readOnly="true" onmouseover="fipaTooltip(this);" class="dhtmlTableText ptrcursor"/>';
										
										var cell7 = '<input type="text"  readOnly="true" onmouseover="fipaTooltip(this);" class="dhtmlTableText ptrcursor"/>';
										
										var cell8 = '<input type="text"  readOnly="true" onmouseover="fipaTooltip(this);" class="dhtmlTableText ptrcursor"/>';
										
										var cell9 = '<input type="text"  readOnly="true" onmouseover="fipaTooltip(this);" class="dhtmlTableText ptrcursor"/>';

										var cell10 = '<input type="text"  readOnly="true" onmouseover="fipaTooltip(this);" class="dhtmlTableText ptrcursor"/>';
										
										var cell11 = '<input type="text"  readOnly="true" onmouseover="fipaTooltip(this);" class="dhtmlTableText ptrcursor"/>';

										var cell12 = '<input type="text"  readOnly="true" onmouseover="fipaTooltip(this);" class="dhtmlTableText ptrcursor"/>';
										
										existPolicyLHIns.row.add(
												[ cell0, cell1, cell2, cell3,
														cell4, cell5, cell6,
														cell7, cell8, cell9,cell10,cell11,cell12
														 ])
												.draw(false);

										var rowCount = $('#existPolicyLHIns tbody tr').length;
										var $lastRow = $("#existPolicyLHIns tbody tr:last");

										$lastRow.find("td:first").find('span')
												.text(rowCount);

										$lastRow.find("a").on("click",function(event){
											event.stopPropagation();
										});
										$lastRow.click(function() {
											
										        callFipaInsuranceDets($(this));
										        
										    
										});
										
										$lastRow
												.find("td:eq(1)")
												.find('input:eq(0)')
												.val(
														contvalue["strFPMSPolApplnName"]);
										$lastRow.find("td:eq(1)").find(
												'input:eq(1)').val(
												contvalue["strFipaLifeInsId"]);
										$lastRow.find("td:eq(1)").find(
												'input:eq(2)').val(
												contvalue["strFnaId"]);
										$lastRow.find("td:eq(1)").find(
												'input:eq(3)').val(
												contvalue["strFPMSPolAppId"]);
										$lastRow.find("td:eq(1)").find(
										'input:eq(4)').val(
										contvalue["strFIPARefId"]);
										
										$lastRow
												.find("td:eq(1)")
												.find("a:eq(0)")
												.on(
														"click",
														function() {
															
															callFipaInsuranceDets($(this).closest("tr")); 
														});
										$lastRow
												.find("td:eq(1)")
												.find("a[id='fipadelpolicy']")
												.on(
														"click",
														function() {
															callDeletePolicy(
																	$(this),
																	existPolicyLHIns,
																	'existPolicyLHIns');
														});

										var prin;

										if(AppName == "FIPA"){
												if(!isEmpty(contvalue["strFPMSPolPrincipalName"])){
													prin=$("#lipCompany").find('option[value="' + contvalue["strFPMSPolPrincipal"] + '"]').text();
												} 
										}else{
											prin=contvalue["strFPMSPolPrincipal"];
										}
										$lastRow
												.find("td:eq(2)")
												.find('input:eq(0)')
												.val(
														prin);

										$lastRow
										.find("td:eq(3)")
										.find('input:eq(1)')
										.val(
												contvalue["strFPMSPolProposed"]);
										
										$lastRow
										.find("td:eq(3)")
										.find('input:eq(0)')
										.val(
												contvalue["strFPMSPolOwner"]);
										
										$lastRow
										.find("td:eq(4)")
										.find('input:eq(0)')
										.val(
												contvalue["strFPMSPolLifeAssured"]);
										
										$lastRow.find("td:eq(5)").find(
												'input:eq(0)').val(
												contvalue["strFPMSPolPolNo"]);
										$lastRow
												.find("td:eq(5)")
												.find('input:eq(1)')
												.val(
														contvalue["strFPMSPolCustName"]);

										$lastRow
												.find("td:eq(6)")
												.find('input:eq(0)')
												.val(
														contvalue["strFPMSPolPlanName"]);
										$lastRow
										.find("td:eq(7)")
										.find('input:eq(0)')
										.val(
												contvalue["strFPMSPolCoverages"]);
										
										$lastRow.find("td:eq(8)").find(
												'input:eq(0)').val(
												contvalue["strFPMSPolEffDate"]);
										$lastRow.find("td:eq(9)").find(
												'input:eq(0)').val(
												contvalue["strFPMSPolStatus"]);
										$lastRow.find("td:eq(10)").find(
												'input:eq(0)').val(
												contvalue["strFPMSPolSA"]);
										$lastRow.find("td:eq(10)").find('input:eq(0)').css("text-align","right");
										
										$lastRow.find("td:eq(11)").find(
												'input:eq(0)').val(
												contvalue["strFPMSPolPremium"]);
										$lastRow.find("td:eq(11)").find('input:eq(0)').css("text-align","right");

										$lastRow.find("td:eq(12)").find(
												'input:eq(0)').val(
												contvalue["strFPMSPolLOBMain"]
														+ "/" + sublob);
//										$lastRow.find("td:eq(13)").addClass(
//												"hidden")

									}

								}
							}
							
							if(key == "CLNT_LIFEPREM_AMT"){

								var strPremAmtSelf=0,strPremAmtSpouse=0,strPremAmtFamily=0;
								var tempSelfIns =$("#expdSelfInsurance").val();
								var tempSpsIns =$("#expdSpsInsurance").val();
								var tempFamIns =$("#expdFamilyInsurance").val();
								
								if(key=="CLNT_LIFEPREM_AMT"){
									$.each(value, function(contkey, contvalue) { 
//										console.log(contkey +" = " + contvalue);
										
										var appName = contvalue["jsonApplnName"];
										var lifeId 	= contvalue["jsonLifeId"];
										var owner 	= contvalue["jsonLifeOwner"];
										var planName= contvalue["jsonLifePlanName"];
										var incDate = contvalue["jsonLifeIncDate"];
										var payMode = contvalue["jsonLifePayMode"]; 
										var paymtd = contvalue["jsonLifePayMtd"]; 
										var premAmt = contvalue["jsonLifePremAmt"];   
										var polDate = contvalue["jsonLifePolDate"];
										var planterm = contvalue["jsonLifePlanTerm"];
										var planuniqid = contvalue["jsonLifePlanId"];
										var planstatus = contvalue["jsonLifePlanStatus"];
										
										if( isCPFRelated ( paymtd ) || isSRSRelated (paymtd) ){ 
											if(appName == "FPMSNL"){ 
//										 		  if(opts == "FETCH"){
										 		 	 syncFPMSCpf(contvalue,lifeId);
//										 		 }
										 	 }
											}
										
										 if( isCashRelated  (paymtd) ){
					 
										if(!isEmpty(premAmt) && isValidObject(premAmt)){
											
											 var TopUpAmt= getFrequencyDigit(payMode, 0);
										 		
										 		 var stillNeedTopay=false;
										 		 var sumamt	=	premAmt*TopUpAmt;
										 		 stillNeedTopay 	= validateDateComparision(polDate,ResultNewDate,">="); 
										 		
										 if(stillNeedTopay){
											if(owner == "Self"){
												strPremAmtSelf +=Number(sumamt);
											}
											if(owner == "Spouse"){
												strPremAmtSpouse +=Number(sumamt);
											}
											if(owner == "Parents" || owner == "Joint"){
												strPremAmtFamily +=Number(sumamt);
											} 
										  }
										}
										 }
									});
									
									
									
									 $("#expdSelfInsurance").val(roundNumber(strPremAmtSelf)); 
									 /*$("#expdSelfInsurance").attr("data-attr",tempSelfIns).attr("onmouseover","toolTipLifeShow($(this))");
									 if(tempSelfIns  != $("#expdSelfInsurance").val() && !isEmpty($("#expdSelfInsurance").attr("data-attr"))){
										 $("#expdSelfInsurance").addClass("alterColor");
									 }else{
										 $("#expdSelfInsurance").removeClass("alterColor");
									 }*/
									 
								     $("#expdSpsInsurance").val(roundNumber(strPremAmtSpouse));
								     /*$("#expdSpsInsurance").attr("data-attr",tempSpsIns).attr("onmouseover","toolTipLifeShow($(this))");
								     if( tempSpsIns  != $("#expdSpsInsurance").val() &&   !isEmpty($("#expdSpsInsurance").attr("data-attr")) ){
								    	 $("#expdSpsInsurance").addClass("alterColor");
									 }else{
										 $("#expdSpsInsurance").removeClass("alterColor");
									 }*/
								     $("#expdFamilyInsurance").val(roundNumber(strPremAmtFamily));   
								     /*$("#expdFamilyInsurance").attr("data-attr",tempFamIns).attr("onmouseover","toolTipLifeShow($(this))");
								     if(tempFamIns != $("#expdFamilyInsurance").val() && !isEmpty($("#expdFamilyInsurance").attr("data-attr"))){
								    	 $("#expdFamilyInsurance").addClass("alterColor");
									 }else{
										 $("#expdFamilyInsurance").removeClass("alterColor");
									 }*/ 
								     
									 calcSum(this,'SUMOF_ANNEXP_SELF');
									 calcSum(this,'SUMOF_ANNEXP_SPS');
									 calcSum(this,'SUMOF_ANNEXP_FAM');  
									 
								}
							}
							
						}
					}

				}

				
			});
	
	addDefaultCpfLifeRows(null);//Retirement CPF Life default Values 
	openClientSection();
	
	setDefltCurrAssmVal();
	setDefltContingVal();
}

function toggleDiv(id, hid) {

	$("#" + id).show();
	var srchFldsArrCpfAll = [ hid ];
	$.each(srchFldsArrCpfAll, function(index, value) {
		$("#" + srchFldsArrCpfAll[0]).hide();
	});
}

function openClientSection() {
	
	$('.sidebar-menu li').removeClass("hidden");
	$('.sidebar-menu li:eq(2)').removeClass("hidden");
	$("#typesofappln_li").trigger("click");
	$("#typesofappln_li").show();
	$(".clsfipaReadonly").prop("disabled", true);
	/*alert("5149");
	$(".sidebar").removeClass("hidden");
	$("#txtNavClientDtls").removeClass("hidden");*/
	/*$(".mainmenu").removeClass("hidden");
	$("#txtNavClientDtls").show();*/
//	$(".menu_section>ul.hidden").removeClass("hidden");
	
	
//	var def = $("#hTxtMenuName").val();
//	if (FIPAMenu == "" || def == "Profile Search" || def == "Default"|| def == "Profile") {
//		openDivForClient('typesofappln', 'typesofappsec', 'typesofAppln_li','Types of Application');
//		hideLoader();
//	}
}

function openProfileSection() {
	
	$('.sidebar-menu li').removeClass("hidden");
	$('.sidebar-menu li:eq(1)').removeClass("hidden");
	$("#profilelist_li").trigger("click");
	

//	show($("#profile_li"),'profilepage');
//	showchild('profilesection');
//	openDivForClient('profilepage', 'profilesection', 'profile_li',	'Profile Search');
	hideLoader();
}

function setFNAType(thisobj, value) {
	$("input[name='fnaType'][value='" + value + "']").attr("checked", true);
}

function disableSlfSpseFamFields() {
	$(".clsfipaClient").prop("disabled", true);
	$(".clsfipaSpouse").prop("disabled", true);
	$(".clsfipaSpouse").val("");
	$(".clsfipaFamily").prop("disabled", true);
	$(".clsfipaFamily").val("");
	$('#dobSlfpicker').datetimepicker('remove');
	$('#dobSpspicker').datetimepicker('remove');
	$("#dfSelfRegmailaddrSame").attr("disabled", true);
	$("#dfSpsRegmailaddrSame").attr("disabled", true);
	$("#dfSpsRegmailaddrSame").attr("disabled", true);
	$("#dfSpsMailaddrAsSelf").attr("disabled", true);
}

function validateClientDets() {
	if (!(stafftype == 'STAFF')) {
		// if(!(validateMandatoryOfTypesOfApplication(fipaForm))) return;
		// if(!(validateMandatoryOfPersonalParticulars(fipaForm))) return;
	}
	return true;
}

function callDatePickers(chklatestid) {
	if (chklatestid == 1) {
		$('#dobSlfpicker,#dobSpspicker').datetimepicker(dobOptions);
		$(
				'#COBPerFrmpicker,#COBPerTopicker,#CADPerFrmpicker,#CADPerTopicker,'
						+ '#InvDateInvstDatepicker,#InvDateInvstDatepicker,'
						+ '#LIIncptDatepicker,#DsblIncptDatepicker,#CrtlsIncptDatepicker,#DsblExpryDatepicker,#LIExpiryDatepicker,#PlnIncDatepicker,#PlnExpDatepicker,#LIMaturityDatepicker,#DfIncepDatepicker,'
						+ '#DfExpiryDatepicker,#CrtlnsExpDatepicker,#HospIncptDatepicker,#HospExpDatepicker,'
						+ '#HIExpirypicker, #SrchCpfAllocEffFrompicker,#dlgCpfAllocEffFrompicker,'
						+ '#SrchCpfIntMthpicker,#dlgCpfIntMthpicker')
				.datetimepicker(dateOptions);

	} else if (chklatestid > 1) {
		$('#dobSlfpicker,#dobSpspicker').datetimepicker("remove");
		$(
				'#COBPerFrmpicker,#COBPerTopicker,#CADPerFrmpicker,#CADPerTopicker,'
						+ '#InvDateInvstDatepicker,#InvDateInvstDatepicker,'
						+ '#LIIncptDatepicker,#DsblIncptDatepicker,#CrtlsIncptDatepicker,#DsblExpryDatepicker,#LIExpiryDatepicker,#PlnIncDatepicker,#PlnExpDatepicker,#LIMaturityDatepicker,#DfIncepDatepicker,'
						+ '#DfExpiryDatepicker,#CrtlnsExpDatepicker,#HospIncptDatepicker,#HospExpDatepicker,'
						+ '#HIExpirypicker, #SrchCpfAllocEffFrompicker,#dlgCpfAllocEffFrompicker,'
						+ '#SrchCpfIntMthpicker,#dlgCpfIntMthpicker')
				.datetimepicker("remove");
	}
}

$("input:checkbox[name=txtFldAnalyisFor]").on("click", function() {
	
	chkedJSONCollection(this, 'appAnalysisFor');
});

$("input:checkbox[name=txtFldPurpose]").on("click", function() {
	
	chkedJSONCollection(this, 'appPurpose');
});

$("input:checkbox[name=txtFldClientChoice]").on("click", function() {
	
	chkedJSONCollection(this, 'appClientChoice');
});
$("input:checkbox[name=chkArNewRecom]").on("click", function() {
	chkedJSONCollection(this, 'arNewRecomm');
});

function chkedJSONCollection(chkbox, hiddenObj) {
	var hiddenObjval = $("#" + hiddenObj); 
	var jsonVal = JSON.parse(isEmpty(hiddenObjval.val()) ? "{}" : hiddenObjval
			.val());
	var ischecked = $(chkbox).is(":checked");
	var checkedVal = $(chkbox).attr("data-attr");

	var resObj = jsonVal;
	resObj[checkedVal] = (ischecked == true ? "Y" : "N");
	hiddenObjval.val(JSON.stringify(resObj)); 
}

// Address Section Scenarios

function setSelfAddr(object) {
	{
		if ($(object).is(":checked")) {
			$('#dfSelfMailaddr').prop('readonly', false).removeClass(
					"readOlyCursor");
			$('#dfSelfMailaddr2').prop('readonly', false).removeClass(
					"readOlyCursor");
			$('#dfSelfMailpostal').prop('readonly', false).removeClass(
					"readOlyCursor");
			$('#dfSelfMailcntry').prop('disabled', false).removeClass(
					"disabledCursor");
			$('#dfSelfAddrreason').prop('disabled', false).removeClass(
					"disabledCursor");
		} else {
			$('#dfSelfMailaddr').val($("#dfSelfHomeaddr").val()).prop(
					'readonly', true).addClass("readOlyCursor");
			$('#dfSelfMailaddr2').val($("#dfSelfHomeaddr2").val()).prop(
					'readonly', true).addClass("readOlyCursor");
			$('#dfSelfMailpostal').val($("#dfSelfHomepostal").val()).prop(
					'readonly', true).addClass("readOlyCursor");
			$('#dfSelfMailcntry').val($("#dfSelfHomecntry").val()).prop(
					'disabled', true).addClass("disabledCursor");
			$('#dfSelfAddrreason').val("").prop('disabled', true).addClass(
					"disabledCursor");
		}

	}
}

$("input:checkbox[name=dfSelfRegmailaddrSame]").on(
		"click",
		function() {
			if ($(this).is(":checked")) {
				$('#dfSelfMailaddr').val("").prop('readonly', false)
						.removeClass("readOlyCursor");
				$('#dfSelfMailaddr2').val("").prop('readonly', false)
						.removeClass("readOlyCursor");
				$('#dfSelfMailpostal').val("").prop('readonly', false)
						.removeClass("readOlyCursor");
				$('#dfSelfMailcntry').val("").prop('disabled', false)
						.removeClass("disabledCursor");
				$('#dfSelfAddrreason').val("").prop('disabled', false)
						.removeClass("disabledCursor");
			} else {
				$('#dfSelfMailaddr').val($("#dfSelfHomeaddr").val()).prop(
						'readonly', true).addClass("readOlyCursor");
				$('#dfSelfMailaddr2').val($("#dfSelfHomeaddr2").val()).prop(
						'readonly', true).addClass("readOlyCursor");
				$('#dfSelfMailpostal').val($("#dfSelfHomepostal").val()).prop(
						'readonly', true).addClass("readOlyCursor");
				$('#dfSelfMailcntry').val($("#dfSelfHomecntry").val()).prop(
						'disabled', true).addClass("disabledCursor");
				$('#dfSelfAddrreason').val("").prop('disabled', true).addClass(
						"disabledCursor");
			}

		});

$("input:checkbox[name=dfSpsRegmailaddrSame]").on(
		"click",
		function() {

			if ($(this).is(":checked")) {
				if ($("input:checkbox[name=dfSpsMailaddrAsSelf]")
						.is(":checked")) {
					$("input:checkbox[name=dfSpsMailaddrAsSelf]").prop(
							"checked", false).val("N");
				}
				$('#dfSpsMailaddr').val("").prop('readonly', false)
						.removeClass("readOlyCursor");
				$('#dfSpsMailaddr2').val("").prop('readonly', false)
						.removeClass("readOlyCursor");
				$('#dfSpsMailpostal').val("").prop('readonly', false)
						.removeClass("readOlyCursor");
				$('#dfSpsMailcntry').val("").prop('disabled', false)
						.removeClass("disabledCursor");
				$('#dfSpsAddrreason').val("").prop('disabled', false)
						.removeClass("disabledCursor");
				$("#dfSpsMailaddr").prop("disabled", false);
				$("#dfSpsMailaddr2").prop("disabled", false);
				$("#dfSpsMailpostal").prop("disabled", false);
				
				
			}else{
				$("input:checkbox[name=dfSpsMailaddrAsSelf]").click();
			}
		});

$("input:checkbox[name=dfSpsRegaddrAsSelf]").on(
		"click",
		function() {

			if ($(this).is(":checked")) {

				$("input:checkbox[name=dfSpsMailaddrAsSelf]").prop('checked',
						true).val("Y");

				$("#dfSpsHomeaddr").val($("#dfSelfHomeaddr").val()).prop(
						'readonly', true).addClass("readOlyCursor");
				$("#dfSpsHomeaddr2").val($("#dfSelfHomeaddr2").val()).prop(
						'readonly', true).addClass("readOlyCursor");
				$("#dfSpsHomepostalcode").val($("#dfSelfHomepostal").val())
						.prop('readonly', true).addClass("readOlyCursor");
				$("#dfSpsHomecntry").val($("#dfSelfHomecntry").val()).prop(
						'disabled', true).addClass("disabledCursor");

				if (!$("input:checkbox[name=dfSpsRegmailaddrSame]").is(
						":checked")) {

					$('#dfSpsMailaddr').val($("#dfSelfHomeaddr").val()).prop(
							'readonly', true).addClass("readOlyCursor");
					$('#dfSpsMailaddr2').val($("#dfSelfHomeaddr2").val()).prop(
							'readonly', true).addClass("readOlyCursor");
					$('#dfSpsMailpostal').val($("#dfSelfHomepostal").val())
							.prop('readonly', true).addClass("readOlyCursor");
					$('#dfSpsMailcntry').val($("#dfSelfHomecntry").val()).prop(
							'disabled', true).addClass("disabledCursor");
					$('#dfSpsAddrreason').val("").prop('disabled', true)
							.addClass("disabledCursor");
				} else {
					$("input:checkbox[name=dfSpsMailaddrAsSelf]").prop(
							'checked', false).val("N");
					$('#dfSpsMailaddr').val("").prop('readonly', false)
							.removeClass("readOlyCursor");
					$('#dfSpsMailaddr2').val("").prop('readonly', false)
							.removeClass("readOlyCursor");
					$('#dfSpsMailpostal').val("").prop('readonly', false)
							.removeClass("readOlyCursor");
					$('#dfSpsMailcntry').val("").prop('disabled', false)
							.removeClass("disabledCursor");
					$('#dfSpsAddrreason').val("").prop('disabled', false)
							.removeClass("disabledCursor");
					$('#dfSpsAddrreason').val("").prop('disabled', false)
							.removeClass("disabledCursor");
				}

			} else {

				$("input:checkbox[name=dfSpsMailaddrAsSelf]").prop('checked',
						false).val("N");

				$("#dfSpsHomeaddr").val("").prop('readonly', false)
						.removeClass("readOlyCursor");
				$("#dfSpsHomeaddr2").val("").prop('readonly', false)
						.removeClass("readOlyCursor");
				$("#dfSpsHomepostalcode").val("").prop('readonly', false)
						.removeClass("readOlyCursor");
				$("#dfSpsHomecntry").val("").prop('disabled', false)
						.removeClass("disabledCursor");

				if (!$("input:checkbox[name=dfSpsRegmailaddrSame]").is(
						":checked")) {
					$('#dfSpsMailaddr').val("").prop('readonly', true)
							.addClass("readOlyCursor");
					$('#dfSpsMailaddr2').val("").prop('readonly', true)
							.addClass("readOlyCursor");
					$('#dfSpsMailpostal').val("").prop('readonly', true)
							.addClass("readOlyCursor");
					$('#dfSpsMailcntry').val("").prop('disabled', true)
							.addClass("disabledCursor");
					$('#dfSpsAddrreason').val("").prop('disabled', true)
							.addClass("disabledCursor");
				}
			}
		});

$("input:checkbox[name=dfSpsMailaddrAsSelf]").on(
		"click",
		function() {
			if ($(this).is(":checked")) {

				if ($("input:checkbox[name=dfSpsRegmailaddrSame]").is(
						":checked")) {
					if ($("input:checkbox[name=dfSpsRegmailaddrSame]").is(
							":checked")) {
						$("input:checkbox[name=dfSpsRegmailaddrSame]").prop(
								"checked", false).val("N");
					}
				}

				$('#dfSpsMailaddr').val($("#dfSelfHomeaddr").val()).prop(
						'readonly', true).addClass("readOlyCursor");
				$('#dfSpsMailaddr2').val($("#dfSelfHomeaddr2").val()).prop(
						'readonly', true).addClass("readOlyCursor");
				$('#dfSpsMailpostal').val($("#dfSelfHomepostal").val()).prop(
						'readonly', true).addClass("readOlyCursor");
				$('#dfSpsMailcntry').val($("#dfSelfHomecntry").val()).prop(
						'disabled', true).addClass("disabledCursor");
				$('#dfSpsAddrreason').val("").prop('disabled', true).addClass(
						"disabledCursor");
			} else {
				$("input:checkbox[name=dfSpsRegmailaddrSame]").click();
//				$('#dfSpsMailaddr').val("").prop('readonly', true).addClass(
//						"readOlyCursor");
//				$('#dfSpsMailaddr2').val("").prop('readonly', true).addClass(
//						"readOlyCursor");
//				$('#dfSpsMailpostal').val("").prop('readonly', true).addClass(
//						"readOlyCursor");
//				$('#dfSpsMailcntry').val("").prop('disabled', true).addClass(
//						"disabledCursor");
//				$('#dfSpsAddrreason').val("").prop('disabled', true).addClass(
//						"disabledCursor");
			}

		});

// Types of Application -Analysis For Section Scenarios
$("input:checkbox[name='txtFldAnalyisFor'][data-attr='ANALYS_SLF']").on(
		"click", function() {
			if ($(this).is(":checked")) {
				$(".clsfipaClient").prop("disabled", false);
				$('#dobSlfpicker').datetimepicker(dobOptions);
				$("#dfSelfRegmailaddrSame").prop("disabled", false);
				mailAddress('Slf', false, 'rmv');
				regAddress('Slf', false, 'rmv');
				$("#dfSelfMailcntry").prop("disabled", true);
				$("#dfSelfAddrreason").prop("disabled", true);
				

			} else {
				$(".clsfipaClient").prop("disabled", true);
				$('#dobSlfpicker').datetimepicker('remove');
//				clearAllSlfSpsFields('Self');
				$("#dfSelfRegmailaddrSame").prop("disabled", true);
				$("#dfSelfMailcntry").prop("disabled", true);
				$("#dfSelfAddrreason").prop("disabled", true);
			}
		});

$("input:checkbox[name='txtFldAnalyisFor'][data-attr='ANALYS_SPS']").on(
		"click", function() {
			if ($(this).is(":checked")) {
				$(".clsfipaSpouse").prop("disabled", false);
				$('#dobSpspicker').datetimepicker(dobOptions);
				$("#dfSpsRegaddrAsSelf").prop("disabled", false);
				$("#dfSpsRegmailaddrSame").prop("disabled", false);
				$("#dfSpsMailaddrAsSelf").prop("disabled", false);
				$("#dfSpsHomecntry").prop("disabled", false);
				
				$("#dfSpsMailaddr").attr("readonly", false);
				$("#dfSpsMailaddr2").attr("readonly", false);
				$("#dfSpsMailpostal").attr("readonly", false);
				$("#dfSpsMailcntry").attr("readonly", false);
				$("#dfSpsAddrreason").attr("readonly", false);
				
				$("#dfSpsMailaddr").prop("disabled", false);
				$("#dfSpsMailaddr2").prop("disabled", false);
				$("#dfSpsMailpostal").prop("disabled", false);
				$("#dfSpsMailcntry").prop("disabled", false);
				$("#dfSpsAddrreason").prop("disabled", false);
				
				$("#dfSpsMailaddr").removeClass("readOlyCursor");
				$("#dfSpsMailaddr2").removeClass("readOlyCursor");
				$("#dfSpsMailpostal").removeClass("readOlyCursor");
				$("#dfSpsMailcntry").removeClass("disabledCursor");
				$("#dfSpsAddrreason").removeClass("disabledCursor");
				
				$("input[name=txtFldDepnProvSps]").each(function() {  
					 
							 $(this).prop("disabled",false); 
							 /*DpdcalculateRow(); */
							 DpndcalculateRow();
			     });
				 $("input[name=txtFldPropCpfLoanBySpsCpf]").each(function() {  
			    	 
							 $(this).prop("disabled",false); 
					 
			     });
				 $("input[name=txtFldPropCpfLoanBySpsCash]").each(function() {  
			    	 
							 $(this).prop("disabled",false);  
			      }); 
				 chkOwnership('Spouse',false);
				 $('#retAgeBasedon').find('option').remove().end().append('<option>--SELECT--</option>').append('<option value="Self">Self</option>').val('Self').append('<option value="Spouse">Spouse</option>').val('Spouse');
				 $("#retAgeBasedon option:contains('--SELECT--')").attr("selected", true); 
			} else {
				
				clearAllSlfSpsFields('Spouse');
				/*$(".clsfipaSpouse").prop("disabled", false);
				$('#dobSpspicker').datetimepicker(dobOptions);
				$("#dfSpsRegaddrAsSelf").prop("disabled", false);
				$("#dfSpsRegmailaddrSame").prop("disabled", false);
				$("#dfSpsMailaddrAsSelf").prop("disabled", false);
				$("#dfSpsHomecntry").prop("disabled", false);*/
				$("#dfSpsMailaddr").prop("disabled", true);
				$("#dfSpsMailaddr2").prop("disabled", true);
				$("#dfSpsMailpostal").prop("disabled", true);
				$("#dfSpsMailcntry").prop("disabled", true);
				$("#dfSpsAddrreason").prop("disabled", true);
			}
			
			$("#dfSelfNationality").val("Singaporean");
			$("#dfSpsNationality").val("Singaporean");
			$("#dfSpsMartsts").val("Married");

		});

$("input:checkbox[name='txtFldAnalyisFor'][data-attr='ANALYS_FAM']").on(
		"click", function() {
			if ($(this).is(":checked")) {
				$(".clsfipaFamily").prop("disabled", false);
				chkOwnership('Family',false);
			} else {
				clearAllSlfSpsFields('Family');
				$(".clsfipaFamily").prop("disabled", true);

			}
		});

//Martial Status Validation 
$("#dfSelfMartsts").on("change",function(){ 
//	clientMartSts($(this).val(),true);
//	chkSpouseIncluded();
	$("#dfSelfNationality").val("Singaporean");
	$("#dfSpsNationality").val("Singaporean");
	$("#dfSpsMartsts").val("Married");
});

function clientMartSts(status,flg){
	if(status == "Single"){
		$(".clsfipaSpouse").prop("disabled", true);
		$(".clsfipaSpouse").val("");
		$('#dobSpspicker').datetimepicker('remove');
		if(flg){
		clearAllSlfSpsFields('Spouse');
		}else{
			 $('#dfSpsDob').val('');
		    	 $('.clsfipaSpouse').each(function() {  
		    		$(this).val('');
		    	 });
		    	 $('.clearfipaSpouse').each(function() {  
			    		$(this).val('');
			    		$(this).prop("readonly",true);
			    	 });
		  	 
				 $("input[name=txtFldDepnProvSps]").each(function() {  
						 
							 $(this).prop("disabled",true);
							 $(this).val("");
							/*DpdcalculateRow(); */
							DpndcalculateRow();
			    		 
			    	 });
			    	 $("input[name=txtFldPropCpfLoanBySpsCpf]").each(function() {  
			    		 
							 $(this).prop("disabled",true);
							 $(this).val("");
						  
			    	 });
			    	 $("input[name=txtFldPropCpfLoanBySpsCash]").each(function() {  
			    		 
							 $(this).prop("disabled",true);
							 $(this).val("");
						  
			    	 }); 
		    	$("#dfSpsRegmailaddrSame").prop("checked",false); 
		    	$("#dfSpsRegmailaddrSame").prop("checked",false); 
		    	$("#dfSpsMailaddrAsSelf").prop("checked",false); 
		    	$("#dfSpsHomecntry").val(''); 
		    		chkOwnership('Spouse',true); 
		}
		$("#dfSpsRegaddrAsSelf").prop("disabled", true);
		$("#dfSpsRegaddrAsSelf").prop("checked", false);
		$("#dfSpsRegmailaddrSame").prop("disabled", true);
		$("#dfSpsRegmailaddrSame").prop("checked", false);
		$("#dfSpsMailaddrAsSelf").prop("disabled", true);
		$("#dfSpsMailaddrAsSelf").prop("checked", false);
		$("#dfSpsHomecntry").prop("disabled", true);
	}else{
		
		$(".clsfipaSpouse").prop("disabled", false);
		$('#dobSpspicker').datetimepicker(dobOptions);
		$("#dfSpsRegaddrAsSelf").prop("disabled", false);
		$("#dfSpsRegmailaddrSame").prop("disabled", false);
		$("#dfSpsMailaddrAsSelf").prop("disabled", false);
		$("#dfSpsHomecntry").prop("disabled", false);
		
		$("input[name=txtFldDepnProvSps]").each(function() {  
			 
					 $(this).prop("disabled",false); 
			 
	     });
		 $("input[name=txtFldPropCpfLoanBySpsCpf]").each(function() {  
	    	 
					 $(this).prop("disabled",false); 
			 
	     });
		 $("input[name=txtFldPropCpfLoanBySpsCash]").each(function() {  
	    	 
					 $(this).prop("disabled",false);  
	      }); 
		 
		 chkOwnership('Spouse',false);
	}
}
$("input:radio[id=mgrAgreeFlagYes]").on("click", function() {
	if (!validateDetails())
		return;
	// if(!(stafftype == STAFFTYPE_STAFF)){
	$("#mgrFollowupRemarks").prop("readonly", false);
	$('#mgrFollowupRemarks').removeClass("readOlyCursor");
	$("#mgrFollowupRemarks").focus();
	// }
});

$("input:radio[id=mgrAgreeFlagNo]").on("click", function() {
	if (!validateDetails())
		return;
	// if(!(stafftype == STAFFTYPE_STAFF)){
	$("#mgrFollowupRemarks").prop("readonly", true);
	$('#mgrFollowupRemarks').addClass("readOlyCursor");
	// }
});

$("input:radio[id=cdAgreeFlgYes]").on("click", function() {
	if (!validateDetails())
		return;
	// if(!(stafftype == STAFFTYPE_STAFF)){
	$("#cdCcRemarks").prop("readonly", false);
	$('#cdCcRemarks').removeClass("readOlyCursor");
	$("#cdCcRemarks").focus();
	// }
});

$("input:radio[id=cdAgreeFlgNo]").on("click", function() {
	if (!validateDetails())
		return;
	// if(!(stafftype == STAFFTYPE_STAFF)){
	$("#cdCcRemarks").prop("readonly", true);
	$('#cdCcRemarks').addClass("readOlyCursor");
	// }
});

$(".side-menu").find("li[id=search_li]").on("click",function() { 
	$(".menu_section>ul:not(:first-child)").addClass("hidden");
	
});




$("#caSelfRoi,#caSpsRoi,#caFamRoi,#caProjSelfRoi,#caProjSpsRoi,#caProjFamRoi").on("change",function(){
	changeAvgRoiToProjRoi(); 
	AsspProRoiToRetRoi(); 
});

$("#caProjSelfRoi,#caProjSpsRoi,#caProjFamRoi").on("change",function(){
	AsspProRoiToRetRoi(); 
});

$("#retSelfProjroi,#retSpsProjroi,#retFamProjroi").on("change",function(){
	RetRoiToAsspProRoi(); 
});

function changeAvgRoiToProjRoi(){
	
	var avgSelfroi=isEmpty($("#caProjSelfRoi").val())?$("#caSelfRoi").val(): $("#caProjSelfRoi").val(); 
	var avgSpsroi=isEmpty($("#caProjSpsRoi").val())?$("#caSpsRoi").val(): $("#caProjSpsRoi").val();   
	var avgFamroi=isEmpty($("#caProjFamRoi").val())?$("#caFamRoi").val(): $("#caProjFamRoi").val();  
	
	$("#caProjSelfRoi").val(avgSelfroi);
	$("#caProjSpsRoi").val(avgSpsroi);
	$("#caProjFamRoi").val(avgFamroi);
	
	

	return;
}
 
function AsspProRoiToRetRoi(){
	
	applyToastrAlert("The Keyed in data will be reflected to Retirement Planning Section");
	
	var retSelfroi=$("#caProjSelfRoi").val(); 
	var retSpsroi=$("#caProjSpsRoi").val();   
	var retFamroi=$("#caProjFamRoi").val();  
	
	$("#retSelfProjroi").val(retSelfroi);
	$("#retSpsProjroi").val(retSpsroi);
	$("#retFamProjroi").val(retFamroi);
	
	return;
}


function RetRoiToAsspProRoi(){
	
	applyToastrAlert("The Keyed in data will be reflected to Current Assumption Section");
	
	var retSelfroi=$("#retSelfProjroi").val(); 
	var retSpsroi=$("#retSpsProjroi").val();   
	var retFamroi=$("#retFamProjroi").val();  
	
	$("#caProjSelfRoi").val(retSelfroi);
	$("#caProjSpsRoi").val(retSpsroi);
	$("#caProjFamRoi").val(retFamroi); 
	return;
}


$("#incsrcSelfEmpMonthly,#incsrcSelfEmpAddlwage").on("change",function(){
	 calSelfCpfMastMthContr();
});

$("#incsrcSpsEmpMonthly,#incsrcSpsEmpAddlwage").on("change",function(){
	 calSpsCpfMastMthContr();
});

$("#sidebar-menu").find("li[id=search_li]>a").on("click",function(){
	chkClientMenu();
	
	show($("#search_li"),'searchpage');
	navlink(this,'null');
});

function NavigateTOKyc(type){
	showLoader();
	$("#openEkycType").val(type);
	
	var LOBTypeAll=($("[data-attr=LF]").is(":checked") && $("[data-attr=AF]").is(":checked") && $("[data-attr=IF]").is(":checked"))?true:false;
	var LOBTypeLife=(($("[data-attr=LF]").is(":checked") || $("[data-attr=AF]").is(":checked") || ($("[data-attr=LF]").is(":checked") && $("[data-attr=AF]").is(":checked"))) && !$("[data-attr=IF]").is(":checked"))?true:false;
	var LOBTypeInv=($("[data-attr=IF]").is(":checked") && (!$("[data-attr=LF]").is(":checked") && !$("[data-attr=AF]").is(":checked")))?true:false;
	var LOBTypeInv_IF=$("input:checkbox[name=txtFldClientChoice]:eq(2)").is(":checked");
	 
	
	var custid=$("[name=fpmsCustid]").val(); //txtFldCustId
	
	var strUserId=$("#hTxtFldLoggedUserID").val();//txtFldCrtdUser
	var strKycForm="ALL";				//txtFldKycForm
	var staffType=$("#hTxtFldLoggedStfType").val(); //accssLvlStfType
	var strClntName=$("#dfSelfName").val(); //txtFldCustName
	var strMgrAccFlg=$("#hTxtFldLoggedUserMgrFlg").val(); //mgrAcsFlg
	var strCustLOB='';  //txtFldCustLob
	if(LOBTypeAll)strCustLOB="ALL";
	else if(LOBTypeLife)strCustLOB="LIFE";
	else if(LOBTypeInv)strCustLOB="ILP/INVESTMENTS";
	
	var serAdvId=$("#advstfId").val();  //txtFldServAdvId
	var strLogStafId=$("#hTxtFldLoggedAdvStfId").val(); //txtFldLogUserAdvId
	var strDesig=$("#hTxtFldLoggedUserDesig").val(); //strLoggedUserDesig
	var strDistId=$("#hTxtFldDistId").val();  //strDistributor
	var strDistName=$("#hTxtFldDistName").val();  //strDistributorName
	//strUserId  LoggedUser
	var strCustInitial=$("#txtFldKycCustInitial").val();//txtFldCustInitials //from cust
	var strFnaFrom="FROM ARCHIVE";// FROM ARCHIVE,NEW KYC  selFnaFrom
	var strCurrAdvEmailId="";//txtFldCurrAdvtsfEmailId
	var strFormType="SIMPLIFIED"; //selFnaFormType
	var strCustCat=$("#txtFldKycCustCtg").val(); //selCustCateg -PERSON
	var strAdvStfName=$("#hTxtFldAdvStfName").val(); //txtFldLoggedUserName
	var serAdvName=$("#advstfId option:selected").text();  //txtFldServAdvName
	var selClientStatus=$("#txtFldKycCustSts").val();//selClientStatus -A-APPLICANT   
	
	if(isEmpty(type)){
		strFnaFrom = "NEW KYC";
	}
	
	var strFnaCount=0;
	
	var strProfileLen=$("#ProfileSearchTable").DataTable().rows().count();
	
	if($("#ProfileOpenFlag").val()=="N" && strProfileLen>0){
		alert("Load any profile."); 
		setTimeout(function(){
		$("#profile_li").find("a").click();
//		openDivForClient('profilepage',	'profilesection', 'profile_li',	'Profile Summary');
		hideLoader();
		},100);
		
		return;
	}
	
	if(isEmpty(custid)){ 
		$("#ekycnotifies").removeClass("hidden");
		$("#ekycToRegister").removeClass("hidden"); 
		$("#ekycSuccess").addClass("hidden");  
		hideLoader();
		return;
	}else{ 
		$("#ekycnotifies").addClass("hidden");

	}
	
	
	$.ajax({
		url:servletName,
		async:false,
		data:{
			"DBCALLFOR":"FNA_COUNT_DETAILS",
			"strCompId":custid,
			"strDistribId":strDistId
		},
		success: function(result){
			
			var jsnRslt=JSON.parse(result); 
			$.each(jsnRslt,function(i,obj){
				if(obj.SESSION_EXPIRY=='SESSION_EXPIRY'){
					window.location = BASE_URL + SESSION_EXP_JSP;

					hideLoader();
					return;
				}

				if (obj.SESSION_EXPIRY=="DB_ERROR") {
					window.location = BASE_URL + DB_EXP_JSP;

					hideLoader();
					return;
				}
				
				$.each(obj,function(i,val){
					if(!isEmpty(val[0].txtFldFnaCount)){
						strFnaCount=val[0].txtFldFnaCount;
					}
				})
				
				
			});
			
		}
	}); 
	
	
	if(!Number(strFnaCount)>0 && type=="archive"){
		$("#ekycnotifies").removeClass("hidden");
		$("#ekycToRegister").addClass("hidden");
		$("#ekycSuccess").removeClass("hidden");
		$("#applymessage").text("No KYC Archive found !");
		 hideLoader();
		return;
	} 
	
	 
	var url = kyc_url+"/KycPre.action?txtFldCustId="+custid+
	"&txtFldCrtdUser="+strUserId+
	"&txtFldKycForm="+strKycForm+
	"&accssLvlStfType="+staffType+
	"&txtFldCustName="+strClntName+
	"&mgrAcsFlg="+strMgrAccFlg+
	"&txtFldCustLob="+strCustLOB+
	"&txtFldServAdvId="+serAdvId+
	"&txtFldLogUserAdvId="+strLogStafId+
	//"&mainFooterLbl="+encodeURIComponent("{footerlbl:"+JSON.stringify(document.getElementById("footer").innerHTML)+"}")+
	//"&strYUIPath="+encodeURIComponent(strYUIPath)+
	"&strLoggedUserDesig="+strDesig+
	//"&strBirtPath="+strBirtPath+
	"&strDistributor="+strDistId+
	"&strDistributorName="+strDistName+
	"&LoggedUser="+strUserId+
	"&txtFldCustInitials="+strCustInitial+
	"&selFnaFrom="+strFnaFrom+
	"&txtFldCurrAdvtsfEmailId="+strCurrAdvEmailId+
	"&selFnaFormType="+strFormType+
	"&selCustCateg=PERSON&txtFldLoggedUserName="+strAdvStfName+
	"&txtFldServAdvName="+serAdvName+
	"&selClientStatus="+selClientStatus+
	"&txtFldFipaRef="+type+
	"&chkInv="+LOBTypeInv_IF;
	
	 setTimeout(function(){   
		creatSubmtDynaNewWindowforKyc(url);
		 hideLoader();
	 },1000);
}

$("#ekycnotifies").find("button:eq(0)").on("click",function(){
	showLoader();
	setTimeout(function(){  
	ajaxCallSaveFPMS_eKYC(); 
	},100);
});

$("#ekycnotifies").find("button:eq(1)").on("click",function(){
	 applyErrorToastrAlert("eKYC Form Submission Cancelled");
	 $("#ekycnotifies").removeClass("hidden");
	 $("#ekycToRegister").addClass("hidden");
	 $("#ekycSuccess").removeClass("hidden");
	 $("#applymessage").text("No KYC will be generated !");
});

function ajaxCallSaveFPMS_eKYC(){

	var custName=$("#dfSelfName").val();
	var custInitial=custName.substring(0,20);
	var advstfName=$("#hTxtFldAdvStfName").val();
	var advstfId=$("#advstfId").val();
	var nric=$("#dfSelfNric").val();
	var address=$("#dfSelfHomeaddr").val();
	var postal=$("#dfSelfHomepostal").val();
	var handphone=$("#dfSelfMobile").val();
	var emailId=$("#dfSelfPersemail").val();
	 
	
	$.ajax({
		url:servletName,
		async:false,
		data:{
			"DBCALLFOR":"EKYC_TO_FPMS",
			"strCustName":custName,
			"strCustInitial":custInitial,
			"strAdvstfName":advstfName,
			"strAdvstfId":advstfId,
			"strCustNric":nric,
			"strCustAddress":address,
			"strCustPostal":postal,
			"strCustHandPh":handphone,
			"strCustEmailId":emailId
			
		},
		success: function(result){
			
			var jsnRslt=JSON.parse(result);
			
			$.each(jsnRslt,function(i,obj){
				if(obj.SESSION_EXPIRY=='SESSION_EXPIRY'){
					window.location = BASE_URL + SESSION_EXP_JSP;
					 
					return;
				}

				if (obj.SESSION_EXPIRY=="DB_ERROR") {
					window.location = BASE_URL + DB_EXP_JSP;
					 
					return;
				}
				
				$.each(obj,function(i,val){
						 
				 if(i == "EKYC_INSERTED"){
					 var customerID=val;
					 var clickedType=$("#openEkycType").val();
					 applySuccessToastrAlert("eKYC form successfully submitted "+custName);
					 $("[name=fpmsCustid]").val(customerID);
					 $("#txtFldKycCustInitial").val(custInitial);
					 $("#txtFldKycCustSts").val("A-APPLICANT");
					 setTimeout(function(){  
					 $("#sidebar-menu ul").find("li[id=eKYC_li]").find("ul li:eq(0)").find("a").click();	 
					 $("#ekycnotifies").addClass("hidden"); 
					 
					 },100);
					 return;
					 
				 }
				 if(i == "ERROR"){
					 applyErrorToastrAlert(val);
					 
					 return;
				 }
				});
				
				
			});
			
		}
	});
	
}



function creatSubmtDynaNewWindowforKyc(href){
	
	 
	
    var lex1 = href.split('?');
    var action= lex1[0];
    var qstr = lex1[1];
    var obj = " ";

    var formId = document.getElementById("hiddenFormKyc");
    var divId = document.getElementById("dynamicFormKycDiv");

    if(formId){
        if(divId)
            formId.removeChild(divId);
    }

    var newdiv = document.createElement('div');
    newdiv.id = "dynamicFormKycDiv";

    if(qstr != null) {
        var params = qstr.split('&');
        for(var p=0;p< params.length;p++){
            var keyValue = params[p].split('=');
            var name = keyValue[0];
            var value = keyValue[1];

            if(value.indexOf("\'") != -1)
                value = value.replace("\'","\'");
                value = unescape(value);
 
            obj += "<input type='hidden' name='"+name+"' value='"+value+"'/>";

        }
    }
    newdiv.innerHTML = obj;   

    
    
    if(document.getElementById("hiddenFormKyc"))
    	document.getElementById("hiddenFormKyc").appendChild(newdiv);
 
    
    document.hiddenFormKyc.action=action;
    document.hiddenFormKyc.method="POST";
 
  window.open('',"TheWindow","fullscreen=yes","left=0,top=0,resizable=no,status=no,toolbar=no,menubar=no,location=no,offscreenBuffering=true");
  document.getElementById("hiddenFormKyc").submit();
  hideLoader();

}





function spouseAddressToggle(){
	
}

/*Profile Archive pull ups*/
//Changes done on 10072019
//function genCloneModels(){
//	
//	
//	setTimeout(function(){
//    var rowCountVisible = $("#ProfileSearchTable tbody tr:visible").length;
//    
//    if(rowCountVisible == 5){
//    	 $("#ProfileSearchTable tbody tr").each(function(i,r){ 
//   		   $(this).show();  
//      	  }); 
//    	    
//    }else{
//   	 $("#ProfileSearchTable tbody tr").each(function(i,r){
//	 if(i>4){
//		  $(this).hide();
//	  }else{
//		  $(this).show();
//	  } 
//     });  
//    } 
////	$("span[class=prolength]").text($('#ProfileSearchTable tbody tr:visible').length);
//    $($.fn.dataTable.tables(true)).DataTable().columns.adjust().draw(false);
//    
//	},100);
//}//end of profile archive pull up 


/*$('#particular').click(function () { 
	if($("#Clientdtlstab").prop('checked') == true){
	 $("#Clientsdetails").css("background-color", "#7790CF");
	 $("#Clientdtlstablbl").css("background-color", "#7790CF");
	}else
		{
		 $("#Clientsdetails").css("background-color", "#eeeeee");
		 $("#Clientdtlstablbl").css("background-color", "#eeeeee");
		}
	 if($("#Spousedtlstab").prop('checked') == true){
		 $("#Spousedetails").css("background-color", "#7790CF");
		 $("#Spousedtlstablbl").css("background-color", "#7790CF");
	}else{
		 $("#Spousedetails").css("background-color", "#eeeeee");
		 $("#Spousedtlstablbl").css("background-color", "#eeeeee");
	}
	 if($("#Childdtlstab").prop('checked') == true){
		 $("#Childdetails").css("background-color", "#7790CF");
		 $("#Childdtlstablbl").css("background-color", "#7790CF");
	}
	 else{
		 $("#Childdetails").css("background-color", "#eeeeee");
		 $("#Childdtlstablbl").css("background-color", "#eeeeee");
	 }
	 if($("#Dependtlstab").prop('checked') == true){
		 $("#Dependencydetails").css("background-color", "#7790CF");
		 $("#Dependtlstablbl").css("background-color", "#7790CF");
	}
	 else{
		 $("#Dependencydetails").css("background-color", "#eeeeee");
		 $("#Dependtlstablbl").css("background-color", "#eeeeee");
	 }
	});*/



/*$("#search_li_title").click(function(){
	//  $(".mainmenu").hide();
	//  $(".treeview").hide();
	 
	  $(".mainmenu").addClass("hidden");
	   $("#txtNavClientDtls").hide();
	   //$("#main_menu_pro_scrh").show(); 
	   $("#main_menu_pro_scrh").removeClass("hidden");
	   $("#main_menu_pro_scrh").addClass("mainmenu active");
	  
	   
	});*/

$("#search_li").click(function(e){
	//  e.preventDefault();
	/*$(".sidebar").addClass("hidden");
	$("#txtNavClientDtls").addClass("hidden");*/
	/* $("#main_menu_pro_scrh").removeClass("hidden");
	 $("#main_menu_pro_scrh").addClass("mainmenu active");*/
	/*$(".mainmenu").addClass("hidden");*/
	/* $("#main_menu_pro_scrh").removeClass("hidden");
	 $("#main_menu_pro_scrh").addClass("mainmenu active");*/
	
});


