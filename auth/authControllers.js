import { validationResult, matchedData } from "express-validator";
import passport from "passport";
import {registerUser} from './authServices.js';

async function createUser(req, res, next){
    //const errors = validationResult(req);
    //if(!errors.isEmpty()){
        //call message handler object
    //    console.log({errors: errors.array()});
    //}
    //const data = matchedData(req);
    const user = await registerUser(req.body);
    res.json({user})

}
async function logout(req, res, next) {
    req.logout(err=>{
        err ? next(new Error(`passport logout error`)): req.session.destroy(err =>{
            if(err){
                return next(new Error(`session destroy error: ${err}`));
            };
            res.clearCookie('connect.sid');
            })
    })
    
}
async function login(req, res) {
    await passport.authenticate('local',{})
}
export{
    createUser,
    logout,
    login
}
