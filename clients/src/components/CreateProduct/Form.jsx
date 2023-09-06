import React, { useEffect } from 'react'
import Styles from "./Form.module.css"
import Validation from "./Validation"
import { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { createProducts } from '../../Redux/actions/actions'
import { getCategories } from '../../Redux/actions/actions'
const Form = () => {

  const category = useSelector((state)=> state.categories)
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
    brand:[]
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
  <div className={Styles.container}>
    <form onSubmit={handlerSubmit}>
        <div className={Styles}>
        <label>Product Name:</label>
        <input  type="text" value={form.name} name='name' onChange={handlerChange} />
        {/* {error.name && <span>{error.name}</span>} */}
        </div>

        
        <div className={Styles.description}>
        <label>Description:</label>
        <textarea  type="text" className={Styles.inp_description} value={form.description} name="description" onChange={handlerChange}></textarea>
        {/* {error.description && <span>{error.description}</span>} */}
        </div>
        <div  className={Styles.separador_price}>
        
        <div className={` ${Styles.price} `}>
        <label>Price:</label>
        <input  type="text" value={form.price} name='price' onChange={handlerChange} />
        {/* {error.price && <span>{error.price}</span>} */}
        </div>



        <div className={` ${Styles.price} `}>
        <label>Stock:</label>
        <input  type="number" value={form.stock} name="stock" onChange={handlerChange}/>
        </div>
        </div>
        <div className={Styles.separador_valoration}>
           <div className={Styles.valoration}>
               <label>Brand:</label>
               <input  type="text"  name="valoration" onChange=       {handlerChange}/>
           </div>

           <div className={Styles.category}>
          <p>Category</p>
        <select name="category"  onChange={handlerCheck}>
         {category.map((ctg, idx) => (
           <option key={idx} value={ctg.id}>
                {ctg.name}
             </option>
             ))}
         </select>
        </div>
        </div>
        
        
        
        
        <div className={Styles.img_div}>
        <label>Image:</label>
        <input  type="text" value={form.image} name="image" onChange={handlerChange}/>
        </div>


          <button className={Styles.btn_submit} type='submit'>Sell product</button>
    </form>
  </div>
  )
}

export default Form