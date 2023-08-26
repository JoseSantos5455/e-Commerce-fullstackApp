import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Styles from './Profile.module.css'

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    
      <div>
        {  isAuthenticated && (
          <div className={Styles.div_user}>

            <img src={user.picture}
             alt={user.name}
             className={Styles.img_profile} />
            
             <p>{user.given_name}</p>
          </div>
          )
        }
      </div>
    
  );
};

export default Profile;