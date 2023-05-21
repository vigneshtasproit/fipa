<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %> 
	
<!-- <div class="row"> 
<div class="col-md-12" >  
<div class="footdiv"  style="display:none; ">

<table class="display nowrap reportPrintdiv pull-right"  style="display:none;" width="30%"> 
<tr>
<td width="20%" colspan="5">&nbsp; </td> 
<td width="5%" >
			<input type="button" class="btn btn-primary"
						title="Print" role="button" id="btnPrintProfile" value="Print"
						onclick="applyErrorToastrAlert('work in progress...')" />
		</td> 
		</tr>
		</table>
</div>
    </div>
    
    
</div> -->

<!-- End HeaderOptions -->

	<form name="fipaForm" id="fipaForm" method="POST"  enctype="multipart/form-data"> 
		<div id="allpages"> 
			<div id="searchpage" class="pagecontent">
				<jsp:include page="/jsp/fipa/ClientSearch.jsp"></jsp:include>
			</div> 
			<div id="profilepage" class="pagecontent">
			<%-- 	<jsp:include page="/jsp/fipa/profile.jsp"></jsp:include> --%>
			</div> 			
			<div id="typesofappln" class="pagecontent autosavetrigger custom-pagecontent"  data-desc="CLIENTFLG">
			 <jsp:include page="/jsp/fipa/typesOfAppln.jsp"></jsp:include>
			</div>
			<%-- <div id="particulars" class="pagecontent autosavetrigger" data-desc="CLIENTFLG">
			 <jsp:include page="/jsp/fipa/clientdetails.jsp"></jsp:include>
			</div>
			<div id="spousediv" class="pagecontent autosavetrigger" data-desc="CLIENTFLG">
			 <jsp:include page="/jsp/fipa/spousedetails.jsp"></jsp:include>
			</div>
			<div id="chldpartdiv" class="pagecontent autosavetrigger" data-desc="CHILDFLG">
			 <jsp:include page="/jsp/fipa/childparticulars.jsp"></jsp:include>
			</div>-%>
			<%-- tab so hidden --%>
			
			
			<div id="particular" class="pagecontent autosavetrigger" data-desc="CLIENTFLG">
			 <jsp:include page="/jsp/fipa/particular.jsp"></jsp:include>
			 <div style="display:none"> <jsp:include page="/jsp/fipa/childparticulars.jsp"></jsp:include></div>
			</div>
			
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
			 	<jsp:include page="/jsp/fipa/FundFlowAnnlExp.jsp"></jsp:include>
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
			<%-- <div id="retirecashflow" class="pagecontent"> 
				<jsp:include page="/jsp/fipa/retirecashflw.jsp"></jsp:include> 
			</div>   --%>
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
			<div id="clntreport" class="pagecontent">
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
<!-- Logged User Details -->  
</form> 

<input type="hidden" id="hTblSelectedRow" />
<form id="hiddenForm" method="post" action="" target="TheWindowBIRT" ></form>
 
	<script src="js/fipa.client.js"></script>  
	<script src="js/fipa.dependant.js"></script>
	<script src="js/fipa.dependant_new.js"></script>
	<script src="js/fipa.savinginvestment.js"></script>
	<script src="js/fipa.childparticulars.js"></script>
	<script src="js/fipa.childparticular_new.js"></script>
	<script src="js/fipa.fingoals.js"></script>  
	<script src="js/fipa.healthins.js"></script> 
	<script src="js/fipa.propownership.js"></script>
	<script src="js/fipa.vehownership.js"></script>	 
	<script src="js/fipa.advicerecom.js"></script>	
	<script src="js/fipa.assets.js"></script>
	<script src="js/fipa.areaofconcrn.js"></script>
	<script src="js/fipa.reasons.js"></script>	   
	<script src="js/report/genReport.js"></script>
	<script src="js/cpfdetails.js"></script>
	<script src="js/fipa.retirement.js"></script>
	<script src="js/retCpfPayout.js"></script>
 
<!-- 	<script src="js/cpfallocdets.js"></script> -->
	
	<script src="js/fipa.cashofbanks.js"></script>   
 <script src="js/fipa.srs.js"></script>  
	<script src="js/fipa.lifeins.js"></script> 
	
	
	

	<script src="js/fipa.lifeInsurance.js"></script>   
		<script src="js/fipa.BRplans.js"></script>  
	<script src="js/fipa.investment.js"></script>  
		<script src="js/retEducationplg.js"></script>  
	
	<script src="js/fipa.attachment.js"></script>
	<script src="js/master.property.js"></script>  
	<script src="js/autoalter.js"></script>  
	 
	 <!-- Retirement Cash Flow Projection -->
	<script src="js/rdcflw.ctCost.js" ></script> 
	<script src="js/rdcflw.inpIncme.js" ></script> 
	<script src="js/rdcflw.projOfInc.js" ></script> 
	<script src="js/rdcflw.anlysRtCsflw.js" ></script> 
	
	
	<script src="js/jsPDF2/jspdf.debug.js" type="text/javascript" ></script>
	<script src="js/jsPDF2/jspdf.plugin.autotable.js"  type="text/javascript" ></script> 
	<script src="js/jsPDF2/html2canvas.min.js" type="text/javascript" ></script> 
	<script src="js/jsPDF2/rgbcolor.js" type="text/javascript"></script>
	<script src="js/jsPDF2/StackBlur.js" type="text/javascript" ></script>
	<script src="js/jsPDF2/canvg.js" type="text/javascript" ></script>
	<script src="js/jsPDF2/d3SvgToPng.js" type="text/javascript" ></script>      
	
	 <!--htmltopdf plugins-->
	<script src="plugins/fipa/js/reportPdfjquery.min.js" ></script>  
    <!-- <script src="plugins/fipa/js/cpfdetails.js" ></script>   -->
    <script src="plugins/fipa/js/htmlreport.js" ></script>  
	
	<script src="js/fipa.datatables.js"></script>
	
	
	<script src="plugins/fipa/js/Chart.min.js"></script>
	<script src="plugins/fipa/js/hammer.min.js"></script>
	<script src="plugins/fipa/js/chartjs-plugin-zoom.js"></script>
	<script src="plugins/fipa/js/utils.js"></script>
	<script src="plugins/fipa/js/moment.min.js"></script>
	<script src="plugins/fipa/js/chartjs-plugin-labels.js"></script>
    <script src="plugins/fipa/js/Chart.js"></script>
 
	<script>	
	
	  window.onbeforeunload = function(evt) {
		  var exists="";
	  $("#allpages").find("input,select,textarea").each(function() {
	           if($(this).val() != ""){
	        	   exists="EXST"; 
	           }	 
		});
		
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
		
	 }  
		 
// 		 window.open('','FPMSWINDOW').close();

		
		/*Disable refresh and F5 functions*/
// 		    $(document).on("keydown", disableF5);
// 			function disableF5(e) {
// 				if ((e.which || e.keyCode) == 116 || (e.which || e.keyCode) == 82) 
// 				  e.preventDefault(); 
// 				showAlert("Function is disabled");
// 			};
// 			$(this).bind("contextmenu", function(e) {
// 		        e.preventDefault();
// 		        showAlert("Function is disabled");
// 		    });   
		
		
		/*loader active when page refreshed*/
// 		 $(window).load(function(){
// 			 $("#layoutfooter").css("display","none");
// 			 setTimeout(function(){
// 				 $('body').removeClass("loading");
// 			 },2000);
			 
// 		 });
		 
		  
		jQuery(document).ready(function(){ 
			 
			 fipaInitPage();	
			 
			
		}); 
		
		kyc_url = "<%=request.getAttribute("KYC_URL")%>";
		
		
	</script>


		
		
		
	<select name="selhidFundNames"
					id="selhidFundNames" class="form-control" style="display:none">
					<option value="">--SELECT--</option>
					<c:if test ="${not empty INV_FUNDNAME_LIST}">
		 		<c:forEach var="invfundnamelist" items="${INV_FUNDNAME_LIST}">
							<option value="${invfundnamelist[1]}">${invfundnamelist[2]}</option>
						</c:forEach>
					</c:if>
				</select>
				
				
		 
		
	<!-- 
	<c:if test ="${not empty param}">
			<script type="text/javascript">
<%-- 			param = "<%=request.getAttribute("param")%>";  --%>
			$('#sidebar-menu #search_li').find("a").trigger("click"); 
			$("#allpages #searchpage").css("display","block");
			</script>
		</c:if>	
 -->
