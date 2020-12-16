import logo from './cruise.png';
import './App.css';
import React from "react";
import LoginButton from "./views/Login";
import LogoutButton from "./views/Logout";
import AuthenticationButton from "./views/authentication-button";
import Profile from "./views/Profile";
import NavBar from "./views/nav-bar.js"
import { useAuth0 } from "@auth0/auth0-react";
import { useLocation } from 'react-router-dom';

const App = () => {
  const search = useLocation().search;
  const error_description = new URLSearchParams(search).get('error_description');
  const error = new URLSearchParams(search).get('error');

  const { user, isAuthenticated, isLoading } = useAuth0();

  console.log(error_description);
  console.log(error);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <div id="app" className="d-flex flex-column h-100">
      <NavBar />
      <div class="container">
        <div class="row">
          <div class="col">
            <h2> Cruise0 </h2><p><i>A Travel0 Brand</i></p>
            <img src={logo} className="App-logo" alt="logo" />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <h4> {error_description} </h4>
          <Profile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
