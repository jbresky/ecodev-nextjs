import Image from "next/dist/client/image"

export default function Product({ item, showAs }){
    if(showAs === 'home'){
    return <article style={{display: 'flex', flexDirection: 'column'}}>
            <div>
                <a>
                    <Image 
                    src={`/img/products/${item.image}`}
                    alt={item.name}
                    width={250}
                    height={250}
                    />
                </a>
            </div>
            <button>{item.off}</button>
            <h3>{item.name}</h3>
            <div>
                {/* precio con y sin descuento */}
            </div>
            <button>Agregar al carrito</button>
        </article>
    }
    if(showAs === 'store'){

    }
    if(showAs === 'cart'){

    }
}