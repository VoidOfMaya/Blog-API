import { param } from "express-validator";

const validateId = [
    param('id').trim().notEmpty().withMessage('id parameter is required')
    .isInt().withMessage('id must be a number'),
]
const commentValidation =[
    param('postId').trim().notEmpty().withMessage('id parameter is required')
    .isInt().withMessage('id must be a number'),
]
export{
    validateId,
    commentValidation
}