const { response } = require("express");
const { Post, Site } = require("../models");

const createPost = async( req , res = response )=> {
    try {
        const post = await Post.create(req.body)
        
        return res.status(200).json(post)
    } catch (error) {
        console.log(error.message);
        return res.status(400).json({succes:false , msg : error.message})
    }
}

const getAllPosts = async ( req , res ) => {
    try {
        const allPost = await Post.findAll({ include:{
            model:Site,
            // attributes:['valoracion']
        }})

        res.json({success:true , data : allPost})
    } catch (error) {
        res.status(400).json({success:false , msg : error.message})
    }
}
module.exports = {
    createPost , 
    getAllPosts
}