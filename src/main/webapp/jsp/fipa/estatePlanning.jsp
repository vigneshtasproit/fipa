<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<div  class="panel-group">
	<div id="estateplansection" class="accord-content">
<!-- 	<span class="panelHeaderTitle"> Estate Planning</span><br>  -->
	 <!-- <fieldset class="fieldsetClsborder height480"> -->
<!-- 	table-borderless -->
			<table class="display nowrap table  table-bordered" style="width:100%">
				<col style="width: 15%;"></col>
				<col style="width: 15%;"></col>
				<col style="width: 15%;"></col>
				<col style="width: 15%;"></col> 
				<thead>
					<tr valign="top" align="left" class="fipaFldLblTextbold" style="border-bottom:1px solid #465a65">
						 
						<td>&nbsp;</td>
						<td>
							<div class="fipaFldLblTextbold" style="text-align: center;">Self</div>
						</td>
						<td>
							<div class="fipaFldLblTextbold" style="text-align: center;">Spouse</div>
						</td>
						<td>
							<div class="fipaFldLblTextbold" style="text-align: center;">Remarks</div>
						</td>
					</tr>

				</thead>
				<tbody>
					<tr valign="top" style="text-align: left">
					 <td>
					 <input id="txtFldEstTrstDesc" name="txtFldEstTrstDesc"  
					 value="Have any Will or Trust been set up?"  
                    class="fipaFldLblText fld-resp readOlyCursor"  
                    style="text-align: right;border:hidden;background:transparent"  
                    readonly="true" /> 
					 </td> 
					<td align="center"> 
					<select name="txtFldEstSlfTrstFlg" id="txtFldEstSlfTrstFlg" 
					class="form-control fld-resp-sm clsfipaClient" >
							<option value="">--SELECT--</option>
							<option value="Y">Yes</option> 
							<option value="N">No</option>
					</select>
					</td>
					<td  align="center">
					<select name="txtFldEstSpsTrstFlg" id="txtFldEstSpsTrstFlg" 
					class="form-control fld-resp-sm clsfipaSpouse">
							<option value="">--SELECT--</option>
							<option value="Y">Yes</option> 
							<option value="N">No</option>
					</select>
					</td>
					<td  align="center"> 
							<textarea name="txtFldEstTrstRmrks" id="txtFldEstTrstRmrks"   
					class="form-control fld-resp"  rows="5" maxlength="300"></textarea>
					</td>
					</tr>
				 
					<tr valign="top" style="text-align: left">
					  <td>
					 <input id="txtFldEstLPOADesc" name="txtFldEstLPOADesc"  
					 value="Have any LPOA been set up?"  
                    class="fipaFldLblText fld-resp readOlyCursor"  style="text-align: right;border:hidden;background:transparent" 
                     readonly="true" /> 
					 </td> 
					 
					<td  align="center">
					<select name="txtFldEstSlfLPOAFlg" id="txtFldEstSlfLPOAFlg" 
					class="form-control fld-resp-sm clsfipaClient">
							<option value="">--SELECT--</option>
							<option value="Y">Yes</option> 
							<option value="N">No</option>
					</select>
					</td>
					<td  align="center">
					<select name="txtFldEstSpsLPOAFlg" id="txtFldEstSpsLPOAFlg"
					 class="form-control fld-resp-sm clsfipaSpouse">
							<option value="">--SELECT--</option>
							<option value="Y">Yes</option> 
							<option value="N">No</option>
					</select>
					</td>
					<td  align="center"> 
							<textarea name="txtFldEstLPOARmrks" id="txtFldEstLPOARmrks"   
					class="form-control fld-resp"  rows="5" maxlength="300"></textarea>
					</td>
					</tr>
					
					
					<tr valign="top" style="text-align: left"> 
					 <td>
					 <input id="txtFldEstCharityDesc" name="txtFldEstCharityDesc"  
					 value="Do you intend to provide gift to charity"  
                    class="fipaFldLblText fld-resp readOlyCursor"  
                    style="text-align: right;border:hidden;background:transparent" 
                     readonly="true" /> 
					 </td> 
					 
					<td  align="center">
					<select name="txtFldEstSlfCharityFlg" id="txtFldEstSlfCharityFlg" 
					class="form-control fld-resp-sm clsfipaClient">
							<option value="">--SELECT--</option>
							<option value="Y">Yes</option> 
							<option value="N">No</option>
					</select>
					</td>
					<td  align="center">
					<select name="txtFldEstSpsCharityFlg" id="txtFldEstSpsCharityFlg" 
					class="form-control fld-resp-sm clsfipaSpouse">
							<option value="">--SELECT--</option>
							<option value="Y">Yes</option> 
							<option value="N">No</option>
					</select>
					</td>
					<td  align="center"><textarea name="txtFldEstCharityRmrks" id="txtFldEstCharityRmrks"   
					class="form-control fld-resp"  rows="5" maxlength="300"></textarea> </td>
					</tr>
					
					
					<tr valign="top" style="text-align: left">
					  
					 <td>
					 <input id="txtFldEstOverseasDesc" name="txtFldEstOverseasDesc" 
					  value="Do you have any assets overseas"  
                    class="fipaFldLblText fld-resp readOlyCursor"  
                    style="text-align: right;border:hidden;background:transparent"  
                    readonly="true" /> 
					 </td> 
					 
					 
					<td  align="center">
					<select name="txtFldEstSlfOverseasFlg" id="txtFldEstSlfOverseasFlg" 
					class="form-control fld-resp-sm clsfipaClient">
							<option value="">--SELECT--</option>
							<option value="Y">Yes</option> 
							<option value="N">No</option>
					</select>
					</td>
					<td  align="center">
					<select name="txtFldEstSpsOverseasFlg" id="txtFldEstSpsOverseasFlg" 
					class="form-control fld-resp-sm clsfipaSpouse">
							<option value="">--SELECT--</option>
							<option value="Y">Yes</option> 
							<option value="N">No</option>
					</select>
					</td>
					<td  align="center"><textarea name="txtFldEstOverseasRmrks" id="txtFldEstOverseasRmrks"   
					class="form-control fld-resp"  rows="5" maxlength="300"></textarea> 
					 </td>
					</tr>
					<tr>
					<td><input type="hidden" name="estId"
							id="estId" />
							<input type="hidden" name="txtFldEstCrtdBy"
							id="txtFldEstCrtdBy" />
							<input type="hidden" name="txtFldEstCrtdDate"
							id="txtFldEstCrtdDate" /></td>
					</tr>
				</tbody>
			</table>	
			<!-- </fieldset>			 -->
 </div>
 </div> 
 


 
