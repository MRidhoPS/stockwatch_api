const userModels = require('../model/user')

const register = async(req, res)=>{
    const {body} = req;

    try {
        await userModels.createUser(body)
        res.status(201).json({
            'status': 200,
            'data': [
                'Create data success',
                data = req.body

            ]
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            error: error,
        })
    }
}

const login = async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            message: 'Bad Request',
            error: 'Email and password are required.'
        });
    }

    try {
        const result = await userModels.loginUser(email, password)

        if (result.success) {
            res.status(200).json({
                message: result.message,
                user: result.user // Mengembalikan ID pengguna dan informasi lainnya
            });
        } else {
            res.status(401).json({
                message: result.message
            });
        }
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            error: error.message || error
        });
    }
}

module.exports = {
    register,
    login
}