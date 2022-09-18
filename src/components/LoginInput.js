import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { LocaleContext } from "../context/LocaleContext";

const LoginInput = ({ dataSubmit }) => {
  const { locale } = useContext(LocaleContext);
  const [form, setForm] = useState({ email: "", password: "" });

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
          {locale === "id" ? "Masuk" : "Login"}
        </button>
      </form>
      <p>
        {locale === "id" ? "Belum punya akun?" : "Don't have an account yet?"}{" "}
        <Link to="/register">
          {locale === "id" ? "Buat dulu ya" : "Create account"}{" "}
        </Link>
      </p>
    </div>
  );
};

LoginInput.propTypes = {
  dataSubmit: PropTypes.func.isRequired,
};

export default LoginInput;
