import { render } from '@testing-library/react'
import Weather from './Weather'
import '@testing-library/jest-dom/extend-expect'

test('Weather render', async () => {
 // AAA 1. Arrange, 2.Act, 3.Assert
 const {findByRole} = render(<Weather temperature={10}/>)

 const temp = await findByRole('heading');

  expect(temp).toHaveTextContent('10')
})