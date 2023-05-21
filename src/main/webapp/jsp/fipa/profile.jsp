<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
 
<!--   <span class='panelHeaderTitle'>Profile Summary</span> -->
<!-- 		<span class="pull-left grpBoxTextTitle"> Summary</span>   -->
		 
		<div class="panel-body">
		<div class="">  
	<div class="row" style="display: none">
	<div class="col-md-12" >
				<div class="col-md-4">
			  		<div class="input-container">
						 <label for="txtFldArctabCustName" class="control-label">Name</label>
					    <input class="textfilds" id="txtFldArctabCustName" name="txtFldArctabCustName"  style="font-weight: 700" readonly="true"/> 
					</div>
      			</div>
      			
      			<div class="col-md-4">
      				<div class="input-container">
						 <label for="txtFldArctabCustNric" id="lblSrchNric" class="control-label">NRIC/ FIN / Passport</label>
						<input class="textfilds" id="txtFldArctabCustNric" name="txtFldArctabCustNric"  style="font-weight: 700" readonly="true"/>
					</div>
      			</div>
      			
	</div>
	</div>
	<!-- <div class="clearspace20"></div> -->
	<div class="col-md-12" style="margin-top: -2%;">
<!-- 	changes done on 10072019  -->

	<!-- <div class="row"> 
	<div class="col-md-6">
 			<span class="bold">Showing 1 to <span class="prolength"></span> of <span class="prolength"></span></span>
    </div>              					 
	<div class="col-md-6">
	 <button type="button" class="btn btn-primary pull-right"  id="btnProfileArch" onclick="genCloneModels();">
			 <span class="fa fa-archive"></span>&nbsp;Toggle Profile Archive
		</button>
	</div>
	<br>
	</div> -->
	
	<!-- <div id="Profile_APD" > 
   <div id="ArchivePullupFlds">  -->
			<table id="ProfileSearchTable" class="dataTable table-striped table-bordered display" style="width:100%" >
				<thead>
					<tr>
						<th>#</th>
						<th>Select</th>
						<th>Date Created<br><span class="label label-info">DD/MM/YYYY HH:MM:SS</span></th>
						<th>Analysis</th>
						<th><div style="width:60px">Application Types</div></th>
						<th><div style="width:60px">Applicant</div></th>
						<!-- <th style="display:none"><div style="width:100px;">Replacement</div></th> -->
						<th><div style="width:80px">Remarks</div></th>
						<th>Status</th>
						<th>Approval</th>
					</tr>
					 
					
				</thead>
				<tbody>
				</tbody>	
	 </table>
	<!--  </div>
	 </div> -->
	</div>
	</div>
	</div> 

<div id="revieweDialog" title="Review Confirmation" class="hidden">
	<div class="panel-body" id="revieweDialogContent">
		<div class="form-group">		
			<label class="">For Analysis Created on 
			<span class="fipaFldLblText" id="spanReviewConfirm"></span> , would you like to do a review?</label><br/>			
		</div>	
	</div>
</div>

<div id="profileDialog" title="Application Types" class="hidden">
	<div class="panel-body" id="profileDialogContent">
		<div class="form-group">		
			<label class="">Please indicate your application types?&nbsp;<span class="mandFldastrks">*</span></label><br/>
			<label class="fipaFldLblText"><input type="radio" name="fnaType" id="fnaType" value="SIMPLIFIED"  />Simplified</label><br/> 
			<label class="fipaFldLblText"><input type="radio" name="fnaType" id="fnaType" value="FULLFACT"  />Full Fact</label><br/>
		</div>	
		
		<div class="form-group">
			<label class="">Would you like to map the existing data over to your next review?&nbsp;<span class="mandFldastrks">*</span></label><br/>
			<label class="fipaFldLblText"><input type="radio" name="radAppDataReview" id="radAppDataReview" value="Y"  />Yes</label><br/>
			<label class="fipaFldLblText"><input type="radio" name="radAppDataReview" id="radAppDataReview" value="N" checked />No</label><br/>
		</div>	
	</div> 
</div>

<!--  <div class="font_dialogbox" id="CantCreateNewProfDialog" style="display:none"> -->

<!-- 	<fieldset class="fieldsetClsborder" > -->
<!-- 		<!-- col1 --> 
<!-- 		<div class="col-md-12 ">     -->
<!-- 		  	<p class="text-center"> -->
<!--            		The Selected Profile is not latest!<br>Cannot edit this profile.<br>  -->
<!--        		</p> -->
<!--             </div> -->
<!--             </fieldset> -->
<!--             </div> -->
            
  
<!--   Thulasy 16.07.2019 -->
<div class="modal fade"  id="CantCreateNewProfDialog" style="display: none;" 
tabindex="-1" role="dialog" aria-labelledby="gridSystemModalLabel">
  <div class="modal-dialog alertModelContent modal-sm" role="document">
    <div class="modal-content"> 
      <div class="modal-body" style="text-align: center;">
       <fieldset class="fieldsetClsborder" >
		<!-- col1 -->
		<div class="col-md-12 ">    
		  	<h4 class="text-center">
           		The Selected Profile is not latest!<br>Cannot edit this profile.<br> 
       		</h4>
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
            
 
