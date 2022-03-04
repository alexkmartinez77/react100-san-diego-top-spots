const express = require('express');
const morgan = require('morgan');
const axios = require('axios');

const app = express();

app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));

app.get('/topSpots', function(req, res){
    axios
    .get('https://origin-top-spots-api.herokuapp.com/api/topspots')
    .then(response => res.send(response.data))
})

module.exports = app;
