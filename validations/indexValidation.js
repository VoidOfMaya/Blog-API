import { param } from "express-validator";

const validateId = [param('id').trim().notEmpty().withMessage('id parameter is required')
    .isNumeric().withMessage('id must be a number'),
param('postId').trim().notEmpty().withMessage('id parameter is required')
    .isNumeric().withMessage('id must be a number')]
export{
    validateId
}