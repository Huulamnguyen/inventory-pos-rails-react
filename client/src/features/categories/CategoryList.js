import React from 'react';
import {Accordion, Button} from 'react-bootstrap';
import CategoryAccordionItem from './CategoryAccordionItem';

function CategoryList({categories, products}) {

    return (
        <>
        <Accordion>
            {categories.map(category => <CategoryAccordionItem key={category.id} category={category} products={products} />)}
        </Accordion>
        <Button className="mt-3" variant="outline-dark">Add New Category</Button>
        </>
    )
}

export default CategoryList;