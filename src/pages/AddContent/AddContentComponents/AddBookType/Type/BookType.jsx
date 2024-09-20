import React from 'react';
import Select from "react-select";
const options = [
    {value:1,label:"Новеллы",},
    {value:2,label:"Рассказы",},
    {value:3,label:"Книги",},
]
const BookType = () => {
    return (
        <div>
            <span>Тип</span>
            <Select
                className={'react-select-container'}
                classNamePrefix="react-select"
                options={options}
                closeMenuOnSelect={false}
                placeholder={'Тип'}
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
        </div>
    );
};

export default BookType;