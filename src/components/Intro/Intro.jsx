import './intro.scss'
import React from 'react'
import { Link } from 'react-router-dom'

function Intro({ title, subtitle, background }) {
    return (
        <section className="intro" >
            <div className="container-fluid">
                <div className="intro__inner" style={{ background: `url(${background})no-repeat center`, backgroundSize: "cover" }}>
                    <div className="intro__blur"></div>
                    <div className="container">
                        <div className="intro__content">
                            <h1 className="intro__title">{title}</h1>
                            <p className="intro__subtitle">{subtitle}</p>
                            <Link to="/progects"><button className="btn">проекты</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Intro