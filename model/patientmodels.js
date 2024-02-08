const mongoose=require("mongoose")

const patientScheme=new mongoose.Schema(
    {
        patientName:String,
        patientPhone:String,
        patientAddress:String,
        patientSymptoms:String,
        patientStatus:String
    }
)

module.exports=mongoose.model("plce",patientScheme)