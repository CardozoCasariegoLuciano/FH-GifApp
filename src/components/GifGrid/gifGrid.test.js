import { render, screen } from "@testing-library/react";
import { useFetchGifs } from "../../hooks/useFetchGifs";
import GifGrid from "./GifGrid";

jest.mock("../../hooks/useFetchGifs");

describe('"Test de GifGrid"', () => {
  const category = "one punch";

  test("Debe de mostrar el componente de Loading inicualmente", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);
    expect(screen.getByText("Cargando....")).toBeTruthy();
  });

  test("Debe de mostrar los items cuando se cargan las imagenes", () => {
    const fakeGifs = [
      {
        id: "ABC",
        title: "asd",
        url: "asdasdasd",
      },
      {
        id: "ABC2",
        title: "aasdsd",
        url: "asdasasdasddasd",
      },
    ];

    useFetchGifs.mockReturnValue({
      images: fakeGifs,
      isLoading: false,
    });
    render(<GifGrid category={category} />);
    expect(screen.getAllByRole("img")).toHaveLength(fakeGifs.length);
     
  });
});
