import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useLocation } from 'react-router-dom';


const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
      console.log(user);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <h2>Welcome! 👋🏼</h2>
        <p>Here's your user profile:</p>

        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <p>{user.country}</p>
      </div>
    )
  );
};

export default Profile;
