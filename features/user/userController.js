import { enableAuthorship, getUser } from "./userServices.js";

async function getCurrentUser(req, res){
    const{id} = req.user
    if(!Number.isInteger(id)) return res.status(500).json({error: "Invalid user ID"})//this validates the id from req.user   
    try{
    //get user from prisma allways as single source of truth
        const user = await getUser(id)
        res.status(200).json({user: user});        
    }catch(err){
        res.status(500).json({error: err.message || 'Internal Server Error'});
    }
}
async function makeUserAnAuthor(req, res){
    const{id} = req.user
    if(!Number.isInteger(id)) return res.status(500).json({error: "Invalid user ID"})//this validates the id from req.user 
    try{
        const user = await enableAuthorship(id);
        res.status(200).json({message: "User is now an author"})
    }catch(err){
        res.status(500).json({error: err.message || 'Internal Server Error'})
    }
}

export{
    getCurrentUser,
    makeUserAnAuthor
}