import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App.js";
import StarRating from "./StarRating.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating maxRating={5} messages={["1", "23", "34", "45", "56"]} />
    <StarRating size={24} color="red" defaultRating={3} />
  </React.StrictMode>
);
