import { GET_ANNONCES} from "../actionTypes"
import axios from "axios"

export const getAnnonces=()=>(dispatch)=>{
axios.get("http://localhost:5001/api/annonce/getall")
.then((res)=>dispatch({type:GET_ANNONCES,payload:res.data}))
.catch((err)=>console.log(err))
}

export const deleteAnnonce=(idAnnonce)=>async(dispatch)=>{

    try{

        const config={
            headers:{
               'x-auth': localStorage.getItem('token'),
            }
        }
   const res=await  axios.delete(`http://localhost:5001/api/annonce/delete/${idAnnonce}`,config)
   dispatch(getAnnonces())
    }catch(error){
        console.log(error)
    }

}

export const addAnnonce=(newAnnonce)=>async(dispatch)=>{

    try{

        const config={
            headers:{
               'x-auth': localStorage.getItem('token'),
           
            }
        }

    const res=await axios.post("http://localhost:5001/api/annonce/add",newAnnonce,config)
    dispatch(getAnnonces())
}catch(error){
    console.log(error)
}
}
export const editAnnonce=(idAnnonce,editedAnnonce)=>async(dispatch)=>{

    try{

        const config={
            headers:{
               'x-auth': localStorage.getItem('token'),
           
            }
       
       
               }
    const res=await axios.put(`http://localhost:5001/api/annonce/edit/${idAnnonce}`,editedAnnonce,config)
    dispatch(getAnnonces())
}catch(error){
    console.log(error)
}
}