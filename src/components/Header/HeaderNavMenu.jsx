import React from 'react'
import { Link } from 'react-router-dom'

function HeaderNavMenu({ handleTogle, isVisible }) {
    return (
        <nav className={isVisible ? "header__nav visible" : "header__nav"} onClick={handleTogle}>
            <div className="header__nav-content" onClick={(event)=>{event.stopPropagation()}}>
                <Link className='header__nav-item' to="/progects">Проекты</Link>
                <Link className='header__nav-item' to="/about">Обо мне</Link>
                <Link className='header__nav-item' to="/progects">О данном проекте</Link>
            </div>
        </nav>
    )
}

export default HeaderNavMenu