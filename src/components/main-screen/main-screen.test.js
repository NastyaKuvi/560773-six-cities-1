import React from "react";
import renderer from "react-test-renderer";
import {MainScreen} from "./main-screen";

const div = global.document.createElement(`div`);
div.setAttribute(`id`, `map`);
global.document.body.appendChild(div);

const mock = {
  city: [52.38333, 4.9],
  places: [
    {
      id: 0,
      isPremium: false,
      img: `img/apartment-02.jpg`,
      price: 132,
      rating: 80,
      isBookmark: false,
      name: `Canal View Prinsengracht`,
      type: `apartment`,
      coord: [52.3809553943508, 4.939309666406198]
    },
    {
      id: 1,
      isPremium: true,
      img: `img/apartment-03.jpg`,
      price: 180,
      rating: 100,
      isBookmark: false,
      name: `Nice, cozy, warm big bed apartment`,
      type: `apartment`,
      coord: [52.3809553943508, 4.939309666406198]
    },
    {
      id: 2,
      isPremium: false,
      img: `img/apartment-05.jpg`,
      price: 80,
      rating: 80,
      isBookmark: false,
      name: `Wood and stone place`,
      type: `room`,
      coord: [52.3809553943508, 4.939309666406198]
    }
  ]
};

it(`main-screen component correctly renders`, () => {
  const {places, city} = mock;
  const comp = renderer.create(
      <MainScreen
        locations = { {
          list: [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`],
          active: `Amsterdam`
        } }
        places = {places}
        city = {city}
      />).toJSON();

  expect(comp).toMatchSnapshot();
});
