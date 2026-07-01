import styles from './Process.module.css'

const steps = [
  {
    num: '01',
    title: 'Consultation',
    desc: 'We begin with a conversation. Your space, your light conditions, your aesthetic instincts. We listen more than we speak. From this, the vocabulary of your aquascape emerges.',
    icon: (
      <svg viewBox="0 0 56 56" aria-hidden="true" fill="none" strokeWidth="1">
        <rect x="8" y="12" width="32" height="24" />
        <line x1="8"  y1="36" x2="14" y2="44" />
        <line x1="14" y1="44" x2="20" y2="36" />
        <line x1="18" y1="22" x2="32" y2="22" />
        <line x1="18" y1="28" x2="28" y2="28" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'The Blueprint',
    desc: 'We draft a detailed technical plan — plant species, substrate layers, lighting schedule, filtration system. A full architectural brief for your living artwork, reviewed and refined together.',
    icon: (
      <svg viewBox="0 0 56 56" aria-hidden="true" fill="none" strokeWidth="1">
        <rect x="10" y="8"  width="36" height="44" />
        <line x1="16" y1="18" x2="38" y2="18" />
        <line x1="16" y1="26" x2="38" y2="26" />
        <line x1="16" y1="34" x2="30" y2="34" />
        <line x1="16" y1="42" x2="24" y2="42" />
        <line x1="34" y1="6"  x2="34" y2="12" />
        <line x1="31" y1="9"  x2="37" y2="9" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Installation',
    desc: 'We arrive, install, and calibrate. Every element placed by hand with surgical precision. We leave only when the ecosystem is stable, thriving, and exactly as designed. Then we teach you to listen to it.',
    icon: (
      <svg viewBox="0 0 56 56" aria-hidden="true" fill="none" strokeWidth="1">
        <rect x="6" y="36" width="44" height="8" />
        <polyline points="16,36 22,20 28,30 34,16 40,36" />
        <circle cx="28" cy="14" r="3" />
      </svg>
    ),
  },
]

export default function Process() {
  return (
    <section className={styles.section} id="process">
      {/* Header */}
      <div className={styles.header}>
        <h2 className={`${styles.title} reveal`}>
          From first<br /><em>draft</em> to<br />living space.
        </h2>
        <p className={`${styles.intro} reveal reveal-d2`}>
          Our process is designed to be as refined as the final installation.
          We work with you through three deliberate stages, ensuring every
          decision is considered, every material curated, every outcome intentional.
        </p>
      </div>

      {/* Steps grid */}
      <div className={styles.steps}>
        {steps.map((step, idx) => (
          <div className={`${styles.step} reveal reveal-d${idx + 1}`} key={step.num}>
            <div className={styles.icon}>
              {step.icon}
              <span className={styles.stepNum}>{step.num}</span>
            </div>
            <h3 className={styles.stepTitle}>{step.title}</h3>
            <p  className={styles.stepDesc}>{step.desc}</p>
            {idx < steps.length - 1 && (
              <span className={styles.connector} aria-hidden="true">→</span>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
