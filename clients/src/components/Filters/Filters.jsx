import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/actions/actions";
import s from "./Filters.module.css"

export default function Filters({handlerCategories, genrechange}) {

    const dispatch = useDispatch();
    const categories = useSelector(state => state.categories);

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);


    return (
        <div className={s.divSourceGenres}>

            <div>
                <p className={s.titles}>Categories</p>

                <select value={genrechange} onChange={(e) => handlerCategories(e)} className={s.select}>
                    <option value='All'>--Select--</option>
                    <option value='All'>All</option>
                    {
                        categories && categories.map(g => (
                            <option value={g.name} key={g.id}>{g.name}</option>
                        ))
                    }
                </select>
            </div>

        </div>
    )
}