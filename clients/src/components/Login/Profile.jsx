import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Styles from './Profile.module.css'
import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom'
import LogOut from "./LogOut";
import { useSelector } from "react-redux";
const Profile = () => {

  let userRedux = useSelector(state => state.user)
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

 //dropdown para logout profile
    const [showMenu, setShowMenu] = useState(false);
 

    const handleMouseEnter = () => {
      setShowMenu(true);
    };
    
    const handleMouseLeave = () => {
      setShowMenu(false);
    };


  return (
    
      <div onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
       
          { !showMenu &&  (<Link to={'/user'} className={Styles.no_deco}>

          <div className={Styles.div_user}>

            <img src={user.picture}
             alt={user.name}
             className={Styles.img_profile} />
            
             <p className={Styles.p_user_name}>{user.given_name}</p>
          </div>
             </Link>)}
        {
                 showMenu && (
                  <div className={Styles.drop_user}>
                  <img src={user.picture}
                    alt={user.name}
                     className={Styles.img_profile_drop} />
                <h6 className={Styles.p_user_name}>{user.given_name}</h6>
                      <NavLink to={"/admin"} className={Styles.profile_p}>
                        <p >
                          Profile
                          </p>
                          
                          </NavLink>
                      {
                        !userRedux.adress_st && (
                            <NavLink to='/login' className={Styles.link_complete_profile}  >
                              <p>
                              complete profile
                              </p>
                            </NavLink>

                        )
                      }
                      
                      <p>
                        <LogOut/>
                      </p>
                      
                  </div>
                 )
                 }
        
      </div>
    
  );
};

export default Profile;