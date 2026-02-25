import { body,params } from "express-validator";

const register =[
    body('email').trim().notEmpty().withMessage('Email is a required field')
                 .isEmail().withMessage('Please provide a valid email address')
                 .normalizeEmail(),

    body('firstName').trim().notEmpty().withMessage('first name is required')
                     .matches(/^[A-Za-z\s'-]+$/).withMessage('can only contain letters, spaces, hyphens, apostrophes')
                     .isLength({min: 3, max: 12}).withMessage('range must be between 3- 12 characters'),

    body('lastName').trim().notEmpty().withMessage('last name is required')
                    .matches(/^[A-Za-z\s'-]+$/).withMessage('can only contain letters, spaces, hyphens, apostrophes')
                    .isLength({min: 3, max: 12}).withMessage('range must be between 3- 12 characters'),

    body('password').trim().notEmpty().withMessage('password is required')
                    .isLength({min:8}).withMessage('password must atleast be 8 letters')
                    .matches(/^[A-Za-z0-9\s.,!?@#$_-]+$/).withMessage('can only contain letters'),
    //validates confirmpasswored against password
    body('confirmPassword').trim().notEmpty().withMessage('password is required')
                           .custom((password, {req}) =>{
                                        const ogPass = req.body.password
                                        if(password !== ogPass){
                                            throw new Error('passwords do not match');
                                        }
                                        return true;
                                    })
]
const login =[
    body('').trim().notEmpty().withMessage('username is required')
            .isAlphanumeric().withMessage('username can only contain letters and numbers')
            .isLength({min:4, max: 20}).withMessage('username out of range!'),

    body('').trim().notEmpty().withMessage('password is required')
            .isLength({min:8}).withMessage('password must atleast be 8 letters')
            .matches(/^[A-Za-z0-9\s.,!?@#$_-]+$/).withMessage('can only contain letters, numbers, hyphens, apostrophes'),

]
export{
    register,
    login
}