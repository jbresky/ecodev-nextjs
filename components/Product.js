import Image from "next/dist/client/image"
import styles from '../styles/product.module.css'
import styleStore from '../styles/store.module.css'

export default function Product({ item, showAs }) {

    if (showAs === 'Home') {
        return <article className={styles.article}>
            <div>
                <a>
                    <Image
                        className={styles.image}
                        src={`/img/products/${item.image}`}
                        alt={item.name}
                        width={350}
                        height={350}
                    />
                </a>
            </div>
            <a class={styles.gama} href="/products/eco-products">
                <button class={styles.gama}>Shop {item.name}</button>
            </a>
        </article>
    }

    if (showAs === 'Store') {
        return <article className={styleStore.article}>
            <div className={styleStore.info}>
                <a>
                    <Image
                        className={styles.image}
                        src={`/img/products/${item.image}`}
                        alt={item.name}
                        width={230}
                        height={230}
                    />
                </a>
            </div>
            <a class={styleStore.heart} href="/products/eco-products">
                <button class={styleStore.heart}>
                    <i class="fas fa-heart fav-red"></i>
                </button>
            </a>
            <div>
                <p className={styleStore.name}>{item.name}</p>
                {/* <p>{item.category}</p> */}
                <p className={styleStore.price}>$ {item.price}</p>
                {/* precio con descuento (calculo) */}
            </div>
        </article>
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