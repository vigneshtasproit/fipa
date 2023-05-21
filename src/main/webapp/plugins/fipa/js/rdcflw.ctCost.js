

var ctcostdescription;
var rdcflwTbl; 

 
$(".updaterpcfexpdsection").on('change',function(){
	 getRDcfExpDets(); 
});
 
$(".updateAllAnalysis").on("change",function(){
	callRPCFAnalysis();
}) ;
 
 var dataDescSet=[];
 $("button#btnRPCFAnalysis").on("click",function(){
	 var retAgeBasedonFlag=$("#retAgeBasedon").val();
	 if(!(retAgeBasedonFlag === "--SELECT--")){
		 if($("#retAgeBasedon").hasClass("blinking")){
				$("#retAgeBasedon").removeClass("blinking");
			}
		 showFIPAModel('rpCashFlwAnlys_Dialog','');  
		 callRPCFAnalysis();
	 }else{
		 if($("#retAgeBasedon").hasClass("blinking")){
				$("#retAgeBasedon").removeClass("blinking");
			}
		 $("#retAgeBasedon").hasClass("blinking");
		 $("#retAgeBasedon").focus();
		 applyToastrAlert("Select Retirement age based on"); 
			return;
	 }
	// showFIPAModel('rpCashFlwAnlys_Dialog','');  
	
	// callRPCFAnalysis();
	 
 });
 
 $("#btnRPCFAnalysisRep").on("click",function(){
	 $("#btnRPCFAnalysis").trigger("click");
	 setTimeout(function(){
		 showLoader();
		 $("#btnRetPrint").trigger("click");
//		 showLoader();
//		 $('#rpCashFlwAnlys_Dialog').modal('hide'); 
		 
	 },1000);
 });
 
 function callRPCFAnalysis(){
	 
	 showLoader(); 

	 $("#generateproExptbl").html("");
	 $("#generateproIncometbl").html("");
	 $("#generatetoamendincExp").html(""); 
	 $("#generatetoamendincExpAccm").html("");

	 clrRdCfTable();

	 retirementToRpcfAnalysis();
	 
	 syncToRpcf1();//Other payment to be made during retirement
	 syncToRpcf2();//Income to be received during retirement
	 syncToRpcf3();//Income and assets available for retirement
	 syncToRpcf4();//
	 
//	 <!--changes done 19/06/2019 --> 
//	 CpfPayoutRepSrch('cpfpayoutRD',cpfpayoutRD); 
	
	 getRDcfExpDets();//Projected Expenditure Details on retirement

	 getRDcfIncDets(); //Projected Income available on retirement

	 setTimeout(function(){ 
		 
		 $($.fn.dataTable.tables(true)).DataTable() .columns.adjust();
		 
		 hideLoader();
		 
	 }, 500);
	
 }
   
 
 
 function clrRdCfTable(){
	 var dataTableIdsAll = [ 'RDExptbl', 'RDInctbl','RDIncAsstbl','RDIncDisImbtbl']; 
	             	$.each(dataTableIdsAll, function(index, value) {
	             		$("#" + value).dataTable().fnClearTable(); 
	             		showInfoError(value);
	             	});
 
 }
 
$('#rpCashFlwAnlys_Dialog').find("button[id=btnRetOk]").click(function (){
	 $("#generateproExptbl").html("");
		$("#generateproIncometbl").html("");
		$("#generatetoamendincExp").html("");  
		$("#generatetoamendincExpAccm").html("");
		clrRdCfTable();
		$("#generateproIncomeDiv").html("");
		$("#generateproIncomeDiv").html('<table id="generateproIncometbl"  class="dataTable table-bordered table-striped display hover" style="width:100%"></table>');

	  $('#rpCashFlwAnlys_Dialog').modal('hide'); 
}); 

$('#rpCashFlwAnlys_Dialog').find("a[id=btnRetReset]").click(function (){ 
clearAllInputsOfRPCFAnalysis(); 
});

$('#rpCashFlwAnlys_Dialog').find("a[id=btnRetPrint]").click(function (){ 
	 showLoader();	
	 // $("#tabincomeandExpnd li:eq(0) a").click();	
	  $("#tabincomeandExpnd li:eq(1) a").click();
	 setTimeout(function(){
	 genPDF();
	 },100);
	/*pdfOperation('rpt1','rpt2','projOfExpetbldiv','rpt3','projOfIncometblediv','rpt4','','','','','','','');*/
	/*pdfOperation('rpt1','rpt2','projOfExpetbldiv','fldIncomeSec','rpt4','','','','','','','','','');*/
	/*pdfOperation('rpt1','','','','','','','','','','','','','');*/
	
});


function genPDF(){
	 
	 var pdf = new jsPDF('p','mm',"a2",true); 

		pdf.setFontSize(13);
		pdf.page=1; 
    	//new
    	var NORMAL_FONTSIZE = ['11pt','11pt'];
    	var HIGHRES_FONTSIZE = ["10pt","7pt"];

    	function setFonSize(elm,fontsize){ 
    		$(elm).find("label").css("font-size",fontsize[0]);
    		$(elm).find(".headerlabel").css("font-size",fontsize[1]);
    		
    	}
    	
    	var $wrapper = document.getElementById('printHtmlPdf');
    	   var setFonSizeOfWrapper = setFonSize.bind(null, $wrapper);

    	   $("#printHtmlPdf").css("visibility","visible");
    	 
    	
    	$("#rpCashFlwAnlys_Dialog .btn-group").hide();
    	$("#rpCashFlwAnlys_Dialog .pdf-hide").hide(); 
    	showLoader();		
    	
    	html2canvas(document.getElementById('rpt1'),
    			{scale:1,
    	 useCORS:true,
	 	 allowTaint:true,
	 	 windowWidth:1366,
	 	 windowHeight:676,
	 	 logging:true,
	 	 async:false
         }).then(function(canvas) {
         showLoader();		 
    	 document.body.appendChild(canvas);
    	 var img = canvas.toDataURL('image/png'); 
    	 var widthT = pdf.internal.pageSize.width;    
	     var heightT = pdf.internal.pageSize.height;
	     var imgData = canvas.toDataURL("image/png", 1.0);
	     
	     pdf.setFontSize(12);
	     pdf.setFontType("bold");
	     pdf.setTextColor(80,144,124,1);
	     pdf.text(10, 25, 'Self Name');
	     pdf.setTextColor(0,0,0,1);
	     pdf.text(40, 25, ':');
	     
	     pdf.setFontType("normal");
	     pdf.text(43, 25,$("#txtFldRDClientName").text());
	     
	     pdf.setFontType("bold");
	     pdf.setTextColor(80,144,124,1);
	     pdf.text(120, 25, 'Age');
	     pdf.setTextColor(0,0,0,1);
		 pdf.text(130, 25, ':');
		 pdf.setFontType("normal");
		 pdf.text(135, 25,$("#txtFldRDClientAge").text());
	     
		 pdf.setFontType("bold");
		 pdf.setTextColor(80,144,124,1);
		 pdf.text(10, 35, 'Spouse Name');
		 pdf.setTextColor(0,0,0,1);
	     pdf.text(40, 35, ':');
	     pdf.setFontType("normal");
	     pdf.text(43, 35,$("#txtFldRDSpouseName").text());
	     
	     pdf.setFontType("bold");
	     pdf.setTextColor(80,144,124,1);
	     pdf.text(120, 35, 'Age');
	     pdf.setTextColor(0,0,0,1);
		 pdf.text(130, 35, ':');
		 pdf.setFontType("normal");
		
		 pdf.text(135, 35,$("#txtFldRDSpouseAge").text());
		 pdf.setFontType(13);
	     pdf.addImage(imgData,'png',5,45,widthT-10,180);
	     pdfheader(pdf,170);
	     footer(pdf,0);
	     
	     
	     
//	     console.log("1 ---------------------------------------------__>");
	     
	     document.body.removeChild(canvas);

//	     html2canvas(document.getElementById('rpt2'),
//	             {scale:1,
//	      	 	 useCORS:true,
//	      	 	 allowTaint:true,
//	      	 	 logging:true,
//	      	 	 windowWidth:1366,
//	      	 	 windowHeight:676,
//	      	 	async:false
//	      	 	 }).then(function(canvas) {
//	          	 document.body.appendChild(canvas);
//	          	 var img = canvas.toDataURL('image/png');
	          	 
//	          	 var widthT = pdf.internal.pageSize.width;    
//	      	     var heightT = /*pdf.internal.pageSize.height;550*/100;
//	      	     var imgData = canvas.toDataURL("image/png", 1.0);
	      	    	
//	      	     if($("#RDExptbl tbody tr:first td:first").hasClass('dataTables_empty')){
//	      	    	 heightT=270;
//	      	     }
	      	     
	      	     
//	      	     pdf.addImage(imgData,'JPEG',5,200,widthT-10,heightT);
	   //<!--changes done 24/06/2019 -->
			     if(!$("#cpfpayoutRD tbody tr:first td:first").hasClass("dataTables_empty")){
			    	 pdf.addPage();
		      	     pdfheader(pdf,170);
		      	     footer(pdf,0); 
		      	     pdfAddTitle(pdf,10,15,"CPF Life Pay Out Income"); 
			    	 addAutoTblCashPayout(pdf,"");
			     }

  	    
  	     
	      	     if(!$("#RDExptbl tbody tr:first td:first").hasClass("dataTables_empty")){
	      	     
	      	     pdf.addPage();
	      	     pdfheader(pdf,170);
	      	     footer(pdf,0);
	      	     
	      	     pdfAddTitle(pdf,10,15,"Other payment to be made during retirement");
	      	     
	      	     addAutoTblRDEExp(pdf,"");
	      	     
	      	     }
	      	     
	      	     if(!$("#RDExptbl tbody tr:first td:first").hasClass('dataTables_empty')){ 
	      	     pdf.addPage('a2','portrait');//landscape 
	      	     pdfheader(pdf,170);//250
	      	     footer(pdf,0);//80
	      	     
	      	     pdfAddTitle(pdf,10,15,"Projected Expenditure Details on retirement");
//	      	     pdf.text(10,10," ");
	      	     
	      	     addTableData(pdf,"");
	      	     }
	      	     
//	      	   if($("#RDExptbl tbody tr:first td:first").hasClass('dataTables_empty')){
//	    	     savePdf(pdf);
//	      	   } 
//	      	     console.log("2 ---------------------------------------------__>");
//	      	     document.body.removeChild(canvas);
	      	   
	      	    
	     		  html2canvas(document.getElementById('rpcfana_expndchart'),
	     		          {
	     		 	 	 scale:1,
	     		 	 	 useCORS:true,
	     		 	 	 allowTaint:true,
	     		 	 	 windowWidth:1366,
	     		 	 	 windowHeight:676,
	     		 	 	async:false
	     		 	 	 }).then(function(canvas) {
	     		 	 	  if(!$("#RDExptbl tbody tr:first td:first").hasClass('dataTables_empty')){  	 
	     		     	 document.body.appendChild(canvas);
	     		     	 var img = canvas.toDataURL('image/png');
	     		 	    
	     		 	     pdf.addPage("a2","portrait");
	     		 	     pdfheader(pdf,170);
	     		 	     footer(pdf,0);
	     		 	     
	     		 	     var widthT = pdf.internal.pageSize.width;    
	     		 	     var heightT = /*pdf.internal.pageSize.height;550*/200;
	     		 	     var imgData = canvas.toDataURL("image/png", 1.0);
	     		 	     
	     		 	     pdfAddTitle(pdf,10,15,"Projection of Expenditure on Retirement");
//	     		 	     pdf.text(10,17," ");
	     		 	     
	     		 	     pdf.addImage(imgData,'JPEG',5,40,widthT-10,heightT);
	     		 	    
//	     			     savePdf(pdf);
	     		 	     
	     		 	     document.body.removeChild(canvas);
	     		 	     
	     		 	 	 } 
	     		 	 	  
	     		 	 	/*html2canvas($("#rpt3")[0],
	     		 	  		   {
	     		 	  			 	 scale:1,
	     		 	  			 	 useCORS:false,
	     		 	  			 	 allowTaint:true,
	     		 	  			 	 windowWidth:1366,
	     		 	  			 	 windowHeight:676
	     		 	  		 }).then(function(canvas) {*/
	     		 	  			 	
	     		 	  			if(!$("#RDInctbl tbody tr:first td:first").hasClass("dataTables_empty")){
	     		 	  			 	 pdf.addPage("a2","portrait");
//	     		 	  		    	 document.body.appendChild(canvas);
//	     		 	  		    	 var img = canvas.toDataURL('image/png'); 
//	     		 	  	        	 var widthT = pdf.internal.pageSize.width;    
//	     		 	  	    	     var heightT =280;
//	     		 	  	    	     var imgData = canvas.toDataURL("image/png", 1.0);
	     		 	  	    	     
	     		 	  	    	     pdfheader(pdf,170);
	     		 	  	    	     footer(pdf,0);
	     		 	  	    	     
	     		 	  	    	     pdfAddTitle(pdf,10,15,"Income to be received during retirement");
	     		 	  	    	     
	     		 	  	    	     addAutoTblRDInc(pdf,20);
	     		 	  	    	     
	     		 	  			}  
	     		 	  			
	     		 	  		if(!$("#RDIncAsstbl tbody tr:first td:first").hasClass("dataTables_empty")){
	     		 	  	    	    pdf.addPage();
	     		 	  	    	    pdfheader(pdf,170);
	     			      	     	footer(pdf,0);
	     			      	     	
	     			      	     	pdfAddTitle(pdf,10,15,"Income and assets available for retirement");
	     			      	     	
	     			      	     	addAutoTblRDIncAss(pdf,20)
	     		 	  		}	     
	     		 	  	    	     if($("#generateproIncometbl tbody tr").length==0 || $("#generateproIncometbl tbody tr:first td:first").hasClass('dataTables_empty')){ 
//	     		 	  	    	    	 heightT=280;
	     		 	  	    	     }
//	     		 	  	    	     console.log("3 ---------------------------------------------__>");
	     		 	  	    	     
//	     		 	  	    	     pdf.addImage(imgData,'png',5,12,widthT-10,heightT);
	     		 	  	    	     
	     		 	  	    	     
	     		 	  			     
	     		 	  	    	   if($("#generateproIncometbl tbody tr").length>0 && !$("#generateproIncometbl tbody tr:first td:first").hasClass('dataTables_empty')){ 
	     		 	      	    	 pdf.addPage('a2','portrait');//landscape
	     		 	      	    	 pdfheader(pdf,170);//250
	     		 	      	    	 footer(pdf,0);//80
	     		 	      	    	 
	     		 	          	     pdfAddTitle(pdf,10,15,"Projected Income avaliable on retirement");
//	     		 	          	     pdf.text(10,10," ")
	     		 	      	    	 
	     		 	      	    	 addGenTableData(pdf,"");
	     		 	      	     }
	     		 	  	    	     
	     		 	  	    	     
//	     		 	  			 document.body.removeChild(canvas);
	     		 	  			 
	     		 	  		  	 html2canvas(document.getElementById('rpcfana_incomechart'),
	     		 	  		  	         {
	     		 	  		  		 	 scale:1,
	     		 	  		  		 	 useCORS:false,
	     		 	  		  		 	 allowTaint:true,
	     		 	  		  		 	 windowWidth:1366,
	     		 	  		  		 	 windowHeight:666
	     		 	  		  		 	 }).then(function(canvas) {
	     		 	  		  		 	if($("#generateproIncometbl tbody tr").length>0 && !$("#generateproIncometbl tbody tr:first td:first").hasClass('dataTables_empty')){	 
	     		 	  		  		 	 document.body.appendChild(canvas);
	     		 	  		  	    	 var img = canvas.toDataURL('image/png');
	     		 	  		  	    	
	     		 	  		  	    	 pdf.addPage("a2","portrait");
	     		 	  		  	    	 
	     		 	  		  	    	 var widthT = pdf.internal.pageSize.width;    
	     		 	  		  		     var heightT = 200;
	     		 	  		  		     var imgData = canvas.toDataURL("image/png", 1.0);
	     		 	  		  		    
	     		 	  		  		     pdfheader(pdf,170);
	     		 	  		  		     footer(pdf,0);
	     		 	  		  		     
	     		 	  		  		     pdfAddTitle(pdf,10,15,"Projection of Income");
//	     		 	  		  		     pdf.text(10,17," ")
	     		 	  		  		     
	     		 	  		  		     pdf.addImage(imgData,'JPEG',5,40,widthT-10,heightT); 
	     		 	  		  		     
	     		 	  		  		     document.body.removeChild(canvas);
	     		 	  		  		} 
	     		 	  		  	
	     		 	  		  if($("#projInvRettbldiv").is(":visible")){
	     		 	  			  
	     		 	  			 html2canvas(document.getElementById('rpt5'),
	     		 	  		  	         {
	     		 	  		  		 	 scale:1.5,
	     		 	  		  		 	 useCORS:false,
	     		 	  		  		 	 allowTaint:true,
	     		 	  		  		 	 windowWidth:1366,
	     		 	  		  		 	 windowHeight:666
	     		 	  		  		 	 }).then(function(canvas) {
	     		 	  		  		 		 
	     		 	  		  		 	document.body.appendChild(canvas);
	     		 	  		  		 	var img = canvas.toDataURL('image/png');
	     		 	  		  		 	
	     		 	  		  		 	var widthT = pdf.internal.pageSize.width;    
	     		 	  		  		 	var heightT = 10;//pdf.internal.pageSize.height;550
	     		 	  		  		 	var imgData = canvas.toDataURL("image/png", 1.0);
	     		 	  		  		 	
	     		 	  		  		 	pdf.addPage("a2","portrait");//landscape
 		 	  		  		    	 	pdfheader(pdf,170);//250
 		 	  		  		    	 	footer(pdf,0);//80
	     		 	  		  		 	 
	     		 	  		  		 	pdf.addImage(imgData,'JPEG',5,25,widthT-10,15);
    		 	  		  	   	     
	     		 	  		  		 	document.body.removeChild(canvas);
	     		 	  		  		 	
	     		 	   	  		 	
	     		 	  		  		     if($("#projInvRettbldiv").is(":visible")){ 

	     		 	  		  		    	 
	     		 	  		  		    	 pdfAddTitle(pdf,10,15,"Annual Cashflow Projections of Retirement Income and Expenditure (Annual Based)");
	     		 	  		  		    	 
	     		 	  		  		    	 addAmendTableData(pdf,45);
	     		 	  		  		    	 
	     		 	  		  		     }
	     		 	  		  		     
	     		 	  		  		     if(!$("#projInvRettbldiv").is(":visible")){ 
	     		 	  		  		    	 savePdf(pdf);
	     		 	  		  		     }
	     		 	  		  		     
	     		 	  		  		  
	     		 	  		  		if($("#projInvRettbldiv").is(":visible")){ 	
	     		 	  		  	     $("#tabincomeandExpnd li:eq(1) a").click();
	     		 	  		  		 $("#tabincomeandExpnd li:eq(0) a").click();	
	     		 	  		  			
	     		 	  		  		 html2canvas(document.getElementById('rpcfana_annlexpinc'),
	     		 	  		  	            {
	     		 	  		  	   	 	 scale:1,
	     		 	  		  	   	 	 useCORS:false,
	     		 	  		  	   	 	 allowTaint:true,
	     		 	  		  	   	 	 windowWidth:1366,
	     		 	  		  	   	 	 windowHeight:666,
	     		 	  		  	   	 	 }).then(function(canvas) {
//	     		 	  		  	   	     if($("#projInvRettbldiv").is(":visible")){	 
	     		 	  		  	       	 document.body.appendChild(canvas);
	     		 	  		  	       	 var img = canvas.toDataURL('image/png');
	     		 	  		  	       	 
	     		 	  		  	       	 pdf.addPage("a2","portrait");
	     		 	  		  	       	 
	     		 	  		  	       	 var widthT = /*pdf.internal.pageSize.width*/300;    
	     		 	  		  	   	     var heightT = 350;//pdf.internal.pageSize.height;550
	     		 	  		  	   	     var imgData = canvas.toDataURL("image/png", 1.0);
	     		 	  		  	   	    
	     		 	  		  	   	     pdfheader(pdf,170);
	     		 	  		  	   	     footer(pdf,0);
	     		 	  		  	   	     
	     		 	  		  	   	     pdfAddTitle(pdf,10,15,"Cashflow Projection on Retirement");
	     		 	  		  	   	     
	     		 	  		  	   	     pdf.addImage(imgData,'JPEG',50,40,widthT-10,heightT);
	     		 	  		  	   	     
	     		 	  		  	   	     document.body.removeChild(canvas);
	     		 	  		  	   	     
	     		 	  		  	   	     //table page
	     		 	  		  	   	     pdf.addPage("a2","portrait");//landscape
	     		 	  		  	   	     pdfheader(pdf,170);//250
	     		 	  		  	   	     footer(pdf,0);//80
		 	  		  		    	 
	     		 	  		  	   	     pdfAddTitle(pdf,10,15,"Annual Cashflow Projections of Retirement Income and Expenditure (Accumlation Based)");
	     		 	  		  	   	     
	     		 	  		  	   	     addAmendincExpAccm(pdf,"");
	     		 	  		  	  
	     		 	  		  	   $("#tabincomeandExpnd li:eq(1) a").click();
	     		 	  		  	   	     
	     		 	  		  	   html2canvas(document.getElementById('rpcfana_annlexpinc_accm'),
	     		 	  		  	         {
	     		 	  		  	   	 	 scale:1,
	     		 	  		  	   	 	 useCORS:false,
	     		 	  		  	   	 	 allowTaint:true,
	     		 	  		  	   	 	 windowWidth:1366,
	     		 	  		  	   	 	 windowHeight:666,
	     		 	  		  	   	 	 }).then(function(canvas) {
	     		 	  		  	   	 		 
	     		 	  		  	       	 document.body.appendChild(canvas);
	     		 	  		  	       	 var img = canvas.toDataURL('image/png');
	     		 	  		  	       	 
	     		 	  		  	       	 pdf.addPage("a2","portrait");
	     		 	  		  	       	 
	     		 	  		  	       	 var widthT = /*pdf.internal.pageSize.width*/300;    
	     		 	  		  	   	     var heightT = 350;//pdf.internal.pageSize.height;550
	     		 	  		  	   	     var imgData = canvas.toDataURL("image/png", 1.0);
	     		 	  		  	   	    
	     		 	  		  	   	     pdfheader(pdf,170);
	     		 	  		  	   	     footer(pdf,0);
	     		 	  		  	   	     
	     		 	  		  	   	     pdfAddTitle(pdf,10,15,"Cashflow Projection (Accumlation based)");
	     		 	  		  	   	     
	     		 	  		  	   	     pdf.addImage(imgData,'JPEG',50,40,widthT-10,heightT);
	     		 	  		  	   	     
	     		 	  		  	   	     document.body.removeChild(canvas);
	     		 	  		  	   	  
	     		 	  		  	   	     savePdf(pdf);
	     		 	  		  	   	 });	 
	     		 	  		  	   	     
	     		 	  		  	   	     
	     		 	  		  	});	 
	     		 	  		  		 
	     		 	}
	     		 
	     		 	  		  		 	
	     		 	  		  		 	
	     		 	  		  		 	});
	     		 	  		  }else{
	     		 	  			var selfname = $("#dfSelfName").val();
	     			 savePdf(pdf,selfname);
	     		 }	  		  		
	     	  });	 	  		 
//	      }); 
	   });
//   });
});
      
 

 
} 


function retirementToRpcfAnalysis(){ 
	
//	var date=new Date();
//	var curDate=date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
	
	$("span[id='txtFldRDClientName']").text("");
	$("span[id='txtFldRDClientAge']").text("");
	$("span[id='txtFldRDSpouseName']").text("");
	$("span[id='txtFldRDSpouseAge']").text("");
//	$("span[id='txtFldRDDate']").text("");
	
	var selfname = $("#dfSelfName").val();
	var selfage = $("#dfSelfAge").val();
	var spsname= $("#dfSpsName").val();
	var spsage = $("#dfSpsAge").val();
	var currinflationrate = $("#caGenInfrate").val();
	
	var selfretage = $("#retSelfAge").val();
	var spsretage = $("#retSpsAge").val();
	var retagebasedon = $("#retAgeBasedon").val();
	var yrstoret = $("#retYrstoret").val();
	var selfretcoordage = $("#retSelfCoordinateage").val();
	var spsretcoordage = $("#retSpsCoordinateage").val();
	
//	if(!isEmpty(selfname)){
		$("span[id='txtFldRDClientName']").text(selfname);
//	}
//	if(!isEmpty($("#dfSelfAge").val())){
		$("span[id='txtFldRDClientAge']").text(selfage);
//	}
//	if(!isEmpty($("#dfSpsName").val())){
		$("span[id='txtFldRDSpouseName']").text(spsname);
//	}
//	if(!isEmpty($("#dfSpsAge").val())){
		$("span[id='txtFldRDSpouseAge']").text(spsage);
//	}
//		$("span[id='txtFldRDDate']").text(curDate); 
	
	
//	if(!isEmpty($("#retSelfAge").val())){
		$("input[name='txtFldRDSlfIntAge']").val(selfretage);
//	}
//	if(!isEmpty($("#retSpsAge").val())){
		$("input[name='txtFldRDSpsIntAge']").val(spsretage);
//	}	  
//	if(!isEmpty($("#retAgeBasedon").val())){
		$("select[name='selRDRetAgebasedOn']").val(retagebasedon);
//	}	
//	if(!isEmpty($("#retYrstoret").val())){
		$("input[name='txtFldRDYrsToRet']").val(yrstoret);
//	}  
//	if(!isEmpty($("#retSelfCoordinateage").val())){
		$("input[name='txtFldRDSlfCoRetAge']").val(selfretcoordage);
//	}
//	if(!isEmpty($("#retSpsCoordinateage").val())){
		$("input[name='txtFldSpsRDCoRetAge']").val(spsretcoordage);
//	}	  
		
//	if(!isEmpty($("#retSelfProjage").val())){
		$("input[name='txtFldRDSlfProjLfe']").val($("#retSelfProjage").val());
//	}	 
//	if(!isEmpty($("#retSpsProjage").val())){
		$("input[name='txtFldRDSpsProjLfe']").val($("#retSpsProjage").val());
//	}	   
//	if(!isEmpty($("#retSelfLivyrs").val())){
		$("input[name='txtFldRDSlfProlvyrs']").val($("#retSelfLivyrs").val());
//	}	  
//	if(!isEmpty($("#retSpsLivyrs").val())){
		$("input[name='txtFldRDSpsProlvyrs']").val($("#retSpsLivyrs").val());
//	}	   
//	if(!isEmpty($("#retFamLivyrs").val())){
		$("input[name='txtFldRDFamProlvyrs']").val($("#retFamLivyrs").val());
//	}	  
//	if(!isEmpty($("#retSelfProjroi").val())){
		$("input[name='txtFldRDSlfROI']").val($("#retSelfProjroi").val());	
//		assEffrate();
//	}	  
//	if(!isEmpty($("#retSpsProjroi").val())){
		$("input[name='txtFldRDSpsROI']").val($("#retSpsProjroi").val());	
//		assEffrate();
//	}	 
//	if(!isEmpty($("#retFamProjroi").val())){
		$("input[name='txtFldRDFamROI']").val($("#retFamProjroi").val());	
		
//		}
		
		$("#txtFldRDInfRate").val(currinflationrate);
		
		assEffrate();
		
//	if(!isEmpty($("#retSelfAnnlexpdamt").val())){
		$("input[name='txtFldRDSlfLvAmt']").val($("#retSelfAnnlexpdamt").val());
//	}	 
//	if(!isEmpty($("#retSpsAnnlexpdamt").val())){
		$("input[name='txtFldRDSpsLvAmt']").val($("#retSpsAnnlexpdamt").val());
//	}	 
//	if(!isEmpty($("#retFamAnnlexpdamt").val())){
		$("input[name='txtFldRDFamLvAmt']").val($("#retFamAnnlexpdamt").val());
//	}	 
//	if(!isEmpty($("#txtFldRDSlfCoRetAge").val())){
		$("input[name='txtFldRDSlfLvCorAge']").val($("#txtFldRDSlfCoRetAge").val());
//	}	 
//	if(!isEmpty($("#txtFldSpsRDCoRetAge").val())){
		$("input[name='txtFldRDSpsLvCorAge']").val($("#txtFldSpsRDCoRetAge").val());
//	}	   
//	if(!isEmpty($("#retFamCoordretage").val())){
		$("input[name='txtFldRDFamLvCorAge']").val($("#retFamCoordretage").val());
//	}	  
//	if(!isEmpty($("#txtFldRDSlfProlvyrs").val())){
		$("input[name='txtFldRDSlfLvProAge']").val($("#txtFldRDSlfProlvyrs").val());
//	}	 
//	if(!isEmpty($("#txtFldRDSpsProlvyrs").val())){
		$("input[name='txtFldRDSpsLvProAge']").val($("#txtFldRDSpsProlvyrs").val());
//	}	 
//	if(!isEmpty($("#txtFldRDFamProlvyrs").val())){
		$("input[name='txtFldRDFamLvProAge']").val($("#txtFldRDFamProlvyrs").val());
//	}	 
		
		

}
 
 function validationRetirementScreen(){
  	var analysisForSpouse = $("#txtFldAnalyisForSpouse").is(":checked");
	var analysisForFamily = $("#txtFldAnalyisForFamily").is(":checked");
 		 
 		if(!(validateFocusRDFlds('focusfmIntage','retSelfAge',RETSCREEN_INTSLFAGE))) return;  
 		if(!(validateFocusRDFlds('focusfmRdAge','retAgeBasedon',RETSCREEN_RETAGEBASE))) return;
 		if(!(validateFocusRDFlds('focusfmyrstord','retYrstoret',RETSCREEN_YRSTORET))) return;
 		if(!(validateFocusRDFlds('focusfmcoyrs','retSelfCoordinateage',RETSCREEN_CORSLFAGE))) return; 
 		if(!(validateFocusRDFlds('focusfmprojlife','retSelfProjage',RETSCREEN_PROSLFAGE))) return; 
 		if(!(validateFocusRDFlds('focusfmprojlvyrs','retSelfLivyrs',RETSCREEN_PROSLFLVYRRET))) return; 
 		if(!(validateFocusRDFlds('focusfmroi','retSelfProjroi',RETSCREEN_ROISLF))) return; 
 		 
 		  if(analysisForSpouse){
 			if(!(validateFocusRDFlds('focusfmIntage','retSpsAge',RETSCREEN_INTSPSAGE))) return;
 			if(!(validateFocusRDFlds('focusfmcoyrs','retSpsCoordinateage',RETSCREEN_CORSPSAGE))) return;
 			if(!(validateFocusRDFlds('focusfmprojlife','retSpsProjage',RETSCREEN_PROSPSAGE))) return;
 			if(!(validateFocusRDFlds('focusfmprojlvyrs','retSpsLivyrs',RETSCREEN_PROSPSLVYRRET))) return;
 			if(!(validateFocusRDFlds('focusfmroi','retSpsProjroi',RETSCREEN_ROISPS))) return;
 		 }
 		  if(analysisForFamily){
 			 if(!(validateFocusRDFlds('focusfmprojlvyrs','retFamLivyrs',RETSCREEN_PROFAMLVYRRET))) return;
 			 if(!(validateFocusRDFlds('focusfmroi','retFamProjroi',RETSCREEN_ROIFAM))) return;
 		  }
 		
// 		if(!(validateFocusRDFlds('focusfmlvself','retSelfAnnlexpdamt',RETSCREEN_LVYRSLF)))return; 
// 		if(!(validateFocusRDFlds('focusfmlvsps','retSpsAnnlexpdamt',RETSCREEN_LVYRSPS))) return; 
// 		if(!(validateFocusRDFlds('focusfmlvfam','retFamAnnlexpdamt',RETSCREEN_LVYRFAM))) return;
 		
 		
 		
 		return true;
 	 
 }
 /*Mandatory Fields Tooltip*/ 
 $("#retSelfAge,#retSpsAge,#retAgeBasedon,#retYrstoret," +
 		"#retSelfCoordinateage,#retSpsCoordinateage," +
 		"#retSelfProjage,#retSpsProjage,#retSelfLivyrs," +
 		"#retSpsLivyrs,#retFamLivyrs,#retSelfProjroi,#retSpsProjroi,#retFamProjroi," +
 		"#retSelfAnnlexpdamt,#retSpsAnnlexpdamt,#retFamAnnlexpdamt").on("change",function(){
 			if(!isEmpty($(this).val())){
 	$(this).qtip('disable');
 	$(this).qtip('destroy',true);
 	$(this).removeClass("mandatoryFillFlds");
 			}
 });


function validationRetirementPlnSection(){
 	var analysisForSpouse = $("#txtFldAnalyisForSpouse").is(":checked");
	var analysisForFamily = $("#txtFldAnalyisForFamily").is(":checked");
 
		 
		/*if(!(validateFocusRDFlds('focusIntage','txtFldRDSlfIntAge',RETSCREEN_INTSLFAGE))) return;  
		if(!(validateFocusRDFlds('focusRdAge','selRDRetAgebasedOn',RETSCREEN_RETAGEBASE))) return;
		if(!(validateFocusRDFlds('focusyrstord','txtFldRDYrsToRet',RETSCREEN_YRSTORET))) return;
		if(!(validateFocusRDFlds('focuscoyrs','txtFldRDSlfCoRetAge',RETSCREEN_CORSLFAGE))) return; 
		if(!(validateFocusRDFlds('focusprojlife','txtFldRDSlfProjLfe',RETSCREEN_PROSLFAGE))) return; 
		if(!(validateFocusRDFlds('focusprojlvyrs','txtFldRDSlfProlvyrs',RETSCREEN_PROSLFLVYRRET))) return; 
		if(!(validateFocusRDFlds('focusroi','txtFldRDSlfROI',RETSCREEN_ROISLF))) return;
		*/
	
	 
		  if(analysisForSpouse){
			  if(!(validateFocusRDFlds('focusIntage','txtFldRDSpsIntAge',RETSCREEN_INTSPSAGE	))) return;
				if(!(validateFocusRDFlds('focuscoyrs','txtFldSpsRDCoRetAge',RETSCREEN_CORSPSAGE))) return; 
				if(!(validateFocusRDFlds('focusprojlife','txtFldRDSpsProjLfe',RETSCREEN_PROSPSAGE))) return;
				if(!(validateFocusRDFlds('focusprojlvyrs','txtFldRDSpsProlvyrs',RETSCREEN_PROSPSLVYRRET))) return;
				if(!(validateFocusRDFlds('focusroi','txtFldRDSpsROI',RETSCREEN_ROISPS))) return;
		  }
		  
		  if(analysisForFamily){
			  if(!(validateFocusRDFlds('focusprojlvyrs','txtFldRDFamProlvyrs',RETSCREEN_PROFAMLVYRRET))) return;
				if(!(validateFocusRDFlds('focusroi','txtFldRDFamROI',RETSCREEN_ROIFAM))) return;
		  }
//		if(!(validateFocusRDFlds('focuslvself','txtFldRDSlfLvAmt',RETSCREEN_LVYRSLF)))return; 
//		if(!(validateFocusRDFlds('focuslvsps','txtFldRDSpsLvAmt',RETSCREEN_LVYRSPS))) return; 
//		if(!(validateFocusRDFlds('focuslvfam','txtFldRDFamLvAmt',RETSCREEN_LVYRFAM))) return;
		
		
		
		return true;
	 
}
/*Mandatory Fields Tooltip*/ 
$("#txtFldRDSlfIntAge,#txtFldRDSpsIntAge,#selRDRetAgebasedOn,#txtFldRDYrsToRet," +
		"#txtFldRDSlfCoRetAge,#txtFldSpsRDCoRetAge," +
		"#txtFldRDSlfProjLfe,#txtFldRDSpsProjLfe,#txtFldRDSlfProlvyrs," +
		"#txtFldRDSpsProlvyrs,#txtFldRDFamProlvyrs,#txtFldRDSlfROI,#txtFldRDSpsROI,#txtFldRDFamROI," +
		"#txtFldRDInfRate,#txtFldRDBankIntRate,#txtFldRDSlfLvAmt,#txtFldRDSpsLvAmt," +
		"#txtFldRDFamLvAmt").on("change",function(){
			if(!isEmpty($(this).val())){
	$(this).removeClass("mandatoryFillFlds");
	$(this).qtip('disable');
	$(this).qtip('destroy',true);
			}
});
  

function clearAllInputsOfRPCFAnalysis(){
	$("table#assumptionsectiontbl").find("input,select").each(function(){ $(this).val(""); return; });
	$("table#livingneedrdtbl").find("input,select").each(function(){ $(this).val(""); return; });
	
	RDExptbl.rows().remove().draw();
	RDInctbl.rows().remove().draw();
	RDIncAsstbl.rows().remove().draw(); 
	
	$("#generateproExptbl").html("");
	$("#generateproIncometbl").html("");
	$("#generatetoamendincExp").html("");
	$("#generatetoamendincExpAccm").html("");
	  
	

	$("#RetirementValueBasedOn").val("").prop('readOnly',true);
	d3.select("#projectionOfExp").selectAll("svg").remove();
//	$("#projOfExpetbldiv").css("display","none"); 


//	 $("#projOfIncometblediv").css("display","none");
	$("#RetirementValueBasedOnInc").val("");
	d3.select("#projectionOfInc").selectAll("svg").remove();


//	$("#projInvRettbldiv").css("display","none"); 
	d3.select("#CashFlwprojectionOnRtmnt").selectAll("svg").remove();
	d3.select("#CashFlwprojectionOnRtmnt_ED").selectAll("svg").remove();
	d3.select("#CashFlwprojectionOnRtmntAccm").selectAll("svg").remove();
	d3.select("#CashFlwprojectionOnRtmntAccm_ED").selectAll("svg").remove();
	
}




//############################On Search data populate###################   
function retirement_cashflow(cont,contvalue){
 
		if(cont=="retSelfAge"){
			if(!isEmpty(contvalue)){$("input[name='txtFldRDSlfIntAge']").val(contvalue);}	 
		} 
		if(cont=="retSpsAge"){
			if(!isEmpty(contvalue)){$("input[name='txtFldRDSpsIntAge']").val(contvalue);}	 
		}
		if(cont=="retAgeBasedon"){
			if(!isEmpty(contvalue)){$("select[name='selRDRetAgebasedOn']").val(contvalue);}	 
		}
		if(cont=="retYrstoret"){
			if(!isEmpty(contvalue)){$("input[name='txtFldRDYrsToRet']").val(contvalue);}	 
		} 
		if(cont=="retSelfCoordinateage"){
			if(!isEmpty(contvalue)){$("input[name='txtFldRDSlfCoRetAge']").val(contvalue);}	 
		}
		if(cont=="retSpsCoordinateage"){
			if(!isEmpty(contvalue)){$("input[name='txtFldSpsRDCoRetAge']").val(contvalue);}	 
		}
		if(cont=="retSelfProjage"){
			if(!isEmpty(contvalue)){$("input[name='txtFldRDSlfProjLfe']").val(contvalue);}	 
		}
		if(cont=="retSpsProjage"){
			if(!isEmpty(contvalue)){$("input[name='txtFldRDSpsProjLfe']").val(contvalue);}	 
		}
		if(cont=="retSelfLivyrs"){
			if(!isEmpty(contvalue)){$("input[name='txtFldRDSlfProlvyrs']").val(contvalue);}	 
		} 
		if(cont=="retSpsLivyrs"){
			if(!isEmpty(contvalue)){$("input[name='txtFldRDSpsProlvyrs']").val(contvalue);}	 
		}
		if(cont=="retFamLivyrs"){
			if(!isEmpty(contvalue)){$("input[name='txtFldRDFamProlvyrs']").val(contvalue);}	 
		}
		if(cont=="retSelfProjroi"){
			if(!isEmpty(contvalue)){$("input[name='txtFldRDSlfROI']").val(contvalue);}	 
		}
		if(cont=="retSpsProjroi"){
			if(!isEmpty(contvalue)){$("input[name='txtFldRDSpsROI']").val(contvalue);}	 
		}
		if(cont=="retFamProjroi"){
			if(!isEmpty(contvalue)){$("input[name='txtFldRDFamROI']").val(contvalue);}	 
		}
		if(cont=="retSelfAnnlexpdamt"){
			if(!isEmpty(contvalue)){$("input[name='txtFldRDSlfLvAmt']").val(contvalue);}
		}
		if(cont=="retSpsAnnlexpdamt"){
			if(!isEmpty(contvalue)){$("input[name='txtFldRDSpsLvAmt']").val(contvalue);}
		}
		if(cont=="retFamAnnlexpdamt"){
			if(!isEmpty(contvalue)){$("input[name='txtFldRDFamLvAmt']").val(contvalue);}
		}
		
		assEffrate();
		cordretage();
		projlvyrs();
}

//############################On Change Assumption Section###################  
$("#retSelfAge").on("change",function(){
	if(!isEmpty($(this).val())){$("input[name='txtFldRDSlfIntAge']").val($(this).val());}
});  
$("#retSpsAge").on("change",function(){
	if(!isEmpty($(this).val())){$("input[name='txtFldRDSpsIntAge']").val($(this).val());}	  
});  
$("#retAgeBasedon").on("change",function(){
	if(!isEmpty($(this).val())){$("select[name='selRDRetAgebasedOn']").val($(this).val());}	  
});  	
$("#retYrstoret").on("change",function(){
	if(!isEmpty($(this).val())){$("input[name='txtFldRDYrsToRet']").val($(this).val());}  
});  	
$("#retSelfCoordinateage").on("change",function(){
	if(!isEmpty($(this).val())){$("input[name='txtFldRDSlfCoRetAge']").val($(this).val());}	  
});  
$("#retSpsCoordinateage").on("change",function(){
	if(!isEmpty($(this).val())){$("input[name='txtFldSpsRDCoRetAge']").val($(this).val());}	  
});  
$("#retSelfProjage").on("change",function(){
	if(!isEmpty($(this).val())){$("input[name='txtFldRDSlfProjLfe']").val($(this).val());}	 
});  	
$("#retSpsProjage").on("change",function(){
	if(!isEmpty($(this).val())){$("input[name='txtFldRDSpsProjLfe']").val($(this).val());}	   
});  	
$("#retSelfLivyrs").on("change",function(){
	if(!isEmpty($(this).val())){$("input[name='txtFldRDSlfProlvyrs']").val($(this).val());}	  
});   
$("#retSpsLivyrs").on("change",function(){
	if(!isEmpty($(this).val())){$("input[name='txtFldRDSpsProlvyrs']").val($(this).val());}	   
});  	
$("#retFamLivyrs").on("change",function(){
	if(!isEmpty($(this).val())){$("input[name='txtFldRDFamProlvyrs']").val($(this).val());}	  
});  	
$("#retSelfProjroi").on("change",function(){
	if(!isEmpty($(this).val())){$("input[name='txtFldRDSlfROI']").val($(this).val());	assEffrate();}	  
});  	
$("#retSpsProjroi").on("change",function(){
	if(!isEmpty($(this).val())){$("input[name='txtFldRDSpsROI']").val($(this).val());	assEffrate();}	  
});  	
$("#retFamProjroi").on("change",function(){
	if(!isEmpty($(this).val())){$("input[name='txtFldRDFamROI']").val($(this).val());	assEffrate();} 
});   

$("#retSelfAnnlexpdamt").on("change",function(){
	if(!isEmpty($(this).val())){$("input[name='txtFldRDSlfLvAmt']").val($(this).val());}	 
});
$("#retSpsAnnlexpdamt").on("change",function(){
	if(!isEmpty($(this).val())){$("input[name='txtFldRDSpsLvAmt']").val($(this).val());}	 
});
$("#retFamAnnlexpdamt").on("change",function(){
	if(!isEmpty($(this).val())){$("input[name='txtFldRDFamLvAmt']").val($(this).val());}	 
});

$("#txtFldRDSlfCoRetAge").on("change",function(){
	if(!isEmpty($(this).val())){$("input[name='txtFldRDSlfLvCorAge']").val($(this).val());}	 
	
});
$("#txtFldSpsRDCoRetAge").on("change",function(){
	if(!isEmpty($(this).val())){$("input[name='txtFldRDSpsLvCorAge']").val($(this).val());}	 
	
});
$("#txtFldFamRDCoRetAge").on("change",function(){
	if(!isEmpty($(this).val())){$("input[name='txtFldRDFamLvCorAge']").val($(this).val());}	 
	
});
$("#txtFldRDSlfProlvyrs").on("change",function(){
	if(!isEmpty($(this).val())){$("input[name='txtFldRDSlfLvProAge']").val($(this).val());}	 
	
});
$("#txtFldRDSpsProlvyrs").on("change",function(){
	if(!isEmpty($(this).val())){$("input[name='txtFldRDSpsLvProAge']").val($(this).val());}	 
	
});
$("#txtFldRDFamProlvyrs").on("change",function(){
	if(!isEmpty($(this).val())){$("input[name='txtFldRDFamLvProAge']").val($(this).val());}	 
	
});
$("#selDlgprojORFreq").on("change",function(){
	if(!rdFrequencyValidation($('#txtFldDlgprojORAgePayends'),$("#txtFldDlgprojOREslrate"),$(this)))return; 
}); 

$("#txtFldDlgprojORAgePaySts,#selDlgprojORAgeBsOn").on("change",function(){
	if(!rdStartAgeValidate($('#txtFldDlgprojORAgePaySts'),$('#selDlgprojORAgeBsOn')))return;
});
$("#txtFldDlgprojORAgePayends").on("change",function(){
	if(!rdEndAgeValidate($('#txtFldDlgprojORAgePaySts'),$(this)))return;
});

function rdFrequencyValidation(ageendid,eclaRate,elmid){
//	if(!isEmpty(elmid.val())){
		 if(elmid.val() == "SINGLE"){
			 ageendid.prop("disabled",true);
			 eclaRate.prop("disabled",true);
			 ageendid.val("");
			 eclaRate.val("");
			 
		 }else{
			 ageendid.prop("disabled",false);
			 eclaRate.prop("disabled",false);
		 }
//		}else{
//			ageendid.prop("disabled",false);
//			eclaRate.prop("disabled",false);
//		}	 
	return true;
}
function rdStartAgeValidate(elmId,agebased){
	var intretslfage=Number($("#retSelfAge").val()); 
	var intretspsage=Number($("#retSpsAge").val());
	
	var selftotAge=Number($("#retSelfProjage").val());     
	var ageBasedOn=isEmpty(agebased.val()) ? "" : agebased.val().toUpperCase(); 
	
	 
	if(ageBasedOn=="SELF"){
	if(!isEmpty(elmId.val())){
		/*if(elmId.val() <  intretslfage ){
			applyToastrAlert("Age Payment Starts should not be Less than Intended retirement Self Age ("+intretslfage+") ",elmId);
			elmId.val("");
			return false;
		}else if(elmId.val() > selftotAge){
			applyToastrAlert("Age Payment Starts should not be Greater than Projected life expectancy Self Age  ("+selftotAge+")",elmId);
			elmId.val("");
			return false;
		}*/
	}
	
	}else if(ageBasedOn=="SPOUSE"){
		if(!isEmpty(elmId.val())){
			/*if(elmId.val() <  intretspsage ){
				applyToastrAlert("Age Payment Starts should not be Less than Intended retirement Spouse Age ("+intretspsage+")  ",elmId);
				elmId.val("");
				return false;
			}else if(elmId.val() > selftotAge){
				applyToastrAlert("Age Payment Starts should not be Greater than Projected life expectancy Self Age  ("+selftotAge+")",elmId);
				elmId.val("");
				return false;
			}*/
		}
	}
	
	
	return true;
} 

function rdEndAgeValidate(startAgeid,elmId){
 
 
	var totAge=Number($("#retSelfProjage").val());  
	
	var startAge=Number(startAgeid.val());
	
	if(isEmpty(startAge)){
		if(!isEmpty(elmId.val())){
			applyErrorToastrAlert(AGE_PAYMENT_STARTS,startAgeid);
			elmId.val("");
			return false;
		}
	}
	  
 
	if(!isEmpty(elmId.val())){
		if(elmId.val() <  startAge){
			applyToastrAlert("Age Payment Ends should not be Less than Age Payment Start Age ("+startAge+") ",elmId);
			elmId.val("");
			return false;
		}else
		if( elmId.val() > totAge){
			applyToastrAlert("Age Payment Ends should not be Greater than Projected life expectancy(Age)(Self) ("+totAge+")",elmId);
			elmId.val("");
			return false;
		}
	}
	return true;
} 


$("#txtFldRDSlfROI,#txtFldRDInfRate").on("change",function(){
	assEffrate();
});

function assEffrate(){
	 var RDSlfROI=(!isEmpty($("#txtFldRDSlfROI").val()))?Number($("#txtFldRDSlfROI").val())/100 : 0;
	 var RDInfROI =(!isEmpty($("#txtFldRDInfRate").val()))?Number($("#txtFldRDInfRate").val())/100 : 0;
	 var manupulate=[(1+RDSlfROI)/(1+RDInfROI)]-1;
	 manupulate=manupulate*100;
	 $("input[name='txtFldRDAssRate']").val(manupulate.toPrecision(4));
}




 


/*Add Row Click */
$("#RDExpAddRow").on("click",function(){
	
//if(!validationRetirementPlnSection())return;
	$("#RDExpAddRow").parent().css("border","");
	$('#generatetoamendincExp').html("");
	$("#generatetoamendincExpAccm").html("");
//	d3.select("#CashFlwprojectionOnRtmnt").selectAll("svg").remove();
	
			RDothretClearFlds();
			showFIPAModel('ProjOfExp_Dialog','Other Payment to be made during Retirement');   
		loadAgeStartEnd('txtFldDlgORAgePaySts',$("#selDlgORAgeBsOn"));
			
	$('#ProjOfExp_Dialog').on('shown.bs.modal', function () {
//				$("#ProjOfExp_Dialog").find(".modal-footer").find("button:eq(0)").text("Add");
				$("#ProjOfExp_Dialog").find("input[id=txtFldDlgprojORtyofpay]").focus();
				$("#ProjOfExp_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
						if(!validatRDExpEditRowDetails())return;
					   	RDothretRdlyflds(INS_MODE);  
					   	getRDothretRows(null); 
						$('#ProjOfExp_Dialog').modal('hide'); 
				  });  
			});
			
			
});



/*Populate Data */
function getRDothretRows(dataset){
	
	
var cell0 = '<span></span>'+
'<input type="hidden" name="txtFlRDExpDelRowMode" readonly="true" value="'+INS_MODE+'" class="fipaMode"/><input type="hidden" name="txtFldprojORId">';
 
var cell1 = '<div class="checkbox checkbox-primary text-center"><input type="checkbox" name="raRDExpDelRowSelect"/><label>&nbsp;</label></div>'; 
var cell2 = '<input type="text" name="txtFldprojORtyofpay" class="form-control editable"   onmouseover="fipaTooltip(this);" disabled="true"/>'; 
var cell3 = '<select type="text" name="selprojORFreq" class="form-control editable"  onmouseover="fipaTooltip(this);" disabled="true"></select>';
var cell4 = '<input type="text" name="txtFldprojORAnlExp" class="form-control editable"   onmouseover="fipaTooltip(this);" disabled="true"/>';
var cell5 = '<input type="text" name="txtFldprojOREslrate" class="form-control editable"   onmouseover="fipaTooltip(this);" disabled="true"/>';
var cell6 = '<select type="text" name="selprojORAgeBsOn" class="form-control editable"   onmouseover="fipaTooltip(this);" disabled="true"></select>';
var cell7 = '<input type="text" name="txtFldprojORAgePaySts" class="form-control editable"  onmouseover="fipaTooltip(this);" disabled="true"/>';
var cell8 = '<input type="text" name="txtFldprojORAgePaySts" class="form-control editable"   onmouseover="fipaTooltip(this);" disabled="true"/>';
var cell9 ='<input type="text" name="txtFldprojORRemarks" class="form-control editable"  onmouseover="fipaTooltip(this);" disabled="true" />'+
'<input type="hidden" name="txtFldprojORCrtdBy"/><input type="hidden" name="txtFldprojORCrtdDate"/>'; 


RDExptbl.row.add( [cell0,cell1,cell2,cell3,cell4,cell5,cell6,cell7,cell8,cell9] ).draw( false );

var rowCount = $('#RDExptbl tbody tr:visible').length;	
rowCount =  (rowCount == 0) ? $('#RDExptbl tbody tr').length : rowCount;
var $lastRow = $("#RDExptbl tbody tr:last");	

$lastRow.find("td:first").find('span').text(rowCount); 

$lastRow.find("td:eq(1)").find("input:first").click(function(){
	selectSingleRow(this);
})

$lastRow.find("td:eq(1)").find("input:first").attr('id',"raRDExpDelRow"+$lastRow.index())
.parent().find('label').attr('for',"raRDExpDelRow"+$lastRow.index());

$lastRow.find("td:eq(2)").find('input:eq(0)').val($("#txtFldDlgprojORtyofpay").val());
$lastRow.find("td:eq(2)").find('input:eq(0)').on("change",function(){
	if(!isEmpty($(this).val()) ){getRDcfExpDets();}
});


var orfreq = $("#selDlgprojORFreq > option").clone();
$lastRow.find("td:eq(3)").find('select:eq(0)').append(orfreq);
$lastRow.find("td:eq(3)").find('select:eq(0)').val($("#selDlgprojORFreq").val());
$lastRow.find("td:eq(3)").find('select:eq(0)').on("change",function(){ 
	if(!rdFrequencyValidation($lastRow.find("td:eq(8)").find('input:eq(0)'),$lastRow.find("td:eq(5)").find('input:eq(0)'),$(this)))return; 
	if(!isEmpty($(this).val()) ){getRDcfExpDets();}
});


$lastRow.find("td:eq(4)").find('input:eq(0)').val($("#txtFldDlgprojORAnlExp").val());
$lastRow.find("td:eq(4)").find('input:eq(0)').addClass("applyEvntUsd");
$lastRow.find("td:eq(4)").find('input:eq(0)').on("change",function(){
	if(!isEmpty($(this).val()) ){getRDcfExpDets();}
});

$lastRow.find("td:eq(5)").find('input:eq(0)').val($("#txtFldDlgprojOREslrate").val());
$lastRow.find("td:eq(5)").find('input:eq(0)').addClass("applyEvntpCent3");
$lastRow.find("td:eq(5)").find('input:eq(0)').on("change",function(){
	if(!isEmpty($(this).val()) ){getRDcfExpDets();}
});


var oragebsed =  $("#selDlgprojORAgeBsOn > option").clone();
$lastRow.find("td:eq(6)").find('select:eq(0)').append(oragebsed);
$lastRow.find("td:eq(6)").find('select:eq(0)').val($("#selDlgprojORAgeBsOn").val());
$lastRow.find("td:eq(6)").find('select:eq(0)').on("change",function(){ 
//	if(!rdFrequencyValidation($lastRow.find("td:eq(6)").find('select:eq(0)'),$(this)))return; 
	if(!rdStartAgeValidate($lastRow.find("td:eq(7)").find('select:eq(0)'),$(this)))return;
	if(!isEmpty($(this).val()) ){getRDcfExpDets();}
});


 
$lastRow.find("td:eq(7)").find('input:eq(0)').val($("#txtFldDlgprojORAgePaySts").val());
$lastRow.find("td:eq(7)").find('input:eq(0)').addClass("applyEvntYrs");
$lastRow.find("td:eq(7)").find('input:eq(0)').on("change",function(){ 
	if(!rdStartAgeValidate($(this),$lastRow.find("td:eq(6)").find('select:eq(0)')))return; 
	if(!isEmpty($(this).val()) ){getRDcfExpDets();}
});

$lastRow.find("td:eq(8)").find('input:eq(0)').val($("#txtFldDlgprojORAgePayends").val());
$lastRow.find("td:eq(8)").find('input:eq(0)').addClass("applyEvntYrs");
$lastRow.find("td:eq(8)").find('input:eq(0)').on("change",function(){ 
	if(!rdEndAgeValidate($lastRow.find("td:eq(7)").find('input:eq(0)'),$(this)))return;
	if(!isEmpty($(this).val()) ){getRDcfExpDets();}
});


$lastRow.find("td:eq(9)").find('input:eq(0)').val($("#txtFldDlgprojORRemarks").val());
$lastRow.find("td:eq(9)").find('input:eq(0)').on("change",function(){  
	if(!isEmpty($(this).val()) ){getRDcfExpDets();}
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
	crudicons(this,'RDExptbl','SelRDExp','RDExpEditRow','RDExpDelRow');
			
});
//DHTML CRUD ICONS

$lastRow.find("td:eq(1)").find("input:first").click(function(){
	selectSingleRow(this);
//	DHTML CRUD ICONS
	crudicons(this,'RDExptbl','SelRDExp','RDExpEditRow','RDExpDelRow');
});

if(dataset == null){
//	$lastRow.addClass("newrow");
	$lastRow.addClass("rpothpaynew");
//	DHTML CRUD ICONS
	crudicons(null,'RDExptbl','SelRDExp','RDExpEditRow','RDExpDelRow');
}

if(!rdFrequencyValidation($lastRow.find("td:eq(8)").find('input:eq(0)'),$lastRow.find("td:eq(5)").find('input:eq(0)'),$lastRow.find("td:eq(3)").find('select:eq(0)')))return; 
getRDcfExpDets(); 

}


 
//Projected Expenditure Details on retirement  This analysis will appear as input of the expenditure is keyed in
var barchartALL = [];
function getRDcfExpDets(){
	

	var intretslfage=Number($("#txtFldRDSlfIntAge").val());
	var intretspsage=Number($("#txtFldRDSpsIntAge").val());
	var totAge=Number($("#txtFldRDSlfProjLfe").val());
	var slfroi=$("#txtFldRDSlfROI").val();
	var spsroi=$("#txtFldRDSlfROI").val();
	var agebasedon=$("#selRDRetAgebasedOn").val().toUpperCase();

	var slflvamt=Number($("#txtFldRDSlfLvAmt").val());
	var spslvamt=Number($("#txtFldRDSpsLvAmt").val());
	var famlvamt=Number($("#txtFldRDFamLvAmt").val());

	var inflrate=Number($("#txtFldRDInfRate").val())/100;
	var retAadj=Number(100);

	
	
	$("#generateproExptbl tbody").html("");
	
	d3.select("#CashFlwprojectionOnRtmnt").selectAll("svg").remove();
	d3.select("#CashFlwprojectionOnRtmnt_ED").selectAll("svg").remove();
	d3.select("#CashFlwprojectionOnRtmntAccm").selectAll("svg").remove();
	d3.select("#CashFlwprojectionOnRtmntAccm_ED").selectAll("svg").remove();
	

	var $rowCount = RDExptbl.rows().count();	
	var $lastRow = $("#RDExptbl tbody tr:last");
	var projOfExpdata = [];
	var barchart = [];
	barchartALL = [];
	
		if(!isEmpty(intretslfage) && !isEmpty(totAge)){
	
			var headlist=[];
			
			var dataHeader=[
	                {"data":"Self Age","title":"Self Age","width":"10px","className":"dt-head-center"},
	                {"data":"Spouse Age","title":"Spouse Age","width":"10px","className":"dt-head-center"},
	                {"data":"Self","title":"Self","width":"15px",render: $.fn.dataTable.render.number(',', '.', 0, '$'),"className":"dt-right"},
	                {"data":"Spouse","title":"Spouse","width":"15px",render: $.fn.dataTable.render.number(',', '.', 0, '$'),"className":"dt-right"},
	                {"data":"Family","title":"Family","width":"15px",render: $.fn.dataTable.render.number(',', '.', 0, '$'),"className":"dt-right"},
	                {"data":"Relative % adjustment","title":"Rel.%<br/>Adjustment","width":"20px","className":"dt-right"},
	                {"data":"Adjusted Family Expenditure ($)","title":"Adjusted&nbsp;<br/>Family&nbsp;<br/>Expenditure($)","width":"20px",render: $.fn.dataTable.render.number(',', '.', 0, '$'),"className":"dt-right"}
	                ];
	
//			var dupChk=[];
	
			if($rowCount > 0 ){
				
				$("#RDExptbl tbody tr").each(function(i,row){
					
					 var mode_r = $(this).find("td:first").find('input:eq(0)').val();
					 var crnthd = $(this).find("td:eq(2)").find("input:eq(0)").val(); 
					 
					 if(mode_r != "D"){

						 var my_item = {};
						 my_item.data=crnthd+"-"+i;
						 my_item.title=crnthd;//+"-"+i;
						 my_item.width="15px";
						 my_item.className="dt-right";
						 my_item.render= $.fn.dataTable.render.number(',', '.', 0, '$');
						 
//						 if(existHeader(dataHeader,crnthd)){ 
////							 var hrflg=crnthd;
//							 
//						 }else{							 
//							 my_item.title=crnthd+"-"+i;
//						 }					  

						 headlist.push(crnthd+"-"+i);
						 dataHeader.push(my_item); 
//						 dupChk.push(crnthd+"-"+i);						 
					 }
			
				});
				
			}
			
			
			
	 
			dataHeader.push({"data":"Net Annual Expenditure","title":"Net <br/> Annual <br/> Expenditure($)","width":"15px",render: $.fn.dataTable.render.number(',', '.', 0, '$'),"className":"dt-right"});
			dataHeader.push({"data":"Total Accumulation Expenditure","title":"Total <br/> Accumulation <br/> Expenditure($)","width":"15px",render: $.fn.dataTable.render.number(',', '.', 0, '$'),"className":"dt-right"});
	
//			console.log("1.dataHeader ---->"+dataHeader);
//			console.log("1.headlist.length ------>"+headlist.length);
			
//			console.log(headlist+"\n"+dataHeader);
	
			var dataset=[];
	
			$("#RetirementValueBasedOn").val(agebasedon).prop("readonly",true);
	  
			var count=0;var oldval=0;
	
			if($rowCount == 0){
			//	$("#projOfExpetbldiv").css("display","none"); 
				d3.select("#projectionOfExp").selectAll("svg").remove();
			}
	
			if(intretslfage > 0 && totAge >= intretslfage){
				
//				if($rowCount > 0){

					var spouseage=(isEmpty(intretspsage) || intretspsage == 0 )? "" : Number(intretspsage);
		
					for(var i=intretslfage;i<=totAge;i++){ 
		
						var arrlist={};
						arrlist["Self Age"]=i+'<input type="hidden" value="'+(count+1)+'"/>'; //self age
						arrlist["Spouse Age"]=isEmpty(spouseage) ? "" : Number(spouseage); //spouse age
				
						//self
						if(i==intretslfage){ 
							arrlist["Self"]= roundNumber(slflvamt); 
							arrlist["Spouse"]=roundNumber(spslvamt); 
							arrlist["Family"]=roundNumber(famlvamt); 
						}else{ 
							
							slflvamt=slflvamt*(1+inflrate);
							arrlist["Self"]=roundNumber(slflvamt);
							
							spslvamt=spslvamt*(1+inflrate);
							arrlist["Spouse"]=roundNumber(spslvamt);
							
							famlvamt=famlvamt*(1+inflrate);
							arrlist["Family"]=roundNumber(famlvamt);  
							
						}	
						  
						//rel adj
						arrlist["Relative % adjustment"]=retAadj; 
						
						//adj per exp
						var adjperexp = (slflvamt+spslvamt+famlvamt)*(retAadj/100);
						arrlist["Adjusted Family Expenditure ($)"] = Math.round(adjperexp);
//						console.log("--------->adjperexp"+adjperexp);
				
						var totAnlExp=0;
						
						if(headlist.length > 0){
							
							$.each(headlist,function(j,hdr){
								var arrHdr=''; 
								$("#RDExptbl tbody tr").each(function(count,value){
									var mode_r = $(this).find("td:first").find('input:eq(0)').val();
									var $desclt 	  = $(this).find("td:eq(2)").find("input:eq(0)").val();
									var $freqlt 	  = $(this).find("td:eq(3)").find("select:eq(0)").val();
									var $anlexplt	  = (isEmpty($(this).find("td:eq(4)").find("input:eq(0)").val())) ? Number(0) : Number($(this).find("td:eq(4)").find("input:eq(0)").val());
									var $esclratelt  = (isEmpty($(this).find("td:eq(5)").find("input:eq(0)").val())) ? Number(0) : Number($(this).find("td:eq(5)").find("input:eq(0)").val());
									var $agebasedlt  = $(this).find("td:eq(6)").find("select:eq(0)").val(); 
									var $startslfagelt = Number($(this).find("td:eq(7)").find("input:eq(0)").val());  
									var $endagelt   = (isEmpty($(this).find("td:eq(8)").find("input:eq(0)").val())) ? Number(totAge) : Number($(this).find("td:eq(8)").find("input:eq(0)").val());
							 
									if(mode_r  != "D"){
								 
										var $noofyrslt=Math.abs($startslfagelt-$endagelt);
										var $startspsagelt = intretslfage-intretspsage;
										$startspsagelt=$startspsagelt+intretslfage;
//										console.log("hdr----------------->"+hdr);
								   
//										var test=hdr in arrlist;
//										var hdrTest=hdr;
//										arrHdr=(test)?(hdrTest+"-"+count):hdr;
										arrHdr =(hdr);//+ "-" + count
//										console.log("arrHdr----------------->"+arrHdr+",$desclt-->"+($desclt+"-"+count));
				 					
								 
										if(($desclt+"-"+count) == arrHdr){
											if($agebasedlt == "SELF"){ 
												if($freqlt == "REGULAR"){
													if(i >= $startslfagelt &&  (i<=$endagelt)){ 
														if(i==$startslfagelt){ 
															arrlist[arrHdr]=(isNaN($anlexplt)) ? 0 : roundNumber(Number($anlexplt));  
														}else{
															var olddata=dataset[dataset.length-1][arrHdr]; 
															olddata*=(1+($esclratelt/100));
															arrlist[arrHdr]=(isNaN(olddata)) ? 0 : roundNumber(Number(olddata));  
														}													
													}else{
														arrlist[arrHdr]=''; 
													}
												}else if($freqlt == "SINGLE"){
													if(i == $startslfagelt){
														if(i==$startslfagelt){ 
															arrlist[arrHdr]=(isNaN($anlexplt)) ? 0 : roundNumber(Number($anlexplt));   
														}else{   
															var olddata=dataset[dataset.length-1][arrHdr]; 
															olddata*=(1+($esclratelt/100));
															arrlist[arrHdr]=(isNaN(olddata)) ? 0 : roundNumber(Number(olddata));  
														}											 
													}else{
														arrlist[hdr]=''; 
													}
												}
											}else if($agebasedlt == "SPOUSE"){
												if($freqlt == "REGULAR"){
													if(spouseage >= $startslfagelt &&  (spouseage<=$endagelt)){ 
														if($startslfagelt==spouseage){ 
															arrlist[arrHdr]=(isNaN($anlexplt)) ? 0 : roundNumber(Number($anlexplt));   
														}else{   
															var olddata=dataset[dataset.length-1][arrHdr]; 
															olddata*=(1+($esclratelt/100));
															arrlist[arrHdr]=(isNaN(olddata)) ? 0 : roundNumber(Number(olddata));  
														}											
													}else{
														arrlist[arrHdr]=''; 
													}											
												}else if($freqlt == "SINGLE"){
													if(spouseage == $startslfagelt){ 
														if($startslfagelt==spouseage){ 
															arrlist[arrHdr]=(isNaN($anlexplt)) ? 0 : roundNumber(Number($anlexplt));   
														}else{   
															var olddata=dataset[dataset.length-1][arrHdr]; 
															olddata*=(1+($esclratelt/100));
															arrlist[arrHdr]=(isNaN(olddata)) ? 0 : roundNumber(Number(olddata));  
														} 
													}else{
														arrlist[arrHdr]=''; 
													}
												}
											}
										} 							 
									}
								});
								totAnlExp=Number(totAnlExp)+Number(arrlist[arrHdr]) ;
							});
							
						}else{
							totAnlExp=Number(totAnlExp)+ Math.round(adjperexp);
						}
						
						
//						console.log("totAnlExp----------->"+totAnlExp);
						
				
						var adj = arrlist["Adjusted Family Expenditure ($)"];
						var annalexp =  isNaN(totAnlExp) ? 0 : (headlist.length > 0 ? roundNumber( Number(adj) + Number(totAnlExp) ): roundNumber(Number(totAnlExp))); 
				
						arrlist["Net Annual Expenditure"]= annalexp;
						var accmlexp =0;				
				
						if(i==intretslfage){ 
//							console.log("1.first itetation----------->");
							arrlist["Total Accumulation Expenditure"]= annalexp; //(isNaN(totAnlExp)) ? 0 : roundNumber(Number(adj)+Number(totAnlExp));  
							oldval= annalexp;//Number(adj)+totAnlExp;
							accmlexp = oldval;
						}else{
//							console.log("1.second itetation----------->");
							arrlist["Total Accumulation Expenditure"]=(isNaN(annalexp + oldval)) ? 0 : roundNumber( Number(annalexp) + Number(oldval) );
							oldval = Number(annalexp) + Number(oldval);
							accmlexp = oldval;
						}				
						dataset.push(arrlist);
				
						(isEmpty(intretspsage) || intretspsage == 0 )? "" : spouseage++;
						count++;
				
						projOfExpdata.push({ctCostlineAge:i, ctCostlineAmt : oldval , ctCostbarAmt : totAnlExp });
						barchart.push({"Age":i,"Annual Expenditure":annalexp,"Accumlation Expenditure":accmlexp});
						barchartALL.push({"Age":i,"AnnualExpenditure":annalexp,"AccumlationExpenditure":accmlexp});
						
						loadprojectionOfExpDynamicChart();
					}
	
					if ($.fn.DataTable.isDataTable( '#generateproExptbl') ) {
						rdcflwTbl.destroy();
						$('#generateproExptbl').html("");
					}
	
//					var lastcol =headlist.length;
	
					rdcflwTbl=$('#generateproExptbl').DataTable( { 
						language: { "decimal": ".","thousands": ","},
						destroy: true,
						responsive: false,         
						ordering: false,
						searching: false,     
						scrollY:  "50vh",
						scrollX: "auto",
						scroller: true,
						scrollCollapse:true,
						paging:false, 
						filter:false,
						dom: '<<"top" ip>flt>', 
						"columns": dataHeader,  
						data:dataset,   
						columnDefs: [{"className": "dt-head-center","targets": "_all","orderable": false,"searchable": false}],
						fixedColumns:   {leftColumns: 2 ,rightColumns: 2},
						fnDrawCallback: function(oSettings) {	
							if(this.fnSettings().bSorted){
								reOrderVisibleRows('generateproExptbl');  
							}	    		 
						}    	
					}).draw();
	
					if(projOfExpdata.length>0){
						
						$("#rpcfana_expndchart").removeClass("hidden");
		
						var expchart = c3.generate({
							bindto: '#projectionOfExp',
							title: {
								show: false,
								text: 'Projection of Expenditure',
								position: 'top-center',  
								padding: { top: 20, right: 20, bottom: 40, left: 50}
							},
							grid: { x: { show: true },  y: { show: true } },
							zoom: {  enabled: true  },
							legend: { position: 'right'},
							data: {
								json: barchart,
								keys :{x: 'Age',value: ['Annual Expenditure', 'Accumlation Expenditure']},
								type: 'bar',
								colors: {'Annual Expenditure': function(d) { return d.value < 0 ? 'red' : '#97BC62FF'; },
										 'Accumlation Expenditure': function(d) { return d.value < 0 ? 'red' : '#EA738DFF'; }
										}
								},
							axis: {	 x : { label: 'Age'}, 
									 y : { label: 'Expenditure Amount', tick: { format: d3.format("$,") }, show : true }
							},
							tooltip: {
									format: {
										title: function (d) { return 'Expenditure at Age ' + d; },
										value: function (value, ratio, id) {
											var format =  d3.format('$,');
											return format(value);
											}//value: d3.format(',') // apply this format to both y and y2
									}
							},
							size: {   height: 450, width: 890 }		    
						});
						
						d3.selectAll('#projectionOfExp *').each(function (e) {
							if (d3.select(this).style('fill-opacity') == 0)
								d3.select(this).style('opacity', 0);
								d3.select(this).style('fill', d3.select(this).style('fill'));
								d3.select(this).style('stroke', d3.select(this).style('stroke'));
						});
						
						d3.selectAll('#projectionOfExp text').each(function (e) {
							d3.select(this).style('font-size', d3.select(this).style('font-size'));
							d3.select(this).style('font-family', d3.select(this).style('font-family'));
						});
	
//		 html2canvas does not recognize dy
						d3.selectAll('#projectionOfExp tspan').each(function (e) {
							// convert em to px
							if (d3.select(this).attr('dy').indexOf('em') !== -1 && d3.select(this).style('font-size').indexOf('px') !== -1) {
								d3.select(this).attr('dy', d3.select(this).attr('dy').replace('em', '') * d3.select(this).style('font-size').replace('px', ''));
							}
							
							if (d3.select(this).attr('dy') != 0) {
								d3.select(this.parentNode).attr('y', Number(d3.select(this.parentNode).attr('y')) + Number(d3.select(this).attr('dy')));
								d3.select(this).attr('dy', 0);
							}
						});
		
					}else{
//						??
					}	
//				}
			}
		}
	
		var len = Number($("#generateproExptbl thead tr").find("th").length) - 1;
		
//	$("#generateproExptbl_wrapper").find(".dataTables_scrollHeadInner").find("table thead tr").css("max-height","2em");
	
		$("#generateproExptbl_wrapper").css("width","auto");
		$("#generateproExptbl_wrapper").find(".dataTables_scrollHeadInner").find("table thead tr").find("th").css("text-align","center");
		$("#generateproExptbl_wrapper").find(".dataTables_scrollHeadInner").find("table thead tr").find("th").addClass("shortlens");	
		
		$("#generateproExptbl_wrapper").find(".dataTables_scrollHeadInner").find("table thead tr").find("th:eq('"+len+"')").css("background","#23C6C8")
																														   .css("color","white");	
		$("#generateproExptbl_wrapper").find(".dataTables_scrollHeadInner").find("table thead tr").find("th:eq('"+(Number(len)-1)+"')").css("background","#23C6C8")
																																	   .css("color","white");
	
		$("#generateproExptbl_wrapper").find(".dataTables_scrollHeadInner").find("table thead tr").find("th:eq(6)").css("background-color","#23C6C8").css("color","white");
	
	
		$("#generateproExptbl_wrapper").find(".dataTables_scrollBody").find("table tbody tr").each(function(){
			$(this).find("td:eq(0)").css("text-align","center");
			$(this).find("td:eq(1)").css("text-align","center");
//			$(this).find("td:eq(5)").css("width","9%");
		});
	

	
		$("#generateproExptbl_wrapper").find(".dataTables_scrollBody").find("table tbody tr").find("td:eq('"+len+"')").css("background-color","rgb(39, 220, 222)").css("color","#FFF").css("border","1px solid #FAFDFF").css("font-weight","bold");
		$("#generateproExptbl_wrapper").find(".dataTables_scrollBody").find("table tbody tr").find("td:eq('"+(Number(len)-1)+"')").css("background-color","rgb(39, 220, 222)").css("color","#FFF").css("border","1px solid #FAFDFF").css("font-weight","bold");
		$("#generateproExptbl_wrapper").find(".dataTables_scrollBody").find("table tbody tr").find("td:eq(6)").css("background-color","rgb(39, 220, 222)").css("color","#FFF").css("border","1px solid #FAFDFF").css("font-weight","bold");
	
	 
		/*Remove Special Character from Headers*/
		$("#generateproExptbl_wrapper").find(".dataTables_scrollHeadInner table thead tr:eq(0) th").each(function(i,row){
			var rowonehrtxt=$(this).text(); 
			if(rowonehrtxt.indexOf('-') > -1){
				var split=rowonehrtxt.split("-")[0]; 
				$(this).text("");
				$(this).text(split.substr(0,5)+"<sup>**</sup>");
				$(this).prop("title",split);
			}
			
			$(this).text("");
			$(this).html(rowonehrtxt);
			$(this).prop("title",rowonehrtxt);
			$(this).addClass("shortlen");
		});
	 
	 
		showLoader();
		setTimeout(function(){
			getRDIncomeAndExp();
			hideLoader();
		}, 1500);	 
}

//barchartALL.push({"Age":i,"Annual Expenditure":annalexp,"Accumlation Expenditure":accmlexp});
function loadprojectionOfExpDynamicChart(){       
    var projectionOfExpDiv = document.getElementById("projectionOfExpDiv");
        projectionOfExpDiv.innerHTML="";
        projectionOfExpDiv.innerHTML="<canvas id='projectionOfExpcanvas' class=''></canvas>";
    var chart;
    var config;
     
    //Filter data here based on the condition
    
    var projOfExpcanvas = document.getElementById("projectionOfExpcanvas");
    var projectionOfExpchartType;



   
    var labels = barchartALL.map(function (e) {
        return e.Age;
    });
    var data1 = barchartALL.map(function (e) {
        return e.AnnualExpenditure;
    });
    var data2 = barchartALL.map(function (e) {
        return e.AccumlationExpenditure;
    });


    var randomColorGenerator = () => {
        return '#' + (Math.random().toString(16) + '0000000').slice(2, 8);
    };

    len = data1.length;
    var bgColors = function (len) {
        var bgArray = new Array(len);
        for (var j = 0; j < len; j++) {
            bgArray[j] = randomColorGenerator();
        }
        return bgArray;
    }

    //Line chart

    Chart.defaults.LineWithLine = Chart.defaults.line;
    Chart.controllers.LineWithLine = Chart.controllers.line.extend({
        draw: function (ease) {
            Chart.controllers.line.prototype.draw.call(this, ease);

            if (this.chart.tooltip._active && this.chart.tooltip._active.length) {
                var activePoint = this.chart.tooltip._active[0],
                ctx = this.chart.ctx,
                    x = activePoint.tooltipPosition().x,
                    topY = this.chart.legend.bottom,
                    bottomY = this.chart.chartArea.bottom;

                // draw line
                ctx.save();
                ctx.beginPath();
                ctx.moveTo(x, topY);
                ctx.lineTo(x, bottomY);
                ctx.lineWidth = 1;
                ctx.strokeStyle = '#4aa2eb';
                ctx.stroke();
                ctx.restore();
            }
        }
    });
    

    projectionOfExpchartType = document.getElementById("projectionOfExpchartType").value;

         //BarChart

         if (projectionOfExpchartType == "Bar") {
            var fund1data = {
                label: 'Annual Expenditure',
                data: data1,
                categoryPercentage: 0.5,
                barPercentage: 1,
                backgroundColor: 'rgba(0, 99, 132, 0.9)',
                hoverBackgroundColor: 'rgba(0, 99, 132, 0.6)',
                borderWidth: 0,
                yAxisID: "y-axis-ExpenditureAmount"
            };


            var fund2data = {
                label: 'Accumlation Expenditure',
                data: data2,
                categoryPercentage: 0.5,
                barPercentage: 1,
                backgroundColor: 'rgba(99, 132, 0, 0.9)',
                hoverBackgroundColor: 'rgba(99, 132, 0, 0.6)',
                borderWidth: 0,
                yAxisID: "y-axis-ExpenditureAmount"
            };

            var fundData = {
                labels: labels,
                datasets: [fund1data, fund2data],
                //datasets: [fund1data],

            };

            config = {
                type: 'bar',
                data: fundData,
                options: {
                	 
                    tooltips: {
                        mode: 'label',
                        callbacks: {
                        	 title: function(tooltipItem, data) {
                                 return 'Age: ' + tooltipItem[0].xLabel ;
                                 },
                            label: (tooltipItem, data) => {
                                return data.datasets[tooltipItem.datasetIndex].label + ": $ " + tooltipItem.yLabel;
                            },
                            footer: (tooltipItems, data) => {
                                let total = tooltipItems.reduce((a, e) => a + parseFloat(e.yLabel), 0);
                                return 'Total: $ ' + total.toFixed(3);
                            }
                        }
                    },
                    plugins: {
                        labels: false
                },
                    scales: {

                        xAxes: [{
                            display: true,
                            scaleLabel: {
                                display: true,
                                labelString: 'Age'
                            }, ticks: {

                                minRotation: 0,
                                maxRotation: 80,
                            },
                            //  stacked:true//Stacked bar chart

                        }],
                        yAxes: [{
                            display: true,
                            scaleLabel: {
                                display: true,
                                labelString: 'ExpenditureAmount'
                            },
                            
                            id: "y-axis-ExpenditureAmount",
                            ticks: {
                                beginAtZero: true,
                                 callback: function(value, index, values) {
                                    return '$ ' + value;
                                }
                            }
                            // stacked:true//Stacked bar chart
                        } 
                        ]
                    },
                    pan: {
                        enabled: true,
                        mode: "x",
                        speed: 10,
                        threshold: 10,
                        onPan: function ({ chart }) { projectionOfExpcanvas.style.cursor = "grabbing"; },
                        onPanComplete: function ({ chart }) { projectionOfExpcanvas.style.cursor = "default"; }
                    },
                    zoom: {
                        enabled: true,
                        drag: false,
                        mode: "x",
                        limits: {
                            max: 10,
                            min: 0.5
                        },
                        onZoom: function ({ chart }) { projectionOfExpcanvas.style.cursor = "grabbing"; },
                        onZoomComplete: function ({ chart }) { projectionOfExpcanvas.style.cursor = "default"; }


                    }
                }
            };

        }
        //line chart
        if (projectionOfExpchartType == "Line") {
            config = {
                type: 'LineWithLine',
                data: {
                    labels: labels,
                    datasets: [
                    {
                        label: 'Annual Expenditure',
                        backgroundColor: window.chartColors.red,
                        borderColor: window.chartColors.red,
                        data: data1,
                        fill: false,
                        lineTension: 0,
                    }, {
                        label: 'Accumlation Expenditure',
                        fill: false,
                        backgroundColor: window.chartColors.blue,
                        borderColor: window.chartColors.blue,
                        data: data2,
                        lineTension: 0,
                    }]
                },
                options: {
                    responsive: true,
                    title: {
                        display: true,
                        text: ' '
                    },
                    tooltips: {
                        mode: 'index',
                        callbacks: {
                        	 title: function(tooltipItem, data) {
                                 return 'Age: ' + tooltipItem[0].xLabel ;
                                 },
                            label: (tooltipItem, data) => {
                                return data.datasets[tooltipItem.datasetIndex].label + ": $ " + tooltipItem.yLabel;
                            },
                            footer: (tooltipItems, data) => {
                                let total = tooltipItems.reduce((a, e) => a + parseFloat(e.yLabel), 0);
                                return 'Total: $ ' + total.toFixed(3);
                            }
                        },
                        intersect: false

                    },
                    plugins: {
                        labels: false
                },
                    hover: {
                        mode: 'index',
                        intersect: true
                    },
                    scales: {
                        xAxes: [{
                            display: true,
                            scaleLabel: {
                                display: true,
                                labelString: 'Age'
                            },
                            ticks: {
                                minRotation: 0,
                                maxRotation: 80,
                            }
                        }],
                        yAxes: [{
                            display: true,
                            scaleLabel: {
                                display: true,
                                labelString: 'Expenditure Amount'
                            },
                            id: "y-axis-ExpenditureAmount",
                            ticks: {
                                beginAtZero: true,
                                 callback: function(value, index, values) {
                                    return '$ ' + value;
                                }
                            }
                        }]
                    },
                    pan: {
                        enabled: true,
                        mode: "xy",
                        speed: 10,
                        threshold: 10,
                        onPan: function ({ chart }) { projectionOfExpcanvas.style.cursor = "grabbing"; },
                        onPanComplete: function ({ chart }) { projectionOfExpcanvas.style.cursor = "default"; }
                    },
                    zoom: {
                        enabled: true,
                        drag: false,
                        mode: "x",
                        limits: {
                            max: 10,
                            min: 0.5
                        },
                        sensitivity: 3,
                        speed: 0.1,
                        threshold: 2,
                        onZoom: function ({ chart }) { projectionOfExpcanvas.style.cursor = "grabbing"; },
                        onZoomComplete: function ({ chart }) { projectionOfExpcanvas.style.cursor = "default"; }

                    }
                }
            };
        }
        //Pie chart

        if (projectionOfExpchartType == "Pie") {

            config = {
                type: 'pie',
                data: {
                    datasets: [{
                        data: data1,
                        backgroundColor: bgColors(len),
                        label: 'Annual Expenditure'
                    },{
                        data: data2,
                        backgroundColor: bgColor,
                        borderWidth: 0.5,
                        label: 'Accumlation Expenditure'

                    }],
                    labels: labels
                },
                options: {
                    responsive: true,
                    tooltips: {
                        callbacks: {
                        	
                            label: function (item, data) {
                                return data.datasets[item.datasetIndex].label + ": " + data.labels[item.index] + ": " + data.datasets[item.datasetIndex].data[item.index];
                            }
                        }
                    },
                    plugins: {
                        labels: false
                }
                },


            };

        }
        //Donut chart
        if (projectionOfExpchartType == "Doughnut") {

            var bgColor = bgColors(len);
            config = {
                type: 'doughnut',
                data: {
                    datasets: [{
                        data: data1,
                        backgroundColor: bgColor,
                        borderWidth: 0.5,
                        label: 'Annual Expenditure'

                    }, {
                        data: data2,
                        backgroundColor: bgColor,
                        borderWidth: 0.5,
                        label: 'Accumlation Expenditure'

                    }],
                    labels: labels
                },
                options: {
                    responsive: true,
                    legend: {
                        position: 'bottom',
                    },
                    title: {
                        display: true,
                        text: 'Expenditure Amount'
                    },
                    animation: {
                        animateScale: true,
                        animateRotate: true
                    },
                    tooltips: {
                        callbacks: {
                            label: function (item, data) {
                                return data.datasets[item.datasetIndex].label + ": " + data.labels[item.index] + ": " + data.datasets[item.datasetIndex].data[item.index];
                            }
                        }
                    },
                    plugins: {
                        labels: false
                }
                }
            };
        }
         
        window.resetZoom = function () {
            chart.resetZoom();
        };

        
        var ctx = document.getElementById('projectionOfExpcanvas').getContext('2d');
        chart = new Chart(ctx, config);
        chart.destroy();
        
        chart = new Chart(ctx, config);

        let datasetLength = config.data.datasets.length;

         var bgColor;
        if (config.type == "doughnut" || config.type == "pie") {
            bgColor = bgColors(data1.length);
        }
        config.data.datasets[0].data = data1;
        if (bgColor != undefined) {
            config.data.datasets[0].backgroundColor = bgColor;
        }

        if (datasetLength == 2) {
            let  data2 = barchartALL.map(function (e) {
               return e.AccumlationExpenditure;
            });

            config.data.datasets[1].data = data2;
            if (bgColor != undefined) {
                config.data.datasets[1].backgroundColor = bgColor;
            }
        }

        config.data.labels = labels;
        chart.update();
        chart.resetZoom();
        

}


//DHTML SELECT ALL
function SelAllRDExp(obj){
	
	if($(obj).is(":checked")){
		
		$('#RDExptbl tbody tr').find("td:eq(1)").find("input[type=checkbox]").prop("checked",true);
		
		$("#RDExpDelRow").attr("disabled",false);
		$('#RDExptbl tbody tr').addClass("selected");
		
		var $rowCount = $('#RDExptbl tbody tr').length;
		
		if($rowCount == 0){
			$(obj).prop("checked",false);
			/*$("#RDExpEditRow").attr("disabled",true);
			$("#RDExpDelRow").attr("disabled",true);*/
		}else if($rowCount == 1){
			$("#RDExpEditRow").attr("disabled",false);
			$("#RDExpDelRow").attr("disabled",false);
		}else if($rowCount > 1){
			/*$("#RDExpEditRow").attr("disabled",true);*/
			$("#RDExpDelRow").attr("disabled",false);
		}
		
	}else{
		
		$('#RDExptbl tbody tr').find("td:eq(1)").find("input[type=checkbox]").prop("checked",false);
		
		$('#RDExptbl tbody tr').removeClass("selected");
		
		/*$("#RDExpEditRow").attr("disabled",true);
		$("#RDExpDelRow").attr("disabled",true);*/
		
	}
}
 
/*Edit Row Click */
$("#RDExpEditRow").on("click",function(){ 
	var isOneRowSelected=0;
	var $rowCount = $('#RDExptbl tbody tr').length;	
	var $lastRow = $("#RDExptbl tbody tr:last");	
	
	if($rowCount<1){
		applyToastrAlert("Insert rows before edit/view");
		return;
	} 
	$("#RDExptbl tbody").find('input[name="raRDExpDelRowSelect"]').each(function(){ //Checkbox selection
		var $curElm=$(this);
		if($curElm.is(":checked")){ 
			isOneRowSelected++;
		}
	});
	
	
	if(isOneRowSelected > 1){ 
		applyToastrAlert("More than one rows selected.Select one row only");
		return;
	}
	
	$("#RDExptbl tbody").find('input[name="raRDExpDelRowSelect"]').each(function(){ //Checkbox selection
		var $curElm=$(this);
		if($curElm.is(":checked")){ 
			var $row = $curElm.parents("tr");                                    
			var $mode = $curElm.parents("tr").find("td:first").find('input:eq(0)').val(); 
			$curElm.prop("checked",false);
	     	 $curElm.parents("tr").removeClass('selected');
	     	 
			if(($mode == INS_MODE) || ($mode == UPD_MODE) ){
				 var $RowId=$row.index();
				 $curElm.parents("tr").find("td:first").find('input:eq(0)').val($mode);  
				 	RDothretRdlyflds($mode);
					RDothretfilldlgval($row); 
					
					if(!rdFrequencyValidation($('#txtFldDlgprojORAgePayends'),$("#txtFldDlgprojOREslrate"),$("#selDlgprojORFreq")))return;
					
					showFIPAModel('ProjOfExp_Dialog','Other Payment to be made during Retirement');
					
					loadAgeStartEnd('txtFldDlgORAgePaySts',$("#selDlgORAgeBsOn"));
					
					$("#ProjOfExp_Dialog").find(".modal-footer").find("button:eq(0)").removeClass("hidden");//instant save added line
						
					$('#ProjOfExp_Dialog').on('shown.bs.modal', function () {
//						$("#ProjOfExp_Dialog").find(".modal-footer").find("button:eq(0)").text("Edit");
						$("#ProjOfExp_Dialog").find("input[id=txtFldDlgprojORtyofpay]").focus();
						$("#ProjOfExp_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
							 if(!validatRDExpEditRowDetails())return; 
					     		if(!isEmpty($RowId) && !($RowId==undefined)){  
					     			RDothretfilldomval($RowId,$row); 
					     		}  
					     		if(!rdFrequencyValidation($row.find("td:eq(8)").find('input:eq(0)'),$row.find("td:eq(5)").find('input:eq(0)'),$row.find("td:eq(3)").find('select:eq(0)')))return; 
					     		getRDcfExpDets();
								$('#ProjOfExp_Dialog').modal('hide'); 
								RDothretClearFlds();
								crudicons(null,'RDExptbl','SelRDExp','RDExpEditRow','RDExpDelRow');
							
						});
						
						
						$("#ProjOfExp_Dialog").find(".modal-footer").find("button:eq(1)").on("click",function(){
							crudicons(null,'RDExptbl','SelRDExp','RDExpEditRow','RDExpDelRow');
						})
						
					});
					 
			}  
		
		} 
	});
	
	 
	if(isOneRowSelected==0){
		applyToastrAlert("No Rows Selected");
		return;
	}

});


/*View Row Click */
$("#RDExpViewRow").on("click",function(){
	var isOneRowSelected=0;
	var $rowCount = $('#RDExptbl tbody tr').length;	
	var $lastRow = $("#RDExptbl tbody tr:last");	
	
	if($rowCount<1){
		applyToastrAlert("Insert rows before edit/view");
		return;
	} 
	$("#RDExptbl tbody").find('input[name="raRDExpDelRowSelect"]').each(function(){ //Checkbox selection
		var $curElm=$(this);
		if($curElm.is(":checked")){ 
			isOneRowSelected++;
		}
	});
	
	
	if(isOneRowSelected > 1){ 
		applyToastrAlert("More than one rows selected.Select one row only");
		return;
	}
	
	$("#RDExptbl tbody").find('input[name="raRDExpDelRowSelect"]').each(function(){ //Checkbox selection
		var $curElm=$(this);
		if($curElm.is(":checked")){ 
			var $row = $curElm.parents("tr");                                    
			var $mode = $curElm.parents("tr").find("td:first").find('input:eq(0)').val(); 
			$curElm.prop("checked",false);
	     	 $curElm.parents("tr").removeClass('selected');
	     	 
			if(($mode == INS_MODE) || ($mode == UPD_MODE) ){
				 var $RowId=$row.index();
				 $curElm.parents("tr").find("td:first").find('input:eq(0)').val($mode);  
				 	RDothretRdlyflds($mode);
					RDothretfilldlgval($row); 
					if(!rdFrequencyValidation($('#txtFldDlgprojORAgePayends'),$("#txtFldDlgprojOREslrate"),$("#selDlgprojORFreq")))return; 
					showFIPAModel('ProjOfExp_Dialog','Other Payment to be made during Retirement');  
					loadAgeStartEnd('txtFldDlgORAgePaySts',$("#selDlgORAgeBsOn"));
					$("#ProjOfExp_Dialog").find(".modal-footer").find("button:eq(0)").removeClass("hidden");//instant save added line
					
					$('#ProjOfExp_Dialog').on('shown.bs.modal', function () {
//						$("#ProjOfExp_Dialog").find(".modal-footer").find("button:eq(0)").text("Edit");
						$("#ProjOfExp_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
							 if(!validatRDExpEditRowDetails())return; 
					     		if(!isEmpty($RowId) && !($RowId==undefined)){  
					     			RDothretfilldomval($RowId,$row); 
					     		}  

					     		getRDcfExpDets();
								$('#ProjOfExp_Dialog').modal('hide'); 
								RDothretClearFlds();
							
						});
					});
					 
			}  
		
		} 
	});
	
	 
	if(isOneRowSelected==0){
		applyToastrAlert("No Rows Selected");
		return;
	}

	
});


/*Delete Row Click */
$("#RDExpDelRow").on("click",function(){  
 	datatableDeleteRow('RDExptbl',RDExptbl,'SelRDExp','RDExpEditRow','RDExpDelRow');
/*//	DHTML CRUD ICONS
	var rc = RDExptbl.row().count();
	if(rc ==0){
		$("#SelRDExp").prop("checked",false);
		crudicons(this,'RDExptbl','SelRDExp','RDExpEditRow','RDExpDelRow');
	}
//	DHTML CRUD ICONS
*/});

/*Clear Fields */
function RDothretClearFlds(){
	$("#ProjOfExp_Dialog").find("input[type=text]").val("");
	$("#ProjOfExp_Dialog").find("textarea").val("");
	$("#ProjOfExp_Dialog").find("select").val("");
}

/*Disabled/Readonly Fields */
function RDothretRdlyflds(mode){ 
	 if(mode == QRY_MODE ){
			$("#ProjOfExp_Dialog :input").prop("disabled", true); 
	 } else if((mode == INS_MODE) || (mode == UPD_MODE) ){
			$("#ProjOfExp_Dialog :input").prop("disabled", false);
	 }
}

/*Validation */
function validatRDExpEditRowDetails(){
	 
	/*if(!(validateFocusFlds('ProjOfExp_Dialog','txtFldDlgprojORtyofpay',OR_TYPE))) return; 
	if(!(validateFocusFlds('ProjOfExp_Dialog','selDlgprojORFreq',OR_FREQ))) return;
	if(!(validateFocusFlds('ProjOfExp_Dialog','selDlgprojORAgeBsOn', OR_AGEBSE))) return; 
	if(!(validateFocusFlds('ProjOfExp_Dialog','txtFldDlgprojORAgePaySts', OR_AGESTS))) return;
	if(!rdFrequencyValidation($('#txtFldDlgprojORAgePayends'),$("#txtFldDlgprojOREslrate"),$("#selDlgprojORFreq")))return; 
	if(!rdStartAgeValidate($('#txtFldDlgprojORAgePaySts'),$('#selDlgprojORAgeBsOn')))return;
	if(!rdEndAgeValidate($('#txtFldDlgprojORAgePaySts'),$("#txtFldDlgprojORAgePayends")))return;*/
	
	  return true; 
}



/*Mandatory Fields Tooltip*/ 
$("#txtFldDlgprojORtyofpay,#selDlgprojORFreq," +
		"#selDlgprojORAgeBsOn,#txtFldDlgprojORAgePaySts").on("change",function(){
	if(!isEmpty($(this).val())){
	$(this).removeClass("mandatoryFillFlds");
	$(this).qtip('disable');
	$(this).qtip('destroy',true);
	}
});
  

/* Filling Model Fields*/
function RDothretfilldlgval($lastRow){
	  
	  $('#ProjOfExp_Dialog #txtFldDlgprojORId').val($lastRow.find("td:eq(0)").find('input:eq(1)').val());
	  $('#ProjOfExp_Dialog #txtFldDlgprojORtyofpay').val($lastRow.find("td:eq(2)").find('input:eq(0)').val());
	  $('#ProjOfExp_Dialog #selDlgprojORFreq').val($lastRow.find("td:eq(3)").find('select:eq(0)').val());
	  $('#ProjOfExp_Dialog #txtFldDlgprojORAnlExp').val($lastRow.find("td:eq(4)").find('input:eq(0)').val());
	  $('#ProjOfExp_Dialog #txtFldDlgprojOREslrate').val($lastRow.find("td:eq(5)").find('input:eq(0)').val());
	  $('#ProjOfExp_Dialog #selDlgprojORAgeBsOn').val($lastRow.find("td:eq(6)").find('select:eq(0)').val());
	  $('#ProjOfExp_Dialog #txtFldDlgprojORAgePaySts').val($lastRow.find("td:eq(7)").find('input:eq(0)').val());
	  $('#ProjOfExp_Dialog #txtFldDlgprojORAgePayends').val($lastRow.find("td:eq(8)").find('input:eq(0)').val());
	  $('#ProjOfExp_Dialog #txtFldDlgprojORRemarks').val($lastRow.find("td:eq(9)").find('input:eq(0)').val());
	  $('#ProjOfExp_Dialog #txtFldDlgprojORCrtdBy').val($lastRow.find("td:eq(9)").find('input:eq(1)').val());
	  $('#ProjOfExp_Dialog #txtFldDlgprojORCrtdDate').val($lastRow.find("td:eq(9)").find('input:eq(2)').val());
	
}

/* Filling Table Fields*/
function RDothretfilldomval($RowId,$row){
	
	$row.find("td:eq(2)").find('input:eq(0)').val($("#txtFldDlgprojORtyofpay").val()); 
	$row.find("td:eq(3)").find('select:eq(0)').val($("#selDlgprojORFreq").val());
	$row.find("td:eq(4)").find('input:eq(0)').val($("#txtFldDlgprojORAnlExp").val());  
	$row.find("td:eq(5)").find('input:eq(0)').val($("#txtFldDlgprojOREslrate").val()); 
	$row.find("td:eq(6)").find('select:eq(0)').val($("#selDlgprojORAgeBsOn").val());
	$row.find("td:eq(7)").find('input:eq(0)').val($("#txtFldDlgprojORAgePaySts").val()); 
	$row.find("td:eq(8)").find('input:eq(0)').val($("#txtFldDlgprojORAgePayends").val()); 
	$row.find("td:eq(9)").find('input:eq(0)').val($("#txtFldDlgprojORRemarks").val()); 
		
}

//Other payment to be made during retirement
function syncToRpcf1(){
	
	 var intretslfage=Number($("#retSelfAge").val());
	 var basedon=$("#retAgeBasedon").val().toUpperCase();

	 var totAge=Number($("#retSelfProjage").val());
		 
	 var cell0 = '<span></span>'+
	'<input type="hidden" name="txtFlRDExpDelRowMode" readonly="true" value="'+INS_MODE+'" class="fipaMode"/><input type="hidden" name="txtFldprojORId">';
	 
	var cell1 = '<div class="checkbox checkbox-primary text-center"><input type="checkbox" name="raRDExpDelRowSelect"/><label>&nbsp;</label></div>'; 
	var cell2 = '<input type="text" name="txtFldprojORtyofpay" class="form-control editable"  onmouseover="fipaTooltip(this);"/>'; 
	var cell3 = '<select type="text" name="selprojORFreq" class="form-control editable"  onmouseover="fipaTooltip(this);" ></select>';
	var cell4 = '<input type="text" name="txtFldprojORAnlExp" class="form-control editable"  onmouseover="fipaTooltip(this);"/>';
	var cell5 = '<input type="text" name="txtFldprojOREslrate" class="form-control editable"  onmouseover="fipaTooltip(this);"/>';
	var cell6 = '<select type="text" name="selprojORAgeBsOn" class="form-control editable"   onmouseover="fipaTooltip(this);"></select>';
	var cell7 = '<input type="text" name="txtFldprojORAgePaySts" class="form-control editable"   onmouseover="fipaTooltip(this);"/>';
	var cell8 = '<input type="text" name="txtFldprojORAgePaySts" class="form-control editable"    onmouseover="fipaTooltip(this);"/>';
	var cell9 ='<input type="text" name="txtFldprojORRemarks" class="form-control editable"   onmouseover="fipaTooltip(this);"/>'+
	'<input type="hidden" name="txtFldprojORCrtdBy"/><input type="hidden" name="txtFldprojORCrtdDate"/>'; 
 

		 var rowCount;
		 var $lastRow;	
		 var sino = 1;
		 var $rowCount = OthRetPlgtbl.rows().count();
		 
		
		 
		 if($rowCount >0){
			 $("#OthRetPlgtbl tbody tr").each(function(i,row){
				 var mode_r = $(this).find("td:first").find('input:eq(0)').val();
//				 if($rowCount >0){
				 if(mode_r != "D"){
					 	RDExptbl.row.add( [cell0,cell1,cell2,cell3,cell4,cell5,cell6,cell7,cell8,cell9] ).draw( false );
						 
						  rowCount = $('#RDExptbl tbody tr:visible').length;	
						  rowCount =  (rowCount == 0) ? $('#RDExptbl tbody tr').length : rowCount;
						  $lastRow = $("#RDExptbl tbody tr:last");	
						  
						  
						  var orfreq = $("#selDlgORFreq > option").clone();
						 var oragebsed =  $("#selDlgORAgeBsOn > option").clone();
						  
						  $lastRow.find("td:first").find('span').text(rowCount); 

						$lastRow.find("td:eq(1)").find("input:first").click(function(){
							selectSingleRow(this);
						});

							$lastRow.find("td:eq(1)").find("input:first").attr('id',"raRDExpDelRow"+$lastRow.index())
							.parent().find('label').attr('for',"raRDExpDelRow"+$lastRow.index());

							$lastRow.find("td:eq(2)").find('input:eq(0)').val($(this).find("td:eq(2)").find('input:eq(0)').val());
							
							$lastRow.find("td:eq(3)").find('select:eq(0)').append(orfreq);
							$lastRow.find("td:eq(3)").find('select:eq(0)').val((isEmpty($(this).find("td:eq(3)").find('select:eq(0)').val())? "REGULAR" : $(this).find("td:eq(3)").find('select:eq(0)').val()));
							
							$lastRow.find("td:eq(4)").find('input:eq(0)').val((isEmpty($(this).find("td:eq(4)").find('input:eq(0)').val())? Number("0") : $(this).find("td:eq(4)").find('input:eq(0)').val()));
//							$lastRow.find("td:eq(4)").find('input:eq(0)').prop("disabled",true);
							$lastRow.find("td:eq(4)").find('input:eq(0)').addClass("applyEvntUsd");
							
							$lastRow.find("td:eq(5)").find('input:eq(0)').val((isEmpty($(this).find("td:eq(5)").find('input:eq(0)').val())? Number("0") : $(this).find("td:eq(5)").find('input:eq(0)').val()));
//							$lastRow.find("td:eq(5)").find('input:eq(0)').prop("disabled",true);
							$lastRow.find("td:eq(5)").find('input:eq(0)').addClass("applyEvntpCent3");
							
							$lastRow.find("td:eq(6)").find('select:eq(0)').append(oragebsed);
							$lastRow.find("td:eq(6)").find('select:eq(0)').val((isEmpty($(this).find("td:eq(6)").find('select:eq(0)').val())? basedon : $(this).find("td:eq(6)").find('select:eq(0)').val()));
//							$lastRow.find("td:eq(6)").find('select:eq(0)').prop("disabled",true);
							
							$lastRow.find("td:eq(7)").find('input:eq(0)').val((isEmpty($(this).find("td:eq(7)").find('input:eq(0)').val())? intretslfage :$(this).find("td:eq(7)").find('input:eq(0)').val()));
//							$lastRow.find("td:eq(7)").find('input:eq(0)').prop("disabled",true);
							$lastRow.find("td:eq(7)").find('input:eq(0)').addClass("applyEvntYrs");
							
							$lastRow.find("td:eq(8)").find('input:eq(0)').val((isEmpty($(this).find("td:eq(8)").find('input:eq(0)').val())? totAge :$(this).find("td:eq(8)").find('input:eq(0)').val()));
//							$lastRow.find("td:eq(8)").find('input:eq(0)').prop("disabled",true);
							$lastRow.find("td:eq(8)").find('input:eq(0)').addClass("applyEvntYrs");
							
							$lastRow.find("td:eq(9)").find('input:eq(0)').val($(this).find("td:eq(9)").find('input:eq(0)').val());
//							$lastRow.find("td:eq(9)").find('input:eq(0)').prop("disabled",true);
							
							$lastRow.find("td:eq(2)").find('input:eq(0)').on("change",function(){
								getRDcfExpDets();
							});
							
							$lastRow.find("td:eq(3)").find('select:eq(0)').on("change",function(){ 
								if(!rdFrequencyValidation($lastRow.find("td:eq(8)").find('input:eq(0)'),$lastRow.find("td:eq(5)").find('input:eq(0)'),$(this)))return; 
									getRDcfExpDets();
							});					

							$lastRow.find("td:eq(4)").find('input:eq(0)').on("change",function(){
									getRDcfExpDets();
							});
						
							$lastRow.find("td:eq(5)").find('input:eq(0)').on("change",function(){
									getRDcfExpDets();
							});

							$lastRow.find("td:eq(6)").find('select:eq(0)').on("change",function(){ 
//								if(!rdFrequencyValidation($lastRow.find("td:eq(6)").find('select:eq(0)'),$(this)))return; 
								if(!rdStartAgeValidate($lastRow.find("td:eq(7)").find('input:eq(0)'),$(this)))return;
								getRDcfExpDets();	
							});

							$lastRow.find("td:eq(7)").find('input:eq(0)').on("change",function(){ 
								if(!rdStartAgeValidate($(this),$lastRow.find("td:eq(6)").find('select:eq(0)')))return;
								getRDcfExpDets();
							});

							$lastRow.find("td:eq(8)").find('input:eq(0)').on("change",function(){ 
								if(!rdEndAgeValidate($lastRow.find("td:eq(7)").find('input:eq(0)'),$(this)))return;
								getRDcfExpDets();
							});


							rdFrequencyValidation($lastRow.find("td:eq(8)").find('input:eq(0)'),$lastRow.find("td:eq(5)").find('input:eq(0)'),$lastRow.find("td:eq(3)").find('select:eq(0)'));
							applyEventHandlers();
//				 }
			 }
			});  			 
			 
		 }
		 
		 

}

/*Auto complete*/

$("#txtFldDlgprojORAgePaySts").on("change",function(){
	
	var array=[];
	var selfAge=isEmpty($("#txtFldDlgprojORAgePaySts").val()) ? "" : Number($("#txtFldDlgprojORAgePaySts").val());	
	var selfProjage=isEmpty($("#retSelfProjage").val()) ? "" : Number($("#retSelfProjage").val());
	
	if (selfAge <= selfProjage) {
		   var option = ''; 
		   array=[];
		  for(var i= selfAge; i<=selfProjage;i++)
			  { 
				
				  array.push(""+i+"");
			  }  
	 } 
	

	$("#txtFldDlgprojORAgePayends").val("");
//	 var autocomplete = $('#txtFldDlgprojORAgePayends').typeahead(); 
//	autocomplete.data('typeahead').source = array;

}); 
/**/
