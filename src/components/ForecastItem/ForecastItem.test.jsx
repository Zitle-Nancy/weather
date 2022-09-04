import {render} from '@testing-library/react';

import ForecastItem from './ForecastItem'

/**
 * FindText: permite encontrar un componente por el texto que le indiquemos
 */
test('ForecastItem render', async () => {
  const { findByText } = render(<ForecastItem weekDay="Lunes" hour={10} temperature={23}/>)

  /* 
    * usamos una regex para encontrar los valores indicados y 
    * lo hacemos con los slash
  */

  const weekDay = await findByText(/Lunes/i)
  const hour = await findByText(/10/i)
  const temperature = await findByText(/23/i)
  
  
  expect(weekDay).toHaveTextContent('Lunes')
  expect(hour).toHaveTextContent('10')
  expect(temperature).toHaveTextContent('23')
})