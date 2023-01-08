import React, { useState } from "react";
import { PropTypes } from "prop-types";

const AddCategory = ({ onEmitNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    const trimInput = inputValue.trim();

    if (trimInput.length <= 1) return;
    onEmitNewCategory(trimInput);
    setInputValue("");
  };

  return (
    <form onSubmit={onFormSubmit} aria-label="form">
      <input
        value={inputValue}
        type="text"
        onChange={onInputChange}
        placeholder="Buscar Gifs"
      />
    </form>
  );
};

export default AddCategory;

AddCategory.propTypes = {
  onEmitNewCategory: PropTypes.func.isRequired,
};
