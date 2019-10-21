const fetch = require('node-fetch');
const express = require('express')
const PORT = 8080;
const app = express();

const get_data = async (url, templateNameString, res) => {
    try {
        const response = await fetch(url);
        const json = await response.json();

        res.render(templateNameString, {
            people: json.data
        });
        // End expressJS code

        console.timeEnd("Request time");
    } catch (error) {
        console.log(error);
    }
};

app.get('/', (req, res) => {
    res.render('index', {
        exampleVariable: 'Hello World'
    });
});

app.get('/page', (req, res) => {
    get_data("https://reqres.in/api/users?page=2", "people", res)
});

app.get('/pageT', (req, res) => {
    res.render('about');
});


let listener = app.listen(PORT || process.env.PORT, () => {
    console.log('Your app is listening on port ' + listener.address().port);
});