import React from "react";
import PropTypes from "prop-types";
import { BiTrash } from "react-icons/bi";

function DeleteItem({ id, onDelete }) {
  return (
    <button className="btn-delete-item" onClick={() => onDelete(id)}>
      Hapus
    </button>
  );
}

DeleteItem.propTypes = {
  id: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default DeleteItem;
