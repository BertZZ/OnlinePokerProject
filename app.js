const express = require('express');
const path = require('path');


const app = express();
const port = 3000;


app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/views/index.html'));
});

app.listen(port, function() {
  console.log('Server started on port '+ port)
});
