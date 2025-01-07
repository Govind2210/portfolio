import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Cursor from "./components/Cursor";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div id="main">
      <Cursor />
      <App />
    </div>
  </React.StrictMode>
);
