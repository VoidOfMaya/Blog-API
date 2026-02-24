
import passport from 'passport';
import {ExtractJwt, Strategy as JWTStrategy} from 'passport-jwt';
import {prisma} from '../lib/prisma.js'

import 'dotenv/config';

import {prisma} from '../lib/prisma.js';

const isAuthenticated =     passport.authenticate('jwt',{session: false});
function setupPassport(){
    const options ={
        jwtFormRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretKey: process.env.JWT_KEY,      
    }
    passport.use(new JWTStrategy(options,async (payload, done)=>{
        try{
        const user = await prisma.user.findUnique({where: {id: payload.id}})
        if(!user) return done(null, false);
        return done(null, user);
        }catch(err){
            done(err)
        }

    }))
}

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

function checkAuth (req, res, next){
}
export{
    setupPassport,
    isAuthenticated,
    checkAuth,
}