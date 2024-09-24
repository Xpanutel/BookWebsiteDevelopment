import React from "react";
import styles from "./Home.module.scss";
import SliderWithNavigation from "../../components/HomeComponents/SliderWithNavigation";
import { Link } from "react-router-dom";
import Slider from "../../components/HomeComponents/Slider";
import { Columns } from "../../components/HomeComponents/HomeColumns";
import { Advices } from "../../components/HomeComponents/Advices";
import { Categories } from "../../components/HomeComponents/Categories";
import { LastUpdates } from "../../components/HomeComponents/lastUpdates";

const carouselItem = {
  img: "https://remanga.org/media/titles/discarded-garbage-is-not-picked-up-again/c5183e21fe0253ea10c6659176f7dea9.jpg",
  rating: "Манхва 8.8",
  name: "Не подбирай то, что уже выброшено",
  id: 1,
  year: 2022,
  author: "Манга",
};

// данные в слайдере
const carouselItems = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].fill(
  carouselItem,
  0,
  16
);

const Home = () => {
  return (
    <main className={styles.main}>
      <Slider data={carouselItems} />

      <div className={styles.content}>
        <SliderWithNavigation id="1" />
        <Columns id="2" />
        <SliderWithNavigation id="3" />
        <SliderWithNavigation id="4" />
        <Advices id="5" />
        <Categories id="6" />
        <SliderWithNavigation id="7" />
        <SliderWithNavigation id="8" />
        <SliderWithNavigation id="9" />
        <SliderWithNavigation id="10" />
        <SliderWithNavigation id="11" />
        <SliderWithNavigation id="12" />
        <SliderWithNavigation id="13" />
        <LastUpdates id="14" />
      </div>
    </main>
  );
};

export default Home;
