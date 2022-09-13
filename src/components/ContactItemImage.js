import React from "react";
import PropTypes from "prop-types";

function ContactItemImage({ img }) {
  return (
    <div className="item-image-container">
      <img src={img} alt="avatar" />
    </div>
  );
}

ContactItemImage.propTypes = {
  img: PropTypes.string.isRequired,
};

export { ContactItemImage };
