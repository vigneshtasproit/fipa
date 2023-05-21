<!-- 
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


 

 -->