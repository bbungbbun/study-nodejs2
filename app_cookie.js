const cookieParser = require('cookie-parser');
const express = require('express')
const app = express();
app.use(cookieParser());

// 카트리스트

var products = {
  1:{title:'The history of web 1'},
  2:{title:'The next web'}
};
app.get('/products', function(req, res){
  var output = '';
  for(var name in products) {
    output += `
      <li>
        <a href="/cart/${name}">${products[name].title}</a>
      </li>`
  }
  res.send(`<h1>Products</h1><ul>${output}</ul><a href="/cart">Cart</a>`);
});
app.get('/cart/:id', function(req, res){
  var id = req.params.id;
  if(req.cookies.cart) {
    var cart = req.cookies.cart;
  } else {
    var cart = {};
  }
  if(!cart[id]){
    cart[id] = 0;
  }
  cart[id] = parseInt(cart[id])+1;
  res.cookie('cart', cart);
  res.redirect('/cart');
});
app.get('/cart', function(req, res){
  var cart = req.cookies.cart;
  if(!cart) {
    res.rend('Empty!');
  } else {
    var output = '';
    for(var id in cart){
      output += `<li>${products[id].title} (${cart[id]})</li>`;
    }
  }
  res.send(`
    <h1>Cart</h1>
    <ul>${output}</ul>
    <a href="/products">Products List</a>
  `);
});


// 새로고침하면 카운트가 올라감
app.get('/count', function(req, res){
// 기존소스 코드
//   if(req.cookies.count){
//     var count = parseInt(req.cookies.count);
//   } else {
//     var count = 0;
//   } 
// 코드 수정본
  let count = req.cookies.count;
  count ? count = parseInt(req.cookies.count) : count = 0 ;
  count++;
  res.cookie('count', count);
  res.send('count : ' + count);
});
app.listen(3003, function(){
  console.log('Connected 3003 port!!!');
});