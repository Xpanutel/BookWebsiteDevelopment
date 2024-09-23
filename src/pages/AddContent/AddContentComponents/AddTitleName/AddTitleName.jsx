import React from 'react';
import classes from '../../AddContent.module.scss'
const AddTitleName = () => {

    const [selectedFile, setSelectedFile] = React.useState('');
    const [fileName, setFileName] = React.useState('No selected file');

    return (
        <div
            className={classes.form}
        >
            <input
                type="file"
                style={setFileName ? {backgroundImage: `url(${selectedFile})`} : {backgroundColor: "c2c2c2"} }
                title="&nbsp;"
                onChange={({target: {files}}) => {
                    files[0] && setFileName(files[0].name)
                    if(files){
                        setSelectedFile(URL.createObjectURL(files[0]))
                    }
                }}
            />
            <div className={classes.read_title}>
                <div>
                    <label>Основное название</label>
                    <input type="text"/>
                </div>
                <div>
                    <label>Второстепенное название</label>
                    <input type="text"/>
                </div>
            </div>
        </div>
    );
};

export default AddTitleName;