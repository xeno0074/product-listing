import Product from "./Product";

function ProductList({products}) {
    return (
        <div>
            {products.map((product) => <Product product={product} key={product.id}/>)}
        </div>
    );
}

export default ProductList;