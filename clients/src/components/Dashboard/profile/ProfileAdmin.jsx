import { useAuth0 } from '@auth0/auth0-react'
import { useSelector } from 'react-redux'
import Styles from './ProfileAdmin.module.css';
import { NavLink } from 'react-router-dom';

export default function ProfileAdmin() {
    const {user} = useAuth0()
    let userRedux = useSelector(state => state.user)
  return (
    <div className={Styles.wrapper}>
        <img src={user.picture} alt="" />
        <p>{userRedux.name}</p>
        {
          userRedux.adress_st ? (<div className={Styles.div_adress}>
            <p> Your adress:</p>
                    <p>{`${userRedux.adress_st}`}</p>
                    <p>{`, N° ${userRedux.adress_num} - `}</p>
                    <p>{` Apt. ${userRedux.department}`}</p>
          </div>
            
          ):(
            <NavLink to={'/login'}>Complete profile </NavLink>
          )
        }
    </div>
  )
}
