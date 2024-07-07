import { useState, useEffect } from "react";
import Filter from "./Filter";
import ProductList from "./ProductsList";

function ProductHome() {
    const fakeStoreApi = 'https://fakestoreapi.com/products';

    const [url, setUrl] = useState(fakeStoreApi);
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        if(selectedCategory){
            setUrl(fakeStoreApi + '/category/' + selectedCategory);

            let base_url = 'http://192.168.0.119:3000/';
            let path = base_url + '?category=' + selectedCategory;

            window.history.replaceState(null, '', path);
        }
    }, [selectedCategory]);

    useEffect(() => {
        const fetchProducts = async (url) => {
            const response = await fetch(url);
            const data = await response.json();
            setProducts(data);
        };

        fetchProducts(url);
    }, [url]);

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