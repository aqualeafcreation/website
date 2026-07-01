import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div>
          <p className={styles.brandName}>AQUA LEAF CREATION</p>
          <p className={styles.tagline}>SYS.INIT_2024</p>
        </div>

        <div className={styles.links}>
          <a href="#hero">HOME</a>
          <a href="#exhibitions">EXHIBITIONS</a>
          <a href="#booking">COMMISSION</a>
          <a href="https://instagram.com/aqualeafcreation" target="_blank" rel="noopener noreferrer">INSTAGRAM</a>
        </div>
      </div>

      <div className={styles.bottom}>
        <p className={styles.copy}>
          © 2024 AQUA LEAF CREATION. ALL RIGHTS RESERVED.
        </p>
        <p className={styles.location}>
          <span className={styles.dot} /> CHHATRAPATI SAMBHAJINAGAR
        </p>
      </div>
    </footer>
  )
}
