import React, { useState } from 'react'
import Styles from './LoginForm.module.css'
import Nav from '../navBar/Nav';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../Footer/Footer';
import {  updateUser } from '../../Redux/actions/actions';
import validate from './validate';


export default function LoginForm() {
    let userRedux = useSelector(state => state.user)
    let dispatch = useDispatch()
   let [user, setUser] =  useState({
    id: userRedux.id,
    country: null,
    adress_st: null,
    adress_num: 0,
    department: 0,
    zip: 0
    }
   )
   const [errors, setErrors] = useState({})
   let handleChange = (e)=>{
    const { name, value} = e.target; 
    
          setUser(
        {
        ...user,
       [ name]: value,
    }
    )
    console.log(errors)
    console.log(user)
   }

   let submitForm = (e)=>{
    e.preventDefault()
    setErrors(validate( (prevValues)=>( {
        ...prevValues,
        [errors]: value
    })))
    if(!errors.error && Object.keys(errors).length === 0){

        dispatch(updateUser(user.id, user.adress_st, user.country, user.adress_num, user.department, user.zip))
    }
    else(alert(errors.error))
   }

  return (
 <div className={Styles.view}>

    <div className={Styles.wrapper}>
        <div className={Styles.text}>

        <p>Before you can proceed with your purchase, we need a bit more information from you</p> {userRedux.name && (<p> ,{userRedux.name.split(' ')[0]}</p>)}
        <p className={Styles.p_where}>Where should we send your packages? </p>
        <img src="https://delivery.berazategui.gov.ar/web/web/assets/img/persona.png" alt="delivery man"  
        className={Styles.img_delivery}/>

        </div>
        <form  className={Styles.form}
        onChange={handleChange}
        >
            <label htmlFor="country">*Your Country</label>
            <input type="text"
             name='country'
             placeholder= {errors.country ? (
                `${errors.country}`
              ):('Costa Rica')}
              />
              

            <label htmlFor="adress">*Your adress</label>
            <div className={Styles.inp_adress}>
                <input type="text"
                 name='adress_st'
                 placeholder={errors.adress_st ? (
                    `${errors.adress_st}`
                  ):(' St: Evergreen Av.')}
                  />
                <input type="number"
                name='adress_num'
                placeholder={errors.adress_num ? (
                    `${errors.adress_num}`
                  ):('N°: 742')}
                
                
                 />
            </div>
            <div className={Styles.div_zip}>
                <div className="">
                <label htmlFor="zip">*The ZIP code</label>
                    <input type="number"
                    name='zip'
                    placeholder={errors.zip ? (
                        `${errors.zip}`
                      ):('123')}
                    
                     />
                </div>
                <div className="">
                <label htmlFor="zip">*Apartment N°</label>
                <input type="number" name='department'
                 placeholder={errors.department ? (
                    `${errors.department}`
                  ):('Departament or Stage'
                  )}
                
                 />
                </div>
            </div>
            <button type='submit' onClick={submitForm} className={Styles.btn_submit}>Submit</button>
            <div className={Styles.div_errors}>
        {Object.keys(errors).length !== 0 ? (
          Object.values(errors).map((err, index) => (
            <p key={index}>{err}</p>
          ))
        ) : (
          null
        )}
      </div>
        </form>
        
    </div>
    <div className={Styles.footer}>
    </div>
</div>
  )
}
