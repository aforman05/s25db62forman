var express = require('express');
const location_controllers= require('../controllers/location');
var router = express.Router();
var passport = require('passport');

// A little function to check if we have an authorized user and continue on or
// redirect to login.
const secured = (req, res, next) => {
    if (req.user){
        return next();
    }
    res.redirect("/login");
}

/* GET locations page. */
router.get('/', location_controllers.location_view_all_Page );
module.exports = router;

//Post request for a location
router.post('/:id', location_controllers.location_update_put);

//Delete request for a location
router.delete('/:id', secured, location_controllers.location_delete);

//Get detail location page
router.get('/detail/:id', location_controllers.location_view_one_Page);

//Get create location page
router.get('/create', secured, location_controllers.location_create_Page);

/* GET create update page */
router.get('/update/:id', secured, location_controllers.location_update_Page);

// GET request for a location.
router.get('/:id', location_controllers.location_detail);

router.post('/login', passport.authenticate('local'), function(req, res) {
    res.redirect('/');
});