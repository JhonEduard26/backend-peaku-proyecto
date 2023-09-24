const { DataTypes } = require("sequelize");
const { sequelize } = require("../db/sequelize");
const { Site } = require('./Site');


const Post = sequelize.define('Post',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    nombre:{
        type: DataTypes.STRING,
        allowNull:false
    },
    comentario:{
        type:DataTypes.STRING,
        allowNull:false
    }
})


Site.hasMany(Post)

Post.belongsTo(Site)

module.exports = { Post } 