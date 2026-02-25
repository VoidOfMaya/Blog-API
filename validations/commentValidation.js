import { body, param } from "express-validator";

//create comment,//takes userId, postId, content
const validateNewComment = [
    body('content').trim().notEmpty().withMessage('comment can not be empty!')
    .isLength({min: 1, max: 500}).withMessage('comment must b e between 1 - 500 characters'),

    param('postId').trim().notEmpty().withMessage('id parameter is required')
    .isNumeric().withMessage('id must be a number')
]

//edit comment, //takes /:postId, content
const validateCommentEdit = [
    body('content').trim().notEmpty().withMessage('comment can not be empty!')
    .isLength({min: 1, max: 500}).withMessage('comment must b e between 1 - 500 characters'),

    param('id').trim().notEmpty().withMessage('id parameter is required')
    .isNumeric().withMessage('id must be a number')
]

//delete comment,// takes /:commentId
const valiatecommentDelete =[
    param('id').trim().notEmpty().withMessage('id parameter is required')
    .isNumeric().withMessage('id must be a number')
]
export {
    validateNewComment,
    validateCommentEdit,
    valiatecommentDelete

}
