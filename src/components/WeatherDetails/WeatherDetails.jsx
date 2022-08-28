import { Fragment } from 'react'
import PropTypes from 'prop-types'
import Typography from '@mui/material/Typography';

const WeatherDetails = ({humidity, wind}) => {
  return (
    <Fragment>
      <Typography>Humedad: {humidity}%</Typography>
      <Typography>Viento: {wind} km/h</Typography>
    </Fragment>
  )
}

WeatherDetails.propTypes = {
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.number.isRequired,
}

export default WeatherDetails
