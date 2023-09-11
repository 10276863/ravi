import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import Head1 from "./Components/Head1"
import Try from "./Components/Try";
import DivisionComponent from "./Components/DivisionComponent";
import Formformstyletext from "./Components/Formformstyletext";
import Pagination from "./Components/Pagination";
import Loginbackoffice from "./Components/Loginbackoffice";
import Backoffice from "./Components/Backoffice";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
  {/* <App/> */}
  {/* <Head1 /> */}
  {/* <Try /> */}
  {/* <DivisionComponent /> */}
  {/* <Formformstyletext/> */}
  {/* <Pagination/> */}
  <Loginbackoffice />
  
    </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
