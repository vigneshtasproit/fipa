 
/**
 * CPF Additions & Deduction Script
 */ 

/*Datatable Initialisation*/
//var cpfAccAddDedTable = $('#cpfAccAddDedTable').DataTable( {
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
//  	             {"className": "dt-head-center text-center",targets: [0,1,2,3,4,5,6,7,8,9,10,11],"orderable": false,"searchable": false}],		 
//		 fnDrawCallback: function(oSettings) {
//			 if (oSettings._iDisplayLength > oSettings.fnRecordsDisplay()) { 
//				 
//		   }  
//		 }, 
//}).draw();
	


$("#cpfCancelbtn").on("click",function(){
	$("#txtFldDlgCADApplicant,#selDlgCADTypesOfTrans,#selDlgCADCpfAcctype").removeClass("mandatoryFillFlds");
	$("#txtFldDlgCADApplicant,#selDlgCADTypesOfTrans,#selDlgCADCpfAcctype").qtip('disable');
	$("#txtFldDlgCADApplicant,#selDlgCADTypesOfTrans,#selDlgCADCpfAcctype").qtip('destroy',true);
	adctRdlyflds(INS_MODE);  
   	getCADRows(null); 
	$('#cpfAddDed_Dialog').modal('hide'); 
});

/*Add Row Click */
$("#CpfADARow").on("click",function(){
	//if(!valadctTbl())return; 
			adctClearFlds();
			
			$("#txtFldDlgCADPkid").val(makeid(17));
			showFIPAModel('cpfAddDed_Dialog','CPF Additions & Deduction Details');   
			  $("#lifeplannamediv").addClass("hidden");
			  $("#lifepolicynodiv").addClass("hidden");
//			$("#cpfAddDed_Dialog").find("input[id=txtFldDlgCADMode]").val("I");//instant save added line
			$('#cpfAddDed_Dialog').on('shown.bs.modal', function () {
//				$("#cpfAddDed_Dialog").find(".modal-footer").find("button:eq(0)").text("OK");
				$("#cpfAddDed_Dialog").find("select[id=txtFldDlgCADApplicant]").focus();
				$("#cpfAddDed_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
						if(!validateadctDetails())return;
					   	adctRdlyflds(INS_MODE);  
					   	getCADRows(null); 
						$('#cpfAddDed_Dialog').modal('hide'); 
				  });  
			});
			
			
});



/*Populate Data */
function getCADRows(dataset){  
	 
var cell0 = '<span></span>'+
'<input type="hidden" name="txtFldCADMode" readonly="true" value="'+INS_MODE+'" class="fipaMode"/><input type="hidden" name="cdPkid"><input type="hidden"  name="txtFldCADRefId">';

var cell1 = '<div class="checkbox checkbox-primary text-center"><input type="checkbox" name="radadctSelect"/><label>&nbsp;</label></div>'; 
 
var cell2 ='<select name="txtFldCADApplicant" id="txtFldCADApplicant"  class="form-control editable"> </select>';

var cell3 ='<select name="selCdApplicantType" id="selCdApplicantType"  class="form-control editable"> </select>';

  
var cell4 ='<select name="selCADType" id="selCADType" class="form-control editable"> </select>'+
'<input type="hidden" name="txtLifeCpfPlanName" id="txtLifeCpfPlanName"  />'+
'<input type="hidden" name="txtLifeCpfPolNo" id="txtLifeCpfPolNo"  /><div id="spanplanname" class="blueStrong"></div><div id="spanpolno" class="blueStrong"></div>'+
'<input type="hidden" name="txtFldCADYrstoRetOrTer"  />'+
'<input type="hidden" name="txtFldCADChildName"  />';
//description 
//<!--changes done 19/06/2019 -->
var cell5 ='<select name="selCADTypesOfTrans" id="selCADTypesOfTrans"  class="form-control editable"> </select>';
  
var cell6 = '<input type="hidden" name="txtCADCpfAcctype" id="txtCADCpfAcctype"  />'+
			      '<select  name="selCADCpfAcctype" id="selCADCpfAcctype" onmouseover="fipaTooltip(this);"  class="form-control editable"></select>';
  
var cell7 = '<input type="hidden" name="txtFldCADPerFrom" maxlength="10"  id="txtFldCADPerFrom" onmouseover="fipaTooltip(this);" class="form-control editable" maxlength="10"/>'+
'<input type="text" name="txtFldCADAgeFrom" class="form-control editable"/>';
  
var cell8 = '<input type="hidden" name="txtFldCADPerTo" maxlength="10" id="txtFldCADPerTo" onmouseover="fipaTooltip(this);" class="form-control editable" maxlength="10"/>'+
'<input type="text" name="txtFldCADAgeTo" class="form-control editable"/>';
  
var cell9 = '<input type="text" name="txtFldCADAmt" id="txtFldCADAmt" onmouseover="fipaTooltip(this);" class="form-control editable"/>';
  
var cell10 ='<select name="selCADPayTerm" id="selCADPayTerm"  class="form-control editable"> </select>';
  
var cell11 ='<select name="selCADRetrAccAge" id="selCADRetrAccAge"  class="form-control editable"> </select>'+
'<input type="hidden" name="txtFldCADCrtdBy"/><input type="hidden" name="txtFldCADCrtdDate"/>';
 

cpfAccAddDedTable.row.add( [cell0,cell1,cell2,cell3,cell4,cell5,cell6,cell7,cell8,cell9,cell10,cell11] ).draw( false );


var $lastRow = $("#cpfAccAddDedTable tbody tr:last");	
var rowCount = $('#cpfAccAddDedTable tbody tr:visible').length;
rowCount = (rowCount == 0 ) ? $('#cpfAccAddDedTable tbody tr').length : rowCount;
$lastRow.find("td:first").find('span').text(rowCount); 

$lastRow.find("td:eq(1)").find("input:first").click(function(){
	selectSingleRow(this);
})

$lastRow.find("td:eq(1)").find("input:first").attr('id',"radadct"+$lastRow.index())
.parent().find('label').attr('for',"radadct"+$lastRow.index());


$lastRow.find("td:eq(0)").find('input:eq(1)').val($("#txtFldDlgCADPkid").val());

var sel1 = $("#txtFldDlgCADApplicant > option").clone();
$lastRow.find("td:eq(2)").find('select:eq(0)').append(sel1);
$lastRow.find("td:eq(2)").find('select:eq(0)').val($("#txtFldDlgCADApplicant").val());
$lastRow.find("td:eq(2)").find('select:eq(0)').on("change",function(){
	 changeOnCADType($(this));
//	 reverseCpfSync($lastRow);
});
 


var seltype = $("#selDlgCADApplicantType > option").clone();
$lastRow.find("td:eq(3)").find('select:eq(0)').append(seltype);
$lastRow.find("td:eq(3)").find('select:eq(0)').val($("#selDlgCADApplicantType").val());
$lastRow.find("td:eq(3)").find('select:eq(0)').on("change",function(){
//	reverseCpfSync($lastRow);	
});
 

var sel2 = $("#selDlgCADType > option").clone();
$lastRow.find("td:eq(4)").find('select:eq(0)').append(sel2);
$lastRow.find("td:eq(4)").find('select:eq(0)').val($("#selDlgCADType").val());

if($lastRow.find("td:eq(4)").find('select:eq(0)').val() == "Withdrawal after Retirement"){
	$lastRow.find("td:eq(4)").find('input:eq(2)').val($('#cpfAddDed_Dialog #txtFldDlgCpfRetrmntPrcnt').val());
}else if($lastRow.find("td:eq(4)").find('select:eq(0)').val() == "Withdrawal for Education"){
	$lastRow.find("td:eq(4)").find('input:eq(2)').val($('#cpfAddDed_Dialog #selDlgCpfYrToRet').val());
	$lastRow.find("td:eq(4)").find('input:eq(3)').val($('#cpfAddDed_Dialog #selDlgCPFNameOfChild').val());
}

var sel3 = $("#selDlgCADTypesOfTrans > option").clone();
$lastRow.find("td:eq(5)").find('select:eq(0)').append(sel3);
$lastRow.find("td:eq(5)").find('select:eq(0)').val($("#selDlgCADTypesOfTrans").val()); 


var cpfacctypes = $("#selDlgCADCpfAcctype > option").clone();
$lastRow.find("td:eq(6)").find('select:eq(0)').append(cpfacctypes);
$lastRow.find("td:eq(6)").find('input:eq(0)').val($("select#selDlgCADCpfAcctype option:selected").val());
$lastRow.find("td:eq(6)").find('select:eq(0)').val($("select#selDlgCADCpfAcctype").val());
$lastRow.find("td:eq(6)").find('select:eq(0)').on("change",function(){
//	reverseCpfSync($lastRow);	
});
	
$lastRow.find("td:eq(7)").find('input:eq(0)').val($("#txtFldDlgCADPerFrom").val());
$lastRow.find("td:eq(7)").find('input:eq(0)').datetimepicker(dateOptions).on("change",function(){
	 checkDateFormat($(this));  
	 if(!dhtmlChkDateValidation($lastRow.find("td:eq(7)").find('input:eq(0)'),$lastRow.find("td:eq(8)").find('input:eq(0)'),"To Date should greater than the From Date")); 
}); 

$lastRow.find("td:eq(7)").find('input:eq(1)').val($("#txtFldDlgCADAgeFrom").val());

$lastRow.find("td:eq(8)").find('input:eq(0)').val($("#txtFldDlgCADPerTo").val());
$lastRow.find("td:eq(8)").find('input:eq(0)').datetimepicker(dateOptions).on("change",function(){
	 checkDateFormat($(this));  
	 if(!dhtmlChkDateValidation($lastRow.find("td:eq(7)").find('input:eq(0)'),$lastRow.find("td:eq(8)").find('input:eq(0)'),"To Date should greater than the From Date")); 
});
$lastRow.find("td:eq(8)").find('input:eq(1)').val($("#txtFldDlgCADAgeTo").val());

$lastRow.find("td:eq(9)").find('input:eq(0)').val($("#txtFldDlgCADAmt").val()); 
$lastRow.find("td:eq(9)").find('input:eq(0)').addClass("applyEvntUsd");
$lastRow.find("td:eq(9)").find('input:eq(0)').on("change",function(){
//	reverseCpfSync($lastRow);	
});

var sel4 = $("#selDlgCADPayTerm > option").clone();
$lastRow.find("td:eq(10)").find('select:eq(0)').append(sel4);
$lastRow.find("td:eq(10)").find('select:eq(0)').val($("#selDlgCADPayTerm").val()); 

var sel5 = $("#selDlgCADRetrAccAge > option").clone();
$lastRow.find("td:eq(11)").find('select:eq(0)').append(sel5);
$lastRow.find("td:eq(11)").find('select:eq(0)').val($("#selDlgCADRetrAccAge").val()); 



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
	crudicons(this,'cpfAccAddDedTable','SelcpfAccAddDed','CpfADERow','CpfADDRow');
			
});
//DHTML CRUD ICONS

$lastRow.find("td:eq(1)").find("input:first").click(function(){
	selectSingleRow(this);
//	DHTML CRUD ICONS
	crudicons(this,'cpfAccAddDedTable','SelcpfAccAddDed','CpfADERow','CpfADDRow');
});

if(dataset != null){

	 rowCount = $('#cpfAccAddDedTable tbody tr').length;	
	 $lastRow.find("td:first").find('span').text(rowCount);
	
			if($("#hTxtFldFnaReviewFlag").val() == "U"  || $("#hTxtFldFnaReviewFlag").val() == ""){ 
					$lastRow.find("td:eq(0)").find('input:eq(0)').val(col);
			}
			
			
	var infoDetsArr = new Array();
	
	for(var data in dataset){
		var col = dataset[data];
		
		switch(data){
		
		case "cdPkid": 
			$lastRow.find("td:eq(0)").find('input:eq(1)').val(col); 
			break;
			
		case "cdRefId": 
			$lastRow.find("td:eq(0)").find('input:eq(2)').val(col); 
			if(!isEmpty(col)){$lastRow.find("td:eq(0)").find('input:eq(2)').addClass("rowrefid");
			//this line is added for Life Insurance Sync
			$lastRow.attr("rowrefid",col);}
			
			break;
			
		case "cdApplicant": 
			selectNullvalChk($lastRow.find("td:eq(2)"),col);
			break;
			
		case "cdApplicantType":  
			selectNullvalChk($lastRow.find("td:eq(3)"),col); 
			break;
			
		
		 
		case "cdDeductionType": 
			selectNullvalChk($lastRow.find("td:eq(4)"),col);
			break;
			
		case "yrsToRetOrTer":  
			$lastRow.find("td:eq(4)").find('input:eq(2)').val(col); 
			break;
			
		case "cpfChildName":  
			$lastRow.find("td:eq(4)").find('input:eq(3)').val(col); 
			break;
		 
		case "lifePlanName": 
			$lastRow.find("td:eq(4)").find('input:eq(0)').val(col); 
			
			var type_ = $lastRow.find("td:eq(4)").find("select:eq(0)").val();
			
			if("Life Insurance" == type_){
				$lastRow.find("td:eq(4)").find('div[id="spanplanname"]').text(isEmpty(col) ? "": "Plan Name : "+col);	
			}else if("Loan Repayment" == type_){
				$lastRow.find("td:eq(4)").find('div[id="spanplanname"]').text(isEmpty(col) ? "": "Property : "+col);
			}
			   
			
			break;
			
		case "lifePolNo": 
			$lastRow.find("td:eq(4)").find('input:eq(1)').val(col); 
			$lastRow.find("td:eq(4)").find('div[id="spanpolno"]').text(isEmpty(col) ? "": "Policy No : "+col);   
			 
			break;
			
		case "cdType": 
			selectNullvalChk($lastRow.find("td:eq(5)"),col);
			break;
			
		
			
		case "masterCpfAcctype":
			selectNullvalChk($lastRow.find("td:eq(6)"),col);
			var cols;
			var value=$("#selDlgCADCpfAcctype option[value='"+col+"']").text();
			if(value=="--SELECT--"){
				cols="";
			}else{
				cols=value;
			}
			$lastRow.find("td:eq(6)").find('input:eq(1)').val(cols); 
			break;
		
		case "periodFrom": 
			$lastRow.find("td:eq(7)").find('input:eq(0)').val(col); 
			break;
		
		case "periodTo": 
			$lastRow.find("td:eq(8)").find('input:eq(0)').val(col); 
			break;
			
			
		case "ageFrom": 
			$lastRow.find("td:eq(7)").find('input:eq(1)').val(col); 
			break;
		
		case "ageTo": 
			$lastRow.find("td:eq(8)").find('input:eq(1)').val(col); 
			break;
			
		case "cdDeductionAmt":
			$lastRow.find("td:eq(9)").find('input:eq(0)').val(col); 
			break;
			
		case "cdPaymentTerm":
			selectNullvalChk($lastRow.find("td:eq(10)"),col);
			break;
			
		case "cdTransReference":
			selectNullvalChk($lastRow.find("td:eq(11)"),col);
			break;
				 
		case "cdCrtdBy": 
			$lastRow.find("td:eq(11)").find('input:eq(0)').val(col);
			infoDetsArr.push(col);				
			break;
			
		case "cdCrtdDate":
			$lastRow.find("td:eq(11)").find('input:eq(1)').val(col);
			infoDetsArr.push(col);
			break;
			
		case "cdModBy":
			infoDetsArr.push(col);
			break;
			
		case "cdModDate":
			infoDetsArr.push(col);
			break;	
		}			 
		 
	}
	}
else{
//	DHTML CRUD ICONS
	crudicons(null,'cpfAccAddDedTable','SelcpfAccAddDed','CpfADERow','CpfADDRow');
}
  /*
//instant save added line
if(dataset == null){
	instantCpfDedAddSave($lastRow,INS_MODE);		
}
//

$lastRow.find("input[type=text]").prop("readonly",true);//instant save added line
$lastRow.find("select").prop("disabled",true);//instant save added line
*/
}

//DHTML SELECT ALL
function SelAllcpfAccAddDed(obj){
	
	if($(obj).is(":checked")){
		
		$('#cpfAccAddDedTable tbody tr').find("td:eq(1)").find("input[type=checkbox]").prop("checked",true);
		
		$("#CpfADDRow").attr("disabled",false);
		$('#cpfAccAddDedTable tbody tr').addClass("selected");
		
		var $rowCount = $('#cpfAccAddDedTable tbody tr').length;
		
		if($rowCount == 0){
			$(obj).prop("checked",false);
			/*$("#CpfADERow").attr("disabled",true);
			$("#CpfADDRow").attr("disabled",true);*/
		}else if($rowCount == 1){
			$("#CpfADERow").attr("disabled",false);
			$("#CpfADDRow").attr("disabled",false);
		}else if($rowCount > 1){
		/*	$("#CpfADERow").attr("disabled",true);*/
			$("#CpfADDRow").attr("disabled",false);
		}
		
	}else{
		
		$('#cpfAccAddDedTable tbody tr').find("td:eq(1)").find("input[type=checkbox]").prop("checked",false);
		
		$('#cpfAccAddDedTable tbody tr').removeClass("selected");
		
		/*$("#CpfADERow").attr("disabled",true);
		$("#CpfADDRow").attr("disabled",true);*/
		
	}
}


/*Edit Row Click */
$("#CpfADERow").on("click",function(){
	CpfADVRow();
});


/*View Row Click */
function CpfADVRow(){
	var isOneRowSelected=0;
	var $rowCount = $('#cpfAccAddDedTable tbody tr').length;	
	var $lastRow = $("#cpfAccAddDedTable tbody tr:last");	
	
	if($rowCount<1){ 
		applyToastrAlert("Insert rows before edit/view"); 
		return;
	} 
	
	
	/*$("#cpfAccAddDedTable tbody tr").each(function(){
		var $row = $(this);   
		$row.removeClass('selected');  
		$(this).removeAttr("style"); 
		$row.find("td").removeAttr("style");
	});*/
	
	
	
	$("#cpfAccAddDedTable tbody").find('input[name="radadctSelect"]').each(function(){ //Checkbox selection
		var $curElm=$(this);
		if($curElm.is(":checked")){ 
			isOneRowSelected++;
		}
	});
	
	
	if(isOneRowSelected > 1){ 
		applyToastrAlert("More than one rows selected.Select one row only");
		return;
	}
	
	$("#cpfAccAddDedTable tbody").find('input[name="radadctSelect"]').each(function(){ //Checkbox selection
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
	 
				 	adctRdlyflds($mode);
					adctfilldlgval($row);  
					
					setCPFObjectives($("#selDlgCADType").val());
					
					showFIPAModel('cpfAddDed_Dialog','CPF Additions & Deduction Details');  
					$("#cpfAddDed_Dialog").find(".modal-footer").find("button:eq(0)").removeClass("hidden");//instant save added line
					$('#cpfAddDed_Dialog').on('shown.bs.modal', function () {
//						$row.find("input[type=text]").prop("readonly",true);//instant save added line
//						$row.find("select").prop("disabled",true);//instant save added line
//						$("#cpfAddDed_Dialog").find(".modal-footer").find("button:eq(0)").text("Edit");
						$("#cpfAddDed_Dialog").find("select[id=txtFldDlgCADApplicant]").focus();
						$("#cpfAddDed_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
							 if(!validateadctDetails())return; 
					     		if(!isEmpty($RowId) && !($RowId==undefined)){  
					     			adctfilldomval($RowId,$row); 
					     		}  
//					     		reverseCpfSync($row);
//					     		instantCpfDedAddSave($row,UPD_MODE); //instant save added line
								$('#cpfAddDed_Dialog').modal('hide'); 
								adctClearFlds();
								crudicons(null,'cpfAccAddDedTable','SelcpfAccAddDed','CpfADERow','CpfADDRow');
							
						});
						$("#cpfAddDed_Dialog").find(".modal-footer").find("button:eq(1)").on("click",function(){
							crudicons(null,'cpfAccAddDedTable','SelcpfAccAddDed','CpfADERow','CpfADDRow');
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
$("#CpfADDRow").on("click",function(){ 
	datatableDeleteRow('cpfAccAddDedTable',cpfAccAddDedTable,'SelcpfAccAddDed','CpfADERow','CpfADDRow');   
/*//	DHTML CRUD ICONS
	var rc = cpfAccAddDedTable.row().count();
	if(rc ==0){
		$("#SelcpfAccAddDed").prop("checked",false);
		crudicons(this,'cpfAccAddDedTable','SelcpfAccAddDed','CpfADERow','CpfADDRow');
	}
//	DHTML CRUD ICONS
*/});

/*Clear Fields */
function adctClearFlds(){
	$("#cpfAddDed_Dialog").find("input[type=text]").val("");
	$("#cpfAddDed_Dialog").find("textarea").val("");
	$("#cpfAddDed_Dialog").find("select").val("");
}

/*Disabled/Readonly Fields */
function adctRdlyflds(mode){ 
	 if(mode == QRY_MODE ){
			$("#cpfAddDed_Dialog :input").prop("disabled", true); 
	 } else if((mode == INS_MODE) || (mode == UPD_MODE) ){
			$("#cpfAddDed_Dialog :input").prop("disabled", false);
	 }
}

/*Validation */
function validateadctDetails(){
	 
	 
	/*if(!(validateFocusFlds('cpfAddDed_Dialog','txtFldDlgCADApplicant', CAD_APPLICANT))) return;
	if(!(validateFocusFlds('cpfAddDed_Dialog','selDlgCADTypesOfTrans', CAD_TRANSTYPE))) return;
	if(!(validateFocusFlds('cpfAddDed_Dialog','selDlgCADCpfAcctype', CAD_ACCTYPE))) return;
		*/ 
	
	  return true; 
}
function valadctTbl(){  
	var $RowCount = cpfAccAddDedTable.rows().count();

	var valid=true;
	/*if($RowCount > 0 ){ 
		$("#cpfAccAddDedTable tbody tr").each(function(){
			var $lastRow=$(this);
			
		if(!(validateFocusDhtmlFlds($lastRow.find("td:eq(2)").find('select:eq(0)'), CAD_APPLICANT,SCREEN_CPFADDDED))){valid=false;return false;}; 
		if(!(validateFocusDhtmlFlds($lastRow.find("td:eq(5)").find('select:eq(0)'), CAD_TRANSTYPE,SCREEN_CPFADDDED))){valid=false;return false;};
		if(!(validateFocusDhtmlFlds($lastRow.find("td:eq(6)").find('select:eq(0)'), CAD_ACCTYPE,SCREEN_CPFADDDED))){valid=false;return false;};
		 
		});
	} */ 
	 return valid;
}


/*Mandatory Fields Tooltip*/ 
$("#txtFldDlgCADApplicant,#selDlgCADTypesOfTrans,#selDlgCADCpfAcctype").on("change",function(){
	if(!isEmpty($(this).val())){
	$(this).removeClass("mandatoryFillFlds");
	$(this).qtip('disable');
	$(this).qtip('destroy',true);
	}
});
 


/* Filling Model Fields*/
function adctfilldlgval($lastRow){
	  
//	  $('#cpfAddDed_Dialog #txtFldDlgCADMode').val($lastRow.find("td:eq(0)").find('input:eq(0)').val());//instant save added line
	  $('#cpfAddDed_Dialog #txtFldDlgCADPkid').val($lastRow.find("td:eq(0)").find('input:eq(1)').val());
	  $('#cpfAddDed_Dialog #txtFldDlgCADRefId').val($lastRow.find("td:eq(0)").find('input:eq(2)').val());
	  $('#cpfAddDed_Dialog #txtFldDlgCADApplicant').val($lastRow.find("td:eq(2)").find('select:eq(0)').val());
	  
	  $('#cpfAddDed_Dialog #selDlgCADApplicantType').val($lastRow.find("td:eq(3)").find('select:eq(0)').val()); 
	 
	  
	  $('#cpfAddDed_Dialog #selDlgCADType').val($lastRow.find("td:eq(4)").find('select:eq(0)').val()); 
	  
	  if($lastRow.find("td:eq(4)").find('select:eq(0)').val() == "Withdrawal after Retirement"){
			$('#cpfAddDed_Dialog #txtFldDlgCpfRetrmntPrcnt').val($lastRow.find("td:eq(4)").find('input:eq(2)').val());
		}else if($lastRow.find("td:eq(4)").find('select:eq(0)').val() == "Withdrawal for Education"){
			$('#cpfAddDed_Dialog #selDlgCpfYrToRet').val($lastRow.find("td:eq(4)").find('input:eq(2)').val());
		}
	  
	 
	  $('#cpfAddDed_Dialog #selDlgCPFNameOfChild').val($lastRow.find("td:eq(4)").find('input:eq(3)').val()); 
	  
	  $('#cpfAddDed_Dialog #selDlgCADTypesOfTrans').val($lastRow.find("td:eq(5)").find('select:eq(0)').val()); 
	  $('#cpfAddDed_Dialog #selDlgCADCpfAcctype').val($lastRow.find("td:eq(6)").find('select:eq(0)').val());  
	  $('#cpfAddDed_Dialog #txtFldDlgCADPerFrom').val($lastRow.find("td:eq(7)").find('input:eq(0)').val());
	  $('#cpfAddDed_Dialog #txtFldDlgCADPerTo').val($lastRow.find("td:eq(8)").find('input:eq(0)').val());
	  $('#cpfAddDed_Dialog #txtFldDlgCADAmt').val($lastRow.find("td:eq(9)").find('input:eq(0)').val());
	  $('#cpfAddDed_Dialog #selDlgCADPayTerm').val($lastRow.find("td:eq(10)").find('select:eq(0)').val());
	  $('#cpfAddDed_Dialog #selDlgCADRetrAccAge').val($lastRow.find("td:eq(11)").find('select:eq(0)').val()); 
	  
	  $('#cpfAddDed_Dialog #txtFldDlgCADCrtdBy').val($lastRow.find("td:eq(11)").find('input:eq(0)').val());
	  $('#cpfAddDed_Dialog #txtFldDlgCADCrtdDate').val($lastRow.find("td:eq(11)").find('input:eq(1)').val());
	  
	  $('#cpfAddDed_Dialog #txtFldDlgCADAgeFrom').val($lastRow.find("td:eq(7)").find('input:eq(1)').val());
	  $('#cpfAddDed_Dialog #txtFldDlgCADAgeTo').val($lastRow.find("td:eq(8)").find('input:eq(1)').val());

	  

	  $("#lifepolicynospan").text("");
	  $("#lifeplannamespan").text("");
	  if(!isEmpty($lastRow.find("td:eq(4)").find('input:eq(0)').val())){
		  $("#lifeplannamediv").removeClass("hidden");
		  $("#lifepolicynodiv").removeClass("hidden");
		  $("#lifepolicynospan").text($lastRow.find("td:eq(4)").find('input:eq(1)').val());
		  $("#lifeplannamespan").text($lastRow.find("td:eq(4)").find('input:eq(0)').val());
	  }else{
		  $("#lifeplannamediv").addClass("hidden");
		  $("#lifepolicynodiv").addClass("hidden");
	  }
}

/* Filling Table Fields*/
function adctfilldomval($RowId,$row){
	
	$row.find("td:eq(2)").find('select:eq(0)').val($("#txtFldDlgCADApplicant").val()); 
	$row.find("td:eq(3)").find('select:eq(0)').val($("#selDlgCADApplicantType").val());
	
	if($("#selDlgCADType").val() == "Withdrawal after Retirement"){
		$row.find("td:eq(4)").find('input:eq(2)').val($('#cpfAddDed_Dialog #txtFldDlgCpfRetrmntPrcnt').val());
	}else if($("#selDlgCADType").val() == "Withdrawal for Education"){
		$row.find("td:eq(4)").find('input:eq(2)').val($('#cpfAddDed_Dialog #selDlgCpfYrToRet').val());
	}
	   
	$row.find("td:eq(4)").find('input:eq(3)').val($('#cpfAddDed_Dialog #selDlgCPFNameOfChild').val()); 
	
	$row.find("td:eq(4)").find('select:eq(0)').val($("#selDlgCADType").val()); 
	$row.find("td:eq(5)").find('select:eq(0)').val($("#selDlgCADTypesOfTrans").val()); 
 	$row.find("td:eq(6)").find('select:eq(0)').val($("#selDlgCADCpfAcctype").val()); 
	$row.find("td:eq(7)").find('input:eq(0)').val($("#txtFldDlgCADPerFrom").val()); 
	$row.find("td:eq(8)").find('input:eq(0)').val($("#txtFldDlgCADPerTo").val()); 
	
	$row.find("td:eq(7)").find('input:eq(1)').val($('#cpfAddDed_Dialog #txtFldDlgCADAgeFrom').val());
	$row.find("td:eq(8)").find('input:eq(1)').val($('#cpfAddDed_Dialog #txtFldDlgCADAgeTo').val());

	$row.find("td:eq(9)").find('input:eq(0)').val($("#txtFldDlgCADAmt").val()); 
	$row.find("td:eq(10)").find('select:eq(0)').val($("#selDlgCADPayTerm").val());
	$row.find("td:eq(11)").find('select:eq(0)').val($("#selDlgCADRetrAccAge").val());  
//	$row.find("input[type=text]").prop("readonly",true);//instant save added line
//	$row.find("select").prop("disabled",true);//instant save added line
}
/*###########################################################################################################################################################*/


//instant save added line
$("#cpfAddDed_Dialog").find("input,select,textarea").on("change",function(){
	$("#cpfAddDed_Dialog").find(".modal-footer").find("button:eq(0)").removeClass("hidden");
});



$("#txtFldDlgCADApplicant").on("change",function(){
	 changeOnCADType($(this));
});


function changeOnCADType(elmid){
	var $elmVal=$(elmid).val();
	if(!isEmpty($elmVal)){ 
		 var selectedIndex=$("#txtFldDlgCADApplicant option").index($("#txtFldDlgCADApplicant option:selected"));
	if(selectedIndex == 1){
		$("#cpfAddDed_Dialog #selDlgCADApplicantType").val("Self");
	}else if(selectedIndex == 2){
		$("#cpfAddDed_Dialog #selDlgCADApplicantType").val("Spouse");
	}else {
		$("#cpfAddDed_Dialog #selDlgCADApplicantType").val("");
	} 
	}else{
		$("#cpfAddDed_Dialog #selDlgCADApplicantType").val("");
	}
}

$("#txtFldDlgCADPerFrom").change(function(){
	checkDateFormat($(this))
	if(!chkFromToDateValidation('txtFldDlgCADPerFrom','txtFldDlgCADPerTo',"Period To Date should greater than the Period From Date")); 
});

/*$("#txtFldDlgCADPerFrom").change(function(){
	 checkDateFormat($(this));
});*/

$("#txtFldDlgCADPerTo").change(function(){    
	checkDateFormat($(this));
	if(!chkFromToDateValidation('txtFldDlgCADPerFrom','txtFldDlgCADPerTo',"Period To Date should greater than the Period From Date")); 
}); 

/*$("#txtFldDlgCADPerTo").change(function(){    
 checkDateFormat($(this));
}); */
 
$('#CADPerTopicker').change(function(){  
   	if(!chkFromToDateValidation('txtFldDlgCADPerFrom','txtFldDlgCADPerTo',"Period To Date should greater than the Period From Date")); 
});
  
$('#CADPerFrmpicker').change(function(){   
   	if(!chkFromToDateValidation('txtFldDlgCADPerFrom','txtFldDlgCADPerTo',"Period To Date should greater than the Period From Date")); 
});
   
function reverseCpfSync($row){
	
	//Retirement Data 
	var $rowref=$row.find("td:eq(0)").find("input.rowrefid");
	var $rowrefval=$rowref.val(); 
	
		if(isValidObject($rowref)){ 
	
	var syncOn=$rowrefval.substring(0,3); 
	 var ownership=$row.find("td:eq(3)").find('select:eq(0)').val();
	 
	 var cpfacc;
	 var paymentmtd=$row.find("td:eq(6)").find('input:eq(0)').val(); 
	 if(paymentmtd == "Ordinary"){cpfacc="CPFOA";}
	 else if(paymentmtd == "Special"){cpfacc="CPFSA";}
	 else if(paymentmtd == "Medisave"){cpfacc="CPFMA";}
	 else if(paymentmtd == "Retirement"){cpfacc="CPFRA";}
	 else {cpfacc="";}
	 
	
	 var amtinv=Number($row.find("td:eq(9)").find('input:eq(0)').val()); 
	
	if(syncOn == "INV"){
		$("#fnaInvestmentTbl tbody").find("tr").find("td:eq(0)").find("input.rowrefid").each(function(){ 
			if($rowrefval == $(this).val()){ 
			applyToastrAlert("CPF Addition and Deduction data will be reflected back to Investment Screen !"); 
			 $(this).closest("tr").find("td:eq(10)").find('select:eq(0)').val(cpfacc);//Payment method
			 $(this).closest("tr").find("td:eq(2)").find('select:eq(0)').val(ownership); //ownership
			 $(this).closest("tr").find("td:eq(9)").find('input:eq(0)').val(amtinv);//amount invested 
			 //Retirement table change
			 var $rowref=$(this).find("td:eq(0)").find("input.rowrefid");
		 		if(isValidObject($rowref)){ 
//			 			syncInvestTblEditRow($row);
			 		
		 		}
			}
		});
	}
	 
	
	if(syncOn == "PRO"){
		$("#fnaPropOwnTblByCPF tbody").find("tr").find("td:eq(0)").find("input.rowrefid").each(function(){  
			
			if($rowrefval == $(this).val()){
				 
			applyToastrAlert("CPF Addition and Deduction data will be reflected back to Property Ownership Screen !");
			var exits=Number($(this).closest("tr").find("td:eq(9)").find('input:eq(0)').val());
			
			if(ownership =="Self"){
				 if(!isEmpty(exits)){
					 $(this).closest("tr").find("td:eq(11)").find('input:eq(0)').val(exits+amtinv);//amount invested  
				 }else{
					 $(this).closest("tr").find("td:eq(11)").find('input:eq(0)').val(amtinv);//amount invested
				 }
			}
			
			if(ownership =="Spouse"){
				 if(!isEmpty(exits)){
					 $(this).closest("tr").find("td:eq(13)").find('input:eq(0)').val(exits+amtinv);//amount invested 
				 }else{
					 $(this).closest("tr").find("td:eq(13)").find('input:eq(0)').val(amtinv);//amount invested
				 }
			} 
			 $(this).closest("tr").find("td:eq(4)").find('select:eq(0)').val(ownership); //ownership 
			 
			 //Retirement table change 
			 var $rowref=$(this).find("td:eq(0)").find("input.rowrefid");
		 		if(isValidObject($rowref)){ 
//		 			syncPropTblEditRow($row);
		 		}else{
		 			syncPropTblRow();
		 		}
		 		
			}
		});
	}
	
	
		}
		
		if(isValidObject($("#lipPremiumsrc").attr("rowrefid"))){
		//Life Insurance reverse sync
		var premsrcrowref=$("#lipPremiumsrc").attr("rowrefid").length;
		if(premsrcrowref >0){
			applyToastrAlert("CPF Addition and Deduction data will be reflected back to Life Insurance Screen !");
			$("#lipPremiumsrc").val(cpfacc);
			$("#lipSa").val(amtinv);
			$("#lipOwner").val(ownership); 
			
			 //Retirement table change
			 var $rowref=$("#sellipCoveragetype").attr("rowrefid").length;
			 if($rowref > 0){	
				 SyncLifeToRetEdit();
		 	 }	
		}
	 }
}

 



function getCPFContribution(dob,monthlywage) {
	
	var contirb = [0,0,0,0,0];
	var employeecont = "",employercontrib="";


	if (!(isEmpty(dob))) {
		
		showLoader();
		
		var parameter = "DBCALLFOR=GET_CPF_CONTRIB&strdob="+ dob+"&monthlywage="+monthlywage ;
		
		$.ajax({
			type : "POST",
			url : servletName,
			data : parameter,
			dataType : "json",
			async : false,
			cache:false,
			success : function(data,statusText) {	

				var retval = data;

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
				 
					
					contirb[0] = isNaN(Number(tabdets["cpfEmployeeContrib"]))?"0":Number(tabdets["cpfEmployeeContrib"]);
					contirb[1] = isNaN(Number(tabdets["cpfEmployerContrib"]))?"0":Number(tabdets["cpfEmployerContrib"]);
					contirb[2] = isNaN(Number(tabdets["cpfMonthlyLimit"]))?"0":Number(tabdets["cpfMonthlyLimit"]);
					contirb[3] = isNaN(Number(tabdets["cpfAnnualLimit"]))?"0":Number(tabdets["cpfAnnualLimit"]);
					contirb[4] = isNaN(Number(tabdets["cpfAddlAmt"]))?"0":Number(tabdets["cpfAddlAmt"]);


				}
			
				
			},
 
			error : function(request, status, error) {
				applyErrorToastrAlert("Please Contact System Administrator!");
				hideLoader();				
			}
		});
	}
	
	
	return contirb;
	
}


$("#btnCPFContrib").on("click",function(){
	calcCPFContribution();
});

function calcCPFContribution(){

	var selfdob = $("#dfSelfDob").val();
	var slfow = $("#incsrcSelfEmpMonthly").val();;
	var slfOW_data=$("#incsrcSelfEmpMonthly").val();//self OW from Exp fd flow
	slfOW_data = Number(isEmpty(slfOW_data) ? "0" : slfOW_data);
	
	var slfaw = $("#incsrcSelfEmpAddlwage").val();
	var slfAW_data=Number(isEmpty(slfaw) ? "0" : slfaw);
	
	if(!isEmpty(selfdob) && !isEmpty(slfow)){
		
		var arr = getCPFContribution(selfdob,slfOW_data);
		
		var ee = arr[0];
		var er = arr[1];
		var ml = arr[2];
		var al = arr[3];
		var addl = arr[4];
		
		slfAW_data = (addl > slfAW_data ? slfAW_data : addl);
		ml =  slfOW_data > ml ? ml : slfOW_data;
		
		var selftotcontrib = ( Number( ml ) * 12 ) + Number( slfAW_data );
		
		$("input[name=ccEmpleContrbSelf]").val(isNaN(Number(roundNumber(ee * selftotcontrib)))?"0":Number(roundNumber(ee * selftotcontrib)));
		$("input[name=ccEmplrContrbSelf]").val(isNaN(Number(roundNumber(er * selftotcontrib)))?"0":Number(roundNumber(er * selftotcontrib))); 
		
		
	}
	
	
//	if(!isValidObject(ee)){ee="";}
//	if(!isValidObject(er)){er="";}
	
	
	var spsdob = $("#dfSpsDob").val();
	var spsow = $("#incsrcSpsEmpMonthly").val();
	//var spsOW_data=Number($("#incsrcSpsEmpMonthly").val()) * 12;//spouse OW from Exp fd flow
	var spsOW_data=$("#incsrcSpsEmpMonthly").val();
	spsOW_data=Number(isEmpty(spsOW_data) ? "0" : spsOW_data);
	var spsaw = $("#incsrcSpsEmpAddlwage").val();
	var spsAW_data=Number(isEmpty(spsaw) ? "0" : spsaw);
	if(!isEmpty(spsdob) && !isEmpty(spsow)){
		
		var arr1 = getCPFContribution(spsdob,spsOW_data);
		
		
		var ee1 = arr1[0];
		var er1 = arr1[1];
		var ml1 = arr1[2];
		var al1 = arr1[3];
		var addl1 = arr1[4];
		
	    if(!isValidObject(ee1)){ee1="";}
		if(!isValidObject(er1)){er1="";}
		if(!isValidObject(ml1)){er1="";}
		if(!isValidObject(al1)){er1="";}
		if(!isValidObject(addl1)){addl1="";}
		
		
		spsAW_data = (addl1 > spsAW_data ? spsAW_data : addl1);
		ml1 =  spsOW_data > ml1 ? ml1 : spsOW_data;
		
		var spsftotcontrib = ( Number( ml1 ) * 12 ) + Number( spsAW_data );
		
		
		$("input[name=ccEmpleContrbSps]").val(isNaN(Number(roundNumber(ee1 * spsftotcontrib )))?"0":Number(roundNumber(ee1 * spsftotcontrib )));
		$("input[name=ccEmplrContrbSps]").val(isNaN(Number(roundNumber(er1 * spsftotcontrib )))?"0":Number(roundNumber(er1 * spsftotcontrib ))); 
		 
		
		
	}
	
	callSumOfCpfMth();
	

}


var cpf_proj_oa1,cpf_proj_sa1,cpf_proj_ma1;
var cpf_proj_ra1,cpf_proj_oa2,cpf_proj_sa2,cpf_proj_ma2;

$("#btnCPFProjection").on("click",function(){

	setTimeout(function(){
		showLoader();
	}, 200);
	
	var fnaId = $("#fnaId").val();
	

	 $('#cpfProjection_Dlg').modal({
		  backdrop: 'static',
		  keyboard: false,
		  show:false
	});	
	
	
	
	if ($.fn.DataTable.isDataTable( '#cpf_proj_oa1,#cpf_proj_sa1,#cpf_proj_ma1,#cpf_proj_ra1,#cpf_proj_oa2,#cpf_proj_sa2,#cpf_proj_ma2') ) {
		cpf_proj_oa1.destroy();
		cpf_proj_sa1.destroy();
		cpf_proj_ma1.destroy();
		cpf_proj_ra1.destroy();
		
		cpf_proj_oa2.destroy();
		cpf_proj_sa2.destroy();
		cpf_proj_ma2.destroy();
	}
	
	var oa_ds=[],sa_ds=[],ma_ds=[];
	var ra_ds=[],oar_ds=[],sar_ds=[],mar_ds=[];
	var before_retr_data = [],after_retr_data=[];
	
	
	var cpf_oa_header=[
	                {"data":"SELF_AGE","title":"Self Age","className":"dt-head-center"},
	                {"data":"SELF_OA_BAL","title":"Opening Balance",render: $.fn.dataTable.render.number(',', '.', 0, '$'),"className":"dt-head-center"},
	                {"data":"SELF_OA_ANNLCONTRIB","title":"Annual Contribution",render: $.fn.dataTable.render.number(',', '.', 0, '$'),"className":"dt-head-center"},
	                {"data":"SELF_OA_ADDITION","title":"Annual Addition",render: $.fn.dataTable.render.number(',', '.', 0, '$'),"className":"dt-head-center"},
	                {"data":"SELF_OA_DEDUCTION","title":"Annual Deduction",render: $.fn.dataTable.render.number(',', '.', 0, '$'),"className":"dt-head-center"},
	                {"data":"SELF_OA_ENDBAL","title":"End Balance",render: $.fn.dataTable.render.number(',', '.', 0, '$'),"className":"dt-head-center"},
	                ];
	
	var cpf_sa_header=[
		                {"data":"SELF_AGE","title":"Self Age","className":"dt-head-center"},
		                {"data":"SELF_SA_BAL","title":"Opening Balance",render: $.fn.dataTable.render.number(',', '.', 0, '$'),"className":"dt-head-center"},
		                {"data":"SELF_SA_ANNLCONTRIB","title":"Annual Contribution",render: $.fn.dataTable.render.number(',', '.', 0, '$'),"className":"dt-head-center"},
		                {"data":"SELF_SA_ADDITION","title":"Annual Addition",render: $.fn.dataTable.render.number(',', '.', 0, '$'),"className":"dt-head-center"},
		                {"data":"SELF_SA_DEDUCTION","title":"Annual Deduction",render: $.fn.dataTable.render.number(',', '.', 0, '$'),"className":"dt-head-center"},
		                {"data":"SELF_SA_ENDBAL","title":"End Balance",render: $.fn.dataTable.render.number(',', '.', 0, '$'),"className":"dt-head-center"},
		                ];
	
	var cpf_ma_header=[
		                {"data":"SELF_AGE","title":"Self Age","className":"dt-head-center"},
		                {"data":"SELF_MA_BAL","title":"Opening Balance",render: $.fn.dataTable.render.number(',', '.', 0, '$'),"className":"dt-head-center"},
		                {"data":"SELF_MA_ANNLCONTRIB","title":"Annual Contribution",render: $.fn.dataTable.render.number(',', '.', 0, '$'),"className":"dt-head-center"},
		                {"data":"SELF_MA_ADDITION","title":"Annual Addition",render: $.fn.dataTable.render.number(',', '.', 0, '$'),"className":"dt-head-center"},
		                {"data":"SELF_MA_DEDUCTION","title":"Annual Deduction",render: $.fn.dataTable.render.number(',', '.', 0, '$'),"className":"dt-head-center"},
		                {"data":"SELF_MA_ENDBAL","title":"End Balance",render: $.fn.dataTable.render.number(',', '.', 0, '$'),"className":"dt-head-center"},
		                ];
	
	var cpf_ra_header=[
		                {"data":"SELF_AGE","title":"Self Age","className":"dt-head-center"},
		                {"data":"SELF_RA_BAL","title":"Opening Balance",render: $.fn.dataTable.render.number(',', '.', 0, '$'),"className":"dt-head-center"},
		                {"data":"SELF_RA_ADDITION","title":"Annual Addition",render: $.fn.dataTable.render.number(',', '.', 0, '$'),"className":"dt-head-center"},
		                {"data":"SELF_RA_DEDUCTION","title":"Annual Deduction",render: $.fn.dataTable.render.number(',', '.', 0, '$'),"className":"dt-head-center"},
		                {"data":"SELF_RA_ENDBAL","title":"End Balance",render: $.fn.dataTable.render.number(',', '.', 0, '$'),"className":"dt-head-center"},
		                ];
	
	$('#cpfProjection_Dlg').on('shown.bs.modal', function() {
//		setTimeout(function(){
//			hideLoader();
//		}, 300);
	});
	var parameter = "DBCALLFOR=GET_CPF_PROJECTION&strFnaId="+ fnaId ;
//	alert("Please wait... CPF Projection is generating...");
//	console.log(parameter);
//	var ajax_succ=false;
	
	$.ajax({
		type : "POST",
		url : servletName,
		data : parameter,
		dataType : "json",
		async : false,
		cache:false,
		success : function(data,statusText) {	
			
			
			 $('#cpfProjection_Dlg').modal("show");
			 
			 
			var retval = data;

//			hideLoader();

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
				
				var age = Number(tabdets["SELF_AGE"]);
				
				
//				console.log(tabdets["FNA_ID"] + " <=> " + age );
				
				if( age <= 54){
					oa_ds.push(tabdets);
					sa_ds.push(tabdets);
					ma_ds.push(tabdets);
					
					
					
					before_retr_data.push({"AGE":age,
											"OA":tabdets["SELF_OA_BAL"],
											"OA_END":tabdets["SELF_OA_ENDBAL"],
											"SA":tabdets["SELF_SA_BAL"],
											"SA_END":tabdets["SELF_SA_ENDBAL"],
											"MA":tabdets["SELF_MA_BAL"],
											"MA_END":tabdets["SELF_MA_ENDBAL"]
										});
				}
				
				if(age > 54){
					ra_ds.push(tabdets);
					oar_ds.push(tabdets);
					sar_ds.push(tabdets);
					mar_ds.push(tabdets);
					
					after_retr_data.push({"AGE":age,
						"OA":tabdets["SELF_OA_BAL"],
						"OA_END":tabdets["SELF_OA_ENDBAL"],
						"SA":tabdets["SELF_SA_BAL"],
						"SA_END":tabdets["SELF_SA_ENDBAL"],
						"MA":tabdets["SELF_MA_BAL"],
						"MA_END":tabdets["SELF_MA_ENDBAL"]
					});
				}
				
				

			}
			
			
			
			cpf_proj_oa1=$('#cpf_proj_oa1').DataTable( { 
				destroy: true,
			 	responsive: false,         
			    ordering: false,
			    searching: false,
			    scrollY:  "65vh",
			    scrollX: true,
		 	    scrollCollapse:true,
			    paging:false, 
			    filter:false,     
			    dom: '<<"top" <"header_oa"> ip>flt>', 
			    columns: cpf_oa_header,  
		        data:oa_ds,
		        fixedColumns:   {rightColumns: 1 },
		       	columnDefs: [
		       	             {"className": "dt-right","targets": "_all","orderable": false,"searchable": false},
		       	             {"targets" : [5],"fnCreatedCell":function(nTd, sData, oData, iRow, iCol){
		       	            	if ( sData < "0" ) {
		                            $(nTd).css('color', 'red');
		                            $(nTd).css('font-weight', 'bold');
		       	            	}
		       	            	 
		       	             }}
		       	             ],
				fnDrawCallback: function(oSettings) { }    	
			}).draw();				
			$("div.header_oa").html('<h3><center>Ordinary</center></h3>');
			
			
			cpf_proj_sa1=$('#cpf_proj_sa1').DataTable( { 
				destroy: true,
			 	responsive: false,         
			    ordering: false,
			    searching: false,
			    scrollY:  "65vh",
			    scrollX: true,
		 	    scrollCollapse:true,
			    paging:false, 
			    filter:false,     
			    dom: '<<"top" <"header_sa"> ip>flt>',  
			    columns: cpf_sa_header,  
		        data:sa_ds,
		        fixedColumns:   {rightColumns: 1 },
		       	columnDefs: [
		       	             {"className": "dt-right","targets": "_all","orderable": false,"searchable": false},
		       	             {"targets" : [5],"fnCreatedCell":function(nTd, sData, oData, iRow, iCol){
		       	            	if ( sData < "0" ) {
		                            $(nTd).css('color', 'red');
		                            $(nTd).css('font-weight', 'bold');
		       	            	}
		       	            	 
		       	             }}
		       	             ],
				fnDrawCallback: function(oSettings) { }    	
			}).draw();				
			$("div.header_sa").html('<h3><center>Special</center></h3>');
			
			cpf_proj_ma1=$('#cpf_proj_ma1').DataTable( { 
				destroy: true,
			 	responsive: false,         
			    ordering: false,
			    searching: false,
			    scrollY:  "65vh",
			    scrollX: true,
		 	    scrollCollapse:true,
			    paging:false, 
			    filter:false,     
			    dom: '<<"top" <"header_ma"> ip>flt>',  
			    columns: cpf_ma_header,  
		        data:ma_ds,
		        fixedColumns:   {rightColumns: 1 },
		       	columnDefs: [
		       	             {"className": "dt-right","targets": "_all","orderable": false,"searchable": false},
		       	             {"targets" : [5],"fnCreatedCell":function(nTd, sData, oData, iRow, iCol){
		       	            	if ( sData < "0" ) {
		                            $(nTd).css('color', 'red');
		                            $(nTd).css('font-weight', 'bold');
		       	            	}
		       	            	 
		       	             }}
		       	             ],
				fnDrawCallback: function(oSettings) { }    	
			}).draw();
			$("div.header_ma").html('<h3><center>Medisave</center></h3>');
			
			
			cpf_proj_ra1=$('#cpf_proj_ra1').DataTable( { 
				destroy: true,
			 	responsive: false,         
			    ordering: false,
			    searching: false,
			    scrollY:  "65vh",
			    scrollX: true,
		 	    scrollCollapse:true,
			    paging:false, 
			    filter:false,     
			    dom: '<<"top" <"header_ra"> ip>flt>', 
			    columns: cpf_ra_header,  
		        data:ra_ds,
		        fixedColumns:   {rightColumns: 1 },
		       	columnDefs: [
		       	             {"className": "dt-right","targets": "_all","orderable": false,"searchable": false},
		       	             {"targets" : [4],"fnCreatedCell":function(nTd, sData, oData, iRow, iCol){
		       	            	if ( sData < "0" ) {
		                            $(nTd).css('color', 'red');
		                            $(nTd).css('font-weight', 'bold');
		       	            	}
		       	            	
		       	            	if(isEmpty(sData)){
		       	            		$(nTd).html("&nbsp;");
		       	            	}
		       	            	 
		       	             }}
		       	             ],
				fnDrawCallback: function(oSettings) { }    	
			}).draw();				
			$("div.header_ra").html('<h3><center>Retirement</center></h3>');
			
			cpf_proj_oa2=$('#cpf_proj_oa2').DataTable( { 
				destroy: true,
			 	responsive: false,         
			    ordering: false,
			    searching: false,
			    scrollY:  "65vh",
			    scrollX: true,
		 	    scrollCollapse:true,
			    paging:false, 
			    filter:false,     
			    dom: '<<"top" <"header_oa2"> ip>flt>', 
			    columns: cpf_oa_header,  
		        data:oar_ds,
		        fixedColumns:   {rightColumns: 1 },
		       	columnDefs: [
		       	             {"className": "dt-right","targets": "_all","orderable": false,"searchable": false},
		       	             {"targets" : [5],"fnCreatedCell":function(nTd, sData, oData, iRow, iCol){
		       	            	if ( sData < "0" ) {
		                            $(nTd).css('color', 'red');
		                            $(nTd).css('font-weight', 'bold');
		       	            	}
		       	            	
		       	            	if(isEmpty(sData)){
		       	            		$(nTd).html("&nbsp;");
		       	            	}
		       	            	 
		       	             }}
		       	             ],
				fnDrawCallback: function(oSettings) { }    	
			}).draw();				
			$("div.header_oa2").html('<h3><center>Ordinary</center></h3>');
			
			
			cpf_proj_sa2=$('#cpf_proj_sa2').DataTable( { 
				destroy: true,
			 	responsive: false,         
			    ordering: false,
			    searching: false,
			    scrollY:  "65vh",
			    scrollX: true,
		 	    scrollCollapse:true,
			    paging:false, 
			    filter:false,     
			    dom: '<<"top" <"header_sa2"> ip>flt>',  
			    columns: cpf_sa_header,  
		        data:sar_ds,
		        fixedColumns:   {rightColumns: 1 },
		       	columnDefs: [
		       	             {"className": "dt-right","targets": "_all","orderable": false,"searchable": false},
		       	             {"targets" : [5],"fnCreatedCell":function(nTd, sData, oData, iRow, iCol){
		       	            	if ( sData < "0" ) {
		                            $(nTd).css('color', 'red');
		                            $(nTd).css('font-weight', 'bold');
		       	            	}
		       	            	if(isEmpty(sData)){
		       	            		$(nTd).html("&nbsp;");
		       	            	}
		       	            	 
		       	             }}
		       	             ],
				fnDrawCallback: function(oSettings) { }    	
			}).draw();				
			$("div.header_sa2").html('<h3><center>Special</center></h3>');
			
			cpf_proj_ma2=$('#cpf_proj_ma2').DataTable( { 
				destroy: true,
			 	responsive: false,         
			    ordering: false,
			    searching: false,
			    scrollY:  "65vh",
			    scrollX: true,
		 	    scrollCollapse:true,
			    paging:false, 
			    filter:false,     
			    dom: '<<"top" <"header_ma2"> ip>flt>',  
			    columns: cpf_ma_header,  
		        data:mar_ds,
		        fixedColumns:   {rightColumns: 1 },
		       	columnDefs: [
		       	             {"className": "dt-right","targets": "_all","orderable": false,"searchable": false},
		       	             {"targets" : [5],"fnCreatedCell":function(nTd, sData, oData, iRow, iCol){
		       	            	if ( sData < "0" ) {
		                            $(nTd).css('color', 'red');
		                            $(nTd).css('font-weight', 'bold');
		       	            	}
		       	            	if(isEmpty(sData)){
		       	            		$(nTd).html("&nbsp;");
		       	            	}
		       	            	 
		       	             }}
		       	             ],
				fnDrawCallback: function(oSettings) { }    	
			}).draw();
			$("div.header_ma2").html('<h3><center>Medisave</center></h3>');
			
			
			

			 c3.generate({
				
			    bindto: '#before_retire_chart',
			   
			    title: {
			        show: false,
			        text: 'CPF Projection Analysis - Before Retirement',
			        position: 'top-center',  
			        padding: { top: 20, right: 20, bottom: 40, left: 50}
			      },
			    grid: {
			        x: { show: true },
			        y: { show: true }
			    },
			    zoom: {
			        enabled: true
			    },
			    legend: {
			        position: 'right'
			    },
			    
			    
			    
			    data: {
			    	json: before_retr_data,
			    	keys :{x: 'AGE',value: ['OA','OA_END','SA','SA_END','MA','MA_END']},
			    	type : "bar",
			    	types : {"OA_END" : "area","SA_END":"line","MA_END":"spline"},
			    	colors: {
			    			 "OA" : function(d) { return d.value < 0 ? 'red' : '#F9A12EFF'; },
			    			 "OA_END": function(d) { return d.value < 0 ? 'red' : '#00B1D2FF'; } ,
			    			 "SA" : function(d) { return d.value < 0 ? 'red' : '#078282FF'; },
			    			 "SA_END": function(d) { return d.value < 0 ? 'red' : '#FDD20EFF'; },
			    			 "MA" : function(d) { return d.value < 0 ? 'red' : '#28334AFF'; },
			    			 "MA_END": function(d) { return d.value < 0 ? 'red' : '#79C000FF'; }
			    			 },
			    	labels: false,
			    	names: {
					      'OA': 'Ordinary A/c - Opening Balance',
					      'SA': 'Special A/c - Opening Balance',
					      'MA': 'Medisave A/c -  Opening Balance',
					      
					      'OA_END': 'Ordinary A/c - Closing Balance',
					      'SA_END': 'Special A/c - Closing Balance',
					      'MA_END': 'Medisave A/c - Closing Balance'
					    },
					 order: null 
			    	
			    },
			    axis: {
			    	 x: { label: 'Age'},
			    	 y : {
			    		 label: 'Amount',
			             tick: {
			                 format: d3.format("$,")
			             },
			             show: true
			         }
			    },
			    tooltip: {
			        format: {
			            title: function (d) { return 'Available CPF balance at the Age of ' + d; },
			            value: function (value, ratio, id) {
			                var format =  d3.format('$,');
			                return format(value);
			            }
			        }
			    },
			    size: {
			        height: 500,
			        width:850
			    }
			    
			});
			 
			 
			 c3.generate({
					
				    bindto: '#after_retire_chart',
				   
				    title: {
				        show: false,
				        text: 'CPF Projection Analysis - After Retirement',
				        position: 'top-center',  
				        padding: { top: 20, right: 20, bottom: 40, left: 50}
				      },
				    grid: {
				        x: { show: true },
				        y: { show: true }
				    },
				    zoom: {
				        enabled: true
				    },
				    legend: {
				        position: 'right'
				    },
				    
				    
				    
				    data: {
				    	json: after_retr_data,
				    	keys :{x: 'AGE',value: ['OA','OA_END','SA','SA_END','MA','MA_END']},
				    	type : "bar",
				    	types : {"OA_END" : "area","SA_END":"line","MA_END":"spline"},
				    	colors: {
				    			 "OA" : function(d) { return d.value < 0 ? 'red' : '#F9A12EFF'; },
				    			 "OA_END": function(d) { return d.value < 0 ? 'red' : '#00B1D2FF'; } ,
				    			 "SA" : function(d) { return d.value < 0 ? 'red' : '#078282FF'; },
				    			 "SA_END": function(d) { return d.value < 0 ? 'red' : '#FDD20EFF'; },
				    			 "MA" : function(d) { return d.value < 0 ? 'red' : '#28334AFF'; },
				    			 "MA_END": function(d) { return d.value < 0 ? 'red' : '#79C000FF'; }
				    			 },
				    	labels: false,
				    	names: {
						      'OA': 'Ordinary A/c - Opening Balance',
						      'SA': 'Special A/c - Opening Balance',
						      'MA': 'Medisave A/c -  Opening Balance',
						      
						      'OA_END': 'Ordinary A/c - Closing Balance',
						      'SA_END': 'Special A/c - Closing Balance',
						      'MA_END': 'Medisave A/c - Closing Balance'
						    },
						 order: null 
				    	
				    },
				    axis: {
				    	 x: { label: 'Age'},
				    	 y : {
				    		 label: 'Amount',
				             tick: {
				                 format: d3.format("$,")
				             },
				             show: true
				         }
				    },
				    tooltip: {
				        format: {
				            title: function (d) { return 'Available CPF balance at the Age of ' + d; },
				            value: function (value, ratio, id) {
				                var format =  d3.format('$,');
				                return format(value);
				            }
				        }
				    },
				    size: {
				        height: 500,
				        width:850
				    }
				    
				});
			 
			
			
			
			
			 setTimeout(function(){
					hideLoader();
				}, 150);
			 
		
			
		},

		error : function(request, status, error) {
			applyErrorToastrAlert("Please Contact System Administrator!");
//			hideLoader();		
			
			setTimeout(function(){
				hideLoader();
			}, 150);
		}
	});
	
		
	
	
	
	
	

	
	
	
	
	
});



$("#selDlgCADType").on("change",function(){

	var thisval = $(this).val();	
	setCPFObjectives(thisval);
	
});



function setCPFObjectives(thisval){
	$("#col_cpf_prcnt_ret").addClass("hidden");
	$("#col_cpf_child_name").addClass("hidden");
	
	if(thisval == "Withdrawal after Retirement"){
		$("#col_cpf_prcnt_ret").removeClass("hidden");
		$("#col_cpf_child_name").addClass("hidden");
	}
	
	if(thisval == "Withdrawal for Education"){
		$("#col_cpf_prcnt_ret").addClass("hidden");
		$("#col_cpf_child_name").removeClass("hidden");
		
	}
	
}



$("#selDlgCPFNameOfChild").on("change",function(){
	getChildYrtoTerEduc($(this),$("#selDlgCpfYrToRet"));
});

$("#selDlgCADType,#selDlgCpfYrToRet").on("change",function(){
	yrtoretirementChkCPF($("#selDlgCpfYrToRet"));
});

function yrtoretirementChkCPF(elmid){
	var yrtoretirement=elmid.val(); 
	var oriretyr=$("#retYrstoret").val();
//	console.log("yrtoretirement->"+yrtoretirement+",oriretyr->"+oriretyr)
	if(!isEmpty(yrtoretirement) && !isEmpty($("#selDlgCADType").val())){
	if($("#selDlgCADType").val() == "Withdrawal after Retirement"){
		if(oriretyr < yrtoretirement){  
			$("#alertRetyrMsgCPF").removeClass("hidden"); 
//			$("#selDlgInvYrToRet").val(oriretyr);
		}else{
			$("#alertRetyrMsgCPF").addClass("hidden"); 
		}
	}else{
		$("#alertRetyrMsgCPF").addClass("hidden"); 
	}
	}else{
		$("#alertRetyrMsgCPF").addClass("hidden"); 
	}
	
	return true;
}

$( document ).ready(function() {
	$('#btn_print_pdf').click(function () {
    
		/*pdfOperation('','','','','','Before_Retirement','After_Retirement','cpf_proj_oa1','cpf_proj_sa1','cpf_proj_ma1','cpf_proj_ra1','cpf_proj_oa2','cpf_proj_sa2','cpf_proj_ma2');*/
	      $('#sectncontent').css('height', '100%');
	      $('.DTFC_LeftWrapper').css('display','none');
	      $('.DTFC_RightWrapper').css('display','none');
		  $('#cpf_proj_oa1').removeClass("dataTables_scroll");
		  $('#cpf_proj_oa1').removeClass("dataTables_wrapper");
		  
		  $('#cpf_proj_ra1').removeClass("dataTables_scroll");
		  $('#cpf_proj_ra1').removeClass("dataTables_wrapper");
		  
		  $('.dataTables_scrollHeadInner').attr('style','width:100% !important');
		 
		  $('table').attr('style','width:100% !important');
		  $('.table-bordered table-striped display hover no-footer dataTable').attr('style','width:100% !important');
		  
		   var cpf_proj_oa1_divHeight =  $("#cpf_proj_oa1_div").closest('div').find('.DTFC_ScrollWrapper').height();
		   $('#cpf_proj_oa1_div').css('min-height', (cpf_proj_oa1_divHeight*3)+'px');
		  
		   var cpf_proj_sa1_divHeight =  $("#cpf_proj_sa1_div").closest('div').find('.DTFC_ScrollWrapper').height();
		   $('#cpf_proj_sa1_div').css('min-height', (cpf_proj_sa1_divHeight*3)+'px');
		   
		   var cpf_proj_ma1_divHeight =  $("#cpf_proj_ma1_div").closest('div').find('.DTFC_ScrollWrapper').height();
		   $('#cpf_proj_ma1_div').css('min-height', (cpf_proj_ma1_divHeight*3)+'px');

		   var cpf_proj_ra1_divHeight =  $("#cpf_proj_ra1_div").closest('div').find('.DTFC_ScrollWrapper').height();
		   $('#cpf_proj_ra1_div').css('min-height', (cpf_proj_ra1_divHeight*3.5)+'px');
		   
		   var cpf_proj_oa2_divHeight =  $("#cpf_proj_oa2_div").closest('div').find('.DTFC_ScrollWrapper').height();
		   $('#cpf_proj_oa2_div').css('min-height', (cpf_proj_oa2_divHeight*3.5)+'px');
		   
		   var cpf_proj_sa2_divHeight =  $("#cpf_proj_sa2_div").closest('div').find('.DTFC_ScrollWrapper').height();
		   $('#cpf_proj_sa2_div').css('min-height', (cpf_proj_sa2_divHeight*3.5)+'px');
		   
		   var cpf_proj_ma2_divHeight =  $("#cpf_proj_ma2_div").closest('div').find('.DTFC_ScrollWrapper').height();
		   $('#cpf_proj_ma2_div').css('min-height', (cpf_proj_ma2_divHeight*3.5)+'px');
		   
		   
		  $('#cpf_proj_oa1').attr('border', '1');                                               
		  $('#cpf_proj_sa1').attr('border', '1');   
	      $('#cpf_proj_ma1').attr('border', '1');     
	      
	     
	      
	      $('#cpf_proj_ra1').attr('border', '1');    
	      $('#cpf_proj_oa2').attr('border', '1');    
	      $('#cpf_proj_sa2').attr('border', '1');    
	      $('#cpf_proj_ma2').attr('border', '1');   
	      
	     
	     
	      $('.nav-tabs > .active').next('li').find('a').trigger('click');
	      $('.nav-tabs a[href="#Before_Retirement"]').tab('show');
	     
	      
	    
	      
	      $('.dataTables_scrollHeadInner').attr('style','width:100% !important');
	      $('table').attr('style','width:100% !important');
		  $('.table-bordered table-striped display hover no-footer dataTable').attr('style','width:100% !important');
		
		  $('.dataTables_scrollBody').css('max-height','none');
		  $(".c3-line").css("fill","none");
		  
		  
	        var mywindow = window.open('', '', '');
		    mywindow.document.write('<html><title>CPF Projection analysis report</title><body>');
		    mywindow.document.write("\n");
		    mywindow.document.write("<h3><u>Before_Retirement</u></h3>");
		    mywindow.document.write($("#Before_Retirement").html());
		    mywindow.document.write("\n");
		    mywindow.document.write("<h3><u>After_Retirement</u></h3>");
		    mywindow.document.write($("#After_Retirement").html());
		    mywindow.document.write('</body></html>');
		    mywindow.document.close();
		    mywindow.print();
		    
		    $("#cpf_proj_oa1").css('border','');
		    $("#cpf_proj_sa1").css('border','');
		    $("#cpf_proj_ma1").css('border','');
		    
		    $('#cpf_proj_ra1').attr('border', '');    
		    $('#cpf_proj_oa2').attr('border', '');    
		    $('#cpf_proj_sa2').attr('border', '');    
		    $('#cpf_proj_ma2').attr('border', '');  
		    
		       $('#cpf_proj_oa1_div').css('min-height', (cpf_proj_oa1_divHeight)+'px');
			  
			   $('#cpf_proj_sa1_div').css('min-height', (cpf_proj_sa1_divHeight)+'px');
			   
			   $('#cpf_proj_ma1_div').css('min-height', (cpf_proj_ma1_divHeight)+'px');

			   $('#cpf_proj_ra1_div').css('min-height', (cpf_proj_ra1_divHeight)+'px');
			   
			   $('#cpf_proj_oa2_div').css('min-height', (cpf_proj_oa2_divHeight)+'px');
			   
			   $('#cpf_proj_sa2_div').css('min-height', (cpf_proj_sa2_divHeight)+'px');
			   
			   $('#cpf_proj_ma2_div').css('min-height', (cpf_proj_ma2_divHeight)+'px');
		    
		    $('.DTFC_LeftWrapper').css('display','block');
		    $('.DTFC_RightWrapper').css('display','block');
			$('#cpf_proj_oa1').addClass("dataTables_scroll");
			$('#cpf_proj_oa1').addClass("dataTables_wrapper");
			$('#cpf_proj_ra1').addClass("dataTables_scroll");
			$('#cpf_proj_ra1').addClass("dataTables_wrapper");
    	    $('#sectncontent').css('height', '73vh'); 
    
   
				/*var borderColor="#1D655C"; var backgroundColor="#243665";  
				var mywindow = window.open('', '', '');
			    mywindow.document.write('<html><head><title>CPF Projection analysis report</title></head>');
			    mywindow.document.write("<body style='border:solid 2px "+borderColor+"'>");
			    mywindow.document.write("<div style='background-color: "+backgroundColor+";height: 77px;position: fixed; width: 100%;left:0;visibility: visible;'></div>");
			    mywindow.document.write('</body></html>');
			    mywindow.document.close();
			    mywindow.print();	*/
			  
			  
			    
	});
	
	/*function pdfOperation(htmlPge1,htmlPge2,htmlPge3,htmlPge4,htmlPge5,htmlPge6,htmlPge7,cpf_proj_oa1,cpf_proj_sa1,cpf_proj_ma1,cpf_proj_ra1,cpf_proj_oa2,cpf_proj_sa2,cpf_proj_ma2){
		
		
		  $('#sectncontent').css('height', '100%');
	      $('.DTFC_LeftWrapper').css('display','none');
	      $('.DTFC_RightWrapper').css('display','none');
	  	  $("#"+cpf_proj_oa1).removeClass("dataTables_scroll");
		  $("#"+cpf_proj_oa1).removeClass("dataTables_wrapper");
		  
		  $("#"+cpf_proj_ra1).removeClass("dataTables_scroll");
		  $("#"+cpf_proj_ra1).removeClass("dataTables_wrapper");
		  
		  $('.dataTables_scrollHeadInner').attr('style','width:100% !important');
		 
		  $('table').attr('style','width:100% !important');
		  $('.table-bordered table-striped display hover no-footer dataTable').attr('style','width:100% !important');
		  
		   var cpf_proj_oa1_divHeight =  $("#"+cpf_proj_oa1+"_div").closest('div').find('.DTFC_ScrollWrapper').height();
		   $("#"+cpf_proj_oa1+"_div").css('min-height', (cpf_proj_oa1_divHeight*3)+'px');
		   
		   var cpf_proj_sa1_divHeight =  $("#"+cpf_proj_sa1+"_div").closest('div').find('.DTFC_ScrollWrapper').height();
		   $("#"+cpf_proj_sa1+"_div").css('min-height', (cpf_proj_sa1_divHeight*3)+'px');
		   
		   var cpf_proj_ma1_divHeight =  $("#"+cpf_proj_ma1+"_div").closest('div').find('.DTFC_ScrollWrapper').height();
		   $("#"+cpf_proj_ma1+"_div").css('min-height', (cpf_proj_ma1_divHeight*3)+'px');
		   
		   var cpf_proj_ra1_divHeight =  $("#"+cpf_proj_ra1+"_div").closest('div').find('.DTFC_ScrollWrapper').height();
		   $("#"+cpf_proj_ra1+"_div").css('min-height', (cpf_proj_ra1_divHeight*3.5)+'px');
		   
		   var cpf_proj_oa2_divHeight =  $("#"+cpf_proj_oa2+"_div").closest('div').find('.DTFC_ScrollWrapper').height();
		   $("#"+cpf_proj_oa2+"_div").css('min-height', (cpf_proj_oa2_divHeight*3.5)+'px');
		   
		   var cpf_proj_sa2_divHeight =  $("#"+cpf_proj_sa2+"_div").closest('div').find('.DTFC_ScrollWrapper').height();
		   $("#"+cpf_proj_sa2+"_div").css('min-height', (cpf_proj_sa2_divHeight*3.5)+'px');
		   
		   var cpf_proj_ma2_divHeight =  $("#"+cpf_proj_ma2+"_div").closest('div').find('.DTFC_ScrollWrapper').height();
		   $("#"+cpf_proj_ma2+"_div").css('min-height', (cpf_proj_ma2_divHeight*3.5)+'px');
		   
		  
		  $("#"+cpf_proj_oa1).attr('border', '1');                                               
		  $("#"+cpf_proj_sa1).attr('border', '1');   
	      $("#"+cpf_proj_ma1 ).attr('border', '1');     
	      
	     
	              
	      $("#"+cpf_proj_ra1).attr('border', '1');    
	      $("#"+cpf_proj_oa2).attr('border', '1');    
	      $("#"+cpf_proj_sa2).attr('border', '1');    
	      $("#"+cpf_proj_ma2).attr('border', '1');   
	      
	     
	     
	      $('.nav-tabs > .active').next('li').find('a').trigger('click');
	      $('.nav-tabs a[href="#Before_Retirement"]').tab('show');
	     
	      
	    
	      
	      $('.dataTables_scrollHeadInner').attr('style','width:100% !important');
	      $('table').attr('style','width:100% !important');
		  $('.table-bordered table-striped display hover no-footer dataTable').attr('style','width:100% !important');
		
		  $('.dataTables_scrollBody').css('max-height','none');
		  $(".c3-line").css("fill","none");
		  
		  
	        var mywindow = window.open('', '', '');
		    mywindow.document.write('<html><title>CPF Projection analysis report</title><body>');
		    mywindow.document.write("\n");
		    mywindow.document.write("<h3><u>Before_Retirement</u></h3>");
		    mywindow.document.write($("#"+htmlPge1).html());
		    mywindow.document.write("\n");
		    mywindow.document.write("<h3><u>After_Retirement</u></h3>");
		    mywindow.document.write($("#"+htmlPge2).html());
		    mywindow.document.write($("#"+htmlPge3).html());
		    mywindow.document.write($("#"+htmlPge4).html());
		    mywindow.document.write($("#"+htmlPge5).html());
		    mywindow.document.write($("#"+htmlPge6).html());
		    mywindow.document.write($("#"+htmlPge7).html());
		    mywindow.document.write('</body></html>');
		    mywindow.document.close();
		    mywindow.print();
		    
		    $("#"+cpf_proj_oa1).css('border','');
		    $("#"+cpf_proj_sa1).css('border','');
		    $("#"+cpf_proj_ma1).css('border','');
		    
		    $("#"+cpf_proj_ra1).attr('border', '');    
		    $("#"+cpf_proj_oa2).attr('border', '');    
		    $("#"+cpf_proj_sa2).attr('border', '');    
		    $("#"+cpf_proj_ma2).attr('border', '');  
		    
		       $("#"+cpf_proj_oa1+"_div").css('min-height', (cpf_proj_oa1_divHeight)+'px');
			  
			   $("#"+cpf_proj_sa1+"_div").css('min-height', (cpf_proj_sa1_divHeight)+'px');
			   
			   $("#"+cpf_proj_ma1+"_div").css('min-height', (cpf_proj_ma1_divHeight)+'px');

			   $("#"+cpf_proj_ra1+"_div").css('min-height', (cpf_proj_ra1_divHeight)+'px');
			   
			   $("#"+cpf_proj_oa2+"_div").css('min-height', (cpf_proj_oa2_divHeight)+'px');
			   
			   $("#"+cpf_proj_sa2+"_div").css('min-height', (cpf_proj_sa2_divHeight)+'px');
			   
			   $("#"+cpf_proj_ma2+"_div").css('min-height', (cpf_proj_ma2_divHeight)+'px');
		    
		    $('.DTFC_LeftWrapper').css('display','block');
		    $('.DTFC_RightWrapper').css('display','block');
			$("#"+cpf_proj_oa1).addClass("dataTables_scroll");
			$("#"+cpf_proj_oa1).addClass("dataTables_wrapper");
			$("#"+cpf_proj_ra1).addClass("dataTables_scroll");
			$("#"+cpf_proj_ra1).addClass("dataTables_wrapper");
   	    $('#sectncontent').css('height', '73vh'); 
	}*/
});
