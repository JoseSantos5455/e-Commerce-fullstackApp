import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getPaginatedProducts } from '../../Redux/actions/actions'
const Paginado = () => {
    const products = useSelector((state)=> state.products)
    const dispatch = useDispatch()
    const [currentPage, setCurrentPage] = useState(0)
    const maxPage = Math.ceil(products.length / 12)
    const nextPage = () => {
      if (currentPage < maxPage) {
        setCurrentPage(currentPage + 1)
      }
    }

    const previousPage = () => {
      if (currentPage > 0) {
        setCurrentPage(currentPage - 1)
      }
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
            <button onClick={previousPage}  >Previous</button>
            <span>Page {currentPage + 1}</span>
            <button onClick={nextPage} >Next</button>
          </div>
        </div>
      )
}

export default Paginado