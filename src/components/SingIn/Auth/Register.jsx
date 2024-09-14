import React from 'react';
import omg from '../../../as/images.jpeg'
import classes from './Register.module.scss'

const Register = () => {
    const [open, setOpen] = React.useState(false);
    return (
        <div className={classes.conteiner}>
            <div
                onClick={()=>setOpen(!open)}
                className={classes.container_open}
            >
                Профиль

            </div>
            {open &&
                <ul>
                    <li>
                        <img src={omg} alt="logo"/>
                        <span>NickName</span>
                    </li>
                    <li
                        onClick={() => setOpen(false)}

                    >
                        Добавить контент
                    </li>
                </ul>
            }
        </div>
    );
};

export default Register;