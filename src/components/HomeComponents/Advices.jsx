import React from "react";
import styles from "../../pages/Home/Home.module.scss";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

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

export const Advices = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const handleElementVisible = () => {};

  React.useEffect(() => {
    if (inView) {
      handleElementVisible();
    }
  }, [inView]);

  return (
    <div ref={ref} className={styles.advices}>
      {advices.map((i, index) => (
        <Link to={i.link} className={styles.advice} key={index}>
          <div className={styles.advice_left}>
            <p className={styles.advice_left_title}>{i.title}</p>
            <span className={styles.advice_left_desc}>{i.decscription}</span>
            <button className={styles.advice_left_button}>Перейти</button>
          </div>
          <figure className={styles.advice_right}>
            <img src={i.img} alt="" />
          </figure>
        </Link>
      ))}
    </div>
  );
};
