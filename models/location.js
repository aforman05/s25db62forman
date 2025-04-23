const mongoose = require("mongoose")
const locationSchema = mongoose.Schema({
longitude: {
    type : Number,
    required : true,
    min : -180,
    max : 180,
},
latitude: {
    type : Number,
    required : true,
    min : -180,
    max : 180,
},
climate: {
    type : String,
    required : true,
}
})
module.exports = mongoose.model("locations",
locationSchema)