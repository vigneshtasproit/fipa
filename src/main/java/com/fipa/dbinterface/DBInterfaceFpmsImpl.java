package com.fipa.dbinterface;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.HibernateException;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate5.support.HibernateDaoSupport;



public class DBInterfaceFpmsImpl extends HibernateDaoSupport implements DBInterfaceFpms  {
	
	
	
	final Logger log = LoggerFactory.getLogger(DBInterfaceFpmsImpl.class);
	
	@Autowired
    private SessionFactory sessionFactoryFpms;

	
	/**
	 * Default Constructor
	 */
	public DBInterfaceFpmsImpl(){
	}	 	 
	
	public Session getCurrHiberSession() {
		Session session = getHibernateTemplate().getSessionFactory().openSession();
		return session;
	}
	
		
	public void updateDbByNativeSQLQuery(String updQry){
		
		 
		Session session;
		try {
		    session = sessionFactoryFpms.getCurrentSession();
		} catch (HibernateException e) {
		    session = sessionFactoryFpms.openSession();
		}
		try {
			Query query = session.createSQLQuery(updQry);
			query.executeUpdate();
			
		} catch (Exception e) {			 
			throw new HibernateException("Insertion / Updation Failure.");
		} finally {			
			session.flush();
			session.clear();
			session.close();
		}
	}
		
	
	public List searchByNativeSQLQuery(String srchQuery) {
		 
//		log.info(srchQuery);
		
		List clntSrchLst = new ArrayList();
//		Session session = null;
		Session session;
		try {
		    session = sessionFactoryFpms.getCurrentSession();
		} catch (HibernateException e) {
		    session = sessionFactoryFpms.openSession();
		}
		
		try {
//			session = getHibernateTemplate().getSessionFactory()
//					.openSession();
			
			clntSrchLst = session.createSQLQuery(srchQuery).list();
		} catch (Exception e) {
			e.printStackTrace();		
		} finally {
			session.close();
		}
		return clntSrchLst;
	}
	
	public void executeNativeSQLQuery(String srchQuery) {
		 
//		log.info(srchQuery);
//		Session session = getHibernateTemplate().getSessionFactory().openSession();
		Session session;
		try {
		    session = sessionFactoryFpms.getCurrentSession();
		} catch (HibernateException e) {
		    session = sessionFactoryFpms.openSession();
		}

		
		try {
			
			Query query = session.createSQLQuery(srchQuery);
			query.executeUpdate();
		} catch (Exception e) {
			e.printStackTrace();		
		} finally {
			session.close();
		}
		 
	}
	public String createSeqIdVal(String seqObj) {
//		fplog.info(" Inside createSeqIdVal Method ");
//		Session session = null;
		Session session;
		try {
		    session = sessionFactoryFpms.getCurrentSession();
		} catch (HibernateException e) {
		    session = sessionFactoryFpms.openSession();
		}
		
		
		String maxId = "";
		List srchLst = new ArrayList();
		try {
//			session = getHibernateTemplate().getSessionFactory().openSession();
			Query query = session.createSQLQuery(seqObj);
			srchLst = query.list();  
			 
			if(srchLst.get(0) == null){
				maxId = "1";
			}else{
				maxId= String.valueOf(srchLst.get(0));
			}
				 
			
		} catch (Exception e) {
//			fplog.info("Error in createSeqIdVal Function"+e.getStackTrace());
		} finally {
			session.clear();
			session.flush();
			session.close();
		} 
		
		return maxId;
	}
	
	
	}
