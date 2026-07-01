'use client'

import styles from './Navbar.module.css'

export default function Navbar() {
  const toggleMobileMenu = () => {
    document.getElementById('mobile-menu').classList.toggle('open')
  }

  return (
    <>
      <nav className={styles.nav} id="navbar">
        <div className={styles.logo}>
          <a href="#">Aqua Leaf Creation</a>
        </div>

        {/* Global menu trigger */}
        <button className={styles.mobileTrigger} onClick={toggleMobileMenu} aria-label="Open menu">
          [ menu ]
        </button>
      </nav>

      {/* Full-screen overlay */}
      <div className="mobileOverlay" id="mobile-menu">
        <button className="mobileClose" onClick={toggleMobileMenu} aria-label="Close menu">
          [ close ]
        </button>
        <a href="#hero" onClick={toggleMobileMenu}>Home</a>
        <a href="#philosophy" onClick={toggleMobileMenu}>Philosophy</a>
        <a href="#exhibitions" onClick={toggleMobileMenu}>Exhibitions</a>
        <a href="#booking" onClick={toggleMobileMenu}>Contact</a>
      </div>
    </>
  )
}
