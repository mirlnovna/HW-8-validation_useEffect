import React from "react";
import { Styledmain } from "../Global/Global";
import Navigation from "./Navigation";

const MainHeader = (props) => {
  return (
    <Styledmain>
      <header className={["main-header"]}>
        <h1>A Typical Page</h1>
        <Navigation
          state={props.state}
          setState={props.setState}
          isLoggedIn={props.isAuthenticated}
          onLogout={props.onLogout}
        />
      </header>
    </Styledmain>
  );
};

export default MainHeader;
