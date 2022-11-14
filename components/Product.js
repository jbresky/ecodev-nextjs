import Image from "next/dist/client/image"
import styles from '../styles/product.module.css'
import styleStore from '../styles/store.module.css'

export default function Product({ item, showAs }) {

    if (showAs === 'Home') {
        return <article className={styles.article}>
            <div>
                <a href="/store/detail">
                    <Image
                        className={styles.image}
                        src={`/img/products/${item.image}`}
                        alt={item.name}
                        width={350}
                        height={350}
                    />
                </a>
            </div>
            <a class={styles.gama}>
                <button class={styles.gama}>Shop {item.name}</button>
            </a>
        </article>
    }

    if (showAs === 'Store') {
        return <article className={styleStore.article}>
            <div>
                <a>
                    <Image
                        className={styles.image}
                        src={`/img/products/${item.image}`}
                        alt={item.name}
                        width={200}
                        height={200}
                    />
                </a>
            </div>
            <a class={styleStore.heart} href="/products/eco-products">
                <button class={styleStore.heart}>
                    <i class="fas fa-heart fav-red"></i>
                </button>
            </a>
            <div className={styleStore.info}>
                <span className={styleStore.name}>{item.name}</span>
                {/* <p>{item.category}</p> */}
                <span className={styleStore.price}>$ {item.price}</span>
                {/* precio con descuento (calculo) */}
            </div>
        </article>
    }

    if (showAs === 'Cart') {

    }

    if (showAs === 'Detail') {
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
        <a class={styles.gama}>
            <button class={styles.gama}>Shop {item.name}</button>
        </a>
    </article>

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