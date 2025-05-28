const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('hello world');
})

app.get('/abc', (req, res) => {
    res.send('check abc');
})
app.get('/test', (req, res) => {
    res.send('<h1>check abc</h1>');
})

app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`);
})