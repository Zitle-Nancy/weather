import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@mui/material/Typography';
import { WiCloud } from 'react-icons/wi'
import { IconContext } from 'react-icons';
const Weather = ({temperature}) => {
  return (
    <div>
      <IconContext.Provider value={{size: "5rem"}}>
        <WiCloud></WiCloud>
      </IconContext.Provider>
      <Typography display="inline" variant='h3'>{temperature}</Typography>
    </div>
  )
}

Weather.propTypes = {
  temperature: PropTypes.number.isRequired
}

export default Weather
