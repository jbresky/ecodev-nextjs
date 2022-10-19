import style from '../styles/footer.module.css'

export default function SmallFooter() {
    return (
         <div style={{ display: 'flex', justifyContent: 'center', height: '50px'}}>
        <span className={style.reservedSpan}>&copy; Ecodev. Todos los derechos reservados</span>
    </div>
    )
}