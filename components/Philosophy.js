import Image from 'next/image'
import styles from './Philosophy.module.css'

export default function Philosophy() {
  return (
    <section className={styles.section} id="philosophy">
      {/* Left — sketch image */}
      <div className={styles.imageWrap}>
        <Image
          src="/images/philosophy_sketch.png"
          alt="Architectural aquarium blueprint sketch — Aqua Leaf Creation design philosophy"
          fill
          sizes="(max-width: 900px) 100vw, 50vw"
          className={styles.img}
          style={{ objectFit: 'cover' }}
        />
        <p className={styles.imgCaption}>Draft No. 01 — Aquascape Blueprint Study</p>
      </div>

      {/* Right — manifesto text */}
      <div className={styles.content}>
        <p className={`section-label reveal`}>§ The Philosophy</p>
        <div className={`thin-rule reveal reveal-d1`} />

        <h2 className={`${styles.heading} reveal reveal-d2`}>
          We treat <em>nature</em><br />as architecture—<br />and water as canvas.
        </h2>

        <p className={`${styles.text} reveal reveal-d3`}>
          Every aquascape we build begins not with plants or stone, but with a question:
          what does this space <em>need to feel?</em> We draft, we revise, we iterate —
          the same methodical rigour a master architect brings to a building, we bring
          to every cubic centimetre of water.
        </p>

        <p className={`${styles.text} reveal reveal-d4`}>
          Born from a love of Chhatrapati Sambhajinagar's heritage and a fascination
          with the Japanese art of Wabi-Sabi, Aqua Leaf Creation creates living
          ecosystems that age gracefully, breathe quietly, and command every room they inhabit.
        </p>

        <div className={`${styles.manifesto} reveal`}>
          {[
            ['01 /', 'Draft First'],
            ['02 /', 'Plant Precisely'],
            ['03 /', 'Build to Last'],
            ['04 /', 'Curate Always'],
          ].map(([num, label]) => (
            <div className={styles.manifestoItem} key={num}>
              <p className={styles.manifestoNum}>{num}</p>
              <p className={styles.manifestoLabel}>{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
