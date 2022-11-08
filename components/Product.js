import Image from "next/dist/client/image"
import styles from '../styles/product.module.css'

export default function Product({ item, showAs }) {
    if (showAs === 'Home') {
        return <article style={{ display: 'flex', flexDirection: 'column' }}>
            <div>
                <a>
                    <Image
                        className={styles.image}
                        src={`/img/products/${item.image}`}
                        alt={item.name}
                        width={380}
                        height={400}
                    />
                </a>
            </div>
            <a class={styles.gama} href="/products/eco-products">
                <button class={styles.gama}>Shop {item.name}</button>
            </a>
            {/* <button>{item.off}</button> */}
            {/* <h3>{item.name}</h3> */}
            <div>
                {/* precio con y sin descuento */}
            </div>
            {/* <button>Agregar al carrito</button> */}
        </article>
    }
    if (showAs === 'Store') {
        // Store = sección productos. También sirve para la sección de "destacados"
    }
    if (showAs === 'Cart') {

    }
    if (showAs === 'Detail') {

    }
    if (showAs === 'Featured') {
        return (
            <div className={styles.featured}>
                <article>
                    <a>
                        <Image
                            className={styles.image}
                            src={`/img/products/${item.image}`}
                            alt={item.name}
                            width={220}
                            height={220}
                        />
                    </a>
                    <div>
                        <p>{item.name}</p>
                        {/* category name (sin negrita) */}
                        <p>$ {item.price}</p>
                    </div>
                </article>
            </div>
        )
    }
}