// import './Search.scss';


function Search() {

  return (
    <>
        <section className="search">
            <section className="search__wrapper">
                <form action="#" className='search__form'>
                    <a href="" className='search__btn'>
                        <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
                    </a>
                    <input type="text" placeholder='Что ищем, семпай?'/>
                    <a href="#" className='search__btn-close'>
                        <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>
                    </a>
                </form>
                <div className="search__popular-search">
                    <p>Часто ищут</p>
                </div>
                <button className='search__popular-btn'>Секс ради выживания!</button>
                <button className='search__popular-btn'>Магическая битва</button>
                <button className='search__popular-btn'>Башня бога</button>
                <button className='search__popular-btn'>Хуйня из под коня</button>
            </section>
        </section>
    </>
  )
}

export default Search