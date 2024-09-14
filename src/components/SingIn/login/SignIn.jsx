import './SignIn.scss';


function SignIn() {

  return (
    <>
        <section className="sign-in">
            <section className="sign-in__wrapper">
                <div className="sign-in__wrapper-top">
                    <p className='sign-in__wrapper-top-title'>Войти в аккаунт</p>
                    <div className="sign-in__auth-btn">
                        <div className="sign-in__auth-logo">
                            <svg class="SvgIcon_root__n_a0S SvgIcon_fontSize-small__fjOf4" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></svg>
                        </div>
                        <div className="sign-in__auth-name">Через почту или логин</div>
                    </div>
                    <div className="sign-in__auth-btn">
                        <div className="sign-in__auth-logo-ya">
                            <svg class="SvgIcon_root__n_a0S SvgIcon_fontSize-small__fjOf4" focusable="false" viewBox="0 0 256 512" aria-hidden="true"><path d="M153.1 315.8L65.7 512H2l96-209.8c-45.1-22.9-75.2-64.4-75.2-141.1C22.7 53.7 90.8 0 171.7 0H254v512h-55.1V315.8h-45.8zm45.8-269.3h-29.4c-44.4 0-87.4 29.4-87.4 114.6 0 82.3 39.4 108.8 87.4 108.8h29.4V46.5z"></path></svg>
                        </div>
                        <div className="sign-in__auth-name">Через яндекс</div>
                    </div>
                    <div className="sign-in__auth-btn">
                        <div className="sign-in__auth-logo-google">
                            <svg class="SvgIcon_root__n_a0S SvgIcon_fontSize-small__fjOf4" focusable="false" viewBox="0 0 488 512" aria-hidden="true"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
                        </div>
                        <div className="sign-in__auth-name">Через google</div>
                    </div>
                    <div className="sign-in__auth-btn">
                        <div className="sign-in__auth-logo-telegram">
                            <svg class="SvgIcon_root__n_a0S SvgIcon_fontSize-small__fjOf4" focusable="false" viewBox="0 0 496 512" aria-hidden="true"><path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"></path></svg>
                        </div>
                        <div className="sign-in__auth-name">Через telegram</div>
                    </div>
                </div>
                <div className="sign-in__wrapper-bottom">
                    <p className='sign-in__wrapper-bottom-text'>или</p>
                    {/* VK */}
                    <p className='press-continue'>Нажимая «Продолжить», вы принимаете <span className='text-blue-decoration'>пользовательское соглашение и политику конфиденциальности</span></p>
                    <p className='none-account'>Нет учетной записи?</p>
                    <button className='sign-in__registration-btn'>Зарегистрироваться</button>
                </div>
            </section>
            <section className="sign-in__wrapper-modal wrapper-modal">
                <a href="#" className='action-none-bg-btn__backtoback'>
                    <svg class="SvgIcon_root__n_a0S" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></svg>
                    Ко всем вариантам
                </a>
                <form action="#" className="wrapper-modal__form">
                    <p className='sign-in__wrapper-top-title'>Войти в аккаунт</p>
                    <input type="text" placeholder='*Логин/почта'/>
                    <input type="password" placeholder='*Пароль'/>
                    <button className='action-none-bg-reset-pass'>Забыли пароль?</button>
                    <button className='action-blue-btn__login'>Войти</button>
                    <p className='none-account'>Нет учетной записи?</p>
                    <button className='sign-in__registration-btn'>Зарегистрироваться</button>
                </form>
            </section>
        </section>
    </>
  )
}

export default SignIn