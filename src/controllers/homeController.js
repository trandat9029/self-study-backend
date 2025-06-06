const connection = require('../config/database');
const {getAllUsers, getUserById, updateUserById} = require('../services/CRUDService')

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
const getHomepage = async (req, res) =>{
    let results = await getAllUsers();
    console.log(('>>> check results: ', results)); 
    return res.render('home.ejs', {listUsers: results});

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
    res.send('Created user succeed!');

}
const portUpdateUser = async (req, res) =>{
    
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;
    let userId = req.body.userId;

    await updateUserById(email, name, city, userId);
    
    // res.send('Updated user succeed!');
    res.redirect('/');

}

const getCreateUser = (req, res) =>{
    res.render('create.ejs');
}

const  getUpdateUser = async (req, res) =>{
    const userId = req.params.id;
    let user = await getUserById(userId);
    res.render('edit.ejs', {userEdit : user});// x <- y
}

module.exports = {
    getHomepage,
    getCreateUser,
    portCreateUser,
    getUpdateUser,
    portUpdateUser,
}