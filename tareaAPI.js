//Importing packages
const express = require('express');
const morgan = require('morgan');
const axios = require('axios');
const { response } = require('express');
const fetch = require('fetch');


//Using packages
const app = express();

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
    
const token = 'BQCNjEQIR9pTtlV5Cq7kdiCmEExn8FVgYDmkazHzZ1WB8zycLPhEjwVJ_gpAgQ7sjoHV71ahfC4dpg_0gE7uAwykOKD8RNfQyWqeN5HfPzfqBYXHDoBR7DbW5I1tGXv1moqmF0LS_jHL_IfS1tini8cLbq8FkOqDIkQf0-qhP9FMKFXKLH2qiAzaOG_bOkWUHvvogjTLOIXu1RTYPmFfWck5ExqY9a_-R9PhimUmnw_lSnJzT80TCqpogC5t1Kgj0h3PCRZ6J-FB2_7YT5pTzATGksc'
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

//Create a new playlist 
app.post('/create/playlist/:user',(req,res)=>{
  const URL = `https://api.spotify.com/v1/users/${req.params.user}/playlists`

  console.log(req);
  aux = req;
  res.send(`Playlist created`);

  const token = 'BQDrdhwd_urrTeOvt4KNPZHlpNuqZ-Z5Dx56Xd_mDCGBhkFROo3-byHB_nYs9U3uYwx5R_YQGqdeZj9NNZx2lJvCpqJkDobV1HTU2NhoQLrUB7o7OpegrjWWie7b8cB1LMxUTQLiZ-U8Jh-veBpezHjhUM79CPS5FLvTqAsTBZNqktHnpMgSR0LwJuLflm95rgyt48W8R48WQHo4IhbkWbUs8-ym3PsmYR6i5082iesOOPgjrBWR0Jmy4Hl9vI6016eiPMnAUT3taj5yZfjzENvz1DE'
  axios.post(URL,{
    //data
  },{
    headers: {
      'Content-Type' : 'application/json',
      'Accept' : 'application/json',
      'Authorization' : `Bearer ${token}`
    }
  })
})

//Listen Server
app.listen((666), () =>{
    console.log("Server running on port 666");
})