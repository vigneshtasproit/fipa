<div id="accordion" class="panel-group">
	<div id="Invstobjdiv" class="accord-content">
		<div class="accord-header panel-heading">
			<span class="panelHeaderTitle"> Client's Risk Preference &
				Investment Objectives </span> <br>
		</div>

		<div class="panel-body">
		<!-- <fieldset class="fieldsetClsborder"  > -->
			<table class='display nowrap table table-borderless' style="width: 96%">
				<col style="width: 78%;"></col>
				<col style="width: 17%;"></col>
				<col style="width: 20%;"></col>
				<tr>
					<td class="fipaFldLblText" colspan="2"><span
						class="fipaFldLblTextbold">Investment Objectives</span>
						-Retirement, education,wealth accumulation or others (please
						specify)</td>

				</tr>
				<tr>
					<td colspan="3"><textarea name="crInvstobj"
							id="crInvstobj" rows="5" cols="100%"
							class="form-control" maxlength="300"></textarea></td>
				</tr>

				<tr>
					<td class="fipaFldLblText"><span class="fipaFldLblTextbold">Amount
							to invest|</span> <!-- What is the amount of fund you are considering to
						invest? -->What is the investment amount of fund?</td>
					<td colspan="2">
					<div class="input-group input-group-sm"> 
						 <span class="input-group-addon">
					              <span class="glyphicon" id="symbolUsd"></span>
					         </span>
					         <input type="text" name="crInvstamt"
						id="crInvstamt" class="form-control fld-resp-md numbers applyEvntUsd" />
						</div></td>
				</tr>
				
				<tr>
					<td class="fipaFldLblText"><span class="fipaFldLblTextbold">Time
							Horizon|</span> What is the period in which you intend to invest for?</td>
					<td colspan="2"><input type="text"
						name="crInvsttimehorizon" id="crInvsttimehorizon"
						class="form-control fld-resp-md" maxlength="20" /></td>
				</tr>
				
				<tr>
					<td class="fipaFldLblText"><span class="fipaFldLblTextbold">Risk
							Preference| &nbsp; a.</span> Are you prepared to accept volatility in
						order to gain a higher return on investment? <br /> <span
						class="fipaFldLblTextbold">b.</span> Given the following scale
						below, please indicate your risk-return profile.</td>
					<td valign="top" colspan="2"><select name="crRiskpref"
						id="crRiskpref" class="form-control fld-resp-sm">
							<option value="">--SELECT--</option>
							<option value="Y">Yes</option>
							<option value="S">Some</option>
							<option value="N">No</option>
					</select></td>
				</tr>

				<tr align="left">

					<td colspan="2" align="center">

						<table
							style="border-collapse: collapse; empty-cells: show; width: 100%; table-layout: fixed;">
							<col style="width: 0.281in;"></col>
							<col style="width: 0.49in;"></col>
							<col style="width: 0.323in;"></col>
							<col style="width: 0.323in;"></col>
							<col style="width: 0.26in;"></col>
							<col style="width: 0.365in;"></col>
							<col style="width: 0.333in;"></col>
							<col style="width: 0.333in;"></col>
							<col style="width: 0.354in;"></col>
							<col style="width: 0.333in;"></col>
							<col style="width: 0.375in;"></col>
							<col style="width: 0.354in;"></col>
							<col style="width: 0.354in;"></col>
							<col style="width: 0.292in;"></col>
							<col style="width: 0.302in;"></col>
							<col style="width: 0.312in;"></col>
							<col style="width: 0.271in;"></col>
							<col style="width: 0.417in;"></col>
							<col style="width: 0.135in;"></col>
							<tr align="center">
								<td colspan="2" align="center">
								<div class="radio radio-primary">
            					<input type="radio" name="crRiskclass" class="spnClntRiskPref"
										onclick="chkClntRiskPref(this);" id="crRiskclass" value="1" />
            					 	<label  class="control-label"> &nbsp;</label>
          						 </div>  
          						 </td>
								<td colspan="2" align="center">
								<div class="radio radio-primary">
            					<input
										type="radio" name="crRiskclass" class="spnClntRiskPref"
										onclick="chkClntRiskPref(this);" id="crRiskclass"
										value="1.5" />
            					 	<label  class="control-label"> &nbsp;</label>
          						 </div>
          						 </td>
								<td colspan="2" align="center">
								<div class="radio radio-primary">
            					<input
										type="radio" name="crRiskclass" class="spnClntRiskPref"
										onclick="chkClntRiskPref(this);" id="crRiskclass" value="2" />
            					 	<label  class="control-label"> &nbsp;</label>
          						 </div>
          						 </td>
								<td colspan="2" align="center">
								<div class="radio radio-primary">
            					<input type="radio" name="crRiskclass" class="spnClntRiskPref"
										onclick="chkClntRiskPref(this);" id="crRiskclass"
										value="2.5" />
            					 	<label  class="control-label"> &nbsp;</label>
          						 </div>
          						</td>
								<td colspan="2" align="center">
								<div class="radio radio-primary">
            					<input type="radio" name="crRiskclass" class="spnClntRiskPref"
										onclick="chkClntRiskPref(this);" id="crRiskclass" value="3" />
            					 	<label  class="control-label"> &nbsp;</label>
          						 </div>
          						 </td>
								<td colspan="2" align="center">
								<div class="radio radio-primary">
            					<input
										type="radio" name="crRiskclass" class="spnClntRiskPref"
										onclick="chkClntRiskPref(this);" id="crRiskclass"
										value="3.5" />
            					 	<label  class="control-label"> &nbsp;</label>
          						 </div>
          						 </td>
								<td colspan="2" align="center">
								<div class="radio radio-primary">
            					<input type="radio" name="crRiskclass" class="spnClntRiskPref"
										onclick="chkClntRiskPref(this);" id="crRiskclass" value="4" />
            					 	<label  class="control-label"> &nbsp;</label>
          						 </div> 
          						 </td>
								<td colspan="2" align="center">
								<div class="radio radio-primary">
            					<input type="radio" name="crRiskclass" class="spnClntRiskPref"
										onclick="chkClntRiskPref(this);" id="crRiskclass"
										value="4.5" />
            					 	<label  class="control-label"> &nbsp;</label>
          						 </div> 
          						 </td>
								<td colspan="2" align="center">
								<div class="radio radio-primary">
            					<input type="radio" name="crRiskclass" class="spnClntRiskPref"
										onclick="chkClntRiskPref(this);" id="crRiskclass" value="5" />
            					 	<label  class="control-label"> &nbsp;</label>
          						 </div>  
          						 </td>
								<td></td>
							</tr>
							<tr align="center">
								<td></td>
								<td
									style="border-bottom: thin solid black; border-left: thin solid black;"></td>
								<td
									style="border-right: thin dotted black; border-bottom: thin solid black;"></td>
								<td style="border-bottom: thin solid black;"></td>
								<td
									style="border-right: thin dotted black; border-bottom: thin solid black;"></td>
								<td style="border-bottom: thin solid black;"></td>
								<td
									style="border-right: thin dotted black; border-bottom: thin solid black;"></td>
								<td style="border-bottom: thin solid black;"></td>
								<td
									style="border-right: thin dotted black; border-bottom: thin solid black;"></td>
								<td style="border-bottom: thin solid black;"></td>
								<td
									style="border-right: thin dotted black; border-bottom: thin solid black;"></td>
								<td style="border-bottom: thin solid black;"></td>
								<td
									style="border-right: thin dotted black; border-bottom: thin solid black;"></td>
								<td style="border-bottom: thin solid black;"></td>
								<td
									style="border-right: thin dotted black; border-bottom: thin solid black;"></td>
								<td style="border-bottom: thin solid black;"></td>
								<td
									style="border-right: thin solid black; border-bottom: thin solid black;"></td>
								<td></td>
								<td></td>
							</tr>
							<tr style="height: 0.15in;" align="center">
								<td></td>
								<td style="border-left: thin solid black;"></td>
								<td style="border-right: thin dotted black;"></td>
								<td></td>
								<td style="border-right: thin dotted black;"></td>
								<td></td>
								<td style="border-right: thin dotted black;"></td>
								<td></td>
								<td style="border-right: thin dotted black;"></td>
								<td></td>
								<td style="border-right: thin dotted black;"></td>
								<td></td>
								<td style="border-right: thin dotted black;"></td>
								<td></td>
								<td style="border-right: thin dotted black;"></td>
								<td></td>
								<td style="border-right: thin solid black;"></td>
								<td></td>
								<td></td>
							</tr>
							<tr align="center" class="fipaFldLblTextbold">
								<td colspan="2">
									<div style="text-align: center;">1</div>
								</td>
								<td></td>
								<td></td>
								<td colspan="2">
									<div style="text-align: center;">2</div>
								</td>
								<td></td>
								<td></td>
								<td colspan="2">
									<div style="text-align: center;">3</div>
								</td>
								<td></td>
								<td></td>
								<td colspan="2">
									<div style="text-align: center;">4</div>
								</td>
								<td></td>
								<td></td>
								<td colspan="2">
									<div style="text-align: center;">5</div>
								</td>
								<td></td>
							</tr>
							<tr align="center" class="fipaFldLblText">
								<td colspan="3">
									<div>Low Returns/ Low Risk</div>
								</td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td colspan="3">
									<div>High Returns/ High Risk</div>
								</td>
							</tr>
							<tr style="height: 0.323in;" align="center"
								class="fipaFldLblText">
								<td colspan="19">
									<div class="form-control style_311"
										style="text-align: center;">General Risk Classification
										of Funds</div>
								</td>
							</tr>
							<tr align="center">
								<td></td>
								<td style="border-left: thin dotted black;"></td>
								<td style="border-right: thin dotted black;"></td>
								<td></td>
								<td style="border-right: thin dotted black;"></td>
								<td></td>
								<td style="border-right: thin dotted black;"></td>
								<td></td>
								<td style="border-right: thin dotted black;"></td>
								<td></td>
								<td style="border-right: thin dotted black;"></td>
								<td></td>
								<td style="border-right: thin dotted black;"></td>
								<td></td>
								<td style="border-right: thin dotted black;"></td>
								<td></td>
								<td style="border-right: thin dotted black;"></td>
								<td></td>
								<td></td>
							</tr>
							<tr align="center" class="fipaFldLblText">
								<td></td>
								<td class="style_314" colspan="3"
									style="border-left: thin dotted black;" align="right">
									<div>SGD Bond Fund</div>
								</td>
								<td style="border-right: thin dotted black;"></td>
								<td></td>
								<td style="border-right: thin dotted black;"></td>
								<td colspan="4" rowspan="6">
									<div>Regional Balanced Funds</div>
									<div>Global Balanced Funds</div>
									<div>Country HY Bond Funds</div>
									<div>Regional HY Bond Funds</div>
									<div>Global HY Bond Funds</div>
									<div>Country Bond Funds</div>
								</td>
								<td></td>
								<td style="border-right: thin dotted black;"></td>
								<td></td>
								<td style="border-right: thin dotted black;"></td>
								<td colspan="4" rowspan="2">
									<div>Sector Equity Funds</div>
									<div>Country Equity Funds</div>
								</td>
							</tr>
							<tr align="center" class="fipaFldLblText">
								<td colspan="3">
									<div style="text-align: center;">SGD Money Market Funds</div>
								</td>
								<td></td>
								<td style="border-right: thin dotted black;"></td>
								<td></td>
								<td></td>
								<td></td>
								<td style="border-right: thin dotted black;"></td>
								<td></td>
								<td></td>
							</tr>
							<tr align="center" class="fipaFldLblText">
								<td></td>
								<td style="border-left: thin dotted black;"></td>
								<td></td>
								<td></td>
								<td style="border-right: thin dotted black;"></td>
								<td></td>
								<td></td>
								<td></td>
								<td style="border-right: thin dotted black;"></td>
								<td></td>
								<td></td>
								<td></td>
								<td style="border-right: thin dotted black;"></td>
								<td></td>
								<td></td>
							</tr>
							<tr align="center" class="fipaFldLblText">
								<td></td>
								<td style="border-left: thin dotted black;"></td>
								<td></td>
								<td></td>
								<td style="border-right: thin dotted black;"></td>
								<td></td>
								<td></td>
								<td colspan="4" rowspan="4">
									<div>Regional Equity Funds</div>
									<div>Emerging Mkts Equity Funds</div>
									<div>Global Equity Funds</div>
									<div>Country Balanced Funds</div>
								</td>
								<td></td>
								<td style="border-right: thin dotted black;"></td>
								<td></td>
								<td></td>
							</tr>
							<tr align="center" class="fipaFldLblText">
								<td></td>
								<td style="border-left: thin dotted black;"></td>
								<td></td>
								<td></td>
								<td style="border-right: thin dotted black;"></td>
								<td></td>
								<td></td>
								<td></td>
								<td style="border-right: thin dotted black;"></td>
								<td></td>
								<td></td>
							</tr>
							<tr align="center" class="fipaFldLblText">
								<td></td>
								<td style="border-left: thin dotted black;"></td>
								<td></td>
								<td></td>
								<td style="border-right: thin dotted black;"></td>
								<td></td>
								<td></td>
								<td></td>
								<td style="border-right: thin dotted black;"></td>
								<td></td>
								<td></td>
							</tr>
							<tr align="center" class="fipaFldLblText">
								<td></td>
								<td style="border-left: thin dotted black;"></td>
								<td></td>
								<td></td>
								<td style="border-right: thin dotted black;"></td>
								<td colspan="4">
									<div>Regional Bond Funds</div>
								</td>
								<td></td>
								<td></td>
								<td></td>
								<td style="border-right: thin dotted black;"></td>
								<td></td>
								<td></td>
							</tr>
							<tr style="height: 0.198in;" align="center"
								class="fipaFldLblText">
								<td></td>
								<td style="border-left: thin dotted black;"></td>
								<td></td>
								<td></td>
								<td style="border-right: thin dotted black;"></td>
								<td colspan="4">
									<div>Emerging Market Bond Funds</div>
								</td>
								<td></td>
								<td></td>
								<td></td>
								<td style="border-right: thin dotted black;"></td>
								<td></td>
								<td></td>
								<td></td>
								<td style="border-right: thin dotted black;"></td>
								<td></td>
								<td></td>
							</tr>
							<tr style="height: 0.198in;" align="center"
								class="fipaFldLblText">
								<td></td>
								<td style="border-left: thin dotted black;"></td>
								<td></td>
								<td colspan="4">
									<div>Global Bond Funds</div>
								</td>
								<td></td>
								<td style="border-right: thin dotted black;"></td>
								<td></td>
								<td style="border-right: thin dotted black;"></td>
								<td></td>
								<td style="border-right: thin dotted black;"></td>
								<td></td>
								<td></td>
								<td></td>
								<td style="border-right: thin dotted black;"></td>
								<td></td>
								<td></td>
							</tr>
							<tr style="height: 0.146in;" align="center">
								<td></td>
								<td
									style="border-bottom: thin solid black; border-left: thin dotted black;"></td>
								<td
									style="border-right: thin dotted black; border-bottom: thin solid black;"></td>
								<td style="border-bottom: thin solid black;"></td>
								<td
									style="border-right: thin dotted black; border-bottom: thin solid black;"></td>
								<td style="border-bottom: thin solid black;"></td>
								<td
									style="border-right: thin dotted black; border-bottom: thin solid black;"></td>
								<td style="border-bottom: thin solid black;"></td>
								<td
									style="border-right: thin dotted black; border-bottom: thin solid black;"></td>
								<td style="border-bottom: thin solid black;"></td>
								<td
									style="border-right: thin dotted black; border-bottom: thin solid black;"></td>
								<td style="border-bottom: thin solid black;"></td>
								<td
									style="border-right: thin dotted black; border-bottom: thin solid black;"></td>
								<td style="border-bottom: thin solid black;"></td>
								<td
									style="border-right: thin dotted black; border-bottom: thin solid black;"></td>
								<td style="border-bottom: thin solid black;"></td>
								<td
									style="border-right: thin dotted black; border-bottom: thin solid black;"></td>
								<td></td>
								<td></td>
							</tr>
						</table>
					</td>
				</tr>


				<tr>
					<td class="fipaFldLblText"><span class="fipaFldLblTextbold">Returns
							expectation - ROI | </span> What is the return on investment you expect
						from this investment?</td>
					<td colspan="2">
					<div class="input-group input-group-sm"> 
						 <span class="input-group-addon">
					              <span class="glyphicon" id="symbolUsd"></span>
					         </span><input type="text" name="crRoi"
						id="crRoi" class="form-control fld-resp-md numbers applyEvntUsd" />
						</div>
						</td>
				</tr>
				
				<tr>
					<td class="fipaFldLblText"><span class="fipaFldLblTextbold">Do
							you have adequate funds to handle your current and near term
							financial needs?</span></td>
					<td colspan="2"><select id="crAdeqfund"
						name="crAdeqfund" class="form-control fld-resp-sm">
							<option value="">--SELECT--</option>
							<option value="Y">YES</option>
							<option value="N">NO</option>
					</select></td>
				</tr>
				
				<tr align="left">
					<td colspan="3" valign="bottom">
						<div class="fipaFldLblTextbold">Other concerns - please
							specify</div> <br />
							 <textarea name="crOthconcern"
							id="crOthconcern" class="form-control" cols="98%" rows="5"
							maxlength="300"></textarea>

					</td>

				</tr>


			</table>

		<!-- </fieldset> -->
		</div>

	</div>

	

</div>







