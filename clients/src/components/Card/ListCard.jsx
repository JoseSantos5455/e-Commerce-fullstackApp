import React from 'react'
import Card from './Card'
import Styles from './ListCard.module.css'
export default function ListCard() {

    // let products = useSelector(state => state.products);

    return (
    <div >
        <h2 className={Styles.h2}> Destacados </h2>
        <div className="d-flex justify-content-start">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        </div>
        <div className="d-flex justify-content-start">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        </div>
      {/* {  
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
    } */}
    </div>
  )
}
