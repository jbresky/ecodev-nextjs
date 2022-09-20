import Link from 'next/link'
import style from '../styles/menu.module.css'

export default function Menu() {
    return (
        <>
        <nav className={style.navbar}/>
        <nav className={style.header}>
            <ul>
                <li className={style.burger}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </li>
                <div className={style.search}>
                    <form action="/products/search" method="GET">
                        <input type="search" name="product" placeholder="Search" />
                        <button type="submit" className="fas fa-search"></button>
                    </form>
                </div>
                <li className={style.logo}>
                    <Link href='/'>
                        <a>
                            <Image src="/img/Logo-v2.ico" alt="logo"/>
                        </a>
                    </Link>
                </li>
                <div className={style.items}>
                    <li>
                        <Link href='/store'>
                            <a className={style.textRoutes}>Productos</a>
                        </Link>
                    </li>
                    <li>
                        <a href='#' className={style.textRoutes}>Nosotros</a></li>
                    <li>
                        <a href='#' className={style.textRoutes}>Medioambiente</a>
                    </li>
                    <li>
                        <Link href='#'>
                            <a className={style.textRoutes}>Únete</a>
                        </Link>
                    </li>
                </div>
                <li className={style.heart}>
                    <Link href='#'>
                    <a>
                        <span class="material-icons-outlined">favorite_border</span>
                        </a>
                        </Link>
                </li>
                <li className={style.shop}><a href='/api/product/'><span class="material-icons-outlined">shopping_cart</span></a></li>

                {/* <li className={style.user}><a href='/users/login'><img src="/img/users/<%= userData.avatar %> " width="40" style="border-radius: 50%; height: 40px; object-fit: cover;" alt="User"/></a></li> */}

                <li className={style.user}>
                    <Link href='/users/login'>
                    <a>
                        <span class="material-icons-outlined">
                    account_circle
                </span>
                </a>
                </Link>
                </li>
            </ul>
        </nav>
        </>
    )
}