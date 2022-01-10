import React from 'react'

import logo from './logo.svg';
import './App.css';

import { BrowserRouter } from 'react-router-dom';

import Screen from './Containers/Screen/Screen';
import { AuthContextProvider } from "../src/Contexts/AuthenticationContext";

import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>

        <Screen />

      </BrowserRouter>
    </AuthContextProvider>
  )
}

export default App;
