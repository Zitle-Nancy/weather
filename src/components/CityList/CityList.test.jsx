import { fireEvent, render } from "@testing-library/react";
import CityList from "./CityList"; //SUT

const cities = [
  { city: "Buenos Aires", country: "Argentina" },
  { city: "Bogotá", country: "Colombia" },
  { city: "Madrid", country: "España" },
  { city: "Ciudad de México", country: "México" },
];

test("CityList render", async () => {
  const { findAllByRole } = render(<CityList cities={cities} />);
  const cityItems = await findAllByRole("button");

  expect(cityItems).toHaveLength(4);
});

test("CityList click on item", async () => {
  // Debemos simular una acción del usuario: click sobre un item
  // Crearemos una función mock con jest.fn()

  const fnClickOnItem = jest.fn();
  const { findAllByRole } = render(
    <CityList cities={cities} onClickCity={fnClickOnItem} />
  );

  // encontrar todos los items que tengan esta propiedad/funcionalidad
  const items = await findAllByRole("button");

  /* Ahora, para simular la acción vamos a utilizar fireEvent
    fireEvent es parte de la libreria testing-library/react,
    nos ayudará a ejecutar un evento como si nosotros hicieramos un click o alguna acción
  */

  fireEvent.click(items[0]);

  /* Qué tuvo que suceder?,
   * se debió mandar a llamar a la función fnClickOnItem una vez
   */
  expect(fnClickOnItem).toHaveBeenCalledTimes(1);
});
