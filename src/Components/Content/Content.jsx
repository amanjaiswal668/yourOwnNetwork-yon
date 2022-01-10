import React, { Fragment, useContext } from "react";

import styles from "./Content.module.css";

import Button from "../Button/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import logo512 from "../../assets/logo512.png";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

import { TweetContexts , TweetContextsProvider} from "../../Contexts/TweetContext";

const Content = (props) => {

  // const { isPostAvailable, setIsPostAvailable } = useContext(TweetContexts);
  return (
    <Fragment>
      <Container className={styles.PostContainer}>
        <Card className={styles.card}>
          <Card.Body>
            <Card.Title>{props.post}</Card.Title>
            <Card.Text>
              {props.post}
            </Card.Text>
            {/* <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link> */}
          </Card.Body>
        </Card>
      </Container>
    </Fragment>
  );
};

export default Content;
