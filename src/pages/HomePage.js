import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import ContactList from "../components/ContactList";
import SearchBar from "../components/SearchBar";
import { getContacts, deleteContact } from "../data";

function HomePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();

  const keyword = searchParams.get("keyword");
  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  return (
    <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
  );
}

const HomePage = ({ defaultKeyword, keywordChange }) => {
  let [contacts, setContacts] = useState(getContacts());
  const [keyword, setKeyword] = useState(defaultKeyword || "");

  contacts = contacts.filter((contact) => {
    return contact.name
      .toString()
      .toLowerCase()
      .includes(keyword.toString().toLowerCase());
  });

  function onDeleteHandler(id) {
    deleteContact(id);
    setContacts(getContacts());
  }

  function onKeywordChangeHandler(val) {
    setKeyword(val);
    keywordChange(val);
  }

  return (
    <section>
      <SearchBar
        keyword={keyword}
        keywordChange={(val) => onKeywordChangeHandler(val)}
      />
      <h2 className="subtitle">Daftar Kontak</h2>
      <ContactList contacts={contacts} onDelete={(id) => onDeleteHandler(id)} />
    </section>
  );
};

export default HomePageWrapper;
