'use client'

import Image from 'next/image'
import styles from './Exhibitions.module.css'

const items = [
  {
    id:        'dutch',
    num:       '01',
    category:  'Dutch Style',
    title:     'Botanical Canvas',
    quote:     'A planted ecosystem is a captive wilderness - untamed peace sculpted for your space.',
    subline:   'Planted Aquascape · Lush Canopy Systems',
    img:       'https://images.unsplash.com/photo-1611462985358-60d3498e0364?w=1920&q=90&fit=crop',
    alt:       'Lush Dutch-style planted aquarium',
    imgLabel:  'Dutch Style',
  },
  {
    id:        'hardscape',
    num:       '02',
    category:  'Hardscape',
    title:     'Structural Core',
    quote:     'Where raw stone and ancient driftwood converge - architecture that breathes.',
    subline:   'Stone · Driftwood · Negative Space',
    img:       'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=90&fit=crop',
    alt:       'Dramatic hardscape aquarium',
    imgLabel:  'Hardscape',
  },
  {
    id:        'terrarium',
    num:       '03',
    category:  'Terrarium',
    title:     'Contained Jungle',
    quote:     'True luxury is owning a living, breathing world sealed behind glass.',
    subline:   'Glass Gardens · Moss & Fern',
    img:       'https://images.unsplash.com/photo-1552083375-1447ce886485?w=1920&q=90&fit=crop',
    alt:       'Geometric glass terrarium',
    imgLabel:  'Terrarium',
  },
  {
    id:        'paludarium',
    num:       '04',
    category:  'Paludarium',
    title:     'Transition Zone',
    quote:     'Land and water - two worlds in perpetual dialogue, engineered for eternity.',
    subline:   'Land & Water Fusion · Living Ecosystems',
    img:       'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=1920&q=90&fit=crop',
    alt:       'Paludarium ecosystem',
    imgLabel:  'Paludarium',
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
              <span className={`${styles.panelNum} reveal`}>{item.num}</span>

              <div className={`${styles.rule} reveal reveal-d1`} />

              <h2 className={`${styles.panelTitle} reveal reveal-d2`}>
                <span className={styles.titleLine}>{item.title}</span>
              </h2>

              <p className={`${styles.panelCategory} reveal reveal-d3`}>{item.category}</p>

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

            <div className={styles.imgLabelWrap}>
              <p className={`${styles.imgNum} reveal`}>{item.num}</p>
              <h3 className={`${styles.imgLabel} reveal reveal-d1`}>{item.imgLabel}</h3>
              <div className={`${styles.imgLabelRule} reveal reveal-d2`} />
            </div>
          </div>

        </div>
      ))}
    </section>
  )
}
