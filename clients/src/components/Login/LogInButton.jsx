import React, { useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'; 


export default function LogInButton() {
    const {User, isAuthenticated, loginWithRedirect} = useAuth0()
   
  return (
    <div>
       

                <button  
                onClick={()=>loginWithRedirect()}
                >
            LOGIN
        
        </button>
        
        
      
    </div>
  )
}
