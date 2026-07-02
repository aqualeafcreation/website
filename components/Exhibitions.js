import Image from 'next/image'
import styles from './Exhibitions.module.css'

const items = [
  {
    id:       'dutch',
    title:    'BOTANICAL CANVAS',
    num:      '01',
    quote:    'A planted ecosystem is a captive mountain, bringing untamed peace indoors.',
    img:      'https://images.unsplash.com/photo-1611462985358-60d3498e0364?w=1920&q=85&fit=crop',
    alt:      'Lush Dutch-style planted aquarium',
  },
  {
    id:       'hardscape',
    title:    'STRUCTURAL CORE',
    num:      '02',
    quote:    'Elevating luxury spaces with raw, living nature.',
    img:      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=85&fit=crop',
    alt:      'Dramatic hardscape aquarium',
  },
  {
    id:       'terrarium',
    title:    'CONTAINED SYSTEM',
    num:      '03',
    quote:    'True luxury is owning a living, breathing jungle.',
    img:      'https://images.unsplash.com/photo-1552083375-1447ce886485?w=1920&q=85&fit=crop',
    alt:      'Geometric glass terrarium',
  },
  {
    id:       'paludarium',
    title:    'TRANSITION ZONE',
    num:      '04',
    quote:    'Living art, engineered for modern environments.',
    img:      'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=1920&q=85&fit=crop',
    alt:      'Paludarium ecosystem',
  },
]

export default function Exhibitions() {
  return (
    <section className={styles.section} id="exhibitions">
      {items.map((item, idx) => (
        <article key={item.id} id={`exhibition-${item.id}`} className={styles.item}>
          <div className={styles.imgWrap}>
            <Image
              src={item.img}
              alt={item.alt}
              fill
              sizes="100vw"
              className={styles.img}
              style={{ objectFit: 'cover' }}
            />
            <div className={styles.imgOverlay} />
            <div className={`${styles.content} reveal`}>
              <p className={styles.numPlate}>{item.num}</p>
              <h3 className={styles.itemTitle}>{item.title}</h3>
              {item.quote && <p className={styles.itemQuote}>{item.quote}</p>}
            </div>
          </div>
        </article>
      ))}
    </section>
  )
}
