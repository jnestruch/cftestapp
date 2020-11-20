const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Test app for cloud foundry!');
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('testapp listening on port ' + port);
});