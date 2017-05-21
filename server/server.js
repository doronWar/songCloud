//'use strict';
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');

const express = require('express');
const path       = require('path');
const logger     = require('morgan');

const app     = express();
const port    =   process.env.PORT || 3000;


app.use(cors({
  origin: (origin, callback) => {
    callback(null, true)
  },
  credentials: true
}));

app.use(bodyParser.json());


// app.get('/sample', function(req, res) {
//   res.send('this is a sample!');
// });



app.post('/login', function(req, res) {

  if(req.body.email==='example@gmail.com' && req.body.password==='1234'){
    res.send('true');
  }

  res.send('false');
});


app.get('/load', function(req, res) {
   // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080')
  //
  const data = fs.readFileSync(__dirname + '/data.json');
  res.send(data);
   // res.sendFile(__dirname + '/data.json');
});



app.post('/newName', function(req, res) {
  const data = fs.readFileSync(__dirname + '/data.json');

  const playLists= JSON.parse(data);
  for (let onePlaylist of playLists) {
    if(onePlaylist.id===req.body.id){
      onePlaylist.title=req.body.title;
    }
  }

  fs.writeFileSync(__dirname + '/data.json', JSON.stringify(playLists));
  res.send('play list name changed');
});



app.post('/deleteList', function(req, res) {
  const data = fs.readFileSync(__dirname + '/data.json');

  const playLists= JSON.parse(data);
  let indexOfPlaylist;
  playLists.forEach((oneList, index)=>{
    if(oneList.id===req.body.id){
      indexOfPlaylist= index;
      playLists.splice(indexOfPlaylist, 1);
    }
  });



  fs.writeFileSync(__dirname + '/data.json', JSON.stringify(playLists));
  res.send('play list deleted');
});



app.post('/save', function(req, res) {

   // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
  const data = fs.readFileSync(__dirname + '/data.json');

  const playLists= JSON.parse(data);

  playLists.push(req.body);
  fs.writeFileSync(__dirname + '/data.json', JSON.stringify(playLists));
  res.send('saved');
});



app.post('/addSong', function(req, res) {

  // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
  const data = fs.readFileSync(__dirname + '/data.json');

  const playLists= JSON.parse(data);

  for (let onePlaylist of playLists) {
    if(onePlaylist.id===req.body.id){
      onePlaylist.songs.push(req.body.songs[0]);
    }
  }

  fs.writeFileSync(__dirname + '/data.json', JSON.stringify(playLists));
  res.send('song added');
});


app.post('/removeSong', function(req, res) {

  // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
  const data = fs.readFileSync(__dirname + '/data.json');

  const playLists= JSON.parse(data);

  for (let onePlaylist of playLists) {
    if(onePlaylist.id===req.body.id){

      onePlaylist.songs.forEach((song, index)=>{
        if(song.id===req.body.songs[0].id){
          const indexOfPlaylist= index;

          onePlaylist.songs.splice(indexOfPlaylist, 1);

        }
      });
  }
  }

  fs.writeFileSync(__dirname + '/data.json', JSON.stringify(playLists));
  res.send('song removed');
});


// we'll create our routes here

// START THE SERVER
// ==============================================
//app.listen(port);
console.log('Magic happens on port ' + port);

app.use(express.static(path.resolve(__dirname, '../dist')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../dist/index.html'));
});

app.listen(port, function () {
  console.log('Listening...')
});



