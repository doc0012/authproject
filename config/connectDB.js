const mongoose=require("mongoose")

connectDB=()=>{
    mongoose.connect("mongodb://127.0.0.1:27017/mo")
    .then(()=>console.log("mongoDB connected ..."))
    .catch((err)=>console.log(err))
}

module.exports=connectDB