var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var location_controller = require('../controllers/location');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// LOCATION ROUTES ///
// POST request for creating a Location.
router.post('/location', location_controller.location_create_post);
// DELETE request to delete Location.
router.delete('/location/:id', location_controller.location_delete);
// PUT request to update Location.
router.put('/location/:id', location_controller.location_update_put);
// GET request for one Location.
router.get('/location/:id', location_controller.location_detail);
// GET request for list of all Location items.
router.get('/location', location_controller.location_list);
module.exports = router;
