import React, { useState } from 'react'

export default function LoginForm() {
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

    <div>
        <form action="" >
            <input type="text"
             name='country'
             onChange={handleChange} />

            <input type="text"
             name='adress'
             onChange={handleChange} />
             
            <input type="text" 
            name='zip'
            onChange={handleChange} />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}
