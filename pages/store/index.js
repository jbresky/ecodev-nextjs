import axios from 'axios';
import { useEffect, useState } from 'react'
import DropdownMenu from '../../components/DropdownMenu';
import Footer from '../../components/Footer'
import Layout from '../../components/Layout'
import Product from '../../components/Product'
// import StoreFilter from '../../components/StoreFilter';
import styles from '../../styles/store.module.css'
// import styleProduct from '../../styles/product.module.css'

export default function Store() {

  const [products, setProducts] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

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

  return (
    <>
      <Layout title='Store'>
        <hr style={{ width: '95%' }} />
        <div style={{ height: '3rem' }}></div>
        <div className={styles.store}>
          {/* <StoreFilter/> */}
          <DropdownMenu />
          {/* <div className={styles.items}>
            {products && products.map(item => {
              return <Product
                showAs='Store'
                item={item} />
            })}
          </div> */}
        </div>
        <div style={{height: '40rem'}}></div>
        <Footer />
      </Layout>

    </>
  )
}