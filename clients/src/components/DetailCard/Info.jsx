import React, { useEffect } from 'react'
import Styles from './Info.module.css'
import { useSelector } from 'react-redux'
export default function Info() {
   

  return (
    <div className={Styles.wrapper}>
        <h3 className={Styles.pdt_name}> Nombre pdt</h3>
        <p className={Styles.pdt_description}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea praesentium dolore cupiditate iure molestiae temporibus laudantium qui corrupti repudiandae voluptas?</p>
        <p className={Styles.pdt_stock}>stock:</p>
        <p className={Styles.pdt_price}>$5454</p>
        <button className={Styles.btn_buy}>Buy now</button>
    </div>
  )
}
