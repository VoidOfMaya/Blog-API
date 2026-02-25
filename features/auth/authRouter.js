import {Router} from 'express';
import {createUser, userLogin, logout} from "./authControllers.js"
import { register, login } from '../../validations/userValidation.js';

const authRouter = Router();


authRouter.post('/register',register,createUser)
authRouter.post('/login',login, userLogin);
//authRouter.post('/logout', logout)

export{
    authRouter
}