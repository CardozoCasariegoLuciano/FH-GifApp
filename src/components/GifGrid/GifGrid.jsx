import React from "react";
import PropTypes from "prop-types";
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
            <GifItem key={img.id} url={img.url} id={img.id} title={img.title} />
          ))}
        </div>
      )}
    </>
  );
};

export default GifGrid;

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
