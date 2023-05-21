

var colorbkg;

var topcolor;
var sidecolor;
var menucolor;
var submenucolor;
var tblheadercolor;
var bdycolor;

var colorPicker = new iro.ColorPicker("#colorWheel", {
  
  width: 290,
  height: 360,
  handleRadius: 8,
  handleUrl: null,
  handleOrigin: {y: 0, x: 0},
  color: "#f00",
  borderWidth: 2,
  padding: 8,
  wheelLightness: true,
  wheelAngle: 270,
  wheelDirection: 'anticlockwise',
  layout: [
    {
      component: iro.ui.Wheel,
      options: {
      }
    },
    {
      component: iro.ui.Slider,
      options: {
      }
    },
    {
      component: iro.ui.Slider,
      options: {
        sliderType: 'hue'
      }
    },
    {
      component: iro.ui.Slider,
      options: {
        sliderType: 'saturation'
      }
    }
  ]
});

colorPicker.on('mount', function() {
//  console.log('mount')
});

colorPicker.on('color:change', function() {
	
//  console.log('color:change');
});

colorPicker.on('input:change', function(color) {
	
//	console.log(color.hexString);
	var rgb = color.rgbString;		
	setBgColor(rgb);	 	
	
});

colorPicker.on(['color:init', 'color:change'], function() {
	
});

function setBgColor(rgb){
	
	$("#headerSection").css({'background':rgb});
	
	$("#hTxtFldProfileColor").val(rgb);
	
	topcolor=rgb;
	$("#colorTop").val(topcolor);
//	setFontColor(rgb);
	
}

function setFontColor(rgb){
	
	
	if (rgb.match(/^rgb/)) {
	    var a = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/),
	      r = a[1],
	      g = a[2],
	      b = a[3];
	  
	    
//	    console.log( "rgb("+ (-r)+","+ (-g)+","+ (-b)+")");
	    
	 // Counting the perceptive luminance - human eye favors green color... 
	    var luminance = ( 0.299 * r + 0.587 * g + 0.114 * b)/255;
	    
	    var d_color = "";

	    if (luminance > 0.5)
	    	d_color = "#000000"; // bright colors - black font
	    else
	    	d_color = "#ffffff"; // dark colors - white font
	    
	    $(".main-sidebar").find("li a").css("color",d_color);
		$("#headerSection").find("*").not(".btn-class").css("color",d_color);
		  
	  }
	
}



var colorPicker1 = new iro.ColorPicker("#colorWheel1", {
	  
	  width: 290,
	  height: 360,
	  handleRadius: 8,
	  handleUrl: null,
	  handleOrigin: {y: 0, x: 0},
	  color: "#f00",
	  borderWidth: 2,
	  padding: 8,
	  wheelLightness: true,
	  wheelAngle: 270,
	  wheelDirection: 'anticlockwise',
	  layout: [
	    {
	      component: iro.ui.Wheel,
	      options: {
	      }
	    },
	    {
	      component: iro.ui.Slider,
	      options: {
	      }
	    },
	    {
	      component: iro.ui.Slider,
	      options: {
	        sliderType: 'hue'
	      }
	    },
	    {
	      component: iro.ui.Slider,
	      options: {
	        sliderType: 'saturation'
	      }
	    }
	  ]
	});

colorPicker1.on('input:change', function(color) {
	var rgb = color.rgbString;	
	setBgColor1(rgb);
	
});


function setBgColor1(rgb){
	
	$(".main-sidebar").css({'background':rgb});
	$(".sidebar").css({'background':rgb});
	$(".sidebar-menu").css({'background':rgb});
	
	sidecolor=rgb;
	$('#colorSideMenu').val(sidecolor);
	
}

colorPicker1.on(['color:init', 'color:change'], function() {
	
});
var bgcolormainmenu="";

var colorPicker2 = new iro.ColorPicker("#colorWheel2", {
	  
	  width: 290,
	  height: 360,
	  handleRadius: 8,
	  handleUrl: null,
	  handleOrigin: {y: 0, x: 0},
	  color: "#f00",
	  borderWidth: 2,
	  padding: 8,
	  wheelLightness: true,
	  wheelAngle: 270,
	  wheelDirection: 'anticlockwise',
	  layout: [
	    {
	      component: iro.ui.Wheel,
	      options: {
	      }
	    },
	    {
	      component: iro.ui.Slider,
	      options: {
	      }
	    },
	    {
	      component: iro.ui.Slider,
	      options: {
	        sliderType: 'hue'
	      }
	    },
	    {
	      component: iro.ui.Slider,
	      options: {
	        sliderType: 'saturation'
	      }
	    }
	  ]
	});

colorPicker2.on('input:change', function(color) {
	var rgb = color.rgbString;	
	setBgColor2(rgb);
	
});


function setBgColor2(rgb){
	
	$(".treeview-menu").css({'background-color':rgb});
	submenucolor=rgb;
	$('#colorSubMenu').val(rgb);
}
var colorPicker3 = new iro.ColorPicker("#colorWheel3", {
	 
	  width: 290,
	  height: 360,
	  handleRadius: 8,
	  handleUrl: null,
	  handleOrigin: {y: 0, x: 0},
	  color: "#f00",
	  borderWidth: 2,
	  padding: 8,
	  wheelLightness: true,
	  wheelAngle: 270,
	  wheelDirection: 'anticlockwise',
	  layout: [
	    {
	      component: iro.ui.Wheel,
	      options: {
	      }
	    },
	    {
	      component: iro.ui.Slider,
	      options: {
	      }
	    },
	    {
	      component: iro.ui.Slider,
	      options: {
	        sliderType: 'hue'
	      }
	    },
	    {
	      component: iro.ui.Slider,
	      options: {
	        sliderType: 'saturation'
	      }
	    }
	  ]
	});

colorPicker3.on('input:change', function(color) {
	var rgb = color.rgbString;	
	setBgColor3(rgb);
	
});


function setBgColor3(rgb){
	
	$("table.dataTable thead th, table.dataTable thead td").css({'background':rgb});
	tblheadercolor=rgb;
	$('#colorTableHeader').val(tblheadercolor);
}

var colorPicker4 = new iro.ColorPicker("#colorWheel4", {
	  
	  width: 290,
	  height: 360,
	  handleRadius: 8,
	  handleUrl: null,
	  handleOrigin: {y: 0, x: 0},
	  color: "#f00",
	  borderWidth: 2,
	  padding: 8,
	  wheelLightness: true,
	  wheelAngle: 270,
	  wheelDirection: 'anticlockwise',
	  layout: [
	    {
	      component: iro.ui.Wheel,
	      options: {
	      }
	    },
	    {
	      component: iro.ui.Slider,
	      options: {
	      }
	    },
	    {
	      component: iro.ui.Slider,
	      options: {
	        sliderType: 'hue'
	      }
	    },
	    {
	      component: iro.ui.Slider,
	      options: {
	        sliderType: 'saturation'
	      }
	    }
	  ]
	});

colorPicker4.on('input:change', function(color) {
	var rgb = color.rgbString;	
	setBgColor4(rgb);
});


function setBgColor4(rgb){
	
	$(".content-wrapper").css({'background':rgb});
	bdycolor=rgb;
	$('#colorBody').val(bdycolor);
}

var colorPicker5 = new iro.ColorPicker("#colorWheel5", {
	  
	  width: 290,
	  height: 360,
	  handleRadius: 8,
	  handleUrl: null,
	  handleOrigin: {y: 0, x: 0},
	  color: "#f00",
	  borderWidth: 2,
	  padding: 8,
	  wheelLightness: true,
	  wheelAngle: 270,
	  wheelDirection: 'anticlockwise',
	  layout: [
	    {
	      component: iro.ui.Wheel,
	      options: {
	      }
	    },
	    {
	      component: iro.ui.Slider,
	      options: {
	      }
	    },
	    {
	      component: iro.ui.Slider,
	      options: {
	        sliderType: 'hue'
	      }
	    },
	    {
	      component: iro.ui.Slider,
	      options: {
	        sliderType: 'saturation'
	      }
	    }
	  ]
	});

colorPicker5.on('input:change', function(color) {
	var rgb = color.rgbString;	
	
	
	$(".sidebar-menu>li>a").each(function(){
		$(this).css( "background-color" ,"");
	});

	setBgColor5(rgb);
	
});


function setBgColor5(rgb){
	
	$(".sidebar-menu>li.active>a").css({'background-color':rgb});
	menucolor =	rgb;
	colorbkg = rgb;
	$('#colorSelMenuItem').val(rgb);
	
} 



var colorPicker6 = new iro.ColorPicker("#colorWheel6", {
	  
	  width: 290,
	  height: 360,
	  handleRadius: 8,
	  handleUrl: null,
	  handleOrigin: {y: 0, x: 0},
	  color: "#f00",
	  borderWidth: 2,
	  padding: 8,
	  wheelLightness: true,
	  wheelAngle: 270,
	  wheelDirection: 'anticlockwise',
	  layout: [
	    {
	      component: iro.ui.Wheel,
	      options: {
	      }
	    },
	    {
	      component: iro.ui.Slider,
	      options: {
	      }
	    },
	    {
	      component: iro.ui.Slider,
	      options: {
	        sliderType: 'hue'
	      }
	    },
	    {
	      component: iro.ui.Slider,
	      options: {
	        sliderType: 'saturation'
	      }
	    }
	  ]
	});

colorPicker6.on('input:change', function(color) {
	var rgb = color.rgbString;	
	setBgColor6(rgb);
	
});


function setBgColor6(rgb){	
	$('#colorReportMainHead').val(rgb);
}


var colorPicker7 = new iro.ColorPicker("#colorWheel7", {
	  
	  width: 290,
	  height: 360,
	  handleRadius: 8,
	  handleUrl: null,
	  handleOrigin: {y: 0, x: 0},
	  color: "#f00",
	  borderWidth: 2,
	  padding: 8,
	  wheelLightness: true,
	  wheelAngle: 270,
	  wheelDirection: 'anticlockwise',
	  layout: [
	    {
	      component: iro.ui.Wheel,
	      options: {
	      }
	    },
	    {
	      component: iro.ui.Slider,
	      options: {
	      }
	    },
	    {
	      component: iro.ui.Slider,
	      options: {
	        sliderType: 'hue'
	      }
	    },
	    {
	      component: iro.ui.Slider,
	      options: {
	        sliderType: 'saturation'
	      }
	    }
	  ]
	});

colorPicker7.on('input:change', function(color) {
	var rgb = color.rgbString;	
	setBgColor7(rgb);	
});


function setBgColor7(rgb){	
	$('#colorReportSubHead').val(rgb);
}


function setAllLayoutColor(){
	
	
	
	var reportMain = $('#colorReportMainHead').val(),
		reportsub = $('#colorReportSubHead').val(),
		topcolor = $("#colorTop").val(),
		sidecolor = $('#colorSideMenu').val(),
		submenucolor = $('#colorSubMenu').val(),
		menucolor = $('#colorSelMenuItem').val(),
		tblheadercolor = $('#colorTableHeader').val(),
		bdycolor = $('#colorBody').val();
	
	  $("#hTxtFldProfileColor").val('{"TopColor":"' + topcolor + '","SidemenuColor":"'+ sidecolor +'","MenuColor":"'+ menucolor +'","SubMenuColor":"'+ submenucolor +'","TableHeaderColor":"'+ tblheadercolor +'","BodyDivColor":"'+ bdycolor +'","RepMain":"'+reportMain+'","RepSub":"'+reportsub+'"}');

	  var jsonVal = (isEmpty($("#hTxtFldProfileColor").val()) ? "{}" : $("#hTxtFldProfileColor").val());

	  var resObj = jsonVal;

	  $("#hTxtFldProfileColor").val(resObj);
	  
	  $("#hTxtFldDefaultColorFlag").val( $("#chkDefaultColors").is(":checked") ? "Y" : "N" );
}

$("#clsmodal").click(function(){
	setAllLayoutColor();
});

