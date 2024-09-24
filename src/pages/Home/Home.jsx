import React from "react";
import styles from "./Home.module.scss";
import SliderWithNavigation from "../../components/HomeComponents/SliderWithNavigation";
import { Link } from "react-router-dom";
import Slider from "../../components/HomeComponents/Slider";
import { Columns } from "../../components/HomeComponents/HomeColumns";
import { Advices } from "../../components/HomeComponents/Advices";
import { Categories } from "../../components/HomeComponents/Categories";

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
        <SliderWithNavigation name="hot_news" id="1" />
        <Columns id="2" />
        <SliderWithNavigation name="short_stories" id="3" />
        <SliderWithNavigation name="interesting_news" id="4" />
        <Advices id="5" />
        <Categories id="6" />
        <SliderWithNavigation name="fresh_chapters" id="7" />
        <SliderWithNavigation name="top_korea" id="8" />
        <SliderWithNavigation name="top_japan" id="9" />
        <SliderWithNavigation name="top_china" id="10" />
        <SliderWithNavigation name="with_anime" id="11" />
        <SliderWithNavigation name="many_chapters" id="12" />
        <SliderWithNavigation name="new" id="13" />
      </div>
    </main>
  );
};

export default Home;
