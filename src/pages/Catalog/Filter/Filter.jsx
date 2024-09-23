import React from 'react';
import classes from './Filter.module.scss'
import FilterSelect from "../../../components/Select/Select.jsx";
import GenreSelect from "../../../components/Select/GanreSelect.jsx";
import AuthorSelect from "../../../components/Select/AuthorSelect.jsx";
import AgeSelect from "../../../components/Select/AgeSelect.jsx";
import StatusSelect from "../../../components/Select/StatusSelect.jsx";

const Filter = () => {
    return (
        <div className={classes.filter}>
            <FilterSelect/>
            <GenreSelect/>
            <AuthorSelect/>
            <AgeSelect/>
            <StatusSelect/>
        </div>
    );
};

export default Filter;