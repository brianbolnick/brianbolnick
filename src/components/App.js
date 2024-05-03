import React from "react";
import "../css/App.css";
import Home from "./Home/HomePage.js";
import NotFound from "./NotFound.js";
import AuthError from "./AuthError.js";
import Destinder from "./Destinder.js";
import SellOut from "./Sellout.js";
import Icpm from "./Icpm.js";
import Gilagoat from "./Gilagoat.js";
import About from "./About.js";
// import Spin from './SpinDemo.js';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Route, Routes, useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();
  const currentKey = location.pathname.split("/")[1] || "/";
  const timeout = { enter: 300, exit: 200 };

  return (
    <TransitionGroup
      component="main"
      className="page-main"
      style={{ height: "100%" }}
    >
      <CSSTransition
        key={currentKey}
        timeout={timeout}
        classNames="fade"
        appear
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/destinder" element={<Destinder />} />
          <Route path="/sellout" element={<SellOut />} />
          <Route path="/icpm" element={<Icpm />} />
          <Route path="/gilagoat" element={<Gilagoat />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/spin-demo" element={<Spin />} /> */}
          <Route path="/auth_error" element={<AuthError />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default App;

