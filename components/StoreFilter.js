import { useState } from 'react'
import DropdownMenu from './DropdownMenu'
import styles from '../styles/store.module.css'

export default function StoreFilter() {
    return (
        <>
            <div className={styles.storeMenu}>
                <h1>Filters</h1>
                <DropdownMenu />
            </div>
        </>
        // <div className={styles.sideFilter}>
        //     <div className={styles.aside}>
        //         <h2>Filtrar</h2>

        //         <ul>
        //             <li className={styles.filterButton}>

        //                 <button className={styles.searchCategory}>
        //                     <span>Categoría</span>
        //                     <div className={styles.transform}>
        //                         <span>
        //                             <i class="fas fa-angle-up rotate-90"></i>
        //                         </span>
        //                     </div>
        //                 </button>

        //                 <ul className={styles.dropdown | 'hide'}>
        //                     <li>
        //                         <button className={styles.allCategory}>
        //                             <span><a>Todas las categorías</a></span>
        //                         </button>
        //                         <ul className={styles.listCategory}>
        //                             <li><a>Personal Care</a></li>
        //                             <li><a>Health & Beauty</a></li>
        //                             <li><a>Natural medicine</a></li>
        //                             <li><a>Eco products</a></li>
        //                             <li><a>Deco</a></li>
        //                         </ul>
        //                     </li>
        //                 </ul>
        //             </li>
        //             <li className={styles.filterButton}>
        //                 <button className={styles.searchPrice}>
        //                     <span>Precio</span>
        //                     <div className={styles.transform}>
        //                         <span>
        //                             <i class="fas fa-angle-up rotate-90"></i>
        //                         </span>
        //                     </div>
        //                 </button>

        //                 <div className={styles.dropdown | 'filterPrice' | 'hide'}>
        //                     <form>
        //                         <label>
        //                             <input type="checkbox" />
        //                             <span>$</span>
        //                         </label>
        //                         <label>
        //                             <input type="checkbox" />
        //                             <span>$$</span>
        //                         </label>
        //                         <label>
        //                             <input type="checkbox" />
        //                             <span>$$$</span>
        //                         </label>
        //                     </form>
        //                 </div>
        //             </li>
        //         </ul>

        //     </div>
        // </div>
    )
}
