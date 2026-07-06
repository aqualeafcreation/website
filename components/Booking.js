import styles from './Booking.module.css'

export default function Booking() {
  return (
    <section className={styles.section} id="booking">
      <div className={styles.info}>
        <p className={`section-label reveal`}>03 — Contact</p>
        <h2 className={`${styles.heading} reveal reveal-d1`}>
          Your Vision,<br />Realized.
        </h2>
        
        <div className={`${styles.contactBlock} reveal reveal-d2`}>
          <p>info@aqualeafcreation.in</p>
          <p>+91 7028380231</p>
          <p>Chhatrapati Sambhajinagar, MH</p>
          <a href="https://instagram.com/aqualeafcreation" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            {'@aqualeafcreation'}
          </a>
        </div>
      </div>
    </section>
  )
}
