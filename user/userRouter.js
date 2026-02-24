import { Router } from "express";
import { isAuthenticated } from "../auth/authMiddleware.js";
import { getCurrentUser } from "./userController.js";

const userRouter = Router();
//todo: segregate data-flow based on roleId 
userRouter.get('/',isAuthenticated,getCurrentUser)

export{
    userRouter
}