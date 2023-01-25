import React from "react";
import ReactDom from "react-dom/client";
import App from "./components/app";
import './styles/global.scss'

const root = ReactDom.createRoot(document.getElementById("app"));
root.render(<App />)