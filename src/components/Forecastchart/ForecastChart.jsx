import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';

const ForecastChart = () => {
  return (
    <Grid 
      container
      justifyContent="center"
      alignItems="center"
    >
    ForecastChart
    </Grid>
  )
}

ForecastChart.defaultProps = {
  forecastItemList: []
}

ForecastChart.propTypes = {

}

export default ForecastChart
