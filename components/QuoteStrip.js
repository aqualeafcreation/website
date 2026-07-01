import styles from './QuoteStrip.module.css'

export default function QuoteStrip() {
  return (
    <section className={styles.strip}>
      <blockquote className={styles.quote}>
        "Nature does not hurry, yet everything is accomplished."
      </blockquote>
      <p className={styles.attribution}>
        // LAO TZU
      </p>
    </section>
  )
}
