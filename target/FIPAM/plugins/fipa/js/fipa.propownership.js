
/**
 * Fna CPF Property Ownership Script
 */ 
/*$("#propOwnCpfCancelbtn").on("click",function(){
	$("#txtFldDlgPropOwnCpfDesc,#txtFldDlgCpfPropMktVal,#txtFldDlgCpfPropOwnership").removeClass("mandatoryFillFlds");
	$("#txtFldDlgPropOwnCpfDesc,#txtFldDlgCpfPropMktVal,#txtFldDlgCpfPropOwnership").qtip('disable');
	$("#txtFldDlgPropOwnCpfDesc,#txtFldDlgCpfPropMktVal,#txtFldDlgCpfPropOwnership").qtip('destroy',true);
	propRdlyflds(INS_MODE);  
	getPropOwnCpfRows(null); 
	$('#propOwnCpf_Dialog').modal('hide');   
});*/
$("a#syncproperty").on("click",function(){ 
	 
	calcTotalPropertyAmts(true);
	if($("#powncpfARow").hasClass("blinking")){
		$("#powncpfARow").removeClass("blinking");
	} 
	$("#property_li").click();	 
//	$($.fn.dataTable.tables(true)).DataTable().columns.adjust().draw(false);	
	$("#powncpfARow").addClass("blinking"); 
	
	if($("#powncpfARow").hasClass("blinking")){
		setTimeout(function() { 
		$("#property").scrollTop(0);
		 
	}, 1000);
		
	} 
	
	 
}); 



$("a#annualrentalincome").on("click",function(){ 
	 
	calcTotalPropertyAmts(true);  
	if($("#powncpfARow").hasClass("blinking")){
		$("#powncpfARow").removeClass("blinking");
	} 
	$("#property_li").click();	 
//	$($.fn.dataTable.tables(true)).DataTable().columns.adjust().draw(false);	
	$("#powncpfARow").addClass("blinking"); 
	
	if($("#powncpfARow").hasClass("blinking")){
		setTimeout(function() {
		$("#property").scrollTop(0); 
		 
		},1000);
	} 
	
	 
}); 

$("a#mortgagelnicon").on("click",function(){
	 
	calcTotalPropertyAmts(true);  
	if($("#powncpfARow").hasClass("blinking")){
		$("#powncpfARow").removeClass("blinking");
	}  
	
	$("#property_li").click();	 
//	$($.fn.dataTable.tables(true)).DataTable().columns.adjust().draw(false);	
	$("#powncpfARow").addClass("blinking"); 
	
	if($("#powncpfARow").hasClass("blinking")){
		setTimeout(function() {
		$("#property").scrollTop(0); 
		 
		},1000);
	} 
});


function openBackToCpfAD(){
	showLoader();
	if($("#CpfADARow").hasClass("blinking")){
		$("#CpfADARow").removeClass("blinking");
	}
	
	$("#cpf_li").click();	 
	$('#cpfaccid').focus();
//	$($.fn.dataTable.tables(true)).DataTable().columns.adjust().draw(false);	
	$("#CpfADARow").addClass("blinking");  
	if($("#CpfADARow").hasClass("blinking")){
		setTimeout(function() {
		$("#centralpro").scrollTop(500);
		hideLoader();
		},1000);
		
	} 
	 
}

//Thulasy Added on 12/11/2018
function openBackToFnLiable(){
	 
	calcTotalPropertyAmts(true);  
	calcTotalLiabilitiesLoan();		
	if($("#liabSelfShortmort").hasClass("blinking")){
		$("#liabSelfShortmort").removeClass("blinking");
	} 
	/*$("#finliab_li").click();*/
	 $("#assetsliab_li").click();
	 $("#LiabilityTab").attr('checked', true).trigger('click');
//	$($.fn.dataTable.tables(true)).DataTable().columns.adjust().draw(false);	
	$("#liabSelfShortmort").addClass("blinking"); 
	
	if($("#liabSelfShortmort").hasClass("blinking")){
		setTimeout(function() { 
		},1500);
	} 
	
}



/*Add Row Click */
$("#powncpfARow").on("click",function(){
	
	//if(!valpropTbl())return;  
	
	propClearFlds(); 
	
	$("#txtFldDlgCpfPropOwnId").val(makeid(17));
	$("#txtFldDlgPropRefId").val(newMakeId("PROP",14));

	propObjChange($("#txtFldDlgCpfPropObj"),$("#txtFldDlgPropCurAnlRetInc"),$("#txtFldDlgCpfPropRentPerd"),$("#txtFldDlgPropYrsToRent"),true); 
	
	propyearstorent($("#txtFldDlgCpfPropObj"),$("#txtFldDlgCpfPropSold"),$("#txtFldDlgPropRentOnRetire"),$("#txtFldDlgPropYrsToRent"),$("#txtFldDlgPropCurRetInc"),true); 
	
	onSoldChange($("#txtFldDlgCpfPropSold"),$("#txtFldDlgPropRentOnRetire"),$("#txtFldDlgPropCurRetInc"),$("#txtFldDlgPropYrsToRent"),true); 
	
	retOnRetFnc($("#txtFldDlgPropRentOnRetire"),$("#txtFldDlgPropCurRetInc"),$("#txtFldDlgPropYrsToRent"),$("#txtFldDlgCpfPropObj"),$("#txtFldDlgCpfPropSold"),true);  
			 
			
	showFIPAModel('propOwnCpf_Dialog','Property Ownership');   
//			$("#propOwnCpf_Dialog").find("input[id=txtFldDlgPropMode]").val("I");//instant save added line
	
			
	$('#propOwnCpf_Dialog').on('shown.bs.modal', function () {
//				$("#propOwnCpf_Dialog").find(".modal-footer").find("button:eq(0)").text("Add");
				
		$("#propOwnCpf_Dialog").find("input[id=txtFldDlgPropOwnCpfDesc]").focus();
		$("#propOwnCpf_Dialog #txtFldDlgPropFVOnRent").prop("disabled", true);	 
		$("#propOwnCpf_Dialog #propYrsToRet").val($("#retYrstoret").val()).prop("disabled", true);	 
				 
		$("#propOwnCpf_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
			if(!validatepropDetails())return;
			propRdlyflds(INS_MODE);  
			getPropOwnCpfRows(null); 
			//chkSpouseIncluded(); 
			$('#propOwnCpf_Dialog').modal('hide'); 
		});  
	});
			
			
});



/*Populate Data */
function getPropOwnCpfRows(dataset){  

var cell0 = '<span></span>'+
'<input type="hidden" name="txtFldpropMode" readonly="true" value="'+INS_MODE+'" class="fipaMode"/><input type="hidden" name="txtFldPropCpfOwnId"><input type="hidden" name="txtFldPropRefId" >';

var cell1 = '<div class="checkbox checkbox-primary text-center"><input type="checkbox" name="radpropSelect"/><label>&nbsp;</label></div>'; 

var cell2 = '<input type="text" name="txtFldPropCpfOwnDesc" maxlength="300" class="form-control editable" onmouseover="fipaTooltip(this);" style="width:190px"/>';

var cell3 = '<input type="text" name="txtFldPropCpfMktVal" class="form-control editable"   onmouseover="fipaTooltip(this);"  />';

var cell4 = '<select   name="txtFldPropCpfOwnership" class="form-control editable"  ></select>';

var cell5 = '<input type="text" name="txtFldPropCpfApprecrate" class="form-control editable applyEvntpCent3" onmouseover="fipaTooltip(this);" onchange="callCalcPropFV($(this));syncPropTblRow($(this).closest(\'tr\'));" />'; 

var cell6 = '<input type="text" name="txtFldPropCpfMortageos" class="form-control editable" onmouseover="fipaTooltip(this);"  />'; 

var cell7 = '<input type="text" name="txtFldPropCpfOsloanPerd" class="form-control editable" onmouseover="fipaTooltip(this);"  />';
 
var cell8 = '<select   name="txtFldPropCpfObj" class="form-control editable"  ></select>';

var cell9 = '<input type="text" name="txtFldPropCurAnlRetInc" class="form-control editable"   onmouseover="fipaTooltip(this);" />'; 


var cell10 = '<input type="text" name="txtFldPropRentPerd" class="form-control editable"   onmouseover="fipaTooltip(this);" />';


var cell11 = '<input type="text" name="txtFldPropCpfLoanBySlfCpf" class="form-control editable"   onmouseover="fipaTooltip(this);"  />';

var cell12 = '<input type="text" name="txtFldPropCpfLoanBySlfCash" class="form-control editable"   onmouseover="fipaTooltip(this);" />';

var cell13 = '<input type="text" name="txtFldPropCpfLoanBySpsCpf" class="form-control editable clsfipaSpouse"   onmouseover="fipaTooltip(this);"  />';

var cell14 = '<input type="text" name="txtFldPropCpfLoanBySpsCash" class="form-control editable clsfipaSpouse"   onmouseover="fipaTooltip(this);" />';

var cell15 = '<select  name="txtFldPropCpfSold" class="form-control editable" ></select>'; 

var cell16 = '<select  name="txtFldPropRentOnRetire" class="form-control editable"  ></select>';

var cell17 ='<input type="text" name="txtFldPropCurRetInc" class="form-control editable"   onmouseover="fipaTooltip(this);"  />'+
'<input type="hidden" name="txtFldPropCpfCrtdBy"/><input type="hidden" name="txtFldPropCpfCrtdDate"/>';

var cell18 = '<input type="text" name="txtFldPropYrsToRent" class="form-control editable"   onmouseover="fipaTooltip(this);"  />';

var cell19 = '<input type="text" name="txtFldPropFvOnRent" class="form-control editable" readonly="true"  onmouseover="fipaTooltip(this);"  />';

fnaPropOwnTblByCPF.row.add( [cell0,cell1,cell2,cell3,cell4,cell5,cell6,cell7,cell8,cell9,cell10,cell11,cell12,cell13,cell14,cell15,cell16,cell17,cell18,cell19] ).draw( false );

var rowCount = $('#fnaPropOwnTblByCPF tbody tr:visible').length;	
rowCount =  (rowCount == 0) ? $('#fnaPropOwnTblByCPF tbody tr').length : rowCount;
var $lastRow = $("#fnaPropOwnTblByCPF tbody tr:last");	

$lastRow.find("td:first").find('span').text(rowCount);
$lastRow.find("td").find(":input").each(function(){
	$(this).on("click",function(){
		toggleSingleRow($(this));
	});
});

$lastRow.find("td:eq(1)").find("input:first").click(function(){
	selectSingleRow(this);
});
$lastRow.find("td:eq(0)").find('input:eq(1)').val($("#txtFldDlgCpfPropOwnId").val());
$lastRow.find("td:eq(0)").find('input:eq(2)').val($("#txtFldDlgPropRefId").val());

$lastRow.find("td:eq(1)").find("input:first").attr('id',"radprop"+$lastRow.index()).parent().find('label').attr('for',"radprop"+$lastRow.index());

$lastRow.find("td:eq(2)").find('input:eq(0)').val($("#txtFldDlgPropOwnCpfDesc").val());
$lastRow.find("td:eq(2)").find('input:eq(0)').on("change",function(){
	syncPropTblRow($lastRow);
	return;
});


$lastRow.find("td:eq(3)").find('input:eq(0)').val($("#txtFldDlgCpfPropMktVal").val());
$lastRow.find("td:eq(3)").find('input:eq(0)').addClass("applyEvntUsd"); 
$lastRow.find("td:eq(3)").find('input:eq(0)').on("change",function(){
	
	var sold = $lastRow.find("td:eq(15)").find('select:eq(0)').val();
	var rent = $lastRow.find("td:eq(16)").find('select:eq(0)').val();
	
	if( (sold == "Y" ) ||  (sold != "Y" && rent == "Y")){
	
		calculateCrtRentIncome($lastRow.find("td:eq(3)").find('input:eq(0)'),$lastRow.find("td:eq(5)").find('input:eq(0)'),$("#retYrstoret"),$lastRow.find("td:eq(19)").find('input:eq(0)'));
	}
	syncPropTblRow($lastRow);	
	
});



var Ownership = $("#txtFldDlgCpfPropOwnership > option").clone();
$lastRow.find("td:eq(4)").find('select:eq(0)').append(Ownership);
$lastRow.find("td:eq(4)").find('select:eq(0)').val($("#txtFldDlgCpfPropOwnership").val());
$lastRow.find("td:eq(4)").find('select:eq(0)').on("change",function(){
	calcTotalPropertyAmts(true);	 
	newRowPropCpfTbl($lastRow); 
	syncPropTblRow($lastRow);	
	return;
});


$lastRow.find("td:eq(5)").find('input:eq(0)').val($("#txtFldDlgCpfPropApprecrate").val());
 

$lastRow.find("td:eq(6)").find('input:eq(0)').val($("#txtFldDlgCpfPropMortageos").val());
$lastRow.find("td:eq(6)").find('input:eq(0)').on("change",function(){ 
	calcTotalPropertyAmts(true); 
});
$lastRow.find("td:eq(6)").find('input:eq(0)').addClass("applyEvntUsd"); 


$lastRow.find("td:eq(7)").find('input:eq(0)').val($("#txtFldDlgCpfPropOsloanPerd").val());
$lastRow.find("td:eq(7)").find('input:eq(0)').addClass("applyEvntYrs"); 


var Objective = $("#txtFldDlgCpfPropObj > option").clone();
$lastRow.find("td:eq(8)").find('select:eq(0)').append(Objective);
$lastRow.find("td:eq(8)").find('select:eq(0)').val($("#txtFldDlgCpfPropObj").val());
$lastRow.find("td:eq(8)").find('select:eq(0)').on("change",function(){ 
	
	if($(this).val()=="Res"){ 
		$lastRow.find("td:eq(9)").find('input:eq(0)').prop('disabled', true);   
		$lastRow.find("td:eq(10)").find('input:eq(0)').prop('disabled', true); 
    }
	if($(this).val()=="Inv"){
		$lastRow.find("td:eq(9)").find('input:eq(0)').attr('disabled', false);   
		$lastRow.find("td:eq(10)").find('input:eq(0)').attr('disabled', false); 
	}
	if($(this).val()==""){
		
		$lastRow.find("td:eq(9)").find('input:eq(0)').attr('disabled', true);   
		$lastRow.find("td:eq(10)").find('input:eq(0)').attr('disabled', true); 
	}
	propObjChange($(this),$lastRow.find("td:eq(9)").find('input:eq(0)'),$lastRow.find("td:eq(10)").find('input:eq(0)'),$lastRow.find("td:eq(18)").find('input:eq(0)'),true); 
	propyearstorent($(this),$lastRow.find("td:eq(15)").find('select:eq(0)'),$lastRow.find("td:eq(16)").find('select:eq(0)'),$lastRow.find("td:eq(18)").find('input:eq(0)'),$lastRow.find("td:eq(9)").find('input:eq(0)'),true);
	calcTotalPropertyAmts(true);
 
	return;
});
//

$lastRow.find("td:eq(9)").find('input:eq(0)').val($("#txtFldDlgPropCurAnlRetInc").val());
$lastRow.find("td:eq(9)").find('input:eq(0)').addClass("applyEvntUsd");
$lastRow.find("td:eq(9)").find('input:eq(0)').on("change",function(){ 
	
	propObjChange($lastRow.find("td:eq(8)").find('select:eq(0)'),$(this),$lastRow.find("td:eq(10)").find('input:eq(0)'),$lastRow.find("td:eq(18)").find('input:eq(0)'),true);
	calcTotalPropertyAmts(true); 
	return;
});


$lastRow.find("td:eq(10)").find('input:eq(0)').val($("#txtFldDlgCpfPropRentPerd").val());
$lastRow.find("td:eq(10)").find('input:eq(0)').addClass("applyEvntYrs"); 

 
$lastRow.find("td:eq(11)").find('input:eq(0)').val($("#txtFldDlgPropLoanBySlfCpf").val());
$lastRow.find("td:eq(11)").find('input:eq(0)').addClass("applyEvntUsd");
$lastRow.find("td:eq(11)").find('input:eq(0)').on("change",function(){
	calcTotalPropertyAmts(true);	  
	newRowPropCpfTbl($lastRow);
	return;
});
 

$lastRow.find("td:eq(12)").find('input:eq(0)').val($("#txtFldDlgPropLoanBySlfCash").val());
$lastRow.find("td:eq(12)").find('input:eq(0)').addClass("applyEvntUsd");
$lastRow.find("td:eq(12)").find('input:eq(0)').on("change",function(){
	calcTotalPropertyAmts(true); 
		return;
	
});


$lastRow.find("td:eq(13)").find('input:eq(0)').val($("#txtFldDlgPropLoanBySpsCpf").val());
$lastRow.find("td:eq(13)").find('input:eq(0)').addClass("applyEvntUsd");
$lastRow.find("td:eq(13)").find('input:eq(0)').on("change",function(){
	calcTotalPropertyAmts(true);	  
	newRowPropCpfTbl($lastRow);
		return;
});

$lastRow.find("td:eq(14)").find('input:eq(0)').val($("#txtFldDlgPropLoanBySpsCash").val());
$lastRow.find("td:eq(14)").find('input:eq(0)').addClass("applyEvntUsd");
$lastRow.find("td:eq(14)").find('input:eq(0)').on("change",function(){
	calcTotalPropertyAmts(true);  
	return;
});

var Sold = $("#txtFldDlgCpfPropSold > option").clone();
$lastRow.find("td:eq(15)").find('select:eq(0)').append(Sold);
$lastRow.find("td:eq(15)").find('select:eq(0)').val($("#txtFldDlgCpfPropSold").val());
$lastRow.find("td:eq(15)").find('select:eq(0)').on("change",function(){ 
	
	onSoldChange($lastRow.find("td:eq(15)").find('select:eq(0)'),$lastRow.find("td:eq(16)").find('select:eq(0)'),$lastRow.find("td:eq(17)").find('input:eq(0)'),$lastRow.find("td:eq(18)").find('input:eq(0)'),true)
	propyearstorent($lastRow.find("td:eq(8)").find('select:eq(0)'),$(this),$lastRow.find("td:eq(16)").find('select:eq(0)'),$lastRow.find("td:eq(18)").find('input:eq(0)'),$lastRow.find("td:eq(9)").find('input:eq(0)'),true);
	
	if($(this).val() == "Y"){
		mandatoryFldForRetirement($(this),null,'PROP'); 
		callCalcPropFV($(this));
	}
	
	syncPropTblRow($lastRow);	

	return;
});



var Retirement = $("#txtFldDlgPropRentOnRetire > option").clone();
$lastRow.find("td:eq(16)").find('select:eq(0)').append(Retirement);
$lastRow.find("td:eq(16)").find('select:eq(0)').val($("#txtFldDlgPropRentOnRetire").val());
$lastRow.find("td:eq(16)").find('select:eq(0)').on("change",function(){  
	var sold = $lastRow.find("td:eq(15)").find('select:eq(0)').val();
	
	
	
	onSoldChange($lastRow.find("td:eq(15)").find('select:eq(0)'),$lastRow.find("td:eq(16)").find('select:eq(0)'),$lastRow.find("td:eq(17)").find('input:eq(0)'),$lastRow.find("td:eq(18)").find('input:eq(0)'),true);
	retOnRetFnc($(this),$lastRow.find("td:eq(17)").find('input:eq(0)'),$lastRow.find("td:eq(18)").find('input:eq(0)'),$lastRow.find("td:eq(8)").find('select:eq(0)'),$lastRow.find("td:eq(15)").find('select:eq(0)'),$lastRow.find("td:eq(15)").find('select:eq(0)'),true);
	 propyearstorent($lastRow.find("td:eq(8)").find('select:eq(0)'),$lastRow.find("td:eq(15)").find('select:eq(0)'),$(this),$lastRow.find("td:eq(18)").find('input:eq(0)'),$lastRow.find("td:eq(9)").find('input:eq(0)'),true);
	 
	 if(sold != "Y" && $(this).val() == 'Y'){  
		 mandatoryFldForRetirement($(this),$lastRow,'PROP'); 
		 callCalcPropFV($lastRow.find("td:eq(15)").find('select:eq(0)'));
	}
	 
	 syncPropTblRow($lastRow);
	return;			
		
});

$lastRow.find("td:eq(17)").find('input:eq(0)').val($("#txtFldDlgPropCurRetInc").val());
$lastRow.find("td:eq(17)").find('input:eq(0)').addClass("applyEvntUsd");
$lastRow.find("td:eq(17)").find('input:eq(0)').on("change",function(){
	

	onSoldChange($lastRow.find("td:eq(15)").find('select:eq(0)'),$lastRow.find("td:eq(16)").find('select:eq(0)'),$lastRow.find("td:eq(17)").find('input:eq(0)'),$lastRow.find("td:eq(18)").find('input:eq(0)'),true);
	retOnRetFnc($lastRow.find("td:eq(16)").find('select:eq(0)'),$(this),$lastRow.find("td:eq(18)").find('input:eq(0)'),$lastRow.find("td:eq(8)").find('select:eq(0)'),$lastRow.find("td:eq(15)").find('select:eq(0)'),true);
	calcTotalPropertyAmts(true); 
		return;
});


$lastRow.find("td:eq(18)").find('input:eq(0)').val($("#txtFldDlgPropYrsToRent").val());
$lastRow.find("td:eq(18)").find('input:eq(0)').addClass("applyEvntYrs");
 
$lastRow.find("td:eq(19)").find('input:eq(0)').val($("#txtFldDlgPropFVOnRent").val());
$lastRow.find("td:eq(19)").find('input:eq(0)').addClass("applyEvntUsd"); 


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
	crudicons(this,'fnaPropOwnTblByCPF','SelfnaPropOwnTblByCPF','powncpfERow','powncpfDRow');
			
});
//DHTML CRUD ICONS

$lastRow.find("td:eq(1)").find("input:first").click(function(){
	selectSingleRow(this);
//	DHTML CRUD ICONS
	crudicons(this,'fnaPropOwnTblByCPF','SelfnaPropOwnTblByCPF','powncpfERow','powncpfDRow');
});

	if(dataset != null){
	
		rowCount = $('#fnaPropOwnTblByCPF tbody tr').length;	
		
		$lastRow.find("td:first").find('span').text(rowCount);
		
				if($("#hTxtFldFnaReviewFlag").val() == "U"  || $("#hTxtFldFnaReviewFlag").val() == ""){ 
						$lastRow.find("td:eq(0)").find('input:eq(0)').val(col);
				}
				
		var infoDetsArr = new Array();
		
			for(var data in dataset){
				var col = dataset[data];
				
				switch(data){
				
				case "propownId": 
					$lastRow.find("td:eq(0)").find('input:eq(1)').val(col); 
					break;
					
		
				case "propRefId": 
					$lastRow.find("td:eq(0)").find('input:eq(2)').val(col);  
					if(!isEmpty(col)){$lastRow.find("td:eq(0)").find('input:eq(2)').addClass("rowrefid");}
					break;
					
					
				case "propDescription": 
					$lastRow.find("td:eq(2)").find('input:eq(0)').val(col); 
					break;
		
				case "propMktvalue": 
					var value=(isEmpty(col)? Number("0")  : col);
					$lastRow.find("td:eq(3)").find('input:eq(0)').val(value); 
					break;
					
				case "propOwnership": 
					selectNullvalChk($lastRow.find("td:eq(4)"),col);
					break;
				 
				case "propApprecrate": 
					$lastRow.find("td:eq(5)").find('input:eq(0)').val(col); 
					break;
					  
				case "propMortageos": 
					$lastRow.find("td:eq(6)").find('input:eq(0)').val(col); 
					break; 
					
				case "propOsloanperd": 
					$lastRow.find("td:eq(7)").find('input:eq(0)').val(col); 
					break;
					
					
				case "propObj": 
					selectNullvalChk($lastRow.find("td:eq(8)"),col);			
					break;
				
				case "propAnlRetInc":
					$lastRow.find("td:eq(9)").find('input:eq(0)').val(col); 
					break;
					 
				case "propRentPerd": 
					$lastRow.find("td:eq(10)").find('input:eq(0)').val(col); 
					
					 if($lastRow.find("td:eq(8)").find('select:eq(0)').val()=="Inv"){
						
						$lastRow.find("td:eq(9)").find('input:eq(0)').prop('disabled', false);   
						$lastRow.find("td:eq(10)").find('input:eq(0)').prop('disabled', false); 
						
					}else{
						
						$lastRow.find("td:eq(9)").find('input:eq(0)').prop('disabled', true);   
						$lastRow.find("td:eq(10)").find('input:eq(0)').prop('disabled', true); 
					}
					break;
					
				case "propLoanBySelfcpf":
					$lastRow.find("td:eq(11)").find('input:eq(0)').val(col); 
					break;
					
				case "propLoanBySelfcash":
					$lastRow.find("td:eq(12)").find('input:eq(0)').val(col); 
					break;
					
				case "propLoanBySpscpf":
					$lastRow.find("td:eq(13)").find('input:eq(0)').val(col); 
					break;
					
				case "propLoanBySpscash":
					$lastRow.find("td:eq(14)").find('input:eq(0)').val(col); 
					break;
					
				case "propSold":
					selectNullvalChk($lastRow.find("td:eq(15)"),col);
					break;
					
				case "propRentOnret":
					$lastRow.find("td:eq(16)").find('select:eq(0)').val(col); 
					break;
					
				case "propCurRetInc":
					$lastRow.find("td:eq(17)").find('input:eq(0)').val(col); 
					break;
					
				case "propYrsToRent":
					$lastRow.find("td:eq(18)").find('input:eq(0)').val(col);
					break;
					
				case "propFvOnrent":
					$lastRow.find("td:eq(19)").find('input:eq(0)').val(col);
					break;
					
				
				case "propCreatedBy": 
					$lastRow.find("td:eq(17)").find('input:eq(1)').val(col);
					infoDetsArr.push(col);				
					break;
					
				case "propCreatedDate":
					$lastRow.find("td:eq(17)").find('input:eq(2)').val(col);
					infoDetsArr.push(col);
					break;
				
			
				case "propModifiedBy":
					infoDetsArr.push(col);
					break;
					
				case "propModifiedDate":
					infoDetsArr.push(col);
					break;	
				}			 
				 
			}
		}


//sync property row
	if(dataset == null){ 
//		if(!($lastRow.find("td:eq(4)").find('select:eq(0)').val() == "Joint")){//Ownership
//			syncPropTblRow($lastRow); 
//		} 
		
		 if($lastRow.find("td:eq(8)").find('select:eq(0)').val()=="Inv"){
			$lastRow.find("td:eq(9)").find('input:eq(0)').prop('disabled', false);   
			$lastRow.find("td:eq(10)").find('input:eq(0)').prop('disabled', false); 
		}	else{
			$lastRow.find("td:eq(9)").find('input:eq(0)').prop('disabled', true);   
			$lastRow.find("td:eq(10)").find('input:eq(0)').prop('disabled', true); 
		}
		 
		
	
//		 toggleSingleRow($lastRow);
		 
		 calcTotalPropertyAmts(true);
		  
  			newRowPropCpfTbl($lastRow); 
  		
  			syncPropTblRow($lastRow); 
		 
		 crudicons(null,'fnaPropOwnTblByCPF','SelfnaPropOwnTblByCPF','powncpfERow','powncpfDRow');
	 	 
	} 
	
	
	
	propObjChange($lastRow.find("td:eq(8)").find('select:eq(0)'),$lastRow.find("td:eq(9)").find('input:eq(0)'),$lastRow.find("td:eq(10)").find('input:eq(0)'),$lastRow.find("td:eq(18)").find('input:eq(0)'),false); 
	propyearstorent($lastRow.find("td:eq(8)").find('select:eq(0)'),$lastRow.find("td:eq(15)").find('select:eq(0)'),$lastRow.find("td:eq(16)").find('select:eq(0)'),$lastRow.find("td:eq(18)").find('input:eq(0)'),$lastRow.find("td:eq(9)").find('input:eq(0)'),false);
	onSoldChange($lastRow.find("td:eq(15)").find('select:eq(0)'),$lastRow.find("td:eq(16)").find('select:eq(0)'),$lastRow.find("td:eq(17)").find('input:eq(0)'),$lastRow.find("td:eq(18)").find('input:eq(0)'),false);
	retOnRetFnc($lastRow.find("td:eq(16)").find('select:eq(0)'),$lastRow.find("td:eq(17)").find('input:eq(0)'),$lastRow.find("td:eq(18)").find('input:eq(0)'),$lastRow.find("td:eq(8)").find('select:eq(0)'),$lastRow.find("td:eq(15)").find('select:eq(0)'),false);

	
	
}



//DHTML SELECT ALL
function SelAllfnaPropOwnTblByCPF(obj){
	
	if($(obj).is(":checked")){ 
		
		$('#fnaPropOwnTblByCPF tbody tr').find("td:eq(1)").find("input[type=checkbox]").prop("checked",true);
		
		$("#powncpfDRow").attr("disabled",false);
		$('#fnaPropOwnTblByCPF tbody tr').addClass("selected");
		
		var $rowCount = $('#fnaPropOwnTblByCPF tbody tr').length;
		
		if($rowCount == 0){
			$(obj).prop("checked",false);
			/*$("#powncpfERow").attr("disabled",true);
			$("#powncpfDRow").attr("disabled",true);*/
		}else if($rowCount == 1){
			$("#powncpfERow").attr("disabled",false);
			$("#powncpfDRow").attr("disabled",false);
		}else if($rowCount > 1){
			/*$("#powncpfERow").attr("disabled",true);*/
			$("#powncpfDRow").attr("disabled",false);
		}
		
	}else{
		
		$('#fnaPropOwnTblByCPF tbody tr').find("td:eq(1)").find("input[type=checkbox]").prop("checked",false);
		
		$('#fnaPropOwnTblByCPF tbody tr').removeClass("selected");
		
		/*$("#powncpfERow").attr("disabled",true);
		$("#powncpfDRow").attr("disabled",true);*/
		
	}
	

}


 
/*Edit Row Click */
$("#powncpfERow").on("click",function(){
	powncpfVRow();
});


/*View Row Click */
function powncpfVRow(){
	var isOneRowSelected=0;
	var $rowCount = $('#fnaPropOwnTblByCPF tbody tr').length;	
	var $lastRow = $("#fnaPropOwnTblByCPF tbody tr:last");	
	
	if($rowCount<1){
		applyToastrAlert("Insert rows before edit/view");
		return;
	} 
	 
	
	/*$("#fnaPropOwnTblByCPF tbody").find('input[name="radpropSelect"]').each(function(){ //Checkbox selection
		 var $curElm=$(this);
		if($curElm.is(":checked")){ 
			$(this).prop("checked",true);
			isOneRowSelected++;
		}
	});*/
	
	
	if(isOneRowSelected > 1){ 
		applyToastrAlert("More than one rows selected.Select one row only");
		return;
	}
	
	$("#fnaPropOwnTblByCPF tbody").find('input[name="radpropSelect"]').each(function(){ //Checkbox selection
 
		var $curElm=$(this);
		var $row = $curElm.parents("tr");
		
		if($curElm.is(":checked") || $row.hasClass("selected")){
			                                    
			var $mode = $row.find("td:first").find('input:eq(0)').val(); 
			$curElm.prop("checked",false);
	     	 $curElm.parents("tr").removeClass('selected');
	     	 
			if(($mode == INS_MODE) || ($mode == UPD_MODE) ){
				 var $RowId=$row.index();
				 $row.find("td:first").find('input:eq(0)').val($mode);  
				 $row.find("td").find("input.editable,select.editable").each(function(){
					$(this).attr("disabled",false);  
					$(this).parent().css({border:'1px solid green'});
					$row.css({border:'1px solid green'});
					$row.find("td").css({border:'1px solid green'});
				});  
					
					
				 	propRdlyflds($mode);
					propfilldlgval($row); 
 
					propObjChange($("#txtFldDlgCpfPropObj"),$("#txtFldDlgPropCurAnlRetInc"),$("#txtFldDlgCpfPropRentPerd"),$("#txtFldDlgPropYrsToRent"),false);
					propyearstorent($("#txtFldDlgCpfPropObj"),$("#txtFldDlgCpfPropSold"),$("#txtFldDlgPropRentOnRetire"),$("#txtFldDlgPropYrsToRent"),$("#txtFldDlgPropCurRetInc"),false);
					onSoldChange($("#txtFldDlgCpfPropSold"),$("#txtFldDlgPropRentOnRetire"),$("#txtFldDlgPropCurRetInc"),$("#txtFldDlgPropYrsToRent"),false); 
					retOnRetFnc($("#txtFldDlgPropRentOnRetire"),$("#txtFldDlgPropCurRetInc"),$("#txtFldDlgPropYrsToRent"),$("#txtFldDlgCpfPropObj"),$("#txtFldDlgCpfPropSold"),false);
					
					
					callCalcPropFV();
					
					/*if($("#dfSelfMartsts").val() == "Single"){
			     		 $("input[name=txtFldDlgPropLoanBySpsCash]").val("");
			     		 $("input[name=txtFldDlgPropLoanBySpsCash]").prop("disabled",true);
			     		 $("input[name=txtFldDlgPropLoanBySpsCpf]").val("");
			    		 $("input[name=txtFldDlgPropLoanBySpsCpf]").prop("disabled",true);
			     	}*/
					
					$("#propOwnCpf_Dialog #txtFldDlgPropFVOnRent").prop("disabled", true); 
					showFIPAModel('propOwnCpf_Dialog','Property Ownership');
					$("#propOwnCpf_Dialog").find(".modal-footer").find("button:eq(0)").removeClass("hidden");//instant save added line
					
					$('#propOwnCpf_Dialog').on('shown.bs.modal', function () {
//						$row.find("input[type=text]").prop("readonly",true);//instant save added line
//						$row.find("select").prop("disabled",true);//instant save added line
//						$("#propOwnCpf_Dialog").find(".modal-footer").find("button:eq(0)").text("Edit");
						
						$("#propOwnCpf_Dialog").find("input[id=txtFldDlgPropOwnCpfDesc]").focus();//Aravindh
						
						$("#propOwnCpf_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
							
							 if(!validatepropDetails())return; 
					     		if(!isEmpty($RowId) && !($RowId==undefined)){  
					     			propfilldomval($RowId,$row); 
					     		}   
					     		calcTotalPropertyAmts(true);
  
					     		newRowPropCpfTbl($row); 
					     		
					     		syncPropTblRow($row); 
					     		
					     		/*if($("#dfSelfMartsts").val() == "Single"){
								   	 $("input[name=txtFldPropCpfLoanBySpsCpf]").each(function() {  
								   		 $(this).prop("disabled",true); 
										 $(this).val("");
								     });
								  $("input[name=txtFldPropCpfLoanBySpsCash]").each(function() {  
										$(this).prop("disabled",true);  
									    $(this).val("");
								   });  
						     	}*/
					     		//chkSpouseIncluded(); 
					     		
					     		propObjChange($row.find("td:eq(8)").find('select:eq(0)'),$row.find("td:eq(9)").find('input:eq(0)'),$row.find("td:eq(10)").find('input:eq(0)'),$row.find("td:eq(18)").find('input:eq(0)'),false); 
					     		propyearstorent($row.find("td:eq(8)").find('select:eq(0)'),$row.find("td:eq(15)").find('select:eq(0)'),$row.find("td:eq(16)").find('select:eq(0)'),$row.find("td:eq(18)").find('input:eq(0)'),$row.find("td:eq(9)").find('input:eq(0)'),false);
					     		onSoldChange($row.find("td:eq(15)").find('select:eq(0)'),$row.find("td:eq(16)").find('select:eq(0)'),$row.find("td:eq(17)").find('input:eq(0)'),$row.find("td:eq(18)").find('input:eq(0)'),false);
					     		retOnRetFnc($row.find("td:eq(16)").find('select:eq(0)'),$row.find("td:eq(17)").find('input:eq(0)'),$row.find("td:eq(18)").find('input:eq(0)'),$row.find("td:eq(8)").find('select:eq(0)'),$row.find("td:eq(15)").find('select:eq(0)'),false);
//					     		instantPropSave($row,UPD_MODE); //instant save added line
					     		$('#propOwnCpf_Dialog').modal('hide'); 
								propClearFlds();
								crudicons(this,'fnaPropOwnTblByCPF','SelfnaPropOwnTblByCPF','powncpfERow','powncpfDRow');
								
								
								if($row.find("td:eq(8)").find('select:eq(0)').val()=="Inv"){
									
									$row.find("td:eq(9)").find('input:eq(0)').prop('disabled', false);
									$row.find("td:eq(10)").find('input:eq(0)').prop('disabled', false);
								}else{
									
									$row.find("td:eq(9)").find('input:eq(0)').prop('disabled', true);
									$row.find("td:eq(10)").find('input:eq(0)').prop('disabled', true);
								}
								 
								
						});
						$("#propOwnCpf_Dialog").find(".modal-footer").find("button:eq(1)").on("click",function(){
							crudicons(this,'fnaPropOwnTblByCPF','SelfnaPropOwnTblByCPF','powncpfERow','powncpfDRow');
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
$("#powncpfDRow").on("click",function(){  
	var flg=true;
	var rowCount = fnaPropOwnTblByCPF.row().count();
	if(rowCount<1){
		applyToastrAlert("Insert rows before edit/view");
		flg=false;
		return;
	}
	var isOneRowSelected=false;
	$('#fnaPropOwnTblByCPF tbody').find('input[type=checkbox]').each(function(){
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
 
				$('#fnaPropOwnTblByCPF tbody').find('input[type=checkbox]').each(function(){
					if($(this).is(":checked") || $(this).closest("tr").hasClass("selected")){
						
						 
						var row = $(this).parents("tr");                                    
						var mode = $(this).parents("tr").find("td:first").find('input:eq(0)').val();
						
						
						var refId=$(this).parents("tr").find("td:eq(0)").find("input.rowrefid");//Retirement Reference
						
						var refFlg=$(this).parents("tr").find("td:eq(0)").find("input").hasClass("rowrefid");
					 
						if(isValidObject(refId) && refFlg){  
							    
								  
							var message=false;
							 
							
							/*$("#IncAssRetPlgtbl tbody").find("tr").find("td:eq(0)").find("input.rowrefid").each(function(){
								if(refId.val() == $(this).val()){
									message=true;
//									IncAssRetPlgtbl.row($(this).closest("tr")).remove().draw();
									$(this).closest("tr").hide();
									$(this).parents("tr").find("td:first").find('input:eq(0)').val("D");
								}
							});*/
							
							deleteAllRetPlanByRefId(refId.val());
							deleteAllRetPlanByRefId(refId.val()+"_C");
							
							
							  
						  /* $("#cpfAccAddDedTable tbody").find("tr").find("td:eq(0)").find("input.rowrefid").each(function(){
							   var myStr = $(this).val();
						       var newStrC = myStr.replace("_C", "");
						       var newStrS = myStr.replace("_S", ""); 
							   	if(refId.val() == newStrC ||refId.val() == newStrS){
							   		message=true;
//							   		cpfAccAddDedTable.row($(this).closest("tr")).remove().draw();
							   		$(this).closest("tr").hide();
									$(this).parents("tr").find("td:first").find('input:eq(0)').val("D");
							   	}
							});	*/
							
							deleteAllCPFByRefId(refId.val());
							deleteAllCPFByRefId(refId.val()+"_C");
							 
						  
						}
						 
						
						if(!isValidObject($(this).parents("tr").find("td:eq(0)").find("input.rowrefid")) && !refFlg){
							if(refId.val() == $(this).val()){
//								fnaPropOwnTblByCPF.row($(this).closest("tr")).remove().draw();
								$(this).closest("tr").hide();
								$(this).parents("tr").find("td:first").find('input:eq(0)').val("D");
							}
						}
						
						
						  /* $("#fnaPropOwnTblByCPF tbody").find("tr").find("td:eq(0)").find("input.rowrefid").each(function(){
								if(refId.val() == $(this).val()){
								if(message){
									applyErrorToastrAlert("There is row exists in other sections, will also be deleted!");
								}
//								fnaPropOwnTblByCPF.row($(this).closest("tr")).remove().draw();
								$(this).closest("tr").hide();
								$(this).parents("tr").find("td:first").find('input:eq(0)').val("D");
								}
							});*/
						
			//			propfilldlgval(row);//instant save added line
				//		instantPropSave(null,DEL_MODE); //instant save added line
						   
						   row.hide();
							row.find("td:first").find('input:eq(0)').val("D");
						$(this).attr("checked",false); 
						
					}
				}); 
				
				reOrderVisibleRows("IncAssRetPlgtbl"); 
				reOrderVisibleRows("cpfAccAddDedTable");
				reOrderVisibleRows("fnaPropOwnTblByCPF");
				
				
				
				/*$('#fnaPropOwnTblByCPF tbody tr').find('td:eq(0) input.rowrefid').each(function(){
					
					var oldval = $(this).val();
					var bankrowindex= $(this).closest("tr").index();
					var newval = "PROP_"+bankrowindex;
					
					
					$("#IncAssRetPlgtbl tbody").find("tr").find("td:eq(0)").find("input.rowrefid").each(function(){
			     	   if(oldval == $(this).val()){
			     		   $(this).val(newval);
			     	   }
			        });
					
					
					$("#cpfAccAddDedTable tbody").find("tr").find("td:eq(0)").find("input.rowrefid").each(function(){
			     	   if(oldval == $(this).val()){
			     		   $(this).val(newval);
			     	   }
			        });
					
					$(this).val(newval);
				});*/
				
				
				calcTotalPropertyAmts(true);
			
				
				$('#confirmationalertmsgdiv').modal('hide');  
//				DHTML CRUD ICONS
				var rc = fnaPropOwnTblByCPF.row().count();
				if(rc ==0){
					$("#SelfnaPropOwnTblByCPF").prop("checked",false);
					crudicons(this,'fnaPropOwnTblByCPF','SelfnaPropOwnTblByCPF','powncpfERow','powncpfDRow');
				}
//				DHTML CRUD ICONS
			  });
			$('#confirmationalertmsgdiv').find(".modal-footer").find("button:eq(1)").click(function (){ 
				  	$('#confirmationalertmsgdiv').modal('hide');  
				  	
			  });
			
		});
		
	}
});

/*Clear Fields */
function propClearFlds(){
	$("#propOwnCpf_Dialog").find("input[type=text]").val("");
	$("#propOwnCpf_Dialog").find("textarea").val("");
	$("#propOwnCpf_Dialog").find("select").val("");
}

/*Disabled/Readonly Fields */
function propRdlyflds(mode){ 
	
	 if(mode == QRY_MODE ){
			$("#propOwnCpf_Dialog :input").prop("disabled", true); 
	 } else if((mode == INS_MODE) || (mode == UPD_MODE) ){
			$("#propOwnCpf_Dialog :input").prop("disabled", false);
	 }
	 
	 $("#propOwnCpf_Dialog #txtFldDlgPropFVOnRent").prop("disabled", true);	 
	 
	/* if($("#dfSelfMartsts").val() == "Single"){
		 $("input[name=txtFldDlgPropLoanBySpsCash]").val("");
 		 $("input[name=txtFldDlgPropLoanBySpsCash]").prop("disabled",true);
 		 $("input[name=txtFldDlgPropLoanBySpsCpf]").val("");
		 $("input[name=txtFldDlgPropLoanBySpsCpf]").prop("disabled",true);
	 }*/
	 
}

/*Validation */
function validatepropDetails(){ 
	/*if(!(validateFocusFlds('propOwnCpf_Dialog','txtFldDlgPropOwnCpfDesc',PROP_DESC))) return;
	if(!(validateFocusFlds('propOwnCpf_Dialog','txtFldDlgCpfPropMktVal',PROP_MARKETVAL))) return;
	if(!(validateFocusFlds('propOwnCpf_Dialog','txtFldDlgCpfPropOwnership',PROP_OWNER))) return; */
	
	
	  return true; 
}

function valpropTbl(){ 
//	var $lastRow = $("#fnaPropOwnTblByCPF tbody tr:last");	
	var $RowCount = fnaPropOwnTblByCPF.rows().count();

	var valid=true;
	/*if($RowCount > 0 ){ 
		$("#fnaPropOwnTblByCPF tbody tr").each(function(){
			var $lastRow=$(this);
		if(!(validateFocusDhtmlFlds($lastRow.find("td:eq(2)").find('input:eq(0)'), PROP_DESC,SCREEN_PROP))) {valid=false;return false;};
		if(!(validateFocusDhtmlFlds($lastRow.find("td:eq(3)").find('input:eq(0)'), PROP_MARKETVAL,SCREEN_PROP))) {valid=false;return false;};
		if(!(validateFocusDhtmlFlds($lastRow.find("td:eq(4)").find('select:eq(0)'), PROP_OWNER,SCREEN_PROP))) {valid=false;return false;};
		
	 
		});
	}*/  
	return valid;
}

/*Mandatory Fields Tooltip*/ 
$("#txtFldDlgPropOwnCpfDesc,#txtFldDlgCpfPropMktVal,#txtFldDlgCpfPropOwnership").on("change",function(){
	if(!isEmpty($(this).val())){
	$(this).removeClass("mandatoryFillFlds");
	$(this).qtip('disable');
	$(this).qtip('destroy',true);
	}
});
 


/* Filling Model Fields*/
function propfilldlgval($lastRow){
	  
//	  $('#propOwnCpf_Dialog #txtFldDlgPropMode').val($lastRow.find("td:eq(0)").find('input:eq(0)').val());//instant save added line
	  $('#propOwnCpf_Dialog #txtFldDlgCpfPropOwnId').val($lastRow.find("td:eq(0)").find('input:eq(1)').val());
	  $('#propOwnCpf_Dialog #txtFldDlgPropRefId').val($lastRow.find("td:eq(0)").find('input:eq(2)').val());
	  $('#propOwnCpf_Dialog #txtFldDlgPropOwnCpfDesc').val($lastRow.find("td:eq(2)").find('input:eq(0)').val());
	  if($lastRow.find("td:eq(3)").find('input:eq(0)').val().trim().length === 0){
		  $('#propOwnCpf_Dialog #txtFldDlgCpfPropMktVal').val(0);
	      }
	  else{
	  $('#propOwnCpf_Dialog #txtFldDlgCpfPropMktVal').val($lastRow.find("td:eq(3)").find('input:eq(0)').val());
	  }
	  $('#propOwnCpf_Dialog #txtFldDlgCpfPropOwnership').val($lastRow.find("td:eq(4)").find('select:eq(0)').val());
	  $('#propOwnCpf_Dialog #txtFldDlgCpfPropApprecrate').val($lastRow.find("td:eq(5)").find('input:eq(0)').val());
	  $('#propOwnCpf_Dialog #txtFldDlgCpfPropMortageos').val($lastRow.find("td:eq(6)").find('input:eq(0)').val());
	  $('#propOwnCpf_Dialog #txtFldDlgCpfPropOsloanPerd').val($lastRow.find("td:eq(7)").find('input:eq(0)').val());
	  
//	  $('#propOwnCpf_Dialog #txtFldDlgCpfPropYrstoPay').val($lastRow.find("td:eq(8)").find('input:eq(0)').val());
	  $('#propOwnCpf_Dialog #txtFldDlgCpfPropObj').val($lastRow.find("td:eq(8)").find('select:eq(0)').val()); 
	  $('#propOwnCpf_Dialog #txtFldDlgPropCurAnlRetInc').val($lastRow.find("td:eq(9)").find('input:eq(0)').val());
	  $('#propOwnCpf_Dialog #txtFldDlgCpfPropRentPerd').val($lastRow.find("td:eq(10)").find('input:eq(0)').val());
	  
	  $('#propOwnCpf_Dialog #txtFldDlgPropLoanBySlfCpf').val($lastRow.find("td:eq(11)").find('input:eq(0)').val());
	  $('#propOwnCpf_Dialog #txtFldDlgPropLoanBySlfCash').val($lastRow.find("td:eq(12)").find('input:eq(0)').val());
	  $('#propOwnCpf_Dialog #txtFldDlgPropLoanBySpsCpf').val($lastRow.find("td:eq(13)").find('input:eq(0)').val());
	  $('#propOwnCpf_Dialog #txtFldDlgPropLoanBySpsCash').val($lastRow.find("td:eq(14)").find('input:eq(0)').val()); 
	  $('#propOwnCpf_Dialog #txtFldDlgCpfPropSold').val($lastRow.find("td:eq(15)").find('select:eq(0)').val()); 
	  $('#propOwnCpf_Dialog #txtFldDlgPropRentOnRetire').val($lastRow.find("td:eq(16)").find('select:eq(0)').val());
	  $('#propOwnCpf_Dialog #txtFldDlgPropCurRetInc').val($lastRow.find("td:eq(17)").find('input:eq(0)').val());
	  $('#propOwnCpf_Dialog #txtFldDlgCpfPropCrtdBy').val($lastRow.find("td:eq(17)").find('input:eq(1)').val());
	  $('#propOwnCpf_Dialog #txtFldDlgCpfPropCrtdDate').val($lastRow.find("td:eq(17)").find('input:eq(2)').val());
	  $('#propOwnCpf_Dialog #txtFldDlgPropYrsToRent').val($lastRow.find("td:eq(18)").find('input:eq(0)').val());
	  $('#propOwnCpf_Dialog #txtFldDlgPropFVOnRent').val($lastRow.find("td:eq(19)").find('input:eq(0)').val());
}

/* Filling Table Fields*/
function propfilldomval($RowId,$row){ 
	console.log($('#txtFldDlgPropRefId').val())
	$row.find("td:eq(0)").find('input:eq(1)').val($('#txtFldDlgCpfPropOwnId').val());
	$row.find("td:eq(0)").find('input:eq(2)').val($('#txtFldDlgPropRefId').val());
	$row.find("td:eq(2)").find('input:eq(0)').val($("#txtFldDlgPropOwnCpfDesc").val()); 
	if($("#txtFldDlgCpfPropMktVal").val().trim().length === 0){
		$row.find("td:eq(3)").find('input:eq(0)').val(0);
      }
  else{
	$row.find("td:eq(3)").find('input:eq(0)').val($("#txtFldDlgCpfPropMktVal").val()); 
  }
	$row.find("td:eq(4)").find('select:eq(0)').val($("#txtFldDlgCpfPropOwnership").val()); 
	$row.find("td:eq(5)").find('input:eq(0)').val($("#txtFldDlgCpfPropApprecrate").val());  
	$row.find("td:eq(6)").find('input:eq(0)').val($("#txtFldDlgCpfPropMortageos").val());
	$row.find("td:eq(7)").find('input:eq(0)').val($("#txtFldDlgCpfPropOsloanPerd").val()); 
	
//	$row.find("td:eq(8)").find('input:eq(0)').val($("#txtFldDlgCpfPropYrstoPay").val()); 
	$row.find("td:eq(8)").find('select:eq(0)').val($("#txtFldDlgCpfPropObj").val()); 
	$row.find("td:eq(9)").find('input:eq(0)').val($("#txtFldDlgPropCurAnlRetInc").val());    
	$row.find("td:eq(10)").find('input:eq(0)').val($("#txtFldDlgCpfPropRentPerd").val());
	
	$row.find("td:eq(11)").find('input:eq(0)').val($("#txtFldDlgPropLoanBySlfCpf").val()); 
	$row.find("td:eq(12)").find('input:eq(0)').val($("#txtFldDlgPropLoanBySlfCash").val()); 
	$row.find("td:eq(13)").find('input:eq(0)').val($("#txtFldDlgPropLoanBySpsCpf").val()); 
	$row.find("td:eq(14)").find('input:eq(0)').val($("#txtFldDlgPropLoanBySpsCash").val()); 
	$row.find("td:eq(15)").find('select:eq(0)').val($("#txtFldDlgCpfPropSold").val());  
	$row.find("td:eq(16)").find('select:eq(0)').val($("#txtFldDlgPropRentOnRetire").val());  
	$row.find("td:eq(17)").find('input:eq(0)').val($("#txtFldDlgPropCurRetInc").val());   
	$row.find("td:eq(17)").find('input:eq(1)').val($('#txtFldDlgCpfPropCrtdBy').val()) ;
	$row.find("td:eq(17)").find('input:eq(2)').val($('#txtFldDlgCpfPropCrtdDate').val())  ;
	$row.find("td:eq(18)").find('input:eq(0)').val($("#txtFldDlgPropYrsToRent").val());   
	$row.find("td:eq(19)").find('input:eq(0)').val($("#txtFldDlgPropFVOnRent").val()); 
	
//	$row.find("input[type=text]").prop("readonly",true);//instant save added line
//	$row.find("select").prop("disabled",true);//instant save added line

}


/*###########################################################################################################################################################*/

//Sync Prop with Retirement
function syncPropTblRow($tblPropRow){
//	console.log("syncPropTblRow")
	
	var onretirement = $tblPropRow.find("td:eq(15)").find("select:eq(0)").val();//sold
	var torent 		 = $tblPropRow.find("td:eq(16)").find("select:eq(0)").val();//to rent
	var owner = $tblPropRow.find("td:eq(4)").find('select:eq(0)').val().toUpperCase(); 
	var pkid = $tblPropRow.find("td:eq(0)").find('input:eq(1)').val();
	var proprefid = $tblPropRow.find("td:eq(0)").find('input:eq(2)').val();
	
	var rowRefID = pkid ;//"PROP_"+$tblPropRow.index();
		
		var rowexist = chkRPIncAssetRowExist(proprefid);
		var $tblRetRow = null; 
		
	if((onretirement == "N" && torent=="Y") || onretirement=="Y"){
		
		var intretslfage = 0;
		var slfretage=isEmpty($("#retSelfAge").val())? 0 :Number($("#retSelfAge").val()); 
		var totAge=isEmpty($("#retSelfProjage").val())? 0 :Number($("#retSelfProjage").val());
		var basedon=$("#retAgeBasedon").val().toUpperCase();

		 var spsretage = isEmpty($("#retSpsAge").val())? 0 :Number($("#retSpsAge").val());
		 var spsprojage = $("#retSpsProjage").val();
		 
		 if(owner == "SPOUSE"){
			 intretslfage=spsretage;
		 }else if(owner == "SELF"){
			 intretslfage=slfretage; 
		 }
		

		if(rowexist == null){
			getincassrtRows(null,"N");
			$tblRetRow=$("#IncAssRetPlgtbl tbody tr:last");
		}else{
			$tblRetRow=rowexist;
		}

		$tblPropRow.find("td:eq(0)").find('input:eq(2)').addClass("rowrefid").val(rowRefID); 
		$tblRetRow.find("td:eq(0)").find('input:eq(2)').addClass("rowrefid").val(rowRefID);
		
//		if(isEmpty(pkid)){
			if(isEmpty($tblRetRow.find("td:eq(0)").find('input:eq(1)').val())){
				$tblRetRow.find("td:eq(0)").find('input:eq(1)').val(makeid(17));
			}
				
//		}
		 
		var propdesc = $tblPropRow.find("td:eq(2)").find('input:eq(0)').val();
		var estfuturerent = $tblPropRow.find("td:eq(17)").find('input:eq(0)').val();
		var soldonret =  $tblPropRow.find("td:eq(15)").find('select:eq(0)').val();
		var rentonret = $tblPropRow.find("td:eq(16)").find('select:eq(0)').val();
		var propfvonrent = Number($tblPropRow.find("td:eq(19)").find('input:eq(0)').val());
		var freq= (soldonret == "Y")? "SINGLE" :((rentonret == "Y") ? "REGULAR" :"");
		var yrtorent = $tblPropRow.find("td:eq(18)").find('input:eq(0)').val();
		
		$tblRetRow.find("td:eq(2)").find('input:eq(0)').val("Properties");	
		$tblRetRow.find("td:eq(3)").find('input:eq(0)').val(isEmpty(propdesc)?"":propdesc);	
		$tblRetRow.find("td:eq(4)").find('select:eq(0)').val(freq);
		 
	 	
	 	if(onretirement=="Y"){
	 		$tblRetRow.find("td:eq(5)").find('input:eq(0)').val((isEmpty(propfvonrent)? Number(0): Number(propfvonrent)));
	 	}else{
	 		$tblRetRow.find("td:eq(5)").find('input:eq(0)').val((isEmpty(estfuturerent)? Number(0): Number(estfuturerent)));
	 	}
	 	
		$tblRetRow.find("td:eq(6)").find('input:eq(0)').val("");
 	 	
		$tblRetRow.find("td:eq(7)").find('input:eq(0)').val(""); 
 		
		$tblRetRow.find("td:eq(8)").find('select:eq(0)').val(isEmpty(owner)? basedon :owner); 
		
		$tblRetRow.find("td:eq(9)").find('input:eq(0)').val((isEmpty(intretslfage)) ? Number("0") : Number(intretslfage)); 
 
		
		if(freq == "SINGLE"){
			$tblRetRow.find("td:eq(10)").find('input:eq(0)').prop("disabled",true);
			$tblRetRow.find("td:eq(10)").find('input:eq(0)').val(""); 
			
		}else{
			$tblRetRow.find("td:eq(10)").find('input:eq(0)').prop("disabled",false);
			$tblRetRow.find("td:eq(10)").find('input:eq(0)').val((isEmpty(intretslfage)) ? Number("0") : Number(intretslfage)+Number(yrtorent)); 
			
		}
 
		
		applyToastrAlert("Property Ownership data will be reflected to Income and assets available for Retirement Section in Retirement Planning Screen !");
		


		
//	}else if(rowexist  != null){
	}else if ((onretirement != "Y" && torent != "Y")){
		
//			IncAssRetPlgtbl.row(rowexist).remove().draw();
		
		/*if(isEmpty(pkid)){
			IncAssRetPlgtbl.row(rowexist).remove().draw();
		}else{
			rowexist.hide();
			rowexist.find("td:first").find('input:eq(0)').val("D");
		}
		
			reOrderVisibleRows("IncAssRetPlgtbl");			
		}  */
		
		deleteAllRetPlanByRefId(rowRefID);
	}
}
 
function calcTotalPropertyAmts(msgflag){ 
	 
	 var sumslfcash=0,sumspscash=0,sumfamcash=0,sumslfcpf=0,sumspscpf=0;
	 var sumcurincself=0,sumcurincsps=0,sumcurincfam=0;
	 var summortgageslf=0,summortgagesps=0,summortgagefam=0;
	 var $fnaPropOwnTblByCPF = fnaPropOwnTblByCPF.rows().count();
	 var ownership; 

	 if($fnaPropOwnTblByCPF >0){
		 
		 $("#fnaPropOwnTblByCPF tbody tr").each(function(i,row){
			 
			 var mode_r = $(this).find("td:first").find('input:eq(0)').val();
			 
			 if(mode_r != "D"){
				 
				 var marketvalue 	=Number($(this).find("td:eq(3)").find("input:eq(0)").val());//Market Value			 
				 ownership=$(this).find("td:eq(4)").find('select:eq(0)').val();//ownership
				 var arate = Number($(this).find("td:eq(5)").find("input:eq(0)").val());//appr_rate
				 arate = isEmpty(arate) ? 0 :arate;
				 var mortgageloan	=Number($(this).find("td:eq(6)").find("input:eq(0)").val()); //Mortage Loans
				// var currannlrentincome=Number($(this).find("td:eq(9)").find("input:eq(0)").val())*((100/100)+(arate/100));//Current Annual Rental Income * Appreciation rate
				 var currannlrentincome=Number($(this).find("td:eq(9)").find("input:eq(0)").val());
				 currannlrentincome = isEmpty(currannlrentincome) ? 0 : Number(currannlrentincome);
				 
				 var totClntLnCpf   =Number($(this).find("td:eq(11)").find("input:eq(0)").val());
				 var totClntLnCash	=Number($(this).find("td:eq(12)").find("input:eq(0)").val());		
				 var totSpsLnCpf	=Number($(this).find("td:eq(13)").find("input:eq(0)").val());
				 var totSpsLnCash	=Number($(this).find("td:eq(14)").find("input:eq(0)").val());
				 var estdfutannlrentincome 	= Number($(this).find("td:eq(17)").find("input:eq(0)").val());
				 var totRetCurInc;
				 
				 
				 var apprRate		=Number(arate);//Appreciation Rate
				 var numofyears		= $("#retYrstoret").val();//Number($(this).find("td:eq(17)").find("input:eq(0)").val());//Years to Rent
				 numofyears = isEmpty(numofyears) ? 0 : numofyears;
				  
				totRetCurInc  = FVCalculation(apprRate, numofyears,0, -1*marketvalue,  1);
				 
				 if(!isEmpty(totClntLnCash)){
					 sumslfcash +=(totClntLnCash); 
				 }
				 
				 if(!isEmpty(totSpsLnCash)){
					 sumspscash +=(totSpsLnCash); 
				 }
				 
				 if(!isEmpty(totClntLnCpf)){
					 sumslfcpf +=(totClntLnCpf); 
				 }
				 
				 if(!isEmpty(totSpsLnCpf)){
					 sumspscpf +=(totSpsLnCpf);  
				 }
				 
				  
					if(ownership =="Self"){sumcurincself +=(currannlrentincome);}
					if(ownership =="Spouse"){sumcurincsps +=(currannlrentincome);}
					if(ownership =="Joint"){sumcurincfam +=(currannlrentincome);}
	 
				 
				 if(!isEmpty(mortgageloan)){
						if(ownership == "Self"){summortgageslf +=(mortgageloan);}
						if(ownership == "Spouse" ){summortgagesps +=(mortgageloan);}
						if(ownership == "Joint"){summortgagefam += (mortgageloan);}
				 }
				 
			 }
			 
			 
			 
			 
			 
		 });
	 } 
	 
		
	 /*hidden property ownership value*/
		$("#hTotClntLnCash").val(roundNumber(sumslfcash));
		$("#hTotSpsLnCash").val(roundNumber(sumspscash));  
		$("#hTotClntLnCpf").val(roundNumber(sumslfcpf));
		$("#hTotSpsLnCpf").val(roundNumber(sumspscpf));
		$("#hTotRetCurInc").val(roundNumber(sumcurincself+sumcurincsps+sumcurincfam));
		
		/*Annual Rental Income in Non-Employment Income section*/
		var toastrmsg ="";
		
		if(sumcurincself==0){
			 $("#incsrcSelfNempRentamt").val("");
		 }
		
		 if(sumcurincsps==0){
			 $("#incsrcSpsNempRentamt").val("");
		 }
		 
		 if(sumcurincfam==0){
			 $("#incsrcJointNempRentamt").val("");
		 }
		
	 if(sumcurincself>0 || sumcurincsps>0 || sumcurincfam>0){		 
		 
		 $("#incsrcSelfNempRentamt").val(roundNumber(sumcurincself));
		 
		 $("#incsrcSpsNempRentamt").val(roundNumber(sumcurincsps));		 
		 
		 $("#incsrcJointNempRentamt").val(roundNumber(sumcurincfam));		  
		 
		 calcSum(null,SrcOF_Inc.SRCOFINCM_SLF);
		 calcSum(null,SrcOF_Inc.SRCOFINCM_SPS);
		 calcSum(null,SrcOF_Inc.SRCOFINCM_JOINT);		 
		 
		 calcSum(this,'SUMOF_ANNEXP_SELF');
		 calcSum(this,'SUMOF_ANNEXP_SPS');
		 calcSum(this,'SUMOF_ANNEXP_FAM');
		 
		 if(msgflag)
			 applyToastrAlert("Annual Rental Income is flow back to Cash Flow Statements");
	 } 
		
	 
	  
	 /*Financial Liabilities*/
	   
	   if(summortgageslf>0 || summortgagesps>0 || summortgagefam > 0 ){
			
			
			   $("#liabSelfShortmort").val(roundNumber(summortgageslf));
			   $("#liabSpsShortmort").val(roundNumber(summortgagesps));
			   $("#liabFamShortmort").val(roundNumber(summortgagefam));
			   
			   calcSum(this,'SUMOF_FINLIAB_SELF');
				 calcSum(this,'SUMOF_FINLIAB_SPS');
				 calcSum(this,'SUMOF_FINLIAB_FAM');
				  
				 if(msgflag)
					 applyToastrAlert("Mortgage Outstanding is flow back to Financial Liabilities section");
	   }
	   
	   /*annual expenditure values - property loan repaymeny by cash */   
//	   if(sumslfcash>0 || sumspscash>0){	
		   
		   if(sumslfcash==0){
			   $("#hTotClntLnCash").val("");
			   $("#expdSelfProploan").val("");
		   }else{
			   $("#expdSelfProploan").val(roundNumber(sumslfcash));
		   }
			 
		   if(sumspscash==0){
			   $("#hTotSpsLnCash").val("");
			   $("#expdSpsProploan").val("");
		   }else{
			   $("#expdSpsProploan").val(roundNumber(sumspscash)); 
		   }
			 
		   if((sumslfcash >0 ||sumspscash>0) && msgflag)
			   applyToastrAlert("Property Cash Loan Repayment is flow back to Cash Flow Statements");
//	   }
		
 
//	 if(!isEmpty(toastrmsg)){
//		 applyToastrAlert(toastrmsg);
//	 }
	
	 if(sumslfcpf==0){$("#hTotClntLnCpf").val("");}
	 if(sumspscpf==0){$("#hTotSpsLnCpf").val("");}

	 
}


/*********************************************Synchronize Property Ownership to Cpf Addition and Deduction***********************************************/

function newRowPropCpfTbl($tblPropRow){
	
	var pkid = $tblPropRow.find("td:eq(0)").find('input:eq(1)').val();
	var proprefid = $tblPropRow.find("td:eq(0)").find('input:eq(2)').val();
	 
	var rowRefID = proprefid ;//"PROP_"+$tblPropRow.index();
 
	$tblPropRow.find("td:eq(0)").find('input:eq(2)').addClass("rowrefid").val(rowRefID); 
		
	var ownership	=$tblPropRow.find("td:eq(4)").find('select:eq(0)').val();
	var ClntLnCpf   =$tblPropRow.find("td:eq(11)").find("input:eq(0)").val();
	var SpsLnCpf	=$tblPropRow.find("td:eq(13)").find("input:eq(0)").val();
	var mode = $tblPropRow.find("td:eq(0)").find("input:eq(0)").val();
	var proppkid = $tblPropRow.find("td:eq(0)").find('input:eq(1)').val();
	var propdesc = $tblPropRow.find("td:eq(2)").find('input:eq(0)').val();
	
//	propfilldlgval($tblPropRow);//instant save added line
//	instantPropSave($tblPropRow,UPD_MODE); //instant save added line
	
	var cpftoastrmsg = "";

	if(!isEmpty(ClntLnCpf)){
		
		var rowexist = chkCPFRowExist(rowRefID+"_C");
		var $tblCpfRow = null;
				
		if(rowexist == null){
			getCADRows(null);
			$tblCpfRow =  $("#cpfAccAddDedTable tbody tr:last"); 
		}else{
			$tblCpfRow = rowexist;
		}
		 
		$tblCpfRow.find("td:eq(0)").find('input:eq(2)').addClass("rowrefid").val(rowRefID+"_C"); 
		
//		if(pkid.indexOf("AS_") == 0){
			if(isEmpty($tblCpfRow.find("td:eq(0)").find('input:eq(1)').val())){
				$tblCpfRow.find("td:eq(0)").find('input:eq(1)').val(makeid(17));
			}				
//		}
		
		$tblCpfRow.find("td:eq(2)").find('option:eq(1)').prop("selected","selected");  
		$tblCpfRow.find("td:eq(3)").find('select:eq(0)').val(ownership); 
		$tblCpfRow.find("td:eq(4)").find('select:eq(0)').val("Loan Repayment");
		$tblCpfRow.find("td:eq(4)").find('input[id="txtLifeCpfPlanName"]').val(isEmpty(propdesc) ? "": propdesc);
		$tblCpfRow.find("td:eq(4)").find('div[id="spanplanname"]').text(isEmpty(propdesc) ? "": "Property : "+propdesc);
		$tblCpfRow.find("td:eq(5)").find('select:eq(0)').val("Deduction");
		
//		$tblCpfRow.find("td:eq(6)").find('select:eq(0)').val("CPFACC000001");
//		$tblCpfRow.find("td:eq(6)").find('input:eq(0)').val("Ordinary");
		
		
		$tblCpfRow.find("td:eq(9)").find('input:eq(0)').val(ClntLnCpf);
		$tblCpfRow.find("td:eq(10)").find('select:eq(0)').val(1);
		
 		cpftoastrmsg = "Property CPF Loan repayment is flow back to CPF Addition & Deduction screen";
 
		mandatoryFldForCpf($tblCpfRow,$tblPropRow,'PROP');
		
		applyToastrAlert(cpftoastrmsg);
		
	}else if(isEmpty(ClntLnCpf)){
		
//		var rowexist = chkCPFRowExist(rowRefID+"_C");
		
		deleteAllCPFByRefId(rowRefID+"_C");
		
/*		if(rowexist != null){

//			 cpfAccAddDedTable.row(rowexist).remove().draw();
			 
			 if( mode == "I"){
					if(isEmpty(proppkid)){
						cpfAccAddDedTable.row($(this).closest("tr")).remove().draw();
					}else{
						rowexist.hide();
						rowexist.find("td:first").find('input:eq(0)').val("D");
					}
			}else{
					rowexist.hide();
					rowexist.find("td:first").find('input:eq(0)').val("D");
			}
			 
		}
		
		 reOrderVisibleRows("cpfAccAddDedTable");*/  
		
	}
	
	
//	The following section to be moved to spouse CPF section
	/*
	if(!isEmpty(SpsLnCpf)){
		
		var rowexist = chkCPFRowExist(rowRefID+"_S");
		var $tblCpfRow = null;
		
		if(rowexist == null){
			getCADRows(null);
			$tblCpfRow =  $("#cpfAccAddDedTable tbody tr:last"); 
		}else{
			$tblCpfRow = rowexist;
		}
		 
		
		$tblCpfRow.find("td:eq(0)").find('input:eq(2)').addClass("rowrefid").val(rowRefID+"_S"); 
		var pkid = $tblPropRow.find("td:eq(0)").find('input:eq(1)').val();
		if(pkid.indexOf("AS_") == 0){
			if(isEmpty($tblCpfRow.find("td:eq(0)").find('input:eq(1)').val())){
				$tblCpfRow.find("td:eq(0)").find('input:eq(1)').val(makeid(17));
			}
				
		}
		$tblCpfRow.find("td:eq(2)").find('option:eq(2)').prop("selected","selected"); 
		$tblCpfRow.find("td:eq(3)").find('select:eq(0)').val("Spouse"); 
		$tblCpfRow.find("td:eq(4)").find('select:eq(0)').val("Loan Repayment"); 
		$tblCpfRow.find("td:eq(5)").find('select:eq(0)').val("Deduction"); 
		
//		$tblCpfRow.find("td:eq(6)").find('select:eq(0)').val("CPFACC000001");
//		$tblCpfRow.find("td:eq(6)").find('input:eq(0)').val("Ordinary"); 
 
		$tblCpfRow.find("td:eq(10)").find('select:eq(0)').val(1);
		$tblCpfRow.find("td:eq(9)").find('input:eq(0)').val(SpsLnCpf);
		
	    cpftoastrmsg = "<br/>Property Loan repayment through the CPF  by Spouse is reflected to CPF Addition & Deduction screen";
		mandatoryFldForCpf($tblCpfRow,$tblPropRow,'PROP');
		
		applyToastrAlert(cpftoastrmsg);
		
	} else if (isEmpty(SpsLnCpf)){
		var rowexist = chkCPFRowExist(rowRefID+"_S");
		
		if(rowexist != null){

//			cpfAccAddDedTable.row(rowexist).remove().draw();
			
			 if( mode == "I"){
					if(isEmpty(proppkid)){
						cpfAccAddDedTable.row($(this).closest("tr")).remove().draw();
					}else{
						rowexist.hide();
						rowexist.find("td:first").find('input:eq(0)').val("D");
					}
			}else{
					rowexist.hide();
					rowexist.find("td:first").find('input:eq(0)').val("D");
			}
			 
		}
		
		
	}
	
	*/
	  
}
 
$("#txtFldDlgCpfPropObj").on("change",function(){
	propObjChange($(this),$("#txtFldDlgPropCurAnlRetInc"),$("#txtFldDlgCpfPropRentPerd"),$("#txtFldDlgPropYrsToRent"),true);
	propyearstorent($("#txtFldDlgCpfPropObj"),$("#txtFldDlgCpfPropSold"),$("#txtFldDlgPropRentOnRetire"),$("#txtFldDlgPropYrsToRent"),$("#txtFldDlgPropCurRetInc"),true);
	
});

$("#txtFldDlgCpfPropSold").on("change",function(){
	
	onSoldChange($(this),$("#txtFldDlgPropRentOnRetire"),$("#txtFldDlgPropCurRetInc"),$("#txtFldDlgPropYrsToRent"),true);
	
	if($(this).val() == "Y"){
		mandatoryFldForRetirement($(this),null,'PROP'); 
	}
	
});


 

$("#txtFldDlgPropRentOnRetire").on("change",function(){
	
	retOnRetFnc($(this),$("#txtFldDlgPropCurRetInc"),$("#txtFldDlgPropYrsToRent"),$("#txtFldDlgCpfPropObj"),$("#txtFldDlgCpfPropSold"),true);
	
	if($(this).val() == 'Y'){  
		mandatoryFldForRetirement($(this),null,'PROP');
	}
	
});





function onSoldChange(elmid,chgeid1,chgeid2,yrstorent,flg){ 
	var value=elmid.val();

	if(value=="N"){  
		$(".solddiv").css("display","block");
		$(".soldrentdiv").css("display","none");  
		if(chgeid1.val() == "Y"){
			$(".yearstorentdiv").css("display","block"); 
			yrstorent.prop("disabled",true);
			if(flg){yrstorent.val("");} 
		}else{
			$(".yearstorentdiv").css("display","none");
			yrstorent.prop("disabled",false);
		}
		chgeid1.prop("disabled",false);
		chgeid2.prop("disabled",true); 
		
		
	}else if(value=="Y"){
		 
		$(".solddiv").css("display","none");
		$(".soldrentdiv").css("display","none");
		$(".yearstorentdiv").css("display","none");
		$(".yrstosolddiv").css("display","block"); 
		chgeid1.prop("disabled",true);
		chgeid2.prop("disabled",true); 
		if(flg){chgeid1.val("");
		yrstorent.val("");}
	}else{ 
	
		$(".solddiv").css("display","none");
		$(".soldrentdiv").css("display","none"); 
		$(".yearstorentdiv").css("display","none");
		$(".yrstosolddiv").css("display","none"); 
			yrstorent.prop("disabled",true);
			yrstorent.val("");  
		chgeid1.prop("disabled",true);
		chgeid2.prop("disabled",true); 
		chgeid1.val("");
		if(flg){yrstorent.val("");} 
	
	}
	 
	return true;
}

function propObjChange(elmid,changeId,rentPer,yrstorent,flg){
	var value=elmid.val(); 
	if(value=="Inv"){ 
		$(".currentinc").prop("disabled",false);
	}else{ 
		$(".currentinc").prop("disabled",true);

		if(flg){rentPer.val("");
		changeId.val("");
		yrstorent.val(""); }
	}
	
	return true;
	
}

function retOnRetFnc(elmid,changeid,yrstorent,obj,soldon,flg){
//	retOnRetFnc($(this),$("#txtFldDlgPropCurRetInc"),$("#txtFldDlgPropYrsToRent"),$("#txtFldDlgCpfPropObj"),$("#txtFldDlgCpfPropSold"));
//	console.log("retOnRetFnc"+flg);
	var retonretval=elmid.val();  
	var soldon=soldon.val();
	
	if(retonretval == 'Y' ){  //&& obj.val() == "Inv"
		 
		$(".soldrentdiv").css("display","block"); 
		$(".yearstorentdiv").css("display","block"); 
		changeid.prop("disabled",false); 
		yrstorent.prop("disabled",false); 		
		 
	} else{ 
		$(".soldrentdiv").css("display","none");
		$(".yearstorentdiv").css("display","none");
		if(soldon == "Y"){
		 $(".yrstosolddiv").css("display","block");
		}else{
			$(".yrstosolddiv").css("display","none");
		}
		changeid.prop("disabled",true);
		if(flg){changeid.val("");}
		yrstorent.prop("disabled",true); 
		if(flg){yrstorent.val("");}
		 
	}
	
	$("#propYrsToRet").val($("#retYrstoret").val()).prop("disabled",true); 
	return true;
}


function propyearstorent(elmid,sold,rent,changeid,curRentInc,flg){

//	var invobject=elmid.val();
	var soldval = sold.val();
	var rentval = rent.val();
	

	
	if(soldval=="Y"){
		$(".yrstosolddiv").css("display","block"); 	
	}else{
		
		if( soldval=="N" && rentval=="Y"){
		
			$(".yearstorentdiv").css("display","block"); 
			
			changeid.prop("disabled",false);
			
			curRentInc.prop("disabled",false);

			
		} else{
		
			$(".yrstosolddiv").css("display","none"); 	
			
		}
		
	}
	
	
	return true;
}




$("#txtFldDlgPropRentOnRetire").on("change",function(){  
		propyearstorent($("#txtFldDlgCpfPropObj"),$("#txtFldDlgCpfPropSold"),$("#txtFldDlgPropRentOnRetire"),$("#txtFldDlgPropYrsToRent"),$("#txtFldDlgPropCurRetInc"),true); 
});

$("#txtFldDlgCpfPropMktVal").on("change",function(){
	var sold = $("#txtFldDlgCpfPropSold").val();
	var rent = $("#txtFldDlgPropRentOnRetire").val();
	if( (sold == "Y" ) ||  (sold != "Y" && rent == "Y")){
		calculateCrtRentIncome($("#txtFldDlgCpfPropMktVal"),$("#txtFldDlgCpfPropApprecrate"),$("#retYrstoret"),$("#txtFldDlgPropFVOnRent")); 
	}
});

function callCalcPropFV(obj){
	if(obj){
		var rowobj = obj.closest("tr");
		
		var sold = rowobj.find("td:eq(15)").find('select:eq(0)').val();
		var rent = rowobj.find("td:eq(16)").find('select:eq(0)').val();
		
		if( (sold == "Y" ) ||  (sold != "Y" && rent == "Y")){
			calculateCrtRentIncome(rowobj.find("td:eq(3)").find('input:eq(0)'),rowobj.find("td:eq(5)").find('input:eq(0)'),$("#retYrstoret"),rowobj.find("td:eq(19)").find('input:eq(0)'));
			rowobj.find("td:eq(19)").find('input:eq(0)').val("");
		}else{
			
		} 
		
		
	}else{
		
		var sold = $("#txtFldDlgCpfPropSold").val();
		var rent = $("#txtFldDlgPropRentOnRetire").val();
		if( (sold == "Y" ) ||  (sold != "Y" && rent == "Y")){
			calculateCrtRentIncome($("#txtFldDlgCpfPropMktVal"),$("#txtFldDlgCpfPropApprecrate"),$("#retYrstoret"),$("#txtFldDlgPropFVOnRent"));
		}else{
			$("#txtFldDlgPropFVOnRent").val("");
		}
	}
	
}
  

function calculateCrtRentIncome(mart,aprate,yrtoret,chgeid){
	
	var mktval=Number(mart.val());
	var apprate= isEmpty(aprate.val()) ? 0 : (Number(aprate.val())/100);
	yrtoret=Number(yrtoret.val());
	 
	var result = FVCalculation(apprate, yrtoret, 0,-1*mktval, 1); 
	chgeid.val(roundNumber(result));
	
}

