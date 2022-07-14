import React, { useState } from "react";
import ContactItem from "./ContactItem";

function ContactList({ contacts, onDelete }) {
  return (
    <div className="list-container">
      <React.Fragment>
        {contacts.map((contact) => (
          <ContactItem
            key={contact.id}
            id={contact.id}
            onDelete={() => onDelete(contact.id)}
            {...contact}
          />
        ))}
      </React.Fragment>
    </div>
  );
}

export default ContactList;
