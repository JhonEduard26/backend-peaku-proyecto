const { response } = require('express')
const { getUrlimage } = require('../services/cloudinary')
const { Site, Post } = require('../models')
const { removeImage } = require('../helpers/removeImage')

const createSite = async(req , res = response )=>{
    try {
        console.log(req.body.ciudad);
        console.log('llegue aca');
        return
        const { path } = req.file
        const {url} = await getUrlimage(path)
        removeImage(path)
        const { image , ...body} = req.body
        body.urlImage = url
        const site = await Site.create({...body})
        return res.status(201).json({success:true , data : site})
    } catch (error) {
        console.log(error.message);
        return res.status(400).json({ success: false, msg:error.message})
    }

}

const getAllSites = async( req , res = response) => {
    try {
        const allSites = await Site.findAll({include:Post})
        if (!allSites.length) 
            return res.status(200).json({ success: true , data : [] , msg:'no hay sites en bd'})
        return res.status(200).json({ success: true , data : allSites})
    } catch (error) {
       console.log(error.message);
       return res.status(400).json({succes:false , msg: error.message}) 
    }
}

module.exports = {
    createSite,
    getAllSites
}