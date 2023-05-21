 
$("#genBasicicon").on("click",function(){
	getBasicfn(true,null);
});


function getBasicfn(validateprevdata,dataset){

	
//	var tdpos=Number($("#cvplnleftpaneltbl tbody tr:eq(0)").find("td").length);
//	var nexttd = Number(tdpos) + 1;
	
	
	if(validateprevdata){
		
		if(dataset  == null){
			if(!checkRidervalidation())return;
		}
				
		
		$("#cvplnleftpaneltbl tbody tr").each(function(i,e){
			
			var thisrow = $(this);
			
			 var total_basics = $("#cvplnleftpaneltbl tbody tr:eq(0)").find("input[name=txtFldTotalRiders]").length;
			
			var ori=thisrow.find("td:last").find("select,input[type='text'],textarea").prop("name");
			var formulsel = thisrow.find("td:last").find("select").hasClass("multibenefits");
			
			var currid = ori + "B" + total_basics;
			
			if(formulsel){
				
				thisrow.find("td:last").after("<td width='1%' class='cvborder-bottom'>"+$("#appendRMultselect").html()+"</td>");
				thisrow.find("td:last").find(":input").prop("id",currid);
				genMultseltBR(currid);
				
				$("#"+currid).parents("td").find("span.multiselect-native-select").find("ul.multiselect-container").find("label.checkbox").removeClass("checkbox");
				
			}else{
				$('#cvplnleftpaneltbl tbody tr:eq('+i+')').find("td:last").after("<td width='1%' class='cvborder-bottom'>"+$("#cvplnleftpaneltbl tbody").find("tr:eq("+i+")").find("td:eq(0)").html()+"</td>");  
				$("#cvplnleftpaneltbl tbody").find("tr:eq("+i+")").find("td:last").find("select,input[type='text'],textarea").prop("id",currid);
				$("#cvplnleftpaneltbl tbody").find("tr:eq("+i+")").find("td:last").find("label[class=switchs]").find("input:eq(0)").prop("id",currid);
				if( i == 0){
					$("#cvplnleftpaneltbl tbody").find("tr:eq("+i+")").find("td:last").addClass("basicplantd");
				}
			}   
			 
			var chkhasdate=thisrow.find("td:last").find("select,input[type='text'],textarea").closest("div").hasClass("date");
			if(chkhasdate){
				thisrow.find("td:last").find("input[type='text']").closest("div").prop("id",currid);
				thisrow.find("td:last").find("input[type='text']").closest("div").datetimepicker(dateOptions).on("change", function() {
					checkDateFormat($(this));
				}); 
				
				
				$('#'+currid).on("change", function() {
					checkDateFormat($(this));
				}); 
			}  
		}); 
	}
	 
	
	
	
	var total_cell= $('#cvplnleftpaneltbl tbody tr:eq(0)').find("td").length;
	total_cell = total_cell-1;
	
	var noofbsc = Number($("#cvplnleftpaneltbl").find("td.basicplantd").length);
	var ori = $('#cvplnleftpaneltbl tbody tr:first').find("td:eq("+total_cell+")").find("select,input[type='text'],textarea").prop("name");
	var currid = ori + "B" + noofbsc;
	
	
	$('#cvplnleftpaneltbl tbody tr:first').find("td:eq("+total_cell+")").find("span").text("B"+noofbsc);
	$('#cvplnleftpaneltbl tbody tr:first').find("td:eq("+total_cell+")").find("div.hiddens").find("input:eq(0)").val("B"+noofbsc);
	
	if(dataset != null){
		
		displayValue(dataset, null, total_cell);
		$('#cvplnleftpaneltbl tbody tr:first').find("td:eq("+total_cell+")").find("div.hiddens").find("input:eq(0)").val("B"+noofbsc);
		
	}else{
		
//		var hori=$("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:last").find("div.hiddens").find("input:eq(0)").prop("id").split("B");   
		$("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:eq("+total_cell+")").find("div.hiddens").find("input:eq(0)").prop("id",currid);
		$("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:eq("+total_cell+")").find("div.hiddens").find("input:eq(1)").val("");//<!-- Created By -->
		$("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:eq("+total_cell+")").find("div.hiddens").find("input:eq(2)").val("");//<!-- Created Date -->
		$("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:eq("+total_cell+")").find("div.hiddens").find("input:eq(3)").val($("#retYrstoret").val());//<!-- Yrs to ret -->
		$("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:eq("+total_cell+")").find("div.hiddens").find("input:eq(4)").val($("#retSelfCoordinateage").val());//<!-- Co-self age -->
		$("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:eq("+total_cell+")").find("div.hiddens").find("input:eq(5)").val($("#retSpsCoordinateage").val());//<!-- Co-spouse age -->
		$("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:eq("+total_cell+")").find("div.hiddens").find("input:eq(6)").val("");//<!-- Mulition  -->
		$("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:eq("+total_cell+")").find("div.hiddens").find("input:eq(7)").val("");//<!-- Cash value on Ret -->
		$("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:eq("+total_cell+")").find("div.hiddens").find("input:eq(8)").val($("#caSavingDeprate").val());//<!-- Int rate used -->
		$("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:eq("+total_cell+")").find("div.hiddens").find("input:eq(9)").val("");//<!-- Prct used-->
		$("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:eq("+total_cell+")").find("div.hiddens").find("input:eq(10)").val("");//<!-- Cash value on ret -->
		$("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:eq("+total_cell+")").find("div.hiddens").find("input:eq(11)").val("");//<!-- Cash val Ref Id -->
		$("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:eq("+total_cell+")").find("div.hiddens").find("input:eq(12)").val(INS_MODE);//<!-- Cash val Ref Id -->
		 
		
		
		var ridernewid = makeid(17);
		var noofbsc_ = Number($("#cvplnleftpaneltbl").find("input[value=Basic]").length);
		var BASIC_REF = "B"+noofbsc_;
		$("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:eq("+total_cell+")").find("div.hiddens").find("input:eq(0)").val(BASIC_REF);
		$("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:eq("+total_cell+")").find("div.hiddens").find("input:eq(12)").val("I");
		  
		$("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:eq("+total_cell+")").find("div.hiddens").find("input:eq(13)").val(ridernewid);
		$("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:eq("+total_cell+")").find("div.hiddens").find("input:eq(14)").val(newMakeId("LIP"+noofbsc, 12));
		$("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:eq("+total_cell+")").find("div.hiddens").find("input:eq(18)").val(newMakeId("REF", 12));
		
		$("#cvplnleftpaneltbl tbody").find("tr:eq(1)").find("td:eq("+total_cell+")").find("input:eq(0)").focus();
		
		$("#cvplnleftpaneltbl tbody").find("tr:eq(2)").find("td:eq("+total_cell+")").find("span.multiselect-native-select").find("ul.multiselect-container").find("label.checkbox").removeClass("checkbox");
		
		$("#cvplnleftpaneltbl tbody").find("tr:eq(6)").find("td:eq("+total_cell+")").find("input:eq(0)").prop("checked",true);
		if(validateprevdata){
			$("#cvplnleftpaneltbl tbody").find("tr:eq(5)").find("td:eq("+total_cell+")").find("input:eq(0)").val($("#lipIncepdate").val());
			$("#cvplnleftpaneltbl tbody").find("tr:eq(7)").find("td:eq("+total_cell+")").find("input:eq(0)").val($("#lipExpdate").val());
			
		}
		
		
	}
	
	$(".cashflowst").on("change",function(){
		calcTotSAPremPlandetails();
	});
	
	if(isEmpty($("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:eq("+total_cell+")").find("div.hiddens").find("input:eq(18)").val())){
		$("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:eq("+total_cell+")").find("div.hiddens").find("input:eq(18)").val(newMakeId("REF", 12));
	}
	 
	applyEventHandlers();
	showTooltip('basicDelbtn', BASIC_DELETE);
	showTooltip('riderDelbtn', RIDER_DELETE);
	showTooltipCls('covrgico', COVERAGE_PLAN); 
	showTooltipCls('covrgicoAdd', COVERAGE_PLAN); 
	showTooltipCls('genAddRProicon', ADD_RIDER);
	showTooltipCls('genAddBProicon', ADD_BASIC);
	planAlertInfo();

}




function genRiderfn(curElm,validateprevdata,dataset){
	
	var basiccount = $(curElm).parents("td").find("div.hiddens").find("input:eq(0)").val(); 
	var basicMode = $(curElm).parents("td").find("div.hiddens").find("input:eq(12)").val();
	var basicRefId = $(curElm).parents("td").find("div.hiddens").find("input:eq(14)").val();
	var totalRiderElm = $(curElm).parents("td").find("div.hiddens").find("input:eq(17)");
	var totalRiders = totalRiderElm.val();
	
	if(validateprevdata){
		if(!checkRidervalidation())return;	
	}
	 
	
	if(basicMode != DEL_MODE){
		
		var tdpos=Number($(curElm).parents("td").index());
		var nexttd = Number(tdpos) + 1;
		
		
		var ridercount = "R"+totalRiders;//basiccount
		var text = "";
		
		if(validateprevdata){
			
			totalRiders = isEmpty(totalRiders) ?0:totalRiders;
			totalRiders = Number(totalRiders)+1;
			
			var currid = basiccount+"R"+totalRiders;
			
			
			$("#cvplnleftpaneltbl tbody tr").each(function(i,e){ 

				
				var currbasid = $('#cvplnleftpaneltbl tbody tr:eq('+i+')').find("td:eq(0)").find(":input").prop("name");
				var currhtml = $('#toAppendCVPlan table tbody tr:eq('+i+')').find("td:eq(0)").html();		
				var newriderid = currbasid  + currid;
				
				var formulselR = $("#cvplnleftpaneltbl tbody").find("tr:eq("+i+")").find("td:eq(0)").find("select").hasClass("multibenefits");
				
				if(formulselR){  
					
					
					$('#cvplnleftpaneltbl tbody tr:eq('+i+')').find("td:eq("+tdpos+")").after("<td width='1%' class='cvborder-bottom'>"+$("#appendRMultselect").html()+"</td>");
					
					$("#cvplnleftpaneltbl tbody").find("tr:eq("+i+")").find("td:eq("+nexttd+")").find(":input").prop("id",newriderid);
					
					genMultseltBR(newriderid); 
					
					$("#"+newriderid).parents("td").find("span.multiselect-native-select").find("ul.multiselect-container").find("label.checkbox").removeClass("checkbox");
					
				}else{
					$('#cvplnleftpaneltbl tbody tr:eq('+i+')').find("td:eq("+tdpos+")").after("<td width='1%' class='cvborder-bottom'>"+currhtml+"</td>");
					
					$("#cvplnleftpaneltbl tbody").find("tr:eq("+i+")").find("td:eq("+nexttd+")").find("label[class=switchs]").find("input:eq(0)").prop("id",newriderid);
					$("#cvplnleftpaneltbl tbody").find("tr:eq("+i+")").find("td:eq("+nexttd+")").find(":input").prop("id",newriderid);
					$("#cvplnleftpaneltbl tbody").find("tr:eq("+i+")").find("td:eq("+nexttd+")").find("div.date").prop("id","div_"+newriderid);
					
					var chkhasdateR=$("#cvplnleftpaneltbl tbody").find("tr:eq("+i+")").find("td:eq("+nexttd+")").find("div").hasClass("date");
					
					if(chkhasdateR){
						
						$("#div_"+newriderid).datetimepicker(dateOptions).on("change", function() {
							checkDateFormat($(this));
						});  
						
					 }
					
					if( i == 0){
						$("#cvplnleftpaneltbl tbody").find("tr:eq("+i+")").find("td:eq("+nexttd+")").addClass("riderplantd");
					}
					
				}
				
			 });
			
		}
		
 
	  
	var currbasid = $('#cvplnleftpaneltbl tbody tr:eq(0)').find("td:eq("+tdpos+")").find(":input").prop("name");
	var currid = basiccount+"R"+totalRiders;
	var newriderid = currbasid.substr(0,currbasid.length-5) + currid;
	
//	hiddens
	var index = nexttd ;//$('#cvplnleftpaneltbl tbody tr:eq(11)').find("td").find("textarea[id="+currid+"]").closest("td").index();
	
	
	if(dataset != null){
		
		displayValue(dataset, null, index);
		
		$("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:eq("+index+")").find("span.lblbadge").text(basiccount);
		
		
	}else{
		
		$("#cvplnleftpaneltbl table tbody").find("tr:eq(0)").find("td:eq("+index+")").find("div.hiddens").find("input:eq(0)").prop("id",newriderid);
		$("#cvplnleftpaneltbl table tbody").find("tr:eq(0)").find("td:eq("+index+")").find("div.hiddens").find("input:eq(1)").val("");//<!-- Created By -->
		$("#cvplnleftpaneltbl table tbody").find("tr:eq(0)").find("td:eq("+index+")").find("div.hiddens").find("input:eq(2)").val("");//<!-- Created Date -->
		$("#cvplnleftpaneltbl table tbody").find("tr:eq(0)").find("td:eq("+index+")").find("div.hiddens").find("input:eq(3)").val($("#retYrstoret").val());//<!-- Yrs to ret -->
		$("#cvplnleftpaneltbl table tbody").find("tr:eq(0)").find("td:eq("+index+")").find("div.hiddens").find("input:eq(4)").val($("#retSelfCoordinateage").val());//<!-- Co-self age -->
		$("#cvplnleftpaneltbl table tbody").find("tr:eq(0)").find("td:eq("+index+")").find("div.hiddens").find("input:eq(5)").val($("#retSpsCoordinateage").val());//<!-- Co-spouse age -->
		$("#cvplnleftpaneltbl table tbody").find("tr:eq(0)").find("td:eq("+index+")").find("div.hiddens").find("input:eq(6)").val("");//<!-- Mulition  -->
		$("#cvplnleftpaneltbl table tbody").find("tr:eq(0)").find("td:eq("+index+")").find("div.hiddens").find("input:eq(7)").val("");//<!-- Cash value on Ret -->
		$("#cvplnleftpaneltbl table tbody").find("tr:eq(0)").find("td:eq("+index+")").find("div.hiddens").find("input:eq(8)").val($("#caSavingDeprate").val());//<!-- Int rate used -->
		$("#cvplnleftpaneltbl table tbody").find("tr:eq(0)").find("td:eq("+index+")").find("div.hiddens").find("input:eq(9)").val("");//<!-- Prct used-->
		$("#cvplnleftpaneltbl table tbody").find("tr:eq(0)").find("td:eq("+index+")").find("div.hiddens").find("input:eq(10)").val("");//<!-- Cash value on ret -->
		$("#cvplnleftpaneltbl table tbody").find("tr:eq(0)").find("td:eq("+index+")").find("div.hiddens").find("input:eq(11)").val("");//<!-- Cash val Ref Id -->  

		
		$("#cvplnleftpaneltbl tbody").find("tr:eq(5)").find("td:eq("+index+")").find("input:eq(0)").val($("#lipIncepdate").val());
		$("#cvplnleftpaneltbl tbody").find("tr:eq(7)").find("td:eq("+index+")").find("input:eq(0)").val($("#lipExpdate").val());	
		
		
		var basicnewid = makeid(17); 
		$("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:eq("+index+")").find("div.hiddens").find("input:eq(0)").val(ridercount);
		$("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:eq("+index+")").find("div.hiddens").find("input:eq(12)").val(INS_MODE);	
		$("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:eq("+index+")").find("div.hiddens").find("input:eq(13)").val(basicnewid);
		$("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:eq("+index+")").find("div.hiddens").find("input:eq(14)").val(basicRefId);
		$("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:eq("+index+")").find("div.hiddens").find("input:eq(18)").val(newMakeId("REF", 12));
		$("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:eq("+index+")").find("div:eq(1)").find("input:eq(0)").prop("disabled",true);
		
		$("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:eq("+index+")").find("span.lblbadge").text(basiccount);
		
		$("#cvplnleftpaneltbl tbody").find("tr:eq(6)").find("td:eq("+index+")").find("input:eq(0)").prop("checked",true);
		$("#cvplnleftpaneltbl tbody").find("tr:eq(1)").find("td:eq("+index+")").find("input:eq(0)").focus();


		
	}
	
	totalRiderElm.val(totalRiders);
	
	$(".cashflowst").on("change",function(){
		calcTotSAPremPlandetails();
	});
	
	if(isEmpty($("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:eq("+index+")").find("div.hiddens").find("input:eq(18)").val())){
		$("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:eq("+index+")").find("div.hiddens").find("input:eq(18)").val(newMakeId("REF", 12));
	}

		 
	applyEventHandlers();
	showTooltip('basicDelbtn', BASIC_DELETE);
	showTooltip('riderDelbtn', RIDER_DELETE); 
	showTooltipCls('covrgico', COVERAGE_PLAN); 
	showTooltipCls('covrgicoAdd', COVERAGE_PLAN); 
	showTooltipCls('genAddRProicon', ADD_RIDER);
	showTooltipCls('genAddBProicon', ADD_BASIC);
	planAlertInfo();
	
	}else{
		applyErrorToastrAlert("Rider cannot be added when this basic is in DELETE MODE");
		$(curElm).css({"cursor": "not-allowed","pointer-events": "none"});
		$(curElm).off("click");
	}
}

/*function setPlanBTheme(){
	$("#cvplnleftpaneltbl tbody").find("tr").find("td").addClass("cvborder-topbottom");
	$("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:last").addClass("cvborder-bottom");
	$("#cvplnleftpaneltbl tbody").find("tr:eq(11)").find("td:last").addClass("cvborder-top");
}*/




/*function setPlanRTheme(index){ 
	$("#cvplnleftpaneltbl tbody").find("tr").find("td").addClass("cvborder-topbottom");
	$("#cvplnleftpaneltbl tbody").find("tr").find("td").find("input,select,textarea").prop("disabled",false);
	$("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:eq("+index+")").addClass("cvborder-bottom");
	$("#cvplnleftpaneltbl tbody").find("tr:eq(11)").find("td:eq("+index+")").addClass("cvborder-top");
	
}*/


 /*Validation */
function checkRidervalidation(){ 
	 
	var valid=true; 
	
	var totaltd = $("#cvplnleftpaneltbl tbody tr:eq(1) td").length;
	for(var td = 0; td<totaltd ;td++){
		if(!(validateFocusDhtmlFlds($("#cvplnleftpaneltbl tbody tr:eq(1)").find("td:eq("+td+")").find('input:eq(0)'), "Key-in Plan Name",SCREEN_LIFEPLAN))) {return valid=false;;};
		if(!(validateFocusDhtmlFlds($("#cvplnleftpaneltbl tbody tr:eq(3)").find("td:eq("+td+")").find('input:eq(0)'), "Key-in Sum Assured",SCREEN_LIFEPLAN))) { return valid=false;;};
		if(!(validateFocusDhtmlFlds($("#cvplnleftpaneltbl tbody tr:eq(4)").find("td:eq("+td+")").find('input:eq(0)'), "Key-in Premium",SCREEN_LIFEPLAN))) {return valid=false;;};
		if(!(validateFocusDhtmlFlds($("#cvplnleftpaneltbl tbody tr:eq(5)").find("td:eq("+td+")").find('input:eq(0)'), "Key-in Inception Date",SCREEN_LIFEPLAN))) {return valid=false;;};
		if(!(validateFocusDhtmlFlds($("#cvplnleftpaneltbl tbody tr:eq(6)").find("td:eq("+td+")").find('input:last'), "Key-in Premium Term",SCREEN_LIFEPLAN))) {return valid=false;;};
	 
	}
			
	  
  return valid; 
}

function chkPrevMandatory(obj){
	if(!checkRidervalidation()){
		$(obj).val("");
		return;	
	}
}

function checkRiderValidWithoutMsg(){ 
	 
	var valid=true; 
	
	var totaltd = $("#cvplnleftpaneltbl tbody tr:eq(1) td").length;
	for(var td = 0; td<totaltd ;td++){
		
		console.log("td-----------"+td)
		console.log($("#cvplnleftpaneltbl tbody tr:eq(1)").find("td:eq("+td+")").find('input:eq(0)').val())
		console.log($("#cvplnleftpaneltbl tbody tr:eq(3)").find("td:eq("+td+")").find('input:eq(0)').val())
		
		console.log($("#cvplnleftpaneltbl tbody tr:eq(4)").find("td:eq("+td+")").find('input:eq(0)').val())
		console.log($("#cvplnleftpaneltbl tbody tr:eq(5)").find("td:eq("+td+")").find('input:eq(0)').val())
		console.log($("#cvplnleftpaneltbl tbody tr:eq(6)").find("td:eq("+td+")").find('input:last').val())
		console.log("td-----------")
		
		
		if(isEmpty($("#cvplnleftpaneltbl tbody tr:eq(1)").find("td:eq("+td+")").find('input:eq(0)').val()))return valid=false;
		if(isEmpty($("#cvplnleftpaneltbl tbody tr:eq(3)").find("td:eq("+td+")").find('input:eq(0)').val()))return valid=false;
		if(isEmpty($("#cvplnleftpaneltbl tbody tr:eq(4)").find("td:eq("+td+")").find('input:eq(0)').val()))return valid=false;
		if(isEmpty($("#cvplnleftpaneltbl tbody tr:eq(5)").find("td:eq("+td+")").find('input:eq(0)').val()))return valid=false;
		if(isEmpty($("#cvplnleftpaneltbl tbody tr:eq(6)").find("td:eq("+td+")").find('input:last').val()))return valid=false;
		
	 
	}
			
	  
  return valid; 
}

function chkPaymentMode(obj){
	
	var tdpos=Number($(obj).closest("td").index());
	
	var incDate= $("#cvplnleftpaneltbl tbody tr:eq(5)").find("td:eq("+tdpos+")").find("input:eq(0)");
	var term   = $("#cvplnleftpaneltbl tbody tr:eq(6)").find("td:eq("+tdpos+")").find("input:eq(1)");
	
    var expDate= $("#cvplnleftpaneltbl tbody tr:eq(7)").find("td:eq("+tdpos+")").find("input:eq(0)"); 
    var paymode= $("#cvplnleftpaneltbl tbody tr:eq(8)").find("td:eq("+tdpos+")").find("select:eq(0)"); 
	
	var paymodeval = paymode.val();
	
	if(!isEmpty(paymodeval) && paymodeval == "SINGLE"){
		if(isEmpty(term.val()))term.val("0");
		changeNRExpDate(term);
		
	}
	
}


function colorChangeRetEdu(){ 
//	var plan = $("#covPlanName").text();
	
//	setTimeout(function(){ 
		var retBool = false;
		 var RetRowCount = liRetirementPlgtbl.rows().count();
		 var multiret  = $("#retMultionret").val();
		 
		 if((!isEmpty(multiret) && multiret == "N") || (!isEmpty(multiret) && multiret == "Y" && RetRowCount >0 )){
		 
//		 if((RetRowCount >0 ) || !isEmpty(multiret) || !isEmpty($("#covMultion").text())){
			 
			 retBool=true; 
			 return retBool;
				
			/*$("#liRetirementPlgtbl tbody tr").find("input[name=txtFldMvretPlanName]").each(function(){
		
				var value = $(this).val();
				if(plan ==  value){
					retBool=true; 
					 return retBool;
				}
			 });*/
		 }
				
			if(retBool){
				$(".educationclone").removeClass("btn-default");
				$(".educationclone").addClass("btn-success");
			}else{
				$(".educationclone").removeClass("btn-success");
				$(".educationclone").addClass("btn-default");
			}
				
			var eduBool = false;
			var EduRowCount =liEducationtbl.rows().count();
			if(EduRowCount > 0){
				
				eduBool=true;
				 return eduBool;
				 
			/*$("#liEducationtbl tbody tr").find("input[name=txtFldChldPlanName]").each(function(){
		
				var value = $(this).val();
				if(plan ==  value){
					eduBool=true;
				 return eduBool;
				}
			 });*/
			}
			
			if(eduBool){
				$(".educationclone").removeClass("btn-default");
				$(".educationclone").addClass("btn-success");
			}else{
				$(".educationclone").removeClass("btn-success");
				$(".educationclone").addClass("btn-default");
			}
//	 },100);
}


function changeNRExpDate(curElm){
	var tdpos=Number($(curElm).closest("td").index());
	
	var incDate= $("#cvplnleftpaneltbl tbody tr:eq(5)").find("td:eq("+tdpos+")").find("input:eq(0)");
	var term   = $("#cvplnleftpaneltbl tbody tr:eq(6)").find("td:eq("+tdpos+")").find("input:eq(1)");
	
    var expDate= $("#cvplnleftpaneltbl tbody tr:eq(7)").find("td:eq("+tdpos+")").find("input:eq(0)"); 
    calculateEndDateFromYear(term,incDate,expDate);
	
}


function delRidfn(curElm){ 
	
		 var totalRiders = $(curElm).closest("tr").find("td.basicplantd").find("input[name=txtFldTotalRiders]").val();
		 totalRiders = isEmpty(totalRiders) ? 0 : Number(totalRiders)-1;
			
		var totalRidercntElm = $(curElm).closest("tr").find("td.basicplantd").find("input[name=txtFldTotalRiders]");
	
	var tdpos=Number($(curElm).closest("td").index());  
	var mode=$(curElm).parents("td").find("div.hiddens").find("input:eq(12)").val();
	var riderRef = $(curElm).parents("td").find("div.hiddens").find("input:eq(0)").val();
	 var riderPKId = $(curElm).parents("td").find("div.hiddens").find("input:eq(13)").val();
	 var syncRef = $(curElm).parents("td").find("div.hiddens").find("input:eq(18)").val();
	 
	 
	 $("#confirmationalertmsgdiv #confalertimg").html(""); 
		$("#confirmationalertmsgdiv #confalertmsg").html("The FIPA system will also delete all the associated coverages.<br/>Are you sure to delete this rider plan?");
		$('#confirmationalertmsgdiv').modal({
			  backdrop: 'static',
			  keyboard: false,
			  show:true,
			}); 
		
		$('#confirmationalertmsgdiv').on('shown.bs.modal', function() {  
			$('#confirmationalertmsgdiv').find(".modal-title").text("FIPA - Confirm?");
			
			$('#confirmationalertmsgdiv').find(".modal-footer").find("button:eq(0)").unbind(); 
			
			$('#confirmationalertmsgdiv').find(".modal-footer").find("button:eq(0)").click(function (){  
				

				 if(mode == INS_MODE){
						$("#cvplnleftpaneltbl tbody tr").each(function(){
								$(this).closest("tr").find("td:eq("+tdpos+")").remove();
						});
					 }else if(mode == QRY_MODE || mode == UPD_MODE){
						 $("#cvplnleftpaneltbl tbody tr").each(function(){
							 $(this).closest("tr").find("td:eq("+tdpos+")").find("input:eq(12)").val("D");
//							 $(this).closest("tr").find("td:eq("+tdpos+")").find("div[class=row]").css("border","1px solid red");
							 $(this).closest("tr").find("td:eq("+tdpos+")").css("opacity", "0.5");
							 $(this).closest("tr").find("td:eq("+tdpos+")").css("pointer-events","none");
							 $(this).closest("tr").find("td:eq("+tdpos+")").find(":input,img").off("click");
							 $(this).closest("tr").find("td:eq("+tdpos+")").fadeTo(0, 0.5);
							 $(this).closest("tr").find("td:eq("+tdpos+")").fadeIn();
						}); 
					 } 
					 
					 totalRidercntElm.val(totalRiders);
					 
//					 planAlertInfo();
					 
					 newplancoverageDelete(riderPKId);
					 
					 calcTotSAPremPlandetails();
					 
					 newplaneducationDelete(riderPKId);
//					 newplanretirementDelete(riderPKId);
					 
					 deleteRetMultiByRefId(riderPKId);
					 deleteRetPlanMultiByRefId(syncRef);
					 
					 syncNLAllDelete(riderPKId);
					 syncNLAllDelete(syncRef);
				 
				 $('#confirmationalertmsgdiv').modal('hide');  
				  	
			  });
			$('#confirmationalertmsgdiv').find(".modal-footer").find("button:eq(1)").click(function (){ 
				  	$('#confirmationalertmsgdiv').modal('hide');  
				  	
			  });
			
		});
	 

	 
	 
}

function delBRfn(curElm){
	
//	 var basicRef=$(curElm).parents("td").find("div.hiddens").find("span").text(); 
	 var bRef= $(curElm).parents("td").find("div.hiddens").find("input:eq(0)").val();
	 
	 var mode = $(curElm).parents("td").find("div.hiddens").find("input:eq(12)").val();
	 var basicplanref = $(curElm).parents("td").find("div.hiddens").find("input:eq(14)").val();
	 var basicplanpkid = $(curElm).parents("td").find("div.hiddens").find("input:eq(13)").val();
	 var syncRef= $(curElm).parents("td").find("div.hiddens").find("input:eq(18)").val();
	 
	 var total_basics = $("#cvplnleftpaneltbl tbody tr:eq(0)").find("td.basicplantd").length;
	 
	 
//	 var tdpos=Number($(curElm).closest("td").index());  
	 
	 if(total_basics > 1){
		 

			$("#confirmationalertmsgdiv #confalertimg").html(""); 
			$("#confirmationalertmsgdiv #confalertmsg").html("The FIPA system will also delete all the associated riders,coverages.<br/>Are you sure to delete this Basic plan?");
			$('#confirmationalertmsgdiv').modal({
				  backdrop: 'static',
				  keyboard: false,
				  show:true,
				}); 
			
			$('#confirmationalertmsgdiv').on('shown.bs.modal', function() {  
				$('#confirmationalertmsgdiv').find(".modal-title").text("FIPA - Confirm?");
				
				$('#confirmationalertmsgdiv').find(".modal-footer").find("button:eq(0)").unbind(); 
				
				$('#confirmationalertmsgdiv').find(".modal-footer").find("button:eq(0)").click(function (){  
					
					 var ind=[];
					 $("#cvplnleftpaneltbl tbody tr:eq(0) td").each(function(){ 
						 var bpref=$(this).find("input:eq(14)").val();
						 if(bpref == basicplanref){
							 ind.push($(this).index());
						 }
					 });
					 
//					 if(ind.length > 1){
//						 alert("All related riders also deleted!");
//					 }
					 
					 $.each(ind, function( index, value ) {  
						 $("#cvplnleftpaneltbl tbody tr").each(function(){

							 if(mode == INS_MODE){
								 
								 $(this).find("td:eq("+value+")").find("input:eq(12)").val("D");
//								 $(this).find("td:eq("+value+")").find("div[class=row]").css("border","1px solid red");
								 $(this).find("td:eq("+ind[0]+")").remove();
//								 $(this).find("td:eq("+ind[0]+")").remove();
								 
							 }else if(mode == QRY_MODE || mode == UPD_MODE){
								 $(this).find("td:eq("+value+")").find("input:eq(12)").val("D");
//								 $(this).find("td:eq("+value+")").css("border","1px solid red");
								 $(this).find("td:eq("+value+")").css("opacity", "0.5");
								 $(this).find("td:eq("+value+")").css("pointer-events","none");
								 $(this).find("td:eq("+value+")").find(":input,img").off("click");
								 $(this).find("td:eq("+value+")").fadeTo(0, 0.5);
								 $(this).find("td:eq("+value+")").fadeIn();
							 }
						 });  
					}); 
					 
					 $('#confirmationalertmsgdiv').modal('hide');  
					 
					 newplancoverageDelete(basicplanpkid);
					 newplaneducationDelete(basicplanpkid);
					 newplanretirementDelete(basicplanpkid);
					 syncNLAllDelete(syncRef);
					  	
				  });
				$('#confirmationalertmsgdiv').find(".modal-footer").find("button:eq(1)").click(function (){ 
					  	$('#confirmationalertmsgdiv').modal('hide');  
					  	
				  });
				
			});
			
	
			planAlertInfo();
	 
	 }else{
		 applyErrorToastrAlert("Atleast 1 Basic plan is required to register a policy!");
	 }
	 
	
}

function syncNLAllDelete($rowref){
	/*var cpfAccAddDedTablelen = cpfAccAddDedTable.rows().count();
	if(cpfAccAddDedTablelen > 0){
		$("#cpfAccAddDedTable tbody tr").each(function(){
			
			var cpfCurRef = $(this).find("td:eq(0)").find("input:eq(2)").val();
			var cpfCurMode = $(this).find("td:eq(0)").find("input:eq(0)").val();
			
			if(cpfCurRef == syncRef){
				if(cpfCurMode == INS_MODE){ 
					$(this).find("td:first").find('input:eq(0)').val(DEL_MODE); 
					$(this).hide();
//					cpfAccAddDedTable.row($(this)).remove().draw(); 
				}else if (cpfCurMode == QRY_MODE){    
					$(this).find("td:first").find('input:eq(0)').val(DEL_MODE);      		     			
					$(this).find("td").css({border:'1px solid red'});  
				} 
			}
		});
	}*/
	
	deleteCPFMultiByRefId($rowref)
	
	
	
	/*var srsTablelen = srsTable.rows().count();
	if(srsTablelen > 0){
		$("#srsTable tbody tr").each(function(){
			
			var srsCurRef = $(this).find("td:eq(0)").find("input:eq(2)").val();
			var srsCurMode = $(this).find("td:eq(0)").find("input:eq(0)").val();
			
					if(srsCurRef == syncRef){
						if(srsCurMode == INS_MODE){ 
//							srsTable.row($(this)).remove().draw(); 
							$(this).find("td:first").find('input:eq(0)').val(DEL_MODE);  
							$(this).hide()
						}else if (srsCurMode == QRY_MODE){    
							$(this).find("td:first").find('input:eq(0)').val(DEL_MODE);      		     			
							$(this).find("td").css({border:'1px solid red'});  
						} 
					}
		});
	}*/
	
	deleteSRSMultiByRefId($rowref);
	
	
}

function newplancoverageDelete(Ref){
	//Coverage Benefit delete function
	
	var planCoverageslen = planCoveragestbl.rows().count();
	if(planCoverageslen > 0){
		$("#planCoveragestbl tbody tr").each(function(){
			var CurRef = $(this).find("td:eq(4)").find("input").val();
			var CurMode = $(this).find("td:eq(0)").find("input:eq(0)").val();
			if(CurRef == Ref){
				if(CurMode == INS_MODE){ 
					planCoveragestbl.row($(this)).remove().draw(false); 
			}else if (CurMode == QRY_MODE || CurMode == UPD_MODE){    
				$(this).find("td:first").find('input:eq(0)').val(DEL_MODE);      		     			
				$(this).find("td").css({border:'1px solid red'}); 
				$(this).hide(); 
			}
			
			}
		});
	}
}
function newplaneducationDelete(Ref){
	//Education delete function
	var liEducationlen = liEducationtbl.rows().count();
	if(liEducationlen > 0){
		$("#liEducationtbl tbody tr").each(function(){
			var CurRef = $(this).find("td:first").find('input:eq(2)').val(); 
			var CurMode = $(this).find("td:eq(0)").find("input:eq(0)").val();
			if(CurRef == Ref){
				if(CurMode == INS_MODE){ 
//					liEducationtbl.row($(this)).remove().draw(); 
					$(this).find("td:first").find('input:eq(0)').val(DEL_MODE);
					$(this).hide(); 
			}else if (CurMode == QRY_MODE || CurMode == UPD_MODE ){    
				$(this).find("td:first").find('input:eq(0)').val(DEL_MODE);      		     			
				$(this).find("td").css({border:'1px solid red'}); 
				$(this).hide(); 
			}
			
			}
		});
	}
}
function newplanretirementDelete(Ref){
	//Retirement delete function
	var liRetirementPlglen = liRetirementPlgtbl.rows().count();
	if(liRetirementPlglen > 0){ 
		$("#liRetirementPlgtbl tbody tr").each(function(){
			var CurRef = $(this).find("td:first").find('input:eq(2)').val(); 
			var CurMode = $(this).find("td:eq(0)").find("input:eq(0)").val();
			if(CurRef == Ref){
				if(CurMode == INS_MODE){ 
//					liRetirementPlgtbl.row($(this)).remove().draw(); 
					$(this).find("td:first").find('input:eq(0)').val(DEL_MODE);      		     			
					$(this).hide(); 
			}else if (CurMode == QRY_MODE || CurMode == UPD_MODE){    
				$(this).find("td:first").find('input:eq(0)').val(DEL_MODE);      		     			
				$(this).find("td").css({border:'1px solid red'}); 
				$(this).hide(); 
			}
			
			}
		}); 
	}
}
 
function showSelectedRet($reference){
	var liRetirementPlglen = liRetirementPlgtbl.rows().count();
	if(liRetirementPlglen > 0){ 
		$("#liRetirementPlgtbl tbody tr").each(function(){
			var CurRef = $(this).find("td:first").find('input:eq(2)').val();  
//			$(this).hide(); 
			
//			if(CurRef == $reference){ 
//				$(this).show(); 
//			}
			 
		}); 
	}
	
	RetPlgcalculateRow(); 
}
function showSelectedEdu($reference){
	var liEducationlen = liEducationtbl.rows().count();
	if(liEducationlen > 0){
		$("#liEducationtbl tbody tr").each(function(){
			var CurRef = $(this).find("td:first").find('input:eq(2)').val();  
//			$(this).hide(); 
			if(CurRef == $reference){ 
//				$(this).show();  
			}
		});
	}
	totalPvRetEdPlgTerEdAge(); 
}



$("#updownicoCV").on("click",function(){
  if($("#cvlapse1div").is(":visible")){
	  $("#cvplnleftpaneltbl tbody tr").each(function(i,e){
  		if(i>1){
  			$(this).hide();
  		}
  	});
        	$("#cvlapse1div").css("display","none"); 
        	$(".cvbgcync").css("height","11.2vh");
        	
        } else{
        	$("#cvplnleftpaneltbl tbody tr").each(function(i,e){
        		if(i>1){
        			$(this).show();
        		}
        });
        	$("#cvlapse1div").css("display","block"); 
        	$(".cvbgcync").css("height",$("#cvplnleftpaneltbl").height() );
        	
      } 
	
});

function covergeBackBtn(){
  
	
	var coverages=$("#covTypeofbenefit").text();
//	Death_Benefit,Disability,TPD,CI-Advanced,CI-Early,PA,Hospitalisation,Retirement_Planning,Education_Planning
	
	if(coverages.indexOf("Retirement_Planning") != -1){
		
		var multidisbrse = $("#retMultionret").val();
		
		if(multidisbrse == "N"){
			if(!(validateFocusDhtmlFlds($("#retCashvalonret"), CASH_VAL_RET,""))) {return valid=false;};	
		}else if (multidisbrse == "Y"){
			
			 if(liRetirementPlgtbl.rows().count() == 0){
				 alert("Atleast 1 row required");
				 return false;
			 }
			
		}
		
		
		
	}
	
	$("#covback00").addClass("hidden");
	  

		$("#covSave00").removeClass("hidden");
		$("#covClose00").removeClass("hidden");
		 
			$("#visCoverEdu").css("display","none");
			$("#visCoverRet").css("display","none");
			$("#visCover").css("display","block");
			colorChangeRetEdu();
	
//	$(this).addClass("hidden"); 
//	$("#covSave00").removeClass("hidden");
//	$("#covClose00").removeClass("hidden"); 
//	$("#visCoverEdu").css("display","none");
//	$("#visCoverRet").css("display","none");
//	$("#visCover").css("display","black"); 

	
//	$("#covback00").addClass("hidden");
//	$("#visCoverEdu").css("display","none");
//	$("#visCoverRet").css("display","none");
//	$("#visCover").css("display","block");
	colorChangeRetEdu();
	return true;

}

$("#covback00").on("click",function(){
	covergeBackBtn();
});



function ForCoverageClone(cur){
	
	var $tdpos     = $(cur).closest("td").index();
	var $planName  = $(cur).closest("tr").prev("tr").find("td:eq("+$tdpos+")").find("input:eq(0)").val();
	var $SA		   = $("#cvplnleftpaneltbl tbody tr:eq(3) td:eq("+$tdpos+")").find("input").val();
	var $plan	   = $("#cvplnleftpaneltbl tbody tr:eq(0) td:eq("+$tdpos+")").find("span").text();  
	var $hcov  	   = $("#cvplnleftpaneltbl tbody tr:eq(2) td:eq("+$tdpos+")").find("input[type=hidden]").val(); 
	var $cov 	   = $("#cvplnleftpaneltbl tbody tr:eq(2) td:eq("+$tdpos+")").find("select");
	var $basicrid  = $("#cvplnleftpaneltbl tbody tr:eq(0) td:eq("+$tdpos+")").find("[name=txtFldTfplan]").val();
	var $Mode      = INS_MODE;
	var $covPayMtd = $("#cvplnleftpaneltbl tbody tr:eq(9) td:eq("+$tdpos+")").find("[name=selPaymtd]").val();
	
	var $inception   = $("#cvplnleftpaneltbl tbody tr:eq(5) td:eq("+$tdpos+")").find("[name=txtFldIncDate]").val();
	var $expiry   	 = $("#cvplnleftpaneltbl tbody tr:eq(7) td:eq("+$tdpos+")").find("[name=txtFldPolExpDate]").val();
	
	var $reference   = $("#cvplnleftpaneltbl tbody tr:eq(0) td:eq("+$tdpos+")").find("[name=txtFldliplnId]").val();//pkid
	var $planPKId   = $("#cvplnleftpaneltbl tbody tr:eq(0) td:eq("+$tdpos+")").find("input:eq(13)").val();
	var $syncRefId   = $("#cvplnleftpaneltbl tbody tr:eq(0) td:eq("+$tdpos+")").find("input:eq(18)").val();
	
	var $multion = $("#cvplnleftpaneltbl tbody tr:eq(0) td:eq("+$tdpos+")").find("input[type=hidden]:eq(6)").val();
//	console.log(multion);
//	if($basicrid == "Rider"){
	//	$planPKId =  $("#toAppendCVPlan tbody tr:eq(0) td:eq("+$tdpos+")").find("input:eq(13)").val();
//	}
	
 
	$("#plancoveragetbl tbody td").each(function(i){
		$(this).removeClass("selectedd");
		$(this).find("input[type=text],select").val("");
	}); 
	
	$("#plancoveragetbl thead th").each(function(i){
		$(this).removeClass("selectedd");
	});
	$("#plancoveragetbl tbody tr:eq(3)").find("td").each(function(){ 
		$(this).find("input").val("1");
	}); 
	$("#plancoveragetbl tbody tr:eq(0)").find("td").each(function(){ 
		$(this).find("input").val("1");
	});
	
	$("#plancoveragetbl tbody tr:eq(1)").find("td").each(function(){ 
		$(this).find("input").val($SA);
	}); 
	$("#covPlanName").text("");
	$("#covTypeofbenefit").text("");
	$("#covBasicRider").text("");	
	$("#covInception").text("");  
	$("#covExpiry").text("");  
	
	$("#covRef").val("");  
	$("#covMode").val("");
	$("#covPayMtd").val("");
	$("#covMultion").val("");
	$("#covSA").val("");
	$("#syncRef").val("");
	$("#tdindex").val("");
	
	multibenefits($cov); 

	$("#covback00").addClass("hidden");
	$("#covSave00").removeClass("hidden");
	$("#covClose00").removeClass("hidden");
	
	if(!isEmpty($planName) && !isEmpty($hcov)) { 
		
		$("#covPlanName").text($planName);  
		$("#covTypeofbenefit").text(expandCoverOpts($hcov,true)); 
		if($basicrid == "Basic"){
			$("#covBasicRider").text($basicrid+" - "+$plan);	
		}else if($basicrid == "Rider"){
			$("#covBasicRider").text($basicrid+" of "+$plan);	
		} 
		
		$("#covInception").text($inception);  
		$("#covExpiry").text($expiry);  
		$("#covRef").val($reference);   
		$("#covMode").val($Mode);
		$("#covPayMtd").val($covPayMtd);
		$("#covMultion").val($multion);
		$("#covSA").val($SA);
		$("#syncRef").val($syncRefId);
		$("#tdindex").val($tdpos);
		
		$("#visCover").css("display","block");
	  	$("#visCoverEdu").css("display","none");
		$("#visCoverRet").css("display","none"); 
		
		domToPopCoverage($planPKId);
		showSelectedRet($planPKId);
		showSelectedEdu($planPKId);
		
		setMainRPPlanTbltoLifeRP($tdpos);
		
		$("#plancovMandatoryFlds").insertAfter( $( "#coverageCloneModel" )); 
				$('#coveragesDialog').modal({
					  backdrop: 'static',
					  keyboard: false,
					  show:true,
					}); 
				
				$('#coveragesDialog').on('shown.bs.modal', function() {  
					
					colorChangeRetEdu();
					
					$($.fn.dataTable.tables(true)).DataTable().columns.adjust(); 
						$(this).find(".modal-title").html("Coverage Benefits");   
						$(this).find(".modal-header").find("button:eq(0)").unbind();
						
						//Back	  
						 $(this).find(".modal-header").find("button:eq(0)").click(function (){
							 
							if(!covergeBackBtn())return;
							 
//								  $(this).addClass("hidden");
								  

//									$("#covSave00").removeClass("hidden");
//									$("#covClose00").removeClass("hidden");
//									 
//										$("#visCoverEdu").css("display","none");
//										$("#visCoverRet").css("display","none");
//										$("#visCover").css("display","block");
//										colorChangeRetEdu();
										
									  
						});
			   
			   //Save
		       $(this).find(".modal-header").find("button:eq(1)").click(function (){ 
		    	   	   if(!chkValidateCoverages())return; 
		    	   	   
		    	   	   
		    	   	/*06may2020*/
		    	   	var multi = $("#retMultionret").val();
		    	   	var syncRef = $("#syncRef").val();
		    	   	var covRef = $("#covRef").val();
		    	   	console.log("multi--------------->"+multi +"," +syncRef)
		    	   	if( multi == "Y"){
		    	   		var retrefid = syncRef+"_R";
		    	   		deleteRetMultiByRefId(syncRef);	
		    	   		deleteAllSRSByRefId(retrefid);
		    	   		deleteAllSRSByRefId(retrefid);
		    	   		
		    	   	}else 	if(multi == "N"){
		    	   		deleteRetMultiByRefId(covRef);
		    	   		deleteRetPlanMultiByRefId(covRef);
		    	   		
		    	   		

		    	   		$("#liRetirementPlgtbl tbody").find("tr").find("td:eq(0)").find("input:eq(1)").each(function(){
		    	   			
		    	   			 var planrefid = $(this).closest("tr").find("td:eq(0)").find("input:eq(2)").val();
		    	   			var mvretid =$(this).val();	
		    	   			console.log("mvretid --------------->"+mvretid + ",covRef="+covRef+",planrefid="+planrefid);
		    	   			
		    	   			if(covRef == planrefid){
		    	   				deleteRetMultiByRefId(mvretid);	
		    	   			}
		    	   			
		    	   		});
		    	   		
		    	   	}else{
		    	   		
		    	   		var retrefid = syncRef+"_R";
		    	   		deleteRetMultiByRefId(syncRef);	
		    	   		deleteAllSRSByRefId(retrefid);
		    	   		deleteAllSRSByRefId(retrefid);
		    	   		
		    	   		deleteRetPlanMultiByRefId(covRef);
		    	   		
		    	   	}
		    	   	
		    	   	 /*06may2020*/
		    	   	   
		    	       setAllCoverageTODHML(null,$hcov,$planPKId,true);
			    	   $( "#plancovMandatoryFlds" ).insertAfter($("#PLANCOV_APD"));
						  $("#visCover").css("display","none");
						  colorChangeRetEdu();
						  $('#coveragesDialog').modal('hide');   
				});
				
		       
				//Close  
				$(this).find(".modal-header").find("button:eq(2)").click(function (){
					
//					added
//						setAllCoverageTODHML(null,$hcov,$planPKId,true);
						//
						  $( "#plancovMandatoryFlds" ).insertAfter($("#PLANCOV_APD"));
						  $("#visCover").css("display","none");
						  colorChangeRetEdu();
						  $('.popover').popover('hide'); 
						  $('#coveragesDialog').modal('hide');   
				});
				
		});   
	}else{
		applyErrorToastrAlert("Please select the Plan Name and Coverages of selected plan");
		return false;
	}
}//end of ForCoverageClone

 

function toCalMAA(multiBootElm,MAAElm){
	var curelm = $("#"+multiBootElm).val();
	var curSumAssured = Number($("#covSA").val());
	$("#"+MAAElm).val(roundNumber(curelm*curSumAssured)); 
}




//$("#covback00").on("click",function(){
//	$(this).addClass("hidden"); 
//	$("#covSave00").removeClass("hidden");
//	$("#covClose00").removeClass("hidden"); 
//	$("#visCoverEdu").css("display","none");
//	$("#visCoverRet").css("display","none");
//	$("#visCover").css("display","black"); 
//});



function setAllCoverageTODHML(dataset,$hcov,$planPKId,popupsflag){ 
	
	var strplanName	=	$("#covPlanName").text();
	var strTypeofbef=	$("#covTypeofbenefit").text();
	var strBasRid 	=	$("#covBasicRider").text();	
	var strInception=	$("#covInception").text();  
	var strExpiry	=	$("#covExpiry").text();  
	
	
	var strRef		=	$("#covRef").val();  
	var strMode		=	$("#covMode").val(); 
	var strPayMtd   =   $("#covPayMtd").val();
	var planrefid = $("#lipRetRefId").val();//
	/*Populate Data */
	
	var covRef = $("#covRef").val();
//	var paymtd  = $("#covPayMtd").text();
	var syncRef = $("#syncRef").val();
	var tdpos = $("#tdindex").val()
	
//	added
	var selectedCover = [];
	selectedCover = $hcov.split(",");
	
	
	
	 if(strMode == INS_MODE || strMode == UPD_MODE){
		$("#plancoveragetbl thead tr:eq(0) th").each(function(colindex){ 
			
				if(colindex > 0){
					
					var isVisible = $(this).is(":visible");
					
						if(isVisible){
							
							var indexTD = $(this).index(); 
							var strTypeofCov 		= $(this).find("input").val();
							
							var strbooster  		= $("#plancoveragetbl tbody tr:eq(0)").find("td:eq("+indexTD+")").find("input").val();
							var strmaaAmtAsd  		= $("#plancoveragetbl tbody tr:eq(1)").find("td:eq("+indexTD+")").find("input").val();
							var strmaaExpPerd 		= $("#plancoveragetbl tbody tr:eq(2)").find("td:eq("+indexTD+")").find("input").val();
							var strnoOfYrs 			= $("#plancoveragetbl tbody tr:eq(3)").find("td:eq("+indexTD+")").find("input").val();
							var strDsbltyBenf 		= $("#plancoveragetbl tbody tr:eq(4)").find("td:eq("+indexTD+")").find("input").val();
							var stryrsOfDsbltyPay	= $("#plancoveragetbl tbody tr:eq(5)").find("td:eq("+indexTD+")").find("input").val();
							var strmaxPayoutAge		= $("#plancoveragetbl tbody tr:eq(6)").find("td:eq("+indexTD+")").find("input").val();
							var strtypesOfHS  		= $("#plancoveragetbl tbody tr:eq(7)").find("td:eq("+indexTD+")").find("input").val();
							var strdeductible 		= $("#plancoveragetbl tbody tr:eq(8)").find("td:eq("+indexTD+")").find("input").val();
							var strcoInsurance 		= $("#plancoveragetbl tbody tr:eq(9)").find("td:eq("+indexTD+")").find("input").val();
							var strdescription		= $("#plancoveragetbl tbody tr:eq(10)").find("td:eq("+indexTD+")").find("input").val();
							var strremarks 			= $("#plancoveragetbl tbody tr:eq(11)").find("td:eq("+indexTD+")").find("input:eq(0)").val();
							var strCovPKID 			= $("#plancoveragetbl tbody tr:eq(11)").find("td:eq("+indexTD+")").find("input:eq(1)").val();
//							var strCovPlanPKID 		= $("#plancoveragetbl tbody tr:eq(11)").find("td:eq("+indexTD+")").find("input:eq(1)").val();
							
							
							if(strTypeofCov != undefined && strTypeofCov != "undefined" && 
									strTypeofCov != "Retirement_Planning" && strTypeofCov  != "Education_Planning"){ 
									
									strTypeofCov.replace(new RegExp('_', 'g')," ").replace(new RegExp('-', 'g')," ");
									
									
									if( isEmpty(strCovPKID) ){
										strCovPKID=makeid(17);
									}
									
//									console.log(strTypeofCov +"<------------->"+strCovPKID);
	
									var $lastRow = chkCoverageExists(strTypeofCov,strRef);
//									console.log("last row in exist -->"+$lastRow)
									
									if( $lastRow == null ){ 
										
										var cell0 = '<span></span>'+
										'<input type="hidden" name="txtFldCoverageMode" readonly="true" value="'+strMode+'" class="fipaModeDummy"/>'+
										'<input type="hidden" name="txtFldliCovId"><input type="hidden" name="txtFldliPlanPKId">';
										var cell1 = '<input type="text" name="txtFldliCoverPlanname"  class="form-control editable"  readonly="true"/>';
										var cell2 = '<input type="text" name="txtFldliCoverIncDate" class="form-control editable"  readonly="true"/>';
										var cell3 = '<input type="text" name="txtFldliCoverExpDate" class="form-control editable" readonly="true" />';
										var cell4 = '<input type="text" name="txtFldliBasicRiderRef" class="form-control editable" readonly="true" />';
										var cell5 = '<input type="text" name="txtFldliTypeOfCoverage" class="form-control editable" readonly="true" />';
										var cell6 = '<input type="text" name="txtFldliMultiBooster" class="form-control editable" readonly="true" />';
										var cell7 = '<input type="text" name="txtFldliMaaAmtAssured" class="form-control editable"   readonly="true"/>';
										var cell8 = '<input type="text" name="txtFldliMaaExpPeriod" class="form-control editable"   readonly="true"/>';
										var cell9 = '<input type="text" name="txtFldliNoofyears"  class="form-control editable"   readonly="true"/>';  
										var cell10 = '<input type="text" name="txtFldliDsbltyBenf"  class="form-control editable"   readonly="true"/>'; 
										var cell11 = '<input type="text" name="txtFldliYrsofdsbpay" class="form-control editable"  readonly="true" />'; 
										var cell12 = '<input type="text" name="txtFldliMaxPayoutAge"  class="form-control editable"   readonly="true"/>'; 
										var cell13 = '<input type="text" name="txtFldliTypesofHS" class="form-control editable"   readonly="true"/>'; 
										var cell14 = '<input type="text" name="txtFldliDeductible" class="form-control editable"  readonly="true" />'; 
										var cell15 = '<input type="text" name="txtFldliCoInsurance"  class="form-control editable"   readonly="true"/>'; 
										var cell16 = '<input type="text" name="txtFldliDescription"  class="form-control editable"   readonly="true"/>';  
										var cell17 ='<input type="text" name="txtFldliRemarks" class="form-control editable"  readonly="true"/>'+
										'<input type="hidden" name="txtFldliCovCrtdBy"/><input type="hidden" name="txtFldliCovCrtdDate"/>'; 
	
										planCoveragestbl.row.add( [cell0,cell1,cell2,cell3,cell4,cell5,cell6,cell7,cell8,cell9,cell10,cell11,cell12,cell13,cell14,cell15,cell16,cell17] ).draw( false );
										
										var rowCount = $('#planCoveragestbl tbody tr:visible').length;	
										rowCount =  (rowCount == 0) ? $('#planCoveragestbl tbody tr').length : rowCount;
										$lastRow = $("#planCoveragestbl tbody tr:last");
										
										$lastRow.find("td:first").find('span').text(rowCount);
										$lastRow.find("td:eq(0)").find('input:eq(0)').val("I");
										
									}
									
									    $lastRow.find("td:eq(0)").find('input:eq(1)').val(strCovPKID);
									    $lastRow.find("td:eq(0)").find('input:eq(2)').val($planPKId);
										$lastRow.find("td:eq(1)").find('input:eq(0)').val(strplanName); 
										$lastRow.find("td:eq(2)").find('input:eq(0)').val(strInception);  
										$lastRow.find("td:eq(3)").find('input:eq(0)').val(strExpiry);    
										$lastRow.find("td:eq(4)").find('input:eq(0)').val(strRef);  
										$lastRow.find("td:eq(5)").find('input:eq(0)').val(strTypeofCov);  
										$lastRow.find("td:eq(6)").find('input:eq(0)').val(strbooster); 
										$lastRow.find("td:eq(7)").find('input:eq(0)').val(strmaaAmtAsd); 
										$lastRow.find("td:eq(8)").find('input:eq(0)').val(strmaaExpPerd);
										$lastRow.find("td:eq(9)").find('input:eq(0)').val(strnoOfYrs); 
										$lastRow.find("td:eq(10)").find('input:eq(0)').val(strDsbltyBenf);  
										$lastRow.find("td:eq(11)").find('input:eq(0)').val(stryrsOfDsbltyPay);    
										$lastRow.find("td:eq(12)").find('input:eq(0)').val(strmaxPayoutAge);  
										$lastRow.find("td:eq(13)").find('input:eq(0)').val(strtypesOfHS); 
										$lastRow.find("td:eq(14)").find('input:eq(0)').val(strdeductible); 
										$lastRow.find("td:eq(15)").find('input:eq(0)').val(strcoInsurance);  
										$lastRow.find("td:eq(16)").find('input:eq(0)').val(strdescription);    
										$lastRow.find("td:eq(17)").find('input:eq(0)').val(strremarks);    
									
	
							
						}
							
						if(strTypeofCov != undefined && strTypeofCov != "undefined" &&  strTypeofCov == "Retirement_Planning" ){ 
							setMainEditRPPlanTbltoLifeRP();
//							alert($("#retCashvalonret").val())
							console.log('$("#retMultionret").val() ------------->'+$("#retMultionret").val()+',indexTD--'+indexTD);
							
							
							addCashValueToRet($("#retMultionret").val(),$("#retCashvalonret").val(),$("#lipRetRefId").val(),$("#covPayMtd").val(),$("#covPlanName").text(),$("#cashvalRetAge").val(),$("#retPrcnttoused").val(),$("#covRef").val(),indexTD,popupsflag);
							
						}
					
					}
					
				}
			
				 
		});
	 }
	  
}

function chkValidateCoverages(){

	var coverages=$("#covTypeofbenefit").text();
//	Death_Benefit,Disability,TPD,CI-Advanced,CI-Early,PA,Hospitalisation,Retirement_Planning,Education_Planning


	if(coverages.indexOf("Death_Benefit") != -1){
	
		if(!(validateFocusFlds('plancoveragetbl','mulBootDeath', COV_BOOSTR +" to Death Benefit"))) return false;
		
		if(!(validateFocusFlds('plancoveragetbl','maaDeath', COV_MAA_AMTASS+" to Death Benefit"))) return false;
		
		if(!(validateFocusFlds('plancoveragetbl','expDeath', COV_EXPPERD+" to Death Benefit"))) return false;
		
		if(!(validateFocusFlds('plancoveragetbl','yrPayDeath', COV_NOOFYR+" to Death Benefit"))) return false;
		
	}

	if(coverages.indexOf("Disability") != -1){
	
		if(!(validateFocusFlds('plancoveragetbl','disBenefit', COV_DISBENF+" to Disability"))) return false;
		
		if(!(validateFocusFlds('plancoveragetbl','disPayout', COV_DISPAYOUT+" to Disability"))) return false;
		
		if(!(validateFocusFlds('plancoveragetbl','maxPayout', COV_MAXPAYOUT+" to Disability"))) return false;
		
	}

	if(coverages.indexOf("TPD") != -1){
	
		if(!(validateFocusFlds('plancoveragetbl','mulTPD', COV_BOOSTR+" to TPD"))) return false;
		
		if(!(validateFocusFlds('plancoveragetbl','maaTPD', COV_MAA_AMTASS+" to TPD"))) return false;
		
		if(!(validateFocusFlds('plancoveragetbl','expTPD', COV_EXPPERD+" to TPD"))) return false;
		
	}

	if(coverages.indexOf("CI-Advanced") != -1){
	
		if(!(validateFocusFlds('plancoveragetbl','mulCriIllAdv', COV_BOOSTR+" to CI-Advanced"))) return false;
		
		if(!(validateFocusFlds('plancoveragetbl','maaCriIllAdv', COV_MAA_AMTASS+" to CI-Advanced"))) return false;
		
		if(!(validateFocusFlds('plancoveragetbl','expCriIllAdv', COV_EXPPERD+" to CI-Advanced"))) return false;
		
	}
				
	
	if(coverages.indexOf("CI-Early") != -1){
	
		if(!(validateFocusFlds('plancoveragetbl','mulCriIllErly', COV_BOOSTR+" to CI-Early"))) return false;
		
		if(!(validateFocusFlds('plancoveragetbl','maaCriIllErly', COV_MAA_AMTASS+" to CI-Early"))) return false;
		
		if(!(validateFocusFlds('plancoveragetbl','expCriIllErly', COV_EXPPERD+" to CI-Early"))) return false;
		
	}
				
	
	if(coverages.indexOf("PA") != -1){
	
		if(!(validateFocusFlds('plancoveragetbl','mulPA', COV_BOOSTR+" to PA"))) return false;
		
		if(!(validateFocusFlds('plancoveragetbl','maaPA', COV_MAA_AMTASS+" to PA"))) return false;
		
		if(!(validateFocusFlds('plancoveragetbl','expPA', COV_EXPPERD+" to PA"))) return false;
		
//		if(!(validateFocusFlds('plancoveragetbl','yrPayPA', COV_NOOFYR))) return;
		
	}
	
	if(coverages.indexOf("Hospitalisation") != -1){
		
		if(!(validateFocusFlds('plancoveragetbl','mulHSP', COV_BOOSTR+" to Hospitalisation"))) return false;
		
		if(!(validateFocusFlds('plancoveragetbl','maaHSP', COV_MAA_AMTASS+" to Hospitalisation"))) return false;
		
		if(!(validateFocusFlds('plancoveragetbl','expHSP', COV_EXPPERD+" to Hospitalisation"))) return false;
		
		
	}
				

	return true;
}
  
function getAllCoverage(dataset){
//populating
	var cell0 = '<span></span>'+
	'<input type="hidden" name="txtFldCoverageMode" readonly="true" value="'+UPD_MODE+'" class="fipaModeDummy"/>'+
	'<input type="hidden" name="txtFldliCovId"><input type="hidden" name="txtFldliPlanPKId">';
	var cell1 = '<input type="text" name="txtFldliCoverPlanname"  class="form-control editable"  readonly="true"/>';
	var cell2 = '<input type="text" name="txtFldliCoverIncDate" class="form-control editable"  readonly="true"/>';
	var cell3 = '<input type="text" name="txtFldliCoverExpDate" class="form-control editable" readonly="true" />';
	var cell4 = '<input type="text" name="txtFldliBasicRiderRef" class="form-control editable" readonly="true" />';
	var cell5 = '<input type="text" name="txtFldliTypeOfCoverage" class="form-control editable" readonly="true" />';
	var cell6 = '<input type="text" name="txtFldliMultiBooster" class="form-control editable" readonly="true" />';
	var cell7 = '<input type="text" name="txtFldliMaaAmtAssured" class="form-control editable"   readonly="true"/>';
	var cell8 = '<input type="text" name="txtFldliMaaExpPeriod" class="form-control editable"   readonly="true"/>';
	var cell9 = '<input type="text" name="txtFldliNoofyears"  class="form-control editable"   readonly="true"/>';  
	var cell10 = '<input type="text" name="txtFldliDsbltyBenf"  class="form-control editable"   readonly="true"/>'; 
	var cell11 = '<input type="text" name="txtFldliYrsofdsbpay" class="form-control editable"  readonly="true" />'; 
	var cell12 = '<input type="text" name="txtFldliMaxPayoutAge"  class="form-control editable"   readonly="true"/>'; 
	var cell13 = '<input type="text" name="txtFldliTypesofHS" class="form-control editable"   readonly="true"/>'; 
	var cell14 = '<input type="text" name="txtFldliDeductible" class="form-control editable"  readonly="true" />'; 
	var cell15 = '<input type="text" name="txtFldliCoInsurance"  class="form-control editable"   readonly="true"/>'; 
	var cell16 = '<input type="text" name="txtFldliDescription"  class="form-control editable"   readonly="true"/>';  
	var cell17 ='<input type="text" name="txtFldliRemarks" class="form-control editable"  readonly="true"/>'+
	'<input type="hidden" name="txtFldliCovCrtdBy"/><input type="hidden" name="txtFldliCovCrtdDate"/>'; 

	planCoveragestbl.row.add( [cell0,cell1,cell2,cell3,cell4,cell5,cell6,cell7,cell8,cell9,cell10,cell11,cell12,cell13,cell14,cell15,cell16,cell17] ).draw( false );

	var rowCount = $('#planCoveragestbl tbody tr:visible').length;	
	rowCount =  (rowCount == 0) ? $('#planCoveragestbl tbody tr').length : rowCount;
	var  $lastRow = $("#planCoveragestbl tbody tr:last");
	 
		

	$lastRow.find("td:first").find('span').text(rowCount);

	if(dataset != null){
 
		var infoDetsArr = new Array();
		
		for(var data in dataset){
			var col = dataset[data];
			
			switch(data){
			
			case "coverId": 
				$lastRow.find("td:eq(0)").find('input:eq(1)').val(col); 
				break;
				

			case "coverLevelortype": 
				$lastRow.find("td:eq(0)").find('input:eq(2)').val(col); 
				break;
				
			case "coverPlanname": 
				$lastRow.find("td:eq(1)").find('input:eq(0)').val(col); 
				break;
				
			case "effDate": 
				$lastRow.find("td:eq(2)").find('input:eq(0)').val(col); 
				break;
			 
			case "expiryDate": 
				$lastRow.find("td:eq(3)").find('input:eq(0)').val(col); 
				break;
			 
			case "coverBasorrid": 
				$lastRow.find("td:eq(4)").find('input:eq(0)').val(col); 
				break;
				
			case "coverName": 
				$lastRow.find("td:eq(5)").find('input:eq(0)').val(col); 			
				break;
			
			case "multiBoost": 
				$lastRow.find("td:eq(6)").find('input:eq(0)').val(col); 
				break;
			
			case "maaAmtAssured": 
				$lastRow.find("td:eq(7)").find('input:eq(0)').val(col); 
				break;
				
			case "maaExPeriod":
				$lastRow.find("td:eq(8)").find('input:eq(0)').val(col); 
				break;
				
			case "payNoofyear":
				$lastRow.find("td:eq(9)").find('input:eq(0)').val(col); 
				break;
				
			case "benefAmount":
				$lastRow.find("td:eq(10)").find('input:eq(0)').val(col); 
				break;
					
			case "payYears":
				$lastRow.find("td:eq(11)").find('input:eq(0)').val(col); 
				break;
			
			
			case "maxPayoutAge": 
				$lastRow.find("td:eq(12)").find('input:eq(0)').val(col); 	
				break;
				
			case "typeOfHS": 
				$lastRow.find("td:eq(13)").find('input:eq(0)').val(col); 	
				break; 
				
			case "coverDeductable":
				$lastRow.find("td:eq(14)").find('input:eq(0)').val(col); 
				break;
				
			case "coInsurance":
				$lastRow.find("td:eq(15)").find('input:eq(0)').val(col); 
				break;
				
			case "descriptions":
				$lastRow.find("td:eq(16)").find('input:eq(0)').val(col); 
				break;
				
			case "coverRemarks":
				$lastRow.find("td:eq(17)").find('input:eq(0)').val(col); 
				break;
				
			case "coverCreatedBy":
				$lastRow.find("td:eq(17)").find('input:eq(0)').val(col);
				infoDetsArr.push(col);
				break;
				
			case "coverCreatedDate":
				$lastRow.find("td:eq(17)").find('input:eq(0)').val(col);
				infoDetsArr.push(col);
				break;
				
			case "coverModifiedBy": 
				infoDetsArr.push(col);
				break;
				
			case "coverModifiedDate":
				infoDetsArr.push(col);
				break; 
			 
		}
		}
	}
}



function domToPopCoverage(planPKId){
 
	var RefId=$("#covRef").val();
	
	/*Populate Data */
	$("#planCoveragestbl tbody tr").each(function(){ 
		var strRefId	= $(this).find("td:eq(4)").find("input:eq(0)").val(); 
		if(strRefId == planPKId){
			var trind = $(this).index();
			var typeOfCoverage = $("#planCoveragestbl tbody tr:eq("+trind+")").find("td:eq(5)").find("input").val();
			var reCov = typeOfCoverage.replace(new RegExp('_', 'g')," ").replace(new RegExp('-', 'g')," ");
			
			var covID = $("#planCoveragestbl tbody tr:eq("+trind+")").find("td:eq(0)").find("input:eq(1)").val();
			
			if(isEmpty(covID)){
				$("#covMode").val("I");
			}else{
				$("#covMode").val("U");
			}
 
				if(reCov=="Death Benefit"){
					$("#hdeathbenfPK").val(covID);
					$('#mulBootDeath').val($("#planCoveragestbl tbody tr:eq("+trind+")").find("td:eq(6)").find("input").val());
					$('#maaDeath').val($("#planCoveragestbl tbody tr:eq("+trind+")").find("td:eq(7)").find("input").val());
					$('#expDeath').val($("#planCoveragestbl tbody tr:eq("+trind+")").find("td:eq(8)").find("input").val());
					$('#yrPayDeath').val($("#planCoveragestbl tbody tr:eq("+trind+")").find("td:eq(9)").find("input").val());
					$('#remarks1').val($("#planCoveragestbl tbody tr:eq("+trind+")").find("td:eq(17)").find("input").val());
				}
				
				if(reCov=="Disability"){
					$("#hdisablebenfPK").val(covID);
					$('#disBenefit').val($("#planCoveragestbl tbody tr:eq("+trind+")").find("td:eq(10)").find("input").val());
					$('#disPayout').val($("#planCoveragestbl tbody tr:eq("+trind+")").find("td:eq(11)").find("input").val());
					$('#maxPayout').val($("#planCoveragestbl tbody tr:eq("+trind+")").find("td:eq(12)").find("input").val()); 
					$('#remarks2').val($("#planCoveragestbl tbody tr:eq("+trind+")").find("td:eq(17)").find("input").val());
				}
				if(reCov=="TPD"){
					$("#hTPDbenfPK").val(covID);
					$('#mulTPD').val($("#planCoveragestbl tbody tr:eq("+trind+")").find("td:eq(6)").find("input").val());
					$('#maaTPD').val($("#planCoveragestbl tbody tr:eq("+trind+")").find("td:eq(7)").find("input").val());
					$('#expTPD').val($("#planCoveragestbl tbody tr:eq("+trind+")").find("td:eq(8)").find("input").val());
					$('#disTPD').val($("#planCoveragestbl tbody tr:eq("+trind+")").find("td:eq(10)").find("input").val());
					$('#disPayoutTPD').val($("#planCoveragestbl tbody tr:eq("+trind+")").find("td:eq(11)").find("input").val());
					$('#maxPayoutTPD').val($("#planCoveragestbl tbody tr:eq("+trind+")").find("td:eq(12)").find("input").val());
					$('#remarks3').val($("#planCoveragestbl tbody tr:eq("+trind+")").find("td:eq(17)").find("input").val());
				}
				if(reCov=="CI Advanced"){
					$("#hciadvancedbenfPK").val(covID);
					$('#mulCriIllAdv').val($("#planCoveragestbl tbody tr:eq("+trind+")").find("td:eq(6)").find("input").val());
					$('#maaCriIllAdv').val($("#planCoveragestbl tbody tr:eq("+trind+")").find("td:eq(7)").find("input").val());
					$('#expCriIllAdv').val($("#planCoveragestbl tbody tr:eq("+trind+")").find("td:eq(8)").find("input").val());
					$('#disCriIllAdv').val($("#planCoveragestbl tbody tr:eq("+trind+")").find("td:eq(10)").find("input").val());
					$('#disPayoutCriIllAdv').val($("#planCoveragestbl tbody tr:eq("+trind+")").find("td:eq(11)").find("input").val());
					$('#maxPayoutCriIllAdv').val($("#planCoveragestbl tbody tr:eq("+trind+")").find("td:eq(12)").find("input").val());
					$('#remarks4').val($("#planCoveragestbl tbody tr:eq("+trind+")").find("td:eq(17)").find("input").val());
				}
				if(reCov=="CI Early"){ 
					$("#hciearlybenfPK").val(covID);
					$('#mulCriIllErly').val($("#planCoveragestbl tbody tr:eq("+trind+")").find("td:eq(6)").find("input").val());
					$('#maaCriIllErly').val($("#planCoveragestbl tbody tr:eq("+trind+")").find("td:eq(7)").find("input").val());
					$('#expCriIllErly').val($("#planCoveragestbl tbody tr:eq("+trind+")").find("td:eq(8)").find("input").val());
					$('#yrPayCriIllErly').val($("#planCoveragestbl tbody tr:eq("+trind+")").find("td:eq(9)").find("input").val());
					$('#remarks5').val($("#planCoveragestbl tbody tr:eq("+trind+")").find("td:eq(17)").find("input").val());
				}
				if(reCov=="PA"){
					$("#hpabenfPK").val(covID);
					$('#mulPA').val($("#planCoveragestbl tbody tr:eq("+trind+")").find("td:eq(6)").find("input").val());
					$('#maaPA').val($("#planCoveragestbl tbody tr:eq("+trind+")").find("td:eq(7)").find("input").val());
					$('#expPA').val($("#planCoveragestbl tbody tr:eq("+trind+")").find("td:eq(8)").find("input").val());
					$('#yrPayPA').val($("#planCoveragestbl tbody tr:eq("+trind+")").find("td:eq(9)").find("input").val());
					$('#remarks6').val($("#planCoveragestbl tbody tr:eq("+trind+")").find("td:eq(17)").find("input").val());
				}
				if(reCov=="Hospitalisation"){
					$("#hhospbenfPK").val(covID);
					$('#mulHSP').val($("#planCoveragestbl tbody tr:eq("+trind+")").find("td:eq(6)").find("input").val());
					$('#maaHSP').val($("#planCoveragestbl tbody tr:eq("+trind+")").find("td:eq(7)").find("input").val());
					$('#expHSP').val($("#planCoveragestbl tbody tr:eq("+trind+")").find("td:eq(8)").find("input").val());
					$('#yrPayHSP').val($("#planCoveragestbl tbody tr:eq("+trind+")").find("td:eq(9)").find("input").val());
					$('#typHSBenefit').val($("#planCoveragestbl tbody tr:eq("+trind+")").find("td:eq(13)").find("input").val());
					$('#dedHSBenefit').val($("#planCoveragestbl tbody tr:eq("+trind+")").find("td:eq(14)").find("input").val());
					$('#insHSBenefit').val($("#planCoveragestbl tbody tr:eq("+trind+")").find("td:eq(15)").find("input").val());
					$('#desHSBenefit').val($("#planCoveragestbl tbody tr:eq("+trind+")").find("td:eq(16)").find("input").val());
					$('#remarks7').val($("#planCoveragestbl tbody tr:eq("+trind+")").find("td:eq(17)").find("input").val());
				}
				
//				added
//				planCoveragestbl.row($(this)).remove().draw();
			}
				
		 
	}); 
			
		 
}

function onChangeCovTextMode(){
	if($("#covMode").val() == QRY_MODE){
		$("#covMode").val("U");	
	}
	 planAlertInfo(); 
}

function showCurrentPlanRetRow(){
	var covref = $("#covRef").val();
	
	$('#liRetirementPlgtbl tbody tr').each(function(){
		
		var $tblRetplgRow = $(this);
		var $mode = $tblRetplgRow.find("td:eq(0)").find("input:eq(0)").val(); //LifeMVRet Ref Id
		
		var $rowref = $tblRetplgRow.find("td:eq(0)").find("input:eq(1)").val(); //LifeMVRet Ref Id
		var $planrefid = $tblRetplgRow.find("td:eq(0)").find("input:eq(2)").val();
		console.log(covref+ ","+ $planrefid )
		if($mode != 'D'){
			if(covref == $planrefid ){
				$tblRetplgRow.show();
			}else{
				$tblRetplgRow.hide();
			}
		}else{
			$tblRetplgRow.hide();
		}
		reOrderVisibleRows("liRetirementPlgtbl");
		
	});
	
}

function ForRetirementClone(){
	
		mandatoryFldForRetirement($(this),null,'LIFE'); 
		
//		var $planName = $("#cov0Plan").text();
//		var $typeofplan = $("#cov1Plan").text();
		  
		$("#visCover").css("display","none");
		$("#visCoverEdu").css("display","none");
		$("#visCoverRet").css("display","block");
		
		$("#covback00").removeClass("hidden"); 
		$("#covSave00").addClass("hidden");
		$("#covClose00").addClass("hidden"); 

		setvaluefromRetirementToCov();
		  		
		colorChangeRetEdu();
		
		setTimeout(function(){
			
			RetPlgcalculateRow();
			
		},100);
		
		showCurrentPlanRetRow();

		
				$("#plancovRetMandatoryFlds").insertAfter( $( "#coverageCloneModel" ));
				$('#coveragesDialog').modal({
					  backdrop: 'static',
					  keyboard: false,
					  show:true,
					}); 
				$('#coveragesDialog').on('shown.bs.modal', function() {  
				
					$($.fn.dataTable.tables(true)).DataTable().columns.adjust();
					
					
					
					  $(this).find(".modal-title").html("Coverage Benefits - Retirement Planning");
					  $(this).find(".modal-header").find("button:eq(0)").unbind();
					 
//			 Back	  
					 $(this).find(".modal-header").find("button:eq(0)").click(function (){  
							/*  $(this).addClass("hidden");
	
								$("#covSave00").removeClass("hidden");
								$("#covClose00").removeClass("hidden");
								 
									$("#visCoverEdu").css("display","none");
									$("#visCoverRet").css("display","none");
									$("#visCover").css("display","block");
									colorChangeRetEdu();*/
						 
						 if(!covergeBackBtn())return;
								  
					});
					  
					  
//			  //Save
//			  $(this).find(".modal-header").find("button:eq(1)").click(function (){ 
//						  $( "#plancovRetMandatoryFlds" ).insertAfter($("#PLANCOVRET_APD"));
//						  $("#visCoverRet").css("display","none");
//						  $('#coveragesDialog').modal('hide');   
//				});
//					  
//					  
//				//Close	  
//				$(this).find(".modal-header").find("button:eq(2)").click(function (){ 
//						  $( "#plancovRetMandatoryFlds" ).insertAfter($("#PLANCOVRET_APD"));
//						  $("#visCoverRet").css("display","none");
//						  $('#coveragesDialog').modal('hide');   
//				});
				
		});     
	 
}//end of ForRetirementClone

function setvaluefromRetirementToCov(){

	$("#retSelfretage").val($("#retSelfCoordinateage").val()).prop("readonly",true);
	$("#retSpouseretage").val($("#retSpsCoordinateage").val()).prop("readonly",true);
	$("#lfretYrstoret").val($("#retYrstoret").val()).prop("readonly",true);
	$("#retIntrateused").val($("#caSavingDeprate").val()).prop("readonly",true);
	RetPlgcalculateRow(); 
	
}
function ForEducationClone(){
	
//	  var $planName = $("#cov0Plan").text();
//	  var $typeofplan = $("#cov1Plan").text();
	
	  $("#covback00").removeClass("hidden");
	  $("#covSave00").addClass("hidden");
	  $("#covClose00").addClass("hidden");
	  
	  	$("#visCover").css("display","none");
	  	$("#visCoverEdu").css("display","block");
		$("#visCoverRet").css("display","none");
		
		 colorChangeRetEdu(); 
		 
		 setTimeout(function(){
		 totalPvRetEdPlgTerEdAge();
		 arrangePayouts();
		 },100);
		 
				$("#plancovEduMandatoryFlds").insertAfter( $( "#coverageCloneModel" ));
				$('#coveragesDialog').modal({
					  backdrop: 'static',
					  keyboard: false,
					  show:true,
					}); 
				$('#coveragesDialog').on('shown.bs.modal', function() { 
					$($.fn.dataTable.tables(true)).DataTable().columns.adjust(); 
					  $(this).find(".modal-title").html("Coverage Benefits - Education Planning");
					  $(this).find(".modal-header").find("button:eq(0)").unbind();
					 
					  //Back
			$(this).find(".modal-header").find("button:eq(0)").click(function (){
				
				if(!covergeBackBtn())return;
				

//						  $(this).addClass("hidden");
//
//							$("#covSave00").removeClass("hidden");
//							$("#covClose00").removeClass("hidden");
//							 
//							
//							$("#visCoverEdu").css("display","none");
//							$("#visCoverRet").css("display","none");
//							$("#visCover").css("display","block"); 
//							colorChangeRetEdu();
				});
					  
//			  //Save
//			$(this).find(".modal-header").find("button:eq(1)").click(function (){ 
//							  $( "#plancovEduMandatoryFlds" ).insertAfter($("#PLANCOVEDU_APD"));
//							  $("#visCoverEdu").css("display","none");
//							  $('#coveragesDialog').modal('hide');   
//					});
//						
//			  //Close
//				$(this).find(".modal-header").find("button:eq(2)").click(function (){ 
//						  $( "#plancovEduMandatoryFlds" ).insertAfter($("#PLANCOVEDU_APD"));
//						  $("#visCoverEdu").css("display","none");
//						  $('#coveragesDialog').modal('hide');   
//				});
				
		});     
	  
}//end of ForEducationClone

function arrangePayouts(){

	var oldref="",R1;  
	$("#liEducationtbl tbody").find("tr:visible").each(function(c,r){
		var refId=$(this).find("td:first").find("input:eq(2)").val(); 
	if($(this).find("td:eq(2) select:eq(0)").css("display") != "none"){		 
	R1 = $(this);
	}
		if(!isEmpty(refId) && refId == oldref){   
			if($(this).find("td:eq(2) select:eq(0)").css("display") == "none"){
				var R2 = $(this);  
				$(this).find("td").each(function(i){
				
					 if(i == 0){
							var spanHTML = R2.find("td:eq(0)").html();
							 spanHTML = spanHTML
						       .replace(/<span style="display: none;">/g, '<i>')
						       .replace(/<\/span>/g, '</i>');
							 R2.find("td:eq(0)").html(spanHTML); 
							 R2.find("td:eq(0)").find("i").text(""); 
						 R1.find("td:eq(0)").find("input[type=text]:last,input[type=hidden]:last,select:last").after(R2.find("td:eq(0)").html());
							
					 }
					if(i != 11 && i != 0){ 
						R1.find("td:eq("+i+")").find("input[type=text]:last,input[type=hidden]:last,select:last").after(R2.find("td:eq("+i+")").html());
					}
				});
				R1.find("td:eq(11) div[class=divdatatemp]:last").after("<div class='divdatatemp'>"+R2.find("td:eq(11) div[class=divdatatemp]").html()+"</div>");
				$(this).hide();
			} 
		}
		oldref=refId;  
	});

}
function multibenefits(elm){
	var SelCoverageTypes = [];  
    var NtSelCoverageTypes = [];  
    var DeSelCoverageTypes = []; 
    var SelCovValOfIns=[]; 
     
    
    var elmid =$(elm).attr("id");
    var hid=$(elm).closest("div").find("input[type=hidden]");
   var checked=$(elm).find("option:selected").is(":checked");
   
   $('#divmulTPD,#divmaaTPD,#divexpTPD,#divdisTPD,#divdisPayoutTPD,#divmaxPayoutTPD').hide();
	$('#divmulBootDeath,#divmaaDeath,#divexpDeath,#divyrPayDeath').hide();
	$('#divdisBenefit,#divdisPayout,#divmaxPayout').hide();
	$('#divmulCriIllErly,#divmaaCriIllErly,#divexpCriIllErly,#divyrPayCriIllErly').hide();
	$('#divmulCriIllAdv,#divmaaCriIllAdv,#divexpCriIllAdv,#divdisCriIllAdv,#divdisPayoutCriIllAdv,#divmaxPayoutCriIllAdv').hide();
	$('#divdesHSBenefit,#divinsHSBenefit,#divdedHSBenefit,#divtypHSBenefit,#divyrPayHSP,#divexpHSP,#divmaaHSP,#divmulHSP').hide();
	$('#divmulPA,#divmaaPA,#divexpPA,#divyrPayPA').hide();
	$('#divremarks1,#divremarks2,#divremarks3,#divremarks4,#divremarks5,#divremarks6,#divremarks7').hide();
	$('#btnForRetirementClone').hide();
	$('#btnForEducationClone').hide();

	var tdindex = $(elm).closest("td").index();
	var planPKId = $(elm).closest("tr").parents().find("tr:eq(0)").find("td:eq("+tdindex+")").find("div.hiddens").find("input:eq(13)").val();
	
	
	$(elm).find('option').each(function() {
		
		var val = $(this).val();
		var txt = $(this).text();
		var casetxt = "";
		
		if(txt != undefined && txt != "undefined" && 
				txt != "Retirement" && txt  != "Education"){
			
			switch(val){
			case "TPD":casetxt = "TPD";break;
			case "DB":casetxt = "Death_Benefit";break;
			case "DIS":casetxt = "Disability";break;
			case "CIE":casetxt = "CI-Early";break;
			case "CIA":casetxt = "CI-Advanced";break;
			case "HP":casetxt = "Hospitalisation";break;
			case "PA":casetxt = "PA";break;
			}
//			console.log(planPKId + "<"+casetxt)
			var $lastRow = chkCoverageExists(casetxt,planPKId);
			
			if($lastRow != null){
				
				if($(this).is(":selected")){
					$lastRow.find("td:eq(0)").find('input:eq(0)').val(UPD_MODE);
				}else{
					$lastRow.find("td:eq(0)").find('input:eq(0)').val(DEL_MODE);
				}
			}
		}
    }); 
	
	
if (checked == false) {  
  $(elm).find('option:selected').each(function() { 	
			 NtSelCoverageTypes.push($(this).val());    
          $.each( NtSelCoverageTypes, function( index, value ) { 
//        	  MultiSelectOption("mulSelButton","hmulSelButton","REMOVE",NtSelCoverageTypes); 
        	  MultiselectCoverage($(this),hid,"REMOVE",NtSelCoverageTypes);
        	 }); 
          
          
         }); 
	 }
    
    
    
    if(checked == true){
    	$(elm).find(' option:selected').each(function() { 	
    	SelCoverageTypes.push($(this).val());    
     $.each( SelCoverageTypes, function( index, value ) {  
    	 MultiselectCoverage($(this),hid,"SELECT",SelCoverageTypes);
    	 typeOfCoveragePro(value,"block");/* commented custom*/
    	 
   	 }); 
     
    }); 
    }else{  
    	$(elm).find('option:not(:selected)').each(function() { 	
    		DeSelCoverageTypes.push($(this).val());   
            $.each( DeSelCoverageTypes, function( index, value ) {   
       	 	typeOfCoveragePro(value,"none");/* commented* checked and then unchecked*/
       	    MultiselectCoverage($(this),hid,"NONE",DeSelCoverageTypes); 
            }); 
           
    	});
    }
    
    
    $(elm).find(' option:selected').each(function() {     
    	SelCovValOfIns.push($(this).val());  
    }); 
    
    
    if($.inArray("RP",SelCovValOfIns) != -1){ 
    	$(elm).multiselect('deselect','RP');      
//      	 mandatoryFldForRetirement($(this),null,'LIFE'); 
      	$(elm).multiselect('select','RP'); 
// 	    loadAgeStartEnd($("#txtFldDlgRetPlgCommOfAge"),$("#retAgeBasedon"));//off this validation

      }
 

} 
 
 
 function MultiselectCoverage(elmId,hid,options,arrayList){
	  
			if(options=="ALL"){ 
				hid.val("RP,EP,TPD,DB,DIS,CIE,CIA,HP,PA"); 
			}else if(options=="NONE"){
				hid.val(""); 
			}else if(options=="SELECT"){  
				hid.val(arrayList);
			}else if(options=="REMOVE"){ 
				hid.val(arrayList);
			}
	 
 }

 function genMultseltBR(elmtId){

//	 	console.log("multiselect.elmtId------->"+elmtId);
	 	
	 	$('#'+elmtId).multiselect('destroy');
	 
		$('#'+elmtId).multiselect({ 
			 	includeSelectAllOption: true, 
		        buttonWidth: '120px',  
		        maxHeight: "100%",
		        
		        onSelectAll: function() {
		        	var SelCovValOfIns = [];
		        	var elmid =$(this).attr("id");
		        	var hid=$(this).closest("div").find("input"); 
		        	MultiselectCoverage(elmid,hid,"ALL",null);
		        	typeOfCoveragePro("All","block");/*commented Enable all*/ 
		        	 $("#"+elmid+'option:selected').each(function() { 
		        		 SelCovValOfIns.push($(this).val());  
		        	 });
		        	 if($.inArray("RP",SelCovValOfIns) != -1){
			            	
		            	 $('#'+elmtId).multiselect('deselect','RP');    
//		            	 	mandatoryFldForRetirement($(this),null,'LIFE'); 
					  	  	$('#'+elmtId).multiselect('select','RP');  
					  	  loadAgeStartEnd($("#txtFldDlgRetPlgCommOfAge"),$("#retAgeBasedon"));
		        	 }	
		        	
		        },
		        onDeselectAll: function() {
		        	 var SelCovValOfIns=[];
		        		var elmid =$(this).attr("id");
			        	var hid=$(this).closest("div").find("input"); 
		        	MultiselectCoverage($(this),"NONE",null);
		        	typeOfCoveragePro("All","none");/*commented disable all*/
		        	
		        	$("#"+elmid+' option:selected').each(function() {     
		        		 SelCovValOfIns.push($(this).val());  
		                });  
	           },
		        onChange: function(option, checked, select) { 
//		        	console.log($('#'+elmtId) + "," + elmtId)
//		                console.log(option.val()+"---------------------------->>>>>>>>>>>>>>>>"+option.text()+",checked:"+checked+",select:"+select);
		                var tdindex = $('#'+elmtId).parents("td").index();
//		                console.log(tdindex);
		                var planCoverage = $("#cvplnleftpaneltbl tbody tr:eq(2) td:eq("+tdindex+")").find("select");
		                multibenefits(planCoverage)
//		                var pkid = $(elmtId).closest("tbody").find("tr:eq(0)").find("td:eq("+tdindex+")").find("div.hiddens").find("input:eq(13)").val();
//		                console.log(pkid);
		                
		                
		                
		        } 
		        
		    });
		
//		$('#'+elmtId).multiselect('destroy');
//	 	$('#'+elmtId).multiselect('rebuild');
//	 	$('#'+elmtId).multiselect('refresh');
		
		
 }
 
 
 /*BASIC AND RIDER PLANS*/
 function getliBasRidDetRows(dataset,tab){
	 
	if(dataset != null){
		
		var prodType = dataset["strFPMSPolPrdtType"];
		var application = dataset["strFPMSPolApplnName"];
		var prodTypeFipa = dataset["basorrid"];
		var prodTypeCount = dataset["planReferenceId"];
		var basicraidid = dataset["benfRaidRefId"];
		
		if(!isEmpty(prodTypeFipa) && prodTypeFipa == "Basic")prodType="B";
		if(!isEmpty(prodTypeFipa) && prodTypeFipa == "Rider")prodType="R";
		
		console.log("prodTypeCount------->"+prodTypeCount)
		var currbasic_count = 1;
		if(!isEmpty(prodTypeCount)) currbasic_count=prodTypeCount.substr(1);
		console.log(prodType +","+currbasic_count);
		if(prodType == "B"){			
			
			if(currbasic_count == 1){
				displayValue(dataset, null, 0);
				if(application == "FPMSNL"){
					getBasicfn(false,null);
				}					
			}else{
				getBasicfn(true,dataset);
			}
			
		}else if (prodType == "R"){
			
			
			var basicTdIndex  = getBasicTd(basicraidid);
			
			
//			var basicTdIndex = $("#cvplnleftpaneltbl tbody tr:eq(0)").find("td.basicplantd:eq("+td+")").index();
			
			
			var curElm = $("#cvplnleftpaneltbl tbody tr:eq(0)").find("td:eq("+(basicTdIndex)+")").find("a.genAddRProicon");//.basicplantd
			genRiderfn(curElm,true,dataset);
			
			if(application == "FPMSNL"){
				genRiderfn(curElm, false, null);
			}
		}
		
		
	}  
}
 
 function getBasicTd(currid){
	 var tdpostion = 0;
	 var totaltd = $("#cvplnleftpaneltbl tbody tr:eq(1) td").length;
		for(var td = 0; td<totaltd ;td++){
			
			$("#cvplnleftpaneltbl tbody tr:eq(1)").find("td:eq("+td+")").find('input:eq(0)').val();
			
			var ridernewid = $("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:eq("+td+")").find("div.hiddens").find("input:eq(14)").val();
			console.log(currid +"="+ ridernewid);
			
			if(currid == ridernewid){
				return tdpostion = td;
			}
			
			
		 
		}
		return tdpostion;
 }
 
	function displayValue(dataset,tab,index){
		var $tbody=$("#cvplnleftpaneltbl tbody");
		
		var $len = "";
		var fpmsplan = false;
		
		var infoDetsArr = new Array();
		
		for(var data in dataset){
			var col = dataset[data];
			if(data == "strFPMSPolApplnName" && col == "FPMSNL"){
				fpmsplan = true;
			}
		
		
		
		switch(data){ 
		
		
			case "planReferenceId": 
				$tbody.find("tr:eq(0)").find("td:eq("+index+")").find("div.hiddens").find('input:eq(0)').val(col);		
				break;
				
			case "strFPMSPolPrdtType":			
				var total_rider = $("#cvplnleftpaneltbl tbody tr:eq(0)").find("input[name=txtFldTotalRiders]").val();
				total_rider = (isEmpty(total_rider) || total_rider == 0) ? 1 : ( total_rider ); 
				$tbody.find("tr:eq(0)").find("td:eq("+index+")").find("div.hiddens").find('input:eq(0)').val(col+total_rider); 
				break;
				
			case "planCrtdBy": 
				$tbody.find("tr:eq(0)").find("td:eq("+index+")").find("div.hiddens").find('input:eq(1)').val(col);
				$tbody.find("tr:eq(0)").find("td:eq("+index+")").find('input:eq(12)').val(UPD_MODE);
				infoDetsArr.push(col);				
				break;
				
			case "planCrtdDate":
				$tbody.find("tr:eq(0)").find("td:eq("+index+")").find("div.hiddens").find('input:eq(2)').val(col);
				infoDetsArr.push(col);
				break;
	
			case "plnlfretYrstoret":
				$tbody.find("tr:eq(0)").find("td:eq("+index+")").find("div.hiddens").find('input:eq(3)').val(col); 
				break;
				
			case "plnretSelfretage":
				$tbody.find("tr:eq(0)").find("td:eq("+index+")").find("div.hiddens").find('input:eq(4)').val(col); 
				break;
				
			case "plnretSpouseretage":
				$tbody.find("tr:eq(0)").find("td:eq("+index+")").find("div.hiddens").find('input:eq(5)').val(col); 
				break;
			case "plnretMultionret":
				$tbody.find("tr:eq(0)").find("td:eq("+index+")").find("div.hiddens").find('input:eq(6)').val(col); 
				break;
				
			case "plnretCashvalonret":
				$tbody.find("tr:eq(0)").find("td:eq("+index+")").find("div.hiddens").find('input:eq(7)').val(col); 
				break;
				
			case "plnretIntrateused":
				$tbody.find("tr:eq(0)").find("td:eq("+index+")").find("div.hiddens").find('input:eq(8)').val(col); 
				break;
				
			case "plnretPrcnttoused":
				$tbody.find("tr:eq(0)").find("td:eq("+index+")").find("div.hiddens").find('input:eq(9)').val(col); 
				break;
				
			case "plncashvalRetAge":
				$tbody.find("tr:eq(0)").find("td:eq("+index+")").find("div.hiddens").find('input:eq(10)').val(col);
				 break; 
				 
			case "cashValRefId":  
				$tbody.find("tr:eq(0)").find("td:eq("+index+")").find("div.hiddens").find('input:eq(11)').val(col); 
				$tbody.find("tr:eq(0)").find("td:eq("+index+")").find("div.hiddens").find('input:eq(18)').val(col); 
				break;
				
			case "riderId": 
				$tbody.find("tr:eq(0)").find("td:eq("+index+")").find("div.hiddens").find('input:eq(13)').val(col); 					
				break;
			
			case "benfRaidRefId": 
				$tbody.find("tr:eq(0)").find("td:eq("+index+")").find("div.hiddens").find('input:eq(14)').val(col); 
				break;
				
			case"fnaSelfspouseDets":			
				$tbody.find("tr:eq(0)").find("td:eq("+index+")").find('input:eq(15)').val(col);
				break;
				
			case"fnaLifeinsuranceDets":
				$tbody.find("tr:eq(0)").find("td:eq("+index+")").find('input:eq(16)').val(col);
				break;
			
			case "basorrid"://Type of plan 
				$tbody.find("tr:eq(0)").find("td:eq("+index+")").find("div.hiddens").next("div").find('input:eq(0)').val(col); 
				break;
				
			case "planName"://Plan name 
			case "strFPMSPolPlanName": 
				$tbody.find("tr:eq(1)").find("td:eq("+index+")").find('input:eq(0)').val(isEmpty(col) ? "-" : col); 
				break;
				
			case "coverageTypes":  //Types of benefits
				var arrLipCovType=col.split(','); 
				$tbody.find("tr:eq(2)").find("td:eq("+index+")").find('select:eq(0)').multiselect('select',arrLipCovType);  
				$tbody.find("tr:eq(2)").find("td:eq("+index+")").find('input[name=hselCoverages]').val(col);  
				break;
				
			case "sumAssured"://Sum Assured 
			case "strFPMSPolSA":
				$tbody.find("tr:eq(3)").find("td:eq("+index+")").find('input:eq(0)').val(isEmpty(col) ? "0" : col); 
				break;
				
			case "premAmount"://Premium
			case "strFPMSPolPremium":
				$tbody.find("tr:eq(4)").find("td:eq("+index+")").find('input:eq(0)').val(isEmpty(col) ? "0" : col); 
				break; 
				
			case "planIncepDate"://Inception Date
			case "strFPMSPolEffDate": 
				var detsdate = $("#lipIncepdate").val();
				var todaydate=$("#hTxtFldSysDate").val();
				$tbody.find("tr:eq(5)").find("td:eq("+index+")").find('input:eq(0)').val(!isEmpty(col) ?  col : (!isEmpty(detsdate) ? detsdate : todaydate ));  
				break;
				
			case "premTerm": //Premium Term
			case "strFPMSPolPremTerm": 
				$tbody.find("tr:eq(6)").find("td:eq("+index+")").find('input:eq(1)').val(isEmpty(col) ? "0" : col); 
				if(col != "WHOLE LIFE"){
					$tbody.find("tr:eq(6)").find("td:eq("+index+")").find('input:eq(0)').prop("checked",true);
				}
				
				toggleTermPlanSwitch($tbody.find("tr:eq(6)").find("td:eq("+index+")").find('input:eq(1)'),$tbody.find("tr:eq(6)").find("td:eq("+index+")").find('input:eq(0)'));
				break;
				
			case "planExpDate"://Policy Expiry Date
				$tbody.find("tr:eq(7)").find("td:eq("+index+")").find('input:eq(0)').val(col);				
				break;
			
				
			case "paymentMode": //Payment mode
			case "strFPMSPolPaymentMode":
				var mode;
				if(col == "SEMI-ANNUAL" || col=="HALF-YEARLY"){
					mode="HALF YEARLY";
				}else if (col == "ANNUALLY" || col == "ANNUALY"){
					mode = "ANNUALLY";
				}else{
					mode=col;
				} 
				selectNullvalChk($tbody.find("tr:eq(8)").find("td:eq("+index+")"),mode);   
				break;
			
			case "paymentMethod": //Payment Method
			case "strFPMSPolPaymentMeth":
				selectNullvalChk($tbody.find("tr:eq(9)").find("td:eq("+index+")"),col); 
				break;
				
				
			case "paymentMethodBy":
				selectNullvalChk($tbody.find("tr:eq(10)").find("td:eq("+index+")"),col); 
				break;
				
			case "insurCashval"://Insurance Cash Value
				$tbody.find("tr:eq(11)").find("td:eq("+index+")").find('input:eq(0)').val(col);  
				break;
			
			case "lifeInsLoans"://Life Insurance Loans
				$tbody.find("tr:eq(12)").find("td:eq("+index+")").find('input:eq(0)').val(col);  
				break;
			
				 
			case "planRemarks": //Remarks
			case "strFPMSPolRemarks":
				$tbody.find("tr:eq(13)").find("td:eq("+index+")").find('textarea:eq(0)').val(col);
				
//				both FIPA & FPMS having remarks column and it is the last indexing, so placed here.
				if(isEmpty($tbody.find("tr:eq(7)").find("td:eq("+index+")").find('input:eq(0)').val())){
					changeNRExpDate($tbody.find("tr:eq(7)").find("td:eq("+index+")").find('input:eq(0)'));
				}
				
				break;
		}
	} 
		$("[name=txtFldTfplan]").prop("readonly",true);
		ilifeInsPremium('FETCH'); 
}
	
	
 
function onchangePlanMode(elm){
	var index=$(elm).closest("td").index();
	var mode = $("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:eq("+index+")").find('input:eq(12)').val();
	if(mode == QRY_MODE){
		$("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:eq("+index+")").find('input:eq(12)').val(UPD_MODE);
	}
}

function clearPlanTab(defaultrow){
	$("#cvplnleftpaneltbl tbody tr td").each(function(){
		var index  =  $(this).index();
		      if(defaultrow){
		    	  if(index!=0){
		    		  $(this).closest("tr").find("td:eq("+index+")").remove();  
		    	  }		    	  
		      }else{
		    	  $(this).closest("tr").find("td:eq("+index+")").remove();
		      }
		      
		      
		$(this).closest("tr").find("td:eq(0)").find("input,select,textarea").val("");
		
		});
	
//	resetMultiSel("selCoveragesB00");
//	resetMultiSel("selCoveragesR00Hidden");
	genMultseltBR("selCoveragesB00");
	$("#txtFldTfplanB00").val("Basic").prop("readOnly",true);
	$("#txtFldplanTefIdB01").val("B1");
	$("#txtFldplnDetModeB01").val("I");
	$("#newlifeprinname").text("");
	$("#newlifepolicyno").text("");
	
//	var BASIC_REF = "B1";
//	  $("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:eq(0)").find("div.hiddens").find("input:eq(0)").val(BASIC_REF);
//	  $("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:eq(0)").find("div.hiddens").find("input:eq(12)").val("I");
//	  
//	  $("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:eq(0)").find("div.hiddens").find("input:eq(13)").val(makeid(17));
//	  $("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:eq(0)").find("div.hiddens").find("input:eq(14)").val(newMakeId("LIP", 12));
//	  
//	  $("#cvplnleftpaneltbl tbody").find("tr:eq(6)").find("td:eq(0)").find("input:eq(0)").prop("checked",true);
	
	getBasicfn(false,null);
}
	




function onchangeExpDate(elm){
	var index=$(elm).closest("td").index();
		var InpDate= $("#cvplnleftpaneltbl tbody").find("tr:eq(5)").find("td:eq("+index+")").find('input').attr("id");
	var ExpDate= $("#cvplnleftpaneltbl tbody").find("tr:eq(7)").find("td:eq("+index+")").find('input').attr("id");
		
		if(!chkFromToDateValidation(InpDate,ExpDate,'Expiry Date should be greater than the Inception Date'));
	/*	if(!dhtmlChkDateValidation('InpDate','ExpDate','Expiry Date should be greater than the Inception Date'));*/
		
}


/*Aravindh*/
function onchangePremTerm(elm){
	  
	var index=$(elm).closest("td").index();
	var uniqueId = $("#cvplnleftpaneltbl tbody").find("tr:eq(6)").find("td:eq("+index+")").find('input:eq(0)').attr("id");

	if ($('#'+uniqueId).is(':checked')) {
		$("#cvplnleftpaneltbl tbody").find("tr:eq(6)").find("td:eq("+index+")").find('input:eq(1)').val("");
		$("#cvplnleftpaneltbl tbody").find("tr:eq(6)").find("td:eq("+index+")").find('input:eq(1)').prop("readonly", false);
		
    }
	
	else{
		$("#cvplnleftpaneltbl tbody").find("tr:eq(6)").find("td:eq("+index+")").find('input:eq(1)').val("WHOLE LIFE");
		$("#cvplnleftpaneltbl tbody").find("tr:eq(6)").find("td:eq("+index+")").find('input:eq(1)').prop("readonly", true);
	}
}


//function onchangePremTermDate(elm){
//	var index=$(elm).closest("td").index();
//	var uniqueIdPremTr = $("#cvplnleftpaneltbl tbody").find("tr:eq(6)").find("td:eq("+index+")").find('input:eq(1)').attr("id");
//	var uniqueIdIncDate = $("#cvplnleftpaneltbl tbody").find("tr:eq(3)").find("td:eq("+index+")").find('input').attr("id");
//	var uniqueIdExpDate = $("#cvplnleftpaneltbl tbody").find("tr:eq(4)").find("td:eq("+index+")").find('input').attr("id");
//	
//	if(!calculateEndDateFromYear($("#"+uniqueIdPremTr),$("#"+uniqueIdIncDate),$("#"+uniqueIdExpDate)));
//	
//	
//}


function calculateEndDateFromYear(term,IncDate,eodDate){
	
	 var endDate=""; 
	 var termval = term.val();
	 var IncDateval = IncDate.val();
	if(!isEmpty(termval) && !isEmpty(IncDateval)){
		 if(term.val()!="WHOLE LIFE"){
			 endDate=addyearsToDate(IncDate.val(),term.val());
			 eodDate.val(endDate);
		 }else{
			 eodDate.val("");
		 } 
	 }else{
		 eodDate.val("");
	 }
	if(termval == "0"){
		eodDate.val(IncDateval);
	}
} 

function toggleTermPlanSwitch(elmId,switchId){

  var PremTerm=elmId.val();
  
  if(!isEmpty(PremTerm)){
	if (PremTerm.toUpperCase() == "WHOLE LIFE")
	{
		switchId.prop("checked", false);
		elmId.prop("readonly", true).val("WHOLE LIFE"); 
		
	}
	else{
		switchId.prop("checked", true); 
//		elmId.prop("readonly", false).val(""); 
	}
  }
}

/*Synchronization part*/

/*CPF SYNC*/
function newlifesyncCPF(curElm){
	var tdpos=Number($(curElm).closest("td").index());  
	console.log("newlifesyncCPF.tdpos -------"+tdpos)
	NRLfInsCpfTbl(tdpos);  //Sync to CPF,CPFOA,CPFSA
} 

//Sync to CPF,CPFOA,CPFSA
function NRLfInsCpfTbl(tdpos){ 
	
	var $planRow = $("#cvplnleftpaneltbl tbody");
	 
	var planrefid = $planRow.find("tr:eq(0)").find("td:eq("+tdpos+")").find("input:eq(18)").val();//Reference id
	var $rowref = planrefid; 
	 
	 
	var ownership=$("#lipOwner").val(); //Ownership
	var policyNo = $("#lipPolicyno").val();
	var selfAge = $("#dfSelfAge").val();


	var planname	=$planRow.find("tr:eq(1)").find("td:eq("+tdpos+")").find('input:eq(0)').val();//Plan Name
  	var amount		= $planRow.find("tr:eq(4)").find("td:eq("+tdpos+")").find('input:eq(0)').val();//Premium amount
  	amount = isEmpty(amount) ? Number(0) : Number(amount);
  	
  	var paymode		=$planRow.find("tr:eq(8)").find("td:eq("+tdpos+")").find('select:eq(0)').val();//mode
	var paymentmtd	=$planRow.find("tr:eq(9)").find("td:eq("+tdpos+")").find('select:eq(0)').val();//payment mtd(CPF/CPFOA,CPFSA)
	var periodFrm	=$planRow.find("tr:eq(5)").find("td:eq("+tdpos+")").find('input:eq(0)').val();//Inception date
	var periodTo	=$planRow.find("tr:eq(7)").find("td:eq("+tdpos+")").find('input:eq(0)').val();//Expiry date
	var premTerm	=$planRow.find("tr:eq(6)").find("td:eq("+tdpos+")").find("input:eq(1)").val(); //Premium Term
//	var basiccount		=$planRow.find("tr:eq(0)").find("td:eq("+tdpos+")").find("input:eq(0)").val();//Reference id
	
	var dateTopay ="",stillNeedTopay=false;
	 if(!isEmpty(premTerm) && !isEmpty(periodFrm)){
		 if(premTerm.toUpperCase() != "WHOLE LIFE"){
			  dateTopay			= addyearsToDate(periodFrm,premTerm);	
			  stillNeedTopay 	= validateDateComparision(dateTopay,ResultNewDate,">=");  
		 }else if(premTerm.toUpperCase() == "WHOLE LIFE"){
			 stillNeedTopay		= true;
		 }
	 }
	 if(paymode == 'SINGLE'){
		 dateTopay			= addyearsToDate(periodFrm,1);
			stillNeedTopay 	= validateDateComparision(dateTopay,ResultNewDate,">=");
		 }
	 console.log(paymode+","+paymentmtd+","+stillNeedTopay+","+periodFrm+","+dateTopay+","+premTerm+","+ResultNewDate)
	 
	 if(!isEmpty(paymentmtd) && stillNeedTopay ){ //&& paymode != "SINGLE"
			if(ownership != "Joint" && ownership != "Parents"){
		
		if( isCPFRelated( paymentmtd )){
			
			deleteAllSRSByRefId($rowref);

			var rowexist = chkCPFRowExist($rowref);
	
			var $tblCpfRow = null; 
			if(rowexist == null){
				getCADRows(null);
				$tblCpfRow =  $("#cpfAccAddDedTable tbody tr:last"); 
			}else{
				if(rowexist.css('display') == 'none'){
					rowexist.css("display","");
				}
				if(rowexist.find("td:first").find("input:first").val() == 'D'){
					rowexist.find("td:first").find("input:first").val("I");
				}
				$tblCpfRow = rowexist;
			}
			
//			$planRow.find("tr:eq(0)").find("td:eq("+tdpos+")").find("input:eq(14)").val($rowref);
			$tblCpfRow.find("td:eq(0)").find('input:eq(2)').addClass("rowrefid").val($rowref);
			
			var pkid = $planRow.find("tr:eq(0)").find("td:eq("+tdpos+")").find('input:eq(13)').val();
			
//			if(pkid.indexOf("AS_") == 0){
				if(isEmpty($tblCpfRow.find("td:eq(0)").find('input:eq(1)').val())){
					$tblCpfRow.find("td:eq(0)").find('input:eq(1)').val(makeid(17));
				}
					
//			}
	
 
			
			var cprarr = getCPFAccDets(paymentmtd);
			var cpfedacc=cprarr[0],ccedid=cprarr[1];
			 
			 /*if(paymentmtd == "CPFOA" ){cpfedacc="Ordinary";ccedid="CPFACC000001";}//|| paymentmtd == "CPF"|| paymentmtd == "SRS"
			 else if(paymentmtd == "CPFSA"){cpfedacc="Special";ccedid="CPFACC000002";}
			 else if(paymentmtd == "CPFMA"){cpfedacc="Medisave";ccedid="CPFACC000003";}
			 else if(paymentmtd == "CPFRA"){cpfedacc="Retirement";ccedid="CPFACC000004";}
			 else {cpfedacc="";ccedid="";}*/
		 
			 var frequency=getFrequencyDigit(paymode, 1);
			 
			/* if(paymode == "ANNUALLY"){frequency="1";}
			 else if(paymode == "HALF YEARLY"){frequency="2";}
			 else if(paymode == "QUARTERLY"){frequency="4";}
			 else if(paymode == "MONTHLY"){frequency="12";}
			 else if(paymode == "SINGLE"){frequency="1";} */ 
		 
			 if(ownership == "Self"){
				 $tblCpfRow.find("td:eq(2)").find('option:eq(1)').prop("selected","selected");
			 }else  if(ownership == "Spouse"){
				 $tblCpfRow.find("td:eq(2)").find('option:eq(2)').prop("selected","selected");
			 }else{
				 $tblCpfRow.find("td:eq(2)").find('option:eq(0)').prop("selected","selected");
			 } 
			 
			  
			 selectNullvalChk($tblCpfRow.find("td:eq(3)"),ownership);   
		 
		    
			 selectNullvalChk($tblCpfRow.find("td:eq(4)"),"Life Insurance");  
			 $tblCpfRow.find("td:eq(4)").find('input:eq(0)').val(planname);  
			 $tblCpfRow.find("td:eq(4)").find('input:eq(1)').val(policyNo);  
			 $tblCpfRow.find("td:eq(4)").find('div[id="spanplanname"]').text(isEmpty(planname) ? "": "Plan Name : "+planname);  
			 $tblCpfRow.find("td:eq(4)").find('div[id="spanpolno"]').text(isEmpty(policyNo) ? "": "Policy No : "+policyNo);  

		  
			 selectNullvalChk($tblCpfRow.find("td:eq(5)"),"Deduction"); 
	
			 $tblCpfRow.find("td:eq(6)").find('input:eq(0)').val(ccedid);  
			 selectNullvalChk($tblCpfRow.find("td:eq(6)"),ccedid); 
			 
			 $tblCpfRow.find("td:eq(7)").find('input:eq(0)').val(periodFrm);
			 $tblCpfRow.find("td:eq(7)").find('input:eq(1)').val(selfAge);
			 
			 var toage = paymode == 'SINGLE' ? 0 : getYears(periodFrm, dateTopay);
			 $tblCpfRow.find("td:eq(8)").find('input:eq(0)').val(dateTopay);
			 $tblCpfRow.find("td:eq(8)").find('input:eq(1)').val( Number(selfAge) + Number(toage) );
			
//			 frequency ="1";//Always CPF Set to Annual because the amount is converted to Annual.
			 
			 $tblCpfRow.find("td:eq(9)").find('input:eq(0)').val(roundNumber(amount*Number(frequency))); 
			 selectNullvalChk($tblCpfRow.find("td:eq(10)"),paymode == 'SINGLE'? "-1"  : "1"); ////Always CPF Set to Annual because the amount is converted to Annual.
			  
	
			 applyEventHandlers();
			 applyToastrAlert("Life Insurance data will be reflected to CPF Account - Additions & Deductions of funds into CPF A/C in Central Provident Fund Screen");
			 mandatoryFldForCpf($tblCpfRow,null,'LIFE');
		  

			  
		}	else{
			deleteAllCPFByRefId($rowref);
		} 
		  
	}  else{
		deleteAllCPFByRefId($rowref);
	}
 } else{
		deleteAllCPFByRefId($rowref);
 }
	 
	return true;
}



/*SRS SYNC*/
//*Life Insurance > Central provident fund when payment mode is SRS-Basic Plan*//
 
function newlifesyncSRS(curElm){
	var tdpos=Number($(curElm).closest("td").index());  
	NRLfInsSRSTbl(tdpos);  //Sync to CPF,CPFOA,CPFSA
} 

function NRLfInsSRSTbl(tdpos){ 
	
	var $planRow = $("#cvplnleftpaneltbl tbody");
	 
	var planrefid		=$planRow.find("tr:eq(0)").find("td:eq("+tdpos+")").find("input:eq(18)").val();//Reference id
	var $rowref= planrefid;//"SRS"+tdpos; 
	 
	 
	var ownership=$("#lipOwner").val(); //Ownership
	var policyNo = $("#lipPolicyno").val();
	
	var planname	=$planRow.find("tr:eq(1)").find("td:eq("+tdpos+")").find('input:eq(0)').val();//Plan Name
  	var amount		= $planRow.find("tr:eq(4)").find("td:eq("+tdpos+")").find('input:eq(0)').val();//Premium amount
  	amount = isEmpty(amount) ? Number(0) : Number(amount);
  	
  	var paymode		=$planRow.find("tr:eq(8)").find("td:eq("+tdpos+")").find('select:eq(0)').val();//mode
	var paymentmtd	=$planRow.find("tr:eq(9)").find("td:eq("+tdpos+")").find('select:eq(0)').val();//payment mtd(CPF/CPFOA,CPFSA)
	var periodFrm	=$planRow.find("tr:eq(5)").find("td:eq("+tdpos+")").find('input:eq(0)').val();//Inception date
	var periodTo	=$planRow.find("tr:eq(7)").find("td:eq("+tdpos+")").find('input:eq(0)').val();//Expiry date
	var premTerm	=$planRow.find("tr:eq(6)").find("td:eq("+tdpos+")").find("input:eq(1)").val(); //Premium Term
//	var basiccount		=$planRow.find("tr:eq(0)").find("td:eq("+tdpos+")").find("input:eq(0)").val();//Reference id
	
	 var frequency= getFrequencyDigit(paymode, 1);
	/* if(paymode == "ANNUALLY"){frequency="1";}
	 else if(paymode == "HALF YEARLY"){frequency="2";}
	 else if(paymode == "QUARTERLY"){frequency="4";}
	 else if(paymode == "MONTHLY"){frequency="12";}
	 else if(paymode == "SINGLE"){frequency="1";}  */
 

	var dateTopay ="",stillNeedTopay=false;
	 if(!isEmpty(premTerm) && !isEmpty(periodFrm)){
		 if(premTerm.toUpperCase() != "WHOLE LIFE"){
			  dateTopay			= addyearsToDate(periodFrm,premTerm);	
			  stillNeedTopay 	= validateDateComparision(dateTopay,ResultNewDate,">=");  
		 }else if(premTerm.toUpperCase() == "WHOLE LIFE"){
			 stillNeedTopay		= true;
		 }
	 }
	 if(paymode == 'SINGLE'){
		 dateTopay			= addyearsToDate(periodFrm,1);
			stillNeedTopay 	= validateDateComparision(dateTopay,ResultNewDate,">=");
		 }
	 
	 
	 console.log(paymode+","+paymentmtd+","+stillNeedTopay+","+periodFrm+","+dateTopay+","+premTerm+","+ResultNewDate)
	 
	 if(!isEmpty(paymentmtd) && stillNeedTopay ){ //&& paymode != "SINGLE"
			if(ownership != "Joint" && ownership != "Parents"){
		
		if(paymentmtd == "SRS"){
			
			deleteAllCPFByRefId($rowref);
			
			 /*var rowexistcpfdel = chkCPFRowExist($rowref);
			 
			 if(rowexistcpfdel){
				 
				 var mode = rowexistcpfdel.find("td:first").find('input:eq(0)').val();

					if(mode == INS_MODE){ 
						rowexistcpfdel.hide();
						rowexistcpfdel.find("td:first").find('input:eq(0)').val(DEL_MODE);
					}else if (mode == QRY_MODE || mode == UPD_MODE){
						rowexistcpfdel.hide();
						rowexistcpfdel.find("td:first").find('input:eq(0)').val(DEL_MODE);   		     			
					} 

					reOrderVisibleRows("cpfAccAddDedTable");
			 }*/
			
			var rowexist = chkSRSRowExist($rowref);
			
			var $tblSRSRow = null; 
			if(rowexist == null){
				getcshSRSRows(null);
				$tblSRSRow =  $("#srsTable tbody tr:last"); 
			}else{
				
				if(rowexist.css('display') == 'none'){
					rowexist.css("display","");
				}
				if(rowexist.find("td:first").find("input:first").val() == 'D'){
					rowexist.find("td:first").find("input:first").val("I");
				}
				
				$tblSRSRow = rowexist;
			}
		
		//	$planRow.find("tr:eq(0)").find("td:eq("+tdpos+")").find("input:eq(18)").val($rowref);
			$tblSRSRow.find("td:eq(0)").find('input:eq(2)').addClass("rowrefid").val($rowref);
			
			var pkid = $planRow.find("tr:eq(0)").find("td:eq("+tdpos+")").find('input:eq(13)').val();
			
//			if(!isEmpty(pkid)){
				if(isEmpty($tblSRSRow.find("td:eq(0)").find('input:eq(1)').val())){
					$tblSRSRow.find("td:eq(0)").find('input:eq(1)').val(makeid(17));
				}
					
//			}
			
			$tblSRSRow.find("td:eq(2)").find('select:eq(0)').val("Annual Withdrawals"); //Classification  
			 
			$tblSRSRow.find("td:eq(3)").find('input:eq(0)').val("Life Insurance/Premium"); 
			
			$tblSRSRow.find("td:eq(4)").find('select:eq(0)').val(paymode != "SINGLE" ? "ANNUAL" : "SINGLE"); 
			
			$tblSRSRow.find("td:eq(5)").find('input:eq(0)').val(roundNumber( Number(amount) * Number(frequency) )); 
		   
			$tblSRSRow.find("td:eq(6)").find('input:eq(0)').val(periodFrm);//Period From
		   
			$tblSRSRow.find("td:eq(7)").find('input:eq(0)').val(dateTopay);
		 
		  

			
			mandatoryFldForSRS($tblSRSRow,null,'LIFE');
			
//			addSRSToRetirement($tblSRSRow);
		 
			 
			applyEventHandlers();
			applyToastrAlert("Life Insurance data will be reflected to SRS Account in Cash At Bank Screen");
			  
		}	 else{
			deleteAllSRSByRefId($rowref);
		}
		  
	}  else{
		deleteAllSRSByRefId($rowref);
	}
 } else{
	 deleteAllSRSByRefId($rowref);
 }
	 
	return true;
}


function newlifeRetPlan(currElem){
	var tdpos=Number($(currElem).closest("td").index());  
	console.log("tdpos -------"+tdpos)
	NRRetPlgTbl(tdpos);
}


/*Life To Retirement - Multion YES*/
function NRRetPlgTbl(tdpos){ 
	 
	
	var owner=$("#lipOwner").val();   
//	var paymtd = $("#hPaymentMtd").val();
	var intretslfage=isEmpty($("#retSelfAge").val())? 0 :Number($("#retSelfAge").val()); 
	var totAge=isEmpty($("#retSelfProjage").val())? 0 :Number($("#retSelfProjage").val());
 
	 var calPrcnt =isEmpty($("#retPrcnttoused").val())?Number(1):Number($("#retPrcnttoused").val())/100;
//		var covRef = $("#covRef").val();//txtFldliplnId = plan reference id
		
	 var planname =$("#cvplnleftpaneltbl tbody tr:eq(1)").find("td:eq("+tdpos+")").find("input:eq(0)").val();
	 var policyNo = $("#lipPolicyno").val();
	 var paymode = $("#cvplnleftpaneltbl tbody tr:eq(8)").find("td:eq("+tdpos+")").find("select:eq(0)").val(); 
		var paymtd = $("#cvplnleftpaneltbl tbody tr:eq(9)").find("td:eq("+tdpos+")").find("select:eq(0)").val(); 
		var covRef = $("#cvplnleftpaneltbl tbody tr:eq(0) td:eq("+tdpos+")").find("[name=txtFldliplnId]").val();//pkid
		var selfage = $("#dfSelfAge").val();
			
			$('#liRetirementPlgtbl tbody tr').each(function(){
				
				var $tblRetplgRow  = $(this);
				
				var $mode = $tblRetplgRow.find("td:eq(0)").find("input:eq(0)").val(); //LifeMVRet Ref Id
				
				var $rowref = $tblRetplgRow.find("td:eq(0)").find("input:eq(1)").val(); //LifeMVRet Ref Id
				var $planrefid = $tblRetplgRow.find("td:eq(0)").find("input:eq(2)").val();
				
				console.log(owner.toUpperCase() + " -" + paymtd + "-"+isCashRelated(paymtd))
				
				if(owner.toUpperCase() == "SELF" &&  isCashRelated(paymtd) ){
					
					deleteCPFMultiByRefId($rowref);
					deleteSRSMultiByRefId($rowref);
					
					
					if($mode != "D"){
						
						
						console.log(covRef+"=="+ $planrefid)
						if(covRef == $planrefid){
							
							var afterret = $rowref+"_A65";
							 
							//	 deleteRetPlanByRefId($rowref);
							//	 deleteRetPlanByRefId(afterret);
//								 deleteRetPlanMultiByRefId($rowref);
									
								var rowexist = chkRPIncAssetRowExist($rowref);
								
								var $tblRETRow = null; 
								if(rowexist == null){
									getincassrtRows(null,"N");
									$tblRETRow =  $("#IncAssRetPlgtbl tbody tr:last"); 
								}else{
									$tblRETRow = rowexist;
								}
							
								
								$tblRETRow.find("td:eq(0)").find('input:eq(2)').addClass("rowrefid").val($rowref);
								
								var pkid = $tblRetplgRow.find("td:eq(0)").find('input:eq(1)').val();
								
							//	if(!isEmpty(pkid)){ 
									if(isEmpty($tblRETRow.find("td:eq(0)").find('input:eq(1)').val())){
										$tblRETRow.find("td:eq(0)").find('input:eq(1)').val(makeid(17));
									}
							//	}
								
								 var clasfic	= "Life Insurance";//Classification
								 var descpt		= $tblRetplgRow.find("td:eq(2)").find('input:eq(0)').val();
								 var frequency	= "REGULAR";
								 var amtOfInc	= isEmpty($tblRetplgRow.find("td:eq(10)").find('input:eq(0)').val())?Number("0"):(Number($tblRetplgRow.find("td:eq(10)").find('input:eq(0)').val()));
								 var intrate	= isEmpty($tblRetplgRow.find("td:eq(11)").find('input:eq(0)').val())?Number("0"):(Number($tblRetplgRow.find("td:eq(11)").find('input:eq(0)').val()));
								 var escRate	= isEmpty($tblRetplgRow.find("td:eq(7)").find('input:eq(0)').val())?Number("0"):Number($tblRetplgRow.find("td:eq(7)").find('input:eq(0)').val());
								 var basedon    = $("#lipOwner").val().toUpperCase();//Age Based on 
								 var ageIncStart= isEmpty($tblRetplgRow.find("td:eq(5)").find('input:eq(0)').val())?Number("0"):Number($tblRetplgRow.find("td:eq(5)").find('input:eq(0)').val());
								 var ageIncEnd	= isEmpty($tblRetplgRow.find("td:eq(6)").find('input:eq(0)').val())?Number("0"):Number($tblRetplgRow.find("td:eq(6)").find('input:eq(0)').val());
								 
							
								 var retamount=0;
								 var prevamount = amtOfInc;
								 for(var dt = ageIncStart;dt<=ageIncEnd && dt<=intretslfage;dt++){
									 var rate = (intrate /100);
									 var nper = intretslfage - dt;
									 var pmt =0;
//									 var pv = -1 * amtOfInc;
									 if(escRate > 0 && dt >ageIncStart){
//										 prevamount = amtOfInc;
										 prevamount =   ((prevamount * (escRate /100)) + prevamount);
									 }
									 var pv = -1 * prevamount;
									 var type=1;
									 console.log(rate+","+nper+","+pmt+","+pv+","+type);
									 var z=FVCalculation(rate, nper, pmt, pv, type);
									 console.log("z------------------>"+z)
									 retamount += z;
								 }
								 console.log("retamount----------->"+retamount);
								 
								 retamount = Math.round(retamount);
								 
								$tblRETRow.find("td:eq(2)").find('input:eq(0)').val(clasfic);
								
								$tblRETRow.find("td:eq(3)").find('input:eq(0)').val(descpt);
								 
								selectNullvalChk($tblRETRow.find("td:eq(4)"),"SINGLE"); 
								
								$tblRETRow.find("td:eq(5)").find('input:eq(0)').val(retamount); 	
								
								$tblRETRow.find("td:eq(6)").find('input:eq(0)').val(escRate); 
									
								$tblRETRow.find("td:eq(7)").find('input:eq(0)').val(Number("0"));   
							  
								selectNullvalChk($tblRETRow.find("td:eq(8)"),basedon);//Need to check
							 
								$tblRETRow.find("td:eq(9)").find('input:eq(0)').val(intretslfage);
							 
								$tblRETRow.find("td:eq(10)").find('input:eq(0)').val(intretslfage).prop("disabled",true);
								
								console.log(" -------------------> " + ageIncEnd + "," +intretslfage + ","+escRate)
								
								if(ageIncEnd > intretslfage){
									
									
									
									 if(escRate == 0 ){
										 
										 
										 	var rowexistA65 = chkRPIncAssetRowExist(afterret);
										 	
										 	var $tblAfterRETRow=null;
										 	
										 	console.log(afterret+"-------->"+rowexistA65);
											
											if(rowexistA65 == null){
												getincassrtRows(null,"N");
												$tblAfterRETRow =  $("#IncAssRetPlgtbl tbody tr:last"); 
											}else{
												$tblAfterRETRow = rowexistA65;
											}
											
											console.log("$tblAfterRETRow------->"+$tblAfterRETRow)
											
											$tblAfterRETRow.find("td:eq(0)").find('input:eq(2)').addClass("rowrefid").val(afterret);
											
											var pkid = $tblRetplgRow.find("td:eq(0)").find('input:eq(1)').val();
											
											if(!isEmpty(pkid)){
												if(isEmpty($tblAfterRETRow.find("td:eq(0)").find('input:eq(1)').val())){
													$tblAfterRETRow.find("td:eq(0)").find('input:eq(1)').val(makeid(17));
												}
											}
										 
										 	$tblAfterRETRow.find("td:eq(2)").find('input:eq(0)').val(clasfic);
											
											$tblAfterRETRow.find("td:eq(3)").find('input:eq(0)').val(descpt);
											 
											selectNullvalChk($tblAfterRETRow.find("td:eq(4)"),"REGULAR"); 
											
											$tblAfterRETRow.find("td:eq(5)").find('input:eq(0)').val(amtOfInc); 	
											
											$tblAfterRETRow.find("td:eq(6)").find('input:eq(0)').val(escRate); 
												
											$tblAfterRETRow.find("td:eq(7)").find('input:eq(0)').val(Number("0"));   
										  
											selectNullvalChk($tblAfterRETRow.find("td:eq(8)"),basedon);//Need to check
										 
											$tblAfterRETRow.find("td:eq(9)").find('input:eq(0)').val(Number(intretslfage)+1);
										 
											$tblAfterRETRow.find("td:eq(10)").find('input:eq(0)').val(ageIncEnd);
										 
									 }else{
										 
										
										 console.log("inside escRate != 0 ")
										 
//										 for(var dt = intretslfage+1;dt<=ageIncEnd ;dt++){
											 
											 var $tblAfterRETRow=null;
											 var dt = Number(intretslfage)+1;
							
											 var rate = (intrate /100);
											 var nper = Number(intretslfage) - dt;
											 var pmt =0;
											 prevamount =  ((prevamount * (escRate /100)) + prevamount);
											 
											 
											 var pv = -1 * prevamount;
											 
											 var type=1;
											 
											 
											 console.log(rate +","+nper+","+pmt+","+pv+","+type);
											 var z=FVCalculation(rate, nper, pmt, pv, type);
											 console.log(dt + " escRate z------------------>"+z);
											 
											 afterret = $rowref+"_A"+dt;
											 console.log(afterret )
											 var rowexistA65 = chkRPIncAssetRowExist(afterret);
											 
											 console.log("rowexistA65----------->"+rowexistA65);
												
												if(rowexistA65 == null){
													getincassrtRows(null,"N");
													$tblAfterRETRow =  $("#IncAssRetPlgtbl tbody tr:last"); 
												}else{
													$tblAfterRETRow = rowexistA65;
												}
												$tblAfterRETRow.find("td:eq(0)").find('input:eq(2)').addClass("rowrefid").val(afterret);
												
												var pkid = $tblRetplgRow.find("td:eq(0)").find('input:eq(1)').val();
												
//												if(!isEmpty(pkid)){
													if(isEmpty($tblAfterRETRow.find("td:eq(0)").find('input:eq(1)').val())){
														$tblAfterRETRow.find("td:eq(0)").find('input:eq(1)').val(makeid(17));
													}
//												}
											 
											 	$tblAfterRETRow.find("td:eq(2)").find('input:eq(0)').val(clasfic);
												
												$tblAfterRETRow.find("td:eq(3)").find('input:eq(0)').val(descpt);
												 
												selectNullvalChk($tblAfterRETRow.find("td:eq(4)"),"SINGLE"); 
												
												$tblAfterRETRow.find("td:eq(5)").find('input:eq(0)').val(Math.round(z));
												
												$tblAfterRETRow.find("td:eq(6)").find('input:eq(0)').val(escRate); 
													
												$tblAfterRETRow.find("td:eq(7)").find('input:eq(0)').val(Number("0"));   
											  
												selectNullvalChk($tblAfterRETRow.find("td:eq(8)"),basedon);//Need to check
											 
												$tblAfterRETRow.find("td:eq(9)").find('input:eq(0)').val(dt);
											 
												$tblAfterRETRow.find("td:eq(10)").find('input:eq(0)').val(ageIncEnd).prop('disabled',true);
										 
//										 }
											
									 }
								}
							
								applyToastrAlert("Life Insurance data will be reflected to Income and assets available for Retirement Section in Retirement Planning Screen !");
						}
						
					}else if ($mode == "D"){
						deleteRetMultiByRefId($rowref);
					}
					
					
//					mandatoryFldForRetirement($(this),$tblRETRow,'LIFE');
					
				}else if(owner.toUpperCase() == "SELF" &&  isCPFRelated(paymtd) ){
					console.log("inside cpf -->"+$rowref)
					deleteRetPlanMultiByRefId($rowref);
					deleteSRSMultiByRefId($rowref);
					
					if($mode != "D"){
						
						
						console.log(covRef+"=="+ $planrefid)
						if(covRef == $planrefid){
							
							var afterret = $rowref+"_A65";
							 
							//	 deleteRetPlanByRefId($rowref);
							//	 deleteRetPlanByRefId(afterret);
//								 deleteRetPlanMultiByRefId($rowref);
									
								var rowexist = chkCPFRowExist($rowref);
								
								
								
								 var clasfic	= "Insurance";//Classification
								 var descpt		= $tblRetplgRow.find("td:eq(2)").find('input:eq(0)').val();
								 var frequency	= "REGULAR";
								 var amtOfInc	= isEmpty($tblRetplgRow.find("td:eq(10)").find('input:eq(0)').val())?Number("0"):(Number($tblRetplgRow.find("td:eq(10)").find('input:eq(0)').val()));
								 var intrate	= isEmpty($tblRetplgRow.find("td:eq(11)").find('input:eq(0)').val())?Number("0"):(Number($tblRetplgRow.find("td:eq(11)").find('input:eq(0)').val()));
								 var escRate	= isEmpty($tblRetplgRow.find("td:eq(7)").find('input:eq(0)').val())?Number("0"):Number($tblRetplgRow.find("td:eq(7)").find('input:eq(0)').val());
								 var basedon    = $("#lipOwner").val().toUpperCase();//Age Based on 
								 var ageIncStart= isEmpty($tblRetplgRow.find("td:eq(5)").find('input:eq(0)').val())?Number("0"):Number($tblRetplgRow.find("td:eq(5)").find('input:eq(0)').val());
								 var ageIncEnd	= isEmpty($tblRetplgRow.find("td:eq(6)").find('input:eq(0)').val())?Number("0"):Number($tblRetplgRow.find("td:eq(6)").find('input:eq(0)').val());
							
								 
								 var $tblCpfRow = null; 
									if(rowexist == null){
										getCADRows(null);
										$tblCpfRow =  $("#cpfAccAddDedTable tbody tr:last"); 
									}else{
										if(rowexist.css('display') == 'none'){
											rowexist.css("display","");
										}
										if(rowexist.find("td:first").find("input:first").val() == 'D'){
											rowexist.find("td:first").find("input:first").val("I");
										}
										$tblCpfRow = rowexist;
									}
								
									$tblCpfRow.find("td:eq(0)").find('input:eq(2)').addClass("rowrefid").val($rowref);
									
//									var pkid = $tblRetplgRow.find("td:eq(0)").find('input:eq(1)').val();
									
								//	if(!isEmpty(pkid)){ 
									if(isEmpty($tblCpfRow.find("td:eq(0)").find('input:eq(1)').val())){
										$tblCpfRow.find("td:eq(0)").find('input:eq(1)').val(makeid(17));
									}
								//	}
									
									
									var cprarr = getCPFAccDets(paymtd);
									var cpfedacc=cprarr[0],ccedid=cprarr[1];
									
									 var frequency=getFrequencyDigit(paymode, 1);
									 
									 if(owner == "Self"){
										 $tblCpfRow.find("td:eq(2)").find('option:eq(1)').prop("selected","selected");
									 }else  if(owner == "Spouse"){
										 $tblCpfRow.find("td:eq(2)").find('option:eq(2)').prop("selected","selected");
									 }else{
										 $tblCpfRow.find("td:eq(2)").find('option:eq(0)').prop("selected","selected");
									 } 
									 
									 selectNullvalChk($tblCpfRow.find("td:eq(3)"),owner); 
									 
									 
									 selectNullvalChk($tblCpfRow.find("td:eq(4)"),"Life Insurance");  
									 $tblCpfRow.find("td:eq(4)").find('input:eq(0)').val(planname);  
									 $tblCpfRow.find("td:eq(4)").find('input:eq(1)').val(policyNo);  
									 $tblCpfRow.find("td:eq(4)").find('div[id="spanplanname"]').text(isEmpty(planname) ? "": "Plan Name : "+planname);  
									 $tblCpfRow.find("td:eq(4)").find('div[id="spanpolno"]').text(isEmpty(policyNo) ? "": "Policy No : "+policyNo);
									 
									 selectNullvalChk($tblCpfRow.find("td:eq(5)"),"Addition"); 
										
									 $tblCpfRow.find("td:eq(6)").find('input:eq(0)').val(ccedid);  
									 selectNullvalChk($tblCpfRow.find("td:eq(6)"),ccedid); 

							
								 var retamount=0;
								 var prevamount = amtOfInc;
								 for(var dt = ageIncStart;dt<=ageIncEnd && dt<=intretslfage;dt++){
									 var rate = (intrate /100);
									 var nper = Number(intretslfage) - dt;
									 var pmt =0;
//									 var pv = -1 * amtOfInc;
									 if(escRate > 0 && dt >ageIncStart){
//										 prevamount = amtOfInc;
										 prevamount =   ((prevamount * (escRate /100)) + prevamount);
									 }
									 var pv = -1 * prevamount;
									 var type=1;
									 console.log(rate+","+nper+","+pmt+","+pv+","+type);
									 var z=FVCalculation(rate, nper, pmt, pv, type);
									 console.log("z------------------>"+z)
									 retamount += z;
								 }
								 console.log("retamount----------->"+retamount);
								 
								 retamount = Math.round(retamount);
								 
								  var retagediff = Number(intretslfage) - Number(selfage);
								  
								  var perdfrom =  addyearsToDate(ResultNewDate, retagediff);
								 
								  
								 $tblCpfRow.find("td:eq(7)").find('input:eq(0)').val(perdfrom);
								 $tblCpfRow.find("td:eq(7)").find('input:eq(1)').val(intretslfage);
								 
//								 var toage = paymode == 'SINGLE' ? 0 : getYears(perdfrom, dateTopay);
								 $tblCpfRow.find("td:eq(8)").find('input:eq(0)').val(perdfrom);
								 $tblCpfRow.find("td:eq(8)").find('input:eq(1)').val( intretslfage ).prop("disabled",true);
								
								 frequency ="1";//Always CPF Set to Annual because the amount is converted to Annual.
								 
								 $tblCpfRow.find("td:eq(9)").find('input:eq(0)').val(roundNumber(retamount)); 
								 selectNullvalChk($tblCpfRow.find("td:eq(10)"),"-1"); 
								 
								
								
								if(ageIncEnd > intretslfage){
									
									 if(escRate == 0 ){
										 
										 
										 	var rowexistA65 = chkCPFRowExist(afterret);
										 	
										 	var $tblAfterRETRow=null;
										 	
										 	console.log(afterret+"-------->"+rowexistA65);
											
											if(rowexistA65 == null){
												getCADRows(null);
												$tblAfterRETRow =  $("#cpfAccAddDedTable tbody tr:last"); 
											}else{
												$tblAfterRETRow = rowexistA65;
											}
											
											console.log("$tblAfterRETRow------->"+$tblAfterRETRow)
											
											$tblAfterRETRow.find("td:eq(0)").find('input:eq(2)').addClass("rowrefid").val(afterret);
											
//											var pkid = $tblRetplgRow.find("td:eq(0)").find('input:eq(1)').val();
											
//											if(!isEmpty(pkid)){
												if(isEmpty($tblAfterRETRow.find("td:eq(0)").find('input:eq(1)').val())){
													$tblAfterRETRow.find("td:eq(0)").find('input:eq(1)').val(makeid(17));
												}
												
												
												
//											}
												
												
												if(owner == "Self"){
													$tblAfterRETRow.find("td:eq(2)").find('option:eq(1)').prop("selected","selected");
												 }else  if(owner == "Spouse"){
													 $tblAfterRETRow.find("td:eq(2)").find('option:eq(2)').prop("selected","selected");
												 }else{
													 $tblAfterRETRow.find("td:eq(2)").find('option:eq(0)').prop("selected","selected");
												 } 
												 
												 selectNullvalChk($tblAfterRETRow.find("td:eq(3)"),owner); 
										 
												selectNullvalChk($tblAfterRETRow.find("td:eq(4)"),"Life Insurance");  
												$tblAfterRETRow.find("td:eq(4)").find('input:eq(0)').val(planname);  
												 $tblAfterRETRow.find("td:eq(4)").find('input:eq(1)').val(policyNo);  
												 $tblAfterRETRow.find("td:eq(4)").find('div[id="spanplanname"]').text(isEmpty(planname) ? "": "Plan Name : "+planname);  
												 $tblAfterRETRow.find("td:eq(4)").find('div[id="spanpolno"]').text(isEmpty(policyNo) ? "": "Policy No : "+policyNo);  

											
												 selectNullvalChk($tblAfterRETRow.find("td:eq(5)"),"Addition");
												 
												 $tblAfterRETRow.find("td:eq(6)").find('input:eq(0)').val(ccedid);  
												 selectNullvalChk($tblAfterRETRow.find("td:eq(6)"),ccedid); 
												 
											
//											$tblAfterRETRow.find("td:eq(6)").find('input:eq(0)').val(escRate); 
												
//											$tblAfterRETRow.find("td:eq(7)").find('input:eq(0)').val(Number("0"));   
										  
//											selectNullvalChk($tblAfterRETRow.find("td:eq(8)"),basedon);//Need to check
										 
//											$tblAfterRETRow.find("td:eq(9)").find('input:eq(0)').val(Number(intretslfage)+1);
//										 
//											$tblAfterRETRow.find("td:eq(10)").find('input:eq(0)').val(ageIncEnd);
												 var retagediff = (Number(intretslfage)+1) - Number(selfage);
												 var perdfrom =  addyearsToDate(ResultNewDate, retagediff);
											
											$tblAfterRETRow.find("td:eq(7)").find('input:eq(0)').val(perdfrom);
											$tblAfterRETRow.find("td:eq(7)").find('input:eq(1)').val(Number(intretslfage)+1);
											 
//											 var toage = paymode == 'SINGLE' ? 0 : getYears(perdfrom, dateTopay);
//											 var perdfrom =  addyearsToDate(ResultNewDate, Number(intretslfage)+1);
											
											var diffto = Number(ageIncEnd) - Number(selfage) ;
											 var perdTo =  addyearsToDate(ResultNewDate, diffto);
											 $tblAfterRETRow.find("td:eq(8)").find('input:eq(0)').val(perdTo);
											 $tblAfterRETRow.find("td:eq(8)").find('input:eq(1)').val( ageIncEnd );
											 
											 $tblAfterRETRow.find("td:eq(9)").find('input:eq(0)').val(roundNumber(amtOfInc)); 
											 
											 selectNullvalChk($tblAfterRETRow.find("td:eq(10)"), "1"); 
										 
									 }else{
										 
										 
//										 for(var dt = intretslfage+1;dt<=ageIncEnd ;dt++){
											 
											 var $tblAfterRETRow=null;
											 var dt = Number(intretslfage) + 1;
							
											 var rate = (intrate /100);
											 var nper = Number (intretslfage) - dt;
											 var pmt =0;
											 prevamount =  ((prevamount * (escRate /100)) + prevamount);
											 
											 
											 var pv = -1 * prevamount;
											 
											 var type=1;
											 
											 
											 console.log(rate +","+nper+","+pmt+","+pv+","+type);
											 var z=FVCalculation(rate, nper, pmt, pv, type);
											 console.log("z------------------>"+z);
											 
											 afterret = $rowref+"_A"+dt;
											 var rowexistA65 = chkCPFRowExist(afterret);
												
												if(rowexistA65 == null){
													getCADRows(null,"N");
													$tblAfterRETRow =  $("#cpfAccAddDedTable tbody tr:last"); 
												}else{
													$tblAfterRETRow = rowexistA65;
												}
												$tblAfterRETRow.find("td:eq(0)").find('input:eq(2)').addClass("rowrefid").val($rowref);
												
//												if(!isEmpty(pkid)){
													if(isEmpty($tblAfterRETRow.find("td:eq(0)").find('input:eq(1)').val())){
														$tblAfterRETRow.find("td:eq(0)").find('input:eq(1)').val(makeid(17));
													}
//												}
												
//												var pkid = $tblRetplgRow.find("td:eq(0)").find('input:eq(1)').val();
												
												if(owner == "Self"){
													$tblAfterRETRow.find("td:eq(2)").find('option:eq(1)').prop("selected","selected");
												 }else  if(owner == "Spouse"){
													 $tblAfterRETRow.find("td:eq(2)").find('option:eq(2)').prop("selected","selected");
												 }else{
													 $tblAfterRETRow.find("td:eq(2)").find('option:eq(0)').prop("selected","selected");
												 } 
												 
												 selectNullvalChk($tblAfterRETRow.find("td:eq(3)"),owner); 
													
													var cprarr = getCPFAccDets(paymentmtd);
													var cpfedacc=cprarr[0],ccedid=cprarr[1];
												 
//													 var frequency=getFrequencyDigit(paymode, 1);
													 
													 
													 selectNullvalChk($tblAfterRETRow.find("td:eq(4)"),"Life Insurance");  
													 $tblAfterRETRow.find("td:eq(4)").find('input:eq(0)').val(planname);  
													 $tblAfterRETRow.find("td:eq(4)").find('input:eq(1)').val(policyNo);  
													 $tblAfterRETRow.find("td:eq(4)").find('div[id="spanplanname"]').text(isEmpty(planname) ? "": "Plan Name : "+planname);  
													 $tblAfterRETRow.find("td:eq(4)").find('div[id="spanpolno"]').text(isEmpty(policyNo) ? "": "Policy No : "+policyNo);
													 
													 
													 selectNullvalChk($tblAfterRETRow.find("td:eq(5)"),"Addition"); 
													 
													 $tblAfterRETRow.find("td:eq(6)").find('input:eq(0)').val(ccedid);  
													 selectNullvalChk($tblAfterRETRow.find("td:eq(6)"),ccedid);
													 
													 var perdfrom =  addyearsToDate(ResultNewDate, dt);
												
												$tblAfterRETRow.find("td:eq(7)").find('input:eq(0)').val(perdfrom);
												$tblAfterRETRow.find("td:eq(7)").find('input:eq(1)').val(Number(dt));
												 
//												 var toage = paymode == 'SINGLE' ? 0 : getYears(perdfrom, dateTopay);
//												 var perdfrom =  addyearsToDate(ResultNewDate, Number(intretslfage)+1);
												
												
//													 $tblAfterRETRow.find("td:eq(7)").find('input:eq(0)').val(perdfrom);
//													 $tblAfterRETRow.find("td:eq(7)").find('input:eq(1)').val(dt);
													 
//													 var diffto = Number(dt) - Number(selfage) ;
//													 var perdTo =  addyearsToDate(ResultNewDate, diffto);
												
												var pt = Number(ageIncEnd) - (Number(intretslfage)+1);
												 var perdto =  addyearsToDate(perdfrom, pt);
												
													 $tblAfterRETRow.find("td:eq(8)").find('input:eq(0)').val(perdto);
													 $tblAfterRETRow.find("td:eq(8)").find('input:eq(1)').val(ageIncEnd).prop('disabled',true);;
													 
													 $tblAfterRETRow.find("td:eq(9)").find('input:eq(0)').val(roundNumber(z)); 
													 selectNullvalChk($tblCpfRow.find("td:eq(10)"),  "-1"); 
											 
										 
//										 }
											
									 }
								}
							
							 
						}
						
					}else if ($mode == "D"){
						deleteRetMultiByRefId($rowref);
					}
					
				}else if(owner.toUpperCase() == "SELF" &&  isSRSRelated(paymtd) ){
					console.log("inside srs -->"+$rowref)
					deleteRetPlanMultiByRefId($rowref);
					deleteCPFMultiByRefId($rowref);
					
	
					
					if($mode != "D"){
						
						
						console.log(covRef+"=="+ $planrefid)
						if(covRef == $planrefid){
							
							var afterret = $rowref+"_A65";
							 
							//	 deleteRetPlanByRefId($rowref);
							//	 deleteRetPlanByRefId(afterret);
//								 deleteRetPlanMultiByRefId($rowref);
									
								var rowexist = chkSRSRowExist($rowref);
								
								
								
								 var clasfic	= "Insurance";//Classification
								 var descpt		= $tblRetplgRow.find("td:eq(2)").find('input:eq(0)').val();
								 var frequency	= "REGULAR";
								 var amtOfInc	= isEmpty($tblRetplgRow.find("td:eq(10)").find('input:eq(0)').val())?Number("0"):(Number($tblRetplgRow.find("td:eq(10)").find('input:eq(0)').val()));
								 var intrate	= isEmpty($tblRetplgRow.find("td:eq(11)").find('input:eq(0)').val())?Number("0"):(Number($tblRetplgRow.find("td:eq(11)").find('input:eq(0)').val()));
								 var escRate	= isEmpty($tblRetplgRow.find("td:eq(7)").find('input:eq(0)').val())?Number("0"):Number($tblRetplgRow.find("td:eq(7)").find('input:eq(0)').val());
								 var basedon    = $("#lipOwner").val().toUpperCase();//Age Based on 
								 var ageIncStart= isEmpty($tblRetplgRow.find("td:eq(5)").find('input:eq(0)').val())?Number("0"):Number($tblRetplgRow.find("td:eq(5)").find('input:eq(0)').val());
								 var ageIncEnd	= isEmpty($tblRetplgRow.find("td:eq(6)").find('input:eq(0)').val())?Number("0"):Number($tblRetplgRow.find("td:eq(6)").find('input:eq(0)').val());
							
								 var $tblSRSRowR = null; 
									if(rowexist == null){
										getcshSRSRows(null);
										$tblSRSRowR =  $("#srsTable tbody tr:last"); 
									}else{
										
										if(rowexist.css('display') == 'none'){
											rowexist.css("display","");
										}
										if(rowexist.find("td:first").find("input:first").val() == 'D'){
											rowexist.find("td:first").find("input:first").val("I");
										}
										
										$tblSRSRowR = rowexist;
									}
								
									$tblSRSRowR.find("td:eq(0)").find('input:eq(2)').addClass("rowrefid").val($rowref);
									
//									var pkid = $tblRetplgRow.find("td:eq(0)").find('input:eq(1)').val();
									
								//	if(!isEmpty(pkid)){ 
									if(isEmpty($tblSRSRowR.find("td:eq(0)").find('input:eq(1)').val())){
										$tblSRSRowR.find("td:eq(0)").find('input:eq(1)').val(makeid(17));
									}
								//	}
									
							
								 var retamount=0;
								 var prevamount = amtOfInc;
								 for(var dt = ageIncStart;dt<=ageIncEnd && dt<=intretslfage;dt++){
									 var rate = (intrate /100);
									 var nper = Number(intretslfage) - dt;
									 var pmt =0;
//									 var pv = -1 * amtOfInc;
									 if(escRate > 0 && dt >ageIncStart){
//										 prevamount = amtOfInc;
										 prevamount =   ((prevamount * (escRate /100)) + prevamount);
									 }
									 var pv = -1 * prevamount;
									 var type=1;
									 console.log(rate+","+nper+","+pmt+","+pv+","+type);
									 var z=FVCalculation(rate, nper, pmt, pv, type);
									 console.log("z------------------>"+z)
									 retamount += z;
								 }
								 console.log("retamount----------->"+retamount);
								 
								 retamount = Math.round(retamount);
								  
								  var retagediff = Number(intretslfage) - Number(selfage);
								  
								  var perdfrom =  addyearsToDate(ResultNewDate, retagediff);
								  
								  $tblSRSRowR.find("td:eq(2)").find('select:eq(0)').val("Annual Addition"); //Classification  
									 
									$tblSRSRowR.find("td:eq(3)").find('input:eq(0)').val("Life Insurance/Retirement"); 
								
									$tblSRSRowR.find("td:eq(4)").find('select:eq(0)').val("SINGLE"); 
								
									$tblSRSRowR.find("td:eq(5)").find('input:eq(0)').val(roundNumber( retamount )); 
							   
									$tblSRSRowR.find("td:eq(6)").find('input:eq(0)').val(perdfrom);//Period From
							   
									$tblSRSRowR.find("td:eq(7)").find('input:eq(0)').val(perdfrom);
								 
								  
								
								 
								
								
								if(ageIncEnd > intretslfage){
									
									 if(escRate == 0 ){
										 
										 
										 	var rowexistA65 = chkSRSRowExist(afterret);
										 	
										 	var $tblAfterRETRow=null;
										 	
										 	console.log(afterret+"-------->"+rowexistA65);
											
											if(rowexistA65 == null){
												getcshSRSRows(null);
												$tblAfterRETRow =  $("#srsTable tbody tr:last"); 
											}else{
												$tblAfterRETRow = rowexistA65;
											}
											
											console.log("$tblAfterRETRow------->"+$tblAfterRETRow)
											
											$tblAfterRETRow.find("td:eq(0)").find('input:eq(2)').addClass("rowrefid").val(afterret);
											
//											var pkid = $tblRetplgRow.find("td:eq(0)").find('input:eq(1)').val();
											
//											if(!isEmpty(pkid)){
												if(isEmpty($tblAfterRETRow.find("td:eq(0)").find('input:eq(1)').val())){
													$tblAfterRETRow.find("td:eq(0)").find('input:eq(1)').val(makeid(17));
												}
												
//											}
												
												$tblAfterRETRow.find("td:eq(2)").find('select:eq(0)').val("Annual Addition"); //Classification  
												 
												$tblAfterRETRow.find("td:eq(3)").find('input:eq(0)').val("Life Insurance/Retirement"); 
											
												$tblAfterRETRow.find("td:eq(4)").find('select:eq(0)').val("SINGLE"); 
											
												$tblAfterRETRow.find("td:eq(5)").find('input:eq(0)').val(roundNumber( amtOfInc )); 
												
												 var retagediff = (Number(intretslfage)+1) - Number(selfage);
												 var perdfrom =  addyearsToDate(ResultNewDate, retagediff);
												 
												 var diffto = Number(ageIncEnd) - Number(selfage) ;
												 var perdTo =  addyearsToDate(ResultNewDate, diffto);
										   
												 $tblAfterRETRow.find("td:eq(6)").find('input:eq(0)').val(perdfrom);//Period From
										   
												 $tblAfterRETRow.find("td:eq(7)").find('input:eq(0)').val(perdTo);
												
//										 
										 
									 }else{
										 
										 
//										 for(var dt = intretslfage+1;dt<=ageIncEnd ;dt++){
											 
											 var $tblAfterRETRow=null;
											 var dt = Number(intretslfage) + 1;
							
											 var rate = (intrate /100);
											 var nper = Number(intretslfage) - dt;
											 var pmt =0;
											 prevamount =  ((prevamount * (escRate /100)) + prevamount);
											 
											 
											 var pv = -1 * prevamount;
											 
											 var type=1;
											 
											 
											 console.log(rate +","+nper+","+pmt+","+pv+","+type);
											 var z=FVCalculation(rate, nper, pmt, pv, type);
											 console.log("z------------------>"+z);
											 
											 afterret = $rowref+"_A"+dt;
											 var rowexistA65 = chkSRSRowExist(afterret);
												
												if(rowexistA65 == null){
													getcshSRSRows(null,"N");
													$tblAfterRETRow =  $("#srsTable tbody tr:last"); 
												}else{
													$tblAfterRETRow = rowexistA65;
												}
												$tblAfterRETRow.find("td:eq(0)").find('input:eq(2)').addClass("rowrefid").val($rowref);
												
//												if(!isEmpty(pkid)){
													if(isEmpty($tblAfterRETRow.find("td:eq(0)").find('input:eq(1)').val())){
														$tblAfterRETRow.find("td:eq(0)").find('input:eq(1)').val(makeid(17));
													}
//												}
												
													 
													$tblAfterRETRow.find("td:eq(2)").find('select:eq(0)').val("Annual Addition"); //Classification  
													 
													$tblAfterRETRow.find("td:eq(3)").find('input:eq(0)').val("Life Insurance/Retirement"); 
												
													$tblAfterRETRow.find("td:eq(4)").find('select:eq(0)').val("ANNUAL"); 
												
													$tblAfterRETRow.find("td:eq(5)").find('input:eq(0)').val(roundNumber( roundNumber(z) )); 
													
//													 var retagediff = (Number(intretslfage)+1) - Number(selfage);
//													 var perdfrom =  addyearsToDate(ResultNewDate, retagediff);
													 var perdfrom =  addyearsToDate(ResultNewDate, dt);
													 
//													 var diffto = Number(ageIncEnd) - Number(selfage) ;
//													 var perdTo =  addyearsToDate(ResultNewDate, diffto);
											   
													 $tblAfterRETRow.find("td:eq(6)").find('input:eq(0)').val(perdfrom);//Period From
													 
													 
													 var diffto = Number(ageIncEnd) - Number(selfage) ;
													 var perdTo =  addyearsToDate(ResultNewDate, diffto);
													
											   
													 $tblAfterRETRow.find("td:eq(7)").find('input:eq(0)').val(perdTo);
													 
													
											 
										 
//										 }
											
									 }
								}
							
							 
						}
						
					}else if ($mode == "D"){
						deleteRetMultiByRefId($rowref);
					}
					
				
				}
				
				
				
				
				
				
				
			});
		 
			
		 

	  
	
	//	applyEventHandlers();
		
		
		reOrderVisibleRows("IncAssRetPlgtbl");
//	}
	return true;
}
/********end********/



/*Life To Retirement - Multion NO*/
function addCashValueToRet(multiDis,cashvalue,refId,paymtd,descpt,cashvalretage,calPrcnt,planpkid,indexTD,popupsflag){  
	
	
	var owner	= $("#lipOwner").val().toUpperCase();   
	var basedon = $("#lipOwner").val().toUpperCase();//Age Based on
	
//	var refId	= $("#lipRetRefId").val(); 
	var covRef = $("#covRef").val();
//	var paymtd  = $("#covPayMtd").text();
	var syncRef = $("#syncRef").val();
	var tdpos = $("#tdindex").val();
	
	var savingdeprate = $("#caSavingDeprate").val();
	 

	var intretslfage=isEmpty($("#retSelfAge").val())? 0 :Number($("#retSelfAge").val()); 
	var intretspsage=isEmpty($("#retSpsAge").val())? 0 :Number($("#retSpsAge").val());
	
	intretslfage = (owner == "SELF") ? intretslfage : ((owner == "SPOUSE") ? intretspsage : intretslfage);
	
	if( multiDis != "N"){
		
//		var rowexist = chkRPIncAssetRowExist(refId);
//		
//		var $tblRetRow = null; 
//		if(rowexist != null){
//			$tblRetRow = rowexist;
//			$tblRetRow.hide();
//			$tblRetRow.find("td:first").find('input:eq(0)').val(DEL_MODE);			
//		} 
		
//		deleteRetPlanByRefId(planpkid);
//		deleteRetPlanByRefId(refId);
		
		if(multiDis == "Y"){
			
//			var rowexistmul = chkRPIncAssetRowExist(planpkid);
//			if(rowexistmul != null){
//				$tblRetRow = rowexistmul;
//				if($tblRetRow.css("display") == "none"){
//					$tblRetRow.css("display","");
//				}
//				if($tblRetRow.find("input:first").val() == 'D'){
//					$tblRetRow.find("input:first").val("I") ;
//				}
//			}			
		}
		
		if(isEmpty(multiDis)){
//			var rowexistmul = chkRPIncAssetRowExist(planpkid);
//			if(rowexistmul != null){
//				$tblRetRow = rowexistmul;
//				$tblRetRow.hide();
//				$tblRetRow.find("input:first").val("D") ;
//				
//			}
		
//			deleteRetPlanByRefId(planpkid);
				
		}
		
		
	}
	
	if(multiDis == "Y"){
		
//		var retrefid = syncRef+"_R";
//		
//		deleteRetMultiByRefId(refId);	
//		deleteAllSRSByRefId(retrefid);
//		deleteAllCPFByRefId(retrefid);
		
//		console.log(tdpos +"="+indexTD+","+refId+","+retrefid)
		
		var currElm = $("#plancoveragetbl tbody tr:eq(0)").find("td:eq("+tdpos+")").find("input");
		newlifeRetPlan(currElm);
		
	}
	
		
	if(!isEmpty(cashvalue) && multiDis == "N"){ //&& (cashvalue=="N")
		
//		deleteRetMultiByRefId(covRef);
//		deleteRetPlanMultiByRefId(covRef);
		 
		if( (owner == "SELF") && isCashRelated(paymtd) ){ 
			
			var amountofincome = 0;
			
//			 var descpt=$("#covPlanName").text();//Description
			 var cls="Life Insurance";//Classification
			
			 cashvalretage =  isEmpty(cashvalretage)?Number(intretslfage):Number(cashvalretage);
			 calPrcnt = isEmpty(calPrcnt)?Number(1):Number(calPrcnt)/100; 
			 savingdeprate = isEmpty(savingdeprate)?0:Number(savingdeprate);

			 var agediff = intretslfage-cashvalretage;
			 
			 cashvalue = Number(cashvalue);
			
			 if(cashvalretage < intretslfage){
			
				 amountofincome  = FVCalculation(savingdeprate/100, agediff,0, -1*cashvalue,  1);
				 amountofincome = Math.round(amountofincome * calPrcnt);
			}else{
				amountofincome = Math.round(cashvalue * calPrcnt);
			}

			 var rowexist = chkRPIncAssetRowExist(refId);

			 var $tblRetRow = null; 
			
			 if(rowexist == null){
			
				 getincassrtRows(null,"N");
				
				 $tblRetRow =  $("#IncAssRetPlgtbl tbody tr:last"); 
				
			 }else{
			
				 if(rowexist.css("display") == "none"){
				
					 rowexist.css("display","");
					
				 }
				
				 if(rowexist.find("td:first").find('input:eq(0)').val() == "D"){
				
					 rowexist.find("td:first").find('input:eq(0)').val("I");
					
				 }
				
				 $tblRetRow = rowexist;
				
			 }
 
			 $tblRetRow.find("td:eq(0)").find("input:eq(2)").addClass("rowrefid").val(refId);
//			 $("#lipRetRefId").val(rowRefID);

			 if(isEmpty($tblRetRow.find("td:eq(0)").find('input:eq(1)').val())){
				 $tblRetRow.find("td:eq(0)").find('input:eq(1)').val(makeid(17));
			 }

			 $tblRetRow.find("td:eq(2)").find('input:eq(0)').val(cls);

			 $tblRetRow.find("td:eq(2)").find('input:eq(1)').val("DISIMBURSEMENT");

			 $tblRetRow.find("td:eq(3)").find('input:eq(0)').val(descpt);			

			 $tblRetRow.find("td:eq(4)").find('select:eq(0)').val("SINGLE"); 		 	

			 $tblRetRow.find("td:eq(5)").find('input:eq(0)').val(amountofincome);

			 $tblRetRow.find("td:eq(6)").find('input:eq(0)').val("").attr("readonly",true);			

			 $tblRetRow.find("td:eq(7)").find('input:eq(0)').val(Number("0"));  			

			 $tblRetRow.find("td:eq(8)").find('select:eq(0)').val(basedon);//Need to check  

			 $tblRetRow.find("td:eq(9)").find('input:eq(0)').val(intretslfage);

			 $tblRetRow.find("td:eq(10)").find('input:eq(0)').val("").attr("readonly",true);

			 reOrderVisibleRows("IncAssRetPlgtbl");  

			 applyEventHandlers();

			 applyToastrAlert("Life Insurance data will be reflected to Income and assets available for Retirement Section in Retirement Planning Screen !");
					  
		}else if( (owner == "SELF") && isSRSRelated(paymtd) ){
			var amountofincome = 0;
//			newlifesyncSRS(curElm)
//			alert("SRS Payment with Retirement Plan Syn to Retirement or SRS table??");
			
			var retrefid = syncRef+"_R";
			var rowexist = chkSRSRowExist(retrefid);
			
			var $tblSRSRowR = null; 
			if(rowexist == null){
				getcshSRSRows(null);
				$tblSRSRowR =  $("#srsTable tbody tr:last"); 
			}else{
				
				if(rowexist.css('display') == 'none'){
					rowexist.css("display","");
				}
				if(rowexist.find("td:first").find("input:first").val() == 'D'){
					rowexist.find("td:first").find("input:first").val("I");
				}
				
				$tblSRSRowR = rowexist;
			}
			
			var selfage = $("#dfSelfAge").val();
			
			 cashvalretage =  isEmpty(cashvalretage)?Number(intretslfage):Number(cashvalretage);
			 calPrcnt = isEmpty(calPrcnt)?Number(1):Number(calPrcnt)/100; 
			 savingdeprate = isEmpty(savingdeprate)?0:Number(savingdeprate);

			 var agediff = intretslfage-cashvalretage;
			 
			 var retagediff = Number(cashvalretage) - Number(selfage);
			var perdfrom =  addyearsToDate(ResultNewDate, retagediff);
			 
			 cashvalue = Number(cashvalue);
			
			 if(cashvalretage < intretslfage){
			
				 amountofincome  = FVCalculation(savingdeprate/100, agediff,0, -1*cashvalue,  1);
				 amountofincome = Math.round(amountofincome );//* calPrcnt
			}else{
				amountofincome = Math.round(cashvalue );//* calPrcnt
			}

			
			$tblSRSRowR.find("td:eq(0)").find('input:eq(2)').addClass("rowrefid").val(retrefid);
			
//			var pkid = $planRow.find("tr:eq(0)").find("td:eq("+tdpos+")").find('input:eq(13)').val();
			
//			if(!isEmpty(pkid)){
				if(isEmpty($tblSRSRowR.find("td:eq(0)").find('input:eq(1)').val())){
					$tblSRSRowR.find("td:eq(0)").find('input:eq(1)').val(makeid(17));
				}
					
//			}
			
				$tblSRSRowR.find("td:eq(2)").find('select:eq(0)').val("Annual Addition"); //Classification  
			 
				$tblSRSRowR.find("td:eq(3)").find('input:eq(0)').val("Life Insurance/Retirement"); 
			
				$tblSRSRowR.find("td:eq(4)").find('select:eq(0)').val("SINGLE"); 
			
				$tblSRSRowR.find("td:eq(5)").find('input:eq(0)').val(roundNumber( amountofincome )); 
		   
				$tblSRSRowR.find("td:eq(6)").find('input:eq(0)').val(perdfrom);//Period From
		   
				$tblSRSRowR.find("td:eq(7)").find('input:eq(0)').val(perdfrom);
			
				if(popupsflag){
					mandatoryFldForSRS($tblSRSRowR,null,'LIFE');	
				}
				
			
		}else if( (owner == "SELF") && isCPFRelated(paymtd) ){
			
			var ownership=$("#lipOwner").val(); //Ownership
			var policyNo = $("#lipPolicyno").val();
			var selfAge = $("#dfSelfAge").val();
			var planname = $("#covPlanName").text();
			var amountofincome = 0;
			
			 var agediff = intretslfage-cashvalretage;
			 var retagediff = Number(cashvalretage) - Number(selfAge);
			var perdfrom =  addyearsToDate(ResultNewDate, retagediff);
			
			var retrefid = syncRef+"_R";
			
			var rowexist = chkCPFRowExist(retrefid);
			
			var $tblCpfRowR = null; 
			if(rowexist == null){
				getCADRows(null);
				$tblCpfRowR =  $("#cpfAccAddDedTable tbody tr:last"); 
			}else{
				if(rowexist.css('display') == 'none'){
					rowexist.css("display","");
				}
				if(rowexist.find("td:first").find("input:first").val() == 'D'){
					rowexist.find("td:first").find("input:first").val("I");
				}
				$tblCpfRowR = rowexist;
			}
			
			$tblCpfRowR.find("td:eq(0)").find('input:eq(2)').addClass("rowrefid").val(retrefid);
			
			
				if(isEmpty($tblCpfRowR.find("td:eq(0)").find('input:eq(1)').val())){
					$tblCpfRowR.find("td:eq(0)").find('input:eq(1)').val(makeid(17));
				}
					
				var cprarr = getCPFAccDets(paymtd);
				var cpfacc=cprarr[0],ccid=cprarr[1];
				
				cashvalue = Number(cashvalue);
				
				 if(cashvalretage < intretslfage){
				
					 amountofincome  = FVCalculation(savingdeprate/100, agediff,0, -1*cashvalue,  1);
					 amountofincome = Math.round(amountofincome );//* calPrcnt
				}else{
					amountofincome = Math.round(cashvalue );//* calPrcnt
				}
				
				if(ownership == "Self"){
					$tblCpfRowR.find("td:eq(2)").find('option:eq(1)').prop("selected","selected");
				 }else  if(ownership == "Spouse"){
					 $tblCpfRowR.find("td:eq(2)").find('option:eq(2)').prop("selected","selected");
				 }else{
					 $tblCpfRowR.find("td:eq(2)").find('option:eq(0)').prop("selected","selected");
				 } 
				 
				  
				 selectNullvalChk($tblCpfRowR.find("td:eq(3)"),ownership);   
				 selectNullvalChk($tblCpfRowR.find("td:eq(4)"),"Life Insurance");  
				 $tblCpfRowR.find("td:eq(4)").find('input:eq(0)').val(planname);  
				 $tblCpfRowR.find("td:eq(4)").find('input:eq(1)').val(policyNo);  
				 
				 $tblCpfRowR.find("td:eq(4)").find('div[id="spanplanname"]').text(isEmpty(planname) ? "": "Plan Name : "+planname);  
				 $tblCpfRowR.find("td:eq(4)").find('div[id="spanpolno"]').text(isEmpty(policyNo) ? "": "Policy No : "+policyNo);  
				 
				 selectNullvalChk($tblCpfRowR.find("td:eq(5)"),"Addition"); 
					
				 $tblCpfRowR.find("td:eq(6)").find('input:eq(0)').val(ccid);  
				 selectNullvalChk($tblCpfRowR.find("td:eq(6)"),ccid); 
				 
				 $tblCpfRowR.find("td:eq(7)").find('input:eq(0)').val(perdfrom);
				 $tblCpfRowR.find("td:eq(7)").find('input:eq(1)').val(cashvalretage);
				 
//				 var toage = getYears(perdfrom, dateTopay);
				 $tblCpfRowR.find("td:eq(8)").find('input:eq(0)').val(perdfrom);
				 $tblCpfRowR.find("td:eq(8)").find('input:eq(1)').val(cashvalretage );
			 
				
				 
				 frequency ="-1";//Always CPF Set to Annual because the amount is converted to Annual.
				 
				 $tblCpfRowR.find("td:eq(9)").find('input:eq(0)').val(roundNumber( amountofincome )); 
				 selectNullvalChk($tblCpfRowR.find("td:eq(10)"),frequency); 
				  
		
				 applyEventHandlers();
				 if(popupsflag){
					 applyToastrAlert("Life Insurance data will be reflected to CPF Account - Additions & Deductions of funds into CPF A/C in Central Provident Fund Screen");
				 
					 mandatoryFldForCpf($tblCpfRowR,null,'LIFE');
				 }
			
			
			
		}
	}
	
	
	
	
	reOrderVisibleRows("IncAssRetPlgtbl");  
	return true;
}



function setMainRPPlanTbltoLifeRP($lastCol){ 
	
	var $lastRow 	= $("#cvplnleftpaneltbl tbody tr:eq(0)");
	var yrtoret  	= $lastRow.find("td:eq("+$lastCol+")").find('input:eq(3)').val();
	var slfretage 	= $lastRow.find("td:eq("+$lastCol+")").find('input:eq(4)').val();
	var spsretage  	= $lastRow.find("td:eq("+$lastCol+")").find('input:eq(5)').val();
	var multionret  = $lastRow.find("td:eq("+$lastCol+")").find('input:eq(6)').val();
	var cashvalonret= $lastRow.find("td:eq("+$lastCol+")").find('input:eq(7)').val();
	var intrate  	= $lastRow.find("td:eq("+$lastCol+")").find('input:eq(8)').val();
	var prctused  	= $lastRow.find("td:eq("+$lastCol+")").find('input:eq(9)').val();
	var cashretage  = $lastRow.find("td:eq("+$lastCol+")").find('input:eq(10)').val(); 
//	var cashrefid  	= $lastRow.find("td:eq("+$lastCol+")").find('input:eq(11)').val(); 
	var planpkid  	= $lastRow.find("td:eq("+$lastCol+")").find('input:eq(18)').val();
	var cashrefid  	= $lastRow.find("td:eq("+$lastCol+")").find('input:eq(18)').val();
//	console.log("plan sync id------->"+cashrefid+",planpkid-->"+planpkid)
	
	
	$("#lfretYrstoret").val(isEmpty(yrtoret)?$("#retYrstoret").val():yrtoret); 
	$("#retSelfretage").val(isEmpty(slfretage)?$("#retSelfCoordinateage").val():slfretage); 
	$("#retSpouseretage").val(isEmpty(spsretage)?$("#retSpsCoordinateage").val():spsretage);  
	$("#retMultionret").val(isEmpty(multionret)?"":multionret); 
	$("#retCashvalonret").val(isEmpty(cashvalonret)?"":cashvalonret); 
	$("#retIntrateused").val(isEmpty(intrate)?$("#caSavingDeprate").val():intrate);  
	$("#retPrcnttoused").val(isEmpty(prctused)?"":prctused); 
	$("#cashvalRetAge").val(isEmpty(cashretage)?"":cashretage);
	$("#lipRetRefId").val(cashrefid);
	enableRetCashValOnRet($("#retMultionret"),$("#retCashvalonret"),false,$("#lipRetRefId").val(),planpkid); 
	RetPlgcalculateRow();  
	
}

function setMainEditRPPlanTbltoLifeRP(){
	
	var bpRef		=	$("#covRef").val();  
	
	var bpcount = $("#cvplnleftpaneltbl tbody tr:eq(0) td").length;
	if(bpcount > 0){ 
		 $("#cvplnleftpaneltbl tbody tr:eq(0) td").each(function(){ 
			 var ref=$(this).find("input[name=txtFldliplnId]").val();
			 if(ref == bpRef){
				 var indx=$(this).index();
				 $("#cvplnleftpaneltbl tbody tr:eq(0)").find("td:eq("+indx+")").find('input:eq(11)').val("");
				 $("#cvplnleftpaneltbl tbody tr:eq(0)").find("td:eq("+indx+")").find('input:eq(3)').val($("#lfretYrstoret").val()); 
				 $("#cvplnleftpaneltbl tbody tr:eq(0)").find("td:eq("+indx+")").find('input:eq(4)').val($("#retSelfretage").val()); 
				 $("#cvplnleftpaneltbl tbody tr:eq(0)").find("td:eq("+indx+")").find('input:eq(5)').val($("#retSpouseretage").val());  
				 $("#cvplnleftpaneltbl tbody tr:eq(0)").find("td:eq("+indx+")").find('input:eq(6)').val($("#retMultionret").val()); 
				 $("#cvplnleftpaneltbl tbody tr:eq(0)").find("td:eq("+indx+")").find('input:eq(7)').val($("#retCashvalonret").val()); 
				 $("#cvplnleftpaneltbl tbody tr:eq(0)").find("td:eq("+indx+")").find('input:eq(8)').val($("#retIntrateused").val());  
				 $("#cvplnleftpaneltbl tbody tr:eq(0)").find("td:eq("+indx+")").find('input:eq(9)').val($("#retPrcnttoused").val()); 
				 $("#cvplnleftpaneltbl tbody tr:eq(0)").find("td:eq("+indx+")").find('input:eq(10)').val($("#cashvalRetAge").val());
//				 $("#cvplnleftpaneltbl tbody tr:eq(0)").find("td:eq("+indx+")").find('input:eq(11)').val($("#lipRetRefId").val()); 
					
			 }
		 });  
	} 
	
	
}


function enableRetCashValOnRet(sel,elmid,flg,cashrefId,planpkid){ 
	
//	console.log("inside enableRetCashValOnRet"+planpkid+",cashrefId->"+cashrefId);
	
//	elmid - cash value element 
//	flg->Sets while onchange "true" otherwise false
	 
	var msg=false;
	var retval=false;
	var selvalue = sel.val();//retmultiflg element
//	var cashrefId=$("#lipRetRefId").val();
	
	if(selvalue == 'N'){
		
		elmid.attr("readonly",false);
		elmid.attr("disabled",false);
		elmid.removeClass("readOlyCursor");
		
		$("#divRetirementPlgtbl").hide();
		
		if(flg){
//			showAlert(CASH_VAL_RET,elmid);
			if(!(validateFocusDhtmlFlds(elmid, CASH_VAL_RET,""))) {return valid=false;};

		}
		retval=true;
		
		
		$("#liRetirementPlgtbl tbody").find("tr:visible").find("td:eq(0)").find("input:eq(2)").each(function(){
			
			var retrowId = $(this).closest("tr");
			var planname = $(this).closest("tr").find("td:eq(2)").find('input:eq(0)').val();
			var refId=$(this).val();
			
			deleteRetPlanByRefId(refId);
		});
	
		 	
	}else if(selvalue == 'Y'){
		 retval=false; 
		 
		 
		 liRetirementPlgtbl.columns.adjust().draw(false);
		 
		 elmid.val("");
		 elmid.attr("readonly",true);
		 elmid.attr("disabled",true);
		 elmid.addClass("readOlyCursor"); 
		 
		 $("#divRetirementPlgtbl").show();

		
	 }else{
		 retval=false;
		 elmid.val("");
		 elmid.attr("readonly",true);
		 elmid.attr("disabled",true);
		 elmid.addClass("readOlyCursor");
		 
		 $("#divRetirementPlgtbl").hide();
	 }
	
	
}


$(".cashflowst").on("change",function(){
	calcTotSAPremPlandetails();
});



function ilifeInsPremium(opts){ 
 
var client_NRIC = $("#dfSelfNric").val();
var client_AdvId = $("#advstfId").val();
var fpmsCustId = $("[name=custId]").val();
var fnaId = $("#fnaId").val();

var strPremAmtSelf=0,strPremAmtSpouse=0,strPremAmtFamily=0;


$.ajax({
	method : "GET",
	url:servletName,
	async:false,
	data:{
		"DBCALLFOR":"FNA_LIFE_PREMAMT",
		"strClientNRIC":client_NRIC,
		"strClientAdvId":client_AdvId,
		"strCustId":fpmsCustId,
		"strFNAId":fnaId
	},
	success: function(result){
		
		var jsnRslt=JSON.parse(result); 
		$.each(jsnRslt,function(i,obj){
			if(obj.SESSION_EXPIRY=='SESSION_EXPIRY'){
				window.location = BASE_URL + SESSION_EXP_JSP;

				hideLoader();
				return;
			}

			if (obj.SESSION_EXPIRY=="DB_ERROR") {
				window.location = BASE_URL + DB_EXP_JSP;

				hideLoader();
				return;
			}
			
			$.each(obj,function(i,val){
//				console.log("i==>"+i+"val===>"+val)
				if(i=="CLNT_LIFEPREM_AMT"){
					$.each(val, function(contkey, contvalue) { 
						var appName = contvalue["jsonApplnName"];
						var lifeId 	= contvalue["jsonLifeId"];
						var owner 	= contvalue["jsonLifeOwner"];
						var planName= contvalue["jsonLifePlanName"];
						var incDate = contvalue["jsonLifeIncDate"];
						var payMode = contvalue["jsonLifePayMode"]; 
						var paymtd 	= contvalue["jsonLifePayMtd"]; 
						var premAmt = Number(contvalue["jsonLifePremAmt"]);   
						var polDate = contvalue["jsonLifePolDate"];
//						var planterm = contvalue["jsonLifePlanTerm"];
//						var planuniqid = contvalue["jsonLifePlanId"];
//						var planstatus = contvalue["jsonLifePlanStatus"];
						
						 
						if(isCPFRelated(paymtd) || isSRSRelated(paymtd)){ 
						if(appName == "FPMSNL"){ 
					 		  if(opts == "FETCH"){
					 		 	 syncFPMSCpf(contvalue,lifeId);
					 		 }
					 	 }
						}
						 
						 if(isCashRelated(paymtd)){
	 
							 if(!isEmpty(premAmt) && isValidObject(premAmt)){ 
								 var TopUpAmt=getFrequencyDigit(payMode, 0);
						 		
						 		
						 		 var stillNeedTopay=false;
						 		 var sumamt			= 0;
						 		 	 sumamt=premAmt*TopUpAmt;    
						 		 stillNeedTopay 	= validateDateComparision(polDate,ResultNewDate,">="); 
						 		
						 		 	 
						 		 	 
						 		 //check for loaded policy	 
						 		 	 var updPremCal = "";
						 		 	 if(appName == "FIPA"){
						 		 		updPremCal = $("input[name=lipId]").val();
						 		 	 }
						 		 	 
						 		 	 if(appName == "FPMSNL"){
						 		 		updPremCal = $("input[name=lipAppId]").val(); 
						 		 	 }
						 		 	 
//						 		 	 console.log("owner--->"+owner+",stillNeedTopay--->"+stillNeedTopay + ",sumamt---->"+sumamt)
						 if(stillNeedTopay){
							 if(lifeId != $("input[name=lipId]").val()){ //For FIPA Applications
								 if(owner == "Self"){
										strPremAmtSelf +=Number(sumamt);
									}
									if(owner == "Spouse"){
										strPremAmtSpouse +=Number(sumamt);
									}
									if(owner == "Parents" || owner == "Joint"){
										strPremAmtFamily +=Number(sumamt);
									} 
							 }
							 
//							 calcTotalPlandetails(opts,strPremAmtSelf,strPremAmtSpouse,strPremAmtFamily);
							 
						  }
						}
						 }
					}); 
				}
				
			});
			
			
		});
		
	}
});  

calcTotalPlandetails(opts,strPremAmtSelf,strPremAmtSpouse,strPremAmtFamily);

//calcTotalPlandetails(opts,tempSelfIns,tempSpsIns,tempFamIns);
} 
function calcTotalPlandetails(opts,sumSlf,sumSps,sumFam){ 
		 	 var sumOfSA=0; 
			 var totsumassure=0,totpremium=0; 
			 var ownship=$("#lipOwner").val();
 
			 
			 
			  var ind=[];
			 $("#cvplnleftpaneltbl tbody tr:eq(0) td").each(function(){ 
			 		 ind.push($(this).index()); 
			 }); 	
			 
			 
//			 if(ind.length >0){
//			 $.each(ind, function( index, value ) { 
				 $("#cvplnleftpaneltbl tbody tr:eq(0) td").each( function( index, value ) { 
					
				 
				 var cashvalretage = Number($("#cvplnleftpaneltbl tbody tr:eq(0)").find("td:eq("+index+")").find("input:eq(10)").val());
				 var calPrcnt =Number($("#cvplnleftpaneltbl tbody tr:eq(0)").find("td:eq("+index+")").find("input:eq(9)").val());
				 var mode		= $("#cvplnleftpaneltbl tbody tr:eq(0)").find("td:eq("+index+")").find("div.hiddens").find("input:eq(12)").val(); 
					var syncRefId		= $("#cvplnleftpaneltbl tbody tr:eq(0)").find("td:eq("+index+")").find("div.hiddens").find("input:eq(18)").val();
					var multiDis = $("#cvplnleftpaneltbl tbody tr:eq(0)").find("td:eq("+index+")").find("div.hiddens").find("input:eq(6)").val()
					
				 var planName			=$("#cvplnleftpaneltbl tbody tr:eq(1)").find("td:eq("+index+")").find("input:eq(0)").val();  
				 var coverages			=$("#cvplnleftpaneltbl tbody tr:eq(2)").find("td:eq("+index+")").find("input[name=hselCoverages]").val(); 
				 var sumassuredamt		=Number($("#cvplnleftpaneltbl tbody tr:eq(3)").find("td:eq("+index+")").find("input:eq(0)").val());
					var planpremiumamt		=Number($("#cvplnleftpaneltbl tbody tr:eq(4)").find("td:eq("+index+")").find("input:eq(0)").val()); 
					var incdate			=$("#cvplnleftpaneltbl tbody tr:eq(5)").find("td:eq("+index+")").find("input:eq(0)").val();
					 var premTerm			=$("#cvplnleftpaneltbl tbody tr:eq(6)").find("td:eq("+index+")").find("input:eq(1)").val();
					 
					 var paymode			=$("#cvplnleftpaneltbl tbody tr:eq(8)").find("td:eq("+index+")").find("select:eq(0)").val(); 
					 var paymtd				=$("#cvplnleftpaneltbl tbody tr:eq(9)").find("td:eq("+index+")").find("select:eq(0)").val();  
					 
					 
					  
					
					
					 
//					 console.log(paymtd + "-->"+mode +",coverages-->"+coverages);
					 
					 if(mode != "D"){
						 
						 var planpkid = $("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:eq("+index+")").find("input:eq(13)").val();//Reference id
						 var planrefid = $("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:eq("+index+")").find("input:eq(18)").val();//Reference id
						 var $rowref = planrefid; 
						 var cashvalueonRetVal		= $("#cvplnleftpaneltbl tbody tr:eq(0)").find("td:eq("+index+")").find("div.hiddens").find("input:eq(7)").val();
						 
						 /**/
						 if(!isEmpty(coverages)){
							 if(coverages.indexOf("RP") != -1){
								 console.log("index------->"+index)
								 addCashValueToRet(multiDis,cashvalueonRetVal,syncRefId,paymtd,planName,cashvalretage,calPrcnt,planpkid,index,false);
							 }
							 
							 if(coverages.indexOf("RP") == -1){
								 
								 deleteRetPlanByRefId($rowref);
									
									
							 }
						 }
						 /**/
						 
						 if(isCashRelated(paymtd)){
								 
								 var planrefid = $("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:eq("+index+")").find("input:eq(18)").val();//Reference id
								 var $rowref = planrefid; 
								 
								 deleteCPFByRefId($rowref);
								 
								 deleteSRSByRefId($rowref);				 
								
				
								 var TopUpAmt=getFrequencyDigit(paymode, 0);
							 		
							 		
//							 		 console.log(TopUpAmt+","+planpremiumamt+","+premTerm+","+incdate);
								 
								 var sumamt	=	planpremiumamt*TopUpAmt;
								 totpremium +=Number(sumamt); 
								 
								 
								 var dateTopay ="",stillNeedTopay=false;
								 if(!isEmpty(premTerm) && !isEmpty(incdate)){
									 if(premTerm.toUpperCase() != "WHOLE LIFE"){
										  dateTopay			= addyearsToDate(incdate,premTerm);
//										  console.log(dateTopay);
										  stillNeedTopay 	= validateDateComparision(dateTopay,ResultNewDate,">=");  
									 }else if(premTerm.toUpperCase() == "WHOLE LIFE"){
										 stillNeedTopay		= true;
									 }
								 }
							 
							   
//							  console.log(stillNeedTopay +",----------->"+paymode+",-------->"+ownship)
								 
								 if(paymode == 'SINGLE'){
									 dateTopay			= addyearsToDate(incdate,1);
										stillNeedTopay 	= validateDateComparision(dateTopay,ResultNewDate,">=");
//							 			stillNeedTopay 	= validateDateComparision(incdate,ResultNewDate,">=");
							 		 }
							  
								if(stillNeedTopay){
									 if((!isEmpty(sumamt)) && ownship == "Self"){
										 sumSlf +=Number(sumamt); 
										 
									 }
									 if((!isEmpty(sumamt)) && ownship == "Spouse"){
										 sumSps +=Number(sumamt); 
									 } 
									 if((!isEmpty(sumamt)) && ownship == "Joint"){
										 sumFam +=Number(sumamt); 
									 }   
									 if((!isEmpty(sumassuredamt))){
										 totsumassure +=Number(sumassuredamt); 
									 }   
										} 
								
									 }
									 
									 if((!isEmpty(sumassuredamt))){
										 sumOfSA +=Number(sumassuredamt); 
									 } 
						 
					 }
				 
				 
				
				});     
			 
//			 }
			 if(opts != "FETCH"){
				 if(!(sumSlf == 0 && sumSps == 0 && sumFam == 0)){
					 if(checkRiderValidWithoutMsg()){
						 applyToastrAlert("Life Insurance Premium is flow back to Cash Flow Statements");	 
					 }
					 
		 		 } 
             }
			 
		     
		     if(opts == "FETCH"){
		    		var tempSelfIns =Number($("#expdSelfInsurance").val());
		    		var tempSpsIns =Number($("#expdSpsInsurance").val());
		    		var tempFamIns =Number($("#expdFamilyInsurance").val()); 
		    		
		    	 $("#expdSelfInsurance").val(roundNumber(sumSlf)); 
				 /*$("#expdSelfInsurance").attr("data-attr",tempSelfIns).attr("onmouseover","toolTipLifeShow($(this))");
				 if(tempSelfIns  != $("#expdSelfInsurance").val() && !isEmpty($("#expdSelfInsurance").attr("data-attr"))){
					 $("#expdSelfInsurance").addClass("alterColor");
				 }else{
					 $("#expdSelfInsurance").removeClass("alterColor");
				 }*/
			     $("#expdSpsInsurance").val(roundNumber(sumSps));
			     /*$("#expdSpsInsurance").attr("data-attr",tempSpsIns).attr("onmouseover","toolTipLifeShow($(this))");
			     if( tempSpsIns  != $("#expdSpsInsurance").val() &&   !isEmpty($("#expdSpsInsurance").attr("data-attr")) ){
			    	 $("#expdSpsInsurance").addClass("alterColor");
				 }else{
					 $("#expdSpsInsurance").removeClass("alterColor");
				 }*/
			     $("#expdFamilyInsurance").val(roundNumber(sumFam));   
			    /* $("#expdFamilyInsurance").attr("data-attr",tempFamIns).attr("onmouseover","toolTipLifeShow($(this))");
			     if(tempFamIns != $("#expdFamilyInsurance").val() && !isEmpty($("#expdFamilyInsurance").attr("data-attr"))){
			    	 $("#expdFamilyInsurance").addClass("alterColor");
				 }else{
					 $("#expdFamilyInsurance").removeClass("alterColor");
				 } 
			     */
		     }else{
				 $("#expdSelfInsurance").val(roundNumber(sumSlf)); 
			     $("#expdSpsInsurance").val(roundNumber(sumSps));
			     $("#expdFamilyInsurance").val(roundNumber(sumFam)); 
		     }
		     
		     
		     
		     $("#lipSa").val(roundNumber(sumOfSA));  
//		     $("#retTotalSa").val(Number(sumOfSA).toFixed(2)); 
//		     $("#retTotalPrem").val(Number(totpremium).toFixed(2));  
		     
		     
			 calcSum(this,'SUMOF_ANNEXP_SELF');
			 calcSum(this,'SUMOF_ANNEXP_SPS');
			 calcSum(this,'SUMOF_ANNEXP_FAM'); 
			 
			  
			 return true;
}
function calcTotSAPremPlandetails(){
	
	 var sumSlf=0,sumSps=0,sumFam=0,sumOfSA=0; 
	 var totsumassure=0,totpremium=0; 
	 var ownship=$("#lipOwner").val();

	  var ind=[];
	 $("#cvplnleftpaneltbl tbody tr:eq(0) td").each(function(){ 
	 		 ind.push($(this).index()); 
	 }); 		
//	 if(ind.length >0){
	 $("#cvplnleftpaneltbl tbody tr:eq(0) td").each( function( index, value ) {   
	 	 var planpremiumamt		= Number($("#cvplnleftpaneltbl tbody tr:eq(4)").find("td:eq("+index+")").find("input:eq(0)").val()); 
	 	 var sumassuredamt		=Number($("#cvplnleftpaneltbl tbody tr:eq(3)").find("td:eq("+index+")").find("input:eq(0)").val());
	 	//SCREEN CHANGE REFLECTION
	 	 var paymode			=$("#cvplnleftpaneltbl tbody tr:eq(8)").find("td:eq("+index+")").find("select:eq(0)").val(); 
	 	 var paymtd				=$("#cvplnleftpaneltbl tbody tr:eq(9)").find("td:eq("+index+")").find("select:eq(0)").val();  
	 	 var premTerm			=$("#cvplnleftpaneltbl tbody tr:eq(6)").find("td:eq("+index+")").find("input:eq(1)").val(); 
	 	 var incdate			=$("#cvplnleftpaneltbl tbody tr:eq(5)").find("td:eq("+index+")").find("input:eq(0)").val();   
	 	 
	 	 
	 	 if(isCashRelated(paymtd)){
	 		  

	 	 var TopUpAmt = getFrequencyDigit(paymode,0); 
	 		 
	 		 var sumamt	= Number(planpremiumamt)*Number(TopUpAmt);
	 		 totpremium += Number(sumamt); 
	 		 
	 		 
	 		 var dateTopay ="",stillNeedTopay=false;
	 		 if(!isEmpty(premTerm) && !isEmpty(incdate)){
	 			 if(premTerm.toUpperCase() != "WHOLE LIFE"){
	 				  dateTopay			= addyearsToDate(incdate,premTerm);	
	 				  stillNeedTopay 	= validateDateComparision(dateTopay,ResultNewDate,">=");  
	 			 }else if(premTerm.toUpperCase() == "WHOLE LIFE"){
	 				 stillNeedTopay		= true;
	 			 }
	 		 }
	 		 
	 		 if(paymode == 'SINGLE'){
	 			 dateTopay			= addyearsToDate(incdate,1);
					stillNeedTopay 	= validateDateComparision(dateTopay,ResultNewDate,">=");
//	 			stillNeedTopay 	= validateDateComparision(incdate,ResultNewDate,">=");
	 		 }
	 	  
	 		if(stillNeedTopay ){
	 			 if((!isEmpty(sumamt)) && ownship == "Self"){
	 				 sumSlf +=Number(sumamt); 
	 				 
	 			 }
	 			 if((!isEmpty(sumamt)) && ownship == "Spouse"){
	 				 sumSps +=Number(sumamt); 
	 			 } 
	 			 if((!isEmpty(sumamt)) && ownship == "Joint"){
	 				 sumFam +=Number(sumamt); 
	 			 }   
	 			 /*if((!isEmpty(sumassuredamt))){
	 				 totsumassure +=Number(sumassuredamt); 
	 			 }*/   
	 				
	 		} 
	 		
	 	}
	 			 
	 	
	 	 if((!isEmpty(sumassuredamt))){
	 		 sumOfSA +=Number(sumassuredamt); 
	 	 }  

	 });   
	 
	 
//	 }
 
 
 
 $("#lipSa").val(roundNumber(sumOfSA));  
 $("#retTotalSa").val(Number(sumOfSA).toFixed(2)); 
 $("#retTotalPrem").val(Number(totpremium).toFixed(2));  
 
 
 calcSum(this,'SUMOF_ANNEXP_SELF');
 calcSum(this,'SUMOF_ANNEXP_SPS');
 calcSum(this,'SUMOF_ANNEXP_FAM'); 
	 return true;
}





//For Master Coverages
function incovrgicoAdd(){ 
	$('#incovrgicoAdd').popover({
        container: 'body',
        html: true,
        trigger: "click" ,
        content: function () { 
            var clone = $($(this).data('popover-content')).clone().removeClass('hidden'); 
            return clone;
        },
//        title:function () {
//		    return 'Info';
//		},
        animation: 'true',
    }).click(function(e) {
        e.preventDefault();
    });
	clearAllCovPopover();
	
}	
$("#incovrgicoAdd").on("click",function(){
	$('#dummydiv').modal('show');
	$('#dummydiv').modal('hide'); 
}); 

function benefitsAddedMtd(){
	if(!validateBenefits()) return; 
	$('.popover').popover('hide'); 
	$('#covAddPopContent').addClass('hidden');
	$(".popover-content").find("table").parent("div").removeClass("bg-danger"); 
	setBenefitsIntoCoverageTable();
}
function benefitsCancelMtd(){
	clearAllCovPopover();
	$('.popover').popover('hide'); 
	$('#covAddPopContent').addClass('hidden');
}
function clearAllCovPopover(){
	$(".popover-content #covAddPopContent").find("input").val("");
	$(".popover-content #covAddPopContent").find("input:checkbox").each(function() {
		 $(this).prop("checked",false);
		 $(this).prop("disabled",false); 
    });
}
function setBenefitsIntoCoverageTable(){ 
	var life_Bef = $(".popover-content #txtFldLifePlanCoverages").val();
	var hCols_Bef = $(".popover-content #hcoverageClientChoice").val();	
/* Head Append*/
	var thDiv= $("#plancoveragetbl thead tr th:eq(1)");
	$("#plancoveragetbl thead tr th:first").after("<th class='selectedd'>"+thDiv.html()+"</th>");
	$("#plancoveragetbl thead tr th:eq(1)").find("div").text(life_Bef).find("input").attr("id","h"+life_Bef).val(life_Bef);
/* Body Append*/
	var clientChoice=[]; 
	clientChoice=$(".popover-content #hcoverageClientChoice").val().split(",");
	
	
	$("#plancoveragetbl tbody tr").each(function(i){
		$("#covBodyTagging tbody tr:eq("+i+")").find("td:eq(0)").find("div:eq(1)").attr("id","div"+life_Bef);
		$("#covBodyTagging tbody tr:eq("+i+")").find("td:eq(0)").find("input:eq(0)").attr("id",life_Bef).attr("name",life_Bef);
		 
		
		
		var exist = clientChoice.indexOf((i).toString());
		if(exist > -1){  
		if(i >= 0 && i <= 3){ //0,1,2,3 
			$(this).find("td:first").after("<td align='center' class='selectedd'>"+$("#covBodyTagging tbody tr:eq("+i+")").find("td:eq(0)").html()+"</td>");
 		} 
		if(i > 3 && i <= 6){//4,5,6
			$(this).find("td:first").after("<td align='center' class='selectedd'>"+$("#covBodyTagging tbody tr:eq("+i+")").find("td:eq(0)").html()+"</td>");
		} 
		if(i > 6 && i <= 10){//7,8,9,10
			$(this).find("td:first").after("<td align='center' class='selectedd'>"+$("#covBodyTagging tbody tr:eq("+i+")").find("td:eq(0)").html()+"</td>");
		}
		if(i == 11){
			$(this).find("td:first").after("<td align='center' class='selectedd'>"+$("#covBodyTagging tbody tr:eq("+i+")").find("td:eq(0)").html()+"</td>");
		}
		}else{
			$(this).find("td:first").after("<td align='center' class='selectedd'><div>&nbsp;</div></td>");
		} 
	});
	
}


function validateBenefits(){  
//		if(!(validateFocusFlds('.popover-content','txtFldLifePlanCoverages',POP_COV_BENEFITS))) return;
		var benftxt = $(".popover-content #txtFldLifePlanCoverages").val(); 
		if (isEmpty(benftxt.trim())) { 
			applyErrorToastrAlert(POP_COV_BENEFITS);  
			$(".popover-content #txtFldLifePlanCoverages").focus(); 
			return false; 
		}
		
		var coveragechk = 0;  
		$(".popover-content").find("input:checkbox[name='chkcovbenf']").each(function() {
			if ($(this).prop("checked")) {
				coveragechk++;
			}
		}); 
		if (coveragechk == 0) {
			applyErrorToastrAlert(POP_SELCOV_BENEFITS);
			$(".popover-content").find("table").parent("div").addClass("bg-danger");
			 return false; 
		}
		
		return true;
}
function coveragesCheckEvent(elmid,options){ 
	if(options == "cov"){
		if(elmid.checked){ 
			$(".popover-content").find("input:checkbox[name='chkcovbenf']").map(function() { //If checked iterate the 
				var id = $(this).attr("id");  
				$(".popover-content  #"+id).prop("checked",true); 
				$(".popover-content  #"+id).attr("disabled",true);  
			}).get();
		}else if(!elmid.checked){ 
			$(".popover-content").find("input:checkbox[name='chkcovbenf']").map(function() {  
				var id = $(this).attr("id");
				$(".popover-content #"+id).prop("checked",false); 
				$(".popover-content #"+id).attr("disabled",false);  
			}).get();
		}
		} 
		if(options == "All"){ 
		
			var coverageslen = $(".popover-content input:checkbox[name='chkcovbenf']").length; 
			if(elmid.checked){$(".popover-content").find("table").parent("div").removeClass("bg-danger");} 
			if( $(".popover-content input[name=chkcovbenf]:checked").length == coverageslen){
				$(".popover-content input[name=chkAllCoverages]").prop("checked",true);  
				$(this).prop("checked",false); 
				$(".popover-content input[name=chkcovbenf]").attr("disabled",true);
			}
			
			
		 }
		var hiddenObjval =$(".popover-content #hcoverageClientChoice"); 
		hiddenObjval.val();
		var chkCoverageId=[]; 
		chkCoverageId.push("11");	 
		var coveragePushval=  $(".popover-content input:checkbox[name='chkcovbenf']:checked").map(function() { 
			chkCoverageId.push($(this).attr("value"));	 
		   return this.value; 
		}).get(); 
		hiddenObjval.val(coveragePushval.toString()); 
		 
}//EnD Master coverage validations
 
