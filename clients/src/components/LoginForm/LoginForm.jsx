import  { useState } from 'react'
import Styles from './LoginForm.module.css'
import { useDispatch, useSelector } from 'react-redux';
import {  updateUser } from '../../Redux/actions/actions';
import validate from './validate';


export default function LoginForm() {
    let userRedux = useSelector(state => state.user)
    let dispatch = useDispatch()
   let [user, setUser] =  useState({
    id: userRedux.id,
    country: null,
    adress_st: null,
    adress_num: null,
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
    
   }

   let submitForm = (e) => {
    e.preventDefault();
    const validationErrors = validate(user);
    
  
    if (Object.keys(validationErrors).length === 0) {
      dispatch(
        updateUser(
          user.id,
          user.country,
          user.adress_st,
          user.adress_num,
          user.department,
          user.zip
        )

      );
     window.location = ('/admin');
    
    alert('Your profile has been updated :)');
      
    } else {
       
      setErrors(validationErrors);

      alert('Please, correct the errors in the form.');
    }
  };

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
              

            <div className={Styles.inp_adress}>
              <div className="street">
            <label htmlFor="adress_st">*Street Name</label>

                <input type="text"
                 name='adress_st'
                 placeholder={errors.adress_num ? (
                  `${errors.adress_st}`
                  ):('St: Evergreen Av.')}
                 
                 
                   />
              </div>
              <div className="number">

                   <label htmlFor="adress_num">N°</label>
                <input type="number"
                name='adress_num'
                placeholder={errors.adress_num ? (
                  `${errors.adress_num}`
                  ):('N°: 742')}
                  
                  
                  />
              </div>
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
              <p className={Styles.p_advert}>  The fields marked with (*) are required.</p>
            <div className={Styles.div_errors}>
  {Object.keys(errors).length !== 0 && (
    <div className={Styles.div_errors}>
      <p>Check your form again!</p>
    </div>
  )}
</div>

        </form>
        
    </div>
    
</div>
  )
}
