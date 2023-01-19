import React, { useEffect, useState } from "react";
import { Conteiner } from "../Global/Global";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("hello world");
      setFormIsValid(
        enteredEmail.includes("@") && enteredPassword.trim().length > 6
      );
    }, 1500);

    return () => {
      console.log("clean up");
      clearTimeout(timer);
    };
  }, [enteredEmail, enteredPassword]);

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
    // console.log('email');

    // setFormIsValid(
    //   event.target.value.includes('@') && enteredPassword.trim().length > 6
    // );
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
    // console.log('password');

    // setFormIsValid(
    //   event.target.value.trim().length > 6 && enteredEmail.includes('@')
    // );
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes("@"));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <Conteiner>
      <Card className="login">
        <form onSubmit={submitHandler}>
          <div
            className={`${"control"} ${
              emailIsValid === false ? "invalid" : ""
            }`}
          >
            <label htmlFor="email" className="title">
              E-Mail
            </label>
            <input
              type="email"
              id="email"
              value={enteredEmail}
              onChange={emailChangeHandler}
              onBlur={validateEmailHandler}
            />
          </div>
          <div
            className={`${"control"} ${
              passwordIsValid === false ? "invalid" : ""
            }`}
          >
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={enteredPassword}
              onChange={passwordChangeHandler} //
              onBlur={validatePasswordHandler} //
            />
          </div>
          <div className="actions">
            <Button type="submit" className="btn" disabled={!formIsValid}>
              Login
            </Button>
          </div>
        </form>
      </Card>
    </Conteiner>
  );
};

export default Login;
