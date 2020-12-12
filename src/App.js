import logo from './cruise.png';
import './App.css';
import React from "react";
import LoginButton from "./views/Login";
import LogoutButton from "./views/Logout";
import Profile from "./views/Profile";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  return (
    <div className="App">
        <header className="App-header">
          <p>  Welcome to Cruise0! </p>
          <img src={logo} className="App-logo" alt="logo" />
      <div class="row">
        <div class="col-md">
          <LoginButton />
        </div>
        <div class="col-md">
          <LogoutButton />
        </div>
      </div>
      </header>
      <div class="col-sm">
        <Profile />
      </div>
    </div>
    );
}

export default App;
