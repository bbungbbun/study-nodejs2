const express = require('express');
const app = express();
app.locals.pretty = true; // jade로 작성한 html 줄바꿈
app.set('views', './views_file');
app.set('view engine', 'jade');
app.get('/topic/new',function(req,res){
    res.render('new');
});
app.post('/topic', function(req,res){
    res.send('hi post');
})
app.listen(3000, function(){
    console.log('connected, 3000 port!')
});
