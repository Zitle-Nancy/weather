import PropTypes from 'prop-types'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'

const ForecastItem = ({weekDay, hour, state, temperature}) => {
  return (
    <Grid 
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
    <Grid item>
    <Typography>{weekDay}</Typography>
    </Grid>

    <Grid item>
      <Typography>{hour}</Typography>
    </Grid>

    <Grid item>
      [icono]{state}
    </Grid>

    <Grid item>
      <Typography>{temperature} º</Typography>
    </Grid>
     
    </Grid>
  )
}

ForecastItem.propTypes = {
  weekDay: PropTypes.string.isRequired,
  hour:PropTypes.number.isRequired,
  state:PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
}

export default ForecastItem
