import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import DataContextProvider from "./contexts/DataContextProvider.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <DataContextProvider>
    <App />
  </DataContextProvider>
);

// console.log(Array.from({ length: 7 }, (_, index) => index));
