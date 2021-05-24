var express =require('express');
var bodyParser = require('body-parser');
var fs = require('fs');

var mysql = require('mysql');
 var conn = mysql.createConnection({ 
     host:'localhost', 
     user:'root',
      password:'1234', 
      port:3306, 
      database:'testdb',
       dateStrings: 'date'  // 추가하는 내용 
    });
    conn.connect();
var app = express();
app.locals.pretty = true;
app.use(bodyParser.urlencoded({extended:false}));

app.set('views', './views_mysql');
app.set('view engine', 'jade');


app.get(['/topic/:id/edit'], function(req, res){

  var sql  = 'SELECT id,title FROM testdb.td_board';
  conn.query(sql , function(err, topics, fields) {
    var id = req.params,id;
    if(id){
        var sql ='SELECT * FROM testdb.td_board WHERE id=?';
        conn.query(sql, [id], function(err, topic, fields) {
            if(err){
                res.status(500).send('Internal Server Error');
                console.log(err);
            }else {
                res.render('view',{topics:topics, topic:topic[0]});
            }
        });
    }else {
        res.render('view',{topics:topics});
    }
    });
});
 app.post('/topic/add', function(req, res){
    var title = req.body.title;
    var contents = req.body.contents;
    var writer = req.body.writer;
    var sql = 'INSERT INTO testdb.td_board(idx, title, contents, writer) VALUES(?,?,?,?)';
    conn.query(sql, [idx, title, contents, writer] , function(err, result, fields){
        if(err){
            console.log(err);
            res.status(500).send('Internal Server Error');
        }else{
            res.send('/topic/'+result.insertId);
        }  
    });
})
app.get('/topic/add', function( req, res) {
    res.render('add');
    var sql  = 'SELECT id,title FROM testdb.td_board';
    conn.query(sql , function(err, topics, fields) {
        if(err){
            res.status(500).send('Internal Server Error');
            console.log(err);
        }
        res.render('add', {topics:topics});
    });
});


app.listen(3000, function() {
    console.log('Connected 3000');
})