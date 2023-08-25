import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getNameProducts } from '../../Redux/actions/actions'
const searchBar = () => {
    const [name , setName] = useState("");
    const dispatch = useDispatch();
    const products = useSelector(state => state.products);

    const handlerName = (e) =>{
        setName(e.target.value)
    }

    const handlerSubmit = (e) =>{
        e.preventDefault()
        dispatch(getNameProducts(name))
    }

    return (
        <div>
            <h1>Resultados de la búsqueda:</h1>
            {products.map(result => (
                <p key={result.id}>{result.name}</p>
            ))}
            <input
                type="text" 
                placeholder="Buscar producto" 
                value={name}
                onChange={(e) => handlerName(e)}
            />
            <button onClick={(e) => handlerSubmit(e)}>Buscar</button>
        </div>
    );
}

export default searchBar