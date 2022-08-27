import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@mui/material/Typography';
import { WiCloud, WiDayCloudy,WiDayFog, WiDaySunny,WiRain } from 'react-icons/wi'
import { IconContext } from 'react-icons';

const weathers = {
  cloud:WiCloud,
  cloudy:WiDayCloudy,
  fog: WiDayFog,
  sunny: WiDaySunny,
  rain: WiRain
}

const renderWeather = weather => {
  /**
   * Linea 19, el and valida que solo si la parte izquierda no es undefined la pinta
   * si lo es, pinta la derecha.
   */
  const WeatherIcon = weathers[weather] ?? weathers['sunny']
  return <WeatherIcon/>
}

const WeatherComponent = ({temperature, weather}) => {
  return (
    <div>
      <IconContext.Provider value={{size: "5rem"}}>
        {renderWeather(weather)}
      </IconContext.Provider>
      <Typography display="inline" variant='h3'>{temperature}</Typography>
    </div>
  )
}

WeatherComponent.propTypes = {
  temperature: PropTypes.number.isRequired,
  weather: PropTypes.string.isRequired
}

export default WeatherComponent
