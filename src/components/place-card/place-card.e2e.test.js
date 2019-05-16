import React from "react";
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlaceCard from "./place-card.jsx";

Enzyme.configure({adapter: new Adapter()});

const mock = {
  place: {
    id: 3,
    isPremium: false,
    img: `img/apartment-02.jpg`,
    price: 132,
    rating: 80,
    isBookmark: false,
    name: `Canal View Prinsengracht`,
    type: `apartment`
  }
};

it(`Click on city card correctly works`, () => {
  const {place} = mock;
  const clickHandler = jest.fn();
  clickHandler.mockReturnValue(place.id);
  const mouseEnterHandler = jest.fn();
  const mouseOverHandler = jest.fn();
  const comp = shallow(
      <PlaceCard
        place = {place}
        onClick = {clickHandler}
        onMouseEnter = {mouseEnterHandler}
        onMouseOver = {mouseOverHandler}
      />
  );

  const btn = comp.find(`.place-card__image-wrapper a`);
  expect(btn.length).toEqual(1);
  btn.simulate(`click`);

  expect(clickHandler).toHaveBeenCalledTimes(1);
  expect(clickHandler.mock.results[0].value).toEqual(place.id);

});
