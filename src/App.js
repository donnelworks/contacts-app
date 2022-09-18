import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import { LocaleProvider } from "./context/LocaleContext";
import { AddPage, HomePage, LoginPage, RegisterPage } from "./pages";
import { getUserLogged, putAccessToken } from "./utils/api";

function App() {
  const [authedUser, setAuthedUser] = useState(null);
  const [initializing, setInitializing] = useState(true);
  const [locale, setLocale] = useState(localStorage.getItem("locale") || "id");

  useEffect(() => {
    cekAuth();
  }, []);

  const cekAuth = async () => {
    const { data } = await getUserLogged();
    setAuthedUser(data);
    setInitializing(false);
  };

  const toggleLocale = () => {
    const newLocale = locale === "id" ? "en" : "id";
    localStorage.setItem("locale", newLocale);
    setLocale(newLocale);
  };

  const onLoginHandler = async ({ accessToken }) => {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    setAuthedUser(data);
  };

  const onLogout = () => {
    setAuthedUser(null);
    putAccessToken("");
  };

  if (initializing) {
    return null;
  }

  if (authedUser === null) {
    return (
      <LocaleProvider value={{ locale, toggleLocale }}>
        <div className="container">
          <header className="header">
            <h1 className="title">
              {locale === "id" ? "Aplikasi Kontak" : "Contacts App"}
            </h1>
          </header>
          <main>
            <Routes>
              <Route
                path="/*"
                element={<LoginPage onLogin={(data) => onLoginHandler(data)} />}
              />
              <Route path="/register" element={<RegisterPage />} />
            </Routes>
          </main>
        </div>
      </LocaleProvider>
    );
  }

  return (
    <LocaleProvider value={{ locale, toggleLocale }}>
      <div className="container">
        <header className="header">
          <h1 className="title">
            {locale === "id" ? "Aplikasi Kontak" : "Contacts App"}
          </h1>
          <Navigation logout={() => onLogout()} />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/add" element={<AddPage />} />
          </Routes>
        </main>
      </div>
    </LocaleProvider>
  );
}

export default App;
