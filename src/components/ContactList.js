import React, { useState } from "react";
import ContactItem from "./ContactItem";

function ContactList({ contacts }) {
  const [list, setList] = useState(contacts);

  function onDeleteHandler(id) {
    const contacts = list.filter((contact) => contact.id !== id);
    setList(contacts);
  }

  return (
    <div className="list-container">
      {list.map((contact) => (
        <ContactItem
          key={contact.id}
          id={contact.id}
          onDelete={() => onDeleteHandler(contact.id)}
          {...contact}
        />
      ))}
    </div>
  );
}

export default ContactList;
