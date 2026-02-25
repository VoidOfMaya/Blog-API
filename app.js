import express from 'express'
import 'dotenv/config'
import passport from 'passport';
import { midware } from './features/middleWareOrchestrator.js';
import {pipe} from './features/routerOrchestrator.js'

const app = express();
//parse req string to json
app.use(express.json());
app.use(express.urlencoded({extended: true}));

midware.setupPassport();
app.use(passport.initialize());

app.use('/',pipe.indexRouter) // this houses the read rout for post and comments Comment router will live here!
app.use('/auth',pipe.authRouter);
app.use('/user',midware.isAuthenticated, pipe.userRouter);
app.use('/post',midware.isAuthenticated,midware.isAuthor, pipe.postsRouter);


//error handlers:



const PORT = process.env.PORT || 3000;
app.listen(PORT, (err)=>{
    if(err) throw new err ;
    console.log(`Server running on port: ${PORT}`);
})