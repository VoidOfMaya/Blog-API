//author only rout for editing and creating posts
// can :
//createpost by POST/post
//publishpost by PUT/post/:postId
//edit post by PUT/post/:postId
//delete post by DELETE/post/:postId
import { Router } from "express";
import {    
    createpost,
    togglePublish,
    updatePost,
    deletePost
} from './postController.js'

const postsRouter = Router();
//requires a title and content
postsRouter.post('/',createpost)//requires title and content from req.body
postsRouter.put('/publish/:id', togglePublish)//requires id req.params
postsRouter.put('/update/:id', updatePost)//requires one or both title and content from req.params
postsRouter.delete('/:id', deletePost)//requires id from req.params
export{
    postsRouter
}