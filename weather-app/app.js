const request = require('request');
const geocode = require('./utils/geocode');
// const url = 'https://api.darksky.net/forecast/2ed585c49de5548d374e5316b28fcfb1/37.8267,-122.4233?units=us';
// request({url: url, json: true}, (error, response) => {
//     if(error) {
//         console.log('Unable to connect to weather service!');
//     } else if(response.body.error) {
//         console.log('Unable to find location');
//     } else {
//         console.log(response.body.daily.data[0].summary+ ' It is currently '+response.body.currently.temperature+' degress out. There is a '+ response.body.currently.precipProbability+ ' chance of rain');
//     }
// });

// Geocoding
// Address  -> Lat/Long -> Weather

// const geocodingUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiaG9hbm15dHJhbiIsImEiOiJjanh1N2tndDgweXN4M3BuNTJscGE3YXQ0In0.F1lZOJi_IYmlz8-CDOTPcA';

// request({url: geocodingUrl, json: true}, (error, response) => {
//     if(error) {
//         console.log('Unable to connect to geocoding service!');
//     } else if(response.body.features.length === 0) {
//         console.log('Unable to find location. Try another search.');
//     } else {
//         const latitude = response.body.features[0].center[1];
//         const longtitude = response.body.features[0].center[0];
//         console.log('Latitude: ' +latitude+', longtitude: '+longtitude);
//     }
// });

geocode('Boston', (error, data) => {
    console.log('Error', error);
    console.log('Data', data);
});