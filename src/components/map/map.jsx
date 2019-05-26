import React, {Component} from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";


export default class CitiesMap extends Component {

  constructor(props) {
    super(props);

    const {coords, city} = props;

    this.city = city;
    this.offers = coords;
    this.icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });
    this.zoom = 12;
  }

  componentDidMount() {
    this.map = leaflet.map(`map`, {
      center: this.city,
      zoom: this.zoom,
      zoomControl: false,
      marker: true
    });
    this.map.setView(this.city, this.zoom);
    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this.map);
    this.offers.forEach((coord) => {
      leaflet
      .marker(coord, {icon: this.icon})
      .addTo(this.map);
    });
  }

  render() {
    return <div id="map" style={{'height': `100%`}}>
    </div>;
  }
}


CitiesMap.propTypes = {
  coords: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number).isRequired),
  city: PropTypes.arrayOf(PropTypes.number).isRequired
};
