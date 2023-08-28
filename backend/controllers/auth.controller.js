import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs'
import { errorHandler } from '../utils/error.js'

export const signup = async (req, res, next) => {
    const {username, email, password} = req.body
    const hashedPW = bcryptjs.hashSync(password, 12)
    const newUser = new User({username, email,password: hashedPW})
    try{
        await newUser.save();
        res.status(201).json({ message: "user successfully created" });
    }catch (error) {
        next(errorHandler(500, 'Something went wrong.'))
    }
    
}