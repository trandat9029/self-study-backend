const express = require('express');
const { getHomepage, portCreateUser, getCreateUser, getUpdateUser, portUpdateUser, postDeleteUser, postRemoveUser } = require('../controllers/homeController');
const router = express.Router();

// router.Method('/route', handler)

router.get('/', getHomepage);

router.get('/create',getCreateUser);

router.get('/update/:id',getUpdateUser);

router.post('/create-user',portCreateUser);

router.post('/update-user',portUpdateUser);

router.post('/delete-user/:id', postDeleteUser);

router.post('/delete-user', postRemoveUser);



module.exports = router;