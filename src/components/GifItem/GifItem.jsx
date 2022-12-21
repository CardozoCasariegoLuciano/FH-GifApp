import React from "react";

const GifItem = ({gif}) => {
  return (
    <div className="card">
      <img src={gif.url} alt={gif.title}/>
      <p>{gif.title}</p>
    </div>
  );
};

export default GifItem;
