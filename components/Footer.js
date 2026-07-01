import styles from './Footer.module.css'

const footerNav = [
  {
    title: 'Exhibitions',
    links: [
      { label: 'Planted — Dutch',      href: '#exhibition-dutch' },
      { label: 'Planted — Hardscape',  href: '#exhibition-hardscape' },
      { label: 'Terrarium',            href: '#exhibition-terrarium' },
      { label: 'Paludarium',           href: '#exhibition-paludarium' },
    ],
  },
  {
    title: 'Studio',
    links: [
      { label: 'The Philosophy', href: '#philosophy' },
      { label: 'The Process',    href: '#process' },
      { label: 'Commission Us',  href: '#booking' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { label: 'hello@aqualeafcreation.in', href: 'mailto:hello@aqualeafcreation.in' },
      { label: '+91 99999 99999',            href: 'tel:+919999999999' },
      { label: '@aqualeafcreation',          href: 'https://instagram.com/aqualeafcreation', external: true },
      { label: 'Chhatrapati Sambhajinagar',  href: '#' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        {/* Brand column */}
        <div>
          <p className={styles.brandName}>Aqua Leaf <span>Creation</span></p>
          <p className={styles.tagline}>Living Architecture — Since 2024</p>
          <p className={styles.desc}>
            Bespoke aquascapes and terrariums crafted with architectural
            precision in Chhatrapati Sambhajinagar, Maharashtra.
            Nature, made permanent.
          </p>
        </div>

        {/* Nav columns */}
        {footerNav.map((col) => (
          <div key={col.title}>
            <p className={styles.colTitle}>{col.title}</p>
            <ul className={styles.links}>
              {col.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className={styles.bottom}>
        <p className={styles.copy}>
          © 2024 Aqua Leaf Creation. All rights reserved.&nbsp;&nbsp;|&nbsp;&nbsp;aqualeafcreation.in
        </p>
        <p className={styles.location}>
          Rooted in Chhatrapati Sambhajinagar, Maharashtra
        </p>
      </div>
    </footer>
  )
}
