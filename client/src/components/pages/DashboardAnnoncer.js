import React from 'react'
import AnnoncesList from './annonces/AnnoncesList';
import Addannonce from './crudfront/Addannonce';

function DashboardAnnoncer() {
  return (
    <div>
<div>
 <Addannonce />
 </div>


 <div>
 <AnnoncesList />
 </div>
    </div>
  )
}

export default DashboardAnnoncer
