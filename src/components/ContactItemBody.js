import React from "react";

function ContactItemBody({ name, tag }) {
  return (
    <div className="item-body-container">
      <h3 className="item-body-name">{name}</h3>
      <p className="item-body-tag">@{tag}</p>
    </div>
  );
}

export { ContactItemBody };
