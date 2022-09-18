import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ContactList from "../components/ContactList";
import SearchBar from "../components/SearchBar";
import { LocaleContext } from "../context/LocaleContext";
import { getContacts, deleteContact } from "../utils/api";

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
  let [contacts, setContacts] = useState([]);
  const [keyword, setKeyword] = useState(defaultKeyword || "");
  const { locale } = useContext(LocaleContext);

  contacts = contacts.filter((contact) => {
    return contact.name
      .toString()
      .toLowerCase()
      .includes(keyword.toString().toLowerCase());
  });

  useEffect(() => {
    loadContacts();
  }, []);

  async function loadContacts() {
    const { data } = await getContacts();
    setContacts(data);
  }

  async function onDeleteHandler(id) {
    await deleteContact(id);
    const { data } = await getContacts();
    setContacts(data);
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
      <h2 className="subtitle">
        {locale === "id" ? "Daftar Kontak" : "Contacts List"}
      </h2>
      <ContactList contacts={contacts} onDelete={(id) => onDeleteHandler(id)} />
    </section>
  );
};

export default HomePageWrapper;
