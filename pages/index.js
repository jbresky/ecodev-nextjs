import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Product from '../components/Product'
import axios from 'axios';
import Footer from '../components/Footer'
import stylesProduct from '../styles/product.module.css'
import BrandSignals from '../components/BrandSignals'
import Newsletter from '../components/Newsletter'


export default function Home() {
  const [products, setProducts] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    axios
      .get('/api/products')
      .then(({ data }) => {
        setProducts(data.products)
      })
      .catch(error => {
        let message;
        if (error.response) {
          message = error.response.data.message;
        } else {
          message = error.message;
        }
        setErrorMessage(message);
      })
  }, []);

  return (
    <>
      <Layout title='Home'>
        <section className={styles.banner}>
          <div className={styles.bannerContent}>
            <Link href='/store'>
              <a>See products</a>
            </Link>
          </div>
        </section>
        <section className={styles.main}>
          <h1 style={{fontWeight: "normal" }}>Shop product range</h1>
          <div className={stylesProduct.items}>
            {products && products.map(item => {
              console.log(products);
              if (item.insale === null) {
                return <Product
                  showAs='Home'
                  key={item.id}
                  item={item}
                />
              }
            })}
          </div>
          <BrandSignals />
          <div className={stylesProduct.items}>
            {products && products.map(item => {
              if (item.insale === null) {
                return <Product
                  showAs='Home'
                  key={item.id}
                  item={item}
                />
              }
            })}
          </div>
          <div className={stylesProduct.items}>
            {products && products.map(item => {
              if (item.insale === 1) {
                return <Product
                  showAs='Featured'
                  key={item.id}
                  item={item}
                />
              }
            })}
          </div>
          <Newsletter/>
        </section>
      </Layout>
      <Footer />
    </>
  )
}
