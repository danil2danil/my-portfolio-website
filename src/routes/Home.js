import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Intro from '../components/Intro/Intro'
import IntroBg from '../ascets/intro-bg.jpg'

function Home() {
  return (
    <>
      <div className='wrapper'>
        <Header />
        <Intro 
          title={"Привет, меня зовут Данил. Я frontend-разработчик"} 
          subtitle={"Кликнув на кнопку ниже вы можете подробнее ознакомиться с моими проектами."}
          background={IntroBg}
          />
        <Footer />
      </div>
    </>
  )
}

export default Home