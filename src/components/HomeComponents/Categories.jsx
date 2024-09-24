import React from "react";
import { useInView } from "react-intersection-observer";
import styles from "../../pages/Home/Home.module.scss";
import { Link } from "react-router-dom";

const categories = [
  {
    title: "Реинкарнация",
    images: [
      "https://remanga.org/media/titles/how-a-pro-from-a-previous-life-sucks-honey/a9f7109f958973814b089333d380d492.jpg",
      "https://remanga.org/media/titles/how-a-pro-from-a-previous-life-sucks-honey/a9f7109f958973814b089333d380d492.jpg",
      "https://remanga.org/media/titles/how-a-pro-from-a-previous-life-sucks-honey/a9f7109f958973814b089333d380d492.jpg",
    ],
  },
  {
    title: "Реинкарнация",
    images: [
      "https://remanga.org/media/titles/how-a-pro-from-a-previous-life-sucks-honey/a9f7109f958973814b089333d380d492.jpg",
      "https://remanga.org/media/titles/how-a-pro-from-a-previous-life-sucks-honey/a9f7109f958973814b089333d380d492.jpg",
      "https://remanga.org/media/titles/how-a-pro-from-a-previous-life-sucks-honey/a9f7109f958973814b089333d380d492.jpg",
    ],
  },
  {
    title: "Реинкарнация",
    images: [
      "https://remanga.org/media/titles/how-a-pro-from-a-previous-life-sucks-honey/a9f7109f958973814b089333d380d492.jpg",
      "https://remanga.org/media/titles/how-a-pro-from-a-previous-life-sucks-honey/a9f7109f958973814b089333d380d492.jpg",
      "https://remanga.org/media/titles/how-a-pro-from-a-previous-life-sucks-honey/a9f7109f958973814b089333d380d492.jpg",
    ],
  },
  {
    title: "Реинкарнация",
    images: [
      "https://remanga.org/media/titles/how-a-pro-from-a-previous-life-sucks-honey/a9f7109f958973814b089333d380d492.jpg",
      "https://remanga.org/media/titles/how-a-pro-from-a-previous-life-sucks-honey/a9f7109f958973814b089333d380d492.jpg",
      "https://remanga.org/media/titles/how-a-pro-from-a-previous-life-sucks-honey/a9f7109f958973814b089333d380d492.jpg",
    ],
  },
];
export const Categories = () => {
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
    <div ref={ref} className={styles.categories}>
      {categories.map((i, index) => (
        <Link to="/" className={styles.category} key={index}>
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
        </Link>
      ))}
    </div>
  );
};
