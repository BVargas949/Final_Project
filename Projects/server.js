  
var express = require('express');
const fetch = require('node-fetch');
const path = require('path');
var app = express();
const port = 8080;

app.set('view engine', 'pug');
app.set("views", path.join(__dirname,"views"));
app.use("/static", express.static(path.join(__dirname, "public")));




app.get('/', (req, res) => {  

    fetch('https://api.github.com/users/bvargas949')
    .then(res => res.json())
    .then(
      (json) => {
        console.log(json)
      res.render('index', { 
          data: info,
          page: json
        })
      })
    });

    app.get('/page', (req, res) => {
        res.render('page', 
        { 
          
        });
      });

      app.get('/pageT', (req, res) => {
        res.render('pageT', 
        { 
         
        });
      });

      app.get('/pageth', (req, res) => {
        res.render('pageth', 
        { 
          
        });
      });

      app.get('/pagef', (req, res) => {
        res.render('pagef', 
        { 
         
        });
      });

      var info = {
        "basics": {
          "name": "Bryan Vargas",
          "label": "Programmer",
          "picture": "",
          "email": "bvargas949@west-mec.org",
          "phone": "(480) 849-2025",
          "summary": "help",
          "location": {
            "address": "16004 North Nash ST.",
            "postalCode": "85378",
            "city": "surprise",
            "countryCode": "US",
            "region": "Arizona"
          }
        }
        };
    const server = app.listen(port, () =>{
        console.log(`Express running - PORT ${server.address().port}`)
      })
