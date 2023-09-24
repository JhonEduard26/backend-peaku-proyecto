const { check , body , validationResult } = require('express-validator')




const validateData = ( req , res , next ) => {
    try {
        validationResult(req).throw()
        next()
    } catch (error) {
        console.log(error.array());
        return res.status(400).json({succes:false, msg:'error en la validacion'})       
    }
}

const validatefieldPost = [
    body('nombre').isString().isLength({min: 2}).withMessage('logitud minima de 2'),  
    body('comentario').isString().isLength({min: 2}).withMessage('logitud minima de 10').exists(),  
    (req , res , next ) => {
        // console.log(req.body);
        validateData(req , res , next)
    } 
]

module.exports = {
    validatefieldPost
}