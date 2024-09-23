import React, { useState, useEffect } from 'react';
import classes from './FilterTitles.module.scss';
import { MdOutlineShortText } from "react-icons/md";

const list = [
    { name: 'По дате добавления(ASC)', sortProps: 'DATE_ASC' },
    { name: 'По дате добавления(DESC)', sortProps: 'DATE_DESC' },
    { name: 'По рейтингу(ASC)', sortProps: 'RAITING_ASC' },
    { name: 'По рейтингу(DESC)', sortProps: 'RAITING_DESC' },
];

const FilterTitles = () => {
    const [open, setOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(list[0]);
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (!event.target.closest(`.${classes.sort}`) && !event.target.closest(`.${classes.popular}`)) {
                setOpen(false);
            }
        };
        document.addEventListener('click', handleOutsideClick);
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [open]);
    return (
        <div className={classes.container}>
                <div onClick={() => setOpen(!open)} className={classes.popular}>
                    <div><MdOutlineShortText/></div>
                    <div>{selectedItem.name} </div>
                </div>

            {open && (
                <div className={classes.sort} onClick={(event) => event.stopPropagation()}>
                    {list.map((item, index) => {
                        return (
                            <div
                                key={index}
                                onClick={() => {
                                    setSelectedItem(item);
                                    setOpen(false);
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