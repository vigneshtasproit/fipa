
/**
 * Wealth Accumulation 
 */

/*$("#depenParCancelbtn").on("click",function(){
	$("#txtFldDlgDepnName,#selDlgDepnRelationship,#txtFldDlgDepnDob").removeClass("mandatoryFillFlds");
	$("#txtFldDlgDepnName,#selDlgDepnRelationship,#txtFldDlgDepnDob").qtip('disable');
	$("#txtFldDlgDepnName,#selDlgDepnRelationship,#txtFldDlgDepnDob").qtip('destroy',true);
		deptRdlyflds(INS_MODE);  
	   	getdeptRows(null); 
		 DpdcalculateRow();
		 $('#depn_Dialog').modal('hide'); 
});*/
/*$("#wealthAccCancelbtn").on("click",function(){
	$("#txtFldDlgSAPurpose,#txtFldDlgSAWhen,#txtFldDlgSAmount").removeClass("mandatoryFillFlds");
	$("#txtFldDlgSAPurpose,#txtFldDlgSAWhen,#txtFldDlgSAmount").qtip('disable');
	$("#txtFldDlgSAPurpose,#txtFldDlgSAWhen,#txtFldDlgSAmount").qtip('destroy',true);
		deptRdlyflds(INS_MODE);  
	   	getdeptRows(null);  
	    DpdcalculateRow();
		$('#depn_Dialog').modal('hide'); 
});*/
/*Datatable Initialisation*/
//var deptParticularsTable = $('#deptParticularsTable').DataTable( {
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
$("#DeptARow").on("click",function(){
	//if(!valdeptTbl())return; 
	 
			deptClearFlds();
			$("#txtFldDlgDepnId").val(makeid(17));
			
			showFIPAModel('depn_Dialog','Dependant Particulars');   
//				$("#depn_Dialog").find("input[id=txtFldDlgDepnMode]").val("I");
//				$("#depn_Dialog").find(".modal-footer").find("button:eq(0)").removeClass("hidden");//instant save added line
				$('#depn_Dialog').on('shown.bs.modal', function () { 
				 $("#depn_Dialog #txtFldDlgDepnAge").prop('disabled', true);  	 
				 $("#depn_Dialog #txtFldDlgDepnMonthctr").prop("disabled", true); 
//				$("#depn_Dialog").find(".modal-footer").find("button:eq(0)").text("Add");			
				$("#depn_Dialog").find("input[id=txtFldDlgDepnName]").focus(); 
				$("#depn_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
						if(!validatedeptDetails())return;
					   	deptRdlyflds(INS_MODE);  
					   	getdeptRows(null);  
						 
						 DpdcalculateRow();
						 
//						 chkSpouseIncluded();
						 
						$('#depn_Dialog').modal('hide'); 
				  });  
			});
			
			
});



/*Populate Data */
function getdeptRows(dataset){ 
 
var cell0 = '<span></span>'+
'<input type="hidden" name="txtFlddeptMode" readonly="true" value="'+INS_MODE+'" class="fipaMode"/><input type="hidden" name="txtFldDepnId">';
 
var cell1 = '<div class="checkbox checkbox-primary text-center"><input type="checkbox" name="raddeptSelect"/><label>&nbsp;</label></div>'; 

var cell2 = '<input type="text" name="txtFldDepnName" class="form-control editable"   onmouseover="fipaTooltip(this);" maxlength="60"/>';
 
var cell3 = '<select   name="selDepnRelationship" class="form-control editable" ></select>'; 
  
var cell4 = '<input type="text" name="txtFldDepnDob" class="form-control editable"   onmouseover="fipaTooltip(this);" />';

var cell5 = '<input type="text" name="txtFldDepnAge" class="form-control editable"   readonly="true" onmouseover="fipaTooltip(this);" />';
   
var cell6 = '<select  name="selDepnGender" class="form-control editable" ></select>'; 

var cell7 = '<input type="text" name="txtFldDepnYrssupport" class="form-control editable"   onmouseover="fipaTooltip(this);" />';

var cell8 = '<input type="text" name="txtFldDepnProvSlf" class="form-control editable"   onmouseover="fipaTooltip(this);" />';

var cell9 = '<input type="text" name="txtFldDepnProvSps" class="form-control editable clsfipaSpouse"   onmouseover="fipaTooltip(this);"  />';

var cell10 = '<input type="text" name="txtFldDepnMonthctr" class="form-control editable" readonly="true"    onmouseover="fipaTooltip(this);" />'+
'<input type="hidden" name="txtFldDepnCrtdBy"/><input type="hidden" name="txtFldDepnCrtdDate"/>';
  

deptParticularsTable.row.add( [cell0,cell1,cell2,cell3,cell4,cell5,cell6,cell7,cell8,cell9,cell10] ).draw( false );

var rowCount = $('#deptParticularsTable tbody tr:visible').length;	
rowCount =  (rowCount == 0) ? $('#deptParticularsTable tbody tr').length : rowCount;
var $lastRow = $("#deptParticularsTable tbody tr:last");	

$lastRow.find("td:first").find('span').text(rowCount); 

$lastRow.find("td:eq(0)").find('input:eq(1)').val($("#txtFldDlgDepnId").val());

$lastRow.find("td:eq(1)").find("input:first").click(function(){
	selectSingleRow(this);
})

$lastRow.find("td:eq(1)").find("input:first").attr('id',"raddept"+$lastRow.index())
.parent().find('label').attr('for',"raddept"+$lastRow.index());


$lastRow.find("td:eq(2)").find('input:eq(0)').val($("#txtFldDlgDepnName").val());


var depnRelation = $("#selDlgDepnRelationship > option").clone();
$lastRow.find("td:eq(3)").find('select:eq(0)').append(depnRelation);
$lastRow.find("td:eq(3)").find('select:eq(0)').val($("#selDlgDepnRelationship").val());
  

$lastRow.find("td:eq(4)").find('input:eq(0)').val($("#txtFldDlgDepnDob").val());
$lastRow.find("td:eq(4)").find('input:eq(0)').datetimepicker(dateOptions).on("change",function(){
	 checkDateFormat($(this));  
});
$lastRow.find("td:eq(4)").find('input:eq(0)').on("change",function(){
	getdob(this,$lastRow.find("td:eq(5)").find('input:eq(0)'),true);
});


$lastRow.find("td:eq(5)").find('input:eq(0)').val($("#txtFldDlgDepnAge").val());
$lastRow.find("td:eq(5)").find('input:eq(0)').addClass("applyEvntYrs");
   
var depnGen =  $("#selDlgDepnGender > option").clone();
$lastRow.find("td:eq(6)").find('select:eq(0)').append(depnGen);
$lastRow.find("td:eq(6)").find('select:eq(0)').val($("#selDlgDepnGender").val());

 
$lastRow.find("td:eq(7)").find('input:eq(0)').val($("#txtFldDlgDepnYrssupport").val());
$lastRow.find("td:eq(7)").find('input:eq(0)').addClass("applyEvntYrs");
 

$lastRow.find("td:eq(8)").find('input:eq(0)').val($("#txtFldDlgDepnProvSlf").val());
$lastRow.find("td:eq(8)").find('input:eq(0)').addClass("applyEvntUsd");
$lastRow.find("td:eq(8)").find('input:eq(0)').on("change",function(){
	deptMonthlyContb($lastRow.find("td:eq(8)").find('input:eq(0)'),$lastRow.find("td:eq(9)").find('input:eq(0)'),$lastRow.find("td:eq(10)").find('input:eq(0)'));
	DpdcalculateRow();
	
});

$lastRow.find("td:eq(9)").find('input:eq(0)').val($("#txtFldDlgDepnProvSps").val());
$lastRow.find("td:eq(9)").find('input:eq(0)').addClass("applyEvntUsd");
$lastRow.find("td:eq(9)").find('input:eq(0)').on("change",function(){
	
	deptMonthlyContb($lastRow.find("td:eq(8)").find('input:eq(0)'),$lastRow.find("td:eq(9)").find('input:eq(0)'),$lastRow.find("td:eq(10)").find('input:eq(0)'));
	DpdcalculateRow();
});
  


$lastRow.find("td:eq(10)").find('input:eq(0)').val($("#txtFldDlgDepnMonthctr").val());
$lastRow.find("td:eq(10)").find('input:eq(0)').addClass("applyEvntUsd");
$lastRow.find("td:eq(10)").find('input:eq(0)').on("change",function(){
	DpdcalculateRow(); 
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
	crudicons(this,'deptParticularsTable','SeldeptParticulars','DeptERow','DeptDRow');
			
});
//DHTML CRUD ICONS

$lastRow.find("td:eq(1)").find("input:first").click(function(){
	selectSingleRow(this);
//	DHTML CRUD ICONS
	crudicons(this,'deptParticularsTable','SeldeptParticulars','DeptERow','DeptDRow');
});

if(dataset != null){

	rowCount = $('#deptParticularsTable tbody tr').length;	
	$lastRow.find("td:first").find('span').text(rowCount);
	
			if($("#hTxtFldFnaReviewFlag").val() == "U"  || $("#hTxtFldFnaReviewFlag").val() == ""){ 
					$lastRow.find("td:eq(0)").find('input:eq(0)').val(col);
			}
			
	var infoDetsArr = new Array();
	
	for(var data in dataset){
		var col = dataset[data];
		
		switch(data){
		
		case "depnId": 
			$lastRow.find("td:eq(0)").find('input:eq(1)').val(col); 
			break;
			
		case "depnName": 
			$lastRow.find("td:eq(2)").find('input:eq(0)').val(col); 
			
			break;
			
		case "depnRelationship": 
			selectNullvalChk($lastRow.find("td:eq(3)"),col);   
			break;
		 
			 
		case "depnDob":
			$lastRow.find("td:eq(4)").find('input:eq(0)').val(col); 
			break;
			
		case "depnAge":
			$lastRow.find("td:eq(5)").find('input:eq(0)').val(col);
			break;
		 
		case "depnGender": 
			selectNullvalChk($lastRow.find("td:eq(6)"),col);   
			break;
			
		case "depnYrssupport": 
			$lastRow.find("td:eq(7)").find('input:eq(0)').val(col);
			infoDetsArr.push(col);				
			break;
		
		
		case "depnProvSelf": 
			$lastRow.find("td:eq(8)").find('input:eq(0)').val(col); 
			break;
			
		case "depnProvSpouse":
			$lastRow.find("td:eq(9)").find('input:eq(0)').val(col); 
			break;

		case "depnMonthcontr": 
			$lastRow.find("td:eq(10)").find('input:eq(0)').val(col); 
			break;   
			
		case "depnCreatedBy": 
			$lastRow.find("td:eq(10)").find('input:eq(1)').val(col);
			infoDetsArr.push(col);				
			break;
			
		case "depnCreatedDate":
			$lastRow.find("td:eq(10)").find('input:eq(2)').val(col);
			infoDetsArr.push(col);
			break;
			
		case "depnModifiedBy":
			infoDetsArr.push(col);
			break;
			
		case "depnModifiedDate":
			infoDetsArr.push(col);
			break;	
			//$lastRow.find("td:eq(4)").find('input:eq(0)').val(dataset["depnDob"]+" [ "+dataset["depnAge"]+" ] ");  
	   }
	  } 
	}
else{
//	DHTML CRUD ICONS
	crudicons(null,'deptParticularsTable','SeldeptParticulars','DeptERow','DeptDRow');
}
	 
	
	
	
	/*Age Update*/
	getdob($lastRow.find("td:eq(4)").find('input:eq(0)'),$lastRow.find("td:eq(5)").find('input:eq(0)'),false);
	/*EOL*/
	
	
	/*
	if(dataset == null){
		instantDepnSave($lastRow,INS_MODE);		
	}
	
	$lastRow.find("input[type=text]").prop("readonly",true);//instant save added line
	$lastRow.find("select").prop("disabled",true);//instant save added line
 */
}

//DHTML SELECT ALL
function SelAlldeptParticulars(obj){
	
	if($(obj).is(":checked")){
		
		$('#deptParticularsTable tbody tr').find("td:eq(1)").find("input[type=checkbox]").prop("checked",true);
		
		$("#DeptDRow").attr("disabled",false);
		$('#deptParticularsTable tbody tr').addClass("selected");
		
		var $rowCount = $('#deptParticularsTable tbody tr').length;
		
		if($rowCount == 0){
			$(obj).prop("checked",false);
			$("#DeptERow").attr("disabled",true);
			$("#DeptDRow").attr("disabled",true);
		}else if($rowCount == 1){
			$("#DeptERow").attr("disabled",false);
			$("#DeptDRow").attr("disabled",false);
		}else if($rowCount > 1){
			$("#DeptERow").attr("disabled",true);
			$("#DeptDRow").attr("disabled",false);
		}
		
	}else{
		
		$('#deptParticularsTable tbody tr').find("td:eq(1)").find("input[type=checkbox]").prop("checked",false);
		
		$('#deptParticularsTable tbody tr').removeClass("selected");
		
		$("#DeptERow").attr("disabled",true);
		$("#DeptDRow").attr("disabled",true);
		
	}
	


}

 
/*Edit Row Click */
$("#DeptERow").on("click",function(){
	DeptVRow();  
});


/*View Row Click */
function DeptVRow(){
	var isOneRowSelected=0;
	var $rowCount = $('#deptParticularsTable tbody tr').length;	
	var $lastRow = $("#deptParticularsTable tbody tr:last");	
	
	if($rowCount<1){
		applyToastrAlert("Insert rows before edit/view");
		return;
	} 
	
	/*$("#deptParticularsTable tbody tr").each(function(){
		var $row = $(this);   
		$row.removeClass('selected');  
		$(this).removeAttr("style"); 
		$row.find("td").removeAttr("style");
		
			
	});*/
	
	
	
	$("#deptParticularsTable tbody").find('input[name="raddeptSelect"]').each(function(){ //Checkbox selection
		var $curElm=$(this);
		if($curElm.is(":checked")){ 
			isOneRowSelected++;
		}
	});
	
	
	if(isOneRowSelected > 1){ 
		applyToastrAlert("More than one rows selected.Select one row only");
		return;
	}
	
	$("#deptParticularsTable tbody").find('input[name="raddeptSelect"]').each(function(){ //Checkbox selection
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
					
					
					  
				 	deptRdlyflds($mode);
					deptfilldlgval($row); 
					 /*if($("#dfSelfMartsts").val() == "Single"){
						 $("input[name=txtFldDlgDepnProvSps]").val("");
						 $("input[name=txtFldDlgDepnProvSps]").prop("disabled",true); 
					 }*/
					showFIPAModel('depn_Dialog','Dependant Particulars');  
					$("#depn_Dialog").find(".modal-footer").find("button:eq(0)").removeClass("hidden");
					$('#depn_Dialog').on('shown.bs.modal', function () {
//						$row.find("input[type=text]").prop("readonly",true);//instant save added line
//						$row.find("select").prop("disabled",true);//instant save added line
//						$("#depn_Dialog").find(".modal-footer").find("button:eq(0)").text("Edit");
						$("#depn_Dialog").find("input[id=txtFldDlgDepnName]").focus(); 
						$("#depn_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
							 if(!validatedeptDetails())return; 
					     		if(!isEmpty($RowId) && !($RowId==undefined)){  
					     			deptfilldomval($RowId,$row); 
					     		}   
					     		 
					     		DpdcalculateRow();
//					     		instantDepnSave($row,UPD_MODE); 
					     		$('#depn_Dialog').modal('hide'); 
								deptClearFlds();
								crudicons(null,'deptParticularsTable','SeldeptParticulars','DeptERow','DeptDRow');
							
						});
						
						$("#depn_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
							crudicons(null,'deptParticularsTable','SeldeptParticulars','DeptERow','DeptDRow');
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
$("#DeptDRow").on("click",function(){ 
	  	datatableDeleteRow('deptParticularsTable',deptParticularsTable,'SeldeptParticulars','DeptERow','DeptDRow');  
/*//		DHTML CRUD ICONS
		var rc = deptParticularsTable.row().count();
		if(rc ==0){
			$("#SeldeptParticulars").prop("checked",false);
			crudicons(null,'deptParticularsTable','SeldeptParticulars','DeptERow','DeptDRow');
		}
//		DHTML CRUD ICONS
*/		
});

/*Clear Fields */
function deptClearFlds(){
	$("#depn_Dialog").find("input[type=text]").val("");
	$("#depn_Dialog").find("textarea").val("");
	$("#depn_Dialog").find("select").val("");
}

/*Disabled/Readonly Fields */
function deptRdlyflds(mode){ 
	 if(mode == QRY_MODE ){
			$("#depn_Dialog :input").prop("disabled", true); 
	 } else if((mode == INS_MODE) || (mode == UPD_MODE) ){
			$("#depn_Dialog :input").prop("disabled", false);
			
	 }
	 $("#depn_Dialog #txtFldDlgDepnAge").prop('disabled', true); 
	 $("#depn_Dialog #txtFldDlgDepnMonthctr").prop("disabled", true); 
}

/*Validation */
function validatedeptDetails(){
	  
	/*if(!(validateFocusFlds('depn_Dialog','txtFldDlgDepnName',DEPN_NAME))) return; 
	if(!(validateFocusFlds('depn_Dialog','selDlgDepnRelationship',DEPN_RELATION))) return; 
	if(!(validateFocusFlds('depn_Dialog','txtFldDlgDepnDob',DEPN_DOB))) return; 
	if(!(validateFocusFlds('depn_Dialog','txtFldDlgDepnAge',DEPN_AGE))) return; */
	 
	
	  return true; 
}




function valdeptTbl(){ 
//	var $lastRow = $("#deptParticularsTable tbody tr:last");	
	var $RowCount = deptParticularsTable.rows().count();

	var valid=true;
	/*if($RowCount > 0 ){ 
		$("#deptParticularsTable tbody tr").each(function(){
			var $lastRow=$(this);
		if(!(validateFocusDhtmlFlds($lastRow.find("td:eq(2)").find('input:eq(0)'), DEPN_NAME,SCREEN_DEPNT))){valid=false;return false;}; 
		if(!(validateFocusDhtmlFlds($lastRow.find("td:eq(3)").find('select:eq(0)'), DEPN_RELATION,SCREEN_DEPNT))){valid=false;return false;};
		if(!(validateFocusDhtmlFlds($lastRow.find("td:eq(4)").find('input:eq(0)'), DEPN_DOB,SCREEN_DEPNT))){valid=false;return false;};
	 
		});
	} */ 
	return valid;
}


/*Mandatory Fields Tooltip*/ 
$("#txtFldDlgSAPurpose,#txtFldDlgSAWhen,#txtFldDlgSAmount").on("change",function(){
	if(!isEmpty($(this).val())){
	$(this).removeClass("mandatoryFillFlds");
	$(this).qtip('disable');
	$(this).qtip('destroy',true);
	}
});

/* Filling Model Fields*/
function deptfilldlgval($lastRow){
	
//	  $('#depn_Dialog #txtFldDlgDepnMode').val($lastRow.find("td:eq(0)").find('input:eq(0)').val());
	  $('#depn_Dialog #txtFldDlgDepnId').val($lastRow.find("td:eq(0)").find('input:eq(1)').val());
	  $('#depn_Dialog #txtFldDlgDepnName').val($lastRow.find("td:eq(2)").find('input:eq(0)').val());
	  $('#depn_Dialog #selDlgDepnRelationship').val($lastRow.find("td:eq(3)").find('select:eq(0)').val()); 
	  $('#depn_Dialog #txtFldDlgDepnDob').val($lastRow.find("td:eq(4)").find('input:eq(0)').val());  
	  $('#depn_Dialog #txtFldDlgDepnAge').val($lastRow.find("td:eq(5)").find('input:eq(0)').val()); 
	  $('#depn_Dialog #selDlgDepnGender').val($lastRow.find("td:eq(6)").find('select:eq(0)').val());
	  $('#depn_Dialog #txtFldDlgDepnYrssupport').val($lastRow.find("td:eq(7)").find('input:eq(0)').val()); 
	  $('#depn_Dialog #txtFldDlgDepnProvSlf').val($lastRow.find("td:eq(8)").find('input:eq(0)').val());
	  $('#depn_Dialog #txtFldDlgDepnProvSps').val($lastRow.find("td:eq(9)").find('input:eq(0)').val());
	  $('#depn_Dialog #txtFldDlgDepnMonthctr').val($lastRow.find("td:eq(10)").find('input:eq(0)').val());
//	  $('#depn_Dialog #txtFldDlgDepnCrtdBy').val($lastRow.find("td:eq(10)").find('input:eq(1)').val());
//	  $('#depn_Dialog #txtFldDlgDepnCrtdDate').val($lastRow.find("td:eq(10)").find('input:eq(2)').val());
	  
//	  chkSpouseIncluded();
	 
}

/* Filling Table Fields*/
function deptfilldomval($RowId,$row){
	
	$row.find("td:eq(2)").find('input:eq(0)').val($("#txtFldDlgDepnName").val()); 
	$row.find("td:eq(3)").find('select:eq(0)').val($("#selDlgDepnRelationship").val()); 
	$row.find("td:eq(4)").find('input:eq(0)').val($("#txtFldDlgDepnDob").val()); 
	$row.find("td:eq(5)").find('input:eq(0)').val($("#txtFldDlgDepnAge").val());  
	$row.find("td:eq(6)").find('select:eq(0)').val($("#selDlgDepnGender").val()); 
	$row.find("td:eq(7)").find('input:eq(0)').val($("#txtFldDlgDepnYrssupport").val());  
	$row.find("td:eq(8)").find('input:eq(0)').val($("#txtFldDlgDepnProvSlf").val()); 
	$row.find("td:eq(9)").find('input:eq(0)').val($("#txtFldDlgDepnProvSps").val());
	$row.find("td:eq(10)").find('input:eq(0)').val($("#txtFldDlgDepnMonthctr").val()); 
//	$row.find("input[type=text]").prop("readonly",true);//instant save added line
//	$row.find("select").prop("disabled",true);//instant save added line
}



/*###################################################Calculation Part###################################################*/
/*Validations----------------------------------> */
 


$("#depn_Dialog #txtFldDlgDepnDob").on("change",function(){
	getdob(this,$('#txtFldDlgDepnAge'),true);  
});

$("#depn_Dialog #txtFldDlgDepnProvSlf,#depn_Dialog #txtFldDlgDepnProvSps").on("change",function(){
	deptMonthlyContb($("#txtFldDlgDepnProvSlf"),$("#txtFldDlgDepnProvSps"),$("#txtFldDlgDepnMonthctr"));
});
function DpdcalculateRow(){
	
	 var sum1=0,sum2=0,sum3=0; 
	 
	 
	 var $depcount = deptParticularsTable.rows().count();
	 
	 
	 if($depcount >0){
		 
		 $("#deptParticularsTable tbody tr").each(function(i,row){
			 
			 var depMode=$(this).find("td:first").find('input:eq(0)').val();
				var depMonthctr=$(this).find("td:eq(10)").find("input:eq(0)").val(); 
				var depMonthctrSlf=$(this).find("td:eq(8)").find("input:eq(0)").val(); 
				var depMonthctrSps=$(this).find("td:eq(9)").find("input:eq(0)").val();
				
				if(depMode != "D"){
					
					
					if(!isEmpty(depMonthctr)){
						sum1 +=Number(depMonthctr); 
					}
					
					if(!isEmpty(depMonthctrSlf)){
						sum2 +=Number(depMonthctrSlf); 
					}
					
					if(!isEmpty(depMonthctrSps)){
						sum3 +=Number(depMonthctrSps); 
					}
					
				}
				
				
				
		 });
		  
	 
//	 if(!(sum1 == 0 && sum2 == 0 && sum3 == 0)){ 
		 $("#deptParticularsTablefooter #txtFldDepdTotMthContr").val(roundNumber(sum1)); 
		 $("#deptParticularsTablefooter #txtFldDepdTotMASelf").val(roundNumber(sum2));
		 $("#deptParticularsTablefooter #txtFldDepdTotAnnlSelf").val(sum2*12);
		 $('#expdSelfDepntcontr').val(sum2*12); 
		 $("#deptParticularsTablefooter #txtFldDepdTotMASps").val(roundNumber(sum3));
		 $('#deptParticularsTablefooter #txtFldDepdTotAnnlSps').val(sum3*12);
		 $('#expdSpsDepntcontr').val(sum3*12);
//	 }
	 
		 calcSum(this,'SUMOF_ANNEXP_SELF');
		 calcSum(this,'SUMOF_ANNEXP_SPS');
	 
//	 if(sum1 == 0){$("#deptParticularsTablefooter #txtFldDepdTotMthContr").val("0");} 
//	 if(sum2 == 0){$("#deptParticularsTablefooter #txtFldDepdTotMASelf").val("0");$('#expdSelfDepntcontr').val("0");}
//	 if(sum3 == 0){$("#deptParticularsTablefooter #txtFldDepdTotMASps").val("0");$('#expdSpsDepntcontr').val("0");} 
	  
	 
	 }else{
		 $("#deptParticularsTablefooter #txtFldDepdTotMthContr").val(""); 
		 $("#deptParticularsTablefooter #txtFldDepdTotMASelf").val("");
		 $("#deptParticularsTablefooter #txtFldDepdTotAnnlSelf").val("");
		 $('#expdSelfDepntcontr').val(""); 
		 $("#deptParticularsTablefooter #txtFldDepdTotMASps").val("");
		 $('#deptParticularsTablefooter #txtFldDepdTotAnnlSps').val("");
		 $('#expdSpsDepntcontr').val("");
//	 }
	 
		 calcSum(this,'SUMOF_ANNEXP_SELF');
		 calcSum(this,'SUMOF_ANNEXP_SPS');
	 }
}



function deptMonthlyContb(self,spouse,chgeto){
	
	var selfval = isEmpty(self.val())? 0 : Number(self.val());
	var spouseval= isEmpty(spouse.val())?0: Number(spouse.val());
//	var chgetoval=chgeto.val();
	
//	 var sumMthContb=0;       
//		if(!isEmpty(selfval)){
//			selfval += Number(selfval);
//		 } 
//			console.log(selfval);
			
		
//		if(!isEmpty(spouseval)){
//			spouseval += Number(spouseval);
//		 } 
			
//			console.log(spouseval);
			

//		if(!(sumMthContb == 0)){
			chgeto.val(roundNumber(Number(selfval)+Number(spouseval))); 
//		}else{
//			chgeto.val("");
//		}


	}

$("#depn_Dialog").find("input,select,textarea").on("change",function(){
	$("#depn_Dialog").find(".modal-footer").find("button:eq(0)").removeClass("hidden");
});
