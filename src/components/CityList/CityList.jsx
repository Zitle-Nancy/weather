import { Grid, List, ListItemButton } from "@mui/material";
import PropTypes from "prop-types";
import CityInfo from "../CityInfo";
import Weather from "../Weather";

// renderCityAndCountry se va a convertir en una función que retorna otra función
const renderCityAndCountry = (eventOnClickCity) => (cityAndCountry) => {
  const { city, country } = cityAndCountry;
  return (
    <ListItemButton key={city} onClick={eventOnClickCity}>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item md={8} xs={12}>
          <CityInfo city={city} country={country} />
        </Grid>
        <Grid item md={4} xs={12}>
          <Weather temperature={20} weather={"sunny"} />
        </Grid>
      </Grid>
    </ListItemButton>
  );
};
const CityList = ({ cities, onClickCity }) => {
  return (
    <List>
      {cities.map((cityAndCountry) =>
        renderCityAndCountry(onClickCity)(cityAndCountry)
      )}
    </List>
  );
};

CityList.propTypes = {
  cities: PropTypes.array.isRequired,
};

export default CityList;
