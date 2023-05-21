<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<form name="frmQuotes" id="frmQuotes" method="post">
 <div class="col-md-12">
 <div class="btn-group pull-right" role="group">
  <div class="col-md-3 hidden">
					<div class="btnStyle"> 
						    <button type="button"  id="btnQuotesSave" class="btn BtnFIPASRCH StylishSAVE">
						      <span class="txt">Save</span>
						      <span class="round"><i class="fa fa-floppy-o"></i></span>
						    </button> 
					 </div> </div>
					 
<!-- 			<button type="button" class="btn btn-info"  id="btnQuotesSave" style="margin-top: 6px;"> -->
<!-- 				  <span class="glyphicon glyphicon-save">&nbsp; Save</span> -->
<!-- 			   </button>  -->
		  </div><br><br>
  <div class="table-responsive">
  
				  
			<div class="btn-group pull-right hidden" role="group"  style="margin-right: 10px;">
						<button type="button"  class="btn btn-default navbar-btn addRow-icon" id="QuoteARow"></button>
						<button type="button"  class="btn btn-default navbar-btn editRow-icon" id="QuoteERow" ></button>
<!-- 						<button type="button"    class="btn btn-default navbar-btn delRow-icon" onclick="QuotesDelRow();"></button> -->
<!-- 						<button type="button"  class="btn btn-default navbar-btn viewRow-icon" onclick="QuotesViewRow();"></button> -->
					 
			 
					</div>
					</div>
					
					<div class="table-responsive">
					<table id="masterQuotestbl" class="dataTable table-bordered table-striped display hover" style="width: 100%">
					<thead> 
						<tr>
						
							<th>#</th>  
								<th>Select</th>
								<th><div style="width:230px">Author</div></th> 
								<th><div style="width:450px">Login Message</div></th>  
						</tr>
						 
						</thead> 
						<tbody></tbody>
					</table>
					</div>
 </div>
  
	 </form>
	 
	 <!-- Financial Goals/Concern -  Modal  -->
<div class="modal fade" id="quotes_Dialog" style="display: none"  tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
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
	<div class="row required">
	<div class="col-md-6 col-sm-6 col-xs-6"> 
           <label class="control-label pull-right text-right" for="txtFldDlgAuthor">
			  <font color="maroon">Author Name</font></label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
           <input id="txtFldDlgAuthor" name="txtFldDlgAuthor" class="form-control" type="text" maxlength="150">
            </div> 
            </div>
      </div>
      
      
      
      <div class="form-group">
	<div class="row required">
	<div class="col-md-6 col-sm-6 col-xs-6">  
			 <label class="control-label pull-right text-right" for="txtFldDlgLogMsg">
                 <font color="maroon"> Quotes</font></label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6">
           <textarea name="txtFldDlgLogMsg" id="txtFldDlgLogMsg"   
					class="form-control"  rows="10" maxlength="1200"  
					onmouseover="fipaTooltip(this);"></textarea>
					  
            </div> 
            </div>
      </div>
      
       
      
<!--       <div class="form-group"> -->
<!-- 	<div class="row required"> -->
<!-- 	<div class="col-md-6 col-sm-6 col-xs-6">  -->
<!--            <label class="control-label pull-right text-right" for="selDlgWeekQte"> -->
<!-- 			 <font color="maroon">Weekly View</font></label>  -->
<!--              </div>  -->
<!--            <div class="col-md-6 col-sm-6 col-xs-6">  -->
<!--            <select class="form-control fld-resp-sm" id="selDlgWeekQte" name="selDlgWeekQte"  > -->
<!-- 				 						<option value="">--SELECT--</option> -->
<!-- 				 						 <option value="N">No</option> -->
<!-- 				 						 <option value="Y">Yes</option>  -->
<!-- 				 				</select> -->
<!--             </div> -->
<!--       </div> -->
<!--       </div> -->
      
      
      <div class="form-group">		 
					 	 <input type="hidden" name="txtFldDlgQuotesId"/>
			            <input type="hidden" name="txtFldDlgQuotesFrom"/>
						 <input type="hidden" name="txtFldDlgQuoteTo"/>
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
  
  
<script src="plugins/fipa/master/masterquotes.js"></script>
  
	  <script>
	jQuery(document).ready(function() {
		fipaInitPage();
	});
</script>
