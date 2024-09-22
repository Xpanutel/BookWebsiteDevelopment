import React, {useEffect, useRef, useState} from 'react';
import classes from './Marks.module.css'
import FilterMarks from "./FilterMarks/FilterMarks.jsx";
import CardInner from "../../components/CardInner/CardInner.jsx";
import TitlesCatalog from "../Catalog/Titles/Title/TitlesCatalog.jsx";
import TitleMark from "./TitleMark/TitleMark.jsx";

const Marks = () => {

    const [categories, setCategories] = React.useState(0)

    const items = [
        {name:'Все',id:0},
        {name:'Читаю',id:0},
        {name:'Буду читать',id:0},
        {name:'Прочитано',id:0},
        {name:"Брошено",id:0},
        {name:"Отложено",id:0},
        {name:"Не интересно",id:0},
    ]

    const onClickCategory = (index) => {
        setCategories(index)
    }

    return (
        <div className={classes.container}>
            <div className={classes.container_inner}>
                <span className={classes.category}>Библиотека</span>
                <div className={classes.mark_items}>
                    <ul>
                        {items.map((category, index) => (
                            <li
                                className={categories === index ? classes.active : ''}
                                onClick={() => onClickCategory(index)} key={index}
                            >
                                <span>{category.name}</span>
                                <span>{category.id}</span>
                            </li>
                        ))}
                    </ul>
                    <FilterMarks/>
                </div>
                <div>
                    <TitleMark/>
                </div>
            </div>
        </div>
    );
};


export default Marks;