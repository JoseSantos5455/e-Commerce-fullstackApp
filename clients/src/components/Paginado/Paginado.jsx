import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getPaginatedProducts } from '../../Redux/actions/actions'
const Paginado = () => {
    const products = useSelector((state)=> state.products)
    const dispatch = useDispatch()
    const [currentPage, setCurrentPage] = useState(1)

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage)
        dispatch(getPaginatedProducts(newPage, 12))
      }

    useEffect(()=> {
        dispatch(getPaginatedProducts(currentPage, 12))
    },[dispatch, currentPage])

    return (
        <div>
          <h1>Product List</h1>
          <ul>
            {products.map(product => (
              <li key={product.id}>{product.name}</li>
            ))}
          </ul>
          <div>
            <button onClick={() => handlePageChange(currentPage - 1)}>Previous</button>
            <span>Page {currentPage}</span>
            <button onClick={() => handlePageChange(currentPage + 1)}>Next</button>
          </div>
        </div>
      )
}

export default Paginado