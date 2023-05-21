//var margin = {
//		    top: 20,
//		    right: 0,
//		    bottom: 30,
//		    left: 80
//		},
//		width = 900 - margin.left - margin.right,
//		    height = 350 - margin.top - margin.bottom;
//		
//		var x = d3.scale.ordinal()
//		.rangeRoundBands([0, width]);
//		
//		var y = d3.scale.linear()
//		.range([height, 0]);
//		
//		var xAxis = d3.svg.axis()
//		.scale(x)
//		.orient("bottom");
//		
//		var yAxis = d3.svg.axis()
//		.scale(y)
//		.orient("left")
//		.ticks(10, "$");
		
function genProjChartOfExp(data){ 
	/*
	var margin = {
		    top: 20,
		    right: 0,
		    bottom: 30,
		    left: 80
		},
		width = 900 - margin.left - margin.right,
		    height = 350 - margin.top - margin.bottom;

		var x = d3.scale.ordinal()
			 .rangeRoundBands([0, width]);

		var y = d3.scale.linear()
		    .range([height, 0]);

		var xAxis = d3.svg.axis()
		    .scale(x)
		    .orient("bottom");

		var yAxis = d3.svg.axis()
		    .scale(y)
		    .orient("left")
		    .ticks(10, "$");
	 
	 d3.select("#projectionOfExp").selectAll("svg").remove();
	 $("#projOfExpediv").css("display","block");
	 
	 var barData = data;
	 var lineData = data; 
	   
		var svg = d3.select("#projectionOfExp").append("svg")
		    .attr("width", width + margin.left + margin.right)
		    .attr("height", height + margin.top + margin.bottom)
		    .append("g")
		    .attr("transform", "translate(" + margin.left + "," + margin.top + ")"); 
		
		  var tooltip = d3.select("#projectionOfExp").append("div").attr("class", "charttoolTip");

		//concatenating the 2 set to get the full data for calculating teh max and min of teh domain.
		var fullData = [].concat.apply([], [barData, lineData]);

		x.domain(fullData.map(function (d) {
		    return d.ctCostlineAge;
		}));
		y.domain([0, d3.max(fullData, function (d) {
		    return d.ctCostlineAmt;
		})]);
		
		
		var line = d3.svg.line()
		    .x(function(d) { return x(d.ctCostlineAge)+x.rangeBand()/2; })
		    .y(function(d) { return y(d.ctCostbarAmt); });
 
		
		svg.append("g")
		    .attr("class", "x axis")
		    .attr("transform", "translate(0," + height + ")")
//		    .style({ 'stroke': 'black', 'fill': 'none', 'stroke-width': '1px'})
		    .call(xAxis).selectAll('text')
		    .style({'font':'20px "Helvetica Neue", Helvetica, Arial, sans-serif','font-size':'10pt'});

		svg.append("g")
		    .attr("class", "y axis")
		    .call(yAxis)
//		    .style({'fill':'none','stroke':'#000','shape-rendering':'crispEdges','stroke-width':'1px'})
		    .append("text")
		    .attr("transform", "rotate(-90)")
		    .attr("y", 6)
		    .attr("dy", "1.71em")
		    .style("text-anchor", "end")
//		    .style({ 'stroke': 'black', 'fill': 'none', 'stroke-width': '1px'})
		    .style({'font':'20px "Helvetica Neue", Helvetica, Arial, sans-serif','font-size':'10pt'})
		    .text("Expenditure Amount");

		svg.selectAll(".bar")
		    .data(barData)
		    .enter().append("rect")
		    .attr("class", "bar")
		    .attr("x", function (d) {
		    return x(d.ctCostlineAge);
		})
		    .attr("width", x.rangeBand())
		    .attr("y", function (d) {
		    return y(d.ctCostbarAmt);
		})
		// Tool Tip Processing	
			.on("mousemove", function(d){
            tooltip
//              .style("left", d3.event.pageX - 50 + "px")
//              .style("top", d3.event.pageY - 70 + "px")
              .style("display", "inline-block")
              .html("Age :"+(d.ctCostbarAge) + "<br>" + "Amount: $" + (d.ctCostbarAmt));})
    		.on("mouseout", function(d){ tooltip.style("display", "none");})
    		
		    .attr("height", function (d) {
		    return height - y(d.ctCostbarAmt);
		});
		
		
		
		svg.append("path")
//		 	  .style({'fill':'none','stroke':'#e61111','shape-rendering':'crispEdges','stroke-width':'1px'})
		      .datum(lineData)
		      .attr("class", "line")
		      .attr("d", line)
		      .style({'fill':'none','stroke':'#e61111','shape-rendering':'crispEdges','stroke-width':'1px'}); 
		
		svg.selectAll(".axis path").style({'fill':'none','stroke':'#000','shape-rendering':'crispEdges','stroke-width':'1px'});
		svg.selectAll(".bar").style({'fill':'steelblue'});
		
		*/
	
	
 
 }

 

function genProjChartOfInc(data){ 
//	 
//	 d3.select("#projectionOfInc").selectAll("svg").remove();
//	 $("#projOfIncomediv").css("display","block");
//	 
//	 var barData = data;
//	 var lineData = data;
//	   
//		var svg = d3.select("#projectionOfInc").append("svg")
//		    .attr("width", width + margin.left + margin.right)
//		    .attr("height", height + margin.top + margin.bottom)
//		    .append("g")
//		    .attr("transform", "translate(" + margin.left + "," + margin.top + ")"); 
//		 var tooltip = d3.select("#projectionOfInc").append("div").attr("class", "charttoolTip");
//		//concatenating the 2 set to get the full data for calculating teh max and min of teh domain.
//		var fullData = [].concat.apply([], [barData, lineData]);
//
//		x.domain(fullData.map(function (d) {
//		    return d.rdincbarAge;
//		}));
//		y.domain([0, d3.max(fullData, function (d) {
//		    return d.rdincbarAmt*25;
//		})]);
//		
//	//	y.domain([0,1000000]);
//		
//		var line = d3.svg.line()
//		    .x(function(d) { return x(d.rdinclineAge)+x.rangeBand()/2; })
//		    .y(function(d) { return y(d.rdinclineAmt); });
//
//		svg.append("g")
//		    .attr("class", "x axis")
//		    .attr("transform", "translate(0," + height + ")")
//		    .call(xAxis).selectAll('text')
//		    .style({'font':'20px "Helvetica Neue", Helvetica, Arial, sans-serif','font-size':'10pt'});
//
//		svg.append("g")
//		    .attr("class", "y axis")
//		    .call(yAxis)
//		    .append("text")
//		    .attr("transform", "rotate(-90)")
//		    .attr("y", 6)
//		    .attr("dy", ".71em")
//		    .style("text-anchor", "end")
//		    .style({'font':'20px "Helvetica Neue", Helvetica, Arial, sans-serif','font-size':'10pt'})
//		    .text("Amount");
//
//		svg.selectAll(".bar")
//		    .data(barData)
//		    .enter().append("rect")
//		    .attr("class", "bar")
//		    
//		    .attr("x", function (d) {
//		    return x(d.rdinclineAge);
//		})
//		    .attr("width", x.rangeBand())
//		    .attr("y", function (d) {
//		    return y(d.rdinclineAmt);
//		})
//		// Tool Tip Processing	
//			.on("mousemove", function(d){
//            tooltip
//              .style("left", d3.event.pageX - 50 + "px")
//              .style("top", d3.event.pageY - 70 + "px")
//              .style("display", "inline-block")
//              .html("Age :"+(d.rdinclineAge) + "<br>" + "Amount: $" + (d.rdinclineAmt));})
//    		.on("mouseout", function(d){ tooltip.style("display", "none");})
//		
//		    .attr("height", function (d) {
//		    return height - y(d.rdinclineAmt);
//		});
//		
//		
//    		
//    		
//		svg.append("path")
//		      .datum(lineData)
//		      .attr("class", "line")
//		      .attr("d", line) 
//			  .style({'fill':'none','stroke':'#e61111','shape-rendering':'crispEdges','stroke-width':'1px'}); 
//		
//		svg.selectAll(".axis path").style({'fill':'none','stroke':'#000','shape-rendering':'crispEdges','stroke-width':'1px'});
//		svg.selectAll(".bar").style({'fill':'steelblue'});
//		
}

function genCashFlwProjChartOnRtrmnt(data){
//
//	 d3.select("#CashFlwprojectionOnRtmnt").selectAll("svg").remove();
//	 $("#projInvRetdiv").css("display","block");
//
//	 var Data = [];
//	 
//	  function getTextWidth(text, fontSize, fontName) {
//         c = document.createElement("canvas");
//         ctx = c.getContext("2d");
//         ctx.font = fontSize + ' ' + fontName;
//         return ctx.measureText(text).width;
//     }
//
//     function DataSegregator(array, on) {
//         var SegData;
//         OrdinalPositionHolder = {
//             valueOf: function () {
//                 thisObject = this;
//                 keys = Object.keys(thisObject);
//                 keys.splice(keys.indexOf("valueOf"), 1);
//                 keys.splice(keys.indexOf("keys"), 1);
//                 return keys.length == 0 ? -1 : d3.max(keys, function (d) { return thisObject[d] })
//             }
//             , keys: function () {
//                 keys = Object.keys(thisObject);
//                 keys.splice(keys.indexOf("valueOf"), 1);
//                 keys.splice(keys.indexOf("keys"), 1);
//                 return keys;
//             }
//         }
//         array[0].map(function (d) { return d[on] }).forEach(function (b) {
//             value = OrdinalPositionHolder.valueOf();
//             OrdinalPositionHolder[b] = OrdinalPositionHolder > -1 ? ++value : 0;
//         })
//
//         SegData = OrdinalPositionHolder.keys().map(function () {
//             return [];
//         });
//
//         array.forEach(function (d) {
//             d.forEach(function (b) {
//                 SegData[OrdinalPositionHolder[b[on]]].push(b);
//             })
//         });
//
//         return SegData;
//     }
//
//
////     Data = [
////{ Date: "60", Categories: [ { Name: "Inflow", Value: 300000 }, { Name: "Outflow", Value: 90000 }], LineCategory:[{ Name: "Bal c/f", Value: 1000000 }] },
////{ Date: "62", Categories: [ { Name: "Inflow", Value: 60000 }, { Name: "Outflow", Value: 80000 }], LineCategory: [{ Name: "Bal c/f", Value: 900000 }] },
////{ Date: "64", Categories: [ { Name: "Inflow", Value: 50000 }, { Name: "Outflow", Value: 70000 }], LineCategory: [{ Name: "Bal c/f", Value: 800000 }] },
////{ Date: "66", Categories: [ { Name: "Inflow", Value: 40000 }, { Name: "Outflow", Value: 60000 }], LineCategory: [{ Name: "Bal c/f", Value: 600000 }] },
////{ Date: "68", Categories: [ { Name: "Inflow", Value: 50000 }, { Name: "Outflow", Value: 80000 }], LineCategory: [{ Name: "Bal c/f", Value: 500000 }] },
////{ Date: "70", Categories: [ { Name: "Inflow", Value: 30000 }, { Name: "Outflow", Value: 80000 }], LineCategory: [{ Name: "Bal c/f", Value: 100000 }] }
////     ]
//     Data=data;
//     var margin = { top: 20, right: 0, bottom: 30, left: 80 },
//         width = 900 - margin.left - margin.right,
//         height = 500 - margin.top - margin.bottom;
//
//     var textWidthHolder = 0;
//     /// Adding Date in LineCategory
//     Data.forEach(function (d) {
//         d.LineCategory.forEach(function (b) {
//             b.Date = d.Date;
//         })
//     });
//
//
//
//
//     var Categories = new Array();
//     // Extension method declaration
//
//     Categories.pro
//
//   var Data=data;
//     var Data;
//     var ageNames;
//     var x0 = d3.scale.ordinal()
//     .rangeRoundBands([0, width]);
////         .rangeRoundBands([0, width], .1);
//     var XLine = d3.scale.ordinal()
//     .rangeRoundBands([0, width]);
////         .rangeRoundPoints([0, width], .1);
//     var x1 = d3.scale.ordinal();
//
//     var y = d3.scale.linear()
//         .range([height, 0]);
//
//     var YLine = d3.scale.linear().range([height, 0])
//     .domain([0, d3.max(Data, function (d) { return d3.max(d.LineCategory, function (b) { return b.Value }) })]);
//
//     var color = d3.scale.ordinal()
//         .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);
//
//     var line = d3.svg.line().x(function (d) {
//         return x0(d.Date) + x0.rangeBand() / 2;
//     }).y(function (d) { return y(d.Value) });
//
//
//
//
//     var xAxis = d3.svg.axis()
//         .scale(x0)
//         .orient("bottom");
//
//     var yAxis = d3.svg.axis()
//         .scale(y)
//         .orient("left")
//         .tickFormat(d3.format("$"));
//
//     var YLeftAxis = d3.svg.axis().scale(YLine).orient("right").tickFormat(d3.format("$"));
//
//     var svg = d3.select("#CashFlwprojectionOnRtmnt").append("svg")
//         .attr("width", width + margin.left + margin.right)
//         .attr("height", height + margin.top + margin.bottom)
//       .append("g")
//         .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
//
////     var tooltip = d3.select("#CashFlwprojectionOnRtmnt").append("div").attr("class", "charttoolTip");
//
//
//
//     // Bar Data categories
//     Data.forEach(function (d) {
//         d.Categories.forEach(function (b) {
//             if (Categories.findIndex(function (c) { return c.Name===b.Name}) == -1) {
//                 b.Type = "bar";
//                // console.log(JSON.stringify(b))
//                 Categories.push(b)
//             }
//         })
//     });
//
//
//     // Line Data categories
//     Data.forEach(function (d) {
//         d.LineCategory.forEach(function (b) {
//             if (Categories.findIndex(function (c) { return c.Name === b.Name }) == -1) {
//                 b.Type = "line";
//               //  console.log(JSON.stringify(b))
//                 Categories.push(b)
//             }
//         })
//     });
//
//     // Processing Line data
//     lineData = DataSegregator(Data.map(function (d) { return d.LineCategory }), "Name");
//
//     // Line Coloring
//     LineColor = d3.scale.ordinal();
//     LineColor.domain(Categories.filter(function (d) { return d.Type == "line" }).map(function (d) { return d.Name }));
//     LineColor.range(["#d40606", "#06bf00", "#98bdc5", "#671919", "#0b172b"])
//     x0.domain(Data.map(function (d) { return d.Date; }));
//     XLine.domain(Data.map(function (d) { return d.Date; }));
//     x1.domain(Categories.filter(function (d) { return d.Type == "bar" }).map(function (d) { return d.Name})).rangeRoundBands([0, x0.rangeBand()]);
//     y.domain([0, d3.max(Data, function (d) { return d3.max(d.Categories, function (d) { return d.Value*20; }); })]);
//
//     svg.append("g")
//         .attr("class", "x axis")
//         .attr("transform", "translate(0," + height + ")")
//         .call(xAxis).selectAll('text')
//		    .style({'font':'20px "Helvetica Neue", Helvetica, Arial, sans-serif','font-size':'10pt'});
//
//     svg.append("g")
//        .attr("class", "y axis")
//         .attr("transform", "translate(" + (width) + ",0)")
//     //   .call(YLeftAxis)
//
//      .append("text")
//        .attr("transform", "rotate(-90)")
//        .attr("y", -10)
//
//        .attr("dy", ".71em")
//        .style("text-anchor", "end")
//        .style({'font':'20px "Helvetica Neue", Helvetica, Arial, sans-serif','font-size':'10pt'});
//     //   .text("Bal c/f");
//
//     svg.append("g")
//         .attr("class", "y axis")
//         .call(yAxis)
//       .append("text")
//         .attr("transform", "rotate(-90)")
//         .attr("y", 6)
//         .attr("dy", ".71em")
//         .style("text-anchor", "end")
//         .style({'font':'20px "Helvetica Neue", Helvetica, Arial, sans-serif','font-size':'10pt'})
//         .text("Inflow/Outflow");
//     	 
//
//     var state = svg.selectAll(".state")
//         .data(Data)
//       .enter().append("g")
//         .attr("class", "state")
//         .attr("transform", function (d) { return "translate(" + x0(d.Date) + ",0)"; });
//
//     state.selectAll("rect")
//         .data(function (d) { return d.Categories; })
//       .enter().append("rect")
//         .attr("width", x1.rangeBand())
//         .attr("x", function (d) { return x1(d.Name); })
//         .attr("y", function (d) { return y(d.Value); })
//         // Tool Tip Processing	
////			.on("mousemove", function(d){
////            tooltip
////              .style("left", d3.event.pageX - 50 + "px")
////              .style("top", d3.event.pageY - 70 + "px")
////              .style("display", "inline-block")
////              .html("Description : "(d.Name) + "<br>" + "Amount : $" + (d.Value));})
////    		.on("mouseout", function(d){ tooltip.style("display", "none");})
//			
//         //.attr("height", function (d) { return height - y(d.Value); })
//         .style("fill", function (d) { return color(d.Name); })
//         .transition().delay(500).attrTween("height", function (d) {
//             var i = d3.interpolate(0, height - y(d.Value));
//             return function (t)
//             {
//                 return i(t);
//             }
//         });
//
//     
//     
//     // drawaing lines
//     svg.selectAll(".lines").data(lineData).enter().append("g").attr("class", "line")
//     .each(function (d) {
//         d3.select(this).append("path").attr("d", function (b) { return line(b) }).style({ "stroke-width": "2px", "fill": "none" }).style("stroke", LineColor("")).transition().duration(1500);
//     })
//
//
//     // Legends
//
//     var LegendHolder = svg.append("g").attr("class", "legendHolder");
//     var legend = LegendHolder.selectAll(".legend")
//         .data(Categories.map(function (d) { return {"Name":d.Name,"Type":d.Type}}))
//       .enter().append("g")
//         .attr("class", "legend")
//         .attr("transform", function (d, i) {
//        	 if(i==0){
//        		 return "translate(0," +(0)+ ")"; 
//        	 }else if(i==1){
//        		 return "translate(37," +(0 )+ ")";
//        	 }else if(i==2){
//        		 return "translate(100," +( 0 )+ ")";
//        	 }
//        	 
////        	 return "translate(0," +( 400)+ ")";
//        	  
//         })
//         .each(function (d,i) {
//             //  Legend Symbols
//
//
//             d3.select(this).append("rect")
//             .attr("width", function () { return 18 })
//             .attr("x", function (b) {
//
//                 left = (i+1) * 15 + i * 18 + i * 5 + textWidthHolder;
//                 return left;
//             })
//              .attr("y", function (b) { return b.Type == 'bar'?0:7})
//             .attr("height", function (b) { return b.Type== 'bar'? 18:5 })
//             .style("fill", function (b) { return b.Type == 'bar' ? color(d.Name) : LineColor(d.Name) });
//
//             //  Legend Text
//
//             d3.select(this).append("text")
//             .attr("x", function (b) {
//
//                 left = (i+1) * 15 + (i+1) * 18 + (i + 1) * 5 + textWidthHolder;
//
//                 return left;
//             })
//             .attr("y", 9)
//             .attr("dy", ".35em")
//             .style("text-anchor", "start")
//             .text(d.Name);
//
//             textWidthHolder += getTextWidth(d.Name, "10px", "calibri");
//         });
//
//
//     // Legend Placing
//
//     d3.select(".legendHolder").attr("transform", function (d) {
//         thisWidth = d3.select(this).node().getBBox().width;
//         return "translate(" + (25) + ",20)";
//     })
//   
// 	
//     svg.selectAll(".axis path").style({'fill':'none','stroke':'#000','shape-rendering':'crispEdges','stroke-width':'1px'});
//		svg.selectAll(".bar").style({'fill':'steelblue'});
	
}
