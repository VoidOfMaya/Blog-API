import { enableAuthorship, getUser } from "./userServices.js";

async function getCurrentUser(req, res){
    try{
    //get user from prisma allways as single source of truth
        const user = await getUser(req.user.id)
        res.status(200).json({user: user});        
    }catch(err){
        res.status(500).json({error: err});
    }
}
async function makeUserAnAuthor(req, res){
    try{
        const user = await enableAuthorship(req.user.id);
        res.status(200).json({message: "User is now an author"})
    }catch(err){
        res.status(500).json({error: err})
    }
}

export{
    getCurrentUser,
    makeUserAnAuthor
}