import React, {useState} from 'react';
import ProductSearch from './ProductSearch';
import ProductTable from './ProductTable';

function ProductList({products}){

    const [search, setSearch] = useState("")

    const displayedProducts = [...products].filter(product => product.title.toLowerCase().includes(search.toLowerCase()))

    return (
        <>
        <ProductSearch search={search} setSearch={setSearch}/>
        <ProductTable products={displayedProducts}/>
        </>
    )
}
export default ProductList;