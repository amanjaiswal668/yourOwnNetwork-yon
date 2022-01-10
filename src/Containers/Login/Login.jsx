import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import styles from "./Login.module.css";
import AuthenticationModal from "../../Components/AuthenticationBackdrop/AuthenticationModal";
import { Contexts } from "../../Contexts/AuthenticationContext";

const Login = (props) => {
  const { setIsUserLoggedIn, sessionToken, setToken, setIsUserID } =
    useContext(Contexts);
  const history = useHistory();

  async function enableLogin(emailInputRef, passwordInputRef) {
    const data = {
      email: emailInputRef.current.value,
      password: passwordInputRef.current.value,
    };
    console.log(data);
    const response = await fetch(`${process.env.REACT_APP_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer my-token",
        "My-Custom-Header": "foobar",
      },
      body: JSON.stringify(data),
    });
    const json = await response.json();
    console.log(json.userId);
    if (response.status === 200) {
      console.log(response.statusText);
      setIsUserLoggedIn(true);
      setToken(json.token);
      localStorage.setItem('userId', json.userId);
      setIsUserID(json.userId);
      history.replace("/home");
    } else {
      console.log(response.statusText);
    }
  }

  return (
    <AuthenticationModal
      onClick={props.onClick}
      header="Login to your account"
      textA="Login with Apple"
      textB="Login with Google"
      textC="Login with Phone or email"
      textD="Forgot Password?"
      decision="Login"
      onSubmitData={enableLogin}
    />
  );
};

export default Login;
