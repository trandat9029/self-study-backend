const connection = require('../config/database');

// const getHomepage = (req, res) =>{
//     //process data
//     //call model 
//     let user = [];
//     connection.query(
//     'SELECT * from Users u',
//     function(err, results, fields){
//         user = results;
//         console.log('results: ', results);
//         console.log('user: ', user);
//         res.send(JSON.stringify(user));
        
//     }
// )
const getHomepage = (req, res) =>{
   return res.render('home.ejs')

}

const getABC = (req, res) =>{
    res.send('check nodemon');
}

const getTest = (req, res) =>{
    res.render('sample.ejs' )
}

module.exports = {
    getHomepage,
    getABC,
    getTest

}