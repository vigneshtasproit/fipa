<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%> 
<div class="tabset" style="background: white;">

  <!-- Tab 1 -->
  <input type="radio" name="tabset" id="AssetsTab" aria-controls="Assets" >
  <label for="AssetsTab"><i class="fa fa-money" title="Assets"></i>&nbsp;&nbsp;&nbsp;&nbsp;Assets</label>
  <!-- Tab 2 -->
  <input type="radio" name="tabset" id="LiabilityTab" aria-controls="Liability">
  <label for="LiabilityTab"><i class="fa fa-calculator" title="Liabilities"></i>&nbsp;&nbsp;&nbsp;&nbsp;Liabilities</label>
  
  <div class="tab-panels">
   <section id="Assets" class="tab-panel">
  <div class="container demo" style="margin-top: -2%;width: 1085px;">
 

 <div class="btnStyle" style="float:right;margin-left: 10px;">
					 <button type="button" id="btnColpAll" style="border-radius: 5px; background-color: rgb(238 238 238); display: inline-block;" class="btn BtnFIPAPREVS StylishSAVE"  data-hasqtip="1" aria-describedby="qtip-1">
			      			<span class="txt" style="color: #243665;">Collapse All</span>
			      			<span class="round" style="background-color: unset;color: #243665;"><i class="more-less glyphicon glyphicon-minus"></i></span>
			    	</button>   
</div>
<div class="btnStyle" style="float:right;">
					<button type="button" id="btnExpAll" style="border-radius: 5px; background-color: rgb(238 238 238); display: inline-block;" class="btn BtnFIPAPREVS StylishSAVE"  data-hasqtip="0" aria-describedby="qtip-0">
						<span class="txt" style="color: #243665;">Expand All</span>
						<span class="round" style="background-color: unset;color: #243665;"><i class="more-less glyphicon glyphicon-plus"></i></span>
					</button>   
</div>
 <div class="clearspace40"></div>
 <div class="clearspace15"></div>
    <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">

        <div class="panel panel-default">
            <div class="panel-heading" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne" role="tab" id="headingOne" style="color: #fff;background-color: #243665;border-color: #243665;font-size: 14px;padding: 13px 8px;">
                <h4 class="panel-title">
                    <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                       Cash At Bank
                         <i class="more-less glyphicon glyphicon-plus"  style="float:right"></i>
                    </a>
                </h4>
            </div>
            <div id="collapseOne" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
                <div class="panel-body">
                <div id="accordion" class="panel-group">   
		<div id="cobdiv" class="accord-content" style="">   
  		 <div class="panel-body" >   
				<div class="table-responsive"> 
					<div class="col-md-3 pull-left">
						<div class="btn-group pull-left" role="group">
					
							 <a class="btn btn-default backToCashAsset" id="backToCashAsset" onclick="openBackbackToCashAsset('casstSelfSavingfd');"></a>
						 	<a class="btn btn-default backToInvCash" id="backNavCashInv" onclick="openBackToInv()"></a>
	  	
						</div>
					</div>
					
					<div class="col-md-3 pull-left">
						&nbsp;
						<!-- <img src="images/menuicons/finliab.png"  class="img-rounded" width="50" height="50"/> 
						<span class="panelHeaderTitle">Cash At Bank</span> -->
					</div>
					
					<div class="col-md-6 pull-right">
					
						<div class="btn-group pull-right funcToDisable" role="group">
							<button type="button"  class="btn btn-default navbar-btn delRow-icon"  id="CobDRow" disabled="true"></button>
						</div>  
		  				<div class="btn-group pull-right funcToDisable" role="group" style="margin-right: 10px;" >
							<button type="button"  class="btn btn-default navbar-btn addRow-icon"  id="CobARow"></button>
							<button type="button"  class="btn btn-default navbar-btn editRow-icon" id="CobERow" disabled="true"></button>
	 	  				</div>
					</div>
					
					
	  				
						
					</div>  
					   
					<div class="">  
	<div class="col-md-12" > 
  <div id="COB_APD" > 
   <div id="cobMandatoryFlds"> 
					<table id="cashOfBanksTable" class="dataTable table-bordered table-striped display hover" style="width: 100%;min-width:100%">
					<thead>
				<!-- 	<tr>
							<th rowspan="2">#</th> 
							<th rowspan="2"><div  class="checkbox checkbox-primary text-center">
							<input type="checkbox" id="SelcashOfBanks" name="SelcashOfBanks" 
							onclick="SelAllcashOfBanks(this)"><label for="SelcashOfBanks">&nbsp;</label></div></th>
							<th rowspan="2"><div style="width: 150px;">Main Account holder name</div></th>
							<th rowspan="2"><div style="width: 150px;">Supp. Account  holder name</div></th>
							<th rowspan="2"><div style="width: 130px;">Relationship</div></th>
							<th rowspan="2"><div style="width: 75px;">Ownership</div></th>
							<th rowspan="2"><div style="width: 120px;">Name of bank</div></th>
							<th rowspan="2"><div style="width: 120px;">Bank Account No.</div></th>
							<th rowspan="2"><div style="width: 75px;">Type of Account</div></th>
							<th rowspan="2"><div style="width: 80px;">Current Balance</div></th>
							<th colspan="4"><div style="text-align:center;">Regular Deposit</div></th>  
							<th colspan="3"><div style="width: 100px;ext-align:center;">Objective</div></th>  
							<th rowspan="2"><div style="width: 180px;">Remarks</div></th>
						</tr>
						 <tr>
							<th><div style="width: 70px;">Amount<small>($)</small></div></th>
							<th><div style="width: 110px;">Frequency</div></th>
							<th><div style="width: 80px;">Period From<br><small>(DD/MM/YYYY)</small></div></th>
							<th><div style="width: 80px;">Period To<br><small>(DD/MM/YYYY)</small></div></th>
							<th><div style="width: 110px;">Objective</div></th> 
							<th><div style="width: 80px;"><small>(%)</small> of Retirement</div></th>
							<th ><div style="width:100px;">Name of Child</div></th>
							
			</tr> --> 
			 <tr>
							<th>#</th> 
							<th><div  class="checkbox checkbox-primary text-center"><input type="checkbox" id="SelcashOfBanks" name="SelcashOfBanks" onclick="SelAllcashOfBanks(this)"><label for="SelcashOfBanks">&nbsp;</label></div></th>
							<th><div style="width: 150px;">Description</div></th>
							<th><div style="width: 150px;">Type of Account</div></th>
							<th><div style="width: 130px;">Current Balance</div></th>
							<th><div style="width: 91px;">Objective</div></th>
							<th><div style="width: 135px;">Regular Deposit</div></th>
						</tr> 
						
					
						
						
					</thead>
					<tbody></tbody> 
				</table>
				</div>
				</div>
				</div>
					</div>
					
	 
<div class="clearspace20"></div>
				
				</div>   
      
      	</div> 
      	  
</div> 

<div class="table-responsive">
			<table class="display nowrap table table-borderless" style="width: 100%">
					<col style="width: 10%;"></col>
					<col style="width: 30%;"></col>
					<col style="width: 20%;"></col>
					<col style="width: 20%;"></col>
					<col style="width: 20%;"></col>
				<tbody>
					<tr align="left" class="fipaFldLblTextbold" >
						<td rowspan="4" style="vertical-align: middle;!important">
						<span class="panelHeaderTitle"> Self</span><br> 
						 <img src="images/menuicons/assetself.png" class="img-rounded" width="60" height="60" />
						</td>
						<td >&nbsp;
							
						</td>
						<td >
							&nbsp;
						</td>
						<td >
							<div style="text-align: center;"><span class="label label-info">%</span>&nbsp; Use for Retirement
								Planning</div>
						</td>
						<td >
							<div style="text-align: center;">Remarks</div>
							
						</td>

					</tr>
					<tr>
						<td>
							<div class="fipaFldLblText" style="text-align: right;"> 
							Savings and Fx deposits
							<a class="btn btn-default addnaviCobFixed" data-attr="Self"></a></div>
						</td>

						<td>
						<div class="fld-resp-md input-group input-group-sm"> 
						 <span class="input-group-addon">
					              <span class="glyphicon" id="symbolUsd"></span>
					         </span>
					         <input type="text" name="casstSelfSavingfd"
							id="casstSelfSavingfd" class="form-control numbers clsfipaClient applyEvntUsd cashassetself" data-ret-key="CA_SELF_FX_DEPOSIT"
							onchange="calcSum(this,'SUMOF_CASHASST_SELF')" ></input>
							</div>
						</td>

						<td align="center">
						<div class=" input-group input-group-sm fld-resp-sm">  
					         <input type="text" name="casstRpSavingfd"
							id="casstRpSavingfd" class="form-control numbers clsfipaClient applyEvntpCent cashassetself" data-ret-key="CA_SELF_FX_DEPOSIT"/>
							 <span class="input-group-addon">
					              <span class="glyphicon" id="symbolprCent"></span>
					         </span>
							</div>
						 </td>

						<td><input type="text" name="casstRemSavingfd"
							id="casstRemSavingfd" class="form-control fld-resp-md clsfipaClient" 
							maxlength="300"></input></td>

					</tr>

					<tr align="left" class="hidden">
						<td>
							<div class="fipaFldLblText" style="text-align: right;">
							Regular Savings for Retirement
							<a class="btn btn-default addnaviCobSaving" data-attr="Self"></a>
							</div>
						</td>


						<td>
						<div class="fld-resp-md input-group input-group-sm"> 
						 <span class="input-group-addon">
					              <span class="glyphicon" id="symbolUsd"></span>
					         </span>
					         <input type="text" name="casstSelfRegsaving"
							id="casstSelfRegsaving" class="form-control numbers clsfipaClient applyEvntUsd cashassetself cashassetself" data-ret-key="CA_SELF_REG_SAVINGS"/>
							</div>
							</td>

						<td align="center">
						<div class="input-group input-group-sm fld-resp-sm">  
						<input type="text" name="casstRpRegsaving" id="casstRpRegsaving" class="form-control numbers clsfipaClient applyEvntpCent cashassetself" data-ret-key="CA_SELF_REG_SAVINGS"/>
							 <span class="input-group-addon">
					              <span class="glyphicon" id="symbolprCent"></span>
					         </span>
							</div>
							</td>



						<td><input type="text" name="casstRemRegsaving"
							id="casstRemRegsaving" 
							class="form-control fld-resp-md numbers clsfipaClient"
							maxlength="300"></input></td>


					</tr>

					<tr align="left">

						<td>

							<div class="fipaFldLblText" style="text-align: right;">
							Cash equivalent &amp; others&nbsp;
							<a class="btn btn-default addnaviCobCashEq" data-attr="Self"></a>
							</div>

						</td>


						<td>
						<div class="fld-resp-md input-group input-group-sm"> 
						 <span class="input-group-addon">
					              <span class="glyphicon" id="symbolUsd"></span>
					         </span>
					         <input type="text" name="casstSelfCashequ"
							id="casstSelfCashequ" class="form-control numbers clsfipaClient applyEvntUsd cashassetself"  data-ret-key="CA_SELF_CASH_EQU" 
							onchange="calcSum(this,'SUMOF_CASHASST_SELF')" ></input>
							</div>
							</td>

						<td align="center">
							<div class="input-group input-group-sm fld-resp-sm">  
							<input type="text" name="casstRpCashequ"
							id="casstRpCashequ" class="form-control numbers clsfipaClient applyEvntpCent cashassetself" data-ret-key="CA_SELF_CASH_EQU" />
							 <span class="input-group-addon">
					              <span class="glyphicon" id="symbolprCent"></span>
					         </span>
							</div>
							</td>


						<td><input type="text" name="casstRemCashequ"
							id="casstRemCashequ" class="form-control fld-resp-md clsfipaClient"
							 maxlength="300"></input></td>

					</tr>

					<tr align="left">
						

						<td>

							<div class="fipaFldLblText" style="text-align: right;">
							SRS a/c &nbsp;
							<a class="btn btn-default addnaviCobSRS" data-attr="Self"></a> 
							</div>
 
						</td>


						<td>
						<div class="fld-resp-md input-group input-group-sm"> 
						 <span class="input-group-addon">
					              <span class="glyphicon" id="symbolUsd"></span>
					         </span>
					         <input type="text" name="casstSelfSrs"	id="casstSelfSrs" 
							class="form-control numbers clsfipaClient applyEvntUsd cashassetself" data-ret-key="CA_SELF_SRS"
							onchange="calcSum(this,'SUMOF_CASHASST_SELF')" />
							</div>
							</td>

						<td align="center">
							<div class="input-group input-group-sm fld-resp-sm"> 
							<input type="text" name="casstRpSrs" id="casstRpSrs" 
							class="form-control numbers clsfipaClient applyEvntpCent cashassetself" data-ret-key="CA_SELF_SRS"/>
							 <span class="input-group-addon">
					              <span class="glyphicon" id="symbolprCent"></span>
					         </span>
							</div>
							</td>

						<td><input type="text" name="casstRemSrs"
							id="casstRemSrs" class="form-control fld-resp-md clsfipaClient"
							 maxlength="300"></input></td>

					</tr>

					<tr align="left">
						<td></td>

						<td class="">

							<div class="fipaFldLblTextbold"
								style="color: #50907C; text-align: right;">Total Cash
								Assets</div>

						</td> 

						<td>
						<div class="fld-resp-md input-group input-group-sm"> 
						 <span class="input-group-addon">
					              <span class="glyphicon" id="symbolUsd"></span>
					         </span>
					         <input type="text" name="casstSelfTotal"
							readonly="true" class="form-control readOlyCursor clearfipaClient applyEvntUsd"
							id="casstSelfTotal"></input>
							</div>
							</td>

					</tr>
				</tbody>
			</table>
			</div>
			
			<div class="clearspace40"></div>
			<div class="middle-line"></div>
			<div class="clearspace40"></div>
			
				<div class="table-responsive">
			<table class="display nowrap table table-borderless" style="width: 100%">
				<col style="width: 10%;"></col>
				<col style="width: 30%;"></col>
				<col style="width: 20%;"></col>
				<col style="width: 20%;"></col>
				<col style="width: 20%;"></col>
				

				<tbody>
					<tr align="left" class="fipaFldLblTextbold">
						<td rowspan="3" style="vertical-align: middle;!important">
						<span class="panelHeaderTitle"> Spouse</span><br> 
						<img
							src="images/menuicons/assetspouse.png" class="img-rounded" width="60" height="60" />
							</td>
						<td >
							
						</td>
						<td >
							
						</td>
						<td >
							<div style="text-align: center;"><span class="label label-info">%</span>&nbsp; Use for Retirement
								Planning</div>
						</td>
						<td >
							<div style="text-align: center;">Remarks</div>
						</td>

					</tr>
					<tr>
						<td>
							<div class="fipaFldLblText" style="text-align: right;">
							Savings and Fx deposits &nbsp;
							<a class="btn btn-default addnaviCobFixed" data-attr="Spouse"></a></div>

						</td>

						<td>
						<div class="fld-resp-md input-group input-group-sm"> 
						 <span class="input-group-addon">
					              <span class="glyphicon" id="symbolUsd"></span>
					         </span>
					         <input type="text" name="casstSpsSavingfd"
							id="casstSpsSavingfd" class="form-control numbers clsfipaSpouse applyEvntUsd" 
							onchange="calcSum(this,'SUMOF_CASHASST_SPS')" ></input>
							</div>
							</td>

						<td align="center">
							<div class="input-group input-group-sm fld-resp-sm"> 
							<input type="text" name="casstSpsRpSavingfd"
							id="casstSpsRpSavingfd" class="form-control numbers clsfipaSpouse applyEvntpCent"
							 />
							 <span class="input-group-addon">
					              <span class="glyphicon" id="symbolprCent"></span>
					         </span>
							</div>
							</td>

						<td><input type="text" name="casstSpsRemSavingfd"
							id="casstSpsRemSavingfd" class="form-control fld-resp-md clsfipaSpouse" maxlength="300"></input></td>

					</tr>

					<tr align="left" class="hidden">
						<td>
							<div class="fipaFldLblText" style="text-align: right;">
							Regular Savings for Retirement&nbsp;
							<a class="btn btn-default addnaviCobSaving" data-attr="Spouse"></a>
							</div>
						</td>


						<td>
						<div class="fld-resp-md input-group input-group-sm"> 
						 <span class="input-group-addon">
					              <span class="glyphicon" id="symbolUsd"></span>
					         </span>
					         <input type="text" name="casstSpsRegsaving"
							id="casstSpsRegsaving" class="form-control numbers clsfipaSpouse applyEvntUsd" />
							</div>
							</td>

						<td align="center">
						<div class="input-group input-group-sm fld-resp-sm"> 
						<input type="text" name="casstSpsRpRegsaving"
							id="casstSpsRpRegsaving" class="form-control numbers clsfipaSpouse applyEvntpCent"
							 />
							 <span class="input-group-addon">
					              <span class="glyphicon" id="symbolprCent"></span>
					         </span>
							</div>
							</td>



						<td><input type="text" name="casstSpsRemRegsaving"
							id="casstSpsRemRegsaving" class="form-control fld-resp-md clsfipaSpouse"
							maxlength="300"></input></td>


					</tr>

					<tr align="left">

						<td>

							<div class="fipaFldLblText" style="text-align: right;">
							Cash equivalent &amp; others &nbsp; 
							<a class="btn btn-default addnaviCobCashEq" data-attr="Spouse"></a>
							</div>

						</td>


						<td>
						<div class="fld-resp-md input-group input-group-sm"> 
						 <span class="input-group-addon">
					              <span class="glyphicon" id="symbolUsd"></span>
					         </span>
					         <input type="text" name="casstSpsCashequ"
							id="casstSpsCashequ" class="form-control numbers clsfipaSpouse applyEvntUsd"  
							onchange="calcSum(this,'SUMOF_CASHASST_SPS')"></input>
							</div>
							</td>

						<td align="center">
						<div class="input-group input-group-sm fld-resp-sm"> 
						<input type="text" name="casstSpsRpCashequ"
							id="casstSpsRpCashequ" class="form-control numbers clsfipaSpouse applyEvntpCent"
							 />
							<span class="input-group-addon">
					              <span class="glyphicon" id="symbolprCent"></span>
					         </span>
							</div>
							</td>


						<td><input type="text" name="casstSpsRemCashequ"
							id="casstSpsRemCashequ" class="form-control fld-resp-md clsfipaSpouse"
							maxlength="300"></input></td>

					</tr>

					<tr align="left">
						<td></td>

						<td>

							<div class="fipaFldLblText" style="text-align: right;">
							SRS a/c &nbsp;
							<a class="btn btn-default addnaviCobSRS" data-attr="Spouse"></a>
							</div>

						</td>


						<td>
						<div class="fld-resp-md input-group input-group-sm"> 
						 <span class="input-group-addon">
					              <span class="glyphicon" id="symbolUsd"></span>
					         </span>
					         <input type="text" name="casstSpsSrs"
							id="casstSpsSrs" maxlength="22"
							class="form-control numbers clsfipaSpouse applyEvntUsd" 
							onchange="calcSum(this,'SUMOF_CASHASST_SPS')" />
							</div>
							</td>

						<td align="center">
						<div class="input-group input-group-sm fld-resp-sm">
						<input type="text" name="casstSpsRpSrs"
							id="casstSpsRpSrs"  
							class="form-control numbers clsfipaSpouse applyEvntpCent" />
							<span class="input-group-addon">
					              <span class="glyphicon" id="symbolprCent"></span>
					         </span>
							</div>
							</td>

						<td><input type="text" name="casstSpsRemSrs"
							id="casstSpsRemSrs" class="form-control fld-resp-md clsfipaSpouse"
							maxlength="300"></input></td>

					</tr>

					<tr align="left">
						<td></td>

						<td class="">

							<div class="fipaFldLblTextbold"
								style="color: #50907C; text-align: right;">Total Cash
								Assets</div>

						</td>


						<td>
						<div class="fld-resp-md input-group input-group-sm"> 
						 <span class="input-group-addon">
					              <span class="glyphicon" id="symbolUsd"></span>
					         </span>
					         <input type="text" name="casstSpsTotal"
							readonly="true" class="form-control readOlyCursor clearfipaSpouse"
							id="casstSpsTotal"></input>
							</div></td>

					</tr>
				</tbody>
			</table>
</div>


			<div class="clearspace40"></div>
			<div class="middle-line"></div>
			<div class="clearspace40"></div>
			
			
			<div class="table-responsive">
			<table class="display nowrap table table-borderless" style="width: 100%">
				<col style="width: 10%;"></col>
				<col style="width: 30%;"></col>
				<col style="width: 20%;"></col>
				<col style="width: 20%;"></col>
				<col style="width: 20%;"></col>
				

				<tbody>
					<tr align="left" class="fipaFldLblTextbold">
						<td rowspan="3" style="vertical-align: middle;!important">
						<span class="panelHeaderTitle"> Jointly</span><br> 
						 
						<img
							src="images/menuicons/assetjoint.png" class="img-rounded" width="60" height="60"/>
							</td>
						<td >
							
						</td>
						<td >
							
						</td>
						<td >
							<div style="text-align: center;"><span class="label label-info">%</span>&nbsp; Use for Retirement
								Planning</div>
						</td>
						<td >
							<div style="text-align: center;">Remarks</div>
						</td>

					</tr>
					<tr>
						<td>
							<div class="fipaFldLblText" style="text-align: right;">
							Savings and Fx deposits &nbsp;
							<a class="btn btn-default addnaviCobFixed" data-attr="Joint"></a> 
							</div>

						</td>

						<td> 
						<div class="fld-resp-md input-group input-group-sm"> 
						 <span class="input-group-addon">
					              <span class="glyphicon" id="symbolUsd"></span>
					         </span>
					         <input type="text" name="casstFamSavingfd"
							id="casstFamSavingfd" class="form-control numbers applyEvntUsd" 
							onchange="calcSum(this,'SUMOF_CASHASST_JOIN')"></input>
							</div>
							</td>

						<td align="center">
						<div class="input-group input-group-sm fld-resp-sm">
						<input type="text" name="casstFamRpSavingfd"
							id="casstFamRpSavingfd" class="form-control numbers applyEvntpCent"
						 />
							 <span class="input-group-addon">
					              <span class="glyphicon" id="symbolprCent"></span>
					         </span>
							</div>
							</td>

						<td><input type="text" name="casstFamRemSavingfd"
							id="casstFamRemSavingfd" class="form-control fld-resp-md"
							maxlength="300"></input></td>

					</tr>

					<tr align="left" class="hidden">
						<td>
							<div class="fipaFldLblText" style="text-align: right;">
							Regular Savings for Retirement &nbsp;
							<a class="btn btn-default addnaviCobSaving" data-attr="Joint"></a>
							</div>
						</td> 

 
						<td>
						<div class="fld-resp-md input-group input-group-sm"> 
						 <span class="input-group-addon">
					              <span class="glyphicon" id="symbolUsd"></span>
					         </span>
					         <input type="text" name="casstFamRegsaving"
							id="casstFamRegsaving" class="form-control numbers applyEvntUsd" />
							</div>
							</td>

						<td align="center">
						<div class="input-group input-group-sm fld-resp-sm"> 
						<input type="text" name="casstFamRpRegsaving"
							id="casstFamRpRegsaving" class="form-control numbers applyEvntpCent" />
							 <span class="input-group-addon">
					              <span class="glyphicon" id="symbolprCent"></span>
					         </span>
							</div>
							</td>



						<td><input type="text" name="casstFamRemRegsaving"
							id="casstFamRemRegsaving" class="form-control fld-resp-md"
							maxlength="300"></input></td>


					</tr>

					<tr align="left">

						<td>

							<div class="fipaFldLblText" style="text-align: right;">
							Cash equivalent &amp; others &nbsp;
							<a class="btn btn-default addnaviCobCashEq" data-attr="Joint"></a>
							</div>

						</td>


						<td>
						<div class="fld-resp-md input-group input-group-sm"> 
						 <span class="input-group-addon">
					              <span class="glyphicon" id="symbolUsd"></span>
					         </span>
					         <input type="text" name="casstFamCashequ"
							id="casstFamCashequ" class="form-control numbers applyEvntUsd" 
							onchange="calcSum(this,'SUMOF_CASHASST_JOIN')" ></input>
							</div>
							</td>

						<td align="center">
						<div class="input-group input-group-sm fld-resp-sm"> 
						<input type="text" name="casstFamRpCashequ"
							id="casstFamRpCashequ" class="form-control numbers applyEvntpCent" />
							 <span class="input-group-addon">
					              <span class="glyphicon" id="symbolprCent"></span>
					         </span>
							</div>
							</td>


						<td><input type="text" name="casstFamRemCashequ"
							id="casstFamRemCashequ" class="form-control fld-resp-md"
							maxlength="300"></input></td>

					</tr>
					
					
					<tr align="left">
						<td></td>

						<td>

							<div class="fipaFldLblText" style="text-align: right;">
							SRS a/c &nbsp;
							<a class="btn btn-default addnaviCobSRS" data-attr="Joint"></a></div>

						</td>


						<td>
						<div class="fld-resp-md input-group input-group-sm"> 
						 <span class="input-group-addon">
					              <span class="glyphicon" id="symbolUsd"></span>
					         </span>
					         <input type="text" name="casstFamSrs"
							id="casstFamSrs" maxlength="22"
							class="form-control numbers clsfipaFamily applyEvntUsd" 
							onchange="calcSum(this,'SUMOF_CASHASST_JOIN')"></input>
							</div>
							</td>

						<td align="center">
						<div class="input-group input-group-sm fld-resp-sm">
						<input type="text" name="casstFamRpSrs"
							id="casstFamRpSrs"  
							class="form-control numbers clsfipaFamily applyEvntpCent" >
							<span class="input-group-addon">
					              <span class="glyphicon" id="symbolprCent"></span>
					         </span>
							</div>
							</td>

						<td><input type="text" name="casstFamRemSrs"
							id="casstFamRemSrs" class="form-control fld-resp-md clsfipaFamily"
							maxlength="300"></input></td>

					</tr>			



					<tr align="left">
						<td></td>

						<td class="">

							<div class="fipaFldLblTextbold"
								style="color: #50907C; text-align: right;">Total Cash
								Assets</div>

						</td>


						<td>
						<div class="fld-resp-md input-group input-group-sm"> 
						 <span class="input-group-addon">
					              <span class="glyphicon" id="symbolUsd"></span>
					         </span><input type="text" name="casstFamTotal"
							readonly="true" class="form-control readOlyCursor applyEvntUsd"
							id="casstFamTotal"></input>
							</div>
					</td>

					</tr>
				</tbody>
			</table>
			</div>
			
			
			<div class="clearspace40"></div>
			<div class="middle-line"></div>
			<div class="clearspace40"></div>
  <!-- Modal  -->
<div class="modal fade" id="Cob_Dialog" style="display: none"  tabindex="-1" role="dialog" aria-labelledby="myModalLabel"  style="z-index:1053 !important">
  <div class="modal-dialog scrollModelBodyWidth1000" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel"></h4>
         
      </div>
      <div class="modal-body">
     <fieldset class="fieldsetClsborder scrollModelBody60">
      
    
		<div class="col-md-6"> 
		
		<div class="form-group">
	<div class="row" >
	<div class="col-md-5 col-sm-6 col-xs-6 "> 
                <label for="txtFldDlgMainAccHolderName" class="control-label pull-right text-right">
			  Description</label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
		  <input id="txtFldDlgDescription" name="txtFldDlgDescription" class="form-control fld-resp-md"  type="text" maxlength="150"  onmouseover="fipaTooltip(this);"  />
			 
            </div> 
            </div>
      </div>
      
		<div class="form-group">
	<div class="row" >
	<div class="col-md-5 col-sm-6 col-xs-6 "> 
                <label for="txtFldDlgMainAccHolderName" class="control-label pull-right text-right">
			  Main Account Holder</label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
		 <select class="form-control fld-resp-md" id="txtFldDlgMainAccHolderName"
					name="txtFldDlgMainAccHolderName"  >
					<option value="">--SELECT--</option>
					</select>
			 
            </div> 
            </div>
      </div> 
      
      
      <div class="form-group">
	<div class="row" >
	<div class="col-md-5 col-sm-6 col-xs-6 "> 
             <label for="txtFldDlgSuppAccHolderName" class="control-label pull-right text-right">
             Supp. Account Holder </label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
		   <input id="txtFldDlgSuppAccHolderName" name="txtFldDlgSuppAccHolderName"  
         class="form-control fld-resp-md"  
				type="text" maxlength="75"  onmouseover="fipaTooltip(this);"  />
            </div> 
            </div>
      </div> 
      
      
      
      <div class="form-group">
	<div class="row" >
	<div class="col-md-5 col-sm-6 col-xs-6 "> 
               <label for="selDlgCOBRelationship" class="control-label pull-right text-right">
             Relationship</label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
		  <select class="form-control fld-resp-mm" id="selDlgCOBRelationship"
					name="selDlgCOBRelationship"  >
					<option value="">--SELECT--</option>
					<c:if test="${not empty RELATIONSHIP}">
						<c:forEach var="depnrelation" items="${RELATIONSHIP}">
							<option value="${depnrelation[1]}">${depnrelation[1]}</option>
						</c:forEach>
					</c:if>
				</select>
            </div> 
            </div>
      </div> 
      
      
      
      
      <div class="form-group">
	<div class="row" >
	<div class="col-md-5 col-sm-6 col-xs-6 "> 
            <label class="control-label  pull-right text-right" 
            		for="selDlgCOBOwnershipType">Ownership type</label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6">  
                 <select class="form-control fld-resp-sm" id="selDlgCOBOwnershipType"
					name="selDlgCOBOwnershipType" onmouseover="fipaTooltip(this);">
					<option value="">--SELECT--</option>
					<c:if test="${not empty OWNERSHIP_LIST}">
						<c:forEach var="ownership" items="${OWNERSHIP_LIST}">
							<option value="${ownership}">${ownership}</option>
						</c:forEach>
					</c:if>
				</select> 
            </div>
      </div> 
      </div>
      
      
      <div class="form-group">
	<div class="row" >
	<div class="col-md-5 col-sm-6 col-xs-6 "> 
               <label class="control-label pull-right text-right" for="selDlgCOBAccountType">Type of Account</label>
             
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
		 <select class="form-control fld-resp-sm" id="selDlgCOBAccountType"
					name="selDlgCOBAccountType"  >
					<option value="">--SELECT--</option>
					<c:if test="${not empty ACCOUNT_TYPE_LIST}">
						<c:forEach var="acctype" items="${ACCOUNT_TYPE_LIST}">
							<option value="${acctype}">${acctype}</option>
						</c:forEach>
					</c:if>
				</select>
            </div> 
            </div>
      </div> 
      
      
      
       <div class="form-group">
	<div class="row" >
	<div class="col-md-5 col-sm-6 col-xs-6 "> 
              <label class="control-label pull-right text-right" for="txtFldDlgCOBCurBalance">
              Current Balance</label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
		<div class="input-group input-group-sm fld-resp-md">
					<div class="input-group-addon" > 
               <span class="glyphicon" id="symbolUsd"></span> </div>
               <input id="txtFldDlgCOBCurBalance" name="txtFldDlgCOBCurBalance" 
                class="form-control numbers applyEvntUsd26"    type="text"  />  
               </div>
               
            </div> 
            </div>
      </div> 
      
     
       
      </div>
      
      <!-- Second div -->
      <div class="col-md-6"> 
		<div class="form-group" style="display:none">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 "> 
              <label class="control-label pull-right text-right" for="txtFldDlgCOBBankName">
              Name Of Bank</label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
		 <input id="txtFldDlgCOBBankName" name="txtFldDlgCOBBankName"  class="form-control fld-resp-md"  
							type="text" maxlength="150" />
                 
            </div> 
            </div>
      </div> 
      
      
      <div class="form-group">
	<div class="row" >
	<div class="col-md-4 col-sm-6 col-xs-6 "> 
             <label class="control-label  pull-right text-right" for="txtFldDlgCOBBankAccNo">
				 Bank Account Number</label> 
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
		 <input id="txtFldDlgCOBBankAccNo" name="txtFldDlgCOBBankAccNo"  class="form-control fld-resp-md"  
				type="text" maxlength="60"  onmouseover="fipaTooltip(this);"  />
            </div> 
            </div>
      </div> 
      
      <div class="form-group">
	<div class="row" >
	<div class="col-md-4 col-sm-6 col-xs-6 "> 
             <label class="control-label pull-right text-right" for="">Regular Deposit</label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6">  
                  
            </div>
      </div> 
      </div>
      
      <div class="form-group">
	<div class="row" >
	<div class="col-md-4 col-sm-6 col-xs-6 "> 
             <label class="control-label pull-right text-right" for="txtFldDlgCOBRegDeposit">Regular Deposit Amount</label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6">  
                  <div class="input-group input-group-sm fld-resp-md">
					<div class="input-group-addon" > 
               <span class="glyphicon" id="symbolUsd"></span> </div>
               <input id="txtFldDlgCOBRegDeposit" name="txtFldDlgCOBRegDeposit" type="text" 
               class="form-control numbers applyEvntUsd26"   /> 
               </div> 
            </div>
      </div> 
      </div>
      
      
      <div class="form-group">
	<div class="row" >
	<div class="col-md-4 col-sm-6 col-xs-6 "> 
              <label class="control-label pull-right text-right" for="selDlgCOBDepositFreq">
							 Frequency of Deposit</label>
							 </div> 
           <div class="col-md-6 col-sm-6 col-xs-6">  
                  <select class="form-control fld-resp-mm" id="selDlgCOBDepositFreq"
					name="selDlgCOBDepositFreq" onmouseover="fipaTooltip(this);">
					<option value="">--SELECT--</option>
					<c:if test="${not empty LI_PAYMENTS_LIST}">
						<c:forEach var="payment" items="${LI_PAYMENTS_LIST}">
							<option value="${payment}">${payment}</option>
						</c:forEach>
					</c:if>
				</select>
            </div>
      </div> 
      </div>
      
       <div class="form-group">
            <div class="row">
	<div class="col-md-4"> 
             <label class="control-label pull-right text-right" for="txtFldDlgCOBPerFrom">Period of Regular Deposit</label> 
             	</div>
            <div class="col-md-6 col-sm-6 col-xs-6"> 
		            <div class="input-group input-group-sm fld-resp-sm">
							<input type="text" class="form-control numbers applyEvntYrs" id="txtFldDlgCOBPeriodRegDeposit" name="txtFldDlgCOBPeriodRegDeposit" maxlength="3">  
							<div class="input-group-addon"> 
		               <span class="glyphicon addYearSign" id="symbolYrs"></span> </div> 
							</div>
		            </div>
            </div> 
            </div>
            
      <div class="form-group" style="display:none">
            <div class="row">
	<div class="col-md-4"> 
             <label class="control-label pull-right text-right" for="txtFldDlgCOBPerFrom">Period From
             <small>(DD/MM/YYYY)</small></label> 
             	</div>
				<div class="col-md-6"> 
			 <div class="input-group input-group-sm fld-resp-mm date" id="COBPerFrmpicker">
							<input id="txtFldDlgCOBPerFrom" name="txtFldDlgCOBPerFrom" 
							 class="form-control" 
				type="text" maxlength="10" />
							<div class="input-group-addon">
								<span class="glyphicon glyphicon-calendar"></span>
							</div> 
				</div> 
				</div> 
            </div> 
            </div>
            
            
      
        <div class="form-group" style="display:none">
            <div class="row">
	<div class="col-md-4"> 
             <label class="control-label pull-right text-right" for="txtFldDlgCOBPerTo">Period To
             <small>(DD/MM/YYYY)</small></label> 
             	</div>
				<div class="col-md-6"> 
			 <div class="input-group input-group-sm fld-resp-mm date" id="COBPerTopicker">
							<input id="txtFldDlgCOBPerTo" name="txtFldDlgCOBPerTo"
							  class="form-control" 
				type="text" maxlength="10"  />
							<div class="input-group-addon">
								<span class="glyphicon glyphicon-calendar"></span>
							</div> 
             </div> 
				</div> 
            </div> 
            </div> 
            
             <div class="form-group">
            <div class="row">
	<div class="col-md-4"> 
        <label class="control-label pull-right text-right" for="selDlgCOBObjective">Objective</label>
				</div>
				<div class="col-md-6"> 
			 <select class="form-control fld-resp-mm" id="selDlgCOBObjective"
					name="selDlgCOBObjective" onmouseover="fipaTooltip(this);"  >
					<option value="">--SELECT--</option>
					<c:if test="${not empty OBJECTIVE_LIST}">
						<c:forEach var="cobobj" items="${OBJECTIVE_LIST}">
							<option value="${cobobj}">${cobobj}</option>
						</c:forEach>
					</c:if>
				</select>
				</div> 
            </div> 
            </div>
      
          <div  id="COBRetirementPrcnt" style="display:none;">
            <!--  <div class="form-group">
            <div class="row">
	<div class="col-md-6"> 
              <label class="control-label pull-right text-right" for="txtFldDlgCOBRetrmntPrcnt">% for retirement </label>
				</div>
				<div class="col-md-6"> 
			 <div class="input-group input-group-sm fld-resp-sm"> 
				<input id="txtFldDlgCOBRetrmntPrcnt" name="txtFldDlgCOBRetrmntPrcnt"  
				class="form-control numbers applyEvntpCent26" type="text"  />
				<div class="input-group-addon" > 
               <span class="glyphicon" id="symbolprCent"></span> </div>
				</div>
				</div> 
            </div> 
            </div> --> 
            
           <!--  <div class="form-group">
            <div class="row">
			<div class="col-md-6"> 
              <label class="control-label pull-right text-right" for="txtFldDlgCOBYrsToRet">
              		 Years to Retirement </label>
				</div>
				<div class="col-md-6"> 
				<div class="input-group input-group-sm fld-resp-mm"> 
                <input type="text" onmouseover="fipaTooltip(this);"  name="txtFldDlgCOBYrsToRet"
					id="txtFldDlgCOBYrsToRet" class="form-control numbers applyEvntYrs" readonly="true"
					 />
					<div class="input-group-addon">
				       <span class="glyphicon" id="symbolYrs"></span> 
				       </div>
				       </div>  
				</div> 
            </div> 
            </div> -->
            <div class="form-group">
            <div class="row">
			<div class="col-md-4"> 
              <label class="control-label pull-right text-right" for="txtFldDlgCOBYrsToRet">
              		 Years to Retirement </label>
				</div>
				
			<div class="col-md-3"> 
				<div class="input-group input-group-sm fld-resp-sm"> 
                <input type="text" onmouseover="fipaTooltip(this);" name="txtFldDlgCOBYrsToRet" id="txtFldDlgCOBYrsToRet" class="form-control numbers applyEvntYrs" maxlength="3" readonly="" data-hasqtip="168" aria-describedby="qtip-168">
					<div class="input-group-addon">
				       <span class="glyphicon addYearSign" id="symbolYrs"></span> 
				       </div>
				       </div>  
				</div>
				
				
				<div class="col-md-2"> 
				<div class="input-group input-group-sm fld-resp-sm"> 
                <input id="txtFldDlgCOBRetrmntPrcnt" name="txtFldDlgCOBRetrmntPrcnt"  class="form-control numbers applyEvntpCent26" type="text"  />
				<div class="input-group-addon" > 
               <span class="glyphicon" id="symbolprCent"></span> </div>
				       </div>  
				</div> 
				
				 <label class="control-label" for="txtFldDlgCOBRetrmntPrcnt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;% to use </label>
				
            </div> 
            </div>
            
            
            </div>
            
            <div class="form-group"  id="COBChildName" style="display:none;">
            <div class="row">
	<div class="col-md-4"> 
              <label class="control-label pull-right text-right" for="selDlgCOBChildName">Name of child
            <a class="btn btn-default addinfoicon" id="popselDlgCOBChildName"></a>
              </label>
				</div>
				<div class="col-md-6">  
        	<select class="form-control fld-resp-mm" id="selDlgCOBChildName" name="selDlgCOBChildName">
				<option value="">--SELECT--</option> 
			  </select>  
			  <small class="chkchildexist hidden">No child found!</small>
				</div> 
            </div> 
            </div>
            
             <div class="form-group" style="display:none;">
            <div class="row">
	<div class="col-md-6"> 
               <label for="txtFldDlgCOBRemarks" class="control-label pull-right text-right">Remarks </label>
				</div>
				<div class="col-md-6">  
        	<textarea name="txtFldDlgCOBRemarks" id="txtFldDlgCOBRemarks"   
					class="form-control"   rows="5" maxlength="300" ></textarea> 
            </div>   
            </div> 
            </div>
            
    
            <div class="form-group">
	          	<input type="hidden" name="txtFldDlgCOBCrtdBy" id="txtFldDlgCOBCrtdBy" /> 
				<input type="hidden" name="txtFldDlgCOBCrtdDate" id="txtFldDlgCOBCrtdDate" />
				<input type="hidden" name="txtFldDlgCashBankId" id="txtFldDlgCashBankId"/> 
				<input type="hidden" name="txtFldDlgCashBankRefId" id="txtFldDlgCashBankRefId"/>
				<input type="hidden" name="txtFldDlgCashBankMode" id="txtFldDlgCashBankMode"/>  
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
					    </button>
					 </div>
		   
      </div>
    </div>
  </div>
</div> 
 
                
                </div>
            </div>
        </div>

        <div class="panel panel-default">
            <div class="panel-heading"  data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo" role="tab" id="headingTwo" style="color: #fff;background-color: #243665;border-color: #243665;font-size: 14px;padding: 13px 8px;">
                <h4 class="panel-title">
                    <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                       Other Assets
                         <i class="more-less glyphicon glyphicon-plus" style="float:right"></i>
                    </a>
                </h4>
            </div>
            <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                <div class="panel-body">
                <span class="panelHeaderTitle"> Other Assets</span> <br>  
				<fieldset class="fieldsetClsborder" id='othrassets' tabindex='1'>
			<div class="table-responsive">
			<table class="display nowrap table table-borderless" style="width: 100%;background: #e8e2e2;display:none"> 
					<col style=" width:30%;"></col>
					<col style=" width:14%;"></col>
					<col style=" width:14%;"></col>
					<col style=" width:14%;"></col>
					<col style=" width:14%;"></col>
					<col style=" width:14%;"></col>
					
					<thead>
					<tr>
					<div class="col-md-12"> 
					   <div class="btn-group pull-right funcToDisable" role="group" style="display: block;"> 
					    <button type="button" class="btn btn-default navbar-btn delRow-icon" id="OtherAssetDrow" data-hasqtip="62"></button>
						</div>
					   <div class="btn-group pull-right funcToDisable" role="group" style="display: block;">
						&nbsp;&nbsp; 
						<button type="button" class="btn btn-default navbar-btn addRow-icon" id="OtherAssetArow" data-hasqtip="60"></button>
						</div>
					</div>
					</tr>
					<tr valign="top" align="left" class="fipaFldLblTextbold" style="border-bottom:1px solid #465a65">
						<td>&nbsp;</td>
						<td>
							<div  style=" text-align:center;">Description&nbsp;</div>
						</td>														
						<td>
							<div  style=" text-align:center;">Self&nbsp;<span class="label label-info">$</span></div>
						</td>
						<td>
							<div  style=" text-align:center;">Spouse&nbsp;<span class="label label-info">$</span></div>
						</td>
						<td>
							<div  style=" text-align:center;">Jointly&nbsp;<span class="label label-info">$</span></div>
						</td>
						<td>
							<div  style=" text-align:center;">Loans&nbsp;<span class="label label-info">$</span></div>
						</td>
						<td>
							<div  style=" text-align:center;">Remarks</div>
						</td>
					</tr>
					</thead>
					<tr valign="top" align="left">
						<td>
							<!-- <div  style="text-align:right;">Personal Items</div> -->
							<div class="col-md-6 col-sm-6 col-xs-6" style="float:right"> 
					         <select class="form-control fld-resp-sm" id="othasstPersItems" name="othasstPersItems" onmouseover="fipaTooltip(this);" data-hasqtip="201">
												<option value="">--SELECT--</option>
												<option value="Self">Personal Items</option>
												<option value="Spouse">Club Ownership</option>
												<option value="Joint">Business Ownership</option>
												<option value="Joint">Others</option>
									</select>
            				</div>
						</td>
						<td>
						
						<input type="text" name="othasstDesPers" id="othasstDesPers"
						  class="form-control fld-resp-sm clsfipaClient"></input>
						</td>
						<td>
						
						<input type="text" name="othasstSelfPers" id="othasstSelfPers"
						  class="form-control fld-resp-sm numbers clsfipaClient applyEvntUsd"
						  onchange="calcSum(this,'SUMOF_OTHASST_SELF')"></input>
						</td>
						<td>
						 
						<input type="text" name="othasstSpousePers" id="othasstSpousePers"  
						class="form-control fld-resp-sm numbers clsfipaSpouse applyEvntUsd" 
						onchange="calcSum(this,'SUMOF_OTHASST_SPS')"></input>
						</td>
						<td>
				 
						<input type="text" name="othasstJointPers" id="othasstJointPers" 
						class="form-control fld-resp-sm clsfipaFamily numbers applyEvntUsd"  
						onchange="calcSum(this,'SUMOF_OTHASST_JOIN')"></input>
						</td>
						<td>
				 
						<input type="text" name="othasstLoansPers" id="othasstLoansPers" 
						class="form-control fld-resp-sm numbers applyEvntUsd"   
						onchange="calcSum(this,'SUMOF_OTHASST_LOAN')"></input>
						</td>
						<td>

						<input type="text" name="othasstRemarksPers" id="othasstRemarksPers"
						 class="form-control fld-resp-sm" maxlength="300"  ></input>
						</td>
					</tr>
					<tr valign="top" align="left">
						<td>
							<!-- <div class="fipaFldLblText" style=" text-align:right;">Club Ownership</div> -->
							<div class="col-md-6 col-sm-6 col-xs-6" style="float:right"> 
					         <select class="form-control fld-resp-sm" id="othasstClubOwnrship" name="othasstClubOwnrship" onmouseover="fipaTooltip(this);" data-hasqtip="201">
												<option value="">--SELECT--</option>
												<option value="Self">Personal Items</option>
												<option value="Spouse">Club Ownership</option>
												<option value="Joint">Business Ownership</option>
												<option value="Joint">Others</option>
									</select>
            				</div>
						</td>
						<td>
						<input type="text" name="othasstDesClub" id="othasstDesClub"
						  class="form-control fld-resp-sm clsfipaClient"></input>
						</td>
						<td>
					 
						<input type="text" name="othasstSelfClub" id="othasstSelfClub"  
						class="form-control fld-resp-sm numbers clsfipaClient applyEvntUsd"    
						onchange="calcSum(this,'SUMOF_OTHASST_SELF')"></input>
						</td>
						<td>
			 
						<input type="text" name="othasstSpouseClub" id="othasstSpouseClub"
						class="form-control fld-resp-sm numbers clsfipaSpouse applyEvntUsd"    
						onchange="calcSum(this,'SUMOF_OTHASST_SPS')"></input>
						</td>
						<td>
					 
						<input type="text" name="othasstJointClub" id="othasstJointClub" 
						class="form-control fld-resp-sm clsfipaFamily numbers applyEvntUsd" 
						onchange="calcSum(this,'SUMOF_OTHASST_JOIN')"></input>
						</td>
						<td>
				 
						<input type="text" name="othasstLoansClub" id="othasstLoansClub" 
						class="form-control fld-resp-sm numbers applyEvntUsd"    
						onchange="calcSum(this,'SUMOF_OTHASST_LOAN')"></input>
						</td>
						<td>
		 
						<input type="text" name="othasstRemarksClub" id="othasstRemarksClub" 
						class="form-control fld-resp-sm" maxlength="300" ></input>
						</td>
					</tr>
					<tr valign="top" align="left">
						<td>
							<!-- <div class="fipaFldLblText" style=" text-align:right;">Business Ownership</div> -->
							<div class="col-md-6 col-sm-6 col-xs-6" style="float:right"> 
					         <select class="form-control fld-resp-sm" id="othasstBusiOwnrship" name="othasstBusiOwnrship" onmouseover="fipaTooltip(this);" data-hasqtip="201">
												<option value="">--SELECT--</option>
												<option value="Self">Personal Items</option>
												<option value="Spouse">Club Ownership</option>
												<option value="Joint">Business Ownership</option>
												<option value="Joint">Others</option>
									</select>
            				</div>
						</td>
						<td>
						<input type="text" name="othasstDesBusi" id="othasstDesBusi"
						  class="form-control fld-resp-sm clsfipaClient"></input>
						</td>
						<td>
						<input type="text" name="othasstSelfBusi" id="othasstSelfBusi"
						 class="form-control fld-resp-sm numbers clsfipaClient applyEvntUsd"  
						 onchange="calcSum(this,'SUMOF_OTHASST_SELF')"></input>
						</td>
						<td>
				 
						<input type="text" name="othasstSpouseBusi" id="othasstSpouseBusi" 
						class="form-control fld-resp-sm numbers clsfipaSpouse applyEvntUsd"  
						onchange="calcSum(this,'SUMOF_OTHASST_SPS')"></input>
						</td>
						<td>
			 
						<input type="text" name="othasstJointBusi" id="othasstJointBusi" 
						class="form-control fld-resp-sm clsfipaFamily numbers applyEvntUsd"  
						onchange="calcSum(this,'SUMOF_OTHASST_JOIN')"></input>
						</td>
						<td>
			 
						<input type="text" name="othasstLoansBusi" id="othasstLoansBusi"
						class="form-control fld-resp-sm numbers applyEvntUsd"   
						onchange="calcSum(this,'SUMOF_OTHASST_LOAN')"></input>
						</td>
						<td> 
						<input type="text" name="othasstRemarksBusi" id="othasstRemarksBusi"
						class="form-control fld-resp-sm"  maxlength="300"  ></input>
						</td>
					</tr>
					<tr valign="top" align="left">
						<td>
							<!-- <div class="fipaFldLblText" style=" text-align:right;">Others Assets</div> -->
							<div class="col-md-6 col-sm-6 col-xs-6" style="float:right"> 
					         <select class="form-control fld-resp-sm" id="othasstOthersAssets" name="othasstOthersAssets" onmouseover="fipaTooltip(this);" data-hasqtip="201">
												<option value="">--SELECT--</option>
												<option value="Self">Personal Items</option>
												<option value="Spouse">Club Ownership</option>
												<option value="Joint">Business Ownership</option>
												<option value="Joint">Others</option>
									</select>
            				</div>
						</td>
						<td>
						<input type="text" name="othasstDesOth" id="othasstDesOth"
						  class="form-control fld-resp-sm clsfipaClient"></input>
						</td>
						<td>
				 
						<input type="text" name="othasstSelfOth" id="othasstSelfOth"  
						class="form-control fld-resp-sm numbers clsfipaClient applyEvntUsd"  
						onchange="calcSum(this,'SUMOF_OTHASST_SELF')"></input>
						</td>
						<td>
					 
						<input type="text" name="othasstSpouseOth" id="othasstSpouseOth" 
						class="form-control fld-resp-sm numbers clsfipaSpouse applyEvntUsd"    
						onchange="calcSum(this,'SUMOF_OTHASST_SPS')"></input>
						</td>
						<td>
						 
						<input type="text" name="othasstJointOth" id="othasstJointOth" 
						class="form-control fld-resp-sm clsfipaFamily numbers applyEvntUsd" 
						onchange="calcSum(this,'SUMOF_OTHASST_JOIN')"></input>
						</td>
						<td class=" ">
					 
						<input type="text" name="othasstLoansOth" id="othasstLoansOth" 
						class="form-control fld-resp-sm numbers applyEvntUsd"  
						onchange="calcSum(this,'SUMOF_OTHASST_LOAN')"></input>
						</td>
						<td> 
							<input type="text" name="othasstRemarksOth" id="othasstRemarksOth"
							 class="form-control fld-resp-sm" maxlength="300"  ></input>
						</td>
					</tr>
					 <tr valign="top" align="left" style="display:none">
					<td>
							<div class="fipaFldLblText" style=" text-align:right;">Total Other Assets</div>
						</td>
					
						<td>
				 
						<input type="text" name="othasstSelfTot" class="form-control fld-resp-sm readOlyCursor applyEvntUsd" 
						id="othasstSelfTot"  readonly="true" ></input>
						</td>
						<td>
		 
						<input type="text" name="othasstSpouseTot" class="form-control fld-resp-sm readOlyCursor applyEvntUsd" 
						id="othasstSpouseTot"  readonly="true" ></input>
						</td>
						<td>
					  	<input type="text" name="othasstJointTot" class="form-control fld-resp-sm readOlyCursor applyEvntUsd" 
					  	id="othasstJointTot"  readonly="true" ></input>
						</td>
						<td>
					 
						<input type="text" name="othasstLoansTot" class="form-control fld-resp-sm readOlyCursor applyEvntUsd"
						 id="othasstLoansTot" readonly="true" ></input>
						</td>
						<td>
					
						</td>
					</tr> 
				</table>
			<table id="" class="table-striped table-bordered display no-footer dataTable" style="width:100%;border-spacing: 1px !important;border-bottom: none;" >
			<thead>
						<col style=" width:5%;"></col>
						<col style=" width:14%;"></col>
						<col style=" width:14%;"></col>
						<col style=" width:14%;"></col>
						<col style=" width:14%;"></col>
						<col style=" width:14%;"></col>
						<col style=" width:14%;"></col>
					<tr valign="top" align="left" class="fipaFldLblTextbold" style="border-bottom:1px solid #465a65">
						<td>
						<div  style=" text-align:center;">&nbsp;</div>
						</td>
						<td>
						<div  style=" text-align:center;">&nbsp;</div>
						</td>
						<td>
							<div  style=" text-align:center;">Description&nbsp;</div>
						</td>														
						<td>
							<div  style=" text-align:center;">Self&nbsp;</div>
						</td>
						<td>
							<div  style=" text-align:center;">Spouse&nbsp;</div>
						</td>
						<td>
							<div  style=" text-align:center;">Jointly&nbsp;</div>
						</td>
						<td>
							<div  style=" text-align:center;">Loans&nbsp;</div>
						</td>
						
					</tr>
					</thead>
					
			</table>
			<table id="otherAssetTableNew" class="table-striped table-bordered display no-footer dataTable" style="width:100%;border-spacing: 1px !important;border-bottom: none;" >
			<tbody></tbody>
			</table>
			</div>
				<div class="table-responsive" style='display:none'>
				<table width="100%">
				<tr > 
<!-- 												<td width="20%">&nbsp;</td> -->
				<td> 	
					<div class="margin10">
												   <label class="fipaFldLblText" > Notes  </label>
											 
						<textarea name="othasstNotes" id="othasstNotes" class="form-control" 
						cols="100%" maxlength="300" rows="5"></textarea>
					  
					</div>
						</td>
					</tr>
				</table>
			</div>
			</fieldset>
                
                
                <div class="clearspace40"></div>
			<div class="middle-line"></div>
			<div class="clearspace40"></div>

			<div class="table-responsive">
			

				<div class="btn-group pull-right funcToDisable" role="group">
						<button type="button"  class="btn btn-default navbar-btn delRow-icon" id="PersDRow" disabled="true"></button>
				</div>
			<div class="btn-group pull-right funcToDisable" role="group" style="margin-right: 10px;" >
						<button type="button"   class="btn btn-default navbar-btn addRow-icon" id="PersARow"></button>
						<button type="button"  class="btn btn-default navbar-btn editRow-icon" id="PersERow" disabled="true"></button>
				</div>

				
				<img src="images/menuicons/perast.png" style="width:5%;"/>
				<span class="panelHeaderTitle"> Other Personal Assets</span>
				
				</div>
				  
				<table id="personalAssetTbl" class="dataTable table-bordered table-striped display hover" style="width:100%" >
					<thead>
					
							<th>#</th> 
							<th><div  class="checkbox checkbox-primary text-center"><input type="checkbox" id="SelpersonalAsset" name="SelpersonalAsset" onclick="SelAllpersonalAsset(this)"><label for="SelpersonalAsset">&nbsp;</label></div></th>
							<th><div style="width: 70px;">Account Holder<span class="mandFldastrks">*</span></div></th>
							<th><div style="width: 100px;">Types of Personal Assets<span class="mandFldastrks">*</span></div></th>
							<th><div style="width: 120px;">Name of Asset<span class="mandFldastrks">*</span></div></th>
							<th><div style="width: 80px;">Purchase Value<small>($)</small></div></th>
							<th><div style="width: 80px;">Current Value<small>($)</small></div></th>
							<th><div style="width: 80px;">Outstanding Loan<small>($)</small></div></th>
							<th><div style="width: 80px;">Estimate Appreciation Value<small>($)</small></div></th>
							<th><div style="width: 50px;">Yrs to Keep<small>(yrs)</small></div></th>
							<th><div style="width: 60px;"><small>(%)</small> Preserved for Child's Education</div></th>
							<th><div style="width: 60px;"><small>(%)</small>Preserved for Retirement Planning</div></th>
							<th><div style="width: 180px;">Remarks</div></th>
						</tr>

					</thead>

					<tbody>

					</tbody>

				</table>  
                
                
             <div class="clearspace40"></div>
			<div class="middle-line"></div>
			<div class="clearspace40"></div>


<!-- 			<span class="panelHeaderTitle"> Business Assets</span> <br> -->
			 <div class="table-responsive">

				<div class="btn-group pull-right funcToDisable" role="group">
						<button type="button"  class="btn btn-default navbar-btn delRow-icon" id="BusiDRow" disabled="true"></button>
						</div>
				<div class="btn-group pull-right funcToDisable" role="group" style="margin-right: 10px;" >
						<button type="button"  class="btn btn-default navbar-btn addRow-icon" id="BusiARow"></button>
						<button type="button"  class="btn btn-default navbar-btn editRow-icon" id="BusiERow" disabled="true"></button>
<!-- 						<button type="button"  class="btn btn-default navbar-btn delRow-icon" id="BusiDRow"></button> -->
<!-- 						<button type="button"  class="btn btn-default navbar-btn viewRow-icon" id="BusiVRow"></button> -->
	  
				</div>
				
				<img src="images/menuicons/busasset.png"  class="img-rounded" width="50" height="50"/>
				<span class="panelHeaderTitle"> Business Assets</span>
				
				</div>  
				<table id="businessAssetTbl" class="dataTable table-bordered table-striped display hover" style="width:100%">
					<thead>
						<tr><!--changes done 19/06/2019 -->
							<th><div style="width: 30px;">#</div></th> 
						<!-- 	<th><div style="width: 50px;">Select</div></th> -->
							<th><div  class="checkbox checkbox-primary text-center"><input type="checkbox" id="SelbusinessAsset" name="SelbusinessAsset" onclick="SelAllbusinessAssett(this)"><label for="SelbusinessAsset" >&nbsp;</label></div></th>
							<th><div style="width: 70px;">Account Holder<span class="mandFldastrks">*</span></div></th>
							<th><div style="width: 100px;">Types of Business Assets<span class="mandFldastrks">*</span></div></th>
							<th><div style="width: 120px;">Name of Business<span class="mandFldastrks">*</span></div></th>
							<th><div style="width: 80px;">Investment Value<small>($)</small></div></th>
							<th><div style="width: 80px;">Current Value<small>($)</small></div></th>
							<th><div style="width: 80px;">Outstanding 
<!-- 							Value Thulasy commented on 12/11/2018-->Loan<small>($)</small>
							</div></th>
							<th><div style="width: 80px;">Estimate Appreciation Value<small>$</small></div></th>
							<th><div style="width: 50px;">Yrs to Keep<small>(yrs)</small></div></th>
							<th><div style="width: 60px;"><small>(%)</small> Preserved for Child's Education</div></th>
							<th><div style="width: 60px;"><small>(%)</small> Preserved for Retirement Planning</div></th>
							<th><div style="width: 180px;">Remarks</div></th>
						</tr>

					</thead>

					<tbody>

					</tbody>

				</table> 
				
                <!-- Modal  -->
 <div class="modal fade" id="perAssets_Dialog" style="display: none"  tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog scrollModelBodyWidth1000" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel"></h4>
         
      </div>
      <div class="modal-body">
      
     <fieldset class="fieldsetClsborder scrollModelBody60"> 
      
		<div class="col-md-6"> 
		<div class="form-group">
	<div class="row required" >
	<div class="col-md-6 col-sm-6 col-xs-6 "> 
             <label class="control-label mandFldastrks pull-right text-right"
					for="txtFldDlgPerAcctHolder"> Account
							Holder*</label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
         <select class="form-control fld-resp-sm" id="txtFldDlgPerAcctHolder"
					name="txtFldDlgPerAcctHolder" onmouseover="fipaTooltip(this);">
					<option value="">--SELECT--</option>
					<c:if test="${not empty OWNERSHIP_LIST}">
						<c:forEach var="ownership" items="${OWNERSHIP_LIST}">
							<option value="${ownership}">${ownership}</option>
						</c:forEach>
					</c:if>
				</select>
            </div> 
            </div>
      </div>
      
      
      <div class="form-group">
	<div class="row required" >
	<div class="col-md-6 col-sm-6 col-xs-6 "> 
             <label class="control-label mandFldastrks pull-right text-right"
					for="txtFldDlgPerTypeOfAsset">Types
							of Personal Assets*</label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
         <input type="text"
					id="txtFldDlgPerTypeOfAsset" name="txtFldDlgPerTypeOfAsset"
					class="form-control fld-resp-md" maxlength="60"
					onmouseover="fipaTooltip(this);"  >
            </div> 
            </div>
      </div>
      
      
      <div class="form-group">
	<div class="row required" >
	<div class="col-md-6 col-sm-6 col-xs-6 "> 
             <label class="control-label mandFldastrks pull-right text-right"
					for="txtFldDlgPerNameOfAsset">
							Name of Asset*</label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
         <input type='text' class="form-control fld-resp-md"
					id="txtFldDlgPerNameOfAsset" name="txtFldDlgPerNameOfAsset"
					maxlength="60" onmouseover="fipaTooltip(this);"   /> 
            </div> 
            </div>
      </div>
      
      
      
      <div class="form-group">
	<div class="row required" >
	<div class="col-md-6 col-sm-6 col-xs-6 "> 
             <label class="control-label pull-right text-right"
					for="txtFldDlgPerPurInvValue">Purchase Value   </label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
         <div class="input-group input-group-sm fld-resp-md" >
					 <span class="input-group-addon">
					              <span class="glyphicon" id="symbolUsd"></span>
					         </span>
					<input type='text' onmouseover="fipaTooltip(this);"  
					class="form-control numbers applyEvntUsd" id="txtFldDlgPerPurInvValue"
					name="txtFldDlgPerPurInvValue"  />
					</div>
            </div> 
            </div>
      </div>
      
      
      <div class="form-group">
	<div class="row required" >
	<div class="col-md-6 col-sm-6 col-xs-6 "> 
             <label class="control-label pull-right text-right"
					for="txtFldDlgPerCurrValue">Current Value </label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
         <div class="input-group input-group-sm fld-resp-md">
					 <span class="input-group-addon">
					              <span class="glyphicon" id="symbolUsd"></span>
					         </span>
					<input type='text'
					class="form-control numbers applyEvntUsd" id="txtFldDlgPerCurrValue"
					name="txtFldDlgPerCurrValue"  onmouseover="fipaTooltip(this);"   />  
				  </div>
            </div> 
            </div>
      </div>
      
      
      <div class="form-group">
	<div class="row required" >
	<div class="col-md-6 col-sm-6 col-xs-6 "> 
            <label class="control-label pull-right text-right"
					for="txtFldDlgPerOsValue">Outstanding Loan  </label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
         <div class="input-group input-group-sm fld-resp-md" >
					 <span class="input-group-addon">
					              <span class="glyphicon" id="symbolUsd"></span>
					         </span>
					<input type="text" name="txtFldDlgPerOsValue" onmouseover="fipaTooltip(this);" 
					id="txtFldDlgPerOsValue" class="form-control numbers applyEvntUsd" />
					</div>
            </div> 
            </div>
      </div>
      </div>
      <div class="col-md-6"> 
      
      
      <div class="form-group">
	<div class="row required" >
	<div class="col-md-6 col-sm-6 col-xs-6 "> 
              <label class="control-label pull-right text-right"
					for="txtFldDlgPerEstApprValue">Est. Appre. Val.  </label> 
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
         <div class="input-group input-group-sm fld-resp-md"> 
					 <span class="input-group-addon">
					              <span class="glyphicon" id="symbolUsd"></span>
					         </span>
					         <input type="text" onmouseover="fipaTooltip(this);"  
					name="txtFldDlgPerEstApprValue" id="txtFldDlgPerEstApprValue"
					class="form-control numbers applyEvntUsd" 
					/> 
					</div>
            </div> 
            </div>
      </div>
      
      
      
      <div class="form-group">
	<div class="row required" >
	<div class="col-md-6 col-sm-6 col-xs-6 "> 
            <label class="control-label pull-right text-right"
					for="txtFldDlgPerYrs2keep">Yrs to Keep</label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
         <div class="input-group input-group-sm fld-resp-sm">
					
					<input type="text" name="txtFldDlgPerYrs2keep" onmouseover="fipaTooltip(this);" 
					id="txtFldDlgPerYrs2keep" class="form-control numbers applyEvntYrs" />
					 <span class="input-group-addon">
					              <span class="glyphicon" id="symbolYrs"></span>
					         </span>
					</div>
            </div> 
            </div>
      </div>
      
      
      <div class="form-group">
	<div class="row required" >
	<div class="col-md-6 col-sm-6 col-xs-6 "> 
             <label class="control-label pull-right text-right"
					for="txtFldDlgPerChildEdnPrcnt">Preserved for Child's Edu.
						% </label>  
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6 fld-resp-sm"> 
         <div class="input-group input-group-sm fld-resp-sm"> 
						<input type="text"
					name="txtFldDlgPerChildEdnPrcnt" id="txtFldDlgPerChildEdnPrcnt"
					onmouseover="fipaTooltip(this);"  
					class="form-control numbers applyEvntpCent3" 
					/> 
					 <span class="input-group-addon">
					              <span class="glyphicon" id="symbolprCent"></span>
					         </span>
					</div>
            </div> 
            </div>
      </div>
      
      
      <div class="form-group">
	<div class="row required" >
	<div class="col-md-6 col-sm-6 col-xs-6 "> 
            <label class="control-label pull-right text-right"
					for="txtFldDlgPerRetPlanPrcnt">% Preserved for Retirement
						Planning</label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
         <div class="input-group input-group-sm fld-resp-sm" > 
						<input type="text" onmouseover="fipaTooltip(this);"  
					name="txtFldDlgPerRetPlanPrcnt" id="txtFldDlgPerRetPlanPrcnt"
					class="form-control numbers applyEvntpCent"  />
					 <span class="input-group-addon">
					              <span class="glyphicon" id="symbolprCent"></span>
					         </span>
					</div>
            </div> 
            </div>
      </div>
      
      <div class="form-group">
	<div class="row required" >
	<div class="col-md-6 col-sm-6 col-xs-6 "> 
            <label class="control-label pull-right text-right"
					for="txtFldDlgPerRemarks">Remarks </label> 
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
           <textarea name="txtFldDlgPerRemarks" id="txtFldDlgPerRemarks"   
					class="form-control"  rows="5" maxlength="300" ></textarea>
					 
            </div> 
            </div>
      </div>
      
      
      <div class="form-group"> 
				<input type="hidden" name="txtFldDlgPerCrtdBy" id="txtFldDlgPerCrtdBy" /> 
				<input type="hidden" name="txtFldDlgPerCrtdDate" id="txtFldDlgPerCrtdDate" /> 
				<input type="hidden" name="txtFldDlgPerBusiPersId" id="txtFldDlgPerBusiPersId" />
				<input type="hidden" name="txtFldDlgPerBusiPersMode" id="txtFldDlgPerBusiPersMode" />
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
					    </button>
					    </div>
		   
      </div>
    </div>
  </div>
</div> 


 <!-- Modal  -->
<div class="modal fade" id="busnAssets_Dialog" style="display: none"  tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog scrollModelBodyWidth1000" role="document">
    <div class="modal-content">
      <div class="modal-header">
       <!-- <div class="btnStyle" style="text-align-last: end;">
                <button type="button" id="busassetCancelbtn" class="btn BtnFIPASRCH StylishSRCH" >
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
      
     	<div class="col-md-6"> 
		<div class="form-group">
	<div class="row required" >
	<div class="col-md-6 col-sm-6 col-xs-6 "> 
             <label class="control-label mandFldastrks pull-right text-right"
					for="txtFldDlgBusnAcctHolder"> Account
							Holder*</label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
         <select class="form-control fld-resp-sm" id="txtFldDlgBusnAcctHolder"
					name="txtFldDlgBusnAcctHolder" onmouseover="fipaTooltip(this);">
					<option value="">--SELECT--</option>
					<c:if test="${not empty OWNERSHIP_LIST}">
						<c:forEach var="ownership" items="${OWNERSHIP_LIST}">
							<option value="${ownership}">${ownership}</option>
						</c:forEach>
					</c:if>
				</select>
            </div> 
            </div>
      </div>
      
      
      
         <div class="form-group">
	<div class="row required" >
	<div class="col-md-6 col-sm-6 col-xs-6 "> 
             <label class="control-label mandFldastrks pull-right text-right"
					for="txtFldDlgBusnTypeOfAsset">Types
							of Business Assets*</label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
         <input type="text"
					id="txtFldDlgBusnTypeOfAsset" name="txtFldDlgBusnTypeOfAsset"
					class="form-control fld-resp-md" maxlength="60"
					onmouseover="fipaTooltip(this);"  > 
            </div> 
            </div>
      </div>
      
      
      
      <div class="form-group">
	<div class="row required" >
	<div class="col-md-6 col-sm-6 col-xs-6 "> 
             <label class="control-label mandFldastrks pull-right text-right"
					for="txtFldDlgBusnNameOfAsset"> 
							Name of Business*</label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
         <input type='text' class="form-control fld-resp-md"
					id="txtFldDlgBusnNameOfAsset" name="txtFldDlgBusnNameOfAsset"
					maxlength="60" onmouseover="fipaTooltip(this);" />
            </div> 
            </div>
      </div>
      
      
		<div class="form-group">
	<div class="row required" >
	<div class="col-md-6 col-sm-6 col-xs-6 "> 
             <label class="control-label pull-right text-right"
					for="txtFldDlgPerPurInvValue">Investment Value </label> 
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
         <div class="input-group input-group-sm fld-resp-md">
					 <span class="input-group-addon">
					              <span class="glyphicon" id="symbolUsd"></span>
					         </span>
					<input type='text' onmouseover="fipaTooltip(this);" 
					class="form-control numbers applyEvntUsd" id="txtFldDlgBusnPurInvValue"
					name="txtFldDlgBusnPurInvValue" /> 
					</div>
            </div> 
            </div>
      </div> 
      
      
      <div class="form-group">
	<div class="row required" >
	<div class="col-md-6 col-sm-6 col-xs-6 "> 
             <label class="control-label pull-right text-right"
					for="txtFldDlgBusnCurrValue">Current Value </label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
         <div class="input-group input-group-sm fld-resp-md" >
					 <span class="input-group-addon">
					              <span class="glyphicon" id="symbolUsd"></span>
					         </span>
				<input type='text'  onmouseover="fipaTooltip(this);"  
					class="form-control numbers applyEvntUsd" id="txtFldDlgBusnCurrValue"
					name="txtFldDlgBusnCurrValue"
					 /> 
               </div>
            </div> 
            </div>
      </div>
      
      
      
      <div class="form-group">
	<div class="row required" >
	<div class="col-md-6 col-sm-6 col-xs-6 "> 
            <label class="control-label pull-right text-right"
					for="txtFldDlgBusnOsValue">Outstanding Loan  </label><!-- Thulasy Added on 12/11/2018 -->
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
         <div class="input-group input-group-sm fld-resp-md" >
					 <span class="input-group-addon">
					              <span class="glyphicon" id="symbolUsd"></span>
					         </span>
					<input type="text" name="txtFldDlgBusnOsValue" onmouseover="fipaTooltip(this);" 
					id="txtFldDlgBusnOsValue" class="form-control numbers applyEvntUsd" /> 
					</div>
            </div> 
            </div>
      </div> 
      </div>
      
      
      <div class="col-md-6"> 
      <div class="form-group">
	<div class="row required" >
	<div class="col-md-6 col-sm-6 col-xs-6 "> 
             <label class="control-label pull-right text-right"
					for="txtFldDlgBusnEstApprValue">Est. Appre. Val.  </label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
         <div class="input-group input-group-sm fld-resp-md">
					 <span class="input-group-addon">
					              <span class="glyphicon" id="symbolUsd"></span>
					         </span>
               <input type="text" onmouseover="fipaTooltip(this);"
					name="txtFldDlgBusnEstApprValue" id="txtFldDlgBusnEstApprValue"
					class="form-control numbers applyEvntUsd" 
					 /> 
					</div>
            </div> 
            </div>
      </div>
      
      
      <div class="form-group">
	<div class="row required" >
	<div class="col-md-6 col-sm-6 col-xs-6 "> 
            <label class="control-label pull-right text-right"
					for="txtFldDlgBusnYrs2keep">Yrs to Keep</label>  
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
         <div class="input-group input-group-sm fld-resp-sm"> 
					<input type="text"  onmouseover="fipaTooltip(this);"
					name="txtFldDlgBusnYrs2keep" id="txtFldDlgBusnYrs2keep"
					class="form-control numbers applyEvntYrs" />
					 <span class="input-group-addon">
					              <span class="glyphicon" id="symbolYrs"></span>
					         </span> 
					</div>
            </div> 
            </div>
      </div> 
      
      <div class="form-group">
	<div class="row required" >
	<div class="col-md-6 col-sm-6 col-xs-6 "> 
             <label class="control-label pull-right text-right"
					for="txtFldDlgBusnChildEdnPrcnt">Preserved for Child's Edu.
						% </label> 
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
         <div class="input-group input-group-sm fld-resp-sm" > 
						<input type="text" name="txtFldDlgBusnChildEdnPrcnt" id="txtFldDlgBusnChildEdnPrcnt"
						onmouseover="fipaTooltip(this);"
					class="form-control numbers applyEvntpCent"   />
					 <span class="input-group-addon">
					              <span class="glyphicon" id="symbolprCent"></span>
					         </span> 
					</div>
            </div> 
            </div>
      </div>
      
      
      
      
      
      <div class="form-group">
	<div class="row required" >
	<div class="col-md-6 col-sm-6 col-xs-6 "> 
            <label class="fipaFldLblText pull-right text-right"
					for="txtFldDlgBusnRetPlanPrcnt">% Preserved for Retirement
						Planning</label> 
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
         <div class="input-group input-group-sm fld-resp-sm" > 
						<input type="text"
					name="txtFldDlgBusnRetPlanPrcnt" id="txtFldDlgBusnRetPlanPrcnt"
					class="form-control numbers applyEvntpCent"  /> 
					 <span class="input-group-addon">
					              <span class="glyphicon" id="symbolprCent"></span>
					         </span>
					</div>
            </div> 
            </div>
      </div> 
      
      
      <div class="form-group">
	<div class="row required" >
	<div class="col-md-6 col-sm-6 col-xs-6 "> 
              <label class="control-label pull-right text-right"
					for="txtFldDlgBuisRemarks">Remarks  </label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
           <textarea name="txtFldDlgBuisRemarks" id="txtFldDlgBuisRemarks"   
					class="form-control"  rows="5" maxlength="300" ></textarea> 
            </div> 
            </div>
      </div>
      
      
      
      
      
      
      
      <div class="form-group"> 
				<input type="hidden" name="txtFldDlgBusnCrtdBy"  id="txtFldDlgBusnCrtdBy" /> 
				 <input type="hidden" name="txtFldDlgBusnCrtdDate" id="txtFldDlgBusnCrtdDate"/>
				  <input type="hidden" name="txtFldDlgBusnBusiPersId" id="txtFldDlgBusnBusiPersId"/>
				  <input type="hidden" name="txtFldDlgBusnBusiPersMode" id="txtFldDlgBusnBusiPersMode"/>
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
					    </button>
					     <!-- <button type="button" id="busassetCancelbtn" class="btn BtnFIPASRCH StylishSRCH" >
					      <span class="txt">Cancel</span>
					      <span class="round"><i class="fa fa-check"></i></span>
				 </button> -->
					    </div>
		   
      </div>
    </div>
  </div>
</div>

                
                 </div>
            </div>
        </div>

        <div class="panel panel-default">
            <div class="panel-heading" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="true" aria-controls="collapseThree" role="tab" id="headingThree" style="color: #fff;background-color: #243665;border-color: #243665;font-size: 14px;padding: 13px 8px;">
                <h4 class="panel-title">
                    <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                       Vehicle Ownership
                          <i class="more-less glyphicon glyphicon-plus"  style="float:right"></i>
                    </a>
                </h4>
            </div>
            <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                <div class="panel-body">
                <div class="panel-body" style="min-height: 200px" id='vehOwn' tabindex='1'>
 <div class="table-responsive">
				<div class="btn-group pull-right funcToDisable" role="group">
						<button type="button"  class="btn btn-default navbar-btn delRow-icon"  id="VehDRow" disabled="true"></button>
				</div>
  				<div class="btn-group pull-right funcToDisable" role="group" style="margin-right: 10px;">
						<button type="button"  class="btn btn-default navbar-btn addRow-icon"  id="VehARow"></button>
						<button type="button"  class="btn btn-default navbar-btn editRow-icon" id="VehERow" disabled="true"></button>
<!-- 						<button type="button"  class="btn btn-default navbar-btn delRow-icon"  id="VehDRow"></button> -->
<!-- 						<button type="button"  class="btn btn-default navbar-btn viewRow-icon" id="VehVRow"></button> -->
  				</div>
				 
					<img src="images/menuicons/cpf2.png" class="img-rounded" width="50" height="50" />
					<span class="panelHeaderTitle"> Vehicle Ownership
					<input type="hidden" id="vehicleownership" class="form-control" >
		<a class="btn btn-default backToFdFlow" id="backToVehFdFlow" onclick="openBackToFundFlow('expdSelfVehiloan');"></a></span>
				
					
				</div>  
				<div class="">  
	<div class="col-md-12" >
				<table class="dataTable table-bordered table-striped display hover" id="fnaVehiOwnTbl" style="width:100%" >
					<thead>
						<tr>
							<th> <div style="width:30px">#</div></th> 
							<!-- <th><div style="width:50px;">Select</div></th> -->
							<th><div style="width:50px;" class="checkbox checkbox-primary text-center"><input type="checkbox" id="Selvehicleownership" name="Selvehicleownership" onclick="SelAllvehicleownership(this)"><label for="Selvehicleownership" >&nbsp;</label></div></th>
							<th><div style="width:90px;">Ownership</div></th>
							<th><div style="width:145px;">Market Value</div></th>
							<th><div style="width:145px">Loan Value</div></th>
							<!-- <th><div style="width:120px">Loan Bank</div></th>
							 <th><div style="width:80px;">Period<small>(yrs)</small></div></th>  -->
							<th><div style="width:145px;">Monthly Instalment</div></th>
							<th><div style="width:90px;">Sold On Death</div></th>
							<!-- <th><div style="width:180px;">Remarks</div></th> -->
						</tr>
					</thead>
					<tbody></tbody>								
				</table>
				<table class="" id="fnaVehiOwnTblfooter"  style="display:none;width:100%">					
					<tbody>
						<tr>
							<td colspan="4">
								<div style="text-align: right; font-weight: bold;width:250px">Total Market Value :</div>
							</td>
							<td><input type="text"
								class="form-control readOlyCursor totalFields"
								onmouseover="fipaTooltip(this);" id="txtFldTotmktval"
								name="txtFldTotmktval" /></td>
								
							<td colspan="4">
								<div style="text-align: right; font-weight: bold;width:250px">Total Loan Value :</div>
							</td>
							
							<td><input type="text"
								class="form-control readOlyCursor totalFields"
								onmouseover="fipaTooltip(this);" id="txtFldTotlnval"
								name="txtFldTotlnval" />
								<input type="text"
								class="form-control readOlyCursor hidden totalFields"
								onmouseover="fipaTooltip(this);" id="txtFldTotperd"
								name="txtFldTotperd"  />
							</td>
							 
						</tr>
					</tbody>	
					
				</table>
				
 				</div>
 				</div>
		</div>
		
 <!-- Modal  -->
<div class="modal fade" id="vehown_Dialog" style="display: none"  tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog scrollModelBodyWidth1000" role="document">
    <div class="modal-content">
      <div class="modal-header" style="background: #243665;">
     <!--  <div class="btnStyle" style="text-align-last: end;">
                <button type="button" id="vehOwnCancelbtn" class="btn BtnFIPASRCH StylishSRCH" >
					      <span class="txt">Cancel</span>
					      <span class="round"><i class="fa fa-check"></i></span>
				 </button>
			</div> -->
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel" style="color: white;"></h4>
         
      </div>
      <div class="modal-body">
     <fieldset class="fieldsetClsborder scrollModelBody60"> 
     <div class="col-md-6">
		<div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 ">  
		<label class="control-label mandFldastrks pull-right text-right" for="txtFldDlgVehOwner">
             Ownership*</label> 	 
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
           <select name="txtFldDlgVehOwner"
				 id="txtFldDlgVehOwner" class="form-control fld-resp-sm">
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
			 <label class="control-label mandFldastrks pull-right text-right"
					for="txtFldDlgVehMktVal"> Market
							Value*</label>
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
           <div class="input-group input-group-sm" >
					<div class="input-group-addon" > 
               <span class="glyphicon" id="symbolUsd"></span> </div>
				 <input id="txtFldDlgVehMktVal"
					name="txtFldDlgVehMktVal" class="form-control numbers applyEvntUsd"
					type="text" /> 
					</div> 
            </div> 
            </div>
      </div>
      
      
      
      <div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 ">  
			 <label class="control-label mandFldastrks pull-right text-right"
					for="txtFldDlgVehLnVal">Loan
							Value*</label> 
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
           <div class="input-group input-group-sm">
					<div class="input-group-addon" > 
               <span class="glyphicon" id="symbolUsd"></span> </div>
			  <input type='text'
					class="form-control numbers applyEvntUsd" id="txtFldDlgVehLnVal"
					name="txtFldDlgVehLnVal"   /> 
					</div>
            </div> 
            </div>
      </div>
      
      
      <div class="form-group" style="display:none">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 ">  
			 <label class="control-label pull-right text-right"
					for="txtFldDlgVehLnBank">Loan Bank</label> 
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6">  
			  <input type='text' class="form-control" id="txtFldDlgVehLnBank"
					name="txtFldDlgVehLnBank" maxlength="150"  /> 
					 
            </div> 
            </div>
      </div>
      
      
      
    <!--   <div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 ">  
			 <label class="control-label pull-right text-right"
					for="txtFldDlgVehPerd">Period   </label> 
					
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
            <div class="input-group input-group-sm fld-resp-sm">
					<input type='text' class="form-control numbers applyEvntYrs" id="txtFldDlgVehPerd"
					name="txtFldDlgVehPerd"  />  
					<div class="input-group-addon" > 
               <span class="glyphicon" id="symbolYrs"></span> </div> 
					</div>
            </div> 
            </div>
      </div> -->
      </div>
      <div class="col-md-6">
      
      
      <div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 ">  
			 <label class="control-label pull-right text-right"
					for="txtFldDlgVehMthlyInstal">Monthly Instalment
							</label> 
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
           <div class="input-group input-group-sm" >
					<div class="input-group-addon" > 
               <span class="glyphicon" id="symbolUsd"></span> </div>
				 <input id="txtFldDlgVehMthlyInstal"
					name="txtFldDlgVehMthlyInstal" class="form-control numbers applyEvntUsd"
					type="text"  /> 
					</div>
            </div> 
            </div>
      </div>
      
      <div class="form-group">
		<div class="row">
			<div class="col-md-6 col-sm-6 col-xs-6 ">  
					 <label class="control-label pull-right text-right" for="txtFldDlgVehPerd">Period of Repayment   </label> 
							
		             </div> 
		           <div class="col-md-6 col-sm-6 col-xs-6"> 
		            <div class="input-group input-group-sm fld-resp-sm">
							<input type="text" class="form-control numbers applyEvntYrs" id="txtFldDlgVehPerd" name="txtFldDlgVehPerd" maxlength="3">  
							<div class="input-group-addon"> 
		               <span class="glyphicon addYearSign" id="symbolYrs"></span> </div> 
							</div>
		            </div> 
		    </div>
    </div>
      
      
      <div class="form-group">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 ">  
			 <label class="control-label pull-right text-right"
					for="txtFldDlgVehiSoldOnDeath">Sold On Death  
					</label> 
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
           <select id="txtFldDlgVehiSoldOnDeath" 
         name="txtFldDlgVehiSoldOnDeath"  
				 class="form-control fld-resp-sm"  >
				 <option value="">--SELECT--</option>
				 <option value="Y">Yes</option>
				 <option value="N">No</option> 
			 </select>
            </div> 
            </div>
      </div>
      
      
      
      
      <div class="form-group" style="display:none">
	<div class="row" >
	<div class="col-md-6 col-sm-6 col-xs-6 ">  
			 	<label class="control-label pull-right text-right"
					for="txtFldDlgVehRemark">Remarks  </label>  
             </div> 
           <div class="col-md-6 col-sm-6 col-xs-6"> 
					<textarea name="txtFldDlgVehRemark" id="txtFldDlgVehRemark"   
					class="form-control"  rows="5" maxlength="300" ></textarea>
            </div> 
            </div>
      </div>
      
      
       <div class="form-group"> 
					 <input type="hidden" name="txtFldDlgVehCrtdBy"  id="txtFldDlgVehCrtdBy"/> 
				 	<input type="hidden" name="txtFldDlgVehCrtdDate"  id="txtFldDlgVehCrtdDate" /> 
				 	<input type="hidden" name="txtFldDlgVehId" id="txtFldDlgVehId"/>
				 	<input type="hidden" name="txtFldDlgVehMode" id="txtFldDlgVehMode"/>
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
					    </button>
					   <!--  <button type="button" id="vehOwnCancelbtn" class="btn BtnFIPASRCH StylishSRCH" >
					      <span class="txt">Cancel</span>
					      <span class="round"><i class="fa fa-check"></i></span>
				 </button> -->
				 </div>
		   
      </div>
    </div>
  </div>
</div>
                 </div>
            </div>
        </div>

    </div><!-- panel-group -->
    
    
</div><!-- container -->
  
   </section>
   <section id="Liability" class="tab-panel">
   
<div class="panel-group">
	<div id="liabilitydiv" class="accord-content" >
	
	 <div class="panel-body" > 
	 
	 	<div class="table-responsive">
			<table class="display nowrap table table-borderless" >
			<colgroup>
				<col style="width: 10%;"> 
				<col style="width: 20%;">
				<col style="width: 1%;">
				<col style="width: 10%;">
				<col style="width: 10%;">
				<col style="width: 10%;">
				<col style="width: 40%;">
				</colgroup>
				<tr class="fipaFldLblTextbold" >
						<td rowspan="9" style="vertical-align: middle;!important"> 
						
							<img src="images/menuicons/finli1.png" class="img-rounded" width="50" height="50"/>
						
						</td>
						<td>&nbsp;</td>
						<td>&nbsp;</td>
						<td style="border-bottom:1px solid #465a65">
							<div style="text-align: center;">SELF($)</div>
						</td>
						<td style="border-bottom:1px solid #465a65">
							<div style="text-align: center;">SPOUSE($)</div>
						</td> 
						<td style="border-bottom:1px solid #465a65">
							<div style="text-align: center;">JOINT($)</div>
						</td> 
						<td>&nbsp;</td>
					</tr>
				
					<tr>
						
						<td>
							<div class="fipaFldLblText" style="text-align: right;">Overdraft
							</div>
						</td>
						<td>&nbsp;</td>
						<td>
						<div class="fld-resp-md input-group input-group-sm" > 
							 <span class="input-group-addon">
								 <span class="glyphicon" id="symbolUsd"></span>
							 </span>
						 <input type="text" name="liabSelfOverdraft"
							id="liabSelfOverdraft" class="form-control  numbers clsfipaClient applyEvntUsd" 
							onchange="calcSum(this,'SUMOF_FINLIAB_SELF')"  ></input>
							</div></td>
						<td>
						<div class="fld-resp-md input-group input-group-sm" > 
							 <span class="input-group-addon">
								 <span class="glyphicon" id="symbolUsd"></span>
							 </span>
							 <input type="text" name="liabSpsOverdraft"
							id="liabSpsOverdraft" class="form-control numbers clsfipaSpouse applyEvntUsd" 
							onchange="calcSum(this,'SUMOF_FINLIAB_SPS')"  ></input>
							</div>
							</td>
					<td><div class="fld-resp-md input-group input-group-sm" > 
							 <span class="input-group-addon">
								 <span class="glyphicon" id="symbolUsd"></span>
							 </span>
							 <input type="text" name="liabFamOverdraft"
							id="liabFamOverdraft" class="form-control numbers clsfipaFamily applyEvntUsd" 
							onchange="calcSum(this,'SUMOF_FINLIAB_FAM')"  ></input>
							</div></td>
							<td>&nbsp;</td>
					</tr>
					
					
					
					
					<tr>
					
						<td>
							<div class="fipaFldLblText" style="text-align: right;">Short Term Loans
							</div>
						</td>
							<td>&nbsp;</td>
						<td>
						<div class="fld-resp-md input-group input-group-sm" > 
							 <span class="input-group-addon">
								 <span class="glyphicon" id="symbolUsd"></span>
							 </span>

						 <input type="text" name="liabSelfShortloan"
							id="liabSelfShortloan" class="form-control numbers clsfipaClient applyEvntUsd" 
								 onchange="calcSum(this,'SUMOF_FINLIAB_SELF')" />
							</div>
						</td>
						<td>
						<div class="fld-resp-md input-group input-group-sm" > 
							 <span class="input-group-addon">
								 <span class="glyphicon" id="symbolUsd"></span>
							 </span>

							 <input type="text" name="liabSpsShortloan"
							id="liabSpsShortloan" class="form-control numbers clsfipaSpouse applyEvntUsd" 
							 onchange="calcSum(this,'SUMOF_FINLIAB_SPS')"  />
							</div>
							</td>
					<td><div class="fld-resp-md input-group input-group-sm" > 
							 <span class="input-group-addon">
								 <span class="glyphicon" id="symbolUsd"></span>
							 </span>
							 <input type="text" name="liabFamShortloan"
							id="liabFamShortloan" class="form-control numbers clsfipaFamily applyEvntUsd" 
							onchange="calcSum(this,'SUMOF_FINLIAB_FAM')"  ></input>
							</div></td>
							<td>&nbsp;</td>
					</tr>
					
					
					
					<tr>
						 
						<td>
							<div class="fipaFldLblText" style="text-align: right;">Credit Card Loans
							</div>
						</td>
							<td>&nbsp;</td>
						<td>
						<div class="fld-resp-md input-group input-group-sm" > 
							 <span class="input-group-addon">
								 <span class="glyphicon" id="symbolUsd"></span>
							 </span>
						 <input type="text" name="liabSelfCcLoan"
							id="liabSelfCcLoan" class="form-control numbers clsfipaClient applyEvntUsd" 
								onchange="calcSum(this,'SUMOF_FINLIAB_SELF')" />
							</div>
						</td>
						<td>
						<div class="fld-resp-md input-group input-group-sm" > 
							 <span class="input-group-addon">
								 <span class="glyphicon" id="symbolUsd"></span>
							 </span> 
							 <input type="text" name="liabSpsCcLoan"
								id="liabSpsCcLoan" class="form-control numbers clsfipaSpouse applyEvntUsd" 
								onchange="calcSum(this,'SUMOF_FINLIAB_SPS')" />
							</div>
							</td>
									<td><div class="fld-resp-md input-group input-group-sm" > 
							 <span class="input-group-addon">
								 <span class="glyphicon" id="symbolUsd"></span>
							 </span>
							 <input type="text" name="liabFamCCLoan"
							id="liabFamCCLoan" class="form-control numbers clsfipaFamily applyEvntUsd" 
							onchange="calcSum(this,'SUMOF_FINLIAB_FAM')"  ></input>
							</div></td>
							<td>&nbsp;</td>
					</tr>
					
					
					
					
					<tr>
						
						<td>
							<div class="fipaFldLblText" style="text-align: right;">
									<!-- Icons space -->
									Mortgage Loans
									<a class="btn btn-default addinfoicon" id="popliabSelfShortmorticon"></a>
							</div>
						</td>
						<td><a class="btn btn-default mortgagelnicon" id="mortgagelnicon"></a></td>
						<td>
						<div class="fld-resp-md input-group input-group-sm" > 
							 <span class="input-group-addon">
								 <span class="glyphicon" id="symbolUsd"></span>
							 </span>
							 <input type="text" name="liabSelfShortmort" id="liabSelfShortmort" class="form-control numbers clsfipaClient applyEvntUsd" 
							onchange="calcSum(this,'SUMOF_FINLIAB_SELF')" ></input>
							</div>
							</td>
						<td>
						<div class="fld-resp-md input-group input-group-sm" > 
							 <span class="input-group-addon">
								 <span class="glyphicon" id="symbolUsd"></span>
							 </span>
							 <input type="text" name="liabSpsShortmort"	id="liabSpsShortmort" class="form-control numbers clsfipaSpouse applyEvntUsd" 
							onchange="calcSum(this,'SUMOF_FINLIAB_SPS')" ></input>
							</div>
							</td>
								<td><div class="fld-resp-md input-group input-group-sm" > 
							 <span class="input-group-addon">
								 <span class="glyphicon" id="symbolUsd"></span>
							 </span>
							 <input type="text" name="liabFamShortmort"	id="liabFamShortmort" class="form-control numbers clsfipaFamily applyEvntUsd" 
							onchange="calcSum(this,'SUMOF_FINLIAB_FAM')"  ></input>
							</div></td>
							<td>&nbsp;</td>
					</tr>
					<tr>
						
						<td>
							<div class="fipaFldLblText"  style="text-align: right;">Taxes
							</div>
						</td>
						<td>&nbsp;</td>
						<td><div class="fld-resp-md input-group input-group-sm" > 
							 <span class="input-group-addon">
								 <span class="glyphicon" id="symbolUsd"></span>
							 </span>
							 <input type="text" name="liabSelfTaxes"
							id="liabSelfTaxes" class="form-control numbers clsfipaClient applyEvntUsd" 
							onchange="calcSum(this,'SUMOF_FINLIAB_SELF')" ></input>
							</div>
							</td>
						<td>
						<div class="fld-resp-md input-group input-group-sm" > 
							 <span class="input-group-addon">
								 <span class="glyphicon" id="symbolUsd"></span>
							 </span>
							 <input type="text" name="liabSpsTaxes"
							id="liabSpsTaxes" class="form-control numbers clsfipaSpouse applyEvntUsd" 
							onchange="calcSum(this,'SUMOF_FINLIAB_SPS')" ></input>
							</div>
							</td>
							<td><div class="fld-resp-md input-group input-group-sm" > 
							 <span class="input-group-addon">
								 <span class="glyphicon" id="symbolUsd"></span>
							 </span>
							 <input type="text" name="liabFamTaxes"
							id="liabFamTaxes" class="form-control numbers clsfipaFamily applyEvntUsd" 
							onchange="calcSum(this,'SUMOF_FINLIAB_FAM')"  ></input>
							</div></td>
							<td>&nbsp;</td>
					</tr>
					<tr>
							
								
						<td>
							<div class="fipaFldLblText" style="text-align: right;">
							Other Liabilities</div>
						</td>
						<td><a class="btn btn-default otherliableicon" id="otherliableicon"></a></td>
						<td><div class="fld-resp-md input-group input-group-sm" > 
							 <span class="input-group-addon">
								 <span class="glyphicon" id="symbolUsd"></span>
							 </span>
							 <input type="text" name="liabSelfOthers"
							id="liabSelfOthers" class="form-control numbers clsfipaClient applyEvntUsd" 
							onchange="calcSum(this,'SUMOF_FINLIAB_SELF')" />
							</div>
							</td>
						<td><div class="fld-resp-md input-group input-group-sm" > 
							 <span class="input-group-addon">
								 <span class="glyphicon" id="symbolUsd"></span>
							 </span>
							 <input type="text" name="liabSpsOthers"
							id="liabSpsOthers" class="form-control numbers clsfipaSpouse applyEvntUsd" 
							onchange="calcSum(this,'SUMOF_FINLIAB_SPS')" />
							</div>
							</td>
							<td><div class="fld-resp-md input-group input-group-sm" > 
							 <span class="input-group-addon">
								 <span class="glyphicon" id="symbolUsd"></span>
							 </span>
							 <input type="text" name="liabFamOthers"
							id="liabFamOthers" class="form-control numbers clsfipaFamily applyEvntUsd" 
							onchange="calcSum(this,'SUMOF_FINLIAB_FAM')"  ></input>
							</div></td>
							<td>&nbsp;</td>
					</tr>
					
					
					<tr> 
						<td>
							<div class="fipaFldLblText" style="text-align: right;">Contigent liabilities
							</div>
						</td>
						<td>&nbsp;</td>
						<td>
						<div class="fld-resp-md input-group input-group-sm" > 
							 <span class="input-group-addon">
								 <span class="glyphicon" id="symbolUsd"></span>
							 </span>
<!-- 							  -->
						 <input type="text" name="liabSelfContigent"
							id="liabSelfContigent" class="form-control numbers clsfipaClient applyEvntUsd" 
								onchange="calcSum(this,'SUMOF_FINLIAB_SELF')" />
							</div>
						</td>
						<td>
						<div class="fld-resp-md input-group input-group-sm" > 
							 <span class="input-group-addon">
								 <span class="glyphicon" id="symbolUsd"></span>
							 </span>
<!-- 							  -->
							 <input type="text" name="liabSpsContigent"
							id="liabSpsContigent" class="form-control numbers clsfipaSpouse applyEvntUsd" 
								onchange="calcSum(this,'SUMOF_FINLIAB_SPS')" />
							</div>
							</td>
						<td><div class="fld-resp-md input-group input-group-sm" > 
							 <span class="input-group-addon">
								 <span class="glyphicon" id="symbolUsd"></span>
							 </span>
							 <input type="text" name="liabFamContigent"
							id="liabFamContigent" class="form-control numbers clsfipaFamily applyEvntUsd" 
							onchange="calcSum(this,'SUMOF_FINLIAB_FAM')"  ></input>
							</div></td>
							<td>&nbsp;</td>
					</tr>
					

					<tr>
						 
						<td>
							<div class="fipaFldLblTextbold" style="text-align: right;">Total
								Liabilities &nbsp;</div>
						</td>
						<td>&nbsp;</td>
						<td><div class="fld-resp-md input-group input-group-sm" > 
							 <span class="input-group-addon">
								 <span class="glyphicon" id="symbolUsd"></span>
							 </span>
							 <input type="text" name="txtFldTotFincLiabSelf"
							id="txtFldTotFincLiabSelf"
							class="form-control readOlyCursor clearfipaClient applyEvntUsd"
							 readonly="true"></input></div>
							 </td>
						<td><div class="fld-resp-md input-group input-group-sm" > 
							 <span class="input-group-addon">
								 <span class="glyphicon" id="symbolUsd"></span>
							 </span>
							 <input type="text" name="txtFldTotFincLiabSps"
							id="txtFldTotFincLiabSps"
							 class="form-control readOlyCursor clearfipaSpouse applyEvntUsd"
							readonly="true"></input></div>
							 <input type="hidden"
							name="liabCreatedBy" /> <input type="hidden"
							name="liabCreatedDate" /></td>
						<td><div class="fld-resp-md input-group input-group-sm" > 
							 <span class="input-group-addon">
								 <span class="glyphicon" id="symbolUsd"></span>
							 </span>
							 <input type="text" name="txtFldTotFincLiabFam" id="txtFldTotFincLiabFam"
							 class="form-control readOlyCursor clearfipaFamily applyEvntUsd"
							readonly="true"></input></div></td>
							<td>&nbsp;</td>
					</tr>
				
			</table>

		</div>
	 </div>
	
  
</div>

</div>


 

   
   </section>
  
  </div>
  
</div>





				
				
				
				 
	 	
	  
 