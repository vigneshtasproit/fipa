<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page import="java.net.URL"%>

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta http-equiv='cache-control' content='no-cache'>

	<meta http-equiv='expires' content='0'>

	<meta http-equiv='pragma' content='no-cache'>

  <title>Avallis | FIPA</title>
  <!-- Tell the browser to be responsive to screen width -->
  <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
  <!-- Bootstrap 3.3.7 -->
  <link rel="stylesheet" href="plugins/bootstrap/css/bootstrap.min.css">
  <!-- Font Awesome -->
  <link rel="stylesheet" href="plugins/font-awesome	/css/font-awesome.min.css">
  
  <link rel="stylesheet" href="plugins/bootstrap-datepicker/css/bootstrap-datetimepicker.css">
  <link rel="stylesheet" href="plugins/bootstrap/css/bootstrap-multiselect.css">
  
  <link rel="stylesheet" href="plugins/fipa/css/fipa.min.css">
  <link rel="stylesheet" href="plugins/fipa/css/commonstyles.css">
  
  <link rel="stylesheet" href="plugins/fipa/css/skins/_all-skins.min.css">
 
  <link rel="stylesheet" href="plugins/bootstrap-datepicker/css/bootstrap-datepicker.min.css">
  
  <!-- Daterange picker -->
  <link rel="stylesheet" href="plugins/bootstrap-daterangepicker/css/daterangepicker.css">
  <!-- bootstrap wysihtml5 - text editor -->
  <link rel="stylesheet" href="plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css?a=<%= new java.util.Date() %>">

  <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
  <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
  <!--[if lt IE 9]>
  <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
  <![endif]-->

  <!-- Google Font -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic">
  
  <link rel="stylesheet" type="text/css" href="plugins/fipa/css/button-styles.css" />
  <link rel="stylesheet" type="text/css" href="plugins/fipa/css/loaderStyles.css" />
  <link rel="stylesheet" type="text/css" href="plugins/fipa/css/uielements.css">
  
  <link rel="stylesheet" type="text/css" href="plugins/jquery-qtip/jquery.qtip.css" />
  <link rel="stylesheet" type="text/css" href="plugins/jquery-qtip/toastr.min.css" />
  
   <!-- Datatable styles -->  
<link href="plugins/datatable/jquery.dataTables.min.css" rel="stylesheet">
<link href="plugins/datatable/latest/fixedColumns.dataTables.min.css" rel="stylesheet">
<link href="plugins/datatable/keyTable.dataTables.min.css" rel="stylesheet">
<link href="plugins/datatable/responsive.bootstrap.css" rel="stylesheet">
<link href="plugins/d3_charts/c3.css" rel="stylesheet">	  


<link rel='stylesheet' href='plugins/calendar/acbs_themes/themeChooser/excite.css' title="calendarThemeSet" type="text/css" />   
<link href='plugins/calendar/css/fullcalendar.css' rel='stylesheet' type="text/css" />
<link href='plugins/calendar/css/fullcalendar.print.css' rel='stylesheet' media='print' />  
<link href='plugins/calendar/css/fullcalendar.min.css' rel='stylesheet' />   
<link href='plugins/calendar/css/jquerysctipttop.css' rel='stylesheet' />   
<link href='plugins/calendar/css/floatCalendar.css' rel='stylesheet' /> 
 
 <link rel="stylesheet" href="plugins/fipa/css/Chart.min.css"> 
 <link rel="stylesheet" href="plugins/fipa/css/font-awesome.min.css"> 
  <!-- htmltopdf styles -->  
   <link rel="stylesheet" type="text/css" href="plugins/fipa/css/htmlreport.css" />
  
  
  <%response.addHeader("Cache-Control", "no-cache, no-store, must-revalidate");
response.addHeader("Pragma", "no-cache");
response.setDateHeader("Expires", 0);
/* Local Set Up*/

URL kycObj= new URL("https","secure-ekyc.avallis.com","/KYC");
//URL kycObj= new URL(request.getScheme(),request.getServerName(),request.getServerPort(),"/KYC");
request.setAttribute("KYC_URL", kycObj.toString());



%>
  <script>

  var BASEURL = "";
  BASEURL = "<%=request.getContextPath()%>";

  </script>
  
  
</head>
<body class="hold-transition skin-blue-light sidebar-mini">

<!-- 		Fipa Loader -->
<div class="loading">   
	<img  src="images/loading-circle.gif" class="imageloader">
	<span id="loadtext"></span>
</div>		
<!-- 	End Fipa Loader -->


<div class="wrapper" >

  <header class="main-header">
    <!-- Logo -->
    <a href="#" class="logo" style="width: 140px;">
      <!-- mini logo for sidebar mini 50x50 pixels -->
      <span class="logo-mini"><b style="color: rgb(70,90,101); ">FI</b><b style="color: #50907C ">PA</b></span>
      <!-- logo for regular state and mobile devices -->
      <span class="logo-lg"><img src="images/fipa_admin_logo.png"  alt="FIPA Logo" style="width: 115px;height: 50px;padding: 5px;border-radius: 15px;"></span>
    </a>
    <!-- Header Navbar: style can be found in header.less -->
    <nav class="navbar navbar-static-top"  id="headerSection" Style="margin-left: 140px;background: linear-gradient(110deg, #1d655cf7 60%, #243665 60%);">
      <!-- Sidebar toggle button-->
    <!--   <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button" title="Expand/Collapse side menu items" >
        <span class="sr-only" >Toggle navigation</span>
      </a> -->

<!-- <div class="navbar-custom-menu">
        <ul class="nav navbar-nav">
        <li style="padding-left: 1em;float: left;">
        <div class="input-container">
						 <label for="txtFldArctabCustName" class="control-label" style="color: #fff">Name</label>
					    <input class="textfilds" id="txtFldArctabCustName" name="txtFldArctabCustName"  style="font-weight: 700" readonly="true"/> 
					</div>
        </li>
        </ul>
        </div> -->
           
	 <div class="col-md-13" style="line-height: 3.42857;padding-left: 10px;display:none" id="txtNavClientDtls">
				<div class="col-md-3">
			  		<div class="input-container">
						 <label for="txtFldNavCustName" class="control-label" style="color: #fff;font-weight: 500;font-size: 14px;">Name :</label>
					    <input class="textfilds" id="txtFldNavCustName" name="txtFldNavCustName"  style="font-weight: 700;color: #fff;border-bottom: 0px;font-size: 14px;" readonly="true"/> 
					</div>
      			</div>
      			
      			<div class="col-md-4">
      				<div class="input-container">
						 <label for="txtFldNavCustNric" id="lblSrchNric" class="control-label" style="color: #fff;font-weight: 500;font-size: 14px;">NRIC/ FIN / Passport :</label>
						<input class="textfilds" id="txtFldNavCustNric" name="txtFldNavCustNric"  style="font-weight: 700;color: #fff;border-bottom: 0px;font-size: 14px;" readonly="true"/>
					</div>
      			</div>
      			
	</div> 
	
      <div class="navbar-custom-menu">
        <ul class="nav navbar-nav">
          <!-- Messages: style can be found in dropdown.less-->  
          
          
          
          <li>
           <!-- <div class="btnStyle">
			          <button type="button"  id="btnSaveProfile" style="border-radius: 5px;background-color: #243665;" class="btn BtnFIPASRCH StylishSAVE" onclick="fipaSave()">
			      			<span class="txt">Save Profile</span>
			      			<span class="round"><i class="fa fa-floppy-o"></i></span>
			    		</button>   
				</div> -->	 
			    </li>
			    
				<li style="padding-left:1em">
				 <!-- <div class="btnStyle">
					 <button type="button"  id="btnNewProfile" style="border-radius: 5px;background-color: #243665;" class="btn BtnFIPASRCH StylishSAVE" onclick="fipaNewProfile()">
			      			<span class="txt">New Profile</span>
			      			<span class="round"><i class="fa fa-file-o"></i></span>
			    		</button>   
					
					</div>  -->
			 	</li>
			 	<!-- <li style="padding-left:1em" class="dropdown" style="margin-top: 13px;">
			 	<button type="button" id="refmasterlink"  
						class="btn btn-info dropdown-toggle" data-toggle="dropdown"
						role="button" aria-expanded="false"> <span
							class="fa fa-sliders" aria-hidden="true"></span>  &nbsp;<span
							class=""><b>MASTERS</b></span> <span class="caret"></span></button>
						<ul class="dropdown-menu mastDropdownul" role="menu" >
							<li class="ptrcursor dropDowntxtshadow"><a class="txtWhite" id="masterAccTypes"
								onclick="openURLPopup(this,'/MasterCPFAccType.do','Master CPF Account Types')">
									 CPF Account Types &nbsp;<span class="badge badge-info"></span>
							</a></li>
							<li class="ptrcursor dropDowntxtshadow"><a class="txtWhite" id="masterContribution"
								onclick="openURLPopup(this,'/MasterCPFContribution.do','Master Contribution Rates')">
									CPF Contribution Rates &nbsp;<span class="badge badge-info"></span>
							</a></li>
							<li class="ptrcursor dropDowntxtshadow"><a class="txtWhite" id="masterRetirement"
								onclick="openURLPopup(this,'/RetirementCPFSum.do','Master CPF Retirement Sum ')">
									CPF Retirement Sum &nbsp;<span class="badge badge-info"></span>
							</a></li>
							<li class="ptrcursor dropDowntxtshadow"><a class="txtWhite" id="masterLifepayout"
								onclick="openURLPopup(this,'/CPFLifePayout.do','CPF Life Pay Out Income for year')">
									CPF Life Pay Out Income &nbsp;<span class="badge badge-info"></span>
							</a></li>
							<li class="ptrcursor dropDowntxtshadow"><a class="txtWhite" id="masterLifepayout"
								onclick="openURLPopup(this,'','Master Current Assumption')">
									 Current Assumption &nbsp;<span class="badge badge-info"></span>
							</a></li>
							
							<li class="divider"></li>
							<li class="ptrcursor dropDowntxtshadow"><a class="txtWhite" id="masterQuotes"
								onclick="openURLPopup(this,'/MasterOuotes.do','Master Quotes')">
									Quotes &nbsp;<span class="badge badge-info"></span>
							</a></li>
						</ul></li> -->
         <!--  <li>
            <a href="#" data-toggle="control-sidebar" style="font-size:140%"> 
            <i class="fa fa-gears"></i>&nbsp;Widgets </a>
          </li> -->
                 
          <li style="padding-left: 1em;float: left;">
          <div class="btnStyle">
			          <button type="button"  id="btnSaveProfile" style="border-radius: 5px;background-color: #ffffff;" class="btn BtnFIPASRCHW StylishSAVE" onclick="fipaSave()">
			          <span class="txt">Save Profile</span>
			      			 <span class="round"><i class="fa fa-floppy-o"></i></span> 
			    		</button>   
				</div>	
		</li>
			    
		<li style="padding-left: 1em;float: left;">
		<div class="btnStyle">
					 <button type="button"  id="btnNewProfile" style="border-radius: 5px;background-color: #ffffff;" class="btn BtnFIPASRCHW StylishSAVE" onclick="fipaNewProfile()">
			      			<span class="txt">New Profile</span>
			      			 <span class="round"><i class="fa fa-file-o"></i></span>
			    		</button>   
					
					</div>
	    </li>
          <!-- User Account: style can be found in dropdown.less -->
           <li class="dropdown user user-menu">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" style="font-size:150%;color:#ffffff">
              <span class="hidden-xs">Hi,${LOGGED_USER_ADVSTFINITIAL}</span> 
              <span class="round"><i class="fa fa-caret-down"></i></span>
            </a>
            <ul class="dropdown-menu">
              <!-- User image -->
              <li class="user-header">
                <img src="plugins/fipa/img/avatar5.png" class="img-circle hidden" alt="User Image">
                <p>
                  ${LOGGED_USER_INFO.LOGGED_USER_ADVSTFNAME} - [${LOGGED_USER_STFTYPE}]                  
                </p>
                <p>
                	Current Login : ${LOGGED_USER_INFO.CURR_LOGIN} 	
                </p>
                <p>
                	Last Login : ${LOGGED_USER_INFO.LAST_LOGIN} 	
                </p>
                
              </li>
              <!-- Menu Body -->
               <li class="user-header">
                <label  data-toggle="modal" data-target=".bs-help-modal-sm" style="color: #ffffff;">
                <a class="btn btn-default addinfoicon" id="logouthelp" data-original-title="" title="" aria-describedby="popover646008"> </a>
                About</label>
              </li>
              <!-- Menu Footer-->
              <li class="user-footer">
                <!-- <div class="pull-left">
                  <a href="#" class="btn btn-default btn-flat">Profile</a>
                </div> -->
                <div class="pull-right" > 
                  <div class="btnStyle">
                  <button type="button"  class="btn BtnFIPACAN StylishCAN" data-toggle="modal" data-target=".bs-logout-modal-sm">
					      <span class="txt">Log out</span>
					      <span class="round"><i class="fa fa-sign-out"></i></span>
					    </button>
                  </div>
                  
<!--                   <a  class="btn btn-default btn-flat btn-class" data-toggle="modal" data-target=".bs-logout-modal-sm"> -->
<!--                   	<i class="fa fa-sign-out btn-class"></i>Log out -->
<!--                   </a> -->
                  
                   
                </div>
              </li>
            </ul>
          </li> 
          <!-- Control Sidebar Toggle Button -->
          
        </ul>
      </div>
    </nav>
  </header>
  
  <div  id="screenTittleDiv" Style="background: #eeeeee;height: 8%;padding-left: 12%;">
     <div class="navbar-custom-menu" >
        <ul class="nav navbar-nav" style="width: 100%;">
        <li style="width: 81%;">
	        <div class=""> 
			<!-- <img src="images/menuicons/goals.png" class="img-rounded" width="40" height="40"> -->
			<span class="navHeaderTitle"  style="line-height: 2;"><!-- <input  name="hTxtTittleName" id="hTxtTittleName" value="Default" /> -->
			<input type="text" name="screentittle" id="screentittle" class="txttitlastupdated" readonly="readonly"></span>
			</div>
			
			<!-- <div class="row">
				<div class="col-md-4">
			  		<div class="btnStyle">
					 <button type="button"  id="btnPrevPge" style="border-radius: 5px;background-color: #243665;" class="btn BtnFIPAPREVS StylishSAVE" onclick="fipaPreview()">
			      			 <input  name="hTxtPreScrName" id="hTxtTittleName" value="Default" />
			      			 <span class="round"><i class="fa fa-caret-left"></i></span>
			      			<span class="txt">Previous</span>
			    		</button>   
					</div>
      			</div>
      			
      			<div class="col-md-4">
      				<div class="btnStyle">
					 <button type="button"  id="btnNxtPge" style="border-radius: 5px;background-color: #243665;" class="btn BtnFIPASRCH StylishSAVE" onclick="fipaNext()">
			      			<span class="round"><i class="fa fa-caret-right"></i></span>
			      			<span class="txt">Next&nbsp;&nbsp;&nbsp;&nbsp;</span>
			    		</button> 
					</div>
      			</div>
			</div> -->
        </li>
          <li id="liprevious">
        <div class="btnStyle">
					 <button type="button"  id="btnPrevPge" style="border-radius: 5px;background-color: #243665;" class="btn BtnFIPAPREVS StylishSAVE" onclick="fipaPreview()">
			      			<!--  <input  name="hTxtPreScrName" id="hTxtTittleName" value="Default" /> -->
			      			 <span class="round"><i class="fa fa-caret-left"></i></span>
			      			<span class="txt">Previous</span>
			    		</button>   
					
					</div>
	    </li> 
	    <li style="padding-left:1em;float: right;width: 10%;">
		<div class="btnStyle">
					 <button type="button"  id="btnNxtPge" style="border-radius: 5px;background-color: #243665;" class="btn BtnFIPASRCHNEXT StylishSAVE" onclick="fipaNext()">
			      			<span class="round"><i class="fa fa-caret-right"></i></span>
			      			<span class="txt">Next&nbsp;&nbsp;&nbsp;&nbsp;</span>
			    		</button>   
					
					</div>
		</li>  
       <!--  <li style="padding-left: 1em;float: right;">
          <div class="btnStyle">
			          <button type="button"  id="btnSaveProfile" style="border-radius: 5px;background-color: #243665;" class="btn BtnFIPASRCH StylishSAVE" onclick="fipaSave()">
			          <span class="txt">Save Profile</span>
			      			 <span class="round"><i class="fa fa-floppy-o"></i></span> 
			    		</button>   
				</div>	
		</li>
			    
		<li style="padding-left: 1em;float: right;">
		<div class="btnStyle">
					 <button type="button"  id="btnNewProfile" style="border-radius: 5px;background-color: #243665;" class="btn BtnFIPASRCH StylishSAVE" onclick="fipaNewProfile()">
			      			<span class="txt">New Profile</span>
			      			 <span class="round"><i class="fa fa-file-o"></i></span>
			    		</button>   
					
					</div>
	    </li> -->
		
          <!-- User Account: style can be found in dropdown.less -->
       <%--  <li class="dropdown user user-menu">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" style="font-size:140%;color:#ffffff;background: #1f665c;">
              <!--  <i class="fa fa-user-circle"></i> -->
              <span class="hidden-xs">Hi,${LOGGED_USER_ADVSTFINITIAL}</span> 
            </a>
            <ul class="dropdown-menu" style="background-color: #23c6c8;">
              <!-- User image -->
              <li class="user-header">
                <img src="plugins/fipa/img/avatar5.png" class="img-circle hidden" alt="User Image">
                <p>
                  ${LOGGED_USER_INFO.LOGGED_USER_ADVSTFNAME} - [${LOGGED_USER_STFTYPE}]                  
                </p>
                <p>
                	Current Login : ${LOGGED_USER_INFO.CURR_LOGIN} 	
                </p>
                <p>
                	Last Login : ${LOGGED_USER_INFO.LAST_LOGIN} 	
                </p>
                
              </li>
              <!-- Menu Body -->
              <!-- Menu Footer-->
              <li class="user-footer">
                <div class="pull-right" > 
                  <div class="btnStyle">
                  <button type="button"  class="btn BtnFIPACAN StylishCAN" data-toggle="modal" data-target=".bs-logout-modal-sm">
					      <span class="txt">Log out</span>
					      <span class="round"><i class="fa fa-sign-out"></i></span>
					    </button>
                  </div> 
                </div>
              </li>
            </ul>
          </li> --%>
          <!-- Control Sidebar Toggle Button -->
        </ul>
      </div> 
    </div>
  <!-- Left side column. contains the logo and sidebar -->
  <aside class="main-sidebar" style="width: 160px;background-color: #1d655cf7;">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">
      <!-- Sidebar user panel -->
     
      <!-- search form -->
     <!--  <form action="#" method="get" class="sidebar-form">
        <div class="input-group">
          <input type="text" name="q" class="form-control" placeholder="Search..." autocomplete="off">
          <span class="input-group-btn">
                <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>
                </button>
              </span>
        </div>
      </form> -->
      <!-- /.search form -->
      
      <!-- sidebar menu: : style can be found in sidebar.less -->
      <ul class="sidebar-menu" data-widget="tree">
        <!-- <li class="header">MAIN NAVIGATION</li>      -->   
        
         <li class="mainmenu active" style="" id="main_menu_pro_scrh">
          <a href="#searchpage" id="search_li" >
            <!-- <i class="fa fa-search" title="Profile Search"></i> --><span id="search_li_title" style="">Profile Search</span> 
            <span class="pull-right-container">
              <small class="label pull-right bg-green"></small>
            </span>
          </a>
        </li>
        <!--  <li class="mainmenu hidden">
          <a href="#profilepage" id="profilelist_li">
            <i class="fa fa-archive" title="Client Profile Archive"></i> <span>Profile</span>
            <span class="pull-right-container">
              <small class="label pull-right bg-green"></small>
            </span>
          </a>
        </li> -->
         <li  class="mainmenu hidden">
          <a href="#typesofappln" id="typesofappln_li" style="display: none">
            <i class="fa fa-check-square-o" title="Types of Application"></i> <span>Types of Application</span>
            <span class="pull-right-container">
              <small class="label pull-right bg-green"></small>
            </span>
          </a>
        </li>
        
       <!--  <li class="treeview mainmenu hidden">
        
           <a id="particulars_li">
            <i class="fa fa-users"></i>
            <span>Particulars</span>
            <span class="pull-right-container">
              <span class="fa fa-angle-left pull-right"></span>
            </span>
          </a>
          <ul class="treeview-menu">
            <li class="submenu"><a href="#particulars" id="clientdets_li"><i class="fa fa-user" title="Client Details"></i> <span>Client</span></a></li>
            <li class="submenu"><a href="#spousediv"  id="spousedets_li"><i class="fa fa-user-plus" title="Spouse Details"></i><span> Spouse</span></a></li>
            <li class="submenu"><a href="#chldpartdiv"  id="childdets_li"><i class="fa fa-child" title="Children Details"></i> <span>Children</span></a></li>
          </ul>
        </li> -->
         <li  class="mainmenu hidden">
          <a href="#particular" id="particular_li">
            <i class="fa fa-users" title="Particular"></i> <span>Particular</span>
            <span class="pull-right-container">
              <small class="label pull-right bg-green"></small>
            </span>
          </a>
        </li>
        
          <li class="hidden mainmenu">
          <a href="#fingoalsdiv" id="fingoals_li">
            <i class="fa fa-life-ring" title="Financial Goals"></i> <span>Financial Goals</span>
            <span class="pull-right-container">
              <small class="label pull-right bg-green"></small>
            </span>
          </a>
        </li> 
      
        <li class="treeview mainmenu hidden">
          <a id="financialinfo_li">
            <i class="fa fa-pie-chart"></i>
            <span>Financial Info</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
          <!--   <li class="submenu"><a href="#fundflowAnnlexp"  id="dependantdets_li"><i class="fa fa-users" title="Dependent Details"></i> <span>Dependant's Info</span></a></li> -->
            <li class="submenu" title="Cash Flow Statement"><a href="#sourceofincome" id="cashflowst_li"><i class="fa fa-money" title="Income & Expenses"></i> <span>Income & Expenses</span></a></li>
            <li class="submenu"><a href="#assetsliabilty" id="assetsliab_li"><i class="fa fa-home" title="Assets & Liabilities"></i> <span>Assets & Liabilities</span></a></li>
            <li class="submenu"><a href="#contingencyplan" id="contigency_li"><i class="fa fa-bed" title="Contigency Plan"></i> <span>Contingency Planning</span></a></li>
            <li class="submenu"><a href="#retireplan" id="retirement_li"><i class="fa fa-blind" title="Retirement Planning, Retirement-Cash Flow Analysis" ></i><span> Retirement Planning</span></a></li>
            <li class="submenu"><a href="#lifeInsurce" id="lifeinsurance_li"><i class="fa fa-umbrella" title="Life Insurance,Plans and Its Coverages"></i><span> Life Insurance</span></a></li>
            <li class="submenu"><a href="#inputinvst" id="investment_li"><i class="fa fa-line-chart" title="Investments, NAV and Dividend Details"></i><span> Investments</span></a></li>
            <li class="submenu"><a href="#property" id="property_li"><i class="fa fa-building-o" title="Properties - Loans, Objectives."></i><span> Properties</span></a></li>
           <!--  <li class="treeview secondlevel">
            	<a id="cashasstmain_li">
	            <i class="fa fa-money"></i>
	            <span>Cash Assets</span>
	            <span class="pull-right-container">
	              <i class="fa fa-angle-left pull-right"></i>
	            </span>
	          </a>          
            <ul class="treeview-menu">
            		<li class="submenu">
            			<a href="#cashofbanks" id="cashatbank_li"><i class="fa fa-university" title="Cash at bank, SRS Details"></i><span> Cash at Bank</span></a>
            		</li>            		
            		<li class="submenu">
            			<a href="#assets" id="cashotherasset_li"><i class="fa fa-car" title="Other Assets - Business, Personal, Vehicle Ownership"></i><span> Cash & Other Assets</span></a>
            		</li>
            	</ul>
            </li> -->
            	
           
            <li class="submenu"><a href="#estateplan" id="estate_li"><i class="fa fa-th-large" title="Estate Plans"></i><span> Estate Planning</span></a></li>
            <li class="submenu"><a href="#centralpro" id="cpf_li"><i class="fa fa-balance-scale" title="Central Provident Fund - Balance, Annaul Contribution and Annaul Addition & Deduction"></i><span> CPF</span> </a></li>
            <li class="submenu"><a href="#srs" id="srssummary_li"><i class="fa fa-shield" title="Investment Summary payment through SRS"></i><span> SRS Summary</span> </a></li>
            <!-- <li class="submenu"><a href="#fnliabilities" id="finliab_li"><i class="fa fa-briefcase" title="Financial Liability"></i><span> Financial Liabilities</span></a></li> -->
            <li class="submenu"><a href="#curAssmpt" id="currassmp_li"><i class="fa fa-key" title="Current Assumption - Inflation rates, Interest rates"></i><span> Current Assumption</span></a></li>
            <li class="submenu"><a href="#othrareaofconcern" id="otherconcern_li"><i class="fa fa-random" title="Other area to concern"></i> <span>Other Area of Concern</span></a></li>
          </ul>
        </li>
        <li  class="mainmenu hidden">
          <a href="#clntreport" id="report_li">
            <i class="fa fa-file" title="Reports - Cash Flow statement, CPF Projection, Net worth Analysis, Survival Analysis etc.,"></i> <span>Analysis Reports</span>
            <span class="pull-right-container">
              <small class="label pull-right bg-green"></small>
            </span>
          </a>
        </li>
        
        <li  class="mainmenu hidden">
          <a href="#attachment" id="upload_li">
            <i class="fa fa-upload" title="File Uploads, downloads"></i> <span>Attachments</span>
            <span class="pull-right-container">
              <small class="label pull-right bg-green"></small>
            </span>
          </a>
        </li>
        
        <li class="treeview hidden ctrldisabled">
          <a href="#">
            <i class="fa fa-user-circle-o "></i>
            <span>eKYC</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <li class="submenu"><a href="#ekyc" onclick="NavigateTOKyc('open');" id="ekycrecomm_li"><i class="fa fa-thumbs-up" title="Advisory Recommendations at FPMS-eKYC"></i><span> Financial Advisory Recommendations</span></a></li>
            <li class="submenu"><a href="#ekyc" onclick="NavigateTOKyc('archive')" id="ekyarchive_li"><i class="fa fa-archive" title="List the archives at FPMS-eKYC"></i><span> Archive</span></a></li>
            <li class="submenu"><a href="#ekyc" onclick="NavigateTOKyc('');" id="ekycnewprofile_li"><i class="fa fa-file-o" title="New FNA at FPMS-eKYC"></i><span> New Profile</span></a></li>
          </ul>
        </li>
        <!-- <li>
          <a href="#">
            <i class="fa fa-list-ul"></i> <span>Summary of Analysis</span>
            <span class="pull-right-container">
              <small class="label pull-right bg-green"></small>
            </span>
          </a>
        </li>
        
         <li>
          <a href="#clientsdeclr">
            <i class="fa fa-list-ul"></i> <span>Declaration</span>
            <span class="pull-right-container">
              <small class="label pull-right bg-green"></small>
            </span>
          </a>
        </li>
        
         <li>
          <a href="#">
            <i class="fa fa-list-ul"></i> <span>Supervisor's Review</span>
            <span class="pull-right-container">
              <small class="label pull-right bg-green"></small>
            </span>
          </a>
        </li> -->
        <!-- <li  class="mainmenu hidden">
          <a href="#htmlreport" id="htmlreport_li">
            <i class="fa fa-file-pdf-o" title="Pdf Reports"></i> <span>Pdf Report</span>
            <span class="pull-right-container">
              <small class="label pull-right bg-green"></small>
            </span>
          </a>
        </li> -->
      </ul>
    </section>
    <!-- /.sidebar -->
  </aside>

  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper" id="contentBody" style="min-height: 100%;width: 92%;margin-left: 160px;">
    <!-- Content Header (Page header) -->
    <section class="content-header" style="background: #eee;height: 18px;">
    
    <ol class="breadcrumb pull-left">
        <!-- <li id="level0"><a href="#"><i class="fa fa-dashboard"></i> FIPA </a></li> -->
       <!--  <li class=""><span id="submenu1"></span></li> -->
       <!--  <li class=""><span id="submenu2"></span></li> -->
      </ol>
      <br/>
     <!-- <h5 id="pagehead1" class="panelHeaderTitle">        
        <small></small>
      </h5>  -->
    <!--   <div class="btnStyle" style="padding-left: 15px;">
			          <button type="button" style="padding: 0px 36px 0px 12px !important;border-radius: 5px;background-color: #1D655C;padding: 7px 36px 8px 12px;" class="btn" >
			      			<span class="txt" style="color:white">Profile Search</span>
			      			<span class="round"><i class="fa fa-floppy-o"></i></span>
			    		</button>  
			    		<button type="button" id="btnarchiveList"style="padding: 0px 70px 0px 12px !important;border-radius: 5px;background-color: #93C3B4;padding: 7px 36px 8px 12px;" class="btn" >
			      			<span class="txt" style="color:white"> Archive </span>
			      			<span class="round"><i class="fa fa-floppy-o"></i></span>
			    		</button>   
	 </div> -->
	
			 
    </section>

    <!-- Main content -->
    <section class="content" style="background: #eee;" id="sectncontent">
    	<form name="fipaForm" id="fipaForm" method="POST"  enctype="multipart/form-data" > 
		<div id="allpages"> 
			<div id="searchpage" class="pagecontent" style="border: none;">
				<jsp:include page="/jsp/fipa/ClientSearch.jsp"></jsp:include>
			</div> 
			<div id="profilepage" class="pagecontent">
				<%-- <jsp:include page="/jsp/fipa/profile.jsp"></jsp:include> --%>
			</div> 			
			<div id="typesofappln" class="pagecontent autosavetrigger custom-pagecontent"  data-desc="CLIENTFLG">
			 <jsp:include page="/jsp/fipa/typesOfAppln.jsp"></jsp:include>
			</div>
			<div id="particular" class="pagecontent autosavetrigger" data-desc="CLIENTFLG">
			 <jsp:include page="/jsp/fipa/particular.jsp"></jsp:include>
			 <div style="display:none"> <jsp:include page="/jsp/fipa/childparticulars.jsp"></jsp:include></div>
			</div>
			<%-- <div id="particulars" class="pagecontent autosavetrigger" data-desc="CLIENTFLG">
			 <jsp:include page="/jsp/fipa/clientdetails.jsp"></jsp:include>
			</div> --%>
			<%-- <div id="spousediv" class="pagecontent autosavetrigger" data-desc="CLIENTFLG">
			 <jsp:include page="/jsp/fipa/spousedetails.jsp"></jsp:include>
			</div> --%>
			<%-- <div id="chldpartdiv" class="pagecontent autosavetrigger" data-desc="CHILDFLG">
			 <jsp:include page="/jsp/fipa/childparticulars.jsp"></jsp:include>
			</div> --%>
			<div id="fingoalsdiv" class="pagecontent autosavetrigger" data-desc="FINGOAL">
			 <jsp:include page="/jsp/fipa/fingoals.jsp"></jsp:include>
			</div> 
			<div id="fnliabilities" class="pagecontent autosavetrigger" data-desc="FINLIAB">
				<jsp:include page="/jsp/fipa/finliabilities.jsp"></jsp:include>
			</div>
			<div id="property" class="pagecontent autosavetrigger" data-desc="PROPERTY">
				<jsp:include page="/jsp/fipa/properties.jsp"></jsp:include>
			</div>
			 <div id="fundflowAnnlexp" class="pagecontent autosavetrigger" data-desc="CASHFLOW">
			<div style="display:none">	<jsp:include page="/jsp/fipa/FundFlowAnnlExp.jsp"></jsp:include></div>
			</div> 
			<div id="sourceofincome" class="pagecontent autosavetrigger" data-desc="SRCOFINCOME">
				<jsp:include page="/jsp/fipa/SourceOfInc.jsp"></jsp:include>
			</div> 
			<div id="assetsliabilty" class="pagecontent autosavetrigger" >
				<jsp:include page="/jsp/fipa/Assetsliabilty.jsp"></jsp:include>
			</div> 
			<div id="lifeInsurce" class="pagecontent autosavetrigger" data-desc="LIFEINSURANCE">
				<jsp:include page="/jsp/fipa/LifeInsc.jsp"></jsp:include>
			</div> 
			<div id="inputinvst" class="pagecontent autosavetrigger" data-desc="INVESTMENT">
				<jsp:include page="/jsp/fipa/investment.jsp"></jsp:include>
			</div>
			<div id="contingencyplan" class="pagecontent autosavetrigger" data-desc="CONTIGENCY">
				<jsp:include page="/jsp/fipa/contigencyPlan.jsp"></jsp:include>
			</div>
			<div id="estateplan" class="pagecontent autosavetrigger" data-desc="ESTATEPLAN">
				<jsp:include page="/jsp/fipa/estatePlanning.jsp"></jsp:include>
			</div>
			<div id="centralpro" class="pagecontent autosavetrigger" data-desc="CPF">
				<jsp:include page="/jsp/fipa/centralprovident.jsp"></jsp:include>
			</div> 
			<div id="srs" class="pagecontent autosavetrigger" data-desc="SRS">
				<jsp:include page="/jsp/fipa/srs.jsp"></jsp:include>
			</div> 
			<div id="curAssmpt" class="pagecontent autosavetrigger" data-desc="CURRASSUMP">
				<jsp:include page="/jsp/fipa/currentasmption.jsp"></jsp:include>
			</div>
			<div id="retireplan" class="pagecontent autosavetrigger" data-desc="RETIREMENT">
				<jsp:include page="/jsp/fipa/retirementplan.jsp"></jsp:include>
			</div>  
<!-- 			<div id="retirecashflow" class="pagecontent"> -->
<%-- 				<jsp:include page="/jsp/fipa/retirecashflw.jsp"></jsp:include> --%>
<!-- 			</div>  -->
			<div id="assets" class="pagecontent autosavetrigger" data-desc="ASSETS"> 
				<jsp:include page="/jsp/fipa/assets.jsp"></jsp:include>
			</div>
			<div id="cashofbanks" class="pagecontent autosavetrigger" data-desc="CASHATBANK">
				<jsp:include page="/jsp/fipa/cashofbanks.jsp"></jsp:include>
			</div>
			<div id="othrareaofconcern" class="pagecontent autosavetrigger" data-desc="OTHAREA">
				<jsp:include page="/jsp/fipa/areaofconcern.jsp"></jsp:include>
			</div>
			<div id="ekyc" class="pagecontent">
				<jsp:include page="/jsp/fipa/eKYC.jsp"></jsp:include>
			</div>
			<div id="clntreport" class="pagecontent autosavetrigger">
				<jsp:include page="/jsp/fipa/report.jsp"></jsp:include>
			</div>
			<div id="clientsdeclr" class="pagecontent">
				<jsp:include page="/jsp/fipa/clientsdecl.jsp"></jsp:include>
			</div>
			<div id="attachment" class="pagecontent">
				<jsp:include page="/jsp/fipa/attachments.jsp"></jsp:include>
			</div>
			<div id="adrecom" class="pagecontent">
				<jsp:include page="/jsp/fipa/advicerecom.jsp"></jsp:include>
			</div>
			<div id="switchrep" class="pagecontent">
				<jsp:include page="/jsp/fipa/switchingreplace.jsp"></jsp:include>
			</div>       
			<div id="reasons" class="pagecontent">
				<jsp:include page="/jsp/fipa/reasonsrecom.jsp"></jsp:include>
			</div>
			<div id="Invstobj" class="pagecontent">
				<jsp:include page="/jsp/fipa/investmentobj.jsp"></jsp:include>
			</div>
			<div id="decbycli" class="pagecontent">
				<jsp:include page="/jsp/fipa/decbyclient.jsp"></jsp:include>
			</div> 
			<div id="suprvsr" class="pagecontent">
				<jsp:include page="/jsp/fipa/supreview.jsp"></jsp:include>
			</div> 
			<div id="summary" class="pagecontent">
				<jsp:include page="/jsp/fipa/summary.jsp"></jsp:include>
			</div>
		  
		</div>
		
<%-- 		End of form element --%> 

<!-- <input type="hidden" name="txtFldCustomerId" id="txtFldCustomerId"/> -->

<input type="hidden" name="fnaId" id="fnaId" class="formHiddenIds"/>
<input type="hidden" name="dfCreatedBy" id="dfCreatedBy" class="formHiddenIds"/>
<input type="hidden" name="dfCreatedDate" id="dfCreatedDate" class="formHiddenIds"/>
<input type="hidden" name="dfCreatedDatetime" id="dfCreatedDatetime" class="formHiddenIds"/>

<input type="hidden" name="advDecId" id="advDecId" class="formHiddenIds"/>  
<input type="hidden" name="advDecCrtdBy" id="advDecCrtdBy" class="formHiddenIds"/>
<input type="hidden" name="advDecCrtdDate" id="advDecCrtdDate" class="formHiddenIds"/>

<input type="hidden" name="expdId" class="formHiddenIds"/>	
<input type="hidden" name="expdCreatedBy" class="formHiddenIds"/>	
<input type="hidden" name="expdCreatedDate" class="formHiddenIds"/>	

<input type="hidden" name="conId" class="formHiddenIds"/>
<input type="hidden" name="contCrtdBy" class="formHiddenIds"/>
<input type="hidden" name="contCrtdDate" class="formHiddenIds"/>

<input type="hidden" name="persprioId" id="persprioId" class="formHiddenIds"/> 
<input type="hidden" name="ppCreatedBy" class="formHiddenIds"/>
<input type="hidden" name="ppCreatedDate" class="formHiddenIds"/>

<input type="hidden" name="incsrcId" id="incsrcId" class="formHiddenIds"/>

<input type="hidden" name="liabId" id="liabId" class="formHiddenIds"/>

<input type="hidden" name="retId" id="retId" class="formHiddenIds"/>

<input type="hidden" name="invstId" id="invstId" class="formHiddenIds"/>

<input type="hidden" name="casstId" id="casstId" class="formHiddenIds"/>

<input type="hidden" name="othId" id="othId" class="formHiddenIds"/>	 

<input type="hidden" name="riskId" id="riskId" class="formHiddenIds"/>  

<input type="hidden" name="saId" id="saId" class="formHiddenIds"/>
 
<input type="hidden" name="appTypeid" id="appTypeid" class="formHiddenIds"/>
<input type="hidden" name="anaPkid" id="anaPkid" class="formHiddenIds"/>
<input type="hidden" name="caId" id="caId" class="formHiddenIds"/>   
<input type="hidden" name="cpfId" id="cpfId" class="formHiddenIds"/>
 
<!-- <input type="hidden" name="lipId" id="lipId" class="formHiddenIds"/>  -->
<input type="hidden" name="lipId" id="lipId" class=""/> 
<input type="hidden" name="lipAppId" id="lipAppId" class="formHiddenIds"/> 
<input type="hidden" name="coverId" id="coverId" class="formHiddenIds"/>
<input type="hidden" name="custId" id="custId" class="formHiddenIds"/>
<input type="hidden" id="hTxtFldFnaReviewFlag" name="hTxtFldFnaReviewFlag"/>	
<input type="hidden" name="token" id="token" value="${token}"/>
<input type="hidden" name="hTxtMenuName" id="hTxtMenuName" value="Default" />
<input type="hidden" name="hTxtTittleName" id="hTxtTittleName" value="Default" />
<input type="hidden" name="hTxtFldProfileColor" id="hTxtFldProfileColor" value=""/>
<input type="hidden" name="hTxtFldDefaultColorFlag" id="hTxtFldDefaultColorFlag"/>  
<!-- Aravindh -->
<input type="hidden" name="hTxtFldProfileNAVColor" id="hTxtFldProfileNAVColor" value=""/> 
<input type="hidden" name="hTxtFldProfileSideMenuColor" id="hTxtFldProfileSideMenuColor" value=""/> 
<input type="hidden" name="hTxtFldProfileMenuColor" id="hTxtFldProfileMenuColor" value=""/> 
<input type="hidden" name="hTxtFldProfileSubMenuColor" id="hTxtFldProfileSubMenuColor" value=""/> 
<input type="hidden" name="hTxtFldProfileTblheaderColor" id="hTxtFldProfileTblheaderColor" value=""/> 
<input type="hidden" name="hTxtFldProfileBdyDivColor" id="hTxtFldProfileBdyDivColor" value=""/> 
<!-- Logged User Details -->  
</form> 

<input type="hidden" id="hTblSelectedRow" />
<input type="hidden" id="hTxtFldLoggedStfType" value="${LOGGED_USER_STFTYPE}" />
<input type="hidden" id="hTxtFldLoggedAdvStfId" value="${LOGGED_ADVSTFID}" />
<input type="hidden" id="hTxtFldLoggedUserMgrFlg" value="${LOGGED_USER_MGRFLAG}" />
<input type="hidden" id="hTxtFldLoggedUserID" value="${LOGGED_USER_ID}" />
<input type="hidden" id="hTxtScreenName" value="${screenname}"/>	
<input type="hidden" id="hTxtFldLoggedUserDesig" value="${LOGGED_DESIGNATION}"/>
<input type="hidden" id="hTxtFldDistId" value="${DIST_ID}"/>
<input type="hidden" id="hTxtFldDistName" value="${DIST_NAME}"/>
<input type="hidden" id="hTxtFldAdvStfName" value="${LOGGED_ADVSTFNAME}"/>
<input type="hidden" id="hTxtFldSysDate" value="${LOGGED_SYSDATE}"/>
<input type="hidden" id="ProfileOpenFlag" value="N">
<input type="hidden" id="openEkycType" >
<input type="hidden" id="openURLvalue" />
<input type="hidden" name="txtFldClientNric" id="txtFldClientNric"/>
<input type="hidden" name="txtFldClientsName" id="txtFldClientsName"/>
    	
    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->
  <footer class="main-footer text-center">
    <div class="pull-right hidden-xs">
      <b>Ver :</b> UAT - 20.12.2
    </div>
    <strong> Business system developed and maintained by Avallis Financial Pte
				Ltd (Singapore). All rights reserved 
	</strong>
  </footer>

  <!-- Control Sidebar -->
  <aside class="control-sidebar control-sidebar-light">
    <!-- Create the tabs -->
    <ul class="nav nav-tabs nav-justified control-sidebar-tabs">
      <li><a href="#control-sidebar-settings-tab" class="text-left" data-toggle="tab" style="color: #fff !important;
    background: #26c3c5;"><img src="images/gears.gif" width="20px">Widgets</a></li>
    </ul>
    <!-- Tab panes -->
    <div class="tab-content active">
   
      <!-- Settings tab content -->
      <div class="tab-pane active" id="control-sidebar-settings-tab">
        
        <ul class="">
		  
		  <!--  
		    <li class="colorChangeLI"><a><h5><i class="fa fa-star-o"></i>Top &amp; Sidebar Colours:</h5></a> </li>
		    <li class="colorChangeLI"  id="color1"><a href="#"><span  class="btn btn-orange btn-circle"></span></a></li>
			<li class="colorChangeLI" id="color2" ><a href="#"><span class="btn btn-violet btn-circle"></span></a></li>
			<li class="colorChangeLI" id="color3"><a href="#"><span  class="btn btn-dblue btn-circle"></span></a></li>
			<li class="colorChangeLI" id="color3a"><a href="#"><span  class="btn btn-vblue btn-circle"></span></a></li>
		    <li class="colorChangeLI"><button type="button" class="btn btn-info" id="showpicker" >Pick a Color</button></li>
		    
		    -->
		    
		     <!-- data-toggle="modal" data-target="#colorPickerModal" -->
		    	
		    	
		   
		    <li class="divider"><hr/></li>
		    
		    <li><a><h5><i class="fa fa-question-circle-o"></i> Help Document:</h5></a> </li>
		    	
		    <li><a href="docs/FIPA_Screen Process Flow.pdf" target="_new"><i class="fa fa-file-pdf-o"></i>&nbsp;FIPA Process Flow</a></li>
		    <li><a href="docs/FIPA_UserDocument_Aug2019.pdf" target="_new"><i class="fa fa-file-pdf-o"></i>&nbsp;FIPA User Document</a></li>
		    
		    
		     <li class="divider"><hr/></li>
		     
		     
		     <li onclick="fipaCalendarElInit()" style="cursor:pointer;"><a><h5><i class="fa fa-calendar-check-o"></i> Calendar </h5></a></li>
		   
		     <li class="divider"><hr/></li>
		    
		    <!-- <li><a> Body Colour:</a></li>
		    <li id="color4"><a href="#"><span  class="btn btn-elepaht btn-circle"></span></a></li>
		    <li id="color5"><a href="#"><span class="btn btn-rose btn-circle"></span></a></li>
		    <li id="color6"><a href="#"><span class="btn btn-cyan btn-circle"></span></a></li>
		    <li id="color6a"><a href="#"><span class="btn btn-info btn-circle"></span></a></li>
		    <li class="divider"><hr/></li> -->
    		<!-- <li>
    			<a href="#">Sidebar Mini<span class="badge badge-darkgrn"></span></a>
    			<div class="checkbox">
				  <label>
				    <input type="checkbox" data-toggle="toggle" id="sidemini">
				  </label>
				</div>
    		</li>
    		
    		<li class="divider"><hr/></li> -->

  			<!-- <li><a href="#">Toggle Menu<span class="badge badge-darkgrn"></span></a>
	  			<div class="checkbox" id="btnToggle">
				    <label>				    
				    	<input type="checkbox" class="sidebar-toggle" data-toggle="push-menu" role="button" >
				    </label>
			    </div>  			
  			</li> -->	
  			
  			<!-- <li class="divider"><hr/></li>
    		<li><a href="#">Sidebar Filters<span class="badge badge-darkgrn"></span></a></li> 
    		<li id="color7"><a href="#"><span  class="btn btn-primary btn-circle"></span></a></li>
    		<li id="color8"><a href="#"><span  class="btn btn-success btn-circle"></span></a></li>
     		<li id="color10"><a href="#"><span  class="btn btn-pale btn-circle"></span></a></li> -->
    
  		</ul>
        
        
      </div>
      <!-- /.tab-pane -->
    </div>
  </aside>
  <!-- /.control-sidebar -->
  <!-- Add the sidebar's background. This div must be placed
       immediately after the control sidebar -->
  <div class="control-sidebar-bg"></div>
</div>
<!-- ./wrapper -->

 <!-- MASTER URL POP UP  -->
<div class="modal   fade"  id="openURL_Dialog" style="display: none;margin-top:-30px ;padding-left: 19px;"  tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog scrollModelBodyWidth1300" role="document" >
    <div class="modal-content">
      <div class="modal-header"> 
      <div class="col-md-3">
       <h4 class="modal-title" id="myModalLabel"></h4> 
        </div>
      <div class="col-md-9 text-right"> 
<!-- 		  <button type="button" class="btn btn-primary">Close</button>  -->
		  <div class="btnStyle">
		  <button type="button"  class="btn BtnFIPACAN StylishCAN" >
					      <span class="txt">Close</span>
					      <span class="round"><i class="fa fa-times"></i></span>
					    </button>
		</div></div>
        
        
        
        
        
      </div>
      <div class="modal-body" id="cloneURLId"  style="height:70vh">  
      </div>
<!--       <div class="modal-footer text-center">  -->
<!--         <button type="button" class="btn btn-primary">Ok</button>  -->
<!--       </div> -->
    </div>
  </div>
</div>
<div class="modal bs-logout-modal-sm" tabindex="-1" role="dialog" aria-hidden="true">
  <div class="modal-dialog modal-sm">
    <div class="modal-content">
      <div class="modal-header"><h4 style="color: white;">Logout <i class="fa fa-lock"></i></h4></div>
      <div class="modal-body"><i class="fa fa-question-circle"></i> Are you sure you want to logout?</div>
      <div class="modal-footer">
      <a onclick="logout()" id="btnLogout" class="btn btn-info btn-block">Logout</a>
      </div>
    </div>
  </div>
</div>

<div class="modal bs-help-modal-sm" tabindex="-1" role="dialog" aria-hidden="true">
  <div class="modal-dialog modal-fluid">
    <div class="modal-content">
     <!--  <div class="modal-header"><h4>FIPA Help <i class="fa fa-info-circle"></i></h4></div> -->
      <div class="modal-body" style="background-color: #243665;color: white;"><i class="fa fa-copyright"></i> Business system developed and maintained by Avallis Financial Pte Ltd (Singapore). All rights reserved
       <h4 style="text-align-last: center;"> Ver : UAT - 21.03.2</h4>
      </div>
      <div class="modal-footer" style="background: #eeeeee;">  
        <div class="btnStyle">
        <button type="button"  class="btn BtnFIPASRCH StylishSRCH" data-dismiss="modal">
					      <span class="txt">Ok</span>
					      <span class="round"><i class="fa fa-check"></i></span>
					    </button>
					    </div>
		   
      </div>
    </div>
  </div>
</div>

<div class="modal bs-nricbased-modal-sm" tabindex="-1" role="dialog" aria-hidden="true">
  <div class="modal-dialog modal-sm">
    <div class="modal-content">
      <div class="modal-header"><h4>NRIC based Search <i class="fa fa-search"></i></h4></div>
      <div class="modal-body">
      
			<div class="form-group">
			<div class="row">			
		           <div class="col-md-12"> 
		                  <input id="fipaSrchNRICDlg" class="form-control" name="fipaSrchNRICDlg" placeholder="NRIC/FIN/PASSPORT"
		                      style="border:none;border-bottom:1px solid;background:transparent" type="text" maxlength="75"  autofocus="true" /> 
		            </div>
		            </div>
		      </div>
      	
      
      </div>
      <div class="modal-footer">
      	<a onclick="chkNRICLookup()" id="btnNRICLookup" class="btn btn-primary">Search</a>
       <button type="button" onclick="ignoreNRICLookUp()" id="btnNRICIgnore"  class="btn btn-primary" >Go to New Client Profile</button> 
      </div>
    </div>
  </div>
</div>

<div class="modal fade"  id="alertmsgdiv" style="display: none;z-index:10000" tabindex="-1" role="dialog" aria-labelledby="gridSystemModalLabel">
  <div class="modal-dialog alertModelContent modal-sm" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="gridSystemModalLabel"></h4>
      </div>
      <div class="modal-body" style="text-align: center;">
      <div id="alertimg" style="display: inline;"></div>
      <div id="alertmsg"  style="display: inline-block;"></div> 
      </div>
       <div class="modal-footer">  
        <div class="btnStyle"><button type="button"  class="btn BtnFIPASRCH StylishSRCH" >
					      <span class="txt">Ok</span>
					      <span class="round"><i class="fa fa-check"></i></span>
					    </button>
					    </div>
		   
      </div>
      </div>
      </div>
      </div> 
	
<!-- 	for master screen - popover -->
		<div class="modal fade"  id="dummydiv" style="display: none;z-index:10000" tabindex="-1" role="dialog" aria-labelledby="gridSystemModalLabel">
		</div>
		
<!-- mandatoryDlgs -->
<div class="modal fade"  id="retmandatoryDialog" style="display: none;    margin:5px;" tabindex="-1" role="dialog" aria-labelledby="gridSystemModalLabel">
  <div class="modal-dialog modal-sm" role="document" style=" max-width: 96%; width: 100%;">
    <div class="modal-content">
      <div class="modal-header">  
        <h4 class="modal-title" id="gridSystemModalLabel"></h4>
      </div>
      <div class="modal-body">
			<fieldset class="fieldsetClsborder scrollModelBody60">
     <div class="col-md-12" >
     <div id="RET_APD1" style="min-width: 750px;width:100%"> 
			<div id="cloneModel"> 
			</div>
			</div>
			</div>
			</fieldset>
			
			</div>
      <div class="modal-footer">  
        <div class="btnStyle"><button type="button"  class="btn BtnFIPASRCH StylishSRCH" >
					      <span class="txt">Ok</span>
					      <span class="round"><i class="fa fa-check"></i></span>
					    </button>
					    <button type="button"  class="btn BtnFIPACAN StylishCAN"   data-dismiss="modal">
					      <span class="txt">Cancel</span>
					      <span class="round"><i class="fa fa-times"></i></span>
					    </button></div>
		   
      </div>
      </div>
      </div>
      </div>
       
	  

<div class="modal fade"  id="ClearFieldAlertDialog" style="display: none;" 
tabindex="-1" role="dialog" aria-labelledby="gridSystemModalLabel">
  <div class="modal-dialog alertModelContent modal-sm" role="document">
    <div class="modal-content">
      <div class="modal-header">  
        <h4 class="modal-title" id="gridSystemModalLabel"></h4>
      </div>
      <div class="modal-body" style="text-align: center;">
      <div id="confalertimg" style="display: inline;"></div>
      <div id="confalertmsg"  style="display: inline-block;"></div> 
      </div>
       <div class="modal-footer">  
        <div class="btnStyle"><button type="button"  class="btn BtnFIPASRCH StylishSRCH" >
					      <span class="txt">Proceed</span>
					      <span class="round"><i class="fa fa-check"></i></span>
					    </button>
					    <button type="button"  class="btn BtnFIPACAN StylishCAN"   data-dismiss="modal">
					      <span class="txt">Close</span>
					      <span class="round"><i class="fa fa-times"></i></span>
					    </button></div>
		   
      </div>
      </div>
      </div>
      </div>

<div class="modal fade"  id="confirmationalertmsgdiv" style="display: none;z-index:1070" 
tabindex="-1" role="dialog" aria-labelledby="gridSystemModalLabel">
  <div class="modal-dialog alertModelContent modal-sm" role="document">
    <div class="modal-content">
      <div class="modal-header">  
        <h4 class="modal-title" id="gridSystemModalLabel"></h4>
      </div>
      <div class="modal-body" style="text-align: center;">
      <div id="confalertimg" style="display: inline;"></div>
      <div id="confalertmsg"  style="display: inline-block;"></div> 
      </div>
      <div class="modal-footer">  
        <div class="btnStyle"><button type="button"  class="btn BtnFIPASRCH StylishSRCH" >
					      <span class="txt">Ok</span>
					      <span class="round"><i class="fa fa-check"></i></span>
					    </button>
					    <button type="button"  class="btn BtnFIPACAN StylishCAN"   data-dismiss="modal">
					      <span class="txt">Cancel</span>
					      <span class="round"><i class="fa fa-times"></i></span>
					    </button></div>
		   
      </div>
      </div>
      </div>
      </div>
      <div class="modal fade"  id="manconfirmationalertmsgdiv" style="display: none;z-index:1070" 
tabindex="-1" role="dialog" aria-labelledby="gridSystemModalLabel">
  <div class="modal-dialog alertModelContent modal-sm" role="document">
    <div class="modal-content">
      <div class="modal-header">  
        <h4 class="modal-title" id="gridSystemModalLabel"></h4>
      </div>
      <div class="modal-body" style="text-align: center;">
      <div id="manconfalertimg" style="display: inline;"></div>
      <div id="manconfalertmsg"  style="display: inline-block;"></div> 
      </div>
      <div class="modal-footer">  
        <div class="btnStyle"><button type="button"  class="btn BtnFIPASRCH StylishSRCH" >
					      <span class="txt">Ok</span>
					      <span class="round"><i class="fa fa-check"></i></span>
					    </button>
					    <button type="button"  class="btn BtnFIPACAN StylishCAN"   data-dismiss="modal">
					      <span class="txt">Cancel</span>
					      <span class="round"><i class="fa fa-times"></i></span>
					    </button></div>
		   
      </div>
      </div>
      </div>
      </div>
     <!--  <div class="modal fade"  id="confirmalertmsgdiv" style="display: none;z-index:1070" 
tabindex="-1" role="dialog" aria-labelledby="gridSystemModalLabel">
  <div class="modal-dialog alertModelContent modal-sm" role="document">
    <div class="modal-content">
      <div class="modal-header">  
        <h4 class="modal-title" id="gridSystemModalLabel"></h4>
      </div>
      <div class="modal-body" style="text-align: center;">
      <div id="confmalertimg" style="display: inline;"></div>
      <div id="confmalertmsg"  style="display: inline-block;"></div> 
      </div>
      <div class="modal-footer">  
        <div class="btnStyle"><button type="button"  class="btn BtnFIPASRCH StylishSRCH" >
     				      <span class="txt">Yes</span>
					      <span class="round"><i class="fa fa-check"></i></span>
					      </button>
					     <button type="button"  class="btn BtnFIPACAN StylishCAN"   data-dismiss="modal">
					      <span class="txt">No</span>
					      <span class="round"><i class="fa fa-times"></i></span>
					     </button>
	   </div>
		   
      </div>
      </div>
      </div>
      </div> -->
      
      <div class="modal fade" id="calendarEl_Dialog" style="display: none"  tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog scrollModelBodyWidth1300" role="document">
    <div class="modal-content">    
    <div class="modal-header"> 
        <div class="col-md-4">
        	<h4 class="modal-title" id="gridSystemModalLabel"><span class="fa fa-calendar-check-o"></span>&nbsp;Calendar</h4>
        </div> 
        
        <div class="col-md-8 text-right">  
		  <a class="btn btn-primary" data-dismiss="modal" aria-label="Close">Close Calendar</a> 
		</div>
        </div>
        
        <div class="modal-body" style="background-color:#E4F1F5">  
   <!--######################## Section 1 ########################-->
   
		   <fieldset class="fieldsetClsborder">  
		   <div class="col-md-12">
		    <div class="row vertical-divider">
		    
		   <div class="col-md-3 bg-white" style="height: 90vh;"> 
		<!--    <div class="row">
                    <label class="control-label  mandFldastrks">
            			<small>Note: Select any profile*</small> 
            	    </label> </div>  -->
            	    
           <div class="row"> 	    
            	    <fieldset class="fieldsetClsborder">
		<legend class="customFIPAStyle"> EVENT INDICATION</legend> 
	 
			<div class="col-sm-1">
				<div class="policy_inforcedClass"></div>
			</div>
			<div class="">&nbsp;&nbsp;FPMS POLICY RENEWALS</div>
			<br>
			
<!-- 			<div class="col-sm-1"> -->
<!-- 				<div class="fipa_evntClass"></div> -->
<!-- 			</div> -->
<!-- 			<div class="">&nbsp;&nbsp;FIPA POLICY RENEWALS</div> -->
			
			  
		</fieldset> </div>
		
		
		   </div>  
		   
		   
		   <div class="col-md-9">
		    <div id='calendar'></div>
		   </div>
		   </div>
		   </div>
		   
		   
                  
		    </fieldset>	
		    <!--############################################--> 
    </div>
        
        
        </div>
        </div>
        </div>
        
        
        
          <!--  Color Picker Modal -->
  <div class="modal fade" id="colorPickerModal" role="dialog" style="display: none;">
    <div class="modal-dialog">
    
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
         <!--  <button type="button" class="close" data-dismiss="modal">&times;</button> -->
          <h4 class="modal-title"> Color Palette</h4>
          
        </div>
        <div class="modal-body">
          <div class="row">
          	<h4><span>Make the selected Colour as Default to All : <input type="checkbox" id="chkDefaultColors" name="chkDefaultColors"/></span>
          	</h4>
          </div> 
           
		    <div>
			  <a class="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample" style="width: 560px;text-align-last: left;">
			   Topbar Colour:<span class="pull-right"><input style="background: transparent;border:none" type="text" readonly="true" id="colorTop"/></span>
			  </a>
		   </div>
			<div class="collapse" id="collapseExample">
			  <div class="card card-body">
			   <div id="colorWheel"> </div>
			  </div>
			</div>
				
			<div>
			  <a class="btn btn-primary" data-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample" style="width: 560px;text-align-last: left;">
			   Sidebar Colour:<span class="pull-right"><input style="background: transparent;border:none" type="text" readonly="true" id="colorSideMenu"/></span>
			  </a>
		   </div>
			<div class="collapse" id="collapseExample1">
			  <div class="card card-body">
			   <div id="colorWheel1"> </div>
			  </div>
			</div>
				
			<div>
			  <a class="btn btn-primary" data-toggle="collapse" href="#collapseExample5" role="button" aria-expanded="false" aria-controls="collapseExample" style="width: 560px;text-align-last: left;">
			   Menubar(Selected Menu Item) Colour:<span class="pull-right" ><input style="background: transparent;border:none" type="text" readonly="true" id="colorSelMenuItem"/></span>
			  </a>
		   </div>
			<div class="collapse" id="collapseExample5">
			  <div class="card card-body">
			   <div id="colorWheel5"> </div>
			  </div>
			</div>
			
			<div>
			  <a class="btn btn-primary" data-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample" style="width: 560px;text-align-last: left;">
			   Blow Up(SubMenu) Colour:<span class="pull-right"><input style="background: transparent;border:none" type="text" readonly="true" id="colorSubMenu"/></span>
			  </a>
		   </div>
			<div class="collapse" id="collapseExample2">
			  <div class="card card-body">
			   <div id="colorWheel2"> </div>
			  </div>
			</div>
			
			<div>
			  <a class="btn btn-primary" data-toggle="collapse" href="#collapseExample3" role="button" aria-expanded="false" aria-controls="collapseExample" style="width: 560px;text-align-last: left;">
			   Table Header Colour:<span class="pull-right"><input style="background: transparent;border:none" type="text" readonly="true" id="colorTableHeader"/></span>
			  </a>
		   </div>
			<div class="collapse" id="collapseExample3">
			  <div class="card card-body">
			   <div id="colorWheel3"> </div>
			  </div>
			</div>
			
			<div>
			  <a class="btn btn-primary" data-toggle="collapse" href="#collapseExample4" role="button" aria-expanded="false" aria-controls="collapseExample" style="width: 560px;text-align-last: left;">
			   Body(Content) Background Colour:<span class="pull-right"><input style="background: transparent;border:none" type="text" readonly="true" id="colorBody"/></span>
			  </a>
		   </div>
			<div class="collapse" id="collapseExample4">
			  <div class="card card-body">
			   <div id="colorWheel4"> </div>
			  </div>
			</div>
			
			<div>
			  <a class="btn btn-primary" data-toggle="collapse" href="#collapseExample6" role="button" aria-expanded="false" aria-controls="collapseExample" style="width: 560px;text-align-last: left;">
			   Report main header Colour:<span class="pull-right"><input style="background: transparent;border:none" type="text" readonly="true" id="colorReportMainHead"/></span>
			  </a>
		   </div>
			<div class="collapse" id="collapseExample6">
			  <div class="card card-body">
			   <div id="colorWheel6"> </div>
			  </div>
			</div>
			
			<div>
			  <a class="btn btn-primary" data-toggle="collapse" href="#collapseExample7" role="button" aria-expanded="false" aria-controls="collapseExample" style="width: 560px;text-align-last: left;">
			   Report sub header Colour:<span class="pull-right"><input style="background: transparent;border:none" type="text" readonly="true" id="colorReportSubHead"/></span>
			  </a>
		   </div>
			<div class="collapse" id="collapseExample7">
			  <div class="card card-body">
			   <div id="colorWheel7"> </div>
			  </div>
			</div>
        </div>
         
        <div class="modal-footer">  
        <div class="btnStyle"><button type="button"  id="clsmodal" class="btn BtnFIPASRCH StylishSRCH" data-dismiss="modal">
					      <span class="txt">Ok</span>
					      <span class="round"><i class="fa fa-check"></i></span>
					    </button>
					     </div>
		   
      </div>
      </div>
      
    </div>
  </div>
  
  
     
<!-- #######################################of RP CF Analysis Dialog Box########################################################## -->      
     
      
   <div class="modal modal-fullscreen fade" id="rpCashFlwAnlys_Dialog" style="margin:10px;"  tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
    
    <div class="modal-header">
        
        <div class="col-md-3">
        	<h4 class="modal-title" id="gridSystemModalLabel"><img src="images/menuicons/retPln.png" style="height: 50px;"/>&nbsp;Retirement Cash Flow Analysis</h4>
        </div>
        
        <div class="col-md-6" style="color: white !important;">
        	<div class="row">
        	   <div class="col-md-3 col-sm-3 col-xs-3">
            		<label class="control-label pull-right text-right">Client's Name&nbsp;</label>
				</div>
           		<div class="col-md-3 col-sm-9 col-xs-9">  
           			<span  id="txtFldRDClientName" class="control-label pull-left"  style="font-weight: bold;"></span> 
			 	</div>
			 	
			 	<div class="col-md-3 col-sm-3 col-xs-3">
            		<label class="control-label pull-right text-right">Spouse's Name&nbsp;</label>
				</div>
           		<div class="col-md-3 col-sm-9 col-xs-9">  
           			<span  id="txtFldRDSpouseName" class="control-label pull-left" style="font-weight: bold;"></span> 
			 	</div>
			
        	</div>
        	<div class="row">
        		 <div class="col-md-3 col-sm-3 col-xs-3">
            		<label class="control-label pull-right text-right">	Age &nbsp; </label>
			 	</div>
			 	<div class="col-md-3 col-sm-3 col-xs-3">
            		<span  id="txtFldRDClientAge" class="control-label pull-left" style="font-weight: bold;"></span>								
            	</div>
            	
            	<div class="col-md-3 col-sm-3 col-xs-3">
            		<label class="control-label pull-right text-right">	Age &nbsp; </label>
			 	</div>
			 	<div class="col-md-3 col-sm-3 col-xs-3">
            		<span  id="txtFldRDSpouseAge" class="control-label pull-left"
            		 style="font-weight: bold;"></span>								
            	</div>
            	        	
        	</div>
				
            	
			 	
   		</div>
        
        <div class="col-md-2 text-right">
		  <a class="btn pdf-icon" id="btnRetPrint"></a>   
		  <a class="btn btn-default reset-icon hidden" id="btnRetReset" style="background-color: #e7e7e7;"></a>   
		</div>
		 
		<div class="col-md-1">
    <div class="btnStyle" >
		  <button type="button" class="btn BtnFIPACAN StylishCAN" data-dismiss="modal" aria-label="Close">
					      <span class="txt">Close</span>
					      <span class="round"><i class="fa fa-times"></i></span>
					    </button>
		 
</div>
		</div>
     </div>
    
   
       
   <div class="modal-body" style="max-height: calc(100vh - 105px); overflow-y: auto;"> 
   
   <!--######################## Section 1 ########################-->
   
   <fieldset class="fieldsetClsborder">  
    <div class="vertical-divider"  id="rpt1"> 
    <div class="row">  		  
		<div class="col-md-6">
		<table class="dataTable table-bordered table-striped display hover" id="assumptionsectiontbl">
				<col style="width: 50%;"></col>
				<col style="width: 10%;"></col>
				<col style="width: 10%;"></col>
				<col style="width: 10%;"></col>
				
		<thead  style="vertical-align: middle;">
		<tr><th colspan="4" class="text-center"><h4><span class="control-label" style="color:#ffffff;font-weight: bold;">Assumption</span></h4></th>
		</tr>
		<tr>
			<th style="background:#6578a3;vertical-align: middle;!important"><br/>&nbsp;&nbsp;<br/></th>
			<th class="text-center" style="vertical-align: middle;!important"><br/>Self&nbsp;<br/></th>
			<th class="text-center" style="vertical-align: middle;!important"><br/>Spouse&nbsp;<br/></th>
			<th class="text-center" style="vertical-align: middle;!important"><br/>Family&nbsp;<br/></th>
		</tr>
		</thead>
		<tbody>
		<tr>
			<td class="text-left"><div id="focusIntage">
			<label class="control-label mandFldastrks">Intended retirement age*
			</label></div></td>
			<td align="center"> 
			<div class="input-group input-group-sm fld-resp-sm" > 
							<input type="text" name="txtFldRDSlfIntAge" id="txtFldRDSlfIntAge" 
	            class="form-control numbers fld-resp-sm clsfipaClient applyEvntYrs updateAllAnalysis"   /> 
							<div class="input-group-addon" > 
							<span class="glyphicon" id="symbolYrs"></span> </div>
							</div>
							
							
	             
			</td>
			<td  align="center"> 
			<div class="input-group input-group-sm fld-resp-sm" > 
	            <input type="text" name="txtFldRDSpsIntAge" id="txtFldRDSpsIntAge" 
	            class="form-control numbers fld-resp-sm clsfipaSpouse applyEvntYrs"   /> 
	            	<div class="input-group-addon" > 
							<span class="glyphicon" id="symbolYrs"></span> </div>
							</div>
			</td>
			<td> &nbsp; 
			</td>
		</tr>
		<tr>
			<td class="text-left"><div id="focusRdAge">
			<label class="control-label mandFldastrks">Retirement age based on*
			</label></div></td>
			<td colspan="2" align="center">
				<select id="selRDRetAgebasedOn"  name="selRDRetAgebasedOn"  
                  class="form-control fld-resp-sm"  > 
                     <option value="">--SELECT--</option>
								<option value="Self">Self</option>
								<option value="Spouse">Spouse</option>
                  </select> 
			</td> 
			<td>&nbsp;
			</td>
		</tr>
		<tr>
			<td class="text-left"><div id="focusyrstord">
			<label class="control-label mandFldastrks">Yrs to retirement*</label></div></td>
			<td colspan="2" align="center">
			<div class="input-group input-group-sm fld-resp-sm" > 
	            <input type="text" name="txtFldRDYrsToRet" id="txtFldRDYrsToRet" 
	            class="form-control numbers fld-resp-sm applyEvntYrs"  />
			<div class="input-group-addon" > 
							<span class="glyphicon" id="symbolYrs"></span> </div>
							</div>				 
			</td> 
			<td>&nbsp;
			</td>
		</tr>
		<tr>
			<td class="text-left"><div id="focuscoyrs">
			<label class="control-label mandFldastrks">Coordinated retirement age*</label></div></td>
			<td  align="center"> 
			<div class="input-group input-group-sm fld-resp-sm" > 
	            <input type="text" name="txtFldRDSlfCoRetAge" id="txtFldRDSlfCoRetAge" 
	            class="form-control numbers fld-resp-sm clsfipaClient applyEvntYrs" />
	            <div class="input-group-addon" > 
							<span class="glyphicon" id="symbolYrs"></span> </div>
							</div>		
							 
			</td>
			<td  align="center">
			<div class="input-group input-group-sm fld-resp-sm" > 
			 <input type="text" name="txtFldSpsRDCoRetAge" id="txtFldSpsRDCoRetAge" 
		            class="form-control numbers fld-resp-sm clsfipaSpouse  applyEvntYrs" />
		            <div class="input-group-addon" > 
							<span class="glyphicon" id="symbolYrs"></span> </div>
							</div>		
						 
			</td>
			<td  align="center">
			<div class="input-group input-group-sm fld-resp-sm" > 
			 <input type="text" name="txtFldFamRDCoRetAge" id="txtFldFamRDCoRetAge" 
		            class="form-control numbers fld-resp-sm clsfipaFamily applyEvntYrs"  />
		            <div class="input-group-addon" > 
							<span class="glyphicon" id="symbolYrs"></span> </div>
							</div>	
			</td> 
		</tr>
		<tr>
			<td class="text-left"><div id="focusprojlife">
			<label class="control-label mandFldastrks">Projected life expectancy(Age)*</label></div></td>
			<td  align="center">  
			<div class="input-group input-group-sm fld-resp-sm" > 
	            <input type="text" name="txtFldRDSlfProjLfe" id="txtFldRDSlfProjLfe" 
	            class="form-control numbers fld-resp-sm clsfipaClient applyEvntYrs"  />
	              <div class="input-group-addon" > 
							<span class="glyphicon" id="symbolYrs"></span> </div>
							</div>		
			 
			</td>
			<td  align="center">  
			<div class="input-group input-group-sm fld-resp-sm" > 
	            <input type="text" name="txtFldRDSpsProjLfe" id="txtFldRDSpsProjLfe" 
	            class="form-control numbers fld-resp-sm clsfipaSpouse applyEvntYrs" /> 
	              <div class="input-group-addon" > 
							<span class="glyphicon" id="symbolYrs"></span> </div>
							</div>		
			</td>
			<td>&nbsp;
			</td> 
		</tr>
		<tr>
			<td class="text-left"><div id="focusprojlvyrs">
			<label class="control-label mandFldastrks">Projected living yrs in retirement*</label></div></td>
			<td  align="center">  
			<div class="input-group input-group-sm fld-resp-sm" > 
	            <input type="text" name="txtFldRDSlfProlvyrs" id="txtFldRDSlfProlvyrs" 
	            class="form-control numbers fld-resp-sm clsfipaClient applyEvntYrs" /> 
	               <div class="input-group-addon" > 
							<span class="glyphicon" id="symbolYrs"></span> </div>
							</div>		
			</td>
			<td  align="center"> 
			<div class="input-group input-group-sm fld-resp-sm" > 
	            <input type="text" name="txtFldRDSpsProlvyrs" id="txtFldRDSpsProlvyrs" 
	            class="form-control numbers fld-resp-sm clsfipaSpouse applyEvntYrs" /> 
	            <div class="input-group-addon" > 
							<span class="glyphicon" id="symbolYrs"></span> </div>
							</div>		
			</td>
			<td  align="center"> 
			<div class="input-group input-group-sm fld-resp-sm" > 
	            <input type="text" name="txtFldRDFamProlvyrs" id="txtFldRDFamProlvyrs" 
	            class="form-control numbers fld-resp-sm clsfipaFamily applyEvntYrs" /> 	
	            <div class="input-group-addon" > 
							<span class="glyphicon" id="symbolYrs"></span> </div>
							</div>		 
			</td> 
		</tr>
		<tr>
			<td class="text-left"><div id="focusroi">
			<label class="control-label mandFldastrks">Projected ROI after retirement*</label></div></td>
			<td  align="center"> 
				<div class="input-group input-group-sm fld-resp-sm" > 
	            <input type="text" name="txtFldRDSlfROI" id="txtFldRDSlfROI" 
	            class="form-control numbers fld-resp-sm clsfipaClient applyEvntpCent" /> 
	            <div class="input-group-addon" > 
							<span class="glyphicon" id="symbolprCent"></span> </div>
							</div> 
			</td>
			<td align="center"> 
			<div class="input-group input-group-sm fld-resp-sm" > 
	            <input type="text" name="txtFldRDSpsROI" id="txtFldRDSpsROI" 
	            class="form-control numbers fld-resp-sm clsfipaSpouse applyEvntpCent"  /> 
	               <div class="input-group-addon" > 
							<span class="glyphicon" id="symbolprCent"></span> </div>
							</div> 
			</td>
			<td  align="center"> 
			<div class="input-group input-group-sm fld-resp-sm" > 
	            <input type="text" name="txtFldRDFamROI" id="txtFldRDFamROI" 
	            class="form-control numbers fld-resp-sm clsfipaFamily applyEvntpCent" /> 
	               <div class="input-group-addon" > 
							<span class="glyphicon" id="symbolprCent"></span> </div>
							</div> 
			</td> 
		</tr> 
		<tr>
			<td class="text-left"><div id="focusinfrate">
			<label class="control-label mandFldastrks">Inflation Rate*</label></div></td>
			<td colspan="2">&nbsp; 
			</td> 
			<td  align="center"> 
			<div class="input-group input-group-sm fld-resp-sm" > 
            <input type="text" name="txtFldRDInfRate" id="txtFldRDInfRate" 
            class="form-control numbers fld-resp-sm applyEvntpCent" />
               <div class="input-group-addon" > 
							<span class="glyphicon" id="symbolprCent"></span> </div>
							</div> 
							 
			</td> 
		</tr>
		<tr>
			<td class="text-left">
			<label class="control-label mandFldastrks">
			Assumed Effective Investment Rate(after retirement)*</label></td>
			<td colspan="2">&nbsp; 
			</td> 
			<td  align="center">  
			<div class="input-group input-group-sm fld-resp-sm" > 
	            <input type="text" name="txtFldRDAssRate" id="txtFldRDAssRate" 
	            class="form-control numbers fld-resp-sm applyEvntpCent"  />
	             <div class="input-group-addon" > 
							<span class="glyphicon" id="symbolprCent"></span> </div>
							</div> 
							 
			</td> 
		</tr>
		<tr>
			<td class="text-left"><div id="focusbankrate">
			<label class="control-label mandFldastrks">Bank interest rate used*</label></div></td>
			<td colspan="2">&nbsp; 
			</td> 
			<td  align="center"> 
			<div class="input-group input-group-sm fld-resp-sm" > 
	            <input type="text" name="txtFldRDBankIntRate" id="txtFldRDBankIntRate" 
	            class="form-control numbers fld-resp-sm applyEvntpCent" />
	             <div class="input-group-addon" > 
							<span class="glyphicon" id="symbolprCent"></span> </div>
							</div> 
			 
			</td> 
		</tr>
		</tbody> 
		</table>
		 
		 
		</div>
		
		<div class="col-md-6">
		
		<table class="dataTable table-bordered table-striped display hover" id="livingneedrdtbl">
				<col style="width: 20%;"></col>
				<col style="width: 20%;"></col>
				<col style="width: 20%;"></col>
				<col style="width: 20%;"></col>
				
		<thead style="vertical-align: middle;"> 
		<tr><th colspan="4" class="text-center"><h4><span class="control-label" style="color:#ffffff;font-weight: bold;">Living Needs during retirement(today's cost)</span></h4></th>
		<tr>
			<th class="text-center" style="vertical-align: middle;!important">Desc.</th>
			<th class="text-center" style="vertical-align: middle;!important">Annual Amount Needed ($)</th>
			<th class="text-center" style="vertical-align: middle;!important">Co-ordinated Retirement Age(yrs)</th>
			<th class="text-center" style="vertical-align: middle;!important">Proj. Living Yrs. in Retirement(yrs)</th>
		</tr>
		</thead>
		<tbody>
		<tr><td><div id="focuslvself">
		<label class="control-label">Self
		</label></div></td>
		<td align="center">
		<div class="input-group input-group-sm fld-resp-md" >
				<div class="input-group-addon" > 
				<span class="glyphicon" id="symbolUsd"></span> </div>
				<input type="text"  class=" form-control fld-resp-md numbers clsfipaClient applyEvntUsd updaterpcfexpdsection"
				name="txtFldRDSlfLvAmt" id="txtFldRDSlfLvAmt"   
				></input>
				</div>
		</td>
		<td align="center">
		<div class="input-group input-group-sm fld-resp-sm" > 
				<input type="text"  class=" form-control fld-resp-sm numbers clsfipaClient applyEvntYrs"
				name="txtFldRDSlfLvCorAge" id="txtFldRDSlfLvCorAge"    
				></input>
				 <div class="input-group-addon" > 
				<span class="glyphicon" id="symbolYrs"></span> </div> 
				</div>
		</td>
		<td align="center">
		<div class="input-group input-group-sm fld-resp-sm" > 
					<input type="text"  class=" form-control fld-resp-sm numbers clsfipaClient applyEvntYrs"
					name="txtFldRDSlfLvProAge" id="txtFldRDSlfLvProAge"  
					></input>
					 <div class="input-group-addon" > 
					<span class="glyphicon" id="symbolYrs"></span> </div> 
					</div>
		</td>
		</tr>
		<tr><td><div id="focuslvsps">
		<label class="control-label">Spouse</label></div></td>
		<td align="center">
		<div class="input-group input-group-sm fld-resp-md" >
				<div class="input-group-addon" > 
				<span class="glyphicon" id="symbolUsd"></span> </div>
				<input type="text"  class=" form-control fld-resp-md numbers clsfipaSpouse applyEvntUsd updaterpcfexpdsection"
				name="txtFldRDSpsLvAmt" id="txtFldRDSpsLvAmt"  
				></input>
				</div>
		</td>
		<td align="center">
		<div class="input-group input-group-sm fld-resp-sm" > 
				<input type="text"  class=" form-control fld-resp-sm numbers clsfipaSpouse applyEvntYrs"
				name="txtFldRDSpsLvCorAge" id="txtFldRDSpsLvCorAge"   
				></input>
				 <div class="input-group-addon" > 
				<span class="glyphicon" id="symbolYrs"></span> </div> 
				</div>
		</td>
		<td align="center">
		<div class="input-group input-group-sm fld-resp-sm" > 
					<input type="text"  class=" form-control fld-resp-sm numbers clsfipaSpouse applyEvntYrs"
					name="txtFldRDSpsLvProAge" id="txtFldRDSpsLvProAge" 
					></input>
					 <div class="input-group-addon" > 
					<span class="glyphicon" id="symbolYrs"></span> </div> 
					</div>
		</td>
		</tr>
		<tr><td><div id="focuslvfam">
		<label class="control-label">Family</label>
		</div></td>
		<td align="center">
		<div class="input-group input-group-sm fld-resp-md" >
				<div class="input-group-addon" > 
				<span class="glyphicon" id="symbolUsd"></span> </div>
				<input type="text"  class=" form-control fld-resp-md numbers clsfipaFamily applyEvntUsd updaterpcfexpdsection"
				name="txtFldRDFamLvAmt" id="txtFldRDFamLvAmt"  
				></input>
				</div>
		</td>
		<td align="center">
		<div class="input-group input-group-sm fld-resp-sm" > 
				<input type="text"  class=" form-control fld-resp-sm numbers clsfipaFamily applyEvntYrs"
				name="txtFldRDFamLvCorAge" id="txtFldRDFamLvCorAge"  
				></input>
				 <div class="input-group-addon" > 
				<span class="glyphicon" id="symbolYrs"></span> </div> 
				</div>
		</td>
		<td align="center">
		<div class="input-group input-group-sm fld-resp-sm" > 
					<input type="text"  class=" form-control fld-resp-sm numbers clsfipaFamily applyEvntYrs"
					name="txtFldRDFamLvProAge" id="txtFldRDFamLvProAge"  
					></input>
					 <div class="input-group-addon" > 
					<span class="glyphicon" id="symbolYrs"></span> </div> 
					</div>
		</td>
		</tr>
		</tbody>
		</table>
		</div>
		</div>
		<!--changes done 19/06/2019 --> 
		</div>
		
		
		<div class="row hidden">    
    <div class="col-md-10">
	<div class="clearspace10"></div> 
     <span class="headerlabel">CPF Life Pay Out Income</span> 
		<table id="cpfpayoutRD" class="dataTable table-bordered table-striped display hover" style="width:100%">
					<thead> 
						<tr>
							<th><div style="width:20px">#</div></th> 
								<th><div style="width:100px">Retirement Sum</div></th>
								<th><div style="width:100px">Pay out year<small>(yrs)</small></div></th>
								<th><div style="width:130px">Monthly<small>($)</small></div></th> 
								<th><div style="width:130px">Annually<small>($)</small></div></th>
						</tr> 
						  
					</thead> 
					<tbody>   
					</tbody> 
				</table> 
		</div>
		</div>
		
		
   </fieldset>
   
   <div class="row">
	  <hr class="border"/>
	  </div>
   
   <!-- ########################Section 2######################## -->
   	<!-- ########################Table1 Data entry######################## -->
   
     <fieldset class="fieldsetClsborder" id="fldExpndSec"> 
     
   <div id="rpt2"><!--  PDF print Section -->    
	  <div class="row">
	  	
	  	<div class="col-md-6">
	  		<div class="text-left">		 
		 		<h4><span class="control-label" style="color:#50907C;font-weight: bold;padding:15px">Other payment to be made during retirement</span></h4>
			</div>
	  	</div>
	  	
	  	<div class="col-md-5">
	  	<div class="btn-group pull-right funcToDisable" role="group">
	  		<button type="button"  class="btn btn-default navbar-btn delRow-icon-dup"  id="RDExpDelRow"></button>
	  	</div>
	  		<div class="btn-group pull-right funcToDisable" role="group"> 
						<button type="button"  class="btn btn-default navbar-btn addRow-icon"  id="RDExpAddRow" ></button>
						<button type="button"  class="btn btn-default navbar-btn editRow-icon-dup" id="RDExpEditRow" ></button>
						
  				</div>
	  	</div>  	
	  </div>	 
	<!-- ########################Table2 Data entry######################## -->
	<div class="row">
			<div class="table-responsive"  style="margin:20px;overflow:auto;">
			
			<div class="col-md-12">
  				<table id="RDExptbl"  class="dataTable table-bordered table-striped display hover"  style="width:100%"  >  				
						<thead>
							<tr>
								<th><div style="width:10px;">#</div></th>   
								<!-- <th><div style="width:20px;">Select</div></th> -->
								<th><div style="width:20px;" class="checkbox checkbox-primary text-center"><input type="checkbox" id="SelRDExp" name="SelRDExp" onclick="SelAllRDExp(this)"><label for="SelRDExp">&nbsp;</label></div></th>
								<th><div style="width:120px">Type of Payment<span class="mandFldastrks">*</span></div></th> 
								<th><div style="width:70px">Frequency<span class="mandFldastrks">*</span></div></th> 
								<th><div style="width:90px">Annual Expenditure<small>($)</small></div></th>  
								<th><div style="width:90px">Escalation Rate<small>(%)</small></div></th>  
								<th><div style="width:90px">Age Based On<span class="mandFldastrks">*</span></div></th>  
								<th><div style="width:80px">Age Payment Starts<small>(yrs)</small><span class="mandFldastrks">*</span></div></th>
								<th><div style="width:80px">Age Payment Ends<small>(yrs)</small></div></th>
								<th><div style="width:140px">Remarks</div></th>									
							</tr> 
						</thead>
						<tbody></tbody>
					</table>
					</div>
			</div>
			</div>
			 
		<div class="clearspace10"></div>
		
	</div>	
		 
<!-- 		########################  -->
		<div id="projOfExpetbldiv" >
		
		  <div class="row">
		  	<div class="col-md-8">
		  		<div class="text-left">		 
			 		<h4><span class="control-label" style="color:#50907C;font-weight: bold;padding:15px">Total Projected Expenditure Details on retirement
			 		<small>This analysis will appear as input of the expenditure is keyed in </small>
			 		</span>
			 		
					</h4>
				</div>
		  	</div>
		  	<div class="col-md-4">
		  		<div class="text-left">					
					<br><label for="RetirementValueBasedOn"> Retirement Age Based On </label>
					&nbsp;<input type="text" class="fldwithoutborder" id="RetirementValueBasedOn" readonly="readonly">	   
				</div>
		  	</div>
	  	</div>
	  	
	  	<div class="row" style="min-height:275px">
	  		<!-- ########################Expenditure Manipulation Section######################## -->			
				<div class="table-responsive"  style="margin:20px;overflow:auto;">
					<table id="generateproExptbl"  class="dataTable table-bordered table-striped display hover" style="width:100%"> 
					</table> 
				</div>
		</div>
		
		<div class="row">			
			<!-- ########################Expenditure Chart Section ########################-->
			<div class="col-md-1"></div>
			<div class="text-center col-md-10" id="rpcfana_expndchart">	
				 	  
					    <br/>
					  <br/>
					  <legend class="control-label" style="color:#50907C;font-weight: bold;" >Projection of Expenditure</legend>
					   <div style="width:75%;">
					   <div class="chart-container" >
					   <div id="projectionOfExpDiv" > </div>

            <label>Chart type :</label>
            <select id="projectionOfExpchartType" onchange="loadprojectionOfExpDynamicChart();">
                <option value="Bar">Bar Chart</option>
                <option value="Line">Line Chart</option>
                
            </select>
        </div>
        </div>
				<!-- </fieldset> -->
			 </div>
			<div class="col-md-1"></div>
		</div>  
		</div>
	</fieldset>
	 <!--######################## Section 3 ########################-->
	 
	 <div class="row">
	  <hr class="border"/>
	  </div>
     
	<fieldset class="fieldsetClsborder" id="fldIncomeSec"> 
   
<!--    start of second page added by kavi 11/07/2018-->
 	<div id="rpt3">  <!-- pdf content section-->
 	
 	<div class="row hidden">
	  	<div class="col-md-6">
	  		<div class="text-left">		 
		 		<h4><span class="control-label" style="color:#50907C;font-weight: bold;padding:15px"> Income & assets to be received on retirement</span></h4>
			</div>
	  	</div>
	  	
	  	<div class="col-md-6 table-responsive hidden">
		   <div class="btn-group pull-right funcToDisable" role="group"> 
				<button type="button"  class="btn btn-default navbar-btn addRow-icon"  id="RDIncDisImbAddRow"></button>
						<button type="button"  class="btn btn-default navbar-btn editRow-icon-dup" id="RDIncDisImbEditRow"></button>
						<button type="button"  class="btn btn-default navbar-btn delRow-icon"  id="RDIncDisImbDelRow"></button>
			</div>
  		</div>
	  </div>	 
	
	<div class="clearspace10"></div>  
	
	<div class="row hidden">
		<div class="col-md-4 table-responsive">
			<a class="btn btn-yellow"  id="btnRPCFShowInv" >Click to view Investment Only </a>
		  	<a class="btn btn-violet" id="btnRPCFShowIns">Click to view Insurance Only  </a> 
	  	</div>
	 </div>
		<div class="row hidden">
			<div class="table-responsive"  style="margin:20px;overflow:auto;">
				<div class="col-md-12">
	  				<table id="RDIncDisImbtbl"  class="dataTable table-bordered table-striped display hover"  style="width:100%"  >
							<thead>
								<tr> 
									<th><div style="width:30px;">#</div></th>   
									<th><div style="width:30px;">Select</div></th>
									<th><div style="width:130px">Classification<span class="mandFldastrks">*</span></div></th> 
									<th><div style="width:130px">Descriptions</div></th> 
									<th><div style="width:80px">Frequency<span class="mandFldastrks">*</span></div></th>  
									<th><div style="width:100px">Total Income Received<small>($)<br/>Disbursement</small></div></th>  
									<th><div style="width:80px">Escalation Rate<small>(%)</small></div></th>  
									<th><div style="width:50px">ROI<small>(%)</small></div></th>
									<th><div style="width:60px">Age Based on<span class="mandFldastrks">*</span></div></th>
									<th><div style="width:60px">Age Income Starts<small>(yrs)</small><span class="mandFldastrks">*</span></div></th>
									<th><div style="width:60px">Age Income Ends<small>(yrs)</small></div></th>									
								</tr> 
							</thead>
							<tbody></tbody>
					</table> 
			    </div>
			</div>
		</div>
  				
		<div class="clearspace20"></div>  
		
		
 	
 	  <div class="row">
	  	<div class="col-md-6">
	  		<div class="text-left">		 
		 		<h4><span class="control-label" style="color:#50907C;font-weight: bold;padding:15px"> Income and funds to be received on retirement</span></h4>
			</div>
	  	</div>
	  	
	  	<div class="col-md-6 table-responsive">
	  	<div class="btn-group pull-right funcToDisable" role="group"> 
	  		<button type="button"  class="btn btn-default navbar-btn delRow-icon-dup"  id="RDIncDelRow" ></button>
	  	</div>
		   <div class="btn-group pull-right funcToDisable" role="group"> 
				<button type="button"  class="btn btn-default navbar-btn addRow-icon"  id="RDIncAddRow"></button>
						<button type="button"  class="btn btn-default navbar-btn editRow-icon-dup" id="RDIncEditRow"></button>
						
<!-- 						<button type="button"  class="btn btn-default navbar-btn viewRow-icon" id="RDIncViewRow"></button> -->
			</div>
  		</div>
	  </div>	 
	
	<div class="clearspace10"></div>  
	<!-- ########################Table1 Data entry######################## -->
		<div class="row">
			<div class="table-responsive"  style="margin:20px;overflow:auto;">
				<div class="col-md-12">
	  				<table id="RDInctbl"  class="dataTable table-bordered table-striped display hover"  style="width:100%"  >
							<thead>
								<tr> 
									<th><div style="width:30px;">#</div></th>   
									<!-- <th><div style="width:30px;">Select</div></th> -->
									<th><div style="width:30px;" class="checkbox checkbox-primary text-center"><input type="checkbox" id="SelRDInc" name="SelRDInc" onclick="SelAllRDInc(this)"><label for="SelRDInc" >&nbsp;</label></div></th>
									<th><div style="width:130px">Classification<span class="mandFldastrks">*</span></div></th> 
									<th><div style="width:130px">Descriptions</div></th> 
									<th><div style="width:80px">Frequency<span class="mandFldastrks">*</span></div></th>  
									<th><div style="width:100px">Total Income Received<small>($)</small></div></th>  
									<th><div style="width:80px">Escalation Rate<small>(%)</small></div></th>  
									<th><div style="width:50px">ROI<small>(%)</small></div></th>
									<th><div style="width:60px">Age Based on<span class="mandFldastrks">*</span></div></th>
									<th><div style="width:60px">Age Income Starts<small>(yrs)</small><span class="mandFldastrks">*</span></div></th>
									<th><div style="width:60px">Age Income Ends<small>(yrs)</small></div></th>									
								</tr> 
							</thead>
							<tbody></tbody>
					</table> 
			    </div>
			</div>
		</div>
  				
		<div class="clearspace20"></div>  
		
		<div class="row">
		  	<div class="col-md-6">
		  		<div class="text-left">		 
			 		<h4>
			 		<span class="control-label" style="color:#50907C;font-weight: bold;padding:15px">Income and assets to be received on retirement</span>
			 		<!--  <button type="button" class="btn btn-default btn-sm" id="RDIncAssFilterRow">
          				<span class="glyphicon glyphicon-filter"></span> Filter by Classification 
        			</button> -->
        			
        			
        			 
			 		</h4>
			 		
			 		
  
				</div>
		  	</div>
		  	
		  		<div class="col-md-3">
		  			<div style="color:#50907C;font-weight: bold;" class="pull-left">
					<div class="dropdown">
								    <button class="btn btn-primary dropdown-toggle" id="menu1" type="button" data-toggle="dropdown">Filter by Classification
								    <span class="caret"></span></button>
								    <ul class="dropdown-menu" role="menu" aria-labelledby="menu1" id="rpcfIncomeAssetList">
								      <li role="presentation"><a role="menuitem" tabindex="-1" href="#" onclick="showRPCFIncomeAssetRow(this)">Show All</a></li>      
								    </ul>
								  </div>
								 </div>
		  			</div>
		  	
		  	<div class="col-md-3">
		  	<div class="btn-group pull-right funcToDisable" role="group"> 
		  		<button type="button"  class="btn btn-default navbar-btn delRow-icon-dup"  id="RDIncAssDelRow" ></button>
		  	</div>
			  <div class="btn-group pull-right funcToDisable" role="group"> 
					<button type="button"  class="btn btn-default navbar-btn addRow-icon"  id="RDIncAssAddRow"></button>
						<button type="button"  class="btn btn-default navbar-btn editRow-icon" id="RDIncAssEditRow" ></button>
						
<!-- 						<button type="button"  class="btn btn-default navbar-btn viewRow-icon" id="RDIncAssViewRow"></button> -->
			</div>
	  		</div>
		</div>
		<div class="row">
		
		</div>
		
	<!-- ########################Table2 Data entry######################## -->
	<div class="row">
	
		<div class="table-responsive"  style="margin:20px;overflow:auto;">
		<div class="col-md-12">
  					<table id="RDIncAsstbl"  class="dataTable table-bordered table-striped display hover" style="width:100%"  >
						<thead>
							<tr> 
								<th><div style="width: 50px;">#</div></th>   
								<!-- <th><div style="width: 60px;">Select</div></th> -->
								<th><div style="width:60px;" class="checkbox checkbox-primary text-center"><input type="checkbox" id="SelRDIncAss" name="SelRDIncAss" onclick="SelAllRDIncAss(this)"><label for="SelRDIncAss">&nbsp;</label></div></th>
								<th><div style="width:130px">Classification<span class="mandFldastrks">*</span></div></th> 
								<th><div style="width:130px">Descriptions</div></th> 
								<th><div style="width:80px">Frequency<span class="mandFldastrks">*</span></div></th>  
								<th><div style="width:100px">Total Income Received<small>($)</small></div></th>  
								<th><div style="width:100px">Escalation Rate<small>(%)</small></div></th>  
								<th><div style="width:50px">ROI<small>(%)</small></div></th>
								<th><div style="width:70px">Age Based on<span class="mandFldastrks">*</span></div></th>
								<th><div style="width:90px">Age Income Starts<small>(yrs)</small><span class="mandFldastrks">*</span></div></th>
								<th><div style="width:90px">Age Income Ends<small>(yrs)</small></div></th>
							</tr> 
						</thead>
						<tbody></tbody>
					</table> 
					</div>
				</div> 
	
	</div>
  				
		 
</div>			
		<div class="clearspace10"></div> 
		
		<div class="row">
		
		<!-- 		########################  -->
		<div id="projOfIncometblediv" style="margin:20px;overflow-y:auto;overflow-x:hidden">
		<div class="row">
			<div class="col-md-8">
		  		<div class="text-left">		 
			 		<h4><span class="control-label" style="color:#50907C;font-weight: bold;padding:15px">Projected Income available on retirement</span>
			 		
					</h4>
				</div>
		  	</div>
		</div>
		 
		   	
	<!-- ######################## Income Manipulation Section ########################-->
	<div class="row">
		<div class="table-responsive" id="generateproIncomeDiv"  style="overflow: auto;">
			<div class="col-md-12">
			<table id="generateproIncometbl"  class="dataTable table-bordered table-striped display hover nowrap" style="width:100%" > 
			</table>
			</div>
		</div>
	</div>
	
	<!-- ########################Income Chart Section ########################-->
	<div class="row">
			<div class="col-md-1"></div>
			<div class="text-center col-md-10" id="rpcfana_incomechart">	
 
					  <br/>
					  <legend class="control-label" style="color:#50907C;font-weight: bold;" >Projection of Income</legend>
					   <div style="width:75%;">
					   <div class="chart-container">
					   <div id="ProjectionofIncomecanvasDiv" > </div>

            <label>Chart type :</label>
            <select id="ProjectionofIncomechartType" onchange="loadProjectionofIncomeDynamicChart();">
                <option value="Bar">Bar Chart</option>
                <option value="Line">Line Chart</option>
                <!-- <option value="Pie">Pie Chart</option>
                <option value="Doughnut">Doughnut chart</option> -->
            </select>
        </div>
        </div>
				<!-- </fieldset> -->
			 </div>
			 <div class="col-md-1"></div>
			 </div>
		</div>
		
		</div>

		
	</fieldset>
	
	<div class="row">
	  <hr class="border"/>
	  </div>
	  
	<!-- ########################Section 4######################## -->
  <fieldset class="fieldsetClsborder" > 
    
 <div id="rpt4"><!--  js pdf content section-->
 
 
 	<div class="row">
		  	<div class="col-md-8">
		  		<div class="text-left">		 
			 		<!-- <h4><span class="control-label" style="color:#50907C;font-weight: bold;">Annual Cashflow Projections of Retirement Income and Expenditure</span></h4> -->
				<h4><span class="control-label" style="color:#50907C;font-weight: bold;padding:15px">Total Cashflow Projected of Retirement Income and Expenditure</span></h4>
				</div>
		  	</div>
		  	
		  	
		
		<div class="col-md-4">
			  <!-- <div class="btn-group funcToDisable" role="group">  -->
			  	<!-- <button type="button"  class="btn btn-yellow addAmdIncicon"  id="RdAmendInc" title="Navigate to Income Section"></button>
			  	<button type="button"  class="btn btn-violet addAmdExpicon"  id="RdAmendExp" title="Navigate to Expenditure Section"></button> -->
			  	
			  	<a href="#fldIncomeSec" class="btn btn-yellow"  id="RdAmendInc">Click to move Income section </a>
			  	<a href="#fldExpndSec" class="btn btn-violet" id="RdAmendExp">Click to move expenditure section </a> <br/>
			<!-- </div> -->
	  		</div>
	  	</div>
	  
	
    
<!--     ########################Amended Tables########################   -->

<div class="clearspace20"></div>
    	
<div id="projInvRettbldiv" >
		<div class="row">
		   <div class="col-md-12">
		   
		   
		   <div class="form-group" id="rpt5">  
			<div class="row">
				<div class="col-md-2 col-sm-3 col-xs-3 text-right">
						<div class="fipaFldLblText"   style="text-align: right"> 
						Amount of buffer fund to set aside on retirement:
						</div>
				</div>
				 
				<div class="col-md-2 col-sm-3 col-xs-3"> 
					<div class="input-group input-group-sm fld-resp-md"> 
				 	<span class="input-group-addon">
					         <span class="glyphicon" id="symbolUsd"></span>
							         </span>
								<input type="text" class="form-control numbers applyEvntUsd" id="rpcfannlbufamt" >
							       </div>
		         </div> 
		        
				<div class="col-md-2 col-sm-3 col-xs-3 text-right">
						<div class="fipaFldLblText"   style="text-align: right"> 
						Interest rates for buffer fund:
						</div>
				</div>
				 
				<div class="col-md-2 col-sm-3 col-xs-3"> 
				
				<div class="input-group input-group-sm fld-resp-sm"> 
				 
						<input type="text"  
							id="rpcfannlbufamtintrate" class="form-control numbers clsfipaClient applyEvntpCent"
							  />
							 <span class="input-group-addon">
					              <span class="glyphicon" id="symbolprCent"></span>
					         </span>
					       </div>
					       
					
		         </div> 
		         
		         
		         <div class="col-md-2 col-sm-3 col-xs-3 text-right">
						<div class="fipaFldLblText"   style="text-align: right"> 
						Investment returns expected on balance of retirement funds:
						</div>
				</div>
				 
				<div class="col-md-2 col-sm-3 col-xs-3"> 
				<div class="input-group input-group-sm fld-resp-sm"> 
				 
						<input type="text"
							id="rpcfannlbufamtroi" class="form-control numbers clsfipaClient applyEvntpCent"
							  />
							 <span class="input-group-addon">
					              <span class="glyphicon" id="symbolprCent"></span>
					         </span>
					       </div>
					       
					
		         </div> 
		        
		         
		      </div>
      	</div>
		   
		   
		   
		
	<!-- ########################Projected analysis Manipulation Section######################## -->
	
	
	<div class="" id="tabincomeandExpnd" style="margin:20px;overflow:auto;">
   <div class="navbar">
      <div class="navbar-inner">
            <ul class="nav nav-pills-blue">
               <li class="active"><a href="#AnnualBased" data-toggle="tab">Annual Based</a></li>
               <li><a href="#AccumlationBased" data-toggle="tab">Accumlation Based</a></li>
            </ul>
      </div>
   </div>
   <div class="tab-content">
      <div class="tab-pane active" id="AnnualBased">
      <div class="row">
      	<div class="col-md-6">
	 		<table id="generatetoamendincExp" class="dataTable table-bordered table-striped display hover"  style="width:100%"> 
    		</table>
		</div>
		<div class=" text-center col-md-6">
		
		<div class="row">
		<div class="col-md-1"></div>
			<!--######################## Income Chart Section ########################-->
			<div class="text-center" id="rpcfana_annlexpinc">	
			 
				<legend class="control-label" style="color:#50907C;font-weight: bold;" >Cashflow Projection on Retirement</legend>
				<div style="width:75%;">
				<div class="chart-container"  >
				<div id="cashfloeProjectionOnRetirementDiv"> </div>
                <label>Chart type :</label>
                <select id="cashfloeProjectionOnRetirementchartType" onchange="loadcashfloeProjectionOnRetirementDynamicChart();">
                <option value="Bar">Bar Chart</option>
                <option value="Line">Line Chart</option>
            </select>
        </div>
        </div>
				 
					  <hr/> <br>
					   
					  <!-- <div id="CashFlwprojectionOnRtmnt_ED" style="text-align:center;overflow-x: auto;" ></div> -->
					  
					  <legend class="control-label" style="color:#50907C;font-weight: bold;" >Available retirement funds - (Surplus/Deficit)</legend>
					  <div style="width:75%;">
					   <div class="chart-container"  >
					   <div id="cashfloeProjectionOnRetirementDivED"> </div>

            <label>Chart type :</label>
            <select id="cashfloeProjectionOnRetirementchartTypeED" onchange="loadcashfloeProjectionOnRetirementDynamicChartED();">
                <option value="Bar">Bar Chart</option>
                <option value="Line">Line Chart</option>
            </select>
        </div>
        </div>
				<!-- </fieldset> -->
			 
		</div>  
		<div class="col-md-1"></div>    
         </div>
         
		</div>
		
	</div>
	
		
         <br/>
          
      </div>
      <div class="tab-pane" id="AccumlationBased">
      <div class="row">
        	<div class="col-md-6">
	 		<table id="generatetoamendincExpAccm" class="dataTable table-bordered table-striped display hover" style="width:100%" > 
    		</table>
		</div>
		
		<div class="col-md-6">
		
		<div class="row">
		<div class="col-md-1"></div>
			<!--######################## Income Chart Section ########################-->
			<div class="text-center" id="rpcfana_annlexpinc_accm">	
			 
					  <!-- <div id="CashFlwprojectionOnRtmntAccm" style="text-align:center;overflow-x: auto;" ></div> -->
					 
					  <legend class="control-label" style="color:#50907C;font-weight: bold;" >Accumulated Annual Income & Expenditure</legend>
					  <div style="width:75%;">
					   <div class="chart-container"  >
					   <div id="cashfloeProjectionOnRetirementDivAccm"> </div>

            <label>Chart type :</label>
            <select id="cashfloeProjectionOnRetirementchartTypeAccm" onchange="loadcashfloeProjectionOnRetirementDynamicChartAccm();">
                <option value="Line">Line Chart</option>
                <option value="Bar">Bar Chart</option>
            </select>
        </div>
        </div>
					  
					   <hr/><br>
					    	
					   <!-- <div id="CashFlwprojectionOnRtmntAccm_ED" style="text-align:center;overflow-x: auto;" ></div> -->
				<legend class="control-label" style="color:#50907C;font-weight: bold;" >Accumulated Available retirement funds - (Surplus/Deficit)</legend>
					  <div style="width:75%;">
					   <div class="chart-container"  >
					   <div id="cashfloeProjectionOnRetirementDivAccmED"> </div>

            <label>Chart type :</label>
            <select id="cashfloeProjectionOnRetirementchartTypeAccmED" onchange="loadcashfloeProjectionOnRetirementDynamicChartAccmED();">
                <option value="Line">Line Chart</option>
                <option value="Bar">Bar Chart</option>
            </select>
        </div>
        </div>	   
			 
		</div> 
		<div class="col-md-1"></div>
     </div>
     
		</div>
	</div>
	
	
      </div>
      <br/>
          
     </div>
</div>
	
 
   
 
	
	
			  
			 
			</div> 
			</div>   
		</div> 
		
</div>	<!-- end of section -->
	
	</fieldset>
	
	
  
 	   </div>
 	  </div>			
			
		<!-- Footer --> 
      
    </div>   
    </div>	<!-- ENDED --> 
		 
 
<!--############################### PROJECTION OF EXPENDITURE   ################################################  -->
 
<div class="modal fade" id="ProjOfExp_Dialog" style="display: none"  tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog scrollModelBodyWidth1000" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel"></h4> 
      </div>
      <div class="modal-body">
     <fieldset class="fieldsetClsborder">
      
     <div class="col-md-6">
		<div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 ">  
			  <label class="control-label mandFldastrks pull-right text-right"
					for="txtFldDlgprojORtyofpay">
					 Type of payment* 
				</label> 
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
             <input type='text' class="form-control" id="txtFldDlgprojORtyofpay" name="txtFldDlgprojORtyofpay" onmouseover="fipaTooltip(this);"   maxlength="150" /> 
		  </div> 
            </div>
      </div>
      
      <div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 ">  
			  <label class="control-label mandFldastrks pull-right text-right"
					for="selDlgprojORFreq">
					 Frequency*
				</label> 
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
             <select class="form-control fld-resp-sm" id="selDlgprojORFreq" name="selDlgprojORFreq" onmouseover="fipaTooltip(this);"  >
							<option value="">--SELECT--</option>
							<option value="REGULAR">REGULAR</option>
							<option value="SINGLE">SINGLE</option>
				 	</select> 
            </div> 
            </div>
      </div>
      
      
      <div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 ">  
			  <label class="control-label pull-right text-right"
					for="txtFldDlgprojORAnlExp">
					 Annual Expenditure 
				</label> 
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
             <div class="input-group input-group-sm fld-resp-md">
					<div class="input-group-addon" > 
               <span class="glyphicon" id="symbolUsd"></span> </div>
							<input type='text' class="form-control numbers applyEvntUsd"  onmouseover="fipaTooltip(this);"  
							id="txtFldDlgprojORAnlExp" name="txtFldDlgprojORAnlExp" /> 
					</div>
            </div> 
            </div>
      </div>
      
      <div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 ">  
			 <label class="control-label pull-right text-right"
					for="txtFldDlgprojOREslrate">
					 Escalation Rate  </label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
           <div class="input-group input-group-sm fld-resp-mm" >  
					                <input  type="text"  name="txtFldDlgprojOREslrate" id="txtFldDlgprojOREslrate" 
					                class="form-control numbers clsfipaSpouse applyEvntpCent3" onmouseover="fipaTooltip(this);"  />
							 <span class="input-group-addon">
					                <span class="glyphicon" id="symbolprCent"></span>
					                </span>
							</div>	  
            </div> 
            </div>
      </div>      
        
      </div>
      
      
      <div class="col-md-6">
      <div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 ">  
			 <label class="control-label mandFldastrks pull-right text-right"
					for="selDlgprojORAgeBsOn"> Age Based On*</label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6">  
					 <select class="form-control fld-resp-sm" id="selDlgprojORAgeBsOn" name="selDlgprojORAgeBsOn" onmouseover="fipaTooltip(this);"  >
							<option value="">--SELECT--</option>
							<option value="SELF">SELF</option>
							<option value="SPOUSE">SPOUSE</option>
				 	</select> 
            </div> 
            </div>
      </div> 
      
       <div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 ">  
			   <label class="control-label mandFldastrks pull-right text-right" for="txtFldDlgprojORAgePaySts">
				 Age payment starts* </label>  
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
           <div class="input-group input-group-sm fld-resp-sm"> 
				 <input type="text" name="txtFldDlgprojORAgePaySts" id="txtFldDlgprojORAgePaySts" 
				 class="form-control numbers applyEvntYrs"   onmouseover="fipaTooltip(this);"  /> 
					<div class="input-group-addon" > 
               <span class="glyphicon" id="symbolYrs"></span> </div>
					</div>
            </div> 
            </div>
      </div> 
      
      
       <div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 ">  
			   <label class="control-label pull-right text-right" for="txtFldDlgprojORAgePayends">
			    Age payment ends </label>  
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
           <div class="input-group input-group-sm fld-resp-sm"> 
				 <input type="text" name="txtFldDlgprojORAgePayends" id="txtFldDlgprojORAgePayends"
					class="form-control numbers applyEvntYrs"  onmouseover="fipaTooltip(this);"   /> 
					<div class="input-group-addon"  > 
               <span class="glyphicon" id="symbolYrs"></span> </div>
					</div>
            </div> 
            </div>
      </div> 
      
      <div class="form-group">
							<div class="row">
								<div class="col-md-6 col-sm-6 col-xs-6">
									<label class="control-label pull-right text-right" for="txtFldDlgprojORRemarks"> Remarks</label>
								</div>
								<div class="col-md-6 col-sm-6 col-xs-6">
									<textarea name="txtFldDlgprojORRemarks" id="txtFldDlgprojORRemarks" class="form-control" rows="5" maxlength="300"></textarea>


								</div>
							</div>
						</div>
       
      <div class="form-group"> 
				 <input type="hidden" name="txtFldDlgprojORId" id="txtFldDlgprojORId" /> 
				 <input type="hidden" name="txtFldDlgprojORCrtdBy" /> 
				 <input type="hidden" name="txtFldDlgprojORCrtdDate" /> 
	 </div>	
      
      
      </div>    
        
      </fieldset> 
      </div>
      <div class="modal-footer">  
        <div class="btnStyle"><button type="button"  class="btn BtnFIPASRCH StylishSRCH" >
					      <span class="txt">Ok</span>
					      <span class="round"><i class="fa fa-check"></i></span>
					    </button>
					    <button type="button"  class="btn BtnFIPACAN StylishCAN"   data-dismiss="modal">
					      <span class="txt">Close</span>
					      <span class="round"><i class="fa fa-times"></i></span>
					    </button></div>
		   
      </div>
    </div>
  </div>
</div>
 
 <!-- ############################## PROJECTION OF INCOME 1 ###################################################### -->  
<div class="modal fade" id="ProjOfInc_Dialog" style="display: none"  tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog scrollModelBodyWidth1000" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel"></h4> 
      </div>
      <div class="modal-body">
     <fieldset class="fieldsetClsborder">
      
     <div class="col-md-6">
		<div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 ">  
			  <label class="control-label mandFldastrks pull-right text-right"
					for="txtFldDlgprojIRClsfy"> Classification*
				</label> 
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
              <input type='text' class="form-control" id="txtFldDlgprojIRClsfy" name="txtFldDlgprojIRClsfy"  onmouseover="fipaTooltip(this);"   /> 
		     </div> 
            </div>
      </div>
      
      <div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 ">  
			  <label class="control-label pull-right text-right" for="txtFldDlgprojIRDesc">
				 Description 
				</label> 
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
               <input type='text' class="form-control" id="txtFldDlgprojIRDesc" name="txtFldDlgprojIRDesc" onmouseover="fipaTooltip(this);"  /> 
		      </div> 
            </div>
      </div>
      
      
      <div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 ">  
			  <label class="control-label mandFldastrks pull-right text-right"
					for="selDlgprojIRFreq">Frequency*
				</label> 
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
              <select name="selDlgprojIRFreq"  id="selDlgprojIRFreq" class="form-control fld-resp-sm" onmouseover="fipaTooltip(this);"  >
              <option value="">--SELECT--</option> 
              <option value="REGULAR">REGULAR</option>
              <option value="SINGLE">SINGLE</option>
              </select>
            </div> 
            </div>
      </div>
      
      <div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 ">  
			 <label class="control-label pull-right text-right" for="txtFldDlgprojIRAmtofInc">
				 Amount of income </label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
             <div class="input-group input-group-sm fld-resp-mm">
					<div class="input-group-addon" > 
               <span class="glyphicon" id="symbolUsd"></span> </div>
							<input type='text' class="form-control numbers applyEvntUsd" 
							id="txtFldDlgprojIRAmtofInc" name="txtFldDlgprojIRAmtofInc"  onmouseover="fipaTooltip(this);"   /> 
					</div>
            </div> 
            </div>
      </div>      
       
       
       <div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 ">  
			 <label class="control-label pull-right text-right"
					for="txtFldDlgprojIREslrate">
					  Escalation Rate  </label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
           <div class="input-group input-group-sm fld-resp-sm" >  
					                <input  type="text"  name="txtFldDlgprojIREslrate" id="txtFldDlgprojIREslrate" 
					                class="form-control numbers clsfipaSpouse applyEvntpCent3"  onmouseover="fipaTooltip(this);"  />
							 <span class="input-group-addon">
					                <span class="glyphicon" id="symbolprCent"></span>
					                </span>
							</div>	  
            </div> 
            </div>
      </div>  
      
      </div>
      
      
      <div class="col-md-6">
      <div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 ">  
			 <label class="control-label pull-right text-right"
					for="txtFldDlgprojIRRoi">
				 ROI </label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
           <div class="input-group input-group-sm fld-resp-sm" >  
					                <input  type="text" name="txtFldDlgprojIRRoi" id="txtFldDlgprojIRRoi" 
					                class="form-control numbers clsfipaSpouse applyEvntpCent3"  onmouseover="fipaTooltip(this);"   />
							 <span class="input-group-addon">
					                <span class="glyphicon" id="symbolprCent"></span>
					                </span>
							</div>	  
            </div> 
            </div>
      </div>  
      
      
      <div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 ">  
			 <label class="control-label mandFldastrks pull-right text-right"
					for="selDlgprojIRAgeBsOn"> Age Based On*</label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6">  
					 <select class="form-control fld-resp-sm" id="selDlgprojIRAgeBsOn" name="selDlgprojIRAgeBsOn"  onmouseover="fipaTooltip(this);"  >
							<option value="">--SELECT--</option>
							<option value="SELF">SELF</option>
							<option value="SPOUSE">SPOUSE</option>
				 	</select> 
            </div> 
            </div>
      </div> 
      
       <div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 ">  
			   <label class="control-label mandFldastrks pull-right text-right" for="txtFldDlgprojIRAgePaySts">
				   Age payment starts*</label>  
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
           <div class="input-group input-group-sm fld-resp-sm"> 
				 <input type="text" name="txtFldDlgprojIRAgePaySts" id="txtFldDlgprojIRAgePaySts"
					class="form-control numbers applyEvntYrs"   onmouseover="fipaTooltip(this);"   /> 
					<div class="input-group-addon" > 
               <span class="glyphicon" id="symbolYrs"></span> </div>
					</div>
            </div> 
            </div>
      </div> 
      
      
       <div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 ">  
			   <label class="control-label pull-right text-right" for="txtFldDlgprojIRAgePayends"> 
			   Age payment ends  </label>  
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
           <div class="input-group input-group-sm fld-resp-sm"> 
				 <input type="text" name="txtFldDlgprojIRAgePayends" id="txtFldDlgprojIRAgePayends"
					class="form-control numbers applyEvntYrs"   onmouseover="fipaTooltip(this);"   /> 
					<div class="input-group-addon"  > 
               <span class="glyphicon" id="symbolYrs"></span> </div>
					</div>
            </div> 
            </div>
      </div> 
      
      
       
      <div class="form-group"> 
				 <input type="hidden" name="txtFldDlgprojIRId" id="txtFldDlgprojIRId"/> 
				 <input type="hidden" name="txtFldDlgprojIRCrtdBy" /> 
				 <input type="hidden" name="txtFldDlgprojIRCrtdDate" /> 
	 </div>	
      
      
      </div>    
           
        
      </fieldset> 
      </div>
     <div class="modal-footer">  
        <div class="btnStyle"><button type="button"  class="btn BtnFIPASRCH StylishSRCH" >
					      <span class="txt">Ok</span>
					      <span class="round"><i class="fa fa-check"></i></span>
					    </button>
					    <button type="button"  class="btn BtnFIPACAN StylishCAN"   data-dismiss="modal">
					      <span class="txt">Cancel</span>
					      <span class="round"><i class="fa fa-times"></i></span>
					    </button></div>
		   
      </div>
    </div>
  </div>
</div>
 

<!-- ##############################  PROJECTION OF INCOME 2  ###################################################### -->  
<div class="modal fade" id="ProjOfIncAss_Dialog" style="display: none"  tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog scrollModelBodyWidth1000" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel"></h4> 
      </div>
      <div class="modal-body">
     <fieldset class="fieldsetClsborder">
      
     <div class="col-md-6">
		<div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 ">  
			  <label class="control-label mandFldastrks pull-right text-right"
					for="txtFldDlgprojIncAssClsfy">
					 Classification*
				</label> 
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
              <input type='text' class="form-control" id="txtFldDlgprojIncAssClsfy" name="txtFldDlgprojIncAssClsfy" /> 
		     </div> 
            </div>
      </div>
      
      <div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 ">  
			  <label class="control-label pull-right text-right" for="txtFldDlgprojIncAssDesc">
					 Description 
				</label> 
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
               <input type='text' class="form-control" id="txtFldDlgprojIncAssDesc" name="txtFldDlgprojIncAssDesc" /> 
		      </div> 
            </div>
      </div>
      
      
      <div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 ">  
			  <label class="control-label mandFldastrks pull-right text-right"
					for="selDlgprojIncAssFreq"> 
					 Frequency*
				</label> 
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
              <select name="selDlgprojIncAssFreq" id="selDlgprojIncAssFreq" class="form-control fld-resp-sm">
              <option value="">--SELECT--</option>
              <option value="REGULAR">REGULAR</option>
              <option value="SINGLE">SINGLE</option>
              
              </select>
            </div> 
            </div>
      </div>
      
      <div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 ">  
			 <label class="control-label pull-right text-right" for="txtFldDlgprojIncAssAmtofInc">
				 Amount of income </label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
             <div class="input-group input-group-sm fld-resp-md">
					<div class="input-group-addon" > 
               <span class="glyphicon" id="symbolUsd"></span> </div>
							<input type='text' class="form-control numbers applyEvntUsd" 
							id="txtFldDlgprojIncAssAmtofInc" name="txtFldDlgprojIncAssAmtofInc" /> 
					</div>
            </div> 
            </div>
      </div>      
       
       
       <div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 ">  
			 <label class="control-label pull-right text-right"
					for="txtFldDlgprojIncAssEslrate">
					  Escalation Rate </label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
           <div class="fld-resp-sm input-group input-group-sm" >  
					                <input  type="text" name="txtFldDlgprojIncAssEslrate"
							id="txtFldDlgprojIncAssEslrate" class="form-control numbers clsfipaSpouse applyEvntpCent3" />
							 <span class="input-group-addon">
					                <span class="glyphicon" id="symbolprCent"></span>
					                </span>
							</div>	  
            </div> 
            </div>
      </div>  
       
      
      </div>
      
      
      <div class="col-md-6">
      <div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 ">  
			 <label class="control-label pull-right text-right"
					for="txtFldDlgprojIncAssRoi">
					 ROI  </label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
           <div class="fld-resp-sm input-group input-group-sm" >  
					                <input  type="text"  name="txtFldDlgprojIncAssRoi"
							id="txtFldDlgprojIncAssRoi" class="form-control numbers clsfipaSpouse applyEvntpCent3" />
							 <span class="input-group-addon">
					                <span class="glyphicon" id="symbolprCent"></span>
					                </span>
							</div>	  
            </div> 
            </div>
      </div> 
      
      <div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 ">  
			 <label class="control-label mandFldastrks pull-right text-right"
					for="selDlgprojIncAssAgeBsOn">  Age Based On*</label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6">  
					 <select class="form-control fld-resp-sm" id="selDlgprojIncAssAgeBsOn" name="selDlgprojIncAssAgeBsOn">
							<option value="">--SELECT--</option>
							<option value="SELF">SELF</option>
							<option value="SPOUSE">SPOUSE</option>
				 	</select> 
            </div> 
            </div>
      </div> 
      
       <div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 ">  
			   <label class="control-label mandFldastrks pull-right text-right" for="txtFldDlgprojIncAssAgePaySts">
				   Age payment starts*</label>  
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
           <div class="input-group input-group-sm fld-resp-sm"> 
				 <input type="text" name="txtFldDlgprojIncAssAgePaySts" id="txtFldDlgprojIncAssAgePaySts"
					class="form-control numbers applyEvntYrs"   /> 
					<div class="input-group-addon" > 
               <span class="glyphicon" id="symbolYrs"></span> </div>
					</div>
            </div> 
            </div>
      </div> 
      
      
       <div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 ">  
			   <label class="control-label pull-right text-right" for="txtFldDlgprojIncAssAgePayends"> 
			   Age payment ends  </label>  
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
           <div class="input-group input-group-sm fld-resp-sm"> 
				 <input type="text" name="txtFldDlgprojIncAssAgePayends" id="txtFldDlgprojIncAssAgePayends"
					class="form-control numbers applyEvntYrs"   /> 
					<div class="input-group-addon"  > 
               <span class="glyphicon" id="symbolYrs"></span> </div>
					</div>
            </div> 
            </div>
      </div> 
       
      <div class="form-group"> 
				 <input type="hidden" name="txtFldDlgprojIncAssId" id="txtFldDlgprojIncAssId" /> 
				 <input type="hidden" name="txtFldDlgprojIncAssCrtdBy" /> 
				 <input type="hidden" name="txtFldDlgprojIncAssCrtdDate" /> 
	 </div>	
      
      
      </div>    
           
        
      </fieldset> 
      </div>
      <div class="modal-footer">  
        <div class="btnStyle"><button type="button"  class="btn BtnFIPASRCH StylishSRCH" >
					      <span class="txt">Ok</span>
					      <span class="round"><i class="fa fa-check"></i></span>
					    </button>
					    <button type="button"  class="btn BtnFIPACAN StylishCAN"   data-dismiss="modal">
					      <span class="txt">Cancel</span>
					      <span class="round"><i class="fa fa-times"></i></span>
					    </button></div>
		   
      </div>
    </div>
  </div>
</div>
 
	
<!-- #######################################  Projection on Income & Income Asset on ret Dialog box  ########################################################## -->   	
	  
<div class="modal fade" id="rdprojOfIncDets_Dialog" style="display: none"  tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog scrollModelBodyWidth1000" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel"></h4> 
      </div>
      <div class="modal-body">
     <fieldset class="fieldsetClsborder">
      
     <div class="col-md-6">
		<div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 ">  
			  <label class="control-label mandFldastrks pull-right text-right"
					for="selDlgProjIncDesc">
				Description*
				</label> 
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
             <select name="txtFldDlgProjIncDesc" id="txtFldDlgProjIncDesc"
					class="form-control" >
					<option value="">--SELECT--</option>
					<option value="PAM5">PAM5</option>
					<option value="TMLS PAYCHECK">TMLS PAYCHECK</option>
					</select>  
            </div> 
            </div>
      </div>
      
      <div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 ">  
			  <label class="control-label mandFldastrks pull-right text-right"
					for="selDlgProjIncClsfy"> Classification*
				</label> 
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
             <select class="form-control" id="selDlgProjIncClsfy" name="selDlgProjIncClsfy">
							<option value="">--SELECT--</option>
							<c:if test="${not empty RD_PROJINV_CLSFY_LIST}">
						<c:forEach var="projInvclslist" items="${RD_PROJINV_CLSFY_LIST}">
							<option value="${projInvclslist}">${projInvclslist}</option>
						</c:forEach>
					</c:if>
				</select> 
            </div> 
            </div>
      </div>
      
      
      <div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 ">  
			  <label class="control-label mandFldastrks pull-right text-right"
					for="selDlgProjIncSrcOfFd"> Source Of Funds*
				</label> 
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
             <select class="form-control" id="selDlgProjIncSrcOfFd" name="selDlgProjIncSrcOfFd">
							<option value="">--SELECT--</option>
							<c:if test="${not empty RD_SOURCEOFFUNDS_LIST}">
						<c:forEach var="srcoffdlist" items="${RD_SOURCEOFFUNDS_LIST}">
							<option value="${srcoffdlist}">${srcoffdlist}</option>
						</c:forEach>
					</c:if>
				</select> 
            </div> 
            </div>
      </div>
      
      <div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 ">  
			 <label class="control-label mandFldastrks pull-right text-right"
					for="txtFldDlgProjIncFdAdd">Funds Added*</label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
             <div class="input-group input-group-sm fld-resp-md">
					<div class="input-group-addon" > 
               <span class="glyphicon" id="symbolUsd"></span> </div>
							<input type='text' class="form-control numbers applyEvntUsd" 
							id="txtFldDlgProjIncFdAdd" name="txtFldDlgProjIncFdAdd" /> 
					</div>
            </div> 
            </div>
      </div>      
      
      
      <div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 ">  
			 <label class="control-label mandFldastrks pull-right text-right"
					for="txtFldDlgProjIncIncome">Income*</label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
             <div class="input-group input-group-sm fld-resp-md">
					<div class="input-group-addon" > 
               <span class="glyphicon" id="symbolUsd"></span> </div>
							<input type='text' class="form-control numbers applyEvntUsd" 
							id="txtFldDlgProjIncIncome" name="txtFldDlgProjIncIncome" /> 
					</div>
            </div> 
            </div>
      </div> 
      
      
      </div>
      
      
      <div class="col-md-6">
      
       <div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 ">  
			   <label class="control-label mandFldastrks pull-right text-right"
					for="txtFldDlgProjIncStrtYr"> Year Start from retirement*</label>  
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
           <div class="input-group input-group-sm fld-resp-mm"> 
				 <input type="text" name="txtFldDlgProjIncStrtYr" id="txtFldDlgProjIncStrtYr"
					class="form-control numbers applyEvntYrs"   /> 
					<div class="input-group-addon" > 
               <span class="glyphicon" id="symbolYrs"></span> </div>
					</div>
            </div> 
            </div>
      </div> 
      
      
       <div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 ">  
			   <label class="control-label mandFldastrks pull-right text-right"
					for="txtFldDlgProjIncStrtAge">  Start Age*</label>  
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
           <div class="input-group input-group-sm fld-resp-mm"> 
				 <input type="text" name="txtFldDlgProjIncStrtAge" id="txtFldDlgProjIncStrtAge"
					class="form-control numbers applyEvntYrs"   /> 
					<div class="input-group-addon"  > 
               <span class="glyphicon" id="symbolYrs"></span> </div>
					</div>
            </div> 
            </div>
      </div> 
      
       
      <div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 ">  
			 <label class="control-label mandFldastrks pull-right text-right"
					for="txtFldDlgProjIncNoofyr"> No of years*</label> 
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
           <div class="input-group input-group-sm fld-resp-mm"> 
				 <input type="text" name="txtFldDlgProjIncNoofyr" id="txtFldDlgProjIncNoofyr"
					class="form-control numbers applyEvntYrs"   /> 
					<div class="input-group-addon" > 
               <span class="glyphicon" id="symbolYrs"></span> </div>
					</div>
            </div> 
            </div>
      </div>
       
        <div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 ">  
			 <label class="control-label mandFldastrks pull-right text-right"
					for="txtFldDlgProjIncRate"> Interest Rate*</label> 
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
           <div class="input-group input-group-sm"> 
						<input type="text" name="txtFldDlgProjIncRate" id="txtFldDlgProjIncRate"
					onmouseover="fipaTooltip(this);"  
					class="form-control numbers applyEvntpCent3" 
					/> 
					 <span class="input-group-addon">
					              <span class="glyphicon" id="symbolprCent"></span>
					         </span>
					</div>
            </div> 
            </div>
      </div>
      <div class="form-group"> 
				 <input type="hidden" name="" /> 
				 <input type="hidden" name="" /> 
				 <input type="hidden" name="" /> 
	 </div>	
      
      
      </div>    
        
      </fieldset> 
      </div>
    <div class="modal-footer">  
        <div class="btnStyle"><button type="button"  class="btn BtnFIPASRCH StylishSRCH" >
					      <span class="txt">Ok</span>
					      <span class="round"><i class="fa fa-check"></i></span>
					    </button>
					    <button type="button"  class="btn BtnFIPACAN StylishCAN"   data-dismiss="modal">
					      <span class="txt">Cancel</span>
					      <span class="round"><i class="fa fa-times"></i></span>
					    </button></div>
		   
      </div>
    </div>
  </div>
</div>
 
<!-- ############################## MODEL 1 ###################################################### -->

<div class="modal fade" id="OthRet_Dialog" style="display: none"  tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog scrollModelBodyWidth1000" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel"></h4> 
      </div>
      <div class="modal-body">
     <fieldset class="fieldsetClsborder">
      <div class="clearspace20"></div>
     <div class="col-md-6">
		<div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 ">  
			  <label class="control-label mandFldastrks pull-right text-right"
					for="txtFldDlgORtyofpay">Description*
				</label> 
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
             <input type='text' class="form-control" id="txtFldDlgORtyofpay" name="txtFldDlgORtyofpay" onmouseover="fipaTooltip(this);"   maxlength="150" /> 
		  </div> 
            </div>
      </div>
      
      
      <div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 ">  
			  <label class="control-label pull-right text-right"
					for="txtFldDlgORAnlExp">
					 Annual Expenditure 
				</label> 
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
             <div class="input-group input-group-sm fld-resp-md">
					<div class="input-group-addon" > 
               <span class="glyphicon" id="symbolUsd"></span> </div>
							<input type='text' class="form-control numbers applyEvntUsd"  onmouseover="fipaTooltip(this);"  
							id="txtFldDlgORAnlExp" name="txtFldDlgORAnlExp" /> 
					</div>
            </div> 
            </div>
      </div>
      
      <div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 ">  
			  <label class="control-label mandFldastrks pull-right text-right"
					for="selDlgORFreq">Frequency* 
				</label> 
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
             <select class="form-control fld-resp-sm" id="selDlgORFreq" name="selDlgORFreq" onmouseover="fipaTooltip(this);"  >
							<option value="">--SELECT--</option>
							<option value="REGULAR">REGULAR</option>
							<option value="SINGLE">SINGLE</option>
				 	</select> 
            </div> 
            </div>
      </div>
      
      
      
      
      <div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 ">  
			 <label class="control-label pull-right text-right"
					for="txtFldDlgOREslrate">
					 Escalation Rate  </label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
           <div class="input-group input-group-sm fld-resp-mm" >  
					                <input  type="text"  name="txtFldDlgOREslrate" id="txtFldDlgOREslrate" 
					                class="form-control numbers applyEvntpCent3" onmouseover="fipaTooltip(this);"  />
							 <span class="input-group-addon">
					                <span class="glyphicon" id="symbolprCent"></span>
					                </span>
							</div>	  
            </div> 
            </div>
      </div>      
        
      </div>
      
      
      <div class="col-md-6">
      <div class="form-group">
	<div class="row" >
	<div class="col-md-4 col-sm-6 col-xs-6 ">  
			 <label class="control-label mandFldastrks pull-right text-right"
					for="selDlgORAgeBsOn">Age Based On*</label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6">  
					 <select class="form-control fld-resp-sm" id="selDlgORAgeBsOn" name="selDlgORAgeBsOn" onmouseover="fipaTooltip(this);"  >
							<option value="">--SELECT--</option>
							<option value="SELF">SELF</option>
							<option value="SPOUSE">SPOUSE</option>
				 	</select> 
            </div> 
            </div>
      </div> 
      
      <!--  <div class="form-group">
	<div class="row" >
	<div class="col-md-4 col-sm-6 col-xs-6 ">  
			   <label class="control-label mandFldastrks mandFldastrks pull-right text-right" 
			   for="txtFldDlgORAgePaySts">
				 Age payment starts*</label>  
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
            <div class="autocomplete input-group input-group-sm fld-resp-sm"> 
    			<input type="text" name="txtFldDlgORAgePaySts"  id="txtFldDlgORAgePaySts"  
    			class="form-control numbers applyEvntYrs"   onmouseover="fipaTooltip(this);"  maxlength="20"/>
					<div class="input-group-addon" > 
               <span class="glyphicon" id="symbolYrs"></span> </div>
					</div> 
            </div> 
            </div>
      </div>  -->
      
       <div class="form-group">
      <div class="row">
	<div class="col-md-4 col-sm-6 col-xs-6 ">  
			   <label class="control-label mandFldastrks mandFldastrks pull-right text-right" for="txtFldDlgORAgePaySts">
				 Age at Payment*</label>  
             </div> 
		<div class="col-md-3 col-sm-6 col-xs-6"> 
            <div class="autocomplete input-group input-group-sm fld-resp-sm"> 
    			<input type="text" name="txtFldDlgORAgePaySts" id="txtFldDlgORAgePaySts" class="form-control numbers applyEvntYrs" onmouseover="fipaTooltip(this);" maxlength="3" data-hasqtip="170">
					<div class="input-group-addon"> 
               <span class="glyphicon addYearSign" id="symbolYrs"></span> </div>
					</div>
            </div>
            <div class="col-md-1 col-sm-6 col-xs-6"> to </div> 
    
  		  <div class="col-md-3 col-sm-6 col-xs-6"> 
             <div class="input-group input-group-sm fld-resp-sm"> 
				 <input type="text" name="txtFldDlgORAgePayends" id="txtFldDlgORAgePayends" class="form-control numbers applyEvntYrs" onmouseover="fipaTooltip(this);" maxlength="3" data-hasqtip="175"> 
					<div class="input-group-addon"> 
               <span class="glyphicon addYearSign" id="symbolYrs"></span> </div>
					</div>  
            </div>
            </div>
            </div>
            
            
      <!--  <div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 ">  
			   <label class="control-label pull-right text-right" for="txtFldDlgORAgePayends">
			     Age payment ends  </label>  
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
             <div class="input-group input-group-sm fld-resp-sm"> 
				 <input type="text" name="txtFldDlgORAgePayends" id="txtFldDlgORAgePayends"
					class="form-control numbers applyEvntYrs"  onmouseover="fipaTooltip(this);"   maxlength="20"/> 
					<div class="input-group-addon"  > 
               <span class="glyphicon" id="symbolYrs"></span> </div>
					</div>  
            </div> 
            </div>
      </div>  -->
       
       <div class="form-group">
							<div class="row">
								<div class="col-md-4 col-sm-6 col-xs-6">
									<label class="control-label pull-right text-right" for="txtFldDlgORRemarks"> 
									Remarks</label>
								</div>
								<div class="col-md-7 col-sm-6 col-xs-6">
									<textarea name="txtFldDlgORRemarks" id="txtFldDlgORRemarks" class="form-control" rows="3" maxlength="300"></textarea>


								</div>
							</div>
						</div>
						
      <div class="form-group"> 
				 <input type="hidden" name="txtFldDlgORId" id="txtFldDlgORId" /> 
				 <input type="hidden" name="txtFldDlgORCrtdBy" id="txtFldDlgORCrtdBy"/> 
				 <input type="hidden" name="txtFldDlgORCrtdDate" id="txtFldDlgORCrtdDate"/>
				 <input type="hidden" name="txtFldDlgORMode" id="txtFldDlgORMode"/> 
	 </div>	
      
      
      </div>    
        
      </fieldset> 
      </div>
     <div class="modal-footer">  
        <div class="btnStyle"><button type="button"  class="btn BtnFIPASRCH StylishSRCH" >
					      <span class="txt">Ok</span>
					      <span class="round"><i class="fa fa-check"></i></span>
					    </button>
					    <button type="button"  class="btn BtnFIPACAN StylishCAN"   data-dismiss="modal">
					      <span class="txt">Cancel</span>
					      <span class="round"><i class="fa fa-times"></i></span>
					    </button></div>
		   
      </div>
    </div>
  </div>
</div>
 
	
<!-- ############################## MODEL 2 ###################################################### -->  
<div class="modal fade" id="IncRet_Dialog" style="display: none"  tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog scrollModelBodyWidth1000" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel"></h4> 
      </div>
      <div class="modal-body">
     <fieldset class="fieldsetClsborder">
      
     <div class="col-md-6">
		<div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 ">  
			  <label class="control-label mandFldastrks pull-right text-right"
					for="txtFldDlgIRClsfy">Classification*
				</label> 
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
              <input type='text' class="form-control" id="txtFldDlgIRClsfy" name="txtFldDlgIRClsfy"  onmouseover="fipaTooltip(this);"   maxlength="150"/> 
		     </div> 
            </div>
      </div>
      
      <div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 ">  
			  <label class="control-label pull-right text-right" for="txtFldDlgIRDesc">
					 Description 
				</label> 
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
               <input type='text' class="form-control" id="txtFldDlgIRDesc" name="txtFldDlgIRDesc" onmouseover="fipaTooltip(this);"   maxlength="150"/> 
		      </div> 
            </div>
      </div>
      
      
      <div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 ">  
			  <label class="control-label mandFldastrks pull-right text-right"
					for="selDlgIRFreq">Frequency*
				</label> 
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
              <select name="selDlgIRFreq"  id="selDlgIRFreq" class="form-control fld-resp-sm" onmouseover="fipaTooltip(this);"  >
              <option value="">--SELECT--</option>
              <option value="SINGLE">SINGLE</option>
              <option value="REGULAR">REGULAR</option>
              </select>
            </div> 
            </div>
      </div>
      
      <div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 ">  
			 <label class="control-label pull-right text-right" for="txtFldDlgIRAmtofInc">
				 	 Amount of income  </label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
             <div class="input-group input-group-sm fld-resp-mm">
					<div class="input-group-addon" > 
               <span class="glyphicon" id="symbolUsd"></span> </div>
							<input type='text' class="form-control numbers applyEvntUsd" 
							id="txtFldDlgIRAmtofInc" name="txtFldDlgIRAmtofInc"  onmouseover="fipaTooltip(this);"   /> 
					</div>
            </div> 
            </div>
      </div>      
       
       
       <div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 ">  
			 <label class="control-label pull-right text-right"
					for="txtFldDlgIREslrate">
				  Escalation Rate  </label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
           <div class="input-group input-group-sm fld-resp-sm" >  
					                <input  type="text"  name="txtFldDlgIREslrate" id="txtFldDlgIREslrate" 
					                class="form-control numbers applyEvntpCent3"  onmouseover="fipaTooltip(this);"  />
							 <span class="input-group-addon">
					                <span class="glyphicon" id="symbolprCent"></span>
					                </span>
							</div>	  
            </div> 
            </div>
      </div>  
      
      </div>
      
      
      <div class="col-md-6">
      <div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 ">  
			 <label class="control-label pull-right text-right"
					for="txtFldDlgIRRoi">
				  ROI  </label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
           <div class="input-group input-group-sm fld-resp-sm" >  
					                <input  type="text" name="txtFldDlgIRRoi" id="txtFldDlgIRRoi" 
					                class="form-control numbers applyEvntpCent3"  onmouseover="fipaTooltip(this);"   />
							 <span class="input-group-addon">
					                <span class="glyphicon" id="symbolprCent"></span>
					                </span>
							</div>	  
            </div> 
            </div>
      </div>  
      
      
      <div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 ">  
			 <label class="control-label mandFldastrks pull-right text-right"
					for="selDlgIRAgeBsOn">Age Based On*</label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6">  
					 <select class="form-control fld-resp-sm" id="selDlgIRAgeBsOn" name="selDlgIRAgeBsOn"  onmouseover="fipaTooltip(this);"  >
							<option value="">--SELECT--</option>
							<option value="SELF">SELF</option>
							<option value="SPOUSE">SPOUSE</option>
				 	</select> 
            </div> 
            </div>
      </div> 
      
       <div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 ">  
			   <label class="control-label mandFldastrks pull-right text-right" for="txtFldDlgIRAgePaySts">
				   Age payment starts*</label>  
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
           <div class="input-group input-group-sm fld-resp-sm"> 
				 <input type="text" name="txtFldDlgIRAgePaySts" id="txtFldDlgIRAgePaySts"
					class="form-control numbers applyEvntYrs"   onmouseover="fipaTooltip(this);"  maxlength="20" /> 
					<div class="input-group-addon" > 
               <span class="glyphicon" id="symbolYrs"></span> </div>
					</div>
            </div> 
            </div>
      </div> 
      
      
       <div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 ">  
			   <label class="control-label pull-right text-right" for="txtFldDlgIRAgePayends"> 
			   Age payment end </label>  
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
           <div class="input-group input-group-sm fld-resp-sm"> 
				 <input type="text" name="txtFldDlgIRAgePayends" id="txtFldDlgIRAgePayends"
					class="form-control numbers applyEvntYrs"   onmouseover="fipaTooltip(this);"  maxlength="20" /> 
					<div class="input-group-addon"  > 
               <span class="glyphicon" id="symbolYrs"></span> </div>
					</div>
            </div> 
            </div>
      </div> 
       
      <div class="form-group"> 
				 <input type="hidden" name="txtFldDlgIRId" id="txtFldDlgIRId"/> 
				 <input type="hidden" name="txtFldDlgIRCrtdBy" id="txtFldDlgIRCrtdBy"/> 
				 <input type="hidden" name="txtFldDlgIRCrtdDate" id="txtFldDlgIRCrtdDate" /> 
				 <input type="hidden" name="txtFldDlgIRMode" id="txtFldDlgIRMode" /> 
	 </div>	
      
      
      </div>    
           
        
      </fieldset> 
      </div>
      <div class="modal-footer">  
        <div class="btnStyle"><button type="button"  class="btn BtnFIPASRCH StylishSRCH" >
					      <span class="txt">Ok</span>
					      <span class="round"><i class="fa fa-check"></i></span>
					    </button>
					    <button type="button"  class="btn BtnFIPACAN StylishCAN"   data-dismiss="modal">
					      <span class="txt">Cancel</span>
					      <span class="round"><i class="fa fa-times"></i></span>
					    </button>
					     <!-- <button type="button" id="incRecRtrmntCancelbtn" class="btn BtnFIPASRCH StylishSRCH" >
					      <span class="txt">Cancel</span>
					      <span class="round"><i class="fa fa-check"></i></span>
					    </button> --></div>
		   
      </div>
    </div>
  </div>
</div>
 
 
	
	
<!-- ############################## MODEL 3 ###################################################### -->  
<div class="modal fade" id="IncAssRet_Dialog" style="display: none"  tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog scrollModelBodyWidth1000" role="document">
    <div class="modal-content">
      <div class="modal-header">
     <!--  <div class="btnStyle" style="text-align-last: end;">
                <button type="button" id="incAsstRetCancelbtn" class="btn BtnFIPASRCH StylishSRCH" >
					      <span class="txt">Cancel</span>
					      <span class="round"><i class="fa fa-check"></i></span>
				 </button>
			</div> -->
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel"></h4> 
      </div>
      <div class="modal-body">
     <fieldset class="fieldsetClsborder"> 
     <div class="clearspace20"></div>
     <div class="col-md-6">
      <div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 ">  
			  <label class="control-label pull-right text-right" for="txtFldDlgIncAssDesc">
					 Description 
				</label> 
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
               <input type='text' class="form-control" id="txtFldDlgIncAssDesc" name="txtFldDlgIncAssDesc" maxlength="150"/> 
		      </div> 
            </div>
      </div>
      
      <div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 ">  
			  <label class="control-label mandFldastrks pull-right text-right"
					for="txtFldDlgIncAssClsfy">Classification*
				</label> 
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
            <!--   <input type='text' class="form-control" id="txtFldDlgIncAssClsfy" name="txtFldDlgIncAssClsfy" maxlength="150"/>  -->
            <select class="form-control fld-resp-sm" id="txtFldDlgIncAssClsfy" name="txtFldDlgIncAssClsfy" style="width:202px;">
							<option value="">--SELECT--</option>
							<option value="CPF Life">CPF Life</option>
							<option value="Investment">Investment</option>
							<option value="Life Insurance">Life Insurance</option>
							<option value="Properties">Properties</option>
							<option value="SRS">SRS</option>
							<option value="SRS/ Annual Withdrawal">SRS/ Annual Withdrawal</option>
							<option value="Others">Others</option>
				 	</select>
		     </div> 
            </div>
      </div>
      
      
         <div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 ">  
			 <label class="control-label pull-right text-right" for="txtFldDlgIncAssAmtofInc">
				 Annual Income Amount</label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
             <div class="input-group input-group-sm fld-resp-md">
					<div class="input-group-addon" > 
               <span class="glyphicon" id="symbolUsd"></span> </div>
							<input type='text' class="form-control numbers applyEvntUsd" 
							id="txtFldDlgIncAssAmtofInc" name="txtFldDlgIncAssAmtofInc" /> 
					</div>
            </div> 
            </div>
      </div> 
      
      <div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 ">  
			  <label class="control-label mandFldastrks pull-right text-right"
					for="selDlgIncAssFreq">Frequency*
				</label> 
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
              <select name="selDlgIncAssFreq" id="selDlgIncAssFreq" class="form-control fld-resp-sm">
              <option value="">--SELECT--</option>
              <option value="SINGLE">SINGLE</option>
              <option value="REGULAR">REGULAR</option>
              </select>
            </div> 
            </div>
      </div>
      
      
      </div>
      
      
      <div class="col-md-6">
      
        <div class="form-group">
	<div class="row" >
	<div class="col-md-4 col-sm-6 col-xs-6 ">  
			 <label class="control-label pull-right text-right"
					for="txtFldDlgIncAssEslrate">
				  Escalation Rate  </label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
           <div class="fld-resp-sm input-group input-group-sm" >  
					                <input  type="text" name="txtFldDlgIncAssEslrate"
							id="txtFldDlgIncAssEslrate" class="form-control numbers applyEvntpCent3" />
							 <span class="input-group-addon">
					                <span class="glyphicon" id="symbolprCent"></span>
					                </span>
							</div>	  
            </div> 
            </div>
      </div>
      
      <div class="form-group">
	<div class="row" >
	<div class="col-md-4 col-sm-6 col-xs-6 ">  
			 <label class="control-label pull-right text-right"
					for="txtFldDlgIncAssRoi">
					   ROI   </label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
           <div class="fld-resp-sm input-group input-group-sm" >  
					                <input  type="text"  name="txtFldDlgIncAssRoi"
							id="txtFldDlgIncAssRoi" class="form-control numbers applyEvntpCent3" />
							 <span class="input-group-addon">
					                <span class="glyphicon" id="symbolprCent"></span>
					                </span>
							</div>	  
            </div> 
            </div>
      </div> 
      
      <div class="form-group">
	<div class="row" >
	<div class="col-md-4 col-sm-6 col-xs-6 ">  
			 <label class="control-label mandFldastrks pull-right text-right"
					for="selDlgIncAssAgeBsOn">Age Based On*</label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6">  
					 <select class="form-control fld-resp-sm" id="selDlgIncAssAgeBsOn" name="selDlgIncAssAgeBsOn">
							<option value="">--SELECT--</option>
							<option value="SELF">SELF</option>
							<option value="SPOUSE">SPOUSE</option>
				 	</select> 
            </div> 
            </div>
      </div> 
      
      <!--  <div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 ">  
			   <label class="control-label mandFldastrks pull-right text-right" for="txtFldDlgIncAssAgePaySts">
				 Age payment starts*</label>  
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
           <div class="input-group input-group-sm fld-resp-sm"> 
				 <input type="text" name="txtFldDlgIncAssAgePaySts" id="txtFldDlgIncAssAgePaySts"
					class="form-control numbers applyEvntYrs"   maxlength="20"/> 
					<div class="input-group-addon" > 
               <span class="glyphicon" id="symbolYrs"></span> </div>
					</div>
            </div> 
            </div>
      </div> 
      
      
       <div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 ">  
			   <label class="control-label pull-right text-right" for="txtFldDlgIncAssAgePayends"> 
			   Age payment ends </label>  
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
           <div class="input-group input-group-sm fld-resp-sm"> 
				 <input type="text" name="txtFldDlgIncAssAgePayends" id="txtFldDlgIncAssAgePayends"
					class="form-control numbers applyEvntYrs" maxlength="20"  /> 
					<div class="input-group-addon"  > 
               <span class="glyphicon" id="symbolYrs"></span> </div>
					</div>
            </div> 
            </div>
      </div>  -->
       
    
  <div class="form-group">
      <div class="row">
	<div class="col-md-4 col-sm-6 col-xs-6 ">  
			   <label class="control-label mandFldastrks mandFldastrks pull-right text-right" for="txtFldDlgIncAssAgePaySts">
				 Age at Payment*</label>  
             </div> 
		<div class="col-md-3 col-sm-6 col-xs-6"> 
            <div class="autocomplete input-group input-group-sm fld-resp-sm"> 
    			<input type="text" name="txtFldDlgIncAssAgePaySts" id="txtFldDlgIncAssAgePaySts" class="form-control numbers applyEvntYrs" onmouseover="fipaTooltip(this);" maxlength="20" >
					<div class="input-group-addon"> 
               <span class="glyphicon" id="symbolYrs"></span> </div>
					</div>
            </div>
            <div class="col-md-1 col-sm-6 col-xs-6"> to </div> 
    
  		  <div class="col-md-3 col-sm-6 col-xs-6"> 
             <div class="input-group input-group-sm fld-resp-sm"> 
				 <input type="text" name="txtFldDlgIncAssAgePayends" id="txtFldDlgIncAssAgePayends" class="form-control numbers applyEvntYrs" onmouseover="fipaTooltip(this);" maxlength="20" > 
					<div class="input-group-addon"> 
               <span class="glyphicon" id="symbolYrs"></span> </div>
					</div>  
            </div>
            </div>
            </div>
            
            
      <div class="form-group"> 
				 <input type="hidden" name="txtFldDlgIncAssId" id="txtFldDlgIncAssId"/> 
				 <input type="hidden" name="txtFldDlgIncAssCrtdBy" id="txtFldDlgIncAssCrtdBy"/> 
				 <input type="hidden" name="txtFldDlgIncAssCrtdDate" id="txtFldDlgIncAssCrtdDate"/> 
				 <input type="hidden" name="txtFldDlgIncAssRefId" id="txtFldDlgIncAssRefId"/> 
				 <input type="hidden" name="txtFldDlgIncAssMode" id="txtFldDlgIncAssMode"/>
	 </div>	
      
      
      </div>    
           
        
      </fieldset> 
      </div>
      <div class="modal-footer">  
        <div class="btnStyle"><button type="button"  class="btn BtnFIPASRCH StylishSRCH" >
					      <span class="txt">Ok</span>
					      <span class="round"><i class="fa fa-check"></i></span>
					    </button>
					    <button type="button"  class="btn BtnFIPACAN StylishCAN"   data-dismiss="modal">
					      <span class="txt">Cancel</span>
					      <span class="round"><i class="fa fa-times"></i></span>
					    </button>
					    <!-- <button type="button" id="incAsstRetCancelbtn" class="btn BtnFIPASRCH StylishSRCH" >
					      <span class="txt">Cancel</span>
					      <span class="round"><i class="fa fa-check"></i></span>
				 </button> -->
				 </div>
		   
      </div>
    </div>
  </div>
</div>
 
	
	
<!-- ############################## MODEL 3 ###################################################### -->  
<div class="modal fade" id="RDAnalysFlw_Dialog" style="display: none"  tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog scrollModelBodyWidth1000" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel"></h4> 
      </div>
      <div class="modal-body">
     <fieldset class="fieldsetClsborder">
      
     <div class="col-md-6">
		<div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 ">  
			  <label class="control-label mandFldastrks pull-right text-right"
					for="txtFldDlgRDAlyFwDesc"> Description*
				</label> 
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
              <input type='text' class="form-control" id="txtFldDlgRDAlyFwDesc" name="txtFldDlgRDAlyFwDesc" maxlength="150"/> 
		     </div> 
            </div>
      </div>
      
      <div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 ">  
			  <label class="control-label mandFldastrks pull-right text-right" for="txtFldDlgRDAlyFwClsfy">
					 Classification*
				</label> 
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
               <input type='text' class="form-control" id="txtFldDlgRDAlyFwClsfy" name="txtFldDlgRDAlyFwClsfy" maxlength="150"/> 
		      </div> 
            </div>
      </div>
      
      
      <div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 ">  
			  <label class="control-label mandFldastrks pull-right text-right"
					for="selDlgSrcOfFd"> Source of Funds*
				</label> 
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
              <select name="selDlgSrcOfFd" id="selDlgSrcOfFd" class="form-control fld-resp-sm">
              <option value="">--SELECT--</option>
              <option value="New Funds">New Funds</option>
              <option value="Current Bank Acc">Current Bank Acc</option>
              </select>
            </div> 
            </div>
      </div>
      
      
      <div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 ">  
			 <label class="control-label pull-right text-right" for="txtFldDlgFdsAdded">
				  Funds Added  </label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
             <div class="input-group input-group-sm fld-resp-md">
					<div class="input-group-addon" > 
               <span class="glyphicon" id="symbolUsd"></span> </div>
							<input type='text' class="form-control numbers applyEvntUsd" 
							id="txtFldDlgFdsAdded" name="txtFldDlgFdsAdded" /> 
					</div>
            </div> 
            </div>
      </div> 
      
      <div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 ">  
			 <label class="control-label pull-right text-right" for="txtFldDlgIncome">
				  Income  </label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
             <div class="input-group input-group-sm fld-resp-md">
					<div class="input-group-addon" > 
               <span class="glyphicon" id="symbolUsd"></span> </div>
							<input type='text' class="form-control numbers applyEvntUsd" 
							id="txtFldDlgIncome" name="txtFldDlgIncome" /> 
					</div>
            </div> 
            </div>
      </div>      
       
       
       
      
      </div>
      
      
      <div class="col-md-6">
      
      <div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 ">  
			 <label class="control-label pull-right text-right"
					for="txtFldDlgYrStartFrmRet">
				  Yr start from retirement  </label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
           <div class="fld-resp-sm input-group input-group-sm" >  
					                <input  type="text" name="txtFldDlgYrStartFrmRet"
							id="txtFldDlgYrStartFrmRet" class="form-control numbers applyEvntYrs" />
							 <span class="input-group-addon">
					                <span class="glyphicon" id="symbolYrs"></span>
					                </span>
							</div>	  
            </div> 
            </div>
      </div>  
       
       
       
      <div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 ">  
			 <label class="control-label pull-right text-right"
					for="txtFldDlgStartAge">
				 Start Age</label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
           <div class="fld-resp-sm input-group input-group-sm" >  
					                <input  type="text" name="txtFldDlgStartAge"
							id="txtFldDlgStartAge" class="form-control numbers applyEvntYrs" />
							 <span class="input-group-addon">
					                <span class="glyphicon" id="symbolYrs"></span>
					                </span>
							</div>	  
            </div> 
            </div>
      </div>   
      
      <div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 ">  
			 <label class="control-label pull-right text-right"
					for="selDlgNoOfYrs">
				No of years </label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
           <div class="fld-resp-sm input-group input-group-sm" >  
					                <input  type="text" name="selDlgNoOfYrs"
							id="selDlgNoOfYrs" class="form-control numbers applyEvntYrs" />
							 <span class="input-group-addon">
					                <span class="glyphicon" id="symbolYrs"></span>
					                </span>
							</div>	  
            </div> 
            </div>
      </div> 
      
       <div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 ">  
			   <label class="control-label pull-right text-right" for="txtFldDlgIntrstRate">
				 Interest rate  </label>  
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
           <div class="input-group input-group-sm fld-resp-sm"> 
				 <input type="text" name="txtFldDlgIntrstRate" id="txtFldDlgIntrstRate"
					class="form-control numbers applyEvntpCent"   maxlength="20"/> 
					<div class="input-group-addon" > 
               <span class="glyphicon" id="symbolprCent"></span> </div>
					</div>
            </div> 
            </div>
      </div> 
      
      
        
      <div class="form-group"> 
				 <input type="hidden" name="txtFldDlgAlyRtFlwId" /> 
				 <input type="hidden" name="txtFldDlgAlyRtFlwCrtdBy" /> 
				 <input type="hidden" name="txtFldDlgAlyRtFlwCrtdDate" />   
	 </div>	
      
      
      </div>    
           
        
      </fieldset> 
      </div>
      <div class="modal-footer">  
        <div class="btnStyle"><button type="button"  class="btn BtnFIPASRCH StylishSRCH" >
					      <span class="txt">Ok</span>
					      <span class="round"><i class="fa fa-check"></i></span>
					    </button>
					    <button type="button"  class="btn BtnFIPACAN StylishCAN"   data-dismiss="modal">
					      <span class="txt">Cancel</span>
					      <span class="round"><i class="fa fa-times"></i></span>
					    </button></div>
		   
      </div>
    </div>
  </div>
</div>
<!-- ############################## Funds Transfer from CPF Account to CPF Life ###################################################### -->  
<div class="modal fade" id="cpflifePayout_Dialog" style="display: none"  tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel"></h4> 
      </div>
      <div class="modal-body">
     <fieldset class="fieldsetClsborder"> 
     <div class="col-md-12">
		<div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 ">  
			  <label class="control-label pull-right text-right"
					for="txtFldDlgcpfLfAge"> Age
				</label> 
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
             <div class="fld-resp-sm input-group input-group-sm" >  
				<input  type="text" name="txtFldDlgcpfLfAge" id="txtFldDlgcpfLfAge" 
							class="form-control numbers applyEvntYrs" />
							 <span class="input-group-addon">
					                <span class="glyphicon" id="symbolYrs"></span>
				             </span>
					</div>
				</div> 
            </div>
      </div>
      
      <div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 ">  
			  <label class="control-label pull-right text-right" for="txtFldDlgcpfLfType">
					 CPF Life Type
				</label> 
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
           	 <select name="txtFldDlgcpfLfType" id="txtFldDlgcpfLfType" class="form-control fld-resp-mm">
              <option value="">--SELECT--</option>  
              <c:if test="${not empty SDRS_PLAN_LIST}">
						<c:forEach var="sdrsplans" items="${SDRS_PLAN_LIST}">
							<option value="${sdrsplans.planCode}">${sdrsplans.planName}</option>
						</c:forEach>
					</c:if>
             </select> 
              </div> 
            </div>
      </div>
      
      
      <div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 ">  
			  <label class="control-label pull-right text-right"
					for="selDlgcpfLfPrem">CPF Life Premium
				</label> 
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
             <div class="input-group input-group-sm fld-resp-md">
					<div class="input-group-addon" > 
               <span class="glyphicon" id="symbolUsd"></span> </div>
							<input type='text' class="form-control numbers applyEvntUsd" 
							id="selDlgcpfLfPrem" name="selDlgcpfLfPrem" disabled="true"/> 
					</div>
            </div> 
            </div>
      </div>
      
      
      <div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 ">  
			 <label class="control-label pull-right text-right" for="txtFldDlgcpfLifePayInc">
				 CPF Life Payout Income</label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
             <div class="input-group input-group-sm fld-resp-md">
					<div class="input-group-addon" > 
               <span class="glyphicon" id="symbolUsd"></span> </div>
							<input type='text' class="form-control numbers applyEvntUsd" 
							id="txtFldDlgcpfLifePayInc" name="txtFldDlgcpfLifePayInc" disabled="true" /> 
					</div>
            </div> 
            </div>
      </div> 
      
      <div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 ">  
			 <label class="control-label pull-right text-right" for="txtFldDlgcpfLifeRA">
				  Funds Transferred From (RA)  </label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
             <div class="input-group input-group-sm fld-resp-md">
					<div class="input-group-addon" > 
               <span class="glyphicon" id="symbolUsd"></span> </div>
							<input type='text' class="form-control numbers applyEvntUsd" 
							id="txtFldDlgcpfLifeRA" name="txtFldDlgcpfLifeRA" disabled="true"/> 
					</div>
            </div> 
            </div>
      </div>     
      
      <div class="form-group"> 
				 <input type="hidden" name="txtFldDlgcpfLfId" id="txtFldDlgcpfLfId"/>  
				 <input type="hidden" name="txtFldDlgcpfLfMode" id="txtFldDlgcpfLfMode"/>  
	 </div>	 
        
      </div>
      
          
           
        
      </fieldset> 
      </div>
      <div class="modal-footer">  
        <div class="btnStyle"><button type="button"  class="btn BtnFIPASRCH StylishSRCH" >
					      <span class="txt">Ok</span>
					      <span class="round"><i class="fa fa-check"></i></span>
					    </button>
					    <button type="button"  class="btn BtnFIPACAN StylishCAN"   data-dismiss="modal">
					      <span class="txt">Cancel</span>
					      <span class="round"><i class="fa fa-times"></i></span>
					    </button></div>
		   
      </div>
    </div>
  </div>
</div>
	
  <a href="#" id="toTop" style="display: none;" title="Scroll Top">
  <span id="toTopHover" style="opacity: 0;"></span>To Top</a>




<!-- jQuery 3 -->
<script src="plugins/jquery/jquery-1.12.4.js"></script>
<!-- jQuery UI v1.12.1-->
<!-- <script src="plugins/jquery-ui/jquery-migrate-3.0.0.js"></script> -->
<script src="plugins/jquery-ui/jquery-ui.js"></script>
<!-- Resolve conflict in jQuery UI tooltip with Bootstrap tooltip -->
<script>
  $.widget.bridge('uibutton', $.ui.button);
</script>
<!-- Bootstrap 3.3.7 -->
<script src="plugins/bootstrap/js/bootstrap.min.js"></script>
<script src="plugins/bootstrap/js/bootstrap-multiselect.js"></script>
<script src="plugins/bootstrap/js/bootstrap3-typeahead.js"></script>

<!-- daterangepicker -->
<script src="plugins/moment/moment.min.js"></script>
<script src="plugins/bootstrap-daterangepicker/daterangepicker.js"></script>


<!-- datepicker -->
<script src="plugins/bootstrap-datepicker/js/bootstrap-datepicker.min.js"></script>
<script src="plugins/bootstrap-datepicker/js/bootstrap-datetimepicker.js"></script>
<!-- Bootstrap WYSIHTML5 -->
<script src="plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.js"></script>
<!-- Slimscroll -->
<script src="plugins/jquery-slimscroll/jquery.slimscroll.min.js"></script>
<!-- FastClick -->
<script src="plugins/fastclick/fastclick.js"></script>
<script src="plugins/fipa/js/fipalayout.js"></script>
<script src="plugins/color_picker/iro.js"></script>
<script src="plugins/color_picker/colorpicker.js"></script>

<script src="plugins/fipa/js/dialog_jquery.js"></script> 
<script src="plugins/fipa/js/fipa.mandatories.js"></script>

<script src="plugins/jquery-qtip/jquery.qtip.js"></script>
<script src="plugins/jquery-qtip/toastr.min.js"></script>

<!-- Datatable plugins --> 
<script src="plugins/datatable/jquery.dataTables.min.js"></script>  

<script src="plugins/datatable/latest/dataTables.fixedColumns.min.js"></script>
<script src="plugins/datatable/dataTables.keyTable.min.js"></script>
<script src="plugins/datatable/dataTables.select.min.js"></script>
<script src="plugins/datatable/dataTables.responsive.js"></script>

 <script src="plugins/d3_charts/d3.v5.js"></script> 
 <script src="plugins/d3_charts/c3.js"></script> 
 <script src="plugins/d3_charts/d3script.js"></script>   


	<script src="plugins/fipa/js/fipa.multiselect.js"></script>
	<script src="plugins/fipa/js/fipa.datatables.js"></script>

	<script src="plugins/fipa/js/datepicker.js"></script>


	<script src="plugins/fipa/js/fipa.common.js"></script>
	<script src="plugins/fipa/js/fipa.constants.js"></script>
	<script src="plugins/fipa/js/fipa.client.js"></script>
	<script src="plugins/fipa/js/fipa.dependant_new.js"></script>
	<script src="plugins/fipa/js/fipa.dependant.js"></script>
	<script src="plugins/fipa/js/fipa.savinginvestment.js"></script>
	 <script src="plugins/fipa/js/fipa.childparticulars.js"></script>
	<script src="plugins/fipa/js/fipa.childparticular_new.js"></script>
	<script src="plugins/fipa/js/fipa.fingoals.js"></script>  
	<script src="plugins/fipa/js/fipa.healthins.js"></script> 
	<script src="plugins/fipa/js/fipa.propownership.js"></script>
	<script src="plugins/fipa/js/fipa.vehownership.js"></script>	 
	<script src="plugins/fipa/js/fipa.advicerecom.js"></script>	
	<script src="plugins/fipa/js/fipa.assets.js"></script>
	<script src="plugins/fipa/js/fipa.areaofconcrn.js"></script>
	<script src="plugins/fipa/js/fipa.reasons.js"></script>	   
	<script src="plugins/fipa/js/genReport.js"></script>
	<script src="plugins/fipa/js/cpfdetails.js"></script>
	<script src="plugins/fipa/js/fipa.retirement.js"></script>
	<script src="plugins/fipa/js/retCpfPayout.js"></script>
	<script src="plugins/fipa/js/fipa.cashofbanks.js"></script>   
	<script src="plugins/fipa/js/fipa.srs.js"></script>  
	<script src="plugins/fipa/js/fipa.lifeins.js"></script>	
	<script src="plugins/fipa/js/fipa.newlife.js"></script> 
	<script src="plugins/fipa/js/fipa.lifeInsurance.js"></script>   
	<script src="plugins/fipa/js/fipa.investment.js"></script>  
	<script src="plugins/fipa/js/retEducationplg.js"></script>	
	<script src="plugins/fipa/js/fipa.attachment.js"></script>
	<script src="plugins/fipa/js/master.property.js"></script>  
	<script src="plugins/fipa/js/autoalter.js"></script>  
	<script src="plugins/fipa/js/fipa.fpmsclient.js"></script>   
	 
	 <!-- Retirement Cash Flow Projection -->
	<script src="plugins/fipa/js/rdcflw.ctCost.js" ></script> 
	<script src="plugins/fipa/js/rdcflw.inpIncme.js" ></script> 
	<script src="plugins/fipa/js/rdcflw.projOfInc.js" ></script> 
	<script src="plugins/fipa/js/rdcflw.anlysRtCsflw.js" ></script> 
	
	
	<script src='plugins/calendar/js/moment.min.js'></script>
	<script src='plugins/calendar/js/moment.js'></script>	
	<script src='plugins/calendar/js/fullcalendar.min.js'></script>   
	<script src='plugins/calendar/js/gcal.js'></script>   
	<script src='plugins/calendar/js/jquery-dateformat.js'></script> 
	<script src='plugins/calendar/js/fipa.calendar.js'></script> 
	
	<script src="plugins/jsPDF2/jspdf.debug.js" type="text/javascript" ></script>
	<script src="plugins/jsPDF2/jspdf.plugin.autotable.js"  type="text/javascript" ></script> 
	<script src="plugins/jsPDF2/html2canvas.min.js" type="text/javascript" ></script> 
	<script src="plugins/jsPDF2/rgbcolor.js" type="text/javascript"></script>
	<script src="plugins/jsPDF2/StackBlur.js" type="text/javascript" ></script>
	<script src="plugins/jsPDF2/canvg.js" type="text/javascript" ></script>
	<script src="plugins/jsPDF2/d3SvgToPng.js" type="text/javascript" ></script>      
        <script src="plugins/fipa/js/Chart.min.js"></script>
	<script src="plugins/fipa/js/hammer.min.js"></script>
	<script src="plugins/fipa/js/chartjs-plugin-zoom.js"></script>
	<script src="plugins/fipa/js/utils.js"></script>
	<script src="plugins/fipa/js/moment.min.js"></script>
	<script src="plugins/fipa/js/chartjs-plugin-labels.js"></script>
	<script src="plugins/fipa/js/Chart.js"></script>
	
	
	
<c:set var="skincolor" value="${LOGGED_USER_INFO.SKIN_COLOR}"/>	
<c:set var="hascolorchangeprvlg" value="${LOGGED_USER_INFO.COLOR_CHNG_PRVLG}"/>
<c:set var="hTxtSuccessMessage" value="${successMessage}"/>

<select name="selhidFundNames"
		id="selhidFundNames" class="form-control" style="display:none">
		<option value="">--SELECT--</option>
		<c:if test ="${not empty INV_FUNDNAME_LIST}">
		<c:forEach var="invfundnamelist" items="${INV_FUNDNAME_LIST}">
				<option value="${invfundnamelist[1]}">${invfundnamelist[2]}</option>
			</c:forEach>
		</c:if>
	</select>	

<script>
var lastSkinColor = "";
lastSkinColor = '${skincolor}';

var hasColorPrvlg = "";
hasColorPrvlg = '${hascolorchangeprvlg}';


 </script>
	
	<c:if test="${not empty successMessage}">
<input type="hidden" id="hTxtSuccessMessage" value="${successMessage}"/>
<script>
//var SUCCESSMSG=$("#hTxtSuccessMessage").val();
var SUCCESSMSG='${hTxtSuccessMessage}';
	applySuccessToastrAlert(SUCCESSMSG);

	
</script>
 </c:if> 

	<c:if test="${not empty NEW_PROFILE}">
		<script type="text/javascript">
			 newProfile = "<%=request.getAttribute("NEW_PROFILE")%>";
		</script>
	</c:if>

	<c:if test="${not empty FIPA_CUSTID}">
		<script type="text/javascript">
			FIPAFnaId = "<%=request.getAttribute("FIPA_CUSTID")%>";
		</script>
	</c:if>

	<c:if test="${not empty FIPA_MENUVARBLE}">
		<script type="text/javascript">
			FIPAMenu = "<%=request.getAttribute("FIPA_MENUVARBLE")%>";
		</script>
	</c:if>
	

<script type="text/javascript">

window.moveTo(0,0);
window.resizeTo(screen.width+2,screen.height+30)
window.moveTo(0,0);
window.offscreenBuffering=true;



$(document).on('click', '.option-btn', function () {
	console.log("--->document > click");
	$(this).toggleClass('open');
	$('.control-center').toggleClass('open');
});

 $(document).ready(function () {
	
	 
		$().UItoTop({ easingType: 'easeOutQuart' });
		BASE_URL="<%=request.getContextPath()%>";
		kyc_url = "<%=request.getAttribute("KYC_URL")%>";
		

		document.addEventListener('invalid', (function() {
			return function(e) {
				e.preventDefault();
			};
		})(), true);

		

		$('#successmsgdiv').delay(2000).fadeOut('blind');

    	$('.pagecontent:not(:first)').hide();
    
    	$('.sidebar-menu li a').click(function (event) {
        	event.preventDefault();

        	$(".sidebar-menu ul li").removeClass("active");
        	$(this).parent().siblings().removeClass('active');
        	 $(".treeview-menu").siblings().removeClass('active');
        	 $(".submenu").removeClass('submenuactive');

        	 //Color picker change - 19012020
        	 $(".sidebar-menu>li>a").each(function(){
        			//.css({'background-color':rgb})
        			$(this).css( "background-color" ,"");
        		});
        	 $(".treeview-menu>li>a").each(function(){
        			$(this).css( "background-color" ,"");
            	})
     		$(this).css("background-color",$('#colorSelMenuItem').val());
        	 
     		//Color picker change - 19012020

        	var limainmenu = $(this).parent().hasClass("mainmenu");
        	var lisubmenu = $(this).parent().hasClass("submenu");
        	        		
	        $('.pagecontent:not(:first)').hide();


			if(limainmenu || lisubmenu){
				var parentli = "";
				var content = $(this).attr('href');
				
				//console.log(content)
	            $(this).parent().addClass('active');

	            $("#hTxtMenuName").val(content);

	 	        if($("#hTxtMenuName").val() == "#searchpage"){
	        	   $("#screentittle").val("Profile Search");  
	        	   $('#btnPrevPge').hide();
	        	   $('#btnNxtPge').hide();
	        	   $("#liprevious").removeClass("fipaAttPreviousBtnstyle");
			}
			else if($("#hTxtMenuName").val() == "#typesofappln"){
				$("#screentittle").val("Types of Application");
				$('#btnPrevPge').hide();
				 $('#btnNxtPge').show();
				 $("#liprevious").removeClass("fipaAttPreviousBtnstyle");
			}
			else if($("#hTxtMenuName").val() == "#particular"){
				$("#screentittle").val("Particular");
				$('#btnPrevPge').show();
				 $('#btnNxtPge').show();
				 $("#liprevious").removeClass("fipaAttPreviousBtnstyle");
			}
			  else if($("#hTxtMenuName").val() == "#fingoalsdiv"){
				$("#screentittle").val("Financial Goals");
				$('#btnPrevPge').show();
				 $('#btnNxtPge').show();
				 $("#liprevious").removeClass("fipaAttPreviousBtnstyle");
			}  
			else if($("#hTxtMenuName").val() == "#sourceofincome"){
				$("#screentittle").val("Income & Expenses");
				$('#btnPrevPge').show();
				 $('#btnNxtPge').show();
				 $("#liprevious").removeClass("fipaAttPreviousBtnstyle");
			}
			else if($("#hTxtMenuName").val() == "#assetsliabilty"){
				$("#screentittle").val("Asset & Liabilities");
				$('#btnPrevPge').show();
				 $('#btnNxtPge').show();
				 $("#liprevious").removeClass("fipaAttPreviousBtnstyle");
			}
			else if($("#hTxtMenuName").val() == "#contingencyplan"){
				$("#screentittle").val("Contingency Planning");
				$('#btnPrevPge').show();
				 $('#btnNxtPge').show();
				 $("#liprevious").removeClass("fipaAttPreviousBtnstyle");
			}
			else if($("#hTxtMenuName").val() == "#retireplan"){
				$("#screentittle").val("Retirement Planning");
				$('#btnPrevPge').show();
				$('#btnNxtPge').show();
				$("#liprevious").removeClass("fipaAttPreviousBtnstyle");
			}
			else if($("#hTxtMenuName").val() == "#lifeInsurce"){
				$("#screentittle").val("Life Insurance");
				$('#btnPrevPge').show();
				$('#btnNxtPge').show();
				$("#liprevious").removeClass("fipaAttPreviousBtnstyle");
			}
			else if($("#hTxtMenuName").val() == "#inputinvst"){
				$("#screentittle").val("Investments");
				$('#btnPrevPge').show();  
				$('#btnNxtPge').show();
				$("#liprevious").removeClass("fipaAttPreviousBtnstyle");
			}
			else if($("#hTxtMenuName").val() == "#property"){
				$("#screentittle").val("Properties");
				$('#btnPrevPge').show();
				$('#btnNxtPge').show();
				$("#liprevious").removeClass("fipaAttPreviousBtnstyle");
			}
			/* else if($("#hTxtMenuName").val() == "#cashofbanks"){
				$("#screentittle").val("Cash at Bank");
				$('#btnPrevPge').show();
				$('#btnNxtPge').show();
			} */
			/* else if($("#hTxtMenuName").val() == "#assets"){
				$("#screentittle").val("Cash & Other Assets");
				$('#btnPrevPge').show();
				$('#btnNxtPge').show();
			} */
			else if($("#hTxtMenuName").val() == "#estateplan"){
				$("#screentittle").val("Estate Planning");
				$('#btnPrevPge').show();
				$('#btnNxtPge').show();
				$("#liprevious").removeClass("fipaAttPreviousBtnstyle");
			}
			else if($("#hTxtMenuName").val() == "#centralpro"){
				$("#screentittle").val("CPF");
				$('#btnPrevPge').show();
				$('#btnNxtPge').show();
				$("#liprevious").removeClass("fipaAttPreviousBtnstyle");
			}
			else if($("#hTxtMenuName").val() == "#srs"){
				$("#screentittle").val("SRS");
				$('#btnPrevPge').show();
				$('#btnNxtPge').show();
				$("#liprevious").removeClass("fipaAttPreviousBtnstyle");
			}
			/* else if($("#hTxtMenuName").val() == "#fnliabilities"){
				$("#screentittle").val("Financial Liabilities");
				$('#btnPrevPge').show();
				$('#btnNxtPge').show();
			} */
			else if($("#hTxtMenuName").val() == "#curAssmpt"){
				$("#screentittle").val("Current Assumption");
				$('#btnPrevPge').show();
				$("#liprevious").removeClass("fipaAttPreviousBtnstyle");
			}
			else if($("#hTxtMenuName").val() == "#othrareaofconcern"){
				$("#screentittle").val("Other Area of Concern");
				$('#btnPrevPge').show();
				$('#btnNxtPge').show();
				$("#liprevious").removeClass("fipaAttPreviousBtnstyle");
			}
			else if($("#hTxtMenuName").val() == "#clntreport"){
				$("#screentittle").val("Analysis Reports");
				$('#btnPrevPge').show();
				$('#btnNxtPge').show();
				$("#liprevious").removeClass("fipaAttPreviousBtnstyle");
			}
			else if($("#hTxtMenuName").val() == "#attachment"){
				$("#screentittle").val("Attachments");
				$('#btnPrevPge').show();
				$('#btnNxtPge').hide();
				$("#liprevious").addClass("fipaAttPreviousBtnstyle");
			}
			/* else if($("#hTxtMenuName").val() == "#htmlreport"){
				$("#screentittle").val("Pdf Report");
				$('#btnPrevPge').show();
				$('#btnNxtPge').hide();
				
			} */
				
	            if(lisubmenu){	
					//$(this).parent().closest(".mainmenu").removeClass("active");
					
					parentli = $(this).parent().closest(".mainmenu").find("span:eq(0)").html();//.find("span:eq(0)")
				//	console.log(parentli);
					$(this).parent().addClass("submenuactive")
	            } 
				    
	    	    $(content).show();
	    	    $(content).siblings('.pagecontent').hide();		        
		        var submenu1 =  $(this).html();//.find("span:eq(0)")
		        //if(lisubmenu){
		        	 $("#submenu1").html(parentli);
		        	// $("#submenu2").html(submenu1);
			   // }else{

			    //	$("#submenu1").html(submenu1);
		        //	$("#submenu2").hide();
				    
				//}

			   
		        $("#pagehead1").html(submenu1).addClass("panelHeaderTitle");
		        
			}else{
				 $("#pagehead1").html("");

				 $("#submenu1").html("");
	        	// $("#submenu2").html("");
			}
        	
        	//$(".breadcrumb,.panelHeaderTitle");
	    });



	    $("#search_li").trigger("click");

	   	fipaInitPageClient();
	    //hideLoaderOnly();

	    $('tr.odd').find('td.dataTables_empty').remove();
		$('tr.even').find('td.dataTables_empty').remove();

		
		//always body color:$("#contentBody").css('background','#f8f2de');
		//$("#contentBody").css('background','#f7faf0');
		//$("#contentBody").css('background','rgb(253, 253, 253)');

		$('#color1').click(function(){

			$(".main-sidebar").css('background', '#e2decf');
			$("#headerSection").css('background', '#e2decf');
			$(".nav a").css('color', '#000');
			$("#hTxtFldProfileColor").val("color1");
			
		});

		$('#color2').click(function(){
			$(".main-sidebar").css('background', '#76cade');			
			$("#headerSection").css('background', '#76cade');
			$(".nav a").css('color', '#000');
			$("#hTxtFldProfileColor").val("color2");			
		});

		$('#color3').click(function(){ 
			
			$(".main-sidebar").css('background', '#d1c9e4');
			$("#headerSection").css('background', '#d1c9e4');
			$(".nav a").css('color', '#000');
			$("#hTxtFldProfileColor").val("color3");
			
		});


		$('#color3a').click(function(){ 
			
			$(".main-sidebar").css('background', '#92c6f0');
			$("#headerSection").css('background', '#92c6f0');
			$(".nav a").css('color', '#000');
			$("#hTxtFldProfileColor").val("color3a");
		});


		if(lastSkinColor == 'DEFAULT'){
			$("#hTxtFldProfileColor").val("DEFAULT");

		//	$(".main-sidebar").css({'background': 'linear-gradient(45deg, rgb(32, 111, 128), rgb(38, 129, 147))','color':'#fff'});
		//	$("#headerSection").css('background', 'linear-gradient(45deg, rgb(25, 94, 108), rgb(40, 135, 155))');
			//$(".tab-pane active").css('margin-top','54px');
	//	}else if(lastSkinColor.indexOf("color") == 0){
		//	$('#'+lastSkinColor).trigger("click");
		}else{
		//	setBgColor(lastSkinColor);
				var value = JSON.parse(lastSkinColor);
				
			  /*	setBgColor(value.TopColor );
				setBgColor1(value.SidemenuColor);
				setBgColor2(value.SubMenuColor);
				setBgColor5(value.MenuColor);
				setBgColor3(value.TableHeaderColor);
				setBgColor4(value.BodyDivColor);
				setBgColor6(value.RepMain)
				setBgColor7(value.RepSub)

				setAllLayoutColor();*/
		}

		if(hasColorPrvlg == 'true'){
			$("#showpicker").show();
			//$(".colorChangeLI").show();
			$(".colorChangeLI").hide();
		}else{
			$("#showpicker").hide();
			$(".colorChangeLI").hide();
		}


		/*$("#showpicker").on("click",function(){
			
			$('#colorPickerModal').modal({
				  backdrop: 'static',
				  keyboard: false,
				  show:true,
			});	
		})*/
		
		console.log("DOM LOADED SUCCESS!!!");
		
    
});

 $(window).on('resize', function () {
	 $($.fn.dataTable.tables(true)).DataTable().columns.adjust();
});

 window.onbeforeunload = function() {

	  var exists="";
	  $("#allpages").find("input,select,textarea").each(function() {
	           if($(this).val() != ""){
	        	   exists="EXST"; 
	           }	 
	 	});
	 	console.log("tiggerSave-->"+tiggerSave +",prevScrFlg-->"+prevScrFlg+" ,profileLoad->"+profileLoad)
	 	//alert(("tiggerSave-->"+tiggerSave +",prevScrFlg-->"+prevScrFlg+" ,profileLoad->"+profileLoad))
	 	  if(tiggerSave != "SAVE"){
	 		  if((prevScrFlg != "") || ( profileLoad != PROFILE_LOAD) || (exists == "EXST")){ 
	 			    var message = 'Changes that you made may not be saved.'; 
	 			    
	 			    if (typeof evt == 'undefined') {
	 			        evt = window.event;
	 			    }
	 			    if (evt) {
	 			        evt.returnValue = message;
	 			    } 
	 			    
	 			    return message;
	 			  } 
	 	  }
	   
	};



</script>


	<form id="hiddenForm" method="post" action="" target="TheWindowBIRT" ></form>
<form id="hiddenFormKyc" name="hiddenFormKyc" method="post" action="" target="TheWindow" ></form>

</body>
</html>
