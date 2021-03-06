import React from "react";
import PropTypes from "prop-types";


const PlaceCard = (props) => {
  const {place, onClick, onMouseEnter, onMouseLeave} = props;
  return <article className="cities__place-card place-card">
    { place.isPremium ?
      <div className="place-card__mark">
        <span>Premium</span>
      </div> : null
    }

    <div className="cities__image-wrapper place-card__image-wrapper">
      <a href="#" onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <img className="place-card__image" src={place.img} width="260" height="200" alt="Place image"/>
      </a>
    </div>
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{place.price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <button className={`place-card__bookmark-button button ${place.isBookmark ? `place-card__bookmark-button--active` : ``} `} type="button">
          <svg className="place-card__bookmark-icon" width="18" height="19">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{width: `${place.rating}%`}}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <a href="#">{place.name}</a>
      </h2>
      <p className="place-card__type">{place.type}</p>
    </div>
  </article>;
};

PlaceCard.propTypes = {
  place: PropTypes.shape({
    id: PropTypes.number.isRequired,
    isPremium: PropTypes.bool.isRequired,
    img: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    isBookmark: false,
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf([`apartment`, `room`, `house`, `hotel`]).isRequired
  }),
  onClick: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func
};

export default PlaceCard;
