import { Html, Head, Main, NextScript } from 'next/document'

export default function Document(){
    return (
        <Html>
            <Head>
                 <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons+Outlined&display=swap" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="/css/styles.css"/>
                <link rel="icon" href="/favicon.ico" />
                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet" />
                <link rel="stylesheet" href="https://fonts.sandbox.google.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap" />
                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet" />
            </Head>
            <body>
                <Main/>
                <NextScript/>
            </body>
        </Html>
    )
}