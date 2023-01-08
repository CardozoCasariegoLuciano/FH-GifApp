import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "./useFetchGifs";

describe('"UseFetchGifs test"', () => {
  test("Debe retornar el estado incial", async () => {
    const { result } = renderHook(() => useFetchGifs("GTA"));
    const { images, isLoading } = result.current;

    expect(images).toHaveLength(0);
    expect(isLoading).toBeTruthy();
  });

  test("Debe de retornar un arreglo de imagenes e Isloading con el valor falso", async () => {
    const { result } = renderHook(() => useFetchGifs("GTA"));

    await waitFor(() => expect(result.current.isLoading).toBeFalsy(), {
      timeout: 3000,
    });

    const { images, isLoading } = result.current;

    expect(images.length).toBeGreaterThan(0)
    expect(isLoading).toBeFalsy();
  });
});
