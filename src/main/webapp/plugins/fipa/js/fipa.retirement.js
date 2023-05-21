$("#othrPayRetrnmtCancelbtn").on("click",function(){
	$("#txtFldDlgORtyofpay,#selDlgORFreq,#selDlgORAgeBsOn,#txtFldDlgORAgePaySts").removeClass("mandatoryFillFlds");
	$("#txtFldDlgORtyofpay,#selDlgORFreq,#selDlgORAgeBsOn,#txtFldDlgORAgePaySts").qtip('disable');
	$("#txtFldDlgORtyofpay,#selDlgORFreq,#selDlgORAgeBsOn,#txtFldDlgORAgePaySts").qtip('destroy',true);
	othretRdlyflds(INS_MODE);  
   	getothretRows(null); 
	$('#OthRet_Dialog').modal('hide');  
});
/*$("#incRecRtrmntCancelbtn").on("click",function(){
	$("#txtFldDlgIRClsfy,#selDlgIRFreq,#selDlgIRAgeBsOn,#txtFldDlgIRAgePaySts").removeClass("mandatoryFillFlds");
	$("#txtFldDlgIRClsfy,#selDlgIRFreq,#selDlgIRAgeBsOn,#txtFldDlgIRAgePaySts").qtip('disable');
	$("#txtFldDlgIRClsfy,#selDlgIRFreq,#selDlgIRAgeBsOn,#txtFldDlgIRAgePaySts").qtip('destroy',true);  
	incretRdlyflds(INS_MODE);  
   	getincretRows(null); 
	$('#IncRet_Dialog').modal('hide');  
});*/
/*$("#incAsstRetCancelbtn").on("click",function(){
	$("#txtFldDlgIncAssClsfy,#selDlgIncAssFreq,#selDlgIncAssAgeBsOn,#txtFldDlgIncAssAgePaySts").removeClass("mandatoryFillFlds");
	$("#txtFldDlgIncAssClsfy,#selDlgIncAssFreq,#selDlgIncAssAgeBsOn,#txtFldDlgIncAssAgePaySts").qtip('disable');
	$("#txtFldDlgIncAssClsfy,#selDlgIncAssFreq,#selDlgIncAssAgeBsOn,#txtFldDlgIncAssAgePaySts").qtip('destroy',true);  
	incassrtRdlyflds(INS_MODE);  
   	getincassrtRows(null,"N"); 
	$('#IncAssRet_Dialog').modal('hide'); 
});*/




var typeofpayment = ["Parent Contributions","Mortgage Loans","Car Loans","Children Education",
                     "Loan Repayments","Insurance Premium for self","Insurance Premium for Spouse"];


/**Retirement Age Validation*/

function calcRtrmntPln(){
	
	var analysisForSpouse = $("#txtFldAnalyisForSpouse").is(":checked");
	var analysisForFamily = $("#txtFldAnalyisForFamily").is(":checked");
 	var clientsts=$("#dfSelfMartsts").val();
 	if ($("#retAgeBasedon").val() == null){
 		$("#retAgeBasedon").val("Self");
 	}
	var ageBasedOn = $("#retAgeBasedon").val().toUpperCase();//Age Based On 
	var intRetAgeSelf = $("#retSelfAge").val();//Ret self Age
	var intRetAgeSps = $("#retSpsAge").val();//Ret spouse Age	
	var projAgeSelf = $("#retSelfProjage").val();//projected self
	var projAgeSps = $("#retSpsProjage").val();//projected spouse
	
	var selfAge = $("#dfSelfAge").val();//self age
	var spsAge = $("#dfSpsAge").val();//spouse age
	selfAge = isEmpty(selfAge)?0:selfAge;
	spsAge = isEmpty(spsAge)?0:spsAge;
	ageBasedOn = isEmpty(ageBasedOn)?"SELF":ageBasedOn;
	
//	if(!isEmpty(intRetAgeSelf) && !isEmpty(intRetAgeSps)){
		// retirementage=if age based on is "Self" then Intended retirement age of Self otherwise Spouse
		var retirementage = (ageBasedOn == "SELF" ) ? intRetAgeSelf : intRetAgeSps;
		
		// mortalityage=if age based on is "Self" then Projected life expectancy (Age) of Self otherwise Spouse
		var mortalityage = (ageBasedOn == "SELF" ) ? projAgeSelf : projAgeSps;
		
		//Age different between self age - spouse age
		var diffbwslfspsage = selfAge - (isNaN(spsAge)?0:spsAge);
		
		//calculate for retirement age
		//if (Age Based on is Spouse) = then ( Intended retirement age of Spouse - Spouse age) else if  (Age Based on is Self) then (Intended retirement age of Self - Self age)
		var calcforrtdage = (ageBasedOn == "SPOUSE" ) ? (Number(intRetAgeSps) - Number(spsAge)) : (Number(intRetAgeSelf) - Number(selfAge));
		
		//Year to retirement  = if calculated value for retirement age is greater or equal to 0 then get value of  calculated value for retirement age otherwise 0
		var yrstoret = (calcforrtdage >= 0 ? calcforrtdage : 0);
		
		//	Projected Living years in retirement self = (if Age Based on is "Self" then Projected Age self - Intended Retirement Age self )
				//otherwise  Projected Age self  - Years to retirement - Self Age
		var livingyrsself = (ageBasedOn == "SELF" ) ? (projAgeSelf - intRetAgeSelf) : (Number(projAgeSelf) -Number(yrstoret) - Number(selfAge) );

		// Projected Living years in retirement spouse = (if Age Based on is "Spouse" then Projected Age spouse - Intended Retirement Age Spouse)
				//otherwise  Projected Age Spouse - Years to retirement - Spouse Age
		var livingyrssps = (ageBasedOn == "SPOUSE" ) ? (projAgeSps - intRetAgeSps) : (Number(projAgeSps) - Number(yrstoret) - Number(spsAge) );
		
		// Coordinated retirement age Self = (if Age Based on is "Self" then Intended Retirement Age os Self)
		//otherwise (Intended Retirement Age of spouse) + (Difference between self spouse age)
		var coordinateselfage = (ageBasedOn == "SELF" ) ? intRetAgeSelf : (Number(intRetAgeSps)+Number(diffbwslfspsage));
		
		// Coordinated retirement age Spouse = (if Age Based on is "Spouse" then Intended Retirement Age of Spouse)
		//otherwise (Intended Retirement Age of spouse) + (Difference between self spouse age)
		var coordinatespsage = (ageBasedOn == "SPOUSE" ) ? intRetAgeSps : (Number(intRetAgeSelf)- Number(diffbwslfspsage));
		
		//Retirement Age of Self = (Years to retirement) + (Self Age)
		var retageself = Number(yrstoret)+Number(selfAge);
		
		//Retirement Age of Spouse = (Years to retirement) + (Spouse Age)
		var retagesps = Number(yrstoret)+Number(spsAge);
		
		//Retirement years of Self= (65) -  (Retirement age of Self)
		var retyrsself = Number(65)-Number(retageself);
		//Retirement years of Spouse= (65) -  (Retirement age of Spouse)
		var retyrssps = Number(65)-Number(retagesps);
		
		//Retirement years of Spouse= (65) -  (Retirement age of Spouse)
		var annlcpfdefyrsself = ((retyrsself<=0) ? 0 :retyrsself);
		
		//Retirement years of Spouse= (65) -  (Retirement age of Spouse)
		var annlcpfdeftrssps =  ((retyrssps<=0) ? 0 : retyrssps);
		
		$("#retSelfLivyrs").val((isNaN(livingyrsself)?0: livingyrsself <0 ? "" : livingyrsself));
		$("input[name='txtFldRDSlfProlvyrs']").val((isNaN(livingyrsself)?0:livingyrsself <0 ? "" : livingyrsself)); //RD CF Analysis
		
//		if(analysisForSpouse && clientsts!="Single"){
			$("#retSpsLivyrs").val((isNaN(livingyrssps)?0:livingyrssps<0 ? "" : livingyrssps));
			$("input[name='txtFldRDSpsProlvyrs']").val(isNaN(livingyrssps)?0:livingyrssps<0 ? "" : livingyrssps);  //RD CF Analysis
//		}
		
		var assumedmaxLE = Math.max(isEmpty(livingyrsself)?0:livingyrsself, isEmpty(livingyrssps)?0:livingyrssps);
//		if(analysisForFamily){
			$("#retFamLivyrs").val(isNaN(assumedmaxLE)?0:assumedmaxLE);
			$("input[name='txtFldRDFamProlvyrs']").val(isNaN(assumedmaxLE)?0:assumedmaxLE); //RD CF Analysis
//		}
		
		$("#retYrstoret").val(isNaN(calcforrtdage)?0: calcforrtdage < 0  ? "" :calcforrtdage );
		$(".retYrstoret").val($("#retYrstoret").val());
		
		$("input[name='txtFldRDYrsToRet']").val(isNaN(calcforrtdage)?0: calcforrtdage<0 ? "" : calcforrtdage);
		if(!isEmpty($("#lipOwner").val())){
			$("#lfretYrstoret").val($("#retYrstoret").val());
			$("#retIntrateused").val($("#caSavingDeprate").val());
		}//Life insurance - yr to ret
		
		
		$("#retSelfCoordinateage").val(isNaN(coordinateselfage)?0:coordinateselfage <0 ?"" : coordinateselfage);
		$("input[name='txtFldRDSlfCoRetAge']").val(isNaN(coordinateselfage)?0:coordinateselfage <0 ? "" : coordinateselfage);//RD CF Analysis
		if(!isEmpty($("#lipOwner").val())){
			$("#retSelfretage").val($("#retSelfCoordinateage").val());
		}//Life insurance - retirement co ret age self
		
		if(analysisForSpouse  && clientsts!="Single"){
		$("#retSpsCoordinateage").val(isNaN(coordinatespsage)?0:coordinatespsage <0 ? "" : coordinatespsage);
		$("input[name='txtFldSpsRDCoRetAge']").val(isNaN(coordinatespsage)?0:coordinatespsage < 0 ? "" :coordinatespsage);//RD CF Analysis
		if(!isEmpty($("#lipOwner").val())){$("#retSpouseretage").val($("#retSpsCoordinateage").val());}//Life insurance - retirement co ret age spouse
		}
		$("#retSelfAnnlexpdyrs").val(isNaN( $("#retSelfLivyrs").val())?0: $("#retSelfLivyrs").val());
		if(analysisForSpouse && clientsts!="Single"){
			$("#retSpsAnnlexpdyrs").val(isNaN( $("#retSpsLivyrs").val())?0: $("#retSpsLivyrs").val());
		}
		if(analysisForFamily){
		$("#retFamAnnlexpdyrs").val(isNaN($("#retFamLivyrs").val())?0:$("#retFamLivyrs").val() );
		}
		
		$("#txtFldRetSelfAnnlIncyr").val(isNaN(annlcpfdefyrsself)?0: annlcpfdefyrsself <0 ? "" : annlcpfdefyrsself);
		$("#txtFldRetSlfAnnlPte1RetYr").val(isNaN(annlcpfdefyrsself)?0:annlcpfdefyrsself <0 ? "" : annlcpfdefyrsself);
		$("#txtFldRetSlfAnnlPte2RetYr").val(isNaN(annlcpfdefyrsself)?0:annlcpfdefyrsself <0 ? "" : annlcpfdefyrsself);
		$("#txtFldRetSlfAnnlPte3RetYr").val(isNaN(annlcpfdefyrsself)?0:annlcpfdefyrsself <0 ? "" : annlcpfdefyrsself);
		if(analysisForSpouse && clientsts!="Single"){
		$("#txtFldRetSpsAnnlIncyr").val(isNaN(annlcpfdeftrssps)?0:annlcpfdeftrssps <0 ? "" : annlcpfdeftrssps);
		$("#txtFldRetSpsAnnlPte1RetYr").val(isNaN(annlcpfdeftrssps)?0:annlcpfdeftrssps <0 ? "" : annlcpfdeftrssps);
		$("#txtFldRetSpsAnnlPte2RetYr").val(isNaN(annlcpfdeftrssps)?0:annlcpfdeftrssps <0 ? "" : annlcpfdeftrssps);
		$("#txtFldRetSpsAnnlPte3RetYr").val(isNaN(annlcpfdeftrssps)?0:annlcpfdeftrssps <0 ? "" : annlcpfdeftrssps);
		}
		assEffrate();
		cordretage();
		projlvyrs();
		
		
//		tablePayoutUpdate();  
		/*if(ageBasedOn == "SPOUSE"){
			var selfpro=Number($("#retSelfProjage").val())  - Number($("#retSelfLivyrs").val());
			var spspro=Number($("#retSpsProjage").val())  - Number($("#retSpsLivyrs").val()); 
			$("#retSelfCoordinateage").val(selfpro);
			if(analysisForSpouse && clientsts!="Single"){$("#retSpsCoordinateage").val(spspro);}
		}*/
//	}
	 
   
	
}


$("#retSelfCoordinateage,#retSpsCoordinateage").on("change",function(){
	cordretage();
});


function cordretage(){
	
	var analysisForSpouse = $("#txtFldAnalyisForSpouse").is(":checked");
	var analysisForFamily = $("#txtFldAnalyisForFamily").is(":checked");
	var clientsts=$("#dfSelfMartsts").val();
	

	var retagebasedon=$("#retAgeBasedon").val();
	var slfCoRetAge=(!isEmpty($("#retSelfCoordinateage").val()))?Number($("#retSelfCoordinateage").val()) : 0;
	var spsCoRetAge =(!isEmpty($("#retSpsCoordinateage").val()))?Number($("#retSpsCoordinateage").val()) : 0;
	 
	 $("#retSelfCoordretage").val(slfCoRetAge);//ret plg (Self)
	 $("#txtFldRDSlfLvCorAge").val(slfCoRetAge);//rd cf (Self)
	 if(analysisForSpouse && clientsts!="Single"){
		 $("#retSpsCoordretage").val(spsCoRetAge);//ret plg (Spouse) 
		 $("#txtFldRDSpsLvCorAge").val(spsCoRetAge);//rd cf (Spouse)
	 }
	 if(!isEmpty(retagebasedon)){
		 if(analysisForFamily){
		 if(retagebasedon == "Self"){
			 $("#retFamCoordretage").val(slfCoRetAge);
			 $("#txtFldRDFamLvCorAge").val(slfCoRetAge);
		 }else if(retagebasedon == "Spouse"){
			
				 $("#retFamCoordretage").val(spsCoRetAge);
				 $("#txtFldRDFamLvCorAge").val(spsCoRetAge);
			  
		 }
		 }
	 }
}
function projlvyrs(){
	var analysisForSpouse = $("#txtFldAnalyisForSpouse").is(":checked");
	var analysisForFamily = $("#txtFldAnalyisForFamily").is(":checked");
	var clientsts=$("#dfSelfMartsts").val();
	
	var SelfLivyrs=(!isEmpty($("#retSelfLivyrs").val()))?Number($("#retSelfLivyrs").val()) : 0;
	var SpsLivyrs =(!isEmpty($("#retSpsLivyrs").val()))?Number($("#retSpsLivyrs").val()) : 0;
	var famLivyrs =(!isEmpty($("#retFamLivyrs").val()))?Number($("#retFamLivyrs").val()) : 0;
	 
	 $("#txtFldSlfLvProAge").val(SelfLivyrs);//ret plg (Self)
	 $("#txtFldRDSlfLvProAge").val(SelfLivyrs);//rp cf(Self)
	 
	 if(analysisForSpouse && clientsts!="Single"){
		 $("#txtFldSpsLvProAge").val(SpsLivyrs);//ret plg (Spouse)
		 $("#txtFldRDSpsLvProAge").val(SpsLivyrs);//rp cf(Spouse)
	 }
	 
	 if(analysisForFamily){
		 $("#txtFldFamLvProAge").val(famLivyrs);//ret plg (Family)
		 $("#txtFldRDFamLvProAge").val(famLivyrs);//rp cf(Family)
	 }
	 
}

/**
 * Retirement Planning - Other payment on retirement
 */

/*Datatable Initialisation*/
//var OthRetPlgtbl = $('#OthRetPlgtbl').DataTable( {
//	destroy: true,
// 	responsive: false,         
//    ordering: false,
//    searching: false,     
//    scrollY:  "40vh",
//    scrollX: true,
//    scroller: false,
//    scrollCollapse:false,
//    paging:false, 
//    filter:false,   
//    columnDefs: [], 
//    dom: '<<"top" ip>flt>',  
//  columnDefs: [  { width: '20px', targets: [0,1]},
//   	             {"className": "dt-head-center text-center",targets: [0,1,2,3,4,5,6,7,8,9],"orderable": false,"searchable": false}],		
//		 fnDrawCallback: function(oSettings) {
//			 if (oSettings._iDisplayLength > oSettings.fnRecordsDisplay()) { 
//				 
//			    } 
//    
//		 }, 
//}).draw();
	




/*Add Row Click */
$("#AOthRet").on("click",function(){
	//if(!valothretTbl())return; 
	 if(!validationRetirementScreen())return; 
//	mandatoryFldForRetirement($(this),null,'RET'); 
			othretClearFlds();
			
			$("txtFldDlgprojORId").val(makeid(17));
			
			showFIPAModel('OthRet_Dialog','Other Payment To Be Made During Retirement');    
//			$("#OthRet_Dialog").find("input[id=txtFldDlgORMode]").val("I");//instant save added line
			loadAgeStartEnd('txtFldDlgORAgePaySts',$("#selDlgORAgeBsOn"));
			$('#OthRet_Dialog').on('shown.bs.modal', function () {
//				$("#OthRet_Dialog").find(".modal-footer").find("button:eq(0)").text("Add");
				$("#OthRet_Dialog").find("input[id=txtFldDlgORtyofpay]").focus();
				$("#OthRet_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
						if(!validateothretDetails())return;
					   	othretRdlyflds(INS_MODE);  
					   	getothretRows(null); 
						$('#OthRet_Dialog').modal('hide'); 
				  });  
			});
			
			
});



/*Populate Data */
function getothretRows(dataset){ 
 
	/*var cell0 = '<span></span>'+
'<input type="hidden" name="txtFldothretMode" readonly="true" value="'+INS_MODE+'" class="fipaMode"/><input type="hidden" name="txtFldORId">';
 
var cell1 = '<div class="checkbox checkbox-primary text-center"><input type="checkbox" name="radothretSelect"/><label>&nbsp;</label></div>'; 
var cell2 = '<input type="text" name="txtFldORtyofpay" class="form-control editable"   onmouseover="fipaTooltip(this);"  maxlength="150" />'; 
var cell3 = '<select type="text" name="selORFreq" class="form-control editable"  onmouseover="fipaTooltip(this);" ></select>';
var cell4 = '<input type="text" name="txtFldORAnlExp" class="form-control editable"   onmouseover="fipaTooltip(this);" />';
var cell5 = '<input type="text" name="txtFldOREslrate" class="form-control editable"   onmouseover="fipaTooltip(this);" />';
var cell6 = '<select type="text" name="selORAgeBsOn" class="form-control editable"  onmouseover="fipaTooltip(this);" ></select>';
var cell7 = '<input type="text" name="txtFldORAgePaySts" class="form-control editable"   onmouseover="fipaTooltip(this);"/>';
var cell8 ='<input type="text" name="txtFldORAgePayends" class="form-control editable"  onmouseover="fipaTooltip(this);" />';
var cell9 ='<input type="text" name="txtFldORRemarks" class="form-control editable"  onmouseover="fipaTooltip(this);" maxlength="300"/>'+
'<input type="hidden" name="txtFldORCrtdBy"/><input type="hidden" name="txtFldORCrtdDate"/>'; */



/*OthRetPlgtbl.row.add( [cell0,cell1,cell2,cell3,cell4,cell5,cell6,cell7,cell8,cell9] ).draw( false );

var rowCount = $('#OthRetPlgtbl tbody tr:visible').length;	
rowCount =  (rowCount == 0) ? $('#OthRetPlgtbl tbody tr').length : rowCount;
var $lastRow = $("#OthRetPlgtbl tbody tr:last");	

$lastRow.find("td:first").find('span').text(rowCount); 

$lastRow.find("td:eq(1)").find("input:first").click(function(){
	selectSingleRow(this);
});

$lastRow.find("td:eq(0)").find('input:eq(1)').val($("#txtFldDlgprojORId").val());

$lastRow.find("td:eq(1)").find("input:first").attr('id',"radothret"+$lastRow.index())
.parent().find('label').attr('for',"radothret"+$lastRow.index());

$lastRow.find("td:eq(2)").find('input:eq(0)').val($("#txtFldDlgORtyofpay").val());

var orfreq = $("#selDlgORFreq > option").clone();
$lastRow.find("td:eq(3)").find('select:eq(0)').append(orfreq);
$lastRow.find("td:eq(3)").find('select:eq(0)').val($("#selDlgORFreq").val());
$lastRow.find("td:eq(3)").find('select:eq(0)').on("change",function(){ 
	if(!rdFrequencyValidation($lastRow.find("td:eq(8)").find('input:eq(0)'),$lastRow.find("td:eq(5)").find('input:eq(0)'),$(this)))return; 
});

$lastRow.find("td:eq(4)").find('input:eq(0)').val($("#txtFldDlgORAnlExp").val());
$lastRow.find("td:eq(4)").find('input:eq(0)').addClass("applyEvntUsd");

$lastRow.find("td:eq(5)").find('input:eq(0)').val($("#txtFldDlgOREslrate").val());
$lastRow.find("td:eq(5)").find('input:eq(0)').addClass("applyEvntpCent3");

var oragebsed =  $("#selDlgORAgeBsOn > option").clone();
$lastRow.find("td:eq(6)").find('select:eq(0)').append(oragebsed);
$lastRow.find("td:eq(6)").find('select:eq(0)').val($("#selDlgORAgeBsOn").val());
$lastRow.find("td:eq(6)").find('select:eq(0)').on("change",function(){ 
	if(!rdStartAgeValidate($lastRow.find("td:eq(7)").find('input:eq(0)'),$(this)))return;
});


$lastRow.find("td:eq(7)").find('input:eq(0)').val($("#txtFldDlgORAgePaySts").val());
$lastRow.find("td:eq(7)").find('input:eq(0)').addClass("applyEvntYrs");
$lastRow.find("td:eq(7)").find('input:eq(0)').on("change",function(){ 
	if(!rdStartAgeValidate($(this),$lastRow.find("td:eq(6)").find('select:eq(0)')))return;
});

$lastRow.find("td:eq(8)").find('input:eq(0)').val($("#txtFldDlgORAgePayends").val());
$lastRow.find("td:eq(8)").find('input:eq(0)').addClass("applyEvntYrs");
$lastRow.find("td:eq(8)").find('input:eq(0)').on("change",function(){ 
	if(!rdEndAgeValidate($lastRow.find("td:eq(7)").find('input:eq(0)'),$(this)))return;
});


$lastRow.find("td:eq(9)").find('input:eq(0)').val($("#txtFldDlgORRemarks").val());*/

	var cell0 = '<span></span>'+
	'<input type="hidden" name="txtFldothretMode" readonly="true" value="'+INS_MODE+'" class="fipaMode"/><input type="hidden" name="txtFldORId">';
	var cell1 = '<div class="checkbox checkbox-primary text-center"><input type="checkbox" name="radothretSelect"/><label>&nbsp;</label></div>'; 
	var cell2 = '<input type="text" name="txtFldORtyofpay" class="form-control editable form-tablecolor"   onmouseover="fipaTooltip(this);"  maxlength="150" readonly="readonly"/>'; 
	var cell3 = '<input type="hidden" name="txtFldORAnlExp" class="form-control editable form-tablecolor"   onmouseover="fipaTooltip(this);" />'+
	'<select type="text" name="selORFreq" class="form-control editable form-tablecolor"  onmouseover="fipaTooltip(this);"  style="display: none;"></select>'+
	'<input type="hidden" name="txtFldOREslrate" class="form-control editable form-tablecolor"   onmouseover="fipaTooltip(this);" />'+
	'<input type="text" name="" class="form-control editable form-tablecolor"   onmouseover="fipaTooltip(this);" readonly="readonly"/>';//Proposed; 
	var cell4 = '<input type="hidden" name="txtFldORAgePaySts" class="form-control editable form-tablecolor"   onmouseover="fipaTooltip(this);"/>'+
	'<input type="hidden" name="txtFldORAgePayends" class="form-control editable form-tablecolor"  onmouseover="fipaTooltip(this);" />'+
	'<select type="text" name="selORAgeBsOn" class="form-control editable form-tablecolor" style="display: none;" onmouseover="fipaTooltip(this);" ></select>'+
	'<input type="text" name="" class="form-control editable form-tablecolor"   onmouseover="fipaTooltip(this);" readonly="readonly"/>';//Proposed; 
	var cell5 ='<input type="text" name="txtFldORRemarks" class="form-control editable form-tablecolor"  onmouseover="fipaTooltip(this);" maxlength="300"/  readonly="readonly"/>'+
	'<input type="hidden" name="txtFldORCrtdBy"/><input type="hidden" name="txtFldORCrtdDate"/>';


	OthRetPlgtbl.row.add( [cell0,cell1,cell2,cell3,cell4,cell5] ).draw( false );

	var rowCount = $('#OthRetPlgtbl tbody tr:visible').length;	
	rowCount =  (rowCount == 0) ? $('#OthRetPlgtbl tbody tr').length : rowCount;
	var $lastRow = $("#OthRetPlgtbl tbody tr:last");	

	$lastRow.find("td:first").find('span').text(rowCount); 

	$lastRow.find("td:eq(1)").find("input:first").click(function(){
		selectSingleRow(this);
	});

	$lastRow.find("td:eq(0)").find('input:eq(1)').val($("#txtFldDlgprojORId").val());

	$lastRow.find("td:eq(1)").find("input:first").attr('id',"radothret"+$lastRow.index())
	.parent().find('label').attr('for',"radothret"+$lastRow.index());

	$lastRow.find("td:eq(2)").find('input:eq(0)').val($("#txtFldDlgORtyofpay").val());

	var orfreq = $("#selDlgORFreq > option").clone();
	$lastRow.find("td:eq(3)").find('select:eq(0)').append(orfreq);
	$lastRow.find("td:eq(3)").find('select:eq(0)').val($("#selDlgORFreq").val());
	$lastRow.find("td:eq(3)").find('select:eq(0)').on("change",function(){ 
		if(!rdFrequencyValidation($lastRow.find("td:eq(4)").find('input:eq(1)'),$lastRow.find("td:eq(3)").find('input:eq(1)'),$(this)))return; 
	});
	
	
	$lastRow.find("td:eq(3)").find('input:eq(0)').val($("#txtFldDlgORAnlExp").val());
	$lastRow.find("td:eq(3)").find('input:eq(0)').addClass("applyEvntUsd");

	$lastRow.find("td:eq(3)").find('input:eq(1)').val($("#txtFldDlgOREslrate").val());
	$lastRow.find("td:eq(3)").find('input:eq(1)').addClass("applyEvntpCent3");
	$lastRow.find("td:eq(3)").find('input:eq(2)').val("$" + $("#txtFldDlgORAnlExp").val() + " Annually" + ", " + $("#txtFldDlgOREslrate").val() + " % Escalation"); //Proposed
	var oragebsed =  $("#selDlgORAgeBsOn > option").clone();
	$lastRow.find("td:eq(4)").find('select:eq(0)').append(oragebsed);
	$lastRow.find("td:eq(4)").find('select:eq(0)').val($("#selDlgORAgeBsOn").val());
	$lastRow.find("td:eq(4)").find('select:eq(0)').on("change",function(){ 
		if(!rdStartAgeValidate($lastRow.find("td:eq(4)").find('input:eq(0)'),$(this)))return;
	});


	$lastRow.find("td:eq(4)").find('input:eq(0)').val($("#txtFldDlgORAgePaySts").val());
	$lastRow.find("td:eq(4)").find('input:eq(0)').addClass("applyEvntYrs");
	$lastRow.find("td:eq(4)").find('input:eq(0)').on("change",function(){ 
		if(!rdStartAgeValidate($(this),$lastRow.find("td:eq(4)").find('select:eq(0)')))return;
	});

	$lastRow.find("td:eq(4)").find('input:eq(1)').val($("#txtFldDlgORAgePayends").val());
	$lastRow.find("td:eq(4)").find('input:eq(1)').addClass("applyEvntYrs");
	$lastRow.find("td:eq(4)").find('input:eq(1)').on("change",function(){ 
		if(!rdEndAgeValidate($lastRow.find("td:eq(4)").find('input:eq(0)'),$(this)))return;
	});
	$lastRow.find("td:eq(4)").find('input:eq(2)').val("Start @ " + $("#txtFldDlgORAgePaySts").val() + ", " + "End @ " + $("#txtFldDlgORAgePayends").val()); //Proposed

	$lastRow.find("td:eq(5)").find('input:eq(0)').val($("#txtFldDlgORRemarks").val());


applyEventHandlers();



$lastRow.find("input,select").on("click",function(event){
	event.stopPropagation();
});
$lastRow.click(function() {
    var checkbox = $(this).find("td:eq(1)").find("input");
    if(checkbox.is(":checked")) {
        checkbox.prop("checked", false);
	$lastRow.removeClass("selected");
    }else {
        checkbox.prop("checked", true);
	$lastRow.addClass("selected");
    }
});



//DHTML CRUD ICONS
$lastRow.click(function(){
	/*toggleSingleRow($lastRow);*/
	crudicons(this,'OthRetPlgtbl','SelOthRetPlgtbl','EOthRet','DOthRet');
			
});
//DHTML CRUD ICONS

$lastRow.find("td:eq(1)").find("input:first").click(function(){
	selectSingleRow(this);
//	DHTML CRUD ICONS
	crudicons(this,'OthRetPlgtbl','SelOthRetPlgtbl','EOthRet','DOthRet');
});

if(dataset != null){
	RDExptbl.rows().remove().draw();
	
	rowCount = $('#OthRetPlgtbl tbody tr').length;	
	$lastRow.find("td:first").find('span').text(rowCount);
	
	 if($("#hTxtFldFnaReviewFlag").val() == "U"  || $("#hTxtFldFnaReviewFlag").val() == ""){ 
			$lastRow.find("td:eq(0)").find('input:eq(0)').val(col);
	 }
	 var infoDetsArr = new Array();
	
	for(var data in dataset){
		var col = dataset[data];
		var txtFldORAnlExp;//Proposed
		var txtFldOREslrate;//Proposed
		var txtFldAgestart;//Proposed;
		var txtFldAgeend;//Proposed
		switch(data){
		
		/*
		 case "opId": 
				$lastRow.find("td:eq(0)").find('input:eq(1)').val(col); 
				break;
				
			case "retPaytype": 
				$lastRow.find("td:eq(2)").find('input:eq(0)').val(col); 
				
				break;
				
			case "retFrequency":
				selectNullvalChk($lastRow.find("td:eq(3)"),col);   
				break;
			 
			case "retAnnualexp": 
				$lastRow.find("td:eq(4)").find('input:eq(0)').val(col); 
				break;
			 
			case "retEscarate": 
				$lastRow.find("td:eq(5)").find('input:eq(0)').val(col); 
				break;
			 
			 
			case "retAgebasedon":   
				selectNullvalChk($lastRow.find("td:eq(6)"),col);  
				break;
			 
			 
			case "retAgestart":
				$lastRow.find("td:eq(7)").find('input:eq(0)').val(col); 
				break;
			 
			 
			case "retAgeend": 
				$lastRow.find("td:eq(8)").find('input:eq(0)').val(col);   
				break;
				
			case "retOthRemarks": 
				$lastRow.find("td:eq(9)").find('input:eq(0)').val(col); 
				break;
			  
			case "retCrtdBy": 
				$lastRow.find("td:eq(9)").find('input:eq(1)').val(col);
				infoDetsArr.push(col);				
				break;
				
			case "retCrtdDate":
				$lastRow.find("td:eq(9)").find('input:eq(2)').val(col);
				infoDetsArr.push(col);
				break;
				
			case "retModBy":
				infoDetsArr.push(col);
				break;
				
			case "retModDate":
				infoDetsArr.push(col);
				break;	
				*/
				

		 case "opId": 
				$lastRow.find("td:eq(0)").find('input:eq(1)').val(col); 
				break;
				
			case "retPaytype": 
				$lastRow.find("td:eq(2)").find('input:eq(0)').val(col); 
				break;
				
			case "retFrequency":
				selectNullvalChk($lastRow.find("td:eq(3)"),col);   
				break;
			 
			case "retAnnualexp": 
				$lastRow.find("td:eq(3)").find('input:eq(0)').val(col); 
				txtFldORAnlExp=col;//Proposed
				break;
			 
			case "retEscarate": 
				$lastRow.find("td:eq(3)").find('input:eq(1)').val(col); 
				txtFldOREslrate=col;//Proposed
				break;
				
			case "retAgebasedon":   
				selectNullvalChk($lastRow.find("td:eq(4)"),col);  
				break;
			 
			 
			case "retAgestart":
				$lastRow.find("td:eq(4)").find('input:eq(0)').val(col); 
				txtFldAgestart=col;//Proposed
				break;
			 
			 
			case "retAgeend": 
				$lastRow.find("td:eq(4)").find('input:eq(1)').val(col);   
				txtFldAgeend=col;//Proposed
				break;
				
			case "retOthRemarks": 
				$lastRow.find("td:eq(5)").find('input:eq(0)').val(col); 
				break;
			  
			case "retCrtdBy": 
				$lastRow.find("td:eq(5)").find('input:eq(1)').val(col);
				infoDetsArr.push(col);				
				break;
				
			case "retCrtdDate":
				$lastRow.find("td:eq(5)").find('input:eq(2)').val(col);
				infoDetsArr.push(col);
				break;
				
			case "retModBy":
				infoDetsArr.push(col);
				break;
				
			case "retModDate":
				infoDetsArr.push(col);
				break;	
				
		}	
		$lastRow.find("td:eq(3)").find('input:eq(2)').val("$" + txtFldORAnlExp + " Annually" + ", "  + txtFldOREslrate + " % Escalation"); //Proposed 
		$lastRow.find("td:eq(4)").find('input:eq(2)').val("Start @ " + txtFldAgestart + ", " + "End @ " + txtFldAgeend); //Proposed
	}
	}
else{
//	DHTML CRUD ICONS
	crudicons(null,'OthRetPlgtbl','SelOthRetPlgtbl','EOthRet','DOthRet');
}
if(!rdFrequencyValidation($lastRow.find("td:eq(4)").find('input:eq(1)'),$lastRow.find("td:eq(3)").find('input:eq(1)'),$lastRow.find("td:eq(3)").find('select:eq(0)')))return;
//getSyncExpRows(dataset); 
/*
//instant save added line
if(dataset == null){
	instantRetORSave($lastRow,INS_MODE);		
}
//

$lastRow.find("input[type=text]").prop("readonly",true);//instant save added line
$lastRow.find("select").prop("disabled",true);//instant save added line
*/
}

//DHTML SELECT ALL
function SelAllOthRetPlgtbl(obj){
	
	if($(obj).is(":checked")){
		
		$('#OthRetPlgtbl tbody tr').find("td:eq(1)").find("input[type=checkbox]").prop("checked",true);
		
		$("#DOthRet").attr("disabled",false);
		$('#OthRetPlgtbl tbody tr').addClass("selected");
		
		var $rowCount = $('#OthRetPlgtbl tbody tr').length;
		
		if($rowCount == 0){
			$(obj).prop("checked",false);
			/*$("#EOthRet").attr("disabled",true);
			$("#DOthRet").attr("disabled",true);*/
		}else if($rowCount == 1){
			$("#EOthRet").attr("disabled",false);
			$("#DOthRet").attr("disabled",false);
		}else if($rowCount > 1){
			/*$("#EOthRet").attr("disabled",true);*/
			$("#DOthRet").attr("disabled",false);
		}
		
	}else{
		
		$('#OthRetPlgtbl tbody tr').find("td:eq(1)").find("input[type=checkbox]").prop("checked",false);
		
		$('#OthRetPlgtbl tbody tr').removeClass("selected");
		
		/*$("#EOthRet").attr("disabled",true);
		$("#DOthRet").attr("disabled",true);*/
		
	}
	


}


 
/*Edit Row Click */
$("#EOthRet").on("click",function(){
	VOthRet(); 
});


/*View Row Click */
function VOthRet(){
	var isOneRowSelected=0;
	var $rowCount = $('#OthRetPlgtbl tbody tr').length;	
	var $lastRow = $("#OthRetPlgtbl tbody tr:last");	
	
	if($rowCount<1){
		applyToastrAlert("Insert rows before edit/view");
		return;
	} 
	/*$("#OthRetPlgtbl tbody tr").each(function(){
		var $row = $(this);   
		$row.removeClass('selected');  
		$(this).removeAttr("style"); 
		$row.find("td").removeAttr("style");
		
			
	});*/
	
	$("#OthRetPlgtbl tbody").find('input[name="radothretSelect"]').each(function(){ //Checkbox selection
		var $curElm=$(this);
		if($curElm.is(":checked")){ 
			isOneRowSelected++;
		}
	});
	
	
	if(isOneRowSelected > 1){ 
		applyToastrAlert("More than one rows selected.Select one row only");
		return;
	}
	
	$("#OthRetPlgtbl tbody").find('input[name="radothretSelect"]').each(function(){ //Checkbox selection
		var $curElm=$(this);
		if($curElm.is(":checked")){ 
			var $row = $curElm.parents("tr");                                    
			var $mode = $curElm.parents("tr").find("td:first").find('input:eq(0)').val(); 
			$curElm.prop("checked",false);
	     	 $curElm.parents("tr").removeClass('selected');
	     	 
			if(($mode == INS_MODE) || ($mode == UPD_MODE) ){
				 var $RowId=$row.index();
				 $curElm.parents("tr").find("td:first").find('input:eq(0)').val($mode);  
					$(this).parents("tr").find("td").find("input.editable,select.editable").each(function(){
					$(this).attr("disabled",false); 
					$row.removeClass('selected');  
					$(this).parent().css({border:'1px solid green'});
					$row.css({border:'1px solid green'});
					$row.find("td").css({border:'1px solid green'});
				});  
				 	othretRdlyflds($mode);
					othretfilldlgval($row); 
					if(!rdFrequencyValidation($('#txtFldDlgORAgePayends'),$("#txtFldDlgOREslrate"),$("#selDlgORFreq")))return; 
					showFIPAModel('OthRet_Dialog','Other Payment To Be Made During Retirement'); 
					$("#OthRet_Dialog").find(".modal-footer").find("button:eq(0)").removeClass("hidden");//instant save added line
					loadAgeStartEnd('txtFldDlgORAgePaySts',$("#selDlgORAgeBsOn"));
					$('#OthRet_Dialog').on('shown.bs.modal', function () {
					//	$row.find("input[type=text]").prop("readonly",true);//instant save added line
					//	$row.find("select").prop("disabled",true);//instant save added line
					

//						$("#OthRet_Dialog").find(".modal-footer").find("button:eq(0)").text("Edit");
						$("#OthRet_Dialog").find("input[id=txtFldDlgORtyofpay]").focus();//Aravindh
						$("#OthRet_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
							 if(!validateothretDetails())return; 
					     		if(!isEmpty($RowId) && !($RowId==undefined)){  
					     			othretfilldomval($RowId,$row); 
					     		}  
					     		if(!rdFrequencyValidation($row.find("td:eq(4)").find('input:eq(1)'),$row.find("td:eq(3)").find('input:eq(1)'),$row.find("td:eq(3)").find('select:eq(0)')))return;
//					     		getSyncExpRows(null);
					     //		instantRetORSave($row,UPD_MODE); //instant save added line
								$('#OthRet_Dialog').modal('hide'); 
								othretClearFlds();
								crudicons(null,'OthRetPlgtbl','SelOthRetPlgtbl','EOthRet','DOthRet');
						});
						$("#OthRet_Dialog").find(".modal-footer").find("button:eq(1)").on("click",function(){
							crudicons(null,'OthRetPlgtbl','SelOthRetPlgtbl','EOthRet','DOthRet');
						})
						
					});
					 
			}  
			isOneRowSelected++;
		} 
	});
	
	 
	if(isOneRowSelected==0){
		applyToastrAlert("No Rows Selected");
		return;
	}

	
}


/*Delete Row Click */
$("#DOthRet").on("click",function(){ 
	 		datatableDeleteRow('OthRetPlgtbl',OthRetPlgtbl,'SelOthRetPlgtbl','EOthRet','DOthRet');  
/*//			DHTML CRUD ICONS
			var rc = OthRetPlgtbl.row().count();
			if(rc ==0){
				$("#SelOthRetPlgtbl").prop("checked",false);
				crudicons(this,'OthRetPlgtbl','SelOthRetPlgtbl','EOthRet','DOthRet');
			}
//			DHTML CRUD ICONS
*/	 		
});

/*Clear Fields */
function othretClearFlds(){
	$("#OthRet_Dialog").find("input[type=text]").val("");
	$("#OthRet_Dialog").find("textarea").val("");
	$("#OthRet_Dialog").find("select").val("");
}

/*Disabled/Readonly Fields */
function othretRdlyflds(mode){ 
	 if(mode == QRY_MODE ){
			$("#OthRet_Dialog :input").prop("disabled", true); 
	 } else if((mode == INS_MODE) || (mode == UPD_MODE) ){
			$("#OthRet_Dialog :input").prop("disabled", false);
	 }
}

/*Validation */
function validateothretDetails(){
	  
	/*if(!(validateFocusFlds('OthRet_Dialog','txtFldDlgORtyofpay',OR_TYPE))) return; 
	if(!(validateFocusFlds('OthRet_Dialog','selDlgORFreq',OR_FREQ))) return; 
	if(!(validateFocusFlds('OthRet_Dialog','selDlgORAgeBsOn',OR_AGEBSE))) return; 
	if(!(validateFocusFlds('OthRet_Dialog','txtFldDlgORAgePaySts',OR_AGESTS))) return; 
	if(!rdFrequencyValidation($('#txtFldDlgORAgePayends'),$("#txtFldDlgOREslrate"),$("#selDlgORFreq")))return; 
	if(!rdStartAgeValidate($('#txtFldDlgORAgePaySts'),$('#selDlgORAgeBsOn')))return;
	if(!rdEndAgeValidate($('#txtFldDlgORAgePaySts'),$("#txtFldDlgORAgePayends")))return;*/
	  return true; 
}

function valothretTbl(){ 
//	var $lastRow = $("#OthRetPlgtbl tbody tr:last");	
	var $RowCount = OthRetPlgtbl.rows().count();

	var valid=true;
	/*if($RowCount > 0 ){
		$("#OthRetPlgtbl tbody tr").each(function(){
			var $lastRow=$(this);
		if(!(validateFocusDhtmlFlds($lastRow.find("td:eq(2)").find('input:eq(0)'), OR_TYPE, SCREEN_RETIREMENT))) {valid=false;return false;};
		if(!(validateFocusDhtmlFlds($lastRow.find("td:eq(3)").find('select:eq(0)'), OR_FREQ,SCREEN_RETIREMENT))) {valid=false;return false;};  
		if(!(validateFocusDhtmlFlds($lastRow.find("td:eq(6)").find('select:eq(0)'), OR_AGEBSE,SCREEN_RETIREMENT))){valid=false;return false;};
		if(!(validateFocusDhtmlFlds($lastRow.find("td:eq(7)").find('input:eq(0)'), OR_AGESTS,SCREEN_RETIREMENT))){valid=false;return false;};
		 
		});
	} */ 
	return valid;
}

/*Mandatory Fields Tooltip*/ 
$("#txtFldDlgORtyofpay,#selDlgORFreq," +
		"#selDlgORAgeBsOn,#txtFldDlgORAgePaySts").on("change",function(){
	if(!isEmpty($(this).val())){
	$(this).removeClass("mandatoryFillFlds");
	$(this).qtip('disable');
	$(this).qtip('destroy',true);
	}
});
  

/* Filling Model Fields*/
function othretfilldlgval($lastRow){
	  
//	  $('#OthRet_Dialog #txtFldDlgORMode').val($lastRow.find("td:eq(0)").find('input:eq(0)').val());//instant save added line
	  $('#OthRet_Dialog #txtFldDlgORId').val($lastRow.find("td:eq(0)").find('input:eq(1)').val());
	  $('#OthRet_Dialog #txtFldDlgORtyofpay').val($lastRow.find("td:eq(2)").find('input:eq(0)').val());
	  $('#OthRet_Dialog #selDlgORFreq').val($lastRow.find("td:eq(3)").find('select:eq(0)').val());
	  $('#OthRet_Dialog #txtFldDlgORAnlExp').val($lastRow.find("td:eq(3)").find('input:eq(0)').val());
	  $('#OthRet_Dialog #txtFldDlgOREslrate').val($lastRow.find("td:eq(3)").find('input:eq(1)').val());
	  $('#OthRet_Dialog #selDlgORAgeBsOn').val($lastRow.find("td:eq(4)").find('select:eq(0)').val());
//	  loadAgeStartEnd($("#txtFldDlgORAgePaySts"),$("#selDlgORAgeBsOn")); 
	  $('#OthRet_Dialog #txtFldDlgORAgePaySts').val($lastRow.find("td:eq(4)").find('input:eq(0)').val());
//	  loadAgeEnd($("#txtFldDlgORAgePaySts"),$("#txtFldDlgORAgePayends")); 
	  $('#OthRet_Dialog #txtFldDlgORAgePayends').val($lastRow.find("td:eq(4)").find('input:eq(1)').val());
	  $('#OthRet_Dialog #txtFldDlgORRemarks').val($lastRow.find("td:eq(5)").find('input:eq(0)').val());
	 
	  $('#OthRet_Dialog #txtFldDlgORCrtdBy').val($lastRow.find("td:eq(5)").find('input:eq(1)').val());
	  $('#OthRet_Dialog #txtFldDlgORCrtdDate').val($lastRow.find("td:eq(5)").find('input:eq(2)').val());
	
}

/* Filling Table Fields*/
function othretfilldomval($RowId,$row){
	
	$row.find("td:eq(2)").find('input:eq(0)').val($("#txtFldDlgORtyofpay").val()); 
	$row.find("td:eq(3)").find('select:eq(0)').val($("#selDlgORFreq").val());
	$row.find("td:eq(3)").find('input:eq(0)').val($("#txtFldDlgORAnlExp").val());  
	$row.find("td:eq(3)").find('input:eq(1)').val($("#txtFldDlgOREslrate").val()); 
	$row.find("td:eq(4)").find('select:eq(0)').val($("#selDlgORAgeBsOn").val());
	$row.find("td:eq(4)").find('input:eq(0)').val($("#txtFldDlgORAgePaySts").val()); 
	$row.find("td:eq(4)").find('input:eq(1)').val($("#txtFldDlgORAgePayends").val());  
	$row.find("td:eq(5)").find('input:eq(0)').val($("#txtFldDlgORRemarks").val());  
	$row.find("td:eq(3)").find('input:eq(2)').val("$" + $("#txtFldDlgORAnlExp").val() + " Annually" + ", " + $("#txtFldDlgOREslrate").val() + " % Escalation"); //Proposed
	$row.find("td:eq(4)").find('input:eq(2)').val("Start @ " + $("#txtFldDlgORAgePaySts").val() + ", " + "End @ " + $("#txtFldDlgORAgePayends").val()); //Proposed
//	$row.find("input[type=text]").prop("readonly",true);//instant save added line
//	$row.find("select").prop("disabled",true);//instant save added line


}


//instant save added line
$("#OthRet_Dialog").find("input,select,textarea").on("change",function(){
	$("#OthRet_Dialog").find(".modal-footer").find("button:eq(0)").removeClass("hidden");
});



/**
 * Retirement Planning - Income payment on retirement
 */

/*Datatable Initialisation*/
//var IncRetPlgtbl = $('#IncRetPlgtbl').DataTable( {
//	destroy: true,
// 	responsive: false,         
//    ordering: false,
//    searching: false,     
//    scrollY:  "40vh",
//    scrollX: true,
//    scroller: false,
//    scrollCollapse:false,
//    paging:false, 
//    filter:false,   
//    columnDefs: [], 
//    dom: '<<"top" ip>flt>',  
//  columnDefs: [  { width: '20px', targets: [0,1]},
//   	             {"className": "dt-head-center text-center",targets: [0,1,2,3,4,5,6,7,8,9,10],"orderable": false,"searchable": false}],		 
//		 fnDrawCallback: function(oSettings) {
//			 if (oSettings._iDisplayLength > oSettings.fnRecordsDisplay()) { 
//				 
//			    } 
//    
//		 }, 
//}).draw();


/*Add Row Click */
$("#AIncRet").on("click",function(){

//	if(!valincretTbl())return; 
	 if(!validationRetirementScreen())return; 
			incretClearFlds();
			
			$("#txtFldDlgprojIRId").val(makeid(17));
			
			showFIPAModel('IncRet_Dialog','Additional income and assets to be received on retirement');  
//			$("#IncRet_Dialog").find("input[id=txtFldDlgIRMode]").val("I");//instant save added line
			loadAgeStartEnd('txtFldDlgORAgePaySts',$("#selDlgORAgeBsOn"));
			$('#IncRet_Dialog').on('shown.bs.modal', function () {
//				$("#IncRet_Dialog").find(".modal-footer").find("button:eq(0)").text("Add");
				$("#IncRet_Dialog").find("input[id=txtFldDlgIRClsfy]").focus();//Aravindh
				$("#IncRet_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
						if(!validateincretDetails())return;
					   	incretRdlyflds(INS_MODE);  
					   	getincretRows(null); 
						$('#IncRet_Dialog').modal('hide'); 
				  });  
			});
			
			
});



/*Populate Data */
function getincretRows(dataset){ 
 
var cell0 = '<span></span>'+
'<input type="hidden" name="txtFldincretMode" readonly="true" value="'+INS_MODE+'" class="fipaMode"/><input type="hidden" name="txtFldIRId">';
 
var cell1 = '<div class="checkbox checkbox-primary text-center"><input type="checkbox" name="radincretSelect"/><label>&nbsp;</label></div>'; 
var cell2 = '<input type="text" name="txtFldIRClsfy" class="form-control editable"   onmouseover="fipaTooltip(this);"  maxlength="150"/>'; 
var cell3 = '<input type="text" name="txtFldIRDesc" class="form-control editable"   onmouseover="fipaTooltip(this);"  maxlength="150"/>';
var cell4 = '<select type="text" name="selIRFreq" class="form-control editable"  onmouseover="fipaTooltip(this);" ></select>';
var cell5 = '<input type="text" name="txtFldIRAmtofInc" class="form-control editable"   onmouseover="fipaTooltip(this);" />';
var cell6 = '<input type="text" name="txtFldIREslrate" class="form-control editable"   onmouseover="fipaTooltip(this);" />';
var cell7 = '<input type="text" name="txtFldIRRoi" class="form-control editable"   onmouseover="fipaTooltip(this);" />';
var cell8 = '<select type="text" name="selIRAgeBsOn" class="form-control editable"  onmouseover="fipaTooltip(this);" ></select>';
var cell9 = '<input type="text" name="txtFldIRAgePaySts" class="form-control editable"   onmouseover="fipaTooltip(this);" maxlength="20"/>';
var cell10 ='<input type="text" name="txtFldIRAgePayends" class="form-control editable"  onmouseover="fipaTooltip(this);"maxlength="20" />'+
'<input type="hidden" name="txtFldIRCrtdBy"/><input type="hidden" name="txtFldIRCrtdDate"/>'; 


IncRetPlgtbl.row.add( [cell0,cell1,cell2,cell3,cell4,cell5,cell6,cell7,cell8,cell9,cell10] ).draw( false );

var rowCount = $('#IncRetPlgtbl tbody tr:visible').length;	
rowCount =  (rowCount == 0) ? $('#IncRetPlgtbl tbody tr').length : rowCount;
var $lastRow = $("#IncRetPlgtbl tbody tr:last");	

$lastRow.find("td:first").find('span').text(rowCount); 

$lastRow.find("td:eq(1)").find("input:first").click(function(){
	selectSingleRow(this);
})

$lastRow.find("td:eq(0)").find('input:eq(1)').val($("#txtFldDlgprojIRId").val());

$lastRow.find("td:eq(1)").find("input:first").attr('id',"radincret"+$lastRow.index())
.parent().find('label').attr('for',"radincret"+$lastRow.index());

$lastRow.find("td:eq(2)").find('input:eq(0)').val($("#txtFldDlgIRClsfy").val());
$lastRow.find("td:eq(3)").find('input:eq(0)').val($("#txtFldDlgIRDesc").val());



var irfreq = $("#selDlgIRFreq > option").clone();
$lastRow.find("td:eq(4)").find('select:eq(0)').append(irfreq);
$lastRow.find("td:eq(4)").find('select:eq(0)').val($("#selDlgIRFreq").val());
$lastRow.find("td:eq(4)").find('select:eq(0)').on("change",function(){
	if(!rdFrequencyValidation($lastRow.find("td:eq(10)").find('input:eq(0)'),$lastRow.find("td:eq(6)").find('input:eq(0)'),$(this)))return; 
}); 



$lastRow.find("td:eq(5)").find('input:eq(0)').val($("#txtFldDlgIRAmtofInc").val());
$lastRow.find("td:eq(5)").find('input:eq(0)').addClass("applyEvntUsd");

$lastRow.find("td:eq(6)").find('input:eq(0)').val($("#txtFldDlgIREslrate").val());
$lastRow.find("td:eq(6)").find('input:eq(0)').addClass("applyEvntpCent3");

$lastRow.find("td:eq(7)").find('input:eq(0)').val($("#txtFldDlgIRRoi").val());
$lastRow.find("td:eq(7)").find('input:eq(0)').addClass("applyEvntpCent3");


var iragebsed =  $("#selDlgIRAgeBsOn > option").clone();
$lastRow.find("td:eq(8)").find('select:eq(0)').append(iragebsed);
$lastRow.find("td:eq(8)").find('select:eq(0)').val($("#selDlgIRAgeBsOn").val());
$lastRow.find("td:eq(8)").find('select:eq(0)').on("change",function(){
	if(!rdStartAgeValidate($lastRow.find("td:eq(9)").find('input:eq(0)'),$(this)))return;
}); 


 
$lastRow.find("td:eq(9)").find('input:eq(0)').val($("#txtFldDlgIRAgePaySts").val());
$lastRow.find("td:eq(9)").find('input:eq(0)').addClass("applyEvntYrs");
$lastRow.find("td:eq(9)").find('input:eq(0)').on("change",function(){
	if(!rdStartAgeValidate($(this),$lastRow.find("td:eq(8)").find('select:eq(0)')))return;
}); 


$lastRow.find("td:eq(10)").find('input:eq(0)').val($("#txtFldDlgIRAgePayends").val());
$lastRow.find("td:eq(10)").find('input:eq(0)').addClass("applyEvntYrs");
$lastRow.find("td:eq(10)").find('input:eq(0)').on("change",function(){
	if(!rdEndAgeValidate($lastRow.find("td:eq(9)").find('input:eq(0)'),$(this)))return;
}); 

applyEventHandlers();



$lastRow.find("input,select").on("click",function(event){
	event.stopPropagation();
});
$lastRow.click(function() {
    var checkbox = $(this).find("td:eq(1)").find("input");
    if(checkbox.is(":checked")) {
        checkbox.prop("checked", false);
	$lastRow.removeClass("selected");
    }else {
        checkbox.prop("checked", true);
	$lastRow.addClass("selected");
    }
});

//DHTML CRUD ICONS
$lastRow.click(function(){
	/*toggleSingleRow($lastRow);*/
	crudicons(this,'IncRetPlgtbl','SelIncRetPlgtbl','EIncRet','DIncRet');
			
});
//DHTML CRUD ICONS

$lastRow.find("td:eq(1)").find("input:first").click(function(){
	selectSingleRow(this);
//	DHTML CRUD ICONS
	crudicons(this,'IncRetPlgtbl','SelIncRetPlgtbl','EIncRet','DIncRet');
});




if(dataset != null){

	RDInctbl.rows().remove().draw();
	
	
	 rowCount = $('#IncRetPlgtbl tbody tr').length;	
	 $lastRow.find("td:first").find('span').text(rowCount); 
	 
			if($("#hTxtFldFnaReviewFlag").val() == "U"  || $("#hTxtFldFnaReviewFlag").val() == ""){ 
					$lastRow.find("td:eq(0)").find('input:eq(0)').val(col);
			}
			
	var infoDetsArr = new Array();
	
	for(var data in dataset){
		var col = dataset[data];
		
		switch(data){
		
			case "txtFldIRId": 
				$lastRow.find("td:eq(0)").find('input:eq(1)').val(col); 
				break;
				
			case "txtFldIRClsfy": 
				$lastRow.find("td:eq(2)").find('input:eq(0)').val(col); 
				
				break;
				
				
			case "txtFldIRDesc": 
				$lastRow.find("td:eq(3)").find('input:eq(0)').val(col); 
				
				break;
				
			case "selIRFreq": 
				selectNullvalChk($lastRow.find("td:eq(4)"),col);   
				break;
			 
			case "txtFldIRAmtofInc": 
				$lastRow.find("td:eq(5)").find('input:eq(0)').val(col); 
				break;
			 
			case "txtFldIREslrate": 
				$lastRow.find("td:eq(6)").find('input:eq(0)').val(col); 
				break;
			 
			 
			case "txtFldIRRoi": 
				$lastRow.find("td:eq(7)").find('input:eq(0)').val(col); 
				break;
			 
			 
			case "selIRAgeBsOn": 
				selectNullvalChk($lastRow.find("td:eq(8)"),col);   
				break;
			 
			 
			case "txtFldIRAgePaySts": 
				$lastRow.find("td:eq(9)").find('input:eq(0)').val(col); 
				break;
				
			case "txtFldIRAgePayends": 
				$lastRow.find("td:eq(10)").find('input:eq(0)').val(col); 
				break;
			  
			  
			case "txtFldIRCrtdBy": 
				$lastRow.find("td:eq(10)").find('input:eq(1)').val(col);
				infoDetsArr.push(col);				
				break;
				
			case "txtFldIRCrtdDate":
				$lastRow.find("td:eq(10)").find('input:eq(2)').val(col);
				infoDetsArr.push(col);
				break;
				
			case "txtFldIRModBy":
				infoDetsArr.push(col);
				break;
				
			case "txtFldIRModDate":
				infoDetsArr.push(col);
				break;	
		}			 
		 
	}
	}else{

//		DHTML CRUD ICONS
		crudicons(null,'IncRetPlgtbl','SelIncRetPlgtbl','EIncRet','DIncRet');
	}
if(!rdFrequencyValidation($lastRow.find("td:eq(10)").find('input:eq(0)'),$lastRow.find("td:eq(6)").find('input:eq(0)'),$lastRow.find("td:eq(4)").find('select:eq(0)')))return; 
//getSyncIncRows(dataset); 
/*
//instant save added line
if(dataset == null){
	instantRetIRSave($lastRow,INS_MODE);		
}


$lastRow.find("input[type=text]").prop("readonly",true);//instant save added line
$lastRow.find("select").prop("disabled",true);//instant save added line
//
*/
}

//DHTML SELECT ALL
function SelAllIncRetPlgtbl(obj){
	
	if($(obj).is(":checked")){
		
		$('#IncRetPlgtbl tbody tr').find("td:eq(1)").find("input[type=checkbox]").prop("checked",true);
		
		$("#DIncRet").attr("disabled",false);
		$('#IncRetPlgtbl tbody tr').addClass("selected");
		
		var $rowCount = $('#IncRetPlgtbl tbody tr').length;
		
		if($rowCount == 0){
			$(obj).prop("checked",false);
			$("#EIncRet").attr("disabled",true);
			$("#DIncRet").attr("disabled",true);
		}else if($rowCount == 1){
			$("#EIncRet").attr("disabled",false);
			$("#DIncRet").attr("disabled",false);
		}else if($rowCount > 1){
			$("#EIncRet").attr("disabled",true);
			$("#DIncRet").attr("disabled",false);
		}
		
	}else{
		
		$('#IncRetPlgtbl tbody tr').find("td:eq(1)").find("input[type=checkbox]").prop("checked",false);
		
		$('#IncRetPlgtbl tbody tr').removeClass("selected");
		
		$("#EIncRet").attr("disabled",true);
		$("#DIncRet").attr("disabled",true);
		
	}
}
 
/*Edit Row Click */
$("#EIncRet").on("click",function(){
	VIncRet(); 
});


/*View Row Click */
function VIncRet(){
	var isOneRowSelected=0;
	var $rowCount = $('#IncRetPlgtbl tbody tr').length;	
	var $lastRow = $("#IncRetPlgtbl tbody tr:last");	
	
	if($rowCount<1){
		applyToastrAlert("Insert rows before edit/view");
		return;
	} 
	$("#IncRetPlgtbl tbody").find('input[name="radincretSelect"]').each(function(){ //Checkbox selection
		var $curElm=$(this);
		if($curElm.is(":checked")){ 
			isOneRowSelected++;
		}
	});
	
	
	if(isOneRowSelected > 1){ 
		applyToastrAlert("More than one rows selected.Select one row only");
		return;
	}
	
	$("#IncRetPlgtbl tbody").find('input[name="radincretSelect"]').each(function(){ //Checkbox selection
		var $curElm=$(this);
		if($curElm.is(":checked")){ 
			var $row = $curElm.parents("tr");                                    
			var $mode = $curElm.parents("tr").find("td:first").find('input:eq(0)').val(); 
			$curElm.prop("checked",false);
	     	 $curElm.parents("tr").removeClass('selected');
	     	 
			if(($mode == INS_MODE) || ($mode == UPD_MODE) ){
				 var $RowId=$row.index();
				 $curElm.parents("tr").find("td:first").find('input:eq(0)').val($mode);  
				 
				 
				 $(this).parents("tr").find("td").find("input.editable,select.editable").each(function(){
						$(this).attr("disabled",false); 
						$row.removeClass('selected');  
						$(this).parent().css({border:'1px solid green'});
						$row.css({border:'1px solid green'});
						$row.find("td").css({border:'1px solid green'});
					});  
				 
				 
				 	incretRdlyflds($mode);
					incretfilldlgval($row); 
					if(!rdFrequencyValidation($('#txtFldDlgIRAgePayends'),$("#txtFldDlgIREslrate"),$("#selDlgIRFreq")))return; 
					showFIPAModel('IncRet_Dialog','Income to be received during retirement');  
					$("#IncRet_Dialog").find(".modal-footer").find("button:eq(0)").removeClass("hidden");//instant save added line
					loadAgeStartEnd('txtFldDlgORAgePaySts',$("#selDlgORAgeBsOn"));
					$('#IncRet_Dialog').on('shown.bs.modal', function () {
	//					$row.find("input[type=text]").prop("readonly",true);//instant save added line
		//				$row.find("select").prop("disabled",true);//instant save added line
					
//						$("#IncRet_Dialog").find(".modal-footer").find("button:eq(0)").text("Edit");
						$("#IncRet_Dialog").find("input[id=txtFldDlgIRClsfy]").focus();//Aravindh
						$("#IncRet_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
							 if(!validateincretDetails())return; 
					     		if(!isEmpty($RowId) && !($RowId==undefined)){  
					     			incretfilldomval($RowId,$row); 
					     		}  
					     		if(!rdFrequencyValidation($row.find("td:eq(10)").find('input:eq(0)'),$row.find("td:eq(6)").find('input:eq(0)'),$row.find("td:eq(4)").find('select:eq(0)')))return; 
					     	//	instantRetIRSave($row,UPD_MODE); //instant save added line
					     		$('#IncRet_Dialog').modal('hide'); 
								incretClearFlds();
								crudicons(this,'IncRetPlgtbl','SelIncRetPlgtbl','EIncRet','DIncRet');
							
						});
						
						$("#IncRet_Dialog").find(".modal-footer").find("button:eq(1)").on("click",function(){
							crudicons(this,'IncRetPlgtbl','SelIncRetPlgtbl','EIncRet','DIncRet');
						});
					});
					 
			}  
			isOneRowSelected++;
		} 
	});
	
	 
	if(isOneRowSelected==0){
		applyToastrAlert("No Rows Selected");
		return;
	}

	
}


/*Delete Row Click */
$("#DIncRet").on("click",function(){ 
 	datatableDeleteRow('IncRetPlgtbl',IncRetPlgtbl,'SelIncRetPlgtbl','EIncRet','DIncRet'); 
/*//	DHTML CRUD ICONS
	var rc = IncRetPlgtbl.row().count();
	if(rc ==0){
		$("#SelIncRetPlgtbl").prop("checked",false);
		crudicons(this,'IncRetPlgtbl','SelIncRetPlgtbl','EIncRet','DIncRet');
	}
//	DHTML CRUD ICONS
*/	
});

/*Clear Fields */
function incretClearFlds(){
	$("#IncRet_Dialog").find("input[type=text]").val("");
	$("#IncRet_Dialog").find("textarea").val("");
	$("#IncRet_Dialog").find("select").val("");
}

/*Disabled/Readonly Fields */
function incretRdlyflds(mode){ 
	 if(mode == QRY_MODE ){
			$("#IncRet_Dialog :input").prop("disabled", true); 
	 } else if((mode == INS_MODE) || (mode == UPD_MODE) ){
			$("#IncRet_Dialog :input").prop("disabled", false);
	 }
}

/*Validation */
function validateincretDetails(){
	  
	/*if(!(validateFocusFlds('IncRet_Dialog','txtFldDlgIRClsfy',IR_CLSFY))) return;
    if(!(validateFocusFlds('IncRet_Dialog','selDlgIRFreq',IR_FRQ))) return;
	if(!(validateFocusFlds('IncRet_Dialog','selDlgIRAgeBsOn',IR_AGEBASED))) return;
	if(!(validateFocusFlds('IncRet_Dialog','txtFldDlgIRAgePaySts',IR_AGESTS))) return;
	if(!rdFrequencyValidation($('#txtFldDlgIRAgePayends'),$("#txtFldDlgIREslrate"),$("#selDlgIRFreq")))return; 
	if(!rdStartAgeValidate($('#txtFldDlgIRAgePaySts'),$('#selDlgIRAgeBsOn')))return;
	if(!rdEndAgeValidate($('#txtFldDlgIRAgePaySts'),$("#txtFldDlgIRAgePayends")))return;*/
	  return true; 
}
 


function valincretTbl(){ 
//	var $lastRow = $("#IncRetPlgtbl tbody tr:last");	
	var $RowCount = IncRetPlgtbl.rows().count();

	var valid=true;
	/*if($RowCount > 0 ){ 
		$("#IncRetPlgtbl tbody tr").each(function(){
			var $lastRow=$(this);
		if(!(validateFocusDhtmlFlds($lastRow.find("td:eq(2)").find('input:eq(0)'), IR_CLSFY,SCREEN_RETIREMENT))){valid=false;return false;};
		if(!(validateFocusDhtmlFlds($lastRow.find("td:eq(4)").find('select:eq(0)'), IR_FRQ,SCREEN_RETIREMENT))) {valid=false;return false;}; 
		if(!(validateFocusDhtmlFlds($lastRow.find("td:eq(8)").find('select:eq(0)'), IR_AGEBASED,SCREEN_RETIREMENT))){valid=false;return false;};
		if(!(validateFocusDhtmlFlds($lastRow.find("td:eq(9)").find('input:eq(0)'), IR_AGESTS,SCREEN_RETIREMENT))){valid=false;return false;};
		 
		});
	} */ 
	return valid;
}


/*Mandatory Fields Tooltip*/ 
$("#txtFldDlgIRClsfy,#selDlgIRFreq," +
		"#selDlgIRAgeBsOn," +
		"#txtFldDlgIRAgePaySts").on("change",function(){
	if(!isEmpty($(this).val())){
	$(this).removeClass("mandatoryFillFlds");
	$(this).qtip('disable');
	$(this).qtip('destroy',true);
	}
});
  

/* Filling Model Fields*/
function incretfilldlgval($lastRow){
	//  $('#IncRet_Dialog #txtFldDlgIRMode').val($lastRow.find("td:eq(0)").find('input:eq(0)').val());//instant save added line
	  $('#IncRet_Dialog #txtFldDlgIRId').val($lastRow.find("td:eq(0)").find('input:eq(1)').val());
	  $('#IncRet_Dialog #txtFldDlgIRClsfy').val($lastRow.find("td:eq(2)").find('input:eq(0)').val());
	  $('#IncRet_Dialog #txtFldDlgIRDesc').val($lastRow.find("td:eq(3)").find('input:eq(0)').val());
	  $('#IncRet_Dialog #selDlgIRFreq').val($lastRow.find("td:eq(4)").find('select:eq(0)').val());
	  $('#IncRet_Dialog #txtFldDlgIRAmtofInc').val($lastRow.find("td:eq(5)").find('input:eq(0)').val());
	  $('#IncRet_Dialog #txtFldDlgIREslrate').val($lastRow.find("td:eq(6)").find('input:eq(0)').val());
	  $('#IncRet_Dialog #txtFldDlgIRRoi').val($lastRow.find("td:eq(7)").find('input:eq(0)').val());
	  $('#IncRet_Dialog #selDlgIRAgeBsOn').val($lastRow.find("td:eq(8)").find('select:eq(0)').val());
	  $('#IncRet_Dialog #txtFldDlgIRAgePaySts').val($lastRow.find("td:eq(9)").find('input:eq(0)').val());
	  $('#IncRet_Dialog #txtFldDlgIRAgePayends').val($lastRow.find("td:eq(10)").find('input:eq(0)').val());
	  $('#IncRet_Dialog #txtFldDlgIRCrtdBy').val($lastRow.find("td:eq(10)").find('input:eq(1)').val());
	  $('#IncRet_Dialog #txtFldDlgIRCrtdDate').val($lastRow.find("td:eq(10)").find('input:eq(2)').val());
	
}

/* Filling Table Fields*/
function incretfilldomval($RowId,$row){
	
	$row.find("td:eq(2)").find('input:eq(0)').val($("#txtFldDlgIRClsfy").val()); 
	$row.find("td:eq(3)").find('input:eq(0)').val($("#txtFldDlgIRDesc").val());
	$row.find("td:eq(4)").find('select:eq(0)').val($("#selDlgIRFreq").val());  
	$row.find("td:eq(5)").find('input:eq(0)').val($("#txtFldDlgIRAmtofInc").val()); 
	$row.find("td:eq(6)").find('input:eq(0)').val($("#txtFldDlgIREslrate").val());
	$row.find("td:eq(7)").find('input:eq(0)').val($("#txtFldDlgIRRoi").val()); 
	$row.find("td:eq(8)").find('select:eq(0)').val($("#selDlgIRAgeBsOn").val());  
	$row.find("td:eq(9)").find('input:eq(0)').val($("#txtFldDlgIRAgePaySts").val());  
	$row.find("td:eq(10)").find('input:eq(0)').val($("#txtFldDlgIRAgePayends").val());  
//	$row.find("input[type=text]").prop("readonly",true);//instant save added line
//	$row.find("select").prop("disabled",true);//instant save added line

}


//instant save added line
$("#IncRet_Dialog").find("input,select,textarea").on("change",function(){
	$("#IncRet_Dialog").find(".modal-footer").find("button:eq(0)").removeClass("hidden");
});
 
/**
 * Retirement Planning - Income and Assert on retirement
 */

	

/*Add Row Click */
$("#AIncAssRet").on("click",function(){
	//if(!valincassrtTbl())return; 
	 if(!validationRetirementScreen())return; 
			incassrtClearFlds();
			$("#txtFldDlgprojIncAssId").val(makeid(17));
			showFIPAModel('IncAssRet_Dialog','Income and Assets Available During Retirement');   
		//	$("#IncAssRet_Dialog").find("input[id=txtFldDlgIncAssMode]").val("I");//instant save added line
			loadAgeStartEnd('txtFldDlgORAgePaySts',$("#selDlgORAgeBsOn"));
			$('#IncAssRet_Dialog').on('shown.bs.modal', function () {
//				$("#IncAssRet_Dialog").find(".modal-footer").find("button:eq(0)").text("Add");
				$("#IncAssRet_Dialog").find("input[id=txtFldDlgIncAssDesc]").focus();//Aravindh
				$("#IncAssRet_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
						if(!validateincassrtDetails())return;
					   	incassrtRdlyflds(INS_MODE);  
					   	getincassrtRows(null,"N"); 
						$('#IncAssRet_Dialog').modal('hide'); 
				  });  
			});
			
			
});



/*Populate Data */
function getincassrtRows(dataset,AddSts){ 

//	 var intretslfage=Number($("#txtFldRDSlfIntAge").val());
		 var basedon=$("#retAgeBasedon").val().toUpperCase();
		 var intretslfage=isEmpty($("#retSelfAge").val())? 0 :Number($("#retSelfAge").val()); 
			var totAge=isEmpty($("#retSelfProjage").val())? 0 :Number($("#retSelfProjage").val());
			
//		 var totAge=Number($("#txtFldRDSlfProjLfe").val());
var cell0 = '<span></span>'+
'<input type="hidden" name="txtFldincassrtMode" readonly="true" value="'+INS_MODE+'" class="fipaMode"/><input type="hidden" name="txtFldIncAssId"><input type="hidden" class="rowrefid" name="txtFldIncAssRefId">';
 
var cell1 = '<div class="checkbox checkbox-primary text-center"><input type="checkbox" name="radincassrtSelect"/><label>&nbsp;</label></div>'; 
var cell2 = '<input type="text" name="txtFldIncAssDesc" class="form-control editable form-tablecolor"   onmouseover="fipaTooltip(this);" maxlength="150" readonly="readonly"/>';
//var cell3 = '<input type="text" name="txtFldIncAssClsfy" class="form-control editable form-tablecolor"   onmouseover="fipaTooltip(this);" maxlength="150" /><input type="hidden" name="txtFldIncAsstSubClsfy"/>'; 
var cell3 = '<select type="text" name="txtFldIncAssClsfy" class="form-control editable form-tablecolor"   onmouseover="fipaTooltip(this);" maxlength="150" readonly="readonly" disabled="disabled"/></select><input type="hidden" name="txtFldIncAsstSubClsfy"/>'; 
var cell4 = '<input type="hidden" name="txtFldIncAssAmtofInc" class="form-control editable form-tablecolor"   onmouseover="fipaTooltip(this);" />'+
'<select type="text" name="selIncAssFreq" class="form-control editable form-tablecolor"  onmouseover="fipaTooltip(this);"  style="display:none"></select>'+
'<input type="hidden" name="txtFldIncAssEslrate" class="form-control editable form-tablecolor"   onmouseover="fipaTooltip(this);" />'+
'<input type="hidden" name="txtFldIncAssRoi" class="form-control editable form-tablecolor"   onmouseover="fipaTooltip(this);" />'+
'<input type="text" name="" class="form-control editable form-tablecolor"   onmouseover="fipaTooltip(this);" readonly="readonly"/>';//Proposed
/*var cell5 = '<input type="text" name="txtFldIncAssAmtofInc" class="form-control editable"   onmouseover="fipaTooltip(this);" />';
var cell6 = '<input type="text" name="txtFldIncAssEslrate" class="form-control editable"   onmouseover="fipaTooltip(this);" />';
var cell7 = '<input type="text" name="txtFldIncAssRoi" class="form-control editable"   onmouseover="fipaTooltip(this);" />';*/
var cell5 = '<input type="hidden" name="txtFldIncAssAgePaySts" class="form-control editable form-tablecolor"   onmouseover="fipaTooltip(this);"  maxlength="20"/>'+
'<input type="hidden" name="txtFldIncAssAgePayends" class="form-control editable form-tablecolor"  onmouseover="fipaTooltip(this);"  maxlength="20"/>'+
'<select type="text" name="selIncAssAgeBsOn" class="form-control editable form-tablecolor" style="display:none" onmouseover="fipaTooltip(this);" ></select>'+
'<input type="hidden" name="txtFldIncAssCrtdBy"/><input type="hidden" name="txtFldIncAssCrtdDate"/>'+
'<input type="text" name="" class="form-control editable form-tablecolor"   onmouseover="fipaTooltip(this);" readonly="readonly"/>';//Proposed
/*var cell9 = '<input type="text" name="txtFldIncAssAgePaySts" class="form-control editable"   onmouseover="fipaTooltip(this);"  maxlength="20"/>';
var cell10 ='<input type="text" name="txtFldIncAssAgePayends" class="form-control editable"  onmouseover="fipaTooltip(this);"  maxlength="20"/>'+
'<input type="hidden" name="txtFldIncAssCrtdBy"/><input type="hidden" name="txtFldIncAssCrtdDate"/>'; */


IncAssRetPlgtbl.row.add( [cell0,cell1,cell2,cell3,cell4,cell5] ).draw( false );

var rowCount = $('#IncAssRetPlgtbl tbody tr:visible').length;	
rowCount =  (rowCount == 0) ? $('#IncAssRetPlgtbl tbody tr').length : rowCount;
var $lastRow = $("#IncAssRetPlgtbl tbody tr:last");	

$lastRow.find("td:first").find('span').text(rowCount); 

$lastRow.find("td:eq(1)").find("input:first").click(function(){
	selectSingleRow(this);
});

$lastRow.find("td:eq(0)").find('input:eq(1)').val($("#txtFldDlgprojIncAssId").val());

$lastRow.find("td:eq(1)").find("input:first").attr('id',"radincassrt"+$lastRow.index())
.parent().find('label').attr('for',"radincassrt"+$lastRow.index());

var classification = $("#txtFldDlgIncAssClsfy").val();
var desc = $("#txtFldDlgIncAssDesc").val();
var frequency = isEmpty($("#selDlgIncAssFreq").val())? "REGULAR" :  $("#selDlgIncAssFreq").val();
var amountofincome = isEmpty($("#txtFldDlgIncAssAmtofInc").val())? 0 :  Number($("#txtFldDlgIncAssAmtofInc").val());
var esclatrate = isEmpty($("#txtFldDlgIncAssEslrate").val())? Number("0") :  Number($("#txtFldDlgIncAssEslrate").val());
var roi = isEmpty($("#txtFldDlgIncAssRoi").val())? Number("0") :  Number($("#txtFldDlgIncAssRoi").val());
var agebased = isEmpty($("#selDlgIncAssAgeBsOn").val())? basedon :  $("#selDlgIncAssAgeBsOn").val();
var agestarts = isEmpty($("#txtFldDlgIncAssAgePaySts").val())? intretslfage : Number($("#txtFldDlgIncAssAgePaySts").val());
var ageends = isEmpty($("#txtFldDlgIncAssAgePayends").val())? totAge : Number($("#txtFldDlgIncAssAgePayends").val());

if((AddSts =="LIFE_RET")){
	
	var covertypeRPrefid="";
	$('#sellipCoveragetype option:selected').each(function() {    
		if($(this).val()== "RP")
			covertypeRPrefid = "LIFE_COVERAGE_RP";
    }); 
	
	/* var dte=new Date();  
		var rowRefID=$("#lipPremiumsrc").attr("rowref");
		var rowRefID1=$("#sellipCoveragetype").attr("rowref");
			if(isValidObject(rowRefID)){
				rowRefID=rowRefID;
			}else if(isValidObject(rowRefID1)){
				rowRefID=rowRefID1;
			}else{
				rowRefID="LIFE_"+$lastRow.index()+dte.getDate()+dte.getMonth()+dte.getYear()+dte.getMinutes()+
				 dte.getSeconds()+dte.getMilliseconds();
			}*/

	var rowRefID = covertypeRPrefid;
	$lastRow.find("td:eq(0)").find('input:eq(2)').val(rowRefID);
	$lastRow.find("td:eq(0)").find('input:eq(2)').addClass("rowrefid");
	$("#sellipCoveragetype").attr("rowrefid",covertypeRPrefid);

	
	//classification = "Insurance";
	desc = $("#lipPlanname").val();
	
	var lifepayfreq = $("#lipPaymentfreq").val();
	frequency = (lifepayfreq == "SINGLE") ? "SINGLE" : "REGULAR";	
	amountofincome = isEmpty($("#lipSa").val())? Number("0") :  Number($("#lipSa").val());	
	esclatrate= "";
	roi = "";
	agebased=isEmpty($("#lipOwner").val())?  basedon :  $("#lipOwner").val().toUpperCase();
	agestarts = intretslfage;
	ageends = totAge;
}


//$lastRow.find("td:eq(3)").find('input:eq(0)').val(classification);
var retClassfication = $("#txtFldDlgIncAssClsfy > option").clone();
$lastRow.find("td:eq(3)").find('select:eq(0)').append(retClassfication);
$lastRow.find("td:eq(3)").find('select:eq(0)').val(classification);
$lastRow.find("td:eq(2)").find('input:eq(0)').val(desc);
$lastRow.find("td:eq(2)").find('input:eq(0)').on("change",function(){
//	reverseRetSync($lastRow);//Reverse Sync process	
});




var iasfreq = $("#selDlgIncAssFreq > option").clone();
$lastRow.find("td:eq(4)").find('select:eq(0)').append(iasfreq);
$lastRow.find("td:eq(4)").find('select:eq(0)').val(frequency);
$lastRow.find("td:eq(4)").find('select:eq(0)').on("change",function(){
	if(!rdFrequencyValidation($lastRow.find("td:eq(5)").find('input:eq(1)'),$lastRow.find("td:eq(4)").find('input:eq(1)'),$(this)))return;
}); 



$lastRow.find("td:eq(4)").find('input:eq(0)').val(amountofincome);
$lastRow.find("td:eq(4)").find('input:eq(0)').addClass("applyEvntUsd");
$lastRow.find("td:eq(4)").find('input:eq(0)').on("change",function(){
//	reverseRetSync($lastRow);//Reverse Sync process	
});


$lastRow.find("td:eq(4)").find('input:eq(1)').val(esclatrate);
$lastRow.find("td:eq(4)").find('input:eq(1)').addClass("applyEvntpCent3");

$lastRow.find("td:eq(4)").find('input:eq(2)').val(roi); 
$lastRow.find("td:eq(4)").find('input:eq(2)').addClass("applyEvntpCent3");
$lastRow.find("td:eq(4)").find('input:eq(3)').val("$" + $("#txtFldDlgIncAssAmtofInc").val() + " " + $("#selDlgIncAssFreq").val() + ", " + $("#txtFldDlgIncAssEslrate").val() + "% Escalation" + $("#txtFldDlgIncAssRoi").val() +"% ROI" ); //Proposed
var iassagebsed =  $("#selDlgIncAssAgeBsOn > option").clone();
$lastRow.find("td:eq(5)").find('select:eq(0)').append(iassagebsed);
$lastRow.find("td:eq(5)").find('select:eq(0)').val(agebased);
$lastRow.find("td:eq(5)").find('select:eq(0)').on("change",function(){ 
	if(!rdStartAgeValidate($lastRow.find("td:eq(5)").find('input:eq(0)'),$(this)))return;
//	reverseRetSync($lastRow);//Reverse Sync process
}); 



$lastRow.find("td:eq(5)").find('input:eq(0)').val(agestarts);
$lastRow.find("td:eq(5)").find('input:eq(0)').addClass("applyEvntYrs");
$lastRow.find("td:eq(5)").find('input:eq(0)').on("change",function(){
	if(!rdStartAgeValidate($(this),$lastRow.find("td:eq(5)").find('select:eq(0)')))return;
}); 

$lastRow.find("td:eq(5)").find('input:eq(1)').val(ageends);
$lastRow.find("td:eq(5)").find('input:eq(1)').addClass("applyEvntYrs");
$lastRow.find("td:eq(5)").find('input:eq(1)').on("change",function(){
//	if(!rdFrequencyValidation($lastRow.find("td:eq(9)").find('input:eq(0)'),$(this)))return; 
	if(!rdEndAgeValidate($lastRow.find("td:eq(5)").find('input:eq(0)'),$(this)))return;
}); 
$lastRow.find("td:eq(5)").find('input:eq(4)').val("Start @ " + $("#txtFldDlgIncAssAgePaySts").val() + ", " + "End @ " + $("#txtFldDlgIncAssAgePayends").val()); //Proposed



applyEventHandlers();




$lastRow.find("input,select").on("click",function(event){
	event.stopPropagation();
});
$lastRow.click(function() {
    var checkbox = $(this).find("td:eq(1)").find("input");
    if(checkbox.is(":checked")) {
        checkbox.prop("checked", false);
	$lastRow.removeClass("selected");
    }else {
        checkbox.prop("checked", true);
	$lastRow.addClass("selected");
    }
});



//DHTML CRUD ICONS
$lastRow.click(function(){
	/*toggleSingleRow($lastRow);*/
	crudicons(this,'IncAssRetPlgtbl','SelIncAssRetPlgtbl','EIncAssRet','DIncAssRet');
			
});
//DHTML CRUD ICONS

$lastRow.find("td:eq(1)").find("input:first").click(function(){
	selectSingleRow(this);
//	DHTML CRUD ICONS
	crudicons(this,'IncAssRetPlgtbl','SelIncAssRetPlgtbl','EIncAssRet','DIncAssRet');
});


if(dataset != null){
//	RDIncAsstbl.rows().remove().draw();
	
	rowCount = $('#IncAssRetPlgtbl tbody tr').length;	
	
	$lastRow.find("td:first").find('span').text(rowCount); 
	
			if($("#hTxtFldFnaReviewFlag").val() == "U"  || $("#hTxtFldFnaReviewFlag").val() == ""){ 
					$lastRow.find("td:eq(0)").find('input:eq(0)').val(col);
			}
			
	var infoDetsArr = new Array();
	
	for(var data in dataset){
		var col = dataset[data];
		
		var txtFldIncAssAmtofInc;//Proposed
		var txtFldIncAssFreq;//Proposed
		var txtFldIncAssEslrate;//Proposed
		var txtFldIncAssRoi;//Proposed
		var txtFldIncAssAgePaySts;//Proposed
		var txtFldIncAssAgePayends;//Proposed
		switch(data){

		
		case "txtFldIncAssId": 
			$lastRow.find("td:eq(0)").find('input:eq(1)').val(col); 
			break;

		case "txtFldIncAssRefId":  
			$lastRow.find("td:eq(0)").find('input:eq(2)').val(col);
			if(!isEmpty(col)){$lastRow.find("td:eq(0)").find('input:eq(2)').addClass("rowrefid");
			//this line is added for Life Insurance Sync
			$lastRow.attr("rowrefid",col);}
			break;
			
			
		case "txtFldIncAssClsfy": 
			//$lastRow.find("td:eq(3)").find('input:eq(0)').val(col); 
			selectNullvalChk($lastRow.find("td:eq(3)"),col);
			break;
			
			
		case "txtFldIncAssDesc": 
			$lastRow.find("td:eq(2)").find('input:eq(0)').val(col); 
			
			break;
			
		case "selIncAssFreq": 
			var value=(isEmpty(col)? "REGULAR" : col);
			selectNullvalChk($lastRow.find("td:eq(4)"),value);   
			txtFldIncAssFreq=value;//Proposed
			break;
		 
		case "txtFldIncAssAmtofInc": 
			var value=(isEmpty(col)? Number("0") : col);
			$lastRow.find("td:eq(4)").find('input:eq(0)').val(value); 
			txtFldIncAssAmtofInc=value;//Proposed
			break;
		 
		case "txtFldIncAssEslrate": 
			var value=(isEmpty(col)?  Number("0") : col);
			$lastRow.find("td:eq(4)").find('input:eq(1)').val(value); 
			txtFldIncAssEslrate=value;//Proposed
			break;
		 
		 
		case "txtFldIncAssRoi": 
			var value=(isEmpty(col)? Number("0")  : col);
			$lastRow.find("td:eq(4)").find('input:eq(2)').val(value); 
			txtFldIncAssRoi=value;//Proposed
			break;
		 
		 
		case "selIncAssAgeBsOn": 
			var value=(isEmpty(col)? basedon : col);
			selectNullvalChk($lastRow.find("td:eq(5)"),value);   
			break;
		 
		 
		case "txtFldIncAssAgePaySts": 
			var value=(isEmpty(col)? intretslfage : col);
			$lastRow.find("td:eq(5)").find('input:eq(0)').val(value); 
			txtFldIncAssAgePaySts=value;//Proposed
			break;
			
		case "txtFldIncAssAgePayends": 
			var value=(isEmpty(col)? totAge : col);
			$lastRow.find("td:eq(5)").find('input:eq(1)').val(value); 
			txtFldIncAssAgePayends=value;//Proposed
			break;
		  
		  
		case "txtFldIncAssCrtdBy": 
			$lastRow.find("td:eq(5)").find('input:eq(2)').val(col);
			infoDetsArr.push(col);				
			break;
			
		case "txtFldIncAssCrtdDate":
			$lastRow.find("td:eq(5)").find('input:eq(3)').val(col);
			infoDetsArr.push(col);
			break;
			
		case "txtFldIncAssModBy":
			infoDetsArr.push(col);
			break;
			
		case "txtFldIncAssModDate":
			infoDetsArr.push(col);
			break;	
		}
		$lastRow.find("td:eq(4)").find('input:eq(3)').val("$" + txtFldIncAssAmtofInc + " " + txtFldIncAssFreq + ", " + txtFldIncAssEslrate + "% Escalation" + txtFldIncAssEslrate +"% ROI" ); //Proposed
		$lastRow.find("td:eq(5)").find('input:eq(4)').val("Start @ " + txtFldIncAssAgePaySts + ", " + "End @ " + txtFldIncAssAgePayends); //Proposed
	}
	}
else{
//	DHTML CRUD ICONS
	crudicons(null,'IncAssRetPlgtbl','SelIncAssRetPlgtbl','EIncAssRet','DIncAssRet');
}
if(!rdFrequencyValidation($lastRow.find("td:eq(5)").find('input:eq(1)'),$lastRow.find("td:eq(4)").find('input:eq(1)'),$lastRow.find("td:eq(4)").find('select:eq(0)')))return;

/*
//instant save added line
if(dataset == null){ 
		instantIncAssSave($lastRow,INS_MODE);	 
}
//
$lastRow.find("input[type=text]").prop("readonly",true);//instant save added line
$lastRow.find("select").prop("disabled",true);//instant save added line
*/
}

//DHTML SELECT ALL
function SelAllIncAssRetPlgtbl(obj){
	
	if($(obj).is(":checked")){
		
		$('#IncAssRetPlgtbl tbody tr').find("td:eq(1)").find("input[type=checkbox]").prop("checked",true);
		
		$("#DIncAssRet").attr("disabled",false);
		$('#IncAssRetPlgtbl tbody tr').addClass("selected");
		
		var $rowCount = $('#IncAssRetPlgtbl tbody tr').length;
		
		if($rowCount == 0){
			$(obj).prop("checked",false);
			/*$("#EIncAssRet").attr("disabled",true);
			$("#DIncAssRet").attr("disabled",true);*/
		}else if($rowCount == 1){
			$("#EIncAssRet").attr("disabled",false);
			$("#DIncAssRet").attr("disabled",false);
		}else if($rowCount > 1){
			/*$("#EIncAssRet").attr("disabled",true);*/
			$("#DIncAssRet").attr("disabled",false);
		}
		
	}else{
		
		$('#IncAssRetPlgtbl tbody tr').find("td:eq(1)").find("input[type=checkbox]").prop("checked",false);
		
		$('#IncAssRetPlgtbl tbody tr').removeClass("selected");
		
		/*$("#EIncAssRet").attr("disabled",true);
		$("#DIncAssRet").attr("disabled",true);*/
		
	}
 
}
/*Edit Row Click */
$("#EIncAssRet").on("click",function(){
	VIncAssRet(); 
});


/*View Row Click */
function VIncAssRet(){
	var isOneRowSelected=0;
	var $rowCount = $('#IncAssRetPlgtbl tbody tr').length;	
	var $lastRow = $("#IncAssRetPlgtbl tbody tr:last");	
	
	if($rowCount<1){
		applyToastrAlert("Insert rows before edit/view");
		return;
	} 
	$("#IncAssRetPlgtbl tbody").find('input[name="radincassrtSelect"]').each(function(){ //Checkbox selection
		var $curElm=$(this);
		if($curElm.is(":checked")){ 
			isOneRowSelected++;
		}
	});
	
	
	if(isOneRowSelected > 1){ 
		applyToastrAlert("More than one rows selected.Select one row only");
		return;
	}
	
	$("#IncAssRetPlgtbl tbody").find('input[name="radincassrtSelect"]').each(function(){ //Checkbox selection
		var $curElm=$(this);
		if($curElm.is(":checked")){ 
			var $row = $curElm.parents("tr");                                    
			var $mode = $curElm.parents("tr").find("td:first").find('input:eq(0)').val(); 
			$curElm.prop("checked",false);
	     	 $curElm.parents("tr").removeClass('selected');
	     	 
			if(($mode == INS_MODE) || ($mode == UPD_MODE) ){
				 var $RowId=$row.index();
				 $curElm.parents("tr").find("td:first").find('input:eq(0)').val($mode);  
				$(this).parents("tr").find("td").find("input.editable,select.editable").each(function(){
					$(this).attr("disabled",false); 
					$row.removeClass('selected');  
					$(this).parent().css({border:'1px solid green'});
					$row.css({border:'1px solid green'});
					$row.find("td").css({border:'1px solid green'});
				});  
				 	incassrtRdlyflds($mode);
					incassrtfilldlgval($row); 
					if(!rdFrequencyValidation($('#txtFldDlgIncAssAgePayends'),$("#txtFldDlgIncAssEslrate"),$("#selDlgIncAssFreq")))return; 
					showFIPAModel('IncAssRet_Dialog','Income and Assets Available During Retirement');  
					$("#IncAssRet_Dialog").find(".modal-footer").find("button:eq(0)").removeClass("hidden");//instant save added line
					loadAgeStartEnd('txtFldDlgORAgePaySts',$("#selDlgORAgeBsOn"));
					$('#IncAssRet_Dialog').on('shown.bs.modal', function () {
				//		$row.find("input[type=text]").prop("readonly",true);//instant save added line
				//		$row.find("select").prop("disabled",true);//instant save added line
					

//						$("#IncAssRet_Dialog").find(".modal-footer").find("button:eq(0)").text("Edit");
						$("#IncAssRet_Dialog").find("input[id=txtFldDlgIncAssDesc]").focus();
						$("#IncAssRet_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
							 if(!validateincassrtDetails())return; 
					     		if(!isEmpty($RowId) && !($RowId==undefined)){  
					     			incassrtfilldomval($RowId,$row); 
					     		}  
//					     		reverseRetSync($row);//Reverse Sync process
							 			
							 		 
					     		if(!rdFrequencyValidation($lastRow.find("td:eq(10)").find('input:eq(0)'),$lastRow.find("td:eq(6)").find('input:eq(0)'),$lastRow.find("td:eq(4)").find('select:eq(0)')))return;
					     		//instantIncAssSave($row,UPD_MODE); //instant save added line
					     		$('#IncAssRet_Dialog').modal('hide'); 
								incassrtClearFlds();
								crudicons(this,'IncAssRetPlgtbl','SelIncAssRetPlgtbl','EIncAssRet','DIncAssRet');
							
						});
						$("#IncAssRet_Dialog").find(".modal-footer").find("button:eq(1)").on("click",function(){
							crudicons(this,'IncAssRetPlgtbl','SelIncAssRetPlgtbl','EIncAssRet','DIncAssRet');
						});
					});
					 
			}  
			
			isOneRowSelected++;
		
		} 
	});
	
	 
	if(isOneRowSelected==0){
		applyToastrAlert("No Rows Selected");
		return;
	}

	
}


/*Delete Row Click */
$("#DIncAssRet").on("click",function(){ 
 		datatableDeleteRow("IncAssRetPlgtbl",IncAssRetPlgtbl,'SelIncAssRetPlgtbl','EIncAssRet','DIncAssRet');  

/*//		DHTML CRUD ICONS
		var rc = IncAssRetPlgtbl.row().count();
		if(rc ==0){
			$("#SelIncAssRetPlgtbl").prop("checked",false);
			crudicons(this,'IncAssRetPlgtbl','SelIncAssRetPlgtbl','EIncAssRet','DIncAssRet');
		}
//		DHTML CRUD ICONS
*/		
});

/*Clear Fields */
function incassrtClearFlds(){
	$("#IncAssRet_Dialog").find("input[type=text]").val("");
	$("#IncAssRet_Dialog").find("textarea").val("");
	$("#IncAssRet_Dialog").find("select").val("");
}

/*Disabled/Readonly Fields */
function incassrtRdlyflds(mode){ 
	 if(mode == QRY_MODE ){
			$("#IncAssRet_Dialog :input").prop("disabled", true); 
	 } else if((mode == INS_MODE) || (mode == UPD_MODE) ){
			$("#IncAssRet_Dialog :input").prop("disabled", false);
	 }
}

/*Validation */
function validateincassrtDetails(){
	 
	/*if(!(validateFocusFlds('IncAssRet_Dialog','txtFldDlgIncAssClsfy',INCASS_CLSFY))) return; 
	if(!(validateFocusFlds('IncAssRet_Dialog','selDlgIncAssFreq',INCASS_FREQ))) return; 
	if(!(validateFocusFlds('IncAssRet_Dialog','selDlgIncAssAgeBsOn',INCASS_AGEBSD))) return; 
	if(!(validateFocusFlds('IncAssRet_Dialog','txtFldDlgIncAssAgePaySts',INCASS_AGESTS))) return; 
	if(!rdFrequencyValidation($('#txtFldDlgIncAssAgePayends'),$("#txtFldDlgIncAssEslrate"),$("#selDlgIncAssFreq")))return; 
	if(!rdStartAgeValidate($('#txtFldDlgIncAssAgePaySts'),$('#selDlgIncAssAgeBsOn')))return;
	if(!rdEndAgeValidate($('#txtFldDlgIncAssAgePaySts'),$("#txtFldDlgIncAssAgePayends")))return;*/
	  return true; 
}


function valincassrtTbl(){ 
//	var $lastRow = $("#IncAssRetPlgtbl tbody tr:last");	
	var $RowCount = IncAssRetPlgtbl.rows().count();

	var valid=true;
	/*if($RowCount > 0 ){ 
		$("#IncAssRetPlgtbl tbody tr").each(function(){
			var $lastRow=$(this);
		if(!(validateFocusDhtmlFlds($lastRow.find("td:eq(2)").find('input:eq(0)'), INCASS_CLSFY,SCREEN_RETIREMENT))) {valid=false;return false;}; 
		if(!(validateFocusDhtmlFlds($lastRow.find("td:eq(4)").find('select:eq(0)'), INCASS_FREQ,SCREEN_RETIREMENT))) {valid=false;return false;};
		if(!(validateFocusDhtmlFlds($lastRow.find("td:eq(8)").find('select:eq(0)'), INCASS_AGEBSD,SCREEN_RETIREMENT))){valid=false;return false;};
		if(!(validateFocusDhtmlFlds($lastRow.find("td:eq(9)").find('input:eq(0)'), INCASS_AGESTS,SCREEN_RETIREMENT))){valid=false;return false;};
		 
		});
	} */ 
	return valid;
}


/*Mandatory Fields Tooltip*/ 
$("#txtFldDlgIncAssClsfy,#selDlgIncAssFreq," + 
		"#selDlgIncAssAgeBsOn,#txtFldDlgIncAssAgePaySts").on("change",function(){
	if(!isEmpty($(this).val())){
	$(this).removeClass("mandatoryFillFlds");
	$(this).qtip('disable');
	$(this).qtip('destroy',true);
	}
});
  


/* Filling Model Fields*/
function incassrtfilldlgval($lastRow){
//	  $('#IncAssRet_Dialog #txtFldDlgIncAssMode').val($lastRow.find("td:eq(0)").find('input:eq(0)').val());//instant save added line
	  $('#IncAssRet_Dialog #txtFldDlgIncAssId').val($lastRow.find("td:eq(0)").find('input:eq(1)').val());
	  $('#IncAssRet_Dialog #txtFldDlgIncAssRefId').val($lastRow.find("td:eq(0)").find('input:eq(2)').val());
	 // $('#IncAssRet_Dialog #txtFldDlgIncAssClsfy').val($lastRow.find("td:eq(3)").find('input:eq(0)').val());
	  $('#IncAssRet_Dialog #txtFldDlgIncAssClsfy').val($lastRow.find("td:eq(3)").find('select:eq(0)').val());
	  $('#IncAssRet_Dialog #txtFldDlgIncAssDesc').val($lastRow.find("td:eq(2)").find('input:eq(0)').val());
	  $('#IncAssRet_Dialog #selDlgIncAssFreq').val($lastRow.find("td:eq(4)").find('select:eq(0)').val());
	  $('#IncAssRet_Dialog #txtFldDlgIncAssAmtofInc').val($lastRow.find("td:eq(4)").find('input:eq(0)').val());
	  $('#IncAssRet_Dialog #txtFldDlgIncAssEslrate').val($lastRow.find("td:eq(4)").find('input:eq(1)').val());
	  $('#IncAssRet_Dialog #txtFldDlgIncAssRoi').val($lastRow.find("td:eq(4)").find('input:eq(2)').val());
	  $('#IncAssRet_Dialog #selDlgIncAssAgeBsOn').val($lastRow.find("td:eq(5)").find('select:eq(0)').val());
	  $('#IncAssRet_Dialog #txtFldDlgIncAssAgePaySts').val($lastRow.find("td:eq(5)").find('input:eq(0)').val());
	  $('#IncAssRet_Dialog #txtFldDlgIncAssAgePayends').val($lastRow.find("td:eq(5)").find('input:eq(1)').val());
	  $('#IncAssRet_Dialog #txtFldDlgIncAssCrtdBy').val($lastRow.find("td:eq(5)").find('input:eq(2)').val());
	  $('#IncAssRet_Dialog #txtFldDlgIncAssCrtdDate').val($lastRow.find("td:eq(5)").find('input:eq(3)').val());
}

/* Filling Table Fields*/
function incassrtfilldomval($RowId,$row){
	
//	$row.find("td:eq(3)").find('input:eq(0)').val($("#txtFldDlgIncAssClsfy").val()); 
	$row.find("td:eq(3)").find('select:eq(0)').val($("#txtFldDlgIncAssClsfy").val()).attr("disabled",true);//Proposed;
	$row.find("td:eq(2)").find('input:eq(0)').val($("#txtFldDlgIncAssDesc").val());
	$row.find("td:eq(4)").find('select:eq(0)').val($("#selDlgIncAssFreq").val());  
	$row.find("td:eq(4)").find('input:eq(0)').val($("#txtFldDlgIncAssAmtofInc").val()); 
	$row.find("td:eq(4)").find('input:eq(1)').val($("#txtFldDlgIncAssEslrate").val());
	$row.find("td:eq(4)").find('input:eq(2)').val($("#txtFldDlgIncAssRoi").val()); 
	$row.find("td:eq(5)").find('select:eq(0)').val($("#selDlgIncAssAgeBsOn").val());  
	$row.find("td:eq(5)").find('input:eq(0)').val($("#txtFldDlgIncAssAgePaySts").val());  
	$row.find("td:eq(5)").find('input:eq(1)').val($("#txtFldDlgIncAssAgePayends").val());  
	$row.find("td:eq(4)").find('input:eq(3)').val("$" + $("#txtFldDlgIncAssAmtofInc").val() + " " + $("#selDlgIncAssFreq").val() + ", " + $("#txtFldDlgIncAssEslrate").val() + "% Escalation" + $("#txtFldDlgIncAssRoi").val() +"% ROI" ); //Proposed
	$row.find("td:eq(5)").find('input:eq(4)').val("Start @ " + $("#txtFldDlgIncAssAgePaySts").val() + ", " + "End @ " + $("#txtFldDlgIncAssAgePayends").val()); //Proposed
	//	$row.find("input[type=text]").prop("readonly",true);//instant save added line
	//$row.find("select").prop("disabled",true);//instant save added line


}


//instant save added line
$("#IncAssRet_Dialog").find("input,select,textarea").on("change",function(){
	$("#IncAssRet_Dialog").find(".modal-footer").find("button:eq(0)").removeClass("hidden");
});


/*Validations*/
/*Table1*/
$("#selDlgORFreq").on("change",function(){
	if(!rdFrequencyValidation($('#txtFldDlgORAgePayends'),$("#txtFldDlgOREslrate"),$(this)))return; 
}); 

$("#selDlgORAgeBsOn").on("change",function(){
//	loadAgeStartEnd($("#txtFldDlgORAgePaySts"),$("#selDlgORAgeBsOn"));
});
$("#txtFldDlgORAgePaySts").on("change",function(){
//	loadAgeEnd($(this),$("#txtFldDlgORAgePayends"));
});

$("#txtFldDlgORAgePaySts,#selDlgORAgeBsOn").on("change",function(){
	
	if(!rdStartAgeValidate($('#txtFldDlgORAgePaySts'),$('#selDlgORAgeBsOn')))return;
});
$("#txtFldDlgORAgePayends").on("change",function(){
	if(!rdEndAgeValidate($('#txtFldDlgORAgePaySts'),$(this)))return;
});

/*Table2*/
$("#selDlgIRFreq").on("change",function(){
	if(!rdFrequencyValidation($('#txtFldDlgIRAgePayends'),$("#txtFldDlgIREslrate"),$(this)))return; 
}); 

$("#txtFldDlgIRAgePaySts,#selDlgIRAgeBsOn").on("change",function(){
	if(!rdStartAgeValidate($('#txtFldDlgIRAgePaySts'),$('#selDlgIRAgeBsOn')))return;
});
$("#txtFldDlgIRAgePayends").on("change",function(){
	if(!rdEndAgeValidate($('#txtFldDlgIRAgePaySts'),$(this)))return;
});
 
/*Table3*/
$("#selDlgIncAssFreq").on("change",function(){
	if(!rdFrequencyValidation($('#txtFldDlgIncAssAgePayends'),$("#txtFldDlgIncAssEslrate"),$(this)))return; 
}); 

$("#txtFldDlgIncAssAgePaySts,#selDlgIncAssAgeBsOn").on("change",function(){
	if(!rdStartAgeValidate($('#txtFldDlgIncAssAgePaySts'),$('#selDlgIncAssAgeBsOn')))return;
});
$("#txtFldDlgIncAssAgePayends").on("change",function(){
	if(!rdEndAgeValidate($('#txtFldDlgIncAssAgePaySts'),$(this)))return;
});


$("#cashvalRetAge").on("change",function(){
	if(!rdStartAgeValidate($('#cashvalRetAge'),$('#retAgeBasedon')))return;
});
function reverseRetSync($row){
//	20/10/2018 Temp - Commentted all calling part
	//Retirement Data
	var $rowref=$row.attr("rowrefid");
		if(isValidObject($rowref)){ 
	
	var syncOn=$rowref.substring(0,3);
	var owner=$row.find("td:eq(8)").find('select:eq(0)').val();
	var ownership;
	if(owner == "SELF"){
		ownership="Self";
	}else if(owner == "SPOUSE"){
		ownership="Spouse";
	}else{
		ownership="";
	}
	var amountofincome=$row.find("td:eq(5)").find('input:eq(0)').val();  
	var description=$row.find("td:eq(3)").find('input:eq(0)').val();  
	
	if(syncOn == "INV"){
		$("#fnaInvestmentTbl tbody").find("tr[rowrefid="+$rowref+"]").each(function(){ 
			applyToastrAlert("Retirement data will be reflected back to Investment Screen !"); 
			  $(this).find("td:eq(9)").find('input:eq(0)').val(amountofincome);
			  $(this).find("td:eq(2)").find('select:eq(0)').val(ownership); 
			  //Cpf table change 
//		 			newRowInvestCpfEditTbl( $(this));
		 		
		});
	}
	
	
	if(syncOn == "CAB"){
		$("#cashOfBanksTable tbody").find("tr[rowrefid="+$rowref+"]").each(function(){ 
			applyToastrAlert("Retirement data will be reflected back to Cash At Bank Screen !"); 
			  if(ownership == "Self"){	
				  $(this).find("td:eq(2)").find('option:eq(1)').prop("selected","selected");
			  }else if(ownership == "Spouse"){	
				  $(this).find("td:eq(2)").find('option:eq(2)').prop("selected","selected");
			  }else{	
				  $(this).find("td:eq(2)").find('option:eq(0)').prop("selected","selected");
			  }
			  $(this).find("td:eq(9)").find('input:eq(0)').val(amountofincome);
			  $(this).find("td:eq(5)").find('select:eq(0)').val(ownership); 
		});
	}
	
	
	
	
	if(syncOn == "PRO"){
		$("#fnaPropOwnTblByCPF tbody").find("tr[rowrefid="+$rowref+"]").each(function(){ 
			applyToastrAlert("Retirement data will be reflected back to Property Ownership Screen !");  
			  $(this).find("td:eq(2)").find('input:eq(0)').val(description);
			  $(this).find("td:eq(4)").find('select:eq(0)').val(ownership); 
			  $(this).find("td:eq(17)").find('input:eq(0)').val(amountofincome);
		});
	}
	
	 
		}
		
		//Life Insurance reverse sync
		if(isValidObject($("#sellipCoveragetype").attr("rowrefid"))){
	    
		var covergerowref=$("#sellipCoveragetype").attr("rowrefid").length;
		if(covergerowref >0){
			applyToastrAlert("Retirement data will be reflected back to Life Insurance Screen !");
			$("#lipPlanname").val(description);
			$("#lipSa").val(amountofincome);
			$("#lipOwner").val(ownership);
			
			//Cpf table change
			 var $rowref=$("#lipPremiumsrc").attr("rowrefid").length;
			 if($rowref > 0){	
				 SyncLifeToCpfAddDed($("#lipPremiumsrc").val());
		 	 }	
		}
		}
		
		
		
} 

/*Auto Complete*/
$("#txtFldDlgORAgePaySts").on("change",function(){
	
	var array=[];
	var selfAge=isEmpty($("#txtFldDlgORAgePaySts").val()) ? "" : Number($("#txtFldDlgORAgePaySts").val());
	var selfProjage=isEmpty($("#retSelfProjage").val()) ? "" : Number($("#retSelfProjage").val());
	
	if (selfAge <= selfProjage) {
		   var option = ''; 
		   array=[];
		  for(var i= selfAge; i<=selfProjage;i++)
			  { 
				  /*option = '<option value="' + i + '">' +i+  '</option>'; */
				  array.push(""+i+"");
			  }  
	 } 
	 
	$("#txtFldDlgORAgePayends").val("");
//	 var autocomplete = $('#txtFldDlgORAgePayends').typeahead(); 
//	autocomplete.data('typeahead').source = array;

}); 


$("#txtFldDlgIRAgePaySts").on("change",function(){
	
	var array=[];
	var selfIRAge=isEmpty($("#txtFldDlgIRAgePaySts").val()) ? "" : Number($("#txtFldDlgIRAgePaySts").val());	
	var selfProjage=isEmpty($("#retSelfProjage").val()) ? "" : Number($("#retSelfProjage").val());
	
	if (selfIRAge <= selfProjage) {
		   var option = ''; 
		   array=[];
		  for(var i= selfIRAge; i<=selfProjage;i++)
			  { 
				 
				  array.push(""+i+"");
			  }  
	 } 
	 
	
	$("#txtFldDlgIRAgePayends").val("");
//	 var autocomplete = $('#txtFldDlgIRAgePayends').typeahead(); 
//	autocomplete.data('typeahead').source = array;

}); 

$("#txtFldDlgIncAssAgePaySts").on("change",function(){
	
	var array=[];
	var selfIncAssAge=isEmpty($("#txtFldDlgIncAssAgePaySts").val()) ? "" : Number($("#txtFldDlgIncAssAgePaySts").val());		
	var selfProjage=isEmpty($("#retSelfProjage").val()) ? "" : Number($("#retSelfProjage").val());
	
	if (selfIncAssAge <= selfProjage) {
		   var option = ''; 
		   array=[];
		  for(var i= selfIncAssAge; i<=selfProjage;i++)
			  { 
				
				  array.push(""+i+"");
			  }  
	 } 
	 

	$("#txtFldDlgIncAssAgePayends").val("");
//	 var autocomplete = $('#txtFldDlgIncAssAgePayends').typeahead(); 
//	autocomplete.data('typeahead').source = array;

}); 


/**/
function syncSRSBalanceRet(){
	
	var srspayoutage = $("#retFromSrsAge").val();
	var srspayoutamount = $("#retFromSrsAmount").val();
	
	var rowref = "SRSTRANSFER";
	
	if(!isEmpty(srspayoutage) && !isEmpty(srspayoutamount) && srspayoutage >0 && srspayoutamount > 0){
		var $tblAfterRETRow=null;
		 
	 	var rowexist = chkRPIncAssetRowExist(rowref);
		
		if(rowexist == null){
			getincassrtRows(null,"N");
			$tblAfterRETRow =  $("#IncAssRetPlgtbl tbody tr:last"); 
		}else{
			$tblAfterRETRow = rowexist;
		}
		$tblAfterRETRow.find("td:eq(0)").find('input:eq(2)').addClass("rowrefid").val(rowref);
		
		
			
		if(isEmpty($tblAfterRETRow.find("td:eq(0)").find('input:eq(1)').val())){
			$tblAfterRETRow.find("td:eq(0)").find('input:eq(1)').val(makeid(17));
		}
	 
	 	$tblAfterRETRow.find("td:eq(2)").find('input:eq(0)').val("SRS").prop("disabled",true);
		
		$tblAfterRETRow.find("td:eq(3)").find('input:eq(0)').val("EXCESS FUND FROM SRS A/C").prop("disabled",true);
		 
		selectNullvalChk($tblAfterRETRow.find("td:eq(4)"),"SINGLE");//.prop("disabled",true);;
		$tblAfterRETRow.find("td:eq(4)").find("select:eq(0)").prop("disabled",true);
		
		$tblAfterRETRow.find("td:eq(5)").find('input:eq(0)').val(srspayoutamount).prop("disabled",true);; 	
		
		$tblAfterRETRow.find("td:eq(6)").find('input:eq(0)').val(Number("0")).prop("disabled",true);
			
		$tblAfterRETRow.find("td:eq(7)").find('input:eq(0)').val(Number("0")).prop("disabled",true);
	  
		selectNullvalChk($tblAfterRETRow.find("td:eq(8)"),"SELF");//Need to check
		$tblAfterRETRow.find("td:eq(8)").find("select:eq(0)").prop("disabled",true);
	 
		$tblAfterRETRow.find("td:eq(9)").find('input:eq(0)').val(srspayoutage).prop("disabled",true);;
	 
		$tblAfterRETRow.find("td:eq(10)").find('input:eq(0)').val(srspayoutage).prop("disabled",true);;
	}else{
		 
	 	var rowexist = chkRPIncAssetRowExist(rowref);
	 	if(rowexist != null){
	 		console.log("should delete SRS")
	 	}
	 	
	}
}


function syncCPFLIFEBalanceRet(){
	
	console.log("inside syncCPFLIFEBalanceRet")
	
	var intndretrage = $("#retSelfCoordinateage").val();
	var lifeexpctage = $("#retSelfProjage").val();
	var cpflifepayout = $("input[name=txtFldCpfLifePayoutInc]").val();
	
	console.log(intndretrage +","+lifeexpctage +"c,"+cpflifepayout)
	
	intndretrage = isEmpty(intndretrage) ? "65" :intndretrage;
	lifeexpctage = isEmpty(lifeexpctage) ? "80" :lifeexpctage;
	
	var rowref = "CPFLIFE";
	
	if(!isEmpty(intndretrage) && !isEmpty(lifeexpctage) && !isEmpty(cpflifepayout) ){
		var $tblAfterRETRow=null;
		 
	 	var rowexist = chkRPIncAssetRowExist(rowref);
		
		if(rowexist == null){
			getincassrtRows(null,"N");
			$tblAfterRETRow =  $("#IncAssRetPlgtbl tbody tr:last"); 
		}else{
			$tblAfterRETRow = rowexist;
		}
		$tblAfterRETRow.find("td:eq(0)").find('input:eq(2)').addClass("rowrefid").val(rowref);
		
		
			
		if(isEmpty($tblAfterRETRow.find("td:eq(0)").find('input:eq(1)').val())){
			$tblAfterRETRow.find("td:eq(0)").find('input:eq(1)').val(makeid(17));
		}
	 
	 	$tblAfterRETRow.find("td:eq(2)").find('input:eq(0)').val("CPF LIFE").prop("disabled",true);
		
		$tblAfterRETRow.find("td:eq(3)").find('input:eq(0)').val("").prop("disabled",true);
		 
		selectNullvalChk($tblAfterRETRow.find("td:eq(4)"),"REGULAR");//.prop("disabled",true);;
		$tblAfterRETRow.find("td:eq(4)").find("select:eq(0)").prop("disabled",true);
		
		$tblAfterRETRow.find("td:eq(5)").find('input:eq(0)').val(cpflifepayout).prop("disabled",true);; 	
		
		$tblAfterRETRow.find("td:eq(6)").find('input:eq(0)').val(Number("0")).prop("disabled",true);
			
		$tblAfterRETRow.find("td:eq(7)").find('input:eq(0)').val(Number("0")).prop("disabled",true);
	  
		selectNullvalChk($tblAfterRETRow.find("td:eq(8)"),"SELF");//Need to check
		$tblAfterRETRow.find("td:eq(8)").find("select:eq(0)").prop("disabled",true);
	 
		$tblAfterRETRow.find("td:eq(9)").find('input:eq(0)').val(intndretrage).prop("disabled",true);;
	 
		$tblAfterRETRow.find("td:eq(10)").find('input:eq(0)').val(lifeexpctage).prop("disabled",true);;
	}else{
		 
		
	 	var rowexist = chkRPIncAssetRowExist(rowref);
	 	if(rowexist != null){
	 		console.log("should delete SRS");
	 		
	 	}
	 	
	}
}




