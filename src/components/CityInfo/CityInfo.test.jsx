import {render} from '@testing-library/react';
import CityInfo from './CityInfo'; // SUT (Subject under testing)

/**
 * test palabra reservada
 * 'CityInfo render' -> descripción de nuestro test
 * async -> en este caso para indicar que es asyncrona (mando hacer algo y se hará en algún momento) y nuestra arrow function
 * 
 * 
 * Nota: Jest es el framework de testing que permite utilizar testing-library/react
 */

test('CityInfo render', async () => {
  /**
   * Un role es un componente que actua como títulos, como inputs, etc.
   * findAllByRole: es el encargado de encontrar todos los roles
   */
  const city = "Buenos Aires"
  const country = "Argentina"
  const { findAllByRole } = render(<CityInfo city={city} country={country} />)
  const cityAndCountryComponents = await findAllByRole("heading")

  /**
   * En la linea 20 findAllByRole nos va a buscar (en este caso) todos los componentes que sean
   * "heading" (H1, H2, H3..)
   * El resultado es un array de componentes (la clave esta en all del find)
   */
  
  // comparador o matcher en esta expresión es toHaveTextContent
  expect(cityAndCountryComponents[0]).toHaveTextContent(city)
  expect(cityAndCountryComponents[1]).toHaveTextContent(country)
})