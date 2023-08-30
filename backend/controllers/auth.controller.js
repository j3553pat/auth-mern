import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs'
import { errorHandler } from '../utils/error.js'
import jwt from 'jsonwebtoken'

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

export const signin = async (req, res, next) => {
    const { email, password } = req.body
    try {
        const validUser = await User.findOne({ email })
        if (!validUser) return next(errorHandler(404, 'User not found.'))
        const validPW = bcryptjs.compareSync(password, validUser.password)
        if(!validPW) return next(errorHandler(401, 'Invalid credentials'))
        const token = jwt.sign({id: validUser._id}, process.env.JWT_SECRET)
        const { password: hashedPW, ...rest} = validUser._doc
        res.cookie('access_token', token, {httpOnly: true}).status(200).json(rest)
    } catch (error) {
        next(error)
    }
}

export const google = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email})
        if (user) {
            const token = jwt.sign({id: user._id}, process.env.JWT_SECRET)
            const { password: hashedPW, ...rest } = user._doc
            res
            .cookie('access_token', token, {
              httpOnly: true
            }).status(200).json(rest)
        } else {
            const randomPW = Math.random().toString(36).slice(-10)
            const hashedPW = bcryptjs.hashSync(randomPW, 10)
            const newUser = new User({
                username: req.body.name.split(" ").join("").toLowerCase() + Math.floor(Math.random() * 10000 + 1).toString(),
                email: email, 
                password: hashedPW, 
                profilePicture: req.body.photo
            })
            await newUser.save()
            const token = jwt.sign({id: user._id}, process.env.JWT_SECRET)
            const { password: hashedPW1, ...rest } = newUser._doc
            res
            .cookie('access_token', token, {
              httpOnly: true
            })
        }
    } catch (error) {
        next(error)
    }
};