import styles from './Philosophy.module.css'

export default function Philosophy() {
  return (
    <section className={styles.section} id="philosophy">
      <div className={`${styles.imageWrap} reveal reveal-d1`}>
        <video
          src="/images/intro.mp4"
          autoPlay
          loop
          muted
          playsInline
          className={styles.videoBg}
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
