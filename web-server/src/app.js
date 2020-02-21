const path = require('path')
const express = require('express');

console.log(__dirname);
console.log(path.join(__dirname, '../public'));

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectoryPath));

app.get('', (request, response) => {
    response.send('<h1>Weather</h1>');
});

app.get('/help', (request, response) => {
    response.send({
        name: 'My',
        age: 27
    });
});

app.get('/about', (request, response) => {
    response.send('<h1>About</h1>');
});

app.get('/weather', (request, response) => {
    response.send({
        forecast: 'It is snowing',
        location: 'Philadelphia'
    });
});

// app.com
// app.com/help
// app.com/about

app.listen(3000, () => {
    console.log('Server is up on port 3000.');
});
