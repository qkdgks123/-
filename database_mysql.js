var mysql = require('mysql');
 var con = mysql.createConnection({ 
     host:'localhost', 
     user:'root',
      password:'1234', 
      port:3306, 
      database:'testdb',
       dateStrings: 'date'  // 추가하는 내용 
    });
    con.connect();
//     var sql ='SELECT * FROM testdb.tb_user';
//     con.query(sql ,function (err, rows, fields) {
//     if (err) {
//         console.log(err);
//     }else{
//         for(var i=0; i<rows.length; i++) {
//             console.log(rows[i].user_id);
//         }
//     }
//  });
// var sql = 'INSERT INTO testdb.tb_user(user_id,user_name,password, use_yn) VALUES(?, ?, ?, ?)';
// var params = ['guest5','사용자5','guest5','Y'];
// con.query(sql,params, function (err, rows, 
//     fields){
//     if(err) {
//         console.log(err);
//     }else {
//         console.log(rows.insertId);
//     }
// });
// var sql = 'UPDATE testdb.tb_user SET user_id=?,user_name=?,password=? ,use_yn=?';
// var params = ['guest5','사용자5','guest5','Y'];
// con.query(sql,params, function (err, rows, 
//     fields){
//     if(err) {
//         console.log(err);
//     }else {
//         console.log(rows);
//     }
// });

// var sql = 'DELETE FROM testdb.tb_user WHERE user_id =?';
// var params = [guest3];
// con.query(sql,params, function (err, rows, 
//     fields){
//     if(err) {
//         console.log(err);
//     }else {
//         console.log(rows);
//     }
// });
  con.end();