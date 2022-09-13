import React from "react";
import ContactItem from "./ContactItem";
import PropTypes from "prop-types";

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

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
