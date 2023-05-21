
$(window).scroll(function() {
    if ($(this).scrollTop() > 250){  
        $('fixed_tab_header').addClass("sticky"); 
    }
    else{
        $('fixed_tab_header').removeClass("sticky");
    }
});

var row=1;
$(document).on("click", "#ANewChldPt", function () {
	createNewChildRows();
	getNewChildRows(null);
	return false;
});


function createNewChildRows(){
	//var new_row ='<tr style="border: 1px solid #39c6c8 !important;" id="row' + row + '"><td style="border: 1px solid #39c6c8;"><div class="top_row"><div class="text-center top_row_td_sm"><input type="checkbox" name="radChildSelect"><input type="hidden" name="txtFldChildMode" readonly="true" value="'+INS_MODE+'" class="fipaMode"/><input type="hidden" name="txtFldFnaChldId"><label>&nbsp;</label></div><div class="top_row_td"><label for="" class="control-label mandFldastrks pull-right text-right">Name of Child<span class="mandFldastrks">*</span> </label></div><div class="top_row_td_sm"></div><div class="top_row_td"><div class="input-group input-group-sm "><input type="text" name="txtFldChldName" onmouseover="fipaTooltip(this);" class="form-control editable" data-hasqtip="134"></div></div><div class="top_row_td"><label class="control-label pull-right text-right" for="">Est. Annual Cost of Tertiary Edn.</label></div><div class="top_row_td_sm"></div><div class="top_row_td"><div class="input-group input-group-sm "><div class="input-group-addon"><span class="glyphicon addDollarSign" id="symbolUsd"></span></div><input type="text" name="txtFldChldPerAnnEduCost" onmouseover="fipaTooltip(this);" class="form-control editable applyEvntUsd" data-hasqtip="144"></div></div></div><div class="top_row"><div class="top_row_td_md"></div><div class="top_row_td_md"></div><div class="top_row_td"><label class="control-label mandFldastrks pull-right text-right" for="">Date of Birth<small>(DD/MM/YYYY)*</small> </label></div><div class="top_row_td_sm"></div><div class="top_row_td_md"><div class="input-group input-group-sm fld-resp-mm date" id="DateChildDatepicker"> <input id="txtFldChldDob" name="txtFldChldDob" class="form-control fld-resp-mm" onmouseover="fipaTooltip(this);" type="text" maxlength="10" data-hasqtip="133"> <div class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></div></div></div><div class="top_row_td_sm"><label class="control-label pull-left" for="">Age </label><div class="input-group input-group-sm fld-resp-sm"><input type="text" class="form-control numbers applyEvntYrs" id="txtFldChldAge" name="txtFldChldAge" readonly="true"><div class="input-group-addon"><span class="glyphicon addYearSign" id="symbolYrs"></span></div></div><div class="top_row_td_sm"></div></div><div class="top_row_td"><label class="control-label pull-right text-right" for=""> Years in Tertiary Edn.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label></div><div class="top_row_td_sm_sm"></div><div class="top_row_td"><div class="input-group input-group-sm fld-resp-sm"><input type="text" name="txtFldChldYrsofEdu" id="txtFldChldYrsofEdu" class="form-control numbers applyEvntYrs"><div class="input-group-addon"><span class="glyphicon addYearSign" id="symbolYrs"></span></div></div></div></div><div class="top_row"><div class="top_row_td_sm"></div><div class="top_row_td"><label for="" class="control-label mandFldastrks pull-right text-right"> Relationship*</label></div><div class="top_row_td_sm"></div><div class="top_row_td"><select class="form-control" id="txtFldChldRel" name="txtFldChldRel"><option value="">--SELECT--</option><option value="Son">Son</option><option value="Daughter">Daughter</option></select></div><div class="top_row_td"><label class="control-label pull-right text-right" for=""> Available Education Funds Provided </label></div><div class="top_row_td_sm"></div><div class="top_row_td"><div class="input-group input-group-sm"><div class="input-group-addon"><span class="glyphicon addDollarSign" id="symbolUsd"></span></div><input type="text" name="txtFldChldAvailEdnFund" id="txtFldChldAvailEdnFund" class="form-control numbers applyEvntUsd"><input type="hidden" name="txtFldChldCrtdBy"/><input type="hidden" name="txtFldChldCrtdDate"/></div></div></div><div class="top_row"><div class="top_row_td_sm"></div><div class="top_row_td"><label class="control-label pull-right text-right" for="">Gender</label></div><div class="top_row_td_sm"></div><div class="top_row_td"><select class="form-control disabledCursor" id="txtFldChldGender" name="txtFldChldGender"><option value="">--SELECT--</option><option value="F">Female</option><option value="M">Male</option>Remarks</select></div><div class="top_row_td"><label class="control-label pull-right text-right" for="">Remarks</label></div><div class="top_row_td_sm"></div><div class="top_row_td"><input type="text" name="txtFldChldRemrks" onmouseover="fipaTooltip(this);" class="form-control editable"  /></div></div><div class="top_row"><div class="top_row_td_sm"></div><div class="top_row_td"><label class="control-label pull-right text-right" for="">Years to Tertiary<a class="btn btn-default addinfoicon" id="poptxtFldNewChldYrs2ter"> </a></label></div><div class="top_row_td_sm"></div><div class="top_row_td"><div class="input-group input-group-sm fld-resp-sm"><input id="txtFldChldYrs2ter" name="txtFldChldYrs2ter" class="form-control numbers applyEvntYrs" type="text"><div class="input-group-addon "><span class="glyphicon addYearSign" id="symbolYrs"></span></div></div></div><div class="top_row_td"></div><div class="top_row_td"></div><div class="top_row_td_sm"></div></div></td></tr>';
	var new_row ='<tr style="border: 1px solid #39c6c8 !important;" id="row' + row + '"><td style="border: 1px solid #39c6c8;"><div class="top_row"><div class="text-center col-md-1 col-sm-4 col-xs-4"><input type="checkbox" name="radChildSelect"><input type="hidden" name="txtFldChildMode" readonly="true" value="'+INS_MODE+'" class="fipaMode"/><input type="hidden" name="txtFldFnaChldId"><label>&nbsp;</label></div><div class="col-md-2 col-sm-4 col-xs-4"><label for="" class="control-label mandFldastrks pull-right text-right">Name of Child<span class="mandFldastrks">*</span> </label></div><div class="col-md-3 col-sm-4 col-xs-4"><div class="input-group input-group-sm "><input type="text" name="txtFldChldName" onmouseover="fipaTooltip(this);" class="form-control editable" data-hasqtip="134"></div></div><div class="col-md-3 col-sm-4 col-xs-4"><label class="control-label pull-right text-right" for="">Est. Annual Cost of Tertiary Edn.</label></div><div class="col-md-2 col-sm-4 col-xs-4"><div class="input-group input-group-sm "><div class="input-group-addon"><span class="glyphicon addDollarSign" id="symbolUsd"></span></div><input type="text" name="txtFldChldPerAnnEduCost" onmouseover="fipaTooltip(this);" class="form-control editable applyEvntUsd" data-hasqtip="144"></div></div></div><div class="top_row"><div class="col-md-3 col-sm-4 col-xs-4"><label class="control-label mandFldastrks pull-right text-right" for="">Date of Birth<small>(DD/MM/YYYY)*</small> </label></div><div class="col-md-2 col-sm-4 col-xs-4"><div class="input-group input-group-sm fld-resp-mm date" id="DateChildDatepicker"> <input id="txtFldChldDob" name="txtFldChldDob" class="form-control fld-resp-mm" onmouseover="fipaTooltip(this);" type="text" maxlength="10" data-hasqtip="133"> <div class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></div></div></div><div class="col-md-2 col-sm-4 col-xs-4"><label class="control-label pull-left" for="">Age </label><div class="input-group input-group-sm fld-resp-sm"><input type="text" class="form-control numbers applyEvntYrs" id="txtFldChldAge" name="txtFldChldAge" readonly="true"><div class="input-group-addon"><span class="glyphicon addYearSign" id="symbolYrs"></span></div></div></div><div class="col-md-2 col-sm-4 col-xs-4"><label class="control-label pull-right text-right" for=""> Years in Tertiary Edn.</label></div><div class="col-md-2 col-sm-4 col-xs-4"><div class="input-group input-group-sm fld-resp-sm"><input type="text" name="txtFldChldYrsofEdu" id="txtFldChldYrsofEdu" class="form-control numbers applyEvntYrs"><div class="input-group-addon"><span class="glyphicon addYearSign" id="symbolYrs"></span></div></div></div></div><div class="top_row"><div class="col-md-3 col-sm-4 col-xs-4"><label for="" class="control-label mandFldastrks pull-right text-right"> Relationship*</label></div><div class="col-md-2 col-sm-4 col-xs-4"><select class="form-control" id="txtFldChldRel" name="txtFldChldRel"><option value="">--SELECT--</option><option value="Son">Son</option><option value="Daughter">Daughter</option></select></div><div class="col-md-4 col-sm-4 col-xs-4"><label class="control-label pull-right text-right" for=""> Available Education Funds Provided </label></div><div class="col-md-2 col-sm-4 col-xs-4"><div class="input-group input-group-sm"><div class="input-group-addon"><span class="glyphicon addDollarSign" id="symbolUsd"></span></div><input type="text" name="txtFldChldAvailEdnFund" id="txtFldChldAvailEdnFund" class="form-control numbers applyEvntUsd"><input type="hidden" name="txtFldChldCrtdBy"/><input type="hidden" name="txtFldChldCrtdDate"/></div></div></div><div class="top_row"><div class="col-md-3 col-sm-4 col-xs-4"><label class="control-label pull-right text-right" for="">Gender</label></div><div class="col-md-2 col-sm-4 col-xs-4"><select class="form-control disabledCursor" id="txtFldChldGender" name="txtFldChldGender"><option value="">--SELECT--</option><option value="F">Female</option><option value="M">Male</option></select></div><div class="col-md-4 col-sm-4 col-xs-4"><label class="control-label pull-right text-right" for="">Remarks</label></div><div class="col-md-2 col-sm-4 col-xs-4"><input type="text" name="txtFldChldRemrks" onmouseover="fipaTooltip(this);" class="form-control editable"  /></div></div><div class="top_row"><div class="col-md-3 col-sm-4 col-xs-4"><label class="control-label pull-right text-right" for="">Years to Tertiary<a class="btn btn-default addinfoicon" id="poptxtFldNewChldYrs2ter"> </a></label></div><div class="col-md-3 col-sm-4 col-xs-4"><div class="input-group input-group-sm fld-resp-sm"><input id="txtFldChldYrs2ter" name="txtFldChldYrs2ter" class="form-control numbers applyEvntYrs" type="text"><div class="input-group-addon "><span class="glyphicon addYearSign" id="symbolYrs"></span></div></div></div></div></td></tr>';
	$('#childParticularsTableNew').append(new_row);
	row++;
}

function getNewChildRows(dataset){
	//clearDataTable('childParticularsTableNew');
	var rowCount = $('#childParticularsTableNew tbody tr:visible').length;
	rowCount =  (rowCount == 0) ? $('#childParticularsTableNew tbody tr').length : rowCount;
	var $lastRow = $("#childParticularsTableNew tbody tr:last");	 

	var existingValChldname=$("#childParticularsTableNew tbody tr:last").find("td").find('input[name=txtFldChldName]').val();
	$lastRow.find("td").find('input[name=txtFldChldName]').on("change",function(){
		var newvalchld=$(this).val();
		addNewChildNameDyn($lastRow.find("td").find('input[name=txtFldChldName]'),'UPD'); 
		updateToAllDomTables(existingValChldname,newvalchld); 
	});
	
	
	$lastRow.find("td").find('input[name=txtFldChldDob]').datetimepicker(dateOptions).on("change",function(){
		 checkDateFormat($(this));  
	});

	$lastRow.find("td").find('input[name=txtFldChldDob]').on("change",function(){
		getdob(this,$lastRow.find("td").find('input[name=txtFldChldAge]'),true);
		ChgeChildyrToTeritary($lastRow.find("td").find('select[name=txtFldChldRel]'),$lastRow.find("td").find('input[name=txtFldChldAge]'),$lastRow.find("td").find('input[name=txtFldChldYrs2ter]'));
	});


	$lastRow.find("td").find('input[name=txtFldChldAge]').addClass("applyEvntYrs");
	$lastRow.find("td").find('input[name=txtFldChldAge]').on("change",function(){ 
		ChgeChildyrToTeritary($lastRow.find("td").find('select[name=txtFldChldRel]'),$lastRow.find("td").find('input[name=txtFldChldAge]'),$lastRow.find("td").find('input[name=txtFldChldYrs2ter]'));
	});
	
	$lastRow.find("td").find('select[name=txtFldChldRel]').on("change",function(){ 
		ChgeChildGender(this,$lastRow.find("td").find('select[name=txtFldChldGender]'));
		ChgeChildyrToTeritary($lastRow.find("td").find('select[name=txtFldChldRel]'),$lastRow.find("td").find('input[name=txtFldChldAge]'),$lastRow.find("td").find('input[name=txtFldChldYrs2ter]'));
	});
	
	
	applyEventHandlers();

	$lastRow.find("input,select").on("click",function(event){
		event.stopPropagation();
	});
	
	
//	DHTML CRUD ICONS
	$lastRow.click(function(){
		toggleChildSingleRow($lastRow);
		//crudicons(this,'childParticularsTableNew','','ENewChldPt','DNewChldPt');
				
	});
	
//	DHTML CRUD ICONS 
	$lastRow.find("td").find('input[name=radChildSelect]').click(function(){
		selectSingleRow(this);
//		DHTML CRUD ICONS
	//	crudicons(this,'childParticularsTableNew','','ENewChldPt','DNewChldPt');
	});
	
	if(dataset != null){
		
		rowCount = $('#childParticularsTableNew tbody tr').length;	
		if($("#hTxtFldFnaReviewFlag").val() == "U" || $("#hTxtFldFnaReviewFlag").val() == ""){
			$lastRow.find("td").find('input[name=txtFldChildMode]').val(col);
		} 
		var infoDetsArr = new Array();
		
		for(var data in dataset){
			var col = dataset[data];
			  
			switch(data){
			
				case "fnaChildId": 
					$lastRow.find("td").find('input[name=txtFldFnaChldId]').val(col); 
					break;
					
				case "childName":
					$lastRow.find("td").find('input[name=txtFldChldName]').val(col); 
					break;
					 
				case "childDob":
					$lastRow.find("td").find('input[name=txtFldChldDob]').val(col); 
					break;
					
				case "childAge":
					$lastRow.find("td").find('input[name=txtFldChldAge]').val(col);
					break;

				case "childRelation":
					$lastRow.find("td").find('select[name=txtFldChldRel]').val(col);
					break;
					 
				case "childGender": 
					$lastRow.find("td").find('select[name=txtFldChldGender]').val(col);
					break;
					
					
				case "childYrs2tertiary":
					$lastRow.find("td").find('input[name=txtFldChldYrs2ter]').val(col); 
					break;
					

				case "childPerannEducost":
					$lastRow.find("td").find('input[name=txtFldChldPerAnnEduCost]').val(col); 			
					break;
					
					
				case "childYrsofeducation":
					$lastRow.find("td").find('input[name=txtFldChldYrsofEdu]').val(col); 			
					break;
					 

				case "childRemarks":
					$lastRow.find("td").find('input[name=txtFldChldRemrks]').val(col); 		
					break;
					 
				case "childAvailEdnfund":
					$lastRow.find("td").find('input[name=txtFldChldAvailEdnFund]').val(col); 	
					break;
					 
					
				case "childCrtdBy": 
					$lastRow.find("td").find('input[name=txtFldChldCrtdBy]').val(col);  
					infoDetsArr.push(col);
					break;		
					
				case "childCrtdDate": 
					$lastRow.find("td").find('input[name=txtFldChldCrtdDate]').val(col);  
					infoDetsArr.push(col);
					break;
					
				case "childModifiedBy":
					infoDetsArr.push(col);
					break;
					
				case "childModifiedDate":
					infoDetsArr.push(col);   
					break;				
			}	
			  
			
		}
	 
	}else{
//		DHTML CRUD ICONS
	//	crudicons(null,'childParticularsTableNew','','ENewChldPt','DNewChldPt');
		}	
	addNewChildNameDyn($lastRow.find("td").find('input[name=txtFldChldName]'),'INS'); 
	/*Age Update*/
	getdob($lastRow.find("td").find('input[name=txtFldChldDob]'),$lastRow.find("td").find('input[name=txtFldChldAge]'),false);
	ChgeChildyrToTeritary($lastRow.find("td").find('select[name=txtFldChldRel]'),$lastRow.find("td").find('input[name=txtFldChldAge]'),$lastRow.find("td").find('input[name=txtFldChldYrs2ter]'));
	/*EOL*/
}


/*$(document).on("click", ".delete-row", function () {
	$("#childParticularsTableNew input:checkbox").each(function(){
	    if (this.checked) {
	    
	    	$(this).parent('div').parent('div').parent('td').parent('tr').remove();
	    }
	    return false;  

	})
});*/


function toggleChildSingleRow(obj){
	var $row = $(obj).closest('tr');
	if($row.hasClass("selected")){
		$row.removeClass('selected');
		$row.find("td").find('input[name=radChildSelect]').prop("checked",false);
	} else{
		$row.addClass('selected');
		$row.find("td").find('input[name=radChildSelect]').prop("checked",true);
		$('#ENewChldPt').prop('disabled', false);
		$('#DNewChldPt').prop('disabled', false);
	}	
	
}


/*Edit Row Click */
$("#ENewChldPt").on("click",function(){ 
	VNewChldPt(); 
});

/*View Row Click */
function VNewChldPt(){
	var isOneRowSelected=0;
	var $rowCount = $('#childParticularsTableNew tbody tr').length;	
	
	if($rowCount<1){
		applyToastrAlert("Insert rows before edit/view");
		return;
	} 
	
	$("#childParticularsTableNew tbody tr").each(function(){
		var $row = $(this);   
		$row.removeClass('selected');  
		$(this).removeAttr("style"); 
		$row.find("td").removeAttr("style");
	});
	
	
	$("#childParticularsTableNew tbody").find('input[name="radChildSelect"]').each(function(){ //Checkbox selection
		var $curElm=$(this);
		if($curElm.is(":checked")){ 
		
			isOneRowSelected++;
		}
	});
	
	
	if(isOneRowSelected > 1){ 
		applyToastrAlert("More than one rows selected.Select one row only");
		return;
	}
	
	
	$("#childParticularsTableNew tbody").find('input[name="radChildSelect"]').each(function(){ //Checkbox selection 
		var $curElm=$(this);
		if($curElm.is(":checked")){ 
			
			var $row = $curElm.parents("tr");                                    
			var $mode = $curElm.parents("tr").find("td").find('input[name=txtFldChildMode]').val();  
			 $curElm.prop("checked",false);
	     	 $curElm.parents("tr").removeClass('selected');
	     	 
			if(($mode == INS_MODE) || ($mode == UPD_MODE) ){
				 var $RowId=$row.index();
				    $curElm.parents("tr").find("td").find('input[name=txtFldChildMode]').val($mode);  
					$(this).parents("tr").find("td").find("input.editable,select.editable").each(function(){
					$(this).attr("disabled",false); 
					$row.removeClass('selected');  
					$(this).parent().css({border:'1px solid green'});
					$row.css({border:'1px solid green'});
					$row.find("td").css({border:'1px solid green'}); 
				});  
 
				 
				// childRdlyflds($mode);
				 addNewChildNameDyn($curElm.parents("tr").find("td").find('input[name=txtFldChildMode]').val(),'UPD'); 
				 var existingValChldname=$curElm.parents("tr").find("td").find('input[name=txtFldChldName]').val();
				 updateToAllDomTables(existingValChldname,existingValChldname);  
				// crudicons(null,'childParticularsTableNew','','ENewChldPt','DNewChldPt');
			}  
			isOneRowSelected++;
		} 
	});
	
	 
	if(isOneRowSelected==0){
		applyToastrAlert("No Rows Selected");
		return;
	} 
	
	
}


function childRdlyflds(mode){ 
	if(mode == QRY_MODE){
		$("#child_Dialog :input").prop('disabled', true); 
	}else
	if(mode == UPD_MODE || mode == INS_MODE){ 
		$("#child_Dialog :input").prop('disabled', false);
	}  

	$("#child_Dialog #txtFldDlgChldGender").prop('disabled', true); 
    $("#child_Dialog #txtFldDlgChldAge").prop('readonly', true); 
}


function updateToAllDomTables(exstname,newchildname){
	UpdInvstmntChildName(exstname,newchildname); 
	UpdCastAtBankChildName(exstname,newchildname);  

} 

function ChgeChildGender(elmid,ChangeFld){
	  
	
	if($(elmid).val() == 'Son'){
		ChangeFld.val("M");
	}else if($(elmid).val() == 'Daughter'){ 
		ChangeFld.val("F"); 
	}else{
		ChangeFld.val(""); 
	}
	ChangeFld.prop("disabled",true);


}


function ChgeChildyrToTeritary(elmid,ageFld,ChangeFld){
	  
	
	if(!isEmpty($(elmid).val())){ 
		var yrtoter=0;
		if(!isEmpty(ageFld.val())){ 
			var childAge = Number(ageFld.val());  
			switch($(elmid).val()){
			case 'Son':
				yrtoter = ( (21-childAge) <0 ) ? 0 : (21-childAge);
				ChangeFld.val(yrtoter);
				break;
				
			case 'Daughter':
				yrtoter = ( (18-childAge) <0 ) ? 0 : (18-childAge);
				ChangeFld.val(yrtoter);
				break;
				
			case '': 
				ChangeFld.val(yrtoter);
				break;
			} 
		}else{ 
			ChangeFld.val(yrtoter);
		}
		
		
	} else{ 
		ChangeFld.val(yrtoter);
	}
	
	
}
function addNewChildNameDyn(elmid,mode){
	/*alert("addNewChildNameDyn");*/
	 if(mode == 'INS'){
	 if(!isEmpty(elmid)){
		// clearExistChildName();  
		 clearExistSearchChildName();
	 	} 
	 }else if(mode == 'DEL'){
		 /*alert("elmid--"+elmid);*/
			if(!isEmpty(elmid)){
				
		 $("#InptInvstDets_Dialog #txtFldDlgInvstChildName option[value='"+elmid+"']").remove(); 
		 $("#listofLifeIns_Dialog #lipAssured option[value='"+elmid+"']").remove();
		 $("#Cob_Dialog #selDlgCOBChildName option[value='"+elmid+"']").remove();
		 $("#Investment_Dialog #selDlgInvNameOfChild option[value='"+elmid+"']").remove();
		 $("#selDlgCPFNameOfChild  option[value='"+elmid+"']").remove();
		 
		 //Life Ins Education Plg
		 $("#liEducationPlg_Dialog #selDlgEdPlgChldName option[value='"+elmid+"']").remove();
		 $("#dlgli_EducationPlg_tab #txtFldDlgChildName option[value='"+elmid+"']").remove();
		 
			}
			
			
			
		}else if(mode == 'UPD'){
			 
			if(!isEmpty(elmid)){  
				clearExistChildName();  

			}
		}
	 childexist();
	}

function clearExistChildName(){
	var selfname=$("#dfSelfName").val();
	var spousename=$("#dfSpsName").val();
	
	var invLen= $("#Investment_Dialog #selDlgInvNameOfChild option").length; 
	var cobLen= $("#Cob_Dialog #selDlgCOBChildName option").length;  
	var inptinsLen= $("#listofLifeIns_Dialog #lipAssured option").length;  
	var lifeInsChildNamelen= $("#liEducationPlg_Dialog #selDlgEdPlgChldName option").length;  
	var DlglifeInsChildNamelen=  $("#dlgli_EducationPlg_tab #txtFldDlgChildName  option").length;  
	var cpfChildLen = $("#selDlgCPFNameOfChild option").length; 
	 
	var rowCount = $("#childParticularsTableNew tbody").find("tr").length;
	
	 var tempName=$("#listofLifeIns_Dialog #lipAssured").val();
	 for(var i=1;i<=inptinsLen;i++){  
		 $("#listofLifeIns_Dialog #lipAssured option").remove(0);
	 }
	 for(var j=1;j<=invLen;j++){
		 $("#Investment_Dialog #selDlgInvNameOfChild option").remove(0);
	 } 
	 for(var k=1;k<=cobLen;k++){
		 $("#Cob_Dialog #selDlgCOBChildName option").remove(0);
	 }   
	 for(var k=1;k<=lifeInsChildNamelen;k++){
		 $("#liEducationPlg_Dialog #selDlgEdPlgChldName option").remove(0);
	 }   
	 
	 
	 for(var k=1;k<=DlglifeInsChildNamelen;k++){
		 $("#dlgli_EducationPlg_tab #txtFldDlgChildName option").remove(0);
	 }
	  
	 
	 for(var j=1;j<=cpfChildLen;j++){
		 $(" #selDlgCPFNameOfChild option").remove(0);
	 } 
	
	$('#listofLifeIns_Dialog #lipAssured').append( '<option value="">--SELECT--</option>' ); 
	if(!isEmpty(selfname)){$('#listofLifeIns_Dialog #lipAssured').append( '<option value="'+selfname+'">'+selfname+'</option>' );}
	if(!isEmpty(spousename)){$('#listofLifeIns_Dialog #lipAssured').append( '<option value="'+spousename+'">'+spousename+'</option>' );}

	
	$('#selDlgCPFNameOfChild').append( '<option value="">--SELECT--</option>' ); 
	$('#Investment_Dialog #selDlgInvNameOfChild').append( '<option value="">--SELECT--</option>' ); 
	$('#Cob_Dialog #selDlgCOBChildName').append( '<option value="">--SELECT--</option>' ); 
	$("#liEducationPlg_Dialog #selDlgEdPlgChldName").append( '<option value="">--SELECT--</option>' ); 
	$("#dlgli_EducationPlg_tab #txtFldDlgChildName").append( '<option value="">--SELECT--</option>' );
	 
	
	if(rowCount >0){
		$('#childParticularsTableNew tbody').find('tr:visible').each(function(){
			var childname=$(this).find("td").find("input[name=txtFldChldName]").val();
			$('#selDlgCPFNameOfChild').append( '<option value="'+childname+'">'+childname+'</option>' );
			$('#Investment_Dialog #selDlgInvNameOfChild').append( '<option value="'+childname+'">'+childname+'</option>' );
			$('#Cob_Dialog #selDlgCOBChildName').append( '<option value="'+childname+'">'+childname+'</option>' );
			$('#listofLifeIns_Dialog #lipAssured').append( '<option value="'+childname+'">'+childname+'</option>' ); 
			$('#listofLifeIns_Dialog #lipAssured').val(tempName);
			$("#liEducationPlg_Dialog #selDlgEdPlgChldName").append( '<option value="'+childname+'">'+childname+'</option>' );
			$("#dlgli_EducationPlg_tab #txtFldDlgChildName").append( '<option value="'+childname+'">'+childname+'</option>' ); 
		}); 

	}

}

function clearExistSearchChildName(){
	var selfname=$("#dfSelfName").val();
	var spousename=$("#dfSpsName").val();
	
	var invLen= $("#Investment_Dialog #selDlgInvNameOfChild option").length; 
	var cobLen= $("#Cob_Dialog #selDlgCOBChildName option").length;  
	var inptinsLen= $("#listofLifeIns_Dialog #lipAssured option").length;  
	var lifeInsChildNamelen= $("#liEducationPlg_Dialog #selDlgEdPlgChldName option").length;  
	var DlglifeInsChildNamelen=  $("#dlgli_EducationPlg_tab #txtFldDlgChildName  option").length;  
	var cpfChildLen = $("#selDlgCPFNameOfChild option").length; 
	 
	var rowCount = $("#childParticularsTableNew tbody").find("tr").length;
	
	 var tempName=$("#listofLifeIns_Dialog #lipAssured").val();
	 for(var i=1;i<=inptinsLen;i++){  
		 $("#listofLifeIns_Dialog #lipAssured option").remove(0);
	 }
	 for(var j=1;j<=invLen;j++){
		 $("#Investment_Dialog #selDlgInvNameOfChild option").remove(0);
	 } 
	 for(var k=1;k<=cobLen;k++){
		 $("#Cob_Dialog #selDlgCOBChildName option").remove(0);
	 }   
	 for(var k=1;k<=lifeInsChildNamelen;k++){
		 $("#liEducationPlg_Dialog #selDlgEdPlgChldName option").remove(0);
	 }   
	 
	 
	 for(var k=1;k<=DlglifeInsChildNamelen;k++){
		 $("#dlgli_EducationPlg_tab #txtFldDlgChildName option").remove(0);
	 }
	  
	 
	 for(var j=1;j<=cpfChildLen;j++){
		 $(" #selDlgCPFNameOfChild option").remove(0);
	 } 
	
	$('#listofLifeIns_Dialog #lipAssured').append( '<option value="">--SELECT--</option>' ); 
	if(!isEmpty(selfname)){$('#listofLifeIns_Dialog #lipAssured').append( '<option value="'+selfname+'">'+selfname+'</option>' );}
	if(!isEmpty(spousename)){$('#listofLifeIns_Dialog #lipAssured').append( '<option value="'+spousename+'">'+spousename+'</option>' );}

	
	$('#selDlgCPFNameOfChild').append( '<option value="">--SELECT--</option>' ); 
	$('#Investment_Dialog #selDlgInvNameOfChild').append( '<option value="">--SELECT--</option>' ); 
	$('#Cob_Dialog #selDlgCOBChildName').append( '<option value="">--SELECT--</option>' ); 
	$("#liEducationPlg_Dialog #selDlgEdPlgChldName").append( '<option value="">--SELECT--</option>' ); 
	$("#dlgli_EducationPlg_tab #txtFldDlgChildName").append( '<option value="">--SELECT--</option>' );
	 
	
	if(rowCount >0){
		$('#childParticularsTableNew tbody').find('tr').each(function(){
			var childname=$(this).find("td").find("input[name=txtFldChldName]").val();
			$('#selDlgCPFNameOfChild').append( '<option value="'+childname+'">'+childname+'</option>' );
			$('#Investment_Dialog #selDlgInvNameOfChild').append( '<option value="'+childname+'">'+childname+'</option>' );
			$('#Cob_Dialog #selDlgCOBChildName').append( '<option value="'+childname+'">'+childname+'</option>' );
			$('#listofLifeIns_Dialog #lipAssured').append( '<option value="'+childname+'">'+childname+'</option>' ); 
			$('#listofLifeIns_Dialog #lipAssured').val(tempName);
			$("#liEducationPlg_Dialog #selDlgEdPlgChldName").append( '<option value="'+childname+'">'+childname+'</option>' );
			$("#dlgli_EducationPlg_tab #txtFldDlgChildName").append( '<option value="'+childname+'">'+childname+'</option>' ); 
		}); 

	}

}
$(document).on("click", "#DNewChldPt", function () {

	var rowCount = $('#childParticularsTableNew tbody tr').length;	 
	if(rowCount<1){
		applyToastrAlert("Insert rows before edit/view");
		return;
	}
	var isOneRowSelected=false;
	
	
	$('#childParticularsTableNew tbody').find('input[type=checkbox]').each(function(){
		if($(this).is(":checked")){ 
			isOneRowSelected=true;
		}
	});
 

	
	if(!isOneRowSelected){
		applyToastrAlert("No Rows Selected");
	} 
	
	if(isOneRowSelected) {
		var  Invindex = $("#fnaInvestmentTbl tbody").find("tr").length;
		var cobindex = $("#cashOfBanksTable tbody").find("tr").length;
		
		 
		
		var deleteFlag = 0;
		var alertFlagInv = 0; 
		var alertFlagCob = 0;
		var alertFlagEduPlg=0;
		var alertFlagDlgEduPlg=0;
		var alertFlagLifeInsurance=0; 
		
		var childname = "" ,delval ="";
		
		$('#childParticularsTableNew tbody').find('input[type=checkbox]').each(function(){
			if($(this).is(":checked")){
				childname = $(this).parents("tr").find("td").find('input[name=txtFldChldName]').val(); 
				delval=childname;
				deleteFlag=1;
			}
			
		});
		
		 
		if(deleteFlag){   
			if(Invindex>0){
				$('#fnaInvestmentTbl tbody').find('tr').each(function(){
					var invname=$(this).find("td:eq(28)").find("select:eq(0)").val();
					if(childname == invname){ 	
						if(childname != ''){
							alertFlagInv=1;
						}
						
					}
					
				}); 
			} 
			
			
			if(cobindex>0){
				$('#cashOfBanksTable tbody').find('tr').each(function(){
					var cobname=$(this).find("td:eq(16)").find("select:eq(0)").val();
					if(childname == cobname){
						if(childname != ''){
							alertFlagCob=1;
						}
						
					} 
				});
			 } 
			
			
			var EduPlgChldNameVal = $("#liEducationPlg_Dialog #selDlgEdPlgChldName").val();
			if(!(EduPlgChldNameVal == "")){
				if(childname == EduPlgChldNameVal){
					if(childname != ''){
						alertFlagEduPlg=1;
					}
					
				}
			}
			
			
			var DlgEduPlgChldNameVal = $("#dlgli_EducationPlg_tab #txtFldDlgChildName").val();
			if(!(DlgEduPlgChldNameVal == "")){
				if(childname == DlgEduPlgChldNameVal){
					if(childname != ''){
						alertFlagDlgEduPlg=1;
					}
				}
			}
			
			var LifeInsChldNameVal = $("#lifeInsdetstab #lipAssured").val();
			if(!(LifeInsChldNameVal == "")){
				if(childname == LifeInsChldNameVal){
					if(childname != ''){
						alertFlagLifeInsurance=1;
					}
				}
			}
		 
		
		 }	 
		
		if( alertFlagInv == 1 || alertFlagCob == 1  || alertFlagEduPlg == 1 || alertFlagDlgEduPlg == 1 || alertFlagLifeInsurance == 1){
		 	 applyErrorToastrAlert("Cant Able to Delete,This Child Name Existed in Sub Screens ");
   		  
		}else{  
			
			$("#confirmationalertmsgdiv #confalertimg").html(""); 
			$("#confirmationalertmsgdiv #confalertmsg").html("Are you sure to delete the row?");
			$('#confirmationalertmsgdiv').modal({
				  backdrop: 'static',
				  keyboard: false,
				  show:true,
				}); 
			$('#confirmationalertmsgdiv').on('shown.bs.modal', function() {  
				$('#confirmationalertmsgdiv').find(".modal-title").text("FIPA - Message");
				$('#confirmationalertmsgdiv').find(".modal-footer").find("button:eq(0)").unbind(); 
				$('#confirmationalertmsgdiv').find(".modal-footer").find("button:eq(0)").click(function (){   
					addNewChildNameDyn(delval,'DEL'); 
					$('#childParticularsTableNew tbody').find('input[type=checkbox]').each(function(){
						if($(this).is(":checked")){

							var row = $(this).parents("tr");                                    
							var mode = $(this).parents("tr").find("td").find('input[name=txtFldChildMode]').val();
							childname = $(this).parents("tr").find("td").find('input[name=txtFldChldName]').val(); 
						
							if(mode == INS_MODE){

								$(this).closest("tr").hide();
								$(this).parents("tr").find("td").find('input[name=txtFldChildMode]').val("D");

							}else if (mode == QRY_MODE){   
								
								$(this).closest("tr").hide();
								$(this).parents("tr").find("td").find('input[name=txtFldChildMode]').val("D");
								
								
							}
							isOneRowSelected=true;
							$(this).attr("checked",false);
						}
					});

					reOrderVisibleRows('childParticularsTableNew'); 
						$('#confirmationalertmsgdiv').modal('hide');  
						
						
//						DHTML CRUD ICONS
						var rc = chldpartTbl.row().count();
						if(rc ==0){
							$("#SelchildParticulars").prop("checked",false);
							
						//	crudicons(null,'childParticularsTableNew','','ENewChldPt','DNewChldPt');
						}
//						DHTML CRUD ICONS
					  	
				  });
				$('#confirmationalertmsgdiv').find(".modal-footer").find("button:eq(1)").click(function (){ 
					  	$('#confirmationalertmsgdiv').modal('hide');  
					  	
				  });
				
			});
			
			
			$(this).attr("checked",false); 
		 }
		

		
	}
	reOrderVisibleRows('childParticularsTableNew'); 
	

	
	
});

/*$(document).ready(function(){
	$('#Selfcntry').flagStrap();
	
	});*/


