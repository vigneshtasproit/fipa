<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<div  class="panel-group">

	<div id="cashassetdiv" class="accord-content">
		<!-- <br> <span class="panelHeaderTitle"> Cash Assets</span> <br> -->
		<div class="panel-body">
		<%-- <div class="table-responsive">
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
			</div> --%>


		<!-- 	<div class="clearspace40"></div>
			<div class="middle-line"></div>
			<div class="clearspace40"></div> -->


		<%-- <div class="table-responsive">
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
 --%>

			<!-- <div class="clearspace40"></div>
			<div class="middle-line"></div>
			<div class="clearspace40"></div> -->


<%-- <div class="table-responsive">
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
			</div> --%>
			
			
			<!-- <div class="clearspace40"></div>
			<div class="middle-line"></div>
			<div class="clearspace40"></div> -->
				<%-- <span class="panelHeaderTitle"> Other Assets</span> <br>  
				<fieldset class="fieldsetClsborder" id='othrassets' tabindex='1'>
			<div class="table-responsive">
			<table class="display nowrap table table-borderless" style="width: 100%"> 
					<col style=" width:30%;"></col>
					<col style=" width:14%;"></col>
					<col style=" width:14%;"></col>
					<col style=" width:14%;"></col>
					<col style=" width:14%;"></col>
					<col style=" width:14%;"></col>
					
					<thead>
					
					<tr valign="top" align="left" class="fipaFldLblTextbold" style="border-bottom:1px solid #465a65">
						<td>&nbsp;</td>														
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
							<div  style="text-align:right;">Personal Items</div>
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
							<div class="fipaFldLblText" style=" text-align:right;">Club Ownership</div>
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
							<div class="fipaFldLblText" style=" text-align:right;">Business Ownership</div>
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
							<div class="fipaFldLblText" style=" text-align:right;">Others Assets</div>
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
					<tr valign="top" align="left">
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
			
			</div>
				<div class="table-responsive">
				<table width="100%">
				<tr > 
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
 --%>
			
			
			
			<!-- <div class="clearspace40"></div>
			<div class="middle-line"></div>
			<div class="clearspace40"></div> -->


<!-- 			<span class="panelHeaderTitle"> Other Personal Assets</span> -->
<!-- 			 <br>  -->
			<!-- <div class="table-responsive">
			

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
						<tr>
							<th>#</th> 
							<th><div  class="checkbox checkbox-primary text-center"><input type="checkbox" id="SelpersonalAsset" name="SelpersonalAsset" onclick="SelAllpersonalAsset(this)"><label for="SelpersonalAsset">&nbsp;</label></div></th>
							<th><div style="width: 70px;">Account Holder<span class="mandFldastrks">*</span></div></th>
							<th><div style="width: 100px;">Types of Personal Assets<span class="mandFldastrks">*</span></div></th>
							<th><div style="width: 120px;">Name of Asset<span class="mandFldastrks">*</span></div></th>
							<th><div style="width: 80px;">Purchase Value<small>($)</small></div></th>
							<th><div style="width: 80px;">Current Value<small>($)</small></div></th>
							<th><div style="width: 80px;">Outstanding 
							Loan<small>($)</small>
							</div></th>
							<th><div style="width: 80px;">Estimate Appreciation Value<small>($)</small></div></th>
							<th><div style="width: 50px;">Yrs to Keep<small>(yrs)</small></div></th>
							<th><div style="width: 60px;"><small>(%)</small> Preserved for Child's Education</div></th>
							<th><div style="width: 60px;"><small>(%)</small>Preserved for Retirement Planning</div></th>
							<th><div style="width: 180px;">Remarks</div></th>
						</tr>

					</thead>

					<tbody>

					</tbody>

				</table>  -->




			<!-- <div class="clearspace40"></div>
			<div class="middle-line"></div>
			<div class="clearspace40"></div> -->


			 <!-- <div class="table-responsive">

				<div class="btn-group pull-right funcToDisable" role="group">
						<button type="button"  class="btn btn-default navbar-btn delRow-icon" id="BusiDRow" disabled="true"></button>
						</div>
				<div class="btn-group pull-right funcToDisable" role="group" style="margin-right: 10px;" >
						<button type="button"  class="btn btn-default navbar-btn addRow-icon" id="BusiARow"></button>
						<button type="button"  class="btn btn-default navbar-btn editRow-icon" id="BusiERow" disabled="true"></button>

	  
				</div>
				
				<img src="images/menuicons/busasset.png"  class="img-rounded" width="50" height="50"/>
				<span class="panelHeaderTitle"> Business Assets</span>
				
				</div>  
				<table id="businessAssetTbl" class="dataTable table-bordered table-striped display hover" style="width:100%">
					<thead>
						<tr>
							<th><div style="width: 30px;">#</div></th> 
							<th><div  class="checkbox checkbox-primary text-center"><input type="checkbox" id="SelbusinessAsset" name="SelbusinessAsset" onclick="SelAllbusinessAssett(this)"><label for="SelbusinessAsset" >&nbsp;</label></div></th>
							<th><div style="width: 70px;">Account Holder<span class="mandFldastrks">*</span></div></th>
							<th><div style="width: 100px;">Types of Business Assets<span class="mandFldastrks">*</span></div></th>
							<th><div style="width: 120px;">Name of Business<span class="mandFldastrks">*</span></div></th>
							<th><div style="width: 80px;">Investment Value<small>($)</small></div></th>
							<th><div style="width: 80px;">Current Value<small>($)</small></div></th>
							<th><div style="width: 80px;">Outstanding Loan<small>($)</small></div></th>
							<th><div style="width: 80px;">Estimate Appreciation Value<small>$</small></div></th>
							<th><div style="width: 50px;">Yrs to Keep<small>(yrs)</small></div></th>
							<th><div style="width: 60px;"><small>(%)</small> Preserved for Child's Education</div></th>
							<th><div style="width: 60px;"><small>(%)</small> Preserved for Retirement Planning</div></th>
							<th><div style="width: 180px;">Remarks</div></th>
						</tr>

					</thead>

					<tbody>

					</tbody>

				</table>  -->






<!-- <div class="clearspace40"></div>
			<div class="middle-line"></div>
			<div class="clearspace40"></div> -->




		<!-- <div class="panel-body" style="min-height: 200px" id='vehOwn' tabindex='1'>
 <div class="table-responsive">
				<div class="btn-group pull-right funcToDisable" role="group">
						<button type="button"  class="btn btn-default navbar-btn delRow-icon"  id="VehDRow" disabled="true"></button>
				</div>
  				<div class="btn-group pull-right funcToDisable" role="group" style="margin-right: 10px;">
						<button type="button"  class="btn btn-default navbar-btn addRow-icon"  id="VehARow"></button>
						<button type="button"  class="btn btn-default navbar-btn editRow-icon" id="VehERow" disabled="true"></button>
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
							<th><div style="width:50px;" class="checkbox checkbox-primary text-center"><input type="checkbox" id="Selvehicleownership" name="Selvehicleownership" onclick="SelAllvehicleownership(this)"><label for="Selvehicleownership" >&nbsp;</label></div></th>
							<th><div style="width:90px;">Owner<span class="mandFldastrks">*</span></div></th>
							<th><div style="width:80px;">Market Value<small>($)</small><span class="mandFldastrks">*</span></div></th>
							<th><div style="width:80px">Loan Value<small>($)</small><span class="mandFldastrks">*</span></div></th>
							<th><div style="width:120px">Loan Bank</div></th>
							<th><div style="width:80px;">Period<small>(yrs)</small></div></th>
							<th><div style="width:80px;">Monthly Instalment<small>($)</small></div></th>
							<th><div style="width:80px;">Sold On Death</div></th>
							<th><div style="width:180px;">Remarks</div></th>
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
		</div> -->
		
		
		
		</div>



	</div>

</div>


 

<!-- Modal  -->
<%-- <div class="modal fade" id="perAssets_Dialog" style="display: none"  tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
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
</div> --%>






 <!-- Modal  -->
<%-- <div class="modal fade" id="busnAssets_Dialog" style="display: none"  tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
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
					for="txtFldDlgBusnOsValue">Outstanding Loan  </label>
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
					    </div>
		   
      </div>
    </div>
  </div>
</div> --%>




 <!-- Modal  -->
<!-- <div class="modal fade" id="vehown_Dialog" style="display: none"  tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
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
	<div class="col-md-6 col-sm-6 col-xs-6 ">  
		<label class="control-label mandFldastrks pull-right text-right" for="txtFldDlgVehOwner">
             Owner*</label> 	 
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
      
      
      <div class="form-group">
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
      
      
      
      <div class="form-group">
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
      </div>
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
      
      
      
      
      <div class="form-group">
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
					   
				 </div>
		   
      </div>
    </div>
  </div>
</div> -->

