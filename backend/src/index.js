require('dotenv').config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
});

const express = require('express');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser');
const morgan = require('morgan');
    
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan('dev'));

app.get('/', (req,res)=>{
    res.status(200).send("API for TuiteFeracode!");
});

require('./app/controllers/index')(app);

app.listen(port,()=>{
    console.log(`server enable listening ${port}!`)
});

module.exports = app;