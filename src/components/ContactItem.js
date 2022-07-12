import React from "react";
import { ContactItemImage as ItemImage } from "./ContactItemImage";
import { ContactItemBody as ItemBody } from "./ContactItemBody";

function ContactItem({ img, name, tag }) {
  return (
    <div className="item-container">
      <ItemImage img={img} />
      <ItemBody name={name} tag={tag} />
    </div>
  );
}

export default ContactItem;
