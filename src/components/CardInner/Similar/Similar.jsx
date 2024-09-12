
import classes from './Similar.module.scss'
import Titles from "./Titles/Titles.jsx";
const Similar = () => {

    return (
        <div className={classes.left}>
            <div className={classes.routs}>
                <span>Похожее</span>
                <button>Добавить</button>
            </div>
            <Titles/>
            <Titles/>
            <Titles/>
            <Titles/>
            <Titles/>
        </div>
    );
};

export default Similar;