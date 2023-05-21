<div id="accordion" class="panel-group">
	<div id="areaofconcerndiv" class="accord-content">  
		<div class="panel-body"> 
<!-- 		<span class="panelHeaderTitle"> -->
<!--   		Other Areas of Concerns</span>  -->
  <div class="table-responsive"> 
  	<div class="row">
  	<div class="col-md-9"> &nbsp;</div>
  	
  	<div class="col-md-3">
  	
  	<div class="btn-group pull-right funcToDisable" role="group">
						
						<button type="button"   class="btn btn-default navbar-btn delRow-icon"  id="ArCDRow" disabled="true"></button>
						
			 		</div> 
			 		<div class="btn-group pull-right funcToDisable" role="group" style="margin-right: 10px;" >
						<button type="button"    class="btn btn-default navbar-btn addRow-icon" id="ArCARow"></button>
						<button type="button"   class="btn btn-default navbar-btn editRow-icon" id="ArCERow" disabled="true"></button>
<!-- 						<button type="button"   class="btn btn-default navbar-btn delRow-icon"  id="ArCDRow"></button> -->
<!-- 						<button type="button"   class="btn btn-default navbar-btn viewRow-icon" id="ArCVRow"></button> -->
			 		</div>
  	</div> 
  		
  	</div>
  	
  	<div class="row">
  	
  		<div class="col-md-12" >
					<table id="othareaofconTbl" class="dataTable table-bordered table-striped display hover"  style="width:100%" >
						<thead>
							<tr>
								<th>#</th> 
								<!-- <th>Select</th> -->
								<th><div  class="checkbox checkbox-primary text-center"><input type="checkbox" id="Selothareaofcon" name="Selothareaofcon" onclick="SelAllothareaofcon(this)"><label for="Selothareaofcon">&nbsp;</label></div></th>
								<th><div style="width:600px">Other Areas of Concerns<span class="mandFldastrks">*</span></div></th> 
							</tr>
						</thead>
						<tbody></tbody>
					</table>
		</div>
  	
  	</div>
					 
			 		</div>
					
				
				</div>
				 			
	</div>
</div>

 <!-- Modal  -->
<div class="modal fade" id="othareaofcon_Dialog" style="display: none"  tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
      <!-- <div class="btnStyle" style="text-align-last: end;">
                <button type="button" id="otherAreaofConCancelbtn" class="btn BtnFIPASRCH StylishSRCH" >
					      <span class="txt">Cancel</span>
					      <span class="round"><i class="fa fa-check"></i></span>
				 </button>
			</div> -->
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel"></h4>
         
      </div>
      <div class="modal-body"> 
		 
	<div class="row">
	<div class="form-group col-md-12 col-sm-12 col-xs-12">
	<label class="control-label mandFldastrks"
					for="txtFldDlgOthAreaConcern"> Other Area of Concern*</label>
								 
           		<textarea id="txtFldDlgOthAreaConcern" name="txtFldDlgOthAreaConcern"  
			 class="form-control"  onmouseover="fipaTooltip(this);" rows="5"  
			 maxlength="500"   ></textarea>			 
			 <input type="hidden" name="txtFldDlgFgCrtdBy" id="txtFldDlgFgCrtdBy"/>
			 <input type="hidden" name="txtFldDlgFgCrtdDate" id="txtFldDlgFgCrtdDate"/>
			 <input type="hidden" name="txtFldDlgFnaOacId" id="txtFldDlgFnaOacId"/>
			 <input type="hidden" name="txtFldDlgFnaOacMode" id="txtFldDlgFnaOacMode"/>
            
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
					    </button>
					    <!--  <button type="button" id="otherAreaofConCancelbtn" class="btn BtnFIPASRCH StylishSRCH" >
					      <span class="txt">Cancel</span>
					      <span class="round"><i class="fa fa-check"></i></span>
				 </button> -->
				 </div>
		   
      </div>
    </div>
  </div>
</div>





