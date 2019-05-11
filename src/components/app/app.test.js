import React from "react";
import renderer from "react-test-renderer";
import {App} from "./app";

it(`app component correctly renders`, () => {
  const comp = renderer.create(
      <App
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
      />
  );

  expect(comp).toMatchSnapshot();
});
