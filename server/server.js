const express = require('express');
const morgan = require('morgan');
const axios = require('axios');

const app = express();

app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));

app.get('/topSpots', function(req, res){
    axios
    .get('https://www.cccareerssdts.demo.coolify.io/')
    .then(response => res.send(response.data))
})

module.exports = app;
