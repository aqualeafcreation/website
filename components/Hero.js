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
      {/* Video Background */}
      <video
        src="/images/logo-animation.mp4"
        autoPlay
        loop
        muted
        playsInline
        className={styles.videoBg}
      />

      {/* Vignette Overlay for smooth blending */}
      <div className={styles.videoVignette} />

    </section>
  )
}
