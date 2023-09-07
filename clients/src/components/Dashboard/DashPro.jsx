import Styles from './DashPro.module.css';
import Form from '../CreateProduct/Form';
import AdminData from './AdminData';
import ProfileAdmin from './profile/ProfileAdmin';
import { useSelector } from 'react-redux';

export default function DashPro() {
  const userRedux = useSelector(state => state.user)

  return (
    <div className={Styles.view}>
      
        <div className="">
            <h2>Admin dashboard</h2>
            <ProfileAdmin />


            <AdminData/>
            {
              userRedux.profile === 'Admin' && (

                <div className={Styles.form_wrapper}>
              <div className={Styles.form_left}>
                <h3>Sell your products in our platform <h4>D'Lujo</h4></h3>
              <img src="https://cdn-icons-png.flaticon.com/512/4072/4072860.png" alt="" />

              </div>
              
              <Form/>
            </div>
              )
            }

        </div>
      

    </div>
  )
}

