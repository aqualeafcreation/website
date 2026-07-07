import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Philosophy from '@/components/Philosophy'
import Exhibitions from '@/components/Exhibitions'
import QuoteStrip from '@/components/QuoteStrip'
import Gallery from '@/components/Gallery'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <QuoteStrip 
          title="AquaLeaf Creation"
          text="&ldquo;Living Architecture. Bespoke aquascapes and terrariums.&rdquo;" 
          subQuote={true}
          showScroll={true}
          noTopPadding={true}
        />

        <Philosophy />
        <QuoteStrip text="&ldquo;Creating nature is the ultimate luxury.&rdquo;" />

        <Exhibitions />
        <QuoteStrip text="&ldquo;True luxury is owning a living, breathing jungle.&rdquo;" />
        <Gallery />
      </main>
      <Footer />
    </>
  )
}
