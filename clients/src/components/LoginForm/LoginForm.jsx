import React, { useState } from 'react'
import Styles from './LoginForm.module.css'
import Nav from '../navBar/Nav';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../Footer/Footer';
import {  updateUser } from '../../Redux/actions/actions';


export default function LoginForm() {
    let userRedux = useSelector(state => state.user)
    let dispatch = useDispatch()
   let [user, setUser] =  useState({
    id: userRedux.id,
    country: null,
    adress_st: null,
    adress_num: null,
    department: null,
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

   let submitForm = (e)=>{
    e.preventDefault()
    dispatch(updateUser(user.id, user.adress_st, user.country, user.adress_num, user.department, user.zip))
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
        <form  className={Styles.form}>
            <label htmlFor="country">Your Country</label>
            <input type="text"
             name='country'
             onChange={handleChange} />

            <label htmlFor="adress">Your adress</label>
            <div className={Styles.inp_adress}>
                <input type="text"
                 name='adress_st'
                 onChange={handleChange}
                 placeholder=' St: Evergreen Av.' />
                <input type="number"
                name='adress_num'
                placeholder='N°: 742'
                onChange={handleChange} />
            </div>
            <div className={Styles.div_zip}>
                <div className="">
                <label htmlFor="zip">The ZIP code</label>
                    <input type="number"
                    name='zip'
                    onChange={handleChange} />
                </div>
                <div className="">
                <label htmlFor="zip">Departament N°</label>
                <input type="number" name='department' placeholder='Departament or Stage'
                onChange={handleChange} />
                </div>
            </div>
            <button type='submit' onClick={submitForm} className={Styles.btn_submit}>Submit</button>
        </form>
    </div>
    <div className={Styles.footer}>
        <Footer />
    </div>
</div>
  )
}
