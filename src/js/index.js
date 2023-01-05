//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash, faCircleCheck } from "@fortawesome/free-solid-svg-icons";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
ReactDOM.render(<Home faPencil={faPencil} faTrash={faTrash} faCircleCheck={faCircleCheck}/>, document.querySelector("#app"));
