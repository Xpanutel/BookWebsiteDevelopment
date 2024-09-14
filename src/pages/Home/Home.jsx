import classes from './Home.module.scss'
import {Link} from "react-router-dom";
const Home = () => {
    return (
        <div>
            <div className={classes.home}>
                <Link to={'card'}>Home</Link>
            </div>
        </div>
    );
};

export default Home;