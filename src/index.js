import React from "react";
import ReactDOM from "react-dom";
import {App} from "./components/app/app.jsx";
import mock from "./mocks/offers.js";

ReactDOM.render(
    <App
      places = {mock}
    />,
    document.getElementById(`root`)
);
