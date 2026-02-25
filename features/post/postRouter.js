//author only rout for editing and creating posts
// can :
//createpost by POST/post
//publishpost by PUT/post/:postId
//edit post by PUT/post/:postId
//delete post by DELETE/post/:postId
import { Router } from "express";
import {  
    getAllPosts,  
    createpost,
    togglePublish,
    updatePost,
    deletePost
} from './postController.js'
import {
    validatePostContent,
    validatePostId,
} from '../../validations/postValidation.js'

const postsRouter = Router();
//requires a title and content
postsRouter.get('/All', getAllPosts)
postsRouter.post('/', validatePostContent, createpost)//requires title and content from req.body
postsRouter.put('/publish/:id', validatePostId, togglePublish)//requires id req.params
postsRouter.put('/update/:id',validatePostId,validatePostContent, updatePost)//requires one or both title and content from req.params
postsRouter.delete('/:id', validatePostId, deletePost)//requires id from req.params
export{
    postsRouter
}