import React, { useEffect } from 'react'
import Styles from './Info.module.css'
import { useSelector } from 'react-redux'
export default function Info(props) {
   

  return (
    <div className={Styles.wrapper}>
        <h3 className={Styles.pdt_name}>{props.name} </h3>
        <p className={Styles.pdt_description}>{props.description}</p>
        <p className={Styles.pdt_stock}>stock: {props.stock}</p>
        <p className={Styles.pdt_price}>${props.price}</p>
        <button className={Styles.btn_buy}>Buy now</button>
    </div>
  )
}
