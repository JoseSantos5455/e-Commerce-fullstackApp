
import { useAuth0 } from "@auth0/auth0-react";
import Styles from './LogOut.module.css'
import { logoutUser } from '../../Redux/actions/actions'
import { useDispatch } from 'react-redux';


export default function LogOut() {
    const { logout } = useAuth0();
    const dispatch = useDispatch()

    

  const handleLogout = () =>{
    // event.preventDefault();
    dispatch(logoutUser())
    
    logout({ logoutParams: { returnTo: window.location.origin } });
  }



  return (
    <div className={Styles.wrapper}>
        <button
        onClick={handleLogout}
        // onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
        >LogOut</button>
    </div>
  )
}
