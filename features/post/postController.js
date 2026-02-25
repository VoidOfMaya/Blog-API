import{
    createpostSevice,
    publishPostSevice,
    editPostSevice,
    deletePostSevice
} from './postSservices.js'

async function createpost(req,res) {
    try{
        //data should provide a title and content and user id
        const {id} = req.user
        const {title, content}= req.body
        await createpostSevice({id, title, content});
        res.status(201).json({message: 'post created successfully'})
    }catch(err){

        res.status(500).json({error: err})
    }
}
async function togglePublish(req,res) {
    try{
        //data should provide post id
        const {id} = req.params
        await publishPostSevice(Number(id))
        res.status(200).json({message: 'post published successfully!'})
    }catch(err){
        res.status(500).json({error: err})
    }
}
async function updatePost(req, res) {
    try{
        //data should provide an id and the following:{title ,content}
        const {title, content} = req.body
        const {id}= req.params
        await editPostSevice(Number(id), {title, content})
        
        res.status(200).json({message: 'post updated successfully!'})
    }catch(err){
        console.log(err)
        res.status(500).json({error: err})
    }
}
async function deletePost(req,res) {
    try{
        //data should provide a post id
        const {id} = req.params
        await deletePostSevice(Number(id));
        res.status(204).json({message: 'post deleted successfully!'})
    }catch(err){
        res.status(500).json({error: err})
    }    
}

export {
    createpost,
    togglePublish,
    updatePost,
    deletePost
}