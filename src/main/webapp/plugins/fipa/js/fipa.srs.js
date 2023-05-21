/**
 * SRS
 */ 
 
/*$("#srsCancelbtn").on("click",function(){
	$("#selDlgSRSClassify,#txtFldDlgSRSDesc,#txtFldDlgSRSFreq").removeClass("mandatoryFillFlds");
	$("#selDlgSRSClassify,#txtFldDlgSRSDesc,#txtFldDlgSRSFreq").qtip('disable');
	$("#selDlgSRSClassify,#txtFldDlgSRSDesc,#txtFldDlgSRSFreq").qtip('destroy',true);
	cshSRSRdlyflds(INS_MODE);  
   	getcshSRSRows(null); 
	$('#Srs_Dialog').modal('hide'); 
	cshSRSClearFlds();
});*/

/*Add Row Click */
$("#SrsARow").on("click",function(){
	//if(!valcshSRSTbl())return; 
			cshSRSClearFlds();
			
			$("#txtFldDlgSRSId").val(makeid(17));
			$("#txtFldDlgSRSRefId").val(newMakeId("SRS",15))
			
			showFIPAModel('Srs_Dialog','SRS Details');  
			toggleSRSClassification($("#selDlgSRSClassify"),$("#txtFldDlgSRSPerFrom"),$("#txtFldDlgSRSPerTo"),$("#txtFldDlgSRSAge"),$("#txtFldDlgSRSPayoutPerd"));
	//		$("#Srs_Dialog").find("input[id=txtFldDlgSRSMode]").val("I");//instant save added line
			$('#Srs_Dialog').on('shown.bs.modal', function () {
//				$("#Srs_Dialog").find(".modal-footer").find("button:eq(0)").text("Add");
				$("#Srs_Dialog").find("input[id=selDlgSRSClassify]").focus(); 
				$("#Srs_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
						if(!validatecshSRSDetails())return;
					   	cshSRSRdlyflds(INS_MODE);  
					   	getcshSRSRows(null); 
						$('#Srs_Dialog').modal('hide'); 

						cshSRSClearFlds();
							
							
						crudicons(this,'srsTable','SelSrsDets','SrsERow','SrsDRow');
						
					
				  });  
			});
			
			
});



/*Populate Data */
function getcshSRSRows(dataset){ 
 
var cell0 = '<span></span>'+
'<input type="hidden" name="txtFldcshSRSMode" readonly="true" value="'+INS_MODE+'" class="fipaMode"/><input type="hidden" name="txtFldSRSId"><input type="hidden" name="txtFldSRSRefId">';
//<!--changes done 19/06/2019 -->
var cell1 = '<div class="checkbox checkbox-primary text-center"><input type="checkbox" name="radcshSRSSelect"/><label>&nbsp;</label></div>'; 
var cell2 = '<select name="selSrsClassify" id="selSrsClassify" class="form-control editable" onmouseover="fipaTooltip(this);"> </select>'; 
var cell3 = '<input type="text" name="txtFldSrsDesc" class="form-control editable" onmouseover="fipaTooltip(this);" maxlength="150"/>';
var cell4 = '<select name="selSrsFreq" id="selSrsFreq" class="form-control editable" onmouseover="fipaTooltip(this);"> </select>';
var cell5 = '<input type="text" name="txtFldSrsAmount" class="form-control editable" onmouseover="fipaTooltip(this);"  />';
var cell6 = '<input type="text" name="txtFldSrsPerdFrom" class="form-control editable" onmouseover="fipaTooltip(this);"  maxlength="10"/>';
var cell7 = '<input type="text" name="txtFldSrsPerdTo" class="form-control editable" onmouseover="fipaTooltip(this);" maxlength="10" />';
var cell8 = '<input type="text" name="txtFldSrsAgestart" class="form-control editable" onmouseover="fipaTooltip(this);"  />';
var cell9 = '<input type="text" name="txtFldSrsPayoutPerd" class="form-control editable" onmouseover="fipaTooltip(this);" />'+
'<input type="hidden" name="txtFldSrsCrtdBy"/><input type="hidden" name="txtFldSrsCrtdDate"/>';  

srsTable.row.add( [cell0,cell1,cell2,cell3,cell4,cell5,cell6,cell7,cell8,cell9] ).draw( false );
var $lastRow = $("#srsTable tbody tr:last");
$lastRow.show();
var rowCount = $('#srsTable tbody tr:visible').length;	
rowCount = (rowCount == 0) ? $('#srsTable tbody tr').length : rowCount;
$lastRow.find("td:first").find('span').text(rowCount); 

$lastRow.find("td:eq(1)").find("input:first").click(function(){
	selectSingleRow(this);
})

$lastRow.find("td:eq(1)").find("input:first").attr('id',"radcshSRS"+$lastRow.index())
.parent().find('label').attr('for',"radcshSRS"+$lastRow.index());
 
$lastRow.find("td:eq(0)").find('input:eq(1)').val($("#txtFldDlgSRSId").val());
$lastRow.find("td:eq(0)").find('input:eq(2)').val($("#txtFldDlgSRSRefId").val());

var sel1 =  $("#selDlgSRSClassify > option").clone();
$lastRow.find("td:eq(2)").find('select:eq(0)').append(sel1);
$lastRow.find("td:eq(2)").find('select:eq(0)').val($("#selDlgSRSClassify").val());
$lastRow.find("td:eq(2)").find('select:eq(0)').on("change",function(){
	toggleSRSClassification($lastRow.find("td:eq(2)").find('select:eq(0)'),$lastRow.find("td:eq(6)").find('input:eq(0)'),$lastRow.find("td:eq(7)").find('input:eq(0)'),$lastRow.find("td:eq(8)").find('input:eq(0)'),$lastRow.find("td:eq(9)").find('input:eq(0)'));
	setSRSWithdrwDesc($lastRow.find("td:eq(2)").find('select:eq(0)'),$lastRow.find("td:eq(3)").find('input:eq(0)'));
	addSRSToRetirement($lastRow);
});


$lastRow.find("td:eq(3)").find('input:eq(0)').val($("#txtFldDlgSRSDesc").val());
$lastRow.find("td:eq(3)").find('input:eq(0)').on("change",function(){
	addSRSToRetirement($lastRow);
})


var sel2 =  $("#txtFldDlgSRSFreq > option").clone();
$lastRow.find("td:eq(4)").find('select:eq(0)').append(sel2);
$lastRow.find("td:eq(4)").find('select:eq(0)').val($("#txtFldDlgSRSFreq").val()); 


$lastRow.find("td:eq(5)").find('input:eq(0)').val($("#txtFldDlgSRSAmount").val());  
$lastRow.find("td:eq(5)").find('input:eq(0)').addClass("applyEvntUsd");  
$lastRow.find("td:eq(5)").find('input:eq(0)').on("change",function(){
	addSRSToRetirement($lastRow);
})



$lastRow.find("td:eq(6)").find('input:eq(0)').val($("#txtFldDlgSRSPerFrom").val());
$lastRow.find("td:eq(6)").find('input:eq(0)').datetimepicker(dateOptions).on("change",function(){
	 checkDateFormat($(this));  
	 if(!dhtmlChkDateValidation($lastRow.find("td:eq(6)").find('input:eq(0)'),$lastRow.find("td:eq(7)").find('input:eq(0)'),"To Date should greater than the From Date"));  
	 return;
}); 

$lastRow.find("td:eq(7)").find('input:eq(0)').val($("#txtFldDlgSRSPerTo").val());
$lastRow.find("td:eq(7)").find('input:eq(0)').datetimepicker(dateOptions).on("change",function(){
	 checkDateFormat($(this));  
	 if(!dhtmlChkDateValidation($lastRow.find("td:eq(6)").find('input:eq(0)'),$lastRow.find("td:eq(7)").find('input:eq(0)'),"To Date should greater than the From Date"));  
	 return;
}); 

$lastRow.find("td:eq(8)").find('input:eq(0)').val($("#txtFldDlgSRSAge").val());
$lastRow.find("td:eq(8)").find('input:eq(0)').on("change",function(){
	satRetAgeValidate($(this));
//	StartAgeValidate($(this),$lastRow.find("td:eq(9)").find('input:eq(0)'));
	addSRSToRetirement($lastRow);
}); 
$lastRow.find("td:eq(8)").find('input:eq(0)').addClass("applyEvntYrs");  


$lastRow.find("td:eq(9)").find('input:eq(0)').val($("#txtFldDlgSRSPayoutPerd").val());
$lastRow.find("td:eq(9)").find('input:eq(0)').on("change",function(){ 
//	EndAgeValidate($(this),$lastRow.find("td:eq(8)").find('input:eq(0)'));
	addSRSToRetirement($lastRow);
});
$lastRow.find("td:eq(9)").find('input:eq(0)').addClass("applyEvntYrs");

  
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
	crudicons(this,'srsTable','SelSrsDets','SrsERow','SrsDRow');
			
});
//DHTML CRUD ICONS

$lastRow.find("td:eq(1)").find("input:first").click(function(){
	selectSingleRow(this);
//	DHTML CRUD ICONS
	crudicons(this,'srsTable','SelSrsDets','SrsERow','SrsDRow');
});

if(dataset != null){

	rowCount = $('#srsTable tbody tr').length;	
		$lastRow.find("td:first").find('span').text(rowCount); 
	
			if($("#hTxtFldFnaReviewFlag").val() == "U"  || $("#hTxtFldFnaReviewFlag").val() == ""){ 
					$lastRow.find("td:eq(0)").find('input:eq(0)').val(col);
			}
			
	var infoDetsArr = new Array();
	
		for(var data in dataset){
			var col = dataset[data];
			
			switch(data){
			
				case "srsId": 
					$lastRow.find("td:eq(0)").find('input:eq(1)').val(col); 
					break;
					
				case "srsRefId": 
					
					$lastRow.find("td:eq(0)").find('input:eq(2)').val(isEmpty(col) ? newMakeId("SRS",15) : col); 
					break;
					
				case "srsClassfy": 
					selectNullvalChk($lastRow.find("td:eq(2)"),col);
					break;
					
				case "srsDesc": 
					$lastRow.find("td:eq(3)").find('input:eq(0)').val(col); 
					break;
				 
				case "srsFreq": 
					selectNullvalChk($lastRow.find("td:eq(4)"),col); 
					break;
				 
				case "srsAmount": 
					$lastRow.find("td:eq(5)").find('input:eq(0)').val(col);
					break;
				 
				 
				case "srsPerdFrom": 
					$lastRow.find("td:eq(6)").find('input:eq(0)').val(col);  
					break;
				 
					
				case "srsPerdTo": 
					$lastRow.find("td:eq(7)").find('input:eq(0)').val(col);  
					break;
				 
				case "srsAgestart": 
					$lastRow.find("td:eq(8)").find('input:eq(0)').val(col);
					break;
				 
				case "srsPayoutPerd": 
					$lastRow.find("td:eq(9)").find('input:eq(0)').val(col);
					break;
				 
				 
				case "srsCrtdBy": 
					$lastRow.find("td:eq(9)").find('input:eq(1)').val(col);
					break;
				 
				 
				case "srsCrtdDate": 
					$lastRow.find("td:eq(9)").find('input:eq(2)').val(col);
					break; 
					
					 
				case "srsModBy": 
					infoDetsArr.push(col);
					break;
				 
				 
				case "srsModDate": 
					infoDetsArr.push(col);
					break; 
					 
			}			 
			 
		}
	}else{
		//	DHTML CRUD ICONS
		crudicons(null,'srsTable','SelSrsDets','SrsERow','SrsDRow');
		
		
		
	}


	addSRSToRetirement($lastRow);
	
	
	toggleSRSClassification($lastRow.find("td:eq(2)").find('select:eq(0)'),$lastRow.find("td:eq(6)").find('input:eq(0)'),$lastRow.find("td:eq(7)").find('input:eq(0)'),$lastRow.find("td:eq(8)").find('input:eq(0)'),$lastRow.find("td:eq(9)").find('input:eq(0)'));

}

//DHTML SELECT ALL
function SelAllSRS(obj){
	
	if($(obj).is(":checked")){
		
		$('#srsTable tbody tr').find("td:eq(1)").find("input[type=checkbox]").prop("checked",true);
		
		$("#SrsDRow").attr("disabled",false);
		$('#srsTable tbody tr').addClass("selected");
		
		var $rowCount = $('#srsTable tbody tr').length;
		
		if($rowCount == 0){
			$(obj).prop("checked",false);
			/*$("#SrsERow").attr("disabled",true);
			$("#SrsDRow").attr("disabled",true);*/
		}else if($rowCount == 1){
			$("#SrsERow").attr("disabled",false);
			$("#SrsDRow").attr("disabled",false);
		}else if($rowCount > 1){
			/*$("#SrsERow").attr("disabled",true);*/
			$("#SrsDRow").attr("disabled",false);
		}
		
	}else{
		
		$('#srsTable tbody tr').find("td:eq(1)").find("input[type=checkbox]").prop("checked",false);
		
		$('#srsTable tbody tr').removeClass("selected");
		
		/*$("#SrsERow").attr("disabled",true);
		$("#SrsDRow").attr("disabled",true);*/
		
	}
	


}
 
/*Edit Row Click */
$("#SrsERow").on("click",function(){ 
	SrsVRow(); 
});


/*View Row Click */
function SrsVRow(){
	var isOneRowSelected=0;
	var $rowCount = $('#srsTable tbody tr').length;	
	var $lastRow = $("#srsTable tbody tr:last");	
	
	if($rowCount<1){
		applyToastrAlert("Insert rows before edit/view");
		return;
	} 
	
	/*$("#srsTable tbody tr").each(function(){
		var $row = $(this);   
		$row.removeClass('selected');  
		$(this).removeAttr("style"); 
		$row.find("td").removeAttr("style");
		
			
	});*/
	
	
	$("#srsTable tbody").find('input[name="radcshSRSSelect"]').each(function(){ //Checkbox selection
		var $curElm=$(this);
		if($curElm.is(":checked")){ 
			isOneRowSelected++;
		}
	});
	
	
	if(isOneRowSelected > 1){ 
		applyToastrAlert("More than one rows selected.Select one row only");
		return;
	}
	
	$("#srsTable tbody").find('input[name="radcshSRSSelect"]').each(function(){ //Checkbox selection
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
				
				 	cshSRSRdlyflds($mode);
					cshSRSfilldlgval($row); 
					showFIPAModel('Srs_Dialog','SRS Details');  
					$("#Srs_Dialog").find(".modal-footer").find("button:eq(0)").removeClass("hidden");//instant save added line
					
					$('#Srs_Dialog').on('shown.bs.modal', function () {
					//	$row.find("input[type=text]").prop("readonly",true);//instant save added line
				//		$row.find("select").prop("disabled",true);//instant save added line
		
//						$("#Srs_Dialog").find(".modal-footer").find("button:eq(0)").text("Edit");
						$("#Srs_Dialog").find("input[id=selDlgSRSClassify]").focus();//Aravindh
						$("#Srs_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
							 if(!validatecshSRSDetails())return; 
					     		if(!isEmpty($RowId) && !($RowId==undefined)){  
					     			cshSRSfilldomval($RowId,$row); 
					     		}  
					     	//	instantCashSRSSave($row,UPD_MODE); //instant save added line
					     		toggleSRSClassification($row.find("td:eq(2)").find('select:eq(0)'),$row.find("td:eq(6)").find('input:eq(0)'),$row.find("td:eq(7)").find('input:eq(0)'),$row.find("td:eq(8)").find('input:eq(0)'),$row.find("td:eq(9)").find('input:eq(0)'));
					     		addSRSToRetirement($row);
								$('#Srs_Dialog').modal('hide'); 
								cshSRSClearFlds();
								
								crudicons(this,'srsTable','SelSrsDets','SrsERow','SrsDRow');
							
						});
						
						$("#Srs_Dialog").find(".modal-footer").find("button:eq(1)").on("click",function(){
							crudicons(this,'srsTable','SelSrsDets','SrsERow','SrsDRow');
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
$("#SrsDRow").on("click",function(){ 
	
	/*$("#srsTable tbody").find('input[name="radcshSRSSelect"]').each(function(){ //Checkbox selection
		var $curElm=$(this);
		if($curElm.is(":checked")){ 
			var $row = $curElm.parents("tr");                                    
			var $mode = $row.find("td:first").find('input:eq(0)').val(); 
			var $rowref = $row.find("td:first").find('input:eq(2)').val();
			
//			if($mode == "I" || $mode == "U"){
				deleteAllRetPlanByRefId($rowref);
//			}
		}
	});*/
	datatableDeleteRow('srsTable',srsTable,'SelSrsDets','SrsERow','SrsDRow'); 
	
	
});

/*Clear Fields */
function cshSRSClearFlds(){
	$("#Srs_Dialog").find("input[type=text]").val("");
	$("#Srs_Dialog").find("textarea").val("");
	$("#Srs_Dialog").find("select").val("");
}

/*Disabled/Readonly Fields */
function cshSRSRdlyflds(mode){ 
	 if(mode == QRY_MODE ){
			$("#Srs_Dialog :input").prop("disabled", true); 
	 } else if((mode == INS_MODE) || (mode == UPD_MODE) ){
			$("#Srs_Dialog :input").prop("disabled", false);
	 }
}

/*Validation */
function validatecshSRSDetails(){
	 
	/*if(!(validateFocusFlds('Srs_Dialog','selDlgSRSClassify',SRS_CLASSFY))) return; 
	if(!(validateFocusFlds('Srs_Dialog','txtFldDlgSRSDesc',SRS_DESC))) return;
	if(!(validateFocusFlds('Srs_Dialog','txtFldDlgSRSFreq',SRS_FREQ))) return;
	
	if($("#selDlgSRSClassify").val() == "Annual Addition"){
		if(!(validateFocusFlds('Srs_Dialog','txtFldDlgSRSPerFrom',SRS_PERFROM))) return;
		if(!(validateFocusFlds('Srs_Dialog','txtFldDlgSRSPerTo',SRS_PERTO))) return;
	}*/
	
	
	  return true; 
}

function valcshSRSTbl(){ 
//	var $lastRow = $("#srsTable tbody tr:last");	
	var $RowCount = srsTable.rows().count();

	var valid=true;
	/*if($RowCount > 0 ){ 
		$("#srsTable tbody tr").each(function(){
			var $lastRow=$(this);
		if(!(validateFocusDhtmlFlds($lastRow.find("td:eq(2)").find('select:eq(0)'), SRS_CLASSFY,SCREEN_SRS))) {valid=false;return false;};
		if(!(validateFocusDhtmlFlds($lastRow.find("td:eq(3)").find('input:eq(0)'), SRS_DESC,SCREEN_SRS))) {valid=false;return false;}; 
		if(!(validateFocusDhtmlFlds($lastRow.find("td:eq(4)").find('select:eq(0)'), SRS_FREQ,SCREEN_SRS))){valid=false;return false;};
		if($lastRow.find("td:eq(2)").find('select:eq(0)').val() == "Annual Addition"){
			if(!(validateFocusDhtmlFlds($lastRow.find("td:eq(7)").find('input:eq(0)'), SRS_PERTO,SCREEN_SRS))){valid=false;return false;};
		} 
		});
	} */ 
	 return valid;
}



/*Mandatory Fields Tooltip*/ 
$("#selDlgSRSClassify,#txtFldDlgSRSDesc,#txtFldDlgSRSFreq").on("change",function(){
	if(!isEmpty($(this).val())){
	$(this).removeClass("mandatoryFillFlds");
	$(this).qtip('disable');
	$(this).qtip('destroy',true);
	}
});




/* Filling Model Fields*/
function cshSRSfilldlgval($lastRow){
	  
	//$('#Srs_Dialog #txtFldDlgSRSMode').val($lastRow.find("td:eq(0)").find('input:eq(0)').val());//instant save added line
	var srspkid = $lastRow.find("td:eq(0)").find('input:eq(1)').val();
	srspkid = isEmpty(srspkid) ? makeid(17) :srspkid;
	
	var srsfkid = $lastRow.find("td:eq(0)").find('input:eq(2)').val();
	srsfkid = isEmpty(srsfkid) ? newMakeId("SRS",15) : srsfkid;
	
	  $('#Srs_Dialog #txtFldDlgSRSId').val(srspkid);
	  $('#Srs_Dialog #txtFldDlgSRSRefId').val(srsfkid);
	  $('#Srs_Dialog #selDlgSRSClassify').val($lastRow.find("td:eq(2)").find('select:eq(0)').val());
	  $('#Srs_Dialog #txtFldDlgSRSDesc').val($lastRow.find("td:eq(3)").find('input:eq(0)').val());
	  $('#Srs_Dialog #txtFldDlgSRSFreq').val($lastRow.find("td:eq(4)").find('select:eq(0)').val());
	  $('#Srs_Dialog #txtFldDlgSRSAmount').val($lastRow.find("td:eq(5)").find('input:eq(0)').val());
	  $('#Srs_Dialog #txtFldDlgSRSPerFrom').val($lastRow.find("td:eq(6)").find('input:eq(0)').val());
	  $('#Srs_Dialog #txtFldDlgSRSPerTo').val($lastRow.find("td:eq(7)").find('input:eq(0)').val());
	  $('#Srs_Dialog #txtFldDlgSRSAge').val($lastRow.find("td:eq(8)").find('input:eq(0)').val());
	  $('#Srs_Dialog #txtFldDlgSRSPayoutPerd').val($lastRow.find("td:eq(9)").find('input:eq(0)').val());
	  $('#Srs_Dialog #txtFldDlgSRSCrtdBy').val($lastRow.find("td:eq(9)").find('input:eq(0)').val());
	  $('#Srs_Dialog #txtFldDlgSRSCrtdDate').val($lastRow.find("td:eq(9)").find('input:eq(1)').val());
	  
	  
	 
}

/* Filling Table Fields*/
function cshSRSfilldomval($RowId,$row){
	
	$row.find("td:eq(0)").find('input:eq(1)').val( $('#txtFldDlgSRSId').val());
	$row.find("td:eq(0)").find('input:eq(2)').val($('#txtFldDlgSRSRefId').val());
	
	$row.find("td:eq(2)").find('select:eq(0)').val($("#selDlgSRSClassify").val()); 
	
	$row.find("td:eq(3)").find('input:eq(0)').val($("#txtFldDlgSRSDesc").val());
	$row.find("td:eq(4)").find('select:eq(0)').val($("#txtFldDlgSRSFreq").val());  
	$row.find("td:eq(5)").find('input:eq(0)').val($("#txtFldDlgSRSAmount").val()); 
	$row.find("td:eq(6)").find('input:eq(0)').val($("#txtFldDlgSRSPerFrom").val());  
	$row.find("td:eq(7)").find('input:eq(0)').val($("#txtFldDlgSRSPerTo").val());  
	$row.find("td:eq(8)").find('input:eq(0)').val($("#txtFldDlgSRSAge").val());  
	$row.find("td:eq(9)").find('input:eq(0)').val($("#txtFldDlgSRSPayoutPerd").val());  
	$row.find("td:eq(9)").find('input:eq(0)').val($('#txtFldDlgSRSCrtdBy').val()) ;
	$row.find("td:eq(9)").find('input:eq(1)').val($('#txtFldDlgSRSCrtdDate').val())  ;
	
	//$row.find("input[type=text]").prop("readonly",true);//instant save added line
	//$row.find("select").prop("disabled",true);//instant save added line 
}



//instant save added line
$("#Srs_Dialog").find("input,select,textarea").on("change",function(){
	$("#Srs_Dialog").find(".modal-footer").find("button:eq(0)").removeClass("hidden");
});

$("#selDlgSRSClassify").on("change",function(){
	
	setSRSWithdrwDesc($("#selDlgSRSClassify"),$("#txtFldDlgSRSDesc"));
	
	toggleSRSClassification($("#selDlgSRSClassify"),$("#txtFldDlgSRSPerFrom"),$("#txtFldDlgSRSPerTo"),$("#txtFldDlgSRSAge"),$("#txtFldDlgSRSPayoutPerd"));
	
});




/*Check Start Age via End Age validations*/
$("#txtFldDlgSRSAge").on("change",function(){ 
	satRetAgeValidate($(this));
//	StartAgeValidate($(this),$("#txtFldDlgSRSPayoutPerd"));
});


function satRetAgeValidate(elmId){
	var age = Number(elmId.val());
	var curassmpt = Number($("#caSRSSatRetAge").val());

	if(isEmpty(curassmpt)){
		curassmpt=Number(62);
	}
	
	if(!isEmpty(age)){
		if(age < curassmpt){
			applyErrorToastrAlert("Age should be greater "+curassmpt+" (Saturated Retirement Age)",elmId);
			elmId.val("");
			return false;
		} 
	}
}
 
/**/


$("#txtFldDlgSRSPerFrom").change(function(){ 
	
	 checkDateFormat($(this));
	if(!chkFromToDateValidation('txtFldDlgSRSPerFrom','txtFldDlgSRSPerTo',"Period To Date should greater than the Period From Date")); 
});
/*
$("#txtFldDlgSRSPerFrom").change(function(){
	 checkDateFormat($(this));
});*/

$("#txtFldDlgSRSPerTo").change(function(){
	 checkDateFormat($(this));
	if(!chkFromToDateValidation('txtFldDlgSRSPerFrom','txtFldDlgSRSPerTo',"Period To Date should greater than the Period From Date"));
}); 
/*
$("#txtFldDlgSRSPerTo").change(function(){    
	checkDateFormat($(this));
}); */


function setSRSWithdrwDesc(classfyId,descId){
//	if(classfyId.val() == "Annual Withdrawals"){	 
		if(!chkForWithdrawal(classfyId)){
			return;
		}else{
			if(classfyId.val() == "Annual Withdrawals"){
				descId.val("Cash Out");
			}else{
				descId.val("");
			}
		}
			
		
//	}else{ 
//		descId.val("");
//	}
}

function toggleSRSClassification(classfyId,perFrm,perTo,age,payoutage){

	if(classfyId.val() == "Annual Withdrawals"){
		$("span#classificationSpan").text("Annual Withdrawals");
		$("#srsAnnualAddition").addClass("hidden");
		$("#srsAnnualWithdrawals").removeClass("hidden"); 
		perFrm.prop("readonly",true).val("");
		perTo.prop("readonly",true).val("");
		age.prop("readonly",false);
		payoutage.prop("readonly",false); 
	}else{ 
		$("span#classificationSpan").text("Annual Addition");
		$("#srsAnnualAddition").removeClass("hidden"); 
		$("#srsAnnualWithdrawals").addClass("hidden");
		perFrm.prop("readonly",false);
		perTo.prop("readonly",false);
		age.prop("readonly",true).val("");
		payoutage.prop("readonly",true).val(""); 
	}
	
}


function chkForWithdrawal(elmid){
	/*
	var cls = elmid.val();
	var flg=true;
	
	
	var count = srsTable.row().count();
	var withdrawcnt = 0;
	
	if(count >0) {
		$("#srsTable tbody tr").each(function(){
			var mode_r = $(this).find("td:first").find('input:eq(0)').val();
			if(mode_r != "D"){
				var classfication = $(this).find("td:eq(2)").find("select:eq(0)").val();
				if(classfication == "Annual Withdrawals" ){
					withdrawcnt++;
				}
			}
			
			
		});
	}
	if(withdrawcnt > 0 && cls == "Annual Withdrawals" ){
		applyErrorToastrAlert("There is Annual Withdrawal record exist already, cannot record it again",elmid);
		elmid.val("");
		return false;
	}*/
	 
	return true;
}

function addSRSToRetirement(lastrow){
	
	
	
	var $rowref		=lastrow.find("td:eq(0)").find("input:eq(2)").val();
	
	console.log($rowref)
	
	var srsclass = lastrow.find("td:eq(2)").find('select:eq(0)').val();
	
	if(srsclass == "Annual Withdrawals"){
		
		var rowexist = chkRPIncAssetRowExist($rowref);
		
		var $tblRETRow = null; 
		if(rowexist == null){
			getincassrtRows(null,"N");
			$tblRETRow =  $("#IncAssRetPlgtbl tbody tr:last"); 
		}else{
			$tblRETRow = rowexist;
		}
		
		
		
		
		var classify = lastrow.find("td:eq(2)").find('select:eq(0)').val();
		var desc = lastrow.find("td:eq(3)").find('input:eq(0)').val();
		var amount = lastrow.find("td:eq(5)").find('input:eq(0)').val();
		var fromage = lastrow.find("td:eq(8)").find('input:eq(0)').val();
		var payoutperd = lastrow.find("td:eq(9)").find('input:eq(0)').val();
		
		var srssatury = $("#caSRSSatRetAge").val();
		srssatury = isEmpty(srssatury) ? "62" : srssatury;
		
		
		fromage = isEmpty(fromage) ? srssatury : fromage;
		payoutperd = isEmpty(payoutperd) ? "1" : payoutperd;
		
		var toage = Number(fromage) + Number(payoutperd) - 1;
		
		$tblRETRow.find("td:eq(0)").find('input:eq(2)').addClass("rowrefid").val($rowref);
		
		
		
			if(isEmpty($tblRETRow.find("td:eq(0)").find('input:eq(1)').val())){
				$tblRETRow.find("td:eq(0)").find('input:eq(1)').val(makeid(17));
			}
		
		$tblRETRow.find("td:eq(2)").find('input:eq(0)').val("SRS/"+classify);
		
		$tblRETRow.find("td:eq(3)").find('input:eq(0)').val(desc);
		 
		selectNullvalChk($tblRETRow.find("td:eq(4)"),"REGULAR"); 
		
		$tblRETRow.find("td:eq(5)").find('input:eq(0)').val(roundNumber( amount ) ); 	
		
		$tblRETRow.find("td:eq(6)").find('input:eq(0)').val("0"); 
			
		$tblRETRow.find("td:eq(7)").find('input:eq(0)').val(Number("0"));   
	  
		selectNullvalChk($tblRETRow.find("td:eq(8)"),"SELF");
	 
		$tblRETRow.find("td:eq(9)").find('input:eq(0)').val(fromage);
	 
		$tblRETRow.find("td:eq(10)").find('input:eq(0)').val(toage).prop("disabled",true);
		
	}else{
		
		deleteAllRetPlanByRefId($rowref);
	}
	
	reOrderVisibleRows("IncAssRetPlgtbl");
	
	
	
	
}