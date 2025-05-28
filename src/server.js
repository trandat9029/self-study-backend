const express = require('express');
const path = require('path');
require('dotenv').config();
const app = express();

const port = process.env.PORT || 3000;
const hostname  = process.env.HOST_NAME || 'localhost';


app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.send('hello world');
})

app.get('/abc', (req, res) => {
    res.send('check abc');
})
app.get('/test', (req, res) => {
    res.render('sample.ejs' )
})

app.listen(port,hostname, () =>{
    console.log(`Example app listening on port ${port}`);
})