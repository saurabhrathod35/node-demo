var express = require('express');
var router = express.Router();
const userRoute = require('../controllers/users');
/* GET users listing. */
router.route('/')
    .get(userRoute.find)
    .post(userRoute.create);

router.route('/custom').get(userRoute.custom);

router.route('/:userId/permission')
    .post(userRoute.permissionsCreate)
    .get(userRoute.getBypermissions);

router.route('/:userId')
    .get(userRoute.findById)
    .patch(userRoute.find);

module.exports = router; 