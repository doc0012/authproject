import React from 'react'
import Editannonce from '../crudfront/Editannonce';
import { useDispatch } from 'react-redux';
import { deleteAnnonce } from '../../../redux/actions/actionservice';
import './card-style.css';
import ReactStars from "react-stars";
import { Button } from 'reactstrap';

function AnnoncesCard({el}) {
const dispatch=useDispatch()
  const deleteann=()=>{
    dispatch(deleteAnnonce(el._id))
  }

  return (
    <div className="screen-2">
  <div className="top-image">
          <img src={el.image} alt="poster" />
        </div>
  
        <div className="main-heading">
          <h1 className="title">{el.offer}</h1>
          <div className="row">
            {
              <ReactStars
                count={5}
                size={15}
                color2={"#ffd700"}
                value={el.rating}
                edit={false}
              />
            }
  
            
          </div>
        </div>
  
        <div className="categories">
          <a className="active">
            {el.price}
            </a>
      </div>

      <p className="description">{el.description}</p>
      <div className="btn-play">
      <span>
          {" "}
          <Button onClick={deleteann} className="icon" >delete</Button>{" "}
        </span>
        
        
      </div>
      
      <div className="btn-play">
      <span>
          {" "}
          <Button className="btn-play" >< Editannonce el={el} /></Button>
          {" "}
        </span>
          </div>
      </div>
     


    
     
   
   
  )
}

export default AnnoncesCard