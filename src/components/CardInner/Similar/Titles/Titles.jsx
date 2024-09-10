import classes from "../Similar.module.scss";
import omg from "../../../../as/938bcb940b384a98fb96cff1e06e726b.jpg";

const Titles = () => {
    return (
        <div>
            <div className={classes.similiar}>
                <img src={omg} alt="omg_name" height={105} width={70}/>
                <ul>
                    <li>Моя перевёрнутая жизнь в качестве моба</li>
                    <li>Похож по сюжету</li>
                    <li>
                        <input type="radio" name={'like'}/>
                        <div>12312</div>
                        <input type="radio" name={'like'}/>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Titles;
