const mysql = require('mysql');
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'student'
})


let student = {}

student.all = ()=>{
  return new Promise((resolve,reject)=>{
    pool.query('SELECT * FROM STUDENT',(err,results)=>{
        if(err){
            return reject(err)
        } 
            return resolve(results)
    }) 
  })
}

student.one = (id)=>{
    return new Promise((resolve,reject)=>{
      pool.query('SELECT * FROM STUDENT WHERE id = ?',[id],(err,results)=>{
          if(err){
              return reject(err)
          } 
             return resolve(results[0])
      })
    })
}

student.add = (data)=>{
    return new Promise((resolve,reject)=>{
      pool.query('INSERT INTO STUDENT SET ?',[data],(err,results)=>{
          if(err){
              return reject(err)
          } 
             return resolve(results)
      })
    })
}

student.delete = (id)=>{
    return new Promise((resolve,reject)=>{
      pool.query('DELETE FROM STUDENT WHERE id = ?',[id],(err,results)=>{
          if(err){
              return reject(err)
          } 
             return resolve(results)
      })
    })
}




module.exports = student