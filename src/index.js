//require express
const express = require('express');

const app = express();
//setting port for Heroku
const port = process.env.PORT || 3000;


//calling listen
app.listen(port, ()=>{
    console.log(`Server is up on ${port}`);
});
