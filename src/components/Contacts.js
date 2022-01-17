import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendEmail } from './../redux/actions';
import Alert from "../UI/Alert";
import Loader from './../UI/Loader';



const Contact = () => {

    const dispatch = useDispatch();
    const { text, className } = useSelector(state => state.app.alert)
    const loading = useSelector(state => state.app.fetching)

    function handleSubmit(event) {
        event.preventDefault();
        dispatch(sendEmail(event));
    }

    return (
        <div className="contact__wrapper">
            <div className="contact__container">
                <div className="contact__alert">
                    {text && <Alert text={text} type={className} />}
                </div>
                <div className="contact__title">Спасибо за внимание.<br /> Напишите мне, если хотите сотрудничать.</div>
                <form className="form" action="" onSubmit={handleSubmit}>
                    {loading && <div className="form__loader"><Loader /></div>}
                    <div className="form__row">
                        <div className="form__col">
                            <div >Ваше имя</div>
                            <input name="name" required type="text" />
                        </div>
                        <div className="form__col">
                            <div >Email</div>
                            <input name="email" required type="email" />
                        </div>
                    </div>
                    <div className="form__col">
                        <div >Сообщение</div>
                        <textarea name="message" required id="" cols="30" rows="10" />
                    </div>
                    <button className="form__btn" type="submit">Отправить</button>
                </form>
            </div>
        </div>
    )
}

export default Contact