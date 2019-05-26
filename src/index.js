import React from "react";
import ReactDOM from "react-dom";
import {App} from "./components/app/app.jsx";
import {Offers, City} from "./mocks/offers.js";

ReactDOM.render(
    <App
      places = {Offers}
      city = {City}
    />,
    document.getElementById(`root`)
);
