const mongoose=require("mongoose")
const schema=mongoose.Schema

const AnnonceSchema=new schema({
    image:{
        type:String
    },
    field:{
        type:String
    },
    description:{
        type:String

    },
    rating:{
        type:String
    },
    price:{
        type:String
    },
    offer:{
        type:String
    },

})

module.exports=Annonce=mongoose.model("annonces",AnnonceSchema)