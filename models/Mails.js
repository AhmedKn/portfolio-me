const mongoose = require("mongoose")
const Schema = mongoose.Schema

const MailsSchema =new Schema({
    firstname : {
        type : String
    },
    lastname : {
        type : String
    },
    email : {
        type : String
    },
    subject : {
        type : String
    },
    message : {
        type : String
    }
})

module.exports=Custmails=mongoose.model("Custmails",MailsSchema)