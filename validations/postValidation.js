import { body, param} from 'express-validator'

const validatePostContent=[
    body('title').trim().isLength({min: 0, max: 100}).withMessage('post must b e between 1 - 100 characters'),

    body('content').trim().isLength({min: 0, max: 15000}).withMessage('post must b e between 1 - 100 characters')
]

const validatePostId=[
    param('id').trim().notEmpty().withMessage('id parameter is required')
    .isNumeric().withMessage('id must be a number')
]

export{
    validatePostContent,
    validatePostId,
}

