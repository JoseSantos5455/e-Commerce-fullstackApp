import React from 'react'
import Card from './Card'

export default function ListCard() {

    let products = useSelector(state => state.products);

    return (
    <div >
      {  
         products && products.length > 0 ?(
        products.map((pdt, idx)=>(
            <Card
            index = {idx} 
            aviability= { pdt.aviability }     
            img ={pdt.img}
            name = {pdt.name}
            price = {pdt.price}
            isFavorite = {pdt.favorite}
      />

      ))
      ) :( <p> No products </p> )
    }
    </div>
  )
}
