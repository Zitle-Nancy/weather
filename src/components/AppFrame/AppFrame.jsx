import React from "react";
import { IconContext } from "react-icons";
import { Link as LinkRouter } from "react-router-dom";
import {
  AppBar,
  IconButton,
  Grid,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import { WiDaySunny } from "react-icons/wi";
import PropTypes from "prop-types";

const AppFrame = ({ children }) => {
  return (
    <Grid container justifyContent="center">
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton color="inherit" arial-label="menu">
            <Link
              component={LinkRouter}
              to="/main"
              color="inherit"
              arial-label="menu"
            >
              <IconContext.Provider value={{ size: "2rem" }}>
                <WiDaySunny />
              </IconContext.Provider>
            </Link>
          </IconButton>
          <Typography variant="h6" color="inherit">
            Weather App
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid item xs={12} sm={11} md={10} lg={8}>
        {children}
      </Grid>
    </Grid>
  );
};

AppFrame.propTypes = {
  children: PropTypes.node,
};

export default AppFrame;
