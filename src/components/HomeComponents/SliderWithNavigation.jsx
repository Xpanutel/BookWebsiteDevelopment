import React, { useState } from "react";
import styles from "../../pages/Home/Home.module.scss";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { Carousel } from "nuka-carousel";
import star from "../../images/star.svg";

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

const SliderWithNavigation = ({ name }) => {
  const [data, setData] = useState("");

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const handleElementVisible = () => {
    console.log(name);

    setData({
      title: "Горячие новинки",
      link: "/",
      list: carouselItems,
    });
  };

  React.useEffect(() => {
    if (inView) {
      handleElementVisible();
    }
  }, [inView]);

  return (
    <div ref={ref} className={styles.content_carouselWrapper}>
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
    </div>
  );
};

export default SliderWithNavigation;
