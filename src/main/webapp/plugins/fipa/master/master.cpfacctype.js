
var cpfacctypeform ;

var stafftype = $('#hTxtFldLoggedStfType').val();


/*Datatable Initialisation*/
var CpfAccTypeTbl = $('#CpfAccTypeTbl').DataTable( {
   destroy: true,
   responsive: false,         
   ordering: false,
   searching: false,     
   scrollY:  "38vh",
   scrollX: true,
   scroller: false,
   scrollCollapse:false,
   paging:false, 
   filter:false,   
   columnDefs: [], 
   dom: '<<"top" ip>flt>',  
   columnDefs: [  { width: '20px', targets: [0,1]},
  	             {"className": "dt-head-center text-center",targets: [0,1,2,3,4,5,6],"orderable": false,"searchable": false}],		 
		 fnDrawCallback: function(oSettings) {
			 if (oSettings._iDisplayLength > oSettings.fnRecordsDisplay()) { 
				 
			    } 
   
		 }, 
}).draw();

function fipaInitPage(){
	
	cpfacctypeform = document.forms[0];
	
	if(stafftype == STAFFTYPE_STAFF){  
		$("#btnSave").addClass("hidden");  
	}
	if(stafftype == STAFFTYPE_ADVISER){
		$("#btnSave").addClass("hidden");  
		}


	loadAllSymbols();
	applyEventHandlers();
	 
	 showTooltip('CpfAccAddRow','Add Row For Master CPF Account Details');
	 showTooltip('CpfAccEditRow','Edit Row For Master CPF Account Details');
	 showTooltip('CpfAccDelRow','Delete Row For Master CPF Account Details');
	 showTooltip('CpfAccViewRow','View Row For Master CPF Account Details');
	
	 
 
		CpfAcTypeSrch();

/*Master Pop Up URL*/

			$("#btnURL").css("display","none");
			$("#mainlayout #headerlayout").css("display","none");
			$("#mainlayout #sidebar-wrapper").css("display","none");
			$("#mainlayout #footerLayout").css("display","none");
			$("#layoutbody").removeAttr("class");
			$("#layoutbody").attr("class","col-md-12");
			
		 
/**/
	   hideLoader();
}

function clearAccTypDets(){
	
}


$("#btnSave").on("click",function(){
	fipaMasterSave();
});

function fipaMasterSave(){
	 

	 enableComboWhenSubmit(cpfacctypeform);
	  
	cpfacctypeform.action = "CpfAccountTypeSave.do";
	cpfacctypeform.submit();
		
}


$("#btnSearch").on("click",function(){
	CpfAcTypeSrch();
});


function CpfAcTypeSrch(){
	showLoader(); 
	$("a[id=masterAccTypes]").find("span").text("");
	CpfAccTypeTbl.clear().draw(); 
var srchCpfParams="";
srchCpfParams = "&selSrchCpfAcctype="+encodeURIComponent(escape($("#selSrchCpfAcctype").val()));

var parameter = "DBCALLFOR=CPFACCTYPE_SEARCH"+srchCpfParams;

ajaxCall(parameter,servletName,function(Data){
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
		  
		if (key == "CPFACCTYPE_SEARCH"){ 
	       
			//("key == CPFACCTYPE_SEARCH");
			for ( var cont in value) {
				if (value.hasOwnProperty(cont)) { 
					
					var contvalue = value[cont];

					getCpfAccTypeRows(contvalue); 
					
					$("a[id=masterAccTypes]").find("span").text(CpfAccTypeTbl.rows().count());
					
				}
			}
			
			 				
						
		}
		
	}
}
}
});

}
/**/
/*Add Row Click */
$("#CpfAccAddRow").on("click",function(){
			cpfAccClearFlds();
			showFIPAModel('CpfAccTyp_Dialog','CPF Account Type');  
			$('#CpfAccTyp_Dialog').on('shown.bs.modal', function () {
				$("#CpfAccTyp_Dialog #txtFldDlgAccTopuplmt").val("2000000");
				$("#CpfAccTyp_Dialog").find(".modal-footer").find("button:eq(0)").text("Add");
				$("#CpfAccTyp_Dialog").find("input[id=txtFldDlgAccType]").focus();
				$("#CpfAccTyp_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
						if(!validatecpfAccDetails())return;
						cpfAccRdlyflds(INS_MODE);  
						getCpfAccTypeRows(null); 
						$('#CpfAccTyp_Dialog').modal('hide'); 
				  });  
			});			
});
/*Populate Data */
function getCpfAccTypeRows(dataset){ 

var cell0 = '<span></span>'+
'<input type="hidden" name="txtFldCpfAccTypMode" readonly="true" value="'+INS_MODE+'" class="fipaMode"/><input type="hidden" name="txtFldCpfAccTypeId">';
//var cell1 = '<input type="checkbox" name="radcpfAccTypeSelect" />'; 


var cell1 = '<div class="checkbox checkbox-primary text-center"><input type="checkbox" name="radcpfAccTypeSelect"/><label>&nbsp;</label></div>'; 


var cell2 = '<input  type="text" name="txtFldCpfAccType" class="form-control editable"  onmouseover="fipaTooltip(this);" maxlength="20"/>';
 
var cell3 = '<input type="text" name="txtFldCpfAccCode" class="form-control editable"  onmouseover="fipaTooltip(this);" maxlength="20"/>'; 

var cell4 = '<input type="text" name="txtFldCpfAccCommenceAge" class="form-control editable"  onmouseover="fipaTooltip(this);" maxlength="3"/>';

var cell5 = '<input type="text" name="txtFldCpfAccWithdrawAge" class="form-control editable"   onmouseover="fipaTooltip(this);" maxlength="3"/>'+
'<input type="hidden" name="txtFldCpfAccCrtdBy"/><input type="hidden" name="txtFldCpfAccCrtdDate"/>';

var cell6 = '<input type="text" name="txtFldCpfAccTopUplimt" class="form-control editable"  onmouseover="fipaTooltip(this);" />';

CpfAccTypeTbl.row.add( [cell0,cell1,cell2,cell3,cell4,cell5,cell6] ).draw( false );

var rowCount = $('#CpfAccTypeTbl tbody tr').length;	
var $lastRow = $("#CpfAccTypeTbl tbody tr:last");	

$lastRow.find("td:first").find('span').text(rowCount); 

$lastRow.find("td:eq(1)").find("input:first").click(function(){
	selectSingleRow(this);
})

$lastRow.find("td:eq(1)").find("input:first").attr('id',"radcpfAccType"+$lastRow.index())
.parent().find('label').attr('for',"radcpfAccType"+$lastRow.index());

$lastRow.find("td:eq(2)").find('input:eq(0)').val($("#txtFldDlgAccType").val());


$lastRow.find("td:eq(3)").find('input:eq(0)').val($("#txtFldDlgAccCode").val());


$lastRow.find("td:eq(4)").find('input:eq(0)').val($("#txtFldDlgAccCommnceAge").val());
$lastRow.find("td:eq(4)").find('input:eq(0)').addClass("applyEvntYrs");

$lastRow.find("td:eq(5)").find('input:eq(0)').val($("#txtFldDlgAccWitdrwAge").val());
$lastRow.find("td:eq(5)").find('input:eq(0)').addClass("applyEvntYrs");

$lastRow.find("td:eq(6)").find('input:eq(0)').val($("#txtFldDlgAccTopuplmt").val());
$lastRow.find("td:eq(6)").find('input:eq(0)').addClass("applyEvntUsd");

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

	
			if($("#hTxtFldFnaReviewFlag").val() == "U"  || $("#hTxtFldFnaReviewFlag").val() == ""){ 
					$lastRow.find("td:eq(0)").find('input:eq(0)').val(col);
			}
			
	var infoDetsArr = new Array();
	$lastRow.find("td:eq(0)").find('input:eq(0)').val("Q");
	for(var data in dataset){
		var col = dataset[data];
		
		switch(data){
		
		case "cpfAcId": 
			$lastRow.find("td:eq(0)").find('input:eq(1)').val(col); 
			break;
			
		case "accType": 
			$lastRow.find("td:eq(2)").find('input:eq(0)').val(col);
			$lastRow.find("td:eq(2)").find('input:eq(0)').prop("disabled",true);
			break;
			
		case "accCode": 
			$lastRow.find("td:eq(3)").find('input:eq(0)').val(col);
			$lastRow.find("td:eq(3)").find('input:eq(0)').prop("disabled",true);
			break;
		 
		case "accCommAge": 
			$lastRow.find("td:eq(4)").find('input:eq(0)').val(col);
			$lastRow.find("td:eq(4)").find('input:eq(0)').prop("disabled",true);
			break;
		 
		case "accWithdrawAge": 
			$lastRow.find("td:eq(5)").find('input:eq(0)').val(col);
			$lastRow.find("td:eq(5)").find('input:eq(0)').prop("disabled",true);
			break;
			
		case "accTopuplimit": 
			$lastRow.find("td:eq(6)").find('input:eq(0)').val(col);
			$lastRow.find("td:eq(6)").find('input:eq(0)').prop("disabled",true);
			break;
		
		case "accCrtdBy": 
			$lastRow.find("td:eq(5)").find('input:eq(1)').val(col);
			infoDetsArr.push(col);
			break;
			
		case "accCrtdDate": 
			$lastRow.find("td:eq(5)").find('input:eq(2)').val(col);
			infoDetsArr.push(col);	
			break;
		}			 
		 
	}
	}

cpfAccClearFlds();

}

/*Edit Row Click */
$("#CpfAccEditRow").on("click",function(){
	CpfAccViewRow();
});

/*View Row Click */
function CpfAccViewRow(){
	
	 
	var isOneRowSelected=0;
	var $rowCount = $('#CpfAccTypeTbl tbody tr').length;	
	var $lastRow = $("#CpfAccTypeTbl tbody tr:last");	
	
	if($rowCount<1){ 
		applyToastrAlert("Insert rows before edit/view");
		return;
	} 
	
	$("#CpfAccTypeTbl tbody tr").each(function(){
		var $row = $(this);   
		$row.removeClass('selected');  
		$(this).removeAttr("style"); 
		$row.find("td").removeAttr("style");
	});
	
	
	$("#CpfAccTypeTbl tbody").find('input[name="radcpfAccTypeSelect"]').each(function(){ //Checkbox selection
		var $curElm=$(this);
		if($curElm.is(":checked")){ 
			isOneRowSelected++;
		}
	});
	
	
	if(isOneRowSelected > 1){ 
		applyToastrAlert("More than one rows selected.Select one row only");
		return;
	}
	
	$("#CpfAccTypeTbl tbody").find('input[name="radcpfAccTypeSelect"]').each(function(){ //Checkbox selection
	
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
		     	 cpfAccRdlyflds($mode);
				 cpfaccfilldlgval($row); 
				 showFIPAModel('CpfAccTyp_Dialog','CPF Account Type'); 
					$('#CpfAccTyp_Dialog').on('shown.bs.modal', function () {
						$("#CpfAccTyp_Dialog").find(".modal-footer").find("button:eq(0)").text("Edit");
						$("#CpfAccTyp_Dialog").find("input[id=txtFldDlgAccType]").focus();
						$("#CpfAccTyp_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
							 if(!validatecpfAccDetails())return; 
					     		if(!isEmpty($RowId) && !($RowId==undefined)){  
					     			cpfaccfilldomval($RowId,$row); 
					     		} 
					     		
								$('#CpfAccTyp_Dialog').modal('hide'); 
								cpfAccClearFlds();
							
						});
					});
					 
			} 
			if(($mode == QRY_MODE) ){
				var $RowId=$row.index();
				 $curElm.parents("tr").find("td:first").find('input:eq(0)').val(UPD_MODE); 
					$(this).parents("tr").find("td").find("input.editable,select.editable").each(function(){
						$(this).attr("disabled",false); 
						$row.removeClass('selected');  
						$(this).parent().css({border:'1px solid green'});
						$row.css({border:'1px solid green'});
						$row.find("td").css({border:'1px solid green'}); 
					});  
				 $curElm.prop("checked",false);
		     	 $curElm.parents("tr").removeClass('selected'); 
				 cpfAccRdlyflds($mode);
				cpfaccfilldlgval($row); 
				showFIPAModel('CpfAccTyp_Dialog','CPF Account Type');
					$('#CpfAccTyp_Dialog').on('shown.bs.modal', function () {
						$("#CpfAccTyp_Dialog").find(".modal-footer").find("button:eq(0)").text("ok");
						$("#CpfAccTyp_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
							 if(!validatecpfAccDetails())return; 
					     		if(!isEmpty($RowId) && !($RowId==undefined)){  
					     			cpfaccfilldomval($RowId,$row); 
					     		} 
					     		
								$('#CpfAccTyp_Dialog').modal('hide'); 
								cpfAccClearFlds();
							
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
$("#CpfAccDelRow").on("click",function(){ 
	datatableDeleteRow('CpfAccTypeTbl',CpfAccTypeTbl); 
});


/*Clear Fields */
function cpfAccClearFlds(){
	$("#CpfAccTyp_Dialog").find("input[type=text]").val("");
	$("#CpfAccTyp_Dialog").find("textarea").val("");
	$("#CpfAccTyp_Dialog").find("select").val("");
}


/*Disabled/Readonly Fields */
function cpfAccRdlyflds(mode){ 
	 if(mode == QRY_MODE ){
			$("#CpfAccTyp_Dialog :input").prop("disabled", false); 
			$("#CpfAccTyp_Dialog :button").prop("disabled", false); 
	 } else if((mode == INS_MODE) || (mode == UPD_MODE) ){
			$("#CpfAccTyp_Dialog :input").prop("disabled", false);
	 }
}
/*Validation */
function validatecpfAccDetails(){ 
	if(!(validateFocusFlds('CpfAccTyp_Dialog','txtFldDlgAccType', CPF_ACCOUNT))) return;
	  return true; 
}

/*Mandatory Fields Tooltip*/ 
$("#txtFldDlgAccType").on("change",function(){
	if(!isEmpty($(this).val())){
	$(this).removeClass("mandatoryFillFlds");
	$(this).qtip('disable');
	$(this).qtip('destroy',true);
	}
});

/* Filling Model Fields*/
function cpfaccfilldlgval($lastRow){
	  
	  $('#CpfAccTyp_Dialog #txtFldDlgCpfAccId').val($lastRow.find("td:eq(0)").find('input:eq(1)').val());
	  $('#CpfAccTyp_Dialog #txtFldDlgAccType').val($lastRow.find("td:eq(2)").find('input:eq(0)').val());
	  $('#CpfAccTyp_Dialog #txtFldDlgAccCode').val($lastRow.find("td:eq(3)").find('input:eq(0)').val());
	  $('#CpfAccTyp_Dialog #txtFldDlgAccCommnceAge').val($lastRow.find("td:eq(4)").find('input:eq(0)').val());
	  $('#CpfAccTyp_Dialog #txtFldDlgAccWitdrwAge').val($lastRow.find("td:eq(5)").find('input:eq(0)').val());
	  $('#CpfAccTyp_Dialog #txtFldDlgCpfAccCreatedBy').val($lastRow.find("td:eq(5)").find('input:eq(1)').val());
	  $('#CpfAccTyp_Dialog #txtFldDlgCpfAccCreatedDate').val($lastRow.find("td:eq(5)").find('input:eq(2)').val());
	  $('#CpfAccTyp_Dialog #txtFldDlgAccTopuplmt').val($lastRow.find("td:eq(6)").find('input:eq(0)').val());
}

/* Filling Table Fields*/
function cpfaccfilldomval($RowId,$row){
	
	$row.find("td:eq(2)").find('input:eq(0)').val($("#txtFldDlgAccType").val()); 
	$row.find("td:eq(3)").find('input:eq(0)').val($("#txtFldDlgAccCode").val());
	$row.find("td:eq(4)").find('input:eq(0)').val($("#txtFldDlgAccCommnceAge").val()); 
	$row.find("td:eq(5)").find('input:eq(0)').val($("#txtFldDlgAccWitdrwAge").val()); 
	$row.find("td:eq(6)").find('input:eq(0)').val($("#txtFldDlgAccTopuplmt").val()); 
}

function validateCpfAcIsExisted(cpfAcId){ 
	//alert("validateCpfAcIsExisted"+cpfAcId.value);

	var rowCount = $('#CpfAccTypeTbl tbody tr').length;	
	var $lastRow = $("#CpfAccTypeTbl tbody tr:last");	

	
  
var respText;
var srchCpfParams="";
srchCpfParams += "&txtFldAccType="+encodeURIComponent(escape(cpfAcId.value));
 
var mode ; 
var parameter = "DBCALLFOR=CPF_ACC_SRCH_EXIST"+srchCpfParams;
var validateFlag=0;


$('#CpfAccTypeTbl tbody tr').each(function(){
	mode=$(this).find("td:eq(0)").find("input:eq(0)").val();
	var chkbox=$(this).find("td:eq(1)").find("input:first");
	var acctype=$(this).find("td:eq(2)").find("input:eq(0)").val();
	if(mode!= 'D' && (chkbox.is(":checked")== false)){
		validateFlag = 1;
	}
	
	if(validateFlag){ 
		if(!isEmpty(cpfAcId.value) && !(mode == 'D')){ 

			ajaxCall(parameter,servletName,function(Data){
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
					  
					if (key == "CPF_ACC_EXISTED"){   
				 applyToastrAlert("Already Exist",$("#txtFldDlgAccType")); 
					$("#txtFldDlgAccType").val("");
					
					$("#txtFldDlgAccType").focus();
					 return false; 		
					}else{
						return true;
					}
					
				}
			}
			}
			});
	     }
		return;
	}	
	
});

}








function acctypeChkDhtml(cpfAcId){
	//alert("acctypeChkDhtml"+cpfAcId.value);
	
var enterAccType=cpfAcId.value; 

	
   
var mode ;  
var validateFlag=0;


$('#CpfAccTypeTbl tbody tr').each(function(){
	mode=$(this).find("td:eq(0)").find("input:eq(0)").val();
	var chkbox=$(this).find("td:eq(1)").find("input:first");
	var acctype=$(this).find("td:eq(2)").find("input:eq(0)").val();
	//alert("acctype"+acctype)
	if(mode!= 'D' && (chkbox.is(":checked")== false)){
		//alert("mode!= 'D' && (chkbox.is()== false");
		validateFlag = 1;
	}
	
	if(validateFlag){ 
		//alert("if Condition ")
		
		if(!isEmpty(cpfAcId.value) && !(mode == 'D')){ 

			if (acctype == enterAccType){ 
				//alert("Condition true");
				 
				 applyToastrAlert("Already Exist",$("#txtFldDlgAccType")); 
					$("#txtFldDlgAccType").val("");
					
					$("#txtFldDlgAccType").focus();
					 return false; 		
					}else{
						return true;
					}
					
	     }
		return;
	}	
	
});

}
