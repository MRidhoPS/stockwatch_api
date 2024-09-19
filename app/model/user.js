const dbpool = require('../config/database')

const createUser = (body)=>{
    const sqlQuery = 'INSERT INTO user (username, email, password) VALUES (?, ?, ?)'

    return dbpool.execute(sqlQuery, [body.username, body.email, body.password])
}

const loginUser = async (email, password)=>{
    try {
        const sqlQuery = 'select * from user where email = ?'

        const [rows] = await dbpool.execute(sqlQuery, [email])

        if (rows.length === 0) {
            return { success: false, message: 'User not found' };
        }

        const user = rows[0];

        if (user.password !== password) {
            return { success: false, message: 'Invalid password' };
        }
        return {
            success: true,
            message: 'Login successful',
            user: {
                user_id: user.user_id,
                username: user.username,
                email: user.email
            }
        };
    } catch (error) {
        console.error('Error during login:', error);
        throw error; 
    }
}

module.exports = {
    createUser,
    loginUser,
}