import React from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import { AddPage, HomePage } from "./pages";

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1 className="title">Aplikasi Kontak</h1>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
