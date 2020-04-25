import React from "react";
import ImageGaleryElement from "./ImageGaleryElement";

const ImageGalery = ({ onClick, photos }) => (
  <ul className="ImageGallery">
    {photos.map((photo) => (
      <ImageGaleryElement photo={photo} onClick={onClick} />
    ))}
  </ul>
);

export default ImageGalery;
