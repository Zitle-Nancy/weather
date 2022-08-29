
import PropTypes from 'prop-types'
import { WiCloud, WiDayCloudy,WiDayFog, WiDaySunny,WiRain } from 'react-icons/wi'

export const validWeather = [
"cloud",
"cloudy",
"fog",
"sunny",
"rain"]

const weathers = {
  cloud:WiCloud,
  cloudy:WiDayCloudy,
  fog: WiDayFog,
  sunny: WiDaySunny,
  rain: WiRain
}

const WeatherIcon = ({weather}) => {
  /**
   * Linea 19, el and valida que solo si la parte izquierda no es undefined la pinta
   * si lo es, pinta la derecha.
   */
  const Icon = weathers[weather] ?? weathers['rain']
  return <Icon/>
}

WeatherIcon.propTypes = {
  weather: PropTypes.oneOf(validWeather).isRequired
}

export default WeatherIcon;


