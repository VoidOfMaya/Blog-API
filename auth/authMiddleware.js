
import passport from 'passport';
import {ExtractJwt, Strategy as JWTStrategy} from 'passport-jwt';
import {Strategy as LocalStrategy} from 'passport-local';
import { ExtractJwt as extractJWT } from 'passport-jwt';
import bcrypt from 'bcryptjs';
import 'dotenv/config';

import {prisma} from '../lib/prisma.js';

//passport local strategy 
function setPassport(){
passport.use(
    new LocalStrategy(async(username, password, done)=>{
        try{
            const user = await prisma.user.findUnique({where: {username}});          
            if(!user){
                return done(null, false,{message: 'Incorrect username'});
            }
            const match = await bcrypt.compare(password, user.password);

            if(!match){
                return done(null, false, {message: 'Incorrect password'});
            }
            return done(null, user);
        }catch(err){
            return done(err);
        }
    })
)
passport.serializeUser((user,done)=>{
    done(null, user.id);
});
passport.deserializeUser(async(id, done)=>{
    try{

        const user = await prisma.user.findUnique({where:{id}});
        done(null, user);
    }catch(err){
        done(err);
    }
});
}
function checkAuth (req, res, next){
    if(!req.user){
        req.flash('errors', 'Access Denied!');
        return res.redirect('/')
    }
    next();
}
export{
    setPassport,
    checkAuth,
}