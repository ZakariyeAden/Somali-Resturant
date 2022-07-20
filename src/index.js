import React,{Suspense} from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import 'animate.css';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
    <Suspense fallback={<p className="test">Loading...</p>}>
      <App />
      </Suspense>
    </React.StrictMode>
  </BrowserRouter>
);
