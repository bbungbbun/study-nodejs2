const express = require('express');
const app = express();
app.use(express.static('public'));
app.get('/',function(req, res){
    res.send('hello home page');
});
app.get('/route',function(req, res){
    res.send('hello router, <img src="/cat.jpg">');
});
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