//allows any user to do the following:
//view all posts by title (homepage) GET/
//view single post content and its comments by id GET/post/:postid
import { getPosts, getPostById } from "./indexController.js";
import { Router } from "express";

const indexRouter = Router();

indexRouter.get('/', getPosts);
indexRouter.get('/post/:id',getPostById);

export{
    indexRouter
}