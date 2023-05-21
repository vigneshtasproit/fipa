package com.fipa.service;

import java.util.List;
import java.util.Vector;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import com.fipa.db.ClientDB;
import com.fipa.db.MasterDB;
import com.fipa.dbinterface.DBInterface;
import com.fipa.dbinterface.DBInterfaceImpl;
import com.fipa.dto.MasterCpflifePayout;
import com.fipa.dto.MasterCpflifePlans;
import com.fipa.dto.MasterPropertykv;
import com.fipa.dto.MasterRetSchemeLimits;

public class MasterService {

	public void saveQuotes(Vector vectQuotesDetails, HttpServletRequest request) {
		// TODO Auto-generated method stub
		
		MasterDB cpfDB = new MasterDB(); 
		cpfDB.saveQuotes(vectQuotesDetails);
	}

	public List searchQuotes(DBInterfaceImpl dao) {
		// TODO Auto-generated method stub
		MasterDB db = new MasterDB();		 
		 return db.searchQuotes(dao);
	}
	
	public void insMasterKeys(MasterPropertykv mastPropkv) {
		// TODO Auto-generated method stub
		MasterDB mastDB = new MasterDB(); 
		mastDB.savemasterprop(mastPropkv);
	}
 
	public void delMasterKeys(MasterPropertykv mastPropkv) {
		// TODO Auto-generated method stub
		MasterDB mastDB = new MasterDB(); 
		mastDB.delMasterKeys(mastPropkv);
	}

	public List<MasterPropertykv> getFinGlsProp(){
		MasterDB mastDB = new MasterDB();
		return mastDB.getFinGlsProp();
	}
	public List<MasterCpflifePlans> getMastSdrsPlansList(){
		MasterDB mastDB = new MasterDB();
		return mastDB.getMastSdrsPlansList();
	}
	
	public List  getMastSdrsAmountList(){
		MasterDB mastDB = new MasterDB();
		return mastDB.getMastSdrsAmountList();
	}
	
	 public List propSearch(DBInterface dao,String  strBufQryParam){
		 MasterDB db = new MasterDB();		 
		 return db.propSearch(dao, strBufQryParam);
	 }



	public List navSearch(DBInterfaceImpl dao, String strFundCode,
			String strDateInvest) {
		// TODO Auto-generated method stub
		 MasterDB db = new MasterDB();		 
		 return db.navSearch(dao, strFundCode,strDateInvest);
		 
	}



	public List autoAlterSearch(DBInterfaceImpl dao, String strautoAlterId) {
		// TODO Auto-generated method stub
		 MasterDB db = new MasterDB();		 
		 return db.autoAlterSearch(dao,strautoAlterId);
		 
	}



	
}
