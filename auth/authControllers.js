import { validationResult, matchedData } from "express-validator";
import passport from "passport";
import {registerUser, login} from './authServices.js';

async function createUser(req, res, next){
    //const errors = validationResult(req);
    //if(!errors.isEmpty()){
        //call message handler object
    //    console.log({errors: errors.array()});
    //}
    //const data = matchedData(req);
    try{
        await registerUser(req.body);      
    }catch(err){
        res.status(500).json({error: err})
    }
    res.status(201).json({message: "user registered successfully"});

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
async function userLogin(req, res) {
    //requires input validation
    try{
        console.log('authcontroller: userLogin')
        const result = await login(req.body)  
        res.status(200).json({user: result});      
    }catch(err){
        console.log(err)
        res.status(500).json({error: err})
    }

}
export{
    createUser,
    logout,
    userLogin
}
