import styles from './QuoteStrip.module.css'

export default function QuoteStrip() {
  return (
    <section className={styles.strip}>
      <blockquote className={styles.quote}>
        <span className={styles.mark}>&ldquo;</span>
        Nature does not hurry, yet everything is accomplished.
        <span className={styles.mark}>&rdquo;</span>
      </blockquote>
      <p className={styles.attribution}>
        — Lao Tzu &nbsp;/&nbsp; The guiding principle of Aqua Leaf Creation
      </p>
    </section>
  )
}
