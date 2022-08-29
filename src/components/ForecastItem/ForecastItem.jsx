import PropTypes from 'prop-types'
import Typography from '@mui/material/Typography';
import { IconContext } from 'react-icons';
import Grid from '@mui/material/Grid'
import WeatherIcon from '../WeatherIcon';

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
    <IconContext.Provider value={{size: "5rem"}}>
      <WeatherIcon weather={state} />
    </IconContext.Provider>
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
