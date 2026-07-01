import Image from 'next/image'
import styles from './Philosophy.module.css'

export default function Philosophy() {
  return (
    <section className={styles.section} id="philosophy">
      <div className={styles.container}>
        {/* Left side text */}
        <div className={styles.content}>
          <p className={`section-label reveal`}>SYS.02 // Philosophy</p>
          <div className={`thin-rule reveal reveal-d1`} />

          <h2 className={`${styles.heading} reveal reveal-d2`}>
            We treat nature as architecture. Water as canvas.
          </h2>

          <p className={`${styles.text} reveal reveal-d3`}>
            Excess is noise. True design emerges when everything unnecessary is stripped away. 
            We build self-sustaining ecosystems defined by clean lines, negative space, and absolute precision. 
            Living art, engineered for modern environments.
          </p>
        </div>

        {/* Right side large image */}
        <div className={`${styles.imageWrap} reveal reveal-d4`}>
          <Image
            src="https://images.unsplash.com/photo-1520962880247-cfaf541c8724?w=900&q=85&fit=crop"
            alt="Minimalist aquatic flora"
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
            style={{ objectFit: 'cover', filter: 'grayscale(1) contrast(1.1)' }}
          />
          <div className={styles.imageOverlay} />
        </div>
      </div>
    </section>
  )
}
