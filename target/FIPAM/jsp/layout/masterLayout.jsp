<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ page import="java.net.URL"%>
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  
  <title><tiles:insertAttribute name="title" ignore="true" /></title>
  
  <!-- Tell the browser to be responsive to screen width -->
  <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
  <link rel="stylesheet" href="plugins/bootstrap/css/bootstrap.min.css">
  <!-- Font Awesome -->
  <link rel="stylesheet" href="plugins/font-awesome/css/font-awesome.min.css">
  
  <link rel="stylesheet" href="plugins/bootstrap-datepicker/css/bootstrap-datetimepicker.css">
  <link rel="stylesheet" href="plugins/bootstrap/css/bootstrap-multiselect.css">
  
  <link rel="stylesheet" href="plugins/fipa/css/fipa.min.css">
  <link rel="stylesheet" href="plugins/fipa/css/commonstyles.css">
  
  <link rel="stylesheet" href="plugins/fipa/css/skins/_all-skins.min.css">
 
  <link rel="stylesheet" href="plugins/bootstrap-datepicker/css/bootstrap-datepicker.min.css">
  
  <!-- Daterange picker -->
  <link rel="stylesheet" href="plugins/bootstrap-daterangepicker/css/daterangepicker.css">
  <!-- bootstrap wysihtml5 - text editor -->
  <link rel="stylesheet" href="plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css">

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
<script src="plugins/fipa/js/datepicker.js"></script>
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

<script src="plugins/fipa/js/dialog_jquery.js"></script>  

<script src="plugins/jquery-qtip/jquery.qtip.js"></script>
<script src="plugins/jquery-qtip/toastr.min.js"></script>

<!-- Datatable plugins --> 
<script src="plugins/datatable/jquery.dataTables.min.js"></script>  

<script src="plugins/datatable/latest/dataTables.fixedColumns.min.js"></script>
<script src="plugins/datatable/dataTables.keyTable.min.js"></script>
<script src="plugins/datatable/dataTables.select.min.js"></script>
<script src="plugins/datatable/dataTables.responsive.js"></script>

	<script src="plugins/fipa/js/fipa.multiselect.js"></script>
	<script src="plugins/fipa/js/fipa.datatables.js"></script>
	
	<script src="plugins/fipa/js/fipa.common.js"></script>
	<script src="plugins/fipa/js/fipa.constants.js"></script> 
</head>
<body style="border: 1px solid #029978;margin: 3px;height: 96vh;">
<%
response.setHeader("Cache-Control","Cache-Control: no-cache, no-store, must-revalidate");
response.setHeader("Pragma","no-cache"); //HTTP 1.0
response.setDateHeader ("Expires", 0); 




%>

<!-- 		Fipa Loader -->
<div class="loading" style="">   
	<img  src="images/loading-circle.gif" class="imageloader">
	<span id="loadtext"></span>
</div>		
<!-- 	End Fipa Loader -->

	<tiles:insertAttribute name="body"/>  
	
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
<!-- End URL Popup -->
<input type="hidden" id="openURLvalue" />

</body>

<script type="text/javascript">


 $(document).ready(function () {
	
	 document.addEventListener('invalid', (function () {
	    	return function (e) {e.preventDefault();};
		})(), true);
 


		BASE_URL="<%=request.getContextPath()%>";
		kyc_url = "<%=request.getAttribute("KYC_URL")%>";
		
    
});

</script>
</html>
