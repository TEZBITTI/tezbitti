import React from 'react'
import './logo.css'
import logo from '../../Assets/yazılı.svg'
import { Spin } from 'antd'
import AnimatedSection from '../../AnimatedSection'

const Logo = () => {
  return (
    <>

    <div className="logo-container">
 
        <div className="tezbitti-logo">
            <img src={logo} alt="logo" />
        </div>

        <div className="under-construction">
            <h2>Üzerinde çalışıyoruz!</h2>
            <p>Bu site şu anda yapım aşamasındadır. Fakat endişelenmeyin 
             hizmetlerimiz hız kesmeden devam ediyor!</p>
        </div>   
    </div>
    </>
)
}

export default Logo