var express = require('express');
const location_controllers= require('../controllers/location');
var router = express.Router();

/* GET locations page. */
router.get('/', location_controllers.location_view_all_Page );
module.exports = router;
