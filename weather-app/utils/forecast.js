const request = require('request');

const forecast = (latitude, longtitude, callback) => {
    const url = 'https://api.darksky.net/forecast/2ed585c49de5548d374e5316b28fcfb1/'+latitude+','+longtitude+'?units=us';
    request({url, json: true}, (error, {body}) => {
        if(error) {
            callback('Unable to connect to weather service!', undefined);
        } else if(body.error) {
            callback('Unable to find location', undefined);
        } else {
            callback(undefined, body.daily.data[0].summary+ ' It is currently '+body.currently.temperature+' degress out. There is a '+ body.currently.precipProbability+ ' chance of rain');
        }
    });
}

module.exports = forecast;