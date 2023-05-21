<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
  
<div id="accordion" class="panel-group">   
  <div id="attachmntdiv" class="accord-content" style="">
      <span class="panelHeaderTitle"> 
  <small>
  <input type="text" name="updlstdatefrAttach" id="updlstdatefrAttach" class="txtlastupdated" readonly="true"/>
  </small></span> 
      <div class="panel-body" >  
      <span class="fipaFldLblTextbold" style="color:#50907C;">
      <!-- <img src="images/menuicons/canvas.png" width="3%" class="info"/>  -->
      <img src="images/menuicons/canvas.png" width="15" class="info" data-hasqtip="22" aria-describedby="qtip-22">
		All fields marked in <span class="mandFldastrks">*</span> are required </span>
					<div class="table-responsive"> 
					  <div class="pull-right funcToDisable" role="group">
					  	<button type="button" class="btn btn-default navbar-btn addRow-icon"  id="DcAttchARow"></button>
<!-- 						<button type="button" class="btn btn-default navbar-btn editRow-icon" id="DcAttchERow"></button> -->
						<button type="button" class="btn btn-default navbar-btn delRow-icon"  id="DcAttchDRow" disabled="true"></button>
<!-- 						<button type="button" class="btn btn-default navbar-btn viewRow-icon" id="DcAttchVRow"></button> -->
	  				 </div> 
					</div>  <!--changes done 19/06/2019 -->
						<table id="fnaAttachments" class="dataTable table-bordered table-striped display hover" style="width:100%">
							<thead>
								<tr>
									<th>#</th> 
									<!-- <th>Select</th> -->
									<th><div  class="checkbox checkbox-primary text-center"><input type="checkbox" id="SelfnaAttachments" name="SelfnaAttachments" onclick="SelAllfnaAttachments(this)"><label for="SelfnaAttachments" >&nbsp;</label></div></th>
									<th><div style="width: 180px;">Category<span class="mandFldastrks">*</span></div></th>
									<th><div style="width: 210px;">Document Title<span class="mandFldastrks">*</span></div></th>
									<th><div style="width: 150px;">Upload Document<span class="mandFldastrks">*</span></div></th>
									<th><div style="width: 90px;">No.of Pages</div></th>
									<th><div style="width: 80px;">File Type</div></th>
									<th><div style="width: 200px;">Remarks</div></th>
								</tr>
							</thead> 
							<tbody> 
							</tbody> 
						</table>  
      	</div>
    </div>
   
</div>









  <!-- Attachments-  Modal  --> 
   
   
   <div class="modal fade" id="attachments_Dialog" style="display: none"  tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
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
     <fieldset class="fieldsetClsborder scrollModelBody60">    
    
  <div class="col-md-12"> 
		<div class="form-group">
	<div class="row required">
	<div class="col-md-6 col-sm-6 col-xs-6"> 
           <label class="control-label pull-right text-right" for="selDlgAttCategory">
			  <font color="maroon">Category </font></label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
            <select name="selDlgAttCategory" id="selDlgAttCategory" class="form-control"  autofocus="true">
           <option value="">--SELECT--</option>
           <c:if test="${not empty ATTCH_CATG_LIST}">
						<c:forEach var="att" items="${ATTCH_CATG_LIST}">
							<option value="${att}">${att}</option>
						</c:forEach>
					</c:if>
            </select>
					   
            </div> 
            </div>
      </div>
      
      
      
      
      
      <div class="form-group">
	<div class="row required">
	<div class="col-md-6 col-sm-6 col-xs-6"> 
           <label class="control-label pull-right text-right" for="selDlgAttTitle">
			  <font color="maroon">Document Title</font></label> 
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
           <select name="selhidAttTitle"
					id="selhidAttTitle" class="form-control" style="display:none">
					<option value="">--SELECT--</option>
					<c:if test="${not empty ATTCH_TITLE_LIST}">
							<c:forEach var="att" items="${ATTCH_TITLE_LIST}">
								<option value="${att[0]}^${att[1]}">${att[2]}</option>
							</c:forEach>
						</c:if>
				</select>
				<input type="hidden" name="hidattachcatgid" id="hidattachcatgid"/>
				<select name="selDlgAttTitle" id="selDlgAttTitle" class="form-control">
           <option value="">--SELECT--</option>
            </select>
				
            </div> 
            </div>
      </div>
      
      
      
      <div class="form-group">
	<div class="row required">
	<div class="col-md-6 col-sm-6 col-xs-6"> 
            <label class="control-label pull-right text-right" for="selDlgAttDocument"> 
			 <font color="maroon">Upload Document </font></label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6" id="docuDiv"> 
            
             <input type='file'  id="selDlgAttDocument" name="selDlgAttDocument"  class="form-control"  /> 
             
            </div> 
            </div>
      </div>
      
      
      <div class="form-group">
	<div class="row required">
	    <div class="col-md-6 col-sm-6 col-xs-6"> 
           <label class="control-label pull-right text-right" for="txtFldDlgpageNo">
			No of pages</label> 
        </div> 
        <div class="col-md-3 col-sm-3 col-xs-3"> 
           <input  type="text" id="txtFldDlgpageNo" name="txtFldDlgpageNo" class="form-control" maxlength="4" />					
        </div> 
     </div>
   </div>
   
   
   <div class="form-group">
	<div class="row required">
	    <div class="col-md-6 col-sm-6 col-xs-6"> 
           <label class="control-label pull-right text-right" for="txtFldDlgAttRemarks">
			Remarks</label> 
        </div> 
        <div class="col-md-6 col-sm-6 col-xs-6"> 
          <textarea name="txtFldDlgAttRemarks" id="txtFldDlgAttRemarks"   
					class="form-control"  rows="5" cols="3" maxlength="300" ></textarea> 				
        </div> 
     </div>
   </div>
   
       
      
      
     <div class="form-group">  
			<input type="hidden" name="txtFldDlgdocid"/> 
			<input type="hidden" name="txtFldDlgcreatedBy"/>
			<input type="hidden" name="txtFldDlgcreatedDate"/>
			<input type="hidden" name="txtFldDlgfiletype"/>
			<input type="hidden" name="txtFldDlgfilesize"/>
			<input type="hidden" name="txtFldDlgattachDate"/>
			<input type="hidden" name="txtFldDlgmoduleRef"/>
			<input type="hidden" name="txtFldDlgreferenceId"/>
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
 




 
