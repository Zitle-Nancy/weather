import { IconContext } from "react-icons";
import { Grid } from "@mui/material";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";

import WeatherIcon, { validWeather } from "../WeatherIcon";

const WeatherComponent = ({ temperature, weather }) => {
  console.log(weather, "weather en weather");
  return (
    <Grid
      container
      item
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={1}
    >
      <IconContext.Provider value={{ size: "6rem" }}>
        <WeatherIcon weather={weather} />
      </IconContext.Provider>
      <Typography display="inline" variant="h2">
        {temperature}
      </Typography>
    </Grid>
  );
};

WeatherComponent.propTypes = {
  temperature: PropTypes.number.isRequired,
  weather: PropTypes.oneOf(validWeather).isRequired,
};

export default WeatherComponent;
