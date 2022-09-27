import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import CityInfo from "./../components/CityInfo";
import Weather from "./../components/Weather";
import WeatherDetails from "./../components/WeatherDetails";
import ForecastChart from "./../components/Forecastchart";
import Forecast from "./../components/Forecast";

const CityPage = (props) => {
  const city = "Buenos Aires";
  const country = "Argentina";
  const state = "cloudy";
  const temperature = 20;
  const humidity = 80;
  const wind = 5;
  const forecastItemList = [
    { hour: 18, state: "fog", temperature: -1, weekDay: "Jueves" },
    { hour: 6, state: "sunny", temperature: 28, weekDay: "Viernes" },
    { hour: 12, state: "sunny", temperature: 32, weekDay: "Viernes" },
    { hour: 18, state: "cloudy", temperature: 19, weekDay: "Viernes" },
    { hour: 6, state: "rain", temperature: 17, weekDay: "Sábado" },
    { hour: 12, state: "cloud", temperature: 17, weekDay: "Sábado" },
  ];
  const data = [
    {
      dayHour: "Jue 18",
      min: 14,
      max: 22,
    },
    {
      dayHour: "Vie 06",
      min: 18,
      max: 27,
    },
    {
      dayHour: "Vie 12",
      min: 18,
      max: 28,
    },
    {
      dayHour: "Vie 18",
      min: 18,
      max: 25,
    },
    {
      dayHour: "Sab 06",
      min: 15,
      max: 22,
    },
    {
      dayHour: "Sab 12",
      min: 12,
      max: 19,
    },
  ];
  return (
    <Grid
      container
      spacing={2}
      justifyContent="space-around"
      direction="column"
    >
      <Grid
        container
        item
        xs={12}
        justifyContent="center"
        alignItems="flex-end"
      >
        <CityInfo city={city} country={country} />
      </Grid>
      <Grid container item xs={12} justifyContent="center">
        <Weather weather={state} temperature={temperature} />
        <WeatherDetails humidity={humidity} wind={wind} />
      </Grid>
      <Grid item>
        <ForecastChart data={data} />
      </Grid>
      <Grid item>
        <Forecast forecastItemList={forecastItemList} />
      </Grid>
      <Link to="/main">Volver a main</Link>
    </Grid>
  );
};

CityPage.propTypes = {};

export default CityPage;
