import React from "react";

const ImageGaleryElement = ({ photo, onClick }) => (
  <li className="ImageGalleryItem" key={photo.id} onClick={onClick}>
    <img
      src={photo.webformatURL}
      alt={photo.name}
      id={photo.id}
      className="ImageGalleryItem-image"
    />
  </li>
);

export default ImageGaleryElement;
