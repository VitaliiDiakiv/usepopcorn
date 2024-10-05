import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.js";
// import StarRating from "./StarRating.js";
// import App_v1 from "./App_v1.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxRating={5} />
    <StarRating size={24} color="red" defaultRating={3} /> */}
    {/* <App_v1 /> */}
  </React.StrictMode>
);
