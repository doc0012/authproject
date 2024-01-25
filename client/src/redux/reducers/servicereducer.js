
import {GET_ANNONCES} from "../actionTypes"
const initState={
    annonces:[]
}
 const annoncereducer=(state=initState,action)=>{
    switch (action.type) {
        case GET_ANNONCES:
            return {...state,
              annonces:action.payload
            }
      
    
        default:
            return state
         
    }
}
export default annoncereducer

