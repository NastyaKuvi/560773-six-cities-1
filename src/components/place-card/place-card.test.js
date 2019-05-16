import React from "react";
import renderer from "react-test-renderer";
import PlaceCard from "./place-card.jsx";

const mock = {
  place: {
    id: 0,
    isPremium: true,
    img: `img/apartment-01.jpg`,
    price: 120,
    rating: 93,
    isBookmark: false,
    name: `Beautiful &amp; luxurious apartment at great location`,
    type: `apartment`
  }
};

it(`place-card component correctly renders`, () => {
  let {place} = mock;
  const comp = renderer.create(
      <PlaceCard
        place = {place}
        onClick = {() => {}}
      />).toJSON();

  expect(comp).toMatchSnapshot();
});
