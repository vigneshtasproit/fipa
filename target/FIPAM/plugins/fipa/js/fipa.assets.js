/**
 * Personal Assets
 */  
/*$("#busassetCancelbtn").on("click",function(){
	$("#txtFldDlgBusnAcctHolder,#txtFldDlgBusnNameOfAsset,#txtFldDlgBusnTypeOfAsset").removeClass("mandatoryFillFlds");
	$("#txtFldDlgBusnAcctHolder,#txtFldDlgBusnNameOfAsset,#txtFldDlgBusnTypeOfAsset").qtip('disable');
	$("#txtFldDlgBusnAcctHolder,#txtFldDlgBusnNameOfAsset,#txtFldDlgBusnTypeOfAsset").qtip('destroy',true);
	busnastRdlyflds(INS_MODE);  
   	getBuisAsstRows(null); 
	$('#busnAssets_Dialog').modal('hide'); 
});*/
/*$("#perAssetsCancelbtn").on("click",function(){
	$("#txtFldDlgPerAcctHolder,#txtFldDlgPerNameOfAsset,#txtFldDlgPerTypeOfAsset").removeClass("mandatoryFillFlds");
	$("#txtFldDlgPerAcctHolder,#txtFldDlgPerNameOfAsset,#txtFldDlgPerTypeOfAsset").qtip('disable');
	$("#txtFldDlgPerAcctHolder,#txtFldDlgPerNameOfAsset,#txtFldDlgPerTypeOfAsset").qtip('destroy',true);
 	perastRdlyflds(INS_MODE);  
   	getPerAssetRows(null); 
	$('#perAssets_Dialog').modal('hide'); 
});*/
var CA_SELF_FX_DEPOSIT={amtid:"casstSelfSavingfd",prcntid :"casstRpSavingfd",msg:"Savings and Fx deposits",retkey:"CA_SELF_FX_DEPOSIT"},
	CA_SELF_REG_SAVINGS="Regular Savings for Retirement",
	CA_SELF_SRS="Cash equivalent & others",
	CA_SELF_CASH_EQU="SRS a/c"; 

$("a#otherliableicon").on("click",function(){

	calcTotalLiabilitiesLoan();  
	if($("#othasstLoansPers").hasClass("blinking")){
		$("#othasstLoansPers").removeClass("blinking");
	} 
	
	if($("#PersARow").hasClass("blinking")){
		$("#PersARow").removeClass("blinking");
	} 
	

	if($("#BusiARow").hasClass("blinking")){
		$("#BusiARow").removeClass("blinking");
	} 
	
	/*$("#cashasstmain_li").click();	
	$("#cashotherasset_li").click();*/	
	$("#AssetsTab").attr('checked', true).trigger('click');
	 $("#headingTwo").trigger('click');
	$('#othrassets').focus();
//	$($.fn.dataTable.tables(true)).DataTable().columns.adjust().draw(false);	
	$("#othasstLoansPers").addClass("blinking"); 
	$("#PersARow").addClass("blinking"); 
	$("#BusiARow").addClass("blinking"); 
	
	if($("#othasstLoansPers").hasClass("blinking")){
		setTimeout(function() { 
		},1500);
	} 
	
	if($("#PersARow").hasClass("blinking")){
		setTimeout(function() { 
		},1500);
	} 
	if($("#BusiARow").hasClass("blinking")){
		setTimeout(function() { 
		},1500);
	} 
});


function calcTotalLiabilitiesLoan(){
	var sumslfloan=0,sumspsloan=0;
	var sumjointloan=0;
	
	var $fnaPersonalAssets = personalAssetTbl.rows().count();
	var $fnaBusinessAssets = businessAssetTbl.rows().count(); 
	var persowner,busnowner;
	
	var loanOtherAssts=(Number($("#othasstLoansPers").val())+Number($("#othasstLoansClub").val())+Number($("#othasstLoansBusi").val())+Number($("#othasstLoansOth").val()));
	
	if( loanOtherAssts > 0){
//		sumslfloan+=loanOtherAssts;
//		sumspsloan+=loanOtherAssts;
		
		sumjointloan+=loanOtherAssts;
	}
	
	 if($fnaPersonalAssets >0){
		 $("#personalAssetTbl tbody tr").each(function(i,row){
			 
			 var mode_r = $(this).find("td:first").find('input:eq(0)').val();
			 
			 persowner=$(this).find("td:eq(2)").find('select:eq(0)').val();
			 var loanval	=Number($(this).find("td:eq(7)").find("input:eq(0)").val());  
			 
			 if(mode_r != "D"){
				 
				 if(!isEmpty(loanval)){
					 if(persowner == "Self"){
						 sumslfloan+=loanval;
					 }
					 
					 if(persowner == "Spouse"){
						 sumspsloan+=loanval;
					 }
				 }
				 
			 }
			 
		 });
	 }
	 if($fnaBusinessAssets >0){
		 $("#businessAssetTbl tbody tr").each(function(i,row){
			 var mode_r = $(this).find("td:first").find('input:eq(0)').val();
			 
			 busnowner=$(this).find("td:eq(2)").find('select:eq(0)').val();
			 var loanval	=Number($(this).find("td:eq(7)").find("input:eq(0)").val()); 
			 
			 if(mode_r != "D"){
				 
				 if(!isEmpty(loanval)){
					 if(busnowner == "Self"){
						 sumslfloan+=loanval;
					 }
					 
					 if(busnowner == "Spouse"){
						 sumspsloan+=loanval;
					 }
				 }
				 
			 }
			 
		 });
	 }
	 
	 if(!( sumslfloan==0 && sumspsloan==0 )){
		 $("#liabSelfOthers").val(roundNumber(sumslfloan));
		 $("#liabSpsOthers").val(roundNumber(sumspsloan));
		 $("#liabFamOthers").val(roundNumber(sumjointloan));
		 
			
			 if(sumslfloan >0 || sumspsloan>0){
				 applyToastrAlert("Other Assets Loan values are calculated and Reflected in Other Liabilities Screen");
			 } 
	 }
	 
	 
	 if(sumslfloan==0){$("#liabSelfOthers").val("0");}
	 if(sumspsloan==0){$("#liabSpsOthers").val("0");}
	 if(sumjointloan==0){$("#liabFamOthers").val("0");}  
	
	 /*Total liabilites Calculation part*/
	 calcSum(this,'SUMOF_FINLIAB_SELF');
	 calcSum(this,'SUMOF_FINLIAB_SPS');
	 calcSum(this,'SUMOF_FINLIAB_FAM');
	 
}
 
$("#othasstLoansPers,#othasstLoansClub,#othasstLoansBusi,#othasstLoansOth").on("change",function(){
	calcTotalLiabilitiesLoan();
});


/*Datatable Initialisation*/
//var personalAssetTbl = $('#personalAssetTbl').DataTable( {
//   destroy: true,
//   responsive: false,         
//   ordering: false,
//   searching: false,     
//   scrollY:  "40vh",
//   scrollX: true,
//   scroller: false,
//   scrollCollapse:false,
//   paging:false, 
//   filter:false,   
//   columnDefs: [], 
//   dom: '<<"top" ip>flt>',  
//   columnDefs: [  { width: '20px', targets: [0,1]},
//  	             {"className": "dt-head-center text-center",targets: [0,1,2,3,4,5,6,7,8,9,10,11,12],"orderable": false,"searchable": false}],		 
//		 fnDrawCallback: function(oSettings) {
//			 if (oSettings._iDisplayLength > oSettings.fnRecordsDisplay()) { 
//				 
//			    } 
//   
//		 }, 
//}).draw();
	


/*Add Row Click */
$("#PersARow").on("click",function(){
	//if(!valperastTbl())return; 
			perastClearFlds();
			$("#txtFldDlgPerBusiPersId").val(makeid(17))
			showFIPAModel('perAssets_Dialog','Personal Assets Details');   
//			$("#perAssets_Dialog").find("input[id=txtFldDlgPerBusiPersMode]").val("I");//instant save added line
			$('#perAssets_Dialog').on('shown.bs.modal', function () {
//				$("#perAssets_Dialog").find(".modal-footer").find("button:eq(0)").text("Add");
				$("#perAssets_Dialog").find("select[id=txtFldDlgPerAcctHolder]").focus(); 
				$("#perAssets_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
						if(!validateperastDetails())return;
					   	perastRdlyflds(INS_MODE);  
					   	getPerAssetRows(null); 
						$('#perAssets_Dialog').modal('hide'); 
				  });  
			});
			
			
});



/*Populate Data */
function getPerAssetRows(dataset){ 

var cell0 = '<span></span>'+
'<input type="hidden" name="txtFldperastMode" readonly="true" value="'+INS_MODE+'" class="fipaMode"/><input type="hidden" name="txtFldPerBusiPersId_P">';

var cell1 = '<div class="checkbox checkbox-primary text-center"><input type="checkbox" name="radperastSelect"/><label>&nbsp;</label></div>'; 


var cell2 = '<select name="txtFldPerAcctHolder" class="form-control editable"></select>';
 
var cell3 = '<input type="text" name="txtFldPerTypeOfAsset" class="form-control editable"  maxlength="60" onmouseover="fipaTooltip(this);" maxlength="300"/>'; 

var cell4 = '<input type="text" name="txtFldPerNameOfAsset" class="form-control editable"  maxlength="60"  onmouseover="fipaTooltip(this);" maxlength="300"/>';

var cell5 = '<input type="text" name="txtFldPerPurInvValue" class="form-control editable"  onmouseover="fipaTooltip(this);" maxlength="300"/>';

var cell6 = '<input type="text" name="txtFldPerCurrValue" class="form-control editable"   onmouseover="fipaTooltip(this);" maxlength="300"/>';

var cell7 = '<input type="text" name="txtFldPerOsValue" class="form-control editable"   onmouseover="fipaTooltip(this);" maxlength="300"/>';

var cell8 = '<input type="text" name="txtFldPerEstApprValue" class="form-control editable"   onmouseover="fipaTooltip(this);" maxlength="300"/>';

var cell9 = '<input type="text" name="txtFldPerYrs2keep" class="form-control editable"   onmouseover="fipaTooltip(this);" maxlength="300"/>';

var cell10 = '<input type="text" name="txtFldPerChildEdnPrcnt" class="form-control editable"   onmouseover="fipaTooltip(this);" maxlength="300"/>';

var cell11 = '<input type="text" name="txtFldPerRetPlanPrcnt" class="form-control editable"   onmouseover="fipaTooltip(this);" maxlength="300"/>';

var cell12 = '<input type="text" name="txtFldPerRemarks" class="form-control editable"   maxlength="300"  onmouseover="fipaTooltip(this);" maxlength="300"/>'+
'<input type="hidden" name="txtFldPerCrtdBy"/><input type="hidden" name="txtFldPerCrtdDate"/>';
	
	
personalAssetTbl.row.add( [cell0,cell1,cell2,cell3,cell4,cell5,cell6,cell7,cell8,cell9,cell10,cell11,cell12] ).draw( false );

var $lastRow = $("#personalAssetTbl tbody tr:last");
var rowCount = $('#personalAssetTbl tbody tr:visible').length;	
rowCount =  (rowCount == 0) ? $('#personalAssetTbl tbody tr').length : rowCount;

$lastRow.find("td:first").find('span').text(rowCount); 

$lastRow.find("td:eq(1)").find("input:first").click(function(){
	selectSingleRow(this);
})

$lastRow.find("td:eq(1)").find("input:first").attr('id',"radperast"+$lastRow.index())
.parent().find('label').attr('for',"radperast"+$lastRow.index());

$lastRow.find("td:eq(0)").find('input:eq(1)').val($("#txtFldDlgPerBusiPersId").val());
var accholder = $("#txtFldDlgPerAcctHolder > option").clone();
$lastRow.find("td:eq(2)").find('select:eq(0)').append(accholder);
$lastRow.find("td:eq(2)").find('select:eq(0)').val($("#txtFldDlgPerAcctHolder").val());
$lastRow.find("td:eq(2)").find('select:eq(0)').on("change",function(){
	calcTotalLiabilitiesLoan();	
});

 
$lastRow.find("td:eq(3)").find('input:eq(0)').val($("#txtFldDlgPerTypeOfAsset").val());

$lastRow.find("td:eq(4)").find('input:eq(0)').val($("#txtFldDlgPerNameOfAsset").val());

$lastRow.find("td:eq(5)").find('input:eq(0)').val($("#txtFldDlgPerPurInvValue").val());
$lastRow.find("td:eq(5)").find('input:eq(0)').addClass("applyEvntUsd");


$lastRow.find("td:eq(6)").find('input:eq(0)').val($("#txtFldDlgPerCurrValue").val());
$lastRow.find("td:eq(6)").find('input:eq(0)').addClass("applyEvntUsd");


$lastRow.find("td:eq(7)").find('input:eq(0)').val($("#txtFldDlgPerOsValue").val());
$lastRow.find("td:eq(7)").find('input:eq(0)').addClass("applyEvntUsd");
$lastRow.find("td:eq(7)").find('input:eq(0)').on("change",function(){
	calcTotalLiabilitiesLoan();	
});

$lastRow.find("td:eq(8)").find('input:eq(0)').val($("#txtFldDlgPerEstApprValue").val());
$lastRow.find("td:eq(8)").find('input:eq(0)').addClass("applyEvntUsd");


$lastRow.find("td:eq(9)").find('input:eq(0)').val($("#txtFldDlgPerYrs2keep").val());
$lastRow.find("td:eq(9)").find('input:eq(0)').addClass("applyEvntYrs");



$lastRow.find("td:eq(10)").find('input:eq(0)').val($("#txtFldDlgPerChildEdnPrcnt").val());
$lastRow.find("td:eq(10)").find('input:eq(0)').addClass("applyEvntpCent"); 


 
$lastRow.find("td:eq(11)").find('input:eq(0)').val($("#txtFldDlgPerRetPlanPrcnt").val());
$lastRow.find("td:eq(11)").find('input:eq(0)').addClass("applyEvntpCent"); 


$lastRow.find("td:eq(12)").find('input:eq(0)').val($("#txtFldDlgPerRemarks").val());


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
	crudicons(this,'personalAssetTbl','SelpersonalAsset','PersERow','PersDRow');
			
});
//DHTML CRUD ICONS

$lastRow.find("td:eq(1)").find("input:first").click(function(){
	selectSingleRow(this);
//	DHTML CRUD ICONS
	crudicons(this,'personalAssetTbl','SelpersonalAsset','PersERow','PersDRow');
});


if(dataset != null){
	rowCount = $('#personalAssetTbl tbody tr').length;	
	$lastRow.find("td:first").find('span').text(rowCount);
	
			if($("#hTxtFldFnaReviewFlag").val() == "U"  || $("#hTxtFldFnaReviewFlag").val() == ""){ 
					$lastRow.find("td:eq(0)").find('input:eq(0)').val(col);
			}
			
	var infoDetsArr = new Array();
	
	for(var data in dataset){
		var col = dataset[data];
		
		switch(data){
		
		case "txtFldPerBusiPersId": 
			$lastRow.find("td:eq(0)").find('input:eq(1)').val(col); 
			break;
			
		case "txtFldPerAcctHolder": 
			selectNullvalChk($lastRow.find("td:eq(2)"),col);
			break;
			
		case "txtFldPerTypeOfAsset": 
			var value=(isEmpty(col)? Number("0")  : col);
			$lastRow.find("td:eq(3)").find('input:eq(0)').val(value); 
			break;
		 
		case "txtFldPerNameOfAsset": 
			$lastRow.find("td:eq(4)").find('input:eq(0)').val(col); 
			break;
		 
		case "txtFldPerPurInvValue": 
			$lastRow.find("td:eq(5)").find('input:eq(0)').val(col); 
			break;
			
		case "txtFldPerCurrValue": 
			$lastRow.find("td:eq(6)").find('input:eq(0)').val(col); 			
			break;
		
		case "txtFldPerOsValue": 
			$lastRow.find("td:eq(7)").find('input:eq(0)').val(col); 
			break;
		
		case "txtFldPerEstApprValue": 
			$lastRow.find("td:eq(8)").find('input:eq(0)').val(col); 
			break;
			
		case "txtFldPerYrs2keep":
			$lastRow.find("td:eq(9)").find('input:eq(0)').val(col); 
			break;
			
		case "txtFldPerChildEdnPrcnt":
			$lastRow.find("td:eq(10)").find('input:eq(0)').val(col); 
			break;
			
		case "txtFldPerRetPlanPrcnt":
			$lastRow.find("td:eq(11)").find('input:eq(0)').val(col); 
			break;
				
		case "txtFldPerRemarks":
			$lastRow.find("td:eq(12)").find('input:eq(0)').val(col); 
			break;
		
		
		case "txtFldPerCrtdBy": 
			$lastRow.find("td:eq(16)").find('input:eq(1)').val(col);
			infoDetsArr.push(col);				
			break;
			
		case "txtFldPerCrtdDate":
			$lastRow.find("td:eq(16)").find('input:eq(2)').val(col);
			infoDetsArr.push(col);
			break;
			
		case "txtFldPerModBy":
			infoDetsArr.push(col);
			break;
			
		case "txtFldPerModDate":
			infoDetsArr.push(col);
			break;	
		}			 
		 
	}
	}
 
if(dataset == null){
calcTotalLiabilitiesLoan();	
crudicons(null,'personalAssetTbl','SelpersonalAsset','PersERow','PersDRow');
//instantPersAssetSave($lastRow,INS_MODE);	//instant save added line
}
//$lastRow.find("input[type=text]").prop("readonly",true);//instant save added line
//$lastRow.find("select").prop("disabled",true);//instant save added line
}

//DHTML SELECT ALL
function SelAllpersonalAsset(obj){
	
	if($(obj).is(":checked")){
		
		$('#personalAssetTbl tbody tr').find("td:eq(1)").find("input[type=checkbox]").prop("checked",true);
		
		$("#PersDRow").attr("disabled",false);
		$('#personalAssetTbl tbody tr').addClass("selected");
		
		var $rowCount = $('#personalAssetTbl tbody tr').length;
		
		if($rowCount == 0){
			$(obj).prop("checked",false);
			/*$("#PersERow").attr("disabled",true);
			$("#PersDRow").attr("disabled",true);*/
		}else if($rowCount == 1){
			$("#PersERow").attr("disabled",false);
			$("#PersDRow").attr("disabled",false);
		}else if($rowCount > 1){
		/*	$("#PersERow").attr("disabled",true);*/
			$("#PersDRow").attr("disabled",false);
		}
		
	}else{
		
		$('#personalAssetTbl tbody tr').find("td:eq(1)").find("input[type=checkbox]").prop("checked",false);
		
		$('#personalAssetTbl tbody tr').removeClass("selected");
		
		/*$("#PersERow").attr("disabled",true);
		$("#PersDRow").attr("disabled",true);*/
		
	}
}

/*Edit Row Click */
$("#PersERow").on("click",function(){
	PersVRow(); 
});


/*View Row Click */
 function PersVRow(){
	var isOneRowSelected=0;
	var $rowCount = $('#personalAssetTbl tbody tr').length;	
	var $lastRow = $("#personalAssetTbl tbody tr:last");	
	
	if($rowCount<1){
		applyToastrAlert("Insert rows before edit/view");
		return;
	} 
	
	
/*	$("#personalAssetTbl tbody tr").each(function(){
		var $row = $(this);   
		$row.removeClass('selected');  
		$(this).removeAttr("style"); 
		$row.find("td").removeAttr("style");
	});
	*/
	
	
	$("#personalAssetTbl tbody").find('input[name="radperastSelect"]').each(function(){ //Checkbox selection
		var $curElm=$(this);
		if($curElm.is(":checked")){ 
			isOneRowSelected++;
		}
	});
	
	
	if(isOneRowSelected > 1){ 
		applyToastrAlert("More than one rows selected.Select one row only");
		return;
	}
	
	
	$("#personalAssetTbl tbody").find('input[name="radperastSelect"]').each(function(){ //Checkbox selection
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
	 
				 	perastRdlyflds($mode);
					perastfilldlgval($row); 
					showFIPAModel('perAssets_Dialog','Personal Assets Details');
					$("#perAssets_Dialog").find(".modal-footer").find("button:eq(0)").removeClass("hidden");//instant save added line
					$('#perAssets_Dialog').on('shown.bs.modal', function () {
//						$row.find("input[type=text]").prop("readonly",true);//instant save added line
//						$row.find("select").prop("disabled",true);//instant save added line
//						$("#perAssets_Dialog").find(".modal-footer").find("button:eq(0)").text("Edit");
						$("#perAssets_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
							 if(!validateperastDetails())return; 
					     		if(!isEmpty($RowId) && !($RowId==undefined)){  
					     			perastfilldomval($RowId,$row); 
					     		}  
					     		calcTotalLiabilitiesLoan();
//					     		instantPersAssetSave($row,UPD_MODE); //instant save added line
								$('#perAssets_Dialog').modal('hide'); 
								perastClearFlds();
								crudicons(null,'personalAssetTbl','SelpersonalAsset','PersERow','PersDRow');
							
						});
						$("#perAssets_Dialog").find(".modal-footer").find("button:eq(1)").on("click",function(){
							crudicons(null,'personalAssetTbl','SelpersonalAsset','PersERow','PersDRow');
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
$("#PersDRow").on("click",function(){ 
 	datatableDeleteRow('personalAssetTbl',personalAssetTbl,'SelpersonalAsset','PersERow','PersDRow');   
/*//	DHTML CRUD ICONS
	var rc = personalAssetTbl.row().count();
	if(rc ==0){
		$("#SelpersonalAsset").prop("checked",false);
		crudicons(this,'personalAssetTbl','SelpersonalAsset','PersERow','PersDRow');
	}
//	DHTML CRUD ICONS
*/});

/*Clear Fields */
function perastClearFlds(){
	$("#perAssets_Dialog").find("input[type=text]").val("");
	$("#perAssets_Dialog").find("textarea").val("");
	$("#perAssets_Dialog").find("select").val("");
}

/*Disabled/Readonly Fields */
function perastRdlyflds(mode){ 
	 if(mode == QRY_MODE ){
			$("#perAssets_Dialog :input").prop("disabled", true); 
	 } else if((mode == INS_MODE) || (mode == UPD_MODE) ){
			$("#perAssets_Dialog :input").prop("disabled", false);
	 }
}

/*Validation */
function validateperastDetails(){
	 
	 
	/*la*/
	
	  return true; 
}

function valperastTbl(){   
	var $RowCount = personalAssetTbl.rows().count();

	var valid=true;
/*	if($RowCount > 0 ){ 
		$("#personalAssetTbl tbody tr").each(function(){
			var $lastRow=$(this);
			
		if(!(validateFocusDhtmlFlds($lastRow.find("td:eq(2)").find('select:eq(0)'), PERACCHOL,SCREEN_ASSET))){valid=false;return false;}; 
		if(!(validateFocusDhtmlFlds($lastRow.find("td:eq(3)").find('input:eq(0)'), PERACCTP,SCREEN_ASSET))){valid=false;return false;}; 
		if(!(validateFocusDhtmlFlds($lastRow.find("td:eq(4)").find('input:eq(0)'), PERASTNAME,SCREEN_ASSET))){valid=false;return false;};  
	 
		});
	} */ 

	return valid;
}

/*Mandatory Fields Tooltip*/ 
$("#txtFldDlgPerAcctHolder,#txtFldDlgPerNameOfAsset,#txtFldDlgPerTypeOfAsset").on("change",function(){
	if(!isEmpty($(this).val())){
	$(this).removeClass("mandatoryFillFlds");
	$(this).qtip('disable');
	$(this).qtip('destroy',true);
	}
});
 


/* Filling Model Fields*/
function perastfilldlgval($lastRow){
//	  $('#perAssets_Dialog #txtFldDlgPerBusiPersMode').val($lastRow.find("td:eq(0)").find('input:eq(0)').val());//instant save added line
	  $('#perAssets_Dialog #txtFldDlgPerBusiPersId').val($lastRow.find("td:eq(0)").find('input:eq(1)').val());
	  $('#perAssets_Dialog #txtFldDlgPerAcctHolder').val($lastRow.find("td:eq(2)").find('select:eq(0)').val());
	  $('#perAssets_Dialog #txtFldDlgPerTypeOfAsset').val($lastRow.find("td:eq(3)").find('input:eq(0)').val());
	  $('#perAssets_Dialog #txtFldDlgPerNameOfAsset').val($lastRow.find("td:eq(4)").find('input:eq(0)').val());
	  $('#perAssets_Dialog #txtFldDlgPerPurInvValue').val($lastRow.find("td:eq(5)").find('input:eq(0)').val());
	  $('#perAssets_Dialog #txtFldDlgPerCurrValue').val($lastRow.find("td:eq(6)").find('input:eq(0)').val());
	  $('#perAssets_Dialog #txtFldDlgPerOsValue').val($lastRow.find("td:eq(7)").find('input:eq(0)').val());
	  $('#perAssets_Dialog #txtFldDlgPerEstApprValue').val($lastRow.find("td:eq(8)").find('input:eq(0)').val());
	  $('#perAssets_Dialog #txtFldDlgPerYrs2keep').val($lastRow.find("td:eq(9)").find('input:eq(0)').val());
	  $('#perAssets_Dialog #txtFldDlgPerChildEdnPrcnt').val($lastRow.find("td:eq(10)").find('input:eq(0)').val());
	  $('#perAssets_Dialog #txtFldDlgPerRetPlanPrcnt').val($lastRow.find("td:eq(11)").find('input:eq(0)').val());
	  $('#perAssets_Dialog #txtFldDlgPerRemarks').val($lastRow.find("td:eq(12)").find('input:eq(0)').val());
	  $('#perAssets_Dialog #txtFldDlgPerCrtdBy').val($lastRow.find("td:eq(12)").find('input:eq(1)').val());
	  $('#perAssets_Dialog #txtFldDlgPerCrtdDate').val($lastRow.find("td:eq(12)").find('input:eq(2)').val());
}

/* Filling Table Fields*/
function perastfilldomval($RowId,$row){
	
	$row.find("td:eq(2)").find('select:eq(0)').val($("#txtFldDlgPerAcctHolder").val()); 
	$row.find("td:eq(3)").find('input:eq(0)').val($("#txtFldDlgPerTypeOfAsset").val());
	$row.find("td:eq(4)").find('input:eq(0)').val($("#txtFldDlgPerNameOfAsset").val()); 
	$row.find("td:eq(5)").find('input:eq(0)').val($("#txtFldDlgPerPurInvValue").val()); 
	$row.find("td:eq(6)").find('input:eq(0)').val($("#txtFldDlgPerCurrValue").val()); 
	$row.find("td:eq(7)").find('input:eq(0)').val($("#txtFldDlgPerOsValue").val()); 
	$row.find("td:eq(8)").find('input:eq(0)').val($("#txtFldDlgPerEstApprValue").val()); 
	$row.find("td:eq(9)").find('input:eq(0)').val($("#txtFldDlgPerYrs2keep").val()); 
	$row.find("td:eq(10)").find('input:eq(0)').val($("#txtFldDlgPerChildEdnPrcnt").val()); 
	$row.find("td:eq(11)").find('input:eq(0)').val($("#txtFldDlgPerRetPlanPrcnt").val());
	$row.find("td:eq(12)").find('input:eq(0)').val($("#txtFldDlgPerRemarks").val()); 
//	$row.find("input[type=text]").prop("readonly",true);//instant save added line
//	$row.find("select").prop("disabled",true);//instant save added line
		
}


//instant save added line
$("#perAssets_Dialog").find("input,select,textarea").on("change",function(){
	$("#perAssets_Dialog").find(".modal-footer").find("button:eq(0)").removeClass("hidden");
});

/*###########################################################################################################################################################*/


/**
 * Business Assets
 */ 

/*Datatable Initialisation*/
//var businessAssetTbl = $('#businessAssetTbl').DataTable( {
//   destroy: true,
//   responsive: false,         
//   ordering: false,
//   searching: false,     
//   scrollY:  "40vh",
//   scrollX: true,
//   scroller: false,
//   scrollCollapse:false,
//   paging:false, 
//   filter:false,   
//   columnDefs: [], 
//   dom: '<<"top" ip>flt>',  
//   columnDefs: [  { width: '20px', targets: [0,1]},
//  	             {"className": "dt-head-center text-center",targets: [0,1,2,3,4,5,6,7,8,9,10,11,12],"orderable": false,"searchable": false}],		 
//		 fnDrawCallback: function(oSettings) {
//			 if (oSettings._iDisplayLength > oSettings.fnRecordsDisplay()) { 
//				 
//			    } 
//   
//		 }, 
//}).draw();



/*Add Row Click */
$("#BusiARow").on("click",function(){
	//if(!valbusnastTbl())return; 
			busnastClearFlds();
			$("#txtFldDlgBusnBusiPersId").val(makeid(17));
			
			showFIPAModel('busnAssets_Dialog','Business Assets Details'); 
//			$("#busnAssets_Dialog").find("input[id=txtFldDlgBusnBusiPersMode]").val("I");//instant save added line
			$('#busnAssets_Dialog').on('shown.bs.modal', function () {
//			$("#busnAssets_Dialog").find(".modal-footer").find("button:eq(0)").text("Add");
			$("#busnAssets_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
						if(!validatebusnastDetails())return;
					   	busnastRdlyflds(INS_MODE);  
					   	getBuisAsstRows(null); 
						$('#busnAssets_Dialog').modal('hide'); 
				  });  
			});
			
			
});



/*Populate Data */
function getBuisAsstRows(dataset){ 

var cell0 = '<span></span>'+
'<input type="hidden" name="txtFldbusnastMode" readonly="true" value="'+INS_MODE+'" class="fipaMode"/><input type="hidden" name="txtFldPerBusiPersId_B">';

var cell1 = '<div class="checkbox checkbox-primary text-center"><input type="checkbox" name="radbusnastSelect"/><label>&nbsp;</label></div>'; 


var cell2 = '<select type="text" name="txtFldBuisAcctHolder" class="form-control editable" ></select>';
 
var cell3 = '<input type="text" name="txtFldBuisTypeOfAsset" class="form-control editable" maxlength="60" onmouseover="fipaTooltip(this);" maxlength="300"/>'; 

var cell4 = '<input type="text" name="txtFldBuisNameOfAsset" class="form-control editable"   maxlength="60" onmouseover="fipaTooltip(this);" maxlength="300"/>';

var cell5 = '<input type="text" name="txtFldBuisPurInvValue" class="form-control editable" onmouseover="fipaTooltip(this);" maxlength="300"/>'; 

var cell6 = '<input type="text" name="txtFldBuisCurrValue"" class="form-control editable"   onmouseover="fipaTooltip(this);" maxlength="300"/>';

var cell7 = '<input type="text" name="txtFldBuisOsValue" class="form-control editable"   onmouseover="fipaTooltip(this);" maxlength="300"/>';

var cell8 = '<input type="text" name="txtFldBuisEstApprValue" class="form-control editable"   onmouseover="fipaTooltip(this);" maxlength="300"/>';

var cell9 = '<input type="text" name="txtFldBuisYrs2keep" class="form-control editable"   onmouseover="fipaTooltip(this);" maxlength="300"/>';

var cell10 = '<input type="text" name="txtFldBuisChildEdnPrcnt" class="form-control editable"   onmouseover="fipaTooltip(this);" maxlength="300"/>';

var cell11 = '<input type="text" name="txtFldBuisRetPlanPrcnt" class="form-control editable"   onmouseover="fipaTooltip(this);" maxlength="300"/>';

var cell12 = '<input type="text" name="txtFldBuisRemarks" class="form-control editable" maxlength="500"  onmouseover="fipaTooltip(this);" maxlength="300"/>'+
'<input type="hidden" name="txtFldBuisCrtdBy"/><input type="hidden" name="txtFldBuisCrtdDate"/>';

businessAssetTbl.row.add( [cell0,cell1,cell2,cell3,cell4,cell5,cell6,cell7,cell8,cell9,cell10,cell11,cell12] ).draw( false );

var rowCount = $('#businessAssetTbl tbody tr:visible').length;	
rowCount =  (rowCount == 0) ? $('#businessAssetTbl tbody tr').length : rowCount;
var $lastRow = $("#businessAssetTbl tbody tr:last");	

$lastRow.find("td:first").find('span').text(rowCount); 

$lastRow.find("td:eq(1)").find("input:first").click(function(){
	selectSingleRow(this);
})

$lastRow.find("td:eq(1)").find("input:first").attr('id',"radbusnast"+$lastRow.index())
.parent().find('label').attr('for',"radbusnast"+$lastRow.index());

$lastRow.find("td:eq(0)").find('input:eq(1)').val($("#txtFldDlgBusnBusiPersId").val());

var accholder = $("#txtFldDlgBusnAcctHolder > option").clone();
$lastRow.find("td:eq(2)").find('select:eq(0)').append(accholder);
$lastRow.find("td:eq(2)").find('select:eq(0)').val($("#txtFldDlgBusnAcctHolder").val());
$lastRow.find("td:eq(2)").find('select:eq(0)').on("change",function(){
	calcTotalLiabilitiesLoan();		
});


$lastRow.find("td:eq(3)").find('input:eq(0)').val($("#txtFldDlgBusnTypeOfAsset").val());

$lastRow.find("td:eq(4)").find('input:eq(0)').val($("#txtFldDlgBusnNameOfAsset").val());

$lastRow.find("td:eq(5)").find('input:eq(0)').val($("#txtFldDlgBusnPurInvValue").val()); 
$lastRow.find("td:eq(5)").find('input:eq(0)').addClass("applyEvntUsd");

$lastRow.find("td:eq(6)").find('input:eq(0)').val($("#txtFldDlgBusnCurrValue").val());
$lastRow.find("td:eq(6)").find('input:eq(0)').addClass("applyEvntUsd");

$lastRow.find("td:eq(7)").find('input:eq(0)').val($("#txtFldDlgBusnOsValue").val());
$lastRow.find("td:eq(7)").find('input:eq(0)').addClass("applyEvntUsd");
$lastRow.find("td:eq(7)").find('input:eq(0)').on("change",function(){
	calcTotalLiabilitiesLoan();		
});


$lastRow.find("td:eq(8)").find('input:eq(0)').val($("#txtFldDlgBusnEstApprValue").val());
$lastRow.find("td:eq(8)").find('input:eq(0)').addClass("applyEvntUsd");


$lastRow.find("td:eq(9)").find('input:eq(0)').val($("#txtFldDlgBusnYrs2keep").val());
$lastRow.find("td:eq(9)").find('input:eq(0)').addClass("applyEvntYrs");


$lastRow.find("td:eq(10)").find('input:eq(0)').val($("#txtFldDlgBusnChildEdnPrcnt").val());
$lastRow.find("td:eq(10)").find('input:eq(0)').addClass("applyEvntpCent");

 
$lastRow.find("td:eq(11)").find('input:eq(0)').val($("#txtFldDlgBusnRetPlanPrcnt").val());
$lastRow.find("td:eq(11)").find('input:eq(0)').addClass("applyEvntpCent");


$lastRow.find("td:eq(12)").find('input:eq(0)').val($("#txtFldDlgBuisRemarks").val());


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
	crudicons(this,'businessAssetTbl','SelbusinessAsset','BusiERow','BusiDRow');
			
});
//DHTML CRUD ICONS

$lastRow.find("td:eq(1)").find("input:first").click(function(){
	selectSingleRow(this);
//	DHTML CRUD ICONS
	crudicons(this,'businessAssetTbl','SelbusinessAsset','BusiERow','BusiDRow');
});


if(dataset != null){

	
	 rowCount = $('#businessAssetTbl tbody tr').length;	
	 
	 $lastRow.find("td:first").find('span').text(rowCount); 
			if($("#hTxtFldFnaReviewFlag").val() == "U"  || $("#hTxtFldFnaReviewFlag").val() == ""){ 
					$lastRow.find("td:eq(0)").find('input:eq(0)').val(col);
			}
			
	var infoDetsArr = new Array();
	
	for(var data in dataset){
		var col = dataset[data];
		
		switch(data){
		
		case "txtFldBuisBusiPersId": 
			$lastRow.find("td:eq(0)").find('input:eq(1)').val(col); 
			break;
			
		case "txtFldBuisAcctHolder": 
			selectNullvalChk($lastRow.find("td:eq(2)"),col);
			break;
			
		case "txtFldBuisTypeOfAsset": 
			$lastRow.find("td:eq(3)").find('input:eq(0)').val(col); 
			break;
		 
		case "txtFldBuisNameOfAsset": 
			$lastRow.find("td:eq(4)").find('input:eq(0)').val(col); 
			break;
		 
		case "txtFldBuisPurInvValue": 
			$lastRow.find("td:eq(5)").find('input:eq(0)').val(col); 
			break;
			
		case "txtFldBuisCurrValue": 
			$lastRow.find("td:eq(6)").find('input:eq(0)').val(col); 			
			break;
		
		case "txtFldBuisOsValue": 
			$lastRow.find("td:eq(7)").find('input:eq(0)').val(col); 
			break;
		
		case "txtFldBuisEstApprValue": 
			$lastRow.find("td:eq(8)").find('input:eq(0)').val(col); 
			break;
			
		case "txtFldBuisYrs2keep":
			$lastRow.find("td:eq(9)").find('input:eq(0)').val(col); 
			break;
			
		case "txtFldBuisChildEdnPrcnt":
			$lastRow.find("td:eq(10)").find('input:eq(0)').val(col); 
			break;
			
		case "txtFldBuisRetPlanPrcnt":
			$lastRow.find("td:eq(11)").find('input:eq(0)').val(col); 
			break;
				
		case "txtFldBuisRemarks":
			$lastRow.find("td:eq(12)").find('input:eq(0)').val(col); 
			break;
		
		
		case "txtFldBuisCrtdBy": 
			$lastRow.find("td:eq(16)").find('input:eq(1)').val(col);
			infoDetsArr.push(col);				
			break;
			
		case "txtFldBuisCrtdDate":
			$lastRow.find("td:eq(16)").find('input:eq(2)').val(col);
			infoDetsArr.push(col);
			break;
			
		case "txtFldBuisModBy":
			infoDetsArr.push(col);
			break;
			
		case "txtFldBuisModDate":
			infoDetsArr.push(col);
			break;	
		}			 
		 
	}
	}
 
if(dataset == null){
	calcTotalLiabilitiesLoan();	
//	instantBusiAssetSave($lastRow,INS_MODE);	
//	DHTML CRUD ICONS
	crudicons(null,'businessAssetTbl','SelbusinessAsset','BusiERow','BusiDRow');
	}	
  /*
$lastRow.find("input[type=text]").prop("readonly",true);//instant save added line
$lastRow.find("select").prop("disabled",true);//instant save added line
*/
}


//DHTML SELECT ALL
function SelAllbusinessAssett(obj){
	
	if($(obj).is(":checked")){
		
		
		$('#businessAssetTbl tbody tr').find("td:eq(1)").find("input[type=checkbox]").prop("checked",true);
		
		$("#BusiDRow").attr("disabled",false);
		$('#businessAssetTbl tbody tr').addClass("selected");
		
		var $rowCount = $('#businessAssetTbl tbody tr').length;
		
		if($rowCount == 0){
			$(obj).prop("checked",false);
			/*$("#BusiERow").attr("disabled",true);
			$("#BusiDRow").attr("disabled",true);*/
		}else if($rowCount == 1){
			$("#BusiERow").attr("disabled",false);
			$("#BusiDRow").attr("disabled",false);
		}else if($rowCount > 1){
			/*$("#BusiERow").attr("disabled",true);*/
			$("#BusiDRow").attr("disabled",false);
		}
		
	}else{
		
		$('#businessAssetTbl tbody tr').find("td:eq(1)").find("input[type=checkbox]").prop("checked",false);
		
		$('#businessAssetTbl tbody tr').removeClass("selected");
		
		/*$("#BusiERow").attr("disabled",true);
		$("#BusiDRow").attr("disabled",true);*/
		
	}
}

/*Edit Row Click */
$("#BusiERow").on("click",function(){
	BusiVRow(); 
	
});


/*View Row Click */
 function BusiVRow(){
	var isOneRowSelected=0;
	var $rowCount = $('#businessAssetTbl tbody tr').length;	
	var $lastRow = $("#businessAssetTbl tbody tr:last");	
	
	if($rowCount<1){
		applyToastrAlert("Insert rows before edit/view");
		return;
	} 
	
/*	$("#businessAssetTbl tbody tr").each(function(){
		var $row = $(this);   
		$row.removeClass('selected');  
		$(this).removeAttr("style"); 
		$row.find("td").removeAttr("style");
	});*/
	
	
	$("#businessAssetTbl tbody").find('input[name="radbusnastSelect"]').each(function(){ //Checkbox selection
		var $curElm=$(this);
		if($curElm.is(":checked")){ 
			isOneRowSelected++;
		}
	});
	
	
	if(isOneRowSelected > 1){  
		applyToastrAlert("More than one rows selected.Select one row only");
		return;
	}
	
	$("#businessAssetTbl tbody").find('input[name="radbusnastSelect"]').each(function(){ //Checkbox selection
		var $curElm=$(this);
		if($curElm.is(":checked")){ 
			var $row = $curElm.parents("tr");                                    
			var $mode = $curElm.parents("tr").find("td:first").find('input:eq(0)').val(); 
			$curElm.prop("checked",false);
	     	 $curElm.parents("tr").removeClass('selected');
	     	 
			if(($mode == INS_MODE) || ($mode == UPD_MODE) ){
				 var $RowId=$row.index();
				 $curElm.parents("tr").find("td:first").find('input:eq(0)').val($mode);  
				 $curElm.parents("tr").find("td:first").find('input:eq(0)').val($mode);   
					$(this).parents("tr").find("td").find("input.editable,select.editable").each(function(){
					$(this).attr("disabled",false); 
					$row.removeClass('selected');  
					$(this).parent().css({border:'1px solid green'});
					$row.css({border:'1px solid green'});
					$row.find("td").css({border:'1px solid green'}); 
				});
				 	busnastRdlyflds($mode);
					busnastfilldlgval($row); 
					showFIPAModel('busnAssets_Dialog','Business Assets Details'); 
					$("#busnAssets_Dialog").find(".modal-footer").find("button:eq(0)").removeClass("hidden");//instant save added line
					
					$('#busnAssets_Dialog').on('shown.bs.modal', function () {
//						$row.find("input[type=text]").prop("readonly",true);//instant save added line
//						$row.find("select").prop("disabled",true);//instant save added line
//						$("#busnAssets_Dialog").find(".modal-footer").find("button:eq(0)").text("Edit");
						$("#busnAssets_Dialog").find("select[id=txtFldDlgBusnAcctHolder]").focus(); 
						$("#busnAssets_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
							 if(!validatebusnastDetails())return; 
					     		if(!isEmpty($RowId) && !($RowId==undefined)){  
					     			busnastfilldomval($RowId,$row); 
					     		}  
					     		calcTotalLiabilitiesLoan();		
//					     		instantBusiAssetSave($row,UPD_MODE); //instant save added line
								$('#busnAssets_Dialog').modal('hide'); 
								busnastClearFlds();
								crudicons(null,'businessAssetTbl','SelbusinessAsset','BusiERow','BusiDRow');
						});
						
						$("#busnAssets_Dialog").find(".modal-footer").find("button:eq(1)").on("click",function(){
							crudicons(null,'businessAssetTbl','SelbusinessAsset','BusiERow','BusiDRow');
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
$("#BusiDRow").on("click",function(){ 
	datatableDeleteRow('businessAssetTbl',businessAssetTbl,'SelbusinessAsset','BusiERow','BusiDRow');
/*//	DHTML CRUD ICONS
	var rc = businessAssetTbl.row().count();
	if(rc ==0){
		$("#SelbusinessAsset").prop("checked",false);
	}
//	DHTML CRUD ICONS
*/});

/*Clear Fields */
function busnastClearFlds(){
	$("#busnAssets_Dialog").find("input[type=text]").val("");
	$("#busnAssets_Dialog").find("textarea").val("");
	$("#busnAssets_Dialog").find("select").val("");
}

/*Disabled/Readonly Fields */
function busnastRdlyflds(mode){ 
	 if(mode == QRY_MODE ){
			$("#busnAssets_Dialog :input").prop("disabled", true); 
	 } else if((mode == INS_MODE) || (mode == UPD_MODE) ){
			$("#busnAssets_Dialog :input").prop("disabled", false);
	 }
}

/*Validation */
function validatebusnastDetails(){
	 
	 
	/*if(!(validateFocusFlds('busnAssets_Dialog','txtFldDlgBusnAcctHolder', PERACCHOL))) return;
	if(!(validateFocusFlds('busnAssets_Dialog','txtFldDlgBusnTypeOfAsset', PERACCTP))) return; 
	if(!(validateFocusFlds('busnAssets_Dialog','txtFldDlgBusnNameOfAsset', PERASTNAME))) return;
*/
	  return true; 
}

function valbusnastTbl(){  
	var $RowCount = businessAssetTbl.rows().count();

	 var valid=true;
	/*if($RowCount > 0 ){ 
		$("#businessAssetTbl tbody tr").each(function(){
			var $lastRow=$(this);
		if(!(validateFocusDhtmlFlds($lastRow.find("td:eq(2)").find('select:eq(0)'), PERACCHOL,SCREEN_ASSET))){valid=false;return false;};  
		if(!(validateFocusDhtmlFlds($lastRow.find("td:eq(3)").find('input:eq(0)'), PERACCTP,SCREEN_ASSET))) {valid=false;return false;};  
		if(!(validateFocusDhtmlFlds($lastRow.find("td:eq(4)").find('input:eq(0)'), PERASTNAME,SCREEN_ASSET))){valid=false;return false;}; 
		 
		});
	} */ 

	return valid;
}


/*Mandatory Fields Tooltip*/ 
$("#txtFldDlgBusnAcctHolder,#txtFldDlgBusnNameOfAsset,#txtFldDlgBusnTypeOfAsset").on("change",function(){
	if(!isEmpty($(this).val())){
	$(this).removeClass("mandatoryFillFlds");
	$(this).qtip('disable');
	$(this).qtip('destroy',true);
	}
});
 


/* Filling Model Fields*/
function busnastfilldlgval($lastRow){
//	  $('#busnAssets_Dialog #txtFldDlgBusnBusiPersMode').val($lastRow.find("td:eq(0)").find('input:eq(0)').val());//instant save added line
	  $('#busnAssets_Dialog #txtFldDlgBusnBusiPersId').val($lastRow.find("td:eq(0)").find('input:eq(1)').val());
	  $('#busnAssets_Dialog #txtFldDlgBusnAcctHolder').val($lastRow.find("td:eq(2)").find('select:eq(0)').val());
	  $('#busnAssets_Dialog #txtFldDlgBusnTypeOfAsset').val($lastRow.find("td:eq(3)").find('input:eq(0)').val());
	  $('#busnAssets_Dialog #txtFldDlgBusnNameOfAsset').val($lastRow.find("td:eq(4)").find('input:eq(0)').val());
	  $('#busnAssets_Dialog #txtFldDlgBusnPurInvValue').val($lastRow.find("td:eq(5)").find('input:eq(0)').val());
	  $('#busnAssets_Dialog #txtFldDlgBusnCurrValue').val($lastRow.find("td:eq(6)").find('input:eq(0)').val());
	  $('#busnAssets_Dialog #txtFldDlgBusnOsValue').val($lastRow.find("td:eq(7)").find('input:eq(0)').val());
	  $('#busnAssets_Dialog #txtFldDlgBusnEstApprValue').val($lastRow.find("td:eq(8)").find('input:eq(0)').val());
	  $('#busnAssets_Dialog #txtFldDlgBusnYrs2keep').val($lastRow.find("td:eq(9)").find('input:eq(0)').val());
	  $('#busnAssets_Dialog #txtFldDlgBusnChildEdnPrcnt').val($lastRow.find("td:eq(10)").find('input:eq(0)').val());
	  $('#busnAssets_Dialog #txtFldDlgBusnRetPlanPrcnt').val($lastRow.find("td:eq(11)").find('input:eq(0)').val());
	  $('#busnAssets_Dialog #txtFldDlgBuisRemarks').val($lastRow.find("td:eq(12)").find('input:eq(0)').val());
	  $('#busnAssets_Dialog #txtFldDlgBusnCrtdBy').val($lastRow.find("td:eq(12)").find('input:eq(1)').val());
	  $('#busnAssets_Dialog #txtFldDlgBusnCrtdDate').val($lastRow.find("td:eq(12)").find('input:eq(2)').val());
}

/* Filling Table Fields*/
function busnastfilldomval($RowId,$row){
	
	$row.find("td:eq(2)").find('select:eq(0)').val($("#txtFldDlgBusnAcctHolder").val()); 
	$row.find("td:eq(3)").find('input:eq(0)').val($("#txtFldDlgBusnTypeOfAsset").val());
	$row.find("td:eq(4)").find('input:eq(0)').val($("#txtFldDlgBusnNameOfAsset").val()); 
	$row.find("td:eq(5)").find('input:eq(0)').val($("#txtFldDlgBusnPurInvValue").val()); 
	$row.find("td:eq(6)").find('input:eq(0)').val($("#txtFldDlgBusnCurrValue").val()); 
	$row.find("td:eq(7)").find('input:eq(0)').val($("#txtFldDlgBusnOsValue").val()); 
	$row.find("td:eq(8)").find('input:eq(0)').val($("#txtFldDlgBusnEstApprValue").val()); 
	$row.find("td:eq(9)").find('input:eq(0)').val($("#txtFldDlgBusnYrs2keep").val()); 
	$row.find("td:eq(10)").find('input:eq(0)').val($("#txtFldDlgBusnChildEdnPrcnt").val()); 
	$row.find("td:eq(11)").find('input:eq(0)').val($("#txtFldDlgPerRetPlanPrcnt").val());
	$row.find("td:eq(12)").find('input:eq(0)').val($("#txtFldDlgBuisRemarks").val()); 
//	$row.find("input[type=text]").prop("readonly",true);//instant save added line
//	$row.find("select").prop("disabled",true);//instant save added line

	
}

//instant save added line
$("#busnAssets_Dialog").find("input,select,textarea").on("change",function(){
	$("#busnAssets_Dialog").find(".modal-footer").find("button:eq(0)").removeClass("hidden");
});

/*###########################################################################################################################################################*/
