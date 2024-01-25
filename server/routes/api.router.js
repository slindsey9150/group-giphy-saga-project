const express = require('express');
const axios = require('axios')
require('dotenv').config();

const router = express.Router();

const api_key = process.env.MY_API_KEY

const searchQuery = 'dog'
const searchLimit = '1'


router.get('/', (req,res) => {
    axios.get(`http://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${searchQuery}&limit=${searchLimit}`)
    .then((response) => {
        res.send(response.data)
    })
    .catch(error => {
        console.log('error getting from API', error);
    })
})

module.exports = router;