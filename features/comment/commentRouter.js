import { Router } from "express";
//thie rout is user only
//can
// create comment per postid through POST /post/:postId/comment
// edit comment per post id through PUT /post/:postId/comment
// delete comment per post id through DELTE /post/:postId/comment
const commentRouter = Router();

commentRouter.post('/comments',(req, res)=>{
    res.json({messgae: 'comment router accessed!'})
})

export{
    commentRouter
}