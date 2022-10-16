import express from "express";
import Users from '../model/user.js'; 
import bcrypt from 'bcrypt';


const userRouter = express.Router();

userRouter.post('/register', async (req, res, next) => {

    try{
        const user = await Users.findOne({email: req.body.email});
        if(user){
            const error = new Error("User with this email already exists");
            error.status = 409;
            throw error;
        }else{
            const hash = await bcrypt.hash(req.body.password, 10);
            const user = new Users({
                ...req.body,
                password: hash
            });
            const savedUser = await user.save();
            res.status(200).setHeader('Content-Type', 'application/json');
            res.json({success: true, user: savedUser});
        }
    }catch(err){
        next(err);
    }
})

userRouter.post('/login', async(req, res, next) => {
    try{
        const user = await Users.findOne({email: req.body.email});
        if(user){
            if(await bcrypt.compare(req.body.password, user.password)){
                res.status(200).setHeader('Content-Type', 'application/json');
                res.json({success: true, user: user});
            }else{
                const error = new Error("Incorrect password!");
                error.status = 404;
                throw error;
            }
        }else{
            const error = new Error("User does not exist");
            error.status = 404;
            throw error;
        }
    }catch(err){
        next(err);
    }
})


export default userRouter