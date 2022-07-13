import React, { useState } from "react";
import ContactInput from "./components/ContactInput";
import ContactList from "./components/ContactList";
import { getData } from "./data";

function App() {
  const [contacts, setContacts] = useState(getData());

  const onSubmit = ({ name, tag }) => {
    setContacts([
      ...contacts,
      { id: +new Date(), name, tag, img: "/images/default.jpg" },
    ]);
    console.log(contacts);
  };
  return (
    <div className="container">
      <h1 className="title">Aplikasi Kontak</h1>
      <h2 className="subtitle">Tambah Kontak</h2>
      <ContactInput dataSubmit={(data) => onSubmit(data)} />
      <h2 className="subtitle">Daftar Kontak</h2>
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
