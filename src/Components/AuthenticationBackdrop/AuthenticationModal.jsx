import React, { Fragment, useState, useRef } from "react";

import styles from "./AuthenticationModal.module.css";

import Button from "../Button/Button";
import logo512 from "../../assets/logo512.png";

import Form from "react-bootstrap/Form";

function AuthenticationModal(props) {
  // Custom hooks.

  const [isInputLoginSignUp, setIsInputLoginSignUp] = useState();
  const [isLoading, setIsLoading] = useState();
  const [isModalOpen, setIsModalOpen] = useState();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  // Custom Functions

  const inputData = () => {
    setIsInputLoginSignUp(!isInputLoginSignUp);
  };

  const loginBackdrop = (e) => {
    setIsModalOpen(!isModalOpen);
  };
  const signUpBackdrop = (e) => {
    setIsModalOpen(!isModalOpen);
  };

  const closeModal = () => {
    setIsModalOpen(null);
  };

  return (
    <Fragment>
      <div className={styles.backdrop} onClick={closeModal}>
        <div className={styles.modalMainContainer}>
          {/* <img src={logo512} alt="Logo" className={styles.loginModalLogo} /> */}
          <div className={styles.modalMainContent}>
            <div className={styles.modalHeaderText}>
              <h3>{props.header}</h3>
            </div>
            {isInputLoginSignUp ? (
              <div className={styles.inputLoginContainer}>
                <input
                  type="text"
                  placeholder="Enter your email"
                  required
                  ref={emailInputRef}
                />
                <br />
                <input
                  type="password"
                  placeholder="Enter your password"
                  required
                  ref={passwordInputRef}
                />
                {isLoading ? (
                  <h2>Connecting</h2>
                ) : (
                  <Button
                    onClick={() =>
                      props.onSubmitData(emailInputRef, passwordInputRef)
                    }
                  >
                    {props.decision}
                  </Button>
                )}

                {/* <Button onClick={() => props.onSubmitData(emailInputRef, passwordInputRef)}>{props.decision}</Button> */}
              </div>
            ) : (
              <>
                <div className={styles.modalSignInButton}>
                  <Button>{props.textA}</Button>
                  <br />
                  <br />
                  <Button>{props.textB}</Button>
                </div>
                <div className={styles.customSignInButton}>
                  <input type="text" placeholder="Enter details" />
                  <br />
                  <br />
                  <br />
                  <Button onClick={inputData}>{props.textC}</Button>
                </div>
                <div className={styles.askForSignUp}>
                  <Button>{props.textD}</Button>
                  <h3>Don't have an account? Sign up</h3>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      )
    </Fragment>
  );
}

export default AuthenticationModal;
