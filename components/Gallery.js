"use client"
import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Gallery.module.css'

const images = [
  'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?w=800&q=80',
  'https://images.unsplash.com/photo-1543822765-6b45a4a5840d?w=800&q=80',
  'https://images.unsplash.com/photo-1524704796725-9fc3044a58b2?w=800&q=80',
  'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800&q=80',
  'https://images.unsplash.com/photo-1620601332737-1425e408ec21?w=800&q=80'
]

export default function Gallery() {
  const carousel = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (carousel.current) {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
      }
    };
    
    updateWidth();
    setTimeout(updateWidth, 500);
    
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

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
            dragConstraints={{ right: 0, left: -width }} 
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
