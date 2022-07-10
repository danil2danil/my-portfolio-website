import React from 'react'
import { Link } from 'react-router-dom'
import './header.scss'

function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <Link to="/" className='header__logo'>My portfolio</Link>
                    <nav className="header__nav">
                        <Link className='header__nav-item' to="/progects">Проекты</Link>
                        <Link className='header__nav-item' to="/about">Обо мне</Link>
                        <Link className='header__nav-item' to="/progects">Нуда-то</Link>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header