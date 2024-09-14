import React, {useEffect} from 'react';
import classes from './FilterTitles.module.scss';
import { MdOutlineShortText } from "react-icons/md";
import {useDispatch, useSelector} from "react-redux";
import {setSortState} from "../../../../redux/slices/FilterSlice.js";


const list = [
    {name:'По дате добавления(ASC)', sortProps:'DATE_ASC'},
    {name:'По дате добавления(DESC)', sortProps:'DATE_DESC'},
    {name:'По рейтингу(ASC)', sortProps:'RAITING_ASC'},
    {name:'По рейтингу(DESC)', sortProps:'RAITING_DESC'},
]
const FilterTitles = () => {

    const [open, setOpen] = React.useState(false);
    
    return (
        <div className={classes.container}>
            <div onClick={()=>setOpen(!open)} className={classes.popular}>
                <div><MdOutlineShortText/></div>
                <div>{list[0].name}</div>
            </div>
            {open && (
                <div className={classes.sort}>
                    {list.map((item, index) =>{
                        return(
                            <div
                                key={index}
                                onClick={()=> {
                                    setOpen(false)
                                }}
                                className={item.sortProps === item.sortProps ? classes.active : ''}
                            >
                                {item.name}
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default FilterTitles;