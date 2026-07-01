import styles from './Booking.module.css'

export default function Booking() {
  return (
    <section className={styles.section} id="booking">
      <div className={styles.info}>
        <p className={`section-label reveal`}>SYS.05 // Contact</p>
        <h2 className={`${styles.heading} reveal reveal-d1`}>
          Initiate project.
        </h2>
        
        <div className={`${styles.contactBlock} reveal reveal-d2`}>
          <p>hello@aqualeafcreation.in</p>
          <p>+91 99999 99999</p>
          <p>Chhatrapati Sambhajinagar, MH</p>
          <a href="https://instagram.com/aqualeafcreation" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            {'// INSTAGRAM'}
          </a>
        </div>
      </div>
    </section>
  )
}
