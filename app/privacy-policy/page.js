import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Privacy Policy | AquaLeaf Creation',
  description: 'Privacy Policy for AquaLeaf Creation.'
}

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main style={{ padding: '160px 5vw 80px', minHeight: '100vh', background: '#000', color: '#fff', fontFamily: 'var(--font-sans)', lineHeight: '1.8' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', marginBottom: '2rem', letterSpacing: '0.05em' }}>Privacy Policy</h1>
          <p style={{ marginBottom: '1.5rem', color: 'rgba(255,255,255,0.7)' }}>Last updated: July 2026</p>
          <p style={{ marginBottom: '1.5rem' }}>At AquaLeaf Creation, accessible from aqualeafcreation.in, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by AquaLeaf Creation and how we use it.</p>
          
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', marginTop: '3rem', marginBottom: '1.5rem', color: '#d4a340' }}>Information We Collect</h2>
          <p style={{ marginBottom: '1.5rem' }}>The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.</p>
          <p style={{ marginBottom: '1.5rem' }}>If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.</p>
          
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', marginTop: '3rem', marginBottom: '1.5rem', color: '#d4a340' }}>How We Use Your Information</h2>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <li>Provide, operate, and maintain our website</li>
            <li>Improve, personalize, and expand our website</li>
            <li>Understand and analyze how you use our website</li>
            <li>Develop new products, services, features, and functionality</li>
            <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
            <li>Send you emails</li>
            <li>Find and prevent fraud</li>
          </ul>
        </div>
      </main>
      <Footer />
    </>
  )
}
