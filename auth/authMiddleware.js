
import passport from 'passport';
import {ExtractJwt, Strategy as JWTStrategy} from 'passport-jwt';
import { ExtractJwt as extractJWT } from 'passport-jwt';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import 'dotenv/config';

import {prisma} from '../lib/prisma.js';

const isAuthenticated =     passport.authenticate('jwt',{session: false});

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
    isAuthenticated,
    checkAuth,
}