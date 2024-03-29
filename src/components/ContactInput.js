import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { LocaleContext } from "../context/LocaleContext";

function ContactInput({ dataSubmit }) {
  const { locale } = useContext(LocaleContext);
  const [form, setForm] = useState({ name: "", tag: "" });

  const onChangeText = (val, input) => {
    setForm({
      ...form,
      [input]: val.target.value,
    });
  };

  const onSubmitData = (e) => {
    e.preventDefault();
    dataSubmit(form);
    clearForm();
  };

  const clearForm = () => {
    setForm({
      name: "",
      tag: "",
    });
  };
  return (
    <div className="input-container">
      <form onSubmit={(e) => onSubmitData(e)}>
        <label htmlFor="name">{locale === "id" ? "Nama" : "Name"}</label>
        <input
          type="text"
          id="name"
          value={form.name}
          onChange={(val) => onChangeText(val, "name")}
        />
        <label htmlFor="tag">Tag</label>
        <input
          type="text"
          id="tag"
          value={form.tag}
          onChange={(val) => onChangeText(val, "tag")}
        />
        <button type="submit" className="btn-submit">
          {locale === "id" ? "Simpan" : "Save"}
        </button>
      </form>
    </div>
  );
}

// Prop Vavlidation
ContactInput.propTypes = {
  dataSubmit: PropTypes.func.isRequired,
};

export default ContactInput;
