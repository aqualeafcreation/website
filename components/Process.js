import styles from './Process.module.css'

const steps = [
  {
    num: '01',
    title: 'Consultation',
    desc: 'Space analysis. Light assessment. Concept mapping.',
  },
  {
    num: '02',
    title: 'Blueprint',
    desc: 'Technical schematics. Flora selection. System design.',
  },
  {
    num: '03',
    title: 'Installation',
    desc: 'Precision assembly. Calibration. Handover.',
  },
]

export default function Process() {
  return (
    <section className={styles.section} id="process">
      <div className={styles.header}>
        <p className={`section-label reveal`}>SYS.04 // Engineering</p>
        <h2 className={`${styles.title} reveal reveal-d1`}>
          Execution protocol.
        </h2>
      </div>

      <div className={styles.steps}>
        {steps.map((step, idx) => (
          <div className={`${styles.step} reveal reveal-d${idx + 1}`} key={step.num}>
            <span className={styles.stepNum}>{step.num}</span>
            <h3 className={styles.stepTitle}>{step.title}</h3>
            <p className={styles.stepDesc}>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
