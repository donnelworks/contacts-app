import React from "react";
import ContactItem from "./ContactItem";

function ContactList({ contacts }) {
  return (
    <div className="list-container">
      {contacts.map((contact) => (
        <ContactItem key={contact.id} {...contact} />
      ))}
    </div>
  );
}

export default ContactList;
