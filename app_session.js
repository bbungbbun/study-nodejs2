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

app.get('/auth/login', function(req, res){
    var output = `
    <h1>Login</h1>
    <form action="/auth/login" method="post">
      <p>
        <input type="text" name="username" placeholder="username">
      </p>
      <p>
        <input type="password" name="password" placeholder="password">
      </p>
      <p>
        <input type="submit">
      </p>
    </form>
    `;
    res.send(output);
  });
  
app.listen(3003, function(){
    console.log('Connected 3003 port!!!');
});