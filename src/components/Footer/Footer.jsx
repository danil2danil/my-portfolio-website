import React from 'react'
import './footer.scss'

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__inner">
                    <h1 className="footer__logo">
                        My<br />portfolio
                    </h1>
                    <ul className="footer__list">
                        <li className="footer__list-title">Связь со мной</li>
                        <li className="footer__list-item">Почта: danilborunov26@mail.ru</li>
                        <li className="footer__list-item">Телефон: +7 987 071-31-63</li>
                        <li className="footer__list-item">
                            VK: <a className="footer__list-link" rel="noreferrer" href="https://vk.com/dani__lka" target="_blank">https://vk.com/dani__lka</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer