import React from "react";

function ContactItemImage({ img }) {
  return (
    <div className="item-image-container">
      <img src={img} alt="avatar" />
    </div>
  );
}

export { ContactItemImage };
