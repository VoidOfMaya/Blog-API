import { Router } from "express";
import{
    createComment,
    updateComment,
    deleteComment
} from './commentController.js'
//thie rout is user only
//can
// create comment per postid through POST /post/:postId/comment
// edit comment per post id through PUT /post/:postId/comment
// delete comment per post id through DELTE /post/:postId/comment
const commentRouter = Router({mergeParams: true});
//create comment,//takes userId, postId, content
commentRouter.post('/', createComment)
//edit comment, //takes postId, content
commentRouter.put('/:id',updateComment)
//delete comment,// takes commentId
commentRouter.delete('/:id',deleteComment)
export{
    commentRouter
}