import React from "react";
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {MainScreen} from "./main-screen";

Enzyme.configure({adapter: new Adapter()});

it(`Click on city card correctly works`, () => {
  const clickHandler = jest.fn();
  const comp = shallow(
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
        onClick = {clickHandler}
      />
  );

  const btn = comp.find(`.place-card__name a`).at(0);
  expect(btn.length).toEqual(1);
  btn.simulate(`click`);

  expect(clickHandler).toHaveBeenCalledTimes(1);

});
