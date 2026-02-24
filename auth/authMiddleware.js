
import passport from 'passport';
import {ExtractJwt as getJwt, Strategy as JWTStrategy} from 'passport-jwt';
import {prisma} from '../lib/prisma.js';
import 'dotenv/config';

function setupPassport(){
    const options ={
        jwtFromRequest: getJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.JWT_KEY,      
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

const isAuthenticated = passport.authenticate('jwt',{session: false});

export{
    setupPassport,
    isAuthenticated,

}