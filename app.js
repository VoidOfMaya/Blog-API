import express from 'express'
import 'dotenv/config'
import passport from 'passport';
import { authRouter } from './auth/authRouter.js';
import { setupPassport } from './auth/authMiddleware.js';
import { userRouter } from './user/userRouter.js';

const app = express();
//parse req string to json
app.use(express.json());
app.use(express.urlencoded({extended: true}));

setupPassport();
app.use(passport.initialize());

app.get('/',(req, res)=>{
    res.json({message: "hellow world!"});
})
app.use('/auth',authRouter);
app.use('/user', userRouter);




const PORT = process.env.PORT || 3000;
app.listen(PORT, (err)=>{
    if(err) throw new err ;
    console.log(`Server running on port: ${PORT}`);
})