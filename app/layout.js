import { Marcellus, Montserrat, Bodoni_Moda, Playfair_Display } from 'next/font/google'
import './globals.css'
import ClientEffects from '@/components/ClientEffects'

/* Premium Display (for the 3D titles and logos) */
const marcellus = Marcellus({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-display',
  display: 'swap',
})

/* Clean Modern UI / Sublines */
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500'],
  variable: '--font-sans',
  display: 'swap',
})

/* High-end Editorial / Quotes */
const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
})

/* Elegant serif for Quotes */
const playfair = Playfair_Display({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['400', '500'],
  variable: '--font-cursive',
  display: 'swap',
})

export const metadata = {
  title: 'AquaLeaf Creation | Premium Aquarium & Fish Tank in Chhatrapati Sambhajinagar',
  description:
    'AquaLeaf Creation crafts bespoke aquascapes, luxury aquariums, fish tanks, and terrariums. Living artworks merging botanical mastery with architectural intention in Chhatrapati Sambhajinagar, Maharashtra.',
  keywords:
    'aquarium, fish tank, aquascaping, terrarium, paludarium, planted aquarium, bespoke aquarium, Dutch aquarium, hardscape, Chhatrapati Sambhajinagar, aqualeafcreation, luxury aquarium, nature aquarium',
  metadataBase: new URL('https://aqualeafcreation.in'),
  openGraph: {
    title: 'AquaLeaf Creation | Premium Aquarium & Fish Tank in Chhatrapati Sambhajinagar',
    description:
      'Bespoke aquascapes, luxury fish tanks, and terrariums crafted with architectural precision in Chhatrapati Sambhajinagar, Maharashtra.',
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
      className={`${marcellus.variable} ${montserrat.variable} ${bodoni.variable} ${playfair.variable}`}
    >
      <body>
        <ClientEffects />
        {children}
      </body>
    </html>
  )
}
