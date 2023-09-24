const { DataTypes } = require('sequelize')
const { sequelize } = require('../db/sequelize')


// definimos modelos

const Site = sequelize.define('Site',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    ciudad: {
        type: DataTypes.STRING,
        allowNull: false
    },
    pais: {
        type: DataTypes.STRING,
        allowNull:false
    },
    precio:{
        // type:DataTypes.DECIMAL({precision:2}),
        type:DataTypes.DECIMAL,
        allowNull:false
    },
    urlImage:{
        type:DataTypes.STRING
    },
    valoracion:{
        type: DataTypes.DECIMAL
    }

})

// console.log(Site === sequelize.models.Site); // true

module.exports = { Site}