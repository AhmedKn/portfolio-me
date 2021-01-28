const mongoose = require("mongoose")
const connectDB=()=>{
    console.log("connect");
    mongoose.connect(process.env.MONGO_URI || "mongodb+srv://ahmedkn2000:xmeMh1pIO4IgwANJ@portfolio.n884d.mongodb.net/Portfolio?retryWrites=true&w=majority",{ useNewUrlParser: true , useFindAndModify: false ,useUnifiedTopology: true })
    .then(()=> console.log("mongoose connected"))
    .catch(err => console.log(err))

    mongoose.connection.on('connected' , ()=>{
        console.log("mongoose connected success!");
    })
}

module.exports = connectDB