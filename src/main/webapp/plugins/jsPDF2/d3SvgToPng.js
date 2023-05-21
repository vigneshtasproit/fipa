function getSVGString( svgNode ) {
	svgNode.setAttribute('xlink', 'http://www.w3.org/1999/xlink');
	var cssStyleText = getCSSStyles( svgNode );
	appendCSS( cssStyleText, svgNode );

	var serializer = new XMLSerializer();
	var svgString = serializer.serializeToString(svgNode);
	svgString = svgString.replace(/(\w+)?:?xlink=/g, 'xmlns:xlink='); // Fix root xlink without namespace
	svgString = svgString.replace(/NS\d+:href/g, 'xlink:href'); // Safari NS namespace fix

	return svgString;

	function getCSSStyles( parentElement ) {
		var selectorTextArr = [];

		// Add Parent element Id and Classes to the list
		selectorTextArr.push( '#'+parentElement.id );
		
		var cls=parentElement.classList;
		
		if(parentElement.classList && cls){
		for (var c = 0; c < parentElement.classList.length; c++)
				if ( !contains('.'+parentElement.classList[c], selectorTextArr) )
					selectorTextArr.push( '.'+parentElement.classList[c] );
		}
		// Add Children element Ids and Classes to the list
		var nodes = parentElement.getElementsByTagName("*");
		for (var i = 0; i < nodes.length; i++) {
			var id = nodes[i].id;
			if ( !contains('#'+id, selectorTextArr) )
				selectorTextArr.push( '#'+id );

			var classes = nodes[i].classList;
			if(classes && classes.length>0){
			for (var c = 0; c < classes.length; c++)
				if ( !contains('.'+classes[c], selectorTextArr) )
					selectorTextArr.push( '.'+classes[c] );
			}
		}

		// Extract CSS Rules
		var extractedCSSText = "";
		for (var i = 0; i < document.styleSheets.length; i++) {
			var s = document.styleSheets[i];
			
			try {
			    if(!s.cssRules) continue;
			} catch( e ) {
		    		if(e.name !== 'SecurityError') throw e; // for Firefox
		    		continue;
		    	}

			var cssRules = s.cssRules;
			for (var r = 0; r < cssRules.length; r++) {
				if ( contains( cssRules[r].selectorText, selectorTextArr ) )
					extractedCSSText += cssRules[r].cssText;
			}
		}
		

		return extractedCSSText;

		function contains(str,arr) {
			return arr.indexOf( str ) === -1 ? false : true;
		}

	}

	function appendCSS( cssText, element ) {
		var styleElement = document.createElement("style");
		styleElement.setAttribute("type","text/css"); 
		styleElement.innerHTML = cssText;
		var refNode = element.hasChildNodes() ? element.children[0] : null;
		element.insertBefore( styleElement, refNode );
	}
}


function svgString2Image( svgString, width, height, format, callback ) {
	var format = format ? format : 'png';

	var imgsrc = 'data:image/svg+xml;base64,'+ btoa( unescape( encodeURIComponent( svgString ) ) ); // Convert SVG string to data URL

	var canvas = document.createElement("canvas");
	var context = canvas.getContext("2d");

	canvas.width = width;
	canvas.height = height;

	var image = new Image();
	image.onload = function() {
		context.clearRect ( 0, 0, width, height );
		context.drawImage(image, 0, 0, width, height);

		canvas.toBlob( function(blob) {
			var filesize = Math.round( blob.length/1024 ) + ' KB';
			if ( callback ) callback( blob, filesize );
		});

		
	};

	image.src = imgsrc;
}

function tableToJson(table) {
	var data = [];

	// first row needs to be headers
	var headers = [];
	for (var i=0; i<table.rows[0].cells.length; i++) {
	    headers[i] = table.rows[0].cells[i].innerHTML.toLowerCase().replace(/ /gi,'');
	}

	// go through cells
	for (var i=1; i<table.rows.length; i++) {

	    var tableRow = table.rows[i];
	    var rowData = {};

	    for (var j=0; j<tableRow.cells.length; j++) {

	        rowData[ headers[j] ] = tableRow.cells[j].innerHTML;

	    }

	    data.push(rowData);
	}       

	return data; 
}


function addTableData(doc,position){
	var col=[];columns =[];
	var rows = [];
	
	$("#generateproExptbl thead tr:first th:lt(14)").each(function(){
		var hdrText=$(this).find("div").text();
		columns.push(capitalize_Words(hdrText));
	});
	
	col.push(columns);
	
	$("#generateproExptbl tbody tr").each(function(){
		var rowdata=[];
		$(this).find("td:lt(14)").each(function(i){
			
			var cellData=$(this).text();
			
			if(i==0){
				var subtext=cellData.substring(cellData.indexOf("<"),cellData.length);
				
				rowdata.push(subtext);
				return;
			}
			
			rowdata.push(cellData);
			
			
		});
		
		rows.push(rowdata);
	});
	
	
//	doc.autoTable(columns,rows,{styles: {overflow: 'linebreak',columnWidth: 'wrap'},startY: 20,columnStyles: {note: {columnWidth: 'auto'}}});
	doc.autoTable({
		 head:col,
         body:rows,
         theme:'grid',
	     startY:(isEmpty(position)?20:position),
//         afterPageContent: footer,
         margin:{left:10,right:10,top:10}/*{ horizontal: 5 }*/,
         bodyStyles: { valign: 'top',fontSize:11 ,text:{cellWidth:8}},
         styles:{overflow:'linebreak',halign:'right',cellWidth: 'wrap'},
         headStyles:{
             fillColor: [51, 122, 183],
             textColor: [255],
             halign: 'center',
             overflow: 'linebreak',
             cellWidth:8,
             lineColor:[255,255,255]
         },
         columnStyles: {5: {cellWidth:20,halign:'right',overflow:'linebreak'},
        	 4: {cellWidth:15,halign:'right',overflow:'linebreak'}
         },
         //theme: 'striped'
         theme: 'grid'
	});
	
	
	if($("#generateproExptbl thead tr:first th:gt(13)").length>0){
		  	     
  	    var subCol=[];subColumns =[];
  		var subRows = [];
  		
  		$("#generateproExptbl thead tr:first th:gt(13)").each(function(){
  			var hdrText=$(this).find("div").text();
  			subColumns.push(capitalize_Words(hdrText));
  		});
  		
  		subCol.push(subColumns);
  		
  		$("#generateproExptbl tbody tr").each(function(){
  			var rowdata=[];
  			$(this).find("td:gt(13)").each(function(i){
  				
  				var cellData=$(this).text();
  				
  				/*if(i==0){
  					var subtext=cellData.substring(cellData.indexOf("<"),cellData.length);
  					
  					rowdata.push(subtext);
  					return;
  				}
  				*/
  				rowdata.push(cellData);
  				
  				
  			});
  			
  			subRows.push(rowdata);
  		});
  		
  		doc.addPage('a2','portrait');//landscape 
 	     pdfheader(doc,170);//250
 	     footer(doc,0);//80
 	    
 	    pdfAddTitle(doc,10,15,"Projected Expenditure Details on retirement continued...");
 	   
  		doc.autoTable({
  			 head:subCol,
  	         body:subRows,
  	         theme:'grid',
  		     startY:(isEmpty(position)?20:position),
//  	         afterPageContent: footer,
  	         margin:{left:10,right:10,top:10}/*{ horizontal: 5 }*/,
  	         bodyStyles: { valign: 'top' ,fontSize:11},
  	         styles:{overflow:'linebreak',halign:'right',cellWidth: 'wrap'},
  	         headStyles:{
  	             fillColor: [51, 122, 183],
  	             textColor: [255],
  	             halign: 'center',
  	             overflow: 'linebreak',
  	             cellWidth: 10,
  	             lineColor:[255,255,255]
  	         },
  	         columnStyles: {text:{cellWidth:'wrap'}},
  	         //theme: 'striped'
  	         theme: 'grid'
  		});
	}
}

function addAmendTableData(doc,position){
	var col=[],columns =[];
	var rows = [];
	
	$("#generatetoamendincExp thead tr:first th").each(function(){
		var hdrText=$(this).find("div").text();
		columns.push(capitalize_Words(hdrText));
	});
	
	col.push(columns);
	
	$("#generatetoamendincExp tbody tr").each(function(){
		var rowdata=[];
		$(this).find("td").each(function(i){
			
			var cellData=$(this).text();
			
			if(i==0){
				var subtext=cellData.substring(cellData.indexOf("<"),cellData.length);
				
				rowdata.push(subtext);
				return;
			}
			
			rowdata.push(cellData);
			
			
		});
		
		rows.push(rowdata);
	});
	
	
//	doc.autoTable(columns,rows,{styles: {overflow: 'linebreak',columnWidth: 'wrap'},startY: 20,columnStyles: {note: {columnWidth: 'auto'}}});
	doc.autoTable({
		head:col,
        body:rows,
        theme:'grid',
	     startY:(isEmpty(position)?20:position),
//        afterPageContent: footer,
        margin:{left:10,right:10,top:10}/*{ horizontal: 5 }*/,
        bodyStyles: { valign: 'top' ,fontSize:11},
        styles			:{overflow:'linebreak',halign:'right'},
        bodyStyles		: { valign: 'top',fontSize:11 },
        headStyles		: {
            fillColor	: [51, 122, 183],
            textColor	: [255],
            halign		: 'center',
            overflow	: 'linebreak',
            cellWidth	:10,
            lineColor	:[255,255,255]
        },
        columnStyles	: {	 0:{cellWidth:15}
        					,1:{cellWidth:18}
        					,2:{cellWidth:30}
        					,3:{cellWidth:30}
        					,4:{cellWidth:30}
        					,5:{cellWidth:30}
        					,6:{cellWidth:39}
        				  },
        tableWidth		:'wrap'
	});
	
}

function addGenTableData(doc,position){
	var col=[],columns =[];
	var rows = [];
	
	$("#generateproIncometbl thead tr:first th:lt(13)").each(function(i){
		var hdrText={};
		
		if(i==0){
			hdrText["title"]=capitalize_Words($(this).find("div").text().toUpperCase());
			hdrText["dataKey"]=capitalize_Words($(this).find("div").text());	
			hdrText["colSpan"]=2;
			hdrText["styles"]={halign:'center'};
			
			columns.push(hdrText);
			return true;
		}
		
		if($("#generateproIncometbl tbody tr:first td").length<14){
			if(i==$("#generateproIncometbl tbody tr:first td").length-2 || i==$("#generateproIncometbl tbody tr:first td").length-3){
				hdrText["title"]=capitalize_Words($(this).find("div").text().toUpperCase());
				hdrText["dataKey"]=capitalize_Words($(this).find("div").text());	
				hdrText["rowSpan"]=2;
				hdrText["styles"]={halign:'center'};
				
				columns.push(hdrText);
				return true;
			}
			
			
		}
		
		hdrText["title"]=capitalize_Words($(this).find("div").text().toUpperCase());
		hdrText["dataKey"]=capitalize_Words($(this).find("div").text());	
		
		columns.push(hdrText);
	});
	
	col.push(columns);
	
	columns =[];
	$("#generateproIncometbl thead tr:eq(1) th:lt(14)").each(function(){
		var hdrText={};
		
		hdrText["title"]=capitalize_Words($(this).find("div").text().toUpperCase());
		hdrText["dataKey"]=capitalize_Words($(this).find("div").text());	
		
		columns.push(hdrText);
	});
	
	col.push(columns);
	
	$("#generateproIncometbl tbody tr").each(function(){
		var rowdata=[];
		$(this).find("td:lt(14)").each(function(i){
			
			var cellData=$(this).text();
			
			if(i==0){
				var subtext=cellData.substring(cellData.indexOf("<"),cellData.length);
				
				rowdata.push(subtext);
				return;
			}
			
			rowdata.push(cellData);
			
			
		});
		
		rows.push(rowdata);
	});
	
	
//	doc.autoTable(columns,rows,{styles: {overflow: 'linebreak',columnWidth: 'wrap'},startY: 20,columnStyles: {note: {columnWidth: 'auto'}}});
	doc.autoTable({
		head			:col,
        body			:rows,
        theme			:'grid',
	    startY			:(isEmpty(position)?20:position),
//      afterPageContent: footer,
        margin			:{left:10,right:10,top:10}/*{ horizontal: 5 }*/,
        styles			:{overflow:'linebreak',halign:'right'},
        bodyStyles		: { valign: 'top',fontSize:11 },
        headStyles		: {
            fillColor	: [51, 122, 183],
            textColor	: [255],
            halign		: 'center',
            overflow	: 'linebreak',
            cellWidth	:29,
            lineColor	:[255,255,255]
        },
        columnStyles	: {text:{cellWidth:29,minCellWidth:10}},
        tableWidth		:'wrap'
	});
	
/*for the subtable*/	
	
if($("#generateproIncometbl thead tr:first th:gt(12)").length>0)	{
	var subCol=[],subColumns =[];
	var subRows = [];
	
	$("#generateproIncometbl thead tr:first th:gt(12)").each(function(i){
		var hdrText={};
		
			if(i>$("#generateproIncometbl thead tr:first th:gt(12)").length-3){
				hdrText["title"]=capitalize_Words($(this).find("div").text().toUpperCase());
				hdrText["dataKey"]=capitalize_Words($(this).find("div").text());	
				hdrText["rowSpan"]=2;
				hdrText["styles"]={halign:'center'};
				
				subColumns.push(hdrText);
				return true;
			}
		
		hdrText["title"]=capitalize_Words($(this).find("div").text().toUpperCase());
		hdrText["dataKey"]=capitalize_Words($(this).find("div").text());	
		
		subColumns.push(hdrText);
	});
	
	subCol.push(subColumns);
	
	subColumns =[];
	$("#generateproIncometbl thead tr:eq(1) th:gt(13)").each(function(){
		var hdrText={};
		
		hdrText["title"]=capitalize_Words($(this).find("div").text().toUpperCase());
		hdrText["dataKey"]=capitalize_Words($(this).find("div").text());	
		
		subColumns.push(hdrText);
	});
	
	subCol.push(subColumns);
	
	$("#generateproIncometbl tbody tr").each(function(){
		var rowdata=[];
		$(this).find("td:gt(13)").each(function(i){
			
			var cellData=$(this).text();
			
			if(i==0){
				var subtext=cellData.substring(cellData.indexOf("<"),cellData.length);
				
				rowdata.push(subtext);
				return;
			}
			
			rowdata.push(cellData);
			
			
		});
		
		subRows.push(rowdata);
	});
	
		doc.addPage('a2','portrait');//landscape 
		pdfheader(doc,170);//250
		footer(doc,0);//80
     
     	pdfAddTitle(doc,10,15,"Income and assets available for retirement continued...");
     	
		doc.autoTable({
			 head:subCol,
	         body:subRows,
	         theme:'grid',
		     startY:(isEmpty(position)?20:position),
	         margin:{left:10,right:10,top:10}/*{ horizontal: 5 }*/,
	         styles:{overflow:'linebreak',halign:'right'},
	         bodyStyles: { valign: 'top',fontSize:11 },
	         headStyles:{
	             fillColor: [51, 122, 183],
	             textColor: [255],
	             halign: 'center',
	             overflow: 'linebreak',
	             cellWidth: 29,
	             lineColor:[255,255,255]
	         },
	         columnStyles: {text:{cellWidth:29,minCellWidth:20}},
	         tableWidth:'wrap'
		});
		
}
	
}

function addAutoTblRDEExp(doc,position){
	var col=[],columns =[];
	var rows = [];
	
	$("#RDExptbl thead tr:first th").each(function(i){
		
		if(i==1)return;
		
		var hdrText=$(this).find(">div").find('div').text();
		columns.push(capitalize_Words(hdrText));
	});
	
	col.push(columns);
	
	$("#RDExptbl tbody tr").each(function(){
		
		var rowdata=[];
		$(this).find("td").each(function(i){
			
			if(i==1)return;
			
			var cellData=$(this).find("input:first").val();
			
			if(i==0){
				var subtext=$(this).find("span:first").text();
				
				rowdata.push(subtext);
				return;
			}
			
			if(i==3 || i==6){
				var subtext=$(this).find("select:first").val();
				
				rowdata.push(subtext);
				return;
			}
			
			if(i==4){
//				var subtext="$"+cellData;
				var subtext=$.fn.dataTable.render.number(',', '.',0,"$").display(cellData);
				rowdata.push(subtext);
				return;
			}
			
			rowdata.push(cellData);
			
			
		});
		
		rows.push(rowdata);
	});
	
	doc.autoTable({
        head:col,
        body:rows,
        theme:'grid',
        startY:(isEmpty(position)?20:position),
        margin:{left:10,right:10,top:10}/*{ horizontal: 5 }*/,
        styles:{overflow:'linebreak',halign:'left', cellWidth: 'wrap'},
        headStyles: {
            fillColor: [51, 122, 183],
            textColor: [255],
            halign: 'center',
            overflow: 'linebreak',
            cellWidth: 10,
            lineColor:[255,255,255],
        },
        bodyStyles: { valign: 'top' ,fontSize:11},
        columnStyles: {
        	0: {cellWidth:8,halign:'center',overflow:'linebreak'},
        	1: {cellWidth:50,halign:'left',overflow:'linebreak'},
        	2: {cellWidth:10,halign:'left',overflow:'linebreak'},
        	3: {cellWidth:15,halign:'right',overflow:'linebreak'},
        	4: {cellWidth:10,halign:'right',overflow:'linebreak'},
        	4: {cellWidth:8,halign:'right',overflow:'linebreak'},
        	6: {cellWidth:10,halign:'right',overflow:'linebreak'},
        	7: {cellWidth:10,halign:'right',overflow:'linebreak'},
        	8: {cellWidth:50,halign:'left',overflow:'linebreak'},
        }
        /*columnStyles: {0: {halign: 'center', fillColor: [0, 255, 0]},
        	1: {halign: 'center',fillColor: [255, 255, 0],cellWidth:10,overflow:'linebreak'}},*/
    });
}

//<!--changes done 24/06/2019 -->
function addAutoTblCashPayout(doc,position){
	var col=[],columns =[];
	var rows = [];
	
	$("#cpfpayoutRD thead tr:first th").each(function(i){
		
//		if(i==1)return;
		
		var hdrText=$(this).find(">div").find('div').text();
		columns.push(capitalize_Words(hdrText));
	});
	
		col.push(columns);
	
	$("#cpfpayoutRD tbody tr").each(function(){
		
		var rowdata=[];
		$(this).find("td").each(function(i){
			
//			if(i==1)return;
			
			var cellData=$(this).find("input:first").val();
			
			if(i==0){
				var subtext=$(this).find("span:first").text(); 
				rowdata.push(subtext);
				return;
			}
			
			if(i==1 || i==2){
				var subtext=$(this).find("input:first").val(); 
				rowdata.push(subtext);
				return;
			}
			
			if(i==3 || i==4){
//				var subtext="$"+cellData;
				var subtext=$.fn.dataTable.render.number(',', '.',0,"$").display(cellData);
				rowdata.push(subtext);
				return;
			}
			
			rowdata.push(cellData);
			
			
		});
		
		rows.push(rowdata);
	});
	
	doc.autoTable({
        head:col,
        body:rows,
        theme:'grid',
        startY:(isEmpty(position)?20:position),
        margin:{left:10,right:10,top:10}/*{ horizontal: 5 }*/,
        styles:{overflow:'linebreak',halign:'left', cellWidth: 'wrap'},
        headStyles: {
            fillColor: [51, 122, 183],
            textColor: [255],
            halign: 'center',
            overflow: 'linebreak',
            cellWidth: 10,
            lineColor:[255,255,255],
        },
        bodyStyles: { valign: 'top' ,fontSize:11},
        columnStyles: {
        	0: {cellWidth:5,halign:'center',overflow:'linebreak'},
        	1: {cellWidth:30,halign:'left',overflow:'linebreak'},
        	2: {cellWidth:30,halign:'left',overflow:'linebreak'},
        	3: {cellWidth:50,halign:'right',overflow:'linebreak'},
        	4: {cellWidth:50,halign:'right',overflow:'linebreak'},  
 
        },
        tableWidth		:'wrap'
        /*columnStyles: {0: {halign: 'center', fillColor: [0, 255, 0]},
        	1: {halign: 'center',fillColor: [255, 255, 0],cellWidth:10,overflow:'linebreak'}},*/
    });
}

function addAutoTblRDInc(doc,position){
	var col=[],columns =[];
	var rows = [];
	
	$("#RDInctbl thead tr:first th").each(function(i){
		
		if(i==1)return;
		
		var hdrText=$(this).find(">div").find('div').text();
		columns.push(capitalize_Words(hdrText));
	});
	
	col.push(columns);
	
	$("#RDInctbl tbody tr").each(function(){
		
		var rowdata=[];
		$(this).find("td").each(function(i){
			
			if(i==1)return;
			
			var cellData=$(this).find("input:first").val();
			
			if(i==0){
				var subtext=$(this).find("span:first").text();
				
				rowdata.push(subtext);
				return;
			}
			
			if(i==4 || i==8){
				var subtext=$(this).find("select:first").val();
				
				rowdata.push(subtext);
				return;
			}
			
			if(i==5){
				var subtext=$.fn.dataTable.render.number(',', '.',0,"$").display(cellData);;
				
				rowdata.push(subtext);
				return;
			}
			
			rowdata.push(cellData);
			
			
		});
		
		rows.push(rowdata);
	});
	
	
//	doc.autoTable(columns,rows,{styles: {overflow: 'linebreak',columnWidth: 'wrap'},startY: 20,columnStyles: {note: {columnWidth: 'auto'}}});
	doc.autoTable({
		head:col,
        body:rows,
        theme:'grid',
	    startY:(isEmpty(position)?20:position),
//      afterPageContent: footer,
        margin:{left:10,right:10,top:10}/*{ horizontal: 5 }*/,
        styles:{overflow:'linebreak',halign:'left', cellWidth: 'wrap'},
        headStyles: {
            fillColor: [51, 122, 183],
            textColor: [255],
            halign: 'center',
            overflow: 'linebreak',
            cellWidth: 10,
            lineColor:[255,255,255],
        },
        bodyStyles: { valign: 'top',fontSize:11},
        columnStyles: {
        	0: {cellWidth: 'wrap',halign:'center',overflow:'linebreak'},
        	1: {cellWidth:40,halign:'left',overflow:'linebreak'},
        	2: {cellWidth:40,halign:'left',overflow:'linebreak'},
        	3: {cellWidth:10,halign:'left',overflow:'linebreak'},
        	4: {cellWidth:10,halign:'right',overflow:'linebreak'},
        	5: {cellWidth:10,halign:'right',overflow:'linebreak'},
        	6: {cellWidth:10,halign:'right',overflow:'linebreak'},
        	7: {cellWidth:10,halign:'left',overflow:'linebreak'},
        	8: {cellWidth:10,halign:'right',overflow:'linebreak'},
        	9: {cellWidth:10,halign:'right',overflow:'linebreak'}
        },
	});
	
}

function addAutoTblRDIncAss(doc,position){
	var col=[],columns =[];
	var rows = [];
	
	$("#RDIncAsstbl thead tr:first th").each(function(i){
		
		if(i==1)return;
		
		var hdrText=$(this).find(">div").find('div').text();
		columns.push(capitalize_Words(hdrText));
	});
	
	col.push(columns);
	
	$("#RDIncAsstbl tbody tr").each(function(){
		
		var rowdata=[];
		$(this).find("td").each(function(i){
			
			if(i==1)return;
			
			var cellData=$(this).find("input:first").val();
			
			if(i==0){
				var subtext=$(this).find("span:first").text();
				
				rowdata.push(subtext);
				return;
			}
			
			if(i==4 || i==8){
				var subtext=$(this).find("select:first").val();
				
				rowdata.push(subtext);
				return;
			}
			
			if(i==5){
				var subtext=$.fn.dataTable.render.number(',', '.',0,"$").display(cellData);;
				
				rowdata.push(subtext);
				return;
			}
			
			rowdata.push(cellData);
			
			
		});
		
		rows.push(rowdata);
	});
	
	
//	doc.autoTable(columns,rows,{styles: {overflow: 'linebreak',columnWidth: 'wrap'},startY: 20,columnStyles: {note: {columnWidth: 'auto'}}});
	doc.autoTable({
		head:col,
        body:rows,
        theme:'grid',
	    startY:(isEmpty(position)?20:position),
//      afterPageContent: footer,
        margin:{left:10,right:10,top:10}/*{ horizontal: 5 }*/,
        bodyStyles: { valign: 'top' ,fontSize:11},
        styles:{overflow:'linebreak',halign:'left', cellWidth: 'wrap'},
        headStyles: {
            fillColor: [51, 122, 183],
            textColor: [255],
            halign: 'center',
            overflow: 'linebreak',
            cellWidth: 10,
            lineColor:[255,255,255],
        },
        columnStyles: {
        	0: {cellWidth: 'wrap',halign:'center',overflow:'linebreak'},
        	1: {cellWidth:40,halign:'left',overflow:'linebreak'},
        	2: {cellWidth:40,halign:'left',overflow:'linebreak'},
        	3: {cellWidth:10,halign:'left',overflow:'linebreak'},
        	4: {cellWidth:10,halign:'right',overflow:'linebreak'},
        	5: {cellWidth:10,halign:'right',overflow:'linebreak'},
        	6: {cellWidth:10,halign:'right',overflow:'linebreak'},
        	7: {cellWidth:10,halign:'left',overflow:'linebreak'},
        	8: {cellWidth:10,halign:'right',overflow:'linebreak'},
        	9: {cellWidth:10,halign:'right',overflow:'linebreak'}
        }
	});
	
}


function addAmendincExpAccm(doc,position){
	var col=[],columns =[];
	var rows = [];
	
	$("#generatetoamendincExpAccm thead tr:first th").each(function(){
		var hdrText=$(this).find("div").text();
		columns.push(capitalize_Words(hdrText));
	});
	
	col.push(columns);
	
	$("#generatetoamendincExpAccm tbody tr").each(function(){
		var rowdata=[];
		$(this).find("td").each(function(i){
			
			var cellData=$(this).text();
			
			if(i==0){
				var subtext=cellData.substring(cellData.indexOf("<"),cellData.length);
				
				rowdata.push(subtext);
				return;
			}
			
			rowdata.push(cellData);
			
			
		});
		
		rows.push(rowdata);
	});
	
	
	doc.autoTable({
		head:col,
        body:rows,
        theme:'grid',
	    startY:(isEmpty(position)?20:position),
        margin:{left:10,right:10,top:10}/*{ horizontal: 5 }*/,
        bodyStyles: { valign: 'top',fontSize:11 },
        styles			:{overflow:'linebreak',halign:'right'},
        bodyStyles		: { valign: 'top',fontSize:11 },
        headStyles		: {
            fillColor	: [51, 122, 183],
            textColor	: [255],
            halign		: 'center',
            overflow	: 'linebreak',
            cellWidth	:10,
            lineColor	:[255,255,255]
        },
        columnStyles	: {	 0:{cellWidth:15}
        					,1:{cellWidth:18}
        					,2:{cellWidth:30}
        					,3:{cellWidth:30}
        					,4:{cellWidth:30}
        					,5:{cellWidth:30}
        					,6:{cellWidth:39}
        				  },
        tableWidth		:'wrap'
	});
	
}

function ReplaceAt(input, search, replace, start, end) {
	return input.slice(0, start)
	+ input.slice(start, end).replace(search, replace)
  + input.slice(end);
}

function footer(doc,leftAlign){ 
    //doc.text(10,doc.internal.pageSize.height - 10, 'page ' + doc.page); //print number bottom right
	doc.text(doc.internal.pageSize.width-20,doc.internal.pageSize.height - 10, 'Page ' + doc.page);
	
	doc.text(190+leftAlign,doc.internal.pageSize.height - 10,"Avallis Financial Pte Ltd");
	doc.text(145+leftAlign,doc.internal.pageSize.height-5,"24, Raffles Place, #14-02  Clifford Centre,SINGAPORE,048621");
	
	var today=new Date();
	
//	doc.text(10,doc.internal.pageSize.height - 10,"Report Printed on : -"+$.format.date(today,"dd MM yyyy hh:mm a"));
	doc.text(10,doc.internal.pageSize.height - 10,"Report Printed on : "+ moment(today).format("DD/MM/YYYY HH:mm:ss"));
	doc.text(10,doc.internal.pageSize.height-5,"Retirement Planning Cash Flow Analysis");
	
	doc.page ++;
};

function pdfheader(doc,LeftAlign){ 
	doc.setFontSize(18);
	doc.setFontType("bold");
//	doc.setTextColor(80,144,124,1);
	doc.text(LeftAlign,7,"Retirement Planning Cash Flow Analysis");
	doc.setFontSize(13);
	doc.setFontType("normal");
//	doc.setTextColor(0,0,0,1);
};

function pdfAddTitle(doc,hAlign,vAlign,title){ 
	doc.setFontSize(14.04);
	doc.setFontType("bold");
	doc.setTextColor(80,144,124,1);
	doc.text(hAlign,vAlign,title);
	doc.setFontSize(13);
	doc.setFontType("normal");
	doc.setTextColor(0,0,0,1);
};


function savePdf(pdf,selfname){
	var dte=new Date(); 
    var fileName="RP_CF_"+dte.getDate()+(dte.getMonth()+1)+dte.getFullYear()+"_"+dte.getHours()+dte.getMinutes()+dte.getSeconds();
    
    pdf.save(''+fileName+'.pdf');
    
    hideLoader();	
    $("#rpCashFlwAnlys_Dialog .btn-group").show();
    $("#rpCashFlwAnlys_Dialog .pdf-hide").show();
}
