'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import styles from './Hero.module.css'

const HERO_IMAGE = ''

export default function Hero() {
  const bgRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      if (!bgRef.current) return
      if (window.scrollY < window.innerHeight) {
        bgRef.current.style.transform = `scale(1.05) translateY(${window.scrollY * 0.1}px)`
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className={styles.hero} id="hero">
      {/* Luxury Ambient Dark Glow Background */}
      <div className={styles.ambientGlow}></div>

      <div className={styles.overlay} />

      <div className={styles.content}>
        <div className="reveal" style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.2rem' }}>
          <img src="/logo.svg" alt="AquaLeaf Logo" style={{ height: '85px', width: 'auto', filter: 'drop-shadow(0 0 15px rgba(0,0,0,0.8))' }} />
        </div>
        <h1 className={`${styles.title} reveal`}>
          AquaLeaf Creation
        </h1>
        <p className={styles.sub}>
          Living Architecture. Bespoke aquascapes and terrariums.
        </p>
      </div>

      <div className={styles.scrollIndicator}>
        <div className={styles.scrollDot} />
      </div>
    </section>
  )
}
