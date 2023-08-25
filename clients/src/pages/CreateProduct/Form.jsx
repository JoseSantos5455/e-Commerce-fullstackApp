import React, { useEffect } from 'react'
import style from "./Form.module.css"
import Validation from "../../components/Validation/Validation"
import { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { createProducts } from '../../Redux/actions/actions'
import { getCategories } from '../../Redux/actions/actions'
const Form = () => {

  const categori = useSelector((state)=> state.ctgri)
  const dispatch = useDispatch()

  useEffect(()=>{
      dispatch(getCategories())
  },[dispatch])


  const [form, setForm] = useState({
    name: "",
    price: "",
    description: "",
    stock: "",
    valoration: "",
    category: [],
    image: "",
  }
  )


const [error, setError] = useState({
  name: "",
  price: "",
  description: "",
  stock: "",
  valoration: "",
  category: [],
  image: "",
})


const handlerChange = (event) => {
  setForm({
      ...form,
      [event.target.name]: event.target.value
  })
  setError(Validation({ 
      ...form,
      [event.target.name]: event.target.value
  }))
  console.log(form);
}

const handlerCheck = (event) => {
  const { value, checked } = event.target;
  const selectedCategory = form.category;

  if (checked) {
    if (selectedCategory.length >= 1) {
      setError({ ...error, category: "Solo se permiten una categoria" });
      return;
    }
    setForm({ ...form, category: [...selectedCategory, value] });
  } else {
    const updatedCategory = selectedCategory.filter((ctgo) => ctgo !== value);
    setForm({ ...form, category: updatedCategory });
  }
  setError({ ...error, category: "" });
};



  const handlerSubmit = (event) => {
    event.preventDefault()
    const isFormIncomplete = Object.values(form).some((value) => value === "");
    if (isFormIncomplete) {
      alert("Debes completar todos los campos");
    } else {
      dispatch(createProducts(form));
      alert("El Producto se creo de forma exitosa");
      setForm({
        name: "",
        price: "",
        description: "",
        stock: "",
        valoration: "",
        category: [],
        image: "",
      })
    }
  }

return (
  <div className={style.container}>
    <form onSubmit={handlerSubmit}>
        <div className={style.campos}>
        <label>Nombre:</label>
        <input  type="text" value={form.name} name='name' onChange={handlerChange} />
        {error.name && <span>{error.name}</span>}
        </div>

        <div className={style.campos}>
        <label>Precio:</label>
        <input  type="text" value={form.price} name='price' onChange={handlerChange} />
        {error.price && <span>{error.price}</span>}
        </div>

        <div className={style.campos}>
        <label>Descripcion:</label>
        <input  type="text" value={form.description} name="description" onChange={handlerChange}/>
        {error.description && <span>{error.description}</span>}
        </div>
        
        <div className={style.campos}>
        <label>Stock:</label>
        <input  type="number" value={form.stock} name="stock" onChange={handlerChange}/>
        {error.stock && <span>{error.stock}</span>}
        </div>
        
        <div className={style.campos}>
        <label>Valoracion:</label>
        <input  type="number" value={form.valoration} name="valoration" onChange={handlerChange}/>
        {error.valoration && <span>{error.valoration}</span>}
        </div>
        
        <div className={style.campos}>
        {
          categori.map((ctg) => {
            return (
              <label key={ctg.id}>
                <input
                  type="checkbox"
                  value={ctg.id}
                  name="category"
                  onChange={handlerCheck}
                />
                {ctg.name}
              </label>
            );
          })
        }
        {error.category && <span>{error.category}</span>}
        </div>
        
        <div className={style.campos}>
        <label>Imagen:</label>
        <input  type="text" value={form.image} name="image" onChange={handlerChange}/>
        {error.image && <span>{error.image}</span>}                
        </div>
          <button type='submit'>Crear Productos</button>
    </form>
  </div>
  )
}

export default Form