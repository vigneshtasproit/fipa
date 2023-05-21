var generatetoamendincExp,generatetoamendincExpAccm;
 
$("#RdAmendInc ,#RdAmendExp").click(function(){
	

//	amendIncomeAndExpenditure();
});

function amendIncomeAndExpenditure(){
//	if(!validationOnProjOfExp())return;
//	if(!validationOnProjOfInc())return;
	 showLoader();
	setTimeout(function(){
		 getRDIncomeAndExp();
		 hideLoader();
	 }, 1000);
	
}

$("#rpcfannlbufamt").on("change",function(){
	 showLoader();
	setTimeout(function(){
		
		getRDIncomeAndExp();
		 hideLoader();
	},1000);
	
});
$("#rpcfannlbufamtintrate").on("change",function(){
	 showLoader();
		setTimeout(function(){
			
			getRDIncomeAndExp();
			 hideLoader();
		},1000);
});
$("#rpcfannlbufamtroi").on("change",function(){
	 showLoader();
		setTimeout(function(){
			
			getRDIncomeAndExp();
			 hideLoader();
		},1000);;
});

var finalchart = null;

var annlincomexpALL = [];
var annlincomexpaccmALL=[];
function getRDIncomeAndExp(){
	 
	$("#generateproRetirementtbl tbody").html("");
	
//	var projOnRtddata = [];
	var annlincomexp = [],annlincomexpaccm=[];
	annlincomexpALL = [];
	annlincomexpaccmALL=[];
	var intretslfage=Number($("#txtFldRDSlfIntAge").val());
	var intretspsage=Number($("#txtFldRDSpsIntAge").val());
	var totAge=Number($("#txtFldRDSlfProjLfe").val());

	var bufferfundamt = $("#rpcfannlbufamt").val();
	var bufferfundintrate = $("#rpcfannlbufamtintrate").val();
	var bufferfundamtroi = $("#rpcfannlbufamtroi").val();
	 
	bufferfundamt = isEmpty(bufferfundamt) ? "" : Number(bufferfundamt);
	bufferfundintrate = isEmpty(bufferfundintrate) ? 0 : Number(bufferfundintrate)/100;
	bufferfundamtroi = isEmpty(bufferfundamtroi) ? 0 : Number(bufferfundamtroi)/100;

	var dataset=[],datasetAccm=[];
	
	 $("#projInvRettbldiv").css("display","block"); 


var dataHeader=[
                {"data":"Self Age","title":"Self Age","className":"dt-head-center"},
                {"data":"Spouse Age","title":"Spouse Age","className":"dt-head-center"},
                {"data":"Buffer fund for retirement","title":"Buffer Fund <br/> for Retirement",render: $.fn.dataTable.render.number(',', '.', 0, '$'),"className":"dt-head-center"},
                {"data":"Current cash funds on retirement","title":"Current Cash <br/> Funds on <br/> Retirement",render: $.fn.dataTable.render.number(',', '.', 0, '$'),"className":"dt-head-center"},
                {"data":"Annual income","title":"Annual <br/> Income",render: $.fn.dataTable.render.number(',', '.', 0, '$'),"className":"dt-head-center"},
                {"data":"Annual Expenditure","title":"Annual <br/> Expenditure",render: $.fn.dataTable.render.number(',', '.', 0, '$'),"className":"dt-head-center"},
                {"data":"Available retirement funds -(Surplus/ deficit)","title":"Available Retirement <Br/> Funds -(Surplus/ deficit)",render: $.fn.dataTable.render.number(',', '.', 0, '$'),"className":"dt-head-center"},
                ];
 

var dataHeaderAccm=[
                {"data":"Self Age","title":"Self Age","className":"dt-head-center"},
                {"data":"Spouse Age","title":"Spouse Age","className":"dt-head-center"},
                {"data":"Buffer fund for retirement","title":"Buffer Fund <br/> for Retirement",render: $.fn.dataTable.render.number(',', '.', 0, '$'),"className":"dt-head-center"},
                {"data":"Current cash funds on retirement","title":"Current Cash <br/> Funds on <br/> Retirement",render: $.fn.dataTable.render.number(',', '.', 0, '$'),"className":"dt-head-center"},
                {"data":"Accumlation income","title":"Accumlation <br/> Income",render: $.fn.dataTable.render.number(',', '.', 0, '$'),"className":"dt-head-center"},
                {"data":"Accumlation Expenditure","title":"Accumlation <br/> Expenditure",render: $.fn.dataTable.render.number(',', '.', 0, '$'),"className":"dt-head-center"},
                {"data":"Available retirement funds -(Surplus/ deficit)","title":"Available Retirement <Br/> Funds -(Surplus/ deficit)",render: $.fn.dataTable.render.number(',', '.', 0, '$'),"className":"dt-head-center"},
                ];


/*Data Set*/
 


/*Data Set*/ 
//$("#RetirementValueBasedOn").val(agebasedon); 

var count=0;
var oldval=0;
var olddata=0;
   
	d3.select("#CashFlwprojectionOnRtmnt").selectAll("svg").remove();
	d3.select("#CashFlwprojectionOnRtmnt_ED").selectAll("svg").remove();
	d3.select("#CashFlwprojectionOnRtmntAccm").selectAll("svg").remove();
	d3.select("#CashFlwprojectionOnRtmntAccm_ED").selectAll("svg").remove();

var ExpHeadercount=isValidObject(rdcflwTbl)?Number(rdcflwTbl.columns().header().length)-2:0;
var ExpHeadercountAccm=isValidObject(rdcflwTbl)?Number(rdcflwTbl.columns().header().length)-1:0;
//var ExpHeadercount = Number($("#generateproExptbl tbody tr td").length)-2
var IncHeadercount=isValidObject(rdcflwIncAssTbl)?Number(rdcflwIncAssTbl.columns().header().length)-2:0;
var IncHeadercountAccm=isValidObject(rdcflwIncAssTbl)?Number(rdcflwIncAssTbl.columns().header().length)-1:0;
//var IncHeadercount=Number($("#generateproIncometbl tbody tr td").length)-2;
var spouseage=intretspsage;

for(var i=intretslfage;i<=totAge;i++){ 
		
	var arrlist={};var arrlistAccm={};
			
			arrlist["Self Age"]=i+'<input type="hidden" value="'+(count+1)+'"/>'; //self age
			arrlist["Spouse Age"]=spouseage; //spouse age
			
			arrlistAccm["Self Age"]=i+'<input type="hidden" value="'+(count+1)+'"/>'; //self age
			arrlistAccm["Spouse Age"]=spouseage; //spouse age
			
			var annlIncm = $("#generateproIncometbl tbody").find("tr:eq("+(count)+")").find("td:eq("+IncHeadercount+")").text();
			annlIncm = annlIncm.replace("$","");
			annlIncm = annlIncm.replace(/,/g, "");	
			
			var annlIncmAccm = $("#generateproIncometbl tbody").find("tr:eq("+(count)+")").find("td:eq("+IncHeadercountAccm+")").text();
			annlIncmAccm = annlIncmAccm.replace("$","");
			annlIncmAccm = annlIncmAccm.replace(/,/g, "");	
			annlIncmAccm = Number(annlIncmAccm);
			
			var anlInc=Number(annlIncm);
			
			var annlExpnd= $("#generateproExptbl tbody").find("tr:eq("+(count)+")").find("td:eq("+ExpHeadercount+")").text();
			annlExpnd = annlExpnd.replace("$","");
			annlExpnd = annlExpnd.replace(/,/g, "");
			

			var annlExpndAccm= $("#generateproExptbl tbody").find("tr:eq("+(count)+")").find("td:eq("+ExpHeadercountAccm+")").text();
			annlExpndAccm = annlExpndAccm.replace("$","");
			annlExpndAccm = annlExpndAccm.replace(/,/g, "");
			annlExpndAccm = Number(annlExpndAccm);
				 
			var anlExp=Number(annlExpnd);
			
			arrlist["Annual Expenditure"]=roundNumber(anlExp);
			arrlistAccm["Accumlation Expenditure"]=roundNumber(annlExpndAccm);
			
			
			if(i == intretslfage){
				arrlist["Current cash funds on retirement"]=0;
				arrlist["Buffer fund for retirement"]=bufferfundamt;
				arrlist["Annual income"]= roundNumber(anlInc) ;//-  roundNumber(bufferfundamt);//06052020
				
				arrlistAccm["Current cash funds on retirement"]=0;
				arrlistAccm["Buffer fund for retirement"]=bufferfundamt;
				arrlistAccm["Accumlation income"]= roundNumber(annlIncmAccm) ;//-  roundNumber(bufferfundamt);//06052020
				
			}else{
				var prevcurrcash=dataset[dataset.length-1]["Current cash funds on retirement"]; 
				var prevbuffund = dataset[dataset.length-1]["Buffer fund for retirement"];
				var prevfinalfund = dataset[dataset.length-1]["Available retirement funds -(Surplus/ deficit)"];				
//				prevcurrcash = prevcurrcash.replace("$","");
//				prevcurrcash = prevcurrcash.replace(/,/g, "");
				prevcurrcash = (isNaN(prevcurrcash)) ? 0 : roundNumber(Number(prevcurrcash));
				
				var prevcurrcashAccm = datasetAccm[datasetAccm.length-1]["Current cash funds on retirement"]; 
				var prevbuffundAccm = datasetAccm[datasetAccm.length-1]["Buffer fund for retirement"];
				var prevfinalfundAccm = datasetAccm[datasetAccm.length-1]["Available retirement funds -(Surplus/ deficit)"];
				prevcurrcashAccm = (isNaN(prevcurrcashAccm)) ? 0 : roundNumber(Number(prevcurrcashAccm));
				
				arrlist["Current cash funds on retirement"]= (prevfinalfund > 0) ? (prevfinalfund * (1+bufferfundamtroi)) : roundNumber(prevfinalfund);
				arrlist["Buffer fund for retirement"]= roundNumber(prevbuffund * (1+bufferfundintrate));
				arrlist["Annual income"]= roundNumber(anlInc);
				
				
				arrlistAccm["Current cash funds on retirement"]=  ( (prevfinalfundAccm > 0) ? (prevfinalfundAccm * (1+bufferfundamtroi)) : roundNumber(prevfinalfundAccm) );
				arrlistAccm["Buffer fund for retirement"]= roundNumber(prevbuffundAccm * (1+bufferfundintrate));
				arrlistAccm["Accumlation income"]= roundNumber(annlIncmAccm) ;//-  roundNumber(bufferfundamt);//06052020
			}		
			
			var total=arrlist["Current cash funds on retirement"] + (arrlist["Annual income"] - arrlist["Annual Expenditure"]);
			var totalAccm = arrlistAccm["Current cash funds on retirement"] + (arrlistAccm["Accumlation income"] - arrlistAccm["Accumlation Expenditure"]);
			
			arrlist["Available retirement funds -(Surplus/ deficit)"]=(total);  
			arrlistAccm["Available retirement funds -(Surplus/ deficit)"]=(totalAccm);  
			if(i > intretslfage){
				var tmp = 0;var surplordef = 0;
				for(var l=0;l<dataset.length;l++){
					tmp = tmp + dataset[l]["Current cash funds on retirement"];
					surplordef = surplordef + dataset[l]["Available retirement funds -(Surplus/ deficit)"];
						
				}
				arrlistAccm["Current cash funds on retirement"] =  roundNumber(tmp + arrlist["Current cash funds on retirement"]);
				arrlistAccm["Available retirement funds -(Surplus/ deficit)"]= roundNumber(surplordef +arrlist["Available retirement funds -(Surplus/ deficit)"])
			}
				
			dataset.push(arrlist);
			datasetAccm.push(arrlistAccm);
			
			spouseage++;
			count++;
			
//			projOnRtddata.push({Date: i,Categories: [{Name: "Annual income",Value: anlInc }, { Name: "Annual Expenditure",Value: anlExp}],LineCategory: [{Name: "Available retirement funds -(Surplus/ deficit)",Value: total}]});
			
			annlincomexp.push({"Age":i,"Annual Income":arrlist["Annual income"],"Annual Expenditure":arrlist["Annual Expenditure"],"Available retirement funds -(Surplus/ deficit)":total});
			annlincomexpaccm.push({"Age":i,"Accumlation Income":arrlistAccm["Accumlation income"],"Accumlation Expenditure":arrlistAccm["Accumlation Expenditure"],"Available retirement funds -(Surplus/ deficit)":totalAccm});
			
			 
			annlincomexpALL.push({"Age":i,"AnnualIncome":arrlist["Annual income"],"AnnualExpenditure":arrlist["Annual Expenditure"],"AvailableretirementfundsSurplusdeficit":total});
			annlincomexpaccmALL.push({"Age":i,"AccumlationIncome":arrlistAccm["Accumlation income"],"AccumlationExpenditure":arrlistAccm["Accumlation Expenditure"],"AvailableretirementfundsSurplusdeficit":totalAccm});
			 
			 
			
}
 
//genCashFlwProjChartOnRtrmnt(projOnRtddata);

if ($.fn.DataTable.isDataTable( '#generatetoamendincExp,#generatetoamendincExpAccm') ) {
	generatetoamendincExp.destroy();
	generatetoamendincExpAccm.destroy();
	$('#generatetoamendincExp').html("");
	$("#generatetoamendincExpAccm").html("");
}			 
 


	/*Generate Proper header*/
generatetoamendincExp=$('#generatetoamendincExp').DataTable( { 
		destroy: true,
	 	responsive: false,         
	    ordering: false,
	    searching: false,
	    scrollY:  "auto",
	    scrollX: "540px",
 	    scrollCollapse:true,
	    paging:false, 
	    filter:false,     
	    dom: '<<"top" ip>flt>', 
	    "columns": dataHeader,  
        data:dataset,
//        fixedColumns:   {rightColumns: 2 },
       	columnDefs: [
       	             {"className": "dt-right","targets": "_all","orderable": false,"searchable": false},
       	             {"targets" : [6],"fnCreatedCell":function(nTd, sData, oData, iRow, iCol){
       	            	if ( sData < "0" ) {
                            $(nTd).css('color', 'red');
                            $(nTd).css('font-weight', 'bold');
       	            	}
       	            	 
       	             }}
       	             ],
		fnDrawCallback: function(oSettings) {
		    		if(this.fnSettings().bSorted){
		    			reOrderVisibleRows('generatetoamendincExp');
		    		}
    	}    	
	}).draw();

generatetoamendincExpAccm =$('#generatetoamendincExpAccm').DataTable( { 
	destroy: true,
 	responsive: false,         
    ordering: false,
    searching: false,     
    scrollY:  "auto",
    scrollX: "500px",
	 scroller: true,
	    scrollCollapse:true,
    paging:false, 
    filter:false,     
    dom: '<<"top" ip>flt>', 
    "columns": dataHeaderAccm,  
    data:datasetAccm,
//    fixedColumns:   {rightColumns: 2 },
   	columnDefs: [
   	             {"className": "dt-right","targets": "_all","orderable": false,"searchable": false},
   	             {"targets" : [6],"fnCreatedCell":function(nTd, sData, oData, iRow, iCol){
   	            	if ( sData < "0" ) {
                        $(nTd).css('color', 'red');
                        $(nTd).css('font-weight', 'bold');
   	            	}
   	            	 
   	             }}
   	             ],
	fnDrawCallback: function(oSettings) {
	    		if(this.fnSettings().bSorted){
	    			reOrderVisibleRows('generatetoamendincExpAccm');
	    		}
	}    	
}).draw();




finalchart = c3.generate({
    bindto: '#CashFlwprojectionOnRtmnt',
   
    title: {
        show: false,
        text: 'Cashflow Projection on Retirement',
        position: 'top-center',  
        padding: { top: 20, right: 20, bottom: 40, left: 50}
      },
    grid: {
        x: { show: true },
        y: { show: true }
    },
    zoom: {
        enabled: true
    },
    legend: {
        position: 'bottom'
    },
    data: {
    	json: annlincomexp,
    	keys :{x: 'Age',value: ['Annual Income', 'Annual Expenditure']},//,'Available retirement funds -(Surplus/ deficit)'
    	type : "bar",
    	types : {
    			 "Annual Income" : "bar",
    			 "Annual Expenditure" : "bar"
    			},//"Available retirement funds -(Surplus/ deficit)":	"area",
    	colors: {
    			'Annual Income': function(d) { return d.value < 0 ? 'red' : '#97BC62FF'; },
    		    'Annual Expenditure': function(d) { return d.value < 0 ? 'red' : '#EA738DFF'; }
    		    }
    },
    axis: {
    	 x: { label: 'Age'},
    	 y : {
    		 label: 'Amount',
             tick: {
                 format: d3.format("$,")
             },
             show: true
         }
    },
    tooltip: {
        format: {
            title: function (d) { return 'Annual Income / Expenditure at Age ' + d; },
            value: function (value, ratio, id) {
                var format =  d3.format('$,');
                return format(value);
            }
//            value: d3.format(',') // apply this format to both y and y2
        }
    },
    size: {
        height: 480,
        width:660
    }
//    ,
//    color: {
//        pattern: ['green', 'red','#00cc00']
//    }
});



var finalchartED = c3.generate({
	
    bindto: '#CashFlwprojectionOnRtmnt_ED',
   
    title: {
        show: false,
        text: 'Available retirement funds - (Surplus/Deficit)',
        position: 'top-center',  
        padding: { top: 20, right: 20, bottom: 40, left: 50}
      },
    grid: {
        x: { show: true },
        y: { show: true }
    },
    zoom: {
        enabled: true
    },
    legend: {
        position: 'bottom'
    },
    data: {
    	json: annlincomexp,
    	keys :{x: 'Age',value: ['Available retirement funds -(Surplus/ deficit)']},//,'Available retirement funds -(Surplus/ deficit)'
    	type : "bar",
    	types : {
    			 "Available retirement funds -(Surplus/ deficit)" : "bar"
    			  },//"Available retirement funds -(Surplus/ deficit)":	"area",
    	colors: {
    	   		'Available retirement funds -(Surplus/ deficit)': function(d) { return d.value < 0 ? 'red' : '#97BC62FF'; }
    	}
    },
    axis: {
    	 x: { label: 'Age'},
    	 y : {
    		 label: 'Amount',
             tick: {
                 format: d3.format("$,")
             },
             show: true
         }
    },
    tooltip: {
        format: {
            title: function (d) { return 'Available retirement funds at Age ' + d; },
            value: function (value, ratio, id) {
                var format =  d3.format('$,');
                return format(value);
            }
//            value: d3.format(',') // apply this format to both y and y2
        }
    },
    size: {
        height: 480,
        width:660
    }
//    ,
//    color: {
//        pattern: ['green', 'red','#00cc00']
//    }
});

d3.selectAll('#CashFlwprojectionOnRtmnt *,#CashFlwprojectionOnRtmnt_ED *').each(function (e) {
    if (d3.select(this).style('fill-opacity') == 0)
        d3.select(this).style('opacity', 0);
    d3.select(this).style('fill', d3.select(this).style('fill'));
    d3.select(this).style('stroke', d3.select(this).style('stroke'));
});
d3.selectAll('#CashFlwprojectionOnRtmnt text,#CashFlwprojectionOnRtmnt_ED text').each(function (e) {
    d3.select(this).style('font-size', d3.select(this).style('font-size'));
    d3.select(this).style('font-family', d3.select(this).style('font-family'));
});

// html2canvas does not recognize dy
d3.selectAll('#CashFlwprojectionOnRtmnt tspan,#CashFlwprojectionOnRtmnt_ED tspan').each(function (e) {
    // convert em to px
    if (d3.select(this).attr('dy').indexOf('em') !== -1 && d3.select(this).style('font-size').indexOf('px') !== -1) {
        d3.select(this).attr('dy', d3.select(this).attr('dy').replace('em', '') * d3.select(this).style('font-size').replace('px', ''));
    }

    if (d3.select(this).attr('dy') != 0) {
        d3.select(this.parentNode).attr('y', Number(d3.select(this.parentNode).attr('y')) + Number(d3.select(this).attr('dy')));
        d3.select(this).attr('dy', 0);
    }
});

var finalchartAccm = c3.generate({
    bindto: '#CashFlwprojectionOnRtmntAccm',
   
    title: {
        show: false,
        text: 'Accumulated Annual Income & Expenditure',
        position: 'top-center',  
        padding: { top: 20, right: 20, bottom: 40, left: 50}
      },
    grid: {
        x: { show: true },
        y: { show: true }
    },
    zoom: {
        enabled: true
    },
    legend: {
        position: 'bottom'
    },
    data: {
    	json: annlincomexpaccm,
    	keys :{x: 'Age',value: ['Accumlation Income', 'Accumlation Expenditure']},//,'Available retirement funds -(Surplus/ deficit)'
    	type : "bar",
    	types : {
    			 "Accumlation Income" : "area",
    			 "Accumlation Expenditure" : "area"
    			},//"Available retirement funds -(Surplus/ deficit)":	"area",
    	colors: {
    		    'Accumlation Income': function(d) { return d.value < 0 ? 'red' : '#97BC62FF'; },
    		    'Accumlation Expenditure': function(d) { return d.value < 0 ? 'red' : '#EA738DFF'; }
    		    }
    },
    axis: {
    	 x: { label: 'Age'},
    	 y : {
    		 label: 'Amount',
             tick: {
                 format: d3.format("$,")
             },
             show: true
         }
    },
    tooltip: {
        format: {
            title: function (d) { return 'Accumlation Income / Expenditure at Age ' + d; },
            value: function (value, ratio, id) {
                var format =  d3.format('$,');
                return format(value);
            }
//            value: d3.format(',') // apply this format to both y and y2
        }
    },
    size: {
        height: 480,
        width:660
    }
//    ,
//    color: {
//        pattern: ['green', 'red','#00cc00']
//    }
});


var finalchartAccmED = c3.generate({
    bindto: '#CashFlwprojectionOnRtmntAccm_ED',
   
    title: {
        show: false,
        text: 'Accumulated Available retirement funds - (Surplus/Deficit)',
        position: 'top-center',  
        padding: { top: 20, right: 20, bottom: 40, left: 50}
      },
    grid: {
        x: { show: true },
        y: { show: true }
    },
    zoom: {
        enabled: true
    },
    legend: {
        position: 'bottom'
    },
    data: {
    	json: annlincomexpaccm,
    	keys :{x: 'Age',value: ['Available retirement funds -(Surplus/ deficit)']},//'Accumlation Income', 'Accumlation Expenditure',
//    	type : "bar",
    	types : {"Available retirement funds -(Surplus/ deficit)":	"area"},
    	colors: {
    		'Available retirement funds -(Surplus/ deficit)': function(d) { return d.value < 0 ? 'red' : '#97BC62FF'; }
        }
//    	 "Accumlation Income" : "bar",
//		 "Accumlation Expenditure" : "bar"
    },
    axis: {
    	 x: { label: 'Age'},
    	 y : {
    		 label: 'Amount',
             tick: {
                 format: d3.format("$,")
             },
             show: true
         }
    },
    tooltip: {
        format: {
            title: function (d) { return 'Accumlation Available retirement funds - (Surplus/Deficit) at Age ' + d; },
            value: function (value, ratio, id) {
                var format =  d3.format('$,');
                return format(value);
            }
//            value: d3.format(',') // apply this format to both y and y2
        }
    },
    size: {
        height: 480,
        width:660
    }
//    ,
//    color: {
//        pattern: ['green', 'red','#00cc00']
//    }
});


d3.selectAll('#CashFlwprojectionOnRtmntAccm *,#CashFlwprojectionOnRtmntAccm_ED *').each(function (e) {
    if (d3.select(this).style('fill-opacity') == 0)
        d3.select(this).style('opacity', 0);
    d3.select(this).style('fill', d3.select(this).style('fill'));
    d3.select(this).style('stroke', d3.select(this).style('stroke'));
});
d3.selectAll('#CashFlwprojectionOnRtmntAccm text,#CashFlwprojectionOnRtmntAccm_ED text').each(function (e) {
    d3.select(this).style('font-size', d3.select(this).style('font-size'));
    d3.select(this).style('font-family', d3.select(this).style('font-family'));
});

// html2canvas does not recognize dy
d3.selectAll('#CashFlwprojectionOnRtmntAccm tspan,#CashFlwprojectionOnRtmntAccm_ED tspan').each(function (e) {
    // convert em to px
    if (d3.select(this).attr('dy').indexOf('em') !== -1 && d3.select(this).style('font-size').indexOf('px') !== -1) {
        d3.select(this).attr('dy', d3.select(this).attr('dy').replace('em', '') * d3.select(this).style('font-size').replace('px', ''));
    }

    if (d3.select(this).attr('dy') != 0) {
        d3.select(this.parentNode).attr('y', Number(d3.select(this.parentNode).attr('y')) + Number(d3.select(this).attr('dy')));
        d3.select(this).attr('dy', 0);
    }
});

var len=Number($("#generatetoamendincExp thead tr").find("th").length)-1;  

$("#generatetoamendincExp_wrapper,#generatetoamendincExpAccm_wrapper").find(".dataTables_scrollHeadInner").css("width","100%;")
$("#generatetoamendincExp_wrapper,#generatetoamendincExpAccm_wrapper").find(".dataTables_scrollHeadInner").find("table thead tr").find("th").css("text-align","center");
$("#generatetoamendincExp_wrapper,#generatetoamendincExpAccm_wrapper").find(".dataTables_scrollHeadInner").find("table thead tr").find("th:eq('"+(Number(len)-1)+"')").css("background-color","#23C6C8").css("color","white");
$("#generatetoamendincExp_wrapper,#generatetoamendincExpAccm_wrapper").find(".dataTables_scrollHeadInner").find("table thead tr").find("th:eq('"+(Number(len)-2)+"')").css("background-color","#23C6C8").css("color","white");
  

$("#generatetoamendincExp_wrapper,#generatetoamendincExpAccm_wrapper").find(".dataTables_scrollBody").find("table tbody tr").each(function(){
	$(this).find("td:eq(0)").css("text-align","center");
	$(this).find("td:eq(1)").css("text-align","center");
});
$("#generatetoamendincExp_wrapper,#generatetoamendincExpAccm_wrapper").find(".dataTables_scrollBody").find("table tbody tr").find("td:eq('"+(Number(len)-1)+"')").css("background-color","rgb(39, 220, 222)").css("color","#FFF").css("border","1px solid #FAFDFF").css("font-weight","bold");
$("#generatetoamendincExp_wrapper,#generatetoamendincExpAccm_wrapper").find(".dataTables_scrollBody").find("table tbody tr").find("td:eq('"+(Number(len)-2)+"')").css("background-color","rgb(39, 220, 222)").css("color","#FFF").css("border","1px solid #FAFDFF").css("font-weight","bold");
	
$("#generatetoamendincExp_wrapper,#generatetoamendincExpAccm_wrapper").find(".dataTables_scrollBody").css("width","100%;");

loadcashfloeProjectionOnRetirementDynamicChart();
loadcashfloeProjectionOnRetirementDynamicChartED();
loadcashfloeProjectionOnRetirementDynamicChartAccm();
loadcashfloeProjectionOnRetirementDynamicChartAccmED();
}

//console.log("console.log annlincomexpALL " + annlincomexpALL);

//annlincomexpALL
function loadcashfloeProjectionOnRetirementDynamicChart(){
	
	var cashfloeProjectionOnRetirementDiv = document.getElementById("cashfloeProjectionOnRetirementDiv");
	cashfloeProjectionOnRetirementDiv.innerHTML="";
	cashfloeProjectionOnRetirementDiv.innerHTML="<canvas id='CashflowProjectionOnRetirementcanvas' class=''></canvas>";
    var chart;
    var config;
    //Filter data here based on the condition
    
    var ProjRetirecanvas = document.getElementById("CashflowProjectionOnRetirementcanvas");
    var cashfloeProjectionOnRetirementchartType;
   
    var labels = annlincomexpALL.map(function (e) {
        return e.Age;
    });
    var data1 = annlincomexpALL.map(function (e) {
        return e.AnnualIncome;
    });
    var data2 = annlincomexpALL.map(function (e) {
        return e.AnnualExpenditure;
    });

    console.log("console.log data1 " + data1);
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
    

    cashfloeProjectionOnRetirementchartType = document.getElementById("cashfloeProjectionOnRetirementchartType").value;

         //BarChart

         if (cashfloeProjectionOnRetirementchartType == "Bar") {
            var fund1data = {
                label: 'Annual Income',
                data: data1,
                categoryPercentage: 0.5,
                barPercentage: 1,
                backgroundColor: 'rgba(0, 99, 132, 0.9)',
                hoverBackgroundColor: 'rgba(0, 99, 132, 0.6)',
                borderWidth: 0,
                yAxisID: "y-axis-AnnualIncome"
            };


            var fund2data = {
                label: 'Annual Expenditure',
                data: data2,
                categoryPercentage: 0.5,
                barPercentage: 1,
                backgroundColor: 'rgba(99, 132, 0, 0.9)',
                hoverBackgroundColor: 'rgba(99, 132, 0, 0.6)',
                borderWidth: 0,
                yAxisID: "y-axis-AnnualIncome"
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
                                labelString: 'Amount'
                            },
                            
                            
                            id: "y-axis-AnnualIncome",
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
                        onPan: function ({ chart }) { CashflowProjectionOnRetirementcanvas.style.cursor = "grabbing"; },
                        onPanComplete: function ({ chart }) { CashflowProjectionOnRetirementcanvas.style.cursor = "default"; }
                    },
                    zoom: {
                        enabled: true,
                        drag: false,
                        mode: "x",
                        limits: {
                            max: 10,
                            min: 0.5
                        },
                        onZoom: function ({ chart }) { CashflowProjectionOnRetirementcanvas.style.cursor = "grabbing"; },
                        onZoomComplete: function ({ chart }) { CashflowProjectionOnRetirementcanvas.style.cursor = "default"; }


                    }
                }
            };

        }
        //line chart
        if (cashfloeProjectionOnRetirementchartType == "Line") {
            config = {
                type: 'LineWithLine',
                data: {
                    labels: labels,
                    datasets: [
                    {
                        label: 'Annual Income',
                        backgroundColor: window.chartColors.red,
                        borderColor: window.chartColors.red,
                        data: data1,
                        fill: false,
                        lineTension: 0,
                    }, {
                        label: 'Annual Expenditure',
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
                                labelString: 'Amount'
                            },
                            id: "y-axis-AnnualIncome",
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
                        onPan: function ({ chart }) { CashflowProjectionOnRetirementcanvas.style.cursor = "grabbing"; },
                        onPanComplete: function ({ chart }) { CashflowProjectionOnRetirementcanvas.style.cursor = "default"; }
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
                        onZoom: function ({ chart }) { CashflowProjectionOnRetirementcanvas.style.cursor = "grabbing"; },
                        onZoomComplete: function ({ chart }) { CashflowProjectionOnRetirementcanvas.style.cursor = "default"; }

                    }
                }
            };
        }
        //Pie chart

        if (cashfloeProjectionOnRetirementchartType == "Pie") {

            config = {
                type: 'pie',
                data: {
                    datasets: [{
                        data: data1,
                        backgroundColor: bgColors(len),
                        label: 'Annual Income'
                    },{
                        data: data2,
                        backgroundColor: bgColor,
                        borderWidth: 0.5,
                        label: 'Annual Expenditure'

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
        if (cashfloeProjectionOnRetirementchartType == "Doughnut") {

            var bgColor = bgColors(len);
            config = {
                type: 'doughnut',
                data: {
                    datasets: [{
                        data: data1,
                        backgroundColor: bgColor,
                        borderWidth: 0.5,
                        label: 'Annual Income'

                    }, {
                        data: data2,
                        backgroundColor: bgColor,
                        borderWidth: 0.5,
                        label: 'Annual Expenditure'

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
                        text: 'Annual Income & Expenditure'
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

        
        var ctx = document.getElementById('CashflowProjectionOnRetirementcanvas').getContext('2d');
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
            let  data2 = annlincomexpALL.map(function (e) {
               return e.AccumlationIncome;
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



function loadcashfloeProjectionOnRetirementDynamicChartED(){
	
	var cashfloeProjectionOnRetirementDivED = document.getElementById("cashfloeProjectionOnRetirementDivED");
	cashfloeProjectionOnRetirementDivED.innerHTML="";
	cashfloeProjectionOnRetirementDivED.innerHTML="<canvas id='CashflowProjectionOnRetirementcanvasED' class=''></canvas>";
    var chart;
    var config;
     
    //Filter data here based on the condition
    
    var ProjRetirecanvasED = document.getElementById("CashflowProjectionOnRetirementcanvasED");
    var cashfloeProjectionOnRetirementchartTypeED;

//annlincomexpALL({"Age":i,"AnnualIncome":arrlist["Annual income"],"AnnualExpenditure":arrlist["Annual Expenditure"],"Availableretirementfunds-(Surplus/ deficit)":total});

   
    var labels = annlincomexpALL.map(function (e) {
        return e.Age;
    });
//    var data1 = annlincomexpALL.map(function (e) {
//        return e.AnnualIncome;
//    });
//    var data2 = annlincomexpALL.map(function (e) {
//        return e.AnnualExpenditure;
//    });
    var data1 = annlincomexpALL.map(function (e) {
      return e.AvailableretirementfundsSurplusdeficit;
  });
    

    console.log("console.log data1 " + data1);
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
    

    cashfloeProjectionOnRetirementchartTypeED = document.getElementById("cashfloeProjectionOnRetirementchartTypeED").value;

         //BarChart

         if (cashfloeProjectionOnRetirementchartTypeED == "Bar") {
            var fund1data = {
                label: 'Available retirement funds - (Surplus/ deficit)',
                data: data1,
                categoryPercentage: 0.5,
                barPercentage: 1,
                backgroundColor: 'rgba(0, 99, 132, 0.9)',
                hoverBackgroundColor: 'rgba(0, 99, 132, 0.6)',
                borderWidth: 0,
                yAxisID: "y-axis-AnnualIncome"
            };


           

            var fundData = {
                labels: labels,
                datasets: [fund1data],
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
                                labelString: 'Amount'
                            },
                            
                            
                            id: "y-axis-AnnualIncome",
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
                        onPan: function ({ chart }) { CashflowProjectionOnRetirementcanvasED.style.cursor = "grabbing"; },
                        onPanComplete: function ({ chart }) { CashflowProjectionOnRetirementcanvasED.style.cursor = "default"; }
                    },
                    zoom: {
                        enabled: true,
                        drag: false,
                        mode: "x",
                        limits: {
                            max: 10,
                            min: 0.5
                        },
                        onZoom: function ({ chart }) { CashflowProjectionOnRetirementcanvasED.style.cursor = "grabbing"; },
                        onZoomComplete: function ({ chart }) { CashflowProjectionOnRetirementcanvasED.style.cursor = "default"; }

                    }
                }
            };

        }
        //line chart
        if (cashfloeProjectionOnRetirementchartTypeED == "Line") {
            config = {
                type: 'LineWithLine',
                data: {
                    labels: labels,
                    datasets: [
                    {
                        label: 'Available retirement funds - (Surplus/ deficit)',
                        backgroundColor: window.chartColors.red,
                        borderColor: window.chartColors.red,
                        data: data1,
                        fill: false,
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
                                labelString: 'Amount'
                            },
                            id: "y-axis-AnnualIncome",
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
                        onPan: function ({ chart }) { CashflowProjectionOnRetirementcanvasED.style.cursor = "grabbing"; },
                        onPanComplete: function ({ chart }) { CashflowProjectionOnRetirementcanvasED.style.cursor = "default"; }
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
                        onZoom: function ({ chart }) { CashflowProjectionOnRetirementcanvasED.style.cursor = "grabbing"; },
                        onZoomComplete: function ({ chart }) { CashflowProjectionOnRetirementcanvasED.style.cursor = "default"; }

                    }
                }
            };
        }
        //Pie chart

        if (cashfloeProjectionOnRetirementchartTypeED == "Pie") {

            config = {
                type: 'pie',
                data: {
                    datasets: [{
                        data: data1,
                        backgroundColor: bgColors(len),
                        label: 'Available retirement funds - (Surplus/ deficit)'
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
        if (cashfloeProjectionOnRetirementchartTypeED == "Doughnut") {

            var bgColor = bgColors(len);
            config = {
                type: 'doughnut',
                data: {
                    datasets: [{
                        data: data1,
                        backgroundColor: bgColor,
                        borderWidth: 0.5,
                        label: 'Available retirement funds - (Surplus/ deficit)'

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
                        text: 'Available retirement funds'
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

        
        var ctx = document.getElementById('CashflowProjectionOnRetirementcanvasED').getContext('2d');
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

        config.data.labels = labels;
        chart.update();
        chart.resetZoom();
        
}




function loadcashfloeProjectionOnRetirementDynamicChartAccm(){
	
	var cashfloeProjectionOnRetirementDivAccm = document.getElementById("cashfloeProjectionOnRetirementDivAccm");
	cashfloeProjectionOnRetirementDivAccm.innerHTML="";
	cashfloeProjectionOnRetirementDivAccm.innerHTML="<canvas id='CashflowProjectionOnRetirementcanvasAccm' class=''></canvas>";
    var chart;
    var config;
     
    var ProjRetirecanvasAccm = document.getElementById("CashflowProjectionOnRetirementcanvasAccm");
    var cashfloeProjectionOnRetirementchartTypeAccm;

//annlincomexpaccmALL.push({"Age":i,"AccumlationIncome":arrlistAccm["Accumlation income"],"AccumlationExpenditure":arrlistAccm["Accumlation Expenditure"],"AvailableretirementfundsSurplusdeficit":totalAccm});
   
    var labels = annlincomexpaccmALL.map(function (e) {
        return e.Age;
    });
    var data1 = annlincomexpaccmALL.map(function (e) {
        return e.AccumlationIncome;
    });
    var data2 = annlincomexpaccmALL.map(function (e) {
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

    cashfloeProjectionOnRetirementchartTypeAccm = document.getElementById("cashfloeProjectionOnRetirementchartTypeAccm").value;

         //BarChart
         if (cashfloeProjectionOnRetirementchartTypeAccm == "Bar") {
            var fund1data = {
                label: 'Accumlation income',
                data: data1,
                categoryPercentage: 0.5,
                barPercentage: 1,
                backgroundColor: 'rgba(0, 99, 132, 0.9)',
                hoverBackgroundColor: 'rgba(0, 99, 132, 0.6)',
                borderWidth: 0,
                yAxisID: "y-axis-AnnualIncome"
            };

            var fund2data = {
                label: 'Accumlation Expenditure',
                data: data2,
                categoryPercentage: 0.5,
                barPercentage: 1,
                backgroundColor: 'rgba(99, 132, 0, 0.9)',
                hoverBackgroundColor: 'rgba(99, 132, 0, 0.6)',
                borderWidth: 0,
                yAxisID: "y-axis-AnnualIncome"
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
                                labelString: 'Amount'
                            },
                            id: "y-axis-AnnualIncome",
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
                        onPan: function ({ chart }) { CashflowProjectionOnRetirementcanvasAccm.style.cursor = "grabbing"; },
                        onPanComplete: function ({ chart }) { CashflowProjectionOnRetirementcanvasAccm.style.cursor = "default"; }
                    },
                    zoom: {
                        enabled: true,
                        drag: false,
                        mode: "x",
                        limits: {
                            max: 10,
                            min: 0.5
                        },
                        onZoom: function ({ chart }) { CashflowProjectionOnRetirementcanvasAccm.style.cursor = "grabbing"; },
                        onZoomComplete: function ({ chart }) { CashflowProjectionOnRetirementcanvasAccm.style.cursor = "default"; }
                    }
                }
            };
        }
        //line chart
        if (cashfloeProjectionOnRetirementchartTypeAccm == "Line") {
            config = {
                type: 'LineWithLine',
                data: {
                    labels: labels,
                    datasets: [
                    {
                        label: 'Accumlation income',
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
                                labelString: 'Amount'
                            },
                            id: "y-axis-AnnualIncome",
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
                        onPan: function ({ chart }) { CashflowProjectionOnRetirementcanvasAccm.style.cursor = "grabbing"; },
                        onPanComplete: function ({ chart }) { CashflowProjectionOnRetirementcanvasAccm.style.cursor = "default"; }
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
                        onZoom: function ({ chart }) { CashflowProjectionOnRetirementcanvasAccm.style.cursor = "grabbing"; },
                        onZoomComplete: function ({ chart }) { CashflowProjectionOnRetirementcanvasAccm.style.cursor = "default"; }
                    }
                }
            };
        }
        //Pie chart

        if (cashfloeProjectionOnRetirementchartTypeAccm == "Pie") {

            config = {
                type: 'pie',
                data: {
                    datasets: [{
                        data: data1,
                        backgroundColor: bgColors(len),
                        label: 'Accumlation income'
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
        if (cashfloeProjectionOnRetirementchartTypeAccm == "Doughnut") {

            var bgColor = bgColors(len);
            config = {
                type: 'doughnut',
                data: {
                    datasets: [{
                        data: data1,
                        backgroundColor: bgColor,
                        borderWidth: 0.5,
                        label: 'Accumlation income'

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
                        text: 'Accumulated Annual Income & Expenditure'
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

        
        var ctx = document.getElementById('CashflowProjectionOnRetirementcanvasAccm').getContext('2d');
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
            let  data2 = annlincomexpaccmALL.map(function (e) {
               return e.AccumlationIncome;
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




function loadcashfloeProjectionOnRetirementDynamicChartAccmED(){
	
	var cashfloeProjectionOnRetirementDivAccmED = document.getElementById("cashfloeProjectionOnRetirementDivAccmED");
	cashfloeProjectionOnRetirementDivAccmED.innerHTML="";
	cashfloeProjectionOnRetirementDivAccmED.innerHTML="<canvas id='CashflowProjectionOnRetirementcanvasAccmED' class=''></canvas>";
    var chart;
    var config;
     
    var ProjRetirecanvasAccmED = document.getElementById("CashflowProjectionOnRetirementcanvasAccmED");
    var cashfloeProjectionOnRetirementchartTypeAccmED;

//annlincomexpaccmALL.push({"Age":i,"AccumlationIncome":arrlistAccm["Accumlation income"],"AccumlationExpenditure":arrlistAccm["Accumlation Expenditure"],"AvailableretirementfundsSurplusdeficit":totalAccm});
   
    var labels = annlincomexpaccmALL.map(function (e) {
        return e.Age;
    });
    var data1 = annlincomexpaccmALL.map(function (e) {
        return e.AvailableretirementfundsSurplusdeficit;
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

    cashfloeProjectionOnRetirementchartTypeAccmED = document.getElementById("cashfloeProjectionOnRetirementchartTypeAccmED").value;

         //BarChart
         if (cashfloeProjectionOnRetirementchartTypeAccmED == "Bar") {
            var fund1data = {
                label: 'Available retirement funds - (Surplus/ deficit)',
                data: data1,
                categoryPercentage: 0.5,
                barPercentage: 1,
                backgroundColor: 'rgba(0, 99, 132, 0.9)',
                hoverBackgroundColor: 'rgba(0, 99, 132, 0.6)',
                borderWidth: 0,
                yAxisID: "y-axis-AnnualIncome"
            };

             

            var fundData = {
                labels: labels,
                datasets: [fund1data],
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
                                labelString: 'Amount'
                            },
                            id: "y-axis-AnnualIncome",
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
                        onPan: function ({ chart }) { CashflowProjectionOnRetirementcanvasAccmED.style.cursor = "grabbing"; },
                        onPanComplete: function ({ chart }) { CashflowProjectionOnRetirementcanvasAccmED.style.cursor = "default"; }
                    },
                    zoom: {
                        enabled: true,
                        drag: false,
                        mode: "x",
                        limits: {
                            max: 10,
                            min: 0.5
                        },
                        onZoom: function ({ chart }) { CashflowProjectionOnRetirementcanvasAccmED.style.cursor = "grabbing"; },
                        onZoomComplete: function ({ chart }) { CashflowProjectionOnRetirementcanvasAccmED.style.cursor = "default"; }
                    }
                }
            };
        }
        //line chart
        if (cashfloeProjectionOnRetirementchartTypeAccmED == "Line") {
            config = {
                type: 'LineWithLine',
                data: {
                    labels: labels,
                    datasets: [
                    {
                        label: 'Available retirement funds - (Surplus/ deficit)',
                        backgroundColor: window.chartColors.red,
                        borderColor: window.chartColors.red,
                        data: data1,
                        fill: false,
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
                                labelString: 'Amount'
                            },
                            id: "y-axis-AnnualIncome",
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
                        onPan: function ({ chart }) { CashflowProjectionOnRetirementcanvasAccmED.style.cursor = "grabbing"; },
                        onPanComplete: function ({ chart }) { CashflowProjectionOnRetirementcanvasAccmED.style.cursor = "default"; }
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
                        onZoom: function ({ chart }) { CashflowProjectionOnRetirementcanvasAccmED.style.cursor = "grabbing"; },
                        onZoomComplete: function ({ chart }) { CashflowProjectionOnRetirementcanvasAccmED.style.cursor = "default"; }
                    }
                }
            };
        }
        //Pie chart

        if (cashfloeProjectionOnRetirementchartTypeAccmED == "Pie") {

            config = {
                type: 'pie',
                data: {
                    datasets: [{
                        data: data1,
                        backgroundColor: bgColors(len),
                        label: 'Available retirement funds - (Surplus/ deficit)'
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
        if (cashfloeProjectionOnRetirementchartTypeAccmED == "Doughnut") {

            var bgColor = bgColors(len);
            config = {
                type: 'doughnut',
                data: {
                    datasets: [{
                        data: data1,
                        backgroundColor: bgColor,
                        borderWidth: 0.5,
                        label: 'Available retirement funds - (Surplus/ deficit)'

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
                        text: 'Accumulated Available retirement funds - (Surplus/ deficit)'
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

        
        var ctx = document.getElementById('CashflowProjectionOnRetirementcanvasAccmED').getContext('2d');
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

       

        config.data.labels = labels;
        chart.update();
        chart.resetZoom();
        
}


function validationOnProjOfExp(){
	var $rdexpcount = RDExptbl.rows().count();	
	if($rdexpcount<1){
		applyToastrAlert("No Records found in Input Expenditure on retirement based on current cost !");
		$("#RDExpAddRow").focus(); 
		$("#RDExpAddRow").parent().css("border","2px solid #F25B5B");
		return false;
	}
	return true;
}
 
//function validationOnProjOfInc(){
//	var $rdinccount = RDInctbl.rows().count(); 
//	var $rdincasscount = RDIncAsstbl.rows().count();
//	applyErrorToastrAlert
//	if($rdinccount<1  && $rdincasscount<1){
//		applyToastrAlert("No Records found in Income to be received during retirement !");
//		$("#RDIncAddRow").focus(); 
//		$("#RDIncAddRow").parent().css("border","2px solid #F25B5B");
//		return false;
//	}
//	return true;
//}
 
