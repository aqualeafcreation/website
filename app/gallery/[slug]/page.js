import { galleryData } from '@/lib/galleryData'
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import styles from './GalleryDetail.module.css'
import Link from 'next/link'

export async function generateStaticParams() {
  return galleryData.map((item) => ({
    slug: item.slug,
  }))
}

export async function generateMetadata({ params }) {
  const item = galleryData.find((g) => g.slug === params.slug)
  if (!item) return {}

  const url = `https://aqualeafcreation.in/gallery/${item.slug}`

  return {
    title: `${item.title} | AquaLeaf Creation Gallery`,
    description: item.desc,
    openGraph: {
      title: `${item.title} | AquaLeaf Creation`,
      description: item.desc,
      url: url,
      images: [
        {
          url: item.img,
          width: 800,
          height: 800,
          alt: item.title,
        },
      ],
      type: 'website',
    },
  }
}

export default function GalleryDetail({ params }) {
  const item = galleryData.find((g) => g.slug === params.slug)
  if (!item) notFound()

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.container}>
          <Link href="/gallery" className={styles.backBtn}>&larr; Back to Gallery</Link>
          <div className={styles.imgWrapper}>
            <Image src={item.img} alt={item.title} fill className={styles.img} style={{objectFit: 'cover'}} />
          </div>
          <div className={styles.info}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.category}>{item.category}</p>
            <p className={styles.desc}>{item.desc}</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
