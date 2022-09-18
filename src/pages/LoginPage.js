import React, { useContext } from "react";
import LoginInput from "../components/LoginInput";
import { login } from "../utils/api";
import PropTypes from "prop-types";
import { LocaleContext } from "../context/LocaleContext";

const LoginPage = ({ onLogin }) => {
  const { locale } = useContext(LocaleContext);
  const onSubmitHandler = async (contact) => {
    const { error, data } = await login(contact);
    if (!error) {
      onLogin(data);
    }
  };
  return (
    <section>
      <h2 className="subtitle">
        {locale === "id" ? "Masuk dengan akun kamu" : "Login with your account"}{" "}
      </h2>
      <LoginInput dataSubmit={(data) => onSubmitHandler(data)} />
    </section>
  );
};

LoginPage.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default LoginPage;
