import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs'

export const signup = async (req, res) => {
    const {username, email, password} = req.body
    const hashedPW = bcryptjs.hashSync(password, 12)
    const newUser = new User({username, email,password: hashedPW})
    try{
        await newUser.save();
        res.status(201).json({ message: "user successfully created" });
    }catch (error) {
        res.status(500).json(error.message)
    }
    
}