const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/html/test.html'));
});

app.get('/json', (req, res) => {
  res.json({
    result: 'My name is YOUR_NAME!'
  });
});

app.get('/text', (req, res) => {
  res.send('{"result": "My name is YOUR_NAME!"}');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
