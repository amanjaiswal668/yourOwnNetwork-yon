import React, { Fragment, useContext, useEffect, useState } from "react";
import Content from "../../Components/Content/Content";

import { useHistory } from "react-router-dom";

import styles from "./RenderContent.module.css";

// import Button from "../../Components/Button/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { Contexts } from "../../Contexts/AuthenticationContext";
import {
  TweetContexts,
  TweetContextsProvider,
} from "../../Contexts/TweetContext";
import Navigation from "../../Components/Navbar/Navbar";

function createCard(params) {
  return <Content post={params.post} time={params.time}></Content>;
}

const RenderContent = () => {
  const {
    setIsUserLoggedIn,
    token,
    userIsLoggedInWithToken,
    isContentAvailable,
    setIsContentAvailable,
  } = useContext(Contexts);
  const [isPostAvailable, setIsPostAvailable] = useState([]);
  const [userPostContent, setUserPostContent] = useState();

  const history = useHistory();
  useEffect(() => {
    fetchData();
    }, []);
    async function fetchData() {
      console.log("fetch data is called");
      console.log(localStorage.getItem("userId"));
      const isUserID = localStorage.getItem("userId");

      const response = await fetch(`${process.env.URL}/post`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          "My-Custom-Header": "foobar",
        },
        body: JSON.stringify({ userId: isUserID }),
      });
      const json = await response.json();
      console.log(json);
      setIsContentAvailable(json);
      setIsPostAvailable(json["post"]["post"]);
      if (response.status === 200) {
        console.log(response.statusText);
      } else {
        console.log(response.statusText);
      }
    }
    
    // }
  

  // Post data
  async function postTweet() {
    console.log("fetch data is called");

    const isUserID = localStorage.getItem("userId");
    console.log(isUserID);
    const response = await fetch(`${process.env.URL}/upload`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        "My-Custom-Header": "foobar",
      },
      body: JSON.stringify({
        post: userPostContent,
        time: new Date().getTime().toString(),
        userId: isUserID,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (response.status === 200) {
      console.log(response.statusText);
      fetchData();
    } else {
      console.log(response.statusText);
    }
  }

  // Handle change events.

  const handleTextChange = (e) => {
    const text = e.target.value;
    setUserPostContent(text);
  };
  var x = isPostAvailable;
  return (
    <Fragment>
      <Navigation />
      <div className={styles.RenderContentContainer}>
        <Form className={` ${styles.form}`}>
          <FormControl
            type="text"
            placeholder="Enter your thoughts"
            className="me-2"
            aria-label="post"
            onChange={handleTextChange}
          />
          <Button
            variant="outline-success"
            className={styles.uploadButton}
            onClick={postTweet}
          >
            Upload
          </Button>
        </Form>

        {x.length == 0 ? "No data" : x.map(createCard)}

        {/* <Content /> */}
      </div>
    </Fragment>
  );
};

export default RenderContent;
