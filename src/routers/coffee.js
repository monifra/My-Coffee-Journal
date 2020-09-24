const express = require('express');
const router = new express.Router();
const Coffee = require('../models/Coffee');

//Coffee Endpoints
router.post('/coffees', async(req,res)=>{
    const coffee = new Coffee(req.body);

    try{
        await coffee.save();
        res.status(201).send(coffee);
    }catch(err){
        res.status(400).send(err);
    }

});

module.exports = router;