import React from "react";
import renderer from "react-test-renderer";
import {MainScreen} from "./main-screen";

it(`main-screen component correctly renders`, () => {
  const comp = renderer.create(
      <MainScreen
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
      />).toJSON();

  expect(comp).toMatchSnapshot();
});
