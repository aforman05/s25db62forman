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
exports.location_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await Location.findById( req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
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
// Handle Location delete on DELETE.
exports.location_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await Location.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
};
// Handle Location update form on PUT.
exports.location_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Location.findById(req.params.id)
        // Do updates of properties
        if(req.body.longitude) toUpdate.longitude = req.body.longitude;
        if(req.body.latitude) toUpdate.latitude = req.body.latitude;
        if(req.body.climate) toUpdate.climate = req.body.climate;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
    }
};

// Handle a show one view with id specified by query
exports.location_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.params.id)
    try{
        result = await Location.findById( req.params.id)
        res.render('locationdetail', { title: 'Location Detail', toShow: result });
    } catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
};