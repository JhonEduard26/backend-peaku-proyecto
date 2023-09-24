const { Router } = require('express')
const { uploadImage } = require('../helpers/nulter');
const { getUrlimage } = require('../services/cloudinary');
const { Site  , Post} = require('../models/index');
const { removeImage } = require('../helpers/removeImage');
const { createSite, getAllSites } = require('../controllers/site');
const { validatefieldSite } = require('../middleware/site');


const router = Router()

router.post('/create',uploadImage(), validatefieldSite, createSite )

router.get('/' , getAllSites)

module.exports = router