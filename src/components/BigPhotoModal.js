import React from "react";

const BigPhotoModal = ({ bigUrl, onClick, onKeyPress }) => (
  <div className="Overlay" onClick={onClick} onKeyPress={onKeyPress}>
    <div className="Modal">
      <img src={bigUrl} alt="" />
    </div>
  </div>
);

export default BigPhotoModal;
