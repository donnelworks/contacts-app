import React from "react";
import { useNavigate } from "react-router-dom";
import ContactInput from "../components/ContactInput";
import { addContact } from "../utils/api";

function AddPage() {
  const navigate = useNavigate();
  const onSubmitHandler = async (contact) => {
    await addContact(contact);
    navigate("/");
  };

  return (
    <section>
      <h2 className="subtitle">Tambah Kontak</h2>
      <ContactInput dataSubmit={(data) => onSubmitHandler(data)} />
    </section>
  );
}

export default AddPage;
