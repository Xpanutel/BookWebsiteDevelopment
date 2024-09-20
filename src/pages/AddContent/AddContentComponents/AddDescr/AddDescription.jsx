import ReactQuill from "react-quill";
import {useState} from "react";
import 'react-quill/dist/quill.snow.css'
import classes from './AddDescription.module.scss'

const AddDescription = ()=>{
    const [description, setDescription] = useState('');
    const modules = {
        toolbar: [
            ["bold", "italic", "underline", "strike"],
        ],
    };
    const formats = ["header", "bold", "italic", "underline", "strike", "blockquote", "list", "bullet", "indent", "link", "image"];
    return (
        <div className={classes.container}>
            <ReactQuill
                className={classes.container__inner}
                modules={modules}
                value={description}
                theme={'snow'}
                onChange={setDescription}
                formats={formats}
            />
        </div>
    )

}

export default AddDescription