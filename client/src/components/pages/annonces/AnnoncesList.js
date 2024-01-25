import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import  {getAnnonces}  from '../../../redux/actions/actionservice'
import AnnoncesCard from './AnnoncesCard'
import "./card-style.css"

function AnnoncesList() {
  const dispatch=useDispatch()
 
useEffect(()=>dispatch(getAnnonces()),[])

const listannonces=useSelector((state)=>state.annonces.annonces.annonces)
console.log(listannonces,"test")

  return (
    <div   className="wrapper">
     {listannonces && listannonces.map((el)=>{
      return (
       <AnnoncesCard el={el} />)
      
      })}
    </div>
  )
}

export default AnnoncesList


