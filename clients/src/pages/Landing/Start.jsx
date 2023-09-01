import Styles from './Start.module.css'
import NavBar from '../../components/navBar/Nav'
import Featured from '../../components/Featured/Featured'
import Carrousel from '../../components/Carrousel/Carrousel'
import Footer from '../../components/Footer/Footer'
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { createUser } from '../../Redux/actions/actions'




export default function Start() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  let dispatch = useDispatch()
 
  useEffect(()=>{
    if(user && isAuthenticated){
      dispatch(createUser(user.name))
    }
  },[])
  
  return (
    <div className={Styles.container}>
      <div className={Styles.wrapper}>
        <NavBar />
      </div>
      <div className={Styles.content}>
        <div className={Styles.featured}>
          <Featured />
        </div>
        <div className={Styles.carrousel}>
          <Carrousel />
        </div>
      </div>
      <Footer />
    </div>
  )
}
