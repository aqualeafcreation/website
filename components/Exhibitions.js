import Image from 'next/image'
import styles from './Exhibitions.module.css'

const items = [
  {
    id:       'dutch',
    title:    'BOTANICAL CANVAS',
    num:      '01',
    img:      'https://images.unsplash.com/photo-1611462985358-60d3498e0364?w=1200&q=85&fit=crop',
    alt:      'Lush Dutch-style planted aquarium',
    desc:     'Dense, highly structured, vividly coloured. A strict botanical composition engineered for maximum visual impact.',
  },
  {
    id:       'hardscape',
    title:    'STRUCTURAL CORE',
    num:      '02',
    img:      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=85&fit=crop',
    alt:      'Dramatic hardscape aquarium',
    desc:     'Stone, wood, and negative space. A minimalist meditation on stark geology and austere forms.',
  },
  {
    id:       'terrarium',
    title:    'CONTAINED SYSTEM',
    num:      '03',
    img:      'https://images.unsplash.com/photo-1552083375-1447ce886485?w=1200&q=85&fit=crop',
    alt:      'Geometric glass terrarium',
    desc:     'A perfectly balanced, self-sustaining microclimate encapsulated in precise geometric forms.',
  },
  {
    id:       'paludarium',
    title:    'TRANSITION ZONE',
    num:      '04',
    img:      'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=1200&q=85&fit=crop',
    alt:      'Paludarium ecosystem',
    desc:     'The complex intersection of aquatic and terrestrial biomes. High-fidelity ecosystem simulation.',
  },
]

export default function Exhibitions() {
  return (
    <section className={styles.section} id="exhibitions">
      <div className={styles.header}>
        <p className={`section-label reveal`}>SYS.03 // Exhibitions</p>
        <h2 className={`${styles.title} reveal reveal-d1`}>
          Select your environment.
        </h2>
      </div>

      <div className={styles.grid}>
        {items.map((item, idx) => (
          <article key={item.id} id={`exhibition-${item.id}`} className={styles.item}>
            <div className={`${styles.imgWrap} reveal reveal-d${(idx % 2) + 1}`}>
              <div className={styles.numPlate}>{item.num}</div>
              <Image
                src={item.img}
                alt={item.alt}
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                className={styles.img}
                style={{ objectFit: 'cover' }}
              />
              <div className={styles.imgOverlay} />
            </div>

            <div className={`${styles.content} reveal reveal-d${(idx % 2) + 2}`}>
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <p className={styles.itemDesc}>{item.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
