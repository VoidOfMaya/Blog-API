import express from 'express'
import 'dotenv/config'
import passport from 'passport';
import { authRouter } from './auth/authRouter.js';

const app = express();
//parse req string to json
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use(passport.initialize());

app.get('/',(req, res)=>{
    res.json({message: "hellow world!"});
})
app.use('/auth',authRouter)




const PORT = process.env.PORT || 3000;
app.listen(PORT, (err)=>{
    if(err) throw new err ;
    console.log(`Server running on port: ${PORT}`);
})