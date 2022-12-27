const express = require('express')
const session = require('express-session')
const app = express();

app.use(session({
    secret: '1234DSFs@adf1234!@#$asd',
    resave: false,
    saveUninitialized: true
  }));

app.get('/count', function(req, res){
if(req.session.count) {
    req.session.count++;
} else {
    req.session.count = 1;
}
res.send('count : '+req.session.count);
});

app.listen(3003, function(){
    console.log('Connected 3003 port!!!');
});