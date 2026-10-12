import { useState } from 'react'
import './NavBar.css'
// import logo from './assets/Logo Mock.png'

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {

    console.log("Hamburger clicked");
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* NavBar Logo Container */}
        <div className="brand-container">
          {/* <img src={logo} alt="Logo" className="navbar-logo" /> */}
          <div className="navbar-text">
            <span className="brand-name">
              FUN<span className="trail">TRAIL</span>
            </span>
            <span className="studios">STUDIOS</span>
          </div>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* NavBar Links Container */}
        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <li><a href="#home" onClick={toggleMenu}>Home</a></li>
          <li><a href="#games" onClick={toggleMenu}>Games</a></li>
          <li><a href="#tech" onClick={toggleMenu}>Tech</a></li>
          <li><a href="#about" onClick={toggleMenu}>About</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
        </ul>

      </div>
    </nav>
  )

}
export default NavBar;