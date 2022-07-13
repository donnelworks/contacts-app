import React from "react";

function DeleteItem({ id, onDelete }) {
  return (
    <button className="btn-delete-item" onClick={() => onDelete(id)}>
      Hapus
    </button>
  );
}

export default DeleteItem;
