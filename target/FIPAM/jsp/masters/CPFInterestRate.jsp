<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>



<form name="frmCpfIntRates" id="frmCpfIntRates" method="post">
  <div id="accordion" class="panel-group">
	<div id="cpfDetsdiv" class="">
 <span class="pull-left fipaFldLblTextbold">CPF Master Details</span>  

	 <div class="panel-body">
	 <div class="col-md-12">
	 <span class="pull-left grpBoxTextTitle"> Search Criteria </span><br>
	 	 <div class="col-md-3 col-md-offset-2">
	 <div class="form-group">
    <label for="selSrchCpfAccount" class="control-label">CPF&nbsp;Account</label>
    <select class="form-control  fld-resp-md pull-right" id="selSrchCpfAccount" 
			name="selSrchCpfAccount" onchange="clearDataTable('CpfSearchDetail');">
											<option value="">--SELECT--</option>
											<c:if test="${not empty CPF_ACCOUNT_LIST}">
											  <c:forEach var="cpfacc" items="${CPF_ACCOUNT_LIST}">
											    <option value="${cpfacc}">${cpfacc}</option>
											  </c:forEach>
											</c:if>
										</select>
  </div>
  </div>
   <div class="col-md-3">
  <div class="form-group">
     <label for="txtFldSrchCpfIntMth" class="control-label ">Interest&nbsp;Month
              <small>(DD/MM/YYYY)</small></label>
   <div class="input-group input-group-sm date fld-resp-mm"  id="SrchCpfIntMthpicker" > 
                  <input type='text' class="form-control  fld-resp-mm pull-right" name="txtFldSrchCpfIntMth"
                   id="txtFldSrchCpfIntMth" maxlength="10" 
                     onchange="clearDataTable('CpfSearchDetail');" 
                    tabindex=2 >  
 						 
                  <div class="input-group-addon" > 
 				<span class="glyphicon glyphicon-calendar"></span>  
                  </div>
                </div> 
  </div>
  </div>
  <div class="col-md-3 pull-right"> 
			 <button type="button" class="btn btn-primary hidden " onclick="fipaSave()" id="btnSave">
				  <span class="glyphicon glyphicon-save"></span>
			   </button>
			  
		 		<button type="button" class="btn btn-primary" onclick="CpfSearchDetails()" id="btnSrch">
				  <span class="glyphicon glyphicon-search"></span>
			   </button>	  
				 
				 </div>
  
  </div>
  
      
	
	
		
	<div class="col-md-12">   
			<div class="middle-line"></div>
	<div class="clearspace20"></div>
	<span class="pull-left grpBoxTextTitle">Search Result</span>	 
			<div class="table-responsive"> 
			<div class="btn-group pull-right" role="group">
<!-- 						<button type="button"  class="btn btn-default navbar-btn searchRow-icon" onclick="CpfSearchDetails();"></button> -->
						<button type="button"  class="btn btn-default navbar-btn addRow-icon" onclick="CpfAddRow(null);"></button>
						<button type="button"  class="btn btn-default navbar-btn editRow-icon" onclick="CpfEditRow();"></button>
						<button type="button"  class="btn btn-default navbar-btn delRow-icon" onclick="CpfDelRow();"></button>
<!-- 						<button type="button"  class="btn btn-default navbar-btn viewRow-icon" onclick="CpfViewRow();"></button> -->
				  </div>
					</div>  
				<table id="CpfSearchDetail" class="dataTable table-bordered table-striped display hover" style="width:100%" >
						<thead>
							<tr>
								<th width="4%">#</th>
								<th class="hidden"  width="3%">Mode</th>
								<th width="3%">Select</th>
								<th width="20%">CPF Account</th>
								<th width="20%">CPF Interest Rate<small>(%)</small></th>
								<th width="20%">CPF Interest Month<small>(DD/MM/YYYY)</small></th> 
							</tr>
						</thead>  
						<tbody></tbody>
					</table>
				 
</div> 
 
  
 
 
  <!-- Modal  -->
<div class="modal fade" id="MasterCpfIntRate_Dialog" style="display: none"  tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel"></h4>
      </div>
      <div class="modal-body">
     <fieldset class="fieldsetClsborder scrollModelBody60"> 
     <div class="col-md-12"> 
		<div class="form-group">
	<div class="row required" >
	<div class="col-md-6 col-sm-6 col-xs-6 "> 
              <label class="fipaFldLblText"
						 for="selDlgCpfAccount"><font color="maroon">
						 CPF Account   </font></label> 
            
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
		<select class="form-control fld-resp-md" id="selDlgCpfAccount"  name="selDlgCpfAccount" 
 					onchange="validateCpfAcIsExisted(selDlgCpfAccount,txtFldDlgCpfIntMonth,selDlgCpfAccount);validateDatatables(selDlgCpfAccount,txtFldDlgCpfIntMonth);">
						<option value="">--SELECT--</option>
						<c:if test="${not empty CPF_ACCOUNT_LIST}">
						  <c:forEach var="cpfaccount" items="${CPF_ACCOUNT_LIST}">
						    <option value="${cpfaccount}">${cpfaccount}</option>
						  </c:forEach>
						</c:if>
					</select> 
            </div> 
            </div>
      </div> 
      
      
      <div class="form-group">
	<div class="row required" >
	<div class="col-md-6 col-sm-6 col-xs-6 "> 
            <label class="fipaFldLblText" for="txtFldDlgCpfIntMonth">
					 					<font color="maroon">CPF Interest Month 
					 					<small>(DD/MM/YYYY)</small></font></label>   
      
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6">  
			<div class="input-group input-group-sm fld-resp-mm date"  id="dlgCpfIntMthpicker"> 
                  <input type='text' class="form-control fld-resp-mm" 
                  name="txtFldDlgCpfIntMonth" id="txtFldDlgCpfIntMonth"   
 					 onchange="validateCpfAcIsExisted(selDlgCpfAccount,txtFldDlgCpfIntMonth,txtFldDlgCpfIntMonth);validateDatatables(selDlgCpfAccount,txtFldDlgCpfIntMonth);" 
 					  maxlength="10">   
                  <div class="input-group-addon" > 
 				<span class="glyphicon glyphicon-calendar"></span>  
                  </div>
                </div>               
            </div> 
            </div>
      </div>
       
       
       
       
       <div class="form-group">
	<div class="row required" >
	<div class="col-md-6 col-sm-6 col-xs-6 "> 
                   <label class="fipaFldLblText" for="txtFldDlgCpfIntRate">
			 <font color="maroon">CPF Interest Rate   </font></label>  
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6">  
		<div class="input-group input-group-sm"> 
                <input type="text" name="txtFldDlgCpfIntRate"
					id="txtFldDlgCpfIntRate" onmouseover="fipaTooltip(this);"   
					class="form-control fld-resp-sm numbers applyEvntpCent3" />
					<div class="input-group-addon">
				       <span class="glyphicon" id="symbolprCent"></span> 
				       </div>
                		</div>  
            </div> 
            </div>
      </div>
       
        
       
		 
      
      
      
      <div class="form-group required">
			 <input type="hidden" name="txtFldDlgCpfIntId"  id="txtFldDlgCpfIntId"/>  
		 <input type="hidden" name="txtFldDlgCpfCreatedBy" id="txtFldDlgCpfCreatedBy"/>
		 <input type="hidden" name="txtFldDlgCpfCreatedDate"  id="txtFldDlgCpfCreatedDate"/>
	
		
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
 
  
         </div>
         </div>
         </div>
         </form>
         <input type="hidden" id="hRecords" />
         <input type="hidden" id="hdisplayend" />
         <script>
	jQuery(document).ready(function() {
		fipaInitPage();
	});
</script>

<script src="plugins/fipa/master/cpfinterestRate.js"></script>
</body>
</html>
 