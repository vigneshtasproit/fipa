/*###########################################################################################################################################################*/
 /**
 * Retirement Planning -Education - retEducationplg.js
 * 
 */ 
 
 /*###########################################################################################################################################################*/
 /**
 * Life Insurance -Retirement
 * 
 */
 

/*Add Row Click */
$("#lfRetPlgARow").on("click",function(){
	
//	if(isEmpty($("#hPlanName").val()) || isEmpty($("#hInceptionDate").val()) ){ 
//		 $('#lifeInsNavTabsDets a[href="#liplandetails"]').click(); 
//		 applyToastrAlert("Please Select any of the plans in Plan Details");
//		 return;
//	}
	var disimburse = $("#retMultionret").val();
	if(disimburse == "Y"){ 
		if(isEmpty($("#retPrcnttoused").val())){
			showAlert("Key in % to be used for Retirement", $("#retPrcnttoused")); 
			return;
		}
		
		retplgClearFlds();
		
		showFIPAModel('liRetirementPlg_Dialog','Life Insurance - Retirement Planning Details');
		
//		$("#liRetirementPlg_Dialog").find("input[id=txtFldDlgRetPlgMode]").val("I");//instant save added line
		var savingdeprate = $("#caSavingDeprate");//Current Assumption
		var liretbankintrate = $("#txtFldDlgRetPlgAssBankIntRate");
		if(isEmpty(liretbankintrate.val())){
			liretbankintrate.val(savingdeprate.val());
		}
		loadAgeStartEnd($("#txtFldDlgRetPlgCommOfAge"),$("#retAgeBasedon"));
 
		fetchRetPlgPlanDetails(); 
		$("#txtFldDlgRetPlgId").val(makeid(17));
		$('#liRetirementPlg_Dialog').on('shown.bs.modal', function () { 
//			$("#liRetirementPlg_Dialog").find(".modal-footer").find("button:eq(0)").text("Add");
			$("#liRetirementPlg_Dialog").find("select[id=txtFldDlgRetPlgCommOfAge]").focus();//Aravindh
			$("#liRetirementPlg_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
					//if(!validateretplgDetails())return;
				   	retplgRdlyflds(INS_MODE);  
				   	getRetPlgRows(null); 
					$('#liRetirementPlg_Dialog').modal('hide'); 
			  });  
		});
		
	}else{
		if(isEmpty(disimburse)){
			showAlert("Select the multiple disbursment of income", $("#retMultionret")); 
		}else{
			showAlert("Since the multiple disbursment of income is No"); 
		}
		
	}
	
			
			
			
});


/*Populate Data */
function getRetPlgRows(dataset){ 
 
var cell0 = '<span></span>'+
'<input type="hidden" name="txtFldretplgMode" readonly="true" value="'+INS_MODE+'" class="fipaModeDummy"/><input type="hidden" name="txtFldLifeMvRetId"><input type="hidden" name="txtFldMvRetRefId">';
 
var cell1 = '<div class="checkbox checkbox-primary text-center"><input type="checkbox" name="radretplgSelect"/><label>&nbsp;</label></div>'; 
var cell2 ='<input type="text" name="txtFldMvretPlanName" onmouseover="fipaTooltip(this);" class="form-control editable"  readonly="true"/>';	 
var cell3 ='<input type="text" name="txtFldMvretIncDate"  onmouseover="fipaTooltip(this);" class="form-control editable" readonly="true"/>';	 
var cell4= '<input type="text" name="txtFldMvretExpDate" onmouseover="fipaTooltip(this);"  class="form-control editable" readonly="true"/>';  


var cell5 ='<input type="text" name="txtFldCommenceAge" onmouseover="fipaTooltip(this);" class="form-control editable"/>';	 
var cell6 ='<input type="text" name="txtFldEndAge"  onmouseover="fipaTooltip(this);" class="form-control editable"/>';	 
var cell7= '<input type="text" name="txtFldEsclationRate" onmouseover="fipaTooltip(this);"  class="form-control editable" />';  
var cell8='<input type="text" name="txtFldGtdIncome" onmouseover="fipaTooltip(this);" class="form-control editable"  />';	 
var cell9 ='<input type="text" name="txtFldNonGtdIncome"  onmouseover="fipaTooltip(this);" class="form-control editable" />';
var cell10 ='<input type="text" name="txtFldTotalIncome"  onmouseover="fipaTooltip(this);" class="form-control editable" />';
//var cell8 = '<input type="text" name="txtFldIncomeStream" class="form-control editable" />'; 
//var cell9= '<input type="text" name="txtFldPvFvOnRet" class="form-control editable" />';
var cell11 ='<input type="text" name="txtFldAssumedBankInt" class="form-control editable" />'+
'<input type="hidden" name="txtFldMvRetCrtdBy"/><input type="hidden" name="txtFldMvRetCrtdDate"/>'; 

var cell12 ='<input type="text" name="txtFldMvRemarks"  onmouseover="fipaTooltip(this);" class="form-control editable" />';
 
liRetirementPlgtbl.row.add( [cell0,cell1,cell2,cell3,cell4,cell5,cell6,cell7/*,cell8,cell9,*/,cell8,cell9,cell10,cell11,cell12] ).draw( false );

var rowCount = $('#liRetirementPlgtbl tbody tr:visible').length;
rowCount =  (rowCount == 0) ? $('#liRetirementPlgtbl tbody tr').length : rowCount;
var $lastRow = $("#liRetirementPlgtbl tbody tr:last");	

$lastRow.find("td:first").find('span').text(rowCount); 

$lastRow.find("td:eq(1)").find("input:first").click(function(){
	selectSingleRow(this);
});

$lastRow.find("td:eq(1)").find("input:first").attr('id',"radretplg"+$lastRow.index())
.parent().find('label').attr('for',"radretplg"+$lastRow.index());




$lastRow.find("td:eq(0)").find('input:eq(2)').val($("#covRef").val());  
$lastRow.find("td:eq(0)").find('input:eq(1)').val($("#txtFldDlgRetPlgId").val()); 
$lastRow.find("td:eq(2)").find('input:eq(0)').val($("#txtFldDlgRetPlgPlanName").val());  
$lastRow.find("td:eq(3)").find('input:eq(0)').val($("#txtFldDlgRetPlgIncepDate").val());   
$lastRow.find("td:eq(4)").find('input:eq(0)').val($("#txtFldDlgRetPlgExpDate").val()); 
 

//var sel1 = $("#txtFldDlgRetPlgCommOfAge > option").clone();
//$lastRow.find("td:eq(5)").find('input:eq(0)').append(sel1);
$lastRow.find("td:eq(5)").find('input:eq(0)').val($("#txtFldDlgRetPlgCommOfAge").val()); 
$lastRow.find("td:eq(5)").find('input:eq(0)').on("change", function(){
//	loadAgeEnd($(this),$lastRow.find("td:eq(6)").find('select:eq(0)'));
	if(!rdStartAgeValidate($(this),$('#lipOwner')))return;
	StartAgeValidate($(this),$lastRow.find("td:eq(6)").find('input:eq(0)')); 
//	setRetPlanMVIncomeDhtml($lastRow);
//	setRetPlanMVRetAgeDhtml($lastRow);
	dhtmlModChange($lastRow); 
	RetPlgcalculateRow(); 
//	NRRetPlgTbl($lastRow);//life to ret sync
});


//var sel2 = $("#txtFldDlgRetPlgEndOfAge > option").clone();
//$lastRow.find("td:eq(6)").find('input:eq(0)').append(sel2);
$lastRow.find("td:eq(6)").find('input:eq(0)').val($("#txtFldDlgRetPlgEndOfAge").val());
$lastRow.find("td:eq(6)").find('input:eq(0)').on("change", function(){
	if(!rdEndAgeValidate($lastRow.find("td:eq(5)").find('input:eq(0)'),$(this)))return;
	EndAgeValidate($(this),$lastRow.find("td:eq(5)").find('input:eq(0)')); 
	dhtmlModChange($lastRow); 
	RetPlgcalculateRow();  
//	NRRetPlgTbl($lastRow);//life to ret sync
});

$lastRow.find("td:eq(7)").find('input:eq(0)').val($("#txtFldDlgRetPlgEscaltAge").val());
$lastRow.find("td:eq(7)").find('input:eq(0)').addClass("applyEvntpCent3");
$lastRow.find("td:eq(7)").find('input:eq(0)').on("change", function(){

	dhtmlModChange($lastRow); 
	RetPlgcalculateRow(); 
//	NRRetPlgTbl($lastRow);//life to ret sync
}); 

$lastRow.find("td:eq(8)").find('input:eq(0)').val($("#txtFldDlgRetPlgGTDIncome").val());
$lastRow.find("td:eq(8)").find('input:eq(0)').addClass("applyEvntUsd26");
$lastRow.find("td:eq(8)").find('input:eq(0)').on("change", function(){
	
	$lastRow.find("td:eq(10)").find('input:eq(0)').val(setTotalGtdDhtml($lastRow));
//	setRetPlanMVIncomeDhtml($lastRow);
//	setRetPlanMVRetAgeDhtml($lastRow);
	dhtmlModChange($lastRow); 
	RetPlgcalculateRow(); 
//	NRRetPlgTbl($lastRow);//life to ret sync
}); 

$lastRow.find("td:eq(9)").find('input:eq(0)').val($("#txtFldDlgRetPlgNonGTDIncome").val());
$lastRow.find("td:eq(9)").find('input:eq(0)').addClass("applyEvntUsd26");
$lastRow.find("td:eq(9)").find('input:eq(0)').on("change", function(){
	
	$lastRow.find("td:eq(10)").find('input:eq(0)').val(setTotalGtdDhtml($lastRow));
//	setRetPlanMVIncomeDhtml($lastRow);
//	setRetPlanMVRetAgeDhtml($lastRow);
	dhtmlModChange($lastRow);
	RetPlgcalculateRow(); 
//	NRRetPlgTbl($lastRow);//life to ret sync
	 
}); 

$lastRow.find("td:eq(10)").find('input:eq(0)').val(Number($("#txtFldDlgRetPlgTotalIncome").val()));
$lastRow.find("td:eq(10)").find('input:eq(0)').addClass("applyEvntUsd26");
$lastRow.find("td:eq(10)").find('input:eq(0)').on("change",function(){
	dhtmlModChange($lastRow);
	RetPlgcalculateRow(); 
//	NRRetPlgTbl($lastRow);//life to ret sync
});

 
$lastRow.find("td:eq(11)").find('input:eq(0)').val($("#txtFldDlgRetPlgAssBankIntRate").val());
$lastRow.find("td:eq(11)").find('input:eq(0)').addClass("applyEvntpCent3");
$lastRow.find("td:eq(11)").find('input:eq(0)').on("change",function(){ 
	dhtmlModChange($lastRow); 
	RetPlgcalculateRow(); 
//	NRRetPlgTbl($lastRow);//life to ret sync
});

$lastRow.find("td:eq(12)").find('input:eq(0)').val($("#selDlgRetPlgRemarks").val());
$lastRow.find("td:eq(12)").find('input:eq(0)').on("change",function(){ 
	dhtmlModChange($lastRow);  
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
	crudicons(this,'liRetirementPlgtbl','SelliRetirementPlg','lfRetPlgERow','lfRetPlgDRow');
			
});
//DHTML CRUD ICONS

$lastRow.find("td:eq(1)").find("input:first").click(function(){
	selectSingleRow(this);
//	DHTML CRUD ICONS
	crudicons(this,'liRetirementPlgtbl','SelliRetirementPlg','lfRetPlgERow','lfRetPlgDRow');
});

 

if(dataset != null){

	$lastRow.find("td:eq(0)").find('input:eq(0)').val(UPD_MODE);
	var infoDetsArr = new Array();
	
	for(var data in dataset){
		var col = dataset[data];
		
		switch(data){
		
			case "mvretId": 
				$lastRow.find("td:eq(0)").find('input:eq(1)').val(col);  
				break;
			
			case "mvrefId": 
				$lastRow.find("td:eq(0)").find('input:eq(2)').val(col); 
				if(!isEmpty(col)){$lastRow.find("td:eq(0)").find('input:eq(2)').addClass("rowrefid");}
				break;
				
			case "mvretPlanName":
				$lastRow.find("td:eq(2)").find('input:eq(0)').val(col); 
				break;
				
			case "mvretIncDate":
				$lastRow.find("td:eq(3)").find('input:eq(0)').val(col); 
				break;
				
			case "mvretExpDate":
				$lastRow.find("td:eq(4)").find('input:eq(0)').val(col); 
				break;
				

			case "commenceAge":
				$lastRow.find("td:eq(5)").find('input:eq(0)').val(col); 
//				loadAgeStartEnd($lastRow.find("td:eq(5)").find("select:eq(0)"),$("#retAgeBasedon")); 
//				selectNullvalChk($lastRow.find("td:eq(5)"),col);  
//				loadAgeEnd($lastRow.find("td:eq(5)").find("select:eq(0)"),$lastRow.find("td:eq(6)").find("select:eq(0)"));
//				selectNullvalChk($lastRow.find("td:eq(6)"),dataset["endAge"]);    
			
				break;
				
	
			case "endAge": 
				$lastRow.find("td:eq(6)").find('input:eq(0)').val(col); 
//				selectNullvalChk($lastRow.find("td:eq(6)"),col);
//				loadAgeEnd($lastRow.find("td:eq(5)").find("select:eq(0)"),$lastRow.find("td:eq(6)").find("select:eq(0)"));
//				selectNullvalChk($lastRow.find("td:eq(6)"),dataset["endAge"]);     
				break;
				
		 
			case "esclationRate": 
				$lastRow.find("td:eq(7)").find('input:eq(0)').val(col);  
				break;
			 
			case "gtdIncome": 
				$lastRow.find("td:eq(8)").find('input:eq(0)').val(col);  
				break;
			 
			case "nongtdIncome": 
				$lastRow.find("td:eq(9)").find('input:eq(0)').val(col); 
				break;
				
			case "mvrettotinc":
				$lastRow.find("td:eq(10)").find('input:eq(0)').val(col); 
				break;
				
//			case "incomeStream": 
//				$lastRow.find("td:eq(8)").find('input:eq(0)').val(col);  
//				break;  
//				
//			case "pvfvOnRet": 
//				$lastRow.find("td:eq(9)").find('input:eq(0)').val(col);  
//				break; 
				
			case "assumedBankInt": 
				$lastRow.find("td:eq(11)").find('input:eq(0)').val(col);  
				break;
				
			case "mvretCrtdBy": 
				$lastRow.find("td:eq(11)").find('input:eq(1)').val(col);
				
				infoDetsArr.push(col);				
				break;
				
			case "mvretCrtdDate":
				$lastRow.find("td:eq(11)").find('input:eq(2)').val(col);
				infoDetsArr.push(col);
				break;
				
			case "mvretRemarks":
				$lastRow.find("td:eq(12)").find('input:eq(0)').val(col); 
				break;
				
			case "mvretModBy":
				infoDetsArr.push(col);
				break;
				
			case "mvretModDate":
				infoDetsArr.push(col);
				break;	
		}			 
		 
	}
	}
 
RetPlgcalculateRow(); 

if(dataset == null){

//	instantlfRetPlgSave($lastRow,INS_MODE);	//instant save added line	
//	NRRetPlgTbl($lastRow);
//	DHTML CRUD ICONS
	crudicons(null,'liRetirementPlgtbl','SelliRetirementPlg','','lfRetPlgDRow');
}
 
//$lastRow.find("input[type=text]").prop("readonly",true);//instant save added line
//$lastRow.find("select").prop("disabled",true);//instant save added line
reOrderVisibleRows('liRetirementPlgtbl');

}

//DHTML SELECT ALL
function SelAllliRetirementPlg(obj){
	
	if($(obj).is(":checked")){
		
		$('#liRetirementPlgtbl tbody tr').find("td:eq(1)").find("input[type=checkbox]").prop("checked",true);
		
		$("#lfRetPlgDRow").attr("disabled",false);
		$('#liRetirementPlgtbl tbody tr').addClass("selected");
		
		var $rowCount = $('#liRetirementPlgtbl tbody tr').length;
		
		if($rowCount == 0){
			$(obj).prop("checked",false);
			/*$("#lfRetPlgERow").attr("disabled",true);
			$("#lfRetPlgDRow").attr("disabled",true);*/
		}else if($rowCount == 1){
			$("#lfRetPlgERow").attr("disabled",false);
			$("#lfRetPlgDRow").attr("disabled",false);
		}else if($rowCount > 1){
			/*$("#lfRetPlgERow").attr("disabled",true);*/
			$("#lfRetPlgDRow").attr("disabled",false);
		}
		
	}else{
		
		$('#liRetirementPlgtbl tbody tr').find("td:eq(1)").find("input[type=checkbox]").prop("checked",false);
		
		$('#liRetirementPlgtbl tbody tr').removeClass("selected");
		
		/*$("#lfRetPlgERow").attr("disabled",true);
		$("#lfRetPlgDRow").attr("disabled",true);*/
		
	}
}
 
/*Edit Row Click */
$("#lfRetPlgERow").on("click",function(){
	lfRetPlgVRow();
});


/*View Row Click */
function lfRetPlgVRow(){
	var isOneRowSelected=0;
	var $rowCount = $('#liRetirementPlgtbl tbody tr:visible').length;	
	var $lastRow = $("#liRetirementPlgtbl tbody tr:visible:last");	
	
	if($rowCount<1){
		applyToastrAlert("Insert rows before edit/view");
		return;
	} 
	
	
	/*$("#liRetirementPlgtbl tbody tr:visible").each(function(){
		var $row = $(this);   
		$row.removeClass('selected');  
		$(this).removeAttr("style"); 
		$row.find("td").removeAttr("style");
		
			
	});*/
	
	
	
	$("#liRetirementPlgtbl tbody tr:visible").find('input[name="radretplgSelect"]').each(function(){ //Checkbox selection
		var $curElm=$(this);
		if($curElm.is(":checked")){ 
			isOneRowSelected++;
		}
	});
	
	
	if(isOneRowSelected > 1){ 
		applyToastrAlert("More than one rows selected.Select one row only");
		return;
	}
	
	$("#liRetirementPlgtbl tbody tr:visible").find('input[name="radretplgSelect"]').each(function(){ //Checkbox selection
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
				 	retplgRdlyflds($mode);
					retplgfilldlgval($row); 
					showFIPAModel('liRetirementPlg_Dialog','Life Insurance - Retirement Planning Details');  
					$("#liRetirementPlg_Dialog").find(".modal-footer").find("button:eq(0)").removeClass("hidden");//instant save added line
					loadAgeStartEnd($("#txtFldDlgRetPlgCommOfAge"),$("#retAgeBasedon"));
					
					$('#liRetirementPlg_Dialog').on('shown.bs.modal', function () {
				//		$row.find("input[type=text]").prop("readonly",true);//instant save added line
				//		$row.find("select").prop("disabled",true);//instant save added line 
//						$("#liRetirementPlg_Dialog").find(".modal-footer").find("button:eq(0)").text("Edit");
						$("#liRetirementPlg_Dialog").find("select[id=txtFldDlgRetPlgCommOfAge]").focus();
						$("#liRetirementPlg_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
							 if(!validateretplgDetails())return; 
					     		if(!isEmpty($RowId) && !($RowId==undefined)){  
					     			retplgfilldomval($RowId,$row); 
					     		}  
//					     		NRRetPlgTbl($row);//life to ret sync
					     		RetPlgcalculateRow(); 
								$('#liRetirementPlg_Dialog').modal('hide'); 
								retplgClearFlds();
								crudicons(null,'liRetirementPlgtbl','SelliRetirementPlg','lfRetPlgERow','lfRetPlgDRow');
							
						});
						$("#liRetirementPlg_Dialog").find(".modal-footer").find("button:eq(1)").on("click",function(){
							crudicons(null,'liRetirementPlgtbl','SelliRetirementPlg','lfRetPlgERow','lfRetPlgDRow');
						});
					});
					 
			}  
			
			if(($mode == QRY_MODE)){
				 var $RowId=$row.index();
				 $curElm.parents("tr").find("td:first").find('input:eq(0)').val(UPD_MODE); 
				 $(this).parents("tr").find("td").find("input.editable,select.editable").each(function(){
						$(this).attr("disabled",false); 
						$row.removeClass('selected');  
						$(this).parent().css({border:'1px solid green'});
						$row.css({border:'1px solid green'});
						$row.find("td").css({border:'1px solid green'});
					});
				 	retplgRdlyflds($mode);
					retplgfilldlgval($row); 
					showFIPAModel('liRetirementPlg_Dialog','Life Insurance - Retirement Planning Details');  
					$("#liRetirementPlg_Dialog").find(".modal-footer").find("button:eq(0)").removeClass("hidden");//instant save added line
					loadAgeStartEnd($("#txtFldDlgRetPlgCommOfAge"),$("#retAgeBasedon"));
					
					$('#liRetirementPlg_Dialog').on('shown.bs.modal', function () {
					//	$row.find("input[type=text]").prop("readonly",true);//instant save added line
					//	$row.find("select").prop("disabled",true);//instant save added line
					
//						$("#liRetirementPlg_Dialog").find(".modal-footer").find("button:eq(0)").text("Edit");
						$("#liRetirementPlg_Dialog").find("select[id=txtFldDlgRetPlgCommOfAge]").focus();
						$("#liRetirementPlg_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
							 if(!validateretplgDetails())return; 
					     		if(!isEmpty($RowId) && !($RowId==undefined)){  
					     			retplgfilldomval($RowId,$row); 
					     		}  
					     		RetPlgcalculateRow();
//					     		NRRetPlgTbl($row);
					     //		instantlfRetPlgSave($row,UPD_MODE); //instant save added line
								$('#liRetirementPlg_Dialog').modal('hide'); 
								retplgClearFlds();
								crudicons(null,'liRetirementPlgtbl','SelliRetirementPlg','lfRetPlgERow','lfRetPlgDRow');
						});
						

						$("#liRetirementPlg_Dialog").find(".modal-footer").find("button:eq(1)").on("click",function(){
							crudicons(null,'liRetirementPlgtbl','SelliRetirementPlg','lfRetPlgERow','lfRetPlgDRow');
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

 

$("#lfRetPlgDRow").on("click",function(){ 
	var flg=true;
	var rowCount = liRetirementPlgtbl.row().count();
	if(rowCount<1){
		applyToastrAlert("Insert rows before edit/view");
		flg=false;
		return;
	}
	var isOneRowSelected=false;
	$('#liRetirementPlgtbl tbody tr:visible').find('input[type=checkbox]').each(function(){
		if($(this).is(":checked")){
			isOneRowSelected=true;
		}
	});
	

	if(!isOneRowSelected){ 		
		applyToastrAlert("No Rows Selected");
		flg=false;
	} 
	if(flg){
	$("#confirmationalertmsgdiv #confalertimg").html(""); 
		$("#confirmationalertmsgdiv #confalertmsg").html("To delete selected row? Other linked data will also be deleted");
		$('#confirmationalertmsgdiv').modal({
			  backdrop: 'static',
			  keyboard: false,
			  show:true,
			}); 
		$('#confirmationalertmsgdiv').on('shown.bs.modal', function() {  
			$('#confirmationalertmsgdiv').find(".modal-title").text("FIPA - Message");
			$('#confirmationalertmsgdiv').find(".modal-footer").find("button:eq(0)").unbind(); 
			$('#confirmationalertmsgdiv').find(".modal-footer").find("button:eq(0)").click(function (){   
 
				$('#liRetirementPlgtbl tbody tr:visible').find('input[type=checkbox],input[type=radio]').each(function(){
					if($(this).is(":checked")){ 
//						 console.log($(this).index());
						var row = $(this).parents("tr");                                    
						var mode = $(this).parents("tr").find("td:first").find('input:eq(0)').val(); 
						var refId = $(this).parents("tr").find("td:first").find('input:eq(1)');   
 
							var message=false; 
							/*$("#IncAssRetPlgtbl tbody").find("tr").find("td:eq(0)").find("input.rowrefid").each(function(){
				            	   if(refId.val() == $(this).val()){
				            		   message=true;
				            		   
				            		 IncAssRetPlgtbl.row($(this).closest("tr")).remove().draw();
				            	   }
				               });*/
							
							deleteRetMultiByRefId(refId.val());
							  
							 if(message){
								 applyErrorToastrAlert("There is row exists in other sections, will also be deleted!");
								} 
							 
										
										  
											if(mode == INS_MODE){ 
												liRetirementPlgtbl.row(row).remove().draw();
	
											}else if (mode == QRY_MODE || mode == UPD_MODE){     
												$(this).parents("tr").find("td:first").find('input:eq(0)').val(DEL_MODE);    //comment for instant save   		     			
												row.find("td").css({border:'1px solid red'}); //comment for instant save 
												row.hide(); 
											}
										
										 
									 RetPlgcalculateRow();
									 
//							 
						 
//						}  else
//						 
//						if(!isEmpty(refId)){    
//								if(mode == INS_MODE){
//									 
//									liRetirementPlgtbl.row(row).remove().draw();
//
//								}else if (mode == QRY_MODE || mode == UPD_MODE){    
//									row.find("td:first").find('input:eq(0)').val(DEL_MODE);      		     			
//									row.find("td").css({border:'1px solid red'});
////									<!--changes done 19/06/2019 -->
//									row.hide(); 
//								}
//								
//							RetPlgcalculateRow();
//						 }
						
						 
//						retplgfilldlgval(row);//instant save added line
					//	instantlfRetPlgSave(null,DEL_MODE); //instant save added line
						$(this).attr("checked",false); 
						
					}
				}); 
				
				reOrderVisibleRows("IncAssRetPlgtbl");   
				reOrderVisibleRows("liRetirementPlgtbl");
				
//				$('#liRetirementPlgtbl tbody tr:visible').find('td:eq(0) input.rowrefid').each(function(){
//					
//					var oldval = $(this).val();
//					var bankrowindex= $(this).closest("tr").index();
////					var newval = "RPG_"+bankrowindex;
//					var dte=new Date();  
//					var newval = "RPG_"+dte.getDate()+dte.getMonth()+dte.getYear()+dte.getMinutes()+
//					 dte.getSeconds()+dte.getMilliseconds();
//					
//					$("#IncAssRetPlgtbl tbody").find("tr").find("td:eq(0)").find("input.rowrefid").each(function(){
//			     	   if(oldval == $(this).val()){
//			     		   $(this).val(newval);
//			     	   }
//			        });
//					
//					$(this).val(newval);
//				});
					$('#confirmationalertmsgdiv').modal('hide');  
//					DHTML CRUD ICONS
					var rc = liRetirementPlgtbl.row().count();
					if(rc ==0){
						$("#SelliRetirementPlg").prop("checked",false);
						crudicons(null,'liRetirementPlgtbl','SelliRetirementPlg','lfRetPlgERow','lfRetPlgDRow');
					}
//					DHTML CRUD ICONS
				  	
			  });
			$('#confirmationalertmsgdiv').find(".modal-footer").find("button:eq(1)").click(function (){ 
				  	$('#confirmationalertmsgdiv').modal('hide');  
				  	
			  });
			
		});
	}
	
});

function fetchRetPlgPlanDetails(){ 

	
	var strplanName	=	$("#covPlanName").text(); 
	var strInception=	$("#covInception").text();  
	var strExpiry	=	$("#covExpiry").text();   
	
	
	$("#liRetirementPlg_Dialog #txtFldDlgRetPlgPlanName").prop("disabled",true);
	$("#liRetirementPlg_Dialog #txtFldDlgRetPlgIncepDate").prop("disabled",true);
	$("#RetPlgncptDatepicker").datetimepicker("remove");
	$("#liRetirementPlg_Dialog #txtFldDlgRetPlgExpDate").prop("disabled",true);
	$("#RetPlgExpDatepicker").datetimepicker("remove"); 
	$("#liRetirementPlg_Dialog #txtFldDlgRetPlgPlanName").val(strplanName);
	$("#liRetirementPlg_Dialog #txtFldDlgRetPlgIncepDate").val(strInception);
	$("#liRetirementPlg_Dialog #txtFldDlgRetPlgExpDate").val(strExpiry);
	
	 
}


/*Clear Fields */
function retplgClearFlds(){
	$("#liRetirementPlg_Dialog").find("input[type=text]").val("");
	$("#liRetirementPlg_Dialog").find("textarea").val("");
	$("#liRetirementPlg_Dialog").find("select").val("");
}

/*Disabled/Readonly Fields */
function retplgRdlyflds(mode){ 
	 if(mode == QRY_MODE ){
			$("#liRetirementPlg_Dialog :input").prop("disabled", false); 
	 } else if((mode == INS_MODE) || (mode == UPD_MODE) ){
		 
			$("#liRetirementPlg_Dialog :input").prop("disabled", false); 
	 }
		$("#liRetirementPlg_Dialog #txtFldDlgRetPlgPlanName").prop("disabled",true);
		$("#liRetirementPlg_Dialog #txtFldDlgRetPlgIncepDate").prop("disabled",true);
		$("#liRetirementPlg_Dialog #txtFldDlgRetPlgExpDate").prop("disabled",true);

}

/*Validation */
function validateretplgDetails(){
	 
	/*if(!(validateFocusFlds('liRetirementPlg_Dialog','txtFldDlgRetPlgCommOfAge',LIRET_COMAGE))) return; 
	if(!(validateFocusFlds('liRetirementPlg_Dialog','txtFldDlgRetPlgEndOfAge',LIRET_ENDAGE))) return;
	if(!(validateFocusFlds('liRetirementPlg_Dialog','txtFldDlgRetPlgEscaltAge',LIRET_ESCAGE))) return;*/
	
	  return true; 
}
 
/*Mandatory Fields Tooltip*/ 
$("#txtFldDlgRetPlgCommOfAge,#txtFldDlgRetPlgEndOfAge,#txtFldDlgRetPlgEscaltAge").on("change",function(){
	if(!isEmpty($(this).val())){
	$(this).removeClass("mandatoryFillFlds");
	$(this).qtip('disable');
	$(this).qtip('destroy',true);
	}
});

$("#txtFldDlgRetPlgCommOfAge").on("change",function(){
//	loadAgeEnd($(this),$("#txtFldDlgRetPlgEndOfAge"));
	if(!rdStartAgeValidate($('#txtFldDlgRetPlgCommOfAge'),$('#lipOwner')))return;
});
$("#txtFldDlgRetPlgEndOfAge").on("change",function(){
	if(!rdEndAgeValidate($('#txtFldDlgRetPlgCommOfAge'),$(this)))return;
});

/* Filling Model Fields*/
function retplgfilldlgval($lastRow){ 
//	  $('#liRetirementPlg_Dialog #txtFldDlgRetPlgMode').val($lastRow.find("td:eq(0)").find('input:eq(0)').val());//instant save added line
	//  $('#liRetirementPlg_Dialog #txtFldDlgRetPlgRefId').val($lastRow.find("td:eq(0)").find('input:eq(2)').val());
	  $('#liRetirementPlg_Dialog #txtFldDlgRetPlgId').val($lastRow.find("td:eq(0)").find('input:eq(1)').val());
	  $('#liRetirementPlg_Dialog #txtFldDlgRetPlgPlanName').val($lastRow.find("td:eq(2)").find('input:eq(0)').val());
	  $('#liRetirementPlg_Dialog #txtFldDlgRetPlgIncepDate').val($lastRow.find("td:eq(3)").find('input:eq(0)').val());
	  $('#liRetirementPlg_Dialog #txtFldDlgRetPlgExpDate').val($lastRow.find("td:eq(4)").find('input:eq(0)').val());
//	  loadAgeStartEnd($("#txtFldDlgRetPlgCommOfAge"),$("#retAgeBasedon"));
	  $('#liRetirementPlg_Dialog #txtFldDlgRetPlgCommOfAge').val($lastRow.find("td:eq(5)").find('input:eq(0)').val());
	  $('#liRetirementPlg_Dialog #txtFldDlgRetPlgEndOfAge').val($lastRow.find("td:eq(6)").find('input:eq(0)').val());
	  $('#liRetirementPlg_Dialog #txtFldDlgRetPlgEscaltAge').val($lastRow.find("td:eq(7)").find('input:eq(0)').val());
	  $('#liRetirementPlg_Dialog #txtFldDlgRetPlgGTDIncome').val($lastRow.find("td:eq(8)").find('input:eq(0)').val());
	  $('#liRetirementPlg_Dialog #txtFldDlgRetPlgNonGTDIncome').val($lastRow.find("td:eq(9)").find('input:eq(0)').val());
	  $('#liRetirementPlg_Dialog #txtFldDlgRetPlgTotalIncome').val($lastRow.find("td:eq(10)").find('input:eq(0)').val());
//	  $('#liRetirementPlg_Dialog #txtFldDlgRetPlgPVIncOfIncomePay').val($lastRow.find("td:eq(8)").find('input:eq(0)').val());
//	  $('#liRetirementPlg_Dialog #txtFldDlgRetPlgPVFValAtRetRate').val($lastRow.find("td:eq(9)").find('input:eq(0)').val());
	  $('#liRetirementPlg_Dialog #txtFldDlgRetPlgAssBankIntRate').val($lastRow.find("td:eq(11)").find('input:eq(0)').val());
	  $('#liRetirementPlg_Dialog #txtFldDlgRetPlgCrtdBy').val($lastRow.find("td:eq(11)").find('input:eq(1)').val()); 
	  $('#liRetirementPlg_Dialog #txtFldDlgRetPlgCrtdDate').val($lastRow.find("td:eq(11)").find('input:eq(2)').val()); 
	  $('#liRetirementPlg_Dialog #selDlgRetPlgRemarks').val($lastRow.find("td:eq(12)").find('input:eq(0)').val()); 
	 
	
}

/* Filling Table Fields*/
function retplgfilldomval($RowId,$row){
	$row.find("td:eq(2)").find('input:eq(0)').val($("#txtFldDlgRetPlgPlanName").val()); 
	$row.find("td:eq(3)").find('input:eq(0)').val($("#txtFldDlgRetPlgIncepDate").val());
	$row.find("td:eq(4)").find('input:eq(0)').val($("#txtFldDlgRetPlgExpDate").val());  
	
	$row.find("td:eq(5)").find('input:eq(0)').val($("#txtFldDlgRetPlgCommOfAge").val()); 
	$row.find("td:eq(6)").find('input:eq(0)').val($("#txtFldDlgRetPlgEndOfAge").val());
	$row.find("td:eq(7)").find('input:eq(0)').val($("#txtFldDlgRetPlgEscaltAge").val());  
	$row.find("td:eq(8)").find('input:eq(0)').val($("#txtFldDlgRetPlgGTDIncome").val()); 
	$row.find("td:eq(9)").find('input:eq(0)').val($("#txtFldDlgRetPlgNonGTDIncome").val()); 
	$row.find("td:eq(10)").find('input:eq(0)').val($("#txtFldDlgRetPlgTotalIncome").val());
//	$row.find("td:eq(8)").find('input:eq(0)').val($("#txtFldDlgRetPlgPVIncOfIncomePay").val());   
//	$row.find("td:eq(9)").find('input:eq(0)').val($("#txtFldDlgRetPlgPVFValAtRetRate").val());   
	$row.find("td:eq(11)").find('input:eq(0)').val($("#txtFldDlgRetPlgAssBankIntRate").val()); 
	$row.find("td:eq(12)").find('input:eq(0)').val($("#selDlgRetPlgRemarks").val());  
//	$row.find("input[type=text]").prop("readonly",true);//instant save added line
//	$row.find("select").prop("disabled",true);//instant save added line

}




//instant save added line
$("#liRetirementPlg_Dialog").find("input,select,textarea").on("change",function(){
	$("#liRetirementPlg_Dialog").find(".modal-footer").find("button:eq(0)").removeClass("hidden");
});


function RetPlgcalculateRow(){
	
	
	 var sum1=0,sum2=0,sum3=0,sum4=0,sum5=0,sum6=0;  
	 
	 
	 var $liretplgcount = liRetirementPlgtbl.rows().count();
	 
	 
	 if($liretplgcount >0){
		 
		 $("#liRetirementPlgtbl tbody tr:visible").each(function(i,row){
				
				var liretEndage=$(this).find("td:eq(6)").find("input:eq(0)").val(); 
				var liretEscrate=$(this).find("td:eq(7)").find("input:eq(0)").val(); 
				var liretGurInc=$(this).find("td:eq(8)").find("input:eq(0)").val(); 
				var liretNonGurInc=$(this).find("td:eq(9)").find("input:eq(0)").val(); 
//				var liretPVInc=$(this).find("td:eq(8)").find("input:eq(0)").val(); 
//				var liretPVFVInc=$(this).find("td:eq(9)").find("input:eq(0)").val(); 
				
				
				 
				if(!isEmpty(liretEndage)){
					sum1 +=Number(liretEndage); 
				}
				
				if(!isEmpty(liretEscrate)){
					sum2 +=Number(liretEscrate); 
				}
				
				if(!isEmpty(liretGurInc)){
					sum3 +=Number(liretGurInc); 
				}
				
				if(!isEmpty(liretNonGurInc)){
					sum4 +=Number(liretNonGurInc); 
				}
				
//				if(!isEmpty(liretPVInc)){
//					sum5 +=Number(liretPVInc); 
//				}
//				
//				if(!isEmpty(liretPVFVInc)){
//					sum6 +=Number(liretPVFVInc); 
//				}
				
		 });
		  
	 }
	  
	 
	 if(!(sum1 == 0 && sum2 == 0 && sum3 == 0 && sum4 == 0 && sum5 == 0 && sum6 == 0)){ 
		 
	 $("#fnaLIRetPlgTblfooter #txtFldTotEndAge").val(roundNumber(sum1)); 
	 $("#fnaLIRetPlgTblfooter #txtFldTotEscalRate").val(roundNumber(sum2)); 
	 $("#fnaLIRetPlgTblfooter #txtFldTotGtdIncome").val(roundNumber(sum3)); 
	 $("#fnaLIRetPlgTblfooter #txtFldTotNGtdIncome").val(roundNumber(sum4)); 
//	 $("#fnaLIRetPlgTblfooter #txtFldTotComuteIncome").val(roundNumber(sum5)); 
//	 $("#fnaLIRetPlgTblfooter #txtFldTotComutePVFV").val(roundNumber(sum6)); 
	 
	 }
	 
	 if(sum1 == 0){$("#fnaLIRetPlgTblfooter #txtFldTotEndAge").val("0");}
	 if(sum2 == 0){$("#fnaLIRetPlgTblfooter #txtFldTotEscalRate").val("0");} 
	 if(sum3 == 0){$("#fnaLIRetPlgTblfooter #txtFldTotGtdIncome").val("0");} 
	 if(sum4 == 0){$("#fnaLIRetPlgTblfooter #txtFldTotNGtdIncome").val("0");} 
//	 if(sum5 == 0){$("#fnaLIRetPlgTblfooter #txtFldTotComuteIncome").val("0");} 
//	 if(sum6 == 0){$("#fnaLIRetPlgTblfooter #txtFldTotComutePVFV").val("0");} 
	 reOrderVisibleRows('liRetirementPlgtbl');
}
function setTotalGtdDhtml($lastRow){

	var gtdamt = $lastRow.find("td:eq(8)").find("input:eq(0)").val();//txtFldDlgRetPlgGTDIncome
	var nongtdamt =$lastRow.find("td:eq(9)").find("input:eq(0)").val();//txtFldDlgRetPlgNonGTDIncome
	var total = 0;
	
	if(!isEmpty(gtdamt)){
		total = gtdamt;
	}
	
	if(!isEmpty(nongtdamt)){
		total = nongtdamt;
	}
	
	if(!isEmpty(gtdamt) && !isEmpty(nongtdamt)){
		total = Number(gtdamt)+Number(nongtdamt);
	}
	
	return total;

}
function setTotalGtd(){
	
	var gtdamt = $("#txtFldDlgRetPlgGTDIncome").val();
	var nongtdamt = $("#txtFldDlgRetPlgNonGTDIncome").val();
	var total = 0;
	
	if(!isEmpty(gtdamt)){
		total = gtdamt;
	}
	
	if(!isEmpty(nongtdamt)){
		total = nongtdamt;
	}
	
	if(!isEmpty(gtdamt) && !isEmpty(nongtdamt)){
		total = Number(gtdamt)+Number(nongtdamt);
	}
	
	return total;
	
}

$(".calctotgtdamt").on("change",function(){
	$("#txtFldDlgRetPlgTotalIncome").val(setTotalGtd());
	
});

$(".calclifemvpvincome").on("change",function(){
//	setRetPlanMVIncome();	
});



function setRetPlanMVIncome() {

//	var rate = $("#txtFldDlgRetPlgAssBankIntRate").val();
//	var startage = $("#txtFldDlgRetPlgCommOfAge").val();
//	var endage = $("#txtFldDlgRetPlgEndOfAge").val();
//	var gtdamt = $("#txtFldDlgRetPlgGTDIncome").val();
//	var nongtdamt = $("#txtFldDlgRetPlgNonGTDIncome").val();
//	
//	var nper = endage - startage;
//	var pmtid =  Number((-1 * gtdamt) - nongtdamt);
//	
//	
//	var pvvalue = PVCalculation((rate / 100),nper,pmtid,0,1);
//	$("#txtFldDlgRetPlgPVIncOfIncomePay").val(pvvalue.toFixed(2));
	
}

function setRetPlanMVIncomeDhtml($lastRow) {

//	var rate 	  = $lastRow.find("td:eq(11)").find("input:eq(0)").val();//txtFldDlgRetPlgAssBankIntRate
//	var startage  = $lastRow.find("td:eq(5)").find("input:eq(0)").val();//txtFldDlgRetPlgCommOfAge
//	var endage 	  = $lastRow.find("td:eq(6)").find("input:eq(0)").val();//txtFldDlgRetPlgEndOfAge
//	var gtdamt 	  = $lastRow.find("td:eq(8)").find("input:eq(0)").val();//txtFldDlgRetPlgGTDIncome
//	var nongtdamt = $lastRow.find("td:eq(9)").find("input:eq(0)").val();//txtFldDlgRetPlgNonGTDIncome
//	
//	var nper = endage - startage;
//	var pmtid =  Number((-1 * gtdamt) - nongtdamt);
//	
//	
//	var pvvalue = PVCalculation((rate / 100),nper,pmtid,0,1);
//	$lastRow.find("td:eq(8)").find("input:eq(0)").val(pvvalue.toFixed(2));//txtFldDlgRetPlgPVIncOfIncomePay
	
}


$(".calclifemvpvretage").on("change",function(){
//	setRetPlanMVRetAge();
});

function setRetPlanMVRetAge() {

//	var rate = $("#txtFldDlgRetPlgAssBankIntRate").val();
//	var startage = $("#txtFldDlgRetPlgCommOfAge").val();
//	var endage = $("#txtFldDlgRetPlgEndOfAge").val();
//	var gtdamt = $("#txtFldDlgRetPlgGTDIncome").val();
//	var nongtdamt = $("#txtFldDlgRetPlgNonGTDIncome").val();
//	
//	var retselfage = $("#retSelfretage").val();
//	var retspsage = $("#retSpouseretage").val();
//	var mvincome = $("#txtFldDlgRetPlgPVIncOfIncomePay").val();
//	
//	var nper = startage - retselfage;
//	var fv =  (-1* Number(mvincome));
//	
//	
//	var pvvalue = PVCalculation((rate / 100),nper,0,fv);
//	$("#txtFldDlgRetPlgPVFValAtRetRate").val(pvvalue.toFixed(2));
	
}


function setRetPlanMVRetAgeDhtml($lastRow) {

//	var rate 	  = $lastRow.find("td:eq(11)").find("input:eq(0)").val();//txtFldDlgRetPlgAssBankIntRate
//	var startage  = $lastRow.find("td:eq(5)").find("input:eq(0)").val();//txtFldDlgRetPlgCommOfAge
//	var endage 	  = $lastRow.find("td:eq(6)").find("input:eq(0)").val();//txtFldDlgRetPlgEndOfAge
//	var gtdamt 	  = $lastRow.find("td:eq(8)").find("input:eq(0)").val();//txtFldDlgRetPlgGTDIncome
//	var nongtdamt = $lastRow.find("td:eq(9)").find("input:eq(0)").val();//txtFldDlgRetPlgNonGTDIncome
//	
//	var retselfage = $("#retSelfretage").val();
//	var retspsage = $("#retSpouseretage").val();
//	var mvincome = $lastRow.find("td:eq(11)").find("input:eq(0)").val();//txtFldDlgRetPlgPVIncOfIncomePay
//	
//	var nper = startage - retselfage;
//	var fv =  (-1* Number(mvincome));
//	
//	
//	var pvvalue = PVCalculation((rate / 100),nper,0,fv);
//	$lastRow.find("td:eq(9)").find("input:eq(0)").val(pvvalue.toFixed(2));//txtFldDlgRetPlgPVFValAtRetRate
	
}
/*Check Start Age via End Age validations*/
$("#txtFldDlgRetPlgCommOfAge").on("change",function(){
//	loadAgeStartEnd($("#txtFldDlgRetPlgCommOfAge"),$("#retAgeBasedon"));
	StartAgeValidate($(this),$("#txtFldDlgRetPlgEndOfAge"));
});


$("#txtFldDlgRetPlgEndOfAge").on("change",function(){
	EndAgeValidate($(this),$("#txtFldDlgRetPlgCommOfAge"));
});
/**/
function StartAgeValidate(start,end){
	var startage=start.val();
	var endage=end.val();
	
	if(!isEmpty(startage) && !isEmpty(endage)){
		if(startage >  endage ){
			applyErrorToastrAlert("Age Income Starts must be less than Age Income Ends",start);
			start.val("");
			return false;
		}
	}
	
}

function EndAgeValidate(end,start){
	var startage=start.val();
	var endage=end.val();
	
	if(!isEmpty(startage) && !isEmpty(endage)){
		if(endage <  startage ){
			applyErrorToastrAlert("Age Income Ends must be Greater than Age Income Starts",end);
			end.val("");
			return false;
		}
	}
	
}
 /*###########################################################################################################################################################*/
/**
 * Retirement Planning -Nominees
 * 
 */


	

/*Datatable Initialisation*/
//var fnaLINomineesTbl = $('#fnaLINomineesTbl').DataTable( {
//	destroy: true,
// 	responsive: false,         
//    ordering: false,
//    searching: false,     
//    scrollY:  "20vh",
//    scrollX: true,
//    scroller: false,
//    scrollCollapse:false,
//    paging:false, 
//    filter:false,   
//    columnDefs: [], 
//    dom: '<<"top" ip>flt>',  
//  columnDefs: [  { width: '20px', targets: [0,1]},
//   	             {"className": "dt-head-center text-center",targets: [0,1,2,3],"orderable": false,"searchable": false}],		 
//		 fnDrawCallback: function(oSettings) {
//			 if (oSettings._iDisplayLength > oSettings.fnRecordsDisplay()) { 
//				 
//			    } 
//    
//		 }, 
//}).draw();
	


/*Add Row Click */
$("#NomARow").on("click",function(){
			nomineClearFlds();
			$("#txtFldDlgNomineeId").val(makeid(17));
			showFIPAModel('liNominees_Dialog','Life Insurance - Nominee Name');   
//			$("#liNominees_Dialog").find("input[id=txtFldDlgNomineeMode]").val("I");//instant save added line
			$('#liNominees_Dialog').on('shown.bs.modal', function () {
//				$("#liNominees_Dialog").find(".modal-footer").find("button:eq(0)").text("Add");
				$("#liNominees_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
						if(!validatenomineDetails())return;
					   	nomineRdlyflds(INS_MODE);  
					   	getNomNameRows(null); 
						$('#liNominees_Dialog').modal('hide'); 
				  });  
			});
			
			
});



/*Populate Data */
function getNomNameRows(dataset){ 
 
var cell0 = '<span></span>'+
'<input type="hidden" name="txtFldnomineMode" readonly="true" value="'+INS_MODE+'" class="fipaModeDummy"/><input type="hidden" name="txtFldNomineeId">';
var cell1 = '<div class="checkbox checkbox-primary text-center"><input type="checkbox" name="radnomineSelect"/><label>&nbsp;</label></div>'; 
var cell2 ='<input type="text" name="txtFldNomineeName"  maxlength="150" class="form-control editable" />';
var cell3 ='<input type="text" name="txtFldNomineePercnt" class="form-control editable" />'+
'<input type="hidden" name="txtFldNomineeCrtdBy"/><input type="hidden" name="txtFldNomineeCrtdDate"/>'; 


 
fnaLINomineesTbl.row.add( [cell0,cell1,cell2,cell3] ).draw( false );

var rowCount = $('#fnaLINomineesTbl tbody tr:visible').length;
rowCount =  (rowCount == 0) ? $('#fnaLINomineesTbl tbody tr').length : rowCount;
var $lastRow = $("#fnaLINomineesTbl tbody tr:last");	

$lastRow.find("td:first").find('span').text(rowCount); 

$lastRow.find("td:eq(1)").find("input:first").click(function(){
	selectSingleRow(this);
})

$lastRow.find("td:eq(1)").find("input:first").attr('id',"radnomine"+$lastRow.index())
.parent().find('label').attr('for',"radnomine"+$lastRow.index());

   
$lastRow.find("td:eq(0)").find('input:eq(1)').val($("#txtFldDlgNomineeId").val()); 

$lastRow.find("td:eq(2)").find('input:eq(0)').val($("#txtFldDlgNomineeName").val()); 
$lastRow.find("td:eq(2)").find('input:eq(0)').on("change",function(){
	dhtmlModChange($lastRow); 
});


$lastRow.find("td:eq(3)").find('input:eq(0)').val($("#txtFldDlgNomineePercnt").val()); 
$lastRow.find("td:eq(3)").find('input:eq(0)').addClass("applyEvntpCent");
$lastRow.find("td:eq(3)").find('input:eq(0)').on("change",function(){
	dhtmlModChange($lastRow); 
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


if(dataset != null){

	 
	$lastRow.find("td:eq(0)").find('input:eq(0)').val(UPD_MODE);
	
	
	var infoDetsArr = new Array();
	
	for(var data in dataset){
		var col = dataset[data];
		
		switch(data){
		
			case "nomineeId": 
				$lastRow.find("td:eq(0)").find('input:eq(1)').val(col);  
				break;
				 
			case "nomineeName":
				$lastRow.find("td:eq(2)").find('input:eq(0)').val(col);   
				break;
				 
			case "nomineePrcnt":
				$lastRow.find("td:eq(3)").find('input:eq(0)').val(col);  
				break;
				 
			case "nomineeCrtdBy": 
				$lastRow.find("td:eq(3)").find('input:eq(1)').val(col);
				infoDetsArr.push(col);				
				break;
				
			case "nomineeCrtdDate":
				$lastRow.find("td:eq(3)").find('input:eq(2)').val(col);
				infoDetsArr.push(col);
				break;
				
			case "nomineeModBy":
				infoDetsArr.push(col);
				break;
				
			case "nomineeModDate":
				infoDetsArr.push(col);
				break;	
		}			 
		 
	}
	}
  /*
//instant save added line
if(dataset == null){
	instantlfNomineSave($lastRow,INS_MODE);		
}
//

$lastRow.find("input[type=text]").prop("readonly",true);//instant save added line
$lastRow.find("select").prop("disabled",true);//instant save added line
*/
}


 
/*Edit Row Click */
$("#NomERow").on("click",function(){
	NomVRow(); 
});


/*View Row Click */
function NomVRow(){
	var isOneRowSelected=0;
	var $rowCount = $('#fnaLINomineesTbl tbody tr:visible').length;	
	var $lastRow = $("#fnaLINomineesTbl tbody tr:visible:last");	
	
	if($rowCount<1){
		applyToastrAlert("Insert rows before edit/view");
		return;
	} 
	
	$("#fnaLINomineesTbl tbody tr:visible").each(function(){
		var $row = $(this);   
		$row.removeClass('selected');  
		$(this).removeAttr("style"); 
		$row.find("td").removeAttr("style");
		
			
	});
	
	
	
	$("#fnaLINomineesTbl tbody tr:visible").find('input[name="radnomineSelect"]').each(function(){ //Checkbox selection
		var $curElm=$(this);
		if($curElm.is(":checked")){ 
			isOneRowSelected++;
		}
	});
	
	
	if(isOneRowSelected > 1){ 
		applyToastrAlert("More than one rows selected.Select one row only");
		return;
	}
	
	$("#fnaLINomineesTbl tbody tr:visible").find('input[name="radnomineSelect"]').each(function(){ //Checkbox selection
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
				 	nomineRdlyflds($mode);
					nominefilldlgval($row); 
					showFIPAModel('liNominees_Dialog','Life Insurance - Nominee Name');  
					$("#liNominees_Dialog").find(".modal-footer").find("button:eq(0)").removeClass("hidden");//instant save added line
					
					
					$('#liNominees_Dialog').on('shown.bs.modal', function () {
	//					$row.find("input[type=text]").prop("readonly",true);//instant save added line
	//					$row.find("select").prop("disabled",true);//instant save added line
	
//						$("#liNominees_Dialog").find(".modal-footer").find("button:eq(0)").text("Edit");
						$("#liNominees_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
							 if(!validatenomineDetails())return; 
					     		if(!isEmpty($RowId) && !($RowId==undefined)){  
					     			nominefilldomval($RowId,$row); 
					     		}  
				//	     		instantlfNomineSave($row,UPD_MODE); //instant save added line
								$('#liNominees_Dialog').modal('hide'); 
								nomineClearFlds();
							
						});
					});
					 
			} 
			
			
			if(($mode == QRY_MODE)){
				 var $RowId=$row.index();
				 $curElm.parents("tr").find("td:first").find('input:eq(0)').val(UPD_MODE);  
				 $(this).parents("tr").find("td").find("input.editable,select.editable").each(function(){
						$(this).attr("disabled",false); 
						$row.removeClass('selected');  
						$(this).parent().css({border:'1px solid green'});
						$row.css({border:'1px solid green'});
						$row.find("td").css({border:'1px solid green'});
				});
				 	nomineRdlyflds($mode);
					nominefilldlgval($row); 
					showFIPAModel('liNominees_Dialog','Life Insurance - Nominee Name');  
					$("#liNominees_Dialog").find(".modal-footer").find("button:eq(0)").removeClass("hidden");//instant save added line
					
					
					$('#liNominees_Dialog').on('shown.bs.modal', function () {
				//		$row.find("input[type=text]").prop("readonly",true);//instant save added line
				//		$row.find("select").prop("disabled",true);//instant save added line
	
//						$("#liNominees_Dialog").find(".modal-footer").find("button:eq(0)").text("Edit");
						$("#liNominees_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
							 if(!validatenomineDetails())return; 
					     		if(!isEmpty($RowId) && !($RowId==undefined)){  
					     			nominefilldomval($RowId,$row); 
					     		}  
					     		
					     //		instantlfNomineSave($row,UPD_MODE); //instant save added line
								$('#liNominees_Dialog').modal('hide'); 
								nomineClearFlds();
							
						});
					});
					 
			}  
		
		} 
	});
	
	 
	if(isOneRowSelected==0){
		applyToastrAlert("No Rows Selected");
		return;
	}

	
}


/*Delete Row Click */
$("#NomDRow").on("click",function(){ 
 	datatableDeleteRow('fnaLINomineesTbl',fnaLINomineesTbl,'','','');   
});

/*Clear Fields */
function nomineClearFlds(){
	$("#liNominees_Dialog").find("input[type=text]").val("");
	$("#liNominees_Dialog").find("textarea").val("");
	$("#liNominees_Dialog").find("select").val("");
}

/*Disabled/Readonly Fields */
function nomineRdlyflds(mode){ 
	 if(mode == QRY_MODE ){
			$("#liNominees_Dialog :input").prop("disabled", false); 
			$("#liNominees_Dialog").find("button").prop("disabled", false);
	 } else if((mode == INS_MODE) || (mode == UPD_MODE) ){
			$("#liNominees_Dialog :input").prop("disabled", false); 
	 }
}

/*Validation */
function validatenomineDetails(){
	 
	if(!(validateFocusFlds('liNominees_Dialog','txtFldDlgNomineeName',NOM_NAME))) return;  
	
	  return true; 
}
 

/*Mandatory Fields Tooltip*/ 
$("#txtFldDlgNomineeName").on("change",function(){
	if(!isEmpty($(this).val())){
	$(this).removeClass("mandatoryFillFlds");
	$(this).qtip('disable');
	$(this).qtip('destroy',true);
	}
});
  


/* Filling Model Fields*/
function nominefilldlgval($lastRow){
	 //$('#liNominees_Dialog #txtFldDlgNomineeMode').val($lastRow.find("td:eq(0)").find('input:eq(0)').val());//instant save added line
	 
	  $('#liNominees_Dialog #txtFldDlgNomineeId').val($lastRow.find("td:eq(0)").find('input:eq(1)').val());
	  $('#liNominees_Dialog #txtFldDlgNomineeName').val($lastRow.find("td:eq(2)").find('input:eq(0)').val());
	  $('#liNominees_Dialog #txtFldDlgNomineePercnt').val($lastRow.find("td:eq(3)").find('input:eq(0)').val());
	  $('#liNominees_Dialog #txtFldDlgNomineeCrtdBy').val($lastRow.find("td:eq(3)").find('input:eq(1)').val()); 
	  $('#liNominees_Dialog #txtFldDlgNomineeCrtdDate').val($lastRow.find("td:eq(3)").find('input:eq(2)').val()); 
	  
	
}

/* Filling Table Fields*/
function nominefilldomval($RowId,$row){
	
	$row.find("td:eq(2)").find('input:eq(0)').val($("#txtFldDlgNomineeName").val()); 
	$row.find("td:eq(3)").find('input:eq(0)').val($("#txtFldDlgNomineePercnt").val());  
//	$row.find("input[type=text]").prop("readonly",true);//instant save added line
//	$row.find("select").prop("disabled",true);//instant save added line

}
/*#####################OTHER VALIDATION####################*/


//instant save added line
$("#liNominees_Dialog").find("input,select,textarea").on("change",function(){
	$("#liNominees_Dialog").find(".modal-footer").find("button:eq(0)").removeClass("hidden");
});


/*Check From Period via To Period validations*/ 

$("#txtFldDlgPlanIncDate").change(function(){
	 checkDateFormat($(this));
	if(!chkFromToDateValidation('txtFldDlgPlanIncDate','txtFldDlgPlanExpDate','Inception Date should be lesser than the Expiry Date')); 
});
/*
$("#txtFldDlgPlanIncDate").change(function(){
	 checkDateFormat($(this));
});*/

$("#txtFldDlgPlanExpDate").change(function(){    
	 checkDateFormat($(this));
	if(!chkFromToDateValidation('txtFldDlgPlanIncDate','txtFldDlgPlanExpDate','Expiry Date should be greater than the Inception Date'));
}); 

/*
$("#txtFldDlgPlanExpDate").change(function(){    
 checkDateFormat($(this));
}); */



$("#txtFldDlgDfIncepDate").change(function(){
	 checkDateFormat($(this));
	if(!chkFromToDateValidation('txtFldDlgDfIncepDate','txtFldDlgDfExpiryDate','Inception Date should be lesser than the Expiry Date')); 
});

/*$("#txtFldDlgDfIncepDate").change(function(){
	 checkDateFormat($(this));
});*/

$("#txtFldDlgDfExpiryDate").change(function(){ 
	 checkDateFormat($(this));
	if(!chkFromToDateValidation('txtFldDlgDfIncepDate','txtFldDlgDfExpiryDate','Expiry Date should be greater than the Inception Date'));
}); 

/*$("#txtFldDlgDfExpiryDate").change(function(){    
 checkDateFormat($(this));
}); */




$("#txtFldDlgDsIncepDate").change(function(){ 
	 checkDateFormat($(this));
	if(!chkFromToDateValidation('txtFldDlgDsIncepDate','txtFldDlgDsExpryDate','Inception Date should be lesser than the Expiry Date')); 
});

/*$("#txtFldDlgDsIncepDate").change(function(){
	 checkDateFormat($(this));
});*/

$("#txtFldDlgDsExpryDate").change(function(){
	 checkDateFormat($(this));
	if(!chkFromToDateValidation('txtFldDlgDsIncepDate','txtFldDlgDsExpryDate','Expiry Date should be greater than the Inception Date'));
}); 

/*$("#txtFldDlgDsExpryDate").change(function(){    
 checkDateFormat($(this));
}); */




$("#txtFldDlgCrtlsIncepDate").change(function(){ 
	 checkDateFormat($(this));
	if(!chkFromToDateValidation('txtFldDlgCrtlsIncepDate','txtFldDlgCrtlnsExpDate','Inception Date should be lesser than the Expiry Date')); 
});

/*$("#txtFldDlgCrtlsIncepDate").change(function(){
	 checkDateFormat($(this));
});
*/
$("#txtFldDlgCrtlnsExpDate").change(function(){
	 checkDateFormat($(this));
	if(!chkFromToDateValidation('txtFldDlgCrtlsIncepDate','txtFldDlgCrtlnsExpDate','Expiry Date should be greater than the Inception Date'));
}); 

/*
$("#txtFldDlgCrtlnsExpDate").change(function(){    
 checkDateFormat($(this));
}); */
 


$("#txtFldDlgHospIncepDate").change(function(){
	checkDateFormat($(this));
	if(!chkFromToDateValidation('txtFldDlgHospIncepDate','txtFldDlgHospExpDate','Inception Date should be lesser than the Expiry Date')); 
});

/*$("#txtFldDlgHospIncepDate").change(function(){
	 checkDateFormat($(this));
});*/

$("#txtFldDlgHospExpDate").change(function(){
	checkDateFormat($(this));
	if(!chkFromToDateValidation('txtFldDlgHospIncepDate','txtFldDlgHospExpDate','Expiry Date should be greater than the Inception Date'));
}); 

/*$("#txtFldDlgHospExpDate").change(function(){    
 checkDateFormat($(this));
});  */
/**/
function toggleBasicRiderPlan(tbleId){
	$("#toggleBasicPlans").addClass("hidden");
	$("#toggleRiderPlans").addClass("hidden");
	$("#toggleBPlanName").addClass("hidden");
	$("#toggleRPlanName").addClass("hidden");
	
	if(tbleId == "RIDER"){ 
		$("#toggleRiderPlans").removeClass("hidden");
		$("#toggleRPlanName").removeClass("hidden");
	}else{
		$("#toggleBasicPlans").removeClass("hidden");
		$("#toggleBPlanName").removeClass("hidden");
		
	}
}
 

$("#txtFldDlgRetPlgCommOfAge").on("change",function(){
	
	var array=[];
	var selfCommAge=isEmpty($("#txtFldDlgRetPlgCommOfAge").val()) ? "" : Number($("#txtFldDlgRetPlgCommOfAge").val());		
	var selfProjage=isEmpty($("#retSelfProjage").val()) ? "" : Number($("#retSelfProjage").val());
	
	if (selfCommAge <= selfProjage) {
		   var option = ''; 
		   array=[];
		  for(var i= selfCommAge; i<=selfProjage;i++)
			  { 
				
				  array.push(""+i+"");
			  }  
	 } 
	 

	$("#txtFldDlgRetPlgEndOfAge").val("");
//	 var autocomplete = $('#txtFldDlgRetPlgEndOfAge').typeahead(); 
//	autocomplete.data('typeahead').source = array;

}); 

///**
// * Life Insurance Death Benefit
// */
//
///*Add Row Click */
//$("#DthARow").on("click",function(){
//	if(isEmpty($("#hPlanName").val()) || isEmpty($("#hInceptionDate").val()) ){ 
//		 $('#lifeInsNavTabsDets a[href="#liplandetails"]').click(); 
//		 applyToastrAlert("Please Select any of the plans in Plan Details");
//		 return;
//	}
//	
//	
//			dthbfClearFlds();
//			showFIPAModel('liDeathBenf_Dialog','Life Insurance - Death Benefit Details');   
////			$("#liDeathBenf_Dialog").find("input[id=txtFldDlgDfMode]").val("I");//instant save added line
//			fetchDfPlanDetails();
//			$('#liDeathBenf_Dialog').on('shown.bs.modal', function () {
////				$("#liDeathBenf_Dialog").find(".modal-footer").find("button:eq(0)").text("Add");
//				$("#liDeathBenf_Dialog").find("input[id=txtFldDlgliDfPlnName]").focus();//Aravindh
//				$("#liDeathBenf_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
//						if(!validatedthbfDetails())return;
//					   	dthbfRdlyflds(INS_MODE);  
//					   	getliDthBenfRows(null); 
//						$('#liDeathBenf_Dialog').modal('hide'); 
//				  });  
//			});
//			
//			
//});
//
//
//
//
///*Populate Data */
//function getliDthBenfRows(dataset){ 
// 
//var cell0 = '<span></span>'+
//'<input type="hidden" name="txtFlddthbfMode" readonly="true" value="'+INS_MODE+'" class="fipaMode"/><input type="hidden" name="txtFldDfId"><input type="hidden" name="ScrCoverageTypes" value="DEATH BENEFIT">';
// 
//var cell1 = '<div class="checkbox checkbox-primary text-center"><input type="checkbox" name="raddthbfSelect"/><label>&nbsp;</label></div>'; 
//var cell2 = '<input type="text" name="txtFldliDfPlnName"  maxlength="150" onmouseover="fipaTooltip(this);" class="form-control editable"   readonly="true" />'; 
//var cell3 = '<input type="text" name="txtFldDfIncepDate"  maxlength="10" onmouseover="fipaTooltip(this);" class="form-control editable"    readonly="true"/>';
//var cell4 = '<input type="text" name="txtFldDfExpiryDate"  maxlength="10" onmouseover="fipaTooltip(this);" class="form-control editable"    readonly="true"/>';
//var cell5 = '<input type="text" name="txtFldDfTermOfCov"  maxlength="20"  onmouseover="fipaTooltip(this);" class="form-control editable" />'; 
//var cell6 ='<input type="text" name="txtFldDfDeathBenefit"  onmouseover="fipaTooltip(this);" class="form-control editable"  />'+
//'<input type="hidden" name="txtFldDfCrtdBy"/><input type="hidden" name="txtFldDfCrtdDate"/>'; 
//
//liDeathBenefittbl.row.add( [cell0,cell1,cell2,cell3,cell4,cell5,cell6] ).draw( false );
//
//var rowCount = $('#liDeathBenefittbl tbody tr').length;	
//var $lastRow = $("#liDeathBenefittbl tbody tr:last");	
//
//$lastRow.find("td:first").find('span').text(rowCount); 
//
//$lastRow.find("td:eq(1)").find("input:first").click(function(){
//	selectSingleRow(this);
//})
//
//$lastRow.find("td:eq(1)").find("input:first").attr('id',"raddthbf"+$lastRow.index())
//.parent().find('label').attr('for',"raddthbf"+$lastRow.index());
//
//$lastRow.find("td:eq(2)").find('input:eq(0)').val($("#txtFldDlgliDfPlnName").val());
//$lastRow.find("td:eq(2)").find('input:eq(0)').on("change",function(){
//	dhtmlModChange($lastRow);
//});
//
//$lastRow.find("td:eq(3)").find('input:eq(0)').val($("#txtFldDlgDfIncepDate").val());
//$lastRow.find("td:eq(3)").find('input:eq(0)').datetimepicker(dateOptions).on("change",function(){
//	 
//	 checkDateFormat($(this)); 
//	 if(!dhtmlChkDateValidation($lastRow.find("td:eq(3)").find('input:eq(0)'),$lastRow.find("td:eq(4)").find('input:eq(0)'),"Inception Date should be lesser than the Expiry Date"));  
//	 dhtmlModChange($lastRow);
//});
//
//$lastRow.find("td:eq(4)").find('input:eq(0)').val($("#txtFldDlgDfExpiryDate").val());
//$lastRow.find("td:eq(4)").find('input:eq(0)').datetimepicker(dateOptions).on("change",function(){
//	 checkDateFormat($(this));   
//	 if(!dhtmlChkDateValidation($lastRow.find("td:eq(3)").find('input:eq(0)'),$lastRow.find("td:eq(4)").find('input:eq(0)'),"Expiry Date should be greater than the Inception Date"));  
//	 
//	 dhtmlModChange($lastRow);
//});
//
//
//$lastRow.find("td:eq(5)").find('input:eq(0)').val($("#txtFldDlgDfTermOfCov").val());
//$lastRow.find("td:eq(6)").find('input:eq(0)').addClass("applyEvntYrs"); 
//$lastRow.find("td:eq(5)").find('input:eq(0)').on("change",function(){
//	dhtmlModChange($lastRow);
//});
//
//
//$lastRow.find("td:eq(6)").find('input:eq(0)').val($("#txtFldDlgDfDeathBenefit").val());
//$lastRow.find("td:eq(6)").find('input:eq(0)').addClass("applyEvntUsd");
//$lastRow.find("td:eq(6)").find('input:eq(0)').on("change",function(){
//	dhtmlModChange($lastRow);
//});
//
//applyEventHandlers();
//
//
//$lastRow.find("input,select").on("click",function(event){
//	event.stopPropagation();
//});
//$lastRow.click(function() {
//    var checkbox = $(this).find("td:eq(1)").find("input");
//    if(checkbox.is(":checked")) {
//        checkbox.prop("checked", false);
//	$lastRow.removeClass("selected");
//    }else {
//        checkbox.prop("checked", true);
//	$lastRow.addClass("selected");
//    }
//});
//
////DHTML CRUD ICONS
//$lastRow.click(function(){
//	/*toggleSingleRow($lastRow);*/
//	crudicons(this,'liDeathBenefittbl','SelliDeathBenefit','DthERow','DthDRow');
//			
//});
////DHTML CRUD ICONS
//
//$lastRow.find("td:eq(1)").find("input:first").click(function(){
//	selectSingleRow(this);
////	DHTML CRUD ICONS
//	crudicons(this,'liDeathBenefittbl','SelliDeathBenefit','DthERow','DthDRow');
//});
//
//if(dataset != null){
// 
//	$lastRow.find("td:eq(0)").find('input:eq(0)').val("Q");
//	var infoDetsArr = new Array();
//	
//	for(var data in dataset){
//		var col = dataset[data];
//		
//		switch(data){
//		
//			case "coverId": 
//				$lastRow.find("td:eq(0)").find('input:eq(1)').val(col);
//				$lastRow.find("td:eq(0)").find('input:eq(2)').val('DEATH BENEFIT');  
//				break;
//				
//			case "coverPlanname": 
//				$lastRow.find("td:eq(2)").find('input:eq(0)').val(col);   
//				break;
//				
//		 
//			case "effDate": 
//				$lastRow.find("td:eq(3)").find('input:eq(0)').val(col);  
//				break;
//			 
//			case "expiryDate": 
//				$lastRow.find("td:eq(4)").find('input:eq(0)').val(col);  
//				break;
//			 
//			case "coverageTerm": 
//				$lastRow.find("td:eq(5)").find('input:eq(0)').val(col);  
//				break;
//			 
//			case "coverSumAssured": 
//				$lastRow.find("td:eq(6)").find('input:eq(0)').val(col);  
//				break;
//				
//			case "coverCreatedBy": 
//				$lastRow.find("td:eq(6)").find('input:eq(1)').val(col);
//				infoDetsArr.push(col);				
//				break;
//				
//			case "coverCreatedDate":
//				$lastRow.find("td:eq(6)").find('input:eq(2)').val(col);
//				infoDetsArr.push(col);
//				break;
//				
//			case "coverModifiedBy":
//				infoDetsArr.push(col);
//				break;
//				
//			case "coverModifiedDate":
//				infoDetsArr.push(col);
//				break;	
//		}			 
//		 
//	}
//	}
//else{
////	DHTML CRUD ICONS
//	crudicons(null,'liDeathBenefittbl','SelliDeathBenefit','DthERow','DthDRow');
//}	
///*
////instant save added line
//if(dataset == null){
//	instantDeathBfSave($lastRow,INS_MODE);		
//}
//*/
////
////$lastRow.find("input[type=text]").prop("readonly",true);//instant save added line
////$lastRow.find("select").prop("disabled",true);//instant save added line
//reOrderVisibleRows('liDeathBenefittbl');
//}
//
////DHTML SELECT ALL
//function SelAllliDeathBenefit(obj){
//	
//	if($(obj).is(":checked")){
//		
//		$('#liDeathBenefittbl tbody tr').find("td:eq(1)").find("input[type=checkbox]").prop("checked",true);
//		
//		$("#DthDRow").attr("disabled",false);
//		$('#liDeathBenefittbl tbody tr').addClass("selected");
//		
//		var $rowCount = $('#liDeathBenefittbl tbody tr').length;
//		
//		if($rowCount == 0){
//			$(obj).prop("checked",false);
//			$("#DthERow").attr("disabled",true);
//			$("#DthDRow").attr("disabled",true);
//		}else if($rowCount == 1){
//			$("#DthERow").attr("disabled",false);
//			$("#DthDRow").attr("disabled",false);
//		}else if($rowCount > 1){
//			$("#DthERow").attr("disabled",true);
//			$("#DthDRow").attr("disabled",false);
//		}
//		
//	}else{
//		
//		$('#liDeathBenefittbl tbody tr').find("td:eq(1)").find("input[type=checkbox]").prop("checked",false);
//		
//		$('#liDeathBenefittbl tbody tr').removeClass("selected");
//		
//		$("#DthERow").attr("disabled",true);
//		$("#DthDRow").attr("disabled",true);
//		
//	}
//}
// 
///*Edit Row Click */
//$("#DthERow").on("click",function(){
//	DthVRow(); 
//});
//
//
///*View Row Click */
//function DthVRow(){
//	
//	var isOneRowSelected=0;
//	var $rowCount = $('#liDeathBenefittbl tbody tr:visible').length;	
//	var $lastRow = $("#liDeathBenefittbl tbody tr:visible:last");	
//	
//	if($rowCount<1){
//		applyToastrAlert("Insert rows before edit/view");
//		return;
//	} 
//	
//	$("#liDeathBenefittbl tbody tr:visible").each(function(){
//		var $row = $(this);   
//		$row.removeClass('selected');  
//		$(this).removeAttr("style"); 
//		$row.find("td").removeAttr("style");
//	});
//	
//	
//	
//	$("#liDeathBenefittbl tbody tr:visible").find('input[name="raddthbfSelect"]').each(function(){ //Checkbox selection
//		var $curElm=$(this);
//		if($curElm.is(":checked")){ 
//			isOneRowSelected++;
//		}
//	});
//	
//	
//	if(isOneRowSelected > 1){ 
//		applyToastrAlert("More than one rows selected.Select one row only");
//		return;
//	}
//	
//	$("#liDeathBenefittbl tbody tr:visible").find('input[name="raddthbfSelect"]').each(function(){ //Checkbox selection
//		var $curElm=$(this);
//		if($curElm.is(":checked")){ 
//			var $row = $curElm.parents("tr");                                    
//			var $mode = $curElm.parents("tr").find("td:first").find('input:eq(0)').val(); 
//			$curElm.prop("checked",false);
//	     	 $curElm.parents("tr").removeClass('selected');
//	     	 
//			if(($mode == INS_MODE) || ($mode == UPD_MODE) ){
//				 var $RowId=$row.index();
//				 $curElm.parents("tr").find("td:first").find('input:eq(0)').val($mode);  
//				 $(this).parents("tr").find("td").find("input.editable,select.editable").each(function(){
//						$(this).attr("disabled",false); 
//						$row.removeClass('selected');  
//						$(this).parent().css({border:'1px solid green'});
//						$row.css({border:'1px solid green'});
//						$row.find("td").css({border:'1px solid green'}); 
//					});  
//	 
//				 	dthbfRdlyflds($mode);
////					dthbffilldlgval($row); 
//					showFIPAModel('liDeathBenf_Dialog','Life Insurance - Death Benefit Details');  
//					$("#liDeathBenf_Dialog").find(".modal-footer").find("button:eq(0)").removeClass("hidden");//instant save added line
//					
//					$('#liDeathBenf_Dialog').on('shown.bs.modal', function () {
//		//				$row.find("input[type=text]").prop("readonly",true);//instant save added line
//			//			$row.find("select").prop("disabled",true);//instant save added line
//	
////						fetchDfPlanDetails();
////						$("#liDeathBenf_Dialog").find(".modal-footer").find("button:eq(0)").text("Edit");
//						$("#liDeathBenf_Dialog").find("input[id=txtFldDlgliDfPlnName]").focus();//Aravindh
//						$("#liDeathBenf_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
//							 if(!validatedthbfDetails())return; 
//					     		if(!isEmpty($RowId) && !($RowId==undefined)){  
//					     			dthbffilldomval($RowId,$row); 
//					     		}  
//					     		 
////					     		instantDeathBfSave($row,UPD_MODE); //instant save added line
//								$('#liDeathBenf_Dialog').modal('hide'); 
//								dthbfClearFlds();
//								crudicons(null,'liDeathBenefittbl','SelliDeathBenefit','DthERow','DthDRow');
//							
//						});
//						$("#liDeathBenf_Dialog").find(".modal-footer").find("button:eq(1)").on("click",function(){
//							crudicons(null,'liDeathBenefittbl','SelliDeathBenefit','DthERow','DthDRow');
//						});
//					});
//					 
//			}  
//		
//			
//			if($mode == QRY_MODE){
//				 var $RowId=$row.index();
//				 $curElm.parents("tr").find("td:first").find('input:eq(0)').val(UPD_MODE);  
//				 $(this).parents("tr").find("td").find("input.editable,select.editable").each(function(){
//						$(this).attr("disabled",false); 
//						$row.removeClass('selected');  
//						$(this).parent().css({border:'1px solid green'});
//						$row.css({border:'1px solid green'});
//						$row.find("td").css({border:'1px solid green'}); 
//					});  
//	 
//				 	dthbfRdlyflds($mode);
//					dthbffilldlgval($row); 
//					showFIPAModel('liDeathBenf_Dialog','Life Insurance - Death Benefit Details');  
//					$("#liDeathBenf_Dialog").find(".modal-footer").find("button:eq(0)").removeClass("hidden");//instant save added line
//					
//					$('#liDeathBenf_Dialog').on('shown.bs.modal', function () {
////						fetchDfPlanDetails();
//			//			$row.find("input[type=text]").prop("readonly",true);//instant save added line
//				//		$row.find("select").prop("disabled",true);//instant save added line
//	
////						$("#liDeathBenf_Dialog").find(".modal-footer").find("button:eq(0)").text("Edit");
//						$("#liDeathBenf_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
//							 if(!validatedthbfDetails())return; 
//					     		if(!isEmpty($RowId) && !($RowId==undefined)){  
//					     			dthbffilldomval($RowId,$row); 
//					     		}  
//					     	//	instantDeathBfSave($row,UPD_MODE); //instant save added line
//								$('#liDeathBenf_Dialog').modal('hide'); 
//								dthbfClearFlds();
//								crudicons(null,'liDeathBenefittbl','SelliDeathBenefit','DthERow','DthDRow');
//							
//						});
//						
//
//						$("#liDeathBenf_Dialog").find(".modal-footer").find("button:eq(1)").on("click",function(){
//							crudicons(null,'liDeathBenefittbl','SelliDeathBenefit','DthERow','DthDRow');
//						});
//					});
//					 
//			}  
//			
//			isOneRowSelected++;
//		} 
//	});
//	
//	 
//	if(isOneRowSelected==0){
//		applyToastrAlert("No Rows Selected");
//		return;
//	}
//
//	
//}
//
//
///*Delete Row Click */
//$("#DthDRow").on("click",function(){ 
// 
//			datatableDeleteRow('liDeathBenefittbl',liDeathBenefittbl,'SelliDeathBenefit','DthERow','DthDRow');  
//		 
///*//			DHTML CRUD ICONS
//			var rc = liDeathBenefittbl.row().count();
//			if(rc ==0){
//				$("#SelliDeathBenefit").prop("checked",false);
//				crudicons(null,'liDeathBenefittbl','SelliDeathBenefit','DthERow','DthDRow');
//			}
////			DHTML CRUD ICONS
//*/});
//
//function fetchDfPlanDetails(){
//	$("#liDeathBenf_Dialog #txtFldDlgliDfPlnName").prop("disabled",true);
//	$("#liDeathBenf_Dialog #txtFldDlgDfIncepDate").prop("disabled",true);
//	$("#DfIncepDatepicker").datetimepicker("remove");
//	$("#liDeathBenf_Dialog #txtFldDlgDfExpiryDate").prop("disabled",true);
//	$("#DfExpiryDatepicker").datetimepicker("remove");
//	$("#liDeathBenf_Dialog #txtFldDlgliDfPlnName").val($("#hPlanName").val());
//	$("#liDeathBenf_Dialog #txtFldDlgDfIncepDate").val($("#hInceptionDate").val());
//	$("#liDeathBenf_Dialog #txtFldDlgDfExpiryDate").val($("#hExpiryDate").val());  
//}
///*Clear Fields */
//function dthbfClearFlds(){
//	$("#liDeathBenf_Dialog").find("input[type=text]").val("");
//	$("#liDeathBenf_Dialog").find("textarea").val("");
//	$("#liDeathBenf_Dialog").find("select").val("");
//}
//
///*Disabled/Readonly Fields */
//function dthbfRdlyflds(mode){ 
//	 if(mode == QRY_MODE ){
//			$("#liDeathBenf_Dialog :input").prop("disabled", false); 
//	 } else if((mode == INS_MODE) || (mode == UPD_MODE) ){
//			$("#liDeathBenf_Dialog :input").prop("disabled", false);
//	 }
//	 $("#liDeathBenf_Dialog #txtFldDlgliDfPlnName").prop("disabled",true);
//		$("#liDeathBenf_Dialog #txtFldDlgDfIncepDate").prop("disabled",true);
//		$("#liDeathBenf_Dialog #txtFldDlgDfExpiryDate").prop("disabled",true);
//	  
//}
//
///*Validation */
//function validatedthbfDetails(){
//	 
//	if(!(validateFocusFlds('liDeathBenf_Dialog','txtFldDlgDfTermOfCov',LIDB_TERMOFCOV))) return; 
//	if(!(validateFocusFlds('liDeathBenf_Dialog','txtFldDlgDfDeathBenefit',LIDB_DEATHBENF))) return;
//	
//	  return true; 
//}
// 
//
///*Mandatory Fields Tooltip*/ 
//$("#txtFldDlgliDfPlnName,#txtFldDlgDfIncepDate,#txtFldDlgDfExpiryDate").on("change",function(){
//	if(!isEmpty($(this).val())){
//	$(this).removeClass("mandatoryFillFlds");
//	$(this).qtip('disable');
//	$(this).qtip('destroy',true);
//	}
//});
//  
//
//
///* Filling Model Fields*/
//function dthbffilldlgval($lastRow){
//	  //$('#liDeathBenf_Dialog #txtFldDlgDfMode').val($lastRow.find("td:eq(0)").find('input:eq(0)').val());//instant save added line
//	  $('#liDeathBenf_Dialog #txtFldDlgDfId').val($lastRow.find("td:eq(0)").find('input:eq(1)').val());
//	  $('#liDeathBenf_Dialog #txtFldDlgliDfPlnName').val($lastRow.find("td:eq(2)").find('input:eq(0)').val());
//	  $('#liDeathBenf_Dialog #txtFldDlgDfIncepDate').val($lastRow.find("td:eq(3)").find('input:eq(0)').val());
//	  $('#liDeathBenf_Dialog #txtFldDlgDfExpiryDate').val($lastRow.find("td:eq(4)").find('input:eq(0)').val());
//	  $('#liDeathBenf_Dialog #txtFldDlgDfTermOfCov').val($lastRow.find("td:eq(5)").find('input:eq(0)').val());
//	  $('#liDeathBenf_Dialog #txtFldDlgDfDeathBenefit').val($lastRow.find("td:eq(6)").find('input:eq(0)').val());
//	  $('#liDeathBenf_Dialog #txtFldDlgDfCrtdBy').val($lastRow.find("td:eq(6)").find('input:eq(1)').val());
//	  $('#liDeathBenf_Dialog #txtFldDlgDfCrtdDate').val($lastRow.find("td:eq(6)").find('input:eq(2)').val()); 
//	  
//	
//}
//
///* Filling Table Fields*/
//function dthbffilldomval($RowId,$row){
//	
//	$row.find("td:eq(2)").find('input:eq(0)').val($("#txtFldDlgliDfPlnName").val()); 
//	$row.find("td:eq(3)").find('input:eq(0)').val($("#txtFldDlgDfIncepDate").val());
//	$row.find("td:eq(4)").find('input:eq(0)').val($("#txtFldDlgDfExpiryDate").val());  
//	$row.find("td:eq(5)").find('input:eq(0)').val($("#txtFldDlgDfTermOfCov").val()); 
//	$row.find("td:eq(6)").find('input:eq(0)').val($("#txtFldDlgDfDeathBenefit").val()); 
//	//$row.find("input[type=text]").prop("readonly",true);//instant save added line
//	//$row.find("select").prop("disabled",true);//instant save added line
//
//		
//}
//
//
////instant save added line
//$("#liDeathBenf_Dialog").find("input,select,textarea").on("change",function(){
//	$("#liDeathBenf_Dialog").find(".modal-footer").find("button:eq(0)").removeClass("hidden");
//});
//
//
// /*###########################################################################################################################################################*/
// 
// /**
// * Life insurance -Disability
// */
//
///*Datatable Initialisation*/
////var liDisabilitytbl = $('#liDisabilitytbl').DataTable( {
////	destroy: true,
//// 	responsive: false,              
////    ordering: false,
////    searching: false,     
////    scrollY:  "40vh",
////    scrollX: true,
////    scroller: false,
////    scrollCollapse:false,
////    paging:false, 
////    filter:false,   
////    columnDefs: [], 
////    dom: '<<"top" ip>flt>',  
////  columnDefs: [  { width: '20px', targets: [0,1]},
////   	             {"className": "dt-head-center text-center",targets: [0,1,2,3,4,5,6,7,8,9],"orderable": false,"searchable": false}],		 
////		 fnDrawCallback: function(oSettings) {
////			 if (oSettings._iDisplayLength > oSettings.fnRecordsDisplay()) { 
////				 
////			    } 
////    
////		 }, 
////}).draw();
//	
//
//
///*Add Row Click */
//$("#DsbltyARow").on("click",function(){
//	if(isEmpty($("#hPlanName").val()) || isEmpty($("#hInceptionDate").val()) ){ 
//		 $('#lifeInsNavTabsDets a[href="#liplandetails"]').click(); 
//		 applyToastrAlert("Please Select any of the plans in Plan Details");
//		 return;
//	}
//			dsbltyClearFlds();
//			showFIPAModel('liDisabilty_Dialog','Life Insurance - Disability Details'); 
//		//	$("#liDisabilty_Dialog").find("input[id=txtFldDlgliDsbltyMode]").val("I");//instant save added line
//			fetchDsblePlanDetails();
//			$('#liDisabilty_Dialog').on('shown.bs.modal', function () {
////				$("#liDisabilty_Dialog").find(".modal-footer").find("button:eq(0)").text("Add");
//				$("#liDisabilty_Dialog").find("select[id=selDlgliDsbltyTypes]").focus();//Aravindh
//				$("#liDisabilty_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
//						if(!validatedsbltyDetails())return;
//					   	dsbltyRdlyflds(INS_MODE);  
//					   	getDsbltyRows(null); 
//						$('#liDisabilty_Dialog').modal('hide'); 
//				  });  
//			});
//			
//			
//});
//
//
//
///*Populate Data */
//function getDsbltyRows(dataset){ 
// 
//var cell0 = '<span></span>'+
//'<input type="hidden" name="txtFlddsbltyMode" readonly="true" value="'+INS_MODE+'" class="fipaMode"/><input type="hidden" name="txtFldliDsbltyId"><input type="hidden" name="ScrCoverageTypes" value="DISABILITY">';
// 
//var cell1 = '<div class="checkbox checkbox-primary text-center"><input type="checkbox" name="raddsbltySelect"/><label>&nbsp;</label></div>'; 
//var cell2 = '<input type="text" name="txtFldliDsbltyPlanname" maxlength="150" onmouseover="fipaTooltip(this);" class="form-control editable"  readonly="true"/>';
//var cell3 = '<input type="text" name="txtFldliDsbltyIncDate" maxlength="10" onmouseover="fipaTooltip(this);" class="form-control editable"  readonly="true"/>';
//var cell4 = '<input type="text" name="txtFldliDsbltyExpDate" maxlength="10" onmouseover="fipaTooltip(this);" class="form-control editable" readonly="true" />';
//var cell5 = '<select  name="selliDsbltyTypes"  onmouseover="fipaTooltip(this);" class="form-control editable" ></select>'; 
//var cell6 = '<input type="text" name="txtFldliDsbltyYrBegins" maxlength="20" onmouseover="fipaTooltip(this);" class="form-control editable"  />';
//var cell7 = '<input type="text" name="txtFldliDsbltyYrCeases" maxlength="20" onmouseover="fipaTooltip(this);" class="form-control editable"  />';
//var cell8 = '<input type="text" name="txtFldliDsbltyBenf"  onmouseover="fipaTooltip(this);"class="form-control editable"  />'; 
//var cell9 ='<input type="text" name="txtFldliDsbltyIncBenf"  onmouseover="fipaTooltip(this);" class="form-control editable" />'+
//'<input type="hidden" name="txtFldliDsbltyCrtdBy"/><input type="hidden" name="txtFldliDsbltyCrtdDate"/>'; 
//
//liDisabilitytbl.row.add( [cell0,cell1,cell2,cell3,cell4,cell5,cell6,cell7,cell8,cell9] ).draw( false );
//
//var rowCount = $('#liDisabilitytbl tbody tr').length;	
//var $lastRow = $("#liDisabilitytbl tbody tr:last");	
//
//$lastRow.find("td:first").find('span').text(rowCount); 
//
//$lastRow.find("td:eq(1)").find("input:first").click(function(){
//	selectSingleRow(this);
//})
//
//$lastRow.find("td:eq(1)").find("input:first").attr('id',"raddsblty"+$lastRow.index())
//.parent().find('label').attr('for',"raddsblty"+$lastRow.index());
//
//
//$lastRow.find("td:eq(2)").find('input:eq(0)').val($("#txtFldDlgDsPlanName").val()); 
//$lastRow.find("td:eq(2)").find('input:eq(0)').on("change",function(){
//	dhtmlModChange($lastRow);	
//});
//
//
//$lastRow.find("td:eq(3)").find('input:eq(0)').val($("#txtFldDlgDsIncepDate").val()); 
//$lastRow.find("td:eq(3)").find('input:eq(0)').on("change",function(){
//	 checkDateFormat($(this)); 
//	 if(!dhtmlChkDateValidation($lastRow.find("td:eq(3)").find('input:eq(0)'),$lastRow.find("td:eq(4)").find('input:eq(0)'),"Inception Date should be lesser than the Expiry Date"));  
//	dhtmlModChange($lastRow);	
//});
//
//$lastRow.find("td:eq(4)").find('input:eq(0)').val($("#txtFldDlgDsExpryDate").val()); 
//$lastRow.find("td:eq(4)").find('input:eq(0)').on("change",function(){
//	checkDateFormat($(this));   
//	if(!dhtmlChkDateValidation($lastRow.find("td:eq(3)").find('input:eq(0)'),$lastRow.find("td:eq(4)").find('input:eq(0)'),"Expiry Date should be greater than the Inception Date"));  
//	dhtmlModChange($lastRow);	
//});
//
//
//var sel1 = $("#selDlgliDsbltyTypes > option").clone();
//$lastRow.find("td:eq(5)").find('select:eq(0)').append(sel1);
//$lastRow.find("td:eq(5)").find('select:eq(0)').val($("#selDlgliDsbltyTypes").val()); 
//$lastRow.find("td:eq(5)").find('select:eq(0)').on("change",function(){
//	dhtmlModChange($lastRow);
//});
//
//$lastRow.find("td:eq(6)").find('input:eq(0)').val($("#txtFldDlgliDsbltyYrBegins").val()); 
//$lastRow.find("td:eq(6)").find('input:eq(0)').on("change", function(){
//	disablityYrBegin($(this),$lastRow.find("td:eq(7)").find('input:eq(0)'));
//	dhtmlModChange($lastRow);
//});
//
//
//$lastRow.find("td:eq(7)").find('input:eq(0)').val($("#txtFldDlgliDsbltyYrCeases").val());
//$lastRow.find("td:eq(7)").find('input:eq(0)').on("change", function(){
//		disablityYrCeases($(this),$lastRow.find("td:eq(6)").find('input:eq(0)'));
//		dhtmlModChange($lastRow);
//});
//
//
//$lastRow.find("td:eq(8)").find('input:eq(0)').val($("#txtFldDlgliDsbltyBenf").val());
//$lastRow.find("td:eq(8)").find('input:eq(0)').addClass("applyEvntUsd");
//$lastRow.find("td:eq(8)").find('input:eq(0)').on("change",function(){
//	dhtmlModChange($lastRow);
//});
//
//$lastRow.find("td:eq(9)").find('input:eq(0)').val($("#txtFldDlgliDsbltyIncBenf").val());
//$lastRow.find("td:eq(9)").find('input:eq(0)').addClass("applyEvntpCent");
//$lastRow.find("td:eq(9)").find('input:eq(0)').on("change",function(){
//	dhtmlModChange($lastRow);	
//});
//
//applyEventHandlers();
//
//
//$lastRow.find("input,select").on("click",function(event){
//	event.stopPropagation();
//});
//
//$lastRow.click(function() {
//    var checkbox = $(this).find("td:eq(1)").find("input");
//    if(checkbox.is(":checked")) {
//        checkbox.prop("checked", false);
//	$lastRow.removeClass("selected");
//    }else {
//        checkbox.prop("checked", true);
//	$lastRow.addClass("selected");
//    }
//});
//
////DHTML CRUD ICONS
//$lastRow.click(function(){
//	/*toggleSingleRow($lastRow);*/
//	crudicons(this,'liDisabilitytbl','SelliDisability','DsbltyERow','DsbltyDRow');
//			
//});
////DHTML CRUD ICONS
//
//$lastRow.find("td:eq(1)").find("input:first").click(function(){
//	selectSingleRow(this);
////	DHTML CRUD ICONS
//	crudicons(this,'liDisabilitytbl','SelliDisability','DsbltyERow','DsbltyDRow');
//});
//
//
//if(dataset != null){
//
//	
//	$lastRow.find("td:eq(0)").find('input:eq(0)').val("Q");
//			
//	var infoDetsArr = new Array();
//	
//	for(var data in dataset){
//		var col = dataset[data];
//		
//		switch(data){
//		
//			case "benfId": 
//				$lastRow.find("td:eq(0)").find('input:eq(1)').val(col);
//				$lastRow.find("td:eq(0)").find('input:eq(2)').val('DISABILITY');  
//				break; 
//				
//			case "benfPlanName": 
//				$lastRow.find("td:eq(2)").find('input:eq(0)').val(col);  
//				break;
//				
//			case "benfIncepDate": 
//				$lastRow.find("td:eq(3)").find('input:eq(0)').val(col);  
//				break;
//				
//			case "benfExpDate": 
//				$lastRow.find("td:eq(4)").find('input:eq(0)').val(col);  
//				break;
//				
//			case "befType":
//				selectNullvalChk($lastRow.find("td:eq(5)"),col);  
//				break;
//				
//		 
//			case "startYr": 
//				$lastRow.find("td:eq(6)").find('input:eq(0)').val(col);  
//				break;
//			 
//			case "endYr": 
//				$lastRow.find("td:eq(7)").find('input:eq(0)').val(col);  
//				break;
//			 
//			case "benfValue": 
//				$lastRow.find("td:eq(8)").find('input:eq(0)').val(col);  
//				break;
//			 
//			case "bnefIncr": 
//				$lastRow.find("td:eq(9)").find('input:eq(0)').val(col);  
//				break;
//				
//			case "benfCrtdBy": 
//				$lastRow.find("td:eq(9)").find('input:eq(1)').val(col);
//				infoDetsArr.push(col);				
//				break;
//				
//			case "benfCrtdDate":
//				$lastRow.find("td:eq(9)").find('input:eq(2)').val(col);
//				infoDetsArr.push(col);
//				break;
//				
//			case "benfModBy":
//				infoDetsArr.push(col);
//				break;
//				
//			case "benfModDate":
//				infoDetsArr.push(col);
//				break;	
//		}			 
//		 
//	}
//	} 
//else{
////	DHTML CRUD ICONS
//	crudicons(null,'liDisabilitytbl','SelliDisability','DsbltyERow','DsbltyDRow');
//}	
//
///*
////instant save added line
//if(dataset == null){
//	instantlfDisableSave($lastRow,INS_MODE);		
//}
////
//
//
//$lastRow.find("input[type=text]").prop("readonly",true);//instant save added line
//$lastRow.find("select").prop("disabled",true);//instant save added line
//*/
//reOrderVisibleRows('liDisabilitytbl');
//}
//
////DHTML SELECT ALL
//function SelAllliDisability(obj){
//	
//	if($(obj).is(":checked")){
//		
//		$('#liDisabilitytbl tbody tr').find("td:eq(1)").find("input[type=checkbox]").prop("checked",true);
//		
//		$("#DsbltyDRow").attr("disabled",false);
//		$('#liDisabilitytbl tbody tr').addClass("selected");
//		
//		var $rowCount = $('#liDisabilitytbl tbody tr').length;
//		
//		if($rowCount == 0){
//			$(obj).prop("checked",false);
//			$("#DsbltyERow").attr("disabled",true);
//			$("#DsbltyDRow").attr("disabled",true);
//		}else if($rowCount == 1){
//			$("#DsbltyERow").attr("disabled",false);
//			$("#DsbltyDRow").attr("disabled",false);
//		}else if($rowCount > 1){
//			$("#DsbltyERow").attr("disabled",true);
//			$("#DsbltyDRow").attr("disabled",false);
//		}
//		
//	}else{
//		
//		$('#liDisabilitytbl tbody tr').find("td:eq(1)").find("input[type=checkbox]").prop("checked",false);
//		
//		$('#liDisabilitytbl tbody tr').removeClass("selected");
//		
//		$("#DsbltyERow").attr("disabled",true);
//		$("#DsbltyDRow").attr("disabled",true);
//		
//	}
//	
//
//
//}
// 
///*Edit Row Click */
//$("#DsbltyERow").on("click",function(){
//	DsbltyVRow();
//	
//});
//
//
///*View Row Click */
//function DsbltyVRow(){
//	var isOneRowSelected=0;
//	var $rowCount = $('#liDisabilitytbl tbody tr:visible').length;	
//	var $lastRow = $("#liDisabilitytbl tbody tr:visible:last");	
//	
//	if($rowCount<1){
//		applyToastrAlert("Insert rows before edit/view");
//		return;
//	} 
//	
//	$("#liDisabilitytbl tbody tr:visible").each(function(){
//		var $row = $(this);   
//		$row.removeClass('selected');  
//		$(this).removeAttr("style"); 
//		$row.find("td").removeAttr("style");
//		
//			
//	});
//	
//	
//	
//	$("#liDisabilitytbl tbody tr:visible").find('input[name="raddsbltySelect"]').each(function(){ //Checkbox selection
//		var $curElm=$(this);
//		if($curElm.is(":checked")){ 
//			isOneRowSelected++;
//		}
//	});
//	
//	
//	if(isOneRowSelected > 1){ 
//		applyToastrAlert("More than one rows selected.Select one row only");
//		return;
//	}
//	
//	$("#liDisabilitytbl tbody tr:visible").find('input[name="raddsbltySelect"]').each(function(){ //Checkbox selection
//		var $curElm=$(this);
//		if($curElm.is(":checked")){ 
//			var $row = $curElm.parents("tr");                                    
//			var $mode = $curElm.parents("tr").find("td:first").find('input:eq(0)').val(); 
//			$curElm.prop("checked",false);
//	     	 $curElm.parents("tr").removeClass('selected');
//	     	 
//			if(($mode == INS_MODE) || ($mode == UPD_MODE) ){
//				 var $RowId=$row.index();
//				 $curElm.parents("tr").find("td:first").find('input:eq(0)').val($mode);
//				 $(this).parents("tr").find("td").find("input.editable,select.editable").each(function(){
//						$(this).attr("disabled",false); 
//						$row.removeClass('selected');  
//						$(this).parent().css({border:'1px solid green'});
//						$row.css({border:'1px solid green'});
//						$row.find("td").css({border:'1px solid green'}); 
//					}); 
//				 	dsbltyRdlyflds($mode);
//					dsbltyfilldlgval($row); 
//					showFIPAModel('liDisabilty_Dialog','Life Insurance - Disability Details');  
//					$("#liDisabilty_Dialog").find(".modal-footer").find("button:eq(0)").removeClass("hidden");//instant save added line
//					
//					$('#liDisabilty_Dialog').on('shown.bs.modal', function () {
//	//					$row.find("input[type=text]").prop("readonly",true);//instant save added line
//	//					$row.find("select").prop("disabled",true);//instant save added line
//					
////						fetchDsblePlanDetails();
////						$("#liDisabilty_Dialog").find(".modal-footer").find("button:eq(0)").text("Edit");
//						$("#liDisabilty_Dialog").find("select[id=selDlgliDsbltyTypes]").focus();//Aravindh
//						$("#liDisabilty_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
//							 if(!validatedsbltyDetails())return; 
//					     		if(!isEmpty($RowId) && !($RowId==undefined)){  
//					     			dsbltyfilldomval($RowId,$row); 
//					     		}  
//				//	     		instantlfDisableSave($row,UPD_MODE); //instant save added line
//								$('#liDisabilty_Dialog').modal('hide'); 
//								dsbltyClearFlds();
//								crudicons(null,'liDisabilitytbl','SelliDisability','DsbltyERow','DsbltyDRow');			
//						});
//
//						$("#liDisabilty_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
//							crudicons(null,'liDisabilitytbl','SelliDisability','DsbltyERow','DsbltyDRow');
//						});
//					});
//					 
//			}  
//			if($mode == QRY_MODE){
//				 var $RowId=$row.index();
//				 $curElm.parents("tr").find("td:first").find('input:eq(0)').val(UPD_MODE);  
//				 $(this).parents("tr").find("td").find("input.editable,select.editable").each(function(){
//						$(this).attr("disabled",false); 
//						$row.removeClass('selected');  
//						$(this).parent().css({border:'1px solid green'});
//						$row.css({border:'1px solid green'});
//						$row.find("td").css({border:'1px solid green'}); 
//					}); 
//				 	dsbltyRdlyflds($mode);
//					dsbltyfilldlgval($row); 
//					showFIPAModel('liDisabilty_Dialog','Life Insurance - Disability Details'); 
//					$("#liDisabilty_Dialog").find(".modal-footer").find("button:eq(0)").removeClass("hidden");//instant save added line
//					
//					$('#liDisabilty_Dialog').on('shown.bs.modal', function () {
//				//		$row.find("input[type=text]").prop("readonly",true);//instant save added line
//				//		$row.find("select").prop("disabled",true);//instant save added line
//					
////						fetchDsblePlanDetails();
////						$("#liDisabilty_Dialog").find(".modal-footer").find("button:eq(0)").text("Edit");
//						$("#liDisabilty_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
//							 if(!validatedsbltyDetails())return; 
//					     		if(!isEmpty($RowId) && !($RowId==undefined)){  
//					     			dsbltyfilldomval($RowId,$row); 
//					     		}  
//					    // 		instantlfDisableSave($row,UPD_MODE); //instant save added line
//								$('#liDisabilty_Dialog').modal('hide'); 
//								dsbltyClearFlds();
//								crudicons(null,'liDisabilitytbl','SelliDisability','DsbltyERow','DsbltyDRow');
//						});
//						$("#liDisabilty_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
//							crudicons(null,'liDisabilitytbl','SelliDisability','DsbltyERow','DsbltyDRow');
//						});
//					});
//					 
//			}
//			isOneRowSelected++;
//		} 
//	});
//	
//	 
//	if(isOneRowSelected==0){
//		applyToastrAlert("No Rows Selected");
//		return;
//	}
//
//	
//}
//
//
///*Delete Row Click */
//$("#DsbltyDRow").on("click",function(){ 
//	 datatableDeleteRow('liDisabilitytbl',liDisabilitytbl,'SelliDisability','DsbltyERow','DsbltyDRow');  
///*//		DHTML CRUD ICONS
//		var rc = liDeathBenefittbl.row().count();
//		if(rc ==0){
//			$("#SelliDisability").prop("checked",false);
//			crudicons(this,'liDisabilitytbl','SelliDisability','DsbltyERow','DsbltyDRow');
//		}
////		DHTML CRUD ICONS
//*/});
//
//function fetchDsblePlanDetails(){
//
//	 $("#liDisabilty_Dialog #txtFldDlgDsPlanName").prop("disabled",true);
//	 $("#liDisabilty_Dialog #txtFldDlgDsIncepDate").prop("disabled",true);
//	 $("#DsblIncptDatepicker").datetimepicker("remove");
//	 $("#liDisabilty_Dialog #txtFldDlgDsExpryDate").prop("disabled",true); 
//	 $("#DsblExpryDatepicker").datetimepicker("remove");
//	 $("#liDisabilty_Dialog #txtFldDlgDsPlanName").val($("#hPlanName").val());
//	 $("#liDisabilty_Dialog #txtFldDlgDsIncepDate").val($("#hInceptionDate").val());
//	 $("#liDisabilty_Dialog #txtFldDlgDsExpryDate").val($("#hExpiryDate").val());
//	  
//}
///*Clear Fields */
//function dsbltyClearFlds(){
//	$("#liDisabilty_Dialog").find("input[type=text]").val("");
//	$("#liDisabilty_Dialog").find("textarea").val("");
//	$("#liDisabilty_Dialog").find("select").val("");
//	
//}
//
///*Disabled/Readonly Fields */
//function dsbltyRdlyflds(mode){ 
//	 if(mode == QRY_MODE ){
//			$("#liDisabilty_Dialog :input").prop("disabled", false); 
//	 } else if((mode == INS_MODE) || (mode == UPD_MODE) ){
//			$("#liDisabilty_Dialog :input").prop("disabled", false);
//	 } 
//	 $("#liDisabilty_Dialog #txtFldDlgDsPlanName").prop("disabled",true);
//	 $("#liDisabilty_Dialog #txtFldDlgDsIncepDate").prop("disabled",true);
//	 $("#liDisabilty_Dialog #txtFldDlgDsExpryDate").prop("disabled",true); 
//}
//
//
///*Validation */
//function validatedsbltyDetails(){
//	 
//	if(!(validateFocusFlds('liDisabilty_Dialog','selDlgliDsbltyTypes',LIDSB_TYPE))) return; 
//	if(!(validateFocusFlds('liDisabilty_Dialog','txtFldDlgliDsbltyYrBegins',LIDSB_BEGINS))) return;
//	if(!(validateFocusFlds('liDisabilty_Dialog','txtFldDlgliDsbltyYrCeases',LIDSB_CEASES))) return;
//	
//	  return true; 
//}
// 
//
///*Mandatory Fields Tooltip*/ 
//$("#selDlgliDsbltyTypes,#txtFldDlgliDsbltyYrBegins,#txtFldDlgliDsbltyYrCeases").on("change",function(){
//	if(!isEmpty($(this).val())){
//	$(this).removeClass("mandatoryFillFlds");
//	$(this).qtip('disable');
//	$(this).qtip('destroy',true);
//	}
//});
//  
//
//
///* Filling Model Fields*/
//function dsbltyfilldlgval($lastRow){
//	  
////	  $('#liDisabilty_Dialog #txtFldDlgliDsbltyMode').val($lastRow.find("td:eq(0)").find('input:eq(0)').val());//instant save added line
//	  $('#liDisabilty_Dialog #txtFldDlgliDsbltyId').val($lastRow.find("td:eq(0)").find('input:eq(1)').val());
//	  $('#liDisabilty_Dialog #txtFldDlgDsPlanName').val($lastRow.find("td:eq(2)").find('input:eq(0)').val());
//	  $('#liDisabilty_Dialog #txtFldDlgDsIncepDate').val($lastRow.find("td:eq(3)").find('input:eq(0)').val());
//	  $('#liDisabilty_Dialog #txtFldDlgDsExpryDate').val($lastRow.find("td:eq(4)").find('input:eq(0)').val());
//	  $('#liDisabilty_Dialog #selDlgliDsbltyTypes').val($lastRow.find("td:eq(5)").find('select:eq(0)').val());
//	  $('#liDisabilty_Dialog #txtFldDlgliDsbltyYrBegins').val($lastRow.find("td:eq(6)").find('input:eq(0)').val());
//	  $('#liDisabilty_Dialog #txtFldDlgliDsbltyYrCeases').val($lastRow.find("td:eq(7)").find('input:eq(0)').val());
//	  $('#liDisabilty_Dialog #txtFldDlgliDsbltyBenf').val($lastRow.find("td:eq(8)").find('input:eq(0)').val());
//	  $('#liDisabilty_Dialog #txtFldDlgliDsbltyIncBenf').val($lastRow.find("td:eq(9)").find('input:eq(0)').val());
//	  $('#liDisabilty_Dialog #txtFldDlgliDsbltyCrtdBy').val($lastRow.find("td:eq(9)").find('input:eq(1)').val());
//	  $('#liDisabilty_Dialog #txtFldDlgliDsbltyCrtdDate').val($lastRow.find("td:eq(9)").find('input:eq(2)').val()); 
//	  
//	
//}
//
///* Filling Table Fields*/
//function dsbltyfilldomval($RowId,$row){
//	
//	$row.find("td:eq(2)").find('input:eq(0)').val($("#txtFldDlgDsPlanName").val());
//	$row.find("td:eq(3)").find('input:eq(0)').val($("#txtFldDlgDsIncepDate").val());
//	$row.find("td:eq(4)").find('input:eq(0)').val($("#txtFldDlgDsExpryDate").val());
//	
//	$row.find("td:eq(2)").find('select:eq(0)').val($("#selDlgliDsbltyTypes").val()); 
//	$row.find("td:eq(3)").find('input:eq(0)').val($("#txtFldDlgliDsbltyYrBegins").val());
//	$row.find("td:eq(4)").find('input:eq(0)').val($("#txtFldDlgliDsbltyYrCeases").val());  
//	$row.find("td:eq(5)").find('input:eq(0)').val($("#txtFldDlgliDsbltyBenf").val()); 
//	$row.find("td:eq(6)").find('input:eq(0)').val($("#txtFldDlgliDsbltyIncBenf").val()); 
////	$row.find("input[type=text]").prop("readonly",true);//instant save added line
////	$row.find("select").prop("disabled",true);//instant save added line
//                                 
//}
//
// 
//
////instant save added line
//$("#liDisabilty_Dialog").find("input,select,textarea").on("change",function(){
//	$("#liDisabilty_Dialog").find(".modal-footer").find("button:eq(0)").removeClass("hidden");
//});
//
//
// /*###########################################################################################################################################################*/
// /**
// * Life Insurance -Critical Illness
// * 
// */
//
///*Datatable Initialisation*/
////var liCriticalIllnesstbl = $('#liCriticalIllnesstbl').DataTable( {
////	destroy: true,
//// 	responsive: false,         
////    ordering: false,
////    searching: false,     
////    scrollY:  "40vh",
////    scrollX: true,
////    scroller: false,
////    scrollCollapse:false,
////    paging:false, 
////    filter:false,   
////    columnDefs: [], 
////    dom: '<<"top" ip>flt>',  
////  columnDefs: [  { width: '20px', targets: [0,1]},
////   	             {"className": "dt-head-center text-center",targets: [0,1,2,3,4,5,6,7,8],"orderable": false,"searchable": false}],		 
////		 fnDrawCallback: function(oSettings) {
////			 if (oSettings._iDisplayLength > oSettings.fnRecordsDisplay()) { 
////				 
////			    } 
////    
////		 }, 
////}).draw();
////	
//
//
///*Add Row Click */
//$("#CrtlARow").on("click",function(){
//	if(isEmpty($("#hPlanName").val()) || isEmpty($("#hInceptionDate").val()) ){ 
//		 $('#lifeInsNavTabsDets a[href="#liplandetails"]').click(); 
//		 applyToastrAlert("Please Select any of the plans in Plan Details");
//		 return;
//	}
//	
//			crtlnsClearFlds();
//			showFIPAModel('liCrtclIllns_Dialog','Life Insurance - Critical Illness Details');   
////			$("#liCrtclIllns_Dialog").find("input[id=txtFldDlgCrtlnsMode]").val("I");//instant save added line
//			fetchCrtlnsPlanDetails();
//			$('#liCrtclIllns_Dialog').on('shown.bs.modal', function () { 
////				$("#liCrtclIllns_Dialog").find(".modal-footer").find("button:eq(0)").text("Add");
//				$("#liCrtclIllns_Dialog").find("select[id=selDlgCrtlnsLvlDD]").focus();//Aravindh
//				$("#liCrtclIllns_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
//						if(!validatecrtlnsDetails())return;
//					   	crtlnsRdlyflds(INS_MODE);  
//					   	getlicrtlnsRows(null); 
//						$('#liCrtclIllns_Dialog').modal('hide'); 
//				  });  
//			});
//			
//			
//});
//
//
///*Populate Data */
//function getlicrtlnsRows(dataset){ 
// 
//var cell0 = '<span></span>'+
//'<input type="hidden" name="txtFldcrtlnsMode" readonly="true" value="'+INS_MODE+'" class="fipaMode"/><input type="hidden" name="txtFldCrtlnsId"><input type="hidden" name="ScrCoverageTypes" value="CRITICAL ILLNESS">';
//var cell1 = '<div class="checkbox checkbox-primary text-center"><input type="checkbox" name="radcrtlnsSelect"/><label>&nbsp;</label></div>'; 
//var cell2 = '<input type="text" name="txtFldCrtlnsPlanName"  maxlength="150" onmouseover="fipaTooltip(this);" class="form-control editable"  readonly="true" />';
//var cell3 = '<input type="text" name="txtFldCrtlnsIncDate"  maxlength="10" onmouseover="fipaTooltip(this);" class="form-control editable"   readonly="true"/>';
//var cell4 = '<input type="text" name="txtFldCrtlnsExpDate"  maxlength="10" onmouseover="fipaTooltip(this);" class="form-control editable"  readonly="true" />';
//var cell5 = '<select  name="selCrtlnsLvlDD"  onmouseover="fipaTooltip(this);" class="form-control editable" ></select>'; 
//var cell6 = '<input type="text" name="txtFldCrtlnsBenfAmt"  onmouseover="fipaTooltip(this);" class="form-control editable"   />';
//var cell7 = '<input type="text" name="txtFldCrtlnsTermofBenf"  onmouseover="fipaTooltip(this);" class="form-control editable"  />'; 
//var cell8 ='<input type="text" name="txtFldCrtlnsRemarks"  maxlength="300" onmouseover="fipaTooltip(this);" class="form-control editable"   />'+
//'<input type="hidden" name="txtFldCrtlnsCrtdBy"/><input type="hidden" name="txtFldCrtlnsCrtdDate"/>'; 
//
//liCriticalIllnesstbl.row.add( [cell0,cell1,cell2,cell3,cell4,cell5,cell6,cell7,cell8] ).draw( false );
//
//var rowCount = $('#liCriticalIllnesstbl tbody tr').length;	
//var $lastRow = $("#liCriticalIllnesstbl tbody tr:last");	
//
//$lastRow.find("td:first").find('span').text(rowCount); 
//
//$lastRow.find("td:eq(1)").find("input:first").click(function(){
//	selectSingleRow(this);
//});
//
//
//$lastRow.find("td:eq(1)").find("input:first").attr('id',"radcrtlns"+$lastRow.index())
//.parent().find('label').attr('for',"radcrtlns"+$lastRow.index());
//
//
//
//
//$lastRow.find("td:eq(2)").find('input:eq(0)').val($("#txtFldDlgCrtlPlanName").val()); 
//$lastRow.find("td:eq(2)").find('input:eq(0)').on("change",function(){ 
//	 dhtmlModChange($lastRow);
//});
//
//
//
//$lastRow.find("td:eq(3)").find('input:eq(0)').val($("#txtFldDlgCrtlsIncepDate").val()); 
//$lastRow.find("td:eq(3)").find('input:eq(0)').datetimepicker(dateOptions).on("change",function(){
//	 checkDateFormat($(this));   
//	 if(!dhtmlChkDateValidation($lastRow.find("td:eq(3)").find('input:eq(0)'),$lastRow.find("td:eq(4)").find('input:eq(0)'),"Inception Date should be lesser than the Expiry Date"));  
//	 dhtmlModChange($lastRow);
//});
// 
//
//$lastRow.find("td:eq(4)").find('input:eq(0)').val($("#txtFldDlgCrtlnsExpDate").val()); 
//$lastRow.find("td:eq(4)").find('input:eq(0)').datetimepicker(dateOptions).on("change",function(){
//	 checkDateFormat($(this));
//	 if(!dhtmlChkDateValidation($lastRow.find("td:eq(3)").find('input:eq(0)'),$lastRow.find("td:eq(4)").find('input:eq(0)'),"Expiry Date should be greater than the Inception Date"));  
//	 dhtmlModChange($lastRow);
//});
// 
//
//var sel1 = $("#selDlgCrtlnsLvlDD > option").clone();
//$lastRow.find("td:eq(5)").find('select:eq(0)').append(sel1);
//$lastRow.find("td:eq(5)").find('select:eq(0)').val($("#selDlgCrtlnsLvlDD").val()); 
//$lastRow.find("td:eq(5)").find('select:eq(0)').on("change",function(){
//	dhtmlModChange($lastRow);	
//});
//
//$lastRow.find("td:eq(6)").find('input:eq(0)').val($("#txtFldDlgCrtlnsBenfAmt").val());
//$lastRow.find("td:eq(6)").find('input:eq(0)').addClass("applyEvntUsd");
//$lastRow.find("td:eq(6)").find('input:eq(0)').on("change",function(){
//	dhtmlModChange($lastRow);
//});
//
//$lastRow.find("td:eq(7)").find('input:eq(0)').val($("#txtFldDlgCrtlnsTermofBenf").val());
//$lastRow.find("td:eq(7)").find('input:eq(0)').addClass("applyEvntYrs");
//$lastRow.find("td:eq(7)").find('input:eq(0)').on("change",function(){
//	dhtmlModChange($lastRow);
//});
//
//
//$lastRow.find("td:eq(8)").find('input:eq(0)').val($("#txtFldDlgCrtlnsRemarks").val());
//$lastRow.find("td:eq(8)").find('input:eq(0)').on("change",function(){
//	dhtmlModChange($lastRow);
//});
//
//applyEventHandlers(); 
//
//
//
//$lastRow.find("input,select").on("click",function(event){
//	event.stopPropagation();
//});
//$lastRow.click(function() {
//    var checkbox = $(this).find("td:eq(1)").find("input");
//    if(checkbox.is(":checked")) {
//        checkbox.prop("checked", false);
//	$lastRow.removeClass("selected");
//    }else {
//        checkbox.prop("checked", true);
//	$lastRow.addClass("selected");
//    }
//});
////DHTML CRUD ICONS
//$lastRow.click(function(){
//	/*toggleSingleRow($lastRow);*/
//	crudicons(this,'liCriticalIllnesstbl','SelliCriticalIllness','CrtlERow','CrtlDRow');
//			
//});
////DHTML CRUD ICONS
//
//$lastRow.find("td:eq(1)").find("input:first").click(function(){
//	selectSingleRow(this);
////	DHTML CRUD ICONS
//	crudicons(this,'liCriticalIllnesstbl','SelliCriticalIllness','CrtlERow','CrtlDRow');
//});
//
//
//if(dataset != null){
// 
//	$lastRow.find("td:eq(0)").find('input:eq(0)').val("Q");
//	var infoDetsArr = new Array();
//	
//	for(var data in dataset){
//		var col = dataset[data];
//		
//		switch(data){
//		
//			case "coverId": 
//				$lastRow.find("td:eq(0)").find('input:eq(1)').val(col);
//				$lastRow.find("td:eq(0)").find('input:eq(2)').val('CRITICAL ILLNESS');  
//				break;
//				
//			case "coverPlanname": 
//				$lastRow.find("td:eq(2)").find('input:eq(0)').val(col);  
//				break;
//				
//			case "effDate": 
//				$lastRow.find("td:eq(3)").find('input:eq(0)').val(col);  
//				break;
//				
//			case "expiryDate": 
//				$lastRow.find("td:eq(4)").find('input:eq(0)').val(col);  
//				break;
//				 
//			case "coverLevelortype":
//				selectNullvalChk($lastRow.find("td:eq(5)"),col);  
//				break;
//				 
//			case "coverSumAssured": 
//				$lastRow.find("td:eq(6)").find('input:eq(0)').val(col);  
//				break;
//			 
//			case "coverageTerm": 
//				$lastRow.find("td:eq(7)").find('input:eq(0)').val(col);  
//				break;
//			 
//			case "coverRemarks": 
//				$lastRow.find("td:eq(8)").find('input:eq(0)').val(col);  
//				break;
//				
//			case "coverCreatedBy": 
//				$lastRow.find("td:eq(8)").find('input:eq(1)').val(col);
//				infoDetsArr.push(col);				
//				break;
//				
//			case "coverCreatedDate":
//				$lastRow.find("td:eq(8)").find('input:eq(2)').val(col);
//				infoDetsArr.push(col);
//				break;
//				
//			case "coverModifiedBy":
//				infoDetsArr.push(col);
//				break;
//				
//			case "coverModifiedDate":
//				infoDetsArr.push(col);
//				break;	
//		}			 
//		 
//	}
//	}
//else{
////	DHTML CRUD ICONS
//	crudicons(null,'liCriticalIllnesstbl','SelliCriticalIllness','CrtlERow','CrtlDRow');
//}
//
///*
////instant save added line
//if(dataset == null){
//	instantlfCritlsSave($lastRow,INS_MODE);		
//}
////
//
//$lastRow.find("input[type=text]").prop("readonly",true);//instant save added line
//$lastRow.find("select").prop("disabled",true);//instant save added line
//*/
//reOrderVisibleRows('liCriticalIllnesstbl');
//}
//
////DHTML SELECT ALL
//function SelAllCriticalIllness(obj){
//	
//	if($(obj).is(":checked")){
//		
//		$('#liCriticalIllnesstbl tbody tr').find("td:eq(1)").find("input[type=checkbox]").prop("checked",true);
//		
//		$("#CrtlDRow").attr("disabled",false);
//		$('#liCriticalIllnesstbl tbody tr').addClass("selected");
//		
//		var $rowCount = $('#liCriticalIllnesstbl tbody tr').length;
//		
//		if($rowCount == 0){
//			$(obj).prop("checked",false);
//			$("#CrtlERow").attr("disabled",true);
//			$("#CrtlDRow").attr("disabled",true);
//		}else if($rowCount == 1){
//			$("#CrtlERow").attr("disabled",false);
//			$("#CrtlDRow").attr("disabled",false);
//		}else if($rowCount > 1){
//			$("#CrtlERow").attr("disabled",true);
//			$("#CrtlDRow").attr("disabled",false);
//		}
//		
//	}else{
//		
//		$('#liCriticalIllnesstbl tbody tr').find("td:eq(1)").find("input[type=checkbox]").prop("checked",false);
//		
//		$('#liCriticalIllnesstbl tbody tr').removeClass("selected");
//		
//		$("#CrtlERow").attr("disabled",true);
//		$("#CrtlDRow").attr("disabled",true);
//		
//	}
//	
//}
// 
///*Edit Row Click */
//$("#CrtlERow").on("click",function(){
//	CrtlVRow(); 
//});
//
//
///*View Row Click */
//function CrtlVRow(){
//	var isOneRowSelected=0;
//	var $rowCount = $('#liCriticalIllnesstbl tbody tr:visible').length;	
//	var $lastRow = $("#liCriticalIllnesstbl tbody tr:visible:last");	
//	
//	if($rowCount<1){
//		applyToastrAlert("Insert rows before edit/view");
//		return;
//	} 
//	
//	
//	$("#liCriticalIllnesstbl tbody tr:visible").each(function(){
//		var $row = $(this);   
//		$row.removeClass('selected');  
//		$(this).removeAttr("style"); 
//		$row.find("td").removeAttr("style");
//		
//			
//	});
//	
//	
//	 
//	$("#liCriticalIllnesstbl tbody tr:visible").find('input[name="radcrtlnsSelect"]').each(function(){ //Checkbox selection
//		var $curElm=$(this);
//		if($curElm.is(":checked")){ 
//			isOneRowSelected++;
//		}
//	});
//	
//	
//	if(isOneRowSelected > 1){ 
//		applyToastrAlert("More than one rows selected.Select one row only");
//		return;
//	}
//	
//	$("#liCriticalIllnesstbl tbody tr:visible").find('input[name="radcrtlnsSelect"]').each(function(){ //Checkbox selection
//		var $curElm=$(this);
//		if($curElm.is(":checked")){ 
//			var $row = $curElm.parents("tr");                                    
//			var $mode = $curElm.parents("tr").find("td:first").find('input:eq(0)').val(); 
//			$curElm.prop("checked",false);
//	     	 $curElm.parents("tr").removeClass('selected');
//	     	 
//			if(($mode == INS_MODE) || ($mode == UPD_MODE) ){
//				 var $RowId=$row.index();
//				 $curElm.parents("tr").find("td:first").find('input:eq(0)').val($mode);  
//				 	crtlnsRdlyflds($mode);
//					crtlnsfilldlgval($row); 
//					showFIPAModel('liCrtclIllns_Dialog','Life Insurance - Critical Illness Details');  
//					$("#liCrtclIllns_Dialog").find(".modal-footer").find("button:eq(0)").removeClass("hidden");//instant save added line
//					
//					$('#liCrtclIllns_Dialog').on('shown.bs.modal', function () {
////						fetchCrtlnsPlanDetails();
//			//			$row.find("input[type=text]").prop("readonly",true);//instant save added line
//			//			$row.find("select").prop("disabled",true);//instant save added line
//					
//
////						$("#liCrtclIllns_Dialog").find(".modal-footer").find("button:eq(0)").text("Edit");
//						$("#liCrtclIllns_Dialog").find("select[id=selDlgCrtlnsLvlDD]").focus();//Aravindh
//						$("#liCrtclIllns_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
//							 if(!validatecrtlnsDetails())return; 
//					     		if(!isEmpty($RowId) && !($RowId==undefined)){  
//					     			crtlnsfilldomval($RowId,$row); 
//					     		}  
////					     		instantlfCritlsSave($row,UPD_MODE); //instant save added line
//								$('#liCrtclIllns_Dialog').modal('hide'); 
//								crtlnsClearFlds();
//								crudicons(null,'liCriticalIllnesstbl','SelliCriticalIllness','CrtlERow','CrtlDRow');
//						});
//
//						$("#liCrtclIllns_Dialog").find(".modal-footer").find("button:eq(1)").on("click",function(){
//							crudicons(null,'liCriticalIllnesstbl','SelliCriticalIllness','CrtlERow','CrtlDRow');
//						});
//					});
//					 
//			}  
//			if(($mode ==QRY_MODE) ){
//				 var $RowId=$row.index();
//				 $curElm.parents("tr").find("td:first").find('input:eq(0)').val(UPD_MODE);  
//				 	crtlnsRdlyflds($mode);
//					crtlnsfilldlgval($row); 
//					showFIPAModel('liCrtclIllns_Dialog','Life Insurance - Critical Illness Details');
//					$("#liCrtclIllns_Dialog").find(".modal-footer").find("button:eq(0)").removeClass("hidden");//instant save added line
//					
//					$('#liCrtclIllns_Dialog').on('shown.bs.modal', function () {
//			//			$row.find("input[type=text]").prop("readonly",true);//instant save added line
//				//		$row.find("select").prop("disabled",true);//instant save added line
//					
//
////						fetchCrtlnsPlanDetails();
////						$("#liCrtclIllns_Dialog").find(".modal-footer").find("button:eq(0)").text("Edit");
//						$("#liCrtclIllns_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
//							 if(!validatecrtlnsDetails())return; 
//					     		if(!isEmpty($RowId) && !($RowId==undefined)){  
//					     			crtlnsfilldomval($RowId,$row); 
//					     		}  
//					//     		instantlfCritlsSave($row,UPD_MODE); //instant save added line
//								$('#liCrtclIllns_Dialog').modal('hide'); 
//								crtlnsClearFlds();
//								crudicons(null,'liCriticalIllnesstbl','SelliCriticalIllness','CrtlERow','CrtlDRow');
//						});
//						$("#liCrtclIllns_Dialog").find(".modal-footer").find("button:eq(1)").on("click",function(){
//							crudicons(null,'liCriticalIllnesstbl','SelliCriticalIllness','CrtlERow','CrtlDRow');
//						});
//					});
//					 
//			}  
//			isOneRowSelected++;
//		} 
//	});
//	
//	 
//	if(isOneRowSelected==0){
//		applyToastrAlert("No Rows Selected");
//		return;
//	}
//
//	
//}
//
//
///*Delete Row Click */
//$("#CrtlDRow").on("click",function(){ 
//	 	datatableDeleteRow('liCriticalIllnesstbl',liCriticalIllnesstbl,'SelliCriticalIllness','CrtlERow','CrtlDRow');   
///*//		DHTML CRUD ICONS
//		var rc = liDeathBenefittbl.row().count();
//		if(rc ==0){
//			$("#SelliCriticalIllness").prop("checked",false);
//			crudicons(this,'liCriticalIllnesstbl','SelliCriticalIllness','CrtlERow','CrtlDRow');
//		}
////		DHTML CRUD ICONS
//*/});
//
//
//function fetchCrtlnsPlanDetails(){ 
//
//	 $("#liCrtclIllns_Dialog #txtFldDlgCrtlPlanName").prop("disabled",true);
//	 $("#liCrtclIllns_Dialog #txtFldDlgCrtlsIncepDate").prop("disabled",true);
//	 $("#CrtlsIncptDatepicker").datetimepicker("remove");
//	 $("#liCrtclIllns_Dialog #txtFldDlgCrtlnsExpDate").prop("disabled",true); 
//	 $("#CrtlnsExpDatepicker").datetimepicker("remove");
//	 $("#liCrtclIllns_Dialog #txtFldDlgCrtlPlanName").val($("#hPlanName").val());
//	 $("#liCrtclIllns_Dialog #txtFldDlgCrtlsIncepDate").val($("#hInceptionDate").val());
//	 $("#liCrtclIllns_Dialog #txtFldDlgCrtlnsExpDate").val($("#hExpiryDate").val());
//}
///*Clear Fields */
//function crtlnsClearFlds(){
//	$("#liCrtclIllns_Dialog").find("input[type=text]").val("");
//	$("#liCrtclIllns_Dialog").find("textarea").val("");
//	$("#liCrtclIllns_Dialog").find("select").val("");
//}
//
///*Disabled/Readonly Fields */
//function crtlnsRdlyflds(mode){ 
//	 if(mode == QRY_MODE ){
//			$("#liCrtclIllns_Dialog :input").prop("disabled", false); 
//	 } else if((mode == INS_MODE) || (mode == UPD_MODE) ){
//			$("#liCrtclIllns_Dialog :input").prop("disabled", false);
//	 }
//	 $("#liCrtclIllns_Dialog #txtFldDlgCrtlPlanName").prop("disabled",true);
//	 $("#liCrtclIllns_Dialog #txtFldDlgCrtlsIncepDate").prop("disabled",true);
//	 $("#liCrtclIllns_Dialog #txtFldDlgCrtlnsExpDate").prop("disabled",true); 
//	  
//	
//}
//
///*Validation */
//function validatecrtlnsDetails(){
//	 
//	if(!(validateFocusFlds('liCrtclIllns_Dialog','selDlgCrtlnsLvlDD',LICL_LVLDD))) return;  
//	if(!(validateFocusFlds('liCrtclIllns_Dialog','txtFldDlgCrtlnsBenfAmt',LICL_BENAMT))) return;
//	if(!(validateFocusFlds('liCrtclIllns_Dialog','txtFldDlgCrtlnsTermofBenf',LICL_TERMOFBENF))) return;
//	
//	  return true; 
//}
// 
//
///*Mandatory Fields Tooltip*/ 
//$("#selDlgCrtlnsLvlDD,#txtFldDlgCrtlnsExpDate,#txtFldDlgCrtlnsBenfAmt").on("change",function(){
//	if(!isEmpty($(this).val())){
//	$(this).removeClass("mandatoryFillFlds");
//	$(this).qtip('disable');
//	$(this).qtip('destroy',true);
//	}
//});
//  
//
//
///* Filling Model Fields*/
//function crtlnsfilldlgval($lastRow){
//	  
//	//  $('#liCrtclIllns_Dialog #txtFldDlgCrtlnsMode').val($lastRow.find("td:eq(0)").find('input:eq(0)').val());//instant save added line
//	  $('#liCrtclIllns_Dialog #txtFldDlgCrtlnsId').val($lastRow.find("td:eq(0)").find('input:eq(1)').val());
//	  $('#liCrtclIllns_Dialog #txtFldDlgCrtlPlanName').val($lastRow.find("td:eq(2)").find('input:eq(0)').val());
//	  $('#liCrtclIllns_Dialog #txtFldDlgCrtlsIncepDate').val($lastRow.find("td:eq(3)").find('input:eq(0)').val());
//	  $('#liCrtclIllns_Dialog #txtFldDlgCrtlnsExpDate').val($lastRow.find("td:eq(4)").find('input:eq(0)').val());
//	  $('#liCrtclIllns_Dialog #selDlgCrtlnsLvlDD').val($lastRow.find("td:eq(5)").find('select:eq(0)').val());
//	  $('#liCrtclIllns_Dialog #txtFldDlgCrtlnsBenfAmt').val($lastRow.find("td:eq(6)").find('input:eq(0)').val());
//	  $('#liCrtclIllns_Dialog #txtFldDlgCrtlnsTermofBenf').val($lastRow.find("td:eq(7)").find('input:eq(0)').val());
//	  $('#liCrtclIllns_Dialog #txtFldDlgCrtlnsRemarks').val($lastRow.find("td:eq(8)").find('input:eq(0)').val());
//	  $('#liCrtclIllns_Dialog #txtFldDlgCrtlnsCrtdBy').val($lastRow.find("td:eq(8)").find('input:eq(1)').val());
//	  $('#liCrtclIllns_Dialog #txtFldDlgCrtlnsCrtdDate').val($lastRow.find("td:eq(8)").find('input:eq(2)').val()); 
//	  
//	
//}
//
///* Filling Table Fields*/
//function crtlnsfilldomval($RowId,$row){
//	
//	$row.find("td:eq(2)").find('input:eq(0)').val($("#txtFldDlgCrtlPlanName").val());
//	$row.find("td:eq(3)").find('input:eq(0)').val($("#txtFldDlgCrtlsIncepDate").val());
//	$row.find("td:eq(4)").find('input:eq(0)').val($("#txtFldDlgCrtlnsExpDate").val()); 
//	$row.find("td:eq(5)").find('select:eq(0)').val($("#selDlgCrtlnsLvlDD").val()); 
//	$row.find("td:eq(6)").find('input:eq(0)').val($("#txtFldDlgCrtlnsBenfAmt").val());  
//	$row.find("td:eq(7)").find('input:eq(0)').val($("#txtFldDlgCrtlnsTermofBenf").val()); 
//	$row.find("td:eq(8)").find('input:eq(0)').val($("#txtFldDlgCrtlnsRemarks").val()); 
//	//$row.find("input[type=text]").prop("readonly",true);//instant save added line
////	$row.find("select").prop("disabled",true);//instant save added line
//
//
//		
//}
//
////instant save added line
//$("#liCrtclIllns_Dialog").find("input,select,textarea").on("change",function(){
//	$("#liCrtclIllns_Dialog").find(".modal-footer").find("button:eq(0)").removeClass("hidden");
//});
// 
// /*###########################################################################################################################################################*/
// /**
// * Life Insurance -Hospitalisation
// * 
// */
//
///*Datatable Initialisation*/
////var liHospitilisationtbl = $('#liHospitilisationtbl').DataTable( {
////	destroy: true,
//// 	responsive: false,         
////    ordering: false,
////    searching: false,     
////    scrollY:  "40vh",
////    scrollX: true,
////    scroller: false,
////    scrollCollapse:false,
////    paging:false, 
////    filter:false,   
////    columnDefs: [], 
////    dom: '<<"top" ip>flt>',  
////  columnDefs: [  { width: '20px', targets: [0,1]},
////   	             {"className": "dt-head-center text-center",targets: [0,1,2,3,4,5,6,7,8,9],"orderable": false,"searchable": false}],		 
////		 fnDrawCallback: function(oSettings) {
////			 if (oSettings._iDisplayLength > oSettings.fnRecordsDisplay()) { 
////				 
////			    } 
////    
////		 }, 
////}).draw();
//	
//
//
///*Add Row Click */
//$("#HospARow").on("click",function(){
//	if(isEmpty($("#hPlanName").val()) || isEmpty($("#hInceptionDate").val()) ){ 
//		 $('#lifeInsNavTabsDets a[href="#liplandetails"]').click(); 
//		 applyToastrAlert("Please Select any of the plans in Plan Details");
//		 return;
//	}
//			hospClearFlds();
//			showFIPAModel('liHospitalisation_Dialog','Life Insurance - Hospitalisation Details');
//		//	$("#liHospitalisation_Dialog").find("input[id=txtFldDlgHospMode]").val("I");//instant save added line
//			fetchHospPlanDetails();
//			$('#liHospitalisation_Dialog').on('shown.bs.modal', function () {
////				$("#liHospitalisation_Dialog").find(".modal-footer").find("button:eq(0)").text("Add");
//				$("#liHospitalisation_Dialog").find("input[id=txtFldDlgHospAnnPrem]").focus();//Aravindh
//				$("#liHospitalisation_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
//						if(!validatehospDetails())return;
//					   	hospRdlyflds(INS_MODE);  
//					   	getlihospRows(null); 
//						$('#liHospitalisation_Dialog').modal('hide'); 
//				  });  
//			});
//			
//			
//});
//
///*Populate Data */
//function getlihospRows(dataset){ 
// 
//var cell0 = '<span></span>'+
//'<input type="hidden" name="txtFldhospMode" readonly="true" value="'+INS_MODE+'" class="fipaMode"/><input type="hidden" name="txtFldHospId"><input type="hidden" name="ScrCoverageTypes" value="HOSPITALITY">';
// 
//var cell1 = '<div class="checkbox checkbox-primary text-center"><input type="checkbox" name="radhospSelect"/><label>&nbsp;</label></div>'; 
//
//var cell2 = '<input type="text" name="txtFldHospPlanName"  maxlength="150" onmouseover="fipaTooltip(this);" class="form-control editable" readonly="true" />';
//var cell3 = '<input type="text" name="txtFldHospIncepDate"  maxlength="10" onmouseover="fipaTooltip(this);" class="form-control editable" readonly="true"/>';
//var cell4 = '<input type="text" name="txtFldHospExpDate"  maxlength="10" onmouseover="fipaTooltip(this);" class="form-control editable" readonly="true"/>';
//var cell5 = '<input type="text" name="txtFldHospAnnPrem"    onmouseover="fipaTooltip(this);" class="form-control editable" />';
//var cell6 = '<input type="text" name="txtFldHospClsOfBenf"  maxlength="10" onmouseover="fipaTooltip(this);" class="form-control editable" />'; 
//var cell7 = '<input type="text" name="txtFldHospTermOfCov"  onmouseover="fipaTooltip(this);" class="form-control editable" />';
//var cell8 = '<input type="text" name="txtFldHospDedctble"  onmouseover="fipaTooltip(this);" class="form-control editable"  />'; 
//var cell9 ='<input type="text" name="txtFldHospCoIns"  onmouseover="fipaTooltip(this);" class="form-control editable"  />'+
//'<input type="hidden" name="txtFldHospCrtdBy"/><input type="hidden" name="txtFldHospCrtdDate"/>'; 
//
//liHospitilisationtbl.row.add( [cell0,cell1,cell2,cell3,cell4,cell5,cell6,cell7,cell8,cell9] ).draw( false );
//
//var rowCount = $('#liHospitilisationtbl tbody tr').length;	
//var $lastRow = $("#liHospitilisationtbl tbody tr:last");	
//
//$lastRow.find("td:first").find('span').text(rowCount); 
//
//$lastRow.find("td:eq(1)").find("input:first").click(function(){
//	selectSingleRow(this);
//})
//
//$lastRow.find("td:eq(1)").find("input:first").attr('id',"radhosp"+$lastRow.index())
//.parent().find('label').attr('for',"radhosp"+$lastRow.index());
//
//
//
//$lastRow.find("td:eq(2)").find('input:eq(0)').val($("#txtFldDlgHospPlanName").val()); 
//$lastRow.find("td:eq(3)").find('input:eq(0)').val($("#txtFldDlgHospIncepDate").val()); 
//$lastRow.find("td:eq(4)").find('input:eq(0)').val($("#txtFldDlgHospExpDate").val()); 
//
//
//$lastRow.find("td:eq(5)").find('input:eq(0)').val($("#txtFldDlgHospAnnPrem").val()); 
//$lastRow.find("td:eq(5)").find('input:eq(0)').addClass("applyEvntUsd");
//$lastRow.find("td:eq(5)").find('input:eq(0)').on("change",function(){
//	dhtmlModChange($lastRow);
//});
// 
//$lastRow.find("td:eq(6)").find('input:eq(0)').val($("#txtFldDlgHospClsOfBenf").val()); 
//$lastRow.find("td:eq(6)").find('input:eq(0)').on("change",function(){
//	dhtmlModChange($lastRow);
//});
//
//$lastRow.find("td:eq(7)").find('input:eq(0)').val($("#txtFldDlgHospTermOfCov").val());
//$lastRow.find("td:eq(7)").find('input:eq(0)').addClass("applyEvntYrs");
//$lastRow.find("td:eq(7)").find('input:eq(0)').on("change",function(){
//	dhtmlModChange($lastRow); 	
//});
//
//
//
//$lastRow.find("td:eq(8)").find('input:eq(0)').val($("#txtFldDlgHospDedctble").val());
//$lastRow.find("td:eq(8)").find('input:eq(0)').addClass("applyEvntUsd");
//$lastRow.find("td:eq(8)").find('input:eq(0)').on("change",function(){
//	dhtmlModChange($lastRow);
//	 
//});
//
//
//
//$lastRow.find("td:eq(9)").find('input:eq(0)').val($("#txtFldDlgHospCoIns").val());
//$lastRow.find("td:eq(9)").find('input:eq(0)').addClass("applyEvntpCent");
//$lastRow.find("td:eq(9)").find('input:eq(0)').on("change",function(){
//	dhtmlModChange($lastRow);
//	 	
//});
//
//
//
//applyEventHandlers(); 
//
//
//$lastRow.find("input,select").on("click",function(event){
//	event.stopPropagation();
//});
//$lastRow.click(function() {
//    var checkbox = $(this).find("td:eq(1)").find("input");
//    if(checkbox.is(":checked")) {
//        checkbox.prop("checked", false);
//	$lastRow.removeClass("selected");
//    }else {
//        checkbox.prop("checked", true);
//	$lastRow.addClass("selected");
//    }
//});
//
////DHTML CRUD ICONS
//$lastRow.click(function(){
//	/*toggleSingleRow($lastRow);*/
//	crudicons(this,'liHospitilisationtbl','SelliHospitilisation','HospERow','HospDRow');
//			
//});
////DHTML CRUD ICONS
//
//$lastRow.find("td:eq(1)").find("input:first").click(function(){
//	selectSingleRow(this);
////	DHTML CRUD ICONS
//	crudicons(this,'liHospitilisationtbl','SelliHospitilisation','HospERow','HospDRow');
//});
//
//
//if(dataset != null){
// 
//	$lastRow.find("td:eq(0)").find('input:eq(0)').val("Q");
//	var infoDetsArr = new Array();
//	
//	for(var data in dataset){
//		var col = dataset[data];
//		
//		switch(data){
//		
//			case "coverId": 
//				$lastRow.find("td:eq(0)").find('input:eq(1)').val(col);
//				$lastRow.find("td:eq(0)").find('input:eq(2)').val('HOSPITALITY');  
//				break;
//				
//			case "coverPlanname":
//				$lastRow.find("td:eq(2)").find('input:eq(0)').val(col);  
//				break;
//				
//			case "effDate":
//				$lastRow.find("td:eq(3)").find('input:eq(0)').val(col);  
//				break;
//				
//			case "expiryDate":
//				$lastRow.find("td:eq(4)").find('input:eq(0)').val(col);  
//				break;
//				
//			case "coverPremium":
//				$lastRow.find("td:eq(5)").find('input:eq(0)').val(col);  
//				break;
//				
//			case "coverBasorrid":
//				$lastRow.find("td:eq(6)").find('input:eq(0)').val(col);  
//				break;
//				
//		 
//			case "coverageTerm": 
//				$lastRow.find("td:eq(7)").find('input:eq(0)').val(col); 
//				break;
//			 
//			case "coverDeductable": 
//				$lastRow.find("td:eq(8)").find('input:eq(0)').val(col);  
//				break;
//			 
//			case "coInsurance": 
//				$lastRow.find("td:eq(9)").find('input:eq(0)').val(col);  
//				break;
//			  
//			case "coverCreatedBy": 
//				$lastRow.find("td:eq(9)").find('input:eq(1)').val(col);
//				infoDetsArr.push(col);				
//				break;
//				
//			case "coverCreatedDate":
//				$lastRow.find("td:eq(9)").find('input:eq(2)').val(col);
//				infoDetsArr.push(col);
//				break;
//				
//			case "coverModifiedBy":
//				infoDetsArr.push(col);
//				break;
//				
//			case "coverModifiedDate":
//				infoDetsArr.push(col);
//				break;	
//		}			 
//		 
//	}
//	}
//else{
////	DHTML CRUD ICONS
//	crudicons(null,'liHospitilisationtbl','SelliHospitilisation','HospERow','HospDRow');
//}
///*
////instant save added line
//if(dataset == null){
//	instantlfHospSave($lastRow,INS_MODE);		
//}
////
//$lastRow.find("input[type=text]").prop("readonly",true);//instant save added line
//$lastRow.find("select").prop("disabled",true);//instant save added line
//*/
//reOrderVisibleRows('liHospitilisationtbl');
//}
//
//
////DHTML SELECT ALL
//function SelAllliHospitilisation(obj){
//	
//	if($(obj).is(":checked")){
//		
//		$('#liHospitilisationtbl tbody tr').find("td:eq(1)").find("input[type=checkbox]").prop("checked",true);
//		
//		$("#HospDRow").attr("disabled",false);
//		$('#liHospitilisationtbl tbody tr').addClass("selected");
//		
//		var $rowCount = $('#liHospitilisationtbl tbody tr').length;
//		
//		if($rowCount == 0){
//			$(obj).prop("checked",false);
//			$("#HospERow").attr("disabled",true);
//			$("#HospDRow").attr("disabled",true);
//		}else if($rowCount == 1){
//			$("#HospERow").attr("disabled",false);
//			$("#HospDRow").attr("disabled",false);
//		}else if($rowCount > 1){
//			$("#HospERow").attr("disabled",true);
//			$("#HospDRow").attr("disabled",false);
//		}
//		
//	}else{
//		
//		$('#liHospitilisationtbl tbody tr').find("td:eq(1)").find("input[type=checkbox]").prop("checked",false);
//		
//		$('#liHospitilisationtbl tbody tr').removeClass("selected");
//		
//		$("#HospERow").attr("disabled",true);
//		$("#HospDRow").attr("disabled",true);
//		
//	}
//}
// 
///*Edit Row Click */
//$("#HospERow").on("click",function(){
//	HospVRow(); 
//});
//
//
///*View Row Click */
//function HospVRow(){
//	var isOneRowSelected=0;
//	var $rowCount = $('#liHospitilisationtbl tbody tr:visible').length;	
//	var $lastRow = $("#liHospitilisationtbl tbody tr:visible:last");	
//	
//	if($rowCount<1){
//		applyToastrAlert("Insert rows before edit/view");
//		return;
//	} 
//	$("#liHospitilisationtbl tbody tr:visible").find('input[name="radhospSelect"]').each(function(){ //Checkbox selection
//		var $curElm=$(this);
//		if($curElm.is(":checked")){ 
//			isOneRowSelected++;
//		}
//	});
//	
//	
//	if(isOneRowSelected > 1){ 
//		applyToastrAlert("More than one rows selected.Select one row only");
//		return;
//	}
//	
//	$("#liHospitilisationtbl tbody tr:visible").find('input[name="radhospSelect"]').each(function(){ //Checkbox selection
//		var $curElm=$(this);
//		if($curElm.is(":checked")){ 
//			var $row = $curElm.parents("tr");                                    
//			var $mode = $curElm.parents("tr").find("td:first").find('input:eq(0)').val(); 
//			$curElm.prop("checked",false);
//	     	 $curElm.parents("tr").removeClass('selected');
//	     	 
//			if(($mode == INS_MODE) || ($mode == UPD_MODE) ){
//				 var $RowId=$row.index();
//				 $curElm.parents("tr").find("td:first").find('input:eq(0)').val($mode);  
//				$(this).parents("tr").find("td").find("input.editable,select.editable").each(function(){
//					$(this).attr("disabled",false); 
//					$row.removeClass('selected');  
//					$(this).parent().css({border:'1px solid green'});
//					$row.css({border:'1px solid green'});
//					$row.find("td").css({border:'1px solid green'});
//				});  
//				 	hospRdlyflds($mode);
//					hospfilldlgval($row); 
//					showFIPAModel('liHospitalisation_Dialog','Life Insurance - Hospitalisation Details');  
//					$("#liHospitalisation_Dialog").find(".modal-footer").find("button:eq(0)").removeClass("hidden");//instant save added line
//					
//					$('#liHospitalisation_Dialog').on('shown.bs.modal', function () {
//			//			$row.find("input[type=text]").prop("readonly",true);//instant save added line
//			//			$row.find("select").prop("disabled",true);//instant save added line
//					
////						fetchHospPlanDetails();
////						$("#liHospitalisation_Dialog").find(".modal-footer").find("button:eq(0)").text("Edit");
//						$("#liHospitalisation_Dialog").find("input[id=txtFldDlgHospClsOfBenf]").focus();//Aravindh
//						$("#liHospitalisation_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
//							 if(!validatehospDetails())return; 
//					     		if(!isEmpty($RowId) && !($RowId==undefined)){  
//					     			hospfilldomval($RowId,$row); 
//					     		}  
//					     //		instantlfHospSave($row,UPD_MODE); //instant save added line
//								$('#liHospitalisation_Dialog').modal('hide'); 
//								hospClearFlds();
//								
//								crudicons(null,'liHospitilisationtbl','SelliHospitilisation','HospERow','HospDRow');
//							
//						});
//
//						$("#liHospitalisation_Dialog").find(".modal-footer").find("button:eq(1)").on("click",function(){
//							crudicons(null,'liHospitilisationtbl','SelliHospitilisation','HospERow','HospDRow');
//						});
//					});
//					 
//			}  
//			
//			 
//			if(($mode == QRY_MODE) ){
//				 var $RowId=$row.index();
//				 $curElm.parents("tr").find("td:first").find('input:eq(0)').val(UPD_MODE);  
//				$(this).parents("tr").find("td").find("input.editable,select.editable").each(function(){
//					$(this).attr("disabled",false); 
//					$row.removeClass('selected');  
//					$(this).parent().css({border:'1px solid green'});
//					$row.css({border:'1px solid green'});
//					$row.find("td").css({border:'1px solid green'});
//				});  
//				 	hospRdlyflds($mode);
//					hospfilldlgval($row); 
//					showFIPAModel('liHospitalisation_Dialog','Life Insurance - Hospitalisation Details'); 
//					$("#liHospitalisation_Dialog").find(".modal-footer").find("button:eq(0)").removeClass("hidden");//instant save added line
//					
//					$('#liHospitalisation_Dialog').on('shown.bs.modal', function () {
//				//		$row.find("input[type=text]").prop("readonly",true);//instant save added line
//				//		$row.find("select").prop("disabled",true);//instant save added line
//					
////						fetchHospPlanDetails();
////						$("#liHospitalisation_Dialog").find(".modal-footer").find("button:eq(0)").text("Edit");
//						$("#liHospitalisation_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
//							 if(!validatehospDetails())return; 
//					     		if(!isEmpty($RowId) && !($RowId==undefined)){  
//					     			hospfilldomval($RowId,$row); 
//					     		}  
//					     //		instantlfHospSave($row,UPD_MODE); //instant save added line
//								$('#liHospitalisation_Dialog').modal('hide'); 
//								hospClearFlds();
//								crudicons(null,'liHospitilisationtbl','SelliHospitilisation','HospERow','HospDRow');
//						});
//						
//						$("#liHospitalisation_Dialog").find(".modal-footer").find("button:eq(1)").on("click",function(){
//							crudicons(null,'liHospitilisationtbl','SelliHospitilisation','HospERow','HospDRow');
//						});
//					});
//					 
//			}  
//			isOneRowSelected++;
//		} 
//	});
//	
//	 
//	if(isOneRowSelected==0){
//		applyToastrAlert("No Rows Selected");
//		return;
//	}
//
//	
//}
//
//
///*Delete Row Click */
//$("#HospDRow").on("click",function(){
//	 		datatableDeleteRow('liHospitilisationtbl',liHospitilisationtbl,'SelliHospitilisation','HospERow','HospDRow'); 
///*//			DHTML CRUD ICONS
//			var rc = liHospitilisationtbl.row().count();
//			if(rc ==0){
//				$("#SelliHospitilisation").prop("checked",false);
//				crudicons(this,'liHospitilisationtbl','SelliHospitilisation','HospERow','HospDRow');
//			}
////			DHTML CRUD ICONS
//*/	 		
//});
//
//
//function fetchHospPlanDetails(){ 
//	$("#liHospitalisation_Dialog #txtFldDlgHospPlanName").prop("disabled",true);
//	$("#liHospitalisation_Dialog #txtFldDlgHospIncepDate").prop("disabled",true);
//	$("#HospIncptDatepicker").datetimepicker("remove");
//	$("#liHospitalisation_Dialog #txtFldDlgHospExpDate").prop("disabled",true); 
//	$("#HospExpDatepicker").datetimepicker("remove");
//	$("#liHospitalisation_Dialog #txtFldDlgHospPlanName").val($("#hPlanName").val());
//	$("#liHospitalisation_Dialog #txtFldDlgHospIncepDate").val($("#hInceptionDate").val());
//	$("#liHospitalisation_Dialog #txtFldDlgHospExpDate").val($("#hExpiryDate").val());
//	 
//}
//
//
///*Clear Fields */
//function hospClearFlds(){
//	$("#liHospitalisation_Dialog").find("input[type=text]").val("");
//	$("#liHospitalisation_Dialog").find("textarea").val("");
//	$("#liHospitalisation_Dialog").find("select").val("");
//}
//
///*Disabled/Readonly Fields */
//function hospRdlyflds(mode){ 
//	 if(mode == QRY_MODE ){
//		$("#liHospitalisation_Dialog :input").prop("disabled", false); 
//	 } else if((mode == INS_MODE) || (mode == UPD_MODE) ){
//		$("#liHospitalisation_Dialog :input").prop("disabled", false);
//	 } 
//	 $("#liHospitalisation_Dialog #txtFldDlgHospPlanName").prop("disabled",true);
//	 $("#liHospitalisation_Dialog #txtFldDlgHospIncepDate").prop("disabled",true);
//	 $("#liHospitalisation_Dialog #txtFldDlgHospExpDate").prop("disabled",true); 
//}
//
///*Validation */
//function validatehospDetails(){
//	
//	if(!(validateFocusFlds('liHospitalisation_Dialog','txtFldDlgHospAnnPrem',LIHSP_ANNPREM))) return; 
//	if(!(validateFocusFlds('liHospitalisation_Dialog','txtFldDlgHospClsOfBenf',LIHSP_CLS))) return; 
//	if(!(validateFocusFlds('liHospitalisation_Dialog','txtFldDlgHospTermOfCov',LIHSP_COV))) return;
//	if(!(validateFocusFlds('liHospitalisation_Dialog','txtFldDlgHospDedctble',LIHSP_DED))) return;
//	
//	return true; 
//}
// 
//
///*Mandatory Fields Tooltip*/ 
//$("#txtFldDlgHospClsOfBenf,#txtFldDlgHospTermOfCov,#txtFldDlgHospDedctble").on("change",function(){
//	if(!isEmpty($(this).val())){
//	$(this).removeClass("mandatoryFillFlds");
//	$(this).qtip('disable');
//	$(this).qtip('destroy',true);
//	}
//});
//  
//
//
///* Filling Model Fields*/
//function hospfilldlgval($lastRow){
//	  
////	  $('#liHospitalisation_Dialog #txtFldDlgHospMode').val($lastRow.find("td:eq(0)").find('input:eq(0)').val());//instant save added line
//		
//	  $('#liHospitalisation_Dialog #txtFldDlgHospId').val($lastRow.find("td:eq(0)").find('input:eq(1)').val());
//
//	  $('#liHospitalisation_Dialog #txtFldDlgHospPlanName').val($lastRow.find("td:eq(2)").find('input:eq(0)').val());
//	  $('#liHospitalisation_Dialog #txtFldDlgHospIncepDate').val($lastRow.find("td:eq(3)").find('input:eq(0)').val());
//	  $('#liHospitalisation_Dialog #txtFldDlgHospExpDate').val($lastRow.find("td:eq(4)").find('input:eq(0)').val());
//	  $('#liHospitalisation_Dialog #txtFldDlgHospAnnPrem').val($lastRow.find("td:eq(5)").find('input:eq(0)').val());
//
//	  $('#liHospitalisation_Dialog #txtFldDlgHospClsOfBenf').val($lastRow.find("td:eq(6)").find('input:eq(0)').val());
//	  $('#liHospitalisation_Dialog #txtFldDlgHospTermOfCov').val($lastRow.find("td:eq(7)").find('input:eq(0)').val());
//	  $('#liHospitalisation_Dialog #txtFldDlgHospDedctble').val($lastRow.find("td:eq(8)").find('input:eq(0)').val());
//	  $('#liHospitalisation_Dialog #txtFldDlgHospCoIns').val($lastRow.find("td:eq(9)").find('input:eq(0)').val());
//	  $('#liHospitalisation_Dialog #txtFldDlgHospCrtdBy').val($lastRow.find("td:eq(9)").find('input:eq(1)').val()); 
//	  $('#liHospitalisation_Dialog #txtFldDlgHospCrtdDate').val($lastRow.find("td:eq(9)").find('input:eq(2)').val()); 
//	  
//	
//}
//
///* Filling Table Fields*/
//function hospfilldomval($RowId,$row){
//	
//	$row.find("td:eq(2)").find('input:eq(0)').val($("#txtFldDlgHospPlanName").val());
//	$row.find("td:eq(3)").find('input:eq(0)').val($("#txtFldDlgHospIncepDate").val());
//	$row.find("td:eq(4)").find('input:eq(0)').val($("#txtFldDlgHospExpDate").val());
//	$row.find("td:eq(5)").find('input:eq(0)').val($("#txtFldDlgHospAnnPrem").val());
//	
//	$row.find("td:eq(6)").find('select:eq(0)').val($("#txtFldDlgHospClsOfBenf").val()); 
//	$row.find("td:eq(7)").find('input:eq(0)').val($("#txtFldDlgHospTermOfCov").val());
//	$row.find("td:eq(8)").find('input:eq(0)').val($("#txtFldDlgHospDedctble").val());  
//	$row.find("td:eq(9)").find('input:eq(0)').val($("#txtFldDlgHospCoIns").val());  
////	$row.find("input[type=text]").prop("readonly",true);//instant save added line
////	$row.find("select").prop("disabled",true);//instant save added line
//
//}
//
////instant save added line
//$("#liHospitalisation_Dialog").find("input,select,textarea").on("change",function(){
//	$("#liHospitalisation_Dialog").find(".modal-footer").find("button:eq(0)").removeClass("hidden");
//});
// 
 
