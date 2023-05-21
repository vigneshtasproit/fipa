/**
 * Cash of banks
 */ 

/*$("#cobCancelbtn").on("click",function(){
	$("#txtFldDlgORtyofpay,#selDlgORFreq,#selDlgORAgeBsOn,#txtFldDlgORAgePaySts").removeClass("mandatoryFillFlds");
	$("#txtFldDlgORtyofpay,#selDlgORFreq,#selDlgORAgeBsOn,#txtFldDlgORAgePaySts").qtip('disable');
	$("#txtFldDlgORtyofpay,#selDlgORFreq,#selDlgORAgeBsOn,#txtFldDlgORAgePaySts").qtip('destroy',true); 
	CobRdlyflds(INS_MODE);  
   	getCobRows(null); 
	$('#Cob_Dialog').modal('hide');
});*/

function openBackToProperty(){ 
	
	if($("#powncpfARow").hasClass("blinking")){
		$("#powncpfARow").removeClass("blinking");
	}
	$("#property_li").click();	 
	$($.fn.dataTable.tables(true)).DataTable().columns.adjust().draw(false);	
	$("#powncpfARow").addClass("blinking"); 
	
	if($("#powncpfARow").hasClass("blinking")){
		setTimeout(function() {
		$("#property").scrollTop(0);
		}, 100); 
	}
	
	 
}

function openBackToInv(){
	if($("#InvestARow").hasClass("blinking")){
		$("#InvestARow").removeClass("blinking");
	} 
	$("#investment_li").click();	
	$($.fn.dataTable.tables(true)).DataTable().columns.adjust().draw(false);	
	$("#InvestARow").addClass("blinking"); 
}

$("a.addnaviCobFixed").on("click",function(){  
	naviCOB();  
});
$("a.addnaviCobSaving").on("click",function(){  
	naviCOB(); 
});
$("a.addnaviCobCashEq").on("click",function(){  
	naviCOB(); 
});
$("a.addnaviCobSRS").on("click",function(){  
	naviCOB(); 
});

function openBackbackToCashAsset(elmtofocus){
		 if($("#"+elmtofocus).hasClass("blinking")){
				$("#"+elmtofocus).removeClass("blinking");
			} 
		 $("#cashasstmain_li").click();
		 $("#cashotherasset_li").click();
		 
			$("#"+elmtofocus).addClass("blinking"); 
			$("#"+elmtofocus).focus();
	 }
function naviCOB(){  
	if($("#CobARow").hasClass("blinking")){
		$("#CobARow").removeClass("blinking");
	} 
	 $("#cashasstmain_li").click();
	 $("#cashatbank_li").click();
//	$("#sidebar-menu ul").find("li:eq(9)").find("ul li:eq(0) a").click();
	$($.fn.dataTable.tables(true)).DataTable().columns.adjust().draw(false);	
	$("#CobARow").addClass("blinking");  
	$("#CobARow").focus();
}



/*Add Row Click */
$("#CobARow").on("click",function(){
	
	//if(!valCobTbl())return; 
			CobClearFlds();
			
			$("#txtFldDlgCashBankId").val(makeid(17));
			$("#txtFldDlgCashBankRefId").val(newMakeId("CAB",15));
			
			openDivCobObject($("#selDlgCOBObjective"),$("#txtFldDlgCOBRetrmntPrcnt"),$("#selDlgCOBChildName"));
			showFIPAModel('Cob_Dialog','Cash At Bank Details');   
//			$("#Cob_Dialog").find("input[id=txtFldDlgCashBankMode]").val("I");//instant save added line
			$('#Cob_Dialog').on('shown.bs.modal', function () {
				childexist();
//				$("#Cob_Dialog").find(".modal-footer").find("button:eq(0)").text("Add");
				$("#Cob_Dialog").find("input[id=txtFldDlgDescription]").focus(); 
				//$("#Cob_Dialog").find("select[id=txtFldDlgMainAccHolderName]").focus(); 
				$("#Cob_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
					
						if(!validateCobDetails())return;
					   	CobRdlyflds(INS_MODE);  
					   	getCobRows(null); 
					   	
					   
						 crudicons(null,'cashOfBanksTable','SelcashOfBanks','CobERow','CobDRow');
						$('#Cob_Dialog').modal('hide'); 
				  });  
			});
			
			
});



/*Populate Data */
function getCobRows(dataset){ 
//	<!--changes done 19/06/2019 -->
var cell0 = '<span></span>'+
'<input type="hidden" name="txtFldCobMode" readonly="true" value="'+INS_MODE+'" class="fipaMode"/><input type="hidden" name="txtFldCashBankId"><input type="hidden" name="txtFldCOBRefId">';

var cell1 = '<div class="checkbox checkbox-primary text-center"><input type="checkbox" name="radCobSelect"/><label>&nbsp;</label></div>'; 
 
var cell2 = '<input type="hidden"  name="txtFldCOBDescription" class="form-control editable form-tablecolor"  maxlength="150" />'+
'<select name="txtFldMainAccHolderName" class="form-control editable form-tablecolor"  onmouseover="fipaTooltip(this);"   maxlength="75" style="display:none"></select>'+
'<select name="selCOBOwnershipType" class="form-control editable form-tablecolor" style="display:none"></select>'+
'<input type="hidden"  name="txtFldSuppAccHolderName" class="form-control editable form-tablecolor"  maxlength="75" />'+
'<select name="selCOBRelationship" class="form-control editable form-tablecolor" style="display:none" ></select>'+
'<input type="text" name="" class="form-control editable form-tablecolor"   onmouseover="fipaTooltip(this);" readonly="readonly"/>';//Proposed; 
 
var cell3 = '<select  name="selCOBAccountType" class="form-control editable form-tablecolor"   onmouseover="fipaTooltip(this);" readonly="readonly" disabled="disabled"/></select>'+
'<input type="hidden" name="txtFldCOBBankAccNo" class="form-control editable form-tablecolor"  maxlength="60"  onmouseover="fipaTooltip(this);"  />'+
'<input type="hidden" name="txtFldCOBBankName" class="form-control editable form-tablecolor"   maxlength="150"  onmouseover="fipaTooltip(this);"  />';

var cell4 = '<input type="text" name="txtFldCOBCurBalance" class="form-control editable form-tablecolor"   onmouseover="fipaTooltip(this);" readonly="readonly"/>';

var cell5 = '<select name="selCOBObjective" class="form-control editable form-tablecolor"   onmouseover="fipaTooltip(this);" style="display: none;"></select>'+
'<input type="hidden" name="txtFldCOBRetrmntPrcnt"   class="form-control editable form-tablecolor"   onmouseover="fipaTooltip(this);"  />'+
'<select name="selCOBChildName"   class="form-control editable form-tablecolor" style="display:none"  onmouseover="fipaTooltip(this);"></select>'+
'<input type="text" name="" class="form-control editable form-tablecolor"   onmouseover="fipaTooltip(this);" readonly="readonly"/>';//Proposed

var cell6 = '<input type="hidden" name="txtFldCOBRegDeposit" class="form-control editable form-tablecolor"   onmouseover="fipaTooltip(this);"  />'+
'<select name="selCOBDepositFreq" class="form-control editable form-tablecolor"   onmouseover="fipaTooltip(this);" style="display: none;"></select>'+
'<input type="hidden" name="txtFldCOBPerFrom" class="form-control editable form-tablecolor"   maxlength="10" onmouseover="fipaTooltip(this);"  />'+
'<input type="hidden" name="txtFldCOBPerTo" class="form-control editable form-tablecolor"   maxlength="10" onmouseover="fipaTooltip(this);" />'+
'<input type="hidden" name="txtFldCOBRemarks" class="form-control editable form-tablecolor"     onmouseover="fipaTooltip(this);" maxlength="300"/>'+
'<input type="hidden" name="txtFldCOBCrtdBy"/><input type="hidden" name="txtFldCOBCrtdDate"/><input type="hidden" name="txtFldCobYrsToRet"/>'+
'<input type="hidden" name="txtFldCOBPeriodRegDep" class="form-control editable form-tablecolor"     onmouseover="fipaTooltip(this);" />'+
'<input type="text" name="" class="form-control editable form-tablecolor"   onmouseover="fipaTooltip(this);" readonly="readonly"/>';//Proposed
/*
var cell6 = '<input type="text" name="txtFldCOBBankName" class="form-control editable"   maxlength="150"  onmouseover="fipaTooltip(this);"  />';

var cell7 = '<input type="text" name="txtFldCOBBankAccNo" class="form-control editable"  maxlength="60"  onmouseover="fipaTooltip(this);"  />';

var cell8 = '<select  name="selCOBAccountType" class="form-control editable"   onmouseover="fipaTooltip(this);" ></select>';

var cell9 = '<input type="text" name="txtFldCOBCurBalance" class="form-control editable"   onmouseover="fipaTooltip(this);" />';

var cell10 = '<input type="text" name="txtFldCOBRegDeposit" class="form-control editable"   onmouseover="fipaTooltip(this);"  />';

var cell11 = '<select name="selCOBDepositFreq" class="form-control editable"   onmouseover="fipaTooltip(this);" ></select>';

var cell12 = '<input type="text" name="txtFldCOBPerFrom" class="form-control editable"   maxlength="10" onmouseover="fipaTooltip(this);"  />';

var cell13 = '<input type="text" name="txtFldCOBPerTo" class="form-control editable"   maxlength="10" onmouseover="fipaTooltip(this);" />';

var cell14 = '<select name="selCOBObjective" class="form-control editable"   onmouseover="fipaTooltip(this);" ></select>';

var cell15 ='<input type="text" name="txtFldCOBRetrmntPrcnt"   class="form-control editable"   onmouseover="fipaTooltip(this);"  />';
 
var cell16 = '<select name="selCOBChildName"   class="form-control editable"   onmouseover="fipaTooltip(this);"></select>';

var cell17 = '<input type="text" name="txtFldCOBRemarks" class="form-control editable"     onmouseover="fipaTooltip(this);" maxlength="300"/>'
+'<input type="hidden" name="txtFldCOBCrtdBy"/><input type="hidden" name="txtFldCOBCrtdDate"/><input type="hidden" name="txtFldCobYrsToRet"/>';*/

cashOfBanksTable.row.add( [cell0,cell1,cell2,cell3,cell4,cell5,cell6] ).draw( false );

var rowCount = $('#cashOfBanksTable tbody tr:visible').length;	
rowCount =  (rowCount == 0) ? $('#cashOfBanksTable tbody tr').length : rowCount;
var $lastRow = $("#cashOfBanksTable tbody tr:last");	

$lastRow.find("td:first").find('span').text(rowCount); 

$lastRow.find("td:eq(1)").find("input:first").click(function(){
	selectSingleRow(this);
});

$lastRow.find("td:eq(1)").find("input:first").attr('id',"radCob"+$lastRow.index())
.parent().find('label').attr('for',"radCob"+$lastRow.index());

$lastRow.find("td:eq(0)").find('input:eq(1)').val($("#txtFldDlgCashBankId").val());
$lastRow.find("td:eq(0)").find('input:eq(2)').val($("#txtFldDlgCashBankRefId").val());

$lastRow.find("td:eq(2)").find('input:eq(0)').val($("#txtFldDlgDescription").val());

var accholdname = $("#txtFldDlgMainAccHolderName > option").clone();
$lastRow.find("td:eq(2)").find('select:eq(0)').append(accholdname);
$lastRow.find("td:eq(2)").find('select:eq(0)').val($("#txtFldDlgMainAccHolderName").val());
$lastRow.find("td:eq(2)").find('select:eq(0)').on("change",function(){
//	removeTooltip($(this));	
});

 
$lastRow.find("td:eq(2)").find('input:eq(1)').val($("#txtFldDlgSuppAccHolderName").val());
 

var relationship = $("#selDlgCOBRelationship > option").clone();
$lastRow.find("td:eq(2)").find('select:eq(2)').append(relationship);
$lastRow.find("td:eq(2)").find('select:eq(2)').val($("#selDlgCOBRelationship").val());
 

var ownership =  $("#selDlgCOBOwnershipType > option").clone();
$lastRow.find("td:eq(2)").find('select:eq(1)').append(ownership);
$lastRow.find("td:eq(2)").find('select:eq(1)').val($("#selDlgCOBOwnershipType").val());
$lastRow.find("td:eq(2)").find('select:eq(1)').on("change",function(){
	 	
		setCashAtBankToAsset($lastRow);
//		syncCashAtBankTblEditRow($lastRow);
		syncCashAtTblRow($lastRow)
//		reverseCobSync($lastRow);
		return; 
});
$lastRow.find("td:eq(2)").find('input:eq(2)').val($("#txtFldDlgDescription").val() + ",  " +  $("#txtFldDlgMainAccHolderName").val() + ", "  +  $("#selDlgCOBOwnershipType").val() +" Ownership"); //Proposed


$lastRow.find("td:eq(3)").find('input:eq(1)').val($("#txtFldDlgCOBBankName").val());
$lastRow.find("td:eq(3)").find('input:eq(1)').on("change",function(){
//	removeTooltip($(this));	
});

$lastRow.find("td:eq(3)").find('input:eq(0)').val($("#txtFldDlgCOBBankAccNo").val());
$lastRow.find("td:eq(3)").find('input:eq(0)').on("change",function(){
//	removeTooltip($(this));	
});

var ownership =  $("#selDlgCOBAccountType > option").clone();
$lastRow.find("td:eq(3)").find('select:eq(0)').append(ownership);
$lastRow.find("td:eq(3)").find('select:eq(0)').val($("#selDlgCOBAccountType").val());
$lastRow.find("td:eq(3)").find('select:eq(0)').on("change",function(){
	setCashAtBankToAsset($lastRow);	
})

 
 
$lastRow.find("td:eq(4)").find('input:eq(0)').val($("#txtFldDlgCOBCurBalance").val());
$lastRow.find("td:eq(4)").find('input:eq(0)').addClass("applyEvntUsd26");
$lastRow.find("td:eq(4)").find('input:eq(0)').on("change",function(){ 
		setCashAtBankToAsset($lastRow);
//		syncCashAtBankTblEditRow($lastRow);
		syncCashAtTblRow($lastRow)
//		reverseCobSync($lastRow);
		return;
});


$lastRow.find("td:eq(6)").find('input:eq(0)').val($("#txtFldDlgCOBRegDeposit").val());
$lastRow.find("td:eq(6)").find('input:eq(0)').addClass("applyEvntUsd26");
$lastRow.find("td:eq(6)").find('input:eq(0)').on("change",function(){
//	reverseCobSync($lastRow);	
});

 

var depositfreq =  $("#selDlgCOBDepositFreq > option").clone();
$lastRow.find("td:eq(6)").find('select:eq(0)').append(depositfreq);  
$lastRow.find("td:eq(6)").find('select:eq(0)').val($("#selDlgCOBDepositFreq").val());
$lastRow.find("td:eq(6)").find('select:eq(0)').on("change",function(){
//	reverseCobSync($lastRow);	
}); 


$lastRow.find("td:eq(6)").find('input:eq(1)').val($("#txtFldDlgCOBPerFrom").val());
$lastRow.find("td:eq(6)").find('input:eq(1)').datetimepicker(dateOptions).on("change",function(){
	 checkDateFormat($(this));  
	 if(!dhtmlChkDateValidation($lastRow.find("td:eq(6)").find('input:eq(1)'),$lastRow.find("td:eq(6)").find('input:eq(2)'),"To Date should greater than the From Date"));  
	  
			return;
});

$lastRow.find("td:eq(6)").find('input:eq(2)').val($("#txtFldDlgCOBPerTo").val());
$lastRow.find("td:eq(6)").find('input:eq(2)').datetimepicker(dateOptions).on("change",function(){
	 checkDateFormat($(this));  
	 if(!dhtmlChkDateValidation($lastRow.find("td:eq(6)").find('input:eq(1)'),$lastRow.find("td:eq(6)").find('input:eq(2)'),"To Date should greater than the From Date"));  
	  
			return;
});



var objective =  $("#selDlgCOBObjective > option").clone();
$lastRow.find("td:eq(5)").find('select:eq(0)').append(objective);
$lastRow.find("td:eq(5)").find('select:eq(0)').val($("#selDlgCOBObjective").val());
$lastRow.find("td:eq(5)").find('select:eq(0)').on("change",function(){ 
	if($(this).val() == "Retirement"){
		mandatoryFldForRetirement($(this),$lastRow,'COB'); /*if(!validationRetirementScreen())return;*/
	} 
//		syncCashAtBankTblEditRow($lastRow); 
	syncCashAtTblRow($lastRow);
//		reverseCobSync($lastRow);
		return;
});



$lastRow.find("td:eq(5)").find('input:eq(0)').val($("#txtFldDlgCOBRetrmntPrcnt").val());
$lastRow.find("td:eq(5)").find('input:eq(0)').addClass("applyEvntpCent26"); 
$lastRow.find("td:eq(5)").find('input:eq(0)').on("change",function(evt){ 
	 
	setCashAtBankToAsset($lastRow);
	if($(this).val() == "Retirement"){	 
		mandatoryFldForRetirement($(this),$lastRow,'COB'); 
		} 
//		syncCashAtBankTblEditRow($lastRow); 
	syncCashAtTblRow($lastRow);
//		reverseCobSync($lastRow);
		return;
});
 

var sel1 =  $("#selDlgCOBChildName > option").clone();
$lastRow.find("td:eq(5)").find('select:eq(1)').append(sel1);
$lastRow.find("td:eq(5)").find('select:eq(1)').val($("#selDlgCOBChildName").val());
$lastRow.find("td:eq(5)").find('input:eq(1)').val($("#selDlgCOBObjective").val() + " @ " +  $("#txtFldDlgCOBRetrmntPrcnt").val() + "%"); //Proposed 

$lastRow.find("td:eq(6)").find('input:eq(3)').val($("#txtFldDlgCOBRemarks").val());
$lastRow.find("td:eq(6)").find('input:eq(6)').val($("#txtFldDlgCOBYrsToRet").val());
$lastRow.find("td:eq(6)").find('input:eq(7)').val($("#txtFldDlgCOBPeriodRegDeposit").val());
$lastRow.find("td:eq(6)").find('input:eq(8)').val("$" + $("#txtFldDlgCOBRegDeposit").val() + " " + $("#selDlgCOBDepositFreq").val()  + ", " + "For " + $("#txtFldDlgCOBPeriodRegDeposit").val() + " years"); //Proposed
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
		crudicons(this,'cashOfBanksTable','SelcashOfBanks','CobERow','CobDRow');
				
	});
	//DHTML CRUD ICONS

	$lastRow.find("td:eq(1)").find("input:first").click(function(){
		selectSingleRow(this);
	//	DHTML CRUD ICONS
		crudicons(this,'cashOfBanksTable','SelcashOfBanks','CobERow','CobDRow');
	});


	if(dataset != null){

		rowCount = $('#cashOfBanksTable tbody tr').length;	
	
		$lastRow.find("td:first").find('span').text(rowCount); 
			if($("#hTxtFldFnaReviewFlag").val() == "U"  || $("#hTxtFldFnaReviewFlag").val() == ""){ 
					$lastRow.find("td:eq(0)").find('input:eq(0)').val(col);
			}
			
			var infoDetsArr = new Array();
	
			for(var data in dataset){
				var col = dataset[data];
				var txtfldCOBObjetve;//Proposed
				var txtfldCOBRetrmntPrcnt;//Proposed
				var txtFldCOBRegDeposit;//Proposed
				var txtFldCOBDepositFreq;//Proposed
				var txtFldCOBPeriodRegDeposit;//Proposed
				
				var txtFldCOBDescription;//Proposed
				var txtFldCOBmainAccountHolder;//Proposed
				var txtFldCOBownershipType;//Proposed
				switch(data){
				
				case "cashBankId": 
					$lastRow.find("td:eq(0)").find('input:eq(1)').val(col); 
					break;
					
				case "cbRefId": 
					$lastRow.find("td:eq(0)").find('input:eq(2)').val(col); 
					if(!isEmpty(col)){$lastRow.find("td:eq(0)").find('input:eq(2)').addClass("rowrefid");}
					break;
					
				case "fnaDescription":
					$lastRow.find("td:eq(2)").find('input:eq(0)').val(col); 
					txtFldCOBDescription=col;
					break;
					
				case "mainAccountHolder": 
					/*selectNullvalChk($lastRow.find("td:eq(2)").find('select:eq(0)'),col);*/
					$lastRow.find("td:eq(2)").find('select:eq(0)').val(col);
					txtFldCOBmainAccountHolder=col;
					break;
					
				case "suppAccountHolder": 
					$lastRow.find("td:eq(2)").find('input:eq(1)').val(col); 
					break;
				 
				case "relationship": 
					/*selectNullvalChk($lastRow.find("td:eq(2)").find('select:eq(2)'),col);*/
					$lastRow.find("td:eq(2)").find('select:eq(2)').val(col);
					break;
				 
				case "ownershipType": 
					/*selectNullvalChk($lastRow.find("td:eq(2)").find('select:eq(1)'),col);*/
					$lastRow.find("td:eq(2)").find('select:eq(1)').val(col);
					txtFldCOBownershipType=col;
					break;
					
					
				case "bankName": 
					$lastRow.find("td:eq(3)").find('input:eq(1)').val(col); 			
					break;
					
				case "bankAccNo": 
					$lastRow.find("td:eq(3)").find('input:eq(0)').val(col); 			
					break;
				
				case "accountType": 
					selectNullvalChk($lastRow.find("td:eq(3)"),col);
					break;
				
				case "currentBalance": 
					$lastRow.find("td:eq(4)").find('input:eq(0)').val(col); 
					break;
					
				case "regularDeposit":
					$lastRow.find("td:eq(6)").find('input:eq(0)').val(col); 
					txtFldCOBRegDeposit=col;
					break;
					
				case "periodRegularDeposit":
					$lastRow.find("td:eq(6)").find('input:eq(7)').val(col); 
					txtFldCOBPeriodRegDeposit=col;
					break;
					
				case "depositFrequency":
					selectNullvalChk($lastRow.find("td:eq(6)"),col);
					txtFldCOBDepositFreq=col;
					break;
					
				case "periodFrom":
					$lastRow.find("td:eq(6)").find('input:eq(1)').val(col); 
					break;
						
				case "periodTo":
					$lastRow.find("td:eq(6)").find('input:eq(2)').val(col); 
					break;
					
				case "objective":
					selectNullvalChk($lastRow.find("td:eq(5)"),col);
					txtfldCOBObjetve=col;
					break;
				
				case "retirementPrcnt":
					$lastRow.find("td:eq(5)").find('input:eq(0)').val(col); 
					txtfldCOBRetrmntPrcnt=col;
					break;
					
				case "childName":
					/*selectNullvalChk($lastRow.find("td:eq(5)").find('select:eq(1)'),col);*/
					$lastRow.find("td:eq(5)").find('select:eq(1)').val(col);
					break;
				
					
				case "remarks":
					$lastRow.find("td:eq(6)").find('input:eq(3)').val(col); 
					break;	
				
				case "bankAccCrtdBy": 
					$lastRow.find("td:eq(6)").find('input:eq(4)').val(col);
					infoDetsArr.push(col);				
					break;
					
				case "bankAccCrtdDate":
					$lastRow.find("td:eq(6)").find('input:eq(5)').val(col);
					infoDetsArr.push(col);
					break;
					
				case "bankAccModifiedBy":
					infoDetsArr.push(col);
					break;
					
				case "bankAccModifiedDate":
					infoDetsArr.push(col);
					break;	
				}			 
				$lastRow.find("td:eq(5)").find('input:eq(1)').val(txtfldCOBObjetve + " @ " +  txtfldCOBRetrmntPrcnt + "%"); //Proposed 
				$lastRow.find("td:eq(6)").find('input:eq(8)').val("$" + txtFldCOBRegDeposit + " " + txtFldCOBDepositFreq  + ", " + "For " + txtFldCOBPeriodRegDeposit + " years"); //Proposed
				$lastRow.find("td:eq(2)").find('input:eq(2)').val(txtFldCOBDescription + ",  " +  txtFldCOBmainAccountHolder + ", "  +  txtFldCOBownershipType +" Ownership"); //Proposed
			}
	}else if(dataset == null){
		
	
		var owner = $lastRow.find("td:eq(2)").find('select:eq(1)').val();
		var objective = $lastRow.find("td:eq(5)").find('select:eq(0)').val() ;
	
	
		setCashAtBankToAsset($lastRow);
	
	
		if(objective == "Retirement"){
		
			if(!(owner == "Spouse" )){
				
				syncCashAtTblRow($lastRow);//Sync Cash at bank to retirement
			}
		}
		
		
		 openDivCobObject($lastRow.find("td:eq(5)").find('select:eq(0)'),$lastRow.find("td:eq(5)").find('input:eq(0)'),$lastRow.find("td:eq(5)").find('select:eq(1)'));
			
	
//	DHTML CRUD ICONS
		crudicons(null,'cashOfBanksTable','SelcashOfBanks','CobERow','CobDRow');
	
}

 
}


//DHTML SELECT ALL
function SelAllcashOfBanks(obj){
	
	if($(obj).is(":checked")){
		
		$('#cashOfBanksTable tbody tr').find("td:eq(1)").find("input[type=checkbox]").prop("checked",true);
		
		$("#CobDRow").attr("disabled",false);
		$('#cashOfBanksTable tbody tr').addClass("selected");
		
		var $rowCount = $('#cashOfBanksTable tbody tr').length;
		
		if($rowCount == 0){
			$(obj).prop("checked",false);
			/*$("#CobERow").attr("disabled",true);
			$("#CobDRow").attr("disabled",true);*/
		}else if($rowCount == 1){
			$("#CobERow").attr("disabled",false);
			$("#CobDRow").attr("disabled",false);
		}else if($rowCount > 1){
			/*$("#CobERow").attr("disabled",true);*/
			$("#CobDRow").attr("disabled",false);
		}
		
	}else{
		
		$('#cashOfBanksTable tbody tr').find("td:eq(1)").find("input[type=checkbox]").prop("checked",false);
		
		$('#cashOfBanksTable tbody tr').removeClass("selected");
		
		/*$("#CobERow").attr("disabled",true);
		$("#CobDRow").attr("disabled",true);*/
		
	}
	


}


/*Edit Row Click */
$("#CobERow").on("click",function(){
	CobVRow();
});


/*View Row Click */
function CobVRow(){
	var isOneRowSelected=0;
	var $rowCount = $('#cashOfBanksTable tbody tr').length;	
	var $lastRow = $("#cashOfBanksTable tbody tr:last");	
	
	if($rowCount<1){
		applyToastrAlert("Insert rows before edit/view");
		return;
	} 
	

/*	$("#cashOfBanksTable tbody tr").each(function(){
		var $row = $(this);   
		$row.removeClass('selected');  
		$(this).removeAttr("style"); 
		$row.find("td").removeAttr("style");
	});*/
	
	
	
	$("#cashOfBanksTable tbody").find('input[name="radCobSelect"]').each(function(){ //Checkbox selection
		var $curElm=$(this);
		if($curElm.is(":checked")){ 
			isOneRowSelected++;
		}
	});
	
	
	if(isOneRowSelected > 1){ 
		applyToastrAlert("More than one rows selected.Select one row only");
		return;
	}
	
	$("#cashOfBanksTable tbody").find('input[name="radCobSelect"]').each(function(){ //Checkbox selection
		var $curElm=$(this);
		if($curElm.is(":checked")){ 
			var $row = $curElm.parents("tr");                                    
			var $mode = $curElm.parents("tr").find("td:first").find('input:eq(0)').val(); 
			$curElm.prop("checked",false);
	     	 $curElm.parents("tr").removeClass('selected');
	     	 
			if(($mode == INS_MODE) || ($mode == UPD_MODE) ){
				
				 var $RowId=$row.index();
				 
//				 $curElm.parents("tr").find("td:first").find('input:eq(0)').val($mode);
				 
				 $(this).parents("tr").find("td").find("input.editable,select.editable").each(function(){
						$(this).attr("disabled",false); 
						$row.removeClass('selected');  
						$(this).parent().css({border:'1px solid green'});
						$row.css({border:'1px solid green'});
						$row.find("td").css({border:'1px solid green'}); 
					});  
	 
				 	CobRdlyflds($mode);
					Cobfilldlgval($row);
					
					openDivCobObject($row.find("td:eq(5)").find('select:eq(0)'),$row.find("td:eq(5)").find('input:eq(0)'),$row.find("td:eq(5)").find('select:eq(1)'));
					showFIPAModel('Cob_Dialog','Cash At Bank Details');  
					$("#Cob_Dialog").find(".modal-footer").find("button:eq(0)").removeClass("hidden");//instant save added line
					
					$('#Cob_Dialog').on('shown.bs.modal', function () {
	
					/*$("#Cob_Dialog").find("select[id=txtFldDlgMainAccHolderName]").focus();*/
						$("#Cob_Dialog").find("input[id=txtFldDlgDescription]").focus();
						$("#Cob_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
							 if(!validateCobDetails())return; 
						
							 if(!isEmpty($RowId) && !($RowId==undefined)){  
								 Cobfilldomval($RowId,$row); 
							 }  
						     
							 openDivCobObject($row.find("td:eq(5)").find('select:eq(0)'),$row.find("td:eq(5)").find('input:eq(0)'),$row.find("td:eq(5)").find('select:eq(1)'));
	
						     
							 syncCashAtTblRow($row);
							 setCashAtBankToAsset($row);
							 
								 	  
							
							 $('#Cob_Dialog').modal('hide'); 
							
							 CobClearFlds();
							
							 crudicons(null,'cashOfBanksTable','SelcashOfBanks','CobERow','CobDRow');
									
						});
					
						$("#Cob_Dialog").find(".modal-footer").find("button:eq(1)").on("click",function(){
							crudicons(null,'cashOfBanksTable','SelcashOfBanks','CobERow','CobDRow');
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
$("#CobDRow").on("click",function(){ 
	var flg=true;
	var rowCount = cashOfBanksTable.row().count();
	if(rowCount<1){
		applyToastrAlert("Insert rows before edit/view");
		flg=false;
		return;
	}
	var isOneRowSelected=false;
	$('#cashOfBanksTable tbody').find('input[type=checkbox]').each(function(){
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
				 
				$('#cashOfBanksTable tbody').find('input[type=checkbox]').each(function(){
					if($(this).is(":checked")){
						
						 
						var row = $(this).parents("tr");                                    
						var mode = $(this).parents("tr").find("td:first").find('input:eq(0)').val(); 
						var refId=$(this).parents("tr").find("td:eq(0)").find("input:eq(2)").val();//Retirement Reference 
			 
						var refFlg=$(this).parents("tr").find("td:eq(0)").find("input").hasClass("rowrefid"); 
						 
//						if(isValidObject(refId)){   
							var message=false; 
							
							$("#IncAssRetPlgtbl tbody").find("tr").find("td:eq(0)").find("input:eq(2)").each(function(){
				            	   if(refId == $(this).val()){ 
				            		   applyErrorToastrAlert("There is row exists in retirement planning section, will also be deleted");
//				            		   IncAssRetPlgtbl.row($(this).closest("tr")).remove().draw();
				            		   $(this).closest("tr").hide();
				            		   $(this).parents("tr").find("td:first").find('input:eq(0)').val("D");
				            	   }
				               });
							
							
//							cashOfBanksTable.row($(this).closest("tr")).remove().draw();
							row.hide();
							row.find("td:first").find('input:eq(0)').val("D");
							setCashAtBankToAsset(row); 
						 
//						}else{
							
//							cashOfBanksTable.row($(this).closest("tr")).remove().draw();
//							$(this).closest("tr").hide();
//							$(this).parents("tr").find("td:first").find('input:eq(0)').val("D");
//							setCashAtBankToAsset($(this).closest("tr"));
//						}  
						 
						
//						if(!isValidObject($(this).parents("tr").find("td:eq(0)").find("input.rowrefid")) &&  !refFlg  ){
//							if(refId.val() == $(this).val()){
//								
////								cashOfBanksTable.row($(this).closest("tr")).remove().draw();
//								$(this).closest("tr").hide();
//								$(this).parents("tr").find("td:first").find('input:eq(0)').val("D");
//								setCashAtBankToAsset($(this).closest("tr"));
//							}
//						}
						
						
//						Cobfilldlgval(row);//instant save added line
//						instantCobSave(null,DEL_MODE); //instant save added line	
						$(this).attr("checked",false); 
						
					}
				}); 
				
				reOrderVisibleRows("IncAssRetPlgtbl");  
				reOrderVisibleRows("cashOfBanksTable");
				
				
				/*$('#cashOfBanksTable tbody tr').find('td:eq(0) input.rowrefid').each(function(){
					
					var oldval = $(this).val();
					var bankrowindex= $(this).closest("tr").index();
					var newval = "CAB_"+bankrowindex;
					
					
					$("#IncAssRetPlgtbl tbody").find("tr").find("td:eq(0)").find("input.rowrefid").each(function(){
			     	   if(oldval == $(this).val()){
			     		   $(this).val(newval);
			     	   }
			        });
					
					$(this).val(newval);
				});*/
				/**/
				
					$('#confirmationalertmsgdiv').modal('hide');  
				  	
//					DHTML CRUD ICONS
					var rc = cashOfBanksTable.row().count();
					if(rc ==0){
						$("#SelcashOfBanks").prop("checked",false);
						crudicons(this,'cashOfBanksTable','SelcashOfBanks','CobERow','CobDRow');
					}
//					DHTML CRUD ICONS
			  });
			$('#confirmationalertmsgdiv').find(".modal-footer").find("button:eq(1)").click(function (){ 
				  	$('#confirmationalertmsgdiv').modal('hide');  
				  	
			  });
			
		});
		
	}
	
});

/*Clear Fields */
function CobClearFlds(){ 
	
	$("#Cob_Dialog").find("input[type=text]").val("");
	$("#Cob_Dialog").find("textarea").val("");
	$("#Cob_Dialog").find("select").val("");
}

/*Disabled/Readonly Fields */
function CobRdlyflds(mode){ 
	 
	
	 if(mode == QRY_MODE ){
			$("#Cob_Dialog :input").prop("disabled", true); 
	 } else if((mode == INS_MODE) || (mode == UPD_MODE) ){
			$("#Cob_Dialog :input").prop("disabled", false);
	 }
}

/*Validation */
function validateCobDetails(){
	  
//		if(!(validateFocusFlds('Cob_Dialog','txtFldDlgMainAccHolderName', MAIN_HOLDER_NAME))) return;
//		if(!(validateFocusFlds('Cob_Dialog','selDlgCOBOwnershipType', OWNER_TYPE))) return;
//		if(!(validateFocusFlds('Cob_Dialog','txtFldDlgCOBBankName', BANK_NAME))) return;
//		if(!(validateFocusFlds('Cob_Dialog','txtFldDlgCOBBankAccNo', BANK_NO))) return;
//		if(!(validateFocusFlds('Cob_Dialog','txtFldDlgCOBCurBalance', COB_BALANCE))) return;
	
	  return true; 
}


function valCobTbl(){  	
	var $RowCount = cashOfBanksTable.rows().count();

	 var valid=true;
	if($RowCount > 0 ){  
		$("#cashOfBanksTable tbody tr").each(function(){
			var $lastRow=$(this); 
			 
//			if(!(validateFocusDhtmlFlds($lastRow.find("td:eq(2)").find('select:eq(0)'), MAIN_HOLDER_NAME))){valid=false;return false;}; 
//			if(!(validateFocusDhtmlFlds($lastRow.find("td:eq(6)").find('input:eq(0)'), BANK_NAME))){valid=false;return false;}; 
//			if(!(validateFocusDhtmlFlds($lastRow.find("td:eq(7)").find('input:eq(0)'), BANK_NO))){valid=false;return false;};
//			if(!(validateFocusDhtmlFlds($lastRow.find("td:eq(9)").find('input:eq(0)'), COB_BALANCE))){valid=false;return false;};
//			
		});    
	}  
	
	return valid;
}

/*Mandatory Fields Tooltip*/ 
$("#txtFldDlgMainAccHolderName,#txtFldDlgCOBBankName,#txtFldDlgCOBBankAccNo").on("change",function(){
	if(!isEmpty($(this).val())){
	$(this).removeClass("mandatoryFillFlds");
	$(this).qtip('disable');
	$(this).qtip('destroy',true);
	}
});
 


/* Filling Model Fields*/
function Cobfilldlgval($lastRow){
	
//	  $('#Cob_Dialog #txtFldDlgCashBankMode').val($lastRow.find("td:eq(0)").find('input:eq(0)').val());//instant save added line
	  $('#Cob_Dialog #txtFldDlgCashBankId').val($lastRow.find("td:eq(0)").find('input:eq(1)').val());
	  $('#Cob_Dialog #txtFldDlgCashBankRefId').val($lastRow.find("td:eq(0)").find('input:eq(2)').val());
	  $('#Cob_Dialog #txtFldDlgDescription').val($lastRow.find("td:eq(2)").find('input:eq(0)').val());
	  $('#Cob_Dialog #txtFldDlgMainAccHolderName').val($lastRow.find("td:eq(2)").find('select:eq(0)').val());
	  $('#Cob_Dialog #txtFldDlgSuppAccHolderName').val($lastRow.find("td:eq(2)").find('input:eq(1)').val());
	  $('#Cob_Dialog #selDlgCOBRelationship').val($lastRow.find("td:eq(2)").find('select:eq(2)').val());
	  $('#Cob_Dialog #selDlgCOBOwnershipType').val($lastRow.find("td:eq(2)").find('select:eq(1)').val());
	  $('#Cob_Dialog #txtFldDlgCOBBankName').val($lastRow.find("td:eq(3)").find('input:eq(1)').val());
	  $('#Cob_Dialog #txtFldDlgCOBBankAccNo').val($lastRow.find("td:eq(3)").find('input:eq(0)').val());
	  $('#Cob_Dialog #selDlgCOBAccountType').val($lastRow.find("td:eq(3)").find('select:eq(0)').val());
	  $('#Cob_Dialog #txtFldDlgCOBCurBalance').val($lastRow.find("td:eq(4)").find('input:eq(0)').val());
	  $('#Cob_Dialog #txtFldDlgCOBRegDeposit').val($lastRow.find("td:eq(6)").find('input:eq(0)').val());
	  $('#Cob_Dialog #selDlgCOBDepositFreq').val($lastRow.find("td:eq(6)").find('select:eq(0)').val());
	  $('#Cob_Dialog #txtFldDlgCOBPerFrom').val($lastRow.find("td:eq(6)").find('input:eq(1)').val());
	  $('#Cob_Dialog #txtFldDlgCOBPerTo').val($lastRow.find("td:eq(6)").find('input:eq(2)').val());
	  $('#Cob_Dialog #selDlgCOBObjective').val($lastRow.find("td:eq(5)").find('select:eq(0)').val()); 
	  $('#Cob_Dialog #txtFldDlgCOBRetrmntPrcnt').val($lastRow.find("td:eq(5)").find('input:eq(0)').val()); 
	  $('#Cob_Dialog #selDlgCOBChildName').val($lastRow.find("td:eq(5)").find('select:eq(1)').val());
	  $('#Cob_Dialog #txtFldDlgCOBRemarks').val($lastRow.find("td:eq(6)").find('input:eq(3)').val());
	  $('#Cob_Dialog #txtFldDlgCOBCrtdBy').val($lastRow.find("td:eq(6)").find('input:eq(4)').val());
	  $('#Cob_Dialog #txtFldDlgCOBCrtdDate').val($lastRow.find("td:eq(6)").find('input:eq(5)').val());
	  $('#Cob_Dialog #txtFldDlgCOBYrsToRet').val($lastRow.find("td:eq(6)").find('input:eq(6)').val());
	  $('#Cob_Dialog #txtFldDlgCOBPeriodRegDeposit').val($lastRow.find("td:eq(6)").find('input:eq(7)').val());
	  
}

/* Filling Table Fields*/
function Cobfilldomval($RowId,$row){
	$row.find("td:eq(0)").find('input:eq(1)').val($('#txtFldDlgCashBankId').val())  ;
	$row.find("td:eq(0)").find('input:eq(2)').val($('#txtFldDlgCashBankRefId').val());
	$row.find("td:eq(2)").find('input:eq(0)').val($("#txtFldDlgDescription").val()); 
	$row.find("td:eq(2)").find('select:eq(0)').val($("#txtFldDlgMainAccHolderName").val()); 
	$row.find("td:eq(2)").find('input:eq(1)').val($("#txtFldDlgSuppAccHolderName").val());
	$row.find("td:eq(2)").find('select:eq(2)').val($("#selDlgCOBRelationship").val()); 
	$row.find("td:eq(2)").find('select:eq(1)').val($("#selDlgCOBOwnershipType").val()); 
	$row.find("td:eq(3)").find('input:eq(1)').val($("#txtFldDlgCOBBankName").val()); 
	$row.find("td:eq(3)").find('input:eq(0)').val($("#txtFldDlgCOBBankAccNo").val()); 
	$row.find("td:eq(3)").find('select:eq(0)').val($("#selDlgCOBAccountType").val()).attr("disabled",true); 
	$row.find("td:eq(4)").find('input:eq(0)').val($("#txtFldDlgCOBCurBalance").val()); 
	$row.find("td:eq(6)").find('input:eq(0)').val($("#txtFldDlgCOBRegDeposit").val()); 
	$row.find("td:eq(6)").find('select:eq(0)').val($("#selDlgCOBDepositFreq").val());
	$row.find("td:eq(6)").find('input:eq(1)').val($("#txtFldDlgCOBPerFrom").val()); 
	$row.find("td:eq(6)").find('input:eq(2)').val($("#txtFldDlgCOBPerTo").val()); 
	$row.find("td:eq(5)").find('select:eq(0)').val($("#selDlgCOBObjective").val()); 
	$row.find("td:eq(5)").find('input:eq(0)').val($("#txtFldDlgCOBRetrmntPrcnt").val()); 
	$row.find("td:eq(5)").find('select:eq(1)').val($("#selDlgCOBChildName").val());
	$row.find("td:eq(6)").find('input:eq(3)').val($("#txtFldDlgCOBRemarks").val());
	$row.find("td:eq(6)").find('input:eq(4)').val($('#txtFldDlgCOBCrtdBy').val());
	$row.find("td:eq(6)").find('input:eq(5)').val($('#txtFldDlgCOBCrtdDate').val());
	  
	$row.find("td:eq(6)").find('input:eq(6)').val($("#txtFldDlgCOBYrsToRet").val());
	$row.find("td:eq(6)").find('input:eq(7)').val($("#txtFldDlgCOBPeriodRegDeposit").val());
	$row.find("td:eq(5)").find('input:eq(1)').val($("#selDlgCOBObjective").val() + " @ " +  $("#txtFldDlgCOBRetrmntPrcnt").val() + "%"); //Proposed 
	$row.find("td:eq(6)").find('input:eq(8)').val("$" + $("#txtFldDlgCOBRegDeposit").val() + " " + $("#selDlgCOBDepositFreq").val()  + ", " + "For " + $("#txtFldDlgCOBPeriodRegDeposit").val() + " years"); //Proposed
	$row.find("td:eq(2)").find('input:eq(2)').val($("#txtFldDlgDescription").val() + ",  " +  $("#txtFldDlgMainAccHolderName").val() + ", "  +  $("#selDlgCOBOwnershipType").val() +" Ownership"); //Proposed
	//	$row.find("input[type=text]").prop("readonly",true);//instant save added line
//	$row.find("select").prop("disabled",true);//instant save added line

	setCashAtBankToAsset($row); 
	 
}


/*###########################################################################################################################################################*/


function UpdCastAtBankChildName(existingName,newchildname){
  
	var table = document.getElementById("cashOfBanksTable"); 
	var tbody = table.tBodies[0];
	var rowCount = tbody.rows.length;
	var editFlag = 0;
	
 
	
	var cashAtBankindex = cashOfBanksTable.row().count();
 
		if(cashAtBankindex>0){
	for(var editrow=0;editrow<rowCount;editrow++){ 
			 var editCurRow = tbody.rows[editrow];   
			 if( existingName == editCurRow.cells[17].childNodes[0].value ){  
				 var RowId=editCurRow.rowIndex; 
				 table.rows[RowId].cells[17].childNodes[0].value = newchildname; 	 
			 }
			 
			 
			 
	}
	}
}

$("#selDlgCOBObjective").on("change",function(){ 
	openDivCobObject($("#selDlgCOBObjective"),$("#txtFldDlgCOBRetrmntPrcnt"),$("#selDlgCOBChildName"));
	if($("#selDlgCOBObjective").val() == "Retirement"){	 
		mandatoryFldForRetirement($(this),null,'COB'); 
	} 
});


function openDivCobObject(elmid,ret,chld){ 
	var elmval=elmid.val();
	var yrtoret = $("#retYrstoret").val();
	if(!isEmpty(elmval)){ 
		if(elmval == "Retirement"){ 
			$("#Cob_Dialog #COBRetirementPrcnt").css("display","block");
			$("#Cob_Dialog #COBChildName").css("display","none");
			$("#Cob_Dialog #txtFldDlgCOBYrsToRet").val(yrtoret).prop("readonly",true); 
			chld.val("");
		}else if(elmval == "Child Education"){
			$("#Cob_Dialog #COBChildName").css("display","block");
			$("#Cob_Dialog #COBRetirementPrcnt").css("display","none");
			$("#Cob_Dialog #txtFldDlgCOBYrsToRet").val("").prop("readonly",true);
			ret.val("");
		}else if(elmval == ""){
			$("#Cob_Dialog #COBChildName").css("display","none");	
			$("#Cob_Dialog #COBRetirementPrcnt").css("display","none");
			$("#Cob_Dialog #txtFldDlgCOBYrsToRet").val("").prop("readonly",true); 
			chld.val("");
			ret.val("");
		}
	}else{ 
			$("#Cob_Dialog #COBChildName").css("display","none");	
			$("#Cob_Dialog #COBRetirementPrcnt").css("display","none");
			$("#Cob_Dialog #txtFldDlgCOBYrsToRet").val("").prop("readonly",true);
			chld.val("");
			ret.val(""); 
	}
	
	return;
}
 
$("#txtFldDlgCOBPerFrom").change(function(){ 
	 checkDateFormat($(this));
	if(!chkFromToDateValidation('txtFldDlgCOBPerFrom','txtFldDlgCOBPerTo',"Period To Date should greater than the Period From Date")); 
});

/*$("#txtFldDlgCOBPerFrom").change(function(){
	 checkDateFormat($(this));
});*/

$("#txtFldDlgCOBPerTo").change(function(){  
	checkDateFormat($(this));
	if(!chkFromToDateValidation('txtFldDlgCOBPerFrom','txtFldDlgCOBPerTo',"Period To Date should greater than the Period From Date"));
}); 

/*$("#txtFldDlgCOBPerTo").change(function(){    
	checkDateFormat($(this));
}); */



function syncCashAtTblRow($tblCabRow){
	
	
//	var rowIndex = $tblCabRow.index();
	var rowRefID = $tblCabRow.find("td:eq(0)").find('input:eq(2)').val();//"CAB_"+rowIndex;
	
	var owner = $tblCabRow.find("td:eq(2)").find('select:eq(1)').val();
	var objective = $tblCabRow.find("td:eq(5)").find('select:eq(0)').val() ;

	if(objective == "Retirement"){
		
		if(!(owner == "Spouse" )){
			
			var rowexist = chkRPIncAssetRowExist(rowRefID);
			var $tblRetRow = null;
			
			if(rowexist == null){
				getincassrtRows(null,"N");
				$tblRetRow =  $("#IncAssRetPlgtbl tbody tr:last"); 
			}else{
				$tblRetRow = rowexist;
			}
			
			
			$tblCabRow.find("td:eq(0)").find('input:eq(2)').addClass("rowrefid").val(rowRefID);
			$tblRetRow.find("td:eq(0)").find('input:eq(2)').addClass("rowrefid").val(rowRefID);
			
			var pkid = $tblCabRow.find("td:eq(0)").find('input:eq(1)').val();
			//if(pkid.indexOf("AS_") == 0){
				if(isEmpty($tblRetRow.find("td:eq(0)").find('input:eq(1)').val())){
					$tblRetRow.find("td:eq(0)").find('input:eq(1)').val(makeid(17));
				}
					
			//}
				
				
				var retselfage = $("#retSelfAge").val();
				var projselfage = $("#retSelfProjage").val();
				 var savingdeprate = $("#caSavingDeprate").val();
				 savingdeprate = isEmpty(savingdeprate)?0:Number(savingdeprate);

				var intretslfage=isEmpty(retselfage)? 0 :Number(retselfage); 
				var totAge=isEmpty(projselfage)? 0 :Number(projselfage);
				
				 var basedon=$("#retAgeBasedon").val().toUpperCase();
				 
				 var bankname = $tblCabRow.find("td:eq(3) input:eq(1)").val();
				 var acctno= $tblCabRow.find("td:eq(3) input:eq(0)").val();
				 var currentbalance = $tblCabRow.find("td:eq(4) input:eq(0)").val();
				 
				 var rspamt = $tblCabRow.find("td:eq(6) input:eq(0)").val();
				 var rspfreq = $tblCabRow.find("td:eq(6) select:eq(0)").val();
				 var rspfromdate = $tblCabRow.find("td:eq(6) input:eq(1)").val();
				 var rsptodate = $tblCabRow.find("td:eq(6) input:eq(2)").val();
				 
				 rspamt = isEmpty(rspamt)?0:Number(rspamt);
				 
				 var invobj = $tblCabRow.find("td:eq(5) select:eq(0)").val(); 
				 var retirementprcnt = $tblCabRow.find("td:eq(5) input:eq(0)").val();
				var yrstoret = $tblCabRow.find("td:eq(6)").find('input:eq(6)').val();
				
				 var TopUpAmt=0; 

				 if(!isEmpty(rspfreq)){
					 
					 TopUpAmt=getFrequencyDigit(rspfreq)
				}
				
//				 rspfreq = (!isEmpty(rspfreq) ? (rspfreq.toUpperCase() == "SINGLE" ? freq.toUpperCase() : "REGULAR") : "SINGLE");
//				 rspfreq = ((rspamt ==0) ? "SINGLE" : "REGULAR");
				 
				  
				 
				 retirementprcnt = (!isEmpty(retirementprcnt) ? (retirementprcnt/100) : (100/100)); 
//				var $tblRetRow=$("#IncAssRetPlgtbl tbody tr:last"); 
				 
				 
				 $tblRetRow.find("td:eq(3)").find('input:eq(0)').val("Cash At Bank");
					
				 var desc = isEmpty(bankname) ? "" : bankname +""+isEmpty(acctno) ? "" :"["+acctno+"]";
				 $tblRetRow.find("td:eq(2)").find('input:eq(0)').val(desc); 
					$tblRetRow.find("td:eq(4)").find('select:eq(0)').val("SINGLE"); 	
					
					var amountofincome  = 0;
					var remainingyrs = 0;
//					console.log("v--->"+rspamt);
					
					 if(isEmpty(rspamt)){
						 						 
						 amountofincome  = FVCalculation(savingdeprate/100, yrstoret,0, -1*(currentbalance),  1);
						 amountofincome = amountofincome * retirementprcnt;
					 }else{
						 
//						 var currentDate = new Date();

//						 var month = currentDate.getMonth()+1;
//						 var day = currentDate.getDate();

//						 var sysdate = ((''+day).length<2 ? '0' : '') + day +'/'+ ((''+month).length<2 ? '0' : '') + month + '/' +  currentDate.getFullYear();
						 var sysdate = $("#hTxtFldSysDate").val();
						 var sysYear = sysdate.substring(6,10);
						 var date1 = isEmpty(rspfromdate) ? sysdate : rspfromdate.substring(0,6)+sysYear;
//						 var date1 = sysdate;
						 var date2 = isEmpty(rsptodate) ? sysdate : rsptodate;
						 
//						 console.log(date1 +"---------"+date2)
						 
						 var yearindiff = getYears(date1,date2);
						 
						 
						 remainingyrs = yrstoret -  yearindiff;
//						 console.log("remainingyrs--->"+remainingyrs);
						 var amt = rspamt * TopUpAmt;
//						 console.log("amt--->"+amt +",currentbalance->"+currentbalance+",yearindiff-------->"+yearindiff);
						 
						 var pvannlincome = FVCalculation(savingdeprate/100, yearindiff,(-1 * amt), (-1 * currentbalance),  1);
//						 pvannlincome = Math.sign(pvannlincome) == -1 ? pvannlincome : (-1 *pvannlincome);
//						 console.log("pvannlincome--->"+pvannlincome);
						 
						 if(remainingyrs > 0){
							 amountofincome  = FVCalculation(savingdeprate/100, remainingyrs ,0,  (-1 * pvannlincome),  1);	 
						 }else{
							 amountofincome =pvannlincome;
						 }
						 
//						 console.log("amountofincome--->"+amountofincome);
						 
						 amountofincome = amountofincome * retirementprcnt;
					 }
					 
//					 console.log("amountofincome--->"+amountofincome);
					
					$tblRetRow.find("td:eq(4)").find('input:eq(0)').val(Math.round(amountofincome)); 
					
					$tblRetRow.find("td:eq(4)").find('input:eq(1)').val();  
					
					$tblRetRow.find("td:eq(4)").find('input:eq(2)').val();  
					
					/*var owner=$("#selDlgCOBOwnershipType").val().toUpperCase(); */
					
					var owner="SELF"; 
					
					$tblRetRow.find("td:eq(5)").find('select:eq(0)').val(isEmpty(owner)? basedon :owner);	 
					
					$tblRetRow.find("td:eq(5)").find('input:eq(0)').val((isEmpty(intretslfage)) ? Number("0") : Number(intretslfage)); 
				 
//					$tblRetRow.find("td:eq(10)").find('input:eq(0)').val(rspfreq == "REGULAR" ? ((isEmpty(totAge)) ? Number("0") : Number(totAge)) : "");
					$tblRetRow.find("td:eq(5)").find('input:eq(1)').val("").prop("readonly",true);
					
					
					applyToastrAlert("Cash At Banks data will be flow back to Income and assets available for Retirement Section in Retirement Planning Screen!");
					 
					applyEventHandlers();
			  
			
			
			
		}
		else{
			
			
			deleteAllRetPlanByRefId(rowRefID);
			
			 applyErrorToastrAlert("There is row exists in retirement planning section, will also be deleted");
			
		}
		
	}
	 
	return true;
}


  
//function reverseCobSync($row){
////	All calling part is commentted 20/10/2018
//	//Retirement Data
//	var $rowref=$row.attr("rowrefid");
//		if(isValidObject($rowref)){ 
//	
//	var syncOn=$rowref.substring(0,3); 
//	
//	var ownership=$row.find("td:eq(5)").find('select:eq(0)').val(); 
//	var amount=$row.find("td:eq(9)").find('input:eq(0)').val(); 
//	var reginvamt=$row.find("td:eq(10)").find('input:eq(0)').val();
//	var freq=$row.find("td:eq(11)").find('select:eq(0)').val();
//	 var objofinv=$row.find("td:eq(14)").find('select:eq(0)').val();
//	 var cobobj;
//	 if(objofinv == "Retirement"){
//		 cobobj="Retirement Planning";
//	 }else if(objofinv == "Child Education"){
//		 cobobj="Education Planning";
//	 }else{
//		 cobobj="";
//	 }
//	var yrofret=$row.find("td:eq(15)").find('input:eq(0)').val();
//	var nameofchld=$row.find("td:eq(16)").find('select:eq(0)').val();
//	
//	
//	if(syncOn == "INV"){
//		$("#fnaInvestmentTbl tbody").find("tr[rowrefid="+$rowref+"]").each(function(){ 
//			applyToastrAlert("Cash At Bank data will be reflected back to Investment Screen !"); 
//			$(this).find("td:eq(2)").find('select:eq(0)').val(ownership);//ownership
//			$(this).find("td:eq(9)").find('input:eq(0)').val(amount);//amt invested
//			$(this).find("td:eq(23)").find('select:eq(0)').val(freq);//regfreq
//			$(this).find("td:eq(23)").find('input:eq(0)').val(reginvamt);//reqinvamt
//			$(this).find("td:eq(26)").find('select:eq(0)').val(cobobj);//objofinv
//			$(this).find("td:eq(27)").find('input:eq(0)').val(yrofret);//yrofret
//			$(this).find("td:eq(28)").find('select:eq(0)').val(nameofchld);//nameofchld
//			
//			 //Retirement table change
//			 var $rowref=$(this).attr("rowrefid");
//		 		if(isValidObject($rowref)){ 
////			 			syncInvestTblEditRow($(this));
//		 		}
//		});
//	}
//	 
//		}
//		
//}

 



function setCashAtBankToAsset(latestrow){
	
	var currselftotbal = 0,
		currspstotbal=0,
		currjointtotbal=0,
		
		savselftotbal = 0,
		savspstotbal=0,
		savjointtotbal=0,
		
		srsselftotbal = 0,
		srsspstotbal=0,
		srsjointtotbal=0,
		latestselfprcnt=0,
		latestspsprcnt=0,
		latestjointprcnt=0;
	
	var length  = cashOfBanksTable.rows().count();
	
//	console.log("------------>lCASH AT BANK Length:"+length);
	
	if(length>0){
		
		$('#cashOfBanksTable tbody tr').each(function(){
			
			var $lastRow = $(this);
			
			var mode  = $lastRow.find("td:eq(0)").find('input:eq(0)').val();
			var owner = $lastRow.find("td:eq(2)").find('select:eq(1)').val();
			var accttype = $lastRow.find("td:eq(3)").find('select:eq(0)').val();
			var currbalance = $lastRow.find("td:eq(4)").find('input:eq(0)').val();
			var objective = $lastRow.find("td:eq(5)").find('select:eq(0)').val() ;
			 
			var acctypetemp = accttype.toUpperCase();
			owner = owner.toUpperCase();
			
//			console.log("------------>lCASH AT BANK acctypetemp:"+acctypetemp+","+owner+","+currbalance);
			var prcnt = $lastRow.find("td:eq(5)").find('input:eq(0)').val() ;
			prcnt = isEmpty(prcnt) ? 0 : Number(prcnt / 100);
			
			var latestprcnt = latestrow.find("td:eq(5)").find('input:eq(0)').val();
			var lastprcnt = $lastRow.find("td:eq(5)").find('input:eq(0)').val();
			var latestowner = latestrow.find("td:eq(2)").find('select:eq(1)').val();
			var totalval = isEmpty(currbalance) ? 0 : (isNaN(currbalance) ? 0 : Number(currbalance) * Number(prcnt) );
			
			if(mode != "D"){
				
				if( owner == "SELF"){
					
					if(acctypetemp == "CURRENT" || acctypetemp == "FIXED" || acctypetemp == "SAVINGS"){
						
						if(objective == "Retirement"){
							currselftotbal += totalval;
						}	
						$("#casstSelfSavingfd").val(currselftotbal);
						latestselfprcnt = lastprcnt;
						$("#casstRpSavingfd").val(latestselfprcnt);
						
					}else if(acctypetemp == "SRS"){
						
						if(objective == "Retirement"){
							srsselftotbal += totalval;
						}
									
						$("#casstSelfSrs").val(srsselftotbal);
						if(latestowner == "SELF"){
							$("#casstRpSrs").val(latestprcnt);	
						}
						
							
					}
					
				}
				
				if( owner == "SPOUSE"){
					
					if(acctypetemp == "CURRENT" || acctypetemp == "FIXED" || acctypetemp == "SAVINGS"){
						
						if(objective == "Retirement"){
							currspstotbal += totalval;	
						}
						
						$("#casstSpsSavingfd").val(currspstotbal);	
						latestspsprcnt = lastprcnt;
						
						$("#casstSpsRpSavingfd").val(latestspsprcnt);
						
						
					}else if(acctypetemp == "SRS"){
						if(objective == "Retirement"){
							srsspstotbal += totalval;
						}
						
						$("#casstSpsSrs").val(srsspstotbal);
						if(latestowner == "SELF"){
							$("#casstSpsRpSrs").val(latestprcnt);
						}
					}
					
				}
				
		
				if( owner == "JOINT"){
					
					if(acctypetemp == "CURRENT" || acctypetemp == "FIXED" || acctypetemp == "SAVINGS"){
						if(objective == "Retirement"){
							currjointtotbal += totalval;
						}
					
						$("#casstFamSavingfd").val(currjointtotbal);
						latestjointprcnt = lastprcnt;
						$("#casstFamRpSavingfd").val(latestjointprcnt);
						
					}else if(acctypetemp == "SRS"){
						if(objective == "Retirement"){
							srsjointtotbal +=totalval;
						}
						
						$("#casstFamSrs").val(srsjointtotbal);
						if(latestowner == "SELF"){
							$("#casstFamRpSrs").val(latestprcnt);
						}
					}
					
				}
				
				
			}
			if(mode == "D"){
				
				if( owner == "SELF"){
					
					if(acctypetemp == "CURRENT" || acctypetemp == "FIXED" || acctypetemp == "SAVINGS"){
						
						/*if(objective == "Retirement"){
							currselftotbal += totalval;
						}*/	
						/*$("#casstSelfSavingfd").val(currselftotbal);
						latestselfprcnt = lastprcnt;*/
						$("#casstRpSavingfd").val("");
						
					}
					
				}
				
				if( owner == "SPOUSE"){
					
					if(acctypetemp == "CURRENT" || acctypetemp == "FIXED" || acctypetemp == "SAVINGS"){
						
						/*if(objective == "Retirement"){
							currspstotbal += totalval;	
						}
						
						$("#casstSpsSavingfd").val(currspstotbal);	
						latestspsprcnt = lastprcnt;
						alert("latestspsprcnt--"+latestspsprcnt);*/
						$("#casstSpsRpSavingfd").val("");
						
						
					}
					
				}
				
		
				if( owner == "JOINT"){
					
					if(acctypetemp == "CURRENT" || acctypetemp == "FIXED" || acctypetemp == "SAVINGS"){
						/*if(objective == "Retirement"){
							currjointtotbal += totalval;
						}
					
						$("#casstFamSavingfd").val(currjointtotbal);
						latestjointprcnt = lastprcnt;*/
						$("#casstFamRpSavingfd").val("");
						
					}
					
				}
				
				
			}
			
			
		});
	}
	 
	 
	calcSum(null, CASH_ASS.SUMOF_CASHASST_SELF);
	calcSum(null, CASH_ASS.SUMOF_CASHASST_SPS);
	calcSum(null, CASH_ASS.SUMOF_CASHASST_JOIN);
	

	
}
