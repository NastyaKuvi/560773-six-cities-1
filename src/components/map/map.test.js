import React from "react";
import renderer from "react-test-renderer";
import CitiesMap from "./map";

const div = global.document.createElement(`div`);
div.setAttribute(`id`, `map`);
global.document.body.appendChild(div);

const mock = {
  city: [52.38333, 4.9],
  coords: [
    [52.3909553943508, 4.85309666406198],
    [52.369553943508, 4.85309666406198],
    [52.3909553943508, 4.929309666406198],
    [52.3809553943508, 4.939309666406198]
  ]
};

it(`map component correctly renders`, () => {
  let {city, coords} = mock;
  const comp = renderer.create(
      <CitiesMap
        coords = {coords}
        city = {city}
      />).toJSON();

  expect(comp).toMatchSnapshot();
});
