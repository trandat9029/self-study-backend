const express = require('express');
const { getHomepage, portCreateUser, getCreateUser, getUpdateUser, portUpdateUser } = require('../controllers/homeController');
const router = express.Router();

// router.Method('/route', handler)

router.get('/', getHomepage);

router.get('/create',getCreateUser);

router.get('/update/:id',getUpdateUser);

router.post('/create-user',portCreateUser);
router.post('/update-user',portUpdateUser);
module.exports = router;