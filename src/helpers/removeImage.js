const fs = require('fs')

/**
 * 
 * @param {*} path
 * ult de la imagen a eliminar 
 */

const removeImage = ( path) => {
    if ( !fs.existsSync(path)){
        throw 'el archivo no existe'
    }
    fs.unlinkSync(path)
}

module.exports = {
    removeImage
}