'use client'

import { usePathname } from 'next/navigation'
import styles from './Navbar.module.css'

export default function Navbar() {
  const pathname = usePathname()
  const isGallery = pathname === '/gallery'

  const toggleMobileMenu = () => {
    document.getElementById('mobile-menu').classList.toggle('open')
  }

  return (
    <>
      <nav className={`${styles.nav} ${isGallery ? styles.solidNav : ''}`} id="navbar">
        <div className={styles.logo}>
          <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none' }}>
            <img src="/logo.svg" alt="AquaLeaf Logo" style={{ height: '38px', width: 'auto' }} />
            <span>AquaLeaf Creation</span>
          </a>
        </div>

        <button className={styles.mobileTrigger} onClick={toggleMobileMenu} aria-label="Open menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </nav>

      <div className="mobileOverlay" id="mobile-menu">
        <button className="mobileClose" onClick={toggleMobileMenu} aria-label="Close menu">
          CLOSE
        </button>
        <a href="/" onClick={toggleMobileMenu}>Home</a>
        <a href="/#exhibitions" onClick={toggleMobileMenu}>Aquarium Types</a>
        <a href="/gallery" onClick={toggleMobileMenu}>Gallery</a>
        <a href="/#contact" onClick={toggleMobileMenu}>Contact</a>
      </div>
    </>
  )
}
