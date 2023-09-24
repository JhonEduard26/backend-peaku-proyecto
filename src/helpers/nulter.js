const multer = require('multer')
const { resolve, join } = require('path')


const storage = multer.diskStorage({
    destination: (req , file , cb )=> {
        let path = join(__dirname,'../upload')
      
        cb(null,path)
    },
    filename:(req , file , cb) => {
     
        cb(null, file.originalname)
    }
})



const upload = multer({storage })



const uploadImage = () => {
   return upload.single('image')
}


module.exports = {
    uploadImage
}