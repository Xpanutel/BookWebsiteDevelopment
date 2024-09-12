import React from 'react';
import {Link} from "react-router-dom";
import classes from './Description.module.scss';
import imgage from '../../../../as/938bcb940b384a98fb96cff1e06e726b.jpg'
import Comments from "../Comments/Comments.jsx";

const Drscription = () => {
    const categories = [
        {name: "Категория"},
        {name: "Категория"},
        {name: "Категория"},
        {name: "Категория"},
        {name: "Категория"},
        {name: "Категория"},
        {name: "Категория"},
        {name: "Категория"},
        {name: "Категория"},
        {name: "Категория"},
        {name: "Категория"},
    ]
    return (
        <div>
            <div className={classes.description}>
                <span>
                    Ха Чжун Ли обычный курьер, еле сводящий концы с концами. Однажды заказ привёл его на Олимп к богам, и
                    его жизнь приняла неожиданный поворот. Теперь он – курьер богов и гребёт деньги лопатой за каждый
                    рискованный заказ и улучшает свою экипировку. Его ждут опасные приключения в подземельях, кишащих
                    монстрами. Ха Чжун с помощью находчивости и хитрости выходит из любой трудной ситуации. Сможет ли он
                    остаться обычным курьером и доставщиком богов одновременно?
                </span>
                <div className={classes.categories}>
                    {
                        categories.map((category, index) => (
                            <Link key={index} className={classes.categoty} to={'/'}>{category.name}</Link>
                        ))
                    }
                </div>
                <div className={classes.autor}>
                    <span>
                        Авторы
                    </span>
                    <div className={classes.autors}>
                        <div className={classes.ststus}>
                            <img src={imgage} alt="" height={35} width={35}/>
                            <ul>
                                <li>Автор</li>
                                <li>Статус ахах стстус бля</li>
                            </ul>
                        </div>
                        <div className={classes.ststus}>
                            <img src={imgage} alt="" height={35} width={35}/>
                            <ul>
                                <li>Автор</li>
                                <li>Статус ахах стстус бля</li>
                            </ul>
                        </div>
                        <div className={classes.ststus}>
                            <img src={imgage} alt="" height={35} width={35}/>
                            <ul>
                                <li>Автор</li>
                                <li>Статус ахах стстус бля</li>
                            </ul>
                        </div>
                        <div className={classes.ststus}>
                            <img src={imgage} alt="" height={35} width={35}/>
                            <ul>
                                <li>Автор</li>
                                <li>Статус ахах стстус бля</li>
                            </ul>
                        </div>
                    </div

                    >

                </div>
                <Comments/>
            </div>

        </div>

    );
};

export default Drscription;