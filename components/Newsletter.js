import Image from 'next/image'
import style from '../styles/newsletter.module.css'

export default function Newsletter() {
    return (
        <div className={style.newsletter}>
            <div className={style.subscribe}>
                <Image
                    src='/img/back/mail.png'
                    alt='mailing'
                    width={100}
                    height={83}
                    className={style.mailing}
                />
                <span>10% off, promos, and the bests eco-products ever!
                </span>
            </div>
            <div>
                <form>
                    <input type='email' name='news-email' placeholder='Your email address'/>
                    <button>
                        <i className='far fa-paper-plane'></i>
                    </button>
                </form>
            </div>
            <p>By submitting, you agree to our <a>Privacy Policy</a> and to receive our promotional emails (opt out any time).</p>
        </div>
    )
}