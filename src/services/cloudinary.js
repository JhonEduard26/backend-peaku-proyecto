const  cloudinary = require('cloudinary').v2


cloudinary.config({
    cloud_name:'dzw75kog5',
    api_key:'634638793962139',
    api_secret: 'CB2dEPofPh5jsipA-ypvhWVWUBM',
    secure: true
})



const getUrlimage = async(imgPath) => {
    try {
        const result = await cloudinary.uploader.upload(imgPath)
        console.log(result);
        return result
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    getUrlimage
}