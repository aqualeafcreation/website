'use client'

import { useEffect, useRef } from 'react'
import styles from './Hero.module.css'

export default function Hero() {
  const bgRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      if (!bgRef.current) return
      if (window.scrollY < window.innerHeight) {
        bgRef.current.style.transform = `scale(1.08) translateY(${window.scrollY * 0.12}px)`
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.bg} ref={bgRef} />
      <div className={styles.overlay} />
      <div className={styles.grainHero} />

      <div className={styles.content}>
        <p className={styles.eyebrow}>Aqua Leaf Creation — Est. 2024</p>
        <h1 className={styles.title}>
          Living <em>Architecture</em><br />for Modern Spaces.
        </h1>
        <p className={styles.sub}>
          Bespoke Aquascapes &amp; Terrariums — Chhatrapati Sambhajinagar
        </p>
      </div>

      <div className={styles.scrollIndicator}>
        <span className={styles.scrollText}>Scroll to Discover</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  )
}
