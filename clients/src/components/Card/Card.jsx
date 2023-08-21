import React from 'react'
import Styles from './Card.module.css'


import { AiOutlineHeart, AiFillPlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

export default function Card() {
  return (
    <div className={Styles.wrapper}>
        <div className={Styles.div_image}>
            <div className={Styles.stock}>
                <p>Stock</p>
                <AiOutlineHeart/>
            </div>
            <img className={Styles.img_product} src="https://static.skyassets.com/contentstack/assets/blt143e20b03d72047e/bltbae4788745bf0010/6319d665937b9657b5f2b7ee/Carousel_iPhone14ProMax_Purple_Placement02-PreOrder.png" alt="" />

        </div>
        <div className={Styles.description_card}>
            <div className={Styles.price}>
                <p>iPhone 14</p>
                <p>$1.400</p>
            </div>
            
            <div className={Styles.add}>
                <div className="cantidad">
                    <AiFillPlusCircle/>
                    <input type="number" />
                    <AiOutlineMinusCircle/>
                </div>
                <button>Añadir al carrito</button>
            </div>

        </div>
    </div>
  )
}
