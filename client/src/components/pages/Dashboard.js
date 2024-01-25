import React ,{ useState,useEffect } from 'react'
import { useSelector } from 'react-redux';
import AnnoncesListhome from './annonces/annoncelisthome';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
const user=useSelector((state)=>state.auth.user.role)
console.log(user,"roleUserrrrrrrrr")
const navigate=useNavigate()
useEffect(()=> {user==="annoncer" && navigate("/DashboardAnnoncer")})
    return (
      
      <div>
       <AnnoncesListhome />
  
      </div>
    );
  }

export default Dashboard
