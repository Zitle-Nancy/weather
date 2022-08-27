import PropTypes from 'prop-types'
import CityInfo from '../CityInfo/Cityinfo'
import Weather from '../Weather/Weather'

const renderCityAndCountry = (cityAndCountry) => {
  const {city, country} = cityAndCountry
  return (
    <li key={city}>
      <CityInfo city={city} country={country}/>
      <Weather temperature={20} weather={'sunny'}/>
    </li>
  )
}
const CityList = ({cities}) => {
  return (
    <ul>
      {cities.map((cityAndCountry) => renderCityAndCountry(cityAndCountry))}
    </ul>
  )
}

CityList.propTypes = {
  cities: PropTypes.array.isRequired
}

export default CityList

