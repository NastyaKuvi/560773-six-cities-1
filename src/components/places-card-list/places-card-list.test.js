import React from "react";
import renderer from "react-test-renderer";
import PlacesCardList from "./places-card-list.jsx";

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


it(`places-card-list component correctly renders`, () => {
  let {places} = mock;
  const comp = renderer.create(
      <PlacesCardList
        places = {places}
      />).toJSON();

  expect(comp).toMatchSnapshot();
});
