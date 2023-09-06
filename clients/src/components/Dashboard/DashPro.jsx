import React from 'react'
import Styles from './DashPro.module.css';
import Form from '../CreateProduct/Form';
import UserBuys from './UserBuys';


export default function DashPro() {
  return (
    <div className={Styles.view}>
      <h1>Admin dashboard</h1>
      
      <UserBuys/>
      <div className={Styles.form_wrapper}>
        <div className={Styles.form_left}>
           <h3>Sell your products in our platform <h4>D'Lujo</h4></h3>
        <img src="https://cdn-icons-png.flaticon.com/512/4072/4072860.png" alt="" />

        </div>
        
        <Form/>
      </div>

    </div>
  )
}

