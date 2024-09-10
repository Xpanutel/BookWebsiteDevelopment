import {AiOutlineSend} from "react-icons/ai";
import {AiFillLike} from "react-icons/ai";
import {AiFillDislike} from "react-icons/ai";
import {BiRepost} from "react-icons/bi";
import {MdOutlineReportGmailerrorred} from "react-icons/md";
import images from '../../../../as/images.jpeg'
import classes from './Comments.module.scss'
import {Link} from "react-router-dom";

const Comments = () => {
    return (
        <div className={classes.comment_page}>
            <div className={classes.comments}>
                <span>Комментарии</span>
                <form>
                    <input type="text" placeholder={"Оставить комментарий"}/>
                    <button><AiOutlineSend size={30} style={{backgroundColor: "white", color: '#324580FF'}}/></button>
                </form>
            </div>
            <div className={classes.comment}>
                <div>
                    <Link to={'/'}>
                        <img src={images} alt="" height={50} width={50}/>
                    </Link>
                </div>
                <div className={classes.user_descr}>
                    <div className={classes.user_comment}>
                        <div className={classes.user_comment_inner}>
                            <div>
                                <span>Name</span>
                                {/*<span>Status</span>*/}
                            </div>
                            <button>
                                <MdOutlineReportGmailerrorred/>
                            </button>
                        </div>
                        <div>
                            Comment
                        </div>
                    </div>
                    <div className={classes.grade}>
                        <ul>
                            <li>
                                <AiFillLike/>
                                <span>
                                    123
                                </span>
                            </li>
                            <li>
                                <AiFillDislike/>
                            </li>
                            <li>
                                <BiRepost/>
                            </li>
                        </ul>
                        <div>
                            4 месяца назад
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Comments;