import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import styles from './GalleryPage.module.css'
import { galleryData } from '@/lib/galleryData'
import ShareButtons from '@/components/ShareButtons'

export const metadata = {
  title: 'Gallery | AquaLeaf Creation',
  description: 'View our gallery of bespoke luxury aquariums, terrariums, and planted aquascapes.'
}

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.header}>
          <h1 className={styles.title}>Gallery</h1>
          <p className={styles.subtitle}>A curated collection of our living architecture.</p>
        </div>
        
        <div className={styles.grid}>
          {galleryData.map((item, idx) => (
            <div key={idx} className={styles.gridItem}>
              <Image 
                src={item.img} 
                alt={item.title} 
                fill 
                className={styles.img} 
                style={{objectFit: 'cover'}} 
              />
              <div className={styles.vignette}></div>
              
              <div className={styles.overlay}>
                <div className={styles.overlayText}>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                  <p className={styles.itemCategory}>{item.category}</p>
                </div>
                <ShareButtons item={item} />
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}
