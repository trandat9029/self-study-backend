const connection = require("../config/database");

const getAllUsers = async ()=>{
    const [results, fields] = await connection.query('select * from Users u');
    return results;
}

const getUserById = async(userId) =>{
    let [results, fields] = await connection.query('SELECT * from Users where id = ?', [userId])

    let user = results && results.length > 0 ? results[0] : {};

    return user;
}

const updateUserById = async (email, name, city, userId) =>{
    let [results, fields] = await connection.query(
        ` 
            UPDATE Users 
            SET email= ?,name= ?, city= ?
            where id = ?
        `, [email, name, city, userId],
    );
}
const deleteUserById = async (id) =>{
    let [results, fields] = await connection.query(
        ` DELETE FROM Users WHERE id = ? `, [id],
    );
}

module.exports = {
    getAllUsers,
    getUserById,
    updateUserById,
    deleteUserById,
}