import React from "react";
import ContactList from "./components/ContactList";
import { getData } from "./data";

function App() {
  const contacts = getData();
  return (
    <div className="container">
      <h1 className="title">Daftar Kontak</h1>
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
