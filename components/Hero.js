'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import styles from './Hero.module.css'

// Dark, high-contrast aquarium image
const HERO_IMAGE = 'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?w=1920&q=90&fit=crop'

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
      {/* Background Image */}
      <div className={styles.bgWrap} ref={bgRef}>
        <Image
          src={HERO_IMAGE}
          alt="Dark minimalist aquarium"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center', filter: 'grayscale(0.3) contrast(1.2)' }}
        />
      </div>

      <div className={styles.overlay} />

      <div className={styles.content}>
        <p className={styles.eyebrow}>AquaLeaf Creation</p>
        <h1 className={styles.title}>
          LIVING<br />
          <span className={styles.highlight}>ARCHITECTURE.</span>
        </h1>
        <p className={styles.sub}>
          Creating nature is the ultimate luxury.
        </p>
      </div>

      <div className={styles.scrollIndicator}>
        <div className={styles.scrollDot} />
      </div>
    </section>
  )
}
