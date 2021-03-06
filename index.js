/*jshint esversion:6*/
const express = require('express');
const server = express();

const port = process.env.PORT || 8080;

// middleware imports
const morgan = require('morgan');
const cors = require('cors');

// router imports
const userRouter = require('./routers/user.router');

// wire up the middleware
server.use(morgan('dev'));
server.use(cors());

// wire up routers
server.use(userRouter);


server.get('/', (req, res) => {
     res.send('it works');
});


server.listen(port, () => {
   console.log(`Now listening on port ${port}`);
});
