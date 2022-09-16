import Head from "next/head";
import Menu from "./menu";

export default function Layout() {
    return (
        <>
            <Head>
                <title>N - Ecodev</title>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons+Outlined&display=optional" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=optional" rel="stylesheet" />
                {/* <link rel="stylesheet" href="/css/styles.css"/> */}
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://fonts.sandbox.google.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=optional" />
                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet" />
            </Head>

            <Menu />
        </>
    )
}