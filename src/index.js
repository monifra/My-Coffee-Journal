const express = require('express');
require('./db/mongoose');

const userRouter = require('./routers/user');
const coffeeRouter = require('./routers/coffee')

const app = express();
//setting port for Heroku or a normal 3000s
const port = process.env.PORT || 3000;

app.use(express.json());

//use user router
app.use(userRouter);
app.use(coffeeRouter);


app.listen(port, () => {
    console.log(`Server is up on port: ${port}`);
});