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
postsRouter.post('/',createpost)
postsRouter.put('/:id', togglePublish)
postsRouter.put('/:id', updatePost)
postsRouter.delete('/:id', deletePost)
export{
    postsRouter
}