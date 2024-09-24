import React, { useEffect, useState } from "react";
import styles from "../../pages/Home/Home.module.scss";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
import { acCount } from "../../redux/count/count";

export const LastUpdates = ({ id }) => {
  const dispatch = useDispatch();
  const st = useSelector((state) => state.reCount);
  const bool = st >= id;

  const [data, setData] = useState("");
  const [style, setStyle] = useState(
    bool ? { display: "flex" } : { display: "none" }
  );
  const [sw, setSwitch] = useState(false);
  console.log(sw);

  useEffect(() => {
    setStyle(bool ? { display: "flex" } : { display: "none" });
  }, [bool]);

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const handleElementVisible = () => {
    setTimeout(() => {
      setData(updatesData);
      dispatch(acCount(id == st ? st + 1 : st));
    }, 1000);
  };

  useEffect(() => {
    if (inView) {
      handleElementVisible();
    }
  }, [inView]);

  const showmore = () => {
    setData(data.concat(...updatesData));
  };

  return (
    <div ref={ref} style={style}>
      {data ? (
        <div className={styles.lastUpdates}>
          <h1 className={styles.content_heading}>Последние обновления</h1>
          <label onChange={() => setSwitch(!sw)}>
            <input type="checkbox" className="checkbox" />
            <div
              style={{ paddingLeft: sw ? "16px" : "0" }}
              className={styles.lastUpdates_switcher}
            >
              <span className={styles.lastUpdates_switch}></span>
            </div>
            <p>Только мои закладки</p>
          </label>

          <div className={styles.lastUpdates_list}>
            {data.map((i, index) => (
              <div className={styles.content_column_item} key={index}>
                <img src={i.img} className={styles.content_column_item_img} />

                <div className={styles.content_column_item_info}>
                  <h1 className={styles.lastUpdates_title}>{i.name}</h1>
                  <p className={styles.content_column_item_title}>
                    {i.chapter}
                  </p>
                  <span className={styles.content_column_item_year}>
                    {i.date}
                  </span>
                </div>
              </div>
            ))}
            <button
              onClick={showmore}
              className={styles.lastUpdates_moreButton}
            >
              Больше{" "}
            </button>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

const updatesData = [
  {
    img: "https://remanga.org/media/titles/discarded-garbage-is-not-picked-up-again/c5183e21fe0253ea10c6659176f7dea9.jpg",
    date: "13 минут назад",
    name: "Не подбирай то, что уже выброшено",
    chapter: "Том 1 Глава 31",
  },

  {
    img: "https://remanga.org/media/titles/discarded-garbage-is-not-picked-up-again/c5183e21fe0253ea10c6659176f7dea9.jpg",
    date: "13 минут назад",
    name: "Не подбирай то, что уже выброшено",
    chapter: "Том 1 Глава 31",
  },

  {
    img: "https://remanga.org/media/titles/discarded-garbage-is-not-picked-up-again/c5183e21fe0253ea10c6659176f7dea9.jpg",
    date: "13 минут назад",
    name: "Не подбирай то, что уже выброшено",
    chapter: "Том 1 Глава 31",
  },

  {
    img: "https://remanga.org/media/titles/discarded-garbage-is-not-picked-up-again/c5183e21fe0253ea10c6659176f7dea9.jpg",
    date: "13 минут назад",
    name: "Не подбирай то, что уже выброшено",
    chapter: "Том 1 Глава 31",
  },

  {
    img: "https://remanga.org/media/titles/discarded-garbage-is-not-picked-up-again/c5183e21fe0253ea10c6659176f7dea9.jpg",
    date: "13 минут назад",
    name: "Не подбирай то, что уже выброшено",
    chapter: "Том 1 Глава 31",
  },

  {
    img: "https://remanga.org/media/titles/discarded-garbage-is-not-picked-up-again/c5183e21fe0253ea10c6659176f7dea9.jpg",
    date: "13 минут назад",
    name: "Не подбирай то, что уже выброшено",
    chapter: "Том 1 Глава 31",
  },

  {
    img: "https://remanga.org/media/titles/discarded-garbage-is-not-picked-up-again/c5183e21fe0253ea10c6659176f7dea9.jpg",
    date: "13 минут назад",
    name: "Не подбирай то, что уже выброшено",
    chapter: "Том 1 Глава 31",
  },

  {
    img: "https://remanga.org/media/titles/discarded-garbage-is-not-picked-up-again/c5183e21fe0253ea10c6659176f7dea9.jpg",
    date: "13 минут назад",
    name: "Не подбирай то, что уже выброшено",
    chapter: "Том 1 Глава 31",
  },

  {
    img: "https://remanga.org/media/titles/discarded-garbage-is-not-picked-up-again/c5183e21fe0253ea10c6659176f7dea9.jpg",
    date: "13 минут назад",
    name: "Не подбирай то, что уже выброшено",
    chapter: "Том 1 Глава 31",
  },

  {
    img: "https://remanga.org/media/titles/discarded-garbage-is-not-picked-up-again/c5183e21fe0253ea10c6659176f7dea9.jpg",
    date: "13 минут назад",
    name: "Не подбирай то, что уже выброшено",
    chapter: "Том 1 Глава 31",
  },

  {
    img: "https://remanga.org/media/titles/discarded-garbage-is-not-picked-up-again/c5183e21fe0253ea10c6659176f7dea9.jpg",
    date: "13 минут назад",
    name: "Не подбирай то, что уже выброшено",
    chapter: "Том 1 Глава 31",
  },

  {
    img: "https://remanga.org/media/titles/discarded-garbage-is-not-picked-up-again/c5183e21fe0253ea10c6659176f7dea9.jpg",
    date: "13 минут назад",
    name: "Не подбирай то, что уже выброшено",
    chapter: "Том 1 Глава 31",
  },

  {
    img: "https://remanga.org/media/titles/discarded-garbage-is-not-picked-up-again/c5183e21fe0253ea10c6659176f7dea9.jpg",
    date: "13 минут назад",
    name: "Не подбирай то, что уже выброшено",
    chapter: "Том 1 Глава 31",
  },

  {
    img: "https://remanga.org/media/titles/discarded-garbage-is-not-picked-up-again/c5183e21fe0253ea10c6659176f7dea9.jpg",
    date: "13 минут назад",
    name: "Не подбирай то, что уже выброшено",
    chapter: "Том 1 Глава 31",
  },

  {
    img: "https://remanga.org/media/titles/discarded-garbage-is-not-picked-up-again/c5183e21fe0253ea10c6659176f7dea9.jpg",
    date: "13 минут назад",
    name: "Не подбирай то, что уже выброшено",
    chapter: "Том 1 Глава 31",
  },
];
