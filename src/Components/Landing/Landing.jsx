import React, { Fragment, useState } from "react";

import styles from "./Landing.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo512 from "../../assets/logo512.png";
import AuthenticationModal from "../AuthenticationBackdrop/AuthenticationModal";
import Button from "../Button/Button";
import SignUp from "../../Containers/SignUp/Signup";
import Login from "../../Containers/Login/Login";
const Landing = (props) => {
  // Custom hooks.

  const [isModalOpen, setIsModalOpen] = useState();
  const [isCallLogin, setIsCallLogin] = useState(false);
  const [isCallSignUp, setIsCallSignUp] = useState(false);

  // Custom functions.

  const loginOpen = (e) => {
    setIsModalOpen(!isModalOpen);
    setIsCallLogin(!isCallLogin);
  };
  const signUpOpen = (e) => {
    setIsModalOpen(!isModalOpen);
    setIsCallSignUp(!isCallSignUp);
  };

  const closeModal = () => {
    setIsModalOpen(null);
  };

  return (
    <Fragment>
      {/* {isModalOpen && <AuthenticationModal onClick={closeModal} />} */}
      {isCallSignUp ? <SignUp/> : isCallLogin ? <Login/> : null}
      <div className={styles.backdrop}>
        <div className={styles.LandingMainContainer}>
          <Container fluid={true}>
            <Row>
              <Col className={styles.staticImage}>
                <img
                  src={logo512}
                  alt="Logo"
                  className={styles.containerImage}
                />
              </Col>
              <Col className={styles.userInteraction}>
                <img src={logo512} alt="Logo" className={`${styles.logo}`} />

                <div className={styles.landingContentArea}>
                  <div className={styles.welcomeText}>
                    <h1>Welcome Network</h1>
                    <h3>Join us now</h3>
                  </div>

                  <div className={styles.signUpDecision}>
                    <Button>Sign up with Apple</Button>
                    <br />
                    <br />

                    <Button>Sign up with Google</Button>
                    <br />
                    <br />

                    <Button onClick={signUpOpen}>Sign up with phone or email</Button>
                    <br />
                    <br />
                    <p className={styles.termsCondition}>
                      By signing up, you agree to the Terms of Services and
                      Privacy Policy
                    </p>
                  </div>

                  <div className={styles.loginDecision}>
                    <h4>Already have an account?</h4>
                    <Button onClick={loginOpen}>Sign in</Button>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </Fragment>
  );
};

export default Landing;
