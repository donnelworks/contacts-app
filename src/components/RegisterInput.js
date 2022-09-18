import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { LocaleContext } from "../context/LocaleContext";

const RegisterInput = ({ dataSubmit }) => {
  const { locale } = useContext(LocaleContext);
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const onChangeText = (val, input) => {
    setForm({
      ...form,
      [input]: val.target.value,
    });
  };

  const onSubmitData = (e) => {
    e.preventDefault();
    dataSubmit(form);
  };
  return (
    <div className="input-container">
      <form onSubmit={(e) => onSubmitData(e)}>
        <label htmlFor="name">{locale === "id" ? "Nama" : "Name"} </label>
        <input
          type="text"
          id="name"
          value={form.name}
          onChange={(val) => onChangeText(val, "name")}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={form.email}
          onChange={(val) => onChangeText(val, "email")}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={form.password}
          onChange={(val) => onChangeText(val, "password")}
        />
        <button type="submit" className="btn-submit">
          {locale === "id" ? "Buat akun" : "Create account"}
        </button>
      </form>
    </div>
  );
};

RegisterInput.propTypes = {
  dataSubmit: PropTypes.func.isRequired,
};

export default RegisterInput;
