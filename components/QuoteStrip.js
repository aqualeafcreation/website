import styles from './QuoteStrip.module.css'

export default function QuoteStrip({ text }) {
  return (
    <div className={styles.quoteStrip}>
      <h2 className={`${styles.quote} reveal`}>
        {text}
      </h2>
    </div>
  )
}
