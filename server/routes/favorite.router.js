const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  res.sendStatus(200);
});

// add a new favorite
router.post('/', (req, res) => {
  const newGif = req.body;
  console.log('newGif', newGif);
  const queryText = `
  INSERT INTO "favorites"
  ("url")
  VALUES
  ($1)
  `
  queryValues = [
    newGif
  ]
  pool.query(queryText, queryValues)
  .then((result) => {res.sendStatus(201)})
  .catch(error => {
    console.log('Error in POST /api/favorites', error);
      res.sendStatus(500);
  })
  
});

// update a favorite's associated category
router.put('/:id', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete('/:id', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
