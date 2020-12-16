import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Login from "./views/Login";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from "react-router-dom";


ReactDOM.render(
  <Auth0Provider
    domain="dev-6n0n6so2.us.auth0.com"
    clientId="muZdb5VK2heUJgulYhQn3MA0F7jUaZ1L"
    redirectUri={window.location.origin}
  >
  <BrowserRouter>
    <App />
    </BrowserRouter>,
  </Auth0Provider>,
  document.getElementById("root")
);
