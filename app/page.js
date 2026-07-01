import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Philosophy from '@/components/Philosophy'
import Exhibitions from '@/components/Exhibitions'
import Process from '@/components/Process'
import QuoteStrip from '@/components/QuoteStrip'
import Booking from '@/components/Booking'
import Footer from '@/components/Footer'
import ClientEffects from '@/components/ClientEffects'

export default function Home() {
  return (
    <>
      <ClientEffects />
      <Navbar />
      <main>
        <Hero />
        <div className="sectionDivider" data-label="The Studio" data-num="§ 01" />
        <Philosophy />
        <div className="sectionDivider" data-label="The Exhibitions" data-num="§ 02" />
        <Exhibitions />
        <div className="sectionDivider" data-label="The Process" data-num="§ 03" />
        <Process />
        <QuoteStrip />
        <div className="sectionDivider" data-label="The Sanctum" data-num="§ 04" />
        <Booking />
      </main>
      <Footer />
    </>
  )
}
