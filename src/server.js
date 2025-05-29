const express = require('express');
const path = require('path');
require('dotenv').config();
const app = express();

const port = process.env.PORT || 3000; // port => hardcode  .uat .prod
const hostname  = process.env.HOST_NAME || 'localhost';

//config static files
app.use(express.static(path.join(__dirname, 'public')));

//config template engine
app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'ejs')

// khai bao route
app.get('/', (req, res) => {
    res.send('hello world');
})

app.get('/abc', (req, res) => {
    res.send('check nodemon');
})
app.get('/test', (req, res) => {
    res.render('sample.ejs' )
})

app.listen(port,hostname, () =>{
    console.log(`Example app listening on port ${port}`);
})