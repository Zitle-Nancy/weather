import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@mui/material/Typography';


const Weather = ({temperature}) => {
  return (
    <div>
      <Typography variant='h2'>{temperature}</Typography>
    </div>
  )
}

Weather.propTypes = {
  temperature: PropTypes.number.isRequired
}

export default Weather
