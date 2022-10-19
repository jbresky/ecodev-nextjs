// import styles from '../styles/Home.module.css'
// import Layout from '../components/Layout'
// import Link from 'next/link'
// import { useEffect, useState } from 'react'
// import Product from '../components/Product'
// import axios from 'axios';

export default function Home() {
  return <h1>Hi</h1>
  // const [products, setProducts] = useState([]);
  // const [errorMessage, setErrorMessage] = useState('');

  // useEffect(() => {
  //   axios
  //     .get('/api/products')
  //     .then(({ data }) => {
  //       setProducts(data.products)
  //     })
  //     .catch(error => {
  //       let message;
  //       if (error.response) {
  //         message = error.response.data.message;
  //       } else {
  //         message = error.message;
  //       }
  //       setErrorMessage(message);
  //     })
  // }, [])
  // return (
  //   <>
  //     <Layout title='Home'>
  //       <section className={styles.banner}>
  //         <div className={styles.bannerContent}>
  //           <Link href='/store'>
  //             <a>Ver productos</a>
  //           </Link>
  //         </div>
  //       </section>
  //       <div className='items'>
  //         <h1>Ofertas</h1>
  //         {products && products.map(item => {
  //           if (item.insale === 1) {
  //             return <Product
  //               showAs='home'
  //               key={item.id}
  //               item={item}
  //             />
  //           }
  //         })}
  //       </div>
  //     </Layout>
  //   </>
  // )
}
