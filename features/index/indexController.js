import { getPublishedPostsPreview,getPublishedPostById } from "./indexServices.js"
async function getPosts(req, res) {
    try{
        const posts = await getPublishedPostsPreview();
        res.status(200).json({posts: posts})
    }catch(err){
        res.status(500).json({error: err})
    }
}
async function getPostById(req, res) {
    //requires validation for params.id
    try{
        const post = await getPublishedPostById(req.param.id);
        res.status(200).json({post: post})
    }catch(err){
        res.status(500).json({error: err})
    }
}
export{
    getPosts,
    getPostById
}