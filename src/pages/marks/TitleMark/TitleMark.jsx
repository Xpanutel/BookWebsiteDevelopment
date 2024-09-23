import React from 'react';
import classes from "./TitleMark.module.scss"
import {Link} from "react-router-dom";
import omg from "../../../as/938bcb940b384a98fb96cff1e06e726b.jpg";

const TitleMark = () => {
    const titles = [
        {img:omg,genre:'Жанр',stars:1,name:'Название'},
        {img:omg,genre:'Жанр',stars:1,name:'Название'},
        {img:omg,genre:'Жанр',stars:1,name:'Название'},

    ]
    return (
        <div className={classes.titles_catalog}>
            {titles.map((title, index) => (
                <Link to={'/card'} key={index} className={classes.description}>
                    <img src={title.img} alt={title.name}/>
                    <span>{title.name}</span>
                </Link>
            ))}
        </div>
    );
};

export default TitleMark;