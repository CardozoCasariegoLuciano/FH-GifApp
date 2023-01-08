import { render, screen } from "@testing-library/react";
import GifItem from "./GifItem";

describe("GifItem testSuit", () => {
  const title = "Test title";
  const url = "http://www.google/";

  test("Debe de hacer mach con el snapshot", async () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test("Debe de mostrar la imagen con el URL y ALT indicados", async () => {
    render(<GifItem title={title} url={url} />);
    //screen.debug();
    const {src, alt} = screen.getByRole("img")

    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test("Debe de mostrar el titulo en el componente", ()=>{
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy()
  })
});
