import React from "react";
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {MainScreen} from "./main-screen";

Enzyme.configure({adapter: new Adapter()});

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

it(`Click on city card correctly works`, () => {
  const {places} = mock;
  const clickHandler = jest.fn();
  const comp = mount(
      <MainScreen
        locations = { {
          list: [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`],
          active: `Amsterdam`
        } }
        places = {places}
        onClick = {clickHandler}
      />
  );

  const btn = comp.find(`.place-card__image-wrapper a`).at(0);
  expect(btn.length).toEqual(1);
  btn.simulate(`click`);

  expect(clickHandler).toHaveBeenCalledTimes(1);

});
