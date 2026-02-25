
import passport from 'passport';
import {ExtractJwt as getJwt, Strategy as JWTStrategy} from 'passport-jwt';
import {prisma} from '../../lib/prisma.js';
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
//this should be passed only after the is authenticated middleware
async function isAuthor (req, res, next){
    if(!req.user) return res.status(401).json({error: "Unauthorized"})
    const {id} = req.user
    try{
        const user = await prisma.user.findUnique({
            where: {id},
            select:{
                role: true
            }
        })
        if(!user || !user.role) return res.status(403).json({error: 'User role not found'})
        if(user.role.name === 'author'){
            return next();
        }else{
            throw new Error('user not an author')
        }
    }catch(err){
        next(err)
    }        
 
}

export{
    setupPassport,
    isAuthenticated,
    isAuthor,

}