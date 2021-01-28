const mongoose = require('mongoose')
const Schema =mongoose.Schema;

const Countvisschema = new Schema({
    _id : {
        type:Number
    },
    countvisitors : {
        type: Number
    }
})

module.exports=Countvis=mongoose.model("Countvis",Countvisschema)

