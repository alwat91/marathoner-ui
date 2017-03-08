var express = require('express');
var morgan = require('morgan');
var app = express();

app.use(express.static('public'));

app.use(morgan('dev'));

app.listen(process.env.PORT || 4000, function(){
  console.log("listening on port 4000");
});
