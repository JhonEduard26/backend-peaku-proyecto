const { Router } = require('express')
const { Post, Site } = require('../models')
const { createPost, getAllPosts } = require('../controllers/post')
const { validatefieldPost } = require('../middleware/post')

const router = Router()

router.post('/create',validatefieldPost ,createPost)


router.get('/', getAllPosts )
module.exports = router