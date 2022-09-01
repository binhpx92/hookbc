import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UseStateDemo from "./pages/HookDemo/UseStateDemo/UseStateDemo";
import UseEffectDemo from "./pages/HookDemo/UseEffectDemo/UseEffectDemo";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="" element={<App></App>}>
        <Route path="usestate" element={<UseStateDemo></UseStateDemo>}></Route>
        <Route path="useeffect" element={<UseEffectDemo></UseEffectDemo>}></Route>
        
      </Route>
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
