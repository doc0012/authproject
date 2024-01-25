import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import  {getAnnonces}  from '../../../redux/actions/actionservice'
import AnnoncesCardhome from './Annoncecardhome'
import "./card-style.css"

function AnnoncesListhome() {
  const dispatch=useDispatch()
 
useEffect(()=>dispatch(getAnnonces()),[])

const listannonces=useSelector((state)=>state.annonces.annonces.annonces)
console.log(listannonces,"test")

  return (
    <div className="wrapper">
     {listannonces && listannonces.map((el)=>{
      return (
       <AnnoncesCardhome el={el}/>)
      
      })}
    </div>
  )
}

export default AnnoncesListhome