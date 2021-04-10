const express = require('express');
const { route } = require('./company');
const router = express.Router();

const companies = require('./company');
const founders = require('./founder');
const country = require('./country');


router.use('/companies', companies);
router.use('/founders', founders);
router.use('/countries', country);

module.exports = router;