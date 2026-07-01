'use client'

import { useState } from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'

const exhibitions = [
  { label: 'Planted Aquarium — Dutch',      href: '#exhibition-dutch' },
  { label: 'Planted Aquarium — Hardscape',  href: '#exhibition-hardscape' },
  { label: 'Terrarium',                     href: '#exhibition-terrarium' },
  { label: 'Paludarium',                    href: '#exhibition-paludarium' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const close = () => { setMobileOpen(false); document.body.style.overflow = '' }
  const open  = () => { setMobileOpen(true);  document.body.style.overflow = 'hidden' }

  return (
    <>
      <nav className={styles.navbar} id="navbar">
        <Link href="#hero" className={styles.logo} onClick={close}>
          Aqua Leaf <span>Creation</span>
        </Link>

        <ul className={styles.navLinks}>
          <li><a href="#hero">Home</a></li>

          <li className={styles.dropdown}>
            <a href="#exhibitions">The Exhibitions <span className={styles.arrow}>▾</span></a>
            <ul className={styles.dropdownMenu} role="menu">
              {exhibitions.map((ex) => (
                <li key={ex.href} role="menuitem">
                  <a href={ex.href}>{ex.label}</a>
                </li>
              ))}
            </ul>
          </li>

          <li><a href="#philosophy">The Studio</a></li>
          <li><a href="#booking" className={styles.cta}>Booking</a></li>
        </ul>

        <button
          className={styles.hamburger}
          onClick={open}
          aria-label="Open navigation menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile overlay */}
      <div className={`mobileOverlay ${mobileOpen ? 'open' : ''}`}>
        <button className="mobileClose" onClick={close}>[ Close ]</button>
        <a href="#hero"         onClick={close}>Home</a>
        <a href="#exhibitions"  onClick={close}>The Exhibitions</a>
        <a href="#philosophy"   onClick={close}>The Studio</a>
        <a href="#booking"      onClick={close}>Booking</a>
      </div>
    </>
  )
}
