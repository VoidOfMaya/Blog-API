import { Router } from "express";

const commentRouter = Router();

commentRouter.post('/',(req, res)=>{
    res.json({messgae: 'comment router accessed!'})
})

export{
    commentRouter
}