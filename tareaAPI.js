//Importing packages
const express = require('express');
const morgan = require('morgan');
const axios = require('axios');
const { response } = require('express');
const fetch = require('fetch');


//Using packages
const app = express();

//Set PORT for Heroku
let port = process.env.PORT || 8080

//Middleware to read json objects
app.use(express.json());
app.use(morgan('dev'));


app.get('/', (req, res) => {
  res.send("<h1>This is an API for Age of Empires and Spotify</h1>");
})


//Using GET and axios on the Age of Empires API
// GET examples

// Get a list of all the civilizations
app.get('/civi',(req,res)=>{
    const URL = `https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations`
    axios.get(URL)
      .then(function(response){
        console.log(response.data)
        console.log(req)
        res.send(response.data)
      })
      .catch(function(error){;
      res.send(error);
    });
});

//Get a certain civilization based on ID
app.get('/whatciv/:id',(req,res)=>{
  const URL = `https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${req.params.id}`
  axios.get(URL)
    .then(function(response){
      console.log(response.data)
      console.log(req)
      res.send(response.data)
    })
    .catch(function(error){;
    res.send(error);
  });
});

//Get a list of the existing units
app.get('/units',(req,res)=>{
  const URL = `https://age-of-empires-2-api.herokuapp.com/api/v1/units`
  axios.get(URL)
    .then(function(response){
      console.log(response.data)
      console.log(req)
      res.send(response.data)
    })
    .catch(function(error){;
    res.send(error);
  });
});

//Get a specific unit based on ID
app.get('/whatunit/:id',(req,res)=>{
  const URL = `https://age-of-empires-2-api.herokuapp.com/api/v1/unit/${req.params.id}`
  axios.get(URL)
    .then(function(response){
      console.log(response.data)
      console.log(req)
      res.send(response.data)
    })
    .catch(function(error){;
    res.send(error);
  });
});

//Get a list of the existing technologies
app.get('/tech',(req,res)=>{
  const URL = `https://age-of-empires-2-api.herokuapp.com/api/v1/technologies`
  axios.get(URL)
    .then(function(response){
      console.log(response.data)
      console.log(req)
      res.send(response.data)
    })
    .catch(function(error){;
    res.send(error);
  });
});

//Get a list of user's playlists
app.get('/playlists/:user',(req,res)=>{
    const URL = `https://api.spotify.com/v1/users/${req.params.user}/playlists`
    
//const token = 'BQCLRfMWcpwHVsJfynyE6IyL4l3wF0xPGdkP5ELk0DQXk-or1rDGeySQxmPmMBRTvX8UlIN649u-MOKMW9wpXPh1O6hdYywdjhSTim2v-ISMC12hx5K4rfIFVtltq7D278csOQQM1fIK49aonO9oQ61qf9kxZUngeb9hDgj-652yHDVIIyA6VI_69cPWOY879-4VG0Nc8WAon7GRQrX1C5n5RSckDzYd0DDuelABro6rHqtX9y9ltT1NcN5nkfIAYCk6VhZfPa2ie11VVd5DRk9VA6cV5jmB'
axios.get(URL,{
    headers:{
      'Authorization':`Bearer ${token}`
    }
})
.then((response)=>{
  console.log(res.data)
  res.send(response.data)
})
.catch((error)=>{
  console.error(error)
})
})

//Using POST and axios for the Spotify API
//POST examples
const token = 'BQCLRfMWcpwHVsJfynyE6IyL4l3wF0xPGdkP5ELk0DQXk-or1rDGeySQxmPmMBRTvX8UlIN649u-MOKMW9wpXPh1O6hdYywdjhSTim2v-ISMC12hx5K4rfIFVtltq7D278csOQQM1fIK49aonO9oQ61qf9kxZUngeb9hDgj-652yHDVIIyA6VI_69cPWOY879-4VG0Nc8WAon7GRQrX1C5n5RSckDzYd0DDuelABro6rHqtX9y9ltT1NcN5nkfIAYCk6VhZfPa2ie11VVd5DRk9VA6cV5jmB'
//Create a new playlist 
app.post('/create/playlist/:user',(req,res)=>{
  const URL = `https://api.spotify.com/v1/users/${req.params.user}/playlists`

  console.log(req);
  aux = req;
  res.send(`Playlist created`);

  //const token = 'BQBtMz5K7Fk2khF9qIlx5b62_t7w6aPBARcpOj0ecmH43MuZDQdEi0fTzyEU_lDYvzaRZJVBRMFqMo3sq6CRLzPUahMq704JiTjw5mjWCUI-oYTGIP9opjAWwEP6X92HIloewj4jktmHEZN6MSVYRN-kFyGvW-2CL3-vUrg1x5B0aQNpsU1t6_sOxjVUGb7sOQQiQAhNgudP-EUfgSHb_i0tNvgcQRQBrxxee9I_98erfn9cIBnA8Htq2kCJ3X7vQr15Kcvvifva1N9WRBSjBpBx9X4qKaSv'
  axios.post(URL,{
    //data o body
    
      "name": "CLASE",
      "description": "HOLA",
      "public": true
  
  },{
    headers: {
      'Content-Type' : 'application/json',
      'Accept' : 'application/json',
      'Authorization' : `Bearer ${token}`
    }
  })
})

//Add a track to playlist 
app.post('/add/tracks/:playlist',(req,res)=>{

  //playlist = `3VydidgQnzNPXY30odFkRK`

  const URL = `https://api.spotify.com/v1/playlists/${req.params.playlist}/tracks`
  
  console.log(req);
  aux = req;
  res.send(`Track added correctly`);

  axios.post(URL,{
    //data o body
    "uris" : ["spotify:track:2wwzGBhDWfZveGjpxj5be7","spotify:track:7lPN2DXiMsVn7XUKtOW1CS","spotify:track:54bFM56PmE4YLRnqpW6Tha","spotify:track:6IwKcFdiRQZOWeYNhUiWIv"]
    
  },{
    headers: {
      'Content-Type' : 'application/json',
      'Accept' : 'application/json',
      'Authorization' : `Bearer ${token}`
    }
  })
})

//Skip playing song to next
app.post('/next',(req,res)=>{
  const URL = `https://api.spotify.com/v1/me/player/next`

  console.log(req);
  aux = req;
  res.send(`Next song`);

  axios.post(URL,{
    //data o body
  
  },{
    headers: {
      'Content-Type' : 'application/json',
      'Accept' : 'application/json',
      'Authorization' : `Bearer ${token}`
    }
  })
})

//Skip playing song to previous track
app.post('/prev',(req,res)=>{
  const URL = `https://api.spotify.com/v1/me/player/previous`

  console.log(req);
  aux = req;
  res.send(`Previous song`);

  axios.post(URL,{
    //data o body
  
  },{
    headers: {
      'Content-Type' : 'application/json',
      'Accept' : 'application/json',
      'Authorization' : `Bearer ${token}`
    }
  })
})

//Add items to queue
app.post('/queue/:uri',(req,res)=>{

  const URL = `https://api.spotify.com/v1/me/player/queue?uri=${req.params.uri}`
  //
  //spotify%3Atrack%3A4xqrdfXkTW4T0RauPLv3WA
  //spotify:track:6xn7erBVUmF5iuqOOUO6En
  //?uri=spotify:track:2wwzGBhDWfZveGjpxj5be7
  console.log(req);
  aux = req;
  res.send(`Track added to queue`);

  axios.post(URL,{
    
  },{
    headers: {
      'Content-Type' : 'application/json',
      'Accept' : 'application/json',
      'Authorization' : `Bearer ${token}`
    }
  })
})

//Listen Server
app.listen(port, () =>{
  console.log("Server running on port " + port);
})