import React, {useState} from 'react';
import ProductSearch from './ProductSearch';
import ProductTable from './ProductTable';

function ProductList({ products, storeId, categories}){

    const [search, setSearch] = useState("")
    const displayedProducts = [...products].filter(product => product.title.toLowerCase().includes(search.toLowerCase()))
    
    
    // function handleFilterByCategory(categoryId){
    //     console.log(categoryId)
    //     if (categoryId == "All Categories"){
    //         return displayedProducts.filter(p => p.categories.find(c => c.id == categoryId))
    //     } else {
    //         // const filteredProductsByCat = products.filter(p => p.categories.find(c => c.id == categoryId))
    //         // setFilteredProducts(filteredProductsByCat)
    //     }
    // }

    return (
        <>
        <ProductSearch products={products} search={search} setSearch={setSearch} storeId={storeId} categories={categories}/>
        <ProductTable products={displayedProducts}/>
        </>
    )
}
export default ProductList;