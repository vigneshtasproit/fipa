
$(document).on("click", "#Dependtlstab", function () {
	var rowCount = $('#deptParticularsTableNew  tr:visible').length;
	if(rowCount ==  0){
		$("#deptParticularsTablefooterNew").hide();
	}
	if(rowCount >  0){
		$("#deptParticularsTablefooterNew").show();
	}
});

var row=1;
$(document).on("click", "#DepntARow", function () {
	createNewDeptRows();
	getNewdeptRows(null);
	return false;
});


function createNewDeptRows(){
	//var new_row='<tr style="border: 1px solid #39c6c8 !important;" id="row' + row + '"><td style="border: 1px solid #39c6c8;"><div class="top_row"><div class="text-center top_row_td_sm"><input type="checkbox" name="raddeptSelect"><input type="hidden" name="txtFlddeptMode" readonly="true" value="'+INS_MODE+'" class="fipaMode"/><input type="hidden" name="txtFldDepnId"><label>&nbsp;</label></div><div class="top_row_td"><label for="" class="control-label mandFldastrks pull-right text-right">Dependant Name<span class="mandFldastrks">*</span> </label></div><div class="top_row_td_sm"></div><div class="top_row_td"><div class="input-group input-group-sm "><input type="text" name="txtFldDepnName" onmouseover="fipaTooltip(this);" maxlength="60" class="form-control editable" data-hasqtip="134"></div></div><div class="top_row_td"><label class="control-label pull-right text-right" for="">Monthly Contribution</label></div><div class="top_row_td_sm"></div><div class="top_row_td"></div></div><div class="top_row"><div class="top_row_td_sm"></div><div class="top_row_td"><label class="control-label mandFldastrks pull-right text-right" for="">Date of Birth<small>(DD/MM/YYYY)*</small> </label></div><div class="top_row_td_sm_sm"></div><div class="top_row_td_sm_sm"></div><div class="top_row_td_md"><div class="input-group input-group-sm fld-resp-mm date" id="DateDeptDatePpicker"><input id="txtFldDepnDob" name="txtFldDepnDob" class="form-control fld-resp-mm"  onmouseover="fipaTooltip(this);" type="text" maxlength="10"/> <div class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></div></div></div><div class="top_row_td_sm" style="width: 3%;"><label class="control-label pull-left" for="">Age </label><div class="input-group input-group-sm fld-resp-sm"><input type="text" class="form-control numbers applyEvntYrs" id="txtFldDepnAge" name="txtFldDepnAge" onmouseover="fipaTooltip(this);" readonly="true"><div class="input-group-addon"><span class="glyphicon addYearSign" id="symbolYrs"></span></div></div><div class="top_row_td_sm"></div></div><div class="top_row_td_sm_sm"></div><div class="top_row_td"><label class="control-label pull-right text-right" for=""> By Self &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;</label></div><div class="top_row_td"><div class="input-group input-group-sm "><div class="input-group-addon"><span class="glyphicon addDollarSign" id="symbolUsd"></span></div><input type="text" name="txtFldDepnProvSlf" onmouseover="fipaTooltip(this);" class="form-control editable applyEvntUsd" data-hasqtip="144"></div></div></div><div class="top_row"><div class="top_row_td_sm"></div><div class="top_row_td"><label for="" class="control-label mandFldastrks pull-right text-right"> Relationship <span class="mandFldastrks">*</span></label></div><div class="top_row_td_sm"></div><div class="top_row_td"><select class="form-control"  onmouseover="fipaTooltip(this);" id="selDepnRelationship" name="selDepnRelationship"><option value="">--SELECT--</option><option value="ACQUAINTANCES">ACQUAINTANCES</option><option value="Aunt">Aunt</option><option value="Brother">Brother</option><option value="Candidate">Candidate</option><option value="Cousin">Cousin</option><option value="Daughter">Daughter</option><option value="Ex-Colleagues">Ex-Colleagues</option><option value="Father">Father</option><option value="Friends">Friends</option><option value="Grand Child ">Grand Child </option><option value="Grand Parent">Grand Parent</option><option value="Guardian">Guardian</option><option value="Mother">Mother</option><option value="Neighbours">Neighbours</option><option value="Nephew">Nephew</option><option value="Niece">Niece</option><option value="Relatives">Relatives</option><option value="Schoolmates">Schoolmates</option><option value="Siblings">Siblings</option><option value="Sister">Sister</option><option value="Son">Son</option><option value="Spouse">Spouse</option><option value="Uncle">Uncle</option><option value="Ward">Ward</option></select></div><div class="top_row_td"><label class="control-label pull-right text-right" for=""> By Spouse&nbsp;&nbsp; </label></div><div class="top_row_td_sm"></div><div class="top_row_td"><div class="input-group input-group-sm "><div class="input-group-addon"><span class="glyphicon addDollarSign" id="symbolUsd"></span></div><input type="text" name="txtFldDepnProvSps" onmouseover="fipaTooltip(this);" class="form-control editable applyEvntUsd" data-hasqtip="144"></div></div></div><div class="top_row"><div class="top_row_td_sm"></div><div class="top_row_td"><label class="control-label pull-right text-right" for="">Gender</label></div><div class="top_row_td_sm"></div><div class="top_row_td"><select class="form-control disabledCursor" id="selDepnGender"  onmouseover="fipaTooltip(this);" name="selDepnGender"><option value="">--SELECT--</option><option value="F">Female</option><option value="M">Male</option></select></div><div class="top_row_td"><label class="control-label pull-right text-right" for="">Total Contribution</label></div><div class="top_row_td_sm"></div><div class="top_row_td"><div class="input-group input-group-sm "><div class="input-group-addon"><span class="glyphicon addDollarSign" id="symbolUsd"></span></div><input type="text" name="txtFldDepnMonthctr" onmouseover="fipaTooltip(this);" class="form-control editable applyEvntUsd" data-hasqtip="144"><input type="hidden" name="txtFldDepnCrtdBy"/><input type="hidden" name="txtFldDepnCrtdDate"/></div></div></div><div class="top_row"><div class="top_row_td_sm"></div><div class="top_row_td"><label class="control-label pull-right text-right" for="">Years to Support</label></div><div class="top_row_td_sm"></div><div class="top_row_td"><div class="input-group input-group-sm fld-resp-sm"><input id="txtFldDepnYrssupport" name="txtFldDepnYrssupport" onmouseover="fipaTooltip(this);" class="form-control numbers applyEvntYrs" type="text"><div class="input-group-addon "><span class="glyphicon addYearSign" id="symbolYrs"></span></div></div></div><div class="top_row_td"></div><div class="top_row_td"></div><div class="top_row_td_sm"></div></div></td></tr>';
	var new_row='<tr style="border: 1px solid #39c6c8 !important;" id="row' + row + '"><td style="border: 1px solid #39c6c8;"><div class="top_row"><div class="text-center col-md-1 col-sm-4 col-xs-4"><input type="checkbox" name="raddeptSelect"><input type="hidden" name="txtFlddeptMode" readonly="true" value="'+INS_MODE+'" class="fipaMode"/><input type="hidden" name="txtFldDepnId"><label>&nbsp;</label></div><div class="col-md-2 col-sm-4 col-xs-4"><label for="" class="control-label mandFldastrks pull-right text-right">Dependent Name<span class="mandFldastrks">*</span> </label></div><div class="col-md-3 col-sm-4 col-xs-4"><div class="input-group input-group-sm "><input type="text" name="txtFldDepnName" onmouseover="fipaTooltip(this);" maxlength="60" class="form-control editable" data-hasqtip="134"></div></div><div class="col-md-3 col-sm-4 col-xs-4"><label class="control-label pull-right text-right" for="">Monthly Contribution</label></div><div class="col-md-3 col-sm-4 col-xs-4"></div></div><div class="top_row"><div class="col-md-3 col-sm-4 col-xs-4"><label class="control-label mandFldastrks pull-right text-right" for="">Date of Birth<small>(DD/MM/YYYY)*</small> </label></div><div class="col-md-2 col-sm-4 col-xs-4"><div class="input-group input-group-sm fld-resp-mm date" id="DateDeptDatePpicker"><input id="txtFldDepnDob" name="txtFldDepnDob" class="form-control fld-resp-mm"  onmouseover="fipaTooltip(this);" type="text" maxlength="10"/> <div class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></div></div></div><div class="col-md-2 col-sm-4 col-xs-4" style=""><label class="control-label pull-left" for="">Age </label><div class="input-group input-group-sm fld-resp-sm"><input type="text" class="form-control numbers applyEvntYrs" id="txtFldDepnAge" name="txtFldDepnAge" onmouseover="fipaTooltip(this);" readonly="true"><div class="input-group-addon"><span class="glyphicon addYearSign" id="symbolYrs"></span></div></div></div><div class="col-md-2 col-sm-4 col-xs-4"><label class="control-label pull-right text-right" for=""> By Self</label></div><div class="col-md-2 col-sm-4 col-xs-4"><div class="input-group input-group-sm "><div class="input-group-addon"><span class="glyphicon addDollarSign" id="symbolUsd"></span></div><input type="text" name="txtFldDepnProvSlf" onmouseover="fipaTooltip(this);" class="form-control editable applyEvntUsd" data-hasqtip="144"></div></div></div><div class="top_row"><div class="col-md-3 col-sm-4 col-xs-4"><label for="" class="control-label mandFldastrks pull-right text-right"> Relationship <span class="mandFldastrks">*</span></label></div><div class="col-md-2 col-sm-4 col-xs-4"><select class="form-control"  onmouseover="fipaTooltip(this);" id="selDepnRelationship" name="selDepnRelationship"><option value="">--SELECT--</option><option value="ACQUAINTANCES">ACQUAINTANCES</option><option value="Aunt">Aunt</option><option value="Brother">Brother</option><option value="Candidate">Candidate</option><option value="Cousin">Cousin</option><option value="Daughter">Daughter</option><option value="Ex-Colleagues">Ex-Colleagues</option><option value="Father">Father</option><option value="Friends">Friends</option><option value="Grand Child ">Grand Child </option><option value="Grand Parent">Grand Parent</option><option value="Guardian">Guardian</option><option value="Mother">Mother</option><option value="Neighbours">Neighbours</option><option value="Nephew">Nephew</option><option value="Niece">Niece</option><option value="Relatives">Relatives</option><option value="Schoolmates">Schoolmates</option><option value="Siblings">Siblings</option><option value="Sister">Sister</option><option value="Son">Son</option><option value="Spouse">Spouse</option><option value="Uncle">Uncle</option><option value="Ward">Ward</option></select></div><div class="col-md-4 col-sm-4 col-xs-4"><label class="control-label pull-right text-right" for=""> By Spouse</label></div><div class="col-md-2 col-sm-4 col-xs-4"><div class="input-group input-group-sm "><div class="input-group-addon"><span class="glyphicon addDollarSign" id="symbolUsd"></span></div><input type="text" name="txtFldDepnProvSps" onmouseover="fipaTooltip(this);" class="form-control editable applyEvntUsd" data-hasqtip="144"></div></div></div><div class="top_row"><div class="col-md-3 col-sm-4 col-xs-4"><label class="control-label pull-right text-right" for="">Gender</label></div><div class="col-md-2 col-sm-4 col-xs-4"><select class="form-control" id="selDepnGender"  onmouseover="fipaTooltip(this);" name="selDepnGender"><option value="">--SELECT--</option><option value="F">Female</option><option value="M">Male</option></select></div><div class="col-md-4 col-sm-4 col-xs-4"><label class="control-label pull-right text-right" for="">Total Contribution</label></div><div class="col-md-2 col-sm-4 col-xs-4"><div class="input-group input-group-sm "><div class="input-group-addon"><span class="glyphicon addDollarSign" id="symbolUsd"></span></div><input type="text" name="txtFldDepnMonthctr" onmouseover="fipaTooltip(this);" class="form-control editable applyEvntUsd" data-hasqtip="144"><input type="hidden" name="txtFldDepnCrtdBy"/><input type="hidden" name="txtFldDepnCrtdDate"/></div></div></div><div class="top_row"><div class="col-md-3 col-sm-4 col-xs-4"><label class="control-label pull-right text-right" for="">Years to Support</label></div><div class="col-md-3 col-sm-4 col-xs-4"><div class="input-group input-group-sm fld-resp-sm"><input id="txtFldDepnYrssupport" name="txtFldDepnYrssupport" onmouseover="fipaTooltip(this);" class="form-control numbers applyEvntYrs" type="text"><div class="input-group-addon "><span class="glyphicon addYearSign" id="symbolYrs"></span></div></div></div></div></td></tr>';
	$('#deptParticularsTableNew').append(new_row);
	row++;
}

/*Populate Data */
function getNewdeptRows(dataset){ 
 		
var rowCount = $('#deptParticularsTableNew tbody tr:visible').length;	
rowCount =  (rowCount == 0) ? $('#deptParticularsTableNew tbody tr').length : rowCount;
var $lastRow = $("#deptParticularsTableNew tbody tr:last");	


$lastRow.find("td").find('input[name=raddeptSelect]').click(function(){
selectSingleRow(this);
});


$lastRow.find("td").find('input[name=txtFldDepnDob]').datetimepicker(dateOptions).on("change",function(){
	 checkDateFormat($(this));  
});



$lastRow.find("td").find('input[name=txtFldDepnDob]').on("change",function(){
	getdob(this,$lastRow.find("td").find('input[name=txtFldDepnAge]'),true);
});


$lastRow.find("td").find('input[name=txtFldDepnAge]').addClass("applyEvntYrs");

$lastRow.find("td").find('input[name=txtFldDepnYrssupport]').addClass("applyEvntYrs");
 


$lastRow.find("td").find('input[name=txtFldDepnProvSlf]').addClass("applyEvntUsd");
$lastRow.find("td").find('input[name=txtFldDepnProvSlf]').on("change",function(){
	deptMonthlyContb($lastRow.find("td").find('input[name=txtFldDepnProvSlf]'),$lastRow.find("td").find('input[name=txtFldDepnProvSps]'),$lastRow.find("td").find('input[name=txtFldDepnMonthctr]'));
	DpndcalculateRow();
	
});


$lastRow.find("td").find('input[name=txtFldDepnProvSps]').addClass("applyEvntUsd");
$lastRow.find("td").find('input[name=txtFldDepnProvSps]').on("change",function(){
	deptMonthlyContb($lastRow.find("td").find('input[name=txtFldDepnProvSlf]'),$lastRow.find("td").find('input[name=txtFldDepnProvSps]'),$lastRow.find("td").find('input[name=txtFldDepnMonthctr]'));
	DpndcalculateRow();
});
  

$lastRow.find("td").find('input[name=txtFldDepnMonthctr]').addClass("applyEvntUsd");
$lastRow.find("td").find('input[name=txtFldDepnMonthctr]').on("change",function(){
	DpndcalculateRow(); 
});

applyEventHandlers();


$lastRow.find("input,select").on("click",function(event){
	event.stopPropagation();
});
$lastRow.click(function() {
	
    var checkbox = $(this).find("td").find('input[name=raddeptSelect]');
    if(checkbox.is(":checked")) {
        checkbox.prop("checked", false);
	$lastRow.removeClass("selected");
    }else {
    checkbox.prop("checked", true);
	$lastRow.addClass("selected");
	$('#DepntERow').prop('disabled', false);
	$('#DepntDRow').prop('disabled', false);
    }
});


//DHTML CRUD ICONS
$lastRow.click(function(){
	//crudicons(this,'deptParticularsTableNew','SeldeptParticulars','DepntERow','DepntDRow');
			
});
//DHTML CRUD ICONS

$lastRow.find("td").find('input[name=raddeptSelect]').click(function(){
	selectSingleRow(this);
});

if(dataset != null){
	
	rowCount = $('#deptParticularsTableNew tbody tr').length;	
	
			if($("#hTxtFldFnaReviewFlag").val() == "U"  || $("#hTxtFldFnaReviewFlag").val() == ""){ 
					$lastRow.find("td:eq(0)").find('input[name=txtFlddeptMode]').val(col);
			}
			
	var infoDetsArr = new Array();
	
	for(var data in dataset){
		var col = dataset[data];
		
		switch(data){
		
		case "depnId": 
			$lastRow.find("td").find('input[name=txtFldDepnId]').val(col); 
			break;
			
		case "depnName": 
			$lastRow.find("td").find('input[name=txtFldDepnName]').val(col); 
			
			break;
			
		case "depnRelationship": 
			$lastRow.find("td").find('select[name=selDepnRelationship]').val(col);
			break;
		 
			 
		case "depnDob":
			$lastRow.find("td").find('input[name=txtFldDepnDob]').val(col); 
			break;
			
		case "depnAge":
			$lastRow.find("td").find('input[name=txtFldDepnAge]').val(col);
			break;
		 
		case "depnGender": 
			$lastRow.find("td").find('select[name=selDepnGender]').val(col);
			break;
			
		case "depnYrssupport": 
			$lastRow.find("td").find('input[name=txtFldDepnYrssupport]').val(col);
			infoDetsArr.push(col);				
			break;
		
		
		case "depnProvSelf": 
			$lastRow.find("td").find('input[name=txtFldDepnProvSlf]').val(col); 
			break;
			
		case "depnProvSpouse":
			$lastRow.find("td").find('input[name=txtFldDepnProvSps]').val(col); 
			break;

		case "depnMonthcontr": 
			$lastRow.find("td").find('input[name=txtFldDepnMonthctr]').val(col); 
			break;   
			
		case "depnCreatedBy": 
			$lastRow.find("td").find('input[name=txtFldDepnCrtdBy]').val(col);
			infoDetsArr.push(col);				
			break;
			
		case "depnCreatedDate":
			$lastRow.find("td").find('input[name=txtFldDepnCrtdDate]').val(col);
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
//	crudicons(null,'deptParticularsTable','SeldeptParticulars','DeptERow','DeptDRow');
	


}

	/*Age Update*/
	getdob($lastRow.find("td").find('input[name=txtFldDepnDob]'),$lastRow.find("td").find('input[name=txtFldDepnAge]'),false);
	/*EOL*/
	
}



/*Edit Row Click */
$("#DepntERow").on("click",function(){
	DeptVRow();  
});

/*View Row Click */
function DeptVRow(){
	var isOneRowSelected=0;
	var $rowCount = $('#deptParticularsTableNew tbody tr').length;	
	var $lastRow = $("#deptParticularsTableNew tbody tr:last");	
	if($rowCount<1){
		applyToastrAlert("Insert rows before edit/view");
		return;
	} 
	

	
	
	$("#deptParticularsTableNew tbody").find('input[name="raddeptSelect"]').each(function(){ //Checkbox selection
		var $curElm=$(this);
		if($curElm.is(":checked")){ 
			isOneRowSelected++;
		}
	});
	
	
	if(isOneRowSelected > 1){ 
		applyToastrAlert("More than one rows selected.Select one row only");
		return;
	}
	
	$("#deptParticularsTableNew tbody").find('input[name="raddeptSelect"]').each(function(){ //Checkbox selection
		var $curElm=$(this);
		if($curElm.is(":checked")){ 
			var $row = $curElm.parents("tr");                                    
			var $mode = $curElm.parents("tr").find("td").find('input[name=txtFlddeptMode]').val();  
			$curElm.prop("checked",false);
	     	 $curElm.parents("tr").removeClass('selected');
	     	 
			if(($mode == INS_MODE) || ($mode == UPD_MODE) ){
				 var $RowId=$row.index();
				 $curElm.parents("tr").find("td").find('input[name=txtFlddeptMode]').val($mode);   
					$(this).parents("tr").find("td").find("input.editable,select.editable").each(function(){
					$(this).attr("disabled",false); 
					$row.removeClass('selected');  
					$(this).parent().css({border:'1px solid green'});
					$row.css({border:'1px solid green'});
					$row.find("td").css({border:'1px solid green'}); 
				});  
					
					DpndcalculateRow();
					 
			}  
			isOneRowSelected++;
		
		} 
	});
	
	 
	if(isOneRowSelected==0){
		applyToastrAlert("No Rows Selected");
		return;
	}

	
}



function DpndcalculateRow(){
	 var sum1=0,sum2=0,sum3=0; 
	 var $depcount = $('#deptParticularsTableNew tbody tr').length;
	 
	
	 if($depcount >0){
		
		 $("#deptParticularsTableNew tbody tr").each(function(i,row){
			 
			   var depMode=$(this).find("td").find('input[name=txtFlddeptMode]').val();
				var depMonthctr=$(this).find("td").find('input[name=txtFldDepnMonthctr]').val(); 
				var depMonthctrSlf=$(this).find("td").find('input[name=txtFldDepnProvSlf]').val(); 
				var depMonthctrSps=$(this).find("td").find('input[name=txtFldDepnProvSps]').val();
				
				
				
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
		  
	 

		 $("#deptParticularsTablefooterNew #txtFldDepdTotMthContr").val(roundNumber(sum1)); 
		 $("#deptParticularsTablefooterNew #txtFldDepdTotAnnlContr").val(roundNumber((sum2*12)+(sum3*12))); 
		 $("#deptParticularsTablefooterNew #txtFldDepdTotMASelf").val(roundNumber(sum2));
		 $("#deptParticularsTablefooterNew #txtFldDepdTotAnnlSelf").val(sum2*12);
		 $('#expdSelfDepntcontr').val(sum2*12); 
		 $("#deptParticularsTablefooterNew #txtFldDepdTotMASps").val(roundNumber(sum3));
		 $('#deptParticularsTablefooterNew #txtFldDepdTotAnnlSps').val(sum3*12);
		 $('#expdSpsDepntcontr').val(sum3*12);

	 
		 calcSum(this,'SUMOF_ANNEXP_SELF');
		 calcSum(this,'SUMOF_ANNEXP_SPS');
		 
		
	 }else{
		 $("#deptParticularsTablefooterNew #txtFldDepdTotMthContr").val(""); 
		 $('#deptParticularsTablefooterNew #txtFldDepdTotAnnlContr').val("");
		 $("#deptParticularsTablefooterNew #txtFldDepdTotMASelf").val("");
		 $("#deptParticularsTablefooterNew #txtFldDepdTotAnnlSelf").val("");
		 $('#expdSelfDepntcontr').val(""); 
		 $("#deptParticularsTablefooterNew #txtFldDepdTotMASps").val("");
		 $('#deptParticularsTablefooterNew #txtFldDepdTotAnnlSps').val("");
		 $('#expdSpsDepntcontr').val("");

	 
		 calcSum(this,'SUMOF_ANNEXP_SELF');
		 calcSum(this,'SUMOF_ANNEXP_SPS');
		
		
	 }
	 var rowCountDepParticular = $('#deptParticularsTableNew  tr:visible').length;
	 if(rowCountDepParticular >  0){
		 $("#deptParticularsTablefooterNew").show();
		}
	 else{
		 $("#deptParticularsTablefooterNew").hide();
		}
	 
}


/*Delete Row Click */
$("#DepntDRow").on("click",function(){
	datatabledepDeleteRow('deptParticularsTableNew',deptParticularsTableNew,'SeldeptParticulars','DepntERow','DepntDRow');  	
});


function deptMonthlyContb(self,spouse,chgeto){
	
	var selfval = isEmpty(self.val())? 0 : Number(self.val());
	var spouseval= isEmpty(spouse.val())?0: Number(spouse.val());
			
	chgeto.val(roundNumber(Number(selfval)+Number(spouseval))); 
		
	}


