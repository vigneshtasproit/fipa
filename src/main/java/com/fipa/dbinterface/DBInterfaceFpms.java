package com.fipa.dbinterface;


import java.util.List;

import org.hibernate.Session;


public interface DBInterfaceFpms {
	
	public List searchByNativeSQLQuery(String srchQuery);
	public void executeNativeSQLQuery(String srchQuery);	
	public void updateDbByNativeSQLQuery(String strQuery);
	
	
	
	
	public Session getCurrHiberSession();
	public String createSeqIdVal(String seqObj);
	

}
