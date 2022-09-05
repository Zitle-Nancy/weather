import {render} from '@testing-library/react';

import Forecast from './Forecast'

 const forecastItemList = [
	{ hour: 18, state:"fog", temperature:-1, weekDay:"Jueves" },
	{ hour: 6, state:"sunny", temperature:28, weekDay:"Viernes" },
	{ hour: 12, state:"sunny", temperature:32, weekDay:"Viernes" },
	{ hour: 18, state:"cloudy", temperature:19, weekDay:"Viernes" },
	{ hour: 6, state:"rain", temperature:17, weekDay:"Sábado" },
	{ hour: 12, state:"cloud", temperature:17, weekDay:"Sábado" }, 
]

test('Forecast render', async () => {
  // findAllByTestId nos permite encontrar cada item que tenga este identificador (data-testid)
  const { findAllByTestId } = render(<Forecast forecastItemList={forecastItemList}/>)
  
  const forecastItems = await findAllByTestId("forecast-item-container")
  expect(forecastItems).toHaveLength(6)
})