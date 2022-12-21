import React, { useState } from "react";

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
    <form onSubmit={onFormSubmit}>
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
