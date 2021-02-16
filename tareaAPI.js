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
  res.send("<h1>This is an API for Age of Empires</h1>");
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

//Get a specific unit based on structure spawn
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

//Get a list of user playlists
app.get('/playlists/:user',(req,res)=>{
    const URL = `https://api.spotify.com/v1/users/${req.params.user}/playlists`
    
const token = 'BQAQKRlEqJEwEiTp5vULMndwroWfNo-4EzCcUOGb5y0EJatCj5qxOCL9eqV7H4iVB1HpNKab33kn2XkQ7NohaOwZiFCT49IEeOrd_fucS26lCx7qQXAIUkZ4TiZdq5WBPn53ERebCNT-tlVXox6kb7M4L43UXq1oIyxAnwKEzLbr0XBbFfS7wJn3ut491lgBoVWZISkdlZnKzX_8-h2EINpQG0svvTdhtPmqNnOt1ZI8TDWcJamKbvQZAozl72RQrkOGbv12jGY5FKGP0zlFLLOq3I4'
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


//Listen Server
app.listen((666), () =>{
    console.log("Server running on port 666");
})