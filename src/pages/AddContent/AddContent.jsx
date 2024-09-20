import React from 'react';
import classes from './AddContent.module.scss'
import AddTitleName from "./AddContentComponents/AddTitleName/AddTitleName.jsx";
import AddDescription from "./AddContentComponents/AddDescr/AddDescription.jsx";
import AddBookType from "./AddContentComponents/AddBookType/AddBookType.jsx";


const AddContent = () => {

    const [selectedFile, setSelectedFile] = React.useState('');
    const [fileName, setFileName] = React.useState('No selected file');


    return (
        <div className={classes.addcontent}>
            <div className={classes.container}>
                <form>
                    <input
                        type="file"
                        style={setFileName ? {backgroundImage: `url(${selectedFile})`} : {backgroundColor: "c2c2c2"}}
                        title="&nbsp;"
                        onChange={({target: {files}}) => {
                            files[0] && setFileName(files[0].name)
                            if (files) {
                                setSelectedFile(URL.createObjectURL(files[0]))
                            }
                        }}
                    />
                    <div className={classes.container_inner}>
                        <div className={classes.containername}>
                            <AddTitleName/>
                        </div>
                        <div className={classes.container_description}>
                            <AddDescription/>
                        </div>
                        <div className={classes.book_type}>
                            <AddBookType/>
                        </div>
                    </div>
                    <div className={classes.form_button}>
                        <button type={"submit"}>Отправить</button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default AddContent;