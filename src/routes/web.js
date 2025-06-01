const express = require('express');
const { getHomepage, getABC, getTest, portCreateUser } = require('../controllers/homeController');
const router = express.Router();

// router.Method('/route', handler)

router.get('/', getHomepage);

router.get('/abc', getABC);

router.get('/test', getTest);

router.post('/create-user',portCreateUser);
module.exports = router;