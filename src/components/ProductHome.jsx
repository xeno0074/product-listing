import { useState, useEffect } from "react";
import Filter from "./Filter";
import ProductList from "./ProductsList";

function ProductHome() {
    const url = 'https://fakestoreapi.com/products';

    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');

    const fetchProducts = async (url) => {
        const response = await fetch(url);
        const data = await response.json();
        setProducts(data);
    };

    useEffect(() => {
        let filterUrl = url + selectedCategory;
        fetchProducts(filterUrl);
    }, [selectedCategory]);

    return (
        <div>
            <Filter
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
            />
            <ProductList products={products}/>
        </div>
    );
}

export default ProductHome;