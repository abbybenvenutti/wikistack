const express = require('express');
const router = express.Router();
const {addPage} = require('../views');


router.get('/', (req, res, next) => {
  res.send('we out here')
});

router.post('/', (req, res, next) => {
  res.json(req.body);
});

router.get('/add', (req,res, next) => {
  res.send(addPage())
});

module.exports = router;
