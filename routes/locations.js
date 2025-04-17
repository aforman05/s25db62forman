var express = require('express');
const location_controllers= require('../controllers/location');
var router = express.Router();

/* GET locations page. */
router.get('/', location_controllers.location_view_all_Page );
module.exports = router;

// GET request for a location.
router.get('/:id', location_controllers.location_detail);

//Post request for a location
router.post('/:id', location_controllers.location_update_put);

//Delete request for a location
router.delete('/:id', location_controllers.location_delete);

//Get detail location page
router.get('/detail', location_controllers.location_view_one_Page);