import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Styles from './Profile.module.css'
import { Link } from "react-router-dom";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    
      <div>
       
          <Link to={'/user'} className={Styles.no_deco}>

          <div className={Styles.div_user}>

            <img src={user.picture}
             alt={user.name}
             className={Styles.img_profile} />
            
             <p className={Styles.p_user_name}>{user.given_name}</p>
          </div>
             </Link>
        
        
      </div>
    
  );
};

export default Profile;