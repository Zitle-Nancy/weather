import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";

import ForecastItem from "../ForecastItem";
import { validWeather } from "../WeatherIcon";

const renderForecastItem = (forecast) => {
  const { weekDay, hour, state, temperature } = forecast;
  return (
    <Grid item key={`${weekDay}-${hour}`} data-testid="forecast-item-container">
      <ForecastItem
        weekDay={weekDay}
        hour={hour}
        state={state}
        temperature={temperature}
      />
    </Grid>
  );
};
const Forecast = ({ forecastItemList }) => {
  return (
    <Grid container justifyContent="space-around" alignItems="center">
      {forecastItemList.map((forecast) => renderForecastItem(forecast))}
    </Grid>
  );
};

Forecast.defaultProps = {
  forecastItemList: [],
};

Forecast.propTypes = {
  forecastItemList: PropTypes.arrayOf(
    PropTypes.shape({
      weekDay: PropTypes.string.isRequired,
      hour: PropTypes.number.isRequired,
      state: PropTypes.oneOf(validWeather).isRequired,
      temperature: PropTypes.number.isRequired,
    })
  ),
};

export default Forecast;
