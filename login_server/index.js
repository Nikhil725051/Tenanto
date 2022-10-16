import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRouter from './routes/userRoute.js';


dotenv.config();
const app = express();

const connectToMongo = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URL, () => {
            console.log("Connected to mongoDB");
        })
    }catch(err){
        throw err;
    }
}

app.use(express.json());
app.use('/user', userRouter);

app.listen('3000', () => {
    connectToMongo();
    console.log('Connected to the server');
})
