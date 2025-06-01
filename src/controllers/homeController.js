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

const portCreateUser = async (req, res) =>{
    
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;
    
    // let { email, name, city} = req.body:

    console.log('email:', email, 'name:', name, 'city:', city);

    // connection.query(
    //     ` INSERT INTO Users (email, name, city)
    //         VALUES (?, ?, ?)`,
    //     [email, name, city],
    //     function(err, results){
    //         if(err){
    //             console.log('error: ', err);
    //             return res.status(500).send('co loi xay ra khi insert');
    //         }
    //         console.log('results: ', results);
    //         res.send('create user succeed!');
    //     }
    // );

    let [results, fields] = await connection.query(
        ` INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`, [email, name, city],
    );;
    console.log('>>> check results: ', results);

}

const getCreateUser = (req, res) =>{
    res.render('create.ejs');
}

module.exports = {
    getHomepage,
    getABC,
    getTest,
    getCreateUser,
    portCreateUser,
}