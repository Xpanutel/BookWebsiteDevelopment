import classes from "./Single.module.scss";
import CardInner from "../../components/CardInner/CardInner.jsx";

const Single = () => {
  return (
    <div>
      <div className={classes.home}>
        <CardInner />
      </div>
    </div>
  );
};

export default Single;
