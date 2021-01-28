const mongoose = require("mongoose")
const Schema = mongoose.Schema

const AccountsSchema =new Schema({
    name : {
        type : String
    },
    email : {
        type : String
    },
    password : {
        type : String
    }
})

module.exports=Accounts=mongoose.model("Accounts",AccountsSchema)
