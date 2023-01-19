import React, { useEffect, useState } from "react";
import Users from "./components/Users/Users";
import Login from "./components/Login/Login";
import MainHeader from "./components/MainHeader/MainHeader";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [state, setState] = useState(false);

  // const [state, setState] = useState(0)

  // const add = () => {
  //   setState((prevState) => prevState + 1)
  // }

  // useEffect(() => {
  //   localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
  // }, [isLoggedIn]);

  useEffect(() => {
    const storedUserLoggedInfo = localStorage.getItem("islogin");

    if (storedUserLoggedInfo === "1") {
      isLoggedIn(true);
    }
  }, [isLoggedIn]);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    setIsLoggedIn((prevState) => !prevState);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("islogin");
  };
  return (
    <React.Fragment>
      <MainHeader
        isAuthenticated={isLoggedIn}
        onLogout={logoutHandler}
        state={state}
        setState={setState}
      />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {/* {isLoggedIn && <Home onLogout={logoutHandler} />} */}
        {/* <button onClick={add}>add</button> */}
        {isLoggedIn ? <Users state={state} /> : null}
      </main>
    </React.Fragment>
  );
}

export default App;
