import React, {Component} from "react";
import PropTypes from "prop-types";
import PlaceCard from "../place-card/place-card.jsx";

export default class PlacesCardList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeId: -1
    };

  }

  render() {
    const {places} = this.props;
    return <div className="cities__places-list places__list tabs__content">
      {places.map((it, i) =>
        <PlaceCard key={i}
          place = {it}
          onClick= {() => {
            return this.state.activeId;
          }}
          onMouseEnter = {() => this.setState({activeId: it.id})}
          onMouseLeave = {() => this.setState({activeId: -1})}
        />)}
    </div>;
  }
}

PlacesCardList.propTypes = {
  places: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    isPremium: PropTypes.bool.isRequired,
    img: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    isBookmark: false,
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf([`apartment`, `room`, `house`, `hotel`]).isRequired
  }))
};
