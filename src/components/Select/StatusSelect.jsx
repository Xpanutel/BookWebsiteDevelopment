import Select from "react-select";

const StatusSelect = () => {
    const options = [
        {value:1,label:"Анонос",},
        {value:2,label:"Закончен",},
        {value:3,label:"Завершен",},
        {value:4,label:"Заморожен",},
        {value:5,label:"Продолжается",},
    ]

    return (
        <>
            <Select
                className={'react-select-container'}
                classNamePrefix="react-select"
                options={options}
                closeMenuOnSelect={false}
                placeholder={'Статус проекта'}
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

export default StatusSelect;