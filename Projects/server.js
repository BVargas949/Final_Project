  
var express = require('express');
const fetch = require('node-fetch');
const path = require('path');
var app = express();
const port = 8080;

app.set('view engine', 'pug');
app.set("views", path.join(__dirname,"views"));
app.use("/static", express.static(path.join(__dirname, "public")));




app.get('/', (req, res) => {  

    fetch('https://swapi.co/api/planets/3/')
    .then(res => res.json())
    .then(
      (json) => {
        console.log(json)
      res.render('index', { 
          data: planet,
          planet: json
        })
      })
    });

    var planet = {
      "name": "Naboo",
      "rotation_period": "26",
      "orbital_period": "312",
      "diameter": "12120",
      "climate": "temperate",
      "gravity": "1 standard",
      "terrain": "grassy hills, swamps, forests, mountains",
      "surface_water": "12",
      "population": "4500000000",
      "residents": [
        "https://swapi.co/api/people/3/",
        "https://swapi.co/api/people/21/",
        "https://swapi.co/api/people/36/",
        "https://swapi.co/api/people/37/",
        "https://swapi.co/api/people/38/",
        "https://swapi.co/api/people/39/",
        "https://swapi.co/api/people/42/",
        "https://swapi.co/api/people/60/",
        "https://swapi.co/api/people/61/",
        "https://swapi.co/api/people/66/",
        "https://swapi.co/api/people/35/"
      ],
      "films": [
        "https://swapi.co/api/films/5/",
        "https://swapi.co/api/films/4/",
        "https://swapi.co/api/films/6/",
        "https://swapi.co/api/films/3/"
      ],
      "created": "2014-12-10T11:52:31.066000Z",
      "edited": "2014-12-20T20:58:18.430000Z",
      "url": "https://swapi.co/api/planets/8/"
    }

    app.get('/page0', (req, res) => {
        res.render('page0', 
        { 
          data: info
        });
      });


    const server = app.listen(port, () =>{
        console.log(`Express running - PORT ${server.address().port}`)
      })
