'use client'

import { useState } from 'react'
import styles from './Booking.module.css'

const spaceTypes = [
  { value: 'home-living',  label: 'Home — Living Room' },
  { value: 'home-study',   label: 'Home — Bedroom / Study' },
  { value: 'office',       label: 'Office / Workspace' },
  { value: 'restaurant',   label: 'Restaurant / Café' },
  { value: 'hotel',        label: 'Hotel / Hospitality' },
  { value: 'other',        label: 'Other' },
]

const exhibTypes = [
  { value: 'dutch',       label: 'Planted — Dutch Style' },
  { value: 'hardscape',   label: 'Planted — Hardscape' },
  { value: 'terrarium',   label: 'Terrarium' },
  { value: 'paludarium',  label: 'Paludarium' },
  { value: 'unsure',      label: 'Let the Studio Decide' },
]

function Field({ id, label, children, className = '' }) {
  return (
    <div className={`${styles.field} ${className}`} id={`field-${id}`}>
      <label className={styles.label} htmlFor={id}>{label}</label>
      {children}
    </div>
  )
}

export default function Booking() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section className={styles.section} id="booking">
      {/* Info column */}
      <div className={styles.info}>
        <p className={`section-label reveal`}>§ Commission a Living Work</p>
        <div className={`thin-rule reveal`} />

        <h2 className={`${styles.heading} reveal reveal-d1`}>
          Begin your<br /><em>inquiry.</em>
        </h2>

        <p className={`${styles.desc} reveal reveal-d2`}>
          Bespoke commissions are taken by inquiry only. We work with a limited
          number of clients each season to ensure each installation receives our
          undivided attention.
        </p>

        <ul className={`${styles.contactList} reveal reveal-d3`}>
          <li>
            <span className={styles.contactLabel}>Studio</span>
            <span className={styles.contactVal}>
              Chhatrapati Sambhajinagar,<br />Maharashtra, India — 431001
            </span>
          </li>
          <li>
            <span className={styles.contactLabel}>Email</span>
            <span className={styles.contactVal}>
              <a href="mailto:hello@aqualeafcreation.in">hello@aqualeafcreation.in</a>
            </span>
          </li>
          <li>
            <span className={styles.contactLabel}>Phone</span>
            <span className={styles.contactVal}>
              <a href="tel:+919999999999">+91 99999 99999</a>
            </span>
          </li>
          <li>
            <span className={styles.contactLabel}>Instagram</span>
            <span className={styles.contactVal}>
              <a href="https://instagram.com/aqualeafcreation" target="_blank" rel="noopener noreferrer">
                @aqualeafcreation
              </a>
            </span>
          </li>
        </ul>

        <div className={`socialLinks reveal`}>
          {/* Instagram */}
          <a href="https://instagram.com/aqualeafcreation" target="_blank" rel="noopener noreferrer" className="socialLink" aria-label="Instagram">
            <svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" strokeWidth="0"/></svg>
          </a>
          {/* WhatsApp */}
          <a href="#" className="socialLink" aria-label="WhatsApp">
            <svg viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg>
          </a>
          {/* YouTube */}
          <a href="#" className="socialLink" aria-label="YouTube">
            <svg viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 00-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 1.96A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.1C5.12 19.56 12 19.56 12 19.56s6.88 0 8.6-.46a2.78 2.78 0 001.94-1.96 29 29 0 00.46-5.25 29 29 0 00-.46-5.47z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
          </a>
        </div>
      </div>

      {/* Form column */}
      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <div className={styles.row}>
          <Field id="input-name"    label="Your Name">
            <input className={styles.input} id="input-name" type="text" autoComplete="name" required />
          </Field>
          <Field id="input-contact" label="Phone / Email">
            <input className={styles.input} id="input-contact" type="text" autoComplete="email" required />
          </Field>
        </div>

        <div className={styles.row}>
          <Field id="input-space" label="Space Type">
            <select className={styles.select} id="input-space" required defaultValue="">
              <option value="" disabled />
              {spaceTypes.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
            </select>
          </Field>
          <Field id="input-type" label="Exhibition Type">
            <select className={styles.select} id="input-type" required defaultValue="">
              <option value="" disabled />
              {exhibTypes.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
            </select>
          </Field>
        </div>

        <Field id="input-vibe" label="Describe your vibe or reference" className={styles.full}>
          <input className={styles.input} id="input-vibe" type="text" />
        </Field>

        <Field id="input-message" label="Tell us more about your space" className={styles.full}>
          <textarea className={styles.textarea} id="input-message" rows={4} />
        </Field>

        <button type="submit" className={styles.submit} id="submitBtn">
          <span className={styles.submitText}>
            {submitted ? 'Inquiry Received' : 'Submit Inquiry'}
          </span>
          <span className={styles.submitArrow}>{submitted ? '✓' : '→'}</span>
        </button>
      </form>
    </section>
  )
}
