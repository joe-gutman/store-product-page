import React, {useState, useEffect} from 'react';
import Carousel from './Carousel.jsx';
import MainImage from './MainImage.jsx';

var ImageView = ({currentProductImage, setCurrentProductImage, thumbnailImages, zoomIn}) => {


  return (
    <div id="image-view" role="product-photos">
      <Carousel currentProductImage={currentProductImage} setCurrentProductImage={setCurrentProductImage} thumbnailImages={thumbnailImages}/>
      <MainImage currentProductImage={currentProductImage} zoomIn={zoomIn} />
    </div>
  )
};

export default ImageView;