import React, {useState} from 'react';
import ProductSearch from './ProductSearch';
import ProductTable from './ProductTable';

function ProductList({ products, storeId, categories}){

    const [search, setSearch] = useState("")
    const displayedProducts = [...products].filter(product => product.title.toLowerCase().includes(search.toLowerCase()))        
    return (
        <>
        <ProductSearch products={products} search={search} setSearch={setSearch} storeId={storeId} categories={categories}/>
        <ProductTable products={displayedProducts}/>
        </>
    )
}
export default ProductList;