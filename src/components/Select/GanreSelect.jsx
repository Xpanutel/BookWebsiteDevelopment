import Select from 'react-select'

const FilterSelect = () => {

    const options = [
        {value:1,label:"Жанр",},
        {value:2,label:"Жанр",},
        {value:3,label:"Жанр",},
        {value:4,label:"Жанр",},
        {value:5,label:"Жанр",},
        {value:6,label:"Жанр",},
        {value:7,label:"Жанр",},
        {value:8,label:"Жанр",},
        {value:8,label:"Жанр",},
        {value:8,label:"Жанр",},
        {value:8,label:"Жанр",},
        {value:8,label:"Жанр",},
        {value:8,label:"Жанр",},
        {value:8,label:"Жанр",},
        {value:8,label:"Жанр",},
        {value:8,label:"Жанр",},
        {value:8,label:"Жанр",},
    ]

    return (
        <>
            <Select
                className={'react-select-container'}
                classNamePrefix="react-select"
                options={options}
                closeMenuOnSelect={false}
                placeholder={'Жанр'}
                isMulti
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

export default FilterSelect;