const express = require('express');

const app = express();

app.get('', (request, response) => {
    response.send('<h1>Weather</h1>');
});

app.get('/help', (request, response) => {
    response.send('Help page');
});

app.get('/about', (request, response) => {
    response.send('About');
});

app.get('/weather', (request, response) => {
    response.send('Your weather');
});

// app.com
// app.com/help
// app.com/about

app.listen(3000, () => {
    console.log('Server is up on port 3000.');
});