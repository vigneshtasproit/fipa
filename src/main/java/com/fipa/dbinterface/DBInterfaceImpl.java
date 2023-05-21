package com.fipa.dbinterface;

import java.math.BigInteger;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.apache.commons.dbcp.BasicDataSource;
import org.hibernate.Criteria;
import org.hibernate.FlushMode;
import org.hibernate.HibernateException;
import org.hibernate.Query;
import org.hibernate.SQLQuery;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.criterion.MatchMode;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;
import org.hibernate.type.StandardBasicTypes;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.orm.hibernate5.support.HibernateDaoSupport;

import com.fipa.util.ApplicationContextUtils;


public class DBInterfaceImpl extends HibernateDaoSupport implements DBInterface  {
	
	
	
	final Logger log = LoggerFactory.getLogger(DBInterfaceImpl.class);
	
	@Autowired
    private SessionFactory sessionFactory;

	
	/**
	 * Default Constructor
	 */
	public DBInterfaceImpl(){
	}	 	 
	
	public List selectHQLByParams(String query, Object params) {
		
		List srchList  = new ArrayList();
		Session session;
		try {
		    session = sessionFactory.getCurrentSession();
		} catch (HibernateException e) {
		    session = sessionFactory.openSession();
		}
		
//		Session session = getHibernateTemplate().getSessionFactory().openSession();
		Query queryObj = session.createQuery(query);		
		srchList=  queryObj.setProperties(params).list();		
		
		session.clear();
		session.flush();
		session.close();
		
		return srchList;
	}
	
	public Long selectNextSequence(String strSeqName) {
		
		long nextseq = 0;
//		Session session = getHibernateTemplate().getSessionFactory().openSession();
		Session session;
		try {
		    session = sessionFactory.getCurrentSession();
		} catch (HibernateException e) {
		    session = sessionFactory.openSession();
		}
		
		 Query query = 
			        session.createSQLQuery("select "+strSeqName+".nextval as num from dual")
			            .addScalar("num", StandardBasicTypes.BIG_INTEGER);
		 
		 nextseq = ((BigInteger) query.uniqueResult()).longValue();
		 
		 session.clear();
			session.flush();
			session.close();
		

		 return nextseq;

	}
	public Session getCurrHiberSession() {
		Session session = getHibernateTemplate().getSessionFactory().openSession();
		return session;
	}
	
	public List<?> selectQueryByFind(String query, String ... params) {
		
		List<?> srchList  = new ArrayList();	
		
		Session session;
		try {
		    session = sessionFactory.getCurrentSession();
		} catch (HibernateException e) {
		    session = sessionFactory.openSession();
		} 
			
			if(params != null)	 {
				
				int totalParams = params.length;
				
				
				switch(totalParams){
				
				case 1:
//					srchList = getHibernateTemplate().find(query, params[0]);
					srchList = session.createQuery(query).setParameter(0,  params[0]).list();
			
					break;
				case 2:
//					srchList = getHibernateTemplate().find(query, params[0],params[1]);
					srchList =  session.createQuery(query)
					.setParameter(0,  params[0])
					.setParameter(1, params[1])
					.list();
					
					break;
				
				}				
			}
			else{ 
//				srchList = getHibernateTemplate().find(query);
				srchList =   session.createQuery(query).list();
			}
			
			
			session.clear();
			session.flush();
			session.close();

		return srchList; 
	}


	public void saveObject(Object saveObj) { 
		
//		Session session = getHibernateTemplate().getSessionFactory().openSession();
		Session session;
		try {
		    session = sessionFactory.getCurrentSession();
		} catch (HibernateException e) {
		    session = sessionFactory.openSession();
		}
		Transaction tx= session.beginTransaction();
		session.save(saveObj);
		tx.commit();
					
		session.clear();
		session.flush();
		session.close();
	
		
	}
	
	public void updateObject(Object updObj) {
		
//		Session session = getHibernateTemplate().getSessionFactory().openSession();
		Session session;
		try {
		    session = sessionFactory.getCurrentSession();
		} catch (HibernateException e) {
		    session = sessionFactory.openSession();
		}
		Transaction tx= session.beginTransaction();
		session.update(updObj);
			tx.commit();
			
			session.clear();
			session.flush();
			session.close();
 
	}
 
	public void deleteObject(Object delObj) throws DataAccessException { 
//		Session session = getHibernateTemplate().getSessionFactory().openSession();
		Session session;
		try {
		    session = sessionFactory.getCurrentSession();
		} catch (HibernateException e) {
		    session = sessionFactory.openSession();
		}
		Transaction tx=session.beginTransaction();
		
		
			session.delete(delObj);
			tx.commit();
			session.clear();
			session.flush();
			session.close();
		
	} 
	public Object fetchMaxId(Object dtoObj,String strColumnName) {
		
//		Session session = getHibernateTemplate().getSessionFactory().openSession();
		Session session;
		try {
		    session = sessionFactory.getCurrentSession();
		} catch (HibernateException e) {
		    session = sessionFactory.openSession();
		}
		Object strMaxId = "";
		try {
			Criteria criteria = session.createCriteria(dtoObj.getClass())
					.add(Restrictions.not(Restrictions.like(strColumnName, "AS_%")))
					.setProjection(Projections.max(strColumnName));
			 
			
			strMaxId = criteria.uniqueResult();
			
			
			if(strMaxId == null)
				strMaxId = "0";
			 
			
		} catch (DataAccessException ee) { 
			
			throw new HibernateException(ee);
		}	
		
		session.clear();
		session.flush();
		session.close();
		
		return strMaxId;
	}
	public String createSeqIdVal(String seqObj) {
//		fplog.info(" Inside createSeqIdVal Method ");
//		Session session = null;
		Session session;
		try {
		    session = sessionFactory.getCurrentSession();
		} catch (HibernateException e) {
		    session = sessionFactory.openSession();
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
	public void insertTableObject(List insObj, Object daoClsObj) throws DataAccessException {

		
//		Session session = getHibernateTemplate().getSessionFactory().openSession();
		Session session;
		try {
		    session = sessionFactory.getCurrentSession();
		} catch (HibernateException e) {
		    session = sessionFactory.openSession();
		}
		Transaction tx = session.beginTransaction();
		
		try {
			int insSize = insObj.size();
			if (insSize > 0) {
			
				Iterator itIns = insObj.iterator();
				while (itIns.hasNext()) {
					daoClsObj = itIns.next();
					session.save(daoClsObj);
				}
			}
			tx.commit();
		} catch (DataAccessException he) {			
			
			he.printStackTrace();
			if (tx != null)
				tx.rollback();			
			throw new HibernateException("Insertion / Updation Failure.");
		} finally {
		
			session.clear();
			session.flush();
			session.close();
		}
	}
	
	public void updateTableObject(List updObj, Object daoClsObj) throws DataAccessException {
		 
//		Session session = getHibernateTemplate().getSessionFactory()
//				.openSession();
		Session session;
		try {
		    session = sessionFactory.getCurrentSession();
		} catch (HibernateException e) {
		    session = sessionFactory.openSession();
		}
			
		Transaction tx = session.beginTransaction();
		try {
			int updSize = updObj.size();
			if (updSize > 0) {
				
				Iterator itUpd = updObj.iterator();
				while (itUpd.hasNext()) {
					daoClsObj = itUpd.next();
					session.update(daoClsObj);			
					
				}
			}
			tx.commit();
		} catch (Exception he) {
			 
			he.printStackTrace();
			if (tx != null)
				tx.rollback(); 
		} finally {
			session.clear();
			session.flush();
			session.close();
			 
		}
	}

	public void deleteTableObject(List delObj, Object daoClsObj)throws DataAccessException {
		
//		Session session = getHibernateTemplate().getSessionFactory()
//				.openSession();
		Session session;
		try {
		    session = sessionFactory.getCurrentSession();
		} catch (HibernateException e) {
		    session = sessionFactory.openSession();
		}
		
		Transaction tx = session.beginTransaction();
		try {
			int delSize = delObj.size();
			if (delSize > 0) {
				Iterator itDel = delObj.iterator();
				while (itDel.hasNext()) {
					daoClsObj = itDel.next();
					session.delete(daoClsObj);
				}
			}
			tx.commit();
		} catch (Exception he) {
		 	if (tx != null)
				tx.rollback();
			throw new HibernateException("Deletion  Failure.");
		} finally {
			
			session.clear();
			session.flush();
			session.close();			
			
		}
	}
	
	
	public List selectQueryByJoin(String srchQuery,Map<String, Class> entityObj) {
		
//		SessionFactory sessionFactory = getHibernateTemplate().getSessionFactory();		
//		Session session = sessionFactory.openSession();
		Session session;
		try {
		    session = sessionFactory.getCurrentSession();
		} catch (HibernateException e) {
		    session = sessionFactory.openSession();
		}
		
		List retList = new ArrayList();
		
		try{
			
			SQLQuery query = session.createSQLQuery(srchQuery);
			
			for (Map.Entry entry : entityObj.entrySet()) {				
				String key = (String) entry.getKey();
				query.addEntity(key,entityObj.get(key)); 
			}
						
			retList=(List)query.list(); 
			
		}finally{
			session.clear();
			session.flush();
			session.close();
		}
		 
		return retList;
	}
	
	
	
	public void updateDbByNativeSQLQuery(String updQry){
		
		 
		Session session;
		try {
		    session = sessionFactory.getCurrentSession();
		} catch (HibernateException e) {
		    session = sessionFactory.openSession();
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
	
	@SuppressWarnings("deprecation")
	public ResultSet downloadBFILE(String srchQuery) {
		 
		Session session = null;
		ResultSet result = null;
		BasicDataSource dm = null;
		
		try {
			ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
			dm =(BasicDataSource)appCtx.getBean("dataSource");
			
			Class.forName("oracle.jdbc.driver.OracleDriver");
			Connection conn =  DriverManager.getConnection(dm.getUrl(),dm.getUsername(),dm.getPassword());	
			Statement stmt = conn.createStatement();
			result = stmt.executeQuery(srchQuery);
			
		} catch (Exception e) { 
			e.printStackTrace();
		} finally {
			 
		}
		return result;
	}
	
	
	
	/** No Parameter Search Method with Native SQL Query */
	public List searchByNativeSQLQuery(String srchQuery) {
		 
//		log.info(srchQuery);
		
		List clntSrchLst = new ArrayList();
//		Session session = null;
		Session session;
		try {
		    session = sessionFactory.getCurrentSession();
		} catch (HibernateException e) {
		    session = sessionFactory.openSession();
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
		    session = sessionFactory.getCurrentSession();
		} catch (HibernateException e) {
		    session = sessionFactory.openSession();
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
	
	
	
public void saveOrUpdateObject(Object daoClsObj) throws DataAccessException {

		
//		Session session = getHibernateTemplate().getSessionFactory().openSession();
	Session session;
	try {
	    session = sessionFactory.getCurrentSession();
	} catch (HibernateException e) {
	    session = sessionFactory.openSession();
	}
		Transaction tx = session.beginTransaction();
		
		try { 
					session.saveOrUpdate(daoClsObj);
 
			tx.commit();
		} catch (DataAccessException he) {			
			
			he.printStackTrace();
			if (tx != null)
				tx.rollback();			
			throw new HibernateException("Insertion / Updation Failure.");
		} finally {
		
			session.clear();
			session.flush();
			session.close();
		}
	}


	public void updateOrSaveTableObject(List updObj, Object daoClsObj) throws DataAccessException {
		 
//		Session session = getHibernateTemplate().getSessionFactory()
//				.openSession();
		Session session;
		try {
		    session = sessionFactory.getCurrentSession();
		} catch (HibernateException e) {
		    session = sessionFactory.openSession();
		}
			
		Transaction tx = session.beginTransaction();
		try {
			int updSize = updObj.size();
			if (updSize > 0) {
				
				Iterator itUpd = updObj.iterator();
				while (itUpd.hasNext()) {
					daoClsObj = itUpd.next();
					session.saveOrUpdate(daoClsObj);			
					
				}
			}
			tx.commit();
		} catch (Exception he) {
			 
			he.printStackTrace();
			if (tx != null)
				tx.rollback(); 
		} finally {
			session.clear();
			session.flush();
			session.close();
			 
		}
	}

	

}
