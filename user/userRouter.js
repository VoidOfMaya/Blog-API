import { Router } from "express";
import { isAuthenticated } from "../auth/authMiddleware.js";

const userRouter = Router();

userRouter.get('/',isAuthenticated,(req, res)=>{
    const sanitizedUser = {
        id: req.user.id,
        email: req.user.email,
        firstName: req.user.firstName,
        lastName: req.user.lastName,
        roleId: req.user.roleId

    }
    res.status(200).json({user: sanitizedUser});
})

export{
    userRouter
}