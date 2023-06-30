import React from 'react';
import ActionButtonOutfit from './ActionButtonOutfit.jsx'

const RelatedCard = ({index, product, id, name, category, price, avgRating,image}) => {

  var width = 300;

  return (
    <>
    <div className = "card" style = {{width:`${width.toString()}px`}}>
        <ActionButtonOutfit /> <br></br>
        <img
          src={image}
          width="175"
          height="200"
          alt="product image"
        /> <br></br>
         <div className = 'card-details'>
          <small className = 'card-text'>{category} </small>
          <span className = 'card-text'> {name} </span>
          <small className = 'card-text'> ${price} </small>
          <small className = 'card-text'>{avgRating} *</small>
        </div>
    </div>
      </>
  )


}




export default RelatedCard;