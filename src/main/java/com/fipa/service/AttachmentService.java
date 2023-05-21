package com.fipa.service;

import java.io.FileInputStream;
import java.io.InputStream;
import java.sql.ResultSet;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import oracle.jdbc.OracleResultSet;
import oracle.sql.BFILE;

import org.hibernate.Session;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.fipa.db.AttachmentDB;
import com.fipa.db.FPMSDataDB;
import com.fipa.dto.FnaAttachments;
import com.fipa.util.FipaConstant;
import com.fipa.util.FipaUtils; 
 

public class AttachmentService {
	final Logger logger = LoggerFactory.getLogger(FPMSDataDB.class);
	 public Session getCurrHBSession(){
		 AttachmentDB cDB = new AttachmentDB();
		 return cDB.getCurrHBSession();
	 }


	/* public double getMaxAttachId(Object attachCls){
		 System.out.println("Attachment service-------------");
		AttachmentDB cDB = new AttachmentDB();
		 return cDB.getMaxAttachId(attachCls);
	 }*/

	 public String getMaxAttachId(Object attachCls){
		AttachmentDB cDB = new AttachmentDB();
		 return cDB.getMaxAttachId(attachCls);
	 }
	 
	 public String getMaxFnaAttachId(Object attachCls){
			AttachmentDB cDB = new AttachmentDB();
			 return cDB.getMaxFnaAttachId(attachCls);
		 }
	 
	public String downloadAttachment(HttpServletRequest request, HttpServletResponse response)throws Exception {
		String strRet = "";
		AttachmentDB  db = new AttachmentDB();
		
		String strAtchId=FipaUtils.getParamValue(request, "documentId");
 
		
		ResultSet document = db.downloadAttachment(strAtchId);
		
		String attachFileName = null;
        String attachFileSize = null;
        String attachFileType = null;
        BFILE attachDoc = null;
        
        String filename = "";
        
        while(document.next()){
        	
        	attachDoc= ((OracleResultSet )document).getBFILE(1);
			attachFileName =  document.getString(2);
			attachFileSize = document.getString(3);
			attachFileType = document.getString(4);
        	
        }
        
        if(attachDoc.fileExists()){
        	
        	filename = FipaUtils.getBFILEDirPath(FipaConstant.GLBL_MODULE_ATTACTMENT)+attachDoc.getName();
        	
        	 InputStream inputStream = null;
        	 
        	 try{
//        		 IOUtils.copy(inputStream, response.getOutputStream());
        		 
        		 ServletOutputStream outStream = response.getOutputStream();
        		 
        		 response.setContentLength(Integer.parseInt(attachFileSize));
        		 response.setContentType(attachFileType);
        		 response.setHeader("Content-disposition","attachment;filename=" +attachFileName);
        		 response.setHeader("Cache-Control", "max-age=600");
           		inputStream = new FileInputStream(filename);
              	byte[] buffer = new byte[Integer.parseInt(attachFileSize)];
              	int n = 0;
              	while ((n = inputStream.read(buffer)) != -1) {
              		outStream.write(buffer, 0, n);
              	}
              	inputStream.close();
              	outStream.flush();
              	strRet = "filefound"; 
        		 
        	 }catch(Exception ex){
  //      		 ex.printStackTrace();
        		 logger.error("",ex);
        		 System.err.println("Error writing file to output stream. !!!!"); 
        	 }
        }else{ 
        	return "FILE_NOT_FOUND";
        }
		
		return strRet;
		
	}



}
