const mongoose=require('mongoose')
const Schema=mongoose.Schema;

const Adressschema = new Schema({
    IPv4:{
        type:String
    },
    city:{
        type:String
    },
    country_code:{
        type:String
    },
    country_name:{
        type:String
    },
    latitude:{
        type:Number
    },
    longitude:{
        type:Number
    },
    state:{
        type:String
    }

})

module.exports=Adress=mongoose.model("Adress",Adressschema)