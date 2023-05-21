<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<form name="cpfacctypeform" id="cpfacctypeform" method="post"> 

<div class="clearspace20"></div>
       <div class="col-md-12">
       <div class="form-group">
			<div class="row">
				<div class="col-md-3">
				 <span class="grpBoxTextTitle"> Search Criteria </span>

				</div>
				<div class="col-md-3">
					<label class="control-label">CPF Account</label>
					<select name="selSrchCpfAcctype" id="selSrchCpfAcctype"
						class="form-control fld-resp-mm" >
						<option value="">--SELECT--</option>
						<c:if test="${not empty CPF_ACCTYPES}">
							<c:forEach var="acctypes" items="${CPF_ACCTYPES}">
								<option value="${acctypes.cpfAcId}">${acctypes.accType}</option>
							</c:forEach>
						</c:if>
					</select>
				</div>
				<div class="col-md-6"> 
				<div class="row"><div class="col-md-3 hidden">
					<div class="btnStyle"> 
						    <button type="button"  id="btnSave" class="btn BtnFIPASRCH StylishSAVE">
						      <span class="txt">Save</span>
						      <span class="round"><i class="fa fa-floppy-o"></i></span>
						    </button> 
					 </div> </div>
					 <div class="col-md-3">  
					<div class="btnStyle"> 
						    <button type="button"  id="btnSearch" class="btn BtnFIPASRCH StylishSRCH">
						      <span class="txt">Search</span>
						      <span class="round"><i class="fa fa-search"></i></span>
						    </button> 
					 </div>  
					 </div>
					</div>
				</div>
			</div>
			</div>
			</div>
			
			<div class="clearspace20"></div>
        
 
       <div class="col-md-12">
       <%-- <table class="dataTable table-borderless" style="width: 100%">
       <tr><td colspan="3"><label class="control-label customFIPAStyle">Search Criteria</label></td></tr>
       <tr>
       <td align="right"><label class="control-label">CPF Account</label>
       </td><td><select name="selSrchCpfAcctype" id="selSrchCpfAcctype"
						class="form-control fld-resp-mm" >
						<option value="">--SELECT--</option>
						<c:if test="${not empty CPF_ACCTYPES}">
							<c:forEach var="acctypes" items="${CPF_ACCTYPES}">
								<option value="${acctypes.cpfAcId}">${acctypes.accType}</option>
							</c:forEach>
						</c:if>
					</select></td> 
					<td><button class="btn btn-primary align-middle"  id="btnSave" type="button">
						<span class="glyphicon glyphicon-save">&nbsp;Save</span>
					</button>
					<div class="FIPASRCH"> 
						    <button type="button"  id="btnSearch" class="btn BtnFIPASRCH">
						      <span class="txt">Search</span>
						      <span class="round"><i class="fa fa-search"></i></span>
						    </button> 
					 </div>  
					</td> 
       </tr>
        
					</table>  --%>
					
					
					<div class="clearspace20"></div>
	
	
		<div class="middle-line"></div>
			
			
			<div class="table-responsive">
			<div class="btn-group pull-right funcToDisable hidden" role="group">
						<button type="button"  class="btn btn-default navbar-btn delRow-icon" id="CpfAccDelRow"></button>
				 </div>
				<div class="btn-group pull-right funcToDisable hidden" role="group" style="margin-right: 10px;">
				<button type="button"  class="btn btn-default navbar-btn addRow-icon" id="CpfAccAddRow" ></button>
						<button type="button"  class="btn btn-default navbar-btn editRow-icon" id="CpfAccEditRow"></button>
<!-- 						<button type="button"  class="btn btn-default navbar-btn viewRow-icon" id="CpfAccViewRow"></button> -->
						 </div>
				<div class="">
					<img src="images/menuicons/wealthgoals.png" class="img-rounded" width="30"
						height="30" style="display: inline-block;"> 
						<span class="grpBoxTextTitle">CPF Account Details</span> 
				</div>
			</div> 
			<div class="table-responsive">
				<table id="CpfAccTypeTbl" class="dataTable table-bordered table-striped display hover" style="width:100%" >
						<thead>
							<tr>
								<th>#</th>
								<th>Select</th>
								<th><div style="width: 100px;">Account Type<span class="mandFldastrks">*</span></div></th>
								<th><div style="width: 50px;">Code</div></th>
								<th><div style="width: 50px;">Commencement Age<small>(yrs)</small></div></th> 
								<th><div style="width: 50px;">Withdraw Age<small>(yrs)</small></div></th>
								<th><div style="width: 150px;">Top-up Limit<small>($)</small></div></th> 
							</tr>
						</thead>  
						<tbody></tbody>
					</table>
					</div>
	
	</div>
		 
       




	  <!-- Modal  -->
<div class="modal fade" id="CpfAccTyp_Dialog" style="display: none"  tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
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
	        <label class="fipaFldLblText pull-right" for="txtFldDlgAccType"><font color="maroon">Account Type</font></label>
	           </div> 
	             <div class="col-md-6 col-sm-6 col-xs-6"> 
	           <input id="txtFldDlgAccType" name="txtFldDlgAccType" class="form-control fld-resp-mm" type="text" maxlength="20"  onchange="validateCpfAcIsExisted(txtFldDlgAccType);acctypeChkDhtml(txtFldDlgAccType);" onmouseover="fipaTooltip(this);"  /> 
	        </div> 
	     </div>
	  </div> 
      
	   <div class="form-group">
	    <div class="row required" >
		  <div class="col-md-6 col-sm-6 col-xs-6 "> 
	        <label class="fipaFldLblText pull-right" for="txtFldDlgAccCode">Code</label>
	           </div> 
	          	  <div class="col-md-6 col-sm-6 col-xs-6"> 
	        	<input type="text"  id="txtFldDlgAccCode" name="txtFldDlgAccCode" class="form-control fld-resp-mm"  maxlength="20" onmouseover="fipaTooltip(this);"  /> 
	         </div> 
	      </div>
	   </div> 
	       
	  <div class="form-group">
	    <div class="row required" >
	      <div class="col-md-6 col-sm-6 col-xs-6 "> 
	        <label class="fipaFldLblText pull-right" for="txtFldDlgAccCommnceAge">
	        Commencement Age </label>
	           </div> 
	             <div class="col-md-4 col-sm-4 col-xs-4"> 
	             <div class="input-group input-group-sm fld-resp-sm">
	             <input type="text"  id="txtFldDlgAccCommnceAge" name="txtFldDlgAccCommnceAge" class="form-control fld-resp-sm numbers applyEvntYrs"  maxlength="3"  onmouseover="fipaTooltip(this);"  />
	              
					<div class="input-group-addon" > 
 						<span id="symbolYrs"></span> </div>
 					</div>
 					 
	        </div> 
	     </div>
	  </div> 
   
	  <div class="form-group">
	    <div class="row required" >
	      <div class="col-md-6 col-sm-6 col-xs-6 "> 
	         <label class="fipaFldLblText pull-right" for="txtFldDlgAccWitdrwAge">
	         Withdraw Age</label>
	            </div> 
	               <div class="col-md-4 col-sm-4 col-xs-4"> 
	               <div class="input-group input-group-sm fld-resp-sm">
	             <input type="text"  id="txtFldDlgAccWitdrwAge" name="txtFldDlgAccWitdrwAge" class="form-control fld-resp-sm numbers applyEvntYrs" maxlength="3"  onmouseover="fipaTooltip(this);"  />
	              
					<div class="input-group-addon" > 
 						<span id="symbolYrs"></span> </div>
 					</div> 
	         </div> 
	      </div>
	  </div>
	   
	  
	  <div class="form-group">
	    <div class="row required" >
	      <div class="col-md-6 col-sm-6 col-xs-6 "> 
	         <label class="fipaFldLblText pull-right" for="txtFldDlgAccTopuplmt">
	         Top-up Limit</label>
	            </div> 
	               <div class="col-md-4 col-sm-4 col-xs-4"> 
	               <div class="input-group input-group-sm">
					<div class="input-group-addon" > 
               <span class="glyphicon" id="symbolUsd"></span> </div> 
					<input type="text" onmouseover="fipaTooltip(this);"   name="txtFldDlgAccTopuplmt"
					id="txtFldDlgAccTopuplmt" class="form-control clsfipaClient numbers applyEvntUsd"  /> 
               </div>
	         </div> 
	      </div>
	  </div>
       
   
	  <div class="form-group required">
		<input type="hidden" name=txtFldDlgCpfAccId  id="txtFldDlgCpfAccId"/>  
			<input type="hidden" name="txtFldDlgCpfAccCreatedBy" id="txtFldDlgCpfAccCreatedBy"/>
	    <input type="hidden" name="txtFldDlgCpfAccCreatedDate"  id="txtFldDlgCpfAccCreatedDate"/>
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
<!-- Modal ends  -->
	
	<input type="hidden" name="token" value="${token}"/>
</form>
<script src="<%=request.getContextPath() %>/plugins/fipa/master/master.cpfacctype.js"></script>
<script>
	jQuery(document).ready(function() {
		fipaInitPage();
	});
</script>