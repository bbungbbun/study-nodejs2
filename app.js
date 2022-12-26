const express = require('express');
var bodyParser = require('body-parser');
const app = express();
// 템플릿 엔진 jade
// app.set('view engine','jade');
// app.set('views','./views');
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/',function(req, res){
    res.send('hello home page');
});

app.get('/form', function(req, res){
    res.render('form');
});

//get 방식
// app.get('/form_receiver', function(req, res){
//     var title = req.query.title; // query
//     var description = req.query.description;
//     res.send(title+','+description);
//   });

app.post('/form_receiver', function(req, res){
var title = req.body.title; // body
// 그냥 사용하면 undefined가 뜸
// body-parser 다운로드 후 사용
var description = req.body.description;
res.send(title+','+description);
});

app.get('/route',function(req, res){
    res.send('hello router, <img src="/cat.jpg">');
});

// query string을 이용해서 정보를 전달
app.get('/topic', function(req, res){
    var topics = [
        'Javascript is....',
        'Nodejs is...',
        'Express is...'
    ];
    var output = `
    <a href="/topic?id=0">JavaScript</a><br>
    <a href="/topic?id=1">Nodejs</a><br>
    <a href="/topic?id=2">Express</a><br><br>
    ${topics[req.query.id]}
    `
    res.send(output);
})

// 시멘틱 url 방식
app.get('/topic/:id', function(req, res){
var topics = [
    'Javascript is....',
    'Nodejs is...',
    'Express is...'
];
var output = `
<a href="/topic/0">JavaScript</a><br>
<a href="/topic/1">Nodejs</a><br>
<a href="/topic/2">Express</a><br><br>
${topics[req.params.id]}
`
res.send(output);
})
app.get('/topic/:id/:mode', function(req, res){
res.send(req.params.id+','+req.params.mode)
})
// 동적인 웹 구현
app.get('/dynamic',function(req, res){
    const lis = ``
    for(let i=0; i<5; i++){
        lis = lis + '<li>coding</li>';
    }
    let time = Date();
    const output = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    hello Dynamic!
    <ul>
    ${lis}
    </ul>
    ${time}
</body>
</html>
    `
    res.send(output);
});
app.get('/login',function(req, res){
    res.send('login please');
});
app.listen(3000, function(){
    console.log('connected 3000 port!');
});