'use client'

import Image from 'next/image'
import styles from './Exhibitions.module.css'

const items = [
  {
    id:        'dutch',
    category:  'Dutch Style',
    quote:     'Aquascaping is not decoration it is the recreation of the nature.',
    subline:   'Planted Aquascape · Lush Canopy Systems',
    img:       '/images/dutch-style.jpg',
    mobileImg: '/mobile/dutch-style.svg',
    alt:       'Lush Dutch-style planted aquarium',
  },
  {
    id:        'hardscape',
    category:  'Hardscape',
    quote:     'A planted ecosystem is a captive mountain, bringing untamed peace indoors.',
    subline:   'Stone · Driftwood . Plants',
    img:       '/images/hardscape.jpg',
    mobileImg: '/mobile/hardscape.svg',
    alt:       'Dramatic hardscape aquarium',
  },
  {
    id:        'paludarium',
    category:  'Paludarium',
    quote:     'An Aquascaping is not just a tank, its a living canvas, painted with plants, stones, and water.',
    subline:   'Land & Water Fusion · Living Ecosystems',
    img:       '/images/Paludarium.jpg',
    mobileImg: '/mobile/Paludarium.svg',
    alt:       'Paludarium ecosystem',
  },
  {
    id:        'terrarium',
    category:  'Terrarium',
    quote:     'Elevating luxury spaces with raw, living nature.',
    subline:   'Glass Gardens · Moss & Fern',
    img:       '/images/terrarium.jpg',
    mobileImg: '/mobile/terrarium.svg',
    alt:       'Geometric glass terrarium',
  },
]

export default function Exhibitions() {
  return (
    <section className={styles.section} id="exhibitions">
      {items.map((item) => (
        <div key={item.id} className={styles.unit}>

          <div className={styles.blackPanel} id={`panel-${item.id}`}>
            <div className={styles.panelVignetteTop} />

            <div className={styles.panelContent}>
              <h2 className={`${styles.panelTitle} reveal`}>
                <span className={styles.titleLine}>{item.category}</span>
              </h2>

              <div className={`${styles.rule} reveal reveal-d1`} />

              <blockquote className={`${styles.panelQuote} reveal reveal-d3`}>
                &ldquo;{item.quote}&rdquo;
              </blockquote>

              <p className={`${styles.panelSubline} reveal reveal-d4`}>{item.subline}</p>
            </div>

            <div className={styles.panelVignetteBottom} />
          </div>

          <div className={styles.imagePanel} id={`exhibition-${item.id}`}>
            <Image
              src={item.img}
              alt={item.alt}
              fill
              sizes="100vw"
              className={styles.img}
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />

            <div className={styles.radialVignette} />
            <div className={styles.imgFadeTop} />
            <div className={styles.imgFadeBottom} />

          </div>

        </div>
      ))}
    </section>
  )
}
