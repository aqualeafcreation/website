import Image from 'next/image'
import styles from './Philosophy.module.css'

export default function Philosophy() {
  return (
    <section className={styles.section} id="philosophy">
      <div className={`${styles.imageWrap} reveal reveal-d1`}>
        <Image
          src="https://images.unsplash.com/photo-1520962880247-cfaf541c8724?w=1920&q=85&fit=crop"
          alt="Minimalist aquatic flora"
          fill
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
        <div className={styles.imageOverlay} />
        
        <div className={styles.content}>
          <p className={`section-label reveal reveal-d2`}>PHILOSOPHY</p>
          <h2 className={`${styles.heading} reveal reveal-d3`}>
            Aquascaping is not decoration.<br />It is the recreation of the nature.
          </h2>
        </div>
      </div>
    </section>
  )
}
