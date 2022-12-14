import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Typography from '@mui/material/Typography';
const CityInfo = ({city, country}) => {
  return (
    <Fragment>
      <Typography display="inline" variant="h4">{city}, </Typography>
      <Typography display="inline" variant="h6">{country}</Typography>
    </Fragment>
  )
}

CityInfo.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired
}

export default CityInfo