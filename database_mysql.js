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
    var sql ='SELECT * FROM testdb.tb_user';
    con.query(sql ,function (err, rows, fields) {
    if (err) {
        console.log(err);
    }else{
        console.log('The solution is:', rows);
        console.log('The solution is:', fields);
        // row[0].solution);
    }
});