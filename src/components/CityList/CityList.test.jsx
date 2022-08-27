import { render } from '@testing-library/react';
import CityList from "./CityList" //SUT

const cities = [
  {city:'Buenos Aires', country:'Argentina'},
  {city:'Bogotá', country:'Colombia'},
  {city:'Madrid', country:'España'},
  {city:'Ciudad de México', country:'México'},
]

test('CityList render', async () => {
  const { findAllByRole } = render(<CityList cities={cities}/>)
  const cityItems = await findAllByRole("listitem")

  expect(cityItems).toHaveLength(4)
})