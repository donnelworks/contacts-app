import React from "react";
import PropTypes from "prop-types";

function DeleteItem({ id, onDelete }) {
  return (
    <button className="btn-delete-item" onClick={() => onDelete(id)}>
      Hapus
    </button>
  );
}

DeleteItem.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default DeleteItem;
