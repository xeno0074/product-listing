import { useState, useEffect } from 'react';
import './Filter.css'
import './Product.css'

function Filter({selectedCategory, setSelectedCategory}) {


    return (
        <div className='filter-box'>
            <div className='filter-spacing'><b>Filter Products</b></div>
            <CategoryFilter selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
            {/* <PriceRangeFilter priceMin={10} priceMax={100} minRangeSize={5}/> */}
        </div>
    );
}

export default Filter;

function CategoryFilter({selectedCategory, setSelectedCategory}) {
    const [allCategories, setAllCategories] = useState([]);

    const fetchCategories = async () => {
        const response = await fetch('https://fakestoreapi.com/products/categories');
        const data = await response.json();
        setAllCategories(data);
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    const handleClick = (e) => {
        setSelectedCategory('/category/' + e.target.value);
    };

    const categoryFilters = allCategories.map((category) => {
        return (
            <div key={category} style={{margin: '15px 5px'}}>
                <label>
                    <input type="radio" name="category" value={category} onClick={handleClick}/>
                    <span key={category} className='product-category'>{category}</span>
                </label>
            </div>
        );
    });

    return (
        <div className='filter-spacing'>
            <div className='filter-spacing'>Product Categories</div>
            {categoryFilters}
        </div>
    );
}

// function PriceRangeFilter({priceMin, priceMax, minRangeSize}) {
//     return (
//         <div>
//             <span>Price</span>
//             <input type="range" min={priceMin} max={priceMax} defaultValue={0}/>
//             <input type="range" min={priceMin} max={priceMax} defaultValue={minRangeSize}/>
//         </div>
//     );
// }