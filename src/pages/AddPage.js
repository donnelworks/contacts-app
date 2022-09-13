import React from "react";
import ContactInput from "../components/ContactInput";
import { addContact } from "../data";

function AddPage() {
  const onSubmitHandler = (contact) => {
    addContact(contact);
  };

  return (
    <section>
      <h2 className="subtitle">Tambah Kontak</h2>
      <ContactInput dataSubmit={(data) => onSubmitHandler(data)} />
    </section>
  );
}

export default AddPage;
