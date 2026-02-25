import { matchedData, validationResult } from 'express-validator'
import{
    getPostsService,
    createpostSevice,
    publishPostSevice,
    editPostSevice,
    deletePostSevice
} from './postSservices.js'

async function getAllPosts(req, res) {

    const {id} = req.user
    if (Number.isNaN(id))return res.status(401).json({error: 'Invalid user ID'})//checks that user id is a number    
    
    try{
        const result = await getPostsService(Number(id))
        res.status(200).json({result})
    }catch(err){
        res.status(401).json({error: err})
    }
}
async function createpost(req,res) {

    const errors = validationResult(req);
    if(!errors.isEmpty()) return res.status(401).json({error: errors.array()})
    const {title, content} = matchedData(req);

    const {id} = req.user
    if (Number.isNaN(id))return res.status(401).json({error: 'Invalid user ID'})//checks that user id is a number  

    try{
        await createpostSevice({id, title, content});
        res.status(201).json({message: 'post created successfully'})
    }catch(err){

        res.status(500).json({error: err})
    }
}
async function togglePublish(req,res) {

    const errors = validationResult(req);
    if(!errors.isEmpty()) return res.status(401).json({error: errors.array()})
    const {id} = matchedData(req);
    
    try{
        await publishPostSevice(Number(id))
        res.status(200).json({message: 'post published successfully!'})
    }catch(err){
        res.status(500).json({error: err})
    }
}
async function updatePost(req, res) {

    const errors = validationResult(req);
    if(!errors.isEmpty()) return res.status(401).json({error: errors.array()})
    const {id, title, content} = matchedData(req);

    try{
        //data should provide an id and the following:{title ,content}
        await editPostSevice(Number(id), {title, content})
        
        res.status(200).json({message: 'post updated successfully!'})
    }catch(err){
        console.log(err)
        res.status(500).json({error: err})
    }
}
async function deletePost(req,res) {

    const errors = validationResult(req);
    if(!errors.isEmpty()) return res.status(401).json({error: errors.array()})
    const {id} = matchedData(req);

    try{
        await deletePostSevice(Number(id));
        res.status(204).json({message: 'post deleted successfully!'})
    }catch(err){
        res.status(500).json({error: err})
    }    
}

export {
    getAllPosts,
    createpost,
    togglePublish,
    updatePost,
    deletePost
}