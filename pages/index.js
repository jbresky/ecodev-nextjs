import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout'
import Link from 'next/link'

export default function Home() {
  return (

    <>    
    <Layout />
      <section className={styles.banner}>
        <div className={styles.bannerContent}>
          <Link href='/store'>
            <a>Ver productos</a>
          </Link>
        </div>
      </section>

    </>
  )
}
