var express = require('express');
var router = express.Router();
var ctrl = require('../controllers/officialhost-application');
var {uploadOfficialHostDocs} = require('../services/multer');

/* GET users listing. */
router.post('/officialHost',uploadOfficialHostDocs.any(),ctrl.createOfficialHost)
router.post('/upload',uploadOfficialHostDocs.single('image'),ctrl.uploadImage)

module.exports = router;