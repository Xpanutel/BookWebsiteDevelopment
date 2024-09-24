import React, { useEffect, useState } from "react";
import styles from "../../pages/Home/Home.module.scss";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
import { acCount } from "../../redux/count/count";

const contentColumnData = [0, 0, 0].fill({
  title: "Новый сезон ",
  list: [
    {
      img: "https://remanga.org/media/titles/discarded-garbage-is-not-picked-up-again/c5183e21fe0253ea10c6659176f7dea9.jpg",
      rating: "Манхва 8.8",
      name: "Не подбирай то, что уже выброшено",
      id: 1,
      year: 2022,
      author: "Манга",
    },
    {
      img: "https://remanga.org/media/titles/discarded-garbage-is-not-picked-up-again/c5183e21fe0253ea10c6659176f7dea9.jpg",
      rating: "Манхва 8.8",
      name: "Не подбирай то, что уже выброшено",
      id: 1,
      year: 2022,
      author: "Манга",
    },
    {
      img: "https://remanga.org/media/titles/discarded-garbage-is-not-picked-up-again/c5183e21fe0253ea10c6659176f7dea9.jpg",
      rating: "Манхва 8.8",
      name: "Не подбирай то, что уже выброшено",
      id: 1,
      year: 2022,
      author: "Манга",
    },
  ],
});

export const Columns = ({ id }) => {
  const dispatch = useDispatch();
  const st = useSelector((state) => state.reCount);
  const bool = st >= id;

  const [data, setData] = useState("");
  const [style, setStyle] = useState(
    bool ? { display: "grid" } : { display: "none" }
  );

  useEffect(() => {
    setStyle(bool ? { display: "grid" } : { display: "none" });
  }, [bool]);

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const handleElementVisible = () => {
    setTimeout(() => {
      setData(contentColumnData);
      dispatch(acCount(id == st ? st + 1 : st));
    }, 1000);
  };

  useEffect(() => {
    if (inView) {
      handleElementVisible();
    }
  }, [inView]);

  return (
    <div ref={ref} style={style}>
      {data ? (
        <div className={styles.content_columns}>
          {data.map((i, index) => (
            <Link to="/" className={styles.content_column} key={index}>
              <h1 className={styles.content_heading}>
                {i.title}
                <svg style={{ width: "20px", height: "18px" }}>
                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                </svg>
              </h1>
              {i.list.map((l, index) => (
                <div className={styles.content_column_item} key={index}>
                  <img
                    src={l.img}
                    alt=""
                    className={styles.content_column_item_img}
                  />
                  <div className={styles.content_column_item_info}>
                    <h1 className={styles.content_column_item_title}>
                      {l.name}
                    </h1>
                    <p className={styles.content_column_item_year}>
                      {l.author}
                      <i>{l.year}</i>
                    </p>
                  </div>
                </div>
              ))}
            </Link>
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};
