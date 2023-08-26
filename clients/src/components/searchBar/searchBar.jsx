import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameProducts } from "../../Redux/actions/actions";
import s from "./SearchBar.module.css"

export default function SearchBar () {
    const dispatch = useDispatch();
    const [name, setName] = useState("");

    function handlerChange(e) {
        e.preventDefault();
        setName(e.target.value);
    }

    function handlerSubmit(e) {
        e.preventDefault();
        dispatch(getNameProducts(name));
        setName("");
    }

    return (
        <div className={s.formClass}>
            <form onSubmit={(e) => handlerSubmit(e)}>
                <input
                type="text"
                placeholder="Search a videogame..."
                value={name}
                onChange={(e) => handlerChange(e)}
                className={s.input}
                />
                <button type="submit" className={s.btn}>
                    <img className={s.imgs} src='https://w7.pngwing.com/pngs/582/430/png-transparent-search-magnifier-find-zoom-glass-seo-optimization-instagram-icon.png' alt="HOME"/>
                </button>
            </form>
            
        </div>
    )
}