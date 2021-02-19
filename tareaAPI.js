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

  const token = 'BQBtMz5K7Fk2khF9qIlx5b62_t7w6aPBARcpOj0ecmH43MuZDQdEi0fTzyEU_lDYvzaRZJVBRMFqMo3sq6CRLzPUahMq704JiTjw5mjWCUI-oYTGIP9opjAWwEP6X92HIloewj4jktmHEZN6MSVYRN-kFyGvW-2CL3-vUrg1x5B0aQNpsU1t6_sOxjVUGb7sOQQiQAhNgudP-EUfgSHb_i0tNvgcQRQBrxxee9I_98erfn9cIBnA8Htq2kCJ3X7vQr15Kcvvifva1N9WRBSjBpBx9X4qKaSv'
  axios.post(URL,{
    //data o body
    
      "name": "TAREA PRUEBA",
      "description": "this is a test",
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
app.post('/add/tracks',(req,res)=>{
  const URL = `https://api.spotify.com/v1/playlists/3VydidgQnzNPXY30odFkRK/tracks?uris=spotify%3Atrack%3A4xqrdfXkTW4T0RauPLv3WA`
  //playl_ID = `3VydidgQnzNPXY30odFkRK`
  //track = `uris=spotify:track:2wwzGBhDWfZveGjpxj5be7`
  //const URL = `https://api.spotify.com/v1/playlists/${req.params.playl_ID}/tracks${req.params.track}`
  
  //spotify%3Atrack%3A4xqrdfXkTW4T0RauPLv3WA
  console.log(req);
  aux = req;
  res.send(`Track added correctly`);

  const token = 'BQCy8Lc_reKQjDxAk0MsTfXEOWXswE8IPHxIUmndd9GR5j0IoK419AUnexJzwUHPxHJ6qzx2pvHtHke4oP1rFjA2LjdayQ3nJ-E881jy58L4eAGim_ZUpIY9tN0J6EfRl2JLTutsdGpaDX4dreTBRBYFW-iF4vEpU5no3Hj791VnWZyNOelOmui-YSf630meoVMuCIgsyyLEUGCY7pn8iqTFJumzcCp22ZemHhl0GHI6T6h3u-xpPWiKqEVQKMsfHU9-UXINVRVcxikfCin7Ti9sfrgB-oea'
  axios.post(URL,{
    //data o body
    //"uris" : ["spotify:track:2wwzGBhDWfZveGjpxj5be7","spotify:track:7lPN2DXiMsVn7XUKtOW1CS"]
    
  },{
    headers: {
      'Content-Type' : 'application/json',
      'Accept' : 'application/json',
      'Authorization' : `Bearer ${token}`
    }
  })
})

app.post()

//Listen Server
app.listen((666), () =>{
    console.log("Server running on port 666");
})