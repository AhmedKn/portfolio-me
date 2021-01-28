const express = require("express")

const router=express.Router()
const Accounts = require("../models/Accounts")
const Custmails = require('../models/Mails')
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const passport=require("passport")
const Buy=require("../models/buy")
const Countvis=require("../models/counter.js")
const Adress=require('../models/adress.js')


//admin sign-up
router.post("/ahmed55016312admin/signup",(req,res)=>{
    const {
        name,
        password ,
        email ,
         } = req.body
    
Accounts.findOne({email}).then((account) =>{
    if (account) return res.sendStatus(409);
    else {
        const accounts = new Accounts({
            password ,
            email ,
            name,
        })

        //crypt the code
        bcrypt.genSalt(10 , (err , salt) =>{
            bcrypt.hash(password , salt ,(err,hash)=>{
                accounts.password=hash;
                accounts.save()
                .then((newacc) => res.json(newacc))
                .catch((err) => console.error(err))
            })
        })

    }
  
})
    .then(result => console.log(result))
    .catch(err => console.log(err))
    })
    //login user
    router.post("/ahmed55016312admin/login" , (req , res)=>{
        const {name , email , password} = req.body;

        Accounts.findOne({email}).then(user =>{
            if(!user) res.sendStatus(404)
            else {
                bcrypt.compare(password,user.password)
                .then(isMatched =>{
                    if (isMatched){
                        const payload={id:user._id ,name : user.name, email : user.email}
                        jwt.sign(payload , "session" , {expiresIn:3600}, (err ,token)=>{
                            if(err) {
                                res.sendStatus(500)
                                }
                            else {
                                res.json({token : token})
                            }
                        })
                    }else{
                        res.sendStatus(400)
                    }
                })
            }
        }).catch(err => res.send('server error'))
    })

    // validate token
router.get("/ahmed55016312admin/validate" , passport.authenticate("jwt" , {session:false}) ,(req,res)=>{
    res.send(req.user)
})
//send mail
router.post("/mail",(req , res) =>{
    const {fnameCont , lnameCont , emailCont , subjectCont , messageCont} = req.body;
    custom = new Custmails({firstname:fnameCont,lastname:lnameCont,email:emailCont,subject:subjectCont,message:messageCont});

    custom.save().then((cust) => res.json(cust)).catch(error => res.sendStatus(400))
})
//order web
router.post("/buyweb",(req,res)=>{
    const {webOrder,PriceOrder,tech,name,email,message} = req.body;

     custbuy = new Buy({webtype:webOrder,Price:PriceOrder,tech:tech,name:name,email:email,message:message})

     custbuy.save().then(buy => res.json(buy)).catch(error => res.sendStatus(400))
})
//show mails
router.get('/showmails',(req,res) =>{
    Custmails.find({}).then(data =>res.send(data)).catch(err => res.sendStatus(404))
})
//show orders
router.get("/showorders",(req,res)=>{
    Buy.find({}).then(data => res.send(data)).catch(err => res.sendStatus(404))
})
router.delete(`/deletemail/:id`,(req ,res)=>{
    var id=req.params.id
Buy.findByIdAndDelete({_id : id})
.catch(err => console.error(err))
})
router.delete(`/deletecustommail/:id`,(req ,res)=>{
    var id=req.params.id
Custmails.findByIdAndDelete({_id : id})
.catch(err => console.error(err))
})

router.put("/count",(req,res)=>{
    Countvis.findOneAndUpdate({_id : 1} , {$inc:{countvisitors : 1},new:true}).then(data => {if (data === null){
        Countvis({_id : 1 , countvisitors : 1}).save().then(cnt => res.json(cnt)).catch(err => console.error(err))
    }
else{
    res.json(data)
}}).catch(err => console.error(err))
})
router.get("/showvisitors",(req,res)=>{
    Countvis.findOne({_id : 1}).then(data => res.send(data)).catch(err => res.sendStatus(404))
})
router.post('/addadress',(req,res)=>{
    const {IPv4,city,country_code,country_name,latitude,longitude,state}=req.body;
    const address = new Adress({IPv4:IPv4,city:city,country_code:country_code,country_name:country_name,latitude:latitude,longitude:longitude,state:state})
    address.save().then(ad => res.json(ad)).catch(err => console.error())
})
router.get("/showadresses",(req,res)=>{
    Adress.find({}).then(data => res.send(data)).catch(err => res.sendStatus(404))
})
router.delete("/deleteadress/:id",(req,res)=>{
    const id = req.params.id;
    Adress.findOneAndDelete({_id : id }).catch(err => console.error(err))
})
module.exports = router
