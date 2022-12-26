const express = require('express');
const app = express();
app.use(express.static('public'));
app.get('/',function(req, res){
    res.send('hello home page');
});
app.get('/route',function(req, res){
    res.send('hello router, <img src="/cat.jpg">');
});
app.get('/login',function(req, res){
    res.send('login please');
});
app.listen(3000, function(){
    console.log('connected 3000 port!');
});