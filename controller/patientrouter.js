const express=require("express")
const patientmodels = require("../model/patientmodels")

const router=express.Router()

router.post("/add",async(req,res)=>{
    let data=req.body
    let patient=new patientmodels(data)
    let result=await patient.save()
    res.send({status:"success"})
})

router.get("/view",async(req,res)=>{
    let data=await patientmodels.find()
    res.json(data)
})

router.post("/search",async(req,res)=>{
    let input=req.body
    let data=await patientmodels.find(input)
    res.json(data)
})




module.exports=router