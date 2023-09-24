const { Sequelize } = require('sequelize')
const config = require('./config.json')
// 'postgres://user:pass@example.com:5432/dbname'

const { database , dialect , host , password , username } = config.development
 
const url = `${dialect}://${username}:${password}@localhost:5432/${database}`
const sequelize = new Sequelize(url,{ logging:false})



const connectDB = async () => {
    try {
        // await sequelize.authenticate()
        await sequelize.sync({alter:true})
        console.log('conectado a la base de datos');
    } catch (error) {
        console.log(error.message);
        console.log('ups');
    }
}


module.exports = { connectDB , sequelize  }