import React from "react";
import ReactDOM from "react-dom/client";
import Counter from "./components/Counter";

ReactDOM.createRoot(document.getElementById("counter") as HTMLElement).render(
  <React.StrictMode>
    <Counter />
  </React.StrictMode>
);
