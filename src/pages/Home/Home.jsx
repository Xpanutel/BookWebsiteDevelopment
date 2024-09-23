import React from "react";
import styles from "./Home.module.scss";
import SliderWithNavigation from "../../components/SliderWithNavigationn/Slider";
import { Link } from "react-router-dom";
import Slider from "../../components/Slider/Slider";

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

const contentColumnData = [0, 0, 0].fill(
  {
    title: "Новый сезон ",
    list: [0, 0, 0, 0, 0].fill(carouselItem, 0, 5),
  },
  0,
  3
);

//данные в остальных слайдерах

const carouselCategory = {
  title: "Горячие новинки",
  link: "/",
  list: carouselItems,
};

//данные в блоке advices

const advices = [0, 0, 0].fill(
  {
    img: "https://remanga.org/media/promobanners/11/cover_f2de4ba2.webp",
    title: "Хочешь карточку? Приходи в Дискорд!",
    decscription: "Узнай, как их получить и создать!",
    link: "/",
  },
  0,
  3
);

const categories = [0, 0, 0, 0].fill({
  title: "Реинкарнация",
  images: [
    "https://remanga.org/media/titles/how-a-pro-from-a-previous-life-sucks-honey/a9f7109f958973814b089333d380d492.jpg",
    "https://remanga.org/media/titles/how-a-pro-from-a-previous-life-sucks-honey/a9f7109f958973814b089333d380d492.jpg",
    "https://remanga.org/media/titles/how-a-pro-from-a-previous-life-sucks-honey/a9f7109f958973814b089333d380d492.jpg",
  ],
});

const Home = () => {
  return (
    <main className={styles.main}>
      <Slider data={carouselItems} />

      <div className={styles.content}>
        <SliderWithNavigation name="hot_news" />
        <div className={styles.content_columns}>
          {contentColumnData.map((i, index) => (
            <div className={styles.content_column} key={index}>
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
            </div>
          ))}
        </div>
        <SliderWithNavigation name="short_stories" />
        <SliderWithNavigation name="interesting_news" />
        <div className={styles.advices}>
          {advices.map((i, index) => (
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
        <div className={styles.categories}>
          {categories.map((i, index) => (
            <div className={styles.category} key={index}>
              <h1 className={styles.content_heading}>{i.title}</h1>
              <figure className={styles.category_imgWrapper}>
                {i.images.map((img, index) => (
                  <img
                    className={styles.category_imgWrapper_img}
                    src={img}
                    alt=""
                    key={index}
                  />
                ))}
              </figure>
            </div>
          ))}
        </div>
        <SliderWithNavigation name="fresh_chapters" />
        <SliderWithNavigation name="top_korea" />
        <SliderWithNavigation name="top_japan" />
        <SliderWithNavigation name="top_china" />
        <SliderWithNavigation name="with_anime" />
        <SliderWithNavigation name="many_chapters" />
        <SliderWithNavigation name="new" />
      </div>
    </main>
  );
};

export default Home;
