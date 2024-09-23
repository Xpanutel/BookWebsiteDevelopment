import React from 'react';
import Select from "react-select";

const AgeSelect = () => {
    const options = [
        {value:1,label:"18+",},
        {value:2,label:"16+",},
        {value:3,label:"Для всех",},
    ]

    return (
        <>
            <Select
                className={'react-select-container'}
                classNamePrefix="react-select"
                options={options}
                closeMenuOnSelect={false}
                placeholder={'Возрастной рейтинг'}
                styles={{
                    control:(baseStyles)=>({
                        ...baseStyles,
                        borderRadius:"15px",
                        padding:"5px",
                        fontSize:'16px',
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

export default AgeSelect;