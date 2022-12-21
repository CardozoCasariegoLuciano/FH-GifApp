import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState([]);

  const getImages = async () => {
    setImages(await getGifs(category));
    setIsLoading(false)
  };

  useEffect(() => {
    getImages();
  }, []);

  return { images, isLoading };
};
