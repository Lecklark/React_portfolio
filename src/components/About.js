import React from "react";
import { NavLink } from 'react-router-dom';

const About = () => {

    return (
        <div className="about__wrapper">
            <div className="about__mainT">Обо мне</div>
            <div className="about__container">

                <div className="about__col">
                    <figure className="about__avatar">
                        <img src="https://avatars.githubusercontent.com/u/90966581?v=4" alt="" />
                    </figure>
                    <div className="about__about">
                        <div className="about__info">
                            Меня зовут Александр Голштейн. Я являюсь начинающим
                            фронтенд разработчиком, специализирующимся на React-разработке.
                            В настоящий момент обучаюсь в Самарском университете на 4 курсе
                            (и даже иду на красный диплом :) специальности "Наноэлектроника".<br />
                            <NavLink to="/contact" className="about__span"> Давайте творить вместе.</NavLink>
                        </div>
                    </div>
                </div>
                <div className="about__col">
                    <div className="about__hard">
                        <div className="about__title">
                            Основные навыки:
                        </div>
                        <ul className="about__list">
                            <li className="about__skill">Хорошие знания HTML, CSS, JS(ES6)</li>
                            <li className="about__skill">Работаю со стеком React/Redux</li>
                            <li className="about__skill">Умею делать адаптивную верстку</li>
                            <li className="about__skill">Пишу стили с использованием BEM, SASS</li>
                            <li className="about__skill">А также: Git, Webpack, Bootstrap</li>
                        </ul>
                    </div>
                    <div className="about__hard">
                        <div className="about__title">
                            Soft skills:
                        </div>
                        <ul className="about__list">
                            <li className="about__skill">Быстрая обучаемость, хорошая усидчивость</li>
                            <li className="about__skill">Способен читать (понимать) документацию на английском</li>
                            <li className="about__skill">Люблю решать необычные задачи, искать новые подходы</li>
                            <li className="about__skill">Дисциплинированность (опоздания - это не про меня)</li>
                            <li className="about__skill">Инициативность</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About