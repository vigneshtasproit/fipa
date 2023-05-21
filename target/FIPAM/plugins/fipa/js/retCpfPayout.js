

/*Add Row Click */
$("#CpfLifeARow").on("click",function(){
		if(!valcpfLfeTbl())return; 
			cpflfeClearFlds();
			cpfLfeRdlyflds(INS_MODE);  
			defaultCpflifevalues();
			showFIPAModel('cpflifePayout_Dialog','Fund Transfer from CPF Account to CPF Life'); 
//			$("#cpflifePayout_Dialog").find("input[id=txtFldDlgcpfLfMode]").val("I");//instant save added line
			$('#cpflifePayout_Dialog').on('shown.bs.modal', function () { 
//				$("#cpflifePayout_Dialog").find(".modal-footer").find("button:eq(0)").text("Add");
				$("#cpflifePayout_Dialog").find("textarea[id=txtFldDlgcpfLfAge]").focus();
				$("#cpflifePayout_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
						if(!validatecpfLfeDetails())return;
					   	
					   	getCpfLifeRows(null); 
						$('#cpflifePayout_Dialog').modal('hide'); 
				  });  
			});
			
			
});


function defaultCpflifevalues(){
	
	$("#cpflifePayout_Dialog #txtFldDlgcpfLfAge").val("65");
	$("#cpflifePayout_Dialog #txtFldDlgcpfLfType").val("SP");

//	ajaxCalRetirementCpflife($("#cpflifePayout_Dialog #txtFldDlgcpfLfType").val(),$("#selDlgcpfLfPrem"),$("#txtFldDlgcpfLifePayInc"),$("#txtFldDlgcpfLifeRA"));

}
/*Populate Data */
function getCpfLifeRows(dataset){ 

var cell0 = '<span></span>'+
'<input type="hidden" name="txtFldcpfLfeMode" readonly="true" value="'+INS_MODE+'" class="fipaMode"/><input type="hidden" name="txtFldcpfLfeId">';

var cell1 = '<div class="checkbox checkbox-primary text-center"><input type="checkbox" name="radcpfLfeSelect"/><label>&nbsp;</label></div>'; 

var cell2 ='<input type="text" name="txtFldCpfLifeAge" class="form-control editable"  onmouseover="fipaTooltip(this);" />';

var cell3 ='<select name="txtFldCpfLifeTypes" class="form-control editable"  onmouseover="fipaTooltip(this);"></select>';

var cell4 ='<input type="text" name="txtFldCpfLifePrem" class="form-control editable"  onmouseover="fipaTooltip(this);" disabled="true"/>';

var cell5 ='<input type="text" name="txtFldCpfLifePayoutInc" class="form-control editable"  onmouseover="fipaTooltip(this);" disabled="true" />';

var cell6 ='<input type="text" name="txtFldCpfLifeFdTrans" class="form-control editable"  onmouseover="fipaTooltip(this);" disabled="true"/>';


retCpfPayoutTable.row.add( [cell0,cell1,cell2,cell3,cell4,cell5,cell6] ).draw( false );

var rowCount = $('#retCpfPayoutTable tbody tr:visible').length;
rowCount = (rowCount == 0) ? $('#retCpfPayoutTable tbody tr').length : rowCount;
var $lastRow = $("#retCpfPayoutTable tbody tr:last");	

$lastRow.find("td:first").find('span').text(rowCount); 


$lastRow.find("td:eq(1)").find("input:first").click(function(){
	selectSingleRow(this);
});

$lastRow.find("td:eq(1)").find("input:first").attr('id',"radarc"+$lastRow.index())
.parent().find('label').attr('for',"radcpfLfe"+$lastRow.index());

$lastRow.find("td:eq(2)").find('input:eq(0)').val($("#txtFldDlgcpfLfAge").val());
$lastRow.find("td:eq(2)").find('input:eq(0)').addClass("applyEvntYrs");

/*
$lastRow.find("td:eq(2)").find('input:eq(0)').on("change",function(){
	cpflifefilldlgval($lastRow); 
	instantRetCpfPaySave($lastRow,UPD_MODE);
	applyToastrAlert(FDTRNCPFLFE_INS_SAVE);
});
*/


var sel =  $("#txtFldDlgcpfLfType > option").clone();
$lastRow.find("td:eq(3)").find('select:eq(0)').append(sel);
$lastRow.find("td:eq(3)").find('select:eq(0)').val($("#txtFldDlgcpfLfType").val()); 
$lastRow.find("td:eq(3)").find('select:eq(0)').on("change",function(){
	
	if($(this).val() == "BP"){
		
//		To Get the CPF Projection
			
			$("#li_existpolicy").trigger("click");
			showLoader();
			
		
		
		
	}
	
	ajaxCalRetirementCpflife($(this),$lastRow.find("td:eq(4)").find('input:eq(0)'),
			$lastRow.find("td:eq(5)").find('input:eq(0)'),$lastRow.find("td:eq(6)").find('input:eq(0)'));	
});


//  $lastRow.find("td:eq(4)").find('input:eq(0)').val($("#selDlgcpfLfPrem").val());
$lastRow.find("td:eq(4)").find('input:eq(0)').val($("#txtFldDlgIRAmtofInc").val());
$lastRow.find("td:eq(4)").find('input:eq(0)').addClass("applyEvntUsd").prop("disabled",true);

$lastRow.find("td:eq(5)").find('input:eq(0)').val($("#txtFldDlgcpfLifePayInc").val());
$lastRow.find("td:eq(5)").find('input:eq(0)').addClass("applyEvntUsd").prop("disabled",true);


$lastRow.find("td:eq(6)").find('input:eq(0)').val($("#txtFldDlgcpfLifeRA").val());
$lastRow.find("td:eq(6)").find('input:eq(0)').addClass("applyEvntUsd").prop("disabled",true); 

 

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



if(dataset != null){

	rowCount = $('#retCpfPayoutTable tbody tr').length;	
		

	$lastRow.find("td:first").find('span').text(rowCount); 
	
			if($("#hTxtFldFnaReviewFlag").val() == "U"  || $("#hTxtFldFnaReviewFlag").val() == ""){ 
					$lastRow.find("td:eq(0)").find('input:eq(0)').val(col);
			}
			
	var infoDetsArr = new Array();
	
	for(var data in dataset){
		var col = dataset[data];
		
		switch(data){
		
			case "rpClId": 
				$lastRow.find("td:eq(0)").find('input:eq(1)').val(col); 
				break;
				
			case "age": 
				$lastRow.find("td:eq(2)").find('input:eq(0)').val(col);  
				break;
	
			case "cpflifeType": 
				selectNullvalChk($lastRow.find("td:eq(3)"),col); 
				break;
				
			case "cpflifePrem": 
				$lastRow.find("td:eq(4)").find('input:eq(0)').val(col).prop("disabled",true);  
				break;
				
			case "cpflifePayoutincome": 
				$lastRow.find("td:eq(5)").find('input:eq(0)').val(col).prop("disabled",true);  
				break;
				
			case "cpflifeFromRa": 
				$lastRow.find("td:eq(6)").find('input:eq(0)').val(col).prop("disabled",true);  
				break;
				  
		}			 
		 
	}
	}else{
		if(isEmpty($lastRow.find("td:first").find("input:eq(1)").val())){
			$lastRow.find("td:first").find("input:eq(1)").val(makeid(17));
		}
	}
 


}

/*Edit Row Click */
$("#CpfLifeERow").on("click",function(){
	CpfLifeVRow(); 
});


/*View Row Click */
 function CpfLifeVRow(){
	var isOneRowSelected=0;
	var $rowCount = $('#retCpfPayoutTable tbody tr').length;	
	var $lastRow = $("#retCpfPayoutTable tbody tr:last");	
	
	if($rowCount<1){
		applyToastrAlert("Insert rows before edit/view");
		return;
	} 
	
	$("#retCpfPayoutTable tbody tr").each(function(){
		var $row = $(this);   
		$row.removeClass('selected');  
		$(this).removeAttr("style"); 
		$row.find("td").removeAttr("style");
	});
	
	
	$("#retCpfPayoutTable tbody").find('input[name="radcpfLfeSelect"]').each(function(){ //Checkbox selection
		var $curElm=$(this);
		if($curElm.is(":checked")){ 
			isOneRowSelected++;
		}
	});
	
	
	if(isOneRowSelected > 1){ 
		applyToastrAlert("More than one rows selected.Select one row only");
		return;
	}
	
	$("#retCpfPayoutTable tbody").find('input[name="radcpfLfeSelect"]').each(function(){ //Checkbox selection
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
				 	cpfLfeRdlyflds($mode);
					cpflifefilldlgval($row); 
					showFIPAModel('cpflifePayout_Dialog','Fund Transfer from CPF Account to CPF Life');  
//					$("#cpflifePayout_Dialog").find(".modal-footer").find("button:eq(0)").removeClass("hidden");//instant save added line
					
					$('#cpflifePayout_Dialog').on('shown.bs.modal', function () {
			//			$row.find("input[type=text]").prop("readonly",true);//instant save added line
				//		$row.find("select").prop("disabled",true);//instant save added line
					
//						$("#cpflifePayout_Dialog").find(".modal-footer").find("button:eq(0)").text("Edit");
						$("#cpflifePayout_Dialog").find("textarea[id=txtFldDlgcpfLfAge]").focus(); 
						$("#cpflifePayout_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
							 if(!validatecpfLfeDetails())return; 
					     		if(!isEmpty($RowId) && !($RowId==undefined)){  
					     			cpflifefilldomval($RowId,$row); 
					     		}  
					     		
					     		
					     	//	instantRetCpfPaySave($row,UPD_MODE); //instant save added line
								$('#cpflifePayout_Dialog').modal('hide'); 
								cpflfeClearFlds();
							
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
$("#CpfLifeDRow").on("click",function(){ 
	 	datatableDeleteRow('retCpfPayoutTable',retCpfPayoutTable,'','','');  
});

/*Clear Fields */
function cpflfeClearFlds(){
	$("#cpflifePayout_Dialog").find("input[type=text]").val("");
	$("#cpflifePayout_Dialog").find("textarea").val("");
	$("#cpflifePayout_Dialog").find("select").val("");
}

/*Disabled/Readonly Fields */
function cpfLfeRdlyflds(mode){ 
	 if(mode == QRY_MODE ){
			$("#cpflifePayout_Dialog :input").prop("disabled", true); 
	 } else if((mode == INS_MODE) || (mode == UPD_MODE) ){
			$("#cpflifePayout_Dialog :input").prop("disabled", false);
	 }
	 $('#cpflifePayout_Dialog #selDlgcpfLfPrem').prop("disabled", true); 
	  $('#cpflifePayout_Dialog #txtFldDlgcpfLifePayInc').prop("disabled", true); 
	  $('#cpflifePayout_Dialog #txtFldDlgcpfLifeRA').prop("disabled", true); 
	
}

/*Validation */
function validatecpfLfeDetails(){
	 
//	if(!(validateFocusFlds('cpflifePayout_Dialog','txtFldDlgcpfLfAge',OTHAREAOFCRN))) return;  
	 
		  
	  return true; 
}
function valcpfLfeTbl(){  
//	var $RowCount = retCpfPayoutTable.rows().count();

	var valid=true;
//	if($RowCount > 0 ){ 
//		$("#retCpfPayoutTable tbody tr").each(function(){
//			var $lastRow=$(this); 
//		if(!(validateFocusDhtmlFlds($lastRow.find("td:eq(2)").find('input:eq(0)'), OTHAREAOFCRN))){valid=false;return false;}; 
//		 
//		});
//	}  
	return valid;
}


/*Mandatory Fields Tooltip*/ 
$("#txtFldDlgcpfLfAge").on("change",function(){
	if(!isEmpty($(this).val())){
	$(this).removeClass("mandatoryFillFlds");
	$(this).qtip('disable');
	$(this).qtip('destroy',true);
	}
});
 

/* Filling Model Fields*/
function cpflifefilldlgval($lastRow){
//	  $('#cpflifePayout_Dialog #txtFldDlgcpfLfMode').val($lastRow.find("td:eq(0)").find('input:eq(0)').val());//instant save added line
	  $('#cpflifePayout_Dialog #txtFldDlgcpfLfId').val($lastRow.find("td:eq(0)").find('input:eq(1)').val());
	  $('#cpflifePayout_Dialog #txtFldDlgcpfLfAge').val($lastRow.find("td:eq(2)").find('input:eq(0)').val());  
	  $('#cpflifePayout_Dialog #txtFldDlgcpfLfType').val($lastRow.find("td:eq(3)").find('select:eq(0)').val());
	  $('#cpflifePayout_Dialog #selDlgcpfLfPrem').val($lastRow.find("td:eq(4)").find('input:eq(0)').val());
	  $('#cpflifePayout_Dialog #txtFldDlgcpfLifePayInc').val($lastRow.find("td:eq(5)").find('input:eq(0)').val());
	  $('#cpflifePayout_Dialog #txtFldDlgcpfLifeRA').val($lastRow.find("td:eq(6)").find('input:eq(0)').val()); 
}

/* Filling Table Fields*/
function cpflifefilldomval($RowId,$row){
	$row.find("td:eq(2)").find('input:eq(0)').val($("#txtFldDlgcpfLfAge").val()); 
	$row.find("td:eq(3)").find('select:eq(0)').val($("#txtFldDlgcpfLfType").val()); 
	$row.find("td:eq(4)").find('input:eq(0)').val($("#selDlgcpfLfPrem").val()).prop("disabled",true); 
	$row.find("td:eq(5)").find('input:eq(0)').val($("#txtFldDlgcpfLifePayInc").val()).prop("disabled",true); 
	$row.find("td:eq(6)").find('input:eq(0)').val($("#txtFldDlgcpfLifeRA").val()).prop("disabled",true); 
	//$row.find("input[type=text]").prop("readonly",true);//instant save added line
	//$row.find("select").prop("disabled",true);//instant save added line

}


//instant save added line
$("#cpflifePayout_Dialog").find("input,select,textarea").on("change",function(){
	$("#cpflifePayout_Dialog").find(".modal-footer").find("button:eq(0)").removeClass("hidden");
});

/*###########################################################################################################################################################*/
function addDefaultCpfLifeRows(dataset){
//	console.log("======addDefaultCpfLifeRows")
	var count=retCpfPayoutTable.rows().count();
	if(count == 0){
		retCpfPayoutTable.clear().draw();
//		defaultCpflifevalues();
		getCpfLifeRows(null);
		var $lastRow = $("#retCpfPayoutTable tbody tr:last");
		
		var age = $lastRow.find("td:eq(2)").find('input:eq(0)').val();
		var plan = $lastRow.find("td:eq(3)").find('select:eq(0)').val();
		
		if(isEmpty(age))
			$lastRow.find("td:eq(2)").find('input:eq(0)').val("65");
		
		if(isEmpty(plan)){
			$lastRow.find("td:eq(3)").find('select:eq(0)').val("SP"); 	
		}
		
		if($lastRow.find("td:eq(3)").find('select:eq(0)').val() == "BP"){
			
//			To Get the CPF Projection
				
				$("#li_existpolicy").trigger("click");
				showLoader();
				
			
			
			
		}
		
		ajaxCalRetirementCpflife($lastRow.find("td:eq(3)").find('select:eq(0)'),$lastRow.find("td:eq(4)").find('input:eq(0)'),$lastRow.find("td:eq(5)").find('input:eq(0)'),$lastRow.find("td:eq(6)").find('input:eq(0)'));
	}
//	tablePayoutUpdate();
//	CpfPayoutRepSrch('retCpfPayoutTableReplica',retCpfPayoutTableReplica);
	 
}




$("#retMedGround,#retExistAnnuity").on("change",function(){
	var medGround=$("#retMedGround").val();
	var existAnnuity=$("#retExistAnnuity").val();
	
	if(medGround == "Y" && existAnnuity == "Y"){
		var elmId=$(this).attr("id");
		if(elmId == 'retMedGround'){
			$("#retExistAnnuity").val("N");
		}else{
			$("#retMedGround").val("N");
		} 
	}
	 
});

$("#retPropToCPF,#retTopUpRAERS").on("change",function(){
	var $lastRow = $("#retCpfPayoutTable tbody tr:last");
	var age = $lastRow.find("td:eq(2)").find('input:eq(0)').val();
	var plan = $lastRow.find("td:eq(3)").find('select:eq(0)').val();
	
	if(isEmpty(age))
		$lastRow.find("td:eq(2)").find('input:eq(0)').val("65");
	
	if(isEmpty(plan)){
		$lastRow.find("td:eq(3)").find('select:eq(0)').val("SP"); 	
	}
	
	if($lastRow.find("td:eq(3)").find('select:eq(0)').val() == "BP"){
		
//		To Get the CPF Projection
			
			$("#li_existpolicy").trigger("click");
			showLoader();
			
		
		
		
	}
	
	ajaxCalRetirementCpflife($lastRow.find("td:eq(3)").find('select:eq(0)'),$lastRow.find("td:eq(4)").find('input:eq(0)'),$lastRow.find("td:eq(5)").find('input:eq(0)'),$lastRow.find("td:eq(6)").find('input:eq(0)'));

});


function ajaxCalRetirementCpflife(cpftype,cpfprem,cpfpayout,fdtransfer){
	
	

	
	 
	var pleged = (isEmpty($("#retPropToCPF").val())? "N" :$("#retPropToCPF").val());
	var topRAERS = (isEmpty($("#retTopUpRAERS").val())? "N" :$("#retTopUpRAERS").val());
	
	var RetAge=Number($("#retYrstoret").val());//Retirement age 
	var cpfType =  isEmpty(cpftype.val()) ? "SP" : cpftype.val();//plan code 
	var strFNAID = $("#fnaId").val();
	
	
	
	setTimeout(function(){
		
		 $.ajax({
			type:"GET",
			url:servletName,
			async:false,
			data:{
				"DBCALLFOR":"RET_CPF_LIFE",  
				"txtFldRetAge"				:RetAge,
				"txtFldPlanCode"			:cpfType,
				"txtFldPlegedvalue"			:pleged,
				"txtFldTopRAErsvalue"		:topRAERS,
				"txtFldFNAID":strFNAID
			},
			success: function(result){ 
		 		var jsnRslt=JSON.parse(result); 
		 		$.each(jsnRslt,function(i,obj){
		 			
		 			/*if(obj.SESSION_EXPIRY=='SESSION_EXPIRY'){
		 				window.location = BASE_URL + SESSION_EXP_JSP; 
		 				return;
		  			}*/
 
					if (obj.SESSION_EXPIRY=="DB_ERROR") {
						window.location = BASE_URL + DB_EXP_JSP; 
						return;
					}
					
					$.each(obj,function(i,val){  
						 if(i == "RET_CPF_LIFE_RES"){   
							 $.each(val, function(contkey, contvalue) { 
								 var prem=contvalue["LIFEPREM"];
								 var payout=contvalue["LIFEPAYOUT"];
								 var ra=contvalue["FROM_RA"]; 
								 cpfprem.val(prem);
								 cpfpayout.val(payout);
								 fdtransfer.val(ra);
								 
								 syncCPFLIFEBalanceRet();
								 
							 });
							 
							 
							
						 }
						 if(i == "RET_CPF_LIFE_NORES"){
							 	cpfprem.val("");
								cpfpayout.val("");
								fdtransfer.val("");
						 }
							  
							
						 return; 
							  
					});
					
					
				});
				 hideLoader(); 
				
			}
		});
		
	}, 2000);
	
//	if (!isEmpty(cpfType)) { 
//		showLoader();  
////		setTimeout(function() {
 
////		}, 1000);
//		 
//	} else{
//		cpfprem.val("");
//		cpfpayout.val("");
//		fdtransfer.val("");
//	}
}


/*$("#txtFldDlgcpfLfType").on("change",function(){
	ajaxCalRetirementCpflife($(this).val(),$("#selDlgcpfLfPrem"),$("#txtFldDlgcpfLifePayInc"),$("#txtFldDlgcpfLifeRA"));
});*/

$("#retPropToCPF,#retTopUpRAERS").on("change",function(){
	tablePayoutUpdate();
});


function tablePayoutUpdate(){
	var count = retCpfPayoutTable.rows().count(); 
	if(count > 0){
//		console.log($("#retCpfPayoutTable tbody tr").length + " ------------------ ")
		$("#retCpfPayoutTable tbody tr").each(function(){
			var $lastRow = $(this);
			
			var mode_r = $(this).find("td:first").find('input:eq(0)').val();
//			console.log("mode_r ---------->" +mode_r)
			if(mode_r != "D"){
//				ajaxCalRetirementCpflife($lastRow.find("td:eq(3)").find('select:eq(0)').val(),$lastRow.find("td:eq(4)").find('input:eq(0)'),$lastRow.find("td:eq(5)").find('input:eq(0)'),$lastRow.find("td:eq(6)").find('input:eq(0)'));	
			}
			
			
		});
	}
}


 /*CPF PAY OUT INCOME*/
 
function CpfPayoutRepSrch(tbl,datatbl){
		   
	
		var srchCpfLifeParams="";
		srchCpfLifeParams = "&selSrchCPFLifeRtmntSum="+encodeURIComponent(escape(""));
		datatbl.clear().draw(); 
		var parameter = "DBCALLFOR=CPFPAYOUT_SEARCH"+srchCpfLifeParams;
		
		ajaxCall(parameter,servletName,function(Data){
		var retval = Data;
		 
		for ( var val in retval) {
		var tabdets = retval[val];
		
		  
		if (tabdets["SESSION_EXPIRY"]) {
			window.location = BASE_URL +  SESSION_EXP_JSP;
			return;
		}
		
		if (tabdets["DB_ERROR"]) {
			window.location = BASE_URL +  DB_EXP_JSP;
			return;
		}
		
		for ( var tab in tabdets) {
			
		
			if (tabdets.hasOwnProperty(tab)) {	
				var key = tab;
				var value = tabdets[tab];
				  
				if (key == "CPFPAYOUT_SEARCH"){ 
			       
					//("key == CPFACCTYPE_SEARCH");
					for ( var cont in value) {
						if (value.hasOwnProperty(cont)) { 
							
							var contvalue = value[cont]; 
						 
							getCpfLifePayoutRepRows(tbl,datatbl,contvalue); 
							
						}
					}
					
					 				
								
				}
				
			}
		}
		}
		});

}
/*Populate Data */
function getCpfLifePayoutRepRows(tbl,datatbl,dataset){ 
	
var cell0 = '<span></span>'+
'<input type="hidden" name="txtFldCpfLifePayMode" readonly="true" value="'+INS_MODE+'" class="fipaMode"/><input type="hidden" name="txtFldCpfLifePayId">';
 
var cell1 = '<input  type="text" name="selCPFLifeRtmntSum"  onmouseover="fipaTooltip(this);" class="form-control editable"   maxlength="20" style="width: 80px;background:transparent;border:none"/> ';
 
var cell2 = '<input type="text" name="txtFldCpfLifePayoutYr" class="form-control editable"  onmouseover="fipaTooltip(this);" style="width: 80px;background:transparent;border:none"/>'; 

var cell3 = '<input type="text" name="txtFldCpfLifeMonthly" class="form-control editable"  onmouseover="fipaTooltip(this);" style="background:transparent;border:none"/>';

var cell4 = '<input type="text" name="txtFldCpfLifeAnnualy" class="form-control editable"   onmouseover="fipaTooltip(this);" style="background:transparent;border:none"/>';


datatbl.row.add( [cell0,cell1,cell2,cell3,cell4] ).draw( false );

var rowCount = $('#'+tbl+' tbody tr:visible').length;	
rowCount =  (rowCount == 0) ? $('#'+tbl+'  tbody tr').length : rowCount;
var $lastRow = $("#"+tbl+" tbody tr:last");	

$lastRow.find("td:first").find('span').text(rowCount);  

$lastRow.find("td:eq(1)").find("input:first").attr('id',"radcpfLifePay"+$lastRow.index())
.parent().find('label').attr('for',"radcpfLifePay"+$lastRow.index()); 

applyEventHandlers(); 

 

if(dataset != null){
	
	rowCount = $('#'+tbl+' tbody tr').length;	
	

	$lastRow.find("td:first").find('span').text(rowCount); 
	
  var infoDetsArr = new Array();
	 
	for(var data in dataset){
		var col = dataset[data];
		
		switch(data){
		
		case "pid": 
			$lastRow.find("td:eq(0)").find('input:eq(1)').val(col); 
			break;
			
		case "retScheme":  
			$lastRow.find("td:eq(1)").find('input:eq(0)').val(col).prop("readonly",true);
			break;
			
		case "payoutYear": 
			$lastRow.find("td:eq(2)").find('input:eq(0)').val(col).prop("readonly",true); 
			break;
		 
		case "monthlyAmt": 
			$lastRow.find("td:eq(3)").find('input:eq(0)').val(col).prop("readonly",true); 
			break;
		 
		case "yearlyAmt": 
			$lastRow.find("td:eq(4)").find('input:eq(0)').val(col).prop("readonly",true); 
			break; 
		
		}			  
	}
	} 
$lastRow.find("input").prop("readonly",true);

}