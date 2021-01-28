const mongoose = require("mongoose")
const Schema = mongoose.Schema;


const buySchema = new Schema({
    webtype: {
        type:String
    },
    Price : {
        type:String
    },
    tech:{
        type:String
    },
    name:{
        type:String
    },
    email:{
        type:String
    },
    message:{
        type:String
    },

})

module.exports=Buy=mongoose.model("Buy",buySchema)