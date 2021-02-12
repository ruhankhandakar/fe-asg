import React from "react";
import ReactDOM from "react-dom";

// Custom Component
import App from "./App";

// Others
import { DataProvider } from "./context";

// Custom CSS
import "./index.css";

ReactDOM.render(
  <DataProvider>
    <App />
  </DataProvider>,
  document.getElementById("root")
);
