const Form = () => {
    return (
        <div className="form">
            <form action="" className="form__content">
                <div className="form__box">
                    <input type="email" className="form__input" placeholder="メールアドレス"/>
                    <label htmlFor="" className="form__label">メールアドレス</label>
                    <div className="form__shadow"></div>
                </div>
                <div className="form__box">
                    <input type="password" className="form__input" placeholder="パスワード"/>
                    <label htmlFor="" className="form__label">パスワード</label>
                    <div className="form__shadow"></div>
                </div>
                <div className="form__button">
                    <input type="submit" className="form__submit" value="ログイン"/>
                </div>
            </form>
        </div>
    )
}

export default Form;
