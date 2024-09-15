import React from 'react';
import './Card.css'; // Import the CSS file for styles
import { useState } from 'react';
const Card = ({id , data ,image, price, name, info , removecard}) => {
  const [readmore,setReadmore] = useState(false);
  const description = readmore ? info : info.substring(0,200);
  function readmorehandler(){
    setReadmore(!readmore);
  }
  return (
    <div className="card">
  
      <div className="image-container">
        <img src={image} alt={`${name} Image`} className="card-image" />
      </div>

     
      <div className="card-content">
   
        <div className="price">₹ {price}</div>

     
        <h2 className="city-name">{name}</h2>


        <p className="description">
          {description}...
          <span className='butt' onClick={readmorehandler}> {readmore? 'Show less' : 'Read more'} </span>
        </p>
      </div>

      
      <div className="card-footer">
        <button onClick={()=>{removecard(id)}} className="not-interested-btn">Not Interested</button>
      </div>
    </div>
  );
};

export default Card;
