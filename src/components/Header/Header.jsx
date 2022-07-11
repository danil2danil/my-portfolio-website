import React from 'react'
import { Link } from 'react-router-dom'
import './header.scss'
import { useState } from 'react'
import { HiMenu } from 'react-icons/hi'
import HeaderNavMenu from './HeaderNavMenu'

function Header() {
    const [isVisible, setIsVIsible] = useState(false)

    const handleTogle = () => {
        setIsVIsible(!isVisible)
    }

    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <Link to="/" className='header__logo'>My<br/>portfolio</Link>
                    <HeaderNavMenu handleTogle={handleTogle} isVisible={isVisible}/>
                    <HiMenu onClick={handleTogle}
                        className="header__menu-btn"
                        style ={isVisible ? {transform: 'rotate(180deg)', transition: '0.8s all'} : {transform: 'rotate(-180deg)', transition: '0.7s all'}}
                    />
                </div>
            </div>
        </header>
    )
}

export default Header