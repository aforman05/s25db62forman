var express = require('express');
const location_controllers= require('../controllers/location');
var router = express.Router();

/* GET locations page. */
router.get('/', location_controllers.location_view_all_Page );
module.exports = router;

//Post request for a location
router.post('/:id', location_controllers.location_update_put);

//Delete request for a location
router.delete('/:id', location_controllers.location_delete);

//Get detail location page
router.get('/detail/:id', location_controllers.location_view_one_Page);

//Get create location page
router.get('/create', location_controllers.location_create_Page);

/* GET create update page */
router.get('/update/:id', location_controllers.location_update_Page);

// GET request for a location.
router.get('/:id', location_controllers.location_detail);