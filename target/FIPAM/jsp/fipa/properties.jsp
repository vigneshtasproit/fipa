
<div id="accordion" class="panel-group">
	<div id="propertydiv" class="accord-content">
		<div class="panel-body "> 		
		<div class="table-responsive"> 
			<!-- <div class="col-md-4 pull-left">
				<img src="images/menuicons/cpfmort.png" class="img-rounded" style="width: 40px;height: 40px"/>
				<span class="panelHeaderTitle"> Property Ownership</span>
			</div> -->
			
			
			
			<div class="col-md-3 pull-left">
				<div class="btn-group pull-left" role="group">
					<a class="btn btn-default backToFdFlow" id="backToFdFlowProp" onclick="openBackToFundFlow('expdSelfProploan');"></a>
					<a class="btn btn-default backToAnlRnt" id="backToAnlRnt" onclick="openBackToFundFlowFromInv('incsrcSelfNempRentamt');"></a>
					<a class="btn btn-default backToCpfAD" id="backToCpfAD" onclick="openBackToCpfAD();"></a>
					<!-- 		Thulasy Added on 12/11/2018 -->
					<a class="btn btn-default bkliableicon" id="bkliableicon" onclick="openBackToFnLiable();"></a>
				</div>
			</div>
			
			<div class="col-md-4 pull-left">
				&nbsp;
			</div>			
			
			<div class="col-md-5 pull-right">			
				<div class="btn-group pull-right funcToDisable" role="group">
						<button type="button"  class="btn btn-default navbar-btn delRow-icon"  id="powncpfDRow" disabled="true"></button>
				</div>
				<div class="btn-group pull-right funcToDisable" role="group" style="margin-right: 10px;">
						<button type="button"  class="btn btn-default navbar-btn addRow-icon"  id="powncpfARow"></button>
						<button type="button"  class="btn btn-default navbar-btn editRow-icon" id="powncpfERow" disabled="true"></button>
<!-- 						<button type="button"  class="btn btn-default navbar-btn delRow-icon"  id="powncpfDRow"></button> -->
<!-- 						<button type="button"  class="btn btn-default navbar-btn viewRow-icon" id="powncpfVRow"></button> -->
				</div>				  
			</div>
		</div>
				 
	<div class="col-md-12" >
		<table class="dataTable table-bordered table-striped" id="fnaPropOwnTblByCPF" style="width:100%" >
			<thead class="fipaFldLblTextbold">
				<tr>
					<th rowspan="2">#</th> <!--changes done 19/06/2019 -->
					<!-- <th rowspan="2">Select</th> -->
					<th rowspan="2"><div  class="checkbox checkbox-primary text-center"><input type="checkbox" id="SelfnaPropOwnTblByCPF" name="SelfnaPropOwnTblByCPF" onclick="SelAllfnaPropOwnTblByCPF(this)"><label for="SelfnaPropOwnTblByCPF" >&nbsp;</label></div></th>
					<th rowspan="2"><div style="width:160px;">Description<span class="mandFldastrks">*</span></div></th>
					<th rowspan="2"><div style="width:80px;">Market Value<br/><small>($)</small><span class="mandFldastrks">*</span></div> 
					<th rowspan="2"><div style="width:65px;">Ownership<span class="mandFldastrks">*</span></div></th>
					<th rowspan="2"><div style="width:80px;">Property Appreciation Rate<br/><small>(%)</small></div></th>
					<th rowspan="2"><div style="width:80px;">Mortgage Outstanding<br/><small>($)</small></div></th>  
					<th rowspan="2"><div style="width:80px;">Outstanding Loan Period<br/><small>(yrs)</small></div></th> 
					<th rowspan="2"><div style="width:60px;">Objective</div></th>
					<th rowspan="2"><div style="width:80px;">Cur.Annl.Rental Income<br/><small>($)</small></div></th> 
					<th rowspan="2"><div style="width:80px;">Rental Period<br/><small>(yrs)</small></div></th>
					<th colspan="2"><div style="text-align:center;">Client's Annual Loan Repayment</div></th>
					<th colspan="2"><div style="text-align:center;">Spouse's Annual Loan Repayment</div></th>
					<th colspan="5"><div style="text-align:center;">On Retirement</div></th>
				</tr>
				<tr align="center">
					<th><div style="width:80px;">By CPF<br/><small>($)</small></div></th>
					<th><div style="width:80px;">By Cash<br/><small>($)</small></div></th>
					<th><div style="width:80px;">By CPF<br/><small>($)</small></div></th>
					<th><div style="width:80px;">By Cash<br/><small>($)</small></div></th>
					<th><div style="width:50px;">Sold</div></th> 
					<th><div style="width:50px;">To Rent</div></th>
					<th><div style="width:80px;">Est. Future Annl. Rental Income<br/><small>($)</small></div></th>
					<th><div style="width:60px;">Years to Rent<br/><small>(yrs)</small></div></th>
					<th><div style="width:80px;">FV of Property on retirement<br/><small>($)</small></div></th>
				</tr>
			</thead>
			<tbody></tbody> 
		</table>

	
	</div>
	
		</div>

<div class="clearspace40"></div>

</div>
</div>




<div class="form-group" style="display:none">
	   <input type="hidden" name="hTotClntLnCash" id="hTotClntLnCash">
	   <input type="hidden" name="hTotSpsLnCash" id="hTotSpsLnCash">
	   <input type="hidden" name="hTotClntLnCpf" id="hTotClntLnCpf">
	   <input type="hidden" name="hTotSpsLnCpf" id="hTotSpsLnCpf">
	   <input type="hidden" name="hTotRetCurInc" id="hTotRetCurInc">
	</div>


 
  <!-- Modal  -->
<div class="modal fade" id="propOwnCpf_Dialog" style="display: none"  tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog scrollModelBodyWidth1000" role="document">
    <div class="modal-content">
      <div class="modal-header">
       <!-- <div class="btnStyle" style="text-align-last: end;">
                <button type="button" id="propOwnCpfCancelbtn" class="btn BtnFIPASRCH StylishSRCH" >
					      <span class="txt">Cancel</span>
					      <span class="round"><i class="fa fa-check"></i></span>
				 </button>
			</div> -->
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel"></h4> 
      </div>
      <div class="modal-body">
     <fieldset class="fieldsetClsborder scrollModelBody60">
      
    <!-- 	dlgBdyWidth450 -->
		<div class="col-md-6"> 
		 <fieldset  id="poretirement"><legend class="customFIPAStyle">Details</legend> 
		 <div style="min-height: 383px;"> 
		 <div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 "> 
              <label class="control-label mandFldastrks pull-right text-right" for="txtFldDlgPropOwnCpfDesc">
             Description*</label> 
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
		 
                 <input type="text"
			 name="txtFldDlgPropOwnCpfDesc" id="txtFldDlgPropOwnCpfDesc"
			 class="form-control fld-resp-md"
			 maxlength="300"  /> 
			 
            </div> 
            </div>
      </div> 
      
      <div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 "> 
             <label class="control-label mandFldastrks pull-right text-right"
					for="txtFldDlgCpfPropMktVal">Market Value*</label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
		<div class="input-group input-group-sm fld-resp-md" >
					<div class="input-group-addon" > 
               <span class="glyphicon" id="symbolUsd"></span> </div>
					<input id="txtFldDlgCpfPropMktVal"
					name="txtFldDlgCpfPropMktVal" class="form-control numbers applyEvntUsd"
					 type="text" /> 
					</div> 	 
            </div> 
            </div>
      </div> 
      
      <div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 "> 
              <label class="control-label mandFldastrks pull-right text-right"
					for="txtFldDlgCpfPropOwnership">Ownership*
							</label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
		 
                 <select name="txtFldDlgCpfPropOwnership"
				 id="txtFldDlgCpfPropOwnership" 
				 class="form-control fld-resp-sm"  >
						 <option value="">--SELECT--</option>
						 <option value="Self">Self</option>
						 <option value="Spouse">Spouse</option>
						 <option value="Joint">Joint</option>
				 </select> 
            </div> 
            </div>
      </div> 
      
      
      
      
        
      <div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 "> 
              <label class="control-label pull-right text-right"
					for="txtFldDlgCpfPropMortageos">Mortgage
							Outstanding </label> 
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
		 
                 <div class="input-group input-group-sm fld-resp-md"> 
									 <span class="input-group-addon">
						  <span class="glyphicon" id="symbolUsd"></span>
					  </span>
					<input type='text' class="form-control numbers applyEvntUsd" id="txtFldDlgCpfPropMortageos"
					name="txtFldDlgCpfPropMortageos" /> 
					</div>
            </div> 
            </div>
      </div>
       
      
      <div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 "> 
             <label class="control-label pull-right text-right"
					for="txtFldDlgCpfPropOsloanPerd">Outstanding loan Period  
				</label> 
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
		<div class="input-group input-group-sm fld-resp-sm"> 
				<input type="text" name="txtFldDlgCpfPropOsloanPerd" id="txtFldDlgCpfPropOsloanPerd"
					class="form-control numbers applyEvntYrs"   /> 
						<div class="input-group-addon" > 
               <span class="glyphicon" id="symbolYrs"></span> </div>
					</div>  
            </div> 
            </div>
      </div> 
      
      
        <div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 "> 
             <label class="control-label pull-right text-right"  
            for="txtFldDlgCpfPropObj">
			  Objective</label>  
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
		<select name="txtFldDlgCpfPropObj"
				 id="txtFldDlgCpfPropObj" class="form-control fld-resp-sm"  >
				 <option value="">--SELECT--</option>
				 <option value="Inv">Inv</option>
				 <option value="Res">Res</option> 
			 </select> 
                 
            </div> 
            </div>
      </div> 
      
      
      
      <div  id="currentinc" >
      <div class="form-group"  >
            <div class="row">
	<div class="col-md-6 col-sm-6 col-xs-6 "> 
             <label class="fipaFldLblText pull-right text-right" for="txtFldDlgPropCurAnlRetInc"> 
           			Current Annual Rental Income 
					</label> 
				</div>
			<div class="col-md-6 col-sm-6 col-xs-6 "> 
			<div class="input-group input-group-sm" >
					<div class="input-group-addon" > 
               <span class="glyphicon" id="symbolUsd"></span> </div>
					<input id="txtFldDlgPropCurAnlRetInc" disabled="true"
					name="txtFldDlgPropCurAnlRetInc" class="form-control numbers applyEvntUsd currentinc"
					 type="text" /> 
					</div> 
				</div> 
            </div> 
            </div>
      
      
      
      
      <div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 "> 
             <label class="control-label pull-right text-right"
					for="txtFldDlgCpfPropRentPerd">Rental Period  
				</label> 
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
		<div class="input-group input-group-sm fld-resp-sm"> 
				<input type="text" name="txtFldDlgCpfPropRentPerd" disabled="true" id="txtFldDlgCpfPropRentPerd"  
					class="form-control numbers applyEvntYrs currentinc"   /> 
						<div class="input-group-addon" > 
               <span class="glyphicon" id="symbolYrs"></span> </div>
					</div>  
            </div> 
            </div>
      </div> 
      </div>
      
      <div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 "> 
             <label class="control-label pull-right text-right"
					for="txtFldDlgCpfPropApprecrate">Property Appreciation Rate  </label> 
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6">  
                 <div class="input-group input-group-sm fld-resp-sm"> 
					<input type="text" class="form-control numbers applyEvntpCent3" id="txtFldDlgCpfPropApprecrate"	 name="txtFldDlgCpfPropApprecrate"  onchange="callCalcPropFV()"/> 
					<div class="input-group-addon" > 
               <span class="glyphicon" id="symbolprCent"></span>  
               </div>
            </div> 
            </div>
      </div> 
      </div>
      
      </div>
      
		 </fieldset>
		
    
      
    
       
      </div>
      
      <!-- Second div -->
      <div class="col-md-6"> 
		
       
      
      
      <!-- <div class="form-group"> -->
      <fieldset  id="poloanreplay" style="padding-top: 20px;">
      <legend class="customFIPAStyle" style="margin: -21px;">Annual Loan Repayment</legend>
      
      
      <!-- <div class="col-md-12"> -->
        <!-- heading -->
       <div class="form-group"> 
      <div class="row" style="height:0px">
      
	<div class="col-md-6 text-center"> 
             <label class="fipaFldLblText">
					CASH
					</label> 
	</div>
	<div class="col-md-6 text-center"> 
	<label class="fipaFldLblText">
					CPF
					</label> 
	</div> 
            </div> 
            </div>
            
            <!-- 1 -->
       <div class="form-group"> 
      <div class="row">
	<div class="col-md-2"> 
             <label class="fipaFldLblText pull-right text-right" for="txtFldDlgPropLoanBySlfCash">
					Client
					</label> 
				</div>
				<div class="col-md-4"> 
				<div class="input-group input-group-sm">
					<div class="input-group-addon" > 
               <span class="glyphicon" id="symbolUsd"></span> </div>
						<input type="text"
					name="txtFldDlgPropLoanBySlfCash" id="txtFldDlgPropLoanBySlfCash"
					class="form-control numbers fld-resp-sm clsfipaClient applyEvntUsd" /> 
					</div> 
			 
				</div>
				<div class="col-md-2"> 
            <label class="fipaFldLblText pull-right text-right" for="txtFldDlgPropLoanBySlfCpf">
					Client
			</label> 	
				</div>
				<div class="col-md-4"> 
			<div class="input-group input-group-sm" >
					<div class="input-group-addon" > 
               <span class="glyphicon" id="symbolUsd"></span> </div>
						<input type="text"
					name="txtFldDlgPropLoanBySlfCpf" id="txtFldDlgPropLoanBySlfCpf"
					class="form-control numbers fld-resp-sm clsfipaClient applyEvntUsd" /> 
					</div>
             </div> 
           
            </div> 
            </div>
             
            <!-- 3part  -->
             <div class="form-group">
            <div class="row">
	<div class="col-md-2"> 
             <label class="fipaFldLblText pull-right text-right" for="txtFldDlgPropLoanBySpsCash">
					Spouse
					</label> 
				</div>
				<div class="col-md-4"> 
			<div class="input-group input-group-sm">
					<div class="input-group-addon" > 
               <span class="glyphicon" id="symbolUsd"></span> </div>
						<input type="text"
					name="txtFldDlgPropLoanBySpsCash" id="txtFldDlgPropLoanBySpsCash"
					class="form-control numbers fld-resp-sm clsfipaSpouse applyEvntUsd" /> 
					</div> 
				</div>
				<div class="col-md-2"> 
            <label class="fipaFldLblText pull-right text-right" for="txtFldDlgPropLoanBySpsCpf">
					Spouse
			</label> 	
				</div>
				<div class="col-md-4"> 
			<div class="input-group input-group-sm">
					<div class="input-group-addon" > 
               <span class="glyphicon" id="symbolUsd"></span> </div>
						<input type="text"
					name="txtFldDlgPropLoanBySpsCpf" id="txtFldDlgPropLoanBySpsCpf"
					class="form-control numbers fld-resp-sm clsfipaSpouse applyEvntUsd" /> 
					</div>
             </div> 
           
            </div> 
            </div>
       <!--       
      </div>
        -->
      </fieldset>
     <!--  </div> --> 
        
      
  <fieldset  id="poretirement"><legend class="customFIPAStyle">On Retirement</legend> 
      <div class="col-md-12" style="min-height:268px">  
            <!-- 3part  -->
             <div class="form-group">
            <div class="row">
	<div class="col-md-6"> 
             <label class="fipaFldLblText pull-right text-right" for="txtFldDlgCpfPropSold">
					Sold
					</label> 
				</div>
				<div class="col-md-6"> 
			<select name="txtFldDlgCpfPropSold"
				 id="txtFldDlgCpfPropSold" 
				 class="form-control fld-resp-sm"  >
				 <option value="">--SELECT--</option>
				 <option value="Y">Yes</option>
				 <option value="N">No</option> 
			 </select>
				</div> 
            </div> 
            </div>
            
            <div class="propretpart">
            <div class="form-group solddiv" >
            <div class="row">
	<div class="col-md-6"> 
             <label class="fipaFldLblText pull-right text-right" for="txtFldDlgPropRentOnRetire">					
						To Rent
					</label> 
				</div>
				<div class="col-md-6"> 
			<select name="txtFldDlgPropRentOnRetire"
				 id="txtFldDlgPropRentOnRetire" 
				 class="form-control fld-resp-sm"  >
				 <option value="">--SELECT--</option>
				 <option value="Y">Yes</option>
				 <option value="N">No</option> 
			 </select> 
				</div> 
            </div> 
            </div>
            
            
            <div class="form-group soldrentdiv yearstorentdiv" >
            <div class="row">
	<div class="col-md-6"> 
             <label class="fipaFldLblText pull-right text-right" for="txtFldDlgPropCurRetInc"> 
           			Est. Future Annual Rental Income
					</label> 
				</div>
				<div class="col-md-6"> 
			<div class="input-group input-group-sm" >
					<div class="input-group-addon" > 
               <span class="glyphicon" id="symbolUsd"></span> </div>
					<input id="txtFldDlgPropCurRetInc" disabled="true"
					name="txtFldDlgPropCurRetInc" class="form-control numbers applyEvntUsd"
					 type="text" /> 
					</div> 
				</div> 
            </div> 
            </div>
            
            <div class="form-group yearstorentdiv">
            <div class="row">
	<div class="col-md-6"> 
             <label class="fipaFldLblText pull-right text-right" for="txtFldDlgPropYrsToRent"> 
           			Years To Rent
					</label> 
				</div>
				<div class="col-md-6"> 
				
				<div class=" input-group input-group-sm fld-resp-sm">   
				<input type="text" name="txtFldDlgPropYrsToRent" id="txtFldDlgPropYrsToRent"
					class="form-control numbers applyEvntYrs"   /> 
							 <span class="input-group-addon">
					                <span class="glyphicon" id="symbolYrs"></span>
					            </span>
							</div> 
							
							
<!-- 			<div class="input-group input-group-sm fld-resp-mm">  -->
<!-- 				<input type="text" name="txtFldDlgPropYrsToRent" id="txtFldDlgPropYrsToRent" -->
<!-- 					class="form-control numbers applyEvntpCent"   />  -->
<!-- 						<div class="input-group-addon" >  -->
<!--                <span class="glyphicon" id="symbolprCent"></span> </div> -->
<!-- 					</div>  -->
				</div> 
            </div> 
<!--             Property FV on Rent -->
            </div>
            
            
            <div class="form-group yearstorentdiv yrstosolddiv" >
            <div class="row">
	<div class="col-md-6"> 
             <label class="fipaFldLblText pull-right text-right" for="propYrsToRet">
					Years to Retirement&nbsp;
					<a class="btn btn-default addinfoicon" id="poppropYrsToRet"> </a>
					</label> 
				</div>
				<div class="col-md-6"> 
				
				<div class=" input-group input-group-sm fld-resp-sm">  
					           					<input id="propYrsToRet" disabled="true"
					name="propYrsToRet" class="form-control numbers applyEvntYrs retYrstoret" type="text" /> 
							 <span class="input-group-addon">
					                <span class="glyphicon" id="symbolYrs"></span>
					            </span>
							</div> 
							
<!-- 			<div class="input-group input-group-sm" > -->
<!-- 					<div class="input-group-addon" >  -->
<!--                <span class="glyphicon" id="symbolUsd"></span> </div> -->
<!-- 					<input id="propYrsToRet" disabled="true" -->
<!-- 					name="propYrsToRet" class="form-control numbers applyEvntUsd retYrstoret" type="text" />  -->
<!-- 					</div>  -->
				</div> 
            </div> 
            </div>
            
            <div class="form-group yearstorentdiv yrstosolddiv">
            <div class="row">
	<div class="col-md-6"> 
             <label class="fipaFldLblText pull-right text-right" for="txtFldDlgPropFVOnRent">
					FV of Property on Ret.&nbsp;
					<a class="btn btn-default addinfoicon" id="poptxtFldDlgPropFVOnRent"></a>
					</label> 
				</div>
				<div class="col-md-6"> 
				<div class="input-group input-group-sm" >
					<div class="input-group-addon" > 
               <span class="glyphicon" id="symbolUsd"></span> </div>
					<input id="txtFldDlgPropFVOnRent" disabled="true"
					name="txtFldDlgPropFVOnRent" class="form-control numbers applyEvntUsd" type="text"  title="FV(Appr.Rate%,Years to Ret.,0,-Market Value,1)"/> 
					</div> 
							
			
				</div> 
            </div> 
            </div>
            </div>
            
             
      </div> 
      </fieldset>
            
             
            
       
      </div>
      
      <div class="col-md-12">
      
       			<input type="hidden" name="txtFldDlgCpfPropOwnId" id="txtFldDlgCpfPropOwnId"/> 
				<input type="hidden" name="txtFldDlgCpfPropCrtdBy" id="txtFldDlgCpfPropCrtdBy"/>
				<input type="hidden" name="txtFldDlgCpfPropCrtdDate"  id="txtFldDlgCpfPropCrtdDate"/>  
				<input type="hidden" name="txtFldDlgPropRefId" id="txtFldDlgPropRefId"/>  
				<input type="hidden" name="txtFldDlgPropMode" id="txtFldDlgPropMode"/>  
      
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
					    </button>
					   <!--  <button type="button" id="propOwnCpfCancelbtn" class="btn BtnFIPASRCH StylishSRCH" >
					      <span class="txt">Cancel</span>
					      <span class="round"><i class="fa fa-check"></i></span>
				 </button> -->
				 </div>
		   
      </div>
    </div>
  </div>
</div> 



 
