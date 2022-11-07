import styles from '../styles/Home.module.css'

export default function BrandSignals() {
    return (
        <section class={styles.iconText}>
                    <div class={styles.container}>
                        <div class={styles.icon}>
                            <span class="fas fa-leaf"></span>
                        </div>
                        <div class="text">
                            <ul>
                                <li> <span class={styles.title}>Socially resposible production</span></li>
                                <li> <span class="desc">We invest in programs to offset all carbon emissions.</span></li>
                            </ul>
                        </div>
                    </div>
                    <div class={styles.container}>
                        <div class={styles.icon}>
                            <span class="material-icons-outlined">
                                thumb_up
                            </span>
                        </div>
                        <div class="text">
                            <ul>
                                <li> <span class={styles.title}>Zero waste</span></li>
                                <li> <span class="desc">Less plastic for the world</span></li>
                            </ul>
                        </div>
                    </div>
                    <div class={styles.container}>
                        <div class={styles.icon}>
                            <span class="material-icons-outlined">
                                currency_bitcoin
                            </span>
                        </div>
                        <div class="text">
                            <ul>
                                <li> <span class={styles.title}>Bitcoin</span></li>
                                <li> <span class="desc">We accept Bitcoin as payment method</span></li>
                            </ul>
                        </div>
                    </div>
                </section>
    )
}