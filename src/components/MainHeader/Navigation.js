import React from "react";
import { Nav } from "../Global/Global";
const Navigation = (props) => {
  return (
    <Nav className="nav">
      <ul>
        {props.isLoggedIn && (
          <li>
            <button>User</button>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <button onClick={() => props.setState(!props.state)}>Timer</button>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <button onClick={props.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </Nav>
  );
};

export default Navigation;
