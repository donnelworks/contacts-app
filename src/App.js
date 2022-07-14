import React, { useState } from "react";
import ContactInput from "./components/ContactInput";
import ContactList from "./components/ContactList";
import { getData } from "./data";

function App() {
  const [contacts, setContacts] = useState(getData());

  const onSubmitHandler = ({ name, tag }) => {
    setContacts([
      ...contacts,
      { id: +new Date(), name, tag, img: "/images/default.jpg" },
    ]);
  };

  function onDeleteHandler(id) {
    const list = contacts.filter((contact) => contact.id !== id);
    setContacts(list);
  }

  return (
    <div className="container">
      <h1 className="title">Aplikasi Kontak</h1>
      <h2 className="subtitle">Tambah Kontak</h2>
      {/* <button onClick={() => onSubmit()}>tes</button> */}
      <ContactInput dataSubmit={(data) => onSubmitHandler(data)} />
      <h2 className="subtitle">Daftar Kontak</h2>
      <ContactList contacts={contacts} onDelete={(id) => onDeleteHandler(id)} />
    </div>
  );
}

export default App;
