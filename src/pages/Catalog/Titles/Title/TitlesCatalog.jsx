import React from 'react';
import classes from './TitlesCatalog.module.scss'
import omg from '../../../../as/938bcb940b384a98fb96cff1e06e726b.jpg'
import { CiStar } from "react-icons/ci";
import {Link} from "react-router-dom";

const TitlesCatalog = () => {
    const titles = [
        {img:omg,genre:'Жанр',stars:1,name:'Название'},
        {img:omg,genre:'Жанр',stars:1,name:'Название'},
        {img:omg,genre:'Жанр',stars:1,name:'Название'},
        {img:omg,genre:'Жанр',stars:1,name:'Название'},
        {img:omg,genre:'Жанр',stars:1,name:'Название'},
        {img:omg,genre:'Жанр',stars:1,name:'Название'},
        {img:omg,genre:'Жанр',stars:1,name:'Название'},
        {img:omg,genre:'Жанр',stars:1,name:'Название'},
        {img:omg,genre:'Жанр',stars:1,name:'Название'},
        {img:omg,genre:'Жанр',stars:1,name:'Название'},
        {img:omg,genre:'Жанр',stars:1,name:'Название'},
    ]
    return (
        <div className={classes.titles_catalog}>
            {titles.map((title,index) => (
                <Link to={'/card'} key={index} className={classes.description}>
                    <img src={title.img} alt={title.name} />
                    <div>
                        <span>{title.genre}</span>
                        <span>{title.stars}<CiStar /></span>
                    </div>
                    <span>{title.name}</span>
                </Link>
            ))}
        </div>
    );
};

export default TitlesCatalog;