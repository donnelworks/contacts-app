import React, { useState } from "react";

function ContactInput({ dataSubmit }) {
  const [form, setForm] = useState({ name: "", tag: "" });

  const onChangeData = (val, input) => {
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
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={form.name}
          onChange={(val) => onChangeData(val, "name")}
        />
        <label htmlFor="tag">Tag</label>
        <input
          type="text"
          id="tag"
          value={form.tag}
          onChange={(val) => onChangeData(val, "tag")}
        />
        <button type="submit" className="btn-submit">
          Tambah
        </button>
      </form>
    </div>
  );
}

export default ContactInput;
