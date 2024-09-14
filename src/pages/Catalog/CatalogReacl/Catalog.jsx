import React from 'react';
import classes from './Catalog.module.scss'
import TitlesCatalog from "../Titles/Title/TitlesCatalog.jsx";
import Filter from "../Filter/Filter.jsx";
import FilterTitles from "../Titles/FilterTitles/FilterTitles.jsx";

const Catalog = () => {

    return (
        <div className={classes.container}>
            <div className={classes.container_inner}>
                <h1>Каталог</h1>

                <section>
                    <div className={classes.popup}>
                        <FilterTitles/>
                        <TitlesCatalog/>
                    </div>
                    <div>
                        <div>Фильтр</div>
                        <Filter/>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Catalog;