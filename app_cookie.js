const cookieParser = require('cookie-parser');
const express = require('express')
const app = express();
app.use(cookieParser());

app.get('/count', function(req, res){
//   if(req.cookies.count){
//     var count = parseInt(req.cookies.count);
//   } else {
//     var count = 0;
//   }
  let count = req.cookies.count;
  count ? count = parseInt(req.cookies.count) : count = 0 ;
  count++;
  res.cookie('count', count);
  res.send('count : ' + count);
});
app.listen(3003, function(){
  console.log('Connected 3003 port!!!');
});