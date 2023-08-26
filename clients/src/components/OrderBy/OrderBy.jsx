import React from "react";
import s from "./OrderBy.module.css"

export default function OrderBy({handlerByValoration, handlerByPrice}) {

    return (
        <div className={s.divSort}>

            <p className={s.titles}>SORT BY</p>

            <div className={s.divRating}>
                <button onClick={e => {handlerByValoration()}} className={s.btn}>
                    Avg Customer Review
                </button>
                <button onClick={e => {handlerByPrice("asc")}} className={s.btn}>
                    Price: Low to High
                </button>
                <button onClick={e => {handlerByPrice("desc")}} className={s.btn}>
                    Price: High to Low
                </button>
            </div>
        </div>
    )

}