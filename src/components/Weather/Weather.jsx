import { IconContext } from 'react-icons';
import PropTypes from 'prop-types'
import Typography from '@mui/material/Typography';

import WeatherIcon, {validWeather} from '../WeatherIcon'

const WeatherComponent = ({temperature, weather}) => {
  console.log(weather, 'weather en weather')
  return (
    <div>
      <IconContext.Provider value={{size: "5rem"}}>
        <WeatherIcon weather={weather} />
      </IconContext.Provider>
      <Typography display="inline" variant='h3'>{temperature}</Typography>
    </div>
  )
}

WeatherComponent.propTypes = {
  temperature: PropTypes.number.isRequired,
  weather: PropTypes.oneOf(validWeather).isRequired
}

export default WeatherComponent
