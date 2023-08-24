import React, { useState } from 'react'
import { useDispach } from "react-redux"
import { getNameProducts } from '../../Redux/actions/actions'
const searBar = () => {
    const [name, setName] = useState("")
    const dispatch = useDispach()

    const handlerName = (event) =>{
        setName(event.target.value)
    }

    const handlerSubmit = (event) => {
        event.preventDefault()
        dispatch (getNameProducts(name))

    }

  return (
    <div>
        <input 
        type="text" 
        value={name}
        placeholder="Buscar Producto"
        onChange={handlerName}
         />
         <button type='submit' onChange={handlerSubmit} ></button>
    </div>
  )
}

export default searBar