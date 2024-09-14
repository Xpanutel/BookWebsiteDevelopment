import Select from 'react-select'

const AuthorSelect = () => {

    const options = [
        {value:1,label:"Автор",},
        {value:2,label:"Автор",},
        {value:3,label:"Автор",},
        {value:4,label:"Автор",},
        {value:5,label:"Автор",},
        {value:6,label:"Автор",},
        {value:7,label:"Автор",},
        {value:8,label:"Автор",},
    ]

    return (
        <>
            <Select
                className={'react-select-container'}
                classNamePrefix="react-select"
                options={options}
                closeMenuOnSelect={false}
                placeholder={'Автор'}
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

export default AuthorSelect;