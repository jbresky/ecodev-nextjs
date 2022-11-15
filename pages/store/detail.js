import axios from "axios";
import { useState, useEffect } from "react";
import Product from "../../components/Product";

export default function Detail() {

    const [product, setProduct] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        axios.
            // get('/api/products/${id}??')
            get('/api/products/detail')
            .then(({ data }) => {
                setProduct(data.product)
            })
            .catch(error => {
                let message;
                if (error.response) {
                    message = error.response.data.message;
                } else {
                    message = error.message;
                }
                setErrorMessage(message)
            })
    }, [])

    return (
        <>
            <div>
                <Product
                    showAs='Detail'
                    item={product}
                    key={product.id}
                />
            </div>
        </>
    )
}