  
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
          planet: json
        })
      })
    });

    // var planet = {
    //   "name": "Yavin IV",
    //   "rotation_period": "24",
    //   "orbital_period": "4818",
    //   "diameter": "10200",
    //   "climate": "temperate, tropical",
    //   "gravity": "1 standard",
    //   "terrain": "jungle, rainforests",
    //   "surface_water": "8",
    //   "population": "1000",
    //   "residents": [],
    //   "films": [
    //     "https://swapi.co/api/films/1/"
    //   ],
    //   "created": "2014-12-10T11:37:19.144000Z",
    //   "edited": "2014-12-20T20:58:18.421000Z",
    //   "url": "https://swapi.co/api/planets/3/"
    // }
    // app.get('/page0', (req, res) => {
    //     res.render('page0', 
    //     { 
    //       data: info
    //     });
    //   });


    const server = app.listen(port, () =>{
        console.log(`Express running - PORT ${server.address().port}`)
      })
