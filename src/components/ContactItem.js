import React from "react";
import { ContactItemImage as ItemImage } from "./ContactItemImage";
import { ContactItemBody as ItemBody } from "./ContactItemBody";
import DeleteItem from "./DeleteItem";
import PropTypes from "prop-types";

function ContactItem({ imageUrl, name, tag, id, onDelete }) {
  return (
    <div className="item-container">
      <ItemImage img={imageUrl} />
      <ItemBody name={name} tag={tag} />
      <DeleteItem id={id} onDelete={onDelete} />
    </div>
  );
}

// Prop Validation
ContactItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactItem;
