import Head from "next/head";
import Menu from "./menu";
import style from '../styles/layout.module.css'

export default function Layout({ title, children }) {
    return (
        <>
            <Head>
                <title>N-Ecodev {title ? `| ${title}` : 'Ecodev'}</title>
            </Head>

            <Menu />

            <div className={style.container}>{children}</div>
        </>
    )
}