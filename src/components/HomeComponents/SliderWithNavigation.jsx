import React, { useEffect, useState } from "react";
import styles from "../../pages/Home/Home.module.scss";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { Carousel } from "nuka-carousel";
import star from "../../images/star.svg";
import Loader from "./Loader";
import { useDispatch, useSelector } from "react-redux";
import { acCount } from "../../redux/count/count";

const carouselItem = {
  img: "https://remanga.org/media/titles/discarded-garbage-is-not-picked-up-again/c5183e21fe0253ea10c6659176f7dea9.jpg",
  rating: "Манхва 8.8",
  name: "Не подбирай то, что уже выброшено",
  id: 1,
  year: 2022,
  author: "Манга",
};

// данные в главном (первом) слайдере
const carouselItems = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].fill(
  carouselItem,
  0,
  16
);

const SliderWithNavigation = ({ name, id }) => {
  const dispatch = useDispatch();
  const st = useSelector((state) => state.reCount);
  const bool = st >= id;

  const [data, setData] = useState("");
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
      setData({
        title: "Горячие новинки",
        link: "/",
        list: carouselItems,
      });
      dispatch(acCount(id == st ? st + 1 : st));
    }, 1000);
  };

  useEffect(() => {
    if (inView) {
      handleElementVisible();
    }
  }, [inView]);

  return (
    <div ref={ref} className={styles.content_carouselWrapper} style={style}>
      {data ? (
        <>
          <div className={styles.carousel_navigation}>
            <h1 className={styles.content_heading}>{data?.title}</h1>
            <Link to={data?.link}>Больше</Link>
          </div>
          <Carousel className={styles.carousel} showArrows="hover">
            {data != ""
              ? data.list.map((i, index) => (
                  <Link
                    to={"/manga/" + i.id}
                    className={styles.carousel_item}
                    key={index}
                  >
                    <figure>
                      <img
                        className={styles.carousel_item_img}
                        src={i.img}
                        alt={i.name}
                      />
                    </figure>
                    <span className={styles.carousel_item_rating}>
                      {i.rating}
                      <img src={star} alt="" />
                    </span>
                    <p className={styles.carousel_item_name}>{i.name}</p>
                  </Link>
                ))
              : ""}
          </Carousel>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default SliderWithNavigation;
