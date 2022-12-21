import React from "react";
import { useFetchGifs } from "../../hooks/useFetchGifs";
import GifItem from "../GifItem/GifItem";

const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {isLoading && <h3>Cargando....</h3>}

      {!isLoading && (
        <div className="card-grid">
          {images.map((img) => (
            <GifItem key={img.id} gif={img} />
          ))}
        </div>
      )}
    </>
  );
};

export default GifGrid;
