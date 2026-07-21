import React from 'react'
import logo  from "../images/icon.png"

function Header() {
  return (
   <header className="header">
        <div id="logo">
            <figure className="header-logo">
                <img src={logo} alt="Logo" className="header-logo-image" />  
            </figure>
            <div className="header-logo-text">
                <h1 className="header-logo-title">Nettoyage Pro</h1>
                <p className="header-logo-subtitle">Propre, efficace</p>
            </div>
        </div>

        

        <nav className="header-nav">
            <ul>
                <a href="#accueil"><li className="header-nav-item">Accueil</li></a>
                <a href="#services"><li className="header-nav-item">Services</li></a>
                <a href="#about"><li className="header-nav-item">A propos</li></a>
                <a href="#testimonials"><li className="header-nav-item">Témoignages</li></a>
                <a href="#contact"><li className="header-nav-item">Contact</li></a>
            </ul>
        </nav>
        <button className="header-cta-button">Demander un devis</button>
    </header>
  )
}

export default Header
