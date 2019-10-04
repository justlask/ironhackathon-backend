const express = require('express');
const router  = express.Router();
const Rooms = require('../models/Rooms')
const seeds = require('../bin/newseeds.js')


router.get('/seeditfam', async (req,res,next) => {
  seeds.forEach(seed => {
    Rooms.create(seed).then(data => {
      res.json(data)
    }).catch(err =>  next(err))
  })
})




router.get('/', (req,res,next) => {
  Rooms.find().then(data => {
    res.json(data)
  }).catch(err => next(err))
})

router.get('/:id', (req,res,next) => {
  Rooms.find({id: req.params.id}).then(data => {
    res.json(data)
  })
})


router.get('/search', (req,res, next) => {

})







module.exports = router;
