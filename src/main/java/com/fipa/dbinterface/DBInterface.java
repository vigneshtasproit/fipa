package com.fipa.dbinterface;

import java.sql.ResultSet;
import java.util.List;
import java.util.Map;

import org.hibernate.Session;


public interface DBInterface {
	
	public List selectHQLByParams(String query,Object params);
	public List<?> selectQueryByFind(String query,String ... params);	
	public void saveObject(Object saveObj);
	public void updateObject(Object updateObj);
	public void deleteObject(Object deleteObj);
	public Object fetchMaxId(Object dtoObj,String strColumnName);
 
	public void insertTableObject(List insertObj,Object saveObj);
	public void updateTableObject(List updateObj,Object updObj) ;
	public void deleteTableObject(List deleteObj,Object delObj);
	public List selectQueryByJoin(String srchQuery, Map<String, Class> entityObj);
	public List searchByNativeSQLQuery(String srchQuery);
	public void executeNativeSQLQuery(String srchQuery);
	
	public void updateDbByNativeSQLQuery(String strQuery);
	public ResultSet downloadBFILE(String srchQuery);
	public void saveOrUpdateObject(Object daoClsObj);
	public Session getCurrHiberSession();
	public Long selectNextSequence(String strSeqName);
	public String createSeqIdVal(String seqObj);
	public void updateOrSaveTableObject(List updateObj,Object updObj) ;

}
