import React from "react";
import renderer from "react-test-renderer";
import {App} from "./app";

const mock = {
  places: [
    {
      id: 0,
      isPremium: false,
      img: `img/apartment-02.jpg`,
      price: 132,
      rating: 80,
      isBookmark: false,
      name: `Canal View Prinsengracht`,
      type: `apartment`
    },
    {
      id: 1,
      isPremium: true,
      img: `img/apartment-03.jpg`,
      price: 180,
      rating: 100,
      isBookmark: false,
      name: `Nice, cozy, warm big bed apartment`,
      type: `apartment`
    },
    {
      id: 2,
      isPremium: false,
      img: `img/apartment-05.jpg`,
      price: 80,
      rating: 80,
      isBookmark: false,
      name: `Wood and stone place`,
      type: `room`
    }
  ]
};

it(`app component correctly renders`, () => {
  const {places} = mock;
  const comp = renderer.create(
      <App
        locations = { {
          list: [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`],
          active: `Amsterdam`
        } }
        places = {places}
        onClick = {() => {}}
      />
  );

  expect(comp).toMatchSnapshot();
});
