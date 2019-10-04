const express = require('express');
const router  = express.Router();
const Rooms = require('../models/Rooms')
const seeds = require('../bin/newseeds.js')
const cors = require('cors')

express.use(cors())

router.get('/seeditfam', async (req,res,next) => {
  seeds.forEach(seed => {
    Rooms.create(seed).then(data => {
      res.json(data)
    }).catch(err =>  next(err))
  })
})




router.get('/', (req,res,next) => {
  Rooms.find().then(data => {
    res.json(data, {msg: 'This is CORS-enabled for all origins!'})
  }).catch(err => next(err))
})

router.get('/:id', (req,res,next) => {
  Rooms.find({id: req.params.id}).then(data => {
    res.json(data, {msg: 'This is CORS-enabled for all origins!'})
  })
})


router.get('/search', (req,res, next) => {

})







module.exports = router;
