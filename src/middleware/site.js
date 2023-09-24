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

const validatefieldSite = [
    body('ciudad').isString().isLength({min: 2}).withMessage('logitud minima de 2'),  
    body('pais').isString().isLength({min: 2}).withMessage('logitud minima de 2'),  
    body('precio').isNumeric().withMessage('debe ser un valor numerico valido') ,
    (req , res , next ) => {
        // console.log(req.body);
        validateData(req , res , next)
    } 
]

module.exports = {
    validatefieldSite
}