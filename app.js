var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.set('view engine','jade');
app.set('views','/views');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));
app.get('/topic', function (req, res) {
    res.send(req.query.id);
});

app.get('/', function(req, res) {
    res.send('Hello home page');
});
app.get('/route', function(req, res) {
    res.send('Hello router <img src="/캡쳐.PNG">');
    
});

app.get('/login', function(req, res) {
    res.send('<h1>Login plese</h1>');
});

app.listen(3000, function() {
    console.log('Conneted 3000 port!');
});