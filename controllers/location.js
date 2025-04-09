var Location = require('../models/location');
// List of all Costumes
exports.location_list = async function(req, res) {
    try{
    theLocations = await Location.find();
    res.send(theLocations);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
};
// for a specific Costume.
exports.location_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Location detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.location_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Location create POST');
};
// Handle Costume delete from on DELETE.
exports.location_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Location delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.location_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Location update PUT' + req.params.id);
};
