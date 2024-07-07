import Product from "./Product";

function ProductList({products}) {
    return (
        <>
            {products.map((product) => <Product product={product} key={product.id}/>)}
        </>
    );
}

export default ProductList;