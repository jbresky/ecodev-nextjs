import style from '../styles/footer.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
    return (
        <>
            <footer className={style.footer}>
                <section className={style.f1}>

                    <ul>
                        <h4>Sobre Nosotros</h4>
                        <li><a>Quiénes somos</a></li>
                        <li><a>Responsabilidad social</a></li>
                        <li><a>Programas de asociados</a></li>
                        <li><a>Afiliados</a></li>
                        <li><a>Vende eco</a></li>
                        <li><a>Empleo</a></li>
                    </ul>


                        <ul>
                            <h4>Ayuda</h4>
                            <li><a>Envíos</a></li>
                            <li><a>Devoluciones</a></li>
                            <li><a>Centros de ayuda</a></li>
                            <li><a>Normas de la comunidad</a></li>
                            <li><a>Centro para inversores</a></li>
                            <li><a>Contacto</a></li>
                        </ul>
            
                        <ul>
                            <h4>Planeta</h4>
                            <li><a>Misión 2050</a></li>
                            <li><a>Cero emisiones</a></li>
                            <li><a>Plastic-less</a></li>
                            <li><a>Green way</a></li>
                            <li><a>Centros de reciclaje</a></li>
                        </ul>

                        <ul>
                            <h4>Síguenos</h4>
                            <li>
                                <i className="fab fa-facebook-f"></i>
                                <a>
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <i className="fab fa-instagram"></i>
                                <a>
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <i className="fab fa-twitter"></i>
                                <a>
                                    Twitter
                                </a>
                            </li>
                            <li>
                                <i className="fab fa-pinterest"></i>
                                <a>
                                    Pinterest
                                </a>
                            </li>
                            <li>
                                <i className="fab fa-github"></i>
                                <Link href="https://github.com/jbresky/ecodev">
                                <a>
                                    Github
                                </a>
                                </Link>
                            </li>
                        </ul>
                </section>
                <section className={style.f2}>
                    <div className={style.box2}>
                        <ul className={style.ecoLogo}>
                            <li>
                                <Link href="/">
                                <a>
                                    <Image src="/img/back/eco-logo-3.png" alt="logo2" width={125} height={72}/>
                                </a>
                                </Link>
                            </li>
                        </ul>
                        <ul className={style.list3}>
                            <li><a>Condiciones de uso</a></li>
                            <li><a>Política de privacidad</a></li>
                            <li><a>Política de cookies</a></li>
                        </ul>
                    </div>
                </section>

                <section className={style.f3}>
                    <div className={style.payment}>
                        <ul>
                            <li>
                                <Image src="/img/back/visa.png" alt="visa" width={55} height={30}/>
                            </li>
                            <li>
                                <Image src="/img/back/mastercard.png" alt="mastercard" width={55} height={30}/>
                            </li>
                            <li>
                            <Image src="/img/back/amex.png" alt="amex" width={55} height={30}/>                            
                            </li>
                            <li>
                            <Image src="/img/back/paypal.png" alt="paypal" width={55} height={30}/>                            
                            </li>
                            <li>
                                <Image src="/img/back/pay.png" alt="pay" width={55} height={30}/>
                            </li>
                            <li>
                            <Image src="/img/back/ipay.png" alt="ipay" width={55} height={30}/>
                            </li>
                            <li>
                                <Image src="/img/back/afterpay.png" alt="afterpay" width={55} height={30}/>
                            </li>
                        </ul>
                    </div>
                    <div className={style.apps}>

                        <ul>
                            <li>
                                <Image src="/img/back/appstore2.png" alt="appstore" width={122} height={40}/>
                                </li>
                            <li>
                            <Image src="/img/back/googleplay2.png" alt="gplay" width={122} height={40}/>
                               </li>
                        </ul>

                    </div>
                    <div className={style.reserved}>
                        <span className={style.reservedSpan}>&copy; Ecodev. Todos los derechos reservados</span>
                    </div>
                </section>
            </footer>
        </>
    )
}