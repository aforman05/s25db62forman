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
// VIEWS
// Handle a show all view
exports.location_view_all_Page = async function(req, res) {
    try{
        theLocations = await Location.find();
        res.render('locations', { title: 'Location Search Results', results: theLocations });
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
exports.location_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Location();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.longitude = req.body.longitude;
    document.latitude = req.body.latitude;
    document.climate = req.body.climate;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
};
// Handle Costume delete from on DELETE.
exports.location_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Location delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.location_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Location update PUT' + req.params.id);
};
