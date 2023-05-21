/**
 * Master CPF Contribution Script
 */
var stafftype = $('#hTxtFldLoggedStfType').val();
var frmCpfContrib;

/*Datatable Initialisation*/

var mastContRateTbl=$('#mastContRateTbl').DataTable( {
	scrollY:"33vh",
	scrollX: true,
	autowidth:false,
    scrollCollapse:false,
   	searching: false,
   	ordering: false,
   	bLengthChange: false, 
   	dom: '<<"top" ip>flt>',
   	"order": [[ 1, "asc" ]], 
   	paging:false,
//   	fixedColumns:   {
//        leftColumns: 2, 
//    },  
//   	oLanguage: {"sEmptyTable": "No data available in table","sInfoEmpty": "No data available in table"},
   	columnDefs: [   	             
   	             { "width": '20px', "targets": [0,1]}, 
   	             {"className": "dt-center","targets": [0-18],"orderable": false,"searchable": false}],
	 fnDrawCallback: function(oSettings) {
		 if (oSettings._iDisplayLength > oSettings.fnRecordsDisplay()) { 
		    } 

	 }, 
}).draw(); 

 
function fipaInitPage(){
	
	showLoader();
	frmCpfContrib = document.forms[0];
	
	if(stafftype == STAFFTYPE_STAFF){ 
		$("#btnCpfConSave").addClass("hidden"); 
	}
	if(stafftype == STAFFTYPE_ADVISER){
		$("#btnCpfConSave").addClass("hidden");  
	}
	   
	   loadAllSymbols(); 
	   applyEventHandlers(); 
	   showTooltip('btnCpfConSave','Save Master CPF Contribution Details');
	   showTooltip('btnCpfConSrch','Search Master CPF Contribution Details');
	   showTooltip('AmsCpfCon','Add Row For Master CPF Contribution');
	   showTooltip('EmsCpfCon','Edit Row For Master CPF Contribution');
	   showTooltip('DmsCpfCon','Delete Row For Master CPF Contribution'); 
	   showTooltip('VmsCpfCon','View Row For Master CPF Contribution');
	    

	   
	   $("#dlgMsCpfContEffFrmpickr,#dlgMsCpfContEffTopickr,#srchcpfconeffFrom").datetimepicker(dateOptions).on("change",function(){
			 checkDateFormat($(this));   
	   });
		  
	   $("#dlgmscpfconeffFrom,#dlgmscpfconeffTo,#srchcpfconeffFrom").on("change",function(){
			 checkDateFormat($(this));  
	   });  
	   
		/*Master Pop Up URL*/

		$("#btnURL").css("display","none");
		$("#mainlayout #headerlayout").css("display","none");
		$("#mainlayout #sidebar-wrapper").css("display","none");
		$("#mainlayout #footerLayout").css("display","none");
		$("#layoutbody").removeAttr("class");
		$("#layoutbody").attr("class","col-md-12");
		 searchContRate();
/**/
	   
}



$("#srchcpfconeffFrom,#srchcpfconageGrp,#srchcpfconwageGrp").on("change",function(){
	mastContRateTbl.clear().draw();
});


$("#btnCpfConSave").on("click",function(){
 
	var rowCount = $("#mastContRateTbl tbody").find("tr").length;  
	if(rowCount > 0){ 
		enableComboWhenSubmit(frmCpfContrib); 
		frmCpfContrib.action = "CpfContributionSave.do";
		frmCpfContrib.submit();

	}
});



$("#btnCpfConSrch").on("click",function(){ 
	searchContRate();
});
 
function searchContRate(){
	showLoader();
	mastContRateTbl.clear().draw(); 
			var srchFldsArrCpfAll = ["srchcpfconeffFrom","srchcpfconageGrp","srchcpfconwageGrp"];
			var isAnySelected=true;
			$.each( srchFldsArrCpfAll, function( index, value ) {		
				 		
					if(!isEmpty($("#"+srchFldsArrCpfAll[index]).val())){
						//isAnySelected=true;								
					}
				 		
			});
			
			if(!isAnySelected){ 
				hideLoader();
				return false;
			}else{
			
			var srchCpfParams="";
			srchCpfParams += "&srchcpfconeffFrom="+encodeURIComponent(escape($("#srchcpfconeffFrom").val()));
			srchCpfParams += "&srchcpfconageGrp="+encodeURIComponent(escape($("#srchcpfconageGrp").val()));
			srchCpfParams += "&srchcpfconwageGrp="+encodeURIComponent(escape($("#srchcpfconwageGrp").val()));
		 	 			
			
			
			
		var parameter = "DBCALLFOR=CPF_CONTRB_SEARCH"+srchCpfParams;
		
		 
		ajaxCall(parameter,mastServletName,function(Data){
			var retval = Data;
			hideLoader()
		
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
					  
					if (key == "CPF_CONTRB_SEARCH"){ 
				       
						
						for ( var cont in value) {
							
							if (value.hasOwnProperty(cont)) { 
								
								var contvalue = value[cont];

								getMastCpfCbRows(contvalue); 
								
							}
						}
						
						 				
									
					}
					
				}
			}
		}
		});
 	}
}

 
/*Add Row Click */
$("#AmsCpfCon").on("click",function(){  
			mastCpfCbclearFlds();
			msCpfCbRdlyflds(INS_MODE);   
			
			$("#cpfcontribution,#employeeshare").find("input,select").prop("disabled",true);
			$("#cpfcontribution,#employeeshare").find("input,select").val("");
			showFIPAModel('MasterCpfContr_Dialog','Master CPF Contribution');   
			$('#MasterCpfContr_Dialog').on('shown.bs.modal', function () {
				$("#MasterCpfContr_Dialog").find(".modal-footer").find("button:eq(0)").text("Add");
				$("#MasterCpfContr_Dialog").find("input[id=dlgmscpfconeffFrom]").focus(); 
				$("#MasterCpfContr_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){ 
					  if(!msCpfCbvalidateDets())return; 
					  getMastCpfCbRows(null); 
						$('#MasterCpfContr_Dialog').modal('hide'); 
				  });  
			});
			
			
});

/*Populate Data */
function getMastCpfCbRows(dataset){ 
 
var cell0 = '<span></span>'+
'<input type="hidden" name="txtFldCpfConMode" readonly="true" value="'+INS_MODE+'" class="fipaMode"/><input type="hidden" name="contrId">';
 
//var cell1 = '<input type="checkbox" name="radCpfConSelect" />'; 

var cell1 = '<div class="checkbox checkbox-primary text-center"><input type="checkbox" name="radCpfConSelect"/><label>&nbsp;</label></div>'; 



var cell2 = '<input type="text" name="effFrom" class="form-control editable"   onmouseover="fipaTooltip(this);" maxlength="10"/>';
var cell3 = '<input type="text" name="effTo" class="form-control editable"   onmouseover="fipaTooltip(this);"  maxlength="10"/>';
var cell4 = '<select name="ageGrp" class="form-control editable"   onmouseover="fipaTooltip(this);"></select>';
var cell5 = '<select   name="wageGrp" class="form-control editable"   onmouseover="fipaTooltip(this);"></select>';
var cell6 = '<input type="text" name="totBaseValue" class="form-control editable"   onmouseover="fipaTooltip(this);" />';
var cell7 = '<select   name="totBaseOn" class="form-control  editable"   onmouseover="fipaTooltip(this);"/></select>';
var cell8 = '<input type="text" name="totBonusValue" class="form-control editable"   onmouseover="fipaTooltip(this);"/>';
var cell9 = '<select  name="totBonusOn" class="form-control editable"   onmouseover="fipaTooltip(this);"/></select>';
var cell10 = '<input type="text" name="totBonusLess" class="form-control editable"   onmouseover="fipaTooltip(this);"/>';
var cell11 = '<input type="text" name="totMaxLimit" class="form-control editable"   onmouseover="fipaTooltip(this);"  maxlength="150"/>';
var cell12 = '<input type="text" name="empBaseVal" class="form-control editable"   onmouseover="fipaTooltip(this);"/>';
var cell13 = '<select  name="empBaseOn" class="form-control editable"   onmouseover="fipaTooltip(this);"/></select>';
var cell14 = '<input type="text" name="empBonusValue" class="form-control editable"   onmouseover="fipaTooltip(this);"/>';
var cell15 = '<select  name="empBonusOn" class="form-control editable"   onmouseover="fipaTooltip(this);"/></select>';
var cell16 = '<input type="text" name="empBonusLess" class="form-control editable"   onmouseover="fipaTooltip(this);"/>';
var cell17 = '<input type="text" name="empMaxLimit" class="form-control editable"   onmouseover="fipaTooltip(this);" maxlength="150"/>';
var cell18 = '<input type="text" name="remarks" class="form-control editable"   onmouseover="fipaTooltip(this);" maxlength="300"/>'+
'<input type="hidden" name="crtdBy"/><input type="hidden" name="crtdDate"/>'; 

 
mastContRateTbl.row.add( [cell0,cell1,cell2,cell3,cell4,cell5,cell6,cell7,cell8,cell9,cell10,cell11,cell12,cell13,cell14,cell15,cell16,cell17,cell18] ).draw( false );

var rowCount = $('#mastContRateTbl tbody tr').length;	
var $lastRow = $("#mastContRateTbl tbody tr:last");	


$lastRow.find("td:first").find('span').text(rowCount); 

$lastRow.find("td:eq(1)").find("input:first").click(function(){
	selectSingleRow(this);
})

$lastRow.find("td:eq(1)").find("input:first").attr('id',"radCpfCon"+$lastRow.index())
.parent().find('label').attr('for',"radCpfCon"+$lastRow.index());


$lastRow.find("td:eq(2)").find('input:eq(0)').val($("#dlgmscpfconeffFrom").val());
//effFrom
$lastRow.find("td:eq(2)").find('input:eq(0)').datetimepicker(dateOptions).on("change",function(){
	 checkDateFormat($(this));   
});
	  
$lastRow.find("td:eq(2)").find('input:eq(0)').on("change",function(){
		 checkDateFormat($(this));  
}); 
//effTo

$lastRow.find("td:eq(3)").find('input:eq(0)').val($("#dlgmscpfconeffTo").val());
$lastRow.find("td:eq(3)").find('input:eq(0)').datetimepicker(dateOptions).on("change",function(){
	 checkDateFormat($(this));   
});
	  
$lastRow.find("td:eq(3)").find('input:eq(0)').on("change",function(){
		 checkDateFormat($(this));  
}); 

var agegrp = $("#dlgmscpfconageGrp > option").clone();
$lastRow.find("td:eq(4)").find('select:eq(0)').append(agegrp);
$lastRow.find("td:eq(4)").find('select:eq(0)').val($("#dlgmscpfconageGrp").val());



var wagegrp = $("#dlgmscpfconwageGrp > option").clone();
$lastRow.find("td:eq(5)").find('select:eq(0)').append(wagegrp);
$lastRow.find("td:eq(5)").find('select:eq(0)').val($("#dlgmscpfconwageGrp").val());



$lastRow.find("td:eq(6)").find('input:eq(0)').val($("#dlgmscpfcontotBaseValue").val());
$lastRow.find("td:eq(6)").find('input:eq(0)').addClass("applyEvntpCent3");



var baseon = $("#dlgmscpfcontotBaseOn > option").clone();
$lastRow.find("td:eq(7)").find('select:eq(0)').append(baseon);
$lastRow.find("td:eq(7)").find('select:eq(0)').val($("#dlgmscpfcontotBaseOn").val());

$lastRow.find("td:eq(8)").find('input:eq(0)').val($("#dlgmscpfcontotBonusValue").val());
$lastRow.find("td:eq(8)").find('input:eq(0)').addClass("applyEvntpCent3");

var bonuson = $("#dlgmscpfcontotBonusOn > option").clone();
$lastRow.find("td:eq(9)").find('select:eq(0)').append(bonuson);
$lastRow.find("td:eq(9)").find('select:eq(0)').val($("#dlgmscpfcontotBonusOn").val());

$lastRow.find("td:eq(10)").find('input:eq(0)').val($("#dlgmscpfcontotBonusLess").val());
$lastRow.find("td:eq(10)").find('input:eq(0)').addClass("applyEvntUsd126");




$lastRow.find("td:eq(11)").find('input:eq(0)').val($("#dlgmscpfcontotMaxLimit").val());

$lastRow.find("td:eq(12)").find('input:eq(0)').val($("#dlgmscpfconempBaseVal").val());
$lastRow.find("td:eq(12)").find('input:eq(0)').addClass("applyEvntpCent3"); 

var empbaseon = $("#dlgmscpfconempBaseOn > option").clone();
$lastRow.find("td:eq(13)").find('select:eq(0)').append(empbaseon);
$lastRow.find("td:eq(13)").find('select:eq(0)').val($("#dlgmscpfconempBaseOn").val());
 

$lastRow.find("td:eq(14)").find('input:eq(0)').val($("#dlgmscpfconempBonusValue").val());
$lastRow.find("td:eq(14)").find('input:eq(0)').addClass("applyEvntpCent3");

var empbonuson = $("#dlgmscpfconempBonusOn > option").clone();
$lastRow.find("td:eq(15)").find('select:eq(0)').append(empbonuson);
$lastRow.find("td:eq(15)").find('select:eq(0)').val($("#dlgmscpfconempBonusOn").val());

$lastRow.find("td:eq(16)").find('input:eq(0)').val($("#dlgmscpfconempBonusLess").val());
$lastRow.find("td:eq(16)").find('input:eq(0)').addClass("applyEvntUsd126");


$lastRow.find("td:eq(17)").find('input:eq(0)').val($("#dlgmscpfconempMaxLimit").val());
$lastRow.find("td:eq(18)").find('input:eq(0)').val($("#dlgmscpfconRmrks").val());
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
 
	$lastRow.find("td:eq(0)").find('input:eq(0)').val(QRY_MODE);
			
	var infoDetsArr = new Array();
	
	for(var data in dataset){
		var col = dataset[data];
		
		switch(data){
		
			case "contrId":
				$lastRow.find("td:eq(0)").find('input:eq(1)').val(col); 
				break;
				
			case "effFrom": 
				$lastRow.find("td:eq(2)").find('input:eq(0)').val(col);
				$lastRow.find("td:eq(2)").find('input:eq(0)').prop("disabled",true);
				
				break;
				
			case "effTo": 
				$lastRow.find("td:eq(3)").find('input:eq(0)').val(col);
				$lastRow.find("td:eq(3)").find('input:eq(0)').prop("disabled",true);
				break;
			 
			case "ageGrp": 
				selectNullvalChk($lastRow.find("td:eq(4)"),col);   
				$lastRow.find("td:eq(4)").find('select:eq(0)').prop("disabled",true);
				break;
			 
			case "wageGrp": 
				selectNullvalChk($lastRow.find("td:eq(5)"),col);   
				$lastRow.find("td:eq(5)").find('select:eq(0)').prop("disabled",true);
				break;
				
			case "totBaseValue": 
				$lastRow.find("td:eq(6)").find('input:eq(0)').val(col);
				$lastRow.find("td:eq(6)").find('input:eq(0)').prop("disabled",true);
				
				break;
				
			case "totBaseOn": 
				selectNullvalChk($lastRow.find("td:eq(7)"),col);  
				$lastRow.find("td:eq(7)").find('select:eq(0)').prop("disabled",true);
				break;
			 
			case "totBonusValue": 
				$lastRow.find("td:eq(8)").find('input:eq(0)').val(col);
				$lastRow.find("td:eq(8)").find('input:eq(0)').prop("disabled",true);
				break;
				
			case "totBonusOn": 
				selectNullvalChk($lastRow.find("td:eq(9)"),col);  
				$lastRow.find("td:eq(9)").find('select:eq(0)').prop("disabled",true);
				break;
				
			case "totBonusLess": 
				$lastRow.find("td:eq(10)").find('input:eq(0)').val(col);
				$lastRow.find("td:eq(10)").find('input:eq(0)').prop("disabled",true);
				
				break;
				
			case "totMaxLimit": 
				$lastRow.find("td:eq(11)").find('input:eq(0)').val(col);
				$lastRow.find("td:eq(11)").find('input:eq(0)').prop("disabled",true);
				break;
			 
			case "empBaseVal": 
				$lastRow.find("td:eq(12)").find('input:eq(0)').val(col);
				$lastRow.find("td:eq(12)").find('input:eq(0)').prop("disabled",true);
				break;
				
			case "empBaseOn": 
				selectNullvalChk($lastRow.find("td:eq(13)"),col);  
				$lastRow.find("td:eq(13)").find('select:eq(0)').prop("disabled",true);
				break;
				
			case "empBonusValue": 
				$lastRow.find("td:eq(14)").find('input:eq(0)').val(col);
				$lastRow.find("td:eq(14)").find('input:eq(0)').prop("disabled",true);
				
				break;
				
			case "empBonusOn": 
				selectNullvalChk($lastRow.find("td:eq(15)"),col);  
				$lastRow.find("td:eq(15)").find('select:eq(0)').prop("disabled",true);
				break;
			 
			case "empBonusLess": 
				$lastRow.find("td:eq(16)").find('input:eq(0)').val(col);
				$lastRow.find("td:eq(16)").find('input:eq(0)').prop("disabled",true);
				break;
			 	
			case "empMaxLimit": 
				$lastRow.find("td:eq(17)").find('input:eq(0)').val(col);
				$lastRow.find("td:eq(17)").find('input:eq(0)').prop("disabled",true);
				break;
			 
			case "remarks": 
				$lastRow.find("td:eq(18)").find('input:eq(0)').val(col);
				$lastRow.find("td:eq(18)").find('input:eq(0)').prop("disabled",true);
				break;
			 	
			 
			case "crtdBy": 
				$lastRow.find("td:eq(18)").find('input:eq(1)').val(col);
				infoDetsArr.push(col);				
				break;
				
			case "crtdDate": 
				$lastRow.find("td:eq(18)").find('input:eq(2)').val(col);
				infoDetsArr.push(col);
				break;
				
		}			 
		 
	}
	}

mastCpfCbclearFlds();
 
}




 
/*Edit Row Click */
$("#EmsCpfCon").on("click",function(){
	VmsCpfCon(); 
});


/*View Row Click */
function VmsCpfCon(){ 
	var isOneRowSelected=0;
	var $rowCount = $('#mastContRateTbl tbody tr').length;	
	var $lastRow = $("#mastContRateTbl tbody tr:last");	
	
	if($rowCount<1){ 
		applyToastrAlert("Insert rows before edit/view");
		return;
	} 
	
	$("#mastContRateTbl tbody tr").each(function(){
		var $row = $(this);   
		$row.removeClass('selected');  
		$(this).removeAttr("style"); 
		$row.find("td").removeAttr("style");
	});
	
	
	$("#mastContRateTbl tbody").find('input[name="radCpfConSelect"]').each(function(){ //Checkbox selection
		var $curElm=$(this);
		if($curElm.is(":checked")){ 
			isOneRowSelected++;
		}
	});
	
	
	if(isOneRowSelected > 1){ 
		applyToastrAlert("More than one rows selected.Select one row only");
		return;
	}
	
	$("#mastContRateTbl tbody").find('input[name="radCpfConSelect"]').each(function(){ //Checkbox selection
		var $curElm=$(this);
		if($curElm.is(":checked")){ 
			var $row = $curElm.parents("tr");                                    
			var $mode = $curElm.parents("tr").find("td:first").find('input:eq(0)').val(); 
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
				 $curElm.prop("checked",false);
		     	 $curElm.parents("tr").removeClass('selected');
				 msCpfCbRdlyflds($mode);
				 msCpfCbfilldlgboxval($row); 
				 totempshareformla();
				 totcpfcontformla(); 
				 empWageGrpEnaDsb();
					showFIPAModel('MasterCpfContr_Dialog','Master CPF Contribution');  
					$('#MasterCpfContr_Dialog').on('shown.bs.modal', function () {
						$("#MasterCpfContr_Dialog").find(".modal-footer").find("button:eq(0)").text("Edit");
						$("#MasterCpfContr_Dialog").find("input[id=dlgmscpfconeffFrom]").focus();
						$("#MasterCpfContr_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
							 if(!msCpfCbvalidateDets())return; 
					     		if(!isEmpty($RowId) && !($RowId==undefined)){  
					     			msCpfCbfilldomtblval($RowId,$row); 
					     		} 
					     		
								$('#MasterCpfContr_Dialog').modal('hide'); 
								mastCpfCbclearFlds();
							
						});
					});
					 
			} 
			if(($mode == QRY_MODE) ){
				var $RowId=$row.index();
//				 $curElm.parents("tr").find("td:first").find('input:eq(0)').val($mode); 
				 $(this).parents("tr").find("td:first").find('input:eq(0)').val(UPD_MODE);
					$(this).parents("tr").find("td").find("input.editable,select.editable").each(function(){
						$(this).attr("disabled",false); 
						$row.removeClass('selected');  
						$(this).parent().css({border:'1px solid green'});
						$row.css({border:'1px solid green'});
						$row.find("td").css({border:'1px solid green'}); 
					});  
				 $curElm.prop("checked",false);
		     	 $curElm.parents("tr").removeClass('selected');
				 msCpfCbRdlyflds($mode);
				 msCpfCbfilldlgboxval($row);
				 totempshareformla();
				 totcpfcontformla();  
				 empWageGrpEnaDsb();
					showFIPAModel('MasterCpfContr_Dialog','Master CPF Contribution');  
					$('#MasterCpfContr_Dialog').on('shown.bs.modal', function () {
						$("#MasterCpfContr_Dialog").find(".modal-footer").find("button:eq(0)").text("ok");
						$("#MasterCpfContr_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
							 if(!msCpfCbvalidateDets())return; 
					     		if(!isEmpty($RowId) && !($RowId==undefined)){  
					     			msCpfCbfilldomtblval($RowId,$row); 
					     		} 
					     		
								$('#MasterCpfContr_Dialog').modal('hide'); 
								mastCpfCbclearFlds();
							
						});
					});
			}
			
			
			$curElm.attr("checked",false);
			isOneRowSelected++;
		} 
	});
	
	 
	if(isOneRowSelected==0){ 
		applyToastrAlert("No Rows Selected");
		return;
	}
	if(isOneRowSelected > 1){  
		applyToastrAlert("More than one rows selected.Select one row only");
		return;
	}
	
	
}


/*Delete Row Click */
$("#DmsCpfCon").on("click",function(){
	datatableDeleteRow('mastContRateTbl',mastContRateTbl); 
});

/*Clear Fields */
function mastCpfCbclearFlds(){
	$("#MasterCpfContr_Dialog").find("input[type=text]").val("");
	$("#MasterCpfContr_Dialog").find("textarea").val("");
	$("#MasterCpfContr_Dialog").find("select").val("");
	clearFormulatext();
}

/*Disabled/Readonly Fields */
function msCpfCbRdlyflds(mode){ 
	 if(mode == QRY_MODE ){
		 $("#MasterCpfContr_Dialog :input").prop("disabled", false);
//			$("#MasterCpfContr_Dialog :input").prop("disabled", true);
//			$("#MasterCpfContr_Dialog :button").prop("disabled", false); 
			 
	 } else if((mode == INS_MODE) || (mode == UPD_MODE) ){
			$("#MasterCpfContr_Dialog :input").prop("disabled", false); 
			 
	 }
	
}

/*Validation */
function msCpfCbvalidateDets(){
	 
	if(!(validateFocusFlds('MasterCpfContr_Dialog','dlgmscpfconeffFrom',CPFCONTRB_EFFFROM))) return; 
//	if(!(validateFocusFlds('MasterCpfContr_Dialog','dlgmscpfconeffTo',CPFCONTRB_EFFTO))) return; 
	if(!(validateFocusFlds('MasterCpfContr_Dialog','dlgmscpfconageGrp',CPFCONTRB_AGEGRP))) return;
	if(!(validateFocusFlds('MasterCpfContr_Dialog','dlgmscpfconwageGrp',CPFCONTRB_WAGEGRP))) return;

	  return true; 
}


/*Mandatory Fields Tooltip*/ 
$("#dlgmscpfconeffFrom,#dlgmscpfconeffTo,#dlgmscpfconageGrp,#dlgmscpfconwageGrp").on("change",function(){
	if(!isEmpty($(this).val())){
		$(this).removeClass("mandatoryFillFlds");
		$(this).qtip('disable');
		$(this).qtip('destroy',true);
	}
});


/* Filling Model Fields*/
function msCpfCbfilldlgboxval($lastRow){
	  
	  $('#MasterCpfContr_Dialog #dlgmscpfconcontrId').val($lastRow.find("td:eq(0)").find('input:eq(1)').val());
	  $('#MasterCpfContr_Dialog #dlgmscpfconeffFrom').val($lastRow.find("td:eq(2)").find('input:eq(0)').val());
	  $('#MasterCpfContr_Dialog #dlgmscpfconeffTo').val($lastRow.find("td:eq(3)").find('input:eq(0)').val());
	  $('#MasterCpfContr_Dialog #dlgmscpfconageGrp').val($lastRow.find("td:eq(4)").find('select:eq(0)').val());
	  $('#MasterCpfContr_Dialog #dlgmscpfconwageGrp').val($lastRow.find("td:eq(5)").find('select:eq(0)').val());
	  $('#MasterCpfContr_Dialog #dlgmscpfcontotBaseValue').val($lastRow.find("td:eq(6)").find('input:eq(0)').val());
	  $('#MasterCpfContr_Dialog #dlgmscpfcontotBaseOn').val($lastRow.find("td:eq(7)").find('select:eq(0)').val());
	  $('#MasterCpfContr_Dialog #dlgmscpfcontotBonusValue').val($lastRow.find("td:eq(8)").find('input:eq(0)').val());
	  $('#MasterCpfContr_Dialog #dlgmscpfcontotBonusOn').val($lastRow.find("td:eq(9)").find('select:eq(0)').val());
	  $('#MasterCpfContr_Dialog #dlgmscpfcontotBonusLess').val($lastRow.find("td:eq(10)").find('input:eq(0)').val());
	  $('#MasterCpfContr_Dialog #dlgmscpfcontotMaxLimit').val($lastRow.find("td:eq(11)").find('input:eq(0)').val());
	  $('#MasterCpfContr_Dialog #dlgmscpfconempBaseVal').val($lastRow.find("td:eq(12)").find('input:eq(0)').val());
	  $('#MasterCpfContr_Dialog #dlgmscpfconempBaseOn').val($lastRow.find("td:eq(13)").find('select:eq(0)').val());
	  $('#MasterCpfContr_Dialog #dlgmscpfconempBonusValue').val($lastRow.find("td:eq(14)").find('input:eq(0)').val());
	  $('#MasterCpfContr_Dialog #dlgmscpfconempBonusOn').val($lastRow.find("td:eq(15)").find('select:eq(0)').val());
	  $('#MasterCpfContr_Dialog #dlgmscpfconempBonusLess').val($lastRow.find("td:eq(16)").find('input:eq(0)').val());
	  $('#MasterCpfContr_Dialog #dlgmscpfconempMaxLimit').val($lastRow.find("td:eq(17)").find('input:eq(0)').val());
	  $('#MasterCpfContr_Dialog #dlgmscpfconRmrks').val($lastRow.find("td:eq(18)").find('input:eq(0)').val());
	  $('#MasterCpfContr_Dialog #dlgmscpfconcrtdBy').val($lastRow.find("td:eq(18)").find('input:eq(1)').val());
	  $('#MasterCpfContr_Dialog #dlgmscpfconcrtdDate').val($lastRow.find("td:eq(18)").find('input:eq(2)').val());
	
}

/* Filling Table Fields*/
function msCpfCbfilldomtblval($RowId,$row){
	
	$row.find("td:eq(2)").find('input:eq(0)').val($("#dlgmscpfconeffFrom").val()); 
	$row.find("td:eq(3)").find('input:eq(0)').val($("#dlgmscpfconeffTo").val());
	$row.find("td:eq(4)").find('select:eq(0)').val($("#dlgmscpfconageGrp").val()); 
	$row.find("td:eq(5)").find('select:eq(0)').val($("#dlgmscpfconwageGrp").val()); 
	$row.find("td:eq(6)").find('input:eq(0)').val($("#dlgmscpfcontotBaseValue").val());
	$row.find("td:eq(7)").find('select:eq(0)').val($("#dlgmscpfcontotBaseOn").val()); 
	$row.find("td:eq(8)").find('select:eq(0)').val($("#dlgmscpfcontotBonusValue").val()); 
	$row.find("td:eq(9)").find('input:eq(0)').val($("#dlgmscpfcontotBonusOn").val());
	$row.find("td:eq(10)").find('input:eq(0)').val($("#dlgmscpfcontotBonusLess").val()); 
	$row.find("td:eq(11)").find('input:eq(0)').val($("#dlgmscpfcontotMaxLimit").val()); 
	$row.find("td:eq(12)").find('input:eq(0)').val($("#dlgmscpfconempBaseVal").val());
	$row.find("td:eq(13)").find('select:eq(0)').val($("#dlgmscpfconempBaseOn").val()); 
	$row.find("td:eq(14)").find('input:eq(0)').val($("#dlgmscpfconempBonusValue").val()); 
	$row.find("td:eq(15)").find('select:eq(0)').val($("#dlgmscpfconempBonusOn").val());
	$row.find("td:eq(16)").find('input:eq(0)').val($("#dlgmscpfconempBonusLess").val()); 
	$row.find("td:eq(17)").find('input:eq(0)').val($("#dlgmscpfconempMaxLimit").val()); 
	$row.find("td:eq(18)").find('input:eq(0)').val($("#dlgmscpfconRmrks").val());
	 
		
}
//id="employeeshare"cpfcontribution
 /*Validation on Dialog Fields*/
$("#dlgmscpfconwageGrp").on("change",function(){
	empWageGrp();
});

$("#dlgmscpfcontotBaseValue,#dlgmscpfcontotBaseOn," +
		"#dlgmscpfcontotBonusValue,#dlgmscpfcontotBonusOn," +
		"#dlgmscpfcontotBonusLess,#dlgmscpfcontotMaxLimit").on("change",function(){
	totcpfcontformla();
});
function totcpfcontformla(){
	
	$("#totcpfcont").find("span[id=tbaseval]").find("span:eq(0)").html("");
	$("#totcpfcont").find("span[id=tbaseon]").find("span:eq(0)").html("");
	$("#totcpfcont").find("span[id=tbonval]").find("span:eq(0)").html("");
	$("#totcpfcont").find("span[id=tbonon]").find("span:eq(0)").html("");
	$("#totcpfcont").find("span[id=tbonless]").find("span:eq(0)").html("");
	$("#totcpfcont").find("div[id=tmaxlen]").find("span:eq(0)").html("");
	var appendTotalCont=$("#totcpfcont");
	$("#totcpfcont").removeClass("hidden");
	
	if(!isEmpty($("#dlgmscpfcontotBaseValue").val())){ 
		$("#totcpfcont").find("span[id=tbaseval]").removeClass("hidden");
		$("#totcpfcont").find("span[id=tbaseval]").find("span:eq(0)").html($("#dlgmscpfcontotBaseValue").val());
	}else{ 
		$("#totcpfcont").find("span[id=tbaseval]").addClass("hidden");
	}

	
	if(!isEmpty($("#dlgmscpfcontotBaseOn").val())){ 
		$("#totcpfcont").find("span[id=tbaseon]").removeClass("hidden");
		$("#totcpfcont").find("span[id=tbaseon]").find("span:eq(0)").html($("#dlgmscpfcontotBaseOn").val());
	}else{ 
		$("#totcpfcont").find("span[id=tbaseon]").addClass("hidden");
	}
	
	if(!isEmpty($("#dlgmscpfcontotBonusValue").val())){  
		$("#totcpfcont").find("span[id=tbonval]").removeClass("hidden");
		$("#totcpfcont").find("span[id=tbonval]").find("span:eq(0)").html($("#dlgmscpfcontotBonusValue").val());
	}else{ 
		$("#totcpfcont").find("span[id=tbonval]").addClass("hidden");
	}
	
	if(!isEmpty($("#dlgmscpfcontotBonusOn").val())){ 
		$("#totcpfcont").find("span[id=tbonon]").removeClass("hidden");
		$("#totcpfcont").find("span[id=tbonon]").find("span:eq(0)").html($("#dlgmscpfcontotBonusOn").val()); 
	}else{ 
		$("#totcpfcont").find("span[id=tbonon]").addClass("hidden");
		
	}
	
	if(!isEmpty($("#dlgmscpfcontotBonusLess").val())){ 
		$("#totcpfcont").find("span[id=tbonless]").removeClass("hidden");
		$("#totcpfcont").find("span[id=tbonless]").find("span:eq(0)").html($("#dlgmscpfcontotBonusLess").val());
	}else{ 
		$("#totcpfcont").find("span[id=tbonless]").addClass("hidden");
	}

	if(!isEmpty($("#dlgmscpfcontotMaxLimit").val())){ 
		$("#totcpfcont").find("div[id=tmaxlen]").removeClass("hidden");
		$("#totcpfcont").find("div[id=tmaxlen]").find("span:eq(0)").html($("#dlgmscpfcontotMaxLimit").val());
	}else{ 
		$("#totcpfcont").find("div[id=tmaxlen]").addClass("hidden");
	}
	
	
}

$("#dlgmscpfconempBaseVal,#dlgmscpfconempBaseOn," +
		"#dlgmscpfconempBonusValue,#dlgmscpfconempBonusOn," +
		"#dlgmscpfconempBonusLess,#dlgmscpfconempMaxLimit").on("change",function(){
	totempshareformla();
});

function clearFormulatext(){

	$("#totcpfcont").addClass("hidden");
	$("#totempshare").addClass("hidden"); 
	$("#totcpfcont").find("span[id=tbaseval]").find("span:eq(0)").html("");
	$("#totcpfcont").find("span[id=tbaseon]").find("span:eq(0)").html("");
	$("#totcpfcont").find("span[id=tbonval]").find("span:eq(0)").html("");
	$("#totcpfcont").find("span[id=tbonon]").find("span:eq(0)").html("");
	$("#totcpfcont").find("span[id=tbonless]").find("span:eq(0)").html("");
	$("#totcpfcont").find("div[id=tmaxlen]").find("span:eq(0)").html("");
	$("#totempshare").find("span[id=ebaseval]").find("span:eq(0)").html("");
	$("#totempshare").find("span[id=ebaseon]").find("span:eq(0)").html("");
	$("#totempshare").find("span[id=ebonval]").find("span:eq(0)").html("");
	$("#totempshare").find("span[id=ebonon]").find("span:eq(0)").html("");
	$("#totempshare").find("span[id=ebonless]").find("span:eq(0)").html("");
	$("#totempshare").find("div[id=emaxlen]").find("span:eq(0)").html("");

}
function totempshareformla(){
	$("#totempshare").find("span[id=ebaseval]").find("span:eq(0)").html("");
	$("#totempshare").find("span[id=ebaseon]").find("span:eq(0)").html("");
	$("#totempshare").find("span[id=ebonval]").find("span:eq(0)").html("");
	$("#totempshare").find("span[id=ebonon]").find("span:eq(0)").html("");
	$("#totempshare").find("span[id=ebonless]").find("span:eq(0)").html("");
	$("#totempshare").find("div[id=emaxlen]").find("span:eq(0)").html("");
	var appendTotalCont=$("#totempshare");
	$("#totempshare").removeClass("hidden"); 
	if(!isEmpty($("#dlgmscpfconempBaseVal").val())){ 
		$("#totempshare").find("span[id=ebaseval]").removeClass("hidden");
		$("#totempshare").find("span[id=ebaseval]").find("span:eq(0)").html($("#dlgmscpfconempBaseVal").val());
	}else{ 
		$("#totempshare").find("span[id=ebaseval]").addClass("hidden");
	}

	
	if(!isEmpty($("#dlgmscpfconempBaseOn").val())){ 
		$("#totempshare").find("span[id=ebaseon]").removeClass("hidden");
		$("#totempshare").find("span[id=ebaseon]").find("span:eq(0)").html($("#dlgmscpfconempBaseOn").val());
	}else{ 
		$("#totempshare").find("span[id=ebaseon]").addClass("hidden");
	}
	
	if(!isEmpty($("#dlgmscpfconempBonusValue").val())){ 
		$("#totempshare").find("span[id=ebonval]").removeClass("hidden");
		$("#totempshare").find("span[id=ebonval]").find("span:eq(0)").html($("#dlgmscpfconempBonusValue").val());
	}else{ 
		$("#totempshare").find("span[id=ebonval]").addClass("hidden");
	}
	
	if(!isEmpty($("#dlgmscpfconempBonusOn").val())){ 
		$("#totempshare").find("span[id=ebonon]").removeClass("hidden");
		$("#totempshare").find("span[id=ebonon]").find("span:eq(0)").html($("#dlgmscpfconempBonusOn").val());
		
	}else{ 
		$("#totempshare").find("span[id=ebonon]").addClass("hidden");
		
	}
	
	if(!isEmpty($("#dlgmscpfconempBonusLess").val())){ 
		$("#totempshare").find("span[id=ebonless]").removeClass("hidden");
		$("#totempshare").find("span[id=ebonless]").find("span:eq(0)").html($("#dlgmscpfconempBonusLess").val());
	}else{
		$("#totempshare").find("span[id=ebonless]").addClass("hidden");
	}

	if(!isEmpty($("#dlgmscpfconempMaxLimit").val())){
		
		$("#totempshare").find("div[id=emaxlen]").removeClass("hidden");
		$("#totempshare").find("div[id=emaxlen]").find("span:eq(0)").html($("#dlgmscpfconempMaxLimit").val());
	}else{ 
		$("#totempshare").find("div[id=emaxlen]").addClass("hidden");
	}
}
function empWageGrp(){ 
	
	 
	var $empWageGrp=$("#dlgmscpfconwageGrp").val()
	if(!isEmpty($empWageGrp)){
		if($empWageGrp == "$50 & below"){
			$("fieldset#cpfcontribution,fieldset#employeeshare").find("input,select").each(function(){
				$(this).prop("disabled",true);
				$(this).val("");
			}); 
		}else if($empWageGrp == "Above $50 - $500"){
			$("fieldset#cpfcontribution,fieldset#employeeshare").find("input,select").each(function(){
				$(this).prop("disabled",true);
				$(this).val("");
				
			});  
			
			$("fieldset#cpfcontribution").find("input[id=dlgmscpfcontotBaseValue]").prop("disabled",false);
			$("fieldset#cpfcontribution").find("select[id=dlgmscpfcontotBaseOn]").prop("disabled",false);
			
			
		}else if($empWageGrp == "Above $500 - below $750"){
			$("fieldset#cpfcontribution,fieldset#employeeshare").find("input,select").each(function(){
				$(this).prop("disabled",false);
				$(this).val("");
				
			}); 
			$("fieldset#cpfcontribution").find("input[id=dlgmscpfcontotMaxLimit]").prop("disabled",true); 
			$("fieldset#employeeshare").find("input[id=dlgmscpfconempMaxLimit]").prop("disabled",true); 
			$("fieldset#employeeshare").find("input[id=dlgmscpfconempBaseVal]").prop("disabled",true); 
			$("fieldset#employeeshare").find("select[id=dlgmscpfconempBaseOn]").prop("disabled",true); 
		}
		else if($empWageGrp == "$750 & Above"){
		
			$("fieldset#cpfcontribution,fieldset#employeeshare").find("input,select").each(function(){
				$(this).prop("disabled",false);
				$(this).val("");
			}); 
		}
	}else{
		$("#cpfcontribution,#employeeshare").find("input,select").prop("disabled",true);
		$("#cpfcontribution,#employeeshare").find("input,select").val("");
		 
	}
}


function empWageGrpEnaDsb(){
	 
	var $empWageGrp=$("#dlgmscpfconwageGrp").val()
	if(!isEmpty($empWageGrp)){
		if($empWageGrp == "$50 & below"){
			$("fieldset#cpfcontribution,fieldset#employeeshare").find("input,select").each(function(){
				$(this).prop("disabled",true);
//				$(this).val("");
			}); 
		}else if($empWageGrp == "Above $50 - $500"){
			$("fieldset#cpfcontribution,fieldset#employeeshare").find("input,select").each(function(){
				$(this).prop("disabled",true);
//				$(this).val("");
				
			});  
			
			$("fieldset#cpfcontribution").find("input[id=dlgmscpfcontotBaseValue]").prop("disabled",false);
			$("fieldset#cpfcontribution").find("select[id=dlgmscpfcontotBaseOn]").prop("disabled",false);
			
			
		}else if($empWageGrp == "Above $500 - below $750"){
			$("fieldset#cpfcontribution,fieldset#employeeshare").find("input,select").each(function(){
				$(this).prop("disabled",false);
//				$(this).val("");
				
			}); 
			$("fieldset#cpfcontribution").find("input[id=dlgmscpfcontotMaxLimit]").prop("disabled",true); 
			$("fieldset#employeeshare").find("input[id=dlgmscpfconempMaxLimit]").prop("disabled",true); 
			$("fieldset#employeeshare").find("input[id=dlgmscpfconempBaseVal]").prop("disabled",true); 
			$("fieldset#employeeshare").find("select[id=dlgmscpfconempBaseOn]").prop("disabled",true); 
		}
		else if($empWageGrp == "$750 & Above"){
		
			$("fieldset#cpfcontribution,fieldset#employeeshare").find("input,select").each(function(){
				$(this).prop("disabled",false);
//				$(this).val("");
			}); 
		}
	}else{
		$("#cpfcontribution,#employeeshare").find("input,select").prop("disabled",true);
//		$("#cpfcontribution,#employeeshare").find("input,select").val("");
		 
	}
}
