import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Home } from "../content/home/Home";
import { Gallery } from "../content/gallery/Gallery";
import { Booking } from "../content/boking/Booking";
import { Header } from "../header/Header";
import { NoMatchPage } from "../content/noMachPage/NoMachPage";
import styles from "./App.module.css";
export const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <div className={styles.box}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/booking" component={Booking} />
          <Route component={NoMatchPage} />
        </Switch>
      </div>
      <div className={styles.footer}>
        Engraving Ryazan ©2019 Created by Nefedov Sergey
      </div>
    </Router>
  );
};
