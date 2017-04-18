//'use strict';

const express = require('express');
const app     = express();
const port    =   process.env.PORT || 3000;

// ROUTES
// ==============================================

// sample route with a route the way we're used to seeing it
app.get('/sample', function(req, res) {
  res.send('this is a sample!');
});


app.get('/test', function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080')
  //
   res.sendFile(__dirname + '/data.json');
});

app.post('/save', function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');

  fs.readFile(req.files, function (err, data) {

    const newPath = __dirname + '/data.json';
    fs.writeFile(newPath, data, function (err) {
      res.send('saved');
      //res.redirect("back");
    });
  });
});


// we'll create our routes here

// START THE SERVER
// ==============================================
//app.listen(port);
console.log('Magic happens on port ' + port);


app.listen(port, function () {
  console.log('Listening...')
});



