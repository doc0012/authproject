const express=require("express")
const router=express.Router()
const Annonce=require("../models/annonce")
const isAdmin=require('../middleweares/isadmin')
const isAuth = require("../middleweares/isAuth")
const isAnnoncer=require("../middleweares/isannoncer")

//testt 
router.get("/",(req,res)=>{
    res.send("helloooooooo")
})

//add annonce
router.post('/add',isAuth,isAnnoncer,async(req,res)=>{
    console.log(req.body,"hellooooo")
    const {image,field,description,rating,price,offer}=req.body
    
    const newannonce=new Annonce({
        image,field,description,rating,price,offer
    })
   
  const annonce= await newannonce.save()

  res.send({msg:"annonce added",annonce})
    
})
//delete annonce
router.delete("/delete/:_id",isAuth,isAnnoncer,async(req,res)=>{
    const {_id}=req.params
    const annonce= await Annonce.findOneAndDelete({_id})
    res.send({msg:"annonce deleted",annonce})
})

//edit annonce

router.put("/edit/:_id",isAuth,isAnnoncer,async(req,res)=>{
    const{_id}=req.params
    const annonce=await Annonce.findByIdAndUpdate({_id},{$set:req.body},{new:true})
    res.send({msg:"annonce edited",annonce})
})
//fetch data
router.get("/getall",async(req,res)=>{
    const annonces=await Annonce.find()
    res.send({msg:"annonce fetched",annonces})
})


module.exports=router