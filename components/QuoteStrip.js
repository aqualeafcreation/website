import styles from './QuoteStrip.module.css'

export default function QuoteStrip() {
  return (
    <div className={styles.quoteStrip}>
      <p className={`${styles.quote} reveal`}>
        &ldquo;An Aquascaping is not just a tank, its a living canvas, painted with plants, stones, and water.&rdquo;
      </p>
      <p className={`${styles.author} reveal reveal-d2`}>- AquaLeaf Creation</p>
    </div>
  )
}
