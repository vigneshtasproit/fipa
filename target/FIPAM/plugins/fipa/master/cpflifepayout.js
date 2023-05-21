
var cpflifepayoutform ;
var stafftype = $('#hTxtFldLoggedStfType').val();

/*Datatable Initialisation*/
var CpfLifePayoutTbl = $('#CpfLifePayoutTbl').DataTable( {
   destroy: true,
   responsive: false,         
   ordering: false,
   searching: false,     
   scrollY:  "40vh",
   scrollX: true,
   scroller: false,
   scrollCollapse:false,
   paging:false, 
   filter:false,   
   columnDefs: [], 
   dom: '<<"top" ip>flt>',  
 columnDefs: [  { width: '10px', targets: [0,1]},
                { width: '30px', targets: [2]},
                { width: '10px', targets: [3]},
                { width: '100px', targets: [4,5]},
  	             {"className": "dt-head-center text-center",targets: [0,1,2,3,4,5],"orderable": false,"searchable": false}],		 
		 fnDrawCallback: function(oSettings) {
			 if (oSettings._iDisplayLength > oSettings.fnRecordsDisplay()) { 
				 
			    } 
   
		 }, 
}).draw();

function fipaInitPage(){
	showLoader();
	cpflifepayoutform = document.forms[0];
	
	if(stafftype == STAFFTYPE_STAFF){ 
		$("#btnSave").addClass("hidden");  
	}
	if(stafftype == STAFFTYPE_ADVISER){
		$("#btnSave").addClass("hidden");  
	}


	loadAllSymbols();
	applyEventHandlers();
	 
	 showTooltip('CpflifeAddRow','Add Row For CPF Life Pay Out Income for year Details');
	 showTooltip('CpflifeEditRow','Edit Row For CPF Life Pay Out Income for year Details');
	 showTooltip('CpflifeDelRow','Delete Row For CPF Life Pay Out Income for year Details'); 
	 
		CpfPayoutSrch();

/*Master Pop Up URL*/

			$("#btnURL").css("display","none");
			$("#mainlayout #headerlayout").css("display","none");
			$("#mainlayout #sidebar-wrapper").css("display","none");
			$("#mainlayout #footerLayout").css("display","none");
			$("#layoutbody").removeAttr("class");
			$("#layoutbody").attr("class","col-md-12");
			
		 

	   hideLoader();
}


$("#btnSave").on("click",function(){
	fipaCPFLifePaySave();
});

function fipaCPFLifePaySave(){
	var rowCount = CpfLifePayoutTbl.row().count();  
	if(rowCount > 0){ 
		 enableComboWhenSubmit(cpflifepayoutform); 
		 cpflifepayoutform.action = "CpfLifePayoutSave.do";
		 cpflifepayoutform.submit(); 
	}else{
		applyToastrAlert("There is no records to save"); 
	}

	
}

$("#btnSearch").on("click",function(){
	CpfPayoutSrch();
});


function CpfPayoutSrch(){
	showLoader(); 
	$("a[id=masterLifepayout]").find("span").text("");
	CpfLifePayoutTbl.clear().draw(); 
var srchCpfLifeParams="";
srchCpfLifeParams = "&selSrchCPFLifeRtmntSum="+encodeURIComponent(escape($("#selSrchCPFLifeRtmntSum").val()));

var parameter = "DBCALLFOR=CPFPAYOUT_SEARCH"+srchCpfLifeParams;

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
		  
		if (key == "CPFPAYOUT_SEARCH"){ 
	       
			//("key == CPFACCTYPE_SEARCH");
			for ( var cont in value) {
				if (value.hasOwnProperty(cont)) { 
					
					var contvalue = value[cont];

					getCpfLifePayoutRows(contvalue); 
					
					$("a[id=masterLifepayout]").find("span").text(CpfLifePayoutTbl.rows().count());
					
				}
			}
			
			 				
						
		}
		
	}
}
}
});

}




/*Add Row Click */
$("#CpflifeAddRow").on("click",function(){
			cpfLifeClearFlds();
			showFIPAModel('CpfLifePayout_Dialog','CPF Life Pay Out Income for year');  
			$('#CpfLifePayout_Dialog').on('shown.bs.modal', function () { 
				$("#CpfLifePayout_Dialog").find(".modal-footer").find("button:eq(0)").addClass("hidden");
				$("#CpfLifePayout_Dialog").find(".modal-footer").find("button:eq(0)").text("Add");
				$("#CpfLifePayout_Dialog").find("input[id=selDlgLifeRtmntSum]").focus();
				$("#CpfLifePayout_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
						/*if(!validatecpfAccDetails())return;*/
						cpfLifeRdlyflds(INS_MODE);  
						getCpfLifePayoutRows(null); 
						$('#CpfLifePayout_Dialog').modal('hide'); 
				  });  
			});			
});

/*Populate Data */
function getCpfLifePayoutRows(dataset){ 

var cell0 = '<span></span>'+
'<input type="hidden" name="txtFldCpfLifePayMode" readonly="true" value="'+INS_MODE+'" class="fipaMode"/><input type="hidden" name="txtFldCpfLifePayId">';
 

var cell1 = '<div class="checkbox checkbox-primary text-center"><input type="checkbox" name="radcpfLifePaySelect" id="radcpfLifePaySelect"/><label>&nbsp;</label></div>'; 


var cell2 = '<input  type="text" name="selCPFLifeRtmntSum"  onmouseover="fipaTooltip(this);" class="form-control editable"   maxlength="20"/> ';
 
var cell3 = '<input type="text" name="txtFldCpfLifePayoutYr" class="form-control editable"  onmouseover="fipaTooltip(this);" />'; 

var cell4 = '<input type="text" name="txtFldCpfLifeMonthly" class="form-control editable"  onmouseover="fipaTooltip(this);" />';

var cell5 = '<input type="text" name="txtFldCpfLifeAnnualy" class="form-control editable"   onmouseover="fipaTooltip(this);" />';


CpfLifePayoutTbl.row.add( [cell0,cell1,cell2,cell3,cell4,cell5] ).draw( false );

var rowCount = $('#CpfLifePayoutTbl tbody tr').length;	
var $lastRow = $("#CpfLifePayoutTbl tbody tr:last");	

$lastRow.find("td:first").find('span').text(rowCount); 

$lastRow.find("td:eq(1)").find("input:first").click(function(){
	selectSingleRow(this);
})

$lastRow.find("td:eq(1)").find("input:first").attr('id',"radcpfLifePay"+$lastRow.index())
.parent().find('label').attr('for',"radcpfLifePay"+$lastRow.index());
 
$lastRow.find("td:eq(2)").find('input:eq(0)').val($("#selDlgLifeRtmntSum").val());
 
$lastRow.find("td:eq(3)").find('input:eq(0)').val($("#txtFldDlgLifePayYear").val());
$lastRow.find("td:eq(3)").find('input:eq(0)').addClass("applyEvntYrs");

$lastRow.find("td:eq(4)").find('input:eq(0)').val($("#txtFldDlgLifeMonthly").val());
$lastRow.find("td:eq(4)").find('input:eq(0)').on("change",function(){
	calCpflifeAnnually($(this),$lastRow.find("td:eq(5)").find('input:eq(0)'));
}); 
$lastRow.find("td:eq(4)").find('input:eq(0)').addClass("applyEvntUsd");


$lastRow.find("td:eq(5)").find('input:eq(0)').val($("#txtFldDlgLifeAnnually").val());
$lastRow.find("td:eq(5)").find('input:eq(0)').addClass("applyEvntUsd");


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
		
		case "pid": 
			$lastRow.find("td:eq(0)").find('input:eq(1)').val(col); 
			break;
			
		case "retScheme":  
			$lastRow.find("td:eq(2)").find('input:eq(0)').val(col).prop("readonly",true);
			break;
			
		case "payoutYear": 
			$lastRow.find("td:eq(3)").find('input:eq(0)').val(col).prop("readonly",true); 
			break;
		 
		case "monthlyAmt": 
			$lastRow.find("td:eq(4)").find('input:eq(0)').val(col).prop("readonly",true); 
			break;
		 
		case "yearlyAmt": 
			$lastRow.find("td:eq(5)").find('input:eq(0)').val(col).prop("readonly",true); 
			break;
			
		
		
		}			 
		 
	}
	}

cpfLifeClearFlds();
$lastRow.find("input").prop("readonly",true);

}

/*Edit Row Click */
$("#CpflifeEditRow").on("click",function(){
	CpfLifeViewRow(); 
});


/*View Row Click */
function CpfLifeViewRow(){
	
	 
	var isOneRowSelected=0;
	var $rowCount = $('#CpfLifePayoutTbl tbody tr').length;	
	var $lastRow = $("#CpfLifePayoutTbl tbody tr:last");	
	
	if($rowCount<1){ 
		applyToastrAlert("Insert rows before edit/view");
		return;
	} 
	
	$("#CpfLifePayoutTbl tbody tr").each(function(){
		var $row = $(this);   
		$row.removeClass('selected');  
		$(this).removeAttr("style"); 
		$row.find("td").removeAttr("style");
	});
	
	
	$("#CpfLifePayoutTbl tbody").find('input[name="radcpfLifePaySelect"]').each(function(){ //Checkbox selection
		var $curElm=$(this);
		if($curElm.is(":checked")){ 
			isOneRowSelected++;
			
		}
	});
	
	
	if(isOneRowSelected > 1){ 
		
		applyToastrAlert("More than one rows selected.Select one row only");
		return;
	}
	
	$("#CpfLifePayoutTbl tbody").find('input[name="radcpfLifePaySelect"]').each(function(){ //Checkbox selection
	
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
		     	cpfLifeRdlyflds($mode);
		     	cpflifefilldlgval($row); 
				 showFIPAModel('CpfLifePayout_Dialog','CPF Life Pay Out Income for year'); 
					$('#CpfLifePayout_Dialog').on('shown.bs.modal', function () {
						$("#CpfLifePayout_Dialog").find(".modal-footer").find("button:eq(0)").text("Edit"); 
						$("#CpfLifePayout_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
							 /*if(!validatecpfAccDetails())return; */
					     		if(!isEmpty($RowId) && !($RowId==undefined)){  
					     			cpflifefilldomval($RowId,$row); 
					     		} 
					     		$row.find("input").prop("readonly",true);
								$('#CpfLifePayout_Dialog').modal('hide'); 
								cpfLifeClearFlds();
							
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
		     	cpfLifeRdlyflds($mode);
		     	cpflifefilldlgval($row); 
				showFIPAModel('CpfLifePayout_Dialog','CPF Life Pay Out Income for year');
					$('#CpfLifePayout_Dialog').on('shown.bs.modal', function () {
						$("#CpfLifePayout_Dialog").find(".modal-footer").find("button:eq(0)").text("ok");
						$("#CpfLifePayout_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
							 /*if(!validatecpfAccDetails())return; */
					     		if(!isEmpty($RowId) && !($RowId==undefined)){  
					     			cpflifefilldomval($RowId,$row); 
					     		} 
					     		
					     		$row.find("input").prop("readonly",true);
								$('#CpfLifePayout_Dialog').modal('hide'); 
								cpfLifeClearFlds();
							
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
	/*if(isOneRowSelected > 1){
		applyToastrAlert("More than one rows selected.Select one row only"); 
		return;
	}*/
	
	
}


/*Delete Row Click */
$("#CpflifeDelRow").on("click",function(){ 
	datatableDeleteRow('CpfLifePayoutTbl',CpfLifePayoutTbl); 
});



/* Filling Model Fields*/
function cpflifefilldlgval($lastRow){
	
	  $('#CpfLifePayout_Dialog #txtFldDlgCpfLifePayId').val($lastRow.find("td:eq(0)").find('input:eq(1)').val());
	  $('#CpfLifePayout_Dialog #selDlgLifeRtmntSum').val($lastRow.find("td:eq(2)").find('input:eq(0)').val());
	  $('#CpfLifePayout_Dialog #txtFldDlgLifePayYear').val($lastRow.find("td:eq(3)").find('input:eq(0)').val());
	  $('#CpfLifePayout_Dialog #txtFldDlgLifeMonthly').val($lastRow.find("td:eq(4)").find('input:eq(0)').val());
	  $('#CpfLifePayout_Dialog #txtFldDlgLifeAnnually').val($lastRow.find("td:eq(5)").find('input:eq(0)').val());
	 
}

/* Filling Table Fields*/
function cpflifefilldomval($RowId,$row){
	
	$row.find("td:eq(2)").find('input:eq(0)').val($("#selDlgLifeRtmntSum").val()); 
	$row.find("td:eq(3)").find('input:eq(0)').val($("#txtFldDlgLifePayYear").val());
	$row.find("td:eq(4)").find('input:eq(0)').val($("#txtFldDlgLifeMonthly").val()); 
	$row.find("td:eq(5)").find('input:eq(0)').val($("#txtFldDlgLifeAnnually").val()); 
	$row.find("input").prop("readonly",true);
}

$("#selSrchCPFLifeRtmntSum").on("change",function(){
	CpfLifePayoutTbl.clear().draw();
});


/*Clear Fields */
function cpfLifeClearFlds(){
	$("#CpfLifePayout_Dialog").find("input[type=text]").val("");
	$("#CpfLifePayout_Dialog").find("textarea").val("");
	$("#CpfLifePayout_Dialog").find("select").val("");
}

/*Disabled/Readonly Fields */
function cpfLifeRdlyflds(mode){ 
	 if(mode == QRY_MODE ){
			$("#CpfLifePayout_Dialog :input").prop("disabled", false); 
			$("#CpfLifePayout_Dialog :button").prop("disabled", false); 
	 } else if((mode == INS_MODE) || (mode == UPD_MODE) ){
			$("#CpfLifePayout_Dialog :input").prop("disabled", false);
	 }
	 
	 $("#CpfLifePayout_Dialog #txtFldDlgLifeAnnually").prop("disabled", true);
}

$("#CpfLifePayout_Dialog").find("input[type=text],select").on("change",function(){
	$("#CpfLifePayout_Dialog").find(".modal-footer").find("button:eq(0)").removeClass("hidden");
});

$("#txtFldDlgLifeMonthly").on("change",function(){
	calCpflifeAnnually($(this),$("#txtFldDlgLifeAnnually"));
});

function calCpflifeAnnually(monthElm,annlElm){
	var annual=0;
	var month=Number(monthElm.val());
	if(!isEmpty(month)){
		annual=month*12;
	}
	annlElm.val(annual); 
}
