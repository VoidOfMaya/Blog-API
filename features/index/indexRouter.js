//allows any user to do the following:
//view all posts by title (homepage) GET/
//view single post content and its comments by id GET/post/:postid
import { getPosts, getPostById } from "./indexController.js";
import { Router } from "express";
import { midware } from "../middleWareOrchestrator.js";
import { commentRouter } from "../comment/commentRouter.js";
import { validateId } from '../../validations/indexValidation.js'

const indexRouter = Router({mergeParams: true});

indexRouter.get('/', getPosts);
indexRouter.get('/:id',validateId,getPostById);
indexRouter.use('/:postId/comment',midware.isAuthenticated, validateId, commentRouter);

export{
    indexRouter
}