import React from "react";
import styles from "../../pages/Home/Home.module.scss";
import Slider from "../Slider/Slider";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

const SliderWithNavigation = ({ data }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const handleElementVisible = () => {
    console.log("Элемент появился!");
  };

  React.useEffect(() => {
    if (inView) {
      handleElementVisible();
    }
  }, [inView]);

  return (
    <div ref={ref} className={styles.content_carouselWrapper}>
      <div className={styles.carousel_navigation}>
        <h1 className={styles.content_heading}>{data.title}</h1>
        <Link to={data.link}>Больше</Link>
      </div>
      <Slider data={data.list} />
    </div>
  );
};

export default SliderWithNavigation;
