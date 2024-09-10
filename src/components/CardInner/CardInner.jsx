import './CardInner.scss';
import omg from '../../as/938bcb940b384a98fb96cff1e06e726b.jpg';
import Drscription from "./CardInnerDescrition/Description/Drscription.jsx";
import Similar from "./Similar/Similar.jsx";

function CardInner() {

    return (
        <>
            <section className='card-inner'
                     // style={{backgroundImage:`url(${omg})`}}
            >
                <section className="card-inner__wrapper _container"
                >

                    <div className={'stiky'}>
                        <aside className="card-inner__aside">
                            <div className="card-inner__aside-preview">
                                <img src={omg} alt="##preview"/>
                            </div>
                            <button className="action__blue-button-big">Читать</button>
                            <button className="action__blue-button-big">Добавить в закладки</button>
                            <button className="action__report-button">
                                <svg className="SvgIcon_root__n_a0S SvgIcon_fontSize-small__fjOf4 mr-2"
                                     focusable="false"
                                     viewBox="0 0 24 24" aria-hidden="true">
                                    <path
                                        d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z"></path>
                                </svg>
                                <span>Пожаловаться</span>
                            </button>
                        </aside>
                    </div>

                    <header className="card-inner__header">
                        <div>
                            <div className="card-inner__header-top">
                                <p className="card-inner__header-top-p">
                                    Манга 2024
                                </p>
                                <h1 className="card-inner__header-top-h1">
                                    Моя перевёрнутая жизнь в качестве моба
                                </h1>
                            </div>
                            <div className="card-inner__header-bottom">
                                <div className="card-inner__header-bottom-left">
                                    <table>
                                        <tbody>
                                        <tr>
                                            <td>Глав</td>
                                            <td>Лайков</td>
                                            <td>В закладках</td>
                                            <td>Просмотров</td>
                                            <td>Выпуск</td>
                                            <td>Перевод</td>
                                            <td>PG</td>
                                        </tr>
                                        <tr>
                                            <td>10</td>
                                            <td className="icon-and-text-black">
                                                <svg className="SvgIcon_root__n_a0S SvgIcon_fontSize-small__fjOf4"
                                                     focusable="false"
                                                     viewBox="0 0 24 24" aria-hidden="true">
                                                    <path
                                                        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
                                                </svg>
                                                <span>13.4K</span>
                                            </td>
                                            <td className="icon-and-text-black">
                                                <svg className="SvgIcon_root__n_a0S SvgIcon_fontSize-small__fjOf4"
                                                     focusable="false"
                                                     viewBox="0 0 24 24" aria-hidden="true">
                                                    <path
                                                        d="M19 18l2 1V3c0-1.1-.9-2-2-2H8.99C7.89 1 7 1.9 7 3h10c1.1 0 2 .9 2 2v13zM15 5H5c-1.1 0-2 .9-2 2v16l7-3 7 3V7c0-1.1-.9-2-2-2z"></path>
                                                </svg>
                                                <span>7.3K</span>
                                            </td>
                                            <td className="icon-and-text-black">
                                                <svg className="SvgIcon_root__n_a0S SvgIcon_fontSize-small__fjOf4"
                                                     focusable="false"
                                                     viewBox="0 0 24 24" aria-hidden="true">
                                                    <path
                                                        d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path>
                                                </svg>
                                                <span>67.3K</span>
                                            </td>
                                            <td>Продолжается</td>
                                            <td>Продолжается</td>
                                            <td>16+</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="card-inner__header-bottom-right">
                                    <div className="card-inner__header-bottom-right-flex">
                                        <p className="icon-and-text">
                                            <svg
                                                className="SvgIcon_root__n_a0S SvgIcon_color-warning__tVs_m SvgIcon_fontSize-medium__NwgG6"
                                                focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                <path
                                                    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                                            </svg>
                                            <span>9.3</span>
                                        </p>
                                        <button className="action__blure-btn">Оценить</button>
                                    </div>
                                    <p className="card-inner__header-bottom-right-p2">201</p>
                                </div>
                            </div>
                        </div>

                        <div className={'card-category'}>
                            <div>
                                <ul className={'card-category_descr'}>
                                    <li>Описание</li>
                                    <li>Читать</li>
                                </ul>
                                <Drscription/>
                            </div>
                            <Similar/>
                        </div>

                    </header>
                </section>


            </section>
        </>
    )
}

export default CardInner