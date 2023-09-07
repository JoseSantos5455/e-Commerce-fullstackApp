import { useEffect } from 'react'
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
    description: "",
    price: "",
    stock: "",
    valoration: 0,
    categoryId: [],
    image: "",
    brand:""
  }
  )


const [ setError] = useState({
  name: "",
  description: "",
  price: "",
  stock: "",
  valoration: 0,
  categoryId: [],
  image: "",
  brand:""
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




  const handlerSubmit = (event) => {
    event.preventDefault()
    const isFormIncomplete = Object.values(form).some((value) => value === "");
    if (isFormIncomplete) {
      alert("Complete all fields");
    } else {
      alert("Product added");
      setForm({
        name: "",
        description: "",
        price: "",
        stock: "",
        valoration: 0,
        categoryId: [],
        image: "",
        brand:""
      })
      dispatch(createProducts(form));
    }
  }

return (
  <div className={Styles.container}>
    <form onSubmit={handlerSubmit}>
        <div className={Styles}>
        <label>Product Name:</label>
        <input  type="text" value={form.name} placeholder='Monitor' name='name' onChange={handlerChange} />
        </div>

        
        <div className={Styles.description}>
        <label>Description:</label>
        <textarea  type="text" className={Styles.inp_description} value={form.description} name="description" onChange={handlerChange}></textarea>
        </div>
        <div  className={Styles.separador_price}>
        
        <div className={` ${Styles.price} `}>
        <label>Price:</label>

        <input  type="number" value={form.price} placeholder={`${form.price}$`} name='price' onChange={handlerChange} />
        </div>



        <div className={` ${Styles.price} `}>
        <label>Stock:</label>
        <input  type="number" value={form.stock} name="stock" onChange={handlerChange}/>
        </div>
        </div>
        <div className={Styles.separador_valoration}>
           <div className={Styles.valoration}>
               <label>Brand:</label>
               <input  type="text"  name="brand" onChange={handlerChange}/>
           </div>

           <div className={Styles.category}>
          <p>Category</p>
        <select name="categoryId"  onChange={handlerChange}>
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