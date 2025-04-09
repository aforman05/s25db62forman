const mongoose = require("mongoose")
const locationSchema = mongoose.Schema({
longitude: Number,
latitude: Number,
climate: String
})
module.exports = mongoose.model("locations",
locationSchema)