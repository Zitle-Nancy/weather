import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CityPage = (props) => {
  return (
    <div>
      CityPage
      <Link to="/main">Volver a main</Link>
    </div>
  );
};

CityPage.propTypes = {};

export default CityPage;
