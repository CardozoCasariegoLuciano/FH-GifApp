import { fireEvent, render, screen } from "@testing-library/react";
import AddCategory from "./AddCategory";

describe("AddCategoy testing", () => {
  test("Debe de cambiar el valor de la caja de texto", async () => {
    render(<AddCategory onEmitNewCategory={() => {}} />);
    const input = screen.getByRole("textbox");

    fireEvent.input(input, { target: { value: "legolegends" } });

    expect(input.value).toBe("legolegends");
  });

  test("Debe de llamar onEmitNewCategory al hacer un submit", async () => {
    const inputValue = "legolegends";

    const onEmitNewCategory = jest.fn();

    render(<AddCategory onEmitNewCategory={onEmitNewCategory} />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    expect(onEmitNewCategory).toHaveBeenCalled();
    expect(onEmitNewCategory).toHaveBeenCalledWith(inputValue);
    expect(input.value).toBe("");
  });

  test("No debe llamar al onEmitNewCategory si el input esta vacio", async () => {
    const onEmitNewCategory = jest.fn();
    render(<AddCategory onEmitNewCategory={onEmitNewCategory} />);

    const form = screen.getByRole("form");

    fireEvent.submit(form);

    expect(onEmitNewCategory).not.toHaveBeenCalled();
  });
});
