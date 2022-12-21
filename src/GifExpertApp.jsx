import React, { useState } from "react";
import AddCategory from "./components/AddCategory/AddCategory";
import GifGrid from "./components/GifGrid/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Fun"]);

  const onNewCategory = (value) => {
    if (categories.includes(value)) return;
    setCategories([value, ...categories]);
  };

  return (
    <div>
      <h1>GifExpertApp</h1>

      <AddCategory onEmitNewCategory={(value) => onNewCategory(value)} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </div>
  );
};

export default GifExpertApp;
