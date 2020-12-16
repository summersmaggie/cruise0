import logo from './cruise.png';
import './App.css';
import React from "react";
import LoginButton from "./views/Login";
import LogoutButton from "./views/Logout";
import AuthenticationButton from "./views/authentication-button";
import Profile from "./views/Profile";
import NavBar from "./views/nav-bar.js"
import { useAuth0 } from "@auth0/auth0-react";

// function App() {
//   return (
//     <div className="App">
//         <header className="App-header">
//           />
//       <div class="row">
//         <AuthenticationButton />
//       </div>
//       </header>
//       <div class="col-sm">
//         <Profile />
//       </div>
//     </div>
//     );
// }

const App = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

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
        <div class="row">
            <Profile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
