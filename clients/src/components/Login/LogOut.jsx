import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import Styles from './LogOut.module.css'


export default function LogOut() {
    const { logout } = useAuth0();
  return (
    <div className={Styles.wrapper}>
        <button
        onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
        >LogOut</button>
    </div>
  )
}
