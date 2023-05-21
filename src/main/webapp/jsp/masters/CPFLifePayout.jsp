<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<form name="cpflifepayoutform" id="cpflifepayoutform" method="post"> 

<div class="clearspace20"></div>
       <div class="col-md-12">
       <div class="form-group">
			<div class="row">
				<div class="col-md-3">
				 <span class="grpBoxTextTitle"> Search Criteria </span>

				</div>
				<div class="col-md-3">
					<label class="control-label" for="selSrchCPFLifeRtmntSum">Retirement Sum</label>
					<select name="selSrchCPFLifeRtmntSum" id="selSrchCPFLifeRtmntSum"
						class="form-control fld-resp-mm" >
						<option value="">--SELECT--</option>
						<c:if test="${not empty CPF_PLANNAMES}">
							  <c:forEach var="cpfpln" items="${CPF_PLANNAMES}">
							    <option value="${cpfpln.retScheme}">${cpfpln.retScheme}</option>
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
					<div class="clearspace20"></div> 
		<div class="middle-line"></div>  
			<div class="table-responsive">
			<div class="btn-group pull-right funcToDisable hidden" role="group">
						<button type="button"  class="btn btn-default navbar-btn delRow-icon" 
						id="CpflifeDelRow"></button>
				 </div>
				<div class="btn-group pull-right funcToDisable hidden" role="group" style="margin-right: 10px;">
				<button type="button"  class="btn btn-default navbar-btn addRow-icon" id="CpflifeAddRow" ></button>
						<button type="button"  class="btn btn-default navbar-btn editRow-icon" id="CpflifeEditRow"></button>
 						 </div>
				<div class="container">
					<img src="images/menuicons/wealthgoals.png" class="img-rounded" width="30"
						height="30" style="display: inline-block;"> 
						<span class="grpBoxTextTitle">CPF Life Pay Out Income for year</span> 
				</div>
			</div>
			<div class="col-md-1">
			&nbsp;  
			</div>
			<div class="col-md-10">  
			<div class="table-responsive">
				<table id="CpfLifePayoutTbl" class="dataTable table-bordered table-striped display hover" style="width:100%" >
						<thead>
							<tr>
								<th><div>#</div></th>
								<th><div>Select</div></th>
								<th><div>Retirement Sum</div></th>
								<th><div>Pay out year<small>(yrs)</small></div></th>
								<th><div>Monthly<small>($)</small></div></th> 
								<th><div>Annually<small>($)</small></div></th>
								
							</tr>
						</thead>  
						<tbody></tbody>
					</table>
					</div>
	</div>
	</div>
		 
       




	  <!-- Modal  -->
<div class="modal fade" id="CpfLifePayout_Dialog" style="display: none"  tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
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
	        <label class="fipaFldLblText pull-right" for="selDlgLifeRtmntSum">Retirement Sum</label>
	           </div> 
	             <div class="col-md-6 col-sm-6 col-xs-6">  
	         
	           <input id="selDlgLifeRtmntSum" name="selDlgLifeRtmntSum" 
	           class="form-control fld-resp-mm" type="text" maxlength="20"  
	            onmouseover="fipaTooltip(this);"  /> 
	           
	           
	           
	        </div> 
	     </div>
	  </div> 
      
	  <div class="form-group">
	    <div class="row required" >
	      <div class="col-md-6 col-sm-6 col-xs-6 "> 
	         <label class="fipaFldLblText pull-right" for="txtFldDlgLifePayYear">
	         Payout year</label>
	            </div> 
	               <div class="col-md-4 col-sm-4 col-xs-4"> 
	               <div class="input-group input-group-sm fld-resp-sm">
					
					<input type="text" onmouseover="fipaTooltip(this);"   name="txtFldDlgLifePayYear"
					id="txtFldDlgLifePayYear" class="form-control fld-resp-sm numbers apply4EvntYrs"  /> 
					<div class="input-group-addon"> 
 						<span id="symbolYrs" class="addYearSign"></span> </div>
               </div>
	         </div> 
	      </div>
	  </div>
	       
	 
   
	  <div class="form-group">
	    <div class="row required" >
	      <div class="col-md-6 col-sm-6 col-xs-6 "> 
	         <label class="fipaFldLblText pull-right" for="txtFldDlgLifeMonthly">
	         Monthly</label>
	            </div> 
	               <div class="col-md-4 col-sm-4 col-xs-4"> 
	               <div class="input-group input-group-sm">
					<div class="input-group-addon" > 
               <span class="glyphicon" id="symbolUsd"></span> </div> 
					<input type="text" onmouseover="fipaTooltip(this);"   name="txtFldDlgLifeMonthly"
					id="txtFldDlgLifeMonthly" class="form-control clsfipaClient numbers applyEvntUsd"  /> 
               </div>
	         </div> 
	      </div>
	  </div>
	   
	  
	  <div class="form-group">
	    <div class="row required" >
	      <div class="col-md-6 col-sm-6 col-xs-6 "> 
	         <label class="fipaFldLblText pull-right" for="txtFldDlgLifeAnnually">
	         Annually</label>
	            </div> 
	               <div class="col-md-4 col-sm-4 col-xs-4"> 
	               <div class="input-group input-group-sm">
					<div class="input-group-addon" > 
               <span class="glyphicon" id="symbolUsd"></span> </div> 
					<input type="text" onmouseover="fipaTooltip(this);"   name="txtFldDlgLifeAnnually"
					id="txtFldDlgLifeAnnually" class="form-control  numbers applyEvntUsd" readonly="true" /> 
               </div>
	         </div> 
	      </div>
	  </div>
       
   
	  <div class="form-group required">
		<input type="hidden" name=txtFldDlgCpfLifePayId  id="txtFldDlgCpfLifePayId"/>  
			<!-- <input type="hidden" name="txtFldDlgCpfAccCreatedBy" id="txtFldDlgCpfAccCreatedBy"/>
	    <input type="hidden" name="txtFldDlgCpfAccCreatedDate"  id="txtFldDlgCpfAccCreatedDate"/> -->
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
<script>
	jQuery(document).ready(function() {
		fipaInitPage();
	});
</script>
<script src="plugins/fipa/master/cpflifepayout.js"></script>
