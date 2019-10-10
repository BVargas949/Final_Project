const express = require('express'); 
const app = express();

app.get('/', (req, res) => {
    res.send('node -> express -> handlebars or pug?');
});


//watch the server(local host)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

