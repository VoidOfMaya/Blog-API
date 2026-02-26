import { getPublishedPostsPreview,getPublishedPostById } from "./indexServices.js"
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
    try{
        const {id} = req.params
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