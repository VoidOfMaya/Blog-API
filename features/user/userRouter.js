import { Router } from "express";
import { getCurrentUser, makeUserAnAuthor } from "./userController.js";

const userRouter = Router();
//todo: segregate data-flow based on roleId 
userRouter.get('/',getCurrentUser)
userRouter.put('/',makeUserAnAuthor)

export{
    userRouter
}