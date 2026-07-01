import { Cormorant_Garamond, Space_Grotesk, Roboto_Mono } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-sans',
  display: 'swap',
})

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata = {
  title: 'Aqua Leaf Creation — Living Architecture for Modern Spaces',
  description:
    'Aqua Leaf Creation crafts bespoke aquascapes and terrariums — living artworks that merge botanical mastery with architectural intention. Based in Chhatrapati Sambhajinagar, Maharashtra.',
  keywords:
    'aquascaping, terrarium, paludarium, planted aquarium, bespoke aquarium, Dutch aquarium, hardscape, Chhatrapati Sambhajinagar, aqualeafcreation',
  metadataBase: new URL('https://aqualeafcreation.in'),
  openGraph: {
    title: 'Aqua Leaf Creation — Living Architecture for Modern Spaces',
    description:
      'Bespoke aquascapes and terrariums crafted with architectural precision in Chhatrapati Sambhajinagar, Maharashtra.',
    url: 'https://aqualeafcreation.in',
    siteName: 'Aqua Leaf Creation',
    locale: 'en_IN',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${spaceGrotesk.variable} ${robotoMono.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
