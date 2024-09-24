import React, { useEffect, useState } from "react";
import styles from "../../pages/Home/Home.module.scss";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
import { acCount } from "../../redux/count/count";

const advices = [
  {
    img: "https://remanga.org/media/promobanners/11/cover_f2de4ba2.webp",
    title: "Хочешь карточку? Приходи в Дискорд!",
    decscription: "Узнай, как их получить и создать!",
    link: "/",
  },
  {
    img: "https://remanga.org/media/promobanners/11/cover_f2de4ba2.webp",
    title: "Хочешь карточку? Приходи в Дискорд!",
    decscription: "Узнай, как их получить и создать!",
    link: "/",
  },
  {
    img: "https://remanga.org/media/promobanners/11/cover_f2de4ba2.webp",
    title: "Хочешь карточку? Приходи в Дискорд!",
    decscription: "Узнай, как их получить и создать!",
    link: "/",
  },
];

export const Advices = ({ id }) => {
  const dispatch = useDispatch();
  const st = useSelector((state) => state.reCount);
  const bool = st >= id;

  const [data, setData] = useState([]);
  const [style, setStyle] = useState(
    bool ? { display: "flex" } : { display: "none" }
  );

  useEffect(() => {
    setStyle(bool ? { display: "flex" } : { display: "none" });
  }, [bool]);

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const handleElementVisible = () => {
    setTimeout(() => {
      setData(advices);
      dispatch(acCount(id == st ? st + 1 : st));
    }, 1000);
  };

  useEffect(() => {
    if (inView) {
      handleElementVisible();
    }
  }, [inView]);

  return (
    <div ref={ref}>
      {data ? (
        <div className={styles.advices}>
          {data.map((i, index) => (
            <Link to={i.link} className={styles.advice} key={index}>
              <div className={styles.advice_left}>
                <p className={styles.advice_left_title}>{i.title}</p>
                <span className={styles.advice_left_desc}>
                  {i.decscription}
                </span>
                <button className={styles.advice_left_button}>Перейти</button>
              </div>
              <figure className={styles.advice_right}>
                <img src={i.img} alt="" />
              </figure>
            </Link>
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};
