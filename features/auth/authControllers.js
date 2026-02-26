import { validationResult, matchedData } from "express-validator";
import {registerUser, login} from './authServices.js';

async function createUser(req, res){
    //handels validation
    const errors = validationResult(req);
    if(!errors.isEmpty()) return res.status(401).json({error: errors.array()})
    const data = matchedData(req);
    
    try{
        await registerUser(data);      
    }catch(err){
        res.status(500).json({error: err.message || 'Internal Server Error'})
    }
    res.status(201).json({message: "user registered successfully"});

}

async function userLogin(req, res) {
    //requires input validation
    const errors = validationResult(req);
    if(!errors.isEmpty()) return res.status(401).json({error: errors.array()})
    const data = matchedData(req);

    try{
        const user = await login(data)  
        res.status(200).json({user});      
    }catch(err){
        console.log(err)
        res.status(500).json({error: err.message || 'Internal Server Error'})
    }

}
export{
    createUser,
    userLogin
}
