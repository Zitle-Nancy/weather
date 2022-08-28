import {render} from '@testing-library/react';

import WeatherDetails from './WeatherDetails'

/**
 * FindText: permite encontrar un componente por el texto que le indiquemos
 */
test('WeatherDetails render', async () => {
  const { findByText } = render(<WeatherDetails humidity={80} wind={10}/>)

  // usamos una regex para encontrar los valores indicados y lo hacemos con los slash

  const wind = await findByText(/10/)
  const humidity = await findByText(/80/)
  
  expect(humidity).toHaveTextContent('Humedad: 80%')
  expect(wind).toHaveTextContent('Viento: 10 km/h')
})