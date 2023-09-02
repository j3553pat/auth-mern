import { errorHandler } from "../utils/error.js"

export const test = (req, res) => {
    res.json({
        message: "api is working"
    })
}

//update user

export const updateUser = async (req, res, next) => {
    if (req.user.id == req.params.id) {
       
        return next(errorHandler(401, 'you can only upate your account.'))
    }
    try {
        
    } catch (error) {
        
    }
}