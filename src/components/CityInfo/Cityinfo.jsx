import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Typography from '@mui/material/Typography';
const CityInfo = ({city, country}) => {
  return (
    <Fragment>
      <Typography>{city}</Typography>
      <Typography>{country}</Typography>
    </Fragment>
  )
}

CityInfo.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired
}

export default CityInfo
