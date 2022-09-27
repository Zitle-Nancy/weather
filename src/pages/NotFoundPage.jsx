import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NotFoundPage = (props) => {
  return (
    <div>
      NotFoundPage
      <Link to="/main">Regresar a Main</Link>
    </div>
  );
};

NotFoundPage.propTypes = {};

export default NotFoundPage;
