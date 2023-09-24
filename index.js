const express = require('express')
const {  connectDB } = require('./src/db/sequelize')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }));


app.use(cors({origin:'*'}))
app.use('/', require('./src/routes/index'))



const main=  async() => {
    await connectDB()
    app.listen(process.env.PORT, ()=> {
        console.log(`http://localhost:${process.env.PORT}`);
    })
}


main()