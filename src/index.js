import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";
import router from "./routes/index";
import axios from "axios";
import "react-tooltip/dist/react-tooltip.css";
import { Provider } from "react-redux";
import { store } from "./app/store";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers.common[
  "Authorization"
] = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMThhM2IwZTUxOGE3NjZmYzEyNWFjZmMxNjg4MjhmOSIsIm5iZiI6MTcyOTc2MTIxOC45NDg2NTksInN1YiI6IjY3MWEwY2M4YTRhYzhhNDMyYzVjMDIxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gb8oPjMQNMagtMa2w1Y-oXyym-2MotIonfXIuQQJ5Ck`;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
  // </React.StrictMode>
);
reportWebVitals();
