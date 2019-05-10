import React from "react";
import {MainScreen} from "../main-screen/main-screen.jsx";

export const App = () => {
  return <MainScreen
    locations = { {
      list: [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`],
      active: `Amsterdam`
    } }
    places = {[
      `Beautiful &amp; luxurious apartment at great location`,
      `Wood and stone place`,
      `Canal View Prinsengracht`,
      `Nice, cozy, warm big bed apartment`,
    ]}
    onClick = {() => {}}
  />;
};
