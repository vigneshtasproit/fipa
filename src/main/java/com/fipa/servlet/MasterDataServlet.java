package com.fipa.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONArray;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;

import com.fipa.dbinterface.DBInterfaceFpmsImpl;
import com.fipa.dbinterface.DBInterfaceImpl; 
import com.fipa.dto.MasterCpfContribRates;
import com.fipa.service.MasterCpfService;
import com.fipa.util.ApplicationContextUtils;
import com.fipa.util.FipaConstant;
import com.fipa.util.FipaUtils;

//import net.sf.json.JSONArray;
//import net.sf.json.JSONObject;

/**
 * Servlet implementation class MasterDataServlet
 */
@WebServlet("/MasterDataServlet")
public class MasterDataServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	final Logger logger = LoggerFactory.getLogger(MasterDataServlet.class);
    /**
     * @see HttpServlet#HttpServlet()
     */
    public MasterDataServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doPost(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String strDBCallFor = FipaUtils.getParamValue(request, "DBCALLFOR"); 
		 

		JSONArray retval = new JSONArray();
		PrintWriter out = response.getWriter();
		
		
		if(!FipaUtils.isSessionExpired(request)){
			JSONObject jsonObj = new JSONObject();
			jsonObj.put("SESSION_EXPIRY", "SESSION_EXPIRY");
			retval.put(jsonObj);
			strDBCallFor = "";
		}
		
		
		ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();		
		DBInterfaceImpl dao = (DBInterfaceImpl)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);	
		DBInterfaceFpmsImpl fpmsdao = (DBInterfaceFpmsImpl)appCtx.getBean(FipaConstant.FPMS_DBIMP_BEAN);
	
		Date sysdate = FipaUtils.isValidDB(fpmsdao);
		
		if(retval.length() == 0 && FipaUtils.checkNullVal(sysdate) ){
			JSONObject jsonObj = new JSONObject();
			jsonObj.put("DB_ERROR", "DB_ERROR");
			retval.put(jsonObj);
			strDBCallFor = "";
		}
		 
		if(strDBCallFor.equalsIgnoreCase("CPF_CONTRB_SEARCH")){ 
			retval = cpfContrbSearchDetails(request);
		}
		
		if(strDBCallFor.equalsIgnoreCase("CPF_CONTRB_SRCH_EXIST")){
			retval=cpfContrbCheckExisting(request);
		}
		
		out.print(retval);
	}
	
	 public JSONArray cpfContrbSearchDetails(HttpServletRequest request){
			
//			logger.info(" ------> Inside cpfContrbSearchDetails Method ");  
			JSONArray retValues = new JSONArray();
			 
			JSONObject cpfCtrbRateTabJsnObj =  new JSONObject(); 
			
			List cpfCtrbRateSearchList = new ArrayList();		
			MasterCpfService cpfCtrbRateServ=new MasterCpfService(); 

			
			try{
			
				ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
				
				DBInterfaceImpl dao = (DBInterfaceImpl)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
				
					
				
				String strsrchcpfconeffFrom= FipaUtils.getParamValue(request, "srchcpfconeffFrom");
				strsrchcpfconeffFrom = java.net.URLDecoder.decode(strsrchcpfconeffFrom,"UTF-8");
				

				String strsrchcpfconageGrp= FipaUtils.getParamValue(request, "srchcpfconageGrp");
				strsrchcpfconageGrp = java.net.URLDecoder.decode(strsrchcpfconageGrp,"UTF-8");
				

				String strsrchcpfconwageGrp= FipaUtils.getParamValue(request, "srchcpfconwageGrp");
				strsrchcpfconwageGrp = java.net.URLDecoder.decode(strsrchcpfconwageGrp,"UTF-8");
				
				
				 
				StringBuffer strCpfBufQryParam = new StringBuffer();
			 
				
				if(!FipaUtils.nullOrBlank(strsrchcpfconeffFrom)){
					strCpfBufQryParam.append(" and cpf.effFrom= TO_DATE('").append(strsrchcpfconeffFrom).append("','DD/MM/YYYY')");
 
				}
				 
				if(!FipaUtils.nullOrBlank(strsrchcpfconageGrp)){
					strCpfBufQryParam.append(" and cpf.ageGrp = '").append(strsrchcpfconageGrp).append("'"); 
				}
				
				if(!FipaUtils.nullOrBlank(strsrchcpfconwageGrp)){
					strCpfBufQryParam.append(" and cpf.wageGrp = '").append(strsrchcpfconwageGrp).append("'"); 
				}
				
				cpfCtrbRateSearchList = cpfCtrbRateServ.cpfContrbRateSearch(dao,strCpfBufQryParam.toString());
 
				cpfCtrbRateTabJsnObj.put("CPF_CONTRB_SEARCH", FipaUtils.getPropsJsonArray(cpfCtrbRateSearchList, MasterCpfContribRates.class));
				
				
				retValues.put(cpfCtrbRateTabJsnObj);
				 
				
				
			}catch(Exception ex){
				logger.error("",ex);
				
			}
			
			return retValues;
			
		}

	 public JSONArray cpfContrbCheckExisting(HttpServletRequest request){
			
//			logger.info(" ------> Inside cpfAllocCheckExisting Method "); 
			
			JSONArray retValues = new JSONArray();
			
			JSONObject cpfContrbChkDataJsnObj = new JSONObject();
			JSONObject cpfContrbChkTabJsnObj =  new JSONObject();
			JSONArray cpfContrbChkDataJsnArr = new JSONArray();
			
			List cpfContrbChkSearchList = new ArrayList();		
			MasterCpfService cpfContrbChkServ=new MasterCpfService(); 

			
			try{
			
				ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
				
				DBInterfaceImpl dao = (DBInterfaceImpl)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
				
					
				 
				String strCpfContrbChkAgeGrp = FipaUtils.getParamValue(request, "strSrchCpfContrbAgeGrp");
				strCpfContrbChkAgeGrp = java.net.URLDecoder.decode(strCpfContrbChkAgeGrp,"UTF-8");
				 
				
				
				StringBuffer strCpfBufQryParam = new StringBuffer();
			 
				 
				
				if(!FipaUtils.nullOrBlank(strCpfContrbChkAgeGrp)){
					strCpfBufQryParam.append(" and cpf.EMP_AGE = '").append(strCpfContrbChkAgeGrp).append("'");
				}
	  
			  
				
				cpfContrbChkSearchList = cpfContrbChkServ.cpfContrbSrchExisting(dao,strCpfBufQryParam.toString());

				if(cpfContrbChkSearchList.size() > 0){
					
					Iterator it = cpfContrbChkSearchList.iterator();
					
					String strContDets  = "";
					int jsonSize=0;
					
					int sino=0;
					while(it.hasNext()){
						
						Object[] conObjs = (Object[]) it.next();					
						
						 
						cpfContrbChkDataJsnObj.put("sino",++sino);
						 
						cpfContrbChkDataJsnObj.put("txtCpfContribId",FipaUtils.getObjValue(conObjs[0]));				
						
						cpfContrbChkDataJsnObj.put("selCpfContEmpAge", FipaUtils.getObjValue(FipaUtils.nullObj(conObjs[1])?"0":conObjs[1].toString()));
											
						cpfContrbChkDataJsnObj.put("txtCpfContrbByEmployer", FipaUtils.getObjValue(FipaUtils.nullObj(conObjs[2])?"0":conObjs[2].toString()));
						
						cpfContrbChkDataJsnObj.put("txtCpfConrtrbByEmployee", FipaUtils.getObjValue(FipaUtils.nullObj(conObjs[3])?"0":conObjs[3].toString()));
						
						cpfContrbChkDataJsnObj.put("txtCpfTotalContrrb", FipaUtils.getObjValue(FipaUtils.nullObj(conObjs[4])?"0":conObjs[4].toString()));
						
						cpfContrbChkDataJsnObj.put("txtCpfCrdtToOrdinaryac", FipaUtils.getObjValue(FipaUtils.nullObj(conObjs[5])?"0":conObjs[5].toString()));
						
						cpfContrbChkDataJsnObj.put("txtCpfCrdtToSpecialac", FipaUtils.getObjValue(FipaUtils.nullObj(conObjs[6])?"0":conObjs[6].toString()));
						
						cpfContrbChkDataJsnObj.put("txtCpfCrdtToMedisaveac", FipaUtils.getObjValue(FipaUtils.nullObj(conObjs[7])?"0":conObjs[7].toString()));
						
						cpfContrbChkDataJsnObj.put("txtCpfCrdtToRetirementac", FipaUtils.getObjValue(FipaUtils.nullObj(conObjs[8])?"0":conObjs[8].toString())); 
						
						cpfContrbChkDataJsnObj.put("txtCpfCrtdby", FipaUtils.getObjValue(conObjs[9]));
						
						cpfContrbChkDataJsnObj.put("txtCpfCrtddate", FipaUtils.getObjValue(conObjs[10]));
						
						cpfContrbChkDataJsnObj.put("txtCpfContRemarks", FipaUtils.getObjValue(conObjs[11]));
							  	
							cpfContrbChkDataJsnArr.put(cpfContrbChkDataJsnObj);
							jsonSize = cpfContrbChkDataJsnArr.length(); 
					}
				}
				else{
					
					cpfContrbChkTabJsnObj.put("NOREC_FOUND", "");
					
				}
				
				cpfContrbChkTabJsnObj.put("CPF_CONTRB_EXIST", cpfContrbChkDataJsnArr);
		
				retValues.put(cpfContrbChkTabJsnObj);
				
//				logger.info("  retValues ------>"+retValues); 
				
				
			}catch(Exception ex){
				logger.error("",ex);
				
			}
			
			return retValues;
			
		}
	 
	 
}
