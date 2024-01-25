import React from 'react'
import ReactStars from "react-stars";
import './card-style.css';



function AnnoncesCardhome({el}) {  
    
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
          <ion-icon className="icon" ></ion-icon>{" "}
        </span>
        book
      </div>
      
      </div>
       
       
      )
    }
    
    export default AnnoncesCardhome