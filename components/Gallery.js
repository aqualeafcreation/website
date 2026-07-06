"use client"
import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Gallery.module.css'

const images = [
  '/gallery/1.webp',
  '/gallery/2.webp',
  '/gallery/3.webp',
  '/gallery/4.webp',
  '/gallery/5.webp'
]

export default function Gallery() {
  const carousel = useRef();
  // Framer Motion automatically handles constraints if a ref is passed

  return (
    <section className={styles.gallerySection}>
      <div className={styles.header}>
        <h2 className={styles.title}>Gallery</h2>
        <p className={styles.subtitle}>A glimpse into our crafted ecosystems.</p>
      </div>
      <div className={styles.sliderContainer}>
        <motion.div ref={carousel} className={styles.carousel} whileTap={{ cursor: "grabbing" }}>
          <motion.div 
            drag="x" 
            dragConstraints={carousel} 
            className={styles.innerCarousel}
          >
            {images.map((src, idx) => (
              <motion.div key={idx} className={styles.item}>
                <Image 
                  src={src} 
                  alt="AquaLeaf Creation Gallery" 
                  fill 
                  className={styles.image} 
                  style={{objectFit: 'cover'}} 
                  draggable="false"
                />
                <div className={styles.vignette}></div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      <div className={styles.actions}>
        <Link href="/gallery" className={styles.moreBtn}>View Full Gallery</Link>
      </div>
    </section>
  )
}
