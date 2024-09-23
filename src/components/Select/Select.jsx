import React from 'react';
import Select from 'react-select'
import '../../index.css'
const FilterSelect = () => {

    const options = [
        {value:1,label:"Новеллы",},
        {value:2,label:"Рассказы",},
        {value:3,label:"Книги",},
    ]

    return (
        <>
            <Select

                className={'react-select-container'}
                classNamePrefix="react-select"
                options={options}
                closeMenuOnSelect={false}
                placeholder={'Тип'}
                isMulti
                styles={{
                    control:(baseStyles)=>({
                        ...baseStyles,
                        borderRadius:"15px",
                        padding:"5px",
                        fontSize:'16px',
                        input:"16px"
                    }),
                    multiValue:(baseStyles)=>({
                        ...baseStyles,
                        backgroundColor:"inherit"
                    })
                }}
            />
        </>
    );
};

export default FilterSelect;