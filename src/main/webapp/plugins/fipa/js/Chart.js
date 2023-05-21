 
      //  console.log(JSON.stringify(jsonfile));
         
        function loadDynamicChartSelf() {
        	 $("#detailsExpenseCharttittle").val("");
        	 var configSelf ="";
           
             document.getElementById("AnnualIncomeandExpensediv").style.display = "none";
             //Filter data here based on the condition
             
             var chartTypeSelf ="";
           
             var bgColors = "";
             var bgColor = "";
             var len = "";
             
             var AnnualIncomeSpouseJSONArray=[];
             var AnnualIncomeJointJSONArray=[];
             
             var selfmychart="";
            
        	
        	var AnnualIncomeSELFJSONArray=[];
        	 
        	//<canvas id="canvasSelf" class=""></canvas>
           var canvasSelfDiv = document.getElementById("canvasSelfDiv");
               canvasSelfDiv.innerHTML="";
               canvasSelfDiv.innerHTML="<canvas id='canvasSelf' class=''></canvas>";
      
        	var MonthlyGrossIncomeSELF,BonusSELF,NonEmpMonthlyIncomeSELF ,NonEmpAnnualRentalIncomeSELF ,NonEmpInvestmentIncomedividendsgains ,NonEmpOtherIncomeSELF ;
        	var AnnExpOutRentalforLodgings,AnnExpOutUtilitiescommunication,AnnExpOutGroceryHouseholdNeeds ,AnnExpOutEatingout ,AnnExpOutClothingApparel ,AnnExpOutTransportation ,AnnExpOutMedicalPersonalCare ,AnnExpOutPersonalExpenses ,AnnExpOutDependantContributions,AnnExpOutTaxes ,AnnExpOutEntertainment ,AnnExpOutFestiveSpending ,AnnExpOutVacations ,AnnExpOutCharity ,AnnExpOutLoanRepayment ,AnnExpOutPropertyLoanRepayment ,AnnExpOutVehicleLoanRepayment ,AnnExpOutLifeInsurancePremiums ,AnnExpOutGeneralInsurancePremiums ,AnnExpOutOtherExpenses  ;
        	var AnnExpOutAnnualExpenses;
        	//Employment Income SELF
        	MonthlyGrossIncomeSELF = (isEmpty($('#incsrcSelfEmpMonthly').val()) ? "0" :$('#incsrcSelfEmpMonthly').val());
        	BonusSELF = (isEmpty ($('#incsrcSelfEmpAddlwage').val())? "0" : $('#incsrcSelfEmpAddlwage').val());
        	
        	
        	//Non-employment Income SELF
       	    NonEmpMonthlyIncomeSELF = ( isEmpty ($('#incsrcSelfNempMonthly').val())? "0" : $('#incsrcSelfNempMonthly').val()); 
       	    NonEmpAnnualRentalIncomeSELF = ( isEmpty ($('#incsrcSelfNempRentamt').val())? "0" : $('#incsrcSelfNempRentamt').val());  
       	    NonEmpInvestmentIncomedividendsgains =( isEmpty ($('#incsrcSelfNempDivdamt').val()) ? "0" : $('#incsrcSelfNempDivdamt').val());


       	   
       	    NonEmpOtherIncomeSELF = (isEmpty($('#incsrcSelfNempOthamt').val())? "0" :$('#incsrcSelfNempOthamt').val());
       	    
       	       
       	    //Annual Expenditure - Outflow
        	AnnExpOutRentalforLodgings =(isEmpty($('#expdSelfRent').val())? "0" :$('#expdSelfRent').val());  
        	AnnExpOutUtilitiescommunication =(isEmpty($('#expdSelfUtil').val()) ? "0" : $('#expdSelfUtil').val());
        	AnnExpOutGroceryHouseholdNeeds =(isEmpty($('#expdSelfGrocery').val()) ? "0" : $('#expdSelfGrocery').val()); 
        	AnnExpOutEatingout =(isEmpty($('#expdSelfEatingout').val()) ? "0" : $('#expdSelfEatingout').val()); 
        	AnnExpOutClothingApparel = (isEmpty($('#expdSelfClothing').val()) ? "0" : $('#expdSelfClothing').val()); 
        	AnnExpOutTransportation = (isEmpty($('#expdSelfTransport').val()) ? "0" : $('#expdSelfTransport').val()); 
        	AnnExpOutMedicalPersonalCare =(isEmpty($('#expdSelfMedical').val()) ? "0" : $('#expdSelfMedical').val()); 
        	AnnExpOutPersonalExpenses =(isEmpty($('#expdSelfPersonal').val()) ? "0" : $('#expdSelfPersonal').val()); 
        	AnnExpOutDependantContributions =(isEmpty($('#expdSelfDepntcontr').val()) ? "0" : $('#expdSelfDepntcontr').val()); 
        	AnnExpOutTaxes =(isEmpty($('#expdSelfTaxes').val()) ? "0" : $('#expdSelfTaxes').val()); 
        	AnnExpOutEntertainment =(isEmpty($('#expdSelfEntertain').val()) ? "0" : $('#expdSelfEntertain').val()); 
        	AnnExpOutFestiveSpending =(isEmpty($('#expdSelfFestiv').val()) ? "0" : $('#expdSelfFestiv').val()); 
        	AnnExpOutVacations =(isEmpty($('#expdSelfVacations').val()) ? "0" : $('#expdSelfVacations').val()); 
        	AnnExpOutCharity =(isEmpty($('#expdSelfCharity').val()) ? "0" : $('#expdSelfCharity').val()); 
        	AnnExpOutLoanRepayment =(isEmpty($('#expdSelfLoanrepay').val()) ? "0" : $('#expdSelfLoanrepay').val()); 
        	AnnExpOutPropertyLoanRepayment =(isEmpty($('#expdSelfProploan').val()) ? "0" : $('#expdSelfProploan').val()); 
        	AnnExpOutVehicleLoanRepayment =(isEmpty($('#expdSelfVehiloan').val()) ? "0" : $('#expdSelfVehiloan').val()); 
        	AnnExpOutLifeInsurancePremiums =(isEmpty($('#expdSelfInsurance').val()) ? "0" : $('#expdSelfInsurance').val());
        	AnnExpOutGeneralInsurancePremiums =(isEmpty($('#expdSelfGi').val()) ? "0" : $('#expdSelfGi').val()); 
        	AnnExpOutOtherExpenses = (isEmpty($('#expdSelfOthers').val()) ? "0" : $('#expdSelfOthers').val());     
        	
        	//Annual Expenditure - Outflow -- final total amount
        	AnnExpOutAnnualExpenses =(isEmpty($('#expdSelfTotalannl').val()) ? "0" : $('#expdSelfTotalannl').val());
        	
        	//console.log(" AnnExpOutDependantContributions -->" + AnnExpOutDependantContributions);
        	var yearlyGrossIncomeSELF = (MonthlyGrossIncomeSELF * 12 ); 
        	var EmploymentAnnualIncomeSELF =  (parseFloat(yearlyGrossIncomeSELF) + parseFloat(BonusSELF));
        	
        	var yearlyNonEmpMonthlyIncomeSELF = (NonEmpMonthlyIncomeSELF * 12 );
        	var NonEmploymentAnnualIncomeSELF  = (parseFloat(yearlyNonEmpMonthlyIncomeSELF) + parseFloat(NonEmpAnnualRentalIncomeSELF) + parseFloat(NonEmpInvestmentIncomedividendsgains) + parseFloat(NonEmpOtherIncomeSELF));
        	var TotalAnnualInflowSELF =(parseFloat( EmploymentAnnualIncomeSELF) + parseFloat(NonEmploymentAnnualIncomeSELF));
        	
        	var TotalAnnualExpenditureSELF =(parseFloat(AnnExpOutRentalforLodgings) + parseFloat(AnnExpOutUtilitiescommunication) + parseFloat(AnnExpOutGroceryHouseholdNeeds) + parseFloat(AnnExpOutEatingout) + parseFloat(AnnExpOutClothingApparel) + parseFloat(AnnExpOutTransportation) + parseFloat(AnnExpOutMedicalPersonalCare) + parseFloat(AnnExpOutPersonalExpenses) + parseFloat(AnnExpOutDependantContributions) + parseFloat(AnnExpOutTaxes) + parseFloat(AnnExpOutEntertainment) + parseFloat(AnnExpOutFestiveSpending) + parseFloat(AnnExpOutVacations) + parseFloat(AnnExpOutCharity) + parseFloat(AnnExpOutLoanRepayment) + parseFloat(AnnExpOutPropertyLoanRepayment) + parseFloat(AnnExpOutVehicleLoanRepayment) + parseFloat(AnnExpOutLifeInsurancePremiums) + parseFloat(AnnExpOutGeneralInsurancePremiums) + parseFloat(AnnExpOutOtherExpenses)  );                         
        	var TotAnnualExpensesSELF = parseFloat(AnnExpOutAnnualExpenses);
        	
        	//var AnnualIncomeSELFJSONObject = {"key":"Annual Income","value":TotalAnnualInflowSELF};
        	//var AnnualExpenseSELFJSONObject = {"key":"Annual Expense","value":TotAnnualExpensesSELF};
        	var AnnualIncomeSELFJSONObject = {"key":"Annual Income","value":TotalAnnualInflowSELF, "Annual Gross Income":yearlyGrossIncomeSELF,"Bonus":BonusSELF,"Annual Income":yearlyNonEmpMonthlyIncomeSELF, "Annual Rental Income":NonEmpAnnualRentalIncomeSELF,"Investment Income dividends gains": NonEmpInvestmentIncomedividendsgains,"Other Income": NonEmpOtherIncomeSELF};
        	var AnnualExpenseSELFJSONObject = {"key":"Annual Expense","value":TotAnnualExpensesSELF, "Rental for Lodgings":AnnExpOutRentalforLodgings, "Utilities communication": AnnExpOutUtilitiescommunication, "Grocery Household Needs": AnnExpOutGroceryHouseholdNeeds , "Eating out": AnnExpOutEatingout ,"Clothing Apparel": AnnExpOutClothingApparel,"Transportation" : AnnExpOutTransportation , "Medical Personal Care" :AnnExpOutMedicalPersonalCare , "Personal Expenses": AnnExpOutPersonalExpenses ,"Dependant Contributions" :AnnExpOutDependantContributions ,"Taxes": AnnExpOutTaxes ,"Entertainment": AnnExpOutEntertainment ,"Festive Spending": AnnExpOutFestiveSpending ,"Vacations": AnnExpOutVacations, "Charity": AnnExpOutCharity ,"Loan Repayment": AnnExpOutLoanRepayment ,"Property Loan Repayment": AnnExpOutPropertyLoanRepayment , "Vehicle Loan Repayment": AnnExpOutVehicleLoanRepayment, "Life Insurance Premiums": AnnExpOutLifeInsurancePremiums , "General Insurance Premiums": AnnExpOutGeneralInsurancePremiums ,"Other Expenses": AnnExpOutOtherExpenses };

        	AnnualIncomeSELFJSONArray.push(AnnualIncomeSELFJSONObject);
        	AnnualIncomeSELFJSONArray.push(AnnualExpenseSELFJSONObject);
      // console.log("AnnualIncomeSELFJSONArray " + AnnualIncomeSELFJSONArray.length);
        	if(TotalAnnualInflowSELF == 0 && TotAnnualExpensesSELF == 0){
        		  $("#selfnodatafount").css('display','block');
        		  $("#canvasSelfDiv").css('display','none');
        	}else{
        		 $("#selfnodatafount").css('display','none');
        		 $("#canvasSelfDiv").css('display','block');
        		 
        	}
       // if(AnnualIncomeSELFJSONArray.length > 0){
        	var labels = AnnualIncomeSELFJSONArray.map(function (e) {
                return  e.key;
            });
        	var datavalue = AnnualIncomeSELFJSONArray.map(function (e) {
                return  e.value;
            });
        	 
            var canvasSelf = document.getElementById("canvasSelf");
            var randomColorGenerator = () => {
                return '#' + (Math.random().toString(16) + '0000000').slice(2, 8);
            };
           
           var len = datavalue.length;
             
             bgColors = function (len) {
                var bgArray = new Array(len);
                for (var j = 0; j < len; j++) {
                    bgArray[j] = randomColorGenerator();
                }
                return bgArray;
            }
            
           
            chartTypeSelf = document.getElementById("chartTypeSelf").value;
            //Pie chart
            if (chartTypeSelf == "Pie") { 
            	configSelf = {
                        type: 'pie',
                        data: {
                            datasets: [{
                                
                                data: datavalue,
                                backgroundColor: bgColors(len),
                                borderWidth: 0.5,
                                label: 'Annual Income and Expense ' 
                            }],
                            labels: labels 
                        },
                         
                        options: {
                            responsive: true,
                            legend: {
                                position: 'left',
                            },
                           // title: {
                           //     display: true,
                          //      text: 'Self Annual Income and Expense'
                           // },
                            tooltips: {
                                callbacks: {
                                    label: function (item, data) {
                                    	 return  data.labels[item.index] + " : " + data.datasets[item.datasetIndex].data[item.index]+' $ ';
                                    }
                                }
                            },
                            plugins: {
                                labels: {
				              render: 'percentage',
				              fontColor: ['white','white'],
				              precision: 2
				            } 
                        }
                        },
                    };
            }
            
            //Donut chart
            if (chartTypeSelf == "Doughnut") {
            	 
                  bgColor = bgColors(len);
                  configSelf = {
                    type: 'doughnut',
                    data: {
                        datasets: [{
                            data: datavalue,
                            backgroundColor: bgColor,
                            borderWidth: 0.5,
                            label: 'Annual Income and Expense'
                        }],
                        labels: labels,
                        datavalue: datavalue
                    },
                    options: {
                        responsive: true,
                        legend: {
                            position: 'bottom',
                        },
                       // title: {
                        //    display: true,
                       //     text: 'Self Annual Income and Expense'
                       // },
                        animation: {
                            animateScale: true,
                            animateRotate: true
                        },
                        tooltips: {
                            callbacks: {
                                label: function (item, data) {
                                	return data.labels[item.index] + " : " + data.datasets[item.datasetIndex].data[item.index]+' $ ';
                                }
                            }
                        },
                        plugins: {
                            labels: {
				          render: 'percentage',
				          fontColor: ['white','white'],
				          precision: 2
				        } 
                    }
                    }
                };
            }
          
            var ctxSelf = document.getElementById('canvasSelf').getContext('2d');
            selfmychart = new Chart(ctxSelf, configSelf, {onClick:function(e){ 
            }});
          
            selfmychart.destroy();
            selfmychart = new Chart(ctxSelf, configSelf, {onClick:function(e){ 
           }});
           
           window.resetZoom  = function () {
             	selfmychart.resetZoom();
             };
             
          // let bgColor;
           if (configSelf.type == "doughnut" || configSelf.type == "pie" ){
           	bgColor = bgColors(datavalue.length);
           }
           configSelf.data.datasets[0].data = datavalue;
           if (bgColor != undefined) {
           	configSelf.data.datasets[0].backgroundColor = bgColor;
           }
          
           selfmychart.update();
           selfmychart.resetZoom();
      
           document.getElementById("canvasSelf").onclick = function (evt) {
               var activePoints = selfmychart.getElementsAtEventForMode(evt, 'point', selfmychart.options);
               var firstPoint = activePoints[0];
               var finallabel ="";
                var value = "";
                if (firstPoint) {
                finallabel = selfmychart.data.labels[firstPoint._index];
                value = selfmychart.data.datasets[firstPoint._datasetIndex].data[firstPoint._index];
              // alert(label + ": " + value);
                  }
              
               document.getElementById("AnnualIncomeandExpensediv").style.display = "block";
        
               loadDynamicChartSelfnew(AnnualIncomeSELFJSONArray,finallabel);
        }
        
//}else{
      //  var canvasSelfDiv = document.getElementById("canvasSelfDiv");
     //          canvasSelfDiv.innerHTML="";
     //   document.getElementById("selfnodatafount");
     //   $(".selfnodatafount").css('display','block');
    //    }
        
        
        }
       
       //self bar chart
       function loadDynamicChartSelfnew(AnnualIncomeSELFJSONArray,finallabel){
        	   var labelsValidate =finallabel;
        	             var firstvalue="";
        	             var secondvalue="";

        	             for(var i=0; i<AnnualIncomeSELFJSONArray.length;i++){
        	               firstvalue=AnnualIncomeSELFJSONArray[0];
        	               secondvalue=AnnualIncomeSELFJSONArray[1];
        	             }
        	    
        	   var firstvaluekey=[];
        	   var firstvalueVal=[];

        	   for (var [key, value] of Object.entries(firstvalue)) {
        	     
        	     if(key!="key" && key!="value")
        	     {
        	       firstvaluekey.push(key);
        	       firstvalueVal.push(value);
        	     } 
        	   }

        	   var secondvaluekey=[];
        	   var secondvalueVal=[];
        	    
        	   for (var [key, value] of Object.entries(secondvalue)) {
        	      
        	     if(key!="key" && key!="value")
        	     {
        	       secondvaluekey.push(key);
        	       secondvalueVal.push(value);
        	     }
        	   }
        	    
        	   var IncomeandExpenseDiv = document.getElementById("IncomeandExpenseDiv");
        	   IncomeandExpenseDiv.innerHTML="";
        	   IncomeandExpenseDiv.innerHTML="<canvas id='canvasSelfBarChart' class=''></canvas>";

        	   var labels="";
        	   var data1 ="";
        	   if(labelsValidate =="Annual Income"){
        		   $("#detailsExpenseCharttittle").val("Details of Income");
        	       labels= firstvaluekey ;
        	       data1=firstvalueVal;
        	   }else if(labelsValidate =="Annual Expense"){
        		   $("#detailsExpenseCharttittle").val("Details of Expense");
        	       labels=secondvaluekey;
        	       data1=secondvalueVal;
        	   }
        	           
        	   var configSelfBar="";
        	   //Filter data here based on the condition

        	   var chartTypeSelfnew ="";
        	   var chartTypeSpouse="";
        	   
        	   var bgColor = "";
        	   var selfbarchart="";
        	   
        	          
        	               var randomColorGenerator = () => {
        	                   return '#' + (Math.random().toString(16) + '0000000').slice(2, 8);
        	               };
        	              
        	             var  len = data1.length;
        	              
        	               var  bgColors = function (len) {
        	                   var bgArray = new Array(len);
        	                   for (var j = 0; j < len; j++) {
        	                       bgArray[j] = randomColorGenerator();
        	                   }
        	                   return bgArray;
        	               }

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

        	           chartTypeSelfnew = "Bar";

        	           if (chartTypeSelfnew == "Bar") {
        	               var bgColor = bgColors(len);
        	                   var fund1data = {
        	                       label: 'Annual Income',
        	                       data: data1,
        	                       categoryPercentage: 0.5,
        	                       barPercentage: 1,
        	                       backgroundColor: bgColor,
        	                        
        	                       borderWidth: 0,
        	                       yAxisID: "y-axis-AnnualIncome"
        	                   };

        	                   var fundData = {
        	                       labels: labels,
        	                       datasets: [fund1data],

        	                   };

        	                   configSelfBar = {
        	                       type: 'bar',
        	                       data: fundData,
        	                       options: {
        	                           tooltips: {
        	                               mode: 'label',
        	                               callbacks: {
        	                                   title: function(tooltipItems, data) {
        	                                   return tooltipItems[0].xLabel ;
        	                                   },
        	                                   label: (tooltipItem, data) => {
        	                                	   return ;
        	                                       
        	                                      // return data.datasets[tooltipItem.datasetIndex].label + " : $ " + tooltipItem.yLabel;
        	                                   },
        	                                   footer: (tooltipItems, data) => {
        	                                       let total = tooltipItems.reduce((a, e) => a + parseFloat(e.yLabel), 0);
        	                                       return ' Total : $ ' + total.toFixed(3);
        	                                   }
        	                               }
        	                           },

        	                           plugins: {
        	                               labels:false
        	                       },
        	                       legend: {
        	                       	display: false
        	                       },

        	                           scales: {
        	                               xAxes: [{
        	                                   display: true,
        	                                   scaleLabel: {
        	                                       display: true,
        	                                       labelString: ' '
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
        	                               }]
        	                           },
        	                           pan: {
        	                               enabled: true,
        	                               mode: "x",
        	                               speed: 10,
        	                               threshold: 10,
        	                               onPan: function ({ chart }) { canvasSelfBarChart.style.cursor = "grabbing"; },
        	                               onPanComplete: function ({ chart }) { canvasSelfBarChart.style.cursor = "default"; }
        	                           },
        	                           zoom: {
        	                               enabled: true,
        	                               drag: false,
        	                               mode: "x",
        	                               limits: {
        	                                   max: 10,
        	                                   min: 0.5
        	                               },
        	                               onZoom: function ({ selfbarchart }) { canvasSelfBarChart.style.cursor = "grabbing"; },
        	                               onZoomComplete: function ({ selfbarchart }) { canvasSelfBarChart.style.cursor = "default"; }
        	                           }
        	                       }
        	                   };
        	               }
 
        	               var ctxSelf = document.getElementById('canvasSelfBarChart').getContext('2d');
        	                selfbarchart = new Chart(ctxSelf, configSelfBar );
        	             
        	               selfbarchart.destroy();
        	               selfbarchart = new Chart(ctxSelf, configSelfBar );
        	               
        	               window.resetZoom  = function () {
        	                 	selfbarchart.resetZoom();
        	                 };
        	                 
        	              // let bgColor;
        	               if (configSelfBar.type == "doughnut" || configSelfBar.type == "pie" ){
        	               	bgColor = bgColors(data1.length);
        	               }
        	               configSelfBar.data.datasets[0].data = data1;
        	               if (bgColor != undefined) {
        	            	   configSelfBar.data.datasets[0].backgroundColor = bgColor;
        	               }
        	              // config.data.labels = labels;
        	               selfbarchart.update();
        	               selfbarchart.resetZoom();
        	         }
           
           //Spouse Chart
        function loadDynamicChartSpouse(){
        	 $("#detailsExpenseSpouseCharttittle").val("");
        	 var configSelf ="";
             var configSpouse ="";
             document.getElementById("SpouseAnnualIncomeandExpensediv").style.display = "none";
             //Filter data here based on the condition
             
             var chartTypeSelf ="";
             var chartTypeSpouse="";
             var bgColors = "";
             var bgColor = "";
             var len = "";
 
             var AnnualIncomeJointJSONArray=[];
           
             var spousemychart="";
             var mySpousechart="";
        	
             var canvasSpouseDiv = document.getElementById("canvasSpouseDiv");
             canvasSpouseDiv.innerHTML="";
             canvasSpouseDiv.innerHTML="<canvas id='canvasSpouse' class=''></canvas>";
             
        	var AnnualIncomeSpouseJSONArray=[];
            
          	var MonthlyGrossIncomeSpouse ,BonusSpouse,NonEmpMonthlyIncomeSpouse ,NonEmpAnnualRentalIncomeSpouse ,NonEmpInvestmentIncomedividendsgainsSpouse,NonEmpOtherIncomeSpouse ;
          	var AnnExpOutRentalforLodgingsSpouse ,AnnExpOutUtilitiescommunicationSpouse ,AnnExpOutGroceryHouseholdNeedsSpouse ,AnnExpOutEatingoutSpouse ,AnnExpOutClothingApparelSpouse ,AnnExpOutTransportationSpouse ,AnnExpOutMedicalPersonalCareSpouse ,AnnExpOutPersonalExpensesSpouse ,AnnExpOutDependantContributionsSpouse ,AnnExpOutTaxesSpouse ,AnnExpOutEntertainmentSpouse ,AnnExpOutFestiveSpendingSpouse ,AnnExpOutVacationsSpouse ,AnnExpOutCharitySpouse ,AnnExpOutLoanRepaymentSpouse ,AnnExpOutPropertyLoanRepaymentSpouse ,AnnExpOutVehicleLoanRepaymentSpouse ,AnnExpOutLifeInsurancePremiumsSpouse ,AnnExpOutGeneralInsurancePremiumsSpouse ,AnnExpOutOtherExpensesSpouse  ;
          	var AnnExpOutAnnualExpensesSpouse ;
         
          //Employment Income Spouse
          	MonthlyGrossIncomeSpouse = (isEmpty($('#incsrcSpsEmpMonthly').val()) ? "0" : $('#incsrcSpsEmpMonthly').val()); 
            BonusSpouse = (isEmpty($('#incsrcSpsEmpAddlwage').val()) ? "0" : $('#incsrcSpsEmpAddlwage').val());
          
          //Non-employment Income Spouse
           	NonEmpMonthlyIncomeSpouse = (isEmpty($('#incsrcSpsNempMonthly').val()) ? "0" : $('#incsrcSpsNempMonthly').val());  
           	NonEmpAnnualRentalIncomeSpouse = (isEmpty($('#incsrcSpsNempRentamt').val()) ? "0" : $('#incsrcSpsNempRentamt').val());  
           	NonEmpInvestmentIncomedividendsgainsSpouse  = (isEmpty($('#incsrcSpsNempDivdamt').val()) ? "0" : $('#incsrcSpsNempDivdamt').val());  
           	NonEmpOtherIncomeSpouse = (isEmpty($('#incsrcSpsNempOthamt').val()) ? "0" : $('#incsrcSpsNempOthamt').val());
          
           //Annual Expenditure - Outflow
           	AnnExpOutRentalforLodgingsSpouse =(isEmpty($('#expdSpsRent').val()) ? "0" : $('#expdSpsRent').val());  
           	AnnExpOutUtilitiescommunicationSpouse =(isEmpty($('#expdSpsUtil').val()) ? "0" : $('#expdSpsUtil').val()); 
           	AnnExpOutGroceryHouseholdNeedsSpouse =(isEmpty($('#expdSpsGrocery').val()) ? "0" : $('#expdSpsGrocery').val()); 
           	AnnExpOutEatingoutSpouse =(isEmpty($('#expdSpsEatingout').val()) ? "0" : $('#expdSpsEatingout').val()); 
           	AnnExpOutClothingApparelSpouse = (isEmpty($('#expdSpsClothing').val()) ? "0" : $('#expdSpsClothing').val()); 
           	AnnExpOutTransportationSpouse = (isEmpty($('#expdSpsTransport').val()) ? "0" : $('#expdSpsTransport').val()); 
           	AnnExpOutMedicalPersonalCareSpouse =(isEmpty($('#expdSpsMedical').val()) ? "0" : $('#expdSpsMedical').val()); 
           	AnnExpOutPersonalExpensesSpouse =(isEmpty($('#expdSpsPersonal').val()) ? "0" : $('#expdSpsPersonal').val()); 
           	AnnExpOutDependantContributionsSpouse =(isEmpty($('#expdSpsDepntcontr').val()) ? "0" : $('#expdSpsDepntcontr').val()); 
           	AnnExpOutTaxesSpouse =(isEmpty($('#expdSpsTaxes').val()) ? "0" : $('#expdSpsTaxes').val()); 
           	AnnExpOutEntertainmentSpouse =(isEmpty($('#expdSpsEntertain').val()) ? "0" : $('#expdSpsEntertain').val()); 
           	AnnExpOutFestiveSpendingSpouse =(isEmpty($('#expdSpsFestiv').val()) ? "0" : $('#expdSpsFestiv').val()); 
           	AnnExpOutVacationsSpouse =(isEmpty($('#expdSpsVacations').val()) ? "0" : $('#expdSpsVacations').val()); 
           	AnnExpOutCharitySpouse =(isEmpty($('#expdSpsCharity').val()) ? "0" : $('#expdSpsCharity').val()); 
           	AnnExpOutLoanRepaymentSpouse =(isEmpty($('#expdSpsLoanrepay').val()) ? "0" : $('#expdSpsLoanrepay').val()); 
           	AnnExpOutPropertyLoanRepaymentSpouse =(isEmpty($('#expdSpsProploan').val()) ? "0" : $('#expdSpsProploan').val()); 
           	AnnExpOutVehicleLoanRepaymentSpouse =(isEmpty($('#expdSpsVehiloan').val()) ? "0" : $('#expdSpsVehiloan').val()); 
           	AnnExpOutLifeInsurancePremiumsSpouse =(isEmpty($('#expdSpsInsurance').val()) ? "0" : $('#expdSpsInsurance').val()); 
           	AnnExpOutGeneralInsurancePremiumsSpouse =(isEmpty($('#expdSpsGi').val()) ? "0" : $('#expdSpsGi').val()); 
           	AnnExpOutOtherExpensesSpouse = (isEmpty($('#expdSpsOthers').val()) ? "0" : $('#expdSpsOthers').val());                        
          	
          	AnnExpOutAnnualExpensesSpouse =(isEmpty($('#expdSpsTotalannl').val()) ? "0" : $('#expdSpsTotalannl').val());
          	 
          	var yearlyGrossIncomeSpouse = (MonthlyGrossIncomeSpouse * 12 ); 
           	var EmploymentAnnualIncomeSpouse =  (parseFloat(yearlyGrossIncomeSpouse) + parseFloat(BonusSpouse));
          	
           	var yearlyNonEmpMonthlyIncomeSpouse = (NonEmpMonthlyIncomeSpouse * 12 );
          	var NonEmploymentAnnualIncomeSpouse  = (parseFloat(yearlyNonEmpMonthlyIncomeSpouse) + parseFloat(NonEmpAnnualRentalIncomeSpouse) + parseFloat(NonEmpInvestmentIncomedividendsgainsSpouse) + parseFloat(NonEmpOtherIncomeSpouse));
             
          	var TotalAnnualInflowSpouse =(parseFloat( EmploymentAnnualIncomeSpouse) + parseFloat(NonEmploymentAnnualIncomeSpouse));
          	
          	var TotalAnnualExpenditureSpouse =(parseFloat(AnnExpOutRentalforLodgingsSpouse) + parseFloat(AnnExpOutUtilitiescommunicationSpouse) + parseFloat(AnnExpOutGroceryHouseholdNeedsSpouse) + parseFloat(AnnExpOutEatingoutSpouse) + parseFloat(AnnExpOutClothingApparelSpouse) + parseFloat(AnnExpOutTransportationSpouse) + parseFloat(AnnExpOutMedicalPersonalCareSpouse) + parseFloat(AnnExpOutPersonalExpensesSpouse) + parseFloat(AnnExpOutDependantContributionsSpouse) + parseFloat(AnnExpOutTaxesSpouse) + parseFloat(AnnExpOutEntertainmentSpouse) + parseFloat(AnnExpOutFestiveSpendingSpouse) + parseFloat(AnnExpOutVacationsSpouse) + parseFloat(AnnExpOutCharitySpouse) + parseFloat(AnnExpOutLoanRepaymentSpouse) + parseFloat(AnnExpOutPropertyLoanRepaymentSpouse) + parseFloat(AnnExpOutVehicleLoanRepaymentSpouse) + parseFloat(AnnExpOutLifeInsurancePremiumsSpouse) + parseFloat(AnnExpOutGeneralInsurancePremiumsSpouse) + parseFloat(AnnExpOutOtherExpensesSpouse)  );                         
          	var TotAnnualExpensesSpouse = parseFloat(AnnExpOutAnnualExpensesSpouse);
          	
          	//var AnnualIncomeSpouseJSONObjectOne = {"key":"Annual Income ","value":TotalAnnualInflowSpouse};
          	//var AnnualIncomeSpouseJSONObjectTwo = {"key":"Annual Expense ","value":TotAnnualExpensesSpouse};
          	
          	var AnnualIncomeSpouseJSONObject = {"key":"Annual Income","value":TotalAnnualInflowSpouse, "Annual Gross Income":yearlyGrossIncomeSpouse,"Bonus":BonusSpouse,"Annual Income":yearlyNonEmpMonthlyIncomeSpouse, "Annual Rental Income":NonEmpAnnualRentalIncomeSpouse,"Investment Incomedividends gains": NonEmpInvestmentIncomedividendsgainsSpouse,"Other Income": NonEmpOtherIncomeSpouse};
        	var AnnualExpenseSpouseJSONObject = {"key":"Annual Expense","value":TotAnnualExpensesSpouse, "Rental for Lodgings":AnnExpOutRentalforLodgingsSpouse, "Utilities communication": AnnExpOutUtilitiescommunicationSpouse, "Grocery Household Needs": AnnExpOutGroceryHouseholdNeedsSpouse , "Eating out": AnnExpOutEatingoutSpouse ,"Clothing Apparel": AnnExpOutClothingApparelSpouse,"Transportation" : AnnExpOutTransportationSpouse , "Medical Personal Care" :AnnExpOutMedicalPersonalCareSpouse , "Personal Expenses": AnnExpOutPersonalExpensesSpouse ,"Dependant Contributions" :AnnExpOutDependantContributionsSpouse ,"Taxes": AnnExpOutTaxesSpouse ,"Entertainment": AnnExpOutEntertainmentSpouse ,"Festive Spending": AnnExpOutFestiveSpendingSpouse ,"Vacations": AnnExpOutVacationsSpouse, "Charity": AnnExpOutCharitySpouse ,"Loan Repayment": AnnExpOutLoanRepaymentSpouse ,"Property Loan Repayment": AnnExpOutPropertyLoanRepaymentSpouse , "Vehicle Loan Repayment": AnnExpOutVehicleLoanRepaymentSpouse, "Life Insurance Premiums": AnnExpOutLifeInsurancePremiumsSpouse , "General Insurance Premiums": AnnExpOutGeneralInsurancePremiumsSpouse ,"Other Expenses": AnnExpOutOtherExpensesSpouse };

          	AnnualIncomeSpouseJSONArray.push(AnnualIncomeSpouseJSONObject);
          	AnnualIncomeSpouseJSONArray.push(AnnualExpenseSpouseJSONObject);
           //console.log("AnnualIncomeSpouseJSONArray " + AnnualIncomeSpouseJSONArray.length);
          	
          	if(TotalAnnualInflowSpouse == 0 && TotAnnualExpensesSpouse == 0){
      		  $("#spousenodatafount").css('display','block');
      		 $("#canvasSpouseDiv").css('display','none');
      	}
          	else{
          		 $("#spousenodatafount").css('display','none');
          		 $("#canvasSpouseDiv").css('display','block');
          	}
           //if(AnnualIncomeSpouseJSONArray.length > 0){

        	var labels = AnnualIncomeSpouseJSONArray.map(function (e) {
                return  e.key;
            });
        	var datavalue = AnnualIncomeSpouseJSONArray.map(function (e) {
                return  e.value;
            });
        	 
            var canvasSpouse = document.getElementById("canvasSpouse");
            var randomColorGenerator = () => {
                return '#' + (Math.random().toString(16) + '0000000').slice(2, 8);
            };
           
            len = datavalue.length;
             bgColors = function (len) {
                var bgArray = new Array(len);
                for (var j = 0; j < len; j++) {
                    bgArray[j] = randomColorGenerator();
                }
                return bgArray;
            }
            
             chartTypeSpouse = document.getElementById("chartTypeSpouse").value;
             //Pie chart
             if (chartTypeSpouse == "Pie") {
            	 configSpouse = {
                     type: 'pie',
                     data: {
                         datasets: [{
                             data: datavalue,
                             backgroundColor: bgColors(len),
                             borderWidth: 0.5,
                             label: 'Annual Income and Expense ' 
                         }],
                         labels: labels 
                     },
                      
                     options: {
                         responsive: true,
                         legend: {
                             position: 'left',
                         },
                      //   title: {
                      //       display: true,
                      //       text: 'Spouse Annual Income and Expense'
                      //   },
                         tooltips: {
                             callbacks: {
                                 label: function (item, data) {
                                 	 return  data.labels[item.index] + " : " + data.datasets[item.datasetIndex].data[item.index]+' $ ';
                                 	//data.datasets[item.datasetIndex].label + " : " +
                                 }
                             }
                         },
                         plugins: {
                             labels: {
					           render: 'percentage',
					           fontColor: ['white','white'],
					           precision: 2
					         } 
                     }
                     },
                 };
             }
             
             //Donut chart
             if (chartTypeSpouse == "Doughnut") {
                   bgColor = bgColors(len);
                   configSpouse = {
                     type: 'doughnut',
                     data: {
                         datasets: [{
                             data: datavalue,
                             backgroundColor: bgColor,
                             borderWidth: 0.5,
                             label: 'Annual Income and Expense'
                         }],
                         labels: labels,
                         datavalue: datavalue
                     },
                     options: {
                         responsive: true,
                         legend: {
                             position: 'bottom',
                         },
                    //     title: {
                     //        display: true,
                     //        text: 'Spouse Annual Income and Expense'
                     //    },
                         animation: {
                             animateScale: true,
                             animateRotate: true
                         },
                         tooltips: {
                             callbacks: {
                                 label: function (item, data) {
                                 	return  data.labels[item.index] + " : " + data.datasets[item.datasetIndex].data[item.index]+' $ ';
                                 	//data.datasets[item.datasetIndex].label + " : " +
                                 }
                             }
                         },
                         plugins: {
                             labels: {
				           render: 'percentage',
				           fontColor: ['white','white'],
				           precision: 2
				         } 
                     }
                     }
                 };
             }
             
             var ctxSpouse = document.getElementById('canvasSpouse').getContext('2d');
              mySpousechart = new Chart(ctxSpouse, configSpouse, {onClick:function(e){ 
              }});
            
             mySpousechart.destroy();
             mySpousechart = new Chart(ctxSpouse, configSpouse, {onClick:function(e){ 
             }});
             
             window.resetZoom = function () {
            	 mySpousechart.resetZoom();
               };
               
             if (configSpouse.type == "doughnut" || configSpouse.type == "pie" ){
             	bgColor = bgColors(datavalue.length);
             }
             configSpouse.data.datasets[0].data = datavalue;
             if (bgColor != undefined) {
            	 configSpouse.data.datasets[0].backgroundColor = bgColor;
             }
             mySpousechart.update();
             mySpousechart.resetZoom();

             document.getElementById("canvasSpouse").onclick = function (evt) {
                 var activePoints = mySpousechart.getElementsAtEventForMode(evt, 'point', mySpousechart.options);
                 var firstPoint = activePoints[0];
                 var finallabel ="";
                 var value = "";
                
                if (firstPoint) {
                   finallabel = mySpousechart.data.labels[firstPoint._index];
                   value = mySpousechart.data.datasets[firstPoint._datasetIndex].data[firstPoint._index];
                // alert(label + ": " + value);
                }
                 document.getElementById("SpouseAnnualIncomeandExpensediv").style.display = "block";
                 loadDynamicSpouseBarChart(AnnualIncomeSpouseJSONArray,finallabel);
          }
          
         // }else{
         //    var canvasSpouseDiv = document.getElementById("canvasSpouseDiv");
        //     canvasSpouseDiv.innerHTML="";
       // document.getElementById("spousenodatafount");
       // $(".spousenodatafount").css('display','block');
       // }
        
        }
        
        function loadDynamicSpouseBarChart(AnnualIncomeSpouseJSONArray,finallabel){
        	
        	  var labelsValidate =finallabel;
	            // alert(JSON.stringify(AnnualIncomeSELFJSONArray) );
	             var firstvalue="";
	             var secondvalue="";
	             
	             for(var i=0; i<AnnualIncomeSpouseJSONArray.length;i++){
	               firstvalue=AnnualIncomeSpouseJSONArray[0];
	               secondvalue=AnnualIncomeSpouseJSONArray[1];
	             }
	    
	   var firstvaluekey=[];
	   var firstvalueVal=[];

	   for (var [key, value] of Object.entries(firstvalue)) {
	     
	     if(key!="key" && key!="value")
	     {
	       firstvaluekey.push(key);
	       firstvalueVal.push(value);
	     } 
	   }

	   var secondvaluekey=[];
	   var secondvalueVal=[];
	    
	   for (var [key, value] of Object.entries(secondvalue)) {
	      
	     if(key!="key" && key!="value")
	     {
	       secondvaluekey.push(key);
	       secondvalueVal.push(value);
	     }
	   }
	    
	   var SpouseIncomeandExpenseDiv = document.getElementById("SpouseIncomeandExpenseDiv");
	   SpouseIncomeandExpenseDiv.innerHTML="";
	   SpouseIncomeandExpenseDiv.innerHTML="<canvas id='canvasSpouseBarChart' class=''></canvas>";

	   var labels="";
	   var data1 ="";
	   if(labelsValidate =="Annual Income"){
		   $("#detailsExpenseSpouseCharttittle").val("Details of Income");
	       labels= firstvaluekey ;
	       data1=firstvalueVal;
	   }else if(labelsValidate =="Annual Expense"){
		   $("#detailsExpenseSpouseCharttittle").val("Details of Expense");
	       labels=secondvaluekey;
	       data1=secondvalueVal;
	   }
	           
	   var configSpouseBar="";
	   //Filter data here based on the condition

	   var chartTypeSelfnew ="";
	   var chartTypeSpouse="";
	   //  var bgColors = "";
	   var bgColor = "";
	   var spousebarmychart="";
	   var mySpousechart="";
	          
	               var randomColorGenerator = () => {
	                   return '#' + (Math.random().toString(16) + '0000000').slice(2, 8);
	               };
	              
	             var  len = data1.length;
	              
	               var  bgColors = function (len) {
	                   var bgArray = new Array(len);
	                   for (var j = 0; j < len; j++) {
	                       bgArray[j] = randomColorGenerator();
	                   }
	                   return bgArray;
	               }

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

	           chartTypeSelfnew = "Bar";

	           if (chartTypeSelfnew == "Bar") {
	               var bgColor = bgColors(len);
	                   var fund1data = {
	                       label: 'Annual Income',
	                       data: data1,
	                       categoryPercentage: 0.5,
	                       barPercentage: 1,
	                       backgroundColor: bgColor,
	                        
	                       borderWidth: 0,
	                       yAxisID: "y-axis-AnnualIncome"
	                   };

	                   var fundData = {
	                       labels: labels,
	                       datasets: [fund1data],
	                       //datasets: [fund1data],
	                   };

	                   configSpouseBar = {
	                       type: 'bar',
	                       data: fundData,
	                       options: {
	                           tooltips: {
	                               mode: 'label',
	                               callbacks: {
	                                   title: function(tooltipItems, data) {
	                                   return tooltipItems[0].xLabel ;
	                                   },
	                                   label: (tooltipItem, data) => {
	                                	   return ; 
	                                     //  return data.datasets[tooltipItem.datasetIndex].label + " : $ " + tooltipItem.yLabel;
	                                   },
	                                   footer: (tooltipItems, data) => {
	                                       let total = tooltipItems.reduce((a, e) => a + parseFloat(e.yLabel), 0);
	                                       return ' Total : $ ' + total.toFixed(3);
	                                   }
	                               }
	                           },
	                           plugins: {
	                               labels:false
	                       },
	                       legend: {
	                       	display: false
	                       },
	                           
	                           scales: {
	                               xAxes: [{
	                                   display: true,
	                                   scaleLabel: {
	                                       display: true,
	                                       labelString: ' '
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
	                               }]
	                           },
	                           pan: {
	                               enabled: true,
	                               mode: "x",
	                               speed: 10,
	                               threshold: 10,
	                               onPan: function ({ chart }) { canvasSpouseBarChart.style.cursor = "grabbing"; },
	                               onPanComplete: function ({ chart }) { canvasSpouseBarChart.style.cursor = "default"; }
	                           },
	                           zoom: {
	                               enabled: true,
	                               drag: false,
	                               mode: "x",
	                               limits: {
	                                   max: 10,
	                                   min: 0.5
	                               },
	                               onZoom: function ({ spousebarmychart }) { canvasSpouseBarChart.style.cursor = "grabbing"; },
	                               onZoomComplete: function ({ spousebarmychart }) { canvasSpouseBarChart.style.cursor = "default"; }
	                           }
	                       }
	                   };

	               }

	               var ctxSelf = document.getElementById('canvasSpouseBarChart').getContext('2d');
	                    spousebarmychart = new Chart(ctxSelf, configSpouseBar );
	                    spousebarmychart.destroy();
	                    spousebarmychart = new Chart(ctxSelf, configSpouseBar );
	               
	               window.resetZoom  = function () {
	                 	spousebarmychart.resetZoom();
	                 };
	                 
	              // let bgColor;
	               if (configSpouseBar.type == "doughnut" || configSpouseBar.type == "pie" ){
	               	bgColor = bgColors(data1.length);
	               }
	               configSpouseBar.data.datasets[0].data = data1;
	               if (bgColor != undefined) {
	            	   configSpouseBar.data.datasets[0].backgroundColor = bgColor;
	               }
	              // config.data.labels = labels;
	               spousebarmychart.update();
	               spousebarmychart.resetZoom();
        }
        
        
       //JointFamily
        function loadDynamicChartJointFamily(){
        	$("#detailsExpenseJointCharttittle").val("");
            var configJointFamily ="";

            //Filter data here based on the condition
            document.getElementById("JointFamilyAnnualIncomeandExpensediv").style.display = "none";
            var chartTypeJointFamily="";
            var bgColors = "";
            var bgColor = "";
            var len = "";

            var AnnualIncomeJointJSONArray=[];
          
            var mychart="";
            var myJointFamilychart="";
       	
            var canvasJointFamilyDiv = document.getElementById("canvasJointFamilyDiv");
            canvasJointFamilyDiv.innerHTML="";
            canvasJointFamilyDiv.innerHTML="<canvas id='canvasJointFamily' class=''></canvas>";
            
          	var AnnualIncomeJointFamilyJSONArray=[];
           
         	var MonthlyGrossIncomeJointFamily ,NonEmpMonthlyIncomeJointFamily ,NonEmpAnnualRentalIncomeJointFamily ,NonEmpInvestmentIncomedividendsgainsJointFamily ,NonEmpOtherIncomeJointFamily ;
         	var AnnExpOutRentalforLodgingsJointFamily ,AnnExpOutUtilitiescommunicationJointFamily ,AnnExpOutGroceryHouseholdNeedsJointFamily ,AnnExpOutEatingoutJointFamily ,AnnExpOutClothingApparelJointFamily ,AnnExpOutTransportationJointFamily ,AnnExpOutMedicalPersonalCareJointFamily ,AnnExpOutPersonalExpensesJointFamily ,AnnExpOutDependantContributionsJointFamily ,AnnExpOutTaxesJointFamily ,AnnExpOutEntertainmentJointFamily ,AnnExpOutFestiveSpendingJointFamily ,AnnExpOutVacationsJointFamily ,AnnExpOutCharityJointFamily ,AnnExpOutLoanRepaymentJointFamily ,AnnExpOutPropertyLoanRepaymentJointFamily ,AnnExpOutLifeInsurancePremiumsJointFamily ,AnnExpOutGeneralInsurancePremiumsJointFamily ,AnnExpOutOtherExpensesJointFamily,Householdmaintenanceconservancy,DomesticHelp,Childrencareeducationenhancementprogram   ;
         	var AnnExpOutAnnualExpensesJointFamily ;
        
           //Employment Income Spouse
         	MonthlyGrossIncomeJointFamily = (isEmpty($('#incsrcJointEmpMonthly').val()) ? "0" : $('#incsrcJointEmpMonthly').val()); 
         
         	//Non-employment Income Spouse
          	 NonEmpMonthlyIncomeJointFamily = (isEmpty($('#incsrcJointNempMonthly').val()) ? "0" : $('#incsrcJointNempMonthly').val());  
          	 NonEmpAnnualRentalIncomeJointFamily = (isEmpty($('#incsrcJointNempRentamt').val()) ? "0" : $('#incsrcJointNempRentamt').val());  
          	 NonEmpInvestmentIncomedividendsgainsJointFamily  = (isEmpty($('#incsrcJointNempDivdamt').val()) ? "0" : $('#incsrcJointNempDivdamt').val()); 
          	 NonEmpOtherIncomeJointFamily = (isEmpty($('#incsrcJointNempOthamt').val()) ? "0" : $('#incsrcJointNempOthamt').val());
         
          //Annual Expenditure - Outflow
          	AnnExpOutRentalforLodgingsJointFamily =(isEmpty($('#expdFamilyRent').val()) ? "0" : $('#expdFamilyRent').val()); 
          	AnnExpOutUtilitiescommunicationJointFamily =(isEmpty($('#expdFamilyUtil').val()) ? "0" : $('#expdFamilyUtil').val()); 
          	AnnExpOutGroceryHouseholdNeedsJointFamily =(isEmpty($('#expdFamilyGrocery').val()) ? "0" : $('#expdFamilyGrocery').val());
          	AnnExpOutEatingoutJointFamily =(isEmpty($('#expdFamilyEatingout').val()) ? "0" : $('#expdFamilyEatingout').val());
          	AnnExpOutClothingApparelJointFamily = (isEmpty($('#expdFamilyClothing').val()) ? "0" : $('#expdFamilyClothing').val());
          	AnnExpOutTransportationJointFamily = (isEmpty($('#expdFamilyTransport').val()) ? "0" : $('#expdFamilyTransport').val()); 
          	AnnExpOutMedicalPersonalCareJointFamily =(isEmpty($('#expdFamilyMedical').val()) ? "0" : $('#expdFamilyMedical').val()); 
          	AnnExpOutPersonalExpensesJointFamily =(isEmpty($('#expdFamilyPersonal').val()) ? "0" : $('#expdFamilyPersonal').val()); 
          	Householdmaintenanceconservancy=(isEmpty($('#expdFamilyHousehold').val()) ? "0" : $('#expdFamilyHousehold').val()); 
          	DomesticHelp=(isEmpty($('#expdFamilyDomestic').val()) ? "0" : $('#expdFamilyDomestic').val());
          	Childrencareeducationenhancementprogram=(isEmpty($('#expdFamilyEnhance').val()) ? "0" : $('#expdFamilyEnhance').val());  
          	AnnExpOutTaxesJointFamily =(isEmpty($('#expdFamilyTaxes').val()) ? "0" : $('#expdFamilyTaxes').val()); 
          	AnnExpOutEntertainmentJointFamily =(isEmpty($('#expdFamilyEntertain').val()) ? "0" : $('#expdFamilyEntertain').val()); 
          	AnnExpOutFestiveSpendingJointFamily =(isEmpty($('#expdFamilyFestiv').val()) ? "0" : $('#expdFamilyFestiv').val()); 
          	AnnExpOutVacationsJointFamily =(isEmpty($('#expdFamilyVacations').val()) ? "0" : $('#expdFamilyVacations').val()); 
          	AnnExpOutCharityJointFamily =(isEmpty($('#expdFamilyCharity').val()) ? "0" : $('#expdFamilyCharity').val()); 
          	AnnExpOutLoanRepaymentJointFamily =(isEmpty($('#expdFamilyLoanrepay').val()) ? "0" : $('#expdFamilyLoanrepay').val()); 
          	AnnExpOutPropertyLoanRepaymentJointFamily =(isEmpty($('#expdFamilyProploan').val()) ? "0" : $('#expdFamilyProploan').val());  
          	AnnExpOutLifeInsurancePremiumsJointFamily =(isEmpty($('#expdFamilyInsurance').val()) ? "0" : $('#expdFamilyInsurance').val()); 
          	AnnExpOutGeneralInsurancePremiumsJointFamily =(isEmpty($('#expdFamilyGi').val()) ? "0" : $('#expdFamilyGi').val()); 
          	AnnExpOutOtherExpensesJointFamily = (isEmpty($('#expdFamilyOthers').val()) ? "0" : $('#expdFamilyOthers').val());                        
         	AnnExpOutAnnualExpensesJointFamily =(isEmpty($('#expdFamilyTotalannl').val()) ? "0" : $('#expdFamilyTotalannl').val());
         	
          	var EmploymentAnnualIncomeJointFamily =  (parseFloat(MonthlyGrossIncomeJointFamily * 12 ));
         	
          	var yearlyNonEmpMonthlyIncomeJointFamily = (NonEmpMonthlyIncomeJointFamily * 12 ); 
         	var NonEmploymentAnnualIncomeJointFamily  = (parseFloat(yearlyNonEmpMonthlyIncomeJointFamily) + parseFloat(NonEmpAnnualRentalIncomeJointFamily) + parseFloat(NonEmpInvestmentIncomedividendsgainsJointFamily) + parseFloat(NonEmpOtherIncomeJointFamily));
            
         	var TotalAnnualInflowJointFamily =(parseFloat( EmploymentAnnualIncomeJointFamily) + parseFloat(NonEmploymentAnnualIncomeJointFamily));
         	
         	var TotalAnnualExpenditureJointFamily =(parseFloat(AnnExpOutRentalforLodgingsJointFamily) + parseFloat(AnnExpOutUtilitiescommunicationJointFamily) + parseFloat(AnnExpOutGroceryHouseholdNeedsJointFamily) + parseFloat(AnnExpOutEatingoutJointFamily) + parseFloat(AnnExpOutClothingApparelJointFamily) + parseFloat(AnnExpOutTransportationJointFamily) + parseFloat(AnnExpOutMedicalPersonalCareJointFamily) + parseFloat(AnnExpOutPersonalExpensesJointFamily)+parseFloat(Householdmaintenanceconservancy)+parseFloat(DomesticHelp)+parseFloat(Childrencareeducationenhancementprogram)  + parseFloat(AnnExpOutTaxesJointFamily) + parseFloat(AnnExpOutEntertainmentJointFamily) + parseFloat(AnnExpOutFestiveSpendingJointFamily) + parseFloat(AnnExpOutVacationsJointFamily) + parseFloat(AnnExpOutCharityJointFamily) + parseFloat(AnnExpOutLoanRepaymentJointFamily) + parseFloat(AnnExpOutPropertyLoanRepaymentJointFamily) + parseFloat(AnnExpOutLifeInsurancePremiumsJointFamily) + parseFloat(AnnExpOutGeneralInsurancePremiumsJointFamily) + parseFloat(AnnExpOutOtherExpensesJointFamily)  );                         
         	var TotAnnualExpensesJointFamily = parseFloat(AnnExpOutAnnualExpensesJointFamily);
         	
         	//var AnnualIncomeJointFamilyJSONObjectOne = {"key":"Annual Income ","value":TotalAnnualInflowJointFamily};
         	//var AnnualIncomeJointFamilyJSONObjectTwo = {"key":"Annual Expense ","value":TotAnnualExpensesJointFamily};
         	
        	var AnnualIncomeJointFamilyJSONObjectOne = {"key":"Annual Income","value":TotalAnnualInflowJointFamily, "Annual Gross Income":EmploymentAnnualIncomeJointFamily,"Annual Income":yearlyNonEmpMonthlyIncomeJointFamily, "Annual Rental Income":NonEmpAnnualRentalIncomeJointFamily,"Investment Incomedividends gains": NonEmpInvestmentIncomedividendsgainsJointFamily,"Other Income": NonEmpOtherIncomeJointFamily};
        	var AnnualIncomeJointFamilyJSONObjectTwo = {"key":"Annual Expense","value":TotAnnualExpensesJointFamily, "Rental for Lodgings":AnnExpOutRentalforLodgingsJointFamily,"Utilities communication":AnnExpOutUtilitiescommunicationJointFamily,"Grocery Household Needs":AnnExpOutGroceryHouseholdNeedsJointFamily,"Eating out":AnnExpOutEatingoutJointFamily,"Clothing Apparel":AnnExpOutClothingApparelJointFamily,"Transportation":AnnExpOutTransportationJointFamily,"Medical Personal Care":AnnExpOutMedicalPersonalCareJointFamily,"Personal Expenses":AnnExpOutPersonalExpensesJointFamily,"Household maintenance conservancy":Householdmaintenanceconservancy,"Domestic Help":DomesticHelp,"Children care education enhancement program":Childrencareeducationenhancementprogram,"Taxes":AnnExpOutTaxesJointFamily,"Entertainment":AnnExpOutEntertainmentJointFamily,"Festive Spending":AnnExpOutFestiveSpendingJointFamily,"Vacations":AnnExpOutVacationsJointFamily,"Charity":AnnExpOutCharityJointFamily,"Loan Repayment":AnnExpOutLoanRepaymentJointFamily,"Property Loan Repayment":AnnExpOutPropertyLoanRepaymentJointFamily,"Life Insurance Premiums":AnnExpOutLifeInsurancePremiumsJointFamily,"General Insurance Premiums":AnnExpOutGeneralInsurancePremiumsJointFamily,"Other Expenses":AnnExpOutOtherExpensesJointFamily};
         	 
         	AnnualIncomeJointFamilyJSONArray.push(AnnualIncomeJointFamilyJSONObjectOne);
         	AnnualIncomeJointFamilyJSONArray.push(AnnualIncomeJointFamilyJSONObjectTwo);
            console.log("AnnualIncomeJointFamilyJSONArray " + AnnualIncomeJointFamilyJSONArray.length);
            
        	if(TotalAnnualInflowJointFamily == 0 && TotAnnualExpensesJointFamily == 0){
        		  $("#jointfamilynodatafount").css('display','block');
        		  $("#canvasJointFamilyDiv").css('display','none');
        	}
        	else{
        		$("#jointfamilynodatafount").css('display','none');
        	    $("#canvasJointFamilyDiv").css('display','block');
        	}
            //     if(AnnualIncomeJointFamilyJSONArray.length > 0){
                 
         	var labels = AnnualIncomeJointFamilyJSONArray.map(function (e) {
               return  e.key;
           });
         
         	var datavalue = AnnualIncomeJointFamilyJSONArray.map(function (e) {
               return  e.value;
           });
       	 
           var canvasJointFamily = document.getElementById("canvasJointFamily");
           var randomColorGenerator = () => {
               return '#' + (Math.random().toString(16) + '0000000').slice(2, 8);
           };
          
           len = datavalue.length;
            bgColors = function (len) {
               var bgArray = new Array(len);
               for (var j = 0; j < len; j++) {
                   bgArray[j] = randomColorGenerator();
               }
               return bgArray;
           }
           
            chartTypeJointFamily = document.getElementById("chartTypeJointFamily").value;
            //Pie chart
            if (chartTypeJointFamily == "Pie") {
           	 configJointFamily = {
                    type: 'pie',
                    data: {
                        datasets: [{
                            
                            data: datavalue,
                            backgroundColor: bgColors(len),
                            borderWidth: 0.5,
                            label: 'Annual Income and Expense ' 
                        }],
                        labels: labels 
                    },
                     
                    options: {
                        responsive: true,
                        legend: {
                            position: 'left',
                        },
                        tooltips: {
                            callbacks: {
                                label: function (item, data) {
                                	//data.datasets[item.datasetIndex].label + " : " + 
                                	 return data.labels[item.index] + " : " + data.datasets[item.datasetIndex].data[item.index]+' $ ';
                                }
                            }
                        },
                        plugins: {
                            labels: {
				          render: 'percentage',
				          fontColor: ['white','white'],
				          precision: 2
				        } 
                    }
                    },
                };
            }
            
            //Donut chart
            if (chartTypeJointFamily == "Doughnut") {
            	 
                  bgColor = bgColors(len);
                  configJointFamily = {
                    type: 'doughnut',
                    data: {
                        datasets: [{
                            data: datavalue,
                            backgroundColor: bgColor,
                            borderWidth: 0.5,
                            label: 'Annual Income and Expense'
                        }],
                        labels: labels,
                        datavalue: datavalue
                    },
                    options: {
                        responsive: true,
                        legend: {
                            position: 'bottom',
                        },
                     //   title: {
                      //      display: true,
                      //      text: 'Doughnut Chart'
                      //  },
                        animation: {
                            animateScale: true,
                            animateRotate: true
                        },
                        tooltips: {
                            callbacks: {
                                label: function (item, data) {
                                	//data.datasets[item.datasetIndex].label + " : " + 
                                	return data.labels[item.index] + " : " + data.datasets[item.datasetIndex].data[item.index]+' $ ';
                                }
                            }
                        },
                        plugins: {
                            labels: {
				          render: 'percentage',
				          fontColor: ['white','white'],
				          precision: 2
				        } 
                    }
                    }
                };
            }
            
            
            var ctxJointFamily = document.getElementById('canvasJointFamily').getContext('2d');
             myJointFamilychart = new Chart(ctxJointFamily, configJointFamily, {onClick:function(e){ 
             }});
           
            myJointFamilychart.destroy();
            myJointFamilychart = new Chart(ctxJointFamily, configJointFamily, {onClick:function(e){ 
            }});
            
            window.resetZoom = function () {
           	 myJointFamilychart.resetZoom();
              };
              
            if (configJointFamily.type == "doughnut" || configJointFamily.type == "pie" ){
            	bgColor = bgColors(datavalue.length);
            }
            configJointFamily.data.datasets[0].data = datavalue;
            if (bgColor != undefined) {
           	 configJointFamily.data.datasets[0].backgroundColor = bgColor;
            }
            myJointFamilychart.update();
            myJointFamilychart.resetZoom();
            
            document.getElementById("canvasJointFamily").onclick = function (evt) {
                var activePoints = myJointFamilychart.getElementsAtEventForMode(evt, 'point', myJointFamilychart.options);
                var firstPoint = activePoints[0];
                
                 var finallabel ="";
                 var value = "";
               
                if (firstPoint) {
                  finallabel = myJointFamilychart.data.labels[firstPoint._index];
                  value = myJointFamilychart.data.datasets[firstPoint._datasetIndex].data[firstPoint._index];
               // alert(label + ": " + value);
               }
                document.getElementById("JointFamilyAnnualIncomeandExpensediv").style.display = "block";
         
                loadDynamicJointFamilyBarChart(AnnualIncomeJointFamilyJSONArray,finallabel);
         
         }
         
      //    }else{
      //   var canvasJointFamilyDiv = document.getElementById("canvasJointFamilyDiv");
      //      canvasJointFamilyDiv.innerHTML="";
            
     //   document.getElementById("jointfamilynodatafount");
     //   $(".jointfamilynodatafount").css('display','block');
     //   $(".jointfamilylable").css('display','none');
     //   }

       }
       
        function loadDynamicJointFamilyBarChart(AnnualIncomeJointFamilyJSONArray,finallabel){
        	
        	 var labelsValidate =finallabel;
	             
	             var firstvalue="";
	             var secondvalue="";
	             
	             for(var i=0; i<AnnualIncomeJointFamilyJSONArray.length;i++){
	               firstvalue=AnnualIncomeJointFamilyJSONArray[0];
	               secondvalue=AnnualIncomeJointFamilyJSONArray[1];
	             }
	    
	   var firstvaluekey=[];
	   var firstvalueVal=[];

	   for (var [key, value] of Object.entries(firstvalue)) {
	     
	     if(key!="key" && key!="value")
	     {
	       firstvaluekey.push(key);
	       firstvalueVal.push(value);
	     } 
	   }

	   var secondvaluekey=[];
	   var secondvalueVal=[];
	    
	   for (var [key, value] of Object.entries(secondvalue)) {
	      
	     if(key!="key" && key!="value")
	     {
	        secondvaluekey.push(key);
	        secondvalueVal.push(value);
	     }
	   }
	    
	   var SJointFamilyIncomeandExpenseDiv = document.getElementById("JointFamilyIncomeandExpenseDiv");
	   JointFamilyIncomeandExpenseDiv.innerHTML="";
	   JointFamilyIncomeandExpenseDiv.innerHTML="<canvas id='canvasJointFamilyBarChart' class=''></canvas>";

	   var labels="";
	   var data1 ="";
	   if(labelsValidate =="Annual Income"){
		   $("#detailsExpenseJointCharttittle").val("Details of Income");
	       labels= firstvaluekey ;
	       data1=firstvalueVal;
	   }else if(labelsValidate =="Annual Expense"){
		   $("#detailsExpenseJointCharttittle").val("Details of Expense");
	       labels=secondvaluekey;
	       data1=secondvalueVal;
	   }
	           
	           var configSpouseBar="";
	   //Filter data here based on the condition

	   var chartTypeSelfnew ="";
	   var chartTypeSpouse="";
	   //  var bgColors = "";
	   var bgColor = "";
	   var jointfamilybarchart="";
	   var mySpousechart="";
	          
	               var randomColorGenerator = () => {
	                   return '#' + (Math.random().toString(16) + '0000000').slice(2, 8);
	               };
	              
	             var  len = data1.length;
	              
	               var  bgColors = function (len) {
	                   var bgArray = new Array(len);
	                   for (var j = 0; j < len; j++) {
	                       bgArray[j] = randomColorGenerator();
	                   }
	                   return bgArray;
	               }

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

	           chartTypeSelfnew = "Bar";

	           if (chartTypeSelfnew == "Bar") {
	               var bgColor = bgColors(len);
	                   var fund1data = {
	                       label: 'Annual Income',
	                       data: data1,
	                       categoryPercentage: 0.5,
	                       barPercentage: 1,
	                       backgroundColor: bgColor,
	                        
	                       borderWidth: 0,
	                       yAxisID: "y-axis-AnnualIncome"
	                   };

	                   var fundData = {
	                       labels: labels,
	                       datasets: [fund1data],
	                       //datasets: [fund1data],

	                   };

	                   configSpouseBar = {
	                       type: 'bar',
	                       data: fundData,
	                       options: {
	                           tooltips: {
	                               mode: 'label',
	                               callbacks: {
	                                   title: function(tooltipItems, data) {
	                                   return tooltipItems[0].xLabel ;
	                                   },
	                                   label: (tooltipItem, data) => {
	                                	   return ;
	                                       //return data.datasets[tooltipItem.datasetIndex].label + " : $ " + tooltipItem.yLabel;
	                                   },
	                                   footer: (tooltipItems, data) => {
	                                       let total = tooltipItems.reduce((a, e) => a + parseFloat(e.yLabel), 0);
	                                       return ' Total : $ ' + total.toFixed(3);
	                                   }
	                               }
	                           },

	                           plugins: {
	                               labels:false
	                       },
	                       legend: {
	                       	display: false
	                       },

	                           
	                           scales: {

	                               xAxes: [{
	                                   display: true,
	                                   scaleLabel: {
	                                       display: true,
	                                       labelString: ' '
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
	                               }]
	                           },
	                           pan: {
	                               enabled: true,
	                               mode: "x",
	                               speed: 10,
	                               threshold: 10,
	                               onPan: function ({ chart }) { canvasJointFamilyBarChart.style.cursor = "grabbing"; },
	                               onPanComplete: function ({ chart }) { canvasJointFamilyBarChart.style.cursor = "default"; }
	                           },
	                           zoom: {
	                               enabled: true,
	                               drag: false,
	                               mode: "x",
	                               limits: {
	                                   max: 10,
	                                   min: 0.5
	                               },
	                               onZoom: function ({ jointfamilybarchart }) { canvasJointFamilyBarChart.style.cursor = "grabbing"; },
	                               onZoomComplete: function ({ jointfamilybarchart }) { canvasJointFamilyBarChart.style.cursor = "default"; }
	                           }
	                       }
	                   };

	               }

	               var ctxSelf = document.getElementById('canvasJointFamilyBarChart').getContext('2d');
	                jointfamilybarchart = new Chart(ctxSelf, configSpouseBar );
	             
	               jointfamilybarchart.destroy();
	               jointfamilybarchart = new Chart(ctxSelf, configSpouseBar );
	               
	               window.resetZoom  = function () {
	                 	jointfamilybarchart.resetZoom();
	                 };
	                 
	              // let bgColor;
	               if (configSpouseBar.type == "doughnut" || configSpouseBar.type == "pie" ){
	               	bgColor = bgColors(data1.length);
	               }
	               configSpouseBar.data.datasets[0].data = data1;
	               if (bgColor != undefined) {
	            	   configSpouseBar.data.datasets[0].backgroundColor = bgColor;
	               }
	              // config.data.labels = labels;
	               jointfamilybarchart.update();
	               jointfamilybarchart.resetZoom();
        	
        }
        
        
        