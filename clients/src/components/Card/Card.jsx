import React, {useEffect, useState} from 'react'
import Styles from './Card.module.css'
import { AiOutlineHeart, AiFillPlusCircle, AiOutlineMinusCircle } from "react-icons/ai";


export default function Card(props) {
    
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
                <p>{props.aviability ? 'Available' : 'Unavailable'}</p>
                <AiOutlineHeart/>
            </div>
            <img className={Styles.img_product} src={ props.img } alt="Image product" />

        </div>
        <div className={Styles.description_card}>
            <div className={Styles.price}>
                <p>{props.name}</p>
                <p className={Styles.price_number}>${props.price}</p>
            </div>

            <div className={Styles.add}>
                <div className={Styles.div_input}>
                    <AiFillPlusCircle onClick={handleMoreQ}/>
                    <input type="number"  placeholder={buyQ} readOnly  />
                    <AiOutlineMinusCircle onClick={handleLessQ} />
                </div>
                <button>Add to kart</button>
            </div>

        </div>
    </div>
  )
}
