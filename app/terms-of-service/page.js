import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Terms of Service | AquaLeaf Creation',
  description: 'Terms of Service for AquaLeaf Creation.'
}

export default function TermsOfService() {
  return (
    <>
      <Navbar />
      <main style={{ padding: '160px 5vw 80px', minHeight: '100vh', background: '#000', color: '#fff', fontFamily: 'var(--font-sans)', lineHeight: '1.8' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', marginBottom: '2rem', letterSpacing: '0.05em' }}>Terms of Service</h1>
          <p style={{ marginBottom: '1.5rem', color: 'rgba(255,255,255,0.7)' }}>Last updated: July 2026</p>
          <p style={{ marginBottom: '1.5rem' }}>Welcome to AquaLeaf Creation!</p>
          <p style={{ marginBottom: '1.5rem' }}>These terms and conditions outline the rules and regulations for the use of AquaLeaf Creation's Website, located at aqualeafcreation.in.</p>
          
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', marginTop: '3rem', marginBottom: '1.5rem', color: '#d4a340' }}>Commission Enquiries</h2>
          <p style={{ marginBottom: '1.5rem' }}>All designs, proposals, and conceptual artwork provided prior to formal agreement remain the intellectual property of AquaLeaf Creation. Project commencement is subject to a formal contract and deposit.</p>
          
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', marginTop: '3rem', marginBottom: '1.5rem', color: '#d4a340' }}>License</h2>
          <p style={{ marginBottom: '1.5rem' }}>Unless otherwise stated, AquaLeaf Creation and/or its licensors own the intellectual property rights for all material on AquaLeaf Creation. All intellectual property rights are reserved. You may access this from AquaLeaf Creation for your own personal use subjected to restrictions set in these terms and conditions.</p>
          
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', marginTop: '3rem', marginBottom: '1.5rem', color: '#d4a340' }}>Disclaimer</h2>
          <p style={{ marginBottom: '1.5rem' }}>To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Living ecosystems are subject to natural variations and require appropriate maintenance to ensure longevity.</p>
        </div>
      </main>
      <Footer />
    </>
  )
}
