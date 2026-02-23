import {Router} from 'express';
import {createUser, login, logout} from "./authControllers.js"

const authRouter = Router();


authRouter.post('/register',createUser)
authRouter.post('/login', login);
authRouter.post('/logout', logout)

export{
    authRouter
}