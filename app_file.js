const express = require('express');
const fs = require('fs')
var bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.locals.pretty = true; // jade로 작성한 html 줄바꿈
app.set('views', './views_file');
app.set('view engine', 'jade');
// app.get('/upload', function(req, res){
//     res.render('upload');
//   });
//   app.post('/upload', upload.single('userfile'), function(req, res){
//     res.send('Uploaded : '+req.file.filename);
//   });
app.get('/topic/new', function(req, res){
    fs.readdir('data', function(err, files){
      if(err){
        console.log(err);
        res.status(500).send('Internal Server Error');
      }
      res.render('new', {topics:files});
    });
  });
  app.get(['/topic', '/topic/:id'], function(req, res){
    fs.readdir('data', function(err, files){
      if(err){
        console.log(err);
        res.status(500).send('Internal Server Error');
      }
      var id = req.params.id;
      if(id){
        // id값이 있을 때
        fs.readFile('data/'+id, 'utf8', function(err, data){
          if(err){
            console.log(err);
            res.status(500).send('Internal Server Error');
          }
          res.render('view', {topics:files, title:id, description:data});
        })
      } else {
        // id 값이 없을 때
        res.render('view', {topics:files, title:'Welcome', description:'Hello, JavaScript for server.'});
      }
    })
  });
app.post('/topic', function(req,res){
    let title = req.body.title;
    let description = req.body.description
    fs.writeFile('data/'+title, description, function(err){
        if(err){
            console.log(err)
            res.status(500).send('Internal Server Error');
        }
        res.redirect('/topic/'+title);
    })
})
app.listen(3000, function(){
    console.log('connected, 3000 port!')
});


