import React, { useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'; 
import { useDispatch, useSelector } from 'react-redux'

export default function LogInButton() {
    const {loginWithRedirect} = useAuth0()
    

  return (
    <div>
       

                <button  
                onClick={()=>loginWithRedirect()}
                >
            LogIn
        
        </button>
        
        
      
    </div>
  )
}
