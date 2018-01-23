var express = require('express');
var app = express();

app.get('/notify', function(req, res) {
  console.log('user notified');
  res.json({msg:'user notified'});
});

app.listen(process.env.port || 4000);
