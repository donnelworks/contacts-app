import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import RegisterInput from "../components/RegisterInput";
import { LocaleContext } from "../context/LocaleContext";
import { register } from "../utils/api";

const RegisterPage = () => {
  const { locale } = useContext(LocaleContext);
  const navigate = useNavigate();

  const onSubmitHandler = async (contact) => {
    const { error } = await register(contact);
    if (!error) {
      navigate("/");
    }
  };
  return (
    <section>
      <h2 className="subtitle">
        {locale === "id" ? "Buat akun kamu dulu ya" : "Create your account"}
      </h2>
      <RegisterInput dataSubmit={(data) => onSubmitHandler(data)} />
    </section>
  );
};

export default RegisterPage;
