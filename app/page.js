import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Philosophy from '@/components/Philosophy'
import Exhibitions from '@/components/Exhibitions'
import QuoteStrip from '@/components/QuoteStrip'
import Footer from '@/components/Footer'
import ClientEffects from '@/components/ClientEffects'

export default function Home() {
  return (
    <>
      <ClientEffects />
      <Navbar />
      <main>
        <Hero />

        <Philosophy />

        <Exhibitions />
        <QuoteStrip />
      </main>
      <Footer />
    </>
  )
}
