import React, { useState } from 'react'
import Styles from './LoginForm.module.css'
import Nav from '../navBar/Nav';
import { useSelector } from 'react-redux';
import Footer from '../Footer/Footer';


export default function LoginForm() {
    let userRedux = useSelector(state => state.user)

   let [user, setUser] =  useState({
    country: null,
    adress: null,
    zip: null
    }
   )
   let handleChange = (e)=>{
    const { name, value} = e.target; 
          setUser(
        {
        ...user,
       [ name]: value,
    }
    )
    console.log(user)
   }


  return (
 <div className={Styles.view}>

      <Nav/>
    <div className={Styles.wrapper}>
        <div className={Styles.text}>

        <p>Before you can proceed with your purchase, we need a bit more information from you, {userRedux.name.split(' ')[0]}</p>
        <p className={Styles.p_where}>Where should we send your packages? </p>
        <img src="https://delivery.berazategui.gov.ar/web/web/assets/img/persona.png" alt="delivery man"  
        className={Styles.img_delivery}/>

        </div>
        <form action="" className={Styles.form}>
            <label htmlFor="country">Your Country</label>
            <input type="text"
             name='country'
             onChange={handleChange} />

            <label htmlFor="adress">Your adress</label>
            <input type="text"
             name='adress'
             onChange={handleChange} />
             
            <label htmlFor="zip">The ZIP code</label>
            <input type="text" 
            name='zip'
            onChange={handleChange} />
            <button type='submit' className={Styles.btn_submit}>Submit</button>
        </form>
    </div>
    <div className={Styles.footer}>
        <Footer />
    </div>
</div>
  )
}
