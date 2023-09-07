import DashPro from '../../components/Dashboard/DashPro'
import { useAuth0 } from '@auth0/auth0-react'; 
import NotFound from '../NotFound/NotFound'
import Nav from '../../components/navBar/Nav';
import Footer from '../../components/Footer/Footer';
import Styles from './Dashboard.module.css'
import { MutatingDots  } from  'react-loader-spinner'



export default function Dashboard() {
    const { isAuthenticated, isLoading} = useAuth0()

  if(isLoading){
    return(
      <div className={Styles.loading}>

          <MutatingDots 
           height="100"
           width="100"
           color="rgb(255, 210, 47)"
           secondaryColor= 'rgb(255, 217, 47)'
           radius='12.5'
           ariaLabel="mutating-dots-loading"
           wrapperStyle={{}}
           wrapperClass=""
           visible={true}
          />
          <p>loading...</p>
      </div>
    
    )
  }


  return (
    <div>
      <Nav/>
      <div className={Styles.body}>

        {isAuthenticated ?(
          <DashPro></DashPro>
          ):(
            <div className={Styles.not_found}>
                <NotFound/>
            </div>
          )
        }            
        </div>
      <Footer/>
    </div>
  )
}
