<div id="accordion" class="panel-group">
 <div id="brofrecomdiv" class="accord-content"> 
	<p class="panelHeaderTitle text-left" style="clear: both;"> Reasons for Recommendation
				(Explain the basis for recommendation of plan(s)) </p>
	<p class="text-left" style="clear: both;margin-left:15px;"><small>(a)&nbsp;&nbsp;How the plan meets client need(s).</small></p>
	<p class="text-left" style="clear: both;margin-left:15px;"><small>(a)&nbsp;&nbsp;Features and benefits of product sold.</small></p>	 
		<div class="panel-body"> 
			<div class="table-responsive">
					<div class="btn-group pull-right funcToDisable" role="group">
					 	<button type="button"  class="btn btn-default navbar-btn addRow-icon"  id="rsnARow"></button>
						<button type="button"  class="btn btn-default navbar-btn editRow-icon" id="rsnERow"></button>
						<button type="button"  class="btn btn-default navbar-btn delRow-icon"  id="rsnDRow"></button>
<!-- 						<button type="button"  class="btn btn-default navbar-btn viewRow-icon" id="rsnVRow"></button> -->
  				    </div>
					</div> 
					<table id="clntReasnsTable" class="dataTable table-bordered table-striped display hover"  style="width:100%" > 
						<thead>
							<tr> 
								<th>#</th> 
								<th>Select</th>
								<th>Reasons for Recommendation</th>
							</tr>
						</thead> 
						<tbody></tbody>
					</table>
					
			 
		</div>
	</div>  
</div>

 <!-- Modal  -->
<div class="modal fade" id="reasonsrecm_Dialog" style="display: none"  tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel"></h4>
        <span class="popupheader">
    <img src="images/menuicons/canvas.png" class="info" width="5%" ><small>
		All fields marked in maroon are required</small></span>
      </div>
      <div class="modal-body">
       
      <div class="row">
	<div class="form-group col-md-12 col-sm-12 col-xs-12">	
	<label class="control-label"
					for="txtFldDlgReasons"><font color="maroon"> Reasons and Recommandations</font></label>
								 
								 
           <!-- <div class="">  -->
           		<textarea id="txtFldDlgReasons" name="txtFldDlgReasons"  
			 class="form-control"  onmouseover="fipaTooltip(this);" rows="5" autofocus="true" 
			 maxlength="500" ></textarea>			 
			<input type="hidden"
					name="txtFldDlgFnaReasId" /> 
					<input type="hidden" name="txtFldDlgRecCrtdBy" />
					<input type="hidden" name="txtFldDlgRecCrtdDate" />
           <!--  </div>  -->
            </div>
      </div>     
      
      
      
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
