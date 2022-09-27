import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const WelcomePage = (props) => {
  return (
    <div>
      Welcome
      <Link to="/main">Ir a main</Link>
    </div>
  );
};

WelcomePage.propTypes = {};

export default WelcomePage;
