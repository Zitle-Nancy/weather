import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { Paper } from "@mui/material";

import AppFrame from "../components/AppFrame/AppFrame";
import CityList from "../components/CityList";

const cities = [
  { city: "Buenos Aires", country: "Argentina" },
  { city: "Bogotá", country: "Colombia" },
  { city: "Madrid", country: "España" },
  { city: "Ciudad de México", country: "México" },
];

const MainPage = (props) => {
  const history = useHistory();

  const onClickHandler = () => {
    history.push("/city");
  };

  return (
    <AppFrame>
      <Paper elevation={3}>
        <CityList cities={cities} onClickCity={onClickHandler} />
      </Paper>
    </AppFrame>
  );
};

MainPage.propTypes = {};

export default MainPage;
