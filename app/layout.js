import { Jost, Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-heading',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['200', '300', '400'],
  variable: '--font-sans',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['400'],
  variable: '--font-serif',
  display: 'swap',
})

export const metadata = {
  title: 'AquaLeaf Creation — Minimalist Living Architecture',
  description:
    'AquaLeaf Creation crafts bespoke aquascapes and terrariums — living artworks that merge botanical mastery with architectural intention. Based in Chhatrapati Sambhajinagar, Maharashtra.',
  keywords:
    'aquascaping, terrarium, paludarium, planted aquarium, bespoke aquarium, Dutch aquarium, hardscape, Chhatrapati Sambhajinagar, aqualeafcreation',
  metadataBase: new URL('https://aqualeafcreation.in'),
  openGraph: {
    title: 'AquaLeaf Creation — Minimalist Living Architecture',
    description:
      'Bespoke aquascapes and terrariums crafted with architectural precision in Chhatrapati Sambhajinagar, Maharashtra.',
    url: 'https://aqualeafcreation.in',
    siteName: 'AquaLeaf Creation',
    locale: 'en_IN',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${jost.variable} ${inter.variable} ${playfair.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
