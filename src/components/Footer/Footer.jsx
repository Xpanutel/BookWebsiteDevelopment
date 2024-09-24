import React from "react";
import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";
import vk from "../../images/vk-logo.svg";
import tg from "../../images/telegram-fill-svgrepo-com.svg";
import ds from "../../images/discord-svgrepo-com.svg";
import tt from "../../images/tiktok-svgrepo-com.svg";
import yt from "../../images/youtube-168-svgrepo-com.svg";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_column}>
        <h1 className={styles.footer_logo}>ReManga</h1>
        <span className={styles.footer_secondaryText}>
          Всегда готовы ответить на вопросы
        </span>
        <span className={styles.footer_email} style={{ marginTop: "-16px" }}>
          Задать вопрос
        </span>
        <h4>
          <p className={styles.footer_secondaryText}> Почта для связи: </p>
          <a href="mailto:contact@remanga.org" className={styles.footer_email}>
            contact@remanga.org
          </a>
        </h4>
        <span className={styles.footer_secondaryText}>remanga.org © 2024</span>
      </div>
      <div className={styles.footer_column}>
        <h1 className={styles.footer_heading}>Разделы </h1>
        <Link to="/rules" className={styles.footer_link}>
          Правила сайта
        </Link>
        <Link to="/rules" className={styles.footer_link}>
          DMCA
        </Link>
        <Link to="/rules" className={styles.footer_link}>
          Авторское право
        </Link>
        <Link to="/rules" className={styles.footer_link}>
          О НАС
        </Link>
        <Link to="/rules" className={styles.footer_link}>
          Вакансии
        </Link>
      </div>
      <div className={styles.footer_column}>
        <h1 className={styles.footer_heading}>Инфо </h1>
        <Link to="/rules" className={styles.footer_link}>
          Пользовательское соглашение
        </Link>
        <Link to="/rules" className={styles.footer_link}>
          Агентский договор
        </Link>
        <Link to="/rules" className={styles.footer_link}>
          Соглашение о конфиденциональности
        </Link>
        <Link to="/rules" className={styles.footer_link}>
          Мобильное приложение
        </Link>
        <Link to="/rules" className={styles.footer_link}>
          FAQ
        </Link>
      </div>
      <div className={styles.footer_column}>
        <h1 className={styles.footer_heading}>Скачать приложение</h1>
        <figure className={styles.footer_playMarketLogo}>
          <svg>
            <path
              fill="#000"
              d="M14.222 9.374c1.037-.61 1.037-2.137 0-2.748L11.528 5.04 8.32 8l3.207 2.96 2.694-1.586Zm-3.595 2.116L7.583 8.68 1.03 14.73c.201 1.029 1.36 1.61 2.303 1.055l7.294-4.295ZM1 13.396V2.603L6.846 8 1 13.396ZM1.03 1.27l6.553 6.05 3.044-2.81L3.333.215C2.39-.341 1.231.24 1.03 1.27Z"
            ></path>
          </svg>
        </figure>
        <h1 className={styles.footer_heading}>Контакты</h1>
        <figure className={styles.footer_icons}>
          <img src={vk} alt="" />
          <img src={tg} alt="" />
          <img src={ds} alt="" />
          <img src={tt} alt="" />
          <img src={yt} alt="" />
        </figure>
      </div>
    </footer>
  );
};
