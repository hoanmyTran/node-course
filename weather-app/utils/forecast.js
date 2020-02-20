const request = require('request');

const forecast = (latitude, longtitude, callback) => {
    const url = 'https://api.darksky.net/forecast/2ed585c49de5548d374e5316b28fcfb1/'+latitude+','+longtitude+'?units=us';
    request({url: url, json: true}, (error, response) => {
        if(error) {
            callback('Unable to connect to weather service!', undefined);
        } else if(response.body.error) {
            callback('Unable to find location', undefined);
        } else {
            callback(undefined, response.body.daily.data[0].summary+ ' It is currently '+response.body.currently.temperature+' degress out. There is a '+ response.body.currently.precipProbability+ ' chance of rain');
        }
    });
}

module.exports = forecast;