import { getPublishedPostsPreview,getPublishedPostById } from "./indexServices.js"
import { validationResult, matchedData } from "express-validator";
async function getPosts(req, res) {
    try{
        const posts = await getPublishedPostsPreview();
        res.status(200).json({posts: posts})
    }catch(err){
        res.status(500).json({error: err.message || 'Internal Server Error'})
    }
}

async function getPostById(req, res) {
    //requires validation for params.id
    const errors = validationResult(req);
    if(!errors.isEmpty()) return res.status(401).json({error: errors.array()})
    const {id} = matchedData(req);

    try{
        const post = await getPublishedPostById(Number(id));
        res.status(200).json({post: post})
    }catch(err){
        console.log(err);
        res.status(500).json({error: err.message || 'Internal Server Error'})
    }
}
export{
    getPosts,
    getPostById
}