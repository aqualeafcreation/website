import Image from 'next/image'
import styles from './Exhibitions.module.css'

const items = [
  {
    id:       'dutch',
    tag:      'Planted Aquarium — Dutch',
    heading:  'Planted\nAquarium',
    subtitle: '"The Botanical Canvas."',
    num:      'EX — 01',
    img:      '/images/dutch_aquarium.png',
    alt:      'Lush Dutch-style planted aquarium with dense botanical plant arrangement',
    desc:     'The Dutch style is the Old Masters of aquascaping — rows of contrasting textures, a riot of colour and form that follows strict compositional rules. Like a Flemish painting rendered in living green, red, and violet, every species chosen for its visual counterpoint to its neighbour.',
    specs: [
      { label: 'Complexity', val: 'High' },
      { label: 'Maintenance', val: 'Weekly' },
      { label: 'Lifespan', val: '5 + yrs' },
    ],
  },
  {
    id:       'hardscape',
    tag:      'Planted Aquarium — Hardscape',
    heading:  'Hardscape\nAquarium',
    subtitle: '"The Structural Core."',
    num:      'EX — 02',
    img:      '/images/hardscape_aquarium.png',
    alt:      'Dramatic hardscape aquarium with artistic stone and driftwood composition',
    desc:     'Stone and wood, silence and weight. The Iwagumi tradition distilled into its most essential form — a meditation on negative space, on the power of the unplanted. These compositions hold the same gravitas as a piece of monumental sculpture. Austere. Considered. Timeless.',
    specs: [
      { label: 'Complexity', val: 'Medium' },
      { label: 'Maintenance', val: 'Biweekly' },
      { label: 'Lifespan', val: '10 + yrs' },
    ],
  },
  {
    id:       'terrarium',
    tag:      'Terrarium',
    heading:  'The\nTerrarium',
    subtitle: '"The Contained Ecosystem."',
    num:      'EX — 03',
    img:      '/images/terrarium_geometric.png',
    alt:      'Luxury geometric glass terrarium with miniature forest ecosystem',
    desc:     'A world in a prism. Our terrariums are designed as wearable jewels for your interior — geometric glass forms, brass fittings, miniature forests of fern and moss that exist in perfect equilibrium. Some are closed systems, breathing entirely within themselves. Self-sustaining poetry.',
    specs: [
      { label: 'Complexity', val: 'Low' },
      { label: 'Maintenance', val: 'Monthly' },
      { label: 'Lifespan', val: '∞' },
    ],
  },
  {
    id:       'paludarium',
    tag:      'Paludarium',
    heading:  'The\nPaludarium',
    subtitle: '"The Transition Zone."',
    num:      'EX — 04',
    img:      '/images/paludarium_transition.png',
    alt:      'Breathtaking paludarium showing the seamless transition from aquatic to terrestrial ecosystem',
    desc:     'Earth and water, held in the same breath. The Paludarium is our most ambitious offering — a complete biome where waterfalls cascade through living rock into crystal pools below. Amphibians, fish, epiphytic orchids and trailing mosses coexist in extraordinary complexity and beauty.',
    specs: [
      { label: 'Complexity', val: 'Expert' },
      { label: 'Maintenance', val: 'Weekly' },
      { label: 'Lifespan', val: '8 + yrs' },
    ],
  },
]

export default function Exhibitions() {
  return (
    <section className={styles.section} id="exhibitions">
      {/* Section header */}
      <div className={styles.header}>
        <h2 className={`${styles.title} reveal`}>
          The <em>Exhibitions</em> —<br />Four Living Worlds.
        </h2>
        <p className={`${styles.intro} reveal reveal-d2`}>
          Each discipline is a distinct language. Select the world that
          resonates with your space, your rhythm, and your vision.
        </p>
      </div>

      {/* Exhibition items — alternating layout */}
      {items.map((item, idx) => (
        <article
          key={item.id}
          id={`exhibition-${item.id}`}
          className={`${styles.item} ${idx % 2 === 1 ? styles.reversed : ''}`}
        >
          {/* Image */}
          <div className={styles.imgWrap}>
            <span className={styles.imgNum}>{item.num}</span>
            <Image
              src={item.img}
              alt={item.alt}
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              className={styles.img}
              style={{ objectFit: 'cover' }}
            />
            <div className={styles.frame} aria-hidden="true" />
          </div>

          {/* Text */}
          <div className={styles.content}>
            <p className={`${styles.tag} reveal`}>{item.tag}</p>
            <h3 className={`${styles.heading} reveal reveal-d1`}>
              {item.heading.split('\n').map((line, i) => (
                <span key={i}>{line}{i === 0 && <br />}</span>
              ))}
            </h3>
            <p className={`${styles.subtitle} reveal reveal-d2`}>{item.subtitle}</p>
            <p className={`${styles.desc} reveal reveal-d3`}>{item.desc}</p>

            <div className={`${styles.specs} reveal reveal-d4`}>
              {item.specs.map((s) => (
                <div className={styles.specItem} key={s.label}>
                  <p className={styles.specLabel}>{s.label}</p>
                  <p className={styles.specVal}>{s.val}</p>
                </div>
              ))}
            </div>
          </div>
        </article>
      ))}
    </section>
  )
}
