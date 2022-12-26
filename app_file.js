const express = require('express');
const fs = require('fs')
var bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.locals.pretty = true; // jade로 작성한 html 줄바꿈
app.set('views', './views_file');
app.set('view engine', 'jade');
app.get('/topic/new',function(req,res){
    res.render('new');
});
app.post('/topic', function(req,res){
    let title = req.body.title;
    let description = req.body.description
    fs.writeFile('data/'+title, description, function(err){
        if(err){
            console.log(err)
            res.status(500).send('Internal Server Error');
        }
        res.send('Success!');
    })
})
app.listen(3000, function(){
    console.log('connected, 3000 port!')
});
