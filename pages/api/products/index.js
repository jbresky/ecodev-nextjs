import Product from "../../../database/models/Product";

export default async function getProducts(req, res){
    try {
        const products = await Product.findAll();
        res.status(200).json({ products });

    } catch (error) {
        res.status(400).json({
            error_code: 'get_products',
            message: error.message
        })
    }
    
}
