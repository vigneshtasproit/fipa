/**
 * Attachments
 */ 

/*Datatable Initialisation*/
//var fnaAttachments = $('#fnaAttachments').DataTable( {
//   destroy: true,
//   responsive: false,         
//   ordering: false,
//   searching: false,     
//   scrollY:  "40vh",
//   scrollX: true,
//   scroller: false,
//   scrollCollapse:false,
//   paging:false, 
//   filter:false,   
//   columnDefs: [], 
//   dom: '<<"top" ip>flt>',  
//   columnDefs: [  { width: '20px', targets: [0,1]},
//  	             {"className": "dt-head-center text-center",targets: [0,1,2,3,4,5,6,7],"orderable": false,"searchable": false}],		 
//		   
//}).draw();




$("#DcAttchARow").on("click",function(){ 
	if(!validateAttchDetails())return; 
   	getAttchRows(null);  
});


  




/*Populate Data */
function getAttchRows(dataset){ 
  // alert(JSON.stringify(dataset));
var cell0 = '<span></span>'+
			'<input type="hidden" name="txtFldAttchMode" readonly="true" value="'+INS_MODE+'" class="fipaMode"/><input type="hidden" name="docid">';
	
var cell1 ='<div class="checkbox checkbox-primary text-center"><input type="checkbox" name="radAttchSelect"/><label>&nbsp;</label></div>'; 
 
var cell2 ='<select name="attachCategName" class="form-control editable"  onmouseover="fipaTooltip(this);"></select>'; 
 
var cell3 ='<select name="documentTitle" class="form-control editable"  onmouseover="fipaTooltip(this);"></select>'
			+'<input type="hidden" name="attachCategId" />'; 

var cell4 ='<input type="file" name="document" class="form-control editable"  onmouseover="fipaTooltip(this);"/>';
	
var cell5 ='<input type="text" name="pageNo" class="form-control editable" onmouseover="fipaTooltip(this);" maxlength="4"/>';

var cell6 ='<span id="filetype"></span>'
			+'<input type="hidden" name="filesize"/><input type="hidden" name="attachDate"/><input type="hidden" name="moduleRef"/><input type="hidden" name="referenceId"/>';

var cell7 ='<input type="text" name="remarks" class="form-control editable"  onmouseover="fipaTooltip(this);" maxlength="300"/>'
			+'<input type="hidden" name="createdBy"/><input type="hidden" name="createdDate"/>';

fnaAttachments.row.add( [cell0,cell1,cell2,cell3,cell4,cell5,cell6,cell7] ).draw( false );

var rowCount = $('#fnaAttachments tbody tr:visible').length;
rowCount =  (rowCount == 0) ? $('#fnaAttachments tbody tr').length : rowCount;
var $lastRow = $("#fnaAttachments tbody tr:last");	

$lastRow.find("td:first").find('span').text(rowCount); 

$lastRow.find("td:eq(1)").find("input:first").click(function(){
	selectSingleRow(this);
})

$lastRow.find("td:eq(1)").find("input:first").attr('id',"radAttch"+$lastRow.index())
.parent().find('label').attr('for',"radAttch"+$lastRow.index());


var attcatg = $("#selDlgAttCategory > option").clone();
$lastRow.find("td:eq(2)").find('select:eq(0)').append(attcatg);
$lastRow.find("td:eq(2)").find('select:eq(0)').on("change",function(){
	 
		removeTooltip($(this));
 
	
var $docTitle = $lastRow.find("td:eq(3)").find('select:eq(0)');
	
	var categVal = $(this).val();
	
	$docTitle.empty().append('<option value="">--SELECT--</option>');	
	
	$("#selhidAttTitle > option").each(function() {
		if(categVal == this.value.split("^")[1]){
			$lastRow.find("td:eq(3)").find('select:eq(0)').append("<option value='"+this.value.split("^")[0]+"'>"+this.text+"</option>");			 
		}
	});	
});


var attTitle = $("#selDlgAttTitle > option").clone();
$lastRow.find("td:eq(3)").find('select:eq(0)').append(attTitle);
$lastRow.find("td:eq(3)").find('select:eq(0)').val($("#selDlgAttTitle").val()); 
$lastRow.find("td:eq(3)").find('select:eq(0)').on("change",function(){
	removeTooltip($(this));
	$lastRow.find("td:eq(3)").find('input:eq(0)').val($(this).val()); 
});


$lastRow.find("td:eq(4)").find('input:eq(0)').on("change",function(){
	removeTooltip($(this));
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
	crudicons(this,'fnaAttachments','SelfnaAttachments','','DcAttchDRow');
			
});
//DHTML CRUD ICONS

$lastRow.find("td:eq(1)").find("input:first").click(function(){
	selectSingleRow(this);
//	DHTML CRUD ICONS
	crudicons(this,'fnaAttachments','SelfnaAttachments','','DcAttchDRow');
});

if(dataset != null){ 
					$lastRow.find("td:eq(0)").find('input:eq(0)').val(QRY_MODE); 
	var infoDetsArr = new Array();

	for(var data in dataset){
		var col = dataset[data];
		
		switch(data){
		
		case "docid": 
			$lastRow.find("td:eq(0)").find('input:eq(1)').val(col); 
			break;
			
		case "attachCategName": 
			selectNullvalChk($lastRow.find("td:eq(2)"),col); 
			var $docTitle = $lastRow.find("td:eq(3)").find('select:eq(0)'); 
			var categVal = col; 
			$docTitle.empty().append('<option value="">--SELECT--</option>'); 
			$("#selhidAttTitle > option").each(function() {
				if(categVal == this.value.split("^")[1]){
					$lastRow.find("td:eq(3)").find('select:eq(0)').append("<option value='"+this.value.split("^")[0]+"'>"+this.text+"</option>");			 
				}
			});	
			$lastRow.find("td:eq(2)").find('select:eq(0)').prop("disabled",true);
			break;
			
		case "documentTitle":   
			$lastRow.find("td:eq(3)").find('select:eq(0)').val(col); 
			$lastRow.find("td:eq(3)").find('select:eq(0)').prop("disabled",true);
			break;
		 

		case "attachCategId": 
			$lastRow.find("td:eq(3)").find('input:eq(1)').val(col); 	
			break;
		 

		case "filename": 
			$lastRow.find("td:eq(4)").html("");
			$lastRow.find("td:eq(4)").append("<input type='file' name='document' class='hidden'/><div class='inputnoborder'>"+col+"</div>").append("<div class='inputnoborder'><a class='btn btn-default filedownload' id='attcfiledownload' onmouseover='attachFileDownload(this);'></a></div>");
			$lastRow.find("td:eq(4)").find("a").on("click",function(){
				fipaAttachmentDownload($lastRow.find("td:eq(0)").find('input:eq(1)').val());
			}); 
			break;
			
		case "pageNo": 
			$lastRow.find("td:eq(5)").find('input:eq(0)').val(col);
			$lastRow.find("td:eq(5)").find('input:eq(0)').prop("disabled",true);
			break;
			
			
		case "filetype": 
			var filetype=col;
			filetype = filetype.indexOf("/") != -1 ? filetype.substr(filetype.indexOf("/")+1): filetype;
			$lastRow.find("td:eq(6)").find("span").text(filetype); 				
			break;
			
		case "filesize": 
			$lastRow.find("td:eq(6)").find('input:eq(0)').val(col); 			
			break;
		
		case "attachDate": 
			$lastRow.find("td:eq(6)").find('input:eq(1)').val(col); 
			break;
		
		case "moduleRef": 
			$lastRow.find("td:eq(6)").find('input:eq(2)').val(col); 
			break;
			
		case "referenceId":
			$lastRow.find("td:eq(6)").find('input:eq(3)').val(col); 
			break;
			
		case "remarks":
			$lastRow.find("td:eq(7)").find('input:eq(0)').val(col); 
			$lastRow.find("td:eq(7)").find('input:eq(0)').prop("disabled",true);
			break;
		 
		
		case "createdBy": 
			$lastRow.find("td:eq(7)").find('input:eq(1)').val(col);
			infoDetsArr.push(col);				
			break;
			
		case "createdDate":
			$lastRow.find("td:eq(7)").find('input:eq(2)').val(col);
			infoDetsArr.push(col);
			break;
			 
		}			 
		 
	}
	} 
else{
	crudicons(null,'fnaAttachments','SelfnaAttachments','','DcAttchDRow');
}
 

}



function fipaAttachmentDownload(DocId){ 
	var URL = BASE_URL+"/FileDownload.do?documentId="+DocId; 
	window.open(URL,'_new'); 
}

//DHTML SELECT ALL
function SelAllfnaAttachments(obj){
	
	if($(obj).is(":checked")){
		
		$('#fnaAttachments tbody tr').find("td:eq(1)").find("input[type=checkbox]").prop("checked",true);
		
		$("#DcAttchDRow").attr("disabled",false);
		$('#fnaAttachments tbody tr').addClass("selected");
		
		var $rowCount = $('#fnaAttachments tbody tr').length;
		
		if($rowCount == 0){
			$(obj).prop("checked",false);
			
			/*$("#DcAttchDRow").attr("disabled",true);*/
		}else if($rowCount == 1){
			
			$("#DcAttchDRow").attr("disabled",false);
		}else if($rowCount > 1){
			
			$("#DcAttchDRow").attr("disabled",false);
		}
		
	}else{
		
		$('#fnaAttachments tbody tr').find("td:eq(1)").find("input[type=checkbox]").prop("checked",false);
		
		$('#fnaAttachments tbody tr').removeClass("selected");
		
		
	/*	$("#DcAttchDRow").attr("disabled",true);*/
		
	}
}

/*Delete Row Click */
$("#DcAttchDRow").on("click",function(){ 
	datatableDeleteRow('fnaAttachments',fnaAttachments,'SelfnaAttachments','','DcAttchDRow'); 
/*//	DHTML CRUD ICONS
	var rc = fnaAttachments.row().count();
	if(rc ==0){
		$("#SelfnaAttachments").prop("checked",false);
		crudicons(this,'fnaAttachments','SelfnaAttachments','','DcAttchDRow');
	}
//	DHTML CRUD ICONS
*/});

 


/*Clear Fields */
function AttchClearFlds(){
	$("#attachments_Dialog").find("input").val("");
	$("#attachments_Dialog").find("textarea").val("");
	$("#attachments_Dialog").find("select").val("");
}

/*Disabled/Readonly Fields */
function AttchRdlyflds(mode){  
	 if(mode == QRY_MODE ){
			$("#attachments_Dialog :input").prop("disabled", true); 
	 }else if((mode == INS_MODE) || (mode == UPD_MODE) ){
			$("#attachments_Dialog :input").prop("disabled", false);
	 }
}

/*Validation */
function validateAttchDetails(){ 
		 
		var $RowCount = fnaAttachments.rows().count();

		var valid=true;
		if($RowCount > 0 ){ 
			
			$("#fnaAttachments tbody tr").each(function(){
				var $lastRow=$(this); 
				if(!(validateFocusDhtmlFlds($lastRow.find("td:eq(2)").find('select:eq(0)'), ATTACH_CATG,SCREEN_ATTACH))) {valid=false;return false;};
				if(!(validateFocusDhtmlFlds($lastRow.find("td:eq(3)").find('select:eq(0)'), ATTACH_TITLE,SCREEN_ATTACH))) {valid=false;return false;};
				if($lastRow.find("td:eq(4)").find('a').length == 0){
					if(!(validateFocusDhtmlFlds($lastRow.find("td:eq(4)").find('input:eq(0)'), ATTACH_DOC,SCREEN_ATTACH))){valid=false;return false;}; 
				}
			});
			 
		} 
	  return valid; 
}




 


/*Functionalities*/
$("#selDlgAttTitle").on("change",function(){
	
	var categid = $(this).val();
	
	$("#hidattachcatgid").val(categid);
});


$("#selDlgAttCategory").on("change",function(){
	
	var $docTitle = $("#selDlgAttTitle");
	
	var categVal = $(this).val();
	
	$docTitle.empty().append('<option value="">--SELECT--</option>');	
	
	$("#selhidAttTitle > option").each(function() {
		if(categVal == this.value.split("^")[1]){
			$('#selDlgAttTitle').append("<option value='"+this.value.split("^")[0]+"'>"+this.text+"</option>");			 
		}
	});	
});
 
