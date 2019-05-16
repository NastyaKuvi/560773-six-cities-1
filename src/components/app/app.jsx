import React from "react";
import PropTypes from "prop-types";
import {MainScreen} from "../main-screen/main-screen.jsx";

export const App = (props) => {
  const {places} = props;
  return <MainScreen
    locations = { {
      list: [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`],
      active: `Amsterdam`
    } }
    places = {places}
    onClick = {() => {}}
  />;
};

App.propTypes = {
  places: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    isPremium: PropTypes.bool.isRequired,
    img: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    isBookmark: false,
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf([`apartment`, `room`, `house`, `hotel`]).isRequired
  }))
};
