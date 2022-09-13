import React from "react";
import PropTypes from "prop-types";

function ContactItemBody({ name, tag }) {
  return (
    <div className="item-body-container">
      <h3 className="item-body-name">{name}</h3>
      <p className="item-body-tag">@{tag}</p>
    </div>
  );
}

ContactItemBody.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
};

export { ContactItemBody };
