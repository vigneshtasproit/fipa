<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<form name="frmCpfRetirementSum" id="frmCpfRetirementSum" method="post" autocomplete="off">  

<!-- Search Criteria -->
<div class="clearspace20"></div>
       <div class="col-md-12">
       <div class="form-group">
			<div class="row">
				<div class="col-md-3">
				 <span class="grpBoxTextTitle"> Search Criteria </span>

				</div>
				<div class="col-md-3"> 
				<label class="control-label  mandFldastrks" for="selSrchRetYear">Year
				 					 <span class="mandFldastrks">*</span></label> 
				 					 
					 <div class="input-group input-group-sm fld-resp-mm date"  id="cpfconeffFrompicker"> 
                  <input id="selSrchRetYear" name="selSrchRetYear" class="form-control numbers apply4EvntYrs" 
							 onmouseover="fipaTooltip(this);" 
							 type="text" maxlength="10" /> 
                  <div class="input-group-addon"> 
 						<span id="symbolYrs" class="addYearSign"></span> 
 						</div>
                </div> 
					 
					 
				</div>
				<div class="col-md-6"> 
				<div class="row"><div class="col-md-3 hidden">
					<div class="btnStyle"> 
						    <button type="button"  id="btnRetYearSave" class="btn BtnFIPASRCH StylishSAVE">
						      <span class="txt">Save</span>
						      <span class="round"><i class="fa fa-floppy-o"></i></span>
						    </button>    
					 </div> </div>
					 <div class="col-md-3">  
					<div class="btnStyle"> 
						    <button type="button"  id="btnRetYearSrch" class="btn BtnFIPASRCH StylishSRCH">
						      <span class="txt">Search</span>
						      <span class="round"><i class="fa fa-search"></i></span>
						    </button> 
					 </div>  
					 </div>
					</div>
				</div>
			</div>
			</div>
			
			<div class="clearspace20"></div>
			</div>
			
			
			
			
			
		<!-- End Search Criteria -->	
			
			
			
			
	<!-- Form  -->		
			
			<div class="col-md-12">
         
		<div class="middle-line"></div>
			
		<div class="row">
		
					<div class="clearspace10"></div>
  <div class="col-md-2"><div class="form-group">
	<div class="row">
	<div class="col-md-8 col-sm-8 col-xs-8">
	<span class="grpBoxTextTitle">Retirement Sum </span> 
             </div> 
            </div>
      </div></div> 
   <div class="col-md-2">     
	&nbsp;
      </div>
      <div class="col-md-2">&nbsp;</div>
      <div class="col-md-2">&nbsp;</div>
       <div class="col-md-2"><div class="btnStyle"> 
						    <button type="button"  id="btnClear" class="btn btn-primary">
						      <span class="txt">Clear</span> 
						    </button> 
					 </div> 
      </div>
       
      
   </div>
   
   
   <!-- 2nd row -->
   <div class="row" > 
   <div class="clearspace10"></div>
   <div class="col-md-2">&nbsp;</div> 
   <div class="col-md-2">     
	<div class="form-group">
	 <label class="control-label  mandFldastrks" for="brthYr">Year
				 					 <span class="mandFldastrks">*</span></label>
	  
             <div class="input-group input-group-sm fld-resp-sm date" id="cpfconfrmeffFrompicker"> 
						<input type="text" id="brthYr" name="brthYr" 
						class="form-control fld-resp-sm numbers apply4EvntYrs" 
						  onmouseover="fipaTooltip(this);" data-hasqtip="6">
					      <div class="input-group-addon"> 
 						<span id="symbolYrs" class="addYearSign"></span> </div>
					       </div>
           
      </div>
      </div>
      <div class="col-md-2">
      	<div class="form-group">  
            <label class="control-label  mandFldastrks" for="brsLimit">BRS
				 					 <span class="mandFldastrks">*</span></label>
             <div class="input-group input-group-sm fld-resp-mm"> 
						<div class="input-group-addon">
								<span class="glyphicon addDollarSign" id="symbolUsd"></span>
							</div>
					         <input type="text" name="brsLimit" id="brsLimit"
					          class="form-control numbers applyEvntUsd" 
					           onmouseover="fipaTooltip(this);" >
							
					       </div>
      	</div>
      </div>
      
      
      <div class="col-md-2">
      <div class="form-group"> 
            <label class="control-label" for="frsLimit">FRS</label>
            <div class="input-group input-group-sm fld-resp-mm"> 
		<div class="input-group-addon">
								<span class="glyphicon addDollarSign" id="symbolUsd"></span>
							</div>
				<input type="text" name="frsLimit" id="frsLimit" 
				class="form-control numbers applyEvntUsd"  
				onmouseover="fipaTooltip(this);" readonly="true">
				</div> 
      </div>
      </div>
      <div class="col-md-2">     
	<div class="form-group"> 
            <label class="control-label" for="ersLimit">ERS</label> 
            <div class="input-group input-group-sm fld-resp-mm"> 
		<div class="input-group-addon">
								<span class="glyphicon addDollarSign" id="symbolUsd"></span>
							</div>
					<input type="text" name="ersLimit" id="ersLimit" 
					class="form-control numbers applyEvntUsd"
					  onmouseover="fipaTooltip(this);" readonly="true">
					</div>
      </div>
      </div>
       
      
   </div>
			
			
			<!-- 3rd -->
			
			 <div class="row" > 
   <div class="clearspace10"></div>
   <div class="col-md-2">&nbsp;</div> 
   <div class="col-md-2">     
	<div class="form-group"> 
            <label class="control-label" for="bhcSum">Basic Health Care Sum (BHC)</label> 
            <div class="input-group input-group-sm fld-resp-mm"> 
						 <div class="input-group-addon">
								<span class="glyphicon addDollarSign" id="symbolUsd"></span>
							</div>
					         <input type="text" name="bhcSum" id="bhcSum"
					          class="form-control numbers applyEvntUsd" 
					          onmouseover="fipaTooltip(this);">
							
					       </div>
      </div>
      </div>
      <div class="col-md-2">
      	&nbsp;
      </div>
      
      
      <div class="col-md-2">
      &nbsp;
      </div>
      <div class="col-md-2">     
	&nbsp;
      </div>
       
      
   </div>
	
	</div>
		 
			<!-- End - Form --> 

 <input type="hidden" id="schId" name="schId">
</form>


 			 <script>
	jQuery(document).ready(function() {
		fipaInitPage();
	});
</script>
<script src="plugins/fipa/master/cpfretirementSum.js"></script>
 
 
