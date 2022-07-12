import React from 'react'
import './aboutme.scss'
import AboutMeBg from '../../ascets/about-bg.jpg'
function AboutMe() {
    return (
        <section className="about">
            <div className="about__inner" style={{ background: `url(${AboutMeBg})no-repeat center`, backgroundSize: "cover" }}>
                <div className="about__blur-wrapper"></div>
                <h1 className='about__title'>Парочка слов обо мне и моих скилах</h1>
            </div>
            <div className="about__content">
                <div className="container">
                    <h1 className="about__content-title">
                        Почему вам захочется сотрудничать со мной?
                    </h1>
                    <p className="about__content-text">
                        На данный момент я активно прокачиваю свои навыки во frontend-разработке. Имею опыт в этом деле более 6 месяцев.
                        К каждому проекту я отношусь ответсвенно и самое главное с душой. Мечтаю поппасть в команду опытных и разработчиков,
                        где я смогу получить правильный вектор дальнейшего развития.
                    </p>
                    <p className="about__content-text">
                        В разработке своих проектов я пользуюсь современным стеком технологий:
                    </p>
                    <ul className="about__content-list">
                        <li className="about__content-list-item">
                            React JS
                        </li>
                        <li className="about__content-list-item">
                            JavaScript
                        </li>
                        <li className="about__content-list-item">
                            Gulp
                        </li>
                        <li className="about__content-list-item">
                            SASS, SCSS
                        </li>
                        <li className="about__content-list-item">
                            БЭМ
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default AboutMe