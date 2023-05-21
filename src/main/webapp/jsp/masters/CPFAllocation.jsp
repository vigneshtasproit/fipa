<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>



<form name="frmCpfAllocation" id="frmCpfAllocation" method="post">
   <div id="accordion" class="panel-group">
	<div id="cpfAllocDetsdiv" class=" ">
	 <span class="pull-left fipaFldLblTextbold">CPF Allocation Rates</span> 
	 <br> 
		<div class="panel-body"> 
		<span class="pull-left grpBoxTextTitle"> Search Criteria </span> <br> 
		<div class="col-sm-offset-1">
			
	<div class="col-md-3">    
			<div class="form-group required">
			 <div class="row">
			   <label for="selSrchCpfAllocAcType" class="control-label pull-left">Account&nbsp;Type</label>
			   </div>
			    
			<select class="form-control fld-resp-md pull-right" id="selSrchCpfAllocAcType" 
			name="selSrchCpfAllocAcType" onchange="clearDataTable('CpfAllocRateSearch');">
							<option value="">--ALL--</option>
							<c:if test="${not empty CPF_ACCOUNT_LIST}">
							  <c:forEach var="cpfacc" items="${CPF_ACCOUNT_LIST}">
							    <option value="${cpfacc}">${cpfacc}</option>
							  </c:forEach>
						</c:if>
					</select>
					</div>
					  
				</div>
	
	
		
		
		
		
		<div class="col-md-3">    
			<div class="form-group required">
			 <div class="row">
			 <label class="control-label pull-left"  for="txtFldDlgCPFContEffFrom">Effective From
					<small>(DD/MM/YYYY)</small></label> 
			   </div>
			    
			<div class="input-group input-group-sm fld-resp-md date pull-right"  id="SrchCpfAllocEffFrompicker"> 
                  <input type='text' class="form-control fld-resp-md" name="txtFldSrchCpfAllocEffFrom" 
                  id="txtFldSrchCpfAllocEffFrom"  
 				 onchange="clearDataTable('CpfAllocRateSearch');" tabindex=2 >  
 						 
                  <div class="input-group-addon"> 
 				<span class="glyphicon glyphicon-calendar"></span>  
                  </div> 
					</div>
					</div>  
				</div>
				
				
		<div class="col-md-3">    
			<div class="form-group required">
			 <div class="row">
			 <label for="selSrchCPFAllocAgeGrp" class="control-label">Age Group</label> 
			   </div> 
			<select class="form-control fld-resp-md" id="selSrchCPFAllocAgeGrp" 
			name="selSrchCPFAllocAgeGrp"  onchange="clearDataTable('CpfAllocRateSearch');">
											<option value="">--SELECT--</option>
											<c:if test="${not empty CPF_AGEGRP_LIST}">
											  <c:forEach var="cpfagegrp" items="${CPF_AGEGRP_LIST}">
											    <option value="${cpfagegrp}">${cpfagegrp}</option>
											  </c:forEach>
											</c:if>
										</select> 
					</div>  
				</div>
				
					
 		<div class="col-md-3">     
			 <button type="button" class="btn btn-primary hidden"  id="btnAllocSave">
				  <span class="glyphicon glyphicon-save"></span>
			   </button> 
		 		<button type="button" class="btn btn-primary"  id="btnAllocSrch">
				  <span class="glyphicon glyphicon-search"></span>
			   </button>	  
				</div> 
				
		  
		 
	 </div>
	<div class="col-md-12">   
			<div class="middle-line"></div>
	<div class="clearspace20"></div>
	<span class="pull-left grpBoxTextTitle">Search Result</span>	 
			<div class="table-responsive">
<!-- 			funcToDisable --> 
			<div class="btn-group pull-right " role="group">
<!-- 						<button type="button"  class="btn btn-default navbar-btn searchRow-icon" onclick="CpfAllocRateSearch();"></button> -->
<!-- 						<button type="button"  class="btn btn-default navbar-btn addRow-icon" onclick="CpfAllocAddRow(null);"></button> -->
<!-- 						<button type="button"  class="btn btn-default navbar-btn editRow-icon" onclick="CpfAllocEditRow();"></button> -->
<!-- 						<button type="button"  class="btn btn-default navbar-btn delRow-icon" onclick="CpfAllocDelRow();"></button> -->
<!-- 						<button type="button"  class="btn btn-default navbar-btn viewRow-icon" onclick="CpfAllocViewRow();"></button> -->
					 
					 
					 <button type="button"  class="btn btn-default navbar-btn addRow-icon" id="AmsCpfAlloc"></button>
						<button type="button"  class="btn btn-default navbar-btn editRow-icon" id="EmsCpfAlloc"></button>
						<button type="button"  class="btn btn-default navbar-btn delRow-icon" id="DmsCpfAlloc" ></button>
<!-- 						<button type="button"  class="btn btn-default navbar-btn viewRow-icon" id="VmsCpfAlloc"></button> -->
						
						
					</div>
					</div>
			 
				<table id="CpfAllocRateSearch" class="dataTable table-bordered table-striped display hover" style="width: 100%;">
						<thead>
							<tr>
								<th>#</th> 
								<th>Select</th>
								<th><div style="width:100px;">Effective From<br><small>(DD/MM/YYYY)</small></div></th>
								<th><div style="width:100px;">Age Group</div></th>
								<th><div style="width:100px;">Account Type</div></th> 
								<th><div style="width:100px;">Allocation Rate<small>(%)</small></div></th> 
								<th><div style="width:100px;">Remarks</div></th> 
							</tr>
						</thead> 
						<tbody></tbody>
					</table>
					 
	</div> 
   </div>
   
 
         </div>
         </div>
         </form>

 
 
 
 
 
 
  <!-- Modal  -->
<div class="modal fade" id="MasterCpfAlloc_Dialog" style="display: none"  tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
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
             <label class="fipaFldLblText pull-right"	for="txtFldDlgCPFAllocEffFrom">
					<font color="maroon">Effective From
					<small>(DD/MM/YYYY)</small> </font>
					</label> 
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
		<div class="input-group input-group-sm fld-resp-mm date"  id="dlgCpfAllocEffFrompicker"> 
                  <input id="txtFldDlgCPFAllocEffFrom" name="txtFldDlgCPFAllocEffFrom" class="form-control fld-resp-md" 
							 onmouseover="fipaTooltip(this);" 
							 type="text" maxlength="10" /> 
                  <div class="input-group-addon"   > 
 				 <span class="glyphicon glyphicon-calendar" ></span>  
                  </div>
                </div> 
                 
            </div> 
            </div>
      </div> 
      
      
      <div class="form-group">
	<div class="row required" >
	<div class="col-md-6 col-sm-6 col-xs-6 "> 
           <label class="fipaFldLblText pull-right" for="selDlgCPFAllocAccType"> 
				 <font color="maroon">Account Type </font></label>  
				
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6">  
<!--            data-container="body"   -->
           <select class="form-control  fld-resp-md" id="selDlgCPFAllocAccType" 
					 					name="selDlgCPFAllocAccType"   
					 					onchange="validateCpfAllocAcIsExisted(txtFldDlgCPFAllocEffFrom,selDlgCPFAllocAgeGrp,selDlgCPFAllocAccType,selDlgCPFAllocAccType);validateAllocDatatables(txtFldDlgCPFAllocEffFrom,selDlgCPFAllocAgeGrp,selDlgCPFAllocAccType);" >
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
           <label class="fipaFldLblText pull-right"  for="selDlgCPFAllocAgeGrp">
				 <font color="maroon">Age Group </font></label>   
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6">  
		<select class="form-control  fld-resp-md" id="selDlgCPFAllocAgeGrp"  name="selDlgCPFAllocAgeGrp"  
			  onchange="validateCpfAllocAcIsExisted(txtFldDlgCPFAllocEffFrom,selDlgCPFAllocAgeGrp,selDlgCPFAllocAccType,selDlgCPFAllocAgeGrp);validateAllocDatatables(txtFldDlgCPFAllocEffFrom,selDlgCPFAllocAgeGrp,selDlgCPFAllocAccType);">
				<option value="">--SELECT--</option>
				<c:if test="${not empty CPF_AGEGRP_LIST}">
				  <c:forEach var="cpfagegrp" items="${CPF_AGEGRP_LIST}">
				    <option value="${cpfagegrp}">${cpfagegrp}</option>
				  </c:forEach>
				</c:if>
			</select> 
            </div> 
            </div>
      </div>
       
        
       
		<div class="form-group">
	<div class="row required" >
	<div class="col-md-6 col-sm-6 col-xs-6 "> 
              <label class="fipaFldLblText pull-right" for="txtFldDlgCPFAllocRate">
				 <font color="maroon">Allocation Rate  </font></label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6">
           <div class="input-group input-group-sm"> 
                <input type="text" name="txtFldDlgCPFAllocRate"
					id="txtFldDlgCPFAllocRate" onmouseover="fipaTooltip(this);"   
					class="form-control fld-resp-sm" maxlength="30"/>
					<div class="input-group-addon">
				       <span class="glyphicon" id="symbolprCent"></span> 
				       </div>
                		</div> 
           
            </div> 
            </div>
      </div> 
      
       <div class="form-group">
	<div class="row required" >
	<div class="col-md-6 col-sm-6 col-xs-6 "> 
             <label class="fipaFldLblText pull-right" for="txtFldDlgCPFAllocRemarks"> 
					 					Allocation Remarks </label>
 						
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
           <textarea name="txtFldDlgCPFAllocRemarks" id="txtFldDlgCPFAllocRemarks"   
					class="form-control"  rows="5" maxlength="300"  
					onmouseover="fipaTooltip(this);"></textarea>   
            </div> 
            </div>
      </div> 
      
      <div class="form-group required">
		<input type="hidden" name="txtFldDlgCPFAllocId" id="txtFldDlgCPFAllocId"/> 
			<input type="hidden" name="txtFldDlgCPFCreatedBy" id="txtFldDlgCPFCreatedBy"/>
			<input type="hidden" name="txtFldDlgCPFCreatedDate" id="txtFldDlgCPFCreatedDate"/>
		
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
 
       
       
       
        <script>
	jQuery(document).ready(function() {
		fipaInitPage();
	});
	
	
</script>
<script src="plugins/fipa/master/cpfallocdets.js"></script>
<!--          <input type="hidden" id="hhh" /> -->
<!--          <input type="hidden" id="hdisplayend" /> -->
</body>
</html>
 