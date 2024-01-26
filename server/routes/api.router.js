const express = require('express');
const axios = require('axios');
require('dotenv').config();
const router = express.Router();
const api_key = process.env.MY_API_KEY
const searchLimit = '3'

function getGiffs () {
    // console.log('store', store);
    // let searchQuery = store
    console.log("hey");
}
getGiffs()

router.get('/', (req,res) => {
    // const store = useSelector(store => store.searchElement)
    // let searchQuery = store
    let searchQuery = 'cat'
    console.log('searchQuery;', searchQuery);

    // console.log('store', store);

    axios.get(`http://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${searchQuery}&limit=${searchLimit}`)
    .then((response) => {
        res.send(response.data)
    })
    .catch(error => {
        console.log('error getting from API', error);
    })
})


module.exports = router;