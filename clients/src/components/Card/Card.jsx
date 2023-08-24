import React, {useEffect, useState} from 'react'
import Styles from './Card.module.css'
import { AiOutlineHeart, AiFillPlusCircle, AiOutlineMinusCircle } from "react-icons/ai";


export default function Card(props) {
    let imgCard = "https://static.skyassets.com/contentstack/assets/blt143e20b03d72047e/bltbae4788745bf0010/6319d665937b9657b5f2b7ee/Carousel_iPhone14ProMax_Purple_Placement02-PreOrder.png"
    
    let [buyQ, setBuyQ] = useState(1)
    let handleMoreQ = ()=>{
        setBuyQ(buyQ + 1)
    }
    let handleLessQ = ()=>{
        if(buyQ > 0){
            
            setBuyQ(buyQ - 1)
        }
        else setBuyQ(buyQ)
    }
    
    
    return (
        <div className={Styles.wrapper}>
        <div className={Styles.div_image}>
            <div className={Styles.stock}>
                <p>{props.aviability ? 'Avalable' : 'Unavailable'}</p>
                <AiOutlineHeart/>
            </div>
            <img className={Styles.img_product} src={ imgCard } alt="" />

        </div>
        <div className={Styles.description_card}>
            <div className={Styles.price}>
                <p>iPhone 14</p>
                <p className={Styles.price_number}>$1.400.00</p>
            </div>

            <div className={Styles.add}>
                <div className={Styles.div_input}>
                    <AiFillPlusCircle onClick={handleMoreQ}/>
                    <input type="number"  placeholder={buyQ} readOnly  />
                    <AiOutlineMinusCircle onClick={handleLessQ} />
                </div>
                <button>Añadir al carrito</button>
            </div>

        </div>
    </div>
  )
}
