import './SingIn.scss';


function SingIn() {

  return (
    <>
        <section className="sing-in">
            <section className="sing-in__wrapper">
                <div className="sing-in__wrapper-top">
                    <p>Войти в аккаунт</p>
                </div>
                <div className="sing-in__wrapper-bottom">
                    <p>или</p>
                    {/* VK */}
                    <p>Нажимая «Продолжить», вы принимаете пользовательское соглашение и политику конфиденциальности</p>
                    <p>Нет учетной записи?</p>
                    <button>Зарегистрироваться</button>
                </div>
            </section>
        </section>
    </>
  )
}

export default SingIn