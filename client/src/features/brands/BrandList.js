import React, {useState} from 'react';
import {Accordion, Button} from 'react-bootstrap';
import BrandAccordionItem from './BrandAccordionItem';
import NewBrandForm from './NewBrandForm';

function BrandList({brands, products, brandProducts}){

    const [showNewBrandForm, setShowNewBrandForm] = useState(false)

    return (
        <>
        <Accordion>
            {brands.map(brand => <BrandAccordionItem 
                                    key={brand.id} 
                                    brand={brand} 
                                    // products are all products in the store
                                    products={products} 
                                    brandProducts={brandProducts}/>)}
        </Accordion>
        <Button onClick={() => setShowNewBrandForm(!showNewBrandForm)} variant="outline-dark" className="mt-3 btn-sm">{showNewBrandForm ? "Cancel" : "Add New Brand"}</Button>
        {showNewBrandForm ? <NewBrandForm setShowNewBrandForm={setShowNewBrandForm}/> : null}
        </>
    )
}

export default BrandList;