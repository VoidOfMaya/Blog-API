import {Router} from 'express';
import {createUser, userLogin, logout} from "./authControllers.js"

const authRouter = Router();


authRouter.post('/register',createUser)
authRouter.post('/login', userLogin);
authRouter.post('/logout', logout)

export{
    authRouter
}