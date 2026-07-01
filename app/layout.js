import { Outfit, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-sans',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata = {
  title: 'Aqua Leaf Creation — Minimalist Living Architecture',
  description:
    'Aqua Leaf Creation crafts bespoke aquascapes and terrariums — living artworks that merge botanical mastery with architectural intention. Based in Chhatrapati Sambhajinagar, Maharashtra.',
  keywords:
    'aquascaping, terrarium, paludarium, planted aquarium, bespoke aquarium, Dutch aquarium, hardscape, Chhatrapati Sambhajinagar, aqualeafcreation',
  metadataBase: new URL('https://aqualeafcreation.in'),
  openGraph: {
    title: 'Aqua Leaf Creation — Minimalist Living Architecture',
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
      className={`${outfit.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
