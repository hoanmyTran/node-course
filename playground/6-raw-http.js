const https = require('https');
const url = 'https://api.darksky.net/forecast/2ed585c49de5548d374e5316b28fcfb1/37.8267,-122.4233';

const request = https.request(url, (response) => {
    let data = '';
    response.on('data', (chunk) => {
        data = data + chunk.toString();
    });

    response.on('end', () => {
        const body = JSON.parse(data);
        console.log(body);
    });
});

request.on('error', (error) => {
    console.log('An error', error);
});

request.end();