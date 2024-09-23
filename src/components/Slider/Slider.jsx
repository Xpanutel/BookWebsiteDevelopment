import React from "react";
import { Carousel, CarouselProvider } from "nuka-carousel";
import star from "../../images/star.svg";
import styles from "../../pages/Home/Home.module.scss";

const Slider = ({ data }) => {
  return (
    <Carousel className={styles.carousel} showArrows="hover">
      {data.map((i, index) => (
        <div className={styles.carousel_item} key={index}>
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
        </div>
      ))}
    </Carousel>
  );
};

export default Slider;
