const express = require('express');
require('./db/mongoose');

const User = require('./models/User');
const Coffee = require('./models/Coffee');

const app = express();
//setting port for Heroku or a normal 3000s
const port = process.env.PORT || 3000;

app.use(express.json());

//Users Endpoints
app.post('/users', async(req,res)=>{
    const user = new User(req.body);
    try{
        await user.save();
        res.status(201).send(user);
    } catch(err) {
        res.status(400).send(err);
    }
});
//Coffee Endpoints
app.post('/coffees', async(req,res)=>{
    const coffee = new Coffee(req.body);

    try{
        await coffee.save();
        res.status(201).send(coffee);
    }catch(err){
        res.status(400).send(err);
    }

});

app.listen(port, () => {
    console.log(`Server is up on port: ${port}`);
});