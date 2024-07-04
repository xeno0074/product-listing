import './Product.css'

function Product({ product }) {
    return (
        <div className='product-box'>
            <div className='product-title'>{product.title}</div>

            <div style={{margin: '15px 5px'}}><span className='product-category'>{product.category}</span></div>

            <div className='product-price'>{'$' + product.price}</div>

            <img src={product.image} alt="product" className='product-image' />
            
            <div><b>Product Description</b></div>
            <p>{product.description}</p>

            <span>{product.rating.rate} / 5</span>
            <br/>
            <span>{product.rating.count} ratings</span>
        </div>
    );
}

export default Product;