import React, {useContext} from "react";
import { useHistory } from "react-router-dom";
import AuthenticationModal from "../../Components/AuthenticationBackdrop/AuthenticationModal";

import {Contexts} from "../../Contexts/AuthenticationContext";
import styles from "./SignUp.module.css";

const SignUp = (props) => {
  const history = useHistory();
  // const { isUserLoggedIn } = useContext(Context);

  const {setIsUserLoggedIn} = useContext(Contexts);

  async function enableSignUp(emailInputRef, passwordInputRef) {
    const data = {
      email: emailInputRef.current.value,
      password: passwordInputRef.current.value,
    };
    console.log(data);
    const response = await fetch(`${process.env.REACT_APP_URL}/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer my-token",
        "My-Custom-Header": "foobar",
      },
      body: JSON.stringify(data),
    });
    const json = await response.json();
    console.log(json);
    if (response.status === 200) {
      console.log(response.statusText);
      setIsUserLoggedIn(true);
      localStorage.setItem('userId', json.userId);
      // localStorage.setItem('LocalToken', response.token);
      history.replace("/home");
    } else {
      console.log(response.statusText);
    }
  }

  return (
    <AuthenticationModal
      onClick={props.onClick}
      header="Sign up"
      textA="Sign up with Apple"
      textB="Sign up with Google"
      textC="Sign up with Phone or email"
      textD="Forgot Password?"
      decision="Sign up"
      onSubmitData={enableSignUp}
    />
  );
};

export default SignUp;
