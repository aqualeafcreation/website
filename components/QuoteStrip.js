import styles from './QuoteStrip.module.css'

export default function QuoteStrip({ title, text, subQuote, showScroll, noTopPadding }) {
  return (
    <div className={`${styles.quoteStrip} ${noTopPadding ? styles.noTopPadding : ''}`}>
      {title && (
        <h2 className={`${styles.title} reveal`}>
          {title}
        </h2>
      )}
      <div className={`${subQuote ? styles.subQuote : styles.quote} reveal ${title ? 'reveal-d1' : ''}`}>
        {text}
      </div>
      {showScroll && (
        <div className={`${styles.scrollIndicator} reveal reveal-d2`}>
          <div className={styles.scrollDot} />
        </div>
      )}
    </div>
  )
}
