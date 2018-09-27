const Permission = require('../controllers/permissions');
const express = require('express');
const router = express.Router();
router.route('/')
    .get(Permission.find)
    .post(Permission.create)


router.route('/user/:permissionId')
    .get(Permission.finduserBypermission)


router.route('/:permissionId')
    .get(Permission.findOne)


module.exports = router;