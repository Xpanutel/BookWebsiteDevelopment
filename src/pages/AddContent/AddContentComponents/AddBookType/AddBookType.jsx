import React from 'react';

import FilterSelect from "../../../../components/Select/Select.jsx";
import Form from './Type/Form.jsx'
import GenreSelect from "../../../../components/Select/GanreSelect.jsx";
import AuthorSelect from "../../../../components/Select/AuthorSelect.jsx";
import AgeSelect from "../../../../components/Select/AgeSelect.jsx";
import StatusSelect from "../../../../components/Select/StatusSelect.jsx";

import classes from '../../AddContent.module.scss'

const AddBookType = () => {
    return (
        <div className={classes.form_inner}>
            <div className={classes.form_type}>
                <FilterSelect/>
                <Form/>
            </div>
            <div className={classes.form_type}>
                <GenreSelect/>
                <AuthorSelect/>
            </div>
            <div className={classes.form_type}>
                <AgeSelect/>
                <StatusSelect/>
            </div>
        </div>
    );
};

export default AddBookType;