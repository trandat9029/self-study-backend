
require('dotenv').config();
const express = require('express');
const path = require('path');
const connection = require('./config/database');
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');


const app = express();
const port = process.env.PORT || 3000; // port => hardcode  .uat .prod
const hostname  = process.env.HOST_NAME || 'localhost';

//config template engine
configViewEngine(app);

//config request body
app.use(express.json());
app.use(express.urlencoded({ extended: true}));




// khai bao route
app.use('/', webRoutes);

app.listen(port,hostname, () =>{
    console.log(`Example app listening on port ${port}`);
})