const express = require('express');
const { route } = require('./company');
const router = express.Router();

const companies = require('./company');
const founders = require('./founder');



router.use('/companies', companies);
router.use('/founders', founders);

module.exports = router;