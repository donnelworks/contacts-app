import React from "react";
import { ContactItemImage as ItemImage } from "./ContactItemImage";
import { ContactItemBody as ItemBody } from "./ContactItemBody";
import DeleteItem from "./DeleteItem";

function ContactItem({ img, name, tag, id, onDelete }) {
  return (
    <div className="item-container">
      <ItemImage img={img} />
      <ItemBody name={name} tag={tag} />
      <DeleteItem id={id} onDelete={onDelete} />
    </div>
  );
}

export default ContactItem;
