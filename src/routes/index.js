const { Router } = require('express')

const route = Router()

route.use('/site' , require('./site'))
route.use('/post' , require('./post'))

module.exports = route