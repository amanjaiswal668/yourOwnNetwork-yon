import React, { Fragment, useContext } from "react";

import {
  Link,
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
  Redirect,
} from "react-router-dom";
import Content from "../../Components/Content/Content";
import Landing from "../../Components/Landing/Landing";
import Sidebar from "../../Components/Sidebar/Sidebar";
import RenderContent from "../../Containers/RenderContent/RenderContent";
import { AuthContextProvider } from "../../Contexts/AuthenticationContext";
import { Contexts } from "../../Contexts/AuthenticationContext";
import { TweetContextsProvider } from "../../Contexts/TweetContext";
import styles from "./Screen.module.css";

const Screen = (props) => {
  // const { isUserLoggedIn } = useContext(Context);

  const { isUserLoggedIn, sessionToken, userIsLoggedInWithToken } =
    useContext(Contexts);
  console.log(sessionToken);
  return (
    // <RenderContent />
    <AuthContextProvider>
      {/* <Router> */}
      <Switch>
        {!userIsLoggedInWithToken && (
          <Route exact path="/home">
            
              <RenderContent />
          </Route>
        )}
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="*">
          <Redirect to="/"></Redirect>
        </Route>
      </Switch>
      {/* </Router> */}

      {/* <Router>
        {isUserLoggedIn ? (
          <Route path="/home">
            <RenderContent />
          </Route>
        ) : (
          <Route path="/">
            <Landing />
          </Route>
        )}
      </Router> */}
    </AuthContextProvider>
  );
};

export default Screen;
