import React from "react";
import Card from "./Card";
import  "./Tours.css"

 function Tours({tours , removecard}){
   return(
        <div className="wrapper">
            <div className="heading">
            <div className="heading-text">Plan With Abhinav</div>
            </div>
            <div className="card-container">
                {
                    tours.map((tour,index)=>{
                        return <Card  id={tour.id} data={tours} key={index} image={tour.image} price={tour.price} name={tour.name} info={tour.info} removecard={removecard} />
                    })
                }
            </div>
        </div>
   )
 }
 export default Tours;